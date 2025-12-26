"use client";
import { useEffect, useState } from "react";
import { api } from "../api";
import { useRouter } from "next/navigation";

export default function Restaurants() {
  const [restaurants, setRestaurants] = useState([]);
  const router = useRouter();

  useEffect(() => {
    api.get("/restaurants").then(setRestaurants);
  }, []);

  return (
    <>
      <h2>Restaurants</h2>

      {restaurants.length === 0 && <p className="empty">No restaurants</p>}

      {restaurants.map(r => (
        <div key={r.id} className="restaurant-card">
          <img src={r.image || "/restaurants.jpeg"} alt={r.name} className="card-img" />
          <div>
            <b>{r.name}</b>
            <span>{r.country}</span>
          </div>
          <button onClick={() => router.push(`/menu?rid=${r.id}`)}>
            View Menu
          </button>
        </div>
      ))}
    </>
  );
}
