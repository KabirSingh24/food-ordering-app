package com.slooze.foodordering.dto.response;

import lombok.Data;
import java.util.List;

@Data
public class RestaurantResponse {
    private Long id;
    private String name;
    private List<String> menuItems;
}
