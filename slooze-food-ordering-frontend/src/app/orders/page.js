"use client";

import { useState, useEffect } from "react";
import { api } from "../api";
import { getUser, canCheckout } from "../auth";

export default function Orders() {
  const user = getUser();
  const [order, setOrder] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const orderId = localStorage.getItem("orderId");
      if (orderId) {
        setOrder({ id: orderId, status: "CREATED" }); // initial status
      }
    }
  }, []);

  async function checkout() {
    const updated = await api.post(`/orders/${order.id}/checkout`);
    setOrder(prev => ({ ...prev, status: updated.status }));
    alert("Order Paid");
  }

  async function cancel() {
    await api.del(`/orders/${order.id}`);
    setOrder(prev => ({ ...prev, status: "CANCELLED" }));
    alert("Order Cancelled");
  }

  if (!order) return <p className="empty">No order yet</p>;

  return (
    <div>
      <h2>Order #{order.id}</h2>

      <div className="card order-card">
        <div className="card-content">
          <img src={order.image || "/food.png"} className="card-img" />
          <span>Status: <b>{order.status}</b></span>
        </div>

        <div className="actions">
          {canCheckout(user.role) && order.status === "CREATED" && (
            <button onClick={checkout}>Checkout</button>
          )}

          {user.role !== "MEMBER" && order.status === "CREATED" && (
            <button className="danger" onClick={cancel}>Cancel</button>
          )}
        </div>
      </div>
    </div>
  );
}