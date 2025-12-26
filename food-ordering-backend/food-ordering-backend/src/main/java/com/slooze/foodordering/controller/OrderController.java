package com.slooze.foodordering.controller;

import com.slooze.foodordering.dto.request.CreateOrderRequest;
import com.slooze.foodordering.entity.Order;
import com.slooze.foodordering.service.OrderService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/orders")
@RequiredArgsConstructor
public class OrderController {

    private final OrderService orderService;

    @GetMapping("/{orderId}")
    public Order getOrder(@PathVariable Long orderId,
                          @RequestParam Long userId) {
        return orderService.getOrder(orderId,userId);
    }


    // Pass userId from frontend as @RequestParam
    @PostMapping("/{restaurantId}")
    public Order createOrder(@PathVariable Long restaurantId,
                             @RequestParam Long userId,
                             @RequestBody CreateOrderRequest request) {
        return orderService.createOrder(userId, restaurantId, request.getMenuItemIds());
    }

    @PostMapping("/{orderId}/checkout")
    public Order checkout(@PathVariable Long orderId,
                          @RequestParam Long userId) {
        return orderService.checkout(userId, orderId);
    }

    @DeleteMapping("/{orderId}")
    public void cancelOrder(@PathVariable Long orderId,
                            @RequestParam Long userId) {
        orderService.cancelOrder(userId, orderId);
    }
}
