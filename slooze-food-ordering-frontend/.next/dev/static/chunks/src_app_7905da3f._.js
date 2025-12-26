(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/api.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "api",
    ()=>api
]);
const BASE = "http://localhost:8080";
function withUserId(url) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    if (!user.id) return url;
    return url.includes("?") ? `${url}&userId=${user.id}` : `${url}?userId=${user.id}`;
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/cart/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Cart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/api.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$auth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/auth.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function Cart() {
    _s();
    const [cart, setCart] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [restaurantId, setRestaurantId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Cart.useEffect": ()=>{
            setCart(JSON.parse(localStorage.getItem("cart") || "[]"));
            setRestaurantId(localStorage.getItem("restaurantId"));
            setUser((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$auth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUser"])());
        }
    }["Cart.useEffect"], []);
    async function placeOrder() {
        if (!restaurantId || !user) return;
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].post(`/orders/${restaurantId}?userId=${user.id}`, {
            menuItemIds: cart
        });
        localStorage.setItem("orderId", res.id);
        alert("Order created!");
        window.location.href = "/orders";
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: placeOrder,
        children: "Place Order"
    }, void 0, false, {
        fileName: "[project]/src/app/cart/page.js",
        lineNumber: 31,
        columnNumber: 10
    }, this);
}
_s(Cart, "plb3ibVlMoqEqRDH/jYoEbNsEaQ=");
_c = Cart;
var _c;
__turbopack_context__.k.register(_c, "Cart");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_7905da3f._.js.map