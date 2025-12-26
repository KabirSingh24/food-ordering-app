package com.slooze.foodordering.repository;

import com.slooze.foodordering.entity.PaymentMethod;
import com.slooze.foodordering.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PaymentMethodRepository extends JpaRepository<PaymentMethod, Long> {

    List<PaymentMethod> findByUser(User user);
}
