package com.slooze.foodordering.dto.request;

import lombok.Data;
import java.util.List;

@Data
public class CreateOrderRequest {
    private List<Long> menuItemIds;
}
