module.exports = [
"[project]/src/app/api.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "api",
    ()=>api
]);
const BASE = "http://localhost:8080";
function withUserId(url) {
    if ("TURBOPACK compile-time truthy", 1) return url;
    //TURBOPACK unreachable
    ;
    const user = undefined;
}
const api = {
    get: async (url)=>{
        const res = await fetch(BASE + withUserId(url));
        if (!res.ok) throw new Error(`GET ${url} failed: ${res.statusText}`);
        return res.json();
    },
    post: async (url, body)=>{
        const res = await fetch(BASE + withUserId(url), {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        });
        if (!res.ok) throw new Error(`POST ${url} failed: ${res.statusText}`);
        return res.json();
    },
    del: async (url)=>{
        const res = await fetch(BASE + withUserId(url), {
            method: "DELETE"
        });
        if (!res.ok) throw new Error(`DELETE ${url} failed: ${res.statusText}`);
        // Return null if body is empty
        try {
            return await res.json();
        } catch  {
            return null;
        }
    }
};
}),
"[project]/src/app/cart/page.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Cart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/api.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$auth$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/auth.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function Cart() {
    const [cart, setCart] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [restaurantId, setRestaurantId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setCart(JSON.parse(localStorage.getItem("cart") || "[]"));
        setRestaurantId(localStorage.getItem("restaurantId"));
        setUser((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$auth$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getUser"])());
    }, []);
    async function placeOrder() {
        if (!restaurantId || !user) return;
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].post(`/orders/${restaurantId}?userId=${user.id}`, {
            menuItemIds: cart
        });
        localStorage.setItem("orderId", res.id);
        alert("Order created!");
        window.location.href = "/orders";
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: placeOrder,
        children: "Place Order"
    }, void 0, false, {
        fileName: "[project]/src/app/cart/page.js",
        lineNumber: 31,
        columnNumber: 10
    }, this);
}
}),
];

//# sourceMappingURL=src_app_a12acd54._.js.map