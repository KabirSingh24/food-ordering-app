"use client";

import { useEffect, useState } from "react";
import { api } from "../api";
import { useSearchParams, useRouter } from "next/navigation";

export default function CartClient() {
  const [items, setItems] = useState([]);
  const params = useSearchParams();
  const router = useRouter();
  const restaurantId = params.get("rid");

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    if (cart.length === 0) return;

    api.post("/cart/items", { ids: cart }).then(setItems);
  }, []);

  async function placeOrder() {
    const res = await api.post("/orders", {
      restaurantId,
      items: items.map(i => i.id)
    });

    localStorage.setItem("orderId", res.id);
    localStorage.removeItem("cart");
    router.push("/orders");
  }

  if (items.length === 0) {
    return <p className="empty">Cart is empty</p>;
  }

  return (
    <div>
      <h2>Your Cart</h2>

      {items.map(item => (
        <div key={item.id} className="card cart-item">
          <span>{item.name}</span>
          <span>₹{item.price}</span>
        </div>
      ))}

      <div className="cart-total">
        Total ₹{items.reduce((s, i) => s + i.price, 0)}
      </div>

      <button className="cart-button" onClick={placeOrder}>
        Place Order
      </button>
    </div>
  );
}
