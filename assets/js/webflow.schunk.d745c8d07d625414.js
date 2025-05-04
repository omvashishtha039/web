(self.webpackChunk = self.webpackChunk || []).push([
    ["678"], {
        7199: function(e) {
            "use strict";
            var t = window.jQuery,
                n = {},
                a = [],
                i = ".w-ix",
                c = {
                    reset: function(e, t) {
                        t.__wf_intro = null
                    },
                    intro: function(e, a) {
                        if (!a.__wf_intro) a.__wf_intro = !0, t(a).triggerHandler(n.types.INTRO)
                    },
                    outro: function(e, a) {
                        if (!!a.__wf_intro) a.__wf_intro = null, t(a).triggerHandler(n.types.OUTRO)
                    }
                };
            n.triggers = {}, n.types = {
                INTRO: "w-ix-intro" + i,
                OUTRO: "w-ix-outro" + i
            }, n.init = function() {
                for (var e = a.length, i = 0; i < e; i++) {
                    var o = a[i];
                    o[0](0, o[1])
                }
                a = [], t.extend(n.triggers, c)
            }, n.async = function() {
                for (var e in c) {
                    var t = c[e];
                    if (!!c.hasOwnProperty(e)) n.triggers[e] = function(e, n) {
                        a.push([t, n])
                    }
                }
            }, n.async(), e.exports = n
        },
        5134: function(e, t, n) {
            "use strict";
            var a = n(7199);

            function i(e, t) {
                var n = document.createEvent("CustomEvent");
                n.initCustomEvent(t, !0, !0, null), e.dispatchEvent(n)
            }
            var c = window.jQuery,
                o = {},
                d = ".w-ix";
            o.triggers = {}, o.types = {
                INTRO: "w-ix-intro" + d,
                OUTRO: "w-ix-outro" + d
            }, c.extend(o.triggers, {
                reset: function(e, t) {
                    a.triggers.reset(e, t)
                },
                intro: function(e, t) {
                    a.triggers.intro(e, t), i(t, "COMPONENT_ACTIVE")
                },
                outro: function(e, t) {
                    a.triggers.outro(e, t), i(t, "COMPONENT_INACTIVE")
                }
            }), e.exports = o
        },
        941: function(e, t, n) {
            "use strict";
            var a = n(3949),
                i = n(6011);
            i.setEnv(a.env), a.define("ix2", e.exports = function() {
                return i
            })
        },
        3946: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            ! function(e, t) {
                for (var n in t) Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: t[n]
                })
            }(t, {
                actionListPlaybackChanged: function() {
                    return H
                },
                animationFrameChanged: function() {
                    return D
                },
                clearRequested: function() {
                    return F
                },
                elementStateChanged: function() {
                    return w
                },
                eventListenerAdded: function() {
                    return U
                },
                eventStateChanged: function() {
                    return x
                },
                instanceAdded: function() {
                    return G
                },
                instanceRemoved: function() {
                    return B
                },
                instanceStarted: function() {
                    return X
                },
                mediaQueriesDefined: function() {
                    return j
                },
                parameterChanged: function() {
                    return k
                },
                playbackRequested: function() {
                    return V
                },
                previewRequested: function() {
                    return M
                },
                rawDataImported: function() {
                    return A
                },
                sessionInitialized: function() {
                    return S
                },
                sessionStarted: function() {
                    return C
                },
                sessionStopped: function() {
                    return v
                },
                stopRequested: function() {
                    return P
                },
                testFrameRendered: function() {
                    return h
                },
                viewportWidthChanged: function() {
                    return W
                }
            });
            let a = n(7087),
                i = n(9468),
                {
                    IX2_RAW_DATA_IMPORTED: c,
                    IX2_SESSION_INITIALIZED: o,
                    IX2_SESSION_STARTED: d,
                    IX2_SESSION_STOPPED: r,
                    IX2_PREVIEW_REQUESTED: l,
                    IX2_PLAYBACK_REQUESTED: f,
                    IX2_STOP_REQUESTED: s,
                    IX2_CLEAR_REQUESTED: u,
                    IX2_EVENT_LISTENER_ADDED: E,
                    IX2_TEST_FRAME_RENDERED: I,
                    IX2_EVENT_STATE_CHANGED: T,
                    IX2_ANIMATION_FRAME_CHANGED: y,
                    IX2_PARAMETER_CHANGED: p,
                    IX2_INSTANCE_ADDED: g,
                    IX2_INSTANCE_STARTED: b,
                    IX2_INSTANCE_REMOVED: O,
                    IX2_ELEMENT_STATE_CHANGED: m,
                    IX2_ACTION_LIST_PLAYBACK_CHANGED: R,
                    IX2_VIEWPORT_WIDTH_CHANGED: _,
                    IX2_MEDIA_QUERIES_DEFINED: N
                } = a.IX2EngineActionTypes,
                {
                    reifyState: L
                } = i.IX2VanillaUtils,
                A = e => ({
                    type: c,
                    payload: { ...L(e)
                    }
                }),
                S = ({
                    hasBoundaryNodes: e,
                    reducedMotion: t
                }) => ({
                    type: o,
                    payload: {
                        hasBoundaryNodes: e,
                        reducedMotion: t
                    }
                }),
                C = () => ({
                    type: d
                }),
                v = () => ({
                    type: r
                }),
                M = ({
                    rawData: e,
                    defer: t
                }) => ({
                    type: l,
                    payload: {
                        defer: t,
                        rawData: e
                    }
                }),
                V = ({
                    actionTypeId: e = a.ActionTypeConsts.GENERAL_START_ACTION,
                    actionListId: t,
                    actionItemId: n,
                    eventId: i,
                    allowEvents: c,
                    immediate: o,
                    testManual: d,
                    verbose: r,
                    rawData: l
                }) => ({
                    type: f,
                    payload: {
                        actionTypeId: e,
                        actionListId: t,
                        actionItemId: n,
                        testManual: d,
                        eventId: i,
                        allowEvents: c,
                        immediate: o,
                        verbose: r,
                        rawData: l
                    }
                }),
                P = e => ({
                    type: s,
                    payload: {
                        actionListId: e
                    }
                }),
                F = () => ({
                    type: u
                }),
                U = (e, t) => ({
                    type: E,
                    payload: {
                        target: e,
                        listenerParams: t
                    }
                }),
                h = (e = 1) => ({
                    type: I,
                    payload: {
                        step: e
                    }
                }),
                x = (e, t) => ({
                    type: T,
                    payload: {
                        stateKey: e,
                        newState: t
                    }
                }),
                D = (e, t) => ({
                    type: y,
                    payload: {
                        now: e,
                        parameters: t
                    }
                }),
                k = (e, t) => ({
                    type: p,
                    payload: {
                        key: e,
                        value: t
                    }
                }),
                G = e => ({
                    type: g,
                    payload: { ...e
                    }
                }),
                X = (e, t) => ({
                    type: b,
                    payload: {
                        instanceId: e,
                        time: t
                    }
                }),
                B = e => ({
                    type: O,
                    payload: {
                        instanceId: e
                    }
                }),
                w = (e, t, n, a) => ({
                    type: m,
                    payload: {
                        elementId: e,
                        actionTypeId: t,
                        current: n,
                        actionItem: a
                    }
                }),
                H = ({
                    actionListId: e,
                    isPlaying: t
                }) => ({
                    type: R,
                    payload: {
                        actionListId: e,
                        isPlaying: t
                    }
                }),
                W = ({
                    width: e,
                    mediaQueries: t
                }) => ({
                    type: _,
                    payload: {
                        width: e,
                        mediaQueries: t
                    }
                }),
                j = () => ({
                    type: N
                })
        },
        6011: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            ! function(e, t) {
                for (var n in t) Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: t[n]
                })
            }(t, {
                actions: function() {
                    return o
                },
                destroy: function() {
                    return s
                },
                init: function() {
                    return f
                },
                setEnv: function() {
                    return l
                },
                store: function() {
                    return r
                }
            });
            let a = n(9516),
                i = function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }(n(7243)),
                c = n(1970),
                o = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var n = d(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = {
                            __proto__: null
                        },
                        i = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var c in e)
                        if ("default" !== c && Object.prototype.hasOwnProperty.call(e, c)) {
                            var o = i ? Object.getOwnPropertyDescriptor(e, c) : null;
                            o && (o.get || o.set) ? Object.defineProperty(a, c, o) : a[c] = e[c]
                        }
                    return a.default = e, n && n.set(e, a), a
                }(n(3946));

            function d(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (d = function(e) {
                    return e ? n : t
                })(e)
            }
            let r = (0, a.createStore)(i.default);

            function l(e) {
                e() && (0, c.observeRequests)(r)
            }

            function f(e) {
                s(), (0, c.startEngine)({
                    store: r,
                    rawData: e,
                    allowEvents: !0
                })
            }

            function s() {
                (0, c.stopEngine)(r)
            }
        },
        5012: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            ! function(e, t) {
                for (var n in t) Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: t[n]
                })
            }(t, {
                elementContains: function() {
                    return p
                },
                getChildElements: function() {
                    return b
                },
                getClosestElement: function() {
                    return m
                },
                getProperty: function() {
                    return u
                },
                getQuerySelector: function() {
                    return I
                },
                getRefType: function() {
                    return R
                },
                getSiblingElements: function() {
                    return O
                },
                getStyle: function() {
                    return s
                },
                getValidDocument: function() {
                    return T
                },
                isSiblingNode: function() {
                    return g
                },
                matchSelector: function() {
                    return E
                },
                queryDocument: function() {
                    return y
                },
                setStyle: function() {
                    return f
                }
            });
            let a = n(9468),
                i = n(7087),
                {
                    ELEMENT_MATCHES: c
                } = a.IX2BrowserSupport,
                {
                    IX2_ID_DELIMITER: o,
                    HTML_ELEMENT: d,
                    PLAIN_OBJECT: r,
                    WF_PAGE: l
                } = i.IX2EngineConstants;

            function f(e, t, n) {
                e.style[t] = n
            }

            function s(e, t) {
                return t.startsWith("--") ? window.getComputedStyle(document.documentElement).getPropertyValue(t) : e.style instanceof CSSStyleDeclaration ? e.style[t] : void 0
            }

            function u(e, t) {
                return e[t]
            }

            function E(e) {
                return t => t[c](e)
            }

            function I({
                id: e,
                selector: t
            }) {
                if (e) {
                    let t = e;
                    if (-1 !== e.indexOf(o)) {
                        let n = e.split(o),
                            a = n[0];
                        if (t = n[1], a !== document.documentElement.getAttribute(l)) return null
                    }
                    return `[data-w-id="${t}"], [data-w-id^="${t}_instance"]`
                }
                return t
            }

            function T(e) {
                return null == e || e === document.documentElement.getAttribute(l) ? document : null
            }

            function y(e, t) {
                return Array.prototype.slice.call(document.querySelectorAll(t ? e + " " + t : e))
            }

            function p(e, t) {
                return e.contains(t)
            }

            function g(e, t) {
                return e !== t && e.parentNode === t.parentNode
            }

            function b(e) {
                let t = [];
                for (let n = 0, {
                        length: a
                    } = e || []; n < a; n++) {
                    let {
                        children: a
                    } = e[n], {
                        length: i
                    } = a;
                    if (!!i)
                        for (let e = 0; e < i; e++) t.push(a[e])
                }
                return t
            }

            function O(e = []) {
                let t = [],
                    n = [];
                for (let a = 0, {
                        length: i
                    } = e; a < i; a++) {
                    let {
                        parentNode: i
                    } = e[a];
                    if (!i || !i.children || !i.children.length || -1 !== n.indexOf(i)) continue;
                    n.push(i);
                    let c = i.firstElementChild;
                    for (; null != c;) - 1 === e.indexOf(c) && t.push(c), c = c.nextElementSibling
                }
                return t
            }
            let m = Element.prototype.closest ? (e, t) => document.documentElement.contains(e) ? e.closest(t) : null : (e, t) => {
                if (!document.documentElement.contains(e)) return null;
                let n = e;
                do {
                    if (n[c] && n[c](t)) return n;
                    n = n.parentNode
                } while (null != n);
                return null
            };

            function R(e) {
                return null != e && "object" == typeof e ? e instanceof Element ? d : r : null
            }
        },
        1970: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            ! function(e, t) {
                for (var n in t) Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: t[n]
                })
            }(t, {
                observeRequests: function() {
                    return $
                },
                startActionGroup: function() {
                    return eu
                },
                startEngine: function() {
                    return et
                },
                stopActionGroup: function() {
                    return es
                },
                stopAllActionGroups: function() {
                    return ef
                },
                stopEngine: function() {
                    return en
                }
            });
            let a = y(n(9777)),
                i = y(n(4738)),
                c = y(n(4659)),
                o = y(n(3452)),
                d = y(n(6633)),
                r = y(n(3729)),
                l = y(n(2397)),
                f = y(n(5082)),
                s = n(7087),
                u = n(9468),
                E = n(3946),
                I = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var n = p(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = {
                            __proto__: null
                        },
                        i = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var c in e)
                        if ("default" !== c && Object.prototype.hasOwnProperty.call(e, c)) {
                            var o = i ? Object.getOwnPropertyDescriptor(e, c) : null;
                            o && (o.get || o.set) ? Object.defineProperty(a, c, o) : a[c] = e[c]
                        }
                    return a.default = e, n && n.set(e, a), a
                }(n(5012)),
                T = y(n(8955));

            function y(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function p(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (p = function(e) {
                    return e ? n : t
                })(e)
            }
            let g = Object.keys(s.QuickEffectIds),
                b = e => g.includes(e),
                {
                    COLON_DELIMITER: O,
                    BOUNDARY_SELECTOR: m,
                    HTML_ELEMENT: R,
                    RENDER_GENERAL: _,
                    W_MOD_IX: N
                } = s.IX2EngineConstants,
                {
                    getAffectedElements: L,
                    getElementId: A,
                    getDestinationValues: S,
                    observeStore: C,
                    getInstanceId: v,
                    renderHTMLElement: M,
                    clearAllStyles: V,
                    getMaxDurationItemIndex: P,
                    getComputedStyle: F,
                    getInstanceOrigin: U,
                    reduceListToGroup: h,
                    shouldNamespaceEventParameter: x,
                    getNamespacedParameterId: D,
                    shouldAllowMediaQuery: k,
                    cleanupHTMLElement: G,
                    clearObjectCache: X,
                    stringifyTarget: B,
                    mediaQueriesEqual: w,
                    shallowEqual: H
                } = u.IX2VanillaUtils,
                {
                    isPluginType: W,
                    createPluginInstance: j,
                    getPluginDuration: z
                } = u.IX2VanillaPlugins,
                Q = navigator.userAgent,
                Y = Q.match(/iPad/i) || Q.match(/iPhone/);

            function $(e) {
                C({
                    store: e,
                    select: ({
                        ixRequest: e
                    }) => e.preview,
                    onChange: K
                }), C({
                    store: e,
                    select: ({
                        ixRequest: e
                    }) => e.playback,
                    onChange: Z
                }), C({
                    store: e,
                    select: ({
                        ixRequest: e
                    }) => e.stop,
                    onChange: J
                }), C({
                    store: e,
                    select: ({
                        ixRequest: e
                    }) => e.clear,
                    onChange: ee
                })
            }

            function K({
                rawData: e,
                defer: t
            }, n) {
                let a = () => {
                    et({
                        store: n,
                        rawData: e,
                        allowEvents: !0
                    }), q()
                };
                t ? setTimeout(a, 0) : a()
            }

            function q() {
                document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"))
            }

            function Z(e, t) {
                let {
                    actionTypeId: n,
                    actionListId: a,
                    actionItemId: i,
                    eventId: c,
                    allowEvents: o,
                    immediate: d,
                    testManual: r,
                    verbose: l = !0
                } = e, {
                    rawData: f
                } = e;
                if (a && i && f && d) {
                    let e = f.actionLists[a];
                    e && (f = h({
                        actionList: e,
                        actionItemId: i,
                        rawData: f
                    }))
                }
                if (et({
                        store: t,
                        rawData: f,
                        allowEvents: o,
                        testManual: r
                    }), a && n === s.ActionTypeConsts.GENERAL_START_ACTION || b(n)) {
                    es({
                        store: t,
                        actionListId: a
                    }), el({
                        store: t,
                        actionListId: a,
                        eventId: c
                    });
                    let e = eu({
                        store: t,
                        eventId: c,
                        actionListId: a,
                        immediate: d,
                        verbose: l
                    });
                    l && e && t.dispatch((0, E.actionListPlaybackChanged)({
                        actionListId: a,
                        isPlaying: !d
                    }))
                }
            }

            function J({
                actionListId: e
            }, t) {
                e ? es({
                    store: t,
                    actionListId: e
                }) : ef({
                    store: t
                }), en(t)
            }

            function ee(e, t) {
                en(t), V({
                    store: t,
                    elementApi: I
                })
            }

            function et({
                store: e,
                rawData: t,
                allowEvents: n,
                testManual: o
            }) {
                let {
                    ixSession: d
                } = e.getState();
                if (t && e.dispatch((0, E.rawDataImported)(t)), !d.active) {
                    if (e.dispatch((0, E.sessionInitialized)({
                            hasBoundaryNodes: !!document.querySelector(m),
                            reducedMotion: document.body.hasAttribute("data-wf-ix-vacation") && window.matchMedia("(prefers-reduced-motion)").matches
                        })), n && (function(e) {
                            let {
                                ixData: t
                            } = e.getState(), {
                                eventTypeMap: n
                            } = t;
                            ec(e), (0, l.default)(n, (t, n) => {
                                let o = T.default[n];
                                if (!o) {
                                    console.warn(`IX2 event type not configured: ${n}`);
                                    return
                                }(function({
                                    logic: e,
                                    store: t,
                                    events: n
                                }) {
                                    (function(e) {
                                        if (!Y) return;
                                        let t = {},
                                            n = "";
                                        for (let a in e) {
                                            let {
                                                eventTypeId: i,
                                                target: c
                                            } = e[a], o = I.getQuerySelector(c);
                                            if (!t[o])(i === s.EventTypeConsts.MOUSE_CLICK || i === s.EventTypeConsts.MOUSE_SECOND_CLICK) && (t[o] = !0, n += o + "{cursor: pointer;touch-action: manipulation;}")
                                        }
                                        if (n) {
                                            let e = document.createElement("style");
                                            e.textContent = n, document.body.appendChild(e)
                                        }
                                    })(n);
                                    let {
                                        types: o,
                                        handler: d
                                    } = e, {
                                        ixData: r
                                    } = t.getState(), {
                                        actionLists: u
                                    } = r, T = eo(n, er);
                                    if (!(0, c.default)(T)) return;
                                    (0, l.default)(T, (e, c) => {
                                        let o = n[c],
                                            {
                                                action: d,
                                                id: l,
                                                mediaQueries: f = r.mediaQueryKeys
                                            } = o,
                                            {
                                                actionListId: T
                                            } = d.config;
                                        !w(f, r.mediaQueryKeys) && t.dispatch((0, E.mediaQueriesDefined)()), d.actionTypeId === s.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION && (Array.isArray(o.config) ? o.config : [o.config]).forEach(n => {
                                            let {
                                                continuousParameterGroupId: c
                                            } = n, o = (0, i.default)(u, `${T}.continuousParameterGroups`, []), d = (0, a.default)(o, ({
                                                id: e
                                            }) => e === c), r = (n.smoothing || 0) / 100, f = (n.restingState || 0) / 100;
                                            if (!!d) e.forEach((e, a) => {
                                                ! function({
                                                    store: e,
                                                    eventStateKey: t,
                                                    eventTarget: n,
                                                    eventId: a,
                                                    eventConfig: c,
                                                    actionListId: o,
                                                    parameterGroup: d,
                                                    smoothing: r,
                                                    restingValue: l
                                                }) {
                                                    let {
                                                        ixData: f,
                                                        ixSession: u
                                                    } = e.getState(), {
                                                        events: E
                                                    } = f, T = E[a], {
                                                        eventTypeId: y
                                                    } = T, p = {}, g = {}, b = [], {
                                                        continuousActionGroups: R
                                                    } = d, {
                                                        id: _
                                                    } = d;
                                                    x(y, c) && (_ = D(t, _));
                                                    let N = u.hasBoundaryNodes && n ? I.getClosestElement(n, m) : null;
                                                    R.forEach(e => {
                                                        let {
                                                            keyframe: t,
                                                            actionItems: a
                                                        } = e;
                                                        a.forEach(e => {
                                                            let {
                                                                actionTypeId: a
                                                            } = e, {
                                                                target: i
                                                            } = e.config;
                                                            if (!i) return;
                                                            let c = i.boundaryMode ? N : null,
                                                                o = B(i) + O + a;
                                                            if (g[o] = function(e = [], t, n) {
                                                                    let a;
                                                                    let i = [...e];
                                                                    return i.some((e, n) => e.keyframe === t && (a = n, !0)), null == a && (a = i.length, i.push({
                                                                        keyframe: t,
                                                                        actionItems: []
                                                                    })), i[a].actionItems.push(n), i
                                                                }(g[o], t, e), !p[o]) {
                                                                p[o] = !0;
                                                                let {
                                                                    config: t
                                                                } = e;
                                                                L({
                                                                    config: t,
                                                                    event: T,
                                                                    eventTarget: n,
                                                                    elementRoot: c,
                                                                    elementApi: I
                                                                }).forEach(e => {
                                                                    b.push({
                                                                        element: e,
                                                                        key: o
                                                                    })
                                                                })
                                                            }
                                                        })
                                                    }), b.forEach(({
                                                        element: t,
                                                        key: n
                                                    }) => {
                                                        let c = g[n],
                                                            d = (0, i.default)(c, "[0].actionItems[0]", {}),
                                                            {
                                                                actionTypeId: f
                                                            } = d,
                                                            u = (f === s.ActionTypeConsts.PLUGIN_RIVE ? 0 === (d.config ? .target ? .selectorGuids || []).length : W(f)) ? j(f) ? .(t, d) : null,
                                                            E = S({
                                                                element: t,
                                                                actionItem: d,
                                                                elementApi: I
                                                            }, u);
                                                        eE({
                                                            store: e,
                                                            element: t,
                                                            eventId: a,
                                                            actionListId: o,
                                                            actionItem: d,
                                                            destination: E,
                                                            continuous: !0,
                                                            parameterId: _,
                                                            actionGroups: c,
                                                            smoothing: r,
                                                            restingValue: l,
                                                            pluginInstance: u
                                                        })
                                                    })
                                                }({
                                                    store: t,
                                                    eventStateKey: l + O + a,
                                                    eventTarget: e,
                                                    eventId: l,
                                                    eventConfig: n,
                                                    actionListId: T,
                                                    parameterGroup: d,
                                                    smoothing: r,
                                                    restingValue: f
                                                })
                                            })
                                        }), (d.actionTypeId === s.ActionTypeConsts.GENERAL_START_ACTION || b(d.actionTypeId)) && el({
                                            store: t,
                                            actionListId: T,
                                            eventId: l
                                        })
                                    });
                                    let y = e => {
                                            let {
                                                ixSession: a
                                            } = t.getState();
                                            ed(T, (i, c, o) => {
                                                let l = n[c],
                                                    f = a.eventState[o],
                                                    {
                                                        action: u,
                                                        mediaQueries: I = r.mediaQueryKeys
                                                    } = l;
                                                if (!k(I, a.mediaQueryKey)) return;
                                                let T = (n = {}) => {
                                                    let a = d({
                                                        store: t,
                                                        element: i,
                                                        event: l,
                                                        eventConfig: n,
                                                        nativeEvent: e,
                                                        eventStateKey: o
                                                    }, f);
                                                    !H(a, f) && t.dispatch((0, E.eventStateChanged)(o, a))
                                                };
                                                u.actionTypeId === s.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION ? (Array.isArray(l.config) ? l.config : [l.config]).forEach(T) : T()
                                            })
                                        },
                                        p = (0, f.default)(y, 12),
                                        g = ({
                                            target: e = document,
                                            types: n,
                                            throttle: a
                                        }) => {
                                            n.split(" ").filter(Boolean).forEach(n => {
                                                let i = a ? p : y;
                                                e.addEventListener(n, i), t.dispatch((0, E.eventListenerAdded)(e, [n, i]))
                                            })
                                        };
                                    Array.isArray(o) ? o.forEach(g) : "string" == typeof o && g(e)
                                })({
                                    logic: o,
                                    store: e,
                                    events: t
                                })
                            });
                            let {
                                ixSession: o
                            } = e.getState();
                            o.eventListeners.length && function(e) {
                                let t = () => {
                                    ec(e)
                                };
                                ei.forEach(n => {
                                    window.addEventListener(n, t), e.dispatch((0, E.eventListenerAdded)(window, [n, t]))
                                }), t()
                            }(e)
                        }(e), function() {
                            let {
                                documentElement: e
                            } = document; - 1 === e.className.indexOf(N) && (e.className += ` ${N}`)
                        }(), e.getState().ixSession.hasDefinedMediaQueries)) {
                        var r;
                        C({
                            store: r = e,
                            select: ({
                                ixSession: e
                            }) => e.mediaQueryKey,
                            onChange: () => {
                                en(r), V({
                                    store: r,
                                    elementApi: I
                                }), et({
                                    store: r,
                                    allowEvents: !0
                                }), q()
                            }
                        })
                    }
                    e.dispatch((0, E.sessionStarted)()),
                        function(e, t) {
                            let n = a => {
                                let {
                                    ixSession: i,
                                    ixParameters: c
                                } = e.getState();
                                i.active && (e.dispatch((0, E.animationFrameChanged)(a, c)), t ? ! function(e, t) {
                                    let n = C({
                                        store: e,
                                        select: ({
                                            ixSession: e
                                        }) => e.tick,
                                        onChange: e => {
                                            t(e), n()
                                        }
                                    })
                                }(e, n) : requestAnimationFrame(n))
                            };
                            n(window.performance.now())
                        }(e, o)
                }
            }

            function en(e) {
                let {
                    ixSession: t
                } = e.getState();
                if (t.active) {
                    let {
                        eventListeners: n
                    } = t;
                    n.forEach(ea), X(), e.dispatch((0, E.sessionStopped)())
                }
            }

            function ea({
                target: e,
                listenerParams: t
            }) {
                e.removeEventListener.apply(e, t)
            }
            let ei = ["resize", "orientationchange"];

            function ec(e) {
                let {
                    ixSession: t,
                    ixData: n
                } = e.getState(), a = window.innerWidth;
                if (a !== t.viewportWidth) {
                    let {
                        mediaQueries: t
                    } = n;
                    e.dispatch((0, E.viewportWidthChanged)({
                        width: a,
                        mediaQueries: t
                    }))
                }
            }
            let eo = (e, t) => (0, o.default)((0, r.default)(e, t), d.default),
                ed = (e, t) => {
                    (0, l.default)(e, (e, n) => {
                        e.forEach((e, a) => {
                            t(e, n, n + O + a)
                        })
                    })
                },
                er = e => L({
                    config: {
                        target: e.target,
                        targets: e.targets
                    },
                    elementApi: I
                });

            function el({
                store: e,
                actionListId: t,
                eventId: n
            }) {
                let {
                    ixData: a,
                    ixSession: c
                } = e.getState(), {
                    actionLists: o,
                    events: d
                } = a, r = d[n], l = o[t];
                if (l && l.useFirstGroupAsInitialState) {
                    let o = (0, i.default)(l, "actionItemGroups[0].actionItems", []);
                    if (!k((0, i.default)(r, "mediaQueries", a.mediaQueryKeys), c.mediaQueryKey)) return;
                    o.forEach(a => {
                        let {
                            config: i,
                            actionTypeId: c
                        } = a, o = L({
                            config: i ? .target ? .useEventTarget === !0 && i ? .target ? .objectId == null ? {
                                target: r.target,
                                targets: r.targets
                            } : i,
                            event: r,
                            elementApi: I
                        }), d = W(c);
                        o.forEach(i => {
                            let o = d ? j(c) ? .(i, a) : null;
                            eE({
                                destination: S({
                                    element: i,
                                    actionItem: a,
                                    elementApi: I
                                }, o),
                                immediate: !0,
                                store: e,
                                element: i,
                                eventId: n,
                                actionItem: a,
                                actionListId: t,
                                pluginInstance: o
                            })
                        })
                    })
                }
            }

            function ef({
                store: e
            }) {
                let {
                    ixInstances: t
                } = e.getState();
                (0, l.default)(t, t => {
                    if (!t.continuous) {
                        let {
                            actionListId: n,
                            verbose: a
                        } = t;
                        eI(t, e), a && e.dispatch((0, E.actionListPlaybackChanged)({
                            actionListId: n,
                            isPlaying: !1
                        }))
                    }
                })
            }

            function es({
                store: e,
                eventId: t,
                eventTarget: n,
                eventStateKey: a,
                actionListId: c
            }) {
                let {
                    ixInstances: o,
                    ixSession: d
                } = e.getState(), r = d.hasBoundaryNodes && n ? I.getClosestElement(n, m) : null;
                (0, l.default)(o, n => {
                    let o = (0, i.default)(n, "actionItem.config.target.boundaryMode"),
                        d = !a || n.eventStateKey === a;
                    if (n.actionListId === c && n.eventId === t && d) {
                        if (r && o && !I.elementContains(r, n.element)) return;
                        eI(n, e), n.verbose && e.dispatch((0, E.actionListPlaybackChanged)({
                            actionListId: c,
                            isPlaying: !1
                        }))
                    }
                })
            }

            function eu({
                store: e,
                eventId: t,
                eventTarget: n,
                eventStateKey: a,
                actionListId: c,
                groupIndex: o = 0,
                immediate: d,
                verbose: r
            }) {
                let {
                    ixData: l,
                    ixSession: f
                } = e.getState(), {
                    events: s
                } = l, u = s[t] || {}, {
                    mediaQueries: E = l.mediaQueryKeys
                } = u, {
                    actionItemGroups: T,
                    useFirstGroupAsInitialState: y
                } = (0, i.default)(l, `actionLists.${c}`, {});
                if (!T || !T.length) return !1;
                o >= T.length && (0, i.default)(u, "config.loop") && (o = 0), 0 === o && y && o++;
                let p = (0 === o || 1 === o && y) && b(u.action ? .actionTypeId) ? u.config.delay : void 0,
                    g = (0, i.default)(T, [o, "actionItems"], []);
                if (!g.length || !k(E, f.mediaQueryKey)) return !1;
                let O = f.hasBoundaryNodes && n ? I.getClosestElement(n, m) : null,
                    R = P(g),
                    _ = !1;
                return g.forEach((i, l) => {
                    let {
                        config: f,
                        actionTypeId: s
                    } = i, E = W(s), {
                        target: T
                    } = f;
                    if (!!T) L({
                        config: f,
                        event: u,
                        eventTarget: n,
                        elementRoot: T.boundaryMode ? O : null,
                        elementApi: I
                    }).forEach((f, u) => {
                        let T = E ? j(s) ? .(f, i) : null,
                            y = E ? z(s)(f, i) : null;
                        _ = !0;
                        let g = F({
                                element: f,
                                actionItem: i
                            }),
                            b = S({
                                element: f,
                                actionItem: i,
                                elementApi: I
                            }, T);
                        eE({
                            store: e,
                            element: f,
                            actionItem: i,
                            eventId: t,
                            eventTarget: n,
                            eventStateKey: a,
                            actionListId: c,
                            groupIndex: o,
                            isCarrier: R === l && 0 === u,
                            computedStyle: g,
                            destination: b,
                            immediate: d,
                            verbose: r,
                            pluginInstance: T,
                            pluginDuration: y,
                            instanceDelay: p
                        })
                    })
                }), _
            }

            function eE(e) {
                let t;
                let {
                    store: n,
                    computedStyle: a,
                    ...i
                } = e, {
                    element: c,
                    actionItem: o,
                    immediate: d,
                    pluginInstance: r,
                    continuous: l,
                    restingValue: f,
                    eventId: u
                } = i, T = v(), {
                    ixElements: y,
                    ixSession: p,
                    ixData: g
                } = n.getState(), b = A(y, c), {
                    refState: O
                } = y[b] || {}, m = I.getRefType(c), R = p.reducedMotion && s.ReducedMotionTypes[o.actionTypeId];
                if (R && l) switch (g.events[u] ? .eventTypeId) {
                    case s.EventTypeConsts.MOUSE_MOVE:
                    case s.EventTypeConsts.MOUSE_MOVE_IN_VIEWPORT:
                        t = f;
                        break;
                    default:
                        t = .5
                }
                let _ = U(c, O, a, o, I, r);
                if (n.dispatch((0, E.instanceAdded)({
                        instanceId: T,
                        elementId: b,
                        origin: _,
                        refType: m,
                        skipMotion: R,
                        skipToValue: t,
                        ...i
                    })), eT(document.body, "ix2-animation-started", T), d) {
                    (function(e, t) {
                        let {
                            ixParameters: n
                        } = e.getState();
                        e.dispatch((0, E.instanceStarted)(t, 0)), e.dispatch((0, E.animationFrameChanged)(performance.now(), n));
                        let {
                            ixInstances: a
                        } = e.getState();
                        ey(a[t], e)
                    })(n, T);
                    return
                }
                C({
                    store: n,
                    select: ({
                        ixInstances: e
                    }) => e[T],
                    onChange: ey
                }), !l && n.dispatch((0, E.instanceStarted)(T, p.tick))
            }

            function eI(e, t) {
                eT(document.body, "ix2-animation-stopping", {
                    instanceId: e.id,
                    state: t.getState()
                });
                let {
                    elementId: n,
                    actionItem: a
                } = e, {
                    ixElements: i
                } = t.getState(), {
                    ref: c,
                    refType: o
                } = i[n] || {};
                o === R && G(c, a, I), t.dispatch((0, E.instanceRemoved)(e.id))
            }

            function eT(e, t, n) {
                let a = document.createEvent("CustomEvent");
                a.initCustomEvent(t, !0, !0, n), e.dispatchEvent(a)
            }

            function ey(e, t) {
                let {
                    active: n,
                    continuous: a,
                    complete: i,
                    elementId: c,
                    actionItem: o,
                    actionTypeId: d,
                    renderType: r,
                    current: l,
                    groupIndex: f,
                    eventId: s,
                    eventTarget: u,
                    eventStateKey: T,
                    actionListId: y,
                    isCarrier: p,
                    styleProp: g,
                    verbose: b,
                    pluginInstance: O
                } = e, {
                    ixData: m,
                    ixSession: N
                } = t.getState(), {
                    events: L
                } = m, {
                    mediaQueries: A = m.mediaQueryKeys
                } = L && L[s] ? L[s] : {};
                if (!!k(A, N.mediaQueryKey)) {
                    if (a || n || i) {
                        if (l || r === _ && i) {
                            t.dispatch((0, E.elementStateChanged)(c, d, l, o));
                            let {
                                ixElements: e
                            } = t.getState(), {
                                ref: n,
                                refType: a,
                                refState: i
                            } = e[c] || {}, f = i && i[d];
                            (a === R || W(d)) && M(n, i, f, s, o, g, I, r, O)
                        }
                        if (i) {
                            if (p) {
                                let e = eu({
                                    store: t,
                                    eventId: s,
                                    eventTarget: u,
                                    eventStateKey: T,
                                    actionListId: y,
                                    groupIndex: f + 1,
                                    verbose: b
                                });
                                b && !e && t.dispatch((0, E.actionListPlaybackChanged)({
                                    actionListId: y,
                                    isPlaying: !1
                                }))
                            }
                            eI(e, t)
                        }
                    }
                }
            }
        },
        8955: function(e, t, n) {
            "use strict";
            let a, i, c;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function() {
                    return eT
                }
            });
            let o = E(n(5801)),
                d = E(n(4738)),
                r = E(n(3789)),
                l = n(7087),
                f = n(1970),
                s = n(3946),
                u = n(9468);

            function E(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            let {
                MOUSE_CLICK: I,
                MOUSE_SECOND_CLICK: T,
                MOUSE_DOWN: y,
                MOUSE_UP: p,
                MOUSE_OVER: g,
                MOUSE_OUT: b,
                DROPDOWN_CLOSE: O,
                DROPDOWN_OPEN: m,
                SLIDER_ACTIVE: R,
                SLIDER_INACTIVE: _,
                TAB_ACTIVE: N,
                TAB_INACTIVE: L,
                NAVBAR_CLOSE: A,
                NAVBAR_OPEN: S,
                MOUSE_MOVE: C,
                PAGE_SCROLL_DOWN: v,
                SCROLL_INTO_VIEW: M,
                SCROLL_OUT_OF_VIEW: V,
                PAGE_SCROLL_UP: P,
                SCROLLING_IN_VIEW: F,
                PAGE_FINISH: U,
                ECOMMERCE_CART_CLOSE: h,
                ECOMMERCE_CART_OPEN: x,
                PAGE_START: D,
                PAGE_SCROLL: k
            } = l.EventTypeConsts, G = "COMPONENT_ACTIVE", X = "COMPONENT_INACTIVE", {
                COLON_DELIMITER: B
            } = l.IX2EngineConstants, {
                getNamespacedParameterId: w
            } = u.IX2VanillaUtils, H = e => t => !!("object" == typeof t && e(t)) || t, W = H(({
                element: e,
                nativeEvent: t
            }) => e === t.target), j = H(({
                element: e,
                nativeEvent: t
            }) => e.contains(t.target)), z = (0, o.default)([W, j]), Q = (e, t) => {
                if (t) {
                    let {
                        ixData: n
                    } = e.getState(), {
                        events: a
                    } = n, i = a[t];
                    if (i && !en[i.eventTypeId]) return i
                }
                return null
            }, Y = ({
                store: e,
                event: t
            }) => {
                let {
                    action: n
                } = t, {
                    autoStopEventId: a
                } = n.config;
                return !!Q(e, a)
            }, $ = ({
                store: e,
                event: t,
                element: n,
                eventStateKey: a
            }, i) => {
                let {
                    action: c,
                    id: o
                } = t, {
                    actionListId: r,
                    autoStopEventId: l
                } = c.config, s = Q(e, l);
                return s && (0, f.stopActionGroup)({
                    store: e,
                    eventId: l,
                    eventTarget: n,
                    eventStateKey: l + B + a.split(B)[1],
                    actionListId: (0, d.default)(s, "action.config.actionListId")
                }), (0, f.stopActionGroup)({
                    store: e,
                    eventId: o,
                    eventTarget: n,
                    eventStateKey: a,
                    actionListId: r
                }), (0, f.startActionGroup)({
                    store: e,
                    eventId: o,
                    eventTarget: n,
                    eventStateKey: a,
                    actionListId: r
                }), i
            }, K = (e, t) => (n, a) => !0 === e(n, a) ? t(n, a) : a, q = {
                handler: K(z, $)
            }, Z = { ...q,
                types: [G, X].join(" ")
            }, J = [{
                target: window,
                types: "resize orientationchange",
                throttle: !0
            }, {
                target: document,
                types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
                throttle: !0
            }], ee = "mouseover mouseout", et = {
                types: J
            }, en = {
                PAGE_START: D,
                PAGE_FINISH: U
            }, ea = (() => {
                let e = void 0 !== window.pageXOffset,
                    t = "CSS1Compat" === document.compatMode ? document.documentElement : document.body;
                return () => ({
                    scrollLeft: e ? window.pageXOffset : t.scrollLeft,
                    scrollTop: e ? window.pageYOffset : t.scrollTop,
                    stiffScrollTop: (0, r.default)(e ? window.pageYOffset : t.scrollTop, 0, t.scrollHeight - window.innerHeight),
                    scrollWidth: t.scrollWidth,
                    scrollHeight: t.scrollHeight,
                    clientWidth: t.clientWidth,
                    clientHeight: t.clientHeight,
                    innerWidth: window.innerWidth,
                    innerHeight: window.innerHeight
                })
            })(), ei = (e, t) => !(e.left > t.right || e.right < t.left || e.top > t.bottom || e.bottom < t.top), ec = ({
                element: e,
                nativeEvent: t
            }) => {
                let {
                    type: n,
                    target: a,
                    relatedTarget: i
                } = t, c = e.contains(a);
                if ("mouseover" === n && c) return !0;
                let o = e.contains(i);
                return "mouseout" === n && !!c && !!o || !1
            }, eo = e => {
                let {
                    element: t,
                    event: {
                        config: n
                    }
                } = e, {
                    clientWidth: a,
                    clientHeight: i
                } = ea(), c = n.scrollOffsetValue, o = n.scrollOffsetUnit, d = "PX" === o ? c : i * (c || 0) / 100;
                return ei(t.getBoundingClientRect(), {
                    left: 0,
                    top: d,
                    right: a,
                    bottom: i - d
                })
            }, ed = e => (t, n) => {
                let {
                    type: a
                } = t.nativeEvent, i = -1 !== [G, X].indexOf(a) ? a === G : n.isActive, c = { ...n,
                    isActive: i
                };
                return n && c.isActive === n.isActive ? c : e(t, c) || c
            }, er = e => (t, n) => {
                let a = {
                    elementHovered: ec(t)
                };
                return (n ? a.elementHovered !== n.elementHovered : a.elementHovered) && e(t, a) || a
            }, el = e => (t, n = {}) => {
                let a, i;
                let {
                    stiffScrollTop: c,
                    scrollHeight: o,
                    innerHeight: d
                } = ea(), {
                    event: {
                        config: r,
                        eventTypeId: l
                    }
                } = t, {
                    scrollOffsetValue: f,
                    scrollOffsetUnit: s
                } = r, u = o - d, E = Number((c / u).toFixed(2));
                if (n && n.percentTop === E) return n;
                let I = ("PX" === s ? f : d * (f || 0) / 100) / u,
                    T = 0;
                n && (a = E > n.percentTop, T = (i = n.scrollingDown !== a) ? E : n.anchorTop);
                let y = l === v ? E >= T + I : E <= T - I,
                    p = { ...n,
                        percentTop: E,
                        inBounds: y,
                        anchorTop: T,
                        scrollingDown: a
                    };
                return n && y && (i || p.inBounds !== n.inBounds) && e(t, p) || p
            }, ef = (e, t) => e.left > t.left && e.left < t.right && e.top > t.top && e.top < t.bottom, es = e => (t, n = {
                clickCount: 0
            }) => {
                let a = {
                    clickCount: n.clickCount % 2 + 1
                };
                return a.clickCount !== n.clickCount && e(t, a) || a
            }, eu = (e = !0) => ({ ...Z,
                handler: K(e ? z : W, ed((e, t) => t.isActive ? q.handler(e, t) : t))
            }), eE = (e = !0) => ({ ...Z,
                handler: K(e ? z : W, ed((e, t) => t.isActive ? t : q.handler(e, t)))
            });
            let eI = { ...et,
                handler: (a = (e, t) => {
                    let {
                        elementVisible: n
                    } = t, {
                        event: a,
                        store: i
                    } = e, {
                        ixData: c
                    } = i.getState(), {
                        events: o
                    } = c;
                    return !o[a.action.config.autoStopEventId] && t.triggered ? t : a.eventTypeId === M === n ? ($(e), { ...t,
                        triggered: !0
                    }) : t
                }, (e, t) => {
                    let n = { ...t,
                        elementVisible: eo(e)
                    };
                    return (t ? n.elementVisible !== t.elementVisible : n.elementVisible) && a(e, n) || n
                })
            };
            let eT = {
                [R]: eu(),
                [_]: eE(),
                [m]: eu(),
                [O]: eE(),
                [S]: eu(!1),
                [A]: eE(!1),
                [N]: eu(),
                [L]: eE(),
                [x]: {
                    types: "ecommerce-cart-open",
                    handler: K(z, $)
                },
                [h]: {
                    types: "ecommerce-cart-close",
                    handler: K(z, $)
                },
                [I]: {
                    types: "click",
                    handler: K(z, es((e, {
                        clickCount: t
                    }) => {
                        Y(e) ? 1 === t && $(e) : $(e)
                    }))
                },
                [T]: {
                    types: "click",
                    handler: K(z, es((e, {
                        clickCount: t
                    }) => {
                        2 === t && $(e)
                    }))
                },
                [y]: { ...q,
                    types: "mousedown"
                },
                [p]: { ...q,
                    types: "mouseup"
                },
                [g]: {
                    types: ee,
                    handler: K(z, er((e, t) => {
                        t.elementHovered && $(e)
                    }))
                },
                [b]: {
                    types: ee,
                    handler: K(z, er((e, t) => {
                        !t.elementHovered && $(e)
                    }))
                },
                [C]: {
                    types: "mousemove mouseout scroll",
                    handler: ({
                        store: e,
                        element: t,
                        eventConfig: n,
                        nativeEvent: a,
                        eventStateKey: i
                    }, c = {
                        clientX: 0,
                        clientY: 0,
                        pageX: 0,
                        pageY: 0
                    }) => {
                        let {
                            basedOn: o,
                            selectedAxis: d,
                            continuousParameterGroupId: r,
                            reverse: f,
                            restingState: u = 0
                        } = n, {
                            clientX: E = c.clientX,
                            clientY: I = c.clientY,
                            pageX: T = c.pageX,
                            pageY: y = c.pageY
                        } = a, p = "X_AXIS" === d, g = "mouseout" === a.type, b = u / 100, O = r, m = !1;
                        switch (o) {
                            case l.EventBasedOn.VIEWPORT:
                                b = p ? Math.min(E, window.innerWidth) / window.innerWidth : Math.min(I, window.innerHeight) / window.innerHeight;
                                break;
                            case l.EventBasedOn.PAGE:
                                {
                                    let {
                                        scrollLeft: e,
                                        scrollTop: t,
                                        scrollWidth: n,
                                        scrollHeight: a
                                    } = ea();b = p ? Math.min(e + T, n) / n : Math.min(t + y, a) / a;
                                    break
                                }
                            case l.EventBasedOn.ELEMENT:
                            default:
                                {
                                    O = w(i, r);
                                    let e = 0 === a.type.indexOf("mouse");
                                    if (e && !0 !== z({
                                            element: t,
                                            nativeEvent: a
                                        })) break;
                                    let n = t.getBoundingClientRect(),
                                        {
                                            left: c,
                                            top: o,
                                            width: d,
                                            height: l
                                        } = n;
                                    if (!e && !ef({
                                            left: E,
                                            top: I
                                        }, n)) break;m = !0,
                                    b = p ? (E - c) / d : (I - o) / l
                                }
                        }
                        return g && (b > .95 || b < .05) && (b = Math.round(b)), (o !== l.EventBasedOn.ELEMENT || m || m !== c.elementHovered) && (b = f ? 1 - b : b, e.dispatch((0, s.parameterChanged)(O, b))), {
                            elementHovered: m,
                            clientX: E,
                            clientY: I,
                            pageX: T,
                            pageY: y
                        }
                    }
                },
                [k]: {
                    types: J,
                    handler: ({
                        store: e,
                        eventConfig: t
                    }) => {
                        let {
                            continuousParameterGroupId: n,
                            reverse: a
                        } = t, {
                            scrollTop: i,
                            scrollHeight: c,
                            clientHeight: o
                        } = ea(), d = i / (c - o);
                        d = a ? 1 - d : d, e.dispatch((0, s.parameterChanged)(n, d))
                    }
                },
                [F]: {
                    types: J,
                    handler: ({
                        element: e,
                        store: t,
                        eventConfig: n,
                        eventStateKey: a
                    }, i = {
                        scrollPercent: 0
                    }) => {
                        let {
                            scrollLeft: c,
                            scrollTop: o,
                            scrollWidth: d,
                            scrollHeight: r,
                            clientHeight: f
                        } = ea(), {
                            basedOn: u,
                            selectedAxis: E,
                            continuousParameterGroupId: I,
                            startsEntering: T,
                            startsExiting: y,
                            addEndOffset: p,
                            addStartOffset: g,
                            addOffsetValue: b = 0,
                            endOffsetValue: O = 0
                        } = n;
                        if (u === l.EventBasedOn.VIEWPORT) {
                            let e = "X_AXIS" === E ? c / d : o / r;
                            return e !== i.scrollPercent && t.dispatch((0, s.parameterChanged)(I, e)), {
                                scrollPercent: e
                            }
                        } {
                            let n = w(a, I),
                                c = e.getBoundingClientRect(),
                                o = (g ? b : 0) / 100,
                                d = (p ? O : 0) / 100;
                            o = T ? o : 1 - o, d = y ? d : 1 - d;
                            let l = c.top + Math.min(c.height * o, f),
                                u = c.top + c.height * d,
                                E = Math.min(f + (u - l), r),
                                m = Math.min(Math.max(0, f - l), E) / E;
                            return m !== i.scrollPercent && t.dispatch((0, s.parameterChanged)(n, m)), {
                                scrollPercent: m
                            }
                        }
                    }
                },
                [M]: eI,
                [V]: eI,
                [v]: { ...et,
                    handler: el((e, t) => {
                        t.scrollingDown && $(e)
                    })
                },
                [P]: { ...et,
                    handler: el((e, t) => {
                        !t.scrollingDown && $(e)
                    })
                },
                [U]: {
                    types: "readystatechange IX2_PAGE_UPDATE",
                    handler: K(W, (i = $, (e, t) => {
                        let n = {
                            finished: "complete" === document.readyState
                        };
                        return n.finished && !(t && t.finshed) && i(e), n
                    }))
                },
                [D]: {
                    types: "readystatechange IX2_PAGE_UPDATE",
                    handler: K(W, (c = $, (e, t) => (t || c(e), {
                        started: !0
                    })))
                }
            }
        },
        4609: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "ixData", {
                enumerable: !0,
                get: function() {
                    return i
                }
            });
            let {
                IX2_RAW_DATA_IMPORTED: a
            } = n(7087).IX2EngineActionTypes, i = (e = Object.freeze({}), t) => {
                if (t.type === a) return t.payload.ixData || Object.freeze({});
                return e
            }
        },
        7718: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "ixInstances", {
                enumerable: !0,
                get: function() {
                    return m
                }
            });
            let a = n(7087),
                i = n(9468),
                c = n(1185),
                {
                    IX2_RAW_DATA_IMPORTED: o,
                    IX2_SESSION_STOPPED: d,
                    IX2_INSTANCE_ADDED: r,
                    IX2_INSTANCE_STARTED: l,
                    IX2_INSTANCE_REMOVED: f,
                    IX2_ANIMATION_FRAME_CHANGED: s
                } = a.IX2EngineActionTypes,
                {
                    optimizeFloat: u,
                    applyEasing: E,
                    createBezierEasing: I
                } = i.IX2EasingUtils,
                {
                    RENDER_GENERAL: T
                } = a.IX2EngineConstants,
                {
                    getItemConfigByKey: y,
                    getRenderType: p,
                    getStyleProp: g
                } = i.IX2VanillaUtils,
                b = (e, t) => {
                    let n, a, i, o;
                    let {
                        position: d,
                        parameterId: r,
                        actionGroups: l,
                        destinationKeys: f,
                        smoothing: s,
                        restingValue: I,
                        actionTypeId: T,
                        customEasingFn: p,
                        skipMotion: g,
                        skipToValue: b
                    } = e, {
                        parameters: O
                    } = t.payload, m = Math.max(1 - s, .01), R = O[r];
                    null == R && (m = 1, R = I);
                    let _ = u((Math.max(R, 0) || 0) - d),
                        N = g ? b : u(d + _ * m),
                        L = 100 * N;
                    if (N === d && e.current) return e;
                    for (let e = 0, {
                            length: t
                        } = l; e < t; e++) {
                        let {
                            keyframe: t,
                            actionItems: c
                        } = l[e];
                        if (0 === e && (n = c[0]), L >= t) {
                            n = c[0];
                            let d = l[e + 1],
                                r = d && L !== t;
                            a = r ? d.actionItems[0] : null, r && (i = t / 100, o = (d.keyframe - t) / 100)
                        }
                    }
                    let A = {};
                    if (n && !a)
                        for (let e = 0, {
                                length: t
                            } = f; e < t; e++) {
                            let t = f[e];
                            A[t] = y(T, t, n.config)
                        } else if (n && a && void 0 !== i && void 0 !== o) {
                            let e = (N - i) / o,
                                t = E(n.config.easing, e, p);
                            for (let e = 0, {
                                    length: i
                                } = f; e < i; e++) {
                                let i = f[e],
                                    c = y(T, i, n.config),
                                    o = (y(T, i, a.config) - c) * t + c;
                                A[i] = o
                            }
                        }
                    return (0, c.merge)(e, {
                        position: N,
                        current: A
                    })
                },
                O = (e, t) => {
                    let {
                        active: n,
                        origin: a,
                        start: i,
                        immediate: o,
                        renderType: d,
                        verbose: r,
                        actionItem: l,
                        destination: f,
                        destinationKeys: s,
                        pluginDuration: I,
                        instanceDelay: y,
                        customEasingFn: p,
                        skipMotion: g
                    } = e, b = l.config.easing, {
                        duration: O,
                        delay: m
                    } = l.config;
                    null != I && (O = I), m = null != y ? y : m, d === T ? O = 0 : (o || g) && (O = m = 0);
                    let {
                        now: R
                    } = t.payload;
                    if (n && a) {
                        let t = R - (i + m);
                        if (r) {
                            let t = O + m,
                                n = u(Math.min(Math.max(0, (R - i) / t), 1));
                            e = (0, c.set)(e, "verboseTimeElapsed", t * n)
                        }
                        if (t < 0) return e;
                        let n = u(Math.min(Math.max(0, t / O), 1)),
                            o = E(b, n, p),
                            d = {},
                            l = null;
                        return s.length && (l = s.reduce((e, t) => {
                            let n = f[t],
                                i = parseFloat(a[t]) || 0,
                                c = parseFloat(n) - i;
                            return e[t] = c * o + i, e
                        }, {})), d.current = l, d.position = n, 1 === n && (d.active = !1, d.complete = !0), (0, c.merge)(e, d)
                    }
                    return e
                },
                m = (e = Object.freeze({}), t) => {
                    switch (t.type) {
                        case o:
                            return t.payload.ixInstances || Object.freeze({});
                        case d:
                            return Object.freeze({});
                        case r:
                            {
                                let {
                                    instanceId: n,
                                    elementId: a,
                                    actionItem: i,
                                    eventId: o,
                                    eventTarget: d,
                                    eventStateKey: r,
                                    actionListId: l,
                                    groupIndex: f,
                                    isCarrier: s,
                                    origin: u,
                                    destination: E,
                                    immediate: T,
                                    verbose: y,
                                    continuous: b,
                                    parameterId: O,
                                    actionGroups: m,
                                    smoothing: R,
                                    restingValue: _,
                                    pluginInstance: N,
                                    pluginDuration: L,
                                    instanceDelay: A,
                                    skipMotion: S,
                                    skipToValue: C
                                } = t.payload,
                                {
                                    actionTypeId: v
                                } = i,
                                M = p(v),
                                V = g(M, v),
                                P = Object.keys(E).filter(e => null != E[e] && "string" != typeof E[e]),
                                {
                                    easing: F
                                } = i.config;
                                return (0, c.set)(e, n, {
                                    id: n,
                                    elementId: a,
                                    active: !1,
                                    position: 0,
                                    start: 0,
                                    origin: u,
                                    destination: E,
                                    destinationKeys: P,
                                    immediate: T,
                                    verbose: y,
                                    current: null,
                                    actionItem: i,
                                    actionTypeId: v,
                                    eventId: o,
                                    eventTarget: d,
                                    eventStateKey: r,
                                    actionListId: l,
                                    groupIndex: f,
                                    renderType: M,
                                    isCarrier: s,
                                    styleProp: V,
                                    continuous: b,
                                    parameterId: O,
                                    actionGroups: m,
                                    smoothing: R,
                                    restingValue: _,
                                    pluginInstance: N,
                                    pluginDuration: L,
                                    instanceDelay: A,
                                    skipMotion: S,
                                    skipToValue: C,
                                    customEasingFn: Array.isArray(F) && 4 === F.length ? I(F) : void 0
                                })
                            }
                        case l:
                            {
                                let {
                                    instanceId: n,
                                    time: a
                                } = t.payload;
                                return (0, c.mergeIn)(e, [n], {
                                    active: !0,
                                    complete: !1,
                                    start: a
                                })
                            }
                        case f:
                            {
                                let {
                                    instanceId: n
                                } = t.payload;
                                if (!e[n]) return e;
                                let a = {},
                                    i = Object.keys(e),
                                    {
                                        length: c
                                    } = i;
                                for (let t = 0; t < c; t++) {
                                    let c = i[t];
                                    c !== n && (a[c] = e[c])
                                }
                                return a
                            }
                        case s:
                            {
                                let n = e,
                                    a = Object.keys(e),
                                    {
                                        length: i
                                    } = a;
                                for (let o = 0; o < i; o++) {
                                    let i = a[o],
                                        d = e[i],
                                        r = d.continuous ? b : O;
                                    n = (0, c.set)(n, i, r(d, t))
                                }
                                return n
                            }
                        default:
                            return e
                    }
                }
        },
        1540: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "ixParameters", {
                enumerable: !0,
                get: function() {
                    return o
                }
            });
            let {
                IX2_RAW_DATA_IMPORTED: a,
                IX2_SESSION_STOPPED: i,
                IX2_PARAMETER_CHANGED: c
            } = n(7087).IX2EngineActionTypes, o = (e = {}, t) => {
                switch (t.type) {
                    case a:
                        return t.payload.ixParameters || {};
                    case i:
                        return {};
                    case c:
                        {
                            let {
                                key: n,
                                value: a
                            } = t.payload;
                            return e[n] = a,
                            e
                        }
                    default:
                        return e
                }
            }
        },
        7243: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function() {
                    return s
                }
            });
            let a = n(9516),
                i = n(4609),
                c = n(628),
                o = n(5862),
                d = n(9468),
                r = n(7718),
                l = n(1540),
                {
                    ixElements: f
                } = d.IX2ElementsReducer,
                s = (0, a.combineReducers)({
                    ixData: i.ixData,
                    ixRequest: c.ixRequest,
                    ixSession: o.ixSession,
                    ixElements: f,
                    ixInstances: r.ixInstances,
                    ixParameters: l.ixParameters
                })
        },
        628: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "ixRequest", {
                enumerable: !0,
                get: function() {
                    return s
                }
            });
            let a = n(7087),
                i = n(1185),
                {
                    IX2_PREVIEW_REQUESTED: c,
                    IX2_PLAYBACK_REQUESTED: o,
                    IX2_STOP_REQUESTED: d,
                    IX2_CLEAR_REQUESTED: r
                } = a.IX2EngineActionTypes,
                l = {
                    preview: {},
                    playback: {},
                    stop: {},
                    clear: {}
                },
                f = Object.create(null, {
                    [c]: {
                        value: "preview"
                    },
                    [o]: {
                        value: "playback"
                    },
                    [d]: {
                        value: "stop"
                    },
                    [r]: {
                        value: "clear"
                    }
                }),
                s = (e = l, t) => {
                    if (t.type in f) {
                        let n = [f[t.type]];
                        return (0, i.setIn)(e, [n], { ...t.payload
                        })
                    }
                    return e
                }
        },
        5862: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "ixSession", {
                enumerable: !0,
                get: function() {
                    return y
                }
            });
            let a = n(7087),
                i = n(1185),
                {
                    IX2_SESSION_INITIALIZED: c,
                    IX2_SESSION_STARTED: o,
                    IX2_TEST_FRAME_RENDERED: d,
                    IX2_SESSION_STOPPED: r,
                    IX2_EVENT_LISTENER_ADDED: l,
                    IX2_EVENT_STATE_CHANGED: f,
                    IX2_ANIMATION_FRAME_CHANGED: s,
                    IX2_ACTION_LIST_PLAYBACK_CHANGED: u,
                    IX2_VIEWPORT_WIDTH_CHANGED: E,
                    IX2_MEDIA_QUERIES_DEFINED: I
                } = a.IX2EngineActionTypes,
                T = {
                    active: !1,
                    tick: 0,
                    eventListeners: [],
                    eventState: {},
                    playbackState: {},
                    viewportWidth: 0,
                    mediaQueryKey: null,
                    hasBoundaryNodes: !1,
                    hasDefinedMediaQueries: !1,
                    reducedMotion: !1
                },
                y = (e = T, t) => {
                    switch (t.type) {
                        case c:
                            {
                                let {
                                    hasBoundaryNodes: n,
                                    reducedMotion: a
                                } = t.payload;
                                return (0, i.merge)(e, {
                                    hasBoundaryNodes: n,
                                    reducedMotion: a
                                })
                            }
                        case o:
                            return (0, i.set)(e, "active", !0);
                        case d:
                            {
                                let {
                                    payload: {
                                        step: n = 20
                                    }
                                } = t;
                                return (0, i.set)(e, "tick", e.tick + n)
                            }
                        case r:
                            return T;
                        case s:
                            {
                                let {
                                    payload: {
                                        now: n
                                    }
                                } = t;
                                return (0, i.set)(e, "tick", n)
                            }
                        case l:
                            {
                                let n = (0, i.addLast)(e.eventListeners, t.payload);
                                return (0, i.set)(e, "eventListeners", n)
                            }
                        case f:
                            {
                                let {
                                    stateKey: n,
                                    newState: a
                                } = t.payload;
                                return (0, i.setIn)(e, ["eventState", n], a)
                            }
                        case u:
                            {
                                let {
                                    actionListId: n,
                                    isPlaying: a
                                } = t.payload;
                                return (0, i.setIn)(e, ["playbackState", n], a)
                            }
                        case E:
                            {
                                let {
                                    width: n,
                                    mediaQueries: a
                                } = t.payload,
                                c = a.length,
                                o = null;
                                for (let e = 0; e < c; e++) {
                                    let {
                                        key: t,
                                        min: i,
                                        max: c
                                    } = a[e];
                                    if (n >= i && n <= c) {
                                        o = t;
                                        break
                                    }
                                }
                                return (0, i.merge)(e, {
                                    viewportWidth: n,
                                    mediaQueryKey: o
                                })
                            }
                        case I:
                            return (0, i.set)(e, "hasDefinedMediaQueries", !0);
                        default:
                            return e
                    }
                }
        },
        7377: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            ! function(e, t) {
                for (var n in t) Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: t[n]
                })
            }(t, {
                clearPlugin: function() {
                    return r
                },
                createPluginInstance: function() {
                    return o
                },
                getPluginConfig: function() {
                    return n
                },
                getPluginDestination: function() {
                    return c
                },
                getPluginDuration: function() {
                    return a
                },
                getPluginOrigin: function() {
                    return i
                },
                renderPlugin: function() {
                    return d
                }
            });
            let n = e => e.value,
                a = (e, t) => {
                    if ("auto" !== t.config.duration) return null;
                    let n = parseFloat(e.getAttribute("data-duration"));
                    return n > 0 ? 1e3 * n : 1e3 * parseFloat(e.getAttribute("data-default-duration"))
                },
                i = e => e || {
                    value: 0
                },
                c = e => ({
                    value: e.value
                }),
                o = e => {
                    let t = window.Webflow.require("lottie");
                    if (!t) return null;
                    let n = t.createInstance(e);
                    return n.stop(), n.setSubframe(!0), n
                },
                d = (e, t, n) => {
                    if (!e) return;
                    let a = t[n.actionTypeId].value / 100;
                    e.goToFrame(e.frames * a)
                },
                r = e => {
                    let t = window.Webflow.require("lottie");
                    t && t.createInstance(e).stop()
                }
        },
        2570: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            ! function(e, t) {
                for (var n in t) Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: t[n]
                })
            }(t, {
                clearPlugin: function() {
                    return u
                },
                createPluginInstance: function() {
                    return f
                },
                getPluginConfig: function() {
                    return o
                },
                getPluginDestination: function() {
                    return l
                },
                getPluginDuration: function() {
                    return d
                },
                getPluginOrigin: function() {
                    return r
                },
                renderPlugin: function() {
                    return s
                }
            });
            let n = "--wf-rive-fit",
                a = "--wf-rive-alignment",
                i = e => document.querySelector(`[data-w-id="${e}"]`),
                c = () => window.Webflow.require("rive"),
                o = (e, t) => e.value.inputs[t],
                d = () => null,
                r = (e, t) => {
                    if (e) return e;
                    let n = {},
                        {
                            inputs: a = {}
                        } = t.config.value;
                    for (let e in a) null == a[e] && (n[e] = 0);
                    return n
                },
                l = e => e.value.inputs ? ? {},
                f = (e, t) => {
                    if ((t.config ? .target ? .selectorGuids || []).length > 0) return e;
                    let n = t ? .config ? .target ? .pluginElement;
                    return n ? i(n) : null
                },
                s = (e, {
                    PLUGIN_RIVE: t
                }, i) => {
                    let o = c();
                    if (!o) return;
                    let d = o.getInstance(e),
                        r = o.rive.StateMachineInputType,
                        {
                            name: l,
                            inputs: f = {}
                        } = i.config.value || {};

                    function s(e) {
                        if (e.loaded) i();
                        else {
                            let t = () => {
                                i(), e ? .off("load", t)
                            };
                            e ? .on("load", t)
                        }

                        function i() {
                            let i = e.stateMachineInputs(l);
                            if (null != i) {
                                if (!e.isPlaying && e.play(l, !1), n in f || a in f) {
                                    let t = e.layout,
                                        i = f[n] ? ? t.fit,
                                        c = f[a] ? ? t.alignment;
                                    (i !== t.fit || c !== t.alignment) && (e.layout = t.copyWith({
                                        fit: i,
                                        alignment: c
                                    }))
                                }
                                for (let e in f) {
                                    if (e === n || e === a) continue;
                                    let c = i.find(t => t.name === e);
                                    if (null != c) switch (c.type) {
                                        case r.Boolean:
                                            if (null != f[e]) {
                                                let t = !!f[e];
                                                c.value = t
                                            }
                                            break;
                                        case r.Number:
                                            {
                                                let n = t[e];null != n && (c.value = n);
                                                break
                                            }
                                        case r.Trigger:
                                            f[e] && c.fire()
                                    }
                                }
                            }
                        }
                    }
                    d ? .rive ? s(d.rive) : o.setLoadHandler(e, s)
                },
                u = (e, t) => null
        },
        2866: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            ! function(e, t) {
                for (var n in t) Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: t[n]
                })
            }(t, {
                clearPlugin: function() {
                    return u
                },
                createPluginInstance: function() {
                    return f
                },
                getPluginConfig: function() {
                    return c
                },
                getPluginDestination: function() {
                    return l
                },
                getPluginDuration: function() {
                    return o
                },
                getPluginOrigin: function() {
                    return r
                },
                renderPlugin: function() {
                    return s
                }
            });
            let n = e => document.querySelector(`[data-w-id="${e}"]`),
                a = () => window.Webflow.require("spline"),
                i = (e, t) => e.filter(e => !t.includes(e)),
                c = (e, t) => e.value[t],
                o = () => null,
                d = Object.freeze({
                    positionX: 0,
                    positionY: 0,
                    positionZ: 0,
                    rotationX: 0,
                    rotationY: 0,
                    rotationZ: 0,
                    scaleX: 1,
                    scaleY: 1,
                    scaleZ: 1
                }),
                r = (e, t) => {
                    let n = Object.keys(t.config.value);
                    if (e) {
                        let t = i(n, Object.keys(e));
                        return t.length ? t.reduce((e, t) => (e[t] = d[t], e), e) : e
                    }
                    return n.reduce((e, t) => (e[t] = d[t], e), {})
                },
                l = e => e.value,
                f = (e, t) => {
                    let a = t ? .config ? .target ? .pluginElement;
                    return a ? n(a) : null
                },
                s = (e, t, n) => {
                    let i = a();
                    if (!i) return;
                    let c = i.getInstance(e),
                        o = n.config.target.objectId,
                        d = e => {
                            if (!e) throw Error("Invalid spline app passed to renderSpline");
                            let n = o && e.findObjectById(o);
                            if (!n) return;
                            let {
                                PLUGIN_SPLINE: a
                            } = t;
                            null != a.positionX && (n.position.x = a.positionX), null != a.positionY && (n.position.y = a.positionY), null != a.positionZ && (n.position.z = a.positionZ), null != a.rotationX && (n.rotation.x = a.rotationX), null != a.rotationY && (n.rotation.y = a.rotationY), null != a.rotationZ && (n.rotation.z = a.rotationZ), null != a.scaleX && (n.scale.x = a.scaleX), null != a.scaleY && (n.scale.y = a.scaleY), null != a.scaleZ && (n.scale.z = a.scaleZ)
                        };
                    c ? d(c.spline) : i.setLoadHandler(e, d)
                },
                u = () => null
        },
        1407: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            ! function(e, t) {
                for (var n in t) Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: t[n]
                })
            }(t, {
                clearPlugin: function() {
                    return s
                },
                createPluginInstance: function() {
                    return r
                },
                getPluginConfig: function() {
                    return i
                },
                getPluginDestination: function() {
                    return d
                },
                getPluginDuration: function() {
                    return c
                },
                getPluginOrigin: function() {
                    return o
                },
                renderPlugin: function() {
                    return f
                }
            });
            let a = n(380),
                i = (e, t) => e.value[t],
                c = () => null,
                o = (e, t) => {
                    if (e) return e;
                    let n = t.config.value,
                        i = t.config.target.objectId,
                        c = getComputedStyle(document.documentElement).getPropertyValue(i);
                    return null != n.size ? {
                        size: parseInt(c, 10)
                    } : "%" === n.unit || "-" === n.unit ? {
                        size: parseFloat(c)
                    } : null != n.red && null != n.green && null != n.blue ? (0, a.normalizeColor)(c) : void 0
                },
                d = e => e.value,
                r = () => null,
                l = {
                    color: {
                        match: ({
                            red: e,
                            green: t,
                            blue: n,
                            alpha: a
                        }) => [e, t, n, a].every(e => null != e),
                        getValue: ({
                            red: e,
                            green: t,
                            blue: n,
                            alpha: a
                        }) => `rgba(${e}, ${t}, ${n}, ${a})`
                    },
                    size: {
                        match: ({
                            size: e
                        }) => null != e,
                        getValue: ({
                            size: e
                        }, t) => {
                            if ("-" === t) return e;
                            return `${e}${t}`
                        }
                    }
                },
                f = (e, t, n) => {
                    let {
                        target: {
                            objectId: a
                        },
                        value: {
                            unit: i
                        }
                    } = n.config, c = t.PLUGIN_VARIABLE, o = Object.values(l).find(e => e.match(c, i));
                    o && document.documentElement.style.setProperty(a, o.getValue(c, i))
                },
                s = (e, t) => {
                    let n = t.config.target.objectId;
                    document.documentElement.style.removeProperty(n)
                }
        },
        3690: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "pluginMethodMap", {
                enumerable: !0,
                get: function() {
                    return f
                }
            });
            let a = n(7087),
                i = l(n(7377)),
                c = l(n(2866)),
                o = l(n(2570)),
                d = l(n(1407));

            function r(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (r = function(e) {
                    return e ? n : t
                })(e)
            }

            function l(e, t) {
                if (!t && e && e.__esModule) return e;
                if (null === e || "object" != typeof e && "function" != typeof e) return {
                    default: e
                };
                var n = r(t);
                if (n && n.has(e)) return n.get(e);
                var a = {
                        __proto__: null
                    },
                    i = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var c in e)
                    if ("default" !== c && Object.prototype.hasOwnProperty.call(e, c)) {
                        var o = i ? Object.getOwnPropertyDescriptor(e, c) : null;
                        o && (o.get || o.set) ? Object.defineProperty(a, c, o) : a[c] = e[c]
                    }
                return a.default = e, n && n.set(e, a), a
            }
            let f = new Map([
                [a.ActionTypeConsts.PLUGIN_LOTTIE, { ...i
                }],
                [a.ActionTypeConsts.PLUGIN_SPLINE, { ...c
                }],
                [a.ActionTypeConsts.PLUGIN_RIVE, { ...o
                }],
                [a.ActionTypeConsts.PLUGIN_VARIABLE, { ...d
                }]
            ])
        },
        8023: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            ! function(e, t) {
                for (var n in t) Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: t[n]
                })
            }(t, {
                IX2_ACTION_LIST_PLAYBACK_CHANGED: function() {
                    return g
                },
                IX2_ANIMATION_FRAME_CHANGED: function() {
                    return u
                },
                IX2_CLEAR_REQUESTED: function() {
                    return l
                },
                IX2_ELEMENT_STATE_CHANGED: function() {
                    return p
                },
                IX2_EVENT_LISTENER_ADDED: function() {
                    return f
                },
                IX2_EVENT_STATE_CHANGED: function() {
                    return s
                },
                IX2_INSTANCE_ADDED: function() {
                    return I
                },
                IX2_INSTANCE_REMOVED: function() {
                    return y
                },
                IX2_INSTANCE_STARTED: function() {
                    return T
                },
                IX2_MEDIA_QUERIES_DEFINED: function() {
                    return O
                },
                IX2_PARAMETER_CHANGED: function() {
                    return E
                },
                IX2_PLAYBACK_REQUESTED: function() {
                    return d
                },
                IX2_PREVIEW_REQUESTED: function() {
                    return o
                },
                IX2_RAW_DATA_IMPORTED: function() {
                    return n
                },
                IX2_SESSION_INITIALIZED: function() {
                    return a
                },
                IX2_SESSION_STARTED: function() {
                    return i
                },
                IX2_SESSION_STOPPED: function() {
                    return c
                },
                IX2_STOP_REQUESTED: function() {
                    return r
                },
                IX2_TEST_FRAME_RENDERED: function() {
                    return m
                },
                IX2_VIEWPORT_WIDTH_CHANGED: function() {
                    return b
                }
            });
            let n = "IX2_RAW_DATA_IMPORTED",
                a = "IX2_SESSION_INITIALIZED",
                i = "IX2_SESSION_STARTED",
                c = "IX2_SESSION_STOPPED",
                o = "IX2_PREVIEW_REQUESTED",
                d = "IX2_PLAYBACK_REQUESTED",
                r = "IX2_STOP_REQUESTED",
                l = "IX2_CLEAR_REQUESTED",
                f = "IX2_EVENT_LISTENER_ADDED",
                s = "IX2_EVENT_STATE_CHANGED",
                u = "IX2_ANIMATION_FRAME_CHANGED",
                E = "IX2_PARAMETER_CHANGED",
                I = "IX2_INSTANCE_ADDED",
                T = "IX2_INSTANCE_STARTED",
                y = "IX2_INSTANCE_REMOVED",
                p = "IX2_ELEMENT_STATE_CHANGED",
                g = "IX2_ACTION_LIST_PLAYBACK_CHANGED",
                b = "IX2_VIEWPORT_WIDTH_CHANGED",
                O = "IX2_MEDIA_QUERIES_DEFINED",
                m = "IX2_TEST_FRAME_RENDERED"
        },
        2686: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            ! function(e, t) {
                for (var n in t) Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: t[n]
                })
            }(t, {
                ABSTRACT_NODE: function() {
                    return J
                },
                AUTO: function() {
                    return w
                },
                BACKGROUND: function() {
                    return x
                },
                BACKGROUND_COLOR: function() {
                    return h
                },
                BAR_DELIMITER: function() {
                    return j
                },
                BORDER_COLOR: function() {
                    return D
                },
                BOUNDARY_SELECTOR: function() {
                    return o
                },
                CHILDREN: function() {
                    return z
                },
                COLON_DELIMITER: function() {
                    return W
                },
                COLOR: function() {
                    return k
                },
                COMMA_DELIMITER: function() {
                    return H
                },
                CONFIG_UNIT: function() {
                    return I
                },
                CONFIG_VALUE: function() {
                    return f
                },
                CONFIG_X_UNIT: function() {
                    return s
                },
                CONFIG_X_VALUE: function() {
                    return d
                },
                CONFIG_Y_UNIT: function() {
                    return u
                },
                CONFIG_Y_VALUE: function() {
                    return r
                },
                CONFIG_Z_UNIT: function() {
                    return E
                },
                CONFIG_Z_VALUE: function() {
                    return l
                },
                DISPLAY: function() {
                    return G
                },
                FILTER: function() {
                    return V
                },
                FLEX: function() {
                    return X
                },
                FONT_VARIATION_SETTINGS: function() {
                    return P
                },
                HEIGHT: function() {
                    return U
                },
                HTML_ELEMENT: function() {
                    return q
                },
                IMMEDIATE_CHILDREN: function() {
                    return Q
                },
                IX2_ID_DELIMITER: function() {
                    return n
                },
                OPACITY: function() {
                    return M
                },
                PARENT: function() {
                    return $
                },
                PLAIN_OBJECT: function() {
                    return Z
                },
                PRESERVE_3D: function() {
                    return K
                },
                RENDER_GENERAL: function() {
                    return et
                },
                RENDER_PLUGIN: function() {
                    return ea
                },
                RENDER_STYLE: function() {
                    return en
                },
                RENDER_TRANSFORM: function() {
                    return ee
                },
                ROTATE_X: function() {
                    return N
                },
                ROTATE_Y: function() {
                    return L
                },
                ROTATE_Z: function() {
                    return A
                },
                SCALE_3D: function() {
                    return _
                },
                SCALE_X: function() {
                    return O
                },
                SCALE_Y: function() {
                    return m
                },
                SCALE_Z: function() {
                    return R
                },
                SIBLINGS: function() {
                    return Y
                },
                SKEW: function() {
                    return S
                },
                SKEW_X: function() {
                    return C
                },
                SKEW_Y: function() {
                    return v
                },
                TRANSFORM: function() {
                    return T
                },
                TRANSLATE_3D: function() {
                    return b
                },
                TRANSLATE_X: function() {
                    return y
                },
                TRANSLATE_Y: function() {
                    return p
                },
                TRANSLATE_Z: function() {
                    return g
                },
                WF_PAGE: function() {
                    return a
                },
                WIDTH: function() {
                    return F
                },
                WILL_CHANGE: function() {
                    return B
                },
                W_MOD_IX: function() {
                    return c
                },
                W_MOD_JS: function() {
                    return i
                }
            });
            let n = "|",
                a = "data-wf-page",
                i = "w-mod-js",
                c = "w-mod-ix",
                o = ".w-dyn-item",
                d = "xValue",
                r = "yValue",
                l = "zValue",
                f = "value",
                s = "xUnit",
                u = "yUnit",
                E = "zUnit",
                I = "unit",
                T = "transform",
                y = "translateX",
                p = "translateY",
                g = "translateZ",
                b = "translate3d",
                O = "scaleX",
                m = "scaleY",
                R = "scaleZ",
                _ = "scale3d",
                N = "rotateX",
                L = "rotateY",
                A = "rotateZ",
                S = "skew",
                C = "skewX",
                v = "skewY",
                M = "opacity",
                V = "filter",
                P = "font-variation-settings",
                F = "width",
                U = "height",
                h = "backgroundColor",
                x = "background",
                D = "borderColor",
                k = "color",
                G = "display",
                X = "flex",
                B = "willChange",
                w = "AUTO",
                H = ",",
                W = ":",
                j = "|",
                z = "CHILDREN",
                Q = "IMMEDIATE_CHILDREN",
                Y = "SIBLINGS",
                $ = "PARENT",
                K = "preserve-3d",
                q = "HTML_ELEMENT",
                Z = "PLAIN_OBJECT",
                J = "ABSTRACT_NODE",
                ee = "RENDER_TRANSFORM",
                et = "RENDER_GENERAL",
                en = "RENDER_STYLE",
                ea = "RENDER_PLUGIN"
        },
        262: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            ! function(e, t) {
                for (var n in t) Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: t[n]
                })
            }(t, {
                ActionAppliesTo: function() {
                    return a
                },
                ActionTypeConsts: function() {
                    return n
                }
            });
            let n = {
                    TRANSFORM_MOVE: "TRANSFORM_MOVE",
                    TRANSFORM_SCALE: "TRANSFORM_SCALE",
                    TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
                    TRANSFORM_SKEW: "TRANSFORM_SKEW",
                    STYLE_OPACITY: "STYLE_OPACITY",
                    STYLE_SIZE: "STYLE_SIZE",
                    STYLE_FILTER: "STYLE_FILTER",
                    STYLE_FONT_VARIATION: "STYLE_FONT_VARIATION",
                    STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
                    STYLE_BORDER: "STYLE_BORDER",
                    STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
                    OBJECT_VALUE: "OBJECT_VALUE",
                    PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
                    PLUGIN_SPLINE: "PLUGIN_SPLINE",
                    PLUGIN_RIVE: "PLUGIN_RIVE",
                    PLUGIN_VARIABLE: "PLUGIN_VARIABLE",
                    GENERAL_DISPLAY: "GENERAL_DISPLAY",
                    GENERAL_START_ACTION: "GENERAL_START_ACTION",
                    GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
                    GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
                    GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
                    GENERAL_LOOP: "GENERAL_LOOP",
                    STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW"
                },
                a = {
                    ELEMENT: "ELEMENT",
                    ELEMENT_CLASS: "ELEMENT_CLASS",
                    TRIGGER_ELEMENT: "TRIGGER_ELEMENT"
                }
        },
        7087: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            ! function(e, t) {
                for (var n in t) Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: t[n]
                })
            }(t, {
                ActionTypeConsts: function() {
                    return i.ActionTypeConsts
                },
                IX2EngineActionTypes: function() {
                    return c
                },
                IX2EngineConstants: function() {
                    return o
                },
                QuickEffectIds: function() {
                    return a.QuickEffectIds
                }
            });
            let a = d(n(1833), t),
                i = d(n(262), t);
            d(n(8704), t), d(n(3213), t);
            let c = l(n(8023)),
                o = l(n(2686));

            function d(e, t) {
                return Object.keys(e).forEach(function(n) {
                    "default" !== n && !Object.prototype.hasOwnProperty.call(t, n) && Object.defineProperty(t, n, {
                        enumerable: !0,
                        get: function() {
                            return e[n]
                        }
                    })
                }), e
            }

            function r(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (r = function(e) {
                    return e ? n : t
                })(e)
            }

            function l(e, t) {
                if (!t && e && e.__esModule) return e;
                if (null === e || "object" != typeof e && "function" != typeof e) return {
                    default: e
                };
                var n = r(t);
                if (n && n.has(e)) return n.get(e);
                var a = {
                        __proto__: null
                    },
                    i = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var c in e)
                    if ("default" !== c && Object.prototype.hasOwnProperty.call(e, c)) {
                        var o = i ? Object.getOwnPropertyDescriptor(e, c) : null;
                        o && (o.get || o.set) ? Object.defineProperty(a, c, o) : a[c] = e[c]
                    }
                return a.default = e, n && n.set(e, a), a
            }
        },
        3213: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "ReducedMotionTypes", {
                enumerable: !0,
                get: function() {
                    return f
                }
            });
            let {
                TRANSFORM_MOVE: a,
                TRANSFORM_SCALE: i,
                TRANSFORM_ROTATE: c,
                TRANSFORM_SKEW: o,
                STYLE_SIZE: d,
                STYLE_FILTER: r,
                STYLE_FONT_VARIATION: l
            } = n(262).ActionTypeConsts, f = {
                [a]: !0,
                [i]: !0,
                [c]: !0,
                [o]: !0,
                [d]: !0,
                [r]: !0,
                [l]: !0
            }
        },
        1833: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            ! function(e, t) {
                for (var n in t) Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: t[n]
                })
            }(t, {
                EventAppliesTo: function() {
                    return a
                },
                EventBasedOn: function() {
                    return i
                },
                EventContinuousMouseAxes: function() {
                    return c
                },
                EventLimitAffectedElements: function() {
                    return o
                },
                EventTypeConsts: function() {
                    return n
                },
                QuickEffectDirectionConsts: function() {
                    return r
                },
                QuickEffectIds: function() {
                    return d
                }
            });
            let n = {
                    NAVBAR_OPEN: "NAVBAR_OPEN",
                    NAVBAR_CLOSE: "NAVBAR_CLOSE",
                    TAB_ACTIVE: "TAB_ACTIVE",
                    TAB_INACTIVE: "TAB_INACTIVE",
                    SLIDER_ACTIVE: "SLIDER_ACTIVE",
                    SLIDER_INACTIVE: "SLIDER_INACTIVE",
                    DROPDOWN_OPEN: "DROPDOWN_OPEN",
                    DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
                    MOUSE_CLICK: "MOUSE_CLICK",
                    MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
                    MOUSE_DOWN: "MOUSE_DOWN",
                    MOUSE_UP: "MOUSE_UP",
                    MOUSE_OVER: "MOUSE_OVER",
                    MOUSE_OUT: "MOUSE_OUT",
                    MOUSE_MOVE: "MOUSE_MOVE",
                    MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
                    SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
                    SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
                    SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
                    ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
                    ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
                    PAGE_START: "PAGE_START",
                    PAGE_FINISH: "PAGE_FINISH",
                    PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
                    PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
                    PAGE_SCROLL: "PAGE_SCROLL"
                },
                a = {
                    ELEMENT: "ELEMENT",
                    CLASS: "CLASS",
                    PAGE: "PAGE"
                },
                i = {
                    ELEMENT: "ELEMENT",
                    VIEWPORT: "VIEWPORT"
                },
                c = {
                    X_AXIS: "X_AXIS",
                    Y_AXIS: "Y_AXIS"
                },
                o = {
                    CHILDREN: "CHILDREN",
                    SIBLINGS: "SIBLINGS",
                    IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN"
                },
                d = {
                    FADE_EFFECT: "FADE_EFFECT",
                    SLIDE_EFFECT: "SLIDE_EFFECT",
                    GROW_EFFECT: "GROW_EFFECT",
                    SHRINK_EFFECT: "SHRINK_EFFECT",
                    SPIN_EFFECT: "SPIN_EFFECT",
                    FLY_EFFECT: "FLY_EFFECT",
                    POP_EFFECT: "POP_EFFECT",
                    FLIP_EFFECT: "FLIP_EFFECT",
                    JIGGLE_EFFECT: "JIGGLE_EFFECT",
                    PULSE_EFFECT: "PULSE_EFFECT",
                    DROP_EFFECT: "DROP_EFFECT",
                    BLINK_EFFECT: "BLINK_EFFECT",
                    BOUNCE_EFFECT: "BOUNCE_EFFECT",
                    FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
                    FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
                    RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
                    JELLO_EFFECT: "JELLO_EFFECT",
                    GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
                    SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
                    PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT"
                },
                r = {
                    LEFT: "LEFT",
                    RIGHT: "RIGHT",
                    BOTTOM: "BOTTOM",
                    TOP: "TOP",
                    BOTTOM_LEFT: "BOTTOM_LEFT",
                    BOTTOM_RIGHT: "BOTTOM_RIGHT",
                    TOP_RIGHT: "TOP_RIGHT",
                    TOP_LEFT: "TOP_LEFT",
                    CLOCKWISE: "CLOCKWISE",
                    COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE"
                }
        },
        8704: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "InteractionTypeConsts", {
                enumerable: !0,
                get: function() {
                    return n
                }
            });
            let n = {
                MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
                MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
                MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
                SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
                SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
                MOUSE_MOVE_IN_VIEWPORT_INTERACTION: "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
                PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
                PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
                PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
                NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
                DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
                ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
                TAB_INTERACTION: "TAB_INTERACTION",
                SLIDER_INTERACTION: "SLIDER_INTERACTION"
            }
        },
        380: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "normalizeColor", {
                enumerable: !0,
                get: function() {
                    return a
                }
            });
            let n = {
                aliceblue: "#F0F8FF",
                antiquewhite: "#FAEBD7",
                aqua: "#00FFFF",
                aquamarine: "#7FFFD4",
                azure: "#F0FFFF",
                beige: "#F5F5DC",
                bisque: "#FFE4C4",
                black: "#000000",
                blanchedalmond: "#FFEBCD",
                blue: "#0000FF",
                blueviolet: "#8A2BE2",
                brown: "#A52A2A",
                burlywood: "#DEB887",
                cadetblue: "#5F9EA0",
                chartreuse: "#7FFF00",
                chocolate: "#D2691E",
                coral: "#FF7F50",
                cornflowerblue: "#6495ED",
                cornsilk: "#FFF8DC",
                crimson: "#DC143C",
                cyan: "#00FFFF",
                darkblue: "#00008B",
                darkcyan: "#008B8B",
                darkgoldenrod: "#B8860B",
                darkgray: "#A9A9A9",
                darkgreen: "#006400",
                darkgrey: "#A9A9A9",
                darkkhaki: "#BDB76B",
                darkmagenta: "#8B008B",
                darkolivegreen: "#556B2F",
                darkorange: "#FF8C00",
                darkorchid: "#9932CC",
                darkred: "#8B0000",
                darksalmon: "#E9967A",
                darkseagreen: "#8FBC8F",
                darkslateblue: "#483D8B",
                darkslategray: "#2F4F4F",
                darkslategrey: "#2F4F4F",
                darkturquoise: "#00CED1",
                darkviolet: "#9400D3",
                deeppink: "#FF1493",
                deepskyblue: "#00BFFF",
                dimgray: "#696969",
                dimgrey: "#696969",
                dodgerblue: "#1E90FF",
                firebrick: "#B22222",
                floralwhite: "#FFFAF0",
                forestgreen: "#228B22",
                fuchsia: "#FF00FF",
                gainsboro: "#DCDCDC",
                ghostwhite: "#F8F8FF",
                gold: "#FFD700",
                goldenrod: "#DAA520",
                gray: "#808080",
                green: "#008000",
                greenyellow: "#ADFF2F",
                grey: "#808080",
                honeydew: "#F0FFF0",
                hotpink: "#FF69B4",
                indianred: "#CD5C5C",
                indigo: "#4B0082",
                ivory: "#FFFFF0",
                khaki: "#F0E68C",
                lavender: "#E6E6FA",
                lavenderblush: "#FFF0F5",
                lawngreen: "#7CFC00",
                lemonchiffon: "#FFFACD",
                lightblue: "#ADD8E6",
                lightcoral: "#F08080",
                lightcyan: "#E0FFFF",
                lightgoldenrodyellow: "#FAFAD2",
                lightgray: "#D3D3D3",
                lightgreen: "#90EE90",
                lightgrey: "#D3D3D3",
                lightpink: "#FFB6C1",
                lightsalmon: "#FFA07A",
                lightseagreen: "#20B2AA",
                lightskyblue: "#87CEFA",
                lightslategray: "#778899",
                lightslategrey: "#778899",
                lightsteelblue: "#B0C4DE",
                lightyellow: "#FFFFE0",
                lime: "#00FF00",
                limegreen: "#32CD32",
                linen: "#FAF0E6",
                magenta: "#FF00FF",
                maroon: "#800000",
                mediumaquamarine: "#66CDAA",
                mediumblue: "#0000CD",
                mediumorchid: "#BA55D3",
                mediumpurple: "#9370DB",
                mediumseagreen: "#3CB371",
                mediumslateblue: "#7B68EE",
                mediumspringgreen: "#00FA9A",
                mediumturquoise: "#48D1CC",
                mediumvioletred: "#C71585",
                midnightblue: "#191970",
                mintcream: "#F5FFFA",
                mistyrose: "#FFE4E1",
                moccasin: "#FFE4B5",
                navajowhite: "#FFDEAD",
                navy: "#000080",
                oldlace: "#FDF5E6",
                olive: "#808000",
                olivedrab: "#6B8E23",
                orange: "#FFA500",
                orangered: "#FF4500",
                orchid: "#DA70D6",
                palegoldenrod: "#EEE8AA",
                palegreen: "#98FB98",
                paleturquoise: "#AFEEEE",
                palevioletred: "#DB7093",
                papayawhip: "#FFEFD5",
                peachpuff: "#FFDAB9",
                peru: "#CD853F",
                pink: "#FFC0CB",
                plum: "#DDA0DD",
                powderblue: "#B0E0E6",
                purple: "#800080",
                rebeccapurple: "#663399",
                red: "#FF0000",
                rosybrown: "#BC8F8F",
                royalblue: "#4169E1",
                saddlebrown: "#8B4513",
                salmon: "#FA8072",
                sandybrown: "#F4A460",
                seagreen: "#2E8B57",
                seashell: "#FFF5EE",
                sienna: "#A0522D",
                silver: "#C0C0C0",
                skyblue: "#87CEEB",
                slateblue: "#6A5ACD",
                slategray: "#708090",
                slategrey: "#708090",
                snow: "#FFFAFA",
                springgreen: "#00FF7F",
                steelblue: "#4682B4",
                tan: "#D2B48C",
                teal: "#008080",
                thistle: "#D8BFD8",
                tomato: "#FF6347",
                turquoise: "#40E0D0",
                violet: "#EE82EE",
                wheat: "#F5DEB3",
                white: "#FFFFFF",
                whitesmoke: "#F5F5F5",
                yellow: "#FFFF00",
                yellowgreen: "#9ACD32"
            };

            function a(e) {
                let t, a, i;
                let c = 1,
                    o = e.replace(/\s/g, "").toLowerCase(),
                    d = ("string" == typeof n[o] ? n[o].toLowerCase() : null) || o;
                if (d.startsWith("#")) {
                    let e = d.substring(1);
                    3 === e.length || 4 === e.length ? (t = parseInt(e[0] + e[0], 16), a = parseInt(e[1] + e[1], 16), i = parseInt(e[2] + e[2], 16), 4 === e.length && (c = parseInt(e[3] + e[3], 16) / 255)) : (6 === e.length || 8 === e.length) && (t = parseInt(e.substring(0, 2), 16), a = parseInt(e.substring(2, 4), 16), i = parseInt(e.substring(4, 6), 16), 8 === e.length && (c = parseInt(e.substring(6, 8), 16) / 255))
                } else if (d.startsWith("rgba")) {
                    let e = d.match(/rgba\(([^)]+)\)/)[1].split(",");
                    t = parseInt(e[0], 10), a = parseInt(e[1], 10), i = parseInt(e[2], 10), c = parseFloat(e[3])
                } else if (d.startsWith("rgb")) {
                    let e = d.match(/rgb\(([^)]+)\)/)[1].split(",");
                    t = parseInt(e[0], 10), a = parseInt(e[1], 10), i = parseInt(e[2], 10)
                } else if (d.startsWith("hsla")) {
                    let e, n, o;
                    let r = d.match(/hsla\(([^)]+)\)/)[1].split(","),
                        l = parseFloat(r[0]),
                        f = parseFloat(r[1].replace("%", "")) / 100,
                        s = parseFloat(r[2].replace("%", "")) / 100;
                    c = parseFloat(r[3]);
                    let u = (1 - Math.abs(2 * s - 1)) * f,
                        E = u * (1 - Math.abs(l / 60 % 2 - 1)),
                        I = s - u / 2;
                    l >= 0 && l < 60 ? (e = u, n = E, o = 0) : l >= 60 && l < 120 ? (e = E, n = u, o = 0) : l >= 120 && l < 180 ? (e = 0, n = u, o = E) : l >= 180 && l < 240 ? (e = 0, n = E, o = u) : l >= 240 && l < 300 ? (e = E, n = 0, o = u) : (e = u, n = 0, o = E), t = Math.round((e + I) * 255), a = Math.round((n + I) * 255), i = Math.round((o + I) * 255)
                } else if (d.startsWith("hsl")) {
                    let e, n, c;
                    let o = d.match(/hsl\(([^)]+)\)/)[1].split(","),
                        r = parseFloat(o[0]),
                        l = parseFloat(o[1].replace("%", "")) / 100,
                        f = parseFloat(o[2].replace("%", "")) / 100,
                        s = (1 - Math.abs(2 * f - 1)) * l,
                        u = s * (1 - Math.abs(r / 60 % 2 - 1)),
                        E = f - s / 2;
                    r >= 0 && r < 60 ? (e = s, n = u, c = 0) : r >= 60 && r < 120 ? (e = u, n = s, c = 0) : r >= 120 && r < 180 ? (e = 0, n = s, c = u) : r >= 180 && r < 240 ? (e = 0, n = u, c = s) : r >= 240 && r < 300 ? (e = u, n = 0, c = s) : (e = s, n = 0, c = u), t = Math.round((e + E) * 255), a = Math.round((n + E) * 255), i = Math.round((c + E) * 255)
                }
                if (Number.isNaN(t) || Number.isNaN(a) || Number.isNaN(i)) throw Error(`Invalid color in [ix2/shared/utils/normalizeColor.js] '${e}'`);
                return {
                    red: t,
                    green: a,
                    blue: i,
                    alpha: c
                }
            }
        },
        9468: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            ! function(e, t) {
                for (var n in t) Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: t[n]
                })
            }(t, {
                IX2BrowserSupport: function() {
                    return a
                },
                IX2EasingUtils: function() {
                    return c
                },
                IX2Easings: function() {
                    return i
                },
                IX2ElementsReducer: function() {
                    return o
                },
                IX2VanillaPlugins: function() {
                    return d
                },
                IX2VanillaUtils: function() {
                    return r
                }
            });
            let a = f(n(2662)),
                i = f(n(8686)),
                c = f(n(3767)),
                o = f(n(5861)),
                d = f(n(1799)),
                r = f(n(4124));

            function l(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (l = function(e) {
                    return e ? n : t
                })(e)
            }

            function f(e, t) {
                if (!t && e && e.__esModule) return e;
                if (null === e || "object" != typeof e && "function" != typeof e) return {
                    default: e
                };
                var n = l(t);
                if (n && n.has(e)) return n.get(e);
                var a = {
                        __proto__: null
                    },
                    i = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var c in e)
                    if ("default" !== c && Object.prototype.hasOwnProperty.call(e, c)) {
                        var o = i ? Object.getOwnPropertyDescriptor(e, c) : null;
                        o && (o.get || o.set) ? Object.defineProperty(a, c, o) : a[c] = e[c]
                    }
                return a.default = e, n && n.set(e, a), a
            }
        },
        2662: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            ! function(e, t) {
                for (var n in t) Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: t[n]
                })
            }(t, {
                ELEMENT_MATCHES: function() {
                    return o
                },
                FLEX_PREFIXED: function() {
                    return d
                },
                IS_BROWSER_ENV: function() {
                    return i
                },
                TRANSFORM_PREFIXED: function() {
                    return r
                },
                TRANSFORM_STYLE_PREFIXED: function() {
                    return f
                },
                withBrowser: function() {
                    return c
                }
            });
            let a = function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }(n(9777)),
                i = "undefined" != typeof window,
                c = (e, t) => i ? e() : t,
                o = c(() => (0, a.default)(["matches", "matchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector", "webkitMatchesSelector"], e => e in Element.prototype)),
                d = c(() => {
                    let e = document.createElement("i"),
                        t = ["flex", "-webkit-flex", "-ms-flexbox", "-moz-box", "-webkit-box"];
                    try {
                        let {
                            length: n
                        } = t;
                        for (let a = 0; a < n; a++) {
                            let n = t[a];
                            if (e.style.display = n, e.style.display === n) return n
                        }
                        return ""
                    } catch (e) {
                        return ""
                    }
                }, "flex"),
                r = c(() => {
                    let e = document.createElement("i");
                    if (null == e.style.transform) {
                        let t = ["Webkit", "Moz", "ms"],
                            {
                                length: n
                            } = t;
                        for (let a = 0; a < n; a++) {
                            let n = t[a] + "Transform";
                            if (void 0 !== e.style[n]) return n
                        }
                    }
                    return "transform"
                }, "transform"),
                l = r.split("transform")[0],
                f = l ? l + "TransformStyle" : "transformStyle"
        },
        3767: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            ! function(e, t) {
                for (var n in t) Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: t[n]
                })
            }(t, {
                applyEasing: function() {
                    return r
                },
                createBezierEasing: function() {
                    return d
                },
                optimizeFloat: function() {
                    return o
                }
            });
            let a = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var n = c(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = {
                            __proto__: null
                        },
                        i = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                        if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                            var d = i ? Object.getOwnPropertyDescriptor(e, o) : null;
                            d && (d.get || d.set) ? Object.defineProperty(a, o, d) : a[o] = e[o]
                        }
                    return a.default = e, n && n.set(e, a), a
                }(n(8686)),
                i = function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }(n(1361));

            function c(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (c = function(e) {
                    return e ? n : t
                })(e)
            }

            function o(e, t = 5, n = 10) {
                let a = Math.pow(n, t),
                    i = Number(Math.round(e * a) / a);
                return Math.abs(i) > 1e-4 ? i : 0
            }

            function d(e) {
                return (0, i.default)(...e)
            }

            function r(e, t, n) {
                return 0 === t ? 0 : 1 === t ? 1 : n ? o(t > 0 ? n(t) : t) : o(t > 0 && e && a[e] ? a[e](t) : t)
            }
        },
        8686: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            ! function(e, t) {
                for (var n in t) Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: t[n]
                })
            }(t, {
                bounce: function() {
                    return G
                },
                bouncePast: function() {
                    return X
                },
                ease: function() {
                    return i
                },
                easeIn: function() {
                    return c
                },
                easeInOut: function() {
                    return d
                },
                easeOut: function() {
                    return o
                },
                inBack: function() {
                    return M
                },
                inCirc: function() {
                    return A
                },
                inCubic: function() {
                    return s
                },
                inElastic: function() {
                    return F
                },
                inExpo: function() {
                    return _
                },
                inOutBack: function() {
                    return P
                },
                inOutCirc: function() {
                    return C
                },
                inOutCubic: function() {
                    return E
                },
                inOutElastic: function() {
                    return h
                },
                inOutExpo: function() {
                    return L
                },
                inOutQuad: function() {
                    return f
                },
                inOutQuart: function() {
                    return y
                },
                inOutQuint: function() {
                    return b
                },
                inOutSine: function() {
                    return R
                },
                inQuad: function() {
                    return r
                },
                inQuart: function() {
                    return I
                },
                inQuint: function() {
                    return p
                },
                inSine: function() {
                    return O
                },
                outBack: function() {
                    return V
                },
                outBounce: function() {
                    return v
                },
                outCirc: function() {
                    return S
                },
                outCubic: function() {
                    return u
                },
                outElastic: function() {
                    return U
                },
                outExpo: function() {
                    return N
                },
                outQuad: function() {
                    return l
                },
                outQuart: function() {
                    return T
                },
                outQuint: function() {
                    return g
                },
                outSine: function() {
                    return m
                },
                swingFrom: function() {
                    return D
                },
                swingFromTo: function() {
                    return x
                },
                swingTo: function() {
                    return k
                }
            });
            let a = function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }(n(1361)),
                i = (0, a.default)(.25, .1, .25, 1),
                c = (0, a.default)(.42, 0, 1, 1),
                o = (0, a.default)(0, 0, .58, 1),
                d = (0, a.default)(.42, 0, .58, 1);

            function r(e) {
                return Math.pow(e, 2)
            }

            function l(e) {
                return -(Math.pow(e - 1, 2) - 1)
            }

            function f(e) {
                return (e /= .5) < 1 ? .5 * Math.pow(e, 2) : -.5 * ((e -= 2) * e - 2)
            }

            function s(e) {
                return Math.pow(e, 3)
            }

            function u(e) {
                return Math.pow(e - 1, 3) + 1
            }

            function E(e) {
                return (e /= .5) < 1 ? .5 * Math.pow(e, 3) : .5 * (Math.pow(e - 2, 3) + 2)
            }

            function I(e) {
                return Math.pow(e, 4)
            }

            function T(e) {
                return -(Math.pow(e - 1, 4) - 1)
            }

            function y(e) {
                return (e /= .5) < 1 ? .5 * Math.pow(e, 4) : -.5 * ((e -= 2) * Math.pow(e, 3) - 2)
            }

            function p(e) {
                return Math.pow(e, 5)
            }

            function g(e) {
                return Math.pow(e - 1, 5) + 1
            }

            function b(e) {
                return (e /= .5) < 1 ? .5 * Math.pow(e, 5) : .5 * (Math.pow(e - 2, 5) + 2)
            }

            function O(e) {
                return -Math.cos(Math.PI / 2 * e) + 1
            }

            function m(e) {
                return Math.sin(Math.PI / 2 * e)
            }

            function R(e) {
                return -.5 * (Math.cos(Math.PI * e) - 1)
            }

            function _(e) {
                return 0 === e ? 0 : Math.pow(2, 10 * (e - 1))
            }

            function N(e) {
                return 1 === e ? 1 : -Math.pow(2, -10 * e) + 1
            }

            function L(e) {
                return 0 === e ? 0 : 1 === e ? 1 : (e /= .5) < 1 ? .5 * Math.pow(2, 10 * (e - 1)) : .5 * (-Math.pow(2, -10 * --e) + 2)
            }

            function A(e) {
                return -(Math.sqrt(1 - e * e) - 1)
            }

            function S(e) {
                return Math.sqrt(1 - Math.pow(e - 1, 2))
            }

            function C(e) {
                return (e /= .5) < 1 ? -.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
            }

            function v(e) {
                if (e < 1 / 2.75) return 7.5625 * e * e;
                if (e < 2 / 2.75) return 7.5625 * (e -= 1.5 / 2.75) * e + .75;
                if (e < 2.5 / 2.75) return 7.5625 * (e -= 2.25 / 2.75) * e + .9375;
                else return 7.5625 * (e -= 2.625 / 2.75) * e + .984375
            }

            function M(e) {
                return e * e * (2.70158 * e - 1.70158)
            }

            function V(e) {
                return (e -= 1) * e * (2.70158 * e + 1.70158) + 1
            }

            function P(e) {
                let t = 1.70158;
                return (e /= .5) < 1 ? .5 * (e * e * (((t *= 1.525) + 1) * e - t)) : .5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2)
            }

            function F(e) {
                let t = 1.70158,
                    n = 0,
                    a = 1;
                return 0 === e ? 0 : 1 === e ? 1 : (!n && (n = .3), a < 1 ? (a = 1, t = n / 4) : t = n / (2 * Math.PI) * Math.asin(1 / a), -(a * Math.pow(2, 10 * (e -= 1)) * Math.sin(2 * Math.PI * (e - t) / n)))
            }

            function U(e) {
                let t = 1.70158,
                    n = 0,
                    a = 1;
                return 0 === e ? 0 : 1 === e ? 1 : (!n && (n = .3), a < 1 ? (a = 1, t = n / 4) : t = n / (2 * Math.PI) * Math.asin(1 / a), a * Math.pow(2, -10 * e) * Math.sin(2 * Math.PI * (e - t) / n) + 1)
            }

            function h(e) {
                let t = 1.70158,
                    n = 0,
                    a = 1;
                return 0 === e ? 0 : 2 == (e /= .5) ? 1 : (!n && (n = .3 * 1.5), a < 1 ? (a = 1, t = n / 4) : t = n / (2 * Math.PI) * Math.asin(1 / a), e < 1) ? -.5 * (a * Math.pow(2, 10 * (e -= 1)) * Math.sin(2 * Math.PI * (e - t) / n)) : a * Math.pow(2, -10 * (e -= 1)) * Math.sin(2 * Math.PI * (e - t) / n) * .5 + 1
            }

            function x(e) {
                let t = 1.70158;
                return (e /= .5) < 1 ? .5 * (e * e * (((t *= 1.525) + 1) * e - t)) : .5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2)
            }

            function D(e) {
                return e * e * (2.70158 * e - 1.70158)
            }

            function k(e) {
                return (e -= 1) * e * (2.70158 * e + 1.70158) + 1
            }

            function G(e) {
                if (e < 1 / 2.75) return 7.5625 * e * e;
                if (e < 2 / 2.75) return 7.5625 * (e -= 1.5 / 2.75) * e + .75;
                if (e < 2.5 / 2.75) return 7.5625 * (e -= 2.25 / 2.75) * e + .9375;
                else return 7.5625 * (e -= 2.625 / 2.75) * e + .984375
            }

            function X(e) {
                if (e < 1 / 2.75) return 7.5625 * e * e;
                if (e < 2 / 2.75) return 2 - (7.5625 * (e -= 1.5 / 2.75) * e + .75);
                if (e < 2.5 / 2.75) return 2 - (7.5625 * (e -= 2.25 / 2.75) * e + .9375);
                else return 2 - (7.5625 * (e -= 2.625 / 2.75) * e + .984375)
            }
        },
        1799: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            ! function(e, t) {
                for (var n in t) Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: t[n]
                })
            }(t, {
                clearPlugin: function() {
                    return E
                },
                createPluginInstance: function() {
                    return s
                },
                getPluginConfig: function() {
                    return d
                },
                getPluginDestination: function() {
                    return f
                },
                getPluginDuration: function() {
                    return l
                },
                getPluginOrigin: function() {
                    return r
                },
                isPluginType: function() {
                    return c
                },
                renderPlugin: function() {
                    return u
                }
            });
            let a = n(2662),
                i = n(3690);

            function c(e) {
                return i.pluginMethodMap.has(e)
            }
            let o = e => t => {
                    if (!a.IS_BROWSER_ENV) return () => null;
                    let n = i.pluginMethodMap.get(t);
                    if (!n) throw Error(`IX2 no plugin configured for: ${t}`);
                    let c = n[e];
                    if (!c) throw Error(`IX2 invalid plugin method: ${e}`);
                    return c
                },
                d = o("getPluginConfig"),
                r = o("getPluginOrigin"),
                l = o("getPluginDuration"),
                f = o("getPluginDestination"),
                s = o("createPluginInstance"),
                u = o("renderPlugin"),
                E = o("clearPlugin")
        },
        4124: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            ! function(e, t) {
                for (var n in t) Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: t[n]
                })
            }(t, {
                cleanupHTMLElement: function() {
                    return eH
                },
                clearAllStyles: function() {
                    return eX
                },
                clearObjectCache: function() {
                    return el
                },
                getActionListProgress: function() {
                    return eQ
                },
                getAffectedElements: function() {
                    return eg
                },
                getComputedStyle: function() {
                    return eb
                },
                getDestinationValues: function() {
                    return eS
                },
                getElementId: function() {
                    return eE
                },
                getInstanceId: function() {
                    return es
                },
                getInstanceOrigin: function() {
                    return e_
                },
                getItemConfigByKey: function() {
                    return eA
                },
                getMaxDurationItemIndex: function() {
                    return ez
                },
                getNamespacedParameterId: function() {
                    return eK
                },
                getRenderType: function() {
                    return eC
                },
                getStyleProp: function() {
                    return ev
                },
                mediaQueriesEqual: function() {
                    return eZ
                },
                observeStore: function() {
                    return ey
                },
                reduceListToGroup: function() {
                    return eY
                },
                reifyState: function() {
                    return eI
                },
                renderHTMLElement: function() {
                    return eM
                },
                shallowEqual: function() {
                    return r.default
                },
                shouldAllowMediaQuery: function() {
                    return eq
                },
                shouldNamespaceEventParameter: function() {
                    return e$
                },
                stringifyTarget: function() {
                    return eJ
                }
            });
            let a = E(n(4075)),
                i = E(n(1455)),
                c = E(n(5720)),
                o = n(1185),
                d = n(7087),
                r = E(n(7164)),
                l = n(3767),
                f = n(380),
                s = n(1799),
                u = n(2662);

            function E(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            let {
                BACKGROUND: I,
                TRANSFORM: T,
                TRANSLATE_3D: y,
                SCALE_3D: p,
                ROTATE_X: g,
                ROTATE_Y: b,
                ROTATE_Z: O,
                SKEW: m,
                PRESERVE_3D: R,
                FLEX: _,
                OPACITY: N,
                FILTER: L,
                FONT_VARIATION_SETTINGS: A,
                WIDTH: S,
                HEIGHT: C,
                BACKGROUND_COLOR: v,
                BORDER_COLOR: M,
                COLOR: V,
                CHILDREN: P,
                IMMEDIATE_CHILDREN: F,
                SIBLINGS: U,
                PARENT: h,
                DISPLAY: x,
                WILL_CHANGE: D,
                AUTO: k,
                COMMA_DELIMITER: G,
                COLON_DELIMITER: X,
                BAR_DELIMITER: B,
                RENDER_TRANSFORM: w,
                RENDER_GENERAL: H,
                RENDER_STYLE: W,
                RENDER_PLUGIN: j
            } = d.IX2EngineConstants, {
                TRANSFORM_MOVE: z,
                TRANSFORM_SCALE: Q,
                TRANSFORM_ROTATE: Y,
                TRANSFORM_SKEW: $,
                STYLE_OPACITY: K,
                STYLE_FILTER: q,
                STYLE_FONT_VARIATION: Z,
                STYLE_SIZE: J,
                STYLE_BACKGROUND_COLOR: ee,
                STYLE_BORDER: et,
                STYLE_TEXT_COLOR: en,
                GENERAL_DISPLAY: ea,
                OBJECT_VALUE: ei
            } = d.ActionTypeConsts, ec = e => e.trim(), eo = Object.freeze({
                [ee]: v,
                [et]: M,
                [en]: V
            }), ed = Object.freeze({
                [u.TRANSFORM_PREFIXED]: T,
                [v]: I,
                [N]: N,
                [L]: L,
                [S]: S,
                [C]: C,
                [A]: A
            }), er = new Map;

            function el() {
                er.clear()
            }
            let ef = 1;

            function es() {
                return "i" + ef++
            }
            let eu = 1;

            function eE(e, t) {
                for (let n in e) {
                    let a = e[n];
                    if (a && a.ref === t) return a.id
                }
                return "e" + eu++
            }

            function eI({
                events: e,
                actionLists: t,
                site: n
            } = {}) {
                let a = (0, i.default)(e, (e, t) => {
                        let {
                            eventTypeId: n
                        } = t;
                        return !e[n] && (e[n] = {}), e[n][t.id] = t, e
                    }, {}),
                    c = n && n.mediaQueries,
                    o = [];
                return c ? o = c.map(e => e.key) : (c = [], console.warn("IX2 missing mediaQueries in site data")), {
                    ixData: {
                        events: e,
                        actionLists: t,
                        eventTypeMap: a,
                        mediaQueries: c,
                        mediaQueryKeys: o
                    }
                }
            }
            let eT = (e, t) => e === t;

            function ey({
                store: e,
                select: t,
                onChange: n,
                comparator: a = eT
            }) {
                let {
                    getState: i,
                    subscribe: c
                } = e, o = c(function() {
                    let c = t(i());
                    if (null == c) {
                        o();
                        return
                    }!a(c, d) && n(d = c, e)
                }), d = t(i());
                return o
            }

            function ep(e) {
                let t = typeof e;
                if ("string" === t) return {
                    id: e
                };
                if (null != e && "object" === t) {
                    let {
                        id: t,
                        objectId: n,
                        selector: a,
                        selectorGuids: i,
                        appliesTo: c,
                        useEventTarget: o
                    } = e;
                    return {
                        id: t,
                        objectId: n,
                        selector: a,
                        selectorGuids: i,
                        appliesTo: c,
                        useEventTarget: o
                    }
                }
                return {}
            }

            function eg({
                config: e,
                event: t,
                eventTarget: n,
                elementRoot: a,
                elementApi: i
            }) {
                let c, o, r;
                if (!i) throw Error("IX2 missing elementApi");
                let {
                    targets: l
                } = e;
                if (Array.isArray(l) && l.length > 0) return l.reduce((e, c) => e.concat(eg({
                    config: {
                        target: c
                    },
                    event: t,
                    eventTarget: n,
                    elementRoot: a,
                    elementApi: i
                })), []);
                let {
                    getValidDocument: f,
                    getQuerySelector: s,
                    queryDocument: E,
                    getChildElements: I,
                    getSiblingElements: T,
                    matchSelector: y,
                    elementContains: p,
                    isSiblingNode: g
                } = i, {
                    target: b
                } = e;
                if (!b) return [];
                let {
                    id: O,
                    objectId: m,
                    selector: R,
                    selectorGuids: _,
                    appliesTo: N,
                    useEventTarget: L
                } = ep(b);
                if (m) return [er.has(m) ? er.get(m) : er.set(m, {}).get(m)];
                if (N === d.EventAppliesTo.PAGE) {
                    let e = f(O);
                    return e ? [e] : []
                }
                let A = (t ? .action ? .config ? .affectedElements ? ? {})[O || R] || {},
                    S = !!(A.id || A.selector),
                    C = t && s(ep(t.target));
                if (S ? (c = A.limitAffectedElements, o = C, r = s(A)) : o = r = s({
                        id: O,
                        selector: R,
                        selectorGuids: _
                    }), t && L) {
                    let e = n && (r || !0 === L) ? [n] : E(C);
                    if (r) {
                        if (L === h) return E(r).filter(t => e.some(e => p(t, e)));
                        if (L === P) return E(r).filter(t => e.some(e => p(e, t)));
                        if (L === U) return E(r).filter(t => e.some(e => g(e, t)))
                    }
                    return e
                }
                if (null == o || null == r) return [];
                if (u.IS_BROWSER_ENV && a) return E(r).filter(e => a.contains(e));
                if (c === P) return E(o, r);
                if (c === F) return I(E(o)).filter(y(r));
                if (c === U) return T(E(o)).filter(y(r));
                else return E(r)
            }

            function eb({
                element: e,
                actionItem: t
            }) {
                if (!u.IS_BROWSER_ENV) return {};
                let {
                    actionTypeId: n
                } = t;
                switch (n) {
                    case J:
                    case ee:
                    case et:
                    case en:
                    case ea:
                        return window.getComputedStyle(e);
                    default:
                        return {}
                }
            }
            let eO = /px/,
                em = (e, t) => t.reduce((e, t) => (null == e[t.type] && (e[t.type] = eP[t.type]), e), e || {}),
                eR = (e, t) => t.reduce((e, t) => (null == e[t.type] && (e[t.type] = eF[t.type] || t.defaultValue || 0), e), e || {});

            function e_(e, t = {}, n = {}, i, c) {
                let {
                    getStyle: o
                } = c, {
                    actionTypeId: d
                } = i;
                if ((0, s.isPluginType)(d)) return (0, s.getPluginOrigin)(d)(t[d], i);
                switch (i.actionTypeId) {
                    case z:
                    case Q:
                    case Y:
                    case $:
                        return t[i.actionTypeId] || eV[i.actionTypeId];
                    case q:
                        return em(t[i.actionTypeId], i.config.filters);
                    case Z:
                        return eR(t[i.actionTypeId], i.config.fontVariations);
                    case K:
                        return {
                            value: (0, a.default)(parseFloat(o(e, N)), 1)
                        };
                    case J:
                        {
                            let t, c;
                            let d = o(e, S),
                                r = o(e, C);
                            return t = i.config.widthUnit === k ? eO.test(d) ? parseFloat(d) : parseFloat(n.width) : (0, a.default)(parseFloat(d), parseFloat(n.width)),
                            {
                                widthValue: t,
                                heightValue: c = i.config.heightUnit === k ? eO.test(r) ? parseFloat(r) : parseFloat(n.height) : (0, a.default)(parseFloat(r), parseFloat(n.height))
                            }
                        }
                    case ee:
                    case et:
                    case en:
                        return function({
                            element: e,
                            actionTypeId: t,
                            computedStyle: n,
                            getStyle: i
                        }) {
                            let c = eo[t],
                                o = i(e, c),
                                d = (function(e, t) {
                                    let n = e.exec(t);
                                    return n ? n[1] : ""
                                })(eD, ex.test(o) ? o : n[c]).split(G);
                            return {
                                rValue: (0, a.default)(parseInt(d[0], 10), 255),
                                gValue: (0, a.default)(parseInt(d[1], 10), 255),
                                bValue: (0, a.default)(parseInt(d[2], 10), 255),
                                aValue: (0, a.default)(parseFloat(d[3]), 1)
                            }
                        }({
                            element: e,
                            actionTypeId: i.actionTypeId,
                            computedStyle: n,
                            getStyle: o
                        });
                    case ea:
                        return {
                            value: (0, a.default)(o(e, x), n.display)
                        };
                    case ei:
                        return t[i.actionTypeId] || {
                            value: 0
                        };
                    default:
                        return
                }
            }
            let eN = (e, t) => (t && (e[t.type] = t.value || 0), e),
                eL = (e, t) => (t && (e[t.type] = t.value || 0), e),
                eA = (e, t, n) => {
                    if ((0, s.isPluginType)(e)) return (0, s.getPluginConfig)(e)(n, t);
                    switch (e) {
                        case q:
                            {
                                let e = (0, c.default)(n.filters, ({
                                    type: e
                                }) => e === t);
                                return e ? e.value : 0
                            }
                        case Z:
                            {
                                let e = (0, c.default)(n.fontVariations, ({
                                    type: e
                                }) => e === t);
                                return e ? e.value : 0
                            }
                        default:
                            return n[t]
                    }
                };

            function eS({
                element: e,
                actionItem: t,
                elementApi: n
            }) {
                if ((0, s.isPluginType)(t.actionTypeId)) return (0, s.getPluginDestination)(t.actionTypeId)(t.config);
                switch (t.actionTypeId) {
                    case z:
                    case Q:
                    case Y:
                    case $:
                        {
                            let {
                                xValue: e,
                                yValue: n,
                                zValue: a
                            } = t.config;
                            return {
                                xValue: e,
                                yValue: n,
                                zValue: a
                            }
                        }
                    case J:
                        {
                            let {
                                getStyle: a,
                                setStyle: i,
                                getProperty: c
                            } = n,
                            {
                                widthUnit: o,
                                heightUnit: d
                            } = t.config,
                            {
                                widthValue: r,
                                heightValue: l
                            } = t.config;
                            if (!u.IS_BROWSER_ENV) return {
                                widthValue: r,
                                heightValue: l
                            };
                            if (o === k) {
                                let t = a(e, S);
                                i(e, S, ""), r = c(e, "offsetWidth"), i(e, S, t)
                            }
                            if (d === k) {
                                let t = a(e, C);
                                i(e, C, ""), l = c(e, "offsetHeight"), i(e, C, t)
                            }
                            return {
                                widthValue: r,
                                heightValue: l
                            }
                        }
                    case ee:
                    case et:
                    case en:
                        {
                            let {
                                rValue: a,
                                gValue: i,
                                bValue: c,
                                aValue: o,
                                globalSwatchId: d
                            } = t.config;
                            if (d && d.startsWith("--")) {
                                let {
                                    getStyle: t
                                } = n, a = t(e, d), i = (0, f.normalizeColor)(a);
                                return {
                                    rValue: i.red,
                                    gValue: i.green,
                                    bValue: i.blue,
                                    aValue: i.alpha
                                }
                            }
                            return {
                                rValue: a,
                                gValue: i,
                                bValue: c,
                                aValue: o
                            }
                        }
                    case q:
                        return t.config.filters.reduce(eN, {});
                    case Z:
                        return t.config.fontVariations.reduce(eL, {});
                    default:
                        {
                            let {
                                value: e
                            } = t.config;
                            return {
                                value: e
                            }
                        }
                }
            }

            function eC(e) {
                return /^TRANSFORM_/.test(e) ? w : /^STYLE_/.test(e) ? W : /^GENERAL_/.test(e) ? H : /^PLUGIN_/.test(e) ? j : void 0
            }

            function ev(e, t) {
                return e === W ? t.replace("STYLE_", "").toLowerCase() : null
            }

            function eM(e, t, n, a, c, o, d, r, l) {
                switch (r) {
                    case w:
                        return function(e, t, n, a, i) {
                            let c = eh.map(e => {
                                    let n = eV[e],
                                        {
                                            xValue: a = n.xValue,
                                            yValue: i = n.yValue,
                                            zValue: c = n.zValue,
                                            xUnit: o = "",
                                            yUnit: d = "",
                                            zUnit: r = ""
                                        } = t[e] || {};
                                    switch (e) {
                                        case z:
                                            return `${y}(${a}${o}, ${i}${d}, ${c}${r})`;
                                        case Q:
                                            return `${p}(${a}${o}, ${i}${d}, ${c}${r})`;
                                        case Y:
                                            return `${g}(${a}${o}) ${b}(${i}${d}) ${O}(${c}${r})`;
                                        case $:
                                            return `${m}(${a}${o}, ${i}${d})`;
                                        default:
                                            return ""
                                    }
                                }).join(" "),
                                {
                                    setStyle: o
                                } = i;
                            ek(e, u.TRANSFORM_PREFIXED, i), o(e, u.TRANSFORM_PREFIXED, c),
                                function({
                                    actionTypeId: e
                                }, {
                                    xValue: t,
                                    yValue: n,
                                    zValue: a
                                }) {
                                    return e === z && void 0 !== a || e === Q && void 0 !== a || e === Y && (void 0 !== t || void 0 !== n)
                                }(a, n) && o(e, u.TRANSFORM_STYLE_PREFIXED, R)
                        }(e, t, n, c, d);
                    case W:
                        return function(e, t, n, a, c, o) {
                            let {
                                setStyle: d
                            } = o;
                            switch (a.actionTypeId) {
                                case J:
                                    {
                                        let {
                                            widthUnit: t = "",
                                            heightUnit: i = ""
                                        } = a.config,
                                        {
                                            widthValue: c,
                                            heightValue: r
                                        } = n;void 0 !== c && (t === k && (t = "px"), ek(e, S, o), d(e, S, c + t)),
                                        void 0 !== r && (i === k && (i = "px"), ek(e, C, o), d(e, C, r + i));
                                        break
                                    }
                                case q:
                                    ! function(e, t, n, a) {
                                        let c = (0, i.default)(t, (e, t, a) => `${e} ${a}(${t}${eU(a,n)})`, ""),
                                            {
                                                setStyle: o
                                            } = a;
                                        ek(e, L, a), o(e, L, c)
                                    }(e, n, a.config, o);
                                    break;
                                case Z:
                                    ! function(e, t, n, a) {
                                        let c = (0, i.default)(t, (e, t, n) => (e.push(`"${n}" ${t}`), e), []).join(", "),
                                            {
                                                setStyle: o
                                            } = a;
                                        ek(e, A, a), o(e, A, c)
                                    }(e, n, a.config, o);
                                    break;
                                case ee:
                                case et:
                                case en:
                                    {
                                        let t = eo[a.actionTypeId],
                                            i = Math.round(n.rValue),
                                            c = Math.round(n.gValue),
                                            r = Math.round(n.bValue),
                                            l = n.aValue;ek(e, t, o),
                                        d(e, t, l >= 1 ? `rgb(${i},${c},${r})` : `rgba(${i},${c},${r},${l})`);
                                        break
                                    }
                                default:
                                    {
                                        let {
                                            unit: t = ""
                                        } = a.config;ek(e, c, o),
                                        d(e, c, n.value + t)
                                    }
                            }
                        }(e, t, n, c, o, d);
                    case H:
                        return function(e, t, n) {
                            let {
                                setStyle: a
                            } = n;
                            if (t.actionTypeId === ea) {
                                let {
                                    value: n
                                } = t.config;
                                a(e, x, n === _ && u.IS_BROWSER_ENV ? u.FLEX_PREFIXED : n);
                                return
                            }
                        }(e, c, d);
                    case j:
                        {
                            let {
                                actionTypeId: e
                            } = c;
                            if ((0, s.isPluginType)(e)) return (0, s.renderPlugin)(e)(l, t, c)
                        }
                }
            }
            let eV = {
                    [z]: Object.freeze({
                        xValue: 0,
                        yValue: 0,
                        zValue: 0
                    }),
                    [Q]: Object.freeze({
                        xValue: 1,
                        yValue: 1,
                        zValue: 1
                    }),
                    [Y]: Object.freeze({
                        xValue: 0,
                        yValue: 0,
                        zValue: 0
                    }),
                    [$]: Object.freeze({
                        xValue: 0,
                        yValue: 0
                    })
                },
                eP = Object.freeze({
                    blur: 0,
                    "hue-rotate": 0,
                    invert: 0,
                    grayscale: 0,
                    saturate: 100,
                    sepia: 0,
                    contrast: 100,
                    brightness: 100
                }),
                eF = Object.freeze({
                    wght: 0,
                    opsz: 0,
                    wdth: 0,
                    slnt: 0
                }),
                eU = (e, t) => {
                    let n = (0, c.default)(t.filters, ({
                        type: t
                    }) => t === e);
                    if (n && n.unit) return n.unit;
                    switch (e) {
                        case "blur":
                            return "px";
                        case "hue-rotate":
                            return "deg";
                        default:
                            return "%"
                    }
                },
                eh = Object.keys(eV),
                ex = /^rgb/,
                eD = RegExp("rgba?\\(([^)]+)\\)");

            function ek(e, t, n) {
                if (!u.IS_BROWSER_ENV) return;
                let a = ed[t];
                if (!a) return;
                let {
                    getStyle: i,
                    setStyle: c
                } = n, o = i(e, D);
                if (!o) {
                    c(e, D, a);
                    return
                }
                let d = o.split(G).map(ec); - 1 === d.indexOf(a) && c(e, D, d.concat(a).join(G))
            }

            function eG(e, t, n) {
                if (!u.IS_BROWSER_ENV) return;
                let a = ed[t];
                if (!a) return;
                let {
                    getStyle: i,
                    setStyle: c
                } = n, o = i(e, D);
                if (!!o && -1 !== o.indexOf(a)) c(e, D, o.split(G).map(ec).filter(e => e !== a).join(G))
            }

            function eX({
                store: e,
                elementApi: t
            }) {
                let {
                    ixData: n
                } = e.getState(), {
                    events: a = {},
                    actionLists: i = {}
                } = n;
                Object.keys(a).forEach(e => {
                    let n = a[e],
                        {
                            config: c
                        } = n.action,
                        {
                            actionListId: o
                        } = c,
                        d = i[o];
                    d && eB({
                        actionList: d,
                        event: n,
                        elementApi: t
                    })
                }), Object.keys(i).forEach(e => {
                    eB({
                        actionList: i[e],
                        elementApi: t
                    })
                })
            }

            function eB({
                actionList: e = {},
                event: t,
                elementApi: n
            }) {
                let {
                    actionItemGroups: a,
                    continuousParameterGroups: i
                } = e;
                a && a.forEach(e => {
                    ew({
                        actionGroup: e,
                        event: t,
                        elementApi: n
                    })
                }), i && i.forEach(e => {
                    let {
                        continuousActionGroups: a
                    } = e;
                    a.forEach(e => {
                        ew({
                            actionGroup: e,
                            event: t,
                            elementApi: n
                        })
                    })
                })
            }

            function ew({
                actionGroup: e,
                event: t,
                elementApi: n
            }) {
                let {
                    actionItems: a
                } = e;
                a.forEach(e => {
                    let a;
                    let {
                        actionTypeId: i,
                        config: c
                    } = e;
                    a = (0, s.isPluginType)(i) ? t => (0, s.clearPlugin)(i)(t, e) : eW({
                        effect: ej,
                        actionTypeId: i,
                        elementApi: n
                    }), eg({
                        config: c,
                        event: t,
                        elementApi: n
                    }).forEach(a)
                })
            }

            function eH(e, t, n) {
                let {
                    setStyle: a,
                    getStyle: i
                } = n, {
                    actionTypeId: c
                } = t;
                if (c === J) {
                    let {
                        config: n
                    } = t;
                    n.widthUnit === k && a(e, S, ""), n.heightUnit === k && a(e, C, "")
                }
                i(e, D) && eW({
                    effect: eG,
                    actionTypeId: c,
                    elementApi: n
                })(e)
            }
            let eW = ({
                effect: e,
                actionTypeId: t,
                elementApi: n
            }) => a => {
                switch (t) {
                    case z:
                    case Q:
                    case Y:
                    case $:
                        e(a, u.TRANSFORM_PREFIXED, n);
                        break;
                    case q:
                        e(a, L, n);
                        break;
                    case Z:
                        e(a, A, n);
                        break;
                    case K:
                        e(a, N, n);
                        break;
                    case J:
                        e(a, S, n), e(a, C, n);
                        break;
                    case ee:
                    case et:
                    case en:
                        e(a, eo[t], n);
                        break;
                    case ea:
                        e(a, x, n)
                }
            };

            function ej(e, t, n) {
                let {
                    setStyle: a
                } = n;
                eG(e, t, n), a(e, t, ""), t === u.TRANSFORM_PREFIXED && a(e, u.TRANSFORM_STYLE_PREFIXED, "")
            }

            function ez(e) {
                let t = 0,
                    n = 0;
                return e.forEach((e, a) => {
                    let {
                        config: i
                    } = e, c = i.delay + i.duration;
                    c >= t && (t = c, n = a)
                }), n
            }

            function eQ(e, t) {
                let {
                    actionItemGroups: n,
                    useFirstGroupAsInitialState: a
                } = e, {
                    actionItem: i,
                    verboseTimeElapsed: c = 0
                } = t, o = 0, d = 0;
                return n.forEach((e, t) => {
                    if (a && 0 === t) return;
                    let {
                        actionItems: n
                    } = e, r = n[ez(n)], {
                        config: l,
                        actionTypeId: f
                    } = r;
                    i.id === r.id && (d = o + c);
                    let s = eC(f) === H ? 0 : l.duration;
                    o += l.delay + s
                }), o > 0 ? (0, l.optimizeFloat)(d / o) : 0
            }

            function eY({
                actionList: e,
                actionItemId: t,
                rawData: n
            }) {
                let {
                    actionItemGroups: a,
                    continuousParameterGroups: i
                } = e, c = [], d = e => (c.push((0, o.mergeIn)(e, ["config"], {
                    delay: 0,
                    duration: 0
                })), e.id === t);
                return a && a.some(({
                    actionItems: e
                }) => e.some(d)), i && i.some(e => {
                    let {
                        continuousActionGroups: t
                    } = e;
                    return t.some(({
                        actionItems: e
                    }) => e.some(d))
                }), (0, o.setIn)(n, ["actionLists"], {
                    [e.id]: {
                        id: e.id,
                        actionItemGroups: [{
                            actionItems: c
                        }]
                    }
                })
            }

            function e$(e, {
                basedOn: t
            }) {
                return e === d.EventTypeConsts.SCROLLING_IN_VIEW && (t === d.EventBasedOn.ELEMENT || null == t) || e === d.EventTypeConsts.MOUSE_MOVE && t === d.EventBasedOn.ELEMENT
            }

            function eK(e, t) {
                return e + X + t
            }

            function eq(e, t) {
                return null == t || -1 !== e.indexOf(t)
            }

            function eZ(e, t) {
                return (0, r.default)(e && e.sort(), t && t.sort())
            }

            function eJ(e) {
                if ("string" == typeof e) return e;
                if (e.pluginElement && e.objectId) return e.pluginElement + B + e.objectId;
                if (e.objectId) return e.objectId;
                let {
                    id: t = "",
                    selector: n = "",
                    useEventTarget: a = ""
                } = e;
                return t + B + n + B + a
            }
        },
        7164: function(e, t) {
            "use strict";

            function n(e, t) {
                return e === t ? 0 !== e || 0 !== t || 1 / e == 1 / t : e != e && t != t
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function() {
                    return a
                }
            });
            let a = function(e, t) {
                if (n(e, t)) return !0;
                if ("object" != typeof e || null === e || "object" != typeof t || null === t) return !1;
                let a = Object.keys(e),
                    i = Object.keys(t);
                if (a.length !== i.length) return !1;
                for (let i = 0; i < a.length; i++)
                    if (!Object.hasOwn(t, a[i]) || !n(e[a[i]], t[a[i]])) return !1;
                return !0
            }
        },
        5861: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            ! function(e, t) {
                for (var n in t) Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: t[n]
                })
            }(t, {
                createElementState: function() {
                    return m
                },
                ixElements: function() {
                    return O
                },
                mergeActionState: function() {
                    return R
                }
            });
            let a = n(1185),
                i = n(7087),
                {
                    HTML_ELEMENT: c,
                    PLAIN_OBJECT: o,
                    ABSTRACT_NODE: d,
                    CONFIG_X_VALUE: r,
                    CONFIG_Y_VALUE: l,
                    CONFIG_Z_VALUE: f,
                    CONFIG_VALUE: s,
                    CONFIG_X_UNIT: u,
                    CONFIG_Y_UNIT: E,
                    CONFIG_Z_UNIT: I,
                    CONFIG_UNIT: T
                } = i.IX2EngineConstants,
                {
                    IX2_SESSION_STOPPED: y,
                    IX2_INSTANCE_ADDED: p,
                    IX2_ELEMENT_STATE_CHANGED: g
                } = i.IX2EngineActionTypes,
                b = {},
                O = (e = b, t = {}) => {
                    switch (t.type) {
                        case y:
                            return b;
                        case p:
                            {
                                let {
                                    elementId: n,
                                    element: i,
                                    origin: c,
                                    actionItem: o,
                                    refType: d
                                } = t.payload,
                                {
                                    actionTypeId: r
                                } = o,
                                l = e;
                                return (0, a.getIn)(l, [n, i]) !== i && (l = m(l, i, d, n, o)),
                                R(l, n, r, c, o)
                            }
                        case g:
                            {
                                let {
                                    elementId: n,
                                    actionTypeId: a,
                                    current: i,
                                    actionItem: c
                                } = t.payload;
                                return R(e, n, a, i, c)
                            }
                        default:
                            return e
                    }
                };

            function m(e, t, n, i, c) {
                let d = n === o ? (0, a.getIn)(c, ["config", "target", "objectId"]) : null;
                return (0, a.mergeIn)(e, [i], {
                    id: i,
                    ref: t,
                    refId: d,
                    refType: n
                })
            }

            function R(e, t, n, i, c) {
                let o = function(e) {
                    let {
                        config: t
                    } = e;
                    return _.reduce((e, n) => {
                        let a = n[0],
                            i = n[1],
                            c = t[a],
                            o = t[i];
                        return null != c && null != o && (e[i] = o), e
                    }, {})
                }(c);
                return (0, a.mergeIn)(e, [t, "refState", n], i, o)
            }
            let _ = [
                [r, u],
                [l, E],
                [f, I],
                [s, T]
            ]
        },
        8272: function() {
            Webflow.require("ix2").init({
                events: {
                    "e-303": {
                        id: "e-303",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "SLIDE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "slideInBottom",
                                autoStopEventId: "e-304"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            selector: ".how-it-works-section",
                            originalId: "67419b6f95e735317c544fcf|0397bf30-0e46-d874-4cc2-9f6042663c38",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".how-it-works-section",
                            originalId: "67419b6f95e735317c544fcf|0397bf30-0e46-d874-4cc2-9f6042663c38",
                            appliesTo: "CLASS"
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 15,
                            scrollOffsetUnit: "%",
                            delay: 200,
                            direction: "BOTTOM",
                            effectIn: !0
                        },
                        createdOn: 0x18f24a903ee
                    },
                    "e-315": {
                        id: "e-315",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "SLIDE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "slideInBottom",
                                autoStopEventId: "e-316"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            selector: ".faq-section",
                            originalId: "67419b6f95e735317c544fcf|a04c1325-aada-c841-62dd-bf83873d0243",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".faq-section",
                            originalId: "67419b6f95e735317c544fcf|a04c1325-aada-c841-62dd-bf83873d0243",
                            appliesTo: "CLASS"
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 15,
                            scrollOffsetUnit: "%",
                            delay: 200,
                            direction: "BOTTOM",
                            effectIn: !0
                        },
                        createdOn: 0x18f24ab4d36
                    },
                    "e-453": {
                        id: "e-453",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OVER",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-454"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            id: "67419b6f95e735317c544fcf|3b299409-8748-ce3f-bf50-34d89a0771cb",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "67419b6f95e735317c544fcf|3b299409-8748-ce3f-bf50-34d89a0771cb",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19557814ec4
                    },
                    "e-455": {
                        id: "e-455",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OVER",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-3",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-456"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            id: "67419b6f95e735317c544fcf|99b9788e-620f-e392-785c-5cfe94dd2f32",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "67419b6f95e735317c544fcf|99b9788e-620f-e392-785c-5cfe94dd2f32",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x195578179cd
                    },
                    "e-457": {
                        id: "e-457",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLLING_IN_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: {
                                actionListId: "a-4",
                                affectedElements: {},
                                duration: 0
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "67cc7a997f149b38ecc09ea8|973ed131-25db-1c49-d69b-eb8e229921b4",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "67cc7a997f149b38ecc09ea8|973ed131-25db-1c49-d69b-eb8e229921b4",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: [{
                            continuousParameterGroupId: "a-4-p",
                            smoothing: 50,
                            startsEntering: !0,
                            addStartOffset: !1,
                            addOffsetValue: 50,
                            startsExiting: !1,
                            addEndOffset: !1,
                            endOffsetValue: 50
                        }],
                        createdOn: 0x195813be42f
                    },
                    "e-458": {
                        id: "e-458",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "PAGE_START",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-5",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-459"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "67cc7a997f149b38ecc09ea8",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "67cc7a997f149b38ecc09ea8",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19582113e58
                    },
                    "e-460": {
                        id: "e-460",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-6",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-461"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "67cc7a997f149b38ecc09ea8|01f63a75-fcbd-1624-1488-ecedfd04fd61",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "67cc7a997f149b38ecc09ea8|01f63a75-fcbd-1624-1488-ecedfd04fd61",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1958a592507
                    },
                    "e-468": {
                        id: "e-468",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_OVER",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-469"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "67cc7a997f149b38ecc09ea8|fb9aa5e9-7dec-68d2-40a5-d170d37b34eb",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "67cc7a997f149b38ecc09ea8|fb9aa5e9-7dec-68d2-40a5-d170d37b34eb",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1958b78560a
                    },
                    "e-470": {
                        id: "e-470",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_OVER",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-3",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-471"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "67cc7a997f149b38ecc09ea8|ae92a517-7c24-5d3a-7c4b-66958dd3183f",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "67cc7a997f149b38ecc09ea8|ae92a517-7c24-5d3a-7c4b-66958dd3183f",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1958b787a64
                    },
                    "e-474": {
                        id: "e-474",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_OVER",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-475"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "67cc7a997f149b38ecc09ea8|a7ea0bed-3d47-f6ae-79a4-56dd66f94ef0",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "67cc7a997f149b38ecc09ea8|a7ea0bed-3d47-f6ae-79a4-56dd66f94ef0",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1958baf0486
                    },
                    "e-476": {
                        id: "e-476",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_OVER",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-3",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-477"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "67cc7a997f149b38ecc09ea8|a7ea0bed-3d47-f6ae-79a4-56dd66f94f01",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "67cc7a997f149b38ecc09ea8|a7ea0bed-3d47-f6ae-79a4-56dd66f94f01",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1958baf0486
                    },
                    "e-478": {
                        id: "e-478",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLLING_IN_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: {
                                actionListId: "a-4",
                                affectedElements: {},
                                duration: 0
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "67419b6f95e735317c544fcf|f03908b5-be2e-bb17-2c45-41a6981fb3f6",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "67419b6f95e735317c544fcf|f03908b5-be2e-bb17-2c45-41a6981fb3f6",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: [{
                            continuousParameterGroupId: "a-4-p",
                            smoothing: 90,
                            startsEntering: !0,
                            addStartOffset: !1,
                            addOffsetValue: 50,
                            startsExiting: !1,
                            addEndOffset: !1,
                            endOffsetValue: 50
                        }],
                        createdOn: 0x1958bb24f2c
                    },
                    "e-479": {
                        id: "e-479",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-6",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-480"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "67419b6f95e735317c544fcf|a1723438-9902-7608-d6af-b5a44397a662",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "67419b6f95e735317c544fcf|a1723438-9902-7608-d6af-b5a44397a662",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 15,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1958bb288ff
                    },
                    "e-484": {
                        id: "e-484",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "PAGE_FINISH",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-5",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-483"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "67419b6f95e735317c544fcf",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "67419b6f95e735317c544fcf",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1958bb38b2b
                    },
                    "e-487": {
                        id: "e-487",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-9",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-488"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "67419b6f95e735317c544fcf|c36d9fc7-cb77-0dec-5966-b62f4ba8dd10",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "67419b6f95e735317c544fcf|c36d9fc7-cb77-0dec-5966-b62f4ba8dd10",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1958c0f0e0c
                    },
                    "e-489": {
                        id: "e-489",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-9",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-490"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "67419b6f95e735317c544fcf|c36d9fc7-cb77-0dec-5966-b62f4ba8dd12",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "67419b6f95e735317c544fcf|c36d9fc7-cb77-0dec-5966-b62f4ba8dd12",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1958c0fc0cd
                    },
                    "e-496": {
                        id: "e-496",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLLING_IN_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: {
                                actionListId: "a-11",
                                affectedElements: {},
                                duration: 0
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "67419b6f95e735317c544fcf|80ee0720-9236-5fda-a6ee-f138f62eb121",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "67419b6f95e735317c544fcf|80ee0720-9236-5fda-a6ee-f138f62eb121",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: [{
                            continuousParameterGroupId: "a-11-p",
                            smoothing: 50,
                            startsEntering: !0,
                            addStartOffset: !1,
                            addOffsetValue: 50,
                            startsExiting: !1,
                            addEndOffset: !1,
                            endOffsetValue: 50
                        }],
                        createdOn: 0x1958ff351af
                    },
                    "e-501": {
                        id: "e-501",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-9",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-502"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "67419b6f95e735317c544fcf|d5519ff8-c3b0-4e10-132d-0a6f3331d147",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "67419b6f95e735317c544fcf|d5519ff8-c3b0-4e10-132d-0a6f3331d147",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x195903c1d70
                    },
                    "e-505": {
                        id: "e-505",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-9",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-506"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "67419b6f95e735317c544fcf|4d6faeea-fdcd-06ee-3444-c7aabde12887",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "67419b6f95e735317c544fcf|4d6faeea-fdcd-06ee-3444-c7aabde12887",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x195903c8118
                    },
                    "e-511": {
                        id: "e-511",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-9",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-512"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "67419b6f95e735317c544fcf|57564a14-bf78-e780-f7e9-57dac819afbd",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "67419b6f95e735317c544fcf|57564a14-bf78-e780-f7e9-57dac819afbd",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x195903c9d87
                    },
                    "e-513": {
                        id: "e-513",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-23",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-514"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "67419b6f95e735317c544fcf|d7add1ee-5f78-ace6-f3b8-4f201ec1b00f",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "67419b6f95e735317c544fcf|d7add1ee-5f78-ace6-f3b8-4f201ec1b00f",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 15,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19590a081a5
                    },
                    "e-515": {
                        id: "e-515",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLLING_IN_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: {
                                actionListId: "a-12",
                                affectedElements: {},
                                duration: 0
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "67419b6f95e735317c544fcf|fd6a1b94-ef9e-55ab-0bc0-bd1f6d4d9283",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "67419b6f95e735317c544fcf|fd6a1b94-ef9e-55ab-0bc0-bd1f6d4d9283",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: [{
                            continuousParameterGroupId: "a-12-p",
                            smoothing: 50,
                            startsEntering: !0,
                            addStartOffset: !1,
                            addOffsetValue: 50,
                            startsExiting: !1,
                            addEndOffset: !1,
                            endOffsetValue: 50
                        }],
                        createdOn: 0x19590b76e1c
                    },
                    "e-516": {
                        id: "e-516",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLLING_IN_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: {
                                actionListId: "a-13",
                                affectedElements: {},
                                duration: 0
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "67419b6f95e735317c544fcf|89105a66-f6b3-bcbc-5707-0807753981c4",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "67419b6f95e735317c544fcf|89105a66-f6b3-bcbc-5707-0807753981c4",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: [{
                            continuousParameterGroupId: "a-13-p",
                            smoothing: 50,
                            startsEntering: !0,
                            addStartOffset: !1,
                            addOffsetValue: 50,
                            startsExiting: !1,
                            addEndOffset: !1,
                            endOffsetValue: 50
                        }],
                        createdOn: 0x19590b912aa
                    },
                    "e-517": {
                        id: "e-517",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLLING_IN_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: {
                                actionListId: "a-14",
                                affectedElements: {},
                                duration: 0
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "67419b6f95e735317c544fcf|e99af716-c4ec-eed3-a90c-874674b78582",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "67419b6f95e735317c544fcf|e99af716-c4ec-eed3-a90c-874674b78582",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: [{
                            continuousParameterGroupId: "a-14-p",
                            smoothing: 50,
                            startsEntering: !0,
                            addStartOffset: !1,
                            addOffsetValue: 50,
                            startsExiting: !1,
                            addEndOffset: !1,
                            endOffsetValue: 50
                        }],
                        createdOn: 0x19590b9763a
                    },
                    "e-519": {
                        id: "e-519",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "PAGE_FINISH",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-17",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-518"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "67419b6f95e735317c544fcf",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "67419b6f95e735317c544fcf",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !0,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x195915e2d9c
                    },
                    "e-520": {
                        id: "e-520",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-8",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-521"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "67419b6f95e735317c544fcf|9edc13ee-1670-9ece-d7bb-7cde4c2fb97a",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "67419b6f95e735317c544fcf|9edc13ee-1670-9ece-d7bb-7cde4c2fb97a",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x195916f16ea
                    },
                    "e-522": {
                        id: "e-522",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-8",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-523"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "67419b6f95e735317c544fcf|ce9d290b-6529-6fc0-9392-797f4cc94be5",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "67419b6f95e735317c544fcf|ce9d290b-6529-6fc0-9392-797f4cc94be5",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 15,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1959aaa4200
                    },
                    "e-524": {
                        id: "e-524",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "PAGE_START",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-18",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-525"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "67419b6f95e735317c544fcf",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "67419b6f95e735317c544fcf",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1959ad1584a
                    },
                    "e-528": {
                        id: "e-528",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-9",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-529"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "67419b6f95e735317c544fcf|7f5e8e00-fae3-5304-4c59-50f6e8d4532f",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "67419b6f95e735317c544fcf|7f5e8e00-fae3-5304-4c59-50f6e8d4532f",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1959b30f52b
                    },
                    "e-530": {
                        id: "e-530",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-9",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-531"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "67419b6f95e735317c544fcf|0e9bfcaa-c0a5-26e5-c126-e881e41c2fcb",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "67419b6f95e735317c544fcf|0e9bfcaa-c0a5-26e5-c126-e881e41c2fcb",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 25,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1959b80b231
                    },
                    "e-532": {
                        id: "e-532",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-9",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-533"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "67419b6f95e735317c544fcf|0e9bfcaa-c0a5-26e5-c126-e881e41c2fcd",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "67419b6f95e735317c544fcf|0e9bfcaa-c0a5-26e5-c126-e881e41c2fcd",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 25,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1959b81392c
                    },
                    "e-538": {
                        id: "e-538",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-9",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-539"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "67419b6f95e735317c544fcf|b2f58f44-c6e7-d576-e68a-6dfe0c741480",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "67419b6f95e735317c544fcf|b2f58f44-c6e7-d576-e68a-6dfe0c741480",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 25,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1959e887cdf
                    },
                    "e-540": {
                        id: "e-540",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-9",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-541"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "67419b6f95e735317c544fcf|b2f58f44-c6e7-d576-e68a-6dfe0c741483",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "67419b6f95e735317c544fcf|b2f58f44-c6e7-d576-e68a-6dfe0c741483",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 25,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1959e887cdf
                    },
                    "e-542": {
                        id: "e-542",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-9",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-543"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "67419b6f95e735317c544fcf|b9823c61-12ec-15b2-c53c-c9fd3e6cb8a8",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "67419b6f95e735317c544fcf|b9823c61-12ec-15b2-c53c-c9fd3e6cb8a8",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 25,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1959e89402a
                    },
                    "e-544": {
                        id: "e-544",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-9",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-545"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "67419b6f95e735317c544fcf|b9823c61-12ec-15b2-c53c-c9fd3e6cb8ab",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "67419b6f95e735317c544fcf|b9823c61-12ec-15b2-c53c-c9fd3e6cb8ab",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 25,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1959e89402a
                    },
                    "e-546": {
                        id: "e-546",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-9",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-547"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "67419b6f95e735317c544fcf|65f7e7b5-8219-1ec3-ce25-4e42331cdd05",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "67419b6f95e735317c544fcf|65f7e7b5-8219-1ec3-ce25-4e42331cdd05",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 25,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1959e8995b6
                    },
                    "e-548": {
                        id: "e-548",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-9",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-549"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "67419b6f95e735317c544fcf|65f7e7b5-8219-1ec3-ce25-4e42331cdd08",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "67419b6f95e735317c544fcf|65f7e7b5-8219-1ec3-ce25-4e42331cdd08",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 25,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1959e8995b6
                    },
                    "e-550": {
                        id: "e-550",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLLING_IN_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: {
                                actionListId: "a-24",
                                affectedElements: {},
                                duration: 0
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "67419b6f95e735317c544fcf|1a60f958-de24-d909-017e-514b5c8aa310",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "67419b6f95e735317c544fcf|1a60f958-de24-d909-017e-514b5c8aa310",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: [{
                            continuousParameterGroupId: "a-24-p",
                            smoothing: 50,
                            startsEntering: !0,
                            addStartOffset: !1,
                            addOffsetValue: 50,
                            startsExiting: !1,
                            addEndOffset: !1,
                            endOffsetValue: 50
                        }],
                        createdOn: 0x1959e9438b0
                    },
                    "e-551": {
                        id: "e-551",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-25",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-552"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "67419b6f95e735317c544fcf|1a60f958-de24-d909-017e-514b5c8aa2b6",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "67419b6f95e735317c544fcf|1a60f958-de24-d909-017e-514b5c8aa2b6",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 15,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1959ec1a80e
                    },
                    "e-553": {
                        id: "e-553",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLLING_IN_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: {
                                actionListId: "a-26",
                                affectedElements: {},
                                duration: 0
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "67419b6f95e735317c544fcf|1ace0a93-52f6-a376-409a-299da9498a11",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "67419b6f95e735317c544fcf|1ace0a93-52f6-a376-409a-299da9498a11",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: [{
                            continuousParameterGroupId: "a-26-p",
                            smoothing: 50,
                            startsEntering: !0,
                            addStartOffset: !1,
                            addOffsetValue: 50,
                            startsExiting: !1,
                            addEndOffset: !1,
                            endOffsetValue: 50
                        }],
                        createdOn: 0x1959ec8707e
                    },
                    "e-554": {
                        id: "e-554",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-27",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-555"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "67419b6f95e735317c544fcf|1ace0a93-52f6-a376-409a-299da9498a11",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "67419b6f95e735317c544fcf|1ace0a93-52f6-a376-409a-299da9498a11",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1959ec93954
                    },
                    "e-556": {
                        id: "e-556",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-28",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-557"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "67419b6f95e735317c544fcf|1a60f958-de24-d909-017e-514b5c8aa2df",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "67419b6f95e735317c544fcf|1a60f958-de24-d909-017e-514b5c8aa2df",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 15,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1959f0bf860
                    },
                    "e-558": {
                        id: "e-558",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-9",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-559"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "67419b6f95e735317c544fcf|ef7243f9-7d1c-06e5-5c84-c33140b5796d",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "67419b6f95e735317c544fcf|ef7243f9-7d1c-06e5-5c84-c33140b5796d",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1959f1057c5
                    },
                    "e-560": {
                        id: "e-560",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-9",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-561"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "67419b6f95e735317c544fcf|ef7243f9-7d1c-06e5-5c84-c33140b5796f",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "67419b6f95e735317c544fcf|ef7243f9-7d1c-06e5-5c84-c33140b5796f",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1959f110316
                    },
                    "e-564": {
                        id: "e-564",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-9",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-565"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "67419b6f95e735317c544fcf|3d0dda42-c2cc-6fd1-22a7-96acda53d144",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "67419b6f95e735317c544fcf|3d0dda42-c2cc-6fd1-22a7-96acda53d144",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1959f118038
                    },
                    "e-566": {
                        id: "e-566",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-9",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-567"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "67419b6f95e735317c544fcf|3d0dda42-c2cc-6fd1-22a7-96acda53d147",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "67419b6f95e735317c544fcf|3d0dda42-c2cc-6fd1-22a7-96acda53d147",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1959f118038
                    },
                    "e-568": {
                        id: "e-568",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-9",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-569"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "67419b6f95e735317c544fcf|2a2be3dc-5520-4ae3-8764-cf87d3fd0a2d",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "67419b6f95e735317c544fcf|2a2be3dc-5520-4ae3-8764-cf87d3fd0a2d",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1959f11a098
                    },
                    "e-570": {
                        id: "e-570",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-9",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-571"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "67419b6f95e735317c544fcf|2a2be3dc-5520-4ae3-8764-cf87d3fd0a30",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "67419b6f95e735317c544fcf|2a2be3dc-5520-4ae3-8764-cf87d3fd0a30",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1959f11a098
                    },
                    "e-572": {
                        id: "e-572",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-9",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-573"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "67419b6f95e735317c544fcf|1d2ca04c-48da-25b9-793d-20473aa2eb62",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "67419b6f95e735317c544fcf|1d2ca04c-48da-25b9-793d-20473aa2eb62",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1959f11b750
                    },
                    "e-574": {
                        id: "e-574",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-9",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-575"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "67419b6f95e735317c544fcf|1d2ca04c-48da-25b9-793d-20473aa2eb65",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "67419b6f95e735317c544fcf|1d2ca04c-48da-25b9-793d-20473aa2eb65",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1959f11b750
                    },
                    "e-576": {
                        id: "e-576",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-9",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-577"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "67419b6f95e735317c544fcf|e72e2441-2831-2390-c93f-34ee2f9de1e1",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "67419b6f95e735317c544fcf|e72e2441-2831-2390-c93f-34ee2f9de1e1",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1959f11d0f8
                    },
                    "e-578": {
                        id: "e-578",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-9",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-579"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "67419b6f95e735317c544fcf|e72e2441-2831-2390-c93f-34ee2f9de1e4",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "67419b6f95e735317c544fcf|e72e2441-2831-2390-c93f-34ee2f9de1e4",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1959f11d0f8
                    },
                    "e-580": {
                        id: "e-580",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-31",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-581"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "67419b6f95e735317c544fcf|9edc13ee-1670-9ece-d7bb-7cde4c2fb993",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "67419b6f95e735317c544fcf|9edc13ee-1670-9ece-d7bb-7cde4c2fb993",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1959f125bd7
                    },
                    "e-582": {
                        id: "e-582",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-31",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-583"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "67419b6f95e735317c544fcf|9edc13ee-1670-9ece-d7bb-7cde4c2fb9ac",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "67419b6f95e735317c544fcf|9edc13ee-1670-9ece-d7bb-7cde4c2fb9ac",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1959f1367e6
                    },
                    "e-584": {
                        id: "e-584",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-31",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-585"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "67419b6f95e735317c544fcf|257fc282-92e1-72e1-e80b-026764679ebe",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "67419b6f95e735317c544fcf|257fc282-92e1-72e1-e80b-026764679ebe",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1959f1386a9
                    },
                    "e-586": {
                        id: "e-586",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-31",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-587"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "67419b6f95e735317c544fcf|12d4588e-caf6-d117-d022-e9d711b1043b",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "67419b6f95e735317c544fcf|12d4588e-caf6-d117-d022-e9d711b1043b",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1959f13a25f
                    },
                    "e-588": {
                        id: "e-588",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-31",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-589"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "67419b6f95e735317c544fcf|cf66f798-f044-fc9d-1817-a736362d57ed",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "67419b6f95e735317c544fcf|cf66f798-f044-fc9d-1817-a736362d57ed",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1959f13ba89
                    },
                    "e-598": {
                        id: "e-598",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-9",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-599"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "67419b6f95e735317c544fcf|f57be88a-69a0-1ed4-14dc-c8058f57899f",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "67419b6f95e735317c544fcf|f57be88a-69a0-1ed4-14dc-c8058f57899f",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1959f635090
                    },
                    "e-600": {
                        id: "e-600",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-9",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-601"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "67419b6f95e735317c544fcf|f57be88a-69a0-1ed4-14dc-c8058f5789a2",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "67419b6f95e735317c544fcf|f57be88a-69a0-1ed4-14dc-c8058f5789a2",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1959f635090
                    },
                    "e-602": {
                        id: "e-602",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-9",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-603"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "67419b6f95e735317c544fcf|6937f443-181e-ba34-ac22-6907b2f86f68",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "67419b6f95e735317c544fcf|6937f443-181e-ba34-ac22-6907b2f86f68",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1959f63617a
                    },
                    "e-604": {
                        id: "e-604",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-9",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-605"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "67419b6f95e735317c544fcf|6937f443-181e-ba34-ac22-6907b2f86f6b",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "67419b6f95e735317c544fcf|6937f443-181e-ba34-ac22-6907b2f86f6b",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1959f63617a
                    },
                    "e-606": {
                        id: "e-606",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-9",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-607"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "67419b6f95e735317c544fcf|02087a7a-472f-0f58-9601-5ccef463d61f",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "67419b6f95e735317c544fcf|02087a7a-472f-0f58-9601-5ccef463d61f",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1959f6370d8
                    },
                    "e-608": {
                        id: "e-608",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-9",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-609"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "67419b6f95e735317c544fcf|02087a7a-472f-0f58-9601-5ccef463d622",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "67419b6f95e735317c544fcf|02087a7a-472f-0f58-9601-5ccef463d622",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1959f6370d8
                    },
                    "e-610": {
                        id: "e-610",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-32",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-611"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "67419b6f95e735317c544fcf|1a60f958-de24-d909-017e-514b5c8aa318",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "67419b6f95e735317c544fcf|1a60f958-de24-d909-017e-514b5c8aa318",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 15,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1959f6fea74
                    },
                    "e-616": {
                        id: "e-616",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-33",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-617"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "67419b6f95e735317c544fcf|1a60f958-de24-d909-017e-514b5c8aa346",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "67419b6f95e735317c544fcf|1a60f958-de24-d909-017e-514b5c8aa346",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 15,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1959fc55210
                    },
                    "e-618": {
                        id: "e-618",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLLING_IN_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: {
                                actionListId: "a-34",
                                affectedElements: {},
                                duration: 0
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "67419b6f95e735317c544fcf|1a60f958-de24-d909-017e-514b5c8aa3c0",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "67419b6f95e735317c544fcf|1a60f958-de24-d909-017e-514b5c8aa3c0",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: [{
                            continuousParameterGroupId: "a-34-p",
                            smoothing: 50,
                            startsEntering: !0,
                            addStartOffset: !1,
                            addOffsetValue: 50,
                            startsExiting: !1,
                            addEndOffset: !1,
                            endOffsetValue: 50
                        }],
                        createdOn: 0x1959fc6e455
                    },
                    "e-619": {
                        id: "e-619",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-9",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-620"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "67419b6f95e735317c544fcf|152c5d37-d6db-7bbb-cd30-eeea1cffc28b",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "67419b6f95e735317c544fcf|152c5d37-d6db-7bbb-cd30-eeea1cffc28b",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x195a4d0d3bf
                    },
                    "e-621": {
                        id: "e-621",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-9",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-622"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "67419b6f95e735317c544fcf|273d3e13-7c10-21fa-c1a4-b8413554d3d5",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "67419b6f95e735317c544fcf|273d3e13-7c10-21fa-c1a4-b8413554d3d5",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x195a4d0f273
                    },
                    "e-627": {
                        id: "e-627",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-9",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-628"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "67419b6f95e735317c544fcf|8f81a304-4c02-8ff6-f4e7-6e368bb5685c",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "67419b6f95e735317c544fcf|8f81a304-4c02-8ff6-f4e7-6e368bb5685c",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x195a4f27bb5
                    },
                    "e-629": {
                        id: "e-629",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-9",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-630"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "67419b6f95e735317c544fcf|8f81a304-4c02-8ff6-f4e7-6e368bb5685f",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "67419b6f95e735317c544fcf|8f81a304-4c02-8ff6-f4e7-6e368bb5685f",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x195a4f27bb5
                    },
                    "e-631": {
                        id: "e-631",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-9",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-632"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "67419b6f95e735317c544fcf|1a60f958-de24-d909-017e-514b5c8aa2ca",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "67419b6f95e735317c544fcf|1a60f958-de24-d909-017e-514b5c8aa2ca",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x195a4f6bd3b
                    },
                    "e-633": {
                        id: "e-633",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-9",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-634"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "67419b6f95e735317c544fcf|60f0053c-20b4-8bf2-82a2-c9accb4047cf",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "67419b6f95e735317c544fcf|60f0053c-20b4-8bf2-82a2-c9accb4047cf",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x195a4f6dc4e
                    },
                    "e-635": {
                        id: "e-635",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-9",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-636"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "67419b6f95e735317c544fcf|2149bbb4-9b00-7f9d-9885-4d9887b31202",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "67419b6f95e735317c544fcf|2149bbb4-9b00-7f9d-9885-4d9887b31202",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x195a4f725b3
                    },
                    "e-637": {
                        id: "e-637",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-9",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-638"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "67419b6f95e735317c544fcf|2149bbb4-9b00-7f9d-9885-4d9887b31205",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "67419b6f95e735317c544fcf|2149bbb4-9b00-7f9d-9885-4d9887b31205",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x195a4f739ec
                    },
                    "e-643": {
                        id: "e-643",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-9",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-644"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "67419b6f95e735317c544fd3|62ca821d-5205-2dc7-fd64-04de41635d4e",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "67419b6f95e735317c544fd3|62ca821d-5205-2dc7-fd64-04de41635d4e",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 25,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x195af60cbc0
                    },
                    "e-645": {
                        id: "e-645",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-9",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-646"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "67419b6f95e735317c544fd3|2833a671-359e-cb40-ba24-3ed73ef67fd7",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "67419b6f95e735317c544fd3|2833a671-359e-cb40-ba24-3ed73ef67fd7",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 25,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x195af68d068
                    },
                    "e-647": {
                        id: "e-647",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-9",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-648"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "67419b6f95e735317c544fd3|496d43b8-61b5-7c65-d201-11fa38657fbf",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "67419b6f95e735317c544fd3|496d43b8-61b5-7c65-d201-11fa38657fbf",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 25,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x195af737833
                    },
                    "e-649": {
                        id: "e-649",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-9",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-650"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "67419b6f95e735317c544fd3|93b3b31a-d50b-52ab-d7a6-2dc50604c814",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "67419b6f95e735317c544fd3|93b3b31a-d50b-52ab-d7a6-2dc50604c814",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 25,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x195af80372f
                    },
                    "e-651": {
                        id: "e-651",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-9",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-652"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "67419b6f95e735317c544fd4|37bf5061-8340-1cfe-0724-902c903b943b",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "67419b6f95e735317c544fd4|37bf5061-8340-1cfe-0724-902c903b943b",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 25,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x195af95b738
                    },
                    "e-653": {
                        id: "e-653",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-9",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-654"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "67419b6f95e735317c544fd4|ae6d61a2-d361-3ff4-b3ab-ccf3ed60931d",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "67419b6f95e735317c544fd4|ae6d61a2-d361-3ff4-b3ab-ccf3ed60931d",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 25,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x195af9669ba
                    },
                    "e-655": {
                        id: "e-655",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-9",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-656"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "67419b6f95e735317c544fd5|7e976d98-32a2-9e7b-900e-5105f4246ff6",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "67419b6f95e735317c544fd5|7e976d98-32a2-9e7b-900e-5105f4246ff6",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 25,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x195af9fe797
                    },
                    "e-657": {
                        id: "e-657",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-9",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-658"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "67419b6f95e735317c544fd5|7e976d98-32a2-9e7b-900e-5105f4246ffd",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "67419b6f95e735317c544fd5|7e976d98-32a2-9e7b-900e-5105f4246ffd",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 25,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x195af9fe797
                    }
                },
                actionLists: {
                    a: {
                        id: "a",
                        title: "Services Image Left",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-n-6",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        id: "67419b6f95e735317c544fcf|99b9788e-620f-e392-785c-5cfe94dd2f33"
                                    },
                                    xValue: 1,
                                    yValue: 1,
                                    locked: !0
                                }
                            }, {
                                id: "a-n-7",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        id: "67419b6f95e735317c544fcf|99b9788e-620f-e392-785c-5cfe94dd2f34"
                                    },
                                    xValue: 1.25,
                                    yValue: 1.25,
                                    locked: !0
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-n-2",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: [.25, .1, .25, 1],
                                    duration: 1250,
                                    target: {
                                        id: "67419b6f95e735317c544fcf|99a7fd19-dc9b-767c-adae-36e6aee8f367"
                                    },
                                    xValue: 2,
                                    yValue: 2,
                                    locked: !0
                                }
                            }, {
                                id: "a-n-4",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: [.5, 1.5, .7, 1],
                                    duration: 1500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        id: "67419b6f95e735317c544fcf|256886e1-03c0-ae09-5e15-0c5f554c53ed"
                                    },
                                    xValue: 1.25,
                                    yValue: 1.25,
                                    locked: !0
                                }
                            }, {
                                id: "a-n-5",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "ease",
                                    duration: 1500,
                                    target: {
                                        id: "67419b6f95e735317c544fcf|99b9788e-620f-e392-785c-5cfe94dd2f33"
                                    },
                                    xValue: .5,
                                    yValue: .5,
                                    locked: !0
                                }
                            }, {
                                id: "a-n-8",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: [.5, 1.5, .7, 1],
                                    duration: 1500,
                                    target: {
                                        id: "67419b6f95e735317c544fcf|99b9788e-620f-e392-785c-5cfe94dd2f34"
                                    },
                                    xValue: 1,
                                    yValue: 1,
                                    locked: !0
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x1954d540b2f
                    },
                    "a-3": {
                        id: "a-3",
                        title: "Services Image Right",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-3-n-4",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: [.25, .1, .25, 1],
                                    duration: 1250,
                                    target: {
                                        id: "67419b6f95e735317c544fcf|99a7fd19-dc9b-767c-adae-36e6aee8f367"
                                    },
                                    xValue: 1,
                                    yValue: 1,
                                    locked: !0
                                }
                            }, {
                                id: "a-3-n-6",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "ease",
                                    duration: 1250,
                                    target: {
                                        id: "67419b6f95e735317c544fcf|99b9788e-620f-e392-785c-5cfe94dd2f33"
                                    },
                                    xValue: 1,
                                    yValue: 1,
                                    locked: !0
                                }
                            }, {
                                id: "a-3-n-9",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: [.5, 1.5, .7, 1],
                                    duration: 1500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        id: "67419b6f95e735317c544fcf|99b9788e-620f-e392-785c-5cfe94dd2f34"
                                    },
                                    xValue: 1.25,
                                    yValue: 1.25,
                                    locked: !0
                                }
                            }, {
                                id: "a-3-n-10",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: [.5, 1.5, .7, 1],
                                    duration: 1500,
                                    target: {
                                        id: "67419b6f95e735317c544fcf|256886e1-03c0-ae09-5e15-0c5f554c53ed"
                                    },
                                    xValue: 1,
                                    yValue: 1,
                                    locked: !0
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x1954d540b2f
                    },
                    "a-4": {
                        id: "a-4",
                        title: "Hero Section",
                        continuousParameterGroups: [{
                            id: "a-4-p",
                            type: "SCROLL_PROGRESS",
                            parameterLabel: "Scroll",
                            continuousActionGroups: [{
                                keyframe: 35,
                                actionItems: [{
                                    id: "a-4-n",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".hero-image-wrapper._1",
                                            selectorGuids: ["41e91851-3b2f-0d42-f254-2d912f328aa4", "643b6b29-4537-9f9c-0059-8794e7794075"]
                                        },
                                        xValue: 0,
                                        yValue: 0,
                                        xUnit: "vw",
                                        yUnit: "vh",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-4-n-3",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".hero-image-wrapper._4",
                                            selectorGuids: ["41e91851-3b2f-0d42-f254-2d912f328aa4", "b1feb8f1-ef22-2074-375b-8a6eb245b21d"]
                                        },
                                        xValue: 0,
                                        yValue: 0,
                                        xUnit: "vw",
                                        yUnit: "vh",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-4-n-5",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".hero-image-wrapper._3",
                                            selectorGuids: ["41e91851-3b2f-0d42-f254-2d912f328aa4", "e620b864-ff83-a817-ea7b-721f67888937"]
                                        },
                                        xValue: 0,
                                        yValue: 0,
                                        xUnit: "vw",
                                        yUnit: "vh",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-4-n-7",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".hero-image-wrapper._5",
                                            selectorGuids: ["41e91851-3b2f-0d42-f254-2d912f328aa4", "1e2ea7a0-9c95-51a0-e560-e343afdc8ac6"]
                                        },
                                        xValue: 0,
                                        yValue: 0,
                                        xUnit: "vw",
                                        yUnit: "vh",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-4-n-9",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".hero-image-wrapper._7",
                                            selectorGuids: ["41e91851-3b2f-0d42-f254-2d912f328aa4", "ec63cfb1-d1ac-9fef-408c-ff292742b7ef"]
                                        },
                                        xValue: 0,
                                        yValue: 0,
                                        xUnit: "vw",
                                        yUnit: "vh",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-4-n-11",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".hero-image-wrapper._6",
                                            selectorGuids: ["41e91851-3b2f-0d42-f254-2d912f328aa4", "2281cfc4-ab61-2a83-e097-4732a3f25d9a"]
                                        },
                                        xValue: 0,
                                        yValue: 0,
                                        xUnit: "vw",
                                        yUnit: "vh",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-4-n-13",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".hero-image-wrapper._2",
                                            selectorGuids: ["41e91851-3b2f-0d42-f254-2d912f328aa4", "4190dbe6-f86c-2665-a7f0-ada7aff672d4"]
                                        },
                                        xValue: 0,
                                        yValue: 0,
                                        xUnit: "vw",
                                        yUnit: "vh",
                                        zUnit: "PX"
                                    }
                                }]
                            }, {
                                keyframe: 90,
                                actionItems: [{
                                    id: "a-4-n-2",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "ease",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".hero-image-wrapper._1",
                                            selectorGuids: ["41e91851-3b2f-0d42-f254-2d912f328aa4", "643b6b29-4537-9f9c-0059-8794e7794075"]
                                        },
                                        xValue: -100,
                                        yValue: -100,
                                        xUnit: "vw",
                                        yUnit: "vh",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-4-n-4",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "ease",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".hero-image-wrapper._4",
                                            selectorGuids: ["41e91851-3b2f-0d42-f254-2d912f328aa4", "b1feb8f1-ef22-2074-375b-8a6eb245b21d"]
                                        },
                                        xValue: -100,
                                        yValue: 0,
                                        xUnit: "vw",
                                        yUnit: "vh",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-4-n-6",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "ease",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".hero-image-wrapper._3",
                                            selectorGuids: ["41e91851-3b2f-0d42-f254-2d912f328aa4", "e620b864-ff83-a817-ea7b-721f67888937"]
                                        },
                                        xValue: 100,
                                        yValue: -100,
                                        xUnit: "vw",
                                        yUnit: "vh",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-4-n-8",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "ease",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".hero-image-wrapper._5",
                                            selectorGuids: ["41e91851-3b2f-0d42-f254-2d912f328aa4", "1e2ea7a0-9c95-51a0-e560-e343afdc8ac6"]
                                        },
                                        xValue: 100,
                                        yValue: 100,
                                        xUnit: "vw",
                                        yUnit: "vh",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-4-n-10",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "ease",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".hero-image-wrapper._7",
                                            selectorGuids: ["41e91851-3b2f-0d42-f254-2d912f328aa4", "ec63cfb1-d1ac-9fef-408c-ff292742b7ef"]
                                        },
                                        xValue: 100,
                                        yValue: 0,
                                        xUnit: "vw",
                                        yUnit: "vh",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-4-n-12",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "ease",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".hero-image-wrapper._6",
                                            selectorGuids: ["41e91851-3b2f-0d42-f254-2d912f328aa4", "2281cfc4-ab61-2a83-e097-4732a3f25d9a"]
                                        },
                                        xValue: 0,
                                        yValue: 100,
                                        xUnit: "vw",
                                        yUnit: "vh",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-4-n-14",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "ease",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".hero-image-wrapper._2",
                                            selectorGuids: ["41e91851-3b2f-0d42-f254-2d912f328aa4", "4190dbe6-f86c-2665-a7f0-ada7aff672d4"]
                                        },
                                        xValue: 0,
                                        yValue: -150,
                                        xUnit: "vw",
                                        yUnit: "vh",
                                        zUnit: "PX"
                                    }
                                }]
                            }]
                        }],
                        createdOn: 0x195813bf1ed
                    },
                    "a-5": {
                        id: "a-5",
                        title: "Page Loader",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-5-n",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".hero-image-wrapper._1",
                                        selectorGuids: ["41e91851-3b2f-0d42-f254-2d912f328aa4", "643b6b29-4537-9f9c-0059-8794e7794075"]
                                    },
                                    xValue: 0,
                                    yValue: 0,
                                    locked: !0
                                }
                            }, {
                                id: "a-5-n-5",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".hero-image-wrapper._5",
                                        selectorGuids: ["41e91851-3b2f-0d42-f254-2d912f328aa4", "1e2ea7a0-9c95-51a0-e560-e343afdc8ac6"]
                                    },
                                    xValue: 0,
                                    yValue: 0,
                                    locked: !0
                                }
                            }, {
                                id: "a-5-n-10",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".hero-image",
                                        selectorGuids: ["265d0903-873a-23c1-9d00-f9f79599434e"]
                                    },
                                    xValue: .75,
                                    yValue: .75,
                                    locked: !0
                                }
                            }, {
                                id: "a-5-n-9",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".hero-image-wrapper._4",
                                        selectorGuids: ["41e91851-3b2f-0d42-f254-2d912f328aa4", "b1feb8f1-ef22-2074-375b-8a6eb245b21d"]
                                    },
                                    xValue: 0,
                                    yValue: 0,
                                    locked: !0
                                }
                            }, {
                                id: "a-5-n-13",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".hero-image",
                                        selectorGuids: ["265d0903-873a-23c1-9d00-f9f79599434e"]
                                    },
                                    xValue: .75,
                                    yValue: .75,
                                    locked: !0
                                }
                            }, {
                                id: "a-5-n-14",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".hero-image-wrapper._6",
                                        selectorGuids: ["41e91851-3b2f-0d42-f254-2d912f328aa4", "2281cfc4-ab61-2a83-e097-4732a3f25d9a"]
                                    },
                                    xValue: 0,
                                    yValue: 0,
                                    locked: !0
                                }
                            }, {
                                id: "a-5-n-17",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {},
                                    xValue: .75,
                                    yValue: .75,
                                    locked: !0
                                }
                            }, {
                                id: "a-5-n-18",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".hero-image-wrapper._2",
                                        selectorGuids: ["41e91851-3b2f-0d42-f254-2d912f328aa4", "4190dbe6-f86c-2665-a7f0-ada7aff672d4"]
                                    },
                                    xValue: 0,
                                    yValue: 0,
                                    locked: !0
                                }
                            }, {
                                id: "a-5-n-21",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".hero-image",
                                        selectorGuids: ["265d0903-873a-23c1-9d00-f9f79599434e"]
                                    },
                                    xValue: .75,
                                    yValue: .75,
                                    locked: !0
                                }
                            }, {
                                id: "a-5-n-22",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".hero-image-wrapper._7",
                                        selectorGuids: ["41e91851-3b2f-0d42-f254-2d912f328aa4", "ec63cfb1-d1ac-9fef-408c-ff292742b7ef"]
                                    },
                                    xValue: 0,
                                    yValue: 0,
                                    locked: !0
                                }
                            }, {
                                id: "a-5-n-25",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".hero-image",
                                        selectorGuids: ["265d0903-873a-23c1-9d00-f9f79599434e"]
                                    },
                                    xValue: .75,
                                    yValue: .75,
                                    locked: !0
                                }
                            }, {
                                id: "a-5-n-26",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".hero-image-wrapper._3",
                                        selectorGuids: ["41e91851-3b2f-0d42-f254-2d912f328aa4", "e620b864-ff83-a817-ea7b-721f67888937"]
                                    },
                                    xValue: 0,
                                    yValue: 0,
                                    locked: !0
                                }
                            }, {
                                id: "a-5-n-29",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        id: "67419b6f95e735317c544fcf|f03908b5-be2e-bb17-2c45-41a6981fb3f9"
                                    },
                                    yValue: 100,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-5-n-31",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".hero-caption",
                                        selectorGuids: ["34f157c9-bc9a-a567-b5be-57a9ee2e92f6"]
                                    },
                                    yValue: 100,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-5-n-32",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".hero-caption",
                                        selectorGuids: ["34f157c9-bc9a-a567-b5be-57a9ee2e92f6"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }, {
                                id: "a-5-n-35",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".header",
                                        selectorGuids: ["9f822696-880c-68cd-71d6-422dc34bb9cc"]
                                    },
                                    yValue: 25,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-5-n-36",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".header",
                                        selectorGuids: ["9f822696-880c-68cd-71d6-422dc34bb9cc"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-5-n-2",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "ease",
                                    duration: 1250,
                                    target: {
                                        selector: ".hero-image-wrapper._1",
                                        selectorGuids: ["41e91851-3b2f-0d42-f254-2d912f328aa4", "643b6b29-4537-9f9c-0059-8794e7794075"]
                                    },
                                    xValue: 1,
                                    yValue: 1,
                                    locked: !0
                                }
                            }, {
                                id: "a-5-n-4",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: [.5, 1.5, .7, 1],
                                    duration: 1500,
                                    target: {
                                        id: "67419b6f95e735317c544fcf|f03908b5-be2e-bb17-2c45-41a6981fb405"
                                    },
                                    xValue: 1.1,
                                    yValue: 1.1,
                                    locked: !0
                                }
                            }, {
                                id: "a-5-n-7",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 250,
                                    easing: "ease",
                                    duration: 1250,
                                    target: {
                                        selector: ".hero-image-wrapper._5",
                                        selectorGuids: ["41e91851-3b2f-0d42-f254-2d912f328aa4", "1e2ea7a0-9c95-51a0-e560-e343afdc8ac6"]
                                    },
                                    xValue: 1,
                                    yValue: 1,
                                    locked: !0
                                }
                            }, {
                                id: "a-5-n-8",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 250,
                                    easing: [.5, 1.5, .7, 1],
                                    duration: 1500,
                                    target: {
                                        id: "67419b6f95e735317c544fcf|f03908b5-be2e-bb17-2c45-41a6981fb40b"
                                    },
                                    xValue: 1.1,
                                    yValue: 1.1,
                                    locked: !0
                                }
                            }, {
                                id: "a-5-n-12",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 500,
                                    easing: [.5, 1.5, .7, 1],
                                    duration: 1500,
                                    target: {
                                        id: "67419b6f95e735317c544fcf|f03908b5-be2e-bb17-2c45-41a6981fb407"
                                    },
                                    xValue: 1.1,
                                    yValue: 1.1,
                                    locked: !0
                                }
                            }, {
                                id: "a-5-n-11",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 500,
                                    easing: "ease",
                                    duration: 1250,
                                    target: {
                                        selector: ".hero-image-wrapper._4",
                                        selectorGuids: ["41e91851-3b2f-0d42-f254-2d912f328aa4", "b1feb8f1-ef22-2074-375b-8a6eb245b21d"]
                                    },
                                    xValue: 1,
                                    yValue: 1,
                                    locked: !0
                                }
                            }, {
                                id: "a-5-n-16",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 750,
                                    easing: "ease",
                                    duration: 1250,
                                    target: {
                                        selector: ".hero-image-wrapper._6",
                                        selectorGuids: ["41e91851-3b2f-0d42-f254-2d912f328aa4", "2281cfc4-ab61-2a83-e097-4732a3f25d9a"]
                                    },
                                    xValue: 1,
                                    yValue: 1,
                                    locked: !0
                                }
                            }, {
                                id: "a-5-n-15",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 750,
                                    easing: [.5, 1.5, .7, 1],
                                    duration: 1500,
                                    target: {
                                        id: "67419b6f95e735317c544fcf|f03908b5-be2e-bb17-2c45-41a6981fb40f"
                                    },
                                    xValue: 1.1,
                                    yValue: 1.1,
                                    locked: !0
                                }
                            }, {
                                id: "a-5-n-20",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 1e3,
                                    easing: [.5, 1.5, .7, 1],
                                    duration: 1500,
                                    target: {
                                        id: "67419b6f95e735317c544fcf|f03908b5-be2e-bb17-2c45-41a6981fb411"
                                    },
                                    xValue: 1.1,
                                    yValue: 1.1,
                                    locked: !0
                                }
                            }, {
                                id: "a-5-n-19",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 1e3,
                                    easing: "ease",
                                    duration: 1250,
                                    target: {
                                        selector: ".hero-image-wrapper._2",
                                        selectorGuids: ["41e91851-3b2f-0d42-f254-2d912f328aa4", "4190dbe6-f86c-2665-a7f0-ada7aff672d4"]
                                    },
                                    xValue: 1,
                                    yValue: 1,
                                    locked: !0
                                }
                            }, {
                                id: "a-5-n-28",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 1250,
                                    easing: [.5, 1.5, .7, 1],
                                    duration: 1500,
                                    target: {
                                        id: "67419b6f95e735317c544fcf|f03908b5-be2e-bb17-2c45-41a6981fb409"
                                    },
                                    xValue: 1.1,
                                    yValue: 1.1,
                                    locked: !0
                                }
                            }, {
                                id: "a-5-n-27",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 1250,
                                    easing: "ease",
                                    duration: 1250,
                                    target: {
                                        selector: ".hero-image-wrapper._3",
                                        selectorGuids: ["41e91851-3b2f-0d42-f254-2d912f328aa4", "e620b864-ff83-a817-ea7b-721f67888937"]
                                    },
                                    xValue: 1,
                                    yValue: 1,
                                    locked: !0
                                }
                            }, {
                                id: "a-5-n-23",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 1500,
                                    easing: [.5, 1.5, .7, 1],
                                    duration: 1500,
                                    target: {
                                        id: "67419b6f95e735317c544fcf|f03908b5-be2e-bb17-2c45-41a6981fb40d"
                                    },
                                    xValue: 1.1,
                                    yValue: 1.1,
                                    locked: !0
                                }
                            }, {
                                id: "a-5-n-24",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 1500,
                                    easing: "ease",
                                    duration: 1250,
                                    target: {
                                        selector: ".hero-image-wrapper._7",
                                        selectorGuids: ["41e91851-3b2f-0d42-f254-2d912f328aa4", "ec63cfb1-d1ac-9fef-408c-ff292742b7ef"]
                                    },
                                    xValue: 1,
                                    yValue: 1,
                                    locked: !0
                                }
                            }, {
                                id: "a-5-n-30",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 1750,
                                    easing: "ease",
                                    duration: 1250,
                                    target: {
                                        id: "67419b6f95e735317c544fcf|f03908b5-be2e-bb17-2c45-41a6981fb3f9"
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-5-n-34",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 2500,
                                    easing: "ease",
                                    duration: 1e3,
                                    target: {
                                        selector: ".hero-caption",
                                        selectorGuids: ["34f157c9-bc9a-a567-b5be-57a9ee2e92f6"]
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }, {
                                id: "a-5-n-33",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 2500,
                                    easing: "ease",
                                    duration: 1e3,
                                    target: {
                                        selector: ".hero-caption",
                                        selectorGuids: ["34f157c9-bc9a-a567-b5be-57a9ee2e92f6"]
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-5-n-38",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 2500,
                                    easing: "ease",
                                    duration: 1e3,
                                    target: {
                                        selector: ".header",
                                        selectorGuids: ["9f822696-880c-68cd-71d6-422dc34bb9cc"]
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-5-n-37",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 2500,
                                    easing: "ease",
                                    duration: 1e3,
                                    target: {
                                        selector: ".header",
                                        selectorGuids: ["9f822696-880c-68cd-71d6-422dc34bb9cc"]
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x195821168c5
                    },
                    "a-6": {
                        id: "a-6",
                        title: "Intro Section",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-6-n",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        id: "67419b6f95e735317c544fcf|a1723438-9902-7608-d6af-b5a44397a667"
                                    },
                                    yValue: 100,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-6-n-3",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        id: "67419b6f95e735317c544fcf|a1723438-9902-7608-d6af-b5a44397a66c"
                                    },
                                    xValue: 0,
                                    locked: !1
                                }
                            }, {
                                id: "a-6-n-5",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        id: "67419b6f95e735317c544fcf|a1723438-9902-7608-d6af-b5a44397a665"
                                    },
                                    yValue: 100,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-6-n-7",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        id: "67419b6f95e735317c544fcf|8862ded9-009e-5df7-957a-dbdcf23aee4f"
                                    },
                                    yValue: 100,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-6-n-9",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        id: "67419b6f95e735317c544fcf|3b5fe3f5-b266-d973-849f-bfc2f906578b"
                                    },
                                    xValue: 0,
                                    locked: !1
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-6-n-2",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "ease",
                                    duration: 1500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        id: "67419b6f95e735317c544fcf|a1723438-9902-7608-d6af-b5a44397a667"
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-6-n-4",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "ease",
                                    duration: 1500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        id: "67419b6f95e735317c544fcf|a1723438-9902-7608-d6af-b5a44397a66c"
                                    },
                                    xValue: 1,
                                    yValue: null,
                                    locked: !1
                                }
                            }, {
                                id: "a-6-n-6",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "ease",
                                    duration: 1250,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        id: "67419b6f95e735317c544fcf|a1723438-9902-7608-d6af-b5a44397a665"
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-6-n-8",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "ease",
                                    duration: 1250,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        id: "67419b6f95e735317c544fcf|8862ded9-009e-5df7-957a-dbdcf23aee4f"
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-6-n-10",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "ease",
                                    duration: 1500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        id: "67419b6f95e735317c544fcf|3b5fe3f5-b266-d973-849f-bfc2f906578b"
                                    },
                                    xValue: 1,
                                    yValue: null,
                                    locked: !1
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x1958a594ca1
                    },
                    "a-9": {
                        id: "a-9",
                        title: "Text Move",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-9-n",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: !0,
                                        id: "67419b6f95e735317c544fcf|c36d9fc7-cb77-0dec-5966-b62f4ba8dd10"
                                    },
                                    yValue: 100,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-9-n-2",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "ease",
                                    duration: 1250,
                                    target: {
                                        useEventTarget: !0,
                                        id: "67419b6f95e735317c544fcf|c36d9fc7-cb77-0dec-5966-b62f4ba8dd10"
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x1958c0f1a8d
                    },
                    "a-11": {
                        id: "a-11",
                        title: "Metrics Section",
                        continuousParameterGroups: [{
                            id: "a-11-p",
                            type: "SCROLL_PROGRESS",
                            parameterLabel: "Scroll",
                            continuousActionGroups: [{
                                keyframe: 25,
                                actionItems: [{
                                    id: "a-11-n-9",
                                    actionTypeId: "STYLE_FILTER",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".metrics-1st",
                                            selectorGuids: ["9f822696-880c-68cd-71d6-422dc34bb9eb"]
                                        },
                                        filters: [{
                                            type: "blur",
                                            filterId: "890c",
                                            value: 0,
                                            unit: "px"
                                        }]
                                    }
                                }, {
                                    id: "a-11-n-11",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".metrics-1st",
                                            selectorGuids: ["9f822696-880c-68cd-71d6-422dc34bb9eb"]
                                        },
                                        value: 1,
                                        unit: ""
                                    }
                                }, {
                                    id: "a-11-n-34",
                                    actionTypeId: "TRANSFORM_SCALE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".metrics-1st",
                                            selectorGuids: ["9f822696-880c-68cd-71d6-422dc34bb9eb"]
                                        },
                                        xValue: 1,
                                        yValue: 1,
                                        locked: !0
                                    }
                                }]
                            }, {
                                keyframe: 33,
                                actionItems: [{
                                    id: "a-11-n-13",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".metrics-2nd",
                                            selectorGuids: ["90cc2f18-b0e5-e956-addb-72948865476f"]
                                        },
                                        value: 0,
                                        unit: ""
                                    }
                                }, {
                                    id: "a-11-n-15",
                                    actionTypeId: "STYLE_FILTER",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".metrics-2nd",
                                            selectorGuids: ["90cc2f18-b0e5-e956-addb-72948865476f"]
                                        },
                                        filters: [{
                                            type: "blur",
                                            filterId: "a035",
                                            value: 30,
                                            unit: "px"
                                        }]
                                    }
                                }, {
                                    id: "a-11-n-17",
                                    actionTypeId: "TRANSFORM_SCALE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".metrics-2nd",
                                            selectorGuids: ["90cc2f18-b0e5-e956-addb-72948865476f"]
                                        },
                                        xValue: 0,
                                        yValue: 0,
                                        locked: !0
                                    }
                                }]
                            }, {
                                keyframe: 35,
                                actionItems: [{
                                    id: "a-11-n-8",
                                    actionTypeId: "TRANSFORM_SCALE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".metrics-1st",
                                            selectorGuids: ["9f822696-880c-68cd-71d6-422dc34bb9eb"]
                                        },
                                        xValue: 3,
                                        yValue: 3,
                                        locked: !0
                                    }
                                }, {
                                    id: "a-11-n-10",
                                    actionTypeId: "STYLE_FILTER",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".metrics-1st",
                                            selectorGuids: ["9f822696-880c-68cd-71d6-422dc34bb9eb"]
                                        },
                                        filters: [{
                                            type: "blur",
                                            filterId: "890c",
                                            value: 30,
                                            unit: "px"
                                        }]
                                    }
                                }, {
                                    id: "a-11-n-12",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".metrics-1st",
                                            selectorGuids: ["9f822696-880c-68cd-71d6-422dc34bb9eb"]
                                        },
                                        value: 0,
                                        unit: ""
                                    }
                                }]
                            }, {
                                keyframe: 45,
                                actionItems: [{
                                    id: "a-11-n-14",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".metrics-2nd",
                                            selectorGuids: ["90cc2f18-b0e5-e956-addb-72948865476f"]
                                        },
                                        value: 1,
                                        unit: ""
                                    }
                                }, {
                                    id: "a-11-n-16",
                                    actionTypeId: "STYLE_FILTER",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".metrics-2nd",
                                            selectorGuids: ["90cc2f18-b0e5-e956-addb-72948865476f"]
                                        },
                                        filters: [{
                                            type: "blur",
                                            filterId: "9053",
                                            value: 0,
                                            unit: "px"
                                        }]
                                    }
                                }, {
                                    id: "a-11-n-18",
                                    actionTypeId: "TRANSFORM_SCALE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".metrics-2nd",
                                            selectorGuids: ["90cc2f18-b0e5-e956-addb-72948865476f"]
                                        },
                                        xValue: 1,
                                        yValue: 1,
                                        locked: !0
                                    }
                                }]
                            }, {
                                keyframe: 55,
                                actionItems: [{
                                    id: "a-11-n-22",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".metrics-2nd",
                                            selectorGuids: ["90cc2f18-b0e5-e956-addb-72948865476f"]
                                        },
                                        value: 1,
                                        unit: ""
                                    }
                                }, {
                                    id: "a-11-n-23",
                                    actionTypeId: "STYLE_FILTER",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".metrics-2nd",
                                            selectorGuids: ["90cc2f18-b0e5-e956-addb-72948865476f"]
                                        },
                                        filters: [{
                                            type: "blur",
                                            filterId: "9053",
                                            value: 0,
                                            unit: "px"
                                        }]
                                    }
                                }, {
                                    id: "a-11-n-24",
                                    actionTypeId: "TRANSFORM_SCALE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".metrics-2nd",
                                            selectorGuids: ["90cc2f18-b0e5-e956-addb-72948865476f"]
                                        },
                                        xValue: 1,
                                        yValue: 1,
                                        locked: !0
                                    }
                                }]
                            }, {
                                keyframe: 63,
                                actionItems: [{
                                    id: "a-11-n-25",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".metrics-3rd",
                                            selectorGuids: ["221f1637-44b3-6846-a10e-7d83e07899a7"]
                                        },
                                        value: 0,
                                        unit: ""
                                    }
                                }, {
                                    id: "a-11-n-26",
                                    actionTypeId: "STYLE_FILTER",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".metrics-3rd",
                                            selectorGuids: ["221f1637-44b3-6846-a10e-7d83e07899a7"]
                                        },
                                        filters: [{
                                            type: "blur",
                                            filterId: "a035",
                                            value: 30,
                                            unit: "px"
                                        }]
                                    }
                                }, {
                                    id: "a-11-n-27",
                                    actionTypeId: "TRANSFORM_SCALE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".metrics-3rd",
                                            selectorGuids: ["221f1637-44b3-6846-a10e-7d83e07899a7"]
                                        },
                                        xValue: 0,
                                        yValue: 0,
                                        locked: !0
                                    }
                                }]
                            }, {
                                keyframe: 65,
                                actionItems: [{
                                    id: "a-11-n-19",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".metrics-2nd",
                                            selectorGuids: ["90cc2f18-b0e5-e956-addb-72948865476f"]
                                        },
                                        value: 0,
                                        unit: ""
                                    }
                                }, {
                                    id: "a-11-n-20",
                                    actionTypeId: "STYLE_FILTER",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".metrics-2nd",
                                            selectorGuids: ["90cc2f18-b0e5-e956-addb-72948865476f"]
                                        },
                                        filters: [{
                                            type: "blur",
                                            filterId: "9053",
                                            value: 30,
                                            unit: "px"
                                        }]
                                    }
                                }, {
                                    id: "a-11-n-21",
                                    actionTypeId: "TRANSFORM_SCALE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".metrics-2nd",
                                            selectorGuids: ["90cc2f18-b0e5-e956-addb-72948865476f"]
                                        },
                                        xValue: 3,
                                        yValue: 3,
                                        locked: !0
                                    }
                                }]
                            }, {
                                keyframe: 75,
                                actionItems: [{
                                    id: "a-11-n-28",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".metrics-3rd",
                                            selectorGuids: ["221f1637-44b3-6846-a10e-7d83e07899a7"]
                                        },
                                        value: 1,
                                        unit: ""
                                    }
                                }, {
                                    id: "a-11-n-29",
                                    actionTypeId: "STYLE_FILTER",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".metrics-3rd",
                                            selectorGuids: ["221f1637-44b3-6846-a10e-7d83e07899a7"]
                                        },
                                        filters: [{
                                            type: "blur",
                                            filterId: "9053",
                                            value: 0,
                                            unit: "px"
                                        }]
                                    }
                                }, {
                                    id: "a-11-n-30",
                                    actionTypeId: "TRANSFORM_SCALE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".metrics-3rd",
                                            selectorGuids: ["221f1637-44b3-6846-a10e-7d83e07899a7"]
                                        },
                                        xValue: 1,
                                        yValue: 1,
                                        locked: !0
                                    }
                                }]
                            }]
                        }],
                        createdOn: 0x1958fbc2e45
                    },
                    "a-23": {
                        id: "a-23",
                        title: "Call To Action Section",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-23-n",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        id: "67419b6f95e735317c544fcf|64bb7be1-14f6-d109-2fb2-d9b7ce4378b6"
                                    },
                                    yValue: 100,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-23-n-2",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        id: "67419b6f95e735317c544fcf|64bb7be1-14f6-d109-2fb2-d9b7ce4378bb"
                                    },
                                    xValue: 0,
                                    locked: !1
                                }
                            }, {
                                id: "a-23-n-3",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        id: "67419b6f95e735317c544fcf|64bb7be1-14f6-d109-2fb2-d9b7ce4378b3"
                                    },
                                    yValue: 100,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-23-n-4",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        id: "67419b6f95e735317c544fcf|64bb7be1-14f6-d109-2fb2-d9b7ce4378b9"
                                    },
                                    yValue: 100,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-23-n-5",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        id: "67419b6f95e735317c544fcf|3b5fe3f5-b266-d973-849f-bfc2f906578b"
                                    },
                                    xValue: 0,
                                    locked: !1
                                }
                            }, {
                                id: "a-23-n-11",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        id: "67419b6f95e735317c544fcf|18137cdf-685f-91f6-8447-f0b484f1ecfe"
                                    },
                                    xValue: 0,
                                    locked: !1
                                }
                            }, {
                                id: "a-23-n-13",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        id: "67419b6f95e735317c544fcf|56a0b0fc-a511-5272-90d8-65a9dc8147da"
                                    },
                                    yValue: 100,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-23-n-15",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        id: "67419b6f95e735317c544fcf|56a0b0fc-a511-5272-90d8-65a9dc8147da"
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-23-n-6",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "ease",
                                    duration: 1500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        id: "67419b6f95e735317c544fcf|64bb7be1-14f6-d109-2fb2-d9b7ce4378b6"
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-23-n-7",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "ease",
                                    duration: 1500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        id: "67419b6f95e735317c544fcf|64bb7be1-14f6-d109-2fb2-d9b7ce4378bb"
                                    },
                                    xValue: 1,
                                    yValue: null,
                                    locked: !1
                                }
                            }, {
                                id: "a-23-n-8",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "ease",
                                    duration: 1250,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        id: "67419b6f95e735317c544fcf|64bb7be1-14f6-d109-2fb2-d9b7ce4378b3"
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-23-n-9",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "ease",
                                    duration: 1250,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        id: "67419b6f95e735317c544fcf|64bb7be1-14f6-d109-2fb2-d9b7ce4378b9"
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-23-n-10",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "ease",
                                    duration: 1500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        id: "67419b6f95e735317c544fcf|3b5fe3f5-b266-d973-849f-bfc2f906578b"
                                    },
                                    xValue: 1,
                                    yValue: null,
                                    locked: !1
                                }
                            }, {
                                id: "a-23-n-12",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "ease",
                                    duration: 1500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        id: "67419b6f95e735317c544fcf|18137cdf-685f-91f6-8447-f0b484f1ecfe"
                                    },
                                    xValue: 1,
                                    yValue: null,
                                    locked: !1
                                }
                            }, {
                                id: "a-23-n-14",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "ease",
                                    duration: 1500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        id: "67419b6f95e735317c544fcf|56a0b0fc-a511-5272-90d8-65a9dc8147da"
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-23-n-16",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "ease",
                                    duration: 1500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".border-wrapper",
                                        selectorGuids: ["1bf91900-d7b9-63ed-0c85-9e55134f52c3"]
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x1958a594ca1
                    },
                    "a-12": {
                        id: "a-12",
                        title: "Gallery Section - 1st Image",
                        continuousParameterGroups: [{
                            id: "a-12-p",
                            type: "SCROLL_PROGRESS",
                            parameterLabel: "Scroll",
                            continuousActionGroups: [{
                                keyframe: 0,
                                actionItems: [{
                                    id: "a-12-n",
                                    actionTypeId: "TRANSFORM_SCALE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            id: "67419b6f95e735317c544fcf|3c0aafa0-82d2-05dc-6021-34010701808a"
                                        },
                                        xValue: 1,
                                        yValue: 1,
                                        locked: !0
                                    }
                                }]
                            }, {
                                keyframe: 50,
                                actionItems: [{
                                    id: "a-12-n-2",
                                    actionTypeId: "TRANSFORM_SCALE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            id: "67419b6f95e735317c544fcf|3c0aafa0-82d2-05dc-6021-34010701808a"
                                        },
                                        xValue: 1.2,
                                        yValue: 1.2,
                                        locked: !0
                                    }
                                }]
                            }]
                        }],
                        createdOn: 0x19590b79680
                    },
                    "a-13": {
                        id: "a-13",
                        title: "Gallery Section - 2nd Image",
                        continuousParameterGroups: [{
                            id: "a-13-p",
                            type: "SCROLL_PROGRESS",
                            parameterLabel: "Scroll",
                            continuousActionGroups: [{
                                keyframe: 0,
                                actionItems: [{
                                    id: "a-13-n",
                                    actionTypeId: "TRANSFORM_SCALE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            id: "67419b6f95e735317c544fcf|89105a66-f6b3-bcbc-5707-0807753981c5"
                                        },
                                        xValue: 1,
                                        yValue: 1,
                                        locked: !0
                                    }
                                }]
                            }, {
                                keyframe: 50,
                                actionItems: [{
                                    id: "a-13-n-2",
                                    actionTypeId: "TRANSFORM_SCALE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            id: "67419b6f95e735317c544fcf|89105a66-f6b3-bcbc-5707-0807753981c5"
                                        },
                                        xValue: 1.2,
                                        yValue: 1.2,
                                        locked: !0
                                    }
                                }]
                            }]
                        }],
                        createdOn: 0x19590b79680
                    },
                    "a-14": {
                        id: "a-14",
                        title: "Gallery Section - 3rd Image",
                        continuousParameterGroups: [{
                            id: "a-14-p",
                            type: "SCROLL_PROGRESS",
                            parameterLabel: "Scroll",
                            continuousActionGroups: [{
                                keyframe: 0,
                                actionItems: [{
                                    id: "a-14-n",
                                    actionTypeId: "TRANSFORM_SCALE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            id: "67419b6f95e735317c544fcf|e99af716-c4ec-eed3-a90c-874674b78583"
                                        },
                                        xValue: 1,
                                        yValue: 1,
                                        locked: !0
                                    }
                                }]
                            }, {
                                keyframe: 50,
                                actionItems: [{
                                    id: "a-14-n-2",
                                    actionTypeId: "TRANSFORM_SCALE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            id: "67419b6f95e735317c544fcf|e99af716-c4ec-eed3-a90c-874674b78583"
                                        },
                                        xValue: 1.2,
                                        yValue: 1.2,
                                        locked: !0
                                    }
                                }]
                            }]
                        }],
                        createdOn: 0x19590b79680
                    },
                    "a-17": {
                        id: "a-17",
                        title: "Text Loop",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-17-n",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        id: "67419b6f95e735317c544fcf|1a60f958-de24-d909-017e-514b5c8aa2c1"
                                    },
                                    xValue: 0,
                                    xUnit: "%",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-17-n-3",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        id: "67419b6f95e735317c544fcf|317fdb10-5d9a-594c-3bec-4ed67cd9afc9"
                                    },
                                    xValue: 0,
                                    xUnit: "%",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-17-n-2",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 6e4,
                                    target: {
                                        id: "67419b6f95e735317c544fcf|1a60f958-de24-d909-017e-514b5c8aa2c1"
                                    },
                                    xValue: -100,
                                    xUnit: "%",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-17-n-4",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 6e4,
                                    target: {
                                        id: "67419b6f95e735317c544fcf|317fdb10-5d9a-594c-3bec-4ed67cd9afc9"
                                    },
                                    xValue: -100,
                                    xUnit: "%",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x195915e4804
                    },
                    "a-8": {
                        id: "a-8",
                        title: "Services Section",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-8-n",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        id: "67419b6f95e735317c544fcf|ce9d290b-6529-6fc0-9392-797f4cc94be7"
                                    },
                                    xValue: 0,
                                    yValue: null,
                                    locked: !1
                                }
                            }, {
                                id: "a-8-n-3",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        id: "67419b6f95e735317c544fcf|ce9d290b-6529-6fc0-9392-797f4cc94bfc"
                                    },
                                    yValue: 100,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-8-n-5",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        id: "67419b6f95e735317c544fcf|ce9d290b-6529-6fc0-9392-797f4cc94bee"
                                    },
                                    yValue: 100,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-8-n-7",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        id: "67419b6f95e735317c544fcf|8f2c3b50-2bef-eb3d-7c2b-c8a92f197fcd"
                                    },
                                    yValue: 100,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-8-n-9",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        id: "67419b6f95e735317c544fcf|ce9d290b-6529-6fc0-9392-797f4cc94bf0"
                                    },
                                    yValue: 100,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-8-n-11",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        id: "67419b6f95e735317c544fcf|8f2c3b50-2bef-eb3d-7c2b-c8a92f197fd0"
                                    },
                                    yValue: 100,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-8-n-13",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        id: "67419b6f95e735317c544fcf|659db3cb-6ef8-8062-0428-ecb3ec53b557"
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }, {
                                id: "a-8-n-14",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        id: "67419b6f95e735317c544fcf|659db3cb-6ef8-8062-0428-ecb3ec53b557"
                                    },
                                    yValue: 20,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-8-n-17",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        id: "67419b6f95e735317c544fcf|8f2c3b50-2bef-eb3d-7c2b-c8a92f197fc8"
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }, {
                                id: "a-8-n-18",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        id: "67419b6f95e735317c544fcf|8f2c3b50-2bef-eb3d-7c2b-c8a92f197fc8"
                                    },
                                    yValue: 20,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-8-n-2",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "ease",
                                    duration: 1500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        id: "67419b6f95e735317c544fcf|ce9d290b-6529-6fc0-9392-797f4cc94be7"
                                    },
                                    xValue: 1,
                                    yValue: null,
                                    locked: !1
                                }
                            }, {
                                id: "a-8-n-4",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "ease",
                                    duration: 1500,
                                    target: {
                                        id: "67419b6f95e735317c544fcf|ce9d290b-6529-6fc0-9392-797f4cc94bfc"
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-8-n-6",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 500,
                                    easing: "ease",
                                    duration: 1250,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        id: "67419b6f95e735317c544fcf|ce9d290b-6529-6fc0-9392-797f4cc94bee"
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-8-n-8",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 500,
                                    easing: "ease",
                                    duration: 1250,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        id: "67419b6f95e735317c544fcf|8f2c3b50-2bef-eb3d-7c2b-c8a92f197fcd"
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-8-n-10",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 500,
                                    easing: "ease",
                                    duration: 1250,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        id: "67419b6f95e735317c544fcf|ce9d290b-6529-6fc0-9392-797f4cc94bf0"
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-8-n-12",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 500,
                                    easing: "ease",
                                    duration: 1250,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        id: "67419b6f95e735317c544fcf|8f2c3b50-2bef-eb3d-7c2b-c8a92f197fd0"
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-8-n-19",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 500,
                                    easing: "ease",
                                    duration: 1250,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        id: "67419b6f95e735317c544fcf|8f2c3b50-2bef-eb3d-7c2b-c8a92f197fc8"
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }, {
                                id: "a-8-n-20",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 500,
                                    easing: "ease",
                                    duration: 1250,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        id: "67419b6f95e735317c544fcf|8f2c3b50-2bef-eb3d-7c2b-c8a92f197fc8"
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-8-n-16",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 500,
                                    easing: "ease",
                                    duration: 1250,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        id: "67419b6f95e735317c544fcf|659db3cb-6ef8-8062-0428-ecb3ec53b557"
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-8-n-15",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 500,
                                    easing: "ease",
                                    duration: 1250,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        id: "67419b6f95e735317c544fcf|659db3cb-6ef8-8062-0428-ecb3ec53b557"
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x1958c0725ff
                    },
                    "a-18": {
                        id: "a-18",
                        title: "Position Fixer",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-18-n",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        id: "67419b6f95e735317c544fcf|7f5e8e00-fae3-5304-4c59-50f6e8d4532e"
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-18-n-2",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        id: "67419b6f95e735317c544fcf|3cfcf51c-6f3b-9bf6-3e96-e302c438dfd1"
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-18-n-3",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        id: "67419b6f95e735317c544fcf|9fcb014f-c12d-5529-2f5f-5425d5322228"
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x1959ad18873
                    },
                    "a-24": {
                        id: "a-24",
                        title: "Text Animation",
                        continuousParameterGroups: [{
                            id: "a-24-p",
                            type: "SCROLL_PROGRESS",
                            parameterLabel: "Scroll",
                            continuousActionGroups: [{
                                keyframe: 20,
                                actionItems: [{
                                    id: "a-24-n",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".overlay",
                                            selectorGuids: ["f69115c5-8183-82dd-1a38-2a4acd7eb7f3"]
                                        },
                                        yValue: 0,
                                        xUnit: "PX",
                                        yUnit: "%",
                                        zUnit: "PX"
                                    }
                                }]
                            }, {
                                keyframe: 60,
                                actionItems: [{
                                    id: "a-24-n-2",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".overlay",
                                            selectorGuids: ["f69115c5-8183-82dd-1a38-2a4acd7eb7f3"]
                                        },
                                        yValue: 100,
                                        xUnit: "PX",
                                        yUnit: "%",
                                        zUnit: "PX"
                                    }
                                }]
                            }]
                        }],
                        createdOn: 0x1959e946dba
                    },
                    "a-25": {
                        id: "a-25",
                        title: "Idea Section",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-25-n",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        id: "67419b6f95e735317c544fcf|1a60f958-de24-d909-017e-514b5c8aa2b8"
                                    },
                                    yValue: 100,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-25-n-2",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        id: "67419b6f95e735317c544fcf|1a60f958-de24-d909-017e-514b5c8aa2bb"
                                    },
                                    yValue: 100,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-25-n-3",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        id: "67419b6f95e735317c544fcf|62558ea2-e610-7745-bc15-3ab7068469fc"
                                    },
                                    yValue: 100,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-25-n-7",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        id: "67419b6f95e735317c544fcf|a3cb26ea-4f0e-c5d5-0e93-d7915ecdb762"
                                    },
                                    xValue: 0,
                                    locked: !1
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-25-n-4",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "ease",
                                    duration: 1500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        id: "67419b6f95e735317c544fcf|1a60f958-de24-d909-017e-514b5c8aa2b8"
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-25-n-6",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "ease",
                                    duration: 1500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        id: "67419b6f95e735317c544fcf|62558ea2-e610-7745-bc15-3ab7068469fc"
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-25-n-5",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "ease",
                                    duration: 1500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        id: "67419b6f95e735317c544fcf|1a60f958-de24-d909-017e-514b5c8aa2bb"
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-25-n-8",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "ease",
                                    duration: 1500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        id: "67419b6f95e735317c544fcf|a3cb26ea-4f0e-c5d5-0e93-d7915ecdb762"
                                    },
                                    xValue: 1,
                                    locked: !1
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x1959ec279d6
                    },
                    "a-26": {
                        id: "a-26",
                        title: "About Us Section - Image",
                        continuousParameterGroups: [{
                            id: "a-26-p",
                            type: "SCROLL_PROGRESS",
                            parameterLabel: "Scroll",
                            continuousActionGroups: [{
                                keyframe: 0,
                                actionItems: [{
                                    id: "a-26-n",
                                    actionTypeId: "TRANSFORM_SCALE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            id: "67419b6f95e735317c544fcf|1ace0a93-52f6-a376-409a-299da9498a12"
                                        },
                                        xValue: 1,
                                        yValue: 1,
                                        locked: !0
                                    }
                                }]
                            }, {
                                keyframe: 50,
                                actionItems: [{
                                    id: "a-26-n-2",
                                    actionTypeId: "TRANSFORM_SCALE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            id: "67419b6f95e735317c544fcf|1ace0a93-52f6-a376-409a-299da9498a12"
                                        },
                                        xValue: 1.2,
                                        yValue: 1.2,
                                        locked: !0
                                    }
                                }]
                            }]
                        }],
                        createdOn: 0x19590b79680
                    },
                    "a-27": {
                        id: "a-27",
                        title: "About Us Section - Text",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-27-n",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        id: "67419b6f95e735317c544fcf|1a60f958-de24-d909-017e-514b5c8aa2ca"
                                    },
                                    yValue: 100,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-27-n-2",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        id: "67419b6f95e735317c544fcf|2149bbb4-9b00-7f9d-9885-4d9887b31202"
                                    },
                                    yValue: 100,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-27-n-3",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        id: "67419b6f95e735317c544fcf|60f0053c-20b4-8bf2-82a2-c9accb4047cf"
                                    },
                                    yValue: 100,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-27-n-4",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        id: "67419b6f95e735317c544fcf|2149bbb4-9b00-7f9d-9885-4d9887b31205"
                                    },
                                    yValue: 100,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-27-n-11",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        id: "67419b6f95e735317c544fcf|1a60f958-de24-d909-017e-514b5c8aa2cf"
                                    },
                                    yValue: 25,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-27-n-12",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        id: "67419b6f95e735317c544fcf|1a60f958-de24-d909-017e-514b5c8aa2cf"
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }, {
                                id: "a-27-n-13",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        id: "67419b6f95e735317c544fcf|db6b3551-1f30-31a8-d9e3-4a13857b41e1"
                                    },
                                    yValue: 25,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-27-n-14",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        id: "67419b6f95e735317c544fcf|db6b3551-1f30-31a8-d9e3-4a13857b41e1"
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }, {
                                id: "a-27-n-15",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        id: "67419b6f95e735317c544fcf|5552128b-04e5-551e-5bb9-fabf65722c2d"
                                    },
                                    yValue: 25,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-27-n-16",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        id: "67419b6f95e735317c544fcf|5552128b-04e5-551e-5bb9-fabf65722c2d"
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-27-n-7",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "ease",
                                    duration: 1500,
                                    target: {
                                        id: "67419b6f95e735317c544fcf|1a60f958-de24-d909-017e-514b5c8aa2ca"
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-27-n-9",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "ease",
                                    duration: 1500,
                                    target: {
                                        id: "67419b6f95e735317c544fcf|60f0053c-20b4-8bf2-82a2-c9accb4047cf"
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-27-n-10",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 500,
                                    easing: "ease",
                                    duration: 1500,
                                    target: {
                                        id: "67419b6f95e735317c544fcf|2149bbb4-9b00-7f9d-9885-4d9887b31205"
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-27-n-8",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 500,
                                    easing: "ease",
                                    duration: 1500,
                                    target: {
                                        id: "67419b6f95e735317c544fcf|2149bbb4-9b00-7f9d-9885-4d9887b31202"
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-27-n-17",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 500,
                                    easing: "ease",
                                    duration: 1500,
                                    target: {
                                        id: "67419b6f95e735317c544fcf|1a60f958-de24-d909-017e-514b5c8aa2cf"
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-27-n-22",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 500,
                                    easing: "ease",
                                    duration: 1500,
                                    target: {
                                        id: "67419b6f95e735317c544fcf|5552128b-04e5-551e-5bb9-fabf65722c2d"
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }, {
                                id: "a-27-n-21",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 500,
                                    easing: "ease",
                                    duration: 1500,
                                    target: {
                                        id: "67419b6f95e735317c544fcf|5552128b-04e5-551e-5bb9-fabf65722c2d"
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-27-n-20",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 500,
                                    easing: "ease",
                                    duration: 1500,
                                    target: {
                                        id: "67419b6f95e735317c544fcf|db6b3551-1f30-31a8-d9e3-4a13857b41e1"
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }, {
                                id: "a-27-n-19",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 500,
                                    easing: "ease",
                                    duration: 1500,
                                    target: {
                                        id: "67419b6f95e735317c544fcf|db6b3551-1f30-31a8-d9e3-4a13857b41e1"
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-27-n-18",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 500,
                                    easing: "ease",
                                    duration: 1500,
                                    target: {
                                        id: "67419b6f95e735317c544fcf|1a60f958-de24-d909-017e-514b5c8aa2cf"
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x1959ec94df5
                    },
                    "a-28": {
                        id: "a-28",
                        title: "Projects Section",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-28-n",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        id: "67419b6f95e735317c544fcf|8cf375d7-8911-d384-4c35-dd8a011a95f6"
                                    },
                                    yValue: 100,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-28-n-3",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        id: "67419b6f95e735317c544fcf|5af6291a-f393-e97f-24dd-516c65cab134"
                                    },
                                    yValue: 100,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-28-n-5",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        id: "67419b6f95e735317c544fcf|9edc13ee-1670-9ece-d7bb-7cde4c2fb97a"
                                    },
                                    xValue: 0,
                                    locked: !1
                                }
                            }, {
                                id: "a-28-n-7",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        id: "67419b6f95e735317c544fcf|9edc13ee-1670-9ece-d7bb-7cde4c2fb994"
                                    },
                                    yValue: 100,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-28-n-2",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "ease",
                                    duration: 1500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        id: "67419b6f95e735317c544fcf|8cf375d7-8911-d384-4c35-dd8a011a95f6"
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-28-n-4",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "ease",
                                    duration: 1500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        id: "67419b6f95e735317c544fcf|5af6291a-f393-e97f-24dd-516c65cab134"
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-28-n-6",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "ease",
                                    duration: 1500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        id: "67419b6f95e735317c544fcf|9edc13ee-1670-9ece-d7bb-7cde4c2fb97a"
                                    },
                                    xValue: 1,
                                    locked: !1
                                }
                            }, {
                                id: "a-28-n-8",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "ease",
                                    duration: 1500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        id: "67419b6f95e735317c544fcf|9edc13ee-1670-9ece-d7bb-7cde4c2fb994"
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x1959f0c0e0f
                    },
                    "a-31": {
                        id: "a-31",
                        title: "Image Zoom",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-31-n",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: !0,
                                        id: "67419b6f95e735317c544fcf|9edc13ee-1670-9ece-d7bb-7cde4c2fb993"
                                    },
                                    xValue: 0,
                                    yValue: 0,
                                    locked: !0
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-31-n-2",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "ease",
                                    duration: 1250,
                                    target: {
                                        useEventTarget: !0,
                                        id: "67419b6f95e735317c544fcf|9edc13ee-1670-9ece-d7bb-7cde4c2fb993"
                                    },
                                    xValue: 1,
                                    yValue: 1,
                                    locked: !0
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x1959f12a184
                    },
                    "a-32": {
                        id: "a-32",
                        title: "Expertise Section",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-32-n",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        id: "67419b6f95e735317c544fcf|1a60f958-de24-d909-017e-514b5c8aa322"
                                    },
                                    yValue: 25,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-32-n-2",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        id: "67419b6f95e735317c544fcf|1a60f958-de24-d909-017e-514b5c8aa322"
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }, {
                                id: "a-32-n-5",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        id: "67419b6f95e735317c544fcf|1fba3873-1d2c-de83-cf4d-03fa5821c65c"
                                    },
                                    yValue: 25,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-32-n-6",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        id: "67419b6f95e735317c544fcf|1fba3873-1d2c-de83-cf4d-03fa5821c65c"
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }, {
                                id: "a-32-n-9",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        id: "67419b6f95e735317c544fcf|f6298cb3-b2de-80d5-93d2-ae3f5db0b12c"
                                    },
                                    yValue: 25,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-32-n-10",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        id: "67419b6f95e735317c544fcf|f6298cb3-b2de-80d5-93d2-ae3f5db0b12c"
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }, {
                                id: "a-32-n-13",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        id: "67419b6f95e735317c544fcf|038f1637-b736-51ca-54fd-d456708f864f"
                                    },
                                    xValue: 0,
                                    locked: !1
                                }
                            }, {
                                id: "a-32-n-15",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        id: "67419b6f95e735317c544fcf|2aa740da-fb9a-483f-e6ea-5c66612f1a41"
                                    },
                                    yValue: 100,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-32-n-17",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        id: "67419b6f95e735317c544fcf|5be7e196-6be6-b14d-d3f2-e5279bac9f4d"
                                    },
                                    yValue: 100,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-32-n-3",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "ease",
                                    duration: 1e3,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        id: "67419b6f95e735317c544fcf|1a60f958-de24-d909-017e-514b5c8aa322"
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-32-n-4",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "ease",
                                    duration: 1e3,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        id: "67419b6f95e735317c544fcf|1a60f958-de24-d909-017e-514b5c8aa322"
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }, {
                                id: "a-32-n-14",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "ease",
                                    duration: 1500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        id: "67419b6f95e735317c544fcf|038f1637-b736-51ca-54fd-d456708f864f"
                                    },
                                    xValue: 1,
                                    locked: !1
                                }
                            }, {
                                id: "a-32-n-16",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "ease",
                                    duration: 1500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        id: "67419b6f95e735317c544fcf|2aa740da-fb9a-483f-e6ea-5c66612f1a41"
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-32-n-18",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "ease",
                                    duration: 1500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        id: "67419b6f95e735317c544fcf|5be7e196-6be6-b14d-d3f2-e5279bac9f4d"
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-32-n-8",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 250,
                                    easing: "ease",
                                    duration: 1e3,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        id: "67419b6f95e735317c544fcf|1fba3873-1d2c-de83-cf4d-03fa5821c65c"
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }, {
                                id: "a-32-n-7",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 250,
                                    easing: "ease",
                                    duration: 1e3,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        id: "67419b6f95e735317c544fcf|1fba3873-1d2c-de83-cf4d-03fa5821c65c"
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-32-n-11",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 500,
                                    easing: "ease",
                                    duration: 1e3,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        id: "67419b6f95e735317c544fcf|f6298cb3-b2de-80d5-93d2-ae3f5db0b12c"
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }, {
                                id: "a-32-n-12",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 500,
                                    easing: "ease",
                                    duration: 1e3,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        id: "67419b6f95e735317c544fcf|f6298cb3-b2de-80d5-93d2-ae3f5db0b12c"
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x1959f7005bf
                    },
                    "a-33": {
                        id: "a-33",
                        title: "Pricing Section",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-33-n-7",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        id: "67419b6f95e735317c544fcf|e343d365-eb81-969c-cf11-aacecd3b0534"
                                    },
                                    xValue: 0,
                                    locked: !1
                                }
                            }, {
                                id: "a-33-n-8",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        id: "67419b6f95e735317c544fcf|38720048-c856-605e-2c13-f1c3d1b5247a"
                                    },
                                    yValue: 100,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-33-n-12",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "ease",
                                    duration: 1500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        id: "67419b6f95e735317c544fcf|e343d365-eb81-969c-cf11-aacecd3b0534"
                                    },
                                    xValue: 1,
                                    locked: !1
                                }
                            }, {
                                id: "a-33-n-13",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "ease",
                                    duration: 1500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        id: "67419b6f95e735317c544fcf|38720048-c856-605e-2c13-f1c3d1b5247a"
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x1959f7005bf
                    },
                    "a-34": {
                        id: "a-34",
                        title: "Showreel Section - Images",
                        continuousParameterGroups: [{
                            id: "a-34-p",
                            type: "SCROLL_PROGRESS",
                            parameterLabel: "Scroll",
                            continuousActionGroups: [{
                                keyframe: 25,
                                actionItems: [{
                                    id: "a-34-n",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".showreel-column-small",
                                            selectorGuids: ["cf440d54-5c96-8500-f38f-7767d7dc5d9c"]
                                        },
                                        yValue: 50,
                                        xUnit: "PX",
                                        yUnit: "%",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-34-n-3",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".showreel-column-medium",
                                            selectorGuids: ["cf440d54-5c96-8500-f38f-7767d7dc5d9e"]
                                        },
                                        yValue: 50,
                                        xUnit: "PX",
                                        yUnit: "%",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-34-n-5",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".showreel-column-big",
                                            selectorGuids: ["cf440d54-5c96-8500-f38f-7767d7dc5da0"]
                                        },
                                        yValue: 50,
                                        xUnit: "PX",
                                        yUnit: "%",
                                        zUnit: "PX"
                                    }
                                }]
                            }, {
                                keyframe: 50,
                                actionItems: [{
                                    id: "a-34-n-2",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".showreel-column-small",
                                            selectorGuids: ["cf440d54-5c96-8500-f38f-7767d7dc5d9c"]
                                        },
                                        yValue: 0,
                                        xUnit: "PX",
                                        yUnit: "%",
                                        zUnit: "PX"
                                    }
                                }]
                            }, {
                                keyframe: 55,
                                actionItems: [{
                                    id: "a-34-n-4",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".showreel-column-medium",
                                            selectorGuids: ["cf440d54-5c96-8500-f38f-7767d7dc5d9e"]
                                        },
                                        yValue: 0,
                                        xUnit: "PX",
                                        yUnit: "%",
                                        zUnit: "PX"
                                    }
                                }]
                            }, {
                                keyframe: 60,
                                actionItems: [{
                                    id: "a-34-n-6",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".showreel-column-big",
                                            selectorGuids: ["cf440d54-5c96-8500-f38f-7767d7dc5da0"]
                                        },
                                        yValue: 0,
                                        xUnit: "PX",
                                        yUnit: "%",
                                        zUnit: "PX"
                                    }
                                }]
                            }]
                        }],
                        createdOn: 0x1959fc6ff91
                    },
                    slideInBottom: {
                        id: "slideInBottom",
                        useFirstGroupAsInitialState: !0,
                        actionItemGroups: [{
                            actionItems: [{
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    duration: 0,
                                    target: {
                                        id: "N/A",
                                        appliesTo: "TRIGGER_ELEMENT",
                                        useEventTarget: !0
                                    },
                                    value: 0
                                }
                            }]
                        }, {
                            actionItems: [{
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    duration: 0,
                                    target: {
                                        id: "N/A",
                                        appliesTo: "TRIGGER_ELEMENT",
                                        useEventTarget: !0
                                    },
                                    xValue: 0,
                                    yValue: 100,
                                    xUnit: "PX",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }]
                        }, {
                            actionItems: [{
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "outQuart",
                                    duration: 1e3,
                                    target: {
                                        id: "N/A",
                                        appliesTo: "TRIGGER_ELEMENT",
                                        useEventTarget: !0
                                    },
                                    xValue: 0,
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }, {
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "outQuart",
                                    duration: 1e3,
                                    target: {
                                        id: "N/A",
                                        appliesTo: "TRIGGER_ELEMENT",
                                        useEventTarget: !0
                                    },
                                    value: 1
                                }
                            }]
                        }]
                    }
                },
                site: {
                    mediaQueries: [{
                        key: "main",
                        min: 992,
                        max: 1e4
                    }, {
                        key: "medium",
                        min: 768,
                        max: 991
                    }, {
                        key: "small",
                        min: 480,
                        max: 767
                    }, {
                        key: "tiny",
                        min: 0,
                        max: 479
                    }]
                }
            })
        }
    }
]);