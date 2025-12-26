package com.slooze.foodordering.controller;

import com.slooze.foodordering.entity.MenuItem;
import com.slooze.foodordering.service.MenuService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/menu")
@RequiredArgsConstructor
public class MenuController {

    private final MenuService menuService;

    @GetMapping
    public List<MenuItem> getMenu(
            @RequestParam Long restaurantId,
            @RequestParam Long userId
    ) {
        return menuService.getMenu(restaurantId, userId);
    }
}
