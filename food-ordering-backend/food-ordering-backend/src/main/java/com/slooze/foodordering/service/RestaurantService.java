package com.slooze.foodordering.service;

import com.slooze.foodordering.entity.Restaurant;
import com.slooze.foodordering.entity.Role;
import com.slooze.foodordering.entity.User;
import com.slooze.foodordering.exception.ResourceNotFoundException;
import com.slooze.foodordering.repository.RestaurantRepository;
import com.slooze.foodordering.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.List;


@Service
@RequiredArgsConstructor
public class RestaurantService {

    private final RestaurantRepository restaurantRepository;
    private final UserRepository userRepository;

    public List<Restaurant> getRestaurants(Long userId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User not found"));

        if (user.getRole() == Role.ADMIN) {
            return restaurantRepository.findAll();
        }

        return restaurantRepository.findByCountry(user.getCountry());
    }
}
