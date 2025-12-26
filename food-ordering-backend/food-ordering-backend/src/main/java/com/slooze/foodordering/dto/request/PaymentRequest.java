package com.slooze.foodordering.dto.request;

import lombok.Data;

@Data
public class PaymentRequest {
    private String cardNumber;
    private String cardHolderName;
    private String expiry;
}
