(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/frontend/node_modules/@reown/appkit-controllers/node_modules/proxy-compare/dist/index.modern.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "affectedToPathList",
    ()=>w,
    "createProxy",
    ()=>a,
    "getUntracked",
    ()=>y,
    "isChanged",
    ()=>p,
    "markToTrack",
    ()=>h,
    "replaceNewProxy",
    ()=>O,
    "trackMemo",
    ()=>g
]);
const e = Symbol(), t = Symbol(), r = "a", n = "w";
let o = (e, t)=>new Proxy(e, t);
const s = Object.getPrototypeOf, c = new WeakMap, l = (e)=>e && (c.has(e) ? c.get(e) : s(e) === Object.prototype || s(e) === Array.prototype), f = (e)=>"object" == typeof e && null !== e, i = (e)=>{
    if (Array.isArray(e)) return Array.from(e);
    const t = Object.getOwnPropertyDescriptors(e);
    return Object.values(t).forEach((e)=>{
        e.configurable = !0;
    }), Object.create(s(e), t);
}, u = (e)=>e[t] || e, a = (s, c, f, p)=>{
    if (!l(s)) return s;
    let g = p && p.get(s);
    if (!g) {
        const e = u(s);
        g = ((e)=>Object.values(Object.getOwnPropertyDescriptors(e)).some((e)=>!e.configurable && !e.writable))(e) ? [
            e,
            i(e)
        ] : [
            e
        ], null == p || p.set(s, g);
    }
    const [y, h] = g;
    let w = f && f.get(y);
    return w && w[1].f === !!h || (w = ((o, s)=>{
        const c = {
            f: s
        };
        let l = !1;
        const f = (e, t)=>{
            if (!l) {
                let s = c[r].get(o);
                if (s || (s = {}, c[r].set(o, s)), e === n) s[n] = !0;
                else {
                    let r = s[e];
                    r || (r = new Set, s[e] = r), r.add(t);
                }
            }
        }, i = {
            get: (e, n)=>n === t ? o : (f("k", n), a(Reflect.get(e, n), c[r], c.c, c.t)),
            has: (t, n)=>n === e ? (l = !0, c[r].delete(o), !0) : (f("h", n), Reflect.has(t, n)),
            getOwnPropertyDescriptor: (e, t)=>(f("o", t), Reflect.getOwnPropertyDescriptor(e, t)),
            ownKeys: (e)=>(f(n), Reflect.ownKeys(e))
        };
        return s && (i.set = i.deleteProperty = ()=>!1), [
            i,
            c
        ];
    })(y, !!h), w[1].p = o(h || y, w[0]), f && f.set(y, w)), w[1][r] = c, w[1].c = f, w[1].t = p, w[1].p;
}, p = function(e, t, r, o) {
    let s = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : Object.is;
    if (s(e, t)) return !1;
    if (!f(e) || !f(t)) return !0;
    const c = r.get(u(e));
    if (!c) return !0;
    if (o) {
        const r = o.get(e);
        if (r && r.n === t) return r.g;
        o.set(e, {
            n: t,
            g: !1
        });
    }
    let l = null;
    try {
        for (const r of c.h || [])if (l = Reflect.has(e, r) !== Reflect.has(t, r), l) return l;
        if (!0 === c[n]) {
            if (l = ((e, t)=>{
                const r = Reflect.ownKeys(e), n = Reflect.ownKeys(t);
                return r.length !== n.length || r.some((e, t)=>e !== n[t]);
            })(e, t), l) return l;
        } else for (const r of c.o || [])if (l = !!Reflect.getOwnPropertyDescriptor(e, r) != !!Reflect.getOwnPropertyDescriptor(t, r), l) return l;
        for (const n of c.k || [])if (l = p(e[n], t[n], r, o, s), l) return l;
        return null === l && (l = !0), l;
    } finally{
        o && o.set(e, {
            n: t,
            g: l
        });
    }
}, g = (t)=>!!l(t) && e in t, y = (e)=>l(e) && e[t] || null, h = function(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
    c.set(e, t);
}, w = (e, t, r)=>{
    const o = [], s = new WeakSet, c = (e, l)=>{
        if (s.has(e)) return;
        f(e) && s.add(e);
        const i = f(e) && t.get(u(e));
        if (i) {
            var a, p;
            if (null == (a = i.h) || a.forEach((e)=>{
                const t = ":has(".concat(String(e), ")");
                o.push(l ? [
                    ...l,
                    t
                ] : [
                    t
                ]);
            }), !0 === i[n]) {
                const e = ":ownKeys";
                o.push(l ? [
                    ...l,
                    e
                ] : [
                    e
                ]);
            } else {
                var g;
                null == (g = i.o) || g.forEach((e)=>{
                    const t = ":hasOwn(".concat(String(e), ")");
                    o.push(l ? [
                        ...l,
                        t
                    ] : [
                        t
                    ]);
                });
            }
            null == (p = i.k) || p.forEach((t)=>{
                r && !("value" in (Object.getOwnPropertyDescriptor(e, t) || {})) || c(e[t], l ? [
                    ...l,
                    t
                ] : [
                    t
                ]);
            });
        } else l && o.push(l);
    };
    return c(e), o;
}, O = (e)=>{
    o = e;
};
;
 //# sourceMappingURL=index.modern.mjs.map
}),
"[project]/frontend/node_modules/proxy-compare/dist/index.modern.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "affectedToPathList",
    ()=>w,
    "createProxy",
    ()=>a,
    "getUntracked",
    ()=>y,
    "isChanged",
    ()=>p,
    "markToTrack",
    ()=>h,
    "replaceNewProxy",
    ()=>O,
    "trackMemo",
    ()=>g
]);
const e = Symbol(), t = Symbol(), r = "a", n = "w";
let o = (e, t)=>new Proxy(e, t);
const s = Object.getPrototypeOf, c = new WeakMap, l = (e)=>e && (c.has(e) ? c.get(e) : s(e) === Object.prototype || s(e) === Array.prototype), f = (e)=>"object" == typeof e && null !== e, i = (e)=>{
    if (Array.isArray(e)) return Array.from(e);
    const t = Object.getOwnPropertyDescriptors(e);
    return Object.values(t).forEach((e)=>{
        e.configurable = !0;
    }), Object.create(s(e), t);
}, u = (e)=>e[t] || e, a = (s, c, f, p)=>{
    if (!l(s)) return s;
    let g = p && p.get(s);
    if (!g) {
        const e = u(s);
        g = ((e)=>Object.values(Object.getOwnPropertyDescriptors(e)).some((e)=>!e.configurable && !e.writable))(e) ? [
            e,
            i(e)
        ] : [
            e
        ], null == p || p.set(s, g);
    }
    const [y, h] = g;
    let w = f && f.get(y);
    return w && w[1].f === !!h || (w = ((o, s)=>{
        const c = {
            f: s
        };
        let l = !1;
        const f = (e, t)=>{
            if (!l) {
                let s = c[r].get(o);
                if (s || (s = {}, c[r].set(o, s)), e === n) s[n] = !0;
                else {
                    let r = s[e];
                    r || (r = new Set, s[e] = r), r.add(t);
                }
            }
        }, i = {
            get: (e, n)=>n === t ? o : (f("k", n), a(Reflect.get(e, n), c[r], c.c, c.t)),
            has: (t, n)=>n === e ? (l = !0, c[r].delete(o), !0) : (f("h", n), Reflect.has(t, n)),
            getOwnPropertyDescriptor: (e, t)=>(f("o", t), Reflect.getOwnPropertyDescriptor(e, t)),
            ownKeys: (e)=>(f(n), Reflect.ownKeys(e))
        };
        return s && (i.set = i.deleteProperty = ()=>!1), [
            i,
            c
        ];
    })(y, !!h), w[1].p = o(h || y, w[0]), f && f.set(y, w)), w[1][r] = c, w[1].c = f, w[1].t = p, w[1].p;
}, p = (e, t, r, o)=>{
    if (Object.is(e, t)) return !1;
    if (!f(e) || !f(t)) return !0;
    const s = r.get(u(e));
    if (!s) return !0;
    if (o) {
        const r = o.get(e);
        if (r && r.n === t) return r.g;
        o.set(e, {
            n: t,
            g: !1
        });
    }
    let c = null;
    try {
        for (const r of s.h || [])if (c = Reflect.has(e, r) !== Reflect.has(t, r), c) return c;
        if (!0 === s[n]) {
            if (c = ((e, t)=>{
                const r = Reflect.ownKeys(e), n = Reflect.ownKeys(t);
                return r.length !== n.length || r.some((e, t)=>e !== n[t]);
            })(e, t), c) return c;
        } else for (const r of s.o || [])if (c = !!Reflect.getOwnPropertyDescriptor(e, r) != !!Reflect.getOwnPropertyDescriptor(t, r), c) return c;
        for (const n of s.k || [])if (c = p(e[n], t[n], r, o), c) return c;
        return null === c && (c = !0), c;
    } finally{
        o && o.set(e, {
            n: t,
            g: c
        });
    }
}, g = (t)=>!!l(t) && e in t, y = (e)=>l(e) && e[t] || null, h = function(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
    c.set(e, t);
}, w = (e, t, r)=>{
    const o = [], s = new WeakSet, c = (e, l)=>{
        if (s.has(e)) return;
        f(e) && s.add(e);
        const i = f(e) && t.get(u(e));
        if (i) {
            var a, p;
            if (null == (a = i.h) || a.forEach((e)=>{
                const t = ":has(".concat(String(e), ")");
                o.push(l ? [
                    ...l,
                    t
                ] : [
                    t
                ]);
            }), !0 === i[n]) {
                const e = ":ownKeys";
                o.push(l ? [
                    ...l,
                    e
                ] : [
                    e
                ]);
            } else {
                var g;
                null == (g = i.o) || g.forEach((e)=>{
                    const t = ":hasOwn(".concat(String(e), ")");
                    o.push(l ? [
                        ...l,
                        t
                    ] : [
                        t
                    ]);
                });
            }
            null == (p = i.k) || p.forEach((t)=>{
                r && !("value" in (Object.getOwnPropertyDescriptor(e, t) || {})) || c(e[t], l ? [
                    ...l,
                    t
                ] : [
                    t
                ]);
            });
        } else l && o.push(l);
    };
    return c(e), o;
}, O = (e)=>{
    o = e;
};
;
 //# sourceMappingURL=index.modern.mjs.map
}),
"[project]/frontend/node_modules/@reown/appkit-utils/node_modules/proxy-compare/dist/index.modern.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "affectedToPathList",
    ()=>w,
    "createProxy",
    ()=>a,
    "getUntracked",
    ()=>y,
    "isChanged",
    ()=>p,
    "markToTrack",
    ()=>h,
    "replaceNewProxy",
    ()=>O,
    "trackMemo",
    ()=>g
]);
const e = Symbol(), t = Symbol(), r = "a", n = "w";
let o = (e, t)=>new Proxy(e, t);
const s = Object.getPrototypeOf, c = new WeakMap, l = (e)=>e && (c.has(e) ? c.get(e) : s(e) === Object.prototype || s(e) === Array.prototype), f = (e)=>"object" == typeof e && null !== e, i = (e)=>{
    if (Array.isArray(e)) return Array.from(e);
    const t = Object.getOwnPropertyDescriptors(e);
    return Object.values(t).forEach((e)=>{
        e.configurable = !0;
    }), Object.create(s(e), t);
}, u = (e)=>e[t] || e, a = (s, c, f, p)=>{
    if (!l(s)) return s;
    let g = p && p.get(s);
    if (!g) {
        const e = u(s);
        g = ((e)=>Object.values(Object.getOwnPropertyDescriptors(e)).some((e)=>!e.configurable && !e.writable))(e) ? [
            e,
            i(e)
        ] : [
            e
        ], null == p || p.set(s, g);
    }
    const [y, h] = g;
    let w = f && f.get(y);
    return w && w[1].f === !!h || (w = ((o, s)=>{
        const c = {
            f: s
        };
        let l = !1;
        const f = (e, t)=>{
            if (!l) {
                let s = c[r].get(o);
                if (s || (s = {}, c[r].set(o, s)), e === n) s[n] = !0;
                else {
                    let r = s[e];
                    r || (r = new Set, s[e] = r), r.add(t);
                }
            }
        }, i = {
            get: (e, n)=>n === t ? o : (f("k", n), a(Reflect.get(e, n), c[r], c.c, c.t)),
            has: (t, n)=>n === e ? (l = !0, c[r].delete(o), !0) : (f("h", n), Reflect.has(t, n)),
            getOwnPropertyDescriptor: (e, t)=>(f("o", t), Reflect.getOwnPropertyDescriptor(e, t)),
            ownKeys: (e)=>(f(n), Reflect.ownKeys(e))
        };
        return s && (i.set = i.deleteProperty = ()=>!1), [
            i,
            c
        ];
    })(y, !!h), w[1].p = o(h || y, w[0]), f && f.set(y, w)), w[1][r] = c, w[1].c = f, w[1].t = p, w[1].p;
}, p = function(e, t, r, o) {
    let s = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : Object.is;
    if (s(e, t)) return !1;
    if (!f(e) || !f(t)) return !0;
    const c = r.get(u(e));
    if (!c) return !0;
    if (o) {
        const r = o.get(e);
        if (r && r.n === t) return r.g;
        o.set(e, {
            n: t,
            g: !1
        });
    }
    let l = null;
    try {
        for (const r of c.h || [])if (l = Reflect.has(e, r) !== Reflect.has(t, r), l) return l;
        if (!0 === c[n]) {
            if (l = ((e, t)=>{
                const r = Reflect.ownKeys(e), n = Reflect.ownKeys(t);
                return r.length !== n.length || r.some((e, t)=>e !== n[t]);
            })(e, t), l) return l;
        } else for (const r of c.o || [])if (l = !!Reflect.getOwnPropertyDescriptor(e, r) != !!Reflect.getOwnPropertyDescriptor(t, r), l) return l;
        for (const n of c.k || [])if (l = p(e[n], t[n], r, o, s), l) return l;
        return null === l && (l = !0), l;
    } finally{
        o && o.set(e, {
            n: t,
            g: l
        });
    }
}, g = (t)=>!!l(t) && e in t, y = (e)=>l(e) && e[t] || null, h = function(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
    c.set(e, t);
}, w = (e, t, r)=>{
    const o = [], s = new WeakSet, c = (e, l)=>{
        if (s.has(e)) return;
        f(e) && s.add(e);
        const i = f(e) && t.get(u(e));
        if (i) {
            var a, p;
            if (null == (a = i.h) || a.forEach((e)=>{
                const t = ":has(".concat(String(e), ")");
                o.push(l ? [
                    ...l,
                    t
                ] : [
                    t
                ]);
            }), !0 === i[n]) {
                const e = ":ownKeys";
                o.push(l ? [
                    ...l,
                    e
                ] : [
                    e
                ]);
            } else {
                var g;
                null == (g = i.o) || g.forEach((e)=>{
                    const t = ":hasOwn(".concat(String(e), ")");
                    o.push(l ? [
                        ...l,
                        t
                    ] : [
                        t
                    ]);
                });
            }
            null == (p = i.k) || p.forEach((t)=>{
                r && !("value" in (Object.getOwnPropertyDescriptor(e, t) || {})) || c(e[t], l ? [
                    ...l,
                    t
                ] : [
                    t
                ]);
            });
        } else l && o.push(l);
    };
    return c(e), o;
}, O = (e)=>{
    o = e;
};
;
 //# sourceMappingURL=index.modern.mjs.map
}),
"[project]/frontend/node_modules/@reown/appkit-controllers/node_modules/valtio/esm/vanilla.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getVersion",
    ()=>getVersion,
    "proxy",
    ()=>proxy,
    "ref",
    ()=>ref,
    "snapshot",
    ()=>snapshot,
    "subscribe",
    ()=>subscribe,
    "unstable_buildProxyFunction",
    ()=>unstable_buildProxyFunction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$node_modules$2f$proxy$2d$compare$2f$dist$2f$index$2e$modern$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@reown/appkit-controllers/node_modules/proxy-compare/dist/index.modern.js [app-client] (ecmascript)");
const __TURBOPACK__import$2e$meta__ = {
    get url () {
        return `file://${__turbopack_context__.P("frontend/node_modules/@reown/appkit-controllers/node_modules/valtio/esm/vanilla.mjs")}`;
    }
};
;
const isObject = (x)=>typeof x === "object" && x !== null;
const proxyStateMap = /* @__PURE__ */ new WeakMap();
const refSet = /* @__PURE__ */ new WeakSet();
const buildProxyFunction = function() {
    let objectIs = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Object.is, newProxy = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : (target, handler)=>new Proxy(target, handler), canProxy = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : (x)=>isObject(x) && !refSet.has(x) && (Array.isArray(x) || !(Symbol.iterator in x)) && !(x instanceof WeakMap) && !(x instanceof WeakSet) && !(x instanceof Error) && !(x instanceof Number) && !(x instanceof Date) && !(x instanceof String) && !(x instanceof RegExp) && !(x instanceof ArrayBuffer), defaultHandlePromise = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : (promise)=>{
        switch(promise.status){
            case "fulfilled":
                return promise.value;
            case "rejected":
                throw promise.reason;
            default:
                throw promise;
        }
    }, snapCache = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : /* @__PURE__ */ new WeakMap(), createSnapshot = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : function(target, version) {
        let handlePromise = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : defaultHandlePromise;
        const cache = snapCache.get(target);
        if ((cache == null ? void 0 : cache[0]) === version) {
            return cache[1];
        }
        const snap = Array.isArray(target) ? [] : Object.create(Object.getPrototypeOf(target));
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$node_modules$2f$proxy$2d$compare$2f$dist$2f$index$2e$modern$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["markToTrack"])(snap, true);
        snapCache.set(target, [
            version,
            snap
        ]);
        Reflect.ownKeys(target).forEach((key)=>{
            if (Object.getOwnPropertyDescriptor(snap, key)) {
                return;
            }
            const value = Reflect.get(target, key);
            const { enumerable } = Reflect.getOwnPropertyDescriptor(target, key);
            const desc = {
                value,
                enumerable,
                // This is intentional to avoid copying with proxy-compare.
                // It's still non-writable, so it avoids assigning a value.
                configurable: true
            };
            if (refSet.has(value)) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$node_modules$2f$proxy$2d$compare$2f$dist$2f$index$2e$modern$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["markToTrack"])(value, false);
            } else if (value instanceof Promise) {
                delete desc.value;
                desc.get = ()=>handlePromise(value);
            } else if (proxyStateMap.has(value)) {
                const [target2, ensureVersion] = proxyStateMap.get(value);
                desc.value = createSnapshot(target2, ensureVersion(), handlePromise);
            }
            Object.defineProperty(snap, key, desc);
        });
        return Object.preventExtensions(snap);
    }, proxyCache = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : /* @__PURE__ */ new WeakMap(), versionHolder = arguments.length > 7 && arguments[7] !== void 0 ? arguments[7] : [
        1,
        1
    ], proxyFunction = arguments.length > 8 && arguments[8] !== void 0 ? arguments[8] : (initialObject)=>{
        if (!isObject(initialObject)) {
            throw new Error("object required");
        }
        const found = proxyCache.get(initialObject);
        if (found) {
            return found;
        }
        let version = versionHolder[0];
        const listeners = /* @__PURE__ */ new Set();
        const notifyUpdate = function(op) {
            let nextVersion = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ++versionHolder[0];
            if (version !== nextVersion) {
                version = nextVersion;
                listeners.forEach((listener)=>listener(op, nextVersion));
            }
        };
        let checkVersion = versionHolder[1];
        const ensureVersion = function() {
            let nextCheckVersion = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ++versionHolder[1];
            if (checkVersion !== nextCheckVersion && !listeners.size) {
                checkVersion = nextCheckVersion;
                propProxyStates.forEach((param)=>{
                    let [propProxyState] = param;
                    const propVersion = propProxyState[1](nextCheckVersion);
                    if (propVersion > version) {
                        version = propVersion;
                    }
                });
            }
            return version;
        };
        const createPropListener = (prop)=>(op, nextVersion)=>{
                const newOp = [
                    ...op
                ];
                newOp[1] = [
                    prop,
                    ...newOp[1]
                ];
                notifyUpdate(newOp, nextVersion);
            };
        const propProxyStates = /* @__PURE__ */ new Map();
        const addPropListener = (prop, propProxyState)=>{
            if ((__TURBOPACK__import$2e$meta__.env ? __TURBOPACK__import$2e$meta__.env.MODE : void 0) !== "production" && propProxyStates.has(prop)) {
                throw new Error("prop listener already exists");
            }
            if (listeners.size) {
                const remove = propProxyState[3](createPropListener(prop));
                propProxyStates.set(prop, [
                    propProxyState,
                    remove
                ]);
            } else {
                propProxyStates.set(prop, [
                    propProxyState
                ]);
            }
        };
        const removePropListener = (prop)=>{
            var _a;
            const entry = propProxyStates.get(prop);
            if (entry) {
                propProxyStates.delete(prop);
                (_a = entry[1]) == null ? void 0 : _a.call(entry);
            }
        };
        const addListener = (listener)=>{
            listeners.add(listener);
            if (listeners.size === 1) {
                propProxyStates.forEach((param, prop)=>{
                    let [propProxyState, prevRemove] = param;
                    if ((__TURBOPACK__import$2e$meta__.env ? __TURBOPACK__import$2e$meta__.env.MODE : void 0) !== "production" && prevRemove) {
                        throw new Error("remove already exists");
                    }
                    const remove = propProxyState[3](createPropListener(prop));
                    propProxyStates.set(prop, [
                        propProxyState,
                        remove
                    ]);
                });
            }
            const removeListener = ()=>{
                listeners.delete(listener);
                if (listeners.size === 0) {
                    propProxyStates.forEach((param, prop)=>{
                        let [propProxyState, remove] = param;
                        if (remove) {
                            remove();
                            propProxyStates.set(prop, [
                                propProxyState
                            ]);
                        }
                    });
                }
            };
            return removeListener;
        };
        const baseObject = Array.isArray(initialObject) ? [] : Object.create(Object.getPrototypeOf(initialObject));
        const handler = {
            deleteProperty (target, prop) {
                const prevValue = Reflect.get(target, prop);
                removePropListener(prop);
                const deleted = Reflect.deleteProperty(target, prop);
                if (deleted) {
                    notifyUpdate([
                        "delete",
                        [
                            prop
                        ],
                        prevValue
                    ]);
                }
                return deleted;
            },
            set (target, prop, value, receiver) {
                const hasPrevValue = Reflect.has(target, prop);
                const prevValue = Reflect.get(target, prop, receiver);
                if (hasPrevValue && (objectIs(prevValue, value) || proxyCache.has(value) && objectIs(prevValue, proxyCache.get(value)))) {
                    return true;
                }
                removePropListener(prop);
                if (isObject(value)) {
                    value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$node_modules$2f$proxy$2d$compare$2f$dist$2f$index$2e$modern$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUntracked"])(value) || value;
                }
                let nextValue = value;
                if (value instanceof Promise) {
                    value.then((v)=>{
                        value.status = "fulfilled";
                        value.value = v;
                        notifyUpdate([
                            "resolve",
                            [
                                prop
                            ],
                            v
                        ]);
                    }).catch((e)=>{
                        value.status = "rejected";
                        value.reason = e;
                        notifyUpdate([
                            "reject",
                            [
                                prop
                            ],
                            e
                        ]);
                    });
                } else {
                    if (!proxyStateMap.has(value) && canProxy(value)) {
                        nextValue = proxyFunction(value);
                    }
                    const childProxyState = !refSet.has(nextValue) && proxyStateMap.get(nextValue);
                    if (childProxyState) {
                        addPropListener(prop, childProxyState);
                    }
                }
                Reflect.set(target, prop, nextValue, receiver);
                notifyUpdate([
                    "set",
                    [
                        prop
                    ],
                    value,
                    prevValue
                ]);
                return true;
            }
        };
        const proxyObject = newProxy(baseObject, handler);
        proxyCache.set(initialObject, proxyObject);
        const proxyState = [
            baseObject,
            ensureVersion,
            createSnapshot,
            addListener
        ];
        proxyStateMap.set(proxyObject, proxyState);
        Reflect.ownKeys(initialObject).forEach((key)=>{
            const desc = Object.getOwnPropertyDescriptor(initialObject, key);
            if ("value" in desc) {
                proxyObject[key] = initialObject[key];
                delete desc.value;
                delete desc.writable;
            }
            Object.defineProperty(baseObject, key, desc);
        });
        return proxyObject;
    };
    return [
        // public functions
        proxyFunction,
        // shared state
        proxyStateMap,
        refSet,
        // internal things
        objectIs,
        newProxy,
        canProxy,
        defaultHandlePromise,
        snapCache,
        createSnapshot,
        proxyCache,
        versionHolder
    ];
};
const [defaultProxyFunction] = buildProxyFunction();
function proxy() {
    let initialObject = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return defaultProxyFunction(initialObject);
}
function getVersion(proxyObject) {
    const proxyState = proxyStateMap.get(proxyObject);
    return proxyState == null ? void 0 : proxyState[1]();
}
function subscribe(proxyObject, callback, notifyInSync) {
    const proxyState = proxyStateMap.get(proxyObject);
    if ((__TURBOPACK__import$2e$meta__.env ? __TURBOPACK__import$2e$meta__.env.MODE : void 0) !== "production" && !proxyState) {
        console.warn("Please use proxy object");
    }
    let promise;
    const ops = [];
    const addListener = proxyState[3];
    let isListenerActive = false;
    const listener = (op)=>{
        ops.push(op);
        if (notifyInSync) {
            callback(ops.splice(0));
            return;
        }
        if (!promise) {
            promise = Promise.resolve().then(()=>{
                promise = void 0;
                if (isListenerActive) {
                    callback(ops.splice(0));
                }
            });
        }
    };
    const removeListener = addListener(listener);
    isListenerActive = true;
    return ()=>{
        isListenerActive = false;
        removeListener();
    };
}
function snapshot(proxyObject, handlePromise) {
    const proxyState = proxyStateMap.get(proxyObject);
    if ((__TURBOPACK__import$2e$meta__.env ? __TURBOPACK__import$2e$meta__.env.MODE : void 0) !== "production" && !proxyState) {
        console.warn("Please use proxy object");
    }
    const [target, ensureVersion, createSnapshot] = proxyState;
    return createSnapshot(target, ensureVersion(), handlePromise);
}
function ref(obj) {
    refSet.add(obj);
    return obj;
}
const unstable_buildProxyFunction = buildProxyFunction;
;
}),
"[project]/frontend/node_modules/valtio/esm/vanilla.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getVersion",
    ()=>getVersion,
    "proxy",
    ()=>proxy,
    "ref",
    ()=>ref,
    "snapshot",
    ()=>snapshot,
    "subscribe",
    ()=>subscribe,
    "unstable_buildProxyFunction",
    ()=>unstable_buildProxyFunction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$proxy$2d$compare$2f$dist$2f$index$2e$modern$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/proxy-compare/dist/index.modern.js [app-client] (ecmascript)");
const __TURBOPACK__import$2e$meta__ = {
    get url () {
        return `file://${__turbopack_context__.P("frontend/node_modules/valtio/esm/vanilla.mjs")}`;
    }
};
;
const isObject = (x)=>typeof x === "object" && x !== null;
const proxyStateMap = /* @__PURE__ */ new WeakMap();
const refSet = /* @__PURE__ */ new WeakSet();
const buildProxyFunction = function() {
    let objectIs = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Object.is, newProxy = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : (target, handler)=>new Proxy(target, handler), canProxy = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : (x)=>isObject(x) && !refSet.has(x) && (Array.isArray(x) || !(Symbol.iterator in x)) && !(x instanceof WeakMap) && !(x instanceof WeakSet) && !(x instanceof Error) && !(x instanceof Number) && !(x instanceof Date) && !(x instanceof String) && !(x instanceof RegExp) && !(x instanceof ArrayBuffer), defaultHandlePromise = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : (promise)=>{
        switch(promise.status){
            case "fulfilled":
                return promise.value;
            case "rejected":
                throw promise.reason;
            default:
                throw promise;
        }
    }, snapCache = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : /* @__PURE__ */ new WeakMap(), createSnapshot = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : function(target, version) {
        let handlePromise = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : defaultHandlePromise;
        const cache = snapCache.get(target);
        if ((cache == null ? void 0 : cache[0]) === version) {
            return cache[1];
        }
        const snap = Array.isArray(target) ? [] : Object.create(Object.getPrototypeOf(target));
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$proxy$2d$compare$2f$dist$2f$index$2e$modern$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["markToTrack"])(snap, true);
        snapCache.set(target, [
            version,
            snap
        ]);
        Reflect.ownKeys(target).forEach((key)=>{
            if (Object.getOwnPropertyDescriptor(snap, key)) {
                return;
            }
            const value = Reflect.get(target, key);
            const desc = {
                value,
                enumerable: true,
                // This is intentional to avoid copying with proxy-compare.
                // It's still non-writable, so it avoids assigning a value.
                configurable: true
            };
            if (refSet.has(value)) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$proxy$2d$compare$2f$dist$2f$index$2e$modern$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["markToTrack"])(value, false);
            } else if (value instanceof Promise) {
                delete desc.value;
                desc.get = ()=>handlePromise(value);
            } else if (proxyStateMap.has(value)) {
                const [target2, ensureVersion] = proxyStateMap.get(value);
                desc.value = createSnapshot(target2, ensureVersion(), handlePromise);
            }
            Object.defineProperty(snap, key, desc);
        });
        return Object.preventExtensions(snap);
    }, proxyCache = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : /* @__PURE__ */ new WeakMap(), versionHolder = arguments.length > 7 && arguments[7] !== void 0 ? arguments[7] : [
        1,
        1
    ], proxyFunction = arguments.length > 8 && arguments[8] !== void 0 ? arguments[8] : (initialObject)=>{
        if (!isObject(initialObject)) {
            throw new Error("object required");
        }
        const found = proxyCache.get(initialObject);
        if (found) {
            return found;
        }
        let version = versionHolder[0];
        const listeners = /* @__PURE__ */ new Set();
        const notifyUpdate = function(op) {
            let nextVersion = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ++versionHolder[0];
            if (version !== nextVersion) {
                version = nextVersion;
                listeners.forEach((listener)=>listener(op, nextVersion));
            }
        };
        let checkVersion = versionHolder[1];
        const ensureVersion = function() {
            let nextCheckVersion = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ++versionHolder[1];
            if (checkVersion !== nextCheckVersion && !listeners.size) {
                checkVersion = nextCheckVersion;
                propProxyStates.forEach((param)=>{
                    let [propProxyState] = param;
                    const propVersion = propProxyState[1](nextCheckVersion);
                    if (propVersion > version) {
                        version = propVersion;
                    }
                });
            }
            return version;
        };
        const createPropListener = (prop)=>(op, nextVersion)=>{
                const newOp = [
                    ...op
                ];
                newOp[1] = [
                    prop,
                    ...newOp[1]
                ];
                notifyUpdate(newOp, nextVersion);
            };
        const propProxyStates = /* @__PURE__ */ new Map();
        const addPropListener = (prop, propProxyState)=>{
            if ((__TURBOPACK__import$2e$meta__.env ? __TURBOPACK__import$2e$meta__.env.MODE : void 0) !== "production" && propProxyStates.has(prop)) {
                throw new Error("prop listener already exists");
            }
            if (listeners.size) {
                const remove = propProxyState[3](createPropListener(prop));
                propProxyStates.set(prop, [
                    propProxyState,
                    remove
                ]);
            } else {
                propProxyStates.set(prop, [
                    propProxyState
                ]);
            }
        };
        const removePropListener = (prop)=>{
            var _a;
            const entry = propProxyStates.get(prop);
            if (entry) {
                propProxyStates.delete(prop);
                (_a = entry[1]) == null ? void 0 : _a.call(entry);
            }
        };
        const addListener = (listener)=>{
            listeners.add(listener);
            if (listeners.size === 1) {
                propProxyStates.forEach((param, prop)=>{
                    let [propProxyState, prevRemove] = param;
                    if ((__TURBOPACK__import$2e$meta__.env ? __TURBOPACK__import$2e$meta__.env.MODE : void 0) !== "production" && prevRemove) {
                        throw new Error("remove already exists");
                    }
                    const remove = propProxyState[3](createPropListener(prop));
                    propProxyStates.set(prop, [
                        propProxyState,
                        remove
                    ]);
                });
            }
            const removeListener = ()=>{
                listeners.delete(listener);
                if (listeners.size === 0) {
                    propProxyStates.forEach((param, prop)=>{
                        let [propProxyState, remove] = param;
                        if (remove) {
                            remove();
                            propProxyStates.set(prop, [
                                propProxyState
                            ]);
                        }
                    });
                }
            };
            return removeListener;
        };
        const baseObject = Array.isArray(initialObject) ? [] : Object.create(Object.getPrototypeOf(initialObject));
        const handler = {
            deleteProperty (target, prop) {
                const prevValue = Reflect.get(target, prop);
                removePropListener(prop);
                const deleted = Reflect.deleteProperty(target, prop);
                if (deleted) {
                    notifyUpdate([
                        "delete",
                        [
                            prop
                        ],
                        prevValue
                    ]);
                }
                return deleted;
            },
            set (target, prop, value, receiver) {
                const hasPrevValue = Reflect.has(target, prop);
                const prevValue = Reflect.get(target, prop, receiver);
                if (hasPrevValue && (objectIs(prevValue, value) || proxyCache.has(value) && objectIs(prevValue, proxyCache.get(value)))) {
                    return true;
                }
                removePropListener(prop);
                if (isObject(value)) {
                    value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$proxy$2d$compare$2f$dist$2f$index$2e$modern$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUntracked"])(value) || value;
                }
                let nextValue = value;
                if (value instanceof Promise) {
                    value.then((v)=>{
                        value.status = "fulfilled";
                        value.value = v;
                        notifyUpdate([
                            "resolve",
                            [
                                prop
                            ],
                            v
                        ]);
                    }).catch((e)=>{
                        value.status = "rejected";
                        value.reason = e;
                        notifyUpdate([
                            "reject",
                            [
                                prop
                            ],
                            e
                        ]);
                    });
                } else {
                    if (!proxyStateMap.has(value) && canProxy(value)) {
                        nextValue = proxyFunction(value);
                    }
                    const childProxyState = !refSet.has(nextValue) && proxyStateMap.get(nextValue);
                    if (childProxyState) {
                        addPropListener(prop, childProxyState);
                    }
                }
                Reflect.set(target, prop, nextValue, receiver);
                notifyUpdate([
                    "set",
                    [
                        prop
                    ],
                    value,
                    prevValue
                ]);
                return true;
            }
        };
        const proxyObject = newProxy(baseObject, handler);
        proxyCache.set(initialObject, proxyObject);
        const proxyState = [
            baseObject,
            ensureVersion,
            createSnapshot,
            addListener
        ];
        proxyStateMap.set(proxyObject, proxyState);
        Reflect.ownKeys(initialObject).forEach((key)=>{
            const desc = Object.getOwnPropertyDescriptor(initialObject, key);
            if ("value" in desc) {
                proxyObject[key] = initialObject[key];
                delete desc.value;
                delete desc.writable;
            }
            Object.defineProperty(baseObject, key, desc);
        });
        return proxyObject;
    };
    return [
        // public functions
        proxyFunction,
        // shared state
        proxyStateMap,
        refSet,
        // internal things
        objectIs,
        newProxy,
        canProxy,
        defaultHandlePromise,
        snapCache,
        createSnapshot,
        proxyCache,
        versionHolder
    ];
};
const [defaultProxyFunction] = buildProxyFunction();
function proxy() {
    let initialObject = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return defaultProxyFunction(initialObject);
}
function getVersion(proxyObject) {
    const proxyState = proxyStateMap.get(proxyObject);
    return proxyState == null ? void 0 : proxyState[1]();
}
function subscribe(proxyObject, callback, notifyInSync) {
    const proxyState = proxyStateMap.get(proxyObject);
    if ((__TURBOPACK__import$2e$meta__.env ? __TURBOPACK__import$2e$meta__.env.MODE : void 0) !== "production" && !proxyState) {
        console.warn("Please use proxy object");
    }
    let promise;
    const ops = [];
    const addListener = proxyState[3];
    let isListenerActive = false;
    const listener = (op)=>{
        ops.push(op);
        if (notifyInSync) {
            callback(ops.splice(0));
            return;
        }
        if (!promise) {
            promise = Promise.resolve().then(()=>{
                promise = void 0;
                if (isListenerActive) {
                    callback(ops.splice(0));
                }
            });
        }
    };
    const removeListener = addListener(listener);
    isListenerActive = true;
    return ()=>{
        isListenerActive = false;
        removeListener();
    };
}
function snapshot(proxyObject, handlePromise) {
    const proxyState = proxyStateMap.get(proxyObject);
    if ((__TURBOPACK__import$2e$meta__.env ? __TURBOPACK__import$2e$meta__.env.MODE : void 0) !== "production" && !proxyState) {
        console.warn("Please use proxy object");
    }
    const [target, ensureVersion, createSnapshot] = proxyState;
    return createSnapshot(target, ensureVersion(), handlePromise);
}
function ref(obj) {
    refSet.add(obj);
    return obj;
}
const unstable_buildProxyFunction = buildProxyFunction;
;
}),
"[project]/frontend/node_modules/@reown/appkit-controllers/node_modules/valtio/esm/vanilla/utils.mjs [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addComputed",
    ()=>addComputed_DEPRECATED,
    "devtools",
    ()=>devtools,
    "proxyMap",
    ()=>proxyMap,
    "proxySet",
    ()=>proxySet,
    "proxyWithComputed",
    ()=>proxyWithComputed_DEPRECATED,
    "proxyWithHistory",
    ()=>proxyWithHistory_DEPRECATED,
    "subscribeKey",
    ()=>subscribeKey,
    "watch",
    ()=>watch
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@reown/appkit-controllers/node_modules/valtio/esm/vanilla.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$derive$2d$valtio$2f$dist$2f$index$2e$modern$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/derive-valtio/dist/index.modern.js [app-client] (ecmascript)");
const __TURBOPACK__import$2e$meta__ = {
    get url () {
        return `file://${__turbopack_context__.P("frontend/node_modules/@reown/appkit-controllers/node_modules/valtio/esm/vanilla/utils.mjs")}`;
    }
};
;
;
;
function subscribeKey(proxyObject, key, callback, notifyInSync) {
    let prevValue = proxyObject[key];
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subscribe"])(proxyObject, ()=>{
        const nextValue = proxyObject[key];
        if (!Object.is(prevValue, nextValue)) {
            callback(prevValue = nextValue);
        }
    }, notifyInSync);
}
let currentCleanups;
function watch(callback, options) {
    let alive = true;
    const cleanups = /* @__PURE__ */ new Set();
    const subscriptions = /* @__PURE__ */ new Map();
    const cleanup = ()=>{
        if (alive) {
            alive = false;
            cleanups.forEach((clean)=>clean());
            cleanups.clear();
            subscriptions.forEach((unsubscribe)=>unsubscribe());
            subscriptions.clear();
        }
    };
    const revalidate = async ()=>{
        if (!alive) {
            return;
        }
        cleanups.forEach((clean)=>clean());
        cleanups.clear();
        const proxiesToSubscribe = /* @__PURE__ */ new Set();
        const parent = currentCleanups;
        currentCleanups = cleanups;
        try {
            const promiseOrPossibleCleanup = callback((proxyObject)=>{
                proxiesToSubscribe.add(proxyObject);
                if (alive && !subscriptions.has(proxyObject)) {
                    const unsubscribe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subscribe"])(proxyObject, revalidate, options == null ? void 0 : options.sync);
                    subscriptions.set(proxyObject, unsubscribe);
                }
                return proxyObject;
            });
            const couldBeCleanup = promiseOrPossibleCleanup && promiseOrPossibleCleanup instanceof Promise ? await promiseOrPossibleCleanup : promiseOrPossibleCleanup;
            if (couldBeCleanup) {
                if (alive) {
                    cleanups.add(couldBeCleanup);
                } else {
                    cleanup();
                }
            }
        } finally{
            currentCleanups = parent;
        }
        subscriptions.forEach((unsubscribe, proxyObject)=>{
            if (!proxiesToSubscribe.has(proxyObject)) {
                subscriptions.delete(proxyObject);
                unsubscribe();
            }
        });
    };
    if (currentCleanups) {
        currentCleanups.add(cleanup);
    }
    revalidate();
    return cleanup;
}
const DEVTOOLS = Symbol();
function devtools(proxyObject, options) {
    if (typeof options === "string") {
        console.warn("string name option is deprecated, use { name }. https://github.com/pmndrs/valtio/pull/400");
        options = {
            name: options
        };
    }
    const { enabled, name = "", ...rest } = options || {};
    let extension;
    try {
        extension = (enabled != null ? enabled : (__TURBOPACK__import$2e$meta__.env ? __TURBOPACK__import$2e$meta__.env.MODE : void 0) !== "production") && window.__REDUX_DEVTOOLS_EXTENSION__;
    } catch (e) {}
    if (!extension) {
        if ((__TURBOPACK__import$2e$meta__.env ? __TURBOPACK__import$2e$meta__.env.MODE : void 0) !== "production" && enabled) {
            console.warn("[Warning] Please install/enable Redux devtools extension");
        }
        return;
    }
    let isTimeTraveling = false;
    const devtools2 = extension.connect({
        name,
        ...rest
    });
    const unsub1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subscribe"])(proxyObject, (ops)=>{
        const action = ops.filter((param)=>{
            let [_, path] = param;
            return path[0] !== DEVTOOLS;
        }).map((param)=>{
            let [op, path] = param;
            return "".concat(op, ":").concat(path.map(String).join("."));
        }).join(", ");
        if (!action) {
            return;
        }
        if (isTimeTraveling) {
            isTimeTraveling = false;
        } else {
            const snapWithoutDevtools = Object.assign({}, (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["snapshot"])(proxyObject));
            delete snapWithoutDevtools[DEVTOOLS];
            devtools2.send({
                type: action,
                updatedAt: /* @__PURE__ */ new Date().toLocaleString()
            }, snapWithoutDevtools);
        }
    });
    const unsub2 = devtools2.subscribe((message)=>{
        var _a, _b, _c, _d, _e, _f;
        if (message.type === "ACTION" && message.payload) {
            try {
                Object.assign(proxyObject, JSON.parse(message.payload));
            } catch (e) {
                console.error("please dispatch a serializable value that JSON.parse() and proxy() support\n", e);
            }
        }
        if (message.type === "DISPATCH" && message.state) {
            if (((_a = message.payload) == null ? void 0 : _a.type) === "JUMP_TO_ACTION" || ((_b = message.payload) == null ? void 0 : _b.type) === "JUMP_TO_STATE") {
                isTimeTraveling = true;
                const state = JSON.parse(message.state);
                Object.assign(proxyObject, state);
            }
            proxyObject[DEVTOOLS] = message;
        } else if (message.type === "DISPATCH" && ((_c = message.payload) == null ? void 0 : _c.type) === "COMMIT") {
            devtools2.init((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["snapshot"])(proxyObject));
        } else if (message.type === "DISPATCH" && ((_d = message.payload) == null ? void 0 : _d.type) === "IMPORT_STATE") {
            const actions = (_e = message.payload.nextLiftedState) == null ? void 0 : _e.actionsById;
            const computedStates = ((_f = message.payload.nextLiftedState) == null ? void 0 : _f.computedStates) || [];
            isTimeTraveling = true;
            computedStates.forEach((param, index)=>{
                let { state } = param;
                const action = actions[index] || "No action found";
                Object.assign(proxyObject, state);
                if (index === 0) {
                    devtools2.init((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["snapshot"])(proxyObject));
                } else {
                    devtools2.send(action, (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["snapshot"])(proxyObject));
                }
            });
        }
    });
    devtools2.init((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["snapshot"])(proxyObject));
    return ()=>{
        unsub1();
        unsub2 == null ? void 0 : unsub2();
    };
}
function addComputed_DEPRECATED(proxyObject, computedFns_FAKE) {
    let targetObject = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : proxyObject;
    if ((__TURBOPACK__import$2e$meta__.env ? __TURBOPACK__import$2e$meta__.env.MODE : void 0) !== "production") {
        console.warn("addComputed is deprecated. Please consider using `derive`. Falling back to emulation with derive. https://github.com/pmndrs/valtio/pull/201");
    }
    const derivedFns = {};
    Object.keys(computedFns_FAKE).forEach((key)=>{
        derivedFns[key] = (get)=>computedFns_FAKE[key](get(proxyObject));
    });
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$derive$2d$valtio$2f$dist$2f$index$2e$modern$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["derive"])(derivedFns, {
        proxy: targetObject
    });
}
function proxyWithComputed_DEPRECATED(initialObject, computedFns) {
    if ((__TURBOPACK__import$2e$meta__.env ? __TURBOPACK__import$2e$meta__.env.MODE : void 0) !== "production") {
        console.warn('proxyWithComputed is deprecated. Please follow "Computed Properties" guide in docs.');
    }
    Object.keys(computedFns).forEach((key)=>{
        if (Object.getOwnPropertyDescriptor(initialObject, key)) {
            throw new Error("object property already defined");
        }
        const computedFn = computedFns[key];
        const { get, set } = typeof computedFn === "function" ? {
            get: computedFn
        } : computedFn;
        const desc = {};
        desc.get = ()=>get((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["snapshot"])(proxyObject));
        if (set) {
            desc.set = (newValue)=>set(proxyObject, newValue);
        }
        Object.defineProperty(initialObject, key, desc);
    });
    const proxyObject = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["proxy"])(initialObject);
    return proxyObject;
}
const isObject = (x)=>typeof x === "object" && x !== null;
let refSet;
const deepClone = (obj)=>{
    if (!refSet) {
        refSet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unstable_buildProxyFunction"])()[2];
    }
    if (!isObject(obj) || refSet.has(obj)) {
        return obj;
    }
    const baseObject = Array.isArray(obj) ? [] : Object.create(Object.getPrototypeOf(obj));
    Reflect.ownKeys(obj).forEach((key)=>{
        baseObject[key] = deepClone(obj[key]);
    });
    return baseObject;
};
function proxyWithHistory_DEPRECATED(initialValue) {
    let skipSubscribe = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    if ((__TURBOPACK__import$2e$meta__.env ? __TURBOPACK__import$2e$meta__.env.MODE : void 0) !== "production") {
        console.warn('proxyWithHistory is deprecated. Please use the "valtio-history" package; refer to the docs');
    }
    const proxyObject = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["proxy"])({
        value: initialValue,
        history: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ref"])({
            wip: void 0,
            // to avoid infinite loop
            snapshots: [],
            index: -1
        }),
        clone: deepClone,
        canUndo: ()=>proxyObject.history.index > 0,
        undo: ()=>{
            if (proxyObject.canUndo()) {
                proxyObject.value = proxyObject.history.wip = proxyObject.clone(proxyObject.history.snapshots[--proxyObject.history.index]);
            }
        },
        canRedo: ()=>proxyObject.history.index < proxyObject.history.snapshots.length - 1,
        redo: ()=>{
            if (proxyObject.canRedo()) {
                proxyObject.value = proxyObject.history.wip = proxyObject.clone(proxyObject.history.snapshots[++proxyObject.history.index]);
            }
        },
        saveHistory: ()=>{
            proxyObject.history.snapshots.splice(proxyObject.history.index + 1);
            proxyObject.history.snapshots.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["snapshot"])(proxyObject).value);
            ++proxyObject.history.index;
        },
        subscribe: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subscribe"])(proxyObject, (ops)=>{
                if (ops.every((op)=>op[1][0] === "value" && (op[0] !== "set" || op[2] !== proxyObject.history.wip))) {
                    proxyObject.saveHistory();
                }
            })
    });
    proxyObject.saveHistory();
    if (!skipSubscribe) {
        proxyObject.subscribe();
    }
    return proxyObject;
}
function proxySet(initialValues) {
    const set = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["proxy"])({
        data: Array.from(new Set(initialValues)),
        has (value) {
            return this.data.indexOf(value) !== -1;
        },
        add (value) {
            let hasProxy = false;
            if (typeof value === "object" && value !== null) {
                hasProxy = this.data.indexOf((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["proxy"])(value)) !== -1;
            }
            if (this.data.indexOf(value) === -1 && !hasProxy) {
                this.data.push(value);
            }
            return this;
        },
        delete (value) {
            const index = this.data.indexOf(value);
            if (index === -1) {
                return false;
            }
            this.data.splice(index, 1);
            return true;
        },
        clear () {
            this.data.splice(0);
        },
        get size () {
            return this.data.length;
        },
        forEach (cb) {
            this.data.forEach((value)=>{
                cb(value, value, this);
            });
        },
        get [Symbol.toStringTag] () {
            return "Set";
        },
        toJSON () {
            return new Set(this.data);
        },
        [Symbol.iterator] () {
            return this.data[Symbol.iterator]();
        },
        values () {
            return this.data.values();
        },
        keys () {
            return this.data.values();
        },
        entries () {
            return new Set(this.data).entries();
        }
    });
    Object.defineProperties(set, {
        data: {
            enumerable: false
        },
        size: {
            enumerable: false
        },
        toJSON: {
            enumerable: false
        }
    });
    Object.seal(set);
    return set;
}
function proxyMap(entries) {
    const map = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["proxy"])({
        data: Array.from(entries || []),
        has (key) {
            return this.data.some((p)=>p[0] === key);
        },
        set (key, value) {
            const record = this.data.find((p)=>p[0] === key);
            if (record) {
                record[1] = value;
            } else {
                this.data.push([
                    key,
                    value
                ]);
            }
            return this;
        },
        get (key) {
            var _a;
            return (_a = this.data.find((p)=>p[0] === key)) == null ? void 0 : _a[1];
        },
        delete (key) {
            const index = this.data.findIndex((p)=>p[0] === key);
            if (index === -1) {
                return false;
            }
            this.data.splice(index, 1);
            return true;
        },
        clear () {
            this.data.splice(0);
        },
        get size () {
            return this.data.length;
        },
        toJSON () {
            return new Map(this.data);
        },
        forEach (cb) {
            this.data.forEach((p)=>{
                cb(p[1], p[0], this);
            });
        },
        keys () {
            return this.data.map((p)=>p[0]).values();
        },
        values () {
            return this.data.map((p)=>p[1]).values();
        },
        entries () {
            return new Map(this.data).entries();
        },
        get [Symbol.toStringTag] () {
            return "Map";
        },
        [Symbol.iterator] () {
            return this.entries();
        }
    });
    Object.defineProperties(map, {
        data: {
            enumerable: false
        },
        size: {
            enumerable: false
        },
        toJSON: {
            enumerable: false
        }
    });
    Object.seal(map);
    return map;
}
;
}),
"[project]/frontend/node_modules/@reown/appkit-utils/node_modules/valtio/esm/vanilla.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getVersion",
    ()=>getVersion,
    "proxy",
    ()=>proxy,
    "ref",
    ()=>ref,
    "snapshot",
    ()=>snapshot,
    "subscribe",
    ()=>subscribe,
    "unstable_buildProxyFunction",
    ()=>unstable_buildProxyFunction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$node_modules$2f$proxy$2d$compare$2f$dist$2f$index$2e$modern$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@reown/appkit-utils/node_modules/proxy-compare/dist/index.modern.js [app-client] (ecmascript)");
const __TURBOPACK__import$2e$meta__ = {
    get url () {
        return `file://${__turbopack_context__.P("frontend/node_modules/@reown/appkit-utils/node_modules/valtio/esm/vanilla.mjs")}`;
    }
};
;
const isObject = (x)=>typeof x === "object" && x !== null;
const proxyStateMap = /* @__PURE__ */ new WeakMap();
const refSet = /* @__PURE__ */ new WeakSet();
const buildProxyFunction = function() {
    let objectIs = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Object.is, newProxy = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : (target, handler)=>new Proxy(target, handler), canProxy = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : (x)=>isObject(x) && !refSet.has(x) && (Array.isArray(x) || !(Symbol.iterator in x)) && !(x instanceof WeakMap) && !(x instanceof WeakSet) && !(x instanceof Error) && !(x instanceof Number) && !(x instanceof Date) && !(x instanceof String) && !(x instanceof RegExp) && !(x instanceof ArrayBuffer), defaultHandlePromise = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : (promise)=>{
        switch(promise.status){
            case "fulfilled":
                return promise.value;
            case "rejected":
                throw promise.reason;
            default:
                throw promise;
        }
    }, snapCache = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : /* @__PURE__ */ new WeakMap(), createSnapshot = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : function(target, version) {
        let handlePromise = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : defaultHandlePromise;
        const cache = snapCache.get(target);
        if ((cache == null ? void 0 : cache[0]) === version) {
            return cache[1];
        }
        const snap = Array.isArray(target) ? [] : Object.create(Object.getPrototypeOf(target));
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$node_modules$2f$proxy$2d$compare$2f$dist$2f$index$2e$modern$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["markToTrack"])(snap, true);
        snapCache.set(target, [
            version,
            snap
        ]);
        Reflect.ownKeys(target).forEach((key)=>{
            if (Object.getOwnPropertyDescriptor(snap, key)) {
                return;
            }
            const value = Reflect.get(target, key);
            const { enumerable } = Reflect.getOwnPropertyDescriptor(target, key);
            const desc = {
                value,
                enumerable,
                // This is intentional to avoid copying with proxy-compare.
                // It's still non-writable, so it avoids assigning a value.
                configurable: true
            };
            if (refSet.has(value)) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$node_modules$2f$proxy$2d$compare$2f$dist$2f$index$2e$modern$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["markToTrack"])(value, false);
            } else if (value instanceof Promise) {
                delete desc.value;
                desc.get = ()=>handlePromise(value);
            } else if (proxyStateMap.has(value)) {
                const [target2, ensureVersion] = proxyStateMap.get(value);
                desc.value = createSnapshot(target2, ensureVersion(), handlePromise);
            }
            Object.defineProperty(snap, key, desc);
        });
        return Object.preventExtensions(snap);
    }, proxyCache = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : /* @__PURE__ */ new WeakMap(), versionHolder = arguments.length > 7 && arguments[7] !== void 0 ? arguments[7] : [
        1,
        1
    ], proxyFunction = arguments.length > 8 && arguments[8] !== void 0 ? arguments[8] : (initialObject)=>{
        if (!isObject(initialObject)) {
            throw new Error("object required");
        }
        const found = proxyCache.get(initialObject);
        if (found) {
            return found;
        }
        let version = versionHolder[0];
        const listeners = /* @__PURE__ */ new Set();
        const notifyUpdate = function(op) {
            let nextVersion = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ++versionHolder[0];
            if (version !== nextVersion) {
                version = nextVersion;
                listeners.forEach((listener)=>listener(op, nextVersion));
            }
        };
        let checkVersion = versionHolder[1];
        const ensureVersion = function() {
            let nextCheckVersion = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ++versionHolder[1];
            if (checkVersion !== nextCheckVersion && !listeners.size) {
                checkVersion = nextCheckVersion;
                propProxyStates.forEach((param)=>{
                    let [propProxyState] = param;
                    const propVersion = propProxyState[1](nextCheckVersion);
                    if (propVersion > version) {
                        version = propVersion;
                    }
                });
            }
            return version;
        };
        const createPropListener = (prop)=>(op, nextVersion)=>{
                const newOp = [
                    ...op
                ];
                newOp[1] = [
                    prop,
                    ...newOp[1]
                ];
                notifyUpdate(newOp, nextVersion);
            };
        const propProxyStates = /* @__PURE__ */ new Map();
        const addPropListener = (prop, propProxyState)=>{
            if ((__TURBOPACK__import$2e$meta__.env ? __TURBOPACK__import$2e$meta__.env.MODE : void 0) !== "production" && propProxyStates.has(prop)) {
                throw new Error("prop listener already exists");
            }
            if (listeners.size) {
                const remove = propProxyState[3](createPropListener(prop));
                propProxyStates.set(prop, [
                    propProxyState,
                    remove
                ]);
            } else {
                propProxyStates.set(prop, [
                    propProxyState
                ]);
            }
        };
        const removePropListener = (prop)=>{
            var _a;
            const entry = propProxyStates.get(prop);
            if (entry) {
                propProxyStates.delete(prop);
                (_a = entry[1]) == null ? void 0 : _a.call(entry);
            }
        };
        const addListener = (listener)=>{
            listeners.add(listener);
            if (listeners.size === 1) {
                propProxyStates.forEach((param, prop)=>{
                    let [propProxyState, prevRemove] = param;
                    if ((__TURBOPACK__import$2e$meta__.env ? __TURBOPACK__import$2e$meta__.env.MODE : void 0) !== "production" && prevRemove) {
                        throw new Error("remove already exists");
                    }
                    const remove = propProxyState[3](createPropListener(prop));
                    propProxyStates.set(prop, [
                        propProxyState,
                        remove
                    ]);
                });
            }
            const removeListener = ()=>{
                listeners.delete(listener);
                if (listeners.size === 0) {
                    propProxyStates.forEach((param, prop)=>{
                        let [propProxyState, remove] = param;
                        if (remove) {
                            remove();
                            propProxyStates.set(prop, [
                                propProxyState
                            ]);
                        }
                    });
                }
            };
            return removeListener;
        };
        const baseObject = Array.isArray(initialObject) ? [] : Object.create(Object.getPrototypeOf(initialObject));
        const handler = {
            deleteProperty (target, prop) {
                const prevValue = Reflect.get(target, prop);
                removePropListener(prop);
                const deleted = Reflect.deleteProperty(target, prop);
                if (deleted) {
                    notifyUpdate([
                        "delete",
                        [
                            prop
                        ],
                        prevValue
                    ]);
                }
                return deleted;
            },
            set (target, prop, value, receiver) {
                const hasPrevValue = Reflect.has(target, prop);
                const prevValue = Reflect.get(target, prop, receiver);
                if (hasPrevValue && (objectIs(prevValue, value) || proxyCache.has(value) && objectIs(prevValue, proxyCache.get(value)))) {
                    return true;
                }
                removePropListener(prop);
                if (isObject(value)) {
                    value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$node_modules$2f$proxy$2d$compare$2f$dist$2f$index$2e$modern$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUntracked"])(value) || value;
                }
                let nextValue = value;
                if (value instanceof Promise) {
                    value.then((v)=>{
                        value.status = "fulfilled";
                        value.value = v;
                        notifyUpdate([
                            "resolve",
                            [
                                prop
                            ],
                            v
                        ]);
                    }).catch((e)=>{
                        value.status = "rejected";
                        value.reason = e;
                        notifyUpdate([
                            "reject",
                            [
                                prop
                            ],
                            e
                        ]);
                    });
                } else {
                    if (!proxyStateMap.has(value) && canProxy(value)) {
                        nextValue = proxyFunction(value);
                    }
                    const childProxyState = !refSet.has(nextValue) && proxyStateMap.get(nextValue);
                    if (childProxyState) {
                        addPropListener(prop, childProxyState);
                    }
                }
                Reflect.set(target, prop, nextValue, receiver);
                notifyUpdate([
                    "set",
                    [
                        prop
                    ],
                    value,
                    prevValue
                ]);
                return true;
            }
        };
        const proxyObject = newProxy(baseObject, handler);
        proxyCache.set(initialObject, proxyObject);
        const proxyState = [
            baseObject,
            ensureVersion,
            createSnapshot,
            addListener
        ];
        proxyStateMap.set(proxyObject, proxyState);
        Reflect.ownKeys(initialObject).forEach((key)=>{
            const desc = Object.getOwnPropertyDescriptor(initialObject, key);
            if ("value" in desc) {
                proxyObject[key] = initialObject[key];
                delete desc.value;
                delete desc.writable;
            }
            Object.defineProperty(baseObject, key, desc);
        });
        return proxyObject;
    };
    return [
        // public functions
        proxyFunction,
        // shared state
        proxyStateMap,
        refSet,
        // internal things
        objectIs,
        newProxy,
        canProxy,
        defaultHandlePromise,
        snapCache,
        createSnapshot,
        proxyCache,
        versionHolder
    ];
};
const [defaultProxyFunction] = buildProxyFunction();
function proxy() {
    let initialObject = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return defaultProxyFunction(initialObject);
}
function getVersion(proxyObject) {
    const proxyState = proxyStateMap.get(proxyObject);
    return proxyState == null ? void 0 : proxyState[1]();
}
function subscribe(proxyObject, callback, notifyInSync) {
    const proxyState = proxyStateMap.get(proxyObject);
    if ((__TURBOPACK__import$2e$meta__.env ? __TURBOPACK__import$2e$meta__.env.MODE : void 0) !== "production" && !proxyState) {
        console.warn("Please use proxy object");
    }
    let promise;
    const ops = [];
    const addListener = proxyState[3];
    let isListenerActive = false;
    const listener = (op)=>{
        ops.push(op);
        if (notifyInSync) {
            callback(ops.splice(0));
            return;
        }
        if (!promise) {
            promise = Promise.resolve().then(()=>{
                promise = void 0;
                if (isListenerActive) {
                    callback(ops.splice(0));
                }
            });
        }
    };
    const removeListener = addListener(listener);
    isListenerActive = true;
    return ()=>{
        isListenerActive = false;
        removeListener();
    };
}
function snapshot(proxyObject, handlePromise) {
    const proxyState = proxyStateMap.get(proxyObject);
    if ((__TURBOPACK__import$2e$meta__.env ? __TURBOPACK__import$2e$meta__.env.MODE : void 0) !== "production" && !proxyState) {
        console.warn("Please use proxy object");
    }
    const [target, ensureVersion, createSnapshot] = proxyState;
    return createSnapshot(target, ensureVersion(), handlePromise);
}
function ref(obj) {
    refSet.add(obj);
    return obj;
}
const unstable_buildProxyFunction = buildProxyFunction;
;
}),
"[project]/frontend/node_modules/@reown/appkit-utils/node_modules/valtio/esm/vanilla/utils.mjs [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addComputed",
    ()=>addComputed_DEPRECATED,
    "devtools",
    ()=>devtools,
    "proxyMap",
    ()=>proxyMap,
    "proxySet",
    ()=>proxySet,
    "proxyWithComputed",
    ()=>proxyWithComputed_DEPRECATED,
    "proxyWithHistory",
    ()=>proxyWithHistory_DEPRECATED,
    "subscribeKey",
    ()=>subscribeKey,
    "watch",
    ()=>watch
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@reown/appkit-utils/node_modules/valtio/esm/vanilla.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$derive$2d$valtio$2f$dist$2f$index$2e$modern$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/derive-valtio/dist/index.modern.js [app-client] (ecmascript)");
const __TURBOPACK__import$2e$meta__ = {
    get url () {
        return `file://${__turbopack_context__.P("frontend/node_modules/@reown/appkit-utils/node_modules/valtio/esm/vanilla/utils.mjs")}`;
    }
};
;
;
;
function subscribeKey(proxyObject, key, callback, notifyInSync) {
    let prevValue = proxyObject[key];
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subscribe"])(proxyObject, ()=>{
        const nextValue = proxyObject[key];
        if (!Object.is(prevValue, nextValue)) {
            callback(prevValue = nextValue);
        }
    }, notifyInSync);
}
let currentCleanups;
function watch(callback, options) {
    let alive = true;
    const cleanups = /* @__PURE__ */ new Set();
    const subscriptions = /* @__PURE__ */ new Map();
    const cleanup = ()=>{
        if (alive) {
            alive = false;
            cleanups.forEach((clean)=>clean());
            cleanups.clear();
            subscriptions.forEach((unsubscribe)=>unsubscribe());
            subscriptions.clear();
        }
    };
    const revalidate = async ()=>{
        if (!alive) {
            return;
        }
        cleanups.forEach((clean)=>clean());
        cleanups.clear();
        const proxiesToSubscribe = /* @__PURE__ */ new Set();
        const parent = currentCleanups;
        currentCleanups = cleanups;
        try {
            const promiseOrPossibleCleanup = callback((proxyObject)=>{
                proxiesToSubscribe.add(proxyObject);
                if (alive && !subscriptions.has(proxyObject)) {
                    const unsubscribe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subscribe"])(proxyObject, revalidate, options == null ? void 0 : options.sync);
                    subscriptions.set(proxyObject, unsubscribe);
                }
                return proxyObject;
            });
            const couldBeCleanup = promiseOrPossibleCleanup && promiseOrPossibleCleanup instanceof Promise ? await promiseOrPossibleCleanup : promiseOrPossibleCleanup;
            if (couldBeCleanup) {
                if (alive) {
                    cleanups.add(couldBeCleanup);
                } else {
                    cleanup();
                }
            }
        } finally{
            currentCleanups = parent;
        }
        subscriptions.forEach((unsubscribe, proxyObject)=>{
            if (!proxiesToSubscribe.has(proxyObject)) {
                subscriptions.delete(proxyObject);
                unsubscribe();
            }
        });
    };
    if (currentCleanups) {
        currentCleanups.add(cleanup);
    }
    revalidate();
    return cleanup;
}
const DEVTOOLS = Symbol();
function devtools(proxyObject, options) {
    if (typeof options === "string") {
        console.warn("string name option is deprecated, use { name }. https://github.com/pmndrs/valtio/pull/400");
        options = {
            name: options
        };
    }
    const { enabled, name = "", ...rest } = options || {};
    let extension;
    try {
        extension = (enabled != null ? enabled : (__TURBOPACK__import$2e$meta__.env ? __TURBOPACK__import$2e$meta__.env.MODE : void 0) !== "production") && window.__REDUX_DEVTOOLS_EXTENSION__;
    } catch (e) {}
    if (!extension) {
        if ((__TURBOPACK__import$2e$meta__.env ? __TURBOPACK__import$2e$meta__.env.MODE : void 0) !== "production" && enabled) {
            console.warn("[Warning] Please install/enable Redux devtools extension");
        }
        return;
    }
    let isTimeTraveling = false;
    const devtools2 = extension.connect({
        name,
        ...rest
    });
    const unsub1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subscribe"])(proxyObject, (ops)=>{
        const action = ops.filter((param)=>{
            let [_, path] = param;
            return path[0] !== DEVTOOLS;
        }).map((param)=>{
            let [op, path] = param;
            return "".concat(op, ":").concat(path.map(String).join("."));
        }).join(", ");
        if (!action) {
            return;
        }
        if (isTimeTraveling) {
            isTimeTraveling = false;
        } else {
            const snapWithoutDevtools = Object.assign({}, (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["snapshot"])(proxyObject));
            delete snapWithoutDevtools[DEVTOOLS];
            devtools2.send({
                type: action,
                updatedAt: /* @__PURE__ */ new Date().toLocaleString()
            }, snapWithoutDevtools);
        }
    });
    const unsub2 = devtools2.subscribe((message)=>{
        var _a, _b, _c, _d, _e, _f;
        if (message.type === "ACTION" && message.payload) {
            try {
                Object.assign(proxyObject, JSON.parse(message.payload));
            } catch (e) {
                console.error("please dispatch a serializable value that JSON.parse() and proxy() support\n", e);
            }
        }
        if (message.type === "DISPATCH" && message.state) {
            if (((_a = message.payload) == null ? void 0 : _a.type) === "JUMP_TO_ACTION" || ((_b = message.payload) == null ? void 0 : _b.type) === "JUMP_TO_STATE") {
                isTimeTraveling = true;
                const state = JSON.parse(message.state);
                Object.assign(proxyObject, state);
            }
            proxyObject[DEVTOOLS] = message;
        } else if (message.type === "DISPATCH" && ((_c = message.payload) == null ? void 0 : _c.type) === "COMMIT") {
            devtools2.init((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["snapshot"])(proxyObject));
        } else if (message.type === "DISPATCH" && ((_d = message.payload) == null ? void 0 : _d.type) === "IMPORT_STATE") {
            const actions = (_e = message.payload.nextLiftedState) == null ? void 0 : _e.actionsById;
            const computedStates = ((_f = message.payload.nextLiftedState) == null ? void 0 : _f.computedStates) || [];
            isTimeTraveling = true;
            computedStates.forEach((param, index)=>{
                let { state } = param;
                const action = actions[index] || "No action found";
                Object.assign(proxyObject, state);
                if (index === 0) {
                    devtools2.init((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["snapshot"])(proxyObject));
                } else {
                    devtools2.send(action, (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["snapshot"])(proxyObject));
                }
            });
        }
    });
    devtools2.init((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["snapshot"])(proxyObject));
    return ()=>{
        unsub1();
        unsub2 == null ? void 0 : unsub2();
    };
}
function addComputed_DEPRECATED(proxyObject, computedFns_FAKE) {
    let targetObject = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : proxyObject;
    if ((__TURBOPACK__import$2e$meta__.env ? __TURBOPACK__import$2e$meta__.env.MODE : void 0) !== "production") {
        console.warn("addComputed is deprecated. Please consider using `derive`. Falling back to emulation with derive. https://github.com/pmndrs/valtio/pull/201");
    }
    const derivedFns = {};
    Object.keys(computedFns_FAKE).forEach((key)=>{
        derivedFns[key] = (get)=>computedFns_FAKE[key](get(proxyObject));
    });
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$derive$2d$valtio$2f$dist$2f$index$2e$modern$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["derive"])(derivedFns, {
        proxy: targetObject
    });
}
function proxyWithComputed_DEPRECATED(initialObject, computedFns) {
    if ((__TURBOPACK__import$2e$meta__.env ? __TURBOPACK__import$2e$meta__.env.MODE : void 0) !== "production") {
        console.warn('proxyWithComputed is deprecated. Please follow "Computed Properties" guide in docs.');
    }
    Object.keys(computedFns).forEach((key)=>{
        if (Object.getOwnPropertyDescriptor(initialObject, key)) {
            throw new Error("object property already defined");
        }
        const computedFn = computedFns[key];
        const { get, set } = typeof computedFn === "function" ? {
            get: computedFn
        } : computedFn;
        const desc = {};
        desc.get = ()=>get((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["snapshot"])(proxyObject));
        if (set) {
            desc.set = (newValue)=>set(proxyObject, newValue);
        }
        Object.defineProperty(initialObject, key, desc);
    });
    const proxyObject = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["proxy"])(initialObject);
    return proxyObject;
}
const isObject = (x)=>typeof x === "object" && x !== null;
let refSet;
const deepClone = (obj)=>{
    if (!refSet) {
        refSet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unstable_buildProxyFunction"])()[2];
    }
    if (!isObject(obj) || refSet.has(obj)) {
        return obj;
    }
    const baseObject = Array.isArray(obj) ? [] : Object.create(Object.getPrototypeOf(obj));
    Reflect.ownKeys(obj).forEach((key)=>{
        baseObject[key] = deepClone(obj[key]);
    });
    return baseObject;
};
function proxyWithHistory_DEPRECATED(initialValue) {
    let skipSubscribe = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    if ((__TURBOPACK__import$2e$meta__.env ? __TURBOPACK__import$2e$meta__.env.MODE : void 0) !== "production") {
        console.warn('proxyWithHistory is deprecated. Please use the "valtio-history" package; refer to the docs');
    }
    const proxyObject = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["proxy"])({
        value: initialValue,
        history: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ref"])({
            wip: void 0,
            // to avoid infinite loop
            snapshots: [],
            index: -1
        }),
        clone: deepClone,
        canUndo: ()=>proxyObject.history.index > 0,
        undo: ()=>{
            if (proxyObject.canUndo()) {
                proxyObject.value = proxyObject.history.wip = proxyObject.clone(proxyObject.history.snapshots[--proxyObject.history.index]);
            }
        },
        canRedo: ()=>proxyObject.history.index < proxyObject.history.snapshots.length - 1,
        redo: ()=>{
            if (proxyObject.canRedo()) {
                proxyObject.value = proxyObject.history.wip = proxyObject.clone(proxyObject.history.snapshots[++proxyObject.history.index]);
            }
        },
        saveHistory: ()=>{
            proxyObject.history.snapshots.splice(proxyObject.history.index + 1);
            proxyObject.history.snapshots.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["snapshot"])(proxyObject).value);
            ++proxyObject.history.index;
        },
        subscribe: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subscribe"])(proxyObject, (ops)=>{
                if (ops.every((op)=>op[1][0] === "value" && (op[0] !== "set" || op[2] !== proxyObject.history.wip))) {
                    proxyObject.saveHistory();
                }
            })
    });
    proxyObject.saveHistory();
    if (!skipSubscribe) {
        proxyObject.subscribe();
    }
    return proxyObject;
}
function proxySet(initialValues) {
    const set = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["proxy"])({
        data: Array.from(new Set(initialValues)),
        has (value) {
            return this.data.indexOf(value) !== -1;
        },
        add (value) {
            let hasProxy = false;
            if (typeof value === "object" && value !== null) {
                hasProxy = this.data.indexOf((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["proxy"])(value)) !== -1;
            }
            if (this.data.indexOf(value) === -1 && !hasProxy) {
                this.data.push(value);
            }
            return this;
        },
        delete (value) {
            const index = this.data.indexOf(value);
            if (index === -1) {
                return false;
            }
            this.data.splice(index, 1);
            return true;
        },
        clear () {
            this.data.splice(0);
        },
        get size () {
            return this.data.length;
        },
        forEach (cb) {
            this.data.forEach((value)=>{
                cb(value, value, this);
            });
        },
        get [Symbol.toStringTag] () {
            return "Set";
        },
        toJSON () {
            return new Set(this.data);
        },
        [Symbol.iterator] () {
            return this.data[Symbol.iterator]();
        },
        values () {
            return this.data.values();
        },
        keys () {
            return this.data.values();
        },
        entries () {
            return new Set(this.data).entries();
        }
    });
    Object.defineProperties(set, {
        data: {
            enumerable: false
        },
        size: {
            enumerable: false
        },
        toJSON: {
            enumerable: false
        }
    });
    Object.seal(set);
    return set;
}
function proxyMap(entries) {
    const map = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["proxy"])({
        data: Array.from(entries || []),
        has (key) {
            return this.data.some((p)=>p[0] === key);
        },
        set (key, value) {
            const record = this.data.find((p)=>p[0] === key);
            if (record) {
                record[1] = value;
            } else {
                this.data.push([
                    key,
                    value
                ]);
            }
            return this;
        },
        get (key) {
            var _a;
            return (_a = this.data.find((p)=>p[0] === key)) == null ? void 0 : _a[1];
        },
        delete (key) {
            const index = this.data.findIndex((p)=>p[0] === key);
            if (index === -1) {
                return false;
            }
            this.data.splice(index, 1);
            return true;
        },
        clear () {
            this.data.splice(0);
        },
        get size () {
            return this.data.length;
        },
        toJSON () {
            return new Map(this.data);
        },
        forEach (cb) {
            this.data.forEach((p)=>{
                cb(p[1], p[0], this);
            });
        },
        keys () {
            return this.data.map((p)=>p[0]).values();
        },
        values () {
            return this.data.map((p)=>p[1]).values();
        },
        entries () {
            return new Map(this.data).entries();
        },
        get [Symbol.toStringTag] () {
            return "Map";
        },
        [Symbol.iterator] () {
            return this.entries();
        }
    });
    Object.defineProperties(map, {
        data: {
            enumerable: false
        },
        size: {
            enumerable: false
        },
        toJSON: {
            enumerable: false
        }
    });
    Object.seal(map);
    return map;
}
;
}),
"[project]/frontend/node_modules/@reown/appkit-common/dist/esm/src/utils/ConstantsUtil.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ConstantsUtil",
    ()=>ConstantsUtil
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/frontend/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
const ConstantsUtil = {
    WC_NAME_SUFFIX: '.reown.id',
    WC_NAME_SUFFIX_LEGACY: '.wcn.id',
    BLOCKCHAIN_API_RPC_URL: 'https://rpc.walletconnect.org',
    PULSE_API_URL: 'https://pulse.walletconnect.org',
    W3M_API_URL: 'https://api.web3modal.org',
    CONNECTOR_ID: {
        WALLET_CONNECT: 'walletConnect',
        INJECTED: 'injected',
        WALLET_STANDARD: 'announced',
        COINBASE: 'coinbaseWallet',
        COINBASE_SDK: 'coinbaseWalletSDK',
        SAFE: 'safe',
        LEDGER: 'ledger',
        OKX: 'okx',
        EIP6963: 'eip6963',
        AUTH: 'ID_AUTH'
    },
    CONNECTOR_NAMES: {
        AUTH: 'Auth'
    },
    AUTH_CONNECTOR_SUPPORTED_CHAINS: [
        'eip155',
        'solana'
    ],
    LIMITS: {
        PENDING_TRANSACTIONS: 99
    },
    CHAIN: {
        EVM: 'eip155',
        SOLANA: 'solana',
        POLKADOT: 'polkadot',
        BITCOIN: 'bip122'
    },
    CHAIN_NAME_MAP: {
        eip155: 'EVM Networks',
        solana: 'Solana',
        polkadot: 'Polkadot',
        bip122: 'Bitcoin',
        cosmos: 'Cosmos'
    },
    ADAPTER_TYPES: {
        BITCOIN: 'bitcoin',
        SOLANA: 'solana',
        WAGMI: 'wagmi',
        ETHERS: 'ethers',
        ETHERS5: 'ethers5'
    },
    USDT_CONTRACT_ADDRESSES: [
        '0xdac17f958d2ee523a2206206994597c13d831ec7',
        '0xc2132d05d31c914a87c6611c10748aeb04b58e8f',
        '0x9702230a8ea53601f5cd2dc00fdbc13d4df4a8c7',
        '0x919C1c267BC06a7039e03fcc2eF738525769109c',
        '0x48065fbBE25f71C9282ddf5e1cD6D6A887483D5e',
        '0x55d398326f99059fF775485246999027B3197955',
        '0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9'
    ],
    HTTP_STATUS_CODES: {
        SERVICE_UNAVAILABLE: 503,
        FORBIDDEN: 403
    },
    UNSUPPORTED_NETWORK_NAME: 'Unknown Network',
    SECURE_SITE_SDK_ORIGIN: (typeof __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] !== 'undefined' && typeof __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env !== 'undefined' ? __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env['NEXT_PUBLIC_SECURE_SITE_ORIGIN'] : undefined) || 'https://secure.walletconnect.org'
}; //# sourceMappingURL=ConstantsUtil.js.map
}),
"[project]/frontend/node_modules/@reown/appkit-common/dist/esm/src/utils/SafeLocalStorage.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SafeLocalStorage",
    ()=>SafeLocalStorage,
    "SafeLocalStorageKeys",
    ()=>SafeLocalStorageKeys,
    "getSafeConnectorIdKey",
    ()=>getSafeConnectorIdKey,
    "isSafe",
    ()=>isSafe
]);
const SafeLocalStorageKeys = {
    WALLET_ID: '@appkit/wallet_id',
    WALLET_NAME: '@appkit/wallet_name',
    SOLANA_WALLET: '@appkit/solana_wallet',
    SOLANA_CAIP_CHAIN: '@appkit/solana_caip_chain',
    ACTIVE_CAIP_NETWORK_ID: '@appkit/active_caip_network_id',
    CONNECTED_SOCIAL: '@appkit/connected_social',
    CONNECTED_SOCIAL_USERNAME: '@appkit-wallet/SOCIAL_USERNAME',
    RECENT_WALLETS: '@appkit/recent_wallets',
    DEEPLINK_CHOICE: 'WALLETCONNECT_DEEPLINK_CHOICE',
    ACTIVE_NAMESPACE: '@appkit/active_namespace',
    CONNECTED_NAMESPACES: '@appkit/connected_namespaces',
    CONNECTION_STATUS: '@appkit/connection_status',
    SIWX_AUTH_TOKEN: '@appkit/siwx-auth-token',
    SIWX_NONCE_TOKEN: '@appkit/siwx-nonce-token',
    TELEGRAM_SOCIAL_PROVIDER: '@appkit/social_provider',
    NATIVE_BALANCE_CACHE: '@appkit/native_balance_cache',
    PORTFOLIO_CACHE: '@appkit/portfolio_cache',
    ENS_CACHE: '@appkit/ens_cache',
    IDENTITY_CACHE: '@appkit/identity_cache',
    PREFERRED_ACCOUNT_TYPES: '@appkit/preferred_account_types',
    CONNECTIONS: '@appkit/connections'
};
function getSafeConnectorIdKey(namespace) {
    if (!namespace) {
        throw new Error('Namespace is required for CONNECTED_CONNECTOR_ID');
    }
    return "@appkit/".concat(namespace, ":connected_connector_id");
}
const SafeLocalStorage = {
    setItem (key, value) {
        if (isSafe() && value !== undefined) {
            localStorage.setItem(key, value);
        }
    },
    getItem (key) {
        if (isSafe()) {
            return localStorage.getItem(key) || undefined;
        }
        return undefined;
    },
    removeItem (key) {
        if (isSafe()) {
            localStorage.removeItem(key);
        }
    },
    clear () {
        if (isSafe()) {
            localStorage.clear();
        }
    }
};
function isSafe() {
    return typeof window !== 'undefined' && typeof localStorage !== 'undefined';
} //# sourceMappingURL=SafeLocalStorage.js.map
}),
"[project]/frontend/node_modules/@reown/appkit-common/dist/esm/src/utils/NetworkUtil.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NetworkUtil",
    ()=>NetworkUtil
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@reown/appkit-common/dist/esm/src/utils/ConstantsUtil.js [app-client] (ecmascript)");
;
const NetworkUtil = {
    caipNetworkIdToNumber (caipnetworkId) {
        return caipnetworkId ? Number(caipnetworkId.split(':')[1]) : undefined;
    },
    parseEvmChainId (chainId) {
        return typeof chainId === 'string' ? this.caipNetworkIdToNumber(chainId) : chainId;
    },
    getNetworksByNamespace (networks, namespace) {
        return (networks === null || networks === void 0 ? void 0 : networks.filter((network)=>network.chainNamespace === namespace)) || [];
    },
    getFirstNetworkByNamespace (networks, namespace) {
        return this.getNetworksByNamespace(networks, namespace)[0];
    },
    getNetworkNameByCaipNetworkId (caipNetworks, caipNetworkId) {
        var _ConstantsUtil_CHAIN_NAME_MAP;
        if (!caipNetworkId) {
            return undefined;
        }
        const caipNetwork = caipNetworks.find((network)=>network.caipNetworkId === caipNetworkId);
        if (caipNetwork) {
            return caipNetwork.name;
        }
        const [namespace] = caipNetworkId.split(':');
        return ((_ConstantsUtil_CHAIN_NAME_MAP = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].CHAIN_NAME_MAP) === null || _ConstantsUtil_CHAIN_NAME_MAP === void 0 ? void 0 : _ConstantsUtil_CHAIN_NAME_MAP[namespace]) || undefined;
    }
}; //# sourceMappingURL=NetworkUtil.js.map
}),
"[project]/frontend/node_modules/@reown/appkit-common/dist/esm/src/utils/ThemeUtil.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getW3mThemeVariables",
    ()=>getW3mThemeVariables
]);
function getW3mThemeVariables(themeVariables, themeType) {
    if (themeType === 'light') {
        return {
            '--w3m-accent': (themeVariables === null || themeVariables === void 0 ? void 0 : themeVariables['--w3m-accent']) || 'hsla(231, 100%, 70%, 1)',
            '--w3m-background': '#fff'
        };
    }
    return {
        '--w3m-accent': (themeVariables === null || themeVariables === void 0 ? void 0 : themeVariables['--w3m-accent']) || 'hsla(230, 100%, 67%, 1)',
        '--w3m-background': '#121313'
    };
} //# sourceMappingURL=ThemeUtil.js.map
}),
"[project]/frontend/node_modules/@reown/appkit-common/dist/esm/src/utils/NumberUtil.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NumberUtil",
    ()=>NumberUtil
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$big$2e$js$2f$big$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/big.js/big.mjs [app-client] (ecmascript)");
;
const NumberUtil = {
    bigNumber (value) {
        if (!value) {
            return new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$big$2e$js$2f$big$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](0);
        }
        return new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$big$2e$js$2f$big$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](value);
    },
    multiply (a, b) {
        if (a === undefined || b === undefined) {
            return new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$big$2e$js$2f$big$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](0);
        }
        const aBigNumber = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$big$2e$js$2f$big$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](a);
        const bBigNumber = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$big$2e$js$2f$big$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](b);
        return aBigNumber.times(bBigNumber);
    },
    formatNumberToLocalString (value) {
        let decimals = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2;
        if (value === undefined) {
            return '0.00';
        }
        if (typeof value === 'number') {
            return value.toLocaleString('en-US', {
                maximumFractionDigits: decimals,
                minimumFractionDigits: decimals
            });
        }
        return parseFloat(value).toLocaleString('en-US', {
            maximumFractionDigits: decimals,
            minimumFractionDigits: decimals
        });
    },
    parseLocalStringToNumber (value) {
        if (value === undefined) {
            return 0;
        }
        return parseFloat(value.replace(/,/gu, ''));
    }
}; //# sourceMappingURL=NumberUtil.js.map
}),
"[project]/frontend/node_modules/@reown/appkit-common/dist/esm/src/contracts/erc20.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "erc20ABI",
    ()=>erc20ABI
]);
const erc20ABI = [
    {
        type: 'function',
        name: 'transfer',
        stateMutability: 'nonpayable',
        inputs: [
            {
                name: '_to',
                type: 'address'
            },
            {
                name: '_value',
                type: 'uint256'
            }
        ],
        outputs: [
            {
                name: '',
                type: 'bool'
            }
        ]
    },
    {
        type: 'function',
        name: 'transferFrom',
        stateMutability: 'nonpayable',
        inputs: [
            {
                name: '_from',
                type: 'address'
            },
            {
                name: '_to',
                type: 'address'
            },
            {
                name: '_value',
                type: 'uint256'
            }
        ],
        outputs: [
            {
                name: '',
                type: 'bool'
            }
        ]
    }
]; //# sourceMappingURL=erc20.js.map
}),
"[project]/frontend/node_modules/@reown/appkit-common/dist/esm/src/contracts/swap.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "swapABI",
    ()=>swapABI
]);
const swapABI = [
    {
        type: 'function',
        name: 'approve',
        stateMutability: 'nonpayable',
        inputs: [
            {
                name: 'spender',
                type: 'address'
            },
            {
                name: 'amount',
                type: 'uint256'
            }
        ],
        outputs: [
            {
                type: 'bool'
            }
        ]
    }
]; //# sourceMappingURL=swap.js.map
}),
"[project]/frontend/node_modules/@reown/appkit-common/dist/esm/src/contracts/usdt.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "usdtABI",
    ()=>usdtABI
]);
const usdtABI = [
    {
        type: 'function',
        name: 'transfer',
        stateMutability: 'nonpayable',
        inputs: [
            {
                name: 'recipient',
                type: 'address'
            },
            {
                name: 'amount',
                type: 'uint256'
            }
        ],
        outputs: []
    },
    {
        type: 'function',
        name: 'transferFrom',
        stateMutability: 'nonpayable',
        inputs: [
            {
                name: 'sender',
                type: 'address'
            },
            {
                name: 'recipient',
                type: 'address'
            },
            {
                name: 'amount',
                type: 'uint256'
            }
        ],
        outputs: [
            {
                name: '',
                type: 'bool'
            }
        ]
    }
]; //# sourceMappingURL=usdt.js.map
}),
"[project]/frontend/node_modules/@reown/appkit-common/dist/esm/src/utils/ContractUtil.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ContractUtil",
    ()=>ContractUtil
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$contracts$2f$erc20$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@reown/appkit-common/dist/esm/src/contracts/erc20.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$contracts$2f$swap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@reown/appkit-common/dist/esm/src/contracts/swap.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$contracts$2f$usdt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@reown/appkit-common/dist/esm/src/contracts/usdt.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@reown/appkit-common/dist/esm/src/utils/ConstantsUtil.js [app-client] (ecmascript)");
;
;
;
;
const ContractUtil = {
    getERC20Abi: (tokenAddress)=>{
        if (__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].USDT_CONTRACT_ADDRESSES.includes(tokenAddress)) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$contracts$2f$usdt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usdtABI"];
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$contracts$2f$erc20$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["erc20ABI"];
    },
    getSwapAbi: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$contracts$2f$swap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["swapABI"]
}; //# sourceMappingURL=ContractUtil.js.map
}),
"[project]/frontend/node_modules/@reown/appkit-common/dist/esm/src/utils/ParseUtil.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ParseUtil",
    ()=>ParseUtil
]);
const ParseUtil = {
    validateCaipAddress (address) {
        var _address_split;
        if (((_address_split = address.split(':')) === null || _address_split === void 0 ? void 0 : _address_split.length) !== 3) {
            throw new Error('Invalid CAIP Address');
        }
        return address;
    },
    parseCaipAddress (caipAddress) {
        const parts = caipAddress.split(':');
        if (parts.length !== 3) {
            throw new Error("Invalid CAIP-10 address: ".concat(caipAddress));
        }
        const [chainNamespace, chainId, address] = parts;
        if (!chainNamespace || !chainId || !address) {
            throw new Error("Invalid CAIP-10 address: ".concat(caipAddress));
        }
        return {
            chainNamespace: chainNamespace,
            chainId: chainId,
            address
        };
    },
    parseCaipNetworkId (caipNetworkId) {
        const parts = caipNetworkId.split(':');
        if (parts.length !== 2) {
            throw new Error("Invalid CAIP-2 network id: ".concat(caipNetworkId));
        }
        const [chainNamespace, chainId] = parts;
        if (!chainNamespace || !chainId) {
            throw new Error("Invalid CAIP-2 network id: ".concat(caipNetworkId));
        }
        return {
            chainNamespace: chainNamespace,
            chainId: chainId
        };
    }
}; //# sourceMappingURL=ParseUtil.js.map
}),
"[project]/frontend/node_modules/@reown/appkit-common/dist/esm/src/utils/DateUtil.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DateUtil",
    ()=>DateUtil
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$dayjs$2f$dayjs$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/dayjs/dayjs.min.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$dayjs$2f$locale$2f$en$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/dayjs/locale/en.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$dayjs$2f$plugin$2f$relativeTime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/dayjs/plugin/relativeTime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$dayjs$2f$plugin$2f$updateLocale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/dayjs/plugin/updateLocale.js [app-client] (ecmascript)");
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$dayjs$2f$dayjs$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].extend(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$dayjs$2f$plugin$2f$relativeTime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$dayjs$2f$dayjs$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].extend(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$dayjs$2f$plugin$2f$updateLocale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
const localeObject = {
    ...__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$dayjs$2f$locale$2f$en$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    name: 'en-web3-modal',
    relativeTime: {
        future: 'in %s',
        past: '%s ago',
        s: '%d sec',
        m: '1 min',
        mm: '%d min',
        h: '1 hr',
        hh: '%d hrs',
        d: '1 d',
        dd: '%d d',
        M: '1 mo',
        MM: '%d mo',
        y: '1 yr',
        yy: '%d yr'
    }
};
const MONTH_NAMES = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];
__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$dayjs$2f$dayjs$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].locale('en-web3-modal', localeObject);
const DateUtil = {
    getMonthNameByIndex (monthIndex) {
        return MONTH_NAMES[monthIndex];
    },
    getYear () {
        let date = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : new Date().toISOString();
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$dayjs$2f$dayjs$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(date).year();
    },
    getRelativeDateFromNow (date) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$dayjs$2f$dayjs$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(date).locale('en-web3-modal').fromNow(true);
    },
    formatDate (date) {
        let format = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 'DD MMM';
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$dayjs$2f$dayjs$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(date).format(format);
    }
}; //# sourceMappingURL=DateUtil.js.map
}),
"[project]/frontend/node_modules/derive-valtio/dist/index.modern.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "derive",
    ()=>f,
    "underive",
    ()=>u,
    "unstable_deriveSubscriptions",
    ()=>i
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/valtio/esm/vanilla.mjs [app-client] (ecmascript)");
;
const o = new WeakMap, r = new WeakMap, s = (e, t)=>{
    const n = o.get(e);
    n && (n[0].forEach((t)=>{
        const { d: n } = t;
        e !== n && s(n);
    }), ++n[2], t && n[3].add(t));
}, l = (e)=>{
    const t = o.get(e);
    t && (--t[2], t[2] || (t[3].forEach((e)=>e()), t[3].clear()), t[0].forEach((t)=>{
        const { d: n } = t;
        e !== n && l(n);
    }));
}, c = (e)=>{
    const { s: n, d: c } = e;
    let a = r.get(c);
    a || (a = [
        new Set
    ], r.set(e.d, a)), a[0].add(e);
    let d = o.get(n);
    if (!d) {
        const e = new Set, r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subscribe"])(n, (t)=>{
            e.forEach((e)=>{
                const { d: o, c: r, n: c, i: a } = e;
                n === o && t.every((e)=>1 === e[1].length && a.includes(e[1][0])) || e.p || (s(n, r), c ? l(n) : e.p = Promise.resolve().then(()=>{
                    delete e.p, l(n);
                }));
            });
        }, !0);
        d = [
            e,
            r,
            0,
            new Set
        ], o.set(n, d);
    }
    d[0].add(e);
}, a = (e)=>{
    const { s: t, d: n } = e, s = r.get(n);
    null == s || s[0].delete(e), 0 === (null == s ? void 0 : s[0].size) && r.delete(n);
    const l = o.get(t);
    if (l) {
        const [n, r] = l;
        n.delete(e), n.size || (r(), o.delete(t));
    }
}, d = (e)=>{
    const t = r.get(e);
    return t ? Array.from(t[0]) : [];
}, i = {
    add: c,
    remove: a,
    list: d
};
function f(t, r) {
    const s = (null == r ? void 0 : r.proxy) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["proxy"])({}), l = !(null == r || !r.sync), d = Object.keys(t);
    return d.forEach((e)=>{
        if (Object.getOwnPropertyDescriptor(s, e)) throw new Error("object property already defined");
        const r = t[e];
        let i = null;
        const f = ()=>{
            if (i) {
                if (Array.from(i).map((param)=>{
                    let [e] = param;
                    return ((e, t)=>{
                        const n = o.get(e);
                        return !(null == n || !n[2] || (n[3].add(t), 0));
                    })(e, f);
                }).some((e)=>e)) return;
                if (Array.from(i).every((param)=>{
                    let [e, t] = param;
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getVersion"])(e) === t.v;
                })) return;
            }
            const t = new Map, u = r((e)=>(t.set(e, {
                    v: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getVersion"])(e)
                }), e)), p = ()=>{
                var n;
                t.forEach((t, n)=>{
                    var o;
                    const r = null == (o = i) || null == (o = o.get(n)) ? void 0 : o.s;
                    if (r) t.s = r;
                    else {
                        const o = {
                            s: n,
                            d: s,
                            k: e,
                            c: f,
                            n: l,
                            i: d
                        };
                        c(o), t.s = o;
                    }
                }), null == (n = i) || n.forEach((e, n)=>{
                    !t.has(n) && e.s && a(e.s);
                }), i = t;
            };
            u instanceof Promise ? u.finally(p) : p(), s[e] = u;
        };
        f();
    }), s;
}
function u(e, t) {
    const n = null != t && t.delete ? new Set : null;
    d(e).forEach((e)=>{
        const { k: o } = e;
        null != t && t.keys && !t.keys.includes(o) || (a(e), n && n.add(o));
    }), n && n.forEach((t)=>{
        delete e[t];
    });
}
;
 //# sourceMappingURL=index.modern.mjs.map
}),
"[project]/frontend/node_modules/@reown/appkit-wallet/dist/esm/src/W3mFrameConstants.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DEFAULT_LOG_LEVEL",
    ()=>DEFAULT_LOG_LEVEL,
    "SECURE_SITE_SDK",
    ()=>SECURE_SITE_SDK,
    "SECURE_SITE_SDK_VERSION",
    ()=>SECURE_SITE_SDK_VERSION,
    "W3mFrameConstants",
    ()=>W3mFrameConstants,
    "W3mFrameRpcConstants",
    ()=>W3mFrameRpcConstants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/frontend/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
const DEFAULT_SDK_URL = 'https://secure.walletconnect.org/sdk';
const SECURE_SITE_SDK = (typeof __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] !== 'undefined' && typeof __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env !== 'undefined' ? __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env['NEXT_PUBLIC_SECURE_SITE_SDK_URL'] : undefined) || DEFAULT_SDK_URL;
const DEFAULT_LOG_LEVEL = (typeof __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] !== 'undefined' && typeof __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env !== 'undefined' ? __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env['NEXT_PUBLIC_DEFAULT_LOG_LEVEL'] : undefined) || 'error';
const SECURE_SITE_SDK_VERSION = (typeof __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] !== 'undefined' && typeof __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env !== 'undefined' ? __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env['NEXT_PUBLIC_SECURE_SITE_SDK_VERSION'] : undefined) || '4';
const W3mFrameConstants = {
    APP_EVENT_KEY: '@w3m-app/',
    FRAME_EVENT_KEY: '@w3m-frame/',
    RPC_METHOD_KEY: 'RPC_',
    STORAGE_KEY: '@appkit-wallet/',
    SESSION_TOKEN_KEY: 'SESSION_TOKEN_KEY',
    EMAIL_LOGIN_USED_KEY: 'EMAIL_LOGIN_USED_KEY',
    LAST_USED_CHAIN_KEY: 'LAST_USED_CHAIN_KEY',
    LAST_EMAIL_LOGIN_TIME: 'LAST_EMAIL_LOGIN_TIME',
    EMAIL: 'EMAIL',
    PREFERRED_ACCOUNT_TYPE: 'PREFERRED_ACCOUNT_TYPE',
    SMART_ACCOUNT_ENABLED: 'SMART_ACCOUNT_ENABLED',
    SMART_ACCOUNT_ENABLED_NETWORKS: 'SMART_ACCOUNT_ENABLED_NETWORKS',
    SOCIAL_USERNAME: 'SOCIAL_USERNAME',
    APP_SWITCH_NETWORK: '@w3m-app/SWITCH_NETWORK',
    APP_CONNECT_EMAIL: '@w3m-app/CONNECT_EMAIL',
    APP_CONNECT_DEVICE: '@w3m-app/CONNECT_DEVICE',
    APP_CONNECT_OTP: '@w3m-app/CONNECT_OTP',
    APP_CONNECT_SOCIAL: '@w3m-app/CONNECT_SOCIAL',
    APP_GET_SOCIAL_REDIRECT_URI: '@w3m-app/GET_SOCIAL_REDIRECT_URI',
    APP_GET_USER: '@w3m-app/GET_USER',
    APP_SIGN_OUT: '@w3m-app/SIGN_OUT',
    APP_IS_CONNECTED: '@w3m-app/IS_CONNECTED',
    APP_GET_CHAIN_ID: '@w3m-app/GET_CHAIN_ID',
    APP_RPC_REQUEST: '@w3m-app/RPC_REQUEST',
    APP_UPDATE_EMAIL: '@w3m-app/UPDATE_EMAIL',
    APP_UPDATE_EMAIL_PRIMARY_OTP: '@w3m-app/UPDATE_EMAIL_PRIMARY_OTP',
    APP_UPDATE_EMAIL_SECONDARY_OTP: '@w3m-app/UPDATE_EMAIL_SECONDARY_OTP',
    APP_AWAIT_UPDATE_EMAIL: '@w3m-app/AWAIT_UPDATE_EMAIL',
    APP_SYNC_THEME: '@w3m-app/SYNC_THEME',
    APP_SYNC_DAPP_DATA: '@w3m-app/SYNC_DAPP_DATA',
    APP_GET_SMART_ACCOUNT_ENABLED_NETWORKS: '@w3m-app/GET_SMART_ACCOUNT_ENABLED_NETWORKS',
    APP_INIT_SMART_ACCOUNT: '@w3m-app/INIT_SMART_ACCOUNT',
    APP_SET_PREFERRED_ACCOUNT: '@w3m-app/SET_PREFERRED_ACCOUNT',
    APP_CONNECT_FARCASTER: '@w3m-app/CONNECT_FARCASTER',
    APP_GET_FARCASTER_URI: '@w3m-app/GET_FARCASTER_URI',
    APP_RELOAD: '@w3m-app/RELOAD',
    FRAME_SWITCH_NETWORK_ERROR: '@w3m-frame/SWITCH_NETWORK_ERROR',
    FRAME_SWITCH_NETWORK_SUCCESS: '@w3m-frame/SWITCH_NETWORK_SUCCESS',
    FRAME_CONNECT_EMAIL_ERROR: '@w3m-frame/CONNECT_EMAIL_ERROR',
    FRAME_CONNECT_EMAIL_SUCCESS: '@w3m-frame/CONNECT_EMAIL_SUCCESS',
    FRAME_CONNECT_DEVICE_ERROR: '@w3m-frame/CONNECT_DEVICE_ERROR',
    FRAME_CONNECT_DEVICE_SUCCESS: '@w3m-frame/CONNECT_DEVICE_SUCCESS',
    FRAME_CONNECT_OTP_SUCCESS: '@w3m-frame/CONNECT_OTP_SUCCESS',
    FRAME_CONNECT_OTP_ERROR: '@w3m-frame/CONNECT_OTP_ERROR',
    FRAME_CONNECT_SOCIAL_SUCCESS: '@w3m-frame/CONNECT_SOCIAL_SUCCESS',
    FRAME_CONNECT_SOCIAL_ERROR: '@w3m-frame/CONNECT_SOCIAL_ERROR',
    FRAME_CONNECT_FARCASTER_SUCCESS: '@w3m-frame/CONNECT_FARCASTER_SUCCESS',
    FRAME_CONNECT_FARCASTER_ERROR: '@w3m-frame/CONNECT_FARCASTER_ERROR',
    FRAME_GET_FARCASTER_URI_SUCCESS: '@w3m-frame/GET_FARCASTER_URI_SUCCESS',
    FRAME_GET_FARCASTER_URI_ERROR: '@w3m-frame/GET_FARCASTER_URI_ERROR',
    FRAME_GET_SOCIAL_REDIRECT_URI_SUCCESS: '@w3m-frame/GET_SOCIAL_REDIRECT_URI_SUCCESS',
    FRAME_GET_SOCIAL_REDIRECT_URI_ERROR: '@w3m-frame/GET_SOCIAL_REDIRECT_URI_ERROR',
    FRAME_GET_USER_SUCCESS: '@w3m-frame/GET_USER_SUCCESS',
    FRAME_GET_USER_ERROR: '@w3m-frame/GET_USER_ERROR',
    FRAME_SIGN_OUT_SUCCESS: '@w3m-frame/SIGN_OUT_SUCCESS',
    FRAME_SIGN_OUT_ERROR: '@w3m-frame/SIGN_OUT_ERROR',
    FRAME_IS_CONNECTED_SUCCESS: '@w3m-frame/IS_CONNECTED_SUCCESS',
    FRAME_IS_CONNECTED_ERROR: '@w3m-frame/IS_CONNECTED_ERROR',
    FRAME_GET_CHAIN_ID_SUCCESS: '@w3m-frame/GET_CHAIN_ID_SUCCESS',
    FRAME_GET_CHAIN_ID_ERROR: '@w3m-frame/GET_CHAIN_ID_ERROR',
    FRAME_RPC_REQUEST_SUCCESS: '@w3m-frame/RPC_REQUEST_SUCCESS',
    FRAME_RPC_REQUEST_ERROR: '@w3m-frame/RPC_REQUEST_ERROR',
    FRAME_SESSION_UPDATE: '@w3m-frame/SESSION_UPDATE',
    FRAME_UPDATE_EMAIL_SUCCESS: '@w3m-frame/UPDATE_EMAIL_SUCCESS',
    FRAME_UPDATE_EMAIL_ERROR: '@w3m-frame/UPDATE_EMAIL_ERROR',
    FRAME_UPDATE_EMAIL_PRIMARY_OTP_SUCCESS: '@w3m-frame/UPDATE_EMAIL_PRIMARY_OTP_SUCCESS',
    FRAME_UPDATE_EMAIL_PRIMARY_OTP_ERROR: '@w3m-frame/UPDATE_EMAIL_PRIMARY_OTP_ERROR',
    FRAME_UPDATE_EMAIL_SECONDARY_OTP_SUCCESS: '@w3m-frame/UPDATE_EMAIL_SECONDARY_OTP_SUCCESS',
    FRAME_UPDATE_EMAIL_SECONDARY_OTP_ERROR: '@w3m-frame/UPDATE_EMAIL_SECONDARY_OTP_ERROR',
    FRAME_SYNC_THEME_SUCCESS: '@w3m-frame/SYNC_THEME_SUCCESS',
    FRAME_SYNC_THEME_ERROR: '@w3m-frame/SYNC_THEME_ERROR',
    FRAME_SYNC_DAPP_DATA_SUCCESS: '@w3m-frame/SYNC_DAPP_DATA_SUCCESS',
    FRAME_SYNC_DAPP_DATA_ERROR: '@w3m-frame/SYNC_DAPP_DATA_ERROR',
    FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_SUCCESS: '@w3m-frame/GET_SMART_ACCOUNT_ENABLED_NETWORKS_SUCCESS',
    FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_ERROR: '@w3m-frame/GET_SMART_ACCOUNT_ENABLED_NETWORKS_ERROR',
    FRAME_INIT_SMART_ACCOUNT_SUCCESS: '@w3m-frame/INIT_SMART_ACCOUNT_SUCCESS',
    FRAME_INIT_SMART_ACCOUNT_ERROR: '@w3m-frame/INIT_SMART_ACCOUNT_ERROR',
    FRAME_SET_PREFERRED_ACCOUNT_SUCCESS: '@w3m-frame/SET_PREFERRED_ACCOUNT_SUCCESS',
    FRAME_SET_PREFERRED_ACCOUNT_ERROR: '@w3m-frame/SET_PREFERRED_ACCOUNT_ERROR',
    FRAME_READY: '@w3m-frame/READY',
    FRAME_RELOAD_SUCCESS: '@w3m-frame/RELOAD_SUCCESS',
    FRAME_RELOAD_ERROR: '@w3m-frame/RELOAD_ERROR',
    RPC_RESPONSE_TYPE_ERROR: 'RPC_RESPONSE_ERROR',
    RPC_RESPONSE_TYPE_TX: 'RPC_RESPONSE_TRANSACTION_HASH',
    RPC_RESPONSE_TYPE_OBJECT: 'RPC_RESPONSE_OBJECT'
};
const W3mFrameRpcConstants = {
    SAFE_RPC_METHODS: [
        'eth_accounts',
        'eth_blockNumber',
        'eth_call',
        'eth_chainId',
        'eth_estimateGas',
        'eth_feeHistory',
        'eth_gasPrice',
        'eth_getAccount',
        'eth_getBalance',
        'eth_getBlockByHash',
        'eth_getBlockByNumber',
        'eth_getBlockReceipts',
        'eth_getBlockTransactionCountByHash',
        'eth_getBlockTransactionCountByNumber',
        'eth_getCode',
        'eth_getFilterChanges',
        'eth_getFilterLogs',
        'eth_getLogs',
        'eth_getProof',
        'eth_getStorageAt',
        'eth_getTransactionByBlockHashAndIndex',
        'eth_getTransactionByBlockNumberAndIndex',
        'eth_getTransactionByHash',
        'eth_getTransactionCount',
        'eth_getTransactionReceipt',
        'eth_getUncleCountByBlockHash',
        'eth_getUncleCountByBlockNumber',
        'eth_maxPriorityFeePerGas',
        'eth_newBlockFilter',
        'eth_newFilter',
        'eth_newPendingTransactionFilter',
        'eth_sendRawTransaction',
        'eth_syncing',
        'eth_uninstallFilter',
        'wallet_getCapabilities',
        'wallet_getCallsStatus',
        'eth_getUserOperationReceipt',
        'eth_estimateUserOperationGas',
        'eth_getUserOperationByHash',
        'eth_supportedEntryPoints',
        'wallet_getAssets'
    ],
    NOT_SAFE_RPC_METHODS: [
        'personal_sign',
        'eth_signTypedData_v4',
        'eth_sendTransaction',
        'solana_signMessage',
        'solana_signTransaction',
        'solana_signAllTransactions',
        'solana_signAndSendTransaction',
        'wallet_sendCalls',
        'wallet_grantPermissions',
        'wallet_revokePermissions',
        'eth_sendUserOperation'
    ],
    GET_CHAIN_ID: 'eth_chainId',
    RPC_METHOD_NOT_ALLOWED_MESSAGE: 'Requested RPC call is not allowed',
    RPC_METHOD_NOT_ALLOWED_UI_MESSAGE: 'Action not allowed',
    ACCOUNT_TYPES: {
        EOA: 'eoa',
        SMART_ACCOUNT: 'smartAccount'
    }
}; //# sourceMappingURL=W3mFrameConstants.js.map
}),
"[project]/frontend/node_modules/big.js/big.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
 *  big.js v6.2.2
 *  A small, fast, easy-to-use library for arbitrary-precision decimal arithmetic.
 *  Copyright (c) 2024 Michael Mclaughlin
 *  https://github.com/MikeMcl/big.js/LICENCE.md
 */ /************************************** EDITABLE DEFAULTS *****************************************/ // The default values below must be integers within the stated ranges.
/*
   * The maximum number of decimal places (DP) of the results of operations involving division:
   * div and sqrt, and pow with negative exponents.
   */ __turbopack_context__.s([
    "Big",
    ()=>Big,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var DP = 20, /*
   * The rounding mode (RM) used when rounding to the above decimal places.
   *
   *  0  Towards zero (i.e. truncate, no rounding).       (ROUND_DOWN)
   *  1  To nearest neighbour. If equidistant, round up.  (ROUND_HALF_UP)
   *  2  To nearest neighbour. If equidistant, to even.   (ROUND_HALF_EVEN)
   *  3  Away from zero.                                  (ROUND_UP)
   */ RM = 1, // The maximum value of DP and Big.DP.
MAX_DP = 1E6, // The maximum magnitude of the exponent argument to the pow method.
MAX_POWER = 1E6, /*
   * The negative exponent (NE) at and beneath which toString returns exponential notation.
   * (JavaScript numbers: -7)
   * -1000000 is the minimum recommended exponent value of a Big.
   */ NE = -7, /*
   * The positive exponent (PE) at and above which toString returns exponential notation.
   * (JavaScript numbers: 21)
   * 1000000 is the maximum recommended exponent value of a Big, but this limit is not enforced.
   */ PE = 21, /*
   * When true, an error will be thrown if a primitive number is passed to the Big constructor,
   * or if valueOf is called, or if toNumber is called on a Big which cannot be converted to a
   * primitive number without a loss of precision.
   */ STRICT = false, /**************************************************************************************************/ // Error messages.
NAME = '[big.js] ', INVALID = NAME + 'Invalid ', INVALID_DP = INVALID + 'decimal places', INVALID_RM = INVALID + 'rounding mode', DIV_BY_ZERO = NAME + 'Division by zero', // The shared prototype object.
P = {}, UNDEFINED = void 0, NUMERIC = /^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;
/*
 * Create and return a Big constructor.
 */ function _Big_() {
    /*
   * The Big constructor and exported function.
   * Create and return a new instance of a Big number object.
   *
   * n {number|string|Big} A numeric value.
   */ function Big(n) {
        var x = this;
        // Enable constructor usage without new.
        if (!(x instanceof Big)) return n === UNDEFINED ? _Big_() : new Big(n);
        // Duplicate.
        if (n instanceof Big) {
            x.s = n.s;
            x.e = n.e;
            x.c = n.c.slice();
        } else {
            if (typeof n !== 'string') {
                if (Big.strict === true && typeof n !== 'bigint') {
                    throw TypeError(INVALID + 'value');
                }
                // Minus zero?
                n = n === 0 && 1 / n < 0 ? '-0' : String(n);
            }
            parse(x, n);
        }
        // Retain a reference to this Big constructor.
        // Shadow Big.prototype.constructor which points to Object.
        x.constructor = Big;
    }
    Big.prototype = P;
    Big.DP = DP;
    Big.RM = RM;
    Big.NE = NE;
    Big.PE = PE;
    Big.strict = STRICT;
    Big.roundDown = 0;
    Big.roundHalfUp = 1;
    Big.roundHalfEven = 2;
    Big.roundUp = 3;
    return Big;
}
/*
 * Parse the number or string value passed to a Big constructor.
 *
 * x {Big} A Big number instance.
 * n {number|string} A numeric value.
 */ function parse(x, n) {
    var e, i, nl;
    if (!NUMERIC.test(n)) {
        throw Error(INVALID + 'number');
    }
    // Determine sign.
    x.s = n.charAt(0) == '-' ? (n = n.slice(1), -1) : 1;
    // Decimal point?
    if ((e = n.indexOf('.')) > -1) n = n.replace('.', '');
    // Exponential form?
    if ((i = n.search(/e/i)) > 0) {
        // Determine exponent.
        if (e < 0) e = i;
        e += +n.slice(i + 1);
        n = n.substring(0, i);
    } else if (e < 0) {
        // Integer.
        e = n.length;
    }
    nl = n.length;
    // Determine leading zeros.
    for(i = 0; i < nl && n.charAt(i) == '0';)++i;
    if (i == nl) {
        // Zero.
        x.c = [
            x.e = 0
        ];
    } else {
        // Determine trailing zeros.
        for(; nl > 0 && n.charAt(--nl) == '0';);
        x.e = e - i - 1;
        x.c = [];
        // Convert string to array of digits without leading/trailing zeros.
        for(e = 0; i <= nl;)x.c[e++] = +n.charAt(i++);
    }
    return x;
}
/*
 * Round Big x to a maximum of sd significant digits using rounding mode rm.
 *
 * x {Big} The Big to round.
 * sd {number} Significant digits: integer, 0 to MAX_DP inclusive.
 * rm {number} Rounding mode: 0 (down), 1 (half-up), 2 (half-even) or 3 (up).
 * [more] {boolean} Whether the result of division was truncated.
 */ function round(x, sd, rm, more) {
    var xc = x.c;
    if (rm === UNDEFINED) rm = x.constructor.RM;
    if (rm !== 0 && rm !== 1 && rm !== 2 && rm !== 3) {
        throw Error(INVALID_RM);
    }
    if (sd < 1) {
        more = rm === 3 && (more || !!xc[0]) || sd === 0 && (rm === 1 && xc[0] >= 5 || rm === 2 && (xc[0] > 5 || xc[0] === 5 && (more || xc[1] !== UNDEFINED)));
        xc.length = 1;
        if (more) {
            // 1, 0.1, 0.01, 0.001, 0.0001 etc.
            x.e = x.e - sd + 1;
            xc[0] = 1;
        } else {
            // Zero.
            xc[0] = x.e = 0;
        }
    } else if (sd < xc.length) {
        // xc[sd] is the digit after the digit that may be rounded up.
        more = rm === 1 && xc[sd] >= 5 || rm === 2 && (xc[sd] > 5 || xc[sd] === 5 && (more || xc[sd + 1] !== UNDEFINED || xc[sd - 1] & 1)) || rm === 3 && (more || !!xc[0]);
        // Remove any digits after the required precision.
        xc.length = sd;
        // Round up?
        if (more) {
            // Rounding up may mean the previous digit has to be rounded up.
            for(; ++xc[--sd] > 9;){
                xc[sd] = 0;
                if (sd === 0) {
                    ++x.e;
                    xc.unshift(1);
                    break;
                }
            }
        }
        // Remove trailing zeros.
        for(sd = xc.length; !xc[--sd];)xc.pop();
    }
    return x;
}
/*
 * Return a string representing the value of Big x in normal or exponential notation.
 * Handles P.toExponential, P.toFixed, P.toJSON, P.toPrecision, P.toString and P.valueOf.
 */ function stringify(x, doExponential, isNonzero) {
    var e = x.e, s = x.c.join(''), n = s.length;
    // Exponential notation?
    if (doExponential) {
        s = s.charAt(0) + (n > 1 ? '.' + s.slice(1) : '') + (e < 0 ? 'e' : 'e+') + e;
    // Normal notation.
    } else if (e < 0) {
        for(; ++e;)s = '0' + s;
        s = '0.' + s;
    } else if (e > 0) {
        if (++e > n) {
            for(e -= n; e--;)s += '0';
        } else if (e < n) {
            s = s.slice(0, e) + '.' + s.slice(e);
        }
    } else if (n > 1) {
        s = s.charAt(0) + '.' + s.slice(1);
    }
    return x.s < 0 && isNonzero ? '-' + s : s;
}
// Prototype/instance methods
/*
 * Return a new Big whose value is the absolute value of this Big.
 */ P.abs = function() {
    var x = new this.constructor(this);
    x.s = 1;
    return x;
};
/*
 * Return 1 if the value of this Big is greater than the value of Big y,
 *       -1 if the value of this Big is less than the value of Big y, or
 *        0 if they have the same value.
 */ P.cmp = function(y) {
    var isneg, x = this, xc = x.c, yc = (y = new x.constructor(y)).c, i = x.s, j = y.s, k = x.e, l = y.e;
    // Either zero?
    if (!xc[0] || !yc[0]) return !xc[0] ? !yc[0] ? 0 : -j : i;
    // Signs differ?
    if (i != j) return i;
    isneg = i < 0;
    // Compare exponents.
    if (k != l) return k > l ^ isneg ? 1 : -1;
    j = (k = xc.length) < (l = yc.length) ? k : l;
    // Compare digit by digit.
    for(i = -1; ++i < j;){
        if (xc[i] != yc[i]) return xc[i] > yc[i] ^ isneg ? 1 : -1;
    }
    // Compare lengths.
    return k == l ? 0 : k > l ^ isneg ? 1 : -1;
};
/*
 * Return a new Big whose value is the value of this Big divided by the value of Big y, rounded,
 * if necessary, to a maximum of Big.DP decimal places using rounding mode Big.RM.
 */ P.div = function(y) {
    var x = this, Big = x.constructor, a = x.c, b = (y = new Big(y)).c, k = x.s == y.s ? 1 : -1, dp = Big.DP;
    if (dp !== ~~dp || dp < 0 || dp > MAX_DP) {
        throw Error(INVALID_DP);
    }
    // Divisor is zero?
    if (!b[0]) {
        throw Error(DIV_BY_ZERO);
    }
    // Dividend is 0? Return +-0.
    if (!a[0]) {
        y.s = k;
        y.c = [
            y.e = 0
        ];
        return y;
    }
    var bl, bt, n, cmp, ri, bz = b.slice(), ai = bl = b.length, al = a.length, r = a.slice(0, bl), rl = r.length, q = y, qc = q.c = [], qi = 0, p = dp + (q.e = x.e - y.e) + 1; // precision of the result
    q.s = k;
    k = p < 0 ? 0 : p;
    // Create version of divisor with leading zero.
    bz.unshift(0);
    // Add zeros to make remainder as long as divisor.
    for(; rl++ < bl;)r.push(0);
    do {
        // n is how many times the divisor goes into current remainder.
        for(n = 0; n < 10; n++){
            // Compare divisor and remainder.
            if (bl != (rl = r.length)) {
                cmp = bl > rl ? 1 : -1;
            } else {
                for(ri = -1, cmp = 0; ++ri < bl;){
                    if (b[ri] != r[ri]) {
                        cmp = b[ri] > r[ri] ? 1 : -1;
                        break;
                    }
                }
            }
            // If divisor < remainder, subtract divisor from remainder.
            if (cmp < 0) {
                // Remainder can't be more than 1 digit longer than divisor.
                // Equalise lengths using divisor with extra leading zero?
                for(bt = rl == bl ? b : bz; rl;){
                    if (r[--rl] < bt[rl]) {
                        ri = rl;
                        for(; ri && !r[--ri];)r[ri] = 9;
                        --r[ri];
                        r[rl] += 10;
                    }
                    r[rl] -= bt[rl];
                }
                for(; !r[0];)r.shift();
            } else {
                break;
            }
        }
        // Add the digit n to the result array.
        qc[qi++] = cmp ? n : ++n;
        // Update the remainder.
        if (r[0] && cmp) r[rl] = a[ai] || 0;
        else r = [
            a[ai]
        ];
    }while ((ai++ < al || r[0] !== UNDEFINED) && k--)
    // Leading zero? Do not remove if result is simply zero (qi == 1).
    if (!qc[0] && qi != 1) {
        // There can't be more than one zero.
        qc.shift();
        q.e--;
        p--;
    }
    // Round?
    if (qi > p) round(q, p, Big.RM, r[0] !== UNDEFINED);
    return q;
};
/*
 * Return true if the value of this Big is equal to the value of Big y, otherwise return false.
 */ P.eq = function(y) {
    return this.cmp(y) === 0;
};
/*
 * Return true if the value of this Big is greater than the value of Big y, otherwise return
 * false.
 */ P.gt = function(y) {
    return this.cmp(y) > 0;
};
/*
 * Return true if the value of this Big is greater than or equal to the value of Big y, otherwise
 * return false.
 */ P.gte = function(y) {
    return this.cmp(y) > -1;
};
/*
 * Return true if the value of this Big is less than the value of Big y, otherwise return false.
 */ P.lt = function(y) {
    return this.cmp(y) < 0;
};
/*
 * Return true if the value of this Big is less than or equal to the value of Big y, otherwise
 * return false.
 */ P.lte = function(y) {
    return this.cmp(y) < 1;
};
/*
 * Return a new Big whose value is the value of this Big minus the value of Big y.
 */ P.minus = P.sub = function(y) {
    var i, j, t, xlty, x = this, Big = x.constructor, a = x.s, b = (y = new Big(y)).s;
    // Signs differ?
    if (a != b) {
        y.s = -b;
        return x.plus(y);
    }
    var xc = x.c.slice(), xe = x.e, yc = y.c, ye = y.e;
    // Either zero?
    if (!xc[0] || !yc[0]) {
        if (yc[0]) {
            y.s = -b;
        } else if (xc[0]) {
            y = new Big(x);
        } else {
            y.s = 1;
        }
        return y;
    }
    // Determine which is the bigger number. Prepend zeros to equalise exponents.
    if (a = xe - ye) {
        if (xlty = a < 0) {
            a = -a;
            t = xc;
        } else {
            ye = xe;
            t = yc;
        }
        t.reverse();
        for(b = a; b--;)t.push(0);
        t.reverse();
    } else {
        // Exponents equal. Check digit by digit.
        j = ((xlty = xc.length < yc.length) ? xc : yc).length;
        for(a = b = 0; b < j; b++){
            if (xc[b] != yc[b]) {
                xlty = xc[b] < yc[b];
                break;
            }
        }
    }
    // x < y? Point xc to the array of the bigger number.
    if (xlty) {
        t = xc;
        xc = yc;
        yc = t;
        y.s = -y.s;
    }
    /*
   * Append zeros to xc if shorter. No need to add zeros to yc if shorter as subtraction only
   * needs to start at yc.length.
   */ if ((b = (j = yc.length) - (i = xc.length)) > 0) for(; b--;)xc[i++] = 0;
    // Subtract yc from xc.
    for(b = i; j > a;){
        if (xc[--j] < yc[j]) {
            for(i = j; i && !xc[--i];)xc[i] = 9;
            --xc[i];
            xc[j] += 10;
        }
        xc[j] -= yc[j];
    }
    // Remove trailing zeros.
    for(; xc[--b] === 0;)xc.pop();
    // Remove leading zeros and adjust exponent accordingly.
    for(; xc[0] === 0;){
        xc.shift();
        --ye;
    }
    if (!xc[0]) {
        // n - n = +0
        y.s = 1;
        // Result must be zero.
        xc = [
            ye = 0
        ];
    }
    y.c = xc;
    y.e = ye;
    return y;
};
/*
 * Return a new Big whose value is the value of this Big modulo the value of Big y.
 */ P.mod = function(y) {
    var ygtx, x = this, Big = x.constructor, a = x.s, b = (y = new Big(y)).s;
    if (!y.c[0]) {
        throw Error(DIV_BY_ZERO);
    }
    x.s = y.s = 1;
    ygtx = y.cmp(x) == 1;
    x.s = a;
    y.s = b;
    if (ygtx) return new Big(x);
    a = Big.DP;
    b = Big.RM;
    Big.DP = Big.RM = 0;
    x = x.div(y);
    Big.DP = a;
    Big.RM = b;
    return this.minus(x.times(y));
};
/*
 * Return a new Big whose value is the value of this Big negated.
 */ P.neg = function() {
    var x = new this.constructor(this);
    x.s = -x.s;
    return x;
};
/*
 * Return a new Big whose value is the value of this Big plus the value of Big y.
 */ P.plus = P.add = function(y) {
    var e, k, t, x = this, Big = x.constructor;
    y = new Big(y);
    // Signs differ?
    if (x.s != y.s) {
        y.s = -y.s;
        return x.minus(y);
    }
    var xe = x.e, xc = x.c, ye = y.e, yc = y.c;
    // Either zero?
    if (!xc[0] || !yc[0]) {
        if (!yc[0]) {
            if (xc[0]) {
                y = new Big(x);
            } else {
                y.s = x.s;
            }
        }
        return y;
    }
    xc = xc.slice();
    // Prepend zeros to equalise exponents.
    // Note: reverse faster than unshifts.
    if (e = xe - ye) {
        if (e > 0) {
            ye = xe;
            t = yc;
        } else {
            e = -e;
            t = xc;
        }
        t.reverse();
        for(; e--;)t.push(0);
        t.reverse();
    }
    // Point xc to the longer array.
    if (xc.length - yc.length < 0) {
        t = yc;
        yc = xc;
        xc = t;
    }
    e = yc.length;
    // Only start adding at yc.length - 1 as the further digits of xc can be left as they are.
    for(k = 0; e; xc[e] %= 10)k = (xc[--e] = xc[e] + yc[e] + k) / 10 | 0;
    // No need to check for zero, as +x + +y != 0 && -x + -y != 0
    if (k) {
        xc.unshift(k);
        ++ye;
    }
    // Remove trailing zeros.
    for(e = xc.length; xc[--e] === 0;)xc.pop();
    y.c = xc;
    y.e = ye;
    return y;
};
/*
 * Return a Big whose value is the value of this Big raised to the power n.
 * If n is negative, round to a maximum of Big.DP decimal places using rounding
 * mode Big.RM.
 *
 * n {number} Integer, -MAX_POWER to MAX_POWER inclusive.
 */ P.pow = function(n) {
    var x = this, one = new x.constructor('1'), y = one, isneg = n < 0;
    if (n !== ~~n || n < -MAX_POWER || n > MAX_POWER) {
        throw Error(INVALID + 'exponent');
    }
    if (isneg) n = -n;
    for(;;){
        if (n & 1) y = y.times(x);
        n >>= 1;
        if (!n) break;
        x = x.times(x);
    }
    return isneg ? one.div(y) : y;
};
/*
 * Return a new Big whose value is the value of this Big rounded to a maximum precision of sd
 * significant digits using rounding mode rm, or Big.RM if rm is not specified.
 *
 * sd {number} Significant digits: integer, 1 to MAX_DP inclusive.
 * rm? {number} Rounding mode: 0 (down), 1 (half-up), 2 (half-even) or 3 (up).
 */ P.prec = function(sd, rm) {
    if (sd !== ~~sd || sd < 1 || sd > MAX_DP) {
        throw Error(INVALID + 'precision');
    }
    return round(new this.constructor(this), sd, rm);
};
/*
 * Return a new Big whose value is the value of this Big rounded to a maximum of dp decimal places
 * using rounding mode rm, or Big.RM if rm is not specified.
 * If dp is negative, round to an integer which is a multiple of 10**-dp.
 * If dp is not specified, round to 0 decimal places.
 *
 * dp? {number} Integer, -MAX_DP to MAX_DP inclusive.
 * rm? {number} Rounding mode: 0 (down), 1 (half-up), 2 (half-even) or 3 (up).
 */ P.round = function(dp, rm) {
    if (dp === UNDEFINED) dp = 0;
    else if (dp !== ~~dp || dp < -MAX_DP || dp > MAX_DP) {
        throw Error(INVALID_DP);
    }
    return round(new this.constructor(this), dp + this.e + 1, rm);
};
/*
 * Return a new Big whose value is the square root of the value of this Big, rounded, if
 * necessary, to a maximum of Big.DP decimal places using rounding mode Big.RM.
 */ P.sqrt = function() {
    var r, c, t, x = this, Big = x.constructor, s = x.s, e = x.e, half = new Big('0.5');
    // Zero?
    if (!x.c[0]) return new Big(x);
    // Negative?
    if (s < 0) {
        throw Error(NAME + 'No square root');
    }
    // Estimate.
    s = Math.sqrt(+stringify(x, true, true));
    // Math.sqrt underflow/overflow?
    // Re-estimate: pass x coefficient to Math.sqrt as integer, then adjust the result exponent.
    if (s === 0 || s === 1 / 0) {
        c = x.c.join('');
        if (!(c.length + e & 1)) c += '0';
        s = Math.sqrt(c);
        e = ((e + 1) / 2 | 0) - (e < 0 || e & 1);
        r = new Big((s == 1 / 0 ? '5e' : (s = s.toExponential()).slice(0, s.indexOf('e') + 1)) + e);
    } else {
        r = new Big(s + '');
    }
    e = r.e + (Big.DP += 4);
    // Newton-Raphson iteration.
    do {
        t = r;
        r = half.times(t.plus(x.div(t)));
    }while (t.c.slice(0, e).join('') !== r.c.slice(0, e).join(''))
    return round(r, (Big.DP -= 4) + r.e + 1, Big.RM);
};
/*
 * Return a new Big whose value is the value of this Big times the value of Big y.
 */ P.times = P.mul = function(y) {
    var c, x = this, Big = x.constructor, xc = x.c, yc = (y = new Big(y)).c, a = xc.length, b = yc.length, i = x.e, j = y.e;
    // Determine sign of result.
    y.s = x.s == y.s ? 1 : -1;
    // Return signed 0 if either 0.
    if (!xc[0] || !yc[0]) {
        y.c = [
            y.e = 0
        ];
        return y;
    }
    // Initialise exponent of result as x.e + y.e.
    y.e = i + j;
    // If array xc has fewer digits than yc, swap xc and yc, and lengths.
    if (a < b) {
        c = xc;
        xc = yc;
        yc = c;
        j = a;
        a = b;
        b = j;
    }
    // Initialise coefficient array of result with zeros.
    for(c = new Array(j = a + b); j--;)c[j] = 0;
    // Multiply.
    // i is initially xc.length.
    for(i = b; i--;){
        b = 0;
        // a is yc.length.
        for(j = a + i; j > i;){
            // Current sum of products at this digit position, plus carry.
            b = c[j] + yc[i] * xc[j - i - 1] + b;
            c[j--] = b % 10;
            // carry
            b = b / 10 | 0;
        }
        c[j] = b;
    }
    // Increment result exponent if there is a final carry, otherwise remove leading zero.
    if (b) ++y.e;
    else c.shift();
    // Remove trailing zeros.
    for(i = c.length; !c[--i];)c.pop();
    y.c = c;
    return y;
};
/*
 * Return a string representing the value of this Big in exponential notation rounded to dp fixed
 * decimal places using rounding mode rm, or Big.RM if rm is not specified.
 *
 * dp? {number} Decimal places: integer, 0 to MAX_DP inclusive.
 * rm? {number} Rounding mode: 0 (down), 1 (half-up), 2 (half-even) or 3 (up).
 */ P.toExponential = function(dp, rm) {
    var x = this, n = x.c[0];
    if (dp !== UNDEFINED) {
        if (dp !== ~~dp || dp < 0 || dp > MAX_DP) {
            throw Error(INVALID_DP);
        }
        x = round(new x.constructor(x), ++dp, rm);
        for(; x.c.length < dp;)x.c.push(0);
    }
    return stringify(x, true, !!n);
};
/*
 * Return a string representing the value of this Big in normal notation rounded to dp fixed
 * decimal places using rounding mode rm, or Big.RM if rm is not specified.
 *
 * dp? {number} Decimal places: integer, 0 to MAX_DP inclusive.
 * rm? {number} Rounding mode: 0 (down), 1 (half-up), 2 (half-even) or 3 (up).
 *
 * (-0).toFixed(0) is '0', but (-0.1).toFixed(0) is '-0'.
 * (-0).toFixed(1) is '0.0', but (-0.01).toFixed(1) is '-0.0'.
 */ P.toFixed = function(dp, rm) {
    var x = this, n = x.c[0];
    if (dp !== UNDEFINED) {
        if (dp !== ~~dp || dp < 0 || dp > MAX_DP) {
            throw Error(INVALID_DP);
        }
        x = round(new x.constructor(x), dp + x.e + 1, rm);
        // x.e may have changed if the value is rounded up.
        for(dp = dp + x.e + 1; x.c.length < dp;)x.c.push(0);
    }
    return stringify(x, false, !!n);
};
/*
 * Return a string representing the value of this Big.
 * Return exponential notation if this Big has a positive exponent equal to or greater than
 * Big.PE, or a negative exponent equal to or less than Big.NE.
 * Omit the sign for negative zero.
 */ P[Symbol.for('nodejs.util.inspect.custom')] = P.toJSON = P.toString = function() {
    var x = this, Big = x.constructor;
    return stringify(x, x.e <= Big.NE || x.e >= Big.PE, !!x.c[0]);
};
/*
 * Return the value of this Big as a primitve number.
 */ P.toNumber = function() {
    var n = +stringify(this, true, true);
    if (this.constructor.strict === true && !this.eq(n.toString())) {
        throw Error(NAME + 'Imprecise conversion');
    }
    return n;
};
/*
 * Return a string representing the value of this Big rounded to sd significant digits using
 * rounding mode rm, or Big.RM if rm is not specified.
 * Use exponential notation if sd is less than the number of digits necessary to represent
 * the integer part of the value in normal notation.
 *
 * sd {number} Significant digits: integer, 1 to MAX_DP inclusive.
 * rm? {number} Rounding mode: 0 (down), 1 (half-up), 2 (half-even) or 3 (up).
 */ P.toPrecision = function(sd, rm) {
    var x = this, Big = x.constructor, n = x.c[0];
    if (sd !== UNDEFINED) {
        if (sd !== ~~sd || sd < 1 || sd > MAX_DP) {
            throw Error(INVALID + 'precision');
        }
        x = round(new Big(x), sd, rm);
        for(; x.c.length < sd;)x.c.push(0);
    }
    return stringify(x, sd <= x.e || x.e <= Big.NE || x.e >= Big.PE, !!n);
};
/*
 * Return a string representing the value of this Big.
 * Return exponential notation if this Big has a positive exponent equal to or greater than
 * Big.PE, or a negative exponent equal to or less than Big.NE.
 * Include the sign for negative zero.
 */ P.valueOf = function() {
    var x = this, Big = x.constructor;
    if (Big.strict === true) {
        throw Error(NAME + 'valueOf disallowed');
    }
    return stringify(x, x.e <= Big.NE || x.e >= Big.PE, true);
};
var Big = _Big_();
const __TURBOPACK__default__export__ = Big;
}),
"[project]/frontend/node_modules/@reown/appkit/node_modules/@walletconnect/types/dist/index.es.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ICore",
    ()=>h,
    "ICrypto",
    ()=>g,
    "IEchoClient",
    ()=>O,
    "IEngine",
    ()=>V,
    "IEngineEvents",
    ()=>K,
    "IEventClient",
    ()=>R,
    "IExpirer",
    ()=>S,
    "IJsonRpcHistory",
    ()=>I,
    "IKeyChain",
    ()=>j,
    "IMessageTracker",
    ()=>y,
    "IPairing",
    ()=>$,
    "IPublisher",
    ()=>m,
    "IRelayer",
    ()=>d,
    "ISignClient",
    ()=>J,
    "ISignClientEvents",
    ()=>H,
    "IStore",
    ()=>f,
    "ISubscriber",
    ()=>P,
    "ISubscriberTopicMap",
    ()=>C,
    "IVerify",
    ()=>M
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$walletconnect$2f$events$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/@walletconnect/events/dist/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$walletconnect$2f$events$2f$dist$2f$esm$2f$events$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@walletconnect/events/dist/esm/events.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$events$2f$events$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/events/events.js [app-client] (ecmascript)");
;
;
var a = Object.defineProperty, u = (e, s, r)=>s in e ? a(e, s, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: r
    }) : e[s] = r, c = (e, s, r)=>u(e, typeof s != "symbol" ? s + "" : s, r);
class h extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$walletconnect$2f$events$2f$dist$2f$esm$2f$events$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IEvents"] {
    constructor(s){
        super(), this.opts = s, c(this, "protocol", "wc"), c(this, "version", 2);
    }
}
class g {
    constructor(s, r, t){
        this.core = s, this.logger = r;
    }
}
var p = Object.defineProperty, b = (e, s, r)=>s in e ? p(e, s, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: r
    }) : e[s] = r, v = (e, s, r)=>b(e, typeof s != "symbol" ? s + "" : s, r);
class I extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$walletconnect$2f$events$2f$dist$2f$esm$2f$events$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IEvents"] {
    constructor(s, r){
        super(), this.core = s, this.logger = r, v(this, "records", new Map);
    }
}
class y {
    constructor(s, r){
        this.logger = s, this.core = r;
    }
}
class m extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$walletconnect$2f$events$2f$dist$2f$esm$2f$events$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IEvents"] {
    constructor(s, r){
        super(), this.relayer = s, this.logger = r;
    }
}
class d extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$walletconnect$2f$events$2f$dist$2f$esm$2f$events$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IEvents"] {
    constructor(s){
        super();
    }
}
class f {
    constructor(s, r, t, q){
        this.core = s, this.logger = r, this.name = t;
    }
}
var E = Object.defineProperty, x = (e, s, r)=>s in e ? E(e, s, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: r
    }) : e[s] = r, w = (e, s, r)=>x(e, typeof s != "symbol" ? s + "" : s, r);
class C {
    constructor(){
        w(this, "map", new Map);
    }
}
class P extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$walletconnect$2f$events$2f$dist$2f$esm$2f$events$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IEvents"] {
    constructor(s, r){
        super(), this.relayer = s, this.logger = r;
    }
}
class j {
    constructor(s, r){
        this.core = s, this.logger = r;
    }
}
class S extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$walletconnect$2f$events$2f$dist$2f$esm$2f$events$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IEvents"] {
    constructor(s, r){
        super(), this.core = s, this.logger = r;
    }
}
class $ {
    constructor(s, r){
        this.logger = s, this.core = r;
    }
}
class M {
    constructor(s, r, t){
        this.core = s, this.logger = r, this.store = t;
    }
}
class O {
    constructor(s, r){
        this.projectId = s, this.logger = r;
    }
}
class R {
    constructor(s, r, t){
        this.core = s, this.logger = r, this.telemetryEnabled = t;
    }
}
var T = Object.defineProperty, k = (e, s, r)=>s in e ? T(e, s, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: r
    }) : e[s] = r, i = (e, s, r)=>k(e, typeof s != "symbol" ? s + "" : s, r);
class H extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$events$2f$events$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] {
    constructor(){
        super();
    }
}
class J {
    constructor(s){
        this.opts = s, i(this, "protocol", "wc"), i(this, "version", 2);
    }
}
class K extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$events$2f$events$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventEmitter"] {
    constructor(){
        super();
    }
}
class V {
    constructor(s){
        this.client = s;
    }
}
;
 //# sourceMappingURL=index.es.js.map
}),
"[project]/frontend/node_modules/@reown/appkit-controllers/node_modules/@walletconnect/types/dist/index.es.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ICore",
    ()=>h,
    "ICrypto",
    ()=>g,
    "IEchoClient",
    ()=>O,
    "IEngine",
    ()=>V,
    "IEngineEvents",
    ()=>K,
    "IEventClient",
    ()=>R,
    "IExpirer",
    ()=>S,
    "IJsonRpcHistory",
    ()=>I,
    "IKeyChain",
    ()=>j,
    "IMessageTracker",
    ()=>y,
    "IPairing",
    ()=>$,
    "IPublisher",
    ()=>m,
    "IRelayer",
    ()=>d,
    "ISignClient",
    ()=>J,
    "ISignClientEvents",
    ()=>H,
    "IStore",
    ()=>f,
    "ISubscriber",
    ()=>P,
    "ISubscriberTopicMap",
    ()=>C,
    "IVerify",
    ()=>M
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$walletconnect$2f$events$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/@walletconnect/events/dist/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$walletconnect$2f$events$2f$dist$2f$esm$2f$events$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@walletconnect/events/dist/esm/events.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$events$2f$events$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/events/events.js [app-client] (ecmascript)");
;
;
var a = Object.defineProperty, u = (e, s, r)=>s in e ? a(e, s, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: r
    }) : e[s] = r, c = (e, s, r)=>u(e, typeof s != "symbol" ? s + "" : s, r);
class h extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$walletconnect$2f$events$2f$dist$2f$esm$2f$events$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IEvents"] {
    constructor(s){
        super(), this.opts = s, c(this, "protocol", "wc"), c(this, "version", 2);
    }
}
class g {
    constructor(s, r, t){
        this.core = s, this.logger = r;
    }
}
var p = Object.defineProperty, b = (e, s, r)=>s in e ? p(e, s, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: r
    }) : e[s] = r, v = (e, s, r)=>b(e, typeof s != "symbol" ? s + "" : s, r);
class I extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$walletconnect$2f$events$2f$dist$2f$esm$2f$events$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IEvents"] {
    constructor(s, r){
        super(), this.core = s, this.logger = r, v(this, "records", new Map);
    }
}
class y {
    constructor(s, r){
        this.logger = s, this.core = r;
    }
}
class m extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$walletconnect$2f$events$2f$dist$2f$esm$2f$events$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IEvents"] {
    constructor(s, r){
        super(), this.relayer = s, this.logger = r;
    }
}
class d extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$walletconnect$2f$events$2f$dist$2f$esm$2f$events$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IEvents"] {
    constructor(s){
        super();
    }
}
class f {
    constructor(s, r, t, q){
        this.core = s, this.logger = r, this.name = t;
    }
}
var E = Object.defineProperty, x = (e, s, r)=>s in e ? E(e, s, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: r
    }) : e[s] = r, w = (e, s, r)=>x(e, typeof s != "symbol" ? s + "" : s, r);
class C {
    constructor(){
        w(this, "map", new Map);
    }
}
class P extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$walletconnect$2f$events$2f$dist$2f$esm$2f$events$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IEvents"] {
    constructor(s, r){
        super(), this.relayer = s, this.logger = r;
    }
}
class j {
    constructor(s, r){
        this.core = s, this.logger = r;
    }
}
class S extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$walletconnect$2f$events$2f$dist$2f$esm$2f$events$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IEvents"] {
    constructor(s, r){
        super(), this.core = s, this.logger = r;
    }
}
class $ {
    constructor(s, r){
        this.logger = s, this.core = r;
    }
}
class M {
    constructor(s, r, t){
        this.core = s, this.logger = r, this.store = t;
    }
}
class O {
    constructor(s, r){
        this.projectId = s, this.logger = r;
    }
}
class R {
    constructor(s, r, t){
        this.core = s, this.logger = r, this.telemetryEnabled = t;
    }
}
var T = Object.defineProperty, k = (e, s, r)=>s in e ? T(e, s, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: r
    }) : e[s] = r, i = (e, s, r)=>k(e, typeof s != "symbol" ? s + "" : s, r);
class H extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$events$2f$events$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] {
    constructor(){
        super();
    }
}
class J {
    constructor(s){
        this.opts = s, i(this, "protocol", "wc"), i(this, "version", 2);
    }
}
class K extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$events$2f$events$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventEmitter"] {
    constructor(){
        super();
    }
}
class V {
    constructor(s){
        this.client = s;
    }
}
;
 //# sourceMappingURL=index.es.js.map
}),
"[project]/frontend/node_modules/@reown/appkit/node_modules/@walletconnect/relay-auth/dist/index.es.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DATA_ENCODING",
    ()=>xt,
    "DID_DELIMITER",
    ()=>Vt,
    "DID_METHOD",
    ()=>Jt,
    "DID_PREFIX",
    ()=>Yt,
    "JSON_ENCODING",
    ()=>Gt,
    "JWT_DELIMITER",
    ()=>ut,
    "JWT_ENCODING",
    ()=>Dt,
    "JWT_IRIDIUM_ALG",
    ()=>jt,
    "JWT_IRIDIUM_TYP",
    ()=>Zt,
    "KEY_PAIR_SEED_LENGTH",
    ()=>Ne,
    "MULTICODEC_ED25519_BASE",
    ()=>Kt,
    "MULTICODEC_ED25519_ENCODING",
    ()=>dt,
    "MULTICODEC_ED25519_HEADER",
    ()=>Wt,
    "MULTICODEC_ED25519_LENGTH",
    ()=>Fe,
    "decodeData",
    ()=>Xo,
    "decodeIss",
    ()=>tn,
    "decodeJSON",
    ()=>lt,
    "decodeJWT",
    ()=>sn,
    "decodeSig",
    ()=>nn,
    "encodeData",
    ()=>rn,
    "encodeIss",
    ()=>Qe,
    "encodeJSON",
    ()=>bt,
    "encodeJWT",
    ()=>on,
    "encodeSig",
    ()=>en,
    "generateKeyPair",
    ()=>Po,
    "signJWT",
    ()=>Qo,
    "verifyJWT",
    ()=>ts
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@walletconnect/time/dist/cjs/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$walletconnect$2f$safe$2d$json$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@walletconnect/safe-json/dist/esm/index.js [app-client] (ecmascript)");
;
;
function En(t) {
    return t instanceof Uint8Array || ArrayBuffer.isView(t) && t.constructor.name === "Uint8Array";
}
function fe(t) {
    for(var _len = arguments.length, e = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
        e[_key - 1] = arguments[_key];
    }
    if (!En(t)) throw new Error("Uint8Array expected");
    if (e.length > 0 && !e.includes(t.length)) throw new Error("Uint8Array expected of length " + e + ", got length=" + t.length);
}
function De(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
    if (t.destroyed) throw new Error("Hash instance has been destroyed");
    if (e && t.finished) throw new Error("Hash#digest() has already been called");
}
function gn(t, e) {
    fe(t);
    const n = e.outputLen;
    if (t.length < n) throw new Error("digestInto() expects output buffer of length at least " + n);
}
const it = typeof globalThis == "object" && "crypto" in globalThis ? globalThis.crypto : void 0; /*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */ 
const _t = (t)=>new DataView(t.buffer, t.byteOffset, t.byteLength);
function yn(t) {
    if (typeof t != "string") throw new Error("utf8ToBytes expected string, got " + typeof t);
    return new Uint8Array(new TextEncoder().encode(t));
}
function de(t) {
    return typeof t == "string" && (t = yn(t)), fe(t), t;
}
class xn {
    clone() {
        return this._cloneInto();
    }
}
function Bn(t) {
    const e = (r)=>t().update(de(r)).digest(), n = t();
    return e.outputLen = n.outputLen, e.blockLen = n.blockLen, e.create = ()=>t(), e;
}
function he() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 32;
    if (it && typeof it.getRandomValues == "function") return it.getRandomValues(new Uint8Array(t));
    if (it && typeof it.randomBytes == "function") return it.randomBytes(t);
    throw new Error("crypto.getRandomValues must be defined");
}
function Cn(t, e, n, r) {
    if (typeof t.setBigUint64 == "function") return t.setBigUint64(e, n, r);
    const o = BigInt(32), s = BigInt(4294967295), a = Number(n >> o & s), u = Number(n & s), i = r ? 4 : 0, D = r ? 0 : 4;
    t.setUint32(e + i, a, r), t.setUint32(e + D, u, r);
}
class An extends xn {
    update(e) {
        De(this);
        const { view: n, buffer: r, blockLen: o } = this;
        e = de(e);
        const s = e.length;
        for(let a = 0; a < s;){
            const u = Math.min(o - this.pos, s - a);
            if (u === o) {
                const i = _t(e);
                for(; o <= s - a; a += o)this.process(i, a);
                continue;
            }
            r.set(e.subarray(a, a + u), this.pos), this.pos += u, a += u, this.pos === o && (this.process(n, 0), this.pos = 0);
        }
        return this.length += e.length, this.roundClean(), this;
    }
    digestInto(e) {
        De(this), gn(e, this), this.finished = !0;
        const { buffer: n, view: r, blockLen: o, isLE: s } = this;
        let { pos: a } = this;
        n[a++] = 128, this.buffer.subarray(a).fill(0), this.padOffset > o - a && (this.process(r, 0), a = 0);
        for(let l = a; l < o; l++)n[l] = 0;
        Cn(r, o - 8, BigInt(this.length * 8), s), this.process(r, 0);
        const u = _t(e), i = this.outputLen;
        if (i % 4) throw new Error("_sha2: outputLen should be aligned to 32bit");
        const D = i / 4, c = this.get();
        if (D > c.length) throw new Error("_sha2: outputLen bigger than state");
        for(let l = 0; l < D; l++)u.setUint32(4 * l, c[l], s);
    }
    digest() {
        const { buffer: e, outputLen: n } = this;
        this.digestInto(e);
        const r = e.slice(0, n);
        return this.destroy(), r;
    }
    _cloneInto(e) {
        e || (e = new this.constructor), e.set(...this.get());
        const { blockLen: n, buffer: r, length: o, finished: s, destroyed: a, pos: u } = this;
        return e.length = o, e.pos = u, e.finished = s, e.destroyed = a, o % n && e.buffer.set(r), e;
    }
    constructor(e, n, r, o){
        super(), this.blockLen = e, this.outputLen = n, this.padOffset = r, this.isLE = o, this.finished = !1, this.length = 0, this.pos = 0, this.destroyed = !1, this.buffer = new Uint8Array(e), this.view = _t(this.buffer);
    }
}
const wt = BigInt(2 ** 32 - 1), St = BigInt(32);
function le(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    return e ? {
        h: Number(t & wt),
        l: Number(t >> St & wt)
    } : {
        h: Number(t >> St & wt) | 0,
        l: Number(t & wt) | 0
    };
}
function mn(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    let n = new Uint32Array(t.length), r = new Uint32Array(t.length);
    for(let o = 0; o < t.length; o++){
        const { h: s, l: a } = le(t[o], e);
        [n[o], r[o]] = [
            s,
            a
        ];
    }
    return [
        n,
        r
    ];
}
const _n = (t, e)=>BigInt(t >>> 0) << St | BigInt(e >>> 0), Sn = (t, e, n)=>t >>> n, vn = (t, e, n)=>t << 32 - n | e >>> n, In = (t, e, n)=>t >>> n | e << 32 - n, Un = (t, e, n)=>t << 32 - n | e >>> n, Tn = (t, e, n)=>t << 64 - n | e >>> n - 32, Fn = (t, e, n)=>t >>> n - 32 | e << 64 - n, Nn = (t, e)=>e, Ln = (t, e)=>t, On = (t, e, n)=>t << n | e >>> 32 - n, Hn = (t, e, n)=>e << n | t >>> 32 - n, zn = (t, e, n)=>e << n - 32 | t >>> 64 - n, Mn = (t, e, n)=>t << n - 32 | e >>> 64 - n;
function qn(t, e, n, r) {
    const o = (e >>> 0) + (r >>> 0);
    return {
        h: t + n + (o / 2 ** 32 | 0) | 0,
        l: o | 0
    };
}
const $n = (t, e, n)=>(t >>> 0) + (e >>> 0) + (n >>> 0), kn = (t, e, n, r)=>e + n + r + (t / 2 ** 32 | 0) | 0, Rn = (t, e, n, r)=>(t >>> 0) + (e >>> 0) + (n >>> 0) + (r >>> 0), jn = (t, e, n, r, o)=>e + n + r + o + (t / 2 ** 32 | 0) | 0, Zn = (t, e, n, r, o)=>(t >>> 0) + (e >>> 0) + (n >>> 0) + (r >>> 0) + (o >>> 0), Gn = (t, e, n, r, o, s)=>e + n + r + o + s + (t / 2 ** 32 | 0) | 0, x = {
    fromBig: le,
    split: mn,
    toBig: _n,
    shrSH: Sn,
    shrSL: vn,
    rotrSH: In,
    rotrSL: Un,
    rotrBH: Tn,
    rotrBL: Fn,
    rotr32H: Nn,
    rotr32L: Ln,
    rotlSH: On,
    rotlSL: Hn,
    rotlBH: zn,
    rotlBL: Mn,
    add: qn,
    add3L: $n,
    add3H: kn,
    add4L: Rn,
    add4H: jn,
    add5H: Gn,
    add5L: Zn
}, [Vn, Yn] = (()=>x.split([
        "0x428a2f98d728ae22",
        "0x7137449123ef65cd",
        "0xb5c0fbcfec4d3b2f",
        "0xe9b5dba58189dbbc",
        "0x3956c25bf348b538",
        "0x59f111f1b605d019",
        "0x923f82a4af194f9b",
        "0xab1c5ed5da6d8118",
        "0xd807aa98a3030242",
        "0x12835b0145706fbe",
        "0x243185be4ee4b28c",
        "0x550c7dc3d5ffb4e2",
        "0x72be5d74f27b896f",
        "0x80deb1fe3b1696b1",
        "0x9bdc06a725c71235",
        "0xc19bf174cf692694",
        "0xe49b69c19ef14ad2",
        "0xefbe4786384f25e3",
        "0x0fc19dc68b8cd5b5",
        "0x240ca1cc77ac9c65",
        "0x2de92c6f592b0275",
        "0x4a7484aa6ea6e483",
        "0x5cb0a9dcbd41fbd4",
        "0x76f988da831153b5",
        "0x983e5152ee66dfab",
        "0xa831c66d2db43210",
        "0xb00327c898fb213f",
        "0xbf597fc7beef0ee4",
        "0xc6e00bf33da88fc2",
        "0xd5a79147930aa725",
        "0x06ca6351e003826f",
        "0x142929670a0e6e70",
        "0x27b70a8546d22ffc",
        "0x2e1b21385c26c926",
        "0x4d2c6dfc5ac42aed",
        "0x53380d139d95b3df",
        "0x650a73548baf63de",
        "0x766a0abb3c77b2a8",
        "0x81c2c92e47edaee6",
        "0x92722c851482353b",
        "0xa2bfe8a14cf10364",
        "0xa81a664bbc423001",
        "0xc24b8b70d0f89791",
        "0xc76c51a30654be30",
        "0xd192e819d6ef5218",
        "0xd69906245565a910",
        "0xf40e35855771202a",
        "0x106aa07032bbd1b8",
        "0x19a4c116b8d2d0c8",
        "0x1e376c085141ab53",
        "0x2748774cdf8eeb99",
        "0x34b0bcb5e19b48a8",
        "0x391c0cb3c5c95a63",
        "0x4ed8aa4ae3418acb",
        "0x5b9cca4f7763e373",
        "0x682e6ff3d6b2b8a3",
        "0x748f82ee5defb2fc",
        "0x78a5636f43172f60",
        "0x84c87814a1f0ab72",
        "0x8cc702081a6439ec",
        "0x90befffa23631e28",
        "0xa4506cebde82bde9",
        "0xbef9a3f7b2c67915",
        "0xc67178f2e372532b",
        "0xca273eceea26619c",
        "0xd186b8c721c0c207",
        "0xeada7dd6cde0eb1e",
        "0xf57d4f7fee6ed178",
        "0x06f067aa72176fba",
        "0x0a637dc5a2c898a6",
        "0x113f9804bef90dae",
        "0x1b710b35131c471b",
        "0x28db77f523047d84",
        "0x32caab7b40c72493",
        "0x3c9ebe0a15c9bebc",
        "0x431d67c49c100d4c",
        "0x4cc5d4becb3e42b6",
        "0x597f299cfc657e2a",
        "0x5fcb6fab3ad6faec",
        "0x6c44198c4a475817"
    ].map((t)=>BigInt(t))))(), P = new Uint32Array(80), Q = new Uint32Array(80);
class Jn extends An {
    get() {
        const { Ah: e, Al: n, Bh: r, Bl: o, Ch: s, Cl: a, Dh: u, Dl: i, Eh: D, El: c, Fh: l, Fl: p, Gh: w, Gl: h, Hh: g, Hl: S } = this;
        return [
            e,
            n,
            r,
            o,
            s,
            a,
            u,
            i,
            D,
            c,
            l,
            p,
            w,
            h,
            g,
            S
        ];
    }
    set(e, n, r, o, s, a, u, i, D, c, l, p, w, h, g, S) {
        this.Ah = e | 0, this.Al = n | 0, this.Bh = r | 0, this.Bl = o | 0, this.Ch = s | 0, this.Cl = a | 0, this.Dh = u | 0, this.Dl = i | 0, this.Eh = D | 0, this.El = c | 0, this.Fh = l | 0, this.Fl = p | 0, this.Gh = w | 0, this.Gl = h | 0, this.Hh = g | 0, this.Hl = S | 0;
    }
    process(e, n) {
        for(let d = 0; d < 16; d++, n += 4)P[d] = e.getUint32(n), Q[d] = e.getUint32(n += 4);
        for(let d = 16; d < 80; d++){
            const m = P[d - 15] | 0, F = Q[d - 15] | 0, q = x.rotrSH(m, F, 1) ^ x.rotrSH(m, F, 8) ^ x.shrSH(m, F, 7), z = x.rotrSL(m, F, 1) ^ x.rotrSL(m, F, 8) ^ x.shrSL(m, F, 7), I = P[d - 2] | 0, O = Q[d - 2] | 0, ot = x.rotrSH(I, O, 19) ^ x.rotrBH(I, O, 61) ^ x.shrSH(I, O, 6), tt = x.rotrSL(I, O, 19) ^ x.rotrBL(I, O, 61) ^ x.shrSL(I, O, 6), st = x.add4L(z, tt, Q[d - 7], Q[d - 16]), at = x.add4H(st, q, ot, P[d - 7], P[d - 16]);
            P[d] = at | 0, Q[d] = st | 0;
        }
        let { Ah: r, Al: o, Bh: s, Bl: a, Ch: u, Cl: i, Dh: D, Dl: c, Eh: l, El: p, Fh: w, Fl: h, Gh: g, Gl: S, Hh: v, Hl: L } = this;
        for(let d = 0; d < 80; d++){
            const m = x.rotrSH(l, p, 14) ^ x.rotrSH(l, p, 18) ^ x.rotrBH(l, p, 41), F = x.rotrSL(l, p, 14) ^ x.rotrSL(l, p, 18) ^ x.rotrBL(l, p, 41), q = l & w ^ ~l & g, z = p & h ^ ~p & S, I = x.add5L(L, F, z, Yn[d], Q[d]), O = x.add5H(I, v, m, q, Vn[d], P[d]), ot = I | 0, tt = x.rotrSH(r, o, 28) ^ x.rotrBH(r, o, 34) ^ x.rotrBH(r, o, 39), st = x.rotrSL(r, o, 28) ^ x.rotrBL(r, o, 34) ^ x.rotrBL(r, o, 39), at = r & s ^ r & u ^ s & u, Ct = o & a ^ o & i ^ a & i;
            v = g | 0, L = S | 0, g = w | 0, S = h | 0, w = l | 0, h = p | 0, ({ h: l, l: p } = x.add(D | 0, c | 0, O | 0, ot | 0)), D = u | 0, c = i | 0, u = s | 0, i = a | 0, s = r | 0, a = o | 0;
            const At = x.add3L(ot, st, Ct);
            r = x.add3H(At, O, tt, at), o = At | 0;
        }
        ({ h: r, l: o } = x.add(this.Ah | 0, this.Al | 0, r | 0, o | 0)), ({ h: s, l: a } = x.add(this.Bh | 0, this.Bl | 0, s | 0, a | 0)), ({ h: u, l: i } = x.add(this.Ch | 0, this.Cl | 0, u | 0, i | 0)), ({ h: D, l: c } = x.add(this.Dh | 0, this.Dl | 0, D | 0, c | 0)), ({ h: l, l: p } = x.add(this.Eh | 0, this.El | 0, l | 0, p | 0)), ({ h: w, l: h } = x.add(this.Fh | 0, this.Fl | 0, w | 0, h | 0)), ({ h: g, l: S } = x.add(this.Gh | 0, this.Gl | 0, g | 0, S | 0)), ({ h: v, l: L } = x.add(this.Hh | 0, this.Hl | 0, v | 0, L | 0)), this.set(r, o, s, a, u, i, D, c, l, p, w, h, g, S, v, L);
    }
    roundClean() {
        P.fill(0), Q.fill(0);
    }
    destroy() {
        this.buffer.fill(0), this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    }
    constructor(){
        super(128, 64, 16, !1), this.Ah = 1779033703, this.Al = -205731576, this.Bh = -1150833019, this.Bl = -2067093701, this.Ch = 1013904242, this.Cl = -23791573, this.Dh = -1521486534, this.Dl = 1595750129, this.Eh = 1359893119, this.El = -1377402159, this.Fh = -1694144372, this.Fl = 725511199, this.Gh = 528734635, this.Gl = -79577749, this.Hh = 1541459225, this.Hl = 327033209;
    }
}
const Kn = Bn(()=>new Jn); /*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */ 
const vt = BigInt(0), be = BigInt(1), Wn = BigInt(2);
function It(t) {
    return t instanceof Uint8Array || ArrayBuffer.isView(t) && t.constructor.name === "Uint8Array";
}
function Ut(t) {
    if (!It(t)) throw new Error("Uint8Array expected");
}
function Tt(t, e) {
    if (typeof e != "boolean") throw new Error(t + " boolean expected, got " + e);
}
const Xn = Array.from({
    length: 256
}, (t, e)=>e.toString(16).padStart(2, "0"));
function Ft(t) {
    Ut(t);
    let e = "";
    for(let n = 0; n < t.length; n++)e += Xn[t[n]];
    return e;
}
function pe(t) {
    if (typeof t != "string") throw new Error("hex string expected, got " + typeof t);
    return t === "" ? vt : BigInt("0x" + t);
}
const K = {
    _0: 48,
    _9: 57,
    A: 65,
    F: 70,
    a: 97,
    f: 102
};
function we(t) {
    if (t >= K._0 && t <= K._9) return t - K._0;
    if (t >= K.A && t <= K.F) return t - (K.A - 10);
    if (t >= K.a && t <= K.f) return t - (K.a - 10);
}
function Ee(t) {
    if (typeof t != "string") throw new Error("hex string expected, got " + typeof t);
    const e = t.length, n = e / 2;
    if (e % 2) throw new Error("hex string expected, got unpadded hex of length " + e);
    const r = new Uint8Array(n);
    for(let o = 0, s = 0; o < n; o++, s += 2){
        const a = we(t.charCodeAt(s)), u = we(t.charCodeAt(s + 1));
        if (a === void 0 || u === void 0) {
            const i = t[s] + t[s + 1];
            throw new Error('hex string expected, got non-hex character "' + i + '" at index ' + s);
        }
        r[o] = a * 16 + u;
    }
    return r;
}
function Pn(t) {
    return pe(Ft(t));
}
function Et(t) {
    return Ut(t), pe(Ft(Uint8Array.from(t).reverse()));
}
function ge(t, e) {
    return Ee(t.toString(16).padStart(e * 2, "0"));
}
function Nt(t, e) {
    return ge(t, e).reverse();
}
function W(t, e, n) {
    let r;
    if (typeof e == "string") try {
        r = Ee(e);
    } catch (s) {
        throw new Error(t + " must be hex string or Uint8Array, cause: " + s);
    }
    else if (It(e)) r = Uint8Array.from(e);
    else throw new Error(t + " must be hex string or Uint8Array");
    const o = r.length;
    if (typeof n == "number" && o !== n) throw new Error(t + " of length " + n + " expected, got " + o);
    return r;
}
function ye() {
    for(var _len = arguments.length, t = new Array(_len), _key = 0; _key < _len; _key++){
        t[_key] = arguments[_key];
    }
    let e = 0;
    for(let r = 0; r < t.length; r++){
        const o = t[r];
        Ut(o), e += o.length;
    }
    const n = new Uint8Array(e);
    for(let r = 0, o = 0; r < t.length; r++){
        const s = t[r];
        n.set(s, o), o += s.length;
    }
    return n;
}
const Lt = (t)=>typeof t == "bigint" && vt <= t;
function Qn(t, e, n) {
    return Lt(t) && Lt(e) && Lt(n) && e <= t && t < n;
}
function ft(t, e, n, r) {
    if (!Qn(e, n, r)) throw new Error("expected valid " + t + ": " + n + " <= n < " + r + ", got " + e);
}
function tr(t) {
    let e;
    for(e = 0; t > vt; t >>= be, e += 1);
    return e;
}
const er = (t)=>(Wn << BigInt(t - 1)) - be, nr = {
    bigint: (t)=>typeof t == "bigint",
    function: (t)=>typeof t == "function",
    boolean: (t)=>typeof t == "boolean",
    string: (t)=>typeof t == "string",
    stringOrUint8Array: (t)=>typeof t == "string" || It(t),
    isSafeInteger: (t)=>Number.isSafeInteger(t),
    array: (t)=>Array.isArray(t),
    field: (t, e)=>e.Fp.isValid(t),
    hash: (t)=>typeof t == "function" && Number.isSafeInteger(t.outputLen)
};
function Ot(t, e) {
    let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const r = (o, s, a)=>{
        const u = nr[s];
        if (typeof u != "function") throw new Error("invalid validator function");
        const i = t[o];
        if (!(a && i === void 0) && !u(i, t)) throw new Error("param " + String(o) + " is invalid. Expected " + s + ", got " + i);
    };
    for (const [o, s] of Object.entries(e))r(o, s, !1);
    for (const [o, s] of Object.entries(n))r(o, s, !0);
    return t;
}
function xe(t) {
    const e = new WeakMap;
    return function(n) {
        for(var _len = arguments.length, r = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
            r[_key - 1] = arguments[_key];
        }
        const o = e.get(n);
        if (o !== void 0) return o;
        const s = t(n, ...r);
        return e.set(n, s), s;
    };
}
const M = BigInt(0), N = BigInt(1), nt = BigInt(2), rr = BigInt(3), Ht = BigInt(4), Be = BigInt(5), Ce = BigInt(8);
function H(t, e) {
    const n = t % e;
    return n >= M ? n : e + n;
}
function or(t, e, n) {
    if (e < M) throw new Error("invalid exponent, negatives unsupported");
    if (n <= M) throw new Error("invalid modulus");
    if (n === N) return M;
    let r = N;
    for(; e > M;)e & N && (r = r * t % n), t = t * t % n, e >>= N;
    return r;
}
function J(t, e, n) {
    let r = t;
    for(; e-- > M;)r *= r, r %= n;
    return r;
}
function Ae(t, e) {
    if (t === M) throw new Error("invert: expected non-zero number");
    if (e <= M) throw new Error("invert: expected positive modulus, got " + e);
    let n = H(t, e), r = e, o = M, s = N;
    for(; n !== M;){
        const u = r / n, i = r % n, D = o - s * u;
        r = n, n = i, o = s, s = D;
    }
    if (r !== N) throw new Error("invert: does not exist");
    return H(o, e);
}
function sr(t) {
    const e = (t - N) / nt;
    let n, r, o;
    for(n = t - N, r = 0; n % nt === M; n /= nt, r++);
    for(o = nt; o < t && or(o, e, t) !== t - N; o++)if (o > 1e3) throw new Error("Cannot find square root: likely non-prime P");
    if (r === 1) {
        const a = (t + N) / Ht;
        return function(i, D) {
            const c = i.pow(D, a);
            if (!i.eql(i.sqr(c), D)) throw new Error("Cannot find square root");
            return c;
        };
    }
    const s = (n + N) / nt;
    return function(u, i) {
        if (u.pow(i, e) === u.neg(u.ONE)) throw new Error("Cannot find square root");
        let D = r, c = u.pow(u.mul(u.ONE, o), n), l = u.pow(i, s), p = u.pow(i, n);
        for(; !u.eql(p, u.ONE);){
            if (u.eql(p, u.ZERO)) return u.ZERO;
            let w = 1;
            for(let g = u.sqr(p); w < D && !u.eql(g, u.ONE); w++)g = u.sqr(g);
            const h = u.pow(c, N << BigInt(D - w - 1));
            c = u.sqr(h), l = u.mul(l, h), p = u.mul(p, c), D = w;
        }
        return l;
    };
}
function ir(t) {
    if (t % Ht === rr) {
        const e = (t + N) / Ht;
        return function(r, o) {
            const s = r.pow(o, e);
            if (!r.eql(r.sqr(s), o)) throw new Error("Cannot find square root");
            return s;
        };
    }
    if (t % Ce === Be) {
        const e = (t - Be) / Ce;
        return function(r, o) {
            const s = r.mul(o, nt), a = r.pow(s, e), u = r.mul(o, a), i = r.mul(r.mul(u, nt), a), D = r.mul(u, r.sub(i, r.ONE));
            if (!r.eql(r.sqr(D), o)) throw new Error("Cannot find square root");
            return D;
        };
    }
    return sr(t);
}
const ur = (t, e)=>(H(t, e) & N) === N, cr = [
    "create",
    "isValid",
    "is0",
    "neg",
    "inv",
    "sqrt",
    "sqr",
    "eql",
    "add",
    "sub",
    "mul",
    "pow",
    "div",
    "addN",
    "subN",
    "mulN",
    "sqrN"
];
function ar(t) {
    const e = {
        ORDER: "bigint",
        MASK: "bigint",
        BYTES: "isSafeInteger",
        BITS: "isSafeInteger"
    }, n = cr.reduce((r, o)=>(r[o] = "function", r), e);
    return Ot(t, n);
}
function fr(t, e, n) {
    if (n < M) throw new Error("invalid exponent, negatives unsupported");
    if (n === M) return t.ONE;
    if (n === N) return e;
    let r = t.ONE, o = e;
    for(; n > M;)n & N && (r = t.mul(r, o)), o = t.sqr(o), n >>= N;
    return r;
}
function Dr(t, e) {
    const n = new Array(e.length), r = e.reduce((s, a, u)=>t.is0(a) ? s : (n[u] = s, t.mul(s, a)), t.ONE), o = t.inv(r);
    return e.reduceRight((s, a, u)=>t.is0(a) ? s : (n[u] = t.mul(s, n[u]), t.mul(s, a)), o), n;
}
function me(t, e) {
    const n = e !== void 0 ? e : t.toString(2).length, r = Math.ceil(n / 8);
    return {
        nBitLength: n,
        nByteLength: r
    };
}
function _e(t, e) {
    let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    if (t <= M) throw new Error("invalid field: expected ORDER > 0, got " + t);
    const { nBitLength: o, nByteLength: s } = me(t, e);
    if (s > 2048) throw new Error("invalid field: expected ORDER of <= 2048 bytes");
    let a;
    const u = Object.freeze({
        ORDER: t,
        isLE: n,
        BITS: o,
        BYTES: s,
        MASK: er(o),
        ZERO: M,
        ONE: N,
        create: (i)=>H(i, t),
        isValid: (i)=>{
            if (typeof i != "bigint") throw new Error("invalid field element: expected bigint, got " + typeof i);
            return M <= i && i < t;
        },
        is0: (i)=>i === M,
        isOdd: (i)=>(i & N) === N,
        neg: (i)=>H(-i, t),
        eql: (i, D)=>i === D,
        sqr: (i)=>H(i * i, t),
        add: (i, D)=>H(i + D, t),
        sub: (i, D)=>H(i - D, t),
        mul: (i, D)=>H(i * D, t),
        pow: (i, D)=>fr(u, i, D),
        div: (i, D)=>H(i * Ae(D, t), t),
        sqrN: (i)=>i * i,
        addN: (i, D)=>i + D,
        subN: (i, D)=>i - D,
        mulN: (i, D)=>i * D,
        inv: (i)=>Ae(i, t),
        sqrt: r.sqrt || ((i)=>(a || (a = ir(t)), a(u, i))),
        invertBatch: (i)=>Dr(u, i),
        cmov: (i, D, c)=>c ? D : i,
        toBytes: (i)=>n ? Nt(i, s) : ge(i, s),
        fromBytes: (i)=>{
            if (i.length !== s) throw new Error("Field.fromBytes: expected " + s + " bytes, got " + i.length);
            return n ? Et(i) : Pn(i);
        }
    });
    return Object.freeze(u);
}
const Se = BigInt(0), gt = BigInt(1);
function zt(t, e) {
    const n = e.negate();
    return t ? n : e;
}
function ve(t, e) {
    if (!Number.isSafeInteger(t) || t <= 0 || t > e) throw new Error("invalid window size, expected [1.." + e + "], got W=" + t);
}
function Mt(t, e) {
    ve(t, e);
    const n = Math.ceil(e / t) + 1, r = 2 ** (t - 1);
    return {
        windows: n,
        windowSize: r
    };
}
function dr(t, e) {
    if (!Array.isArray(t)) throw new Error("array expected");
    t.forEach((n, r)=>{
        if (!(n instanceof e)) throw new Error("invalid point at index " + r);
    });
}
function hr(t, e) {
    if (!Array.isArray(t)) throw new Error("array of scalars expected");
    t.forEach((n, r)=>{
        if (!e.isValid(n)) throw new Error("invalid scalar at index " + r);
    });
}
const qt = new WeakMap, Ie = new WeakMap;
function $t(t) {
    return Ie.get(t) || 1;
}
function lr(t, e) {
    return {
        constTimeNegate: zt,
        hasPrecomputes (n) {
            return $t(n) !== 1;
        },
        unsafeLadder (n, r) {
            let o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : t.ZERO;
            let s = n;
            for(; r > Se;)r & gt && (o = o.add(s)), s = s.double(), r >>= gt;
            return o;
        },
        precomputeWindow (n, r) {
            const { windows: o, windowSize: s } = Mt(r, e), a = [];
            let u = n, i = u;
            for(let D = 0; D < o; D++){
                i = u, a.push(i);
                for(let c = 1; c < s; c++)i = i.add(u), a.push(i);
                u = i.double();
            }
            return a;
        },
        wNAF (n, r, o) {
            const { windows: s, windowSize: a } = Mt(n, e);
            let u = t.ZERO, i = t.BASE;
            const D = BigInt(2 ** n - 1), c = 2 ** n, l = BigInt(n);
            for(let p = 0; p < s; p++){
                const w = p * a;
                let h = Number(o & D);
                o >>= l, h > a && (h -= c, o += gt);
                const g = w, S = w + Math.abs(h) - 1, v = p % 2 !== 0, L = h < 0;
                h === 0 ? i = i.add(zt(v, r[g])) : u = u.add(zt(L, r[S]));
            }
            return {
                p: u,
                f: i
            };
        },
        wNAFUnsafe (n, r, o) {
            let s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : t.ZERO;
            const { windows: a, windowSize: u } = Mt(n, e), i = BigInt(2 ** n - 1), D = 2 ** n, c = BigInt(n);
            for(let l = 0; l < a; l++){
                const p = l * u;
                if (o === Se) break;
                let w = Number(o & i);
                if (o >>= c, w > u && (w -= D, o += gt), w === 0) continue;
                let h = r[p + Math.abs(w) - 1];
                w < 0 && (h = h.negate()), s = s.add(h);
            }
            return s;
        },
        getPrecomputes (n, r, o) {
            let s = qt.get(r);
            return s || (s = this.precomputeWindow(r, n), n !== 1 && qt.set(r, o(s))), s;
        },
        wNAFCached (n, r, o) {
            const s = $t(n);
            return this.wNAF(s, this.getPrecomputes(s, n, o), r);
        },
        wNAFCachedUnsafe (n, r, o, s) {
            const a = $t(n);
            return a === 1 ? this.unsafeLadder(n, r, s) : this.wNAFUnsafe(a, this.getPrecomputes(a, n, o), r, s);
        },
        setWindowSize (n, r) {
            ve(r, e), Ie.set(n, r), qt.delete(n);
        }
    };
}
function br(t, e, n, r) {
    if (dr(n, t), hr(r, e), n.length !== r.length) throw new Error("arrays of points and scalars must have equal length");
    const o = t.ZERO, s = tr(BigInt(n.length)), a = s > 12 ? s - 3 : s > 4 ? s - 2 : s ? 2 : 1, u = (1 << a) - 1, i = new Array(u + 1).fill(o), D = Math.floor((e.BITS - 1) / a) * a;
    let c = o;
    for(let l = D; l >= 0; l -= a){
        i.fill(o);
        for(let w = 0; w < r.length; w++){
            const h = r[w], g = Number(h >> BigInt(l) & BigInt(u));
            i[g] = i[g].add(n[w]);
        }
        let p = o;
        for(let w = i.length - 1, h = o; w > 0; w--)h = h.add(i[w]), p = p.add(h);
        if (c = c.add(p), l !== 0) for(let w = 0; w < a; w++)c = c.double();
    }
    return c;
}
function pr(t) {
    return ar(t.Fp), Ot(t, {
        n: "bigint",
        h: "bigint",
        Gx: "field",
        Gy: "field"
    }, {
        nBitLength: "isSafeInteger",
        nByteLength: "isSafeInteger"
    }), Object.freeze({
        ...me(t.n, t.nBitLength),
        ...t,
        p: t.Fp.ORDER
    });
}
const G = BigInt(0), j = BigInt(1), yt = BigInt(2), wr = BigInt(8), Er = {
    zip215: !0
};
function gr(t) {
    const e = pr(t);
    return Ot(t, {
        hash: "function",
        a: "bigint",
        d: "bigint",
        randomBytes: "function"
    }, {
        adjustScalarBytes: "function",
        domain: "function",
        uvRatio: "function",
        mapToCurve: "function"
    }), Object.freeze({
        ...e
    });
}
function yr(t) {
    const e = gr(t), { Fp: n, n: r, prehash: o, hash: s, randomBytes: a, nByteLength: u, h: i } = e, D = yt << BigInt(u * 8) - j, c = n.create, l = _e(e.n, e.nBitLength), p = e.uvRatio || ((y, f)=>{
        try {
            return {
                isValid: !0,
                value: n.sqrt(y * n.inv(f))
            };
        } catch (e) {
            return {
                isValid: !1,
                value: G
            };
        }
    }), w = e.adjustScalarBytes || ((y)=>y), h = e.domain || ((y, f, b)=>{
        if (Tt("phflag", b), f.length || b) throw new Error("Contexts/pre-hash are not supported");
        return y;
    });
    function g(y, f) {
        ft("coordinate " + y, f, G, D);
    }
    function S(y) {
        if (!(y instanceof d)) throw new Error("ExtendedPoint expected");
    }
    const v = xe((y, f)=>{
        const { ex: b, ey: E, ez: B } = y, C = y.is0();
        f == null && (f = C ? wr : n.inv(B));
        const A = c(b * f), U = c(E * f), _ = c(B * f);
        if (C) return {
            x: G,
            y: j
        };
        if (_ !== j) throw new Error("invZ was invalid");
        return {
            x: A,
            y: U
        };
    }), L = xe((y)=>{
        const { a: f, d: b } = e;
        if (y.is0()) throw new Error("bad point: ZERO");
        const { ex: E, ey: B, ez: C, et: A } = y, U = c(E * E), _ = c(B * B), T = c(C * C), $ = c(T * T), R = c(U * f), V = c(T * c(R + _)), Y = c($ + c(b * c(U * _)));
        if (V !== Y) throw new Error("bad point: equation left != right (1)");
        const Z = c(E * B), X = c(C * A);
        if (Z !== X) throw new Error("bad point: equation left != right (2)");
        return !0;
    });
    class d {
        get x() {
            return this.toAffine().x;
        }
        get y() {
            return this.toAffine().y;
        }
        static fromAffine(f) {
            if (f instanceof d) throw new Error("extended point not allowed");
            const { x: b, y: E } = f || {};
            return g("x", b), g("y", E), new d(b, E, j, c(b * E));
        }
        static normalizeZ(f) {
            const b = n.invertBatch(f.map((E)=>E.ez));
            return f.map((E, B)=>E.toAffine(b[B])).map(d.fromAffine);
        }
        static msm(f, b) {
            return br(d, l, f, b);
        }
        _setWindowSize(f) {
            q.setWindowSize(this, f);
        }
        assertValidity() {
            L(this);
        }
        equals(f) {
            S(f);
            const { ex: b, ey: E, ez: B } = this, { ex: C, ey: A, ez: U } = f, _ = c(b * U), T = c(C * B), $ = c(E * U), R = c(A * B);
            return _ === T && $ === R;
        }
        is0() {
            return this.equals(d.ZERO);
        }
        negate() {
            return new d(c(-this.ex), this.ey, this.ez, c(-this.et));
        }
        double() {
            const { a: f } = e, { ex: b, ey: E, ez: B } = this, C = c(b * b), A = c(E * E), U = c(yt * c(B * B)), _ = c(f * C), T = b + E, $ = c(c(T * T) - C - A), R = _ + A, V = R - U, Y = _ - A, Z = c($ * V), X = c(R * Y), et = c($ * Y), pt = c(V * R);
            return new d(Z, X, pt, et);
        }
        add(f) {
            S(f);
            const { a: b, d: E } = e, { ex: B, ey: C, ez: A, et: U } = this, { ex: _, ey: T, ez: $, et: R } = f;
            if (b === BigInt(-1)) {
                const re = c((C - B) * (T + _)), oe = c((C + B) * (T - _)), mt = c(oe - re);
                if (mt === G) return this.double();
                const se = c(A * yt * R), ie = c(U * yt * $), ue = ie + se, ce = oe + re, ae = ie - se, Dn = c(ue * mt), dn = c(ce * ae), hn = c(ue * ae), ln = c(mt * ce);
                return new d(Dn, dn, ln, hn);
            }
            const V = c(B * _), Y = c(C * T), Z = c(U * E * R), X = c(A * $), et = c((B + C) * (_ + T) - V - Y), pt = X - Z, ee = X + Z, ne = c(Y - b * V), un = c(et * pt), cn = c(ee * ne), an = c(et * ne), fn = c(pt * ee);
            return new d(un, cn, fn, an);
        }
        subtract(f) {
            return this.add(f.negate());
        }
        wNAF(f) {
            return q.wNAFCached(this, f, d.normalizeZ);
        }
        multiply(f) {
            const b = f;
            ft("scalar", b, j, r);
            const { p: E, f: B } = this.wNAF(b);
            return d.normalizeZ([
                E,
                B
            ])[0];
        }
        multiplyUnsafe(f) {
            let b = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : d.ZERO;
            const E = f;
            return ft("scalar", E, G, r), E === G ? F : this.is0() || E === j ? this : q.wNAFCachedUnsafe(this, E, d.normalizeZ, b);
        }
        isSmallOrder() {
            return this.multiplyUnsafe(i).is0();
        }
        isTorsionFree() {
            return q.unsafeLadder(this, r).is0();
        }
        toAffine(f) {
            return v(this, f);
        }
        clearCofactor() {
            const { h: f } = e;
            return f === j ? this : this.multiplyUnsafe(f);
        }
        static fromHex(f) {
            let b = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
            const { d: E, a: B } = e, C = n.BYTES;
            f = W("pointHex", f, C), Tt("zip215", b);
            const A = f.slice(), U = f[C - 1];
            A[C - 1] = U & -129;
            const _ = Et(A), T = b ? D : n.ORDER;
            ft("pointHex.y", _, G, T);
            const $ = c(_ * _), R = c($ - j), V = c(E * $ - B);
            let { isValid: Y, value: Z } = p(R, V);
            if (!Y) throw new Error("Point.fromHex: invalid y coordinate");
            const X = (Z & j) === j, et = (U & 128) !== 0;
            if (!b && Z === G && et) throw new Error("Point.fromHex: x=0 and x_0=1");
            return et !== X && (Z = c(-Z)), d.fromAffine({
                x: Z,
                y: _
            });
        }
        static fromPrivateKey(f) {
            return O(f).point;
        }
        toRawBytes() {
            const { x: f, y: b } = this.toAffine(), E = Nt(b, n.BYTES);
            return E[E.length - 1] |= f & j ? 128 : 0, E;
        }
        toHex() {
            return Ft(this.toRawBytes());
        }
        constructor(f, b, E, B){
            this.ex = f, this.ey = b, this.ez = E, this.et = B, g("x", f), g("y", b), g("z", E), g("t", B), Object.freeze(this);
        }
    }
    d.BASE = new d(e.Gx, e.Gy, j, c(e.Gx * e.Gy)), d.ZERO = new d(G, j, j, G);
    const { BASE: m, ZERO: F } = d, q = lr(d, u * 8);
    function z(y) {
        return H(y, r);
    }
    function I(y) {
        return z(Et(y));
    }
    function O(y) {
        const f = n.BYTES;
        y = W("private key", y, f);
        const b = W("hashed private key", s(y), 2 * f), E = w(b.slice(0, f)), B = b.slice(f, 2 * f), C = I(E), A = m.multiply(C), U = A.toRawBytes();
        return {
            head: E,
            prefix: B,
            scalar: C,
            point: A,
            pointBytes: U
        };
    }
    function ot(y) {
        return O(y).pointBytes;
    }
    function tt() {
        let y = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : new Uint8Array;
        for(var _len = arguments.length, f = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
            f[_key - 1] = arguments[_key];
        }
        const b = ye(...f);
        return I(s(h(b, W("context", y), !!o)));
    }
    function st(y, f) {
        let b = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        y = W("message", y), o && (y = o(y));
        const { prefix: E, scalar: B, pointBytes: C } = O(f), A = tt(b.context, E, y), U = m.multiply(A).toRawBytes(), _ = tt(b.context, U, C, y), T = z(A + _ * B);
        ft("signature.s", T, G, r);
        const $ = ye(U, Nt(T, n.BYTES));
        return W("result", $, n.BYTES * 2);
    }
    const at = Er;
    function Ct(y, f, b) {
        let E = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : at;
        const { context: B, zip215: C } = E, A = n.BYTES;
        y = W("signature", y, 2 * A), f = W("message", f), b = W("publicKey", b, A), C !== void 0 && Tt("zip215", C), o && (f = o(f));
        const U = Et(y.slice(A, 2 * A));
        let _, T, $;
        try {
            _ = d.fromHex(b, C), T = d.fromHex(y.slice(0, A), C), $ = m.multiplyUnsafe(U);
        } catch (e) {
            return !1;
        }
        if (!C && _.isSmallOrder()) return !1;
        const R = tt(B, T.toRawBytes(), _.toRawBytes(), f);
        return T.add(_.multiplyUnsafe(R)).subtract($).clearCofactor().equals(d.ZERO);
    }
    return m._setWindowSize(8), {
        CURVE: e,
        getPublicKey: ot,
        sign: st,
        verify: Ct,
        ExtendedPoint: d,
        utils: {
            getExtendedPublicKey: O,
            randomPrivateKey: ()=>a(n.BYTES),
            precompute () {
                let y = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 8, f = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : d.BASE;
                return f._setWindowSize(y), f.multiply(BigInt(3)), f;
            }
        }
    };
}
BigInt(0), BigInt(1);
const kt = BigInt("57896044618658097711785492504343953926634992332820282019728792003956564819949"), Ue = BigInt("19681161376707505956807079304988542015446066515923890162744021073123829784752");
BigInt(0);
const xr = BigInt(1), Te = BigInt(2);
BigInt(3);
const Br = BigInt(5), Cr = BigInt(8);
function Ar(t) {
    const e = BigInt(10), n = BigInt(20), r = BigInt(40), o = BigInt(80), s = kt, u = t * t % s * t % s, i = J(u, Te, s) * u % s, D = J(i, xr, s) * t % s, c = J(D, Br, s) * D % s, l = J(c, e, s) * c % s, p = J(l, n, s) * l % s, w = J(p, r, s) * p % s, h = J(w, o, s) * w % s, g = J(h, o, s) * w % s, S = J(g, e, s) * c % s;
    return {
        pow_p_5_8: J(S, Te, s) * t % s,
        b2: u
    };
}
function mr(t) {
    return t[0] &= 248, t[31] &= 127, t[31] |= 64, t;
}
function _r(t, e) {
    const n = kt, r = H(e * e * e, n), o = H(r * r * e, n), s = Ar(t * o).pow_p_5_8;
    let a = H(t * r * s, n);
    const u = H(e * a * a, n), i = a, D = H(a * Ue, n), c = u === t, l = u === H(-t, n), p = u === H(-t * Ue, n);
    return c && (a = i), (l || p) && (a = D), ur(a, n) && (a = H(-a, n)), {
        isValid: c || l,
        value: a
    };
}
const Sr = (()=>_e(kt, void 0, !0))(), vr = (()=>({
        a: BigInt(-1),
        d: BigInt("37095705934669439343138083508754565189542113879843219016388785533085940283555"),
        Fp: Sr,
        n: BigInt("7237005577332262213973186563042994240857116359379907606001950938285454250989"),
        h: Cr,
        Gx: BigInt("15112221349535400772501151409588531511454012693041857206046113283949847762202"),
        Gy: BigInt("46316835694926478169428394003475163141307993866256225615783033603165251855960"),
        hash: Kn,
        randomBytes: he,
        adjustScalarBytes: mr,
        uvRatio: _r
    }))(), Rt = (()=>yr(vr))(), jt = "EdDSA", Zt = "JWT", ut = ".", Dt = "base64url", Gt = "utf8", xt = "utf8", Vt = ":", Yt = "did", Jt = "key", dt = "base58btc", Kt = "z", Wt = "K36", Fe = 32, Ne = 32;
function Xt(t) {
    return globalThis.Buffer != null ? new Uint8Array(t.buffer, t.byteOffset, t.byteLength) : t;
}
function Le() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
    return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null ? Xt(globalThis.Buffer.allocUnsafe(t)) : new Uint8Array(t);
}
function Oe(t, e) {
    e || (e = t.reduce((o, s)=>o + s.length, 0));
    const n = Le(e);
    let r = 0;
    for (const o of t)n.set(o, r), r += o.length;
    return Xt(n);
}
function Ir(t, e) {
    if (t.length >= 255) throw new TypeError("Alphabet too long");
    for(var n = new Uint8Array(256), r = 0; r < n.length; r++)n[r] = 255;
    for(var o = 0; o < t.length; o++){
        var s = t.charAt(o), a = s.charCodeAt(0);
        if (n[a] !== 255) throw new TypeError(s + " is ambiguous");
        n[a] = o;
    }
    var u = t.length, i = t.charAt(0), D = Math.log(u) / Math.log(256), c = Math.log(256) / Math.log(u);
    function l(h) {
        if (h instanceof Uint8Array || (ArrayBuffer.isView(h) ? h = new Uint8Array(h.buffer, h.byteOffset, h.byteLength) : Array.isArray(h) && (h = Uint8Array.from(h))), !(h instanceof Uint8Array)) throw new TypeError("Expected Uint8Array");
        if (h.length === 0) return "";
        for(var g = 0, S = 0, v = 0, L = h.length; v !== L && h[v] === 0;)v++, g++;
        for(var d = (L - v) * c + 1 >>> 0, m = new Uint8Array(d); v !== L;){
            for(var F = h[v], q = 0, z = d - 1; (F !== 0 || q < S) && z !== -1; z--, q++)F += 256 * m[z] >>> 0, m[z] = F % u >>> 0, F = F / u >>> 0;
            if (F !== 0) throw new Error("Non-zero carry");
            S = q, v++;
        }
        for(var I = d - S; I !== d && m[I] === 0;)I++;
        for(var O = i.repeat(g); I < d; ++I)O += t.charAt(m[I]);
        return O;
    }
    function p(h) {
        if (typeof h != "string") throw new TypeError("Expected String");
        if (h.length === 0) return new Uint8Array;
        var g = 0;
        if (h[g] !== " ") {
            for(var S = 0, v = 0; h[g] === i;)S++, g++;
            for(var L = (h.length - g) * D + 1 >>> 0, d = new Uint8Array(L); h[g];){
                var m = n[h.charCodeAt(g)];
                if (m === 255) return;
                for(var F = 0, q = L - 1; (m !== 0 || F < v) && q !== -1; q--, F++)m += u * d[q] >>> 0, d[q] = m % 256 >>> 0, m = m / 256 >>> 0;
                if (m !== 0) throw new Error("Non-zero carry");
                v = F, g++;
            }
            if (h[g] !== " ") {
                for(var z = L - v; z !== L && d[z] === 0;)z++;
                for(var I = new Uint8Array(S + (L - z)), O = S; z !== L;)I[O++] = d[z++];
                return I;
            }
        }
    }
    function w(h) {
        var g = p(h);
        if (g) return g;
        throw new Error("Non-".concat(e, " character"));
    }
    return {
        encode: l,
        decodeUnsafe: p,
        decode: w
    };
}
var Ur = Ir, Tr = Ur;
const He = (t)=>{
    if (t instanceof Uint8Array && t.constructor.name === "Uint8Array") return t;
    if (t instanceof ArrayBuffer) return new Uint8Array(t);
    if (ArrayBuffer.isView(t)) return new Uint8Array(t.buffer, t.byteOffset, t.byteLength);
    throw new Error("Unknown type, must be binary type");
}, Fr = (t)=>new TextEncoder().encode(t), Nr = (t)=>new TextDecoder().decode(t);
class Lr {
    encode(e) {
        if (e instanceof Uint8Array) return "".concat(this.prefix).concat(this.baseEncode(e));
        throw Error("Unknown type, must be binary type");
    }
    constructor(e, n, r){
        this.name = e, this.prefix = n, this.baseEncode = r;
    }
}
class Or {
    decode(e) {
        if (typeof e == "string") {
            if (e.codePointAt(0) !== this.prefixCodePoint) throw Error("Unable to decode multibase string ".concat(JSON.stringify(e), ", ").concat(this.name, " decoder only supports inputs prefixed with ").concat(this.prefix));
            return this.baseDecode(e.slice(this.prefix.length));
        } else throw Error("Can only multibase decode strings");
    }
    or(e) {
        return ze(this, e);
    }
    constructor(e, n, r){
        if (this.name = e, this.prefix = n, n.codePointAt(0) === void 0) throw new Error("Invalid prefix character");
        this.prefixCodePoint = n.codePointAt(0), this.baseDecode = r;
    }
}
class Hr {
    or(e) {
        return ze(this, e);
    }
    decode(e) {
        const n = e[0], r = this.decoders[n];
        if (r) return r.decode(e);
        throw RangeError("Unable to decode multibase string ".concat(JSON.stringify(e), ", only inputs prefixed with ").concat(Object.keys(this.decoders), " are supported"));
    }
    constructor(e){
        this.decoders = e;
    }
}
const ze = (t, e)=>new Hr({
        ...t.decoders || {
            [t.prefix]: t
        },
        ...e.decoders || {
            [e.prefix]: e
        }
    });
class zr {
    encode(e) {
        return this.encoder.encode(e);
    }
    decode(e) {
        return this.decoder.decode(e);
    }
    constructor(e, n, r, o){
        this.name = e, this.prefix = n, this.baseEncode = r, this.baseDecode = o, this.encoder = new Lr(e, n, r), this.decoder = new Or(e, n, o);
    }
}
const Bt = (param)=>{
    let { name: t, prefix: e, encode: n, decode: r } = param;
    return new zr(t, e, n, r);
}, ht = (param)=>{
    let { prefix: t, name: e, alphabet: n } = param;
    const { encode: r, decode: o } = Tr(n, e);
    return Bt({
        prefix: t,
        name: e,
        encode: r,
        decode: (s)=>He(o(s))
    });
}, Mr = (t, e, n, r)=>{
    const o = {};
    for(let c = 0; c < e.length; ++c)o[e[c]] = c;
    let s = t.length;
    for(; t[s - 1] === "=";)--s;
    const a = new Uint8Array(s * n / 8 | 0);
    let u = 0, i = 0, D = 0;
    for(let c = 0; c < s; ++c){
        const l = o[t[c]];
        if (l === void 0) throw new SyntaxError("Non-".concat(r, " character"));
        i = i << n | l, u += n, u >= 8 && (u -= 8, a[D++] = 255 & i >> u);
    }
    if (u >= n || 255 & i << 8 - u) throw new SyntaxError("Unexpected end of data");
    return a;
}, qr = (t, e, n)=>{
    const r = e[e.length - 1] === "=", o = (1 << n) - 1;
    let s = "", a = 0, u = 0;
    for(let i = 0; i < t.length; ++i)for(u = u << 8 | t[i], a += 8; a > n;)a -= n, s += e[o & u >> a];
    if (a && (s += e[o & u << n - a]), r) for(; s.length * n & 7;)s += "=";
    return s;
}, k = (param)=>{
    let { name: t, prefix: e, bitsPerChar: n, alphabet: r } = param;
    return Bt({
        prefix: e,
        name: t,
        encode (o) {
            return qr(o, r, n);
        },
        decode (o) {
            return Mr(o, r, n, t);
        }
    });
}, $r = Bt({
    prefix: "\0",
    name: "identity",
    encode: (t)=>Nr(t),
    decode: (t)=>Fr(t)
});
var kr = Object.freeze({
    __proto__: null,
    identity: $r
});
const Rr = k({
    prefix: "0",
    name: "base2",
    alphabet: "01",
    bitsPerChar: 1
});
var jr = Object.freeze({
    __proto__: null,
    base2: Rr
});
const Zr = k({
    prefix: "7",
    name: "base8",
    alphabet: "01234567",
    bitsPerChar: 3
});
var Gr = Object.freeze({
    __proto__: null,
    base8: Zr
});
const Vr = ht({
    prefix: "9",
    name: "base10",
    alphabet: "0123456789"
});
var Yr = Object.freeze({
    __proto__: null,
    base10: Vr
});
const Jr = k({
    prefix: "f",
    name: "base16",
    alphabet: "0123456789abcdef",
    bitsPerChar: 4
}), Kr = k({
    prefix: "F",
    name: "base16upper",
    alphabet: "0123456789ABCDEF",
    bitsPerChar: 4
});
var Wr = Object.freeze({
    __proto__: null,
    base16: Jr,
    base16upper: Kr
});
const Xr = k({
    prefix: "b",
    name: "base32",
    alphabet: "abcdefghijklmnopqrstuvwxyz234567",
    bitsPerChar: 5
}), Pr = k({
    prefix: "B",
    name: "base32upper",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
    bitsPerChar: 5
}), Qr = k({
    prefix: "c",
    name: "base32pad",
    alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
    bitsPerChar: 5
}), to = k({
    prefix: "C",
    name: "base32padupper",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
    bitsPerChar: 5
}), eo = k({
    prefix: "v",
    name: "base32hex",
    alphabet: "0123456789abcdefghijklmnopqrstuv",
    bitsPerChar: 5
}), no = k({
    prefix: "V",
    name: "base32hexupper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
    bitsPerChar: 5
}), ro = k({
    prefix: "t",
    name: "base32hexpad",
    alphabet: "0123456789abcdefghijklmnopqrstuv=",
    bitsPerChar: 5
}), oo = k({
    prefix: "T",
    name: "base32hexpadupper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
    bitsPerChar: 5
}), so = k({
    prefix: "h",
    name: "base32z",
    alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
    bitsPerChar: 5
});
var io = Object.freeze({
    __proto__: null,
    base32: Xr,
    base32upper: Pr,
    base32pad: Qr,
    base32padupper: to,
    base32hex: eo,
    base32hexupper: no,
    base32hexpad: ro,
    base32hexpadupper: oo,
    base32z: so
});
const uo = ht({
    prefix: "k",
    name: "base36",
    alphabet: "0123456789abcdefghijklmnopqrstuvwxyz"
}), co = ht({
    prefix: "K",
    name: "base36upper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
});
var ao = Object.freeze({
    __proto__: null,
    base36: uo,
    base36upper: co
});
const fo = ht({
    name: "base58btc",
    prefix: "z",
    alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
}), Do = ht({
    name: "base58flickr",
    prefix: "Z",
    alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"
});
var ho = Object.freeze({
    __proto__: null,
    base58btc: fo,
    base58flickr: Do
});
const lo = k({
    prefix: "m",
    name: "base64",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
    bitsPerChar: 6
}), bo = k({
    prefix: "M",
    name: "base64pad",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    bitsPerChar: 6
}), po = k({
    prefix: "u",
    name: "base64url",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
    bitsPerChar: 6
}), wo = k({
    prefix: "U",
    name: "base64urlpad",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
    bitsPerChar: 6
});
var Eo = Object.freeze({
    __proto__: null,
    base64: lo,
    base64pad: bo,
    base64url: po,
    base64urlpad: wo
});
const Me = Array.from("\u{1F680}\u{1FA90}\u2604\u{1F6F0}\u{1F30C}\u{1F311}\u{1F312}\u{1F313}\u{1F314}\u{1F315}\u{1F316}\u{1F317}\u{1F318}\u{1F30D}\u{1F30F}\u{1F30E}\u{1F409}\u2600\u{1F4BB}\u{1F5A5}\u{1F4BE}\u{1F4BF}\u{1F602}\u2764\u{1F60D}\u{1F923}\u{1F60A}\u{1F64F}\u{1F495}\u{1F62D}\u{1F618}\u{1F44D}\u{1F605}\u{1F44F}\u{1F601}\u{1F525}\u{1F970}\u{1F494}\u{1F496}\u{1F499}\u{1F622}\u{1F914}\u{1F606}\u{1F644}\u{1F4AA}\u{1F609}\u263A\u{1F44C}\u{1F917}\u{1F49C}\u{1F614}\u{1F60E}\u{1F607}\u{1F339}\u{1F926}\u{1F389}\u{1F49E}\u270C\u2728\u{1F937}\u{1F631}\u{1F60C}\u{1F338}\u{1F64C}\u{1F60B}\u{1F497}\u{1F49A}\u{1F60F}\u{1F49B}\u{1F642}\u{1F493}\u{1F929}\u{1F604}\u{1F600}\u{1F5A4}\u{1F603}\u{1F4AF}\u{1F648}\u{1F447}\u{1F3B6}\u{1F612}\u{1F92D}\u2763\u{1F61C}\u{1F48B}\u{1F440}\u{1F62A}\u{1F611}\u{1F4A5}\u{1F64B}\u{1F61E}\u{1F629}\u{1F621}\u{1F92A}\u{1F44A}\u{1F973}\u{1F625}\u{1F924}\u{1F449}\u{1F483}\u{1F633}\u270B\u{1F61A}\u{1F61D}\u{1F634}\u{1F31F}\u{1F62C}\u{1F643}\u{1F340}\u{1F337}\u{1F63B}\u{1F613}\u2B50\u2705\u{1F97A}\u{1F308}\u{1F608}\u{1F918}\u{1F4A6}\u2714\u{1F623}\u{1F3C3}\u{1F490}\u2639\u{1F38A}\u{1F498}\u{1F620}\u261D\u{1F615}\u{1F33A}\u{1F382}\u{1F33B}\u{1F610}\u{1F595}\u{1F49D}\u{1F64A}\u{1F639}\u{1F5E3}\u{1F4AB}\u{1F480}\u{1F451}\u{1F3B5}\u{1F91E}\u{1F61B}\u{1F534}\u{1F624}\u{1F33C}\u{1F62B}\u26BD\u{1F919}\u2615\u{1F3C6}\u{1F92B}\u{1F448}\u{1F62E}\u{1F646}\u{1F37B}\u{1F343}\u{1F436}\u{1F481}\u{1F632}\u{1F33F}\u{1F9E1}\u{1F381}\u26A1\u{1F31E}\u{1F388}\u274C\u270A\u{1F44B}\u{1F630}\u{1F928}\u{1F636}\u{1F91D}\u{1F6B6}\u{1F4B0}\u{1F353}\u{1F4A2}\u{1F91F}\u{1F641}\u{1F6A8}\u{1F4A8}\u{1F92C}\u2708\u{1F380}\u{1F37A}\u{1F913}\u{1F619}\u{1F49F}\u{1F331}\u{1F616}\u{1F476}\u{1F974}\u25B6\u27A1\u2753\u{1F48E}\u{1F4B8}\u2B07\u{1F628}\u{1F31A}\u{1F98B}\u{1F637}\u{1F57A}\u26A0\u{1F645}\u{1F61F}\u{1F635}\u{1F44E}\u{1F932}\u{1F920}\u{1F927}\u{1F4CC}\u{1F535}\u{1F485}\u{1F9D0}\u{1F43E}\u{1F352}\u{1F617}\u{1F911}\u{1F30A}\u{1F92F}\u{1F437}\u260E\u{1F4A7}\u{1F62F}\u{1F486}\u{1F446}\u{1F3A4}\u{1F647}\u{1F351}\u2744\u{1F334}\u{1F4A3}\u{1F438}\u{1F48C}\u{1F4CD}\u{1F940}\u{1F922}\u{1F445}\u{1F4A1}\u{1F4A9}\u{1F450}\u{1F4F8}\u{1F47B}\u{1F910}\u{1F92E}\u{1F3BC}\u{1F975}\u{1F6A9}\u{1F34E}\u{1F34A}\u{1F47C}\u{1F48D}\u{1F4E3}\u{1F942}"), go = Me.reduce((t, e, n)=>(t[n] = e, t), []), yo = Me.reduce((t, e, n)=>(t[e.codePointAt(0)] = n, t), []);
function xo(t) {
    return t.reduce((e, n)=>(e += go[n], e), "");
}
function Bo(t) {
    const e = [];
    for (const n of t){
        const r = yo[n.codePointAt(0)];
        if (r === void 0) throw new Error("Non-base256emoji character: ".concat(n));
        e.push(r);
    }
    return new Uint8Array(e);
}
const Co = Bt({
    prefix: "\u{1F680}",
    name: "base256emoji",
    encode: xo,
    decode: Bo
});
var Ao = Object.freeze({
    __proto__: null,
    base256emoji: Co
}), mo = $e, qe = 128, _o = 127, So = ~_o, vo = Math.pow(2, 31);
function $e(t, e, n) {
    e = e || [], n = n || 0;
    for(var r = n; t >= vo;)e[n++] = t & 255 | qe, t /= 128;
    for(; t & So;)e[n++] = t & 255 | qe, t >>>= 7;
    return e[n] = t | 0, $e.bytes = n - r + 1, e;
}
var Io = Pt, Uo = 128, ke = 127;
function Pt(t, r) {
    var n = 0, r = r || 0, o = 0, s = r, a, u = t.length;
    do {
        if (s >= u) throw Pt.bytes = 0, new RangeError("Could not decode varint");
        a = t[s++], n += o < 28 ? (a & ke) << o : (a & ke) * Math.pow(2, o), o += 7;
    }while (a >= Uo)
    return Pt.bytes = s - r, n;
}
var To = Math.pow(2, 7), Fo = Math.pow(2, 14), No = Math.pow(2, 21), Lo = Math.pow(2, 28), Oo = Math.pow(2, 35), Ho = Math.pow(2, 42), zo = Math.pow(2, 49), Mo = Math.pow(2, 56), qo = Math.pow(2, 63), $o = function(t) {
    return t < To ? 1 : t < Fo ? 2 : t < No ? 3 : t < Lo ? 4 : t < Oo ? 5 : t < Ho ? 6 : t < zo ? 7 : t < Mo ? 8 : t < qo ? 9 : 10;
}, ko = {
    encode: mo,
    decode: Io,
    encodingLength: $o
}, Re = ko;
const je = function(t, e) {
    let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0;
    return Re.encode(t, e, n), e;
}, Ze = (t)=>Re.encodingLength(t), Qt = (t, e)=>{
    const n = e.byteLength, r = Ze(t), o = r + Ze(n), s = new Uint8Array(o + n);
    return je(t, s, 0), je(n, s, r), s.set(e, o), new Ro(t, n, e, s);
};
class Ro {
    constructor(e, n, r, o){
        this.code = e, this.size = n, this.digest = r, this.bytes = o;
    }
}
const Ge = (param)=>{
    let { name: t, code: e, encode: n } = param;
    return new jo(t, e, n);
};
class jo {
    digest(e) {
        if (e instanceof Uint8Array) {
            const n = this.encode(e);
            return n instanceof Uint8Array ? Qt(this.code, n) : n.then((r)=>Qt(this.code, r));
        } else throw Error("Unknown type, must be binary type");
    }
    constructor(e, n, r){
        this.name = e, this.code = n, this.encode = r;
    }
}
const Ve = (t)=>async (e)=>new Uint8Array(await crypto.subtle.digest(t, e)), Zo = Ge({
    name: "sha2-256",
    code: 18,
    encode: Ve("SHA-256")
}), Go = Ge({
    name: "sha2-512",
    code: 19,
    encode: Ve("SHA-512")
});
var Vo = Object.freeze({
    __proto__: null,
    sha256: Zo,
    sha512: Go
});
const Ye = 0, Yo = "identity", Je = He, Jo = (t)=>Qt(Ye, Je(t)), Ko = {
    code: Ye,
    name: Yo,
    encode: Je,
    digest: Jo
};
var Wo = Object.freeze({
    __proto__: null,
    identity: Ko
});
new TextEncoder, new TextDecoder;
const Ke = {
    ...kr,
    ...jr,
    ...Gr,
    ...Yr,
    ...Wr,
    ...io,
    ...ao,
    ...ho,
    ...Eo,
    ...Ao
};
({
    ...Vo,
    ...Wo
});
function We(t, e, n, r) {
    return {
        name: t,
        prefix: e,
        encoder: {
            name: t,
            prefix: e,
            encode: n
        },
        decoder: {
            decode: r
        }
    };
}
const Xe = We("utf8", "u", (t)=>"u" + new TextDecoder("utf8").decode(t), (t)=>new TextEncoder().encode(t.substring(1))), te = We("ascii", "a", (t)=>{
    let e = "a";
    for(let n = 0; n < t.length; n++)e += String.fromCharCode(t[n]);
    return e;
}, (t)=>{
    t = t.substring(1);
    const e = Le(t.length);
    for(let n = 0; n < t.length; n++)e[n] = t.charCodeAt(n);
    return e;
}), Pe = {
    utf8: Xe,
    "utf-8": Xe,
    hex: Ke.base16,
    latin1: te,
    ascii: te,
    binary: te,
    ...Ke
};
function ct(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "utf8";
    const n = Pe[e];
    if (!n) throw new Error('Unsupported encoding "'.concat(e, '"'));
    return (e === "utf8" || e === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? globalThis.Buffer.from(t.buffer, t.byteOffset, t.byteLength).toString("utf8") : n.encoder.encode(t).substring(1);
}
function rt(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "utf8";
    const n = Pe[e];
    if (!n) throw new Error('Unsupported encoding "'.concat(e, '"'));
    return (e === "utf8" || e === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? Xt(globalThis.Buffer.from(t, "utf-8")) : n.decoder.decode("".concat(n.prefix).concat(t));
}
function lt(t) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$walletconnect$2f$safe$2d$json$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeJsonParse"])(ct(rt(t, Dt), Gt));
}
function bt(t) {
    return ct(rt((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$walletconnect$2f$safe$2d$json$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeJsonStringify"])(t), Gt), Dt);
}
function Qe(t) {
    const e = rt(Wt, dt), n = Kt + ct(Oe([
        e,
        t
    ]), dt);
    return [
        Yt,
        Jt,
        n
    ].join(Vt);
}
function tn(t) {
    const [e, n, r] = t.split(Vt);
    if (e !== Yt || n !== Jt) throw new Error('Issuer must be a DID with method "key"');
    if (r.slice(0, 1) !== Kt) throw new Error("Issuer must be a key in mulicodec format");
    const o = rt(r.slice(1), dt);
    if (ct(o.slice(0, 2), dt) !== Wt) throw new Error('Issuer must be a public key with type "Ed25519"');
    const s = o.slice(2);
    if (s.length !== Fe) throw new Error("Issuer must be a public key with length 32 bytes");
    return s;
}
function en(t) {
    return ct(t, Dt);
}
function nn(t) {
    return rt(t, Dt);
}
function rn(t) {
    return rt([
        bt(t.header),
        bt(t.payload)
    ].join(ut), xt);
}
function Xo(t) {
    const e = ct(t, xt).split(ut), n = lt(e[0]), r = lt(e[1]);
    return {
        header: n,
        payload: r
    };
}
function on(t) {
    return [
        bt(t.header),
        bt(t.payload),
        en(t.signature)
    ].join(ut);
}
function sn(t) {
    const e = t.split(ut), n = lt(e[0]), r = lt(e[1]), o = nn(e[2]), s = rt(e.slice(0, 2).join(ut), xt);
    return {
        header: n,
        payload: r,
        signature: o,
        data: s
    };
}
function Po() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : he(Ne);
    const e = Rt.getPublicKey(t);
    return {
        secretKey: Oe([
            t,
            e
        ]),
        publicKey: e
    };
}
async function Qo(t, e, n, r) {
    let o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fromMiliseconds"])(Date.now());
    const s = {
        alg: jt,
        typ: Zt
    }, a = Qe(r.publicKey), u = o + n, i = {
        iss: a,
        sub: t,
        aud: e,
        iat: o,
        exp: u
    }, D = rn({
        header: s,
        payload: i
    }), c = Rt.sign(D, r.secretKey.slice(0, 32));
    return on({
        header: s,
        payload: i,
        signature: c
    });
}
async function ts(t) {
    const { header: e, payload: n, data: r, signature: o } = sn(t);
    if (e.alg !== jt || e.typ !== Zt) throw new Error("JWT must use EdDSA algorithm");
    const s = tn(n.iss);
    return Rt.verify(o, r, s);
}
;
 //# sourceMappingURL=index.es.js.map
}),
"[project]/frontend/node_modules/@reown/appkit-controllers/node_modules/@walletconnect/relay-auth/dist/index.es.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DATA_ENCODING",
    ()=>xt,
    "DID_DELIMITER",
    ()=>Vt,
    "DID_METHOD",
    ()=>Jt,
    "DID_PREFIX",
    ()=>Yt,
    "JSON_ENCODING",
    ()=>Gt,
    "JWT_DELIMITER",
    ()=>ut,
    "JWT_ENCODING",
    ()=>Dt,
    "JWT_IRIDIUM_ALG",
    ()=>jt,
    "JWT_IRIDIUM_TYP",
    ()=>Zt,
    "KEY_PAIR_SEED_LENGTH",
    ()=>Ne,
    "MULTICODEC_ED25519_BASE",
    ()=>Kt,
    "MULTICODEC_ED25519_ENCODING",
    ()=>dt,
    "MULTICODEC_ED25519_HEADER",
    ()=>Wt,
    "MULTICODEC_ED25519_LENGTH",
    ()=>Fe,
    "decodeData",
    ()=>Xo,
    "decodeIss",
    ()=>tn,
    "decodeJSON",
    ()=>lt,
    "decodeJWT",
    ()=>sn,
    "decodeSig",
    ()=>nn,
    "encodeData",
    ()=>rn,
    "encodeIss",
    ()=>Qe,
    "encodeJSON",
    ()=>bt,
    "encodeJWT",
    ()=>on,
    "encodeSig",
    ()=>en,
    "generateKeyPair",
    ()=>Po,
    "signJWT",
    ()=>Qo,
    "verifyJWT",
    ()=>ts
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@walletconnect/time/dist/cjs/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$walletconnect$2f$safe$2d$json$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@walletconnect/safe-json/dist/esm/index.js [app-client] (ecmascript)");
;
;
function En(t) {
    return t instanceof Uint8Array || ArrayBuffer.isView(t) && t.constructor.name === "Uint8Array";
}
function fe(t) {
    for(var _len = arguments.length, e = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
        e[_key - 1] = arguments[_key];
    }
    if (!En(t)) throw new Error("Uint8Array expected");
    if (e.length > 0 && !e.includes(t.length)) throw new Error("Uint8Array expected of length " + e + ", got length=" + t.length);
}
function De(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
    if (t.destroyed) throw new Error("Hash instance has been destroyed");
    if (e && t.finished) throw new Error("Hash#digest() has already been called");
}
function gn(t, e) {
    fe(t);
    const n = e.outputLen;
    if (t.length < n) throw new Error("digestInto() expects output buffer of length at least " + n);
}
const it = typeof globalThis == "object" && "crypto" in globalThis ? globalThis.crypto : void 0; /*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */ 
const _t = (t)=>new DataView(t.buffer, t.byteOffset, t.byteLength);
function yn(t) {
    if (typeof t != "string") throw new Error("utf8ToBytes expected string, got " + typeof t);
    return new Uint8Array(new TextEncoder().encode(t));
}
function de(t) {
    return typeof t == "string" && (t = yn(t)), fe(t), t;
}
class xn {
    clone() {
        return this._cloneInto();
    }
}
function Bn(t) {
    const e = (r)=>t().update(de(r)).digest(), n = t();
    return e.outputLen = n.outputLen, e.blockLen = n.blockLen, e.create = ()=>t(), e;
}
function he() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 32;
    if (it && typeof it.getRandomValues == "function") return it.getRandomValues(new Uint8Array(t));
    if (it && typeof it.randomBytes == "function") return it.randomBytes(t);
    throw new Error("crypto.getRandomValues must be defined");
}
function Cn(t, e, n, r) {
    if (typeof t.setBigUint64 == "function") return t.setBigUint64(e, n, r);
    const o = BigInt(32), s = BigInt(4294967295), a = Number(n >> o & s), u = Number(n & s), i = r ? 4 : 0, D = r ? 0 : 4;
    t.setUint32(e + i, a, r), t.setUint32(e + D, u, r);
}
class An extends xn {
    update(e) {
        De(this);
        const { view: n, buffer: r, blockLen: o } = this;
        e = de(e);
        const s = e.length;
        for(let a = 0; a < s;){
            const u = Math.min(o - this.pos, s - a);
            if (u === o) {
                const i = _t(e);
                for(; o <= s - a; a += o)this.process(i, a);
                continue;
            }
            r.set(e.subarray(a, a + u), this.pos), this.pos += u, a += u, this.pos === o && (this.process(n, 0), this.pos = 0);
        }
        return this.length += e.length, this.roundClean(), this;
    }
    digestInto(e) {
        De(this), gn(e, this), this.finished = !0;
        const { buffer: n, view: r, blockLen: o, isLE: s } = this;
        let { pos: a } = this;
        n[a++] = 128, this.buffer.subarray(a).fill(0), this.padOffset > o - a && (this.process(r, 0), a = 0);
        for(let l = a; l < o; l++)n[l] = 0;
        Cn(r, o - 8, BigInt(this.length * 8), s), this.process(r, 0);
        const u = _t(e), i = this.outputLen;
        if (i % 4) throw new Error("_sha2: outputLen should be aligned to 32bit");
        const D = i / 4, c = this.get();
        if (D > c.length) throw new Error("_sha2: outputLen bigger than state");
        for(let l = 0; l < D; l++)u.setUint32(4 * l, c[l], s);
    }
    digest() {
        const { buffer: e, outputLen: n } = this;
        this.digestInto(e);
        const r = e.slice(0, n);
        return this.destroy(), r;
    }
    _cloneInto(e) {
        e || (e = new this.constructor), e.set(...this.get());
        const { blockLen: n, buffer: r, length: o, finished: s, destroyed: a, pos: u } = this;
        return e.length = o, e.pos = u, e.finished = s, e.destroyed = a, o % n && e.buffer.set(r), e;
    }
    constructor(e, n, r, o){
        super(), this.blockLen = e, this.outputLen = n, this.padOffset = r, this.isLE = o, this.finished = !1, this.length = 0, this.pos = 0, this.destroyed = !1, this.buffer = new Uint8Array(e), this.view = _t(this.buffer);
    }
}
const wt = BigInt(2 ** 32 - 1), St = BigInt(32);
function le(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    return e ? {
        h: Number(t & wt),
        l: Number(t >> St & wt)
    } : {
        h: Number(t >> St & wt) | 0,
        l: Number(t & wt) | 0
    };
}
function mn(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    let n = new Uint32Array(t.length), r = new Uint32Array(t.length);
    for(let o = 0; o < t.length; o++){
        const { h: s, l: a } = le(t[o], e);
        [n[o], r[o]] = [
            s,
            a
        ];
    }
    return [
        n,
        r
    ];
}
const _n = (t, e)=>BigInt(t >>> 0) << St | BigInt(e >>> 0), Sn = (t, e, n)=>t >>> n, vn = (t, e, n)=>t << 32 - n | e >>> n, In = (t, e, n)=>t >>> n | e << 32 - n, Un = (t, e, n)=>t << 32 - n | e >>> n, Tn = (t, e, n)=>t << 64 - n | e >>> n - 32, Fn = (t, e, n)=>t >>> n - 32 | e << 64 - n, Nn = (t, e)=>e, Ln = (t, e)=>t, On = (t, e, n)=>t << n | e >>> 32 - n, Hn = (t, e, n)=>e << n | t >>> 32 - n, zn = (t, e, n)=>e << n - 32 | t >>> 64 - n, Mn = (t, e, n)=>t << n - 32 | e >>> 64 - n;
function qn(t, e, n, r) {
    const o = (e >>> 0) + (r >>> 0);
    return {
        h: t + n + (o / 2 ** 32 | 0) | 0,
        l: o | 0
    };
}
const $n = (t, e, n)=>(t >>> 0) + (e >>> 0) + (n >>> 0), kn = (t, e, n, r)=>e + n + r + (t / 2 ** 32 | 0) | 0, Rn = (t, e, n, r)=>(t >>> 0) + (e >>> 0) + (n >>> 0) + (r >>> 0), jn = (t, e, n, r, o)=>e + n + r + o + (t / 2 ** 32 | 0) | 0, Zn = (t, e, n, r, o)=>(t >>> 0) + (e >>> 0) + (n >>> 0) + (r >>> 0) + (o >>> 0), Gn = (t, e, n, r, o, s)=>e + n + r + o + s + (t / 2 ** 32 | 0) | 0, x = {
    fromBig: le,
    split: mn,
    toBig: _n,
    shrSH: Sn,
    shrSL: vn,
    rotrSH: In,
    rotrSL: Un,
    rotrBH: Tn,
    rotrBL: Fn,
    rotr32H: Nn,
    rotr32L: Ln,
    rotlSH: On,
    rotlSL: Hn,
    rotlBH: zn,
    rotlBL: Mn,
    add: qn,
    add3L: $n,
    add3H: kn,
    add4L: Rn,
    add4H: jn,
    add5H: Gn,
    add5L: Zn
}, [Vn, Yn] = (()=>x.split([
        "0x428a2f98d728ae22",
        "0x7137449123ef65cd",
        "0xb5c0fbcfec4d3b2f",
        "0xe9b5dba58189dbbc",
        "0x3956c25bf348b538",
        "0x59f111f1b605d019",
        "0x923f82a4af194f9b",
        "0xab1c5ed5da6d8118",
        "0xd807aa98a3030242",
        "0x12835b0145706fbe",
        "0x243185be4ee4b28c",
        "0x550c7dc3d5ffb4e2",
        "0x72be5d74f27b896f",
        "0x80deb1fe3b1696b1",
        "0x9bdc06a725c71235",
        "0xc19bf174cf692694",
        "0xe49b69c19ef14ad2",
        "0xefbe4786384f25e3",
        "0x0fc19dc68b8cd5b5",
        "0x240ca1cc77ac9c65",
        "0x2de92c6f592b0275",
        "0x4a7484aa6ea6e483",
        "0x5cb0a9dcbd41fbd4",
        "0x76f988da831153b5",
        "0x983e5152ee66dfab",
        "0xa831c66d2db43210",
        "0xb00327c898fb213f",
        "0xbf597fc7beef0ee4",
        "0xc6e00bf33da88fc2",
        "0xd5a79147930aa725",
        "0x06ca6351e003826f",
        "0x142929670a0e6e70",
        "0x27b70a8546d22ffc",
        "0x2e1b21385c26c926",
        "0x4d2c6dfc5ac42aed",
        "0x53380d139d95b3df",
        "0x650a73548baf63de",
        "0x766a0abb3c77b2a8",
        "0x81c2c92e47edaee6",
        "0x92722c851482353b",
        "0xa2bfe8a14cf10364",
        "0xa81a664bbc423001",
        "0xc24b8b70d0f89791",
        "0xc76c51a30654be30",
        "0xd192e819d6ef5218",
        "0xd69906245565a910",
        "0xf40e35855771202a",
        "0x106aa07032bbd1b8",
        "0x19a4c116b8d2d0c8",
        "0x1e376c085141ab53",
        "0x2748774cdf8eeb99",
        "0x34b0bcb5e19b48a8",
        "0x391c0cb3c5c95a63",
        "0x4ed8aa4ae3418acb",
        "0x5b9cca4f7763e373",
        "0x682e6ff3d6b2b8a3",
        "0x748f82ee5defb2fc",
        "0x78a5636f43172f60",
        "0x84c87814a1f0ab72",
        "0x8cc702081a6439ec",
        "0x90befffa23631e28",
        "0xa4506cebde82bde9",
        "0xbef9a3f7b2c67915",
        "0xc67178f2e372532b",
        "0xca273eceea26619c",
        "0xd186b8c721c0c207",
        "0xeada7dd6cde0eb1e",
        "0xf57d4f7fee6ed178",
        "0x06f067aa72176fba",
        "0x0a637dc5a2c898a6",
        "0x113f9804bef90dae",
        "0x1b710b35131c471b",
        "0x28db77f523047d84",
        "0x32caab7b40c72493",
        "0x3c9ebe0a15c9bebc",
        "0x431d67c49c100d4c",
        "0x4cc5d4becb3e42b6",
        "0x597f299cfc657e2a",
        "0x5fcb6fab3ad6faec",
        "0x6c44198c4a475817"
    ].map((t)=>BigInt(t))))(), P = new Uint32Array(80), Q = new Uint32Array(80);
class Jn extends An {
    get() {
        const { Ah: e, Al: n, Bh: r, Bl: o, Ch: s, Cl: a, Dh: u, Dl: i, Eh: D, El: c, Fh: l, Fl: p, Gh: w, Gl: h, Hh: g, Hl: S } = this;
        return [
            e,
            n,
            r,
            o,
            s,
            a,
            u,
            i,
            D,
            c,
            l,
            p,
            w,
            h,
            g,
            S
        ];
    }
    set(e, n, r, o, s, a, u, i, D, c, l, p, w, h, g, S) {
        this.Ah = e | 0, this.Al = n | 0, this.Bh = r | 0, this.Bl = o | 0, this.Ch = s | 0, this.Cl = a | 0, this.Dh = u | 0, this.Dl = i | 0, this.Eh = D | 0, this.El = c | 0, this.Fh = l | 0, this.Fl = p | 0, this.Gh = w | 0, this.Gl = h | 0, this.Hh = g | 0, this.Hl = S | 0;
    }
    process(e, n) {
        for(let d = 0; d < 16; d++, n += 4)P[d] = e.getUint32(n), Q[d] = e.getUint32(n += 4);
        for(let d = 16; d < 80; d++){
            const m = P[d - 15] | 0, F = Q[d - 15] | 0, q = x.rotrSH(m, F, 1) ^ x.rotrSH(m, F, 8) ^ x.shrSH(m, F, 7), z = x.rotrSL(m, F, 1) ^ x.rotrSL(m, F, 8) ^ x.shrSL(m, F, 7), I = P[d - 2] | 0, O = Q[d - 2] | 0, ot = x.rotrSH(I, O, 19) ^ x.rotrBH(I, O, 61) ^ x.shrSH(I, O, 6), tt = x.rotrSL(I, O, 19) ^ x.rotrBL(I, O, 61) ^ x.shrSL(I, O, 6), st = x.add4L(z, tt, Q[d - 7], Q[d - 16]), at = x.add4H(st, q, ot, P[d - 7], P[d - 16]);
            P[d] = at | 0, Q[d] = st | 0;
        }
        let { Ah: r, Al: o, Bh: s, Bl: a, Ch: u, Cl: i, Dh: D, Dl: c, Eh: l, El: p, Fh: w, Fl: h, Gh: g, Gl: S, Hh: v, Hl: L } = this;
        for(let d = 0; d < 80; d++){
            const m = x.rotrSH(l, p, 14) ^ x.rotrSH(l, p, 18) ^ x.rotrBH(l, p, 41), F = x.rotrSL(l, p, 14) ^ x.rotrSL(l, p, 18) ^ x.rotrBL(l, p, 41), q = l & w ^ ~l & g, z = p & h ^ ~p & S, I = x.add5L(L, F, z, Yn[d], Q[d]), O = x.add5H(I, v, m, q, Vn[d], P[d]), ot = I | 0, tt = x.rotrSH(r, o, 28) ^ x.rotrBH(r, o, 34) ^ x.rotrBH(r, o, 39), st = x.rotrSL(r, o, 28) ^ x.rotrBL(r, o, 34) ^ x.rotrBL(r, o, 39), at = r & s ^ r & u ^ s & u, Ct = o & a ^ o & i ^ a & i;
            v = g | 0, L = S | 0, g = w | 0, S = h | 0, w = l | 0, h = p | 0, ({ h: l, l: p } = x.add(D | 0, c | 0, O | 0, ot | 0)), D = u | 0, c = i | 0, u = s | 0, i = a | 0, s = r | 0, a = o | 0;
            const At = x.add3L(ot, st, Ct);
            r = x.add3H(At, O, tt, at), o = At | 0;
        }
        ({ h: r, l: o } = x.add(this.Ah | 0, this.Al | 0, r | 0, o | 0)), ({ h: s, l: a } = x.add(this.Bh | 0, this.Bl | 0, s | 0, a | 0)), ({ h: u, l: i } = x.add(this.Ch | 0, this.Cl | 0, u | 0, i | 0)), ({ h: D, l: c } = x.add(this.Dh | 0, this.Dl | 0, D | 0, c | 0)), ({ h: l, l: p } = x.add(this.Eh | 0, this.El | 0, l | 0, p | 0)), ({ h: w, l: h } = x.add(this.Fh | 0, this.Fl | 0, w | 0, h | 0)), ({ h: g, l: S } = x.add(this.Gh | 0, this.Gl | 0, g | 0, S | 0)), ({ h: v, l: L } = x.add(this.Hh | 0, this.Hl | 0, v | 0, L | 0)), this.set(r, o, s, a, u, i, D, c, l, p, w, h, g, S, v, L);
    }
    roundClean() {
        P.fill(0), Q.fill(0);
    }
    destroy() {
        this.buffer.fill(0), this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    }
    constructor(){
        super(128, 64, 16, !1), this.Ah = 1779033703, this.Al = -205731576, this.Bh = -1150833019, this.Bl = -2067093701, this.Ch = 1013904242, this.Cl = -23791573, this.Dh = -1521486534, this.Dl = 1595750129, this.Eh = 1359893119, this.El = -1377402159, this.Fh = -1694144372, this.Fl = 725511199, this.Gh = 528734635, this.Gl = -79577749, this.Hh = 1541459225, this.Hl = 327033209;
    }
}
const Kn = Bn(()=>new Jn); /*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */ 
const vt = BigInt(0), be = BigInt(1), Wn = BigInt(2);
function It(t) {
    return t instanceof Uint8Array || ArrayBuffer.isView(t) && t.constructor.name === "Uint8Array";
}
function Ut(t) {
    if (!It(t)) throw new Error("Uint8Array expected");
}
function Tt(t, e) {
    if (typeof e != "boolean") throw new Error(t + " boolean expected, got " + e);
}
const Xn = Array.from({
    length: 256
}, (t, e)=>e.toString(16).padStart(2, "0"));
function Ft(t) {
    Ut(t);
    let e = "";
    for(let n = 0; n < t.length; n++)e += Xn[t[n]];
    return e;
}
function pe(t) {
    if (typeof t != "string") throw new Error("hex string expected, got " + typeof t);
    return t === "" ? vt : BigInt("0x" + t);
}
const K = {
    _0: 48,
    _9: 57,
    A: 65,
    F: 70,
    a: 97,
    f: 102
};
function we(t) {
    if (t >= K._0 && t <= K._9) return t - K._0;
    if (t >= K.A && t <= K.F) return t - (K.A - 10);
    if (t >= K.a && t <= K.f) return t - (K.a - 10);
}
function Ee(t) {
    if (typeof t != "string") throw new Error("hex string expected, got " + typeof t);
    const e = t.length, n = e / 2;
    if (e % 2) throw new Error("hex string expected, got unpadded hex of length " + e);
    const r = new Uint8Array(n);
    for(let o = 0, s = 0; o < n; o++, s += 2){
        const a = we(t.charCodeAt(s)), u = we(t.charCodeAt(s + 1));
        if (a === void 0 || u === void 0) {
            const i = t[s] + t[s + 1];
            throw new Error('hex string expected, got non-hex character "' + i + '" at index ' + s);
        }
        r[o] = a * 16 + u;
    }
    return r;
}
function Pn(t) {
    return pe(Ft(t));
}
function Et(t) {
    return Ut(t), pe(Ft(Uint8Array.from(t).reverse()));
}
function ge(t, e) {
    return Ee(t.toString(16).padStart(e * 2, "0"));
}
function Nt(t, e) {
    return ge(t, e).reverse();
}
function W(t, e, n) {
    let r;
    if (typeof e == "string") try {
        r = Ee(e);
    } catch (s) {
        throw new Error(t + " must be hex string or Uint8Array, cause: " + s);
    }
    else if (It(e)) r = Uint8Array.from(e);
    else throw new Error(t + " must be hex string or Uint8Array");
    const o = r.length;
    if (typeof n == "number" && o !== n) throw new Error(t + " of length " + n + " expected, got " + o);
    return r;
}
function ye() {
    for(var _len = arguments.length, t = new Array(_len), _key = 0; _key < _len; _key++){
        t[_key] = arguments[_key];
    }
    let e = 0;
    for(let r = 0; r < t.length; r++){
        const o = t[r];
        Ut(o), e += o.length;
    }
    const n = new Uint8Array(e);
    for(let r = 0, o = 0; r < t.length; r++){
        const s = t[r];
        n.set(s, o), o += s.length;
    }
    return n;
}
const Lt = (t)=>typeof t == "bigint" && vt <= t;
function Qn(t, e, n) {
    return Lt(t) && Lt(e) && Lt(n) && e <= t && t < n;
}
function ft(t, e, n, r) {
    if (!Qn(e, n, r)) throw new Error("expected valid " + t + ": " + n + " <= n < " + r + ", got " + e);
}
function tr(t) {
    let e;
    for(e = 0; t > vt; t >>= be, e += 1);
    return e;
}
const er = (t)=>(Wn << BigInt(t - 1)) - be, nr = {
    bigint: (t)=>typeof t == "bigint",
    function: (t)=>typeof t == "function",
    boolean: (t)=>typeof t == "boolean",
    string: (t)=>typeof t == "string",
    stringOrUint8Array: (t)=>typeof t == "string" || It(t),
    isSafeInteger: (t)=>Number.isSafeInteger(t),
    array: (t)=>Array.isArray(t),
    field: (t, e)=>e.Fp.isValid(t),
    hash: (t)=>typeof t == "function" && Number.isSafeInteger(t.outputLen)
};
function Ot(t, e) {
    let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const r = (o, s, a)=>{
        const u = nr[s];
        if (typeof u != "function") throw new Error("invalid validator function");
        const i = t[o];
        if (!(a && i === void 0) && !u(i, t)) throw new Error("param " + String(o) + " is invalid. Expected " + s + ", got " + i);
    };
    for (const [o, s] of Object.entries(e))r(o, s, !1);
    for (const [o, s] of Object.entries(n))r(o, s, !0);
    return t;
}
function xe(t) {
    const e = new WeakMap;
    return function(n) {
        for(var _len = arguments.length, r = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
            r[_key - 1] = arguments[_key];
        }
        const o = e.get(n);
        if (o !== void 0) return o;
        const s = t(n, ...r);
        return e.set(n, s), s;
    };
}
const M = BigInt(0), N = BigInt(1), nt = BigInt(2), rr = BigInt(3), Ht = BigInt(4), Be = BigInt(5), Ce = BigInt(8);
function H(t, e) {
    const n = t % e;
    return n >= M ? n : e + n;
}
function or(t, e, n) {
    if (e < M) throw new Error("invalid exponent, negatives unsupported");
    if (n <= M) throw new Error("invalid modulus");
    if (n === N) return M;
    let r = N;
    for(; e > M;)e & N && (r = r * t % n), t = t * t % n, e >>= N;
    return r;
}
function J(t, e, n) {
    let r = t;
    for(; e-- > M;)r *= r, r %= n;
    return r;
}
function Ae(t, e) {
    if (t === M) throw new Error("invert: expected non-zero number");
    if (e <= M) throw new Error("invert: expected positive modulus, got " + e);
    let n = H(t, e), r = e, o = M, s = N;
    for(; n !== M;){
        const u = r / n, i = r % n, D = o - s * u;
        r = n, n = i, o = s, s = D;
    }
    if (r !== N) throw new Error("invert: does not exist");
    return H(o, e);
}
function sr(t) {
    const e = (t - N) / nt;
    let n, r, o;
    for(n = t - N, r = 0; n % nt === M; n /= nt, r++);
    for(o = nt; o < t && or(o, e, t) !== t - N; o++)if (o > 1e3) throw new Error("Cannot find square root: likely non-prime P");
    if (r === 1) {
        const a = (t + N) / Ht;
        return function(i, D) {
            const c = i.pow(D, a);
            if (!i.eql(i.sqr(c), D)) throw new Error("Cannot find square root");
            return c;
        };
    }
    const s = (n + N) / nt;
    return function(u, i) {
        if (u.pow(i, e) === u.neg(u.ONE)) throw new Error("Cannot find square root");
        let D = r, c = u.pow(u.mul(u.ONE, o), n), l = u.pow(i, s), p = u.pow(i, n);
        for(; !u.eql(p, u.ONE);){
            if (u.eql(p, u.ZERO)) return u.ZERO;
            let w = 1;
            for(let g = u.sqr(p); w < D && !u.eql(g, u.ONE); w++)g = u.sqr(g);
            const h = u.pow(c, N << BigInt(D - w - 1));
            c = u.sqr(h), l = u.mul(l, h), p = u.mul(p, c), D = w;
        }
        return l;
    };
}
function ir(t) {
    if (t % Ht === rr) {
        const e = (t + N) / Ht;
        return function(r, o) {
            const s = r.pow(o, e);
            if (!r.eql(r.sqr(s), o)) throw new Error("Cannot find square root");
            return s;
        };
    }
    if (t % Ce === Be) {
        const e = (t - Be) / Ce;
        return function(r, o) {
            const s = r.mul(o, nt), a = r.pow(s, e), u = r.mul(o, a), i = r.mul(r.mul(u, nt), a), D = r.mul(u, r.sub(i, r.ONE));
            if (!r.eql(r.sqr(D), o)) throw new Error("Cannot find square root");
            return D;
        };
    }
    return sr(t);
}
const ur = (t, e)=>(H(t, e) & N) === N, cr = [
    "create",
    "isValid",
    "is0",
    "neg",
    "inv",
    "sqrt",
    "sqr",
    "eql",
    "add",
    "sub",
    "mul",
    "pow",
    "div",
    "addN",
    "subN",
    "mulN",
    "sqrN"
];
function ar(t) {
    const e = {
        ORDER: "bigint",
        MASK: "bigint",
        BYTES: "isSafeInteger",
        BITS: "isSafeInteger"
    }, n = cr.reduce((r, o)=>(r[o] = "function", r), e);
    return Ot(t, n);
}
function fr(t, e, n) {
    if (n < M) throw new Error("invalid exponent, negatives unsupported");
    if (n === M) return t.ONE;
    if (n === N) return e;
    let r = t.ONE, o = e;
    for(; n > M;)n & N && (r = t.mul(r, o)), o = t.sqr(o), n >>= N;
    return r;
}
function Dr(t, e) {
    const n = new Array(e.length), r = e.reduce((s, a, u)=>t.is0(a) ? s : (n[u] = s, t.mul(s, a)), t.ONE), o = t.inv(r);
    return e.reduceRight((s, a, u)=>t.is0(a) ? s : (n[u] = t.mul(s, n[u]), t.mul(s, a)), o), n;
}
function me(t, e) {
    const n = e !== void 0 ? e : t.toString(2).length, r = Math.ceil(n / 8);
    return {
        nBitLength: n,
        nByteLength: r
    };
}
function _e(t, e) {
    let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    if (t <= M) throw new Error("invalid field: expected ORDER > 0, got " + t);
    const { nBitLength: o, nByteLength: s } = me(t, e);
    if (s > 2048) throw new Error("invalid field: expected ORDER of <= 2048 bytes");
    let a;
    const u = Object.freeze({
        ORDER: t,
        isLE: n,
        BITS: o,
        BYTES: s,
        MASK: er(o),
        ZERO: M,
        ONE: N,
        create: (i)=>H(i, t),
        isValid: (i)=>{
            if (typeof i != "bigint") throw new Error("invalid field element: expected bigint, got " + typeof i);
            return M <= i && i < t;
        },
        is0: (i)=>i === M,
        isOdd: (i)=>(i & N) === N,
        neg: (i)=>H(-i, t),
        eql: (i, D)=>i === D,
        sqr: (i)=>H(i * i, t),
        add: (i, D)=>H(i + D, t),
        sub: (i, D)=>H(i - D, t),
        mul: (i, D)=>H(i * D, t),
        pow: (i, D)=>fr(u, i, D),
        div: (i, D)=>H(i * Ae(D, t), t),
        sqrN: (i)=>i * i,
        addN: (i, D)=>i + D,
        subN: (i, D)=>i - D,
        mulN: (i, D)=>i * D,
        inv: (i)=>Ae(i, t),
        sqrt: r.sqrt || ((i)=>(a || (a = ir(t)), a(u, i))),
        invertBatch: (i)=>Dr(u, i),
        cmov: (i, D, c)=>c ? D : i,
        toBytes: (i)=>n ? Nt(i, s) : ge(i, s),
        fromBytes: (i)=>{
            if (i.length !== s) throw new Error("Field.fromBytes: expected " + s + " bytes, got " + i.length);
            return n ? Et(i) : Pn(i);
        }
    });
    return Object.freeze(u);
}
const Se = BigInt(0), gt = BigInt(1);
function zt(t, e) {
    const n = e.negate();
    return t ? n : e;
}
function ve(t, e) {
    if (!Number.isSafeInteger(t) || t <= 0 || t > e) throw new Error("invalid window size, expected [1.." + e + "], got W=" + t);
}
function Mt(t, e) {
    ve(t, e);
    const n = Math.ceil(e / t) + 1, r = 2 ** (t - 1);
    return {
        windows: n,
        windowSize: r
    };
}
function dr(t, e) {
    if (!Array.isArray(t)) throw new Error("array expected");
    t.forEach((n, r)=>{
        if (!(n instanceof e)) throw new Error("invalid point at index " + r);
    });
}
function hr(t, e) {
    if (!Array.isArray(t)) throw new Error("array of scalars expected");
    t.forEach((n, r)=>{
        if (!e.isValid(n)) throw new Error("invalid scalar at index " + r);
    });
}
const qt = new WeakMap, Ie = new WeakMap;
function $t(t) {
    return Ie.get(t) || 1;
}
function lr(t, e) {
    return {
        constTimeNegate: zt,
        hasPrecomputes (n) {
            return $t(n) !== 1;
        },
        unsafeLadder (n, r) {
            let o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : t.ZERO;
            let s = n;
            for(; r > Se;)r & gt && (o = o.add(s)), s = s.double(), r >>= gt;
            return o;
        },
        precomputeWindow (n, r) {
            const { windows: o, windowSize: s } = Mt(r, e), a = [];
            let u = n, i = u;
            for(let D = 0; D < o; D++){
                i = u, a.push(i);
                for(let c = 1; c < s; c++)i = i.add(u), a.push(i);
                u = i.double();
            }
            return a;
        },
        wNAF (n, r, o) {
            const { windows: s, windowSize: a } = Mt(n, e);
            let u = t.ZERO, i = t.BASE;
            const D = BigInt(2 ** n - 1), c = 2 ** n, l = BigInt(n);
            for(let p = 0; p < s; p++){
                const w = p * a;
                let h = Number(o & D);
                o >>= l, h > a && (h -= c, o += gt);
                const g = w, S = w + Math.abs(h) - 1, v = p % 2 !== 0, L = h < 0;
                h === 0 ? i = i.add(zt(v, r[g])) : u = u.add(zt(L, r[S]));
            }
            return {
                p: u,
                f: i
            };
        },
        wNAFUnsafe (n, r, o) {
            let s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : t.ZERO;
            const { windows: a, windowSize: u } = Mt(n, e), i = BigInt(2 ** n - 1), D = 2 ** n, c = BigInt(n);
            for(let l = 0; l < a; l++){
                const p = l * u;
                if (o === Se) break;
                let w = Number(o & i);
                if (o >>= c, w > u && (w -= D, o += gt), w === 0) continue;
                let h = r[p + Math.abs(w) - 1];
                w < 0 && (h = h.negate()), s = s.add(h);
            }
            return s;
        },
        getPrecomputes (n, r, o) {
            let s = qt.get(r);
            return s || (s = this.precomputeWindow(r, n), n !== 1 && qt.set(r, o(s))), s;
        },
        wNAFCached (n, r, o) {
            const s = $t(n);
            return this.wNAF(s, this.getPrecomputes(s, n, o), r);
        },
        wNAFCachedUnsafe (n, r, o, s) {
            const a = $t(n);
            return a === 1 ? this.unsafeLadder(n, r, s) : this.wNAFUnsafe(a, this.getPrecomputes(a, n, o), r, s);
        },
        setWindowSize (n, r) {
            ve(r, e), Ie.set(n, r), qt.delete(n);
        }
    };
}
function br(t, e, n, r) {
    if (dr(n, t), hr(r, e), n.length !== r.length) throw new Error("arrays of points and scalars must have equal length");
    const o = t.ZERO, s = tr(BigInt(n.length)), a = s > 12 ? s - 3 : s > 4 ? s - 2 : s ? 2 : 1, u = (1 << a) - 1, i = new Array(u + 1).fill(o), D = Math.floor((e.BITS - 1) / a) * a;
    let c = o;
    for(let l = D; l >= 0; l -= a){
        i.fill(o);
        for(let w = 0; w < r.length; w++){
            const h = r[w], g = Number(h >> BigInt(l) & BigInt(u));
            i[g] = i[g].add(n[w]);
        }
        let p = o;
        for(let w = i.length - 1, h = o; w > 0; w--)h = h.add(i[w]), p = p.add(h);
        if (c = c.add(p), l !== 0) for(let w = 0; w < a; w++)c = c.double();
    }
    return c;
}
function pr(t) {
    return ar(t.Fp), Ot(t, {
        n: "bigint",
        h: "bigint",
        Gx: "field",
        Gy: "field"
    }, {
        nBitLength: "isSafeInteger",
        nByteLength: "isSafeInteger"
    }), Object.freeze({
        ...me(t.n, t.nBitLength),
        ...t,
        p: t.Fp.ORDER
    });
}
const G = BigInt(0), j = BigInt(1), yt = BigInt(2), wr = BigInt(8), Er = {
    zip215: !0
};
function gr(t) {
    const e = pr(t);
    return Ot(t, {
        hash: "function",
        a: "bigint",
        d: "bigint",
        randomBytes: "function"
    }, {
        adjustScalarBytes: "function",
        domain: "function",
        uvRatio: "function",
        mapToCurve: "function"
    }), Object.freeze({
        ...e
    });
}
function yr(t) {
    const e = gr(t), { Fp: n, n: r, prehash: o, hash: s, randomBytes: a, nByteLength: u, h: i } = e, D = yt << BigInt(u * 8) - j, c = n.create, l = _e(e.n, e.nBitLength), p = e.uvRatio || ((y, f)=>{
        try {
            return {
                isValid: !0,
                value: n.sqrt(y * n.inv(f))
            };
        } catch (e) {
            return {
                isValid: !1,
                value: G
            };
        }
    }), w = e.adjustScalarBytes || ((y)=>y), h = e.domain || ((y, f, b)=>{
        if (Tt("phflag", b), f.length || b) throw new Error("Contexts/pre-hash are not supported");
        return y;
    });
    function g(y, f) {
        ft("coordinate " + y, f, G, D);
    }
    function S(y) {
        if (!(y instanceof d)) throw new Error("ExtendedPoint expected");
    }
    const v = xe((y, f)=>{
        const { ex: b, ey: E, ez: B } = y, C = y.is0();
        f == null && (f = C ? wr : n.inv(B));
        const A = c(b * f), U = c(E * f), _ = c(B * f);
        if (C) return {
            x: G,
            y: j
        };
        if (_ !== j) throw new Error("invZ was invalid");
        return {
            x: A,
            y: U
        };
    }), L = xe((y)=>{
        const { a: f, d: b } = e;
        if (y.is0()) throw new Error("bad point: ZERO");
        const { ex: E, ey: B, ez: C, et: A } = y, U = c(E * E), _ = c(B * B), T = c(C * C), $ = c(T * T), R = c(U * f), V = c(T * c(R + _)), Y = c($ + c(b * c(U * _)));
        if (V !== Y) throw new Error("bad point: equation left != right (1)");
        const Z = c(E * B), X = c(C * A);
        if (Z !== X) throw new Error("bad point: equation left != right (2)");
        return !0;
    });
    class d {
        get x() {
            return this.toAffine().x;
        }
        get y() {
            return this.toAffine().y;
        }
        static fromAffine(f) {
            if (f instanceof d) throw new Error("extended point not allowed");
            const { x: b, y: E } = f || {};
            return g("x", b), g("y", E), new d(b, E, j, c(b * E));
        }
        static normalizeZ(f) {
            const b = n.invertBatch(f.map((E)=>E.ez));
            return f.map((E, B)=>E.toAffine(b[B])).map(d.fromAffine);
        }
        static msm(f, b) {
            return br(d, l, f, b);
        }
        _setWindowSize(f) {
            q.setWindowSize(this, f);
        }
        assertValidity() {
            L(this);
        }
        equals(f) {
            S(f);
            const { ex: b, ey: E, ez: B } = this, { ex: C, ey: A, ez: U } = f, _ = c(b * U), T = c(C * B), $ = c(E * U), R = c(A * B);
            return _ === T && $ === R;
        }
        is0() {
            return this.equals(d.ZERO);
        }
        negate() {
            return new d(c(-this.ex), this.ey, this.ez, c(-this.et));
        }
        double() {
            const { a: f } = e, { ex: b, ey: E, ez: B } = this, C = c(b * b), A = c(E * E), U = c(yt * c(B * B)), _ = c(f * C), T = b + E, $ = c(c(T * T) - C - A), R = _ + A, V = R - U, Y = _ - A, Z = c($ * V), X = c(R * Y), et = c($ * Y), pt = c(V * R);
            return new d(Z, X, pt, et);
        }
        add(f) {
            S(f);
            const { a: b, d: E } = e, { ex: B, ey: C, ez: A, et: U } = this, { ex: _, ey: T, ez: $, et: R } = f;
            if (b === BigInt(-1)) {
                const re = c((C - B) * (T + _)), oe = c((C + B) * (T - _)), mt = c(oe - re);
                if (mt === G) return this.double();
                const se = c(A * yt * R), ie = c(U * yt * $), ue = ie + se, ce = oe + re, ae = ie - se, Dn = c(ue * mt), dn = c(ce * ae), hn = c(ue * ae), ln = c(mt * ce);
                return new d(Dn, dn, ln, hn);
            }
            const V = c(B * _), Y = c(C * T), Z = c(U * E * R), X = c(A * $), et = c((B + C) * (_ + T) - V - Y), pt = X - Z, ee = X + Z, ne = c(Y - b * V), un = c(et * pt), cn = c(ee * ne), an = c(et * ne), fn = c(pt * ee);
            return new d(un, cn, fn, an);
        }
        subtract(f) {
            return this.add(f.negate());
        }
        wNAF(f) {
            return q.wNAFCached(this, f, d.normalizeZ);
        }
        multiply(f) {
            const b = f;
            ft("scalar", b, j, r);
            const { p: E, f: B } = this.wNAF(b);
            return d.normalizeZ([
                E,
                B
            ])[0];
        }
        multiplyUnsafe(f) {
            let b = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : d.ZERO;
            const E = f;
            return ft("scalar", E, G, r), E === G ? F : this.is0() || E === j ? this : q.wNAFCachedUnsafe(this, E, d.normalizeZ, b);
        }
        isSmallOrder() {
            return this.multiplyUnsafe(i).is0();
        }
        isTorsionFree() {
            return q.unsafeLadder(this, r).is0();
        }
        toAffine(f) {
            return v(this, f);
        }
        clearCofactor() {
            const { h: f } = e;
            return f === j ? this : this.multiplyUnsafe(f);
        }
        static fromHex(f) {
            let b = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
            const { d: E, a: B } = e, C = n.BYTES;
            f = W("pointHex", f, C), Tt("zip215", b);
            const A = f.slice(), U = f[C - 1];
            A[C - 1] = U & -129;
            const _ = Et(A), T = b ? D : n.ORDER;
            ft("pointHex.y", _, G, T);
            const $ = c(_ * _), R = c($ - j), V = c(E * $ - B);
            let { isValid: Y, value: Z } = p(R, V);
            if (!Y) throw new Error("Point.fromHex: invalid y coordinate");
            const X = (Z & j) === j, et = (U & 128) !== 0;
            if (!b && Z === G && et) throw new Error("Point.fromHex: x=0 and x_0=1");
            return et !== X && (Z = c(-Z)), d.fromAffine({
                x: Z,
                y: _
            });
        }
        static fromPrivateKey(f) {
            return O(f).point;
        }
        toRawBytes() {
            const { x: f, y: b } = this.toAffine(), E = Nt(b, n.BYTES);
            return E[E.length - 1] |= f & j ? 128 : 0, E;
        }
        toHex() {
            return Ft(this.toRawBytes());
        }
        constructor(f, b, E, B){
            this.ex = f, this.ey = b, this.ez = E, this.et = B, g("x", f), g("y", b), g("z", E), g("t", B), Object.freeze(this);
        }
    }
    d.BASE = new d(e.Gx, e.Gy, j, c(e.Gx * e.Gy)), d.ZERO = new d(G, j, j, G);
    const { BASE: m, ZERO: F } = d, q = lr(d, u * 8);
    function z(y) {
        return H(y, r);
    }
    function I(y) {
        return z(Et(y));
    }
    function O(y) {
        const f = n.BYTES;
        y = W("private key", y, f);
        const b = W("hashed private key", s(y), 2 * f), E = w(b.slice(0, f)), B = b.slice(f, 2 * f), C = I(E), A = m.multiply(C), U = A.toRawBytes();
        return {
            head: E,
            prefix: B,
            scalar: C,
            point: A,
            pointBytes: U
        };
    }
    function ot(y) {
        return O(y).pointBytes;
    }
    function tt() {
        let y = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : new Uint8Array;
        for(var _len = arguments.length, f = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
            f[_key - 1] = arguments[_key];
        }
        const b = ye(...f);
        return I(s(h(b, W("context", y), !!o)));
    }
    function st(y, f) {
        let b = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        y = W("message", y), o && (y = o(y));
        const { prefix: E, scalar: B, pointBytes: C } = O(f), A = tt(b.context, E, y), U = m.multiply(A).toRawBytes(), _ = tt(b.context, U, C, y), T = z(A + _ * B);
        ft("signature.s", T, G, r);
        const $ = ye(U, Nt(T, n.BYTES));
        return W("result", $, n.BYTES * 2);
    }
    const at = Er;
    function Ct(y, f, b) {
        let E = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : at;
        const { context: B, zip215: C } = E, A = n.BYTES;
        y = W("signature", y, 2 * A), f = W("message", f), b = W("publicKey", b, A), C !== void 0 && Tt("zip215", C), o && (f = o(f));
        const U = Et(y.slice(A, 2 * A));
        let _, T, $;
        try {
            _ = d.fromHex(b, C), T = d.fromHex(y.slice(0, A), C), $ = m.multiplyUnsafe(U);
        } catch (e) {
            return !1;
        }
        if (!C && _.isSmallOrder()) return !1;
        const R = tt(B, T.toRawBytes(), _.toRawBytes(), f);
        return T.add(_.multiplyUnsafe(R)).subtract($).clearCofactor().equals(d.ZERO);
    }
    return m._setWindowSize(8), {
        CURVE: e,
        getPublicKey: ot,
        sign: st,
        verify: Ct,
        ExtendedPoint: d,
        utils: {
            getExtendedPublicKey: O,
            randomPrivateKey: ()=>a(n.BYTES),
            precompute () {
                let y = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 8, f = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : d.BASE;
                return f._setWindowSize(y), f.multiply(BigInt(3)), f;
            }
        }
    };
}
BigInt(0), BigInt(1);
const kt = BigInt("57896044618658097711785492504343953926634992332820282019728792003956564819949"), Ue = BigInt("19681161376707505956807079304988542015446066515923890162744021073123829784752");
BigInt(0);
const xr = BigInt(1), Te = BigInt(2);
BigInt(3);
const Br = BigInt(5), Cr = BigInt(8);
function Ar(t) {
    const e = BigInt(10), n = BigInt(20), r = BigInt(40), o = BigInt(80), s = kt, u = t * t % s * t % s, i = J(u, Te, s) * u % s, D = J(i, xr, s) * t % s, c = J(D, Br, s) * D % s, l = J(c, e, s) * c % s, p = J(l, n, s) * l % s, w = J(p, r, s) * p % s, h = J(w, o, s) * w % s, g = J(h, o, s) * w % s, S = J(g, e, s) * c % s;
    return {
        pow_p_5_8: J(S, Te, s) * t % s,
        b2: u
    };
}
function mr(t) {
    return t[0] &= 248, t[31] &= 127, t[31] |= 64, t;
}
function _r(t, e) {
    const n = kt, r = H(e * e * e, n), o = H(r * r * e, n), s = Ar(t * o).pow_p_5_8;
    let a = H(t * r * s, n);
    const u = H(e * a * a, n), i = a, D = H(a * Ue, n), c = u === t, l = u === H(-t, n), p = u === H(-t * Ue, n);
    return c && (a = i), (l || p) && (a = D), ur(a, n) && (a = H(-a, n)), {
        isValid: c || l,
        value: a
    };
}
const Sr = (()=>_e(kt, void 0, !0))(), vr = (()=>({
        a: BigInt(-1),
        d: BigInt("37095705934669439343138083508754565189542113879843219016388785533085940283555"),
        Fp: Sr,
        n: BigInt("7237005577332262213973186563042994240857116359379907606001950938285454250989"),
        h: Cr,
        Gx: BigInt("15112221349535400772501151409588531511454012693041857206046113283949847762202"),
        Gy: BigInt("46316835694926478169428394003475163141307993866256225615783033603165251855960"),
        hash: Kn,
        randomBytes: he,
        adjustScalarBytes: mr,
        uvRatio: _r
    }))(), Rt = (()=>yr(vr))(), jt = "EdDSA", Zt = "JWT", ut = ".", Dt = "base64url", Gt = "utf8", xt = "utf8", Vt = ":", Yt = "did", Jt = "key", dt = "base58btc", Kt = "z", Wt = "K36", Fe = 32, Ne = 32;
function Xt(t) {
    return globalThis.Buffer != null ? new Uint8Array(t.buffer, t.byteOffset, t.byteLength) : t;
}
function Le() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
    return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null ? Xt(globalThis.Buffer.allocUnsafe(t)) : new Uint8Array(t);
}
function Oe(t, e) {
    e || (e = t.reduce((o, s)=>o + s.length, 0));
    const n = Le(e);
    let r = 0;
    for (const o of t)n.set(o, r), r += o.length;
    return Xt(n);
}
function Ir(t, e) {
    if (t.length >= 255) throw new TypeError("Alphabet too long");
    for(var n = new Uint8Array(256), r = 0; r < n.length; r++)n[r] = 255;
    for(var o = 0; o < t.length; o++){
        var s = t.charAt(o), a = s.charCodeAt(0);
        if (n[a] !== 255) throw new TypeError(s + " is ambiguous");
        n[a] = o;
    }
    var u = t.length, i = t.charAt(0), D = Math.log(u) / Math.log(256), c = Math.log(256) / Math.log(u);
    function l(h) {
        if (h instanceof Uint8Array || (ArrayBuffer.isView(h) ? h = new Uint8Array(h.buffer, h.byteOffset, h.byteLength) : Array.isArray(h) && (h = Uint8Array.from(h))), !(h instanceof Uint8Array)) throw new TypeError("Expected Uint8Array");
        if (h.length === 0) return "";
        for(var g = 0, S = 0, v = 0, L = h.length; v !== L && h[v] === 0;)v++, g++;
        for(var d = (L - v) * c + 1 >>> 0, m = new Uint8Array(d); v !== L;){
            for(var F = h[v], q = 0, z = d - 1; (F !== 0 || q < S) && z !== -1; z--, q++)F += 256 * m[z] >>> 0, m[z] = F % u >>> 0, F = F / u >>> 0;
            if (F !== 0) throw new Error("Non-zero carry");
            S = q, v++;
        }
        for(var I = d - S; I !== d && m[I] === 0;)I++;
        for(var O = i.repeat(g); I < d; ++I)O += t.charAt(m[I]);
        return O;
    }
    function p(h) {
        if (typeof h != "string") throw new TypeError("Expected String");
        if (h.length === 0) return new Uint8Array;
        var g = 0;
        if (h[g] !== " ") {
            for(var S = 0, v = 0; h[g] === i;)S++, g++;
            for(var L = (h.length - g) * D + 1 >>> 0, d = new Uint8Array(L); h[g];){
                var m = n[h.charCodeAt(g)];
                if (m === 255) return;
                for(var F = 0, q = L - 1; (m !== 0 || F < v) && q !== -1; q--, F++)m += u * d[q] >>> 0, d[q] = m % 256 >>> 0, m = m / 256 >>> 0;
                if (m !== 0) throw new Error("Non-zero carry");
                v = F, g++;
            }
            if (h[g] !== " ") {
                for(var z = L - v; z !== L && d[z] === 0;)z++;
                for(var I = new Uint8Array(S + (L - z)), O = S; z !== L;)I[O++] = d[z++];
                return I;
            }
        }
    }
    function w(h) {
        var g = p(h);
        if (g) return g;
        throw new Error("Non-".concat(e, " character"));
    }
    return {
        encode: l,
        decodeUnsafe: p,
        decode: w
    };
}
var Ur = Ir, Tr = Ur;
const He = (t)=>{
    if (t instanceof Uint8Array && t.constructor.name === "Uint8Array") return t;
    if (t instanceof ArrayBuffer) return new Uint8Array(t);
    if (ArrayBuffer.isView(t)) return new Uint8Array(t.buffer, t.byteOffset, t.byteLength);
    throw new Error("Unknown type, must be binary type");
}, Fr = (t)=>new TextEncoder().encode(t), Nr = (t)=>new TextDecoder().decode(t);
class Lr {
    encode(e) {
        if (e instanceof Uint8Array) return "".concat(this.prefix).concat(this.baseEncode(e));
        throw Error("Unknown type, must be binary type");
    }
    constructor(e, n, r){
        this.name = e, this.prefix = n, this.baseEncode = r;
    }
}
class Or {
    decode(e) {
        if (typeof e == "string") {
            if (e.codePointAt(0) !== this.prefixCodePoint) throw Error("Unable to decode multibase string ".concat(JSON.stringify(e), ", ").concat(this.name, " decoder only supports inputs prefixed with ").concat(this.prefix));
            return this.baseDecode(e.slice(this.prefix.length));
        } else throw Error("Can only multibase decode strings");
    }
    or(e) {
        return ze(this, e);
    }
    constructor(e, n, r){
        if (this.name = e, this.prefix = n, n.codePointAt(0) === void 0) throw new Error("Invalid prefix character");
        this.prefixCodePoint = n.codePointAt(0), this.baseDecode = r;
    }
}
class Hr {
    or(e) {
        return ze(this, e);
    }
    decode(e) {
        const n = e[0], r = this.decoders[n];
        if (r) return r.decode(e);
        throw RangeError("Unable to decode multibase string ".concat(JSON.stringify(e), ", only inputs prefixed with ").concat(Object.keys(this.decoders), " are supported"));
    }
    constructor(e){
        this.decoders = e;
    }
}
const ze = (t, e)=>new Hr({
        ...t.decoders || {
            [t.prefix]: t
        },
        ...e.decoders || {
            [e.prefix]: e
        }
    });
class zr {
    encode(e) {
        return this.encoder.encode(e);
    }
    decode(e) {
        return this.decoder.decode(e);
    }
    constructor(e, n, r, o){
        this.name = e, this.prefix = n, this.baseEncode = r, this.baseDecode = o, this.encoder = new Lr(e, n, r), this.decoder = new Or(e, n, o);
    }
}
const Bt = (param)=>{
    let { name: t, prefix: e, encode: n, decode: r } = param;
    return new zr(t, e, n, r);
}, ht = (param)=>{
    let { prefix: t, name: e, alphabet: n } = param;
    const { encode: r, decode: o } = Tr(n, e);
    return Bt({
        prefix: t,
        name: e,
        encode: r,
        decode: (s)=>He(o(s))
    });
}, Mr = (t, e, n, r)=>{
    const o = {};
    for(let c = 0; c < e.length; ++c)o[e[c]] = c;
    let s = t.length;
    for(; t[s - 1] === "=";)--s;
    const a = new Uint8Array(s * n / 8 | 0);
    let u = 0, i = 0, D = 0;
    for(let c = 0; c < s; ++c){
        const l = o[t[c]];
        if (l === void 0) throw new SyntaxError("Non-".concat(r, " character"));
        i = i << n | l, u += n, u >= 8 && (u -= 8, a[D++] = 255 & i >> u);
    }
    if (u >= n || 255 & i << 8 - u) throw new SyntaxError("Unexpected end of data");
    return a;
}, qr = (t, e, n)=>{
    const r = e[e.length - 1] === "=", o = (1 << n) - 1;
    let s = "", a = 0, u = 0;
    for(let i = 0; i < t.length; ++i)for(u = u << 8 | t[i], a += 8; a > n;)a -= n, s += e[o & u >> a];
    if (a && (s += e[o & u << n - a]), r) for(; s.length * n & 7;)s += "=";
    return s;
}, k = (param)=>{
    let { name: t, prefix: e, bitsPerChar: n, alphabet: r } = param;
    return Bt({
        prefix: e,
        name: t,
        encode (o) {
            return qr(o, r, n);
        },
        decode (o) {
            return Mr(o, r, n, t);
        }
    });
}, $r = Bt({
    prefix: "\0",
    name: "identity",
    encode: (t)=>Nr(t),
    decode: (t)=>Fr(t)
});
var kr = Object.freeze({
    __proto__: null,
    identity: $r
});
const Rr = k({
    prefix: "0",
    name: "base2",
    alphabet: "01",
    bitsPerChar: 1
});
var jr = Object.freeze({
    __proto__: null,
    base2: Rr
});
const Zr = k({
    prefix: "7",
    name: "base8",
    alphabet: "01234567",
    bitsPerChar: 3
});
var Gr = Object.freeze({
    __proto__: null,
    base8: Zr
});
const Vr = ht({
    prefix: "9",
    name: "base10",
    alphabet: "0123456789"
});
var Yr = Object.freeze({
    __proto__: null,
    base10: Vr
});
const Jr = k({
    prefix: "f",
    name: "base16",
    alphabet: "0123456789abcdef",
    bitsPerChar: 4
}), Kr = k({
    prefix: "F",
    name: "base16upper",
    alphabet: "0123456789ABCDEF",
    bitsPerChar: 4
});
var Wr = Object.freeze({
    __proto__: null,
    base16: Jr,
    base16upper: Kr
});
const Xr = k({
    prefix: "b",
    name: "base32",
    alphabet: "abcdefghijklmnopqrstuvwxyz234567",
    bitsPerChar: 5
}), Pr = k({
    prefix: "B",
    name: "base32upper",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
    bitsPerChar: 5
}), Qr = k({
    prefix: "c",
    name: "base32pad",
    alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
    bitsPerChar: 5
}), to = k({
    prefix: "C",
    name: "base32padupper",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
    bitsPerChar: 5
}), eo = k({
    prefix: "v",
    name: "base32hex",
    alphabet: "0123456789abcdefghijklmnopqrstuv",
    bitsPerChar: 5
}), no = k({
    prefix: "V",
    name: "base32hexupper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
    bitsPerChar: 5
}), ro = k({
    prefix: "t",
    name: "base32hexpad",
    alphabet: "0123456789abcdefghijklmnopqrstuv=",
    bitsPerChar: 5
}), oo = k({
    prefix: "T",
    name: "base32hexpadupper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
    bitsPerChar: 5
}), so = k({
    prefix: "h",
    name: "base32z",
    alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
    bitsPerChar: 5
});
var io = Object.freeze({
    __proto__: null,
    base32: Xr,
    base32upper: Pr,
    base32pad: Qr,
    base32padupper: to,
    base32hex: eo,
    base32hexupper: no,
    base32hexpad: ro,
    base32hexpadupper: oo,
    base32z: so
});
const uo = ht({
    prefix: "k",
    name: "base36",
    alphabet: "0123456789abcdefghijklmnopqrstuvwxyz"
}), co = ht({
    prefix: "K",
    name: "base36upper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
});
var ao = Object.freeze({
    __proto__: null,
    base36: uo,
    base36upper: co
});
const fo = ht({
    name: "base58btc",
    prefix: "z",
    alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
}), Do = ht({
    name: "base58flickr",
    prefix: "Z",
    alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"
});
var ho = Object.freeze({
    __proto__: null,
    base58btc: fo,
    base58flickr: Do
});
const lo = k({
    prefix: "m",
    name: "base64",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
    bitsPerChar: 6
}), bo = k({
    prefix: "M",
    name: "base64pad",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    bitsPerChar: 6
}), po = k({
    prefix: "u",
    name: "base64url",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
    bitsPerChar: 6
}), wo = k({
    prefix: "U",
    name: "base64urlpad",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
    bitsPerChar: 6
});
var Eo = Object.freeze({
    __proto__: null,
    base64: lo,
    base64pad: bo,
    base64url: po,
    base64urlpad: wo
});
const Me = Array.from("\u{1F680}\u{1FA90}\u2604\u{1F6F0}\u{1F30C}\u{1F311}\u{1F312}\u{1F313}\u{1F314}\u{1F315}\u{1F316}\u{1F317}\u{1F318}\u{1F30D}\u{1F30F}\u{1F30E}\u{1F409}\u2600\u{1F4BB}\u{1F5A5}\u{1F4BE}\u{1F4BF}\u{1F602}\u2764\u{1F60D}\u{1F923}\u{1F60A}\u{1F64F}\u{1F495}\u{1F62D}\u{1F618}\u{1F44D}\u{1F605}\u{1F44F}\u{1F601}\u{1F525}\u{1F970}\u{1F494}\u{1F496}\u{1F499}\u{1F622}\u{1F914}\u{1F606}\u{1F644}\u{1F4AA}\u{1F609}\u263A\u{1F44C}\u{1F917}\u{1F49C}\u{1F614}\u{1F60E}\u{1F607}\u{1F339}\u{1F926}\u{1F389}\u{1F49E}\u270C\u2728\u{1F937}\u{1F631}\u{1F60C}\u{1F338}\u{1F64C}\u{1F60B}\u{1F497}\u{1F49A}\u{1F60F}\u{1F49B}\u{1F642}\u{1F493}\u{1F929}\u{1F604}\u{1F600}\u{1F5A4}\u{1F603}\u{1F4AF}\u{1F648}\u{1F447}\u{1F3B6}\u{1F612}\u{1F92D}\u2763\u{1F61C}\u{1F48B}\u{1F440}\u{1F62A}\u{1F611}\u{1F4A5}\u{1F64B}\u{1F61E}\u{1F629}\u{1F621}\u{1F92A}\u{1F44A}\u{1F973}\u{1F625}\u{1F924}\u{1F449}\u{1F483}\u{1F633}\u270B\u{1F61A}\u{1F61D}\u{1F634}\u{1F31F}\u{1F62C}\u{1F643}\u{1F340}\u{1F337}\u{1F63B}\u{1F613}\u2B50\u2705\u{1F97A}\u{1F308}\u{1F608}\u{1F918}\u{1F4A6}\u2714\u{1F623}\u{1F3C3}\u{1F490}\u2639\u{1F38A}\u{1F498}\u{1F620}\u261D\u{1F615}\u{1F33A}\u{1F382}\u{1F33B}\u{1F610}\u{1F595}\u{1F49D}\u{1F64A}\u{1F639}\u{1F5E3}\u{1F4AB}\u{1F480}\u{1F451}\u{1F3B5}\u{1F91E}\u{1F61B}\u{1F534}\u{1F624}\u{1F33C}\u{1F62B}\u26BD\u{1F919}\u2615\u{1F3C6}\u{1F92B}\u{1F448}\u{1F62E}\u{1F646}\u{1F37B}\u{1F343}\u{1F436}\u{1F481}\u{1F632}\u{1F33F}\u{1F9E1}\u{1F381}\u26A1\u{1F31E}\u{1F388}\u274C\u270A\u{1F44B}\u{1F630}\u{1F928}\u{1F636}\u{1F91D}\u{1F6B6}\u{1F4B0}\u{1F353}\u{1F4A2}\u{1F91F}\u{1F641}\u{1F6A8}\u{1F4A8}\u{1F92C}\u2708\u{1F380}\u{1F37A}\u{1F913}\u{1F619}\u{1F49F}\u{1F331}\u{1F616}\u{1F476}\u{1F974}\u25B6\u27A1\u2753\u{1F48E}\u{1F4B8}\u2B07\u{1F628}\u{1F31A}\u{1F98B}\u{1F637}\u{1F57A}\u26A0\u{1F645}\u{1F61F}\u{1F635}\u{1F44E}\u{1F932}\u{1F920}\u{1F927}\u{1F4CC}\u{1F535}\u{1F485}\u{1F9D0}\u{1F43E}\u{1F352}\u{1F617}\u{1F911}\u{1F30A}\u{1F92F}\u{1F437}\u260E\u{1F4A7}\u{1F62F}\u{1F486}\u{1F446}\u{1F3A4}\u{1F647}\u{1F351}\u2744\u{1F334}\u{1F4A3}\u{1F438}\u{1F48C}\u{1F4CD}\u{1F940}\u{1F922}\u{1F445}\u{1F4A1}\u{1F4A9}\u{1F450}\u{1F4F8}\u{1F47B}\u{1F910}\u{1F92E}\u{1F3BC}\u{1F975}\u{1F6A9}\u{1F34E}\u{1F34A}\u{1F47C}\u{1F48D}\u{1F4E3}\u{1F942}"), go = Me.reduce((t, e, n)=>(t[n] = e, t), []), yo = Me.reduce((t, e, n)=>(t[e.codePointAt(0)] = n, t), []);
function xo(t) {
    return t.reduce((e, n)=>(e += go[n], e), "");
}
function Bo(t) {
    const e = [];
    for (const n of t){
        const r = yo[n.codePointAt(0)];
        if (r === void 0) throw new Error("Non-base256emoji character: ".concat(n));
        e.push(r);
    }
    return new Uint8Array(e);
}
const Co = Bt({
    prefix: "\u{1F680}",
    name: "base256emoji",
    encode: xo,
    decode: Bo
});
var Ao = Object.freeze({
    __proto__: null,
    base256emoji: Co
}), mo = $e, qe = 128, _o = 127, So = ~_o, vo = Math.pow(2, 31);
function $e(t, e, n) {
    e = e || [], n = n || 0;
    for(var r = n; t >= vo;)e[n++] = t & 255 | qe, t /= 128;
    for(; t & So;)e[n++] = t & 255 | qe, t >>>= 7;
    return e[n] = t | 0, $e.bytes = n - r + 1, e;
}
var Io = Pt, Uo = 128, ke = 127;
function Pt(t, r) {
    var n = 0, r = r || 0, o = 0, s = r, a, u = t.length;
    do {
        if (s >= u) throw Pt.bytes = 0, new RangeError("Could not decode varint");
        a = t[s++], n += o < 28 ? (a & ke) << o : (a & ke) * Math.pow(2, o), o += 7;
    }while (a >= Uo)
    return Pt.bytes = s - r, n;
}
var To = Math.pow(2, 7), Fo = Math.pow(2, 14), No = Math.pow(2, 21), Lo = Math.pow(2, 28), Oo = Math.pow(2, 35), Ho = Math.pow(2, 42), zo = Math.pow(2, 49), Mo = Math.pow(2, 56), qo = Math.pow(2, 63), $o = function(t) {
    return t < To ? 1 : t < Fo ? 2 : t < No ? 3 : t < Lo ? 4 : t < Oo ? 5 : t < Ho ? 6 : t < zo ? 7 : t < Mo ? 8 : t < qo ? 9 : 10;
}, ko = {
    encode: mo,
    decode: Io,
    encodingLength: $o
}, Re = ko;
const je = function(t, e) {
    let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0;
    return Re.encode(t, e, n), e;
}, Ze = (t)=>Re.encodingLength(t), Qt = (t, e)=>{
    const n = e.byteLength, r = Ze(t), o = r + Ze(n), s = new Uint8Array(o + n);
    return je(t, s, 0), je(n, s, r), s.set(e, o), new Ro(t, n, e, s);
};
class Ro {
    constructor(e, n, r, o){
        this.code = e, this.size = n, this.digest = r, this.bytes = o;
    }
}
const Ge = (param)=>{
    let { name: t, code: e, encode: n } = param;
    return new jo(t, e, n);
};
class jo {
    digest(e) {
        if (e instanceof Uint8Array) {
            const n = this.encode(e);
            return n instanceof Uint8Array ? Qt(this.code, n) : n.then((r)=>Qt(this.code, r));
        } else throw Error("Unknown type, must be binary type");
    }
    constructor(e, n, r){
        this.name = e, this.code = n, this.encode = r;
    }
}
const Ve = (t)=>async (e)=>new Uint8Array(await crypto.subtle.digest(t, e)), Zo = Ge({
    name: "sha2-256",
    code: 18,
    encode: Ve("SHA-256")
}), Go = Ge({
    name: "sha2-512",
    code: 19,
    encode: Ve("SHA-512")
});
var Vo = Object.freeze({
    __proto__: null,
    sha256: Zo,
    sha512: Go
});
const Ye = 0, Yo = "identity", Je = He, Jo = (t)=>Qt(Ye, Je(t)), Ko = {
    code: Ye,
    name: Yo,
    encode: Je,
    digest: Jo
};
var Wo = Object.freeze({
    __proto__: null,
    identity: Ko
});
new TextEncoder, new TextDecoder;
const Ke = {
    ...kr,
    ...jr,
    ...Gr,
    ...Yr,
    ...Wr,
    ...io,
    ...ao,
    ...ho,
    ...Eo,
    ...Ao
};
({
    ...Vo,
    ...Wo
});
function We(t, e, n, r) {
    return {
        name: t,
        prefix: e,
        encoder: {
            name: t,
            prefix: e,
            encode: n
        },
        decoder: {
            decode: r
        }
    };
}
const Xe = We("utf8", "u", (t)=>"u" + new TextDecoder("utf8").decode(t), (t)=>new TextEncoder().encode(t.substring(1))), te = We("ascii", "a", (t)=>{
    let e = "a";
    for(let n = 0; n < t.length; n++)e += String.fromCharCode(t[n]);
    return e;
}, (t)=>{
    t = t.substring(1);
    const e = Le(t.length);
    for(let n = 0; n < t.length; n++)e[n] = t.charCodeAt(n);
    return e;
}), Pe = {
    utf8: Xe,
    "utf-8": Xe,
    hex: Ke.base16,
    latin1: te,
    ascii: te,
    binary: te,
    ...Ke
};
function ct(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "utf8";
    const n = Pe[e];
    if (!n) throw new Error('Unsupported encoding "'.concat(e, '"'));
    return (e === "utf8" || e === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? globalThis.Buffer.from(t.buffer, t.byteOffset, t.byteLength).toString("utf8") : n.encoder.encode(t).substring(1);
}
function rt(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "utf8";
    const n = Pe[e];
    if (!n) throw new Error('Unsupported encoding "'.concat(e, '"'));
    return (e === "utf8" || e === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? Xt(globalThis.Buffer.from(t, "utf-8")) : n.decoder.decode("".concat(n.prefix).concat(t));
}
function lt(t) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$walletconnect$2f$safe$2d$json$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeJsonParse"])(ct(rt(t, Dt), Gt));
}
function bt(t) {
    return ct(rt((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$walletconnect$2f$safe$2d$json$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeJsonStringify"])(t), Gt), Dt);
}
function Qe(t) {
    const e = rt(Wt, dt), n = Kt + ct(Oe([
        e,
        t
    ]), dt);
    return [
        Yt,
        Jt,
        n
    ].join(Vt);
}
function tn(t) {
    const [e, n, r] = t.split(Vt);
    if (e !== Yt || n !== Jt) throw new Error('Issuer must be a DID with method "key"');
    if (r.slice(0, 1) !== Kt) throw new Error("Issuer must be a key in mulicodec format");
    const o = rt(r.slice(1), dt);
    if (ct(o.slice(0, 2), dt) !== Wt) throw new Error('Issuer must be a public key with type "Ed25519"');
    const s = o.slice(2);
    if (s.length !== Fe) throw new Error("Issuer must be a public key with length 32 bytes");
    return s;
}
function en(t) {
    return ct(t, Dt);
}
function nn(t) {
    return rt(t, Dt);
}
function rn(t) {
    return rt([
        bt(t.header),
        bt(t.payload)
    ].join(ut), xt);
}
function Xo(t) {
    const e = ct(t, xt).split(ut), n = lt(e[0]), r = lt(e[1]);
    return {
        header: n,
        payload: r
    };
}
function on(t) {
    return [
        bt(t.header),
        bt(t.payload),
        en(t.signature)
    ].join(ut);
}
function sn(t) {
    const e = t.split(ut), n = lt(e[0]), r = lt(e[1]), o = nn(e[2]), s = rt(e.slice(0, 2).join(ut), xt);
    return {
        header: n,
        payload: r,
        signature: o,
        data: s
    };
}
function Po() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : he(Ne);
    const e = Rt.getPublicKey(t);
    return {
        secretKey: Oe([
            t,
            e
        ]),
        publicKey: e
    };
}
async function Qo(t, e, n, r) {
    let o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fromMiliseconds"])(Date.now());
    const s = {
        alg: jt,
        typ: Zt
    }, a = Qe(r.publicKey), u = o + n, i = {
        iss: a,
        sub: t,
        aud: e,
        iat: o,
        exp: u
    }, D = rn({
        header: s,
        payload: i
    }), c = Rt.sign(D, r.secretKey.slice(0, 32));
    return on({
        header: s,
        payload: i,
        signature: c
    });
}
async function ts(t) {
    const { header: e, payload: n, data: r, signature: o } = sn(t);
    if (e.alg !== jt || e.typ !== Zt) throw new Error("JWT must use EdDSA algorithm");
    const s = tn(n.iss);
    return Rt.verify(o, r, s);
}
;
 //# sourceMappingURL=index.es.js.map
}),
"[project]/frontend/node_modules/@reown/appkit/node_modules/@walletconnect/utils/node_modules/@noble/hashes/esm/_assert.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Internal assertion helpers.
 * @module
 */ /** Asserts something is positive integer. */ __turbopack_context__.s([
    "abytes",
    ()=>abytes,
    "aexists",
    ()=>aexists,
    "ahash",
    ()=>ahash,
    "anumber",
    ()=>anumber,
    "aoutput",
    ()=>aoutput
]);
function anumber(n) {
    if (!Number.isSafeInteger(n) || n < 0) throw new Error('positive integer expected, got ' + n);
}
/** Is number an Uint8Array? Copied from utils for perf. */ function isBytes(a) {
    return a instanceof Uint8Array || ArrayBuffer.isView(a) && a.constructor.name === 'Uint8Array';
}
/** Asserts something is Uint8Array. */ function abytes(b) {
    for(var _len = arguments.length, lengths = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
        lengths[_key - 1] = arguments[_key];
    }
    if (!isBytes(b)) throw new Error('Uint8Array expected');
    if (lengths.length > 0 && !lengths.includes(b.length)) throw new Error('Uint8Array expected of length ' + lengths + ', got length=' + b.length);
}
/** Asserts something is hash */ function ahash(h) {
    if (typeof h !== 'function' || typeof h.create !== 'function') throw new Error('Hash should be wrapped by utils.wrapConstructor');
    anumber(h.outputLen);
    anumber(h.blockLen);
}
/** Asserts a hash instance has not been destroyed / finished */ function aexists(instance) {
    let checkFinished = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
    if (instance.destroyed) throw new Error('Hash instance has been destroyed');
    if (checkFinished && instance.finished) throw new Error('Hash#digest() has already been called');
}
/** Asserts output is properly-sized byte array */ function aoutput(out, instance) {
    abytes(out);
    const min = instance.outputLen;
    if (out.length < min) {
        throw new Error('digestInto() expects output buffer of length at least ' + min);
    }
}
;
 //# sourceMappingURL=_assert.js.map
}),
"[project]/frontend/node_modules/@reown/appkit/node_modules/@walletconnect/utils/node_modules/@noble/hashes/esm/_u64.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Internal helpers for u64. BigUint64Array is too slow as per 2025, so we implement it using Uint32Array.
 * @todo re-check https://issues.chromium.org/issues/42212588
 * @module
 */ __turbopack_context__.s([
    "add",
    ()=>add,
    "add3H",
    ()=>add3H,
    "add3L",
    ()=>add3L,
    "add4H",
    ()=>add4H,
    "add4L",
    ()=>add4L,
    "add5H",
    ()=>add5H,
    "add5L",
    ()=>add5L,
    "default",
    ()=>__TURBOPACK__default__export__,
    "fromBig",
    ()=>fromBig,
    "rotlBH",
    ()=>rotlBH,
    "rotlBL",
    ()=>rotlBL,
    "rotlSH",
    ()=>rotlSH,
    "rotlSL",
    ()=>rotlSL,
    "rotr32H",
    ()=>rotr32H,
    "rotr32L",
    ()=>rotr32L,
    "rotrBH",
    ()=>rotrBH,
    "rotrBL",
    ()=>rotrBL,
    "rotrSH",
    ()=>rotrSH,
    "rotrSL",
    ()=>rotrSL,
    "shrSH",
    ()=>shrSH,
    "shrSL",
    ()=>shrSL,
    "split",
    ()=>split,
    "toBig",
    ()=>toBig
]);
const U32_MASK64 = /* @__PURE__ */ BigInt(2 ** 32 - 1);
const _32n = /* @__PURE__ */ BigInt(32);
function fromBig(n) {
    let le = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    if (le) return {
        h: Number(n & U32_MASK64),
        l: Number(n >> _32n & U32_MASK64)
    };
    return {
        h: Number(n >> _32n & U32_MASK64) | 0,
        l: Number(n & U32_MASK64) | 0
    };
}
function split(lst) {
    let le = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    let Ah = new Uint32Array(lst.length);
    let Al = new Uint32Array(lst.length);
    for(let i = 0; i < lst.length; i++){
        const { h, l } = fromBig(lst[i], le);
        [Ah[i], Al[i]] = [
            h,
            l
        ];
    }
    return [
        Ah,
        Al
    ];
}
const toBig = (h, l)=>BigInt(h >>> 0) << _32n | BigInt(l >>> 0);
// for Shift in [0, 32)
const shrSH = (h, _l, s)=>h >>> s;
const shrSL = (h, l, s)=>h << 32 - s | l >>> s;
// Right rotate for Shift in [1, 32)
const rotrSH = (h, l, s)=>h >>> s | l << 32 - s;
const rotrSL = (h, l, s)=>h << 32 - s | l >>> s;
// Right rotate for Shift in (32, 64), NOTE: 32 is special case.
const rotrBH = (h, l, s)=>h << 64 - s | l >>> s - 32;
const rotrBL = (h, l, s)=>h >>> s - 32 | l << 64 - s;
// Right rotate for shift===32 (just swaps l&h)
const rotr32H = (_h, l)=>l;
const rotr32L = (h, _l)=>h;
// Left rotate for Shift in [1, 32)
const rotlSH = (h, l, s)=>h << s | l >>> 32 - s;
const rotlSL = (h, l, s)=>l << s | h >>> 32 - s;
// Left rotate for Shift in (32, 64), NOTE: 32 is special case.
const rotlBH = (h, l, s)=>l << s - 32 | h >>> 64 - s;
const rotlBL = (h, l, s)=>h << s - 32 | l >>> 64 - s;
// JS uses 32-bit signed integers for bitwise operations which means we cannot
// simple take carry out of low bit sum by shift, we need to use division.
function add(Ah, Al, Bh, Bl) {
    const l = (Al >>> 0) + (Bl >>> 0);
    return {
        h: Ah + Bh + (l / 2 ** 32 | 0) | 0,
        l: l | 0
    };
}
// Addition with more than 2 elements
const add3L = (Al, Bl, Cl)=>(Al >>> 0) + (Bl >>> 0) + (Cl >>> 0);
const add3H = (low, Ah, Bh, Ch)=>Ah + Bh + Ch + (low / 2 ** 32 | 0) | 0;
const add4L = (Al, Bl, Cl, Dl)=>(Al >>> 0) + (Bl >>> 0) + (Cl >>> 0) + (Dl >>> 0);
const add4H = (low, Ah, Bh, Ch, Dh)=>Ah + Bh + Ch + Dh + (low / 2 ** 32 | 0) | 0;
const add5L = (Al, Bl, Cl, Dl, El)=>(Al >>> 0) + (Bl >>> 0) + (Cl >>> 0) + (Dl >>> 0) + (El >>> 0);
const add5H = (low, Ah, Bh, Ch, Dh, Eh)=>Ah + Bh + Ch + Dh + Eh + (low / 2 ** 32 | 0) | 0;
;
// prettier-ignore
const u64 = {
    fromBig,
    split,
    toBig,
    shrSH,
    shrSL,
    rotrSH,
    rotrSL,
    rotrBH,
    rotrBL,
    rotr32H,
    rotr32L,
    rotlSH,
    rotlSL,
    rotlBH,
    rotlBL,
    add,
    add3L,
    add3H,
    add4L,
    add4H,
    add5H,
    add5L
};
const __TURBOPACK__default__export__ = u64;
 //# sourceMappingURL=_u64.js.map
}),
"[project]/frontend/node_modules/@reown/appkit/node_modules/@walletconnect/utils/node_modules/@noble/hashes/esm/crypto.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "crypto",
    ()=>crypto
]);
const crypto = typeof globalThis === 'object' && 'crypto' in globalThis ? globalThis.crypto : undefined; //# sourceMappingURL=crypto.js.map
}),
"[project]/frontend/node_modules/@reown/appkit/node_modules/@walletconnect/utils/node_modules/@noble/hashes/esm/utils.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Utilities for hex, bytes, CSPRNG.
 * @module
 */ /*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */ // We use WebCrypto aka globalThis.crypto, which exists in browsers and node.js 16+.
// node.js versions earlier than v19 don't declare it in global scope.
// For node.js, package.json#exports field mapping rewrites import
// from `crypto` to `cryptoNode`, which imports native module.
// Makes the utils un-importable in browsers without a bundler.
// Once node.js 18 is deprecated (2025-04-30), we can just drop the import.
__turbopack_context__.s([
    "Hash",
    ()=>Hash,
    "asyncLoop",
    ()=>asyncLoop,
    "byteSwap",
    ()=>byteSwap,
    "byteSwap32",
    ()=>byteSwap32,
    "byteSwapIfBE",
    ()=>byteSwapIfBE,
    "bytesToHex",
    ()=>bytesToHex,
    "checkOpts",
    ()=>checkOpts,
    "concatBytes",
    ()=>concatBytes,
    "createView",
    ()=>createView,
    "hexToBytes",
    ()=>hexToBytes,
    "isBytes",
    ()=>isBytes,
    "isLE",
    ()=>isLE,
    "nextTick",
    ()=>nextTick,
    "randomBytes",
    ()=>randomBytes,
    "rotl",
    ()=>rotl,
    "rotr",
    ()=>rotr,
    "toBytes",
    ()=>toBytes,
    "u32",
    ()=>u32,
    "u8",
    ()=>u8,
    "utf8ToBytes",
    ()=>utf8ToBytes,
    "wrapConstructor",
    ()=>wrapConstructor,
    "wrapConstructorWithOpts",
    ()=>wrapConstructorWithOpts,
    "wrapXOFConstructorWithOpts",
    ()=>wrapXOFConstructorWithOpts
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2f$node_modules$2f40$walletconnect$2f$utils$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$crypto$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@reown/appkit/node_modules/@walletconnect/utils/node_modules/@noble/hashes/esm/crypto.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2f$node_modules$2f40$walletconnect$2f$utils$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_assert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@reown/appkit/node_modules/@walletconnect/utils/node_modules/@noble/hashes/esm/_assert.js [app-client] (ecmascript)");
;
;
function isBytes(a) {
    return a instanceof Uint8Array || ArrayBuffer.isView(a) && a.constructor.name === 'Uint8Array';
}
function u8(arr) {
    return new Uint8Array(arr.buffer, arr.byteOffset, arr.byteLength);
}
function u32(arr) {
    return new Uint32Array(arr.buffer, arr.byteOffset, Math.floor(arr.byteLength / 4));
}
function createView(arr) {
    return new DataView(arr.buffer, arr.byteOffset, arr.byteLength);
}
function rotr(word, shift) {
    return word << 32 - shift | word >>> shift;
}
function rotl(word, shift) {
    return word << shift | word >>> 32 - shift >>> 0;
}
const isLE = /* @__PURE__ */ (()=>new Uint8Array(new Uint32Array([
        0x11223344
    ]).buffer)[0] === 0x44)();
function byteSwap(word) {
    return word << 24 & 0xff000000 | word << 8 & 0xff0000 | word >>> 8 & 0xff00 | word >>> 24 & 0xff;
}
const byteSwapIfBE = isLE ? (n)=>n : (n)=>byteSwap(n);
function byteSwap32(arr) {
    for(let i = 0; i < arr.length; i++){
        arr[i] = byteSwap(arr[i]);
    }
}
// Array where index 0xf0 (240) is mapped to string 'f0'
const hexes = /* @__PURE__ */ Array.from({
    length: 256
}, (_, i)=>i.toString(16).padStart(2, '0'));
function bytesToHex(bytes) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2f$node_modules$2f40$walletconnect$2f$utils$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_assert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["abytes"])(bytes);
    // pre-caching improves the speed 6x
    let hex = '';
    for(let i = 0; i < bytes.length; i++){
        hex += hexes[bytes[i]];
    }
    return hex;
}
// We use optimized technique to convert hex string to byte array
const asciis = {
    _0: 48,
    _9: 57,
    A: 65,
    F: 70,
    a: 97,
    f: 102
};
function asciiToBase16(ch) {
    if (ch >= asciis._0 && ch <= asciis._9) return ch - asciis._0; // '2' => 50-48
    if (ch >= asciis.A && ch <= asciis.F) return ch - (asciis.A - 10); // 'B' => 66-(65-10)
    if (ch >= asciis.a && ch <= asciis.f) return ch - (asciis.a - 10); // 'b' => 98-(97-10)
    return;
}
function hexToBytes(hex) {
    if (typeof hex !== 'string') throw new Error('hex string expected, got ' + typeof hex);
    const hl = hex.length;
    const al = hl / 2;
    if (hl % 2) throw new Error('hex string expected, got unpadded hex of length ' + hl);
    const array = new Uint8Array(al);
    for(let ai = 0, hi = 0; ai < al; ai++, hi += 2){
        const n1 = asciiToBase16(hex.charCodeAt(hi));
        const n2 = asciiToBase16(hex.charCodeAt(hi + 1));
        if (n1 === undefined || n2 === undefined) {
            const char = hex[hi] + hex[hi + 1];
            throw new Error('hex string expected, got non-hex character "' + char + '" at index ' + hi);
        }
        array[ai] = n1 * 16 + n2; // multiply first octet, e.g. 'a3' => 10*16+3 => 160 + 3 => 163
    }
    return array;
}
const nextTick = async ()=>{};
async function asyncLoop(iters, tick, cb) {
    let ts = Date.now();
    for(let i = 0; i < iters; i++){
        cb(i);
        // Date.now() is not monotonic, so in case if clock goes backwards we return return control too
        const diff = Date.now() - ts;
        if (diff >= 0 && diff < tick) continue;
        await nextTick();
        ts += diff;
    }
}
function utf8ToBytes(str) {
    if (typeof str !== 'string') throw new Error('utf8ToBytes expected string, got ' + typeof str);
    return new Uint8Array(new TextEncoder().encode(str)); // https://bugzil.la/1681809
}
function toBytes(data) {
    if (typeof data === 'string') data = utf8ToBytes(data);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2f$node_modules$2f40$walletconnect$2f$utils$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_assert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["abytes"])(data);
    return data;
}
function concatBytes() {
    for(var _len = arguments.length, arrays = new Array(_len), _key = 0; _key < _len; _key++){
        arrays[_key] = arguments[_key];
    }
    let sum = 0;
    for(let i = 0; i < arrays.length; i++){
        const a = arrays[i];
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2f$node_modules$2f40$walletconnect$2f$utils$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_assert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["abytes"])(a);
        sum += a.length;
    }
    const res = new Uint8Array(sum);
    for(let i = 0, pad = 0; i < arrays.length; i++){
        const a = arrays[i];
        res.set(a, pad);
        pad += a.length;
    }
    return res;
}
class Hash {
    // Safe version that clones internal state
    clone() {
        return this._cloneInto();
    }
}
function checkOpts(defaults, opts) {
    if (opts !== undefined && ({}).toString.call(opts) !== '[object Object]') throw new Error('Options should be object or undefined');
    const merged = Object.assign(defaults, opts);
    return merged;
}
function wrapConstructor(hashCons) {
    const hashC = (msg)=>hashCons().update(toBytes(msg)).digest();
    const tmp = hashCons();
    hashC.outputLen = tmp.outputLen;
    hashC.blockLen = tmp.blockLen;
    hashC.create = ()=>hashCons();
    return hashC;
}
function wrapConstructorWithOpts(hashCons) {
    const hashC = (msg, opts)=>hashCons(opts).update(toBytes(msg)).digest();
    const tmp = hashCons({});
    hashC.outputLen = tmp.outputLen;
    hashC.blockLen = tmp.blockLen;
    hashC.create = (opts)=>hashCons(opts);
    return hashC;
}
function wrapXOFConstructorWithOpts(hashCons) {
    const hashC = (msg, opts)=>hashCons(opts).update(toBytes(msg)).digest();
    const tmp = hashCons({});
    hashC.outputLen = tmp.outputLen;
    hashC.blockLen = tmp.blockLen;
    hashC.create = (opts)=>hashCons(opts);
    return hashC;
}
function randomBytes() {
    let bytesLength = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 32;
    if (__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2f$node_modules$2f40$walletconnect$2f$utils$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$crypto$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["crypto"] && typeof __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2f$node_modules$2f40$walletconnect$2f$utils$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$crypto$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["crypto"].getRandomValues === 'function') {
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2f$node_modules$2f40$walletconnect$2f$utils$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$crypto$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["crypto"].getRandomValues(new Uint8Array(bytesLength));
    }
    // Legacy Node.js compatibility
    if (__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2f$node_modules$2f40$walletconnect$2f$utils$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$crypto$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["crypto"] && typeof __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2f$node_modules$2f40$walletconnect$2f$utils$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$crypto$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["crypto"].randomBytes === 'function') {
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2f$node_modules$2f40$walletconnect$2f$utils$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$crypto$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["crypto"].randomBytes(bytesLength);
    }
    throw new Error('crypto.getRandomValues must be defined');
} //# sourceMappingURL=utils.js.map
}),
"[project]/frontend/node_modules/@reown/appkit/node_modules/@walletconnect/utils/node_modules/@noble/hashes/esm/sha3.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * SHA3 (keccak) hash function, based on a new "Sponge function" design.
 * Different from older hashes, the internal state is bigger than output size.
 *
 * Check out [FIPS-202](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.202.pdf),
 * [Website](https://keccak.team/keccak.html),
 * [the differences between SHA-3 and Keccak](https://crypto.stackexchange.com/questions/15727/what-are-the-key-differences-between-the-draft-sha-3-standard-and-the-keccak-sub).
 *
 * Check out `sha3-addons` module for cSHAKE, k12, and others.
 * @module
 */ __turbopack_context__.s([
    "Keccak",
    ()=>Keccak,
    "keccakP",
    ()=>keccakP,
    "keccak_224",
    ()=>keccak_224,
    "keccak_256",
    ()=>keccak_256,
    "keccak_384",
    ()=>keccak_384,
    "keccak_512",
    ()=>keccak_512,
    "sha3_224",
    ()=>sha3_224,
    "sha3_256",
    ()=>sha3_256,
    "sha3_384",
    ()=>sha3_384,
    "sha3_512",
    ()=>sha3_512,
    "shake128",
    ()=>shake128,
    "shake256",
    ()=>shake256
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2f$node_modules$2f40$walletconnect$2f$utils$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_assert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@reown/appkit/node_modules/@walletconnect/utils/node_modules/@noble/hashes/esm/_assert.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2f$node_modules$2f40$walletconnect$2f$utils$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_u64$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@reown/appkit/node_modules/@walletconnect/utils/node_modules/@noble/hashes/esm/_u64.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2f$node_modules$2f40$walletconnect$2f$utils$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@reown/appkit/node_modules/@walletconnect/utils/node_modules/@noble/hashes/esm/utils.js [app-client] (ecmascript)");
;
;
;
// Various per round constants calculations
const SHA3_PI = [];
const SHA3_ROTL = [];
const _SHA3_IOTA = [];
const _0n = /* @__PURE__ */ BigInt(0);
const _1n = /* @__PURE__ */ BigInt(1);
const _2n = /* @__PURE__ */ BigInt(2);
const _7n = /* @__PURE__ */ BigInt(7);
const _256n = /* @__PURE__ */ BigInt(256);
const _0x71n = /* @__PURE__ */ BigInt(0x71);
for(let round = 0, R = _1n, x = 1, y = 0; round < 24; round++){
    // Pi
    [x, y] = [
        y,
        (2 * x + 3 * y) % 5
    ];
    SHA3_PI.push(2 * (5 * y + x));
    // Rotational
    SHA3_ROTL.push((round + 1) * (round + 2) / 2 % 64);
    // Iota
    let t = _0n;
    for(let j = 0; j < 7; j++){
        R = (R << _1n ^ (R >> _7n) * _0x71n) % _256n;
        if (R & _2n) t ^= _1n << (_1n << /* @__PURE__ */ BigInt(j)) - _1n;
    }
    _SHA3_IOTA.push(t);
}
const [SHA3_IOTA_H, SHA3_IOTA_L] = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2f$node_modules$2f40$walletconnect$2f$utils$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_u64$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["split"])(_SHA3_IOTA, true);
// Left rotation (without 0, 32, 64)
const rotlH = (h, l, s)=>s > 32 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2f$node_modules$2f40$walletconnect$2f$utils$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_u64$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotlBH"])(h, l, s) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2f$node_modules$2f40$walletconnect$2f$utils$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_u64$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotlSH"])(h, l, s);
const rotlL = (h, l, s)=>s > 32 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2f$node_modules$2f40$walletconnect$2f$utils$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_u64$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotlBL"])(h, l, s) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2f$node_modules$2f40$walletconnect$2f$utils$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_u64$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotlSL"])(h, l, s);
function keccakP(s) {
    let rounds = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 24;
    const B = new Uint32Array(5 * 2);
    // NOTE: all indices are x2 since we store state as u32 instead of u64 (bigints to slow in js)
    for(let round = 24 - rounds; round < 24; round++){
        // Theta θ
        for(let x = 0; x < 10; x++)B[x] = s[x] ^ s[x + 10] ^ s[x + 20] ^ s[x + 30] ^ s[x + 40];
        for(let x = 0; x < 10; x += 2){
            const idx1 = (x + 8) % 10;
            const idx0 = (x + 2) % 10;
            const B0 = B[idx0];
            const B1 = B[idx0 + 1];
            const Th = rotlH(B0, B1, 1) ^ B[idx1];
            const Tl = rotlL(B0, B1, 1) ^ B[idx1 + 1];
            for(let y = 0; y < 50; y += 10){
                s[x + y] ^= Th;
                s[x + y + 1] ^= Tl;
            }
        }
        // Rho (ρ) and Pi (π)
        let curH = s[2];
        let curL = s[3];
        for(let t = 0; t < 24; t++){
            const shift = SHA3_ROTL[t];
            const Th = rotlH(curH, curL, shift);
            const Tl = rotlL(curH, curL, shift);
            const PI = SHA3_PI[t];
            curH = s[PI];
            curL = s[PI + 1];
            s[PI] = Th;
            s[PI + 1] = Tl;
        }
        // Chi (χ)
        for(let y = 0; y < 50; y += 10){
            for(let x = 0; x < 10; x++)B[x] = s[y + x];
            for(let x = 0; x < 10; x++)s[y + x] ^= ~B[(x + 2) % 10] & B[(x + 4) % 10];
        }
        // Iota (ι)
        s[0] ^= SHA3_IOTA_H[round];
        s[1] ^= SHA3_IOTA_L[round];
    }
    B.fill(0);
}
class Keccak extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2f$node_modules$2f40$walletconnect$2f$utils$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Hash"] {
    keccak() {
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2f$node_modules$2f40$walletconnect$2f$utils$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isLE"]) (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2f$node_modules$2f40$walletconnect$2f$utils$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["byteSwap32"])(this.state32);
        keccakP(this.state32, this.rounds);
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2f$node_modules$2f40$walletconnect$2f$utils$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isLE"]) (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2f$node_modules$2f40$walletconnect$2f$utils$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["byteSwap32"])(this.state32);
        this.posOut = 0;
        this.pos = 0;
    }
    update(data) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2f$node_modules$2f40$walletconnect$2f$utils$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_assert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["aexists"])(this);
        const { blockLen, state } = this;
        data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2f$node_modules$2f40$walletconnect$2f$utils$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toBytes"])(data);
        const len = data.length;
        for(let pos = 0; pos < len;){
            const take = Math.min(blockLen - this.pos, len - pos);
            for(let i = 0; i < take; i++)state[this.pos++] ^= data[pos++];
            if (this.pos === blockLen) this.keccak();
        }
        return this;
    }
    finish() {
        if (this.finished) return;
        this.finished = true;
        const { state, suffix, pos, blockLen } = this;
        // Do the padding
        state[pos] ^= suffix;
        if ((suffix & 0x80) !== 0 && pos === blockLen - 1) this.keccak();
        state[blockLen - 1] ^= 0x80;
        this.keccak();
    }
    writeInto(out) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2f$node_modules$2f40$walletconnect$2f$utils$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_assert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["aexists"])(this, false);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2f$node_modules$2f40$walletconnect$2f$utils$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_assert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["abytes"])(out);
        this.finish();
        const bufferOut = this.state;
        const { blockLen } = this;
        for(let pos = 0, len = out.length; pos < len;){
            if (this.posOut >= blockLen) this.keccak();
            const take = Math.min(blockLen - this.posOut, len - pos);
            out.set(bufferOut.subarray(this.posOut, this.posOut + take), pos);
            this.posOut += take;
            pos += take;
        }
        return out;
    }
    xofInto(out) {
        // Sha3/Keccak usage with XOF is probably mistake, only SHAKE instances can do XOF
        if (!this.enableXOF) throw new Error('XOF is not possible for this instance');
        return this.writeInto(out);
    }
    xof(bytes) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2f$node_modules$2f40$walletconnect$2f$utils$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_assert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["anumber"])(bytes);
        return this.xofInto(new Uint8Array(bytes));
    }
    digestInto(out) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2f$node_modules$2f40$walletconnect$2f$utils$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_assert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["aoutput"])(out, this);
        if (this.finished) throw new Error('digest() was already called');
        this.writeInto(out);
        this.destroy();
        return out;
    }
    digest() {
        return this.digestInto(new Uint8Array(this.outputLen));
    }
    destroy() {
        this.destroyed = true;
        this.state.fill(0);
    }
    _cloneInto(to) {
        const { blockLen, suffix, outputLen, rounds, enableXOF } = this;
        to || (to = new Keccak(blockLen, suffix, outputLen, enableXOF, rounds));
        to.state32.set(this.state32);
        to.pos = this.pos;
        to.posOut = this.posOut;
        to.finished = this.finished;
        to.rounds = rounds;
        // Suffix can change in cSHAKE
        to.suffix = suffix;
        to.outputLen = outputLen;
        to.enableXOF = enableXOF;
        to.destroyed = this.destroyed;
        return to;
    }
    // NOTE: we accept arguments in bytes instead of bits here.
    constructor(blockLen, suffix, outputLen, enableXOF = false, rounds = 24){
        super();
        this.blockLen = blockLen;
        this.suffix = suffix;
        this.outputLen = outputLen;
        this.enableXOF = enableXOF;
        this.rounds = rounds;
        this.pos = 0;
        this.posOut = 0;
        this.finished = false;
        this.destroyed = false;
        // Can be passed from user as dkLen
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2f$node_modules$2f40$walletconnect$2f$utils$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_assert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["anumber"])(outputLen);
        // 1600 = 5x5 matrix of 64bit.  1600 bits === 200 bytes
        // 0 < blockLen < 200
        if (0 >= this.blockLen || this.blockLen >= 200) throw new Error('Sha3 supports only keccak-f1600 function');
        this.state = new Uint8Array(200);
        this.state32 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2f$node_modules$2f40$walletconnect$2f$utils$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["u32"])(this.state);
    }
}
const gen = (suffix, blockLen, outputLen)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2f$node_modules$2f40$walletconnect$2f$utils$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wrapConstructor"])(()=>new Keccak(blockLen, suffix, outputLen));
const sha3_224 = /* @__PURE__ */ gen(0x06, 144, 224 / 8);
const sha3_256 = /* @__PURE__ */ gen(0x06, 136, 256 / 8);
const sha3_384 = /* @__PURE__ */ gen(0x06, 104, 384 / 8);
const sha3_512 = /* @__PURE__ */ gen(0x06, 72, 512 / 8);
const keccak_224 = /* @__PURE__ */ gen(0x01, 144, 224 / 8);
const keccak_256 = /* @__PURE__ */ gen(0x01, 136, 256 / 8);
const keccak_384 = /* @__PURE__ */ gen(0x01, 104, 384 / 8);
const keccak_512 = /* @__PURE__ */ gen(0x01, 72, 512 / 8);
const genShake = (suffix, blockLen, outputLen)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2f$node_modules$2f40$walletconnect$2f$utils$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wrapXOFConstructorWithOpts"])(function() {
        let opts = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        return new Keccak(blockLen, suffix, opts.dkLen === undefined ? outputLen : opts.dkLen, true);
    });
const shake128 = /* @__PURE__ */ genShake(0x1f, 168, 128 / 8);
const shake256 = /* @__PURE__ */ genShake(0x1f, 136, 256 / 8); //# sourceMappingURL=sha3.js.map
}),
"[project]/frontend/node_modules/@reown/appkit-controllers/node_modules/@walletconnect/utils/node_modules/@noble/hashes/esm/_assert.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Internal assertion helpers.
 * @module
 */ /** Asserts something is positive integer. */ __turbopack_context__.s([
    "abytes",
    ()=>abytes,
    "aexists",
    ()=>aexists,
    "ahash",
    ()=>ahash,
    "anumber",
    ()=>anumber,
    "aoutput",
    ()=>aoutput
]);
function anumber(n) {
    if (!Number.isSafeInteger(n) || n < 0) throw new Error('positive integer expected, got ' + n);
}
/** Is number an Uint8Array? Copied from utils for perf. */ function isBytes(a) {
    return a instanceof Uint8Array || ArrayBuffer.isView(a) && a.constructor.name === 'Uint8Array';
}
/** Asserts something is Uint8Array. */ function abytes(b) {
    for(var _len = arguments.length, lengths = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
        lengths[_key - 1] = arguments[_key];
    }
    if (!isBytes(b)) throw new Error('Uint8Array expected');
    if (lengths.length > 0 && !lengths.includes(b.length)) throw new Error('Uint8Array expected of length ' + lengths + ', got length=' + b.length);
}
/** Asserts something is hash */ function ahash(h) {
    if (typeof h !== 'function' || typeof h.create !== 'function') throw new Error('Hash should be wrapped by utils.wrapConstructor');
    anumber(h.outputLen);
    anumber(h.blockLen);
}
/** Asserts a hash instance has not been destroyed / finished */ function aexists(instance) {
    let checkFinished = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
    if (instance.destroyed) throw new Error('Hash instance has been destroyed');
    if (checkFinished && instance.finished) throw new Error('Hash#digest() has already been called');
}
/** Asserts output is properly-sized byte array */ function aoutput(out, instance) {
    abytes(out);
    const min = instance.outputLen;
    if (out.length < min) {
        throw new Error('digestInto() expects output buffer of length at least ' + min);
    }
}
;
 //# sourceMappingURL=_assert.js.map
}),
"[project]/frontend/node_modules/@reown/appkit-controllers/node_modules/@walletconnect/utils/node_modules/@noble/hashes/esm/_u64.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Internal helpers for u64. BigUint64Array is too slow as per 2025, so we implement it using Uint32Array.
 * @todo re-check https://issues.chromium.org/issues/42212588
 * @module
 */ __turbopack_context__.s([
    "add",
    ()=>add,
    "add3H",
    ()=>add3H,
    "add3L",
    ()=>add3L,
    "add4H",
    ()=>add4H,
    "add4L",
    ()=>add4L,
    "add5H",
    ()=>add5H,
    "add5L",
    ()=>add5L,
    "default",
    ()=>__TURBOPACK__default__export__,
    "fromBig",
    ()=>fromBig,
    "rotlBH",
    ()=>rotlBH,
    "rotlBL",
    ()=>rotlBL,
    "rotlSH",
    ()=>rotlSH,
    "rotlSL",
    ()=>rotlSL,
    "rotr32H",
    ()=>rotr32H,
    "rotr32L",
    ()=>rotr32L,
    "rotrBH",
    ()=>rotrBH,
    "rotrBL",
    ()=>rotrBL,
    "rotrSH",
    ()=>rotrSH,
    "rotrSL",
    ()=>rotrSL,
    "shrSH",
    ()=>shrSH,
    "shrSL",
    ()=>shrSL,
    "split",
    ()=>split,
    "toBig",
    ()=>toBig
]);
const U32_MASK64 = /* @__PURE__ */ BigInt(2 ** 32 - 1);
const _32n = /* @__PURE__ */ BigInt(32);
function fromBig(n) {
    let le = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    if (le) return {
        h: Number(n & U32_MASK64),
        l: Number(n >> _32n & U32_MASK64)
    };
    return {
        h: Number(n >> _32n & U32_MASK64) | 0,
        l: Number(n & U32_MASK64) | 0
    };
}
function split(lst) {
    let le = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    let Ah = new Uint32Array(lst.length);
    let Al = new Uint32Array(lst.length);
    for(let i = 0; i < lst.length; i++){
        const { h, l } = fromBig(lst[i], le);
        [Ah[i], Al[i]] = [
            h,
            l
        ];
    }
    return [
        Ah,
        Al
    ];
}
const toBig = (h, l)=>BigInt(h >>> 0) << _32n | BigInt(l >>> 0);
// for Shift in [0, 32)
const shrSH = (h, _l, s)=>h >>> s;
const shrSL = (h, l, s)=>h << 32 - s | l >>> s;
// Right rotate for Shift in [1, 32)
const rotrSH = (h, l, s)=>h >>> s | l << 32 - s;
const rotrSL = (h, l, s)=>h << 32 - s | l >>> s;
// Right rotate for Shift in (32, 64), NOTE: 32 is special case.
const rotrBH = (h, l, s)=>h << 64 - s | l >>> s - 32;
const rotrBL = (h, l, s)=>h >>> s - 32 | l << 64 - s;
// Right rotate for shift===32 (just swaps l&h)
const rotr32H = (_h, l)=>l;
const rotr32L = (h, _l)=>h;
// Left rotate for Shift in [1, 32)
const rotlSH = (h, l, s)=>h << s | l >>> 32 - s;
const rotlSL = (h, l, s)=>l << s | h >>> 32 - s;
// Left rotate for Shift in (32, 64), NOTE: 32 is special case.
const rotlBH = (h, l, s)=>l << s - 32 | h >>> 64 - s;
const rotlBL = (h, l, s)=>h << s - 32 | l >>> 64 - s;
// JS uses 32-bit signed integers for bitwise operations which means we cannot
// simple take carry out of low bit sum by shift, we need to use division.
function add(Ah, Al, Bh, Bl) {
    const l = (Al >>> 0) + (Bl >>> 0);
    return {
        h: Ah + Bh + (l / 2 ** 32 | 0) | 0,
        l: l | 0
    };
}
// Addition with more than 2 elements
const add3L = (Al, Bl, Cl)=>(Al >>> 0) + (Bl >>> 0) + (Cl >>> 0);
const add3H = (low, Ah, Bh, Ch)=>Ah + Bh + Ch + (low / 2 ** 32 | 0) | 0;
const add4L = (Al, Bl, Cl, Dl)=>(Al >>> 0) + (Bl >>> 0) + (Cl >>> 0) + (Dl >>> 0);
const add4H = (low, Ah, Bh, Ch, Dh)=>Ah + Bh + Ch + Dh + (low / 2 ** 32 | 0) | 0;
const add5L = (Al, Bl, Cl, Dl, El)=>(Al >>> 0) + (Bl >>> 0) + (Cl >>> 0) + (Dl >>> 0) + (El >>> 0);
const add5H = (low, Ah, Bh, Ch, Dh, Eh)=>Ah + Bh + Ch + Dh + Eh + (low / 2 ** 32 | 0) | 0;
;
// prettier-ignore
const u64 = {
    fromBig,
    split,
    toBig,
    shrSH,
    shrSL,
    rotrSH,
    rotrSL,
    rotrBH,
    rotrBL,
    rotr32H,
    rotr32L,
    rotlSH,
    rotlSL,
    rotlBH,
    rotlBL,
    add,
    add3L,
    add3H,
    add4L,
    add4H,
    add5H,
    add5L
};
const __TURBOPACK__default__export__ = u64;
 //# sourceMappingURL=_u64.js.map
}),
"[project]/frontend/node_modules/@reown/appkit-controllers/node_modules/@walletconnect/utils/node_modules/@noble/hashes/esm/crypto.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "crypto",
    ()=>crypto
]);
const crypto = typeof globalThis === 'object' && 'crypto' in globalThis ? globalThis.crypto : undefined; //# sourceMappingURL=crypto.js.map
}),
"[project]/frontend/node_modules/@reown/appkit-controllers/node_modules/@walletconnect/utils/node_modules/@noble/hashes/esm/utils.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Utilities for hex, bytes, CSPRNG.
 * @module
 */ /*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */ // We use WebCrypto aka globalThis.crypto, which exists in browsers and node.js 16+.
// node.js versions earlier than v19 don't declare it in global scope.
// For node.js, package.json#exports field mapping rewrites import
// from `crypto` to `cryptoNode`, which imports native module.
// Makes the utils un-importable in browsers without a bundler.
// Once node.js 18 is deprecated (2025-04-30), we can just drop the import.
__turbopack_context__.s([
    "Hash",
    ()=>Hash,
    "asyncLoop",
    ()=>asyncLoop,
    "byteSwap",
    ()=>byteSwap,
    "byteSwap32",
    ()=>byteSwap32,
    "byteSwapIfBE",
    ()=>byteSwapIfBE,
    "bytesToHex",
    ()=>bytesToHex,
    "checkOpts",
    ()=>checkOpts,
    "concatBytes",
    ()=>concatBytes,
    "createView",
    ()=>createView,
    "hexToBytes",
    ()=>hexToBytes,
    "isBytes",
    ()=>isBytes,
    "isLE",
    ()=>isLE,
    "nextTick",
    ()=>nextTick,
    "randomBytes",
    ()=>randomBytes,
    "rotl",
    ()=>rotl,
    "rotr",
    ()=>rotr,
    "toBytes",
    ()=>toBytes,
    "u32",
    ()=>u32,
    "u8",
    ()=>u8,
    "utf8ToBytes",
    ()=>utf8ToBytes,
    "wrapConstructor",
    ()=>wrapConstructor,
    "wrapConstructorWithOpts",
    ()=>wrapConstructorWithOpts,
    "wrapXOFConstructorWithOpts",
    ()=>wrapXOFConstructorWithOpts
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$node_modules$2f40$walletconnect$2f$utils$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$crypto$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@reown/appkit-controllers/node_modules/@walletconnect/utils/node_modules/@noble/hashes/esm/crypto.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$node_modules$2f40$walletconnect$2f$utils$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_assert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@reown/appkit-controllers/node_modules/@walletconnect/utils/node_modules/@noble/hashes/esm/_assert.js [app-client] (ecmascript)");
;
;
function isBytes(a) {
    return a instanceof Uint8Array || ArrayBuffer.isView(a) && a.constructor.name === 'Uint8Array';
}
function u8(arr) {
    return new Uint8Array(arr.buffer, arr.byteOffset, arr.byteLength);
}
function u32(arr) {
    return new Uint32Array(arr.buffer, arr.byteOffset, Math.floor(arr.byteLength / 4));
}
function createView(arr) {
    return new DataView(arr.buffer, arr.byteOffset, arr.byteLength);
}
function rotr(word, shift) {
    return word << 32 - shift | word >>> shift;
}
function rotl(word, shift) {
    return word << shift | word >>> 32 - shift >>> 0;
}
const isLE = /* @__PURE__ */ (()=>new Uint8Array(new Uint32Array([
        0x11223344
    ]).buffer)[0] === 0x44)();
function byteSwap(word) {
    return word << 24 & 0xff000000 | word << 8 & 0xff0000 | word >>> 8 & 0xff00 | word >>> 24 & 0xff;
}
const byteSwapIfBE = isLE ? (n)=>n : (n)=>byteSwap(n);
function byteSwap32(arr) {
    for(let i = 0; i < arr.length; i++){
        arr[i] = byteSwap(arr[i]);
    }
}
// Array where index 0xf0 (240) is mapped to string 'f0'
const hexes = /* @__PURE__ */ Array.from({
    length: 256
}, (_, i)=>i.toString(16).padStart(2, '0'));
function bytesToHex(bytes) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$node_modules$2f40$walletconnect$2f$utils$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_assert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["abytes"])(bytes);
    // pre-caching improves the speed 6x
    let hex = '';
    for(let i = 0; i < bytes.length; i++){
        hex += hexes[bytes[i]];
    }
    return hex;
}
// We use optimized technique to convert hex string to byte array
const asciis = {
    _0: 48,
    _9: 57,
    A: 65,
    F: 70,
    a: 97,
    f: 102
};
function asciiToBase16(ch) {
    if (ch >= asciis._0 && ch <= asciis._9) return ch - asciis._0; // '2' => 50-48
    if (ch >= asciis.A && ch <= asciis.F) return ch - (asciis.A - 10); // 'B' => 66-(65-10)
    if (ch >= asciis.a && ch <= asciis.f) return ch - (asciis.a - 10); // 'b' => 98-(97-10)
    return;
}
function hexToBytes(hex) {
    if (typeof hex !== 'string') throw new Error('hex string expected, got ' + typeof hex);
    const hl = hex.length;
    const al = hl / 2;
    if (hl % 2) throw new Error('hex string expected, got unpadded hex of length ' + hl);
    const array = new Uint8Array(al);
    for(let ai = 0, hi = 0; ai < al; ai++, hi += 2){
        const n1 = asciiToBase16(hex.charCodeAt(hi));
        const n2 = asciiToBase16(hex.charCodeAt(hi + 1));
        if (n1 === undefined || n2 === undefined) {
            const char = hex[hi] + hex[hi + 1];
            throw new Error('hex string expected, got non-hex character "' + char + '" at index ' + hi);
        }
        array[ai] = n1 * 16 + n2; // multiply first octet, e.g. 'a3' => 10*16+3 => 160 + 3 => 163
    }
    return array;
}
const nextTick = async ()=>{};
async function asyncLoop(iters, tick, cb) {
    let ts = Date.now();
    for(let i = 0; i < iters; i++){
        cb(i);
        // Date.now() is not monotonic, so in case if clock goes backwards we return return control too
        const diff = Date.now() - ts;
        if (diff >= 0 && diff < tick) continue;
        await nextTick();
        ts += diff;
    }
}
function utf8ToBytes(str) {
    if (typeof str !== 'string') throw new Error('utf8ToBytes expected string, got ' + typeof str);
    return new Uint8Array(new TextEncoder().encode(str)); // https://bugzil.la/1681809
}
function toBytes(data) {
    if (typeof data === 'string') data = utf8ToBytes(data);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$node_modules$2f40$walletconnect$2f$utils$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_assert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["abytes"])(data);
    return data;
}
function concatBytes() {
    for(var _len = arguments.length, arrays = new Array(_len), _key = 0; _key < _len; _key++){
        arrays[_key] = arguments[_key];
    }
    let sum = 0;
    for(let i = 0; i < arrays.length; i++){
        const a = arrays[i];
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$node_modules$2f40$walletconnect$2f$utils$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_assert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["abytes"])(a);
        sum += a.length;
    }
    const res = new Uint8Array(sum);
    for(let i = 0, pad = 0; i < arrays.length; i++){
        const a = arrays[i];
        res.set(a, pad);
        pad += a.length;
    }
    return res;
}
class Hash {
    // Safe version that clones internal state
    clone() {
        return this._cloneInto();
    }
}
function checkOpts(defaults, opts) {
    if (opts !== undefined && ({}).toString.call(opts) !== '[object Object]') throw new Error('Options should be object or undefined');
    const merged = Object.assign(defaults, opts);
    return merged;
}
function wrapConstructor(hashCons) {
    const hashC = (msg)=>hashCons().update(toBytes(msg)).digest();
    const tmp = hashCons();
    hashC.outputLen = tmp.outputLen;
    hashC.blockLen = tmp.blockLen;
    hashC.create = ()=>hashCons();
    return hashC;
}
function wrapConstructorWithOpts(hashCons) {
    const hashC = (msg, opts)=>hashCons(opts).update(toBytes(msg)).digest();
    const tmp = hashCons({});
    hashC.outputLen = tmp.outputLen;
    hashC.blockLen = tmp.blockLen;
    hashC.create = (opts)=>hashCons(opts);
    return hashC;
}
function wrapXOFConstructorWithOpts(hashCons) {
    const hashC = (msg, opts)=>hashCons(opts).update(toBytes(msg)).digest();
    const tmp = hashCons({});
    hashC.outputLen = tmp.outputLen;
    hashC.blockLen = tmp.blockLen;
    hashC.create = (opts)=>hashCons(opts);
    return hashC;
}
function randomBytes() {
    let bytesLength = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 32;
    if (__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$node_modules$2f40$walletconnect$2f$utils$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$crypto$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["crypto"] && typeof __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$node_modules$2f40$walletconnect$2f$utils$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$crypto$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["crypto"].getRandomValues === 'function') {
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$node_modules$2f40$walletconnect$2f$utils$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$crypto$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["crypto"].getRandomValues(new Uint8Array(bytesLength));
    }
    // Legacy Node.js compatibility
    if (__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$node_modules$2f40$walletconnect$2f$utils$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$crypto$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["crypto"] && typeof __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$node_modules$2f40$walletconnect$2f$utils$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$crypto$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["crypto"].randomBytes === 'function') {
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$node_modules$2f40$walletconnect$2f$utils$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$crypto$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["crypto"].randomBytes(bytesLength);
    }
    throw new Error('crypto.getRandomValues must be defined');
} //# sourceMappingURL=utils.js.map
}),
"[project]/frontend/node_modules/@reown/appkit-controllers/node_modules/@walletconnect/utils/node_modules/@noble/hashes/esm/sha3.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * SHA3 (keccak) hash function, based on a new "Sponge function" design.
 * Different from older hashes, the internal state is bigger than output size.
 *
 * Check out [FIPS-202](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.202.pdf),
 * [Website](https://keccak.team/keccak.html),
 * [the differences between SHA-3 and Keccak](https://crypto.stackexchange.com/questions/15727/what-are-the-key-differences-between-the-draft-sha-3-standard-and-the-keccak-sub).
 *
 * Check out `sha3-addons` module for cSHAKE, k12, and others.
 * @module
 */ __turbopack_context__.s([
    "Keccak",
    ()=>Keccak,
    "keccakP",
    ()=>keccakP,
    "keccak_224",
    ()=>keccak_224,
    "keccak_256",
    ()=>keccak_256,
    "keccak_384",
    ()=>keccak_384,
    "keccak_512",
    ()=>keccak_512,
    "sha3_224",
    ()=>sha3_224,
    "sha3_256",
    ()=>sha3_256,
    "sha3_384",
    ()=>sha3_384,
    "sha3_512",
    ()=>sha3_512,
    "shake128",
    ()=>shake128,
    "shake256",
    ()=>shake256
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$node_modules$2f40$walletconnect$2f$utils$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_assert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@reown/appkit-controllers/node_modules/@walletconnect/utils/node_modules/@noble/hashes/esm/_assert.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$node_modules$2f40$walletconnect$2f$utils$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_u64$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@reown/appkit-controllers/node_modules/@walletconnect/utils/node_modules/@noble/hashes/esm/_u64.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$node_modules$2f40$walletconnect$2f$utils$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@reown/appkit-controllers/node_modules/@walletconnect/utils/node_modules/@noble/hashes/esm/utils.js [app-client] (ecmascript)");
;
;
;
// Various per round constants calculations
const SHA3_PI = [];
const SHA3_ROTL = [];
const _SHA3_IOTA = [];
const _0n = /* @__PURE__ */ BigInt(0);
const _1n = /* @__PURE__ */ BigInt(1);
const _2n = /* @__PURE__ */ BigInt(2);
const _7n = /* @__PURE__ */ BigInt(7);
const _256n = /* @__PURE__ */ BigInt(256);
const _0x71n = /* @__PURE__ */ BigInt(0x71);
for(let round = 0, R = _1n, x = 1, y = 0; round < 24; round++){
    // Pi
    [x, y] = [
        y,
        (2 * x + 3 * y) % 5
    ];
    SHA3_PI.push(2 * (5 * y + x));
    // Rotational
    SHA3_ROTL.push((round + 1) * (round + 2) / 2 % 64);
    // Iota
    let t = _0n;
    for(let j = 0; j < 7; j++){
        R = (R << _1n ^ (R >> _7n) * _0x71n) % _256n;
        if (R & _2n) t ^= _1n << (_1n << /* @__PURE__ */ BigInt(j)) - _1n;
    }
    _SHA3_IOTA.push(t);
}
const [SHA3_IOTA_H, SHA3_IOTA_L] = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$node_modules$2f40$walletconnect$2f$utils$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_u64$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["split"])(_SHA3_IOTA, true);
// Left rotation (without 0, 32, 64)
const rotlH = (h, l, s)=>s > 32 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$node_modules$2f40$walletconnect$2f$utils$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_u64$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotlBH"])(h, l, s) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$node_modules$2f40$walletconnect$2f$utils$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_u64$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotlSH"])(h, l, s);
const rotlL = (h, l, s)=>s > 32 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$node_modules$2f40$walletconnect$2f$utils$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_u64$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotlBL"])(h, l, s) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$node_modules$2f40$walletconnect$2f$utils$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_u64$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotlSL"])(h, l, s);
function keccakP(s) {
    let rounds = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 24;
    const B = new Uint32Array(5 * 2);
    // NOTE: all indices are x2 since we store state as u32 instead of u64 (bigints to slow in js)
    for(let round = 24 - rounds; round < 24; round++){
        // Theta θ
        for(let x = 0; x < 10; x++)B[x] = s[x] ^ s[x + 10] ^ s[x + 20] ^ s[x + 30] ^ s[x + 40];
        for(let x = 0; x < 10; x += 2){
            const idx1 = (x + 8) % 10;
            const idx0 = (x + 2) % 10;
            const B0 = B[idx0];
            const B1 = B[idx0 + 1];
            const Th = rotlH(B0, B1, 1) ^ B[idx1];
            const Tl = rotlL(B0, B1, 1) ^ B[idx1 + 1];
            for(let y = 0; y < 50; y += 10){
                s[x + y] ^= Th;
                s[x + y + 1] ^= Tl;
            }
        }
        // Rho (ρ) and Pi (π)
        let curH = s[2];
        let curL = s[3];
        for(let t = 0; t < 24; t++){
            const shift = SHA3_ROTL[t];
            const Th = rotlH(curH, curL, shift);
            const Tl = rotlL(curH, curL, shift);
            const PI = SHA3_PI[t];
            curH = s[PI];
            curL = s[PI + 1];
            s[PI] = Th;
            s[PI + 1] = Tl;
        }
        // Chi (χ)
        for(let y = 0; y < 50; y += 10){
            for(let x = 0; x < 10; x++)B[x] = s[y + x];
            for(let x = 0; x < 10; x++)s[y + x] ^= ~B[(x + 2) % 10] & B[(x + 4) % 10];
        }
        // Iota (ι)
        s[0] ^= SHA3_IOTA_H[round];
        s[1] ^= SHA3_IOTA_L[round];
    }
    B.fill(0);
}
class Keccak extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$node_modules$2f40$walletconnect$2f$utils$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Hash"] {
    keccak() {
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$node_modules$2f40$walletconnect$2f$utils$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isLE"]) (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$node_modules$2f40$walletconnect$2f$utils$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["byteSwap32"])(this.state32);
        keccakP(this.state32, this.rounds);
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$node_modules$2f40$walletconnect$2f$utils$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isLE"]) (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$node_modules$2f40$walletconnect$2f$utils$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["byteSwap32"])(this.state32);
        this.posOut = 0;
        this.pos = 0;
    }
    update(data) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$node_modules$2f40$walletconnect$2f$utils$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_assert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["aexists"])(this);
        const { blockLen, state } = this;
        data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$node_modules$2f40$walletconnect$2f$utils$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toBytes"])(data);
        const len = data.length;
        for(let pos = 0; pos < len;){
            const take = Math.min(blockLen - this.pos, len - pos);
            for(let i = 0; i < take; i++)state[this.pos++] ^= data[pos++];
            if (this.pos === blockLen) this.keccak();
        }
        return this;
    }
    finish() {
        if (this.finished) return;
        this.finished = true;
        const { state, suffix, pos, blockLen } = this;
        // Do the padding
        state[pos] ^= suffix;
        if ((suffix & 0x80) !== 0 && pos === blockLen - 1) this.keccak();
        state[blockLen - 1] ^= 0x80;
        this.keccak();
    }
    writeInto(out) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$node_modules$2f40$walletconnect$2f$utils$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_assert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["aexists"])(this, false);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$node_modules$2f40$walletconnect$2f$utils$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_assert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["abytes"])(out);
        this.finish();
        const bufferOut = this.state;
        const { blockLen } = this;
        for(let pos = 0, len = out.length; pos < len;){
            if (this.posOut >= blockLen) this.keccak();
            const take = Math.min(blockLen - this.posOut, len - pos);
            out.set(bufferOut.subarray(this.posOut, this.posOut + take), pos);
            this.posOut += take;
            pos += take;
        }
        return out;
    }
    xofInto(out) {
        // Sha3/Keccak usage with XOF is probably mistake, only SHAKE instances can do XOF
        if (!this.enableXOF) throw new Error('XOF is not possible for this instance');
        return this.writeInto(out);
    }
    xof(bytes) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$node_modules$2f40$walletconnect$2f$utils$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_assert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["anumber"])(bytes);
        return this.xofInto(new Uint8Array(bytes));
    }
    digestInto(out) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$node_modules$2f40$walletconnect$2f$utils$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_assert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["aoutput"])(out, this);
        if (this.finished) throw new Error('digest() was already called');
        this.writeInto(out);
        this.destroy();
        return out;
    }
    digest() {
        return this.digestInto(new Uint8Array(this.outputLen));
    }
    destroy() {
        this.destroyed = true;
        this.state.fill(0);
    }
    _cloneInto(to) {
        const { blockLen, suffix, outputLen, rounds, enableXOF } = this;
        to || (to = new Keccak(blockLen, suffix, outputLen, enableXOF, rounds));
        to.state32.set(this.state32);
        to.pos = this.pos;
        to.posOut = this.posOut;
        to.finished = this.finished;
        to.rounds = rounds;
        // Suffix can change in cSHAKE
        to.suffix = suffix;
        to.outputLen = outputLen;
        to.enableXOF = enableXOF;
        to.destroyed = this.destroyed;
        return to;
    }
    // NOTE: we accept arguments in bytes instead of bits here.
    constructor(blockLen, suffix, outputLen, enableXOF = false, rounds = 24){
        super();
        this.blockLen = blockLen;
        this.suffix = suffix;
        this.outputLen = outputLen;
        this.enableXOF = enableXOF;
        this.rounds = rounds;
        this.pos = 0;
        this.posOut = 0;
        this.finished = false;
        this.destroyed = false;
        // Can be passed from user as dkLen
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$node_modules$2f40$walletconnect$2f$utils$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_assert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["anumber"])(outputLen);
        // 1600 = 5x5 matrix of 64bit.  1600 bits === 200 bytes
        // 0 < blockLen < 200
        if (0 >= this.blockLen || this.blockLen >= 200) throw new Error('Sha3 supports only keccak-f1600 function');
        this.state = new Uint8Array(200);
        this.state32 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$node_modules$2f40$walletconnect$2f$utils$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["u32"])(this.state);
    }
}
const gen = (suffix, blockLen, outputLen)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$node_modules$2f40$walletconnect$2f$utils$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wrapConstructor"])(()=>new Keccak(blockLen, suffix, outputLen));
const sha3_224 = /* @__PURE__ */ gen(0x06, 144, 224 / 8);
const sha3_256 = /* @__PURE__ */ gen(0x06, 136, 256 / 8);
const sha3_384 = /* @__PURE__ */ gen(0x06, 104, 384 / 8);
const sha3_512 = /* @__PURE__ */ gen(0x06, 72, 512 / 8);
const keccak_224 = /* @__PURE__ */ gen(0x01, 144, 224 / 8);
const keccak_256 = /* @__PURE__ */ gen(0x01, 136, 256 / 8);
const keccak_384 = /* @__PURE__ */ gen(0x01, 104, 384 / 8);
const keccak_512 = /* @__PURE__ */ gen(0x01, 72, 512 / 8);
const genShake = (suffix, blockLen, outputLen)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$node_modules$2f40$walletconnect$2f$utils$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wrapXOFConstructorWithOpts"])(function() {
        let opts = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        return new Keccak(blockLen, suffix, opts.dkLen === undefined ? outputLen : opts.dkLen, true);
    });
const shake128 = /* @__PURE__ */ genShake(0x1f, 168, 128 / 8);
const shake256 = /* @__PURE__ */ genShake(0x1f, 136, 256 / 8); //# sourceMappingURL=sha3.js.map
}),
"[project]/frontend/node_modules/@reown/appkit/node_modules/base-x/src/esm/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// base-x encoding / decoding
// Copyright (c) 2018 base-x contributors
// Copyright (c) 2014-2018 The Bitcoin Core developers (base58.cpp)
// Distributed under the MIT software license, see the accompanying
// file LICENSE or http://www.opensource.org/licenses/mit-license.php.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
function base(ALPHABET) {
    if (ALPHABET.length >= 255) {
        throw new TypeError('Alphabet too long');
    }
    const BASE_MAP = new Uint8Array(256);
    for(let j = 0; j < BASE_MAP.length; j++){
        BASE_MAP[j] = 255;
    }
    for(let i = 0; i < ALPHABET.length; i++){
        const x = ALPHABET.charAt(i);
        const xc = x.charCodeAt(0);
        if (BASE_MAP[xc] !== 255) {
            throw new TypeError(x + ' is ambiguous');
        }
        BASE_MAP[xc] = i;
    }
    const BASE = ALPHABET.length;
    const LEADER = ALPHABET.charAt(0);
    const FACTOR = Math.log(BASE) / Math.log(256) // log(BASE) / log(256), rounded up
    ;
    const iFACTOR = Math.log(256) / Math.log(BASE) // log(256) / log(BASE), rounded up
    ;
    function encode(source) {
        // eslint-disable-next-line no-empty
        if (source instanceof Uint8Array) {} else if (ArrayBuffer.isView(source)) {
            source = new Uint8Array(source.buffer, source.byteOffset, source.byteLength);
        } else if (Array.isArray(source)) {
            source = Uint8Array.from(source);
        }
        if (!(source instanceof Uint8Array)) {
            throw new TypeError('Expected Uint8Array');
        }
        if (source.length === 0) {
            return '';
        }
        // Skip & count leading zeroes.
        let zeroes = 0;
        let length = 0;
        let pbegin = 0;
        const pend = source.length;
        while(pbegin !== pend && source[pbegin] === 0){
            pbegin++;
            zeroes++;
        }
        // Allocate enough space in big-endian base58 representation.
        const size = (pend - pbegin) * iFACTOR + 1 >>> 0;
        const b58 = new Uint8Array(size);
        // Process the bytes.
        while(pbegin !== pend){
            let carry = source[pbegin];
            // Apply "b58 = b58 * 256 + ch".
            let i = 0;
            for(let it1 = size - 1; (carry !== 0 || i < length) && it1 !== -1; it1--, i++){
                carry += 256 * b58[it1] >>> 0;
                b58[it1] = carry % BASE >>> 0;
                carry = carry / BASE >>> 0;
            }
            if (carry !== 0) {
                throw new Error('Non-zero carry');
            }
            length = i;
            pbegin++;
        }
        // Skip leading zeroes in base58 result.
        let it2 = size - length;
        while(it2 !== size && b58[it2] === 0){
            it2++;
        }
        // Translate the result into a string.
        let str = LEADER.repeat(zeroes);
        for(; it2 < size; ++it2){
            str += ALPHABET.charAt(b58[it2]);
        }
        return str;
    }
    function decodeUnsafe(source) {
        if (typeof source !== 'string') {
            throw new TypeError('Expected String');
        }
        if (source.length === 0) {
            return new Uint8Array();
        }
        let psz = 0;
        // Skip and count leading '1's.
        let zeroes = 0;
        let length = 0;
        while(source[psz] === LEADER){
            zeroes++;
            psz++;
        }
        // Allocate enough space in big-endian base256 representation.
        const size = (source.length - psz) * FACTOR + 1 >>> 0 // log(58) / log(256), rounded up.
        ;
        const b256 = new Uint8Array(size);
        // Process the characters.
        while(psz < source.length){
            // Find code of next character
            const charCode = source.charCodeAt(psz);
            // Base map can not be indexed using char code
            if (charCode > 255) {
                return;
            }
            // Decode character
            let carry = BASE_MAP[charCode];
            // Invalid character
            if (carry === 255) {
                return;
            }
            let i = 0;
            for(let it3 = size - 1; (carry !== 0 || i < length) && it3 !== -1; it3--, i++){
                carry += BASE * b256[it3] >>> 0;
                b256[it3] = carry % 256 >>> 0;
                carry = carry / 256 >>> 0;
            }
            if (carry !== 0) {
                throw new Error('Non-zero carry');
            }
            length = i;
            psz++;
        }
        // Skip leading zeroes in b256.
        let it4 = size - length;
        while(it4 !== size && b256[it4] === 0){
            it4++;
        }
        const vch = new Uint8Array(zeroes + (size - it4));
        let j = zeroes;
        while(it4 !== size){
            vch[j++] = b256[it4++];
        }
        return vch;
    }
    function decode(string) {
        const buffer = decodeUnsafe(string);
        if (buffer) {
            return buffer;
        }
        throw new Error('Non-base' + BASE + ' character');
    }
    return {
        encode,
        decodeUnsafe,
        decode
    };
}
const __TURBOPACK__default__export__ = base;
}),
"[project]/frontend/node_modules/@reown/appkit-controllers/node_modules/base-x/src/esm/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// base-x encoding / decoding
// Copyright (c) 2018 base-x contributors
// Copyright (c) 2014-2018 The Bitcoin Core developers (base58.cpp)
// Distributed under the MIT software license, see the accompanying
// file LICENSE or http://www.opensource.org/licenses/mit-license.php.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
function base(ALPHABET) {
    if (ALPHABET.length >= 255) {
        throw new TypeError('Alphabet too long');
    }
    const BASE_MAP = new Uint8Array(256);
    for(let j = 0; j < BASE_MAP.length; j++){
        BASE_MAP[j] = 255;
    }
    for(let i = 0; i < ALPHABET.length; i++){
        const x = ALPHABET.charAt(i);
        const xc = x.charCodeAt(0);
        if (BASE_MAP[xc] !== 255) {
            throw new TypeError(x + ' is ambiguous');
        }
        BASE_MAP[xc] = i;
    }
    const BASE = ALPHABET.length;
    const LEADER = ALPHABET.charAt(0);
    const FACTOR = Math.log(BASE) / Math.log(256) // log(BASE) / log(256), rounded up
    ;
    const iFACTOR = Math.log(256) / Math.log(BASE) // log(256) / log(BASE), rounded up
    ;
    function encode(source) {
        // eslint-disable-next-line no-empty
        if (source instanceof Uint8Array) {} else if (ArrayBuffer.isView(source)) {
            source = new Uint8Array(source.buffer, source.byteOffset, source.byteLength);
        } else if (Array.isArray(source)) {
            source = Uint8Array.from(source);
        }
        if (!(source instanceof Uint8Array)) {
            throw new TypeError('Expected Uint8Array');
        }
        if (source.length === 0) {
            return '';
        }
        // Skip & count leading zeroes.
        let zeroes = 0;
        let length = 0;
        let pbegin = 0;
        const pend = source.length;
        while(pbegin !== pend && source[pbegin] === 0){
            pbegin++;
            zeroes++;
        }
        // Allocate enough space in big-endian base58 representation.
        const size = (pend - pbegin) * iFACTOR + 1 >>> 0;
        const b58 = new Uint8Array(size);
        // Process the bytes.
        while(pbegin !== pend){
            let carry = source[pbegin];
            // Apply "b58 = b58 * 256 + ch".
            let i = 0;
            for(let it1 = size - 1; (carry !== 0 || i < length) && it1 !== -1; it1--, i++){
                carry += 256 * b58[it1] >>> 0;
                b58[it1] = carry % BASE >>> 0;
                carry = carry / BASE >>> 0;
            }
            if (carry !== 0) {
                throw new Error('Non-zero carry');
            }
            length = i;
            pbegin++;
        }
        // Skip leading zeroes in base58 result.
        let it2 = size - length;
        while(it2 !== size && b58[it2] === 0){
            it2++;
        }
        // Translate the result into a string.
        let str = LEADER.repeat(zeroes);
        for(; it2 < size; ++it2){
            str += ALPHABET.charAt(b58[it2]);
        }
        return str;
    }
    function decodeUnsafe(source) {
        if (typeof source !== 'string') {
            throw new TypeError('Expected String');
        }
        if (source.length === 0) {
            return new Uint8Array();
        }
        let psz = 0;
        // Skip and count leading '1's.
        let zeroes = 0;
        let length = 0;
        while(source[psz] === LEADER){
            zeroes++;
            psz++;
        }
        // Allocate enough space in big-endian base256 representation.
        const size = (source.length - psz) * FACTOR + 1 >>> 0 // log(58) / log(256), rounded up.
        ;
        const b256 = new Uint8Array(size);
        // Process the characters.
        while(psz < source.length){
            // Find code of next character
            const charCode = source.charCodeAt(psz);
            // Base map can not be indexed using char code
            if (charCode > 255) {
                return;
            }
            // Decode character
            let carry = BASE_MAP[charCode];
            // Invalid character
            if (carry === 255) {
                return;
            }
            let i = 0;
            for(let it3 = size - 1; (carry !== 0 || i < length) && it3 !== -1; it3--, i++){
                carry += BASE * b256[it3] >>> 0;
                b256[it3] = carry % 256 >>> 0;
                carry = carry / 256 >>> 0;
            }
            if (carry !== 0) {
                throw new Error('Non-zero carry');
            }
            length = i;
            psz++;
        }
        // Skip leading zeroes in b256.
        let it4 = size - length;
        while(it4 !== size && b256[it4] === 0){
            it4++;
        }
        const vch = new Uint8Array(zeroes + (size - it4));
        let j = zeroes;
        while(it4 !== size){
            vch[j++] = b256[it4++];
        }
        return vch;
    }
    function decode(string) {
        const buffer = decodeUnsafe(string);
        if (buffer) {
            return buffer;
        }
        throw new Error('Non-base' + BASE + ' character');
    }
    return {
        encode,
        decodeUnsafe,
        decode
    };
}
const __TURBOPACK__default__export__ = base;
}),
"[project]/frontend/node_modules/@reown/appkit/node_modules/bs58/src/esm/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2f$node_modules$2f$base$2d$x$2f$src$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@reown/appkit/node_modules/base-x/src/esm/index.js [app-client] (ecmascript)");
;
var ALPHABET = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2f$node_modules$2f$base$2d$x$2f$src$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(ALPHABET);
}),
"[project]/frontend/node_modules/@reown/appkit-controllers/node_modules/bs58/src/esm/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$node_modules$2f$base$2d$x$2f$src$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@reown/appkit-controllers/node_modules/base-x/src/esm/index.js [app-client] (ecmascript)");
;
var ALPHABET = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$node_modules$2f$base$2d$x$2f$src$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(ALPHABET);
}),
"[project]/frontend/node_modules/@reown/appkit/node_modules/@walletconnect/relay-api/dist/index.es.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RELAY_JSONRPC",
    ()=>C,
    "isPublishMethod",
    ()=>c,
    "isPublishParams",
    ()=>h,
    "isPublishRequest",
    ()=>P,
    "isSubscribeMethod",
    ()=>b,
    "isSubscribeParams",
    ()=>a,
    "isSubscribeRequest",
    ()=>R,
    "isSubscriptionMethod",
    ()=>m,
    "isSubscriptionParams",
    ()=>d,
    "isSubscriptionRequest",
    ()=>S,
    "isUnsubscribeMethod",
    ()=>o,
    "isUnsubscribeParams",
    ()=>p,
    "isUnsubscribeRequest",
    ()=>_,
    "parsePublishRequest",
    ()=>q,
    "parseSubscribeRequest",
    ()=>g,
    "parseSubscriptionRequest",
    ()=>k,
    "parseUnsubscribeRequest",
    ()=>E
]);
function e(s, r) {
    let i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "string";
    if (!s[r] || typeof s[r] !== i) throw new Error('Missing or invalid "'.concat(r, '" param'));
}
function l(s, r) {
    let i = !0;
    return r.forEach((t)=>{
        t in s || (i = !1);
    }), i;
}
function f(s, r) {
    return Array.isArray(s) ? s.length === r : Object.keys(s).length === r;
}
function w(s, r) {
    return Array.isArray(s) ? s.length >= r : Object.keys(s).length >= r;
}
function u(s, r, i) {
    return (i.length ? w(s, r.length) : f(s, r.length)) ? l(s, r) : !1;
}
function n(s, r) {
    let i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "_";
    const t = s.split(i);
    return t[t.length - 1].trim().toLowerCase() === r.trim().toLowerCase();
}
function R(s) {
    return b(s.method) && a(s.params);
}
function b(s) {
    return n(s, "subscribe");
}
function a(s) {
    return u(s, [
        "topic"
    ], []);
}
function P(s) {
    return c(s.method) && h(s.params);
}
function c(s) {
    return n(s, "publish");
}
function h(s) {
    return u(s, [
        "message",
        "topic",
        "ttl"
    ], [
        "prompt",
        "tag"
    ]);
}
function _(s) {
    return o(s.method) && p(s.params);
}
function o(s) {
    return n(s, "unsubscribe");
}
function p(s) {
    return u(s, [
        "id",
        "topic"
    ], []);
}
function S(s) {
    return m(s.method) && d(s.params);
}
function m(s) {
    return n(s, "subscription");
}
function d(s) {
    return u(s, [
        "id",
        "data"
    ], []);
}
function g(s) {
    if (!b(s.method)) throw new Error("JSON-RPC Request has invalid subscribe method");
    if (!a(s.params)) throw new Error("JSON-RPC Request has invalid subscribe params");
    const r = s.params;
    return e(r, "topic"), r;
}
function q(s) {
    if (!c(s.method)) throw new Error("JSON-RPC Request has invalid publish method");
    if (!h(s.params)) throw new Error("JSON-RPC Request has invalid publish params");
    const r = s.params;
    return e(r, "topic"), e(r, "message"), e(r, "ttl", "number"), r;
}
function E(s) {
    if (!o(s.method)) throw new Error("JSON-RPC Request has invalid unsubscribe method");
    if (!p(s.params)) throw new Error("JSON-RPC Request has invalid unsubscribe params");
    const r = s.params;
    return e(r, "id"), r;
}
function k(s) {
    if (!m(s.method)) throw new Error("JSON-RPC Request has invalid subscription method");
    if (!d(s.params)) throw new Error("JSON-RPC Request has invalid subscription params");
    const r = s.params;
    return e(r, "id"), e(r, "data"), r;
}
const C = {
    waku: {
        publish: "waku_publish",
        batchPublish: "waku_batchPublish",
        subscribe: "waku_subscribe",
        batchSubscribe: "waku_batchSubscribe",
        subscription: "waku_subscription",
        unsubscribe: "waku_unsubscribe",
        batchUnsubscribe: "waku_batchUnsubscribe",
        batchFetchMessages: "waku_batchFetchMessages"
    },
    irn: {
        publish: "irn_publish",
        batchPublish: "irn_batchPublish",
        subscribe: "irn_subscribe",
        batchSubscribe: "irn_batchSubscribe",
        subscription: "irn_subscription",
        unsubscribe: "irn_unsubscribe",
        batchUnsubscribe: "irn_batchUnsubscribe",
        batchFetchMessages: "irn_batchFetchMessages"
    },
    iridium: {
        publish: "iridium_publish",
        batchPublish: "iridium_batchPublish",
        subscribe: "iridium_subscribe",
        batchSubscribe: "iridium_batchSubscribe",
        subscription: "iridium_subscription",
        unsubscribe: "iridium_unsubscribe",
        batchUnsubscribe: "iridium_batchUnsubscribe",
        batchFetchMessages: "iridium_batchFetchMessages"
    }
};
;
 //# sourceMappingURL=index.es.js.map
}),
"[project]/frontend/node_modules/@reown/appkit-controllers/node_modules/@walletconnect/relay-api/dist/index.es.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RELAY_JSONRPC",
    ()=>C,
    "isPublishMethod",
    ()=>c,
    "isPublishParams",
    ()=>h,
    "isPublishRequest",
    ()=>P,
    "isSubscribeMethod",
    ()=>b,
    "isSubscribeParams",
    ()=>a,
    "isSubscribeRequest",
    ()=>R,
    "isSubscriptionMethod",
    ()=>m,
    "isSubscriptionParams",
    ()=>d,
    "isSubscriptionRequest",
    ()=>S,
    "isUnsubscribeMethod",
    ()=>o,
    "isUnsubscribeParams",
    ()=>p,
    "isUnsubscribeRequest",
    ()=>_,
    "parsePublishRequest",
    ()=>q,
    "parseSubscribeRequest",
    ()=>g,
    "parseSubscriptionRequest",
    ()=>k,
    "parseUnsubscribeRequest",
    ()=>E
]);
function e(s, r) {
    let i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "string";
    if (!s[r] || typeof s[r] !== i) throw new Error('Missing or invalid "'.concat(r, '" param'));
}
function l(s, r) {
    let i = !0;
    return r.forEach((t)=>{
        t in s || (i = !1);
    }), i;
}
function f(s, r) {
    return Array.isArray(s) ? s.length === r : Object.keys(s).length === r;
}
function w(s, r) {
    return Array.isArray(s) ? s.length >= r : Object.keys(s).length >= r;
}
function u(s, r, i) {
    return (i.length ? w(s, r.length) : f(s, r.length)) ? l(s, r) : !1;
}
function n(s, r) {
    let i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "_";
    const t = s.split(i);
    return t[t.length - 1].trim().toLowerCase() === r.trim().toLowerCase();
}
function R(s) {
    return b(s.method) && a(s.params);
}
function b(s) {
    return n(s, "subscribe");
}
function a(s) {
    return u(s, [
        "topic"
    ], []);
}
function P(s) {
    return c(s.method) && h(s.params);
}
function c(s) {
    return n(s, "publish");
}
function h(s) {
    return u(s, [
        "message",
        "topic",
        "ttl"
    ], [
        "prompt",
        "tag"
    ]);
}
function _(s) {
    return o(s.method) && p(s.params);
}
function o(s) {
    return n(s, "unsubscribe");
}
function p(s) {
    return u(s, [
        "id",
        "topic"
    ], []);
}
function S(s) {
    return m(s.method) && d(s.params);
}
function m(s) {
    return n(s, "subscription");
}
function d(s) {
    return u(s, [
        "id",
        "data"
    ], []);
}
function g(s) {
    if (!b(s.method)) throw new Error("JSON-RPC Request has invalid subscribe method");
    if (!a(s.params)) throw new Error("JSON-RPC Request has invalid subscribe params");
    const r = s.params;
    return e(r, "topic"), r;
}
function q(s) {
    if (!c(s.method)) throw new Error("JSON-RPC Request has invalid publish method");
    if (!h(s.params)) throw new Error("JSON-RPC Request has invalid publish params");
    const r = s.params;
    return e(r, "topic"), e(r, "message"), e(r, "ttl", "number"), r;
}
function E(s) {
    if (!o(s.method)) throw new Error("JSON-RPC Request has invalid unsubscribe method");
    if (!p(s.params)) throw new Error("JSON-RPC Request has invalid unsubscribe params");
    const r = s.params;
    return e(r, "id"), r;
}
function k(s) {
    if (!m(s.method)) throw new Error("JSON-RPC Request has invalid subscription method");
    if (!d(s.params)) throw new Error("JSON-RPC Request has invalid subscription params");
    const r = s.params;
    return e(r, "id"), e(r, "data"), r;
}
const C = {
    waku: {
        publish: "waku_publish",
        batchPublish: "waku_batchPublish",
        subscribe: "waku_subscribe",
        batchSubscribe: "waku_batchSubscribe",
        subscription: "waku_subscription",
        unsubscribe: "waku_unsubscribe",
        batchUnsubscribe: "waku_batchUnsubscribe",
        batchFetchMessages: "waku_batchFetchMessages"
    },
    irn: {
        publish: "irn_publish",
        batchPublish: "irn_batchPublish",
        subscribe: "irn_subscribe",
        batchSubscribe: "irn_batchSubscribe",
        subscription: "irn_subscription",
        unsubscribe: "irn_unsubscribe",
        batchUnsubscribe: "irn_batchUnsubscribe",
        batchFetchMessages: "irn_batchFetchMessages"
    },
    iridium: {
        publish: "iridium_publish",
        batchPublish: "iridium_batchPublish",
        subscribe: "iridium_subscribe",
        batchSubscribe: "iridium_batchSubscribe",
        subscription: "iridium_subscription",
        unsubscribe: "iridium_unsubscribe",
        batchUnsubscribe: "iridium_batchUnsubscribe",
        batchFetchMessages: "iridium_batchFetchMessages"
    }
};
;
 //# sourceMappingURL=index.es.js.map
}),
"[project]/frontend/node_modules/@reown/appkit/node_modules/@walletconnect/jsonrpc-ws-connection/dist/index.es.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WsConnection",
    ()=>f,
    "default",
    ()=>f
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$events$2f$events$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/events/events.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$walletconnect$2f$safe$2d$json$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@walletconnect/safe-json/dist/esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/@walletconnect/jsonrpc-utils/dist/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$url$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@walletconnect/jsonrpc-utils/dist/esm/url.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$walletconnect$2f$environment$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@walletconnect/environment/dist/cjs/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@walletconnect/jsonrpc-utils/dist/esm/format.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@walletconnect/jsonrpc-utils/dist/esm/error.js [app-client] (ecmascript)");
;
;
;
const v = ()=>typeof WebSocket < "u" ? WebSocket : ("TURBOPACK compile-time value", "object") < "u" && typeof /*TURBOPACK member replacement*/ __turbopack_context__.g.WebSocket < "u" ? /*TURBOPACK member replacement*/ __turbopack_context__.g.WebSocket : typeof window < "u" && typeof window.WebSocket < "u" ? window.WebSocket : typeof self < "u" && typeof self.WebSocket < "u" ? self.WebSocket : __turbopack_context__.r("[project]/frontend/node_modules/ws/browser.js [app-client] (ecmascript)"), w = ()=>typeof WebSocket < "u" || ("TURBOPACK compile-time value", "object") < "u" && typeof /*TURBOPACK member replacement*/ __turbopack_context__.g.WebSocket < "u" || typeof window < "u" && typeof window.WebSocket < "u" || typeof self < "u" && typeof self.WebSocket < "u", d = (r)=>r.split("?")[0], h = 10, b = v();
class f {
    get connected() {
        return typeof this.socket < "u";
    }
    get connecting() {
        return this.registering;
    }
    on(e, t) {
        this.events.on(e, t);
    }
    once(e, t) {
        this.events.once(e, t);
    }
    off(e, t) {
        this.events.off(e, t);
    }
    removeListener(e, t) {
        this.events.removeListener(e, t);
    }
    async open() {
        let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.url;
        await this.register(e);
    }
    async close() {
        return new Promise((e, t)=>{
            if (typeof this.socket > "u") {
                t(new Error("Connection already closed"));
                return;
            }
            this.socket.onclose = (n)=>{
                this.onClose(n), e();
            }, this.socket.close();
        });
    }
    async send(e) {
        typeof this.socket > "u" && (this.socket = await this.register());
        try {
            this.socket.send((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$walletconnect$2f$safe$2d$json$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeJsonStringify"])(e));
        } catch (t) {
            this.onError(e.id, t);
        }
    }
    register() {
        let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.url;
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$url$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isWsUrl"])(e)) throw new Error("Provided URL is not compatible with WebSocket connection: ".concat(e));
        if (this.registering) {
            const t = this.events.getMaxListeners();
            return (this.events.listenerCount("register_error") >= t || this.events.listenerCount("open") >= t) && this.events.setMaxListeners(t + 1), new Promise((n, s)=>{
                this.events.once("register_error", (o)=>{
                    this.resetMaxListeners(), s(o);
                }), this.events.once("open", ()=>{
                    if (this.resetMaxListeners(), typeof this.socket > "u") return s(new Error("WebSocket connection is missing or invalid"));
                    n(this.socket);
                });
            });
        }
        return this.url = e, this.registering = !0, new Promise((t, n)=>{
            const s = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$walletconnect$2f$environment$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isReactNative"])() ? void 0 : {
                rejectUnauthorized: !(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$url$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isLocalhostUrl"])(e)
            }, o = new b(e, [], s);
            w() ? o.onerror = (i)=>{
                const a = i;
                n(this.emitError(a.error));
            } : o.on("error", (i)=>{
                n(this.emitError(i));
            }), o.onopen = ()=>{
                this.onOpen(o), t(o);
            };
        });
    }
    onOpen(e) {
        e.onmessage = (t)=>this.onPayload(t), e.onclose = (t)=>this.onClose(t), this.socket = e, this.registering = !1, this.events.emit("open");
    }
    onClose(e) {
        this.socket = void 0, this.registering = !1, this.events.emit("close", e);
    }
    onPayload(e) {
        if (typeof e.data > "u") return;
        const t = typeof e.data == "string" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$walletconnect$2f$safe$2d$json$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeJsonParse"])(e.data) : e.data;
        this.events.emit("payload", t);
    }
    onError(e, t) {
        const n = this.parseError(t), s = n.message || n.toString(), o = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatJsonRpcError"])(e, s);
        this.events.emit("payload", o);
    }
    parseError(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.url;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseConnectionError"])(e, d(t), "WS");
    }
    resetMaxListeners() {
        this.events.getMaxListeners() > h && this.events.setMaxListeners(h);
    }
    emitError(e) {
        const t = this.parseError(new Error((e === null || e === void 0 ? void 0 : e.message) || "WebSocket connection failed for host: ".concat(d(this.url))));
        return this.events.emit("register_error", t), t;
    }
    constructor(e){
        if (this.url = e, this.events = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$events$2f$events$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventEmitter"], this.registering = !1, !(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$url$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isWsUrl"])(e)) throw new Error("Provided URL is not compatible with WebSocket connection: ".concat(e));
        this.url = e;
    }
}
;
 //# sourceMappingURL=index.es.js.map
}),
"[project]/frontend/node_modules/@reown/appkit-controllers/node_modules/@walletconnect/jsonrpc-ws-connection/dist/index.es.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WsConnection",
    ()=>f,
    "default",
    ()=>f
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$events$2f$events$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/events/events.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$walletconnect$2f$safe$2d$json$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@walletconnect/safe-json/dist/esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/@walletconnect/jsonrpc-utils/dist/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$url$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@walletconnect/jsonrpc-utils/dist/esm/url.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$walletconnect$2f$environment$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@walletconnect/environment/dist/cjs/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@walletconnect/jsonrpc-utils/dist/esm/format.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@walletconnect/jsonrpc-utils/dist/esm/error.js [app-client] (ecmascript)");
;
;
;
const v = ()=>typeof WebSocket < "u" ? WebSocket : ("TURBOPACK compile-time value", "object") < "u" && typeof /*TURBOPACK member replacement*/ __turbopack_context__.g.WebSocket < "u" ? /*TURBOPACK member replacement*/ __turbopack_context__.g.WebSocket : typeof window < "u" && typeof window.WebSocket < "u" ? window.WebSocket : typeof self < "u" && typeof self.WebSocket < "u" ? self.WebSocket : __turbopack_context__.r("[project]/frontend/node_modules/ws/browser.js [app-client] (ecmascript)"), w = ()=>typeof WebSocket < "u" || ("TURBOPACK compile-time value", "object") < "u" && typeof /*TURBOPACK member replacement*/ __turbopack_context__.g.WebSocket < "u" || typeof window < "u" && typeof window.WebSocket < "u" || typeof self < "u" && typeof self.WebSocket < "u", d = (r)=>r.split("?")[0], h = 10, b = v();
class f {
    get connected() {
        return typeof this.socket < "u";
    }
    get connecting() {
        return this.registering;
    }
    on(e, t) {
        this.events.on(e, t);
    }
    once(e, t) {
        this.events.once(e, t);
    }
    off(e, t) {
        this.events.off(e, t);
    }
    removeListener(e, t) {
        this.events.removeListener(e, t);
    }
    async open() {
        let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.url;
        await this.register(e);
    }
    async close() {
        return new Promise((e, t)=>{
            if (typeof this.socket > "u") {
                t(new Error("Connection already closed"));
                return;
            }
            this.socket.onclose = (n)=>{
                this.onClose(n), e();
            }, this.socket.close();
        });
    }
    async send(e) {
        typeof this.socket > "u" && (this.socket = await this.register());
        try {
            this.socket.send((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$walletconnect$2f$safe$2d$json$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeJsonStringify"])(e));
        } catch (t) {
            this.onError(e.id, t);
        }
    }
    register() {
        let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.url;
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$url$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isWsUrl"])(e)) throw new Error("Provided URL is not compatible with WebSocket connection: ".concat(e));
        if (this.registering) {
            const t = this.events.getMaxListeners();
            return (this.events.listenerCount("register_error") >= t || this.events.listenerCount("open") >= t) && this.events.setMaxListeners(t + 1), new Promise((n, s)=>{
                this.events.once("register_error", (o)=>{
                    this.resetMaxListeners(), s(o);
                }), this.events.once("open", ()=>{
                    if (this.resetMaxListeners(), typeof this.socket > "u") return s(new Error("WebSocket connection is missing or invalid"));
                    n(this.socket);
                });
            });
        }
        return this.url = e, this.registering = !0, new Promise((t, n)=>{
            const s = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$walletconnect$2f$environment$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isReactNative"])() ? void 0 : {
                rejectUnauthorized: !(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$url$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isLocalhostUrl"])(e)
            }, o = new b(e, [], s);
            w() ? o.onerror = (i)=>{
                const a = i;
                n(this.emitError(a.error));
            } : o.on("error", (i)=>{
                n(this.emitError(i));
            }), o.onopen = ()=>{
                this.onOpen(o), t(o);
            };
        });
    }
    onOpen(e) {
        e.onmessage = (t)=>this.onPayload(t), e.onclose = (t)=>this.onClose(t), this.socket = e, this.registering = !1, this.events.emit("open");
    }
    onClose(e) {
        this.socket = void 0, this.registering = !1, this.events.emit("close", e);
    }
    onPayload(e) {
        if (typeof e.data > "u") return;
        const t = typeof e.data == "string" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$walletconnect$2f$safe$2d$json$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeJsonParse"])(e.data) : e.data;
        this.events.emit("payload", t);
    }
    onError(e, t) {
        const n = this.parseError(t), s = n.message || n.toString(), o = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatJsonRpcError"])(e, s);
        this.events.emit("payload", o);
    }
    parseError(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.url;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseConnectionError"])(e, d(t), "WS");
    }
    resetMaxListeners() {
        this.events.getMaxListeners() > h && this.events.setMaxListeners(h);
    }
    emitError(e) {
        const t = this.parseError(new Error((e === null || e === void 0 ? void 0 : e.message) || "WebSocket connection failed for host: ".concat(d(this.url))));
        return this.events.emit("register_error", t), t;
    }
    constructor(e){
        if (this.url = e, this.events = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$events$2f$events$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventEmitter"], this.registering = !1, !(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$url$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isWsUrl"])(e)) throw new Error("Provided URL is not compatible with WebSocket connection: ".concat(e));
        this.url = e;
    }
}
;
 //# sourceMappingURL=index.es.js.map
}),
"[project]/frontend/node_modules/@reown/appkit-utils/dist/esm/src/ConstantsUtil.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ConstantsUtil",
    ()=>ConstantsUtil
]);
const ConstantsUtil = {
    METMASK_CONNECTOR_NAME: 'MetaMask',
    TRUST_CONNECTOR_NAME: 'Trust Wallet',
    SOLFLARE_CONNECTOR_NAME: 'Solflare',
    PHANTOM_CONNECTOR_NAME: 'Phantom',
    COIN98_CONNECTOR_NAME: 'Coin98',
    MAGIC_EDEN_CONNECTOR_NAME: 'Magic Eden',
    BACKPACK_CONNECTOR_NAME: 'Backpack',
    BITGET_CONNECTOR_NAME: 'Bitget Wallet',
    FRONTIER_CONNECTOR_NAME: 'Frontier',
    XVERSE_CONNECTOR_NAME: 'Xverse Wallet',
    LEATHER_CONNECTOR_NAME: 'Leather',
    EIP155: 'eip155',
    ADD_CHAIN_METHOD: 'wallet_addEthereumChain',
    EIP6963_ANNOUNCE_EVENT: 'eip6963:announceProvider',
    EIP6963_REQUEST_EVENT: 'eip6963:requestProvider',
    CONNECTOR_RDNS_MAP: {
        coinbaseWallet: 'com.coinbase.wallet',
        coinbaseWalletSDK: 'com.coinbase.wallet'
    },
    CONNECTOR_TYPE_EXTERNAL: 'EXTERNAL',
    CONNECTOR_TYPE_WALLET_CONNECT: 'WALLET_CONNECT',
    CONNECTOR_TYPE_INJECTED: 'INJECTED',
    CONNECTOR_TYPE_ANNOUNCED: 'ANNOUNCED',
    CONNECTOR_TYPE_AUTH: 'AUTH',
    CONNECTOR_TYPE_MULTI_CHAIN: 'MULTI_CHAIN',
    CONNECTOR_TYPE_W3M_AUTH: 'ID_AUTH'
}; //# sourceMappingURL=ConstantsUtil.js.map
}),
"[project]/frontend/node_modules/@reown/appkit-utils/dist/esm/src/HelpersUtil.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HelpersUtil",
    ()=>HelpersUtil
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@reown/appkit-utils/dist/esm/src/ConstantsUtil.js [app-client] (ecmascript)");
;
const HelpersUtil = {
    getCaipTokens (tokens) {
        if (!tokens) {
            return undefined;
        }
        const caipTokens = {};
        Object.entries(tokens).forEach((param)=>{
            let [id, token] = param;
            caipTokens["".concat(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].EIP155, ":").concat(id)] = token;
        });
        return caipTokens;
    },
    isLowerCaseMatch (str1, str2) {
        return (str1 === null || str1 === void 0 ? void 0 : str1.toLowerCase()) === (str2 === null || str2 === void 0 ? void 0 : str2.toLowerCase());
    }
}; //# sourceMappingURL=HelpersUtil.js.map
}),
"[project]/frontend/node_modules/@reown/appkit-utils/dist/esm/src/PresetsUtil.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PresetsUtil",
    ()=>PresetsUtil
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@reown/appkit-common/dist/esm/src/utils/ConstantsUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@reown/appkit-utils/dist/esm/src/ConstantsUtil.js [app-client] (ecmascript)");
;
;
const PresetsUtil = {
    ConnectorExplorerIds: {
        [__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].CONNECTOR_ID.COINBASE]: 'fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa',
        [__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].CONNECTOR_ID.COINBASE_SDK]: 'fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa',
        [__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].CONNECTOR_ID.SAFE]: '225affb176778569276e484e1b92637ad061b01e13a048b35a9d280c3b58970f',
        [__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].CONNECTOR_ID.LEDGER]: '19177a98252e07ddfc9af2083ba8e07ef627cb6103467ffebb3f8f4205fd7927',
        [__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].CONNECTOR_ID.OKX]: '971e689d0a5be527bac79629b4ee9b925e82208e5168b733496a09c0faed0709',
        [__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].METMASK_CONNECTOR_NAME]: 'c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96',
        [__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].TRUST_CONNECTOR_NAME]: '4622a2b2d6af1c9844944291e5e7351a6aa24cd7b23099efac1b2fd875da31a0',
        [__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].SOLFLARE_CONNECTOR_NAME]: '1ca0bdd4747578705b1939af023d120677c64fe6ca76add81fda36e350605e79',
        [__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].PHANTOM_CONNECTOR_NAME]: 'a797aa35c0fadbfc1a53e7f675162ed5226968b44a19ee3d24385c64d1d3c393',
        [__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].COIN98_CONNECTOR_NAME]: '2a3c89040ac3b723a1972a33a125b1db11e258a6975d3a61252cd64e6ea5ea01',
        [__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].MAGIC_EDEN_CONNECTOR_NAME]: '8b830a2b724a9c3fbab63af6f55ed29c9dfa8a55e732dc88c80a196a2ba136c6',
        [__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].BACKPACK_CONNECTOR_NAME]: '2bd8c14e035c2d48f184aaa168559e86b0e3433228d3c4075900a221785019b0',
        [__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].BITGET_CONNECTOR_NAME]: '38f5d18bd8522c244bdd70cb4a68e0e718865155811c043f052fb9f1c51de662',
        [__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].FRONTIER_CONNECTOR_NAME]: '85db431492aa2e8672e93f4ea7acf10c88b97b867b0d373107af63dc4880f041',
        [__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].XVERSE_CONNECTOR_NAME]: '2a87d74ae02e10bdd1f51f7ce6c4e1cc53cd5f2c0b6b5ad0d7b3007d2b13de7b',
        [__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].LEATHER_CONNECTOR_NAME]: '483afe1df1df63daf313109971ff3ef8356ddf1cc4e45877d205eee0b7893a13'
    },
    NetworkImageIds: {
        1: 'ba0ba0cd-17c6-4806-ad93-f9d174f17900',
        42161: '3bff954d-5cb0-47a0-9a23-d20192e74600',
        43114: '30c46e53-e989-45fb-4549-be3bd4eb3b00',
        56: '93564157-2e8e-4ce7-81df-b264dbee9b00',
        250: '06b26297-fe0c-4733-5d6b-ffa5498aac00',
        10: 'ab9c186a-c52f-464b-2906-ca59d760a400',
        137: '41d04d42-da3b-4453-8506-668cc0727900',
        5000: 'e86fae9b-b770-4eea-e520-150e12c81100',
        295: '6a97d510-cac8-4e58-c7ce-e8681b044c00',
        11_155_111: 'e909ea0a-f92a-4512-c8fc-748044ea6800',
        84532: 'a18a7ecd-e307-4360-4746-283182228e00',
        1301: '4eeea7ef-0014-4649-5d1d-07271a80f600',
        130: '2257980a-3463-48c6-cbac-a42d2a956e00',
        10_143: '0a728e83-bacb-46db-7844-948f05434900',
        100: '02b53f6a-e3d4-479e-1cb4-21178987d100',
        9001: 'f926ff41-260d-4028-635e-91913fc28e00',
        324: 'b310f07f-4ef7-49f3-7073-2a0a39685800',
        314: '5a73b3dd-af74-424e-cae0-0de859ee9400',
        4689: '34e68754-e536-40da-c153-6ef2e7188a00',
        1088: '3897a66d-40b9-4833-162f-a2c90531c900',
        1284: '161038da-44ae-4ec7-1208-0ea569454b00',
        1285: 'f1d73bb6-5450-4e18-38f7-fb6484264a00',
        7777777: '845c60df-d429-4991-e687-91ae45791600',
        42220: 'ab781bbc-ccc6-418d-d32d-789b15da1f00',
        8453: '7289c336-3981-4081-c5f4-efc26ac64a00',
        1313161554: '3ff73439-a619-4894-9262-4470c773a100',
        2020: 'b8101fc0-9c19-4b6f-ec65-f6dfff106e00',
        2021: 'b8101fc0-9c19-4b6f-ec65-f6dfff106e00',
        80094: 'e329c2c9-59b0-4a02-83e4-212ff3779900',
        2741: 'fc2427d1-5af9-4a9c-8da5-6f94627cd900',
        '5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp': 'a1b58899-f671-4276-6a5e-56ca5bd59700',
        '4uhcVJyU9pJkvQyS88uRDiswHXSCkY3z': 'a1b58899-f671-4276-6a5e-56ca5bd59700',
        EtWTRABZaYq6iMfeYKouRu166VU2xqa1: 'a1b58899-f671-4276-6a5e-56ca5bd59700',
        '000000000019d6689c085ae165831e93': '0b4838db-0161-4ffe-022d-532bf03dba00',
        '000000000933ea01ad0ee984209779ba': '39354064-d79b-420b-065d-f980c4b78200'
    },
    ConnectorImageIds: {
        [__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].CONNECTOR_ID.COINBASE]: '0c2840c3-5b04-4c44-9661-fbd4b49e1800',
        [__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].CONNECTOR_ID.COINBASE_SDK]: '0c2840c3-5b04-4c44-9661-fbd4b49e1800',
        [__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].CONNECTOR_ID.SAFE]: '461db637-8616-43ce-035a-d89b8a1d5800',
        [__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].CONNECTOR_ID.LEDGER]: '54a1aa77-d202-4f8d-0fb2-5d2bb6db0300',
        [__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].CONNECTOR_ID.WALLET_CONNECT]: 'ef1a1fcf-7fe8-4d69-bd6d-fda1345b4400',
        [__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].CONNECTOR_ID.INJECTED]: '07ba87ed-43aa-4adf-4540-9e6a2b9cae00'
    },
    ConnectorNamesMap: {
        [__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].CONNECTOR_ID.INJECTED]: 'Browser Wallet',
        [__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].CONNECTOR_ID.WALLET_CONNECT]: 'WalletConnect',
        [__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].CONNECTOR_ID.COINBASE]: 'Coinbase',
        [__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].CONNECTOR_ID.COINBASE_SDK]: 'Coinbase',
        [__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].CONNECTOR_ID.LEDGER]: 'Ledger',
        [__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].CONNECTOR_ID.SAFE]: 'Safe'
    },
    ConnectorTypesMap: {
        [__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].CONNECTOR_ID.INJECTED]: 'INJECTED',
        [__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].CONNECTOR_ID.WALLET_CONNECT]: 'WALLET_CONNECT',
        [__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].CONNECTOR_ID.EIP6963]: 'ANNOUNCED',
        [__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].CONNECTOR_ID.AUTH]: 'AUTH'
    },
    WalletConnectRpcChainIds: [
        1,
        5,
        11155111,
        10,
        420,
        42161,
        421613,
        137,
        80001,
        42220,
        1313161554,
        1313161555,
        56,
        97,
        43114,
        43113,
        100,
        8453,
        84531,
        7777777,
        999,
        324,
        280
    ]
}; //# sourceMappingURL=PresetsUtil.js.map
}),
"[project]/frontend/node_modules/@reown/appkit-utils/dist/esm/src/CaipNetworkUtil.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CaipNetworksUtil",
    ()=>CaipNetworksUtil,
    "getBlockchainApiRpcUrl",
    ()=>getBlockchainApiRpcUrl
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$transports$2f$fallback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/viem/_esm/clients/transports/fallback.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$transports$2f$http$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/viem/_esm/clients/transports/http.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@reown/appkit-common/dist/esm/src/utils/ConstantsUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ChainController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$StorageUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@reown/appkit-controllers/dist/esm/src/utils/StorageUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$PresetsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@reown/appkit-utils/dist/esm/src/PresetsUtil.js [app-client] (ecmascript)");
;
;
;
;
const RPC_URL_HOST = 'rpc.walletconnect.org';
function getBlockchainApiRpcUrl(caipNetworkId, projectId) {
    const url = new URL('https://rpc.walletconnect.org/v1/');
    url.searchParams.set('chainId', caipNetworkId);
    url.searchParams.set('projectId', projectId);
    return url.toString();
}
const WC_HTTP_RPC_SUPPORTED_CHAINS = [
    'near:mainnet',
    'solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp',
    'eip155:1101',
    'eip155:56',
    'eip155:42161',
    'eip155:7777777',
    'eip155:59144',
    'eip155:324',
    'solana:EtWTRABZaYq6iMfeYKouRu166VU2xqa1',
    'eip155:5000',
    'solana:4sgjmw1sunhzsxgspuhpqldx6wiyjntz',
    'eip155:80084',
    'eip155:5003',
    'eip155:100',
    'eip155:8453',
    'eip155:42220',
    'eip155:1313161555',
    'eip155:17000',
    'eip155:1',
    'eip155:300',
    'eip155:1313161554',
    'eip155:1329',
    'eip155:84532',
    'eip155:421614',
    'eip155:11155111',
    'eip155:8217',
    'eip155:43114',
    'solana:4uhcVJyU9pJkvQyS88uRDiswHXSCkY3z',
    'eip155:999999999',
    'eip155:11155420',
    'eip155:80002',
    'eip155:97',
    'eip155:43113',
    'eip155:137',
    'eip155:10',
    'eip155:1301',
    'bip122:000000000019d6689c085ae165831e93',
    'bip122:000000000933ea01ad0ee984209779ba'
];
const CaipNetworksUtil = {
    extendRpcUrlWithProjectId (rpcUrl, projectId) {
        let isReownUrl = false;
        try {
            const url = new URL(rpcUrl);
            isReownUrl = url.host === RPC_URL_HOST;
        } catch (e) {
            isReownUrl = false;
        }
        if (isReownUrl) {
            const url = new URL(rpcUrl);
            if (!url.searchParams.has('projectId')) {
                url.searchParams.set('projectId', projectId);
            }
            return url.toString();
        }
        return rpcUrl;
    },
    isCaipNetwork (network) {
        return 'chainNamespace' in network && 'caipNetworkId' in network;
    },
    getChainNamespace (network) {
        if (this.isCaipNetwork(network)) {
            return network.chainNamespace;
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].CHAIN.EVM;
    },
    getCaipNetworkId (network) {
        if (this.isCaipNetwork(network)) {
            return network.caipNetworkId;
        }
        return "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].CHAIN.EVM, ":").concat(network.id);
    },
    getDefaultRpcUrl (caipNetwork, caipNetworkId, projectId) {
        var _caipNetwork_rpcUrls_default_http, _caipNetwork_rpcUrls_default, _caipNetwork_rpcUrls;
        const defaultRpcUrl = (_caipNetwork_rpcUrls = caipNetwork.rpcUrls) === null || _caipNetwork_rpcUrls === void 0 ? void 0 : (_caipNetwork_rpcUrls_default = _caipNetwork_rpcUrls.default) === null || _caipNetwork_rpcUrls_default === void 0 ? void 0 : (_caipNetwork_rpcUrls_default_http = _caipNetwork_rpcUrls_default.http) === null || _caipNetwork_rpcUrls_default_http === void 0 ? void 0 : _caipNetwork_rpcUrls_default_http[0];
        if (WC_HTTP_RPC_SUPPORTED_CHAINS.includes(caipNetworkId)) {
            return getBlockchainApiRpcUrl(caipNetworkId, projectId);
        }
        return defaultRpcUrl || '';
    },
    extendCaipNetwork (caipNetwork, param) {
        let { customNetworkImageUrls, projectId, customRpcUrls } = param;
        var _caipNetwork_rpcUrls_default_http, _caipNetwork_rpcUrls_chainDefault_http, _caipNetwork_rpcUrls_chainDefault, _caipNetwork_rpcUrls, _customRpcUrls_caipNetworkId;
        const chainNamespace = this.getChainNamespace(caipNetwork);
        const caipNetworkId = this.getCaipNetworkId(caipNetwork);
        const networkDefaultRpcUrl = (_caipNetwork_rpcUrls_default_http = caipNetwork.rpcUrls.default.http) === null || _caipNetwork_rpcUrls_default_http === void 0 ? void 0 : _caipNetwork_rpcUrls_default_http[0];
        const reownRpcUrl = this.getDefaultRpcUrl(caipNetwork, caipNetworkId, projectId);
        const chainDefaultRpcUrl = (caipNetwork === null || caipNetwork === void 0 ? void 0 : (_caipNetwork_rpcUrls = caipNetwork.rpcUrls) === null || _caipNetwork_rpcUrls === void 0 ? void 0 : (_caipNetwork_rpcUrls_chainDefault = _caipNetwork_rpcUrls['chainDefault']) === null || _caipNetwork_rpcUrls_chainDefault === void 0 ? void 0 : (_caipNetwork_rpcUrls_chainDefault_http = _caipNetwork_rpcUrls_chainDefault.http) === null || _caipNetwork_rpcUrls_chainDefault_http === void 0 ? void 0 : _caipNetwork_rpcUrls_chainDefault_http[0]) || networkDefaultRpcUrl;
        const customRpcUrlsOfNetwork = (customRpcUrls === null || customRpcUrls === void 0 ? void 0 : (_customRpcUrls_caipNetworkId = customRpcUrls[caipNetworkId]) === null || _customRpcUrls_caipNetworkId === void 0 ? void 0 : _customRpcUrls_caipNetworkId.map((i)=>i.url)) || [];
        const rpcUrls = [
            ...customRpcUrlsOfNetwork,
            reownRpcUrl
        ];
        const rpcUrlsWithoutReown = [
            ...customRpcUrlsOfNetwork
        ];
        if (chainDefaultRpcUrl && !rpcUrlsWithoutReown.includes(chainDefaultRpcUrl)) {
            rpcUrlsWithoutReown.push(chainDefaultRpcUrl);
        }
        return {
            ...caipNetwork,
            chainNamespace,
            caipNetworkId,
            assets: {
                imageId: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$PresetsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PresetsUtil"].NetworkImageIds[caipNetwork.id],
                imageUrl: customNetworkImageUrls === null || customNetworkImageUrls === void 0 ? void 0 : customNetworkImageUrls[caipNetwork.id]
            },
            rpcUrls: {
                ...caipNetwork.rpcUrls,
                default: {
                    http: rpcUrls
                },
                chainDefault: {
                    http: rpcUrlsWithoutReown
                }
            }
        };
    },
    extendCaipNetworks (caipNetworks, param) {
        let { customNetworkImageUrls, projectId, customRpcUrls } = param;
        return caipNetworks.map((caipNetwork)=>CaipNetworksUtil.extendCaipNetwork(caipNetwork, {
                customNetworkImageUrls,
                customRpcUrls,
                projectId
            }));
    },
    getViemTransport (caipNetwork, projectId, customRpcUrls) {
        var _caipNetwork_rpcUrls_default_http, _caipNetwork_rpcUrls_default, _caipNetwork_rpcUrls;
        const transports = [];
        customRpcUrls === null || customRpcUrls === void 0 ? void 0 : customRpcUrls.forEach((rpcUrl)=>{
            transports.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$transports$2f$http$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["http"])(rpcUrl.url, rpcUrl.config));
        });
        if (WC_HTTP_RPC_SUPPORTED_CHAINS.includes(caipNetwork.caipNetworkId)) {
            transports.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$transports$2f$http$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["http"])(getBlockchainApiRpcUrl(caipNetwork.caipNetworkId, projectId), {
                fetchOptions: {
                    headers: {
                        'Content-Type': 'text/plain'
                    }
                }
            }));
        }
        caipNetwork === null || caipNetwork === void 0 ? void 0 : (_caipNetwork_rpcUrls = caipNetwork.rpcUrls) === null || _caipNetwork_rpcUrls === void 0 ? void 0 : (_caipNetwork_rpcUrls_default = _caipNetwork_rpcUrls.default) === null || _caipNetwork_rpcUrls_default === void 0 ? void 0 : (_caipNetwork_rpcUrls_default_http = _caipNetwork_rpcUrls_default.http) === null || _caipNetwork_rpcUrls_default_http === void 0 ? void 0 : _caipNetwork_rpcUrls_default_http.forEach((rpcUrl)=>{
            transports.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$transports$2f$http$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["http"])(rpcUrl));
        });
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$transports$2f$fallback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fallback"])(transports);
    },
    extendWagmiTransports (caipNetwork, projectId, transport) {
        if (WC_HTTP_RPC_SUPPORTED_CHAINS.includes(caipNetwork.caipNetworkId)) {
            const reownRpcUrl = this.getDefaultRpcUrl(caipNetwork, caipNetwork.caipNetworkId, projectId);
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$transports$2f$fallback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fallback"])([
                transport,
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$transports$2f$http$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["http"])(reownRpcUrl)
            ]);
        }
        return transport;
    },
    getUnsupportedNetwork (caipNetworkId) {
        return {
            id: caipNetworkId.split(':')[1],
            caipNetworkId,
            name: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].UNSUPPORTED_NETWORK_NAME,
            chainNamespace: caipNetworkId.split(':')[0],
            nativeCurrency: {
                name: '',
                decimals: 0,
                symbol: ''
            },
            rpcUrls: {
                default: {
                    http: []
                }
            }
        };
    },
    getCaipNetworkFromStorage (defaultCaipNetwork) {
        var _ChainController_state_chains;
        const caipNetworkIdFromStorage = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$StorageUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StorageUtil"].getActiveCaipNetworkId();
        const caipNetworks = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].getAllRequestedCaipNetworks();
        const availableNamespaces = Array.from(((_ChainController_state_chains = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].state.chains) === null || _ChainController_state_chains === void 0 ? void 0 : _ChainController_state_chains.keys()) || []);
        const namespace = caipNetworkIdFromStorage === null || caipNetworkIdFromStorage === void 0 ? void 0 : caipNetworkIdFromStorage.split(':')[0];
        const isNamespaceAvailable = namespace ? availableNamespaces.includes(namespace) : false;
        const caipNetwork = caipNetworks === null || caipNetworks === void 0 ? void 0 : caipNetworks.find((cn)=>cn.caipNetworkId === caipNetworkIdFromStorage);
        const isUnsupportedNetwork = isNamespaceAvailable && !caipNetwork && caipNetworkIdFromStorage;
        if (isUnsupportedNetwork) {
            return this.getUnsupportedNetwork(caipNetworkIdFromStorage);
        }
        if (caipNetwork) {
            return caipNetwork;
        }
        if (defaultCaipNetwork) {
            return defaultCaipNetwork;
        }
        return caipNetworks === null || caipNetworks === void 0 ? void 0 : caipNetworks[0];
    }
}; //# sourceMappingURL=CaipNetworkUtil.js.map
}),
"[project]/frontend/node_modules/@reown/appkit-utils/dist/esm/src/ErrorUtil.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ErrorUtil",
    ()=>ErrorUtil
]);
const abortController = new AbortController();
const ErrorUtil = {
    EmbeddedWalletAbortController: abortController,
    UniversalProviderErrors: {
        UNAUTHORIZED_DOMAIN_NOT_ALLOWED: {
            message: 'Unauthorized: origin not allowed',
            alertErrorKey: 'INVALID_APP_CONFIGURATION'
        },
        JWT_VALIDATION_ERROR: {
            message: 'JWT validation error: JWT Token is not yet valid',
            alertErrorKey: 'JWT_TOKEN_NOT_VALID'
        },
        INVALID_KEY: {
            message: 'Unauthorized: invalid key',
            alertErrorKey: 'INVALID_PROJECT_ID'
        }
    },
    ALERT_ERRORS: {
        SWITCH_NETWORK_NOT_FOUND: {
            shortMessage: 'Network Not Found',
            longMessage: "Network not found - please make sure it is included in 'networks' array in createAppKit function"
        },
        INVALID_APP_CONFIGURATION: {
            shortMessage: 'Invalid App Configuration',
            longMessage: ()=>"Origin ".concat(isSafe() ? window.origin : 'unknown', " not found on Allowlist - update configuration on cloud.reown.com")
        },
        IFRAME_LOAD_FAILED: {
            shortMessage: 'Network Error - Could not load embedded wallet',
            longMessage: ()=>'There was an issue loading the embedded wallet. Please try again later.'
        },
        IFRAME_REQUEST_TIMEOUT: {
            shortMessage: 'Embedded Wallet Request Timed Out',
            longMessage: ()=>'There was an issue doing the request to the embedded wallet. Please try again later.'
        },
        UNVERIFIED_DOMAIN: {
            shortMessage: 'Invalid App Configuration',
            longMessage: ()=>'There was an issue loading the embedded wallet. Please verify that your domain is allowed at cloud.reown.com'
        },
        JWT_TOKEN_NOT_VALID: {
            shortMessage: 'Session Expired',
            longMessage: 'Invalid session found on UniversalProvider - please check your time settings and connect again'
        },
        INVALID_PROJECT_ID: {
            shortMessage: 'Invalid App Configuration',
            longMessage: 'Invalid Project ID - update configuration'
        },
        PROJECT_ID_NOT_CONFIGURED: {
            shortMessage: 'Project ID Not Configured',
            longMessage: 'Project ID Not Configured - update configuration on cloud.reown.com'
        }
    }
};
function isSafe() {
    return typeof window !== 'undefined';
} //# sourceMappingURL=ErrorUtil.js.map
}),
"[project]/frontend/node_modules/@reown/appkit-utils/dist/esm/src/LoggerUtil.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LoggerUtil",
    ()=>LoggerUtil
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$walletconnect$2f$logger$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/@walletconnect/logger/dist/index.es.js [app-client] (ecmascript) <locals>");
;
const LoggerUtil = {
    createLogger (onError) {
        let level = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 'error';
        const loggerOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$walletconnect$2f$logger$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getDefaultLoggerOptions"])({
            level
        });
        const { logger } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$walletconnect$2f$logger$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["generatePlatformLogger"])({
            opts: loggerOptions
        });
        logger.error = function() {
            for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                args[_key] = arguments[_key];
            }
            for (const arg of args){
                if (arg instanceof Error) {
                    onError(arg, ...args);
                    return;
                }
            }
            onError(undefined, ...args);
        };
        return logger;
    }
}; //# sourceMappingURL=LoggerUtil.js.map
}),
"[project]/frontend/node_modules/@reown/appkit-utils/dist/esm/src/ProviderUtil.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProviderUtil",
    ()=>ProviderUtil
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@reown/appkit-utils/node_modules/valtio/esm/vanilla.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/@reown/appkit-utils/node_modules/valtio/esm/vanilla/utils.mjs [app-client] (ecmascript) <locals>");
;
;
const CLEAN_PROVIDERS_STATE = {
    eip155: undefined,
    solana: undefined,
    polkadot: undefined,
    bip122: undefined,
    cosmos: undefined
};
const state = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["proxy"])({
    providers: {
        ...CLEAN_PROVIDERS_STATE
    },
    providerIds: {
        ...CLEAN_PROVIDERS_STATE
    }
});
const ProviderUtil = {
    state,
    subscribeKey (key, callback) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["subscribeKey"])(state, key, callback);
    },
    subscribe (callback) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subscribe"])(state, ()=>{
            callback(state);
        });
    },
    subscribeProviders (callback) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subscribe"])(state.providers, ()=>callback(state.providers));
    },
    setProvider (chainNamespace, provider) {
        if (provider) {
            state.providers[chainNamespace] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ref"])(provider);
        }
    },
    getProvider (chainNamespace) {
        return state.providers[chainNamespace];
    },
    setProviderId (chainNamespace, providerId) {
        if (providerId) {
            state.providerIds[chainNamespace] = providerId;
        }
    },
    getProviderId (chainNamespace) {
        if (!chainNamespace) {
            return undefined;
        }
        return state.providerIds[chainNamespace];
    },
    reset () {
        state.providers = {
            ...CLEAN_PROVIDERS_STATE
        };
        state.providerIds = {
            ...CLEAN_PROVIDERS_STATE
        };
    },
    resetChain (chainNamespace) {
        state.providers[chainNamespace] = undefined;
        state.providerIds[chainNamespace] = undefined;
    }
}; //# sourceMappingURL=ProviderUtil.js.map
}),
"[project]/frontend/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/utils/ConstantsUtil.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ConstantsUtil",
    ()=>ConstantsUtil
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/frontend/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
const ConstantsUtil = {
    ACCOUNT_TABS: [
        {
            label: 'Tokens'
        },
        {
            label: 'NFTs'
        },
        {
            label: 'Activity'
        }
    ],
    SECURE_SITE_ORIGIN: (typeof __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] !== 'undefined' && typeof __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env !== 'undefined' ? __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env['NEXT_PUBLIC_SECURE_SITE_ORIGIN'] : undefined) || 'https://secure.walletconnect.org',
    VIEW_DIRECTION: {
        Next: 'next',
        Prev: 'prev'
    },
    DEFAULT_CONNECT_METHOD_ORDER: [
        'email',
        'social',
        'wallet'
    ],
    ANIMATION_DURATIONS: {
        HeaderText: 120,
        ModalHeight: 150,
        ViewTransition: 150
    }
}; //# sourceMappingURL=ConstantsUtil.js.map
}),
"[project]/frontend/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/utils/WalletUtil.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WalletUtil",
    ()=>WalletUtil
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ApiController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ApiController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectorController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ConnectorController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@reown/appkit-controllers/dist/esm/src/utils/CoreHelperUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/OptionsController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$StorageUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@reown/appkit-controllers/dist/esm/src/utils/StorageUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$HelpersUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@reown/appkit-utils/dist/esm/src/HelpersUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$scaffold$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$ConnectorUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/utils/ConnectorUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$scaffold$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/utils/ConstantsUtil.js [app-client] (ecmascript)");
;
;
;
;
const WalletUtil = {
    filterOutDuplicatesByRDNS (wallets) {
        const connectors = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].state.enableEIP6963 ? __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectorController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectorController"].state.connectors : [];
        const recent = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$StorageUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StorageUtil"].getRecentWallets();
        const connectorRDNSs = connectors.map((connector)=>{
            var _connector_info;
            return (_connector_info = connector.info) === null || _connector_info === void 0 ? void 0 : _connector_info.rdns;
        }).filter(Boolean);
        const recentRDNSs = recent.map((wallet)=>wallet.rdns).filter(Boolean);
        const allRDNSs = connectorRDNSs.concat(recentRDNSs);
        if (allRDNSs.includes('io.metamask.mobile') && __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CoreHelperUtil"].isMobile()) {
            const index = allRDNSs.indexOf('io.metamask.mobile');
            allRDNSs[index] = 'io.metamask';
        }
        const filtered = wallets.filter((wallet)=>!allRDNSs.includes(String(wallet === null || wallet === void 0 ? void 0 : wallet.rdns)));
        return filtered;
    },
    filterOutDuplicatesByIds (wallets) {
        const connectors = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectorController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectorController"].state.connectors.filter((connector)=>connector.type === 'ANNOUNCED' || connector.type === 'INJECTED');
        const recent = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$StorageUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StorageUtil"].getRecentWallets();
        const connectorIds = connectors.map((connector)=>connector.explorerId);
        const recentIds = recent.map((wallet)=>wallet.id);
        const allIds = connectorIds.concat(recentIds);
        const filtered = wallets.filter((wallet)=>!allIds.includes(wallet === null || wallet === void 0 ? void 0 : wallet.id));
        return filtered;
    },
    filterOutDuplicateWallets (wallets) {
        const uniqueByRDNS = this.filterOutDuplicatesByRDNS(wallets);
        const uniqueWallets = this.filterOutDuplicatesByIds(uniqueByRDNS);
        return uniqueWallets;
    },
    markWalletsAsInstalled (wallets) {
        const { connectors } = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectorController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectorController"].state;
        const { featuredWalletIds } = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].state;
        const installedWalletRdnsMap = connectors.filter((connector)=>connector.type === 'ANNOUNCED').reduce((rdnsMap, connector)=>{
            var _connector_info;
            if (!((_connector_info = connector.info) === null || _connector_info === void 0 ? void 0 : _connector_info.rdns)) {
                return rdnsMap;
            }
            rdnsMap[connector.info.rdns] = true;
            return rdnsMap;
        }, {});
        const walletsWithInstallationStatus = wallets.map((wallet)=>{
            var _wallet_rdns;
            return {
                ...wallet,
                installed: Boolean(wallet.rdns) && Boolean(installedWalletRdnsMap[(_wallet_rdns = wallet.rdns) !== null && _wallet_rdns !== void 0 ? _wallet_rdns : ''])
            };
        });
        const sortedWallets = walletsWithInstallationStatus.sort((walletA, walletB)=>{
            const installationComparison = Number(walletB.installed) - Number(walletA.installed);
            if (installationComparison !== 0) {
                return installationComparison;
            }
            if (featuredWalletIds === null || featuredWalletIds === void 0 ? void 0 : featuredWalletIds.length) {
                const walletAFeaturedIndex = featuredWalletIds.indexOf(walletA.id);
                const walletBFeaturedIndex = featuredWalletIds.indexOf(walletB.id);
                if (walletAFeaturedIndex !== -1 && walletBFeaturedIndex !== -1) {
                    return walletAFeaturedIndex - walletBFeaturedIndex;
                }
                if (walletAFeaturedIndex !== -1) {
                    return -1;
                }
                if (walletBFeaturedIndex !== -1) {
                    return 1;
                }
            }
            return 0;
        });
        return sortedWallets;
    },
    getConnectOrderMethod (_features, _connectors) {
        var _OptionsController_state_features;
        const connectMethodOrder = (_features === null || _features === void 0 ? void 0 : _features.connectMethodsOrder) || ((_OptionsController_state_features = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].state.features) === null || _OptionsController_state_features === void 0 ? void 0 : _OptionsController_state_features.connectMethodsOrder);
        const connectors = _connectors || __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectorController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectorController"].state.connectors;
        if (connectMethodOrder) {
            return connectMethodOrder;
        }
        const { injected, announced } = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$scaffold$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$ConnectorUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectorUtil"].getConnectorsByType(connectors, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ApiController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApiController"].state.recommended, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ApiController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApiController"].state.featured);
        const shownInjected = injected.filter(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$scaffold$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$ConnectorUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectorUtil"].showConnector);
        const shownAnnounced = announced.filter(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$scaffold$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$ConnectorUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectorUtil"].showConnector);
        if (shownInjected.length || shownAnnounced.length) {
            return [
                'wallet',
                'email',
                'social'
            ];
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$scaffold$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].DEFAULT_CONNECT_METHOD_ORDER;
    },
    isExcluded (wallet) {
        const isRDNSExcluded = Boolean(wallet.rdns) && __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ApiController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApiController"].state.excludedWallets.some((w)=>w.rdns === wallet.rdns);
        const isNameExcluded = Boolean(wallet.name) && __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ApiController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApiController"].state.excludedWallets.some((w)=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$HelpersUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HelpersUtil"].isLowerCaseMatch(w.name, wallet.name));
        return isRDNSExcluded || isNameExcluded;
    }
}; //# sourceMappingURL=WalletUtil.js.map
}),
"[project]/frontend/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/utils/ConnectorUtil.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ConnectorUtil",
    ()=>ConnectorUtil
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@reown/appkit-common/dist/esm/src/utils/ConstantsUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ApiController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ApiController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ChainController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectionController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ConnectionController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectorController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ConnectorController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@reown/appkit-controllers/dist/esm/src/utils/CoreHelperUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/OptionsController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$StorageUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@reown/appkit-controllers/dist/esm/src/utils/StorageUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$HelpersUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@reown/appkit-utils/dist/esm/src/HelpersUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$scaffold$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$WalletUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/utils/WalletUtil.js [app-client] (ecmascript)");
var _OptionsController_state_features;
;
;
;
;
var _OptionsController_state_features_connectorTypeOrder;
const ConnectorUtil = {
    getConnectorsByType (connectors, recommended, featured) {
        const { customWallets } = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].state;
        const recent = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$StorageUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StorageUtil"].getRecentWallets();
        const filteredRecommended = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$scaffold$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$WalletUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WalletUtil"].filterOutDuplicateWallets(recommended);
        const filteredFeatured = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$scaffold$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$WalletUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WalletUtil"].filterOutDuplicateWallets(featured);
        const multiChain = connectors.filter((connector)=>connector.type === 'MULTI_CHAIN');
        const announced = connectors.filter((connector)=>connector.type === 'ANNOUNCED');
        const injected = connectors.filter((connector)=>connector.type === 'INJECTED');
        const external = connectors.filter((connector)=>connector.type === 'EXTERNAL');
        return {
            custom: customWallets,
            recent,
            external,
            multiChain,
            announced,
            injected,
            recommended: filteredRecommended,
            featured: filteredFeatured
        };
    },
    showConnector (connector) {
        var _connector_info;
        const rdns = (_connector_info = connector.info) === null || _connector_info === void 0 ? void 0 : _connector_info.rdns;
        const isRDNSExcluded = Boolean(rdns) && __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ApiController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApiController"].state.excludedWallets.some((wallet)=>Boolean(wallet.rdns) && wallet.rdns === rdns);
        const isNameExcluded = Boolean(connector.name) && __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ApiController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApiController"].state.excludedWallets.some((wallet)=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$HelpersUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HelpersUtil"].isLowerCaseMatch(wallet.name, connector.name));
        if (connector.type === 'INJECTED') {
            const isBrowserWallet = connector.name === 'Browser Wallet';
            if (isBrowserWallet) {
                if (!__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CoreHelperUtil"].isMobile()) {
                    return false;
                }
                if (__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CoreHelperUtil"].isMobile() && !rdns && !__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectionController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectionController"].checkInstalled()) {
                    return false;
                }
            }
            if (isRDNSExcluded || isNameExcluded) {
                return false;
            }
        }
        if ((connector.type === 'ANNOUNCED' || connector.type === 'EXTERNAL') && (isRDNSExcluded || isNameExcluded)) {
            return false;
        }
        return true;
    },
    getIsConnectedWithWC () {
        const chains = Array.from(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].state.chains.values());
        const isConnectedWithWC = chains.some((chain)=>{
            const connectorId = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectorController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectorController"].getConnectorId(chain.namespace);
            return connectorId === __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].CONNECTOR_ID.WALLET_CONNECT;
        });
        return isConnectedWithWC;
    },
    getConnectorTypeOrder (param) {
        let { recommended, featured, custom, recent, announced, injected, multiChain, external, overriddenConnectors = (_OptionsController_state_features_connectorTypeOrder = (_OptionsController_state_features = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].state.features) === null || _OptionsController_state_features === void 0 ? void 0 : _OptionsController_state_features.connectorTypeOrder) !== null && _OptionsController_state_features_connectorTypeOrder !== void 0 ? _OptionsController_state_features_connectorTypeOrder : [] } = param;
        const isConnectedWithWC = ConnectorUtil.getIsConnectedWithWC();
        const isWCEnabled = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].state.enableWalletConnect;
        const allConnectors = [
            {
                type: 'walletConnect',
                isEnabled: isWCEnabled && !isConnectedWithWC
            },
            {
                type: 'recent',
                isEnabled: recent.length > 0
            },
            {
                type: 'injected',
                isEnabled: [
                    ...injected,
                    ...announced,
                    ...multiChain
                ].length > 0
            },
            {
                type: 'featured',
                isEnabled: featured.length > 0
            },
            {
                type: 'custom',
                isEnabled: custom && custom.length > 0
            },
            {
                type: 'external',
                isEnabled: external.length > 0
            },
            {
                type: 'recommended',
                isEnabled: recommended.length > 0
            }
        ];
        const enabledConnectors = allConnectors.filter((option)=>option.isEnabled);
        const enabledConnectorTypes = new Set(enabledConnectors.map((option)=>option.type));
        const prioritizedConnectors = overriddenConnectors.filter((type)=>enabledConnectorTypes.has(type)).map((type)=>({
                type,
                isEnabled: true
            }));
        const remainingConnectors = enabledConnectors.filter((param)=>{
            let { type: enabledConnectorType } = param;
            const hasPrioritizedConnector = prioritizedConnectors.some((param)=>{
                let { type: prioritizedConnectorType } = param;
                return prioritizedConnectorType === enabledConnectorType;
            });
            return !hasPrioritizedConnector;
        });
        return Array.from(new Set([
            ...prioritizedConnectors,
            ...remainingConnectors
        ].map((param)=>{
            let { type } = param;
            return type;
        })));
    }
}; //# sourceMappingURL=ConnectorUtil.js.map
}),
"[project]/frontend/node_modules/@reown/appkit-scaffold-ui/dist/esm/exports/utils.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$scaffold$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$ConnectorUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/utils/ConnectorUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$scaffold$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/utils/ConstantsUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$scaffold$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$WalletUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/utils/WalletUtil.js [app-client] (ecmascript)"); //# sourceMappingURL=utils.js.map
;
;
;
}),
"[project]/frontend/node_modules/@reown/appkit-ui/dist/esm/src/utils/MathUtil.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MathUtil",
    ()=>MathUtil
]);
const MathUtil = {
    interpolate (inputRange, outputRange, value) {
        if (inputRange.length !== 2 || outputRange.length !== 2) {
            throw new Error('inputRange and outputRange must be an array of length 2');
        }
        const originalRangeMin = inputRange[0] || 0;
        const originalRangeMax = inputRange[1] || 0;
        const newRangeMin = outputRange[0] || 0;
        const newRangeMax = outputRange[1] || 0;
        if (value < originalRangeMin) {
            return newRangeMin;
        }
        if (value > originalRangeMax) {
            return newRangeMax;
        }
        return (newRangeMax - newRangeMin) / (originalRangeMax - originalRangeMin) * (value - originalRangeMin) + newRangeMin;
    }
}; //# sourceMappingURL=MathUtil.js.map
}),
"[project]/frontend/node_modules/@reown/appkit-ui/dist/esm/src/utils/ThemeUtil.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "colorStyles",
    ()=>colorStyles,
    "elementStyles",
    ()=>elementStyles,
    "initializeTheming",
    ()=>initializeTheming,
    "resetStyles",
    ()=>resetStyles,
    "setColorTheme",
    ()=>setColorTheme,
    "setThemeVariables",
    ()=>setThemeVariables
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@swc/helpers/esm/_tagged_template_literal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$node_modules$2f$lit$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/@reown/appkit-ui/node_modules/lit/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$css$2d$tag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@reown/appkit-ui/node_modules/@lit/reactive-element/development/css-tag.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ThemeUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@reown/appkit-common/dist/esm/src/utils/ThemeUtil.js [app-client] (ecmascript)");
;
function _templateObject() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');\n      @keyframes w3m-shake {\n        0% {\n          transform: scale(1) rotate(0deg);\n        }\n        20% {\n          transform: scale(1) rotate(-1deg);\n        }\n        40% {\n          transform: scale(1) rotate(1.5deg);\n        }\n        60% {\n          transform: scale(1) rotate(-1.5deg);\n        }\n        80% {\n          transform: scale(1) rotate(1deg);\n        }\n        100% {\n          transform: scale(1) rotate(0deg);\n        }\n      }\n      @keyframes w3m-iframe-fade-out {\n        0% {\n          opacity: 1;\n        }\n        100% {\n          opacity: 0;\n        }\n      }\n      @keyframes w3m-iframe-zoom-in {\n        0% {\n          transform: translateY(50px);\n          opacity: 0;\n        }\n        100% {\n          transform: translateY(0px);\n          opacity: 1;\n        }\n      }\n      @keyframes w3m-iframe-zoom-in-mobile {\n        0% {\n          transform: scale(0.95);\n          opacity: 0;\n        }\n        100% {\n          transform: scale(1);\n          opacity: 1;\n        }\n      }\n      :root {\n        --w3m-modal-width: 360px;\n        --w3m-color-mix-strength: ",
        ";\n        --w3m-font-family: ",
        ";\n        --w3m-font-size-master: ",
        ";\n        --w3m-border-radius-master: ",
        ";\n        --w3m-z-index: ",
        ";\n\n        --wui-font-family: var(--w3m-font-family);\n\n        --wui-font-size-mini: calc(var(--w3m-font-size-master) * 0.8);\n        --wui-font-size-micro: var(--w3m-font-size-master);\n        --wui-font-size-tiny: calc(var(--w3m-font-size-master) * 1.2);\n        --wui-font-size-small: calc(var(--w3m-font-size-master) * 1.4);\n        --wui-font-size-paragraph: calc(var(--w3m-font-size-master) * 1.6);\n        --wui-font-size-medium: calc(var(--w3m-font-size-master) * 1.8);\n        --wui-font-size-large: calc(var(--w3m-font-size-master) * 2);\n        --wui-font-size-title-6: calc(var(--w3m-font-size-master) * 2.2);\n        --wui-font-size-medium-title: calc(var(--w3m-font-size-master) * 2.4);\n        --wui-font-size-2xl: calc(var(--w3m-font-size-master) * 4);\n\n        --wui-border-radius-5xs: var(--w3m-border-radius-master);\n        --wui-border-radius-4xs: calc(var(--w3m-border-radius-master) * 1.5);\n        --wui-border-radius-3xs: calc(var(--w3m-border-radius-master) * 2);\n        --wui-border-radius-xxs: calc(var(--w3m-border-radius-master) * 3);\n        --wui-border-radius-xs: calc(var(--w3m-border-radius-master) * 4);\n        --wui-border-radius-s: calc(var(--w3m-border-radius-master) * 5);\n        --wui-border-radius-m: calc(var(--w3m-border-radius-master) * 7);\n        --wui-border-radius-l: calc(var(--w3m-border-radius-master) * 9);\n        --wui-border-radius-3xl: calc(var(--w3m-border-radius-master) * 20);\n\n        --wui-font-weight-light: 400;\n        --wui-font-weight-regular: 500;\n        --wui-font-weight-medium: 600;\n        --wui-font-weight-bold: 700;\n\n        --wui-letter-spacing-2xl: -1.6px;\n        --wui-letter-spacing-medium-title: -0.96px;\n        --wui-letter-spacing-title-6: -0.88px;\n        --wui-letter-spacing-large: -0.8px;\n        --wui-letter-spacing-medium: -0.72px;\n        --wui-letter-spacing-paragraph: -0.64px;\n        --wui-letter-spacing-small: -0.56px;\n        --wui-letter-spacing-tiny: -0.48px;\n        --wui-letter-spacing-micro: -0.2px;\n        --wui-letter-spacing-mini: -0.16px;\n\n        --wui-spacing-0: 0px;\n        --wui-spacing-4xs: 2px;\n        --wui-spacing-3xs: 4px;\n        --wui-spacing-xxs: 6px;\n        --wui-spacing-2xs: 7px;\n        --wui-spacing-xs: 8px;\n        --wui-spacing-1xs: 10px;\n        --wui-spacing-s: 12px;\n        --wui-spacing-m: 14px;\n        --wui-spacing-l: 16px;\n        --wui-spacing-2l: 18px;\n        --wui-spacing-xl: 20px;\n        --wui-spacing-xxl: 24px;\n        --wui-spacing-2xl: 32px;\n        --wui-spacing-3xl: 40px;\n        --wui-spacing-4xl: 90px;\n        --wui-spacing-5xl: 95px;\n\n        --wui-icon-box-size-xxs: 14px;\n        --wui-icon-box-size-xs: 20px;\n        --wui-icon-box-size-sm: 24px;\n        --wui-icon-box-size-md: 32px;\n        --wui-icon-box-size-mdl: 36px;\n        --wui-icon-box-size-lg: 40px;\n        --wui-icon-box-size-2lg: 48px;\n        --wui-icon-box-size-xl: 64px;\n\n        --wui-icon-size-inherit: inherit;\n        --wui-icon-size-xxs: 10px;\n        --wui-icon-size-xs: 12px;\n        --wui-icon-size-sm: 14px;\n        --wui-icon-size-md: 16px;\n        --wui-icon-size-mdl: 18px;\n        --wui-icon-size-lg: 20px;\n        --wui-icon-size-xl: 24px;\n        --wui-icon-size-xxl: 28px;\n\n        --wui-wallet-image-size-inherit: inherit;\n        --wui-wallet-image-size-sm: 40px;\n        --wui-wallet-image-size-md: 56px;\n        --wui-wallet-image-size-lg: 80px;\n\n        --wui-visual-size-size-inherit: inherit;\n        --wui-visual-size-sm: 40px;\n        --wui-visual-size-md: 55px;\n        --wui-visual-size-lg: 80px;\n\n        --wui-box-size-md: 100px;\n        --wui-box-size-lg: 120px;\n\n        --wui-ease-out-power-2: cubic-bezier(0, 0, 0.22, 1);\n        --wui-ease-out-power-1: cubic-bezier(0, 0, 0.55, 1);\n\n        --wui-ease-in-power-3: cubic-bezier(0.66, 0, 1, 1);\n        --wui-ease-in-power-2: cubic-bezier(0.45, 0, 1, 1);\n        --wui-ease-in-power-1: cubic-bezier(0.3, 0, 1, 1);\n\n        --wui-ease-inout-power-1: cubic-bezier(0.45, 0, 0.55, 1);\n\n        --wui-duration-lg: 200ms;\n        --wui-duration-md: 125ms;\n        --wui-duration-sm: 75ms;\n\n        --wui-path-network-sm: path(\n          'M15.4 2.1a5.21 5.21 0 0 1 5.2 0l11.61 6.7a5.21 5.21 0 0 1 2.61 4.52v13.4c0 1.87-1 3.59-2.6 4.52l-11.61 6.7c-1.62.93-3.6.93-5.22 0l-11.6-6.7a5.21 5.21 0 0 1-2.61-4.51v-13.4c0-1.87 1-3.6 2.6-4.52L15.4 2.1Z'\n        );\n\n        --wui-path-network-md: path(\n          'M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z'\n        );\n\n        --wui-path-network-lg: path(\n          'M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z'\n        );\n\n        --wui-width-network-sm: 36px;\n        --wui-width-network-md: 48px;\n        --wui-width-network-lg: 86px;\n\n        --wui-height-network-sm: 40px;\n        --wui-height-network-md: 54px;\n        --wui-height-network-lg: 96px;\n\n        --wui-icon-size-network-xs: 12px;\n        --wui-icon-size-network-sm: 16px;\n        --wui-icon-size-network-md: 24px;\n        --wui-icon-size-network-lg: 42px;\n\n        --wui-color-inherit: inherit;\n\n        --wui-color-inverse-100: #fff;\n        --wui-color-inverse-000: #000;\n\n        --wui-cover: rgba(20, 20, 20, 0.8);\n\n        --wui-color-modal-bg: var(--wui-color-modal-bg-base);\n\n        --wui-color-accent-100: var(--wui-color-accent-base-100);\n        --wui-color-accent-090: var(--wui-color-accent-base-090);\n        --wui-color-accent-080: var(--wui-color-accent-base-080);\n\n        --wui-color-success-100: var(--wui-color-success-base-100);\n        --wui-color-success-125: var(--wui-color-success-base-125);\n\n        --wui-color-warning-100: var(--wui-color-warning-base-100);\n\n        --wui-color-error-100: var(--wui-color-error-base-100);\n        --wui-color-error-125: var(--wui-color-error-base-125);\n\n        --wui-color-blue-100: var(--wui-color-blue-base-100);\n        --wui-color-blue-90: var(--wui-color-blue-base-90);\n\n        --wui-icon-box-bg-error-100: var(--wui-icon-box-bg-error-base-100);\n        --wui-icon-box-bg-blue-100: var(--wui-icon-box-bg-blue-base-100);\n        --wui-icon-box-bg-success-100: var(--wui-icon-box-bg-success-base-100);\n        --wui-icon-box-bg-inverse-100: var(--wui-icon-box-bg-inverse-base-100);\n\n        --wui-all-wallets-bg-100: var(--wui-all-wallets-bg-100);\n\n        --wui-avatar-border: var(--wui-avatar-border-base);\n\n        --wui-thumbnail-border: var(--wui-thumbnail-border-base);\n\n        --wui-wallet-button-bg: var(--wui-wallet-button-bg-base);\n\n        --wui-box-shadow-blue: var(--wui-color-accent-glass-020);\n      }\n\n      @supports (background: color-mix(in srgb, white 50%, black)) {\n        :root {\n          --wui-color-modal-bg: color-mix(\n            in srgb,\n            var(--w3m-color-mix) var(--w3m-color-mix-strength),\n            var(--wui-color-modal-bg-base)\n          );\n\n          --wui-box-shadow-blue: color-mix(in srgb, var(--wui-color-accent-100) 20%, transparent);\n\n          --wui-color-accent-100: color-mix(\n            in srgb,\n            var(--wui-color-accent-base-100) 100%,\n            transparent\n          );\n          --wui-color-accent-090: color-mix(\n            in srgb,\n            var(--wui-color-accent-base-100) 90%,\n            transparent\n          );\n          --wui-color-accent-080: color-mix(\n            in srgb,\n            var(--wui-color-accent-base-100) 80%,\n            transparent\n          );\n          --wui-color-accent-glass-090: color-mix(\n            in srgb,\n            var(--wui-color-accent-base-100) 90%,\n            transparent\n          );\n          --wui-color-accent-glass-080: color-mix(\n            in srgb,\n            var(--wui-color-accent-base-100) 80%,\n            transparent\n          );\n          --wui-color-accent-glass-020: color-mix(\n            in srgb,\n            var(--wui-color-accent-base-100) 20%,\n            transparent\n          );\n          --wui-color-accent-glass-015: color-mix(\n            in srgb,\n            var(--wui-color-accent-base-100) 15%,\n            transparent\n          );\n          --wui-color-accent-glass-010: color-mix(\n            in srgb,\n            var(--wui-color-accent-base-100) 10%,\n            transparent\n          );\n          --wui-color-accent-glass-005: color-mix(\n            in srgb,\n            var(--wui-color-accent-base-100) 5%,\n            transparent\n          );\n          --wui-color-accent-002: color-mix(\n            in srgb,\n            var(--wui-color-accent-base-100) 2%,\n            transparent\n          );\n\n          --wui-color-fg-100: color-mix(\n            in srgb,\n            var(--w3m-color-mix) var(--w3m-color-mix-strength),\n            var(--wui-color-fg-100)\n          );\n          --wui-color-fg-125: color-mix(\n            in srgb,\n            var(--w3m-color-mix) var(--w3m-color-mix-strength),\n            var(--wui-color-fg-125)\n          );\n          --wui-color-fg-150: color-mix(\n            in srgb,\n            var(--w3m-color-mix) var(--w3m-color-mix-strength),\n            var(--wui-color-fg-150)\n          );\n          --wui-color-fg-175: color-mix(\n            in srgb,\n            var(--w3m-color-mix) var(--w3m-color-mix-strength),\n            var(--wui-color-fg-175)\n          );\n          --wui-color-fg-200: color-mix(\n            in srgb,\n            var(--w3m-color-mix) var(--w3m-color-mix-strength),\n            var(--wui-color-fg-200)\n          );\n          --wui-color-fg-225: color-mix(\n            in srgb,\n            var(--w3m-color-mix) var(--w3m-color-mix-strength),\n            var(--wui-color-fg-225)\n          );\n          --wui-color-fg-250: color-mix(\n            in srgb,\n            var(--w3m-color-mix) var(--w3m-color-mix-strength),\n            var(--wui-color-fg-250)\n          );\n          --wui-color-fg-275: color-mix(\n            in srgb,\n            var(--w3m-color-mix) var(--w3m-color-mix-strength),\n            var(--wui-color-fg-275)\n          );\n          --wui-color-fg-300: color-mix(\n            in srgb,\n            var(--w3m-color-mix) var(--w3m-color-mix-strength),\n            var(--wui-color-fg-300)\n          );\n          --wui-color-fg-325: color-mix(\n            in srgb,\n            var(--w3m-color-mix) var(--w3m-color-mix-strength),\n            var(--wui-color-fg-325)\n          );\n          --wui-color-fg-350: color-mix(\n            in srgb,\n            var(--w3m-color-mix) var(--w3m-color-mix-strength),\n            var(--wui-color-fg-350)\n          );\n\n          --wui-color-bg-100: color-mix(\n            in srgb,\n            var(--w3m-color-mix) var(--w3m-color-mix-strength),\n            var(--wui-color-bg-100)\n          );\n          --wui-color-bg-125: color-mix(\n            in srgb,\n            var(--w3m-color-mix) var(--w3m-color-mix-strength),\n            var(--wui-color-bg-125)\n          );\n          --wui-color-bg-150: color-mix(\n            in srgb,\n            var(--w3m-color-mix) var(--w3m-color-mix-strength),\n            var(--wui-color-bg-150)\n          );\n          --wui-color-bg-175: color-mix(\n            in srgb,\n            var(--w3m-color-mix) var(--w3m-color-mix-strength),\n            var(--wui-color-bg-175)\n          );\n          --wui-color-bg-200: color-mix(\n            in srgb,\n            var(--w3m-color-mix) var(--w3m-color-mix-strength),\n            var(--wui-color-bg-200)\n          );\n          --wui-color-bg-225: color-mix(\n            in srgb,\n            var(--w3m-color-mix) var(--w3m-color-mix-strength),\n            var(--wui-color-bg-225)\n          );\n          --wui-color-bg-250: color-mix(\n            in srgb,\n            var(--w3m-color-mix) var(--w3m-color-mix-strength),\n            var(--wui-color-bg-250)\n          );\n          --wui-color-bg-275: color-mix(\n            in srgb,\n            var(--w3m-color-mix) var(--w3m-color-mix-strength),\n            var(--wui-color-bg-275)\n          );\n          --wui-color-bg-300: color-mix(\n            in srgb,\n            var(--w3m-color-mix) var(--w3m-color-mix-strength),\n            var(--wui-color-bg-300)\n          );\n          --wui-color-bg-325: color-mix(\n            in srgb,\n            var(--w3m-color-mix) var(--w3m-color-mix-strength),\n            var(--wui-color-bg-325)\n          );\n          --wui-color-bg-350: color-mix(\n            in srgb,\n            var(--w3m-color-mix) var(--w3m-color-mix-strength),\n            var(--wui-color-bg-350)\n          );\n\n          --wui-color-success-100: color-mix(\n            in srgb,\n            var(--w3m-color-mix) var(--w3m-color-mix-strength),\n            var(--wui-color-success-base-100)\n          );\n          --wui-color-success-125: color-mix(\n            in srgb,\n            var(--w3m-color-mix) var(--w3m-color-mix-strength),\n            var(--wui-color-success-base-125)\n          );\n\n          --wui-color-warning-100: color-mix(\n            in srgb,\n            var(--w3m-color-mix) var(--w3m-color-mix-strength),\n            var(--wui-color-warning-base-100)\n          );\n\n          --wui-color-error-100: color-mix(\n            in srgb,\n            var(--w3m-color-mix) var(--w3m-color-mix-strength),\n            var(--wui-color-error-base-100)\n          );\n          --wui-color-blue-100: color-mix(\n            in srgb,\n            var(--w3m-color-mix) var(--w3m-color-mix-strength),\n            var(--wui-color-blue-base-100)\n          );\n          --wui-color-blue-90: color-mix(\n            in srgb,\n            var(--w3m-color-mix) var(--w3m-color-mix-strength),\n            var(--wui-color-blue-base-90)\n          );\n          --wui-color-error-125: color-mix(\n            in srgb,\n            var(--w3m-color-mix) var(--w3m-color-mix-strength),\n            var(--wui-color-error-base-125)\n          );\n\n          --wui-icon-box-bg-error-100: color-mix(\n            in srgb,\n            var(--w3m-color-mix) var(--w3m-color-mix-strength),\n            var(--wui-icon-box-bg-error-base-100)\n          );\n          --wui-icon-box-bg-accent-100: color-mix(\n            in srgb,\n            var(--w3m-color-mix) var(--w3m-color-mix-strength),\n            var(--wui-icon-box-bg-blue-base-100)\n          );\n          --wui-icon-box-bg-success-100: color-mix(\n            in srgb,\n            var(--w3m-color-mix) var(--w3m-color-mix-strength),\n            var(--wui-icon-box-bg-success-base-100)\n          );\n          --wui-icon-box-bg-inverse-100: color-mix(\n            in srgb,\n            var(--w3m-color-mix) var(--w3m-color-mix-strength),\n            var(--wui-icon-box-bg-inverse-base-100)\n          );\n\n          --wui-all-wallets-bg-100: color-mix(\n            in srgb,\n            var(--w3m-color-mix) var(--w3m-color-mix-strength),\n            var(--wui-all-wallets-bg-100)\n          );\n\n          --wui-avatar-border: color-mix(\n            in srgb,\n            var(--w3m-color-mix) var(--w3m-color-mix-strength),\n            var(--wui-avatar-border-base)\n          );\n\n          --wui-thumbnail-border: color-mix(\n            in srgb,\n            var(--w3m-color-mix) var(--w3m-color-mix-strength),\n            var(--wui-thumbnail-border-base)\n          );\n\n          --wui-wallet-button-bg: color-mix(\n            in srgb,\n            var(--w3m-color-mix) var(--w3m-color-mix-strength),\n            var(--wui-wallet-button-bg-base)\n          );\n        }\n      }\n    "
    ]);
    _templateObject = function() {
        return data;
    };
    return data;
}
function _templateObject1() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n      :root {\n        --w3m-color-mix: ",
        ";\n        --w3m-accent: ",
        ";\n        --w3m-default: #fff;\n\n        --wui-color-modal-bg-base: ",
        ";\n        --wui-color-accent-base-100: var(--w3m-accent);\n\n        --wui-color-blueberry-100: hsla(230, 100%, 67%, 1);\n        --wui-color-blueberry-090: hsla(231, 76%, 61%, 1);\n        --wui-color-blueberry-080: hsla(230, 59%, 55%, 1);\n        --wui-color-blueberry-050: hsla(231, 100%, 70%, 0.1);\n\n        --wui-color-fg-100: #e4e7e7;\n        --wui-color-fg-125: #d0d5d5;\n        --wui-color-fg-150: #a8b1b1;\n        --wui-color-fg-175: #a8b0b0;\n        --wui-color-fg-200: #949e9e;\n        --wui-color-fg-225: #868f8f;\n        --wui-color-fg-250: #788080;\n        --wui-color-fg-275: #788181;\n        --wui-color-fg-300: #6e7777;\n        --wui-color-fg-325: #9a9a9a;\n        --wui-color-fg-350: #363636;\n\n        --wui-color-bg-100: #141414;\n        --wui-color-bg-125: #191a1a;\n        --wui-color-bg-150: #1e1f1f;\n        --wui-color-bg-175: #222525;\n        --wui-color-bg-200: #272a2a;\n        --wui-color-bg-225: #2c3030;\n        --wui-color-bg-250: #313535;\n        --wui-color-bg-275: #363b3b;\n        --wui-color-bg-300: #3b4040;\n        --wui-color-bg-325: #252525;\n        --wui-color-bg-350: #ffffff;\n\n        --wui-color-success-base-100: #26d962;\n        --wui-color-success-base-125: #30a46b;\n\n        --wui-color-warning-base-100: #f3a13f;\n\n        --wui-color-error-base-100: #f25a67;\n        --wui-color-error-base-125: #df4a34;\n\n        --wui-color-blue-base-100: rgba(102, 125, 255, 1);\n        --wui-color-blue-base-90: rgba(102, 125, 255, 0.9);\n\n        --wui-color-success-glass-001: rgba(38, 217, 98, 0.01);\n        --wui-color-success-glass-002: rgba(38, 217, 98, 0.02);\n        --wui-color-success-glass-005: rgba(38, 217, 98, 0.05);\n        --wui-color-success-glass-010: rgba(38, 217, 98, 0.1);\n        --wui-color-success-glass-015: rgba(38, 217, 98, 0.15);\n        --wui-color-success-glass-020: rgba(38, 217, 98, 0.2);\n        --wui-color-success-glass-025: rgba(38, 217, 98, 0.25);\n        --wui-color-success-glass-030: rgba(38, 217, 98, 0.3);\n        --wui-color-success-glass-060: rgba(38, 217, 98, 0.6);\n        --wui-color-success-glass-080: rgba(38, 217, 98, 0.8);\n\n        --wui-color-success-glass-reown-020: rgba(48, 164, 107, 0.2);\n\n        --wui-color-warning-glass-reown-020: rgba(243, 161, 63, 0.2);\n\n        --wui-color-error-glass-001: rgba(242, 90, 103, 0.01);\n        --wui-color-error-glass-002: rgba(242, 90, 103, 0.02);\n        --wui-color-error-glass-005: rgba(242, 90, 103, 0.05);\n        --wui-color-error-glass-010: rgba(242, 90, 103, 0.1);\n        --wui-color-error-glass-015: rgba(242, 90, 103, 0.15);\n        --wui-color-error-glass-020: rgba(242, 90, 103, 0.2);\n        --wui-color-error-glass-025: rgba(242, 90, 103, 0.25);\n        --wui-color-error-glass-030: rgba(242, 90, 103, 0.3);\n        --wui-color-error-glass-060: rgba(242, 90, 103, 0.6);\n        --wui-color-error-glass-080: rgba(242, 90, 103, 0.8);\n\n        --wui-color-error-glass-reown-020: rgba(223, 74, 52, 0.2);\n\n        --wui-color-gray-glass-001: rgba(255, 255, 255, 0.01);\n        --wui-color-gray-glass-002: rgba(255, 255, 255, 0.02);\n        --wui-color-gray-glass-005: rgba(255, 255, 255, 0.05);\n        --wui-color-gray-glass-010: rgba(255, 255, 255, 0.1);\n        --wui-color-gray-glass-015: rgba(255, 255, 255, 0.15);\n        --wui-color-gray-glass-020: rgba(255, 255, 255, 0.2);\n        --wui-color-gray-glass-025: rgba(255, 255, 255, 0.25);\n        --wui-color-gray-glass-030: rgba(255, 255, 255, 0.3);\n        --wui-color-gray-glass-060: rgba(255, 255, 255, 0.6);\n        --wui-color-gray-glass-080: rgba(255, 255, 255, 0.8);\n        --wui-color-gray-glass-090: rgba(255, 255, 255, 0.9);\n\n        --wui-color-dark-glass-100: rgba(42, 42, 42, 1);\n\n        --wui-icon-box-bg-error-base-100: #3c2426;\n        --wui-icon-box-bg-blue-base-100: #20303f;\n        --wui-icon-box-bg-success-base-100: #1f3a28;\n        --wui-icon-box-bg-inverse-base-100: #243240;\n\n        --wui-all-wallets-bg-100: #222b35;\n\n        --wui-avatar-border-base: #252525;\n\n        --wui-thumbnail-border-base: #252525;\n\n        --wui-wallet-button-bg-base: var(--wui-color-bg-125);\n\n        --w3m-card-embedded-shadow-color: rgb(17 17 18 / 25%);\n      }\n    "
    ]);
    _templateObject1 = function() {
        return data;
    };
    return data;
}
function _templateObject2() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n      :root {\n        --w3m-color-mix: ",
        ";\n        --w3m-accent: ",
        ";\n        --w3m-default: #000;\n\n        --wui-color-modal-bg-base: ",
        ";\n        --wui-color-accent-base-100: var(--w3m-accent);\n\n        --wui-color-blueberry-100: hsla(231, 100%, 70%, 1);\n        --wui-color-blueberry-090: hsla(231, 97%, 72%, 1);\n        --wui-color-blueberry-080: hsla(231, 92%, 74%, 1);\n\n        --wui-color-fg-100: #141414;\n        --wui-color-fg-125: #2d3131;\n        --wui-color-fg-150: #474d4d;\n        --wui-color-fg-175: #636d6d;\n        --wui-color-fg-200: #798686;\n        --wui-color-fg-225: #828f8f;\n        --wui-color-fg-250: #8b9797;\n        --wui-color-fg-275: #95a0a0;\n        --wui-color-fg-300: #9ea9a9;\n        --wui-color-fg-325: #9a9a9a;\n        --wui-color-fg-350: #d0d0d0;\n\n        --wui-color-bg-100: #ffffff;\n        --wui-color-bg-125: #f5fafa;\n        --wui-color-bg-150: #f3f8f8;\n        --wui-color-bg-175: #eef4f4;\n        --wui-color-bg-200: #eaf1f1;\n        --wui-color-bg-225: #e5eded;\n        --wui-color-bg-250: #e1e9e9;\n        --wui-color-bg-275: #dce7e7;\n        --wui-color-bg-300: #d8e3e3;\n        --wui-color-bg-325: #f3f3f3;\n        --wui-color-bg-350: #202020;\n\n        --wui-color-success-base-100: #26b562;\n        --wui-color-success-base-125: #30a46b;\n\n        --wui-color-warning-base-100: #f3a13f;\n\n        --wui-color-error-base-100: #f05142;\n        --wui-color-error-base-125: #df4a34;\n\n        --wui-color-blue-base-100: rgba(102, 125, 255, 1);\n        --wui-color-blue-base-90: rgba(102, 125, 255, 0.9);\n\n        --wui-color-success-glass-001: rgba(38, 181, 98, 0.01);\n        --wui-color-success-glass-002: rgba(38, 181, 98, 0.02);\n        --wui-color-success-glass-005: rgba(38, 181, 98, 0.05);\n        --wui-color-success-glass-010: rgba(38, 181, 98, 0.1);\n        --wui-color-success-glass-015: rgba(38, 181, 98, 0.15);\n        --wui-color-success-glass-020: rgba(38, 181, 98, 0.2);\n        --wui-color-success-glass-025: rgba(38, 181, 98, 0.25);\n        --wui-color-success-glass-030: rgba(38, 181, 98, 0.3);\n        --wui-color-success-glass-060: rgba(38, 181, 98, 0.6);\n        --wui-color-success-glass-080: rgba(38, 181, 98, 0.8);\n\n        --wui-color-success-glass-reown-020: rgba(48, 164, 107, 0.2);\n\n        --wui-color-warning-glass-reown-020: rgba(243, 161, 63, 0.2);\n\n        --wui-color-error-glass-001: rgba(240, 81, 66, 0.01);\n        --wui-color-error-glass-002: rgba(240, 81, 66, 0.02);\n        --wui-color-error-glass-005: rgba(240, 81, 66, 0.05);\n        --wui-color-error-glass-010: rgba(240, 81, 66, 0.1);\n        --wui-color-error-glass-015: rgba(240, 81, 66, 0.15);\n        --wui-color-error-glass-020: rgba(240, 81, 66, 0.2);\n        --wui-color-error-glass-025: rgba(240, 81, 66, 0.25);\n        --wui-color-error-glass-030: rgba(240, 81, 66, 0.3);\n        --wui-color-error-glass-060: rgba(240, 81, 66, 0.6);\n        --wui-color-error-glass-080: rgba(240, 81, 66, 0.8);\n\n        --wui-color-error-glass-reown-020: rgba(223, 74, 52, 0.2);\n\n        --wui-icon-box-bg-error-base-100: #f4dfdd;\n        --wui-icon-box-bg-blue-base-100: #d9ecfb;\n        --wui-icon-box-bg-success-base-100: #daf0e4;\n        --wui-icon-box-bg-inverse-base-100: #dcecfc;\n\n        --wui-all-wallets-bg-100: #e8f1fa;\n\n        --wui-avatar-border-base: #f3f4f4;\n\n        --wui-thumbnail-border-base: #eaefef;\n\n        --wui-wallet-button-bg-base: var(--wui-color-bg-125);\n\n        --wui-color-gray-glass-001: rgba(0, 0, 0, 0.01);\n        --wui-color-gray-glass-002: rgba(0, 0, 0, 0.02);\n        --wui-color-gray-glass-005: rgba(0, 0, 0, 0.05);\n        --wui-color-gray-glass-010: rgba(0, 0, 0, 0.1);\n        --wui-color-gray-glass-015: rgba(0, 0, 0, 0.15);\n        --wui-color-gray-glass-020: rgba(0, 0, 0, 0.2);\n        --wui-color-gray-glass-025: rgba(0, 0, 0, 0.25);\n        --wui-color-gray-glass-030: rgba(0, 0, 0, 0.3);\n        --wui-color-gray-glass-060: rgba(0, 0, 0, 0.6);\n        --wui-color-gray-glass-080: rgba(0, 0, 0, 0.8);\n        --wui-color-gray-glass-090: rgba(0, 0, 0, 0.9);\n\n        --wui-color-dark-glass-100: rgba(233, 233, 233, 1);\n\n        --w3m-card-embedded-shadow-color: rgb(224 225 233 / 25%);\n      }\n    "
    ]);
    _templateObject2 = function() {
        return data;
    };
    return data;
}
function _templateObject3() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  *,\n  *::after,\n  *::before,\n  :host {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-style: normal;\n    text-rendering: optimizeSpeed;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    -webkit-tap-highlight-color: transparent;\n    font-family: var(--wui-font-family);\n    backface-visibility: hidden;\n  }\n"
    ]);
    _templateObject3 = function() {
        return data;
    };
    return data;
}
function _templateObject4() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  button,\n  a {\n    cursor: pointer;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n    transition:\n      color var(--wui-duration-lg) var(--wui-ease-out-power-1),\n      background-color var(--wui-duration-lg) var(--wui-ease-out-power-1),\n      border var(--wui-duration-lg) var(--wui-ease-out-power-1),\n      border-radius var(--wui-duration-lg) var(--wui-ease-out-power-1),\n      box-shadow var(--wui-duration-lg) var(--wui-ease-out-power-1);\n    will-change: background-color, color, border, box-shadow, border-radius;\n    outline: none;\n    border: none;\n    column-gap: var(--wui-spacing-3xs);\n    background-color: transparent;\n    text-decoration: none;\n  }\n\n  wui-flex {\n    transition: border-radius var(--wui-duration-lg) var(--wui-ease-out-power-1);\n    will-change: border-radius;\n  }\n\n  button:disabled > wui-wallet-image,\n  button:disabled > wui-all-wallets-image,\n  button:disabled > wui-network-image,\n  button:disabled > wui-image,\n  button:disabled > wui-transaction-visual,\n  button:disabled > wui-logo {\n    filter: grayscale(1);\n  }\n\n  @media (hover: hover) and (pointer: fine) {\n    button:hover:enabled {\n      background-color: var(--wui-color-gray-glass-005);\n    }\n\n    button:active:enabled {\n      background-color: var(--wui-color-gray-glass-010);\n    }\n  }\n\n  button:disabled > wui-icon-box {\n    opacity: 0.5;\n  }\n\n  input {\n    border: none;\n    outline: none;\n    appearance: none;\n  }\n"
    ]);
    _templateObject4 = function() {
        return data;
    };
    return data;
}
function _templateObject5() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  .wui-color-inherit {\n    color: var(--wui-color-inherit);\n  }\n\n  .wui-color-accent-100 {\n    color: var(--wui-color-accent-100);\n  }\n\n  .wui-color-error-100 {\n    color: var(--wui-color-error-100);\n  }\n\n  .wui-color-blue-100 {\n    color: var(--wui-color-blue-100);\n  }\n\n  .wui-color-blue-90 {\n    color: var(--wui-color-blue-90);\n  }\n\n  .wui-color-error-125 {\n    color: var(--wui-color-error-125);\n  }\n\n  .wui-color-success-100 {\n    color: var(--wui-color-success-100);\n  }\n\n  .wui-color-success-125 {\n    color: var(--wui-color-success-125);\n  }\n\n  .wui-color-inverse-100 {\n    color: var(--wui-color-inverse-100);\n  }\n\n  .wui-color-inverse-000 {\n    color: var(--wui-color-inverse-000);\n  }\n\n  .wui-color-fg-100 {\n    color: var(--wui-color-fg-100);\n  }\n\n  .wui-color-fg-200 {\n    color: var(--wui-color-fg-200);\n  }\n\n  .wui-color-fg-300 {\n    color: var(--wui-color-fg-300);\n  }\n\n  .wui-color-fg-325 {\n    color: var(--wui-color-fg-325);\n  }\n\n  .wui-color-fg-350 {\n    color: var(--wui-color-fg-350);\n  }\n\n  .wui-bg-color-inherit {\n    background-color: var(--wui-color-inherit);\n  }\n\n  .wui-bg-color-blue-100 {\n    background-color: var(--wui-color-accent-100);\n  }\n\n  .wui-bg-color-error-100 {\n    background-color: var(--wui-color-error-100);\n  }\n\n  .wui-bg-color-error-125 {\n    background-color: var(--wui-color-error-125);\n  }\n\n  .wui-bg-color-success-100 {\n    background-color: var(--wui-color-success-100);\n  }\n\n  .wui-bg-color-success-125 {\n    background-color: var(--wui-color-success-100);\n  }\n\n  .wui-bg-color-inverse-100 {\n    background-color: var(--wui-color-inverse-100);\n  }\n\n  .wui-bg-color-inverse-000 {\n    background-color: var(--wui-color-inverse-000);\n  }\n\n  .wui-bg-color-fg-100 {\n    background-color: var(--wui-color-fg-100);\n  }\n\n  .wui-bg-color-fg-200 {\n    background-color: var(--wui-color-fg-200);\n  }\n\n  .wui-bg-color-fg-300 {\n    background-color: var(--wui-color-fg-300);\n  }\n\n  .wui-color-fg-325 {\n    background-color: var(--wui-color-fg-325);\n  }\n\n  .wui-color-fg-350 {\n    background-color: var(--wui-color-fg-350);\n  }\n"
    ]);
    _templateObject5 = function() {
        return data;
    };
    return data;
}
;
;
let themeTag = undefined;
let darkModeTag = undefined;
let lightModeTag = undefined;
function initializeTheming(themeVariables, themeMode) {
    themeTag = document.createElement('style');
    darkModeTag = document.createElement('style');
    lightModeTag = document.createElement('style');
    themeTag.textContent = createRootStyles(themeVariables).core.cssText;
    darkModeTag.textContent = createRootStyles(themeVariables).dark.cssText;
    lightModeTag.textContent = createRootStyles(themeVariables).light.cssText;
    document.head.appendChild(themeTag);
    document.head.appendChild(darkModeTag);
    document.head.appendChild(lightModeTag);
    setColorTheme(themeMode);
}
function setColorTheme(themeMode) {
    if (darkModeTag && lightModeTag) {
        if (themeMode === 'light') {
            darkModeTag.removeAttribute('media');
            lightModeTag.media = 'enabled';
        } else {
            lightModeTag.removeAttribute('media');
            darkModeTag.media = 'enabled';
        }
    }
}
function setThemeVariables(themeVariables) {
    if (themeTag && darkModeTag && lightModeTag) {
        themeTag.textContent = createRootStyles(themeVariables).core.cssText;
        darkModeTag.textContent = createRootStyles(themeVariables).dark.cssText;
        lightModeTag.textContent = createRootStyles(themeVariables).light.cssText;
    }
}
function createRootStyles(themeVariables) {
    return {
        core: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$css$2d$tag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"])(_templateObject(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$css$2d$tag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unsafeCSS"])((themeVariables === null || themeVariables === void 0 ? void 0 : themeVariables['--w3m-color-mix-strength']) ? "".concat(themeVariables['--w3m-color-mix-strength'], "%") : '0%'), (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$css$2d$tag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unsafeCSS"])((themeVariables === null || themeVariables === void 0 ? void 0 : themeVariables['--w3m-font-family']) || 'Inter, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;'), (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$css$2d$tag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unsafeCSS"])((themeVariables === null || themeVariables === void 0 ? void 0 : themeVariables['--w3m-font-size-master']) || '10px'), (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$css$2d$tag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unsafeCSS"])((themeVariables === null || themeVariables === void 0 ? void 0 : themeVariables['--w3m-border-radius-master']) || '4px'), (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$css$2d$tag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unsafeCSS"])((themeVariables === null || themeVariables === void 0 ? void 0 : themeVariables['--w3m-z-index']) || 999)),
        light: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$css$2d$tag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"])(_templateObject1(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$css$2d$tag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unsafeCSS"])((themeVariables === null || themeVariables === void 0 ? void 0 : themeVariables['--w3m-color-mix']) || '#fff'), (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$css$2d$tag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unsafeCSS"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ThemeUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getW3mThemeVariables"])(themeVariables, 'dark')['--w3m-accent']), (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$css$2d$tag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unsafeCSS"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ThemeUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getW3mThemeVariables"])(themeVariables, 'dark')['--w3m-background'])),
        dark: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$css$2d$tag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"])(_templateObject2(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$css$2d$tag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unsafeCSS"])((themeVariables === null || themeVariables === void 0 ? void 0 : themeVariables['--w3m-color-mix']) || '#000'), (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$css$2d$tag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unsafeCSS"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ThemeUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getW3mThemeVariables"])(themeVariables, 'light')['--w3m-accent']), (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$css$2d$tag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unsafeCSS"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ThemeUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getW3mThemeVariables"])(themeVariables, 'light')['--w3m-background']))
    };
}
const resetStyles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$css$2d$tag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"])(_templateObject3());
const elementStyles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$css$2d$tag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"])(_templateObject4());
const colorStyles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$css$2d$tag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"])(_templateObject5()); //# sourceMappingURL=ThemeUtil.js.map
}),
"[project]/frontend/node_modules/@reown/appkit-ui/dist/esm/src/utils/UiHelperUtil.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UiHelperUtil",
    ()=>UiHelperUtil
]);
const UiHelperUtil = {
    getSpacingStyles (spacing, index) {
        if (Array.isArray(spacing)) {
            return spacing[index] ? "var(--wui-spacing-".concat(spacing[index], ")") : undefined;
        } else if (typeof spacing === 'string') {
            return "var(--wui-spacing-".concat(spacing, ")");
        }
        return undefined;
    },
    getFormattedDate (date) {
        return new Intl.DateTimeFormat('en-US', {
            month: 'short',
            day: 'numeric'
        }).format(date);
    },
    getHostName (url) {
        try {
            const newUrl = new URL(url);
            return newUrl.hostname;
        } catch (error) {
            return '';
        }
    },
    getTruncateString (param) {
        let { string, charsStart, charsEnd, truncate } = param;
        if (string.length <= charsStart + charsEnd) {
            return string;
        }
        if (truncate === 'end') {
            return "".concat(string.substring(0, charsStart), "...");
        } else if (truncate === 'start') {
            return "...".concat(string.substring(string.length - charsEnd));
        }
        return "".concat(string.substring(0, Math.floor(charsStart)), "...").concat(string.substring(string.length - Math.floor(charsEnd)));
    },
    generateAvatarColors (address) {
        const hash = address.toLowerCase().replace(/^0x/iu, '').replace(/[^a-f0-9]/gu, '');
        const baseColor = hash.substring(0, 6).padEnd(6, '0');
        const rgbColor = this.hexToRgb(baseColor);
        const masterBorderRadius = getComputedStyle(document.documentElement).getPropertyValue('--w3m-border-radius-master');
        const radius = Number(masterBorderRadius === null || masterBorderRadius === void 0 ? void 0 : masterBorderRadius.replace('px', ''));
        const edge = 100 - 3 * radius;
        const gradientCircle = "".concat(edge, "% ").concat(edge, "% at 65% 40%");
        const colors = [];
        for(let i = 0; i < 5; i += 1){
            const tintedColor = this.tintColor(rgbColor, 0.15 * i);
            colors.push("rgb(".concat(tintedColor[0], ", ").concat(tintedColor[1], ", ").concat(tintedColor[2], ")"));
        }
        return "\n    --local-color-1: ".concat(colors[0], ";\n    --local-color-2: ").concat(colors[1], ";\n    --local-color-3: ").concat(colors[2], ";\n    --local-color-4: ").concat(colors[3], ";\n    --local-color-5: ").concat(colors[4], ";\n    --local-radial-circle: ").concat(gradientCircle, "\n   ");
    },
    hexToRgb (hex) {
        const bigint = parseInt(hex, 16);
        const r = bigint >> 16 & 255;
        const g = bigint >> 8 & 255;
        const b = bigint & 255;
        return [
            r,
            g,
            b
        ];
    },
    tintColor (rgb, tint) {
        const [r, g, b] = rgb;
        const tintedR = Math.round(r + (255 - r) * tint);
        const tintedG = Math.round(g + (255 - g) * tint);
        const tintedB = Math.round(b + (255 - b) * tint);
        return [
            tintedR,
            tintedG,
            tintedB
        ];
    },
    isNumber (character) {
        const regex = {
            number: /^[0-9]+$/u
        };
        return regex.number.test(character);
    },
    getColorTheme (theme) {
        if (theme) {
            return theme;
        } else if (typeof window !== 'undefined' && window.matchMedia) {
            var _window_matchMedia;
            if ((_window_matchMedia = window.matchMedia('(prefers-color-scheme: dark)')) === null || _window_matchMedia === void 0 ? void 0 : _window_matchMedia.matches) {
                return 'dark';
            }
            return 'light';
        }
        return 'dark';
    },
    splitBalance (input) {
        const parts = input.split('.');
        if (parts.length === 2) {
            return [
                parts[0],
                parts[1]
            ];
        }
        return [
            '0',
            '00'
        ];
    },
    roundNumber (number, threshold, fixed) {
        const roundedNumber = number.toString().length >= threshold ? Number(number).toFixed(fixed) : number;
        return roundedNumber;
    },
    formatNumberToLocalString (value) {
        let decimals = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2;
        if (value === undefined) {
            return '0.00';
        }
        if (typeof value === 'number') {
            return value.toLocaleString('en-US', {
                maximumFractionDigits: decimals,
                minimumFractionDigits: decimals
            });
        }
        return parseFloat(value).toLocaleString('en-US', {
            maximumFractionDigits: decimals,
            minimumFractionDigits: decimals
        });
    }
}; //# sourceMappingURL=UiHelperUtil.js.map
}),
"[project]/frontend/node_modules/@reown/appkit-ui/dist/esm/src/utils/TransactionUtil.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TransactionUtil",
    ()=>TransactionUtil
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$DateUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@reown/appkit-common/dist/esm/src/utils/DateUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$UiHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@reown/appkit-ui/dist/esm/src/utils/UiHelperUtil.js [app-client] (ecmascript)");
;
;
const FLOAT_FIXED_VALUE = 3;
const plusTypes = [
    'receive',
    'deposit',
    'borrow',
    'claim'
];
const minusTypes = [
    'withdraw',
    'repay',
    'burn'
];
const TransactionUtil = {
    getTransactionGroupTitle (year, month) {
        const currentYear = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$DateUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DateUtil"].getYear();
        const monthName = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$DateUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DateUtil"].getMonthNameByIndex(month);
        const isCurrentYear = year === currentYear;
        const groupTitle = isCurrentYear ? monthName : "".concat(monthName, " ").concat(year);
        return groupTitle;
    },
    getTransactionImages (transfers) {
        const [transfer, secondTransfer] = transfers;
        const isAllNFT = Boolean(transfer) && (transfers === null || transfers === void 0 ? void 0 : transfers.every((item)=>Boolean(item.nft_info)));
        const haveMultipleTransfers = (transfers === null || transfers === void 0 ? void 0 : transfers.length) > 1;
        const haveTwoTransfers = (transfers === null || transfers === void 0 ? void 0 : transfers.length) === 2;
        if (haveTwoTransfers && !isAllNFT) {
            return [
                this.getTransactionImage(transfer),
                this.getTransactionImage(secondTransfer)
            ];
        }
        if (haveMultipleTransfers) {
            return transfers.map((item)=>this.getTransactionImage(item));
        }
        return [
            this.getTransactionImage(transfer)
        ];
    },
    getTransactionImage (transfer) {
        return {
            type: TransactionUtil.getTransactionTransferTokenType(transfer),
            url: TransactionUtil.getTransactionImageURL(transfer)
        };
    },
    getTransactionImageURL (transfer) {
        let imageURL = undefined;
        const isNFT = Boolean(transfer === null || transfer === void 0 ? void 0 : transfer.nft_info);
        const isFungible = Boolean(transfer === null || transfer === void 0 ? void 0 : transfer.fungible_info);
        if (transfer && isNFT) {
            var _transfer_nft_info_content_preview, _transfer_nft_info_content, _transfer_nft_info;
            imageURL = transfer === null || transfer === void 0 ? void 0 : (_transfer_nft_info = transfer.nft_info) === null || _transfer_nft_info === void 0 ? void 0 : (_transfer_nft_info_content = _transfer_nft_info.content) === null || _transfer_nft_info_content === void 0 ? void 0 : (_transfer_nft_info_content_preview = _transfer_nft_info_content.preview) === null || _transfer_nft_info_content_preview === void 0 ? void 0 : _transfer_nft_info_content_preview.url;
        } else if (transfer && isFungible) {
            var _transfer_fungible_info_icon, _transfer_fungible_info;
            imageURL = transfer === null || transfer === void 0 ? void 0 : (_transfer_fungible_info = transfer.fungible_info) === null || _transfer_fungible_info === void 0 ? void 0 : (_transfer_fungible_info_icon = _transfer_fungible_info.icon) === null || _transfer_fungible_info_icon === void 0 ? void 0 : _transfer_fungible_info_icon.url;
        }
        return imageURL;
    },
    getTransactionTransferTokenType (transfer) {
        if (transfer === null || transfer === void 0 ? void 0 : transfer.fungible_info) {
            return 'FUNGIBLE';
        } else if (transfer === null || transfer === void 0 ? void 0 : transfer.nft_info) {
            return 'NFT';
        }
        return undefined;
    },
    getTransactionDescriptions (transaction) {
        var _transaction_metadata, _transaction_transfers, _transaction_transfers1;
        const type = transaction === null || transaction === void 0 ? void 0 : (_transaction_metadata = transaction.metadata) === null || _transaction_metadata === void 0 ? void 0 : _transaction_metadata.operationType;
        const transfers = transaction === null || transaction === void 0 ? void 0 : transaction.transfers;
        const haveTransfer = (transaction === null || transaction === void 0 ? void 0 : (_transaction_transfers = transaction.transfers) === null || _transaction_transfers === void 0 ? void 0 : _transaction_transfers.length) > 0;
        const haveMultipleTransfers = (transaction === null || transaction === void 0 ? void 0 : (_transaction_transfers1 = transaction.transfers) === null || _transaction_transfers1 === void 0 ? void 0 : _transaction_transfers1.length) > 1;
        const isFungible = haveTransfer && (transfers === null || transfers === void 0 ? void 0 : transfers.every((transfer)=>Boolean(transfer === null || transfer === void 0 ? void 0 : transfer.fungible_info)));
        const [firstTransfer, secondTransfer] = transfers;
        let firstDescription = this.getTransferDescription(firstTransfer);
        let secondDescription = this.getTransferDescription(secondTransfer);
        if (!haveTransfer) {
            const isSendOrReceive = type === 'send' || type === 'receive';
            if (isSendOrReceive && isFungible) {
                firstDescription = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$UiHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UiHelperUtil"].getTruncateString({
                    string: transaction === null || transaction === void 0 ? void 0 : transaction.metadata.sentFrom,
                    charsStart: 4,
                    charsEnd: 6,
                    truncate: 'middle'
                });
                secondDescription = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$UiHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UiHelperUtil"].getTruncateString({
                    string: transaction === null || transaction === void 0 ? void 0 : transaction.metadata.sentTo,
                    charsStart: 4,
                    charsEnd: 6,
                    truncate: 'middle'
                });
                return [
                    firstDescription,
                    secondDescription
                ];
            }
            return [
                transaction.metadata.status
            ];
        }
        if (haveMultipleTransfers) {
            return transfers.map((item)=>this.getTransferDescription(item));
        }
        let prefix = '';
        if (plusTypes.includes(type)) {
            prefix = '+';
        } else if (minusTypes.includes(type)) {
            prefix = '-';
        }
        firstDescription = prefix.concat(firstDescription);
        return [
            firstDescription
        ];
    },
    getTransferDescription (transfer) {
        let description = '';
        if (!transfer) {
            return description;
        }
        if (transfer === null || transfer === void 0 ? void 0 : transfer.nft_info) {
            var _transfer_nft_info;
            description = (transfer === null || transfer === void 0 ? void 0 : (_transfer_nft_info = transfer.nft_info) === null || _transfer_nft_info === void 0 ? void 0 : _transfer_nft_info.name) || '-';
        } else if (transfer === null || transfer === void 0 ? void 0 : transfer.fungible_info) {
            description = this.getFungibleTransferDescription(transfer) || '-';
        }
        return description;
    },
    getFungibleTransferDescription (transfer) {
        var _transfer_fungible_info;
        if (!transfer) {
            return null;
        }
        const quantity = this.getQuantityFixedValue(transfer === null || transfer === void 0 ? void 0 : transfer.quantity.numeric);
        const description = [
            quantity,
            transfer === null || transfer === void 0 ? void 0 : (_transfer_fungible_info = transfer.fungible_info) === null || _transfer_fungible_info === void 0 ? void 0 : _transfer_fungible_info.symbol
        ].join(' ').trim();
        return description;
    },
    getQuantityFixedValue (value) {
        if (!value) {
            return null;
        }
        const parsedValue = parseFloat(value);
        return parsedValue.toFixed(FLOAT_FIXED_VALUE);
    }
}; //# sourceMappingURL=TransactionUtil.js.map
}),
"[project]/frontend/node_modules/@reown/appkit-ui/dist/esm/src/utils/WebComponentsUtil.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "customElement",
    ()=>customElement
]);
function standardCustomElement(tagName, descriptor) {
    const { kind, elements } = descriptor;
    return {
        kind,
        elements,
        finisher (clazz) {
            if (!customElements.get(tagName)) {
                customElements.define(tagName, clazz);
            }
        }
    };
}
function legacyCustomElement(tagName, clazz) {
    if (!customElements.get(tagName)) {
        customElements.define(tagName, clazz);
    }
    return clazz;
}
function customElement(tagName) {
    return function create(classOrDescriptor) {
        return typeof classOrDescriptor === 'function' ? legacyCustomElement(tagName, classOrDescriptor) : standardCustomElement(tagName, classOrDescriptor);
    };
} //# sourceMappingURL=WebComponentsUtil.js.map
}),
"[project]/frontend/node_modules/@reown/appkit-ui/dist/esm/exports/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$MathUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@reown/appkit-ui/dist/esm/src/utils/MathUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$ThemeUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@reown/appkit-ui/dist/esm/src/utils/ThemeUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$UiHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@reown/appkit-ui/dist/esm/src/utils/UiHelperUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$TransactionUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@reown/appkit-ui/dist/esm/src/utils/TransactionUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$WebComponentsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@reown/appkit-ui/dist/esm/src/utils/WebComponentsUtil.js [app-client] (ecmascript)"); //# sourceMappingURL=index.js.map
;
;
;
;
;
}),
"[project]/frontend/node_modules/@swc/helpers/esm/_tagged_template_literal.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_tagged_template_literal
]);
function _tagged_template_literal(strings, raw) {
    if (!raw) raw = strings.slice(0);
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
}
;
}),
"[project]/frontend/node_modules/@reown/appkit-ui/node_modules/@lit/reactive-element/development/css-tag.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ __turbopack_context__.s([
    "CSSResult",
    ()=>CSSResult,
    "adoptStyles",
    ()=>adoptStyles,
    "css",
    ()=>css,
    "getCompatibleStyle",
    ()=>getCompatibleStyle,
    "supportsAdoptingStyleSheets",
    ()=>supportsAdoptingStyleSheets,
    "unsafeCSS",
    ()=>unsafeCSS
]);
const NODE_MODE = false;
// Allows minifiers to rename references to globalThis
const global = globalThis;
const supportsAdoptingStyleSheets = global.ShadowRoot && (global.ShadyCSS === undefined || global.ShadyCSS.nativeShadow) && 'adoptedStyleSheets' in Document.prototype && 'replace' in CSSStyleSheet.prototype;
const constructionToken = Symbol();
const cssTagCache = new WeakMap();
class CSSResult {
    // This is a getter so that it's lazy. In practice, this means stylesheets
    // are not created until the first element instance is made.
    get styleSheet() {
        // If `supportsAdoptingStyleSheets` is true then we assume CSSStyleSheet is
        // constructable.
        let styleSheet = this._styleSheet;
        const strings = this._strings;
        if (supportsAdoptingStyleSheets && styleSheet === undefined) {
            const cacheable = strings !== undefined && strings.length === 1;
            if (cacheable) {
                styleSheet = cssTagCache.get(strings);
            }
            if (styleSheet === undefined) {
                (this._styleSheet = styleSheet = new CSSStyleSheet()).replaceSync(this.cssText);
                if (cacheable) {
                    cssTagCache.set(strings, styleSheet);
                }
            }
        }
        return styleSheet;
    }
    toString() {
        return this.cssText;
    }
    constructor(cssText, strings, safeToken){
        // This property needs to remain unminified.
        this['_$cssResult$'] = true;
        if (safeToken !== constructionToken) {
            throw new Error('CSSResult is not constructable. Use `unsafeCSS` or `css` instead.');
        }
        this.cssText = cssText;
        this._strings = strings;
    }
}
const textFromCSSResult = (value)=>{
    // This property needs to remain unminified.
    if (value['_$cssResult$'] === true) {
        return value.cssText;
    } else if (typeof value === 'number') {
        return value;
    } else {
        throw new Error("Value passed to 'css' function must be a 'css' function result: " + "".concat(value, ". Use 'unsafeCSS' to pass non-literal values, but take care ") + "to ensure page security.");
    }
};
const unsafeCSS = (value)=>new CSSResult(typeof value === 'string' ? value : String(value), undefined, constructionToken);
const css = function(strings) {
    for(var _len = arguments.length, values = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
        values[_key - 1] = arguments[_key];
    }
    const cssText = strings.length === 1 ? strings[0] : values.reduce((acc, v, idx)=>acc + textFromCSSResult(v) + strings[idx + 1], strings[0]);
    return new CSSResult(cssText, strings, constructionToken);
};
const adoptStyles = (renderRoot, styles)=>{
    if (supportsAdoptingStyleSheets) {
        renderRoot.adoptedStyleSheets = styles.map((s)=>s instanceof CSSStyleSheet ? s : s.styleSheet);
    } else {
        for (const s of styles){
            const style = document.createElement('style');
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const nonce = global['litNonce'];
            if (nonce !== undefined) {
                style.setAttribute('nonce', nonce);
            }
            style.textContent = s.cssText;
            renderRoot.appendChild(style);
        }
    }
};
const cssResultFromStyleSheet = (sheet)=>{
    let cssText = '';
    for (const rule of sheet.cssRules){
        cssText += rule.cssText;
    }
    return unsafeCSS(cssText);
};
const getCompatibleStyle = supportsAdoptingStyleSheets || NODE_MODE && global.CSSStyleSheet === undefined ? (s)=>s : (s)=>s instanceof CSSStyleSheet ? cssResultFromStyleSheet(s) : s; //# sourceMappingURL=css-tag.js.map
}),
"[project]/frontend/node_modules/@reown/appkit-ui/node_modules/@lit/reactive-element/development/reactive-element.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ /**
 * Use this module if you want to create your own base class extending
 * {@link ReactiveElement}.
 * @packageDocumentation
 */ __turbopack_context__.s([
    "ReactiveElement",
    ()=>ReactiveElement,
    "defaultConverter",
    ()=>defaultConverter,
    "notEqual",
    ()=>notEqual
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$css$2d$tag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@reown/appkit-ui/node_modules/@lit/reactive-element/development/css-tag.js [app-client] (ecmascript)");
var // Ensure metadata is enabled. TypeScript does not polyfill
// Symbol.metadata, so we must ensure that it exists.
_Symbol, // Map from a class's metadata object to property options
// Note that we must use nullish-coalescing assignment so that we only use one
// map even if we load multiple version of this module.
_global, _global1;
;
;
// TODO (justinfagnani): Add `hasOwn` here when we ship ES2022
const { is, defineProperty, getOwnPropertyDescriptor, getOwnPropertyNames, getOwnPropertySymbols, getPrototypeOf } = Object;
const NODE_MODE = false;
// Lets a minifier replace globalThis references with a minified name
const global = globalThis;
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
{
    var _global2;
    var _customElements;
}
const DEV_MODE = true;
let issueWarning;
const trustedTypes = global.trustedTypes;
// Temporary workaround for https://crbug.com/993268
// Currently, any attribute starting with "on" is considered to be a
// TrustedScript source. Such boolean attributes must be set to the equivalent
// trusted emptyScript value.
const emptyStringForBooleanAttribute = trustedTypes ? trustedTypes.emptyScript : '';
const polyfillSupport = ("TURBOPACK compile-time truthy", 1) ? global.reactiveElementPolyfillSupportDevMode : "TURBOPACK unreachable";
if ("TURBOPACK compile-time truthy", 1) {
    var // Ensure warnings are issued only 1x, even if multiple versions of Lit
    // are loaded.
    _global3;
    var _litIssuedWarnings;
    (_litIssuedWarnings = (_global3 = global).litIssuedWarnings) !== null && _litIssuedWarnings !== void 0 ? _litIssuedWarnings : _global3.litIssuedWarnings = new Set();
    /**
     * Issue a warning if we haven't already, based either on `code` or `warning`.
     * Warnings are disabled automatically only by `warning`; disabling via `code`
     * can be done by users.
     */ issueWarning = (code, warning)=>{
        warning += " See https://lit.dev/msg/".concat(code, " for more information.");
        if (!global.litIssuedWarnings.has(warning) && !global.litIssuedWarnings.has(code)) {
            console.warn(warning);
            global.litIssuedWarnings.add(warning);
        }
    };
    queueMicrotask(()=>{
        var _global_ShadyDOM;
        issueWarning('dev-mode', "Lit is in dev mode. Not recommended for production!");
        // Issue polyfill support warning.
        if (((_global_ShadyDOM = global.ShadyDOM) === null || _global_ShadyDOM === void 0 ? void 0 : _global_ShadyDOM.inUse) && polyfillSupport === undefined) {
            issueWarning('polyfill-support-missing', "Shadow DOM is being polyfilled via `ShadyDOM` but " + "the `polyfill-support` module has not been loaded.");
        }
    });
}
/**
 * Useful for visualizing and logging insights into what the Lit template system is doing.
 *
 * Compiled out of prod mode builds.
 */ const debugLogEvent = ("TURBOPACK compile-time truthy", 1) ? (event)=>{
    const shouldEmit = global.emitLitDebugLogEvents;
    if (!shouldEmit) {
        return;
    }
    global.dispatchEvent(new CustomEvent('lit-debug', {
        detail: event
    }));
} : "TURBOPACK unreachable";
/*
 * When using Closure Compiler, JSCompiler_renameProperty(property, object) is
 * replaced at compile time by the munged name for object[property]. We cannot
 * alias this function, so we have to use a small shim that has the same
 * behavior when not compiling.
 */ /*@__INLINE__*/ const JSCompiler_renameProperty = (prop, _obj)=>prop;
const defaultConverter = {
    toAttribute (value, type) {
        switch(type){
            case Boolean:
                value = value ? emptyStringForBooleanAttribute : null;
                break;
            case Object:
            case Array:
                // if the value is `null` or `undefined` pass this through
                // to allow removing/no change behavior.
                value = value == null ? value : JSON.stringify(value);
                break;
        }
        return value;
    },
    fromAttribute (value, type) {
        let fromValue = value;
        switch(type){
            case Boolean:
                fromValue = value !== null;
                break;
            case Number:
                fromValue = value === null ? null : Number(value);
                break;
            case Object:
            case Array:
                // Do *not* generate exception when invalid JSON is set as elements
                // don't normally complain on being mis-configured.
                // TODO(sorvell): Do generate exception in *dev mode*.
                try {
                    // Assert to adhere to Bazel's "must type assert JSON parse" rule.
                    fromValue = JSON.parse(value);
                } catch (e) {
                    fromValue = null;
                }
                break;
        }
        return fromValue;
    }
};
const notEqual = (value, old)=>!is(value, old);
const defaultPropertyDeclaration = {
    attribute: true,
    type: String,
    converter: defaultConverter,
    reflect: false,
    useDefault: false,
    hasChanged: notEqual
};
var _metadata;
(_metadata = (_Symbol = Symbol).metadata) !== null && _metadata !== void 0 ? _metadata : _Symbol.metadata = Symbol('metadata');
var _litPropertyMetadata;
(_litPropertyMetadata = (_global = global).litPropertyMetadata) !== null && _litPropertyMetadata !== void 0 ? _litPropertyMetadata : _global.litPropertyMetadata = new WeakMap();
class ReactiveElement extends HTMLElement {
    /**
     * Adds an initializer function to the class that is called during instance
     * construction.
     *
     * This is useful for code that runs against a `ReactiveElement`
     * subclass, such as a decorator, that needs to do work for each
     * instance, such as setting up a `ReactiveController`.
     *
     * ```ts
     * const myDecorator = (target: typeof ReactiveElement, key: string) => {
     *   target.addInitializer((instance: ReactiveElement) => {
     *     // This is run during construction of the element
     *     new MyController(instance);
     *   });
     * }
     * ```
     *
     * Decorating a field will then cause each instance to run an initializer
     * that adds a controller:
     *
     * ```ts
     * class MyElement extends LitElement {
     *   @myDecorator foo;
     * }
     * ```
     *
     * Initializers are stored per-constructor. Adding an initializer to a
     * subclass does not add it to a superclass. Since initializers are run in
     * constructors, initializers will run in order of the class hierarchy,
     * starting with superclasses and progressing to the instance's class.
     *
     * @nocollapse
     */ static addInitializer(initializer) {
        this.__prepare();
        var _this__initializers;
        ((_this__initializers = this._initializers) !== null && _this__initializers !== void 0 ? _this__initializers : this._initializers = []).push(initializer);
    }
    /**
     * Returns a list of attributes corresponding to the registered properties.
     * @nocollapse
     * @category attributes
     */ static get observedAttributes() {
        // Ensure we've created all properties
        this.finalize();
        // this.__attributeToPropertyMap is only undefined after finalize() in
        // ReactiveElement itself. ReactiveElement.observedAttributes is only
        // accessed with ReactiveElement as the receiver when a subclass or mixin
        // calls super.observedAttributes
        return this.__attributeToPropertyMap && [
            ...this.__attributeToPropertyMap.keys()
        ];
    }
    /**
     * Creates a property accessor on the element prototype if one does not exist
     * and stores a {@linkcode PropertyDeclaration} for the property with the
     * given options. The property setter calls the property's `hasChanged`
     * property option or uses a strict identity check to determine whether or not
     * to request an update.
     *
     * This method may be overridden to customize properties; however,
     * when doing so, it's important to call `super.createProperty` to ensure
     * the property is setup correctly. This method calls
     * `getPropertyDescriptor` internally to get a descriptor to install.
     * To customize what properties do when they are get or set, override
     * `getPropertyDescriptor`. To customize the options for a property,
     * implement `createProperty` like this:
     *
     * ```ts
     * static createProperty(name, options) {
     *   options = Object.assign(options, {myOption: true});
     *   super.createProperty(name, options);
     * }
     * ```
     *
     * @nocollapse
     * @category properties
     */ static createProperty(name) {
        let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : defaultPropertyDeclaration;
        // If this is a state property, force the attribute to false.
        if (options.state) {
            options.attribute = false;
        }
        this.__prepare();
        // Whether this property is wrapping accessors.
        // Helps control the initial value change and reflection logic.
        if (this.prototype.hasOwnProperty(name)) {
            options = Object.create(options);
            options.wrapped = true;
        }
        this.elementProperties.set(name, options);
        if (!options.noAccessor) {
            const key = ("TURBOPACK compile-time truthy", 1) ? // when doing HMR.
            Symbol.for("".concat(String(name), " (@property() cache)")) : "TURBOPACK unreachable";
            const descriptor = this.getPropertyDescriptor(name, key, options);
            if (descriptor !== undefined) {
                defineProperty(this.prototype, name, descriptor);
            }
        }
    }
    /**
     * Returns a property descriptor to be defined on the given named property.
     * If no descriptor is returned, the property will not become an accessor.
     * For example,
     *
     * ```ts
     * class MyElement extends LitElement {
     *   static getPropertyDescriptor(name, key, options) {
     *     const defaultDescriptor =
     *         super.getPropertyDescriptor(name, key, options);
     *     const setter = defaultDescriptor.set;
     *     return {
     *       get: defaultDescriptor.get,
     *       set(value) {
     *         setter.call(this, value);
     *         // custom action.
     *       },
     *       configurable: true,
     *       enumerable: true
     *     }
     *   }
     * }
     * ```
     *
     * @nocollapse
     * @category properties
     */ static getPropertyDescriptor(name, key, options) {
        var _getOwnPropertyDescriptor;
        const { get, set } = (_getOwnPropertyDescriptor = getOwnPropertyDescriptor(this.prototype, name)) !== null && _getOwnPropertyDescriptor !== void 0 ? _getOwnPropertyDescriptor : {
            get () {
                return this[key];
            },
            set (v) {
                this[key] = v;
            }
        };
        if (DEV_MODE && get == null) {
            var _getOwnPropertyDescriptor1;
            if ('value' in ((_getOwnPropertyDescriptor1 = getOwnPropertyDescriptor(this.prototype, name)) !== null && _getOwnPropertyDescriptor1 !== void 0 ? _getOwnPropertyDescriptor1 : {})) {
                throw new Error("Field ".concat(JSON.stringify(String(name)), " on ") + "".concat(this.name, " was declared as a reactive property ") + "but it's actually declared as a value on the prototype. " + "Usually this is due to using @property or @state on a method.");
            }
            issueWarning('reactive-property-without-getter', "Field ".concat(JSON.stringify(String(name)), " on ") + "".concat(this.name, " was declared as a reactive property ") + "but it does not have a getter. This will be an error in a " + "future version of Lit.");
        }
        return {
            get,
            set (value) {
                const oldValue = get === null || get === void 0 ? void 0 : get.call(this);
                set === null || set === void 0 ? void 0 : set.call(this, value);
                this.requestUpdate(name, oldValue, options);
            },
            configurable: true,
            enumerable: true
        };
    }
    /**
     * Returns the property options associated with the given property.
     * These options are defined with a `PropertyDeclaration` via the `properties`
     * object or the `@property` decorator and are registered in
     * `createProperty(...)`.
     *
     * Note, this method should be considered "final" and not overridden. To
     * customize the options for a given property, override
     * {@linkcode createProperty}.
     *
     * @nocollapse
     * @final
     * @category properties
     */ static getPropertyOptions(name) {
        var _this_elementProperties_get;
        return (_this_elementProperties_get = this.elementProperties.get(name)) !== null && _this_elementProperties_get !== void 0 ? _this_elementProperties_get : defaultPropertyDeclaration;
    }
    /**
     * Initializes static own properties of the class used in bookkeeping
     * for element properties, initializers, etc.
     *
     * Can be called multiple times by code that needs to ensure these
     * properties exist before using them.
     *
     * This method ensures the superclass is finalized so that inherited
     * property metadata can be copied down.
     * @nocollapse
     */ static __prepare() {
        if (this.hasOwnProperty(JSCompiler_renameProperty('elementProperties', this))) {
            // Already prepared
            return;
        }
        // Finalize any superclasses
        const superCtor = getPrototypeOf(this);
        superCtor.finalize();
        // Create own set of initializers for this class if any exist on the
        // superclass and copy them down. Note, for a small perf boost, avoid
        // creating initializers unless needed.
        if (superCtor._initializers !== undefined) {
            this._initializers = [
                ...superCtor._initializers
            ];
        }
        // Initialize elementProperties from the superclass
        this.elementProperties = new Map(superCtor.elementProperties);
    }
    /**
     * Finishes setting up the class so that it's ready to be registered
     * as a custom element and instantiated.
     *
     * This method is called by the ReactiveElement.observedAttributes getter.
     * If you override the observedAttributes getter, you must either call
     * super.observedAttributes to trigger finalization, or call finalize()
     * yourself.
     *
     * @nocollapse
     */ static finalize() {
        if (this.hasOwnProperty(JSCompiler_renameProperty('finalized', this))) {
            return;
        }
        this.finalized = true;
        this.__prepare();
        // Create properties from the static properties block:
        if (this.hasOwnProperty(JSCompiler_renameProperty('properties', this))) {
            const props = this.properties;
            const propKeys = [
                ...getOwnPropertyNames(props),
                ...getOwnPropertySymbols(props)
            ];
            for (const p of propKeys){
                this.createProperty(p, props[p]);
            }
        }
        // Create properties from standard decorator metadata:
        const metadata = this[Symbol.metadata];
        if (metadata !== null) {
            const properties = litPropertyMetadata.get(metadata);
            if (properties !== undefined) {
                for (const [p, options] of properties){
                    this.elementProperties.set(p, options);
                }
            }
        }
        // Create the attribute-to-property map
        this.__attributeToPropertyMap = new Map();
        for (const [p, options] of this.elementProperties){
            const attr = this.__attributeNameForProperty(p, options);
            if (attr !== undefined) {
                this.__attributeToPropertyMap.set(attr, p);
            }
        }
        this.elementStyles = this.finalizeStyles(this.styles);
        if ("TURBOPACK compile-time truthy", 1) {
            if (this.hasOwnProperty('createProperty')) {
                issueWarning('no-override-create-property', 'Overriding ReactiveElement.createProperty() is deprecated. ' + 'The override will not be called with standard decorators');
            }
            if (this.hasOwnProperty('getPropertyDescriptor')) {
                issueWarning('no-override-get-property-descriptor', 'Overriding ReactiveElement.getPropertyDescriptor() is deprecated. ' + 'The override will not be called with standard decorators');
            }
        }
    }
    /**
     * Takes the styles the user supplied via the `static styles` property and
     * returns the array of styles to apply to the element.
     * Override this method to integrate into a style management system.
     *
     * Styles are deduplicated preserving the _last_ instance in the list. This
     * is a performance optimization to avoid duplicated styles that can occur
     * especially when composing via subclassing. The last item is kept to try
     * to preserve the cascade order with the assumption that it's most important
     * that last added styles override previous styles.
     *
     * @nocollapse
     * @category styles
     */ static finalizeStyles(styles) {
        const elementStyles = [];
        if (Array.isArray(styles)) {
            // Dedupe the flattened array in reverse order to preserve the last items.
            // Casting to Array<unknown> works around TS error that
            // appears to come from trying to flatten a type CSSResultArray.
            const set = new Set(styles.flat(Infinity).reverse());
            // Then preserve original order by adding the set items in reverse order.
            for (const s of set){
                elementStyles.unshift((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$css$2d$tag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCompatibleStyle"])(s));
            }
        } else if (styles !== undefined) {
            elementStyles.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$css$2d$tag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCompatibleStyle"])(styles));
        }
        return elementStyles;
    }
    /**
     * Returns the property name for the given attribute `name`.
     * @nocollapse
     */ static __attributeNameForProperty(name, options) {
        const attribute = options.attribute;
        return attribute === false ? undefined : typeof attribute === 'string' ? attribute : typeof name === 'string' ? name.toLowerCase() : undefined;
    }
    /**
     * Internal only override point for customizing work done when elements
     * are constructed.
     */ __initialize() {
        var _this_constructor__initializers;
        this.__updatePromise = new Promise((res)=>this.enableUpdating = res);
        this._$changedProperties = new Map();
        // This enqueues a microtask that must run before the first update, so it
        // must be called before requestUpdate()
        this.__saveInstanceProperties();
        // ensures first update will be caught by an early access of
        // `updateComplete`
        this.requestUpdate();
        (_this_constructor__initializers = this.constructor._initializers) === null || _this_constructor__initializers === void 0 ? void 0 : _this_constructor__initializers.forEach((i)=>i(this));
    }
    /**
     * Registers a `ReactiveController` to participate in the element's reactive
     * update cycle. The element automatically calls into any registered
     * controllers during its lifecycle callbacks.
     *
     * If the element is connected when `addController()` is called, the
     * controller's `hostConnected()` callback will be immediately called.
     * @category controllers
     */ addController(controller) {
        var _this___controllers;
        ((_this___controllers = this.__controllers) !== null && _this___controllers !== void 0 ? _this___controllers : this.__controllers = new Set()).add(controller);
        // If a controller is added after the element has been connected,
        // call hostConnected. Note, re-using existence of `renderRoot` here
        // (which is set in connectedCallback) to avoid the need to track a
        // first connected state.
        if (this.renderRoot !== undefined && this.isConnected) {
            var _controller_hostConnected;
            (_controller_hostConnected = controller.hostConnected) === null || _controller_hostConnected === void 0 ? void 0 : _controller_hostConnected.call(controller);
        }
    }
    /**
     * Removes a `ReactiveController` from the element.
     * @category controllers
     */ removeController(controller) {
        var _this___controllers;
        (_this___controllers = this.__controllers) === null || _this___controllers === void 0 ? void 0 : _this___controllers.delete(controller);
    }
    /**
     * Fixes any properties set on the instance before upgrade time.
     * Otherwise these would shadow the accessor and break these properties.
     * The properties are stored in a Map which is played back after the
     * constructor runs.
     */ __saveInstanceProperties() {
        const instanceProperties = new Map();
        const elementProperties = this.constructor.elementProperties;
        for (const p of elementProperties.keys()){
            if (this.hasOwnProperty(p)) {
                instanceProperties.set(p, this[p]);
                delete this[p];
            }
        }
        if (instanceProperties.size > 0) {
            this.__instanceProperties = instanceProperties;
        }
    }
    /**
     * Returns the node into which the element should render and by default
     * creates and returns an open shadowRoot. Implement to customize where the
     * element's DOM is rendered. For example, to render into the element's
     * childNodes, return `this`.
     *
     * @return Returns a node into which to render.
     * @category rendering
     */ createRenderRoot() {
        var _this_shadowRoot;
        const renderRoot = (_this_shadowRoot = this.shadowRoot) !== null && _this_shadowRoot !== void 0 ? _this_shadowRoot : this.attachShadow(this.constructor.shadowRootOptions);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$css$2d$tag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["adoptStyles"])(renderRoot, this.constructor.elementStyles);
        return renderRoot;
    }
    /**
     * On first connection, creates the element's renderRoot, sets up
     * element styling, and enables updating.
     * @category lifecycle
     */ connectedCallback() {
        var _this___controllers;
        var _this_renderRoot;
        // Create renderRoot before controllers `hostConnected`
        (_this_renderRoot = this.renderRoot) !== null && _this_renderRoot !== void 0 ? _this_renderRoot : this.renderRoot = this.createRenderRoot();
        this.enableUpdating(true);
        (_this___controllers = this.__controllers) === null || _this___controllers === void 0 ? void 0 : _this___controllers.forEach((c)=>{
            var _c_hostConnected;
            return (_c_hostConnected = c.hostConnected) === null || _c_hostConnected === void 0 ? void 0 : _c_hostConnected.call(c);
        });
    }
    /**
     * Note, this method should be considered final and not overridden. It is
     * overridden on the element instance with a function that triggers the first
     * update.
     * @category updates
     */ enableUpdating(_requestedUpdate) {}
    /**
     * Allows for `super.disconnectedCallback()` in extensions while
     * reserving the possibility of making non-breaking feature additions
     * when disconnecting at some point in the future.
     * @category lifecycle
     */ disconnectedCallback() {
        var _this___controllers;
        (_this___controllers = this.__controllers) === null || _this___controllers === void 0 ? void 0 : _this___controllers.forEach((c)=>{
            var _c_hostDisconnected;
            return (_c_hostDisconnected = c.hostDisconnected) === null || _c_hostDisconnected === void 0 ? void 0 : _c_hostDisconnected.call(c);
        });
    }
    /**
     * Synchronizes property values when attributes change.
     *
     * Specifically, when an attribute is set, the corresponding property is set.
     * You should rarely need to implement this callback. If this method is
     * overridden, `super.attributeChangedCallback(name, _old, value)` must be
     * called.
     *
     * See [responding to attribute changes](https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_custom_elements#responding_to_attribute_changes)
     * on MDN for more information about the `attributeChangedCallback`.
     * @category attributes
     */ attributeChangedCallback(name, _old, value) {
        this._$attributeToProperty(name, value);
    }
    __propertyToAttribute(name, value) {
        const elemProperties = this.constructor.elementProperties;
        const options = elemProperties.get(name);
        const attr = this.constructor.__attributeNameForProperty(name, options);
        if (attr !== undefined && options.reflect === true) {
            var _options_converter;
            const converter = ((_options_converter = options.converter) === null || _options_converter === void 0 ? void 0 : _options_converter.toAttribute) !== undefined ? options.converter : defaultConverter;
            const attrValue = converter.toAttribute(value, options.type);
            if (DEV_MODE && this.constructor.enabledWarnings.includes('migration') && attrValue === undefined) {
                issueWarning('undefined-attribute-value', "The attribute value for the ".concat(name, " property is ") + "undefined on element ".concat(this.localName, ". The attribute will be ") + "removed, but in the previous version of `ReactiveElement`, " + "the attribute would not have changed.");
            }
            // Track if the property is being reflected to avoid
            // setting the property again via `attributeChangedCallback`. Note:
            // 1. this takes advantage of the fact that the callback is synchronous.
            // 2. will behave incorrectly if multiple attributes are in the reaction
            // stack at time of calling. However, since we process attributes
            // in `update` this should not be possible (or an extreme corner case
            // that we'd like to discover).
            // mark state reflecting
            this.__reflectingProperty = name;
            if (attrValue == null) {
                this.removeAttribute(attr);
            } else {
                this.setAttribute(attr, attrValue);
            }
            // mark state not reflecting
            this.__reflectingProperty = null;
        }
    }
    /** @internal */ _$attributeToProperty(name, value) {
        const ctor = this.constructor;
        // Note, hint this as an `AttributeMap` so closure clearly understands
        // the type; it has issues with tracking types through statics
        const propName = ctor.__attributeToPropertyMap.get(name);
        // Use tracking info to avoid reflecting a property value to an attribute
        // if it was just set because the attribute changed.
        if (propName !== undefined && this.__reflectingProperty !== propName) {
            var _options_converter, _this___defaultValues;
            const options = ctor.getPropertyOptions(propName);
            const converter = typeof options.converter === 'function' ? {
                fromAttribute: options.converter
            } : ((_options_converter = options.converter) === null || _options_converter === void 0 ? void 0 : _options_converter.fromAttribute) !== undefined ? options.converter : defaultConverter;
            // mark state reflecting
            this.__reflectingProperty = propName;
            const convertedValue = converter.fromAttribute(value, options.type);
            var _ref;
            this[propName] = (_ref = convertedValue !== null && convertedValue !== void 0 ? convertedValue : (_this___defaultValues = this.__defaultValues) === null || _this___defaultValues === void 0 ? void 0 : _this___defaultValues.get(propName)) !== null && _ref !== void 0 ? _ref : // eslint-disable-next-line @typescript-eslint/no-explicit-any
            convertedValue;
            // mark state not reflecting
            this.__reflectingProperty = null;
        }
    }
    /**
     * Requests an update which is processed asynchronously. This should be called
     * when an element should update based on some state not triggered by setting
     * a reactive property. In this case, pass no arguments. It should also be
     * called when manually implementing a property setter. In this case, pass the
     * property `name` and `oldValue` to ensure that any configured property
     * options are honored.
     *
     * @param name name of requesting property
     * @param oldValue old value of requesting property
     * @param options property options to use instead of the previously
     *     configured options
     * @category updates
     */ requestUpdate(name, oldValue, options) {
        // If we have a property key, perform property update steps.
        if (name !== undefined) {
            var _this___defaultValues;
            if (DEV_MODE && name instanceof Event) {
                issueWarning("", "The requestUpdate() method was called with an Event as the property name. This is probably a mistake caused by binding this.requestUpdate as an event listener. Instead bind a function that will call it with no arguments: () => this.requestUpdate()");
            }
            const ctor = this.constructor;
            const newValue = this[name];
            options !== null && options !== void 0 ? options : options = ctor.getPropertyOptions(name);
            var _options_hasChanged;
            const changed = ((_options_hasChanged = options.hasChanged) !== null && _options_hasChanged !== void 0 ? _options_hasChanged : notEqual)(newValue, oldValue) || options.useDefault && options.reflect && newValue === ((_this___defaultValues = this.__defaultValues) === null || _this___defaultValues === void 0 ? void 0 : _this___defaultValues.get(name)) && !this.hasAttribute(ctor.__attributeNameForProperty(name, options));
            if (changed) {
                this._$changeProperty(name, oldValue, options);
            } else {
                // Abort the request if the property should not be considered changed.
                return;
            }
        }
        if (this.isUpdatePending === false) {
            this.__updatePromise = this.__enqueueUpdate();
        }
    }
    /**
     * @internal
     */ _$changeProperty(name, oldValue, param, initializeValue) {
        let { useDefault, reflect, wrapped } = param;
        var _this___defaultValues;
        // Record default value when useDefault is used. This allows us to
        // restore this value when the attribute is removed.
        if (useDefault && !((_this___defaultValues = this.__defaultValues) !== null && _this___defaultValues !== void 0 ? _this___defaultValues : this.__defaultValues = new Map()).has(name)) {
            var _ref;
            this.__defaultValues.set(name, (_ref = initializeValue !== null && initializeValue !== void 0 ? initializeValue : oldValue) !== null && _ref !== void 0 ? _ref : this[name]);
            // if this is not wrapping an accessor, it must be an initial setting
            // and in this case we do not want to record the change or reflect.
            if (wrapped !== true || initializeValue !== undefined) {
                return;
            }
        }
        // TODO (justinfagnani): Create a benchmark of Map.has() + Map.set(
        // vs just Map.set()
        if (!this._$changedProperties.has(name)) {
            // On the initial change, the old value should be `undefined`, except
            // with `useDefault`
            if (!this.hasUpdated && !useDefault) {
                oldValue = undefined;
            }
            this._$changedProperties.set(name, oldValue);
        }
        // Add to reflecting properties set.
        // Note, it's important that every change has a chance to add the
        // property to `__reflectingProperties`. This ensures setting
        // attribute + property reflects correctly.
        if (reflect === true && this.__reflectingProperty !== name) {
            var _this___reflectingProperties;
            ((_this___reflectingProperties = this.__reflectingProperties) !== null && _this___reflectingProperties !== void 0 ? _this___reflectingProperties : this.__reflectingProperties = new Set()).add(name);
        }
    }
    /**
     * Sets up the element to asynchronously update.
     */ async __enqueueUpdate() {
        this.isUpdatePending = true;
        try {
            // Ensure any previous update has resolved before updating.
            // This `await` also ensures that property changes are batched.
            await this.__updatePromise;
        } catch (e) {
            // Refire any previous errors async so they do not disrupt the update
            // cycle. Errors are refired so developers have a chance to observe
            // them, and this can be done by implementing
            // `window.onunhandledrejection`.
            Promise.reject(e);
        }
        const result = this.scheduleUpdate();
        // If `scheduleUpdate` returns a Promise, we await it. This is done to
        // enable coordinating updates with a scheduler. Note, the result is
        // checked to avoid delaying an additional microtask unless we need to.
        if (result != null) {
            await result;
        }
        return !this.isUpdatePending;
    }
    /**
     * Schedules an element update. You can override this method to change the
     * timing of updates by returning a Promise. The update will await the
     * returned Promise, and you should resolve the Promise to allow the update
     * to proceed. If this method is overridden, `super.scheduleUpdate()`
     * must be called.
     *
     * For instance, to schedule updates to occur just before the next frame:
     *
     * ```ts
     * override protected async scheduleUpdate(): Promise<unknown> {
     *   await new Promise((resolve) => requestAnimationFrame(() => resolve()));
     *   super.scheduleUpdate();
     * }
     * ```
     * @category updates
     */ scheduleUpdate() {
        const result = this.performUpdate();
        if (DEV_MODE && this.constructor.enabledWarnings.includes('async-perform-update') && typeof (result === null || result === void 0 ? void 0 : result.then) === 'function') {
            issueWarning('async-perform-update', "Element ".concat(this.localName, " returned a Promise from performUpdate(). ") + "This behavior is deprecated and will be removed in a future " + "version of ReactiveElement.");
        }
        return result;
    }
    /**
     * Performs an element update. Note, if an exception is thrown during the
     * update, `firstUpdated` and `updated` will not be called.
     *
     * Call `performUpdate()` to immediately process a pending update. This should
     * generally not be needed, but it can be done in rare cases when you need to
     * update synchronously.
     *
     * @category updates
     */ performUpdate() {
        // Abort any update if one is not pending when this is called.
        // This can happen if `performUpdate` is called early to "flush"
        // the update.
        if (!this.isUpdatePending) {
            return;
        }
        debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
            kind: 'update'
        });
        if (!this.hasUpdated) {
            var _this_renderRoot;
            // Create renderRoot before first update. This occurs in `connectedCallback`
            // but is done here to support out of tree calls to `enableUpdating`/`performUpdate`.
            (_this_renderRoot = this.renderRoot) !== null && _this_renderRoot !== void 0 ? _this_renderRoot : this.renderRoot = this.createRenderRoot();
            if ("TURBOPACK compile-time truthy", 1) {
                // Produce warning if any reactive properties on the prototype are
                // shadowed by class fields. Instance fields set before upgrade are
                // deleted by this point, so any own property is caused by class field
                // initialization in the constructor.
                const ctor = this.constructor;
                const shadowedProperties = [
                    ...ctor.elementProperties.keys()
                ].filter((p)=>this.hasOwnProperty(p) && p in getPrototypeOf(this));
                if (shadowedProperties.length) {
                    throw new Error("The following properties on element ".concat(this.localName, " will not ") + "trigger updates as expected because they are set using class " + "fields: ".concat(shadowedProperties.join(', '), ". ") + "Native class fields and some compiled output will overwrite " + "accessors used for detecting changes. See " + "https://lit.dev/msg/class-field-shadowing " + "for more information.");
                }
            }
            // Mixin instance properties once, if they exist.
            if (this.__instanceProperties) {
                // TODO (justinfagnani): should we use the stored value? Could a new value
                // have been set since we stored the own property value?
                for (const [p, value] of this.__instanceProperties){
                    this[p] = value;
                }
                this.__instanceProperties = undefined;
            }
            // Trigger initial value reflection and populate the initial
            // `changedProperties` map, but only for the case of properties created
            // via `createProperty` on accessors, which will not have already
            // populated the `changedProperties` map since they are not set.
            // We can't know if these accessors had initializers, so we just set
            // them anyway - a difference from experimental decorators on fields and
            // standard decorators on auto-accessors.
            // For context see:
            // https://github.com/lit/lit/pull/4183#issuecomment-1711959635
            const elementProperties = this.constructor.elementProperties;
            if (elementProperties.size > 0) {
                for (const [p, options] of elementProperties){
                    const { wrapped } = options;
                    const value = this[p];
                    if (wrapped === true && !this._$changedProperties.has(p) && value !== undefined) {
                        this._$changeProperty(p, undefined, options, value);
                    }
                }
            }
        }
        let shouldUpdate = false;
        const changedProperties = this._$changedProperties;
        try {
            shouldUpdate = this.shouldUpdate(changedProperties);
            if (shouldUpdate) {
                var _this___controllers;
                this.willUpdate(changedProperties);
                (_this___controllers = this.__controllers) === null || _this___controllers === void 0 ? void 0 : _this___controllers.forEach((c)=>{
                    var _c_hostUpdate;
                    return (_c_hostUpdate = c.hostUpdate) === null || _c_hostUpdate === void 0 ? void 0 : _c_hostUpdate.call(c);
                });
                this.update(changedProperties);
            } else {
                this.__markUpdated();
            }
        } catch (e) {
            // Prevent `firstUpdated` and `updated` from running when there's an
            // update exception.
            shouldUpdate = false;
            // Ensure element can accept additional updates after an exception.
            this.__markUpdated();
            throw e;
        }
        // The update is no longer considered pending and further updates are now allowed.
        if (shouldUpdate) {
            this._$didUpdate(changedProperties);
        }
    }
    /**
     * Invoked before `update()` to compute values needed during the update.
     *
     * Implement `willUpdate` to compute property values that depend on other
     * properties and are used in the rest of the update process.
     *
     * ```ts
     * willUpdate(changedProperties) {
     *   // only need to check changed properties for an expensive computation.
     *   if (changedProperties.has('firstName') || changedProperties.has('lastName')) {
     *     this.sha = computeSHA(`${this.firstName} ${this.lastName}`);
     *   }
     * }
     *
     * render() {
     *   return html`SHA: ${this.sha}`;
     * }
     * ```
     *
     * @category updates
     */ willUpdate(_changedProperties) {}
    // Note, this is an override point for polyfill-support.
    // @internal
    _$didUpdate(changedProperties) {
        var _this___controllers;
        (_this___controllers = this.__controllers) === null || _this___controllers === void 0 ? void 0 : _this___controllers.forEach((c)=>{
            var _c_hostUpdated;
            return (_c_hostUpdated = c.hostUpdated) === null || _c_hostUpdated === void 0 ? void 0 : _c_hostUpdated.call(c);
        });
        if (!this.hasUpdated) {
            this.hasUpdated = true;
            this.firstUpdated(changedProperties);
        }
        this.updated(changedProperties);
        if (DEV_MODE && this.isUpdatePending && this.constructor.enabledWarnings.includes('change-in-update')) {
            issueWarning('change-in-update', "Element ".concat(this.localName, " scheduled an update ") + "(generally because a property was set) " + "after an update completed, causing a new update to be scheduled. " + "This is inefficient and should be avoided unless the next update " + "can only be scheduled as a side effect of the previous update.");
        }
    }
    __markUpdated() {
        this._$changedProperties = new Map();
        this.isUpdatePending = false;
    }
    /**
     * Returns a Promise that resolves when the element has completed updating.
     * The Promise value is a boolean that is `true` if the element completed the
     * update without triggering another update. The Promise result is `false` if
     * a property was set inside `updated()`. If the Promise is rejected, an
     * exception was thrown during the update.
     *
     * To await additional asynchronous work, override the `getUpdateComplete`
     * method. For example, it is sometimes useful to await a rendered element
     * before fulfilling this Promise. To do this, first await
     * `super.getUpdateComplete()`, then any subsequent state.
     *
     * @return A promise of a boolean that resolves to true if the update completed
     *     without triggering another update.
     * @category updates
     */ get updateComplete() {
        return this.getUpdateComplete();
    }
    /**
     * Override point for the `updateComplete` promise.
     *
     * It is not safe to override the `updateComplete` getter directly due to a
     * limitation in TypeScript which means it is not possible to call a
     * superclass getter (e.g. `super.updateComplete.then(...)`) when the target
     * language is ES5 (https://github.com/microsoft/TypeScript/issues/338).
     * This method should be overridden instead. For example:
     *
     * ```ts
     * class MyElement extends LitElement {
     *   override async getUpdateComplete() {
     *     const result = await super.getUpdateComplete();
     *     await this._myChild.updateComplete;
     *     return result;
     *   }
     * }
     * ```
     *
     * @return A promise of a boolean that resolves to true if the update completed
     *     without triggering another update.
     * @category updates
     */ getUpdateComplete() {
        return this.__updatePromise;
    }
    /**
     * Controls whether or not `update()` should be called when the element requests
     * an update. By default, this method always returns `true`, but this can be
     * customized to control when to update.
     *
     * @param _changedProperties Map of changed properties with old values
     * @category updates
     */ shouldUpdate(_changedProperties) {
        return true;
    }
    /**
     * Updates the element. This method reflects property values to attributes.
     * It can be overridden to render and keep updated element DOM.
     * Setting properties inside this method will *not* trigger
     * another update.
     *
     * @param _changedProperties Map of changed properties with old values
     * @category updates
     */ update(_changedProperties) {
        // The forEach() expression will only run when __reflectingProperties is
        // defined, and it returns undefined, setting __reflectingProperties to
        // undefined
        this.__reflectingProperties && (this.__reflectingProperties = this.__reflectingProperties.forEach((p)=>this.__propertyToAttribute(p, this[p])));
        this.__markUpdated();
    }
    /**
     * Invoked whenever the element is updated. Implement to perform
     * post-updating tasks via DOM APIs, for example, focusing an element.
     *
     * Setting properties inside this method will trigger the element to update
     * again after this update cycle completes.
     *
     * @param _changedProperties Map of changed properties with old values
     * @category updates
     */ updated(_changedProperties) {}
    /**
     * Invoked when the element is first updated. Implement to perform one time
     * work on the element after update.
     *
     * ```ts
     * firstUpdated() {
     *   this.renderRoot.getElementById('my-text-area').focus();
     * }
     * ```
     *
     * Setting properties inside this method will trigger the element to update
     * again after this update cycle completes.
     *
     * @param _changedProperties Map of changed properties with old values
     * @category updates
     */ firstUpdated(_changedProperties) {}
    constructor(){
        super();
        this.__instanceProperties = undefined;
        /**
         * True if there is a pending update as a result of calling `requestUpdate()`.
         * Should only be read.
         * @category updates
         */ this.isUpdatePending = false;
        /**
         * Is set to `true` after the first update. The element code cannot assume
         * that `renderRoot` exists before the element `hasUpdated`.
         * @category updates
         */ this.hasUpdated = false;
        /**
         * Name of currently reflecting property
         */ this.__reflectingProperty = null;
        this.__initialize();
    }
}
/**
 * Memoized list of all element styles.
 * Created lazily on user subclasses when finalizing the class.
 * @nocollapse
 * @category styles
 */ ReactiveElement.elementStyles = [];
/**
 * Options used when calling `attachShadow`. Set this property to customize
 * the options for the shadowRoot; for example, to create a closed
 * shadowRoot: `{mode: 'closed'}`.
 *
 * Note, these options are used in `createRenderRoot`. If this method
 * is customized, options should be respected if possible.
 * @nocollapse
 * @category rendering
 */ ReactiveElement.shadowRootOptions = {
    mode: 'open'
};
// Assigned here to work around a jscompiler bug with static fields
// when compiling to ES5.
// https://github.com/google/closure-compiler/issues/3177
ReactiveElement[JSCompiler_renameProperty('elementProperties', ReactiveElement)] = new Map();
ReactiveElement[JSCompiler_renameProperty('finalized', ReactiveElement)] = new Map();
// Apply polyfills if available
polyfillSupport === null || polyfillSupport === void 0 ? void 0 : polyfillSupport({
    ReactiveElement
});
// Dev mode warnings...
if ("TURBOPACK compile-time truthy", 1) {
    // Default warning set.
    ReactiveElement.enabledWarnings = [
        'change-in-update',
        'async-perform-update'
    ];
    const ensureOwnWarnings = function(ctor) {
        if (!ctor.hasOwnProperty(JSCompiler_renameProperty('enabledWarnings', ctor))) {
            ctor.enabledWarnings = ctor.enabledWarnings.slice();
        }
    };
    ReactiveElement.enableWarning = function(warning) {
        ensureOwnWarnings(this);
        if (!this.enabledWarnings.includes(warning)) {
            this.enabledWarnings.push(warning);
        }
    };
    ReactiveElement.disableWarning = function(warning) {
        ensureOwnWarnings(this);
        const i = this.enabledWarnings.indexOf(warning);
        if (i >= 0) {
            this.enabledWarnings.splice(i, 1);
        }
    };
}
var _reactiveElementVersions;
// IMPORTANT: do not change the property name or the assignment expression.
// This line will be used in regexes to search for ReactiveElement usage.
((_reactiveElementVersions = (_global1 = global).reactiveElementVersions) !== null && _reactiveElementVersions !== void 0 ? _reactiveElementVersions : _global1.reactiveElementVersions = []).push('2.1.1');
if (DEV_MODE && global.reactiveElementVersions.length > 1) {
    queueMicrotask(()=>{
        issueWarning('multiple-versions', "Multiple versions of Lit loaded. Loading multiple versions " + "is not recommended.");
    });
} //# sourceMappingURL=reactive-element.js.map
}),
"[project]/frontend/node_modules/@reown/appkit-ui/node_modules/lit-html/development/lit-html.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ __turbopack_context__.s([
    "_$LH",
    ()=>_$LH,
    "html",
    ()=>html,
    "mathml",
    ()=>mathml,
    "noChange",
    ()=>noChange,
    "nothing",
    ()=>nothing,
    "render",
    ()=>render,
    "svg",
    ()=>svg
]);
var _global_ShadyDOM, _global_ShadyDOM1;
var _global;
const DEV_MODE = true;
const ENABLE_EXTRA_SECURITY_HOOKS = true;
const ENABLE_SHADYDOM_NOPATCH = true;
const NODE_MODE = false;
// Allows minifiers to rename references to globalThis
const global = globalThis;
/**
 * Useful for visualizing and logging insights into what the Lit template system is doing.
 *
 * Compiled out of prod mode builds.
 */ const debugLogEvent = ("TURBOPACK compile-time truthy", 1) ? (event)=>{
    const shouldEmit = global.emitLitDebugLogEvents;
    if (!shouldEmit) {
        return;
    }
    global.dispatchEvent(new CustomEvent('lit-debug', {
        detail: event
    }));
} : "TURBOPACK unreachable";
// Used for connecting beginRender and endRender events when there are nested
// renders when errors are thrown preventing an endRender event from being
// called.
let debugLogRenderId = 0;
let issueWarning;
if ("TURBOPACK compile-time truthy", 1) {
    var _global1;
    var _litIssuedWarnings;
    (_litIssuedWarnings = (_global1 = global).litIssuedWarnings) !== null && _litIssuedWarnings !== void 0 ? _litIssuedWarnings : _global1.litIssuedWarnings = new Set();
    /**
     * Issue a warning if we haven't already, based either on `code` or `warning`.
     * Warnings are disabled automatically only by `warning`; disabling via `code`
     * can be done by users.
     */ issueWarning = (code, warning)=>{
        warning += code ? " See https://lit.dev/msg/".concat(code, " for more information.") : '';
        if (!global.litIssuedWarnings.has(warning) && !global.litIssuedWarnings.has(code)) {
            console.warn(warning);
            global.litIssuedWarnings.add(warning);
        }
    };
    queueMicrotask(()=>{
        issueWarning('dev-mode', "Lit is in dev mode. Not recommended for production!");
    });
}
const wrap = ENABLE_SHADYDOM_NOPATCH && ((_global_ShadyDOM = global.ShadyDOM) === null || _global_ShadyDOM === void 0 ? void 0 : _global_ShadyDOM.inUse) && ((_global_ShadyDOM1 = global.ShadyDOM) === null || _global_ShadyDOM1 === void 0 ? void 0 : _global_ShadyDOM1.noPatch) === true ? global.ShadyDOM.wrap : (node)=>node;
const trustedTypes = global.trustedTypes;
/**
 * Our TrustedTypePolicy for HTML which is declared using the html template
 * tag function.
 *
 * That HTML is a developer-authored constant, and is parsed with innerHTML
 * before any untrusted expressions have been mixed in. Therefor it is
 * considered safe by construction.
 */ const policy = trustedTypes ? trustedTypes.createPolicy('lit-html', {
    createHTML: (s)=>s
}) : undefined;
const identityFunction = (value)=>value;
const noopSanitizer = (_node, _name, _type)=>identityFunction;
/** Sets the global sanitizer factory. */ const setSanitizer = (newSanitizer)=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    if (sanitizerFactoryInternal !== noopSanitizer) {
        throw new Error("Attempted to overwrite existing lit-html security policy." + " setSanitizeDOMValueFactory should be called at most once.");
    }
    sanitizerFactoryInternal = newSanitizer;
};
/**
 * Only used in internal tests, not a part of the public API.
 */ const _testOnlyClearSanitizerFactoryDoNotCallOrElse = ()=>{
    sanitizerFactoryInternal = noopSanitizer;
};
const createSanitizer = (node, name, type)=>{
    return sanitizerFactoryInternal(node, name, type);
};
// Added to an attribute name to mark the attribute as bound so we can find
// it easily.
const boundAttributeSuffix = '$lit$';
// This marker is used in many syntactic positions in HTML, so it must be
// a valid element name and attribute name. We don't support dynamic names (yet)
// but this at least ensures that the parse tree is closer to the template
// intention.
const marker = "lit$".concat(Math.random().toFixed(9).slice(2), "$");
// String used to tell if a comment is a marker comment
const markerMatch = '?' + marker;
// Text used to insert a comment marker node. We use processing instruction
// syntax because it's slightly smaller, but parses as a comment node.
const nodeMarker = "<".concat(markerMatch, ">");
const d = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : document;
// Creates a dynamic marker. We never have to search for these in the DOM.
const createMarker = ()=>d.createComment('');
const isPrimitive = (value)=>value === null || typeof value != 'object' && typeof value != 'function';
const isArray = Array.isArray;
const isIterable = (value)=>isArray(value) || // eslint-disable-next-line @typescript-eslint/no-explicit-any
    typeof (value === null || value === void 0 ? void 0 : value[Symbol.iterator]) === 'function';
const SPACE_CHAR = "[ 	\n\f\r]";
const ATTR_VALUE_CHAR = "[^ 	\n\f\r\"'`<>=]";
const NAME_CHAR = "[^\\s\"'>=/]";
// These regexes represent the five parsing states that we care about in the
// Template's HTML scanner. They match the *end* of the state they're named
// after.
// Depending on the match, we transition to a new state. If there's no match,
// we stay in the same state.
// Note that the regexes are stateful. We utilize lastIndex and sync it
// across the multiple regexes used. In addition to the five regexes below
// we also dynamically create a regex to find the matching end tags for raw
// text elements.
/**
 * End of text is: `<` followed by:
 *   (comment start) or (tag) or (dynamic tag binding)
 */ const textEndRegex = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g;
const COMMENT_START = 1;
const TAG_NAME = 2;
const DYNAMIC_TAG_NAME = 3;
const commentEndRegex = /-->/g;
/**
 * Comments not started with <!--, like </{, can be ended by a single `>`
 */ const comment2EndRegex = />/g;
/**
 * The tagEnd regex matches the end of the "inside an opening" tag syntax
 * position. It either matches a `>`, an attribute-like sequence, or the end
 * of the string after a space (attribute-name position ending).
 *
 * See attributes in the HTML spec:
 * https://www.w3.org/TR/html5/syntax.html#elements-attributes
 *
 * " \t\n\f\r" are HTML space characters:
 * https://infra.spec.whatwg.org/#ascii-whitespace
 *
 * So an attribute is:
 *  * The name: any character except a whitespace character, ("), ('), ">",
 *    "=", or "/". Note: this is different from the HTML spec which also excludes control characters.
 *  * Followed by zero or more space characters
 *  * Followed by "="
 *  * Followed by zero or more space characters
 *  * Followed by:
 *    * Any character except space, ('), ("), "<", ">", "=", (`), or
 *    * (") then any non-("), or
 *    * (') then any non-(')
 */ const tagEndRegex = new RegExp(">|".concat(SPACE_CHAR, "(?:(").concat(NAME_CHAR, "+)(").concat(SPACE_CHAR, "*=").concat(SPACE_CHAR, "*(?:").concat(ATTR_VALUE_CHAR, "|(\"|')|))|$)"), 'g');
const ENTIRE_MATCH = 0;
const ATTRIBUTE_NAME = 1;
const SPACES_AND_EQUALS = 2;
const QUOTE_CHAR = 3;
const singleQuoteAttrEndRegex = /'/g;
const doubleQuoteAttrEndRegex = /"/g;
/**
 * Matches the raw text elements.
 *
 * Comments are not parsed within raw text elements, so we need to search their
 * text content for marker strings.
 */ const rawTextElement = /^(?:script|style|textarea|title)$/i;
/** TemplateResult types */ const HTML_RESULT = 1;
const SVG_RESULT = 2;
const MATHML_RESULT = 3;
// TemplatePart types
// IMPORTANT: these must match the values in PartType
const ATTRIBUTE_PART = 1;
const CHILD_PART = 2;
const PROPERTY_PART = 3;
const BOOLEAN_ATTRIBUTE_PART = 4;
const EVENT_PART = 5;
const ELEMENT_PART = 6;
const COMMENT_PART = 7;
/**
 * Generates a template literal tag function that returns a TemplateResult with
 * the given result type.
 */ const tag = (type)=>function(strings) {
        for(var _len = arguments.length, values = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
            values[_key - 1] = arguments[_key];
        }
        // Warn against templates octal escape sequences
        // We do this here rather than in render so that the warning is closer to the
        // template definition.
        if (DEV_MODE && strings.some((s)=>s === undefined)) {
            console.warn('Some template strings are undefined.\n' + 'This is probably caused by illegal octal escape sequences.');
        }
        if ("TURBOPACK compile-time truthy", 1) {
            // Import static-html.js results in a circular dependency which g3 doesn't
            // handle. Instead we know that static values must have the field
            // `_$litStatic$`.
            if (values.some((val)=>val === null || val === void 0 ? void 0 : val['_$litStatic$'])) {
                issueWarning('', "Static values 'literal' or 'unsafeStatic' cannot be used as values to non-static templates.\n" + "Please use the static 'html' tag function. See https://lit.dev/docs/templates/expressions/#static-expressions");
            }
        }
        return {
            // This property needs to remain unminified.
            ['_$litType$']: type,
            strings,
            values
        };
    };
const html = tag(HTML_RESULT);
const svg = tag(SVG_RESULT);
const mathml = tag(MATHML_RESULT);
const noChange = Symbol.for('lit-noChange');
const nothing = Symbol.for('lit-nothing');
/**
 * The cache of prepared templates, keyed by the tagged TemplateStringsArray
 * and _not_ accounting for the specific template tag used. This means that
 * template tags cannot be dynamic - they must statically be one of html, svg,
 * or attr. This restriction simplifies the cache lookup, which is on the hot
 * path for rendering.
 */ const templateCache = new WeakMap();
const walker = d.createTreeWalker(d, 129 /* NodeFilter.SHOW_{ELEMENT|COMMENT} */ );
let sanitizerFactoryInternal = noopSanitizer;
function trustFromTemplateString(tsa, stringFromTSA) {
    // A security check to prevent spoofing of Lit template results.
    // In the future, we may be able to replace this with Array.isTemplateObject,
    // though we might need to make that check inside of the html and svg
    // functions, because precompiled templates don't come in as
    // TemplateStringArray objects.
    if (!isArray(tsa) || !tsa.hasOwnProperty('raw')) {
        let message = 'invalid template strings array';
        if ("TURBOPACK compile-time truthy", 1) {
            message = "\n          Internal Error: expected template strings to be an array\n          with a 'raw' field. Faking a template strings array by\n          calling html or svg like an ordinary function is effectively\n          the same as calling unsafeHtml and can lead to major security\n          issues, e.g. opening your code up to XSS attacks.\n          If you're using the html or svg tagged template functions normally\n          and still seeing this error, please file a bug at\n          https://github.com/lit/lit/issues/new?template=bug_report.md\n          and include information about your build tooling, if any.\n        ".trim().replace(/\n */g, '\n');
        }
        throw new Error(message);
    }
    return policy !== undefined ? policy.createHTML(stringFromTSA) : stringFromTSA;
}
/**
 * Returns an HTML string for the given TemplateStringsArray and result type
 * (HTML or SVG), along with the case-sensitive bound attribute names in
 * template order. The HTML contains comment markers denoting the `ChildPart`s
 * and suffixes on bound attributes denoting the `AttributeParts`.
 *
 * @param strings template strings array
 * @param type HTML or SVG
 * @return Array containing `[html, attrNames]` (array returned for terseness,
 *     to avoid object fields since this code is shared with non-minified SSR
 *     code)
 */ const getTemplateHtml = (strings, type)=>{
    // Insert makers into the template HTML to represent the position of
    // bindings. The following code scans the template strings to determine the
    // syntactic position of the bindings. They can be in text position, where
    // we insert an HTML comment, attribute value position, where we insert a
    // sentinel string and re-write the attribute name, or inside a tag where
    // we insert the sentinel string.
    const l = strings.length - 1;
    // Stores the case-sensitive bound attribute names in the order of their
    // parts. ElementParts are also reflected in this array as undefined
    // rather than a string, to disambiguate from attribute bindings.
    const attrNames = [];
    let html = type === SVG_RESULT ? '<svg>' : type === MATHML_RESULT ? '<math>' : '';
    // When we're inside a raw text tag (not it's text content), the regex
    // will still be tagRegex so we can find attributes, but will switch to
    // this regex when the tag ends.
    let rawTextEndRegex;
    // The current parsing state, represented as a reference to one of the
    // regexes
    let regex = textEndRegex;
    for(let i = 0; i < l; i++){
        const s = strings[i];
        // The index of the end of the last attribute name. When this is
        // positive at end of a string, it means we're in an attribute value
        // position and need to rewrite the attribute name.
        // We also use a special value of -2 to indicate that we encountered
        // the end of a string in attribute name position.
        let attrNameEndIndex = -1;
        let attrName;
        let lastIndex = 0;
        let match;
        // The conditions in this loop handle the current parse state, and the
        // assignments to the `regex` variable are the state transitions.
        while(lastIndex < s.length){
            // Make sure we start searching from where we previously left off
            regex.lastIndex = lastIndex;
            match = regex.exec(s);
            if (match === null) {
                break;
            }
            lastIndex = regex.lastIndex;
            if (regex === textEndRegex) {
                if (match[COMMENT_START] === '!--') {
                    regex = commentEndRegex;
                } else if (match[COMMENT_START] !== undefined) {
                    // We started a weird comment, like </{
                    regex = comment2EndRegex;
                } else if (match[TAG_NAME] !== undefined) {
                    if (rawTextElement.test(match[TAG_NAME])) {
                        // Record if we encounter a raw-text element. We'll switch to
                        // this regex at the end of the tag.
                        rawTextEndRegex = new RegExp("</".concat(match[TAG_NAME]), 'g');
                    }
                    regex = tagEndRegex;
                } else if (match[DYNAMIC_TAG_NAME] !== undefined) {
                    if ("TURBOPACK compile-time truthy", 1) {
                        throw new Error('Bindings in tag names are not supported. Please use static templates instead. ' + 'See https://lit.dev/docs/templates/expressions/#static-expressions');
                    }
                    regex = tagEndRegex;
                }
            } else if (regex === tagEndRegex) {
                if (match[ENTIRE_MATCH] === '>') {
                    // End of a tag. If we had started a raw-text element, use that
                    // regex
                    regex = rawTextEndRegex !== null && rawTextEndRegex !== void 0 ? rawTextEndRegex : textEndRegex;
                    // We may be ending an unquoted attribute value, so make sure we
                    // clear any pending attrNameEndIndex
                    attrNameEndIndex = -1;
                } else if (match[ATTRIBUTE_NAME] === undefined) {
                    // Attribute name position
                    attrNameEndIndex = -2;
                } else {
                    attrNameEndIndex = regex.lastIndex - match[SPACES_AND_EQUALS].length;
                    attrName = match[ATTRIBUTE_NAME];
                    regex = match[QUOTE_CHAR] === undefined ? tagEndRegex : match[QUOTE_CHAR] === '"' ? doubleQuoteAttrEndRegex : singleQuoteAttrEndRegex;
                }
            } else if (regex === doubleQuoteAttrEndRegex || regex === singleQuoteAttrEndRegex) {
                regex = tagEndRegex;
            } else if (regex === commentEndRegex || regex === comment2EndRegex) {
                regex = textEndRegex;
            } else {
                // Not one of the five state regexes, so it must be the dynamically
                // created raw text regex and we're at the close of that element.
                regex = tagEndRegex;
                rawTextEndRegex = undefined;
            }
        }
        if ("TURBOPACK compile-time truthy", 1) {
            // If we have a attrNameEndIndex, which indicates that we should
            // rewrite the attribute name, assert that we're in a valid attribute
            // position - either in a tag, or a quoted attribute value.
            console.assert(attrNameEndIndex === -1 || regex === tagEndRegex || regex === singleQuoteAttrEndRegex || regex === doubleQuoteAttrEndRegex, 'unexpected parse state B');
        }
        // We have four cases:
        //  1. We're in text position, and not in a raw text element
        //     (regex === textEndRegex): insert a comment marker.
        //  2. We have a non-negative attrNameEndIndex which means we need to
        //     rewrite the attribute name to add a bound attribute suffix.
        //  3. We're at the non-first binding in a multi-binding attribute, use a
        //     plain marker.
        //  4. We're somewhere else inside the tag. If we're in attribute name
        //     position (attrNameEndIndex === -2), add a sequential suffix to
        //     generate a unique attribute name.
        // Detect a binding next to self-closing tag end and insert a space to
        // separate the marker from the tag end:
        const end = regex === tagEndRegex && strings[i + 1].startsWith('/>') ? ' ' : '';
        html += regex === textEndRegex ? s + nodeMarker : attrNameEndIndex >= 0 ? (attrNames.push(attrName), s.slice(0, attrNameEndIndex) + boundAttributeSuffix + s.slice(attrNameEndIndex)) + marker + end : s + marker + (attrNameEndIndex === -2 ? i : end);
    }
    const htmlResult = html + (strings[l] || '<?>') + (type === SVG_RESULT ? '</svg>' : type === MATHML_RESULT ? '</math>' : '');
    // Returned as an array for terseness
    return [
        trustFromTemplateString(strings, htmlResult),
        attrNames
    ];
};
class Template {
    // Overridden via `litHtmlPolyfillSupport` to provide platform support.
    /** @nocollapse */ static createElement(html, _options) {
        const el = d.createElement('template');
        el.innerHTML = html;
        return el;
    }
    constructor(// This property needs to remain unminified.
    { strings, ['_$litType$']: type }, options){
        this.parts = [];
        let node;
        let nodeIndex = 0;
        let attrNameIndex = 0;
        const partCount = strings.length - 1;
        const parts = this.parts;
        // Create template element
        const [html, attrNames] = getTemplateHtml(strings, type);
        this.el = Template.createElement(html, options);
        walker.currentNode = this.el.content;
        // Re-parent SVG or MathML nodes into template root
        if (type === SVG_RESULT || type === MATHML_RESULT) {
            const wrapper = this.el.content.firstChild;
            wrapper.replaceWith(...wrapper.childNodes);
        }
        // Walk the template to find binding markers and create TemplateParts
        while((node = walker.nextNode()) !== null && parts.length < partCount){
            if (node.nodeType === 1) {
                if ("TURBOPACK compile-time truthy", 1) {
                    const tag = node.localName;
                    // Warn if `textarea` includes an expression and throw if `template`
                    // does since these are not supported. We do this by checking
                    // innerHTML for anything that looks like a marker. This catches
                    // cases like bindings in textarea there markers turn into text nodes.
                    if (/^(?:textarea|template)$/i.test(tag) && node.innerHTML.includes(marker)) {
                        const m = "Expressions are not supported inside `".concat(tag, "` ") + "elements. See https://lit.dev/msg/expression-in-".concat(tag, " for more ") + "information.";
                        if (tag === 'template') {
                            throw new Error(m);
                        } else issueWarning('', m);
                    }
                }
                // TODO (justinfagnani): for attempted dynamic tag names, we don't
                // increment the bindingIndex, and it'll be off by 1 in the element
                // and off by two after it.
                if (node.hasAttributes()) {
                    for (const name of node.getAttributeNames()){
                        if (name.endsWith(boundAttributeSuffix)) {
                            const realName = attrNames[attrNameIndex++];
                            const value = node.getAttribute(name);
                            const statics = value.split(marker);
                            const m = /([.?@])?(.*)/.exec(realName);
                            parts.push({
                                type: ATTRIBUTE_PART,
                                index: nodeIndex,
                                name: m[2],
                                strings: statics,
                                ctor: m[1] === '.' ? PropertyPart : m[1] === '?' ? BooleanAttributePart : m[1] === '@' ? EventPart : AttributePart
                            });
                            node.removeAttribute(name);
                        } else if (name.startsWith(marker)) {
                            parts.push({
                                type: ELEMENT_PART,
                                index: nodeIndex
                            });
                            node.removeAttribute(name);
                        }
                    }
                }
                // TODO (justinfagnani): benchmark the regex against testing for each
                // of the 3 raw text element names.
                if (rawTextElement.test(node.tagName)) {
                    // For raw text elements we need to split the text content on
                    // markers, create a Text node for each segment, and create
                    // a TemplatePart for each marker.
                    const strings = node.textContent.split(marker);
                    const lastIndex = strings.length - 1;
                    if (lastIndex > 0) {
                        node.textContent = trustedTypes ? trustedTypes.emptyScript : '';
                        // Generate a new text node for each literal section
                        // These nodes are also used as the markers for child parts
                        for(let i = 0; i < lastIndex; i++){
                            node.append(strings[i], createMarker());
                            // Walk past the marker node we just added
                            walker.nextNode();
                            parts.push({
                                type: CHILD_PART,
                                index: ++nodeIndex
                            });
                        }
                        // Note because this marker is added after the walker's current
                        // node, it will be walked to in the outer loop (and ignored), so
                        // we don't need to adjust nodeIndex here
                        node.append(strings[lastIndex], createMarker());
                    }
                }
            } else if (node.nodeType === 8) {
                const data = node.data;
                if (data === markerMatch) {
                    parts.push({
                        type: CHILD_PART,
                        index: nodeIndex
                    });
                } else {
                    let i = -1;
                    while((i = node.data.indexOf(marker, i + 1)) !== -1){
                        // Comment node has a binding marker inside, make an inactive part
                        // The binding won't work, but subsequent bindings will
                        parts.push({
                            type: COMMENT_PART,
                            index: nodeIndex
                        });
                        // Move to the end of the match
                        i += marker.length - 1;
                    }
                }
            }
            nodeIndex++;
        }
        if ("TURBOPACK compile-time truthy", 1) {
            // If there was a duplicate attribute on a tag, then when the tag is
            // parsed into an element the attribute gets de-duplicated. We can detect
            // this mismatch if we haven't precisely consumed every attribute name
            // when preparing the template. This works because `attrNames` is built
            // from the template string and `attrNameIndex` comes from processing the
            // resulting DOM.
            if (attrNames.length !== attrNameIndex) {
                throw new Error("Detected duplicate attribute bindings. This occurs if your template " + "has duplicate attributes on an element tag. For example " + '"<input ?disabled=${true} ?disabled=${false}>" contains a ' + 'duplicate "disabled" attribute. The error was detected in ' + "the following template: \n" + '`' + strings.join('${...}') + '`');
            }
        }
        // We could set walker.currentNode to another node here to prevent a memory
        // leak, but every time we prepare a template, we immediately render it
        // and re-use the walker in new TemplateInstance._clone().
        debugLogEvent && debugLogEvent({
            kind: 'template prep',
            template: this,
            clonableTemplate: this.el,
            parts: this.parts,
            strings
        });
    }
}
function resolveDirective(part, value) {
    let parent = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : part, attributeIndex = arguments.length > 3 ? arguments[3] : void 0;
    var _parent___directives;
    // Bail early if the value is explicitly noChange. Note, this means any
    // nested directive is still attached and is not run.
    if (value === noChange) {
        return value;
    }
    let currentDirective = attributeIndex !== undefined ? (_parent___directives = parent.__directives) === null || _parent___directives === void 0 ? void 0 : _parent___directives[attributeIndex] : parent.__directive;
    const nextDirectiveConstructor = isPrimitive(value) ? undefined : value['_$litDirective$'];
    if ((currentDirective === null || currentDirective === void 0 ? void 0 : currentDirective.constructor) !== nextDirectiveConstructor) {
        var // This property needs to remain unminified.
        _currentDirective__$notifyDirectiveConnectionChanged;
        currentDirective === null || currentDirective === void 0 ? void 0 : (_currentDirective__$notifyDirectiveConnectionChanged = currentDirective['_$notifyDirectiveConnectionChanged']) === null || _currentDirective__$notifyDirectiveConnectionChanged === void 0 ? void 0 : _currentDirective__$notifyDirectiveConnectionChanged.call(currentDirective, false);
        if (nextDirectiveConstructor === undefined) {
            currentDirective = undefined;
        } else {
            currentDirective = new nextDirectiveConstructor(part);
            currentDirective._$initialize(part, parent, attributeIndex);
        }
        if (attributeIndex !== undefined) {
            var _parent;
            var ___directives;
            ((___directives = (_parent = parent).__directives) !== null && ___directives !== void 0 ? ___directives : _parent.__directives = [])[attributeIndex] = currentDirective;
        } else {
            parent.__directive = currentDirective;
        }
    }
    if (currentDirective !== undefined) {
        value = resolveDirective(part, currentDirective._$resolve(part, value.values), currentDirective, attributeIndex);
    }
    return value;
}
/**
 * An updateable instance of a Template. Holds references to the Parts used to
 * update the template instance.
 */ class TemplateInstance {
    // Called by ChildPart parentNode getter
    get parentNode() {
        return this._$parent.parentNode;
    }
    // See comment in Disconnectable interface for why this is a getter
    get _$isConnected() {
        return this._$parent._$isConnected;
    }
    // This method is separate from the constructor because we need to return a
    // DocumentFragment and we don't want to hold onto it with an instance field.
    _clone(options) {
        const { el: { content }, parts: parts } = this._$template;
        var _options_creationScope;
        const fragment = ((_options_creationScope = options === null || options === void 0 ? void 0 : options.creationScope) !== null && _options_creationScope !== void 0 ? _options_creationScope : d).importNode(content, true);
        walker.currentNode = fragment;
        let node = walker.nextNode();
        let nodeIndex = 0;
        let partIndex = 0;
        let templatePart = parts[0];
        while(templatePart !== undefined){
            if (nodeIndex === templatePart.index) {
                let part;
                if (templatePart.type === CHILD_PART) {
                    part = new ChildPart(node, node.nextSibling, this, options);
                } else if (templatePart.type === ATTRIBUTE_PART) {
                    part = new templatePart.ctor(node, templatePart.name, templatePart.strings, this, options);
                } else if (templatePart.type === ELEMENT_PART) {
                    part = new ElementPart(node, this, options);
                }
                this._$parts.push(part);
                templatePart = parts[++partIndex];
            }
            if (nodeIndex !== (templatePart === null || templatePart === void 0 ? void 0 : templatePart.index)) {
                node = walker.nextNode();
                nodeIndex++;
            }
        }
        // We need to set the currentNode away from the cloned tree so that we
        // don't hold onto the tree even if the tree is detached and should be
        // freed.
        walker.currentNode = d;
        return fragment;
    }
    _update(values) {
        let i = 0;
        for (const part of this._$parts){
            if (part !== undefined) {
                debugLogEvent && debugLogEvent({
                    kind: 'set part',
                    part,
                    value: values[i],
                    valueIndex: i,
                    values,
                    templateInstance: this
                });
                if (part.strings !== undefined) {
                    part._$setValue(values, part, i);
                    // The number of values the part consumes is part.strings.length - 1
                    // since values are in between template spans. We increment i by 1
                    // later in the loop, so increment it by part.strings.length - 2 here
                    i += part.strings.length - 2;
                } else {
                    part._$setValue(values[i]);
                }
            }
            i++;
        }
    }
    constructor(template, parent){
        this._$parts = [];
        /** @internal */ this._$disconnectableChildren = undefined;
        this._$template = template;
        this._$parent = parent;
    }
}
class ChildPart {
    // See comment in Disconnectable interface for why this is a getter
    get _$isConnected() {
        var _this__$parent;
        var _this__$parent__$isConnected;
        // ChildParts that are not at the root should always be created with a
        // parent; only RootChildNode's won't, so they return the local isConnected
        // state
        return (_this__$parent__$isConnected = (_this__$parent = this._$parent) === null || _this__$parent === void 0 ? void 0 : _this__$parent._$isConnected) !== null && _this__$parent__$isConnected !== void 0 ? _this__$parent__$isConnected : this.__isConnected;
    }
    /**
     * The parent node into which the part renders its content.
     *
     * A ChildPart's content consists of a range of adjacent child nodes of
     * `.parentNode`, possibly bordered by 'marker nodes' (`.startNode` and
     * `.endNode`).
     *
     * - If both `.startNode` and `.endNode` are non-null, then the part's content
     * consists of all siblings between `.startNode` and `.endNode`, exclusively.
     *
     * - If `.startNode` is non-null but `.endNode` is null, then the part's
     * content consists of all siblings following `.startNode`, up to and
     * including the last child of `.parentNode`. If `.endNode` is non-null, then
     * `.startNode` will always be non-null.
     *
     * - If both `.endNode` and `.startNode` are null, then the part's content
     * consists of all child nodes of `.parentNode`.
     */ get parentNode() {
        let parentNode = wrap(this._$startNode).parentNode;
        const parent = this._$parent;
        if (parent !== undefined && (parentNode === null || parentNode === void 0 ? void 0 : parentNode.nodeType) === 11 /* Node.DOCUMENT_FRAGMENT */ ) {
            // If the parentNode is a DocumentFragment, it may be because the DOM is
            // still in the cloned fragment during initial render; if so, get the real
            // parentNode the part will be committed into by asking the parent.
            parentNode = parent.parentNode;
        }
        return parentNode;
    }
    /**
     * The part's leading marker node, if any. See `.parentNode` for more
     * information.
     */ get startNode() {
        return this._$startNode;
    }
    /**
     * The part's trailing marker node, if any. See `.parentNode` for more
     * information.
     */ get endNode() {
        return this._$endNode;
    }
    _$setValue(value) {
        let directiveParent = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this;
        if (DEV_MODE && this.parentNode === null) {
            throw new Error("This `ChildPart` has no `parentNode` and therefore cannot accept a value. This likely means the element containing the part was manipulated in an unsupported way outside of Lit's control such that the part's marker nodes were ejected from DOM. For example, setting the element's `innerHTML` or `textContent` can do this.");
        }
        value = resolveDirective(this, value, directiveParent);
        if (isPrimitive(value)) {
            // Non-rendering child values. It's important that these do not render
            // empty text nodes to avoid issues with preventing default <slot>
            // fallback content.
            if (value === nothing || value == null || value === '') {
                if (this._$committedValue !== nothing) {
                    debugLogEvent && debugLogEvent({
                        kind: 'commit nothing to child',
                        start: this._$startNode,
                        end: this._$endNode,
                        parent: this._$parent,
                        options: this.options
                    });
                    this._$clear();
                }
                this._$committedValue = nothing;
            } else if (value !== this._$committedValue && value !== noChange) {
                this._commitText(value);
            }
        // This property needs to remain unminified.
        } else if (value['_$litType$'] !== undefined) {
            this._commitTemplateResult(value);
        } else if (value.nodeType !== undefined) {
            var _this_options;
            if (DEV_MODE && ((_this_options = this.options) === null || _this_options === void 0 ? void 0 : _this_options.host) === value) {
                this._commitText("[probable mistake: rendered a template's host in itself " + "(commonly caused by writing ${this} in a template]");
                console.warn("Attempted to render the template host", value, "inside itself. This is almost always a mistake, and in dev mode ", "we render some warning text. In production however, we'll ", "render it, which will usually result in an error, and sometimes ", "in the element disappearing from the DOM.");
                return;
            }
            this._commitNode(value);
        } else if (isIterable(value)) {
            this._commitIterable(value);
        } else {
            // Fallback, will render the string representation
            this._commitText(value);
        }
    }
    _insert(node) {
        return wrap(wrap(this._$startNode).parentNode).insertBefore(node, this._$endNode);
    }
    _commitNode(value) {
        if (this._$committedValue !== value) {
            this._$clear();
            if (ENABLE_EXTRA_SECURITY_HOOKS && sanitizerFactoryInternal !== noopSanitizer) {
                var _this__$startNode_parentNode;
                const parentNodeName = (_this__$startNode_parentNode = this._$startNode.parentNode) === null || _this__$startNode_parentNode === void 0 ? void 0 : _this__$startNode_parentNode.nodeName;
                if (parentNodeName === 'STYLE' || parentNodeName === 'SCRIPT') {
                    let message = 'Forbidden';
                    if (DEV_MODE) {
                        if (parentNodeName === 'STYLE') {
                            message = "Lit does not support binding inside style nodes. " + "This is a security risk, as style injection attacks can " + "exfiltrate data and spoof UIs. " + "Consider instead using css`...` literals " + "to compose styles, and do dynamic styling with " + "css custom properties, ::parts, <slot>s, " + "and by mutating the DOM rather than stylesheets.";
                        } else {
                            message = "Lit does not support binding inside script nodes. " + "This is a security risk, as it could allow arbitrary " + "code execution.";
                        }
                    }
                    throw new Error(message);
                }
            }
            debugLogEvent && debugLogEvent({
                kind: 'commit node',
                start: this._$startNode,
                parent: this._$parent,
                value: value,
                options: this.options
            });
            this._$committedValue = this._insert(value);
        }
    }
    _commitText(value) {
        // If the committed value is a primitive it means we called _commitText on
        // the previous render, and we know that this._$startNode.nextSibling is a
        // Text node. We can now just replace the text content (.data) of the node.
        if (this._$committedValue !== nothing && isPrimitive(this._$committedValue)) {
            const node = wrap(this._$startNode).nextSibling;
            if ("TURBOPACK compile-time truthy", 1) {
                if (this._textSanitizer === undefined) {
                    this._textSanitizer = createSanitizer(node, 'data', 'property');
                }
                value = this._textSanitizer(value);
            }
            debugLogEvent && debugLogEvent({
                kind: 'commit text',
                node,
                value,
                options: this.options
            });
            node.data = value;
        } else {
            if ("TURBOPACK compile-time truthy", 1) {
                const textNode = d.createTextNode('');
                this._commitNode(textNode);
                // When setting text content, for security purposes it matters a lot
                // what the parent is. For example, <style> and <script> need to be
                // handled with care, while <span> does not. So first we need to put a
                // text node into the document, then we can sanitize its content.
                if (this._textSanitizer === undefined) {
                    this._textSanitizer = createSanitizer(textNode, 'data', 'property');
                }
                value = this._textSanitizer(value);
                debugLogEvent && debugLogEvent({
                    kind: 'commit text',
                    node: textNode,
                    value,
                    options: this.options
                });
                textNode.data = value;
            } else //TURBOPACK unreachable
            ;
        }
        this._$committedValue = value;
    }
    _commitTemplateResult(result) {
        var _this__$committedValue;
        // This property needs to remain unminified.
        const { values, ['_$litType$']: type } = result;
        // If $litType$ is a number, result is a plain TemplateResult and we get
        // the template from the template cache. If not, result is a
        // CompiledTemplateResult and _$litType$ is a CompiledTemplate and we need
        // to create the <template> element the first time we see it.
        const template = typeof type === 'number' ? this._$getTemplate(result) : (type.el === undefined && (type.el = Template.createElement(trustFromTemplateString(type.h, type.h[0]), this.options)), type);
        if (((_this__$committedValue = this._$committedValue) === null || _this__$committedValue === void 0 ? void 0 : _this__$committedValue._$template) === template) {
            debugLogEvent && debugLogEvent({
                kind: 'template updating',
                template,
                instance: this._$committedValue,
                parts: this._$committedValue._$parts,
                options: this.options,
                values
            });
            this._$committedValue._update(values);
        } else {
            const instance = new TemplateInstance(template, this);
            const fragment = instance._clone(this.options);
            debugLogEvent && debugLogEvent({
                kind: 'template instantiated',
                template,
                instance,
                parts: instance._$parts,
                options: this.options,
                fragment,
                values
            });
            instance._update(values);
            debugLogEvent && debugLogEvent({
                kind: 'template instantiated and updated',
                template,
                instance,
                parts: instance._$parts,
                options: this.options,
                fragment,
                values
            });
            this._commitNode(fragment);
            this._$committedValue = instance;
        }
    }
    // Overridden via `litHtmlPolyfillSupport` to provide platform support.
    /** @internal */ _$getTemplate(result) {
        let template = templateCache.get(result.strings);
        if (template === undefined) {
            templateCache.set(result.strings, template = new Template(result));
        }
        return template;
    }
    _commitIterable(value) {
        // For an Iterable, we create a new InstancePart per item, then set its
        // value to the item. This is a little bit of overhead for every item in
        // an Iterable, but it lets us recurse easily and efficiently update Arrays
        // of TemplateResults that will be commonly returned from expressions like:
        // array.map((i) => html`${i}`), by reusing existing TemplateInstances.
        // If value is an array, then the previous render was of an
        // iterable and value will contain the ChildParts from the previous
        // render. If value is not an array, clear this part and make a new
        // array for ChildParts.
        if (!isArray(this._$committedValue)) {
            this._$committedValue = [];
            this._$clear();
        }
        // Lets us keep track of how many items we stamped so we can clear leftover
        // items from a previous render
        const itemParts = this._$committedValue;
        let partIndex = 0;
        let itemPart;
        for (const item of value){
            if (partIndex === itemParts.length) {
                // If no existing part, create a new one
                // TODO (justinfagnani): test perf impact of always creating two parts
                // instead of sharing parts between nodes
                // https://github.com/lit/lit/issues/1266
                itemParts.push(itemPart = new ChildPart(this._insert(createMarker()), this._insert(createMarker()), this, this.options));
            } else {
                // Reuse an existing part
                itemPart = itemParts[partIndex];
            }
            itemPart._$setValue(item);
            partIndex++;
        }
        if (partIndex < itemParts.length) {
            // itemParts always have end nodes
            this._$clear(itemPart && wrap(itemPart._$endNode).nextSibling, partIndex);
            // Truncate the parts array so _value reflects the current state
            itemParts.length = partIndex;
        }
    }
    /**
     * Removes the nodes contained within this Part from the DOM.
     *
     * @param start Start node to clear from, for clearing a subset of the part's
     *     DOM (used when truncating iterables)
     * @param from  When `start` is specified, the index within the iterable from
     *     which ChildParts are being removed, used for disconnecting directives
     *     in those Parts.
     *
     * @internal
     */ _$clear() {
        let start = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : wrap(this._$startNode).nextSibling, from = arguments.length > 1 ? arguments[1] : void 0;
        var _this__$notifyConnectionChanged, _this;
        (_this__$notifyConnectionChanged = (_this = this)._$notifyConnectionChanged) === null || _this__$notifyConnectionChanged === void 0 ? void 0 : _this__$notifyConnectionChanged.call(_this, false, true, from);
        while(start !== this._$endNode){
            // The non-null assertion is safe because if _$startNode.nextSibling is
            // null, then _$endNode is also null, and we would not have entered this
            // loop.
            const n = wrap(start).nextSibling;
            wrap(start).remove();
            start = n;
        }
    }
    /**
     * Implementation of RootPart's `isConnected`. Note that this method
     * should only be called on `RootPart`s (the `ChildPart` returned from a
     * top-level `render()` call). It has no effect on non-root ChildParts.
     * @param isConnected Whether to set
     * @internal
     */ setConnected(isConnected) {
        if (this._$parent === undefined) {
            var _this__$notifyConnectionChanged, _this;
            this.__isConnected = isConnected;
            (_this__$notifyConnectionChanged = (_this = this)._$notifyConnectionChanged) === null || _this__$notifyConnectionChanged === void 0 ? void 0 : _this__$notifyConnectionChanged.call(_this, isConnected);
        } else if ("TURBOPACK compile-time truthy", 1) {
            throw new Error('part.setConnected() may only be called on a ' + 'RootPart returned from render().');
        }
    }
    constructor(startNode, endNode, parent, options){
        this.type = CHILD_PART;
        this._$committedValue = nothing;
        // The following fields will be patched onto ChildParts when required by
        // AsyncDirective
        /** @internal */ this._$disconnectableChildren = undefined;
        this._$startNode = startNode;
        this._$endNode = endNode;
        this._$parent = parent;
        this.options = options;
        var _options_isConnected;
        // Note __isConnected is only ever accessed on RootParts (i.e. when there is
        // no _$parent); the value on a non-root-part is "don't care", but checking
        // for parent would be more code
        this.__isConnected = (_options_isConnected = options === null || options === void 0 ? void 0 : options.isConnected) !== null && _options_isConnected !== void 0 ? _options_isConnected : true;
        if ("TURBOPACK compile-time truthy", 1) {
            // Explicitly initialize for consistent class shape.
            this._textSanitizer = undefined;
        }
    }
}
class AttributePart {
    get tagName() {
        return this.element.tagName;
    }
    // See comment in Disconnectable interface for why this is a getter
    get _$isConnected() {
        return this._$parent._$isConnected;
    }
    /**
     * Sets the value of this part by resolving the value from possibly multiple
     * values and static strings and committing it to the DOM.
     * If this part is single-valued, `this._strings` will be undefined, and the
     * method will be called with a single value argument. If this part is
     * multi-value, `this._strings` will be defined, and the method is called
     * with the value array of the part's owning TemplateInstance, and an offset
     * into the value array from which the values should be read.
     * This method is overloaded this way to eliminate short-lived array slices
     * of the template instance values, and allow a fast-path for single-valued
     * parts.
     *
     * @param value The part value, or an array of values for multi-valued parts
     * @param valueIndex the index to start reading values from. `undefined` for
     *   single-valued parts
     * @param noCommit causes the part to not commit its value to the DOM. Used
     *   in hydration to prime attribute parts with their first-rendered value,
     *   but not set the attribute, and in SSR to no-op the DOM operation and
     *   capture the value for serialization.
     *
     * @internal
     */ _$setValue(value) {
        let directiveParent = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this, valueIndex = arguments.length > 2 ? arguments[2] : void 0, noCommit = arguments.length > 3 ? arguments[3] : void 0;
        const strings = this.strings;
        // Whether any of the values has changed, for dirty-checking
        let change = false;
        if (strings === undefined) {
            // Single-value binding case
            value = resolveDirective(this, value, directiveParent, 0);
            change = !isPrimitive(value) || value !== this._$committedValue && value !== noChange;
            if (change) {
                this._$committedValue = value;
            }
        } else {
            // Interpolation case
            const values = value;
            value = strings[0];
            let i, v;
            for(i = 0; i < strings.length - 1; i++){
                v = resolveDirective(this, values[valueIndex + i], directiveParent, i);
                if (v === noChange) {
                    // If the user-provided value is `noChange`, use the previous value
                    v = this._$committedValue[i];
                }
                change || (change = !isPrimitive(v) || v !== this._$committedValue[i]);
                if (v === nothing) {
                    value = nothing;
                } else if (value !== nothing) {
                    value += (v !== null && v !== void 0 ? v : '') + strings[i + 1];
                }
                // We always record each value, even if one is `nothing`, for future
                // change detection.
                this._$committedValue[i] = v;
            }
        }
        if (change && !noCommit) {
            this._commitValue(value);
        }
    }
    /** @internal */ _commitValue(value) {
        if (value === nothing) {
            wrap(this.element).removeAttribute(this.name);
        } else {
            if ("TURBOPACK compile-time truthy", 1) {
                if (this._sanitizer === undefined) {
                    this._sanitizer = sanitizerFactoryInternal(this.element, this.name, 'attribute');
                }
                value = this._sanitizer(value !== null && value !== void 0 ? value : '');
            }
            debugLogEvent && debugLogEvent({
                kind: 'commit attribute',
                element: this.element,
                name: this.name,
                value,
                options: this.options
            });
            wrap(this.element).setAttribute(this.name, value !== null && value !== void 0 ? value : '');
        }
    }
    constructor(element, name, strings, parent, options){
        this.type = ATTRIBUTE_PART;
        /** @internal */ this._$committedValue = nothing;
        /** @internal */ this._$disconnectableChildren = undefined;
        this.element = element;
        this.name = name;
        this._$parent = parent;
        this.options = options;
        if (strings.length > 2 || strings[0] !== '' || strings[1] !== '') {
            this._$committedValue = new Array(strings.length - 1).fill(new String());
            this.strings = strings;
        } else {
            this._$committedValue = nothing;
        }
        if ("TURBOPACK compile-time truthy", 1) {
            this._sanitizer = undefined;
        }
    }
}
class PropertyPart extends AttributePart {
    /** @internal */ _commitValue(value) {
        if ("TURBOPACK compile-time truthy", 1) {
            if (this._sanitizer === undefined) {
                this._sanitizer = sanitizerFactoryInternal(this.element, this.name, 'property');
            }
            value = this._sanitizer(value);
        }
        debugLogEvent && debugLogEvent({
            kind: 'commit property',
            element: this.element,
            name: this.name,
            value,
            options: this.options
        });
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        this.element[this.name] = value === nothing ? undefined : value;
    }
    constructor(){
        super(...arguments);
        this.type = PROPERTY_PART;
    }
}
class BooleanAttributePart extends AttributePart {
    /** @internal */ _commitValue(value) {
        debugLogEvent && debugLogEvent({
            kind: 'commit boolean attribute',
            element: this.element,
            name: this.name,
            value: !!(value && value !== nothing),
            options: this.options
        });
        wrap(this.element).toggleAttribute(this.name, !!value && value !== nothing);
    }
    constructor(){
        super(...arguments);
        this.type = BOOLEAN_ATTRIBUTE_PART;
    }
}
class EventPart extends AttributePart {
    // EventPart does not use the base _$setValue/_resolveValue implementation
    // since the dirty checking is more complex
    /** @internal */ _$setValue(newListener) {
        let directiveParent = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this;
        var _resolveDirective;
        newListener = (_resolveDirective = resolveDirective(this, newListener, directiveParent, 0)) !== null && _resolveDirective !== void 0 ? _resolveDirective : nothing;
        if (newListener === noChange) {
            return;
        }
        const oldListener = this._$committedValue;
        // If the new value is nothing or any options change we have to remove the
        // part as a listener.
        const shouldRemoveListener = newListener === nothing && oldListener !== nothing || newListener.capture !== oldListener.capture || newListener.once !== oldListener.once || newListener.passive !== oldListener.passive;
        // If the new value is not nothing and we removed the listener, we have
        // to add the part as a listener.
        const shouldAddListener = newListener !== nothing && (oldListener === nothing || shouldRemoveListener);
        debugLogEvent && debugLogEvent({
            kind: 'commit event listener',
            element: this.element,
            name: this.name,
            value: newListener,
            options: this.options,
            removeListener: shouldRemoveListener,
            addListener: shouldAddListener,
            oldListener
        });
        if (shouldRemoveListener) {
            this.element.removeEventListener(this.name, this, oldListener);
        }
        if (shouldAddListener) {
            this.element.addEventListener(this.name, this, newListener);
        }
        this._$committedValue = newListener;
    }
    handleEvent(event) {
        if (typeof this._$committedValue === 'function') {
            var _this_options;
            var _this_options_host;
            this._$committedValue.call((_this_options_host = (_this_options = this.options) === null || _this_options === void 0 ? void 0 : _this_options.host) !== null && _this_options_host !== void 0 ? _this_options_host : this.element, event);
        } else {
            this._$committedValue.handleEvent(event);
        }
    }
    constructor(element, name, strings, parent, options){
        super(element, name, strings, parent, options);
        this.type = EVENT_PART;
        if (DEV_MODE && this.strings !== undefined) {
            throw new Error("A `<".concat(element.localName, ">` has a `@").concat(name, "=...` listener with ") + 'invalid content. Event listeners in templates must have exactly ' + 'one expression and no surrounding text.');
        }
    }
}
class ElementPart {
    // See comment in Disconnectable interface for why this is a getter
    get _$isConnected() {
        return this._$parent._$isConnected;
    }
    _$setValue(value) {
        debugLogEvent && debugLogEvent({
            kind: 'commit to element binding',
            element: this.element,
            value,
            options: this.options
        });
        resolveDirective(this, value);
    }
    constructor(element, parent, options){
        this.element = element;
        this.type = ELEMENT_PART;
        /** @internal */ this._$disconnectableChildren = undefined;
        this._$parent = parent;
        this.options = options;
    }
}
const _$LH = {
    // Used in lit-ssr
    _boundAttributeSuffix: boundAttributeSuffix,
    _marker: marker,
    _markerMatch: markerMatch,
    _HTML_RESULT: HTML_RESULT,
    _getTemplateHtml: getTemplateHtml,
    // Used in tests and private-ssr-support
    _TemplateInstance: TemplateInstance,
    _isIterable: isIterable,
    _resolveDirective: resolveDirective,
    _ChildPart: ChildPart,
    _AttributePart: AttributePart,
    _BooleanAttributePart: BooleanAttributePart,
    _EventPart: EventPart,
    _PropertyPart: PropertyPart,
    _ElementPart: ElementPart
};
// Apply polyfills if available
const polyfillSupport = ("TURBOPACK compile-time truthy", 1) ? global.litHtmlPolyfillSupportDevMode : "TURBOPACK unreachable";
polyfillSupport === null || polyfillSupport === void 0 ? void 0 : polyfillSupport(Template, ChildPart);
var _litHtmlVersions;
// IMPORTANT: do not change the property name or the assignment expression.
// This line will be used in regexes to search for lit-html usage.
((_litHtmlVersions = (_global = global).litHtmlVersions) !== null && _litHtmlVersions !== void 0 ? _litHtmlVersions : _global.litHtmlVersions = []).push('3.3.1');
if (DEV_MODE && global.litHtmlVersions.length > 1) {
    queueMicrotask(()=>{
        issueWarning('multiple-versions', "Multiple versions of Lit loaded. " + "Loading multiple versions is not recommended.");
    });
}
const render = (value, container, options)=>{
    if (DEV_MODE && container == null) {
        // Give a clearer error message than
        //     Uncaught TypeError: Cannot read properties of null (reading
        //     '_$litPart$')
        // which reads like an internal Lit error.
        throw new TypeError("The container to render into may not be ".concat(container));
    }
    const renderId = ("TURBOPACK compile-time truthy", 1) ? debugLogRenderId++ : "TURBOPACK unreachable";
    var _options_renderBefore;
    const partOwnerNode = (_options_renderBefore = options === null || options === void 0 ? void 0 : options.renderBefore) !== null && _options_renderBefore !== void 0 ? _options_renderBefore : container;
    // This property needs to remain unminified.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let part = partOwnerNode['_$litPart$'];
    debugLogEvent && debugLogEvent({
        kind: 'begin render',
        id: renderId,
        value,
        container,
        options,
        part
    });
    if (part === undefined) {
        var _options_renderBefore1;
        const endNode = (_options_renderBefore1 = options === null || options === void 0 ? void 0 : options.renderBefore) !== null && _options_renderBefore1 !== void 0 ? _options_renderBefore1 : null;
        // This property needs to remain unminified.
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        partOwnerNode['_$litPart$'] = part = new ChildPart(container.insertBefore(createMarker(), endNode), endNode, undefined, options !== null && options !== void 0 ? options : {});
    }
    part._$setValue(value);
    debugLogEvent && debugLogEvent({
        kind: 'end render',
        id: renderId,
        value,
        container,
        options,
        part
    });
    return part;
};
if ("TURBOPACK compile-time truthy", 1) {
    render.setSanitizer = setSanitizer;
    render.createSanitizer = createSanitizer;
    if ("TURBOPACK compile-time truthy", 1) {
        render._testOnlyClearSanitizerFactoryDoNotCallOrElse = _testOnlyClearSanitizerFactoryDoNotCallOrElse;
    }
} //# sourceMappingURL=lit-html.js.map
}),
"[project]/frontend/node_modules/@reown/appkit-ui/node_modules/lit-html/development/is-server.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ /**
 * @fileoverview
 *
 * This file exports a boolean const whose value will depend on what environment
 * the module is being imported from.
 */ __turbopack_context__.s([
    "isServer",
    ()=>isServer
]);
const NODE_MODE = false;
const isServer = NODE_MODE; //# sourceMappingURL=is-server.js.map
}),
"[project]/frontend/node_modules/@reown/appkit-ui/node_modules/lit-element/development/lit-element.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ /**
 * The main LitElement module, which defines the {@linkcode LitElement} base
 * class and related APIs.
 *
 * LitElement components can define a template and a set of observed
 * properties. Changing an observed property triggers a re-render of the
 * element.
 *
 * Import {@linkcode LitElement} and {@linkcode html} from this module to
 * create a component:
 *
 *  ```js
 * import {LitElement, html} from 'lit-element';
 *
 * class MyElement extends LitElement {
 *
 *   // Declare observed properties
 *   static get properties() {
 *     return {
 *       adjective: {}
 *     }
 *   }
 *
 *   constructor() {
 *     this.adjective = 'awesome';
 *   }
 *
 *   // Define the element's template
 *   render() {
 *     return html`<p>your ${adjective} template here</p>`;
 *   }
 * }
 *
 * customElements.define('my-element', MyElement);
 * ```
 *
 * `LitElement` extends {@linkcode ReactiveElement} and adds lit-html
 * templating. The `ReactiveElement` class is provided for users that want to
 * build their own custom element base classes that don't use lit-html.
 *
 * @packageDocumentation
 */ __turbopack_context__.s([
    "LitElement",
    ()=>LitElement,
    "_$LE",
    ()=>_$LE
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$reactive$2d$element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/@reown/appkit-ui/node_modules/@lit/reactive-element/development/reactive-element.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@reown/appkit-ui/node_modules/lit-html/development/lit-html.js [app-client] (ecmascript)");
var // Install hydration if available
_global_litElementHydrateSupport;
var _global;
;
;
;
;
/*
 * When using Closure Compiler, JSCompiler_renameProperty(property, object) is
 * replaced at compile time by the munged name for object[property]. We cannot
 * alias this function, so we have to use a small shim that has the same
 * behavior when not compiling.
 */ /*@__INLINE__*/ const JSCompiler_renameProperty = (prop, _obj)=>prop;
const DEV_MODE = true;
// Allows minifiers to rename references to globalThis
const global = globalThis;
let issueWarning;
if ("TURBOPACK compile-time truthy", 1) {
    var // Ensure warnings are issued only 1x, even if multiple versions of Lit
    // are loaded.
    _global1;
    var _litIssuedWarnings;
    (_litIssuedWarnings = (_global1 = global).litIssuedWarnings) !== null && _litIssuedWarnings !== void 0 ? _litIssuedWarnings : _global1.litIssuedWarnings = new Set();
    /**
     * Issue a warning if we haven't already, based either on `code` or `warning`.
     * Warnings are disabled automatically only by `warning`; disabling via `code`
     * can be done by users.
     */ issueWarning = (code, warning)=>{
        warning += " See https://lit.dev/msg/".concat(code, " for more information.");
        if (!global.litIssuedWarnings.has(warning) && !global.litIssuedWarnings.has(code)) {
            console.warn(warning);
            global.litIssuedWarnings.add(warning);
        }
    };
}
class LitElement extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$reactive$2d$element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ReactiveElement"] {
    /**
     * @category rendering
     */ createRenderRoot() {
        var // When adoptedStyleSheets are shimmed, they are inserted into the
        // shadowRoot by createRenderRoot. Adjust the renderBefore node so that
        // any styles in Lit content render before adoptedStyleSheets. This is
        // important so that adoptedStyleSheets have precedence over styles in
        // the shadowRoot.
        _this_renderOptions;
        const renderRoot = super.createRenderRoot();
        var _renderBefore;
        (_renderBefore = (_this_renderOptions = this.renderOptions).renderBefore) !== null && _renderBefore !== void 0 ? _renderBefore : _this_renderOptions.renderBefore = renderRoot.firstChild;
        return renderRoot;
    }
    /**
     * Updates the element. This method reflects property values to attributes
     * and calls `render` to render DOM via lit-html. Setting properties inside
     * this method will *not* trigger another update.
     * @param changedProperties Map of changed properties with old values
     * @category updates
     */ update(changedProperties) {
        // Setting properties in `render` should not trigger an update. Since
        // updates are allowed after super.update, it's important to call `render`
        // before that.
        const value = this.render();
        if (!this.hasUpdated) {
            this.renderOptions.isConnected = this.isConnected;
        }
        super.update(changedProperties);
        this.__childPart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["render"])(value, this.renderRoot, this.renderOptions);
    }
    /**
     * Invoked when the component is added to the document's DOM.
     *
     * In `connectedCallback()` you should setup tasks that should only occur when
     * the element is connected to the document. The most common of these is
     * adding event listeners to nodes external to the element, like a keydown
     * event handler added to the window.
     *
     * ```ts
     * connectedCallback() {
     *   super.connectedCallback();
     *   addEventListener('keydown', this._handleKeydown);
     * }
     * ```
     *
     * Typically, anything done in `connectedCallback()` should be undone when the
     * element is disconnected, in `disconnectedCallback()`.
     *
     * @category lifecycle
     */ connectedCallback() {
        var _this___childPart;
        super.connectedCallback();
        (_this___childPart = this.__childPart) === null || _this___childPart === void 0 ? void 0 : _this___childPart.setConnected(true);
    }
    /**
     * Invoked when the component is removed from the document's DOM.
     *
     * This callback is the main signal to the element that it may no longer be
     * used. `disconnectedCallback()` should ensure that nothing is holding a
     * reference to the element (such as event listeners added to nodes external
     * to the element), so that it is free to be garbage collected.
     *
     * ```ts
     * disconnectedCallback() {
     *   super.disconnectedCallback();
     *   window.removeEventListener('keydown', this._handleKeydown);
     * }
     * ```
     *
     * An element may be re-connected after being disconnected.
     *
     * @category lifecycle
     */ disconnectedCallback() {
        var _this___childPart;
        super.disconnectedCallback();
        (_this___childPart = this.__childPart) === null || _this___childPart === void 0 ? void 0 : _this___childPart.setConnected(false);
    }
    /**
     * Invoked on each update to perform rendering tasks. This method may return
     * any value renderable by lit-html's `ChildPart` - typically a
     * `TemplateResult`. Setting properties inside this method will *not* trigger
     * the element to update.
     * @category rendering
     */ render() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["noChange"];
    }
    constructor(){
        super(...arguments);
        /**
         * @category rendering
         */ this.renderOptions = {
            host: this
        };
        this.__childPart = undefined;
    }
}
// This property needs to remain unminified.
LitElement['_$litElement$'] = true;
/**
 * Ensure this class is marked as `finalized` as an optimization ensuring
 * it will not needlessly try to `finalize`.
 *
 * Note this property name is a string to prevent breaking Closure JS Compiler
 * optimizations. See @lit/reactive-element for more information.
 */ LitElement[JSCompiler_renameProperty('finalized', LitElement)] = true;
(_global_litElementHydrateSupport = global.litElementHydrateSupport) === null || _global_litElementHydrateSupport === void 0 ? void 0 : _global_litElementHydrateSupport.call(global, {
    LitElement
});
// Apply polyfills if available
const polyfillSupport = ("TURBOPACK compile-time truthy", 1) ? global.litElementPolyfillSupportDevMode : "TURBOPACK unreachable";
polyfillSupport === null || polyfillSupport === void 0 ? void 0 : polyfillSupport({
    LitElement
});
const _$LE = {
    _$attributeToProperty: (el, name, value)=>{
        // eslint-disable-next-line
        el._$attributeToProperty(name, value);
    },
    // eslint-disable-next-line
    _$changedProperties: (el)=>el._$changedProperties
};
var _litElementVersions;
// IMPORTANT: do not change the property name or the assignment expression.
// This line will be used in regexes to search for LitElement usage.
((_litElementVersions = (_global = global).litElementVersions) !== null && _litElementVersions !== void 0 ? _litElementVersions : _global.litElementVersions = []).push('4.2.1');
if (DEV_MODE && global.litElementVersions.length > 1) {
    queueMicrotask(()=>{
        issueWarning('multiple-versions', "Multiple versions of Lit loaded. Loading multiple versions " + "is not recommended.");
    });
} //# sourceMappingURL=lit-element.js.map
}),
"[project]/frontend/node_modules/@reown/appkit-ui/node_modules/lit/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$reactive$2d$element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/@reown/appkit-ui/node_modules/@lit/reactive-element/development/reactive-element.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@reown/appkit-ui/node_modules/lit-html/development/lit-html.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$node_modules$2f$lit$2d$element$2f$development$2f$lit$2d$element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/@reown/appkit-ui/node_modules/lit-element/development/lit-element.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$node_modules$2f$lit$2d$html$2f$development$2f$is$2d$server$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@reown/appkit-ui/node_modules/lit-html/development/is-server.js [app-client] (ecmascript)"); //# sourceMappingURL=index.js.map
;
;
;
;
}),
"[project]/frontend/node_modules/dayjs/dayjs.min.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

!function(t, e) {
    ("TURBOPACK compile-time truthy", 1) ? module.exports = e() : "TURBOPACK unreachable";
}(/*TURBOPACK member replacement*/ __turbopack_context__.e, function() {
    "use strict";
    var t = 1e3, e = 6e4, n = 36e5, r = "millisecond", i = "second", s = "minute", u = "hour", a = "day", o = "week", c = "month", f = "quarter", h = "year", d = "date", l = "Invalid Date", $ = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, y = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, M = {
        name: "en",
        weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
        ordinal: function(t) {
            var e = [
                "th",
                "st",
                "nd",
                "rd"
            ], n = t % 100;
            return "[" + t + (e[(n - 20) % 10] || e[n] || e[0]) + "]";
        }
    }, m = function(t, e, n) {
        var r = String(t);
        return !r || r.length >= e ? t : "" + Array(e + 1 - r.length).join(n) + t;
    }, v = {
        s: m,
        z: function(t) {
            var e = -t.utcOffset(), n = Math.abs(e), r = Math.floor(n / 60), i = n % 60;
            return (e <= 0 ? "+" : "-") + m(r, 2, "0") + ":" + m(i, 2, "0");
        },
        m: function t(e, n) {
            if (e.date() < n.date()) return -t(n, e);
            var r = 12 * (n.year() - e.year()) + (n.month() - e.month()), i = e.clone().add(r, c), s = n - i < 0, u = e.clone().add(r + (s ? -1 : 1), c);
            return +(-(r + (n - i) / (s ? i - u : u - i)) || 0);
        },
        a: function(t) {
            return t < 0 ? Math.ceil(t) || 0 : Math.floor(t);
        },
        p: function(t) {
            return ({
                M: c,
                y: h,
                w: o,
                d: a,
                D: d,
                h: u,
                m: s,
                s: i,
                ms: r,
                Q: f
            })[t] || String(t || "").toLowerCase().replace(/s$/, "");
        },
        u: function(t) {
            return void 0 === t;
        }
    }, g = "en", D = {};
    D[g] = M;
    var p = "$isDayjsObject", S = function(t) {
        return t instanceof _ || !(!t || !t[p]);
    }, w = function t(e, n, r) {
        var i;
        if (!e) return g;
        if ("string" == typeof e) {
            var s = e.toLowerCase();
            D[s] && (i = s), n && (D[s] = n, i = s);
            var u = e.split("-");
            if (!i && u.length > 1) return t(u[0]);
        } else {
            var a = e.name;
            D[a] = e, i = a;
        }
        return !r && i && (g = i), i || !r && g;
    }, O = function(t, e) {
        if (S(t)) return t.clone();
        var n = "object" == typeof e ? e : {};
        return n.date = t, n.args = arguments, new _(n);
    }, b = v;
    b.l = w, b.i = S, b.w = function(t, e) {
        return O(t, {
            locale: e.$L,
            utc: e.$u,
            x: e.$x,
            $offset: e.$offset
        });
    };
    var _ = function() {
        function M(t) {
            this.$L = w(t.locale, null, !0), this.parse(t), this.$x = this.$x || t.x || {}, this[p] = !0;
        }
        var m = M.prototype;
        return m.parse = function(t) {
            this.$d = function(t) {
                var e = t.date, n = t.utc;
                if (null === e) return new Date(NaN);
                if (b.u(e)) return new Date;
                if (e instanceof Date) return new Date(e);
                if ("string" == typeof e && !/Z$/i.test(e)) {
                    var r = e.match($);
                    if (r) {
                        var i = r[2] - 1 || 0, s = (r[7] || "0").substring(0, 3);
                        return n ? new Date(Date.UTC(r[1], i, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, s)) : new Date(r[1], i, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, s);
                    }
                }
                return new Date(e);
            }(t), this.init();
        }, m.init = function() {
            var t = this.$d;
            this.$y = t.getFullYear(), this.$M = t.getMonth(), this.$D = t.getDate(), this.$W = t.getDay(), this.$H = t.getHours(), this.$m = t.getMinutes(), this.$s = t.getSeconds(), this.$ms = t.getMilliseconds();
        }, m.$utils = function() {
            return b;
        }, m.isValid = function() {
            return !(this.$d.toString() === l);
        }, m.isSame = function(t, e) {
            var n = O(t);
            return this.startOf(e) <= n && n <= this.endOf(e);
        }, m.isAfter = function(t, e) {
            return O(t) < this.startOf(e);
        }, m.isBefore = function(t, e) {
            return this.endOf(e) < O(t);
        }, m.$g = function(t, e, n) {
            return b.u(t) ? this[e] : this.set(n, t);
        }, m.unix = function() {
            return Math.floor(this.valueOf() / 1e3);
        }, m.valueOf = function() {
            return this.$d.getTime();
        }, m.startOf = function(t, e) {
            var n = this, r = !!b.u(e) || e, f = b.p(t), l = function(t, e) {
                var i = b.w(n.$u ? Date.UTC(n.$y, e, t) : new Date(n.$y, e, t), n);
                return r ? i : i.endOf(a);
            }, $ = function(t, e) {
                return b.w(n.toDate()[t].apply(n.toDate("s"), (r ? [
                    0,
                    0,
                    0,
                    0
                ] : [
                    23,
                    59,
                    59,
                    999
                ]).slice(e)), n);
            }, y = this.$W, M = this.$M, m = this.$D, v = "set" + (this.$u ? "UTC" : "");
            switch(f){
                case h:
                    return r ? l(1, 0) : l(31, 11);
                case c:
                    return r ? l(1, M) : l(0, M + 1);
                case o:
                    var g = this.$locale().weekStart || 0, D = (y < g ? y + 7 : y) - g;
                    return l(r ? m - D : m + (6 - D), M);
                case a:
                case d:
                    return $(v + "Hours", 0);
                case u:
                    return $(v + "Minutes", 1);
                case s:
                    return $(v + "Seconds", 2);
                case i:
                    return $(v + "Milliseconds", 3);
                default:
                    return this.clone();
            }
        }, m.endOf = function(t) {
            return this.startOf(t, !1);
        }, m.$set = function(t, e) {
            var n, o = b.p(t), f = "set" + (this.$u ? "UTC" : ""), l = (n = {}, n[a] = f + "Date", n[d] = f + "Date", n[c] = f + "Month", n[h] = f + "FullYear", n[u] = f + "Hours", n[s] = f + "Minutes", n[i] = f + "Seconds", n[r] = f + "Milliseconds", n)[o], $ = o === a ? this.$D + (e - this.$W) : e;
            if (o === c || o === h) {
                var y = this.clone().set(d, 1);
                y.$d[l]($), y.init(), this.$d = y.set(d, Math.min(this.$D, y.daysInMonth())).$d;
            } else l && this.$d[l]($);
            return this.init(), this;
        }, m.set = function(t, e) {
            return this.clone().$set(t, e);
        }, m.get = function(t) {
            return this[b.p(t)]();
        }, m.add = function(r, f) {
            var d, l = this;
            r = Number(r);
            var $ = b.p(f), y = function(t) {
                var e = O(l);
                return b.w(e.date(e.date() + Math.round(t * r)), l);
            };
            if ($ === c) return this.set(c, this.$M + r);
            if ($ === h) return this.set(h, this.$y + r);
            if ($ === a) return y(1);
            if ($ === o) return y(7);
            var M = (d = {}, d[s] = e, d[u] = n, d[i] = t, d)[$] || 1, m = this.$d.getTime() + r * M;
            return b.w(m, this);
        }, m.subtract = function(t, e) {
            return this.add(-1 * t, e);
        }, m.format = function(t) {
            var e = this, n = this.$locale();
            if (!this.isValid()) return n.invalidDate || l;
            var r = t || "YYYY-MM-DDTHH:mm:ssZ", i = b.z(this), s = this.$H, u = this.$m, a = this.$M, o = n.weekdays, c = n.months, f = n.meridiem, h = function(t, n, i, s) {
                return t && (t[n] || t(e, r)) || i[n].slice(0, s);
            }, d = function(t) {
                return b.s(s % 12 || 12, t, "0");
            }, $ = f || function(t, e, n) {
                var r = t < 12 ? "AM" : "PM";
                return n ? r.toLowerCase() : r;
            };
            return r.replace(y, function(t, r) {
                return r || function(t) {
                    switch(t){
                        case "YY":
                            return String(e.$y).slice(-2);
                        case "YYYY":
                            return b.s(e.$y, 4, "0");
                        case "M":
                            return a + 1;
                        case "MM":
                            return b.s(a + 1, 2, "0");
                        case "MMM":
                            return h(n.monthsShort, a, c, 3);
                        case "MMMM":
                            return h(c, a);
                        case "D":
                            return e.$D;
                        case "DD":
                            return b.s(e.$D, 2, "0");
                        case "d":
                            return String(e.$W);
                        case "dd":
                            return h(n.weekdaysMin, e.$W, o, 2);
                        case "ddd":
                            return h(n.weekdaysShort, e.$W, o, 3);
                        case "dddd":
                            return o[e.$W];
                        case "H":
                            return String(s);
                        case "HH":
                            return b.s(s, 2, "0");
                        case "h":
                            return d(1);
                        case "hh":
                            return d(2);
                        case "a":
                            return $(s, u, !0);
                        case "A":
                            return $(s, u, !1);
                        case "m":
                            return String(u);
                        case "mm":
                            return b.s(u, 2, "0");
                        case "s":
                            return String(e.$s);
                        case "ss":
                            return b.s(e.$s, 2, "0");
                        case "SSS":
                            return b.s(e.$ms, 3, "0");
                        case "Z":
                            return i;
                    }
                    return null;
                }(t) || i.replace(":", "");
            });
        }, m.utcOffset = function() {
            return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
        }, m.diff = function(r, d, l) {
            var $, y = this, M = b.p(d), m = O(r), v = (m.utcOffset() - this.utcOffset()) * e, g = this - m, D = function() {
                return b.m(y, m);
            };
            switch(M){
                case h:
                    $ = D() / 12;
                    break;
                case c:
                    $ = D();
                    break;
                case f:
                    $ = D() / 3;
                    break;
                case o:
                    $ = (g - v) / 6048e5;
                    break;
                case a:
                    $ = (g - v) / 864e5;
                    break;
                case u:
                    $ = g / n;
                    break;
                case s:
                    $ = g / e;
                    break;
                case i:
                    $ = g / t;
                    break;
                default:
                    $ = g;
            }
            return l ? $ : b.a($);
        }, m.daysInMonth = function() {
            return this.endOf(c).$D;
        }, m.$locale = function() {
            return D[this.$L];
        }, m.locale = function(t, e) {
            if (!t) return this.$L;
            var n = this.clone(), r = w(t, e, !0);
            return r && (n.$L = r), n;
        }, m.clone = function() {
            return b.w(this.$d, this);
        }, m.toDate = function() {
            return new Date(this.valueOf());
        }, m.toJSON = function() {
            return this.isValid() ? this.toISOString() : null;
        }, m.toISOString = function() {
            return this.$d.toISOString();
        }, m.toString = function() {
            return this.$d.toUTCString();
        }, M;
    }(), k = _.prototype;
    return O.prototype = k, [
        [
            "$ms",
            r
        ],
        [
            "$s",
            i
        ],
        [
            "$m",
            s
        ],
        [
            "$H",
            u
        ],
        [
            "$W",
            a
        ],
        [
            "$M",
            c
        ],
        [
            "$y",
            h
        ],
        [
            "$D",
            d
        ]
    ].forEach(function(t) {
        k[t[1]] = function(e) {
            return this.$g(e, t[0], t[1]);
        };
    }), O.extend = function(t, e) {
        return t.$i || (t(e, _, O), t.$i = !0), O;
    }, O.locale = w, O.isDayjs = S, O.unix = function(t) {
        return O(1e3 * t);
    }, O.en = D[g], O.Ls = D, O.p = {}, O;
});
}),
"[project]/frontend/node_modules/dayjs/locale/en.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

!function(e, n) {
    ("TURBOPACK compile-time truthy", 1) ? module.exports = n() : "TURBOPACK unreachable";
}(/*TURBOPACK member replacement*/ __turbopack_context__.e, function() {
    "use strict";
    return {
        name: "en",
        weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
        ordinal: function(e) {
            var n = [
                "th",
                "st",
                "nd",
                "rd"
            ], t = e % 100;
            return "[" + e + (n[(t - 20) % 10] || n[t] || n[0]) + "]";
        }
    };
});
}),
"[project]/frontend/node_modules/dayjs/plugin/relativeTime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

!function(r, e) {
    ("TURBOPACK compile-time truthy", 1) ? module.exports = e() : "TURBOPACK unreachable";
}(/*TURBOPACK member replacement*/ __turbopack_context__.e, function() {
    "use strict";
    return function(r, e, t) {
        r = r || {};
        var n = e.prototype, o = {
            future: "in %s",
            past: "%s ago",
            s: "a few seconds",
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years"
        };
        function i(r, e, t, o) {
            return n.fromToBase(r, e, t, o);
        }
        t.en.relativeTime = o, n.fromToBase = function(e, n, i, d, u) {
            for(var f, a, s, l = i.$locale().relativeTime || o, h = r.thresholds || [
                {
                    l: "s",
                    r: 44,
                    d: "second"
                },
                {
                    l: "m",
                    r: 89
                },
                {
                    l: "mm",
                    r: 44,
                    d: "minute"
                },
                {
                    l: "h",
                    r: 89
                },
                {
                    l: "hh",
                    r: 21,
                    d: "hour"
                },
                {
                    l: "d",
                    r: 35
                },
                {
                    l: "dd",
                    r: 25,
                    d: "day"
                },
                {
                    l: "M",
                    r: 45
                },
                {
                    l: "MM",
                    r: 10,
                    d: "month"
                },
                {
                    l: "y",
                    r: 17
                },
                {
                    l: "yy",
                    d: "year"
                }
            ], m = h.length, c = 0; c < m; c += 1){
                var y = h[c];
                y.d && (f = d ? t(e).diff(i, y.d, !0) : i.diff(e, y.d, !0));
                var p = (r.rounding || Math.round)(Math.abs(f));
                if (s = f > 0, p <= y.r || !y.r) {
                    p <= 1 && c > 0 && (y = h[c - 1]);
                    var v = l[y.l];
                    u && (p = u("" + p)), a = "string" == typeof v ? v.replace("%d", p) : v(p, n, y.l, s);
                    break;
                }
            }
            if (n) return a;
            var M = s ? l.future : l.past;
            return "function" == typeof M ? M(a) : M.replace("%s", a);
        }, n.to = function(r, e) {
            return i(r, e, this, !0);
        }, n.from = function(r, e) {
            return i(r, e, this);
        };
        var d = function(r) {
            return r.$u ? t.utc() : t();
        };
        n.toNow = function(r) {
            return this.to(d(this), r);
        }, n.fromNow = function(r) {
            return this.from(d(this), r);
        };
    };
});
}),
"[project]/frontend/node_modules/dayjs/plugin/updateLocale.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

!function(e, n) {
    ("TURBOPACK compile-time truthy", 1) ? module.exports = n() : "TURBOPACK unreachable";
}(/*TURBOPACK member replacement*/ __turbopack_context__.e, function() {
    "use strict";
    return function(e, n, t) {
        t.updateLocale = function(e, n) {
            var o = t.Ls[e];
            if (o) return (n ? Object.keys(n) : []).forEach(function(e) {
                o[e] = n[e];
            }), o;
        };
    };
});
}),
]);

//# sourceMappingURL=9e883_3988f82e._.js.map