package com.slooze.foodordering.service;

import com.slooze.foodordering.entity.MenuItem;
import com.slooze.foodordering.entity.Restaurant;
import com.slooze.foodordering.entity.Role;
import com.slooze.foodordering.entity.User;
import com.slooze.foodordering.exception.UnauthorizedActionException;
import com.slooze.foodordering.repository.MenuItemRepository;
import com.slooze.foodordering.repository.RestaurantRepository;
import com.slooze.foodordering.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class MenuService {

    private final MenuItemRepository menuItemRepository;
    private final RestaurantRepository restaurantRepository;
    private final UserRepository userRepository;

    public List<MenuItem> getMenu(Long restaurantId, Long userId) {

        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));

        Restaurant restaurant = restaurantRepository.findById(restaurantId)
                .orElseThrow(() -> new RuntimeException("Restaurant not found"));

        // Country restriction
        if (user.getRole() != Role.ADMIN &&
                !user.getCountry().equals(restaurant.getCountry())) {
            throw new UnauthorizedActionException("Country access denied");
        }

        return menuItemRepository.findByRestaurantId(restaurantId);
    }
}
