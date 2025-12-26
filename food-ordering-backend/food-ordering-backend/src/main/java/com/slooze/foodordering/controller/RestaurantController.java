package com.slooze.foodordering.controller;

import com.slooze.foodordering.entity.Restaurant;
import com.slooze.foodordering.service.RestaurantService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/restaurants")
@RequiredArgsConstructor
public class RestaurantController {

    private final RestaurantService restaurantService;

    @GetMapping
    public List<Restaurant> getRestaurants(@RequestParam Long userId) {
        return restaurantService.getRestaurants(userId);
    }
}
