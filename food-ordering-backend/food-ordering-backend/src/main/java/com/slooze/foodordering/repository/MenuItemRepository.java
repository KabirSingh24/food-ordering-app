package com.slooze.foodordering.repository;

import com.slooze.foodordering.entity.MenuItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MenuItemRepository extends JpaRepository<MenuItem,Long> {
    List<MenuItem> findByRestaurantId(Long restaurantId);
}
