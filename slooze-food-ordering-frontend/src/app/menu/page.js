"use client";
export const dynamic = "force-dynamic";

import { useEffect, useState } from "react";
import { api } from "../api";
import { useSearchParams, useRouter } from "next/navigation";

export default function Menu() {
  const [menu, setMenu] = useState([]);
  const [cart, setCart] = useState([]);
  const params = useSearchParams();
  const router = useRouter();

  const restaurantId = params.get("rid");

  useEffect(() => {
    if (!restaurantId) return;

    api.get(`/menu?restaurantId=${restaurantId}`)
      .then(res => setMenu(Array.isArray(res) ? res : []))
      .catch(() => setMenu([]));
  }, [restaurantId]);

  return (
    <>
      <h2>Menu</h2>

      {menu.length === 0 && <p className="empty">No menu items</p>}

      {menu.map(item => (
        <div key={item.id} className="card menu-item">
          <img
            src={item.image || "/menu.png"}
            alt={item.name}
            className="card-img"
          />
          <div className="card-content">
            <b>{item.name}</b>
            <span>₹{item.price}</span>
          </div>
          <button onClick={() => setCart(prev => [...prev, item.id])}>
            Add
          </button>
        </div>
      ))}

      {cart.length > 0 && (
        <button
          className="cart-button"
          onClick={() => {
            localStorage.setItem("cart", JSON.stringify(cart));
            router.push(`/cart?rid=${restaurantId}`);
          }}
        >
          Go to Cart ({cart.length})
        </button>
      )}
    </>
  );
}
