(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/RoomPage/MessageBox.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dicebear$2f$core$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@dicebear/core/lib/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dicebear$2f$core$2f$lib$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@dicebear/core/lib/core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dicebear$2f$bottts$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__bottts$3e$__ = __turbopack_context__.i("[project]/node_modules/@dicebear/bottts/lib/index.js [app-client] (ecmascript) <export * as bottts>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@/utils/utils'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
;
;
;
;
;
const MessageBox = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(21);
    if ($[0] !== "2ff84ee42703476f0550d897c5802bd8f775ce295bace50908fa261e2670fb23") {
        for(let $i = 0; $i < 21; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "2ff84ee42703476f0550d897c5802bd8f775ce295bace50908fa261e2670fb23";
    }
    const { SenderName, message, isOwnMessage } = t0;
    let t1;
    if ($[1] !== SenderName) {
        const avatar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dicebear$2f$core$2f$lib$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createAvatar"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dicebear$2f$bottts$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__bottts$3e$__["bottts"], {
            seed: SenderName,
            backgroundColor: [
                "b6e3f4",
                "c0aede",
                "d1d4f9"
            ]
        });
        t1 = avatar.toDataUri();
        $[1] = SenderName;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const image = t1;
    const t2 = SenderName || "icon";
    let t3;
    if ($[3] !== image || $[4] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "shrink-0",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: image,
                width: 28,
                height: 28,
                className: "rounded-full border border-game-border",
                alt: t2
            }, void 0, false, {
                fileName: "[project]/components/RoomPage/MessageBox.jsx",
                lineNumber: 35,
                columnNumber: 36
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/RoomPage/MessageBox.jsx",
            lineNumber: 35,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[3] = image;
        $[4] = t2;
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    let t4;
    if ($[6] !== SenderName) {
        t4 = capitalizeFirst(SenderName);
        $[6] = SenderName;
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    let t5;
    if ($[8] !== isOwnMessage) {
        t5 = isOwnMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "pl-1 text-game-muted text-xs font-semibold",
            children: "(you)"
        }, void 0, false, {
            fileName: "[project]/components/RoomPage/MessageBox.jsx",
            lineNumber: 52,
            columnNumber: 26
        }, ("TURBOPACK compile-time value", void 0));
        $[8] = isOwnMessage;
        $[9] = t5;
    } else {
        t5 = $[9];
    }
    let t6;
    if ($[10] !== t4 || $[11] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "font-bold text-sm text-game-blue-dark",
            children: [
                t4,
                t5
            ]
        }, void 0, true, {
            fileName: "[project]/components/RoomPage/MessageBox.jsx",
            lineNumber: 60,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[10] = t4;
        $[11] = t5;
        $[12] = t6;
    } else {
        t6 = $[12];
    }
    let t7;
    if ($[13] !== message) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm text-game-text wrap-break-word",
            children: message
        }, void 0, false, {
            fileName: "[project]/components/RoomPage/MessageBox.jsx",
            lineNumber: 69,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[13] = message;
        $[14] = t7;
    } else {
        t7 = $[14];
    }
    let t8;
    if ($[15] !== t6 || $[16] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1 min-w-0",
            children: [
                t6,
                t7
            ]
        }, void 0, true, {
            fileName: "[project]/components/RoomPage/MessageBox.jsx",
            lineNumber: 77,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[15] = t6;
        $[16] = t7;
        $[17] = t8;
    } else {
        t8 = $[17];
    }
    let t9;
    if ($[18] !== t3 || $[19] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-start gap-2",
            children: [
                t3,
                t8
            ]
        }, void 0, true, {
            fileName: "[project]/components/RoomPage/MessageBox.jsx",
            lineNumber: 86,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[18] = t3;
        $[19] = t8;
        $[20] = t9;
    } else {
        t9 = $[20];
    }
    return t9;
};
_c = MessageBox;
const __TURBOPACK__default__export__ = MessageBox;
var _c;
__turbopack_context__.k.register(_c, "MessageBox");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/socket/socket.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "initSocket",
    ()=>initSocket
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/socket.io-client/build/esm/index.js [app-client] (ecmascript) <locals>");
;
let socket = null;
//const SERVER_URL = "https://drdraw.onrender.com";
const SERVER_URL = "http://localhost:5001";
const initSocket = ()=>{
    if (!socket) {
        socket = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["io"])(SERVER_URL, {
            transports: [
                "websocket",
                "polling"
            ],
            reconnection: true,
            reconnectionAttempts: 5,
            reconnectionDelay: 1000
        });
    }
    return socket;
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/RoomPage/PlayerCard.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$crown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Crown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/crown.js [app-client] (ecmascript) <export default as Crown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$palette$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Palette$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/palette.js [app-client] (ecmascript) <export default as Palette>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dicebear$2f$core$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@dicebear/core/lib/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dicebear$2f$core$2f$lib$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@dicebear/core/lib/core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dicebear$2f$bottts$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__bottts$3e$__ = __turbopack_context__.i("[project]/node_modules/@dicebear/bottts/lib/index.js [app-client] (ecmascript) <export * as bottts>");
(()=>{
    const e = new Error("Cannot find module '@/utils/utils'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
;
;
;
;
;
;
const PlayerCard = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(36);
    if ($[0] !== "a0559b88e6cb9158bad80e09ddaa042500333c4fb7c6f1977c2f59ee3d07117b") {
        for(let $i = 0; $i < 36; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "a0559b88e6cb9158bad80e09ddaa042500333c4fb7c6f1977c2f59ee3d07117b";
    }
    const { player, hostId, isCurrentUser, isDrawing: t1, showScore: t2 } = t0;
    const isDrawing = t1 === undefined ? false : t1;
    const showScore = t2 === undefined ? false : t2;
    const isHost = player.id === hostId;
    const isOnline = player.status === "online";
    let t3;
    if ($[1] !== player.name) {
        const avatar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dicebear$2f$core$2f$lib$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createAvatar"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dicebear$2f$bottts$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__bottts$3e$__["bottts"], {
            seed: player.name,
            backgroundColor: [
                "b6e3f4",
                "c0aede",
                "d1d4f9"
            ]
        });
        t3 = avatar.toDataUri();
        $[1] = player.name;
        $[2] = t3;
    } else {
        t3 = $[2];
    }
    const image = t3;
    const t4 = `relative p-2 rounded-md border-2 transition-all ${isDrawing ? "bg-green-50 border-game-green" : isCurrentUser ? "bg-blue-50 border-game-blue" : "bg-white border-game-border"} ${!isOnline && "opacity-50"}`;
    let t5;
    if ($[3] !== isDrawing) {
        t5 = isDrawing && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute -top-2 -right-1 bg-game-green text-white text-[10px] font-bold px-1.5 py-0.5 rounded flex items-center gap-0.5",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$palette$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Palette$3e$__["Palette"], {
                    className: "w-2.5 h-2.5"
                }, void 0, false, {
                    fileName: "[project]/components/RoomPage/PlayerCard.jsx",
                    lineNumber: 42,
                    columnNumber: 160
                }, ("TURBOPACK compile-time value", void 0)),
                "drawing"
            ]
        }, void 0, true, {
            fileName: "[project]/components/RoomPage/PlayerCard.jsx",
            lineNumber: 42,
            columnNumber: 23
        }, ("TURBOPACK compile-time value", void 0));
        $[3] = isDrawing;
        $[4] = t5;
    } else {
        t5 = $[4];
    }
    let t6;
    if ($[5] !== image || $[6] !== player.name) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-8 h-8 rounded-full overflow-hidden shrink-0 border border-game-border",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: image,
                width: 32,
                height: 32,
                className: "rounded-full",
                alt: player.name
            }, void 0, false, {
                fileName: "[project]/components/RoomPage/PlayerCard.jsx",
                lineNumber: 50,
                columnNumber: 99
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/RoomPage/PlayerCard.jsx",
            lineNumber: 50,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[5] = image;
        $[6] = player.name;
        $[7] = t6;
    } else {
        t6 = $[7];
    }
    let t7;
    if ($[8] !== player.name) {
        t7 = capitalizeFirst(player.name);
        $[8] = player.name;
        $[9] = t7;
    } else {
        t7 = $[9];
    }
    let t8;
    if ($[10] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "font-bold text-sm truncate text-game-text",
            children: t7
        }, void 0, false, {
            fileName: "[project]/components/RoomPage/PlayerCard.jsx",
            lineNumber: 67,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[10] = t7;
        $[11] = t8;
    } else {
        t8 = $[11];
    }
    let t9;
    if ($[12] !== isHost) {
        t9 = isHost && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$crown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Crown$3e$__["Crown"], {
            className: "w-3.5 h-3.5 text-game-orange shrink-0"
        }, void 0, false, {
            fileName: "[project]/components/RoomPage/PlayerCard.jsx",
            lineNumber: 75,
            columnNumber: 20
        }, ("TURBOPACK compile-time value", void 0));
        $[12] = isHost;
        $[13] = t9;
    } else {
        t9 = $[13];
    }
    let t10;
    if ($[14] !== isCurrentUser) {
        t10 = isCurrentUser && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-[10px] bg-game-blue text-white px-1.5 py-0.5 rounded font-bold shrink-0",
            children: "you"
        }, void 0, false, {
            fileName: "[project]/components/RoomPage/PlayerCard.jsx",
            lineNumber: 83,
            columnNumber: 28
        }, ("TURBOPACK compile-time value", void 0));
        $[14] = isCurrentUser;
        $[15] = t10;
    } else {
        t10 = $[15];
    }
    let t11;
    if ($[16] !== t10 || $[17] !== t8 || $[18] !== t9) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-1",
            children: [
                t8,
                t9,
                t10
            ]
        }, void 0, true, {
            fileName: "[project]/components/RoomPage/PlayerCard.jsx",
            lineNumber: 91,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[16] = t10;
        $[17] = t8;
        $[18] = t9;
        $[19] = t11;
    } else {
        t11 = $[19];
    }
    let t12;
    if ($[20] !== player.score || $[21] !== showScore) {
        t12 = showScore && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-xs font-bold text-game-green-dark",
            children: [
                player.score || 0,
                " pts"
            ]
        }, void 0, true, {
            fileName: "[project]/components/RoomPage/PlayerCard.jsx",
            lineNumber: 101,
            columnNumber: 24
        }, ("TURBOPACK compile-time value", void 0));
        $[20] = player.score;
        $[21] = showScore;
        $[22] = t12;
    } else {
        t12 = $[22];
    }
    let t13;
    if ($[23] !== t11 || $[24] !== t12) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1 min-w-0",
            children: [
                t11,
                t12
            ]
        }, void 0, true, {
            fileName: "[project]/components/RoomPage/PlayerCard.jsx",
            lineNumber: 110,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[23] = t11;
        $[24] = t12;
        $[25] = t13;
    } else {
        t13 = $[25];
    }
    const t14 = `w-2 h-2 rounded-full shrink-0 ${isOnline ? "bg-game-green" : "bg-red-400"}`;
    let t15;
    if ($[26] !== t14) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t14
        }, void 0, false, {
            fileName: "[project]/components/RoomPage/PlayerCard.jsx",
            lineNumber: 120,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[26] = t14;
        $[27] = t15;
    } else {
        t15 = $[27];
    }
    let t16;
    if ($[28] !== t13 || $[29] !== t15 || $[30] !== t6) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2",
            children: [
                t6,
                t13,
                t15
            ]
        }, void 0, true, {
            fileName: "[project]/components/RoomPage/PlayerCard.jsx",
            lineNumber: 128,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[28] = t13;
        $[29] = t15;
        $[30] = t6;
        $[31] = t16;
    } else {
        t16 = $[31];
    }
    let t17;
    if ($[32] !== t16 || $[33] !== t4 || $[34] !== t5) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t4,
            children: [
                t5,
                t16
            ]
        }, void 0, true, {
            fileName: "[project]/components/RoomPage/PlayerCard.jsx",
            lineNumber: 138,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[32] = t16;
        $[33] = t4;
        $[34] = t5;
        $[35] = t17;
    } else {
        t17 = $[35];
    }
    return t17;
};
_c = PlayerCard;
pts;
const __TURBOPACK__default__export__ = PlayerCard;
var _c;
__turbopack_context__.k.register(_c, "PlayerCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/RoomPage/Header.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/copy.js [app-client] (ecmascript) <export default as Copy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Link$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/link.js [app-client] (ecmascript) <export default as Link>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hot-toast/dist/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const Header = (t0)=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(20);
    if ($[0] !== "9eacb859a941d4c228ef67dc6f874a3ffc25816707264a4aab67be94278fb37c") {
        for(let $i = 0; $i < 20; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "9eacb859a941d4c228ef67dc6f874a3ffc25816707264a4aab67be94278fb37c";
    }
    const { roomId } = t0;
    const [origin, setOrigin] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    let t1;
    let t2;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ()=>{
            setOrigin(window.location.origin);
        };
        t2 = [];
        $[1] = t1;
        $[2] = t2;
    } else {
        t1 = $[1];
        t2 = $[2];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    const url = origin + `?rid=${roomId}`;
    let t3;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: "logo-text text-3xl sm:text-4xl font-bold lowercase text-center text-game-blue-dark",
            children: "drdraw"
        }, void 0, false, {
            fileName: "[project]/components/RoomPage/Header.jsx",
            lineNumber: 36,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[3] = t3;
    } else {
        t3 = $[3];
    }
    let t4;
    if ($[4] !== roomId) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: [
                "room: ",
                roomId
            ]
        }, void 0, true, {
            fileName: "[project]/components/RoomPage/Header.jsx",
            lineNumber: 43,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[4] = roomId;
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    if ($[6] !== roomId) {
        t5 = ()=>{
            navigator.clipboard.writeText(roomId);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].success("copied!");
        };
        $[6] = roomId;
        $[7] = t5;
    } else {
        t5 = $[7];
    }
    let t6;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
            className: "size-3.5"
        }, void 0, false, {
            fileName: "[project]/components/RoomPage/Header.jsx",
            lineNumber: 62,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[8] = t6;
    } else {
        t6 = $[8];
    }
    let t7;
    if ($[9] !== t5) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: "cursor-pointer text-game-blue-dark hover:text-game-blue",
            onClick: t5,
            children: t6
        }, void 0, false, {
            fileName: "[project]/components/RoomPage/Header.jsx",
            lineNumber: 69,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[9] = t5;
        $[10] = t7;
    } else {
        t7 = $[10];
    }
    let t8;
    if ($[11] !== url) {
        t8 = ()=>{
            navigator.clipboard.writeText(url);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].success("invite link copied!");
        };
        $[11] = url;
        $[12] = t8;
    } else {
        t8 = $[12];
    }
    let t9;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Link$3e$__["Link"], {
            className: "size-3.5"
        }, void 0, false, {
            fileName: "[project]/components/RoomPage/Header.jsx",
            lineNumber: 88,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[13] = t9;
    } else {
        t9 = $[13];
    }
    let t10;
    if ($[14] !== t8) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t8,
            className: "flex gap-1 justify-center items-center text-game-green-dark underline cursor-pointer",
            children: [
                t9,
                "invite"
            ]
        }, void 0, true, {
            fileName: "[project]/components/RoomPage/Header.jsx",
            lineNumber: 95,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[14] = t8;
        $[15] = t10;
    } else {
        t10 = $[15];
    }
    let t11;
    if ($[16] !== t10 || $[17] !== t4 || $[18] !== t7) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "game-panel px-4 py-3",
            children: [
                t3,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center text-game-muted text-xs mt-1 font-bold flex justify-center items-center gap-x-2",
                    children: [
                        t4,
                        t7,
                        t10
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/RoomPage/Header.jsx",
                    lineNumber: 103,
                    columnNumber: 53
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/RoomPage/Header.jsx",
            lineNumber: 103,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[16] = t10;
        $[17] = t4;
        $[18] = t7;
        $[19] = t11;
    } else {
        t11 = $[19];
    }
    return t11;
};
_s(Header, "Q2THC6pKdyqvf4mfjLP2fZRTKx8=");
_c = Header;
const __TURBOPACK__default__export__ = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/RoomPage/DrawingBoard.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$socket$2f$socket$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/socket/socket.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pipette$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pipette$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pipette.js [app-client] (ecmascript) <export default as Pipette>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const TOOLS = {
    PEN: "pen",
    ERASER: "eraser"
};
const CANVAS_WIDTH = 1200;
const CANVAS_HEIGHT = 700;
const DrawingBoard = ({ roomId, canDraw = true })=>{
    _s();
    const socket = (0, __TURBOPACK__imported__module__$5b$project$5d2f$socket$2f$socket$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initSocket"])();
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const ctxRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [tool, setTool] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(TOOLS.PEN);
    const [color, setColor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("#000000");
    const [size, setSize] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(5);
    const [isDrawing, setIsDrawing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [start, setStart] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        x: 0,
        y: 0
    });
    const [scale, setScale] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const colorInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const colorPalette = [
        "#000000",
        "#FFFFFF",
        "#FF0000",
        "#00FF00",
        "#0000FF",
        "#FFFF00",
        "#FF00FF",
        "#00FFFF"
    ];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DrawingBoard.useEffect": ()=>{
            const canvas = canvasRef.current;
            if (!canvas) return;
            canvas.width = CANVAS_WIDTH;
            canvas.height = CANVAS_HEIGHT;
            const ctx = canvas.getContext("2d");
            ctx.lineCap = "round";
            ctx.lineJoin = "round";
            ctxRef.current = ctx;
            updateScale();
            window.addEventListener("resize", updateScale);
            return ({
                "DrawingBoard.useEffect": ()=>{
                    window.removeEventListener("resize", updateScale);
                }
            })["DrawingBoard.useEffect"];
        }
    }["DrawingBoard.useEffect"], []);
    const updateScale = ()=>{
        const container = containerRef.current;
        const canvas_0 = canvasRef.current;
        if (!container || !canvas_0) return;
        const containerWidth = container.clientWidth;
        const containerHeight = container.clientHeight;
        const scaleX = containerWidth / CANVAS_WIDTH;
        const scaleY = containerHeight / CANVAS_HEIGHT;
        const newScale = Math.min(scaleX, scaleY, 1); // Never scale up, only down
        setScale(newScale);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DrawingBoard.useEffect": ()=>{
            if (!socket) return;
            const handleDraw = {
                "DrawingBoard.useEffect.handleDraw": (data)=>{
                    drawStroke(data);
                }
            }["DrawingBoard.useEffect.handleDraw"];
            const handleClear = {
                "DrawingBoard.useEffect.handleClear": ()=>{
                    clearCanvas();
                }
            }["DrawingBoard.useEffect.handleClear"];
            const handleLoadDrawing = {
                "DrawingBoard.useEffect.handleLoadDrawing": (drawHistory)=>{
                    clearCanvas();
                    if (drawHistory && drawHistory.length > 0) {
                        drawHistory.forEach({
                            "DrawingBoard.useEffect.handleLoadDrawing": (data_0)=>drawStroke(data_0)
                        }["DrawingBoard.useEffect.handleLoadDrawing"]);
                    }
                }
            }["DrawingBoard.useEffect.handleLoadDrawing"];
            socket.on("draw", handleDraw);
            socket.on("clear-canvas", handleClear);
            socket.on("load-drawing", handleLoadDrawing);
            socket.emit("fetch-drawing", {
                roomId
            });
            return ({
                "DrawingBoard.useEffect": ()=>{
                    socket.off("draw", handleDraw);
                    socket.off("clear-canvas", handleClear);
                    socket.off("load-drawing", handleLoadDrawing);
                }
            })["DrawingBoard.useEffect"];
        }
    }["DrawingBoard.useEffect"], [
        socket,
        roomId
    ]);
    const drawStroke = (data_1)=>{
        const ctx_0 = ctxRef.current;
        if (!ctx_0) return;
        if (data_1.tool === TOOLS.ERASER) {
            ctx_0.globalCompositeOperation = "destination-out";
            ctx_0.strokeStyle = "rgba(0,0,0,1)";
        } else {
            ctx_0.globalCompositeOperation = "source-over";
            ctx_0.strokeStyle = data_1.color;
        }
        ctx_0.lineWidth = data_1.size;
        ctx_0.beginPath();
        ctx_0.moveTo(data_1.startX, data_1.startY);
        ctx_0.lineTo(data_1.endX, data_1.endY);
        ctx_0.stroke();
        ctx_0.closePath();
        ctx_0.globalCompositeOperation = "source-over";
    };
    const getCoords = (e)=>{
        const canvas_1 = canvasRef.current;
        const rect = canvas_1.getBoundingClientRect();
        const event = e.touches ? e.touches[0] : e;
        const x = (event.clientX - rect.left) / scale;
        const y = (event.clientY - rect.top) / scale;
        return {
            x,
            y
        };
    };
    const startDrawing = (e_0)=>{
        const { x: x_0, y: y_0 } = getCoords(e_0);
        setStart({
            x: x_0,
            y: y_0
        });
        setIsDrawing(true);
    };
    const draw = (e_1)=>{
        if (!isDrawing) return;
        if (!canDraw) return;
        const { x: x_1, y: y_1 } = getCoords(e_1);
        const drawData = {
            tool,
            startX: start.x,
            startY: start.y,
            endX: x_1,
            endY: y_1,
            color,
            size,
            roomCode: roomId
        };
        drawStroke(drawData);
        socket.emit("draw", drawData);
        setStart({
            x: x_1,
            y: y_1
        });
    };
    const stopDrawing = ()=>{
        setIsDrawing(false);
    };
    const clearCanvas = ()=>{
        const ctx_1 = ctxRef.current;
        const canvas_2 = canvasRef.current;
        if (!ctx_1 || !canvas_2) return;
        ctx_1.clearRect(0, 0, canvas_2.width, canvas_2.height);
    };
    const handleClear_0 = ()=>{
        clearCanvas();
        socket.emit("clear-canvas", {
            roomCode: roomId
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col h-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-2 border-b-2 border-game-border bg-gray-50 shrink-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `flex flex-wrap gap-y-2 gap-x-2 items-center ${canDraw ? "justify-between" : "justify-center"}`,
                    children: [
                        canDraw && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-1.5 items-start",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setTool(TOOLS.PEN),
                                    disabled: !canDraw,
                                    className: `px-2 py-1 md:px-3 md:py-1.5 text-sm rounded font-bold transition ${!canDraw ? "opacity-50 cursor-not-allowed" : "cursor-pointer"} ${tool === TOOLS.PEN ? "bg-game-blue text-white border-2 border-game-blue-dark" : "bg-white text-game-text border-2 border-game-border hover:bg-gray-50"}`,
                                    children: "✏️ pen"
                                }, void 0, false, {
                                    fileName: "[project]/components/RoomPage/DrawingBoard.jsx",
                                    lineNumber: 167,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    disabled: !canDraw,
                                    onClick: ()=>setTool(TOOLS.ERASER),
                                    className: `px-2 py-1 md:px-3 md:py-1.5 text-sm rounded font-bold transition ${!canDraw ? "opacity-50 cursor-not-allowed" : "cursor-pointer"} ${tool === TOOLS.ERASER ? "bg-game-blue text-white border-2 border-game-blue-dark" : "bg-white text-game-text border-2 border-game-border hover:bg-gray-50"}`,
                                    children: "🧹 eraser"
                                }, void 0, false, {
                                    fileName: "[project]/components/RoomPage/DrawingBoard.jsx",
                                    lineNumber: 170,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/RoomPage/DrawingBoard.jsx",
                            lineNumber: 166,
                            columnNumber: 23
                        }, ("TURBOPACK compile-time value", void 0)),
                        canDraw && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-2 items-center flex-wrap",
                            children: [
                                colorPalette.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setColor(c),
                                        className: `h-6 w-6 md:w-7 md:h-7 rounded-full border-2 transition ${color === c ? "border-white scale-110" : "border-gray-500 cursor-pointer"}`,
                                        style: {
                                            backgroundColor: c
                                        }
                                    }, c, false, {
                                        fileName: "[project]/components/RoomPage/DrawingBoard.jsx",
                                        lineNumber: 176,
                                        columnNumber: 38
                                    }, ("TURBOPACK compile-time value", void 0))),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "color",
                                    value: color,
                                    onChange: (e_2)=>setColor(e_2.target.value),
                                    className: "w-6 h-6 rounded-full cursor-pointer",
                                    ref: colorInputRef
                                }, void 0, false, {
                                    fileName: "[project]/components/RoomPage/DrawingBoard.jsx",
                                    lineNumber: 179,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    title: "Change color",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pipette$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pipette$3e$__["Pipette"], {
                                        className: "text-game-muted size-4 cursor-pointer hover:scale-110 transition",
                                        onClick: ()=>colorInputRef.current.click()
                                    }, void 0, false, {
                                        fileName: "[project]/components/RoomPage/DrawingBoard.jsx",
                                        lineNumber: 181,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/components/RoomPage/DrawingBoard.jsx",
                                    lineNumber: 180,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/RoomPage/DrawingBoard.jsx",
                            lineNumber: 175,
                            columnNumber: 23
                        }, ("TURBOPACK compile-time value", void 0)),
                        canDraw && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-2 items-center text-game-text",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm font-bold",
                                    children: "size"
                                }, void 0, false, {
                                    fileName: "[project]/components/RoomPage/DrawingBoard.jsx",
                                    lineNumber: 186,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "range",
                                    min: "1",
                                    max: "30",
                                    value: size,
                                    onChange: (e_3)=>setSize(Number(e_3.target.value)),
                                    className: "w-20 accent-game-blue"
                                }, void 0, false, {
                                    fileName: "[project]/components/RoomPage/DrawingBoard.jsx",
                                    lineNumber: 187,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm w-8 font-bold",
                                    children: size
                                }, void 0, false, {
                                    fileName: "[project]/components/RoomPage/DrawingBoard.jsx",
                                    lineNumber: 188,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/RoomPage/DrawingBoard.jsx",
                            lineNumber: 185,
                            columnNumber: 23
                        }, ("TURBOPACK compile-time value", void 0)),
                        !canDraw && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center font-bold text-game-muted text-sm py-1",
                            children: "👀 watch and guess!"
                        }, void 0, false, {
                            fileName: "[project]/components/RoomPage/DrawingBoard.jsx",
                            lineNumber: 191,
                            columnNumber: 24
                        }, ("TURBOPACK compile-time value", void 0)),
                        canDraw && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleClear_0,
                            disabled: !canDraw,
                            className: `px-2 py-1 md:px-3 md:py-1.5 rounded text-sm bg-red-500 text-white border-2 border-red-600 hover:bg-red-600 transition font-bold ${!canDraw ? "opacity-50 cursor-not-allowed" : "cursor-pointer"} `,
                            children: "🗑️ clear"
                        }, void 0, false, {
                            fileName: "[project]/components/RoomPage/DrawingBoard.jsx",
                            lineNumber: 195,
                            columnNumber: 23
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/RoomPage/DrawingBoard.jsx",
                    lineNumber: 165,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/RoomPage/DrawingBoard.jsx",
                lineNumber: 164,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: containerRef,
                className: "flex-1 p-2 flex items-center justify-center bg-[#e8e8e8] min-h-0 overflow-hidden",
                style: {
                    backgroundImage: "radial-gradient(#ccc 1px, transparent 1px)",
                    backgroundSize: "16px 16px"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                    ref: canvasRef,
                    className: `bg-white border-2 border-game-border rounded shadow-sm cursor-crosshair ${canDraw ? "cursor-crosshair" : "cursor-not-allowed"}`,
                    style: {
                        width: `${CANVAS_WIDTH * scale}px`,
                        height: `${CANVAS_HEIGHT * scale}px`,
                        maxWidth: "100%",
                        maxHeight: "100%",
                        touchAction: "none"
                    },
                    onMouseDown: startDrawing,
                    onMouseMove: draw,
                    onMouseUp: stopDrawing,
                    onMouseLeave: stopDrawing,
                    onTouchStart: startDrawing,
                    onTouchMove: draw,
                    onTouchEnd: stopDrawing
                }, void 0, false, {
                    fileName: "[project]/components/RoomPage/DrawingBoard.jsx",
                    lineNumber: 205,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/RoomPage/DrawingBoard.jsx",
                lineNumber: 201,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/RoomPage/DrawingBoard.jsx",
        lineNumber: 163,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
};
_s(DrawingBoard, "V6SvK8RB6FoouA4uH/OVIKe5N4U=");
_c = DrawingBoard;
const __TURBOPACK__default__export__ = DrawingBoard;
var _c;
__turbopack_context__.k.register(_c, "DrawingBoard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/RoomPage/ChatUpdates/PlayerJoined.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@/utils/utils'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
;
;
const PlayerJoined = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(6);
    if ($[0] !== "de883f73627edab6c8e8b50e07cdada3b4fa39182bb6b708ed0d550febeb76bd") {
        for(let $i = 0; $i < 6; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "de883f73627edab6c8e8b50e07cdada3b4fa39182bb6b708ed0d550febeb76bd";
    }
    const { message } = t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: "👋🏼"
        }, void 0, false, {
            fileName: "[project]/components/RoomPage/ChatUpdates/PlayerJoined.jsx",
            lineNumber: 17,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    let t2;
    if ($[2] !== message) {
        t2 = capitalizeFirst(message);
        $[2] = message;
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "border-2 flex gap-2 items-center text-game-text text-sm rounded-md px-3 py-2 border-game-blue bg-blue-50 font-semibold",
            children: [
                t1,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-bold text-game-blue-dark",
                            children: t2
                        }, void 0, false, {
                            fileName: "[project]/components/RoomPage/ChatUpdates/PlayerJoined.jsx",
                            lineNumber: 32,
                            columnNumber: 153
                        }, ("TURBOPACK compile-time value", void 0)),
                        "",
                        "joined the game!"
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/RoomPage/ChatUpdates/PlayerJoined.jsx",
                    lineNumber: 32,
                    columnNumber: 150
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/RoomPage/ChatUpdates/PlayerJoined.jsx",
            lineNumber: 32,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[4] = t2;
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    return t3;
};
_c = PlayerJoined;
const __TURBOPACK__default__export__ = PlayerJoined;
var _c;
__turbopack_context__.k.register(_c, "PlayerJoined");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/RoomPage/ChatUpdates/PlayerGuessed.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@/utils/utils'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
;
;
const PlayerGuessed = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(6);
    if ($[0] !== "f9b47239c6470adaf549a35d95b33467a36048640531d09265a7a2d67471137d") {
        for(let $i = 0; $i < 6; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "f9b47239c6470adaf549a35d95b33467a36048640531d09265a7a2d67471137d";
    }
    const { message } = t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: "✅"
        }, void 0, false, {
            fileName: "[project]/components/RoomPage/ChatUpdates/PlayerGuessed.jsx",
            lineNumber: 17,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    let t2;
    if ($[2] !== message) {
        t2 = capitalizeFirst(message);
        $[2] = message;
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "border-2 flex gap-2 items-center text-game-text text-sm rounded-md px-3 py-2 border-game-green bg-green-50 font-semibold",
            children: [
                t1,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-bold text-game-green-dark",
                            children: t2
                        }, void 0, false, {
                            fileName: "[project]/components/RoomPage/ChatUpdates/PlayerGuessed.jsx",
                            lineNumber: 32,
                            columnNumber: 155
                        }, ("TURBOPACK compile-time value", void 0)),
                        "",
                        "got it!"
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/RoomPage/ChatUpdates/PlayerGuessed.jsx",
                    lineNumber: 32,
                    columnNumber: 152
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/RoomPage/ChatUpdates/PlayerGuessed.jsx",
            lineNumber: 32,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[4] = t2;
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    return t3;
};
_c = PlayerGuessed;
const __TURBOPACK__default__export__ = PlayerGuessed;
var _c;
__turbopack_context__.k.register(_c, "PlayerGuessed");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/RoomPage/ChatUpdates/Updates.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
;
const Updates = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(3);
    if ($[0] !== "01c87bd4ead7e1c389e5b4b5d5e6c5e281127477171091aca61af83be2a4fc32") {
        for(let $i = 0; $i < 3; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "01c87bd4ead7e1c389e5b4b5d5e6c5e281127477171091aca61af83be2a4fc32";
    }
    const { message } = t0;
    let t1;
    if ($[1] !== message) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "border-2 flex gap-2 items-center text-game-muted text-sm rounded-md px-3 py-2 border-game-border bg-gray-50 font-semibold italic",
            children: message
        }, void 0, false, {
            fileName: "[project]/components/RoomPage/ChatUpdates/Updates.jsx",
            lineNumber: 16,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = message;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    return t1;
};
_c = Updates;
const __TURBOPACK__default__export__ = Updates;
var _c;
__turbopack_context__.k.register(_c, "Updates");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/RoomPage/ChatUpdates/GameEndedPlayersLeft.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@/utils/utils'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
;
;
const GameEndedPlayersLeft = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(6);
    if ($[0] !== "1cca6a180782880af47922ce8d6b298ef9ef1cfb12ad96dea1165be806b23c8f") {
        for(let $i = 0; $i < 6; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "1cca6a180782880af47922ce8d6b298ef9ef1cfb12ad96dea1165be806b23c8f";
    }
    const { message } = t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: "🏆"
        }, void 0, false, {
            fileName: "[project]/components/RoomPage/ChatUpdates/GameEndedPlayersLeft.jsx",
            lineNumber: 17,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    let t2;
    if ($[2] !== message) {
        t2 = capitalizeFirst(message);
        $[2] = message;
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "border-2 flex gap-2 items-center text-game-text text-sm rounded-md px-3 py-2 border-game-green bg-green-50 font-semibold",
            children: [
                t1,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-bold text-game-green-dark",
                            children: t2
                        }, void 0, false, {
                            fileName: "[project]/components/RoomPage/ChatUpdates/GameEndedPlayersLeft.jsx",
                            lineNumber: 32,
                            columnNumber: 155
                        }, ("TURBOPACK compile-time value", void 0)),
                        "",
                        "wins - everyone else left!"
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/RoomPage/ChatUpdates/GameEndedPlayersLeft.jsx",
                    lineNumber: 32,
                    columnNumber: 152
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/RoomPage/ChatUpdates/GameEndedPlayersLeft.jsx",
            lineNumber: 32,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[4] = t2;
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    return t3;
};
_c = GameEndedPlayersLeft;
const __TURBOPACK__default__export__ = GameEndedPlayersLeft;
var _c;
__turbopack_context__.k.register(_c, "GameEndedPlayersLeft");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/RoomPage/LobbyComponents/WaitingScreen.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
;
const WaitingScreen = ()=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "30d20428878fed77a4c9b995d33336c3044c8110a4d45b577a1d50db63bbf81a") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "30d20428878fed77a4c9b995d33336c3044c8110a4d45b577a1d50db63bbf81a";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col h-full",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 p-4 flex flex-col items-center justify-center bg-white min-h-0 overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-4xl mb-3",
                        children: "⏳"
                    }, void 0, false, {
                        fileName: "[project]/components/RoomPage/LobbyComponents/WaitingScreen.jsx",
                        lineNumber: 13,
                        columnNumber: 151
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "font-bold text-game-text max-md:text-sm text-center",
                        children: "hang tight - host will start the game soon"
                    }, void 0, false, {
                        fileName: "[project]/components/RoomPage/LobbyComponents/WaitingScreen.jsx",
                        lineNumber: 13,
                        columnNumber: 185
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/RoomPage/LobbyComponents/WaitingScreen.jsx",
                lineNumber: 13,
                columnNumber: 48
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/RoomPage/LobbyComponents/WaitingScreen.jsx",
            lineNumber: 13,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
};
_c = WaitingScreen;
const __TURBOPACK__default__export__ = WaitingScreen;
var _c;
__turbopack_context__.k.register(_c, "WaitingScreen");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/RoomPage/LobbyComponents/SettingsScreen.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/settings.js [app-client] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trophy.js [app-client] (ecmascript) <export default as Trophy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
(()=>{
    const e = new Error("Cannot find module '@/socket/socket'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const SettingsScreen = (t0)=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(60);
    if ($[0] !== "09a27f4295c39c731c98a96a0ea3a4b5cfe28ce1c7224d01d07fc39bc5fc73da") {
        for(let $i = 0; $i < 60; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "09a27f4295c39c731c98a96a0ea3a4b5cfe28ce1c7224d01d07fc39bc5fc73da";
    }
    const { roomCode, playerId, hostId } = t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = initSocket();
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    const socket = t1;
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = {
            maxPlayers: 8,
            roundDuration: 60,
            maxRounds: 3,
            difficulty: "easy"
        };
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    const [settings, setSettings] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t2);
    const [showSettings, setShowSettings] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [animateSettings, setAnimateSettings] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [tempSettings, setTempSettings] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(settings);
    const [isHost, setIsHost] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t3;
    let t4;
    if ($[3] !== hostId || $[4] !== playerId) {
        t3 = ()=>{
            setMounted(true);
            setIsHost(playerId === hostId);
        };
        t4 = [
            playerId,
            hostId
        ];
        $[3] = hostId;
        $[4] = playerId;
        $[5] = t3;
        $[6] = t4;
    } else {
        t3 = $[5];
        t4 = $[6];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t3, t4);
    let t5;
    let t6;
    if ($[7] !== roomCode) {
        t5 = ()=>{
            if (socket && roomCode) {
                socket.emit("fetch-settings", {
                    roomId: roomCode
                });
            }
            const handleSettingsUpdated = (data)=>{
                setSettings(data.settings);
                setTempSettings(data.settings);
                if (data.updatedBy) {}
            };
            const handleSettingsData = (data_0)=>{
                setSettings(data_0.settings);
                setTempSettings(data_0.settings);
            };
            if (socket) {
                socket.on("settings-updated", handleSettingsUpdated);
                socket.on("settings-data", handleSettingsData);
            }
            return ()=>{
                if (socket) {
                    socket.off("settings-updated", handleSettingsUpdated);
                    socket.off("settings-data", handleSettingsData);
                }
            };
        };
        t6 = [
            socket,
            roomCode
        ];
        $[7] = roomCode;
        $[8] = t5;
        $[9] = t6;
    } else {
        t5 = $[8];
        t6 = $[9];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t5, t6);
    let t7;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = (key, value)=>{
            setTempSettings((prev)=>({
                    ...prev,
                    [key]: value
                }));
        };
        $[10] = t7;
    } else {
        t7 = $[10];
    }
    const handleSettingChange = t7;
    let closeSettings;
    let handleCancelSettings;
    let handleSaveSettings;
    let openSettings;
    if ($[11] !== roomCode || $[12] !== settings || $[13] !== tempSettings) {
        handleSaveSettings = ()=>{
            if (socket && roomCode) {
                socket.emit("update-settings", {
                    roomCode,
                    settings: tempSettings
                });
                closeSettings();
            }
        };
        handleCancelSettings = ()=>{
            setTempSettings(settings);
            closeSettings();
        };
        let t8;
        if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
            t8 = ()=>{
                setShowSettings(true);
                requestAnimationFrame(()=>setAnimateSettings(true));
            };
            $[18] = t8;
        } else {
            t8 = $[18];
        }
        openSettings = t8;
        closeSettings = ()=>{
            setAnimateSettings(false);
            setTimeout(()=>setShowSettings(false), 300);
        };
        $[11] = roomCode;
        $[12] = settings;
        $[13] = tempSettings;
        $[14] = closeSettings;
        $[15] = handleCancelSettings;
        $[16] = handleSaveSettings;
        $[17] = openSettings;
    } else {
        closeSettings = $[14];
        handleCancelSettings = $[15];
        handleSaveSettings = $[16];
        openSettings = $[17];
    }
    let t8;
    if ($[19] !== animateSettings || $[20] !== closeSettings || $[21] !== handleCancelSettings || $[22] !== handleSaveSettings || $[23] !== tempSettings) {
        t8 = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `fixed inset-0 z-50 flex items-center justify-center p-4 bg-blck/40 tranisiton-opacity duration-300 ${animateSettings ? "opacity-100" : "opacity-0"}`,
                onClick: closeSettings,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `game-panel w-full max-w-md transform transition-all duration-300 ease-out ${animateSettings ? "scale-100 translate-y-0 opacity-100" : "scale-90 translate-y-6 opacity-0"}`,
                    onClick: _temp,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-4 border-b-2 border-game-border flex items-center justify-between shrink-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "font-bold text-game-text flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"], {
                                            className: "w-5 h-5"
                                        }, void 0, false, {
                                            fileName: "[project]/components/RoomPage/LobbyComponents/SettingsScreen.jsx",
                                            lineNumber: 163,
                                            columnNumber: 571
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        "room settings"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/RoomPage/LobbyComponents/SettingsScreen.jsx",
                                    lineNumber: 163,
                                    columnNumber: 506
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: closeSettings,
                                    className: "p-1 hover:bg-slate-100 rounded-full transition-colors",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        className: "w-5 h-5 text-slate-600"
                                    }, void 0, false, {
                                        fileName: "[project]/components/RoomPage/LobbyComponents/SettingsScreen.jsx",
                                        lineNumber: 163,
                                        columnNumber: 719
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/components/RoomPage/LobbyComponents/SettingsScreen.jsx",
                                    lineNumber: 163,
                                    columnNumber: 621
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/RoomPage/LobbyComponents/SettingsScreen.jsx",
                            lineNumber: 163,
                            columnNumber: 412
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-4 space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            classname: "text-sm font-semibold text-slate-700 mb-2 flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/RoomPage/LobbyComponents/SettingsScreen.jsx",
                                                    lineNumber: 163,
                                                    columnNumber: 895
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                " Maximum Players"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/RoomPage/LobbyComponents/SettingsScreen.jsx",
                                            lineNumber: 163,
                                            columnNumber: 810
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: tempSettings.maxPlayers,
                                            onChange: (e_0)=>handleSettingChange("maxPlayers", parseInt(e_0.target.value)),
                                            className: "w-full text-sm px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:outline-none",
                                            children: [
                                                4,
                                                5,
                                                6,
                                                7,
                                                8,
                                                9,
                                                10
                                            ].map(_temp2)
                                        }, void 0, false, {
                                            fileName: "[project]/components/RoomPage/LobbyComponents/SettingsScreen.jsx",
                                            lineNumber: 163,
                                            columnNumber: 948
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-slate-500 mt-1",
                                            children: "How many players can join the room"
                                        }, void 0, false, {
                                            fileName: "[project]/components/RoomPage/LobbyComponents/SettingsScreen.jsx",
                                            lineNumber: 163,
                                            columnNumber: 1262
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/RoomPage/LobbyComponents/SettingsScreen.jsx",
                                    lineNumber: 163,
                                    columnNumber: 805
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-sm font-semibold text-slate-700 mb-2 flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/RoomPage/LobbyComponents/SettingsScreen.jsx",
                                                    lineNumber: 163,
                                                    columnNumber: 1439
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                " Round Duration"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/RoomPage/LobbyComponents/SettingsScreen.jsx",
                                            lineNumber: 163,
                                            columnNumber: 1354
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: tempSettings.roundDuration,
                                            onChange: (e_1)=>handleSettingChange("roundDuration", parseInt(e_1.target.value)),
                                            className: "w-full text-sm px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:outline-none",
                                            children: [
                                                30,
                                                60,
                                                90,
                                                120
                                            ].map(_temp3)
                                        }, void 0, false, {
                                            fileName: "[project]/components/RoomPage/LobbyComponents/SettingsScreen.jsx",
                                            lineNumber: 163,
                                            columnNumber: 1491
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-slate-500 mt-1",
                                            children: "Time limit for each drawing round."
                                        }, void 0, false, {
                                            fileName: "[project]/components/RoomPage/LobbyComponents/SettingsScreen.jsx",
                                            lineNumber: 163,
                                            columnNumber: 1806
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/RoomPage/LobbyComponents/SettingsScreen.jsx",
                                    lineNumber: 163,
                                    columnNumber: 1349
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-sm font-semibold text-slate-700 mb-2 flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__["Trophy"], {
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/RoomPage/LobbyComponents/SettingsScreen.jsx",
                                                    lineNumber: 163,
                                                    columnNumber: 1983
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                "Number of Rounds"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/RoomPage/LobbyComponents/SettingsScreen.jsx",
                                            lineNumber: 163,
                                            columnNumber: 1898
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: tempSettings.maxRounds,
                                            onChange: (e_2)=>handleSettingChange("maxRounds", parseInt(e_2.target.value)),
                                            className: "w-full text-sm px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:outline-none",
                                            children: [
                                                3,
                                                4,
                                                5,
                                                6,
                                                7,
                                                8
                                            ].map(_temp4)
                                        }, void 0, false, {
                                            fileName: "[project]/components/RoomPage/LobbyComponents/SettingsScreen.jsx",
                                            lineNumber: 163,
                                            columnNumber: 2037
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-slate-500 mt-1",
                                            children: "Total number of rounds in the game"
                                        }, void 0, false, {
                                            fileName: "[project]/components/RoomPage/LobbyComponents/SettingsScreen.jsx",
                                            lineNumber: 163,
                                            columnNumber: 2345
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/RoomPage/LobbyComponents/SettingsScreen.jsx",
                                    lineNumber: 163,
                                    columnNumber: 1893
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-sm font-semibold text-slate-700 mb-2 flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/RoomPage/LobbyComponents/SettingsScreen.jsx",
                                                    lineNumber: 163,
                                                    columnNumber: 2522
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                "Difficulty Level"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/RoomPage/LobbyComponents/SettingsScreen.jsx",
                                            lineNumber: 163,
                                            columnNumber: 2437
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: tempSettings.difficulty,
                                            onChange: (e_3)=>handleSettingChange("difficulty", e_3.target.value),
                                            className: "w-full text-sm px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:outline-none",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "easy",
                                                    children: "Easy"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/RoomPage/LobbyComponents/SettingsScreen.jsx",
                                                    lineNumber: 163,
                                                    columnNumber: 2832
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "medium",
                                                    children: "Medium"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/RoomPage/LobbyComponents/SettingsScreen.jsx",
                                                    lineNumber: 163,
                                                    columnNumber: 2866
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "hard",
                                                    children: "Hard"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/RoomPage/LobbyComponents/SettingsScreen.jsx",
                                                    lineNumber: 163,
                                                    columnNumber: 2904
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/RoomPage/LobbyComponents/SettingsScreen.jsx",
                                            lineNumber: 163,
                                            columnNumber: 2573
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-slate-500 mt-1",
                                            children: "Word complexity and challenge level"
                                        }, void 0, false, {
                                            fileName: "[project]/components/RoomPage/LobbyComponents/SettingsScreen.jsx",
                                            lineNumber: 163,
                                            columnNumber: 2947
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/RoomPage/LobbyComponents/SettingsScreen.jsx",
                                    lineNumber: 163,
                                    columnNumber: 2432
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/RoomPage/LobbyComponents/SettingsScreen.jsx",
                            lineNumber: 163,
                            columnNumber: 774
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-4 border-t border-slate-200 flex gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleCancelSettings,
                                    className: "flex-1 px-4 py-2 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors font-medium cursor-pointer text-sm",
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/components/RoomPage/LobbyComponents/SettingsScreen.jsx",
                                    lineNumber: 163,
                                    columnNumber: 3099
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleSaveSettings,
                                    className: "game-btn flex-1 px-4 py-2 text-sm",
                                    children: "Save"
                                }, void 0, false, {
                                    fileName: "[project]/components/RoomPage/LobbyComponents/SettingsScreen.jsx",
                                    lineNumber: 163,
                                    columnNumber: 3303
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/RoomPage/LobbyComponents/SettingsScreen.jsx",
                            lineNumber: 163,
                            columnNumber: 3041
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/RoomPage/LobbyComponents/SettingsScreen.jsx",
                    lineNumber: 163,
                    columnNumber: 207
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/RoomPage/LobbyComponents/SettingsScreen.jsx",
                lineNumber: 163,
                columnNumber: 16
            }, ("TURBOPACK compile-time value", void 0));
        $[19] = animateSettings;
        $[20] = closeSettings;
        $[21] = handleCancelSettings;
        $[22] = handleSaveSettings;
        $[23] = tempSettings;
        $[24] = t8;
    } else {
        t8 = $[24];
    }
    const SettingsModal = t8;
    let t9;
    if ($[25] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "texxt-center font-bold text-game-text text-md py-2 mb-2",
            children: "⚙️ room settings"
        }, void 0, false, {
            fileName: "[project]/components/RoomPage/LobbyComponents/SettingsScreen.jsx",
            lineNumber: 176,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[25] = t9;
    } else {
        t9 = $[25];
    }
    let t10;
    if ($[26] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "flex items-center gap-2 font-medium tracking-wide",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                    className: "w-4 h-4"
                }, void 0, false, {
                    fileName: "[project]/components/RoomPage/LobbyComponents/SettingsScreen.jsx",
                    lineNumber: 183,
                    columnNumber: 79
                }, ("TURBOPACK compile-time value", void 0)),
                "Max PLayers:"
            ]
        }, void 0, true, {
            fileName: "[project]/components/RoomPage/LobbyComponents/SettingsScreen.jsx",
            lineNumber: 183,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[26] = t10;
    } else {
        t10 = $[26];
    }
    let t11;
    if ($[27] !== settings.maxPlayers) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between",
            children: [
                t10,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-semibold",
                    children: settings.maxPlayers
                }, void 0, false, {
                    fileName: "[project]/components/RoomPage/LobbyComponents/SettingsScreen.jsx",
                    lineNumber: 190,
                    columnNumber: 67
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/RoomPage/LobbyComponents/SettingsScreen.jsx",
            lineNumber: 190,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[27] = settings.maxPlayers;
        $[28] = t11;
    } else {
        t11 = $[28];
    }
    let t12;
    if ($[29] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "flex items-center gap-2 font-medium tracking-wide",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                    className: "w-4 h-4"
                }, void 0, false, {
                    fileName: "[project]/components/RoomPage/LobbyComponents/SettingsScreen.jsx",
                    lineNumber: 198,
                    columnNumber: 79
                }, ("TURBOPACK compile-time value", void 0)),
                "Round Duration:"
            ]
        }, void 0, true, {
            fileName: "[project]/components/RoomPage/LobbyComponents/SettingsScreen.jsx",
            lineNumber: 198,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[29] = t12;
    } else {
        t12 = $[29];
    }
    let t13;
    if ($[30] !== settings.roundDuration) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between",
            children: [
                t12,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-semibold",
                    children: [
                        settings.roundDuration,
                        " s"
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/RoomPage/LobbyComponents/SettingsScreen.jsx",
                    lineNumber: 205,
                    columnNumber: 67
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/RoomPage/LobbyComponents/SettingsScreen.jsx",
            lineNumber: 205,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[30] = settings.roundDuration;
        $[31] = t13;
    } else {
        t13 = $[31];
    }
    let t14;
    if ($[32] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "flex items-center gap-2 font-medium tracking-wide",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__["Trophy"], {
                    className: "w-4 h-4"
                }, void 0, false, {
                    fileName: "[project]/components/RoomPage/LobbyComponents/SettingsScreen.jsx",
                    lineNumber: 213,
                    columnNumber: 79
                }, ("TURBOPACK compile-time value", void 0)),
                " Total Rounds:"
            ]
        }, void 0, true, {
            fileName: "[project]/components/RoomPage/LobbyComponents/SettingsScreen.jsx",
            lineNumber: 213,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[32] = t14;
    } else {
        t14 = $[32];
    }
    let t15;
    if ($[33] !== settings.maxRounds) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            clasName: "flex items-center justify-between",
            children: [
                t14,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-semibold",
                    children: settings.maxRounds
                }, void 0, false, {
                    fileName: "[project]/components/RoomPage/LobbyComponents/SettingsScreen.jsx",
                    lineNumber: 220,
                    columnNumber: 66
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/RoomPage/LobbyComponents/SettingsScreen.jsx",
            lineNumber: 220,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[33] = settings.maxRounds;
        $[34] = t15;
    } else {
        t15 = $[34];
    }
    let t16;
    if ($[35] === Symbol.for("react.memo_cache_sentinel")) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "flex items-center gap-2 font-medium tracking-wide",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                    className: "w-4 h-4"
                }, void 0, false, {
                    fileName: "[project]/components/RoomPage/LobbyComponents/SettingsScreen.jsx",
                    lineNumber: 228,
                    columnNumber: 79
                }, ("TURBOPACK compile-time value", void 0)),
                "Difficulty:"
            ]
        }, void 0, true, {
            fileName: "[project]/components/RoomPage/LobbyComponents/SettingsScreen.jsx",
            lineNumber: 228,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[35] = t16;
    } else {
        t16 = $[35];
    }
    let t17;
    if ($[36] !== settings.difficulty) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between",
            children: [
                t16,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-semibold capitalize",
                    children: settings.difficulty
                }, void 0, false, {
                    fileName: "[project]/components/RoomPage/LobbyComponents/SettingsScreen.jsx",
                    lineNumber: 235,
                    columnNumber: 67
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/RoomPage/LobbyComponents/SettingsScreen.jsx",
            lineNumber: 235,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[36] = settings.difficulty;
        $[37] = t17;
    } else {
        t17 = $[37];
    }
    let t18;
    if ($[38] !== t11 || $[39] !== t13 || $[40] !== t15 || $[41] !== t17) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "game-panel px-4 py-6 w-full max-w-md mb-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-3 text-sm text-game-text",
                children: [
                    t11,
                    t13,
                    t15,
                    t17
                ]
            }, void 0, true, {
                fileName: "[project]/components/RoomPage/LobbyComponents/SettingsScreen.jsx",
                lineNumber: 243,
                columnNumber: 70
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/RoomPage/LobbyComponents/SettingsScreen.jsx",
            lineNumber: 243,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[38] = t11;
        $[39] = t13;
        $[40] = t15;
        $[41] = t17;
        $[42] = t18;
    } else {
        t18 = $[42];
    }
    let t19;
    if ($[43] !== isHost || $[44] !== openSettings) {
        t19 = isHost && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: openSettings,
            className: "game-btn-secondary game-btn flex items-center gap-2 px-4 py-2 text-sm",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"], {
                    className: "w-4 h-4"
                }, void 0, false, {
                    fileName: "[project]/components/RoomPage/LobbyComponents/SettingsScreen.jsx",
                    lineNumber: 254,
                    columnNumber: 134
                }, ("TURBOPACK compile-time value", void 0)),
                "change settings"
            ]
        }, void 0, true, {
            fileName: "[project]/components/RoomPage/LobbyComponents/SettingsScreen.jsx",
            lineNumber: 254,
            columnNumber: 21
        }, ("TURBOPACK compile-time value", void 0));
        $[43] = isHost;
        $[44] = openSettings;
        $[45] = t19;
    } else {
        t19 = $[45];
    }
    let t20;
    if ($[46] !== isHost) {
        t20 = !isHost && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs text-game-muted mt-2 font-semibold",
            children: "only the host can change settings"
        }, void 0, false, {
            fileName: "[project]/components/RoomPage/LobbyComponents/SettingsScreen.jsx",
            lineNumber: 263,
            columnNumber: 22
        }, ("TURBOPACK compile-time value", void 0));
        $[46] = isHost;
        $[47] = t20;
    } else {
        t20 = $[47];
    }
    let t21;
    if ($[48] !== t18 || $[49] !== t19 || $[50] !== t20) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1 p-4 flex flex-col items-center justify-center bg-white min-h-0 overflow-hidden",
            children: [
                t9,
                t18,
                t19,
                t20
            ]
        }, void 0, true, {
            fileName: "[project]/components/RoomPage/LobbyComponents/SettingsScreen.jsx",
            lineNumber: 271,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[48] = t18;
        $[49] = t19;
        $[50] = t20;
        $[51] = t21;
    } else {
        t21 = $[51];
    }
    let t22;
    if ($[52] !== SettingsModal || $[53] !== isHost || $[54] !== mounted || $[55] !== showSettings) {
        t22 = mounted && showSettings && isHost && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPortal"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SettingsModal, {}, void 0, false, {
            fileName: "[project]/components/RoomPage/LobbyComponents/SettingsScreen.jsx",
            lineNumber: 281,
            columnNumber: 61
        }, ("TURBOPACK compile-time value", void 0)), document.body);
        $[52] = SettingsModal;
        $[53] = isHost;
        $[54] = mounted;
        $[55] = showSettings;
        $[56] = t22;
    } else {
        t22 = $[56];
    }
    let t23;
    if ($[57] !== t21 || $[58] !== t22) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col h-full",
            children: [
                t21,
                t22
            ]
        }, void 0, true, {
            fileName: "[project]/components/RoomPage/LobbyComponents/SettingsScreen.jsx",
            lineNumber: 292,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[57] = t21;
        $[58] = t22;
        $[59] = t23;
    } else {
        t23 = $[59];
    }
    return t23;
};
_s(SettingsScreen, "EKqv0z5IbFN9+tVNJXAEN7jT158=");
_c = SettingsScreen;
const __TURBOPACK__default__export__ = SettingsScreen;
function _temp(e) {
    return e.stopPropagation();
}
function _temp2(num) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
        value: num,
        children: [
            num,
            "players"
        ]
    }, num, true, {
        fileName: "[project]/components/RoomPage/LobbyComponents/SettingsScreen.jsx",
        lineNumber: 306,
        columnNumber: 10
    }, this);
}
function _temp3(duration) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
        value: duration,
        children: [
            duration,
            "seconds"
        ]
    }, duration, true, {
        fileName: "[project]/components/RoomPage/LobbyComponents/SettingsScreen.jsx",
        lineNumber: 309,
        columnNumber: 10
    }, this);
}
function _temp4(rounds) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
        value: rounds,
        children: [
            rounds,
            " rounds"
        ]
    }, rounds, true, {
        fileName: "[project]/components/RoomPage/LobbyComponents/SettingsScreen.jsx",
        lineNumber: 312,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "SettingsScreen");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/RoomPage/LobbyComponents/HintDialog.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lightbulb.js [app-client] (ecmascript) <export default as Lightbulb>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const HintDialog = ({ hint, timeLeft })=>{
    _s();
    const canShowHint = timeLeft <= 20 && timeLeft > 0;
    if (!canShowHint) {
        return null;
    }
    const [showHint, setShowHint] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [animateHint, setAnimateHint] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HintDialog.useEffect": ()=>{
            setMounted(true);
        }
    }["HintDialog.useEffect"], []);
    const openHint = ()=>{
        setShowHint(true);
        requestAnimationFrame(()=>setAnimateHint(true));
    };
    const closeHint = ()=>{
        setAnimateHint(false);
        setTimeout(()=>setShowHint(false), 300);
    };
    const HintModal = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 transition-opacity duration-300 ${animateHint ? "opacity-100" : "opacity-0"}`,
            onClick: closeHint,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `game-panel w-full max-w-sm transform transition-all duration-300 ease-out
                    ${animateHint ? "scale-100 translate-y-0 opacity-100" : "scale-90 translate-y-6 opacity-0"}`,
                onClick: (e)=>e.stopPropagation(),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "font-bold text-game-text flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "font-bold text-game-text flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__["Lightbulb"], {
                                        className: "w-5 h-5 text-game-orange"
                                    }, void 0, false, {
                                        fileName: "[project]/components/RoomPage/LobbyComponents/HintDialog.jsx",
                                        lineNumber: 33,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    "need a hint?"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/RoomPage/LobbyComponents/HintDialog.jsx",
                                lineNumber: 32,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: closeHint,
                                className: "p-1 hover:bg-gray-100 rounded cursor-pointer",
                                "aria-label": "Close hint",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    className: "w-5 h-5 text-game-muted"
                                }, void 0, false, {
                                    fileName: "[project]/components/RoomPage/LobbyComponents/HintDialog.jsx",
                                    lineNumber: 37,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/components/RoomPage/LobbyComponents/HintDialog.jsx",
                                lineNumber: 36,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/RoomPage/LobbyComponents/HintDialog.jsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4",
                        children: hint ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-game-text text-sm font-semibold leading-relaxed",
                            children: hint
                        }, void 0, false, {
                            fileName: "[project]/components/RoomPage/LobbyComponents/HintDialog.jsx",
                            lineNumber: 41,
                            columnNumber: 19
                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-center py-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "animate-pulse text-game-muted font-semibold",
                                children: "thinking..."
                            }, void 0, false, {
                                fileName: "[project]/components/RoomPage/LobbyComponents/HintDialog.jsx",
                                lineNumber: 44,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/components/RoomPage/LobbyComponents/HintDialog.jsx",
                            lineNumber: 43,
                            columnNumber: 20
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/RoomPage/LobbyComponents/HintDialog.jsx",
                        lineNumber: 40,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-3 border-t-2 border-game-border",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: closeHint,
                            className: "game-btn w-full py-2 text-sm",
                            children: "ok!"
                        }, void 0, false, {
                            fileName: "[project]/components/RoomPage/LobbyComponents/HintDialog.jsx",
                            lineNumber: 50,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/RoomPage/LobbyComponents/HintDialog.jsx",
                        lineNumber: 49,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/RoomPage/LobbyComponents/HintDialog.jsx",
                lineNumber: 29,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/RoomPage/LobbyComponents/HintDialog.jsx",
            lineNumber: 28,
            columnNumber: 27
        }, ("TURBOPACK compile-time value", void 0));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: openHint,
                className: "bg-game-orange text-white text-xs font-bold px-2 py-1 rounded border-2 border-[#c88a20] flex items-center gap-1 cursor-pointer hover:brightness-105",
                "aria-label": "Open hint dialog",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__["Lightbulb"], {
                        className: "w-3.5 h-3.5"
                    }, void 0, false, {
                        fileName: "[project]/components/RoomPage/LobbyComponents/HintDialog.jsx",
                        lineNumber: 58,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    "hint"
                ]
            }, void 0, true, {
                fileName: "[project]/components/RoomPage/LobbyComponents/HintDialog.jsx",
                lineNumber: 57,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            mounted && showHint && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPortal"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(HintModal, {}, void 0, false, {
                fileName: "[project]/components/RoomPage/LobbyComponents/HintDialog.jsx",
                lineNumber: 62,
                columnNumber: 44
            }, ("TURBOPACK compile-time value", void 0)), document.body)
        ]
    }, void 0, true, {
        fileName: "[project]/components/RoomPage/LobbyComponents/HintDialog.jsx",
        lineNumber: 56,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
};
_s(HintDialog, "BNt9zq1jEkluhRP84FCfRqViuOQ=");
_c = HintDialog;
const __TURBOPACK__default__export__ = HintDialog;
var _c;
__turbopack_context__.k.register(_c, "HintDialog");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/RoomPage/VoiceChat/VoiceChat.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mic.js [app-client] (ecmascript) <export default as Mic>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MicOff$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mic-off.js [app-client] (ecmascript) <export default as MicOff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/volume-2.js [app-client] (ecmascript) <export default as Volume2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__VolumeX$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/volume-x.js [app-client] (ecmascript) <export default as VolumeX>");
(()=>{
    const e = new Error("Cannot find module '@/socket/socket'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const VoiceChat = ({ roomCode, playerId, isCurrentPlayerDrawer })=>{
    _s();
    const socket = initSocket();
    const [isMicOn, setIsMicOn] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isSpeakerOn, setIsSpeakerOn] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [connectedPeers, setConnectedPeers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const localStreamRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const pcs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Map());
    const audios = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Map());
    const makingOffer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Map());
    const ignoreOffer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Map());
    const iceConfig = {
        iceServers: [
            {
                urls: "stun:stun.l.google.com:19302"
            }
        ]
    };
    const isPoliteForPeer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "VoiceChat.useCallback[isPoliteForPeer]": (peerSocketId)=>socket.id < peerSocketId
    }["VoiceChat.useCallback[isPoliteForPeer]"], [
        socket
    ]);
    const getPC = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "VoiceChat.useCallback[getPC]": (peerId)=>{
            if (pcs.current.has(peerId)) return pcs.current.get(peerId);
            const pc = new RTCPeerConnection(iceConfig);
            pcs.current.set(peerId, pc);
            makingOffer.current.set(peerId, false);
            ignoreOffer.current.set(peerId, false);
            if (localStreamRef.current) {
                localStreamRef.current.getTracks().forEach({
                    "VoiceChat.useCallback[getPC]": (track)=>pc.addTrack(track, localStreamRef.current)
                }["VoiceChat.useCallback[getPC]"]);
            }
            pc.ontrack = ({
                "VoiceChat.useCallback[getPC]": (e)=>{
                    let audio = audios.current.get(peerId);
                    if (!audio) {
                        audio = new Audio();
                        audio.autoplay = true;
                        audio.playsInline = true;
                        audios.current.set(peerId, audio);
                    }
                    audio.srcObject = e.streams[0];
                    audio.volume = isSpeakerOn ? 1 : 0;
                }
            })["VoiceChat.useCallback[getPC]"];
            pc.onicecandidate = ({
                "VoiceChat.useCallback[getPC]": (e_0)=>{
                    if (e_0.candidate) {
                        socket.emit("webrtc-ice-candidate", {
                            targetSocketId: peerId,
                            candidate: e_0.candidate
                        });
                    }
                }
            })["VoiceChat.useCallback[getPC]"];
            pc.onconnectionstatechange = ({
                "VoiceChat.useCallback[getPC]": ()=>{
                    if (pc.connectionState === "connected") {
                        setConnectedPeers({
                            "VoiceChat.useCallback[getPC]": (v)=>v + 1
                        }["VoiceChat.useCallback[getPC]"]);
                    }
                    if ([
                        "failed",
                        "disconnected",
                        "closed"
                    ].includes(pc.connectionState)) {
                        setConnectedPeers({
                            "VoiceChat.useCallback[getPC]": (v_0)=>Math.max(0, v_0 - 1)
                        }["VoiceChat.useCallback[getPC]"]);
                    }
                }
            })["VoiceChat.useCallback[getPC]"];
            pc.onnegotiationneeded = ({
                "VoiceChat.useCallback[getPC]": async ()=>{
                    try {
                        makingOffer.current.set(peerId, true);
                        await pc.setLocalDescription(await pc.createOffer());
                        socket.emit("webrtc-offer", {
                            targetSocketId: peerId,
                            offer: pc.localDescription
                        });
                    } catch (err) {
                        console.error("Negotiation error:", err);
                    } finally{
                        makingOffer.current.set(peerId, false);
                    }
                }
            })["VoiceChat.useCallback[getPC]"];
            return pc;
        }
    }["VoiceChat.useCallback[getPC]"], [
        socket,
        isSpeakerOn
    ]);
    const onOffer = async ({ offer, senderSocketId })=>{
        const pc_0 = getPC(senderSocketId);
        const offerCollision = makingOffer.current.get(senderSocketId) || pc_0.signalingState !== "stable";
        const politePeer = isPoliteForPeer(senderSocketId);
        ignoreOffer.current.set(senderSocketId, !politePeer && offerCollision);
        if (ignoreOffer.current.get(senderSocketId)) return;
        try {
            if (offerCollision) {
                await Promise.all([
                    pc_0.setLocalDescription({
                        type: "rollback"
                    }),
                    pc_0.setRemoteDescription(offer)
                ]);
            } else {
                await pc_0.setRemoteDescription(offer);
            }
            await pc_0.setLocalDescription(await pc_0.createAnswer());
            socket.emit("webrtc-answer", {
                targetSocketId: senderSocketId,
                answer: pc_0.localDescription
            });
        } catch (err_0) {
            console.error("Offer handling failed:", err_0);
        }
    };
    const onAnswer = async ({ answer, senderSocketId: senderSocketId_0 })=>{
        const pc_1 = pcs.current.get(senderSocketId_0);
        if (!pc_1) return;
        if (pc_1.signalingState !== "have-local-offer") {
            console.warn("Ignoring answer in state:", pc_1.signalingState);
            return;
        }
        try {
            await pc_1.setRemoteDescription(answer);
        } catch (err_1) {
            console.error("Answer error:", err_1);
        }
    };
    const onIce = async ({ candidate, senderSocketId: senderSocketId_1 })=>{
        const pc_2 = pcs.current.get(senderSocketId_1);
        if (!pc_2) return;
        try {
            await pc_2.addIceCandidate(candidate);
        } catch (err_2) {
            if (!ignoreOffer.current.get(senderSocketId_1)) {
                console.error("ICE error:", err_2);
            }
        }
    };
    const startMic = async ()=>{
        localStreamRef.current = await navigator.mediaDevices.getUserMedia({
            audio: true
        });
        socket.emit("join-voice", {
            roomCode,
            playerId
        });
        setIsMicOn(true);
    };
    const stopMic = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "VoiceChat.useCallback[stopMic]": ()=>{
            localStreamRef.current?.getTracks().forEach({
                "VoiceChat.useCallback[stopMic]": (t)=>t.stop()
            }["VoiceChat.useCallback[stopMic]"]);
            localStreamRef.current = null;
            pcs.current.forEach({
                "VoiceChat.useCallback[stopMic]": (pc_3)=>pc_3.close()
            }["VoiceChat.useCallback[stopMic]"]);
            pcs.current.clear();
            audios.current.forEach({
                "VoiceChat.useCallback[stopMic]": (a)=>{
                    a.pause();
                    a.srcObject = null;
                }
            }["VoiceChat.useCallback[stopMic]"]);
            audios.current.clear();
            socket.emit("leave-voice", {
                roomCode,
                playerId
            });
            setConnectedPeers(0);
            setIsMicOn(false);
        }
    }["VoiceChat.useCallback[stopMic]"], [
        socket,
        roomCode,
        playerId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "VoiceChat.useEffect": ()=>{
            socket.on("webrtc-offer", onOffer);
            socket.on("webrtc-answer", onAnswer);
            socket.on("webrtc-ice-candidate", onIce);
            socket.on("voice-users-list", {
                "VoiceChat.useEffect": ({ users })=>users.forEach({
                        "VoiceChat.useEffect": (u)=>getPC(u.socketId)
                    }["VoiceChat.useEffect"])
            }["VoiceChat.useEffect"]);
            socket.on("voice-user-joined", {
                "VoiceChat.useEffect": ({ socketId })=>getPC(socketId)
            }["VoiceChat.useEffect"]);
            return ({
                "VoiceChat.useEffect": ()=>{
                    socket.off("webrtc-offer", onOffer);
                    socket.off("webrtc-answer", onAnswer);
                    socket.off("webrtc-ice-candidate", onIce);
                    socket.off("voice-users-list");
                    socket.off("voice-user-joined");
                }
            })["VoiceChat.useEffect"];
        }
    }["VoiceChat.useEffect"], [
        socket,
        getPC
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "VoiceChat.useEffect": ()=>{
            return ({
                "VoiceChat.useEffect": ()=>stopMic()
            })["VoiceChat.useEffect"];
        }
    }["VoiceChat.useEffect"], [
        stopMic
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex justify-start items-center gap-2",
        children: [
            true && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: `p-2 rounded-full transition-all cursor-pointer
                    ${isMicOn ? "bg-green-500 hover:bg-green-600 text-white" : "bg-gray-200 hover:bg-gray-300 text-gray-700"}`,
                title: isMicOn ? "Turn off microphone" : "Turn on microphone",
                onClick: isMicOn ? stopMic : startMic,
                children: isMicOn ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic$3e$__["Mic"], {
                    className: "w-5 h-5"
                }, void 0, false, {
                    fileName: "[project]/components/RoomPage/VoiceChat/VoiceChat.jsx",
                    lineNumber: 185,
                    columnNumber: 22
                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MicOff$3e$__["MicOff"], {
                    className: "w-5 h-5"
                }, void 0, false, {
                    fileName: "[project]/components/RoomPage/VoiceChat/VoiceChat.jsx",
                    lineNumber: 185,
                    columnNumber: 52
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/RoomPage/VoiceChat/VoiceChat.jsx",
                lineNumber: 183,
                columnNumber: 16
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>{
                    setIsSpeakerOn((v_1)=>!v_1);
                    audios.current.forEach((a_0)=>a_0.volume = isSpeakerOn ? 0 : 1);
                },
                disabled: !isMicOn,
                className: `p-2 rounded-full transition-all cursor-pointer
                ${isSpeakerOn ? "bg-blue-500 hover:bg-blue-600 text-white" : "bg-gray-200 hover:bg-gray-300 text-gray-700"}`,
                title: isSpeakerOn ? "Mute all players" : "Unmute all players",
                children: isSpeakerOn ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__["Volume2"], {
                    className: "w-5 h-5"
                }, void 0, false, {
                    fileName: "[project]/components/RoomPage/VoiceChat/VoiceChat.jsx",
                    lineNumber: 193,
                    columnNumber: 24
                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__VolumeX$3e$__["VolumeX"], {
                    className: "w-5 h-5"
                }, void 0, false, {
                    fileName: "[project]/components/RoomPage/VoiceChat/VoiceChat.jsx",
                    lineNumber: 193,
                    columnNumber: 58
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/RoomPage/VoiceChat/VoiceChat.jsx",
                lineNumber: 188,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/RoomPage/VoiceChat/VoiceChat.jsx",
        lineNumber: 182,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
};
_s(VoiceChat, "8la2+9snL6HjIUAjZjL6e2ihU7k=");
_c = VoiceChat;
const __TURBOPACK__default__export__ = VoiceChat;
var _c;
__turbopack_context__.k.register(_c, "VoiceChat");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/RoomPage/GameSoundsEffects/GameSoundEffects.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
const GameSoundEffects = (t0)=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(12);
    if ($[0] !== "1b455f39607683f656e4d7a97d7c65e321f89c482e17387e838215489baef480") {
        for(let $i = 0; $i < 12; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "1b455f39607683f656e4d7a97d7c65e321f89c482e17387e838215489baef480";
    }
    const { gamePhase, timeLeft } = t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = {};
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    const audiosRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(t1);
    const prevPhaseRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const urgentPlayedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    let t2;
    let t3;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = ()=>{
            audiosRef.current = {
                gameStart: new Audio("/sounds/game-start.mp3"),
                turnEnd: new Audio("/sounds/round-end.wav"),
                roundEnd: new Audio("/sounds/round-end.wav"),
                gameEnd: new Audio("/sounds/game-end.wav"),
                urgent: new Audio("/sounds/timer-urgent.mp3")
            };
            Object.values(audiosRef.current).forEach(_temp);
            return ()=>{
                Object.values(audiosRef.current).forEach(_temp2);
            };
        };
        t3 = [];
        $[2] = t2;
        $[3] = t3;
    } else {
        t2 = $[2];
        t3 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t2, t3);
    let t4;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        const stopAllSounds = ()=>{
            Object.values(audiosRef.current).forEach(_temp3);
        };
        t4 = (key)=>{
            const audio_2 = audiosRef.current[key];
            if (!audio_2) {
                return;
            }
            stopAllSounds();
            audio_2.currentTime = 0;
            audio_2.play().catch(_temp4);
        };
        $[4] = t4;
    } else {
        t4 = $[4];
    }
    const play = t4;
    let t5;
    let t6;
    if ($[5] !== gamePhase) {
        t5 = ()=>{
            if (gamePhase !== prevPhaseRef.current) {
                bb19: switch(gamePhase){
                    case "starting":
                        {
                            play("gameStart");
                            break bb19;
                        }
                    case "turn-end":
                        {
                            play("turnEnd");
                            break bb19;
                        }
                    case "round-end":
                        {
                            play("roundEnd");
                            break bb19;
                        }
                    case "game-end":
                        {
                            play("gameEnd");
                            break bb19;
                        }
                    default:
                }
            }
            prevPhaseRef.current = gamePhase;
        };
        t6 = [
            gamePhase
        ];
        $[5] = gamePhase;
        $[6] = t5;
        $[7] = t6;
    } else {
        t5 = $[6];
        t6 = $[7];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t5, t6);
    let t7;
    let t8;
    if ($[8] !== gamePhase || $[9] !== timeLeft) {
        t7 = ()=>{
            if (gamePhase === "drawing") {
                if (timeLeft === 10 && !urgentPlayedRef.current) {
                    play("urgent");
                    urgentPlayedRef.current = true;
                }
                if (timeLeft > 10) {
                    urgentPlayedRef.current = false;
                }
            } else {
                urgentPlayedRef.current = false;
            }
        };
        t8 = [
            timeLeft,
            gamePhase
        ];
        $[8] = gamePhase;
        $[9] = timeLeft;
        $[10] = t7;
        $[11] = t8;
    } else {
        t7 = $[10];
        t8 = $[11];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t7, t8);
    return null;
};
_s(GameSoundEffects, "KYJBlc6PogKFySk9rc/aqsz1l1A=");
_c = GameSoundEffects;
const __TURBOPACK__default__export__ = GameSoundEffects;
function _temp(audio) {
    audio.volume = 0.5;
    audio.preload = "auto";
}
function _temp2(audio_0) {
    audio_0.pause();
    audio_0.currentTime = 0;
}
function _temp3(audio_1) {
    if (!audio_1) {
        return;
    }
    audio_1.pause();
    audio_1.currentTime = 0;
}
function _temp4() {}
var _c;
__turbopack_context__.k.register(_c, "GameSoundEffects");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/RoomPage/ChatUpdates/SpamWarning.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
;
const SpamWarning = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(3);
    if ($[0] !== "4052806f4bb81ecde499260cec1dd7190aee42a085ff9ce3491ddd6a690045ce") {
        for(let $i = 0; $i < 3; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "4052806f4bb81ecde499260cec1dd7190aee42a085ff9ce3491ddd6a690045ce";
    }
    const { message } = t0;
    let t1;
    if ($[1] !== message) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "border-2 flex gap-2 items-center text-red-700 text-sm rounded-md px-3 py-2 border-red-400 bg-red-50 font-bold",
            children: [
                "⚠️ ",
                message
            ]
        }, void 0, true, {
            fileName: "[project]/components/RoomPage/ChatUpdates/SpamWarning.jsx",
            lineNumber: 16,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = message;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    return t1;
};
_c = SpamWarning;
const __TURBOPACK__default__export__ = SpamWarning;
var _c;
__turbopack_context__.k.register(_c, "SpamWarning");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/RoomPage/GameLobby.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gamepad$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Gamepad2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/gamepad-2.js [app-client] (ecmascript) <export default as Gamepad2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-circle.js [app-client] (ecmascript) <export default as MessageCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2d$horizontal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SendHorizontal$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/send-horizontal.js [app-client] (ecmascript) <export default as SendHorizontal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trophy.js [app-client] (ecmascript) <export default as Trophy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$palette$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Palette$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/palette.js [app-client] (ecmascript) <export default as Palette>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/copy.js [app-client] (ecmascript) <export default as Copy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$RoomPage$2f$MessageBox$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/RoomPage/MessageBox.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$socket$2f$socket$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/socket/socket.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$RoomPage$2f$PlayerCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/RoomPage/PlayerCard.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$RoomPage$2f$Header$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/RoomPage/Header.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$RoomPage$2f$DrawingBoard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/RoomPage/DrawingBoard.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@/utils/utils'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hot-toast/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$RoomPage$2f$ChatUpdates$2f$PlayerJoined$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/RoomPage/ChatUpdates/PlayerJoined.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$RoomPage$2f$ChatUpdates$2f$PlayerGuessed$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/RoomPage/ChatUpdates/PlayerGuessed.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$RoomPage$2f$ChatUpdates$2f$Updates$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/RoomPage/ChatUpdates/Updates.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$RoomPage$2f$ChatUpdates$2f$GameEndedPlayersLeft$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/RoomPage/ChatUpdates/GameEndedPlayersLeft.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$RoomPage$2f$LobbyComponents$2f$WaitingScreen$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/RoomPage/LobbyComponents/WaitingScreen.jsx [app-client] (ecmascript)");
// import VoiceChat from "./VoiceChat/VoiceChat";
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$RoomPage$2f$LobbyComponents$2f$SettingsScreen$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/RoomPage/LobbyComponents/SettingsScreen.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$RoomPage$2f$LobbyComponents$2f$HintDialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/RoomPage/LobbyComponents/HintDialog.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$RoomPage$2f$VoiceChat$2f$VoiceChat$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/RoomPage/VoiceChat/VoiceChat.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$RoomPage$2f$GameSoundsEffects$2f$GameSoundEffects$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/RoomPage/GameSoundsEffects/GameSoundEffects.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$RoomPage$2f$ChatUpdates$2f$SpamWarning$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/RoomPage/ChatUpdates/SpamWarning.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const GameLobby = (t0)=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(269);
    if ($[0] !== "63bbc56ca983515b2333c292cd444d61ed271e7f28185300c4206bdaf3cecde3") {
        for(let $i = 0; $i < 269; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "63bbc56ca983515b2333c292cd444d61ed271e7f28185300c4206bdaf3cecde3";
    }
    const { roomId } = t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = [];
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    const [players, setPlayers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t1);
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$socket$2f$socket$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initSocket"])();
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    const socket = t2;
    const [currentPlayer, setCurrentPlayer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    let t3;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = [];
        $[3] = t3;
    } else {
        t3 = $[3];
    }
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t3);
    const [messageInput, setMessageInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [hostId, setHostId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])();
    const [isReconnecting, setIsReconnecting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [invalidUser, setInvalidUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [gameStarted, setGameStarted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [gamePhase, setGamePhase] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("lobby");
    const [currentDrawer, setCurrentDrawer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [currentRound, setCurrentRound] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [maxRounds, setMaxRounds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(3);
    let t4;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = [];
        $[4] = t4;
    } else {
        t4 = $[4];
    }
    const [wordOptions, setWordOptions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t4);
    const [selectedWord, setSelectedWord] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [wordHint, setWordHint] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [aiHint, setAiHint] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [timeLeft, setTimeLeft] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    let t5;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = [];
        $[5] = t5;
    } else {
        t5 = $[5];
    }
    const [correctGuessers, setCorrectGuessers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t5);
    const [revealedWord, setRevealedWord] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    let t6;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = [];
        $[6] = t6;
    } else {
        t6 = $[6];
    }
    const [leaderboard, setLeaderboard] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t6);
    const [showLeaveConfirm, setShowLeaveConfirm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [enableSendMessage, setEnableSendMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const desktopChatRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const mobileChatRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const timerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t7;
    let t8;
    if ($[7] !== roomId) {
        t7 = ()=>{
            const storedPlayer = sessionStorage.getItem("player");
            const storedRoomId = sessionStorage.getItem("roomId");
            if (storedPlayer && storedRoomId === roomId) {
                const player = JSON.parse(storedPlayer);
                setCurrentPlayer(player);
                socket.emit("reconnect-room", {
                    code: roomId,
                    playerId: player.id
                });
            } else {
                setInvalidUser(true);
                setIsReconnecting(false);
            }
            const handleRoomReconnected = (t9)=>{
                const { room, player: player_0 } = t9;
                setCurrentPlayer(player_0);
                setPlayers(room.players);
                setCurrentRound(room.round);
                setHostId(room.host);
                setMessages(room.messages || []);
                setGameStarted(room.gameStarted);
                setIsReconnecting(false);
                sessionStorage.setItem("player", JSON.stringify(player_0));
                sessionStorage.setItem("roomId", roomId);
            };
            socket.on("room-reconnected", handleRoomReconnected);
            return ()=>{
                socket.off("room-reconnected", handleRoomReconnected);
            };
        };
        t8 = [
            roomId
        ];
        $[7] = roomId;
        $[8] = t7;
        $[9] = t8;
    } else {
        t7 = $[8];
        t8 = $[9];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t7, t8);
    let t10;
    let t9;
    if ($[10] !== isReconnecting || $[11] !== roomId) {
        t9 = ()=>{
            if (isReconnecting) {
                return;
            }
            socket.emit("fetch-players", {
                roomId
            });
            socket.emit("fetch-chat", {
                roomId
            });
            const handleAllPlayers = (t11)=>{
                const { players: players_0, hostId: hostId_0 } = t11;
                setPlayers(players_0);
                setHostId(hostId_0);
            };
            socket.on("all-players", handleAllPlayers);
            return ()=>{
                socket.off("all-players", handleAllPlayers);
            };
        };
        t10 = [
            roomId,
            isReconnecting
        ];
        $[10] = isReconnecting;
        $[11] = roomId;
        $[12] = t10;
        $[13] = t9;
    } else {
        t10 = $[12];
        t9 = $[13];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t9, t10);
    let t11;
    let t12;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = ()=>{
            const handleChatHistory = (msgs)=>{
                setMessages(msgs);
            };
            const handleReceiveMessage = (data)=>{
                setMessages((prev)=>[
                        ...prev,
                        data
                    ]);
            };
            const handleSpamWarning = (warningMesg)=>{
                setEnableSendMessage(false);
                const mesg = {
                    message: warningMesg,
                    type: "spam-warning"
                };
                setMessages((prev_0)=>[
                        ...prev_0,
                        mesg
                    ]);
                setTimeout(()=>{
                    setEnableSendMessage(true);
                }, 3000);
            };
            socket.on("chat-history", handleChatHistory);
            socket.on("receive-message", handleReceiveMessage);
            socket.on("spam-warning", handleSpamWarning);
            return ()=>{
                socket.off("chat-history", handleChatHistory);
                socket.off("receive-message", handleReceiveMessage);
                socket.off("spam-warning", handleSpamWarning);
            };
        };
        t12 = [];
        $[14] = t11;
        $[15] = t12;
    } else {
        t11 = $[14];
        t12 = $[15];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t11, t12);
    let t13;
    if ($[16] !== currentDrawer || $[17] !== gamePhase) {
        t13 = ()=>{
            const handlePlayerJoined = (t14)=>{
                const { players: players_1, player: player_1 } = t14;
                const mesg_0 = {
                    message: `${player_1.name}`,
                    type: "player-joined"
                };
                setMessages((prev_1)=>[
                        ...prev_1,
                        mesg_0
                    ]);
                setPlayers(players_1);
            };
            const handlePlayerStatusChanged = (t15)=>{
                const { players: players_2, playerId, status } = t15;
                setPlayers(players_2);
                if (playerId === currentDrawer && status === "offline" && gamePhase === "drawing") {
                    const notification = {
                        type: "updates",
                        message: "Drawer disconnected. Moving to next turn..."
                    };
                    setMessages((prev_2)=>[
                            ...prev_2,
                            notification
                        ]);
                }
            };
            socket.on("player-joined", handlePlayerJoined);
            socket.on("player-status-changed", handlePlayerStatusChanged);
            return ()=>{
                socket.off("player-joined", handlePlayerJoined);
                socket.off("player-status-changed", handlePlayerStatusChanged);
            };
        };
        $[16] = currentDrawer;
        $[17] = gamePhase;
        $[18] = t13;
    } else {
        t13 = $[18];
    }
    let t14;
    if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = [];
        $[19] = t14;
    } else {
        t14 = $[19];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t13, t14);
    let t15;
    if ($[20] !== router) {
        t15 = ()=>{
            const handleGameStarted = (t16)=>{
                const { maxRounds: maxRounds_0 } = t16;
                setGameStarted(true);
                setMaxRounds(maxRounds_0);
                setGamePhase("starting");
            };
            const handleTurnStart = (t17)=>{
                const { drawerId, round, maxRounds: maxRounds_1 } = t17;
                setCurrentDrawer(drawerId);
                setCurrentRound(round);
                setMaxRounds(maxRounds_1);
                setGamePhase("turn-start");
                setCorrectGuessers([]);
                setRevealedWord("");
                setWordHint("");
                setSelectedWord(null);
                setAiHint("");
            };
            const handleWordOptions = (t18)=>{
                const { words, timeLimit } = t18;
                setWordOptions(words);
                setGamePhase("word-selection");
                setTimeLeft(Math.floor(timeLimit / 1000));
            };
            const handleDrawingPhaseStart = (t19)=>{
                const { wordHint: wordHint_0, timeLimit: timeLimit_0, aiHint: aiHint_0 } = t19;
                setGamePhase("drawing");
                setWordHint(wordHint_0);
                setAiHint(aiHint_0);
                setTimeLeft(Math.floor(timeLimit_0 / 1000));
                setWordOptions([]);
            };
            const handleYourWord = (t20)=>{
                const { word } = t20;
                setSelectedWord(word);
            };
            const handleCorrectGuess = (t21)=>{
                const { playerId: playerId_0, playerName, players: players_3 } = t21;
                setPlayers(players_3);
                const mesg_1 = {
                    message: `${playerName}`,
                    type: "player-guessed"
                };
                setMessages((prev_3)=>[
                        ...prev_3,
                        mesg_1
                    ]);
                setCorrectGuessers((prev_4)=>[
                        ...prev_4,
                        {
                            playerId: playerId_0,
                            playerName
                        }
                    ]);
            };
            const handleTurnEnd = (t22)=>{
                const { word: word_0, players: players_4 } = t22;
                setRevealedWord(word_0);
                setPlayers(players_4);
                setGamePhase("turn-end");
                setTimeLeft(0);
            };
            const handleRoundEnd = (t23)=>{
                const { round: round_0, players: players_5 } = t23;
                setPlayers(players_5);
                setGamePhase("round-end");
                const notification_0 = {
                    type: "updates",
                    message: `Round ${round_0} completed! Next Round will start soon.`
                };
                setMessages((prev_5)=>[
                        ...prev_5,
                        notification_0
                    ]);
                setCurrentRound(round_0);
            };
            const handleGameEnd = (t24)=>{
                const { leaderboard: leaderboard_0 } = t24;
                setLeaderboard(leaderboard_0);
                setGamePhase("game-end");
                setGameStarted(false);
            };
            const handleGameReset = (t25)=>{
                const { players: players_6, hostId: hostId_1, message } = t25;
                setPlayers(players_6);
                setHostId(hostId_1);
                setGamePhase("lobby");
                setGameStarted(false);
                setCurrentDrawer(null);
                setCurrentRound(0);
                setLeaderboard([]);
                setCorrectGuessers([]);
                setWordHint("");
                setSelectedWord(null);
                setRevealedWord("");
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(message, {
                    icon: "\uD83D\uDC4F"
                });
            };
            const handlePlayerLeft = (t26)=>{
                const { playerName: playerName_0, players: players_7, hostId: hostId_2, wasDrawing } = t26;
                setPlayers(players_7);
                setHostId(hostId_2);
                const notification_1 = {
                    type: "updates",
                    message: `${capitalizeFirst(playerName_0)} left the room`
                };
                setMessages((prev_6)=>[
                        ...prev_6,
                        notification_1
                    ]);
                if (wasDrawing) {
                    const drawerLeftNotification = {
                        type: "updates",
                        message: `${capitalizeFirst(playerName_0)} left the room. Moving to next turn...`
                    };
                    setMessages((prev_7)=>[
                            ...prev_7,
                            drawerLeftNotification
                        ]);
                }
            };
            const handleLeftRoom = (t27)=>{
                const { redirect } = t27;
                if (redirect) {
                    sessionStorage.removeItem("player");
                    sessionStorage.removeItem("roomId");
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].success("You have left the room. Redirecting to home...");
                    setTimeout(()=>{
                        router.push("/");
                    }, 100);
                }
            };
            const handleGameEndedInsufficientPlayers = (t28)=>{
                const { message: message_0, players: players_8, hostId: hostId_3 } = t28;
                setPlayers(players_8);
                setHostId(hostId_3);
                setGameStarted(false);
                setGamePhase("lobby");
                setCurrentDrawer(null);
                setCurrentRound(0);
                setCorrectGuessers([]);
                setWordHint("");
                setSelectedWord(null);
                setRevealedWord("");
                setLeaderboard([]);
                const GameEndedNotSufficientPLayersMessage = {
                    type: "game-ended",
                    message: `${players_8[0]?.name}`
                };
                setMessages((prev_8)=>[
                        ...prev_8,
                        GameEndedNotSufficientPLayersMessage
                    ]);
                setTimeout(()=>{
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error(message_0);
                }, 300);
            };
            const handleGameStateSync = (t29)=>{
                const { gamePhase: gamePhase_0, currentDrawer: currentDrawer_0, round: round_1, maxRounds: maxRounds_2, wordHint: wordHint_1, players: players_9 } = t29;
                setGamePhase(gamePhase_0);
                setCurrentDrawer(currentDrawer_0);
                setCurrentRound(round_1);
                setMaxRounds(maxRounds_2);
                setWordHint(wordHint_1 || "");
                setPlayers(players_9);
            };
            socket.on("game-started", handleGameStarted);
            socket.on("turn-start", handleTurnStart);
            socket.on("word-options", handleWordOptions);
            socket.on("drawing-phase-start", handleDrawingPhaseStart);
            socket.on("your-word", handleYourWord);
            socket.on("correct-guess", handleCorrectGuess);
            socket.on("turn-end", handleTurnEnd);
            socket.on("round-end", handleRoundEnd);
            socket.on("game-end", handleGameEnd);
            socket.on("game-reset", handleGameReset);
            socket.on("player-left", handlePlayerLeft);
            socket.on("left-room", handleLeftRoom);
            socket.on("game-ended-insufficient-players", handleGameEndedInsufficientPlayers);
            socket.on("game-state-sync", handleGameStateSync);
            return ()=>{
                socket.off("game-started", handleGameStarted);
                socket.off("turn-start", handleTurnStart);
                socket.off("word-options", handleWordOptions);
                socket.off("drawing-phase-start", handleDrawingPhaseStart);
                socket.off("your-word", handleYourWord);
                socket.off("correct-guess", handleCorrectGuess);
                socket.off("turn-end", handleTurnEnd);
                socket.off("round-end", handleRoundEnd);
                socket.off("game-end", handleGameEnd);
                socket.off("game-reset", handleGameReset);
                socket.off("player-left", handlePlayerLeft);
                socket.off("left-room", handleLeftRoom);
                socket.off("game-ended-insufficient-players", handleGameEndedInsufficientPlayers);
                socket.off("game-state-sync", handleGameStateSync);
            };
        };
        $[20] = router;
        $[21] = t15;
    } else {
        t15 = $[21];
    }
    let t16;
    if ($[22] === Symbol.for("react.memo_cache_sentinel")) {
        t16 = [];
        $[22] = t16;
    } else {
        t16 = $[22];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t15, t16);
    let t17;
    let t18;
    if ($[23] !== timeLeft) {
        t17 = ()=>{
            if (timeLeft > 0) {
                timerRef.current = setInterval(()=>{
                    setTimeLeft(_temp);
                }, 1000);
            } else {
                if (timerRef.current) {
                    clearInterval(timerRef.current);
                }
            }
            return ()=>{
                if (timerRef.current) {
                    clearInterval(timerRef.current);
                }
            };
        };
        t18 = [
            timeLeft
        ];
        $[23] = timeLeft;
        $[24] = t17;
        $[25] = t18;
    } else {
        t17 = $[24];
        t18 = $[25];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t17, t18);
    let t19;
    if ($[26] === Symbol.for("react.memo_cache_sentinel")) {
        t19 = ()=>{
            const isDesktop = window.innerWidth >= 1024;
            const activeRef = isDesktop ? desktopChatRef : mobileChatRef;
            if (activeRef.current) {
                activeRef.current.scrollTop = activeRef.current.scrollHeight;
            }
        };
        $[26] = t19;
    } else {
        t19 = $[26];
    }
    let t20;
    if ($[27] !== messages) {
        t20 = [
            messages
        ];
        $[27] = messages;
        $[28] = t20;
    } else {
        t20 = $[28];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t19, t20);
    let t21;
    let t22;
    if ($[29] === Symbol.for("react.memo_cache_sentinel")) {
        t21 = ()=>{
            const handleError = _temp2;
            socket.on("error", handleError);
            return ()=>{
                socket.off("error", handleError);
            };
        };
        t22 = [];
        $[29] = t21;
        $[30] = t22;
    } else {
        t21 = $[29];
        t22 = $[30];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t21, t22);
    let t23;
    if ($[31] !== currentPlayer?.name || $[32] !== messageInput || $[33] !== roomId || $[34] !== timeLeft) {
        t23 = ()=>{
            if (!messageInput.trim()) {
                return;
            }
            const msgData = {
                roomCode: roomId,
                message: messageInput.trim(),
                senderName: currentPlayer?.name || "Guest",
                timeStamp: timeLeft
            };
            socket.emit("send-message", msgData);
            setMessageInput("");
        };
        $[31] = currentPlayer?.name;
        $[32] = messageInput;
        $[33] = roomId;
        $[34] = timeLeft;
        $[35] = t23;
    } else {
        t23 = $[35];
    }
    const handleSendMessage = t23;
    let t24;
    if ($[36] !== handleSendMessage) {
        t24 = (e)=>{
            if (e.key === "Enter") {
                handleSendMessage();
            }
        };
        $[36] = handleSendMessage;
        $[37] = t24;
    } else {
        t24 = $[37];
    }
    const handleKeyPress = t24;
    let t25;
    if ($[38] !== roomId) {
        t25 = ()=>{
            setGameStarted(true);
            socket.emit("start-game", {
                roomCode: roomId
            });
        };
        $[38] = roomId;
        $[39] = t25;
    } else {
        t25 = $[39];
    }
    const handleStartGame = t25;
    let t26;
    if ($[40] !== roomId) {
        t26 = (word_1)=>{
            socket.emit("select-word", {
                roomCode: roomId,
                word: word_1
            });
        };
        $[40] = roomId;
        $[41] = t26;
    } else {
        t26 = $[41];
    }
    const handleSelectWord = t26;
    let t27;
    if ($[42] === Symbol.for("react.memo_cache_sentinel")) {
        t27 = ()=>{
            setShowLeaveConfirm(true);
        };
        $[42] = t27;
    } else {
        t27 = $[42];
    }
    const handleLeaveRoom = t27;
    let t28;
    if ($[43] !== roomId) {
        t28 = ()=>{
            socket.emit("leave-room", {
                roomCode: roomId
            });
            setShowLeaveConfirm(false);
        };
        $[43] = roomId;
        $[44] = t28;
    } else {
        t28 = $[44];
    }
    const confirmLeaveRoom = t28;
    let t29;
    if ($[45] === Symbol.for("react.memo_cache_sentinel")) {
        t29 = ()=>{
            setShowLeaveConfirm(false);
        };
        $[45] = t29;
    } else {
        t29 = $[45];
    }
    const cancelLeaveRoom = t29;
    let t30;
    if ($[46] !== currentDrawer || $[47] !== players) {
        t30 = ()=>{
            const drawer = players.find((p)=>p.id === currentDrawer);
            return drawer ? drawer.name : "";
        };
        $[46] = currentDrawer;
        $[47] = players;
        $[48] = t30;
    } else {
        t30 = $[48];
    }
    const getCurrentDrawerName = t30;
    const isCurrentPlayerDrawer = currentPlayer?.id === currentDrawer;
    if (isReconnecting) {
        let t31;
        if ($[49] === Symbol.for("react.memo_cache_sentinel")) {
            t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-screen flex items-center justify-center bg-game-blue",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-white text-xl font-bold",
                    children: "connecting..."
                }, void 0, false, {
                    fileName: "[project]/components/RoomPage/GameLobby.jsx",
                    lineNumber: 706,
                    columnNumber: 85
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/RoomPage/GameLobby.jsx",
                lineNumber: 706,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0));
            $[49] = t31;
        } else {
            t31 = $[49];
        }
        return t31;
    }
    if (invalidUser) {
        let t31;
        if ($[50] === Symbol.for("react.memo_cache_sentinel")) {
            t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-screen flex flex-col items-center justify-center bg-game-blue text-white gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xl font-bold",
                        children: "oops! join from the home page first"
                    }, void 0, false, {
                        fileName: "[project]/components/RoomPage/GameLobby.jsx",
                        lineNumber: 716,
                        columnNumber: 111
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        className: "game-btn px-6 py-2 text-base no-underline",
                        children: "go home"
                    }, void 0, false, {
                        fileName: "[project]/components/RoomPage/GameLobby.jsx",
                        lineNumber: 716,
                        columnNumber: 183
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/RoomPage/GameLobby.jsx",
                lineNumber: 716,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0));
            $[50] = t31;
        } else {
            t31 = $[50];
        }
        return t31;
    }
    let t31;
    if ($[51] !== currentRound || $[52] !== gamePhase || $[53] !== gameStarted || $[54] !== timeLeft) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$RoomPage$2f$GameSoundsEffects$2f$GameSoundEffects$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            gamePhase: gamePhase,
            timeLeft: timeLeft,
            currentRound: currentRound,
            gameStarted: gameStarted
        }, void 0, false, {
            fileName: "[project]/components/RoomPage/GameLobby.jsx",
            lineNumber: 725,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[51] = currentRound;
        $[52] = gamePhase;
        $[53] = gameStarted;
        $[54] = timeLeft;
        $[55] = t31;
    } else {
        t31 = $[55];
    }
    let t32;
    if ($[56] !== confirmLeaveRoom || $[57] !== gameStarted || $[58] !== showLeaveConfirm) {
        t32 = showLeaveConfirm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "game-panel p-6 max-w-md w-full mx-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-game-text text-xl font-bold mb-3",
                        children: "leave room?"
                    }, void 0, false, {
                        fileName: "[project]/components/RoomPage/GameLobby.jsx",
                        lineNumber: 736,
                        columnNumber: 182
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-game-muted mb-6 font-semibold",
                        children: [
                            "sure? ",
                            gameStarted && "game's still going."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/RoomPage/GameLobby.jsx",
                        lineNumber: 736,
                        columnNumber: 252
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: confirmLeaveRoom,
                                className: "flex-1 bg-red-500 hover:bg-red-600 border-2 border-red-600 cursor-pointer text-white font-bold py-2.5 rounded-md transition-all",
                                children: "yeah, leave"
                            }, void 0, false, {
                                fileName: "[project]/components/RoomPage/GameLobby.jsx",
                                lineNumber: 736,
                                columnNumber: 378
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: cancelLeaveRoom,
                                className: "flex-1 bg-white hover:bg-gray-50 border-2 border-game-border cursor-pointer text-game-text font-bold py-2.5 rounded-md transition-all",
                                children: "nvm"
                            }, void 0, false, {
                                fileName: "[project]/components/RoomPage/GameLobby.jsx",
                                lineNumber: 736,
                                columnNumber: 573
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/RoomPage/GameLobby.jsx",
                        lineNumber: 736,
                        columnNumber: 350
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/RoomPage/GameLobby.jsx",
                lineNumber: 736,
                columnNumber: 129
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/RoomPage/GameLobby.jsx",
            lineNumber: 736,
            columnNumber: 31
        }, ("TURBOPACK compile-time value", void 0));
        $[56] = confirmLeaveRoom;
        $[57] = gameStarted;
        $[58] = showLeaveConfirm;
        $[59] = t32;
    } else {
        t32 = $[59];
    }
    let t33;
    if ($[60] !== gamePhase || $[61] !== handleSelectWord || $[62] !== isCurrentPlayerDrawer || $[63] !== timeLeft || $[64] !== wordOptions) {
        t33 = gamePhase === "word-selection" && isCurrentPlayerDrawer && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "game-panel p-6 max-w-md w-full mx-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-game-text text-2xl font-bold text-center mb-3",
                        children: "pick a word!"
                    }, void 0, false, {
                        fileName: "[project]/components/RoomPage/GameLobby.jsx",
                        lineNumber: 746,
                        columnNumber: 221
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center text-game-muted mb-5 flex items-center justify-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                className: "w-5 h-5 text-game-orange"
                            }, void 0, false, {
                                fileName: "[project]/components/RoomPage/GameLobby.jsx",
                                lineNumber: 746,
                                columnNumber: 394
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xl font-bold text-game-orange",
                                children: [
                                    timeLeft,
                                    "s"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/RoomPage/GameLobby.jsx",
                                lineNumber: 746,
                                columnNumber: 440
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/RoomPage/GameLobby.jsx",
                        lineNumber: 746,
                        columnNumber: 305
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: wordOptions.map((word_2, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>handleSelectWord(word_2),
                                className: "game-btn w-full py-3 px-6 text-lg",
                                children: capitalizeFirst(word_2)
                            }, index, false, {
                                fileName: "[project]/components/RoomPage/GameLobby.jsx",
                                lineNumber: 746,
                                columnNumber: 580
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/components/RoomPage/GameLobby.jsx",
                        lineNumber: 746,
                        columnNumber: 517
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/RoomPage/GameLobby.jsx",
                lineNumber: 746,
                columnNumber: 168
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/RoomPage/GameLobby.jsx",
            lineNumber: 746,
            columnNumber: 70
        }, ("TURBOPACK compile-time value", void 0));
        $[60] = gamePhase;
        $[61] = handleSelectWord;
        $[62] = isCurrentPlayerDrawer;
        $[63] = timeLeft;
        $[64] = wordOptions;
        $[65] = t33;
    } else {
        t33 = $[65];
    }
    let t34;
    if ($[66] !== correctGuessers || $[67] !== currentPlayer?.id || $[68] !== gamePhase || $[69] !== revealedWord) {
        t34 = gamePhase === "turn-end" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "game-panel p-6 max-w-md w-full mx-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-game-text text-2xl font-bold text-center mb-4",
                        children: [
                            "the word was:",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-game-green-dark",
                                children: capitalizeFirst(revealedWord)
                            }, void 0, false, {
                                fileName: "[project]/components/RoomPage/GameLobby.jsx",
                                lineNumber: 758,
                                columnNumber: 275
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/RoomPage/GameLobby.jsx",
                        lineNumber: 758,
                        columnNumber: 190
                    }, ("TURBOPACK compile-time value", void 0)),
                    correctGuessers.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-game-muted text-center mb-3 font-semibold",
                                children: "who got it:"
                            }, void 0, false, {
                                fileName: "[project]/components/RoomPage/GameLobby.jsx",
                                lineNumber: 758,
                                columnNumber: 392
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "space-y-2",
                                children: correctGuessers.map((guesser, index_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "text-game-text text-center bg-green-50 border-2 border-game-green py-2 rounded-md font-bold",
                                        children: [
                                            "🎉 ",
                                            capitalizeFirst(guesser.playerName),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm font-semibold text-game-muted",
                                                children: guesser.playerId === currentPlayer?.id && " (you!)"
                                            }, void 0, false, {
                                                fileName: "[project]/components/RoomPage/GameLobby.jsx",
                                                lineNumber: 758,
                                                columnNumber: 700
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, index_0, true, {
                                        fileName: "[project]/components/RoomPage/GameLobby.jsx",
                                        lineNumber: 758,
                                        columnNumber: 538
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/components/RoomPage/GameLobby.jsx",
                                lineNumber: 758,
                                columnNumber: 469
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/RoomPage/GameLobby.jsx",
                        lineNumber: 758,
                        columnNumber: 387
                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-game-muted text-center font-semibold",
                        children: "nobody guessed it 😅"
                    }, void 0, false, {
                        fileName: "[project]/components/RoomPage/GameLobby.jsx",
                        lineNumber: 758,
                        columnNumber: 837
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/RoomPage/GameLobby.jsx",
                lineNumber: 758,
                columnNumber: 137
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/RoomPage/GameLobby.jsx",
            lineNumber: 758,
            columnNumber: 39
        }, ("TURBOPACK compile-time value", void 0));
        $[66] = correctGuessers;
        $[67] = currentPlayer?.id;
        $[68] = gamePhase;
        $[69] = revealedWord;
        $[70] = t34;
    } else {
        t34 = $[70];
    }
    let t35;
    if ($[71] !== currentPlayer?.id || $[72] !== gamePhase || $[73] !== leaderboard) {
        t35 = gamePhase === "game-end" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "game-panel p-6 max-w-lg w-full mx-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center mb-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__["Trophy"], {
                                className: "w-14 h-14 text-game-orange mx-auto mb-3"
                            }, void 0, false, {
                                fileName: "[project]/components/RoomPage/GameLobby.jsx",
                                lineNumber: 769,
                                columnNumber: 224
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-game-text text-2xl font-bold",
                                children: "game over!"
                            }, void 0, false, {
                                fileName: "[project]/components/RoomPage/GameLobby.jsx",
                                lineNumber: 769,
                                columnNumber: 286
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/RoomPage/GameLobby.jsx",
                        lineNumber: 769,
                        columnNumber: 190
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2 mb-5",
                        children: leaderboard.slice(0, 3).map((player_2, index_1)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `flex items-center justify-between p-3 rounded-md border-2 font-bold
                                        ${index_1 === 0 ? "bg-yellow-50 border-yellow-400 text-yellow-900" : index_1 === 1 ? "bg-gray-50 border-gray-300 text-gray-700" : index_1 === 2 ? "bg-orange-50 border-orange-300 text-orange-900" : "bg-white border-game-border text-game-text"}
                                        `,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xl",
                                                children: index_1 === 0 ? "\uD83E\uDD47" : index_1 === 1 ? "\uD83E\uDD48" : index_1 === 2 ? "\uD83E\uDD49" : `${index_1 + 1}.`
                                            }, void 0, false, {
                                                fileName: "[project]/components/RoomPage/GameLobby.jsx",
                                                lineNumber: 771,
                                                columnNumber: 86
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            capitalizeFirst(player_2.name),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm font-semibold opacity-70",
                                                children: player_2.id === currentPlayer?.id && "(you)"
                                            }, void 0, false, {
                                                fileName: "[project]/components/RoomPage/GameLobby.jsx",
                                                lineNumber: 771,
                                                columnNumber: 269
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/RoomPage/GameLobby.jsx",
                                        lineNumber: 771,
                                        columnNumber: 44
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            player_2.score,
                                            " pts"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/RoomPage/GameLobby.jsx",
                                        lineNumber: 771,
                                        columnNumber: 380
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, player_2.id, true, {
                                fileName: "[project]/components/RoomPage/GameLobby.jsx",
                                lineNumber: 769,
                                columnNumber: 441
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/components/RoomPage/GameLobby.jsx",
                        lineNumber: 769,
                        columnNumber: 357
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "game-btn w-full py-2.5 text-base",
                        children: "back to lobby..."
                    }, void 0, false, {
                        fileName: "[project]/components/RoomPage/GameLobby.jsx",
                        lineNumber: 771,
                        columnNumber: 427
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/RoomPage/GameLobby.jsx",
                lineNumber: 769,
                columnNumber: 137
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/RoomPage/GameLobby.jsx",
            lineNumber: 769,
            columnNumber: 39
        }, ("TURBOPACK compile-time value", void 0));
        $[71] = currentPlayer?.id;
        $[72] = gamePhase;
        $[73] = leaderboard;
        $[74] = t35;
    } else {
        t35 = $[74];
    }
    let t36;
    if ($[75] !== gameStarted || $[76] !== roomId) {
        t36 = !gameStarted && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$RoomPage$2f$Header$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            roomId: roomId
        }, void 0, false, {
            fileName: "[project]/components/RoomPage/GameLobby.jsx",
            lineNumber: 781,
            columnNumber: 27
        }, ("TURBOPACK compile-time value", void 0));
        $[75] = gameStarted;
        $[76] = roomId;
        $[77] = t36;
    } else {
        t36 = $[77];
    }
    let t37;
    if ($[78] !== aiHint || $[79] !== currentRound || $[80] !== gamePhase || $[81] !== gameStarted || $[82] !== getCurrentDrawerName || $[83] !== isCurrentPlayerDrawer || $[84] !== maxRounds || $[85] !== roomId || $[86] !== selectedWord || $[87] !== timeLeft || $[88] !== wordHint) {
        t37 = gameStarted && gamePhase !== "game-end" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "game-panel p-3 flex items-center justify-between",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-4 text-game-text flex-[25%]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$palette$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Palette$3e$__["Palette"], {
                                    className: "w-4 h-4 text-game-blue"
                                }, void 0, false, {
                                    fileName: "[project]/components/RoomPage/GameLobby.jsx",
                                    lineNumber: 790,
                                    columnNumber: 228
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-bold text-sm",
                                    children: [
                                        "drawing:",
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-game-blue-dark",
                                            children: truncateText(capitalizeFirst(getCurrentDrawerName()), 12)
                                        }, void 0, false, {
                                            fileName: "[project]/components/RoomPage/GameLobby.jsx",
                                            lineNumber: 790,
                                            columnNumber: 320
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/RoomPage/GameLobby.jsx",
                                    lineNumber: 790,
                                    columnNumber: 274
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/RoomPage/GameLobby.jsx",
                            lineNumber: 790,
                            columnNumber: 187
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__["Trophy"], {
                                    className: "w-4 h-4 text-game-orange"
                                }, void 0, false, {
                                    fileName: "[project]/components/RoomPage/GameLobby.jsx",
                                    lineNumber: 790,
                                    columnNumber: 475
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-bold text-sm",
                                    children: [
                                        "round",
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-game-blue-dark",
                                            children: [
                                                Math.max(1, currentRound),
                                                "/",
                                                maxRounds
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/RoomPage/GameLobby.jsx",
                                            lineNumber: 790,
                                            columnNumber: 565
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/RoomPage/GameLobby.jsx",
                                    lineNumber: 790,
                                    columnNumber: 522
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/RoomPage/GameLobby.jsx",
                            lineNumber: 790,
                            columnNumber: 434
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/RoomPage/GameLobby.jsx",
                    lineNumber: 790,
                    columnNumber: 120
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-[50%]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "logo-text text-2xl font-bold text-center lowercase text-game-blue-dark",
                            children: "drawrush"
                        }, void 0, false, {
                            fileName: "[project]/components/RoomPage/GameLobby.jsx",
                            lineNumber: 790,
                            columnNumber: 693
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center text-game-muted text-xs mt-0.5 font-bold flex justify-center items-center gap-x-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        "room: ",
                                        roomId
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/RoomPage/GameLobby.jsx",
                                    lineNumber: 790,
                                    columnNumber: 904
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "cursor-pointer hover:text-game-blue",
                                    onClick: ()=>{
                                        navigator.clipboard.writeText(roomId);
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].success("copied!");
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                        className: "size-3"
                                    }, void 0, false, {
                                        fileName: "[project]/components/RoomPage/GameLobby.jsx",
                                        lineNumber: 793,
                                        columnNumber: 14
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/components/RoomPage/GameLobby.jsx",
                                    lineNumber: 790,
                                    columnNumber: 931
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/RoomPage/GameLobby.jsx",
                            lineNumber: 790,
                            columnNumber: 793
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/RoomPage/GameLobby.jsx",
                    lineNumber: 790,
                    columnNumber: 665
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-[25%] flex justify-between gap-4 shrink-0 items-center",
                    children: [
                        gamePhase === "drawing" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2 flex-1",
                            children: isCurrentPlayerDrawer ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-bold text-game-text text-sm",
                                children: [
                                    "draw:",
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-game-green-dark underline tracking-wider",
                                        children: capitalizeFirst(selectedWord)
                                    }, void 0, false, {
                                        fileName: "[project]/components/RoomPage/GameLobby.jsx",
                                        lineNumber: 793,
                                        columnNumber: 298
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/RoomPage/GameLobby.jsx",
                                lineNumber: 793,
                                columnNumber: 240
                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-bold text-game-text text-sm",
                                        children: [
                                            "guess (",
                                            wordHint?.replace(/\s+/g, "")?.length,
                                            "):",
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-game-blue-dark tracking-widest",
                                                children: wordHint
                                            }, void 0, false, {
                                                fileName: "[project]/components/RoomPage/GameLobby.jsx",
                                                lineNumber: 793,
                                                columnNumber: 545
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/RoomPage/GameLobby.jsx",
                                        lineNumber: 793,
                                        columnNumber: 444
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$RoomPage$2f$LobbyComponents$2f$HintDialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        hint: aiHint,
                                        timeLeft: timeLeft
                                    }, void 0, false, {
                                        fileName: "[project]/components/RoomPage/GameLobby.jsx",
                                        lineNumber: 793,
                                        columnNumber: 620
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/RoomPage/GameLobby.jsx",
                                lineNumber: 793,
                                columnNumber: 407
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/components/RoomPage/GameLobby.jsx",
                            lineNumber: 793,
                            columnNumber: 167
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-1.5 bg-gray-100 border-2 border-game-border px-3 py-1.5 rounded-md",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                    className: "w-4 h-4 text-game-orange"
                                }, void 0, false, {
                                    fileName: "[project]/components/RoomPage/GameLobby.jsx",
                                    lineNumber: 793,
                                    columnNumber: 788
                                }, ("TURBOPACK compile-time value", void 0)),
                                timeLeft > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-game-orange font-bold text-lg",
                                    children: timeLeft
                                }, void 0, false, {
                                    fileName: "[project]/components/RoomPage/GameLobby.jsx",
                                    lineNumber: 793,
                                    columnNumber: 850
                                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-game-orange font-bold text-sm",
                                    children: "wait"
                                }, void 0, false, {
                                    fileName: "[project]/components/RoomPage/GameLobby.jsx",
                                    lineNumber: 793,
                                    columnNumber: 923
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/RoomPage/GameLobby.jsx",
                            lineNumber: 793,
                            columnNumber: 682
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/RoomPage/GameLobby.jsx",
                    lineNumber: 793,
                    columnNumber: 62
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/RoomPage/GameLobby.jsx",
            lineNumber: 790,
            columnNumber: 54
        }, ("TURBOPACK compile-time value", void 0));
        $[78] = aiHint;
        $[79] = currentRound;
        $[80] = gamePhase;
        $[81] = gameStarted;
        $[82] = getCurrentDrawerName;
        $[83] = isCurrentPlayerDrawer;
        $[84] = maxRounds;
        $[85] = roomId;
        $[86] = selectedWord;
        $[87] = timeLeft;
        $[88] = wordHint;
        $[89] = t37;
    } else {
        t37 = $[89];
    }
    let t38;
    let t39;
    if ($[90] === Symbol.for("react.memo_cache_sentinel")) {
        t38 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gamepad$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Gamepad2$3e$__["Gamepad2"], {
            className: "w-4 h-4 text-game-blue"
        }, void 0, false, {
            fileName: "[project]/components/RoomPage/GameLobby.jsx",
            lineNumber: 812,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        t39 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "font-bold",
            children: "players"
        }, void 0, false, {
            fileName: "[project]/components/RoomPage/GameLobby.jsx",
            lineNumber: 813,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[90] = t38;
        $[91] = t39;
    } else {
        t38 = $[90];
        t39 = $[91];
    }
    let t40;
    if ($[92] !== players.length) {
        t40 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-center items-center gap-2",
            children: [
                t38,
                t39,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "bg-game-blue text-white text-xs px-2 py-0.5 rounded-full font-bold",
                    children: players.length
                }, void 0, false, {
                    fileName: "[project]/components/RoomPage/GameLobby.jsx",
                    lineNumber: 822,
                    columnNumber: 77
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/RoomPage/GameLobby.jsx",
            lineNumber: 822,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[92] = players.length;
        $[93] = t40;
    } else {
        t40 = $[93];
    }
    let t41;
    if ($[94] === Symbol.for("react.memo_cache_sentinel")) {
        t41 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: handleLeaveRoom,
                className: "px-2 py-1 rounded text-xs bg-red-500 border-2 border-red-600 text-white hover:bg-red-600 transition font-bold cursor-pointer",
                children: "leave"
            }, void 0, false, {
                fileName: "[project]/components/RoomPage/GameLobby.jsx",
                lineNumber: 830,
                columnNumber: 16
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/RoomPage/GameLobby.jsx",
            lineNumber: 830,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[94] = t41;
    } else {
        t41 = $[94];
    }
    let t42;
    if ($[95] !== t40) {
        t42 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex text-game-text items-center justify-between gap-2 border-b-2 border-game-border p-3 bg-gray-50",
            children: [
                t40,
                t41
            ]
        }, void 0, true, {
            fileName: "[project]/components/RoomPage/GameLobby.jsx",
            lineNumber: 837,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[95] = t40;
        $[96] = t42;
    } else {
        t42 = $[96];
    }
    let t43;
    if ($[97] !== currentDrawer || $[98] !== currentPlayer?.id || $[99] !== gameStarted || $[100] !== hostId || $[101] !== players) {
        let t44;
        if ($[103] !== currentDrawer || $[104] !== currentPlayer?.id || $[105] !== gameStarted || $[106] !== hostId) {
            t44 = (player_3)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$RoomPage$2f$PlayerCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    player: player_3,
                    hostId: hostId,
                    isCurrentUser: currentPlayer?.id === player_3.id,
                    isDrawing: player_3.id === currentDrawer,
                    showScore: gameStarted
                }, player_3.id, false, {
                    fileName: "[project]/components/RoomPage/GameLobby.jsx",
                    lineNumber: 847,
                    columnNumber: 25
                }, ("TURBOPACK compile-time value", void 0));
            $[103] = currentDrawer;
            $[104] = currentPlayer?.id;
            $[105] = gameStarted;
            $[106] = hostId;
            $[107] = t44;
        } else {
            t44 = $[107];
        }
        t43 = players.map(t44);
        $[97] = currentDrawer;
        $[98] = currentPlayer?.id;
        $[99] = gameStarted;
        $[100] = hostId;
        $[101] = players;
        $[102] = t43;
    } else {
        t43 = $[102];
    }
    let t44;
    if ($[108] !== t43) {
        t44 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1 overflow-y-auto p-2 space-y-1.5 bg-white",
            children: t43
        }, void 0, false, {
            fileName: "[project]/components/RoomPage/GameLobby.jsx",
            lineNumber: 868,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[108] = t43;
        $[109] = t44;
    } else {
        t44 = $[109];
    }
    let t45;
    if ($[110] !== currentPlayer?.id || $[111] !== gameStarted || $[112] !== handleStartGame || $[113] !== hostId || $[114] !== players.length) {
        t45 = !gameStarted && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-2 border-t-2 border-game-border bg-gray-50",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: handleStartGame,
                className: "game-btn w-full py-2.5 text-sm disabled:opacity-50 disabled:cursor-not-allowed",
                disabled: currentPlayer?.id !== hostId || players.length < 2,
                children: currentPlayer?.id === hostId ? "start!" : "waiting for host..."
            }, void 0, false, {
                fileName: "[project]/components/RoomPage/GameLobby.jsx",
                lineNumber: 876,
                columnNumber: 89
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/RoomPage/GameLobby.jsx",
            lineNumber: 876,
            columnNumber: 27
        }, ("TURBOPACK compile-time value", void 0));
        $[110] = currentPlayer?.id;
        $[111] = gameStarted;
        $[112] = handleStartGame;
        $[113] = hostId;
        $[114] = players.length;
        $[115] = t45;
    } else {
        t45 = $[115];
    }
    let t46;
    if ($[116] !== t42 || $[117] !== t44 || $[118] !== t45) {
        t46 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "game-panel flex flex-col w-64 overflow-hidden",
            children: [
                t42,
                t44,
                t45
            ]
        }, void 0, true, {
            fileName: "[project]/components/RoomPage/GameLobby.jsx",
            lineNumber: 888,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[116] = t42;
        $[117] = t44;
        $[118] = t45;
        $[119] = t46;
    } else {
        t46 = $[119];
    }
    let t47;
    if ($[120] !== currentPlayer?.id || $[121] !== gameStarted || $[122] !== hostId) {
        t47 = !gameStarted && currentPlayer?.id !== hostId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$RoomPage$2f$LobbyComponents$2f$WaitingScreen$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/components/RoomPage/GameLobby.jsx",
            lineNumber: 898,
            columnNumber: 59
        }, ("TURBOPACK compile-time value", void 0));
        $[120] = currentPlayer?.id;
        $[121] = gameStarted;
        $[122] = hostId;
        $[123] = t47;
    } else {
        t47 = $[123];
    }
    let t48;
    if ($[124] !== currentPlayer?.id || $[125] !== gameStarted || $[126] !== hostId || $[127] !== roomId) {
        t48 = !gameStarted && currentPlayer?.id === hostId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$RoomPage$2f$LobbyComponents$2f$SettingsScreen$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            roomCode: roomId,
            playerId: currentPlayer?.id,
            hostId: hostId
        }, void 0, false, {
            fileName: "[project]/components/RoomPage/GameLobby.jsx",
            lineNumber: 908,
            columnNumber: 59
        }, ("TURBOPACK compile-time value", void 0));
        $[124] = currentPlayer?.id;
        $[125] = gameStarted;
        $[126] = hostId;
        $[127] = roomId;
        $[128] = t48;
    } else {
        t48 = $[128];
    }
    let t49;
    if ($[129] !== gamePhase || $[130] !== gameStarted || $[131] !== isCurrentPlayerDrawer || $[132] !== roomId) {
        t49 = gameStarted && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$RoomPage$2f$DrawingBoard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            roomId: roomId,
            canDraw: isCurrentPlayerDrawer && gamePhase === "drawing"
        }, void 0, false, {
            fileName: "[project]/components/RoomPage/GameLobby.jsx",
            lineNumber: 919,
            columnNumber: 26
        }, ("TURBOPACK compile-time value", void 0));
        $[129] = gamePhase;
        $[130] = gameStarted;
        $[131] = isCurrentPlayerDrawer;
        $[132] = roomId;
        $[133] = t49;
    } else {
        t49 = $[133];
    }
    let t50;
    if ($[134] !== t47 || $[135] !== t48 || $[136] !== t49) {
        t50 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "game-panel flex-1 overflow-hidden",
            children: [
                t47,
                t48,
                t49
            ]
        }, void 0, true, {
            fileName: "[project]/components/RoomPage/GameLobby.jsx",
            lineNumber: 930,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[134] = t47;
        $[135] = t48;
        $[136] = t49;
        $[137] = t50;
    } else {
        t50 = $[137];
    }
    let t51;
    let t52;
    if ($[138] === Symbol.for("react.memo_cache_sentinel")) {
        t51 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"], {
            className: "w-4 h-4 text-game-blue"
        }, void 0, false, {
            fileName: "[project]/components/RoomPage/GameLobby.jsx",
            lineNumber: 941,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        t52 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "font-bold",
            children: "chat"
        }, void 0, false, {
            fileName: "[project]/components/RoomPage/GameLobby.jsx",
            lineNumber: 942,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[138] = t51;
        $[139] = t52;
    } else {
        t51 = $[138];
        t52 = $[139];
    }
    const t53 = currentPlayer?.id;
    let t54;
    if ($[140] !== isCurrentPlayerDrawer || $[141] !== roomId || $[142] !== t53) {
        t54 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex text-game-text items-center gap-2 border-b-2 border-game-border p-3 bg-gray-50 shrink-0",
            children: [
                t51,
                t52,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex w-full justify-end",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$RoomPage$2f$VoiceChat$2f$VoiceChat$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        isCurrentPlayerDrawer: isCurrentPlayerDrawer,
                        roomCode: roomId,
                        playerId: t53
                    }, void 0, false, {
                        fileName: "[project]/components/RoomPage/GameLobby.jsx",
                        lineNumber: 952,
                        columnNumber: 172
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/components/RoomPage/GameLobby.jsx",
                    lineNumber: 952,
                    columnNumber: 131
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/RoomPage/GameLobby.jsx",
            lineNumber: 952,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[140] = isCurrentPlayerDrawer;
        $[141] = roomId;
        $[142] = t53;
        $[143] = t54;
    } else {
        t54 = $[143];
    }
    let t55;
    if ($[144] !== currentPlayer?.id || $[145] !== messages) {
        let t56;
        if ($[147] !== currentPlayer?.id) {
            t56 = (msg, index_2)=>{
                if (msg?.type == "player-joined") {
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$RoomPage$2f$ChatUpdates$2f$PlayerJoined$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        message: msg?.message
                    }, index_2, false, {
                        fileName: "[project]/components/RoomPage/GameLobby.jsx",
                        lineNumber: 966,
                        columnNumber: 18
                    }, ("TURBOPACK compile-time value", void 0));
                } else {
                    if (msg?.type == "player-guessed") {
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$RoomPage$2f$ChatUpdates$2f$PlayerGuessed$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            message: msg?.message
                        }, index_2, false, {
                            fileName: "[project]/components/RoomPage/GameLobby.jsx",
                            lineNumber: 969,
                            columnNumber: 20
                        }, ("TURBOPACK compile-time value", void 0));
                    } else {
                        if (msg?.type == "updates") {
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$RoomPage$2f$ChatUpdates$2f$Updates$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                message: msg?.message
                            }, index_2, false, {
                                fileName: "[project]/components/RoomPage/GameLobby.jsx",
                                lineNumber: 972,
                                columnNumber: 22
                            }, ("TURBOPACK compile-time value", void 0));
                        } else {
                            if (msg?.type == "game-ended") {
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$RoomPage$2f$ChatUpdates$2f$GameEndedPlayersLeft$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    message: msg?.message
                                }, index_2, false, {
                                    fileName: "[project]/components/RoomPage/GameLobby.jsx",
                                    lineNumber: 975,
                                    columnNumber: 24
                                }, ("TURBOPACK compile-time value", void 0));
                            } else {
                                if (msg?.type == "spam-warning") {
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$RoomPage$2f$ChatUpdates$2f$SpamWarning$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        message: msg?.message
                                    }, index_2, false, {
                                        fileName: "[project]/components/RoomPage/GameLobby.jsx",
                                        lineNumber: 978,
                                        columnNumber: 26
                                    }, ("TURBOPACK compile-time value", void 0));
                                } else {
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$RoomPage$2f$MessageBox$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        SenderName: msg.senderName,
                                        message: msg.message,
                                        isOwnMessage: msg.senderId === currentPlayer?.id
                                    }, `${msg.time}-${index_2}`, false, {
                                        fileName: "[project]/components/RoomPage/GameLobby.jsx",
                                        lineNumber: 980,
                                        columnNumber: 26
                                    }, ("TURBOPACK compile-time value", void 0));
                                }
                            }
                        }
                    }
                }
            };
            $[147] = currentPlayer?.id;
            $[148] = t56;
        } else {
            t56 = $[148];
        }
        t55 = messages.map(t56);
        $[144] = currentPlayer?.id;
        $[145] = messages;
        $[146] = t55;
    } else {
        t55 = $[146];
    }
    let t56;
    if ($[149] !== t55) {
        t56 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: desktopChatRef,
            className: "flex-1 overflow-y-auto p-2 space-y-2 min-h-0 bg-white",
            children: t55
        }, void 0, false, {
            fileName: "[project]/components/RoomPage/GameLobby.jsx",
            lineNumber: 1001,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[149] = t55;
        $[150] = t56;
    } else {
        t56 = $[150];
    }
    let t57;
    if ($[151] !== enableSendMessage || $[152] !== gamePhase || $[153] !== handleKeyPress || $[154] !== handleSendMessage || $[155] !== isCurrentPlayerDrawer || $[156] !== messageInput) {
        t57 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-2 border-t-2 border-game-border bg-gray-50 shrink-0",
            children: !isCurrentPlayerDrawer ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        value: messageInput,
                        disabled: enableSendMessage === false,
                        onChange: (e_0)=>setMessageInput(e_0.target.value),
                        onKeyPress: handleKeyPress,
                        className: "game-input flex-1 text-sm py-1.5",
                        placeholder: gamePhase === "drawing" && !isCurrentPlayerDrawer ? "type your guess..." : "say something..."
                    }, void 0, false, {
                        fileName: "[project]/components/RoomPage/GameLobby.jsx",
                        lineNumber: 1009,
                        columnNumber: 136
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleSendMessage,
                        className: "game-btn-secondary game-btn px-3 py-1.5 flex items-center justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2d$horizontal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SendHorizontal$3e$__["SendHorizontal"], {
                            className: "w-4 h-4"
                        }, void 0, false, {
                            fileName: "[project]/components/RoomPage/GameLobby.jsx",
                            lineNumber: 1009,
                            columnNumber: 571
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/RoomPage/GameLobby.jsx",
                        lineNumber: 1009,
                        columnNumber: 450
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/RoomPage/GameLobby.jsx",
                lineNumber: 1009,
                columnNumber: 108
            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "py-1.5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-game-muted text-center text-xs font-semibold",
                    children: "no chatting while you draw!"
                }, void 0, false, {
                    fileName: "[project]/components/RoomPage/GameLobby.jsx",
                    lineNumber: 1009,
                    columnNumber: 651
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/RoomPage/GameLobby.jsx",
                lineNumber: 1009,
                columnNumber: 627
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/RoomPage/GameLobby.jsx",
            lineNumber: 1009,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[151] = enableSendMessage;
        $[152] = gamePhase;
        $[153] = handleKeyPress;
        $[154] = handleSendMessage;
        $[155] = isCurrentPlayerDrawer;
        $[156] = messageInput;
        $[157] = t57;
    } else {
        t57 = $[157];
    }
    let t58;
    if ($[158] !== t54 || $[159] !== t56 || $[160] !== t57) {
        t58 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "game-panel flex flex-col w-72 overflow-hidden",
            children: [
                t54,
                t56,
                t57
            ]
        }, void 0, true, {
            fileName: "[project]/components/RoomPage/GameLobby.jsx",
            lineNumber: 1022,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[158] = t54;
        $[159] = t56;
        $[160] = t57;
        $[161] = t58;
    } else {
        t58 = $[161];
    }
    let t59;
    if ($[162] !== t46 || $[163] !== t50 || $[164] !== t58) {
        t59 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex gap-4 flex-1 min-h-0",
            children: [
                t46,
                t50,
                t58
            ]
        }, void 0, true, {
            fileName: "[project]/components/RoomPage/GameLobby.jsx",
            lineNumber: 1032,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[162] = t46;
        $[163] = t50;
        $[164] = t58;
        $[165] = t59;
    } else {
        t59 = $[165];
    }
    let t60;
    if ($[166] !== t36 || $[167] !== t37 || $[168] !== t59) {
        t60 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative hidden lg:flex flex-col h-full p-4 gap-4",
            children: [
                t36,
                t37,
                t59
            ]
        }, void 0, true, {
            fileName: "[project]/components/RoomPage/GameLobby.jsx",
            lineNumber: 1042,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[166] = t36;
        $[167] = t37;
        $[168] = t59;
        $[169] = t60;
    } else {
        t60 = $[169];
    }
    let t61;
    if ($[170] !== gameStarted || $[171] !== roomId) {
        t61 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: !gameStarted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "shrink-0 p-3",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$RoomPage$2f$Header$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    roomId: roomId
                }, void 0, false, {
                    fileName: "[project]/components/RoomPage/GameLobby.jsx",
                    lineNumber: 1052,
                    columnNumber: 59
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/RoomPage/GameLobby.jsx",
                lineNumber: 1052,
                columnNumber: 29
            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "py-3",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "logo-text-light text-2xl font-bold text-center lowercase",
                    children: "drawrush"
                }, void 0, false, {
                    fileName: "[project]/components/RoomPage/GameLobby.jsx",
                    lineNumber: 1052,
                    columnNumber: 116
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/RoomPage/GameLobby.jsx",
                lineNumber: 1052,
                columnNumber: 94
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false);
        $[170] = gameStarted;
        $[171] = roomId;
        $[172] = t61;
    } else {
        t61 = $[172];
    }
    let t62;
    if ($[173] !== aiHint || $[174] !== currentRound || $[175] !== gamePhase || $[176] !== gameStarted || $[177] !== getCurrentDrawerName || $[178] !== isCurrentPlayerDrawer || $[179] !== maxRounds || $[180] !== selectedWord || $[181] !== timeLeft || $[182] !== wordHint) {
        t62 = gameStarted && gamePhase !== "game-end" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "shrink-0 px-3 pb-2",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "game-panel p-2 flex items-center justify-between text-xs gap-3 flex-wrap",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-start justify-center gap-y-1 text-game-text",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$palette$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Palette$3e$__["Palette"], {
                                        className: "w-4 h-4 text-game-blue"
                                    }, void 0, false, {
                                        fileName: "[project]/components/RoomPage/GameLobby.jsx",
                                        lineNumber: 1061,
                                        columnNumber: 304
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-bold",
                                        children: truncateText(capitalizeFirst(getCurrentDrawerName()), 12)
                                    }, void 0, false, {
                                        fileName: "[project]/components/RoomPage/GameLobby.jsx",
                                        lineNumber: 1061,
                                        columnNumber: 350
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/RoomPage/GameLobby.jsx",
                                lineNumber: 1061,
                                columnNumber: 261
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__["Trophy"], {
                                        className: "w-4 h-4 text-game-orange"
                                    }, void 0, false, {
                                        fileName: "[project]/components/RoomPage/GameLobby.jsx",
                                        lineNumber: 1061,
                                        columnNumber: 487
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-bold",
                                        children: [
                                            Math.max(1, currentRound),
                                            "/",
                                            maxRounds
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/RoomPage/GameLobby.jsx",
                                        lineNumber: 1061,
                                        columnNumber: 534
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/RoomPage/GameLobby.jsx",
                                lineNumber: 1061,
                                columnNumber: 444
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/RoomPage/GameLobby.jsx",
                        lineNumber: 1061,
                        columnNumber: 180
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 flex flex-col gap-y-1 shrink-0 items-start justify-center",
                        children: [
                            gamePhase === "drawing" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 flex-1",
                                children: isCurrentPlayerDrawer ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-bold text-game-text text-xs",
                                    children: [
                                        "draw:",
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-game-green-dark underline",
                                            children: capitalizeFirst(selectedWord)
                                        }, void 0, false, {
                                            fileName: "[project]/components/RoomPage/GameLobby.jsx",
                                            lineNumber: 1061,
                                            columnNumber: 855
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/RoomPage/GameLobby.jsx",
                                    lineNumber: 1061,
                                    columnNumber: 797
                                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-2",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-bold text-game-text text-xs",
                                        children: [
                                            "(",
                                            wordHint?.replace(/\s+/g, "")?.length,
                                            ")",
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-game-blue-dark tracking-widest",
                                                children: wordHint
                                            }, void 0, false, {
                                                fileName: "[project]/components/RoomPage/GameLobby.jsx",
                                                lineNumber: 1061,
                                                columnNumber: 1071
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/RoomPage/GameLobby.jsx",
                                        lineNumber: 1061,
                                        columnNumber: 977
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/components/RoomPage/GameLobby.jsx",
                                    lineNumber: 1061,
                                    columnNumber: 949
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/components/RoomPage/GameLobby.jsx",
                                lineNumber: 1061,
                                columnNumber: 724
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-1 bg-gray-100 border-2 border-game-border px-2 py-0.5 rounded-md",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                className: "w-3.5 h-3.5 text-game-orange"
                                            }, void 0, false, {
                                                fileName: "[project]/components/RoomPage/GameLobby.jsx",
                                                lineNumber: 1061,
                                                columnNumber: 1321
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            timeLeft > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-game-orange font-bold",
                                                children: timeLeft
                                            }, void 0, false, {
                                                fileName: "[project]/components/RoomPage/GameLobby.jsx",
                                                lineNumber: 1061,
                                                columnNumber: 1387
                                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-game-orange font-bold text-xs",
                                                children: "wait"
                                            }, void 0, false, {
                                                fileName: "[project]/components/RoomPage/GameLobby.jsx",
                                                lineNumber: 1061,
                                                columnNumber: 1452
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/RoomPage/GameLobby.jsx",
                                        lineNumber: 1061,
                                        columnNumber: 1217
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    !isCurrentPlayerDrawer && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$RoomPage$2f$LobbyComponents$2f$HintDialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        hint: aiHint,
                                        timeLeft: timeLeft
                                    }, void 0, false, {
                                        fileName: "[project]/components/RoomPage/GameLobby.jsx",
                                        lineNumber: 1061,
                                        columnNumber: 1550
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/RoomPage/GameLobby.jsx",
                                lineNumber: 1061,
                                columnNumber: 1160
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/RoomPage/GameLobby.jsx",
                        lineNumber: 1061,
                        columnNumber: 614
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/RoomPage/GameLobby.jsx",
                lineNumber: 1061,
                columnNumber: 90
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/RoomPage/GameLobby.jsx",
            lineNumber: 1061,
            columnNumber: 54
        }, ("TURBOPACK compile-time value", void 0));
        $[173] = aiHint;
        $[174] = currentRound;
        $[175] = gamePhase;
        $[176] = gameStarted;
        $[177] = getCurrentDrawerName;
        $[178] = isCurrentPlayerDrawer;
        $[179] = maxRounds;
        $[180] = selectedWord;
        $[181] = timeLeft;
        $[182] = wordHint;
        $[183] = t62;
    } else {
        t62 = $[183];
    }
    let t63;
    if ($[184] !== currentPlayer?.id || $[185] !== gameStarted || $[186] !== hostId || $[187] !== roomId) {
        t63 = !gameStarted && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "shrink-0 px-3",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "game-panel overflow-hidden",
                children: [
                    !gameStarted && currentPlayer?.id !== hostId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            height: "35vh",
                            minHeight: "280px"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$RoomPage$2f$LobbyComponents$2f$WaitingScreen$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/components/RoomPage/GameLobby.jsx",
                            lineNumber: 1081,
                            columnNumber: 12
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/RoomPage/GameLobby.jsx",
                        lineNumber: 1078,
                        columnNumber: 151
                    }, ("TURBOPACK compile-time value", void 0)),
                    !gameStarted && currentPlayer?.id === hostId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$RoomPage$2f$LobbyComponents$2f$SettingsScreen$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        roomCode: roomId,
                        playerId: currentPlayer?.id,
                        hostId: hostId
                    }, void 0, false, {
                        fileName: "[project]/components/RoomPage/GameLobby.jsx",
                        lineNumber: 1081,
                        columnNumber: 85
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/RoomPage/GameLobby.jsx",
                lineNumber: 1078,
                columnNumber: 58
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/RoomPage/GameLobby.jsx",
            lineNumber: 1078,
            columnNumber: 27
        }, ("TURBOPACK compile-time value", void 0));
        $[184] = currentPlayer?.id;
        $[185] = gameStarted;
        $[186] = hostId;
        $[187] = roomId;
        $[188] = t63;
    } else {
        t63 = $[188];
    }
    let t64;
    if ($[189] !== gamePhase || $[190] !== gameStarted || $[191] !== isCurrentPlayerDrawer || $[192] !== roomId) {
        t64 = gameStarted && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "shrink-0 px-3",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "game-panel overflow-hidden",
                style: {
                    height: "40vh",
                    minHeight: "280px"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$RoomPage$2f$DrawingBoard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    roomId: roomId,
                    canDraw: isCurrentPlayerDrawer && gamePhase === "drawing"
                }, void 0, false, {
                    fileName: "[project]/components/RoomPage/GameLobby.jsx",
                    lineNumber: 1095,
                    columnNumber: 10
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/RoomPage/GameLobby.jsx",
                lineNumber: 1092,
                columnNumber: 57
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/RoomPage/GameLobby.jsx",
            lineNumber: 1092,
            columnNumber: 26
        }, ("TURBOPACK compile-time value", void 0));
        $[189] = gamePhase;
        $[190] = gameStarted;
        $[191] = isCurrentPlayerDrawer;
        $[192] = roomId;
        $[193] = t64;
    } else {
        t64 = $[193];
    }
    let t65;
    if ($[194] === Symbol.for("react.memo_cache_sentinel")) {
        t65 = {
            minHeight: "250px"
        };
        $[194] = t65;
    } else {
        t65 = $[194];
    }
    let t66;
    let t67;
    if ($[195] === Symbol.for("react.memo_cache_sentinel")) {
        t66 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"], {
            className: "w-4 h-4 text-game-blue"
        }, void 0, false, {
            fileName: "[project]/components/RoomPage/GameLobby.jsx",
            lineNumber: 1116,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        t67 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "font-bold text-sm",
            children: "chat"
        }, void 0, false, {
            fileName: "[project]/components/RoomPage/GameLobby.jsx",
            lineNumber: 1117,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[195] = t66;
        $[196] = t67;
    } else {
        t66 = $[195];
        t67 = $[196];
    }
    const t68 = currentPlayer?.id;
    let t69;
    if ($[197] !== isCurrentPlayerDrawer || $[198] !== roomId || $[199] !== t68) {
        t69 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex text-game-text items-center gap-2 border-b-2 border-game-border p-2 bg-gray-50 shrink-0",
            children: [
                t66,
                t67,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex w-full justify-end",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$RoomPage$2f$VoiceChat$2f$VoiceChat$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        isCurrentPlayerDrawer: isCurrentPlayerDrawer,
                        roomCode: roomId,
                        playerId: t68
                    }, void 0, false, {
                        fileName: "[project]/components/RoomPage/GameLobby.jsx",
                        lineNumber: 1127,
                        columnNumber: 172
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/components/RoomPage/GameLobby.jsx",
                    lineNumber: 1127,
                    columnNumber: 131
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/RoomPage/GameLobby.jsx",
            lineNumber: 1127,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[197] = isCurrentPlayerDrawer;
        $[198] = roomId;
        $[199] = t68;
        $[200] = t69;
    } else {
        t69 = $[200];
    }
    let t70;
    if ($[201] === Symbol.for("react.memo_cache_sentinel")) {
        t70 = {
            minHeight: "200px",
            maxHeight: "350px"
        };
        $[201] = t70;
    } else {
        t70 = $[201];
    }
    let t71;
    if ($[202] !== currentPlayer?.id || $[203] !== messages) {
        let t72;
        if ($[205] !== currentPlayer?.id) {
            t72 = (msg_0, index_3)=>{
                if (msg_0?.type == "player-joined") {
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$RoomPage$2f$ChatUpdates$2f$PlayerJoined$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        message: msg_0?.message
                    }, index_3, false, {
                        fileName: "[project]/components/RoomPage/GameLobby.jsx",
                        lineNumber: 1151,
                        columnNumber: 18
                    }, ("TURBOPACK compile-time value", void 0));
                } else {
                    if (msg_0?.type == "player-guessed") {
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$RoomPage$2f$ChatUpdates$2f$PlayerGuessed$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            message: msg_0?.message
                        }, index_3, false, {
                            fileName: "[project]/components/RoomPage/GameLobby.jsx",
                            lineNumber: 1154,
                            columnNumber: 20
                        }, ("TURBOPACK compile-time value", void 0));
                    } else {
                        if (msg_0?.type == "updates") {
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$RoomPage$2f$ChatUpdates$2f$Updates$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                message: msg_0?.message
                            }, index_3, false, {
                                fileName: "[project]/components/RoomPage/GameLobby.jsx",
                                lineNumber: 1157,
                                columnNumber: 22
                            }, ("TURBOPACK compile-time value", void 0));
                        } else {
                            if (msg_0?.type == "game-ended") {
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$RoomPage$2f$ChatUpdates$2f$GameEndedPlayersLeft$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    message: msg_0?.message
                                }, index_3, false, {
                                    fileName: "[project]/components/RoomPage/GameLobby.jsx",
                                    lineNumber: 1160,
                                    columnNumber: 24
                                }, ("TURBOPACK compile-time value", void 0));
                            } else {
                                if (msg_0?.type == "spam-warning") {
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$RoomPage$2f$ChatUpdates$2f$SpamWarning$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        message: msg_0?.message
                                    }, index_3, false, {
                                        fileName: "[project]/components/RoomPage/GameLobby.jsx",
                                        lineNumber: 1163,
                                        columnNumber: 26
                                    }, ("TURBOPACK compile-time value", void 0));
                                } else {
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$RoomPage$2f$MessageBox$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        SenderName: msg_0.senderName,
                                        message: msg_0.message,
                                        isOwnMessage: msg_0.senderId === currentPlayer?.id
                                    }, `${msg_0.time}-${index_3}`, false, {
                                        fileName: "[project]/components/RoomPage/GameLobby.jsx",
                                        lineNumber: 1165,
                                        columnNumber: 26
                                    }, ("TURBOPACK compile-time value", void 0));
                                }
                            }
                        }
                    }
                }
            };
            $[205] = currentPlayer?.id;
            $[206] = t72;
        } else {
            t72 = $[206];
        }
        t71 = messages.map(t72);
        $[202] = currentPlayer?.id;
        $[203] = messages;
        $[204] = t71;
    } else {
        t71 = $[204];
    }
    let t72;
    if ($[207] !== t71) {
        t72 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: mobileChatRef,
            className: "flex-1 overflow-y-auto p-2 space-y-2 bg-white",
            style: t70,
            children: t71
        }, void 0, false, {
            fileName: "[project]/components/RoomPage/GameLobby.jsx",
            lineNumber: 1186,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[207] = t71;
        $[208] = t72;
    } else {
        t72 = $[208];
    }
    let t73;
    if ($[209] !== enableSendMessage || $[210] !== gamePhase || $[211] !== handleKeyPress || $[212] !== handleSendMessage || $[213] !== isCurrentPlayerDrawer || $[214] !== messageInput) {
        t73 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-2 border-t-2 border-game-border bg-gray-50 shrink-0",
            children: !isCurrentPlayerDrawer ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        value: messageInput,
                        onChange: (e_1)=>setMessageInput(e_1.target.value),
                        disabled: enableSendMessage === false,
                        onKeyPress: handleKeyPress,
                        className: "game-input flex-1 text-sm py-1.5",
                        placeholder: gamePhase === "drawing" && !isCurrentPlayerDrawer ? "type your guess..." : "say something..."
                    }, void 0, false, {
                        fileName: "[project]/components/RoomPage/GameLobby.jsx",
                        lineNumber: 1194,
                        columnNumber: 136
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleSendMessage,
                        className: "game-btn-secondary game-btn px-3 py-1.5 flex items-center justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2d$horizontal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SendHorizontal$3e$__["SendHorizontal"], {
                            className: "w-4 h-4"
                        }, void 0, false, {
                            fileName: "[project]/components/RoomPage/GameLobby.jsx",
                            lineNumber: 1194,
                            columnNumber: 571
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/RoomPage/GameLobby.jsx",
                        lineNumber: 1194,
                        columnNumber: 450
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/RoomPage/GameLobby.jsx",
                lineNumber: 1194,
                columnNumber: 108
            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "py-1.5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-game-muted text-center text-xs font-semibold",
                    children: "no chatting while you draw!"
                }, void 0, false, {
                    fileName: "[project]/components/RoomPage/GameLobby.jsx",
                    lineNumber: 1194,
                    columnNumber: 651
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/RoomPage/GameLobby.jsx",
                lineNumber: 1194,
                columnNumber: 627
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/RoomPage/GameLobby.jsx",
            lineNumber: 1194,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[209] = enableSendMessage;
        $[210] = gamePhase;
        $[211] = handleKeyPress;
        $[212] = handleSendMessage;
        $[213] = isCurrentPlayerDrawer;
        $[214] = messageInput;
        $[215] = t73;
    } else {
        t73 = $[215];
    }
    let t74;
    if ($[216] !== t69 || $[217] !== t72 || $[218] !== t73) {
        t74 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "game-panel flex flex-col overflow-hidden",
            style: t65,
            children: [
                t69,
                t72,
                t73
            ]
        }, void 0, true, {
            fileName: "[project]/components/RoomPage/GameLobby.jsx",
            lineNumber: 1207,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[216] = t69;
        $[217] = t72;
        $[218] = t73;
        $[219] = t74;
    } else {
        t74 = $[219];
    }
    let t75;
    if ($[220] === Symbol.for("react.memo_cache_sentinel")) {
        t75 = {
            minHeight: "250px"
        };
        $[220] = t75;
    } else {
        t75 = $[220];
    }
    let t76;
    let t77;
    if ($[221] === Symbol.for("react.memo_cache_sentinel")) {
        t76 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gamepad$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Gamepad2$3e$__["Gamepad2"], {
            className: "w-4 h-4 text-game-blue"
        }, void 0, false, {
            fileName: "[project]/components/RoomPage/GameLobby.jsx",
            lineNumber: 1227,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        t77 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "font-bold text-sm",
            children: "players"
        }, void 0, false, {
            fileName: "[project]/components/RoomPage/GameLobby.jsx",
            lineNumber: 1228,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[221] = t76;
        $[222] = t77;
    } else {
        t76 = $[221];
        t77 = $[222];
    }
    let t78;
    if ($[223] !== players.length) {
        t78 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-center items-center gap-2",
            children: [
                t76,
                t77,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "bg-game-blue text-white text-xs px-2 py-0.5 rounded-full font-bold",
                    children: players.length
                }, void 0, false, {
                    fileName: "[project]/components/RoomPage/GameLobby.jsx",
                    lineNumber: 1237,
                    columnNumber: 77
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/RoomPage/GameLobby.jsx",
            lineNumber: 1237,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[223] = players.length;
        $[224] = t78;
    } else {
        t78 = $[224];
    }
    let t79;
    if ($[225] === Symbol.for("react.memo_cache_sentinel")) {
        t79 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: handleLeaveRoom,
                className: "px-2 py-1 rounded text-xs bg-red-500 border-2 border-red-600 text-white hover:bg-red-600 transition font-bold cursor-pointer",
                children: "leave"
            }, void 0, false, {
                fileName: "[project]/components/RoomPage/GameLobby.jsx",
                lineNumber: 1245,
                columnNumber: 16
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/RoomPage/GameLobby.jsx",
            lineNumber: 1245,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[225] = t79;
    } else {
        t79 = $[225];
    }
    let t80;
    if ($[226] !== t78) {
        t80 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex text-game-text items-center justify-between gap-2 border-b-2 border-game-border p-3 bg-gray-50",
            children: [
                t78,
                t79
            ]
        }, void 0, true, {
            fileName: "[project]/components/RoomPage/GameLobby.jsx",
            lineNumber: 1252,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[226] = t78;
        $[227] = t80;
    } else {
        t80 = $[227];
    }
    let t81;
    if ($[228] === Symbol.for("react.memo_cache_sentinel")) {
        t81 = {
            minHeight: "100px",
            maxHeight: "250px"
        };
        $[228] = t81;
    } else {
        t81 = $[228];
    }
    let t82;
    if ($[229] !== currentDrawer || $[230] !== currentPlayer?.id || $[231] !== gameStarted || $[232] !== hostId || $[233] !== players) {
        let t83;
        if ($[235] !== currentDrawer || $[236] !== currentPlayer?.id || $[237] !== gameStarted || $[238] !== hostId) {
            t83 = (player_4)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$RoomPage$2f$PlayerCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    player: player_4,
                    hostId: hostId,
                    isCurrentUser: currentPlayer?.id === player_4.id,
                    isDrawing: player_4.id === currentDrawer,
                    showScore: gameStarted
                }, player_4.id, false, {
                    fileName: "[project]/components/RoomPage/GameLobby.jsx",
                    lineNumber: 1272,
                    columnNumber: 25
                }, ("TURBOPACK compile-time value", void 0));
            $[235] = currentDrawer;
            $[236] = currentPlayer?.id;
            $[237] = gameStarted;
            $[238] = hostId;
            $[239] = t83;
        } else {
            t83 = $[239];
        }
        t82 = players.map(t83);
        $[229] = currentDrawer;
        $[230] = currentPlayer?.id;
        $[231] = gameStarted;
        $[232] = hostId;
        $[233] = players;
        $[234] = t82;
    } else {
        t82 = $[234];
    }
    let t83;
    if ($[240] !== t82) {
        t83 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1 overflow-y-auto p-2 space-y-1.5 bg-white",
            style: t81,
            children: t82
        }, void 0, false, {
            fileName: "[project]/components/RoomPage/GameLobby.jsx",
            lineNumber: 1293,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[240] = t82;
        $[241] = t83;
    } else {
        t83 = $[241];
    }
    let t84;
    if ($[242] !== currentPlayer?.id || $[243] !== gameStarted || $[244] !== handleStartGame || $[245] !== hostId || $[246] !== players.length) {
        t84 = !gameStarted && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-2 border-t-2 border-game-border bg-gray-50",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: handleStartGame,
                className: "game-btn w-full py-2 text-sm disabled:opacity-50 disabled:cursor-not-allowed",
                disabled: currentPlayer?.id !== hostId || players.length < 2,
                children: currentPlayer?.id === hostId ? "start!" : "waiting for host..."
            }, void 0, false, {
                fileName: "[project]/components/RoomPage/GameLobby.jsx",
                lineNumber: 1301,
                columnNumber: 89
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/RoomPage/GameLobby.jsx",
            lineNumber: 1301,
            columnNumber: 27
        }, ("TURBOPACK compile-time value", void 0));
        $[242] = currentPlayer?.id;
        $[243] = gameStarted;
        $[244] = handleStartGame;
        $[245] = hostId;
        $[246] = players.length;
        $[247] = t84;
    } else {
        t84 = $[247];
    }
    let t85;
    if ($[248] !== t80 || $[249] !== t83 || $[250] !== t84) {
        t85 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "game-panel flex flex-col overflow-hidden",
            style: t75,
            children: [
                t80,
                t83,
                t84
            ]
        }, void 0, true, {
            fileName: "[project]/components/RoomPage/GameLobby.jsx",
            lineNumber: 1313,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[248] = t80;
        $[249] = t83;
        $[250] = t84;
        $[251] = t85;
    } else {
        t85 = $[251];
    }
    let t86;
    if ($[252] !== t74 || $[253] !== t85) {
        t86 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1 overflow-y-auto px-3 py-3 space-y-3 min-h-0",
            children: [
                t74,
                t85
            ]
        }, void 0, true, {
            fileName: "[project]/components/RoomPage/GameLobby.jsx",
            lineNumber: 1323,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[252] = t74;
        $[253] = t85;
        $[254] = t86;
    } else {
        t86 = $[254];
    }
    let t87;
    if ($[255] !== t61 || $[256] !== t62 || $[257] !== t63 || $[258] !== t64 || $[259] !== t86) {
        t87 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative lg:hidden flex flex-col h-full",
            children: [
                t61,
                t62,
                t63,
                t64,
                t86
            ]
        }, void 0, true, {
            fileName: "[project]/components/RoomPage/GameLobby.jsx",
            lineNumber: 1332,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[255] = t61;
        $[256] = t62;
        $[257] = t63;
        $[258] = t64;
        $[259] = t86;
        $[260] = t87;
    } else {
        t87 = $[260];
    }
    let t88;
    if ($[261] !== t31 || $[262] !== t32 || $[263] !== t33 || $[264] !== t34 || $[265] !== t35 || $[266] !== t60 || $[267] !== t87) {
        t88 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed inset-0 bg-game-blue",
            children: [
                t31,
                t32,
                t33,
                t34,
                t35,
                t60,
                t87
            ]
        }, void 0, true, {
            fileName: "[project]/components/RoomPage/GameLobby.jsx",
            lineNumber: 1344,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[261] = t31;
        $[262] = t32;
        $[263] = t33;
        $[264] = t34;
        $[265] = t35;
        $[266] = t60;
        $[267] = t87;
        $[268] = t88;
    } else {
        t88 = $[268];
    }
    return t88;
};
_s(GameLobby, "k5w0x2GV+8+wkY5CggHqENjvvwY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = GameLobby;
const __TURBOPACK__default__export__ = GameLobby;
function _temp(prev_9) {
    return Math.max(0, prev_9 - 1);
}
function _temp2(t0) {
    const { message: message_1 } = t0;
    console.error("Socket error:", message_1);
    alert(message_1);
}
var _c;
__turbopack_context__.k.register(_c, "GameLobby");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_a3d6fff4._.js.map