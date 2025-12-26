export function getUser() {
  if (typeof window === "undefined") return null;
  return JSON.parse(localStorage.getItem("user"));
}

export function loginAs(user) {
  localStorage.setItem("user", JSON.stringify(user));
}

export function canCheckout(role) {
  return role === "ADMIN" || role === "MANAGER";
}