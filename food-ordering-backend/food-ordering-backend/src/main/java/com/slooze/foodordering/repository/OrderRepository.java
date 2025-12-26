package com.slooze.foodordering.repository;

import com.slooze.foodordering.entity.Country;
import com.slooze.foodordering.entity.Order;
import com.slooze.foodordering.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface OrderRepository extends JpaRepository<Order, Long> {

    // Admin: view all orders
    List<Order> findAll();

    // User-specific orders
    List<Order> findByUser(User user);

    // Country-filtered orders (Manager / Member)
    @Query("""
        SELECT o FROM Order o
        WHERE o.restaurant.country = :country
    """)
    List<Order> findByRestaurantCountry(Country country);
}
