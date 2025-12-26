package com.slooze.foodordering.repository;

import com.slooze.foodordering.entity.Country;
import com.slooze.foodordering.entity.Restaurant;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface RestaurantRepository extends JpaRepository<Restaurant, Long> {

    // For MANAGER / MEMBER
    List<Restaurant> findByCountry(Country country);
}
