-- Users
INSERT INTO users (id, name, role, country) VALUES
(1, 'Nick Fury', 'ADMIN', 'INDIA'),
(2, 'Captain Marvel', 'MANAGER', 'INDIA'),
(3, 'Captain America', 'MANAGER', 'AMERICA'),
(4, 'Thanos', 'MEMBER', 'INDIA'),
(5, 'Thor', 'MEMBER', 'INDIA'),
(6, 'Travis', 'MEMBER', 'AMERICA');

-- Restaurants
INSERT INTO restaurants (id, name, country) VALUES
(1, 'Indian Delight', 'INDIA'),
(2, 'American Diner', 'AMERICA');

-- Menu Items
INSERT INTO menu_items (id, name, price, restaurant_id) VALUES
(1, 'Paneer Butter Masala', 250, 1),
(2, 'Chicken Biryani', 300, 1),
(3, 'Burger', 150, 2),
(4, 'Fries', 80, 2);

-- Payment Methods (assigned to Admin)
INSERT INTO payment_methods (id, type, details, user_id, active) VALUES
(1, 'Card', '**** 1234', 1, true),
(2, 'UPI', 'nick@upi', 1, true);
