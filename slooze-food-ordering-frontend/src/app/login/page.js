"use client";

import { api } from "../api";

export default function Login() {
  const login = async () => {
    const res = await api.post("/auth/login", {
      username: "nick",
      password: "password",
    });

    localStorage.setItem("token", res.token);
    localStorage.setItem("user", JSON.stringify(res.user));
    window.location.href = "/";
  };

  return <button onClick={login}>Login</button>;
}
