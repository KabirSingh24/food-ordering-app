package com.slooze.foodordering.service;

import com.slooze.foodordering.entity.PaymentMethod;
import com.slooze.foodordering.entity.Role;
import com.slooze.foodordering.entity.User;
import com.slooze.foodordering.exception.UnauthorizedActionException;
import com.slooze.foodordering.repository.PaymentMethodRepository;
import com.slooze.foodordering.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class PaymentService {

    private final PaymentMethodRepository paymentMethodRepository;
    private final UserRepository userRepository;

    public PaymentMethod addPaymentMethod(Long userId, PaymentMethod method) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));

        if (user.getRole() != Role.ADMIN) {
            throw new UnauthorizedActionException("Only admin can manage payment methods");
        }

        method.setUser(user);
        return paymentMethodRepository.save(method);
    }
}