const BASE = "http://localhost:8080";

function withUserId(url) {
  if (typeof window === "undefined") return url;
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  if (!user.id) return url;
  return url.includes("?") ? `${url}&userId=${user.id}` : `${url}?userId=${user.id}`;
}

export const api = {
  get: async (url) => {
    const res = await fetch(BASE + withUserId(url));
    if (!res.ok) throw new Error(`GET ${url} failed: ${res.statusText}`);
    return res.json();
  },

  post: async (url, body) => {
    const res = await fetch(BASE + withUserId(url), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    });
    if (!res.ok) throw new Error(`POST ${url} failed: ${res.statusText}`);
    return res.json();
  },

  del: async (url) => {
    const res = await fetch(BASE + withUserId(url), { method: "DELETE" });
    if (!res.ok) throw new Error(`DELETE ${url} failed: ${res.statusText}`);
    try {
      return await res.json();
    } catch {
      return null;
    }
  }

};