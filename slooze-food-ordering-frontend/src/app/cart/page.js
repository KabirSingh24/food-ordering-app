// "use client";
// import { api } from "../api";
// import { useSearchParams, useRouter } from "next/navigation";

// export default function Cart() {
//   const cart = JSON.parse(localStorage.getItem("cart") || "[]");
//   const params = useSearchParams();
//   const router = useRouter();
//   const restaurantId = params.get("rid");

//   async function placeOrder() {
//     const order = await api.post(`/orders/${restaurantId}`, {
//       menuItemIds: cart
//     });
//     localStorage.setItem("orderId", order.id);
//     router.push("/orders");
//   }

//   return (
//     <div className="cart-summary">
//       <h2>Cart</h2>
//       <p>Items Selected: {cart.length}</p>
//       <button onClick={placeOrder}>Place Order</button>
//     </div>
//   );
// }


import { Suspense } from "react";
import CartClient from "./CartClient";

export default function CartPage() {
  return (
    <Suspense fallback={<p className="empty">Loading cart...</p>}>
      <CartClient />
    </Suspense>
  );
}
