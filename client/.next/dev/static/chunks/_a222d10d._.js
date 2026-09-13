(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/socket/socket.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "initSocket",
    ()=>initSocket
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/socket.io-client/build/esm/index.js [app-client] (ecmascript) <locals>");
;
let socket = null;
const SERVER_URL = "https://drdraw.onrender.com/";
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
"[project]/components/HomePage/Header.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
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
const Header = ()=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "7e7c1fce31ad078f9f1ed04e91264834d42727009a96f714b9e1661162438d6e") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "7e7c1fce31ad078f9f1ed04e91264834d42727009a96f714b9e1661162438d6e";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center py-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "logo-text-light text-5xl sm:text-6xl font-bold lowercase",
                    children: "drdraw"
                }, void 0, false, {
                    fileName: "[project]/components/HomePage/Header.jsx",
                    lineNumber: 13,
                    columnNumber: 44
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-white/80 text-sm mt-1 font-semibold",
                    children: "draw & guess game"
                }, void 0, false, {
                    fileName: "[project]/components/HomePage/Header.jsx",
                    lineNumber: 13,
                    columnNumber: 128
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/HomePage/Header.jsx",
            lineNumber: 13,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
};
_c = Header;
const __TURBOPACK__default__export__ = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/HomePage/Lobby.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DrDraw
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$socket$2f$socket$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/socket/socket.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$HomePage$2f$Header$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/HomePage/Header.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function DrDraw() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(53);
    if ($[0] !== "fdd8b93f3a7a7d24a1db5b4090dc7216a7c113bb298c97276bd8be7d1daff02a") {
        for(let $i = 0; $i < 53; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "fdd8b93f3a7a7d24a1db5b4090dc7216a7c113bb298c97276bd8be7d1daff02a";
    }
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    let t0;
    if ($[1] !== searchParams) {
        t0 = searchParams.get("rid");
        $[1] = searchParams;
        $[2] = t0;
    } else {
        t0 = $[2];
    }
    const rId = t0;
    const [name, setName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [roomId, setRoomId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(rId || "");
    const [, setMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [showJoin, setShowJoin] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(!!rId);
    let t1;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = {
            name: "",
            roomId: ""
        };
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    const [errors, setErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t1);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    let t2;
    if ($[4] !== router) {
        t2 = ({
            "DrDraw[useEffect()]": ()=>{
                const socket = (0, __TURBOPACK__imported__module__$5b$project$5d2f$socket$2f$socket$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initSocket"])();
                socket.on("connect", _DrDrawUseEffectSocketOn);
                socket.on("room-created", {
                    "DrDraw[useEffect() > socket.on()]": (t3)=>{
                        const { code, player } = t3;
                        sessionStorage.setItem("player", JSON.stringify(player));
                        sessionStorage.setItem("roomId", code);
                        router.push(`/room/${code}`);
                    }
                }["DrDraw[useEffect() > socket.on()]"]);
                socket.on("room-joined", {
                    "DrDraw[useEffect() > socket.on()]": (t4)=>{
                        const { room, player: player_0 } = t4;
                        sessionStorage.setItem("player", JSON.stringify(player_0));
                        sessionStorage.setItem("roomId", room.code);
                        router.push(`/room/${room.code}`);
                    }
                }["DrDraw[useEffect() > socket.on()]"]);
                socket.on("error", {
                    "DrDraw[useEffect() > socket.on()]": (t5)=>{
                        const { message } = t5;
                        setLoading(false);
                        alert(message);
                    }
                }["DrDraw[useEffect() > socket.on()]"]);
                return ()=>{
                    socket.off("room-created");
                    socket.off("room-joined");
                    socket.off("error");
                    socket.off("connect");
                };
            }
        })["DrDraw[useEffect()]"];
        $[4] = router;
        $[5] = t2;
    } else {
        t2 = $[5];
    }
    let t3;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = [];
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t2, t3);
    let t4;
    if ($[7] !== name) {
        t4 = ({
            "DrDraw[handleCreateRoom]": (e)=>{
                e.preventDefault();
                setErrors({
                    name: "",
                    roomId: ""
                });
                if (!name.trim()) {
                    setErrors({
                        name: "pick a name first!",
                        roomId: ""
                    });
                    return;
                }
                if (name.length > 20) {
                    setErrors({
                        name: "name must be under 20 chars",
                        roomId: ""
                    });
                    return;
                }
                setLoading(true);
                const socket_0 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$socket$2f$socket$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initSocket"])();
                socket_0.emit("create-room", {
                    playerName: name.trim()
                });
            }
        })["DrDraw[handleCreateRoom]"];
        $[7] = name;
        $[8] = t4;
    } else {
        t4 = $[8];
    }
    const handleCreateRoom = t4;
    let t5;
    if ($[9] !== name || $[10] !== roomId) {
        t5 = ({
            "DrDraw[handleJoinRoom]": (e_0)=>{
                e_0.preventDefault();
                const newErrors = {
                    name: "",
                    roomId: ""
                };
                if (!name.trim()) {
                    newErrors.name = "pick a name first!";
                }
                if (!roomId.trim()) {
                    newErrors.roomId = "enter a room code";
                }
                if (name.length > 20) {
                    setErrors({
                        name: "name must be under 20 chars",
                        roomId: ""
                    });
                    return;
                }
                if (newErrors.name || newErrors.roomId) {
                    setErrors(newErrors);
                    return;
                }
                setLoading(true);
                const socket_1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$socket$2f$socket$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initSocket"])();
                socket_1.emit("join-room", {
                    code: roomId.toUpperCase().trim(),
                    playerName: name.trim()
                });
            }
        })["DrDraw[handleJoinRoom]"];
        $[9] = name;
        $[10] = roomId;
        $[11] = t5;
    } else {
        t5 = $[11];
    }
    const handleJoinRoom = t5;
    let t6;
    if ($[12] !== handleCreateRoom || $[13] !== handleJoinRoom || $[14] !== name || $[15] !== roomId) {
        t6 = ({
            "DrDraw[handleKeyPress]": (e_1)=>{
                if (e_1.key === "Enter") {
                    e_1.preventDefault();
                    if (name.trim() && roomId.trim()) {
                        handleJoinRoom(e_1);
                    } else {
                        if (name.trim() && !roomId.trim()) {
                            handleCreateRoom(e_1);
                        }
                    }
                }
            }
        })["DrDraw[handleKeyPress]"];
        $[12] = handleCreateRoom;
        $[13] = handleJoinRoom;
        $[14] = name;
        $[15] = roomId;
        $[16] = t6;
    } else {
        t6 = $[16];
    }
    const handleKeyPress = t6;
    let t7;
    if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-sm",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$HomePage$2f$Header$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/components/HomePage/Lobby.jsx",
                lineNumber: 206,
                columnNumber: 43
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/HomePage/Lobby.jsx",
            lineNumber: 206,
            columnNumber: 10
        }, this);
        $[17] = t7;
    } else {
        t7 = $[17];
    }
    let t8;
    if ($[18] !== errors) {
        t8 = ({
            "DrDraw[<input>.onChange]": (e_2)=>{
                setName(e_2.target.value);
                if (errors.name) {
                    setErrors({
                        ...errors,
                        name: ""
                    });
                }
            }
        })["DrDraw[<input>.onChange]"];
        $[18] = errors;
        $[19] = t8;
    } else {
        t8 = $[19];
    }
    const t9 = `game-input text-base ${errors.name ? "border-red-400" : ""}`;
    let t10;
    if ($[20] !== handleKeyPress || $[21] !== name || $[22] !== t8 || $[23] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: "text",
            placeholder: "your name",
            value: name,
            onKeyPress: handleKeyPress,
            onChange: t8,
            className: t9
        }, void 0, false, {
            fileName: "[project]/components/HomePage/Lobby.jsx",
            lineNumber: 232,
            columnNumber: 11
        }, this);
        $[20] = handleKeyPress;
        $[21] = name;
        $[22] = t8;
        $[23] = t9;
        $[24] = t10;
    } else {
        t10 = $[24];
    }
    let t11;
    if ($[25] !== errors.name) {
        t11 = errors.name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-red-500 text-sm mt-1",
            children: errors.name
        }, void 0, false, {
            fileName: "[project]/components/HomePage/Lobby.jsx",
            lineNumber: 243,
            columnNumber: 26
        }, this);
        $[25] = errors.name;
        $[26] = t11;
    } else {
        t11 = $[26];
    }
    let t12;
    if ($[27] !== t10 || $[28] !== t11) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t10,
                t11
            ]
        }, void 0, true, {
            fileName: "[project]/components/HomePage/Lobby.jsx",
            lineNumber: 251,
            columnNumber: 11
        }, this);
        $[27] = t10;
        $[28] = t11;
        $[29] = t12;
    } else {
        t12 = $[29];
    }
    let t13;
    if ($[30] !== errors || $[31] !== handleKeyPress || $[32] !== roomId || $[33] !== showJoin) {
        t13 = showJoin && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "text",
                    placeholder: "room code",
                    value: roomId,
                    onKeyPress: handleKeyPress,
                    onChange: {
                        "DrDraw[<input>.onChange]": (e_3)=>{
                            setRoomId(e_3.target.value);
                            if (errors.roomId) {
                                setErrors({
                                    ...errors,
                                    roomId: ""
                                });
                            }
                        }
                    }["DrDraw[<input>.onChange]"],
                    className: `game-input text-base uppercase ${errors.roomId ? "border-red-400" : ""}`
                }, void 0, false, {
                    fileName: "[project]/components/HomePage/Lobby.jsx",
                    lineNumber: 260,
                    columnNumber: 28
                }, this),
                errors.roomId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-red-500 text-sm mt-1",
                    children: errors.roomId
                }, void 0, false, {
                    fileName: "[project]/components/HomePage/Lobby.jsx",
                    lineNumber: 270,
                    columnNumber: 144
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/HomePage/Lobby.jsx",
            lineNumber: 260,
            columnNumber: 23
        }, this);
        $[30] = errors;
        $[31] = handleKeyPress;
        $[32] = roomId;
        $[33] = showJoin;
        $[34] = t13;
    } else {
        t13 = $[34];
    }
    let t14;
    if ($[35] !== handleCreateRoom || $[36] !== handleJoinRoom || $[37] !== loading || $[38] !== showJoin) {
        t14 = !showJoin ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            disabled: loading,
            onClick: {
                "DrDraw[<button>.onClick]": (e_4)=>{
                    setMode("create");
                    handleCreateRoom(e_4);
                }
            }["DrDraw[<button>.onClick]"],
            className: "game-btn w-full py-3 text-lg mt-1",
            children: loading ? "..." : "Play!"
        }, void 0, false, {
            fileName: "[project]/components/HomePage/Lobby.jsx",
            lineNumber: 281,
            columnNumber: 23
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            disabled: loading,
            onClick: {
                "DrDraw[<button>.onClick]": (e_5)=>{
                    setMode("join");
                    handleJoinRoom(e_5);
                }
            }["DrDraw[<button>.onClick]"],
            className: "game-btn w-full py-3 text-lg mt-1",
            children: loading ? "..." : "Join!"
        }, void 0, false, {
            fileName: "[project]/components/HomePage/Lobby.jsx",
            lineNumber: 286,
            columnNumber: 121
        }, this);
        $[35] = handleCreateRoom;
        $[36] = handleJoinRoom;
        $[37] = loading;
        $[38] = showJoin;
        $[39] = t14;
    } else {
        t14 = $[39];
    }
    let t15;
    if ($[40] !== showJoin) {
        t15 = ({
            "DrDraw[<button>.onClick]": ()=>{
                setShowJoin(!showJoin);
                setErrors({
                    name: "",
                    roomId: ""
                });
            }
        })["DrDraw[<button>.onClick]"];
        $[40] = showJoin;
        $[41] = t15;
    } else {
        t15 = $[41];
    }
    const t16 = showJoin ? "create a new room instead" : "got a room code? join here!";
    let t17;
    if ($[42] !== t15 || $[43] !== t16) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            onClick: t15,
            className: "w-full text-center text-game-blue-dark text-sm font-bold hover:underline cursor-pointer py-1",
            children: t16
        }, void 0, false, {
            fileName: "[project]/components/HomePage/Lobby.jsx",
            lineNumber: 319,
            columnNumber: 11
        }, this);
        $[42] = t15;
        $[43] = t16;
        $[44] = t17;
    } else {
        t17 = $[44];
    }
    let t18;
    if ($[45] !== t12 || $[46] !== t13 || $[47] !== t14 || $[48] !== t17) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "game-panel p-6 w-full max-w-sm",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-3",
                children: [
                    t12,
                    t13,
                    t14,
                    t17
                ]
            }, void 0, true, {
                fileName: "[project]/components/HomePage/Lobby.jsx",
                lineNumber: 328,
                columnNumber: 59
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/HomePage/Lobby.jsx",
            lineNumber: 328,
            columnNumber: 11
        }, this);
        $[45] = t12;
        $[46] = t13;
        $[47] = t14;
        $[48] = t17;
        $[49] = t18;
    } else {
        t18 = $[49];
    }
    let t19;
    if ($[50] === Symbol.for("react.memo_cache_sentinel")) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-md text-center text-white/75 text-sm space-y-2 px-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: "draw the word, others can guess it - most points win!"
                }, void 0, false, {
                    fileName: "[project]/components/HomePage/Lobby.jsx",
                    lineNumber: 339,
                    columnNumber: 93
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "hidden sm:block text-white/60 text-xs",
                    children: "free · no signup · just pick a name and go"
                }, void 0, false, {
                    fileName: "[project]/components/HomePage/Lobby.jsx",
                    lineNumber: 339,
                    columnNumber: 153
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/HomePage/Lobby.jsx",
            lineNumber: 339,
            columnNumber: 11
        }, this);
        $[50] = t19;
    } else {
        t19 = $[50];
    }
    let t20;
    if ($[51] !== t18) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen flex flex-col items-center justify-center p-4 gap-6",
            children: [
                t7,
                t18,
                t19
            ]
        }, void 0, true, {
            fileName: "[project]/components/HomePage/Lobby.jsx",
            lineNumber: 346,
            columnNumber: 11
        }, this);
        $[51] = t18;
        $[52] = t20;
    } else {
        t20 = $[52];
    }
    return t20;
}
_s(DrDraw, "iuR5hu3ab2vKc5g5dxTxs7B83I4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = DrDraw;
function _DrDrawUseEffectSocketOn() {}
var _c;
__turbopack_context__.k.register(_c, "DrDraw");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_a222d10d._.js.map