package com.slooze.foodordering.controller;

import com.slooze.foodordering.entity.PaymentMethod;
import com.slooze.foodordering.service.PaymentService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/payments")
@RequiredArgsConstructor
public class PaymentController {

    private final PaymentService paymentService;

    @PostMapping
    public PaymentMethod addPaymentMethod(@RequestParam Long userId,
                                          @RequestBody PaymentMethod method) {
        return paymentService.addPaymentMethod(userId, method);
    }
}