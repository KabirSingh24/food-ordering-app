"use client";

import { useState } from "react";
import { api } from "../api";

export default function Payment() {
  const [type, setType] = useState("");
  const [details, setDetails] = useState("");
  const [active, setActive] = useState(true);

  async function submit() {
    if (!type || !details) {
      alert("Please fill all fields");
      return;
    }
    await api.post("/payments", { type, details, active });
    alert("Payment method added successfully!");
    setType("");
    setDetails("");
    setActive(true);
  }

  return (
    <div className="payment-page">
      <div className="payment-card">
        <h2>Payment Method</h2>
        <img src={"/payment.png"} className="card-img" />
        <div className="payment-form">
          <input
            type="text"
            placeholder="Type (Card, UPI, Wallet)"
            value={type}
            onChange={e => setType(e.target.value)}
          />

          <input
            type="text"
            placeholder="Details (**** 1234, nick@upi)"
            value={details}
            onChange={e => setDetails(e.target.value)}
          />

          <label>
            <input
              type="checkbox"
              checked={active}
              onChange={e => setActive(e.target.checked)}
            />
          </label>

          <button onClick={submit}>Save Payment Method</button>
        </div>
      </div>
    </div>
  );
}