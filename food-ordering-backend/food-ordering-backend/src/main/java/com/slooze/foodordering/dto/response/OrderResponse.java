package com.slooze.foodordering.dto.response;

import lombok.Data;

@Data
public class OrderResponse {
    private Long orderId;
    private String status;
    private double totalAmount;
}
