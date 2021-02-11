! function(e, t) { "use strict"; "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) { if (!e.document) throw new Error("jQuery requires a window with a document"); return t(e) } : t(e) }("undefined" != typeof window ? window : this, function(e, t) {
    "use strict";
    var n = [],
        r = e.document,
        i = Object.getPrototypeOf,
        o = n.slice,
        a = n.concat,
        s = n.push,
        u = n.indexOf,
        l = {},
        c = l.toString,
        f = l.hasOwnProperty,
        p = f.toString,
        d = p.call(Object),
        h = {};

    function g(e, t) {
        var n = (t = t || r).createElement("script");
        n.text = e, t.head.appendChild(n).parentNode.removeChild(n)
    }
    var v = "3.0.0",
        m = function(e, t) { return new m.fn.init(e, t) },
        y = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        x = /^-ms-/,
        b = /-([a-z])/g,
        w = function(e, t) { return t.toUpperCase() };

    function T(e) {
        var t = !!e && "length" in e && e.length,
            n = m.type(e);
        return "function" !== n && !m.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }
    m.fn = m.prototype = {
        jquery: v,
        constructor: m,
        length: 0,
        toArray: function() { return o.call(this) },
        get: function(e) { return null != e ? 0 > e ? this[e + this.length] : this[e] : o.call(this) },
        pushStack: function(e) { var t = m.merge(this.constructor(), e); return t.prevObject = this, t },
        each: function(e) { return m.each(this, e) },
        map: function(e) { return this.pushStack(m.map(this, function(t, n) { return e.call(t, n, t) })) },
        slice: function() { return this.pushStack(o.apply(this, arguments)) },
        first: function() { return this.eq(0) },
        last: function() { return this.eq(-1) },
        eq: function(e) {
            var t = this.length,
                n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        },
        end: function() { return this.prevObject || this.constructor() },
        push: s,
        sort: n.sort,
        splice: n.splice
    }, m.extend = m.fn.extend = function() {
        var e, t, n, r, i, o, a = arguments[0] || {},
            s = 1,
            u = arguments.length,
            l = !1;
        for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || m.isFunction(a) || (a = {}), s === u && (a = this, s--); u > s; s++)
            if (null != (e = arguments[s]))
                for (t in e) n = a[t], a !== (r = e[t]) && (l && r && (m.isPlainObject(r) || (i = m.isArray(r))) ? (i ? (i = !1, o = n && m.isArray(n) ? n : []) : o = n && m.isPlainObject(n) ? n : {}, a[t] = m.extend(l, o, r)) : void 0 !== r && (a[t] = r));
        return a
    }, m.extend({
        expando: "jQuery" + (v + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) { throw new Error(e) },
        noop: function() {},
        isFunction: function(e) { return "function" === m.type(e) },
        isArray: Array.isArray,
        isWindow: function(e) { return null != e && e === e.window },
        isNumeric: function(e) { var t = m.type(e); return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e)) },
        isPlainObject: function(e) { var t, n; return !(!e || "[object Object]" !== c.call(e)) && (!(t = i(e)) || "function" == typeof(n = f.call(t, "constructor") && t.constructor) && p.call(n) === d) },
        isEmptyObject: function(e) { var t; for (t in e) return !1; return !0 },
        type: function(e) { return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? l[c.call(e)] || "object" : typeof e },
        globalEval: function(e) { g(e) },
        camelCase: function(e) { return e.replace(x, "ms-").replace(b, w) },
        nodeName: function(e, t) { return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase() },
        each: function(e, t) {
            var n, r = 0;
            if (T(e))
                for (n = e.length; n > r && !1 !== t.call(e[r], r, e[r]); r++);
            else
                for (r in e)
                    if (!1 === t.call(e[r], r, e[r])) break; return e
        },
        trim: function(e) { return null == e ? "" : (e + "").replace(y, "") },
        makeArray: function(e, t) { var n = t || []; return null != e && (T(Object(e)) ? m.merge(n, "string" == typeof e ? [e] : e) : s.call(n, e)), n },
        inArray: function(e, t, n) { return null == t ? -1 : u.call(t, e, n) },
        merge: function(e, t) { for (var n = +t.length, r = 0, i = e.length; n > r; r++) e[i++] = t[r]; return e.length = i, e },
        grep: function(e, t, n) { for (var r = [], i = 0, o = e.length, a = !n; o > i; i++) !t(e[i], i) !== a && r.push(e[i]); return r },
        map: function(e, t, n) {
            var r, i, o = 0,
                s = [];
            if (T(e))
                for (r = e.length; r > o; o++) null != (i = t(e[o], o, n)) && s.push(i);
            else
                for (o in e) null != (i = t(e[o], o, n)) && s.push(i);
            return a.apply([], s)
        },
        guid: 1,
        proxy: function(e, t) { var n, r, i; return "string" == typeof t && (n = e[t], t = e, e = n), m.isFunction(e) ? (r = o.call(arguments, 2), (i = function() { return e.apply(t || this, r.concat(o.call(arguments))) }).guid = e.guid = e.guid || m.guid++, i) : void 0 },
        now: Date.now,
        support: h
    }), "function" == typeof Symbol && (m.fn[Symbol.iterator] = n[Symbol.iterator]), m.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) { l["[object " + t + "]"] = t.toLowerCase() });
    var C = function(e) {
        var t, n, r, i, o, a, s, u, l, c, f, p, d, h, g, v, m, y, x, b = "sizzle" + 1 * new Date,
            w = e.document,
            T = 0,
            C = 0,
            k = ae(),
            E = ae(),
            S = ae(),
            N = function(e, t) { return e === t && (f = !0), 0 },
            D = {}.hasOwnProperty,
            j = [],
            A = j.pop,
            q = j.push,
            L = j.push,
            H = j.slice,
            F = function(e, t) {
                for (var n = 0, r = e.length; r > n; n++)
                    if (e[n] === t) return n;
                return -1
            },
            O = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            P = "[\\x20\\t\\r\\n\\f]",
            R = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            M = "\\[" + P + "*(" + R + ")(?:" + P + "*([*^$|!~]?=)" + P + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + R + "))|)" + P + "*\\]",
            I = ":(" + R + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + M + ")*)|.*)\\)|)",
            W = new RegExp(P + "+", "g"),
            $ = new RegExp("^" + P + "+|((?:^|[^\\\\])(?:\\\\.)*)" + P + "+$", "g"),
            B = new RegExp("^" + P + "*," + P + "*"),
            _ = new RegExp("^" + P + "*([>+~]|" + P + ")" + P + "*"),
            z = new RegExp("=" + P + "*([^\\]'\"]*?)" + P + "*\\]", "g"),
            X = new RegExp(I),
            U = new RegExp("^" + R + "$"),
            V = { ID: new RegExp("^#(" + R + ")"), CLASS: new RegExp("^\\.(" + R + ")"), TAG: new RegExp("^(" + R + "|[*])"), ATTR: new RegExp("^" + M), PSEUDO: new RegExp("^" + I), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + P + "*(even|odd|(([+-]|)(\\d*)n|)" + P + "*(?:([+-]|)" + P + "*(\\d+)|))" + P + "*\\)|)", "i"), bool: new RegExp("^(?:" + O + ")$", "i"), needsContext: new RegExp("^" + P + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + P + "*((?:-\\d)?\\d*)" + P + "*\\)|)(?=[^-]|$)", "i") },
            G = /^(?:input|select|textarea|button)$/i,
            Y = /^h\d$/i,
            Q = /^[^{]+\{\s*\[native \w/,
            J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            K = /[+~]/,
            Z = new RegExp("\\\\([\\da-f]{1,6}" + P + "?|(" + P + ")|.)", "ig"),
            ee = function(e, t, n) { var r = "0x" + t - 65536; return r != r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320) },
            te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,
            ne = function(e, t) { return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e },
            re = function() { p() },
            ie = ye(function(e) { return !0 === e.disabled }, { dir: "parentNode", next: "legend" });
        try { L.apply(j = H.call(w.childNodes), w.childNodes), j[w.childNodes.length].nodeType } catch (e) {
            L = {
                apply: j.length ? function(e, t) { q.apply(e, H.call(t)) } : function(e, t) {
                    for (var n = e.length, r = 0; e[n++] = t[r++];);
                    e.length = n - 1
                }
            }
        }

        function oe(e, t, r, i) {
            var o, s, l, c, f, h, m, y = t && t.ownerDocument,
                T = t ? t.nodeType : 9;
            if (r = r || [], "string" != typeof e || !e || 1 !== T && 9 !== T && 11 !== T) return r;
            if (!i && ((t ? t.ownerDocument || t : w) !== d && p(t), t = t || d, g)) {
                if (11 !== T && (f = J.exec(e)))
                    if (o = f[1]) { if (9 === T) { if (!(l = t.getElementById(o))) return r; if (l.id === o) return r.push(l), r } else if (y && (l = y.getElementById(o)) && x(t, l) && l.id === o) return r.push(l), r } else { if (f[2]) return L.apply(r, t.getElementsByTagName(e)), r; if ((o = f[3]) && n.getElementsByClassName && t.getElementsByClassName) return L.apply(r, t.getElementsByClassName(o)), r }
                if (n.qsa && !S[e + " "] && (!v || !v.test(e))) {
                    if (1 !== T) y = t, m = e;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((c = t.getAttribute("id")) ? c = c.replace(te, ne) : t.setAttribute("id", c = b), s = (h = a(e)).length; s--;) h[s] = "#" + c + " " + me(h[s]);
                        m = h.join(","), y = K.test(e) && ge(t.parentNode) || t
                    }
                    if (m) try { return L.apply(r, y.querySelectorAll(m)), r } catch (e) {} finally { c === b && t.removeAttribute("id") }
                }
            }
            return u(e.replace($, "$1"), t, r, i)
        }

        function ae() { var e = []; return function t(n, i) { return e.push(n + " ") > r.cacheLength && delete t[e.shift()], t[n + " "] = i } }

        function se(e) { return e[b] = !0, e }

        function ue(e) { var t = d.createElement("fieldset"); try { return !!e(t) } catch (e) { return !1 } finally { t.parentNode && t.parentNode.removeChild(t), t = null } }

        function le(e, t) { for (var n = e.split("|"), i = n.length; i--;) r.attrHandle[n[i]] = t }

        function ce(e, t) {
            var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r) return r;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function fe(e) { return function(t) { return "input" === t.nodeName.toLowerCase() && t.type === e } }

        function pe(e) { return function(t) { var n = t.nodeName.toLowerCase(); return ("input" === n || "button" === n) && t.type === e } }

        function de(e) { return function(t) { return "label" in t && t.disabled === e || "form" in t && t.disabled === e || "form" in t && !1 === t.disabled && (t.isDisabled === e || t.isDisabled !== !e && ("label" in t || !ie(t)) !== e) } }

        function he(e) { return se(function(t) { return t = +t, se(function(n, r) { for (var i, o = e([], n.length, t), a = o.length; a--;) n[i = o[a]] && (n[i] = !(r[i] = n[i])) }) }) }

        function ge(e) { return e && void 0 !== e.getElementsByTagName && e }
        for (t in n = oe.support = {}, o = oe.isXML = function(e) { var t = e && (e.ownerDocument || e).documentElement; return !!t && "HTML" !== t.nodeName }, p = oe.setDocument = function(e) {
                var t, i, a = e ? e.ownerDocument || e : w;
                return a !== d && 9 === a.nodeType && a.documentElement ? (h = (d = a).documentElement, g = !o(d), w !== d && (i = d.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", re, !1) : i.attachEvent && i.attachEvent("onunload", re)), n.attributes = ue(function(e) { return e.className = "i", !e.getAttribute("className") }), n.getElementsByTagName = ue(function(e) { return e.appendChild(d.createComment("")), !e.getElementsByTagName("*").length }), n.getElementsByClassName = Q.test(d.getElementsByClassName), n.getById = ue(function(e) { return h.appendChild(e).id = b, !d.getElementsByName || !d.getElementsByName(b).length }), n.getById ? (r.find.ID = function(e, t) { if (void 0 !== t.getElementById && g) { var n = t.getElementById(e); return n ? [n] : [] } }, r.filter.ID = function(e) { var t = e.replace(Z, ee); return function(e) { return e.getAttribute("id") === t } }) : (delete r.find.ID, r.filter.ID = function(e) { var t = e.replace(Z, ee); return function(e) { var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id"); return n && n.value === t } }), r.find.TAG = n.getElementsByTagName ? function(e, t) { return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0 } : function(e, t) {
                    var n, r = [],
                        i = 0,
                        o = t.getElementsByTagName(e);
                    if ("*" === e) { for (; n = o[i++];) 1 === n.nodeType && r.push(n); return r }
                    return o
                }, r.find.CLASS = n.getElementsByClassName && function(e, t) { return void 0 !== t.getElementsByClassName && g ? t.getElementsByClassName(e) : void 0 }, m = [], v = [], (n.qsa = Q.test(d.querySelectorAll)) && (ue(function(e) { h.appendChild(e).innerHTML = "<a id='" + b + "'></a><select id='" + b + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + P + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || v.push("\\[" + P + "*(?:value|" + O + ")"), e.querySelectorAll("[id~=" + b + "-]").length || v.push("~="), e.querySelectorAll(":checked").length || v.push(":checked"), e.querySelectorAll("a#" + b + "+*").length || v.push(".#.+[+~]") }), ue(function(e) {
                    e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var t = d.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && v.push("name" + P + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"), h.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), v.push(",.*:")
                })), (n.matchesSelector = Q.test(y = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && ue(function(e) { n.disconnectedMatch = y.call(e, "*"), y.call(e, "[s!='']:x"), m.push("!=", I) }), v = v.length && new RegExp(v.join("|")), m = m.length && new RegExp(m.join("|")), t = Q.test(h.compareDocumentPosition), x = t || Q.test(h.contains) ? function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        r = t && t.parentNode;
                    return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                } : function(e, t) {
                    if (t)
                        for (; t = t.parentNode;)
                            if (t === e) return !0;
                    return !1
                }, N = t ? function(e, t) { if (e === t) return f = !0, 0; var r = !e.compareDocumentPosition - !t.compareDocumentPosition; return r || (1 & (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === r ? e === d || e.ownerDocument === w && x(w, e) ? -1 : t === d || t.ownerDocument === w && x(w, t) ? 1 : c ? F(c, e) - F(c, t) : 0 : 4 & r ? -1 : 1) } : function(e, t) {
                    if (e === t) return f = !0, 0;
                    var n, r = 0,
                        i = e.parentNode,
                        o = t.parentNode,
                        a = [e],
                        s = [t];
                    if (!i || !o) return e === d ? -1 : t === d ? 1 : i ? -1 : o ? 1 : c ? F(c, e) - F(c, t) : 0;
                    if (i === o) return ce(e, t);
                    for (n = e; n = n.parentNode;) a.unshift(n);
                    for (n = t; n = n.parentNode;) s.unshift(n);
                    for (; a[r] === s[r];) r++;
                    return r ? ce(a[r], s[r]) : a[r] === w ? -1 : s[r] === w ? 1 : 0
                }, d) : d
            }, oe.matches = function(e, t) { return oe(e, null, null, t) }, oe.matchesSelector = function(e, t) {
                if ((e.ownerDocument || e) !== d && p(e), t = t.replace(z, "='$1']"), n.matchesSelector && g && !S[t + " "] && (!m || !m.test(t)) && (!v || !v.test(t))) try { var r = y.call(e, t); if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r } catch (e) {}
                return oe(t, d, null, [e]).length > 0
            }, oe.contains = function(e, t) { return (e.ownerDocument || e) !== d && p(e), x(e, t) }, oe.attr = function(e, t) {
                (e.ownerDocument || e) !== d && p(e);
                var i = r.attrHandle[t.toLowerCase()],
                    o = i && D.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !g) : void 0;
                return void 0 !== o ? o : n.attributes || !g ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null
            }, oe.escape = function(e) { return (e + "").replace(te, ne) }, oe.error = function(e) { throw new Error("Syntax error, unrecognized expression: " + e) }, oe.uniqueSort = function(e) {
                var t, r = [],
                    i = 0,
                    o = 0;
                if (f = !n.detectDuplicates, c = !n.sortStable && e.slice(0), e.sort(N), f) { for (; t = e[o++];) t === e[o] && (i = r.push(o)); for (; i--;) e.splice(r[i], 1) }
                return c = null, e
            }, i = oe.getText = function(e) {
                var t, n = "",
                    r = 0,
                    o = e.nodeType;
                if (o) { if (1 === o || 9 === o || 11 === o) { if ("string" == typeof e.textContent) return e.textContent; for (e = e.firstChild; e; e = e.nextSibling) n += i(e) } else if (3 === o || 4 === o) return e.nodeValue } else
                    for (; t = e[r++];) n += i(t);
                return n
            }, (r = oe.selectors = {
                cacheLength: 50,
                createPseudo: se,
                match: V,
                attrHandle: {},
                find: {},
                relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } },
                preFilter: { ATTR: function(e) { return e[1] = e[1].replace(Z, ee), e[3] = (e[3] || e[4] || e[5] || "").replace(Z, ee), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4) }, CHILD: function(e) { return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || oe.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && oe.error(e[0]), e }, PSEUDO: function(e) { var t, n = !e[6] && e[2]; return V.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = a(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3)) } },
                filter: {
                    TAG: function(e) { var t = e.replace(Z, ee).toLowerCase(); return "*" === e ? function() { return !0 } : function(e) { return e.nodeName && e.nodeName.toLowerCase() === t } },
                    CLASS: function(e) { var t = k[e + " "]; return t || (t = new RegExp("(^|" + P + ")" + e + "(" + P + "|$)")) && k(e, function(e) { return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "") }) },
                    ATTR: function(e, t, n) { return function(r) { var i = oe.attr(r, e); return null == i ? "!=" === t : !t || (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i.replace(W, " ") + " ").indexOf(n) > -1 : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-")) } },
                    CHILD: function(e, t, n, r, i) {
                        var o = "nth" !== e.slice(0, 3),
                            a = "last" !== e.slice(-4),
                            s = "of-type" === t;
                        return 1 === r && 0 === i ? function(e) { return !!e.parentNode } : function(t, n, u) {
                            var l, c, f, p, d, h, g = o !== a ? "nextSibling" : "previousSibling",
                                v = t.parentNode,
                                m = s && t.nodeName.toLowerCase(),
                                y = !u && !s,
                                x = !1;
                            if (v) {
                                if (o) {
                                    for (; g;) {
                                        for (p = t; p = p[g];)
                                            if (s ? p.nodeName.toLowerCase() === m : 1 === p.nodeType) return !1;
                                        h = g = "only" === e && !h && "nextSibling"
                                    }
                                    return !0
                                }
                                if (h = [a ? v.firstChild : v.lastChild], a && y) {
                                    for (x = (d = (l = (c = (f = (p = v)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && l[1]) && l[2], p = d && v.childNodes[d]; p = ++d && p && p[g] || (x = d = 0) || h.pop();)
                                        if (1 === p.nodeType && ++x && p === t) { c[e] = [T, d, x]; break }
                                } else if (y && (x = d = (l = (c = (f = (p = t)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && l[1]), !1 === x)
                                    for (;
                                        (p = ++d && p && p[g] || (x = d = 0) || h.pop()) && ((s ? p.nodeName.toLowerCase() !== m : 1 !== p.nodeType) || !++x || (y && ((c = (f = p[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] = [T, x]), p !== t)););
                                return (x -= i) === r || x % r == 0 && x / r >= 0
                            }
                        }
                    },
                    PSEUDO: function(e, t) { var n, i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || oe.error("unsupported pseudo: " + e); return i[b] ? i(t) : i.length > 1 ? (n = [e, e, "", t], r.setFilters.hasOwnProperty(e.toLowerCase()) ? se(function(e, n) { for (var r, o = i(e, t), a = o.length; a--;) e[r = F(e, o[a])] = !(n[r] = o[a]) }) : function(e) { return i(e, 0, n) }) : i }
                },
                pseudos: {
                    not: se(function(e) {
                        var t = [],
                            n = [],
                            r = s(e.replace($, "$1"));
                        return r[b] ? se(function(e, t, n, i) { for (var o, a = r(e, null, i, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o)) }) : function(e, i, o) { return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop() }
                    }),
                    has: se(function(e) { return function(t) { return oe(e, t).length > 0 } }),
                    contains: se(function(e) {
                        return e = e.replace(Z, ee),
                            function(t) { return (t.textContent || t.innerText || i(t)).indexOf(e) > -1 }
                    }),
                    lang: se(function(e) {
                        return U.test(e || "") || oe.error("unsupported lang: " + e), e = e.replace(Z, ee).toLowerCase(),
                            function(t) {
                                var n;
                                do { if (n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-") } while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1
                            }
                    }),
                    target: function(t) { var n = e.location && e.location.hash; return n && n.slice(1) === t.id },
                    root: function(e) { return e === h },
                    focus: function(e) { return e === d.activeElement && (!d.hasFocus || d.hasFocus()) && !!(e.type || e.href || ~e.tabIndex) },
                    enabled: de(!1),
                    disabled: de(!0),
                    checked: function(e) { var t = e.nodeName.toLowerCase(); return "input" === t && !!e.checked || "option" === t && !!e.selected },
                    selected: function(e) { return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(e) { return !r.pseudos.empty(e) },
                    header: function(e) { return Y.test(e.nodeName) },
                    input: function(e) { return G.test(e.nodeName) },
                    button: function(e) { var t = e.nodeName.toLowerCase(); return "input" === t && "button" === e.type || "button" === t },
                    text: function(e) { var t; return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase()) },
                    first: he(function() { return [0] }),
                    last: he(function(e, t) { return [t - 1] }),
                    eq: he(function(e, t, n) { return [0 > n ? n + t : n] }),
                    even: he(function(e, t) { for (var n = 0; t > n; n += 2) e.push(n); return e }),
                    odd: he(function(e, t) { for (var n = 1; t > n; n += 2) e.push(n); return e }),
                    lt: he(function(e, t, n) { for (var r = 0 > n ? n + t : n; --r >= 0;) e.push(r); return e }),
                    gt: he(function(e, t, n) { for (var r = 0 > n ? n + t : n; ++r < t;) e.push(r); return e })
                }
            }).pseudos.nth = r.pseudos.eq, { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) r.pseudos[t] = fe(t);
        for (t in { submit: !0, reset: !0 }) r.pseudos[t] = pe(t);

        function ve() {}

        function me(e) { for (var t = 0, n = e.length, r = ""; n > t; t++) r += e[t].value; return r }

        function ye(e, t, n) {
            var r = t.dir,
                i = t.next,
                o = i || r,
                a = n && "parentNode" === o,
                s = C++;
            return t.first ? function(t, n, i) {
                for (; t = t[r];)
                    if (1 === t.nodeType || a) return e(t, n, i)
            } : function(t, n, u) {
                var l, c, f, p = [T, s];
                if (u) {
                    for (; t = t[r];)
                        if ((1 === t.nodeType || a) && e(t, n, u)) return !0
                } else
                    for (; t = t[r];)
                        if (1 === t.nodeType || a)
                            if (c = (f = t[b] || (t[b] = {}))[t.uniqueID] || (f[t.uniqueID] = {}), i && i === t.nodeName.toLowerCase()) t = t[r] || t;
                            else { if ((l = c[o]) && l[0] === T && l[1] === s) return p[2] = l[2]; if (c[o] = p, p[2] = e(t, n, u)) return !0 }
            }
        }

        function xe(e) {
            return e.length > 1 ? function(t, n, r) {
                for (var i = e.length; i--;)
                    if (!e[i](t, n, r)) return !1;
                return !0
            } : e[0]
        }

        function be(e, t, n, r, i) { for (var o, a = [], s = 0, u = e.length, l = null != t; u > s; s++)(o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s))); return a }

        function we(e, t, n, r, i, o) {
            return r && !r[b] && (r = we(r)), i && !i[b] && (i = we(i, o)), se(function(o, a, s, u) {
                var l, c, f, p = [],
                    d = [],
                    h = a.length,
                    g = o || function(e, t, n) { for (var r = 0, i = t.length; i > r; r++) oe(e, t[r], n); return n }(t || "*", s.nodeType ? [s] : s, []),
                    v = !e || !o && t ? g : be(g, p, e, s, u),
                    m = n ? i || (o ? e : h || r) ? [] : a : v;
                if (n && n(v, m, s, u), r)
                    for (l = be(m, d), r(l, [], s, u), c = l.length; c--;)(f = l[c]) && (m[d[c]] = !(v[d[c]] = f));
                if (o) {
                    if (i || e) {
                        if (i) {
                            for (l = [], c = m.length; c--;)(f = m[c]) && l.push(v[c] = f);
                            i(null, m = [], l, u)
                        }
                        for (c = m.length; c--;)(f = m[c]) && (l = i ? F(o, f) : p[c]) > -1 && (o[l] = !(a[l] = f))
                    }
                } else m = be(m === a ? m.splice(h, m.length) : m), i ? i(null, a, m, u) : L.apply(a, m)
            })
        }

        function Te(e) {
            for (var t, n, i, o = e.length, a = r.relative[e[0].type], s = a || r.relative[" "], u = a ? 1 : 0, c = ye(function(e) { return e === t }, s, !0), f = ye(function(e) { return F(t, e) > -1 }, s, !0), p = [function(e, n, r) { var i = !a && (r || n !== l) || ((t = n).nodeType ? c(e, n, r) : f(e, n, r)); return t = null, i }]; o > u; u++)
                if (n = r.relative[e[u].type]) p = [ye(xe(p), n)];
                else {
                    if ((n = r.filter[e[u].type].apply(null, e[u].matches))[b]) { for (i = ++u; o > i && !r.relative[e[i].type]; i++); return we(u > 1 && xe(p), u > 1 && me(e.slice(0, u - 1).concat({ value: " " === e[u - 2].type ? "*" : "" })).replace($, "$1"), n, i > u && Te(e.slice(u, i)), o > i && Te(e = e.slice(i)), o > i && me(e)) }
                    p.push(n)
                }
            return xe(p)
        }

        function Ce(e, t) {
            var n = t.length > 0,
                i = e.length > 0,
                o = function(o, a, s, u, c) {
                    var f, h, v, m = 0,
                        y = "0",
                        x = o && [],
                        b = [],
                        w = l,
                        C = o || i && r.find.TAG("*", c),
                        k = T += null == w ? 1 : Math.random() || .1,
                        E = C.length;
                    for (c && (l = a === d || a || c); y !== E && null != (f = C[y]); y++) {
                        if (i && f) {
                            for (h = 0, a || f.ownerDocument === d || (p(f), s = !g); v = e[h++];)
                                if (v(f, a || d, s)) { u.push(f); break }
                            c && (T = k)
                        }
                        n && ((f = !v && f) && m--, o && x.push(f))
                    }
                    if (m += y, n && y !== m) {
                        for (h = 0; v = t[h++];) v(x, b, a, s);
                        if (o) {
                            if (m > 0)
                                for (; y--;) x[y] || b[y] || (b[y] = A.call(u));
                            b = be(b)
                        }
                        L.apply(u, b), c && !o && b.length > 0 && m + t.length > 1 && oe.uniqueSort(u)
                    }
                    return c && (T = k, l = w), x
                };
            return n ? se(o) : o
        }
        return ve.prototype = r.filters = r.pseudos, r.setFilters = new ve, a = oe.tokenize = function(e, t) { var n, i, o, a, s, u, l, c = E[e + " "]; if (c) return t ? 0 : c.slice(0); for (s = e, u = [], l = r.preFilter; s;) { for (a in n && !(i = B.exec(s)) || (i && (s = s.slice(i[0].length) || s), u.push(o = [])), n = !1, (i = _.exec(s)) && (n = i.shift(), o.push({ value: n, type: i[0].replace($, " ") }), s = s.slice(n.length)), r.filter) !(i = V[a].exec(s)) || l[a] && !(i = l[a](i)) || (n = i.shift(), o.push({ value: n, type: a, matches: i }), s = s.slice(n.length)); if (!n) break } return t ? s.length : s ? oe.error(e) : E(e, u).slice(0) }, s = oe.compile = function(e, t) {
            var n, r = [],
                i = [],
                o = S[e + " "];
            if (!o) {
                for (t || (t = a(e)), n = t.length; n--;)(o = Te(t[n]))[b] ? r.push(o) : i.push(o);
                (o = S(e, Ce(i, r))).selector = e
            }
            return o
        }, u = oe.select = function(e, t, i, o) {
            var u, l, c, f, p, d = "function" == typeof e && e,
                h = !o && a(e = d.selector || e);
            if (i = i || [], 1 === h.length) {
                if ((l = h[0] = h[0].slice(0)).length > 2 && "ID" === (c = l[0]).type && n.getById && 9 === t.nodeType && g && r.relative[l[1].type]) {
                    if (!(t = (r.find.ID(c.matches[0].replace(Z, ee), t) || [])[0])) return i;
                    d && (t = t.parentNode), e = e.slice(l.shift().value.length)
                }
                for (u = V.needsContext.test(e) ? 0 : l.length; u-- && (c = l[u], !r.relative[f = c.type]);)
                    if ((p = r.find[f]) && (o = p(c.matches[0].replace(Z, ee), K.test(l[0].type) && ge(t.parentNode) || t))) { if (l.splice(u, 1), !(e = o.length && me(l))) return L.apply(i, o), i; break }
            }
            return (d || s(e, h))(o, t, !g, i, !t || K.test(e) && ge(t.parentNode) || t), i
        }, n.sortStable = b.split("").sort(N).join("") === b, n.detectDuplicates = !!f, p(), n.sortDetached = ue(function(e) { return 1 & e.compareDocumentPosition(d.createElement("fieldset")) }), ue(function(e) { return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href") }) || le("type|href|height|width", function(e, t, n) { return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2) }), n.attributes && ue(function(e) { return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value") }) || le("value", function(e, t, n) { return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue }), ue(function(e) { return null == e.getAttribute("disabled") }) || le(O, function(e, t, n) { var r; return n ? void 0 : !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null }), oe
    }(e);
    m.find = C, m.expr = C.selectors, m.expr[":"] = m.expr.pseudos, m.uniqueSort = m.unique = C.uniqueSort, m.text = C.getText, m.isXMLDoc = C.isXML, m.contains = C.contains, m.escapeSelector = C.escape;
    var k = function(e, t, n) {
            for (var r = [], i = void 0 !== n;
                (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (i && m(e).is(n)) break;
                    r.push(e)
                }
            return r
        },
        E = function(e, t) { for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e); return n },
        S = m.expr.match.needsContext,
        N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
        D = /^.[^:#\[\.,]*$/;

    function j(e, t, n) {
        if (m.isFunction(t)) return m.grep(e, function(e, r) { return !!t.call(e, r, e) !== n });
        if (t.nodeType) return m.grep(e, function(e) { return e === t !== n });
        if ("string" == typeof t) {
            if (D.test(t)) return m.filter(t, e, n);
            t = m.filter(t, e)
        }
        return m.grep(e, function(e) { return u.call(t, e) > -1 !== n && 1 === e.nodeType })
    }
    m.filter = function(e, t, n) { var r = t[0]; return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? m.find.matchesSelector(r, e) ? [r] : [] : m.find.matches(e, m.grep(t, function(e) { return 1 === e.nodeType })) }, m.fn.extend({
        find: function(e) {
            var t, n, r = this.length,
                i = this;
            if ("string" != typeof e) return this.pushStack(m(e).filter(function() {
                for (t = 0; r > t; t++)
                    if (m.contains(i[t], this)) return !0
            }));
            for (n = this.pushStack([]), t = 0; r > t; t++) m.find(e, i[t], n);
            return r > 1 ? m.uniqueSort(n) : n
        },
        filter: function(e) { return this.pushStack(j(this, e || [], !1)) },
        not: function(e) { return this.pushStack(j(this, e || [], !0)) },
        is: function(e) { return !!j(this, "string" == typeof e && S.test(e) ? m(e) : e || [], !1).length }
    });
    var A, q = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (m.fn.init = function(e, t, n) {
        var i, o;
        if (!e) return this;
        if (n = n || A, "string" == typeof e) {
            if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : q.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (i[1]) {
                if (t = t instanceof m ? t[0] : t, m.merge(this, m.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : r, !0)), N.test(i[1]) && m.isPlainObject(t))
                    for (i in t) m.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                return this
            }
            return (o = r.getElementById(i[2])) && (this[0] = o, this.length = 1), this
        }
        return e.nodeType ? (this[0] = e, this.length = 1, this) : m.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(m) : m.makeArray(e, this)
    }).prototype = m.fn, A = m(r);
    var L = /^(?:parents|prev(?:Until|All))/,
        H = { children: !0, contents: !0, next: !0, prev: !0 };

    function F(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }
    m.fn.extend({
        has: function(e) {
            var t = m(e, this),
                n = t.length;
            return this.filter(function() {
                for (var e = 0; n > e; e++)
                    if (m.contains(this, t[e])) return !0
            })
        },
        closest: function(e, t) {
            var n, r = 0,
                i = this.length,
                o = [],
                a = "string" != typeof e && m(e);
            if (!S.test(e))
                for (; i > r; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && m.find.matchesSelector(n, e))) { o.push(n); break }
            return this.pushStack(o.length > 1 ? m.uniqueSort(o) : o)
        },
        index: function(e) { return e ? "string" == typeof e ? u.call(m(e), this[0]) : u.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1 },
        add: function(e, t) { return this.pushStack(m.uniqueSort(m.merge(this.get(), m(e, t)))) },
        addBack: function(e) { return this.add(null == e ? this.prevObject : this.prevObject.filter(e)) }
    }), m.each({ parent: function(e) { var t = e.parentNode; return t && 11 !== t.nodeType ? t : null }, parents: function(e) { return k(e, "parentNode") }, parentsUntil: function(e, t, n) { return k(e, "parentNode", n) }, next: function(e) { return F(e, "nextSibling") }, prev: function(e) { return F(e, "previousSibling") }, nextAll: function(e) { return k(e, "nextSibling") }, prevAll: function(e) { return k(e, "previousSibling") }, nextUntil: function(e, t, n) { return k(e, "nextSibling", n) }, prevUntil: function(e, t, n) { return k(e, "previousSibling", n) }, siblings: function(e) { return E((e.parentNode || {}).firstChild, e) }, children: function(e) { return E(e.firstChild) }, contents: function(e) { return e.contentDocument || m.merge([], e.childNodes) } }, function(e, t) { m.fn[e] = function(n, r) { var i = m.map(this, t, n); return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = m.filter(r, i)), this.length > 1 && (H[e] || m.uniqueSort(i), L.test(e) && i.reverse()), this.pushStack(i) } });
    var O = /\S+/g;

    function P(e) { return e }

    function R(e) { throw e }

    function M(e, t, n) { var r; try { e && m.isFunction(r = e.promise) ? r.call(e).done(t).fail(n) : e && m.isFunction(r = e.then) ? r.call(e, t, n) : t.call(void 0, e) } catch (e) { n.call(void 0, e) } }
    m.Callbacks = function(e) {
        e = "string" == typeof e ? function(e) { var t = {}; return m.each(e.match(O) || [], function(e, n) { t[n] = !0 }), t }(e) : m.extend({}, e);
        var t, n, r, i, o = [],
            a = [],
            s = -1,
            u = function() {
                for (i = e.once, r = t = !0; a.length; s = -1)
                    for (n = a.shift(); ++s < o.length;) !1 === o[s].apply(n[0], n[1]) && e.stopOnFalse && (s = o.length, n = !1);
                e.memory || (n = !1), t = !1, i && (o = n ? [] : "")
            },
            l = {
                add: function() { return o && (n && !t && (s = o.length - 1, a.push(n)), function t(n) { m.each(n, function(n, r) { m.isFunction(r) ? e.unique && l.has(r) || o.push(r) : r && r.length && "string" !== m.type(r) && t(r) }) }(arguments), n && !t && u()), this },
                remove: function() {
                    return m.each(arguments, function(e, t) {
                        for (var n;
                            (n = m.inArray(t, o, n)) > -1;) o.splice(n, 1), s >= n && s--
                    }), this
                },
                has: function(e) { return e ? m.inArray(e, o) > -1 : o.length > 0 },
                empty: function() { return o && (o = []), this },
                disable: function() { return i = a = [], o = n = "", this },
                disabled: function() { return !o },
                lock: function() { return i = a = [], n || t || (o = n = ""), this },
                locked: function() { return !!i },
                fireWith: function(e, n) { return i || (n = [e, (n = n || []).slice ? n.slice() : n], a.push(n), t || u()), this },
                fire: function() { return l.fireWith(this, arguments), this },
                fired: function() { return !!r }
            };
        return l
    }, m.extend({
        Deferred: function(t) {
            var n = [
                    ["notify", "progress", m.Callbacks("memory"), m.Callbacks("memory"), 2],
                    ["resolve", "done", m.Callbacks("once memory"), m.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", m.Callbacks("once memory"), m.Callbacks("once memory"), 1, "rejected"]
                ],
                r = "pending",
                i = {
                    state: function() { return r },
                    always: function() { return o.done(arguments).fail(arguments), this },
                    catch: function(e) { return i.then(null, e) },
                    pipe: function() {
                        var e = arguments;
                        return m.Deferred(function(t) {
                            m.each(n, function(n, r) {
                                var i = m.isFunction(e[r[4]]) && e[r[4]];
                                o[r[1]](function() {
                                    var e = i && i.apply(this, arguments);
                                    e && m.isFunction(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[r[0] + "With"](this, i ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    then: function(t, r, i) {
                        var o = 0;

                        function a(t, n, r, i) {
                            return function() {
                                var s = this,
                                    u = arguments,
                                    l = function() {
                                        var e, l;
                                        if (!(o > t)) {
                                            if ((e = r.apply(s, u)) === n.promise()) throw new TypeError("Thenable self-resolution");
                                            l = e && ("object" == typeof e || "function" == typeof e) && e.then, m.isFunction(l) ? i ? l.call(e, a(o, n, P, i), a(o, n, R, i)) : (o++, l.call(e, a(o, n, P, i), a(o, n, R, i), a(o, n, P, n.notifyWith))) : (r !== P && (s = void 0, u = [e]), (i || n.resolveWith)(s, u))
                                        }
                                    },
                                    c = i ? l : function() { try { l() } catch (e) { m.Deferred.exceptionHook && m.Deferred.exceptionHook(e, c.stackTrace), t + 1 >= o && (r !== R && (s = void 0, u = [e]), n.rejectWith(s, u)) } };
                                t ? c() : (m.Deferred.getStackHook && (c.stackTrace = m.Deferred.getStackHook()), e.setTimeout(c))
                            }
                        }
                        return m.Deferred(function(e) { n[0][3].add(a(0, e, m.isFunction(i) ? i : P, e.notifyWith)), n[1][3].add(a(0, e, m.isFunction(t) ? t : P)), n[2][3].add(a(0, e, m.isFunction(r) ? r : R)) }).promise()
                    },
                    promise: function(e) { return null != e ? m.extend(e, i) : i }
                },
                o = {};
            return m.each(n, function(e, t) {
                var a = t[2],
                    s = t[5];
                i[t[1]] = a.add, s && a.add(function() { r = s }, n[3 - e][2].disable, n[0][2].lock), a.add(t[3].fire), o[t[0]] = function() { return o[t[0] + "With"](this === o ? void 0 : this, arguments), this }, o[t[0] + "With"] = a.fireWith
            }), i.promise(o), t && t.call(o, o), o
        },
        when: function(e) {
            var t = arguments.length,
                n = t,
                r = Array(n),
                i = o.call(arguments),
                a = m.Deferred(),
                s = function(e) { return function(n) { r[e] = this, i[e] = arguments.length > 1 ? o.call(arguments) : n, --t || a.resolveWith(r, i) } };
            if (1 >= t && (M(e, a.done(s(n)).resolve, a.reject), "pending" === a.state() || m.isFunction(i[n] && i[n].then))) return a.then();
            for (; n--;) M(i[n], s(n), a.reject);
            return a.promise()
        }
    });
    var I = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    m.Deferred.exceptionHook = function(t, n) { e.console && e.console.warn && t && I.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n) };
    var W = m.Deferred();

    function $() { r.removeEventListener("DOMContentLoaded", $), e.removeEventListener("load", $), m.ready() }
    m.fn.ready = function(e) { return W.then(e), this }, m.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) { e ? m.readyWait++ : m.ready(!0) },
        ready: function(e) {
            (!0 === e ? --m.readyWait : m.isReady) || (m.isReady = !0, !0 !== e && --m.readyWait > 0 || W.resolveWith(r, [m]))
        }
    }), m.ready.then = W.then, "complete" === r.readyState || "loading" !== r.readyState && !r.documentElement.doScroll ? e.setTimeout(m.ready) : (r.addEventListener("DOMContentLoaded", $), e.addEventListener("load", $));
    var B = function(e, t, n, r, i, o, a) {
            var s = 0,
                u = e.length,
                l = null == n;
            if ("object" === m.type(n))
                for (s in i = !0, n) B(e, t, s, n[s], !0, o, a);
            else if (void 0 !== r && (i = !0, m.isFunction(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function(e, t, n) { return l.call(m(e), n) })), t))
                for (; u > s; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
            return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
        },
        _ = function(e) { return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType };

    function z() { this.expando = m.expando + z.uid++ }
    z.uid = 1, z.prototype = {
        cache: function(e) { var t = e[this.expando]; return t || (t = {}, _(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, { value: t, configurable: !0 }))), t },
        set: function(e, t, n) {
            var r, i = this.cache(e);
            if ("string" == typeof t) i[m.camelCase(t)] = n;
            else
                for (r in t) i[m.camelCase(r)] = t[r];
            return i
        },
        get: function(e, t) { return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][m.camelCase(t)] },
        access: function(e, t, n) { return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t) },
        remove: function(e, t) { var n, r = e[this.expando]; if (void 0 !== r) { if (void 0 !== t) { m.isArray(t) ? t = t.map(m.camelCase) : t = (t = m.camelCase(t)) in r ? [t] : t.match(O) || [], n = t.length; for (; n--;) delete r[t[n]] }(void 0 === t || m.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]) } },
        hasData: function(e) { var t = e[this.expando]; return void 0 !== t && !m.isEmptyObject(t) }
    };
    var X = new z,
        U = new z,
        V = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        G = /[A-Z]/g;

    function Y(e, t, n) {
        var r;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(G, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(r))) {
                try { n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : V.test(n) ? JSON.parse(n) : n) } catch (e) {}
                U.set(e, t, n)
            } else n = void 0;
        return n
    }
    m.extend({ hasData: function(e) { return U.hasData(e) || X.hasData(e) }, data: function(e, t, n) { return U.access(e, t, n) }, removeData: function(e, t) { U.remove(e, t) }, _data: function(e, t, n) { return X.access(e, t, n) }, _removeData: function(e, t) { X.remove(e, t) } }), m.fn.extend({
        data: function(e, t) {
            var n, r, i, o = this[0],
                a = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (i = U.get(o), 1 === o.nodeType && !X.get(o, "hasDataAttrs"))) {
                    for (n = a.length; n--;) a[n] && (0 === (r = a[n].name).indexOf("data-") && (r = m.camelCase(r.slice(5)), Y(o, r, i[r])));
                    X.set(o, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof e ? this.each(function() { U.set(this, e) }) : B(this, function(t) { var n; if (o && void 0 === t) { if (void 0 !== (n = U.get(o, e))) return n; if (void 0 !== (n = Y(o, e))) return n } else this.each(function() { U.set(this, e, t) }) }, null, t, arguments.length > 1, null, !0)
        },
        removeData: function(e) { return this.each(function() { U.remove(this, e) }) }
    }), m.extend({
        queue: function(e, t, n) { var r; return e ? (t = (t || "fx") + "queue", r = X.get(e, t), n && (!r || m.isArray(n) ? r = X.access(e, t, m.makeArray(n)) : r.push(n)), r || []) : void 0 },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = m.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = m._queueHooks(e, t);
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function() { m.dequeue(e, t) }, o)), !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) { var n = t + "queueHooks"; return X.get(e, n) || X.access(e, n, { empty: m.Callbacks("once memory").add(function() { X.remove(e, [t + "queue", n]) }) }) }
    }), m.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? m.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var n = m.queue(this, e, t);
                m._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && m.dequeue(this, e)
            })
        },
        dequeue: function(e) { return this.each(function() { m.dequeue(this, e) }) },
        clearQueue: function(e) { return this.queue(e || "fx", []) },
        promise: function(e, t) {
            var n, r = 1,
                i = m.Deferred(),
                o = this,
                a = this.length,
                s = function() {--r || i.resolveWith(o, [o]) };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;)(n = X.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
            return s(), i.promise(t)
        }
    });
    var Q = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        J = new RegExp("^(?:([+-])=|)(" + Q + ")([a-z%]*)$", "i"),
        K = ["Top", "Right", "Bottom", "Left"],
        Z = function(e, t) { return "none" === (e = t || e).style.display || "" === e.style.display && m.contains(e.ownerDocument, e) && "none" === m.css(e, "display") },
        ee = function(e, t, n, r) { var i, o, a = {}; for (o in t) a[o] = e.style[o], e.style[o] = t[o]; for (o in i = n.apply(e, r || []), t) e.style[o] = a[o]; return i };

    function te(e, t, n, r) {
        var i, o = 1,
            a = 20,
            s = r ? function() { return r.cur() } : function() { return m.css(e, t, "") },
            u = s(),
            l = n && n[3] || (m.cssNumber[t] ? "" : "px"),
            c = (m.cssNumber[t] || "px" !== l && +u) && J.exec(m.css(e, t));
        if (c && c[3] !== l) {
            l = l || c[3], n = n || [], c = +u || 1;
            do { c /= o = o || ".5", m.style(e, t, c + l) } while (o !== (o = s() / u) && 1 !== o && --a)
        }
        return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i
    }
    var ne = {};

    function re(e) {
        var t, n = e.ownerDocument,
            r = e.nodeName,
            i = ne[r];
        return i || (t = n.body.appendChild(n.createElement(r)), i = m.css(t, "display"), t.parentNode.removeChild(t), "none" === i && (i = "block"), ne[r] = i, i)
    }

    function ie(e, t) { for (var n, r, i = [], o = 0, a = e.length; a > o; o++)(r = e[o]).style && (n = r.style.display, t ? ("none" === n && (i[o] = X.get(r, "display") || null, i[o] || (r.style.display = "")), "" === r.style.display && Z(r) && (i[o] = re(r))) : "none" !== n && (i[o] = "none", X.set(r, "display", n))); for (o = 0; a > o; o++) null != i[o] && (e[o].style.display = i[o]); return e }
    m.fn.extend({ show: function() { return ie(this, !0) }, hide: function() { return ie(this) }, toggle: function(e) { return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() { Z(this) ? m(this).show() : m(this).hide() }) } });
    var oe = /^(?:checkbox|radio)$/i,
        ae = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        se = /^$|\/(?:java|ecma)script/i,
        ue = { option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };

    function le(e, t) { var n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : []; return void 0 === t || t && m.nodeName(e, t) ? m.merge([e], n) : n }

    function ce(e, t) { for (var n = 0, r = e.length; r > n; n++) X.set(e[n], "globalEval", !t || X.get(t[n], "globalEval")) }
    ue.optgroup = ue.option, ue.tbody = ue.tfoot = ue.colgroup = ue.caption = ue.thead, ue.th = ue.td;
    var fe = /<|&#?\w+;/;

    function pe(e, t, n, r, i) {
        for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; h > d; d++)
            if ((o = e[d]) || 0 === o)
                if ("object" === m.type(o)) m.merge(p, o.nodeType ? [o] : o);
                else if (fe.test(o)) {
            for (a = a || f.appendChild(t.createElement("div")), s = (ae.exec(o) || ["", ""])[1].toLowerCase(), u = ue[s] || ue._default, a.innerHTML = u[1] + m.htmlPrefilter(o) + u[2], c = u[0]; c--;) a = a.lastChild;
            m.merge(p, a.childNodes), (a = f.firstChild).textContent = ""
        } else p.push(t.createTextNode(o));
        for (f.textContent = "", d = 0; o = p[d++];)
            if (r && m.inArray(o, r) > -1) i && i.push(o);
            else if (l = m.contains(o.ownerDocument, o), a = le(f.appendChild(o), "script"), l && ce(a), n)
            for (c = 0; o = a[c++];) se.test(o.type || "") && n.push(o);
        return f
    }! function() {
        var e = r.createDocumentFragment().appendChild(r.createElement("div")),
            t = r.createElement("input");
        t.setAttribute("type", "radio"), t.setAttribute("checked", "checked"), t.setAttribute("name", "t"), e.appendChild(t), h.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", h.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
    }();
    var de = r.documentElement,
        he = /^key/,
        ge = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        ve = /^([^.]*)(?:\.(.+)|)/;

    function me() { return !0 }

    function ye() { return !1 }

    function xe() { try { return r.activeElement } catch (e) {} }

    function be(e, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) { for (s in "string" != typeof n && (r = r || n, n = void 0), t) be(e, s, n, r, t[s], o); return e }
        if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = ye;
        else if (!i) return e;
        return 1 === o && (a = i, (i = function(e) { return m().off(e), a.apply(this, arguments) }).guid = a.guid || (a.guid = m.guid++)), e.each(function() { m.event.add(this, t, i, r, n) })
    }
    m.event = {
        global: {},
        add: function(e, t, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, v = X.get(e);
            if (v)
                for (n.handler && (n = (o = n).handler, i = o.selector), i && m.find.matchesSelector(de, i), n.guid || (n.guid = m.guid++), (u = v.events) || (u = v.events = {}), (a = v.handle) || (a = v.handle = function(t) { return void 0 !== m && m.event.triggered !== t.type ? m.event.dispatch.apply(e, arguments) : void 0 }), l = (t = (t || "").match(O) || [""]).length; l--;) d = g = (s = ve.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = m.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = m.event.special[d] || {}, c = m.extend({ type: d, origType: g, data: r, handler: n, guid: n.guid, selector: i, needsContext: i && m.expr.match.needsContext.test(i), namespace: h.join(".") }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(e, r, h, a) || e.addEventListener && e.addEventListener(d, a)), f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), m.event.global[d] = !0)
        },
        remove: function(e, t, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, v = X.hasData(e) && X.get(e);
            if (v && (u = v.events)) {
                for (l = (t = (t || "").match(O) || [""]).length; l--;)
                    if (d = g = (s = ve.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d) {
                        for (f = m.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length; o--;) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
                        a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || m.removeEvent(e, d, v.handle), delete u[d])
                    } else
                        for (d in u) m.event.remove(e, d + t[l], n, r, !0);
                m.isEmptyObject(u) && X.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, n, r, i, o, a, s = m.event.fix(e),
                u = new Array(arguments.length),
                l = (X.get(this, "events") || {})[s.type] || [],
                c = m.event.special[s.type] || {};
            for (u[0] = s, t = 1; t < arguments.length; t++) u[t] = arguments[t];
            if (s.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, s)) {
                for (a = m.event.handlers.call(this, s, l), t = 0;
                    (i = a[t++]) && !s.isPropagationStopped();)
                    for (s.currentTarget = i.elem, n = 0;
                        (o = i.handlers[n++]) && !s.isImmediatePropagationStopped();) s.rnamespace && !s.rnamespace.test(o.namespace) || (s.handleObj = o, s.data = o.data, void 0 !== (r = ((m.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, u)) && !1 === (s.result = r) && (s.preventDefault(), s.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, s), s.result
            }
        },
        handlers: function(e, t) {
            var n, r, i, o, a = [],
                s = t.delegateCount,
                u = e.target;
            if (s && u.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1))
                for (; u !== this; u = u.parentNode || this)
                    if (1 === u.nodeType && (!0 !== u.disabled || "click" !== e.type)) {
                        for (r = [], n = 0; s > n; n++) void 0 === r[i = (o = t[n]).selector + " "] && (r[i] = o.needsContext ? m(i, this).index(u) > -1 : m.find(i, this, null, [u]).length), r[i] && r.push(o);
                        r.length && a.push({ elem: u, handlers: r })
                    }
            return s < t.length && a.push({ elem: this, handlers: t.slice(s) }), a
        },
        addProp: function(e, t) { Object.defineProperty(m.Event.prototype, e, { enumerable: !0, configurable: !0, get: m.isFunction(t) ? function() { return this.originalEvent ? t(this.originalEvent) : void 0 } : function() { return this.originalEvent ? this.originalEvent[e] : void 0 }, set: function(t) { Object.defineProperty(this, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) } }) },
        fix: function(e) { return e[m.expando] ? e : new m.Event(e) },
        special: { load: { noBubble: !0 }, focus: { trigger: function() { return this !== xe() && this.focus ? (this.focus(), !1) : void 0 }, delegateType: "focusin" }, blur: { trigger: function() { return this === xe() && this.blur ? (this.blur(), !1) : void 0 }, delegateType: "focusout" }, click: { trigger: function() { return "checkbox" === this.type && this.click && m.nodeName(this, "input") ? (this.click(), !1) : void 0 }, _default: function(e) { return m.nodeName(e.target, "a") } }, beforeunload: { postDispatch: function(e) { void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result) } } }
    }, m.removeEvent = function(e, t, n) { e.removeEventListener && e.removeEventListener(t, n) }, m.Event = function(e, t) { return this instanceof m.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? me : ye, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && m.extend(this, t), this.timeStamp = e && e.timeStamp || m.now(), void(this[m.expando] = !0)) : new m.Event(e, t) }, m.Event.prototype = {
        constructor: m.Event,
        isDefaultPrevented: ye,
        isPropagationStopped: ye,
        isImmediatePropagationStopped: ye,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = me, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = me, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = me, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, m.each({ altKey: !0, bubbles: !0, cancelable: !0, changedTouches: !0, ctrlKey: !0, detail: !0, eventPhase: !0, metaKey: !0, pageX: !0, pageY: !0, shiftKey: !0, view: !0, char: !0, charCode: !0, key: !0, keyCode: !0, button: !0, buttons: !0, clientX: !0, clientY: !0, offsetX: !0, offsetY: !0, pointerId: !0, pointerType: !0, screenX: !0, screenY: !0, targetTouches: !0, toElement: !0, touches: !0, which: function(e) { var t = e.button; return null == e.which && he.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && ge.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which } }, m.event.addProp), m.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function(e, t) {
        m.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, r = e.relatedTarget,
                    i = e.handleObj;
                return r && (r === this || m.contains(this, r)) || (e.type = i.origType, n = i.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), m.fn.extend({ on: function(e, t, n, r) { return be(this, e, t, n, r) }, one: function(e, t, n, r) { return be(this, e, t, n, r, 1) }, off: function(e, t, n) { var r, i; if (e && e.preventDefault && e.handleObj) return r = e.handleObj, m(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this; if ("object" == typeof e) { for (i in e) this.off(i, t, e[i]); return this } return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = ye), this.each(function() { m.event.remove(this, e, n, t) }) } });
    var we = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        Te = /<script|<style|<link/i,
        Ce = /checked\s*(?:[^=]|=\s*.checked.)/i,
        ke = /^true\/(.*)/,
        Ee = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function Se(e, t) { return m.nodeName(e, "table") && m.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") && e.getElementsByTagName("tbody")[0] || e }

    function Ne(e) { return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e }

    function De(e) { var t = ke.exec(e.type); return t ? e.type = t[1] : e.removeAttribute("type"), e }

    function je(e, t) {
        var n, r, i, o, a, s, u, l;
        if (1 === t.nodeType) {
            if (X.hasData(e) && (o = X.access(e), a = X.set(t, o), l = o.events))
                for (i in delete a.handle, a.events = {}, l)
                    for (n = 0, r = l[i].length; r > n; n++) m.event.add(t, i, l[i][n]);
            U.hasData(e) && (s = U.access(e), u = m.extend({}, s), U.set(t, u))
        }
    }

    function Ae(e, t) { var n = t.nodeName.toLowerCase(); "input" === n && oe.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue) }

    function qe(e, t, n, r) {
        t = a.apply([], t);
        var i, o, s, u, l, c, f = 0,
            p = e.length,
            d = p - 1,
            v = t[0],
            y = m.isFunction(v);
        if (y || p > 1 && "string" == typeof v && !h.checkClone && Ce.test(v)) return e.each(function(i) {
            var o = e.eq(i);
            y && (t[0] = v.call(this, i, o.html())), qe(o, t, n, r)
        });
        if (p && (o = (i = pe(t, e[0].ownerDocument, !1, e, r)).firstChild, 1 === i.childNodes.length && (i = o), o || r)) {
            for (u = (s = m.map(le(i, "script"), Ne)).length; p > f; f++) l = i, f !== d && (l = m.clone(l, !0, !0), u && m.merge(s, le(l, "script"))), n.call(e[f], l, f);
            if (u)
                for (c = s[s.length - 1].ownerDocument, m.map(s, De), f = 0; u > f; f++) l = s[f], se.test(l.type || "") && !X.access(l, "globalEval") && m.contains(c, l) && (l.src ? m._evalUrl && m._evalUrl(l.src) : g(l.textContent.replace(Ee, ""), c))
        }
        return e
    }

    function Le(e, t, n) { for (var r, i = t ? m.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || m.cleanData(le(r)), r.parentNode && (n && m.contains(r.ownerDocument, r) && ce(le(r, "script")), r.parentNode.removeChild(r)); return e }
    m.extend({
        htmlPrefilter: function(e) { return e.replace(we, "<$1></$2>") },
        clone: function(e, t, n) {
            var r, i, o, a, s = e.cloneNode(!0),
                u = m.contains(e.ownerDocument, e);
            if (!(h.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || m.isXMLDoc(e)))
                for (a = le(s), r = 0, i = (o = le(e)).length; i > r; r++) Ae(o[r], a[r]);
            if (t)
                if (n)
                    for (o = o || le(e), a = a || le(s), r = 0, i = o.length; i > r; r++) je(o[r], a[r]);
                else je(e, s);
            return (a = le(s, "script")).length > 0 && ce(a, !u && le(e, "script")), s
        },
        cleanData: function(e) {
            for (var t, n, r, i = m.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (_(n)) {
                    if (t = n[X.expando]) {
                        if (t.events)
                            for (r in t.events) i[r] ? m.event.remove(n, r) : m.removeEvent(n, r, t.handle);
                        n[X.expando] = void 0
                    }
                    n[U.expando] && (n[U.expando] = void 0)
                }
        }
    }), m.fn.extend({
        detach: function(e) { return Le(this, e, !0) },
        remove: function(e) { return Le(this, e) },
        text: function(e) { return B(this, function(e) { return void 0 === e ? m.text(this) : this.empty().each(function() { 1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e) }) }, null, e, arguments.length) },
        append: function() { return qe(this, arguments, function(e) { 1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Se(this, e).appendChild(e) }) },
        prepend: function() {
            return qe(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Se(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() { return qe(this, arguments, function(e) { this.parentNode && this.parentNode.insertBefore(e, this) }) },
        after: function() { return qe(this, arguments, function(e) { this.parentNode && this.parentNode.insertBefore(e, this.nextSibling) }) },
        empty: function() { for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (m.cleanData(le(e, !1)), e.textContent = ""); return this },
        clone: function(e, t) { return e = null != e && e, t = null == t ? e : t, this.map(function() { return m.clone(this, e, t) }) },
        html: function(e) {
            return B(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    r = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !Te.test(e) && !ue[(ae.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = m.htmlPrefilter(e);
                    try {
                        for (; r > n; n++) 1 === (t = this[n] || {}).nodeType && (m.cleanData(le(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = [];
            return qe(this, arguments, function(t) {
                var n = this.parentNode;
                m.inArray(this, e) < 0 && (m.cleanData(le(this)), n && n.replaceChild(t, this))
            }, e)
        }
    }), m.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function(e, t) { m.fn[e] = function(e) { for (var n, r = [], i = m(e), o = i.length - 1, a = 0; o >= a; a++) n = a === o ? this : this.clone(!0), m(i[a])[t](n), s.apply(r, n.get()); return this.pushStack(r) } });
    var He = /^margin/,
        Fe = new RegExp("^(" + Q + ")(?!px)[a-z%]+$", "i"),
        Oe = function(t) { var n = t.ownerDocument.defaultView; return n && n.opener || (n = e), n.getComputedStyle(t) };

    function Pe(e, t, n) { var r, i, o, a, s = e.style; return (n = n || Oe(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || m.contains(e.ownerDocument, e) || (a = m.style(e, t)), !h.pixelMarginRight() && Fe.test(a) && He.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a }

    function Re(e, t) { return { get: function() { return e() ? void delete this.get : (this.get = t).apply(this, arguments) } } }! function() {
        function t() {
            if (u) {
                u.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", u.innerHTML = "", de.appendChild(s);
                var t = e.getComputedStyle(u);
                n = "1%" !== t.top, a = "2px" === t.marginLeft, i = "4px" === t.width, u.style.marginRight = "50%", o = "4px" === t.marginRight, de.removeChild(s), u = null
            }
        }
        var n, i, o, a, s = r.createElement("div"),
            u = r.createElement("div");
        u.style && (u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", h.clearCloneStyle = "content-box" === u.style.backgroundClip, s.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", s.appendChild(u), m.extend(h, { pixelPosition: function() { return t(), n }, boxSizingReliable: function() { return t(), i }, pixelMarginRight: function() { return t(), o }, reliableMarginLeft: function() { return t(), a } }))
    }();
    var Me = /^(none|table(?!-c[ea]).+)/,
        Ie = { position: "absolute", visibility: "hidden", display: "block" },
        We = { letterSpacing: "0", fontWeight: "400" },
        $e = ["Webkit", "Moz", "ms"],
        Be = r.createElement("div").style;

    function _e(e) {
        if (e in Be) return e;
        for (var t = e[0].toUpperCase() + e.slice(1), n = $e.length; n--;)
            if ((e = $e[n] + t) in Be) return e
    }

    function ze(e, t, n) { var r = J.exec(t); return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t }

    function Xe(e, t, n, r, i) { for (var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; 4 > o; o += 2) "margin" === n && (a += m.css(e, n + K[o], !0, i)), r ? ("content" === n && (a -= m.css(e, "padding" + K[o], !0, i)), "margin" !== n && (a -= m.css(e, "border" + K[o] + "Width", !0, i))) : (a += m.css(e, "padding" + K[o], !0, i), "padding" !== n && (a += m.css(e, "border" + K[o] + "Width", !0, i))); return a }

    function Ue(e, t, n) {
        var r, i = !0,
            o = Oe(e),
            a = "border-box" === m.css(e, "boxSizing", !1, o);
        if (e.getClientRects().length && (r = e.getBoundingClientRect()[t]), 0 >= r || null == r) {
            if ((0 > (r = Pe(e, t, o)) || null == r) && (r = e.style[t]), Fe.test(r)) return r;
            i = a && (h.boxSizingReliable() || r === e.style[t]), r = parseFloat(r) || 0
        }
        return r + Xe(e, t, n || (a ? "border" : "content"), i, o) + "px"
    }

    function Ve(e, t, n, r, i) { return new Ve.prototype.init(e, t, n, r, i) }
    m.extend({
        cssHooks: { opacity: { get: function(e, t) { if (t) { var n = Pe(e, "opacity"); return "" === n ? "1" : n } } } },
        cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 },
        cssProps: { float: "cssFloat" },
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = m.camelCase(t),
                    u = e.style;
                return t = m.cssProps[s] || (m.cssProps[s] = _e(s) || s), a = m.cssHooks[t] || m.cssHooks[s], void 0 === n ? a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : u[t] : ("string" === (o = typeof n) && (i = J.exec(n)) && i[1] && (n = te(e, t, i), o = "number"), void(null != n && n == n && ("number" === o && (n += i && i[3] || (m.cssNumber[s] ? "" : "px")), h.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u[t] = n))))
            }
        },
        css: function(e, t, n, r) { var i, o, a, s = m.camelCase(t); return t = m.cssProps[s] || (m.cssProps[s] = _e(s) || s), (a = m.cssHooks[t] || m.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = Pe(e, t, r)), "normal" === i && t in We && (i = We[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i }
    }), m.each(["height", "width"], function(e, t) {
        m.cssHooks[t] = {
            get: function(e, n, r) { return n ? !Me.test(m.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Ue(e, t, r) : ee(e, Ie, function() { return Ue(e, t, r) }) : void 0 },
            set: function(e, n, r) {
                var i, o = r && Oe(e),
                    a = r && Xe(e, t, r, "border-box" === m.css(e, "boxSizing", !1, o), o);
                return a && (i = J.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n, n = m.css(e, t)), ze(0, n, a)
            }
        }
    }), m.cssHooks.marginLeft = Re(h.reliableMarginLeft, function(e, t) { return t ? (parseFloat(Pe(e, "marginLeft")) || e.getBoundingClientRect().left - ee(e, { marginLeft: 0 }, function() { return e.getBoundingClientRect().left })) + "px" : void 0 }), m.each({ margin: "", padding: "", border: "Width" }, function(e, t) { m.cssHooks[e + t] = { expand: function(n) { for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++) i[e + K[r] + t] = o[r] || o[r - 2] || o[0]; return i } }, He.test(e) || (m.cssHooks[e + t].set = ze) }), m.fn.extend({
        css: function(e, t) {
            return B(this, function(e, t, n) {
                var r, i, o = {},
                    a = 0;
                if (m.isArray(t)) { for (r = Oe(e), i = t.length; i > a; a++) o[t[a]] = m.css(e, t[a], !1, r); return o }
                return void 0 !== n ? m.style(e, t, n) : m.css(e, t)
            }, e, t, arguments.length > 1)
        }
    }), m.Tween = Ve, Ve.prototype = { constructor: Ve, init: function(e, t, n, r, i, o) { this.elem = e, this.prop = n, this.easing = i || m.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (m.cssNumber[n] ? "" : "px") }, cur: function() { var e = Ve.propHooks[this.prop]; return e && e.get ? e.get(this) : Ve.propHooks._default.get(this) }, run: function(e) { var t, n = Ve.propHooks[this.prop]; return this.options.duration ? this.pos = t = m.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Ve.propHooks._default.set(this), this } }, Ve.prototype.init.prototype = Ve.prototype, Ve.propHooks = { _default: { get: function(e) { var t; return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = m.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0 }, set: function(e) { m.fx.step[e.prop] ? m.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[m.cssProps[e.prop]] && !m.cssHooks[e.prop] ? e.elem[e.prop] = e.now : m.style(e.elem, e.prop, e.now + e.unit) } } }, Ve.propHooks.scrollTop = Ve.propHooks.scrollLeft = { set: function(e) { e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now) } }, m.easing = { linear: function(e) { return e }, swing: function(e) { return .5 - Math.cos(e * Math.PI) / 2 }, _default: "swing" }, m.fx = Ve.prototype.init, m.fx.step = {};
    var Ge, Ye, Qe = /^(?:toggle|show|hide)$/,
        Je = /queueHooks$/;

    function Ke() { Ye && (e.requestAnimationFrame(Ke), m.fx.tick()) }

    function Ze() { return e.setTimeout(function() { Ge = void 0 }), Ge = m.now() }

    function et(e, t) {
        var n, r = 0,
            i = { height: e };
        for (t = t ? 1 : 0; 4 > r; r += 2 - t) i["margin" + (n = K[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i
    }

    function tt(e, t, n) {
        for (var r, i = (nt.tweeners[t] || []).concat(nt.tweeners["*"]), o = 0, a = i.length; a > o; o++)
            if (r = i[o].call(n, t, e)) return r
    }

    function nt(e, t, n) {
        var r, i, o = 0,
            a = nt.prefilters.length,
            s = m.Deferred().always(function() { delete u.elem }),
            u = function() { if (i) return !1; for (var t = Ge || Ze(), n = Math.max(0, l.startTime + l.duration - t), r = 1 - (n / l.duration || 0), o = 0, a = l.tweens.length; a > o; o++) l.tweens[o].run(r); return s.notifyWith(e, [l, r, n]), 1 > r && a ? n : (s.resolveWith(e, [l]), !1) },
            l = s.promise({
                elem: e,
                props: m.extend({}, t),
                opts: m.extend(!0, { specialEasing: {}, easing: m.easing._default }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: Ge || Ze(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) { var r = m.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing); return l.tweens.push(r), r },
                stop: function(t) {
                    var n = 0,
                        r = t ? l.tweens.length : 0;
                    if (i) return this;
                    for (i = !0; r > n; n++) l.tweens[n].run(1);
                    return t ? (s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l, t])) : s.rejectWith(e, [l, t]), this
                }
            }),
            c = l.props;
        for (function(e, t) {
                var n, r, i, o, a;
                for (n in e)
                    if (i = t[r = m.camelCase(n)], o = e[n], m.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = m.cssHooks[r]) && "expand" in a)
                        for (n in o = a.expand(o), delete e[r], o) n in e || (e[n] = o[n], t[n] = i);
                    else t[r] = i
            }(c, l.opts.specialEasing); a > o; o++)
            if (r = nt.prefilters[o].call(l, e, c, l.opts)) return m.isFunction(r.stop) && (m._queueHooks(l.elem, l.opts.queue).stop = m.proxy(r.stop, r)), r;
        return m.map(c, tt, l), m.isFunction(l.opts.start) && l.opts.start.call(e, l), m.fx.timer(m.extend(u, { elem: e, anim: l, queue: l.opts.queue })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
    }
    m.Animation = m.extend(nt, {
            tweeners: { "*": [function(e, t) { var n = this.createTween(e, t); return te(n.elem, e, J.exec(t), n), n }] },
            tweener: function(e, t) { m.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(O); for (var n, r = 0, i = e.length; i > r; r++) n = e[r], nt.tweeners[n] = nt.tweeners[n] || [], nt.tweeners[n].unshift(t) },
            prefilters: [function(e, t, n) {
                var r, i, o, a, s, u, l, c, f = "width" in t || "height" in t,
                    p = this,
                    d = {},
                    h = e.style,
                    g = e.nodeType && Z(e),
                    v = X.get(e, "fxshow");
                for (r in n.queue || (null == (a = m._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function() { a.unqueued || s() }), a.unqueued++, p.always(function() { p.always(function() { a.unqueued--, m.queue(e, "fx").length || a.empty.fire() }) })), t)
                    if (i = t[r], Qe.test(i)) {
                        if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
                            if ("show" !== i || !v || void 0 === v[r]) continue;
                            g = !0
                        }
                        d[r] = v && v[r] || m.style(e, r)
                    }
                if ((u = !m.isEmptyObject(t)) || !m.isEmptyObject(d))
                    for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = v && v.display) && (l = X.get(e, "display")), "none" === (c = m.css(e, "display")) && (l ? c = l : (ie([e], !0), l = e.style.display || l, c = m.css(e, "display"), ie([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === m.css(e, "float") && (u || (p.done(function() { h.display = l }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function() { h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2] })), u = !1, d) u || (v ? "hidden" in v && (g = v.hidden) : v = X.access(e, "fxshow", { display: l }), o && (v.hidden = !g), g && ie([e], !0), p.done(function() { for (r in g || ie([e]), X.remove(e, "fxshow"), d) m.style(e, r, d[r]) })), u = tt(g ? v[r] : 0, r, p), r in v || (v[r] = u.start, g && (u.end = u.start, u.start = 0))
            }],
            prefilter: function(e, t) { t ? nt.prefilters.unshift(e) : nt.prefilters.push(e) }
        }), m.speed = function(e, t, n) { var i = e && "object" == typeof e ? m.extend({}, e) : { complete: n || !n && t || m.isFunction(e) && e, duration: e, easing: n && t || t && !m.isFunction(t) && t }; return m.fx.off || r.hidden ? i.duration = 0 : i.duration = "number" == typeof i.duration ? i.duration : i.duration in m.fx.speeds ? m.fx.speeds[i.duration] : m.fx.speeds._default, null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function() { m.isFunction(i.old) && i.old.call(this), i.queue && m.dequeue(this, i.queue) }, i }, m.fn.extend({
            fadeTo: function(e, t, n, r) { return this.filter(Z).css("opacity", 0).show().end().animate({ opacity: t }, e, n, r) },
            animate: function(e, t, n, r) {
                var i = m.isEmptyObject(e),
                    o = m.speed(t, n, r),
                    a = function() {
                        var t = nt(this, m.extend({}, e), o);
                        (i || X.get(this, "finish")) && t.stop(!0)
                    };
                return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
            },
            stop: function(e, t, n) {
                var r = function(e) {
                    var t = e.stop;
                    delete e.stop, t(n)
                };
                return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function() {
                    var t = !0,
                        i = null != e && e + "queueHooks",
                        o = m.timers,
                        a = X.get(this);
                    if (i) a[i] && a[i].stop && r(a[i]);
                    else
                        for (i in a) a[i] && a[i].stop && Je.test(i) && r(a[i]);
                    for (i = o.length; i--;) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
                    !t && n || m.dequeue(this, e)
                })
            },
            finish: function(e) {
                return !1 !== e && (e = e || "fx"), this.each(function() {
                    var t, n = X.get(this),
                        r = n[e + "queue"],
                        i = n[e + "queueHooks"],
                        o = m.timers,
                        a = r ? r.length : 0;
                    for (n.finish = !0, m.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                    for (t = 0; a > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
                    delete n.finish
                })
            }
        }), m.each(["toggle", "show", "hide"], function(e, t) {
            var n = m.fn[t];
            m.fn[t] = function(e, r, i) { return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(et(t, !0), e, r, i) }
        }), m.each({ slideDown: et("show"), slideUp: et("hide"), slideToggle: et("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function(e, t) { m.fn[e] = function(e, n, r) { return this.animate(t, e, n, r) } }), m.timers = [], m.fx.tick = function() {
            var e, t = 0,
                n = m.timers;
            for (Ge = m.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
            n.length || m.fx.stop(), Ge = void 0
        }, m.fx.timer = function(e) { m.timers.push(e), e() ? m.fx.start() : m.timers.pop() }, m.fx.interval = 13, m.fx.start = function() { Ye || (Ye = e.requestAnimationFrame ? e.requestAnimationFrame(Ke) : e.setInterval(m.fx.tick, m.fx.interval)) }, m.fx.stop = function() { e.cancelAnimationFrame ? e.cancelAnimationFrame(Ye) : e.clearInterval(Ye), Ye = null }, m.fx.speeds = { slow: 600, fast: 200, _default: 400 }, m.fn.delay = function(t, n) {
            return t = m.fx && m.fx.speeds[t] || t, n = n || "fx", this.queue(n, function(n, r) {
                var i = e.setTimeout(n, t);
                r.stop = function() { e.clearTimeout(i) }
            })
        },
        function() {
            var e = r.createElement("input"),
                t = r.createElement("select").appendChild(r.createElement("option"));
            e.type = "checkbox", h.checkOn = "" !== e.value, h.optSelected = t.selected, (e = r.createElement("input")).value = "t", e.type = "radio", h.radioValue = "t" === e.value
        }();
    var rt, it = m.expr.attrHandle;
    m.fn.extend({ attr: function(e, t) { return B(this, m.attr, e, t, arguments.length > 1) }, removeAttr: function(e) { return this.each(function() { m.removeAttr(this, e) }) } }), m.extend({
        attr: function(e, t, n) { var r, i, o = e.nodeType; if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? m.prop(e, t, n) : (1 === o && m.isXMLDoc(e) || (i = m.attrHooks[t.toLowerCase()] || (m.expr.match.bool.test(t) ? rt : void 0)), void 0 !== n ? null === n ? void m.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = m.find.attr(e, t)) ? void 0 : r) },
        attrHooks: { type: { set: function(e, t) { if (!h.radioValue && "radio" === t && m.nodeName(e, "input")) { var n = e.value; return e.setAttribute("type", t), n && (e.value = n), t } } } },
        removeAttr: function(e, t) {
            var n, r = 0,
                i = t && t.match(O);
            if (i && 1 === e.nodeType)
                for (; n = i[r++];) e.removeAttribute(n)
        }
    }), rt = { set: function(e, t, n) { return !1 === t ? m.removeAttr(e, n) : e.setAttribute(n, n), n } }, m.each(m.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = it[t] || m.find.attr;
        it[t] = function(e, t, r) { var i, o, a = t.toLowerCase(); return r || (o = it[a], it[a] = i, i = null != n(e, t, r) ? a : null, it[a] = o), i }
    });
    var ot = /^(?:input|select|textarea|button)$/i,
        at = /^(?:a|area)$/i;
    m.fn.extend({ prop: function(e, t) { return B(this, m.prop, e, t, arguments.length > 1) }, removeProp: function(e) { return this.each(function() { delete this[m.propFix[e] || e] }) } }), m.extend({ prop: function(e, t, n) { var r, i, o = e.nodeType; if (3 !== o && 8 !== o && 2 !== o) return 1 === o && m.isXMLDoc(e) || (t = m.propFix[t] || t, i = m.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t] }, propHooks: { tabIndex: { get: function(e) { var t = m.find.attr(e, "tabindex"); return t ? parseInt(t, 10) : ot.test(e.nodeName) || at.test(e.nodeName) && e.href ? 0 : -1 } } }, propFix: { for: "htmlFor", class: "className" } }), h.optSelected || (m.propHooks.selected = {
        get: function(e) { var t = e.parentNode; return t && t.parentNode && t.parentNode.selectedIndex, null },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), m.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() { m.propFix[this.toLowerCase()] = this });
    var st = /[\t\r\n\f]/g;

    function ut(e) { return e.getAttribute && e.getAttribute("class") || "" }
    m.fn.extend({
        addClass: function(e) {
            var t, n, r, i, o, a, s, u = 0;
            if (m.isFunction(e)) return this.each(function(t) { m(this).addClass(e.call(this, t, ut(this))) });
            if ("string" == typeof e && e)
                for (t = e.match(O) || []; n = this[u++];)
                    if (i = ut(n), r = 1 === n.nodeType && (" " + i + " ").replace(st, " ")) {
                        for (a = 0; o = t[a++];) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                        i !== (s = m.trim(r)) && n.setAttribute("class", s)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, r, i, o, a, s, u = 0;
            if (m.isFunction(e)) return this.each(function(t) { m(this).removeClass(e.call(this, t, ut(this))) });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof e && e)
                for (t = e.match(O) || []; n = this[u++];)
                    if (i = ut(n), r = 1 === n.nodeType && (" " + i + " ").replace(st, " ")) {
                        for (a = 0; o = t[a++];)
                            for (; r.indexOf(" " + o + " ") > -1;) r = r.replace(" " + o + " ", " ");
                        i !== (s = m.trim(r)) && n.setAttribute("class", s)
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : m.isFunction(e) ? this.each(function(n) { m(this).toggleClass(e.call(this, n, ut(this), t), t) }) : this.each(function() {
                var t, r, i, o;
                if ("string" === n)
                    for (r = 0, i = m(this), o = e.match(O) || []; t = o[r++];) i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                else void 0 !== e && "boolean" !== n || ((t = ut(this)) && X.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : X.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, n, r = 0;
            for (t = " " + e + " "; n = this[r++];)
                if (1 === n.nodeType && (" " + ut(n) + " ").replace(st, " ").indexOf(t) > -1) return !0;
            return !1
        }
    });
    var lt = /\r/g,
        ct = /[\x20\t\r\n\f]+/g;
    m.fn.extend({
        val: function(e) {
            var t, n, r, i = this[0];
            return arguments.length ? (r = m.isFunction(e), this.each(function(n) {
                var i;
                1 === this.nodeType && (null == (i = r ? e.call(this, n, m(this).val()) : e) ? i = "" : "number" == typeof i ? i += "" : m.isArray(i) && (i = m.map(i, function(e) { return null == e ? "" : e + "" })), (t = m.valHooks[this.type] || m.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
            })) : i ? (t = m.valHooks[i.type] || m.valHooks[i.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : "string" == typeof(n = i.value) ? n.replace(lt, "") : null == n ? "" : n : void 0
        }
    }), m.extend({
        valHooks: {
            option: { get: function(e) { var t = m.find.attr(e, "value"); return null != t ? t : m.trim(m.text(e)).replace(ct, " ") } },
            select: {
                get: function(e) {
                    for (var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type, a = o ? null : [], s = o ? i + 1 : r.length, u = 0 > i ? s : o ? i : 0; s > u; u++)
                        if (((n = r[u]).selected || u === i) && !n.disabled && (!n.parentNode.disabled || !m.nodeName(n.parentNode, "optgroup"))) {
                            if (t = m(n).val(), o) return t;
                            a.push(t)
                        }
                    return a
                },
                set: function(e, t) { for (var n, r, i = e.options, o = m.makeArray(t), a = i.length; a--;)((r = i[a]).selected = m.inArray(m.valHooks.option.get(r), o) > -1) && (n = !0); return n || (e.selectedIndex = -1), o }
            }
        }
    }), m.each(["radio", "checkbox"], function() { m.valHooks[this] = { set: function(e, t) { return m.isArray(t) ? e.checked = m.inArray(m(e).val(), t) > -1 : void 0 } }, h.checkOn || (m.valHooks[this].get = function(e) { return null === e.getAttribute("value") ? "on" : e.value }) });
    var ft = /^(?:focusinfocus|focusoutblur)$/;
    m.extend(m.event, {
        trigger: function(t, n, i, o) {
            var a, s, u, l, c, p, d, h = [i || r],
                g = f.call(t, "type") ? t.type : t,
                v = f.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = u = i = i || r, 3 !== i.nodeType && 8 !== i.nodeType && !ft.test(g + m.event.triggered) && (g.indexOf(".") > -1 && (v = g.split("."), g = v.shift(), v.sort()), c = g.indexOf(":") < 0 && "on" + g, (t = t[m.expando] ? t : new m.Event(g, "object" == typeof t && t)).isTrigger = o ? 2 : 3, t.namespace = v.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : m.makeArray(n, [t]), d = m.event.special[g] || {}, o || !d.trigger || !1 !== d.trigger.apply(i, n))) {
                if (!o && !d.noBubble && !m.isWindow(i)) {
                    for (l = d.delegateType || g, ft.test(l + g) || (s = s.parentNode); s; s = s.parentNode) h.push(s), u = s;
                    u === (i.ownerDocument || r) && h.push(u.defaultView || u.parentWindow || e)
                }
                for (a = 0;
                    (s = h[a++]) && !t.isPropagationStopped();) t.type = a > 1 ? l : d.bindType || g, (p = (X.get(s, "events") || {})[t.type] && X.get(s, "handle")) && p.apply(s, n), (p = c && s[c]) && p.apply && _(s) && (t.result = p.apply(s, n), !1 === t.result && t.preventDefault());
                return t.type = g, o || t.isDefaultPrevented() || d._default && !1 !== d._default.apply(h.pop(), n) || !_(i) || c && m.isFunction(i[g]) && !m.isWindow(i) && ((u = i[c]) && (i[c] = null), m.event.triggered = g, i[g](), m.event.triggered = void 0, u && (i[c] = u)), t.result
            }
        },
        simulate: function(e, t, n) {
            var r = m.extend(new m.Event, n, { type: e, isSimulated: !0 });
            m.event.trigger(r, null, t)
        }
    }), m.fn.extend({ trigger: function(e, t) { return this.each(function() { m.event.trigger(e, t, this) }) }, triggerHandler: function(e, t) { var n = this[0]; return n ? m.event.trigger(e, t, n, !0) : void 0 } }), m.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) { m.fn[t] = function(e, n) { return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t) } }), m.fn.extend({ hover: function(e, t) { return this.mouseenter(e).mouseleave(t || e) } }), h.focusin = "onfocusin" in e, h.focusin || m.each({ focus: "focusin", blur: "focusout" }, function(e, t) {
        var n = function(e) { m.event.simulate(t, e.target, m.event.fix(e)) };
        m.event.special[t] = {
            setup: function() {
                var r = this.ownerDocument || this,
                    i = X.access(r, t);
                i || r.addEventListener(e, n, !0), X.access(r, t, (i || 0) + 1)
            },
            teardown: function() {
                var r = this.ownerDocument || this,
                    i = X.access(r, t) - 1;
                i ? X.access(r, t, i) : (r.removeEventListener(e, n, !0), X.remove(r, t))
            }
        }
    });
    var pt = e.location,
        dt = m.now(),
        ht = /\?/;
    m.parseXML = function(t) { var n; if (!t || "string" != typeof t) return null; try { n = (new e.DOMParser).parseFromString(t, "text/xml") } catch (e) { n = void 0 } return n && !n.getElementsByTagName("parsererror").length || m.error("Invalid XML: " + t), n };
    var gt = /\[\]$/,
        vt = /\r?\n/g,
        mt = /^(?:submit|button|image|reset|file)$/i,
        yt = /^(?:input|select|textarea|keygen)/i;

    function xt(e, t, n, r) {
        var i;
        if (m.isArray(t)) m.each(t, function(t, i) { n || gt.test(e) ? r(e, i) : xt(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r) });
        else if (n || "object" !== m.type(t)) r(e, t);
        else
            for (i in t) xt(e + "[" + i + "]", t[i], n, r)
    }
    m.param = function(e, t) {
        var n, r = [],
            i = function(e, t) {
                var n = m.isFunction(t) ? t() : t;
                r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
            };
        if (m.isArray(e) || e.jquery && !m.isPlainObject(e)) m.each(e, function() { i(this.name, this.value) });
        else
            for (n in e) xt(n, e[n], t, i);
        return r.join("&")
    }, m.fn.extend({ serialize: function() { return m.param(this.serializeArray()) }, serializeArray: function() { return this.map(function() { var e = m.prop(this, "elements"); return e ? m.makeArray(e) : this }).filter(function() { var e = this.type; return this.name && !m(this).is(":disabled") && yt.test(this.nodeName) && !mt.test(e) && (this.checked || !oe.test(e)) }).map(function(e, t) { var n = m(this).val(); return null == n ? null : m.isArray(n) ? m.map(n, function(e) { return { name: t.name, value: e.replace(vt, "\r\n") } }) : { name: t.name, value: n.replace(vt, "\r\n") } }).get() } });
    var bt = /%20/g,
        wt = /#.*$/,
        Tt = /([?&])_=[^&]*/,
        Ct = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        kt = /^(?:GET|HEAD)$/,
        Et = /^\/\//,
        St = {},
        Nt = {},
        Dt = "*/".concat("*"),
        jt = r.createElement("a");

    function At(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, i = 0,
                o = t.toLowerCase().match(O) || [];
            if (m.isFunction(n))
                for (; r = o[i++];) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }

    function qt(e, t, n, r) {
        var i = {},
            o = e === Nt;

        function a(s) { var u; return i[s] = !0, m.each(e[s] || [], function(e, s) { var l = s(t, n, r); return "string" != typeof l || o || i[l] ? o ? !(u = l) : void 0 : (t.dataTypes.unshift(l), a(l), !1) }), u }
        return a(t.dataTypes[0]) || !i["*"] && a("*")
    }

    function Lt(e, t) { var n, r, i = m.ajaxSettings.flatOptions || {}; for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]); return r && m.extend(!0, e, r), e }
    jt.href = pt.href, m.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: { url: pt.href, type: "GET", isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(pt.protocol), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": Dt, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": m.parseXML }, flatOptions: { url: !0, context: !0 } },
        ajaxSetup: function(e, t) { return t ? Lt(Lt(e, m.ajaxSettings), t) : Lt(m.ajaxSettings, e) },
        ajaxPrefilter: At(St),
        ajaxTransport: At(Nt),
        ajax: function(t, n) {
            "object" == typeof t && (n = t, t = void 0), n = n || {};
            var i, o, a, s, u, l, c, f, p, d, h = m.ajaxSetup({}, n),
                g = h.context || h,
                v = h.context && (g.nodeType || g.jquery) ? m(g) : m.event,
                y = m.Deferred(),
                x = m.Callbacks("once memory"),
                b = h.statusCode || {},
                w = {},
                T = {},
                C = "canceled",
                k = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (c) {
                            if (!s)
                                for (s = {}; t = Ct.exec(a);) s[t[1].toLowerCase()] = t[2];
                            t = s[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() { return c ? a : null },
                    setRequestHeader: function(e, t) { return null == c && (e = T[e.toLowerCase()] = T[e.toLowerCase()] || e, w[e] = t), this },
                    overrideMimeType: function(e) { return null == c && (h.mimeType = e), this },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (c) k.always(e[k.status]);
                            else
                                for (t in e) b[t] = [b[t], e[t]];
                        return this
                    },
                    abort: function(e) { var t = e || C; return i && i.abort(t), E(0, t), this }
                };
            if (y.promise(k), h.url = ((t || h.url || pt.href) + "").replace(Et, pt.protocol + "//"), h.type = n.method || n.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(O) || [""], null == h.crossDomain) { l = r.createElement("a"); try { l.href = h.url, l.href = l.href, h.crossDomain = jt.protocol + "//" + jt.host != l.protocol + "//" + l.host } catch (e) { h.crossDomain = !0 } }
            if (h.data && h.processData && "string" != typeof h.data && (h.data = m.param(h.data, h.traditional)), qt(St, h, n, k), c) return k;
            for (p in (f = m.event && h.global) && 0 == m.active++ && m.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !kt.test(h.type), o = h.url.replace(wt, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(bt, "+")) : (d = h.url.slice(o.length), h.data && (o += (ht.test(o) ? "&" : "?") + h.data, delete h.data), !1 === h.cache && (o = o.replace(Tt, ""), d = (ht.test(o) ? "&" : "?") + "_=" + dt++ + d), h.url = o + d), h.ifModified && (m.lastModified[o] && k.setRequestHeader("If-Modified-Since", m.lastModified[o]), m.etag[o] && k.setRequestHeader("If-None-Match", m.etag[o])), (h.data && h.hasContent && !1 !== h.contentType || n.contentType) && k.setRequestHeader("Content-Type", h.contentType), k.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Dt + "; q=0.01" : "") : h.accepts["*"]), h.headers) k.setRequestHeader(p, h.headers[p]);
            if (h.beforeSend && (!1 === h.beforeSend.call(g, k, h) || c)) return k.abort();
            if (C = "abort", x.add(h.complete), k.done(h.success), k.fail(h.error), i = qt(Nt, h, n, k)) {
                if (k.readyState = 1, f && v.trigger("ajaxSend", [k, h]), c) return k;
                h.async && h.timeout > 0 && (u = e.setTimeout(function() { k.abort("timeout") }, h.timeout));
                try { c = !1, i.send(w, E) } catch (e) {
                    if (c) throw e;
                    E(-1, e)
                }
            } else E(-1, "No Transport");

            function E(t, n, r, s) {
                var l, p, d, w, T, C = n;
                c || (c = !0, u && e.clearTimeout(u), i = void 0, a = s || "", k.readyState = t > 0 ? 4 : 0, l = t >= 200 && 300 > t || 304 === t, r && (w = function(e, t, n) {
                    for (var r, i, o, a, s = e.contents, u = e.dataTypes;
                        "*" === u[0];) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (r)
                        for (i in s)
                            if (s[i] && s[i].test(r)) { u.unshift(i); break }
                    if (u[0] in n) o = u[0];
                    else {
                        for (i in n) {
                            if (!u[0] || e.converters[i + " " + u[0]]) { o = i; break }
                            a || (a = i)
                        }
                        o = o || a
                    }
                    return o ? (o !== u[0] && u.unshift(o), n[o]) : void 0
                }(h, k, r)), w = function(e, t, n, r) {
                    var i, o, a, s, u, l = {},
                        c = e.dataTypes.slice();
                    if (c[1])
                        for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
                    for (o = c.shift(); o;)
                        if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())
                            if ("*" === o) o = u;
                            else if ("*" !== u && u !== o) {
                        if (!(a = l[u + " " + o] || l["* " + o]))
                            for (i in l)
                                if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {!0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1])); break }
                        if (!0 !== a)
                            if (a && e.throws) t = a(t);
                            else try { t = a(t) } catch (e) { return { state: "parsererror", error: a ? e : "No conversion from " + u + " to " + o } }
                    }
                    return { state: "success", data: t }
                }(h, w, k, l), l ? (h.ifModified && ((T = k.getResponseHeader("Last-Modified")) && (m.lastModified[o] = T), (T = k.getResponseHeader("etag")) && (m.etag[o] = T)), 204 === t || "HEAD" === h.type ? C = "nocontent" : 304 === t ? C = "notmodified" : (C = w.state, p = w.data, l = !(d = w.error))) : (d = C, !t && C || (C = "error", 0 > t && (t = 0))), k.status = t, k.statusText = (n || C) + "", l ? y.resolveWith(g, [p, C, k]) : y.rejectWith(g, [k, C, d]), k.statusCode(b), b = void 0, f && v.trigger(l ? "ajaxSuccess" : "ajaxError", [k, h, l ? p : d]), x.fireWith(g, [k, C]), f && (v.trigger("ajaxComplete", [k, h]), --m.active || m.event.trigger("ajaxStop")))
            }
            return k
        },
        getJSON: function(e, t, n) { return m.get(e, t, n, "json") },
        getScript: function(e, t) { return m.get(e, void 0, t, "script") }
    }), m.each(["get", "post"], function(e, t) { m[t] = function(e, n, r, i) { return m.isFunction(n) && (i = i || r, r = n, n = void 0), m.ajax(m.extend({ url: e, type: t, dataType: i, data: n, success: r }, m.isPlainObject(e) && e)) } }), m._evalUrl = function(e) { return m.ajax({ url: e, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, throws: !0 }) }, m.fn.extend({
        wrapAll: function(e) { var t; return this[0] && (m.isFunction(e) && (e = e.call(this[0])), t = m(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() { for (var e = this; e.firstElementChild;) e = e.firstElementChild; return e }).append(this)), this },
        wrapInner: function(e) {
            return m.isFunction(e) ? this.each(function(t) { m(this).wrapInner(e.call(this, t)) }) : this.each(function() {
                var t = m(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) { var t = m.isFunction(e); return this.each(function(n) { m(this).wrapAll(t ? e.call(this, n) : e) }) },
        unwrap: function(e) { return this.parent(e).not("body").each(function() { m(this).replaceWith(this.childNodes) }), this }
    }), m.expr.pseudos.hidden = function(e) { return !m.expr.pseudos.visible(e) }, m.expr.pseudos.visible = function(e) { return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length) }, m.ajaxSettings.xhr = function() { try { return new e.XMLHttpRequest } catch (e) {} };
    var Ht = { 0: 200, 1223: 204 },
        Ft = m.ajaxSettings.xhr();
    h.cors = !!Ft && "withCredentials" in Ft, h.ajax = Ft = !!Ft, m.ajaxTransport(function(t) {
        var n, r;
        return h.cors || Ft && !t.crossDomain ? {
            send: function(i, o) {
                var a, s = t.xhr();
                if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                    for (a in t.xhrFields) s[a] = t.xhrFields[a];
                for (a in t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest"), i) s.setRequestHeader(a, i[a]);
                n = function(e) { return function() { n && (n = r = s.onload = s.onerror = s.onabort = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o(Ht[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? { binary: s.response } : { text: s.responseText }, s.getAllResponseHeaders())) } }, s.onload = n(), r = s.onerror = n("error"), void 0 !== s.onabort ? s.onabort = r : s.onreadystatechange = function() { 4 === s.readyState && e.setTimeout(function() { n && r() }) }, n = n("abort");
                try { s.send(t.hasContent && t.data || null) } catch (e) { if (n) throw e }
            },
            abort: function() { n && n() }
        } : void 0
    }), m.ajaxPrefilter(function(e) { e.crossDomain && (e.contents.script = !1) }), m.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function(e) { return m.globalEval(e), e } } }), m.ajaxPrefilter("script", function(e) { void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET") }), m.ajaxTransport("script", function(e) { var t, n; if (e.crossDomain) return { send: function(i, o) { t = m("<script>").prop({ charset: e.scriptCharset, src: e.url }).on("load error", n = function(e) { t.remove(), n = null, e && o("error" === e.type ? 404 : 200, e.type) }), r.head.appendChild(t[0]) }, abort: function() { n && n() } } });
    var Ot = [],
        Pt = /(=)\?(?=&|$)|\?\?/;

    function Rt(e) { return m.isWindow(e) ? e : 9 === e.nodeType && e.defaultView }
    m.ajaxSetup({ jsonp: "callback", jsonpCallback: function() { var e = Ot.pop() || m.expando + "_" + dt++; return this[e] = !0, e } }), m.ajaxPrefilter("json jsonp", function(t, n, r) { var i, o, a, s = !1 !== t.jsonp && (Pt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Pt.test(t.data) && "data"); return s || "jsonp" === t.dataTypes[0] ? (i = t.jsonpCallback = m.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(Pt, "$1" + i) : !1 !== t.jsonp && (t.url += (ht.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function() { return a || m.error(i + " was not called"), a[0] }, t.dataTypes[0] = "json", o = e[i], e[i] = function() { a = arguments }, r.always(function() { void 0 === o ? m(e).removeProp(i) : e[i] = o, t[i] && (t.jsonpCallback = n.jsonpCallback, Ot.push(i)), a && m.isFunction(o) && o(a[0]), a = o = void 0 }), "script") : void 0 }), h.createHTMLDocument = function() { var e = r.implementation.createHTMLDocument("").body; return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length }(), m.parseHTML = function(e, t, n) { return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (h.createHTMLDocument ? ((i = (t = r.implementation.createHTMLDocument("")).createElement("base")).href = r.location.href, t.head.appendChild(i)) : t = r), a = !n && [], (o = N.exec(e)) ? [t.createElement(o[1])] : (o = pe([e], t, a), a && a.length && m(a).remove(), m.merge([], o.childNodes))); var i, o, a }, m.fn.load = function(e, t, n) {
        var r, i, o, a = this,
            s = e.indexOf(" ");
        return s > -1 && (r = m.trim(e.slice(s)), e = e.slice(0, s)), m.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), a.length > 0 && m.ajax({ url: e, type: i || "GET", dataType: "html", data: t }).done(function(e) { o = arguments, a.html(r ? m("<div>").append(m.parseHTML(e)).find(r) : e) }).always(n && function(e, t) { a.each(function() { n.apply(this, o || [e.responseText, t, e]) }) }), this
    }, m.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) { m.fn[t] = function(e) { return this.on(t, e) } }), m.expr.pseudos.animated = function(e) { return m.grep(m.timers, function(t) { return e === t.elem }).length }, m.offset = {
        setOffset: function(e, t, n) {
            var r, i, o, a, s, u, l = m.css(e, "position"),
                c = m(e),
                f = {};
            "static" === l && (e.style.position = "relative"), s = c.offset(), o = m.css(e, "top"), u = m.css(e, "left"), ("absolute" === l || "fixed" === l) && (o + u).indexOf("auto") > -1 ? (a = (r = c.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), m.isFunction(t) && (t = t.call(e, n, m.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : c.css(f)
        }
    }, m.fn.extend({
        offset: function(e) { if (arguments.length) return void 0 === e ? this : this.each(function(t) { m.offset.setOffset(this, e, t) }); var t, n, r, i, o = this[0]; return o ? o.getClientRects().length ? (r = o.getBoundingClientRect()).width || r.height ? (n = Rt(i = o.ownerDocument), t = i.documentElement, { top: r.top + n.pageYOffset - t.clientTop, left: r.left + n.pageXOffset - t.clientLeft }) : r : { top: 0, left: 0 } : void 0 },
        position: function() {
            if (this[0]) {
                var e, t, n = this[0],
                    r = { top: 0, left: 0 };
                return "fixed" === m.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), m.nodeName(e[0], "html") || (r = e.offset()), r = { top: r.top + m.css(e[0], "borderTopWidth", !0), left: r.left + m.css(e[0], "borderLeftWidth", !0) }), { top: t.top - r.top - m.css(n, "marginTop", !0), left: t.left - r.left - m.css(n, "marginLeft", !0) }
            }
        },
        offsetParent: function() { return this.map(function() { for (var e = this.offsetParent; e && "static" === m.css(e, "position");) e = e.offsetParent; return e || de }) }
    }), m.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(e, t) {
        var n = "pageYOffset" === t;
        m.fn[e] = function(r) { return B(this, function(e, r, i) { var o = Rt(e); return void 0 === i ? o ? o[t] : e[r] : void(o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i) }, e, r, arguments.length) }
    }), m.each(["top", "left"], function(e, t) { m.cssHooks[t] = Re(h.pixelPosition, function(e, n) { return n ? (n = Pe(e, t), Fe.test(n) ? m(e).position()[t] + "px" : n) : void 0 }) }), m.each({ Height: "height", Width: "width" }, function(e, t) {
        m.each({ padding: "inner" + e, content: t, "": "outer" + e }, function(n, r) {
            m.fn[r] = function(i, o) {
                var a = arguments.length && (n || "boolean" != typeof i),
                    s = n || (!0 === i || !0 === o ? "margin" : "border");
                return B(this, function(t, n, i) { var o; return m.isWindow(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? m.css(t, n, s) : m.style(t, n, i, s) }, t, a ? i : void 0, a)
            }
        })
    }), m.fn.extend({ bind: function(e, t, n) { return this.on(e, null, t, n) }, unbind: function(e, t) { return this.off(e, null, t) }, delegate: function(e, t, n, r) { return this.on(t, e, n, r) }, undelegate: function(e, t, n) { return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n) } }), m.parseJSON = JSON.parse, "function" == typeof define && define.amd && define("jquery", [], function() { return m });
    var Mt = e.jQuery,
        It = e.$;
    return m.noConflict = function(t) { return e.$ === m && (e.$ = It), t && e.jQuery === m && (e.jQuery = Mt), m }, t || (e.jQuery = e.$ = m), m
});;
void 0 === jQuery.migrateMute && (jQuery.migrateMute = !0),
    function(e, t) {
        "use strict";

        function r(r) {
            var n = t.console;
            i[r] || (i[r] = !0, e.migrateWarnings.push(r), n && n.warn && !e.migrateMute && (n.warn("JQMIGRATE: " + r), e.migrateTrace && n.trace && n.trace()))
        }

        function n(e, t, n, i) { Object.defineProperty(e, t, { configurable: !0, enumerable: !0, get: function() { return r(i), n } }) }
        e.migrateVersion = "3.0.0",
            function() {
                var r = t.console && t.console.log && function() { t.console.log.apply(t.console, arguments) };
                r && (e && !/^[12]\./.test(e.fn.jquery) || r("JQMIGRATE: jQuery 3.0.0+ REQUIRED"), e.migrateWarnings && r("JQMIGRATE: Migrate plugin loaded multiple times"), r("JQMIGRATE: Migrate is installed" + (e.migrateMute ? "" : " with logging active") + ", version " + e.migrateVersion))
            }();
        var i = {};
        e.migrateWarnings = [], void 0 === e.migrateTrace && (e.migrateTrace = !0), e.migrateReset = function() { i = {}, e.migrateWarnings.length = 0 }, "BackCompat" === document.compatMode && r("jQuery is not compatible with Quirks Mode");
        var a, s = e.fn.init,
            o = e.isNumeric,
            u = e.find,
            c = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,
            l = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g;
        for (a in e.fn.init = function(e) { var t = Array.prototype.slice.call(arguments); return "string" == typeof e && "#" === e && (r("jQuery( '#' ) is not a valid selector"), t[0] = []), s.apply(this, t) }, e.fn.init.prototype = e.fn, e.find = function(e) {
                var t = Array.prototype.slice.call(arguments);
                if ("string" == typeof e && c.test(e)) try { document.querySelector(e) } catch (n) { e = e.replace(l, function(e, t, r, n) { return "[" + t + r + '"' + n + '"]' }); try { document.querySelector(e), r("Attribute selector with '#' must be quoted: " + t[0]), t[0] = e } catch (e) { r("Attribute selector with '#' was not fixed: " + t[0]) } }
                return u.apply(this, t)
            }, u) Object.prototype.hasOwnProperty.call(u, a) && (e.find[a] = u[a]);
        e.fn.size = function() { return r("jQuery.fn.size() is deprecated; use the .length property"), this.length }, e.parseJSON = function() { return r("jQuery.parseJSON is deprecated; use JSON.parse"), JSON.parse.apply(null, arguments) }, e.isNumeric = function(t) {
            var n = o(t),
                i = function(t) { var r = t && t.toString(); return !e.isArray(t) && r - parseFloat(r) + 1 >= 0 }(t);
            return n !== i && r("jQuery.isNumeric() should not be called on constructed objects"), i
        }, n(e, "unique", e.uniqueSort, "jQuery.unique is deprecated, use jQuery.uniqueSort"), n(e.expr, "filters", e.expr.pseudos, "jQuery.expr.filters is now jQuery.expr.pseudos"), n(e.expr, ":", e.expr.pseudos, 'jQuery.expr[":"] is now jQuery.expr.pseudos');
        var p = e.ajax;
        e.ajax = function() { var e = p.apply(this, arguments); return e.promise && (n(e, "success", e.done, "jQXHR.success is deprecated and removed"), n(e, "error", e.fail, "jQXHR.error is deprecated and removed"), n(e, "complete", e.always, "jQXHR.complete is deprecated and removed")), e };
        var d = e.fn.removeAttr,
            f = e.fn.toggleClass,
            y = /\S+/g;
        e.fn.removeAttr = function(t) { var n = this; return e.each(t.match(y), function(t, i) { e.expr.match.bool.test(i) && (r("jQuery.fn.removeAttr no longer sets boolean properties: " + i), n.prop(i, !1)) }), d.apply(this, arguments) }, e.fn.toggleClass = function(t) {
            return void 0 !== t && "boolean" != typeof t ? f.apply(this, arguments) : (r("jQuery.fn.toggleClass( boolean ) is deprecated"), this.each(function() {
                var r = this.getAttribute && this.getAttribute("class") || "";
                r && e.data(this, "__className__", r), this.setAttribute && this.setAttribute("class", r || !1 === t ? "" : e.data(this, "__className__") || "")
            }))
        };
        var g = !1;
        e.swap && e.each(["height", "width", "reliableMarginRight"], function(t, r) {
            var n = e.cssHooks[r] && e.cssHooks[r].get;
            n && (e.cssHooks[r].get = function() { var e; return g = !0, e = n.apply(this, arguments), g = !1, e })
        }), e.swap = function(e, t, n, i) { var a, s, o = {}; for (s in g || r("jQuery.swap() is undocumented and deprecated"), t) o[s] = e.style[s], e.style[s] = t[s]; for (s in a = n.apply(e, i || []), t) e.style[s] = o[s]; return a };
        var h = e.data;
        e.data = function(t, n, i) { var a; return n && n !== e.camelCase(n) && ((a = e.hasData(t) && h.call(this, t)) && n in a) ? (r("jQuery.data() always sets/gets camelCased names: " + n), arguments.length > 2 && (a[n] = i), a[n]) : h.apply(this, arguments) };
        var m = e.Tween.prototype.run;
        e.Tween.prototype.run = function(t) { e.easing[this.easing].length > 1 && (r('easing function "jQuery.easing.' + this.easing.toString() + '" should use only first argument'), e.easing[this.easing] = e.easing[this.easing].bind(e.easing, t, this.options.duration * t, 0, 1, this.options.duration)), m.apply(this, arguments) };
        var v = e.fn.load,
            j = e.event.fix;
        e.event.props = [], e.event.fixHooks = {}, e.event.fix = function(t) {
            var n, i = t.type,
                a = this.fixHooks[i],
                s = e.event.props;
            if (s.length)
                for (r("jQuery.event.props are deprecated and removed: " + s.join()); s.length;) e.event.addProp(s.pop());
            if (a && !a._migrated_ && (a._migrated_ = !0, r("jQuery.event.fixHooks are deprecated and removed: " + i), (s = a.props) && s.length))
                for (; s.length;) e.event.addProp(s.pop());
            return n = j.call(this, t), a && a.filter ? a.filter(n, t) : n
        }, e.each(["load", "unload", "error"], function(t, n) { e.fn[n] = function() { var e = Array.prototype.slice.call(arguments, 0); return "load" === n && "string" == typeof e[0] ? v.apply(this, e) : (r("jQuery.fn." + n + "() is deprecated"), e.splice(0, 0, n), arguments.length ? this.on.apply(this, e) : (this.triggerHandler.apply(this, e), this)) } }), e(function() { e(document).triggerHandler("ready") }), e.event.special.ready = { setup: function() { this === document && r("'ready' event is deprecated") } }, e.fn.extend({ bind: function(e, t, n) { return r("jQuery.fn.bind() is deprecated"), this.on(e, null, t, n) }, unbind: function(e, t) { return r("jQuery.fn.unbind() is deprecated"), this.off(e, null, t) }, delegate: function(e, t, n, i) { return r("jQuery.fn.delegate() is deprecated"), this.on(t, e, n, i) }, undelegate: function(e, t, n) { return r("jQuery.fn.undelegate() is deprecated"), 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n) } });
        var Q = e.fn.offset;
        e.fn.offset = function() {
            var t, n = this[0],
                i = { top: 0, left: 0 };
            return n && n.nodeType ? (t = (n.ownerDocument || document).documentElement, e.contains(t, n) ? Q.apply(this, arguments) : (r("jQuery.fn.offset() requires an element connected to a document"), i)) : (r("jQuery.fn.offset() requires a valid DOM element"), i)
        };
        var b = e.param;
        e.param = function(t, n) { var i = e.ajaxSettings && e.ajaxSettings.traditional; return void 0 === n && i && (r("jQuery.param() no longer uses jQuery.ajaxSettings.traditional"), n = i), b.call(this, t, n) };
        var w = e.fn.andSelf || e.fn.addBack;
        e.fn.andSelf = function() { return r("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"), w.apply(this, arguments) };
        var x = e.Deferred,
            A = [
                ["resolve", "done", e.Callbacks("once memory"), e.Callbacks("once memory"), "resolved"],
                ["reject", "fail", e.Callbacks("once memory"), e.Callbacks("once memory"), "rejected"],
                ["notify", "progress", e.Callbacks("memory"), e.Callbacks("memory")]
            ];
        e.Deferred = function(t) {
            var n = x(),
                i = n.promise();
            return n.pipe = i.pipe = function() {
                var t = arguments;
                return r("deferred.pipe() is deprecated"), e.Deferred(function(r) {
                    e.each(A, function(a, s) {
                        var o = e.isFunction(t[a]) && t[a];
                        n[s[1]](function() {
                            var t = o && o.apply(this, arguments);
                            t && e.isFunction(t.promise) ? t.promise().done(r.resolve).fail(r.reject).progress(r.notify) : r[s[0] + "With"](this === i ? r.promise() : this, o ? [t] : arguments)
                        })
                    }), t = null
                }).promise()
            }, t && t.call(n, n), n
        }
    }(jQuery, window);;
! function(t, e) { "object" == typeof exports && "undefined" != typeof module ? e(exports, require("jquery"), require("../../../../www.innovationplans.com/idesign/avo2/avo-light/popper.html")) : "function" == typeof define && define.amd ? define(["exports", "jquery", "popper.js"], e) : e(t.bootstrap = {}, t.jQuery, t.Popper) }(this, function(t, e, i) {
    "use strict";

    function n(t, e) {
        for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
    }

    function s(t, e, i) { return e && n(t.prototype, e), i && n(t, i), t }

    function r() { return (r = Object.assign || function(t) { for (var e = 1; e < arguments.length; e++) { var i = arguments[e]; for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n]) } return t }).apply(this, arguments) }
    e = e && e.hasOwnProperty("default") ? e.default : e, i = i && i.hasOwnProperty("default") ? i.default : i;
    var o, a, l, h, d, u, c, p, f, m, g, v, y, w, b, T, _, S, x = function(t) {
            var e = !1;
            var i = {
                TRANSITION_END: "bsTransitionEnd",
                getUID: function(t) { do { t += ~~(1e6 * Math.random()) } while (document.getElementById(t)); return t },
                getSelectorFromElement: function(e) {
                    var i, n = e.getAttribute("data-target");
                    n && "#" !== n || (n = e.getAttribute("href") || ""), "#" === n.charAt(0) && (i = n, n = i = "function" == typeof t.escapeSelector ? t.escapeSelector(i).substr(1) : i.replace(/(:|\.|\[|\]|,|=|@)/g, "\\$1"));
                    try { return t(document).find(n).length > 0 ? n : null } catch (t) { return null }
                },
                reflow: function(t) { return t.offsetHeight },
                triggerTransitionEnd: function(i) { t(i).trigger(e.end) },
                supportsTransitionEnd: function() { return Boolean(e) },
                isElement: function(t) { return (t[0] || t).nodeType },
                typeCheckConfig: function(t, e, n) {
                    for (var s in n)
                        if (Object.prototype.hasOwnProperty.call(n, s)) {
                            var r = n[s],
                                o = e[s],
                                a = o && i.isElement(o) ? "element" : (l = o, {}.toString.call(l).match(/\s([a-zA-Z]+)/)[1].toLowerCase());
                            if (!new RegExp(r).test(a)) throw new Error(t.toUpperCase() + ': Option "' + s + '" provided type "' + a + '" but expected type "' + r + '".')
                        }
                    var l
                }
            };
            return e = ("undefined" == typeof window || !window.QUnit) && { end: "transitionend" }, t.fn.emulateTransitionEnd = function(e) {
                var n = this,
                    s = !1;
                return t(this).one(i.TRANSITION_END, function() { s = !0 }), setTimeout(function() { s || i.triggerTransitionEnd(n) }, e), this
            }, i.supportsTransitionEnd() && (t.event.special[i.TRANSITION_END] = { bindType: e.end, delegateType: e.end, handle: function(e) { if (t(e.target).is(this)) return e.handleObj.handler.apply(this, arguments) } }), i
        }(e),
        E = (a = "alert", h = "." + (l = "bs.alert"), d = (o = e).fn[a], u = { CLOSE: "close" + h, CLOSED: "closed" + h, CLICK_DATA_API: "click" + h + ".data-api" }, "alert", "fade", "show", c = function() {
            function t(t) { this._element = t }
            var e = t.prototype;
            return e.close = function(t) {
                t = t || this._element;
                var e = this._getRootElement(t);
                this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e)
            }, e.dispose = function() { o.removeData(this._element, l), this._element = null }, e._getRootElement = function(t) {
                var e = x.getSelectorFromElement(t),
                    i = !1;
                return e && (i = o(e)[0]), i || (i = o(t).closest(".alert")[0]), i
            }, e._triggerCloseEvent = function(t) { var e = o.Event(u.CLOSE); return o(t).trigger(e), e }, e._removeElement = function(t) {
                var e = this;
                o(t).removeClass("show"), x.supportsTransitionEnd() && o(t).hasClass("fade") ? o(t).one(x.TRANSITION_END, function(i) { return e._destroyElement(t, i) }).emulateTransitionEnd(150) : this._destroyElement(t)
            }, e._destroyElement = function(t) { o(t).detach().trigger(u.CLOSED).remove() }, t._jQueryInterface = function(e) {
                return this.each(function() {
                    var i = o(this),
                        n = i.data(l);
                    n || (n = new t(this), i.data(l, n)), "close" === e && n[e](this)
                })
            }, t._handleDismiss = function(t) { return function(e) { e && e.preventDefault(), t.close(this) } }, s(t, null, [{ key: "VERSION", get: function() { return "4.0.0" } }]), t
        }(), o(document).on(u.CLICK_DATA_API, '[data-dismiss="alert"]', c._handleDismiss(new c)), o.fn[a] = c._jQueryInterface, o.fn[a].Constructor = c, o.fn[a].noConflict = function() { return o.fn[a] = d, c._jQueryInterface }, c),
        C = (f = "button", g = "." + (m = "bs.button"), v = ".data-api", y = (p = e).fn[f], w = "active", "btn", "focus", b = '[data-toggle^="button"]', '[data-toggle="buttons"]', "input", ".active", T = ".btn", _ = { CLICK_DATA_API: "click" + g + v, FOCUS_BLUR_DATA_API: "focus" + g + v + " blur" + g + v }, S = function() {
            function t(t) { this._element = t }
            var e = t.prototype;
            return e.toggle = function() {
                var t = !0,
                    e = !0,
                    i = p(this._element).closest('[data-toggle="buttons"]')[0];
                if (i) {
                    var n = p(this._element).find("input")[0];
                    if (n) {
                        if ("radio" === n.type)
                            if (n.checked && p(this._element).hasClass(w)) t = !1;
                            else {
                                var s = p(i).find(".active")[0];
                                s && p(s).removeClass(w)
                            }
                        if (t) {
                            if (n.hasAttribute("disabled") || i.hasAttribute("disabled") || n.classList.contains("disabled") || i.classList.contains("disabled")) return;
                            n.checked = !p(this._element).hasClass(w), p(n).trigger("change")
                        }
                        n.focus(), e = !1
                    }
                }
                e && this._element.setAttribute("aria-pressed", !p(this._element).hasClass(w)), t && p(this._element).toggleClass(w)
            }, e.dispose = function() { p.removeData(this._element, m), this._element = null }, t._jQueryInterface = function(e) {
                return this.each(function() {
                    var i = p(this).data(m);
                    i || (i = new t(this), p(this).data(m, i)), "toggle" === e && i[e]()
                })
            }, s(t, null, [{ key: "VERSION", get: function() { return "4.0.0" } }]), t
        }(), p(document).on(_.CLICK_DATA_API, b, function(t) {
            t.preventDefault();
            var e = t.target;
            p(e).hasClass("btn") || (e = p(e).closest(T)), S._jQueryInterface.call(p(e), "toggle")
        }).on(_.FOCUS_BLUR_DATA_API, b, function(t) {
            var e = p(t.target).closest(T)[0];
            p(e).toggleClass("focus", /^focus(in)?$/.test(t.type))
        }), p.fn[f] = S._jQueryInterface, p.fn[f].Constructor = S, p.fn[f].noConflict = function() { return p.fn[f] = y, S._jQueryInterface }, S),
        k = function(t) {
            var e = "carousel",
                i = "bs.carousel",
                n = "." + i,
                o = t.fn[e],
                a = { interval: 5e3, keyboard: !0, slide: !1, pause: "hover", wrap: !0 },
                l = { interval: "(number|boolean)", keyboard: "boolean", slide: "(boolean|string)", pause: "(string|boolean)", wrap: "boolean" },
                h = "next",
                d = "prev",
                u = { SLIDE: "slide" + n, SLID: "slid" + n, KEYDOWN: "keydown" + n, MOUSEENTER: "mouseenter" + n, MOUSELEAVE: "mouseleave" + n, TOUCHEND: "touchend" + n, LOAD_DATA_API: "load" + n + ".data-api", CLICK_DATA_API: "click" + n + ".data-api" },
                c = "active",
                p = { ACTIVE: ".active", ACTIVE_ITEM: ".active.carousel-item", ITEM: ".carousel-item", NEXT_PREV: ".carousel-item-next, .carousel-item-prev", INDICATORS: ".carousel-indicators", DATA_SLIDE: "[data-slide], [data-slide-to]", DATA_RIDE: '[data-ride="carousel"]' },
                f = function() {
                    function o(e, i) { this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this._config = this._getConfig(i), this._element = t(e)[0], this._indicatorsElement = t(this._element).find(p.INDICATORS)[0], this._addEventListeners() }
                    var f = o.prototype;
                    return f.next = function() { this._isSliding || this._slide(h) }, f.nextWhenVisible = function() {!document.hidden && t(this._element).is(":visible") && "hidden" !== t(this._element).css("visibility") && this.next() }, f.prev = function() { this._isSliding || this._slide(d) }, f.pause = function(e) { e || (this._isPaused = !0), t(this._element).find(p.NEXT_PREV)[0] && x.supportsTransitionEnd() && (x.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null }, f.cycle = function(t) { t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval)) }, f.to = function(e) {
                        var i = this;
                        this._activeElement = t(this._element).find(p.ACTIVE_ITEM)[0];
                        var n = this._getItemIndex(this._activeElement);
                        if (!(e > this._items.length - 1 || e < 0))
                            if (this._isSliding) t(this._element).one(u.SLID, function() { return i.to(e) });
                            else {
                                if (n === e) return this.pause(), void this.cycle();
                                var s = e > n ? h : d;
                                this._slide(s, this._items[e])
                            }
                    }, f.dispose = function() { t(this._element).off(n), t.removeData(this._element, i), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null }, f._getConfig = function(t) { return t = r({}, a, t), x.typeCheckConfig(e, t, l), t }, f._addEventListeners = function() {
                        var e = this;
                        this._config.keyboard && t(this._element).on(u.KEYDOWN, function(t) { return e._keydown(t) }), "hover" === this._config.pause && (t(this._element).on(u.MOUSEENTER, function(t) { return e.pause(t) }).on(u.MOUSELEAVE, function(t) { return e.cycle(t) }), "ontouchstart" in document.documentElement && t(this._element).on(u.TOUCHEND, function() { e.pause(), e.touchTimeout && clearTimeout(e.touchTimeout), e.touchTimeout = setTimeout(function(t) { return e.cycle(t) }, 500 + e._config.interval) }))
                    }, f._keydown = function(t) {
                        if (!/input|textarea/i.test(t.target.tagName)) switch (t.which) {
                            case 37:
                                t.preventDefault(), this.prev();
                                break;
                            case 39:
                                t.preventDefault(), this.next()
                        }
                    }, f._getItemIndex = function(e) { return this._items = t.makeArray(t(e).parent().find(p.ITEM)), this._items.indexOf(e) }, f._getItemByDirection = function(t, e) {
                        var i = t === h,
                            n = t === d,
                            s = this._getItemIndex(e),
                            r = this._items.length - 1;
                        if ((n && 0 === s || i && s === r) && !this._config.wrap) return e;
                        var o = (s + (t === d ? -1 : 1)) % this._items.length;
                        return -1 === o ? this._items[this._items.length - 1] : this._items[o]
                    }, f._triggerSlideEvent = function(e, i) {
                        var n = this._getItemIndex(e),
                            s = this._getItemIndex(t(this._element).find(p.ACTIVE_ITEM)[0]),
                            r = t.Event(u.SLIDE, { relatedTarget: e, direction: i, from: s, to: n });
                        return t(this._element).trigger(r), r
                    }, f._setActiveIndicatorElement = function(e) {
                        if (this._indicatorsElement) {
                            t(this._indicatorsElement).find(p.ACTIVE).removeClass(c);
                            var i = this._indicatorsElement.children[this._getItemIndex(e)];
                            i && t(i).addClass(c)
                        }
                    }, f._slide = function(e, i) {
                        var n, s, r, o = this,
                            a = t(this._element).find(p.ACTIVE_ITEM)[0],
                            l = this._getItemIndex(a),
                            d = i || a && this._getItemByDirection(e, a),
                            f = this._getItemIndex(d),
                            m = Boolean(this._interval);
                        if (e === h ? (n = "carousel-item-left", s = "carousel-item-next", r = "left") : (n = "carousel-item-right", s = "carousel-item-prev", r = "right"), d && t(d).hasClass(c)) this._isSliding = !1;
                        else if (!this._triggerSlideEvent(d, r).isDefaultPrevented() && a && d) {
                            this._isSliding = !0, m && this.pause(), this._setActiveIndicatorElement(d);
                            var g = t.Event(u.SLID, { relatedTarget: d, direction: r, from: l, to: f });
                            x.supportsTransitionEnd() && t(this._element).hasClass("slide") ? (t(d).addClass(s), x.reflow(d), t(a).addClass(n), t(d).addClass(n), t(a).one(x.TRANSITION_END, function() { t(d).removeClass(n + " " + s).addClass(c), t(a).removeClass(c + " " + s + " " + n), o._isSliding = !1, setTimeout(function() { return t(o._element).trigger(g) }, 0) }).emulateTransitionEnd(600)) : (t(a).removeClass(c), t(d).addClass(c), this._isSliding = !1, t(this._element).trigger(g)), m && this.cycle()
                        }
                    }, o._jQueryInterface = function(e) {
                        return this.each(function() {
                            var n = t(this).data(i),
                                s = r({}, a, t(this).data());
                            "object" == typeof e && (s = r({}, s, e));
                            var l = "string" == typeof e ? e : s.slide;
                            if (n || (n = new o(this, s), t(this).data(i, n)), "number" == typeof e) n.to(e);
                            else if ("string" == typeof l) {
                                if (void 0 === n[l]) throw new TypeError('No method named "' + l + '"');
                                n[l]()
                            } else s.interval && (n.pause(), n.cycle())
                        })
                    }, o._dataApiClickHandler = function(e) {
                        var n = x.getSelectorFromElement(this);
                        if (n) {
                            var s = t(n)[0];
                            if (s && t(s).hasClass("carousel")) {
                                var a = r({}, t(s).data(), t(this).data()),
                                    l = this.getAttribute("data-slide-to");
                                l && (a.interval = !1), o._jQueryInterface.call(t(s), a), l && t(s).data(i).to(l), e.preventDefault()
                            }
                        }
                    }, s(o, null, [{ key: "VERSION", get: function() { return "4.0.0" } }, { key: "Default", get: function() { return a } }]), o
                }();
            return t(document).on(u.CLICK_DATA_API, p.DATA_SLIDE, f._dataApiClickHandler), t(window).on(u.LOAD_DATA_API, function() {
                t(p.DATA_RIDE).each(function() {
                    var e = t(this);
                    f._jQueryInterface.call(e, e.data())
                })
            }), t.fn[e] = f._jQueryInterface, t.fn[e].Constructor = f, t.fn[e].noConflict = function() { return t.fn[e] = o, f._jQueryInterface }, f
        }(e),
        I = function(t) {
            var e = "collapse",
                i = "bs.collapse",
                n = "." + i,
                o = t.fn[e],
                a = { toggle: !0, parent: "" },
                l = { toggle: "boolean", parent: "(string|element)" },
                h = { SHOW: "show" + n, SHOWN: "shown" + n, HIDE: "hide" + n, HIDDEN: "hidden" + n, CLICK_DATA_API: "click" + n + ".data-api" },
                d = "show",
                u = "collapse",
                c = "collapsing",
                p = "collapsed",
                f = "width",
                m = { ACTIVES: ".show, .collapsing", DATA_TOGGLE: '[data-toggle="collapse"]' },
                g = function() {
                    function n(e, i) {
                        this._isTransitioning = !1, this._element = e, this._config = this._getConfig(i), this._triggerArray = t.makeArray(t('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'));
                        for (var n = t(m.DATA_TOGGLE), s = 0; s < n.length; s++) {
                            var r = n[s],
                                o = x.getSelectorFromElement(r);
                            null !== o && t(o).filter(e).length > 0 && (this._selector = o, this._triggerArray.push(r))
                        }
                        this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
                    }
                    var o = n.prototype;
                    return o.toggle = function() { t(this._element).hasClass(d) ? this.hide() : this.show() }, o.show = function() {
                        var e, s, r = this;
                        if (!(this._isTransitioning || t(this._element).hasClass(d) || (this._parent && 0 === (e = t.makeArray(t(this._parent).find(m.ACTIVES).filter('[data-parent="' + this._config.parent + '"]'))).length && (e = null), e && (s = t(e).not(this._selector).data(i)) && s._isTransitioning))) {
                            var o = t.Event(h.SHOW);
                            if (t(this._element).trigger(o), !o.isDefaultPrevented()) {
                                e && (n._jQueryInterface.call(t(e).not(this._selector), "hide"), s || t(e).data(i, null));
                                var a = this._getDimension();
                                t(this._element).removeClass(u).addClass(c), this._element.style[a] = 0, this._triggerArray.length > 0 && t(this._triggerArray).removeClass(p).attr("aria-expanded", !0), this.setTransitioning(!0);
                                var l = function() { t(r._element).removeClass(c).addClass(u).addClass(d), r._element.style[a] = "", r.setTransitioning(!1), t(r._element).trigger(h.SHOWN) };
                                if (x.supportsTransitionEnd()) {
                                    var f = "scroll" + (a[0].toUpperCase() + a.slice(1));
                                    t(this._element).one(x.TRANSITION_END, l).emulateTransitionEnd(600), this._element.style[a] = this._element[f] + "px"
                                } else l()
                            }
                        }
                    }, o.hide = function() {
                        var e = this;
                        if (!this._isTransitioning && t(this._element).hasClass(d)) {
                            var i = t.Event(h.HIDE);
                            if (t(this._element).trigger(i), !i.isDefaultPrevented()) {
                                var n = this._getDimension();
                                if (this._element.style[n] = this._element.getBoundingClientRect()[n] + "px", x.reflow(this._element), t(this._element).addClass(c).removeClass(u).removeClass(d), this._triggerArray.length > 0)
                                    for (var s = 0; s < this._triggerArray.length; s++) {
                                        var r = this._triggerArray[s],
                                            o = x.getSelectorFromElement(r);
                                        null !== o && (t(o).hasClass(d) || t(r).addClass(p).attr("aria-expanded", !1))
                                    }
                                this.setTransitioning(!0);
                                var a = function() { e.setTransitioning(!1), t(e._element).removeClass(c).addClass(u).trigger(h.HIDDEN) };
                                this._element.style[n] = "", x.supportsTransitionEnd() ? t(this._element).one(x.TRANSITION_END, a).emulateTransitionEnd(600) : a()
                            }
                        }
                    }, o.setTransitioning = function(t) { this._isTransitioning = t }, o.dispose = function() { t.removeData(this._element, i), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null }, o._getConfig = function(t) { return (t = r({}, a, t)).toggle = Boolean(t.toggle), x.typeCheckConfig(e, t, l), t }, o._getDimension = function() { return t(this._element).hasClass(f) ? f : "height" }, o._getParent = function() {
                        var e = this,
                            i = null;
                        x.isElement(this._config.parent) ? (i = this._config.parent, void 0 !== this._config.parent.jquery && (i = this._config.parent[0])) : i = t(this._config.parent)[0];
                        var s = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]';
                        return t(i).find(s).each(function(t, i) { e._addAriaAndCollapsedClass(n._getTargetFromElement(i), [i]) }), i
                    }, o._addAriaAndCollapsedClass = function(e, i) {
                        if (e) {
                            var n = t(e).hasClass(d);
                            i.length > 0 && t(i).toggleClass(p, !n).attr("aria-expanded", n)
                        }
                    }, n._getTargetFromElement = function(e) { var i = x.getSelectorFromElement(e); return i ? t(i)[0] : null }, n._jQueryInterface = function(e) {
                        return this.each(function() {
                            var s = t(this),
                                o = s.data(i),
                                l = r({}, a, s.data(), "object" == typeof e && e);
                            if (!o && l.toggle && /show|hide/.test(e) && (l.toggle = !1), o || (o = new n(this, l), s.data(i, o)), "string" == typeof e) {
                                if (void 0 === o[e]) throw new TypeError('No method named "' + e + '"');
                                o[e]()
                            }
                        })
                    }, s(n, null, [{ key: "VERSION", get: function() { return "4.0.0" } }, { key: "Default", get: function() { return a } }]), n
                }();
            return t(document).on(h.CLICK_DATA_API, m.DATA_TOGGLE, function(e) {
                "A" === e.currentTarget.tagName && e.preventDefault();
                var n = t(this),
                    s = x.getSelectorFromElement(this);
                t(s).each(function() {
                    var e = t(this),
                        s = e.data(i) ? "toggle" : n.data();
                    g._jQueryInterface.call(e, s)
                })
            }), t.fn[e] = g._jQueryInterface, t.fn[e].Constructor = g, t.fn[e].noConflict = function() { return t.fn[e] = o, g._jQueryInterface }, g
        }(e),
        A = function(t) {
            var e = "dropdown",
                n = "bs.dropdown",
                o = "." + n,
                a = ".data-api",
                l = t.fn[e],
                h = new RegExp("38|40|27"),
                d = { HIDE: "hide" + o, HIDDEN: "hidden" + o, SHOW: "show" + o, SHOWN: "shown" + o, CLICK: "click" + o, CLICK_DATA_API: "click" + o + a, KEYDOWN_DATA_API: "keydown" + o + a, KEYUP_DATA_API: "keyup" + o + a },
                u = "disabled",
                c = "show",
                p = "dropup",
                f = "dropdown-menu-right",
                m = '[data-toggle="dropdown"]',
                g = ".dropdown-menu",
                v = { offset: 0, flip: !0, boundary: "scrollParent" },
                y = { offset: "(number|string|function)", flip: "boolean", boundary: "(string|element)" },
                w = function() {
                    function a(t, e) { this._element = t, this._popper = null, this._config = this._getConfig(e), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners() }
                    var l = a.prototype;
                    return l.toggle = function() {
                        if (!this._element.disabled && !t(this._element).hasClass(u)) {
                            var e = a._getParentFromElement(this._element),
                                n = t(this._menu).hasClass(c);
                            if (a._clearMenus(), !n) {
                                var s = { relatedTarget: this._element },
                                    r = t.Event(d.SHOW, s);
                                if (t(e).trigger(r), !r.isDefaultPrevented()) {
                                    if (!this._inNavbar) {
                                        if (void 0 === i) throw new TypeError("Bootstrap dropdown require Popper.js (https://popper.js.org)");
                                        var o = this._element;
                                        t(e).hasClass(p) && (t(this._menu).hasClass("dropdown-menu-left") || t(this._menu).hasClass(f)) && (o = e), "scrollParent" !== this._config.boundary && t(e).addClass("position-static"), this._popper = new i(o, this._menu, this._getPopperConfig())
                                    }
                                    "ontouchstart" in document.documentElement && 0 === t(e).closest(".navbar-nav").length && t("body").children().on("mouseover", null, t.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), t(this._menu).toggleClass(c), t(e).toggleClass(c).trigger(t.Event(d.SHOWN, s))
                                }
                            }
                        }
                    }, l.dispose = function() { t.removeData(this._element, n), t(this._element).off(o), this._element = null, this._menu = null, null !== this._popper && (this._popper.destroy(), this._popper = null) }, l.update = function() { this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate() }, l._addEventListeners = function() {
                        var e = this;
                        t(this._element).on(d.CLICK, function(t) { t.preventDefault(), t.stopPropagation(), e.toggle() })
                    }, l._getConfig = function(i) { return i = r({}, this.constructor.Default, t(this._element).data(), i), x.typeCheckConfig(e, i, this.constructor.DefaultType), i }, l._getMenuElement = function() {
                        if (!this._menu) {
                            var e = a._getParentFromElement(this._element);
                            this._menu = t(e).find(g)[0]
                        }
                        return this._menu
                    }, l._getPlacement = function() {
                        var e = t(this._element).parent(),
                            i = "bottom-start";
                        return e.hasClass(p) ? (i = "top-start", t(this._menu).hasClass(f) && (i = "top-end")) : e.hasClass("dropright") ? i = "right-start" : e.hasClass("dropleft") ? i = "left-start" : t(this._menu).hasClass(f) && (i = "bottom-end"), i
                    }, l._detectNavbar = function() { return t(this._element).closest(".navbar").length > 0 }, l._getPopperConfig = function() {
                        var t = this,
                            e = {};
                        return "function" == typeof this._config.offset ? e.fn = function(e) { return e.offsets = r({}, e.offsets, t._config.offset(e.offsets) || {}), e } : e.offset = this._config.offset, { placement: this._getPlacement(), modifiers: { offset: e, flip: { enabled: this._config.flip }, preventOverflow: { boundariesElement: this._config.boundary } } }
                    }, a._jQueryInterface = function(e) {
                        return this.each(function() {
                            var i = t(this).data(n);
                            if (i || (i = new a(this, "object" == typeof e ? e : null), t(this).data(n, i)), "string" == typeof e) {
                                if (void 0 === i[e]) throw new TypeError('No method named "' + e + '"');
                                i[e]()
                            }
                        })
                    }, a._clearMenus = function(e) {
                        if (!e || 3 !== e.which && ("keyup" !== e.type || 9 === e.which))
                            for (var i = t.makeArray(t(m)), s = 0; s < i.length; s++) {
                                var r = a._getParentFromElement(i[s]),
                                    o = t(i[s]).data(n),
                                    l = { relatedTarget: i[s] };
                                if (o) {
                                    var h = o._menu;
                                    if (t(r).hasClass(c) && !(e && ("click" === e.type && /input|textarea/i.test(e.target.tagName) || "keyup" === e.type && 9 === e.which) && t.contains(r, e.target))) {
                                        var u = t.Event(d.HIDE, l);
                                        t(r).trigger(u), u.isDefaultPrevented() || ("ontouchstart" in document.documentElement && t("body").children().off("mouseover", null, t.noop), i[s].setAttribute("aria-expanded", "false"), t(h).removeClass(c), t(r).removeClass(c).trigger(t.Event(d.HIDDEN, l)))
                                    }
                                }
                            }
                    }, a._getParentFromElement = function(e) { var i, n = x.getSelectorFromElement(e); return n && (i = t(n)[0]), i || e.parentNode }, a._dataApiKeydownHandler = function(e) {
                        if ((/input|textarea/i.test(e.target.tagName) ? !(32 === e.which || 27 !== e.which && (40 !== e.which && 38 !== e.which || t(e.target).closest(g).length)) : h.test(e.which)) && (e.preventDefault(), e.stopPropagation(), !this.disabled && !t(this).hasClass(u))) {
                            var i = a._getParentFromElement(this),
                                n = t(i).hasClass(c);
                            if ((n || 27 === e.which && 32 === e.which) && (!n || 27 !== e.which && 32 !== e.which)) {
                                var s = t(i).find(".dropdown-menu .dropdown-item:not(.disabled)").get();
                                if (0 !== s.length) {
                                    var r = s.indexOf(e.target);
                                    38 === e.which && r > 0 && r--, 40 === e.which && r < s.length - 1 && r++, r < 0 && (r = 0), s[r].focus()
                                }
                            } else {
                                if (27 === e.which) {
                                    var o = t(i).find(m)[0];
                                    t(o).trigger("focus")
                                }
                                t(this).trigger("click")
                            }
                        }
                    }, s(a, null, [{ key: "VERSION", get: function() { return "4.0.0" } }, { key: "Default", get: function() { return v } }, { key: "DefaultType", get: function() { return y } }]), a
                }();
            return t(document).on(d.KEYDOWN_DATA_API, m, w._dataApiKeydownHandler).on(d.KEYDOWN_DATA_API, g, w._dataApiKeydownHandler).on(d.CLICK_DATA_API + " " + d.KEYUP_DATA_API, w._clearMenus).on(d.CLICK_DATA_API, m, function(e) { e.preventDefault(), e.stopPropagation(), w._jQueryInterface.call(t(this), "toggle") }).on(d.CLICK_DATA_API, ".dropdown form", function(t) { t.stopPropagation() }), t.fn[e] = w._jQueryInterface, t.fn[e].Constructor = w, t.fn[e].noConflict = function() { return t.fn[e] = l, w._jQueryInterface }, w
        }(e),
        M = function(t) {
            var e = "bs.modal",
                i = "." + e,
                n = t.fn.modal,
                o = { backdrop: !0, keyboard: !0, focus: !0, show: !0 },
                a = { backdrop: "(boolean|string)", keyboard: "boolean", focus: "boolean", show: "boolean" },
                l = { HIDE: "hide" + i, HIDDEN: "hidden" + i, SHOW: "show" + i, SHOWN: "shown" + i, FOCUSIN: "focusin" + i, RESIZE: "resize" + i, CLICK_DISMISS: "click.dismiss" + i, KEYDOWN_DISMISS: "keydown.dismiss" + i, MOUSEUP_DISMISS: "mouseup.dismiss" + i, MOUSEDOWN_DISMISS: "mousedown.dismiss" + i, CLICK_DATA_API: "click" + i + ".data-api" },
                h = "modal-open",
                d = "fade",
                u = "show",
                c = { DIALOG: ".modal-dialog", DATA_TOGGLE: '[data-toggle="modal"]', DATA_DISMISS: '[data-dismiss="modal"]', FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", STICKY_CONTENT: ".sticky-top", NAVBAR_TOGGLER: ".navbar-toggler" },
                p = function() {
                    function n(e, i) { this._config = this._getConfig(i), this._element = e, this._dialog = t(e).find(c.DIALOG)[0], this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._originalBodyPadding = 0, this._scrollbarWidth = 0 }
                    var p = n.prototype;
                    return p.toggle = function(t) { return this._isShown ? this.hide() : this.show(t) }, p.show = function(e) {
                        var i = this;
                        if (!this._isTransitioning && !this._isShown) {
                            x.supportsTransitionEnd() && t(this._element).hasClass(d) && (this._isTransitioning = !0);
                            var n = t.Event(l.SHOW, { relatedTarget: e });
                            t(this._element).trigger(n), this._isShown || n.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), t(document.body).addClass(h), this._setEscapeEvent(), this._setResizeEvent(), t(this._element).on(l.CLICK_DISMISS, c.DATA_DISMISS, function(t) { return i.hide(t) }), t(this._dialog).on(l.MOUSEDOWN_DISMISS, function() { t(i._element).one(l.MOUSEUP_DISMISS, function(e) { t(e.target).is(i._element) && (i._ignoreBackdropClick = !0) }) }), this._showBackdrop(function() { return i._showElement(e) }))
                        }
                    }, p.hide = function(e) {
                        var i = this;
                        if (e && e.preventDefault(), !this._isTransitioning && this._isShown) {
                            var n = t.Event(l.HIDE);
                            if (t(this._element).trigger(n), this._isShown && !n.isDefaultPrevented()) {
                                this._isShown = !1;
                                var s = x.supportsTransitionEnd() && t(this._element).hasClass(d);
                                s && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), t(document).off(l.FOCUSIN), t(this._element).removeClass(u), t(this._element).off(l.CLICK_DISMISS), t(this._dialog).off(l.MOUSEDOWN_DISMISS), s ? t(this._element).one(x.TRANSITION_END, function(t) { return i._hideModal(t) }).emulateTransitionEnd(300) : this._hideModal()
                            }
                        }
                    }, p.dispose = function() { t.removeData(this._element, e), t(window, document, this._element, this._backdrop).off(i), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._scrollbarWidth = null }, p.handleUpdate = function() { this._adjustDialog() }, p._getConfig = function(t) { return t = r({}, o, t), x.typeCheckConfig("modal", t, a), t }, p._showElement = function(e) {
                        var i = this,
                            n = x.supportsTransitionEnd() && t(this._element).hasClass(d);
                        this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.scrollTop = 0, n && x.reflow(this._element), t(this._element).addClass(u), this._config.focus && this._enforceFocus();
                        var s = t.Event(l.SHOWN, { relatedTarget: e }),
                            r = function() { i._config.focus && i._element.focus(), i._isTransitioning = !1, t(i._element).trigger(s) };
                        n ? t(this._dialog).one(x.TRANSITION_END, r).emulateTransitionEnd(300) : r()
                    }, p._enforceFocus = function() {
                        var e = this;
                        t(document).off(l.FOCUSIN).on(l.FOCUSIN, function(i) { document !== i.target && e._element !== i.target && 0 === t(e._element).has(i.target).length && e._element.focus() })
                    }, p._setEscapeEvent = function() {
                        var e = this;
                        this._isShown && this._config.keyboard ? t(this._element).on(l.KEYDOWN_DISMISS, function(t) { 27 === t.which && (t.preventDefault(), e.hide()) }) : this._isShown || t(this._element).off(l.KEYDOWN_DISMISS)
                    }, p._setResizeEvent = function() {
                        var e = this;
                        this._isShown ? t(window).on(l.RESIZE, function(t) { return e.handleUpdate(t) }) : t(window).off(l.RESIZE)
                    }, p._hideModal = function() {
                        var e = this;
                        this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._isTransitioning = !1, this._showBackdrop(function() { t(document.body).removeClass(h), e._resetAdjustments(), e._resetScrollbar(), t(e._element).trigger(l.HIDDEN) })
                    }, p._removeBackdrop = function() { this._backdrop && (t(this._backdrop).remove(), this._backdrop = null) }, p._showBackdrop = function(e) {
                        var i = this,
                            n = t(this._element).hasClass(d) ? d : "";
                        if (this._isShown && this._config.backdrop) {
                            var s = x.supportsTransitionEnd() && n;
                            if (this._backdrop = document.createElement("div"), this._backdrop.className = "modal-backdrop", n && t(this._backdrop).addClass(n), t(this._backdrop).appendTo(document.body), t(this._element).on(l.CLICK_DISMISS, function(t) { i._ignoreBackdropClick ? i._ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" === i._config.backdrop ? i._element.focus() : i.hide()) }), s && x.reflow(this._backdrop), t(this._backdrop).addClass(u), !e) return;
                            if (!s) return void e();
                            t(this._backdrop).one(x.TRANSITION_END, e).emulateTransitionEnd(150)
                        } else if (!this._isShown && this._backdrop) {
                            t(this._backdrop).removeClass(u);
                            var r = function() { i._removeBackdrop(), e && e() };
                            x.supportsTransitionEnd() && t(this._element).hasClass(d) ? t(this._backdrop).one(x.TRANSITION_END, r).emulateTransitionEnd(150) : r()
                        } else e && e()
                    }, p._adjustDialog = function() { var t = this._element.scrollHeight > document.documentElement.clientHeight;!this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px") }, p._resetAdjustments = function() { this._element.style.paddingLeft = "", this._element.style.paddingRight = "" }, p._checkScrollbar = function() {
                        var t = document.body.getBoundingClientRect();
                        this._isBodyOverflowing = t.left + t.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
                    }, p._setScrollbar = function() {
                        var e = this;
                        if (this._isBodyOverflowing) {
                            t(c.FIXED_CONTENT).each(function(i, n) {
                                var s = t(n)[0].style.paddingRight,
                                    r = t(n).css("padding-right");
                                t(n).data("padding-right", s).css("padding-right", parseFloat(r) + e._scrollbarWidth + "px")
                            }), t(c.STICKY_CONTENT).each(function(i, n) {
                                var s = t(n)[0].style.marginRight,
                                    r = t(n).css("margin-right");
                                t(n).data("margin-right", s).css("margin-right", parseFloat(r) - e._scrollbarWidth + "px")
                            }), t(c.NAVBAR_TOGGLER).each(function(i, n) {
                                var s = t(n)[0].style.marginRight,
                                    r = t(n).css("margin-right");
                                t(n).data("margin-right", s).css("margin-right", parseFloat(r) + e._scrollbarWidth + "px")
                            });
                            var i = document.body.style.paddingRight,
                                n = t("body").css("padding-right");
                            t("body").data("padding-right", i).css("padding-right", parseFloat(n) + this._scrollbarWidth + "px")
                        }
                    }, p._resetScrollbar = function() {
                        t(c.FIXED_CONTENT).each(function(e, i) {
                            var n = t(i).data("padding-right");
                            void 0 !== n && t(i).css("padding-right", n).removeData("padding-right")
                        }), t(c.STICKY_CONTENT + ", " + c.NAVBAR_TOGGLER).each(function(e, i) {
                            var n = t(i).data("margin-right");
                            void 0 !== n && t(i).css("margin-right", n).removeData("margin-right")
                        });
                        var e = t("body").data("padding-right");
                        void 0 !== e && t("body").css("padding-right", e).removeData("padding-right")
                    }, p._getScrollbarWidth = function() {
                        var t = document.createElement("div");
                        t.className = "modal-scrollbar-measure", document.body.appendChild(t);
                        var e = t.getBoundingClientRect().width - t.clientWidth;
                        return document.body.removeChild(t), e
                    }, n._jQueryInterface = function(i, s) {
                        return this.each(function() {
                            var o = t(this).data(e),
                                a = r({}, n.Default, t(this).data(), "object" == typeof i && i);
                            if (o || (o = new n(this, a), t(this).data(e, o)), "string" == typeof i) {
                                if (void 0 === o[i]) throw new TypeError('No method named "' + i + '"');
                                o[i](s)
                            } else a.show && o.show(s)
                        })
                    }, s(n, null, [{ key: "VERSION", get: function() { return "4.0.0" } }, { key: "Default", get: function() { return o } }]), n
                }();
            return t(document).on(l.CLICK_DATA_API, c.DATA_TOGGLE, function(i) {
                var n, s = this,
                    o = x.getSelectorFromElement(this);
                o && (n = t(o)[0]);
                var a = t(n).data(e) ? "toggle" : r({}, t(n).data(), t(this).data());
                "A" !== this.tagName && "AREA" !== this.tagName || i.preventDefault();
                var h = t(n).one(l.SHOW, function(e) { e.isDefaultPrevented() || h.one(l.HIDDEN, function() { t(s).is(":visible") && s.focus() }) });
                p._jQueryInterface.call(t(n), a, this)
            }), t.fn.modal = p._jQueryInterface, t.fn.modal.Constructor = p, t.fn.modal.noConflict = function() { return t.fn.modal = n, p._jQueryInterface }, p
        }(e),
        O = function(t) {
            var e = "tooltip",
                n = "bs.tooltip",
                o = "." + n,
                a = t.fn[e],
                l = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
                h = { animation: "boolean", template: "string", title: "(string|element|function)", trigger: "string", delay: "(number|object)", html: "boolean", selector: "(string|boolean)", placement: "(string|function)", offset: "(number|string)", container: "(string|element|boolean)", fallbackPlacement: "(string|array)", boundary: "(string|element)" },
                d = { AUTO: "auto", TOP: "top", RIGHT: "right", BOTTOM: "bottom", LEFT: "left" },
                u = { animation: !0, template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>', trigger: "hover focus", title: "", delay: 0, html: !1, selector: !1, placement: "top", offset: 0, container: !1, fallbackPlacement: "flip", boundary: "scrollParent" },
                c = "show",
                p = "out",
                f = { HIDE: "hide" + o, HIDDEN: "hidden" + o, SHOW: "show" + o, SHOWN: "shown" + o, INSERTED: "inserted" + o, CLICK: "click" + o, FOCUSIN: "focusin" + o, FOCUSOUT: "focusout" + o, MOUSEENTER: "mouseenter" + o, MOUSELEAVE: "mouseleave" + o },
                m = "fade",
                g = "show",
                v = "hover",
                y = "focus",
                w = function() {
                    function a(t, e) {
                        if (void 0 === i) throw new TypeError("Bootstrap tooltips require Popper.js (https://popper.js.org)");
                        this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = t, this.config = this._getConfig(e), this.tip = null, this._setListeners()
                    }
                    var w = a.prototype;
                    return w.enable = function() { this._isEnabled = !0 }, w.disable = function() { this._isEnabled = !1 }, w.toggleEnabled = function() { this._isEnabled = !this._isEnabled }, w.toggle = function(e) {
                        if (this._isEnabled)
                            if (e) {
                                var i = this.constructor.DATA_KEY,
                                    n = t(e.currentTarget).data(i);
                                n || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(i, n)), n._activeTrigger.click = !n._activeTrigger.click, n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n)
                            } else {
                                if (t(this.getTipElement()).hasClass(g)) return void this._leave(null, this);
                                this._enter(null, this)
                            }
                    }, w.dispose = function() { clearTimeout(this._timeout), t.removeData(this.element, this.constructor.DATA_KEY), t(this.element).off(this.constructor.EVENT_KEY), t(this.element).closest(".modal").off("hide.bs.modal"), this.tip && t(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, null !== this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null }, w.show = function() {
                        var e = this;
                        if ("none" === t(this.element).css("display")) throw new Error("Please use show on visible elements");
                        var n = t.Event(this.constructor.Event.SHOW);
                        if (this.isWithContent() && this._isEnabled) {
                            t(this.element).trigger(n);
                            var s = t.contains(this.element.ownerDocument.documentElement, this.element);
                            if (n.isDefaultPrevented() || !s) return;
                            var r = this.getTipElement(),
                                o = x.getUID(this.constructor.NAME);
                            r.setAttribute("id", o), this.element.setAttribute("aria-describedby", o), this.setContent(), this.config.animation && t(r).addClass(m);
                            var l = "function" == typeof this.config.placement ? this.config.placement.call(this, r, this.element) : this.config.placement,
                                h = this._getAttachment(l);
                            this.addAttachmentClass(h);
                            var d = !1 === this.config.container ? document.body : t(this.config.container);
                            t(r).data(this.constructor.DATA_KEY, this), t.contains(this.element.ownerDocument.documentElement, this.tip) || t(r).appendTo(d), t(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new i(this.element, r, { placement: h, modifiers: { offset: { offset: this.config.offset }, flip: { behavior: this.config.fallbackPlacement }, arrow: { element: ".arrow" }, preventOverflow: { boundariesElement: this.config.boundary } }, onCreate: function(t) { t.originalPlacement !== t.placement && e._handlePopperPlacementChange(t) }, onUpdate: function(t) { e._handlePopperPlacementChange(t) } }), t(r).addClass(g), "ontouchstart" in document.documentElement && t("body").children().on("mouseover", null, t.noop);
                            var u = function() {
                                e.config.animation && e._fixTransition();
                                var i = e._hoverState;
                                e._hoverState = null, t(e.element).trigger(e.constructor.Event.SHOWN), i === p && e._leave(null, e)
                            };
                            x.supportsTransitionEnd() && t(this.tip).hasClass(m) ? t(this.tip).one(x.TRANSITION_END, u).emulateTransitionEnd(a._TRANSITION_DURATION) : u()
                        }
                    }, w.hide = function(e) {
                        var i = this,
                            n = this.getTipElement(),
                            s = t.Event(this.constructor.Event.HIDE),
                            r = function() { i._hoverState !== c && n.parentNode && n.parentNode.removeChild(n), i._cleanTipClass(), i.element.removeAttribute("aria-describedby"), t(i.element).trigger(i.constructor.Event.HIDDEN), null !== i._popper && i._popper.destroy(), e && e() };
                        t(this.element).trigger(s), s.isDefaultPrevented() || (t(n).removeClass(g), "ontouchstart" in document.documentElement && t("body").children().off("mouseover", null, t.noop), this._activeTrigger.click = !1, this._activeTrigger[y] = !1, this._activeTrigger[v] = !1, x.supportsTransitionEnd() && t(this.tip).hasClass(m) ? t(n).one(x.TRANSITION_END, r).emulateTransitionEnd(150) : r(), this._hoverState = "")
                    }, w.update = function() { null !== this._popper && this._popper.scheduleUpdate() }, w.isWithContent = function() { return Boolean(this.getTitle()) }, w.addAttachmentClass = function(e) { t(this.getTipElement()).addClass("bs-tooltip-" + e) }, w.getTipElement = function() { return this.tip = this.tip || t(this.config.template)[0], this.tip }, w.setContent = function() {
                        var e = t(this.getTipElement());
                        this.setElementContent(e.find(".tooltip-inner"), this.getTitle()), e.removeClass(m + " " + g)
                    }, w.setElementContent = function(e, i) { var n = this.config.html; "object" == typeof i && (i.nodeType || i.jquery) ? n ? t(i).parent().is(e) || e.empty().append(i) : e.text(t(i).text()) : e[n ? "html" : "text"](i) }, w.getTitle = function() { var t = this.element.getAttribute("data-original-title"); return t || (t = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), t }, w._getAttachment = function(t) { return d[t.toUpperCase()] }, w._setListeners = function() {
                        var e = this;
                        this.config.trigger.split(" ").forEach(function(i) {
                            if ("click" === i) t(e.element).on(e.constructor.Event.CLICK, e.config.selector, function(t) { return e.toggle(t) });
                            else if ("manual" !== i) {
                                var n = i === v ? e.constructor.Event.MOUSEENTER : e.constructor.Event.FOCUSIN,
                                    s = i === v ? e.constructor.Event.MOUSELEAVE : e.constructor.Event.FOCUSOUT;
                                t(e.element).on(n, e.config.selector, function(t) { return e._enter(t) }).on(s, e.config.selector, function(t) { return e._leave(t) })
                            }
                            t(e.element).closest(".modal").on("hide.bs.modal", function() { return e.hide() })
                        }), this.config.selector ? this.config = r({}, this.config, { trigger: "manual", selector: "" }) : this._fixTitle()
                    }, w._fixTitle = function() {
                        var t = typeof this.element.getAttribute("data-original-title");
                        (this.element.getAttribute("title") || "string" !== t) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
                    }, w._enter = function(e, i) {
                        var n = this.constructor.DATA_KEY;
                        (i = i || t(e.currentTarget).data(n)) || (i = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(n, i)), e && (i._activeTrigger["focusin" === e.type ? y : v] = !0), t(i.getTipElement()).hasClass(g) || i._hoverState === c ? i._hoverState = c : (clearTimeout(i._timeout), i._hoverState = c, i.config.delay && i.config.delay.show ? i._timeout = setTimeout(function() { i._hoverState === c && i.show() }, i.config.delay.show) : i.show())
                    }, w._leave = function(e, i) {
                        var n = this.constructor.DATA_KEY;
                        (i = i || t(e.currentTarget).data(n)) || (i = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(n, i)), e && (i._activeTrigger["focusout" === e.type ? y : v] = !1), i._isWithActiveTrigger() || (clearTimeout(i._timeout), i._hoverState = p, i.config.delay && i.config.delay.hide ? i._timeout = setTimeout(function() { i._hoverState === p && i.hide() }, i.config.delay.hide) : i.hide())
                    }, w._isWithActiveTrigger = function() {
                        for (var t in this._activeTrigger)
                            if (this._activeTrigger[t]) return !0;
                        return !1
                    }, w._getConfig = function(i) { return "number" == typeof(i = r({}, this.constructor.Default, t(this.element).data(), i)).delay && (i.delay = { show: i.delay, hide: i.delay }), "number" == typeof i.title && (i.title = i.title.toString()), "number" == typeof i.content && (i.content = i.content.toString()), x.typeCheckConfig(e, i, this.constructor.DefaultType), i }, w._getDelegateConfig = function() {
                        var t = {};
                        if (this.config)
                            for (var e in this.config) this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
                        return t
                    }, w._cleanTipClass = function() {
                        var e = t(this.getTipElement()),
                            i = e.attr("class").match(l);
                        null !== i && i.length > 0 && e.removeClass(i.join(""))
                    }, w._handlePopperPlacementChange = function(t) { this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(t.placement)) }, w._fixTransition = function() {
                        var e = this.getTipElement(),
                            i = this.config.animation;
                        null === e.getAttribute("x-placement") && (t(e).removeClass(m), this.config.animation = !1, this.hide(), this.show(), this.config.animation = i)
                    }, a._jQueryInterface = function(e) {
                        return this.each(function() {
                            var i = t(this).data(n),
                                s = "object" == typeof e && e;
                            if ((i || !/dispose|hide/.test(e)) && (i || (i = new a(this, s), t(this).data(n, i)), "string" == typeof e)) {
                                if (void 0 === i[e]) throw new TypeError('No method named "' + e + '"');
                                i[e]()
                            }
                        })
                    }, s(a, null, [{ key: "VERSION", get: function() { return "4.0.0" } }, { key: "Default", get: function() { return u } }, { key: "NAME", get: function() { return e } }, { key: "DATA_KEY", get: function() { return n } }, { key: "Event", get: function() { return f } }, { key: "EVENT_KEY", get: function() { return o } }, { key: "DefaultType", get: function() { return h } }]), a
                }();
            return t.fn[e] = w._jQueryInterface, t.fn[e].Constructor = w, t.fn[e].noConflict = function() { return t.fn[e] = a, w._jQueryInterface }, w
        }(e),
        P = function(t) {
            var e = "popover",
                i = "bs.popover",
                n = "." + i,
                o = t.fn[e],
                a = new RegExp("(^|\\s)bs-popover\\S+", "g"),
                l = r({}, O.Default, { placement: "right", trigger: "click", content: "", template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>' }),
                h = r({}, O.DefaultType, { content: "(string|element|function)" }),
                d = { HIDE: "hide" + n, HIDDEN: "hidden" + n, SHOW: "show" + n, SHOWN: "shown" + n, INSERTED: "inserted" + n, CLICK: "click" + n, FOCUSIN: "focusin" + n, FOCUSOUT: "focusout" + n, MOUSEENTER: "mouseenter" + n, MOUSELEAVE: "mouseleave" + n },
                u = function(r) {
                    var o, u;

                    function c() { return r.apply(this, arguments) || this }
                    u = r, (o = c).prototype = Object.create(u.prototype), o.prototype.constructor = o, o.__proto__ = u;
                    var p = c.prototype;
                    return p.isWithContent = function() { return this.getTitle() || this._getContent() }, p.addAttachmentClass = function(e) { t(this.getTipElement()).addClass("bs-popover-" + e) }, p.getTipElement = function() { return this.tip = this.tip || t(this.config.template)[0], this.tip }, p.setContent = function() {
                        var e = t(this.getTipElement());
                        this.setElementContent(e.find(".popover-header"), this.getTitle());
                        var i = this._getContent();
                        "function" == typeof i && (i = i.call(this.element)), this.setElementContent(e.find(".popover-body"), i), e.removeClass("fade show")
                    }, p._getContent = function() { return this.element.getAttribute("data-content") || this.config.content }, p._cleanTipClass = function() {
                        var e = t(this.getTipElement()),
                            i = e.attr("class").match(a);
                        null !== i && i.length > 0 && e.removeClass(i.join(""))
                    }, c._jQueryInterface = function(e) {
                        return this.each(function() {
                            var n = t(this).data(i),
                                s = "object" == typeof e ? e : null;
                            if ((n || !/destroy|hide/.test(e)) && (n || (n = new c(this, s), t(this).data(i, n)), "string" == typeof e)) {
                                if (void 0 === n[e]) throw new TypeError('No method named "' + e + '"');
                                n[e]()
                            }
                        })
                    }, s(c, null, [{ key: "VERSION", get: function() { return "4.0.0" } }, { key: "Default", get: function() { return l } }, { key: "NAME", get: function() { return e } }, { key: "DATA_KEY", get: function() { return i } }, { key: "Event", get: function() { return d } }, { key: "EVENT_KEY", get: function() { return n } }, { key: "DefaultType", get: function() { return h } }]), c
                }(O);
            return t.fn[e] = u._jQueryInterface, t.fn[e].Constructor = u, t.fn[e].noConflict = function() { return t.fn[e] = o, u._jQueryInterface }, u
        }(e),
        z = function(t) {
            var e = "scrollspy",
                i = "bs.scrollspy",
                n = "." + i,
                o = t.fn[e],
                a = { offset: 10, method: "auto", target: "" },
                l = { offset: "number", method: "string", target: "(string|element)" },
                h = { ACTIVATE: "activate" + n, SCROLL: "scroll" + n, LOAD_DATA_API: "load" + n + ".data-api" },
                d = "active",
                u = { DATA_SPY: '[data-spy="scroll"]', ACTIVE: ".active", NAV_LIST_GROUP: ".nav, .list-group", NAV_LINKS: ".nav-link", NAV_ITEMS: ".nav-item", LIST_ITEMS: ".list-group-item", DROPDOWN: ".dropdown", DROPDOWN_ITEMS: ".dropdown-item", DROPDOWN_TOGGLE: ".dropdown-toggle" },
                c = "position",
                p = function() {
                    function o(e, i) {
                        var n = this;
                        this._element = e, this._scrollElement = "BODY" === e.tagName ? window : e, this._config = this._getConfig(i), this._selector = this._config.target + " " + u.NAV_LINKS + "," + this._config.target + " " + u.LIST_ITEMS + "," + this._config.target + " " + u.DROPDOWN_ITEMS, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, t(this._scrollElement).on(h.SCROLL, function(t) { return n._process(t) }), this.refresh(), this._process()
                    }
                    var p = o.prototype;
                    return p.refresh = function() {
                        var e = this,
                            i = this._scrollElement === this._scrollElement.window ? "offset" : c,
                            n = "auto" === this._config.method ? i : this._config.method,
                            s = n === c ? this._getScrollTop() : 0;
                        this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), t.makeArray(t(this._selector)).map(function(e) { var i, r = x.getSelectorFromElement(e); if (r && (i = t(r)[0]), i) { var o = i.getBoundingClientRect(); if (o.width || o.height) return [t(i)[n]().top + s, r] } return null }).filter(function(t) { return t }).sort(function(t, e) { return t[0] - e[0] }).forEach(function(t) { e._offsets.push(t[0]), e._targets.push(t[1]) })
                    }, p.dispose = function() { t.removeData(this._element, i), t(this._scrollElement).off(n), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null }, p._getConfig = function(i) {
                        if ("string" != typeof(i = r({}, a, i)).target) {
                            var n = t(i.target).attr("id");
                            n || (n = x.getUID(e), t(i.target).attr("id", n)), i.target = "#" + n
                        }
                        return x.typeCheckConfig(e, i, l), i
                    }, p._getScrollTop = function() { return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop }, p._getScrollHeight = function() { return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight) }, p._getOffsetHeight = function() { return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height }, p._process = function() {
                        var t = this._getScrollTop() + this._config.offset,
                            e = this._getScrollHeight(),
                            i = this._config.offset + e - this._getOffsetHeight();
                        if (this._scrollHeight !== e && this.refresh(), t >= i) {
                            var n = this._targets[this._targets.length - 1];
                            this._activeTarget !== n && this._activate(n)
                        } else { if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear(); for (var s = this._offsets.length; s--;) this._activeTarget !== this._targets[s] && t >= this._offsets[s] && (void 0 === this._offsets[s + 1] || t < this._offsets[s + 1]) && this._activate(this._targets[s]) }
                    }, p._activate = function(e) {
                        this._activeTarget = e, this._clear();
                        var i = this._selector.split(",");
                        i = i.map(function(t) { return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]' });
                        var n = t(i.join(","));
                        n.hasClass("dropdown-item") ? (n.closest(u.DROPDOWN).find(u.DROPDOWN_TOGGLE).addClass(d), n.addClass(d)) : (n.addClass(d), n.parents(u.NAV_LIST_GROUP).prev(u.NAV_LINKS + ", " + u.LIST_ITEMS).addClass(d), n.parents(u.NAV_LIST_GROUP).prev(u.NAV_ITEMS).children(u.NAV_LINKS).addClass(d)), t(this._scrollElement).trigger(h.ACTIVATE, { relatedTarget: e })
                    }, p._clear = function() { t(this._selector).filter(u.ACTIVE).removeClass(d) }, o._jQueryInterface = function(e) {
                        return this.each(function() {
                            var n = t(this).data(i);
                            if (n || (n = new o(this, "object" == typeof e && e), t(this).data(i, n)), "string" == typeof e) {
                                if (void 0 === n[e]) throw new TypeError('No method named "' + e + '"');
                                n[e]()
                            }
                        })
                    }, s(o, null, [{ key: "VERSION", get: function() { return "4.0.0" } }, { key: "Default", get: function() { return a } }]), o
                }();
            return t(window).on(h.LOAD_DATA_API, function() {
                for (var e = t.makeArray(t(u.DATA_SPY)), i = e.length; i--;) {
                    var n = t(e[i]);
                    p._jQueryInterface.call(n, n.data())
                }
            }), t.fn[e] = p._jQueryInterface, t.fn[e].Constructor = p, t.fn[e].noConflict = function() { return t.fn[e] = o, p._jQueryInterface }, p
        }(e),
        D = function(t) {
            var e = "bs.tab",
                i = "." + e,
                n = t.fn.tab,
                r = { HIDE: "hide" + i, HIDDEN: "hidden" + i, SHOW: "show" + i, SHOWN: "shown" + i, CLICK_DATA_API: "click.bs.tab.data-api" },
                o = "active",
                a = "show",
                l = ".active",
                h = "> li > .active",
                d = function() {
                    function i(t) { this._element = t }
                    var n = i.prototype;
                    return n.show = function() {
                        var e = this;
                        if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && t(this._element).hasClass(o) || t(this._element).hasClass("disabled"))) {
                            var i, n, s = t(this._element).closest(".nav, .list-group")[0],
                                a = x.getSelectorFromElement(this._element);
                            if (s) {
                                var d = "UL" === s.nodeName ? h : l;
                                n = (n = t.makeArray(t(s).find(d)))[n.length - 1]
                            }
                            var u = t.Event(r.HIDE, { relatedTarget: this._element }),
                                c = t.Event(r.SHOW, { relatedTarget: n });
                            if (n && t(n).trigger(u), t(this._element).trigger(c), !c.isDefaultPrevented() && !u.isDefaultPrevented()) {
                                a && (i = t(a)[0]), this._activate(this._element, s);
                                var p = function() {
                                    var i = t.Event(r.HIDDEN, { relatedTarget: e._element }),
                                        s = t.Event(r.SHOWN, { relatedTarget: n });
                                    t(n).trigger(i), t(e._element).trigger(s)
                                };
                                i ? this._activate(i, i.parentNode, p) : p()
                            }
                        }
                    }, n.dispose = function() { t.removeData(this._element, e), this._element = null }, n._activate = function(e, i, n) {
                        var s = this,
                            r = ("UL" === i.nodeName ? t(i).find(h) : t(i).children(l))[0],
                            o = n && x.supportsTransitionEnd() && r && t(r).hasClass("fade"),
                            a = function() { return s._transitionComplete(e, r, n) };
                        r && o ? t(r).one(x.TRANSITION_END, a).emulateTransitionEnd(150) : a()
                    }, n._transitionComplete = function(e, i, n) {
                        if (i) {
                            t(i).removeClass(a + " " + o);
                            var s = t(i.parentNode).find("> .dropdown-menu .active")[0];
                            s && t(s).removeClass(o), "tab" === i.getAttribute("role") && i.setAttribute("aria-selected", !1)
                        }
                        if (t(e).addClass(o), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !0), x.reflow(e), t(e).addClass(a), e.parentNode && t(e.parentNode).hasClass("dropdown-menu")) {
                            var r = t(e).closest(".dropdown")[0];
                            r && t(r).find(".dropdown-toggle").addClass(o), e.setAttribute("aria-expanded", !0)
                        }
                        n && n()
                    }, i._jQueryInterface = function(n) {
                        return this.each(function() {
                            var s = t(this),
                                r = s.data(e);
                            if (r || (r = new i(this), s.data(e, r)), "string" == typeof n) {
                                if (void 0 === r[n]) throw new TypeError('No method named "' + n + '"');
                                r[n]()
                            }
                        })
                    }, s(i, null, [{ key: "VERSION", get: function() { return "4.0.0" } }]), i
                }();
            return t(document).on(r.CLICK_DATA_API, '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', function(e) { e.preventDefault(), d._jQueryInterface.call(t(this), "show") }), t.fn.tab = d._jQueryInterface, t.fn.tab.Constructor = d, t.fn.tab.noConflict = function() { return t.fn.tab = n, d._jQueryInterface }, d
        }(e);
    ! function(t) { if (void 0 === t) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript."); var e = t.fn.jquery.split(" ")[0].split("."); if (e[0] < 2 && e[1] < 9 || 1 === e[0] && 9 === e[1] && e[2] < 1 || e[0] >= 4) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0") }(e), t.Util = x, t.Alert = E, t.Button = C, t.Carousel = k, t.Collapse = I, t.Dropdown = A, t.Modal = M, t.Popover = P, t.Scrollspy = z, t.Tab = D, t.Tooltip = O, Object.defineProperty(t, "__esModule", { value: !0 })
}),
function(t, e) { "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.Popper = e() }(this, function() {
    "use strict";

    function t(t) { return t && "[object Function]" === {}.toString.call(t) }

    function e(t, e) { if (1 !== t.nodeType) return []; var i = getComputedStyle(t, null); return e ? i[e] : i }

    function i(t) { return "HTML" === t.nodeName ? t : t.parentNode || t.host }

    function n(t) {
        if (!t) return document.body;
        switch (t.nodeName) {
            case "HTML":
            case "BODY":
                return t.ownerDocument.body;
            case "#document":
                return t.body
        }
        var s = e(t),
            r = s.overflow,
            o = s.overflowX,
            a = s.overflowY;
        return /(auto|scroll)/.test(r + a + o) ? t : n(i(t))
    }

    function s(t) {
        var i = t && t.offsetParent,
            n = i && i.nodeName;
        return n && "BODY" !== n && "HTML" !== n ? -1 !== ["TD", "TABLE"].indexOf(i.nodeName) && "static" === e(i, "position") ? s(i) : i : t ? t.ownerDocument.documentElement : document.documentElement
    }

    function r(t) { return null === t.parentNode ? t : r(t.parentNode) }

    function o(t, e) {
        if (!(t && t.nodeType && e && e.nodeType)) return document.documentElement;
        var i = t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_FOLLOWING,
            n = i ? t : e,
            a = i ? e : t,
            l = document.createRange();
        l.setStart(n, 0), l.setEnd(a, 0);
        var h = l.commonAncestorContainer;
        if (t !== h && e !== h || n.contains(a)) return function(t) { var e = t.nodeName; return "BODY" !== e && ("HTML" === e || s(t.firstElementChild) === t) }(h) ? h : s(h);
        var d = r(t);
        return d.host ? o(d.host, e) : o(t, r(e).host)
    }

    function a(t) {
        var e = "top" === (1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "top") ? "scrollTop" : "scrollLeft",
            i = t.nodeName;
        if ("BODY" === i || "HTML" === i) { var n = t.ownerDocument.documentElement; return (t.ownerDocument.scrollingElement || n)[e] }
        return t[e]
    }

    function l(t, e) {
        var i = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
            n = a(e, "top"),
            s = a(e, "left"),
            r = i ? -1 : 1;
        return t.top += n * r, t.bottom += n * r, t.left += s * r, t.right += s * r, t
    }

    function h(t, e) {
        var i = "x" === e ? "Left" : "Top",
            n = "Left" == i ? "Right" : "Bottom";
        return parseFloat(t["border" + i + "Width"], 10) + parseFloat(t["border" + n + "Width"], 10)
    }

    function d(t, e, i, n) { return R(e["offset" + t], e["scroll" + t], i["client" + t], i["offset" + t], i["scroll" + t], V() ? i["offset" + t] + n["margin" + ("Height" === t ? "Top" : "Left")] + n["margin" + ("Height" === t ? "Bottom" : "Right")] : 0) }

    function u() {
        var t = document.body,
            e = document.documentElement,
            i = V() && getComputedStyle(e);
        return { height: d("Height", t, e, i), width: d("Width", t, e, i) }
    }

    function c(t) { return X({}, t, { right: t.left + t.width, bottom: t.top + t.height }) }

    function p(t) {
        var i = {};
        if (V()) try {
            i = t.getBoundingClientRect();
            var n = a(t, "top"),
                s = a(t, "left");
            i.top += n, i.left += s, i.bottom += n, i.right += s
        } catch (t) {} else i = t.getBoundingClientRect();
        var r = { left: i.left, top: i.top, width: i.right - i.left, height: i.bottom - i.top },
            o = "HTML" === t.nodeName ? u() : {},
            l = o.width || t.clientWidth || r.right - r.left,
            d = o.height || t.clientHeight || r.bottom - r.top,
            p = t.offsetWidth - l,
            f = t.offsetHeight - d;
        if (p || f) {
            var m = e(t);
            p -= h(m, "x"), f -= h(m, "y"), r.width -= p, r.height -= f
        }
        return c(r)
    }

    function f(t, i) {
        var s = V(),
            r = "HTML" === i.nodeName,
            o = p(t),
            a = p(i),
            h = n(t),
            d = e(i),
            u = parseFloat(d.borderTopWidth, 10),
            f = parseFloat(d.borderLeftWidth, 10),
            m = c({ top: o.top - a.top - u, left: o.left - a.left - f, width: o.width, height: o.height });
        if (m.marginTop = 0, m.marginLeft = 0, !s && r) {
            var g = parseFloat(d.marginTop, 10),
                v = parseFloat(d.marginLeft, 10);
            m.top -= u - g, m.bottom -= u - g, m.left -= f - v, m.right -= f - v, m.marginTop = g, m.marginLeft = v
        }
        return (s ? i.contains(h) : i === h && "BODY" !== h.nodeName) && (m = l(m, i)), m
    }

    function m(t) {
        var e = t.ownerDocument.documentElement,
            i = f(t, e),
            n = R(e.clientWidth, window.innerWidth || 0),
            s = R(e.clientHeight, window.innerHeight || 0),
            r = a(e),
            o = a(e, "left");
        return c({ top: r - i.top + i.marginTop, left: o - i.left + i.marginLeft, width: n, height: s })
    }

    function g(t) { var n = t.nodeName; return "BODY" !== n && "HTML" !== n && ("fixed" === e(t, "position") || g(i(t))) }

    function v(t, e, s, r) {
        var a = { top: 0, left: 0 },
            l = o(t, e);
        if ("viewport" === r) a = m(l);
        else {
            var h;
            "scrollParent" === r ? "BODY" === (h = n(i(e))).nodeName && (h = t.ownerDocument.documentElement) : h = "window" === r ? t.ownerDocument.documentElement : r;
            var d = f(h, l);
            if ("HTML" !== h.nodeName || g(l)) a = d;
            else {
                var c = u(),
                    p = c.height,
                    v = c.width;
                a.top += d.top - d.marginTop, a.bottom = p + d.top, a.left += d.left - d.marginLeft, a.right = v + d.left
            }
        }
        return a.left += s, a.top += s, a.right -= s, a.bottom -= s, a
    }

    function y(t) { return t.width * t.height }

    function w(t, e, i, n, s) {
        var r = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;
        if (-1 === t.indexOf("auto")) return t;
        var o = v(i, n, r, s),
            a = { top: { width: o.width, height: e.top - o.top }, right: { width: o.right - e.right, height: o.height }, bottom: { width: o.width, height: o.bottom - e.bottom }, left: { width: e.left - o.left, height: o.height } },
            l = Object.keys(a).map(function(t) { return X({ key: t }, a[t], { area: y(a[t]) }) }).sort(function(t, e) { return e.area - t.area }),
            h = l.filter(function(t) {
                var e = t.width,
                    n = t.height;
                return e >= i.clientWidth && n >= i.clientHeight
            }),
            d = 0 < h.length ? h[0].key : l[0].key,
            u = t.split("-")[1];
        return d + (u ? "-" + u : "")
    }

    function b(t, e, i) { return f(i, o(e, i)) }

    function T(t) {
        var e = getComputedStyle(t),
            i = parseFloat(e.marginTop) + parseFloat(e.marginBottom),
            n = parseFloat(e.marginLeft) + parseFloat(e.marginRight);
        return { width: t.offsetWidth + n, height: t.offsetHeight + i }
    }

    function _(t) { var e = { left: "right", right: "left", bottom: "top", top: "bottom" }; return t.replace(/left|right|bottom|top/g, function(t) { return e[t] }) }

    function S(t, e, i) {
        i = i.split("-")[0];
        var n = T(t),
            s = { width: n.width, height: n.height },
            r = -1 !== ["right", "left"].indexOf(i),
            o = r ? "top" : "left",
            a = r ? "left" : "top",
            l = r ? "height" : "width",
            h = r ? "width" : "height";
        return s[o] = e[o] + e[l] / 2 - n[l] / 2, s[a] = i === a ? e[a] - n[h] : e[_(a)], s
    }

    function x(t, e) { return Array.prototype.find ? t.find(e) : t.filter(e)[0] }

    function E(e, i, n) {
        return (void 0 === n ? e : e.slice(0, function(t, e, i) { if (Array.prototype.findIndex) return t.findIndex(function(t) { return t[e] === i }); var n = x(t, function(t) { return t[e] === i }); return t.indexOf(n) }(e, "name", n))).forEach(function(e) {
            e.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
            var n = e.function || e.fn;
            e.enabled && t(n) && (i.offsets.popper = c(i.offsets.popper), i.offsets.reference = c(i.offsets.reference), i = n(i, e))
        }), i
    }

    function C(t, e) { return t.some(function(t) { var i = t.name; return t.enabled && i === e }) }

    function k(t) {
        for (var e = [!1, "ms", "Webkit", "Moz", "O"], i = t.charAt(0).toUpperCase() + t.slice(1), n = 0; n < e.length - 1; n++) {
            var s = e[n],
                r = s ? "" + s + i : t;
            if (void 0 !== document.body.style[r]) return r
        }
        return null
    }

    function I(t) { var e = t.ownerDocument; return e ? e.defaultView : window }

    function A(t, e, i, s) {
        i.updateBound = s, I(t).addEventListener("resize", i.updateBound, { passive: !0 });
        var r = n(t);
        return function t(e, i, s, r) {
            var o = "BODY" === e.nodeName,
                a = o ? e.ownerDocument.defaultView : e;
            a.addEventListener(i, s, { passive: !0 }), o || t(n(a.parentNode), i, s, r), r.push(a)
        }(r, "scroll", i.updateBound, i.scrollParents), i.scrollElement = r, i.eventsEnabled = !0, i
    }

    function M() {
        var t, e;
        this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = (t = this.reference, e = this.state, I(t).removeEventListener("resize", e.updateBound), e.scrollParents.forEach(function(t) { t.removeEventListener("scroll", e.updateBound) }), e.updateBound = null, e.scrollParents = [], e.scrollElement = null, e.eventsEnabled = !1, e))
    }

    function O(t) { return "" !== t && !isNaN(parseFloat(t)) && isFinite(t) }

    function P(t, e) { Object.keys(e).forEach(function(i) { var n = ""; - 1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(i) && O(e[i]) && (n = "px"), t.style[i] = e[i] + n }) }

    function z(t, e, i) {
        var n = x(t, function(t) { return t.name === e }),
            s = !!n && t.some(function(t) { return t.name === i && t.enabled && t.order < n.order });
        if (!s) {
            var r = "`" + e + "`";
            console.warn("`" + i + "` modifier is required by " + r + " modifier in order to work, be sure to include it before " + r + "!")
        }
        return s
    }

    function D(t) {
        var e = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
            i = K.indexOf(t),
            n = K.slice(i + 1).concat(K.slice(0, i));
        return e ? n.reverse() : n
    }

    function L(t, e, i, n) {
        var s = [0, 0],
            r = -1 !== ["right", "left"].indexOf(n),
            o = t.split(/(\+|\-)/).map(function(t) { return t.trim() }),
            a = o.indexOf(x(o, function(t) { return -1 !== t.search(/,|\s/) }));
        o[a] && -1 === o[a].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
        var l = /\s*,\s*|\s+/,
            h = -1 === a ? [o] : [o.slice(0, a).concat([o[a].split(l)[0]]), [o[a].split(l)[1]].concat(o.slice(a + 1))];
        return (h = h.map(function(t, n) {
            var s = (1 === n ? !r : r) ? "height" : "width",
                o = !1;
            return t.reduce(function(t, e) { return "" === t[t.length - 1] && -1 !== ["+", "-"].indexOf(e) ? (t[t.length - 1] = e, o = !0, t) : o ? (t[t.length - 1] += e, o = !1, t) : t.concat(e) }, []).map(function(t) {
                return function(t, e, i, n) {
                    var s = t.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
                        r = +s[1],
                        o = s[2];
                    if (!r) return t;
                    if (0 === o.indexOf("%")) {
                        var a;
                        switch (o) {
                            case "%p":
                                a = i;
                                break;
                            case "%":
                            case "%r":
                            default:
                                a = n
                        }
                        return c(a)[e] / 100 * r
                    }
                    return "vh" === o || "vw" === o ? ("vh" === o ? R(document.documentElement.clientHeight, window.innerHeight || 0) : R(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * r : r
                }(t, s, e, i)
            })
        })).forEach(function(t, e) { t.forEach(function(i, n) { O(i) && (s[e] += i * ("-" === t[n - 1] ? -1 : 1)) }) }), s
    }
    for (var $ = Math.min, N = Math.floor, R = Math.max, H = "undefined" != typeof window && "undefined" != typeof document, j = ["Edge", "Trident", "Firefox"], F = 0, W = 0; W < j.length; W += 1)
        if (H && 0 <= navigator.userAgent.indexOf(j[W])) { F = 1; break }
    var B, q = H && window.Promise ? function(t) { var e = !1; return function() { e || (e = !0, window.Promise.resolve().then(function() { e = !1, t() })) } } : function(t) { var e = !1; return function() { e || (e = !0, setTimeout(function() { e = !1, t() }, F)) } },
        V = function() { return null == B && (B = -1 !== navigator.appVersion.indexOf("MSIE 10")), B },
        Y = function(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") },
        G = function() {
            function t(t, e) { for (var i, n = 0; n < e.length; n++)(i = e[n]).enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i) }
            return function(e, i, n) { return i && t(e.prototype, i), n && t(e, n), e }
        }(),
        U = function(t, e, i) { return e in t ? Object.defineProperty(t, e, { value: i, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = i, t },
        X = Object.assign || function(t) {
            for (var e, i = 1; i < arguments.length; i++)
                for (var n in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t
        },
        Q = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
        K = Q.slice(3),
        Z = "flip",
        J = "clockwise",
        tt = "counterclockwise",
        et = function() {
            function e(i, n) {
                var s = this,
                    r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
                Y(this, e), this.scheduleUpdate = function() { return requestAnimationFrame(s.update) }, this.update = q(this.update.bind(this)), this.options = X({}, e.Defaults, r), this.state = { isDestroyed: !1, isCreated: !1, scrollParents: [] }, this.reference = i && i.jquery ? i[0] : i, this.popper = n && n.jquery ? n[0] : n, this.options.modifiers = {}, Object.keys(X({}, e.Defaults.modifiers, r.modifiers)).forEach(function(t) { s.options.modifiers[t] = X({}, e.Defaults.modifiers[t] || {}, r.modifiers ? r.modifiers[t] : {}) }), this.modifiers = Object.keys(this.options.modifiers).map(function(t) { return X({ name: t }, s.options.modifiers[t]) }).sort(function(t, e) { return t.order - e.order }), this.modifiers.forEach(function(e) { e.enabled && t(e.onLoad) && e.onLoad(s.reference, s.popper, s.options, e, s.state) }), this.update();
                var o = this.options.eventsEnabled;
                o && this.enableEventListeners(), this.state.eventsEnabled = o
            }
            return G(e, [{
                key: "update",
                value: function() {
                    return function() {
                        if (!this.state.isDestroyed) {
                            var t = { instance: this, styles: {}, arrowStyles: {}, attributes: {}, flipped: !1, offsets: {} };
                            t.offsets.reference = b(this.state, this.popper, this.reference), t.placement = w(this.options.placement, t.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), t.originalPlacement = t.placement, t.offsets.popper = S(this.popper, t.offsets.reference, t.placement), t.offsets.popper.position = "absolute", t = E(this.modifiers, t), this.state.isCreated ? this.options.onUpdate(t) : (this.state.isCreated = !0, this.options.onCreate(t))
                        }
                    }.call(this)
                }
            }, { key: "destroy", value: function() { return function() { return this.state.isDestroyed = !0, C(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.left = "", this.popper.style.position = "", this.popper.style.top = "", this.popper.style[k("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this }.call(this) } }, { key: "enableEventListeners", value: function() { return function() { this.state.eventsEnabled || (this.state = A(this.reference, this.options, this.state, this.scheduleUpdate)) }.call(this) } }, { key: "disableEventListeners", value: function() { return M.call(this) } }]), e
        }();
    return et.Utils = ("undefined" == typeof window ? global : window).PopperUtils, et.placements = Q, et.Defaults = {
        placement: "bottom",
        eventsEnabled: !0,
        removeOnDestroy: !1,
        onCreate: function() {},
        onUpdate: function() {},
        modifiers: {
            shift: {
                order: 100,
                enabled: !0,
                fn: function(t) {
                    var e = t.placement,
                        i = e.split("-")[0],
                        n = e.split("-")[1];
                    if (n) {
                        var s = t.offsets,
                            r = s.reference,
                            o = s.popper,
                            a = -1 !== ["bottom", "top"].indexOf(i),
                            l = a ? "left" : "top",
                            h = a ? "width" : "height",
                            d = { start: U({}, l, r[l]), end: U({}, l, r[l] + r[h] - o[h]) };
                        t.offsets.popper = X({}, o, d[n])
                    }
                    return t
                }
            },
            offset: {
                order: 200,
                enabled: !0,
                fn: function(t, e) {
                    var i, n = e.offset,
                        s = t.placement,
                        r = t.offsets,
                        o = r.popper,
                        a = r.reference,
                        l = s.split("-")[0];
                    return i = O(+n) ? [+n, 0] : L(n, o, a, l), "left" === l ? (o.top += i[0], o.left -= i[1]) : "right" === l ? (o.top += i[0], o.left += i[1]) : "top" === l ? (o.left += i[0], o.top -= i[1]) : "bottom" === l && (o.left += i[0], o.top += i[1]), t.popper = o, t
                },
                offset: 0
            },
            preventOverflow: {
                order: 300,
                enabled: !0,
                fn: function(t, e) {
                    var i = e.boundariesElement || s(t.instance.popper);
                    t.instance.reference === i && (i = s(i));
                    var n = v(t.instance.popper, t.instance.reference, e.padding, i);
                    e.boundaries = n;
                    var r = e.priority,
                        o = t.offsets.popper,
                        a = {
                            primary: function(t) { var i = o[t]; return o[t] < n[t] && !e.escapeWithReference && (i = R(o[t], n[t])), U({}, t, i) },
                            secondary: function(t) {
                                var i = "right" === t ? "left" : "top",
                                    s = o[i];
                                return o[t] > n[t] && !e.escapeWithReference && (s = $(o[i], n[t] - ("right" === t ? o.width : o.height))), U({}, i, s)
                            }
                        };
                    return r.forEach(function(t) {
                        var e = -1 === ["left", "top"].indexOf(t) ? "secondary" : "primary";
                        o = X({}, o, a[e](t))
                    }), t.offsets.popper = o, t
                },
                priority: ["left", "right", "top", "bottom"],
                padding: 5,
                boundariesElement: "scrollParent"
            },
            keepTogether: {
                order: 400,
                enabled: !0,
                fn: function(t) {
                    var e = t.offsets,
                        i = e.popper,
                        n = e.reference,
                        s = t.placement.split("-")[0],
                        r = N,
                        o = -1 !== ["top", "bottom"].indexOf(s),
                        a = o ? "right" : "bottom",
                        l = o ? "left" : "top",
                        h = o ? "width" : "height";
                    return i[a] < r(n[l]) && (t.offsets.popper[l] = r(n[l]) - i[h]), i[l] > r(n[a]) && (t.offsets.popper[l] = r(n[a])), t
                }
            },
            arrow: {
                order: 500,
                enabled: !0,
                fn: function(t, i) {
                    var n;
                    if (!z(t.instance.modifiers, "arrow", "keepTogether")) return t;
                    var s = i.element;
                    if ("string" == typeof s) { if (!(s = t.instance.popper.querySelector(s))) return t } else if (!t.instance.popper.contains(s)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), t;
                    var r = t.placement.split("-")[0],
                        o = t.offsets,
                        a = o.popper,
                        l = o.reference,
                        h = -1 !== ["left", "right"].indexOf(r),
                        d = h ? "height" : "width",
                        u = h ? "Top" : "Left",
                        p = u.toLowerCase(),
                        f = h ? "left" : "top",
                        m = h ? "bottom" : "right",
                        g = T(s)[d];
                    l[m] - g < a[p] && (t.offsets.popper[p] -= a[p] - (l[m] - g)), l[p] + g > a[m] && (t.offsets.popper[p] += l[p] + g - a[m]), t.offsets.popper = c(t.offsets.popper);
                    var v = l[p] + l[d] / 2 - g / 2,
                        y = e(t.instance.popper),
                        w = parseFloat(y["margin" + u], 10),
                        b = parseFloat(y["border" + u + "Width"], 10),
                        _ = v - t.offsets.popper[p] - w - b;
                    return _ = R($(a[d] - g, _), 0), t.arrowElement = s, t.offsets.arrow = (U(n = {}, p, Math.round(_)), U(n, f, ""), n), t
                },
                element: "[x-arrow]"
            },
            flip: {
                order: 600,
                enabled: !0,
                fn: function(t, e) {
                    if (C(t.instance.modifiers, "inner")) return t;
                    if (t.flipped && t.placement === t.originalPlacement) return t;
                    var i = v(t.instance.popper, t.instance.reference, e.padding, e.boundariesElement),
                        n = t.placement.split("-")[0],
                        s = _(n),
                        r = t.placement.split("-")[1] || "",
                        o = [];
                    switch (e.behavior) {
                        case Z:
                            o = [n, s];
                            break;
                        case J:
                            o = D(n);
                            break;
                        case tt:
                            o = D(n, !0);
                            break;
                        default:
                            o = e.behavior
                    }
                    return o.forEach(function(a, l) {
                        if (n !== a || o.length === l + 1) return t;
                        n = t.placement.split("-")[0], s = _(n);
                        var h = t.offsets.popper,
                            d = t.offsets.reference,
                            u = N,
                            c = "left" === n && u(h.right) > u(d.left) || "right" === n && u(h.left) < u(d.right) || "top" === n && u(h.bottom) > u(d.top) || "bottom" === n && u(h.top) < u(d.bottom),
                            p = u(h.left) < u(i.left),
                            f = u(h.right) > u(i.right),
                            m = u(h.top) < u(i.top),
                            g = u(h.bottom) > u(i.bottom),
                            v = "left" === n && p || "right" === n && f || "top" === n && m || "bottom" === n && g,
                            y = -1 !== ["top", "bottom"].indexOf(n),
                            w = !!e.flipVariations && (y && "start" === r && p || y && "end" === r && f || !y && "start" === r && m || !y && "end" === r && g);
                        (c || v || w) && (t.flipped = !0, (c || v) && (n = o[l + 1]), w && (r = function(t) { return "end" === t ? "start" : "start" === t ? "end" : t }(r)), t.placement = n + (r ? "-" + r : ""), t.offsets.popper = X({}, t.offsets.popper, S(t.instance.popper, t.offsets.reference, t.placement)), t = E(t.instance.modifiers, t, "flip"))
                    }), t
                },
                behavior: "flip",
                padding: 5,
                boundariesElement: "viewport"
            },
            inner: {
                order: 700,
                enabled: !1,
                fn: function(t) {
                    var e = t.placement,
                        i = e.split("-")[0],
                        n = t.offsets,
                        s = n.popper,
                        r = n.reference,
                        o = -1 !== ["left", "right"].indexOf(i),
                        a = -1 === ["top", "left"].indexOf(i);
                    return s[o ? "left" : "top"] = r[i] - (a ? s[o ? "width" : "height"] : 0), t.placement = _(e), t.offsets.popper = c(s), t
                }
            },
            hide: {
                order: 800,
                enabled: !0,
                fn: function(t) {
                    if (!z(t.instance.modifiers, "hide", "preventOverflow")) return t;
                    var e = t.offsets.reference,
                        i = x(t.instance.modifiers, function(t) { return "preventOverflow" === t.name }).boundaries;
                    if (e.bottom < i.top || e.left > i.right || e.top > i.bottom || e.right < i.left) {
                        if (!0 === t.hide) return t;
                        t.hide = !0, t.attributes["x-out-of-boundaries"] = ""
                    } else {
                        if (!1 === t.hide) return t;
                        t.hide = !1, t.attributes["x-out-of-boundaries"] = !1
                    }
                    return t
                }
            },
            computeStyle: {
                order: 850,
                enabled: !0,
                fn: function(t, e) {
                    var i = e.x,
                        n = e.y,
                        r = t.offsets.popper,
                        o = x(t.instance.modifiers, function(t) { return "applyStyle" === t.name }).gpuAcceleration;
                    void 0 !== o && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
                    var a, l, h = void 0 === o ? e.gpuAcceleration : o,
                        d = p(s(t.instance.popper)),
                        u = { position: r.position },
                        c = { left: N(r.left), top: N(r.top), bottom: N(r.bottom), right: N(r.right) },
                        f = "bottom" === i ? "top" : "bottom",
                        m = "right" === n ? "left" : "right",
                        g = k("transform");
                    if (l = "bottom" == f ? -d.height + c.bottom : c.top, a = "right" == m ? -d.width + c.right : c.left, h && g) u[g] = "translate3d(" + a + "px, " + l + "px, 0)", u[f] = 0, u[m] = 0, u.willChange = "transform";
                    else {
                        var v = "bottom" == f ? -1 : 1,
                            y = "right" == m ? -1 : 1;
                        u[f] = l * v, u[m] = a * y, u.willChange = f + ", " + m
                    }
                    var w = { "x-placement": t.placement };
                    return t.attributes = X({}, w, t.attributes), t.styles = X({}, u, t.styles), t.arrowStyles = X({}, t.offsets.arrow, t.arrowStyles), t
                },
                gpuAcceleration: !0,
                x: "bottom",
                y: "right"
            },
            applyStyle: {
                order: 900,
                enabled: !0,
                fn: function(t) {
                    return P(t.instance.popper, t.styles),
                        function(t, e) { Object.keys(e).forEach(function(i) {!1 === e[i] ? t.removeAttribute(i) : t.setAttribute(i, e[i]) }) }(t.instance.popper, t.attributes), t.arrowElement && Object.keys(t.arrowStyles).length && P(t.arrowElement, t.arrowStyles), t
                },
                onLoad: function(t, e, i, n, s) {
                    var r = b(0, e, t),
                        o = w(i.placement, r, e, t, i.modifiers.flip.boundariesElement, i.modifiers.flip.padding);
                    return e.setAttribute("x-placement", o), P(e, { position: "absolute" }), i
                },
                gpuAcceleration: void 0
            }
        }
    }, et
}),
function(t) { "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof module && module.exports ? module.exports = function(e, i) { return void 0 === i && (i = "undefined" != typeof window ? require("jquery") : require("jquery")(e)), t(i), i } : t(jQuery) }(function(t) {
    "use strict";
    var e, i = "drawsvg",
        n = { duration: 1e3, stagger: 200, easing: "swing", reverse: !1, callback: t.noop },
        s = ((e = function(e, s) {
            var r = this,
                o = t.extend(n, s);
            r.$elm = t(e), r.$elm.is("svg") && (r.options = o, r.$paths = r.$elm.find("path"), r.totalDuration = o.duration + o.stagger * r.$paths.length, r.duration = o.duration / r.totalDuration, r.$paths.each(function(t, e) {
                var i = e.getTotalLength();
                e.pathLen = i, e.delay = o.stagger * t / r.totalDuration, e.style.strokeDasharray = [i, i].join(" "), e.style.strokeDashoffset = i
            }), r.$elm.attr("class", function(t, e) { return [e, i + "-initialized"].join(" ") }))
        }).prototype.getVal = function(e, i) { return 1 - t.easing[i](e, e, 0, 1, 1) }, e.prototype.progress = function(t) {
            var e = this,
                i = e.options,
                n = e.duration;
            e.$paths.each(function(s, r) {
                var o = r.style;
                if (1 === t) o.strokeDashoffset = 0;
                else if (0 === t) o.strokeDashoffset = r.pathLen + "px";
                else if (t >= r.delay && t <= n + r.delay) {
                    var a = (t - r.delay) / n;
                    o.strokeDashoffset = e.getVal(a, i.easing) * r.pathLen * (i.reverse ? -1 : 1) + "px"
                }
            })
        }, e.prototype.animate = function() {
            var e = this;
            e.$elm.attr("class", function(t, e) { return [e, i + "-animating"].join(" ") }), t({ len: 0 }).animate({ len: 1 }, { easing: "linear", duration: e.totalDuration, step: function(t, i) { e.progress.call(e, t / i.end) }, complete: function() { e.options.callback.call(this), e.$elm.attr("class", function(t, e) { return e.replace(i + "-animating", "") }) } })
        }, e);
    t.fn[i] = function(e, n) {
        return this.each(function() {
            var r = t.data(this, i);
            r && "" + e === e && r[e] ? r[e](n) : t.data(this, i, new s(this, e))
        })
    }
}),
function(t) {
    function e() {}

    function i(t) {
        function i(e) { e.prototype.option || (e.prototype.option = function(e) { t.isPlainObject(e) && (this.options = t.extend(!0, this.options, e)) }) }

        function s(e, i) {
            t.fn[e] = function(s) {
                if ("string" == typeof s) {
                    for (var o = n.call(arguments, 1), a = 0, l = this.length; l > a; a++) {
                        var h = this[a],
                            d = t.data(h, e);
                        if (d)
                            if (t.isFunction(d[s]) && "_" !== s.charAt(0)) { var u = d[s].apply(d, o); if (void 0 !== u) return u } else r("no such method '" + s + "' for " + e + " instance");
                        else r("cannot call methods on " + e + " prior to initialization; attempted to call '" + s + "'")
                    }
                    return this
                }
                return this.each(function() {
                    var n = t.data(this, e);
                    n ? (n.option(s), n._init()) : (n = new i(this, s), t.data(this, e, n))
                })
            }
        }
        if (t) { var r = "undefined" == typeof console ? e : function(t) { console.error(t) }; return t.bridget = function(t, e) { i(e), s(t, e) }, t.bridget }
    }
    var n = Array.prototype.slice;
    "function" == typeof define && define.amd ? define("jquery-bridget/jquery.bridget", ["jquery"], i) : i("object" == typeof exports ? require("jquery") : t.jQuery)
}(window),
function(t) {
    function e(e) { var i = t.event; return i.target = i.target || i.srcElement || e, i }
    var i = document.documentElement,
        n = function() {};
    i.addEventListener ? n = function(t, e, i) { t.addEventListener(e, i, !1) } : i.attachEvent && (n = function(t, i, n) {
        t[i + n] = n.handleEvent ? function() {
            var i = e(t);
            n.handleEvent.call(n, i)
        } : function() {
            var i = e(t);
            n.call(t, i)
        }, t.attachEvent("on" + i, t[i + n])
    });
    var s = function() {};
    i.removeEventListener ? s = function(t, e, i) { t.removeEventListener(e, i, !1) } : i.detachEvent && (s = function(t, e, i) { t.detachEvent("on" + e, t[e + i]); try { delete t[e + i] } catch (n) { t[e + i] = void 0 } });
    var r = { bind: n, unbind: s };
    "function" == typeof define && define.amd ? define("eventie/eventie", r) : "object" == typeof exports ? module.exports = r : t.eventie = r
}(window),
function() {
    "use strict";

    function t() {}

    function e(t, e) {
        for (var i = t.length; i--;)
            if (t[i].listener === e) return i;
        return -1
    }

    function i(t) { return function() { return this[t].apply(this, arguments) } }
    var n = t.prototype,
        s = this,
        r = s.EventEmitter;
    n.getListeners = function(t) {
        var e, i, n = this._getEvents();
        if (t instanceof RegExp)
            for (i in e = {}, n) n.hasOwnProperty(i) && t.test(i) && (e[i] = n[i]);
        else e = n[t] || (n[t] = []);
        return e
    }, n.flattenListeners = function(t) { var e, i = []; for (e = 0; e < t.length; e += 1) i.push(t[e].listener); return i }, n.getListenersAsObject = function(t) { var e, i = this.getListeners(t); return i instanceof Array && ((e = {})[t] = i), e || i }, n.addListener = function(t, i) {
        var n, s = this.getListenersAsObject(t),
            r = "object" == typeof i;
        for (n in s) s.hasOwnProperty(n) && -1 === e(s[n], i) && s[n].push(r ? i : { listener: i, once: !1 });
        return this
    }, n.on = i("addListener"), n.addOnceListener = function(t, e) { return this.addListener(t, { listener: e, once: !0 }) }, n.once = i("addOnceListener"), n.defineEvent = function(t) { return this.getListeners(t), this }, n.defineEvents = function(t) { for (var e = 0; e < t.length; e += 1) this.defineEvent(t[e]); return this }, n.removeListener = function(t, i) { var n, s, r = this.getListenersAsObject(t); for (s in r) r.hasOwnProperty(s) && (-1 !== (n = e(r[s], i)) && r[s].splice(n, 1)); return this }, n.off = i("removeListener"), n.addListeners = function(t, e) { return this.manipulateListeners(!1, t, e) }, n.removeListeners = function(t, e) { return this.manipulateListeners(!0, t, e) }, n.manipulateListeners = function(t, e, i) {
        var n, s, r = t ? this.removeListener : this.addListener,
            o = t ? this.removeListeners : this.addListeners;
        if ("object" != typeof e || e instanceof RegExp)
            for (n = i.length; n--;) r.call(this, e, i[n]);
        else
            for (n in e) e.hasOwnProperty(n) && (s = e[n]) && ("function" == typeof s ? r.call(this, n, s) : o.call(this, n, s));
        return this
    }, n.removeEvent = function(t) {
        var e, i = typeof t,
            n = this._getEvents();
        if ("string" === i) delete n[t];
        else if (t instanceof RegExp)
            for (e in n) n.hasOwnProperty(e) && t.test(e) && delete n[e];
        else delete this._events;
        return this
    }, n.removeAllListeners = i("removeEvent"), n.emitEvent = function(t, e) {
        var i, n, s, r = this.getListenersAsObject(t);
        for (s in r)
            if (r.hasOwnProperty(s))
                for (n = r[s].length; n--;) !0 === (i = r[s][n]).once && this.removeListener(t, i.listener), i.listener.apply(this, e || []) === this._getOnceReturnValue() && this.removeListener(t, i.listener);
        return this
    }, n.trigger = i("emitEvent"), n.emit = function(t) { var e = Array.prototype.slice.call(arguments, 1); return this.emitEvent(t, e) }, n.setOnceReturnValue = function(t) { return this._onceReturnValue = t, this }, n._getOnceReturnValue = function() { return !this.hasOwnProperty("_onceReturnValue") || this._onceReturnValue }, n._getEvents = function() { return this._events || (this._events = {}) }, t.noConflict = function() { return s.EventEmitter = r, t }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function() { return t }) : "object" == typeof module && module.exports ? module.exports = t : s.EventEmitter = t
}.call(this),
    function(t) {
        function e(t) {
            if (t) {
                if ("string" == typeof n[t]) return t;
                t = t.charAt(0).toUpperCase() + t.slice(1);
                for (var e, s = 0, r = i.length; r > s; s++)
                    if (e = i[s] + t, "string" == typeof n[e]) return e
            }
        }
        var i = "Webkit Moz ms Ms O".split(" "),
            n = document.documentElement.style;
        "function" == typeof define && define.amd ? define("get-style-property/get-style-property", [], function() { return e }) : "object" == typeof exports ? module.exports = e : t.getStyleProperty = e
    }(window),
    function(t, e) {
        function i(t) { var e = parseFloat(t); return -1 === t.indexOf("%") && !isNaN(e) && e }

        function n(e) {
            function n() {
                if (!d) {
                    d = !0;
                    var n = t.getComputedStyle;
                    if (a = function() { var t = n ? function(t) { return n(t, null) } : function(t) { return t.currentStyle }; return function(e) { var i = t(e); return i || s("Style returned " + i + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), i } }(), l = e("boxSizing")) {
                        var r = document.createElement("div");
                        r.style.width = "200px", r.style.padding = "1px 2px 3px 4px", r.style.borderStyle = "solid", r.style.borderWidth = "1px 2px 3px 4px", r.style[l] = "border-box";
                        var o = document.body || document.documentElement;
                        o.appendChild(r);
                        var u = a(r);
                        h = 200 === i(u.width), o.removeChild(r)
                    }
                }
            }

            function o(e, i) {
                if (t.getComputedStyle || -1 === i.indexOf("%")) return i;
                var n = e.style,
                    s = n.left,
                    r = e.runtimeStyle,
                    o = r && r.left;
                return o && (r.left = e.currentStyle.left), n.left = i, i = n.pixelLeft, n.left = s, o && (r.left = o), i
            }
            var a, l, h, d = !1;
            return function(t) {
                if (n(), "string" == typeof t && (t = document.querySelector(t)), t && "object" == typeof t && t.nodeType) {
                    var e = a(t);
                    if ("none" === e.display) return function() { for (var t = { width: 0, height: 0, innerWidth: 0, innerHeight: 0, outerWidth: 0, outerHeight: 0 }, e = 0, i = r.length; i > e; e++) t[r[e]] = 0; return t }();
                    var s = {};
                    s.width = t.offsetWidth, s.height = t.offsetHeight;
                    for (var d = s.isBorderBox = !(!l || !e[l] || "border-box" !== e[l]), u = 0, c = r.length; c > u; u++) {
                        var p = r[u],
                            f = e[p];
                        f = o(t, f);
                        var m = parseFloat(f);
                        s[p] = isNaN(m) ? 0 : m
                    }
                    var g = s.paddingLeft + s.paddingRight,
                        v = s.paddingTop + s.paddingBottom,
                        y = s.marginLeft + s.marginRight,
                        w = s.marginTop + s.marginBottom,
                        b = s.borderLeftWidth + s.borderRightWidth,
                        T = s.borderTopWidth + s.borderBottomWidth,
                        _ = d && h,
                        S = i(e.width);
                    !1 !== S && (s.width = S + (_ ? 0 : g + b));
                    var x = i(e.height);
                    return !1 !== x && (s.height = x + (_ ? 0 : v + T)), s.innerWidth = s.width - (g + b), s.innerHeight = s.height - (v + T), s.outerWidth = s.width + y, s.outerHeight = s.height + w, s
                }
            }
        }
        var s = "undefined" == typeof console ? function() {} : function(t) { console.error(t) },
            r = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"];
        "function" == typeof define && define.amd ? define("get-size/get-size", ["get-style-property/get-style-property"], n) : "object" == typeof exports ? module.exports = n(require("desandro-get-style-property")) : t.getSize = n(t.getStyleProperty)
    }(window),
    function(t) {
        function e(t) { "function" == typeof t && (e.isReady ? t() : o.push(t)) }

        function i(t) {
            var i = "readystatechange" === t.type && "complete" !== r.readyState;
            e.isReady || i || n()
        }

        function n() {
            e.isReady = !0;
            for (var t = 0, i = o.length; i > t; t++) {
                (0, o[t])()
            }
        }

        function s(s) { return "complete" === r.readyState ? n() : (s.bind(r, "DOMContentLoaded", i), s.bind(r, "readystatechange", i), s.bind(t, "load", i)), e }
        var r = t.document,
            o = [];
        e.isReady = !1, "function" == typeof define && define.amd ? define("doc-ready/doc-ready", ["eventie/eventie"], s) : "object" == typeof exports ? module.exports = s(require("eventie")) : t.docReady = s(t.eventie)
    }(window),
    function(t) {
        "use strict";

        function e(t, e) { return t[s](e) }

        function i(t) { t.parentNode || document.createDocumentFragment().appendChild(t) }
        var n, s = function() { if (t.matches) return "matches"; if (t.matchesSelector) return "matchesSelector"; for (var e = ["webkit", "moz", "ms", "o"], i = 0, n = e.length; n > i; i++) { var s = e[i] + "MatchesSelector"; if (t[s]) return s } }();
        if (s) {
            var r = e(document.createElement("div"), "div");
            n = r ? e : function(t, n) { return i(t), e(t, n) }
        } else n = function(t, e) {
            i(t);
            for (var n = t.parentNode.querySelectorAll(e), s = 0, r = n.length; r > s; s++)
                if (n[s] === t) return !0;
            return !1
        };
        "function" == typeof define && define.amd ? define("matches-selector/matches-selector", [], function() { return n }) : "object" == typeof exports ? module.exports = n : window.matchesSelector = n
    }(Element.prototype),
    function(t, e) { "use strict"; "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["doc-ready/doc-ready", "matches-selector/matches-selector"], function(i, n) { return e(t, i, n) }) : "object" == typeof exports ? module.exports = e(t, require("doc-ready"), require("desandro-matches-selector")) : t.fizzyUIUtils = e(t, t.docReady, t.matchesSelector) }(window, function(t, e, i) {
        var n = { extend: function(t, e) { for (var i in e) t[i] = e[i]; return t }, modulo: function(t, e) { return (t % e + e) % e } },
            s = Object.prototype.toString;
        n.isArray = function(t) { return "[object Array]" == s.call(t) }, n.makeArray = function(t) {
            var e = [];
            if (n.isArray(t)) e = t;
            else if (t && "number" == typeof t.length)
                for (var i = 0, s = t.length; s > i; i++) e.push(t[i]);
            else e.push(t);
            return e
        }, n.indexOf = Array.prototype.indexOf ? function(t, e) { return t.indexOf(e) } : function(t, e) {
            for (var i = 0, n = t.length; n > i; i++)
                if (t[i] === e) return i;
            return -1
        }, n.removeFrom = function(t, e) { var i = n.indexOf(t, e); - 1 != i && t.splice(i, 1) }, n.isElement = "function" == typeof HTMLElement || "object" == typeof HTMLElement ? function(t) { return t instanceof HTMLElement } : function(t) { return t && "object" == typeof t && 1 == t.nodeType && "string" == typeof t.nodeName }, n.setText = function() { var t; return function(e, i) { e[t = t || (void 0 !== document.documentElement.textContent ? "textContent" : "innerText")] = i } }(), n.getParent = function(t, e) {
            for (; t != document.body;)
                if (t = t.parentNode, i(t, e)) return t
        }, n.getQueryElement = function(t) { return "string" == typeof t ? document.querySelector(t) : t }, n.handleEvent = function(t) {
            var e = "on" + t.type;
            this[e] && this[e](t)
        }, n.filterFindElements = function(t, e) {
            for (var s = [], r = 0, o = (t = n.makeArray(t)).length; o > r; r++) {
                var a = t[r];
                if (n.isElement(a))
                    if (e) { i(a, e) && s.push(a); for (var l = a.querySelectorAll(e), h = 0, d = l.length; d > h; h++) s.push(l[h]) } else s.push(a)
            }
            return s
        }, n.debounceMethod = function(t, e, i) {
            var n = t.prototype[e],
                s = e + "Timeout";
            t.prototype[e] = function() {
                var t = this[s];
                t && clearTimeout(t);
                var e = arguments,
                    r = this;
                this[s] = setTimeout(function() { n.apply(r, e), delete r[s] }, i || 100)
            }
        }, n.toDashed = function(t) { return t.replace(/(.)([A-Z])/g, function(t, e, i) { return e + "-" + i }).toLowerCase() };
        var r = t.console;
        return n.htmlInit = function(i, s) {
            e(function() {
                for (var e = n.toDashed(s), o = document.querySelectorAll(".js-" + e), a = "data-" + e + "-options", l = 0, h = o.length; h > l; l++) {
                    var d, u = o[l],
                        c = u.getAttribute(a);
                    try { d = c && JSON.parse(c) } catch (t) { r && r.error("Error parsing " + a + " on " + u.nodeName.toLowerCase() + (u.id ? "#" + u.id : "") + ": " + t); continue }
                    var p = new i(u, d),
                        f = t.jQuery;
                    f && f.data(u, s, p)
                }
            })
        }, n
    }),
    function(t, e) { "use strict"; "function" == typeof define && define.amd ? define("outlayer/item", ["eventEmitter/EventEmitter", "get-size/get-size", "get-style-property/get-style-property", "fizzy-ui-utils/utils"], function(i, n, s, r) { return e(t, i, n, s, r) }) : "object" == typeof exports ? module.exports = e(t, require("wolfy87-eventemitter"), require("get-size"), require("desandro-get-style-property"), require("fizzy-ui-utils")) : (t.Outlayer = {}, t.Outlayer.Item = e(t, t.EventEmitter, t.getSize, t.getStyleProperty, t.fizzyUIUtils)) }(window, function(t, e, i, n, s) {
        "use strict";

        function r(t, e) { t && (this.element = t, this.layout = e, this.position = { x: 0, y: 0 }, this._create()) }
        var o = t.getComputedStyle,
            a = o ? function(t) { return o(t, null) } : function(t) { return t.currentStyle },
            l = n("transition"),
            h = n("transform"),
            d = l && h,
            u = !!n("perspective"),
            c = { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "otransitionend", transition: "transitionend" }[l],
            p = ["transform", "transition", "transitionDuration", "transitionProperty"],
            f = function() {
                for (var t = {}, e = 0, i = p.length; i > e; e++) {
                    var s = p[e],
                        r = n(s);
                    r && r !== s && (t[s] = r)
                }
                return t
            }();
        s.extend(r.prototype, e.prototype), r.prototype._create = function() { this._transn = { ingProperties: {}, clean: {}, onEnd: {} }, this.css({ position: "absolute" }) }, r.prototype.handleEvent = function(t) {
            var e = "on" + t.type;
            this[e] && this[e](t)
        }, r.prototype.getSize = function() { this.size = i(this.element) }, r.prototype.css = function(t) { var e = this.element.style; for (var i in t) { e[f[i] || i] = t[i] } }, r.prototype.getPosition = function() {
            var t = a(this.element),
                e = this.layout.options,
                i = e.isOriginLeft,
                n = e.isOriginTop,
                s = t[i ? "left" : "right"],
                r = t[n ? "top" : "bottom"],
                o = parseInt(s, 10),
                l = parseInt(r, 10),
                h = this.layout.size;
            o = -1 != s.indexOf("%") ? o / 100 * h.width : o, l = -1 != r.indexOf("%") ? l / 100 * h.height : l, o = isNaN(o) ? 0 : o, l = isNaN(l) ? 0 : l, o -= i ? h.paddingLeft : h.paddingRight, l -= n ? h.paddingTop : h.paddingBottom, this.position.x = o, this.position.y = l
        }, r.prototype.layoutPosition = function() {
            var t = this.layout.size,
                e = this.layout.options,
                i = {},
                n = e.isOriginLeft ? "paddingLeft" : "paddingRight",
                s = e.isOriginLeft ? "left" : "right",
                r = e.isOriginLeft ? "right" : "left",
                o = this.position.x + t[n];
            i[s] = this.getXValue(o), i[r] = "";
            var a = e.isOriginTop ? "paddingTop" : "paddingBottom",
                l = e.isOriginTop ? "top" : "bottom",
                h = e.isOriginTop ? "bottom" : "top",
                d = this.position.y + t[a];
            i[l] = this.getYValue(d), i[h] = "", this.css(i), this.emitEvent("layout", [this])
        }, r.prototype.getXValue = function(t) { var e = this.layout.options; return e.percentPosition && !e.isHorizontal ? t / this.layout.size.width * 100 + "%" : t + "px" }, r.prototype.getYValue = function(t) { var e = this.layout.options; return e.percentPosition && e.isHorizontal ? t / this.layout.size.height * 100 + "%" : t + "px" }, r.prototype._transitionTo = function(t, e) {
            this.getPosition();
            var i = this.position.x,
                n = this.position.y,
                s = parseInt(t, 10),
                r = parseInt(e, 10),
                o = s === this.position.x && r === this.position.y;
            if (this.setPosition(t, e), !o || this.isTransitioning) {
                var a = t - i,
                    l = e - n,
                    h = {};
                h.transform = this.getTranslate(a, l), this.transition({ to: h, onTransitionEnd: { transform: this.layoutPosition }, isCleaning: !0 })
            } else this.layoutPosition()
        }, r.prototype.getTranslate = function(t, e) { var i = this.layout.options; return t = i.isOriginLeft ? t : -t, e = i.isOriginTop ? e : -e, t = this.getXValue(t), e = this.getYValue(e), u ? "translate3d(" + t + ", " + e + ", 0)" : "translate(" + t + ", " + e + ")" }, r.prototype.goTo = function(t, e) { this.setPosition(t, e), this.layoutPosition() }, r.prototype.moveTo = d ? r.prototype._transitionTo : r.prototype.goTo, r.prototype.setPosition = function(t, e) { this.position.x = parseInt(t, 10), this.position.y = parseInt(e, 10) }, r.prototype._nonTransition = function(t) { for (var e in this.css(t.to), t.isCleaning && this._removeStyles(t.to), t.onTransitionEnd) t.onTransitionEnd[e].call(this) }, r.prototype._transition = function(t) {
            if (parseFloat(this.layout.options.transitionDuration)) {
                var e = this._transn;
                for (var i in t.onTransitionEnd) e.onEnd[i] = t.onTransitionEnd[i];
                for (i in t.to) e.ingProperties[i] = !0, t.isCleaning && (e.clean[i] = !0);
                if (t.from) {
                    this.css(t.from);
                    this.element.offsetHeight;
                    null
                }
                this.enableTransition(t.to), this.css(t.to), this.isTransitioning = !0
            } else this._nonTransition(t)
        };
        var m = "opacity," + function(t) { return t.replace(/([A-Z])/g, function(t) { return "-" + t.toLowerCase() }) }(f.transform || "transform");
        r.prototype.enableTransition = function() { this.isTransitioning || (this.css({ transitionProperty: m, transitionDuration: this.layout.options.transitionDuration }), this.element.addEventListener(c, this, !1)) }, r.prototype.transition = r.prototype[l ? "_transition" : "_nonTransition"], r.prototype.onwebkitTransitionEnd = function(t) { this.ontransitionend(t) }, r.prototype.onotransitionend = function(t) { this.ontransitionend(t) };
        var g = { "-webkit-transform": "transform", "-moz-transform": "transform", "-o-transform": "transform" };
        r.prototype.ontransitionend = function(t) {
            if (t.target === this.element) {
                var e = this._transn,
                    i = g[t.propertyName] || t.propertyName;
                if (delete e.ingProperties[i], function(t) { for (var e in t) return !1; return !0 }(e.ingProperties) && this.disableTransition(), i in e.clean && (this.element.style[t.propertyName] = "", delete e.clean[i]), i in e.onEnd) e.onEnd[i].call(this), delete e.onEnd[i];
                this.emitEvent("transitionEnd", [this])
            }
        }, r.prototype.disableTransition = function() { this.removeTransitionStyles(), this.element.removeEventListener(c, this, !1), this.isTransitioning = !1 }, r.prototype._removeStyles = function(t) {
            var e = {};
            for (var i in t) e[i] = "";
            this.css(e)
        };
        var v = { transitionProperty: "", transitionDuration: "" };
        return r.prototype.removeTransitionStyles = function() { this.css(v) }, r.prototype.removeElem = function() { this.element.parentNode.removeChild(this.element), this.css({ display: "" }), this.emitEvent("remove", [this]) }, r.prototype.remove = function() {
            if (l && parseFloat(this.layout.options.transitionDuration)) {
                var t = this;
                this.once("transitionEnd", function() { t.removeElem() }), this.hide()
            } else this.removeElem()
        }, r.prototype.reveal = function() {
            delete this.isHidden, this.css({ display: "" });
            var t = this.layout.options,
                e = {};
            e[this.getHideRevealTransitionEndProperty("visibleStyle")] = this.onRevealTransitionEnd, this.transition({ from: t.hiddenStyle, to: t.visibleStyle, isCleaning: !0, onTransitionEnd: e })
        }, r.prototype.onRevealTransitionEnd = function() { this.isHidden || this.emitEvent("reveal") }, r.prototype.getHideRevealTransitionEndProperty = function(t) { var e = this.layout.options[t]; if (e.opacity) return "opacity"; for (var i in e) return i }, r.prototype.hide = function() {
            this.isHidden = !0, this.css({ display: "" });
            var t = this.layout.options,
                e = {};
            e[this.getHideRevealTransitionEndProperty("hiddenStyle")] = this.onHideTransitionEnd, this.transition({ from: t.visibleStyle, to: t.hiddenStyle, isCleaning: !0, onTransitionEnd: e })
        }, r.prototype.onHideTransitionEnd = function() { this.isHidden && (this.css({ display: "none" }), this.emitEvent("hide")) }, r.prototype.destroy = function() { this.css({ position: "", left: "", right: "", top: "", bottom: "", transition: "", transform: "" }) }, r
    }),
    function(t, e) { "use strict"; "function" == typeof define && define.amd ? define("outlayer/outlayer", ["eventie/eventie", "eventEmitter/EventEmitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function(i, n, s, r, o) { return e(t, i, n, s, r, o) }) : "object" == typeof exports ? module.exports = e(t, require("eventie"), require("wolfy87-eventemitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : t.Outlayer = e(t, t.eventie, t.EventEmitter, t.getSize, t.fizzyUIUtils, t.Outlayer.Item) }(window, function(t, e, i, n, s, r) {
        "use strict";

        function o(t, e) {
            var i = s.getQueryElement(t);
            if (i) {
                this.element = i, l && (this.$element = l(this.element)), this.options = s.extend({}, this.constructor.defaults), this.option(e);
                var n = ++d;
                this.element.outlayerGUID = n, u[n] = this, this._create(), this.options.isInitLayout && this.layout()
            } else a && a.error("Bad element for " + this.constructor.namespace + ": " + (i || t))
        }
        var a = t.console,
            l = t.jQuery,
            h = function() {},
            d = 0,
            u = {};
        return o.namespace = "outlayer", o.Item = r, o.defaults = { containerStyle: { position: "relative" }, isInitLayout: !0, isOriginLeft: !0, isOriginTop: !0, isResizeBound: !0, isResizingContainer: !0, transitionDuration: "0.4s", hiddenStyle: { opacity: 0, transform: "scale(0.001)" }, visibleStyle: { opacity: 1, transform: "scale(1)" } }, s.extend(o.prototype, i.prototype), o.prototype.option = function(t) { s.extend(this.options, t) }, o.prototype._create = function() { this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), s.extend(this.element.style, this.options.containerStyle), this.options.isResizeBound && this.bindResize() }, o.prototype.reloadItems = function() { this.items = this._itemize(this.element.children) }, o.prototype._itemize = function(t) {
            for (var e = this._filterFindItemElements(t), i = this.constructor.Item, n = [], s = 0, r = e.length; r > s; s++) {
                var o = new i(e[s], this);
                n.push(o)
            }
            return n
        }, o.prototype._filterFindItemElements = function(t) { return s.filterFindElements(t, this.options.itemSelector) }, o.prototype.getItemElements = function() { for (var t = [], e = 0, i = this.items.length; i > e; e++) t.push(this.items[e].element); return t }, o.prototype.layout = function() {
            this._resetLayout(), this._manageStamps();
            var t = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
            this.layoutItems(this.items, t), this._isLayoutInited = !0
        }, o.prototype._init = o.prototype.layout, o.prototype._resetLayout = function() { this.getSize() }, o.prototype.getSize = function() { this.size = n(this.element) }, o.prototype._getMeasurement = function(t, e) {
            var i, r = this.options[t];
            r ? ("string" == typeof r ? i = this.element.querySelector(r) : s.isElement(r) && (i = r), this[t] = i ? n(i)[e] : r) : this[t] = 0
        }, o.prototype.layoutItems = function(t, e) { t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout() }, o.prototype._getItemsForLayout = function(t) {
            for (var e = [], i = 0, n = t.length; n > i; i++) {
                var s = t[i];
                s.isIgnored || e.push(s)
            }
            return e
        }, o.prototype._layoutItems = function(t, e) {
            if (this._emitCompleteOnItems("layout", t), t && t.length) {
                for (var i = [], n = 0, s = t.length; s > n; n++) {
                    var r = t[n],
                        o = this._getItemLayoutPosition(r);
                    o.item = r, o.isInstant = e || r.isLayoutInstant, i.push(o)
                }
                this._processLayoutQueue(i)
            }
        }, o.prototype._getItemLayoutPosition = function() { return { x: 0, y: 0 } }, o.prototype._processLayoutQueue = function(t) {
            for (var e = 0, i = t.length; i > e; e++) {
                var n = t[e];
                this._positionItem(n.item, n.x, n.y, n.isInstant)
            }
        }, o.prototype._positionItem = function(t, e, i, n) { n ? t.goTo(e, i) : t.moveTo(e, i) }, o.prototype._postLayout = function() { this.resizeContainer() }, o.prototype.resizeContainer = function() {
            if (this.options.isResizingContainer) {
                var t = this._getContainerSize();
                t && (this._setContainerMeasure(t.width, !0), this._setContainerMeasure(t.height, !1))
            }
        }, o.prototype._getContainerSize = h, o.prototype._setContainerMeasure = function(t, e) {
            if (void 0 !== t) {
                var i = this.size;
                i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth), t = Math.max(t, 0), this.element.style[e ? "width" : "height"] = t + "px"
            }
        }, o.prototype._emitCompleteOnItems = function(t, e) {
            function i() { s.dispatchEvent(t + "Complete", null, [e]) }

            function n() {++o === r && i() }
            var s = this,
                r = e.length;
            if (e && r)
                for (var o = 0, a = 0, l = e.length; l > a; a++) { e[a].once(t, n) } else i()
        }, o.prototype.dispatchEvent = function(t, e, i) {
            var n = e ? [e].concat(i) : i;
            if (this.emitEvent(t, n), l)
                if (this.$element = this.$element || l(this.element), e) {
                    var s = l.Event(e);
                    s.type = t, this.$element.trigger(s, i)
                } else this.$element.trigger(t, i)
        }, o.prototype.ignore = function(t) {
            var e = this.getItem(t);
            e && (e.isIgnored = !0)
        }, o.prototype.unignore = function(t) {
            var e = this.getItem(t);
            e && delete e.isIgnored
        }, o.prototype.stamp = function(t) {
            if (t = this._find(t)) {
                this.stamps = this.stamps.concat(t);
                for (var e = 0, i = t.length; i > e; e++) {
                    var n = t[e];
                    this.ignore(n)
                }
            }
        }, o.prototype.unstamp = function(t) {
            if (t = this._find(t))
                for (var e = 0, i = t.length; i > e; e++) {
                    var n = t[e];
                    s.removeFrom(this.stamps, n), this.unignore(n)
                }
        }, o.prototype._find = function(t) { return t ? ("string" == typeof t && (t = this.element.querySelectorAll(t)), t = s.makeArray(t)) : void 0 }, o.prototype._manageStamps = function() {
            if (this.stamps && this.stamps.length) {
                this._getBoundingRect();
                for (var t = 0, e = this.stamps.length; e > t; t++) {
                    var i = this.stamps[t];
                    this._manageStamp(i)
                }
            }
        }, o.prototype._getBoundingRect = function() {
            var t = this.element.getBoundingClientRect(),
                e = this.size;
            this._boundingRect = { left: t.left + e.paddingLeft + e.borderLeftWidth, top: t.top + e.paddingTop + e.borderTopWidth, right: t.right - (e.paddingRight + e.borderRightWidth), bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth) }
        }, o.prototype._manageStamp = h, o.prototype._getElementOffset = function(t) {
            var e = t.getBoundingClientRect(),
                i = this._boundingRect,
                s = n(t);
            return { left: e.left - i.left - s.marginLeft, top: e.top - i.top - s.marginTop, right: i.right - e.right - s.marginRight, bottom: i.bottom - e.bottom - s.marginBottom }
        }, o.prototype.handleEvent = function(t) {
            var e = "on" + t.type;
            this[e] && this[e](t)
        }, o.prototype.bindResize = function() { this.isResizeBound || (e.bind(t, "resize", this), this.isResizeBound = !0) }, o.prototype.unbindResize = function() { this.isResizeBound && e.unbind(t, "resize", this), this.isResizeBound = !1 }, o.prototype.onresize = function() {
            this.resizeTimeout && clearTimeout(this.resizeTimeout);
            var t = this;
            this.resizeTimeout = setTimeout(function() { t.resize(), delete t.resizeTimeout }, 100)
        }, o.prototype.resize = function() { this.isResizeBound && this.needsResizeLayout() && this.layout() }, o.prototype.needsResizeLayout = function() { var t = n(this.element); return this.size && t && t.innerWidth !== this.size.innerWidth }, o.prototype.addItems = function(t) { var e = this._itemize(t); return e.length && (this.items = this.items.concat(e)), e }, o.prototype.appended = function(t) {
            var e = this.addItems(t);
            e.length && (this.layoutItems(e, !0), this.reveal(e))
        }, o.prototype.prepended = function(t) {
            var e = this._itemize(t);
            if (e.length) {
                var i = this.items.slice(0);
                this.items = e.concat(i), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(i)
            }
        }, o.prototype.reveal = function(t) { this._emitCompleteOnItems("reveal", t); for (var e = t && t.length, i = 0; e && e > i; i++) { t[i].reveal() } }, o.prototype.hide = function(t) { this._emitCompleteOnItems("hide", t); for (var e = t && t.length, i = 0; e && e > i; i++) { t[i].hide() } }, o.prototype.revealItemElements = function(t) {
            var e = this.getItems(t);
            this.reveal(e)
        }, o.prototype.hideItemElements = function(t) {
            var e = this.getItems(t);
            this.hide(e)
        }, o.prototype.getItem = function(t) { for (var e = 0, i = this.items.length; i > e; e++) { var n = this.items[e]; if (n.element === t) return n } }, o.prototype.getItems = function(t) {
            for (var e = [], i = 0, n = (t = s.makeArray(t)).length; n > i; i++) {
                var r = t[i],
                    o = this.getItem(r);
                o && e.push(o)
            }
            return e
        }, o.prototype.remove = function(t) {
            var e = this.getItems(t);
            if (this._emitCompleteOnItems("remove", e), e && e.length)
                for (var i = 0, n = e.length; n > i; i++) {
                    var r = e[i];
                    r.remove(), s.removeFrom(this.items, r)
                }
        }, o.prototype.destroy = function() {
            var t = this.element.style;
            t.height = "", t.position = "", t.width = "";
            for (var e = 0, i = this.items.length; i > e; e++) { this.items[e].destroy() }
            this.unbindResize();
            var n = this.element.outlayerGUID;
            delete u[n], delete this.element.outlayerGUID, l && l.removeData(this.element, this.constructor.namespace)
        }, o.data = function(t) { var e = (t = s.getQueryElement(t)) && t.outlayerGUID; return e && u[e] }, o.create = function(t, e) {
            function i() { o.apply(this, arguments) }
            return Object.create ? i.prototype = Object.create(o.prototype) : s.extend(i.prototype, o.prototype), i.prototype.constructor = i, i.defaults = s.extend({}, o.defaults), s.extend(i.defaults, e), i.prototype.settings = {}, i.namespace = t, i.data = o.data, i.Item = function() { r.apply(this, arguments) }, i.Item.prototype = new r, s.htmlInit(i, t), l && l.bridget && l.bridget(t, i), i
        }, o.Item = r, o
    }),
    function(t, e) { "use strict"; "function" == typeof define && define.amd ? define("isotope/js/item", ["outlayer/outlayer"], e) : "object" == typeof exports ? module.exports = e(require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.Item = e(t.Outlayer)) }(window, function(t) {
        "use strict";

        function e() { t.Item.apply(this, arguments) }
        e.prototype = new t.Item, e.prototype._create = function() { this.id = this.layout.itemGUID++, t.Item.prototype._create.call(this), this.sortData = {} }, e.prototype.updateSortData = function() {
            if (!this.isIgnored) {
                this.sortData.id = this.id, this.sortData["original-order"] = this.id, this.sortData.random = Math.random();
                var t = this.layout.options.getSortData,
                    e = this.layout._sorters;
                for (var i in t) {
                    var n = e[i];
                    this.sortData[i] = n(this.element, this)
                }
            }
        };
        var i = e.prototype.destroy;
        return e.prototype.destroy = function() { i.apply(this, arguments), this.css({ display: "" }) }, e
    }),
    function(t, e) { "use strict"; "function" == typeof define && define.amd ? define("isotope/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], e) : "object" == typeof exports ? module.exports = e(require("get-size"), require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.LayoutMode = e(t.getSize, t.Outlayer)) }(window, function(t, e) {
        "use strict";

        function i(t) { this.isotope = t, t && (this.options = t.options[this.namespace], this.element = t.element, this.items = t.filteredItems, this.size = t.size) }
        return function() {
            function t(t) { return function() { return e.prototype[t].apply(this.isotope, arguments) } }
            for (var n = ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout"], s = 0, r = n.length; r > s; s++) {
                var o = n[s];
                i.prototype[o] = t(o)
            }
        }(), i.prototype.needsVerticalResizeLayout = function() { var e = t(this.isotope.element); return this.isotope.size && e && e.innerHeight != this.isotope.size.innerHeight }, i.prototype._getMeasurement = function() { this.isotope._getMeasurement.apply(this, arguments) }, i.prototype.getColumnWidth = function() { this.getSegmentSize("column", "Width") }, i.prototype.getRowHeight = function() { this.getSegmentSize("row", "Height") }, i.prototype.getSegmentSize = function(t, e) {
            var i = t + e,
                n = "outer" + e;
            if (this._getMeasurement(i, n), !this[i]) {
                var s = this.getFirstItemSize();
                this[i] = s && s[n] || this.isotope.size["inner" + e]
            }
        }, i.prototype.getFirstItemSize = function() { var e = this.isotope.filteredItems[0]; return e && e.element && t(e.element) }, i.prototype.layout = function() { this.isotope.layout.apply(this.isotope, arguments) }, i.prototype.getSize = function() { this.isotope.getSize(), this.size = this.isotope.size }, i.modes = {}, i.create = function(t, e) {
            function n() { i.apply(this, arguments) }
            return n.prototype = new i, e && (n.options = e), n.prototype.namespace = t, i.modes[t] = n, n
        }, i
    }),
    function(t, e) { "use strict"; "function" == typeof define && define.amd ? define("masonry/masonry", ["outlayer/outlayer", "get-size/get-size", "fizzy-ui-utils/utils"], e) : "object" == typeof exports ? module.exports = e(require("outlayer"), require("get-size"), require("fizzy-ui-utils")) : t.Masonry = e(t.Outlayer, t.getSize, t.fizzyUIUtils) }(window, function(t, e, i) {
        var n = t.create("masonry");
        return n.prototype._resetLayout = function() {
            this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns();
            var t = this.cols;
            for (this.colYs = []; t--;) this.colYs.push(0);
            this.maxY = 0
        }, n.prototype.measureColumns = function() {
            if (this.getContainerWidth(), !this.columnWidth) {
                var t = this.items[0],
                    i = t && t.element;
                this.columnWidth = i && e(i).outerWidth || this.containerWidth
            }
            var n = this.columnWidth += this.gutter,
                s = this.containerWidth + this.gutter,
                r = s / n,
                o = n - s % n;
            r = Math[o && 1 > o ? "round" : "floor"](r), this.cols = Math.max(r, 1)
        }, n.prototype.getContainerWidth = function() {
            var t = this.options.isFitWidth ? this.element.parentNode : this.element,
                i = e(t);
            this.containerWidth = i && i.innerWidth
        }, n.prototype._getItemLayoutPosition = function(t) {
            t.getSize();
            var e = t.size.outerWidth % this.columnWidth,
                n = Math[e && 1 > e ? "round" : "ceil"](t.size.outerWidth / this.columnWidth);
            n = Math.min(n, this.cols);
            for (var s = this._getColGroup(n), r = Math.min.apply(Math, s), o = i.indexOf(s, r), a = { x: this.columnWidth * o, y: r }, l = r + t.size.outerHeight, h = this.cols + 1 - s.length, d = 0; h > d; d++) this.colYs[o + d] = l;
            return a
        }, n.prototype._getColGroup = function(t) {
            if (2 > t) return this.colYs;
            for (var e = [], i = this.cols + 1 - t, n = 0; i > n; n++) {
                var s = this.colYs.slice(n, n + t);
                e[n] = Math.max.apply(Math, s)
            }
            return e
        }, n.prototype._manageStamp = function(t) {
            var i = e(t),
                n = this._getElementOffset(t),
                s = this.options.isOriginLeft ? n.left : n.right,
                r = s + i.outerWidth,
                o = Math.floor(s / this.columnWidth);
            o = Math.max(0, o);
            var a = Math.floor(r / this.columnWidth);
            a -= r % this.columnWidth ? 0 : 1, a = Math.min(this.cols - 1, a);
            for (var l = (this.options.isOriginTop ? n.top : n.bottom) + i.outerHeight, h = o; a >= h; h++) this.colYs[h] = Math.max(l, this.colYs[h])
        }, n.prototype._getContainerSize = function() { this.maxY = Math.max.apply(Math, this.colYs); var t = { height: this.maxY }; return this.options.isFitWidth && (t.width = this._getContainerFitWidth()), t }, n.prototype._getContainerFitWidth = function() { for (var t = 0, e = this.cols; --e && 0 === this.colYs[e];) t++; return (this.cols - t) * this.columnWidth - this.gutter }, n.prototype.needsResizeLayout = function() { var t = this.containerWidth; return this.getContainerWidth(), t !== this.containerWidth }, n
    }),
    function(t, e) { "use strict"; "function" == typeof define && define.amd ? define("isotope/js/layout-modes/masonry", ["../layout-mode", "masonry/masonry"], e) : "object" == typeof exports ? module.exports = e(require("../layout-mode"), require("masonry-layout")) : e(t.Isotope.LayoutMode, t.Masonry) }(window, function(t, e) {
        "use strict";
        var i = t.create("masonry"),
            n = i.prototype._getElementOffset,
            s = i.prototype.layout,
            r = i.prototype._getMeasurement;
        (function(t, e) { for (var i in e) t[i] = e[i] })(i.prototype, e.prototype), i.prototype._getElementOffset = n, i.prototype.layout = s, i.prototype._getMeasurement = r;
        var o = i.prototype.measureColumns;
        i.prototype.measureColumns = function() { this.items = this.isotope.filteredItems, o.call(this) };
        var a = i.prototype._manageStamp;
        return i.prototype._manageStamp = function() { this.options.isOriginLeft = this.isotope.options.isOriginLeft, this.options.isOriginTop = this.isotope.options.isOriginTop, a.apply(this, arguments) }, i
    }),
    function(t, e) { "use strict"; "function" == typeof define && define.amd ? define("isotope/js/layout-modes/fit-rows", ["../layout-mode"], e) : "object" == typeof exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode) }(window, function(t) {
        "use strict";
        var e = t.create("fitRows");
        return e.prototype._resetLayout = function() { this.x = 0, this.y = 0, this.maxY = 0, this._getMeasurement("gutter", "outerWidth") }, e.prototype._getItemLayoutPosition = function(t) {
            t.getSize();
            var e = t.size.outerWidth + this.gutter,
                i = this.isotope.size.innerWidth + this.gutter;
            0 !== this.x && e + this.x > i && (this.x = 0, this.y = this.maxY);
            var n = { x: this.x, y: this.y };
            return this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight), this.x += e, n
        }, e.prototype._getContainerSize = function() { return { height: this.maxY } }, e
    }),
    function(t, e) { "use strict"; "function" == typeof define && define.amd ? define("isotope/js/layout-modes/vertical", ["../layout-mode"], e) : "object" == typeof exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode) }(window, function(t) {
        "use strict";
        var e = t.create("vertical", { horizontalAlignment: 0 });
        return e.prototype._resetLayout = function() { this.y = 0 }, e.prototype._getItemLayoutPosition = function(t) {
            t.getSize();
            var e = (this.isotope.size.innerWidth - t.size.outerWidth) * this.options.horizontalAlignment,
                i = this.y;
            return this.y += t.size.outerHeight, { x: e, y: i }
        }, e.prototype._getContainerSize = function() { return { height: this.y } }, e
    }),
    function(t, e) { "use strict"; "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "matches-selector/matches-selector", "fizzy-ui-utils/utils", "isotope/js/item", "isotope/js/layout-mode", "isotope/js/layout-modes/masonry", "isotope/js/layout-modes/fit-rows", "isotope/js/layout-modes/vertical"], function(i, n, s, r, o, a) { return e(t, i, n, s, r, o, a) }) : "object" == typeof exports ? module.exports = e(t, require("outlayer"), require("get-size"), require("desandro-matches-selector"), require("fizzy-ui-utils"), require("./item"), require("./layout-mode"), require("./layout-modes/masonry"), require("./layout-modes/fit-rows"), require("./layout-modes/vertical")) : t.Isotope = e(t, t.Outlayer, t.getSize, t.matchesSelector, t.fizzyUIUtils, t.Isotope.Item, t.Isotope.LayoutMode) }(window, function(t, e, i, n, s, r, o) {
        var a = t.jQuery,
            l = String.prototype.trim ? function(t) { return t.trim() } : function(t) { return t.replace(/^\s+|\s+$/g, "") },
            h = document.documentElement.textContent ? function(t) { return t.textContent } : function(t) { return t.innerText },
            d = e.create("isotope", { layoutMode: "masonry", isJQueryFiltering: !0, sortAscending: !0 });
        d.Item = r, d.LayoutMode = o, d.prototype._create = function() { for (var t in this.itemGUID = 0, this._sorters = {}, this._getSorters(), e.prototype._create.call(this), this.modes = {}, this.filteredItems = this.items, this.sortHistory = ["original-order"], o.modes) this._initLayoutMode(t) }, d.prototype.reloadItems = function() { this.itemGUID = 0, e.prototype.reloadItems.call(this) }, d.prototype._itemize = function() { for (var t = e.prototype._itemize.apply(this, arguments), i = 0, n = t.length; n > i; i++) { t[i].id = this.itemGUID++ } return this._updateItemsSortData(t), t }, d.prototype._initLayoutMode = function(t) {
            var e = o.modes[t],
                i = this.options[t] || {};
            this.options[t] = e.options ? s.extend(e.options, i) : i, this.modes[t] = new e(this)
        }, d.prototype.layout = function() { return !this._isLayoutInited && this.options.isInitLayout ? void this.arrange() : void this._layout() }, d.prototype._layout = function() {
            var t = this._getIsInstant();
            this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, t), this._isLayoutInited = !0
        }, d.prototype.arrange = function(t) {
            function e() { n.reveal(i.needReveal), n.hide(i.needHide) }
            this.option(t), this._getIsInstant();
            var i = this._filter(this.items);
            this.filteredItems = i.matches;
            var n = this;
            this._bindArrangeComplete(), this._isInstant ? this._noTransition(e) : e(), this._sort(), this._layout()
        }, d.prototype._init = d.prototype.arrange, d.prototype._getIsInstant = function() { var t = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited; return this._isInstant = t, t }, d.prototype._bindArrangeComplete = function() {
            function t() { e && i && n && s.dispatchEvent("arrangeComplete", null, [s.filteredItems]) }
            var e, i, n, s = this;
            this.once("layoutComplete", function() { e = !0, t() }), this.once("hideComplete", function() { i = !0, t() }), this.once("revealComplete", function() { n = !0, t() })
        }, d.prototype._filter = function(t) {
            var e = this.options.filter;
            e = e || "*";
            for (var i = [], n = [], s = [], r = this._getFilterTest(e), o = 0, a = t.length; a > o; o++) {
                var l = t[o];
                if (!l.isIgnored) {
                    var h = r(l);
                    h && i.push(l), h && l.isHidden ? n.push(l) : h || l.isHidden || s.push(l)
                }
            }
            return { matches: i, needReveal: n, needHide: s }
        }, d.prototype._getFilterTest = function(t) { return a && this.options.isJQueryFiltering ? function(e) { return a(e.element).is(t) } : "function" == typeof t ? function(e) { return t(e.element) } : function(e) { return n(e.element, t) } }, d.prototype.updateSortData = function(t) {
            var e;
            t ? (t = s.makeArray(t), e = this.getItems(t)) : e = this.items, this._getSorters(), this._updateItemsSortData(e)
        }, d.prototype._getSorters = function() {
            var t = this.options.getSortData;
            for (var e in t) {
                var i = t[e];
                this._sorters[e] = u(i)
            }
        }, d.prototype._updateItemsSortData = function(t) { for (var e = t && t.length, i = 0; e && e > i; i++) { t[i].updateSortData() } };
        var u = function() {
            return function(t) {
                if ("string" != typeof t) return t;
                var e = l(t).split(" "),
                    i = e[0],
                    n = i.match(/^\[(.+)\]$/),
                    s = function(t, e) { return t ? function(e) { return e.getAttribute(t) } : function(t) { var i = t.querySelector(e); return i && h(i) } }(n && n[1], i),
                    r = d.sortDataParsers[e[1]];
                return r ? function(t) { return t && r(s(t)) } : function(t) { return t && s(t) }
            }
        }();
        d.sortDataParsers = { parseInt: function(t) { return parseInt(t, 10) }, parseFloat: function(t) { return parseFloat(t) } }, d.prototype._sort = function() {
            var t = this.options.sortBy;
            if (t) {
                var e = function(t, e) {
                    return function(i, n) {
                        for (var s = 0, r = t.length; r > s; s++) {
                            var o = t[s],
                                a = i.sortData[o],
                                l = n.sortData[o];
                            if (a > l || l > a) return (a > l ? 1 : -1) * ((void 0 !== e[o] ? e[o] : e) ? 1 : -1)
                        }
                        return 0
                    }
                }([].concat.apply(t, this.sortHistory), this.options.sortAscending);
                this.filteredItems.sort(e), t != this.sortHistory[0] && this.sortHistory.unshift(t)
            }
        }, d.prototype._mode = function() {
            var t = this.options.layoutMode,
                e = this.modes[t];
            if (!e) throw new Error("No layout mode: " + t);
            return e.options = this.options[t], e
        }, d.prototype._resetLayout = function() { e.prototype._resetLayout.call(this), this._mode()._resetLayout() }, d.prototype._getItemLayoutPosition = function(t) { return this._mode()._getItemLayoutPosition(t) }, d.prototype._manageStamp = function(t) { this._mode()._manageStamp(t) }, d.prototype._getContainerSize = function() { return this._mode()._getContainerSize() }, d.prototype.needsResizeLayout = function() { return this._mode().needsResizeLayout() }, d.prototype.appended = function(t) {
            var e = this.addItems(t);
            if (e.length) {
                var i = this._filterRevealAdded(e);
                this.filteredItems = this.filteredItems.concat(i)
            }
        }, d.prototype.prepended = function(t) {
            var e = this._itemize(t);
            if (e.length) {
                this._resetLayout(), this._manageStamps();
                var i = this._filterRevealAdded(e);
                this.layoutItems(this.filteredItems), this.filteredItems = i.concat(this.filteredItems), this.items = e.concat(this.items)
            }
        }, d.prototype._filterRevealAdded = function(t) { var e = this._filter(t); return this.hide(e.needHide), this.reveal(e.matches), this.layoutItems(e.matches, !0), e.matches }, d.prototype.insert = function(t) {
            var e = this.addItems(t);
            if (e.length) {
                var i, n, s = e.length;
                for (i = 0; s > i; i++) n = e[i], this.element.appendChild(n.element);
                var r = this._filter(e).matches;
                for (i = 0; s > i; i++) e[i].isLayoutInstant = !0;
                for (this.arrange(), i = 0; s > i; i++) delete e[i].isLayoutInstant;
                this.reveal(r)
            }
        };
        var c = d.prototype.remove;
        return d.prototype.remove = function(t) {
            t = s.makeArray(t);
            var e = this.getItems(t);
            c.call(this, t);
            var i = e && e.length;
            if (i)
                for (var n = 0; i > n; n++) {
                    var r = e[n];
                    s.removeFrom(this.filteredItems, r)
                }
        }, d.prototype.shuffle = function() {
            for (var t = 0, e = this.items.length; e > t; t++) { this.items[t].sortData.random = Math.random() }
            this.options.sortBy = "random", this._sort(), this._layout()
        }, d.prototype._noTransition = function(t) {
            var e = this.options.transitionDuration;
            this.options.transitionDuration = 0;
            var i = t.call(this);
            return this.options.transitionDuration = e, i
        }, d.prototype.getFilteredItemElements = function() { for (var t = [], e = 0, i = this.filteredItems.length; i > e; e++) t.push(this.filteredItems[e].element); return t }, d
    }),
    function(t) { "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof module && module.exports ? module.exports = function(e, i) { return void 0 === i && (i = "undefined" != typeof window ? require("jquery") : require("jquery")(e)), t(i), i } : t(jQuery) }(function(t) {
        var e = function(e, i) { this.settings = i, this.checkSettings(), this.imgAnalyzerTimeout = null, this.entries = null, this.buildingRow = { entriesBuff: [], width: 0, height: 0, aspectRatio: 0 }, this.lastFetchedEntry = null, this.lastAnalyzedIndex = -1, this.yield = { every: 2, flushed: 0 }, this.border = 0 <= i.border ? i.border : i.margins, this.maxRowHeight = this.retrieveMaxRowHeight(), this.suffixRanges = this.retrieveSuffixRanges(), this.offY = this.border, this.rows = 0, this.spinner = { phase: 0, timeSlot: 150, $el: t('<div class="spinner"><span></span><span></span><span></span></div>'), intervalId: null }, this.scrollBarOn = !1, this.checkWidthIntervalId = null, this.galleryWidth = e.width(), this.$gallery = e };
        e.prototype.getSuffix = function(t, e) {
            var i, n;
            for (i = e < t ? t : e, n = 0; n < this.suffixRanges.length; n++)
                if (i <= this.suffixRanges[n]) return this.settings.sizeRangeSuffixes[this.suffixRanges[n]];
            return this.settings.sizeRangeSuffixes[this.suffixRanges[n - 1]]
        }, e.prototype.removeSuffix = function(t, e) { return t.substring(0, t.length - e.length) }, e.prototype.endsWith = function(t, e) { return -1 !== t.indexOf(e, t.length - e.length) }, e.prototype.getUsedSuffix = function(t) {
            for (var e in this.settings.sizeRangeSuffixes)
                if (this.settings.sizeRangeSuffixes.hasOwnProperty(e)) { if (0 === this.settings.sizeRangeSuffixes[e].length) continue; if (this.endsWith(t, this.settings.sizeRangeSuffixes[e])) return this.settings.sizeRangeSuffixes[e] }
            return ""
        }, e.prototype.newSrc = function(t, e, i, n) {
            var s;
            if (this.settings.thumbnailPath) s = this.settings.thumbnailPath(t, e, i, n);
            else {
                var r = t.match(this.settings.extension),
                    o = null !== r ? r[0] : "";
                s = t.replace(this.settings.extension, ""), s = this.removeSuffix(s, this.getUsedSuffix(s)), s += this.getSuffix(e, i) + o
            }
            return s
        }, e.prototype.showImg = function(t, e) { this.settings.cssAnimation ? (t.addClass("jg-entry-visible"), e && e()) : (t.stop().fadeTo(this.settings.imagesAnimationDuration, 1, e), t.find(this.settings.imgSelector).stop().fadeTo(this.settings.imagesAnimationDuration, 1, e)) }, e.prototype.extractImgSrcFromImage = function(t) {
            var e = t.data("safe-src"),
                i = "date-safe-src";
            return void 0 === e && (e = t.attr("src"), i = "src"), t.data("jg.originalSrc", e), t.data("https://www.innovationplans.com/idesign/avo2/avo-light/jg.src", e), t.data("jg.originalSrcLoc", i), e
        }, e.prototype.imgFromEntry = function(t) { var e = t.find(this.settings.imgSelector); return 0 === e.length ? null : e }, e.prototype.captionFromEntry = function(t) { var e = t.find("> .caption"); return 0 === e.length ? null : e }, e.prototype.displayEntry = function(t, e, i, n, s, r) {
            t.width(n), t.height(r), t.css("top", i), t.css("left", e);
            var o = this.imgFromEntry(t);
            if (null !== o) { o.css("width", n), o.css("height", s), o.css("margin-left", -n / 2), o.css("margin-top", -s / 2); var a = o.data("https://www.innovationplans.com/idesign/avo2/avo-light/jg.src"); if (a) { a = this.newSrc(a, n, s, o[0]), o.one("error", function() { this.resetImgSrc(o) }); var l = function() { o.attr("src", a) }; "skipped" === t.data("jg.loaded") ? this.onImageEvent(a, function() { this.showImg(t, l), t.data("jg.loaded", !0) }.bind(this)) : this.showImg(t, l) } } else this.showImg(t);
            this.displayEntryCaption(t)
        }, e.prototype.displayEntryCaption = function(e) {
            var i = this.imgFromEntry(e);
            if (null !== i && this.settings.captions) {
                var n = this.captionFromEntry(e);
                if (null === n) {
                    var s = i.attr("alt");
                    this.isValidCaption(s) || (s = e.attr("title")), this.isValidCaption(s) && (n = t('<div class="caption">' + s + "</div>"), e.append(n), e.data("jg.createdCaption", !0))
                }
                null !== n && (this.settings.cssAnimation || n.stop().fadeTo(0, this.settings.captionSettings.nonVisibleOpacity), this.addCaptionEventsHandlers(e))
            } else this.removeCaptionEventsHandlers(e)
        }, e.prototype.isValidCaption = function(t) { return void 0 !== t && 0 < t.length }, e.prototype.onEntryMouseEnterForCaption = function(e) {
            var i = this.captionFromEntry(t(e.currentTarget));
            this.settings.cssAnimation ? i.addClass("caption-visible").removeClass("caption-hidden") : i.stop().fadeTo(this.settings.captionSettings.animationDuration, this.settings.captionSettings.visibleOpacity)
        }, e.prototype.onEntryMouseLeaveForCaption = function(e) {
            var i = this.captionFromEntry(t(e.currentTarget));
            this.settings.cssAnimation ? i.removeClass("caption-visible").removeClass("caption-hidden") : i.stop().fadeTo(this.settings.captionSettings.animationDuration, this.settings.captionSettings.nonVisibleOpacity)
        }, e.prototype.addCaptionEventsHandlers = function(e) {
            var i = e.data("jg.captionMouseEvents");
            void 0 === i && (i = { mouseenter: t.proxy(this.onEntryMouseEnterForCaption, this), mouseleave: t.proxy(this.onEntryMouseLeaveForCaption, this) }, e.on("mouseenter", void 0, void 0, i.mouseenter), e.on("mouseleave", void 0, void 0, i.mouseleave), e.data("jg.captionMouseEvents", i))
        }, e.prototype.removeCaptionEventsHandlers = function(t) {
            var e = t.data("jg.captionMouseEvents");
            void 0 !== e && (t.off("mouseenter", void 0, e.mouseenter), t.off("mouseleave", void 0, e.mouseleave), t.removeData("jg.captionMouseEvents"))
        }, e.prototype.clearBuildingRow = function() { this.buildingRow.entriesBuff = [], this.buildingRow.aspectRatio = 0, this.buildingRow.width = 0 }, e.prototype.prepareBuildingRow = function(t) {
            var e, i, n, s, r, o = !0,
                a = 0,
                l = this.galleryWidth - 2 * this.border - (this.buildingRow.entriesBuff.length - 1) * this.settings.margins,
                h = l / this.buildingRow.aspectRatio,
                d = this.settings.rowHeight,
                u = this.buildingRow.width / l > this.settings.justifyThreshold;
            if (t && "hide" === this.settings.lastRow && !u) { for (e = 0; e < this.buildingRow.entriesBuff.length; e++) i = this.buildingRow.entriesBuff[e], this.settings.cssAnimation ? i.removeClass("jg-entry-visible") : (i.stop().fadeTo(0, .1), i.find("> img, > a > img").fadeTo(0, 0)); return -1 }
            for (t && !u && "justify" !== this.settings.lastRow && "hide" !== this.settings.lastRow && (o = !1, 0 < this.rows && (o = (d = (this.offY - this.border - this.settings.margins * this.rows) / this.rows) * this.buildingRow.aspectRatio / l > this.settings.justifyThreshold)), e = 0; e < this.buildingRow.entriesBuff.length; e++) n = (i = this.buildingRow.entriesBuff[e]).data("jg.width") / i.data("jg.height"), o ? (s = e === this.buildingRow.entriesBuff.length - 1 ? l : h * n, r = h) : (s = d * n, r = d), l -= Math.round(s), i.data("jg.jwidth", Math.round(s)), i.data("jg.jheight", Math.ceil(r)), (0 === e || r < a) && (a = r);
            return this.buildingRow.height = a, o
        }, e.prototype.flushRow = function(t) {
            var e, i, n, s = this.settings,
                r = this.border;
            if (i = this.prepareBuildingRow(t), t && "hide" === s.lastRow && -1 === i) this.clearBuildingRow();
            else {
                if (this.maxRowHeight && this.maxRowHeight < this.buildingRow.height && (this.buildingRow.height = this.maxRowHeight), t && ("center" === s.lastRow || "right" === s.lastRow)) { var o = this.galleryWidth - 2 * this.border - (this.buildingRow.entriesBuff.length - 1) * s.margins; for (n = 0; n < this.buildingRow.entriesBuff.length; n++) o -= (e = this.buildingRow.entriesBuff[n]).data("jg.jwidth"); "center" === s.lastRow ? r += o / 2 : "right" === s.lastRow && (r += o) }
                var a = this.buildingRow.entriesBuff.length - 1;
                for (n = 0; n <= a; n++) e = this.buildingRow.entriesBuff[this.settings.rtl ? a - n : n], this.displayEntry(e, r, this.offY, e.data("jg.jwidth"), e.data("jg.jheight"), this.buildingRow.height), r += e.data("jg.jwidth") + s.margins;
                this.galleryHeightToSet = this.offY + this.buildingRow.height + this.border, this.setGalleryTempHeight(this.galleryHeightToSet + this.getSpinnerHeight()), (!t || this.buildingRow.height <= s.rowHeight && i) && (this.offY += this.buildingRow.height + s.margins, this.rows += 1, this.clearBuildingRow(), this.settings.triggerEvent.call(this, "jg.rowflush"))
            }
        };
        var i = 0;
        e.prototype.rememberGalleryHeight = function() { i = this.$gallery.height(), this.$gallery.height(i) }, e.prototype.setGalleryTempHeight = function(t) { i = Math.max(t, i), this.$gallery.height(i) }, e.prototype.setGalleryFinalHeight = function(t) { i = t, this.$gallery.height(t) }, e.prototype.checkWidth = function() {
            this.checkWidthIntervalId = setInterval(t.proxy(function() {
                if (this.$gallery.is(":visible")) {
                    var t = parseFloat(this.$gallery.width());
                    Math.abs(t - this.galleryWidth) > this.settings.refreshSensitivity && (this.galleryWidth = t, this.rewind(), this.rememberGalleryHeight(), this.startImgAnalyzer(!0))
                }
            }, this), this.settings.refreshTime)
        }, e.prototype.isSpinnerActive = function() { return null !== this.spinner.intervalId }, e.prototype.getSpinnerHeight = function() { return this.spinner.$el.innerHeight() }, e.prototype.stopLoadingSpinnerAnimation = function() { clearInterval(this.spinner.intervalId), this.spinner.intervalId = null, this.setGalleryTempHeight(this.$gallery.height() - this.getSpinnerHeight()), this.spinner.$el.detach() }, e.prototype.startLoadingSpinnerAnimation = function() {
            var t = this.spinner,
                e = t.$el.find("span");
            clearInterval(t.intervalId), this.$gallery.append(t.$el), this.setGalleryTempHeight(this.offY + this.buildingRow.height + this.getSpinnerHeight()), t.intervalId = setInterval(function() { t.phase < e.length ? e.eq(t.phase).fadeTo(t.timeSlot, 1) : e.eq(t.phase - e.length).fadeTo(t.timeSlot, 0), t.phase = (t.phase + 1) % (2 * e.length) }, t.timeSlot)
        }, e.prototype.rewind = function() { this.lastFetchedEntry = null, this.lastAnalyzedIndex = -1, this.offY = this.border, this.rows = 0, this.clearBuildingRow() }, e.prototype.getAllEntries = function() { return this.$gallery.children(this.settings.selector).toArray() }, e.prototype.updateEntries = function(e) { var i; return e && null != this.lastFetchedEntry ? i = t(this.lastFetchedEntry).nextAll(this.settings.selector).toArray() : (this.entries = [], i = this.getAllEntries()), 0 < i.length && (t.isFunction(this.settings.sort) ? i = this.sortArray(i) : this.settings.randomize && (i = this.shuffleArray(i)), this.lastFetchedEntry = i[i.length - 1], this.settings.filter ? i = this.filterArray(i) : this.resetFilters(i)), this.entries = this.entries.concat(i), !0 }, e.prototype.insertToGallery = function(e) {
            var i = this;
            t.each(e, function() { t(this).appendTo(i.$gallery) })
        }, e.prototype.shuffleArray = function(t) { var e, i, n; for (e = t.length - 1; 0 < e; e--) i = Math.floor(Math.random() * (e + 1)), n = t[e], t[e] = t[i], t[i] = n; return this.insertToGallery(t), t }, e.prototype.sortArray = function(t) { return t.sort(this.settings.sort), this.insertToGallery(t), t }, e.prototype.resetFilters = function(e) { for (var i = 0; i < e.length; i++) t(e[i]).removeClass("jg-filtered") }, e.prototype.filterArray = function(e) { var i = this.settings; if ("string" === t.type(i.filter)) return e.filter(function(e) { var n = t(e); return n.is(i.filter) ? (n.removeClass("jg-filtered"), !0) : (n.addClass("jg-filtered").removeClass("jg-visible"), !1) }); if (t.isFunction(i.filter)) { for (var n = e.filter(i.filter), s = 0; s < e.length; s++) - 1 === n.indexOf(e[s]) ? t(e[s]).addClass("jg-filtered").removeClass("jg-visible") : t(e[s]).removeClass("jg-filtered"); return n } }, e.prototype.resetImgSrc = function(t) { "src" == t.data("jg.originalSrcLoc") ? t.attr("src", t.data("jg.originalSrc")) : t.attr("src", "") }, e.prototype.destroy = function() {
            clearInterval(this.checkWidthIntervalId), this.stopImgAnalyzerStarter(), t.each(this.getAllEntries(), t.proxy(function(e, i) {
                var n = t(i);
                n.css("width", ""), n.css("height", ""), n.css("top", ""), n.css("left", ""), n.data("jg.loaded", void 0), n.removeClass("jg-entry jg-filtered jg-entry-visible");
                var s = this.imgFromEntry(n);
                s && (s.css("width", ""), s.css("height", ""), s.css("margin-left", ""), s.css("margin-top", ""), this.resetImgSrc(s), s.data("jg.originalSrc", void 0), s.data("jg.originalSrcLoc", void 0), s.data("https://www.innovationplans.com/idesign/avo2/avo-light/jg.src", void 0)), this.removeCaptionEventsHandlers(n);
                var r = this.captionFromEntry(n);
                n.data("jg.createdCaption") ? (n.data("jg.createdCaption", void 0), null !== r && r.remove()) : null !== r && r.fadeTo(0, 1)
            }, this)), this.$gallery.css("height", ""), this.$gallery.removeClass("justified-gallery"), this.$gallery.data("jg.controller", void 0), this.settings.triggerEvent.call(this, "jg.destroy")
        }, e.prototype.analyzeImages = function(e) {
            for (var i = this.lastAnalyzedIndex + 1; i < this.entries.length; i++) {
                var n = t(this.entries[i]);
                if (!0 === n.data("jg.loaded") || "skipped" === n.data("jg.loaded")) {
                    var s = this.galleryWidth - 2 * this.border - (this.buildingRow.entriesBuff.length - 1) * this.settings.margins,
                        r = n.data("jg.width") / n.data("jg.height");
                    if (this.buildingRow.entriesBuff.push(n), this.buildingRow.aspectRatio += r, this.buildingRow.width += r * this.settings.rowHeight, this.lastAnalyzedIndex = i, s / (this.buildingRow.aspectRatio + r) < this.settings.rowHeight && (this.flushRow(!1), ++this.yield.flushed >= this.yield.every)) return void this.startImgAnalyzer(e)
                } else if ("error" !== n.data("jg.loaded")) return
            }
            0 < this.buildingRow.entriesBuff.length && this.flushRow(!0), this.isSpinnerActive() && this.stopLoadingSpinnerAnimation(), this.stopImgAnalyzerStarter(), this.settings.triggerEvent.call(this, e ? "jg.resize" : "jg.complete"), this.setGalleryFinalHeight(this.galleryHeightToSet)
        }, e.prototype.stopImgAnalyzerStarter = function() { this.yield.flushed = 0, null !== this.imgAnalyzerTimeout && (clearTimeout(this.imgAnalyzerTimeout), this.imgAnalyzerTimeout = null) }, e.prototype.startImgAnalyzer = function(t) {
            var e = this;
            this.stopImgAnalyzerStarter(), this.imgAnalyzerTimeout = setTimeout(function() { e.analyzeImages(t) }, .001)
        }, e.prototype.onImageEvent = function(e, i, n) {
            if (i || n) {
                var s = new Image,
                    r = t(s);
                i && r.one("load", function() { r.off("load error"), i(s) }), n && r.one("error", function() { r.off("load error"), n(s) }), s.src = e
            }
        }, e.prototype.init = function() {
            var e = !1,
                i = !1,
                n = this;
            t.each(this.entries, function(s, r) {
                var o = t(r),
                    a = n.imgFromEntry(o);
                if (o.addClass("jg-entry"), !0 !== o.data("jg.loaded") && "skipped" !== o.data("jg.loaded"))
                    if (null !== n.settings.rel && o.attr("rel", n.settings.rel), null !== n.settings.target && o.attr("target", n.settings.target), null !== a) {
                        var l = n.extractImgSrcFromImage(a);
                        if (!1 === n.settings.waitThumbnailsLoad || !l) {
                            var h = parseFloat(a.attr("width")),
                                d = parseFloat(a.attr("height"));
                            if ("svg" === a.prop("tagName") && (h = parseFloat(a[0].getBBox().width), d = parseFloat(a[0].getBBox().height)), !isNaN(h) && !isNaN(d)) return o.data("jg.width", h), o.data("jg.height", d), o.data("jg.loaded", "skipped"), i = !0, n.startImgAnalyzer(!1), !0
                        }
                        o.data("jg.loaded", !1), e = !0, n.isSpinnerActive() || n.startLoadingSpinnerAnimation(), n.onImageEvent(l, function(t) { o.data("jg.width", t.width), o.data("jg.height", t.height), o.data("jg.loaded", !0), n.startImgAnalyzer(!1) }, function() { o.data("jg.loaded", "error"), n.startImgAnalyzer(!1) })
                    } else o.data("jg.loaded", !0), o.data("jg.width", o.width() | parseFloat(o.css("width")) | 1), o.data("jg.height", o.height() | parseFloat(o.css("height")) | 1)
            }), e || i || this.startImgAnalyzer(!1), this.checkWidth()
        }, e.prototype.checkOrConvertNumber = function(e, i) { if ("string" === t.type(e[i]) && (e[i] = parseFloat(e[i])), "number" !== t.type(e[i])) throw i + " must be a number"; if (isNaN(e[i])) throw "invalid number for " + i }, e.prototype.checkSizeRangesSuffixes = function() {
            if ("object" !== t.type(this.settings.sizeRangeSuffixes)) throw "sizeRangeSuffixes must be defined and must be an object";
            var e = [];
            for (var i in this.settings.sizeRangeSuffixes) this.settings.sizeRangeSuffixes.hasOwnProperty(i) && e.push(i);
            for (var n = { 0: "" }, s = 0; s < e.length; s++)
                if ("string" === t.type(e[s])) try { n[parseInt(e[s].replace(/^[a-z]+/, ""), 10)] = this.settings.sizeRangeSuffixes[e[s]] } catch (e) { throw "sizeRangeSuffixes keys must contains correct numbers (" + e + ")" } else n[e[s]] = this.settings.sizeRangeSuffixes[e[s]];
            this.settings.sizeRangeSuffixes = n
        }, e.prototype.retrieveMaxRowHeight = function() {
            var e = null,
                i = this.settings.rowHeight;
            if ("string" === t.type(this.settings.maxRowHeight)) e = this.settings.maxRowHeight.match(/^[0-9]+%$/) ? i * parseFloat(this.settings.maxRowHeight.match(/^([0-9]+)%$/)[1]) / 100 : parseFloat(this.settings.maxRowHeight);
            else {
                if ("number" !== t.type(this.settings.maxRowHeight)) { if (!1 === this.settings.maxRowHeight || null == this.settings.maxRowHeight) return null; throw "maxRowHeight must be a number or a percentage" }
                e = this.settings.maxRowHeight
            }
            if (isNaN(e)) throw "invalid number for maxRowHeight";
            return e < i && (e = i), e
        }, e.prototype.checkSettings = function() { this.checkSizeRangesSuffixes(), this.checkOrConvertNumber(this.settings, "rowHeight"), this.checkOrConvertNumber(this.settings, "margins"), this.checkOrConvertNumber(this.settings, "border"); var e = ["justify", "nojustify", "left", "center", "right", "hide"]; if (-1 === e.indexOf(this.settings.lastRow)) throw "lastRow must be one of: " + e.join(", "); if (this.checkOrConvertNumber(this.settings, "justifyThreshold"), this.settings.justifyThreshold < 0 || 1 < this.settings.justifyThreshold) throw "justifyThreshold must be in the interval [0,1]"; if ("boolean" !== t.type(this.settings.cssAnimation)) throw "cssAnimation must be a boolean"; if ("boolean" !== t.type(this.settings.captions)) throw "captions must be a boolean"; if (this.checkOrConvertNumber(this.settings.captionSettings, "animationDuration"), this.checkOrConvertNumber(this.settings.captionSettings, "visibleOpacity"), this.settings.captionSettings.visibleOpacity < 0 || 1 < this.settings.captionSettings.visibleOpacity) throw "captionSettings.visibleOpacity must be in the interval [0, 1]"; if (this.checkOrConvertNumber(this.settings.captionSettings, "nonVisibleOpacity"), this.settings.captionSettings.nonVisibleOpacity < 0 || 1 < this.settings.captionSettings.nonVisibleOpacity) throw "captionSettings.nonVisibleOpacity must be in the interval [0, 1]"; if (this.checkOrConvertNumber(this.settings, "imagesAnimationDuration"), this.checkOrConvertNumber(this.settings, "refreshTime"), this.checkOrConvertNumber(this.settings, "refreshSensitivity"), "boolean" !== t.type(this.settings.randomize)) throw "randomize must be a boolean"; if ("string" !== t.type(this.settings.selector)) throw "selector must be a string"; if (!1 !== this.settings.sort && !t.isFunction(this.settings.sort)) throw "sort must be false or a comparison function"; if (!1 !== this.settings.filter && !t.isFunction(this.settings.filter) && "string" !== t.type(this.settings.filter)) throw "filter must be false, a string or a filter function" }, e.prototype.retrieveSuffixRanges = function() { var t = []; for (var e in this.settings.sizeRangeSuffixes) this.settings.sizeRangeSuffixes.hasOwnProperty(e) && t.push(parseInt(e, 10)); return t.sort(function(t, e) { return e < t ? 1 : t < e ? -1 : 0 }), t }, e.prototype.updateSettings = function(e) { this.settings = t.extend({}, this.settings, e), this.checkSettings(), this.border = 0 <= this.settings.border ? this.settings.border : this.settings.margins, this.maxRowHeight = this.retrieveMaxRowHeight(), this.suffixRanges = this.retrieveSuffixRanges() }, e.prototype.defaults = { sizeRangeSuffixes: {}, thumbnailPath: void 0, rowHeight: 120, maxRowHeight: !1, margins: 1, border: -1, lastRow: "nojustify", justifyThreshold: .9, waitThumbnailsLoad: !0, captions: !0, cssAnimation: !0, imagesAnimationDuration: 500, captionSettings: { animationDuration: 500, visibleOpacity: .7, nonVisibleOpacity: 0 }, rel: null, target: null, extension: /\.[^.\\\/]+$/, refreshTime: 200, refreshSensitivity: 0, randomize: !1, rtl: !1, sort: !1, filter: !1, selector: "a, div:not(.spinner)", imgSelector: "> img, > a > img, > svg, > a > svg", triggerEvent: function(t) { this.$gallery.trigger(t) } }, t.fn.justifiedGallery = function(i) {
            return this.each(function(n, s) {
                var r = t(s);
                r.addClass("justified-gallery");
                var o = r.data("jg.controller");
                if (void 0 === o) {
                    if (null != i && "object" !== t.type(i)) { if ("destroy" === i) return; throw "The argument must be an object" }
                    o = new e(r, t.extend({}, e.prototype.defaults, i)), r.data("jg.controller", o)
                } else if ("norewind" === i);
                else {
                    if ("destroy" === i) return void o.destroy();
                    o.updateSettings(i), o.rewind()
                }
                o.updateEntries("norewind" === i) && o.init()
            })
        }
    }),
    function() {
        var t, e, i, n, s, r, o, a, l, h, d, u, c, p, f, m, g, v, y, w, b, T, _, S, x, E, C, k, I, A, M, O, P, z, D, L, $, N, R, H, j, F, W, B, q, V, Y, G, U = [].slice,
            X = {}.hasOwnProperty,
            Q = function(t, e) {
                function i() { this.constructor = t }
                for (var n in e) X.call(e, n) && (t[n] = e[n]);
                return i.prototype = e.prototype, t.prototype = new i, t.__super__ = e.prototype, t
            },
            K = [].indexOf || function(t) {
                for (var e = 0, i = this.length; i > e; e++)
                    if (e in this && this[e] === t) return e;
                return -1
            };
        for (b = { catchupTime: 100, initialRate: .03, minTime: 250, ghostTime: 100, maxProgressPerFrame: 20, easeFactor: 1.25, startOnPageLoad: !0, restartOnPushState: !0, restartOnRequestAfter: 500, target: "body", elements: { checkInterval: 100, selectors: ["body"] }, eventLag: { minSamples: 10, sampleCount: 3, lagThreshold: 3 }, ajax: { trackMethods: ["GET"], trackWebSockets: !0, ignoreURLs: [] } }, I = function() { var t; return null != (t = "undefined" != typeof performance && null !== performance && "function" == typeof performance.now ? performance.now() : void 0) ? t : +new Date }, M = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame, w = window.cancelAnimationFrame || window.mozCancelAnimationFrame, null == M && (M = function(t) { return setTimeout(t, 50) }, w = function(t) { return clearTimeout(t) }), P = function(t) { var e, i; return e = I(), (i = function() { var n; return (n = I() - e) >= 33 ? (e = I(), t(n, function() { return M(i) })) : setTimeout(i, 33 - n) })() }, O = function() { var t, e, i; return i = arguments[0], e = arguments[1], t = 3 <= arguments.length ? U.call(arguments, 2) : [], "function" == typeof i[e] ? i[e].apply(i, t) : i[e] }, T = function() {
                var t, e, i, n, s, r, o;
                for (e = arguments[0], r = 0, o = (n = 2 <= arguments.length ? U.call(arguments, 1) : []).length; o > r; r++)
                    if (i = n[r])
                        for (t in i) X.call(i, t) && (s = i[t], null != e[t] && "object" == typeof e[t] && null != s && "object" == typeof s ? T(e[t], s) : e[t] = s);
                return e
            }, g = function(t) { var e, i, n, s, r; for (i = e = 0, s = 0, r = t.length; r > s; s++) n = t[s], i += Math.abs(n), e++; return i / e }, S = function(t, e) { var i, n, s; if (null == t && (t = "options"), null == e && (e = !0), s = document.querySelector("[data-pace-" + t + "]")) { if (i = s.getAttribute("data-pace-" + t), !e) return i; try { return JSON.parse(i) } catch (t) { return n = t, "undefined" != typeof console && null !== console ? console.error("Error parsing inline pace options", n) : void 0 } } }, o = function() {
                function t() {}
                return t.prototype.on = function(t, e, i, n) { var s; return null == n && (n = !1), null == this.bindings && (this.bindings = {}), null == (s = this.bindings)[t] && (s[t] = []), this.bindings[t].push({ handler: e, ctx: i, once: n }) }, t.prototype.once = function(t, e, i) { return this.on(t, e, i, !0) }, t.prototype.off = function(t, e) { var i, n, s; if (null != (null != (n = this.bindings) ? n[t] : void 0)) { if (null == e) return delete this.bindings[t]; for (i = 0, s = []; i < this.bindings[t].length;) s.push(this.bindings[t][i].handler === e ? this.bindings[t].splice(i, 1) : i++); return s } }, t.prototype.trigger = function() { var t, e, i, n, s, r, o, a, l; if (i = arguments[0], t = 2 <= arguments.length ? U.call(arguments, 1) : [], null != (o = this.bindings) ? o[i] : void 0) { for (s = 0, l = []; s < this.bindings[i].length;) n = (a = this.bindings[i][s]).handler, e = a.ctx, r = a.once, n.apply(null != e ? e : this, t), l.push(r ? this.bindings[i].splice(s, 1) : s++); return l } }, t
            }(), h = window.Pace || {}, window.Pace = h, T(h, o.prototype), A = h.options = T({}, b, window.paceOptions, S()), W = 0, q = (Y = ["ajax", "document", "eventLag", "elements"]).length; q > W; W++) !0 === A[$ = Y[W]] && (A[$] = b[$]);
        l = function(t) {
            function e() { return e.__super__.constructor.apply(this, arguments) }
            return Q(e, t), e
        }(Error), e = function() {
            function t() { this.progress = 0 }
            return t.prototype.getElement = function() {
                var t;
                if (null == this.el) {
                    if (!(t = document.querySelector(A.target))) throw new l;
                    this.el = document.createElement("div"), this.el.className = "pace pace-active", document.body.className = document.body.className.replace(/pace-done/g, ""), document.body.className += " pace-running", this.el.innerHTML = '<div class="pace-progress">\n  <div class="pace-progress-inner"></div>\n</div>\n<div class="pace-activity"></div>', null != t.firstChild ? t.insertBefore(this.el, t.firstChild) : t.appendChild(this.el)
                }
                return this.el
            }, t.prototype.finish = function() { var t; return (t = this.getElement()).className = t.className.replace("pace-active", ""), t.className += " pace-inactive", document.body.className = document.body.className.replace("pace-running", ""), document.body.className += " pace-done" }, t.prototype.update = function(t) { return this.progress = t, this.render() }, t.prototype.destroy = function() { try { this.getElement().parentNode.removeChild(this.getElement()) } catch (t) { l = t } return this.el = void 0 }, t.prototype.render = function() { var t, e, i, n, s, r, o; if (null == document.querySelector(A.target)) return !1; for (t = this.getElement(), n = "translate3d(" + this.progress + "%, 0, 0)", s = 0, r = (o = ["webkitTransform", "msTransform", "transform"]).length; r > s; s++) e = o[s], t.children[0].style[e] = n; return (!this.lastRenderedProgress || this.lastRenderedProgress | 0 !== this.progress | 0) && (t.children[0].setAttribute("data-progress-text", (0 | this.progress) + "%"), this.progress >= 100 ? i = "99" : (i = this.progress < 10 ? "0" : "", i += 0 | this.progress), t.children[0].setAttribute("data-progress", "" + i)), this.lastRenderedProgress = this.progress }, t.prototype.done = function() { return this.progress >= 100 }, t
        }(), a = function() {
            function t() { this.bindings = {} }
            return t.prototype.trigger = function(t, e) { var i, n, s, r, o; if (null != this.bindings[t]) { for (o = [], n = 0, s = (r = this.bindings[t]).length; s > n; n++) i = r[n], o.push(i.call(this, e)); return o } }, t.prototype.on = function(t, e) { var i; return null == (i = this.bindings)[t] && (i[t] = []), this.bindings[t].push(e) }, t
        }(), F = window.XMLHttpRequest, j = window.XDomainRequest, H = window.WebSocket, _ = function(t, e) {
            var i, n, s;
            for (i in s = [], e.prototype) try { n = e.prototype[i], s.push(null == t[i] && "function" != typeof n ? t[i] = n : void 0) } catch (t) { t }
            return s
        }, C = [], h.ignore = function() { var t, e, i; return e = arguments[0], t = 2 <= arguments.length ? U.call(arguments, 1) : [], C.unshift("ignore"), i = e.apply(null, t), C.shift(), i }, h.track = function() { var t, e, i; return e = arguments[0], t = 2 <= arguments.length ? U.call(arguments, 1) : [], C.unshift("track"), i = e.apply(null, t), C.shift(), i }, L = function(t) { var e; if (null == t && (t = "GET"), "track" === C[0]) return "force"; if (!C.length && A.ajax) { if ("socket" === t && A.ajax.trackWebSockets) return !0; if (e = t.toUpperCase(), K.call(A.ajax.trackMethods, e) >= 0) return !0 } return !1 }, d = function(t) {
            function e() {
                var t, i = this;
                e.__super__.constructor.apply(this, arguments), t = function(t) { var e; return e = t.open, t.open = function(n, s) { return L(n) && i.trigger("request", { type: n, url: s, request: t }), e.apply(t, arguments) } }, window.XMLHttpRequest = function(e) { var i; return i = new F(e), t(i), i };
                try { _(window.XMLHttpRequest, F) } catch (t) {}
                if (null != j) { window.XDomainRequest = function() { var e; return e = new j, t(e), e }; try { _(window.XDomainRequest, j) } catch (t) {} }
                if (null != H && A.ajax.trackWebSockets) { window.WebSocket = function(t, e) { var n; return n = null != e ? new H(t, e) : new H(t), L("socket") && i.trigger("request", { type: "socket", url: t, protocols: e, request: n }), n }; try { _(window.WebSocket, H) } catch (t) {} }
            }
            return Q(e, a), e
        }(), B = null, D = function(t) {
            var e, i, n, s;
            for (i = 0, n = (s = A.ajax.ignoreURLs).length; n > i; i++)
                if ("string" == typeof(e = s[i])) { if (-1 !== t.indexOf(e)) return !0 } else if (e.test(t)) return !0;
            return !1
        }, (x = function() { return null == B && (B = new d), B })().on("request", function(e) {
            var i, n, s, r, o;
            return r = e.type, s = e.request, o = e.url, D(o) ? void 0 : h.running || !1 === A.restartOnRequestAfter && "force" !== L(r) ? void 0 : (n = arguments, "boolean" == typeof(i = A.restartOnRequestAfter || 0) && (i = 0), setTimeout(function() {
                var e, i, o, a, l;
                if ("socket" === r ? s.readyState < 2 : 0 < (o = s.readyState) && 4 > o) {
                    for (h.restart(), l = [], e = 0, i = (a = h.sources).length; i > e; e++) {
                        if (($ = a[e]) instanceof t) { $.watch.apply($, n); break }
                        l.push(void 0)
                    }
                    return l
                }
            }, i))
        }), t = function() {
            function t() {
                var t = this;
                this.elements = [], x().on("request", function() { return t.watch.apply(t, arguments) })
            }
            return t.prototype.watch = function(t) { var e, i, n, s; return n = t.type, e = t.request, s = t.url, D(s) ? void 0 : (i = "socket" === n ? new p(e) : new f(e), this.elements.push(i)) }, t
        }(), f = function() {
            return function(t) {
                var e, i, n, s, r, o = this;
                if (this.progress = 0, null != window.ProgressEvent)
                    for (t.addEventListener("progress", function(t) { return o.progress = t.lengthComputable ? 100 * t.loaded / t.total : o.progress + (100 - o.progress) / 2 }, !1), i = 0, n = (r = ["load", "abort", "timeout", "error"]).length; n > i; i++) e = r[i], t.addEventListener(e, function() { return o.progress = 100 }, !1);
                else s = t.onreadystatechange, t.onreadystatechange = function() { var e; return 0 === (e = t.readyState) || 4 === e ? o.progress = 100 : 3 === t.readyState && (o.progress = 50), "function" == typeof s ? s.apply(null, arguments) : void 0 }
            }
        }(), p = function() { return function(t) { var e, i, n, s, r = this; for (this.progress = 0, i = 0, n = (s = ["error", "open"]).length; n > i; i++) e = s[i], t.addEventListener(e, function() { return r.progress = 100 }, !1) } }(), n = function() { return function(t) { var e, i, n, r; for (null == t && (t = {}), this.elements = [], null == t.selectors && (t.selectors = []), i = 0, n = (r = t.selectors).length; n > i; i++) e = r[i], this.elements.push(new s(e)) } }(), s = function() {
            function t(t) { this.selector = t, this.progress = 0, this.check() }
            return t.prototype.check = function() { var t = this; return document.querySelector(this.selector) ? this.done() : setTimeout(function() { return t.check() }, A.elements.checkInterval) }, t.prototype.done = function() { return this.progress = 100 }, t
        }(), i = function() {
            function t() {
                var t, e, i = this;
                this.progress = null != (e = this.states[document.readyState]) ? e : 100, t = document.onreadystatechange, document.onreadystatechange = function() { return null != i.states[document.readyState] && (i.progress = i.states[document.readyState]), "function" == typeof t ? t.apply(null, arguments) : void 0 }
            }
            return t.prototype.states = { loading: 0, interactive: 50, complete: 100 }, t
        }(), r = function() {
            return function() {
                var t, e, i, n, s, r = this;
                this.progress = 0, t = 0, s = [], n = 0, i = I(), e = setInterval(function() { var o; return o = I() - i - 50, i = I(), s.push(o), s.length > A.eventLag.sampleCount && s.shift(), t = g(s), ++n >= A.eventLag.minSamples && t < A.eventLag.lagThreshold ? (r.progress = 100, clearInterval(e)) : r.progress = 3 / (t + 3) * 100 }, 50)
            }
        }(), c = function() {
            function t(t) { this.source = t, this.last = this.sinceLastUpdate = 0, this.rate = A.initialRate, this.catchup = 0, this.progress = this.lastProgress = 0, null != this.source && (this.progress = O(this.source, "progress")) }
            return t.prototype.tick = function(t, e) { var i; return null == e && (e = O(this.source, "progress")), e >= 100 && (this.done = !0), e === this.last ? this.sinceLastUpdate += t : (this.sinceLastUpdate && (this.rate = (e - this.last) / this.sinceLastUpdate), this.catchup = (e - this.progress) / A.catchupTime, this.sinceLastUpdate = 0, this.last = e), e > this.progress && (this.progress += this.catchup * t), i = 1 - Math.pow(this.progress / 100, A.easeFactor), this.progress += i * this.rate * t, this.progress = Math.min(this.lastProgress + A.maxProgressPerFrame, this.progress), this.progress = Math.max(0, this.progress), this.progress = Math.min(100, this.progress), this.lastProgress = this.progress, this.progress }, t
        }(), N = null, z = null, v = null, R = null, m = null, y = null, h.running = !1, E = function() { return A.restartOnPushState ? h.restart() : void 0 }, null != window.history.pushState && (V = window.history.pushState, window.history.pushState = function() { return E(), V.apply(window.history, arguments) }), null != window.history.replaceState && (G = window.history.replaceState, window.history.replaceState = function() { return E(), G.apply(window.history, arguments) }), u = { ajax: t, elements: n, document: i, eventLag: r }, (k = function() { var t, i, n, s, r, o, a, l; for (h.sources = N = [], i = 0, s = (o = ["ajax", "elements", "document", "eventLag"]).length; s > i; i++) !1 !== A[t = o[i]] && N.push(new u[t](A[t])); for (n = 0, r = (l = null != (a = A.extraSources) ? a : []).length; r > n; n++) $ = l[n], N.push(new $(A)); return h.bar = v = new e, z = [], R = new c })(), h.stop = function() { return h.trigger("stop"), h.running = !1, v.destroy(), y = !0, null != m && ("function" == typeof w && w(m), m = null), k() }, h.restart = function() { return h.trigger("restart"), h.stop(), h.start() }, h.go = function() {
            var t;
            return h.running = !0, v.render(), t = I(), y = !1, m = P(function(e, i) {
                var n, s, r, o, a, l, d, u, p, f, m, g, w, b, T;
                for (100 - v.progress, s = f = 0, r = !0, l = m = 0, w = N.length; w > m; l = ++m)
                    for ($ = N[l], p = null != z[l] ? z[l] : z[l] = [], d = g = 0, b = (a = null != (T = $.elements) ? T : [$]).length; b > g; d = ++g) o = a[d], r &= (u = null != p[d] ? p[d] : p[d] = new c(o)).done, u.done || (s++, f += u.tick(e));
                return n = f / s, v.update(R.tick(e, n)), v.done() || r || y ? (v.update(100), h.trigger("done"), setTimeout(function() { return v.finish(), h.running = !1, h.trigger("hide") }, Math.max(A.ghostTime, Math.max(A.minTime - (I() - t), 0)))) : i()
            })
        }, h.start = function(t) { T(A, t), h.running = !0; try { v.render() } catch (t) { l = t } return document.querySelector(".pace") ? (h.trigger("start"), h.go()) : setTimeout(h.start, 50) }, "function" == typeof define && define.amd ? define(function() { return h }) : "object" == typeof exports ? module.exports = h : A.startOnPageLoad && h.start()
    }.call(this),
    function(t) {
        t.fn.parallaxie = function(e) {
            return e = t.extend({ speed: .2, repeat: "no-repeat", size: "cover", pos_x: "center", offset: 0 }, e), this.each(function() {
                var i = t(this),
                    n = i.data("parallaxie");
                "object" != typeof n && (n = {}), n = t.extend({}, e, n);
                var s = i.data("image");
                if (void 0 === s) {
                    if (!(s = i.css("background-image"))) return;
                    var r = n.offset + (i.offset().top - t(window).scrollTop()) * (1 - n.speed);
                    i.css({ "background-image": s, "background-size": n.size, "background-repeat": n.repeat, "background-attachment": "fixed", "background-position": n.pos_x + " " + r + "px" }), t(window).scroll(function() {
                        var e = n.offset + (i.offset().top - t(window).scrollTop()) * (1 - n.speed);
                        i.data("pos_y", e), i.css("background-position", n.pos_x + " " + e + "px")
                    })
                }
            }), this
        }
    }(jQuery),
    function(t, e) { "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define("simpleParallax", [], e) : "object" == typeof exports ? exports.simpleParallax = e() : t.simpleParallax = e() }(window, function() {
        return function(t) {
            var e = {};

            function i(n) { if (e[n]) return e[n].exports; var s = e[n] = { i: n, l: !1, exports: {} }; return t[n].call(s.exports, s, s.exports, i), s.l = !0, s.exports }
            return i.m = t, i.c = e, i.d = function(t, e, n) { i.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n }) }, i.r = function(t) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 }) }, i.t = function(t, e) {
                if (1 & e && (t = i(t)), 8 & e) return t;
                if (4 & e && "object" == typeof t && t && t.__esModule) return t;
                var n = Object.create(null);
                if (i.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t)
                    for (var s in t) i.d(n, s, function(e) { return t[e] }.bind(null, s));
                return n
            }, i.n = function(t) { var e = t && t.__esModule ? function() { return t.default } : function() { return t }; return i.d(e, "a", e), e }, i.o = function(t, e) { return Object.prototype.hasOwnProperty.call(t, e) }, i.p = "", i(i.s = 0)
        }([function(t, e, i) {
            "use strict";

            function n(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            i.r(e);
            var s = new(function() {
                    function t() {! function(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }(this, t), this.positions = { top: 0, bottom: 0, height: 0 } }
                    var e, i;
                    return e = t, (i = [{ key: "setViewportTop", value: function(t) { return this.positions.top = t ? t.scrollTop : window.pageYOffset, this.positions } }, { key: "setViewportBottom", value: function() { return this.positions.bottom = this.positions.top + this.positions.height, this.positions } }, { key: "setViewportAll", value: function(t) { return this.positions.top = t ? t.scrollTop : window.pageYOffset, this.positions.height = t ? t.clientHeight : document.documentElement.clientHeight, this.positions.bottom = this.positions.top + this.positions.height, this.positions } }]) && n(e.prototype, i), t
                }()),
                r = function(t) { return NodeList.prototype.isPrototypeOf(t) || HTMLCollection.prototype.isPrototypeOf(t) ? Array.from(t) : "string" == typeof t || t instanceof String ? document.querySelectorAll(t) : [t] },
                o = function() { for (var t, e = "transform webkitTransform mozTransform oTransform msTransform".split(" "), i = 0; void 0 === t;) t = void 0 !== document.createElement("div").style[e[i]] ? e[i] : void 0, i += 1; return t }(),
                a = function(t) { return !(!t || !t.complete || void 0 !== t.naturalWidth && 0 === t.naturalWidth) };

            function l(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            var h = function() {
                function t(e, i) {! function(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }(this, t), this.element = e, this.elementContainer = e, this.settings = i, this.isVisible = !0, this.isInit = !1, this.oldTranslateValue = -1, this.init = this.init.bind(this), a(e) ? this.init() : this.element.addEventListener("load", this.init) }
                var e, i;
                return e = t, (i = [{
                    key: "init",
                    value: function() {
                        var t = this;
                        this.isInit || this.element.closest(".simpleParallax") || (!1 === this.settings.overflow && this.wrapElement(this.element), this.setTransformCSS(), this.getElementOffset(), this.intersectionObserver(), this.getTranslateValue(), this.animate(), this.settings.delay > 0 && setTimeout(function() { t.setTransitionCSS() }, 10), this.isInit = !0)
                    }
                }, {
                    key: "wrapElement",
                    value: function() {
                        var t = this.element.closest("picture") || this.element,
                            e = document.createElement("div");
                        e.classList.add("simpleParallax"), e.style.overflow = "hidden", t.parentNode.insertBefore(e, t), e.appendChild(t), this.elementContainer = e
                    }
                }, {
                    key: "unWrapElement",
                    value: function() {
                        var t = this.elementContainer;
                        t.replaceWith.apply(t, function(t) { return function(t) { if (Array.isArray(t)) { for (var e = 0, i = new Array(t.length); e < t.length; e++) i[e] = t[e]; return i } }(t) || function(t) { if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t) }(t) || function() { throw new TypeError("Invalid attempt to spread non-iterable instance") }() }(t.childNodes))
                    }
                }, { key: "setTransformCSS", value: function() {!1 === this.settings.overflow && (this.element.style[o] = "scale(".concat(this.settings.scale, ")")), this.element.style.willChange = "transform" } }, { key: "setTransitionCSS", value: function() { this.element.style.transition = "transform ".concat(this.settings.delay, "s ").concat(this.settings.transition) } }, { key: "unSetStyle", value: function() { this.element.style.willChange = "", this.element.style[o] = "", this.element.style.transition = "" } }, {
                    key: "getElementOffset",
                    value: function() {
                        var t = this.elementContainer.getBoundingClientRect();
                        if (this.elementHeight = t.height, this.elementTop = t.top + s.positions.top, this.settings.customContainer) {
                            var e = this.settings.customContainer.getBoundingClientRect();
                            this.elementTop = t.top - e.top + s.positions.top
                        }
                        this.elementBottom = this.elementHeight + this.elementTop
                    }
                }, {
                    key: "buildThresholdList",
                    value: function() {
                        for (var t = [], e = 1; e <= this.elementHeight; e++) {
                            var i = e / this.elementHeight;
                            t.push(i)
                        }
                        return t
                    }
                }, {
                    key: "intersectionObserver",
                    value: function() {
                        var t = { root: null, threshold: this.buildThresholdList() };
                        this.observer = new IntersectionObserver(this.intersectionObserverCallback.bind(this), t), this.observer.observe(this.element)
                    }
                }, { key: "intersectionObserverCallback", value: function(t) { for (var e = t.length - 1; e >= 0; e--) t[e].isIntersecting ? this.isVisible = !0 : this.isVisible = !1 } }, { key: "checkIfVisible", value: function() { return this.elementBottom > s.positions.top && this.elementTop < s.positions.bottom } }, {
                    key: "getRangeMax",
                    value: function() {
                        var t = this.element.clientHeight;
                        this.rangeMax = t * this.settings.scale - t
                    }
                }, { key: "getTranslateValue", value: function() { var t = ((s.positions.bottom - this.elementTop) / ((s.positions.height + this.elementHeight) / 100)).toFixed(1); return t = Math.min(100, Math.max(0, t)), 0 !== this.settings.maxTransition && t > this.settings.maxTransition && (t = this.settings.maxTransition), this.oldPercentage !== t && (this.rangeMax || this.getRangeMax(), this.translateValue = (t / 100 * this.rangeMax - this.rangeMax / 2).toFixed(0), this.oldTranslateValue !== this.translateValue && (this.oldPercentage = t, this.oldTranslateValue = this.translateValue, !0)) } }, {
                    key: "animate",
                    value: function() {
                        var t, e = 0,
                            i = 0;
                        (this.settings.orientation.includes("left") || this.settings.orientation.includes("right")) && (i = "".concat(this.settings.orientation.includes("left") ? -1 * this.translateValue : this.translateValue, "px")), (this.settings.orientation.includes("up") || this.settings.orientation.includes("down")) && (e = "".concat(this.settings.orientation.includes("up") ? -1 * this.translateValue : this.translateValue, "px")), t = !1 === this.settings.overflow ? "translate3d(".concat(i, ", ").concat(e, ", 0) scale(").concat(this.settings.scale, ")") : "translate3d(".concat(i, ", ").concat(e, ", 0)"), this.element.style[o] = t
                    }
                }]) && l(e.prototype, i), t
            }();

            function d(t) { return function(t) { if (Array.isArray(t)) { for (var e = 0, i = new Array(t.length); e < t.length; e++) i[e] = t[e]; return i } }(t) || function(t) { if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t) }(t) || function() { throw new TypeError("Invalid attempt to spread non-iterable instance") }() }

            function u(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            i.d(e, "default", function() { return y });
            var c, p, f, m = !0,
                g = !1,
                v = [],
                y = function() {
                    function t(e, i) {! function(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }(this, t), e && (this.elements = r(e), this.defaults = { delay: .4, orientation: "up", scale: 1.3, overflow: !1, transition: "cubic-bezier(0,0,0,1)", customContainer: !1, maxTransition: 0 }, this.settings = Object.assign(this.defaults, i), "IntersectionObserver" in window || (m = !1), this.settings.customContainer && (console.log(r(this.settings.customContainer)[0]), this.customContainer = r(this.settings.customContainer)[0]), this.lastPosition = -1, this.resizeIsDone = this.resizeIsDone.bind(this), this.handleResize = this.handleResize.bind(this), this.proceedRequestAnimationFrame = this.proceedRequestAnimationFrame.bind(this), this.init()) }
                    var e, i;
                    return e = t, (i = [{
                        key: "init",
                        value: function() {
                            var t = this;
                            s.setViewportAll(this.customContainer), v = [].concat(d(this.elements.map(function(e) { return new h(e, t.settings) })), d(v)), c = v.length, g || (this.proceedRequestAnimationFrame(), window.addEventListener("resize", this.resizeIsDone), g = !0)
                        }
                    }, { key: "resizeIsDone", value: function() { clearTimeout(f), f = setTimeout(this.handleResize, 500) } }, {
                        key: "handleResize",
                        value: function() {
                            s.setViewportAll(this.customContainer);
                            for (var t = c - 1; t >= 0; t--) v[t].getElementOffset(), v[t].getRangeMax();
                            this.lastPosition = -1
                        }
                    }, {
                        key: "proceedRequestAnimationFrame",
                        value: function() {
                            if (s.setViewportTop(this.customContainer), this.lastPosition !== s.positions.top) {
                                s.setViewportBottom();
                                for (var t = c - 1; t >= 0; t--) this.proceedElement(v[t]);
                                p = window.requestAnimationFrame(this.proceedRequestAnimationFrame), this.lastPosition = s.positions.top
                            } else p = window.requestAnimationFrame(this.proceedRequestAnimationFrame)
                        }
                    }, {
                        key: "proceedElement",
                        value: function(t) {
                            (!m || this.customContainer ? t.checkIfVisible() : t.isVisible) && t.getTranslateValue() && t.animate()
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            var t = this,
                                e = [];
                            v = v.filter(function(i) { return t.elements.includes(i.element) ? (e.push(i), !1) : i });
                            for (var i = e.length - 1; i >= 0; i--) e[i].unSetStyle(), !1 === this.settings.overflow && e[i].unWrapElement();
                            (c = v.length) || (window.cancelAnimationFrame(p), window.removeEventListener("resize", this.handleResize))
                        }
                    }]) && u(e.prototype, i), t
                }()
        }]).default
    }),
    function(t) { "use strict"; "function" == typeof define && define.amd ? define(["jquery"], t) : "undefined" != typeof exports ? module.exports = t(require("jquery")) : t(jQuery) }(function(t) {
        "use strict";
        var e = window.Slick || {};
        (e = function() {
            var e = 0;
            return function(i, n) {
                var s, r = this;
                r.defaults = { accessibility: !0, adaptiveHeight: !1, appendArrows: t(i), appendDots: t(i), arrows: !0, asNavFor: null, prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>', nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>', autoplay: !1, autoplaySpeed: 3e3, centerMode: !1, centerPadding: "50px", cssEase: "ease", customPaging: function(e, i) { return t('<button type="button" />').text(i + 1) }, dots: !1, dotsClass: "slick-dots", draggable: !0, easing: "linear", edgeFriction: .35, fade: !1, focusOnSelect: !1, focusOnChange: !1, infinite: !0, initialSlide: 0, lazyLoad: "ondemand", mobileFirst: !1, pauseOnHover: !0, pauseOnFocus: !0, pauseOnDotsHover: !1, respondTo: "window", responsive: null, rows: 1, rtl: !1, slide: "", slidesPerRow: 1, slidesToShow: 1, slidesToScroll: 1, speed: 500, swipe: !0, swipeToSlide: !1, touchMove: !0, touchThreshold: 5, useCSS: !0, useTransform: !0, variableWidth: !1, vertical: !1, verticalSwiping: !1, waitForAnimate: !0, zIndex: 1e3 }, r.initials = { animating: !1, dragging: !1, autoPlayTimer: null, currentDirection: 0, currentLeft: null, currentSlide: 0, direction: 1, $dots: null, listWidth: null, listHeight: null, loadIndex: 0, $nextArrow: null, $prevArrow: null, scrolling: !1, slideCount: null, slideWidth: null, $slideTrack: null, $slides: null, sliding: !1, slideOffset: 0, swipeLeft: null, swiping: !1, $list: null, touchObject: {}, transformsEnabled: !1, unslicked: !1 }, t.extend(r, r.initials), r.activeBreakpoint = null, r.animType = null, r.animProp = null, r.breakpoints = [], r.breakpointSettings = [], r.cssTransitions = !1, r.focussed = !1, r.interrupted = !1, r.hidden = "hidden", r.paused = !0, r.positionProp = null, r.respondTo = null, r.rowCount = 1, r.shouldClick = !0, r.$slider = t(i), r.$slidesCache = null, r.transformType = null, r.transitionType = null, r.visibilityChange = "visibilitychange", r.windowWidth = 0, r.windowTimer = null, s = t(i).data("slick") || {}, r.options = t.extend({}, r.defaults, n, s), r.currentSlide = r.options.initialSlide, r.originalSettings = r.options, void 0 !== document.mozHidden ? (r.hidden = "mozHidden", r.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (r.hidden = "webkitHidden", r.visibilityChange = "webkitvisibilitychange"), r.autoPlay = t.proxy(r.autoPlay, r), r.autoPlayClear = t.proxy(r.autoPlayClear, r), r.autoPlayIterator = t.proxy(r.autoPlayIterator, r), r.changeSlide = t.proxy(r.changeSlide, r), r.clickHandler = t.proxy(r.clickHandler, r), r.selectHandler = t.proxy(r.selectHandler, r), r.setPosition = t.proxy(r.setPosition, r), r.swipeHandler = t.proxy(r.swipeHandler, r), r.dragHandler = t.proxy(r.dragHandler, r), r.keyHandler = t.proxy(r.keyHandler, r), r.instanceUid = e++, r.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, r.registerBreakpoints(), r.init(!0)
            }
        }()).prototype.activateADA = function() { this.$slideTrack.find(".slick-active").attr({ "aria-hidden": "false" }).find("a, input, button, select").attr({ tabindex: "0" }) }, e.prototype.addSlide = e.prototype.slickAdd = function(e, i, n) {
            var s = this;
            if ("boolean" == typeof i) n = i, i = null;
            else if (i < 0 || i >= s.slideCount) return !1;
            s.unload(), "number" == typeof i ? 0 === i && 0 === s.$slides.length ? t(e).appendTo(s.$slideTrack) : n ? t(e).insertBefore(s.$slides.eq(i)) : t(e).insertAfter(s.$slides.eq(i)) : !0 === n ? t(e).prependTo(s.$slideTrack) : t(e).appendTo(s.$slideTrack), s.$slides = s.$slideTrack.children(this.options.slide), s.$slideTrack.children(this.options.slide).detach(), s.$slideTrack.append(s.$slides), s.$slides.each(function(e, i) { t(i).attr("data-slick-index", e) }), s.$slidesCache = s.$slides, s.reinit()
        }, e.prototype.animateHeight = function() {
            var t = this;
            if (1 === t.options.slidesToShow && !0 === t.options.adaptiveHeight && !1 === t.options.vertical) {
                var e = t.$slides.eq(t.currentSlide).outerHeight(!0);
                t.$list.animate({ height: e }, t.options.speed)
            }
        }, e.prototype.animateSlide = function(e, i) {
            var n = {},
                s = this;
            s.animateHeight(), !0 === s.options.rtl && !1 === s.options.vertical && (e = -e), !1 === s.transformsEnabled ? !1 === s.options.vertical ? s.$slideTrack.animate({ left: e }, s.options.speed, s.options.easing, i) : s.$slideTrack.animate({ top: e }, s.options.speed, s.options.easing, i) : !1 === s.cssTransitions ? (!0 === s.options.rtl && (s.currentLeft = -s.currentLeft), t({ animStart: s.currentLeft }).animate({ animStart: e }, { duration: s.options.speed, easing: s.options.easing, step: function(t) { t = Math.ceil(t), !1 === s.options.vertical ? (n[s.animType] = "translate(" + t + "px, 0px)", s.$slideTrack.css(n)) : (n[s.animType] = "translate(0px," + t + "px)", s.$slideTrack.css(n)) }, complete: function() { i && i.call() } })) : (s.applyTransition(), e = Math.ceil(e), !1 === s.options.vertical ? n[s.animType] = "translate3d(" + e + "px, 0px, 0px)" : n[s.animType] = "translate3d(0px," + e + "px, 0px)", s.$slideTrack.css(n), i && setTimeout(function() { s.disableTransition(), i.call() }, s.options.speed))
        }, e.prototype.getNavTarget = function() { var e = this.options.asNavFor; return e && null !== e && (e = t(e).not(this.$slider)), e }, e.prototype.asNavFor = function(e) {
            var i = this.getNavTarget();
            null !== i && "object" == typeof i && i.each(function() {
                var i = t(this).slick("getSlick");
                i.unslicked || i.slideHandler(e, !0)
            })
        }, e.prototype.applyTransition = function(t) {
            var e = this,
                i = {};
            !1 === e.options.fade ? i[e.transitionType] = e.transformType + " " + e.options.speed + "ms " + e.options.cssEase : i[e.transitionType] = "opacity " + e.options.speed + "ms " + e.options.cssEase, !1 === e.options.fade ? e.$slideTrack.css(i) : e.$slides.eq(t).css(i)
        }, e.prototype.autoPlay = function() {
            var t = this;
            t.autoPlayClear(), t.slideCount > t.options.slidesToShow && (t.autoPlayTimer = setInterval(t.autoPlayIterator, t.options.autoplaySpeed))
        }, e.prototype.autoPlayClear = function() { this.autoPlayTimer && clearInterval(this.autoPlayTimer) }, e.prototype.autoPlayIterator = function() {
            var t = this,
                e = t.currentSlide + t.options.slidesToScroll;
            t.paused || t.interrupted || t.focussed || (!1 === t.options.infinite && (1 === t.direction && t.currentSlide + 1 === t.slideCount - 1 ? t.direction = 0 : 0 === t.direction && (e = t.currentSlide - t.options.slidesToScroll, t.currentSlide - 1 == 0 && (t.direction = 1))), t.slideHandler(e))
        }, e.prototype.buildArrows = function() { var e = this;!0 === e.options.arrows && (e.$prevArrow = t(e.options.prevArrow).addClass("slick-arrow"), e.$nextArrow = t(e.options.nextArrow).addClass("slick-arrow"), e.slideCount > e.options.slidesToShow ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows), e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows), !0 !== e.options.infinite && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({ "aria-disabled": "true", tabindex: "-1" })) }, e.prototype.buildDots = function() {
            var e, i, n = this;
            if (!0 === n.options.dots) {
                for (n.$slider.addClass("slick-dotted"), i = t("<ul />").addClass(n.options.dotsClass), e = 0; e <= n.getDotCount(); e += 1) i.append(t("<li />").append(n.options.customPaging.call(this, n, e)));
                n.$dots = i.appendTo(n.options.appendDots), n.$dots.find("li").first().addClass("slick-active")
            }
        }, e.prototype.buildOut = function() {
            var e = this;
            e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), e.slideCount = e.$slides.length, e.$slides.each(function(e, i) { t(i).attr("data-slick-index", e).data("originalStyling", t(i).attr("style") || "") }), e.$slider.addClass("slick-slider"), e.$slideTrack = 0 === e.slideCount ? t('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent(), e.$list = e.$slideTrack.wrap('<div class="slick-list"/>').parent(), e.$slideTrack.css("opacity", 0), !0 !== e.options.centerMode && !0 !== e.options.swipeToSlide || (e.options.slidesToScroll = 1), t("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"), e.setupInfinite(), e.buildArrows(), e.buildDots(), e.updateDots(), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), !0 === e.options.draggable && e.$list.addClass("draggable")
        }, e.prototype.buildRows = function() {
            var t, e, i, n, s, r, o, a = this;
            if (n = document.createDocumentFragment(), r = a.$slider.children(), a.options.rows > 1) {
                for (o = a.options.slidesPerRow * a.options.rows, s = Math.ceil(r.length / o), t = 0; t < s; t++) {
                    var l = document.createElement("div");
                    for (e = 0; e < a.options.rows; e++) {
                        var h = document.createElement("div");
                        for (i = 0; i < a.options.slidesPerRow; i++) {
                            var d = t * o + (e * a.options.slidesPerRow + i);
                            r.get(d) && h.appendChild(r.get(d))
                        }
                        l.appendChild(h)
                    }
                    n.appendChild(l)
                }
                a.$slider.empty().append(n), a.$slider.children().children().children().css({ width: 100 / a.options.slidesPerRow + "%", display: "inline-block" })
            }
        }, e.prototype.checkResponsive = function(e, i) {
            var n, s, r, o = this,
                a = !1,
                l = o.$slider.width(),
                h = window.innerWidth || t(window).width();
            if ("window" === o.respondTo ? r = h : "slider" === o.respondTo ? r = l : "min" === o.respondTo && (r = Math.min(h, l)), o.options.responsive && o.options.responsive.length && null !== o.options.responsive) {
                for (n in s = null, o.breakpoints) o.breakpoints.hasOwnProperty(n) && (!1 === o.originalSettings.mobileFirst ? r < o.breakpoints[n] && (s = o.breakpoints[n]) : r > o.breakpoints[n] && (s = o.breakpoints[n]));
                null !== s ? null !== o.activeBreakpoint ? (s !== o.activeBreakpoint || i) && (o.activeBreakpoint = s, "unslick" === o.breakpointSettings[s] ? o.unslick(s) : (o.options = t.extend({}, o.originalSettings, o.breakpointSettings[s]), !0 === e && (o.currentSlide = o.options.initialSlide), o.refresh(e)), a = s) : (o.activeBreakpoint = s, "unslick" === o.breakpointSettings[s] ? o.unslick(s) : (o.options = t.extend({}, o.originalSettings, o.breakpointSettings[s]), !0 === e && (o.currentSlide = o.options.initialSlide), o.refresh(e)), a = s) : null !== o.activeBreakpoint && (o.activeBreakpoint = null, o.options = o.originalSettings, !0 === e && (o.currentSlide = o.options.initialSlide), o.refresh(e), a = s), e || !1 === a || o.$slider.trigger("breakpoint", [o, a])
            }
        }, e.prototype.changeSlide = function(e, i) {
            var n, s, r = this,
                o = t(e.currentTarget);
            switch (o.is("a") && e.preventDefault(), o.is("li") || (o = o.closest("li")), n = r.slideCount % r.options.slidesToScroll != 0 ? 0 : (r.slideCount - r.currentSlide) % r.options.slidesToScroll, e.data.message) {
                case "previous":
                    s = 0 === n ? r.options.slidesToScroll : r.options.slidesToShow - n, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide - s, !1, i);
                    break;
                case "next":
                    s = 0 === n ? r.options.slidesToScroll : n, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide + s, !1, i);
                    break;
                case "index":
                    var a = 0 === e.data.index ? 0 : e.data.index || o.index() * r.options.slidesToScroll;
                    r.slideHandler(r.checkNavigable(a), !1, i), o.children().trigger("focus");
                    break;
                default:
                    return
            }
        }, e.prototype.checkNavigable = function(t) {
            var e, i;
            if (i = 0, t > (e = this.getNavigableIndexes())[e.length - 1]) t = e[e.length - 1];
            else
                for (var n in e) {
                    if (t < e[n]) { t = i; break }
                    i = e[n]
                }
            return t
        }, e.prototype.cleanUpEvents = function() {
            var e = this;
            e.options.dots && null !== e.$dots && (t("li", e.$dots).off("click.slick", e.changeSlide).off("mouseenter.slick", t.proxy(e.interrupt, e, !0)).off("mouseleave.slick", t.proxy(e.interrupt, e, !1)), !0 === e.options.accessibility && e.$dots.off("keydown.slick", e.keyHandler)), e.$slider.off("focus.slick blur.slick"), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide), e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide), !0 === e.options.accessibility && (e.$prevArrow && e.$prevArrow.off("keydown.slick", e.keyHandler), e.$nextArrow && e.$nextArrow.off("keydown.slick", e.keyHandler))), e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler), e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler), e.$list.off("touchend.slick mouseup.slick", e.swipeHandler), e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler), e.$list.off("click.slick", e.clickHandler), t(document).off(e.visibilityChange, e.visibility), e.cleanUpSlideEvents(), !0 === e.options.accessibility && e.$list.off("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && t(e.$slideTrack).children().off("click.slick", e.selectHandler), t(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange), t(window).off("resize.slick.slick-" + e.instanceUid, e.resize), t("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault), t(window).off("load.slick.slick-" + e.instanceUid, e.setPosition)
        }, e.prototype.cleanUpSlideEvents = function() {
            var e = this;
            e.$list.off("mouseenter.slick", t.proxy(e.interrupt, e, !0)), e.$list.off("mouseleave.slick", t.proxy(e.interrupt, e, !1))
        }, e.prototype.cleanUpRows = function() {
            var t, e = this;
            e.options.rows > 1 && ((t = e.$slides.children().children()).removeAttr("style"), e.$slider.empty().append(t))
        }, e.prototype.clickHandler = function(t) {!1 === this.shouldClick && (t.stopImmediatePropagation(), t.stopPropagation(), t.preventDefault()) }, e.prototype.destroy = function(e) {
            var i = this;
            i.autoPlayClear(), i.touchObject = {}, i.cleanUpEvents(), t(".slick-cloned", i.$slider).detach(), i.$dots && i.$dots.remove(), i.$prevArrow && i.$prevArrow.length && (i.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), i.htmlExpr.test(i.options.prevArrow) && i.$prevArrow.remove()), i.$nextArrow && i.$nextArrow.length && (i.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), i.htmlExpr.test(i.options.nextArrow) && i.$nextArrow.remove()), i.$slides && (i.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() { t(this).attr("style", t(this).data("originalStyling")) }), i.$slideTrack.children(this.options.slide).detach(), i.$slideTrack.detach(), i.$list.detach(), i.$slider.append(i.$slides)), i.cleanUpRows(), i.$slider.removeClass("slick-slider"), i.$slider.removeClass("slick-initialized"), i.$slider.removeClass("slick-dotted"), i.unslicked = !0, e || i.$slider.trigger("destroy", [i])
        }, e.prototype.disableTransition = function(t) {
            var e = this,
                i = {};
            i[e.transitionType] = "", !1 === e.options.fade ? e.$slideTrack.css(i) : e.$slides.eq(t).css(i)
        }, e.prototype.fadeSlide = function(t, e) { var i = this;!1 === i.cssTransitions ? (i.$slides.eq(t).css({ zIndex: i.options.zIndex }), i.$slides.eq(t).animate({ opacity: 1 }, i.options.speed, i.options.easing, e)) : (i.applyTransition(t), i.$slides.eq(t).css({ opacity: 1, zIndex: i.options.zIndex }), e && setTimeout(function() { i.disableTransition(t), e.call() }, i.options.speed)) }, e.prototype.fadeSlideOut = function(t) { var e = this;!1 === e.cssTransitions ? e.$slides.eq(t).animate({ opacity: 0, zIndex: e.options.zIndex - 2 }, e.options.speed, e.options.easing) : (e.applyTransition(t), e.$slides.eq(t).css({ opacity: 0, zIndex: e.options.zIndex - 2 })) }, e.prototype.filterSlides = e.prototype.slickFilter = function(t) {
            var e = this;
            null !== t && (e.$slidesCache = e.$slides, e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.filter(t).appendTo(e.$slideTrack), e.reinit())
        }, e.prototype.focusHandler = function() {
            var e = this;
            e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", function(i) {
                i.stopImmediatePropagation();
                var n = t(this);
                setTimeout(function() { e.options.pauseOnFocus && (e.focussed = n.is(":focus"), e.autoPlay()) }, 0)
            })
        }, e.prototype.getCurrent = e.prototype.slickCurrentSlide = function() { return this.currentSlide }, e.prototype.getDotCount = function() {
            var t = this,
                e = 0,
                i = 0,
                n = 0;
            if (!0 === t.options.infinite)
                if (t.slideCount <= t.options.slidesToShow) ++n;
                else
                    for (; e < t.slideCount;) ++n, e = i + t.options.slidesToScroll, i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
            else if (!0 === t.options.centerMode) n = t.slideCount;
            else if (t.options.asNavFor)
                for (; e < t.slideCount;) ++n, e = i + t.options.slidesToScroll, i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
            else n = 1 + Math.ceil((t.slideCount - t.options.slidesToShow) / t.options.slidesToScroll);
            return n - 1
        }, e.prototype.getLeft = function(t) {
            var e, i, n, s, r = this,
                o = 0;
            return r.slideOffset = 0, i = r.$slides.first().outerHeight(!0), !0 === r.options.infinite ? (r.slideCount > r.options.slidesToShow && (r.slideOffset = r.slideWidth * r.options.slidesToShow * -1, s = -1, !0 === r.options.vertical && !0 === r.options.centerMode && (2 === r.options.slidesToShow ? s = -1.5 : 1 === r.options.slidesToShow && (s = -2)), o = i * r.options.slidesToShow * s), r.slideCount % r.options.slidesToScroll != 0 && t + r.options.slidesToScroll > r.slideCount && r.slideCount > r.options.slidesToShow && (t > r.slideCount ? (r.slideOffset = (r.options.slidesToShow - (t - r.slideCount)) * r.slideWidth * -1, o = (r.options.slidesToShow - (t - r.slideCount)) * i * -1) : (r.slideOffset = r.slideCount % r.options.slidesToScroll * r.slideWidth * -1, o = r.slideCount % r.options.slidesToScroll * i * -1))) : t + r.options.slidesToShow > r.slideCount && (r.slideOffset = (t + r.options.slidesToShow - r.slideCount) * r.slideWidth, o = (t + r.options.slidesToShow - r.slideCount) * i), r.slideCount <= r.options.slidesToShow && (r.slideOffset = 0, o = 0), !0 === r.options.centerMode && r.slideCount <= r.options.slidesToShow ? r.slideOffset = r.slideWidth * Math.floor(r.options.slidesToShow) / 2 - r.slideWidth * r.slideCount / 2 : !0 === r.options.centerMode && !0 === r.options.infinite ? r.slideOffset += r.slideWidth * Math.floor(r.options.slidesToShow / 2) - r.slideWidth : !0 === r.options.centerMode && (r.slideOffset = 0, r.slideOffset += r.slideWidth * Math.floor(r.options.slidesToShow / 2)), e = !1 === r.options.vertical ? t * r.slideWidth * -1 + r.slideOffset : t * i * -1 + o, !0 === r.options.variableWidth && (n = r.slideCount <= r.options.slidesToShow || !1 === r.options.infinite ? r.$slideTrack.children(".slick-slide").eq(t) : r.$slideTrack.children(".slick-slide").eq(t + r.options.slidesToShow), e = !0 === r.options.rtl ? n[0] ? -1 * (r.$slideTrack.width() - n[0].offsetLeft - n.width()) : 0 : n[0] ? -1 * n[0].offsetLeft : 0, !0 === r.options.centerMode && (n = r.slideCount <= r.options.slidesToShow || !1 === r.options.infinite ? r.$slideTrack.children(".slick-slide").eq(t) : r.$slideTrack.children(".slick-slide").eq(t + r.options.slidesToShow + 1), e = !0 === r.options.rtl ? n[0] ? -1 * (r.$slideTrack.width() - n[0].offsetLeft - n.width()) : 0 : n[0] ? -1 * n[0].offsetLeft : 0, e += (r.$list.width() - n.outerWidth()) / 2)), e
        }, e.prototype.getOption = e.prototype.slickGetOption = function(t) { return this.options[t] }, e.prototype.getNavigableIndexes = function() {
            var t, e = this,
                i = 0,
                n = 0,
                s = [];
            for (!1 === e.options.infinite ? t = e.slideCount : (i = -1 * e.options.slidesToScroll, n = -1 * e.options.slidesToScroll, t = 2 * e.slideCount); i < t;) s.push(i), i = n + e.options.slidesToScroll, n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
            return s
        }, e.prototype.getSlick = function() { return this }, e.prototype.getSlideCount = function() { var e, i, n = this; return i = !0 === n.options.centerMode ? n.slideWidth * Math.floor(n.options.slidesToShow / 2) : 0, !0 === n.options.swipeToSlide ? (n.$slideTrack.find(".slick-slide").each(function(s, r) { if (r.offsetLeft - i + t(r).outerWidth() / 2 > -1 * n.swipeLeft) return e = r, !1 }), Math.abs(t(e).attr("data-slick-index") - n.currentSlide) || 1) : n.options.slidesToScroll }, e.prototype.goTo = e.prototype.slickGoTo = function(t, e) { this.changeSlide({ data: { message: "index", index: parseInt(t) } }, e) }, e.prototype.init = function(e) {
            var i = this;
            t(i.$slider).hasClass("slick-initialized") || (t(i.$slider).addClass("slick-initialized"), i.buildRows(), i.buildOut(), i.setProps(), i.startLoad(), i.loadSlider(), i.initializeEvents(), i.updateArrows(), i.updateDots(), i.checkResponsive(!0), i.focusHandler()), e && i.$slider.trigger("init", [i]), !0 === i.options.accessibility && i.initADA(), i.options.autoplay && (i.paused = !1, i.autoPlay())
        }, e.prototype.initADA = function() {
            var e = this,
                i = Math.ceil(e.slideCount / e.options.slidesToShow),
                n = e.getNavigableIndexes().filter(function(t) { return t >= 0 && t < e.slideCount });
            e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({ "aria-hidden": "true", tabindex: "-1" }).find("a, input, button, select").attr({ tabindex: "-1" }), null !== e.$dots && (e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function(i) {
                var s = n.indexOf(i);
                t(this).attr({ role: "tabpanel", id: "slick-slide" + e.instanceUid + i, tabindex: -1 }), -1 !== s && t(this).attr({ "aria-describedby": "slick-slide-control" + e.instanceUid + s })
            }), e.$dots.attr("role", "tablist").find("li").each(function(s) {
                var r = n[s];
                t(this).attr({ role: "presentation" }), t(this).find("button").first().attr({ role: "tab", id: "slick-slide-control" + e.instanceUid + s, "aria-controls": "slick-slide" + e.instanceUid + r, "aria-label": s + 1 + " of " + i, "aria-selected": null, tabindex: "-1" })
            }).eq(e.currentSlide).find("button").attr({ "aria-selected": "true", tabindex: "0" }).end());
            for (var s = e.currentSlide, r = s + e.options.slidesToShow; s < r; s++) e.$slides.eq(s).attr("tabindex", 0);
            e.activateADA()
        }, e.prototype.initArrowEvents = function() { var t = this;!0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow.off("click.slick").on("click.slick", { message: "previous" }, t.changeSlide), t.$nextArrow.off("click.slick").on("click.slick", { message: "next" }, t.changeSlide), !0 === t.options.accessibility && (t.$prevArrow.on("keydown.slick", t.keyHandler), t.$nextArrow.on("keydown.slick", t.keyHandler))) }, e.prototype.initDotEvents = function() { var e = this;!0 === e.options.dots && (t("li", e.$dots).on("click.slick", { message: "index" }, e.changeSlide), !0 === e.options.accessibility && e.$dots.on("keydown.slick", e.keyHandler)), !0 === e.options.dots && !0 === e.options.pauseOnDotsHover && t("li", e.$dots).on("mouseenter.slick", t.proxy(e.interrupt, e, !0)).on("mouseleave.slick", t.proxy(e.interrupt, e, !1)) }, e.prototype.initSlideEvents = function() {
            var e = this;
            e.options.pauseOnHover && (e.$list.on("mouseenter.slick", t.proxy(e.interrupt, e, !0)), e.$list.on("mouseleave.slick", t.proxy(e.interrupt, e, !1)))
        }, e.prototype.initializeEvents = function() {
            var e = this;
            e.initArrowEvents(), e.initDotEvents(), e.initSlideEvents(), e.$list.on("touchstart.slick mousedown.slick", { action: "start" }, e.swipeHandler), e.$list.on("touchmove.slick mousemove.slick", { action: "move" }, e.swipeHandler), e.$list.on("touchend.slick mouseup.slick", { action: "end" }, e.swipeHandler), e.$list.on("touchcancel.slick mouseleave.slick", { action: "end" }, e.swipeHandler), e.$list.on("click.slick", e.clickHandler), t(document).on(e.visibilityChange, t.proxy(e.visibility, e)), !0 === e.options.accessibility && e.$list.on("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && t(e.$slideTrack).children().on("click.slick", e.selectHandler), t(window).on("orientationchange.slick.slick-" + e.instanceUid, t.proxy(e.orientationChange, e)), t(window).on("resize.slick.slick-" + e.instanceUid, t.proxy(e.resize, e)), t("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault), t(window).on("load.slick.slick-" + e.instanceUid, e.setPosition), t(e.setPosition)
        }, e.prototype.initUI = function() { var t = this;!0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow.show(), t.$nextArrow.show()), !0 === t.options.dots && t.slideCount > t.options.slidesToShow && t.$dots.show() }, e.prototype.keyHandler = function(t) {
            var e = this;
            t.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === t.keyCode && !0 === e.options.accessibility ? e.changeSlide({ data: { message: !0 === e.options.rtl ? "next" : "previous" } }) : 39 === t.keyCode && !0 === e.options.accessibility && e.changeSlide({ data: { message: !0 === e.options.rtl ? "previous" : "next" } }))
        }, e.prototype.lazyLoad = function() {
            function e(e) {
                t("img[data-lazy]", e).each(function() {
                    var e = t(this),
                        i = t(this).attr("data-lazy"),
                        n = t(this).attr("data-srcset"),
                        s = t(this).attr("data-sizes") || r.$slider.attr("data-sizes"),
                        o = document.createElement("img");
                    o.onload = function() { e.animate({ opacity: 0 }, 100, function() { n && (e.attr("srcset", n), s && e.attr("sizes", s)), e.attr("src", i).animate({ opacity: 1 }, 200, function() { e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading") }), r.$slider.trigger("lazyLoaded", [r, e, i]) }) }, o.onerror = function() { e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), r.$slider.trigger("lazyLoadError", [r, e, i]) }, o.src = i
                })
            }
            var i, n, s, r = this;
            if (!0 === r.options.centerMode ? !0 === r.options.infinite ? s = (n = r.currentSlide + (r.options.slidesToShow / 2 + 1)) + r.options.slidesToShow + 2 : (n = Math.max(0, r.currentSlide - (r.options.slidesToShow / 2 + 1)), s = r.options.slidesToShow / 2 + 1 + 2 + r.currentSlide) : (n = r.options.infinite ? r.options.slidesToShow + r.currentSlide : r.currentSlide, s = Math.ceil(n + r.options.slidesToShow), !0 === r.options.fade && (n > 0 && n--, s <= r.slideCount && s++)), i = r.$slider.find(".slick-slide").slice(n, s), "anticipated" === r.options.lazyLoad)
                for (var o = n - 1, a = s, l = r.$slider.find(".slick-slide"), h = 0; h < r.options.slidesToScroll; h++) o < 0 && (o = r.slideCount - 1), i = (i = i.add(l.eq(o))).add(l.eq(a)), o--, a++;
            e(i), r.slideCount <= r.options.slidesToShow ? e(r.$slider.find(".slick-slide")) : r.currentSlide >= r.slideCount - r.options.slidesToShow ? e(r.$slider.find(".slick-cloned").slice(0, r.options.slidesToShow)) : 0 === r.currentSlide && e(r.$slider.find(".slick-cloned").slice(-1 * r.options.slidesToShow))
        }, e.prototype.loadSlider = function() {
            var t = this;
            t.setPosition(), t.$slideTrack.css({ opacity: 1 }), t.$slider.removeClass("slick-loading"), t.initUI(), "progressive" === t.options.lazyLoad && t.progressiveLazyLoad()
        }, e.prototype.next = e.prototype.slickNext = function() { this.changeSlide({ data: { message: "next" } }) }, e.prototype.orientationChange = function() { this.checkResponsive(), this.setPosition() }, e.prototype.pause = e.prototype.slickPause = function() { this.autoPlayClear(), this.paused = !0 }, e.prototype.play = e.prototype.slickPlay = function() {
            var t = this;
            t.autoPlay(), t.options.autoplay = !0, t.paused = !1, t.focussed = !1, t.interrupted = !1
        }, e.prototype.postSlide = function(e) {
            var i = this;
            i.unslicked || (i.$slider.trigger("afterChange", [i, e]), i.animating = !1, i.slideCount > i.options.slidesToShow && i.setPosition(), i.swipeLeft = null, i.options.autoplay && i.autoPlay(), !0 === i.options.accessibility && (i.initADA(), i.options.focusOnChange && t(i.$slides.get(i.currentSlide)).attr("tabindex", 0).focus()))
        }, e.prototype.prev = e.prototype.slickPrev = function() { this.changeSlide({ data: { message: "previous" } }) }, e.prototype.preventDefault = function(t) { t.preventDefault() }, e.prototype.progressiveLazyLoad = function(e) {
            e = e || 1;
            var i, n, s, r, o, a = this,
                l = t("img[data-lazy]", a.$slider);
            l.length ? (i = l.first(), n = i.attr("data-lazy"), s = i.attr("data-srcset"), r = i.attr("data-sizes") || a.$slider.attr("data-sizes"), (o = document.createElement("img")).onload = function() { s && (i.attr("srcset", s), r && i.attr("sizes", r)), i.attr("src", n).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"), !0 === a.options.adaptiveHeight && a.setPosition(), a.$slider.trigger("lazyLoaded", [a, i, n]), a.progressiveLazyLoad() }, o.onerror = function() { e < 3 ? setTimeout(function() { a.progressiveLazyLoad(e + 1) }, 500) : (i.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), a.$slider.trigger("lazyLoadError", [a, i, n]), a.progressiveLazyLoad()) }, o.src = n) : a.$slider.trigger("allImagesLoaded", [a])
        }, e.prototype.refresh = function(e) {
            var i, n, s = this;
            n = s.slideCount - s.options.slidesToShow, !s.options.infinite && s.currentSlide > n && (s.currentSlide = n), s.slideCount <= s.options.slidesToShow && (s.currentSlide = 0), i = s.currentSlide, s.destroy(!0), t.extend(s, s.initials, { currentSlide: i }), s.init(), e || s.changeSlide({ data: { message: "index", index: i } }, !1)
        }, e.prototype.registerBreakpoints = function() {
            var e, i, n, s = this,
                r = s.options.responsive || null;
            if ("array" === t.type(r) && r.length) {
                for (e in s.respondTo = s.options.respondTo || "window", r)
                    if (n = s.breakpoints.length - 1, r.hasOwnProperty(e)) {
                        for (i = r[e].breakpoint; n >= 0;) s.breakpoints[n] && s.breakpoints[n] === i && s.breakpoints.splice(n, 1), n--;
                        s.breakpoints.push(i), s.breakpointSettings[i] = r[e].settings
                    }
                s.breakpoints.sort(function(t, e) { return s.options.mobileFirst ? t - e : e - t })
            }
        }, e.prototype.reinit = function() {
            var e = this;
            e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide"), e.slideCount = e.$slides.length, e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll), e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0), e.registerBreakpoints(), e.setProps(), e.setupInfinite(), e.buildArrows(), e.updateArrows(), e.initArrowEvents(), e.buildDots(), e.updateDots(), e.initDotEvents(), e.cleanUpSlideEvents(), e.initSlideEvents(), e.checkResponsive(!1, !0), !0 === e.options.focusOnSelect && t(e.$slideTrack).children().on("click.slick", e.selectHandler), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), e.setPosition(), e.focusHandler(), e.paused = !e.options.autoplay, e.autoPlay(), e.$slider.trigger("reInit", [e])
        }, e.prototype.resize = function() {
            var e = this;
            t(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay), e.windowDelay = window.setTimeout(function() { e.windowWidth = t(window).width(), e.checkResponsive(), e.unslicked || e.setPosition() }, 50))
        }, e.prototype.removeSlide = e.prototype.slickRemove = function(t, e, i) {
            var n = this;
            if (t = "boolean" == typeof t ? !0 === (e = t) ? 0 : n.slideCount - 1 : !0 === e ? --t : t, n.slideCount < 1 || t < 0 || t > n.slideCount - 1) return !1;
            n.unload(), !0 === i ? n.$slideTrack.children().remove() : n.$slideTrack.children(this.options.slide).eq(t).remove(), n.$slides = n.$slideTrack.children(this.options.slide), n.$slideTrack.children(this.options.slide).detach(), n.$slideTrack.append(n.$slides), n.$slidesCache = n.$slides, n.reinit()
        }, e.prototype.setCSS = function(t) {
            var e, i, n = this,
                s = {};
            !0 === n.options.rtl && (t = -t), e = "left" == n.positionProp ? Math.ceil(t) + "px" : "0px", i = "top" == n.positionProp ? Math.ceil(t) + "px" : "0px", s[n.positionProp] = t, !1 === n.transformsEnabled ? n.$slideTrack.css(s) : (s = {}, !1 === n.cssTransitions ? (s[n.animType] = "translate(" + e + ", " + i + ")", n.$slideTrack.css(s)) : (s[n.animType] = "translate3d(" + e + ", " + i + ", 0px)", n.$slideTrack.css(s)))
        }, e.prototype.setDimensions = function() { var t = this;!1 === t.options.vertical ? !0 === t.options.centerMode && t.$list.css({ padding: "0px " + t.options.centerPadding }) : (t.$list.height(t.$slides.first().outerHeight(!0) * t.options.slidesToShow), !0 === t.options.centerMode && t.$list.css({ padding: t.options.centerPadding + " 0px" })), t.listWidth = t.$list.width(), t.listHeight = t.$list.height(), !1 === t.options.vertical && !1 === t.options.variableWidth ? (t.slideWidth = Math.ceil(t.listWidth / t.options.slidesToShow), t.$slideTrack.width(Math.ceil(t.slideWidth * t.$slideTrack.children(".slick-slide").length))) : !0 === t.options.variableWidth ? t.$slideTrack.width(5e3 * t.slideCount) : (t.slideWidth = Math.ceil(t.listWidth), t.$slideTrack.height(Math.ceil(t.$slides.first().outerHeight(!0) * t.$slideTrack.children(".slick-slide").length))); var e = t.$slides.first().outerWidth(!0) - t.$slides.first().width();!1 === t.options.variableWidth && t.$slideTrack.children(".slick-slide").width(t.slideWidth - e) }, e.prototype.setFade = function() {
            var e, i = this;
            i.$slides.each(function(n, s) { e = i.slideWidth * n * -1, !0 === i.options.rtl ? t(s).css({ position: "relative", right: e, top: 0, zIndex: i.options.zIndex - 2, opacity: 0 }) : t(s).css({ position: "relative", left: e, top: 0, zIndex: i.options.zIndex - 2, opacity: 0 }) }), i.$slides.eq(i.currentSlide).css({ zIndex: i.options.zIndex - 1, opacity: 1 })
        }, e.prototype.setHeight = function() {
            var t = this;
            if (1 === t.options.slidesToShow && !0 === t.options.adaptiveHeight && !1 === t.options.vertical) {
                var e = t.$slides.eq(t.currentSlide).outerHeight(!0);
                t.$list.css("height", e)
            }
        }, e.prototype.setOption = e.prototype.slickSetOption = function() {
            var e, i, n, s, r, o = this,
                a = !1;
            if ("object" === t.type(arguments[0]) ? (n = arguments[0], a = arguments[1], r = "multiple") : "string" === t.type(arguments[0]) && (n = arguments[0], s = arguments[1], a = arguments[2], "responsive" === arguments[0] && "array" === t.type(arguments[1]) ? r = "responsive" : void 0 !== arguments[1] && (r = "single")), "single" === r) o.options[n] = s;
            else if ("multiple" === r) t.each(n, function(t, e) { o.options[t] = e });
            else if ("responsive" === r)
                for (i in s)
                    if ("array" !== t.type(o.options.responsive)) o.options.responsive = [s[i]];
                    else {
                        for (e = o.options.responsive.length - 1; e >= 0;) o.options.responsive[e].breakpoint === s[i].breakpoint && o.options.responsive.splice(e, 1), e--;
                        o.options.responsive.push(s[i])
                    }
            a && (o.unload(), o.reinit())
        }, e.prototype.setPosition = function() {
            var t = this;
            t.setDimensions(), t.setHeight(), !1 === t.options.fade ? t.setCSS(t.getLeft(t.currentSlide)) : t.setFade(), t.$slider.trigger("setPosition", [t])
        }, e.prototype.setProps = function() {
            var t = this,
                e = document.body.style;
            t.positionProp = !0 === t.options.vertical ? "top" : "left", "top" === t.positionProp ? t.$slider.addClass("slick-vertical") : t.$slider.removeClass("slick-vertical"), void 0 === e.WebkitTransition && void 0 === e.MozTransition && void 0 === e.msTransition || !0 === t.options.useCSS && (t.cssTransitions = !0), t.options.fade && ("number" == typeof t.options.zIndex ? t.options.zIndex < 3 && (t.options.zIndex = 3) : t.options.zIndex = t.defaults.zIndex), void 0 !== e.OTransform && (t.animType = "OTransform", t.transformType = "-o-transform", t.transitionType = "OTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)), void 0 !== e.MozTransform && (t.animType = "MozTransform", t.transformType = "-moz-transform", t.transitionType = "MozTransition", void 0 === e.perspectiveProperty && void 0 === e.MozPerspective && (t.animType = !1)), void 0 !== e.webkitTransform && (t.animType = "webkitTransform", t.transformType = "-webkit-transform", t.transitionType = "webkitTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)), void 0 !== e.msTransform && (t.animType = "msTransform", t.transformType = "-ms-transform", t.transitionType = "msTransition", void 0 === e.msTransform && (t.animType = !1)), void 0 !== e.transform && !1 !== t.animType && (t.animType = "transform", t.transformType = "transform", t.transitionType = "transition"), t.transformsEnabled = t.options.useTransform && null !== t.animType && !1 !== t.animType
        }, e.prototype.setSlideClasses = function(t) {
            var e, i, n, s, r = this;
            if (i = r.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), r.$slides.eq(t).addClass("slick-current"), !0 === r.options.centerMode) {
                var o = r.options.slidesToShow % 2 == 0 ? 1 : 0;
                e = Math.floor(r.options.slidesToShow / 2), !0 === r.options.infinite && (t >= e && t <= r.slideCount - 1 - e ? r.$slides.slice(t - e + o, t + e + 1).addClass("slick-active").attr("aria-hidden", "false") : (n = r.options.slidesToShow + t, i.slice(n - e + 1 + o, n + e + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === t ? i.eq(i.length - 1 - r.options.slidesToShow).addClass("slick-center") : t === r.slideCount - 1 && i.eq(r.options.slidesToShow).addClass("slick-center")), r.$slides.eq(t).addClass("slick-center")
            } else t >= 0 && t <= r.slideCount - r.options.slidesToShow ? r.$slides.slice(t, t + r.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : i.length <= r.options.slidesToShow ? i.addClass("slick-active").attr("aria-hidden", "false") : (s = r.slideCount % r.options.slidesToShow, n = !0 === r.options.infinite ? r.options.slidesToShow + t : t, r.options.slidesToShow == r.options.slidesToScroll && r.slideCount - t < r.options.slidesToShow ? i.slice(n - (r.options.slidesToShow - s), n + s).addClass("slick-active").attr("aria-hidden", "false") : i.slice(n, n + r.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"));
            "ondemand" !== r.options.lazyLoad && "anticipated" !== r.options.lazyLoad || r.lazyLoad()
        }, e.prototype.setupInfinite = function() {
            var e, i, n, s = this;
            if (!0 === s.options.fade && (s.options.centerMode = !1), !0 === s.options.infinite && !1 === s.options.fade && (i = null, s.slideCount > s.options.slidesToShow)) {
                for (n = !0 === s.options.centerMode ? s.options.slidesToShow + 1 : s.options.slidesToShow, e = s.slideCount; e > s.slideCount - n; e -= 1) i = e - 1, t(s.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i - s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");
                for (e = 0; e < n + s.slideCount; e += 1) i = e, t(s.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i + s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");
                s.$slideTrack.find(".slick-cloned").find("[id]").each(function() { t(this).attr("id", "") })
            }
        }, e.prototype.interrupt = function(t) { t || this.autoPlay(), this.interrupted = t }, e.prototype.selectHandler = function(e) {
            var i = this,
                n = t(e.target).is(".slick-slide") ? t(e.target) : t(e.target).parents(".slick-slide"),
                s = parseInt(n.attr("data-slick-index"));
            s || (s = 0), i.slideCount <= i.options.slidesToShow ? i.slideHandler(s, !1, !0) : i.slideHandler(s)
        }, e.prototype.slideHandler = function(t, e, i) {
            var n, s, r, o, a, l = null,
                h = this;
            if (e = e || !1, !(!0 === h.animating && !0 === h.options.waitForAnimate || !0 === h.options.fade && h.currentSlide === t))
                if (!1 === e && h.asNavFor(t), n = t, l = h.getLeft(n), o = h.getLeft(h.currentSlide), h.currentLeft = null === h.swipeLeft ? o : h.swipeLeft, !1 === h.options.infinite && !1 === h.options.centerMode && (t < 0 || t > h.getDotCount() * h.options.slidesToScroll)) !1 === h.options.fade && (n = h.currentSlide, !0 !== i ? h.animateSlide(o, function() { h.postSlide(n) }) : h.postSlide(n));
                else if (!1 === h.options.infinite && !0 === h.options.centerMode && (t < 0 || t > h.slideCount - h.options.slidesToScroll)) !1 === h.options.fade && (n = h.currentSlide, !0 !== i ? h.animateSlide(o, function() { h.postSlide(n) }) : h.postSlide(n));
            else { if (h.options.autoplay && clearInterval(h.autoPlayTimer), s = n < 0 ? h.slideCount % h.options.slidesToScroll != 0 ? h.slideCount - h.slideCount % h.options.slidesToScroll : h.slideCount + n : n >= h.slideCount ? h.slideCount % h.options.slidesToScroll != 0 ? 0 : n - h.slideCount : n, h.animating = !0, h.$slider.trigger("beforeChange", [h, h.currentSlide, s]), r = h.currentSlide, h.currentSlide = s, h.setSlideClasses(h.currentSlide), h.options.asNavFor && (a = (a = h.getNavTarget()).slick("getSlick")).slideCount <= a.options.slidesToShow && a.setSlideClasses(h.currentSlide), h.updateDots(), h.updateArrows(), !0 === h.options.fade) return !0 !== i ? (h.fadeSlideOut(r), h.fadeSlide(s, function() { h.postSlide(s) })) : h.postSlide(s), void h.animateHeight();!0 !== i ? h.animateSlide(l, function() { h.postSlide(s) }) : h.postSlide(s) }
        }, e.prototype.startLoad = function() { var t = this;!0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow.hide(), t.$nextArrow.hide()), !0 === t.options.dots && t.slideCount > t.options.slidesToShow && t.$dots.hide(), t.$slider.addClass("slick-loading") }, e.prototype.swipeDirection = function() { var t, e, i, n, s = this; return t = s.touchObject.startX - s.touchObject.curX, e = s.touchObject.startY - s.touchObject.curY, i = Math.atan2(e, t), (n = Math.round(180 * i / Math.PI)) < 0 && (n = 360 - Math.abs(n)), n <= 45 && n >= 0 ? !1 === s.options.rtl ? "left" : "right" : n <= 360 && n >= 315 ? !1 === s.options.rtl ? "left" : "right" : n >= 135 && n <= 225 ? !1 === s.options.rtl ? "right" : "left" : !0 === s.options.verticalSwiping ? n >= 35 && n <= 135 ? "down" : "up" : "vertical" }, e.prototype.swipeEnd = function(t) {
            var e, i, n = this;
            if (n.dragging = !1, n.swiping = !1, n.scrolling) return n.scrolling = !1, !1;
            if (n.interrupted = !1, n.shouldClick = !(n.touchObject.swipeLength > 10), void 0 === n.touchObject.curX) return !1;
            if (!0 === n.touchObject.edgeHit && n.$slider.trigger("edge", [n, n.swipeDirection()]), n.touchObject.swipeLength >= n.touchObject.minSwipe) {
                switch (i = n.swipeDirection()) {
                    case "left":
                    case "down":
                        e = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide + n.getSlideCount()) : n.currentSlide + n.getSlideCount(), n.currentDirection = 0;
                        break;
                    case "right":
                    case "up":
                        e = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide - n.getSlideCount()) : n.currentSlide - n.getSlideCount(), n.currentDirection = 1
                }
                "vertical" != i && (n.slideHandler(e), n.touchObject = {}, n.$slider.trigger("swipe", [n, i]))
            } else n.touchObject.startX !== n.touchObject.curX && (n.slideHandler(n.currentSlide), n.touchObject = {})
        }, e.prototype.swipeHandler = function(t) {
            var e = this;
            if (!(!1 === e.options.swipe || "ontouchend" in document && !1 === e.options.swipe || !1 === e.options.draggable && -1 !== t.type.indexOf("mouse"))) switch (e.touchObject.fingerCount = t.originalEvent && void 0 !== t.originalEvent.touches ? t.originalEvent.touches.length : 1, e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold, !0 === e.options.verticalSwiping && (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold), t.data.action) {
                case "start":
                    e.swipeStart(t);
                    break;
                case "move":
                    e.swipeMove(t);
                    break;
                case "end":
                    e.swipeEnd(t)
            }
        }, e.prototype.swipeMove = function(t) { var e, i, n, s, r, o, a = this; return r = void 0 !== t.originalEvent ? t.originalEvent.touches : null, !(!a.dragging || a.scrolling || r && 1 !== r.length) && (e = a.getLeft(a.currentSlide), a.touchObject.curX = void 0 !== r ? r[0].pageX : t.clientX, a.touchObject.curY = void 0 !== r ? r[0].pageY : t.clientY, a.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(a.touchObject.curX - a.touchObject.startX, 2))), o = Math.round(Math.sqrt(Math.pow(a.touchObject.curY - a.touchObject.startY, 2))), !a.options.verticalSwiping && !a.swiping && o > 4 ? (a.scrolling = !0, !1) : (!0 === a.options.verticalSwiping && (a.touchObject.swipeLength = o), i = a.swipeDirection(), void 0 !== t.originalEvent && a.touchObject.swipeLength > 4 && (a.swiping = !0, t.preventDefault()), s = (!1 === a.options.rtl ? 1 : -1) * (a.touchObject.curX > a.touchObject.startX ? 1 : -1), !0 === a.options.verticalSwiping && (s = a.touchObject.curY > a.touchObject.startY ? 1 : -1), n = a.touchObject.swipeLength, a.touchObject.edgeHit = !1, !1 === a.options.infinite && (0 === a.currentSlide && "right" === i || a.currentSlide >= a.getDotCount() && "left" === i) && (n = a.touchObject.swipeLength * a.options.edgeFriction, a.touchObject.edgeHit = !0), !1 === a.options.vertical ? a.swipeLeft = e + n * s : a.swipeLeft = e + n * (a.$list.height() / a.listWidth) * s, !0 === a.options.verticalSwiping && (a.swipeLeft = e + n * s), !0 !== a.options.fade && !1 !== a.options.touchMove && (!0 === a.animating ? (a.swipeLeft = null, !1) : void a.setCSS(a.swipeLeft)))) }, e.prototype.swipeStart = function(t) {
            var e, i = this;
            if (i.interrupted = !0, 1 !== i.touchObject.fingerCount || i.slideCount <= i.options.slidesToShow) return i.touchObject = {}, !1;
            void 0 !== t.originalEvent && void 0 !== t.originalEvent.touches && (e = t.originalEvent.touches[0]), i.touchObject.startX = i.touchObject.curX = void 0 !== e ? e.pageX : t.clientX, i.touchObject.startY = i.touchObject.curY = void 0 !== e ? e.pageY : t.clientY, i.dragging = !0
        }, e.prototype.unfilterSlides = e.prototype.slickUnfilter = function() {
            var t = this;
            null !== t.$slidesCache && (t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.appendTo(t.$slideTrack), t.reinit())
        }, e.prototype.unload = function() {
            var e = this;
            t(".slick-cloned", e.$slider).remove(), e.$dots && e.$dots.remove(), e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(), e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(), e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
        }, e.prototype.unslick = function(t) {
            var e = this;
            e.$slider.trigger("unslick", [e, t]), e.destroy()
        }, e.prototype.updateArrows = function() {
            var t = this;
            Math.floor(t.options.slidesToShow / 2), !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && !t.options.infinite && (t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === t.currentSlide ? (t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : t.currentSlide >= t.slideCount - t.options.slidesToShow && !1 === t.options.centerMode ? (t.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : t.currentSlide >= t.slideCount - 1 && !0 === t.options.centerMode && (t.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
        }, e.prototype.updateDots = function() {
            var t = this;
            null !== t.$dots && (t.$dots.find("li").removeClass("slick-active").end(), t.$dots.find("li").eq(Math.floor(t.currentSlide / t.options.slidesToScroll)).addClass("slick-active"))
        }, e.prototype.visibility = function() {
            var t = this;
            t.options.autoplay && (document[t.hidden] ? t.interrupted = !0 : t.interrupted = !1)
        }, t.fn.slick = function() {
            var t, i, n = this,
                s = arguments[0],
                r = Array.prototype.slice.call(arguments, 1),
                o = n.length;
            for (t = 0; t < o; t++)
                if ("object" == typeof s || void 0 === s ? n[t].slick = new e(n[t], s) : i = n[t].slick[s].apply(n[t].slick, r), void 0 !== i) return i;
            return n
        }
    }),
    function(t, e) { "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.Splitting = e() }(this, function() {
        "use strict";
        var t = document,
            e = t.createTextNode.bind(t);

        function i(t, e, i) { t.style.setProperty(e, i) }

        function n(t, e) { return t.appendChild(e) }

        function s(e, i, s, r) { var o = t.createElement("span"); return i && (o.className = i), s && (!r && o.setAttribute("data-" + i, s), o.textContent = s), e && n(e, o) || o }

        function r(t, e) { return t.getAttribute("data-" + e) }

        function o(e, i) { return e && 0 != e.length ? e.nodeName ? [e] : [].slice.call(e[0].nodeName ? e : (i || t).querySelectorAll(e)) : [] }

        function a(t) { for (var e = []; t--;) e[t] = []; return e }

        function l(t, e) { t && t.some(e) }

        function h(t) { return function(e) { return t[e] } }
        var d = {};

        function u(t, e, i, n) { return { by: t, depends: e, key: i, split: n } }

        function c(t) {
            return function t(e, i, n) {
                var s = n.indexOf(e);
                if (-1 == s) n.unshift(e), l(d[e].depends, function(i) { t(i, e, n) });
                else {
                    var r = n.indexOf(i);
                    n.splice(s, 1), n.splice(r, 0, e)
                }
                return n
            }(t, 0, []).map(h(d))
        }

        function p(t) { d[t.by] = t }

        function f(t, i, r, a, h) {
            t.normalize();
            var d = [],
                u = document.createDocumentFragment();
            a && d.push(t.previousSibling);
            var c = [];
            return o(t.childNodes).some(function(t) {
                if (!t.tagName || t.hasChildNodes()) {
                    if (t.childNodes && t.childNodes.length) return c.push(t), void d.push.apply(d, f(t, i, r, a, h));
                    var n = t.wholeText || "",
                        o = n.trim();
                    o.length && (" " === n[0] && c.push(e(" ")), l(o.split(r), function(t, e) {
                        e && h && c.push(s(u, "whitespace", " ", h));
                        var n = s(u, i, t);
                        d.push(n), c.push(n)
                    }), " " === n[n.length - 1] && c.push(e(" ")))
                } else c.push(t)
            }), l(c, function(t) { n(u, t) }), t.innerHTML = "", n(t, u), d
        }
        var m = "words",
            g = u(m, 0, "word", function(t) { return f(t, "word", /\s+/, 0, 1) }),
            v = "chars",
            y = u(v, [m], "char", function(t, e, i) { var n = []; return l(i[m], function(t, i) { n.push.apply(n, f(t, "char", "", e.whitespace && i)) }), n });

        function w(t) {
            var e = (t = t || {}).key;
            return o(t.target || "[data-splitting]").map(function(n) {
                var s = n["ðŸŒ"];
                if (!t.force && s) return s;
                s = n["ðŸŒ"] = { el: n };
                var o = c(t.by || r(n, "splitting") || v),
                    a = function(t, e) { for (var i in e) t[i] = e[i]; return t }({}, t);
                return l(o, function(t) {
                    if (t.split) {
                        var r = t.by,
                            o = (e ? "-" + e : "") + t.key,
                            h = t.split(n, a, s);
                        o && (d = n, p = (c = "--" + o) + "-index", l(u = h, function(t, e) { Array.isArray(t) ? l(t, function(t) { i(t, p, e) }) : i(t, p, e) }), i(d, c + "-total", u.length)), s[r] = h, n.classList.add(r)
                    }
                    var d, u, c, p
                }), n.classList.add("splitting"), s
            })
        }

        function b(t, e, i) {
            var n = o(e.matching || t.children, t),
                s = {};
            return l(n, function(t) {
                var e = Math.round(t[i]);
                (s[e] || (s[e] = [])).push(t)
            }), Object.keys(s).map(Number).sort(T).map(h(s))
        }

        function T(t, e) { return t - e }
        w.html = function(t) { var e = (t = t || {}).target = s(); return e.innerHTML = t.content, w(t), e.outerHTML }, w.add = p;
        var _ = u("lines", [m], "line", function(t, e, i) { return b(t, { matching: i[m] }, "offsetTop") }),
            S = u("items", 0, "item", function(t, e) { return o(e.matching || t.children, t) }),
            x = u("rows", 0, "row", function(t, e) { return b(t, e, "offsetTop") }),
            E = u("cols", 0, "col", function(t, e) { return b(t, e, "offsetLeft") }),
            C = u("grid", ["rows", "cols"]),
            k = "layout",
            I = u(k, 0, 0, function(t, e) {
                var a = e.rows = +(e.rows || r(t, "rows") || 1),
                    l = e.columns = +(e.columns || r(t, "columns") || 1);
                if (e.image = e.image || r(t, "image") || t.currentSrc || t.src, e.image) {
                    var h = o("img", t)[0];
                    e.image = h && (h.currentSrc || h.src)
                }
                e.image && i(t, "background-image", "url(" + e.image + ")");
                for (var d = a * l, u = [], c = s(0, "cell-grid"); d--;) {
                    var p = s(c, "cell");
                    s(p, "cell-inner"), u.push(p)
                }
                return n(t, c), u
            }),
            A = u("cellRows", [k], "row", function(t, e, i) {
                var n = e.rows,
                    s = a(n);
                return l(i[k], function(t, e, i) { s[Math.floor(e / (i.length / n))].push(t) }), s
            }),
            M = u("cellColumns", [k], "col", function(t, e, i) {
                var n = e.columns,
                    s = a(n);
                return l(i[k], function(t, e) { s[e % n].push(t) }), s
            }),
            O = u("cells", ["cellRows", "cellColumns"], "cell", function(t, e, i) { return i[k] });
        return p(g), p(y), p(_), p(S), p(x), p(E), p(C), p(I), p(A), p(M), p(O), w
    }),
    function(t, e) { "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = t || self).Swiper = e() }(this, function() {
        "use strict";
        var t = "undefined" == typeof document ? { body: {}, addEventListener: function() {}, removeEventListener: function() {}, activeElement: { blur: function() {}, nodeName: "" }, querySelector: function() { return null }, querySelectorAll: function() { return [] }, getElementById: function() { return null }, createEvent: function() { return { initEvent: function() {} } }, createElement: function() { return { children: [], childNodes: [], style: {}, setAttribute: function() {}, getElementsByTagName: function() { return [] } } }, location: { hash: "" } } : document,
            e = "undefined" == typeof window ? { document: t, navigator: { userAgent: "" }, location: {}, history: {}, CustomEvent: function() { return this }, addEventListener: function() {}, removeEventListener: function() {}, getComputedStyle: function() { return { getPropertyValue: function() { return "" } } }, Image: function() {}, Date: function() {}, screen: {}, setTimeout: function() {}, clearTimeout: function() {} } : window,
            i = function(t) { for (var e = 0; e < t.length; e += 1) this[e] = t[e]; return this.length = t.length, this };

        function n(n, s) {
            var r = [],
                o = 0;
            if (n && !s && n instanceof i) return n;
            if (n)
                if ("string" == typeof n) {
                    var a, l, h = n.trim();
                    if (h.indexOf("<") >= 0 && h.indexOf(">") >= 0) { var d = "div"; for (0 === h.indexOf("<li") && (d = "ul"), 0 === h.indexOf("<tr") && (d = "tbody"), 0 !== h.indexOf("<td") && 0 !== h.indexOf("<th") || (d = "tr"), 0 === h.indexOf("<tbody") && (d = "table"), 0 === h.indexOf("<option") && (d = "select"), (l = t.createElement(d)).innerHTML = h, o = 0; o < l.childNodes.length; o += 1) r.push(l.childNodes[o]) } else
                        for (a = s || "#" !== n[0] || n.match(/[ .<>:~]/) ? (s || t).querySelectorAll(n.trim()) : [t.getElementById(n.trim().split("#")[1])], o = 0; o < a.length; o += 1) a[o] && r.push(a[o])
                } else if (n.nodeType || n === e || n === t) r.push(n);
            else if (n.length > 0 && n[0].nodeType)
                for (o = 0; o < n.length; o += 1) r.push(n[o]);
            return new i(r)
        }

        function s(t) { for (var e = [], i = 0; i < t.length; i += 1) - 1 === e.indexOf(t[i]) && e.push(t[i]); return e }
        n.fn = i.prototype, n.Class = i, n.Dom7 = i;
        var r = {
            addClass: function(t) {
                if (void 0 === t) return this;
                for (var e = t.split(" "), i = 0; i < e.length; i += 1)
                    for (var n = 0; n < this.length; n += 1) void 0 !== this[n] && void 0 !== this[n].classList && this[n].classList.add(e[i]);
                return this
            },
            removeClass: function(t) {
                for (var e = t.split(" "), i = 0; i < e.length; i += 1)
                    for (var n = 0; n < this.length; n += 1) void 0 !== this[n] && void 0 !== this[n].classList && this[n].classList.remove(e[i]);
                return this
            },
            hasClass: function(t) { return !!this[0] && this[0].classList.contains(t) },
            toggleClass: function(t) {
                for (var e = t.split(" "), i = 0; i < e.length; i += 1)
                    for (var n = 0; n < this.length; n += 1) void 0 !== this[n] && void 0 !== this[n].classList && this[n].classList.toggle(e[i]);
                return this
            },
            attr: function(t, e) {
                var i = arguments;
                if (1 === arguments.length && "string" == typeof t) return this[0] ? this[0].getAttribute(t) : void 0;
                for (var n = 0; n < this.length; n += 1)
                    if (2 === i.length) this[n].setAttribute(t, e);
                    else
                        for (var s in t) this[n][s] = t[s], this[n].setAttribute(s, t[s]);
                return this
            },
            removeAttr: function(t) { for (var e = 0; e < this.length; e += 1) this[e].removeAttribute(t); return this },
            data: function(t, e) { var i; if (void 0 !== e) { for (var n = 0; n < this.length; n += 1)(i = this[n]).dom7ElementDataStorage || (i.dom7ElementDataStorage = {}), i.dom7ElementDataStorage[t] = e; return this } if (i = this[0]) return i.dom7ElementDataStorage && t in i.dom7ElementDataStorage ? i.dom7ElementDataStorage[t] : i.getAttribute("data-" + t) || void 0 },
            transform: function(t) {
                for (var e = 0; e < this.length; e += 1) {
                    var i = this[e].style;
                    i.webkitTransform = t, i.transform = t
                }
                return this
            },
            transition: function(t) {
                "string" != typeof t && (t += "ms");
                for (var e = 0; e < this.length; e += 1) {
                    var i = this[e].style;
                    i.webkitTransitionDuration = t, i.transitionDuration = t
                }
                return this
            },
            on: function() {
                for (var t, e = [], i = arguments.length; i--;) e[i] = arguments[i];
                var s = e[0],
                    r = e[1],
                    o = e[2],
                    a = e[3];

                function l(t) {
                    var e = t.target;
                    if (e) {
                        var i = t.target.dom7EventData || [];
                        if (i.indexOf(t) < 0 && i.unshift(t), n(e).is(r)) o.apply(e, i);
                        else
                            for (var s = n(e).parents(), a = 0; a < s.length; a += 1) n(s[a]).is(r) && o.apply(s[a], i)
                    }
                }

                function h(t) {
                    var e = t && t.target && t.target.dom7EventData || [];
                    e.indexOf(t) < 0 && e.unshift(t), o.apply(this, e)
                }
                "function" == typeof e[1] && (s = (t = e)[0], o = t[1], a = t[2], r = void 0), a || (a = !1);
                for (var d, u = s.split(" "), c = 0; c < this.length; c += 1) {
                    var p = this[c];
                    if (r)
                        for (d = 0; d < u.length; d += 1) {
                            var f = u[d];
                            p.dom7LiveListeners || (p.dom7LiveListeners = {}), p.dom7LiveListeners[f] || (p.dom7LiveListeners[f] = []), p.dom7LiveListeners[f].push({ listener: o, proxyListener: l }), p.addEventListener(f, l, a)
                        } else
                            for (d = 0; d < u.length; d += 1) {
                                var m = u[d];
                                p.dom7Listeners || (p.dom7Listeners = {}), p.dom7Listeners[m] || (p.dom7Listeners[m] = []), p.dom7Listeners[m].push({ listener: o, proxyListener: h }), p.addEventListener(m, h, a)
                            }
                }
                return this
            },
            off: function() {
                for (var t, e = [], i = arguments.length; i--;) e[i] = arguments[i];
                var n = e[0],
                    s = e[1],
                    r = e[2],
                    o = e[3];
                "function" == typeof e[1] && (n = (t = e)[0], r = t[1], o = t[2], s = void 0), o || (o = !1);
                for (var a = n.split(" "), l = 0; l < a.length; l += 1)
                    for (var h = a[l], d = 0; d < this.length; d += 1) {
                        var u = this[d],
                            c = void 0;
                        if (!s && u.dom7Listeners ? c = u.dom7Listeners[h] : s && u.dom7LiveListeners && (c = u.dom7LiveListeners[h]), c && c.length)
                            for (var p = c.length - 1; p >= 0; p -= 1) {
                                var f = c[p];
                                r && f.listener === r ? (u.removeEventListener(h, f.proxyListener, o), c.splice(p, 1)) : r && f.listener && f.listener.dom7proxy && f.listener.dom7proxy === r ? (u.removeEventListener(h, f.proxyListener, o), c.splice(p, 1)) : r || (u.removeEventListener(h, f.proxyListener, o), c.splice(p, 1))
                            }
                    }
                return this
            },
            trigger: function() {
                for (var i = [], n = arguments.length; n--;) i[n] = arguments[n];
                for (var s = i[0].split(" "), r = i[1], o = 0; o < s.length; o += 1)
                    for (var a = s[o], l = 0; l < this.length; l += 1) {
                        var h = this[l],
                            d = void 0;
                        try { d = new e.CustomEvent(a, { detail: r, bubbles: !0, cancelable: !0 }) } catch (e) {
                            (d = t.createEvent("Event")).initEvent(a, !0, !0), d.detail = r
                        }
                        h.dom7EventData = i.filter(function(t, e) { return e > 0 }), h.dispatchEvent(d), h.dom7EventData = [], delete h.dom7EventData
                    }
                return this
            },
            transitionEnd: function(t) {
                var e, i = ["webkitTransitionEnd", "transitionend"],
                    n = this;

                function s(r) {
                    if (r.target === this)
                        for (t.call(this, r), e = 0; e < i.length; e += 1) n.off(i[e], s)
                }
                if (t)
                    for (e = 0; e < i.length; e += 1) n.on(i[e], s);
                return this
            },
            outerWidth: function(t) { if (this.length > 0) { if (t) { var e = this.styles(); return this[0].offsetWidth + parseFloat(e.getPropertyValue("margin-right")) + parseFloat(e.getPropertyValue("margin-left")) } return this[0].offsetWidth } return null },
            outerHeight: function(t) { if (this.length > 0) { if (t) { var e = this.styles(); return this[0].offsetHeight + parseFloat(e.getPropertyValue("margin-top")) + parseFloat(e.getPropertyValue("margin-bottom")) } return this[0].offsetHeight } return null },
            offset: function() {
                if (this.length > 0) {
                    var i = this[0],
                        n = i.getBoundingClientRect(),
                        s = t.body,
                        r = i.clientTop || s.clientTop || 0,
                        o = i.clientLeft || s.clientLeft || 0,
                        a = i === e ? e.scrollY : i.scrollTop,
                        l = i === e ? e.scrollX : i.scrollLeft;
                    return { top: n.top + a - r, left: n.left + l - o }
                }
                return null
            },
            css: function(t, i) {
                var n;
                if (1 === arguments.length) {
                    if ("string" != typeof t) {
                        for (n = 0; n < this.length; n += 1)
                            for (var s in t) this[n].style[s] = t[s];
                        return this
                    }
                    if (this[0]) return e.getComputedStyle(this[0], null).getPropertyValue(t)
                }
                if (2 === arguments.length && "string" == typeof t) { for (n = 0; n < this.length; n += 1) this[n].style[t] = i; return this }
                return this
            },
            each: function(t) {
                if (!t) return this;
                for (var e = 0; e < this.length; e += 1)
                    if (!1 === t.call(this[e], e, this[e])) return this;
                return this
            },
            html: function(t) { if (void 0 === t) return this[0] ? this[0].innerHTML : void 0; for (var e = 0; e < this.length; e += 1) this[e].innerHTML = t; return this },
            text: function(t) { if (void 0 === t) return this[0] ? this[0].textContent.trim() : null; for (var e = 0; e < this.length; e += 1) this[e].textContent = t; return this },
            is: function(s) {
                var r, o, a = this[0];
                if (!a || void 0 === s) return !1;
                if ("string" == typeof s) {
                    if (a.matches) return a.matches(s);
                    if (a.webkitMatchesSelector) return a.webkitMatchesSelector(s);
                    if (a.msMatchesSelector) return a.msMatchesSelector(s);
                    for (r = n(s), o = 0; o < r.length; o += 1)
                        if (r[o] === a) return !0;
                    return !1
                }
                if (s === t) return a === t;
                if (s === e) return a === e;
                if (s.nodeType || s instanceof i) {
                    for (r = s.nodeType ? [s] : s, o = 0; o < r.length; o += 1)
                        if (r[o] === a) return !0;
                    return !1
                }
                return !1
            },
            index: function() { var t, e = this[0]; if (e) { for (t = 0; null !== (e = e.previousSibling);) 1 === e.nodeType && (t += 1); return t } },
            eq: function(t) { if (void 0 === t) return this; var e, n = this.length; return new i(t > n - 1 ? [] : t < 0 ? (e = n + t) < 0 ? [] : [this[e]] : [this[t]]) },
            append: function() {
                for (var e, n = [], s = arguments.length; s--;) n[s] = arguments[s];
                for (var r = 0; r < n.length; r += 1) {
                    e = n[r];
                    for (var o = 0; o < this.length; o += 1)
                        if ("string" == typeof e) { var a = t.createElement("div"); for (a.innerHTML = e; a.firstChild;) this[o].appendChild(a.firstChild) } else if (e instanceof i)
                        for (var l = 0; l < e.length; l += 1) this[o].appendChild(e[l]);
                    else this[o].appendChild(e)
                }
                return this
            },
            prepend: function(e) {
                var n, s;
                for (n = 0; n < this.length; n += 1)
                    if ("string" == typeof e) { var r = t.createElement("div"); for (r.innerHTML = e, s = r.childNodes.length - 1; s >= 0; s -= 1) this[n].insertBefore(r.childNodes[s], this[n].childNodes[0]) } else if (e instanceof i)
                    for (s = 0; s < e.length; s += 1) this[n].insertBefore(e[s], this[n].childNodes[0]);
                else this[n].insertBefore(e, this[n].childNodes[0]);
                return this
            },
            next: function(t) { return this.length > 0 ? t ? this[0].nextElementSibling && n(this[0].nextElementSibling).is(t) ? new i([this[0].nextElementSibling]) : new i([]) : this[0].nextElementSibling ? new i([this[0].nextElementSibling]) : new i([]) : new i([]) },
            nextAll: function(t) {
                var e = [],
                    s = this[0];
                if (!s) return new i([]);
                for (; s.nextElementSibling;) {
                    var r = s.nextElementSibling;
                    t ? n(r).is(t) && e.push(r) : e.push(r), s = r
                }
                return new i(e)
            },
            prev: function(t) { if (this.length > 0) { var e = this[0]; return t ? e.previousElementSibling && n(e.previousElementSibling).is(t) ? new i([e.previousElementSibling]) : new i([]) : e.previousElementSibling ? new i([e.previousElementSibling]) : new i([]) } return new i([]) },
            prevAll: function(t) {
                var e = [],
                    s = this[0];
                if (!s) return new i([]);
                for (; s.previousElementSibling;) {
                    var r = s.previousElementSibling;
                    t ? n(r).is(t) && e.push(r) : e.push(r), s = r
                }
                return new i(e)
            },
            parent: function(t) { for (var e = [], i = 0; i < this.length; i += 1) null !== this[i].parentNode && (t ? n(this[i].parentNode).is(t) && e.push(this[i].parentNode) : e.push(this[i].parentNode)); return n(s(e)) },
            parents: function(t) {
                for (var e = [], i = 0; i < this.length; i += 1)
                    for (var r = this[i].parentNode; r;) t ? n(r).is(t) && e.push(r) : e.push(r), r = r.parentNode;
                return n(s(e))
            },
            closest: function(t) { var e = this; return void 0 === t ? new i([]) : (e.is(t) || (e = e.parents(t).eq(0)), e) },
            find: function(t) {
                for (var e = [], n = 0; n < this.length; n += 1)
                    for (var s = this[n].querySelectorAll(t), r = 0; r < s.length; r += 1) e.push(s[r]);
                return new i(e)
            },
            children: function(t) {
                for (var e = [], r = 0; r < this.length; r += 1)
                    for (var o = this[r].childNodes, a = 0; a < o.length; a += 1) t ? 1 === o[a].nodeType && n(o[a]).is(t) && e.push(o[a]) : 1 === o[a].nodeType && e.push(o[a]);
                return new i(s(e))
            },
            filter: function(t) { for (var e = [], n = 0; n < this.length; n += 1) t.call(this[n], n, this[n]) && e.push(this[n]); return new i(e) },
            remove: function() { for (var t = 0; t < this.length; t += 1) this[t].parentNode && this[t].parentNode.removeChild(this[t]); return this },
            add: function() { for (var t = [], e = arguments.length; e--;) t[e] = arguments[e]; var i, s; for (i = 0; i < t.length; i += 1) { var r = n(t[i]); for (s = 0; s < r.length; s += 1) this[this.length] = r[s], this.length += 1 } return this },
            styles: function() { return this[0] ? e.getComputedStyle(this[0], null) : {} }
        };
        Object.keys(r).forEach(function(t) { n.fn[t] = n.fn[t] || r[t] });
        var o = {
                deleteProps: function(t) {
                    var e = t;
                    Object.keys(e).forEach(function(t) { try { e[t] = null } catch (t) {} try { delete e[t] } catch (t) {} })
                },
                nextTick: function(t, e) { return void 0 === e && (e = 0), setTimeout(t, e) },
                now: function() { return Date.now() },
                getTranslate: function(t, i) {
                    var n, s, r;
                    void 0 === i && (i = "x");
                    var o = e.getComputedStyle(t, null);
                    return e.WebKitCSSMatrix ? ((s = o.transform || o.webkitTransform).split(",").length > 6 && (s = s.split(", ").map(function(t) { return t.replace(",", ".") }).join(", ")), r = new e.WebKitCSSMatrix("none" === s ? "" : s)) : n = (r = o.MozTransform || o.OTransform || o.MsTransform || o.msTransform || o.transform || o.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), "x" === i && (s = e.WebKitCSSMatrix ? r.m41 : 16 === n.length ? parseFloat(n[12]) : parseFloat(n[4])), "y" === i && (s = e.WebKitCSSMatrix ? r.m42 : 16 === n.length ? parseFloat(n[13]) : parseFloat(n[5])), s || 0
                },
                parseUrlQuery: function(t) {
                    var i, n, s, r, o = {},
                        a = t || e.location.href;
                    if ("string" == typeof a && a.length)
                        for (r = (n = (a = a.indexOf("?") > -1 ? a.replace(/\S*\?/, "") : "").split("&").filter(function(t) { return "" !== t })).length, i = 0; i < r; i += 1) s = n[i].replace(/#\S+/g, "").split("="), o[decodeURIComponent(s[0])] = void 0 === s[1] ? void 0 : decodeURIComponent(s[1]) || "";
                    return o
                },
                isObject: function(t) { return "object" == typeof t && null !== t && t.constructor && t.constructor === Object },
                extend: function() {
                    for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
                    for (var i = Object(t[0]), n = 1; n < t.length; n += 1) {
                        var s = t[n];
                        if (null != s)
                            for (var r = Object.keys(Object(s)), a = 0, l = r.length; a < l; a += 1) {
                                var h = r[a],
                                    d = Object.getOwnPropertyDescriptor(s, h);
                                void 0 !== d && d.enumerable && (o.isObject(i[h]) && o.isObject(s[h]) ? o.extend(i[h], s[h]) : !o.isObject(i[h]) && o.isObject(s[h]) ? (i[h] = {}, o.extend(i[h], s[h])) : i[h] = s[h])
                            }
                    }
                    return i
                }
            },
            a = {
                touch: e.Modernizr && !0 === e.Modernizr.touch || !!(e.navigator.maxTouchPoints > 0 || "ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch),
                pointerEvents: !!e.PointerEvent && "maxTouchPoints" in e.navigator && e.navigator.maxTouchPoints > 0,
                observer: "MutationObserver" in e || "WebkitMutationObserver" in e,
                passiveListener: function() {
                    var t = !1;
                    try {
                        var i = Object.defineProperty({}, "passive", { get: function() { t = !0 } });
                        e.addEventListener("testPassiveListener", null, i)
                    } catch (t) {}
                    return t
                }(),
                gestures: "ongesturestart" in e
            },
            l = function(t) {
                void 0 === t && (t = {});
                var e = this;
                e.params = t, e.eventsListeners = {}, e.params && e.params.on && Object.keys(e.params.on).forEach(function(t) { e.on(t, e.params.on[t]) })
            },
            h = { components: { configurable: !0 } };
        l.prototype.on = function(t, e, i) { var n = this; if ("function" != typeof e) return n; var s = i ? "unshift" : "push"; return t.split(" ").forEach(function(t) { n.eventsListeners[t] || (n.eventsListeners[t] = []), n.eventsListeners[t][s](e) }), n }, l.prototype.once = function(t, e, i) {
            var n = this;
            if ("function" != typeof e) return n;

            function s() {
                for (var i = [], r = arguments.length; r--;) i[r] = arguments[r];
                e.apply(n, i), n.off(t, s), s.f7proxy && delete s.f7proxy
            }
            return s.f7proxy = e, n.on(t, s, i)
        }, l.prototype.off = function(t, e) {
            var i = this;
            return i.eventsListeners ? (t.split(" ").forEach(function(t) {
                void 0 === e ? i.eventsListeners[t] = [] : i.eventsListeners[t] && i.eventsListeners[t].length && i.eventsListeners[t].forEach(function(n, s) {
                    (n === e || n.f7proxy && n.f7proxy === e) && i.eventsListeners[t].splice(s, 1)
                })
            }), i) : i
        }, l.prototype.emit = function() {
            for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
            var i, n, s, r = this;
            return r.eventsListeners ? ("string" == typeof t[0] || Array.isArray(t[0]) ? (i = t[0], n = t.slice(1, t.length), s = r) : (i = t[0].events, n = t[0].data, s = t[0].context || r), (Array.isArray(i) ? i : i.split(" ")).forEach(function(t) {
                if (r.eventsListeners && r.eventsListeners[t]) {
                    var e = [];
                    r.eventsListeners[t].forEach(function(t) { e.push(t) }), e.forEach(function(t) { t.apply(s, n) })
                }
            }), r) : r
        }, l.prototype.useModulesParams = function(t) {
            var e = this;
            e.modules && Object.keys(e.modules).forEach(function(i) {
                var n = e.modules[i];
                n.params && o.extend(t, n.params)
            })
        }, l.prototype.useModules = function(t) {
            void 0 === t && (t = {});
            var e = this;
            e.modules && Object.keys(e.modules).forEach(function(i) {
                var n = e.modules[i],
                    s = t[i] || {};
                n.instance && Object.keys(n.instance).forEach(function(t) {
                    var i = n.instance[t];
                    e[t] = "function" == typeof i ? i.bind(e) : i
                }), n.on && e.on && Object.keys(n.on).forEach(function(t) { e.on(t, n.on[t]) }), n.create && n.create.bind(e)(s)
            })
        }, h.components.set = function(t) { this.use && this.use(t) }, l.installModule = function(t) {
            for (var e = [], i = arguments.length - 1; i-- > 0;) e[i] = arguments[i + 1];
            var n = this;
            n.prototype.modules || (n.prototype.modules = {});
            var s = t.name || Object.keys(n.prototype.modules).length + "_" + o.now();
            return n.prototype.modules[s] = t, t.proto && Object.keys(t.proto).forEach(function(e) { n.prototype[e] = t.proto[e] }), t.static && Object.keys(t.static).forEach(function(e) { n[e] = t.static[e] }), t.install && t.install.apply(n, e), n
        }, l.use = function(t) { for (var e = [], i = arguments.length - 1; i-- > 0;) e[i] = arguments[i + 1]; var n = this; return Array.isArray(t) ? (t.forEach(function(t) { return n.installModule(t) }), n) : n.installModule.apply(n, [t].concat(e)) }, Object.defineProperties(l, h);
        var d, u, c, p, f, m, g, v, y, w, b, T, _, S, x, E = {
                updateSize: function() {
                    var t, e, i = this.$el;
                    t = void 0 !== this.params.width ? this.params.width : i[0].clientWidth, e = void 0 !== this.params.height ? this.params.height : i[0].clientHeight, 0 === t && this.isHorizontal() || 0 === e && this.isVertical() || (t = t - parseInt(i.css("padding-left"), 10) - parseInt(i.css("padding-right"), 10), e = e - parseInt(i.css("padding-top"), 10) - parseInt(i.css("padding-bottom"), 10), o.extend(this, { width: t, height: e, size: this.isHorizontal() ? t : e }))
                },
                updateSlides: function() {
                    var t = this.params,
                        i = this.$wrapperEl,
                        n = this.size,
                        s = this.rtlTranslate,
                        r = this.wrongRTL,
                        a = this.virtual && t.virtual.enabled,
                        l = a ? this.virtual.slides.length : this.slides.length,
                        h = i.children("." + this.params.slideClass),
                        d = a ? this.virtual.slides.length : h.length,
                        u = [],
                        c = [],
                        p = [];

                    function f(e) { return !t.cssMode || e !== h.length - 1 }
                    var m = t.slidesOffsetBefore;
                    "function" == typeof m && (m = t.slidesOffsetBefore.call(this));
                    var g = t.slidesOffsetAfter;
                    "function" == typeof g && (g = t.slidesOffsetAfter.call(this));
                    var v = this.snapGrid.length,
                        y = this.snapGrid.length,
                        w = t.spaceBetween,
                        b = -m,
                        T = 0,
                        _ = 0;
                    if (void 0 !== n) {
                        var S, x;
                        "string" == typeof w && w.indexOf("%") >= 0 && (w = parseFloat(w.replace("%", "")) / 100 * n), this.virtualSize = -w, s ? h.css({ marginLeft: "", marginTop: "" }) : h.css({ marginRight: "", marginBottom: "" }), t.slidesPerColumn > 1 && (S = Math.floor(d / t.slidesPerColumn) === d / this.params.slidesPerColumn ? d : Math.ceil(d / t.slidesPerColumn) * t.slidesPerColumn, "auto" !== t.slidesPerView && "row" === t.slidesPerColumnFill && (S = Math.max(S, t.slidesPerView * t.slidesPerColumn)));
                        for (var E, C = t.slidesPerColumn, k = S / C, I = Math.floor(d / t.slidesPerColumn), A = 0; A < d; A += 1) {
                            x = 0;
                            var M = h.eq(A);
                            if (t.slidesPerColumn > 1) {
                                var O = void 0,
                                    P = void 0,
                                    z = void 0;
                                if ("row" === t.slidesPerColumnFill && t.slidesPerGroup > 1) {
                                    var D = Math.floor(A / (t.slidesPerGroup * t.slidesPerColumn)),
                                        L = A - t.slidesPerColumn * t.slidesPerGroup * D,
                                        $ = 0 === D ? t.slidesPerGroup : Math.min(Math.ceil((d - D * C * t.slidesPerGroup) / C), t.slidesPerGroup);
                                    O = (P = L - (z = Math.floor(L / $)) * $ + D * t.slidesPerGroup) + z * S / C, M.css({ "-webkit-box-ordinal-group": O, "-moz-box-ordinal-group": O, "-ms-flex-order": O, "-webkit-order": O, order: O })
                                } else "column" === t.slidesPerColumnFill ? (z = A - (P = Math.floor(A / C)) * C, (P > I || P === I && z === C - 1) && (z += 1) >= C && (z = 0, P += 1)) : P = A - (z = Math.floor(A / k)) * k;
                                M.css("margin-" + (this.isHorizontal() ? "top" : "left"), 0 !== z && t.spaceBetween && t.spaceBetween + "px")
                            }
                            if ("none" !== M.css("display")) {
                                if ("auto" === t.slidesPerView) {
                                    var N = e.getComputedStyle(M[0], null),
                                        R = M[0].style.transform,
                                        H = M[0].style.webkitTransform;
                                    if (R && (M[0].style.transform = "none"), H && (M[0].style.webkitTransform = "none"), t.roundLengths) x = this.isHorizontal() ? M.outerWidth(!0) : M.outerHeight(!0);
                                    else if (this.isHorizontal()) {
                                        var j = parseFloat(N.getPropertyValue("width")),
                                            F = parseFloat(N.getPropertyValue("padding-left")),
                                            W = parseFloat(N.getPropertyValue("padding-right")),
                                            B = parseFloat(N.getPropertyValue("margin-left")),
                                            q = parseFloat(N.getPropertyValue("margin-right")),
                                            V = N.getPropertyValue("box-sizing");
                                        x = V && "border-box" === V ? j + B + q : j + F + W + B + q
                                    } else {
                                        var Y = parseFloat(N.getPropertyValue("height")),
                                            G = parseFloat(N.getPropertyValue("padding-top")),
                                            U = parseFloat(N.getPropertyValue("padding-bottom")),
                                            X = parseFloat(N.getPropertyValue("margin-top")),
                                            Q = parseFloat(N.getPropertyValue("margin-bottom")),
                                            K = N.getPropertyValue("box-sizing");
                                        x = K && "border-box" === K ? Y + X + Q : Y + G + U + X + Q
                                    }
                                    R && (M[0].style.transform = R), H && (M[0].style.webkitTransform = H), t.roundLengths && (x = Math.floor(x))
                                } else x = (n - (t.slidesPerView - 1) * w) / t.slidesPerView, t.roundLengths && (x = Math.floor(x)), h[A] && (this.isHorizontal() ? h[A].style.width = x + "px" : h[A].style.height = x + "px");
                                h[A] && (h[A].swiperSlideSize = x), p.push(x), t.centeredSlides ? (b = b + x / 2 + T / 2 + w, 0 === T && 0 !== A && (b = b - n / 2 - w), 0 === A && (b = b - n / 2 - w), Math.abs(b) < .001 && (b = 0), t.roundLengths && (b = Math.floor(b)), _ % t.slidesPerGroup == 0 && u.push(b), c.push(b)) : (t.roundLengths && (b = Math.floor(b)), _ % t.slidesPerGroup == 0 && u.push(b), c.push(b), b = b + x + w), this.virtualSize += x + w, T = x, _ += 1
                            }
                        }
                        if (this.virtualSize = Math.max(this.virtualSize, n) + g, s && r && ("slide" === t.effect || "coverflow" === t.effect) && i.css({ width: this.virtualSize + t.spaceBetween + "px" }), t.setWrapperSize && (this.isHorizontal() ? i.css({ width: this.virtualSize + t.spaceBetween + "px" }) : i.css({ height: this.virtualSize + t.spaceBetween + "px" })), t.slidesPerColumn > 1 && (this.virtualSize = (x + t.spaceBetween) * S, this.virtualSize = Math.ceil(this.virtualSize / t.slidesPerColumn) - t.spaceBetween, this.isHorizontal() ? i.css({ width: this.virtualSize + t.spaceBetween + "px" }) : i.css({ height: this.virtualSize + t.spaceBetween + "px" }), t.centeredSlides)) {
                            E = [];
                            for (var Z = 0; Z < u.length; Z += 1) {
                                var J = u[Z];
                                t.roundLengths && (J = Math.floor(J)), u[Z] < this.virtualSize + u[0] && E.push(J)
                            }
                            u = E
                        }
                        if (!t.centeredSlides) {
                            E = [];
                            for (var tt = 0; tt < u.length; tt += 1) {
                                var et = u[tt];
                                t.roundLengths && (et = Math.floor(et)), u[tt] <= this.virtualSize - n && E.push(et)
                            }
                            u = E, Math.floor(this.virtualSize - n) - Math.floor(u[u.length - 1]) > 1 && u.push(this.virtualSize - n)
                        }
                        if (0 === u.length && (u = [0]), 0 !== t.spaceBetween && (this.isHorizontal() ? s ? h.filter(f).css({ marginLeft: w + "px" }) : h.filter(f).css({ marginRight: w + "px" }) : h.filter(f).css({ marginBottom: w + "px" })), t.centeredSlides && t.centeredSlidesBounds) {
                            var it = 0;
                            p.forEach(function(e) { it += e + (t.spaceBetween ? t.spaceBetween : 0) });
                            var nt = (it -= t.spaceBetween) - n;
                            u = u.map(function(t) { return t < 0 ? -m : t > nt ? nt + g : t })
                        }
                        if (t.centerInsufficientSlides) {
                            var st = 0;
                            if (p.forEach(function(e) { st += e + (t.spaceBetween ? t.spaceBetween : 0) }), (st -= t.spaceBetween) < n) {
                                var rt = (n - st) / 2;
                                u.forEach(function(t, e) { u[e] = t - rt }), c.forEach(function(t, e) { c[e] = t + rt })
                            }
                        }
                        o.extend(this, { slides: h, snapGrid: u, slidesGrid: c, slidesSizesGrid: p }), d !== l && this.emit("slidesLengthChange"), u.length !== v && (this.params.watchOverflow && this.checkOverflow(), this.emit("snapGridLengthChange")), c.length !== y && this.emit("slidesGridLengthChange"), (t.watchSlidesProgress || t.watchSlidesVisibility) && this.updateSlidesOffset()
                    }
                },
                updateAutoHeight: function(t) {
                    var e, i = [],
                        n = 0;
                    if ("number" == typeof t ? this.setTransition(t) : !0 === t && this.setTransition(this.params.speed), "auto" !== this.params.slidesPerView && this.params.slidesPerView > 1)
                        for (e = 0; e < Math.ceil(this.params.slidesPerView); e += 1) {
                            var s = this.activeIndex + e;
                            if (s > this.slides.length) break;
                            i.push(this.slides.eq(s)[0])
                        } else i.push(this.slides.eq(this.activeIndex)[0]);
                    for (e = 0; e < i.length; e += 1)
                        if (void 0 !== i[e]) {
                            var r = i[e].offsetHeight;
                            n = r > n ? r : n
                        }
                    n && this.$wrapperEl.css("height", n + "px")
                },
                updateSlidesOffset: function() { for (var t = this.slides, e = 0; e < t.length; e += 1) t[e].swiperSlideOffset = this.isHorizontal() ? t[e].offsetLeft : t[e].offsetTop },
                updateSlidesProgress: function(t) {
                    void 0 === t && (t = this && this.translate || 0);
                    var e = this.params,
                        i = this.slides,
                        s = this.rtlTranslate;
                    if (0 !== i.length) {
                        void 0 === i[0].swiperSlideOffset && this.updateSlidesOffset();
                        var r = -t;
                        s && (r = t), i.removeClass(e.slideVisibleClass), this.visibleSlidesIndexes = [], this.visibleSlides = [];
                        for (var o = 0; o < i.length; o += 1) {
                            var a = i[o],
                                l = (r + (e.centeredSlides ? this.minTranslate() : 0) - a.swiperSlideOffset) / (a.swiperSlideSize + e.spaceBetween);
                            if (e.watchSlidesVisibility) {
                                var h = -(r - a.swiperSlideOffset),
                                    d = h + this.slidesSizesGrid[o];
                                (h >= 0 && h < this.size - 1 || d > 1 && d <= this.size || h <= 0 && d >= this.size) && (this.visibleSlides.push(a), this.visibleSlidesIndexes.push(o), i.eq(o).addClass(e.slideVisibleClass))
                            }
                            a.progress = s ? -l : l
                        }
                        this.visibleSlides = n(this.visibleSlides)
                    }
                },
                updateProgress: function(t) {
                    if (void 0 === t) {
                        var e = this.rtlTranslate ? -1 : 1;
                        t = this && this.translate && this.translate * e || 0
                    }
                    var i = this.params,
                        n = this.maxTranslate() - this.minTranslate(),
                        s = this.progress,
                        r = this.isBeginning,
                        a = this.isEnd,
                        l = r,
                        h = a;
                    0 === n ? (s = 0, r = !0, a = !0) : (r = (s = (t - this.minTranslate()) / n) <= 0, a = s >= 1), o.extend(this, { progress: s, isBeginning: r, isEnd: a }), (i.watchSlidesProgress || i.watchSlidesVisibility) && this.updateSlidesProgress(t), r && !l && this.emit("reachBeginning toEdge"), a && !h && this.emit("reachEnd toEdge"), (l && !r || h && !a) && this.emit("fromEdge"), this.emit("progress", s)
                },
                updateSlidesClasses: function() {
                    var t, e = this.slides,
                        i = this.params,
                        n = this.$wrapperEl,
                        s = this.activeIndex,
                        r = this.realIndex,
                        o = this.virtual && i.virtual.enabled;
                    e.removeClass(i.slideActiveClass + " " + i.slideNextClass + " " + i.slidePrevClass + " " + i.slideDuplicateActiveClass + " " + i.slideDuplicateNextClass + " " + i.slideDuplicatePrevClass), (t = o ? this.$wrapperEl.find("." + i.slideClass + '[data-swiper-slide-index="' + s + '"]') : e.eq(s)).addClass(i.slideActiveClass), i.loop && (t.hasClass(i.slideDuplicateClass) ? n.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + r + '"]').addClass(i.slideDuplicateActiveClass) : n.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + r + '"]').addClass(i.slideDuplicateActiveClass));
                    var a = t.nextAll("." + i.slideClass).eq(0).addClass(i.slideNextClass);
                    i.loop && 0 === a.length && (a = e.eq(0)).addClass(i.slideNextClass);
                    var l = t.prevAll("." + i.slideClass).eq(0).addClass(i.slidePrevClass);
                    i.loop && 0 === l.length && (l = e.eq(-1)).addClass(i.slidePrevClass), i.loop && (a.hasClass(i.slideDuplicateClass) ? n.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + a.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass) : n.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + a.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass), l.hasClass(i.slideDuplicateClass) ? n.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass) : n.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass))
                },
                updateActiveIndex: function(t) {
                    var e, i = this.rtlTranslate ? this.translate : -this.translate,
                        n = this.slidesGrid,
                        s = this.snapGrid,
                        r = this.params,
                        a = this.activeIndex,
                        l = this.realIndex,
                        h = this.snapIndex,
                        d = t;
                    if (void 0 === d) {
                        for (var u = 0; u < n.length; u += 1) void 0 !== n[u + 1] ? i >= n[u] && i < n[u + 1] - (n[u + 1] - n[u]) / 2 ? d = u : i >= n[u] && i < n[u + 1] && (d = u + 1) : i >= n[u] && (d = u);
                        r.normalizeSlideIndex && (d < 0 || void 0 === d) && (d = 0)
                    }
                    if ((e = s.indexOf(i) >= 0 ? s.indexOf(i) : Math.floor(d / r.slidesPerGroup)) >= s.length && (e = s.length - 1), d !== a) {
                        var c = parseInt(this.slides.eq(d).attr("data-swiper-slide-index") || d, 10);
                        o.extend(this, { snapIndex: e, realIndex: c, previousIndex: a, activeIndex: d }), this.emit("activeIndexChange"), this.emit("snapIndexChange"), l !== c && this.emit("realIndexChange"), (this.initialized || this.runCallbacksOnInit) && this.emit("slideChange")
                    } else e !== h && (this.snapIndex = e, this.emit("snapIndexChange"))
                },
                updateClickedSlide: function(t) {
                    var e = this.params,
                        i = n(t.target).closest("." + e.slideClass)[0],
                        s = !1;
                    if (i)
                        for (var r = 0; r < this.slides.length; r += 1) this.slides[r] === i && (s = !0);
                    if (!i || !s) return this.clickedSlide = void 0, void(this.clickedIndex = void 0);
                    this.clickedSlide = i, this.virtual && this.params.virtual.enabled ? this.clickedIndex = parseInt(n(i).attr("data-swiper-slide-index"), 10) : this.clickedIndex = n(i).index(), e.slideToClickedSlide && void 0 !== this.clickedIndex && this.clickedIndex !== this.activeIndex && this.slideToClickedSlide()
                }
            },
            C = {
                getTranslate: function(t) {
                    void 0 === t && (t = this.isHorizontal() ? "x" : "y");
                    var e = this.params,
                        i = this.rtlTranslate,
                        n = this.translate,
                        s = this.$wrapperEl;
                    if (e.virtualTranslate) return i ? -n : n;
                    if (e.cssMode) return n;
                    var r = o.getTranslate(s[0], t);
                    return i && (r = -r), r || 0
                },
                setTranslate: function(t, e) {
                    var i = this.rtlTranslate,
                        n = this.params,
                        s = this.$wrapperEl,
                        r = this.wrapperEl,
                        o = this.progress,
                        a = 0,
                        l = 0;
                    this.isHorizontal() ? a = i ? -t : t : l = t, n.roundLengths && (a = Math.floor(a), l = Math.floor(l)), n.cssMode ? r[this.isHorizontal() ? "scrollLeft" : "scrollTop"] = this.isHorizontal() ? -a : -l : n.virtualTranslate || s.transform("translate3d(" + a + "px, " + l + "px, 0px)"), this.previousTranslate = this.translate, this.translate = this.isHorizontal() ? a : l;
                    var h = this.maxTranslate() - this.minTranslate();
                    (0 === h ? 0 : (t - this.minTranslate()) / h) !== o && this.updateProgress(t), this.emit("setTranslate", this.translate, e)
                },
                minTranslate: function() { return -this.snapGrid[0] },
                maxTranslate: function() { return -this.snapGrid[this.snapGrid.length - 1] },
                translateTo: function(t, e, i, n, s) {
                    var r;
                    void 0 === t && (t = 0), void 0 === e && (e = this.params.speed), void 0 === i && (i = !0), void 0 === n && (n = !0);
                    var o = this,
                        a = o.params,
                        l = o.wrapperEl;
                    if (o.animating && a.preventInteractionOnTransition) return !1;
                    var h, d = o.minTranslate(),
                        u = o.maxTranslate();
                    if (h = n && t > d ? d : n && t < u ? u : t, o.updateProgress(h), a.cssMode) { var c = o.isHorizontal(); return 0 === e ? l[c ? "scrollLeft" : "scrollTop"] = -h : l.scrollTo ? l.scrollTo(((r = {})[c ? "left" : "top"] = -h, r.behavior = "smooth", r)) : l[c ? "scrollLeft" : "scrollTop"] = -h, !0 }
                    return 0 === e ? (o.setTransition(0), o.setTranslate(h), i && (o.emit("beforeTransitionStart", e, s), o.emit("transitionEnd"))) : (o.setTransition(e), o.setTranslate(h), i && (o.emit("beforeTransitionStart", e, s), o.emit("transitionStart")), o.animating || (o.animating = !0, o.onTranslateToWrapperTransitionEnd || (o.onTranslateToWrapperTransitionEnd = function(t) { o && !o.destroyed && t.target === this && (o.$wrapperEl[0].removeEventListener("transitionend", o.onTranslateToWrapperTransitionEnd), o.$wrapperEl[0].removeEventListener("webkitTransitionEnd", o.onTranslateToWrapperTransitionEnd), o.onTranslateToWrapperTransitionEnd = null, delete o.onTranslateToWrapperTransitionEnd, i && o.emit("transitionEnd")) }), o.$wrapperEl[0].addEventListener("transitionend", o.onTranslateToWrapperTransitionEnd), o.$wrapperEl[0].addEventListener("webkitTransitionEnd", o.onTranslateToWrapperTransitionEnd))), !0
                }
            },
            k = {
                slideTo: function(t, e, i, n) {
                    var s;
                    void 0 === t && (t = 0), void 0 === e && (e = this.params.speed), void 0 === i && (i = !0);
                    var r = this,
                        o = t;
                    o < 0 && (o = 0);
                    var a = r.params,
                        l = r.snapGrid,
                        h = r.slidesGrid,
                        d = r.previousIndex,
                        u = r.activeIndex,
                        c = r.rtlTranslate,
                        p = r.wrapperEl;
                    if (r.animating && a.preventInteractionOnTransition) return !1;
                    var f = Math.floor(o / a.slidesPerGroup);
                    f >= l.length && (f = l.length - 1), (u || a.initialSlide || 0) === (d || 0) && i && r.emit("beforeSlideChangeStart");
                    var m, g = -l[f];
                    if (r.updateProgress(g), a.normalizeSlideIndex)
                        for (var v = 0; v < h.length; v += 1) - Math.floor(100 * g) >= Math.floor(100 * h[v]) && (o = v);
                    if (r.initialized && o !== u) { if (!r.allowSlideNext && g < r.translate && g < r.minTranslate()) return !1; if (!r.allowSlidePrev && g > r.translate && g > r.maxTranslate() && (u || 0) !== o) return !1 }
                    if (m = o > u ? "next" : o < u ? "prev" : "reset", c && -g === r.translate || !c && g === r.translate) return r.updateActiveIndex(o), a.autoHeight && r.updateAutoHeight(), r.updateSlidesClasses(), "slide" !== a.effect && r.setTranslate(g), "reset" !== m && (r.transitionStart(i, m), r.transitionEnd(i, m)), !1;
                    if (a.cssMode) { var y = r.isHorizontal(); return 0 === e ? p[y ? "scrollLeft" : "scrollTop"] = -g : p.scrollTo ? p.scrollTo(((s = {})[y ? "left" : "top"] = -g, s.behavior = "smooth", s)) : p[y ? "scrollLeft" : "scrollTop"] = -g, !0 }
                    return 0 === e ? (r.setTransition(0), r.setTranslate(g), r.updateActiveIndex(o), r.updateSlidesClasses(), r.emit("beforeTransitionStart", e, n), r.transitionStart(i, m), r.transitionEnd(i, m)) : (r.setTransition(e), r.setTranslate(g), r.updateActiveIndex(o), r.updateSlidesClasses(), r.emit("beforeTransitionStart", e, n), r.transitionStart(i, m), r.animating || (r.animating = !0, r.onSlideToWrapperTransitionEnd || (r.onSlideToWrapperTransitionEnd = function(t) { r && !r.destroyed && t.target === this && (r.$wrapperEl[0].removeEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd), r.onSlideToWrapperTransitionEnd = null, delete r.onSlideToWrapperTransitionEnd, r.transitionEnd(i, m)) }), r.$wrapperEl[0].addEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r.$wrapperEl[0].addEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd))), !0
                },
                slideToLoop: function(t, e, i, n) { void 0 === t && (t = 0), void 0 === e && (e = this.params.speed), void 0 === i && (i = !0); var s = t; return this.params.loop && (s += this.loopedSlides), this.slideTo(s, e, i, n) },
                slideNext: function(t, e, i) {
                    void 0 === t && (t = this.params.speed), void 0 === e && (e = !0);
                    var n = this.params,
                        s = this.animating;
                    return n.loop ? !s && (this.loopFix(), this._clientLeft = this.$wrapperEl[0].clientLeft, this.slideTo(this.activeIndex + n.slidesPerGroup, t, e, i)) : this.slideTo(this.activeIndex + n.slidesPerGroup, t, e, i)
                },
                slidePrev: function(t, e, i) {
                    void 0 === t && (t = this.params.speed), void 0 === e && (e = !0);
                    var n = this.params,
                        s = this.animating,
                        r = this.snapGrid,
                        o = this.slidesGrid,
                        a = this.rtlTranslate;
                    if (n.loop) {
                        if (s) return !1;
                        this.loopFix(), this._clientLeft = this.$wrapperEl[0].clientLeft
                    }

                    function l(t) { return t < 0 ? -Math.floor(Math.abs(t)) : Math.floor(t) }
                    var h, d = l(a ? this.translate : -this.translate),
                        u = r.map(function(t) { return l(t) }),
                        c = (o.map(function(t) { return l(t) }), r[u.indexOf(d)], r[u.indexOf(d) - 1]);
                    return void 0 === c && n.cssMode && r.forEach(function(t) {!c && d >= t && (c = t) }), void 0 !== c && (h = o.indexOf(c)) < 0 && (h = this.activeIndex - 1), this.slideTo(h, t, e, i)
                },
                slideReset: function(t, e, i) { return void 0 === t && (t = this.params.speed), void 0 === e && (e = !0), this.slideTo(this.activeIndex, t, e, i) },
                slideToClosest: function(t, e, i, n) {
                    void 0 === t && (t = this.params.speed), void 0 === e && (e = !0), void 0 === n && (n = .5);
                    var s = this.activeIndex,
                        r = Math.floor(s / this.params.slidesPerGroup),
                        o = this.rtlTranslate ? this.translate : -this.translate;
                    if (o >= this.snapGrid[r]) {
                        var a = this.snapGrid[r];
                        o - a > (this.snapGrid[r + 1] - a) * n && (s += this.params.slidesPerGroup)
                    } else {
                        var l = this.snapGrid[r - 1];
                        o - l <= (this.snapGrid[r] - l) * n && (s -= this.params.slidesPerGroup)
                    }
                    return s = Math.max(s, 0), s = Math.min(s, this.snapGrid.length - 1), this.slideTo(s, t, e, i)
                },
                slideToClickedSlide: function() {
                    var t, e = this,
                        i = e.params,
                        s = e.$wrapperEl,
                        r = "auto" === i.slidesPerView ? e.slidesPerViewDynamic() : i.slidesPerView,
                        a = e.clickedIndex;
                    if (i.loop) {
                        if (e.animating) return;
                        t = parseInt(n(e.clickedSlide).attr("data-swiper-slide-index"), 10), i.centeredSlides ? a < e.loopedSlides - r / 2 || a > e.slides.length - e.loopedSlides + r / 2 ? (e.loopFix(), a = s.children("." + i.slideClass + '[data-swiper-slide-index="' + t + '"]:not(.' + i.slideDuplicateClass + ")").eq(0).index(), o.nextTick(function() { e.slideTo(a) })) : e.slideTo(a) : a > e.slides.length - r ? (e.loopFix(), a = s.children("." + i.slideClass + '[data-swiper-slide-index="' + t + '"]:not(.' + i.slideDuplicateClass + ")").eq(0).index(), o.nextTick(function() { e.slideTo(a) })) : e.slideTo(a)
                    } else e.slideTo(a)
                }
            },
            I = {
                loopCreate: function() {
                    var e = this,
                        i = e.params,
                        s = e.$wrapperEl;
                    s.children("." + i.slideClass + "." + i.slideDuplicateClass).remove();
                    var r = s.children("." + i.slideClass);
                    if (i.loopFillGroupWithBlank) {
                        var o = i.slidesPerGroup - r.length % i.slidesPerGroup;
                        if (o !== i.slidesPerGroup) {
                            for (var a = 0; a < o; a += 1) {
                                var l = n(t.createElement("div")).addClass(i.slideClass + " " + i.slideBlankClass);
                                s.append(l)
                            }
                            r = s.children("." + i.slideClass)
                        }
                    }
                    "auto" !== i.slidesPerView || i.loopedSlides || (i.loopedSlides = r.length), e.loopedSlides = Math.ceil(parseFloat(i.loopedSlides || i.slidesPerView, 10)), e.loopedSlides += i.loopAdditionalSlides, e.loopedSlides > r.length && (e.loopedSlides = r.length);
                    var h = [],
                        d = [];
                    r.each(function(t, i) {
                        var s = n(i);
                        t < e.loopedSlides && d.push(i), t < r.length && t >= r.length - e.loopedSlides && h.push(i), s.attr("data-swiper-slide-index", t)
                    });
                    for (var u = 0; u < d.length; u += 1) s.append(n(d[u].cloneNode(!0)).addClass(i.slideDuplicateClass));
                    for (var c = h.length - 1; c >= 0; c -= 1) s.prepend(n(h[c].cloneNode(!0)).addClass(i.slideDuplicateClass))
                },
                loopFix: function() {
                    var t, e = this.activeIndex,
                        i = this.slides,
                        n = this.loopedSlides,
                        s = this.allowSlidePrev,
                        r = this.allowSlideNext,
                        o = this.snapGrid,
                        a = this.rtlTranslate;
                    this.allowSlidePrev = !0, this.allowSlideNext = !0;
                    var l = -o[e] - this.getTranslate();
                    e < n ? (t = i.length - 3 * n + e, t += n, this.slideTo(t, 0, !1, !0) && 0 !== l && this.setTranslate((a ? -this.translate : this.translate) - l)) : e >= i.length - n && (t = -i.length + e + n, t += n, this.slideTo(t, 0, !1, !0) && 0 !== l && this.setTranslate((a ? -this.translate : this.translate) - l)), this.allowSlidePrev = s, this.allowSlideNext = r
                },
                loopDestroy: function() {
                    var t = this.$wrapperEl,
                        e = this.params,
                        i = this.slides;
                    t.children("." + e.slideClass + "." + e.slideDuplicateClass + ",." + e.slideClass + "." + e.slideBlankClass).remove(), i.removeAttr("data-swiper-slide-index")
                }
            },
            A = {
                setGrabCursor: function(t) {
                    if (!(a.touch || !this.params.simulateTouch || this.params.watchOverflow && this.isLocked || this.params.cssMode)) {
                        var e = this.el;
                        e.style.cursor = "move", e.style.cursor = t ? "-webkit-grabbing" : "-webkit-grab", e.style.cursor = t ? "-moz-grabbin" : "-moz-grab", e.style.cursor = t ? "grabbing" : "grab"
                    }
                },
                unsetGrabCursor: function() { a.touch || this.params.watchOverflow && this.isLocked || this.params.cssMode || (this.el.style.cursor = "") }
            },
            M = {
                appendSlide: function(t) {
                    var e = this.$wrapperEl,
                        i = this.params;
                    if (i.loop && this.loopDestroy(), "object" == typeof t && "length" in t)
                        for (var n = 0; n < t.length; n += 1) t[n] && e.append(t[n]);
                    else e.append(t);
                    i.loop && this.loopCreate(), i.observer && a.observer || this.update()
                },
                prependSlide: function(t) {
                    var e = this.params,
                        i = this.$wrapperEl,
                        n = this.activeIndex;
                    e.loop && this.loopDestroy();
                    var s = n + 1;
                    if ("object" == typeof t && "length" in t) {
                        for (var r = 0; r < t.length; r += 1) t[r] && i.prepend(t[r]);
                        s = n + t.length
                    } else i.prepend(t);
                    e.loop && this.loopCreate(), e.observer && a.observer || this.update(), this.slideTo(s, 0, !1)
                },
                addSlide: function(t, e) {
                    var i = this.$wrapperEl,
                        n = this.params,
                        s = this.activeIndex;
                    n.loop && (s -= this.loopedSlides, this.loopDestroy(), this.slides = i.children("." + n.slideClass));
                    var r = this.slides.length;
                    if (t <= 0) this.prependSlide(e);
                    else if (t >= r) this.appendSlide(e);
                    else {
                        for (var o = s > t ? s + 1 : s, l = [], h = r - 1; h >= t; h -= 1) {
                            var d = this.slides.eq(h);
                            d.remove(), l.unshift(d)
                        }
                        if ("object" == typeof e && "length" in e) {
                            for (var u = 0; u < e.length; u += 1) e[u] && i.append(e[u]);
                            o = s > t ? s + e.length : s
                        } else i.append(e);
                        for (var c = 0; c < l.length; c += 1) i.append(l[c]);
                        n.loop && this.loopCreate(), n.observer && a.observer || this.update(), n.loop ? this.slideTo(o + this.loopedSlides, 0, !1) : this.slideTo(o, 0, !1)
                    }
                },
                removeSlide: function(t) {
                    var e = this.params,
                        i = this.$wrapperEl,
                        n = this.activeIndex;
                    e.loop && (n -= this.loopedSlides, this.loopDestroy(), this.slides = i.children("." + e.slideClass));
                    var s, r = n;
                    if ("object" == typeof t && "length" in t) {
                        for (var o = 0; o < t.length; o += 1) s = t[o], this.slides[s] && this.slides.eq(s).remove(), s < r && (r -= 1);
                        r = Math.max(r, 0)
                    } else s = t, this.slides[s] && this.slides.eq(s).remove(), s < r && (r -= 1), r = Math.max(r, 0);
                    e.loop && this.loopCreate(), e.observer && a.observer || this.update(), e.loop ? this.slideTo(r + this.loopedSlides, 0, !1) : this.slideTo(r, 0, !1)
                },
                removeAllSlides: function() {
                    for (var t = [], e = 0; e < this.slides.length; e += 1) t.push(e);
                    this.removeSlide(t)
                }
            },
            O = (d = e.navigator.platform, u = e.navigator.userAgent, c = { ios: !1, android: !1, androidChrome: !1, desktop: !1, iphone: !1, ipod: !1, ipad: !1, edge: !1, ie: !1, firefox: !1, macos: !1, windows: !1, cordova: !(!e.cordova && !e.phonegap), phonegap: !(!e.cordova && !e.phonegap), electron: !1 }, p = e.screen.width, f = e.screen.height, m = u.match(/(Android);?[\s\/]+([\d.]+)?/), g = u.match(/(iPad).*OS\s([\d_]+)/), v = u.match(/(iPod)(.*OS\s([\d_]+))?/), y = !g && u.match(/(iPhone\sOS|iOS)\s([\d_]+)/), w = u.indexOf("MSIE ") >= 0 || u.indexOf("Trident/index.html") >= 0, b = u.indexOf("Edge/index.html") >= 0, T = u.indexOf("Gecko/index.html") >= 0 && u.indexOf("Firefox/index.html") >= 0, _ = "Win32" === d, S = u.toLowerCase().indexOf("electron") >= 0, x = "MacIntel" === d, !g && x && a.touch && (1024 === p && 1366 === f || 834 === p && 1194 === f || 834 === p && 1112 === f || 768 === p && 1024 === f) && (g = u.match(/(Version)\/([\d.]+)/), x = !1), c.ie = w, c.edge = b, c.firefox = T, m && !_ && (c.os = "android", c.osVersion = m[2], c.android = !0, c.androidChrome = u.toLowerCase().indexOf("chrome") >= 0), (g || y || v) && (c.os = "ios", c.ios = !0), y && !v && (c.osVersion = y[2].replace(/_/g, "."), c.iphone = !0), g && (c.osVersion = g[2].replace(/_/g, "."), c.ipad = !0), v && (c.osVersion = v[3] ? v[3].replace(/_/g, ".") : null, c.ipod = !0), c.ios && c.osVersion && u.indexOf("Version/index.html") >= 0 && "10" === c.osVersion.split(".")[0] && (c.osVersion = u.toLowerCase().split("version/index-2.html")[1].split(" ")[0]), c.webView = !(!(y || g || v) || !u.match(/.*AppleWebKit(?!.*Safari)/i) && !e.navigator.standalone) || e.matchMedia && e.matchMedia("(display-mode: standalone)").matches, c.webview = c.webView, c.standalone = c.webView, c.desktop = !(c.ios || c.android) || S, c.desktop && (c.electron = S, c.macos = x, c.windows = _, c.macos && (c.os = "macos"), c.windows && (c.os = "windows")), c.pixelRatio = e.devicePixelRatio || 1, c);

        function P(i) {
            var s = this.touchEventsData,
                r = this.params,
                a = this.touches;
            if (!this.animating || !r.preventInteractionOnTransition) {
                var l = i;
                l.originalEvent && (l = l.originalEvent);
                var h = n(l.target);
                if (("wrapper" !== r.touchEventsTarget || h.closest(this.wrapperEl).length) && (s.isTouchEvent = "touchstart" === l.type, (s.isTouchEvent || !("which" in l) || 3 !== l.which) && !(!s.isTouchEvent && "button" in l && l.button > 0 || s.isTouched && s.isMoved)))
                    if (r.noSwiping && h.closest(r.noSwipingSelector ? r.noSwipingSelector : "." + r.noSwipingClass)[0]) this.allowClick = !0;
                    else if (!r.swipeHandler || h.closest(r.swipeHandler)[0]) {
                    a.currentX = "touchstart" === l.type ? l.targetTouches[0].pageX : l.pageX, a.currentY = "touchstart" === l.type ? l.targetTouches[0].pageY : l.pageY;
                    var d = a.currentX,
                        u = a.currentY,
                        c = r.edgeSwipeDetection || r.iOSEdgeSwipeDetection,
                        p = r.edgeSwipeThreshold || r.iOSEdgeSwipeThreshold;
                    if (!c || !(d <= p || d >= e.screen.width - p)) {
                        if (o.extend(s, { isTouched: !0, isMoved: !1, allowTouchCallbacks: !0, isScrolling: void 0, startMoving: void 0 }), a.startX = d, a.startY = u, s.touchStartTime = o.now(), this.allowClick = !0, this.updateSize(), this.swipeDirection = void 0, r.threshold > 0 && (s.allowThresholdMove = !1), "touchstart" !== l.type) {
                            var f = !0;
                            h.is(s.formElements) && (f = !1), t.activeElement && n(t.activeElement).is(s.formElements) && t.activeElement !== h[0] && t.activeElement.blur();
                            var m = f && this.allowTouchMove && r.touchStartPreventDefault;
                            (r.touchStartForcePreventDefault || m) && l.preventDefault()
                        }
                        this.emit("touchStart", l)
                    }
                }
            }
        }

        function z(e) {
            var i = this.touchEventsData,
                s = this.params,
                r = this.touches,
                a = this.rtlTranslate,
                l = e;
            if (l.originalEvent && (l = l.originalEvent), i.isTouched) {
                if (!i.isTouchEvent || "mousemove" !== l.type) {
                    var h = "touchmove" === l.type && l.targetTouches && (l.targetTouches[0] || l.changedTouches[0]),
                        d = "touchmove" === l.type ? h.pageX : l.pageX,
                        u = "touchmove" === l.type ? h.pageY : l.pageY;
                    if (l.preventedByNestedSwiper) return r.startX = d, void(r.startY = u);
                    if (!this.allowTouchMove) return this.allowClick = !1, void(i.isTouched && (o.extend(r, { startX: d, startY: u, currentX: d, currentY: u }), i.touchStartTime = o.now()));
                    if (i.isTouchEvent && s.touchReleaseOnEdges && !s.loop)
                        if (this.isVertical()) { if (u < r.startY && this.translate <= this.maxTranslate() || u > r.startY && this.translate >= this.minTranslate()) return i.isTouched = !1, void(i.isMoved = !1) } else if (d < r.startX && this.translate <= this.maxTranslate() || d > r.startX && this.translate >= this.minTranslate()) return;
                    if (i.isTouchEvent && t.activeElement && l.target === t.activeElement && n(l.target).is(i.formElements)) return i.isMoved = !0, void(this.allowClick = !1);
                    if (i.allowTouchCallbacks && this.emit("touchMove", l), !(l.targetTouches && l.targetTouches.length > 1)) {
                        r.currentX = d, r.currentY = u;
                        var c, p = r.currentX - r.startX,
                            f = r.currentY - r.startY;
                        if (!(this.params.threshold && Math.sqrt(Math.pow(p, 2) + Math.pow(f, 2)) < this.params.threshold))
                            if (void 0 === i.isScrolling && (this.isHorizontal() && r.currentY === r.startY || this.isVertical() && r.currentX === r.startX ? i.isScrolling = !1 : p * p + f * f >= 25 && (c = 180 * Math.atan2(Math.abs(f), Math.abs(p)) / Math.PI, i.isScrolling = this.isHorizontal() ? c > s.touchAngle : 90 - c > s.touchAngle)), i.isScrolling && this.emit("touchMoveOpposite", l), void 0 === i.startMoving && (r.currentX === r.startX && r.currentY === r.startY || (i.startMoving = !0)), i.isScrolling) i.isTouched = !1;
                            else if (i.startMoving) {
                            this.allowClick = !1, s.cssMode || l.preventDefault(), s.touchMoveStopPropagation && !s.nested && l.stopPropagation(), i.isMoved || (s.loop && this.loopFix(), i.startTranslate = this.getTranslate(), this.setTransition(0), this.animating && this.$wrapperEl.trigger("webkitTransitionEnd transitionend"), i.allowMomentumBounce = !1, !s.grabCursor || !0 !== this.allowSlideNext && !0 !== this.allowSlidePrev || this.setGrabCursor(!0), this.emit("sliderFirstMove", l)), this.emit("sliderMove", l), i.isMoved = !0;
                            var m = this.isHorizontal() ? p : f;
                            r.diff = m, m *= s.touchRatio, a && (m = -m), this.swipeDirection = m > 0 ? "prev" : "next", i.currentTranslate = m + i.startTranslate;
                            var g = !0,
                                v = s.resistanceRatio;
                            if (s.touchReleaseOnEdges && (v = 0), m > 0 && i.currentTranslate > this.minTranslate() ? (g = !1, s.resistance && (i.currentTranslate = this.minTranslate() - 1 + Math.pow(-this.minTranslate() + i.startTranslate + m, v))) : m < 0 && i.currentTranslate < this.maxTranslate() && (g = !1, s.resistance && (i.currentTranslate = this.maxTranslate() + 1 - Math.pow(this.maxTranslate() - i.startTranslate - m, v))), g && (l.preventedByNestedSwiper = !0), !this.allowSlideNext && "next" === this.swipeDirection && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate), !this.allowSlidePrev && "prev" === this.swipeDirection && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate), s.threshold > 0) { if (!(Math.abs(m) > s.threshold || i.allowThresholdMove)) return void(i.currentTranslate = i.startTranslate); if (!i.allowThresholdMove) return i.allowThresholdMove = !0, r.startX = r.currentX, r.startY = r.currentY, i.currentTranslate = i.startTranslate, void(r.diff = this.isHorizontal() ? r.currentX - r.startX : r.currentY - r.startY) }
                            s.followFinger && !s.cssMode && ((s.freeMode || s.watchSlidesProgress || s.watchSlidesVisibility) && (this.updateActiveIndex(), this.updateSlidesClasses()), s.freeMode && (0 === i.velocities.length && i.velocities.push({ position: r[this.isHorizontal() ? "startX" : "startY"], time: i.touchStartTime }), i.velocities.push({ position: r[this.isHorizontal() ? "currentX" : "currentY"], time: o.now() })), this.updateProgress(i.currentTranslate), this.setTranslate(i.currentTranslate))
                        }
                    }
                }
            } else i.startMoving && i.isScrolling && this.emit("touchMoveOpposite", l)
        }

        function D(t) {
            var e = this,
                i = e.touchEventsData,
                n = e.params,
                s = e.touches,
                r = e.rtlTranslate,
                a = e.$wrapperEl,
                l = e.slidesGrid,
                h = e.snapGrid,
                d = t;
            if (d.originalEvent && (d = d.originalEvent), i.allowTouchCallbacks && e.emit("touchEnd", d), i.allowTouchCallbacks = !1, !i.isTouched) return i.isMoved && n.grabCursor && e.setGrabCursor(!1), i.isMoved = !1, void(i.startMoving = !1);
            n.grabCursor && i.isMoved && i.isTouched && (!0 === e.allowSlideNext || !0 === e.allowSlidePrev) && e.setGrabCursor(!1);
            var u, c = o.now(),
                p = c - i.touchStartTime;
            if (e.allowClick && (e.updateClickedSlide(d), e.emit("tap click", d), p < 300 && c - i.lastClickTime < 300 && e.emit("doubleTap doubleClick", d)), i.lastClickTime = o.now(), o.nextTick(function() { e.destroyed || (e.allowClick = !0) }), !i.isTouched || !i.isMoved || !e.swipeDirection || 0 === s.diff || i.currentTranslate === i.startTranslate) return i.isTouched = !1, i.isMoved = !1, void(i.startMoving = !1);
            if (i.isTouched = !1, i.isMoved = !1, i.startMoving = !1, u = n.followFinger ? r ? e.translate : -e.translate : -i.currentTranslate, !n.cssMode)
                if (n.freeMode) {
                    if (u < -e.minTranslate()) return void e.slideTo(e.activeIndex);
                    if (u > -e.maxTranslate()) return void(e.slides.length < h.length ? e.slideTo(h.length - 1) : e.slideTo(e.slides.length - 1));
                    if (n.freeModeMomentum) {
                        if (i.velocities.length > 1) {
                            var f = i.velocities.pop(),
                                m = i.velocities.pop(),
                                g = f.position - m.position,
                                v = f.time - m.time;
                            e.velocity = g / v, e.velocity /= 2, Math.abs(e.velocity) < n.freeModeMinimumVelocity && (e.velocity = 0), (v > 150 || o.now() - f.time > 300) && (e.velocity = 0)
                        } else e.velocity = 0;
                        e.velocity *= n.freeModeMomentumVelocityRatio, i.velocities.length = 0;
                        var y = 1e3 * n.freeModeMomentumRatio,
                            w = e.velocity * y,
                            b = e.translate + w;
                        r && (b = -b);
                        var T, _, S = !1,
                            x = 20 * Math.abs(e.velocity) * n.freeModeMomentumBounceRatio;
                        if (b < e.maxTranslate()) n.freeModeMomentumBounce ? (b + e.maxTranslate() < -x && (b = e.maxTranslate() - x), T = e.maxTranslate(), S = !0, i.allowMomentumBounce = !0) : b = e.maxTranslate(), n.loop && n.centeredSlides && (_ = !0);
                        else if (b > e.minTranslate()) n.freeModeMomentumBounce ? (b - e.minTranslate() > x && (b = e.minTranslate() + x), T = e.minTranslate(), S = !0, i.allowMomentumBounce = !0) : b = e.minTranslate(), n.loop && n.centeredSlides && (_ = !0);
                        else if (n.freeModeSticky) {
                            for (var E, C = 0; C < h.length; C += 1)
                                if (h[C] > -b) { E = C; break }
                            b = -(b = Math.abs(h[E] - b) < Math.abs(h[E - 1] - b) || "next" === e.swipeDirection ? h[E] : h[E - 1])
                        }
                        if (_ && e.once("transitionEnd", function() { e.loopFix() }), 0 !== e.velocity) {
                            if (y = r ? Math.abs((-b - e.translate) / e.velocity) : Math.abs((b - e.translate) / e.velocity), n.freeModeSticky) {
                                var k = Math.abs((r ? -b : b) - e.translate),
                                    I = e.slidesSizesGrid[e.activeIndex];
                                y = k < I ? n.speed : k < 2 * I ? 1.5 * n.speed : 2.5 * n.speed
                            }
                        } else if (n.freeModeSticky) return void e.slideToClosest();
                        n.freeModeMomentumBounce && S ? (e.updateProgress(T), e.setTransition(y), e.setTranslate(b), e.transitionStart(!0, e.swipeDirection), e.animating = !0, a.transitionEnd(function() { e && !e.destroyed && i.allowMomentumBounce && (e.emit("momentumBounce"), e.setTransition(n.speed), e.setTranslate(T), a.transitionEnd(function() { e && !e.destroyed && e.transitionEnd() })) })) : e.velocity ? (e.updateProgress(b), e.setTransition(y), e.setTranslate(b), e.transitionStart(!0, e.swipeDirection), e.animating || (e.animating = !0, a.transitionEnd(function() { e && !e.destroyed && e.transitionEnd() }))) : e.updateProgress(b), e.updateActiveIndex(), e.updateSlidesClasses()
                    } else if (n.freeModeSticky) return void e.slideToClosest();
                    (!n.freeModeMomentum || p >= n.longSwipesMs) && (e.updateProgress(), e.updateActiveIndex(), e.updateSlidesClasses())
                } else { for (var A = 0, M = e.slidesSizesGrid[0], O = 0; O < l.length; O += n.slidesPerGroup) void 0 !== l[O + n.slidesPerGroup] ? u >= l[O] && u < l[O + n.slidesPerGroup] && (A = O, M = l[O + n.slidesPerGroup] - l[O]) : u >= l[O] && (A = O, M = l[l.length - 1] - l[l.length - 2]); var P = (u - l[A]) / M; if (p > n.longSwipesMs) { if (!n.longSwipes) return void e.slideTo(e.activeIndex); "next" === e.swipeDirection && (P >= n.longSwipesRatio ? e.slideTo(A + n.slidesPerGroup) : e.slideTo(A)), "prev" === e.swipeDirection && (P > 1 - n.longSwipesRatio ? e.slideTo(A + n.slidesPerGroup) : e.slideTo(A)) } else { if (!n.shortSwipes) return void e.slideTo(e.activeIndex);!e.navigation || d.target !== e.navigation.nextEl && d.target !== e.navigation.prevEl ? ("next" === e.swipeDirection && e.slideTo(A + n.slidesPerGroup), "prev" === e.swipeDirection && e.slideTo(A)) : d.target === e.navigation.nextEl ? e.slideTo(A + n.slidesPerGroup) : e.slideTo(A) } }
        }

        function L() {
            var t = this.params,
                e = this.el;
            if (!e || 0 !== e.offsetWidth) {
                t.breakpoints && this.setBreakpoint();
                var i = this.allowSlideNext,
                    n = this.allowSlidePrev,
                    s = this.snapGrid;
                this.allowSlideNext = !0, this.allowSlidePrev = !0, this.updateSize(), this.updateSlides(), this.updateSlidesClasses(), ("auto" === t.slidesPerView || t.slidesPerView > 1) && this.isEnd && !this.params.centeredSlides ? this.slideTo(this.slides.length - 1, 0, !1, !0) : this.slideTo(this.activeIndex, 0, !1, !0), this.autoplay && this.autoplay.running && this.autoplay.paused && this.autoplay.run(), this.allowSlidePrev = n, this.allowSlideNext = i, this.params.watchOverflow && s !== this.snapGrid && this.checkOverflow()
            }
        }
        var $ = !1;

        function N() {}
        var R = { init: !0, direction: "horizontal", touchEventsTarget: "container", initialSlide: 0, speed: 300, cssMode: !1, preventInteractionOnTransition: !1, edgeSwipeDetection: !1, edgeSwipeThreshold: 20, freeMode: !1, freeModeMomentum: !0, freeModeMomentumRatio: 1, freeModeMomentumBounce: !0, freeModeMomentumBounceRatio: 1, freeModeMomentumVelocityRatio: 1, freeModeSticky: !1, freeModeMinimumVelocity: .02, autoHeight: !1, setWrapperSize: !1, virtualTranslate: !1, effect: "slide", breakpoints: void 0, spaceBetween: 0, slidesPerView: 1, slidesPerColumn: 1, slidesPerColumnFill: "column", slidesPerGroup: 1, centeredSlides: !1, centeredSlidesBounds: !1, slidesOffsetBefore: 0, slidesOffsetAfter: 0, normalizeSlideIndex: !0, centerInsufficientSlides: !1, watchOverflow: !1, roundLengths: !1, touchRatio: 1, touchAngle: 45, simulateTouch: !0, shortSwipes: !0, longSwipes: !0, longSwipesRatio: .5, longSwipesMs: 300, followFinger: !0, allowTouchMove: !0, threshold: 0, touchMoveStopPropagation: !1, touchStartPreventDefault: !0, touchStartForcePreventDefault: !1, touchReleaseOnEdges: !1, uniqueNavElements: !0, resistance: !0, resistanceRatio: .85, watchSlidesProgress: !1, watchSlidesVisibility: !1, grabCursor: !1, preventClicks: !0, preventClicksPropagation: !0, slideToClickedSlide: !1, preloadImages: !0, updateOnImagesReady: !0, loop: !1, loopAdditionalSlides: 0, loopedSlides: null, loopFillGroupWithBlank: !1, allowSlidePrev: !0, allowSlideNext: !0, swipeHandler: null, noSwiping: !0, noSwipingClass: "swiper-no-swiping", noSwipingSelector: null, passiveListeners: !0, containerModifierClass: "swiper-container-", slideClass: "swiper-slide", slideBlankClass: "swiper-slide-invisible-blank", slideActiveClass: "swiper-slide-active", slideDuplicateActiveClass: "swiper-slide-duplicate-active", slideVisibleClass: "swiper-slide-visible", slideDuplicateClass: "swiper-slide-duplicate", slideNextClass: "swiper-slide-next", slideDuplicateNextClass: "swiper-slide-duplicate-next", slidePrevClass: "swiper-slide-prev", slideDuplicatePrevClass: "swiper-slide-duplicate-prev", wrapperClass: "swiper-wrapper", runCallbacksOnInit: !0 },
            H = {
                update: E,
                translate: C,
                transition: {
                    setTransition: function(t, e) { this.params.cssMode || this.$wrapperEl.transition(t), this.emit("setTransition", t, e) },
                    transitionStart: function(t, e) {
                        void 0 === t && (t = !0);
                        var i = this.activeIndex,
                            n = this.params,
                            s = this.previousIndex;
                        if (!n.cssMode) {
                            n.autoHeight && this.updateAutoHeight();
                            var r = e;
                            if (r || (r = i > s ? "next" : i < s ? "prev" : "reset"), this.emit("transitionStart"), t && i !== s) {
                                if ("reset" === r) return void this.emit("slideResetTransitionStart");
                                this.emit("slideChangeTransitionStart"), "next" === r ? this.emit("slideNextTransitionStart") : this.emit("slidePrevTransitionStart")
                            }
                        }
                    },
                    transitionEnd: function(t, e) {
                        void 0 === t && (t = !0);
                        var i = this.activeIndex,
                            n = this.previousIndex,
                            s = this.params;
                        if (this.animating = !1, !s.cssMode) {
                            this.setTransition(0);
                            var r = e;
                            if (r || (r = i > n ? "next" : i < n ? "prev" : "reset"), this.emit("transitionEnd"), t && i !== n) {
                                if ("reset" === r) return void this.emit("slideResetTransitionEnd");
                                this.emit("slideChangeTransitionEnd"), "next" === r ? this.emit("slideNextTransitionEnd") : this.emit("slidePrevTransitionEnd")
                            }
                        }
                    }
                },
                slide: k,
                loop: I,
                grabCursor: A,
                manipulation: M,
                events: {
                    attachEvents: function() {
                        var e = this.params,
                            i = this.touchEvents,
                            n = this.el,
                            s = this.wrapperEl;
                        this.onTouchStart = P.bind(this), this.onTouchMove = z.bind(this), this.onTouchEnd = D.bind(this), e.cssMode && (this.onScroll = function() {
                            var t = this.wrapperEl;
                            this.previousTranslate = this.translate, this.translate = this.isHorizontal() ? -t.scrollLeft : -t.scrollTop, -0 === this.translate && (this.translate = 0), this.updateActiveIndex(), this.updateSlidesClasses();
                            var e = this.maxTranslate() - this.minTranslate();
                            (0 === e ? 0 : (this.translate - this.minTranslate()) / e) !== this.progress && this.updateProgress(this.translate), this.emit("setTranslate", this.translate, !1)
                        }.bind(this)), this.onClick = function(t) { this.allowClick || (this.params.preventClicks && t.preventDefault(), this.params.preventClicksPropagation && this.animating && (t.stopPropagation(), t.stopImmediatePropagation())) }.bind(this);
                        var r = !!e.nested;
                        if (!a.touch && a.pointerEvents) n.addEventListener(i.start, this.onTouchStart, !1), t.addEventListener(i.move, this.onTouchMove, r), t.addEventListener(i.end, this.onTouchEnd, !1);
                        else {
                            if (a.touch) {
                                var o = !("touchstart" !== i.start || !a.passiveListener || !e.passiveListeners) && { passive: !0, capture: !1 };
                                n.addEventListener(i.start, this.onTouchStart, o), n.addEventListener(i.move, this.onTouchMove, a.passiveListener ? { passive: !1, capture: r } : r), n.addEventListener(i.end, this.onTouchEnd, o), i.cancel && n.addEventListener(i.cancel, this.onTouchEnd, o), $ || (t.addEventListener("touchstart", N), $ = !0)
                            }(e.simulateTouch && !O.ios && !O.android || e.simulateTouch && !a.touch && O.ios) && (n.addEventListener("mousedown", this.onTouchStart, !1), t.addEventListener("mousemove", this.onTouchMove, r), t.addEventListener("mouseup", this.onTouchEnd, !1))
                        }(e.preventClicks || e.preventClicksPropagation) && n.addEventListener("click", this.onClick, !0), e.cssMode && s.addEventListener("scroll", this.onScroll), this.on(O.ios || O.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", L, !0)
                    },
                    detachEvents: function() {
                        var e = this.params,
                            i = this.touchEvents,
                            n = this.el,
                            s = this.wrapperEl,
                            r = !!e.nested;
                        if (!a.touch && a.pointerEvents) n.removeEventListener(i.start, this.onTouchStart, !1), t.removeEventListener(i.move, this.onTouchMove, r), t.removeEventListener(i.end, this.onTouchEnd, !1);
                        else {
                            if (a.touch) {
                                var o = !("onTouchStart" !== i.start || !a.passiveListener || !e.passiveListeners) && { passive: !0, capture: !1 };
                                n.removeEventListener(i.start, this.onTouchStart, o), n.removeEventListener(i.move, this.onTouchMove, r), n.removeEventListener(i.end, this.onTouchEnd, o), i.cancel && n.removeEventListener(i.cancel, this.onTouchEnd, o)
                            }(e.simulateTouch && !O.ios && !O.android || e.simulateTouch && !a.touch && O.ios) && (n.removeEventListener("mousedown", this.onTouchStart, !1), t.removeEventListener("mousemove", this.onTouchMove, r), t.removeEventListener("mouseup", this.onTouchEnd, !1))
                        }(e.preventClicks || e.preventClicksPropagation) && n.removeEventListener("click", this.onClick, !0), e.cssMode && s.removeEventListener("scroll", this.onScroll), this.off(O.ios || O.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", L)
                    }
                },
                breakpoints: {
                    setBreakpoint: function() {
                        var t = this.activeIndex,
                            e = this.initialized,
                            i = this.loopedSlides;
                        void 0 === i && (i = 0);
                        var n = this.params,
                            s = this.$el,
                            r = n.breakpoints;
                        if (r && (!r || 0 !== Object.keys(r).length)) {
                            var a = this.getBreakpoint(r);
                            if (a && this.currentBreakpoint !== a) {
                                var l = a in r ? r[a] : void 0;
                                l && ["slidesPerView", "spaceBetween", "slidesPerGroup", "slidesPerColumn"].forEach(function(t) {
                                    var e = l[t];
                                    void 0 !== e && (l[t] = "slidesPerView" !== t || "AUTO" !== e && "auto" !== e ? "slidesPerView" === t ? parseFloat(e) : parseInt(e, 10) : "auto")
                                });
                                var h = l || this.originalParams,
                                    d = n.slidesPerColumn > 1,
                                    u = h.slidesPerColumn > 1;
                                d && !u ? s.removeClass(n.containerModifierClass + "multirow " + n.containerModifierClass + "multirow-column") : !d && u && (s.addClass(n.containerModifierClass + "multirow"), "column" === h.slidesPerColumnFill && s.addClass(n.containerModifierClass + "multirow-column"));
                                var c = h.direction && h.direction !== n.direction,
                                    p = n.loop && (h.slidesPerView !== n.slidesPerView || c);
                                c && e && this.changeDirection(), o.extend(this.params, h), o.extend(this, { allowTouchMove: this.params.allowTouchMove, allowSlideNext: this.params.allowSlideNext, allowSlidePrev: this.params.allowSlidePrev }), this.currentBreakpoint = a, p && e && (this.loopDestroy(), this.loopCreate(), this.updateSlides(), this.slideTo(t - i + this.loopedSlides, 0, !1)), this.emit("breakpoint", h)
                            }
                        }
                    },
                    getBreakpoint: function(t) {
                        if (t) {
                            var i = !1,
                                n = [];
                            Object.keys(t).forEach(function(t) { n.push(t) }), n.sort(function(t, e) { return parseInt(t, 10) - parseInt(e, 10) });
                            for (var s = 0; s < n.length; s += 1) {
                                var r = n[s];
                                r <= e.innerWidth && (i = r)
                            }
                            return i || "max"
                        }
                    }
                },
                checkOverflow: {
                    checkOverflow: function() {
                        var t = this.params,
                            e = this.isLocked,
                            i = this.slides.length > 0 && t.slidesOffsetBefore + t.spaceBetween * (this.slides.length - 1) + this.slides[0].offsetWidth * this.slides.length;
                        t.slidesOffsetBefore && t.slidesOffsetAfter && i ? this.isLocked = i <= this.size : this.isLocked = 1 === this.snapGrid.length, this.allowSlideNext = !this.isLocked, this.allowSlidePrev = !this.isLocked, e !== this.isLocked && this.emit(this.isLocked ? "lock" : "unlock"), e && e !== this.isLocked && (this.isEnd = !1, this.navigation.update())
                    }
                },
                classes: {
                    addClasses: function() {
                        var t = this.classNames,
                            e = this.params,
                            i = this.rtl,
                            n = this.$el,
                            s = [];
                        s.push("initialized"), s.push(e.direction), e.freeMode && s.push("free-mode"), e.autoHeight && s.push("autoheight"), i && s.push("rtl"), e.slidesPerColumn > 1 && (s.push("multirow"), "column" === e.slidesPerColumnFill && s.push("multirow-column")), O.android && s.push("android"), O.ios && s.push("ios"), e.cssMode && s.push("css-mode"), s.forEach(function(i) { t.push(e.containerModifierClass + i) }), n.addClass(t.join(" "))
                    },
                    removeClasses: function() {
                        var t = this.$el,
                            e = this.classNames;
                        t.removeClass(e.join(" "))
                    }
                },
                images: {
                    loadImage: function(t, i, n, s, r, o) {
                        var a;

                        function l() { o && o() }
                        t.complete && r ? l() : i ? ((a = new e.Image).onload = l, a.onerror = l, s && (a.sizes = s), n && (a.srcset = n), i && (a.src = i)) : l()
                    },
                    preloadImages: function() {
                        var t = this;

                        function e() { null != t && t && !t.destroyed && (void 0 !== t.imagesLoaded && (t.imagesLoaded += 1), t.imagesLoaded === t.imagesToLoad.length && (t.params.updateOnImagesReady && t.update(), t.emit("imagesReady"))) }
                        t.imagesToLoad = t.$el.find("img");
                        for (var i = 0; i < t.imagesToLoad.length; i += 1) {
                            var n = t.imagesToLoad[i];
                            t.loadImage(n, n.currentSrc || n.getAttribute("src"), n.srcset || n.getAttribute("srcset"), n.sizes || n.getAttribute("sizes"), !0, e)
                        }
                    }
                }
            },
            j = {},
            F = function(t) {
                function e() {
                    for (var i, s, r, l = [], h = arguments.length; h--;) l[h] = arguments[h];
                    1 === l.length && l[0].constructor && l[0].constructor === Object ? r = l[0] : (s = (i = l)[0], r = i[1]), r || (r = {}), r = o.extend({}, r), s && !r.el && (r.el = s), t.call(this, r), Object.keys(H).forEach(function(t) { Object.keys(H[t]).forEach(function(i) { e.prototype[i] || (e.prototype[i] = H[t][i]) }) });
                    var d = this;
                    void 0 === d.modules && (d.modules = {}), Object.keys(d.modules).forEach(function(t) {
                        var e = d.modules[t];
                        if (e.params) {
                            var i = Object.keys(e.params)[0],
                                n = e.params[i];
                            if ("object" != typeof n || null === n) return;
                            if (!(i in r && "enabled" in n)) return;
                            !0 === r[i] && (r[i] = { enabled: !0 }), "object" != typeof r[i] || "enabled" in r[i] || (r[i].enabled = !0), r[i] || (r[i] = { enabled: !1 })
                        }
                    });
                    var u = o.extend({}, R);
                    d.useModulesParams(u), d.params = o.extend({}, u, j, r), d.originalParams = o.extend({}, d.params), d.passedParams = o.extend({}, r), d.$ = n;
                    var c = n(d.params.el);
                    if (s = c[0]) {
                        if (c.length > 1) {
                            var p = [];
                            return c.each(function(t, i) {
                                var n = o.extend({}, r, { el: i });
                                p.push(new e(n))
                            }), p
                        }
                        var f, m, g;
                        return s.swiper = d, c.data("swiper", d), s && s.shadowRoot && s.shadowRoot.querySelector ? (f = n(s.shadowRoot.querySelector("." + d.params.wrapperClass))).children = function(t) { return c.children(t) } : f = c.children("." + d.params.wrapperClass), o.extend(d, { $el: c, el: s, $wrapperEl: f, wrapperEl: f[0], classNames: [], slides: n(), slidesGrid: [], snapGrid: [], slidesSizesGrid: [], isHorizontal: function() { return "horizontal" === d.params.direction }, isVertical: function() { return "vertical" === d.params.direction }, rtl: "rtl" === s.dir.toLowerCase() || "rtl" === c.css("direction"), rtlTranslate: "horizontal" === d.params.direction && ("rtl" === s.dir.toLowerCase() || "rtl" === c.css("direction")), wrongRTL: "-webkit-box" === f.css("display"), activeIndex: 0, realIndex: 0, isBeginning: !0, isEnd: !1, translate: 0, previousTranslate: 0, progress: 0, velocity: 0, animating: !1, allowSlideNext: d.params.allowSlideNext, allowSlidePrev: d.params.allowSlidePrev, touchEvents: (m = ["touchstart", "touchmove", "touchend", "touchcancel"], g = ["mousedown", "mousemove", "mouseup"], a.pointerEvents && (g = ["pointerdown", "pointermove", "pointerup"]), d.touchEventsTouch = { start: m[0], move: m[1], end: m[2], cancel: m[3] }, d.touchEventsDesktop = { start: g[0], move: g[1], end: g[2] }, a.touch || !d.params.simulateTouch ? d.touchEventsTouch : d.touchEventsDesktop), touchEventsData: { isTouched: void 0, isMoved: void 0, allowTouchCallbacks: void 0, touchStartTime: void 0, isScrolling: void 0, currentTranslate: void 0, startTranslate: void 0, allowThresholdMove: void 0, formElements: "input, select, option, textarea, button, video", lastClickTime: o.now(), clickTimeout: void 0, velocities: [], allowMomentumBounce: void 0, isTouchEvent: void 0, startMoving: void 0 }, allowClick: !0, allowTouchMove: d.params.allowTouchMove, touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 }, imagesToLoad: [], imagesLoaded: 0 }), d.useModules(), d.params.init && d.init(), d
                    }
                }
                t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e;
                var i = { extendedDefaults: { configurable: !0 }, defaults: { configurable: !0 }, Class: { configurable: !0 }, $: { configurable: !0 } };
                return e.prototype.slidesPerViewDynamic = function() {
                    var t = this.params,
                        e = this.slides,
                        i = this.slidesGrid,
                        n = this.size,
                        s = this.activeIndex,
                        r = 1;
                    if (t.centeredSlides) { for (var o, a = e[s].swiperSlideSize, l = s + 1; l < e.length; l += 1) e[l] && !o && (r += 1, (a += e[l].swiperSlideSize) > n && (o = !0)); for (var h = s - 1; h >= 0; h -= 1) e[h] && !o && (r += 1, (a += e[h].swiperSlideSize) > n && (o = !0)) } else
                        for (var d = s + 1; d < e.length; d += 1) i[d] - i[s] < n && (r += 1);
                    return r
                }, e.prototype.update = function() {
                    var t = this;
                    if (t && !t.destroyed) {
                        var e = t.snapGrid,
                            i = t.params;
                        i.breakpoints && t.setBreakpoint(), t.updateSize(), t.updateSlides(), t.updateProgress(), t.updateSlidesClasses(), t.params.freeMode ? (n(), t.params.autoHeight && t.updateAutoHeight()) : (("auto" === t.params.slidesPerView || t.params.slidesPerView > 1) && t.isEnd && !t.params.centeredSlides ? t.slideTo(t.slides.length - 1, 0, !1, !0) : t.slideTo(t.activeIndex, 0, !1, !0)) || n(), i.watchOverflow && e !== t.snapGrid && t.checkOverflow(), t.emit("update")
                    }

                    function n() {
                        var e = t.rtlTranslate ? -1 * t.translate : t.translate,
                            i = Math.min(Math.max(e, t.maxTranslate()), t.minTranslate());
                        t.setTranslate(i), t.updateActiveIndex(), t.updateSlidesClasses()
                    }
                }, e.prototype.changeDirection = function(t, e) { void 0 === e && (e = !0); var i = this.params.direction; return t || (t = "horizontal" === i ? "vertical" : "horizontal"), t === i || "horizontal" !== t && "vertical" !== t ? this : (this.$el.removeClass("" + this.params.containerModifierClass + i).addClass("" + this.params.containerModifierClass + t), this.params.direction = t, this.slides.each(function(e, i) { "vertical" === t ? i.style.width = "" : i.style.height = "" }), this.emit("changeDirection"), e && this.update(), this) }, e.prototype.init = function() { this.initialized || (this.emit("beforeInit"), this.params.breakpoints && this.setBreakpoint(), this.addClasses(), this.params.loop && this.loopCreate(), this.updateSize(), this.updateSlides(), this.params.watchOverflow && this.checkOverflow(), this.params.grabCursor && this.setGrabCursor(), this.params.preloadImages && this.preloadImages(), this.params.loop ? this.slideTo(this.params.initialSlide + this.loopedSlides, 0, this.params.runCallbacksOnInit) : this.slideTo(this.params.initialSlide, 0, this.params.runCallbacksOnInit), this.attachEvents(), this.initialized = !0, this.emit("init")) }, e.prototype.destroy = function(t, e) {
                    void 0 === t && (t = !0), void 0 === e && (e = !0);
                    var i = this,
                        n = i.params,
                        s = i.$el,
                        r = i.$wrapperEl,
                        a = i.slides;
                    return void 0 === i.params || i.destroyed ? null : (i.emit("beforeDestroy"), i.initialized = !1, i.detachEvents(), n.loop && i.loopDestroy(), e && (i.removeClasses(), s.removeAttr("style"), r.removeAttr("style"), a && a.length && a.removeClass([n.slideVisibleClass, n.slideActiveClass, n.slideNextClass, n.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")), i.emit("destroy"), Object.keys(i.eventsListeners).forEach(function(t) { i.off(t) }), !1 !== t && (i.$el[0].swiper = null, i.$el.data("swiper", null), o.deleteProps(i)), i.destroyed = !0, null)
                }, e.extendDefaults = function(t) { o.extend(j, t) }, i.extendedDefaults.get = function() { return j }, i.defaults.get = function() { return R }, i.Class.get = function() { return t }, i.$.get = function() { return n }, Object.defineProperties(e, i), e
            }(l),
            W = { name: "device", proto: { device: O }, static: { device: O } },
            B = { name: "support", proto: { support: a }, static: { support: a } },
            q = { isEdge: !!e.navigator.userAgent.match(/Edge/g), isSafari: function() { var t = e.navigator.userAgent.toLowerCase(); return t.indexOf("safari") >= 0 && t.indexOf("chrome") < 0 && t.indexOf("android") < 0 }(), isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent) },
            V = { name: "browser", proto: { browser: q }, static: { browser: q } },
            Y = {
                name: "resize",
                create: function() {
                    var t = this;
                    o.extend(t, { resize: { resizeHandler: function() { t && !t.destroyed && t.initialized && (t.emit("beforeResize"), t.emit("resize")) }, orientationChangeHandler: function() { t && !t.destroyed && t.initialized && t.emit("orientationchange") } } })
                },
                on: { init: function() { e.addEventListener("resize", this.resize.resizeHandler), e.addEventListener("orientationchange", this.resize.orientationChangeHandler) }, destroy: function() { e.removeEventListener("resize", this.resize.resizeHandler), e.removeEventListener("orientationchange", this.resize.orientationChangeHandler) } }
            },
            G = {
                func: e.MutationObserver || e.WebkitMutationObserver,
                attach: function(t, i) {
                    void 0 === i && (i = {});
                    var n = this,
                        s = new(0, G.func)(function(t) {
                            if (1 !== t.length) {
                                var i = function() { n.emit("observerUpdate", t[0]) };
                                e.requestAnimationFrame ? e.requestAnimationFrame(i) : e.setTimeout(i, 0)
                            } else n.emit("observerUpdate", t[0])
                        });
                    s.observe(t, { attributes: void 0 === i.attributes || i.attributes, childList: void 0 === i.childList || i.childList, characterData: void 0 === i.characterData || i.characterData }), n.observer.observers.push(s)
                },
                init: function() {
                    if (a.observer && this.params.observer) {
                        if (this.params.observeParents)
                            for (var t = this.$el.parents(), e = 0; e < t.length; e += 1) this.observer.attach(t[e]);
                        this.observer.attach(this.$el[0], { childList: this.params.observeSlideChildren }), this.observer.attach(this.$wrapperEl[0], { attributes: !1 })
                    }
                },
                destroy: function() { this.observer.observers.forEach(function(t) { t.disconnect() }), this.observer.observers = [] }
            },
            U = { name: "observer", params: { observer: !1, observeParents: !1, observeSlideChildren: !1 }, create: function() { o.extend(this, { observer: { init: G.init.bind(this), attach: G.attach.bind(this), destroy: G.destroy.bind(this), observers: [] } }) }, on: { init: function() { this.observer.init() }, destroy: function() { this.observer.destroy() } } },
            X = {
                update: function(t) {
                    var e = this,
                        i = e.params,
                        n = i.slidesPerView,
                        s = i.slidesPerGroup,
                        r = i.centeredSlides,
                        a = e.params.virtual,
                        l = a.addSlidesBefore,
                        h = a.addSlidesAfter,
                        d = e.virtual,
                        u = d.from,
                        c = d.to,
                        p = d.slides,
                        f = d.slidesGrid,
                        m = d.renderSlide,
                        g = d.offset;
                    e.updateActiveIndex();
                    var v, y, w, b = e.activeIndex || 0;
                    v = e.rtlTranslate ? "right" : e.isHorizontal() ? "left" : "top", r ? (y = Math.floor(n / 2) + s + l, w = Math.floor(n / 2) + s + h) : (y = n + (s - 1) + l, w = s + h);
                    var T = Math.max((b || 0) - w, 0),
                        _ = Math.min((b || 0) + y, p.length - 1),
                        S = (e.slidesGrid[T] || 0) - (e.slidesGrid[0] || 0);

                    function x() { e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.lazy && e.params.lazy.enabled && e.lazy.load() }
                    if (o.extend(e.virtual, { from: T, to: _, offset: S, slidesGrid: e.slidesGrid }), u === T && c === _ && !t) return e.slidesGrid !== f && S !== g && e.slides.css(v, S + "px"), void e.updateProgress();
                    if (e.params.virtual.renderExternal) return e.params.virtual.renderExternal.call(e, { offset: S, from: T, to: _, slides: function() { for (var t = [], e = T; e <= _; e += 1) t.push(p[e]); return t }() }), void x();
                    var E = [],
                        C = [];
                    if (t) e.$wrapperEl.find("." + e.params.slideClass).remove();
                    else
                        for (var k = u; k <= c; k += 1)(k < T || k > _) && e.$wrapperEl.find("." + e.params.slideClass + '[data-swiper-slide-index="' + k + '"]').remove();
                    for (var I = 0; I < p.length; I += 1) I >= T && I <= _ && (void 0 === c || t ? C.push(I) : (I > c && C.push(I), I < u && E.push(I)));
                    C.forEach(function(t) { e.$wrapperEl.append(m(p[t], t)) }), E.sort(function(t, e) { return e - t }).forEach(function(t) { e.$wrapperEl.prepend(m(p[t], t)) }), e.$wrapperEl.children(".swiper-slide").css(v, S + "px"), x()
                },
                renderSlide: function(t, e) { var i = this.params.virtual; if (i.cache && this.virtual.cache[e]) return this.virtual.cache[e]; var s = i.renderSlide ? n(i.renderSlide.call(this, t, e)) : n('<div class="' + this.params.slideClass + '" data-swiper-slide-index="' + e + '">' + t + "</div>"); return s.attr("data-swiper-slide-index") || s.attr("data-swiper-slide-index", e), i.cache && (this.virtual.cache[e] = s), s },
                appendSlide: function(t) {
                    if ("object" == typeof t && "length" in t)
                        for (var e = 0; e < t.length; e += 1) t[e] && this.virtual.slides.push(t[e]);
                    else this.virtual.slides.push(t);
                    this.virtual.update(!0)
                },
                prependSlide: function(t) {
                    var e = this.activeIndex,
                        i = e + 1,
                        n = 1;
                    if (Array.isArray(t)) {
                        for (var s = 0; s < t.length; s += 1) t[s] && this.virtual.slides.unshift(t[s]);
                        i = e + t.length, n = t.length
                    } else this.virtual.slides.unshift(t);
                    if (this.params.virtual.cache) {
                        var r = this.virtual.cache,
                            o = {};
                        Object.keys(r).forEach(function(t) {
                            var e = r[t],
                                i = e.attr("data-swiper-slide-index");
                            i && e.attr("data-swiper-slide-index", parseInt(i, 10) + 1), o[parseInt(t, 10) + n] = e
                        }), this.virtual.cache = o
                    }
                    this.virtual.update(!0), this.slideTo(i, 0)
                },
                removeSlide: function(t) {
                    if (null != t) {
                        var e = this.activeIndex;
                        if (Array.isArray(t))
                            for (var i = t.length - 1; i >= 0; i -= 1) this.virtual.slides.splice(t[i], 1), this.params.virtual.cache && delete this.virtual.cache[t[i]], t[i] < e && (e -= 1), e = Math.max(e, 0);
                        else this.virtual.slides.splice(t, 1), this.params.virtual.cache && delete this.virtual.cache[t], t < e && (e -= 1), e = Math.max(e, 0);
                        this.virtual.update(!0), this.slideTo(e, 0)
                    }
                },
                removeAllSlides: function() { this.virtual.slides = [], this.params.virtual.cache && (this.virtual.cache = {}), this.virtual.update(!0), this.slideTo(0, 0) }
            },
            Q = {
                name: "virtual",
                params: { virtual: { enabled: !1, slides: [], cache: !0, renderSlide: null, renderExternal: null, addSlidesBefore: 0, addSlidesAfter: 0 } },
                create: function() { o.extend(this, { virtual: { update: X.update.bind(this), appendSlide: X.appendSlide.bind(this), prependSlide: X.prependSlide.bind(this), removeSlide: X.removeSlide.bind(this), removeAllSlides: X.removeAllSlides.bind(this), renderSlide: X.renderSlide.bind(this), slides: this.params.virtual.slides, cache: {} } }) },
                on: {
                    beforeInit: function() {
                        if (this.params.virtual.enabled) {
                            this.classNames.push(this.params.containerModifierClass + "virtual");
                            var t = { watchSlidesProgress: !0 };
                            o.extend(this.params, t), o.extend(this.originalParams, t), this.params.initialSlide || this.virtual.update()
                        }
                    },
                    setTranslate: function() { this.params.virtual.enabled && this.virtual.update() }
                }
            },
            K = {
                handle: function(i) {
                    var n = this.rtlTranslate,
                        s = i;
                    s.originalEvent && (s = s.originalEvent);
                    var r = s.keyCode || s.charCode;
                    if (!this.allowSlideNext && (this.isHorizontal() && 39 === r || this.isVertical() && 40 === r || 34 === r)) return !1;
                    if (!this.allowSlidePrev && (this.isHorizontal() && 37 === r || this.isVertical() && 38 === r || 33 === r)) return !1;
                    if (!(s.shiftKey || s.altKey || s.ctrlKey || s.metaKey || t.activeElement && t.activeElement.nodeName && ("input" === t.activeElement.nodeName.toLowerCase() || "textarea" === t.activeElement.nodeName.toLowerCase()))) {
                        if (this.params.keyboard.onlyInViewport && (33 === r || 34 === r || 37 === r || 39 === r || 38 === r || 40 === r)) {
                            var o = !1;
                            if (this.$el.parents("." + this.params.slideClass).length > 0 && 0 === this.$el.parents("." + this.params.slideActiveClass).length) return;
                            var a = e.innerWidth,
                                l = e.innerHeight,
                                h = this.$el.offset();
                            n && (h.left -= this.$el[0].scrollLeft);
                            for (var d = [
                                    [h.left, h.top],
                                    [h.left + this.width, h.top],
                                    [h.left, h.top + this.height],
                                    [h.left + this.width, h.top + this.height]
                                ], u = 0; u < d.length; u += 1) {
                                var c = d[u];
                                c[0] >= 0 && c[0] <= a && c[1] >= 0 && c[1] <= l && (o = !0)
                            }
                            if (!o) return
                        }
                        this.isHorizontal() ? (33 !== r && 34 !== r && 37 !== r && 39 !== r || (s.preventDefault ? s.preventDefault() : s.returnValue = !1), (34 !== r && 39 !== r || n) && (33 !== r && 37 !== r || !n) || this.slideNext(), (33 !== r && 37 !== r || n) && (34 !== r && 39 !== r || !n) || this.slidePrev()) : (33 !== r && 34 !== r && 38 !== r && 40 !== r || (s.preventDefault ? s.preventDefault() : s.returnValue = !1), 34 !== r && 40 !== r || this.slideNext(), 33 !== r && 38 !== r || this.slidePrev()), this.emit("keyPress", r)
                    }
                },
                enable: function() { this.keyboard.enabled || (n(t).on("keydown", this.keyboard.handle), this.keyboard.enabled = !0) },
                disable: function() { this.keyboard.enabled && (n(t).off("keydown", this.keyboard.handle), this.keyboard.enabled = !1) }
            },
            Z = { name: "keyboard", params: { keyboard: { enabled: !1, onlyInViewport: !0 } }, create: function() { o.extend(this, { keyboard: { enabled: !1, enable: K.enable.bind(this), disable: K.disable.bind(this), handle: K.handle.bind(this) } }) }, on: { init: function() { this.params.keyboard.enabled && this.keyboard.enable() }, destroy: function() { this.keyboard.enabled && this.keyboard.disable() } } },
            J = {
                lastScrollTime: o.now(),
                lastEventBeforeSnap: void 0,
                recentWheelEvents: [],
                event: function() {
                    return e.navigator.userAgent.indexOf("firefox") > -1 ? "DOMMouseScroll" : function() {
                        var e = "onwheel" in t;
                        if (!e) {
                            var i = t.createElement("div");
                            i.setAttribute("onwheel", "return;"), e = "function" == typeof i.onwheel
                        }
                        return !e && t.implementation && t.implementation.hasFeature && !0 !== t.implementation.hasFeature("", "") && (e = t.implementation.hasFeature("Events.wheel", "3.0")), e
                    }() ? "wheel" : "mousewheel"
                },
                normalize: function(t) {
                    var e = 0,
                        i = 0,
                        n = 0,
                        s = 0;
                    return "detail" in t && (i = t.detail), "wheelDelta" in t && (i = -t.wheelDelta / 120), "wheelDeltaY" in t && (i = -t.wheelDeltaY / 120), "wheelDeltaX" in t && (e = -t.wheelDeltaX / 120), "axis" in t && t.axis === t.HORIZONTAL_AXIS && (e = i, i = 0), n = 10 * e, s = 10 * i, "deltaY" in t && (s = t.deltaY), "deltaX" in t && (n = t.deltaX), t.shiftKey && !n && (n = s, s = 0), (n || s) && t.deltaMode && (1 === t.deltaMode ? (n *= 40, s *= 40) : (n *= 800, s *= 800)), n && !e && (e = n < 1 ? -1 : 1), s && !i && (i = s < 1 ? -1 : 1), { spinX: e, spinY: i, pixelX: n, pixelY: s }
                },
                handleMouseEnter: function() { this.mouseEntered = !0 },
                handleMouseLeave: function() { this.mouseEntered = !1 },
                handle: function(t) {
                    var i = t,
                        n = this,
                        s = n.params.mousewheel;
                    if (n.params.cssMode && i.preventDefault(), !n.mouseEntered && !s.releaseOnEdges) return !0;
                    i.originalEvent && (i = i.originalEvent);
                    var r = 0,
                        a = n.rtlTranslate ? -1 : 1,
                        l = J.normalize(i);
                    if (s.forceToAxis)
                        if (n.isHorizontal()) {
                            if (!(Math.abs(l.pixelX) > Math.abs(l.pixelY))) return !0;
                            r = l.pixelX * a
                        } else {
                            if (!(Math.abs(l.pixelY) > Math.abs(l.pixelX))) return !0;
                            r = l.pixelY
                        }
                    else r = Math.abs(l.pixelX) > Math.abs(l.pixelY) ? -l.pixelX * a : -l.pixelY;
                    if (0 === r) return !0;
                    if (s.invert && (r = -r), n.params.freeMode) {
                        var h = { time: o.now(), delta: Math.abs(r), direction: Math.sign(r) },
                            d = n.mousewheel.lastEventBeforeSnap,
                            u = d && h.time < d.time + 500 && h.delta <= d.delta && h.direction === d.direction;
                        if (!u) {
                            n.mousewheel.lastEventBeforeSnap = void 0, n.params.loop && n.loopFix();
                            var c = n.getTranslate() + r * s.sensitivity,
                                p = n.isBeginning,
                                f = n.isEnd;
                            if (c >= n.minTranslate() && (c = n.minTranslate()), c <= n.maxTranslate() && (c = n.maxTranslate()), n.setTransition(0), n.setTranslate(c), n.updateProgress(), n.updateActiveIndex(), n.updateSlidesClasses(), (!p && n.isBeginning || !f && n.isEnd) && n.updateSlidesClasses(), n.params.freeModeSticky) {
                                clearTimeout(n.mousewheel.timeout), n.mousewheel.timeout = void 0;
                                var m = n.mousewheel.recentWheelEvents;
                                m.length >= 15 && m.shift();
                                var g = m.length ? m[m.length - 1] : void 0,
                                    v = m[0];
                                if (m.push(h), g && (h.delta > g.delta || h.direction !== g.direction)) m.splice(0);
                                else if (m.length >= 15 && h.time - v.time < 500 && v.delta - h.delta >= 1 && h.delta <= 6) {
                                    var y = r > 0 ? .8 : .2;
                                    n.mousewheel.lastEventBeforeSnap = h, m.splice(0), n.mousewheel.timeout = o.nextTick(function() { n.slideToClosest(n.params.speed, !0, void 0, y) }, 0)
                                }
                                n.mousewheel.timeout || (n.mousewheel.timeout = o.nextTick(function() { n.mousewheel.lastEventBeforeSnap = h, m.splice(0), n.slideToClosest(n.params.speed, !0, void 0, .5) }, 500))
                            }
                            if (u || n.emit("scroll", i), n.params.autoplay && n.params.autoplayDisableOnInteraction && n.autoplay.stop(), c === n.minTranslate() || c === n.maxTranslate()) return !0
                        }
                    } else {
                        if (o.now() - n.mousewheel.lastScrollTime > 60)
                            if (r < 0)
                                if (n.isEnd && !n.params.loop || n.animating) { if (s.releaseOnEdges) return !0 } else n.slideNext(), n.emit("scroll", i);
                        else if (n.isBeginning && !n.params.loop || n.animating) { if (s.releaseOnEdges) return !0 } else n.slidePrev(), n.emit("scroll", i);
                        n.mousewheel.lastScrollTime = (new e.Date).getTime()
                    }
                    return i.preventDefault ? i.preventDefault() : i.returnValue = !1, !1
                },
                enable: function() { var t = J.event(); if (this.params.cssMode) return this.wrapperEl.removeEventListener(t, this.mousewheel.handle), !0; if (!t) return !1; if (this.mousewheel.enabled) return !1; var e = this.$el; return "container" !== this.params.mousewheel.eventsTarged && (e = n(this.params.mousewheel.eventsTarged)), e.on("mouseenter", this.mousewheel.handleMouseEnter), e.on("mouseleave", this.mousewheel.handleMouseLeave), e.on(t, this.mousewheel.handle), this.mousewheel.enabled = !0, !0 },
                disable: function() { var t = J.event(); if (this.params.cssMode) return this.wrapperEl.addEventListener(t, this.mousewheel.handle), !0; if (!t) return !1; if (!this.mousewheel.enabled) return !1; var e = this.$el; return "container" !== this.params.mousewheel.eventsTarged && (e = n(this.params.mousewheel.eventsTarged)), e.off(t, this.mousewheel.handle), this.mousewheel.enabled = !1, !0 }
            },
            tt = {
                update: function() {
                    var t = this.params.navigation;
                    if (!this.params.loop) {
                        var e = this.navigation,
                            i = e.$nextEl,
                            n = e.$prevEl;
                        n && n.length > 0 && (this.isBeginning ? n.addClass(t.disabledClass) : n.removeClass(t.disabledClass), n[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](t.lockClass)), i && i.length > 0 && (this.isEnd ? i.addClass(t.disabledClass) : i.removeClass(t.disabledClass), i[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](t.lockClass))
                    }
                },
                onPrevClick: function(t) { t.preventDefault(), this.isBeginning && !this.params.loop || this.slidePrev() },
                onNextClick: function(t) { t.preventDefault(), this.isEnd && !this.params.loop || this.slideNext() },
                init: function() {
                    var t, e, i = this.params.navigation;
                    (i.nextEl || i.prevEl) && (i.nextEl && (t = n(i.nextEl), this.params.uniqueNavElements && "string" == typeof i.nextEl && t.length > 1 && 1 === this.$el.find(i.nextEl).length && (t = this.$el.find(i.nextEl))), i.prevEl && (e = n(i.prevEl), this.params.uniqueNavElements && "string" == typeof i.prevEl && e.length > 1 && 1 === this.$el.find(i.prevEl).length && (e = this.$el.find(i.prevEl))), t && t.length > 0 && t.on("click", this.navigation.onNextClick), e && e.length > 0 && e.on("click", this.navigation.onPrevClick), o.extend(this.navigation, { $nextEl: t, nextEl: t && t[0], $prevEl: e, prevEl: e && e[0] }))
                },
                destroy: function() {
                    var t = this.navigation,
                        e = t.$nextEl,
                        i = t.$prevEl;
                    e && e.length && (e.off("click", this.navigation.onNextClick), e.removeClass(this.params.navigation.disabledClass)), i && i.length && (i.off("click", this.navigation.onPrevClick), i.removeClass(this.params.navigation.disabledClass))
                }
            },
            et = {
                update: function() {
                    var t = this.rtl,
                        e = this.params.pagination;
                    if (e.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
                        var i, s = this.virtual && this.params.virtual.enabled ? this.virtual.slides.length : this.slides.length,
                            r = this.pagination.$el,
                            o = this.params.loop ? Math.ceil((s - 2 * this.loopedSlides) / this.params.slidesPerGroup) : this.snapGrid.length;
                        if (this.params.loop ? ((i = Math.ceil((this.activeIndex - this.loopedSlides) / this.params.slidesPerGroup)) > s - 1 - 2 * this.loopedSlides && (i -= s - 2 * this.loopedSlides), i > o - 1 && (i -= o), i < 0 && "bullets" !== this.params.paginationType && (i = o + i)) : i = void 0 !== this.snapIndex ? this.snapIndex : this.activeIndex || 0, "bullets" === e.type && this.pagination.bullets && this.pagination.bullets.length > 0) {
                            var a, l, h, d = this.pagination.bullets;
                            if (e.dynamicBullets && (this.pagination.bulletSize = d.eq(0)[this.isHorizontal() ? "outerWidth" : "outerHeight"](!0), r.css(this.isHorizontal() ? "width" : "height", this.pagination.bulletSize * (e.dynamicMainBullets + 4) + "px"), e.dynamicMainBullets > 1 && void 0 !== this.previousIndex && (this.pagination.dynamicBulletIndex += i - this.previousIndex, this.pagination.dynamicBulletIndex > e.dynamicMainBullets - 1 ? this.pagination.dynamicBulletIndex = e.dynamicMainBullets - 1 : this.pagination.dynamicBulletIndex < 0 && (this.pagination.dynamicBulletIndex = 0)), a = i - this.pagination.dynamicBulletIndex, h = ((l = a + (Math.min(d.length, e.dynamicMainBullets) - 1)) + a) / 2), d.removeClass(e.bulletActiveClass + " " + e.bulletActiveClass + "-next " + e.bulletActiveClass + "-next-next " + e.bulletActiveClass + "-prev " + e.bulletActiveClass + "-prev-prev " + e.bulletActiveClass + "-main"), r.length > 1) d.each(function(t, s) {
                                var r = n(s),
                                    o = r.index();
                                o === i && r.addClass(e.bulletActiveClass), e.dynamicBullets && (o >= a && o <= l && r.addClass(e.bulletActiveClass + "-main"), o === a && r.prev().addClass(e.bulletActiveClass + "-prev").prev().addClass(e.bulletActiveClass + "-prev-prev"), o === l && r.next().addClass(e.bulletActiveClass + "-next").next().addClass(e.bulletActiveClass + "-next-next"))
                            });
                            else {
                                var u = d.eq(i),
                                    c = u.index();
                                if (u.addClass(e.bulletActiveClass), e.dynamicBullets) {
                                    for (var p = d.eq(a), f = d.eq(l), m = a; m <= l; m += 1) d.eq(m).addClass(e.bulletActiveClass + "-main");
                                    if (this.params.loop)
                                        if (c >= d.length - e.dynamicMainBullets) {
                                            for (var g = e.dynamicMainBullets; g >= 0; g -= 1) d.eq(d.length - g).addClass(e.bulletActiveClass + "-main");
                                            d.eq(d.length - e.dynamicMainBullets - 1).addClass(e.bulletActiveClass + "-prev")
                                        } else p.prev().addClass(e.bulletActiveClass + "-prev").prev().addClass(e.bulletActiveClass + "-prev-prev"), f.next().addClass(e.bulletActiveClass + "-next").next().addClass(e.bulletActiveClass + "-next-next");
                                    else p.prev().addClass(e.bulletActiveClass + "-prev").prev().addClass(e.bulletActiveClass + "-prev-prev"), f.next().addClass(e.bulletActiveClass + "-next").next().addClass(e.bulletActiveClass + "-next-next")
                                }
                            }
                            if (e.dynamicBullets) {
                                var v = Math.min(d.length, e.dynamicMainBullets + 4),
                                    y = (this.pagination.bulletSize * v - this.pagination.bulletSize) / 2 - h * this.pagination.bulletSize,
                                    w = t ? "right" : "left";
                                d.css(this.isHorizontal() ? w : "top", y + "px")
                            }
                        }
                        if ("fraction" === e.type && (r.find("." + e.currentClass).text(e.formatFractionCurrent(i + 1)), r.find("." + e.totalClass).text(e.formatFractionTotal(o))), "progressbar" === e.type) {
                            var b;
                            b = e.progressbarOpposite ? this.isHorizontal() ? "vertical" : "horizontal" : this.isHorizontal() ? "horizontal" : "vertical";
                            var T = (i + 1) / o,
                                _ = 1,
                                S = 1;
                            "horizontal" === b ? _ = T : S = T, r.find("." + e.progressbarFillClass).transform("translate3d(0,0,0) scaleX(" + _ + ") scaleY(" + S + ")").transition(this.params.speed)
                        }
                        "custom" === e.type && e.renderCustom ? (r.html(e.renderCustom(this, i + 1, o)), this.emit("paginationRender", this, r[0])) : this.emit("paginationUpdate", this, r[0]), r[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](e.lockClass)
                    }
                },
                render: function() {
                    var t = this.params.pagination;
                    if (t.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
                        var e = this.virtual && this.params.virtual.enabled ? this.virtual.slides.length : this.slides.length,
                            i = this.pagination.$el,
                            n = "";
                        if ("bullets" === t.type) {
                            for (var s = this.params.loop ? Math.ceil((e - 2 * this.loopedSlides) / this.params.slidesPerGroup) : this.snapGrid.length, r = 0; r < s; r += 1) t.renderBullet ? n += t.renderBullet.call(this, r, t.bulletClass) : n += "<" + t.bulletElement + ' class="' + t.bulletClass + '"></' + t.bulletElement + ">";
                            i.html(n), this.pagination.bullets = i.find("." + t.bulletClass)
                        }
                        "fraction" === t.type && (n = t.renderFraction ? t.renderFraction.call(this, t.currentClass, t.totalClass) : '<span class="' + t.currentClass + '"></span> <span class="' + t.totalClass + '"></span>', i.html(n)), "progressbar" === t.type && (n = t.renderProgressbar ? t.renderProgressbar.call(this, t.progressbarFillClass) : '<span class="' + t.progressbarFillClass + '"></span>', i.html(n)), "custom" !== t.type && this.emit("paginationRender", this.pagination.$el[0])
                    }
                },
                init: function() {
                    var t = this,
                        e = t.params.pagination;
                    if (e.el) {
                        var i = n(e.el);
                        0 !== i.length && (t.params.uniqueNavElements && "string" == typeof e.el && i.length > 1 && 1 === t.$el.find(e.el).length && (i = t.$el.find(e.el)), "bullets" === e.type && e.clickable && i.addClass(e.clickableClass), i.addClass(e.modifierClass + e.type), "bullets" === e.type && e.dynamicBullets && (i.addClass("" + e.modifierClass + e.type + "-dynamic"), t.pagination.dynamicBulletIndex = 0, e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)), "progressbar" === e.type && e.progressbarOpposite && i.addClass(e.progressbarOppositeClass), e.clickable && i.on("click", "." + e.bulletClass, function(e) {
                            e.preventDefault();
                            var i = n(this).index() * t.params.slidesPerGroup;
                            t.params.loop && (i += t.loopedSlides), t.slideTo(i)
                        }), o.extend(t.pagination, { $el: i, el: i[0] }))
                    }
                },
                destroy: function() {
                    var t = this.params.pagination;
                    if (t.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
                        var e = this.pagination.$el;
                        e.removeClass(t.hiddenClass), e.removeClass(t.modifierClass + t.type), this.pagination.bullets && this.pagination.bullets.removeClass(t.bulletActiveClass), t.clickable && e.off("click", "." + t.bulletClass)
                    }
                }
            },
            it = {
                setTranslate: function() {
                    if (this.params.scrollbar.el && this.scrollbar.el) {
                        var t = this.scrollbar,
                            e = this.rtlTranslate,
                            i = this.progress,
                            n = t.dragSize,
                            s = t.trackSize,
                            r = t.$dragEl,
                            o = t.$el,
                            a = this.params.scrollbar,
                            l = n,
                            h = (s - n) * i;
                        e ? (h = -h) > 0 ? (l = n - h, h = 0) : -h + n > s && (l = s + h) : h < 0 ? (l = n + h, h = 0) : h + n > s && (l = s - h), this.isHorizontal() ? (r.transform("translate3d(" + h + "px, 0, 0)"), r[0].style.width = l + "px") : (r.transform("translate3d(0px, " + h + "px, 0)"), r[0].style.height = l + "px"), a.hide && (clearTimeout(this.scrollbar.timeout), o[0].style.opacity = 1, this.scrollbar.timeout = setTimeout(function() { o[0].style.opacity = 0, o.transition(400) }, 1e3))
                    }
                },
                setTransition: function(t) { this.params.scrollbar.el && this.scrollbar.el && this.scrollbar.$dragEl.transition(t) },
                updateSize: function() {
                    if (this.params.scrollbar.el && this.scrollbar.el) {
                        var t = this.scrollbar,
                            e = t.$dragEl,
                            i = t.$el;
                        e[0].style.width = "", e[0].style.height = "";
                        var n, s = this.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight,
                            r = this.size / this.virtualSize,
                            a = r * (s / this.size);
                        n = "auto" === this.params.scrollbar.dragSize ? s * r : parseInt(this.params.scrollbar.dragSize, 10), this.isHorizontal() ? e[0].style.width = n + "px" : e[0].style.height = n + "px", i[0].style.display = r >= 1 ? "none" : "", this.params.scrollbar.hide && (i[0].style.opacity = 0), o.extend(t, { trackSize: s, divider: r, moveDivider: a, dragSize: n }), t.$el[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](this.params.scrollbar.lockClass)
                    }
                },
                getPointerPosition: function(t) { return this.isHorizontal() ? "touchstart" === t.type || "touchmove" === t.type ? t.targetTouches[0].clientX : t.clientX : "touchstart" === t.type || "touchmove" === t.type ? t.targetTouches[0].clientY : t.clientY },
                setDragPosition: function(t) {
                    var e, i = this.scrollbar,
                        n = this.rtlTranslate,
                        s = i.$el,
                        r = i.dragSize,
                        o = i.trackSize,
                        a = i.dragStartPos;
                    e = (i.getPointerPosition(t) - s.offset()[this.isHorizontal() ? "left" : "top"] - (null !== a ? a : r / 2)) / (o - r), e = Math.max(Math.min(e, 1), 0), n && (e = 1 - e);
                    var l = this.minTranslate() + (this.maxTranslate() - this.minTranslate()) * e;
                    this.updateProgress(l), this.setTranslate(l), this.updateActiveIndex(), this.updateSlidesClasses()
                },
                onDragStart: function(t) {
                    var e = this.params.scrollbar,
                        i = this.scrollbar,
                        n = this.$wrapperEl,
                        s = i.$el,
                        r = i.$dragEl;
                    this.scrollbar.isTouched = !0, this.scrollbar.dragStartPos = t.target === r[0] || t.target === r ? i.getPointerPosition(t) - t.target.getBoundingClientRect()[this.isHorizontal() ? "left" : "top"] : null, t.preventDefault(), t.stopPropagation(), n.transition(100), r.transition(100), i.setDragPosition(t), clearTimeout(this.scrollbar.dragTimeout), s.transition(0), e.hide && s.css("opacity", 1), this.params.cssMode && this.$wrapperEl.css("scroll-snap-type", "none"), this.emit("scrollbarDragStart", t)
                },
                onDragMove: function(t) {
                    var e = this.scrollbar,
                        i = this.$wrapperEl,
                        n = e.$el,
                        s = e.$dragEl;
                    this.scrollbar.isTouched && (t.preventDefault ? t.preventDefault() : t.returnValue = !1, e.setDragPosition(t), i.transition(0), n.transition(0), s.transition(0), this.emit("scrollbarDragMove", t))
                },
                onDragEnd: function(t) {
                    var e = this.params.scrollbar,
                        i = this.scrollbar,
                        n = this.$wrapperEl,
                        s = i.$el;
                    this.scrollbar.isTouched && (this.scrollbar.isTouched = !1, this.params.cssMode && (this.$wrapperEl.css("scroll-snap-type", ""), n.transition("")), e.hide && (clearTimeout(this.scrollbar.dragTimeout), this.scrollbar.dragTimeout = o.nextTick(function() { s.css("opacity", 0), s.transition(400) }, 1e3)), this.emit("scrollbarDragEnd", t), e.snapOnRelease && this.slideToClosest())
                },
                enableDraggable: function() {
                    if (this.params.scrollbar.el) {
                        var e = this.scrollbar,
                            i = this.touchEventsTouch,
                            n = this.touchEventsDesktop,
                            s = this.params,
                            r = e.$el[0],
                            o = !(!a.passiveListener || !s.passiveListeners) && { passive: !1, capture: !1 },
                            l = !(!a.passiveListener || !s.passiveListeners) && { passive: !0, capture: !1 };
                        a.touch ? (r.addEventListener(i.start, this.scrollbar.onDragStart, o), r.addEventListener(i.move, this.scrollbar.onDragMove, o), r.addEventListener(i.end, this.scrollbar.onDragEnd, l)) : (r.addEventListener(n.start, this.scrollbar.onDragStart, o), t.addEventListener(n.move, this.scrollbar.onDragMove, o), t.addEventListener(n.end, this.scrollbar.onDragEnd, l))
                    }
                },
                disableDraggable: function() {
                    if (this.params.scrollbar.el) {
                        var e = this.scrollbar,
                            i = this.touchEventsTouch,
                            n = this.touchEventsDesktop,
                            s = this.params,
                            r = e.$el[0],
                            o = !(!a.passiveListener || !s.passiveListeners) && { passive: !1, capture: !1 },
                            l = !(!a.passiveListener || !s.passiveListeners) && { passive: !0, capture: !1 };
                        a.touch ? (r.removeEventListener(i.start, this.scrollbar.onDragStart, o), r.removeEventListener(i.move, this.scrollbar.onDragMove, o), r.removeEventListener(i.end, this.scrollbar.onDragEnd, l)) : (r.removeEventListener(n.start, this.scrollbar.onDragStart, o), t.removeEventListener(n.move, this.scrollbar.onDragMove, o), t.removeEventListener(n.end, this.scrollbar.onDragEnd, l))
                    }
                },
                init: function() {
                    if (this.params.scrollbar.el) {
                        var t = this.scrollbar,
                            e = this.$el,
                            i = this.params.scrollbar,
                            s = n(i.el);
                        this.params.uniqueNavElements && "string" == typeof i.el && s.length > 1 && 1 === e.find(i.el).length && (s = e.find(i.el));
                        var r = s.find("." + this.params.scrollbar.dragClass);
                        0 === r.length && (r = n('<div class="' + this.params.scrollbar.dragClass + '"></div>'), s.append(r)), o.extend(t, { $el: s, el: s[0], $dragEl: r, dragEl: r[0] }), i.draggable && t.enableDraggable()
                    }
                },
                destroy: function() { this.scrollbar.disableDraggable() }
            },
            nt = {
                setTransform: function(t, e) {
                    var i = this.rtl,
                        s = n(t),
                        r = i ? -1 : 1,
                        o = s.attr("data-swiper-parallax") || "0",
                        a = s.attr("data-swiper-parallax-x"),
                        l = s.attr("data-swiper-parallax-y"),
                        h = s.attr("data-swiper-parallax-scale"),
                        d = s.attr("data-swiper-parallax-opacity");
                    if (a || l ? (a = a || "0", l = l || "0") : this.isHorizontal() ? (a = o, l = "0") : (l = o, a = "0"), a = a.indexOf("%") >= 0 ? parseInt(a, 10) * e * r + "%" : a * e * r + "px", l = l.indexOf("%") >= 0 ? parseInt(l, 10) * e + "%" : l * e + "px", null != d) {
                        var u = d - (d - 1) * (1 - Math.abs(e));
                        s[0].style.opacity = u
                    }
                    if (null == h) s.transform("translate3d(" + a + ", " + l + ", 0px)");
                    else {
                        var c = h - (h - 1) * (1 - Math.abs(e));
                        s.transform("translate3d(" + a + ", " + l + ", 0px) scale(" + c + ")")
                    }
                },
                setTranslate: function() {
                    var t = this,
                        e = t.$el,
                        i = t.slides,
                        s = t.progress,
                        r = t.snapGrid;
                    e.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(function(e, i) { t.parallax.setTransform(i, s) }), i.each(function(e, i) {
                        var o = i.progress;
                        t.params.slidesPerGroup > 1 && "auto" !== t.params.slidesPerView && (o += Math.ceil(e / 2) - s * (r.length - 1)), o = Math.min(Math.max(o, -1), 1), n(i).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(function(e, i) { t.parallax.setTransform(i, o) })
                    })
                },
                setTransition: function(t) {
                    void 0 === t && (t = this.params.speed), this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(function(e, i) {
                        var s = n(i),
                            r = parseInt(s.attr("data-swiper-parallax-duration"), 10) || t;
                        0 === t && (r = 0), s.transition(r)
                    })
                }
            },
            st = {
                getDistanceBetweenTouches: function(t) {
                    if (t.targetTouches.length < 2) return 1;
                    var e = t.targetTouches[0].pageX,
                        i = t.targetTouches[0].pageY,
                        n = t.targetTouches[1].pageX,
                        s = t.targetTouches[1].pageY;
                    return Math.sqrt(Math.pow(n - e, 2) + Math.pow(s - i, 2))
                },
                onGestureStart: function(t) {
                    var e = this.params.zoom,
                        i = this.zoom,
                        s = i.gesture;
                    if (i.fakeGestureTouched = !1, i.fakeGestureMoved = !1, !a.gestures) {
                        if ("touchstart" !== t.type || "touchstart" === t.type && t.targetTouches.length < 2) return;
                        i.fakeGestureTouched = !0, s.scaleStart = st.getDistanceBetweenTouches(t)
                    }
                    s.$slideEl && s.$slideEl.length || (s.$slideEl = n(t.target).closest(".swiper-slide"), 0 === s.$slideEl.length && (s.$slideEl = this.slides.eq(this.activeIndex)), s.$imageEl = s.$slideEl.find("img, svg, canvas"), s.$imageWrapEl = s.$imageEl.parent("." + e.containerClass), s.maxRatio = s.$imageWrapEl.attr("data-swiper-zoom") || e.maxRatio, 0 !== s.$imageWrapEl.length) ? (s.$imageEl.transition(0), this.zoom.isScaling = !0) : s.$imageEl = void 0
                },
                onGestureChange: function(t) {
                    var e = this.params.zoom,
                        i = this.zoom,
                        n = i.gesture;
                    if (!a.gestures) {
                        if ("touchmove" !== t.type || "touchmove" === t.type && t.targetTouches.length < 2) return;
                        i.fakeGestureMoved = !0, n.scaleMove = st.getDistanceBetweenTouches(t)
                    }
                    n.$imageEl && 0 !== n.$imageEl.length && (a.gestures ? i.scale = t.scale * i.currentScale : i.scale = n.scaleMove / n.scaleStart * i.currentScale, i.scale > n.maxRatio && (i.scale = n.maxRatio - 1 + Math.pow(i.scale - n.maxRatio + 1, .5)), i.scale < e.minRatio && (i.scale = e.minRatio + 1 - Math.pow(e.minRatio - i.scale + 1, .5)), n.$imageEl.transform("translate3d(0,0,0) scale(" + i.scale + ")"))
                },
                onGestureEnd: function(t) {
                    var e = this.params.zoom,
                        i = this.zoom,
                        n = i.gesture;
                    if (!a.gestures) {
                        if (!i.fakeGestureTouched || !i.fakeGestureMoved) return;
                        if ("touchend" !== t.type || "touchend" === t.type && t.changedTouches.length < 2 && !O.android) return;
                        i.fakeGestureTouched = !1, i.fakeGestureMoved = !1
                    }
                    n.$imageEl && 0 !== n.$imageEl.length && (i.scale = Math.max(Math.min(i.scale, n.maxRatio), e.minRatio), n.$imageEl.transition(this.params.speed).transform("translate3d(0,0,0) scale(" + i.scale + ")"), i.currentScale = i.scale, i.isScaling = !1, 1 === i.scale && (n.$slideEl = void 0))
                },
                onTouchStart: function(t) {
                    var e = this.zoom,
                        i = e.gesture,
                        n = e.image;
                    i.$imageEl && 0 !== i.$imageEl.length && (n.isTouched || (O.android && t.preventDefault(), n.isTouched = !0, n.touchesStart.x = "touchstart" === t.type ? t.targetTouches[0].pageX : t.pageX, n.touchesStart.y = "touchstart" === t.type ? t.targetTouches[0].pageY : t.pageY))
                },
                onTouchMove: function(t) {
                    var e = this.zoom,
                        i = e.gesture,
                        n = e.image,
                        s = e.velocity;
                    if (i.$imageEl && 0 !== i.$imageEl.length && (this.allowClick = !1, n.isTouched && i.$slideEl)) {
                        n.isMoved || (n.width = i.$imageEl[0].offsetWidth, n.height = i.$imageEl[0].offsetHeight, n.startX = o.getTranslate(i.$imageWrapEl[0], "x") || 0, n.startY = o.getTranslate(i.$imageWrapEl[0], "y") || 0, i.slideWidth = i.$slideEl[0].offsetWidth, i.slideHeight = i.$slideEl[0].offsetHeight, i.$imageWrapEl.transition(0), this.rtl && (n.startX = -n.startX, n.startY = -n.startY));
                        var r = n.width * e.scale,
                            a = n.height * e.scale;
                        if (!(r < i.slideWidth && a < i.slideHeight)) {
                            if (n.minX = Math.min(i.slideWidth / 2 - r / 2, 0), n.maxX = -n.minX, n.minY = Math.min(i.slideHeight / 2 - a / 2, 0), n.maxY = -n.minY, n.touchesCurrent.x = "touchmove" === t.type ? t.targetTouches[0].pageX : t.pageX, n.touchesCurrent.y = "touchmove" === t.type ? t.targetTouches[0].pageY : t.pageY, !n.isMoved && !e.isScaling) { if (this.isHorizontal() && (Math.floor(n.minX) === Math.floor(n.startX) && n.touchesCurrent.x < n.touchesStart.x || Math.floor(n.maxX) === Math.floor(n.startX) && n.touchesCurrent.x > n.touchesStart.x)) return void(n.isTouched = !1); if (!this.isHorizontal() && (Math.floor(n.minY) === Math.floor(n.startY) && n.touchesCurrent.y < n.touchesStart.y || Math.floor(n.maxY) === Math.floor(n.startY) && n.touchesCurrent.y > n.touchesStart.y)) return void(n.isTouched = !1) }
                            t.preventDefault(), t.stopPropagation(), n.isMoved = !0, n.currentX = n.touchesCurrent.x - n.touchesStart.x + n.startX, n.currentY = n.touchesCurrent.y - n.touchesStart.y + n.startY, n.currentX < n.minX && (n.currentX = n.minX + 1 - Math.pow(n.minX - n.currentX + 1, .8)), n.currentX > n.maxX && (n.currentX = n.maxX - 1 + Math.pow(n.currentX - n.maxX + 1, .8)), n.currentY < n.minY && (n.currentY = n.minY + 1 - Math.pow(n.minY - n.currentY + 1, .8)), n.currentY > n.maxY && (n.currentY = n.maxY - 1 + Math.pow(n.currentY - n.maxY + 1, .8)), s.prevPositionX || (s.prevPositionX = n.touchesCurrent.x), s.prevPositionY || (s.prevPositionY = n.touchesCurrent.y), s.prevTime || (s.prevTime = Date.now()), s.x = (n.touchesCurrent.x - s.prevPositionX) / (Date.now() - s.prevTime) / 2, s.y = (n.touchesCurrent.y - s.prevPositionY) / (Date.now() - s.prevTime) / 2, Math.abs(n.touchesCurrent.x - s.prevPositionX) < 2 && (s.x = 0), Math.abs(n.touchesCurrent.y - s.prevPositionY) < 2 && (s.y = 0), s.prevPositionX = n.touchesCurrent.x, s.prevPositionY = n.touchesCurrent.y, s.prevTime = Date.now(), i.$imageWrapEl.transform("translate3d(" + n.currentX + "px, " + n.currentY + "px,0)")
                        }
                    }
                },
                onTouchEnd: function() {
                    var t = this.zoom,
                        e = t.gesture,
                        i = t.image,
                        n = t.velocity;
                    if (e.$imageEl && 0 !== e.$imageEl.length) {
                        if (!i.isTouched || !i.isMoved) return i.isTouched = !1, void(i.isMoved = !1);
                        i.isTouched = !1, i.isMoved = !1;
                        var s = 300,
                            r = 300,
                            o = n.x * s,
                            a = i.currentX + o,
                            l = n.y * r,
                            h = i.currentY + l;
                        0 !== n.x && (s = Math.abs((a - i.currentX) / n.x)), 0 !== n.y && (r = Math.abs((h - i.currentY) / n.y));
                        var d = Math.max(s, r);
                        i.currentX = a, i.currentY = h;
                        var u = i.width * t.scale,
                            c = i.height * t.scale;
                        i.minX = Math.min(e.slideWidth / 2 - u / 2, 0), i.maxX = -i.minX, i.minY = Math.min(e.slideHeight / 2 - c / 2, 0), i.maxY = -i.minY, i.currentX = Math.max(Math.min(i.currentX, i.maxX), i.minX), i.currentY = Math.max(Math.min(i.currentY, i.maxY), i.minY), e.$imageWrapEl.transition(d).transform("translate3d(" + i.currentX + "px, " + i.currentY + "px,0)")
                    }
                },
                onTransitionEnd: function() {
                    var t = this.zoom,
                        e = t.gesture;
                    e.$slideEl && this.previousIndex !== this.activeIndex && (e.$imageEl.transform("translate3d(0,0,0) scale(1)"), e.$imageWrapEl.transform("translate3d(0,0,0)"), t.scale = 1, t.currentScale = 1, e.$slideEl = void 0, e.$imageEl = void 0, e.$imageWrapEl = void 0)
                },
                toggle: function(t) {
                    var e = this.zoom;
                    e.scale && 1 !== e.scale ? e.out() : e.in(t)
                },
                in: function(t) {
                    var e, i, s, r, o, a, l, h, d, u, c, p, f, m, g, v, y = this.zoom,
                        w = this.params.zoom,
                        b = y.gesture,
                        T = y.image;
                    b.$slideEl || (b.$slideEl = this.clickedSlide ? n(this.clickedSlide) : this.slides.eq(this.activeIndex), b.$imageEl = b.$slideEl.find("img, svg, canvas"), b.$imageWrapEl = b.$imageEl.parent("." + w.containerClass)), b.$imageEl && 0 !== b.$imageEl.length && (b.$slideEl.addClass("" + w.zoomedSlideClass), void 0 === T.touchesStart.x && t ? (e = "touchend" === t.type ? t.changedTouches[0].pageX : t.pageX, i = "touchend" === t.type ? t.changedTouches[0].pageY : t.pageY) : (e = T.touchesStart.x, i = T.touchesStart.y), y.scale = b.$imageWrapEl.attr("data-swiper-zoom") || w.maxRatio, y.currentScale = b.$imageWrapEl.attr("data-swiper-zoom") || w.maxRatio, t ? (g = b.$slideEl[0].offsetWidth, v = b.$slideEl[0].offsetHeight, s = b.$slideEl.offset().left + g / 2 - e, r = b.$slideEl.offset().top + v / 2 - i, l = b.$imageEl[0].offsetWidth, h = b.$imageEl[0].offsetHeight, d = l * y.scale, u = h * y.scale, f = -(c = Math.min(g / 2 - d / 2, 0)), m = -(p = Math.min(v / 2 - u / 2, 0)), (o = s * y.scale) < c && (o = c), o > f && (o = f), (a = r * y.scale) < p && (a = p), a > m && (a = m)) : (o = 0, a = 0), b.$imageWrapEl.transition(300).transform("translate3d(" + o + "px, " + a + "px,0)"), b.$imageEl.transition(300).transform("translate3d(0,0,0) scale(" + y.scale + ")"))
                },
                out: function() {
                    var t = this.zoom,
                        e = this.params.zoom,
                        i = t.gesture;
                    i.$slideEl || (i.$slideEl = this.clickedSlide ? n(this.clickedSlide) : this.slides.eq(this.activeIndex), i.$imageEl = i.$slideEl.find("img, svg, canvas"), i.$imageWrapEl = i.$imageEl.parent("." + e.containerClass)), i.$imageEl && 0 !== i.$imageEl.length && (t.scale = 1, t.currentScale = 1, i.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"), i.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"), i.$slideEl.removeClass("" + e.zoomedSlideClass), i.$slideEl = void 0)
                },
                enable: function() {
                    var t = this.zoom;
                    if (!t.enabled) {
                        t.enabled = !0;
                        var e = !("touchstart" !== this.touchEvents.start || !a.passiveListener || !this.params.passiveListeners) && { passive: !0, capture: !1 },
                            i = !a.passiveListener || { passive: !1, capture: !0 };
                        a.gestures ? (this.$wrapperEl.on("gesturestart", ".swiper-slide", t.onGestureStart, e), this.$wrapperEl.on("gesturechange", ".swiper-slide", t.onGestureChange, e), this.$wrapperEl.on("gestureend", ".swiper-slide", t.onGestureEnd, e)) : "touchstart" === this.touchEvents.start && (this.$wrapperEl.on(this.touchEvents.start, ".swiper-slide", t.onGestureStart, e), this.$wrapperEl.on(this.touchEvents.move, ".swiper-slide", t.onGestureChange, i), this.$wrapperEl.on(this.touchEvents.end, ".swiper-slide", t.onGestureEnd, e), this.touchEvents.cancel && this.$wrapperEl.on(this.touchEvents.cancel, ".swiper-slide", t.onGestureEnd, e)), this.$wrapperEl.on(this.touchEvents.move, "." + this.params.zoom.containerClass, t.onTouchMove, i)
                    }
                },
                disable: function() {
                    var t = this.zoom;
                    if (t.enabled) {
                        this.zoom.enabled = !1;
                        var e = !("touchstart" !== this.touchEvents.start || !a.passiveListener || !this.params.passiveListeners) && { passive: !0, capture: !1 },
                            i = !a.passiveListener || { passive: !1, capture: !0 };
                        a.gestures ? (this.$wrapperEl.off("gesturestart", ".swiper-slide", t.onGestureStart, e), this.$wrapperEl.off("gesturechange", ".swiper-slide", t.onGestureChange, e), this.$wrapperEl.off("gestureend", ".swiper-slide", t.onGestureEnd, e)) : "touchstart" === this.touchEvents.start && (this.$wrapperEl.off(this.touchEvents.start, ".swiper-slide", t.onGestureStart, e), this.$wrapperEl.off(this.touchEvents.move, ".swiper-slide", t.onGestureChange, i), this.$wrapperEl.off(this.touchEvents.end, ".swiper-slide", t.onGestureEnd, e), this.touchEvents.cancel && this.$wrapperEl.off(this.touchEvents.cancel, ".swiper-slide", t.onGestureEnd, e)), this.$wrapperEl.off(this.touchEvents.move, "." + this.params.zoom.containerClass, t.onTouchMove, i)
                    }
                }
            },
            rt = {
                loadInSlide: function(t, e) {
                    void 0 === e && (e = !0);
                    var i = this,
                        s = i.params.lazy;
                    if (void 0 !== t && 0 !== i.slides.length) {
                        var r = i.virtual && i.params.virtual.enabled ? i.$wrapperEl.children("." + i.params.slideClass + '[data-swiper-slide-index="' + t + '"]') : i.slides.eq(t),
                            o = r.find("." + s.elementClass + ":not(." + s.loadedClass + "):not(." + s.loadingClass + ")");
                        !r.hasClass(s.elementClass) || r.hasClass(s.loadedClass) || r.hasClass(s.loadingClass) || (o = o.add(r[0])), 0 !== o.length && o.each(function(t, o) {
                            var a = n(o);
                            a.addClass(s.loadingClass);
                            var l = a.attr("data-background"),
                                h = a.attr("data-src"),
                                d = a.attr("data-srcset"),
                                u = a.attr("data-sizes");
                            i.loadImage(a[0], h || l, d, u, !1, function() {
                                if (null != i && i && (!i || i.params) && !i.destroyed) {
                                    if (l ? (a.css("background-image", 'url("' + l + '")'), a.removeAttr("data-background")) : (d && (a.attr("srcset", d), a.removeAttr("data-srcset")), u && (a.attr("sizes", u), a.removeAttr("data-sizes")), h && (a.attr("src", h), a.removeAttr("data-src"))), a.addClass(s.loadedClass).removeClass(s.loadingClass), r.find("." + s.preloaderClass).remove(), i.params.loop && e) {
                                        var t = r.attr("data-swiper-slide-index");
                                        if (r.hasClass(i.params.slideDuplicateClass)) {
                                            var n = i.$wrapperEl.children('[data-swiper-slide-index="' + t + '"]:not(.' + i.params.slideDuplicateClass + ")");
                                            i.lazy.loadInSlide(n.index(), !1)
                                        } else {
                                            var o = i.$wrapperEl.children("." + i.params.slideDuplicateClass + '[data-swiper-slide-index="' + t + '"]');
                                            i.lazy.loadInSlide(o.index(), !1)
                                        }
                                    }
                                    i.emit("lazyImageReady", r[0], a[0])
                                }
                            }), i.emit("lazyImageLoad", r[0], a[0])
                        })
                    }
                },
                load: function() {
                    var t = this,
                        e = t.$wrapperEl,
                        i = t.params,
                        s = t.slides,
                        r = t.activeIndex,
                        o = t.virtual && i.virtual.enabled,
                        a = i.lazy,
                        l = i.slidesPerView;

                    function h(t) { if (o) { if (e.children("." + i.slideClass + '[data-swiper-slide-index="' + t + '"]').length) return !0 } else if (s[t]) return !0; return !1 }

                    function d(t) { return o ? n(t).attr("data-swiper-slide-index") : n(t).index() }
                    if ("auto" === l && (l = 0), t.lazy.initialImageLoaded || (t.lazy.initialImageLoaded = !0), t.params.watchSlidesVisibility) e.children("." + i.slideVisibleClass).each(function(e, i) {
                        var s = o ? n(i).attr("data-swiper-slide-index") : n(i).index();
                        t.lazy.loadInSlide(s)
                    });
                    else if (l > 1)
                        for (var u = r; u < r + l; u += 1) h(u) && t.lazy.loadInSlide(u);
                    else t.lazy.loadInSlide(r);
                    if (a.loadPrevNext)
                        if (l > 1 || a.loadPrevNextAmount && a.loadPrevNextAmount > 1) { for (var c = a.loadPrevNextAmount, p = l, f = Math.min(r + p + Math.max(c, p), s.length), m = Math.max(r - Math.max(p, c), 0), g = r + l; g < f; g += 1) h(g) && t.lazy.loadInSlide(g); for (var v = m; v < r; v += 1) h(v) && t.lazy.loadInSlide(v) } else {
                            var y = e.children("." + i.slideNextClass);
                            y.length > 0 && t.lazy.loadInSlide(d(y));
                            var w = e.children("." + i.slidePrevClass);
                            w.length > 0 && t.lazy.loadInSlide(d(w))
                        }
                }
            },
            ot = {
                LinearSpline: function(t, e) { var i, n, s, r, o; return this.x = t, this.y = e, this.lastIndex = t.length - 1, this.interpolate = function(t) { return t ? (o = function(t, e) { for (n = -1, i = t.length; i - n > 1;) t[s = i + n >> 1] <= e ? n = s : i = s; return i }(this.x, t), r = o - 1, (t - this.x[r]) * (this.y[o] - this.y[r]) / (this.x[o] - this.x[r]) + this.y[r]) : 0 }, this },
                getInterpolateFunction: function(t) { this.controller.spline || (this.controller.spline = this.params.loop ? new ot.LinearSpline(this.slidesGrid, t.slidesGrid) : new ot.LinearSpline(this.snapGrid, t.snapGrid)) },
                setTranslate: function(t, e) {
                    var i, n, s = this,
                        r = s.controller.control;

                    function o(t) { var e = s.rtlTranslate ? -s.translate : s.translate; "slide" === s.params.controller.by && (s.controller.getInterpolateFunction(t), n = -s.controller.spline.interpolate(-e)), n && "container" !== s.params.controller.by || (i = (t.maxTranslate() - t.minTranslate()) / (s.maxTranslate() - s.minTranslate()), n = (e - s.minTranslate()) * i + t.minTranslate()), s.params.controller.inverse && (n = t.maxTranslate() - n), t.updateProgress(n), t.setTranslate(n, s), t.updateActiveIndex(), t.updateSlidesClasses() }
                    if (Array.isArray(r))
                        for (var a = 0; a < r.length; a += 1) r[a] !== e && r[a] instanceof F && o(r[a]);
                    else r instanceof F && e !== r && o(r)
                },
                setTransition: function(t, e) {
                    var i, n = this,
                        s = n.controller.control;

                    function r(e) { e.setTransition(t, n), 0 !== t && (e.transitionStart(), e.params.autoHeight && o.nextTick(function() { e.updateAutoHeight() }), e.$wrapperEl.transitionEnd(function() { s && (e.params.loop && "slide" === n.params.controller.by && e.loopFix(), e.transitionEnd()) })) }
                    if (Array.isArray(s))
                        for (i = 0; i < s.length; i += 1) s[i] !== e && s[i] instanceof F && r(s[i]);
                    else s instanceof F && e !== s && r(s)
                }
            },
            at = {
                makeElFocusable: function(t) { return t.attr("tabIndex", "0"), t },
                addElRole: function(t, e) { return t.attr("role", e), t },
                addElLabel: function(t, e) { return t.attr("aria-label", e), t },
                disableEl: function(t) { return t.attr("aria-disabled", !0), t },
                enableEl: function(t) { return t.attr("aria-disabled", !1), t },
                onEnterKey: function(t) {
                    var e = this.params.a11y;
                    if (13 === t.keyCode) {
                        var i = n(t.target);
                        this.navigation && this.navigation.$nextEl && i.is(this.navigation.$nextEl) && (this.isEnd && !this.params.loop || this.slideNext(), this.isEnd ? this.a11y.notify(e.lastSlideMessage) : this.a11y.notify(e.nextSlideMessage)), this.navigation && this.navigation.$prevEl && i.is(this.navigation.$prevEl) && (this.isBeginning && !this.params.loop || this.slidePrev(), this.isBeginning ? this.a11y.notify(e.firstSlideMessage) : this.a11y.notify(e.prevSlideMessage)), this.pagination && i.is("." + this.params.pagination.bulletClass) && i[0].click()
                    }
                },
                notify: function(t) {
                    var e = this.a11y.liveRegion;
                    0 !== e.length && (e.html(""), e.html(t))
                },
                updateNavigation: function() {
                    if (!this.params.loop) {
                        var t = this.navigation,
                            e = t.$nextEl,
                            i = t.$prevEl;
                        i && i.length > 0 && (this.isBeginning ? this.a11y.disableEl(i) : this.a11y.enableEl(i)), e && e.length > 0 && (this.isEnd ? this.a11y.disableEl(e) : this.a11y.enableEl(e))
                    }
                },
                updatePagination: function() {
                    var t = this,
                        e = t.params.a11y;
                    t.pagination && t.params.pagination.clickable && t.pagination.bullets && t.pagination.bullets.length && t.pagination.bullets.each(function(i, s) {
                        var r = n(s);
                        t.a11y.makeElFocusable(r), t.a11y.addElRole(r, "button"), t.a11y.addElLabel(r, e.paginationBulletMessage.replace(/{{index}}/, r.index() + 1))
                    })
                },
                init: function() {
                    this.$el.append(this.a11y.liveRegion);
                    var t, e, i = this.params.a11y;
                    this.navigation && this.navigation.$nextEl && (t = this.navigation.$nextEl), this.navigation && this.navigation.$prevEl && (e = this.navigation.$prevEl), t && (this.a11y.makeElFocusable(t), this.a11y.addElRole(t, "button"), this.a11y.addElLabel(t, i.nextSlideMessage), t.on("keydown", this.a11y.onEnterKey)), e && (this.a11y.makeElFocusable(e), this.a11y.addElRole(e, "button"), this.a11y.addElLabel(e, i.prevSlideMessage), e.on("keydown", this.a11y.onEnterKey)), this.pagination && this.params.pagination.clickable && this.pagination.bullets && this.pagination.bullets.length && this.pagination.$el.on("keydown", "." + this.params.pagination.bulletClass, this.a11y.onEnterKey)
                },
                destroy: function() {
                    var t, e;
                    this.a11y.liveRegion && this.a11y.liveRegion.length > 0 && this.a11y.liveRegion.remove(), this.navigation && this.navigation.$nextEl && (t = this.navigation.$nextEl), this.navigation && this.navigation.$prevEl && (e = this.navigation.$prevEl), t && t.off("keydown", this.a11y.onEnterKey), e && e.off("keydown", this.a11y.onEnterKey), this.pagination && this.params.pagination.clickable && this.pagination.bullets && this.pagination.bullets.length && this.pagination.$el.off("keydown", "." + this.params.pagination.bulletClass, this.a11y.onEnterKey)
                }
            },
            lt = {
                init: function() {
                    if (this.params.history) {
                        if (!e.history || !e.history.pushState) return this.params.history.enabled = !1, void(this.params.hashNavigation.enabled = !0);
                        var t = this.history;
                        t.initialized = !0, t.paths = lt.getPathValues(), (t.paths.key || t.paths.value) && (t.scrollToSlide(0, t.paths.value, this.params.runCallbacksOnInit), this.params.history.replaceState || e.addEventListener("popstate", this.history.setHistoryPopState))
                    }
                },
                destroy: function() { this.params.history.replaceState || e.removeEventListener("popstate", this.history.setHistoryPopState) },
                setHistoryPopState: function() { this.history.paths = lt.getPathValues(), this.history.scrollToSlide(this.params.speed, this.history.paths.value, !1) },
                getPathValues: function() {
                    var t = e.location.pathname.slice(1).split("http://innovationplans.com/").filter(function(t) { return "" !== t }),
                        i = t.length;
                    return { key: t[i - 2], value: t[i - 1] }
                },
                setHistory: function(t, i) {
                    if (this.history.initialized && this.params.history.enabled) {
                        var n = this.slides.eq(i),
                            s = lt.slugify(n.attr("data-history"));
                        e.location.pathname.includes(t) || (s = t + "/" + s);
                        var r = e.history.state;
                        r && r.value === s || (this.params.history.replaceState ? e.history.replaceState({ value: s }, null, s) : e.history.pushState({ value: s }, null, s))
                    }
                },
                slugify: function(t) { return t.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "") },
                scrollToSlide: function(t, e, i) {
                    if (e)
                        for (var n = 0, s = this.slides.length; n < s; n += 1) {
                            var r = this.slides.eq(n);
                            if (lt.slugify(r.attr("data-history")) === e && !r.hasClass(this.params.slideDuplicateClass)) {
                                var o = r.index();
                                this.slideTo(o, t, i)
                            }
                        } else this.slideTo(0, t, i)
                }
            },
            ht = {
                onHashCange: function() {
                    var e = t.location.hash.replace("#", "");
                    if (e !== this.slides.eq(this.activeIndex).attr("data-hash")) {
                        var i = this.$wrapperEl.children("." + this.params.slideClass + '[data-hash="' + e + '"]').index();
                        if (void 0 === i) return;
                        this.slideTo(i)
                    }
                },
                setHash: function() {
                    if (this.hashNavigation.initialized && this.params.hashNavigation.enabled)
                        if (this.params.hashNavigation.replaceState && e.history && e.history.replaceState) e.history.replaceState(null, null, "#" + this.slides.eq(this.activeIndex).attr("data-hash") || "");
                        else {
                            var i = this.slides.eq(this.activeIndex),
                                n = i.attr("data-hash") || i.attr("data-history");
                            t.location.hash = n || ""
                        }
                },
                init: function() {
                    if (!(!this.params.hashNavigation.enabled || this.params.history && this.params.history.enabled)) {
                        this.hashNavigation.initialized = !0;
                        var i = t.location.hash.replace("#", "");
                        if (i)
                            for (var s = 0, r = this.slides.length; s < r; s += 1) {
                                var o = this.slides.eq(s);
                                if ((o.attr("data-hash") || o.attr("data-history")) === i && !o.hasClass(this.params.slideDuplicateClass)) {
                                    var a = o.index();
                                    this.slideTo(a, 0, this.params.runCallbacksOnInit, !0)
                                }
                            }
                        this.params.hashNavigation.watchState && n(e).on("hashchange", this.hashNavigation.onHashCange)
                    }
                },
                destroy: function() { this.params.hashNavigation.watchState && n(e).off("hashchange", this.hashNavigation.onHashCange) }
            },
            dt = {
                run: function() {
                    var t = this,
                        e = t.slides.eq(t.activeIndex),
                        i = t.params.autoplay.delay;
                    e.attr("data-swiper-autoplay") && (i = e.attr("data-swiper-autoplay") || t.params.autoplay.delay), clearTimeout(t.autoplay.timeout), t.autoplay.timeout = o.nextTick(function() { t.params.autoplay.reverseDirection ? t.params.loop ? (t.loopFix(), t.slidePrev(t.params.speed, !0, !0), t.emit("autoplay")) : t.isBeginning ? t.params.autoplay.stopOnLastSlide ? t.autoplay.stop() : (t.slideTo(t.slides.length - 1, t.params.speed, !0, !0), t.emit("autoplay")) : (t.slidePrev(t.params.speed, !0, !0), t.emit("autoplay")) : t.params.loop ? (t.loopFix(), t.slideNext(t.params.speed, !0, !0), t.emit("autoplay")) : t.isEnd ? t.params.autoplay.stopOnLastSlide ? t.autoplay.stop() : (t.slideTo(0, t.params.speed, !0, !0), t.emit("autoplay")) : (t.slideNext(t.params.speed, !0, !0), t.emit("autoplay")), t.params.cssMode && t.autoplay.running && t.autoplay.run() }, i)
                },
                start: function() { return void 0 === this.autoplay.timeout && !this.autoplay.running && (this.autoplay.running = !0, this.emit("autoplayStart"), this.autoplay.run(), !0) },
                stop: function() { return !!this.autoplay.running && void 0 !== this.autoplay.timeout && (this.autoplay.timeout && (clearTimeout(this.autoplay.timeout), this.autoplay.timeout = void 0), this.autoplay.running = !1, this.emit("autoplayStop"), !0) },
                pause: function(t) { this.autoplay.running && (this.autoplay.paused || (this.autoplay.timeout && clearTimeout(this.autoplay.timeout), this.autoplay.paused = !0, 0 !== t && this.params.autoplay.waitForTransition ? (this.$wrapperEl[0].addEventListener("transitionend", this.autoplay.onTransitionEnd), this.$wrapperEl[0].addEventListener("webkitTransitionEnd", this.autoplay.onTransitionEnd)) : (this.autoplay.paused = !1, this.autoplay.run()))) }
            },
            ut = {
                setTranslate: function() {
                    for (var t = this.slides, e = 0; e < t.length; e += 1) {
                        var i = this.slides.eq(e),
                            n = -i[0].swiperSlideOffset;
                        this.params.virtualTranslate || (n -= this.translate);
                        var s = 0;
                        this.isHorizontal() || (s = n, n = 0);
                        var r = this.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(i[0].progress), 0) : 1 + Math.min(Math.max(i[0].progress, -1), 0);
                        i.css({ opacity: r }).transform("translate3d(" + n + "px, " + s + "px, 0px)")
                    }
                },
                setTransition: function(t) {
                    var e = this,
                        i = e.slides,
                        n = e.$wrapperEl;
                    if (i.transition(t), e.params.virtualTranslate && 0 !== t) {
                        var s = !1;
                        i.transitionEnd(function() { if (!s && e && !e.destroyed) { s = !0, e.animating = !1; for (var t = ["webkitTransitionEnd", "transitionend"], i = 0; i < t.length; i += 1) n.trigger(t[i]) } })
                    }
                }
            },
            ct = {
                setTranslate: function() {
                    var t, e = this.$el,
                        i = this.$wrapperEl,
                        s = this.slides,
                        r = this.width,
                        o = this.height,
                        a = this.rtlTranslate,
                        l = this.size,
                        h = this.params.cubeEffect,
                        d = this.isHorizontal(),
                        u = this.virtual && this.params.virtual.enabled,
                        c = 0;
                    h.shadow && (d ? (0 === (t = i.find(".swiper-cube-shadow")).length && (t = n('<div class="swiper-cube-shadow"></div>'), i.append(t)), t.css({ height: r + "px" })) : 0 === (t = e.find(".swiper-cube-shadow")).length && (t = n('<div class="swiper-cube-shadow"></div>'), e.append(t)));
                    for (var p = 0; p < s.length; p += 1) {
                        var f = s.eq(p),
                            m = p;
                        u && (m = parseInt(f.attr("data-swiper-slide-index"), 10));
                        var g = 90 * m,
                            v = Math.floor(g / 360);
                        a && (g = -g, v = Math.floor(-g / 360));
                        var y = Math.max(Math.min(f[0].progress, 1), -1),
                            w = 0,
                            b = 0,
                            T = 0;
                        m % 4 == 0 ? (w = 4 * -v * l, T = 0) : (m - 1) % 4 == 0 ? (w = 0, T = 4 * -v * l) : (m - 2) % 4 == 0 ? (w = l + 4 * v * l, T = l) : (m - 3) % 4 == 0 && (w = -l, T = 3 * l + 4 * l * v), a && (w = -w), d || (b = w, w = 0);
                        var _ = "rotateX(" + (d ? 0 : -g) + "deg) rotateY(" + (d ? g : 0) + "deg) translate3d(" + w + "px, " + b + "px, " + T + "px)";
                        if (y <= 1 && y > -1 && (c = 90 * m + 90 * y, a && (c = 90 * -m - 90 * y)), f.transform(_), h.slideShadows) {
                            var S = d ? f.find(".swiper-slide-shadow-left") : f.find(".swiper-slide-shadow-top"),
                                x = d ? f.find(".swiper-slide-shadow-right") : f.find(".swiper-slide-shadow-bottom");
                            0 === S.length && (S = n('<div class="swiper-slide-shadow-' + (d ? "left" : "top") + '"></div>'), f.append(S)), 0 === x.length && (x = n('<div class="swiper-slide-shadow-' + (d ? "right" : "bottom") + '"></div>'), f.append(x)), S.length && (S[0].style.opacity = Math.max(-y, 0)), x.length && (x[0].style.opacity = Math.max(y, 0))
                        }
                    }
                    if (i.css({ "-webkit-transform-origin": "50% 50% -" + l / 2 + "px", "-moz-transform-origin": "50% 50% -" + l / 2 + "px", "-ms-transform-origin": "50% 50% -" + l / 2 + "px", "transform-origin": "50% 50% -" + l / 2 + "px" }), h.shadow)
                        if (d) t.transform("translate3d(0px, " + (r / 2 + h.shadowOffset) + "px, " + -r / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + h.shadowScale + ")");
                        else {
                            var E = Math.abs(c) - 90 * Math.floor(Math.abs(c) / 90),
                                C = 1.5 - (Math.sin(2 * E * Math.PI / 360) / 2 + Math.cos(2 * E * Math.PI / 360) / 2),
                                k = h.shadowScale,
                                I = h.shadowScale / C,
                                A = h.shadowOffset;
                            t.transform("scale3d(" + k + ", 1, " + I + ") translate3d(0px, " + (o / 2 + A) + "px, " + -o / 2 / I + "px) rotateX(-90deg)")
                        }
                    var M = q.isSafari || q.isUiWebView ? -l / 2 : 0;
                    i.transform("translate3d(0px,0," + M + "px) rotateX(" + (this.isHorizontal() ? 0 : c) + "deg) rotateY(" + (this.isHorizontal() ? -c : 0) + "deg)")
                },
                setTransition: function(t) {
                    var e = this.$el;
                    this.slides.transition(t).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(t), this.params.cubeEffect.shadow && !this.isHorizontal() && e.find(".swiper-cube-shadow").transition(t)
                }
            },
            pt = {
                setTranslate: function() {
                    for (var t = this.slides, e = this.rtlTranslate, i = 0; i < t.length; i += 1) {
                        var s = t.eq(i),
                            r = s[0].progress;
                        this.params.flipEffect.limitRotation && (r = Math.max(Math.min(s[0].progress, 1), -1));
                        var o = -180 * r,
                            a = 0,
                            l = -s[0].swiperSlideOffset,
                            h = 0;
                        if (this.isHorizontal() ? e && (o = -o) : (h = l, l = 0, a = -o, o = 0), s[0].style.zIndex = -Math.abs(Math.round(r)) + t.length, this.params.flipEffect.slideShadows) {
                            var d = this.isHorizontal() ? s.find(".swiper-slide-shadow-left") : s.find(".swiper-slide-shadow-top"),
                                u = this.isHorizontal() ? s.find(".swiper-slide-shadow-right") : s.find(".swiper-slide-shadow-bottom");
                            0 === d.length && (d = n('<div class="swiper-slide-shadow-' + (this.isHorizontal() ? "left" : "top") + '"></div>'), s.append(d)), 0 === u.length && (u = n('<div class="swiper-slide-shadow-' + (this.isHorizontal() ? "right" : "bottom") + '"></div>'), s.append(u)), d.length && (d[0].style.opacity = Math.max(-r, 0)), u.length && (u[0].style.opacity = Math.max(r, 0))
                        }
                        s.transform("translate3d(" + l + "px, " + h + "px, 0px) rotateX(" + a + "deg) rotateY(" + o + "deg)")
                    }
                },
                setTransition: function(t) {
                    var e = this,
                        i = e.slides,
                        n = e.activeIndex,
                        s = e.$wrapperEl;
                    if (i.transition(t).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(t), e.params.virtualTranslate && 0 !== t) {
                        var r = !1;
                        i.eq(n).transitionEnd(function() { if (!r && e && !e.destroyed) { r = !0, e.animating = !1; for (var t = ["webkitTransitionEnd", "transitionend"], i = 0; i < t.length; i += 1) s.trigger(t[i]) } })
                    }
                }
            },
            ft = {
                setTranslate: function() {
                    for (var t = this.width, e = this.height, i = this.slides, s = this.$wrapperEl, r = this.slidesSizesGrid, o = this.params.coverflowEffect, l = this.isHorizontal(), h = this.translate, d = l ? t / 2 - h : e / 2 - h, u = l ? o.rotate : -o.rotate, c = o.depth, p = 0, f = i.length; p < f; p += 1) {
                        var m = i.eq(p),
                            g = r[p],
                            v = (d - m[0].swiperSlideOffset - g / 2) / g * o.modifier,
                            y = l ? u * v : 0,
                            w = l ? 0 : u * v,
                            b = -c * Math.abs(v),
                            T = l ? 0 : o.stretch * v,
                            _ = l ? o.stretch * v : 0;
                        Math.abs(_) < .001 && (_ = 0), Math.abs(T) < .001 && (T = 0), Math.abs(b) < .001 && (b = 0), Math.abs(y) < .001 && (y = 0), Math.abs(w) < .001 && (w = 0);
                        var S = "translate3d(" + _ + "px," + T + "px," + b + "px)  rotateX(" + w + "deg) rotateY(" + y + "deg)";
                        if (m.transform(S), m[0].style.zIndex = 1 - Math.abs(Math.round(v)), o.slideShadows) {
                            var x = l ? m.find(".swiper-slide-shadow-left") : m.find(".swiper-slide-shadow-top"),
                                E = l ? m.find(".swiper-slide-shadow-right") : m.find(".swiper-slide-shadow-bottom");
                            0 === x.length && (x = n('<div class="swiper-slide-shadow-' + (l ? "left" : "top") + '"></div>'), m.append(x)), 0 === E.length && (E = n('<div class="swiper-slide-shadow-' + (l ? "right" : "bottom") + '"></div>'), m.append(E)), x.length && (x[0].style.opacity = v > 0 ? v : 0), E.length && (E[0].style.opacity = -v > 0 ? -v : 0)
                        }
                    }(a.pointerEvents || a.prefixedPointerEvents) && (s[0].style.perspectiveOrigin = d + "px 50%")
                },
                setTransition: function(t) { this.slides.transition(t).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(t) }
            },
            mt = {
                init: function() {
                    var t = this.params.thumbs,
                        e = this.constructor;
                    t.swiper instanceof e ? (this.thumbs.swiper = t.swiper, o.extend(this.thumbs.swiper.originalParams, { watchSlidesProgress: !0, slideToClickedSlide: !1 }), o.extend(this.thumbs.swiper.params, { watchSlidesProgress: !0, slideToClickedSlide: !1 })) : o.isObject(t.swiper) && (this.thumbs.swiper = new e(o.extend({}, t.swiper, { watchSlidesVisibility: !0, watchSlidesProgress: !0, slideToClickedSlide: !1 })), this.thumbs.swiperCreated = !0), this.thumbs.swiper.$el.addClass(this.params.thumbs.thumbsContainerClass), this.thumbs.swiper.on("tap", this.thumbs.onThumbClick)
                },
                onThumbClick: function() {
                    var t = this.thumbs.swiper;
                    if (t) {
                        var e = t.clickedIndex,
                            i = t.clickedSlide;
                        if (!(i && n(i).hasClass(this.params.thumbs.slideThumbActiveClass) || null == e)) {
                            var s;
                            if (s = t.params.loop ? parseInt(n(t.clickedSlide).attr("data-swiper-slide-index"), 10) : e, this.params.loop) {
                                var r = this.activeIndex;
                                this.slides.eq(r).hasClass(this.params.slideDuplicateClass) && (this.loopFix(), this._clientLeft = this.$wrapperEl[0].clientLeft, r = this.activeIndex);
                                var o = this.slides.eq(r).prevAll('[data-swiper-slide-index="' + s + '"]').eq(0).index(),
                                    a = this.slides.eq(r).nextAll('[data-swiper-slide-index="' + s + '"]').eq(0).index();
                                s = void 0 === o ? a : void 0 === a ? o : a - r < r - o ? a : o
                            }
                            this.slideTo(s)
                        }
                    }
                },
                update: function(t) {
                    var e = this.thumbs.swiper;
                    if (e) {
                        var i = "auto" === e.params.slidesPerView ? e.slidesPerViewDynamic() : e.params.slidesPerView;
                        if (this.realIndex !== e.realIndex) {
                            var n, s = e.activeIndex;
                            if (e.params.loop) {
                                e.slides.eq(s).hasClass(e.params.slideDuplicateClass) && (e.loopFix(), e._clientLeft = e.$wrapperEl[0].clientLeft, s = e.activeIndex);
                                var r = e.slides.eq(s).prevAll('[data-swiper-slide-index="' + this.realIndex + '"]').eq(0).index(),
                                    o = e.slides.eq(s).nextAll('[data-swiper-slide-index="' + this.realIndex + '"]').eq(0).index();
                                n = void 0 === r ? o : void 0 === o ? r : o - s == s - r ? s : o - s < s - r ? o : r
                            } else n = this.realIndex;
                            e.visibleSlidesIndexes && e.visibleSlidesIndexes.indexOf(n) < 0 && (e.params.centeredSlides ? n = n > s ? n - Math.floor(i / 2) + 1 : n + Math.floor(i / 2) - 1 : n > s && (n = n - i + 1), e.slideTo(n, t ? 0 : void 0))
                        }
                        var a = 1,
                            l = this.params.thumbs.slideThumbActiveClass;
                        if (this.params.slidesPerView > 1 && !this.params.centeredSlides && (a = this.params.slidesPerView), e.slides.removeClass(l), e.params.loop || e.params.virtual && e.params.virtual.enabled)
                            for (var h = 0; h < a; h += 1) e.$wrapperEl.children('[data-swiper-slide-index="' + (this.realIndex + h) + '"]').addClass(l);
                        else
                            for (var d = 0; d < a; d += 1) e.slides.eq(this.realIndex + d).addClass(l)
                    }
                }
            },
            gt = [W, B, V, Y, U, Q, Z, { name: "mousewheel", params: { mousewheel: { enabled: !1, releaseOnEdges: !1, invert: !1, forceToAxis: !1, sensitivity: 1, eventsTarged: "container" } }, create: function() { o.extend(this, { mousewheel: { enabled: !1, enable: J.enable.bind(this), disable: J.disable.bind(this), handle: J.handle.bind(this), handleMouseEnter: J.handleMouseEnter.bind(this), handleMouseLeave: J.handleMouseLeave.bind(this), lastScrollTime: o.now(), lastEventBeforeSnap: void 0, recentWheelEvents: [] } }) }, on: { init: function() {!this.params.mousewheel.enabled && this.params.cssMode && this.mousewheel.disable(), this.params.mousewheel.enabled && this.mousewheel.enable() }, destroy: function() { this.params.cssMode && this.mousewheel.enable(), this.mousewheel.enabled && this.mousewheel.disable() } } }, {
                name: "navigation",
                params: { navigation: { nextEl: null, prevEl: null, hideOnClick: !1, disabledClass: "swiper-button-disabled", hiddenClass: "swiper-button-hidden", lockClass: "swiper-button-lock" } },
                create: function() { o.extend(this, { navigation: { init: tt.init.bind(this), update: tt.update.bind(this), destroy: tt.destroy.bind(this), onNextClick: tt.onNextClick.bind(this), onPrevClick: tt.onPrevClick.bind(this) } }) },
                on: {
                    init: function() { this.navigation.init(), this.navigation.update() },
                    toEdge: function() { this.navigation.update() },
                    fromEdge: function() { this.navigation.update() },
                    destroy: function() { this.navigation.destroy() },
                    click: function(t) {
                        var e, i = this.navigation,
                            s = i.$nextEl,
                            r = i.$prevEl;
                        !this.params.navigation.hideOnClick || n(t.target).is(r) || n(t.target).is(s) || (s ? e = s.hasClass(this.params.navigation.hiddenClass) : r && (e = r.hasClass(this.params.navigation.hiddenClass)), !0 === e ? this.emit("navigationShow", this) : this.emit("navigationHide", this), s && s.toggleClass(this.params.navigation.hiddenClass), r && r.toggleClass(this.params.navigation.hiddenClass))
                    }
                }
            }, { name: "pagination", params: { pagination: { el: null, bulletElement: "span", clickable: !1, hideOnClick: !1, renderBullet: null, renderProgressbar: null, renderFraction: null, renderCustom: null, progressbarOpposite: !1, type: "bullets", dynamicBullets: !1, dynamicMainBullets: 1, formatFractionCurrent: function(t) { return t }, formatFractionTotal: function(t) { return t }, bulletClass: "swiper-pagination-bullet", bulletActiveClass: "swiper-pagination-bullet-active", modifierClass: "swiper-pagination-", currentClass: "swiper-pagination-current", totalClass: "swiper-pagination-total", hiddenClass: "swiper-pagination-hidden", progressbarFillClass: "swiper-pagination-progressbar-fill", progressbarOppositeClass: "swiper-pagination-progressbar-opposite", clickableClass: "swiper-pagination-clickable", lockClass: "swiper-pagination-lock" } }, create: function() { o.extend(this, { pagination: { init: et.init.bind(this), render: et.render.bind(this), update: et.update.bind(this), destroy: et.destroy.bind(this), dynamicBulletIndex: 0 } }) }, on: { init: function() { this.pagination.init(), this.pagination.render(), this.pagination.update() }, activeIndexChange: function() { this.params.loop ? this.pagination.update() : void 0 === this.snapIndex && this.pagination.update() }, snapIndexChange: function() { this.params.loop || this.pagination.update() }, slidesLengthChange: function() { this.params.loop && (this.pagination.render(), this.pagination.update()) }, snapGridLengthChange: function() { this.params.loop || (this.pagination.render(), this.pagination.update()) }, destroy: function() { this.pagination.destroy() }, click: function(t) { this.params.pagination.el && this.params.pagination.hideOnClick && this.pagination.$el.length > 0 && !n(t.target).hasClass(this.params.pagination.bulletClass) && (!0 === this.pagination.$el.hasClass(this.params.pagination.hiddenClass) ? this.emit("paginationShow", this) : this.emit("paginationHide", this), this.pagination.$el.toggleClass(this.params.pagination.hiddenClass)) } } }, { name: "scrollbar", params: { scrollbar: { el: null, dragSize: "auto", hide: !1, draggable: !1, snapOnRelease: !0, lockClass: "swiper-scrollbar-lock", dragClass: "swiper-scrollbar-drag" } }, create: function() { o.extend(this, { scrollbar: { init: it.init.bind(this), destroy: it.destroy.bind(this), updateSize: it.updateSize.bind(this), setTranslate: it.setTranslate.bind(this), setTransition: it.setTransition.bind(this), enableDraggable: it.enableDraggable.bind(this), disableDraggable: it.disableDraggable.bind(this), setDragPosition: it.setDragPosition.bind(this), getPointerPosition: it.getPointerPosition.bind(this), onDragStart: it.onDragStart.bind(this), onDragMove: it.onDragMove.bind(this), onDragEnd: it.onDragEnd.bind(this), isTouched: !1, timeout: null, dragTimeout: null } }) }, on: { init: function() { this.scrollbar.init(), this.scrollbar.updateSize(), this.scrollbar.setTranslate() }, update: function() { this.scrollbar.updateSize() }, resize: function() { this.scrollbar.updateSize() }, observerUpdate: function() { this.scrollbar.updateSize() }, setTranslate: function() { this.scrollbar.setTranslate() }, setTransition: function(t) { this.scrollbar.setTransition(t) }, destroy: function() { this.scrollbar.destroy() } } }, { name: "parallax", params: { parallax: { enabled: !1 } }, create: function() { o.extend(this, { parallax: { setTransform: nt.setTransform.bind(this), setTranslate: nt.setTranslate.bind(this), setTransition: nt.setTransition.bind(this) } }) }, on: { beforeInit: function() { this.params.parallax.enabled && (this.params.watchSlidesProgress = !0, this.originalParams.watchSlidesProgress = !0) }, init: function() { this.params.parallax.enabled && this.parallax.setTranslate() }, setTranslate: function() { this.params.parallax.enabled && this.parallax.setTranslate() }, setTransition: function(t) { this.params.parallax.enabled && this.parallax.setTransition(t) } } }, {
                name: "zoom",
                params: { zoom: { enabled: !1, maxRatio: 3, minRatio: 1, toggle: !0, containerClass: "swiper-zoom-container", zoomedSlideClass: "swiper-slide-zoomed" } },
                create: function() {
                    var t = this,
                        e = { enabled: !1, scale: 1, currentScale: 1, isScaling: !1, gesture: { $slideEl: void 0, slideWidth: void 0, slideHeight: void 0, $imageEl: void 0, $imageWrapEl: void 0, maxRatio: 3 }, image: { isTouched: void 0, isMoved: void 0, currentX: void 0, currentY: void 0, minX: void 0, minY: void 0, maxX: void 0, maxY: void 0, width: void 0, height: void 0, startX: void 0, startY: void 0, touchesStart: {}, touchesCurrent: {} }, velocity: { x: void 0, y: void 0, prevPositionX: void 0, prevPositionY: void 0, prevTime: void 0 } };
                    "onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out".split(" ").forEach(function(i) { e[i] = st[i].bind(t) }), o.extend(t, { zoom: e });
                    var i = 1;
                    Object.defineProperty(t.zoom, "scale", {
                        get: function() { return i },
                        set: function(e) {
                            if (i !== e) {
                                var n = t.zoom.gesture.$imageEl ? t.zoom.gesture.$imageEl[0] : void 0,
                                    s = t.zoom.gesture.$slideEl ? t.zoom.gesture.$slideEl[0] : void 0;
                                t.emit("zoomChange", e, n, s)
                            }
                            i = e
                        }
                    })
                },
                on: { init: function() { this.params.zoom.enabled && this.zoom.enable() }, destroy: function() { this.zoom.disable() }, touchStart: function(t) { this.zoom.enabled && this.zoom.onTouchStart(t) }, touchEnd: function(t) { this.zoom.enabled && this.zoom.onTouchEnd(t) }, doubleTap: function(t) { this.params.zoom.enabled && this.zoom.enabled && this.params.zoom.toggle && this.zoom.toggle(t) }, transitionEnd: function() { this.zoom.enabled && this.params.zoom.enabled && this.zoom.onTransitionEnd() }, slideChange: function() { this.zoom.enabled && this.params.zoom.enabled && this.params.cssMode && this.zoom.onTransitionEnd() } }
            }, { name: "lazy", params: { lazy: { enabled: !1, loadPrevNext: !1, loadPrevNextAmount: 1, loadOnTransitionStart: !1, elementClass: "swiper-lazy", loadingClass: "swiper-lazy-loading", loadedClass: "swiper-lazy-loaded", preloaderClass: "swiper-lazy-preloader" } }, create: function() { o.extend(this, { lazy: { initialImageLoaded: !1, load: rt.load.bind(this), loadInSlide: rt.loadInSlide.bind(this) } }) }, on: { beforeInit: function() { this.params.lazy.enabled && this.params.preloadImages && (this.params.preloadImages = !1) }, init: function() { this.params.lazy.enabled && !this.params.loop && 0 === this.params.initialSlide && this.lazy.load() }, scroll: function() { this.params.freeMode && !this.params.freeModeSticky && this.lazy.load() }, resize: function() { this.params.lazy.enabled && this.lazy.load() }, scrollbarDragMove: function() { this.params.lazy.enabled && this.lazy.load() }, transitionStart: function() { this.params.lazy.enabled && (this.params.lazy.loadOnTransitionStart || !this.params.lazy.loadOnTransitionStart && !this.lazy.initialImageLoaded) && this.lazy.load() }, transitionEnd: function() { this.params.lazy.enabled && !this.params.lazy.loadOnTransitionStart && this.lazy.load() }, slideChange: function() { this.params.lazy.enabled && this.params.cssMode && this.lazy.load() } } }, { name: "controller", params: { controller: { control: void 0, inverse: !1, by: "slide" } }, create: function() { o.extend(this, { controller: { control: this.params.controller.control, getInterpolateFunction: ot.getInterpolateFunction.bind(this), setTranslate: ot.setTranslate.bind(this), setTransition: ot.setTransition.bind(this) } }) }, on: { update: function() { this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline) }, resize: function() { this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline) }, observerUpdate: function() { this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline) }, setTranslate: function(t, e) { this.controller.control && this.controller.setTranslate(t, e) }, setTransition: function(t, e) { this.controller.control && this.controller.setTransition(t, e) } } }, {
                name: "a11y",
                params: { a11y: { enabled: !0, notificationClass: "swiper-notification", prevSlideMessage: "Previous slide", nextSlideMessage: "Next slide", firstSlideMessage: "This is the first slide", lastSlideMessage: "This is the last slide", paginationBulletMessage: "Go to slide {{index}}" } },
                create: function() {
                    var t = this;
                    o.extend(t, { a11y: { liveRegion: n('<span class="' + t.params.a11y.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>') } }), Object.keys(at).forEach(function(e) { t.a11y[e] = at[e].bind(t) })
                },
                on: { init: function() { this.params.a11y.enabled && (this.a11y.init(), this.a11y.updateNavigation()) }, toEdge: function() { this.params.a11y.enabled && this.a11y.updateNavigation() }, fromEdge: function() { this.params.a11y.enabled && this.a11y.updateNavigation() }, paginationUpdate: function() { this.params.a11y.enabled && this.a11y.updatePagination() }, destroy: function() { this.params.a11y.enabled && this.a11y.destroy() } }
            }, { name: "history", params: { history: { enabled: !1, replaceState: !1, key: "slides" } }, create: function() { o.extend(this, { history: { init: lt.init.bind(this), setHistory: lt.setHistory.bind(this), setHistoryPopState: lt.setHistoryPopState.bind(this), scrollToSlide: lt.scrollToSlide.bind(this), destroy: lt.destroy.bind(this) } }) }, on: { init: function() { this.params.history.enabled && this.history.init() }, destroy: function() { this.params.history.enabled && this.history.destroy() }, transitionEnd: function() { this.history.initialized && this.history.setHistory(this.params.history.key, this.activeIndex) }, slideChange: function() { this.history.initialized && this.params.cssMode && this.history.setHistory(this.params.history.key, this.activeIndex) } } }, { name: "hash-navigation", params: { hashNavigation: { enabled: !1, replaceState: !1, watchState: !1 } }, create: function() { o.extend(this, { hashNavigation: { initialized: !1, init: ht.init.bind(this), destroy: ht.destroy.bind(this), setHash: ht.setHash.bind(this), onHashCange: ht.onHashCange.bind(this) } }) }, on: { init: function() { this.params.hashNavigation.enabled && this.hashNavigation.init() }, destroy: function() { this.params.hashNavigation.enabled && this.hashNavigation.destroy() }, transitionEnd: function() { this.hashNavigation.initialized && this.hashNavigation.setHash() }, slideChange: function() { this.hashNavigation.initialized && this.params.cssMode && this.hashNavigation.setHash() } } }, {
                name: "autoplay",
                params: { autoplay: { enabled: !1, delay: 3e3, waitForTransition: !0, disableOnInteraction: !0, stopOnLastSlide: !1, reverseDirection: !1 } },
                create: function() {
                    var t = this;
                    o.extend(t, { autoplay: { running: !1, paused: !1, run: dt.run.bind(t), start: dt.start.bind(t), stop: dt.stop.bind(t), pause: dt.pause.bind(t), onVisibilityChange: function() { "hidden" === document.visibilityState && t.autoplay.running && t.autoplay.pause(), "visible" === document.visibilityState && t.autoplay.paused && (t.autoplay.run(), t.autoplay.paused = !1) }, onTransitionEnd: function(e) { t && !t.destroyed && t.$wrapperEl && e.target === this && (t.$wrapperEl[0].removeEventListener("transitionend", t.autoplay.onTransitionEnd), t.$wrapperEl[0].removeEventListener("webkitTransitionEnd", t.autoplay.onTransitionEnd), t.autoplay.paused = !1, t.autoplay.running ? t.autoplay.run() : t.autoplay.stop()) } } })
                },
                on: { init: function() { this.params.autoplay.enabled && (this.autoplay.start(), document.addEventListener("visibilitychange", this.autoplay.onVisibilityChange)) }, beforeTransitionStart: function(t, e) { this.autoplay.running && (e || !this.params.autoplay.disableOnInteraction ? this.autoplay.pause(t) : this.autoplay.stop()) }, sliderFirstMove: function() { this.autoplay.running && (this.params.autoplay.disableOnInteraction ? this.autoplay.stop() : this.autoplay.pause()) }, touchEnd: function() { this.params.cssMode && this.autoplay.paused && !this.params.autoplay.disableOnInteraction && this.autoplay.run() }, destroy: function() { this.autoplay.running && this.autoplay.stop(), document.removeEventListener("visibilitychange", this.autoplay.onVisibilityChange) } }
            }, {
                name: "effect-fade",
                params: { fadeEffect: { crossFade: !1 } },
                create: function() { o.extend(this, { fadeEffect: { setTranslate: ut.setTranslate.bind(this), setTransition: ut.setTransition.bind(this) } }) },
                on: {
                    beforeInit: function() {
                        if ("fade" === this.params.effect) {
                            this.classNames.push(this.params.containerModifierClass + "fade");
                            var t = { slidesPerView: 1, slidesPerColumn: 1, slidesPerGroup: 1, watchSlidesProgress: !0, spaceBetween: 0, virtualTranslate: !0 };
                            o.extend(this.params, t), o.extend(this.originalParams, t)
                        }
                    },
                    setTranslate: function() { "fade" === this.params.effect && this.fadeEffect.setTranslate() },
                    setTransition: function(t) { "fade" === this.params.effect && this.fadeEffect.setTransition(t) }
                }
            }, {
                name: "effect-cube",
                params: { cubeEffect: { slideShadows: !0, shadow: !0, shadowOffset: 20, shadowScale: .94 } },
                create: function() { o.extend(this, { cubeEffect: { setTranslate: ct.setTranslate.bind(this), setTransition: ct.setTransition.bind(this) } }) },
                on: {
                    beforeInit: function() {
                        if ("cube" === this.params.effect) {
                            this.classNames.push(this.params.containerModifierClass + "cube"), this.classNames.push(this.params.containerModifierClass + "3d");
                            var t = { slidesPerView: 1, slidesPerColumn: 1, slidesPerGroup: 1, watchSlidesProgress: !0, resistanceRatio: 0, spaceBetween: 0, centeredSlides: !1, virtualTranslate: !0 };
                            o.extend(this.params, t), o.extend(this.originalParams, t)
                        }
                    },
                    setTranslate: function() { "cube" === this.params.effect && this.cubeEffect.setTranslate() },
                    setTransition: function(t) { "cube" === this.params.effect && this.cubeEffect.setTransition(t) }
                }
            }, {
                name: "effect-flip",
                params: { flipEffect: { slideShadows: !0, limitRotation: !0 } },
                create: function() { o.extend(this, { flipEffect: { setTranslate: pt.setTranslate.bind(this), setTransition: pt.setTransition.bind(this) } }) },
                on: {
                    beforeInit: function() {
                        if ("flip" === this.params.effect) {
                            this.classNames.push(this.params.containerModifierClass + "flip"), this.classNames.push(this.params.containerModifierClass + "3d");
                            var t = { slidesPerView: 1, slidesPerColumn: 1, slidesPerGroup: 1, watchSlidesProgress: !0, spaceBetween: 0, virtualTranslate: !0 };
                            o.extend(this.params, t), o.extend(this.originalParams, t)
                        }
                    },
                    setTranslate: function() { "flip" === this.params.effect && this.flipEffect.setTranslate() },
                    setTransition: function(t) { "flip" === this.params.effect && this.flipEffect.setTransition(t) }
                }
            }, { name: "effect-coverflow", params: { coverflowEffect: { rotate: 50, stretch: 0, depth: 100, modifier: 1, slideShadows: !0 } }, create: function() { o.extend(this, { coverflowEffect: { setTranslate: ft.setTranslate.bind(this), setTransition: ft.setTransition.bind(this) } }) }, on: { beforeInit: function() { "coverflow" === this.params.effect && (this.classNames.push(this.params.containerModifierClass + "coverflow"), this.classNames.push(this.params.containerModifierClass + "3d"), this.params.watchSlidesProgress = !0, this.originalParams.watchSlidesProgress = !0) }, setTranslate: function() { "coverflow" === this.params.effect && this.coverflowEffect.setTranslate() }, setTransition: function(t) { "coverflow" === this.params.effect && this.coverflowEffect.setTransition(t) } } }, {
                name: "thumbs",
                params: { thumbs: { swiper: null, slideThumbActiveClass: "swiper-slide-thumb-active", thumbsContainerClass: "swiper-container-thumbs" } },
                create: function() { o.extend(this, { thumbs: { swiper: null, init: mt.init.bind(this), update: mt.update.bind(this), onThumbClick: mt.onThumbClick.bind(this) } }) },
                on: {
                    beforeInit: function() {
                        var t = this.params.thumbs;
                        t && t.swiper && (this.thumbs.init(), this.thumbs.update(!0))
                    },
                    slideChange: function() { this.thumbs.swiper && this.thumbs.update() },
                    update: function() { this.thumbs.swiper && this.thumbs.update() },
                    resize: function() { this.thumbs.swiper && this.thumbs.update() },
                    observerUpdate: function() { this.thumbs.swiper && this.thumbs.update() },
                    setTransition: function(t) {
                        var e = this.thumbs.swiper;
                        e && e.setTransition(t)
                    },
                    beforeDestroy: function() {
                        var t = this.thumbs.swiper;
                        t && this.thumbs.swiperCreated && t && t.destroy()
                    }
                }
            }];
        return void 0 === F.use && (F.use = F.Class.use, F.installModule = F.Class.installModule), F.use(gt), F
    }),
    function(t) {
        "use strict";

        function e(e) { return e.is('[type="checkbox"]') ? e.prop("checked") : e.is('[type="radio"]') ? !!t('[name="' + e.attr("name") + '"]:checked').length : e.val() }
        var i = function(n, s) {
            this.options = s, this.validators = t.extend({}, i.VALIDATORS, s.custom), this.$element = t(n), this.$btn = t('button[type="submit"], input[type="submit"]').filter('[form="' + this.$element.attr("id") + '"]').add(this.$element.find('input[type="submit"], button[type="submit"]')), this.update(), this.$element.on("input.bs.validator change.bs.validator focusout.bs.validator", t.proxy(this.onInput, this)), this.$element.on("submit.bs.validator", t.proxy(this.onSubmit, this)), this.$element.on("reset.bs.validator", t.proxy(this.reset, this)), this.$element.find("[data-match]").each(function() {
                var i = t(this),
                    n = i.data("match");
                t(n).on("input.bs.validator", function(t) { e(i) && i.trigger("input.bs.validator") })
            }), this.$inputs.filter(function() { return e(t(this)) }).trigger("focusout"), this.$element.attr("novalidate", !0), this.toggleSubmit()
        };

        function n(e) {
            return this.each(function() {
                var n = t(this),
                    s = t.extend({}, i.DEFAULTS, n.data(), "object" == typeof e && e),
                    r = n.data("bs.validator");
                (r || "destroy" != e) && (r || n.data("bs.validator", r = new i(this, s)), "string" == typeof e && r[e]())
            })
        }
        i.VERSION = "0.11.5", i.INPUT_SELECTOR = ':input:not([type="hidden"], [type="submit"], [type="reset"], button)', i.FOCUS_OFFSET = 20, i.DEFAULTS = { delay: 500, html: !1, disable: !0, focus: !0, custom: {}, errors: { match: "Does not match", minlength: "Not long enough" }, feedback: { success: "glyphicon-ok", error: "glyphicon-remove" } }, i.VALIDATORS = { native: function(t) { var e = t[0]; if (e.checkValidity) return !e.checkValidity() && !e.validity.valid && (e.validationMessage || "error!") }, match: function(e) { var n = e.data("match"); return e.val() !== t(n).val() && i.DEFAULTS.errors.match }, minlength: function(t) { var e = t.data("minlength"); return t.val().length < e && i.DEFAULTS.errors.minlength } }, i.prototype.update = function() { return this.$inputs = this.$element.find(i.INPUT_SELECTOR).add(this.$element.find('[data-validate="true"]')).not(this.$element.find('[data-validate="false"]')), this }, i.prototype.onInput = function(e) {
            var i = this,
                n = t(e.target),
                s = "focusout" !== e.type;
            this.$inputs.is(n) && this.validateInput(n, s).done(function() { i.toggleSubmit() })
        }, i.prototype.validateInput = function(i, n) {
            e(i);
            var s = i.data("bs.validator.errors");
            i.is('[type="radio"]') && (i = this.$element.find('input[name="' + i.attr("name") + '"]'));
            var r = t.Event("validate.bs.validator", { relatedTarget: i[0] });
            if (this.$element.trigger(r), !r.isDefaultPrevented()) { var o = this; return this.runValidators(i).done(function(e) { i.data("bs.validator.errors", e), e.length ? n ? o.defer(i, o.showErrors) : o.showErrors(i) : o.clearErrors(i), s && e.toString() === s.toString() || (r = e.length ? t.Event("invalid.bs.validator", { relatedTarget: i[0], detail: e }) : t.Event("valid.bs.validator", { relatedTarget: i[0], detail: s }), o.$element.trigger(r)), o.toggleSubmit(), o.$element.trigger(t.Event("validated.bs.validator", { relatedTarget: i[0] })) }) }
        }, i.prototype.runValidators = function(i) {
            var n = [],
                s = t.Deferred();

            function r(t) { return function(t) { return i.data(t + "-error") }(t) || ((e = i[0].validity).typeMismatch ? i.data("type-error") : e.patternMismatch ? i.data("pattern-error") : e.stepMismatch ? i.data("step-error") : e.rangeOverflow ? i.data("max-error") : e.rangeUnderflow ? i.data("min-error") : e.valueMissing ? i.data("required-error") : null) || i.data("error"); var e }
            return i.data("bs.validator.deferred") && i.data("bs.validator.deferred").reject(), i.data("bs.validator.deferred", s), t.each(this.validators, t.proxy(function(t, s) {
                var o = null;
                (e(i) || i.attr("required")) && (i.data(t) || "native" == t) && (o = s.call(this, i)) && (o = r(t) || o, !~n.indexOf(o) && n.push(o))
            }, this)), !n.length && e(i) && i.data("remote") ? this.defer(i, function() {
                var o = {};
                o[i.attr("name")] = e(i), t.get(i.data("remote"), o).fail(function(t, e, i) { n.push(r("remote") || i) }).always(function() { s.resolve(n) })
            }) : s.resolve(n), s.promise()
        }, i.prototype.validate = function() { var e = this; return t.when(this.$inputs.map(function(i) { return e.validateInput(t(this), !1) })).then(function() { e.toggleSubmit(), e.focusError() }), this }, i.prototype.focusError = function() {
            if (this.options.focus) {
                var e = this.$element.find(".has-error:first :input");
                0 !== e.length && (t("html, body").animate({ scrollTop: e.offset().top - i.FOCUS_OFFSET }, 250), e.focus())
            }
        }, i.prototype.showErrors = function(e) {
            var i = this.options.html ? "html" : "text",
                n = e.data("bs.validator.errors"),
                s = e.closest(".form-group"),
                r = s.find(".help-block.with-errors"),
                o = s.find(".form-control-feedback");
            n.length && (n = t("<ul/>").addClass("list-unstyled").append(t.map(n, function(e) { return t("<li/>")[i](e) })), void 0 === r.data("bs.validator.originalContent") && r.data("bs.validator.originalContent", r.html()), r.empty().append(n), s.addClass("has-error has-danger"), s.hasClass("has-feedback") && o.removeClass(this.options.feedback.success) && o.addClass(this.options.feedback.error) && s.removeClass("has-success"))
        }, i.prototype.clearErrors = function(t) {
            var i = t.closest(".form-group"),
                n = i.find(".help-block.with-errors"),
                s = i.find(".form-control-feedback");
            n.html(n.data("bs.validator.originalContent")), i.removeClass("has-error has-danger has-success"), i.hasClass("has-feedback") && s.removeClass(this.options.feedback.error) && s.removeClass(this.options.feedback.success) && e(t) && s.addClass(this.options.feedback.success) && i.addClass("has-success")
        }, i.prototype.hasErrors = function() { return !!this.$inputs.filter(function() { return !!(t(this).data("bs.validator.errors") || []).length }).length }, i.prototype.isIncomplete = function() { return !!this.$inputs.filter("[required]").filter(function() { var i = e(t(this)); return !("string" == typeof i ? t.trim(i) : i) }).length }, i.prototype.onSubmit = function(t) { this.validate(), (this.isIncomplete() || this.hasErrors()) && t.preventDefault() }, i.prototype.toggleSubmit = function() { this.options.disable && this.$btn.toggleClass("disabled", this.isIncomplete() || this.hasErrors()) }, i.prototype.defer = function(e, i) {
            if (i = t.proxy(i, this, e), !this.options.delay) return i();
            window.clearTimeout(e.data("bs.validator.timeout")), e.data("bs.validator.timeout", window.setTimeout(i, this.options.delay))
        }, i.prototype.reset = function() {
            return this.$element.find(".form-control-feedback").removeClass(this.options.feedback.error).removeClass(this.options.feedback.success), this.$inputs.removeData(["bs.validator.errors", "bs.validator.deferred"]).each(function() {
                var e = t(this),
                    i = e.data("bs.validator.timeout");
                window.clearTimeout(i) && e.removeData("bs.validator.timeout")
            }), this.$element.find(".help-block.with-errors").each(function() {
                var e = t(this),
                    i = e.data("bs.validator.originalContent");
                e.removeData("bs.validator.originalContent").html(i)
            }), this.$btn.removeClass("disabled"), this.$element.find(".has-error, .has-danger, .has-success").removeClass("has-error has-danger has-success"), this
        }, i.prototype.destroy = function() { return this.reset(), this.$element.removeAttr("novalidate").removeData("bs.validator").off(".bs.validator"), this.$inputs.off(".bs.validator"), this.options = null, this.validators = null, this.$element = null, this.$btn = null, this };
        var s = t.fn.validator;
        t.fn.validator = n, t.fn.validator.Constructor = i, t.fn.validator.noConflict = function() { return t.fn.validator = s, this }, t(window).on("load", function() {
            t('form[data-toggle="validator"]').each(function() {
                var e = t(this);
                n.call(e, e.data())
            })
        })
    }(jQuery),
    function(t, e) {
        if ("function" == typeof define && define.amd) define(["module", "exports"], e);
        else if ("undefined" != typeof exports) e(module, exports);
        else {
            var i = { exports: {} };
            e(i, i.exports), t.WOW = i.exports
        }
    }(this, function(t, e) {
        "use strict";

        function i(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }

        function n(t, e) { return e.indexOf(t) >= 0 }

        function s(t, e, i) { null != t.addEventListener ? t.addEventListener(e, i, !1) : null != t.attachEvent ? t.attachEvent("on" + e, i) : t[e] = i }

        function r(t, e, i) { null != t.removeEventListener ? t.removeEventListener(e, i, !1) : null != t.detachEvent ? t.detachEvent("on" + e, i) : delete t[e] }
        Object.defineProperty(e, "__esModule", { value: !0 });
        var o, a, l = function() {
                function t(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var n = e[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                    }
                }
                return function(e, i, n) { return i && t(e.prototype, i), n && t(e, n), e }
            }(),
            h = window.WeakMap || window.MozWeakMap || function() {
                function t() { i(this, t), this.keys = [], this.values = [] }
                return l(t, [{ key: "get", value: function(t) { for (var e = 0; e < this.keys.length; e++) { if (this.keys[e] === t) return this.values[e] } } }, { key: "set", value: function(t, e) { for (var i = 0; i < this.keys.length; i++) { if (this.keys[i] === t) return this.values[i] = e, this } return this.keys.push(t), this.values.push(e), this } }]), t
            }(),
            d = window.MutationObserver || window.WebkitMutationObserver || window.MozMutationObserver || (a = o = function() {
                function t() { i(this, t), "undefined" != typeof console && null !== console && (console.warn("MutationObserver is not supported by your browser."), console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")) }
                return l(t, [{ key: "observe", value: function() {} }]), t
            }(), o.notSupported = !0, a),
            u = window.getComputedStyle || function(t) { var e = /(\-([a-z]){1})/g; return { getPropertyValue: function(i) { "float" === i && (i = "styleFloat"), e.test(i) && i.replace(e, function(t, e) { return e.toUpperCase() }); var n = t.currentStyle; return (null != n ? n[i] : void 0) || null } } },
            c = function() {
                function t() {
                    var e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
                    i(this, t), this.defaults = { boxClass: "wow", animateClass: "animated", offset: 0, mobile: !0, live: !0, callback: null, scrollContainer: null, resetAnimation: !0 }, this.animate = "requestAnimationFrame" in window ? function(t) { return window.requestAnimationFrame(t) } : function(t) { return t() }, this.vendors = ["moz", "webkit"], this.start = this.start.bind(this), this.resetAnimation = this.resetAnimation.bind(this), this.scrollHandler = this.scrollHandler.bind(this), this.scrollCallback = this.scrollCallback.bind(this), this.scrolled = !0, this.config = function(t, e) {
                        for (var i in e)
                            if (null == t[i]) {
                                var n = e[i];
                                t[i] = n
                            }
                        return t
                    }(e, this.defaults), null != e.scrollContainer && (this.config.scrollContainer = document.querySelector(e.scrollContainer)), this.animationNameCache = new h, this.wowEvent = function(t) {
                        var e = !(arguments.length <= 1 || void 0 === arguments[1]) && arguments[1],
                            i = !(arguments.length <= 2 || void 0 === arguments[2]) && arguments[2],
                            n = arguments.length <= 3 || void 0 === arguments[3] ? null : arguments[3],
                            s = void 0;
                        return null != document.createEvent ? (s = document.createEvent("CustomEvent")).initCustomEvent(t, e, i, n) : null != document.createEventObject ? (s = document.createEventObject()).eventType = t : s.eventName = t, s
                    }(this.config.boxClass)
                }
                return l(t, [{ key: "init", value: function() { this.element = window.document.documentElement, n(document.readyState, ["interactive", "complete"]) ? this.start() : s(document, "DOMContentLoaded", this.start), this.finished = [] } }, {
                    key: "start",
                    value: function() {
                        var t = this;
                        if (this.stopped = !1, this.boxes = [].slice.call(this.element.querySelectorAll("." + this.config.boxClass)), this.all = this.boxes.slice(0), this.boxes.length)
                            if (this.disabled()) this.resetStyle();
                            else
                                for (var e = 0; e < this.boxes.length; e++) {
                                    var i = this.boxes[e];
                                    this.applyStyle(i, !0)
                                }(this.disabled() || (s(this.config.scrollContainer || window, "scroll", this.scrollHandler), s(window, "resize", this.scrollHandler), this.interval = setInterval(this.scrollCallback, 50)), this.config.live) && new d(function(e) {
                                    for (var i = 0; i < e.length; i++)
                                        for (var n = e[i], s = 0; s < n.addedNodes.length; s++) {
                                            var r = n.addedNodes[s];
                                            t.doSync(r)
                                        }
                                }).observe(document.body, { childList: !0, subtree: !0 })
                    }
                }, { key: "stop", value: function() { this.stopped = !0, r(this.config.scrollContainer || window, "scroll", this.scrollHandler), r(window, "resize", this.scrollHandler), null != this.interval && clearInterval(this.interval) } }, { key: "sync", value: function() { d.notSupported && this.doSync(this.element) } }, {
                    key: "doSync",
                    value: function(t) {
                        if (null != t || (t = this.element), 1 === t.nodeType)
                            for (var e = (t = t.parentNode || t).querySelectorAll("." + this.config.boxClass), i = 0; i < e.length; i++) {
                                var s = e[i];
                                n(s, this.all) || (this.boxes.push(s), this.all.push(s), this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(s, !0), this.scrolled = !0)
                            }
                    }
                }, {
                    key: "show",
                    value: function(t) {
                        return this.applyStyle(t), t.className = t.className + " " + this.config.animateClass, null != this.config.callback && this.config.callback(t),
                            function(t, e) { null != t.dispatchEvent ? t.dispatchEvent(e) : e in (null != t) ? t[e]() : "on" + e in (null != t) && t["on" + e]() }(t, this.wowEvent), this.config.resetAnimation && (s(t, "animationend", this.resetAnimation), s(t, "oanimationend", this.resetAnimation), s(t, "webkitAnimationEnd", this.resetAnimation), s(t, "MSAnimationEnd", this.resetAnimation)), t
                    }
                }, {
                    key: "applyStyle",
                    value: function(t, e) {
                        var i = this,
                            n = t.getAttribute("data-wow-duration"),
                            s = t.getAttribute("data-wow-delay"),
                            r = t.getAttribute("data-wow-iteration");
                        return this.animate(function() { return i.customStyle(t, e, n, s, r) })
                    }
                }, { key: "resetStyle", value: function() { for (var t = 0; t < this.boxes.length; t++) { this.boxes[t].style.visibility = "visible" } } }, {
                    key: "resetAnimation",
                    value: function(t) {
                        if (t.type.toLowerCase().indexOf("animationend") >= 0) {
                            var e = t.target || t.srcElement;
                            e.className = e.className.replace(this.config.animateClass, "").trim()
                        }
                    }
                }, { key: "customStyle", value: function(t, e, i, n, s) { return e && this.cacheAnimationName(t), t.style.visibility = e ? "hidden" : "visible", i && this.vendorSet(t.style, { animationDuration: i }), n && this.vendorSet(t.style, { animationDelay: n }), s && this.vendorSet(t.style, { animationIterationCount: s }), this.vendorSet(t.style, { animationName: e ? "none" : this.cachedAnimationName(t) }), t } }, {
                    key: "vendorSet",
                    value: function(t, e) {
                        for (var i in e)
                            if (e.hasOwnProperty(i)) {
                                var n = e[i];
                                t["" + i] = n;
                                for (var s = 0; s < this.vendors.length; s++) { t["" + this.vendors[s] + i.charAt(0).toUpperCase() + i.substr(1)] = n }
                            }
                    }
                }, {
                    key: "vendorCSS",
                    value: function(t, e) {
                        for (var i = u(t), n = i.getPropertyCSSValue(e), s = 0; s < this.vendors.length; s++) {
                            var r = this.vendors[s];
                            n = n || i.getPropertyCSSValue("-" + r + "-" + e)
                        }
                        return n
                    }
                }, { key: "animationName", value: function(t) { var e = void 0; try { e = this.vendorCSS(t, "animation-name").cssText } catch (i) { e = u(t).getPropertyValue("animation-name") } return "none" === e ? "" : e } }, { key: "cacheAnimationName", value: function(t) { return this.animationNameCache.set(t, this.animationName(t)) } }, { key: "cachedAnimationName", value: function(t) { return this.animationNameCache.get(t) } }, { key: "scrollHandler", value: function() { this.scrolled = !0 } }, {
                    key: "scrollCallback",
                    value: function() {
                        if (this.scrolled) {
                            this.scrolled = !1;
                            for (var t = [], e = 0; e < this.boxes.length; e++) {
                                var i = this.boxes[e];
                                if (i) {
                                    if (this.isVisible(i)) { this.show(i); continue }
                                    t.push(i)
                                }
                            }
                            this.boxes = t, this.boxes.length || this.config.live || this.stop()
                        }
                    }
                }, { key: "offsetTop", value: function(t) { for (; void 0 === t.offsetTop;) t = t.parentNode; for (var e = t.offsetTop; t.offsetParent;) e += (t = t.offsetParent).offsetTop; return e } }, {
                    key: "isVisible",
                    value: function(t) {
                        var e = t.getAttribute("data-wow-offset") || this.config.offset,
                            i = this.config.scrollContainer && this.config.scrollContainer.scrollTop || window.pageYOffset,
                            n = i + Math.min(this.element.clientHeight, "innerHeight" in window ? window.innerHeight : document.documentElement.clientHeight) - e,
                            s = this.offsetTop(t),
                            r = s + t.clientHeight;
                        return n >= s && r >= i
                    }
                }, { key: "disabled", value: function() { return !this.config.mobile && (t = navigator.userAgent, /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(t)); var t } }]), t
            }();
        e.default = c, t.exports = e.default
    }),
    function(t) {
        t.fn.YouTubePopUp = function(e) {
            var i = t.extend({ autoplay: 1 }, e);
            t(this).on("click", function(e) {
                var n = t(this).attr("href");
                if (n.match(/(youtube.com)/)) var s = "v=",
                    r = 1;
                (n.match(/(youtu.be)/) || n.match(/(vimeo.com\/)+[0-9]/)) && (s = "http://innovationplans.com/", r = 3), n.match(/(vimeo.com\/)+[a-zA-Z]/) && (s = "http://innovationplans.com/", r = 5);
                var o = n.split(s)[r].replace(/(&)+(.*)/, "");
                if (n.match(/(youtu.be)/) || n.match(/(youtube.com)/)) var a = "https://www.youtube.com/embed/" + o + "?autoplay=" + i.autoplay;
                (n.match(/(vimeo.com\/)+[0-9]/) || n.match(/(vimeo.com\/)+[a-zA-Z]/)) && (a = "https://player.vimeo.com/video/" + o + "?autoplay=" + i.autoplay), t("body").append('<div class="YouTubePopUp-Wrap YouTubePopUp-animation"><div class="YouTubePopUp-Content"><span class="YouTubePopUp-Close"></span><iframe src="' + a + '" allowfullscreen></iframe></div></div>'), t(".YouTubePopUp-Wrap").hasClass("YouTubePopUp-animation") && setTimeout(function() { t(".YouTubePopUp-Wrap").removeClass("YouTubePopUp-animation") }, 600), t(".YouTubePopUp-Wrap, .YouTubePopUp-Close").click(function() { t(".YouTubePopUp-Wrap").addClass("YouTubePopUp-Hide").delay(515).queue(function() { t(this).remove() }) }), e.preventDefault()
            }), t(document).keyup(function(e) { 27 == e.keyCode && t(".YouTubePopUp-Wrap, .YouTubePopUp-Close").click() })
        }
    }(jQuery),
    function(t, e) { "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e((t = t || self).window = t.window || {}) }(this, function(t) {
        "use strict";

        function e(t, e) { t.prototype = Object.create(e.prototype), (t.prototype.constructor = t).__proto__ = e }

        function i(t) { if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return t }

        function n(t) { return "string" == typeof t }

        function s(t) { return "function" == typeof t }

        function r(t) { return "number" == typeof t }

        function o(t) { return void 0 === t }

        function a(t) { return "object" == typeof t }

        function l(t) { return !1 !== t }

        function h() { return "undefined" != typeof window }

        function d(t) { return s(t) || n(t) }

        function u(t) { return (mt = ae(t, Zt)) && ri }

        function c(t, e) { return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()") }

        function p(t, e) { return !e && console.warn(t) }

        function f(t, e) { return t && (Zt[t] = e) && mt && (mt[t] = e) || Zt }

        function m() { return 0 }

        function g(t) {
            var e, i, n = t[0];
            if (a(n) || s(n) || (t = [t]), !(e = (n._gsap || {}).harness)) {
                for (i = re.length; i-- && !re[i].targetTest(n););
                e = re[i]
            }
            for (i = t.length; i--;) t[i] && (t[i]._gsap || (t[i]._gsap = new Ae(t[i], e))) || t.splice(i, 1);
            return t
        }

        function v(t) { return t._gsap || g(ce(t))[0]._gsap }

        function y(t, e) { var i = t[e]; return s(i) ? t[e]() : o(i) && t.getAttribute(e) || i }

        function w(t, e) { return (t = t.split(",")).forEach(e) || t }

        function b(t) { return Math.round(1e5 * t) / 1e5 || 0 }

        function T(t, e) { for (var i = e.length, n = 0; t.indexOf(e[n]) < 0 && ++n < i;); return n < i }

        function _(t, e, i) {
            var n, s = r(t[1]),
                o = (s ? 2 : 1) + (e < 2 ? 0 : 1),
                a = t[o];
            if (s && (a.duration = t[1]), a.parent = i, e) {
                for (n = a; i && !("immediateRender" in n);) n = i.vars.defaults || {}, i = l(i.vars.inherit) && i.parent;
                a.immediateRender = l(n.immediateRender), e < 2 ? a.runBackwards = 1 : a.startAt = t[o - 1]
            }
            return a
        }

        function S() {
            var t, e, i = te.length,
                n = te.slice(0);
            for (ee = {}, t = te.length = 0; t < i; t++)(e = n[t]) && e._lazy && (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0)
        }

        function x(t, e, i, n) { te.length && S(), t.render(e, i, n), te.length && S() }

        function E(t) { var e = parseFloat(t); return (e || 0 === e) && (t + "").match(Kt).length < 2 ? e : t }

        function C(t) { return t }

        function k(t, e) { for (var i in e) i in t || (t[i] = e[i]); return t }

        function I(t, e) { for (var i in e) i in t || "duration" === i || "ease" === i || (t[i] = e[i]) }

        function A(t, e) { for (var i in e) t[i] = a(e[i]) ? A(t[i] || (t[i] = {}), e[i]) : e[i]; return t }

        function M(t, e) { var i, n = {}; for (i in t) i in e || (n[i] = t[i]); return n }

        function O(t) {
            var e = t.parent || ut,
                i = t.keyframes ? I : k;
            if (l(t.inherit))
                for (; e;) i(t, e.vars.defaults), e = e.parent;
            return t
        }

        function P(t, e, i, n) {
            void 0 === i && (i = "_first"), void 0 === n && (n = "_last");
            var s = e._prev,
                r = e._next;
            s ? s._next = r : t[i] === e && (t[i] = r), r ? r._prev = s : t[n] === e && (t[n] = s), e._next = e._prev = e.parent = null
        }

        function z(t, e) {!t.parent || e && !t.parent.autoRemoveChildren || t.parent.remove(t), t._act = 0 }

        function D(t) { for (var e = t; e;) e._dirty = 1, e = e.parent; return t }

        function L(t) { return t._repeat ? le(t._tTime, t = t.duration() + t._rDelay) * t : 0 }

        function $(t, e) { return (t - e._start) * e._ts + (0 <= e._ts ? 0 : e._dirty ? e.totalDuration() : e._tDur) }

        function N(t) { return t._end = b(t._start + (t._tDur / Math.abs(t._ts || t._pauseTS || Nt) || 0)) }

        function R(t, e) {
            var i;
            if ((e._time || e._initted && !e._dur) && (i = $(t.rawTime(), e), (!e._dur || de(0, e.totalDuration(), i) - e._tTime > Nt) && e.render(i, !0)), D(t)._dp && t._initted && t._time >= t._dur && t._ts) {
                if (t._dur < t.duration())
                    for (i = t; i._dp;) 0 <= i.rawTime() && i.totalTime(i._tTime), i = i._dp;
                t._zTime = -Nt
            }
        }

        function H(t, e, i, n) {
            return e.parent && z(e), e._start = b(i + e._delay), e._end = b(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)),
                function(t, e, i, n, s) {
                    void 0 === i && (i = "_first"), void 0 === n && (n = "_last");
                    var r, o = t[n];
                    if (s)
                        for (r = e[s]; o && o[s] > r;) o = o._prev;
                    o ? (e._next = o._next, o._next = e) : (e._next = t[i], t[i] = e), e._next ? e._next._prev = e : t[n] = e, e._prev = o, e.parent = e._dp = t
                }(t, e, "_first", "_last", t._sort ? "_start" : 0), t._recent = e, n || R(t, e), t
        }

        function j(t, e, i, n) { return $e(t, e), t._initted ? !i && t._pt && (t._dur && !1 !== t.vars.lazy || !t._dur && t.vars.lazy) && vt !== we.frame ? (te.push(t), t._lazy = [e, n], 1) : void 0 : 1 }

        function F(t, e, i) {
            var n = t._repeat,
                s = b(e);
            return t._dur = s, t._tDur = n ? n < 0 ? 1e12 : b(s * (n + 1) + t._rDelay * n) : s, i || D(t.parent), t.parent && N(t), t
        }

        function W(t) { return t instanceof Pe ? D(t) : F(t, t._dur) }

        function B(t, e) {
            var i, s, r = t.labels,
                o = t._recent || he,
                a = t.duration() >= $t ? o.endTime(!1) : t._dur;
            return n(e) && (isNaN(e) || e in r) ? "<" === (i = e.charAt(0)) || ">" === i ? ("<" === i ? o._start : o.endTime(0 <= o._repeat)) + (parseFloat(e.substr(1)) || 0) : (i = e.indexOf("=")) < 0 ? (e in r || (r[e] = a), r[e]) : (s = +(e.charAt(i - 1) + e.substr(i + 1)), 1 < i ? B(t, e.substr(0, i - 1)) + s : a + s) : null == e ? a : +e
        }

        function q(t, e) { return t || 0 === t ? e(t) : e }

        function V(t) { return (t + "").substr((parseFloat(t) + "").length) }

        function Y(t, e) { return t && a(t) && "length" in t && (!e && !t.length || t.length - 1 in t && a(t[0])) && !t.nodeType && t !== ct }

        function G(t) { return t.sort(function() { return .5 - Math.random() }) }

        function U(t) {
            if (s(t)) return t;
            var e = a(t) ? t : { each: t },
                i = Ee(e.ease),
                r = e.from || 0,
                o = parseFloat(e.base) || 0,
                l = {},
                h = 0 < r && r < 1,
                d = isNaN(r) || h,
                u = e.axis,
                c = r,
                p = r;
            return n(r) ? c = p = { center: .5, edges: .5, end: 1 }[r] || 0 : !h && d && (c = r[0], p = r[1]),
                function(t, n, s) {
                    var a, h, f, m, g, v, y, w, T, _ = (s || e).length,
                        S = l[_];
                    if (!S) {
                        if (!(T = "auto" === e.grid ? 0 : (e.grid || [1, $t])[1])) {
                            for (y = -$t; y < (y = s[T++].getBoundingClientRect().left) && T < _;);
                            T--
                        }
                        for (S = l[_] = [], a = d ? Math.min(T, _) * c - .5 : r % T, h = d ? _ * p / T - .5 : r / T | 0, w = $t, v = y = 0; v < _; v++) f = v % T - a, m = h - (v / T | 0), S[v] = g = u ? Math.abs("y" === u ? m : f) : Ft(f * f + m * m), y < g && (y = g), g < w && (w = g);
                        "random" === r && G(S), S.max = y - w, S.min = w, S.v = _ = (parseFloat(e.amount) || parseFloat(e.each) * (_ < T ? _ - 1 : u ? "y" === u ? _ / T : T : Math.max(T, _ / T)) || 0) * ("edges" === r ? -1 : 1), S.b = _ < 0 ? o - _ : o, S.u = V(e.amount || e.each) || 0, i = i && _ < 0 ? xe(i) : i
                    }
                    return _ = (S[t] - S.min) / S.max || 0, b(S.b + (i ? i(_) : _) * S.v) + S.u
                }
        }

        function X(t) { var e = t < 1 ? Math.pow(10, (t + "").length - 2) : 1; return function(i) { return ~~(Math.round(parseFloat(i) / t) * t * e) / e + (r(i) ? 0 : V(i)) } }

        function Q(t, e) { var i, n, o = qt(t); return !o && a(t) && (i = o = t.radius || $t, t.values ? (t = ce(t.values), (n = !r(t[0])) && (i *= i)) : t = X(t.increment)), q(e, o ? s(t) ? function(e) { return n = t(e), Math.abs(n - e) <= i ? n : e } : function(e) { for (var s, o, a = parseFloat(n ? e.x : e), l = parseFloat(n ? e.y : 0), h = $t, d = 0, u = t.length; u--;)(s = n ? (s = t[u].x - a) * s + (o = t[u].y - l) * o : Math.abs(t[u] - a)) < h && (h = s, d = u); return d = !i || h <= i ? t[d] : e, n || d === e || r(e) ? d : d + V(e) } : X(t)) }

        function K(t, e, i, n) { return q(qt(t) ? !e : !0 === i ? !!(i = 0) : !n, function() { return qt(t) ? t[~~(Math.random() * t.length)] : (i = i || 1e-5) && (n = i < 1 ? Math.pow(10, (i + "").length - 2) : 1) && ~~(Math.round((t + Math.random() * (e - t)) / i) * i * n) / n }) }

        function Z(t, e, i) { return q(i, function(i) { return t[~~e(i)] }) }

        function J(t) { for (var e, i, n, s, r = 0, o = ""; ~(e = t.indexOf("random(", r));) n = t.indexOf(")", e), s = "[" === t.charAt(e + 7), i = t.substr(e + 7, n - e - 7).match(s ? Kt : Vt), o += t.substr(r, e - r) + K(s ? i : +i[0], +i[1], +i[2] || 1e-5), r = n + 1; return o + t.substr(r, t.length - r) }

        function tt(t, e, i) {
            var n, s, r, o = t.labels,
                a = $t;
            for (n in o)(s = o[n] - e) < 0 == !!i && s && a > (s = Math.abs(s)) && (r = n, a = s);
            return r
        }

        function et(t) { return z(t), t.progress() < 1 && fe(t, "onInterrupt"), t }

        function it(t, e, i) { return (6 * (t = t < 0 ? t + 1 : 1 < t ? t - 1 : t) < 1 ? e + (i - e) * t * 6 : t < .5 ? i : 3 * t < 2 ? e + (i - e) * (2 / 3 - t) * 6 : e) * me + .5 | 0 }

        function nt(t, e, i) {
            var n, s, o, a, l, h, d, u, c, p, f = t ? r(t) ? [t >> 16, t >> 8 & me, t & me] : 0 : ge.black;
            if (!f) {
                if ("," === t.substr(-1) && (t = t.substr(0, t.length - 1)), ge[t]) f = ge[t];
                else if ("#" === t.charAt(0)) 4 === t.length && (t = "#" + (n = t.charAt(1)) + n + (s = t.charAt(2)) + s + (o = t.charAt(3)) + o), f = [(t = parseInt(t.substr(1), 16)) >> 16, t >> 8 & me, t & me];
                else if ("hsl" === t.substr(0, 3))
                    if (f = p = t.match(Vt), e) { if (~t.indexOf("=")) return f = t.match(Yt), i && f.length < 4 && (f[3] = 1), f } else a = +f[0] % 360 / 360, l = f[1] / 100, n = 2 * (h = f[2] / 100) - (s = h <= .5 ? h * (l + 1) : h + l - h * l), 3 < f.length && (f[3] *= 1), f[0] = it(a + 1 / 3, n, s), f[1] = it(a, n, s), f[2] = it(a - 1 / 3, n, s);
                else f = t.match(Vt) || ge.transparent;
                f = f.map(Number)
            }
            return e && !p && (n = f[0] / me, s = f[1] / me, o = f[2] / me, h = ((d = Math.max(n, s, o)) + (u = Math.min(n, s, o))) / 2, d === u ? a = l = 0 : (c = d - u, l = .5 < h ? c / (2 - d - u) : c / (d + u), a = d === n ? (s - o) / c + (s < o ? 6 : 0) : d === s ? (o - n) / c + 2 : (n - s) / c + 4, a *= 60), f[0] = ~~(a + .5), f[1] = ~~(100 * l + .5), f[2] = ~~(100 * h + .5)), i && f.length < 4 && (f[3] = 1), f
        }

        function st(t) {
            var e = [],
                i = [],
                n = -1;
            return t.split(ve).forEach(function(t) {
                var s = t.match(Gt) || [];
                e.push.apply(e, s), i.push(n += s.length + 1)
            }), e.c = i, e
        }

        function rt(t, e, i) {
            var n, s, r, o, a = "",
                l = (t + a).match(ve),
                h = e ? "hsla(" : "rgba(",
                d = 0;
            if (!l) return t;
            if (l = l.map(function(t) { return (t = nt(t, e, 1)) && h + (e ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3] : t.join(",")) + ")" }), i && (r = st(t), (n = i.c).join(a) !== r.c.join(a)))
                for (o = (s = t.replace(ve, "1").split(Gt)).length - 1; d < o; d++) a += s[d] + (~n.indexOf(d) ? l.shift() || h + "0,0,0,0)" : (r.length ? r : l.length ? l : i).shift());
            if (!s)
                for (o = (s = t.split(ve)).length - 1; d < o; d++) a += s[d] + l[d];
            return a + s[o]
        }

        function ot(t) { var e, i = t.join(" "); if (ve.lastIndex = 0, ve.test(i)) return e = ye.test(i), t[1] = rt(t[1], e), t[0] = rt(t[0], e, st(t[1])), !0 }

        function at(t, e, i, n) { void 0 === i && (i = function(t) { return 1 - e(1 - t) }), void 0 === n && (n = function(t) { return t < .5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2 }); var s, r = { easeIn: e, easeOut: i, easeInOut: n }; return w(t, function(t) { for (var e in Te[t] = Zt[t] = r, Te[s = t.toLowerCase()] = i, r) Te[s + ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")] = Te[t + "." + e] = r[e] }), r }

        function lt(t) { return function(e) { return e < .5 ? (1 - t(1 - 2 * e)) / 2 : .5 + t(2 * (e - .5)) / 2 } }

        function ht(t, e, i) {
            function n(t) { return 1 === t ? 1 : s * Math.pow(2, -10 * t) * Bt((t - o) * r) + 1 }
            var s = 1 <= e ? e : 1,
                r = (i || (t ? .3 : .45)) / (e < 1 ? e : 1),
                o = r / Rt * (Math.asin(1 / s) || 0),
                a = "out" === t ? n : "in" === t ? function(t) { return 1 - n(1 - t) } : lt(n);
            return r = Rt / r, a.config = function(e, i) { return ht(t, e, i) }, a
        }

        function dt(t, e) {
            function i(t) { return t ? --t * t * ((e + 1) * t + e) + 1 : 0 }
            void 0 === e && (e = 1.70158);
            var n = "out" === t ? i : "in" === t ? function(t) { return 1 - i(1 - t) } : lt(i);
            return n.config = function(e) { return dt(t, e) }, n
        }
        var ut, ct, pt, ft, mt, gt, vt, yt, wt, bt, Tt, _t, St, xt, Et, Ct, kt, It, At, Mt, Ot, Pt, zt, Dt = { autoSleep: 120, force3D: "auto", nullTargetWarn: 1, units: { lineHeight: "" } },
            Lt = { duration: .5, overwrite: !1, delay: 0 },
            $t = 1e8,
            Nt = 1 / $t,
            Rt = 2 * Math.PI,
            Ht = Rt / 4,
            jt = 0,
            Ft = Math.sqrt,
            Wt = Math.cos,
            Bt = Math.sin,
            qt = Array.isArray,
            Vt = /(?:-?\.?\d|\.)+/gi,
            Yt = /[-+=.]*\d+[.e\-+]*\d*[e\-\+]*\d*/g,
            Gt = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
            Ut = /[-+=.]*\d+(?:\.|e-|e)*\d*/gi,
            Xt = /\(([^()]+)\)/i,
            Qt = /[+-]=-?[\.\d]+/,
            Kt = /[#\-+.]*\b[a-z\d-=+%.]+/gi,
            Zt = {},
            Jt = {},
            te = [],
            ee = {},
            ie = {},
            ne = {},
            se = 30,
            re = [],
            oe = "",
            ae = function(t, e) { for (var i in e) t[i] = e[i]; return t },
            le = function(t, e) { return (t /= e) && ~~t === t ? ~~t - 1 : ~~t },
            he = { _start: 0, endTime: m },
            de = function(t, e, i) { return i < t ? t : e < i ? e : i },
            ue = [].slice,
            ce = function(t, e) { return !n(t) || e || !pt && be() ? qt(t) ? function(t, e, i) { return void 0 === i && (i = []), t.forEach(function(t) { return n(t) && !e || Y(t, 1) ? i.push.apply(i, ce(t)) : i.push(t) }) || i }(t, e) : Y(t) ? ue.call(t, 0) : t ? [t] : [] : ue.call(ft.querySelectorAll(t), 0) },
            pe = function(t, e, i, n, s) {
                var r = e - t,
                    o = n - i;
                return q(s, function(e) { return i + (e - t) / r * o })
            },
            fe = function(t, e, i) {
                var n, s, r = t.vars,
                    o = r[e];
                if (o) return n = r[e + "Params"], s = r.callbackScope || t, i && te.length && S(), n ? o.apply(s, n) : o.call(s)
            },
            me = 255,
            ge = { aqua: [0, me, me], lime: [0, me, 0], silver: [192, 192, 192], black: [0, 0, 0], maroon: [128, 0, 0], teal: [0, 128, 128], blue: [0, 0, me], navy: [0, 0, 128], white: [me, me, me], olive: [128, 128, 0], yellow: [me, me, 0], orange: [me, 165, 0], gray: [128, 128, 128], purple: [128, 0, 128], green: [0, 128, 0], red: [me, 0, 0], pink: [me, 192, 203], cyan: [0, me, me], transparent: [me, me, me, 0] },
            ve = function() { var t, e = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b"; for (t in ge) e += "|" + t + "\\b"; return new RegExp(e + ")", "gi") }(),
            ye = /hsl[a]?\(/,
            we = (xt = Date.now, Et = 500, Ct = 33, kt = xt(), It = kt, Mt = At = 1 / 240, St = {
                time: 0,
                frame: 0,
                tick: function() { Ce(!0) },
                wake: function() { gt && (!pt && h() && (ct = pt = window, ft = ct.document || {}, Zt.gsap = ri, (ct.gsapVersions || (ct.gsapVersions = [])).push(ri.version), u(mt || ct.GreenSockGlobals || !ct.gsap && ct || {}), _t = ct.requestAnimationFrame), bt && St.sleep(), Tt = _t || function(t) { return setTimeout(t, 1e3 * (Mt - St.time) + 1 | 0) }, wt = 1, Ce(2)) },
                sleep: function() {
                    (_t ? ct.cancelAnimationFrame : clearTimeout)(bt), wt = 0, Tt = m
                },
                lagSmoothing: function(t, e) { Et = t || 1e8, Ct = Math.min(e, Et, 0) },
                fps: function(t) { At = 1 / (t || 240), Mt = St.time + At },
                add: function(t) { Ot.indexOf(t) < 0 && Ot.push(t), be() },
                remove: function(t) { var e;~(e = Ot.indexOf(t)) && Ot.splice(e, 1) },
                _listeners: Ot = []
            }),
            be = function() { return !wt && we.wake() },
            Te = {},
            _e = /^[\d.\-M][\d.\-,\s]/,
            Se = /["']/g,
            xe = function(t) { return function(e) { return 1 - t(1 - e) } },
            Ee = function(t, e) {
                return t && (s(t) ? t : Te[t] || function(t) {
                    var e = (t + "").split("("),
                        i = Te[e[0]];
                    return i && 1 < e.length && i.config ? i.config.apply(null, ~t.indexOf("{") ? [function(t) { for (var e, i, n, s = {}, r = t.substr(1, t.length - 3).split(":"), o = r[0], a = 1, l = r.length; a < l; a++) i = r[a], e = a !== l - 1 ? i.lastIndexOf(",") : i.length, n = i.substr(0, e), s[o] = isNaN(n) ? n.replace(Se, "").trim() : +n, o = i.substr(e + 1).trim(); return s }(e[1])] : Xt.exec(t)[1].split(",").map(E)) : Te._CE && _e.test(t) ? Te._CE("", t) : i
                }(t)) || e
            };

        function Ce(t) {
            var e, i, n = xt() - It,
                s = !0 === t;
            Et < n && (kt += n - Ct), It += n, St.time = (It - kt) / 1e3, (0 < (e = St.time - Mt) || s) && (St.frame++, Mt += e + (At <= e ? .004 : At - e), i = 1), s || (bt = Tt(Ce)), i && Ot.forEach(function(e) { return e(St.time, n, St.frame, t) })
        }

        function ke(t) { return t < zt ? Pt * t * t : t < .7272727272727273 ? Pt * Math.pow(t - 1.5 / 2.75, 2) + .75 : t < .9090909090909092 ? Pt * (t -= 2.25 / 2.75) * t + .9375 : Pt * Math.pow(t - 2.625 / 2.75, 2) + .984375 }
        w("Linear,Quad,Cubic,Quart,Quint,Strong", function(t, e) {
            var i = e < 5 ? e + 1 : e;
            at(t + ",Power" + (i - 1), e ? function(t) { return Math.pow(t, i) } : function(t) { return t }, function(t) { return 1 - Math.pow(1 - t, i) }, function(t) { return t < .5 ? Math.pow(2 * t, i) / 2 : 1 - Math.pow(2 * (1 - t), i) / 2 })
        }), Te.Linear.easeNone = Te.none = Te.Linear.easeIn, at("Elastic", ht("in"), ht("out"), ht()), Pt = 7.5625, zt = 1 / 2.75, at("Bounce", function(t) { return 1 - ke(1 - t) }, ke), at("Expo", function(t) { return t ? Math.pow(2, 10 * (t - 1)) : 0 }), at("Circ", function(t) { return -(Ft(1 - t * t) - 1) }), at("Sine", function(t) { return 1 - Wt(t * Ht) }), at("Back", dt("in"), dt("out"), dt()), Te.SteppedEase = Te.steps = Zt.SteppedEase = {
            config: function(t, e) {
                void 0 === t && (t = 1);
                var i = 1 / t,
                    n = t + (e ? 0 : 1),
                    s = e ? 1 : 0;
                return function(t) { return ((n * de(0, .99999999, t) | 0) + s) * i }
            }
        }, Lt.ease = Te["quad.out"], w("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(t) { return oe += t + "," + t + "Params," });
        var Ie, Ae = function(t, e) { this.id = jt++, (t._gsap = this).target = t, this.harness = e, this.get = e ? e.get : y, this.set = e ? e.getSetter : Ye },
            Me = ((Ie = Oe.prototype).delay = function(t) { return t || 0 === t ? (this._delay = t, this) : this._delay }, Ie.duration = function(t) { return arguments.length ? F(this, t) : this.totalDuration() && this._dur }, Ie.totalDuration = function(t) { return arguments.length ? (this._dirty = 0, F(this, this._repeat < 0 ? t : (t - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur }, Ie.totalTime = function(t, e) { if (be(), !arguments.length) return this._tTime; var i = this.parent || this._dp; if (i && i.smoothChildTiming && this._ts) { for (this._start = b(i._time - (0 < this._ts ? t / this._ts : ((this._dirty ? this.totalDuration() : this._tDur) - t) / -this._ts)), N(this), i._dirty || D(i); i.parent;) i.parent._time !== i._start + (0 <= i._ts ? i._tTime / i._ts : (i.totalDuration() - i._tTime) / -i._ts) && i.totalTime(i._tTime, !0), i = i.parent;!this.parent && this._dp.autoRemoveChildren && H(this._dp, this, this._start - this._delay) } return (this._tTime !== t || !this._dur && !e || this._initted && Math.abs(this._zTime) === Nt) && (this._ts || (this._pTime = t), x(this, t, e)), this }, Ie.time = function(t, e) { return arguments.length ? this.totalTime(Math.min(this.totalDuration(), t + L(this)) % this._dur || (t ? this._dur : 0), e) : this._time }, Ie.totalProgress = function(t, e) { return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio }, Ie.progress = function(t, e) { return arguments.length ? this.totalTime(this.duration() * (!this._yoyo || 1 & this.iteration() ? t : 1 - t) + L(this), e) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio }, Ie.iteration = function(t, e) { var i = this.duration() + this._rDelay; return arguments.length ? this.totalTime(this._time + (t - 1) * i, e) : this._repeat ? le(this._tTime, i) + 1 : 1 }, Ie.timeScale = function(t) {
                if (!arguments.length) return this._ts || this._pauseTS || 0;
                if (null !== this._pauseTS) return this._pauseTS = t, this;
                var e = this.parent && this._ts ? $(this.parent._time, this) : this._tTime;
                return this._ts = t,
                    function(t) { for (var e = t.parent; e && e.parent;) e._dirty = 1, e.totalDuration(), e = e.parent; return t }(this.totalTime(e, !0))
            }, Ie.paused = function(t) { var e = !this._ts; return arguments.length ? (e !== t && (t ? (this._pauseTS = this._ts, this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (be(), this._ts = this._pauseTS || 1, this._pauseTS = null, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && (this._tTime -= Nt) && Math.abs(this._zTime) !== Nt))), this) : e }, Ie.startTime = function(t) { return arguments.length ? (this.parent && this.parent._sort && H(this.parent, this, t - this._delay), this) : this._start }, Ie.endTime = function(t) { return this._start + (l(t) ? this.totalDuration() : this.duration()) / Math.abs(this._ts) }, Ie.rawTime = function(t) { var e = this.parent || this._dp; return e ? t && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? $(e.rawTime(t), this) : this._tTime : this._tTime }, Ie.repeat = function(t) { return arguments.length ? (this._repeat = t, W(this)) : this._repeat }, Ie.repeatDelay = function(t) { return arguments.length ? (this._rDelay = t, W(this)) : this._rDelay }, Ie.yoyo = function(t) { return arguments.length ? (this._yoyo = t, this) : this._yoyo }, Ie.seek = function(t, e) { return this.totalTime(B(this, t), l(e)) }, Ie.restart = function(t, e) { return this.play().totalTime(t ? -this._delay : 0, l(e)) }, Ie.play = function(t, e) { return null != t && this.seek(t, e), this.reversed(!1).paused(!1) }, Ie.reverse = function(t, e) { return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1) }, Ie.pause = function(t, e) { return null != t && this.seek(t, e), this.paused(!0) }, Ie.resume = function() { return this.paused(!1) }, Ie.reversed = function(t) { var e = this._ts || this._pauseTS || 0; return arguments.length ? (t !== this.reversed() && (this[null === this._pauseTS ? "_ts" : "_pauseTS"] = Math.abs(e) * (t ? -1 : 1), this.totalTime(this._tTime, !0)), this) : e < 0 }, Ie.invalidate = function() { return this._initted = 0, this._zTime = -Nt, this }, Ie.isActive = function(t) {
                var e, i = this.parent || this._dp,
                    n = this._start;
                return !(i && !(this._ts && (this._initted || !t) && i.isActive(t) && (e = i.rawTime(!0)) >= n && e < this.endTime(!0) - Nt))
            }, Ie.eventCallback = function(t, e, i) { var n = this.vars; return 1 < arguments.length ? (e ? (n[t] = e, i && (n[t + "Params"] = i), "onUpdate" === t && (this._onUpdate = e)) : delete n[t], this) : n[t] }, Ie.then = function(t) {
                var e = this;
                return new Promise(function(i) {
                    function n() {
                        var t = e.then;
                        e.then = null, s(r) && (r = r(e)) && (r.then || r === e) && (e.then = t), i(r), e.then = t
                    }
                    var r = s(t) ? t : C;
                    e._initted && 1 === e.totalProgress() && 0 <= e._ts || !e._tTime && e._ts < 0 ? n() : e._prom = n
                })
            }, Ie.kill = function() { et(this) }, Oe);

        function Oe(t, e) {
            var i = t.parent || ut;
            this.vars = t, this._delay = +t.delay || 0, (this._repeat = t.repeat || 0) && (this._rDelay = t.repeatDelay || 0, this._yoyo = !!t.yoyo || !!t.yoyoEase), this._ts = t.reversed ? -1 : 1, F(this, +t.duration, 1), this.data = t.data, wt || we.wake(), i && H(i, this, e || 0 === e ? e : i._time, 1), t.paused && this.paused(!0)
        }
        k(Me.prototype, { _time: 0, _start: 0, _end: 0, _tTime: 0, _tDur: 0, _dirty: 0, _repeat: 0, _yoyo: !1, parent: null, _initted: !1, _rDelay: 0, _ts: 1, _dp: 0, ratio: 0, _zTime: -Nt, _prom: 0, _pauseTS: null });
        var Pe = function(t) {
            function o(e, n) { var s; return void 0 === e && (e = {}), (s = t.call(this, e, n) || this).labels = {}, s.smoothChildTiming = !!e.smoothChildTiming, s.autoRemoveChildren = !!e.autoRemoveChildren, s._sort = l(e.sortChildren), s.parent && R(s.parent, i(s)), s }
            e(o, t);
            var a = o.prototype;
            return a.to = function(t, e, i, n) { return new je(t, _(arguments, 0, this), B(this, r(e) ? n : i)), this }, a.from = function(t, e, i, n) { return new je(t, _(arguments, 1, this), B(this, r(e) ? n : i)), this }, a.fromTo = function(t, e, i, n, s) { return new je(t, _(arguments, 2, this), B(this, r(e) ? s : n)), this }, a.set = function(t, e, i) { return e.duration = 0, e.parent = this, O(e).repeatDelay || (e.repeat = 0), e.immediateRender = !!e.immediateRender, new je(t, e, B(this, i), 1), this }, a.call = function(t, e, i) { return H(this, je.delayedCall(0, t, e), B(this, i)) }, a.staggerTo = function(t, e, i, n, s, r, o) { return i.duration = e, i.stagger = i.stagger || n, i.onComplete = r, i.onCompleteParams = o, i.parent = this, new je(t, i, B(this, s)), this }, a.staggerFrom = function(t, e, i, n, s, r, o) { return i.runBackwards = 1, O(i).immediateRender = l(i.immediateRender), this.staggerTo(t, e, i, n, s, r, o) }, a.staggerFromTo = function(t, e, i, n, s, r, o, a) { return n.startAt = i, O(n).immediateRender = l(n.immediateRender), this.staggerTo(t, e, n, s, r, o, a) }, a.render = function(t, e, i) {
                var n, s, r, o, a, l, h, d, u, c, p, f, m = this._time,
                    g = this._dirty ? this.totalDuration() : this._tDur,
                    v = this._dur,
                    y = this !== ut && g - Nt < t && 0 <= t ? g : t < Nt ? 0 : t,
                    w = this._zTime < 0 != t < 0 && (this._initted || !v);
                if (y !== this._tTime || i || w) {
                    if (m !== this._time && v && (y += this._time - m, t += this._time - m), n = y, u = this._start, l = !(d = this._ts), w && (v || (m = this._zTime), !t && e || (this._zTime = t)), this._repeat && (p = this._yoyo, (v < (n = b(y % (a = v + this._rDelay))) || g === y) && (n = v), (o = ~~(y / a)) && o === y / a && (n = v, o--), p && 1 & o && (n = v - n, f = 1), o !== (c = le(this._tTime, a)) && !this._lock)) {
                        var T = p && 1 & c,
                            _ = T === (p && 1 & o);
                        if (o < c && (T = !T), m = T ? 0 : v, this._lock = 1, this.render(m, e, !v)._lock = 0, !e && this.parent && fe(this, "onRepeat"), this.vars.repeatRefresh && !f && (this.invalidate()._lock = 1), m !== this._time || l != !this._ts) return this;
                        if (_ && (this._lock = 2, m = T ? v + 1e-4 : -1e-4, this.render(m, !0), this.vars.repeatRefresh && !f && this.invalidate()), this._lock = 0, !this._ts && !l) return this
                    }
                    if (this._hasPause && !this._forcing && this._lock < 2 && (h = function(t, e, i) {
                            var n;
                            if (e < i)
                                for (n = t._first; n && n._start <= i;) {
                                    if (!n._dur && "isPause" === n.data && n._start > e) return n;
                                    n = n._next
                                } else
                                    for (n = t._last; n && n._start >= i;) {
                                        if (!n._dur && "isPause" === n.data && n._start < e) return n;
                                        n = n._prev
                                    }
                        }(this, b(m), b(n))) && (y -= n - (n = h._start)), this._tTime = y, this._time = n, this._act = !d, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = t), m || !n || e || fe(this, "onStart"), m <= n && 0 <= t)
                        for (s = this._first; s;) {
                            if (r = s._next, (s._act || n >= s._start) && s._ts && h !== s) { if (s.parent !== this) return this.render(t, e, i); if (s.render(0 < s._ts ? (n - s._start) * s._ts : (s._dirty ? s.totalDuration() : s._tDur) + (n - s._start) * s._ts, e, i), n !== this._time || !this._ts && !l) { h = 0, r && (y += this._zTime = -Nt); break } }
                            s = r
                        } else {
                            s = this._last;
                            for (var S = t < 0 ? t : n; s;) {
                                if (r = s._prev, (s._act || S <= s._end) && s._ts && h !== s) { if (s.parent !== this) return this.render(t, e, i); if (s.render(0 < s._ts ? (S - s._start) * s._ts : (s._dirty ? s.totalDuration() : s._tDur) + (S - s._start) * s._ts, e, i), n !== this._time || !this._ts && !l) { h = 0, r && (y += this._zTime = S ? -Nt : Nt); break } }
                                s = r
                            }
                        }
                    if (h && !e && (this.pause(), h.render(m <= n ? 0 : -Nt)._zTime = m <= n ? 1 : -1, this._ts)) return this._start = u, N(this), this.render(t, e, i);
                    this._onUpdate && !e && fe(this, "onUpdate", !0), (y === g && g >= this.totalDuration() || !y && this._ts < 0) && (u !== this._start && Math.abs(d) === Math.abs(this._ts) || (!t && v || !(t && 0 < this._ts || !y && this._ts < 0) || z(this, 1), e || t < 0 && !m || (fe(this, y === g ? "onComplete" : "onReverseComplete", !0), this._prom && this._prom())))
                }
                return this
            }, a.add = function(t, e) {
                var i = this;
                if (r(e) || (e = B(this, e)), !(t instanceof Me)) {
                    if (qt(t)) return t.forEach(function(t) { return i.add(t, e) }), D(this);
                    if (n(t)) return this.addLabel(t, e);
                    if (!s(t)) return this;
                    t = je.delayedCall(0, t)
                }
                return this !== t ? H(this, t, e) : this
            }, a.getChildren = function(t, e, i, n) { void 0 === t && (t = !0), void 0 === e && (e = !0), void 0 === i && (i = !0), void 0 === n && (n = -$t); for (var s = [], r = this._first; r;) r._start >= n && (r instanceof je ? e && s.push(r) : (i && s.push(r), t && s.push.apply(s, r.getChildren(!0, e, i)))), r = r._next; return s }, a.getById = function(t) {
                for (var e = this.getChildren(1, 1, 1), i = e.length; i--;)
                    if (e[i].vars.id === t) return e[i]
            }, a.remove = function(t) { return n(t) ? this.removeLabel(t) : s(t) ? this.killTweensOf(t) : (P(this, t), t === this._recent && (this._recent = this._last), D(this)) }, a.totalTime = function(e, i) { return arguments.length ? (this._forcing = 1, this.parent || this._dp || !this._ts || (this._start = b(we.time - (0 < this._ts ? e / this._ts : (this.totalDuration() - e) / -this._ts))), t.prototype.totalTime.call(this, e, i), this._forcing = 0, this) : this._tTime }, a.addLabel = function(t, e) { return this.labels[t] = B(this, e), this }, a.removeLabel = function(t) { return delete this.labels[t], this }, a.addPause = function(t, e, i) { var n = je.delayedCall(0, e || m, i); return n.data = "isPause", this._hasPause = 1, H(this, n, B(this, t)) }, a.removePause = function(t) { var e = this._first; for (t = B(this, t); e;) e._start === t && "isPause" === e.data && z(e), e = e._next }, a.killTweensOf = function(t, e, i) { for (var n = this.getTweensOf(t, i), s = n.length; s--;) De !== n[s] && n[s].kill(t, e); return this }, a.getTweensOf = function(t, e) { for (var i, n = [], s = ce(t), r = this._first; r;) r instanceof je ? !T(r._targets, s) || e && !r.isActive("started" === e) || n.push(r) : (i = r.getTweensOf(s, e)).length && n.push.apply(n, i), r = r._next; return n }, a.tweenTo = function(t, e) {
                e = e || {};
                var i = this,
                    n = B(i, t),
                    s = e.startAt,
                    r = e.onStart,
                    o = e.onStartParams,
                    a = je.to(i, k(e, {
                        ease: "none",
                        lazy: !1,
                        time: n,
                        duration: e.duration || Math.abs(n - (s && "time" in s ? s.time : i._time)) / i.timeScale() || Nt,
                        onStart: function() {
                            i.pause();
                            var t = e.duration || Math.abs(n - i._time) / i.timeScale();
                            a._dur !== t && F(a, t).render(a._time, !0, !0), r && r.apply(a, o || [])
                        }
                    }));
                return a
            }, a.tweenFromTo = function(t, e, i) { return this.tweenTo(e, k({ startAt: { time: B(this, t) } }, i)) }, a.recent = function() { return this._recent }, a.nextLabel = function(t) { return void 0 === t && (t = this._time), tt(this, B(this, t)) }, a.previousLabel = function(t) { return void 0 === t && (t = this._time), tt(this, B(this, t), 1) }, a.currentLabel = function(t) { return arguments.length ? this.seek(t, !0) : this.previousLabel(this._time + Nt) }, a.shiftChildren = function(t, e, i) {
                void 0 === i && (i = 0);
                for (var n, s = this._first, r = this.labels; s;) s._start >= i && (s._start += t), s = s._next;
                if (e)
                    for (n in r) r[n] >= i && (r[n] += t);
                return D(this)
            }, a.invalidate = function() { var e = this._first; for (this._lock = 0; e;) e.invalidate(), e = e._next; return t.prototype.invalidate.call(this) }, a.clear = function(t) { void 0 === t && (t = !0); for (var e, i = this._first; i;) e = i._next, this.remove(i), i = e; return this._time = this._tTime = 0, t && (this.labels = {}), D(this) }, a.totalDuration = function(t) {
                var e, i, n, s, r = 0,
                    o = this,
                    a = o._last,
                    l = $t;
                if (arguments.length) return o._repeat < 0 ? o : o.timeScale(o.totalDuration() / t);
                if (o._dirty) {
                    for (s = o.parent; a;) e = a._prev, a._dirty && a.totalDuration(), l < (n = a._start) && o._sort && a._ts && !o._lock ? (o._lock = 1, H(o, a, n - a._delay, 1)._lock = 0) : l = n, n < 0 && a._ts && (r -= n, (!s && !o._dp || s && s.smoothChildTiming) && (o._start += n / o._ts, o._time -= n, o._tTime -= n), o.shiftChildren(-n, !1, -1e20), l = 0), r < (i = N(a)) && a._ts && (r = i), a = e;
                    F(o, o === ut && o._time > r ? o._time : Math.min($t, r), 1), o._dirty = 0
                }
                return o._tDur
            }, o.updateRoot = function(t) {
                if (ut._ts && (x(ut, $(t, ut)), vt = we.frame), we.frame >= se) {
                    se += Dt.autoSleep || 120;
                    var e = ut._first;
                    if ((!e || !e._ts) && Dt.autoSleep && we._listeners.length < 2) {
                        for (; e && !e._ts;) e = e._next;
                        e || we.sleep()
                    }
                }
            }, o
        }(Me);

        function ze(t, e, i, r, o, l) {
            var h, d, u, c;
            if (ie[t] && !1 !== (h = new ie[t]).init(o, h.rawVars ? e[t] : function(t, e, i, r, o) { if (s(t) && (t = Ne(t, o, e, i, r)), !a(t) || t.style && t.nodeType || qt(t)) return n(t) ? Ne(t, o, e, i, r) : t; var l, h = {}; for (l in t) h[l] = Ne(t[l], o, e, i, r); return h }(e[t], r, o, l, i), i, r, l) && (i._pt = d = new ti(i._pt, o, t, 0, 1, h.render, h, 0, h.priority), i !== yt))
                for (u = i._ptLookup[i._targets.indexOf(o)], c = h._props.length; c--;) u[h._props[c]] = d;
            return h
        }
        k(Pe.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
        var De, Le = function(t, e, i, r, o, a, l, h, d) {
                s(r) && (r = r(o || 0, t, a));
                var u, p = t[e],
                    f = "get" !== i ? i : s(p) ? d ? t[e.indexOf("set") || !s(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](d) : t[e]() : p,
                    m = s(p) ? d ? Ve : qe : Be;
                if (n(r) && (~r.indexOf("random(") && (r = J(r)), "=" === r.charAt(1) && (r = parseFloat(f) + parseFloat(r.substr(2)) * ("-" === r.charAt(0) ? -1 : 1) + (V(f) || 0))), f !== r) return isNaN(f + r) ? (p || e in t || c(e, r), function(t, e, i, n, s, r, o) {
                    var a, l, h, d, u, c, p, f, m = new ti(this._pt, t, e, 0, 1, Xe, null, s),
                        g = 0,
                        v = 0;
                    for (m.b = i, m.e = n, i += "", (p = ~(n += "").indexOf("random(")) && (n = J(n)), r && (r(f = [i, n], t, e), i = f[0], n = f[1]), l = i.match(Ut) || []; a = Ut.exec(n);) d = a[0], u = n.substring(g, a.index), h ? h = (h + 1) % 5 : "rgba(" === u.substr(-5) && (h = 1), d !== l[v++] && (c = parseFloat(l[v - 1]) || 0, m._pt = { _next: m._pt, p: u || 1 === v ? u : ",", s: c, c: "=" === d.charAt(1) ? parseFloat(d.substr(2)) * ("-" === d.charAt(0) ? -1 : 1) : parseFloat(d) - c, m: h && h < 4 ? Math.round : 0 }, g = Ut.lastIndex);
                    return m.c = g < n.length ? n.substring(g, n.length) : "", m.fp = o, (Qt.test(n) || p) && (m.e = 0), this._pt = m
                }.call(this, t, e, f, r, m, h || Dt.stringFilter, d)) : (u = new ti(this._pt, t, e, +f || 0, r - (f || 0), "boolean" == typeof p ? Ue : Ge, 0, m), d && (u.fp = d), l && u.modifier(l, this, t), this._pt = u)
            },
            $e = function t(e, i) {
                var n, s, r, o, a, h, d, u, c, p, f, m, y = e.vars,
                    w = y.ease,
                    b = y.startAt,
                    T = y.immediateRender,
                    _ = y.lazy,
                    x = y.onUpdate,
                    E = y.onUpdateParams,
                    C = y.callbackScope,
                    I = y.runBackwards,
                    A = y.yoyoEase,
                    O = y.keyframes,
                    P = y.autoRevert,
                    D = e._dur,
                    L = e._startAt,
                    $ = e._targets,
                    N = e.parent,
                    R = N && "nested" === N.data ? N.parent._targets : $,
                    H = "auto" === e._overwrite,
                    j = e.timeline;
                if (!j || O && w || (w = "none"), e._ease = Ee(w, Lt.ease), e._yEase = A ? xe(Ee(!0 === A ? w : A, Lt.ease)) : 0, A && e._yoyo && !e._repeat && (A = e._yEase, e._yEase = e._ease, e._ease = A), !j) {
                    if (L && L.render(-1, !0).kill(), b) {
                        if (z(e._startAt = je.set($, k({ data: "isStart", overwrite: !1, parent: N, immediateRender: !0, lazy: l(_), startAt: null, delay: 0, onUpdate: x, onUpdateParams: E, callbackScope: C, stagger: 0 }, b))), T)
                            if (0 < i) P || (e._startAt = 0);
                            else if (D) return
                    } else if (I && D)
                        if (L) P || (e._startAt = 0);
                        else if (i && (T = !1), z(e._startAt = je.set($, ae(M(y, Jt), { overwrite: !1, data: "isFromStart", lazy: T && l(_), immediateRender: T, stagger: 0, parent: N }))), T) { if (!i) return } else t(e._startAt, Nt);
                    for (n = M(y, Jt), m = (u = $[e._pt = 0] ? v($[0]).harness : 0) && y[u.prop], _ = D && l(_) || _ && !D, s = 0; s < $.length; s++) {
                        if (d = (a = $[s])._gsap || g($)[s]._gsap, e._ptLookup[s] = p = {}, ee[d.id] && S(), f = R === $ ? s : R.indexOf(a), u && !1 !== (c = new u).init(a, m || n, e, f, R) && (e._pt = o = new ti(e._pt, a, c.name, 0, 1, c.render, c, 0, c.priority), c._props.forEach(function(t) { p[t] = o }), c.priority && (h = 1)), !u || m)
                            for (r in n) ie[r] && (c = ze(r, n, e, f, a, R)) ? c.priority && (h = 1) : p[r] = o = Le.call(e, a, r, "get", n[r], f, R, 0, y.stringFilter);
                        e._op && e._op[s] && e.kill(a, e._op[s]), H && e._pt && (De = e, ut.killTweensOf(a, p, "started"), De = 0), e._pt && _ && (ee[d.id] = 1)
                    }
                    h && Je(e), e._onInit && e._onInit(e)
                }
                e._from = !j && !!y.runBackwards, e._onUpdate = x, e._initted = 1
            },
            Ne = function(t, e, i, r, o) { return s(t) ? t.call(e, i, r, o) : n(t) && ~t.indexOf("random(") ? J(t) : t },
            Re = oe + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase",
            He = (Re + ",id,stagger,delay,duration,paused").split(","),
            je = function(t) {
                function s(e, n, s, o) {
                    var h;
                    "number" == typeof n && (s.duration = n, n = s, s = null);
                    var u, c, f, v, y, w, b, T, _ = (h = t.call(this, o ? n : O(n), s) || this).vars,
                        S = _.duration,
                        x = _.delay,
                        E = _.immediateRender,
                        C = _.stagger,
                        I = _.overwrite,
                        A = _.keyframes,
                        M = _.defaults,
                        P = h.parent,
                        z = (qt(e) ? r(e[0]) : "length" in n) ? [e] : ce(e);
                    if (h._targets = z.length ? g(z) : p("GSAP target " + e + " not found. https://greensock.com", !Dt.nullTargetWarn) || [], h._ptLookup = [], h._overwrite = I, A || C || d(S) || d(x)) {
                        if (n = h.vars, (u = h.timeline = new Pe({ data: "nested", defaults: M || {} })).kill(), u.parent = i(h), A) k(u.vars.defaults, { ease: "none" }), A.forEach(function(t) { return u.to(z, t, ">") });
                        else {
                            if (v = z.length, b = C ? U(C) : m, a(C))
                                for (y in C) ~Re.indexOf(y) && ((T = T || {})[y] = C[y]);
                            for (c = 0; c < v; c++) {
                                for (y in f = {}, n) He.indexOf(y) < 0 && (f[y] = n[y]);
                                f.stagger = 0, T && ae(f, T), n.yoyoEase && !n.repeat && (f.yoyoEase = n.yoyoEase), w = z[c], f.duration = +Ne(S, i(h), c, w, z), f.delay = (+Ne(x, i(h), c, w, z) || 0) - h._delay, !C && 1 === v && f.delay && (h._delay = x = f.delay, h._start += x, f.delay = 0), u.to(w, f, b(c, w, z))
                            }
                            S = x = 0
                        }
                        S || h.duration(S = u.duration())
                    } else h.timeline = 0;
                    return !0 === I && (De = i(h), ut.killTweensOf(z), De = 0), P && R(P, i(h)), (E || !S && !A && h._start === P._time && l(E) && function t(e) { return !e || e._ts && t(e.parent) }(i(h)) && "nested" !== P.data) && (h._tTime = -Nt, h.render(Math.max(0, -x))), h
                }
                e(s, t);
                var o = s.prototype;
                return o.render = function(t, e, i) {
                    var n, s, r, o, a, l, h, d, u, c = this._time,
                        p = this._tDur,
                        f = this._dur,
                        m = p - Nt < t && 0 <= t ? p : t < Nt ? 0 : t;
                    if (f) {
                        if (m !== this._tTime || !t || i || this._startAt && this._zTime < 0 != t < 0) {
                            if (n = m, d = this.timeline, this._repeat) {
                                if ((f < (n = b(m % (o = f + this._rDelay))) || p === m) && (n = f), (r = ~~(m / o)) && r === m / o && (n = f, r--), (l = this._yoyo && 1 & r) && (u = this._yEase, n = f - n), a = le(this._tTime, o), n === c && !i && this._initted) return this;
                                r !== a && (!this.vars.repeatRefresh || l || this._lock || (this._lock = i = 1, this.render(o * r, !0).invalidate()._lock = 0))
                            }
                            if (!this._initted && j(this, n, i, e)) return this._tTime = 0, this;
                            for (this._tTime = m, this._time = n, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = h = (u || this._ease)(n / f), this._from && (this.ratio = h = 1 - h), c || !n || e || fe(this, "onStart"), s = this._pt; s;) s.r(h, s.d), s = s._next;
                            d && d.render(t < 0 ? t : !n && l ? -Nt : d._dur * h, e, i) || this._startAt && (this._zTime = t), this._onUpdate && !e && (t < 0 && this._startAt && this._startAt.render(t, !0, i), fe(this, "onUpdate")), this._repeat && r !== a && this.vars.onRepeat && !e && this.parent && fe(this, "onRepeat"), m !== this._tDur && m || this._tTime !== m || (t < 0 && this._startAt && !this._onUpdate && this._startAt.render(t, !0, i), !t && f || !(t && 0 < this._ts || !m && this._ts < 0) || z(this, 1), e || t < 0 && !c || m < p && 0 < this.timeScale() || (fe(this, m === p ? "onComplete" : "onReverseComplete", !0), this._prom && this._prom()))
                        }
                    } else ! function(t, e, i, n) {
                        var s, r = t._zTime < 0 ? 0 : 1,
                            o = e < 0 ? 0 : 1,
                            a = t._rDelay,
                            l = 0;
                        if (a && t._repeat && (l = de(0, t._tDur, e), le(l, a) !== le(t._tTime, a) && (r = 1 - o, t.vars.repeatRefresh && t._initted && t.invalidate())), (t._initted || !j(t, e, n, i)) && (o !== r || n || t._zTime === Nt || !e && t._zTime)) { for (t._zTime = e || (i ? Nt : 0), t.ratio = o, t._from && (o = 1 - o), t._time = 0, t._tTime = l, i || fe(t, "onStart"), s = t._pt; s;) s.r(o, s.d), s = s._next;!o && t._startAt && !t._onUpdate && t._start && t._startAt.render(e, !0, n), t._onUpdate && (i || fe(t, "onUpdate")), l && t._repeat && !i && t.parent && fe(t, "onRepeat"), (e >= t._tDur || e < 0) && t.ratio === o && (t.ratio && z(t, 1), i || (fe(t, t.ratio ? "onComplete" : "onReverseComplete", !0), t._prom && t._prom())) }
                    }(this, t, e, i);
                    return this
                }, o.targets = function() { return this._targets }, o.invalidate = function() { return this._pt = this._op = this._startAt = this._onUpdate = this._act = this._lazy = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(), t.prototype.invalidate.call(this) }, o.kill = function(t, e) {
                    if (void 0 === e && (e = "all"), !(t || e && "all" !== e) && (this._lazy = 0, this.parent)) return et(this);
                    if (this.timeline) return this.timeline.killTweensOf(t, e, De && !0 !== De.vars.overwrite), this;
                    var i, s, r, o, a, l, h, d = this._targets,
                        u = t ? ce(t) : d,
                        c = this._ptLookup,
                        p = this._pt;
                    if ((!e || "all" === e) && function(t, e) { for (var i = t.length, n = i === e.length; n && i-- && t[i] === e[i];); return i < 0 }(d, u)) return et(this);
                    for (i = this._op = this._op || [], "all" !== e && (n(e) && (a = {}, w(e, function(t) { return a[t] = 1 }), e = a), e = function(t, e) {
                            var i, n, s, r, o = t[0] ? v(t[0]).harness : 0,
                                a = o && o.aliases;
                            if (!a) return e;
                            for (n in i = ae({}, e), a)
                                if (n in i)
                                    for (s = (r = a[n].split(",")).length; s--;) i[r[s]] = i[n];
                            return i
                        }(d, e)), h = d.length; h--;)
                        if (~u.indexOf(d[h]))
                            for (a in s = c[h], "all" === e ? (i[h] = e, o = s, r = {}) : (r = i[h] = i[h] || {}, o = e), o)(l = s && s[a]) && ("kill" in l.d && !0 !== l.d.kill(a) || P(this, l, "_pt"), delete s[a]), "all" !== r && (r[a] = 1);
                    return this._initted && !this._pt && p && et(this), this
                }, s.to = function(t, e, i) { return new s(t, e, i) }, s.from = function(t, e) { return new s(t, _(arguments, 1)) }, s.delayedCall = function(t, e, i, n) { return new s(e, 0, { immediateRender: !1, lazy: !1, overwrite: !1, delay: t, onComplete: e, onReverseComplete: e, onCompleteParams: i, onReverseCompleteParams: i, callbackScope: n }) }, s.fromTo = function(t, e, i) { return new s(t, _(arguments, 2)) }, s.set = function(t, e) { return e.duration = 0, e.repeatDelay || (e.repeat = 0), new s(t, e) }, s.killTweensOf = function(t, e, i) { return ut.killTweensOf(t, e, i) }, s
            }(Me);

        function Fe(t, e, i) { return t.setAttribute(e, i) }

        function We(t, e, i, n) { n.mSet(t, e, n.m.call(n.tween, i, n.mt), n) }
        k(je.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 }), w("staggerTo,staggerFrom,staggerFromTo", function(t) {
            je[t] = function() {
                var e = new Pe,
                    i = ue.call(arguments, 0);
                return i.splice("staggerFromTo" === t ? 5 : 4, 0, 0), e[t].apply(e, i)
            }
        });
        var Be = function(t, e, i) { return t[e] = i },
            qe = function(t, e, i) { return t[e](i) },
            Ve = function(t, e, i, n) { return t[e](n.fp, i) },
            Ye = function(t, e) { return s(t[e]) ? qe : o(t[e]) && t.setAttribute ? Fe : Be },
            Ge = function(t, e) { return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4, e) },
            Ue = function(t, e) { return e.set(e.t, e.p, !!(e.s + e.c * t), e) },
            Xe = function(t, e) {
                var i = e._pt,
                    n = "";
                if (!t && e.b) n = e.b;
                else if (1 === t && e.e) n = e.e;
                else {
                    for (; i;) n = i.p + (i.m ? i.m(i.s + i.c * t) : Math.round(1e4 * (i.s + i.c * t)) / 1e4) + n, i = i._next;
                    n += e.c
                }
                e.set(e.t, e.p, n, e)
            },
            Qe = function(t, e) { for (var i = e._pt; i;) i.r(t, i.d), i = i._next },
            Ke = function(t, e, i, n) { for (var s, r = this._pt; r;) s = r._next, r.p === n && r.modifier(t, e, i), r = s },
            Ze = function(t) { for (var e, i, n = this._pt; n;) i = n._next, n.p === t && !n.op || n.op === t ? P(this, n, "_pt") : n.dep || (e = 1), n = i; return !e },
            Je = function(t) {
                for (var e, i, n, s, r = t._pt; r;) {
                    for (e = r._next, i = n; i && i.pr > r.pr;) i = i._next;
                    (r._prev = i ? i._prev : s) ? r._prev._next = r: n = r, (r._next = i) ? i._prev = r : s = r, r = e
                }
                t._pt = n
            },
            ti = (ei.prototype.modifier = function(t, e, i) { this.mSet = this.mSet || this.set, this.set = We, this.m = t, this.mt = i, this.tween = e }, ei);

        function ei(t, e, i, n, s, r, o, a, l) { this.t = e, this.s = n, this.c = s, this.p = i, this.r = r || Ge, this.d = o || this, this.set = a || Be, this.pr = l || 0, (this._next = t) && (t._prev = this) }
        w(oe + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert", function(t) { return Jt[t] = 1 }), Zt.TweenMax = Zt.TweenLite = je, Zt.TimelineLite = Zt.TimelineMax = Pe, ut = new Pe({ sortChildren: !1, defaults: Lt, autoRemoveChildren: !0, id: "root", smoothChildTiming: !0 }), Dt.stringFilter = ot;
        var ii = {
            registerPlugin: function() {
                for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                e.forEach(function(t) {
                    return function(t) {
                        var e = (t = !t.name && t.default || t).name,
                            i = s(t),
                            n = e && !i && t.init ? function() { this._props = [] } : t,
                            r = { init: m, render: Qe, add: Le, kill: Ze, modifier: Ke, rawVars: 0 },
                            o = { targetTest: 0, get: 0, getSetter: Ye, aliases: {}, register: 0 };
                        if (be(), t !== n) {
                            if (ie[e]) return;
                            k(n, k(M(t, r), o)), ae(n.prototype, ae(r, M(t, o))), ie[n.prop = e] = n, t.targetTest && (re.push(n), Jt[e] = 1), e = ("css" === e ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin"
                        }
                        f(e, n), t.register && t.register(ri, n, ti)
                    }(t)
                })
            },
            timeline: function(t) { return new Pe(t) },
            getTweensOf: function(t, e) { return ut.getTweensOf(t, e) },
            getProperty: function(t, e, i, s) {
                n(t) && (t = ce(t)[0]);
                var r = v(t || {}).get,
                    o = i ? C : E;
                return "native" === i && (i = ""), t ? e ? o((ie[e] && ie[e].get || r)(t, e, i, s)) : function(e, i, n) { return o((ie[e] && ie[e].get || r)(t, e, i, n)) } : t
            },
            quickSetter: function(t, e, i) {
                if (1 < (t = ce(t)).length) {
                    var n = t.map(function(t) { return ri.quickSetter(t, e, i) }),
                        s = n.length;
                    return function(t) { for (var e = s; e--;) n[e](t) }
                }
                t = t[0] || {};
                var r = ie[e],
                    o = v(t),
                    a = r ? function(e) {
                        var n = new r;
                        yt._pt = 0, n.init(t, i ? e + i : e, yt, 0, [t]), n.render(1, n), yt._pt && Qe(1, yt)
                    } : o.set(t, e);
                return r ? a : function(n) { return a(t, e, i ? n + i : n, o, 1) }
            },
            isTweening: function(t) { return 0 < ut.getTweensOf(t, !0).length },
            defaults: function(t) { return t && t.ease && (t.ease = Ee(t.ease, Lt.ease)), A(Lt, t || {}) },
            config: function(t) { return A(Dt, t || {}) },
            registerEffect: function(t) {
                var e = t.name,
                    i = t.effect,
                    n = t.plugins,
                    s = t.defaults,
                    r = t.extendTimeline;
                (n || "").split(",").forEach(function(t) { return t && !ie[t] && !Zt[t] && p(e + " effect requires " + t + " plugin.") }), ne[e] = function(t, e) { return i(ce(t), k(e || {}, s)) }, r && (Pe.prototype[e] = function(t, i, n) { return this.add(ne[e](t, a(i) ? i : (n = i) && {}), n) })
            },
            registerEase: function(t, e) { Te[t] = Ee(e) },
            parseEase: function(t, e) { return arguments.length ? Ee(t, e) : Te },
            getById: function(t) { return ut.getById(t) },
            exportRoot: function(t, e) { void 0 === t && (t = {}); var i, n, s = new Pe(t); for (s.smoothChildTiming = l(t.smoothChildTiming), ut.remove(s), s._dp = 0, s._time = s._tTime = ut._time, i = ut._first; i;) n = i._next, !e && !i._dur && i instanceof je && i.vars.onComplete === i._targets[0] || H(s, i, i._start - i._delay), i = n; return H(ut, s, 0), s },
            utils: {
                wrap: function t(e, i, n) { var s = i - e; return qt(e) ? Z(e, t(0, e.length), i) : q(n, function(t) { return (s + (t - e) % s) % s + e }) },
                wrapYoyo: function t(e, i, n) {
                    var s = i - e,
                        r = 2 * s;
                    return qt(e) ? Z(e, t(0, e.length - 1), i) : q(n, function(t) { return e + (s < (t = (r + (t - e) % r) % r) ? r - t : t) })
                },
                distribute: U,
                random: K,
                snap: Q,
                normalize: function(t, e, i) { return pe(t, e, 0, 1, i) },
                getUnit: V,
                clamp: function(t, e, i) { return q(i, function(i) { return de(t, e, i) }) },
                splitColor: nt,
                toArray: ce,
                mapRange: pe,
                pipe: function() { for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i]; return function(t) { return e.reduce(function(t, e) { return e(t) }, t) } },
                unitize: function(t, e) { return function(i) { return t(parseFloat(i)) + (e || V(i)) } },
                interpolate: function t(e, i, s, r) {
                    var o = isNaN(e + i) ? 0 : function(t) { return (1 - t) * e + t * i };
                    if (!o) {
                        var a, l, h, d, u, c = n(e),
                            p = {};
                        if (!0 === s && (r = 1) && (s = null), c) e = { p: e }, i = { p: i };
                        else if (qt(e) && !qt(i)) {
                            for (h = [], d = e.length, u = d - 2, l = 1; l < d; l++) h.push(t(e[l - 1], e[l]));
                            d--, o = function(t) { t *= d; var e = Math.min(u, ~~t); return h[e](t - e) }, s = i
                        } else r || (e = ae(qt(e) ? [] : {}, e));
                        if (!h) {
                            for (a in i) Le.call(p, e, a, "get", i[a]);
                            o = function(t) { return Qe(t, p) || (c ? e.p : e) }
                        }
                    }
                    return q(s, o)
                },
                shuffle: G
            },
            install: u,
            effects: ne,
            ticker: we,
            updateRoot: Pe.updateRoot,
            plugins: ie,
            globalTimeline: ut,
            core: { PropTween: ti, globals: f, Tween: je, Timeline: Pe, Animation: Me, getCache: v, _removeLinkedListItem: P }
        };

        function ni(t, e) { for (var i = t._pt; i && i.p !== e && i.op !== e && i.fp !== e;) i = i._next; return i }

        function si(t, e) {
            return {
                name: t,
                rawVars: 1,
                init: function(t, i, s) {
                    s._onInit = function(t) {
                        var s, r;
                        if (n(i) && (s = {}, w(i, function(t) { return s[t] = 1 }), i = s), e) {
                            for (r in s = {}, i) s[r] = e(i[r]);
                            i = s
                        }! function(t, e) {
                            var i, n, s, r = t._targets;
                            for (i in e)
                                for (n = r.length; n--;)(s = (s = t._ptLookup[n][i]) && s.d) && (s._pt && (s = ni(s, i)), s && s.modifier && s.modifier(e[i], t, r[n], i))
                        }(t, i)
                    }
                }
            }
        }
        w("to,from,fromTo,delayedCall,set,killTweensOf", function(t) { return ii[t] = je[t] }), we.add(Pe.updateRoot), yt = ii.to({}, { duration: 0 });
        var ri = ii.registerPlugin({ name: "attr", init: function(t, e, i, n, s) { for (var r in e) this.add(t, "setAttribute", (t.getAttribute(r) || 0) + "", e[r], n, s, 0, 0, r), this._props.push(r) } }, { name: "endArray", init: function(t, e) { for (var i = e.length; i--;) this.add(t, i, t[i] || 0, e[i]) } }, si("roundProps", X), si("modifiers"), si("snap", Q)) || ii;

        function oi(t, e) { return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e) }

        function ai(t, e) { return e.set(e.t, e.p, 1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e) }

        function li(t, e) { return e.set(e.t, e.p, t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b, e) }

        function hi(t, e) {
            var i = e.s + e.c * t;
            e.set(e.t, e.p, ~~(i + (i < 0 ? -.5 : .5)) + e.u, e)
        }

        function di(t, e) { return e.set(e.t, e.p, t ? e.e : e.b, e) }

        function ui(t, e) { return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e) }

        function ci(t, e, i) { return t.style[e] = i }

        function pi(t, e, i) { return t.style.setProperty(e, i) }

        function fi(t, e, i) { return t._gsap[e] = i }

        function mi(t, e, i) { return t._gsap.scaleX = t._gsap.scaleY = i }

        function gi(t, e, i, n, s) {
            var r = t._gsap;
            r.scaleX = r.scaleY = i, r.renderTransform(s, r)
        }

        function vi(t, e, i, n, s) {
            var r = t._gsap;
            r[e] = i, r.renderTransform(s, r)
        }

        function yi(t, e) { var i = ji.createElementNS ? ji.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : ji.createElement(t); return i.style ? i : ji.createElement(t) }

        function wi(t, e, i) { var n = getComputedStyle(t); return n[e] || n.getPropertyValue(e.replace(gn, "-$1").toLowerCase()) || n.getPropertyValue(e) || !i && wi(t, Sn(e) || e, 1) || "" }

        function bi() { "undefined" == typeof window || (Hi = window, ji = Hi.document, Fi = ji.documentElement, Bi = yi("div") || { style: {} }, qi = yi("div"), bn = Sn(bn), Tn = Sn(Tn), Bi.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", Yi = !!Sn("perspective"), Wi = 1) }

        function Ti(t) {
            var e, i = yi("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
                n = this.parentNode,
                s = this.nextSibling,
                r = this.style.cssText;
            if (Fi.appendChild(i), i.appendChild(this), this.style.display = "block", t) try { e = this.getBBox(), this._gsapBBox = this.getBBox, this.getBBox = Ti } catch (t) {} else this._gsapBBox && (e = this._gsapBBox());
            return n && (s ? n.insertBefore(this, s) : n.appendChild(this)), Fi.removeChild(i), this.style.cssText = r, e
        }

        function _i(t, e) {
            for (var i = e.length; i--;)
                if (t.hasAttribute(e[i])) return t.getAttribute(e[i])
        }

        function Si(t) { var e; try { e = t.getBBox() } catch (i) { e = Ti.call(t, !0) } return e && (e.width || e.height) || t.getBBox === Ti || (e = Ti.call(t, !0)), !e || e.width || e.x || e.y ? e : { x: +_i(t, ["x", "cx", "x1"]) || 0, y: +_i(t, ["y", "cy", "y1"]) || 0, width: 0, height: 0 } }

        function xi(t) { return !(!t.getCTM || t.parentNode && !t.ownerSVGElement || !Si(t)) }

        function Ei(t, e) {
            if (e) {
                var i = t.style;
                e in cn && (e = bn), i.removeProperty ? ("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6) || (e = "-" + e), i.removeProperty(e.replace(gn, "-$1").toLowerCase())) : i.removeAttribute(e)
            }
        }

        function Ci(t, e, i, n, s, r) { var o = new ti(t._pt, e, i, 0, 1, r ? ui : di); return (t._pt = o).b = n, o.e = s, t._props.push(i), o }

        function ki(t, e, i, n) {
            var s, r, o, a, l = parseFloat(i) || 0,
                h = (i + "").trim().substr((l + "").length) || "px",
                d = Bi.style,
                u = vn.test(e),
                c = "svg" === t.tagName.toLowerCase(),
                p = (c ? "client" : "offset") + (u ? "Width" : "Height"),
                f = "px" === n;
            return n === h || !l || xn[n] || xn[h] ? l : (a = t.getCTM && xi(t), "%" === n && (cn[e] || ~e.indexOf("adius")) ? b(l / (a ? t.getBBox()[u ? "width" : "height"] : t[p]) * 100) : (d[u ? "width" : "height"] = 100 + (f ? h : n), r = ~e.indexOf("adius") || "em" === n && t.appendChild && !c ? t : t.parentNode, a && (r = (t.ownerSVGElement || {}).parentNode), r && r !== ji && r.appendChild || (r = ji.body), (o = r._gsap) && "%" === n && o.width && u && o.time === we.time ? b(l / o.width * 100) : (r === t && (d.position = "static"), r.appendChild(Bi), s = Bi[p], r.removeChild(Bi), d.position = "absolute", u && "%" === n && ((o = v(r)).time = we.time, o.width = r[p]), b(f ? s * l / 100 : 100 / s * l))))
        }

        function Ii(t, e, i, n) { var s; return Wi || bi(), e in wn && "transform" !== e && ~(e = wn[e]).indexOf(",") && (e = e.split(",")[0]), cn[e] && "transform" !== e ? (s = An(t, n), s = "transformOrigin" !== e ? s[e] : Mn(wi(t, Tn)) + " " + s.zOrigin + "px") : (s = t.style[e]) && "auto" !== s && !n && !~(s + "").indexOf("calc(") || (s = Cn[e] && Cn[e](t, e, i) || wi(t, e) || y(t, e) || ("opacity" === e ? 1 : 0)), i && !~(s + "").indexOf(" ") ? ki(t, e, s, i) + i : s }

        function Ai(t, e, i, n) {
            if (!i || "none" === i) {
                var s = Sn(e, t, 1),
                    r = s && wi(t, s, 1);
                r && r !== i && (e = s, i = r)
            }
            var o, a, l, h, d, u, c, p, f, m, g, v, y = new ti(this._pt, t.style, e, 0, 1, Xe),
                w = 0,
                b = 0;
            if (y.b = i, y.e = n, i += "", "auto" == (n += "") && (t.style[e] = n, n = wi(t, e) || n, t.style[e] = i), ot(o = [i, n]), n = o[1], l = (i = o[0]).match(Gt) || [], (n.match(Gt) || []).length) {
                for (; a = Gt.exec(n);) c = a[0], f = n.substring(w, a.index), d ? d = (d + 1) % 5 : "rgba(" !== f.substr(-5) && "hsla(" !== f.substr(-5) || (d = 1), c !== (u = l[b++] || "") && (h = parseFloat(u) || 0, g = u.substr((h + "").length), (v = "=" === c.charAt(1) ? +(c.charAt(0) + "1") : 0) && (c = c.substr(2)), p = parseFloat(c), m = c.substr((p + "").length), w = Gt.lastIndex - m.length, m || (m = m || Dt.units[e] || g, w === n.length && (n += m, y.e += m)), g !== m && (h = ki(t, e, u, m) || 0), y._pt = { _next: y._pt, p: f || 1 === b ? f : ",", s: h, c: v ? v * p : p - h, m: d && d < 4 ? Math.round : 0 });
                y.c = w < n.length ? n.substring(w, n.length) : ""
            } else y.r = "display" === e && "none" === n ? ui : di;
            return Qt.test(n) && (y.e = 0), this._pt = y
        }

        function Mi(t) {
            var e = t.split(" "),
                i = e[0],
                n = e[1] || "50%";
            return "top" !== i && "bottom" !== i && "left" !== n && "right" !== n || (t = i, i = n, n = t), e[0] = En[i] || i, e[1] = En[n] || n, e.join(" ")
        }

        function Oi(t, e) {
            if (e.tween && e.tween._time === e.tween._dur) {
                var i, n, s, r = e.t,
                    o = r.style,
                    a = e.u,
                    l = r._gsap;
                if ("all" === a || !0 === a) o.cssText = "", n = 1;
                else
                    for (s = (a = a.split(",")).length; - 1 < --s;) i = a[s], cn[i] && (n = 1, i = "transformOrigin" === i ? Tn : bn), Ei(r, i);
                n && (Ei(r, bn), l && (l.svg && r.removeAttribute("transform"), An(r, 1), l.uncache = 1))
            }
        }

        function Pi(t) { return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t }

        function zi(t) { var e = wi(t, bn); return Pi(e) ? kn : e.substr(7).match(Yt).map(b) }

        function Di(t, e) {
            var i, n, s, r, o = t._gsap || v(t),
                a = t.style,
                l = zi(t);
            return o.svg && t.getAttribute("transform") ? "1,0,0,1,0,0" === (l = [(s = t.transform.baseVal.consolidate().matrix).a, s.b, s.c, s.d, s.e, s.f]).join(",") ? kn : l : (l !== kn || t.offsetParent || t === Fi || o.svg || (s = a.display, a.display = "block", (i = t.parentNode) && t.offsetParent || (r = 1, n = t.nextSibling, Fi.appendChild(t)), l = zi(t), s ? a.display = s : Ei(t, "display"), r && (n ? i.insertBefore(t, n) : i ? i.appendChild(t) : Fi.removeChild(t))), e && 6 < l.length ? [l[0], l[1], l[4], l[5], l[12], l[13]] : l)
        }

        function Li(t, e, i, n, s, r) {
            var o, a, l, h = t._gsap,
                d = s || Di(t, !0),
                u = h.xOrigin || 0,
                c = h.yOrigin || 0,
                p = h.xOffset || 0,
                f = h.yOffset || 0,
                m = d[0],
                g = d[1],
                v = d[2],
                y = d[3],
                w = d[4],
                b = d[5],
                T = e.split(" "),
                _ = parseFloat(T[0]) || 0,
                S = parseFloat(T[1]) || 0;
            i ? d !== kn && (a = m * y - g * v) && (l = _ * (-g / a) + S * (m / a) - (m * b - g * w) / a, _ = _ * (y / a) + S * (-v / a) + (v * b - y * w) / a, S = l) : (_ = (o = Si(t)).x + (~T[0].indexOf("%") ? _ / 100 * o.width : _), S = o.y + (~(T[1] || T[0]).indexOf("%") ? S / 100 * o.height : S)), n || !1 !== n && h.smooth ? (w = _ - u, b = S - c, h.xOffset = p + (w * m + b * v) - w, h.yOffset = f + (w * g + b * y) - b) : h.xOffset = h.yOffset = 0, h.xOrigin = _, h.yOrigin = S, h.smooth = !!n, h.origin = e, h.originIsAbsolute = !!i, t.style[Tn] = "0px 0px", r && (Ci(r, h, "xOrigin", u, _), Ci(r, h, "yOrigin", c, S), Ci(r, h, "xOffset", p, h.xOffset), Ci(r, h, "yOffset", f, h.yOffset)), t.setAttribute("data-svg-origin", _ + " " + S)
        }

        function $i(t, e, i) { var n = V(e); return b(parseFloat(e) + parseFloat(ki(t, "x", i + "px", n))) + n }

        function Ni(t, e, i, s, r, o) {
            var a, l, h = 360,
                d = n(r),
                u = parseFloat(r) * (d && ~r.indexOf("rad") ? pn : 1),
                c = o ? u * o : u - s,
                p = s + c + "deg";
            return d && ("short" === (a = r.split("_")[1]) && (c %= h) != c % 180 && (c += c < 0 ? h : -h), "cw" === a && c < 0 ? c = (c + 36e9) % h - ~~(c / h) * h : "ccw" === a && 0 < c && (c = (c - 36e9) % h - ~~(c / h) * h)), t._pt = l = new ti(t._pt, e, i, s, c, ai), l.e = p, l.u = "deg", t._props.push(i), l
        }

        function Ri(t, e, i) {
            var n, s, r, o, a, l, h, d = qi.style,
                u = i._gsap;
            for (s in d.cssText = getComputedStyle(i).cssText + ";position:absolute;display:block;", d[bn] = e, ji.body.appendChild(qi), n = An(qi, 1), cn)(r = u[s]) !== (o = n[s]) && "perspective,force3D,transformOrigin,svgOrigin".indexOf(s) < 0 && (a = V(r) !== (h = V(o)) ? ki(i, s, r, h) : parseFloat(r), l = parseFloat(o), t._pt = new ti(t._pt, u, s, a, l - a, oi), t._pt.u = h || 0, t._props.push(s));
            ji.body.removeChild(qi)
        }
        je.version = Pe.version = ri.version = "3.2.4", gt = 1, h() && be();
        var Hi, ji, Fi, Wi, Bi, qi, Vi, Yi, Gi = Te.Power0,
            Ui = Te.Power1,
            Xi = Te.Power2,
            Qi = Te.Power3,
            Ki = Te.Power4,
            Zi = Te.Linear,
            Ji = Te.Quad,
            tn = Te.Cubic,
            en = Te.Quart,
            nn = Te.Quint,
            sn = Te.Strong,
            rn = Te.Elastic,
            on = Te.Back,
            an = Te.SteppedEase,
            ln = Te.Bounce,
            hn = Te.Sine,
            dn = Te.Expo,
            un = Te.Circ,
            cn = {},
            pn = 180 / Math.PI,
            fn = Math.PI / 180,
            mn = Math.atan2,
            gn = /([A-Z])/g,
            vn = /(?:left|right|width|margin|padding|x)/i,
            yn = /[\s,\(]\S/,
            wn = { autoAlpha: "opacity,visibility", scale: "scaleX,scaleY", alpha: "opacity" },
            bn = "transform",
            Tn = bn + "Origin",
            _n = "O,Moz,ms,Ms,Webkit".split(","),
            Sn = function(t, e, i) {
                var n = (e || Bi).style,
                    s = 5;
                if (t in n && !i) return t;
                for (t = t.charAt(0).toUpperCase() + t.substr(1); s-- && !(_n[s] + t in n););
                return s < 0 ? null : (3 === s ? "ms" : 0 <= s ? _n[s] : "") + t
            },
            xn = { deg: 1, rad: 1, turn: 1 },
            En = { top: "0%", bottom: "100%", left: "0%", right: "100%", center: "50%" },
            Cn = { clearProps: function(t, e, i, n, s) { if ("isFromStart" !== s.data) { var r = t._pt = new ti(t._pt, e, i, 0, 0, Oi); return r.u = n, r.pr = -10, r.tween = s, t._props.push(i), 1 } } },
            kn = [1, 0, 0, 1, 0, 0],
            In = {},
            An = function(t, e) {
                var i = t._gsap || new Ae(t);
                if ("x" in i && !e && !i.uncache) return i;
                var n, s, r, o, a, l, h, d, u, c, p, f, m, g, v, y, w, T, _, S, x, E, C, k, I, A, M, O, P, z, D, L, $ = t.style,
                    N = i.scaleX < 0,
                    R = "deg",
                    H = wi(t, Tn) || "0";
                return n = s = r = l = h = d = u = c = p = 0, o = a = 1, i.svg = !(!t.getCTM || !xi(t)), g = Di(t, i.svg), i.svg && (k = !i.uncache && t.getAttribute("data-svg-origin"), Li(t, k || H, !!k || i.originIsAbsolute, !1 !== i.smooth, g)), f = i.xOrigin || 0, m = i.yOrigin || 0, g !== kn && (T = g[0], _ = g[1], S = g[2], x = g[3], n = E = g[4], s = C = g[5], 6 === g.length ? (o = Math.sqrt(T * T + _ * _), a = Math.sqrt(x * x + S * S), l = T || _ ? mn(_, T) * pn : 0, (u = S || x ? mn(S, x) * pn + l : 0) && (a *= Math.cos(u * fn)), i.svg && (n -= f - (f * T + m * S), s -= m - (f * _ + m * x))) : (L = g[6], z = g[7], M = g[8], O = g[9], P = g[10], D = g[11], n = g[12], s = g[13], r = g[14], h = (v = mn(L, P)) * pn, v && (k = E * (y = Math.cos(-v)) + M * (w = Math.sin(-v)), I = C * y + O * w, A = L * y + P * w, M = E * -w + M * y, O = C * -w + O * y, P = L * -w + P * y, D = z * -w + D * y, E = k, C = I, L = A), d = (v = mn(-S, P)) * pn, v && (y = Math.cos(-v), D = x * (w = Math.sin(-v)) + D * y, T = k = T * y - M * w, _ = I = _ * y - O * w, S = A = S * y - P * w), l = (v = mn(_, T)) * pn, v && (k = T * (y = Math.cos(v)) + _ * (w = Math.sin(v)), I = E * y + C * w, _ = _ * y - T * w, C = C * y - E * w, T = k, E = I), h && 359.9 < Math.abs(h) + Math.abs(l) && (h = l = 0, d = 180 - d), o = b(Math.sqrt(T * T + _ * _ + S * S)), a = b(Math.sqrt(C * C + L * L)), v = mn(E, C), u = 2e-4 < Math.abs(v) ? v * pn : 0, p = D ? 1 / (D < 0 ? -D : D) : 0), i.svg && (g = t.getAttribute("transform"), i.forceCSS = t.setAttribute("transform", "") || !Pi(wi(t, bn)), g && t.setAttribute("transform", g))), 90 < Math.abs(u) && Math.abs(u) < 270 && (N ? (o *= -1, u += l <= 0 ? 180 : -180, l += l <= 0 ? 180 : -180) : (a *= -1, u += u <= 0 ? 180 : -180)), i.x = ((i.xPercent = n && Math.round(t.offsetWidth / 2) === Math.round(-n) ? -50 : 0) ? 0 : n) + "px", i.y = ((i.yPercent = s && Math.round(t.offsetHeight / 2) === Math.round(-s) ? -50 : 0) ? 0 : s) + "px", i.z = r + "px", i.scaleX = b(o), i.scaleY = b(a), i.rotation = b(l) + R, i.rotationX = b(h) + R, i.rotationY = b(d) + R, i.skewX = u + R, i.skewY = c + R, i.transformPerspective = p + "px", (i.zOrigin = parseFloat(H.split(" ")[2]) || 0) && ($[Tn] = Mn(H)), i.xOffset = i.yOffset = 0, i.force3D = Dt.force3D, i.renderTransform = i.svg ? $n : Yi ? Ln : On, i.uncache = 0, i
            },
            Mn = function(t) { return (t = t.split(" "))[0] + " " + t[1] },
            On = function(t, e) { e.z = "0px", e.rotationY = e.rotationX = "0deg", e.force3D = 0, Ln(t, e) },
            Pn = "0deg",
            zn = "0px",
            Dn = ") ",
            Ln = function(t, e) {
                var i = e || this,
                    n = i.xPercent,
                    s = i.yPercent,
                    r = i.x,
                    o = i.y,
                    a = i.z,
                    l = i.rotation,
                    h = i.rotationY,
                    d = i.rotationX,
                    u = i.skewX,
                    c = i.skewY,
                    p = i.scaleX,
                    f = i.scaleY,
                    m = i.transformPerspective,
                    g = i.force3D,
                    v = i.target,
                    y = i.zOrigin,
                    w = "",
                    b = "auto" === g && t && 1 !== t || !0 === g;
                if (y && (d !== Pn || h !== Pn)) {
                    var T, _ = parseFloat(h) * fn,
                        S = Math.sin(_),
                        x = Math.cos(_);
                    _ = parseFloat(d) * fn, r = $i(v, r, S * (T = Math.cos(_)) * -y), o = $i(v, o, -Math.sin(_) * -y), a = $i(v, a, x * T * -y + y)
                }
                m !== zn && (w += "perspective(" + m + Dn), (n || s) && (w += "translate(" + n + "%, " + s + "%) "), !b && r === zn && o === zn && a === zn || (w += a !== zn || b ? "translate3d(" + r + ", " + o + ", " + a + ") " : "translate(" + r + ", " + o + Dn), l !== Pn && (w += "rotate(" + l + Dn), h !== Pn && (w += "rotateY(" + h + Dn), d !== Pn && (w += "rotateX(" + d + Dn), u === Pn && c === Pn || (w += "skew(" + u + ", " + c + Dn), 1 === p && 1 === f || (w += "scale(" + p + ", " + f + Dn), v.style[bn] = w || "translate(0, 0)"
            },
            $n = function(t, e) {
                var i, n, s, r, o, a = e || this,
                    l = a.xPercent,
                    h = a.yPercent,
                    d = a.x,
                    u = a.y,
                    c = a.rotation,
                    p = a.skewX,
                    f = a.skewY,
                    m = a.scaleX,
                    g = a.scaleY,
                    v = a.target,
                    y = a.xOrigin,
                    w = a.yOrigin,
                    T = a.xOffset,
                    _ = a.yOffset,
                    S = a.forceCSS,
                    x = parseFloat(d),
                    E = parseFloat(u);
                c = parseFloat(c), p = parseFloat(p), (f = parseFloat(f)) && (p += f = parseFloat(f), c += f), c || p ? (c *= fn, p *= fn, i = Math.cos(c) * m, n = Math.sin(c) * m, s = Math.sin(c - p) * -g, r = Math.cos(c - p) * g, p && (f *= fn, o = Math.tan(p - f), s *= o = Math.sqrt(1 + o * o), r *= o, f && (o = Math.tan(f), i *= o = Math.sqrt(1 + o * o), n *= o)), i = b(i), n = b(n), s = b(s), r = b(r)) : (i = m, r = g, n = s = 0), (x && !~(d + "").indexOf("px") || E && !~(u + "").indexOf("px")) && (x = ki(v, "x", d, "px"), E = ki(v, "y", u, "px")), (y || w || T || _) && (x = b(x + y - (y * i + w * s) + T), E = b(E + w - (y * n + w * r) + _)), (l || h) && (x = b(x + l / 100 * (o = v.getBBox()).width), E = b(E + h / 100 * o.height)), o = "matrix(" + i + "," + n + "," + s + "," + r + "," + x + "," + E + ")", v.setAttribute("transform", o), S && (v.style[bn] = o)
            };
        w("padding,margin,Width,Radius", function(t, e) {
            var i = "Right",
                n = "Bottom",
                s = "Left",
                r = (e < 3 ? ["Top", i, n, s] : ["Top" + s, "Top" + i, n + i, n + s]).map(function(i) { return e < 2 ? t + i : "border" + i + t });
            Cn[1 < e ? "border" + t : t] = function(t, e, i, n, s) {
                var o, a;
                if (arguments.length < 4) return o = r.map(function(e) { return Ii(t, e, i) }), 5 === (a = o.join(" ")).split(o[0]).length ? o[0] : a;
                o = (n + "").split(" "), a = {}, r.forEach(function(t, e) { return a[t] = o[e] = o[e] || o[(e - 1) / 2 | 0] }), t.init(e, a, s)
            }
        });
        var Nn, Rn, Hn = {
            name: "css",
            register: bi,
            targetTest: function(t) { return t.style && t.nodeType },
            init: function(t, e, i, n, s) {
                var r, o, a, l, h, d, u, p, f, m, g, v, y, w, b, T = this._props,
                    _ = t.style;
                for (u in Wi || bi(), e)
                    if ("autoRound" !== u && (o = e[u], !ie[u] || !ze(u, e, i, n, t, s)))
                        if (h = typeof o, d = Cn[u], "function" === h && (h = typeof(o = o.call(i, n, t, s))), "string" === h && ~o.indexOf("random(") && (o = J(o)), d) d(this, t, u, o, i) && (b = 1);
                        else if ("--" === u.substr(0, 2)) this.add(_, "setProperty", getComputedStyle(t).getPropertyValue(u) + "", o + "", n, s, 0, 0, u);
                else {
                    if (r = Ii(t, u), l = parseFloat(r), (m = "string" === h && "=" === o.charAt(1) ? +(o.charAt(0) + "1") : 0) && (o = o.substr(2)), a = parseFloat(o), u in wn && ("autoAlpha" === u && (1 === l && "hidden" === Ii(t, "visibility") && a && (l = 0), Ci(this, _, "visibility", l ? "inherit" : "hidden", a ? "inherit" : "hidden", !a)), "scale" !== u && "transform" !== u && ~(u = wn[u]).indexOf(",") && (u = u.split(",")[0])), g = u in cn)
                        if (v || ((y = t._gsap).renderTransform || An(t), w = !1 !== e.smoothOrigin && y.smooth, (v = this._pt = new ti(this._pt, _, bn, 0, 1, y.renderTransform, y, 0, -1)).dep = 1), "scale" === u) this._pt = new ti(this._pt, y, "scaleY", y.scaleY, m ? m * a : a - y.scaleY), T.push("scaleY", u), u += "X";
                        else { if ("transformOrigin" === u) { o = Mi(o), y.svg ? Li(t, o, 0, w, 0, this) : ((f = parseFloat(o.split(" ")[2]) || 0) !== y.zOrigin && Ci(this, y, "zOrigin", y.zOrigin, f), Ci(this, _, u, Mn(r), Mn(o))); continue } if ("svgOrigin" === u) { Li(t, o, 1, w, 0, this); continue } if (u in In) { Ni(this, y, u, l, o, m); continue } if ("smoothOrigin" === u) { Ci(this, y, "smooth", y.smooth, o); continue } if ("force3D" === u) { y[u] = o; continue } if ("transform" === u) { Ri(this, o, t); continue } }
                    else u in _ || (u = Sn(u) || u);
                    if (g || (a || 0 === a) && (l || 0 === l) && !yn.test(o) && u in _)(p = (r + "").substr((l + "").length)) !== (f = (o + "").substr(((a = a || 0) + "").length) || (u in Dt.units ? Dt.units[u] : p)) && (l = ki(t, u, r, f)), this._pt = new ti(this._pt, g ? y : _, u, l, m ? m * a : a - l, "px" !== f || !1 === e.autoRound || g ? oi : hi), this._pt.u = f || 0, p !== f && (this._pt.b = r, this._pt.r = li);
                    else if (u in _) Ai.call(this, t, u, r, o);
                    else {
                        if (!(u in t)) { c(u, o); continue }
                        this.add(t, u, t[u], o, n, s)
                    }
                    T.push(u)
                }
                b && Je(this)
            },
            get: Ii,
            aliases: wn,
            getSetter: function(t, e, i) { var n = wn[e]; return n && n.indexOf(",") < 0 && (e = n), e in cn && e !== Tn && (t._gsap.x || Ii(t, "x")) ? i && Vi === i ? "scale" === e ? mi : fi : (Vi = i || {}) && ("scale" === e ? gi : vi) : t.style && !o(t.style[e]) ? ci : ~e.indexOf("-") ? pi : Ye(t, e) },
            core: { _removeProperty: Ei, _getMatrix: Di }
        };
        ri.utils.checkPrefix = Sn, Rn = w("x,y,z,scale,scaleX,scaleY,xPercent,yPercent" + "," + (Nn = "rotation,rotationX,rotationY,skewX,skewY") + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", function(t) { cn[t] = 1 }), w(Nn, function(t) { Dt.units[t] = "deg", In[t] = 1 }), wn[Rn[13]] = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent," + Nn, w("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", function(t) {
            var e = t.split(":");
            wn[e[1]] = Rn[e[0]]
        }), w("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(t) { Dt.units[t] = "px" }), ri.registerPlugin(Hn);
        var jn = ri.registerPlugin(Hn) || ri,
            Fn = jn.core.Tween;
        t.Back = on, t.Bounce = ln, t.CSSPlugin = Hn, t.Circ = un, t.Cubic = tn, t.Elastic = rn, t.Expo = dn, t.Linear = Zi, t.Power0 = Gi, t.Power1 = Ui, t.Power2 = Xi, t.Power3 = Qi, t.Power4 = Ki, t.Quad = Ji, t.Quart = en, t.Quint = nn, t.Sine = hn, t.SteppedEase = an, t.Strong = sn, t.TimelineLite = Pe, t.TimelineMax = Pe, t.TweenLite = je, t.TweenMax = Fn, t.default = jn, t.gsap = jn, "undefined" == typeof window || window !== t ? Object.defineProperty(t, "__esModule", { value: !0 }) : delete t.default
    }),
    function(t) {
        if ("function" == typeof define && define.amd) define(["jquery"], t);
        else if ("object" == typeof module && module.exports) {
            var e = require("jquery");
            t(e), module.exports = e
        } else t(jQuery)
    }(function(t) {
        function e(t) { this.init(t) }
        e.prototype = {
            value: 0,
            size: 100,
            startAngle: -Math.PI,
            thickness: "auto",
            fill: { gradient: ["#3aeabb", "#fdd250"] },
            emptyFill: "rgba(0, 0, 0, .1)",
            animation: { duration: 1200, easing: "circleProgressEasing" },
            animationStartValue: 0,
            reverse: !1,
            lineCap: "butt",
            insertMode: "prepend",
            constructor: e,
            el: null,
            canvas: null,
            ctx: null,
            radius: 0,
            arcFill: null,
            lastFrameValue: 0,
            init: function(e) { t.extend(this, e), this.radius = this.size / 2, this.initWidget(), this.initFill(), this.draw(), this.el.trigger("circle-inited") },
            initWidget: function() {
                this.canvas || (this.canvas = t("<canvas>")["prepend" == this.insertMode ? "prependTo" : "appendTo"](this.el)[0]);
                var e = this.canvas;
                if (e.width = this.size, e.height = this.size, this.ctx = e.getContext("2d"), window.devicePixelRatio > 1) {
                    var i = window.devicePixelRatio;
                    e.style.width = e.style.height = this.size + "px", e.width = e.height = this.size * i, this.ctx.scale(i, i)
                }
            },
            initFill: function() {
                function e() {
                    var e = t("<canvas>")[0];
                    e.width = n.size, e.height = n.size, e.getContext("2d").drawImage(i, 0, 0, o, o), n.arcFill = n.ctx.createPattern(e, "no-repeat"), n.drawFrame(n.lastFrameValue)
                }
                var i, n = this,
                    s = this.fill,
                    r = this.ctx,
                    o = this.size;
                if (!s) throw Error("The fill is not specified!");
                if ("string" == typeof s && (s = { color: s }), s.color && (this.arcFill = s.color), s.gradient) {
                    var a = s.gradient;
                    if (1 == a.length) this.arcFill = a[0];
                    else if (a.length > 1) {
                        for (var l = s.gradientAngle || 0, h = s.gradientDirection || [o / 2 * (1 - Math.cos(l)), o / 2 * (1 + Math.sin(l)), o / 2 * (1 + Math.cos(l)), o / 2 * (1 - Math.sin(l))], d = r.createLinearGradient.apply(r, h), u = 0; u < a.length; u++) {
                            var c = a[u],
                                p = u / (a.length - 1);
                            t.isArray(c) && (p = c[1], c = c[0]), d.addColorStop(p, c)
                        }
                        this.arcFill = d
                    }
                }
                s.image && (s.image instanceof Image ? i = s.image : (i = new Image).src = s.image, i.complete ? e() : i.onload = e)
            },
            draw: function() { this.animation ? this.drawAnimated(this.value) : this.drawFrame(this.value) },
            drawFrame: function(t) { this.lastFrameValue = t, this.ctx.clearRect(0, 0, this.size, this.size), this.drawEmptyArc(t), this.drawArc(t) },
            drawArc: function(t) {
                if (0 !== t) {
                    var e = this.ctx,
                        i = this.radius,
                        n = this.getThickness(),
                        s = this.startAngle;
                    e.save(), e.beginPath(), this.reverse ? e.arc(i, i, i - n / 2, s - 2 * Math.PI * t, s) : e.arc(i, i, i - n / 2, s, s + 2 * Math.PI * t), e.lineWidth = n, e.lineCap = this.lineCap, e.strokeStyle = this.arcFill, e.stroke(), e.restore()
                }
            },
            drawEmptyArc: function(t) {
                var e = this.ctx,
                    i = this.radius,
                    n = this.getThickness(),
                    s = this.startAngle;
                t < 1 && (e.save(), e.beginPath(), t <= 0 ? e.arc(i, i, i - n / 2, 0, 2 * Math.PI) : this.reverse ? e.arc(i, i, i - n / 2, s, s - 2 * Math.PI * t) : e.arc(i, i, i - n / 2, s + 2 * Math.PI * t, s), e.lineWidth = n, e.strokeStyle = this.emptyFill, e.stroke(), e.restore())
            },
            drawAnimated: function(e) {
                var i = this,
                    n = this.el,
                    s = t(this.canvas);
                s.stop(!0, !1), n.trigger("circle-animation-start"), s.css({ animationProgress: 0 }).animate({ animationProgress: 1 }, t.extend({}, this.animation, {
                    step: function(t) {
                        var s = i.animationStartValue * (1 - t) + e * t;
                        i.drawFrame(s), n.trigger("circle-animation-progress", [t, s])
                    }
                })).promise().always(function() { n.trigger("circle-animation-end") })
            },
            getThickness: function() { return t.isNumeric(this.thickness) ? this.thickness : this.size / 14 },
            getValue: function() { return this.value },
            setValue: function(t) { this.animation && (this.animationStartValue = this.lastFrameValue), this.value = t, this.draw() }
        }, t.circleProgress = { defaults: e.prototype }, t.easing.circleProgressEasing = function(t) { return t < .5 ? .5 * (t *= 2) * t * t : 1 - .5 * (t = 2 - 2 * t) * t * t }, t.fn.circleProgress = function(i, n) {
            var s = "circle-progress",
                r = this.data(s);
            if ("widget" == i) { if (!r) throw Error('Calling "widget" method on not initialized instance is forbidden'); return r.canvas }
            if ("value" == i) { if (!r) throw Error('Calling "value" method on not initialized instance is forbidden'); if (void 0 === n) return r.getValue(); var o = arguments[1]; return this.each(function() { t(this).data(s).setValue(o) }) }
            return this.each(function() {
                var n = t(this),
                    r = n.data(s),
                    o = t.isPlainObject(i) ? i : {};
                if (r) r.init(o);
                else { var a = t.extend({}, n.data()); "string" == typeof a.fill && (a.fill = JSON.parse(a.fill)), "string" == typeof a.animation && (a.animation = JSON.parse(a.animation)), (o = t.extend(a, o)).el = n, r = new e(o), n.data(s, r) }
            })
        }
    }),
    function(t) {
        "use strict";
        t.fn.countUp = function(e) {
            var i = t.extend({ time: 2e3, delay: 10 }, e);
            return this.each(function() {
                var e = t(this),
                    n = i;
                e.waypoint(function() {
                    e.data("counterupTo") || e.data("counterupTo", e.text());
                    var t = parseInt(e.data("counter-time")) > 0 ? parseInt(e.data("counter-time")) : n.time,
                        i = parseInt(e.data("counter-delay")) > 0 ? parseInt(e.data("counter-delay")) : n.delay,
                        s = t / i,
                        r = e.data("counterupTo"),
                        o = [r],
                        a = /[0-9]+,[0-9]+/.test(r);
                    r = r.replace(/,/g, "");
                    for (var l = (/^[0-9]+$/.test(r), /^[0-9]+\.[0-9]+$/.test(r)), h = l ? (r.split(".")[1] || []).length : 0, d = s; d >= 1; d--) {
                        var u = parseInt(Math.round(r / s * d));
                        if (l && (u = parseFloat(r / s * d).toFixed(h)), a)
                            for (;
                                /(\d+)(\d{3})/.test(u.toString());) u = u.toString().replace(/(\d+)(\d{3})/, "$1,$2");
                        o.unshift(u)
                    }
                    e.data("counterup-nums", o), e.text("0");
                    e.data("counterup-func", function() { e.text(e.data("counterup-nums").shift()), e.data("counterup-nums").length ? setTimeout(e.data("counterup-func"), i) : (e.data("counterup-nums"), e.data("counterup-nums", null), e.data("counterup-func", null)) }), setTimeout(e.data("counterup-func"), i)
                }, { offset: "100%", triggerOnce: !0 })
            })
        }
    }(jQuery),
    function() {
        "use strict";

        function t(n) {
            if (!n) throw new Error("No options passed to Waypoint constructor");
            if (!n.element) throw new Error("No element option passed to Waypoint constructor");
            if (!n.handler) throw new Error("No handler option passed to Waypoint constructor");
            this.key = "waypoint-" + e, this.options = t.Adapter.extend({}, t.defaults, n), this.element = this.options.element, this.adapter = new t.Adapter(this.element), this.callback = n.handler, this.axis = this.options.horizontal ? "horizontal" : "vertical", this.enabled = this.options.enabled, this.triggerPoint = null, this.group = t.Group.findOrCreate({ name: this.options.group, axis: this.axis }), this.context = t.Context.findOrCreateByElement(this.options.context), t.offsetAliases[this.options.offset] && (this.options.offset = t.offsetAliases[this.options.offset]), this.group.add(this), this.context.add(this), i[this.key] = this, e += 1
        }
        var e = 0,
            i = {};
        t.prototype.queueTrigger = function(t) { this.group.queueTrigger(this, t) }, t.prototype.trigger = function(t) { this.enabled && this.callback && this.callback.apply(this, t) }, t.prototype.destroy = function() { this.context.remove(this), this.group.remove(this), delete i[this.key] }, t.prototype.disable = function() { return this.enabled = !1, this }, t.prototype.enable = function() { return this.context.refresh(), this.enabled = !0, this }, t.prototype.next = function() { return this.group.next(this) }, t.prototype.previous = function() { return this.group.previous(this) }, t.invokeAll = function(t) { var e = []; for (var n in i) e.push(i[n]); for (var s = 0, r = e.length; r > s; s++) e[s][t]() }, t.destroyAll = function() { t.invokeAll("destroy") }, t.disableAll = function() { t.invokeAll("disable") }, t.enableAll = function() { for (var e in t.Context.refreshAll(), i) i[e].enabled = !0; return this }, t.refreshAll = function() { t.Context.refreshAll() }, t.viewportHeight = function() { return window.innerHeight || document.documentElement.clientHeight }, t.viewportWidth = function() { return document.documentElement.clientWidth }, t.adapters = [], t.defaults = { context: window, continuous: !0, enabled: !0, group: "default", horizontal: !1, offset: 0 }, t.offsetAliases = { "bottom-in-view": function() { return this.context.innerHeight() - this.adapter.outerHeight() }, "right-in-view": function() { return this.context.innerWidth() - this.adapter.outerWidth() } }, window.Waypoint = t
    }(),
    function() {
        "use strict";

        function t(t) { window.setTimeout(t, 1e3 / 60) }

        function e(t) { this.element = t, this.Adapter = s.Adapter, this.adapter = new this.Adapter(t), this.key = "waypoint-context-" + i, this.didScroll = !1, this.didResize = !1, this.oldScroll = { x: this.adapter.scrollLeft(), y: this.adapter.scrollTop() }, this.waypoints = { vertical: {}, horizontal: {} }, t.waypointContextKey = this.key, n[t.waypointContextKey] = this, i += 1, s.windowContext || (s.windowContext = !0, s.windowContext = new e(window)), this.createThrottledScrollHandler(), this.createThrottledResizeHandler() }
        var i = 0,
            n = {},
            s = window.Waypoint,
            r = window.onload;
        e.prototype.add = function(t) {
            var e = t.options.horizontal ? "horizontal" : "vertical";
            this.waypoints[e][t.key] = t, this.refresh()
        }, e.prototype.checkEmpty = function() {
            var t = this.Adapter.isEmptyObject(this.waypoints.horizontal),
                e = this.Adapter.isEmptyObject(this.waypoints.vertical),
                i = this.element == this.element.window;
            t && e && !i && (this.adapter.off(".waypoints"), delete n[this.key])
        }, e.prototype.createThrottledResizeHandler = function() {
            function t() { e.handleResize(), e.didResize = !1 }
            var e = this;
            this.adapter.on("resize.waypoints", function() { e.didResize || (e.didResize = !0, s.requestAnimationFrame(t)) })
        }, e.prototype.createThrottledScrollHandler = function() {
            function t() { e.handleScroll(), e.didScroll = !1 }
            var e = this;
            this.adapter.on("scroll.waypoints", function() {
                (!e.didScroll || s.isTouch) && (e.didScroll = !0, s.requestAnimationFrame(t))
            })
        }, e.prototype.handleResize = function() { s.Context.refreshAll() }, e.prototype.handleScroll = function() {
            var t = {},
                e = { horizontal: { newScroll: this.adapter.scrollLeft(), oldScroll: this.oldScroll.x, forward: "right", backward: "left" }, vertical: { newScroll: this.adapter.scrollTop(), oldScroll: this.oldScroll.y, forward: "down", backward: "up" } };
            for (var i in e) {
                var n = e[i],
                    s = n.newScroll > n.oldScroll ? n.forward : n.backward;
                for (var r in this.waypoints[i]) {
                    var o = this.waypoints[i][r];
                    if (null !== o.triggerPoint) {
                        var a = n.oldScroll < o.triggerPoint,
                            l = n.newScroll >= o.triggerPoint;
                        (a && l || !a && !l) && (o.queueTrigger(s), t[o.group.id] = o.group)
                    }
                }
            }
            for (var h in t) t[h].flushTriggers();
            this.oldScroll = { x: e.horizontal.newScroll, y: e.vertical.newScroll }
        }, e.prototype.innerHeight = function() { return this.element == this.element.window ? s.viewportHeight() : this.adapter.innerHeight() }, e.prototype.remove = function(t) { delete this.waypoints[t.axis][t.key], this.checkEmpty() }, e.prototype.innerWidth = function() { return this.element == this.element.window ? s.viewportWidth() : this.adapter.innerWidth() }, e.prototype.destroy = function() {
            var t = [];
            for (var e in this.waypoints)
                for (var i in this.waypoints[e]) t.push(this.waypoints[e][i]);
            for (var n = 0, s = t.length; s > n; n++) t[n].destroy()
        }, e.prototype.refresh = function() {
            var t, e = this.element == this.element.window,
                i = e ? void 0 : this.adapter.offset(),
                n = {};
            for (var r in this.handleScroll(), t = { horizontal: { contextOffset: e ? 0 : i.left, contextScroll: e ? 0 : this.oldScroll.x, contextDimension: this.innerWidth(), oldScroll: this.oldScroll.x, forward: "right", backward: "left", offsetProp: "left" }, vertical: { contextOffset: e ? 0 : i.top, contextScroll: e ? 0 : this.oldScroll.y, contextDimension: this.innerHeight(), oldScroll: this.oldScroll.y, forward: "down", backward: "up", offsetProp: "top" } }) {
                var o = t[r];
                for (var a in this.waypoints[r]) {
                    var l, h, d, u, c = this.waypoints[r][a],
                        p = c.options.offset,
                        f = c.triggerPoint,
                        m = 0,
                        g = null == f;
                    c.element !== c.element.window && (m = c.adapter.offset()[o.offsetProp]), "function" == typeof p ? p = p.apply(c) : "string" == typeof p && (p = parseFloat(p), c.options.offset.indexOf("%") > -1 && (p = Math.ceil(o.contextDimension * p / 100))), l = o.contextScroll - o.contextOffset, c.triggerPoint = Math.floor(m + l - p), h = f < o.oldScroll, d = c.triggerPoint >= o.oldScroll, u = !h && !d, !g && (h && d) ? (c.queueTrigger(o.backward), n[c.group.id] = c.group) : !g && u ? (c.queueTrigger(o.forward), n[c.group.id] = c.group) : g && o.oldScroll >= c.triggerPoint && (c.queueTrigger(o.forward), n[c.group.id] = c.group)
                }
            }
            return s.requestAnimationFrame(function() { for (var t in n) n[t].flushTriggers() }), this
        }, e.findOrCreateByElement = function(t) { return e.findByElement(t) || new e(t) }, e.refreshAll = function() { for (var t in n) n[t].refresh() }, e.findByElement = function(t) { return n[t.waypointContextKey] }, window.onload = function() { r && r(), e.refreshAll() }, s.requestAnimationFrame = function(e) {
            (window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || t).call(window, e)
        }, s.Context = e
    }(),
    function() {
        "use strict";

        function t(t, e) { return t.triggerPoint - e.triggerPoint }

        function e(t, e) { return e.triggerPoint - t.triggerPoint }

        function i(t) { this.name = t.name, this.axis = t.axis, this.id = this.name + "-" + this.axis, this.waypoints = [], this.clearTriggerQueues(), n[this.axis][this.name] = this }
        var n = { vertical: {}, horizontal: {} },
            s = window.Waypoint;
        i.prototype.add = function(t) { this.waypoints.push(t) }, i.prototype.clearTriggerQueues = function() { this.triggerQueues = { up: [], down: [], left: [], right: [] } }, i.prototype.flushTriggers = function() {
            for (var i in this.triggerQueues) {
                var n = this.triggerQueues[i],
                    s = "up" === i || "left" === i;
                n.sort(s ? e : t);
                for (var r = 0, o = n.length; o > r; r += 1) {
                    var a = n[r];
                    (a.options.continuous || r === n.length - 1) && a.trigger([i])
                }
            }
            this.clearTriggerQueues()
        }, i.prototype.next = function(e) { this.waypoints.sort(t); var i = s.Adapter.inArray(e, this.waypoints); return i === this.waypoints.length - 1 ? null : this.waypoints[i + 1] }, i.prototype.previous = function(e) { this.waypoints.sort(t); var i = s.Adapter.inArray(e, this.waypoints); return i ? this.waypoints[i - 1] : null }, i.prototype.queueTrigger = function(t, e) { this.triggerQueues[e].push(t) }, i.prototype.remove = function(t) {
            var e = s.Adapter.inArray(t, this.waypoints);
            e > -1 && this.waypoints.splice(e, 1)
        }, i.prototype.first = function() { return this.waypoints[0] }, i.prototype.last = function() { return this.waypoints[this.waypoints.length - 1] }, i.findOrCreate = function(t) { return n[t.axis][t.name] || new i(t) }, s.Group = i
    }(),
    function() {
        "use strict";

        function t(t) { this.$element = e(t) }
        var e = window.jQuery,
            i = window.Waypoint;
        e.each(["innerHeight", "innerWidth", "off", "offset", "on", "outerHeight", "outerWidth", "scrollLeft", "scrollTop"], function(e, i) { t.prototype[i] = function() { var t = Array.prototype.slice.call(arguments); return this.$element[i].apply(this.$element, t) } }), e.each(["extend", "inArray", "isEmptyObject"], function(i, n) { t[n] = e[n] }), i.adapters.push({ name: "jquery", Adapter: t }), i.Adapter = t
    }(),
    function() {
        "use strict";

        function t(t) {
            return function() {
                var i = [],
                    n = arguments[0];
                return t.isFunction(arguments[0]) && ((n = t.extend({}, arguments[1])).handler = arguments[0]), this.each(function() { var s = t.extend({}, n, { element: this }); "string" == typeof s.context && (s.context = t(this).closest(s.context)[0]), i.push(new e(s)) }), i
            }
        }
        var e = window.Waypoint;
        window.jQuery && (window.jQuery.fn.waypoint = t(window.jQuery)), window.Zepto && (window.Zepto.fn.waypoint = t(window.Zepto))
    }();;
/*-----------------------------------------------------------------------------------

    Theme Name: Avo
    Theme URI: http://
    Description: Creative Agency & Portfolio
    Author: UI-ThemeZ
    Author URI: http://themeforest.net/user/UI-ThemeZ
    Version: 1.0

-----------------------------------------------------------------------------------*/

$(function() {

    "use strict";


    /* ===============================  Navbar Menu  =============================== */

    var wind = $(window);

    wind.on("scroll", function() {

        var bodyScroll = wind.scrollTop(),
            navbar = $(".navbar"),
            logo = $(".navbar.change .logo> img");

        if (bodyScroll > 300) {

            navbar.addClass("nav-scroll");
            logo.attr('src', '../../../assets/img/2LOGO.png');

        } else {

            navbar.removeClass("nav-scroll");
            logo.attr('src', '../../../assets/img/2LOGO.png');
        }
    });



    $('.navbar .search .icon').on('click', function() {
        $(".navbar .search .search-form").fadeIn();
    });

    $('.navbar .search .search-form .close').on('click', function() {
        $(".navbar .search .search-form").fadeOut();
    });


    function noScroll() {
        window.scrollTo(0, 0);
    }

    wind.on("scroll", function() {

        var bodyScroll = wind.scrollTop(),
            navbar = $(".topnav");

        if (bodyScroll > 300) {

            navbar.addClass("nav-scroll");

        } else {

            navbar.removeClass("nav-scroll");
        }
    });

    var open = false,
        navDark = $(".topnav.dark"),
        logoChan = $(".topnav.dark .logo img");

    $('.topnav .menu-icon').on('click', function() {
        open = !open;

        $('.hamenu').toggleClass("open");

        if (open) {

            $('.hamenu').animate({ left: 0 });

            $('.topnav .menu-icon .text').addClass('open');

            navDark.addClass("navlit");
            logoChan.attr('src', 'img/logo-light.png');

            window.addEventListener('scroll', noScroll);

        } else {

            $('.hamenu').delay(300).animate({ left: "-100%" });

            $('.topnav .menu-icon .text').removeClass('open');

            navDark.removeClass("navlit");
            logoChan.attr('src', 'img/logo-dark.png');

            window.removeEventListener('scroll', noScroll);
        }
    });

    $('.hamenu .menu-links .main-menu > li').on('mouseenter', function() {
        $(this).css("opacity", "1").siblings().css("opacity", ".5");
    });

    $('.hamenu .menu-links .main-menu > li').on('mouseleave', function() {
        $(".hamenu .menu-links .main-menu > li").css("opacity", "1");
    });


    $('.main-menu > li .dmenu').on('click', function() {
        $(".main-menu").addClass("gosub");
        $(this).parent().parent().find(".sub-menu").addClass("sub-open");
    });

    $('.main-menu .sub-menu li .sub-link.back').on('click', function() {
        $(".main-menu").removeClass("gosub");
        $(".main-menu .sub-menu").removeClass("sub-open");
    });

    /* ===============================  Swiper slider  =============================== */

    /* ===============================  Var Background image  =============================== */

    /* ===============================  slick Carousel  =============================== */

    /* ===============================  YouTubePopUp  =============================== */

    /* ===============================  parallaxie  =============================== */

    /* ===============================  justifiedGallery  =============================== */

    /* ===============================  skills-circle  =============================== */

    /* ===============================  countUp  =============================== */

    /* ===============================  tooltip  =============================== */

    $('[data-tooltip-tit]').hover(function() {
        $('<div class="div-tooltip-tit"></div>').text($(this).attr('data-tooltip-tit')).appendTo('body').fadeIn('slow');
    }, function() {
        $('.div-tooltip-tit').remove();
    }).mousemove(function(e) {
        $('.div-tooltip-tit').css({ top: e.pageY + 10, left: e.pageX + 20 })
    });
    $('[data-tooltip-sub]').hover(function() {
        $('<div class="div-tooltip-sub"></div>').text($(this).attr('data-tooltip-sub')).appendTo('body').fadeIn('slow');
    }, function() {
        $('.div-tooltip-sub').remove();
    }).mousemove(function(e) {
        $('.div-tooltip-sub').css({ top: e.pageY + 60, left: e.pageX + 20 })
    });

});


/* ===============================  Wow Animation  =============================== */
new WOW().init();

// === window When Loading === //



$(window).on("load", function() {


    /* ===============================  SPLITTING TEXT  =============================== */

    Splitting();


    /* ===============================  thumparallax  =============================== */

    var imageUp = document.getElementsByClassName('thumparallax');
    new simpleParallax(imageUp, {
        delay: 1,
        scale: 1.1
    });

    var imageDown = document.getElementsByClassName('thumparallax-down');
    new simpleParallax(imageDown, {
        orientation: 'down',
        delay: 1,
        scale: 1.1
    });


    /* ===============================  isotope Masonery  =============================== */

    /* ===============================  contact validator  =============================== */
});

/* ===============================  Hide / show navbar  =============================== */

var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('#navi').outerHeight();
$(window).on("scroll", function(event) {
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();

    if (Math.abs(lastScrollTop - st) <= delta)
        return;

    if (st > lastScrollTop && st > navbarHeight) {
        $('#navi').css('top', '-100px');

    } else {

        if (st + $(window).height() < $(document).height()) {
            $('#navi').css('top', '0');
        }
    }

    lastScrollTop = st;
}

/* ===============================  Preloader page  =============================== */

paceOptions = {
    ajax: true,
    document: true,
    eventLag: false
};

Pace.on('done', function() {
    $('#preloader').addClass("isdone");
    $('.loading-text').addClass("isdone");
});
Pace.on('done', function() {
    $('#preloaderhm').addClass("isdone");
    $('.loading-text').addClass("isdone");
});
Pace.on('done', function() {
    $('#preloaderab').addClass("isdone");
    $('.loading-text').addClass("isdone");
});
Pace.on('done', function() {
    $('#preloaderse').addClass("isdone");
    $('.loading-text').addClass("isdone");
});
Pace.on('done', function() {
    $('#preloaderpo').addClass("isdone");
    $('.loading-text').addClass("isdone");
});
Pace.on('done', function() {
    $('#preloaderjt').addClass("isdone");
    $('.loading-text').addClass("isdone");
});
Pace.on('done', function() {
    $('#preloaderco').addClass("isdone");
    $('.loading-text').addClass("isdone");
});
Pace.on('done', function() {
    $('#preloadernt').addClass("isdone");
    $('.loading-text').addClass("isdone");
});
Pace.on('done', function() {
    $('#preloaderdt').addClass("isdone");
    $('.loading-text').addClass("isdone");
});

/* ===============================  Scroll back to top  =============================== */

$(document).ready(function() {
    "use strict";

    var progressPath = document.querySelector('.progress-wrap path');
    var pathLength = progressPath.getTotalLength();
    progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
    progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
    progressPath.style.strokeDashoffset = pathLength;
    progressPath.getBoundingClientRect();
    progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
    var updateProgress = function() {
        var scroll = $(window).scrollTop();
        var height = $(document).height() - $(window).height();
        var progress = pathLength - (scroll * pathLength / height);
        progressPath.style.strokeDashoffset = progress;
    }
    updateProgress();
    $(window).scroll(updateProgress);
    var offset = 150;
    var duration = 550;
    jQuery(window).on('scroll', function() {
        if (jQuery(this).scrollTop() > offset) {
            jQuery('.progress-wrap').addClass('active-progress');
        } else {
            jQuery('.progress-wrap').removeClass('active-progress');
        }
    });
    jQuery('.progress-wrap').on('click', function(event) {
        event.preventDefault();
        jQuery('html, body').animate({ scrollTop: 0 }, duration);
        return false;
    })
});

/* ===============================  Mouse effect  =============================== */

function mousecursor() {
    if ($("body")) {
        var setCursor = setInterval(function() {
            const e = document.querySelector(".cursor-inner"),
                t = document.querySelector(".cursor-outer");
            if (e != null && t != null) {
                let n, i = 0,
                    o = !1;
                window.onmousemove = function(s) {
                    o || (t.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)"), e.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)", n = s.clientY, i = s.clientX
                }, $("body").on("mouseenter", "a, .cursor-pointer", function() {
                    e.classList.add("cursor-hover"), t.classList.add("cursor-hover")
                }), $("body").on("mouseleave", "a, .cursor-pointer", function() {
                    $(this).is("a") && $(this).closest(".cursor-pointer").length || (e.classList.remove("cursor-hover"), t.classList.remove("cursor-hover"))
                }), e.style.visibility = "visible", t.style.visibility = "visible"
                clearInterval(setCursor);
            }
        }, 10);
    }
};

$(function() {
    mousecursor();
});
/* ===============================  fixed-slider  =============================== */


$(window).scroll(function() {

    /* ===============================  fade slideshow  =============================== */

    var scrolled = $(this).scrollTop();
    $('.fixed-slider .caption , .fixed-slider .capt .parlx').css({
        'transform': 'translate3d(0, ' + -(scrolled * 0.20) + 'px, 0)',
        'opacity': 1 - scrolled / 600
    });

});



/* ===============================  Swiper showcases with data  =============================== */


$('[data-carousel="swiper"]').each(function() {

    var containe = $(this).find('[data-swiper="container"]').attr('id');
    var pagination = $(this).find('[data-swiper="pagination"]').attr('id');
    var prev = $(this).find('[data-swiper="prev"]').attr('id');
    var next = $(this).find('[data-swiper="next"]').attr('id');
    var items = $(this).data('items');
    var autoplay = $(this).data('autoplay');
    var iSlide = $(this).data('initial');
    var loop = $(this).data('loop');
    var parallax = $(this).data('parallax');
    var space = $(this).data('space');
    var speed = $(this).data('speed');
    var center = $(this).data('center');
    var effect = $(this).data('effect');
    var direction = $(this).data('direction');
    var mousewheel = $(this).data('mousewheel');

    // Configuration
    var conf = {

    };

    // Responsive
    if ($(this).hasClass('showcase-grid')) {
        var conf = {

            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            },

            breakpoints: {
                0: {
                    slidesPerView: 1,
                },
                640: {
                    slidesPerView: 2,
                },
                768: {
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView: 4,
                },
            }
        };
    };

    if ($(this).hasClass('showcase-carus')) {
        var conf = {

            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            },

            breakpoints: {
                0: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                },
                640: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                },
                1024: {
                    slidesPerView: 2,
                    spaceBetween: 200,
                },
            }
        };
    };

    if ($(this).hasClass('showstyle')) {
        var conf = {

            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            }
        };
    };

    if (items) {
        conf.slidesPerView = items
    };
    if (autoplay) {
        conf.autoplay = autoplay
    };
    if (iSlide) {
        conf.initialSlide = iSlide
    };
    if (center) {
        conf.centeredSlides = center
    };
    if (loop) {
        conf.loop = loop
    };
    if (parallax) {
        conf.parallax = parallax
    };
    if (space) {
        conf.spaceBetween = space
    };
    if (speed) {
        conf.speed = speed
    };
    if (mousewheel) {
        conf.mousewheel = mousewheel
    };
    if (effect) {
        conf.effect = effect
    };
    if (direction) {
        conf.direction = direction
    };
    if (prev) {
        conf.prevButton = '#' + prev
    };
    if (next) {
        conf.nextButton = '#' + next
    };
    if (pagination) {
        conf.pagination = '#' + pagination,
            conf.paginationClickable = true
    };

    // Initialization
    if (containe) {
        var initID = '#' + containe;
        var init = new Swiper(initID, conf);
    };
});;

function initMap() {
    var e = new google.maps.Map(document.getElementById("ieatmaps"), { center: { lat: 34.0937458, lng: -118.3614978 }, zoom: 12, styles: [{ featureType: "all", elementType: "labels.text.fill", stylers: [{ saturation: 36 }, { color: "#000000" }, { lightness: 40 }] }, { featureType: "all", elementType: "labels.text.stroke", stylers: [{ visibility: "on" }, { color: "#000000" }, { lightness: 16 }] }, { featureType: "all", elementType: "labels.icon", stylers: [{ visibility: "off" }] }, { featureType: "administrative", elementType: "geometry.fill", stylers: [{ color: "#000000" }, { lightness: 20 }] }, { featureType: "administrative", elementType: "geometry.stroke", stylers: [{ color: "#000000" }, { lightness: 17 }, { weight: 1.2 }] }, { featureType: "landscape", elementType: "geometry", stylers: [{ color: "#000000" }, { lightness: 15 }] }, { featureType: "poi", elementType: "geometry", stylers: [{ color: "#000000" }, { lightness: 20 }] }, { featureType: "road.highway", elementType: "geometry.fill", stylers: [{ color: "#000000" }, { lightness: 17 }] }, { featureType: "road.highway", elementType: "geometry.stroke", stylers: [{ color: "#000000" }, { lightness: 29 }, { weight: .2 }] }, { featureType: "road.arterial", elementType: "geometry", stylers: [{ color: "#000000" }, { lightness: 18 }] }, { featureType: "road.local", elementType: "geometry", stylers: [{ color: "#000000" }, { lightness: 16 }] }, { featureType: "transit", elementType: "geometry", stylers: [{ color: "#000000" }, { lightness: 19 }] }, { featureType: "water", elementType: "geometry", stylers: [{ color: "#000000" }, { lightness: 10 }] }] });
    new google.maps.Marker({ position: new google.maps.LatLng(34.0937458, -118.3614978), title: "ASL", map: e })
};
$(document).ready(function() {
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        items: 4,
    });

    // Custom Button
    $('.customNextBtn').click(function() {
        owl.trigger('next.owl.carousel');
    });
    $('.customPreviousBtn').click(function() {
        owl.trigger('prev.owl.carousel');
    });

});; /*! jQuery v3.5.1 | (c) JS Foundation and other contributors | jquery.org/license */
! function(e, t) { "use strict"; "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) { if (!e.document) throw new Error("jQuery requires a window with a document"); return t(e) } : t(e) }("undefined" != typeof window ? window : this, function(C, e) {
    "use strict";
    var t = [],
        r = Object.getPrototypeOf,
        s = t.slice,
        g = t.flat ? function(e) { return t.flat.call(e) } : function(e) { return t.concat.apply([], e) },
        u = t.push,
        i = t.indexOf,
        n = {},
        o = n.toString,
        v = n.hasOwnProperty,
        a = v.toString,
        l = a.call(Object),
        y = {},
        m = function(e) { return "function" == typeof e && "number" != typeof e.nodeType },
        x = function(e) { return null != e && e === e.window },
        E = C.document,
        c = { type: !0, src: !0, nonce: !0, noModule: !0 };

    function b(e, t, n) {
        var r, i, o = (n = n || E).createElement("script");
        if (o.text = e, t)
            for (r in c)(i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
        n.head.appendChild(o).parentNode.removeChild(o)
    }

    function w(e) { return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[o.call(e)] || "object" : typeof e }
    var f = "3.5.1",
        S = function(e, t) { return new S.fn.init(e, t) };

    function p(e) {
        var t = !!e && "length" in e && e.length,
            n = w(e);
        return !m(e) && !x(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }
    S.fn = S.prototype = {
        jquery: f,
        constructor: S,
        length: 0,
        toArray: function() { return s.call(this) },
        get: function(e) { return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e] },
        pushStack: function(e) { var t = S.merge(this.constructor(), e); return t.prevObject = this, t },
        each: function(e) { return S.each(this, e) },
        map: function(n) { return this.pushStack(S.map(this, function(e, t) { return n.call(e, t, e) })) },
        slice: function() { return this.pushStack(s.apply(this, arguments)) },
        first: function() { return this.eq(0) },
        last: function() { return this.eq(-1) },
        even: function() { return this.pushStack(S.grep(this, function(e, t) { return (t + 1) % 2 })) },
        odd: function() { return this.pushStack(S.grep(this, function(e, t) { return t % 2 })) },
        eq: function(e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= n && n < t ? [this[n]] : [])
        },
        end: function() { return this.prevObject || this.constructor() },
        push: u,
        sort: t.sort,
        splice: t.splice
    }, S.extend = S.fn.extend = function() {
        var e, t, n, r, i, o, a = arguments[0] || {},
            s = 1,
            u = arguments.length,
            l = !1;
        for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || m(a) || (a = {}), s === u && (a = this, s--); s < u; s++)
            if (null != (e = arguments[s]))
                for (t in e) r = e[t], "__proto__" !== t && a !== r && (l && r && (S.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t], o = i && !Array.isArray(n) ? [] : i || S.isPlainObject(n) ? n : {}, i = !1, a[t] = S.extend(l, o, r)) : void 0 !== r && (a[t] = r));
        return a
    }, S.extend({
        expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) { throw new Error(e) },
        noop: function() {},
        isPlainObject: function(e) { var t, n; return !(!e || "[object Object]" !== o.call(e)) && (!(t = r(e)) || "function" == typeof(n = v.call(t, "constructor") && t.constructor) && a.call(n) === l) },
        isEmptyObject: function(e) { var t; for (t in e) return !1; return !0 },
        globalEval: function(e, t, n) { b(e, { nonce: t && t.nonce }, n) },
        each: function(e, t) {
            var n, r = 0;
            if (p(e)) {
                for (n = e.length; r < n; r++)
                    if (!1 === t.call(e[r], r, e[r])) break
            } else
                for (r in e)
                    if (!1 === t.call(e[r], r, e[r])) break; return e
        },
        makeArray: function(e, t) { var n = t || []; return null != e && (p(Object(e)) ? S.merge(n, "string" == typeof e ? [e] : e) : u.call(n, e)), n },
        inArray: function(e, t, n) { return null == t ? -1 : i.call(t, e, n) },
        merge: function(e, t) { for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r]; return e.length = i, e },
        grep: function(e, t, n) { for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) !== a && r.push(e[i]); return r },
        map: function(e, t, n) {
            var r, i, o = 0,
                a = [];
            if (p(e))
                for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && a.push(i);
            else
                for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
            return g(a)
        },
        guid: 1,
        support: y
    }), "function" == typeof Symbol && (S.fn[Symbol.iterator] = t[Symbol.iterator]), S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) { n["[object " + t + "]"] = t.toLowerCase() });
    var d = function(n) {
        var e, d, b, o, i, h, f, g, w, u, l, T, C, a, E, v, s, c, y, S = "sizzle" + 1 * new Date,
            p = n.document,
            k = 0,
            r = 0,
            m = ue(),
            x = ue(),
            A = ue(),
            N = ue(),
            D = function(e, t) { return e === t && (l = !0), 0 },
            j = {}.hasOwnProperty,
            t = [],
            q = t.pop,
            L = t.push,
            H = t.push,
            O = t.slice,
            P = function(e, t) {
                for (var n = 0, r = e.length; n < r; n++)
                    if (e[n] === t) return n;
                return -1
            },
            R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            M = "[\\x20\\t\\r\\n\\f]",
            I = "(?:\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
            W = "\\[" + M + "*(" + I + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + I + "))|)" + M + "*\\]",
            F = ":(" + I + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + W + ")*)|.*)\\)|)",
            B = new RegExp(M + "+", "g"),
            $ = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
            _ = new RegExp("^" + M + "*," + M + "*"),
            z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
            U = new RegExp(M + "|>"),
            X = new RegExp(F),
            V = new RegExp("^" + I + "$"),
            G = { ID: new RegExp("^#(" + I + ")"), CLASS: new RegExp("^\\.(" + I + ")"), TAG: new RegExp("^(" + I + "|[*])"), ATTR: new RegExp("^" + W), PSEUDO: new RegExp("^" + F), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"), bool: new RegExp("^(?:" + R + ")$", "i"), needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i") },
            Y = /HTML$/i,
            Q = /^(?:input|select|textarea|button)$/i,
            J = /^h\d$/i,
            K = /^[^{]+\{\s*\[native \w/,
            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ee = /[+~]/,
            te = new RegExp("\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\([^\\r\\n\\f])", "g"),
            ne = function(e, t) { var n = "0x" + e.slice(1) - 65536; return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)) },
            re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            ie = function(e, t) { return t ? "\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e },
            oe = function() { T() },
            ae = be(function(e) { return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase() }, { dir: "parentNode", next: "legend" });
        try { H.apply(t = O.call(p.childNodes), p.childNodes), t[p.childNodes.length].nodeType } catch (e) {
            H = {
                apply: t.length ? function(e, t) { L.apply(e, O.call(t)) } : function(e, t) {
                    var n = e.length,
                        r = 0;
                    while (e[n++] = t[r++]);
                    e.length = n - 1
                }
            }
        }

        function se(t, e, n, r) {
            var i, o, a, s, u, l, c, f = e && e.ownerDocument,
                p = e ? e.nodeType : 9;
            if (n = n || [], "string" != typeof t || !t || 1 !== p && 9 !== p && 11 !== p) return n;
            if (!r && (T(e), e = e || C, E)) {
                if (11 !== p && (u = Z.exec(t)))
                    if (i = u[1]) { if (9 === p) { if (!(a = e.getElementById(i))) return n; if (a.id === i) return n.push(a), n } else if (f && (a = f.getElementById(i)) && y(e, a) && a.id === i) return n.push(a), n } else { if (u[2]) return H.apply(n, e.getElementsByTagName(t)), n; if ((i = u[3]) && d.getElementsByClassName && e.getElementsByClassName) return H.apply(n, e.getElementsByClassName(i)), n }
                if (d.qsa && !N[t + " "] && (!v || !v.test(t)) && (1 !== p || "object" !== e.nodeName.toLowerCase())) {
                    if (c = t, f = e, 1 === p && (U.test(t) || z.test(t))) {
                        (f = ee.test(t) && ye(e.parentNode) || e) === e && d.scope || ((s = e.getAttribute("id")) ? s = s.replace(re, ie) : e.setAttribute("id", s = S)), o = (l = h(t)).length;
                        while (o--) l[o] = (s ? "#" + s : ":scope") + " " + xe(l[o]);
                        c = l.join(",")
                    }
                    try { return H.apply(n, f.querySelectorAll(c)), n } catch (e) { N(t, !0) } finally { s === S && e.removeAttribute("id") }
                }
            }
            return g(t.replace($, "$1"), e, n, r)
        }

        function ue() { var r = []; return function e(t, n) { return r.push(t + " ") > b.cacheLength && delete e[r.shift()], e[t + " "] = n } }

        function le(e) { return e[S] = !0, e }

        function ce(e) { var t = C.createElement("fieldset"); try { return !!e(t) } catch (e) { return !1 } finally { t.parentNode && t.parentNode.removeChild(t), t = null } }

        function fe(e, t) {
            var n = e.split("|"),
                r = n.length;
            while (r--) b.attrHandle[n[r]] = t
        }

        function pe(e, t) {
            var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r) return r;
            if (n)
                while (n = n.nextSibling)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function de(t) { return function(e) { return "input" === e.nodeName.toLowerCase() && e.type === t } }

        function he(n) { return function(e) { var t = e.nodeName.toLowerCase(); return ("input" === t || "button" === t) && e.type === n } }

        function ge(t) { return function(e) { return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && ae(e) === t : e.disabled === t : "label" in e && e.disabled === t } }

        function ve(a) {
            return le(function(o) {
                return o = +o, le(function(e, t) {
                    var n, r = a([], e.length, o),
                        i = r.length;
                    while (i--) e[n = r[i]] && (e[n] = !(t[n] = e[n]))
                })
            })
        }

        function ye(e) { return e && "undefined" != typeof e.getElementsByTagName && e }
        for (e in d = se.support = {}, i = se.isXML = function(e) {
                var t = e.namespaceURI,
                    n = (e.ownerDocument || e).documentElement;
                return !Y.test(t || n && n.nodeName || "HTML")
            }, T = se.setDocument = function(e) {
                var t, n, r = e ? e.ownerDocument || e : p;
                return r != C && 9 === r.nodeType && r.documentElement && (a = (C = r).documentElement, E = !i(C), p != C && (n = C.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", oe, !1) : n.attachEvent && n.attachEvent("onunload", oe)), d.scope = ce(function(e) { return a.appendChild(e).appendChild(C.createElement("div")), "undefined" != typeof e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length }), d.attributes = ce(function(e) { return e.className = "i", !e.getAttribute("className") }), d.getElementsByTagName = ce(function(e) { return e.appendChild(C.createComment("")), !e.getElementsByTagName("*").length }), d.getElementsByClassName = K.test(C.getElementsByClassName), d.getById = ce(function(e) { return a.appendChild(e).id = S, !C.getElementsByName || !C.getElementsByName(S).length }), d.getById ? (b.filter.ID = function(e) { var t = e.replace(te, ne); return function(e) { return e.getAttribute("id") === t } }, b.find.ID = function(e, t) { if ("undefined" != typeof t.getElementById && E) { var n = t.getElementById(e); return n ? [n] : [] } }) : (b.filter.ID = function(e) { var n = e.replace(te, ne); return function(e) { var t = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id"); return t && t.value === n } }, b.find.ID = function(e, t) {
                    if ("undefined" != typeof t.getElementById && E) {
                        var n, r, i, o = t.getElementById(e);
                        if (o) {
                            if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                            i = t.getElementsByName(e), r = 0;
                            while (o = i[r++])
                                if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
                        }
                        return []
                    }
                }), b.find.TAG = d.getElementsByTagName ? function(e, t) { return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : d.qsa ? t.querySelectorAll(e) : void 0 } : function(e, t) {
                    var n, r = [],
                        i = 0,
                        o = t.getElementsByTagName(e);
                    if ("*" === e) { while (n = o[i++]) 1 === n.nodeType && r.push(n); return r }
                    return o
                }, b.find.CLASS = d.getElementsByClassName && function(e, t) { if ("undefined" != typeof t.getElementsByClassName && E) return t.getElementsByClassName(e) }, s = [], v = [], (d.qsa = K.test(C.querySelectorAll)) && (ce(function(e) {
                    var t;
                    a.appendChild(e).innerHTML = "<a id='" + S + "'></a><select id='" + S + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || v.push("\\[" + M + "*(?:value|" + R + ")"), e.querySelectorAll("[id~=" + S + "-]").length || v.push("~="), (t = C.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || v.push("\\[" + M + "*name" + M + "*=" + M + "*(?:''|\"\")"), e.querySelectorAll(":checked").length || v.push(":checked"), e.querySelectorAll("a#" + S + "+*").length || v.push(".#.+[+~]"), e.querySelectorAll("\\\f"), v.push("[\\r\\n\\f]")
                }), ce(function(e) {
                    e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var t = C.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && v.push("name" + M + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"), a.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), v.push(",.*:")
                })), (d.matchesSelector = K.test(c = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && ce(function(e) { d.disconnectedMatch = c.call(e, "*"), c.call(e, "[s!='']:x"), s.push("!=", F) }), v = v.length && new RegExp(v.join("|")), s = s.length && new RegExp(s.join("|")), t = K.test(a.compareDocumentPosition), y = t || K.test(a.contains) ? function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        r = t && t.parentNode;
                    return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                } : function(e, t) {
                    if (t)
                        while (t = t.parentNode)
                            if (t === e) return !0;
                    return !1
                }, D = t ? function(e, t) { if (e === t) return l = !0, 0; var n = !e.compareDocumentPosition - !t.compareDocumentPosition; return n || (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !d.sortDetached && t.compareDocumentPosition(e) === n ? e == C || e.ownerDocument == p && y(p, e) ? -1 : t == C || t.ownerDocument == p && y(p, t) ? 1 : u ? P(u, e) - P(u, t) : 0 : 4 & n ? -1 : 1) } : function(e, t) {
                    if (e === t) return l = !0, 0;
                    var n, r = 0,
                        i = e.parentNode,
                        o = t.parentNode,
                        a = [e],
                        s = [t];
                    if (!i || !o) return e == C ? -1 : t == C ? 1 : i ? -1 : o ? 1 : u ? P(u, e) - P(u, t) : 0;
                    if (i === o) return pe(e, t);
                    n = e;
                    while (n = n.parentNode) a.unshift(n);
                    n = t;
                    while (n = n.parentNode) s.unshift(n);
                    while (a[r] === s[r]) r++;
                    return r ? pe(a[r], s[r]) : a[r] == p ? -1 : s[r] == p ? 1 : 0
                }), C
            }, se.matches = function(e, t) { return se(e, null, null, t) }, se.matchesSelector = function(e, t) {
                if (T(e), d.matchesSelector && E && !N[t + " "] && (!s || !s.test(t)) && (!v || !v.test(t))) try { var n = c.call(e, t); if (n || d.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n } catch (e) { N(t, !0) }
                return 0 < se(t, C, null, [e]).length
            }, se.contains = function(e, t) { return (e.ownerDocument || e) != C && T(e), y(e, t) }, se.attr = function(e, t) {
                (e.ownerDocument || e) != C && T(e);
                var n = b.attrHandle[t.toLowerCase()],
                    r = n && j.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
                return void 0 !== r ? r : d.attributes || !E ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
            }, se.escape = function(e) { return (e + "").replace(re, ie) }, se.error = function(e) { throw new Error("Syntax error, unrecognized expression: " + e) }, se.uniqueSort = function(e) {
                var t, n = [],
                    r = 0,
                    i = 0;
                if (l = !d.detectDuplicates, u = !d.sortStable && e.slice(0), e.sort(D), l) { while (t = e[i++]) t === e[i] && (r = n.push(i)); while (r--) e.splice(n[r], 1) }
                return u = null, e
            }, o = se.getText = function(e) {
                var t, n = "",
                    r = 0,
                    i = e.nodeType;
                if (i) { if (1 === i || 9 === i || 11 === i) { if ("string" == typeof e.textContent) return e.textContent; for (e = e.firstChild; e; e = e.nextSibling) n += o(e) } else if (3 === i || 4 === i) return e.nodeValue } else
                    while (t = e[r++]) n += o(t);
                return n
            }, (b = se.selectors = {
                cacheLength: 50,
                createPseudo: le,
                match: G,
                attrHandle: {},
                find: {},
                relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } },
                preFilter: { ATTR: function(e) { return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4) }, CHILD: function(e) { return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]), e }, PSEUDO: function(e) { var t, n = !e[6] && e[2]; return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = h(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3)) } },
                filter: {
                    TAG: function(e) { var t = e.replace(te, ne).toLowerCase(); return "*" === e ? function() { return !0 } : function(e) { return e.nodeName && e.nodeName.toLowerCase() === t } },
                    CLASS: function(e) { var t = m[e + " "]; return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && m(e, function(e) { return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "") }) },
                    ATTR: function(n, r, i) { return function(e) { var t = se.attr(e, n); return null == t ? "!=" === r : !r || (t += "", "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? -1 < (" " + t.replace(B, " ") + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-")) } },
                    CHILD: function(h, e, t, g, v) {
                        var y = "nth" !== h.slice(0, 3),
                            m = "last" !== h.slice(-4),
                            x = "of-type" === e;
                        return 1 === g && 0 === v ? function(e) { return !!e.parentNode } : function(e, t, n) {
                            var r, i, o, a, s, u, l = y !== m ? "nextSibling" : "previousSibling",
                                c = e.parentNode,
                                f = x && e.nodeName.toLowerCase(),
                                p = !n && !x,
                                d = !1;
                            if (c) {
                                if (y) {
                                    while (l) {
                                        a = e;
                                        while (a = a[l])
                                            if (x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) return !1;
                                        u = l = "only" === h && !u && "nextSibling"
                                    }
                                    return !0
                                }
                                if (u = [m ? c.firstChild : c.lastChild], m && p) {
                                    d = (s = (r = (i = (o = (a = c)[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]) && r[2], a = s && c.childNodes[s];
                                    while (a = ++s && a && a[l] || (d = s = 0) || u.pop())
                                        if (1 === a.nodeType && ++d && a === e) { i[h] = [k, s, d]; break }
                                } else if (p && (d = s = (r = (i = (o = (a = e)[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]), !1 === d)
                                    while (a = ++s && a && a[l] || (d = s = 0) || u.pop())
                                        if ((x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) && ++d && (p && ((i = (o = a[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] = [k, d]), a === e)) break;
                                return (d -= v) === g || d % g == 0 && 0 <= d / g
                            }
                        }
                    },
                    PSEUDO: function(e, o) {
                        var t, a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
                        return a[S] ? a(o) : 1 < a.length ? (t = [e, e, "", o], b.setFilters.hasOwnProperty(e.toLowerCase()) ? le(function(e, t) {
                            var n, r = a(e, o),
                                i = r.length;
                            while (i--) e[n = P(e, r[i])] = !(t[n] = r[i])
                        }) : function(e) { return a(e, 0, t) }) : a
                    }
                },
                pseudos: {
                    not: le(function(e) {
                        var r = [],
                            i = [],
                            s = f(e.replace($, "$1"));
                        return s[S] ? le(function(e, t, n, r) {
                            var i, o = s(e, null, r, []),
                                a = e.length;
                            while (a--)(i = o[a]) && (e[a] = !(t[a] = i))
                        }) : function(e, t, n) { return r[0] = e, s(r, null, n, i), r[0] = null, !i.pop() }
                    }),
                    has: le(function(t) { return function(e) { return 0 < se(t, e).length } }),
                    contains: le(function(t) {
                        return t = t.replace(te, ne),
                            function(e) { return -1 < (e.textContent || o(e)).indexOf(t) }
                    }),
                    lang: le(function(n) {
                        return V.test(n || "") || se.error("unsupported lang: " + n), n = n.replace(te, ne).toLowerCase(),
                            function(e) {
                                var t;
                                do { if (t = E ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-") } while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1
                            }
                    }),
                    target: function(e) { var t = n.location && n.location.hash; return t && t.slice(1) === e.id },
                    root: function(e) { return e === a },
                    focus: function(e) { return e === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(e.type || e.href || ~e.tabIndex) },
                    enabled: ge(!1),
                    disabled: ge(!0),
                    checked: function(e) { var t = e.nodeName.toLowerCase(); return "input" === t && !!e.checked || "option" === t && !!e.selected },
                    selected: function(e) { return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(e) { return !b.pseudos.empty(e) },
                    header: function(e) { return J.test(e.nodeName) },
                    input: function(e) { return Q.test(e.nodeName) },
                    button: function(e) { var t = e.nodeName.toLowerCase(); return "input" === t && "button" === e.type || "button" === t },
                    text: function(e) { var t; return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase()) },
                    first: ve(function() { return [0] }),
                    last: ve(function(e, t) { return [t - 1] }),
                    eq: ve(function(e, t, n) { return [n < 0 ? n + t : n] }),
                    even: ve(function(e, t) { for (var n = 0; n < t; n += 2) e.push(n); return e }),
                    odd: ve(function(e, t) { for (var n = 1; n < t; n += 2) e.push(n); return e }),
                    lt: ve(function(e, t, n) { for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r;) e.push(r); return e }),
                    gt: ve(function(e, t, n) { for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r); return e })
                }
            }).pseudos.nth = b.pseudos.eq, { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) b.pseudos[e] = de(e);
        for (e in { submit: !0, reset: !0 }) b.pseudos[e] = he(e);

        function me() {}

        function xe(e) { for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value; return r }

        function be(s, e, t) {
            var u = e.dir,
                l = e.next,
                c = l || u,
                f = t && "parentNode" === c,
                p = r++;
            return e.first ? function(e, t, n) {
                while (e = e[u])
                    if (1 === e.nodeType || f) return s(e, t, n);
                return !1
            } : function(e, t, n) {
                var r, i, o, a = [k, p];
                if (n) {
                    while (e = e[u])
                        if ((1 === e.nodeType || f) && s(e, t, n)) return !0
                } else
                    while (e = e[u])
                        if (1 === e.nodeType || f)
                            if (i = (o = e[S] || (e[S] = {}))[e.uniqueID] || (o[e.uniqueID] = {}), l && l === e.nodeName.toLowerCase()) e = e[u] || e;
                            else { if ((r = i[c]) && r[0] === k && r[1] === p) return a[2] = r[2]; if ((i[c] = a)[2] = s(e, t, n)) return !0 } return !1
            }
        }

        function we(i) {
            return 1 < i.length ? function(e, t, n) {
                var r = i.length;
                while (r--)
                    if (!i[r](e, t, n)) return !1;
                return !0
            } : i[0]
        }

        function Te(e, t, n, r, i) { for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)(o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s))); return a }

        function Ce(d, h, g, v, y, e) {
            return v && !v[S] && (v = Ce(v)), y && !y[S] && (y = Ce(y, e)), le(function(e, t, n, r) {
                var i, o, a, s = [],
                    u = [],
                    l = t.length,
                    c = e || function(e, t, n) { for (var r = 0, i = t.length; r < i; r++) se(e, t[r], n); return n }(h || "*", n.nodeType ? [n] : n, []),
                    f = !d || !e && h ? c : Te(c, s, d, n, r),
                    p = g ? y || (e ? d : l || v) ? [] : t : f;
                if (g && g(f, p, n, r), v) { i = Te(p, u), v(i, [], n, r), o = i.length; while (o--)(a = i[o]) && (p[u[o]] = !(f[u[o]] = a)) }
                if (e) {
                    if (y || d) {
                        if (y) {
                            i = [], o = p.length;
                            while (o--)(a = p[o]) && i.push(f[o] = a);
                            y(null, p = [], i, r)
                        }
                        o = p.length;
                        while (o--)(a = p[o]) && -1 < (i = y ? P(e, a) : s[o]) && (e[i] = !(t[i] = a))
                    }
                } else p = Te(p === t ? p.splice(l, p.length) : p), y ? y(null, t, p, r) : H.apply(t, p)
            })
        }

        function Ee(e) {
            for (var i, t, n, r = e.length, o = b.relative[e[0].type], a = o || b.relative[" "], s = o ? 1 : 0, u = be(function(e) { return e === i }, a, !0), l = be(function(e) { return -1 < P(i, e) }, a, !0), c = [function(e, t, n) { var r = !o && (n || t !== w) || ((i = t).nodeType ? u(e, t, n) : l(e, t, n)); return i = null, r }]; s < r; s++)
                if (t = b.relative[e[s].type]) c = [be(we(c), t)];
                else {
                    if ((t = b.filter[e[s].type].apply(null, e[s].matches))[S]) {
                        for (n = ++s; n < r; n++)
                            if (b.relative[e[n].type]) break;
                        return Ce(1 < s && we(c), 1 < s && xe(e.slice(0, s - 1).concat({ value: " " === e[s - 2].type ? "*" : "" })).replace($, "$1"), t, s < n && Ee(e.slice(s, n)), n < r && Ee(e = e.slice(n)), n < r && xe(e))
                    }
                    c.push(t)
                }
            return we(c)
        }
        return me.prototype = b.filters = b.pseudos, b.setFilters = new me, h = se.tokenize = function(e, t) {
            var n, r, i, o, a, s, u, l = x[e + " "];
            if (l) return t ? 0 : l.slice(0);
            a = e, s = [], u = b.preFilter;
            while (a) { for (o in n && !(r = _.exec(a)) || (r && (a = a.slice(r[0].length) || a), s.push(i = [])), n = !1, (r = z.exec(a)) && (n = r.shift(), i.push({ value: n, type: r[0].replace($, " ") }), a = a.slice(n.length)), b.filter) !(r = G[o].exec(a)) || u[o] && !(r = u[o](r)) || (n = r.shift(), i.push({ value: n, type: o, matches: r }), a = a.slice(n.length)); if (!n) break }
            return t ? a.length : a ? se.error(e) : x(e, s).slice(0)
        }, f = se.compile = function(e, t) {
            var n, v, y, m, x, r, i = [],
                o = [],
                a = A[e + " "];
            if (!a) {
                t || (t = h(e)), n = t.length;
                while (n--)(a = Ee(t[n]))[S] ? i.push(a) : o.push(a);
                (a = A(e, (v = o, m = 0 < (y = i).length, x = 0 < v.length, r = function(e, t, n, r, i) {
                    var o, a, s, u = 0,
                        l = "0",
                        c = e && [],
                        f = [],
                        p = w,
                        d = e || x && b.find.TAG("*", i),
                        h = k += null == p ? 1 : Math.random() || .1,
                        g = d.length;
                    for (i && (w = t == C || t || i); l !== g && null != (o = d[l]); l++) {
                        if (x && o) {
                            a = 0, t || o.ownerDocument == C || (T(o), n = !E);
                            while (s = v[a++])
                                if (s(o, t || C, n)) { r.push(o); break }
                            i && (k = h)
                        }
                        m && ((o = !s && o) && u--, e && c.push(o))
                    }
                    if (u += l, m && l !== u) {
                        a = 0;
                        while (s = y[a++]) s(c, f, t, n);
                        if (e) {
                            if (0 < u)
                                while (l--) c[l] || f[l] || (f[l] = q.call(r));
                            f = Te(f)
                        }
                        H.apply(r, f), i && !e && 0 < f.length && 1 < u + y.length && se.uniqueSort(r)
                    }
                    return i && (k = h, w = p), c
                }, m ? le(r) : r))).selector = e
            }
            return a
        }, g = se.select = function(e, t, n, r) {
            var i, o, a, s, u, l = "function" == typeof e && e,
                c = !r && h(e = l.selector || e);
            if (n = n || [], 1 === c.length) {
                if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === t.nodeType && E && b.relative[o[1].type]) {
                    if (!(t = (b.find.ID(a.matches[0].replace(te, ne), t) || [])[0])) return n;
                    l && (t = t.parentNode), e = e.slice(o.shift().value.length)
                }
                i = G.needsContext.test(e) ? 0 : o.length;
                while (i--) { if (a = o[i], b.relative[s = a.type]) break; if ((u = b.find[s]) && (r = u(a.matches[0].replace(te, ne), ee.test(o[0].type) && ye(t.parentNode) || t))) { if (o.splice(i, 1), !(e = r.length && xe(o))) return H.apply(n, r), n; break } }
            }
            return (l || f(e, c))(r, t, !E, n, !t || ee.test(e) && ye(t.parentNode) || t), n
        }, d.sortStable = S.split("").sort(D).join("") === S, d.detectDuplicates = !!l, T(), d.sortDetached = ce(function(e) { return 1 & e.compareDocumentPosition(C.createElement("fieldset")) }), ce(function(e) { return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href") }) || fe("type|href|height|width", function(e, t, n) { if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2) }), d.attributes && ce(function(e) { return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value") }) || fe("value", function(e, t, n) { if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue }), ce(function(e) { return null == e.getAttribute("disabled") }) || fe(R, function(e, t, n) { var r; if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null }), se
    }(C);
    S.find = d, S.expr = d.selectors, S.expr[":"] = S.expr.pseudos, S.uniqueSort = S.unique = d.uniqueSort, S.text = d.getText, S.isXMLDoc = d.isXML, S.contains = d.contains, S.escapeSelector = d.escape;
    var h = function(e, t, n) {
            var r = [],
                i = void 0 !== n;
            while ((e = e[t]) && 9 !== e.nodeType)
                if (1 === e.nodeType) {
                    if (i && S(e).is(n)) break;
                    r.push(e)
                }
            return r
        },
        T = function(e, t) { for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e); return n },
        k = S.expr.match.needsContext;

    function A(e, t) { return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase() }
    var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function D(e, n, r) { return m(n) ? S.grep(e, function(e, t) { return !!n.call(e, t, e) !== r }) : n.nodeType ? S.grep(e, function(e) { return e === n !== r }) : "string" != typeof n ? S.grep(e, function(e) { return -1 < i.call(n, e) !== r }) : S.filter(n, e, r) }
    S.filter = function(e, t, n) { var r = t[0]; return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? S.find.matchesSelector(r, e) ? [r] : [] : S.find.matches(e, S.grep(t, function(e) { return 1 === e.nodeType })) }, S.fn.extend({
        find: function(e) {
            var t, n, r = this.length,
                i = this;
            if ("string" != typeof e) return this.pushStack(S(e).filter(function() {
                for (t = 0; t < r; t++)
                    if (S.contains(i[t], this)) return !0
            }));
            for (n = this.pushStack([]), t = 0; t < r; t++) S.find(e, i[t], n);
            return 1 < r ? S.uniqueSort(n) : n
        },
        filter: function(e) { return this.pushStack(D(this, e || [], !1)) },
        not: function(e) { return this.pushStack(D(this, e || [], !0)) },
        is: function(e) { return !!D(this, "string" == typeof e && k.test(e) ? S(e) : e || [], !1).length }
    });
    var j, q = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (S.fn.init = function(e, t, n) {
        var r, i;
        if (!e) return this;
        if (n = n || j, "string" == typeof e) {
            if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : q.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (r[1]) {
                if (t = t instanceof S ? t[0] : t, S.merge(this, S.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : E, !0)), N.test(r[1]) && S.isPlainObject(t))
                    for (r in t) m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this
            }
            return (i = E.getElementById(r[2])) && (this[0] = i, this.length = 1), this
        }
        return e.nodeType ? (this[0] = e, this.length = 1, this) : m(e) ? void 0 !== n.ready ? n.ready(e) : e(S) : S.makeArray(e, this)
    }).prototype = S.fn, j = S(E);
    var L = /^(?:parents|prev(?:Until|All))/,
        H = { children: !0, contents: !0, next: !0, prev: !0 };

    function O(e, t) { while ((e = e[t]) && 1 !== e.nodeType); return e }
    S.fn.extend({
        has: function(e) {
            var t = S(e, this),
                n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (S.contains(this, t[e])) return !0
            })
        },
        closest: function(e, t) {
            var n, r = 0,
                i = this.length,
                o = [],
                a = "string" != typeof e && S(e);
            if (!k.test(e))
                for (; r < i; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && S.find.matchesSelector(n, e))) { o.push(n); break }
            return this.pushStack(1 < o.length ? S.uniqueSort(o) : o)
        },
        index: function(e) { return e ? "string" == typeof e ? i.call(S(e), this[0]) : i.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1 },
        add: function(e, t) { return this.pushStack(S.uniqueSort(S.merge(this.get(), S(e, t)))) },
        addBack: function(e) { return this.add(null == e ? this.prevObject : this.prevObject.filter(e)) }
    }), S.each({ parent: function(e) { var t = e.parentNode; return t && 11 !== t.nodeType ? t : null }, parents: function(e) { return h(e, "parentNode") }, parentsUntil: function(e, t, n) { return h(e, "parentNode", n) }, next: function(e) { return O(e, "nextSibling") }, prev: function(e) { return O(e, "previousSibling") }, nextAll: function(e) { return h(e, "nextSibling") }, prevAll: function(e) { return h(e, "previousSibling") }, nextUntil: function(e, t, n) { return h(e, "nextSibling", n) }, prevUntil: function(e, t, n) { return h(e, "previousSibling", n) }, siblings: function(e) { return T((e.parentNode || {}).firstChild, e) }, children: function(e) { return T(e.firstChild) }, contents: function(e) { return null != e.contentDocument && r(e.contentDocument) ? e.contentDocument : (A(e, "template") && (e = e.content || e), S.merge([], e.childNodes)) } }, function(r, i) { S.fn[r] = function(e, t) { var n = S.map(this, i, e); return "Until" !== r.slice(-5) && (t = e), t && "string" == typeof t && (n = S.filter(t, n)), 1 < this.length && (H[r] || S.uniqueSort(n), L.test(r) && n.reverse()), this.pushStack(n) } });
    var P = /[^\x20\t\r\n\f]+/g;

    function R(e) { return e }

    function M(e) { throw e }

    function I(e, t, n, r) { var i; try { e && m(i = e.promise) ? i.call(e).done(t).fail(n) : e && m(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r)) } catch (e) { n.apply(void 0, [e]) } }
    S.Callbacks = function(r) {
        var e, n;
        r = "string" == typeof r ? (e = r, n = {}, S.each(e.match(P) || [], function(e, t) { n[t] = !0 }), n) : S.extend({}, r);
        var i, t, o, a, s = [],
            u = [],
            l = -1,
            c = function() {
                for (a = a || r.once, o = i = !0; u.length; l = -1) { t = u.shift(); while (++l < s.length) !1 === s[l].apply(t[0], t[1]) && r.stopOnFalse && (l = s.length, t = !1) }
                r.memory || (t = !1), i = !1, a && (s = t ? [] : "")
            },
            f = { add: function() { return s && (t && !i && (l = s.length - 1, u.push(t)), function n(e) { S.each(e, function(e, t) { m(t) ? r.unique && f.has(t) || s.push(t) : t && t.length && "string" !== w(t) && n(t) }) }(arguments), t && !i && c()), this }, remove: function() { return S.each(arguments, function(e, t) { var n; while (-1 < (n = S.inArray(t, s, n))) s.splice(n, 1), n <= l && l-- }), this }, has: function(e) { return e ? -1 < S.inArray(e, s) : 0 < s.length }, empty: function() { return s && (s = []), this }, disable: function() { return a = u = [], s = t = "", this }, disabled: function() { return !s }, lock: function() { return a = u = [], t || i || (s = t = ""), this }, locked: function() { return !!a }, fireWith: function(e, t) { return a || (t = [e, (t = t || []).slice ? t.slice() : t], u.push(t), i || c()), this }, fire: function() { return f.fireWith(this, arguments), this }, fired: function() { return !!o } };
        return f
    }, S.extend({
        Deferred: function(e) {
            var o = [
                    ["notify", "progress", S.Callbacks("memory"), S.Callbacks("memory"), 2],
                    ["resolve", "done", S.Callbacks("once memory"), S.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", S.Callbacks("once memory"), S.Callbacks("once memory"), 1, "rejected"]
                ],
                i = "pending",
                a = {
                    state: function() { return i },
                    always: function() { return s.done(arguments).fail(arguments), this },
                    "catch": function(e) { return a.then(null, e) },
                    pipe: function() {
                        var i = arguments;
                        return S.Deferred(function(r) {
                            S.each(o, function(e, t) {
                                var n = m(i[t[4]]) && i[t[4]];
                                s[t[1]](function() {
                                    var e = n && n.apply(this, arguments);
                                    e && m(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments)
                                })
                            }), i = null
                        }).promise()
                    },
                    then: function(t, n, r) {
                        var u = 0;

                        function l(i, o, a, s) {
                            return function() {
                                var n = this,
                                    r = arguments,
                                    e = function() {
                                        var e, t;
                                        if (!(i < u)) {
                                            if ((e = a.apply(n, r)) === o.promise()) throw new TypeError("Thenable self-resolution");
                                            t = e && ("object" == typeof e || "function" == typeof e) && e.then, m(t) ? s ? t.call(e, l(u, o, R, s), l(u, o, M, s)) : (u++, t.call(e, l(u, o, R, s), l(u, o, M, s), l(u, o, R, o.notifyWith))) : (a !== R && (n = void 0, r = [e]), (s || o.resolveWith)(n, r))
                                        }
                                    },
                                    t = s ? e : function() { try { e() } catch (e) { S.Deferred.exceptionHook && S.Deferred.exceptionHook(e, t.stackTrace), u <= i + 1 && (a !== M && (n = void 0, r = [e]), o.rejectWith(n, r)) } };
                                i ? t() : (S.Deferred.getStackHook && (t.stackTrace = S.Deferred.getStackHook()), C.setTimeout(t))
                            }
                        }
                        return S.Deferred(function(e) { o[0][3].add(l(0, e, m(r) ? r : R, e.notifyWith)), o[1][3].add(l(0, e, m(t) ? t : R)), o[2][3].add(l(0, e, m(n) ? n : M)) }).promise()
                    },
                    promise: function(e) { return null != e ? S.extend(e, a) : a }
                },
                s = {};
            return S.each(o, function(e, t) {
                var n = t[2],
                    r = t[5];
                a[t[1]] = n.add, r && n.add(function() { i = r }, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock), n.add(t[3].fire), s[t[0]] = function() { return s[t[0] + "With"](this === s ? void 0 : this, arguments), this }, s[t[0] + "With"] = n.fireWith
            }), a.promise(s), e && e.call(s, s), s
        },
        when: function(e) {
            var n = arguments.length,
                t = n,
                r = Array(t),
                i = s.call(arguments),
                o = S.Deferred(),
                a = function(t) { return function(e) { r[t] = this, i[t] = 1 < arguments.length ? s.call(arguments) : e, --n || o.resolveWith(r, i) } };
            if (n <= 1 && (I(e, o.done(a(t)).resolve, o.reject, !n), "pending" === o.state() || m(i[t] && i[t].then))) return o.then();
            while (t--) I(i[t], a(t), o.reject);
            return o.promise()
        }
    });
    var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    S.Deferred.exceptionHook = function(e, t) { C.console && C.console.warn && e && W.test(e.name) && C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t) }, S.readyException = function(e) { C.setTimeout(function() { throw e }) };
    var F = S.Deferred();

    function B() { E.removeEventListener("DOMContentLoaded", B), C.removeEventListener("load", B), S.ready() }
    S.fn.ready = function(e) { return F.then(e)["catch"](function(e) { S.readyException(e) }), this }, S.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --S.readyWait : S.isReady) || (S.isReady = !0) !== e && 0 < --S.readyWait || F.resolveWith(E, [S])
        }
    }), S.ready.then = F.then, "complete" === E.readyState || "loading" !== E.readyState && !E.documentElement.doScroll ? C.setTimeout(S.ready) : (E.addEventListener("DOMContentLoaded", B), C.addEventListener("load", B));
    var $ = function(e, t, n, r, i, o, a) {
            var s = 0,
                u = e.length,
                l = null == n;
            if ("object" === w(n))
                for (s in i = !0, n) $(e, t, s, n[s], !0, o, a);
            else if (void 0 !== r && (i = !0, m(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function(e, t, n) { return l.call(S(e), n) })), t))
                for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
            return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
        },
        _ = /^-ms-/,
        z = /-([a-z])/g;

    function U(e, t) { return t.toUpperCase() }

    function X(e) { return e.replace(_, "ms-").replace(z, U) }
    var V = function(e) { return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType };

    function G() { this.expando = S.expando + G.uid++ }
    G.uid = 1, G.prototype = {
        cache: function(e) { var t = e[this.expando]; return t || (t = {}, V(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, { value: t, configurable: !0 }))), t },
        set: function(e, t, n) {
            var r, i = this.cache(e);
            if ("string" == typeof t) i[X(t)] = n;
            else
                for (r in t) i[X(r)] = t[r];
            return i
        },
        get: function(e, t) { return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][X(t)] },
        access: function(e, t, n) { return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t) },
        remove: function(e, t) { var n, r = e[this.expando]; if (void 0 !== r) { if (void 0 !== t) { n = (t = Array.isArray(t) ? t.map(X) : (t = X(t)) in r ? [t] : t.match(P) || []).length; while (n--) delete r[t[n]] }(void 0 === t || S.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]) } },
        hasData: function(e) { var t = e[this.expando]; return void 0 !== t && !S.isEmptyObject(t) }
    };
    var Y = new G,
        Q = new G,
        J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        K = /[A-Z]/g;

    function Z(e, t, n) {
        var r, i;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(K, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(r))) {
                try { n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : J.test(i) ? JSON.parse(i) : i) } catch (e) {}
                Q.set(e, t, n)
            } else n = void 0;
        return n
    }
    S.extend({ hasData: function(e) { return Q.hasData(e) || Y.hasData(e) }, data: function(e, t, n) { return Q.access(e, t, n) }, removeData: function(e, t) { Q.remove(e, t) }, _data: function(e, t, n) { return Y.access(e, t, n) }, _removeData: function(e, t) { Y.remove(e, t) } }), S.fn.extend({
        data: function(n, e) {
            var t, r, i, o = this[0],
                a = o && o.attributes;
            if (void 0 === n) {
                if (this.length && (i = Q.get(o), 1 === o.nodeType && !Y.get(o, "hasDataAttrs"))) {
                    t = a.length;
                    while (t--) a[t] && 0 === (r = a[t].name).indexOf("data-") && (r = X(r.slice(5)), Z(o, r, i[r]));
                    Y.set(o, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof n ? this.each(function() { Q.set(this, n) }) : $(this, function(e) {
                var t;
                if (o && void 0 === e) return void 0 !== (t = Q.get(o, n)) ? t : void 0 !== (t = Z(o, n)) ? t : void 0;
                this.each(function() { Q.set(this, n, e) })
            }, null, e, 1 < arguments.length, null, !0)
        },
        removeData: function(e) { return this.each(function() { Q.remove(this, e) }) }
    }), S.extend({
        queue: function(e, t, n) { var r; if (e) return t = (t || "fx") + "queue", r = Y.get(e, t), n && (!r || Array.isArray(n) ? r = Y.access(e, t, S.makeArray(n)) : r.push(n)), r || [] },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = S.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = S._queueHooks(e, t);
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function() { S.dequeue(e, t) }, o)), !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) { var n = t + "queueHooks"; return Y.get(e, n) || Y.access(e, n, { empty: S.Callbacks("once memory").add(function() { Y.remove(e, [t + "queue", n]) }) }) }
    }), S.fn.extend({
        queue: function(t, n) {
            var e = 2;
            return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? S.queue(this[0], t) : void 0 === n ? this : this.each(function() {
                var e = S.queue(this, t, n);
                S._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && S.dequeue(this, t)
            })
        },
        dequeue: function(e) { return this.each(function() { S.dequeue(this, e) }) },
        clearQueue: function(e) { return this.queue(e || "fx", []) },
        promise: function(e, t) {
            var n, r = 1,
                i = S.Deferred(),
                o = this,
                a = this.length,
                s = function() {--r || i.resolveWith(o, [o]) };
            "string" != typeof e && (t = e, e = void 0), e = e || "fx";
            while (a--)(n = Y.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
            return s(), i.promise(t)
        }
    });
    var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
        ne = ["Top", "Right", "Bottom", "Left"],
        re = E.documentElement,
        ie = function(e) { return S.contains(e.ownerDocument, e) },
        oe = { composed: !0 };
    re.getRootNode && (ie = function(e) { return S.contains(e.ownerDocument, e) || e.getRootNode(oe) === e.ownerDocument });
    var ae = function(e, t) { return "none" === (e = t || e).style.display || "" === e.style.display && ie(e) && "none" === S.css(e, "display") };

    function se(e, t, n, r) {
        var i, o, a = 20,
            s = r ? function() { return r.cur() } : function() { return S.css(e, t, "") },
            u = s(),
            l = n && n[3] || (S.cssNumber[t] ? "" : "px"),
            c = e.nodeType && (S.cssNumber[t] || "px" !== l && +u) && te.exec(S.css(e, t));
        if (c && c[3] !== l) {
            u /= 2, l = l || c[3], c = +u || 1;
            while (a--) S.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;
            c *= 2, S.style(e, t, c + l), n = n || []
        }
        return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i
    }
    var ue = {};

    function le(e, t) { for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++)(r = e[c]).style && (n = r.style.display, t ? ("none" === n && (l[c] = Y.get(r, "display") || null, l[c] || (r.style.display = "")), "" === r.style.display && ae(r) && (l[c] = (u = a = o = void 0, a = (i = r).ownerDocument, s = i.nodeName, (u = ue[s]) || (o = a.body.appendChild(a.createElement(s)), u = S.css(o, "display"), o.parentNode.removeChild(o), "none" === u && (u = "block"), ue[s] = u)))) : "none" !== n && (l[c] = "none", Y.set(r, "display", n))); for (c = 0; c < f; c++) null != l[c] && (e[c].style.display = l[c]); return e }
    S.fn.extend({ show: function() { return le(this, !0) }, hide: function() { return le(this) }, toggle: function(e) { return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() { ae(this) ? S(this).show() : S(this).hide() }) } });
    var ce, fe, pe = /^(?:checkbox|radio)$/i,
        de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        he = /^$|^module$|\/(?:java|ecma)script/i;
    ce = E.createDocumentFragment().appendChild(E.createElement("div")), (fe = E.createElement("input")).setAttribute("type", "radio"), fe.setAttribute("checked", "checked"), fe.setAttribute("name", "t"), ce.appendChild(fe), y.checkClone = ce.cloneNode(!0).cloneNode(!0).lastChild.checked, ce.innerHTML = "<textarea>x</textarea>", y.noCloneChecked = !!ce.cloneNode(!0).lastChild.defaultValue, ce.innerHTML = "<option></option>", y.option = !!ce.lastChild;
    var ge = { thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };

    function ve(e, t) { var n; return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && A(e, t) ? S.merge([e], n) : n }

    function ye(e, t) { for (var n = 0, r = e.length; n < r; n++) Y.set(e[n], "globalEval", !t || Y.get(t[n], "globalEval")) }
    ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td, y.option || (ge.optgroup = ge.option = [1, "<select multiple='multiple'>", "</select>"]);
    var me = /<|&#?\w+;/;

    function xe(e, t, n, r, i) {
        for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)
            if ((o = e[d]) || 0 === o)
                if ("object" === w(o)) S.merge(p, o.nodeType ? [o] : o);
                else if (me.test(o)) {
            a = a || f.appendChild(t.createElement("div")), s = (de.exec(o) || ["", ""])[1].toLowerCase(), u = ge[s] || ge._default, a.innerHTML = u[1] + S.htmlPrefilter(o) + u[2], c = u[0];
            while (c--) a = a.lastChild;
            S.merge(p, a.childNodes), (a = f.firstChild).textContent = ""
        } else p.push(t.createTextNode(o));
        f.textContent = "", d = 0;
        while (o = p[d++])
            if (r && -1 < S.inArray(o, r)) i && i.push(o);
            else if (l = ie(o), a = ve(f.appendChild(o), "script"), l && ye(a), n) { c = 0; while (o = a[c++]) he.test(o.type || "") && n.push(o) }
        return f
    }
    var be = /^key/,
        we = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Te = /^([^.]*)(?:\.(.+)|)/;

    function Ce() { return !0 }

    function Ee() { return !1 }

    function Se(e, t) { return e === function() { try { return E.activeElement } catch (e) {} }() == ("focus" === t) }

    function ke(e, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) { for (s in "string" != typeof n && (r = r || n, n = void 0), t) ke(e, s, n, r, t[s], o); return e }
        if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = Ee;
        else if (!i) return e;
        return 1 === o && (a = i, (i = function(e) { return S().off(e), a.apply(this, arguments) }).guid = a.guid || (a.guid = S.guid++)), e.each(function() { S.event.add(this, t, i, r, n) })
    }

    function Ae(e, i, o) {
        o ? (Y.set(e, i, !1), S.event.add(e, i, {
            namespace: !1,
            handler: function(e) {
                var t, n, r = Y.get(this, i);
                if (1 & e.isTrigger && this[i]) {
                    if (r.length)(S.event.special[i] || {}).delegateType && e.stopPropagation();
                    else if (r = s.call(arguments), Y.set(this, i, r), t = o(this, i), this[i](), r !== (n = Y.get(this, i)) || t ? Y.set(this, i, !1) : n = {}, r !== n) return e.stopImmediatePropagation(), e.preventDefault(), n.value
                } else r.length && (Y.set(this, i, { value: S.event.trigger(S.extend(r[0], S.Event.prototype), r.slice(1), this) }), e.stopImmediatePropagation())
            }
        })) : void 0 === Y.get(e, i) && S.event.add(e, i, Ce)
    }
    S.event = {
        global: {},
        add: function(t, e, n, r, i) { var o, a, s, u, l, c, f, p, d, h, g, v = Y.get(t); if (V(t)) { n.handler && (n = (o = n).handler, i = o.selector), i && S.find.matchesSelector(re, i), n.guid || (n.guid = S.guid++), (u = v.events) || (u = v.events = Object.create(null)), (a = v.handle) || (a = v.handle = function(e) { return "undefined" != typeof S && S.event.triggered !== e.type ? S.event.dispatch.apply(t, arguments) : void 0 }), l = (e = (e || "").match(P) || [""]).length; while (l--) d = g = (s = Te.exec(e[l]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = S.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = S.event.special[d] || {}, c = S.extend({ type: d, origType: g, data: r, handler: n, guid: n.guid, selector: i, needsContext: i && S.expr.match.needsContext.test(i), namespace: h.join(".") }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(t, r, h, a) || t.addEventListener && t.addEventListener(d, a)), f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), S.event.global[d] = !0) } },
        remove: function(e, t, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, v = Y.hasData(e) && Y.get(e);
            if (v && (u = v.events)) {
                l = (t = (t || "").match(P) || [""]).length;
                while (l--)
                    if (d = g = (s = Te.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d) {
                        f = S.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length;
                        while (o--) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
                        a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || S.removeEvent(e, d, v.handle), delete u[d])
                    } else
                        for (d in u) S.event.remove(e, d + t[l], n, r, !0);
                S.isEmptyObject(u) && Y.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, n, r, i, o, a, s = new Array(arguments.length),
                u = S.event.fix(e),
                l = (Y.get(this, "events") || Object.create(null))[u.type] || [],
                c = S.event.special[u.type] || {};
            for (s[0] = u, t = 1; t < arguments.length; t++) s[t] = arguments[t];
            if (u.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, u)) { a = S.event.handlers.call(this, u, l), t = 0; while ((i = a[t++]) && !u.isPropagationStopped()) { u.currentTarget = i.elem, n = 0; while ((o = i.handlers[n++]) && !u.isImmediatePropagationStopped()) u.rnamespace && !1 !== o.namespace && !u.rnamespace.test(o.namespace) || (u.handleObj = o, u.data = o.data, void 0 !== (r = ((S.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) && !1 === (u.result = r) && (u.preventDefault(), u.stopPropagation())) } return c.postDispatch && c.postDispatch.call(this, u), u.result }
        },
        handlers: function(e, t) {
            var n, r, i, o, a, s = [],
                u = t.delegateCount,
                l = e.target;
            if (u && l.nodeType && !("click" === e.type && 1 <= e.button))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                        for (o = [], a = {}, n = 0; n < u; n++) void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? -1 < S(i, this).index(l) : S.find(i, this, null, [l]).length), a[i] && o.push(r);
                        o.length && s.push({ elem: l, handlers: o })
                    }
            return l = this, u < t.length && s.push({ elem: l, handlers: t.slice(u) }), s
        },
        addProp: function(t, e) { Object.defineProperty(S.Event.prototype, t, { enumerable: !0, configurable: !0, get: m(e) ? function() { if (this.originalEvent) return e(this.originalEvent) } : function() { if (this.originalEvent) return this.originalEvent[t] }, set: function(e) { Object.defineProperty(this, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) } }) },
        fix: function(e) { return e[S.expando] ? e : new S.Event(e) },
        special: { load: { noBubble: !0 }, click: { setup: function(e) { var t = this || e; return pe.test(t.type) && t.click && A(t, "input") && Ae(t, "click", Ce), !1 }, trigger: function(e) { var t = this || e; return pe.test(t.type) && t.click && A(t, "input") && Ae(t, "click"), !0 }, _default: function(e) { var t = e.target; return pe.test(t.type) && t.click && A(t, "input") && Y.get(t, "click") || A(t, "a") } }, beforeunload: { postDispatch: function(e) { void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result) } } }
    }, S.removeEvent = function(e, t, n) { e.removeEventListener && e.removeEventListener(t, n) }, S.Event = function(e, t) {
        if (!(this instanceof S.Event)) return new S.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ce : Ee, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && S.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[S.expando] = !0
    }, S.Event.prototype = {
        constructor: S.Event,
        isDefaultPrevented: Ee,
        isPropagationStopped: Ee,
        isImmediatePropagationStopped: Ee,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = Ce, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = Ce, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = Ce, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, S.each({ altKey: !0, bubbles: !0, cancelable: !0, changedTouches: !0, ctrlKey: !0, detail: !0, eventPhase: !0, metaKey: !0, pageX: !0, pageY: !0, shiftKey: !0, view: !0, "char": !0, code: !0, charCode: !0, key: !0, keyCode: !0, button: !0, buttons: !0, clientX: !0, clientY: !0, offsetX: !0, offsetY: !0, pointerId: !0, pointerType: !0, screenX: !0, screenY: !0, targetTouches: !0, toElement: !0, touches: !0, which: function(e) { var t = e.button; return null == e.which && be.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && we.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which } }, S.event.addProp), S.each({ focus: "focusin", blur: "focusout" }, function(e, t) { S.event.special[e] = { setup: function() { return Ae(this, e, Se), !1 }, trigger: function() { return Ae(this, e), !0 }, delegateType: t } }), S.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function(e, i) {
        S.event.special[e] = {
            delegateType: i,
            bindType: i,
            handle: function(e) {
                var t, n = e.relatedTarget,
                    r = e.handleObj;
                return n && (n === this || S.contains(this, n)) || (e.type = r.origType, t = r.handler.apply(this, arguments), e.type = i), t
            }
        }
    }), S.fn.extend({ on: function(e, t, n, r) { return ke(this, e, t, n, r) }, one: function(e, t, n, r) { return ke(this, e, t, n, r, 1) }, off: function(e, t, n) { var r, i; if (e && e.preventDefault && e.handleObj) return r = e.handleObj, S(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this; if ("object" == typeof e) { for (i in e) this.off(i, t, e[i]); return this } return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Ee), this.each(function() { S.event.remove(this, e, n, t) }) } });
    var Ne = /<script|<style|<link/i,
        De = /checked\s*(?:[^=]|=\s*.checked.)/i,
        je = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function qe(e, t) { return A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && S(e).children("tbody")[0] || e }

    function Le(e) { return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e }

    function He(e) { return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e }

    function Oe(e, t) {
        var n, r, i, o, a, s;
        if (1 === t.nodeType) {
            if (Y.hasData(e) && (s = Y.get(e).events))
                for (i in Y.remove(t, "handle events"), s)
                    for (n = 0, r = s[i].length; n < r; n++) S.event.add(t, i, s[i][n]);
            Q.hasData(e) && (o = Q.access(e), a = S.extend({}, o), Q.set(t, a))
        }
    }

    function Pe(n, r, i, o) {
        r = g(r);
        var e, t, a, s, u, l, c = 0,
            f = n.length,
            p = f - 1,
            d = r[0],
            h = m(d);
        if (h || 1 < f && "string" == typeof d && !y.checkClone && De.test(d)) return n.each(function(e) {
            var t = n.eq(e);
            h && (r[0] = d.call(this, e, t.html())), Pe(t, r, i, o)
        });
        if (f && (t = (e = xe(r, n[0].ownerDocument, !1, n, o)).firstChild, 1 === e.childNodes.length && (e = t), t || o)) {
            for (s = (a = S.map(ve(e, "script"), Le)).length; c < f; c++) u = e, c !== p && (u = S.clone(u, !0, !0), s && S.merge(a, ve(u, "script"))), i.call(n[c], u, c);
            if (s)
                for (l = a[a.length - 1].ownerDocument, S.map(a, He), c = 0; c < s; c++) u = a[c], he.test(u.type || "") && !Y.access(u, "globalEval") && S.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? S._evalUrl && !u.noModule && S._evalUrl(u.src, { nonce: u.nonce || u.getAttribute("nonce") }, l) : b(u.textContent.replace(je, ""), u, l))
        }
        return n
    }

    function Re(e, t, n) { for (var r, i = t ? S.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || S.cleanData(ve(r)), r.parentNode && (n && ie(r) && ye(ve(r, "script")), r.parentNode.removeChild(r)); return e }
    S.extend({
        htmlPrefilter: function(e) { return e },
        clone: function(e, t, n) {
            var r, i, o, a, s, u, l, c = e.cloneNode(!0),
                f = ie(e);
            if (!(y.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || S.isXMLDoc(e)))
                for (a = ve(c), r = 0, i = (o = ve(e)).length; r < i; r++) s = o[r], u = a[r], void 0, "input" === (l = u.nodeName.toLowerCase()) && pe.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue);
            if (t)
                if (n)
                    for (o = o || ve(e), a = a || ve(c), r = 0, i = o.length; r < i; r++) Oe(o[r], a[r]);
                else Oe(e, c);
            return 0 < (a = ve(c, "script")).length && ye(a, !f && ve(e, "script")), c
        },
        cleanData: function(e) {
            for (var t, n, r, i = S.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (V(n)) {
                    if (t = n[Y.expando]) {
                        if (t.events)
                            for (r in t.events) i[r] ? S.event.remove(n, r) : S.removeEvent(n, r, t.handle);
                        n[Y.expando] = void 0
                    }
                    n[Q.expando] && (n[Q.expando] = void 0)
                }
        }
    }), S.fn.extend({
        detach: function(e) { return Re(this, e, !0) },
        remove: function(e) { return Re(this, e) },
        text: function(e) { return $(this, function(e) { return void 0 === e ? S.text(this) : this.empty().each(function() { 1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e) }) }, null, e, arguments.length) },
        append: function() { return Pe(this, arguments, function(e) { 1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || qe(this, e).appendChild(e) }) },
        prepend: function() {
            return Pe(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = qe(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() { return Pe(this, arguments, function(e) { this.parentNode && this.parentNode.insertBefore(e, this) }) },
        after: function() { return Pe(this, arguments, function(e) { this.parentNode && this.parentNode.insertBefore(e, this.nextSibling) }) },
        empty: function() { for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (S.cleanData(ve(e, !1)), e.textContent = ""); return this },
        clone: function(e, t) { return e = null != e && e, t = null == t ? e : t, this.map(function() { return S.clone(this, e, t) }) },
        html: function(e) {
            return $(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    r = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !Ne.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = S.htmlPrefilter(e);
                    try {
                        for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (S.cleanData(ve(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var n = [];
            return Pe(this, arguments, function(e) {
                var t = this.parentNode;
                S.inArray(this, n) < 0 && (S.cleanData(ve(this)), t && t.replaceChild(e, this))
            }, n)
        }
    }), S.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function(e, a) { S.fn[e] = function(e) { for (var t, n = [], r = S(e), i = r.length - 1, o = 0; o <= i; o++) t = o === i ? this : this.clone(!0), S(r[o])[a](t), u.apply(n, t.get()); return this.pushStack(n) } });
    var Me = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
        Ie = function(e) { var t = e.ownerDocument.defaultView; return t && t.opener || (t = C), t.getComputedStyle(e) },
        We = function(e, t, n) { var r, i, o = {}; for (i in t) o[i] = e.style[i], e.style[i] = t[i]; for (i in r = n.call(e), t) e.style[i] = o[i]; return r },
        Fe = new RegExp(ne.join("|"), "i");

    function Be(e, t, n) { var r, i, o, a, s = e.style; return (n = n || Ie(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || ie(e) || (a = S.style(e, t)), !y.pixelBoxStyles() && Me.test(a) && Fe.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a }

    function $e(e, t) {
        return {
            get: function() {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }! function() {
        function e() {
            if (l) {
                u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", re.appendChild(u).appendChild(l);
                var e = C.getComputedStyle(l);
                n = "1%" !== e.top, s = 12 === t(e.marginLeft), l.style.right = "60%", o = 36 === t(e.right), r = 36 === t(e.width), l.style.position = "absolute", i = 12 === t(l.offsetWidth / 3), re.removeChild(u), l = null
            }
        }

        function t(e) { return Math.round(parseFloat(e)) }
        var n, r, i, o, a, s, u = E.createElement("div"),
            l = E.createElement("div");
        l.style && (l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", y.clearCloneStyle = "content-box" === l.style.backgroundClip, S.extend(y, { boxSizingReliable: function() { return e(), r }, pixelBoxStyles: function() { return e(), o }, pixelPosition: function() { return e(), n }, reliableMarginLeft: function() { return e(), s }, scrollboxSize: function() { return e(), i }, reliableTrDimensions: function() { var e, t, n, r; return null == a && (e = E.createElement("table"), t = E.createElement("tr"), n = E.createElement("div"), e.style.cssText = "position:absolute;left:-11111px", t.style.height = "1px", n.style.height = "9px", re.appendChild(e).appendChild(t).appendChild(n), r = C.getComputedStyle(t), a = 3 < parseInt(r.height), re.removeChild(e)), a } }))
    }();
    var _e = ["Webkit", "Moz", "ms"],
        ze = E.createElement("div").style,
        Ue = {};

    function Xe(e) {
        var t = S.cssProps[e] || Ue[e];
        return t || (e in ze ? e : Ue[e] = function(e) {
            var t = e[0].toUpperCase() + e.slice(1),
                n = _e.length;
            while (n--)
                if ((e = _e[n] + t) in ze) return e
        }(e) || e)
    }
    var Ve = /^(none|table(?!-c[ea]).+)/,
        Ge = /^--/,
        Ye = { position: "absolute", visibility: "hidden", display: "block" },
        Qe = { letterSpacing: "0", fontWeight: "400" };

    function Je(e, t, n) { var r = te.exec(t); return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t }

    function Ke(e, t, n, r, i, o) {
        var a = "width" === t ? 1 : 0,
            s = 0,
            u = 0;
        if (n === (r ? "border" : "content")) return 0;
        for (; a < 4; a += 2) "margin" === n && (u += S.css(e, n + ne[a], !0, i)), r ? ("content" === n && (u -= S.css(e, "padding" + ne[a], !0, i)), "margin" !== n && (u -= S.css(e, "border" + ne[a] + "Width", !0, i))) : (u += S.css(e, "padding" + ne[a], !0, i), "padding" !== n ? u += S.css(e, "border" + ne[a] + "Width", !0, i) : s += S.css(e, "border" + ne[a] + "Width", !0, i));
        return !r && 0 <= o && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0), u
    }

    function Ze(e, t, n) {
        var r = Ie(e),
            i = (!y.boxSizingReliable() || n) && "border-box" === S.css(e, "boxSizing", !1, r),
            o = i,
            a = Be(e, t, r),
            s = "offset" + t[0].toUpperCase() + t.slice(1);
        if (Me.test(a)) {
            if (!n) return a;
            a = "auto"
        }
        return (!y.boxSizingReliable() && i || !y.reliableTrDimensions() && A(e, "tr") || "auto" === a || !parseFloat(a) && "inline" === S.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === S.css(e, "boxSizing", !1, r), (o = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + Ke(e, t, n || (i ? "border" : "content"), o, r, a) + "px"
    }

    function et(e, t, n, r, i) { return new et.prototype.init(e, t, n, r, i) }
    S.extend({
        cssHooks: { opacity: { get: function(e, t) { if (t) { var n = Be(e, "opacity"); return "" === n ? "1" : n } } } },
        cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, gridArea: !0, gridColumn: !0, gridColumnEnd: !0, gridColumnStart: !0, gridRow: !0, gridRowEnd: !0, gridRowStart: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 },
        cssProps: {},
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = X(t),
                    u = Ge.test(t),
                    l = e.style;
                if (u || (t = Xe(s)), a = S.cssHooks[t] || S.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
                "string" === (o = typeof n) && (i = te.exec(n)) && i[1] && (n = se(e, t, i), o = "number"), null != n && n == n && ("number" !== o || u || (n += i && i[3] || (S.cssNumber[s] ? "" : "px")), y.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n))
            }
        },
        css: function(e, t, n, r) { var i, o, a, s = X(t); return Ge.test(t) || (t = Xe(s)), (a = S.cssHooks[t] || S.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = Be(e, t, r)), "normal" === i && t in Qe && (i = Qe[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i }
    }), S.each(["height", "width"], function(e, u) {
        S.cssHooks[u] = {
            get: function(e, t, n) { if (t) return !Ve.test(S.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Ze(e, u, n) : We(e, Ye, function() { return Ze(e, u, n) }) },
            set: function(e, t, n) {
                var r, i = Ie(e),
                    o = !y.scrollboxSize() && "absolute" === i.position,
                    a = (o || n) && "border-box" === S.css(e, "boxSizing", !1, i),
                    s = n ? Ke(e, u, n, a, i) : 0;
                return a && o && (s -= Math.ceil(e["offset" + u[0].toUpperCase() + u.slice(1)] - parseFloat(i[u]) - Ke(e, u, "border", !1, i) - .5)), s && (r = te.exec(t)) && "px" !== (r[3] || "px") && (e.style[u] = t, t = S.css(e, u)), Je(0, t, s)
            }
        }
    }), S.cssHooks.marginLeft = $e(y.reliableMarginLeft, function(e, t) { if (t) return (parseFloat(Be(e, "marginLeft")) || e.getBoundingClientRect().left - We(e, { marginLeft: 0 }, function() { return e.getBoundingClientRect().left })) + "px" }), S.each({ margin: "", padding: "", border: "Width" }, function(i, o) { S.cssHooks[i + o] = { expand: function(e) { for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[i + ne[t] + o] = r[t] || r[t - 2] || r[0]; return n } }, "margin" !== i && (S.cssHooks[i + o].set = Je) }), S.fn.extend({
        css: function(e, t) {
            return $(this, function(e, t, n) {
                var r, i, o = {},
                    a = 0;
                if (Array.isArray(t)) { for (r = Ie(e), i = t.length; a < i; a++) o[t[a]] = S.css(e, t[a], !1, r); return o }
                return void 0 !== n ? S.style(e, t, n) : S.css(e, t)
            }, e, t, 1 < arguments.length)
        }
    }), ((S.Tween = et).prototype = { constructor: et, init: function(e, t, n, r, i, o) { this.elem = e, this.prop = n, this.easing = i || S.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (S.cssNumber[n] ? "" : "px") }, cur: function() { var e = et.propHooks[this.prop]; return e && e.get ? e.get(this) : et.propHooks._default.get(this) }, run: function(e) { var t, n = et.propHooks[this.prop]; return this.options.duration ? this.pos = t = S.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : et.propHooks._default.set(this), this } }).init.prototype = et.prototype, (et.propHooks = { _default: { get: function(e) { var t; return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = S.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0 }, set: function(e) { S.fx.step[e.prop] ? S.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !S.cssHooks[e.prop] && null == e.elem.style[Xe(e.prop)] ? e.elem[e.prop] = e.now : S.style(e.elem, e.prop, e.now + e.unit) } } }).scrollTop = et.propHooks.scrollLeft = { set: function(e) { e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now) } }, S.easing = { linear: function(e) { return e }, swing: function(e) { return .5 - Math.cos(e * Math.PI) / 2 }, _default: "swing" }, S.fx = et.prototype.init, S.fx.step = {};
    var tt, nt, rt, it, ot = /^(?:toggle|show|hide)$/,
        at = /queueHooks$/;

    function st() { nt && (!1 === E.hidden && C.requestAnimationFrame ? C.requestAnimationFrame(st) : C.setTimeout(st, S.fx.interval), S.fx.tick()) }

    function ut() { return C.setTimeout(function() { tt = void 0 }), tt = Date.now() }

    function lt(e, t) {
        var n, r = 0,
            i = { height: e };
        for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = ne[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i
    }

    function ct(e, t, n) {
        for (var r, i = (ft.tweeners[t] || []).concat(ft.tweeners["*"]), o = 0, a = i.length; o < a; o++)
            if (r = i[o].call(n, t, e)) return r
    }

    function ft(o, e, t) {
        var n, a, r = 0,
            i = ft.prefilters.length,
            s = S.Deferred().always(function() { delete u.elem }),
            u = function() { if (a) return !1; for (var e = tt || ut(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), r = 0, i = l.tweens.length; r < i; r++) l.tweens[r].run(n); return s.notifyWith(o, [l, n, t]), n < 1 && i ? t : (i || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1) },
            l = s.promise({
                elem: o,
                props: S.extend({}, e),
                opts: S.extend(!0, { specialEasing: {}, easing: S.easing._default }, t),
                originalProperties: e,
                originalOptions: t,
                startTime: tt || ut(),
                duration: t.duration,
                tweens: [],
                createTween: function(e, t) { var n = S.Tween(o, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing); return l.tweens.push(n), n },
                stop: function(e) {
                    var t = 0,
                        n = e ? l.tweens.length : 0;
                    if (a) return this;
                    for (a = !0; t < n; t++) l.tweens[t].run(1);
                    return e ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e])) : s.rejectWith(o, [l, e]), this
                }
            }),
            c = l.props;
        for (! function(e, t) {
                var n, r, i, o, a;
                for (n in e)
                    if (i = t[r = X(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = S.cssHooks[r]) && "expand" in a)
                        for (n in o = a.expand(o), delete e[r], o) n in e || (e[n] = o[n], t[n] = i);
                    else t[r] = i
            }(c, l.opts.specialEasing); r < i; r++)
            if (n = ft.prefilters[r].call(l, o, c, l.opts)) return m(n.stop) && (S._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)), n;
        return S.map(c, ct, l), m(l.opts.start) && l.opts.start.call(o, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), S.fx.timer(S.extend(u, { elem: o, anim: l, queue: l.opts.queue })), l
    }
    S.Animation = S.extend(ft, {
        tweeners: { "*": [function(e, t) { var n = this.createTween(e, t); return se(n.elem, e, te.exec(t), n), n }] },
        tweener: function(e, t) { m(e) ? (t = e, e = ["*"]) : e = e.match(P); for (var n, r = 0, i = e.length; r < i; r++) n = e[r], ft.tweeners[n] = ft.tweeners[n] || [], ft.tweeners[n].unshift(t) },
        prefilters: [function(e, t, n) {
            var r, i, o, a, s, u, l, c, f = "width" in t || "height" in t,
                p = this,
                d = {},
                h = e.style,
                g = e.nodeType && ae(e),
                v = Y.get(e, "fxshow");
            for (r in n.queue || (null == (a = S._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function() { a.unqueued || s() }), a.unqueued++, p.always(function() { p.always(function() { a.unqueued--, S.queue(e, "fx").length || a.empty.fire() }) })), t)
                if (i = t[r], ot.test(i)) {
                    if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
                        if ("show" !== i || !v || void 0 === v[r]) continue;
                        g = !0
                    }
                    d[r] = v && v[r] || S.style(e, r)
                }
            if ((u = !S.isEmptyObject(t)) || !S.isEmptyObject(d))
                for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = v && v.display) && (l = Y.get(e, "display")), "none" === (c = S.css(e, "display")) && (l ? c = l : (le([e], !0), l = e.style.display || l, c = S.css(e, "display"), le([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === S.css(e, "float") && (u || (p.done(function() { h.display = l }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function() { h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2] })), u = !1, d) u || (v ? "hidden" in v && (g = v.hidden) : v = Y.access(e, "fxshow", { display: l }), o && (v.hidden = !g), g && le([e], !0), p.done(function() { for (r in g || le([e]), Y.remove(e, "fxshow"), d) S.style(e, r, d[r]) })), u = ct(g ? v[r] : 0, r, p), r in v || (v[r] = u.start, g && (u.end = u.start, u.start = 0))
        }],
        prefilter: function(e, t) { t ? ft.prefilters.unshift(e) : ft.prefilters.push(e) }
    }), S.speed = function(e, t, n) { var r = e && "object" == typeof e ? S.extend({}, e) : { complete: n || !n && t || m(e) && e, duration: e, easing: n && t || t && !m(t) && t }; return S.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in S.fx.speeds ? r.duration = S.fx.speeds[r.duration] : r.duration = S.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() { m(r.old) && r.old.call(this), r.queue && S.dequeue(this, r.queue) }, r }, S.fn.extend({
        fadeTo: function(e, t, n, r) { return this.filter(ae).css("opacity", 0).show().end().animate({ opacity: t }, e, n, r) },
        animate: function(t, e, n, r) {
            var i = S.isEmptyObject(t),
                o = S.speed(e, n, r),
                a = function() {
                    var e = ft(this, S.extend({}, t), o);
                    (i || Y.get(this, "finish")) && e.stop(!0)
                };
            return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        },
        stop: function(i, e, o) {
            var a = function(e) {
                var t = e.stop;
                delete e.stop, t(o)
            };
            return "string" != typeof i && (o = e, e = i, i = void 0), e && this.queue(i || "fx", []), this.each(function() {
                var e = !0,
                    t = null != i && i + "queueHooks",
                    n = S.timers,
                    r = Y.get(this);
                if (t) r[t] && r[t].stop && a(r[t]);
                else
                    for (t in r) r[t] && r[t].stop && at.test(t) && a(r[t]);
                for (t = n.length; t--;) n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o), e = !1, n.splice(t, 1));
                !e && o || S.dequeue(this, i)
            })
        },
        finish: function(a) {
            return !1 !== a && (a = a || "fx"), this.each(function() {
                var e, t = Y.get(this),
                    n = t[a + "queue"],
                    r = t[a + "queueHooks"],
                    i = S.timers,
                    o = n ? n.length : 0;
                for (t.finish = !0, S.queue(this, a, []), r && r.stop && r.stop.call(this, !0), e = i.length; e--;) i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0), i.splice(e, 1));
                for (e = 0; e < o; e++) n[e] && n[e].finish && n[e].finish.call(this);
                delete t.finish
            })
        }
    }), S.each(["toggle", "show", "hide"], function(e, r) {
        var i = S.fn[r];
        S.fn[r] = function(e, t, n) { return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(lt(r, !0), e, t, n) }
    }), S.each({ slideDown: lt("show"), slideUp: lt("hide"), slideToggle: lt("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function(e, r) { S.fn[e] = function(e, t, n) { return this.animate(r, e, t, n) } }), S.timers = [], S.fx.tick = function() {
        var e, t = 0,
            n = S.timers;
        for (tt = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || S.fx.stop(), tt = void 0
    }, S.fx.timer = function(e) { S.timers.push(e), S.fx.start() }, S.fx.interval = 13, S.fx.start = function() { nt || (nt = !0, st()) }, S.fx.stop = function() { nt = null }, S.fx.speeds = { slow: 600, fast: 200, _default: 400 }, S.fn.delay = function(r, e) {
        return r = S.fx && S.fx.speeds[r] || r, e = e || "fx", this.queue(e, function(e, t) {
            var n = C.setTimeout(e, r);
            t.stop = function() { C.clearTimeout(n) }
        })
    }, rt = E.createElement("input"), it = E.createElement("select").appendChild(E.createElement("option")), rt.type = "checkbox", y.checkOn = "" !== rt.value, y.optSelected = it.selected, (rt = E.createElement("input")).value = "t", rt.type = "radio", y.radioValue = "t" === rt.value;
    var pt, dt = S.expr.attrHandle;
    S.fn.extend({ attr: function(e, t) { return $(this, S.attr, e, t, 1 < arguments.length) }, removeAttr: function(e) { return this.each(function() { S.removeAttr(this, e) }) } }), S.extend({
        attr: function(e, t, n) { var r, i, o = e.nodeType; if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? S.prop(e, t, n) : (1 === o && S.isXMLDoc(e) || (i = S.attrHooks[t.toLowerCase()] || (S.expr.match.bool.test(t) ? pt : void 0)), void 0 !== n ? null === n ? void S.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = S.find.attr(e, t)) ? void 0 : r) },
        attrHooks: { type: { set: function(e, t) { if (!y.radioValue && "radio" === t && A(e, "input")) { var n = e.value; return e.setAttribute("type", t), n && (e.value = n), t } } } },
        removeAttr: function(e, t) {
            var n, r = 0,
                i = t && t.match(P);
            if (i && 1 === e.nodeType)
                while (n = i[r++]) e.removeAttribute(n)
        }
    }), pt = { set: function(e, t, n) { return !1 === t ? S.removeAttr(e, n) : e.setAttribute(n, n), n } }, S.each(S.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var a = dt[t] || S.find.attr;
        dt[t] = function(e, t, n) { var r, i, o = t.toLowerCase(); return n || (i = dt[o], dt[o] = r, r = null != a(e, t, n) ? o : null, dt[o] = i), r }
    });
    var ht = /^(?:input|select|textarea|button)$/i,
        gt = /^(?:a|area)$/i;

    function vt(e) { return (e.match(P) || []).join(" ") }

    function yt(e) { return e.getAttribute && e.getAttribute("class") || "" }

    function mt(e) { return Array.isArray(e) ? e : "string" == typeof e && e.match(P) || [] }
    S.fn.extend({ prop: function(e, t) { return $(this, S.prop, e, t, 1 < arguments.length) }, removeProp: function(e) { return this.each(function() { delete this[S.propFix[e] || e] }) } }), S.extend({ prop: function(e, t, n) { var r, i, o = e.nodeType; if (3 !== o && 8 !== o && 2 !== o) return 1 === o && S.isXMLDoc(e) || (t = S.propFix[t] || t, i = S.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t] }, propHooks: { tabIndex: { get: function(e) { var t = S.find.attr(e, "tabindex"); return t ? parseInt(t, 10) : ht.test(e.nodeName) || gt.test(e.nodeName) && e.href ? 0 : -1 } } }, propFix: { "for": "htmlFor", "class": "className" } }), y.optSelected || (S.propHooks.selected = {
        get: function(e) { var t = e.parentNode; return t && t.parentNode && t.parentNode.selectedIndex, null },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), S.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() { S.propFix[this.toLowerCase()] = this }), S.fn.extend({
        addClass: function(t) {
            var e, n, r, i, o, a, s, u = 0;
            if (m(t)) return this.each(function(e) { S(this).addClass(t.call(this, e, yt(this))) });
            if ((e = mt(t)).length)
                while (n = this[u++])
                    if (i = yt(n), r = 1 === n.nodeType && " " + vt(i) + " ") {
                        a = 0;
                        while (o = e[a++]) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                        i !== (s = vt(r)) && n.setAttribute("class", s)
                    }
            return this
        },
        removeClass: function(t) {
            var e, n, r, i, o, a, s, u = 0;
            if (m(t)) return this.each(function(e) { S(this).removeClass(t.call(this, e, yt(this))) });
            if (!arguments.length) return this.attr("class", "");
            if ((e = mt(t)).length)
                while (n = this[u++])
                    if (i = yt(n), r = 1 === n.nodeType && " " + vt(i) + " ") {
                        a = 0;
                        while (o = e[a++])
                            while (-1 < r.indexOf(" " + o + " ")) r = r.replace(" " + o + " ", " ");
                        i !== (s = vt(r)) && n.setAttribute("class", s)
                    }
            return this
        },
        toggleClass: function(i, t) {
            var o = typeof i,
                a = "string" === o || Array.isArray(i);
            return "boolean" == typeof t && a ? t ? this.addClass(i) : this.removeClass(i) : m(i) ? this.each(function(e) { S(this).toggleClass(i.call(this, e, yt(this), t), t) }) : this.each(function() { var e, t, n, r; if (a) { t = 0, n = S(this), r = mt(i); while (e = r[t++]) n.hasClass(e) ? n.removeClass(e) : n.addClass(e) } else void 0 !== i && "boolean" !== o || ((e = yt(this)) && Y.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === i ? "" : Y.get(this, "__className__") || "")) })
        },
        hasClass: function(e) {
            var t, n, r = 0;
            t = " " + e + " ";
            while (n = this[r++])
                if (1 === n.nodeType && -1 < (" " + vt(yt(n)) + " ").indexOf(t)) return !0;
            return !1
        }
    });
    var xt = /\r/g;
    S.fn.extend({
        val: function(n) {
            var r, e, i, t = this[0];
            return arguments.length ? (i = m(n), this.each(function(e) {
                var t;
                1 === this.nodeType && (null == (t = i ? n.call(this, e, S(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = S.map(t, function(e) { return null == e ? "" : e + "" })), (r = S.valHooks[this.type] || S.valHooks[this.nodeName.toLowerCase()]) && "set" in r && void 0 !== r.set(this, t, "value") || (this.value = t))
            })) : t ? (r = S.valHooks[t.type] || S.valHooks[t.nodeName.toLowerCase()]) && "get" in r && void 0 !== (e = r.get(t, "value")) ? e : "string" == typeof(e = t.value) ? e.replace(xt, "") : null == e ? "" : e : void 0
        }
    }), S.extend({
        valHooks: {
            option: { get: function(e) { var t = S.find.attr(e, "value"); return null != t ? t : vt(S.text(e)) } },
            select: {
                get: function(e) {
                    var t, n, r, i = e.options,
                        o = e.selectedIndex,
                        a = "select-one" === e.type,
                        s = a ? null : [],
                        u = a ? o + 1 : i.length;
                    for (r = o < 0 ? u : a ? o : 0; r < u; r++)
                        if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))) {
                            if (t = S(n).val(), a) return t;
                            s.push(t)
                        }
                    return s
                },
                set: function(e, t) {
                    var n, r, i = e.options,
                        o = S.makeArray(t),
                        a = i.length;
                    while (a--)((r = i[a]).selected = -1 < S.inArray(S.valHooks.option.get(r), o)) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        }
    }), S.each(["radio", "checkbox"], function() { S.valHooks[this] = { set: function(e, t) { if (Array.isArray(t)) return e.checked = -1 < S.inArray(S(e).val(), t) } }, y.checkOn || (S.valHooks[this].get = function(e) { return null === e.getAttribute("value") ? "on" : e.value }) }), y.focusin = "onfocusin" in C;
    var bt = /^(?:focusinfocus|focusoutblur)$/,
        wt = function(e) { e.stopPropagation() };
    S.extend(S.event, {
        trigger: function(e, t, n, r) {
            var i, o, a, s, u, l, c, f, p = [n || E],
                d = v.call(e, "type") ? e.type : e,
                h = v.call(e, "namespace") ? e.namespace.split(".") : [];
            if (o = f = a = n = n || E, 3 !== n.nodeType && 8 !== n.nodeType && !bt.test(d + S.event.triggered) && (-1 < d.indexOf(".") && (d = (h = d.split(".")).shift(), h.sort()), u = d.indexOf(":") < 0 && "on" + d, (e = e[S.expando] ? e : new S.Event(d, "object" == typeof e && e)).isTrigger = r ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : S.makeArray(t, [e]), c = S.event.special[d] || {}, r || !c.trigger || !1 !== c.trigger.apply(n, t))) {
                if (!r && !c.noBubble && !x(n)) {
                    for (s = c.delegateType || d, bt.test(s + d) || (o = o.parentNode); o; o = o.parentNode) p.push(o), a = o;
                    a === (n.ownerDocument || E) && p.push(a.defaultView || a.parentWindow || C)
                }
                i = 0;
                while ((o = p[i++]) && !e.isPropagationStopped()) f = o, e.type = 1 < i ? s : c.bindType || d, (l = (Y.get(o, "events") || Object.create(null))[e.type] && Y.get(o, "handle")) && l.apply(o, t), (l = u && o[u]) && l.apply && V(o) && (e.result = l.apply(o, t), !1 === e.result && e.preventDefault());
                return e.type = d, r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(p.pop(), t) || !V(n) || u && m(n[d]) && !x(n) && ((a = n[u]) && (n[u] = null), S.event.triggered = d, e.isPropagationStopped() && f.addEventListener(d, wt), n[d](), e.isPropagationStopped() && f.removeEventListener(d, wt), S.event.triggered = void 0, a && (n[u] = a)), e.result
            }
        },
        simulate: function(e, t, n) {
            var r = S.extend(new S.Event, n, { type: e, isSimulated: !0 });
            S.event.trigger(r, null, t)
        }
    }), S.fn.extend({ trigger: function(e, t) { return this.each(function() { S.event.trigger(e, t, this) }) }, triggerHandler: function(e, t) { var n = this[0]; if (n) return S.event.trigger(e, t, n, !0) } }), y.focusin || S.each({ focus: "focusin", blur: "focusout" }, function(n, r) {
        var i = function(e) { S.event.simulate(r, e.target, S.event.fix(e)) };
        S.event.special[r] = {
            setup: function() {
                var e = this.ownerDocument || this.document || this,
                    t = Y.access(e, r);
                t || e.addEventListener(n, i, !0), Y.access(e, r, (t || 0) + 1)
            },
            teardown: function() {
                var e = this.ownerDocument || this.document || this,
                    t = Y.access(e, r) - 1;
                t ? Y.access(e, r, t) : (e.removeEventListener(n, i, !0), Y.remove(e, r))
            }
        }
    });
    var Tt = C.location,
        Ct = { guid: Date.now() },
        Et = /\?/;
    S.parseXML = function(e) { var t; if (!e || "string" != typeof e) return null; try { t = (new C.DOMParser).parseFromString(e, "text/xml") } catch (e) { t = void 0 } return t && !t.getElementsByTagName("parsererror").length || S.error("Invalid XML: " + e), t };
    var St = /\[\]$/,
        kt = /\r?\n/g,
        At = /^(?:submit|button|image|reset|file)$/i,
        Nt = /^(?:input|select|textarea|keygen)/i;

    function Dt(n, e, r, i) {
        var t;
        if (Array.isArray(e)) S.each(e, function(e, t) { r || St.test(n) ? i(n, t) : Dt(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, r, i) });
        else if (r || "object" !== w(e)) i(n, e);
        else
            for (t in e) Dt(n + "[" + t + "]", e[t], r, i)
    }
    S.param = function(e, t) {
        var n, r = [],
            i = function(e, t) {
                var n = m(t) ? t() : t;
                r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
            };
        if (null == e) return "";
        if (Array.isArray(e) || e.jquery && !S.isPlainObject(e)) S.each(e, function() { i(this.name, this.value) });
        else
            for (n in e) Dt(n, e[n], t, i);
        return r.join("&")
    }, S.fn.extend({ serialize: function() { return S.param(this.serializeArray()) }, serializeArray: function() { return this.map(function() { var e = S.prop(this, "elements"); return e ? S.makeArray(e) : this }).filter(function() { var e = this.type; return this.name && !S(this).is(":disabled") && Nt.test(this.nodeName) && !At.test(e) && (this.checked || !pe.test(e)) }).map(function(e, t) { var n = S(this).val(); return null == n ? null : Array.isArray(n) ? S.map(n, function(e) { return { name: t.name, value: e.replace(kt, "\r\n") } }) : { name: t.name, value: n.replace(kt, "\r\n") } }).get() } });
    var jt = /%20/g,
        qt = /#.*$/,
        Lt = /([?&])_=[^&]*/,
        Ht = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Ot = /^(?:GET|HEAD)$/,
        Pt = /^\/\//,
        Rt = {},
        Mt = {},
        It = "*/".concat("*"),
        Wt = E.createElement("a");

    function Ft(o) {
        return function(e, t) {
            "string" != typeof e && (t = e, e = "*");
            var n, r = 0,
                i = e.toLowerCase().match(P) || [];
            if (m(t))
                while (n = i[r++]) "+" === n[0] ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t)
        }
    }

    function Bt(t, i, o, a) {
        var s = {},
            u = t === Mt;

        function l(e) { var r; return s[e] = !0, S.each(t[e] || [], function(e, t) { var n = t(i, o, a); return "string" != typeof n || u || s[n] ? u ? !(r = n) : void 0 : (i.dataTypes.unshift(n), l(n), !1) }), r }
        return l(i.dataTypes[0]) || !s["*"] && l("*")
    }

    function $t(e, t) { var n, r, i = S.ajaxSettings.flatOptions || {}; for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]); return r && S.extend(!0, e, r), e }
    Wt.href = Tt.href, S.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: { url: Tt.href, type: "GET", isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Tt.protocol), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": It, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": S.parseXML }, flatOptions: { url: !0, context: !0 } },
        ajaxSetup: function(e, t) { return t ? $t($t(e, S.ajaxSettings), t) : $t(S.ajaxSettings, e) },
        ajaxPrefilter: Ft(Rt),
        ajaxTransport: Ft(Mt),
        ajax: function(e, t) {
            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var c, f, p, n, d, r, h, g, i, o, v = S.ajaxSetup({}, t),
                y = v.context || v,
                m = v.context && (y.nodeType || y.jquery) ? S(y) : S.event,
                x = S.Deferred(),
                b = S.Callbacks("once memory"),
                w = v.statusCode || {},
                a = {},
                s = {},
                u = "canceled",
                T = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (h) {
                            if (!n) { n = {}; while (t = Ht.exec(p)) n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2]) }
                            t = n[e.toLowerCase() + " "]
                        }
                        return null == t ? null : t.join(", ")
                    },
                    getAllResponseHeaders: function() { return h ? p : null },
                    setRequestHeader: function(e, t) { return null == h && (e = s[e.toLowerCase()] = s[e.toLowerCase()] || e, a[e] = t), this },
                    overrideMimeType: function(e) { return null == h && (v.mimeType = e), this },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (h) T.always(e[T.status]);
                            else
                                for (t in e) w[t] = [w[t], e[t]];
                        return this
                    },
                    abort: function(e) { var t = e || u; return c && c.abort(t), l(0, t), this }
                };
            if (x.promise(T), v.url = ((e || v.url || Tt.href) + "").replace(Pt, Tt.protocol + "//"), v.type = t.method || t.type || v.method || v.type, v.dataTypes = (v.dataType || "*").toLowerCase().match(P) || [""], null == v.crossDomain) { r = E.createElement("a"); try { r.href = v.url, r.href = r.href, v.crossDomain = Wt.protocol + "//" + Wt.host != r.protocol + "//" + r.host } catch (e) { v.crossDomain = !0 } }
            if (v.data && v.processData && "string" != typeof v.data && (v.data = S.param(v.data, v.traditional)), Bt(Rt, v, t, T), h) return T;
            for (i in (g = S.event && v.global) && 0 == S.active++ && S.event.trigger("ajaxStart"), v.type = v.type.toUpperCase(), v.hasContent = !Ot.test(v.type), f = v.url.replace(qt, ""), v.hasContent ? v.data && v.processData && 0 === (v.contentType || "").indexOf("application/x-www-form-urlencoded") && (v.data = v.data.replace(jt, "+")) : (o = v.url.slice(f.length), v.data && (v.processData || "string" == typeof v.data) && (f += (Et.test(f) ? "&" : "?") + v.data, delete v.data), !1 === v.cache && (f = f.replace(Lt, "$1"), o = (Et.test(f) ? "&" : "?") + "_=" + Ct.guid++ + o), v.url = f + o), v.ifModified && (S.lastModified[f] && T.setRequestHeader("If-Modified-Since", S.lastModified[f]), S.etag[f] && T.setRequestHeader("If-None-Match", S.etag[f])), (v.data && v.hasContent && !1 !== v.contentType || t.contentType) && T.setRequestHeader("Content-Type", v.contentType), T.setRequestHeader("Accept", v.dataTypes[0] && v.accepts[v.dataTypes[0]] ? v.accepts[v.dataTypes[0]] + ("*" !== v.dataTypes[0] ? ", " + It + "; q=0.01" : "") : v.accepts["*"]), v.headers) T.setRequestHeader(i, v.headers[i]);
            if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h)) return T.abort();
            if (u = "abort", b.add(v.complete), T.done(v.success), T.fail(v.error), c = Bt(Mt, v, t, T)) {
                if (T.readyState = 1, g && m.trigger("ajaxSend", [T, v]), h) return T;
                v.async && 0 < v.timeout && (d = C.setTimeout(function() { T.abort("timeout") }, v.timeout));
                try { h = !1, c.send(a, l) } catch (e) {
                    if (h) throw e;
                    l(-1, e)
                }
            } else l(-1, "No Transport");

            function l(e, t, n, r) {
                var i, o, a, s, u, l = t;
                h || (h = !0, d && C.clearTimeout(d), c = void 0, p = r || "", T.readyState = 0 < e ? 4 : 0, i = 200 <= e && e < 300 || 304 === e, n && (s = function(e, t, n) {
                    var r, i, o, a, s = e.contents,
                        u = e.dataTypes;
                    while ("*" === u[0]) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (r)
                        for (i in s)
                            if (s[i] && s[i].test(r)) { u.unshift(i); break }
                    if (u[0] in n) o = u[0];
                    else {
                        for (i in n) {
                            if (!u[0] || e.converters[i + " " + u[0]]) { o = i; break }
                            a || (a = i)
                        }
                        o = o || a
                    }
                    if (o) return o !== u[0] && u.unshift(o), n[o]
                }(v, T, n)), !i && -1 < S.inArray("script", v.dataTypes) && (v.converters["text script"] = function() {}), s = function(e, t, n, r) {
                    var i, o, a, s, u, l = {},
                        c = e.dataTypes.slice();
                    if (c[1])
                        for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
                    o = c.shift();
                    while (o)
                        if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())
                            if ("*" === o) o = u;
                            else if ("*" !== u && u !== o) {
                        if (!(a = l[u + " " + o] || l["* " + o]))
                            for (i in l)
                                if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {!0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1])); break }
                        if (!0 !== a)
                            if (a && e["throws"]) t = a(t);
                            else try { t = a(t) } catch (e) { return { state: "parsererror", error: a ? e : "No conversion from " + u + " to " + o } }
                    }
                    return { state: "success", data: t }
                }(v, s, T, i), i ? (v.ifModified && ((u = T.getResponseHeader("Last-Modified")) && (S.lastModified[f] = u), (u = T.getResponseHeader("etag")) && (S.etag[f] = u)), 204 === e || "HEAD" === v.type ? l = "nocontent" : 304 === e ? l = "notmodified" : (l = s.state, o = s.data, i = !(a = s.error))) : (a = l, !e && l || (l = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (t || l) + "", i ? x.resolveWith(y, [o, l, T]) : x.rejectWith(y, [T, l, a]), T.statusCode(w), w = void 0, g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, v, i ? o : a]), b.fireWith(y, [T, l]), g && (m.trigger("ajaxComplete", [T, v]), --S.active || S.event.trigger("ajaxStop")))
            }
            return T
        },
        getJSON: function(e, t, n) { return S.get(e, t, n, "json") },
        getScript: function(e, t) { return S.get(e, void 0, t, "script") }
    }), S.each(["get", "post"], function(e, i) { S[i] = function(e, t, n, r) { return m(t) && (r = r || n, n = t, t = void 0), S.ajax(S.extend({ url: e, type: i, dataType: r, data: t, success: n }, S.isPlainObject(e) && e)) } }), S.ajaxPrefilter(function(e) { var t; for (t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "") }), S._evalUrl = function(e, t, n) { return S.ajax({ url: e, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, converters: { "text script": function() {} }, dataFilter: function(e) { S.globalEval(e, t, n) } }) }, S.fn.extend({
        wrapAll: function(e) { var t; return this[0] && (m(e) && (e = e.call(this[0])), t = S(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() { var e = this; while (e.firstElementChild) e = e.firstElementChild; return e }).append(this)), this },
        wrapInner: function(n) {
            return m(n) ? this.each(function(e) { S(this).wrapInner(n.call(this, e)) }) : this.each(function() {
                var e = S(this),
                    t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n)
            })
        },
        wrap: function(t) { var n = m(t); return this.each(function(e) { S(this).wrapAll(n ? t.call(this, e) : t) }) },
        unwrap: function(e) { return this.parent(e).not("body").each(function() { S(this).replaceWith(this.childNodes) }), this }
    }), S.expr.pseudos.hidden = function(e) { return !S.expr.pseudos.visible(e) }, S.expr.pseudos.visible = function(e) { return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length) }, S.ajaxSettings.xhr = function() { try { return new C.XMLHttpRequest } catch (e) {} };
    var _t = { 0: 200, 1223: 204 },
        zt = S.ajaxSettings.xhr();
    y.cors = !!zt && "withCredentials" in zt, y.ajax = zt = !!zt, S.ajaxTransport(function(i) {
        var o, a;
        if (y.cors || zt && !i.crossDomain) return {
            send: function(e, t) {
                var n, r = i.xhr();
                if (r.open(i.type, i.url, i.async, i.username, i.password), i.xhrFields)
                    for (n in i.xhrFields) r[n] = i.xhrFields[n];
                for (n in i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType), i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) r.setRequestHeader(n, e[n]);
                o = function(e) { return function() { o && (o = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null, "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(_t[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? { binary: r.response } : { text: r.responseText }, r.getAllResponseHeaders())) } }, r.onload = o(), a = r.onerror = r.ontimeout = o("error"), void 0 !== r.onabort ? r.onabort = a : r.onreadystatechange = function() { 4 === r.readyState && C.setTimeout(function() { o && a() }) }, o = o("abort");
                try { r.send(i.hasContent && i.data || null) } catch (e) { if (o) throw e }
            },
            abort: function() { o && o() }
        }
    }), S.ajaxPrefilter(function(e) { e.crossDomain && (e.contents.script = !1) }), S.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function(e) { return S.globalEval(e), e } } }), S.ajaxPrefilter("script", function(e) { void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET") }), S.ajaxTransport("script", function(n) { var r, i; if (n.crossDomain || n.scriptAttrs) return { send: function(e, t) { r = S("<script>").attr(n.scriptAttrs || {}).prop({ charset: n.scriptCharset, src: n.url }).on("load error", i = function(e) { r.remove(), i = null, e && t("error" === e.type ? 404 : 200, e.type) }), E.head.appendChild(r[0]) }, abort: function() { i && i() } } });
    var Ut, Xt = [],
        Vt = /(=)\?(?=&|$)|\?\?/;
    S.ajaxSetup({ jsonp: "callback", jsonpCallback: function() { var e = Xt.pop() || S.expando + "_" + Ct.guid++; return this[e] = !0, e } }), S.ajaxPrefilter("json jsonp", function(e, t, n) { var r, i, o, a = !1 !== e.jsonp && (Vt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Vt.test(e.data) && "data"); if (a || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Vt, "$1" + r) : !1 !== e.jsonp && (e.url += (Et.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function() { return o || S.error(r + " was not called"), o[0] }, e.dataTypes[0] = "json", i = C[r], C[r] = function() { o = arguments }, n.always(function() { void 0 === i ? S(C).removeProp(r) : C[r] = i, e[r] && (e.jsonpCallback = t.jsonpCallback, Xt.push(r)), o && m(i) && i(o[0]), o = i = void 0 }), "script" }), y.createHTMLDocument = ((Ut = E.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Ut.childNodes.length), S.parseHTML = function(e, t, n) { return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (y.createHTMLDocument ? ((r = (t = E.implementation.createHTMLDocument("")).createElement("base")).href = E.location.href, t.head.appendChild(r)) : t = E), o = !n && [], (i = N.exec(e)) ? [t.createElement(i[1])] : (i = xe([e], t, o), o && o.length && S(o).remove(), S.merge([], i.childNodes))); var r, i, o }, S.fn.load = function(e, t, n) {
        var r, i, o, a = this,
            s = e.indexOf(" ");
        return -1 < s && (r = vt(e.slice(s)), e = e.slice(0, s)), m(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), 0 < a.length && S.ajax({ url: e, type: i || "GET", dataType: "html", data: t }).done(function(e) { o = arguments, a.html(r ? S("<div>").append(S.parseHTML(e)).find(r) : e) }).always(n && function(e, t) { a.each(function() { n.apply(this, o || [e.responseText, t, e]) }) }), this
    }, S.expr.pseudos.animated = function(t) { return S.grep(S.timers, function(e) { return t === e.elem }).length }, S.offset = {
        setOffset: function(e, t, n) {
            var r, i, o, a, s, u, l = S.css(e, "position"),
                c = S(e),
                f = {};
            "static" === l && (e.style.position = "relative"), s = c.offset(), o = S.css(e, "top"), u = S.css(e, "left"), ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto") ? (a = (r = c.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), m(t) && (t = t.call(e, n, S.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : ("number" == typeof f.top && (f.top += "px"), "number" == typeof f.left && (f.left += "px"), c.css(f))
        }
    }, S.fn.extend({
        offset: function(t) { if (arguments.length) return void 0 === t ? this : this.each(function(e) { S.offset.setOffset(this, t, e) }); var e, n, r = this[0]; return r ? r.getClientRects().length ? (e = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, { top: e.top + n.pageYOffset, left: e.left + n.pageXOffset }) : { top: 0, left: 0 } : void 0 },
        position: function() {
            if (this[0]) {
                var e, t, n, r = this[0],
                    i = { top: 0, left: 0 };
                if ("fixed" === S.css(r, "position")) t = r.getBoundingClientRect();
                else {
                    t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement;
                    while (e && (e === n.body || e === n.documentElement) && "static" === S.css(e, "position")) e = e.parentNode;
                    e && e !== r && 1 === e.nodeType && ((i = S(e).offset()).top += S.css(e, "borderTopWidth", !0), i.left += S.css(e, "borderLeftWidth", !0))
                }
                return { top: t.top - i.top - S.css(r, "marginTop", !0), left: t.left - i.left - S.css(r, "marginLeft", !0) }
            }
        },
        offsetParent: function() { return this.map(function() { var e = this.offsetParent; while (e && "static" === S.css(e, "position")) e = e.offsetParent; return e || re }) }
    }), S.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(t, i) {
        var o = "pageYOffset" === i;
        S.fn[t] = function(e) {
            return $(this, function(e, t, n) {
                var r;
                if (x(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === n) return r ? r[i] : e[t];
                r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n
            }, t, e, arguments.length)
        }
    }), S.each(["top", "left"], function(e, n) { S.cssHooks[n] = $e(y.pixelPosition, function(e, t) { if (t) return t = Be(e, n), Me.test(t) ? S(e).position()[n] + "px" : t }) }), S.each({ Height: "height", Width: "width" }, function(a, s) {
        S.each({ padding: "inner" + a, content: s, "": "outer" + a }, function(r, o) {
            S.fn[o] = function(e, t) {
                var n = arguments.length && (r || "boolean" != typeof e),
                    i = r || (!0 === e || !0 === t ? "margin" : "border");
                return $(this, function(e, t, n) { var r; return x(e) ? 0 === o.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a])) : void 0 === n ? S.css(e, t, i) : S.style(e, t, n, i) }, s, n ? e : void 0, n)
            }
        })
    }), S.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) { S.fn[t] = function(e) { return this.on(t, e) } }), S.fn.extend({ bind: function(e, t, n) { return this.on(e, null, t, n) }, unbind: function(e, t) { return this.off(e, null, t) }, delegate: function(e, t, n, r) { return this.on(t, e, n, r) }, undelegate: function(e, t, n) { return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n) }, hover: function(e, t) { return this.mouseenter(e).mouseleave(t || e) } }), S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, n) { S.fn[n] = function(e, t) { return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n) } });
    var Gt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    S.proxy = function(e, t) { var n, r, i; if ("string" == typeof t && (n = e[t], t = e, e = n), m(e)) return r = s.call(arguments, 2), (i = function() { return e.apply(t || this, r.concat(s.call(arguments))) }).guid = e.guid = e.guid || S.guid++, i }, S.holdReady = function(e) { e ? S.readyWait++ : S.ready(!0) }, S.isArray = Array.isArray, S.parseJSON = JSON.parse, S.nodeName = A, S.isFunction = m, S.isWindow = x, S.camelCase = X, S.type = w, S.now = Date.now, S.isNumeric = function(e) { var t = S.type(e); return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e)) }, S.trim = function(e) { return null == e ? "" : (e + "").replace(Gt, "") }, "function" == typeof define && define.amd && define("jquery", [], function() { return S });
    var Yt = C.jQuery,
        Qt = C.$;
    return S.noConflict = function(e) { return C.$ === S && (C.$ = Qt), e && C.jQuery === S && (C.jQuery = Yt), S }, "undefined" == typeof e && (C.jQuery = C.$ = S), S
});

;
! function(i) { "use strict"; "function" == typeof define && define.amd ? define(["jquery"], i) : "undefined" != typeof exports ? module.exports = i(require("jquery")) : i(jQuery) }(function(i) {
    "use strict";
    var e = window.Slick || {};
    (e = function() {
        var e = 0;
        return function(t, o) {
            var s, n = this;
            n.defaults = { accessibility: !0, adaptiveHeight: !1, appendArrows: i(t), appendDots: i(t), arrows: !0, asNavFor: null, prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>', nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>', autoplay: !1, autoplaySpeed: 3e3, centerMode: !1, centerPadding: "50px", cssEase: "ease", customPaging: function(e, t) { return i('<button type="button" />').text(t + 1) }, dots: !1, dotsClass: "slick-dots", draggable: !0, easing: "linear", edgeFriction: .35, fade: !1, focusOnSelect: !1, focusOnChange: !1, infinite: !0, initialSlide: 0, lazyLoad: "ondemand", mobileFirst: !1, pauseOnHover: !0, pauseOnFocus: !0, pauseOnDotsHover: !1, respondTo: "window", responsive: null, rows: 1, rtl: !1, slide: "", slidesPerRow: 1, slidesToShow: 1, slidesToScroll: 1, speed: 500, swipe: !0, swipeToSlide: !1, touchMove: !0, touchThreshold: 5, useCSS: !0, useTransform: !0, variableWidth: !1, vertical: !1, verticalSwiping: !1, waitForAnimate: !0, zIndex: 1e3 }, n.initials = { animating: !1, dragging: !1, autoPlayTimer: null, currentDirection: 0, currentLeft: null, currentSlide: 0, direction: 1, $dots: null, listWidth: null, listHeight: null, loadIndex: 0, $nextArrow: null, $prevArrow: null, scrolling: !1, slideCount: null, slideWidth: null, $slideTrack: null, $slides: null, sliding: !1, slideOffset: 0, swipeLeft: null, swiping: !1, $list: null, touchObject: {}, transformsEnabled: !1, unslicked: !1 }, i.extend(n, n.initials), n.activeBreakpoint = null, n.animType = null, n.animProp = null, n.breakpoints = [], n.breakpointSettings = [], n.cssTransitions = !1, n.focussed = !1, n.interrupted = !1, n.hidden = "hidden", n.paused = !0, n.positionProp = null, n.respondTo = null, n.rowCount = 1, n.shouldClick = !0, n.$slider = i(t), n.$slidesCache = null, n.transformType = null, n.transitionType = null, n.visibilityChange = "visibilitychange", n.windowWidth = 0, n.windowTimer = null, s = i(t).data("slick") || {}, n.options = i.extend({}, n.defaults, o, s), n.currentSlide = n.options.initialSlide, n.originalSettings = n.options, void 0 !== document.mozHidden ? (n.hidden = "mozHidden", n.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (n.hidden = "webkitHidden", n.visibilityChange = "webkitvisibilitychange"), n.autoPlay = i.proxy(n.autoPlay, n), n.autoPlayClear = i.proxy(n.autoPlayClear, n), n.autoPlayIterator = i.proxy(n.autoPlayIterator, n), n.changeSlide = i.proxy(n.changeSlide, n), n.clickHandler = i.proxy(n.clickHandler, n), n.selectHandler = i.proxy(n.selectHandler, n), n.setPosition = i.proxy(n.setPosition, n), n.swipeHandler = i.proxy(n.swipeHandler, n), n.dragHandler = i.proxy(n.dragHandler, n), n.keyHandler = i.proxy(n.keyHandler, n), n.instanceUid = e++, n.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, n.registerBreakpoints(), n.init(!0)
        }
    }()).prototype.activateADA = function() { this.$slideTrack.find(".slick-active").attr({ "aria-hidden": "false" }).find("a, input, button, select").attr({ tabindex: "0" }) }, e.prototype.addSlide = e.prototype.slickAdd = function(e, t, o) {
        var s = this;
        if ("boolean" == typeof t) o = t, t = null;
        else if (t < 0 || t >= s.slideCount) return !1;
        s.unload(), "number" == typeof t ? 0 === t && 0 === s.$slides.length ? i(e).appendTo(s.$slideTrack) : o ? i(e).insertBefore(s.$slides.eq(t)) : i(e).insertAfter(s.$slides.eq(t)) : !0 === o ? i(e).prependTo(s.$slideTrack) : i(e).appendTo(s.$slideTrack), s.$slides = s.$slideTrack.children(this.options.slide), s.$slideTrack.children(this.options.slide).detach(), s.$slideTrack.append(s.$slides), s.$slides.each(function(e, t) { i(t).attr("data-slick-index", e) }), s.$slidesCache = s.$slides, s.reinit()
    }, e.prototype.animateHeight = function() {
        var i = this;
        if (1 === i.options.slidesToShow && !0 === i.options.adaptiveHeight && !1 === i.options.vertical) {
            var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
            i.$list.animate({ height: e }, i.options.speed)
        }
    }, e.prototype.animateSlide = function(e, t) {
        var o = {},
            s = this;
        s.animateHeight(), !0 === s.options.rtl && !1 === s.options.vertical && (e = -e), !1 === s.transformsEnabled ? !1 === s.options.vertical ? s.$slideTrack.animate({ left: e }, s.options.speed, s.options.easing, t) : s.$slideTrack.animate({ top: e }, s.options.speed, s.options.easing, t) : !1 === s.cssTransitions ? (!0 === s.options.rtl && (s.currentLeft = -s.currentLeft), i({ animStart: s.currentLeft }).animate({ animStart: e }, { duration: s.options.speed, easing: s.options.easing, step: function(i) { i = Math.ceil(i), !1 === s.options.vertical ? (o[s.animType] = "translate(" + i + "px, 0px)", s.$slideTrack.css(o)) : (o[s.animType] = "translate(0px," + i + "px)", s.$slideTrack.css(o)) }, complete: function() { t && t.call() } })) : (s.applyTransition(), e = Math.ceil(e), !1 === s.options.vertical ? o[s.animType] = "translate3d(" + e + "px, 0px, 0px)" : o[s.animType] = "translate3d(0px," + e + "px, 0px)", s.$slideTrack.css(o), t && setTimeout(function() { s.disableTransition(), t.call() }, s.options.speed))
    }, e.prototype.getNavTarget = function() {
        var e = this,
            t = e.options.asNavFor;
        return t && null !== t && (t = i(t).not(e.$slider)), t
    }, e.prototype.asNavFor = function(e) {
        var t = this.getNavTarget();
        null !== t && "object" == typeof t && t.each(function() {
            var t = i(this).slick("getSlick");
            t.unslicked || t.slideHandler(e, !0)
        })
    }, e.prototype.applyTransition = function(i) {
        var e = this,
            t = {};
        !1 === e.options.fade ? t[e.transitionType] = e.transformType + " " + e.options.speed + "ms " + e.options.cssEase : t[e.transitionType] = "opacity " + e.options.speed + "ms " + e.options.cssEase, !1 === e.options.fade ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t)
    }, e.prototype.autoPlay = function() {
        var i = this;
        i.autoPlayClear(), i.slideCount > i.options.slidesToShow && (i.autoPlayTimer = setInterval(i.autoPlayIterator, i.options.autoplaySpeed))
    }, e.prototype.autoPlayClear = function() {
        var i = this;
        i.autoPlayTimer && clearInterval(i.autoPlayTimer)
    }, e.prototype.autoPlayIterator = function() {
        var i = this,
            e = i.currentSlide + i.options.slidesToScroll;
        i.paused || i.interrupted || i.focussed || (!1 === i.options.infinite && (1 === i.direction && i.currentSlide + 1 === i.slideCount - 1 ? i.direction = 0 : 0 === i.direction && (e = i.currentSlide - i.options.slidesToScroll, i.currentSlide - 1 == 0 && (i.direction = 1))), i.slideHandler(e))
    }, e.prototype.buildArrows = function() { var e = this;!0 === e.options.arrows && (e.$prevArrow = i(e.options.prevArrow).addClass("slick-arrow"), e.$nextArrow = i(e.options.nextArrow).addClass("slick-arrow"), e.slideCount > e.options.slidesToShow ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows), e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows), !0 !== e.options.infinite && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({ "aria-disabled": "true", tabindex: "-1" })) }, e.prototype.buildDots = function() {
        var e, t, o = this;
        if (!0 === o.options.dots) {
            for (o.$slider.addClass("slick-dotted"), t = i("<ul />").addClass(o.options.dotsClass), e = 0; e <= o.getDotCount(); e += 1) t.append(i("<li />").append(o.options.customPaging.call(this, o, e)));
            o.$dots = t.appendTo(o.options.appendDots), o.$dots.find("li").first().addClass("slick-active")
        }
    }, e.prototype.buildOut = function() {
        var e = this;
        e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), e.slideCount = e.$slides.length, e.$slides.each(function(e, t) { i(t).attr("data-slick-index", e).data("originalStyling", i(t).attr("style") || "") }), e.$slider.addClass("slick-slider"), e.$slideTrack = 0 === e.slideCount ? i('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent(), e.$list = e.$slideTrack.wrap('<div class="slick-list"/>').parent(), e.$slideTrack.css("opacity", 0), !0 !== e.options.centerMode && !0 !== e.options.swipeToSlide || (e.options.slidesToScroll = 1), i("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"), e.setupInfinite(), e.buildArrows(), e.buildDots(), e.updateDots(), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), !0 === e.options.draggable && e.$list.addClass("draggable")
    }, e.prototype.buildRows = function() {
        var i, e, t, o, s, n, r, l = this;
        if (o = document.createDocumentFragment(), n = l.$slider.children(), l.options.rows > 1) {
            for (r = l.options.slidesPerRow * l.options.rows, s = Math.ceil(n.length / r), i = 0; i < s; i++) {
                var d = document.createElement("div");
                for (e = 0; e < l.options.rows; e++) {
                    var a = document.createElement("div");
                    for (t = 0; t < l.options.slidesPerRow; t++) {
                        var c = i * r + (e * l.options.slidesPerRow + t);
                        n.get(c) && a.appendChild(n.get(c))
                    }
                    d.appendChild(a)
                }
                o.appendChild(d)
            }
            l.$slider.empty().append(o), l.$slider.children().children().children().css({ width: 100 / l.options.slidesPerRow + "%", display: "inline-block" })
        }
    }, e.prototype.checkResponsive = function(e, t) {
        var o, s, n, r = this,
            l = !1,
            d = r.$slider.width(),
            a = window.innerWidth || i(window).width();
        if ("window" === r.respondTo ? n = a : "slider" === r.respondTo ? n = d : "min" === r.respondTo && (n = Math.min(a, d)), r.options.responsive && r.options.responsive.length && null !== r.options.responsive) {
            s = null;
            for (o in r.breakpoints) r.breakpoints.hasOwnProperty(o) && (!1 === r.originalSettings.mobileFirst ? n < r.breakpoints[o] && (s = r.breakpoints[o]) : n > r.breakpoints[o] && (s = r.breakpoints[o]));
            null !== s ? null !== r.activeBreakpoint ? (s !== r.activeBreakpoint || t) && (r.activeBreakpoint = s, "unslick" === r.breakpointSettings[s] ? r.unslick(s) : (r.options = i.extend({}, r.originalSettings, r.breakpointSettings[s]), !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e)), l = s) : (r.activeBreakpoint = s, "unslick" === r.breakpointSettings[s] ? r.unslick(s) : (r.options = i.extend({}, r.originalSettings, r.breakpointSettings[s]), !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e)), l = s) : null !== r.activeBreakpoint && (r.activeBreakpoint = null, r.options = r.originalSettings, !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e), l = s), e || !1 === l || r.$slider.trigger("breakpoint", [r, l])
        }
    }, e.prototype.changeSlide = function(e, t) {
        var o, s, n, r = this,
            l = i(e.currentTarget);
        switch (l.is("a") && e.preventDefault(), l.is("li") || (l = l.closest("li")), n = r.slideCount % r.options.slidesToScroll != 0, o = n ? 0 : (r.slideCount - r.currentSlide) % r.options.slidesToScroll, e.data.message) {
            case "previous":
                s = 0 === o ? r.options.slidesToScroll : r.options.slidesToShow - o, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide - s, !1, t);
                break;
            case "next":
                s = 0 === o ? r.options.slidesToScroll : o, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide + s, !1, t);
                break;
            case "index":
                var d = 0 === e.data.index ? 0 : e.data.index || l.index() * r.options.slidesToScroll;
                r.slideHandler(r.checkNavigable(d), !1, t), l.children().trigger("focus");
                break;
            default:
                return
        }
    }, e.prototype.checkNavigable = function(i) {
        var e, t;
        if (e = this.getNavigableIndexes(), t = 0, i > e[e.length - 1]) i = e[e.length - 1];
        else
            for (var o in e) {
                if (i < e[o]) { i = t; break }
                t = e[o]
            }
        return i
    }, e.prototype.cleanUpEvents = function() {
        var e = this;
        e.options.dots && null !== e.$dots && (i("li", e.$dots).off("click.slick", e.changeSlide).off("mouseenter.slick", i.proxy(e.interrupt, e, !0)).off("mouseleave.slick", i.proxy(e.interrupt, e, !1)), !0 === e.options.accessibility && e.$dots.off("keydown.slick", e.keyHandler)), e.$slider.off("focus.slick blur.slick"), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide), e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide), !0 === e.options.accessibility && (e.$prevArrow && e.$prevArrow.off("keydown.slick", e.keyHandler), e.$nextArrow && e.$nextArrow.off("keydown.slick", e.keyHandler))), e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler), e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler), e.$list.off("touchend.slick mouseup.slick", e.swipeHandler), e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler), e.$list.off("click.slick", e.clickHandler), i(document).off(e.visibilityChange, e.visibility), e.cleanUpSlideEvents(), !0 === e.options.accessibility && e.$list.off("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && i(e.$slideTrack).children().off("click.slick", e.selectHandler), i(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange), i(window).off("resize.slick.slick-" + e.instanceUid, e.resize), i("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault), i(window).off("load.slick.slick-" + e.instanceUid, e.setPosition)
    }, e.prototype.cleanUpSlideEvents = function() {
        var e = this;
        e.$list.off("mouseenter.slick", i.proxy(e.interrupt, e, !0)), e.$list.off("mouseleave.slick", i.proxy(e.interrupt, e, !1))
    }, e.prototype.cleanUpRows = function() {
        var i, e = this;
        e.options.rows > 1 && ((i = e.$slides.children().children()).removeAttr("style"), e.$slider.empty().append(i))
    }, e.prototype.clickHandler = function(i) {!1 === this.shouldClick && (i.stopImmediatePropagation(), i.stopPropagation(), i.preventDefault()) }, e.prototype.destroy = function(e) {
        var t = this;
        t.autoPlayClear(), t.touchObject = {}, t.cleanUpEvents(), i(".slick-cloned", t.$slider).detach(), t.$dots && t.$dots.remove(), t.$prevArrow && t.$prevArrow.length && (t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove()), t.$nextArrow && t.$nextArrow.length && (t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove()), t.$slides && (t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() { i(this).attr("style", i(this).data("originalStyling")) }), t.$slideTrack.children(this.options.slide).detach(), t.$slideTrack.detach(), t.$list.detach(), t.$slider.append(t.$slides)), t.cleanUpRows(), t.$slider.removeClass("slick-slider"), t.$slider.removeClass("slick-initialized"), t.$slider.removeClass("slick-dotted"), t.unslicked = !0, e || t.$slider.trigger("destroy", [t])
    }, e.prototype.disableTransition = function(i) {
        var e = this,
            t = {};
        t[e.transitionType] = "", !1 === e.options.fade ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t)
    }, e.prototype.fadeSlide = function(i, e) { var t = this;!1 === t.cssTransitions ? (t.$slides.eq(i).css({ zIndex: t.options.zIndex }), t.$slides.eq(i).animate({ opacity: 1 }, t.options.speed, t.options.easing, e)) : (t.applyTransition(i), t.$slides.eq(i).css({ opacity: 1, zIndex: t.options.zIndex }), e && setTimeout(function() { t.disableTransition(i), e.call() }, t.options.speed)) }, e.prototype.fadeSlideOut = function(i) { var e = this;!1 === e.cssTransitions ? e.$slides.eq(i).animate({ opacity: 0, zIndex: e.options.zIndex - 2 }, e.options.speed, e.options.easing) : (e.applyTransition(i), e.$slides.eq(i).css({ opacity: 0, zIndex: e.options.zIndex - 2 })) }, e.prototype.filterSlides = e.prototype.slickFilter = function(i) {
        var e = this;
        null !== i && (e.$slidesCache = e.$slides, e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.filter(i).appendTo(e.$slideTrack), e.reinit())
    }, e.prototype.focusHandler = function() {
        var e = this;
        e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", function(t) {
            t.stopImmediatePropagation();
            var o = i(this);
            setTimeout(function() { e.options.pauseOnFocus && (e.focussed = o.is(":focus"), e.autoPlay()) }, 0)
        })
    }, e.prototype.getCurrent = e.prototype.slickCurrentSlide = function() { return this.currentSlide }, e.prototype.getDotCount = function() {
        var i = this,
            e = 0,
            t = 0,
            o = 0;
        if (!0 === i.options.infinite)
            if (i.slideCount <= i.options.slidesToShow) ++o;
            else
                for (; e < i.slideCount;) ++o, e = t + i.options.slidesToScroll, t += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow;
        else if (!0 === i.options.centerMode) o = i.slideCount;
        else if (i.options.asNavFor)
            for (; e < i.slideCount;) ++o, e = t + i.options.slidesToScroll, t += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow;
        else o = 1 + Math.ceil((i.slideCount - i.options.slidesToShow) / i.options.slidesToScroll);
        return o - 1
    }, e.prototype.getLeft = function(i) {
        var e, t, o, s, n = this,
            r = 0;
        return n.slideOffset = 0, t = n.$slides.first().outerHeight(!0), !0 === n.options.infinite ? (n.slideCount > n.options.slidesToShow && (n.slideOffset = n.slideWidth * n.options.slidesToShow * -1, s = -1, !0 === n.options.vertical && !0 === n.options.centerMode && (2 === n.options.slidesToShow ? s = -1.5 : 1 === n.options.slidesToShow && (s = -2)), r = t * n.options.slidesToShow * s), n.slideCount % n.options.slidesToScroll != 0 && i + n.options.slidesToScroll > n.slideCount && n.slideCount > n.options.slidesToShow && (i > n.slideCount ? (n.slideOffset = (n.options.slidesToShow - (i - n.slideCount)) * n.slideWidth * -1, r = (n.options.slidesToShow - (i - n.slideCount)) * t * -1) : (n.slideOffset = n.slideCount % n.options.slidesToScroll * n.slideWidth * -1, r = n.slideCount % n.options.slidesToScroll * t * -1))) : i + n.options.slidesToShow > n.slideCount && (n.slideOffset = (i + n.options.slidesToShow - n.slideCount) * n.slideWidth, r = (i + n.options.slidesToShow - n.slideCount) * t), n.slideCount <= n.options.slidesToShow && (n.slideOffset = 0, r = 0), !0 === n.options.centerMode && n.slideCount <= n.options.slidesToShow ? n.slideOffset = n.slideWidth * Math.floor(n.options.slidesToShow) / 2 - n.slideWidth * n.slideCount / 2 : !0 === n.options.centerMode && !0 === n.options.infinite ? n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2) - n.slideWidth : !0 === n.options.centerMode && (n.slideOffset = 0, n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2)), e = !1 === n.options.vertical ? i * n.slideWidth * -1 + n.slideOffset : i * t * -1 + r, !0 === n.options.variableWidth && (o = n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite ? n.$slideTrack.children(".slick-slide").eq(i) : n.$slideTrack.children(".slick-slide").eq(i + n.options.slidesToShow), e = !0 === n.options.rtl ? o[0] ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0, !0 === n.options.centerMode && (o = n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite ? n.$slideTrack.children(".slick-slide").eq(i) : n.$slideTrack.children(".slick-slide").eq(i + n.options.slidesToShow + 1), e = !0 === n.options.rtl ? o[0] ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0, e += (n.$list.width() - o.outerWidth()) / 2)), e
    }, e.prototype.getOption = e.prototype.slickGetOption = function(i) { return this.options[i] }, e.prototype.getNavigableIndexes = function() {
        var i, e = this,
            t = 0,
            o = 0,
            s = [];
        for (!1 === e.options.infinite ? i = e.slideCount : (t = -1 * e.options.slidesToScroll, o = -1 * e.options.slidesToScroll, i = 2 * e.slideCount); t < i;) s.push(t), t = o + e.options.slidesToScroll, o += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
        return s
    }, e.prototype.getSlick = function() { return this }, e.prototype.getSlideCount = function() { var e, t, o = this; return t = !0 === o.options.centerMode ? o.slideWidth * Math.floor(o.options.slidesToShow / 2) : 0, !0 === o.options.swipeToSlide ? (o.$slideTrack.find(".slick-slide").each(function(s, n) { if (n.offsetLeft - t + i(n).outerWidth() / 2 > -1 * o.swipeLeft) return e = n, !1 }), Math.abs(i(e).attr("data-slick-index") - o.currentSlide) || 1) : o.options.slidesToScroll }, e.prototype.goTo = e.prototype.slickGoTo = function(i, e) { this.changeSlide({ data: { message: "index", index: parseInt(i) } }, e) }, e.prototype.init = function(e) {
        var t = this;
        i(t.$slider).hasClass("slick-initialized") || (i(t.$slider).addClass("slick-initialized"), t.buildRows(), t.buildOut(), t.setProps(), t.startLoad(), t.loadSlider(), t.initializeEvents(), t.updateArrows(), t.updateDots(), t.checkResponsive(!0), t.focusHandler()), e && t.$slider.trigger("init", [t]), !0 === t.options.accessibility && t.initADA(), t.options.autoplay && (t.paused = !1, t.autoPlay())
    }, e.prototype.initADA = function() {
        var e = this,
            t = Math.ceil(e.slideCount / e.options.slidesToShow),
            o = e.getNavigableIndexes().filter(function(i) { return i >= 0 && i < e.slideCount });
        e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({ "aria-hidden": "true", tabindex: "-1" }).find("a, input, button, select").attr({ tabindex: "-1" }), null !== e.$dots && (e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function(t) {
            var s = o.indexOf(t);
            i(this).attr({ role: "tabpanel", id: "slick-slide" + e.instanceUid + t, tabindex: -1 }), -1 !== s && i(this).attr({ "aria-describedby": "slick-slide-control" + e.instanceUid + s })
        }), e.$dots.attr("role", "tablist").find("li").each(function(s) {
            var n = o[s];
            i(this).attr({ role: "presentation" }), i(this).find("button").first().attr({ role: "tab", id: "slick-slide-control" + e.instanceUid + s, "aria-controls": "slick-slide" + e.instanceUid + n, "aria-label": s + 1 + " of " + t, "aria-selected": null, tabindex: "-1" })
        }).eq(e.currentSlide).find("button").attr({ "aria-selected": "true", tabindex: "0" }).end());
        for (var s = e.currentSlide, n = s + e.options.slidesToShow; s < n; s++) e.$slides.eq(s).attr("tabindex", 0);
        e.activateADA()
    }, e.prototype.initArrowEvents = function() { var i = this;!0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.off("click.slick").on("click.slick", { message: "previous" }, i.changeSlide), i.$nextArrow.off("click.slick").on("click.slick", { message: "next" }, i.changeSlide), !0 === i.options.accessibility && (i.$prevArrow.on("keydown.slick", i.keyHandler), i.$nextArrow.on("keydown.slick", i.keyHandler))) }, e.prototype.initDotEvents = function() { var e = this;!0 === e.options.dots && (i("li", e.$dots).on("click.slick", { message: "index" }, e.changeSlide), !0 === e.options.accessibility && e.$dots.on("keydown.slick", e.keyHandler)), !0 === e.options.dots && !0 === e.options.pauseOnDotsHover && i("li", e.$dots).on("mouseenter.slick", i.proxy(e.interrupt, e, !0)).on("mouseleave.slick", i.proxy(e.interrupt, e, !1)) }, e.prototype.initSlideEvents = function() {
        var e = this;
        e.options.pauseOnHover && (e.$list.on("mouseenter.slick", i.proxy(e.interrupt, e, !0)), e.$list.on("mouseleave.slick", i.proxy(e.interrupt, e, !1)))
    }, e.prototype.initializeEvents = function() {
        var e = this;
        e.initArrowEvents(), e.initDotEvents(), e.initSlideEvents(), e.$list.on("touchstart.slick mousedown.slick", { action: "start" }, e.swipeHandler), e.$list.on("touchmove.slick mousemove.slick", { action: "move" }, e.swipeHandler), e.$list.on("touchend.slick mouseup.slick", { action: "end" }, e.swipeHandler), e.$list.on("touchcancel.slick mouseleave.slick", { action: "end" }, e.swipeHandler), e.$list.on("click.slick", e.clickHandler), i(document).on(e.visibilityChange, i.proxy(e.visibility, e)), !0 === e.options.accessibility && e.$list.on("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && i(e.$slideTrack).children().on("click.slick", e.selectHandler), i(window).on("orientationchange.slick.slick-" + e.instanceUid, i.proxy(e.orientationChange, e)), i(window).on("resize.slick.slick-" + e.instanceUid, i.proxy(e.resize, e)), i("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault), i(window).on("load.slick.slick-" + e.instanceUid, e.setPosition), i(e.setPosition)
    }, e.prototype.initUI = function() { var i = this;!0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.show(), i.$nextArrow.show()), !0 === i.options.dots && i.slideCount > i.options.slidesToShow && i.$dots.show() }, e.prototype.keyHandler = function(i) {
        var e = this;
        i.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === i.keyCode && !0 === e.options.accessibility ? e.changeSlide({ data: { message: !0 === e.options.rtl ? "next" : "previous" } }) : 39 === i.keyCode && !0 === e.options.accessibility && e.changeSlide({ data: { message: !0 === e.options.rtl ? "previous" : "next" } }))
    }, e.prototype.lazyLoad = function() {
        function e(e) {
            i("img[data-lazy]", e).each(function() {
                var e = i(this),
                    t = i(this).attr("data-lazy"),
                    o = i(this).attr("data-srcset"),
                    s = i(this).attr("data-sizes") || n.$slider.attr("data-sizes"),
                    r = document.createElement("img");
                r.onload = function() { e.animate({ opacity: 0 }, 100, function() { o && (e.attr("srcset", o), s && e.attr("sizes", s)), e.attr("src", t).animate({ opacity: 1 }, 200, function() { e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading") }), n.$slider.trigger("lazyLoaded", [n, e, t]) }) }, r.onerror = function() { e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), n.$slider.trigger("lazyLoadError", [n, e, t]) }, r.src = t
            })
        }
        var t, o, s, n = this;
        if (!0 === n.options.centerMode ? !0 === n.options.infinite ? s = (o = n.currentSlide + (n.options.slidesToShow / 2 + 1)) + n.options.slidesToShow + 2 : (o = Math.max(0, n.currentSlide - (n.options.slidesToShow / 2 + 1)), s = n.options.slidesToShow / 2 + 1 + 2 + n.currentSlide) : (o = n.options.infinite ? n.options.slidesToShow + n.currentSlide : n.currentSlide, s = Math.ceil(o + n.options.slidesToShow), !0 === n.options.fade && (o > 0 && o--, s <= n.slideCount && s++)), t = n.$slider.find(".slick-slide").slice(o, s), "anticipated" === n.options.lazyLoad)
            for (var r = o - 1, l = s, d = n.$slider.find(".slick-slide"), a = 0; a < n.options.slidesToScroll; a++) r < 0 && (r = n.slideCount - 1), t = (t = t.add(d.eq(r))).add(d.eq(l)), r--, l++;
        e(t), n.slideCount <= n.options.slidesToShow ? e(n.$slider.find(".slick-slide")) : n.currentSlide >= n.slideCount - n.options.slidesToShow ? e(n.$slider.find(".slick-cloned").slice(0, n.options.slidesToShow)) : 0 === n.currentSlide && e(n.$slider.find(".slick-cloned").slice(-1 * n.options.slidesToShow))
    }, e.prototype.loadSlider = function() {
        var i = this;
        i.setPosition(), i.$slideTrack.css({ opacity: 1 }), i.$slider.removeClass("slick-loading"), i.initUI(), "progressive" === i.options.lazyLoad && i.progressiveLazyLoad()
    }, e.prototype.next = e.prototype.slickNext = function() { this.changeSlide({ data: { message: "next" } }) }, e.prototype.orientationChange = function() {
        var i = this;
        i.checkResponsive(), i.setPosition()
    }, e.prototype.pause = e.prototype.slickPause = function() {
        var i = this;
        i.autoPlayClear(), i.paused = !0
    }, e.prototype.play = e.prototype.slickPlay = function() {
        var i = this;
        i.autoPlay(), i.options.autoplay = !0, i.paused = !1, i.focussed = !1, i.interrupted = !1
    }, e.prototype.postSlide = function(e) {
        var t = this;
        t.unslicked || (t.$slider.trigger("afterChange", [t, e]), t.animating = !1, t.slideCount > t.options.slidesToShow && t.setPosition(), t.swipeLeft = null, t.options.autoplay && t.autoPlay(), !0 === t.options.accessibility && (t.initADA(), t.options.focusOnChange && i(t.$slides.get(t.currentSlide)).attr("tabindex", 0).focus()))
    }, e.prototype.prev = e.prototype.slickPrev = function() { this.changeSlide({ data: { message: "previous" } }) }, e.prototype.preventDefault = function(i) { i.preventDefault() }, e.prototype.progressiveLazyLoad = function(e) {
        e = e || 1;
        var t, o, s, n, r, l = this,
            d = i("img[data-lazy]", l.$slider);
        d.length ? (t = d.first(), o = t.attr("data-lazy"), s = t.attr("data-srcset"), n = t.attr("data-sizes") || l.$slider.attr("data-sizes"), (r = document.createElement("img")).onload = function() { s && (t.attr("srcset", s), n && t.attr("sizes", n)), t.attr("src", o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"), !0 === l.options.adaptiveHeight && l.setPosition(), l.$slider.trigger("lazyLoaded", [l, t, o]), l.progressiveLazyLoad() }, r.onerror = function() { e < 3 ? setTimeout(function() { l.progressiveLazyLoad(e + 1) }, 500) : (t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), l.$slider.trigger("lazyLoadError", [l, t, o]), l.progressiveLazyLoad()) }, r.src = o) : l.$slider.trigger("allImagesLoaded", [l])
    }, e.prototype.refresh = function(e) {
        var t, o, s = this;
        o = s.slideCount - s.options.slidesToShow, !s.options.infinite && s.currentSlide > o && (s.currentSlide = o), s.slideCount <= s.options.slidesToShow && (s.currentSlide = 0), t = s.currentSlide, s.destroy(!0), i.extend(s, s.initials, { currentSlide: t }), s.init(), e || s.changeSlide({ data: { message: "index", index: t } }, !1)
    }, e.prototype.registerBreakpoints = function() {
        var e, t, o, s = this,
            n = s.options.responsive || null;
        if ("array" === i.type(n) && n.length) {
            s.respondTo = s.options.respondTo || "window";
            for (e in n)
                if (o = s.breakpoints.length - 1, n.hasOwnProperty(e)) {
                    for (t = n[e].breakpoint; o >= 0;) s.breakpoints[o] && s.breakpoints[o] === t && s.breakpoints.splice(o, 1), o--;
                    s.breakpoints.push(t), s.breakpointSettings[t] = n[e].settings
                }
            s.breakpoints.sort(function(i, e) { return s.options.mobileFirst ? i - e : e - i })
        }
    }, e.prototype.reinit = function() {
        var e = this;
        e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide"), e.slideCount = e.$slides.length, e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll), e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0), e.registerBreakpoints(), e.setProps(), e.setupInfinite(), e.buildArrows(), e.updateArrows(), e.initArrowEvents(), e.buildDots(), e.updateDots(), e.initDotEvents(), e.cleanUpSlideEvents(), e.initSlideEvents(), e.checkResponsive(!1, !0), !0 === e.options.focusOnSelect && i(e.$slideTrack).children().on("click.slick", e.selectHandler), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), e.setPosition(), e.focusHandler(), e.paused = !e.options.autoplay, e.autoPlay(), e.$slider.trigger("reInit", [e])
    }, e.prototype.resize = function() {
        var e = this;
        i(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay), e.windowDelay = window.setTimeout(function() { e.windowWidth = i(window).width(), e.checkResponsive(), e.unslicked || e.setPosition() }, 50))
    }, e.prototype.removeSlide = e.prototype.slickRemove = function(i, e, t) {
        var o = this;
        if (i = "boolean" == typeof i ? !0 === (e = i) ? 0 : o.slideCount - 1 : !0 === e ? --i : i, o.slideCount < 1 || i < 0 || i > o.slideCount - 1) return !1;
        o.unload(), !0 === t ? o.$slideTrack.children().remove() : o.$slideTrack.children(this.options.slide).eq(i).remove(), o.$slides = o.$slideTrack.children(this.options.slide), o.$slideTrack.children(this.options.slide).detach(), o.$slideTrack.append(o.$slides), o.$slidesCache = o.$slides, o.reinit()
    }, e.prototype.setCSS = function(i) {
        var e, t, o = this,
            s = {};
        !0 === o.options.rtl && (i = -i), e = "left" == o.positionProp ? Math.ceil(i) + "px" : "0px", t = "top" == o.positionProp ? Math.ceil(i) + "px" : "0px", s[o.positionProp] = i, !1 === o.transformsEnabled ? o.$slideTrack.css(s) : (s = {}, !1 === o.cssTransitions ? (s[o.animType] = "translate(" + e + ", " + t + ")", o.$slideTrack.css(s)) : (s[o.animType] = "translate3d(" + e + ", " + t + ", 0px)", o.$slideTrack.css(s)))
    }, e.prototype.setDimensions = function() { var i = this;!1 === i.options.vertical ? !0 === i.options.centerMode && i.$list.css({ padding: "0px " + i.options.centerPadding }) : (i.$list.height(i.$slides.first().outerHeight(!0) * i.options.slidesToShow), !0 === i.options.centerMode && i.$list.css({ padding: i.options.centerPadding + " 0px" })), i.listWidth = i.$list.width(), i.listHeight = i.$list.height(), !1 === i.options.vertical && !1 === i.options.variableWidth ? (i.slideWidth = Math.ceil(i.listWidth / i.options.slidesToShow), i.$slideTrack.width(Math.ceil(i.slideWidth * i.$slideTrack.children(".slick-slide").length))) : !0 === i.options.variableWidth ? i.$slideTrack.width(5e3 * i.slideCount) : (i.slideWidth = Math.ceil(i.listWidth), i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0) * i.$slideTrack.children(".slick-slide").length))); var e = i.$slides.first().outerWidth(!0) - i.$slides.first().width();!1 === i.options.variableWidth && i.$slideTrack.children(".slick-slide").width(i.slideWidth - e) }, e.prototype.setFade = function() {
        var e, t = this;
        t.$slides.each(function(o, s) { e = t.slideWidth * o * -1, !0 === t.options.rtl ? i(s).css({ position: "relative", right: e, top: 0, zIndex: t.options.zIndex - 2, opacity: 0 }) : i(s).css({ position: "relative", left: e, top: 0, zIndex: t.options.zIndex - 2, opacity: 0 }) }), t.$slides.eq(t.currentSlide).css({ zIndex: t.options.zIndex - 1, opacity: 1 })
    }, e.prototype.setHeight = function() {
        var i = this;
        if (1 === i.options.slidesToShow && !0 === i.options.adaptiveHeight && !1 === i.options.vertical) {
            var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
            i.$list.css("height", e)
        }
    }, e.prototype.setOption = e.prototype.slickSetOption = function() {
        var e, t, o, s, n, r = this,
            l = !1;
        if ("object" === i.type(arguments[0]) ? (o = arguments[0], l = arguments[1], n = "multiple") : "string" === i.type(arguments[0]) && (o = arguments[0], s = arguments[1], l = arguments[2], "responsive" === arguments[0] && "array" === i.type(arguments[1]) ? n = "responsive" : void 0 !== arguments[1] && (n = "single")), "single" === n) r.options[o] = s;
        else if ("multiple" === n) i.each(o, function(i, e) { r.options[i] = e });
        else if ("responsive" === n)
            for (t in s)
                if ("array" !== i.type(r.options.responsive)) r.options.responsive = [s[t]];
                else {
                    for (e = r.options.responsive.length - 1; e >= 0;) r.options.responsive[e].breakpoint === s[t].breakpoint && r.options.responsive.splice(e, 1), e--;
                    r.options.responsive.push(s[t])
                }
        l && (r.unload(), r.reinit())
    }, e.prototype.setPosition = function() {
        var i = this;
        i.setDimensions(), i.setHeight(), !1 === i.options.fade ? i.setCSS(i.getLeft(i.currentSlide)) : i.setFade(), i.$slider.trigger("setPosition", [i])
    }, e.prototype.setProps = function() {
        var i = this,
            e = document.body.style;
        i.positionProp = !0 === i.options.vertical ? "top" : "left", "top" === i.positionProp ? i.$slider.addClass("slick-vertical") : i.$slider.removeClass("slick-vertical"), void 0 === e.WebkitTransition && void 0 === e.MozTransition && void 0 === e.msTransition || !0 === i.options.useCSS && (i.cssTransitions = !0), i.options.fade && ("number" == typeof i.options.zIndex ? i.options.zIndex < 3 && (i.options.zIndex = 3) : i.options.zIndex = i.defaults.zIndex), void 0 !== e.OTransform && (i.animType = "OTransform", i.transformType = "-o-transform", i.transitionType = "OTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (i.animType = !1)), void 0 !== e.MozTransform && (i.animType = "MozTransform", i.transformType = "-moz-transform", i.transitionType = "MozTransition", void 0 === e.perspectiveProperty && void 0 === e.MozPerspective && (i.animType = !1)), void 0 !== e.webkitTransform && (i.animType = "webkitTransform", i.transformType = "-webkit-transform", i.transitionType = "webkitTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (i.animType = !1)), void 0 !== e.msTransform && (i.animType = "msTransform", i.transformType = "-ms-transform", i.transitionType = "msTransition", void 0 === e.msTransform && (i.animType = !1)), void 0 !== e.transform && !1 !== i.animType && (i.animType = "transform", i.transformType = "transform", i.transitionType = "transition"), i.transformsEnabled = i.options.useTransform && null !== i.animType && !1 !== i.animType
    }, e.prototype.setSlideClasses = function(i) {
        var e, t, o, s, n = this;
        if (t = n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), n.$slides.eq(i).addClass("slick-current"), !0 === n.options.centerMode) {
            var r = n.options.slidesToShow % 2 == 0 ? 1 : 0;
            e = Math.floor(n.options.slidesToShow / 2), !0 === n.options.infinite && (i >= e && i <= n.slideCount - 1 - e ? n.$slides.slice(i - e + r, i + e + 1).addClass("slick-active").attr("aria-hidden", "false") : (o = n.options.slidesToShow + i, t.slice(o - e + 1 + r, o + e + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === i ? t.eq(t.length - 1 - n.options.slidesToShow).addClass("slick-center") : i === n.slideCount - 1 && t.eq(n.options.slidesToShow).addClass("slick-center")), n.$slides.eq(i).addClass("slick-center")
        } else i >= 0 && i <= n.slideCount - n.options.slidesToShow ? n.$slides.slice(i, i + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : t.length <= n.options.slidesToShow ? t.addClass("slick-active").attr("aria-hidden", "false") : (s = n.slideCount % n.options.slidesToShow, o = !0 === n.options.infinite ? n.options.slidesToShow + i : i, n.options.slidesToShow == n.options.slidesToScroll && n.slideCount - i < n.options.slidesToShow ? t.slice(o - (n.options.slidesToShow - s), o + s).addClass("slick-active").attr("aria-hidden", "false") : t.slice(o, o + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"));
        "ondemand" !== n.options.lazyLoad && "anticipated" !== n.options.lazyLoad || n.lazyLoad()
    }, e.prototype.setupInfinite = function() {
        var e, t, o, s = this;
        if (!0 === s.options.fade && (s.options.centerMode = !1), !0 === s.options.infinite && !1 === s.options.fade && (t = null, s.slideCount > s.options.slidesToShow)) {
            for (o = !0 === s.options.centerMode ? s.options.slidesToShow + 1 : s.options.slidesToShow, e = s.slideCount; e > s.slideCount - o; e -= 1) t = e - 1, i(s.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t - s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");
            for (e = 0; e < o + s.slideCount; e += 1) t = e, i(s.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t + s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");
            s.$slideTrack.find(".slick-cloned").find("[id]").each(function() { i(this).attr("id", "") })
        }
    }, e.prototype.interrupt = function(i) {
        var e = this;
        i || e.autoPlay(), e.interrupted = i
    }, e.prototype.selectHandler = function(e) {
        var t = this,
            o = i(e.target).is(".slick-slide") ? i(e.target) : i(e.target).parents(".slick-slide"),
            s = parseInt(o.attr("data-slick-index"));
        s || (s = 0), t.slideCount <= t.options.slidesToShow ? t.slideHandler(s, !1, !0) : t.slideHandler(s)
    }, e.prototype.slideHandler = function(i, e, t) {
        var o, s, n, r, l, d = null,
            a = this;
        if (e = e || !1, !(!0 === a.animating && !0 === a.options.waitForAnimate || !0 === a.options.fade && a.currentSlide === i))
            if (!1 === e && a.asNavFor(i), o = i, d = a.getLeft(o), r = a.getLeft(a.currentSlide), a.currentLeft = null === a.swipeLeft ? r : a.swipeLeft, !1 === a.options.infinite && !1 === a.options.centerMode && (i < 0 || i > a.getDotCount() * a.options.slidesToScroll)) !1 === a.options.fade && (o = a.currentSlide, !0 !== t ? a.animateSlide(r, function() { a.postSlide(o) }) : a.postSlide(o));
            else if (!1 === a.options.infinite && !0 === a.options.centerMode && (i < 0 || i > a.slideCount - a.options.slidesToScroll)) !1 === a.options.fade && (o = a.currentSlide, !0 !== t ? a.animateSlide(r, function() { a.postSlide(o) }) : a.postSlide(o));
        else { if (a.options.autoplay && clearInterval(a.autoPlayTimer), s = o < 0 ? a.slideCount % a.options.slidesToScroll != 0 ? a.slideCount - a.slideCount % a.options.slidesToScroll : a.slideCount + o : o >= a.slideCount ? a.slideCount % a.options.slidesToScroll != 0 ? 0 : o - a.slideCount : o, a.animating = !0, a.$slider.trigger("beforeChange", [a, a.currentSlide, s]), n = a.currentSlide, a.currentSlide = s, a.setSlideClasses(a.currentSlide), a.options.asNavFor && (l = (l = a.getNavTarget()).slick("getSlick")).slideCount <= l.options.slidesToShow && l.setSlideClasses(a.currentSlide), a.updateDots(), a.updateArrows(), !0 === a.options.fade) return !0 !== t ? (a.fadeSlideOut(n), a.fadeSlide(s, function() { a.postSlide(s) })) : a.postSlide(s), void a.animateHeight();!0 !== t ? a.animateSlide(d, function() { a.postSlide(s) }) : a.postSlide(s) }
    }, e.prototype.startLoad = function() { var i = this;!0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.hide(), i.$nextArrow.hide()), !0 === i.options.dots && i.slideCount > i.options.slidesToShow && i.$dots.hide(), i.$slider.addClass("slick-loading") }, e.prototype.swipeDirection = function() { var i, e, t, o, s = this; return i = s.touchObject.startX - s.touchObject.curX, e = s.touchObject.startY - s.touchObject.curY, t = Math.atan2(e, i), (o = Math.round(180 * t / Math.PI)) < 0 && (o = 360 - Math.abs(o)), o <= 45 && o >= 0 ? !1 === s.options.rtl ? "left" : "right" : o <= 360 && o >= 315 ? !1 === s.options.rtl ? "left" : "right" : o >= 135 && o <= 225 ? !1 === s.options.rtl ? "right" : "left" : !0 === s.options.verticalSwiping ? o >= 35 && o <= 135 ? "down" : "up" : "vertical" }, e.prototype.swipeEnd = function(i) {
        var e, t, o = this;
        if (o.dragging = !1, o.swiping = !1, o.scrolling) return o.scrolling = !1, !1;
        if (o.interrupted = !1, o.shouldClick = !(o.touchObject.swipeLength > 10), void 0 === o.touchObject.curX) return !1;
        if (!0 === o.touchObject.edgeHit && o.$slider.trigger("edge", [o, o.swipeDirection()]), o.touchObject.swipeLength >= o.touchObject.minSwipe) {
            switch (t = o.swipeDirection()) {
                case "left":
                case "down":
                    e = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide + o.getSlideCount()) : o.currentSlide + o.getSlideCount(), o.currentDirection = 0;
                    break;
                case "right":
                case "up":
                    e = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide - o.getSlideCount()) : o.currentSlide - o.getSlideCount(), o.currentDirection = 1
            }
            "vertical" != t && (o.slideHandler(e), o.touchObject = {}, o.$slider.trigger("swipe", [o, t]))
        } else o.touchObject.startX !== o.touchObject.curX && (o.slideHandler(o.currentSlide), o.touchObject = {})
    }, e.prototype.swipeHandler = function(i) {
        var e = this;
        if (!(!1 === e.options.swipe || "ontouchend" in document && !1 === e.options.swipe || !1 === e.options.draggable && -1 !== i.type.indexOf("mouse"))) switch (e.touchObject.fingerCount = i.originalEvent && void 0 !== i.originalEvent.touches ? i.originalEvent.touches.length : 1, e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold, !0 === e.options.verticalSwiping && (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold), i.data.action) {
            case "start":
                e.swipeStart(i);
                break;
            case "move":
                e.swipeMove(i);
                break;
            case "end":
                e.swipeEnd(i)
        }
    }, e.prototype.swipeMove = function(i) { var e, t, o, s, n, r, l = this; return n = void 0 !== i.originalEvent ? i.originalEvent.touches : null, !(!l.dragging || l.scrolling || n && 1 !== n.length) && (e = l.getLeft(l.currentSlide), l.touchObject.curX = void 0 !== n ? n[0].pageX : i.clientX, l.touchObject.curY = void 0 !== n ? n[0].pageY : i.clientY, l.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(l.touchObject.curX - l.touchObject.startX, 2))), r = Math.round(Math.sqrt(Math.pow(l.touchObject.curY - l.touchObject.startY, 2))), !l.options.verticalSwiping && !l.swiping && r > 4 ? (l.scrolling = !0, !1) : (!0 === l.options.verticalSwiping && (l.touchObject.swipeLength = r), t = l.swipeDirection(), void 0 !== i.originalEvent && l.touchObject.swipeLength > 4 && (l.swiping = !0, i.preventDefault()), s = (!1 === l.options.rtl ? 1 : -1) * (l.touchObject.curX > l.touchObject.startX ? 1 : -1), !0 === l.options.verticalSwiping && (s = l.touchObject.curY > l.touchObject.startY ? 1 : -1), o = l.touchObject.swipeLength, l.touchObject.edgeHit = !1, !1 === l.options.infinite && (0 === l.currentSlide && "right" === t || l.currentSlide >= l.getDotCount() && "left" === t) && (o = l.touchObject.swipeLength * l.options.edgeFriction, l.touchObject.edgeHit = !0), !1 === l.options.vertical ? l.swipeLeft = e + o * s : l.swipeLeft = e + o * (l.$list.height() / l.listWidth) * s, !0 === l.options.verticalSwiping && (l.swipeLeft = e + o * s), !0 !== l.options.fade && !1 !== l.options.touchMove && (!0 === l.animating ? (l.swipeLeft = null, !1) : void l.setCSS(l.swipeLeft)))) }, e.prototype.swipeStart = function(i) {
        var e, t = this;
        if (t.interrupted = !0, 1 !== t.touchObject.fingerCount || t.slideCount <= t.options.slidesToShow) return t.touchObject = {}, !1;
        void 0 !== i.originalEvent && void 0 !== i.originalEvent.touches && (e = i.originalEvent.touches[0]), t.touchObject.startX = t.touchObject.curX = void 0 !== e ? e.pageX : i.clientX, t.touchObject.startY = t.touchObject.curY = void 0 !== e ? e.pageY : i.clientY, t.dragging = !0
    }, e.prototype.unfilterSlides = e.prototype.slickUnfilter = function() {
        var i = this;
        null !== i.$slidesCache && (i.unload(), i.$slideTrack.children(this.options.slide).detach(), i.$slidesCache.appendTo(i.$slideTrack), i.reinit())
    }, e.prototype.unload = function() {
        var e = this;
        i(".slick-cloned", e.$slider).remove(), e.$dots && e.$dots.remove(), e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(), e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(), e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
    }, e.prototype.unslick = function(i) {
        var e = this;
        e.$slider.trigger("unslick", [e, i]), e.destroy()
    }, e.prototype.updateArrows = function() {
        var i = this;
        Math.floor(i.options.slidesToShow / 2), !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && !i.options.infinite && (i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === i.currentSlide ? (i.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : i.currentSlide >= i.slideCount - i.options.slidesToShow && !1 === i.options.centerMode ? (i.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : i.currentSlide >= i.slideCount - 1 && !0 === i.options.centerMode && (i.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
    }, e.prototype.updateDots = function() {
        var i = this;
        null !== i.$dots && (i.$dots.find("li").removeClass("slick-active").end(), i.$dots.find("li").eq(Math.floor(i.currentSlide / i.options.slidesToScroll)).addClass("slick-active"))
    }, e.prototype.visibility = function() {
        var i = this;
        i.options.autoplay && (document[i.hidden] ? i.interrupted = !0 : i.interrupted = !1)
    }, i.fn.slick = function() {
        var i, t, o = this,
            s = arguments[0],
            n = Array.prototype.slice.call(arguments, 1),
            r = o.length;
        for (i = 0; i < r; i++)
            if ("object" == typeof s || void 0 === s ? o[i].slick = new e(o[i], s) : t = o[i].slick[s].apply(o[i].slick, n), void 0 !== t) return t;
        return o
    }
});

;
//# sourceMappingURL=scripts.js.map