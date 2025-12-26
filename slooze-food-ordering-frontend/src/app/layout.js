"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getUser, loginAs } from "./auth";
import "./globals.css";

const USERS = [
  { id: 1, name: "Nick Fury", role: "ADMIN", country: "INDIA" },
  { id: 2, name: "Captain Marvel", role: "MANAGER", country: "INDIA" },
  { id: 3, name: "Captain America", role: "MANAGER", country: "AMERICA" },
  { id: 4, name: "Thanos", role: "MEMBER", country: "INDIA" },
  { id: 6, name: "Travis", role: "MEMBER", country: "AMERICA" }
];

export default function RootLayout({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => setUser(getUser()), []);

  function handleLogin(e) {
    const u = USERS.find(x => x.id === Number(e.target.value));
    loginAs(u);
    setUser(u);
  }

  return (
    <html>
      <body>
        <nav className="nav">
          <select onChange={handleLogin} value={user?.id || ""}>
            <option value="" disabled>Select User</option>
            {USERS.map(u => (
              <option key={u.id} value={u.id}>
                {u.name} ({u.role}-{u.country})
              </option>
            ))}
          </select>

          <Link href="/">Home</Link>
          <Link href="/restaurants">Restaurants</Link>
          <Link href="/orders">Orders</Link>
          {user?.role === "ADMIN" && <Link href="/payment">Payment</Link>}

          {user && (
            <span style={{ marginLeft: "auto" }}>
              {user.name} ({user.role}-{user.country})
            </span>
          )}
        </nav>

        <main>{children}</main>
      </body>
    </html>
  );
}
