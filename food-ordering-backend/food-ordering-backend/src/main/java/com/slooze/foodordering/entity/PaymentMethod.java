package com.slooze.foodordering.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "payment_methods")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class PaymentMethod {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // Card, UPI, Wallet, etc.
    @Column(nullable = false)
    private String type;

    // Masked value (**** 1234)
    @Column(nullable = false)
    private String details;

    // Only ADMIN can modify payment methods
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @Column(nullable = false)
    private boolean active = true;
}
