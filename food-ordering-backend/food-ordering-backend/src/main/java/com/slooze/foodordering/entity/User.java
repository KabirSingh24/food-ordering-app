package com.slooze.foodordering.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "users")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    @Enumerated(EnumType.STRING)
    private Role role; // ADMIN / MANAGER / MEMBER

    @Enumerated(EnumType.STRING)
    private Country country; // INDIA / AMERICA
}

