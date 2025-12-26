package com.slooze.foodordering.service;

import com.slooze.foodordering.entity.*;
import com.slooze.foodordering.exception.UnauthorizedActionException;
import com.slooze.foodordering.repository.MenuItemRepository;
import com.slooze.foodordering.repository.OrderRepository;
import com.slooze.foodordering.repository.RestaurantRepository;
import com.slooze.foodordering.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestParam;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class OrderService {

    private final OrderRepository orderRepository;
    private final RestaurantRepository restaurantRepository;
    private final UserRepository userRepository;
    private final MenuItemRepository menuItemRepository;


    public Order getOrder(Long orderId,
                          Long userId){
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));

        Order order = orderRepository.findById(orderId)
                .orElseThrow(() -> new RuntimeException("Order not found"));

        if (user.getRole() != Role.ADMIN && !order.getUser().getId().equals(userId)) {
            throw new UnauthorizedActionException("Access denied");
        }
        return order;
    }

    public Order createOrder(Long userId, Long restaurantId, List<Long> menuItemIds) {

        if (menuItemIds == null || menuItemIds.isEmpty()) {
            throw new IllegalArgumentException("Order must contain at least one item");
        }

        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));

        Restaurant restaurant = restaurantRepository.findById(restaurantId)
                .orElseThrow(() -> new RuntimeException("Restaurant not found"));

        // Country restriction (BONUS OBJECTIVE)
        if (user.getRole() != Role.ADMIN &&
                !user.getCountry().equals(restaurant.getCountry())) {
            throw new UnauthorizedActionException("Country access denied");
        }

        // Count menu item quantities (handles duplicates)
        Map<Long, Long> itemCountMap = menuItemIds.stream()
                .collect(Collectors.groupingBy(id -> id, Collectors.counting()));

        List<OrderItem> items = new ArrayList<>();
        double totalAmount = 0.0;

        for (Map.Entry<Long, Long> entry : itemCountMap.entrySet()) {
            MenuItem menuItem = menuItemRepository.findById(entry.getKey())
                    .orElseThrow(() -> new RuntimeException("Menu item not found"));

            // Ensure menu item belongs to the same restaurant
            if (!menuItem.getRestaurant().getId().equals(restaurantId)) {
                throw new UnauthorizedActionException("Menu item does not belong to this restaurant");
            }

            int quantity = entry.getValue().intValue();
            double itemTotal = menuItem.getPrice() * quantity;

            OrderItem orderItem = OrderItem.builder()
                    .menuItem(menuItem)
                    .quantity(quantity)
                    .price(itemTotal)
                    .build();

            items.add(orderItem);
            totalAmount += itemTotal;
        }

        Order order = Order.builder()
                .user(user)
                .restaurant(restaurant)
                .items(items)
                .status(OrderStatus.CREATED)
                .totalAmount(totalAmount)
                .createdAt(LocalDateTime.now())
                .build();

        // Link items to order
        items.forEach(item -> item.setOrder(order));

        return orderRepository.save(order);
    }


    public Order checkout(Long userId, Long orderId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));

        // RBAC — correct as-is
        if (user.getRole() == Role.MEMBER) {
            throw new UnauthorizedActionException("Members cannot checkout");
        }

        Order order = orderRepository.findById(orderId)
                .orElseThrow(() -> new RuntimeException("Order not found"));

        // Country restriction (BONUS OBJECTIVE)
        if (user.getRole() != Role.ADMIN &&
                !order.getRestaurant().getCountry().equals(user.getCountry())) {
            throw new UnauthorizedActionException("Cross-country access denied");
        }

        order.setStatus(OrderStatus.PAID);
        return orderRepository.save(order);
    }

    public void cancelOrder(Long userId, Long orderId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));

        if (user.getRole() == Role.MEMBER) {
            throw new UnauthorizedActionException("Members cannot cancel orders");
        }

        Order order = orderRepository.findById(orderId)
                .orElseThrow(() -> new RuntimeException("Order not found"));

        order.setStatus(OrderStatus.CANCELLED);
        orderRepository.save(order);
    }
}
