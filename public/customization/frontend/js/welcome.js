//# sourceMappingURL=application.js.map
! function(a, l) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? l(a, !0) : function(a) {
        if (!a.document) throw Error("jQuery requires a window with a document");
        return l(a)
    } : l(a)
}("undefined" != typeof window ? window : this, function(a, l) {
    function h(a) {
        var b = !!a && "length" in a && a.length,
            c = m.type(a);
        return "function" === c || m.isWindow(a) ? !1 : "array" === c || 0 === b || "number" == typeof b && 0 < b && b - 1 in a
    }

    function e(a, b, c) {
        if (m.isFunction(b)) return m.grep(a, function(a, B) {
            return !!b.call(a, B, a) !==
                c
        });
        if (b.nodeType) return m.grep(a, function(a) {
            return a === b !== c
        });
        if ("string" == typeof b) {
            if (Fb.test(b)) return m.filter(b, a, c);
            b = m.filter(b, a)
        }
        return m.grep(a, function(a) {
            return -1 < m.inArray(a, b) !== c
        })
    }

    function f(a, b) {
        do a = a[b]; while (a && 1 !== a.nodeType);
        return a
    }

    function k(a) {
        var b = {};
        return m.each(a.match(ea) || [], function(a, B) {
            b[B] = !0
        }), b
    }

    function d() {
        z.addEventListener ? (z.removeEventListener("DOMContentLoaded", c), a.removeEventListener("load", c)) : (z.detachEvent("onreadystatechange", c), a.detachEvent("onload",
            c))
    }

    function c() {
        (z.addEventListener || "load" === a.event.type || "complete" === z.readyState) && (d(), m.ready())
    }

    function b(a, b, c) {
        if (void 0 === c && 1 === a.nodeType) {
            var g = "data-" + b.replace(Gb, "-$1").toLowerCase();
            if (c = a.getAttribute(g), "string" == typeof c) {
                try {
                    c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : Hb.test(c) ? m.parseJSON(c) : c
                } catch (d) {}
                m.data(a, b, c)
            } else c = void 0
        }
        return c
    }

    function g(a) {
        for (var b in a)
            if (("data" !== b || !m.isEmptyObject(a[b])) && "toJSON" !== b) return !1;
        return !0
    }

    function r(a, b, c,
               g) {
        if (Fa(a)) {
            var d, f, e = m.expando,
                k = a.nodeType,
                n = k ? m.cache : a,
                h = k ? a[e] : a[e] && e;
            if (h && n[h] && (g || n[h].data) || void 0 !== c || "string" != typeof b) return h || (h = k ? a[e] = da.pop() || m.guid++ : e), n[h] || (n[h] = k ? {} : {
                toJSON: m.noop
            }), ("object" == typeof b || "function" == typeof b) && (g ? n[h] = m.extend(n[h], b) : n[h].data = m.extend(n[h].data, b)), f = n[h], g || (f.data || (f.data = {}), f = f.data), void 0 !== c && (f[m.camelCase(b)] = c), "string" == typeof b ? (d = f[b], null == d && (d = f[m.camelCase(b)])) : d = f, d
        }
    }

    function t(a, b, c) {
        if (Fa(a)) {
            var d, f, e = a.nodeType,
                k = e ? m.cache : a,
                n = e ? a[m.expando] : m.expando;
            if (k[n]) {
                if (b && (d = c ? k[n] : k[n].data)) {
                    m.isArray(b) ? b = b.concat(m.map(b, m.camelCase)) : b in d ? b = [b] : (b = m.camelCase(b), b = b in d ? [b] : b.split(" "));
                    for (f = b.length; f--;) delete d[b[f]];
                    if (c ? !g(d) : !m.isEmptyObject(d)) return
                }(c || (delete k[n].data, g(k[n]))) && (e ? m.cleanData([a], !0) : A.deleteExpando || k != k.window ? delete k[n] : k[n] = void 0)
            }
        }
    }

    function q(a, b, c, g) {
        var d, f = 1,
            e = 20,
            k = g ? function() {
                return g.cur()
            } : function() {
                return m.css(a, b, "")
            },
            n = k(),
            h = c && c[3] || (m.cssNumber[b] ? "" :
                "px"),
            r = (m.cssNumber[b] || "px" !== h && +n) && Pa.exec(m.css(a, b));
        if (r && r[3] !== h) {
            h = h || r[3];
            c = c || [];
            r = +n || 1;
            do f = f || ".5", r /= f, m.style(a, b, r + h); while (f !== (f = k() / n) && 1 !== f && --e)
        }
        return c && (r = +r || +n || 0, d = c[1] ? r + (c[1] + 1) * c[2] : +c[2], g && (g.unit = h, g.start = r, g.end = d)), d
    }

    function p(a) {
        var b = "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video".split(" ");
        a = a.createDocumentFragment();
        if (a.createElement)
            for (; b.length;) a.createElement(b.pop());
        return a
    }

    function v(a, b) {
        var c, g, d = 0,
            f = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : void 0;
        if (!f)
            for (f = [], c = a.childNodes || a; null != (g = c[d]); d++) !b || m.nodeName(g, b) ? f.push(g) : m.merge(f, v(g, b));
        return void 0 === b || b && m.nodeName(a, b) ? m.merge([a], f) : f
    }

    function n(a, b) {
        for (var c, g = 0; null != (c = a[g]); g++) m._data(c, "globalEval", !b || m._data(b[g], "globalEval"))
    }

    function u(a) {
        Qa.test(a.type) && (a.defaultChecked = a.checked)
    }

    function y(a, b, c, g, d) {
        for (var f, e, k, h, r, t, q, l = a.length, y = p(b), x = [], D = 0; l > D; D++)
            if (e = a[D], e || 0 === e)
                if ("object" === m.type(e)) m.merge(x, e.nodeType ? [e] : e);
                else if (Jb.test(e)) {
                    h = h || y.appendChild(b.createElement("div"));
                    r = (hb.exec(e) || ["", ""])[1].toLowerCase();
                    q = ca[r] || ca._default;
                    h.innerHTML = q[1] + m.htmlPrefilter(e) + q[2];
                    for (f = q[0]; f--;) h = h.lastChild;
                    if (!A.leadingWhitespace && Ra.test(e) && x.push(b.createTextNode(Ra.exec(e)[0])), !A.tbody)
                        for (f = (e =
                            "table" !== r || ib.test(e) ? "<table>" !== q[1] || ib.test(e) ? 0 : h : h.firstChild) && e.childNodes.length; f--;) m.nodeName(t = e.childNodes[f], "tbody") && !t.childNodes.length && e.removeChild(t);
                    m.merge(x, h.childNodes);
                    for (h.textContent = ""; h.firstChild;) h.removeChild(h.firstChild);
                    h = y.lastChild
                } else x.push(b.createTextNode(e));
        h && y.removeChild(h);
        A.appendChecked || m.grep(v(x, "input"), u);
        for (D = 0; e = x[D++];)
            if (g && -1 < m.inArray(e, g)) d && d.push(e);
            else if (k = m.contains(e.ownerDocument, e), h = v(y.appendChild(e), "script"), k && n(h),
                c)
                for (f = 0; e = h[f++];) jb.test(e.type || "") && c.push(e);
        return y
    }

    function x() {
        return !0
    }

    function w() {
        return !1
    }

    function F() {
        try {
            return z.activeElement
        } catch (a) {}
    }

    function G(a, b, c, g, d, f) {
        var e, k;
        if ("object" == typeof b) {
            "string" != typeof c && (g = g || c, c = void 0);
            for (k in b) G(a, k, c, g, b[k], f);
            return a
        }
        if (null == g && null == d ? (d = c, g = c = void 0) : null == d && ("string" == typeof c ? (d = g, g = void 0) : (d = g, g = c, c = void 0)), !1 === d) d = w;
        else if (!d) return a;
        return 1 === f && (e = d, d = function(a) {
            return m().off(a), e.apply(this, arguments)
        }, d.guid =
            e.guid || (e.guid = m.guid++)), a.each(function() {
            m.event.add(this, b, d, g, c)
        })
    }

    function L(a, b) {
        return m.nodeName(a, "table") && m.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }

    function C(a) {
        return a.type = (null !== m.find.attr(a, "type")) + "/" + a.type, a
    }

    function M(a) {
        var b = Kb.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a
    }

    function K(a, b) {
        if (1 === b.nodeType && m.hasData(a)) {
            var c, g, d;
            g = m._data(a);
            a = m._data(b, g);
            var f = g.events;
            if (f)
                for (c in delete a.handle, a.events = {}, f)
                    for (g = 0, d = f[c].length; d > g; g++) m.event.add(b, c, f[c][g]);
            a.data && (a.data = m.extend({}, a.data))
        }
    }

    function E(a, b, c, g) {
        b = ta.apply([], b);
        var d, f, e, k, h = 0,
            n = a.length,
            r = n - 1,
            t = b[0],
            q = m.isFunction(t);
        if (q || 1 < n && "string" == typeof t && !A.checkClone && Lb.test(t)) return a.each(function(d) {
            var f = a.eq(d);
            q && (b[0] = t.call(this, d, f.html()));
            E(f, b, c, g)
        });
        if (n && (k = y(b, a[0].ownerDocument, !1, a, g), d = k.firstChild, 1 === k.childNodes.length && (k = d), d || g)) {
            e = m.map(v(k, "script"),
                C);
            for (f = e.length; n > h; h++) d = k, h !== r && (d = m.clone(d, !0, !0), f && m.merge(e, v(d, "script"))), c.call(a[h], d, h);
            if (f)
                for (k = e[e.length - 1].ownerDocument, m.map(e, M), h = 0; f > h; h++) d = e[h], jb.test(d.type || "") && !m._data(d, "globalEval") && m.contains(k, d) && (d.src ? m._evalUrl && m._evalUrl(d.src) : m.globalEval((d.text || d.textContent || d.innerHTML || "").replace(Mb, "")));
            k = d = null
        }
        return a
    }

    function N(a, b, c) {
        for (var g = b ? m.filter(b, a) : a, d = 0; null != (b = g[d]); d++) c || 1 !== b.nodeType || m.cleanData(v(b)), b.parentNode && (c && m.contains(b.ownerDocument,
            b) && n(v(b, "script")), b.parentNode.removeChild(b));
        return a
    }

    function J(a, b) {
        a = m(b.createElement(a)).appendTo(b.body);
        b = m.css(a[0], "display");
        return a.detach(), b
    }

    function Y(a) {
        var b = z,
            c = kb[a];
        return c || (c = J(a, b), "none" !== c && c || (Ga = (Ga || m("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = (Ga[0].contentWindow || Ga[0].contentDocument).document, b.write(), b.close(), c = J(a, b), Ga.detach()), kb[a] = c), c
    }

    function T(a, b) {
        return {
            get: function() {
                return a() ? void delete this.get : (this.get =
                    b).apply(this, arguments)
            }
        }
    }

    function fa(a) {
        if (a in lb) return a;
        for (var b = a.charAt(0).toUpperCase() + a.slice(1), c = mb.length; c--;)
            if (a = mb[c] + b, a in lb) return a
    }

    function W(a, b) {
        for (var c, g, d, f = [], e = 0, k = a.length; k > e; e++) g = a[e], g.style && (f[e] = m._data(g, "olddisplay"), c = g.style.display, b ? (f[e] || "none" !== c || (g.style.display = ""), "" === g.style.display && Ha(g) && (f[e] = m._data(g, "olddisplay", Y(g.nodeName)))) : (d = Ha(g), (c && "none" !== c || !d) && m._data(g, "olddisplay", d ? c : m.css(g, "display"))));
        for (e = 0; k > e; e++) g = a[e], g.style &&
        (b && "none" !== g.style.display && "" !== g.style.display || (g.style.display = b ? f[e] || "" : "none"));
        return a
    }

    function ba(a, b, c) {
        return (a = Nb.exec(b)) ? Math.max(0, a[1] - (c || 0)) + (a[2] || "px") : b
    }

    function S(a, b, c, g, d) {
        b = c === (g ? "border" : "content") ? 4 : "width" === b ? 1 : 0;
        for (var f = 0; 4 > b; b += 2) "margin" === c && (f += m.css(a, c + ua[b], !0, d)), g ? ("content" === c && (f -= m.css(a, "padding" + ua[b], !0, d)), "margin" !== c && (f -= m.css(a, "border" + ua[b] + "Width", !0, d))) : (f += m.css(a, "padding" + ua[b], !0, d), "padding" !== c && (f += m.css(a, "border" + ua[b] + "Width", !0, d)));
        return f
    }

    function P(b, c, g) {
        var d = !0,
            f = "width" === c ? b.offsetWidth : b.offsetHeight,
            e = va(b),
            k = A.boxSizing && "border-box" === m.css(b, "boxSizing", !1, e);
        if (z.msFullscreenElement && a.top !== a && b.getClientRects().length && (f = Math.round(100 * b.getBoundingClientRect()[c])), 0 >= f || null == f) {
            if (f = ga(b, c, e), (0 > f || null == f) && (f = b.style[c]), Ja.test(f)) return f;
            d = k && (A.boxSizingReliable() || f === b.style[c]);
            f = parseFloat(f) || 0
        }
        return f + S(b, c, g || (k ? "border" : "content"), d, e) + "px"
    }

    function O(a, b, c, g, d) {
        return new O.prototype.init(a,
            b, c, g, d)
    }

    function U() {
        return a.setTimeout(function() {
            Aa = void 0
        }), Aa = m.now()
    }

    function Z(a, b) {
        var c, g = {
                height: a
            },
            d = 0;
        for (b = b ? 1 : 0; 4 > d; d += 2 - b) c = ua[d], g["margin" + c] = g["padding" + c] = a;
        return b && (g.opacity = g.width = a), g
    }

    function V(a, b, c) {
        for (var g, d = (R.tweeners[b] || []).concat(R.tweeners["*"]), f = 0, e = d.length; e > f; f++)
            if (g = d[f].call(c, b, a)) return g
    }

    function na(a, b) {
        var c, g, d, f, e;
        for (c in a)
            if (g = m.camelCase(c), d = b[g], f = a[c], m.isArray(f) && (d = f[1], f = a[c] = f[0]), c !== g && (a[g] = f, delete a[c]), e = m.cssHooks[g], e && "expand" in
            e)
                for (c in f = e.expand(f), delete a[g], f) c in a || (a[c] = f[c], b[c] = d);
            else b[g] = d
    }

    function R(a, b, c) {
        var g, d = 0,
            f = R.prefilters.length,
            e = m.Deferred().always(function() {
                delete k.elem
            }),
            k = function() {
                if (g) return !1;
                for (var b = Aa || U(), b = Math.max(0, h.startTime + h.duration - b), c = 1 - (b / h.duration || 0), d = 0, f = h.tweens.length; f > d; d++) h.tweens[d].run(c);
                return e.notifyWith(a, [h, c, b]), 1 > c && f ? b : (e.resolveWith(a, [h]), !1)
            },
            h = e.promise({
                elem: a,
                props: m.extend({}, b),
                opts: m.extend(!0, {
                        specialEasing: {},
                        easing: m.easing._default
                    },
                    c),
                originalProperties: b,
                originalOptions: c,
                startTime: Aa || U(),
                duration: c.duration,
                tweens: [],
                createTween: function(b, c) {
                    b = m.Tween(a, h.opts, b, c, h.opts.specialEasing[b] || h.opts.easing);
                    return h.tweens.push(b), b
                },
                stop: function(b) {
                    var c = 0,
                        d = b ? h.tweens.length : 0;
                    if (g) return this;
                    for (g = !0; d > c; c++) h.tweens[c].run(1);
                    return b ? (e.notifyWith(a, [h, 1, 0]), e.resolveWith(a, [h, b])) : e.rejectWith(a, [h, b]), this
                }
            });
        c = h.props;
        for (na(c, h.opts.specialEasing); f > d; d++)
            if (b = R.prefilters[d].call(h, a, c, h.opts)) return m.isFunction(b.stop) &&
            (m._queueHooks(h.elem, h.opts.queue).stop = m.proxy(b.stop, b)), b;
        return m.map(c, V, h), m.isFunction(h.opts.start) && h.opts.start.call(a, h), m.fx.timer(m.extend(k, {
            elem: a,
            anim: h,
            queue: h.opts.queue
        })), h.progress(h.opts.progress).done(h.opts.done, h.opts.complete).fail(h.opts.fail).always(h.opts.always)
    }

    function I(a) {
        return m.attr(a, "class") || ""
    }

    function wa(a) {
        return function(b, c) {
            "string" != typeof b && (c = b, b = "*");
            var g = 0,
                d = b.toLowerCase().match(ea) || [];
            if (m.isFunction(c))
                for (; b = d[g++];) "+" === b.charAt(0) ? (b = b.slice(1) ||
                    "*", (a[b] = a[b] || []).unshift(c)) : (a[b] = a[b] || []).push(c)
        }
    }

    function D(a, b, c, g) {
        function d(k) {
            var h;
            return f[k] = !0, m.each(a[k] || [], function(a, B) {
                a = B(b, c, g);
                return "string" != typeof a || e || f[a] ? e ? !(h = a) : void 0 : (b.dataTypes.unshift(a), d(a), !1)
            }), h
        }
        var f = {},
            e = a === Sa;
        return d(b.dataTypes[0]) || !f["*"] && d("*")
    }

    function H(a, b) {
        var c, g, d = m.ajaxSettings.flatOptions || {};
        for (g in b) void 0 !== b[g] && ((d[g] ? a : c || (c = {}))[g] = b[g]);
        return c && m.extend(!0, a, c), a
    }

    function Q(a, b, c, g) {
        var d;
        if (m.isArray(b)) m.each(b, function(b,
                                             d) {
            c || Ob.test(a) ? g(a, d) : Q(a + "[" + ("object" == typeof d && null != d ? b : "") + "]", d, c, g)
        });
        else if (c || "object" !== m.type(b)) g(a, b);
        else
            for (d in b) Q(a + "[" + d + "]", b[d], c, g)
    }

    function X() {
        try {
            return new a.XMLHttpRequest
        } catch (b) {}
    }

    function xa() {
        try {
            return new a.ActiveXObject("Microsoft.XMLHTTP")
        } catch (b) {}
    }

    function ma(a) {
        return m.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1
    }
    var da = [],
        z = a.document,
        ha = da.slice,
        ta = da.concat,
        Ia = da.push,
        ja = da.indexOf,
        ia = {},
        Ta = ia.toString,
        sa = ia.hasOwnProperty,
        A = {},
        m = function(a,
                     b) {
            return new m.fn.init(a, b)
        },
        Ua = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        ya = /^-ms-/,
        Pb = /-([\da-z])/gi,
        Va = function(a, b) {
            return b.toUpperCase()
        };
    m.fn = m.prototype = {
        jquery: "1.12.0",
        constructor: m,
        selector: "",
        length: 0,
        toArray: function() {
            return ha.call(this)
        },
        get: function(a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : ha.call(this)
        },
        pushStack: function(a) {
            a = m.merge(this.constructor(), a);
            return a.prevObject = this, a.context = this.context, a
        },
        each: function(a) {
            return m.each(this, a)
        },
        map: function(a) {
            return this.pushStack(m.map(this,
                function(b, c) {
                    return a.call(b, c, b)
                }))
        },
        slice: function() {
            return this.pushStack(ha.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(a) {
            var b = this.length;
            a = +a + (0 > a ? b : 0);
            return this.pushStack(0 <= a && b > a ? [this[a]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: Ia,
        sort: da.sort,
        splice: da.splice
    };
    m.extend = m.fn.extend = function() {
        var a, b, c, g, d, f, e = arguments[0] || {},
            k = 1,
            h = arguments.length,
            n = !1;
        "boolean" == typeof e && (n = e, e = arguments[k] || {}, k++);
        "object" == typeof e || m.isFunction(e) || (e = {});
        for (k === h && (e = this, k--); h > k; k++)
            if (null != (d = arguments[k]))
                for (g in d) a = e[g], c = d[g], e !== c && (n && c && (m.isPlainObject(c) || (b = m.isArray(c))) ? (b ? (b = !1, f = a && m.isArray(a) ? a : []) : f = a && m.isPlainObject(a) ? a : {}, e[g] = m.extend(n, f, c)) : void 0 !== c && (e[g] = c));
        return e
    };
    m.extend({
        expando: "jQuery" + ("1.12.0" + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(a) {
            throw Error(a);
        },
        noop: function() {},
        isFunction: function(a) {
            return "function" === m.type(a)
        },
        isArray: Array.isArray ||
            function(a) {
                return "array" === m.type(a)
            },
        isWindow: function(a) {
            return null != a && a == a.window
        },
        isNumeric: function(a) {
            var b = a && a.toString();
            return !m.isArray(a) && 0 <= b - parseFloat(b) + 1
        },
        isEmptyObject: function(a) {
            for (var b in a) return !1;
            return !0
        },
        isPlainObject: function(a) {
            var b;
            if (!a || "object" !== m.type(a) || a.nodeType || m.isWindow(a)) return !1;
            try {
                if (a.constructor && !sa.call(a, "constructor") && !sa.call(a.constructor.prototype, "isPrototypeOf")) return !1
            } catch (c) {
                return !1
            }
            if (!A.ownFirst)
                for (b in a) return sa.call(a,
                    b);
            for (b in a);
            return void 0 === b || sa.call(a, b)
        },
        type: function(a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? ia[Ta.call(a)] || "object" : typeof a
        },
        globalEval: function(b) {
            b && m.trim(b) && (a.execScript || function(b) {
                a.eval.call(a, b)
            })(b)
        },
        camelCase: function(a) {
            return a.replace(ya, "ms-").replace(Pb, Va)
        },
        nodeName: function(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        },
        each: function(a, b) {
            var c, g = 0;
            if (h(a))
                for (c = a.length; c > g && !1 !== b.call(a[g], g, a[g]); g++);
            else
                for (g in a)
                    if (!1 ===
                        b.call(a[g], g, a[g])) break;
            return a
        },
        trim: function(a) {
            return null == a ? "" : (a + "").replace(Ua, "")
        },
        makeArray: function(a, b) {
            b = b || [];
            return null != a && (h(Object(a)) ? m.merge(b, "string" == typeof a ? [a] : a) : Ia.call(b, a)), b
        },
        inArray: function(a, b, c) {
            var g;
            if (b) {
                if (ja) return ja.call(b, a, c);
                g = b.length;
                for (c = c ? 0 > c ? Math.max(0, g + c) : c : 0; g > c; c++)
                    if (c in b && b[c] === a) return c
            }
            return -1
        },
        merge: function(a, b) {
            for (var c = +b.length, g = 0, d = a.length; c > g;) a[d++] = b[g++];
            if (c !== c)
                for (; void 0 !== b[g];) a[d++] = b[g++];
            return a.length = d, a
        },
        grep: function(a, b, c) {
            for (var g = [], d = 0, f = a.length, e = !c; f > d; d++) c = !b(a[d], d), c !== e && g.push(a[d]);
            return g
        },
        map: function(a, b, c) {
            var g, d, f = 0,
                e = [];
            if (h(a))
                for (g = a.length; g > f; f++) d = b(a[f], f, c), null != d && e.push(d);
            else
                for (f in a) d = b(a[f], f, c), null != d && e.push(d);
            return ta.apply([], e)
        },
        guid: 1,
        proxy: function(a, b) {
            var c, g, d;
            return "string" == typeof b && (d = a[b], b = a, a = d), m.isFunction(a) ? (c = ha.call(arguments, 2), g = function() {
                return a.apply(b || this, c.concat(ha.call(arguments)))
            }, g.guid = a.guid = a.guid || m.guid++, g) : void 0
        },
        now: function() {
            return +new Date
        },
        support: A
    });
    "function" == typeof Symbol && (m.fn[Symbol.iterator] = da[Symbol.iterator]);
    m.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(a, b) {
        ia["[object " + b + "]"] = b.toLowerCase()
    });
    var Ba = function(a) {
        function b(a, c, g, d) {
            var f, e, B, k, h, n = c && c.ownerDocument,
                m = c ? c.nodeType : 9;
            if (g = g || [], "string" != typeof a || !a || 1 !== m && 9 !== m && 11 !== m) return g;
            if (!d && ((c ? c.ownerDocument || c : A) !== I && S(c), c = c || I, N)) {
                if (11 !== m && (k = la.exec(a)))
                    if (f = k[1])
                        if (9 ===
                            m) {
                            if (!(e = c.getElementById(f))) return g;
                            if (e.id === f) return g.push(e), g
                        } else {
                            if (n && (e = n.getElementById(f)) && Y(c, e) && e.id === f) return g.push(e), g
                        }
                    else {
                        if (k[2]) return ja.apply(g, c.getElementsByTagName(a)), g;
                        if ((f = k[3]) && D.getElementsByClassName && c.getElementsByClassName) return ja.apply(g, c.getElementsByClassName(f)), g
                    }
                if (!(!D.qsa || M[a + " "] || J && J.test(a))) {
                    if (1 !== m) n = c, h = a;
                    else if ("object" !== c.nodeName.toLowerCase()) {
                        (B = c.getAttribute("id")) ? B = B.replace(Va, "\\$&"): c.setAttribute("id", B = z);
                        k = E(a);
                        f = k.length;
                        for (e = ta.test(B) ? "#" + B : "[id='" + B + "']"; f--;) k[f] = e + " " + t(k[f]);
                        h = k.join(",");
                        n = ga.test(a) && r(c.parentNode) || c
                    }
                    if (h) try {
                        return ja.apply(g, n.querySelectorAll(h)), g
                    } catch (qa) {} finally {
                        B === z && c.removeAttribute("id")
                    }
                }
            }
            return L(a.replace(V, "$1"), c, g, d)
        }

        function c() {
            function a(c, g) {
                return b.push(c + " ") > H.cacheLength && delete a[b.shift()], a[c + " "] = g
            }
            var b = [];
            return a
        }

        function g(a) {
            return a[z] = !0, a
        }

        function d(a) {
            var b = I.createElement("div");
            try {
                return !!a(b)
            } catch (c) {
                return !1
            } finally {
                b.parentNode && b.parentNode.removeChild(b)
            }
        }

        function f(a, b) {
            a = a.split("|");
            for (var c = a.length; c--;) H.attrHandle[a[c]] = b
        }

        function e(a, b) {
            var c = b && a,
                g = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || -2147483648) - (~a.sourceIndex || -2147483648);
            if (g) return g;
            if (c)
                for (; c = c.nextSibling;)
                    if (c === b) return -1;
            return a ? 1 : -1
        }

        function k(a) {
            return function(b) {
                return "input" === b.nodeName.toLowerCase() && b.type === a
            }
        }

        function h(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }

        function n(a) {
            return g(function(b) {
                return b = +b, g(function(c, g) {
                    for (var d, f = a([], c.length, b), e = f.length; e--;) c[d = f[e]] && (c[d] = !(g[d] = c[d]))
                })
            })
        }

        function r(a) {
            return a && "undefined" != typeof a.getElementsByTagName && a
        }

        function m() {}

        function t(a) {
            for (var b = 0, c = a.length, g = ""; c > b; b++) g += a[b].value;
            return g
        }

        function q(a, b, c) {
            var g = b.dir,
                d = c && "parentNode" === g,
                f = xa++;
            return b.first ? function(b, c, f) {
                for (; b = b[g];)
                    if (1 === b.nodeType || d) return a(b, c, f)
            } : function(b, c, e) {
                var B, k, h, n = [T, f];
                if (e)
                    for (; b = b[g];) {
                        if ((1 === b.nodeType || d) && a(b, c, e)) return !0
                    } else
                    for (; b =
                               b[g];)
                        if (1 === b.nodeType || d) {
                            if (h = b[z] || (b[z] = {}), k = h[b.uniqueID] || (h[b.uniqueID] = {}), (B = k[g]) && B[0] === T && B[1] === f) return n[2] = B[2];
                            if (k[g] = n, n[2] = a(b, c, e)) return !0
                        }
            }
        }

        function l(a) {
            return 1 < a.length ? function(b, c, g) {
                for (var d = a.length; d--;)
                    if (!a[d](b, c, g)) return !1;
                return !0
            } : a[0]
        }

        function u(a, b, c, g, d) {
            for (var f, e = [], B = 0, k = a.length, h = null != b; k > B; B++)(f = a[B]) && (!c || c(f, g, d)) && (e.push(f), h && b.push(B));
            return e
        }

        function p(a, c, d, f, e, B) {
            return f && !f[z] && (f = p(f)), e && !e[z] && (e = p(e, B)), g(function(g, B, k, h) {
                var n,
                    r, m = [],
                    t = [],
                    q = B.length,
                    aa;
                if (!(aa = g)) {
                    aa = c || "*";
                    for (var l = k.nodeType ? [k] : k, p = [], ra = 0, v = l.length; v > ra; ra++) b(aa, l[ra], p);
                    aa = p
                }
                aa = !a || !g && c ? aa : u(aa, m, a, k, h);
                l = d ? e || (g ? a : q || f) ? [] : B : aa;
                if (d && d(aa, l, k, h), f)
                    for (n = u(l, t), f(n, [], k, h), k = n.length; k--;)(r = n[k]) && (l[t[k]] = !(aa[t[k]] = r));
                if (g) {
                    if (e || a) {
                        if (e) {
                            n = [];
                            for (k = l.length; k--;)(r = l[k]) && n.push(aa[k] = r);
                            e(null, l = [], n, h)
                        }
                        for (k = l.length; k--;)(r = l[k]) && -1 < (n = e ? ia(g, r) : m[k]) && (g[n] = !(B[n] = r))
                    }
                } else l = u(l === B ? l.splice(q, l.length) : l), e ? e(null, B, l, h) : ja.apply(B,
                    l)
            })
        }

        function v(a) {
            var b, c, g, d = a.length,
                f = H.relative[a[0].type];
            c = f || H.relative[" "];
            for (var e = f ? 1 : 0, B = q(function(a) {
                return a === b
            }, c, !0), k = q(function(a) {
                return -1 < ia(b, a)
            }, c, !0), h = [function(a, c, g) {
                a = !f && (g || c !== Q) || ((b = c).nodeType ? B(a, c, g) : k(a, c, g));
                return b = null, a
            }]; d > e; e++)
                if (c = H.relative[a[e].type]) h = [q(l(h), c)];
                else {
                    if (c = H.filter[a[e].type].apply(null, a[e].matches), c[z]) {
                        for (g = ++e; d > g && !H.relative[a[g].type]; g++);
                        return p(1 < e && l(h), 1 < e && t(a.slice(0, e - 1).concat({
                            value: " " === a[e - 2].type ? "*" : ""
                        })).replace(V,
                            "$1"), c, g > e && v(a.slice(e, g)), d > g && v(a = a.slice(g)), d > g && t(a))
                    }
                    h.push(c)
                }
            return l(h)
        }

        function y(a, c) {
            var d = 0 < c.length,
                f = 0 < a.length,
                e = function(g, e, B, k, h) {
                    var n, r, m, t = 0,
                        q = "0",
                        aa = g && [],
                        l = [],
                        p = Q,
                        ra = g || f && H.find.TAG("*", h),
                        v = T += null == p ? 1 : Math.random() || .1,
                        Eb = ra.length;
                    for (h && (Q = e === I || e || h); q !== Eb && null != (n = ra[q]); q++) {
                        if (f && n) {
                            r = 0;
                            for (e || n.ownerDocument === I || (S(n), B = !N); m = a[r++];)
                                if (m(n, e || I, B)) {
                                    k.push(n);
                                    break
                                }
                            h && (T = v)
                        }
                        d && ((n = !m && n) && t--, g && aa.push(n))
                    }
                    if (t += q, d && q !== t) {
                        for (r = 0; m = c[r++];) m(aa, l, e, B);
                        if (g) {
                            if (0 <
                                t)
                                for (; q--;) aa[q] || l[q] || (l[q] = fa.call(k));
                            l = u(l)
                        }
                        ja.apply(k, l);
                        h && !g && 0 < l.length && 1 < t + c.length && b.uniqueSort(k)
                    }
                    return h && (T = v, Q = p), aa
                };
            return d ? g(e) : e
        }
        var x, D, H, w, G, E, F, L, Q, R, X, S, I, C, N, J, W, U, Y, z = "sizzle" + 1 * new Date,
            A = a.document,
            T = 0,
            xa = 0,
            wa = c(),
            O = c(),
            M = c(),
            P = function(a, b) {
                return a === b && (X = !0), 0
            },
            K = {}.hasOwnProperty,
            ma = [],
            fa = ma.pop,
            da = ma.push,
            ja = ma.push,
            ba = ma.slice,
            ia = function(a, b) {
                for (var c = 0, g = a.length; g > c; c++)
                    if (a[c] === b) return c;
                return -1
            },
            Z = /[\x20\t\r\n\f]+/g,
            V = /^[\x20\t\r\n\f]+|((?:^|[^\\])(?:\\.)*)[\x20\t\r\n\f]+$/g,
            ha = /^[\x20\t\r\n\f]*,[\x20\t\r\n\f]*/,
            sa = /^[\x20\t\r\n\f]*([>+~]|[\x20\t\r\n\f])[\x20\t\r\n\f]*/,
            Ta = /=[\x20\t\r\n\f]*([^\]'"]*?)[\x20\t\r\n\f]*\]/g,
            na = /:((?:\\.|[\w-]|[^\x00-\xa0])+)(?:\((('((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)")|((?:\\.|[^\\()[\]]|\[[\x20\t\r\n\f]*((?:\\.|[\w-]|[^\x00-\xa0])+)(?:[\x20\t\r\n\f]*([*^$|!~]?=)[\x20\t\r\n\f]*(?:'((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)"|((?:\\.|[\w-]|[^\x00-\xa0])+))|)[\x20\t\r\n\f]*\])*)|.*)\)|)/,
            ta = /^(?:\\.|[\w-]|[^\x00-\xa0])+$/,
            ca = {
                ID: /^#((?:\\.|[\w-]|[^\x00-\xa0])+)/,
                CLASS: /^\.((?:\\.|[\w-]|[^\x00-\xa0])+)/,
                TAG: /^((?:\\.|[\w-]|[^\x00-\xa0])+|[*])/,
                ATTR: /^\[[\x20\t\r\n\f]*((?:\\.|[\w-]|[^\x00-\xa0])+)(?:[\x20\t\r\n\f]*([*^$|!~]?=)[\x20\t\r\n\f]*(?:'((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)"|((?:\\.|[\w-]|[^\x00-\xa0])+))|)[\x20\t\r\n\f]*\]/,
                PSEUDO: /^:((?:\\.|[\w-]|[^\x00-\xa0])+)(?:\((('((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)")|((?:\\.|[^\\()[\]]|\[[\x20\t\r\n\f]*((?:\\.|[\w-]|[^\x00-\xa0])+)(?:[\x20\t\r\n\f]*([*^$|!~]?=)[\x20\t\r\n\f]*(?:'((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)"|((?:\\.|[\w-]|[^\x00-\xa0])+))|)[\x20\t\r\n\f]*\])*)|.*)\)|)/,
                CHILD: /^:(only|first|last|nth|nth-last)-(child|of-type)(?:\([\x20\t\r\n\f]*(even|odd|(([+-]|)(\d*)n|)[\x20\t\r\n\f]*(?:([+-]|)[\x20\t\r\n\f]*(\d+)|))[\x20\t\r\n\f]*\)|)/i,
                bool: /^(?:checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)$/i,
                needsContext: /^[\x20\t\r\n\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\([\x20\t\r\n\f]*((?:-\d)?\d*)[\x20\t\r\n\f]*\)|)(?=[^-]|$)/i
            },
            Ua = /^(?:input|select|textarea|button)$/i,
            ea = /^h\d$/i,
            ya =
                /^[^{]+\{\s*\[native \w/,
            la = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ga = /[+~]/,
            Va = /'|\\/g,
            oa = /\\([\da-f]{1,6}[\x20\t\r\n\f]?|([\x20\t\r\n\f])|.)/ig,
            pa = function(a, b, c) {
                a = "0x" + b - 65536;
                return a !== a || c ? b : 0 > a ? String.fromCharCode(a + 65536) : String.fromCharCode(a >> 10 | 55296, 1023 & a | 56320)
            },
            ka = function() {
                S()
            };
        try {
            ja.apply(ma = ba.call(A.childNodes), A.childNodes), ma[A.childNodes.length].nodeType
        } catch (tc) {
            ja = {
                apply: ma.length ? function(a, b) {
                    da.apply(a, ba.call(b))
                } : function(a, b) {
                    for (var c = a.length, g = 0; a[c++] = b[g++];);
                    a.length =
                        c - 1
                }
            }
        }
        D = b.support = {};
        G = b.isXML = function(a) {
            return (a = a && (a.ownerDocument || a).documentElement) ? "HTML" !== a.nodeName : !1
        };
        S = b.setDocument = function(a) {
            var b, c;
            a = a ? a.ownerDocument || a : A;
            return a !== I && 9 === a.nodeType && a.documentElement ? (I = a, C = I.documentElement, N = !G(I), (c = I.defaultView) && c.top !== c && (c.addEventListener ? c.addEventListener("unload", ka, !1) : c.attachEvent && c.attachEvent("onunload", ka)), D.attributes = d(function(a) {
                return a.className = "i", !a.getAttribute("className")
            }), D.getElementsByTagName = d(function(a) {
                return a.appendChild(I.createComment("")), !a.getElementsByTagName("*").length
            }), D.getElementsByClassName = ya.test(I.getElementsByClassName), D.getById = d(function(a) {
                return C.appendChild(a).id = z, !I.getElementsByName || !I.getElementsByName(z).length
            }), D.getById ? (H.find.ID = function(a, b) {
                if ("undefined" != typeof b.getElementById && N) return (a = b.getElementById(a)) ? [a] : []
            }, H.filter.ID = function(a) {
                var b = a.replace(oa, pa);
                return function(a) {
                    return a.getAttribute("id") === b
                }
            }) : (delete H.find.ID, H.filter.ID = function(a) {
                var b = a.replace(oa, pa);
                return function(a) {
                    return (a =
                        "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id")) && a.value === b
                }
            }), H.find.TAG = D.getElementsByTagName ? function(a, b) {
                return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : D.qsa ? b.querySelectorAll(a) : void 0
            } : function(a, b) {
                var c = [],
                    g = 0;
                b = b.getElementsByTagName(a);
                if ("*" === a) {
                    for (; a = b[g++];) 1 === a.nodeType && c.push(a);
                    return c
                }
                return b
            }, H.find.CLASS = D.getElementsByClassName && function(a, b) {
                return "undefined" != typeof b.getElementsByClassName && N ? b.getElementsByClassName(a) :
                    void 0
            }, W = [], J = [], (D.qsa = ya.test(I.querySelectorAll)) && (d(function(a) {
                C.appendChild(a).innerHTML = "<a id='" + z + "'></a><select id='" + z + "-\r\\' msallowcapture=''><option selected=''></option></select>";
                a.querySelectorAll("[msallowcapture^='']").length && J.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:''|\"\")");
                a.querySelectorAll("[selected]").length || J.push("\\[[\\x20\\t\\r\\n\\f]*(?:value|checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)");
                a.querySelectorAll("[id~=" + z + "-]").length || J.push("~=");
                a.querySelectorAll(":checked").length || J.push(":checked");
                a.querySelectorAll("a#" + z + "+*").length || J.push(".#.+[+~]")
            }), d(function(a) {
                var b = I.createElement("input");
                b.setAttribute("type", "hidden");
                a.appendChild(b).setAttribute("name", "D");
                a.querySelectorAll("[name=d]").length && J.push("name[\\x20\\t\\r\\n\\f]*[*^$|!~]?=");
                a.querySelectorAll(":enabled").length || J.push(":enabled", ":disabled");
                a.querySelectorAll("*,:x");
                J.push(",.*:")
            })), (D.matchesSelector =
                ya.test(U = C.matches || C.webkitMatchesSelector || C.mozMatchesSelector || C.oMatchesSelector || C.msMatchesSelector)) && d(function(a) {
                D.disconnectedMatch = U.call(a, "div");
                U.call(a, "[s!='']:x");
                W.push("!=", ":((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+)(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+)(?:[\\x20\\t\\r\\n\\f]*([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+))|)[\\x20\\t\\r\\n\\f]*\\])*)|.*)\\)|)")
            }),
                J = J.length && new RegExp(J.join("|")), W = W.length && new RegExp(W.join("|")), b = ya.test(C.compareDocumentPosition), Y = b || ya.test(C.contains) ? function(a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a;
                b = b && b.parentNode;
                return a === b || !(!b || 1 !== b.nodeType || !(c.contains ? c.contains(b) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(b)))
            } : function(a, b) {
                if (b)
                    for (; b = b.parentNode;)
                        if (b === a) return !0;
                return !1
            }, P = b ? function(a, b) {
                if (a === b) return X = !0, 0;
                var c = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return c ? c : (c = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & c || !D.sortDetached && b.compareDocumentPosition(a) === c ? a === I || a.ownerDocument === A && Y(A, a) ? -1 : b === I || b.ownerDocument === A && Y(A, b) ? 1 : R ? ia(R, a) - ia(R, b) : 0 : 4 & c ? -1 : 1)
            } : function(a, b) {
                if (a === b) return X = !0, 0;
                var c = 0,
                    g = a.parentNode,
                    d = b.parentNode,
                    f = [a],
                    B = [b];
                if (!g || !d) return a === I ? -1 : b === I ? 1 : g ? -1 : d ? 1 : R ? ia(R, a) - ia(R, b) : 0;
                if (g === d) return e(a, b);
                for (; a = a.parentNode;) f.unshift(a);
                for (a = b; a = a.parentNode;) B.unshift(a);
                for (; f[c] ===
                       B[c];) c++;
                return c ? e(f[c], B[c]) : f[c] === A ? -1 : B[c] === A ? 1 : 0
            }, I) : I
        };
        b.matches = function(a, c) {
            return b(a, null, null, c)
        };
        b.matchesSelector = function(a, c) {
            if ((a.ownerDocument || a) !== I && S(a), c = c.replace(Ta, "='$1']"), !(!D.matchesSelector || !N || M[c + " "] || W && W.test(c) || J && J.test(c))) try {
                var g = U.call(a, c);
                if (g || D.disconnectedMatch || a.document && 11 !== a.document.nodeType) return g
            } catch (d) {}
            return 0 < b(c, I, null, [a]).length
        };
        b.contains = function(a, b) {
            return (a.ownerDocument || a) !== I && S(a), Y(a, b)
        };
        b.attr = function(a, b) {
            (a.ownerDocument ||
                a) !== I && S(a);
            var c = H.attrHandle[b.toLowerCase()],
                c = c && K.call(H.attrHandle, b.toLowerCase()) ? c(a, b, !N) : void 0;
            return void 0 !== c ? c : D.attributes || !N ? a.getAttribute(b) : (c = a.getAttributeNode(b)) && c.specified ? c.value : null
        };
        b.error = function(a) {
            throw Error("Syntax error, unrecognized expression: " + a);
        };
        b.uniqueSort = function(a) {
            var b, c = [],
                g = 0,
                d = 0;
            if (X = !D.detectDuplicates, R = !D.sortStable && a.slice(0), a.sort(P), X) {
                for (; b = a[d++];) b === a[d] && (g = c.push(d));
                for (; g--;) a.splice(c[g], 1)
            }
            return R = null, a
        };
        w = b.getText = function(a) {
            var b,
                c = "",
                g = 0;
            if (b = a.nodeType)
                if (1 === b || 9 === b || 11 === b) {
                    if ("string" == typeof a.textContent) return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling) c += w(a)
                } else {
                    if (3 === b || 4 === b) return a.nodeValue
                }
            else
                for (; b = a[g++];) c += w(b);
            return c
        };
        H = b.selectors = {
            cacheLength: 50,
            createPseudo: g,
            match: ca,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(a) {
                    return a[1] = a[1].replace(oa, pa), a[3] = (a[3] ||
                        a[4] || a[5] || "").replace(oa, pa), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                },
                CHILD: function(a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || b.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && b.error(a[0]), a
                },
                PSEUDO: function(a) {
                    var b, c = !a[6] && a[2];
                    return ca.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && na.test(c) && (b = E(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0,
                        3))
                }
            },
            filter: {
                TAG: function(a) {
                    var b = a.replace(oa, pa).toLowerCase();
                    return "*" === a ? function() {
                        return !0
                    } : function(a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                },
                CLASS: function(a) {
                    var b = wa[a + " "];
                    return b || (b = new RegExp("(^|[\\x20\\t\\r\\n\\f])" + a + "([\\x20\\t\\r\\n\\f]|$)"), wa(a, function(a) {
                        return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
                    }))
                },
                ATTR: function(a, c, g) {
                    return function(d) {
                        d = b.attr(d, a);
                        return null == d ? "!=" === c : c ? (d +=
                            "", "=" === c ? d === g : "!=" === c ? d !== g : "^=" === c ? g && 0 === d.indexOf(g) : "*=" === c ? g && -1 < d.indexOf(g) : "$=" === c ? g && d.slice(-g.length) === g : "~=" === c ? -1 < (" " + d.replace(Z, " ") + " ").indexOf(g) : "|=" === c ? d === g || d.slice(0, g.length + 1) === g + "-" : !1) : !0
                    }
                },
                CHILD: function(a, b, c, g, d) {
                    var f = "nth" !== a.slice(0, 3),
                        e = "last" !== a.slice(-4),
                        B = "of-type" === b;
                    return 1 === g && 0 === d ? function(a) {
                        return !!a.parentNode
                    } : function(b, c, k) {
                        var h, n, r, m, t, qa;
                        c = f !== e ? "nextSibling" : "previousSibling";
                        var q = b.parentNode,
                            aa = B && b.nodeName.toLowerCase();
                        k = !k &&
                            !B;
                        var l = !1;
                        if (q) {
                            if (f) {
                                for (; c;) {
                                    for (m = b; m = m[c];)
                                        if (B ? m.nodeName.toLowerCase() === aa : 1 === m.nodeType) return !1;
                                    qa = c = "only" === a && !qa && "nextSibling"
                                }
                                return !0
                            }
                            if (qa = [e ? q.firstChild : q.lastChild], e && k)
                                for (m = q, r = m[z] || (m[z] = {}), n = r[m.uniqueID] || (r[m.uniqueID] = {}), h = n[a] || [], l = (t = h[0] === T && h[1]) && h[2], m = t && q.childNodes[t]; m = ++t && m && m[c] || (l = t = 0) || qa.pop();) {
                                    if (1 === m.nodeType && ++l && m === b) {
                                        n[a] = [T, t, l];
                                        break
                                    }
                                } else if (k && (m = b, r = m[z] || (m[z] = {}), n = r[m.uniqueID] || (r[m.uniqueID] = {}), h = n[a] || [], t = h[0] === T && h[1], l =
                                t), !1 === l)
                                for (;
                                    (m = ++t && m && m[c] || (l = t = 0) || qa.pop()) && ((B ? m.nodeName.toLowerCase() !== aa : 1 !== m.nodeType) || !++l || (k && (r = m[z] || (m[z] = {}), n = r[m.uniqueID] || (r[m.uniqueID] = {}), n[a] = [T, l]), m !== b)););
                            return l -= d, l === g || 0 === l % g && 0 <= l / g
                        }
                    }
                },
                PSEUDO: function(a, c) {
                    var d, f = H.pseudos[a] || H.setFilters[a.toLowerCase()] || b.error("unsupported pseudo: " + a);
                    return f[z] ? f(c) : 1 < f.length ? (d = [a, a, "", c], H.setFilters.hasOwnProperty(a.toLowerCase()) ? g(function(a, b) {
                            for (var g, d = f(a, c), e = d.length; e--;) g = ia(a, d[e]), a[g] = !(b[g] = d[e])
                        }) :
                        function(a) {
                            return f(a, 0, d)
                        }) : f
                }
            },
            pseudos: {
                not: g(function(a) {
                    var b = [],
                        c = [],
                        d = F(a.replace(V, "$1"));
                    return d[z] ? g(function(a, b, c, g) {
                        var f;
                        c = d(a, null, g, []);
                        for (g = a.length; g--;)(f = c[g]) && (a[g] = !(b[g] = f))
                    }) : function(a, g, f) {
                        return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop()
                    }
                }),
                has: g(function(a) {
                    return function(c) {
                        return 0 < b(a, c).length
                    }
                }),
                contains: g(function(a) {
                    return a = a.replace(oa, pa),
                        function(b) {
                            return -1 < (b.textContent || b.innerText || w(b)).indexOf(a)
                        }
                }),
                lang: g(function(a) {
                    return ta.test(a || "") || b.error("unsupported lang: " +
                        a), a = a.replace(oa, pa).toLowerCase(),
                        function(b) {
                            var c;
                            do
                                if (c = N ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);
                            return !1
                        }
                }),
                target: function(b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                },
                root: function(a) {
                    return a === C
                },
                focus: function(a) {
                    return a === I.activeElement && (!I.hasFocus || I.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                },
                enabled: function(a) {
                    return !1 === a.disabled
                },
                disabled: function(a) {
                    return !0 ===
                        a.disabled
                },
                checked: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected
                },
                selected: function(a) {
                    return a.parentNode && a.parentNode.selectedIndex, !0 === a.selected
                },
                empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling)
                        if (6 > a.nodeType) return !1;
                    return !0
                },
                parent: function(a) {
                    return !H.pseudos.empty(a)
                },
                header: function(a) {
                    return ea.test(a.nodeName)
                },
                input: function(a) {
                    return Ua.test(a.nodeName)
                },
                button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" ===
                        b && "button" === a.type || "button" === b
                },
                text: function(a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                },
                first: n(function() {
                    return [0]
                }),
                last: n(function(a, b) {
                    return [b - 1]
                }),
                eq: n(function(a, b, c) {
                    return [0 > c ? c + b : c]
                }),
                even: n(function(a, b) {
                    for (var c = 0; b > c; c += 2) a.push(c);
                    return a
                }),
                odd: n(function(a, b) {
                    for (var c = 1; b > c; c += 2) a.push(c);
                    return a
                }),
                lt: n(function(a, b, c) {
                    for (b = 0 > c ? c + b : c; 0 <= --b;) a.push(b);
                    return a
                }),
                gt: n(function(a, b, c) {
                    for (c =
                             0 > c ? c + b : c; ++c < b;) a.push(c);
                    return a
                })
            }
        };
        H.pseudos.nth = H.pseudos.eq;
        for (x in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) H.pseudos[x] = k(x);
        for (x in {
            submit: !0,
            reset: !0
        }) H.pseudos[x] = h(x);
        m.prototype = H.filters = H.pseudos;
        H.setFilters = new m;
        E = b.tokenize = function(a, c) {
            var g, d, f, e, B, k, h;
            if (B = O[a + " "]) return c ? 0 : B.slice(0);
            B = a;
            k = [];
            for (h = H.preFilter; B;) {
                g && !(d = ha.exec(B)) || (d && (B = B.slice(d[0].length) || B), k.push(f = []));
                g = !1;
                (d = sa.exec(B)) && (g = d.shift(), f.push({
                    value: g,
                    type: d[0].replace(V, " ")
                }), B = B.slice(g.length));
                for (e in H.filter) !(d = ca[e].exec(B)) || h[e] && !(d = h[e](d)) || (g = d.shift(), f.push({
                    value: g,
                    type: e,
                    matches: d
                }), B = B.slice(g.length));
                if (!g) break
            }
            return c ? B.length : B ? b.error(a) : O(a, k).slice(0)
        };
        return F = b.compile = function(a, b) {
            var c, g = [],
                d = [],
                f = M[a + " "];
            if (!f) {
                b || (b = E(a));
                for (c = b.length; c--;) f = v(b[c]), f[z] ? g.push(f) : d.push(f);
                f = M(a, y(d, g));
                f.selector = a
            }
            return f
        }, L = b.select = function(a, b, c, g) {
            var d, f, e, B, k, h = "function" == typeof a && a,
                n = !g && E(a = h.selector || a);
            if (c = c || [], 1 === n.length) {
                if (f = n[0] = n[0].slice(0),
                2 < f.length && "ID" === (e = f[0]).type && D.getById && 9 === b.nodeType && N && H.relative[f[1].type]) {
                    if (b = (H.find.ID(e.matches[0].replace(oa, pa), b) || [])[0], !b) return c;
                    h && (b = b.parentNode);
                    a = a.slice(f.shift().value.length)
                }
                for (d = ca.needsContext.test(a) ? 0 : f.length; d-- && (e = f[d], !H.relative[B = e.type]);)
                    if ((k = H.find[B]) && (g = k(e.matches[0].replace(oa, pa), ga.test(f[0].type) && r(b.parentNode) || b))) {
                        if (f.splice(d, 1), a = g.length && t(f), !a) return ja.apply(c, g), c;
                        break
                    }
            }
            return (h || F(a, n))(g, b, !N, c, !b || ga.test(a) && r(b.parentNode) ||
                b), c
        }, D.sortStable = z.split("").sort(P).join("") === z, D.detectDuplicates = !!X, S(), D.sortDetached = d(function(a) {
            return 1 & a.compareDocumentPosition(I.createElement("div"))
        }), d(function(a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
        }) || f("type|href|height|width", function(a, b, c) {
            return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        }), D.attributes && d(function(a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
        }) ||
        f("value", function(a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
        }), d(function(a) {
            return null == a.getAttribute("disabled")
        }) || f("checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", function(a, b, c) {
            var g;
            return c ? void 0 : !0 === a[b] ? b.toLowerCase() : (g = a.getAttributeNode(b)) && g.specified ? g.value : null
        }), b
    }(a);
    m.find = Ba;
    m.expr = Ba.selectors;
    m.expr[":"] = m.expr.pseudos;
    m.uniqueSort = m.unique = Ba.uniqueSort;
    m.text =
        Ba.getText;
    m.isXMLDoc = Ba.isXML;
    m.contains = Ba.contains;
    var Ca = function(a, b, c) {
            for (var g = [], d = void 0 !== c;
                 (a = a[b]) && 9 !== a.nodeType;)
                if (1 === a.nodeType) {
                    if (d && m(a).is(c)) break;
                    g.push(a)
                }
            return g
        },
        nb = function(a, b) {
            for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
            return c
        },
        ob = m.expr.match.needsContext,
        pb = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
        Fb = /^.[^:#\[\.,]*$/;
    m.filter = function(a, b, c) {
        var g = b[0];
        return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === g.nodeType ? m.find.matchesSelector(g, a) ? [g] : [] : m.find.matches(a,
            m.grep(b, function(a) {
                return 1 === a.nodeType
            }))
    };
    m.fn.extend({
        find: function(a) {
            var b, c = [],
                g = this,
                d = g.length;
            if ("string" != typeof a) return this.pushStack(m(a).filter(function() {
                for (b = 0; d > b; b++)
                    if (m.contains(g[b], this)) return !0
            }));
            for (b = 0; d > b; b++) m.find(a, g[b], c);
            return c = this.pushStack(1 < d ? m.unique(c) : c), c.selector = this.selector ? this.selector + " " + a : a, c
        },
        filter: function(a) {
            return this.pushStack(e(this, a || [], !1))
        },
        not: function(a) {
            return this.pushStack(e(this, a || [], !0))
        },
        is: function(a) {
            return !!e(this, "string" ==
            typeof a && ob.test(a) ? m(a) : a || [], !1).length
        }
    });
    var Wa, Qb = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    (m.fn.init = function(a, b, c) {
        var g, d;
        if (!a) return this;
        if (c = c || Wa, "string" == typeof a) {
            if (g = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && 3 <= a.length ? [null, a, null] : Qb.exec(a), !g || !g[1] && b) return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);
            if (g[1]) {
                if (b = b instanceof m ? b[0] : b, m.merge(this, m.parseHTML(g[1], b && b.nodeType ? b.ownerDocument || b : z, !0)), pb.test(g[1]) && m.isPlainObject(b))
                    for (g in b) m.isFunction(this[g]) ?
                        this[g](b[g]) : this.attr(g, b[g]);
                return this
            }
            if (d = z.getElementById(g[2]), d && d.parentNode) {
                if (d.id !== g[2]) return Wa.find(a);
                this.length = 1;
                this[0] = d
            }
            return this.context = z, this.selector = a, this
        }
        return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : m.isFunction(a) ? "undefined" != typeof c.ready ? c.ready(a) : a(m) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), m.makeArray(a, this))
    }).prototype = m.fn;
    Wa = m(z);
    var Rb = /^(?:parents|prev(?:Until|All))/,
        Sb = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    m.fn.extend({
        has: function(a) {
            var b, c = m(a, this),
                g = c.length;
            return this.filter(function() {
                for (b = 0; g > b; b++)
                    if (m.contains(this, c[b])) return !0
            })
        },
        closest: function(a, b) {
            for (var c, g = 0, d = this.length, f = [], e = ob.test(a) || "string" != typeof a ? m(a, b || this.context) : 0; d > g; g++)
                for (c = this[g]; c && c !== b; c = c.parentNode)
                    if (11 > c.nodeType && (e ? -1 < e.index(c) : 1 === c.nodeType && m.find.matchesSelector(c, a))) {
                        f.push(c);
                        break
                    }
            return this.pushStack(1 < f.length ? m.uniqueSort(f) : f)
        },
        index: function(a) {
            return a ? "string" == typeof a ?
                m.inArray(this[0], m(a)) : m.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(a, b) {
            return this.pushStack(m.uniqueSort(m.merge(this.get(), m(a, b))))
        },
        addBack: function(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    });
    m.each({
        parent: function(a) {
            return (a = a.parentNode) && 11 !== a.nodeType ? a : null
        },
        parents: function(a) {
            return Ca(a, "parentNode")
        },
        parentsUntil: function(a, b, c) {
            return Ca(a, "parentNode", c)
        },
        next: function(a) {
            return f(a, "nextSibling")
        },
        prev: function(a) {
            return f(a, "previousSibling")
        },
        nextAll: function(a) {
            return Ca(a, "nextSibling")
        },
        prevAll: function(a) {
            return Ca(a, "previousSibling")
        },
        nextUntil: function(a, b, c) {
            return Ca(a, "nextSibling", c)
        },
        prevUntil: function(a, b, c) {
            return Ca(a, "previousSibling", c)
        },
        siblings: function(a) {
            return nb((a.parentNode || {}).firstChild, a)
        },
        children: function(a) {
            return nb(a.firstChild)
        },
        contents: function(a) {
            return m.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : m.merge([], a.childNodes)
        }
    }, function(a,
                b) {
        m.fn[a] = function(c, g) {
            var d = m.map(this, b, c);
            return "Until" !== a.slice(-5) && (g = c), g && "string" == typeof g && (d = m.filter(g, d)), 1 < this.length && (Sb[a] || (d = m.uniqueSort(d)), Rb.test(a) && (d = d.reverse())), this.pushStack(d)
        }
    });
    var ea = /\S+/g;
    m.Callbacks = function(a) {
        a = "string" == typeof a ? k(a) : m.extend({}, a);
        var b, c, g, d, f = [],
            e = [],
            h = -1,
            n = function() {
                d = a.once;
                for (g = b = !0; e.length; h = -1)
                    for (c = e.shift(); ++h < f.length;) !1 === f[h].apply(c[0], c[1]) && a.stopOnFalse && (h = f.length, c = !1);
                a.memory || (c = !1);
                b = !1;
                d && (f = c ? [] : "")
            },
            r = {
                add: function() {
                    return f &&
                    (c && !b && (h = f.length - 1, e.push(c)), function Ib(b) {
                        m.each(b, function(b, c) {
                            m.isFunction(c) ? a.unique && r.has(c) || f.push(c) : c && c.length && "string" !== m.type(c) && Ib(c)
                        })
                    }(arguments), c && !b && n()), this
                },
                remove: function() {
                    return m.each(arguments, function(a, b) {
                        for (var c; - 1 < (c = m.inArray(b, f, c));) f.splice(c, 1), h >= c && h--
                    }), this
                },
                has: function(a) {
                    return a ? -1 < m.inArray(a, f) : 0 < f.length
                },
                empty: function() {
                    return f && (f = []), this
                },
                disable: function() {
                    return d = e = [], f = c = "", this
                },
                disabled: function() {
                    return !f
                },
                lock: function() {
                    return d = !0, c || r.disable(), this
                },
                locked: function() {
                    return !!d
                },
                fireWith: function(a, c) {
                    return d || (c = c || [], c = [a, c.slice ? c.slice() : c], e.push(c), b || n()), this
                },
                fire: function() {
                    return r.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!g
                }
            };
        return r
    };
    m.extend({
        Deferred: function(a) {
            var b = [
                    ["resolve", "done", m.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", m.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", m.Callbacks("memory")]
                ],
                c = "pending",
                g = {
                    state: function() {
                        return c
                    },
                    always: function() {
                        return d.done(arguments).fail(arguments),
                            this
                    },
                    then: function() {
                        var a = arguments;
                        return m.Deferred(function(c) {
                            m.each(b, function(b, f) {
                                var e = m.isFunction(a[b]) && a[b];
                                d[f[1]](function() {
                                    var a = e && e.apply(this, arguments);
                                    a && m.isFunction(a.promise) ? a.promise().progress(c.notify).done(c.resolve).fail(c.reject) : c[f[0] + "With"](this === g ? c.promise() : this, e ? [a] : arguments)
                                })
                            });
                            a = null
                        }).promise()
                    },
                    promise: function(a) {
                        return null != a ? m.extend(a, g) : g
                    }
                },
                d = {};
            return g.pipe = g.then, m.each(b, function(a, f) {
                var e = f[2],
                    k = f[3];
                g[f[1]] = e.add;
                k && e.add(function() {
                    c =
                        k
                }, b[1 ^ a][2].disable, b[2][2].lock);
                d[f[0]] = function() {
                    return d[f[0] + "With"](this === d ? g : this, arguments), this
                };
                d[f[0] + "With"] = e.fireWith
            }), g.promise(d), a && a.call(d, d), d
        },
        when: function(a) {
            var b = 0,
                c = ha.call(arguments),
                g = c.length,
                d = 1 !== g || a && m.isFunction(a.promise) ? g : 0,
                f = 1 === d ? a : m.Deferred(),
                e = function(a, b, c) {
                    return function(g) {
                        b[a] = this;
                        c[a] = 1 < arguments.length ? ha.call(arguments) : g;
                        c === k ? f.notifyWith(b, c) : --d || f.resolveWith(b, c)
                    }
                },
                k, h, n;
            if (1 < g)
                for (k = Array(g), h = Array(g), n = Array(g); g > b; b++) c[b] && m.isFunction(c[b].promise) ?
                    c[b].promise().progress(e(b, h, k)).done(e(b, n, c)).fail(f.reject) : --d;
            return d || f.resolveWith(n, c), f.promise()
        }
    });
    var Ka;
    m.fn.ready = function(a) {
        return m.ready.promise().done(a), this
    };
    m.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(a) {
            a ? m.readyWait++ : m.ready(!0)
        },
        ready: function(a) {
            (!0 === a ? --m.readyWait : m.isReady) || (m.isReady = !0, !0 !== a && 0 < --m.readyWait || (Ka.resolveWith(z, [m]), m.fn.triggerHandler && (m(z).triggerHandler("ready"), m(z).off("ready"))))
        }
    });
    m.ready.promise = function(b) {
        if (!Ka)
            if (Ka = m.Deferred(),
            "complete" === z.readyState) a.setTimeout(m.ready);
            else if (z.addEventListener) z.addEventListener("DOMContentLoaded", c), a.addEventListener("load", c);
            else {
                z.attachEvent("onreadystatechange", c);
                a.attachEvent("onload", c);
                var g = !1;
                try {
                    g = null == a.frameElement && z.documentElement
                } catch (f) {}
                g && g.doScroll && ! function ra() {
                    if (!m.isReady) {
                        try {
                            g.doScroll("left")
                        } catch (b) {
                            return a.setTimeout(ra, 50)
                        }
                        d();
                        m.ready()
                    }
                }()
            }
        return Ka.promise(b)
    };
    m.ready.promise();
    for (var Tb in m(A)) break;
    A.ownFirst = "0" === Tb;
    A.inlineBlockNeedsLayout = !1;
    m(function() {
        var a, b, c, g;
        (c = z.getElementsByTagName("body")[0]) && c.style && (b = z.createElement("div"), g = z.createElement("div"), g.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(g).appendChild(b), "undefined" != typeof b.style.zoom && (b.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", A.inlineBlockNeedsLayout = a = 3 === b.offsetWidth, a && (c.style.zoom = 1)), c.removeChild(g))
    });
    (function() {
        var a = z.createElement("div");
        A.deleteExpando = !0;
        try {
            delete a.test
        } catch (b) {
            A.deleteExpando = !1
        }
    })();
    var Fa = function(a) {
            var b = m.noData[(a.nodeName + " ").toLowerCase()],
                c = +a.nodeType || 1;
            return 1 !== c && 9 !== c ? !1 : !b || !0 !== b && a.getAttribute("classid") === b
        },
        Hb = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Gb = /([A-Z])/g;
    m.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(a) {
            return a = a.nodeType ? m.cache[a[m.expando]] : a[m.expando], !!a && !g(a)
        },
        data: function(a, b, c) {
            return r(a, b, c)
        },
        removeData: function(a,
                             b) {
            return t(a, b)
        },
        _data: function(a, b, c) {
            return r(a, b, c, !0)
        },
        _removeData: function(a, b) {
            return t(a, b, !0)
        }
    });
    m.fn.extend({
        data: function(a, c) {
            var g, d, f, e = this[0],
                k = e && e.attributes;
            if (void 0 === a) {
                if (this.length && (f = m.data(e), 1 === e.nodeType && !m._data(e, "parsedAttrs"))) {
                    for (g = k.length; g--;) k[g] && (d = k[g].name, 0 === d.indexOf("data-") && (d = m.camelCase(d.slice(5)), b(e, d, f[d])));
                    m._data(e, "parsedAttrs", !0)
                }
                return f
            }
            return "object" == typeof a ? this.each(function() {
                m.data(this, a)
            }) : 1 < arguments.length ? this.each(function() {
                m.data(this,
                    a, c)
            }) : e ? b(e, a, m.data(e, a)) : void 0
        },
        removeData: function(a) {
            return this.each(function() {
                m.removeData(this, a)
            })
        }
    });
    m.extend({
        queue: function(a, b, c) {
            var g;
            return a ? (b = (b || "fx") + "queue", g = m._data(a, b), c && (!g || m.isArray(c) ? g = m._data(a, b, m.makeArray(c)) : g.push(c)), g || []) : void 0
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = m.queue(a, b),
                g = c.length,
                d = c.shift(),
                f = m._queueHooks(a, b),
                e = function() {
                    m.dequeue(a, b)
                };
            "inprogress" === d && (d = c.shift(), g--);
            d && ("fx" === b && c.unshift("inprogress"), delete f.stop, d.call(a, e, f));
            !g &&
            f && f.empty.fire()
        },
        _queueHooks: function(a, b) {
            var c = b + "queueHooks";
            return m._data(a, c) || m._data(a, c, {
                empty: m.Callbacks("once memory").add(function() {
                    m._removeData(a, b + "queue");
                    m._removeData(a, c)
                })
            })
        }
    });
    m.fn.extend({
        queue: function(a, b) {
            var c = 2;
            return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? m.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                var c = m.queue(this, a, b);
                m._queueHooks(this, a);
                "fx" === a && "inprogress" !== c[0] && m.dequeue(this, a)
            })
        },
        dequeue: function(a) {
            return this.each(function() {
                m.dequeue(this,
                    a)
            })
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", [])
        },
        promise: function(a, b) {
            var c, g = 1,
                d = m.Deferred(),
                f = this,
                e = this.length,
                k = function() {
                    --g || d.resolveWith(f, [f])
                };
            "string" != typeof a && (b = a, a = void 0);
            for (a = a || "fx"; e--;)(c = m._data(f[e], a + "queueHooks")) && c.empty && (g++, c.empty.add(k));
            return k(), d.promise(b)
        }
    });
    (function() {
        var a;
        A.shrinkWrapBlocks = function() {
            if (null != a) return a;
            a = !1;
            var b, c, g;
            return c = z.getElementsByTagName("body")[0], c && c.style ? (b = z.createElement("div"), g = z.createElement("div"),
                g.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(g).appendChild(b), "undefined" != typeof b.style.zoom && (b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", b.appendChild(z.createElement("div")).style.width = "5px", a = 3 !== b.offsetWidth), c.removeChild(g), a) : void 0
        }
    })();
    var Xa = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        Pa = new RegExp("^(?:([+-])=|)(" +
            Xa + ")([a-z%]*)$", "i"),
        ua = ["Top", "Right", "Bottom", "Left"],
        Ha = function(a, b) {
            return a = b || a, "none" === m.css(a, "display") || !m.contains(a.ownerDocument, a)
        },
        ka = function(a, b, c, g, d, f, e) {
            var k = 0,
                h = a.length,
                n = null == c;
            if ("object" === m.type(c))
                for (k in d = !0, c) ka(a, b, k, c[k], !0, f, e);
            else if (void 0 !== g && (d = !0, m.isFunction(g) || (e = !0), n && (e ? (b.call(a, g), b = null) : (n = b, b = function(a, b, c) {
                return n.call(m(a), c)
            })), b))
                for (; h > k; k++) b(a[k], c, e ? g : g.call(a[k], k, b(a[k], c)));
            return d ? a : n ? b.call(a) : h ? b(a[0], c) : f
        },
        Qa = /^(?:checkbox|radio)$/i,
        hb = /<([\w:-]+)/,
        jb = /^$|\/(?:java|ecma)script/i,
        Ra = /^\s+/;
    ! function() {
        var a = z.createElement("div"),
            b = z.createDocumentFragment(),
            c = z.createElement("input");
        a.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
        A.leadingWhitespace = 3 === a.firstChild.nodeType;
        A.tbody = !a.getElementsByTagName("tbody").length;
        A.htmlSerialize = !!a.getElementsByTagName("link").length;
        A.html5Clone = "<:nav></:nav>" !== z.createElement("nav").cloneNode(!0).outerHTML;
        c.type = "checkbox";
        c.checked = !0;
        b.appendChild(c);
        A.appendChecked = c.checked;
        a.innerHTML = "<textarea>x</textarea>";
        A.noCloneChecked = !!a.cloneNode(!0).lastChild.defaultValue;
        b.appendChild(a);
        c = z.createElement("input");
        c.setAttribute("type", "radio");
        c.setAttribute("checked", "checked");
        c.setAttribute("name", "t");
        a.appendChild(c);
        A.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked;
        A.noCloneEvent = !!a.addEventListener;
        a[m.expando] = 1;
        A.attributes = !a.getAttribute(m.expando)
    }();
    var ca = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1,
            "<fieldset>", "</fieldset>"
        ],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: A.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    };
    ca.optgroup = ca.option;
    ca.tbody = ca.tfoot = ca.colgroup = ca.caption = ca.thead;
    ca.th = ca.td;
    var Jb = /<|&#?\w+;/,
        ib = /<tbody/i;
    ! function() {
        var b, c, g = z.createElement("div");
        for (b in {
            submit: !0,
            change: !0,
            focusin: !0
        }) c = "on" + b, (A[b] = c in a) || (g.setAttribute(c, "t"), A[b] = !1 === g.attributes[c].expando)
    }();
    var Ya = /^(?:input|select|textarea)$/i,
        Ub = /^key/,
        Vb = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        qb = /^(?:focusinfocus|focusoutblur)$/,
        rb = /^([^.]*)(?:\.(.+)|)/;
    m.event = {
        global: {},
        add: function(a, b, c, g, d) {
            var f, e, k, h, n, r, t, q, l, u;
            if (k = m._data(a)) {
                c.handler && (h = c, c = h.handler, d = h.selector);
                c.guid || (c.guid = m.guid++);
                (e = k.events) || (e = k.events = {});
                (r = k.handle) || (r = k.handle = function(a) {
                    return "undefined" ==
                    typeof m || a && m.event.triggered === a.type ? void 0 : m.event.dispatch.apply(r.elem, arguments)
                }, r.elem = a);
                b = (b || "").match(ea) || [""];
                for (k = b.length; k--;) f = rb.exec(b[k]) || [], l = u = f[1], f = (f[2] || "").split(".").sort(), l && (n = m.event.special[l] || {}, l = (d ? n.delegateType : n.bindType) || l, n = m.event.special[l] || {}, t = m.extend({
                    type: l,
                    origType: u,
                    data: g,
                    handler: c,
                    guid: c.guid,
                    selector: d,
                    needsContext: d && m.expr.match.needsContext.test(d),
                    namespace: f.join(".")
                }, h), (q = e[l]) || (q = e[l] = [], q.delegateCount = 0, n.setup && !1 !== n.setup.call(a,
                    g, f, r) || (a.addEventListener ? a.addEventListener(l, r, !1) : a.attachEvent && a.attachEvent("on" + l, r))), n.add && (n.add.call(a, t), t.handler.guid || (t.handler.guid = c.guid)), d ? q.splice(q.delegateCount++, 0, t) : q.push(t), m.event.global[l] = !0);
                a = null
            }
        },
        remove: function(a, b, c, g, d) {
            var f, e, k, h, n, r, t, q, l, u, p, v = m.hasData(a) && m._data(a);
            if (v && (r = v.events)) {
                b = (b || "").match(ea) || [""];
                for (n = b.length; n--;)
                    if (k = rb.exec(b[n]) || [], l = p = k[1], u = (k[2] || "").split(".").sort(), l) {
                        t = m.event.special[l] || {};
                        l = (g ? t.delegateType : t.bindType) ||
                            l;
                        q = r[l] || [];
                        k = k[2] && new RegExp("(^|\\.)" + u.join("\\.(?:.*\\.|)") + "(\\.|$)");
                        for (h = f = q.length; f--;) e = q[f], !d && p !== e.origType || c && c.guid !== e.guid || k && !k.test(e.namespace) || g && g !== e.selector && ("**" !== g || !e.selector) || (q.splice(f, 1), e.selector && q.delegateCount--, t.remove && t.remove.call(a, e));
                        h && !q.length && (t.teardown && !1 !== t.teardown.call(a, u, v.handle) || m.removeEvent(a, l, v.handle), delete r[l])
                    } else
                        for (l in r) m.event.remove(a, l + b[n], c, g, !0);
                m.isEmptyObject(r) && (delete v.handle, m._removeData(a, "events"))
            }
        },
        trigger: function(b, c, g, d) {
            var f, e, k, h, n, r, t = [g || z],
                q = sa.call(b, "type") ? b.type : b;
            r = sa.call(b, "namespace") ? b.namespace.split(".") : [];
            if (k = f = g = g || z, 3 !== g.nodeType && 8 !== g.nodeType && !qb.test(q + m.event.triggered) && (-1 < q.indexOf(".") && (r = q.split("."), q = r.shift(), r.sort()), e = 0 > q.indexOf(":") && "on" + q, b = b[m.expando] ? b : new m.Event(q, "object" == typeof b && b), b.isTrigger = d ? 2 : 3, b.namespace = r.join("."), b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target ||
            (b.target = g), c = null == c ? [b] : m.makeArray(c, [b]), n = m.event.special[q] || {}, d || !n.trigger || !1 !== n.trigger.apply(g, c))) {
                if (!d && !n.noBubble && !m.isWindow(g)) {
                    h = n.delegateType || q;
                    for (qb.test(h + q) || (k = k.parentNode); k; k = k.parentNode) t.push(k), f = k;
                    f === (g.ownerDocument || z) && t.push(f.defaultView || f.parentWindow || a)
                }
                for (r = 0;
                     (k = t[r++]) && !b.isPropagationStopped();) b.type = 1 < r ? h : n.bindType || q, (f = (m._data(k, "events") || {})[b.type] && m._data(k, "handle")) && f.apply(k, c), (f = e && k[e]) && f.apply && Fa(k) && (b.result = f.apply(k, c), !1 === b.result && b.preventDefault());
                if (b.type = q, !(d || b.isDefaultPrevented() || n._default && !1 !== n._default.apply(t.pop(), c)) && Fa(g) && e && g[q] && !m.isWindow(g)) {
                    (f = g[e]) && (g[e] = null);
                    m.event.triggered = q;
                    try {
                        g[q]()
                    } catch (l) {}
                    m.event.triggered = void 0;
                    f && (g[e] = f)
                }
                return b.result
            }
        },
        dispatch: function(a) {
            a = m.event.fix(a);
            var b, c, g, d, f, e, k = ha.call(arguments);
            b = (m._data(this, "events") || {})[a.type] || [];
            var h = m.event.special[a.type] || {};
            if (k[0] = a, a.delegateTarget = this, !h.preDispatch || !1 !== h.preDispatch.call(this,
                a)) {
                e = m.event.handlers.call(this, a, b);
                for (b = 0;
                     (d = e[b++]) && !a.isPropagationStopped();)
                    for (a.currentTarget = d.elem, c = 0;
                         (f = d.handlers[c++]) && !a.isImmediatePropagationStopped();) a.rnamespace && !a.rnamespace.test(f.namespace) || (a.handleObj = f, a.data = f.data, g = ((m.event.special[f.origType] || {}).handle || f.handler).apply(d.elem, k), void 0 === g || !1 !== (a.result = g) || (a.preventDefault(), a.stopPropagation()));
                return h.postDispatch && h.postDispatch.call(this, a), a.result
            }
        },
        handlers: function(a, b) {
            var c, g, d, f, e = [],
                k = b.delegateCount,
                h = a.target;
            if (k && h.nodeType && ("click" !== a.type || isNaN(a.button) || 1 > a.button))
                for (; h != this; h = h.parentNode || this)
                    if (1 === h.nodeType && (!0 !== h.disabled || "click" !== a.type)) {
                        g = [];
                        for (c = 0; k > c; c++) f = b[c], d = f.selector + " ", void 0 === g[d] && (g[d] = f.needsContext ? -1 < m(d, this).index(h) : m.find(d, this, null, [h]).length), g[d] && g.push(f);
                        g.length && e.push({
                            elem: h,
                            handlers: g
                        })
                    }
            return k < b.length && e.push({
                elem: this,
                handlers: b.slice(k)
            }), e
        },
        fix: function(a) {
            if (a[m.expando]) return a;
            var b, c, g;
            b = a.type;
            var d = a,
                f = this.fixHooks[b];
            f || (this.fixHooks[b] = f = Vb.test(b) ? this.mouseHooks : Ub.test(b) ? this.keyHooks : {});
            g = f.props ? this.props.concat(f.props) : this.props;
            a = new m.Event(d);
            for (b = g.length; b--;) c = g[b], a[c] = d[c];
            return a.target || (a.target = d.srcElement || z), 3 === a.target.nodeType && (a.target = a.target.parentNode), a.metaKey = !!a.metaKey, f.filter ? f.filter(a, d) : a
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: ["char",
                "charCode", "key", "keyCode"
            ],
            filter: function(a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(a, b) {
                var c, g, d, f = b.button,
                    e = b.fromElement;
                return null == a.pageX && null != b.clientX && (g = a.target.ownerDocument || z, d = g.documentElement, c = g.body, a.pageX = b.clientX + (d && d.scrollLeft || c && c.scrollLeft || 0) - (d && d.clientLeft || c && c.clientLeft || 0), a.pageY =
                    b.clientY + (d && d.scrollTop || c && c.scrollTop || 0) - (d && d.clientTop || c && c.clientTop || 0)), !a.relatedTarget && e && (a.relatedTarget = e === a.target ? b.toElement : e), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== F() && this.focus) try {
                        return this.focus(), !1
                    } catch (a) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === F() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return m.nodeName(this, "input") &&
                    "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                },
                _default: function(a) {
                    return m.nodeName(a.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                }
            }
        },
        simulate: function(a, b, c) {
            a = m.extend(new m.Event, c, {
                type: a,
                isSimulated: !0
            });
            m.event.trigger(a, null, b);
            a.isDefaultPrevented() && c.preventDefault()
        }
    };
    m.removeEvent = z.removeEventListener ? function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c)
    } : function(a, b, c) {
        b = "on" +
            b;
        a.detachEvent && ("undefined" == typeof a[b] && (a[b] = null), a.detachEvent(b, c))
    };
    m.Event = function(a, b) {
        return this instanceof m.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && !1 === a.returnValue ? x : w) : this.type = a, b && m.extend(this, b), this.timeStamp = a && a.timeStamp || m.now(), void(this[m.expando] = !0)) : new m.Event(a, b)
    };
    m.Event.prototype = {
        constructor: m.Event,
        isDefaultPrevented: w,
        isPropagationStopped: w,
        isImmediatePropagationStopped: w,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = x;
            a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = x;
            a && !this.isSimulated && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = x;
            a && a.stopImmediatePropagation && a.stopImmediatePropagation();
            this.stopPropagation()
        }
    };
    m.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(a, b) {
        m.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c, g = a.relatedTarget,
                    d = a.handleObj;
                return (!g || g !== this && !m.contains(this, g)) && (a.type = d.origType, c = d.handler.apply(this, arguments), a.type = b), c
            }
        }
    });
    A.submit || (m.event.special.submit = {
        setup: function() {
            return m.nodeName(this, "form") ? !1 : void m.event.add(this, "click._submit keypress._submit", function(a) {
                a = a.target;
                (a = m.nodeName(a, "input") || m.nodeName(a,
                    "button") ? m.prop(a, "form") : void 0) && !m._data(a, "submit") && (m.event.add(a, "submit._submit", function(a) {
                    a._submitBubble = !0
                }), m._data(a, "submit", !0))
            })
        },
        postDispatch: function(a) {
            a._submitBubble && (delete a._submitBubble, this.parentNode && !a.isTrigger && m.event.simulate("submit", this.parentNode, a))
        },
        teardown: function() {
            return m.nodeName(this, "form") ? !1 : void m.event.remove(this, "._submit")
        }
    });
    A.change || (m.event.special.change = {
        setup: function() {
            return Ya.test(this.nodeName) ? (("checkbox" === this.type || "radio" ===
                this.type) && (m.event.add(this, "propertychange._change", function(a) {
                "checked" === a.originalEvent.propertyName && (this._justChanged = !0)
            }), m.event.add(this, "click._change", function(a) {
                this._justChanged && !a.isTrigger && (this._justChanged = !1);
                m.event.simulate("change", this, a)
            })), !1) : void m.event.add(this, "beforeactivate._change", function(a) {
                a = a.target;
                Ya.test(a.nodeName) && !m._data(a, "change") && (m.event.add(a, "change._change", function(a) {
                    !this.parentNode || a.isSimulated || a.isTrigger || m.event.simulate("change",
                        this.parentNode, a)
                }), m._data(a, "change", !0))
            })
        },
        handle: function(a) {
            var b = a.target;
            return this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type ? a.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function() {
            return m.event.remove(this, "._change"), !Ya.test(this.nodeName)
        }
    });
    A.focusin || m.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a, b) {
        var c = function(a) {
            m.event.simulate(b, a.target, m.event.fix(a))
        };
        m.event.special[b] = {
            setup: function() {
                var g = this.ownerDocument || this,
                    d = m._data(g,
                        b);
                d || g.addEventListener(a, c, !0);
                m._data(g, b, (d || 0) + 1)
            },
            teardown: function() {
                var g = this.ownerDocument || this,
                    d = m._data(g, b) - 1;
                d ? m._data(g, b, d) : (g.removeEventListener(a, c, !0), m._removeData(g, b))
            }
        }
    });
    m.fn.extend({
        on: function(a, b, c, g) {
            return G(this, a, b, c, g)
        },
        one: function(a, b, c, g) {
            return G(this, a, b, c, g, 1)
        },
        off: function(a, b, c) {
            var g, d;
            if (a && a.preventDefault && a.handleObj) return g = a.handleObj, m(a.delegateTarget).off(g.namespace ? g.origType + "." + g.namespace : g.origType, g.selector, g.handler), this;
            if ("object" ==
                typeof a) {
                for (d in a) this.off(d, b, a[d]);
                return this
            }
            return (!1 === b || "function" == typeof b) && (c = b, b = void 0), !1 === c && (c = w), this.each(function() {
                m.event.remove(this, a, c, b)
            })
        },
        trigger: function(a, b) {
            return this.each(function() {
                m.event.trigger(a, b, this)
            })
        },
        triggerHandler: function(a, b) {
            var c = this[0];
            return c ? m.event.trigger(a, b, c, !0) : void 0
        }
    });
    var Wb = / jQuery\d+="(?:null|\d+)"/g,
        sb = /<(?:abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video)[\s/>]/i,
        Xb = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
        Yb = /<script|<style|<link/i,
        Lb = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Kb = /^true\/(.*)/,
        Mb = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        Za = p(z).appendChild(z.createElement("div"));
    m.extend({
        htmlPrefilter: function(a) {
            return a.replace(Xb, "<$1></$2>")
        },
        clone: function(a, b, c) {
            var g, d, f, e, k, h = m.contains(a.ownerDocument, a);
            if (A.html5Clone || m.isXMLDoc(a) || !sb.test("<" + a.nodeName + ">") ? f = a.cloneNode(!0) : (Za.innerHTML = a.outerHTML, Za.removeChild(f =
                Za.firstChild)), !(A.noCloneEvent && A.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || m.isXMLDoc(a)))
                for (g = v(f), k = v(a), e = 0; null != (d = k[e]); ++e)
                    if (g[e]) {
                        var r = g[e],
                            t, q = void 0,
                            l;
                        if (1 === r.nodeType) {
                            if (t = r.nodeName.toLowerCase(), !A.noCloneEvent && r[m.expando]) {
                                l = m._data(r);
                                for (q in l.events) m.removeEvent(r, q, l.handle);
                                r.removeAttribute(m.expando)
                            }
                            "script" === t && r.text !== d.text ? (C(r).text = d.text, M(r)) : "object" === t ? (r.parentNode && (r.outerHTML = d.outerHTML), A.html5Clone && d.innerHTML && !m.trim(r.innerHTML) && (r.innerHTML =
                                d.innerHTML)) : "input" === t && Qa.test(d.type) ? (r.defaultChecked = r.checked = d.checked, r.value !== d.value && (r.value = d.value)) : "option" === t ? r.defaultSelected = r.selected = d.defaultSelected : ("input" === t || "textarea" === t) && (r.defaultValue = d.defaultValue)
                        }
                    }
            if (b)
                if (c)
                    for (k = k || v(a), g = g || v(f), e = 0; null != (d = k[e]); e++) K(d, g[e]);
                else K(a, f);
            return g = v(f, "script"), 0 < g.length && n(g, !h && v(a, "script")), f
        },
        cleanData: function(a, b) {
            for (var c, g, d, f, e = 0, k = m.expando, h = m.cache, n = A.attributes, r = m.event.special; null != (c = a[e]); e++)
                if ((b ||
                    Fa(c)) && (d = c[k], f = d && h[d])) {
                    if (f.events)
                        for (g in f.events) r[g] ? m.event.remove(c, g) : m.removeEvent(c, g, f.handle);
                    h[d] && (delete h[d], n || "undefined" == typeof c.removeAttribute ? c[k] = void 0 : c.removeAttribute(k), da.push(d))
                }
        }
    });
    m.fn.extend({
        domManip: E,
        detach: function(a) {
            return N(this, a, !0)
        },
        remove: function(a) {
            return N(this, a)
        },
        text: function(a) {
            return ka(this, function(a) {
                return void 0 === a ? m.text(this) : this.empty().append((this[0] && this[0].ownerDocument || z).createTextNode(a))
            }, null, a, arguments.length)
        },
        append: function() {
            return E(this,
                arguments,
                function(a) {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || L(this, a).appendChild(a)
                })
        },
        prepend: function() {
            return E(this, arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = L(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        },
        before: function() {
            return E(this, arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        },
        after: function() {
            return E(this, arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        },
        empty: function() {
            for (var a, b = 0; null != (a = this[b]); b++) {
                for (1 === a.nodeType && m.cleanData(v(a, !1)); a.firstChild;) a.removeChild(a.firstChild);
                a.options && m.nodeName(a, "select") && (a.options.length = 0)
            }
            return this
        },
        clone: function(a, b) {
            return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function() {
                return m.clone(this, a, b)
            })
        },
        html: function(a) {
            return ka(this, function(a) {
                var b = this[0] || {},
                    c = 0,
                    g = this.length;
                if (void 0 === a) return 1 === b.nodeType ? b.innerHTML.replace(Wb, "") : void 0;
                if (!("string" != typeof a || Yb.test(a) || !A.htmlSerialize &&
                    sb.test(a) || !A.leadingWhitespace && Ra.test(a) || ca[(hb.exec(a) || ["", ""])[1].toLowerCase()])) {
                    a = m.htmlPrefilter(a);
                    try {
                        for (; g > c; c++) b = this[c] || {}, 1 === b.nodeType && (m.cleanData(v(b, !1)), b.innerHTML = a);
                        b = 0
                    } catch (d) {}
                }
                b && this.empty().append(a)
            }, null, a, arguments.length)
        },
        replaceWith: function() {
            var a = [];
            return E(this, arguments, function(b) {
                var c = this.parentNode;
                0 > m.inArray(this, a) && (m.cleanData(v(this)), c && c.replaceChild(b, this))
            }, a)
        }
    });
    m.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, b) {
        m.fn[a] = function(a) {
            for (var c = 0, g = [], d = m(a), f = d.length - 1; f >= c; c++) a = c === f ? this : this.clone(!0), m(d[c])[b](a), Ia.apply(g, a.get());
            return this.pushStack(g)
        }
    });
    var Ga, kb = {
            HTML: "block",
            BODY: "block"
        },
        tb = /^margin/,
        Ja = new RegExp("^(" + Xa + ")(?!px)[a-z%]+$", "i"),
        $a = function(a, b, c, g) {
            var d, f = {};
            for (d in b) f[d] = a.style[d], a.style[d] = b[d];
            c = c.apply(a, g || []);
            for (d in b) a.style[d] = f[d];
            return c
        },
        ub = z.documentElement;
    ! function() {
        var b, c, g, d, f, e, k = z.createElement("div"),
            h = z.createElement("div");
        if (h.style) {
            var n = function() {
                var n, r, m = z.documentElement;
                m.appendChild(k);
                h.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%";
                b = g = e = !1;
                c = f = !0;
                a.getComputedStyle && (r = a.getComputedStyle(h), b = "1%" !== (r || {}).top, e = "2px" === (r || {}).marginLeft, g = "4px" === (r || {
                    width: "4px"
                }).width, h.style.marginRight = "50%", c = "4px" === (r || {
                    marginRight: "4px"
                }).marginRight, n = h.appendChild(z.createElement("div")), n.style.cssText =
                    h.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", n.style.marginRight = n.style.width = "0", h.style.width = "1px", f = !parseFloat((a.getComputedStyle(n) || {}).marginRight), h.removeChild(n));
                h.style.display = "none";
                (d = 0 === h.getClientRects().length) && (h.style.display = "", h.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", n = h.getElementsByTagName("td"), n[0].style.cssText = "margin:0;border:0;padding:0;display:none",
                    d = 0 === n[0].offsetHeight, d && (n[0].style.display = "", n[1].style.display = "none", d = 0 === n[0].offsetHeight));
                m.removeChild(k)
            };
            h.style.cssText = "float:left;opacity:.5";
            A.opacity = "0.5" === h.style.opacity;
            A.cssFloat = !!h.style.cssFloat;
            h.style.backgroundClip = "content-box";
            h.cloneNode(!0).style.backgroundClip = "";
            A.clearCloneStyle = "content-box" === h.style.backgroundClip;
            k = z.createElement("div");
            k.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute";
            h.innerHTML =
                "";
            k.appendChild(h);
            A.boxSizing = "" === h.style.boxSizing || "" === h.style.MozBoxSizing || "" === h.style.WebkitBoxSizing;
            m.extend(A, {
                reliableHiddenOffsets: function() {
                    return null == b && n(), d
                },
                boxSizingReliable: function() {
                    return null == b && n(), g
                },
                pixelMarginRight: function() {
                    return null == b && n(), c
                },
                pixelPosition: function() {
                    return null == b && n(), b
                },
                reliableMarginRight: function() {
                    return null == b && n(), f
                },
                reliableMarginLeft: function() {
                    return null == b && n(), e
                }
            })
        }
    }();
    var va, ga, Zb = /^(top|right|bottom|left)$/;
    a.getComputedStyle ?
        (va = function(b) {
            var c = b.ownerDocument.defaultView;
            return c.opener || (c = a), c.getComputedStyle(b)
        }, ga = function(a, b, c) {
            var g, d, f, e, k = a.style;
            return c = c || va(a), e = c ? c.getPropertyValue(b) || c[b] : void 0, c && ("" !== e || m.contains(a.ownerDocument, a) || (e = m.style(a, b)), !A.pixelMarginRight() && Ja.test(e) && tb.test(b) && (g = k.width, d = k.minWidth, f = k.maxWidth, k.minWidth = k.maxWidth = k.width = e, e = c.width, k.width = g, k.minWidth = d, k.maxWidth = f)), void 0 === e ? e : e + ""
        }) : ub.currentStyle && (va = function(a) {
        return a.currentStyle
    }, ga = function(a,
                     b, c) {
        var g, d, f, e, k = a.style;
        return c = c || va(a), e = c ? c[b] : void 0, null == e && k && k[b] && (e = k[b]), Ja.test(e) && !Zb.test(b) && (g = k.left, d = a.runtimeStyle, f = d && d.left, f && (d.left = a.currentStyle.left), k.left = "fontSize" === b ? "1em" : e, e = k.pixelLeft + "px", k.left = g, f && (d.left = f)), void 0 === e ? e : e + "" || "auto"
    });
    var ab = /alpha\([^)]*\)/i,
        $b = /opacity\s*=\s*([^)]*)/i,
        ac = /^(none|table(?!-c[ea]).+)/,
        Nb = new RegExp("^(" + Xa + ")(.*)$", "i"),
        bc = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        vb = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        mb = ["Webkit", "O", "Moz", "ms"],
        lb = z.createElement("div").style;
    m.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) return a = ga(a, "opacity"), "" === a ? "1" : a
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": A.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(a, b, c, g) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var d, f, e, k = m.camelCase(b),
                    h = a.style;
                if (b =
                    m.cssProps[k] || (m.cssProps[k] = fa(k) || k), e = m.cssHooks[b] || m.cssHooks[k], void 0 === c) return e && "get" in e && void 0 !== (d = e.get(a, !1, g)) ? d : h[b];
                if (f = typeof c, "string" === f && (d = Pa.exec(c)) && d[1] && (c = q(a, b, d), f = "number"), null != c && c === c && ("number" === f && (c += d && d[3] || (m.cssNumber[k] ? "" : "px")), A.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (h[b] = "inherit"), !(e && "set" in e && void 0 === (c = e.set(a, c, g))))) try {
                    h[b] = c
                } catch (n) {}
            }
        },
        css: function(a, b, c, g) {
            var d, f, e, k = m.camelCase(b);
            return b = m.cssProps[k] || (m.cssProps[k] =
                fa(k) || k), e = m.cssHooks[b] || m.cssHooks[k], e && "get" in e && (f = e.get(a, !0, c)), void 0 === f && (f = ga(a, b, g)), "normal" === f && b in vb && (f = vb[b]), "" === c || c ? (d = parseFloat(f), !0 === c || isFinite(d) ? d || 0 : f) : f
        }
    });
    m.each(["height", "width"], function(a, b) {
        m.cssHooks[b] = {
            get: function(a, c, g) {
                return c ? ac.test(m.css(a, "display")) && 0 === a.offsetWidth ? $a(a, bc, function() {
                    return P(a, b, g)
                }) : P(a, b, g) : void 0
            },
            set: function(a, c, g) {
                var d = g && va(a);
                return ba(a, c, g ? S(a, b, g, A.boxSizing && "border-box" === m.css(a, "boxSizing", !1, d), d) : 0)
            }
        }
    });
    A.opacity ||
    (m.cssHooks.opacity = {
        get: function(a, b) {
            return $b.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : ""
        },
        set: function(a, b) {
            var c = a.style;
            a = a.currentStyle;
            var g = m.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "",
                d = a && a.filter || c.filter || "";
            c.zoom = 1;
            (1 <= b || "" === b) && "" === m.trim(d.replace(ab, "")) && c.removeAttribute && (c.removeAttribute("filter"), "" === b || a && !a.filter) || (c.filter = ab.test(d) ? d.replace(ab, g) : d + " " + g)
        }
    });
    m.cssHooks.marginRight = T(A.reliableMarginRight,
        function(a, b) {
            return b ? $a(a, {
                display: "inline-block"
            }, ga, [a, "marginRight"]) : void 0
        });
    m.cssHooks.marginLeft = T(A.reliableMarginLeft, function(a, b) {
        return b ? (parseFloat(ga(a, "marginLeft")) || (m.contains(a.ownerDocument, a) ? a.getBoundingClientRect().left - $a(a, {
            marginLeft: 0
        }, function() {
            return a.getBoundingClientRect().left
        }) : 0)) + "px" : void 0
    });
    m.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(a, b) {
        m.cssHooks[a + b] = {
            expand: function(c) {
                var g = 0,
                    d = {};
                for (c = "string" == typeof c ? c.split(" ") : [c]; 4 > g; g++) d[a + ua[g] +
                b] = c[g] || c[g - 2] || c[0];
                return d
            }
        };
        tb.test(a) || (m.cssHooks[a + b].set = ba)
    });
    m.fn.extend({
        css: function(a, b) {
            return ka(this, function(a, b, c) {
                var g, d = {},
                    f = 0;
                if (m.isArray(b)) {
                    c = va(a);
                    for (g = b.length; g > f; f++) d[b[f]] = m.css(a, b[f], !1, c);
                    return d
                }
                return void 0 !== c ? m.style(a, b, c) : m.css(a, b)
            }, a, b, 1 < arguments.length)
        },
        show: function() {
            return W(this, !0)
        },
        hide: function() {
            return W(this)
        },
        toggle: function(a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                Ha(this) ? m(this).show() : m(this).hide()
            })
        }
    });
    m.Tween = O;
    O.prototype = {
        constructor: O,
        init: function(a, b, c, g, d, f) {
            this.elem = a;
            this.prop = c;
            this.easing = d || m.easing._default;
            this.options = b;
            this.start = this.now = this.cur();
            this.end = g;
            this.unit = f || (m.cssNumber[c] ? "" : "px")
        },
        cur: function() {
            var a = O.propHooks[this.prop];
            return a && a.get ? a.get(this) : O.propHooks._default.get(this)
        },
        run: function(a) {
            var b, c = O.propHooks[this.prop];
            return this.options.duration ? this.pos = b = m.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now =
                (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : O.propHooks._default.set(this), this
        }
    };
    O.prototype.init.prototype = O.prototype;
    O.propHooks = {
        _default: {
            get: function(a) {
                var b;
                return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = m.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0)
            },
            set: function(a) {
                m.fx.step[a.prop] ? m.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[m.cssProps[a.prop]] && !m.cssHooks[a.prop] ?
                    a.elem[a.prop] = a.now : m.style(a.elem, a.prop, a.now + a.unit)
            }
        }
    };
    O.propHooks.scrollTop = O.propHooks.scrollLeft = {
        set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    };
    m.easing = {
        linear: function(a) {
            return a
        },
        swing: function(a) {
            return .5 - Math.cos(a * Math.PI) / 2
        },
        _default: "swing"
    };
    m.fx = O.prototype.init;
    m.fx.step = {};
    var Aa, La, cc = /^(?:toggle|show|hide)$/,
        dc = /queueHooks$/;
    m.Animation = m.extend(R, {
        tweeners: {
            "*": [function(a, b) {
                var c = this.createTween(a, b);
                return q(c.elem, a, Pa.exec(b), c), c
            }]
        },
        tweener: function(a,
                          b) {
            m.isFunction(a) ? (b = a, a = ["*"]) : a = a.match(ea);
            for (var c, g = 0, d = a.length; d > g; g++) c = a[g], R.tweeners[c] = R.tweeners[c] || [], R.tweeners[c].unshift(b)
        },
        prefilters: [function(a, b, c) {
            var g, d, f, e, k, h, n, r = this,
                t = {},
                q = a.style,
                l = a.nodeType && Ha(a),
                u = m._data(a, "fxshow");
            c.queue || (e = m._queueHooks(a, "fx"), null == e.unqueued && (e.unqueued = 0, k = e.empty.fire, e.empty.fire = function() {
                e.unqueued || k()
            }), e.unqueued++, r.always(function() {
                r.always(function() {
                    e.unqueued--;
                    m.queue(a, "fx").length || e.empty.fire()
                })
            }));
            1 === a.nodeType &&
            ("height" in b || "width" in b) && (c.overflow = [q.overflow, q.overflowX, q.overflowY], h = m.css(a, "display"), n = "none" === h ? m._data(a, "olddisplay") || Y(a.nodeName) : h, "inline" === n && "none" === m.css(a, "float") && (A.inlineBlockNeedsLayout && "inline" !== Y(a.nodeName) ? q.zoom = 1 : q.display = "inline-block"));
            c.overflow && (q.overflow = "hidden", A.shrinkWrapBlocks() || r.always(function() {
                q.overflow = c.overflow[0];
                q.overflowX = c.overflow[1];
                q.overflowY = c.overflow[2]
            }));
            for (g in b)
                if (d = b[g], cc.exec(d)) {
                    if (delete b[g], f = f || "toggle" ===
                        d, d === (l ? "hide" : "show")) {
                        if ("show" !== d || !u || void 0 === u[g]) continue;
                        l = !0
                    }
                    t[g] = u && u[g] || m.style(a, g)
                } else h = void 0;
            if (m.isEmptyObject(t)) "inline" === ("none" === h ? Y(a.nodeName) : h) && (q.display = h);
            else
                for (g in u ? "hidden" in u && (l = u.hidden) : u = m._data(a, "fxshow", {}), f && (u.hidden = !l), l ? m(a).show() : r.done(function() {
                    m(a).hide()
                }), r.done(function() {
                    var b;
                    m._removeData(a, "fxshow");
                    for (b in t) m.style(a, b, t[b])
                }), t) b = V(l ? u[g] : 0, g, r), g in u || (u[g] = b.start, l && (b.end = b.start, b.start = "width" === g || "height" === g ? 1 : 0))
        }],
        prefilter: function(a, b) {
            b ? R.prefilters.unshift(a) : R.prefilters.push(a)
        }
    });
    m.speed = function(a, b, c) {
        var g = a && "object" == typeof a ? m.extend({}, a) : {
            complete: c || !c && b || m.isFunction(a) && a,
            duration: a,
            easing: c && b || b && !m.isFunction(b) && b
        };
        return g.duration = m.fx.off ? 0 : "number" == typeof g.duration ? g.duration : g.duration in m.fx.speeds ? m.fx.speeds[g.duration] : m.fx.speeds._default, (null == g.queue || !0 === g.queue) && (g.queue = "fx"), g.old = g.complete, g.complete = function() {
            m.isFunction(g.old) && g.old.call(this);
            g.queue && m.dequeue(this,
                g.queue)
        }, g
    };
    m.fn.extend({
        fadeTo: function(a, b, c, g) {
            return this.filter(Ha).css("opacity", 0).show().end().animate({
                opacity: b
            }, a, c, g)
        },
        animate: function(a, b, c, g) {
            var d = m.isEmptyObject(a),
                f = m.speed(b, c, g);
            b = function() {
                var b = R(this, m.extend({}, a), f);
                (d || m._data(this, "finish")) && b.stop(!0)
            };
            return b.finish = b, d || !1 === f.queue ? this.each(b) : this.queue(f.queue, b)
        },
        stop: function(a, b, c) {
            var g = function(a) {
                var b = a.stop;
                delete a.stop;
                b(c)
            };
            return "string" != typeof a && (c = b, b = a, a = void 0), b && !1 !== a && this.queue(a || "fx", []), this.each(function() {
                var b = !0,
                    d = null != a && a + "queueHooks",
                    f = m.timers,
                    e = m._data(this);
                if (d) e[d] && e[d].stop && g(e[d]);
                else
                    for (d in e) e[d] && e[d].stop && dc.test(d) && g(e[d]);
                for (d = f.length; d--;) f[d].elem !== this || null != a && f[d].queue !== a || (f[d].anim.stop(c), b = !1, f.splice(d, 1));
                !b && c || m.dequeue(this, a)
            })
        },
        finish: function(a) {
            return !1 !== a && (a = a || "fx"), this.each(function() {
                var b, c = m._data(this),
                    g = c[a + "queue"];
                b = c[a + "queueHooks"];
                var d = m.timers,
                    f = g ? g.length : 0;
                c.finish = !0;
                m.queue(this, a, []);
                b && b.stop && b.stop.call(this, !0);
                for (b = d.length; b--;) d[b].elem === this && d[b].queue === a && (d[b].anim.stop(!0), d.splice(b, 1));
                for (b = 0; f > b; b++) g[b] && g[b].finish && g[b].finish.call(this);
                delete c.finish
            })
        }
    });
    m.each(["toggle", "show", "hide"], function(a, b) {
        var c = m.fn[b];
        m.fn[b] = function(a, g, d) {
            return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(Z(b, !0), a, g, d)
        }
    });
    m.each({
        slideDown: Z("show"),
        slideUp: Z("hide"),
        slideToggle: Z("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(a,
                b) {
        m.fn[a] = function(a, c, g) {
            return this.animate(b, a, c, g)
        }
    });
    m.timers = [];
    m.fx.tick = function() {
        var a, b = m.timers,
            c = 0;
        for (Aa = m.now(); c < b.length; c++) a = b[c], a() || b[c] !== a || b.splice(c--, 1);
        b.length || m.fx.stop();
        Aa = void 0
    };
    m.fx.timer = function(a) {
        m.timers.push(a);
        a() ? m.fx.start() : m.timers.pop()
    };
    m.fx.interval = 13;
    m.fx.start = function() {
        La || (La = a.setInterval(m.fx.tick, m.fx.interval))
    };
    m.fx.stop = function() {
        a.clearInterval(La);
        La = null
    };
    m.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    };
    m.fn.delay = function(b, c) {
        return b =
            m.fx ? m.fx.speeds[b] || b : b, c = c || "fx", this.queue(c, function(c, g) {
            var d = a.setTimeout(c, b);
            g.stop = function() {
                a.clearTimeout(d)
            }
        })
    };
    (function() {
        var a, b = z.createElement("input"),
            c;
        z.createElement("div");
        var g = z.createElement("select"),
            d = g.appendChild(z.createElement("option"));
        c = z.createElement("div");
        c.setAttribute("className", "t");
        c.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
        c.getElementsByTagName("a");
        b.setAttribute("type", "checkbox");
        c.appendChild(b);
        a = c.getElementsByTagName("a")[0];
        a.style.cssText = "top:1px";
        A.getSetAttribute = "t" !== c.className;
        A.style = /top/.test(a.getAttribute("style"));
        A.hrefNormalized = "/a" === a.getAttribute("href");
        A.checkOn = !!b.value;
        A.optSelected = d.selected;
        A.enctype = !!z.createElement("form").enctype;
        g.disabled = !0;
        A.optDisabled = !d.disabled;
        b = z.createElement("input");
        b.setAttribute("value", "");
        A.input = "" === b.getAttribute("value");
        b.value = "t";
        b.setAttribute("type", "radio");
        A.radioValue = "t" === b.value
    })();
    var ec = /\r/g;
    m.fn.extend({
        val: function(a) {
            var b, c, g, d =
                this[0];
            if (arguments.length) return g = m.isFunction(a), this.each(function(c) {
                var d;
                1 === this.nodeType && (d = g ? a.call(this, c, m(this).val()) : a, null == d ? d = "" : "number" == typeof d ? d += "" : m.isArray(d) && (d = m.map(d, function(a) {
                    return null == a ? "" : a + ""
                })), b = m.valHooks[this.type] || m.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, d, "value") || (this.value = d))
            });
            if (d) return b = m.valHooks[d.type] || m.valHooks[d.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(d, "value")) ? c : (c = d.value, "string" ==
            typeof c ? c.replace(ec, "") : null == c ? "" : c)
        }
    });
    m.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = m.find.attr(a, "value");
                    return null != b ? b : m.trim(m.text(a))
                }
            },
            select: {
                get: function(a) {
                    for (var b, c = a.options, g = a.selectedIndex, d = "select-one" === a.type || 0 > g, f = d ? null : [], e = d ? g + 1 : c.length, k = 0 > g ? e : d ? g : 0; e > k; k++)
                        if (b = c[k], !(!b.selected && k !== g || (A.optDisabled ? b.disabled : null !== b.getAttribute("disabled")) || b.parentNode.disabled && m.nodeName(b.parentNode, "optgroup"))) {
                            if (a = m(b).val(), d) return a;
                            f.push(a)
                        }
                    return f
                },
                set: function(a,
                              b) {
                    var c, g, d = a.options;
                    b = m.makeArray(b);
                    for (var f = d.length; f--;)
                        if (g = d[f], 0 <= m.inArray(m.valHooks.option.get(g), b)) try {
                            g.selected = c = !0
                        } catch (e) {
                            g.scrollHeight
                        } else g.selected = !1;
                    return c || (a.selectedIndex = -1), d
                }
            }
        }
    });
    m.each(["radio", "checkbox"], function() {
        m.valHooks[this] = {
            set: function(a, b) {
                return m.isArray(b) ? a.checked = -1 < m.inArray(m(a).val(), b) : void 0
            }
        };
        A.checkOn || (m.valHooks[this].get = function(a) {
            return null === a.getAttribute("value") ? "on" : a.value
        })
    });
    var Da, wb, la = m.expr.attrHandle,
        bb = /^(?:checked|selected)$/i,
        za = A.getSetAttribute,
        Ma = A.input;
    m.fn.extend({
        attr: function(a, b) {
            return ka(this, m.attr, a, b, 1 < arguments.length)
        },
        removeAttr: function(a) {
            return this.each(function() {
                m.removeAttr(this, a)
            })
        }
    });
    m.extend({
        attr: function(a, b, c) {
            var g, d, f = a.nodeType;
            if (3 !== f && 8 !== f && 2 !== f) return "undefined" == typeof a.getAttribute ? m.prop(a, b, c) : (1 === f && m.isXMLDoc(a) || (b = b.toLowerCase(), d = m.attrHooks[b] || (m.expr.match.bool.test(b) ? wb : Da)), void 0 !== c ? null === c ? void m.removeAttr(a, b) : d && "set" in d && void 0 !== (g = d.set(a, c, b)) ? g : (a.setAttribute(b,
                c + ""), c) : d && "get" in d && null !== (g = d.get(a, b)) ? g : (g = m.find.attr(a, b), null == g ? void 0 : g))
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (!A.radioValue && "radio" === b && m.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b
                    }
                }
            }
        },
        removeAttr: function(a, b) {
            var c, g = 0,
                d = b && b.match(ea);
            if (d && 1 === a.nodeType)
                for (; b = d[g++];) c = m.propFix[b] || b, m.expr.match.bool.test(b) ? Ma && za || !bb.test(b) ? a[c] = !1 : a[m.camelCase("default-" + b)] = a[c] = !1 : m.attr(a, b, ""), a.removeAttribute(za ? b : c)
        }
    });
    wb = {
        set: function(a,
                      b, c) {
            return !1 === b ? m.removeAttr(a, c) : Ma && za || !bb.test(c) ? a.setAttribute(!za && m.propFix[c] || c, c) : a[m.camelCase("default-" + c)] = a[c] = !0, c
        }
    };
    m.each(m.expr.match.bool.source.match(/\w+/g), function(a, b) {
        var c = la[b] || m.find.attr;
        Ma && za || !bb.test(b) ? la[b] = function(a, b, g) {
            var d, f;
            return g || (f = la[b], la[b] = d, d = null != c(a, b, g) ? b.toLowerCase() : null, la[b] = f), d
        } : la[b] = function(a, b, c) {
            return c ? void 0 : a[m.camelCase("default-" + b)] ? b.toLowerCase() : null
        }
    });
    Ma && za || (m.attrHooks.value = {
        set: function(a, b, c) {
            return m.nodeName(a,
                "input") ? void(a.defaultValue = b) : Da && Da.set(a, b, c)
        }
    });
    za || (Da = {
        set: function(a, b, c) {
            var g = a.getAttributeNode(c);
            return g || a.setAttributeNode(g = a.ownerDocument.createAttribute(c)), g.value = b += "", "value" === c || b === a.getAttribute(c) ? b : void 0
        }
    }, la.id = la.name = la.coords = function(a, b, c) {
        var g;
        return c ? void 0 : (g = a.getAttributeNode(b)) && "" !== g.value ? g.value : null
    }, m.valHooks.button = {
        get: function(a, b) {
            return (a = a.getAttributeNode(b)) && a.specified ? a.value : void 0
        },
        set: Da.set
    }, m.attrHooks.contenteditable = {
        set: function(a,
                      b, c) {
            Da.set(a, "" === b ? !1 : b, c)
        }
    }, m.each(["width", "height"], function(a, b) {
        m.attrHooks[b] = {
            set: function(a, c) {
                return "" === c ? (a.setAttribute(b, "auto"), c) : void 0
            }
        }
    }));
    A.style || (m.attrHooks.style = {
        get: function(a) {
            return a.style.cssText || void 0
        },
        set: function(a, b) {
            return a.style.cssText = b + ""
        }
    });
    var fc = /^(?:input|select|textarea|button|object)$/i,
        gc = /^(?:a|area)$/i;
    m.fn.extend({
        prop: function(a, b) {
            return ka(this, m.prop, a, b, 1 < arguments.length)
        },
        removeProp: function(a) {
            return a = m.propFix[a] || a, this.each(function() {
                try {
                    this[a] =
                        void 0, delete this[a]
                } catch (b) {}
            })
        }
    });
    m.extend({
        prop: function(a, b, c) {
            var g, d, f = a.nodeType;
            if (3 !== f && 8 !== f && 2 !== f) return 1 === f && m.isXMLDoc(a) || (b = m.propFix[b] || b, d = m.propHooks[b]), void 0 !== c ? d && "set" in d && void 0 !== (g = d.set(a, c, b)) ? g : a[b] = c : d && "get" in d && null !== (g = d.get(a, b)) ? g : a[b]
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    var b = m.find.attr(a, "tabindex");
                    return b ? parseInt(b, 10) : fc.test(a.nodeName) || gc.test(a.nodeName) && a.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    });
    A.hrefNormalized || m.each(["href",
        "src"
    ], function(a, b) {
        m.propHooks[b] = {
            get: function(a) {
                return a.getAttribute(b, 4)
            }
        }
    });
    A.optSelected || (m.propHooks.selected = {
        get: function(a) {
            a = a.parentNode;
            return a && (a.selectedIndex, a.parentNode && a.parentNode.selectedIndex), null
        }
    });
    m.each("tabIndex readOnly maxLength cellSpacing cellPadding rowSpan colSpan useMap frameBorder contentEditable".split(" "), function() {
        m.propFix[this.toLowerCase()] = this
    });
    A.enctype || (m.propFix.enctype = "encoding");
    var cb = /[\t\r\n\f]/g;
    m.fn.extend({
        addClass: function(a) {
            var b,
                c, g, d, f, e, k = 0;
            if (m.isFunction(a)) return this.each(function(b) {
                m(this).addClass(a.call(this, b, I(this)))
            });
            if ("string" == typeof a && a)
                for (b = a.match(ea) || []; c = this[k++];)
                    if (d = I(c), g = 1 === c.nodeType && (" " + d + " ").replace(cb, " ")) {
                        for (e = 0; f = b[e++];) 0 > g.indexOf(" " + f + " ") && (g += f + " ");
                        g = m.trim(g);
                        d !== g && m.attr(c, "class", g)
                    }
            return this
        },
        removeClass: function(a) {
            var b, c, g, d, f, e, k = 0;
            if (m.isFunction(a)) return this.each(function(b) {
                m(this).removeClass(a.call(this, b, I(this)))
            });
            if (!arguments.length) return this.attr("class",
                "");
            if ("string" == typeof a && a)
                for (b = a.match(ea) || []; c = this[k++];)
                    if (d = I(c), g = 1 === c.nodeType && (" " + d + " ").replace(cb, " ")) {
                        for (e = 0; f = b[e++];)
                            for (; - 1 < g.indexOf(" " + f + " ");) g = g.replace(" " + f + " ", " ");
                        g = m.trim(g);
                        d !== g && m.attr(c, "class", g)
                    }
            return this
        },
        toggleClass: function(a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : m.isFunction(a) ? this.each(function(c) {
                m(this).toggleClass(a.call(this, c, I(this), b), b)
            }) : this.each(function() {
                var b, g, d, f;
                if ("string" ===
                    c)
                    for (g = 0, d = m(this), f = a.match(ea) || []; b = f[g++];) d.hasClass(b) ? d.removeClass(b) : d.addClass(b);
                else void 0 !== a && "boolean" !== c || (b = I(this), b && m._data(this, "__className__", b), m.attr(this, "class", b || !1 === a ? "" : m._data(this, "__className__") || ""))
            })
        },
        hasClass: function(a) {
            var b, c = 0;
            for (a = " " + a + " "; b = this[c++];)
                if (1 === b.nodeType && -1 < (" " + I(b) + " ").replace(cb, " ").indexOf(a)) return !0;
            return !1
        }
    });
    m.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),
        function(a, b) {
            m.fn[b] = function(a, c) {
                return 0 < arguments.length ? this.on(b, null, a, c) : this.trigger(b)
            }
        });
    m.fn.extend({
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        }
    });
    var hc = a.location,
        db = m.now(),
        eb = /\?/,
        ic = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    m.parseJSON = function(b) {
        if (a.JSON && a.JSON.parse) return a.JSON.parse(b + "");
        var c, g = null,
            d = m.trim(b + "");
        return d && !m.trim(d.replace(ic, function(a, b, d, f) {
            return c &&
            b && (g = 0), 0 === g ? a : (c = d || b, g += !f - !d, "")
        })) ? Function("return " + d)() : m.error("Invalid JSON: " + b)
    };
    m.parseXML = function(b) {
        var c, g;
        if (!b || "string" != typeof b) return null;
        try {
            a.DOMParser ? (g = new a.DOMParser, c = g.parseFromString(b, "text/xml")) : (c = new a.ActiveXObject("Microsoft.XMLDOM"), c.async = "false", c.loadXML(b))
        } catch (d) {
            c = void 0
        }
        return c && c.documentElement && !c.getElementsByTagName("parsererror").length || m.error("Invalid XML: " + b), c
    };
    var jc = /#.*$/,
        xb = /([?&])_=[^&]*/,
        kc = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        lc =
            /^(?:GET|HEAD)$/,
        mc = /^\/\//,
        yb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        zb = {},
        Sa = {},
        Ab = "*/".concat("*"),
        fb = hc.href,
        Ea = yb.exec(fb.toLowerCase()) || [];
    m.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: fb,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Ea[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Ab,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": m.parseJSON,
                "text xml": m.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(a, b) {
            return b ? H(H(a, m.ajaxSettings), b) : H(m.ajaxSettings, a)
        },
        ajaxPrefilter: wa(zb),
        ajaxTransport: wa(Sa),
        ajax: function(b, c) {
            function g(b, c, d, f) {
                var t, x, D, H, B = c;
                if (2 !== w) {
                    w = 2;
                    h && a.clearTimeout(h);
                    r = void 0;
                    k = f || "";
                    E.readyState = 0 < b ? 4 : 0;
                    f = 200 <= b && 300 > b || 304 === b;
                    if (d) {
                        D = q;
                        for (var G = E, F, I, L, Q, R = D.contents, S = D.dataTypes;
                             "*" === S[0];) S.shift(), void 0 === I && (I = D.mimeType || G.getResponseHeader("Content-Type"));
                        if (I)
                            for (Q in R)
                                if (R[Q] && R[Q].test(I)) {
                                    S.unshift(Q);
                                    break
                                }
                        if (S[0] in d) L = S[0];
                        else {
                            for (Q in d) {
                                if (!S[0] || D.converters[Q + " " + S[0]]) {
                                    L = Q;
                                    break
                                }
                                F || (F = Q)
                            }
                            L = L || F
                        }
                        D = L ? (L !== S[0] && S.unshift(L), d[L]) : void 0
                    }
                    var X;
                    a: {
                        d = q;F = D;I = E;L = f;
                        var C, N, J;D = {};G = d.dataTypes.slice();
                        if (G[1])
                            for (C in d.converters) D[C.toLowerCase()] =
                                d.converters[C];
                        for (Q = G.shift(); Q;)
                            if (d.responseFields[Q] && (I[d.responseFields[Q]] = F), !J && L && d.dataFilter && (F = d.dataFilter(F, d.dataType)), J = Q, Q = G.shift())
                                if ("*" === Q) Q = J;
                                else if ("*" !== J && J !== Q) {
                                    if (C = D[J + " " + Q] || D["* " + Q], !C)
                                        for (X in D)
                                            if (N = X.split(" "), N[1] === Q && (C = D[J + " " + N[0]] || D["* " + N[0]])) {
                                                !0 === C ? C = D[X] : !0 !== D[X] && (Q = N[0], G.unshift(N[1]));
                                                break
                                            }
                                    if (!0 !== C)
                                        if (C && d["throws"]) F = C(F);
                                        else try {
                                            F = C(F)
                                        } catch (qa) {
                                            X = {
                                                state: "parsererror",
                                                error: C ? qa : "No conversion from " + J + " to " + Q
                                            };
                                            break a
                                        }
                                }
                        X = {
                            state: "success",
                            data: F
                        }
                    }
                    D = X;
                    f ? (q.ifModified && (H = E.getResponseHeader("Last-Modified"), H && (m.lastModified[e] = H), H = E.getResponseHeader("etag"), H && (m.etag[e] = H)), 204 === b || "HEAD" === q.type ? B = "nocontent" : 304 === b ? B = "notmodified" : (B = D.state, t = D.data, x = D.error, f = !x)) : (x = B, (b || !B) && (B = "error", 0 > b && (b = 0)));
                    E.status = b;
                    E.statusText = (c || B) + "";
                    f ? p.resolveWith(l, [t, B, E]) : p.rejectWith(l, [E, B, x]);
                    E.statusCode(y);
                    y = void 0;
                    n && u.trigger(f ? "ajaxSuccess" : "ajaxError", [E, q, f ? t : x]);
                    v.fireWith(l, [E, B]);
                    n && (u.trigger("ajaxComplete", [E, q]), --m.active ||
                    m.event.trigger("ajaxStop"))
                }
            }
            "object" == typeof b && (c = b, b = void 0);
            c = c || {};
            var d, f, e, k, h, n, r, t, q = m.ajaxSetup({}, c),
                l = q.context || q,
                u = q.context && (l.nodeType || l.jquery) ? m(l) : m.event,
                p = m.Deferred(),
                v = m.Callbacks("once memory"),
                y = q.statusCode || {},
                x = {},
                H = {},
                w = 0,
                G = "canceled",
                E = {
                    readyState: 0,
                    getResponseHeader: function(a) {
                        var b;
                        if (2 === w) {
                            if (!t)
                                for (t = {}; b = kc.exec(k);) t[b[1].toLowerCase()] = b[2];
                            b = t[a.toLowerCase()]
                        }
                        return null == b ? null : b
                    },
                    getAllResponseHeaders: function() {
                        return 2 === w ? k : null
                    },
                    setRequestHeader: function(a,
                                               b) {
                        var c = a.toLowerCase();
                        return w || (a = H[c] = H[c] || a, x[a] = b), this
                    },
                    overrideMimeType: function(a) {
                        return w || (q.mimeType = a), this
                    },
                    statusCode: function(a) {
                        var b;
                        if (a)
                            if (2 > w)
                                for (b in a) y[b] = [y[b], a[b]];
                            else E.always(a[E.status]);
                        return this
                    },
                    abort: function(a) {
                        a = a || G;
                        return r && r.abort(a), g(0, a), this
                    }
                };
            if (p.promise(E).complete = v.add, E.success = E.done, E.error = E.fail, q.url = ((b || q.url || fb) + "").replace(jc, "").replace(mc, Ea[1] + "//"), q.type = c.method || c.type || q.method || q.type, q.dataTypes = m.trim(q.dataType || "*").toLowerCase().match(ea) || [""], null == q.crossDomain && (d = yb.exec(q.url.toLowerCase()), q.crossDomain = !(!d || d[1] === Ea[1] && d[2] === Ea[2] && (d[3] || ("http:" === d[1] ? "80" : "443")) === (Ea[3] || ("http:" === Ea[1] ? "80" : "443")))), q.data && q.processData && "string" != typeof q.data && (q.data = m.param(q.data, q.traditional)), D(zb, q, c, E), 2 === w) return E;
            (n = m.event && q.global) && 0 === m.active++ && m.event.trigger("ajaxStart");
            q.type = q.type.toUpperCase();
            q.hasContent = !lc.test(q.type);
            e = q.url;
            q.hasContent || (q.data && (e = q.url += (eb.test(e) ? "&" : "?") + q.data, delete q.data), !1 === q.cache && (q.url = xb.test(e) ? e.replace(xb, "$1_=" + db++) : e + (eb.test(e) ? "&" : "?") + "_=" + db++));
            q.ifModified && (m.lastModified[e] && E.setRequestHeader("If-Modified-Since", m.lastModified[e]), m.etag[e] && E.setRequestHeader("If-None-Match", m.etag[e]));
            (q.data && q.hasContent && !1 !== q.contentType || c.contentType) && E.setRequestHeader("Content-Type", q.contentType);
            E.setRequestHeader("Accept", q.dataTypes[0] && q.accepts[q.dataTypes[0]] ? q.accepts[q.dataTypes[0]] + ("*" !== q.dataTypes[0] ? ", " + Ab + "; q=0.01" : "") : q.accepts["*"]);
            for (f in q.headers) E.setRequestHeader(f, q.headers[f]);
            if (q.beforeSend && (!1 === q.beforeSend.call(l, E, q) || 2 === w)) return E.abort();
            G = "abort";
            for (f in {
                success: 1,
                error: 1,
                complete: 1
            }) E[f](q[f]);
            if (r = D(Sa, q, c, E)) {
                if (E.readyState = 1, n && u.trigger("ajaxSend", [E, q]), 2 === w) return E;
                q.async && 0 < q.timeout && (h = a.setTimeout(function() {
                    E.abort("timeout")
                }, q.timeout));
                try {
                    w = 1, r.send(x, g)
                } catch (F) {
                    if (!(2 > w)) throw F;
                    g(-1, F)
                }
            } else g(-1, "No Transport");
            return E
        },
        getJSON: function(a, b, c) {
            return m.get(a, b, c, "json")
        },
        getScript: function(a,
                            b) {
            return m.get(a, void 0, b, "script")
        }
    });
    m.each(["get", "post"], function(a, b) {
        m[b] = function(a, c, g, d) {
            return m.isFunction(c) && (d = d || g, g = c, c = void 0), m.ajax(m.extend({
                url: a,
                type: b,
                dataType: d,
                data: c,
                success: g
            }, m.isPlainObject(a) && a))
        }
    });
    m._evalUrl = function(a) {
        return m.ajax({
            url: a,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            "throws": !0
        })
    };
    m.fn.extend({
        wrapAll: function(a) {
            if (m.isFunction(a)) return this.each(function(b) {
                m(this).wrapAll(a.call(this, b))
            });
            if (this[0]) {
                var b = m(a, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && b.insertBefore(this[0]);
                b.map(function() {
                    for (var a = this; a.firstChild && 1 === a.firstChild.nodeType;) a = a.firstChild;
                    return a
                }).append(this)
            }
            return this
        },
        wrapInner: function(a) {
            return m.isFunction(a) ? this.each(function(b) {
                m(this).wrapInner(a.call(this, b))
            }) : this.each(function() {
                var b = m(this),
                    c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function(a) {
            var b = m.isFunction(a);
            return this.each(function(c) {
                m(this).wrapAll(b ? a.call(this, c) : a)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                m.nodeName(this,
                    "body") || m(this).replaceWith(this.childNodes)
            }).end()
        }
    });
    m.expr.filters.hidden = function(a) {
        if (A.reliableHiddenOffsets()) a = 0 >= a.offsetWidth && 0 >= a.offsetHeight && !a.getClientRects().length;
        else a: {
            for (; a && 1 === a.nodeType;) {
                if ("none" === (a.style && a.style.display || m.css(a, "display")) || "hidden" === a.type) {
                    a = !0;
                    break a
                }
                a = a.parentNode
            }
            a = !1
        }
        return a
    };
    m.expr.filters.visible = function(a) {
        return !m.expr.filters.hidden(a)
    };
    var nc = /%20/g,
        Ob = /\[\]$/,
        Bb = /\r?\n/g,
        oc = /^(?:submit|button|image|reset|file)$/i,
        pc = /^(?:input|select|textarea|keygen)/i;
    m.param = function(a, b) {
        var c, g = [],
            d = function(a, b) {
                b = m.isFunction(b) ? b() : null == b ? "" : b;
                g[g.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
            };
        if (void 0 === b && (b = m.ajaxSettings && m.ajaxSettings.traditional), m.isArray(a) || a.jquery && !m.isPlainObject(a)) m.each(a, function() {
            d(this.name, this.value)
        });
        else
            for (c in a) Q(c, a[c], b, d);
        return g.join("&").replace(nc, "+")
    };
    m.fn.extend({
        serialize: function() {
            return m.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var a = m.prop(this,
                    "elements");
                return a ? m.makeArray(a) : this
            }).filter(function() {
                var a = this.type;
                return this.name && !m(this).is(":disabled") && pc.test(this.nodeName) && !oc.test(a) && (this.checked || !Qa.test(a))
            }).map(function(a, b) {
                a = m(this).val();
                return null == a ? null : m.isArray(a) ? m.map(a, function(a) {
                    return {
                        name: b.name,
                        value: a.replace(Bb, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: a.replace(Bb, "\r\n")
                }
            }).get()
        }
    });
    m.ajaxSettings.xhr = void 0 !== a.ActiveXObject ? function() {
        return this.isLocal ? xa() : 8 < z.documentMode ? X() : /^(get|post|head|put|delete|options)$/i.test(this.type) &&
            X() || xa()
    } : X;
    var qc = 0,
        Na = {},
        Oa = m.ajaxSettings.xhr();
    a.attachEvent && a.attachEvent("onunload", function() {
        for (var a in Na) Na[a](void 0, !0)
    });
    A.cors = !!Oa && "withCredentials" in Oa;
    (Oa = A.ajax = !!Oa) && m.ajaxTransport(function(b) {
        if (!b.crossDomain || A.cors) {
            var c;
            return {
                send: function(g, d) {
                    var f, e = b.xhr(),
                        k = ++qc;
                    if (e.open(b.type, b.url, b.async, b.username, b.password), b.xhrFields)
                        for (f in b.xhrFields) e[f] = b.xhrFields[f];
                    b.mimeType && e.overrideMimeType && e.overrideMimeType(b.mimeType);
                    b.crossDomain || g["X-Requested-With"] ||
                    (g["X-Requested-With"] = "XMLHttpRequest");
                    for (f in g) void 0 !== g[f] && e.setRequestHeader(f, g[f] + "");
                    e.send(b.hasContent && b.data || null);
                    c = function(a, g) {
                        var f, h, n;
                        if (c && (g || 4 === e.readyState))
                            if (delete Na[k], c = void 0, e.onreadystatechange = m.noop, g) 4 !== e.readyState && e.abort();
                            else {
                                n = {};
                                f = e.status;
                                "string" == typeof e.responseText && (n.text = e.responseText);
                                try {
                                    h = e.statusText
                                } catch (r) {
                                    h = ""
                                }
                                f || !b.isLocal || b.crossDomain ? 1223 === f && (f = 204) : f = n.text ? 200 : 404
                            }
                        n && d(f, h, n, e.getAllResponseHeaders())
                    };
                    b.async ? 4 === e.readyState ?
                        a.setTimeout(c) : e.onreadystatechange = Na[k] = c : c()
                },
                abort: function() {
                    c && c(void 0, !0)
                }
            }
        }
    });
    m.ajaxPrefilter(function(a) {
        a.crossDomain && (a.contents.script = !1)
    });
    m.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(a) {
                return m.globalEval(a), a
            }
        }
    });
    m.ajaxPrefilter("script", function(a) {
        void 0 === a.cache && (a.cache = !1);
        a.crossDomain && (a.type = "GET", a.global = !1)
    });
    m.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var b, c = z.head || m("head")[0] || z.documentElement;
            return {
                send: function(g, d) {
                    b = z.createElement("script");
                    b.async = !0;
                    a.scriptCharset && (b.charset = a.scriptCharset);
                    b.src = a.url;
                    b.onload = b.onreadystatechange = function(a, c) {
                        (c || !b.readyState || /loaded|complete/.test(b.readyState)) && (b.onload = b.onreadystatechange = null, b.parentNode && b.parentNode.removeChild(b), b = null, c || d(200, "success"))
                    };
                    c.insertBefore(b, c.firstChild)
                },
                abort: function() {
                    b && b.onload(void 0, !0)
                }
            }
        }
    });
    var Cb = [],
        gb = /(=)\?(?=&|$)|\?\?/;
    m.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = Cb.pop() || m.expando + "_" + db++;
            return this[a] = !0, a
        }
    });
    m.ajaxPrefilter("json jsonp", function(b, c, g) {
        var d, f, e, k = !1 !== b.jsonp && (gb.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && gb.test(b.data) && "data");
        return k || "jsonp" === b.dataTypes[0] ? (d = b.jsonpCallback = m.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, k ? b[k] = b[k].replace(gb,
            "$1" + d) : !1 !== b.jsonp && (b.url += (eb.test(b.url) ? "&" : "?") + b.jsonp + "=" + d), b.converters["script json"] = function() {
            return e || m.error(d + " was not called"), e[0]
        }, b.dataTypes[0] = "json", f = a[d], a[d] = function() {
            e = arguments
        }, g.always(function() {
            void 0 === f ? m(a).removeProp(d) : a[d] = f;
            b[d] && (b.jsonpCallback = c.jsonpCallback, Cb.push(d));
            e && m.isFunction(f) && f(e[0]);
            e = f = void 0
        }), "script") : void 0
    });
    A.createHTMLDocument = function() {
        if (!z.implementation.createHTMLDocument) return !1;
        var a = z.implementation.createHTMLDocument("");
        return a.body.innerHTML = "<form></form><form></form>", 2 === a.body.childNodes.length
    }();
    m.parseHTML = function(a, b, c) {
        if (!a || "string" != typeof a) return null;
        "boolean" == typeof b && (c = b, b = !1);
        b = b || (A.createHTMLDocument ? z.implementation.createHTMLDocument("") : z);
        var g = pb.exec(a);
        c = !c && [];
        return g ? [b.createElement(g[1])] : (g = y([a], b, c), c && c.length && m(c).remove(), m.merge([], g.childNodes))
    };
    var Db = m.fn.load;
    m.fn.load = function(a, b, c) {
        if ("string" != typeof a && Db) return Db.apply(this, arguments);
        var g, d, f, e = this,
            k = a.indexOf(" ");
        return -1 < k && (g = m.trim(a.slice(k, a.length)), a = a.slice(0, k)), m.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (d = "POST"), 0 < e.length && m.ajax({
            url: a,
            type: d || "GET",
            dataType: "html",
            data: b
        }).done(function(a) {
            f = arguments;
            e.html(g ? m("<div>").append(m.parseHTML(a)).find(g) : a)
        }).always(c && function(a, b) {
            e.each(function() {
                c.apply(e, f || [a.responseText, b, a])
            })
        }), this
    };
    m.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(a, b) {
        m.fn[b] = function(a) {
            return this.on(b, a)
        }
    });
    m.expr.filters.animated = function(a) {
        return m.grep(m.timers, function(b) {
            return a === b.elem
        }).length
    };
    m.offset = {
        setOffset: function(a, b, c) {
            var g, d, f, e, k, h, n = m.css(a, "position"),
                r = m(a),
                t = {};
            "static" === n && (a.style.position = "relative");
            k = r.offset();
            f = m.css(a, "top");
            h = m.css(a, "left");
            ("absolute" === n || "fixed" === n) && -1 < m.inArray("auto", [f, h]) ? (g = r.position(), e = g.top, d = g.left) : (e = parseFloat(f) || 0, d = parseFloat(h) || 0);
            m.isFunction(b) && (b = b.call(a, c, m.extend({}, k)));
            null != b.top && (t.top = b.top - k.top + e);
            null != b.left &&
            (t.left = b.left - k.left + d);
            "using" in b ? b.using.call(a, t) : r.css(t)
        }
    };
    m.fn.extend({
        offset: function(a) {
            if (arguments.length) return void 0 === a ? this : this.each(function(b) {
                m.offset.setOffset(this, a, b)
            });
            var b, c, g = {
                    top: 0,
                    left: 0
                },
                d = this[0],
                f = d && d.ownerDocument;
            if (f) return b = f.documentElement, m.contains(b, d) ? ("undefined" != typeof d.getBoundingClientRect && (g = d.getBoundingClientRect()), c = ma(f), {
                    top: g.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0),
                    left: g.left + (c.pageXOffset || b.scrollLeft) - (b.clientLeft || 0)
                }) :
                g
        },
        position: function() {
            if (this[0]) {
                var a, b, c = {
                        top: 0,
                        left: 0
                    },
                    g = this[0];
                return "fixed" === m.css(g, "position") ? b = g.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), m.nodeName(a[0], "html") || (c = a.offset()), c.top += m.css(a[0], "borderTopWidth", !0) - a.scrollTop(), c.left += m.css(a[0], "borderLeftWidth", !0) - a.scrollLeft()), {
                    top: b.top - c.top - m.css(g, "marginTop", !0),
                    left: b.left - c.left - m.css(g, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var a = this.offsetParent; a && !m.nodeName(a,
                    "html") && "static" === m.css(a, "position");) a = a.offsetParent;
                return a || ub
            })
        }
    });
    m.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(a, b) {
        var c = /Y/.test(b);
        m.fn[a] = function(g) {
            return ka(this, function(a, g, d) {
                var f = ma(a);
                return void 0 === d ? f ? b in f ? f[b] : f.document.documentElement[g] : a[g] : void(f ? f.scrollTo(c ? m(f).scrollLeft() : d, c ? d : m(f).scrollTop()) : a[g] = d)
            }, a, g, arguments.length, null)
        }
    });
    m.each(["top", "left"], function(a, b) {
        m.cssHooks[b] = T(A.pixelPosition, function(a, c) {
            return c ? (c = ga(a, b), Ja.test(c) ?
                m(a).position()[b] + "px" : c) : void 0
        })
    });
    m.each({
        Height: "height",
        Width: "width"
    }, function(a, b) {
        m.each({
            padding: "inner" + a,
            content: b,
            "": "outer" + a
        }, function(c, g) {
            m.fn[g] = function(g, d) {
                var f = arguments.length && (c || "boolean" != typeof g),
                    e = c || (!0 === g || !0 === d ? "margin" : "border");
                return ka(this, function(b, c, g) {
                    var d;
                    return m.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (d = b.documentElement, Math.max(b.body["scroll" + a], d["scroll" + a], b.body["offset" + a], d["offset" + a], d["client" + a])) : void 0 === g ?
                        m.css(b, c, e) : m.style(b, c, g, e)
                }, b, f ? g : void 0, f, null)
            }
        })
    });
    m.fn.extend({
        bind: function(a, b, c) {
            return this.on(a, null, b, c)
        },
        unbind: function(a, b) {
            return this.off(a, null, b)
        },
        delegate: function(a, b, c, g) {
            return this.on(b, a, c, g)
        },
        undelegate: function(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        }
    });
    m.fn.size = function() {
        return this.length
    };
    m.fn.andSelf = m.fn.addBack;
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return m
    });
    var rc = a.jQuery,
        sc = a.$;
    return m.noConflict =
        function(b) {
            return a.$ === m && (a.$ = sc), b && a.jQuery === m && (a.jQuery = rc), m
        }, l || (a.jQuery = a.$ = m), m
});
"undefined" == typeof jQuery.migrateMute && (jQuery.migrateMute = !0);
(function(a, l, h) {
    function e(b) {
        var c = l.console;
        k[b] || (k[b] = !0, a.migrateWarnings.push(b), c && c.warn && !a.migrateMute && (c.warn("JQMIGRATE: " + b), a.migrateTrace && c.trace && c.trace()))
    }

    function f(b, c, g, d) {
        if (Object.defineProperty) try {
            return void Object.defineProperty(b, c, {
                configurable: !0,
                enumerable: !0,
                get: function() {
                    return e(d), g
                },
                set: function(a) {
                    e(d);
                    g = a
                }
            })
        } catch (f) {}
        a._definePropertyBroken = !0;
        b[c] = g
    }
    a.migrateVersion = "1.4.1";
    var k = {};
    a.migrateWarnings = [];
    l.console && l.console.log && l.console.log("JQMIGRATE: Migrate is installed" +
        (a.migrateMute ? "" : " with logging active") + ", version " + a.migrateVersion);
    a.migrateTrace === h && (a.migrateTrace = !0);
    a.migrateReset = function() {
        k = {};
        a.migrateWarnings.length = 0
    };
    "BackCompat" === document.compatMode && e("jQuery is not compatible with Quirks Mode");
    var d = a("<input/>", {
            size: 1
        }).attr("size") && a.attrFn,
        c = a.attr,
        b = a.attrHooks.value && a.attrHooks.value.get || function() {
            return null
        },
        g = a.attrHooks.value && a.attrHooks.value.set || function() {
            return h
        },
        r = /^(?:input|button)$/i,
        t = /^[238]$/,
        q = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
        p = /^(?:checked|selected)$/i;
    f(a, "attrFn", d || {}, "jQuery.attrFn is deprecated");
    a.attr = function(b, g, f, k) {
        var n = g.toLowerCase(),
            l = b && b.nodeType;
        return k && (4 > c.length && e("jQuery.fn.attr( props, pass ) is deprecated"), b && !t.test(l) && (d ? g in d : a.isFunction(a.fn[g]))) ? a(b)[g](f) : ("type" === g && f !== h && r.test(b.nodeName) && b.parentNode && e("Can't change the 'type' of an input or button in IE 6/7/8"), !a.attrHooks[n] && q.test(n) && (a.attrHooks[n] = {
            get: function(b, c) {
                var g, d = a.prop(b, c);
                return !0 === d || "boolean" != typeof d &&
                (g = b.getAttributeNode(c)) && !1 !== g.nodeValue ? c.toLowerCase() : h
            },
            set: function(b, c, g) {
                var d;
                return !1 === c ? a.removeAttr(b, g) : (d = a.propFix[g] || g, d in b && (b[d] = !0), b.setAttribute(g, g.toLowerCase())), g
            }
        }, p.test(n) && e("jQuery.fn.attr('" + n + "') might use property instead of attribute")), c.call(a, b, g, f))
    };
    a.attrHooks.value = {
        get: function(a, c) {
            var g = (a.nodeName || "").toLowerCase();
            return "button" === g ? b.apply(this, arguments) : ("input" !== g && "option" !== g && e("jQuery.fn.attr('value') no longer gets properties"), c in a ?
                a.value : null)
        },
        set: function(a, b) {
            var c = (a.nodeName || "").toLowerCase();
            return "button" === c ? g.apply(this, arguments) : ("input" !== c && "option" !== c && e("jQuery.fn.attr('value', val) no longer sets properties"), void(a.value = b))
        }
    };
    var v, n, u = a.fn.init,
        y = a.find,
        x = a.parseJSON,
        w = /^\s*</,
        F = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,
        G = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g,
        L = /^([^<]*)(<[\w\W]+>)([^>]*)$/;
    a.fn.init = function(b, c, g) {
        var d, f;
        return b && "string" == typeof b && !a.isPlainObject(c) &&
        (d = L.exec(a.trim(b))) && d[0] && (w.test(b) || e("$(html) HTML strings must start with '<' character"), d[3] && e("$(html) HTML text after last tag is ignored"), "#" === d[0].charAt(0) && (e("HTML string cannot start with a '#' character"), a.error("JQMIGRATE: Invalid selector string (XSS)")), c && c.context && c.context.nodeType && (c = c.context), a.parseHTML) ? u.call(this, a.parseHTML(d[2], c && c.ownerDocument || c || document, !0), c, g) : (f = u.apply(this, arguments), b && b.selector !== h ? (f.selector = b.selector, f.context = b.context) : (f.selector =
            "string" == typeof b ? b : "", b && (f.context = b.nodeType ? b : c || document)), f)
    };
    a.fn.init.prototype = a.fn;
    a.find = function(a) {
        var b = Array.prototype.slice.call(arguments);
        if ("string" == typeof a && F.test(a)) try {
            document.querySelector(a)
        } catch (c) {
            a = a.replace(G, function(a, b, c, g) {
                return "[" + b + c + '"' + g + '"]'
            });
            try {
                document.querySelector(a), e("Attribute selector with '#' must be quoted: " + b[0]), b[0] = a
            } catch (g) {
                e("Attribute selector with '#' was not fixed: " + b[0])
            }
        }
        return y.apply(this, b)
    };
    for (var C in y) Object.prototype.hasOwnProperty.call(y,
        C) && (a.find[C] = y[C]);
    a.parseJSON = function(a) {
        return a ? x.apply(this, arguments) : (e("jQuery.parseJSON requires a valid JSON string"), null)
    };
    a.uaMatch = function(a) {
        a = a.toLowerCase();
        a = /(chrome)[ \/]([\w.]+)/.exec(a) || /(webkit)[ \/]([\w.]+)/.exec(a) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a) || /(msie) ([\w.]+)/.exec(a) || 0 > a.indexOf("compatible") && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a) || [];
        return {
            browser: a[1] || "",
            version: a[2] || "0"
        }
    };
    a.browser || (v = a.uaMatch(navigator.userAgent), n = {}, v.browser && (n[v.browser] = !0, n.version = v.version), n.chrome ? n.webkit = !0 : n.webkit && (n.safari = !0), a.browser = n);
    f(a, "browser", a.browser, "jQuery.browser is deprecated");
    a.boxModel = a.support.boxModel = "CSS1Compat" === document.compatMode;
    f(a, "boxModel", a.boxModel, "jQuery.boxModel is deprecated");
    f(a.support, "boxModel", a.support.boxModel, "jQuery.support.boxModel is deprecated");
    a.sub = function() {
        function b(a, c) {
            return new b.fn.init(a, c)
        }
        a.extend(!0, b, this);
        b.superclass = this;
        b.fn = b.prototype = this();
        b.fn.constructor = b;
        b.sub = this.sub;
        b.fn.init =
            function(g, d) {
                g = a.fn.init.call(this, g, d, c);
                return g instanceof b ? g : b(g)
            };
        b.fn.init.prototype = b.fn;
        var c = b(document);
        return e("jQuery.sub() is deprecated"), b
    };
    a.fn.size = function() {
        return e("jQuery.fn.size() is deprecated; use the .length property"), this.length
    };
    var M = !1;
    a.swap && a.each(["height", "width", "reliableMarginRight"], function(b, c) {
        var g = a.cssHooks[c] && a.cssHooks[c].get;
        g && (a.cssHooks[c].get = function() {
            var a;
            return M = !0, a = g.apply(this, arguments), M = !1, a
        })
    });
    a.swap = function(a, b, c, g) {
        var d, f = {};
        M || e("jQuery.swap() is undocumented and deprecated");
        for (d in b) f[d] = a.style[d], a.style[d] = b[d];
        c = c.apply(a, g || []);
        for (d in b) a.style[d] = f[d];
        return c
    };
    a.ajaxSetup({
        converters: {
            "text json": a.parseJSON
        }
    });
    var K = a.fn.data;
    a.fn.data = function(b) {
        var c, g, d = this[0];
        return !d || "events" !== b || 1 !== arguments.length || (c = a.data(d, b), g = a._data(d, b), c !== h && c !== g || g === h) ? K.apply(this, arguments) : (e("Use of jQuery.fn.data('events') is deprecated"), g)
    };
    var E = /\/(java|ecma)script/i;
    a.clean || (a.clean = function(b, c, g, d) {
        c =
            c || document;
        c = !c.nodeType && c[0] || c;
        c = c.ownerDocument || c;
        e("jQuery.clean() is deprecated");
        var f, k, h = [];
        if (a.merge(h, a.buildFragment(b, c).childNodes), g)
            for (f = function(a) {
                return !a.type || E.test(a.type) ? d ? d.push(a.parentNode ? a.parentNode.removeChild(a) : a) : g.appendChild(a) : void 0
            }, b = 0; null != (c = h[b]); b++) a.nodeName(c, "script") && f(c) || (g.appendChild(c), "undefined" != typeof c.getElementsByTagName && (k = a.grep(a.merge([], c.getElementsByTagName("script")), f), h.splice.apply(h, [b + 1, 0].concat(k)), b += k.length));
        return h
    });
    var N = a.event.add,
        J = a.event.remove,
        Y = a.event.trigger,
        T = a.fn.toggle,
        fa = a.fn.live,
        W = a.fn.die,
        ba = a.fn.load,
        S = /\b(?:ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess)\b/,
        P = /(?:^|\s)hover(\.\S+|)\b/,
        O = function(b) {
            return "string" != typeof b || a.event.special.hover ? b : (P.test(b) && e("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"), b && b.replace(P, "mouseenter$1 mouseleave$1"))
        };
    a.event.props && "attrChange" !== a.event.props[0] && a.event.props.unshift("attrChange", "attrName", "relatedNode",
        "srcElement");
    a.event.dispatch && f(a.event, "handle", a.event.dispatch, "jQuery.event.handle is undocumented and deprecated");
    a.event.add = function(a, b, c, g, d) {
        a !== document && S.test(b) && e("AJAX events should be attached to document: " + b);
        N.call(this, a, O(b || ""), c, g, d)
    };
    a.event.remove = function(a, b, c, g, d) {
        J.call(this, a, O(b) || "", c, g, d)
    };
    a.each(["load", "unload", "error"], function(b, c) {
        a.fn[c] = function() {
            var a = Array.prototype.slice.call(arguments, 0);
            return "load" === c && "string" == typeof a[0] ? ba.apply(this, a) : (e("jQuery.fn." +
                c + "() is deprecated"), a.splice(0, 0, c), arguments.length ? this.bind.apply(this, a) : (this.triggerHandler.apply(this, a), this))
        }
    });
    a.fn.toggle = function(b, c) {
        if (!a.isFunction(b) || !a.isFunction(c)) return T.apply(this, arguments);
        e("jQuery.fn.toggle(handler, handler...) is deprecated");
        var g = arguments,
            d = b.guid || a.guid++,
            f = 0,
            k = function(c) {
                var d = (a._data(this, "lastToggle" + b.guid) || 0) % f;
                return a._data(this, "lastToggle" + b.guid, d + 1), c.preventDefault(), g[d].apply(this, arguments) || !1
            };
        for (k.guid = d; f < g.length;) g[f++].guid =
            d;
        return this.click(k)
    };
    a.fn.live = function(b, c, g) {
        return e("jQuery.fn.live() is deprecated"), fa ? fa.apply(this, arguments) : (a(this.context).on(b, this.selector, c, g), this)
    };
    a.fn.die = function(b, c) {
        return e("jQuery.fn.die() is deprecated"), W ? W.apply(this, arguments) : (a(this.context).off(b, this.selector || "**", c), this)
    };
    a.event.trigger = function(a, b, c, g) {
        return c || S.test(a) || e("Global events are undocumented and deprecated"), Y.call(this, a, b, c || document, g)
    };
    a.each("ajaxStart ajaxStop ajaxSend ajaxComplete ajaxError ajaxSuccess".split(" "),
        function(b, c) {
            a.event.special[c] = {
                setup: function() {
                    var b = this;
                    return b !== document && (a.event.add(document, c + "." + a.guid, function() {
                        a.event.trigger(c, Array.prototype.slice.call(arguments, 1), b, !0)
                    }), a._data(this, c, a.guid++)), !1
                },
                teardown: function() {
                    return this !== document && a.event.remove(document, c + "." + a._data(this, c)), !1
                }
            }
        });
    a.event.special.ready = {
        setup: function() {
            this === document && e("'ready' event is deprecated")
        }
    };
    var U = a.fn.andSelf || a.fn.addBack,
        Z = a.fn.find;
    if (a.fn.andSelf = function() {
        return e("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"),
            U.apply(this, arguments)
    }, a.fn.find = function(a) {
        var b = Z.apply(this, arguments);
        return b.context = this.context, b.selector = this.selector ? this.selector + " " + a : a, b
    }, a.Callbacks) {
        var V = a.Deferred,
            na = [
                ["resolve", "done", a.Callbacks("once memory"), a.Callbacks("once memory"), "resolved"],
                ["reject", "fail", a.Callbacks("once memory"), a.Callbacks("once memory"), "rejected"],
                ["notify", "progress", a.Callbacks("memory"), a.Callbacks("memory")]
            ];
        a.Deferred = function(b) {
            var c = V(),
                g = c.promise();
            return c.pipe = g.pipe = function() {
                var b =
                    arguments;
                return e("deferred.pipe() is deprecated"), a.Deferred(function(d) {
                    a.each(na, function(f, e) {
                        var k = a.isFunction(b[f]) && b[f];
                        c[e[1]](function() {
                            var b = k && k.apply(this, arguments);
                            b && a.isFunction(b.promise) ? b.promise().done(d.resolve).fail(d.reject).progress(d.notify) : d[e[0] + "With"](this === g ? d.promise() : this, k ? [b] : arguments)
                        })
                    });
                    b = null
                }).promise()
            }, c.isResolved = function() {
                return e("deferred.isResolved is deprecated"), "resolved" === c.state()
            }, c.isRejected = function() {
                return e("deferred.isRejected is deprecated"),
                "rejected" === c.state()
            }, b && b.call(c, c), c
        }
    }
})(jQuery, window);
! function() {
    for (var a, l = function() {}, h = "assert clear count debug dir dirxml error exception group groupCollapsed groupEnd info log markTimeline profile profileEnd table time timeEnd timeline timelineEnd timeStamp trace warn".split(" "), e = h.length, f = window.console = window.console || {}; e--;) a = h[e], f[a] || (f[a] = l)
}();
! function(a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : "undefined" != typeof exports ? module.exports = a(require("jquery")) : a(jQuery)
}(function(a) {
    var l = window.Slick || {},
        l = function() {
            var h = 0;
            return function(e, f) {
                this.defaults = {
                    accessibility: !0,
                    adaptiveHeight: !1,
                    appendArrows: a(e),
                    appendDots: a(e),
                    arrows: !0,
                    asNavFor: null,
                    prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
                    nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
                    autoplay: !1,
                    autoplaySpeed: 3E3,
                    centerMode: !1,
                    centerPadding: "50px",
                    cssEase: "ease",
                    customPaging: function(f, d) {
                        return a('<button type="button" data-role="none" role="button" tabindex="0" />').text(d + 1)
                    },
                    dots: !1,
                    dotsClass: "slick-dots",
                    draggable: !0,
                    easing: "linear",
                    edgeFriction: .35,
                    fade: !1,
                    focusOnSelect: !1,
                    infinite: !0,
                    initialSlide: 0,
                    lazyLoad: "ondemand",
                    mobileFirst: !1,
                    pauseOnHover: !0,
                    pauseOnFocus: !0,
                    pauseOnDotsHover: !1,
                    respondTo: "window",
                    responsive: null,
                    rows: 1,
                    rtl: !1,
                    slide: "",
                    slidesPerRow: 1,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    speed: 500,
                    swipe: !0,
                    swipeToSlide: !1,
                    touchMove: !0,
                    touchThreshold: 5,
                    useCSS: !0,
                    useTransform: !0,
                    variableWidth: !1,
                    vertical: !1,
                    verticalSwiping: !1,
                    waitForAnimate: !0,
                    zIndex: 1E3
                };
                this.initials = {
                    animating: !1,
                    dragging: !1,
                    autoPlayTimer: null,
                    currentDirection: 0,
                    currentLeft: null,
                    currentSlide: 0,
                    direction: 1,
                    $dots: null,
                    listWidth: null,
                    listHeight: null,
                    loadIndex: 0,
                    $nextArrow: null,
                    $prevArrow: null,
                    slideCount: null,
                    slideWidth: null,
                    $slideTrack: null,
                    $slides: null,
                    sliding: !1,
                    slideOffset: 0,
                    swipeLeft: null,
                    $list: null,
                    touchObject: {},
                    transformsEnabled: !1,
                    unslicked: !1
                };
                a.extend(this, this.initials);
                this.animProp = this.animType = this.activeBreakpoint = null;
                this.breakpoints = [];
                this.breakpointSettings = [];
                this.interrupted = this.focussed = this.cssTransitions = !1;
                this.hidden = "hidden";
                this.paused = !0;
                this.respondTo = this.positionProp = null;
                this.rowCount = 1;
                this.shouldClick = !0;
                this.$slider = a(e);
                this.transitionType = this.transformType = this.$slidesCache = null;
                this.visibilityChange = "visibilitychange";
                this.windowWidth = 0;
                this.windowTimer =
                    null;
                e = a(e).data("slick") || {};
                this.options = a.extend({}, this.defaults, f, e);
                this.currentSlide = this.options.initialSlide;
                this.originalSettings = this.options;
                "undefined" != typeof document.mozHidden ? (this.hidden = "mozHidden", this.visibilityChange = "mozvisibilitychange") : "undefined" != typeof document.webkitHidden && (this.hidden = "webkitHidden", this.visibilityChange = "webkitvisibilitychange");
                this.autoPlay = a.proxy(this.autoPlay, this);
                this.autoPlayClear = a.proxy(this.autoPlayClear, this);
                this.autoPlayIterator = a.proxy(this.autoPlayIterator,
                    this);
                this.changeSlide = a.proxy(this.changeSlide, this);
                this.clickHandler = a.proxy(this.clickHandler, this);
                this.selectHandler = a.proxy(this.selectHandler, this);
                this.setPosition = a.proxy(this.setPosition, this);
                this.swipeHandler = a.proxy(this.swipeHandler, this);
                this.dragHandler = a.proxy(this.dragHandler, this);
                this.keyHandler = a.proxy(this.keyHandler, this);
                this.instanceUid = h++;
                this.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/;
                this.registerBreakpoints();
                this.init(!0)
            }
        }();
    l.prototype.activateADA = function() {
        this.$slideTrack.find(".slick-active").attr({
            "aria-hidden": "false"
        }).find("a, input, button, select").attr({
            tabindex: "0"
        })
    };
    l.prototype.addSlide = l.prototype.slickAdd = function(h, e, f) {
        if ("boolean" == typeof e) f = e, e = null;
        else if (0 > e || e >= this.slideCount) return !1;
        this.unload();
        "number" == typeof e ? 0 === e && 0 === this.$slides.length ? a(h).appendTo(this.$slideTrack) : f ? a(h).insertBefore(this.$slides.eq(e)) : a(h).insertAfter(this.$slides.eq(e)) : !0 === f ? a(h).prependTo(this.$slideTrack) : a(h).appendTo(this.$slideTrack);
        this.$slides = this.$slideTrack.children(this.options.slide);
        this.$slideTrack.children(this.options.slide).detach();
        this.$slideTrack.append(this.$slides);
        this.$slides.each(function(f, d) {
            a(d).attr("data-slick-index", f)
        });
        this.$slidesCache = this.$slides;
        this.reinit()
    };
    l.prototype.animateHeight = function() {
        if (1 === this.options.slidesToShow && !0 === this.options.adaptiveHeight && !1 === this.options.vertical) {
            var a = this.$slides.eq(this.currentSlide).outerHeight(!0);
            this.$list.animate({
                height: a
            }, this.options.speed)
        }
    };
    l.prototype.animateSlide = function(h, e) {
        var f = {},
            k = this;
        k.animateHeight();
        !0 === k.options.rtl && !1 === k.options.vertical && (h = -h);
        !1 === k.transformsEnabled ?
            !1 === k.options.vertical ? k.$slideTrack.animate({
                left: h
            }, k.options.speed, k.options.easing, e) : k.$slideTrack.animate({
                top: h
            }, k.options.speed, k.options.easing, e) : !1 === k.cssTransitions ? (!0 === k.options.rtl && (k.currentLeft = -k.currentLeft), a({
                animStart: k.currentLeft
            }).animate({
                animStart: h
            }, {
                duration: k.options.speed,
                easing: k.options.easing,
                step: function(a) {
                    a = Math.ceil(a);
                    !1 === k.options.vertical ? (f[k.animType] = "translate(" + a + "px, 0px)", k.$slideTrack.css(f)) : (f[k.animType] = "translate(0px," + a + "px)", k.$slideTrack.css(f))
                },
                complete: function() {
                    e && e.call()
                }
            })) : (k.applyTransition(), h = Math.ceil(h), !1 === k.options.vertical ? f[k.animType] = "translate3d(" + h + "px, 0px, 0px)" : f[k.animType] = "translate3d(0px," + h + "px, 0px)", k.$slideTrack.css(f), e && setTimeout(function() {
                k.disableTransition();
                e.call()
            }, k.options.speed))
    };
    l.prototype.getNavTarget = function() {
        var h = this.options.asNavFor;
        return h && null !== h && (h = a(h).not(this.$slider)), h
    };
    l.prototype.asNavFor = function(h) {
        var e = this.getNavTarget();
        null !== e && "object" == typeof e && e.each(function() {
            var f =
                a(this).slick("getSlick");
            f.unslicked || f.slideHandler(h, !0)
        })
    };
    l.prototype.applyTransition = function(a) {
        var e = {};
        !1 === this.options.fade ? e[this.transitionType] = this.transformType + " " + this.options.speed + "ms " + this.options.cssEase : e[this.transitionType] = "opacity " + this.options.speed + "ms " + this.options.cssEase;
        !1 === this.options.fade ? this.$slideTrack.css(e) : this.$slides.eq(a).css(e)
    };
    l.prototype.autoPlay = function() {
        this.autoPlayClear();
        this.slideCount > this.options.slidesToShow && (this.autoPlayTimer = setInterval(this.autoPlayIterator,
            this.options.autoplaySpeed))
    };
    l.prototype.autoPlayClear = function() {
        this.autoPlayTimer && clearInterval(this.autoPlayTimer)
    };
    l.prototype.autoPlayIterator = function() {
        var a = this.currentSlide + this.options.slidesToScroll;
        this.paused || this.interrupted || this.focussed || (!1 === this.options.infinite && (1 === this.direction && this.currentSlide + 1 === this.slideCount - 1 ? this.direction = 0 : 0 === this.direction && (a = this.currentSlide - this.options.slidesToScroll, 0 === this.currentSlide - 1 && (this.direction = 1))), this.slideHandler(a))
    };
    l.prototype.buildArrows = function() {
        !0 === this.options.arrows && (this.$prevArrow = a(this.options.prevArrow).addClass("slick-arrow"), this.$nextArrow = a(this.options.nextArrow).addClass("slick-arrow"), this.slideCount > this.options.slidesToShow ? (this.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), this.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), this.htmlExpr.test(this.options.prevArrow) && this.$prevArrow.prependTo(this.options.appendArrows), this.htmlExpr.test(this.options.nextArrow) &&
        this.$nextArrow.appendTo(this.options.appendArrows), !0 !== this.options.infinite && this.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : this.$prevArrow.add(this.$nextArrow).addClass("slick-hidden").attr({
            "aria-disabled": "true",
            tabindex: "-1"
        }))
    };
    l.prototype.buildDots = function() {
        var h, e;
        if (!0 === this.options.dots && this.slideCount > this.options.slidesToShow) {
            this.$slider.addClass("slick-dotted");
            e = a("<ul />").addClass(this.options.dotsClass);
            for (h = 0; h <= this.getDotCount(); h += 1) e.append(a("<li />").append(this.options.customPaging.call(this,
                this, h)));
            this.$dots = e.appendTo(this.options.appendDots);
            this.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false")
        }
    };
    l.prototype.buildOut = function() {
        this.$slides = this.$slider.children(this.options.slide + ":not(.slick-cloned)").addClass("slick-slide");
        this.slideCount = this.$slides.length;
        this.$slides.each(function(h, e) {
            a(e).attr("data-slick-index", h).data("originalStyling", a(e).attr("style") || "")
        });
        this.$slider.addClass("slick-slider");
        this.$slideTrack = 0 === this.slideCount ? a('<div class="slick-track"/>').appendTo(this.$slider) :
            this.$slides.wrapAll('<div class="slick-track"/>').parent();
        this.$list = this.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent();
        this.$slideTrack.css("opacity", 0);
        !0 !== this.options.centerMode && !0 !== this.options.swipeToSlide || (this.options.slidesToScroll = 1);
        a("img[data-lazy]", this.$slider).not("[src]").addClass("slick-loading");
        this.setupInfinite();
        this.buildArrows();
        this.buildDots();
        this.updateDots();
        this.setSlideClasses("number" == typeof this.currentSlide ? this.currentSlide : 0);
        !0 === this.options.draggable && this.$list.addClass("draggable")
    };
    l.prototype.buildRows = function() {
        var a, e, f, k, d, c, b;
        if (k = document.createDocumentFragment(), c = this.$slider.children(), 1 < this.options.rows) {
            b = this.options.slidesPerRow * this.options.rows;
            d = Math.ceil(c.length / b);
            for (a = 0; d > a; a++) {
                var g = document.createElement("div");
                for (e = 0; e < this.options.rows; e++) {
                    var r = document.createElement("div");
                    for (f = 0; f < this.options.slidesPerRow; f++) {
                        var t = a * b + (e * this.options.slidesPerRow + f);
                        c.get(t) && r.appendChild(c.get(t))
                    }
                    g.appendChild(r)
                }
                k.appendChild(g)
            }
            this.$slider.empty().append(k);
            this.$slider.children().children().children().css({
                width: 100 / this.options.slidesPerRow + "%",
                display: "inline-block"
            })
        }
    };
    l.prototype.checkResponsive = function(h, e) {
        var f, k, d, c = !1;
        k = this.$slider.width();
        var b = window.innerWidth || a(window).width();
        if ("window" === this.respondTo ? d = b : "slider" === this.respondTo ? d = k : "min" === this.respondTo && (d = Math.min(b, k)), this.options.responsive && this.options.responsive.length && null !== this.options.responsive) {
            k = null;
            for (f in this.breakpoints) this.breakpoints.hasOwnProperty(f) &&
            (!1 === this.originalSettings.mobileFirst ? d < this.breakpoints[f] && (k = this.breakpoints[f]) : d > this.breakpoints[f] && (k = this.breakpoints[f]));
            null !== k ? null !== this.activeBreakpoint ? (k !== this.activeBreakpoint || e) && (this.activeBreakpoint = k, "unslick" === this.breakpointSettings[k] ? this.unslick(k) : (this.options = a.extend({}, this.originalSettings, this.breakpointSettings[k]), !0 === h && (this.currentSlide = this.options.initialSlide), this.refresh(h)), c = k) : (this.activeBreakpoint = k, "unslick" === this.breakpointSettings[k] ?
                this.unslick(k) : (this.options = a.extend({}, this.originalSettings, this.breakpointSettings[k]), !0 === h && (this.currentSlide = this.options.initialSlide), this.refresh(h)), c = k) : null !== this.activeBreakpoint && (this.activeBreakpoint = null, this.options = this.originalSettings, !0 === h && (this.currentSlide = this.options.initialSlide), this.refresh(h), c = k);
            h || !1 === c || this.$slider.trigger("breakpoint", [this, c])
        }
    };
    l.prototype.changeSlide = function(h, e) {
        var f, k, d;
        k = a(h.currentTarget);
        switch (k.is("a") && h.preventDefault(), k.is("li") ||
        (k = k.closest("li")), d = 0 !== this.slideCount % this.options.slidesToScroll, f = d ? 0 : (this.slideCount - this.currentSlide) % this.options.slidesToScroll, h.data.message) {
            case "previous":
                k = 0 === f ? this.options.slidesToScroll : this.options.slidesToShow - f;
                this.slideCount > this.options.slidesToShow && this.slideHandler(this.currentSlide - k, !1, e);
                break;
            case "next":
                k = 0 === f ? this.options.slidesToScroll : f;
                this.slideCount > this.options.slidesToShow && this.slideHandler(this.currentSlide + k, !1, e);
                break;
            case "index":
                h = 0 === h.data.index ?
                    0 : h.data.index || k.index() * this.options.slidesToScroll, this.slideHandler(this.checkNavigable(h), !1, e), k.children().trigger("focus")
        }
    };
    l.prototype.checkNavigable = function(a) {
        var e, f;
        if (e = this.getNavigableIndexes(), f = 0, a > e[e.length - 1]) a = e[e.length - 1];
        else
            for (var k in e) {
                if (a < e[k]) {
                    a = f;
                    break
                }
                f = e[k]
            }
        return a
    };
    l.prototype.cleanUpEvents = function() {
        this.options.dots && null !== this.$dots && a("li", this.$dots).off("click.slick", this.changeSlide).off("mouseenter.slick", a.proxy(this.interrupt, this, !0)).off("mouseleave.slick",
            a.proxy(this.interrupt, this, !1));
        this.$slider.off("focus.slick blur.slick");
        !0 === this.options.arrows && this.slideCount > this.options.slidesToShow && (this.$prevArrow && this.$prevArrow.off("click.slick", this.changeSlide), this.$nextArrow && this.$nextArrow.off("click.slick", this.changeSlide));
        this.$list.off("touchstart.slick mousedown.slick", this.swipeHandler);
        this.$list.off("touchmove.slick mousemove.slick", this.swipeHandler);
        this.$list.off("touchend.slick mouseup.slick", this.swipeHandler);
        this.$list.off("touchcancel.slick mouseleave.slick",
            this.swipeHandler);
        this.$list.off("click.slick", this.clickHandler);
        a(document).off(this.visibilityChange, this.visibility);
        this.cleanUpSlideEvents();
        !0 === this.options.accessibility && this.$list.off("keydown.slick", this.keyHandler);
        !0 === this.options.focusOnSelect && a(this.$slideTrack).children().off("click.slick", this.selectHandler);
        a(window).off("orientationchange.slick.slick-" + this.instanceUid, this.orientationChange);
        a(window).off("resize.slick.slick-" + this.instanceUid, this.resize);
        a("[draggable!=true]",
            this.$slideTrack).off("dragstart", this.preventDefault);
        a(window).off("load.slick.slick-" + this.instanceUid, this.setPosition);
        a(document).off("ready.slick.slick-" + this.instanceUid, this.setPosition)
    };
    l.prototype.cleanUpSlideEvents = function() {
        this.$list.off("mouseenter.slick", a.proxy(this.interrupt, this, !0));
        this.$list.off("mouseleave.slick", a.proxy(this.interrupt, this, !1))
    };
    l.prototype.cleanUpRows = function() {
        var a;
        1 < this.options.rows && (a = this.$slides.children().children(), a.removeAttr("style"), this.$slider.empty().append(a))
    };
    l.prototype.clickHandler = function(a) {
        !1 === this.shouldClick && (a.stopImmediatePropagation(), a.stopPropagation(), a.preventDefault())
    };
    l.prototype.destroy = function(h) {
        this.autoPlayClear();
        this.touchObject = {};
        this.cleanUpEvents();
        a(".slick-cloned", this.$slider).detach();
        this.$dots && this.$dots.remove();
        this.$prevArrow && this.$prevArrow.length && (this.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), this.htmlExpr.test(this.options.prevArrow) &&
        this.$prevArrow.remove());
        this.$nextArrow && this.$nextArrow.length && (this.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), this.htmlExpr.test(this.options.nextArrow) && this.$nextArrow.remove());
        this.$slides && (this.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
            a(this).attr("style", a(this).data("originalStyling"))
        }),
            this.$slideTrack.children(this.options.slide).detach(), this.$slideTrack.detach(), this.$list.detach(), this.$slider.append(this.$slides));
        this.cleanUpRows();
        this.$slider.removeClass("slick-slider");
        this.$slider.removeClass("slick-initialized");
        this.$slider.removeClass("slick-dotted");
        this.unslicked = !0;
        h || this.$slider.trigger("destroy", [this])
    };
    l.prototype.disableTransition = function(a) {
        var e = {};
        e[this.transitionType] = "";
        !1 === this.options.fade ? this.$slideTrack.css(e) : this.$slides.eq(a).css(e)
    };
    l.prototype.fadeSlide =
        function(a, e) {
            var f = this;
            !1 === f.cssTransitions ? (f.$slides.eq(a).css({
                zIndex: f.options.zIndex
            }), f.$slides.eq(a).animate({
                opacity: 1
            }, f.options.speed, f.options.easing, e)) : (f.applyTransition(a), f.$slides.eq(a).css({
                opacity: 1,
                zIndex: f.options.zIndex
            }), e && setTimeout(function() {
                f.disableTransition(a);
                e.call()
            }, f.options.speed))
        };
    l.prototype.fadeSlideOut = function(a) {
        !1 === this.cssTransitions ? this.$slides.eq(a).animate({
            opacity: 0,
            zIndex: this.options.zIndex - 2
        }, this.options.speed, this.options.easing) : (this.applyTransition(a),
            this.$slides.eq(a).css({
                opacity: 0,
                zIndex: this.options.zIndex - 2
            }))
    };
    l.prototype.filterSlides = l.prototype.slickFilter = function(a) {
        null !== a && (this.$slidesCache = this.$slides, this.unload(), this.$slideTrack.children(this.options.slide).detach(), this.$slidesCache.filter(a).appendTo(this.$slideTrack), this.reinit())
    };
    l.prototype.focusHandler = function() {
        var h = this;
        h.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*:not(.slick-arrow)", function(e) {
            e.stopImmediatePropagation();
            var f = a(this);
            setTimeout(function() {
                h.options.pauseOnFocus && (h.focussed = f.is(":focus"), h.autoPlay())
            }, 0)
        })
    };
    l.prototype.getCurrent = l.prototype.slickCurrentSlide = function() {
        return this.currentSlide
    };
    l.prototype.getDotCount = function() {
        var a = 0,
            e = 0,
            f = 0;
        if (!0 === this.options.infinite)
            for (; a < this.slideCount;) ++f, a = e + this.options.slidesToScroll, e += this.options.slidesToScroll <= this.options.slidesToShow ? this.options.slidesToScroll : this.options.slidesToShow;
        else if (!0 === this.options.centerMode) f = this.slideCount;
        else if (this.options.asNavFor)
            for (; a <
                   this.slideCount;) ++f, a = e + this.options.slidesToScroll, e += this.options.slidesToScroll <= this.options.slidesToShow ? this.options.slidesToScroll : this.options.slidesToShow;
        else f = 1 + Math.ceil((this.slideCount - this.options.slidesToShow) / this.options.slidesToScroll);
        return f - 1
    };
    l.prototype.getLeft = function(a) {
        var e, f, k, d = 0;
        return this.slideOffset = 0, f = this.$slides.first().outerHeight(!0), !0 === this.options.infinite ? (this.slideCount > this.options.slidesToShow && (this.slideOffset = this.slideWidth * this.options.slidesToShow *
            -1, d = f * this.options.slidesToShow * -1), 0 !== this.slideCount % this.options.slidesToScroll && a + this.options.slidesToScroll > this.slideCount && this.slideCount > this.options.slidesToShow && (a > this.slideCount ? (this.slideOffset = (this.options.slidesToShow - (a - this.slideCount)) * this.slideWidth * -1, d = (this.options.slidesToShow - (a - this.slideCount)) * f * -1) : (this.slideOffset = this.slideCount % this.options.slidesToScroll * this.slideWidth * -1, d = this.slideCount % this.options.slidesToScroll * f * -1))) : a + this.options.slidesToShow > this.slideCount &&
            (this.slideOffset = (a + this.options.slidesToShow - this.slideCount) * this.slideWidth, d = (a + this.options.slidesToShow - this.slideCount) * f), this.slideCount <= this.options.slidesToShow && (this.slideOffset = 0, d = 0), !0 === this.options.centerMode && !0 === this.options.infinite ? this.slideOffset += this.slideWidth * Math.floor(this.options.slidesToShow / 2) - this.slideWidth : !0 === this.options.centerMode && (this.slideOffset = 0, this.slideOffset += this.slideWidth * Math.floor(this.options.slidesToShow / 2)), e = !1 === this.options.vertical ?
            a * this.slideWidth * -1 + this.slideOffset : a * f * -1 + d, !0 === this.options.variableWidth && (k = this.slideCount <= this.options.slidesToShow || !1 === this.options.infinite ? this.$slideTrack.children(".slick-slide").eq(a) : this.$slideTrack.children(".slick-slide").eq(a + this.options.slidesToShow), e = !0 === this.options.rtl ? k[0] ? -1 * (this.$slideTrack.width() - k[0].offsetLeft - k.width()) : 0 : k[0] ? -1 * k[0].offsetLeft : 0, !0 === this.options.centerMode && (k = this.slideCount <= this.options.slidesToShow || !1 === this.options.infinite ? this.$slideTrack.children(".slick-slide").eq(a) :
            this.$slideTrack.children(".slick-slide").eq(a + this.options.slidesToShow + 1), e = !0 === this.options.rtl ? k[0] ? -1 * (this.$slideTrack.width() - k[0].offsetLeft - k.width()) : 0 : k[0] ? -1 * k[0].offsetLeft : 0, e += (this.$list.width() - k.outerWidth()) / 2)), e
    };
    l.prototype.getOption = l.prototype.slickGetOption = function(a) {
        return this.options[a]
    };
    l.prototype.getNavigableIndexes = function() {
        var a, e = 0,
            f = 0,
            k = [];
        for (!1 === this.options.infinite ? a = this.slideCount : (e = -1 * this.options.slidesToScroll, f = -1 * this.options.slidesToScroll, a = 2 *
            this.slideCount); a > e;) k.push(e), e = f + this.options.slidesToScroll, f += this.options.slidesToScroll <= this.options.slidesToShow ? this.options.slidesToScroll : this.options.slidesToShow;
        return k
    };
    l.prototype.getSlick = function() {
        return this
    };
    l.prototype.getSlideCount = function() {
        var h, e, f = this;
        return e = !0 === f.options.centerMode ? f.slideWidth * Math.floor(f.options.slidesToShow / 2) : 0, !0 === f.options.swipeToSlide ? (f.$slideTrack.find(".slick-slide").each(function(k, d) {
            return d.offsetLeft - e + a(d).outerWidth() / 2 > -1 * f.swipeLeft ?
                (h = d, !1) : void 0
        }), Math.abs(a(h).attr("data-slick-index") - f.currentSlide) || 1) : f.options.slidesToScroll
    };
    l.prototype.goTo = l.prototype.slickGoTo = function(a, e) {
        this.changeSlide({
            data: {
                message: "index",
                index: parseInt(a)
            }
        }, e)
    };
    l.prototype.init = function(h) {
        a(this.$slider).hasClass("slick-initialized") || (a(this.$slider).addClass("slick-initialized"), this.buildRows(), this.buildOut(), this.setProps(), this.startLoad(), this.loadSlider(), this.initializeEvents(), this.updateArrows(), this.updateDots(), this.checkResponsive(!0),
            this.focusHandler());
        h && this.$slider.trigger("init", [this]);
        !0 === this.options.accessibility && this.initADA();
        this.options.autoplay && (this.paused = !1, this.autoPlay())
    };
    l.prototype.initADA = function() {
        var h = this;
        h.$slides.add(h.$slideTrack.find(".slick-cloned")).attr({
            "aria-hidden": "true",
            tabindex: "-1"
        }).find("a, input, button, select").attr({
            tabindex: "-1"
        });
        h.$slideTrack.attr("role", "listbox");
        h.$slides.not(h.$slideTrack.find(".slick-cloned")).each(function(e) {
            a(this).attr({
                role: "option",
                "aria-describedby": "slick-slide" +
                    h.instanceUid + e
            })
        });
        null !== h.$dots && h.$dots.attr("role", "tablist").find("li").each(function(e) {
            a(this).attr({
                role: "presentation",
                "aria-selected": "false",
                "aria-controls": "navigation" + h.instanceUid + e,
                id: "slick-slide" + h.instanceUid + e
            })
        }).first().attr("aria-selected", "true").end().find("button").attr("role", "button").end().closest("div").attr("role", "toolbar");
        h.activateADA()
    };
    l.prototype.initArrowEvents = function() {
        !0 === this.options.arrows && this.slideCount > this.options.slidesToShow && (this.$prevArrow.off("click.slick").on("click.slick", {
            message: "previous"
        }, this.changeSlide), this.$nextArrow.off("click.slick").on("click.slick", {
            message: "next"
        }, this.changeSlide))
    };
    l.prototype.initDotEvents = function() {
        !0 === this.options.dots && this.slideCount > this.options.slidesToShow && a("li", this.$dots).on("click.slick", {
            message: "index"
        }, this.changeSlide);
        !0 === this.options.dots && !0 === this.options.pauseOnDotsHover && a("li", this.$dots).on("mouseenter.slick", a.proxy(this.interrupt, this, !0)).on("mouseleave.slick", a.proxy(this.interrupt, this, !1))
    };
    l.prototype.initSlideEvents =
        function() {
            this.options.pauseOnHover && (this.$list.on("mouseenter.slick", a.proxy(this.interrupt, this, !0)), this.$list.on("mouseleave.slick", a.proxy(this.interrupt, this, !1)))
        };
    l.prototype.initializeEvents = function() {
        this.initArrowEvents();
        this.initDotEvents();
        this.initSlideEvents();
        this.$list.on("touchstart.slick mousedown.slick", {
            action: "start"
        }, this.swipeHandler);
        this.$list.on("touchmove.slick mousemove.slick", {
            action: "move"
        }, this.swipeHandler);
        this.$list.on("touchend.slick mouseup.slick", {
                action: "end"
            },
            this.swipeHandler);
        this.$list.on("touchcancel.slick mouseleave.slick", {
            action: "end"
        }, this.swipeHandler);
        this.$list.on("click.slick", this.clickHandler);
        a(document).on(this.visibilityChange, a.proxy(this.visibility, this));
        !0 === this.options.accessibility && this.$list.on("keydown.slick", this.keyHandler);
        !0 === this.options.focusOnSelect && a(this.$slideTrack).children().on("click.slick", this.selectHandler);
        a(window).on("orientationchange.slick.slick-" + this.instanceUid, a.proxy(this.orientationChange, this));
        a(window).on("resize.slick.slick-" + this.instanceUid, a.proxy(this.resize, this));
        a("[draggable!=true]", this.$slideTrack).on("dragstart", this.preventDefault);
        a(window).on("load.slick.slick-" + this.instanceUid, this.setPosition);
        a(document).on("ready.slick.slick-" + this.instanceUid, this.setPosition)
    };
    l.prototype.initUI = function() {
        !0 === this.options.arrows && this.slideCount > this.options.slidesToShow && (this.$prevArrow.show(), this.$nextArrow.show());
        !0 === this.options.dots && this.slideCount > this.options.slidesToShow &&
        this.$dots.show()
    };
    l.prototype.keyHandler = function(a) {
        a.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === a.keyCode && !0 === this.options.accessibility ? this.changeSlide({
            data: {
                message: !0 === this.options.rtl ? "next" : "previous"
            }
        }) : 39 === a.keyCode && !0 === this.options.accessibility && this.changeSlide({
            data: {
                message: !0 === this.options.rtl ? "previous" : "next"
            }
        }))
    };
    l.prototype.lazyLoad = function() {
        function h(c) {
            a("img[data-lazy]", c).each(function() {
                var b = a(this),
                    c = a(this).attr("data-lazy"),
                    f = document.createElement("img");
                f.onload = function() {
                    b.animate({
                        opacity: 0
                    }, 100, function() {
                        b.attr("src", c).animate({
                            opacity: 1
                        }, 200, function() {
                            b.removeAttr("data-lazy").removeClass("slick-loading")
                        });
                        d.$slider.trigger("lazyLoaded", [d, b, c])
                    })
                };
                f.onerror = function() {
                    b.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error");
                    d.$slider.trigger("lazyLoadError", [d, b, c])
                };
                f.src = c
            })
        }
        var e, f, k, d = this;
        !0 === d.options.centerMode ? !0 === d.options.infinite ? (e = d.currentSlide + (d.options.slidesToShow / 2 + 1), k = e + d.options.slidesToShow +
            2) : (e = Math.max(0, d.currentSlide - (d.options.slidesToShow / 2 + 1)), k = 2 + (d.options.slidesToShow / 2 + 1) + d.currentSlide) : (e = d.options.infinite ? d.options.slidesToShow + d.currentSlide : d.currentSlide, k = Math.ceil(e + d.options.slidesToShow), !0 === d.options.fade && (0 < e && e--, k <= d.slideCount && k++));
        e = d.$slider.find(".slick-slide").slice(e, k);
        h(e);
        d.slideCount <= d.options.slidesToShow ? (f = d.$slider.find(".slick-slide"), h(f)) : d.currentSlide >= d.slideCount - d.options.slidesToShow ? (f = d.$slider.find(".slick-cloned").slice(0, d.options.slidesToShow),
            h(f)) : 0 === d.currentSlide && (f = d.$slider.find(".slick-cloned").slice(-1 * d.options.slidesToShow), h(f))
    };
    l.prototype.loadSlider = function() {
        this.setPosition();
        this.$slideTrack.css({
            opacity: 1
        });
        this.$slider.removeClass("slick-loading");
        this.initUI();
        "progressive" === this.options.lazyLoad && this.progressiveLazyLoad()
    };
    l.prototype.next = l.prototype.slickNext = function() {
        this.changeSlide({
            data: {
                message: "next"
            }
        })
    };
    l.prototype.orientationChange = function() {
        this.checkResponsive();
        this.setPosition()
    };
    l.prototype.pause =
        l.prototype.slickPause = function() {
            this.autoPlayClear();
            this.paused = !0
        };
    l.prototype.play = l.prototype.slickPlay = function() {
        this.autoPlay();
        this.options.autoplay = !0;
        this.interrupted = this.focussed = this.paused = !1
    };
    l.prototype.postSlide = function(a) {
        this.unslicked || (this.$slider.trigger("afterChange", [this, a]), this.animating = !1, this.setPosition(), this.swipeLeft = null, this.options.autoplay && this.autoPlay(), !0 === this.options.accessibility && this.initADA())
    };
    l.prototype.prev = l.prototype.slickPrev = function() {
        this.changeSlide({
            data: {
                message: "previous"
            }
        })
    };
    l.prototype.preventDefault = function(a) {
        a.preventDefault()
    };
    l.prototype.progressiveLazyLoad = function(h) {
        h = h || 1;
        var e, f, k, d = this,
            c = a("img[data-lazy]", d.$slider);
        c.length ? (e = c.first(), f = e.attr("data-lazy"), k = document.createElement("img"), k.onload = function() {
            e.attr("src", f).removeAttr("data-lazy").removeClass("slick-loading");
            !0 === d.options.adaptiveHeight && d.setPosition();
            d.$slider.trigger("lazyLoaded", [d, e, f]);
            d.progressiveLazyLoad()
        }, k.onerror = function() {
            3 > h ? setTimeout(function() {
                d.progressiveLazyLoad(h +
                    1)
            }, 500) : (e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), d.$slider.trigger("lazyLoadError", [d, e, f]), d.progressiveLazyLoad())
        }, k.src = f) : d.$slider.trigger("allImagesLoaded", [d])
    };
    l.prototype.refresh = function(h) {
        var e;
        e = this.slideCount - this.options.slidesToShow;
        !this.options.infinite && this.currentSlide > e && (this.currentSlide = e);
        this.slideCount <= this.options.slidesToShow && (this.currentSlide = 0);
        e = this.currentSlide;
        this.destroy(!0);
        a.extend(this, this.initials, {
            currentSlide: e
        });
        this.init();
        h || this.changeSlide({
            data: {
                message: "index",
                index: e
            }
        }, !1)
    };
    l.prototype.registerBreakpoints = function() {
        var h, e, f, k = this,
            d = k.options.responsive || null;
        if ("array" === a.type(d) && d.length) {
            k.respondTo = k.options.respondTo || "window";
            for (h in d)
                if (f = k.breakpoints.length - 1, e = d[h].breakpoint, d.hasOwnProperty(h)) {
                    for (; 0 <= f;) k.breakpoints[f] && k.breakpoints[f] === e && k.breakpoints.splice(f, 1), f--;
                    k.breakpoints.push(e);
                    k.breakpointSettings[e] = d[h].settings
                }
            k.breakpoints.sort(function(a, b) {
                return k.options.mobileFirst ?
                    a - b : b - a
            })
        }
    };
    l.prototype.reinit = function() {
        this.$slides = this.$slideTrack.children(this.options.slide).addClass("slick-slide");
        this.slideCount = this.$slides.length;
        this.currentSlide >= this.slideCount && 0 !== this.currentSlide && (this.currentSlide -= this.options.slidesToScroll);
        this.slideCount <= this.options.slidesToShow && (this.currentSlide = 0);
        this.registerBreakpoints();
        this.setProps();
        this.setupInfinite();
        this.buildArrows();
        this.updateArrows();
        this.initArrowEvents();
        this.buildDots();
        this.updateDots();
        this.initDotEvents();
        this.cleanUpSlideEvents();
        this.initSlideEvents();
        this.checkResponsive(!1, !0);
        !0 === this.options.focusOnSelect && a(this.$slideTrack).children().on("click.slick", this.selectHandler);
        this.setSlideClasses("number" == typeof this.currentSlide ? this.currentSlide : 0);
        this.setPosition();
        this.focusHandler();
        this.paused = !this.options.autoplay;
        this.autoPlay();
        this.$slider.trigger("reInit", [this])
    };
    l.prototype.resize = function() {
        var h = this;
        a(window).width() !== h.windowWidth && (clearTimeout(h.windowDelay), h.windowDelay =
            window.setTimeout(function() {
                h.windowWidth = a(window).width();
                h.checkResponsive();
                h.unslicked || h.setPosition()
            }, 50))
    };
    l.prototype.removeSlide = l.prototype.slickRemove = function(a, e, f) {
        return "boolean" == typeof a ? (e = a, a = !0 === e ? 0 : this.slideCount - 1) : a = !0 === e ? --a : a, 1 > this.slideCount || 0 > a || a > this.slideCount - 1 ? !1 : (this.unload(), !0 === f ? this.$slideTrack.children().remove() : this.$slideTrack.children(this.options.slide).eq(a).remove(), this.$slides = this.$slideTrack.children(this.options.slide), this.$slideTrack.children(this.options.slide).detach(),
            this.$slideTrack.append(this.$slides), this.$slidesCache = this.$slides, void this.reinit())
    };
    l.prototype.setCSS = function(a) {
        var e, f, k = {};
        !0 === this.options.rtl && (a = -a);
        e = "left" == this.positionProp ? Math.ceil(a) + "px" : "0px";
        f = "top" == this.positionProp ? Math.ceil(a) + "px" : "0px";
        k[this.positionProp] = a;
        !1 === this.transformsEnabled ? this.$slideTrack.css(k) : (k = {}, !1 === this.cssTransitions ? (k[this.animType] = "translate(" + e + ", " + f + ")", this.$slideTrack.css(k)) : (k[this.animType] = "translate3d(" + e + ", " + f + ", 0px)", this.$slideTrack.css(k)))
    };
    l.prototype.setDimensions = function() {
        !1 === this.options.vertical ? !0 === this.options.centerMode && this.$list.css({
            padding: "0px " + this.options.centerPadding
        }) : (this.$list.height(this.$slides.first().outerHeight(!0) * this.options.slidesToShow), !0 === this.options.centerMode && this.$list.css({
            padding: this.options.centerPadding + " 0px"
        }));
        this.listWidth = this.$list.width();
        this.listHeight = this.$list.height();
        !1 === this.options.vertical && !1 === this.options.variableWidth ? (this.slideWidth = Math.ceil(this.listWidth / this.options.slidesToShow),
            this.$slideTrack.width(Math.ceil(this.slideWidth * this.$slideTrack.children(".slick-slide").length))) : !0 === this.options.variableWidth ? this.$slideTrack.width(5E3 * this.slideCount) : (this.slideWidth = Math.ceil(this.listWidth), this.$slideTrack.height(Math.ceil(this.$slides.first().outerHeight(!0) * this.$slideTrack.children(".slick-slide").length)));
        var a = this.$slides.first().outerWidth(!0) - this.$slides.first().width();
        !1 === this.options.variableWidth && this.$slideTrack.children(".slick-slide").width(this.slideWidth -
            a)
    };
    l.prototype.setFade = function() {
        var h, e = this;
        e.$slides.each(function(f, k) {
            h = e.slideWidth * f * -1;
            !0 === e.options.rtl ? a(k).css({
                position: "relative",
                right: h,
                top: 0,
                zIndex: e.options.zIndex - 2,
                opacity: 0
            }) : a(k).css({
                position: "relative",
                left: h,
                top: 0,
                zIndex: e.options.zIndex - 2,
                opacity: 0
            })
        });
        e.$slides.eq(e.currentSlide).css({
            zIndex: e.options.zIndex - 1,
            opacity: 1
        })
    };
    l.prototype.setHeight = function() {
        if (1 === this.options.slidesToShow && !0 === this.options.adaptiveHeight && !1 === this.options.vertical) {
            var a = this.$slides.eq(this.currentSlide).outerHeight(!0);
            this.$list.css("height", a)
        }
    };
    l.prototype.setOption = l.prototype.slickSetOption = function(h, e, f) {
        var k, d, c, b, g = this,
            r = !1;
        if ("object" === a.type(h) ? (d = h, r = e, b = "multiple") : "string" === a.type(h) && (d = h, c = e, r = f, "responsive" === h && "array" === a.type(e) ? b = "responsive" : "undefined" != typeof e && (b = "single")), "single" === b) g.options[d] = c;
        else if ("multiple" === b) a.each(d, function(a, b) {
            g.options[a] = b
        });
        else if ("responsive" === b)
            for (k in c)
                if ("array" !== a.type(g.options.responsive)) g.options.responsive = [c[k]];
                else {
                    for (h = g.options.responsive.length -
                        1; 0 <= h;) g.options.responsive[h].breakpoint === c[k].breakpoint && g.options.responsive.splice(h, 1), h--;
                    g.options.responsive.push(c[k])
                }
        r && (g.unload(), g.reinit())
    };
    l.prototype.setPosition = function() {
        this.setDimensions();
        this.setHeight();
        !1 === this.options.fade ? this.setCSS(this.getLeft(this.currentSlide)) : this.setFade();
        this.$slider.trigger("setPosition", [this])
    };
    l.prototype.setProps = function() {
        var a = document.body.style;
        this.positionProp = !0 === this.options.vertical ? "top" : "left";
        "top" === this.positionProp ?
            this.$slider.addClass("slick-vertical") : this.$slider.removeClass("slick-vertical");
        void 0 === a.WebkitTransition && void 0 === a.MozTransition && void 0 === a.msTransition || !0 !== this.options.useCSS || (this.cssTransitions = !0);
        this.options.fade && ("number" == typeof this.options.zIndex ? 3 > this.options.zIndex && (this.options.zIndex = 3) : this.options.zIndex = this.defaults.zIndex);
        void 0 !== a.OTransform && (this.animType = "OTransform", this.transformType = "-o-transform", this.transitionType = "OTransition", void 0 === a.perspectiveProperty &&
        void 0 === a.webkitPerspective && (this.animType = !1));
        void 0 !== a.MozTransform && (this.animType = "MozTransform", this.transformType = "-moz-transform", this.transitionType = "MozTransition", void 0 === a.perspectiveProperty && void 0 === a.MozPerspective && (this.animType = !1));
        void 0 !== a.webkitTransform && (this.animType = "webkitTransform", this.transformType = "-webkit-transform", this.transitionType = "webkitTransition", void 0 === a.perspectiveProperty && void 0 === a.webkitPerspective && (this.animType = !1));
        void 0 !== a.msTransform &&
        (this.animType = "msTransform", this.transformType = "-ms-transform", this.transitionType = "msTransition", void 0 === a.msTransform && (this.animType = !1));
        void 0 !== a.transform && !1 !== this.animType && (this.animType = "transform", this.transformType = "transform", this.transitionType = "transition");
        this.transformsEnabled = this.options.useTransform && null !== this.animType && !1 !== this.animType
    };
    l.prototype.setSlideClasses = function(a) {
        var e, f, k, d;
        f = this.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden",
            "true");
        this.$slides.eq(a).addClass("slick-current");
        !0 === this.options.centerMode ? (e = Math.floor(this.options.slidesToShow / 2), !0 === this.options.infinite && (a >= e && a <= this.slideCount - 1 - e ? this.$slides.slice(a - e, a + e + 1).addClass("slick-active").attr("aria-hidden", "false") : (k = this.options.slidesToShow + a, f.slice(k - e + 1, k + e + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === a ? f.eq(f.length - 1 - this.options.slidesToShow).addClass("slick-center") : a === this.slideCount - 1 && f.eq(this.options.slidesToShow).addClass("slick-center")),
            this.$slides.eq(a).addClass("slick-center")) : 0 <= a && a <= this.slideCount - this.options.slidesToShow ? this.$slides.slice(a, a + this.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : f.length <= this.options.slidesToShow ? f.addClass("slick-active").attr("aria-hidden", "false") : (d = this.slideCount % this.options.slidesToShow, k = !0 === this.options.infinite ? this.options.slidesToShow + a : a, this.options.slidesToShow == this.options.slidesToScroll && this.slideCount - a < this.options.slidesToShow ? f.slice(k -
            (this.options.slidesToShow - d), k + d).addClass("slick-active").attr("aria-hidden", "false") : f.slice(k, k + this.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"));
        "ondemand" === this.options.lazyLoad && this.lazyLoad()
    };
    l.prototype.setupInfinite = function() {
        var h, e, f;
        if (!0 === this.options.fade && (this.options.centerMode = !1), !0 === this.options.infinite && !1 === this.options.fade && (e = null, this.slideCount > this.options.slidesToShow)) {
            f = !0 === this.options.centerMode ? this.options.slidesToShow + 1 : this.options.slidesToShow;
            for (h = this.slideCount; h > this.slideCount - f; --h) e = h - 1, a(this.$slides[e]).clone(!0).attr("id", "").attr("data-slick-index", e - this.slideCount).prependTo(this.$slideTrack).addClass("slick-cloned");
            for (h = 0; f > h; h += 1) e = h, a(this.$slides[e]).clone(!0).attr("id", "").attr("data-slick-index", e + this.slideCount).appendTo(this.$slideTrack).addClass("slick-cloned");
            this.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                a(this).attr("id", "")
            })
        }
    };
    l.prototype.interrupt = function(a) {
        a || this.autoPlay();
        this.interrupted =
            a
    };
    l.prototype.selectHandler = function(h) {
        h = a(h.target).is(".slick-slide") ? a(h.target) : a(h.target).parents(".slick-slide");
        h = parseInt(h.attr("data-slick-index"));
        return h || (h = 0), this.slideCount <= this.options.slidesToShow ? (this.setSlideClasses(h), void this.asNavFor(h)) : void this.slideHandler(h)
    };
    l.prototype.slideHandler = function(a, e, f) {
        var k, d, c, b, g, r = null,
            t = this;
        return e = e || !1, !0 === t.animating && !0 === t.options.waitForAnimate || !0 === t.options.fade && t.currentSlide === a || t.slideCount <= t.options.slidesToShow ?
            void 0 : (!1 === e && t.asNavFor(a), k = a, r = t.getLeft(k), b = t.getLeft(t.currentSlide), t.currentLeft = null === t.swipeLeft ? b : t.swipeLeft, !1 === t.options.infinite && !1 === t.options.centerMode && (0 > a || a > t.getDotCount() * t.options.slidesToScroll) ? void(!1 === t.options.fade && (k = t.currentSlide, !0 !== f ? t.animateSlide(b, function() {
                t.postSlide(k)
            }) : t.postSlide(k))) : !1 === t.options.infinite && !0 === t.options.centerMode && (0 > a || a > t.slideCount - t.options.slidesToScroll) ? void(!1 === t.options.fade && (k = t.currentSlide, !0 !== f ? t.animateSlide(b,
                function() {
                    t.postSlide(k)
                }) : t.postSlide(k))) : (t.options.autoplay && clearInterval(t.autoPlayTimer), d = 0 > k ? 0 !== t.slideCount % t.options.slidesToScroll ? t.slideCount - t.slideCount % t.options.slidesToScroll : t.slideCount + k : k >= t.slideCount ? 0 !== t.slideCount % t.options.slidesToScroll ? 0 : k - t.slideCount : k, t.animating = !0, t.$slider.trigger("beforeChange", [t, t.currentSlide, d]), c = t.currentSlide, t.currentSlide = d, t.setSlideClasses(t.currentSlide), t.options.asNavFor && (g = t.getNavTarget(), g = g.slick("getSlick"), g.slideCount <=
            g.options.slidesToShow && g.setSlideClasses(t.currentSlide)), t.updateDots(), t.updateArrows(), !0 === t.options.fade ? (!0 !== f ? (t.fadeSlideOut(c), t.fadeSlide(d, function() {
                t.postSlide(d)
            })) : t.postSlide(d), void t.animateHeight()) : void(!0 !== f ? t.animateSlide(r, function() {
                t.postSlide(d)
            }) : t.postSlide(d))))
    };
    l.prototype.startLoad = function() {
        !0 === this.options.arrows && this.slideCount > this.options.slidesToShow && (this.$prevArrow.hide(), this.$nextArrow.hide());
        !0 === this.options.dots && this.slideCount > this.options.slidesToShow &&
        this.$dots.hide();
        this.$slider.addClass("slick-loading")
    };
    l.prototype.swipeDirection = function() {
        var a, e, f, k;
        return a = this.touchObject.startX - this.touchObject.curX, e = this.touchObject.startY - this.touchObject.curY, f = Math.atan2(e, a), k = Math.round(180 * f / Math.PI), 0 > k && (k = 360 - Math.abs(k)), 45 >= k && 0 <= k ? !1 === this.options.rtl ? "left" : "right" : 360 >= k && 315 <= k ? !1 === this.options.rtl ? "left" : "right" : 135 <= k && 225 >= k ? !1 === this.options.rtl ? "right" : "left" : !0 === this.options.verticalSwiping ? 35 <= k && 135 >= k ? "down" : "up" : "vertical"
    };
    l.prototype.swipeEnd = function(a) {
        var e;
        if (this.dragging = !1, this.interrupted = !1, this.shouldClick = 10 < this.touchObject.swipeLength ? !1 : !0, void 0 === this.touchObject.curX) return !1;
        if (!0 === this.touchObject.edgeHit && this.$slider.trigger("edge", [this, this.swipeDirection()]), this.touchObject.swipeLength >= this.touchObject.minSwipe) {
            switch (a = this.swipeDirection()) {
                case "left":
                case "down":
                    e = this.options.swipeToSlide ? this.checkNavigable(this.currentSlide + this.getSlideCount()) : this.currentSlide + this.getSlideCount();
                    this.currentDirection = 0;
                    break;
                case "right":
                case "up":
                    e = this.options.swipeToSlide ? this.checkNavigable(this.currentSlide - this.getSlideCount()) : this.currentSlide - this.getSlideCount(), this.currentDirection = 1
            }
            "vertical" != a && (this.slideHandler(e), this.touchObject = {}, this.$slider.trigger("swipe", [this, a]))
        } else this.touchObject.startX !== this.touchObject.curX && (this.slideHandler(this.currentSlide), this.touchObject = {})
    };
    l.prototype.swipeHandler = function(a) {
        if (!(!1 === this.options.swipe || "ontouchend" in document &&
            !1 === this.options.swipe || !1 === this.options.draggable && -1 !== a.type.indexOf("mouse"))) switch (this.touchObject.fingerCount = a.originalEvent && void 0 !== a.originalEvent.touches ? a.originalEvent.touches.length : 1, this.touchObject.minSwipe = this.listWidth / this.options.touchThreshold, !0 === this.options.verticalSwiping && (this.touchObject.minSwipe = this.listHeight / this.options.touchThreshold), a.data.action) {
            case "start":
                this.swipeStart(a);
                break;
            case "move":
                this.swipeMove(a);
                break;
            case "end":
                this.swipeEnd(a)
        }
    };
    l.prototype.swipeMove =
        function(a) {
            var e, f, k, d, c;
            return c = void 0 !== a.originalEvent ? a.originalEvent.touches : null, !this.dragging || c && 1 !== c.length ? !1 : (e = this.getLeft(this.currentSlide), this.touchObject.curX = void 0 !== c ? c[0].pageX : a.clientX, this.touchObject.curY = void 0 !== c ? c[0].pageY : a.clientY, this.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(this.touchObject.curX - this.touchObject.startX, 2))), !0 === this.options.verticalSwiping && (this.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(this.touchObject.curY - this.touchObject.startY,
                2)))), f = this.swipeDirection(), "vertical" !== f ? (void 0 !== a.originalEvent && 4 < this.touchObject.swipeLength && a.preventDefault(), d = (!1 === this.options.rtl ? 1 : -1) * (this.touchObject.curX > this.touchObject.startX ? 1 : -1), !0 === this.options.verticalSwiping && (d = this.touchObject.curY > this.touchObject.startY ? 1 : -1), k = this.touchObject.swipeLength, this.touchObject.edgeHit = !1, !1 === this.options.infinite && (0 === this.currentSlide && "right" === f || this.currentSlide >= this.getDotCount() && "left" === f) && (k = this.touchObject.swipeLength *
                this.options.edgeFriction, this.touchObject.edgeHit = !0), !1 === this.options.vertical ? this.swipeLeft = e + k * d : this.swipeLeft = e + k * (this.$list.height() / this.listWidth) * d, !0 === this.options.verticalSwiping && (this.swipeLeft = e + k * d), !0 === this.options.fade || !1 === this.options.touchMove ? !1 : !0 === this.animating ? (this.swipeLeft = null, !1) : void this.setCSS(this.swipeLeft)) : void 0)
        };
    l.prototype.swipeStart = function(a) {
        var e;
        return this.interrupted = !0, 1 !== this.touchObject.fingerCount || this.slideCount <= this.options.slidesToShow ?
            (this.touchObject = {}, !1) : (void 0 !== a.originalEvent && void 0 !== a.originalEvent.touches && (e = a.originalEvent.touches[0]), this.touchObject.startX = this.touchObject.curX = void 0 !== e ? e.pageX : a.clientX, this.touchObject.startY = this.touchObject.curY = void 0 !== e ? e.pageY : a.clientY, void(this.dragging = !0))
    };
    l.prototype.unfilterSlides = l.prototype.slickUnfilter = function() {
        null !== this.$slidesCache && (this.unload(), this.$slideTrack.children(this.options.slide).detach(), this.$slidesCache.appendTo(this.$slideTrack), this.reinit())
    };
    l.prototype.unload = function() {
        a(".slick-cloned", this.$slider).remove();
        this.$dots && this.$dots.remove();
        this.$prevArrow && this.htmlExpr.test(this.options.prevArrow) && this.$prevArrow.remove();
        this.$nextArrow && this.htmlExpr.test(this.options.nextArrow) && this.$nextArrow.remove();
        this.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
    };
    l.prototype.unslick = function(a) {
        this.$slider.trigger("unslick", [this, a]);
        this.destroy()
    };
    l.prototype.updateArrows =
        function() {
            !0 === this.options.arrows && this.slideCount > this.options.slidesToShow && !this.options.infinite && (this.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), this.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === this.currentSlide ? (this.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), this.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : this.currentSlide >= this.slideCount - this.options.slidesToShow && !1 === this.options.centerMode ?
                (this.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), this.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : this.currentSlide >= this.slideCount - 1 && !0 === this.options.centerMode && (this.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), this.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
        };
    l.prototype.updateDots = function() {
        null !== this.$dots && (this.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"),
            this.$dots.find("li").eq(Math.floor(this.currentSlide / this.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"))
    };
    l.prototype.visibility = function() {
        this.options.autoplay && (document[this.hidden] ? this.interrupted = !0 : this.interrupted = !1)
    };
    a.fn.slick = function() {
        var a, e, f = arguments[0],
            k = Array.prototype.slice.call(arguments, 1),
            d = this.length;
        for (a = 0; d > a; a++)
            if ("object" == typeof f || "undefined" == typeof f ? this[a].slick = new l(this[a], f) : e = this[a].slick[f].apply(this[a].slick, k), "undefined" !=
            typeof e) return e;
        return this
    }
});
(function(a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : a(jQuery)
})(function(a) {
    function l(d, c) {
        var b, g, f, e = d.nodeName.toLowerCase();
        return "area" === e ? (b = d.parentNode, g = b.name, d.href && g && "map" === b.nodeName.toLowerCase() ? (f = a("img[usemap='#" + g + "']")[0], !!f && h(f)) : !1) : (/^(input|select|textarea|button|object)$/.test(e) ? !d.disabled : "a" === e ? d.href || c : c) && h(d)
    }

    function h(d) {
        return a.expr.filters.visible(d) && !a(d).parents().addBack().filter(function() {
            return "hidden" === a.css(this, "visibility")
        }).length
    }
    a.ui = a.ui || {};
    a.extend(a.ui, {
        version: "1.11.4",
        keyCode: {
            BACKSPACE: 8,
            COMMA: 188,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            LEFT: 37,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38
        }
    });
    a.fn.extend({
        scrollParent: function(d) {
            var c = this.css("position"),
                b = "absolute" === c,
                g = d ? /(auto|scroll|hidden)/ : /(auto|scroll)/;
            d = this.parents().filter(function() {
                var c = a(this);
                return b && "static" === c.css("position") ? !1 : g.test(c.css("overflow") + c.css("overflow-y") + c.css("overflow-x"))
            }).eq(0);
            return "fixed" !==
            c && d.length ? d : a(this[0].ownerDocument || document)
        },
        uniqueId: function() {
            var a = 0;
            return function() {
                return this.each(function() {
                    this.id || (this.id = "ui-id-" + ++a)
                })
            }
        }(),
        removeUniqueId: function() {
            return this.each(function() {
                /^ui-id-\d+$/.test(this.id) && a(this).removeAttr("id")
            })
        }
    });
    a.extend(a.expr[":"], {
        data: a.expr.createPseudo ? a.expr.createPseudo(function(d) {
            return function(c) {
                return !!a.data(c, d)
            }
        }) : function(d, c, b) {
            return !!a.data(d, b[3])
        },
        focusable: function(d) {
            return l(d, !isNaN(a.attr(d, "tabindex")))
        },
        tabbable: function(d) {
            var c = a.attr(d, "tabindex"),
                b = isNaN(c);
            return (b || 0 <= c) && l(d, !b)
        }
    });
    a("<a>").outerWidth(1).jquery || a.each(["Width", "Height"], function(d, c) {
        function b(b, c, d, f) {
            return a.each(g, function() {
                c -= parseFloat(a.css(b, "padding" + this)) || 0;
                d && (c -= parseFloat(a.css(b, "border" + this + "Width")) || 0);
                f && (c -= parseFloat(a.css(b, "margin" + this)) || 0)
            }), c
        }
        var g = "Width" === c ? ["Left", "Right"] : ["Top", "Bottom"],
            f = c.toLowerCase(),
            e = {
                innerWidth: a.fn.innerWidth,
                innerHeight: a.fn.innerHeight,
                outerWidth: a.fn.outerWidth,
                outerHeight: a.fn.outerHeight
            };
        a.fn["inner" + c] = function(g) {
            return void 0 === g ? e["inner" + c].call(this) : this.each(function() {
                a(this).css(f, b(this, g) + "px")
            })
        };
        a.fn["outer" + c] = function(g, d) {
            return "number" != typeof g ? e["outer" + c].call(this, g) : this.each(function() {
                a(this).css(f, b(this, g, !0, d) + "px")
            })
        }
    });
    a.fn.addBack || (a.fn.addBack = function(a) {
        return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
    });
    a("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (a.fn.removeData = function(d) {
        return function(c) {
            return arguments.length ?
                d.call(this, a.camelCase(c)) : d.call(this)
        }
    }(a.fn.removeData));
    a.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());
    a.fn.extend({
        focus: function(d) {
            return function(c, b) {
                return "number" == typeof c ? this.each(function() {
                    var g = this;
                    setTimeout(function() {
                        a(g).focus();
                        b && b.call(g)
                    }, c)
                }) : d.apply(this, arguments)
            }
        }(a.fn.focus),
        disableSelection: function() {
            var a = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown";
            return function() {
                return this.bind(a + ".ui-disableSelection", function(a) {
                    a.preventDefault()
                })
            }
        }(),
        enableSelection: function() {
            return this.unbind(".ui-disableSelection")
        },
        zIndex: function(d) {
            if (void 0 !== d) return this.css("zIndex", d);
            if (this.length) {
                var c, b;
                for (d = a(this[0]); d.length && d[0] !== document;) {
                    if (c = d.css("position"), ("absolute" === c || "relative" === c || "fixed" === c) && (b = parseInt(d.css("zIndex"), 10), !isNaN(b) && 0 !== b)) return b;
                    d = d.parent()
                }
            }
            return 0
        }
    });
    a.ui.plugin = {
        add: function(d, c, b) {
            var g;
            d = a.ui[d].prototype;
            for (g in b) d.plugins[g] = d.plugins[g] || [], d.plugins[g].push([c, b[g]])
        },
        call: function(a,
                       c, b, g) {
            if ((c = a.plugins[c]) && (g || a.element[0].parentNode && 11 !== a.element[0].parentNode.nodeType))
                for (g = 0; c.length > g; g++) a.options[c[g][0]] && c[g][1].apply(a.element, b)
        }
    };
    var e = 0,
        f = Array.prototype.slice;
    a.cleanData = function(d) {
        return function(c) {
            var b, g, f;
            for (f = 0; null != (g = c[f]); f++) try {
                (b = a._data(g, "events")) && b.remove && a(g).triggerHandler("remove")
            } catch (e) {}
            d(c)
        }
    }(a.cleanData);
    a.widget = function(d, c, b) {
        var g, f, e, k, h = {},
            l = d.split(".")[0];
        return d = d.split(".")[1], g = l + "-" + d, b || (b = c, c = a.Widget), a.expr[":"][g.toLowerCase()] =
            function(b) {
                return !!a.data(b, g)
            }, a[l] = a[l] || {}, f = a[l][d], e = a[l][d] = function(a, b) {
            return this._createWidget ? void(arguments.length && this._createWidget(a, b)) : new e(a, b)
        }, a.extend(e, f, {
            version: b.version,
            _proto: a.extend({}, b),
            _childConstructors: []
        }), k = new c, k.options = a.widget.extend({}, k.options), a.each(b, function(b, g) {
            return a.isFunction(g) ? void(h[b] = function() {
                var a = function() {
                        return c.prototype[b].apply(this, arguments)
                    },
                    d = function(a) {
                        return c.prototype[b].apply(this, a)
                    };
                return function() {
                    var b, c = this._super,
                        f = this._superApply;
                    return this._super = a, this._superApply = d, b = g.apply(this, arguments), this._super = c, this._superApply = f, b
                }
            }()) : void(h[b] = g)
        }), e.prototype = a.widget.extend(k, {
            widgetEventPrefix: f ? k.widgetEventPrefix || d : d
        }, h, {
            constructor: e,
            namespace: l,
            widgetName: d,
            widgetFullName: g
        }), f ? (a.each(f._childConstructors, function(b, c) {
            b = c.prototype;
            a.widget(b.namespace + "." + b.widgetName, e, c._proto)
        }), delete f._childConstructors) : c._childConstructors.push(e), a.widget.bridge(d, e), e
    };
    a.widget.extend = function(d) {
        for (var c,
                 b, g = f.call(arguments, 1), e = 0, k = g.length; k > e; e++)
            for (c in g[e]) b = g[e][c], g[e].hasOwnProperty(c) && void 0 !== b && (d[c] = a.isPlainObject(b) ? a.isPlainObject(d[c]) ? a.widget.extend({}, d[c], b) : a.widget.extend({}, b) : b);
        return d
    };
    a.widget.bridge = function(d, c) {
        var b = c.prototype.widgetFullName || d;
        a.fn[d] = function(g) {
            var e = "string" == typeof g,
                k = f.call(arguments, 1),
                h = this;
            return e ? this.each(function() {
                var c, f = a.data(this, b);
                return "instance" === g ? (h = f, !1) : f ? a.isFunction(f[g]) && "_" !== g.charAt(0) ? (c = f[g].apply(f, k), c !==
                f && void 0 !== c ? (h = c && c.jquery ? h.pushStack(c.get()) : c, !1) : void 0) : a.error("no such method '" + g + "' for " + d + " widget instance") : a.error("cannot call methods on " + d + " prior to initialization; attempted to call method '" + g + "'")
            }) : (k.length && (g = a.widget.extend.apply(null, [g].concat(k))), this.each(function() {
                var d = a.data(this, b);
                d ? (d.option(g || {}), d._init && d._init()) : a.data(this, b, new c(g, this))
            })), h
        }
    };
    a.Widget = function() {};
    a.Widget._childConstructors = [];
    a.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {
            disabled: !1,
            create: null
        },
        _createWidget: function(d, c) {
            c = a(c || this.defaultElement || this)[0];
            this.element = a(c);
            this.uuid = e++;
            this.eventNamespace = "." + this.widgetName + this.uuid;
            this.bindings = a();
            this.hoverable = a();
            this.focusable = a();
            c !== this && (a.data(c, this.widgetFullName, this), this._on(!0, this.element, {
                remove: function(a) {
                    a.target === c && this.destroy()
                }
            }), this.document = a(c.style ? c.ownerDocument : c.document || c), this.window = a(this.document[0].defaultView || this.document[0].parentWindow));
            this.options = a.widget.extend({}, this.options, this._getCreateOptions(), d);
            this._create();
            this._trigger("create", null, this._getCreateEventData());
            this._init()
        },
        _getCreateOptions: a.noop,
        _getCreateEventData: a.noop,
        _create: a.noop,
        _init: a.noop,
        destroy: function() {
            this._destroy();
            this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(a.camelCase(this.widgetFullName));
            this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled");
            this.bindings.unbind(this.eventNamespace);
            this.hoverable.removeClass("ui-state-hover");
            this.focusable.removeClass("ui-state-focus")
        },
        _destroy: a.noop,
        widget: function() {
            return this.element
        },
        option: function(d, c) {
            var b, g, f, e = d;
            if (0 === arguments.length) return a.widget.extend({}, this.options);
            if ("string" == typeof d)
                if (e = {}, b = d.split("."), d = b.shift(), b.length) {
                    g = e[d] = a.widget.extend({}, this.options[d]);
                    for (f = 0; b.length - 1 > f; f++) g[b[f]] = g[b[f]] || {}, g = g[b[f]];
                    if (d = b.pop(), 1 === arguments.length) return void 0 ===
                    g[d] ? null : g[d];
                    g[d] = c
                } else {
                    if (1 === arguments.length) return void 0 === this.options[d] ? null : this.options[d];
                    e[d] = c
                }
            return this._setOptions(e), this
        },
        _setOptions: function(a) {
            for (var c in a) this._setOption(c, a[c]);
            return this
        },
        _setOption: function(a, c) {
            return this.options[a] = c, "disabled" === a && (this.widget().toggleClass(this.widgetFullName + "-disabled", !!c), c && (this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus"))), this
        },
        enable: function() {
            return this._setOptions({
                disabled: !1
            })
        },
        disable: function() {
            return this._setOptions({
                disabled: !0
            })
        },
        _on: function(d, c, b) {
            var g, f = this;
            "boolean" != typeof d && (b = c, c = d, d = !1);
            b ? (c = g = a(c), this.bindings = this.bindings.add(c)) : (b = c, c = this.element, g = this.widget());
            a.each(b, function(b, e) {
                function k() {
                    return d || !0 !== f.options.disabled && !a(this).hasClass("ui-state-disabled") ? ("string" == typeof e ? f[e] : e).apply(f, arguments) : void 0
                }
                "string" != typeof e && (k.guid = e.guid = e.guid || k.guid || a.guid++);
                var h = b.match(/^([\w:-]*)\s*(.*)$/);
                b = h[1] + f.eventNamespace;
                (h =
                    h[2]) ? g.delegate(h, b, k): c.bind(b, k)
            })
        },
        _off: function(d, c) {
            c = (c || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace;
            d.unbind(c).undelegate(c);
            this.bindings = a(this.bindings.not(d).get());
            this.focusable = a(this.focusable.not(d).get());
            this.hoverable = a(this.hoverable.not(d).get())
        },
        _delay: function(a, c) {
            var b = this;
            return setTimeout(function() {
                return ("string" == typeof a ? b[a] : a).apply(b, arguments)
            }, c || 0)
        },
        _hoverable: function(d) {
            this.hoverable = this.hoverable.add(d);
            this._on(d, {
                mouseenter: function(c) {
                    a(c.currentTarget).addClass("ui-state-hover")
                },
                mouseleave: function(c) {
                    a(c.currentTarget).removeClass("ui-state-hover")
                }
            })
        },
        _focusable: function(d) {
            this.focusable = this.focusable.add(d);
            this._on(d, {
                focusin: function(c) {
                    a(c.currentTarget).addClass("ui-state-focus")
                },
                focusout: function(c) {
                    a(c.currentTarget).removeClass("ui-state-focus")
                }
            })
        },
        _trigger: function(d, c, b) {
            var g, f = this.options[d];
            if (b = b || {}, c = a.Event(c), c.type = (d === this.widgetEventPrefix ? d : this.widgetEventPrefix + d).toLowerCase(), c.target = this.element[0], d = c.originalEvent)
                for (g in d) g in c ||
                (c[g] = d[g]);
            return this.element.trigger(c, b), !(a.isFunction(f) && !1 === f.apply(this.element[0], [c].concat(b)) || c.isDefaultPrevented())
        }
    };
    a.each({
        show: "fadeIn",
        hide: "fadeOut"
    }, function(d, c) {
        a.Widget.prototype["_" + d] = function(b, g, f) {
            "string" == typeof g && (g = {
                effect: g
            });
            var e, k = g ? !0 === g || "number" == typeof g ? c : g.effect || c : d;
            g = g || {};
            "number" == typeof g && (g = {
                duration: g
            });
            e = !a.isEmptyObject(g);
            g.complete = f;
            g.delay && b.delay(g.delay);
            e && a.effects && a.effects.effect[k] ? b[d](g) : k !== d && b[k] ? b[k](g.duration, g.easing,
                f) : b.queue(function(c) {
                a(this)[d]();
                f && f.call(b[0]);
                c()
            })
        }
    });
    a.widget;
    var k = !1;
    a(document).mouseup(function() {
        k = !1
    });
    a.widget("ui.mouse", {
        version: "1.11.4",
        options: {
            cancel: "input,textarea,button,select,option",
            distance: 1,
            delay: 0
        },
        _mouseInit: function() {
            var d = this;
            this.element.bind("mousedown." + this.widgetName, function(a) {
                return d._mouseDown(a)
            }).bind("click." + this.widgetName, function(c) {
                return !0 === a.data(c.target, d.widgetName + ".preventClickEvent") ? (a.removeData(c.target, d.widgetName + ".preventClickEvent"),
                    c.stopImmediatePropagation(), !1) : void 0
            });
            this.started = !1
        },
        _mouseDestroy: function() {
            this.element.unbind("." + this.widgetName);
            this._mouseMoveDelegate && this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
        },
        _mouseDown: function(d) {
            if (!k) {
                this._mouseMoved = !1;
                this._mouseStarted && this._mouseUp(d);
                this._mouseDownEvent = d;
                var c = this,
                    b = 1 === d.which,
                    g = "string" == typeof this.options.cancel && d.target.nodeName ? a(d.target).closest(this.options.cancel).length :
                        !1;
                return b && !g && this._mouseCapture(d) ? (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
                    c.mouseDelayMet = !0
                }, this.options.delay)), this._mouseDistanceMet(d) && this._mouseDelayMet(d) && (this._mouseStarted = !1 !== this._mouseStart(d), !this._mouseStarted) ? (d.preventDefault(), !0) : (!0 === a.data(d.target, this.widgetName + ".preventClickEvent") && a.removeData(d.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function(a) {
                    return c._mouseMove(a)
                },
                    this._mouseUpDelegate = function(a) {
                        return c._mouseUp(a)
                    }, this.document.bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), d.preventDefault(), k = !0, !0)) : !0
            }
        },
        _mouseMove: function(d) {
            return this._mouseMoved && (a.ui.ie && (!document.documentMode || 9 > document.documentMode) && !d.button || !d.which) ? this._mouseUp(d) : ((d.which || d.button) && (this._mouseMoved = !0), this._mouseStarted ? (this._mouseDrag(d), d.preventDefault()) : (this._mouseDistanceMet(d) && this._mouseDelayMet(d) &&
            (this._mouseStarted = !1 !== this._mouseStart(this._mouseDownEvent, d), this._mouseStarted ? this._mouseDrag(d) : this._mouseUp(d)), !this._mouseStarted))
        },
        _mouseUp: function(d) {
            return this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, d.target === this._mouseDownEvent.target && a.data(d.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(d)), k = !1, !1
        },
        _mouseDistanceMet: function(a) {
            return Math.max(Math.abs(this._mouseDownEvent.pageX -
                a.pageX), Math.abs(this._mouseDownEvent.pageY - a.pageY)) >= this.options.distance
        },
        _mouseDelayMet: function() {
            return this.mouseDelayMet
        },
        _mouseStart: function() {},
        _mouseDrag: function() {},
        _mouseStop: function() {},
        _mouseCapture: function() {
            return !0
        }
    });
    a.widget("ui.slider", a.ui.mouse, {
        version: "1.11.4",
        widgetEventPrefix: "slide",
        options: {
            animate: !1,
            distance: 0,
            max: 100,
            min: 0,
            orientation: "horizontal",
            range: !1,
            step: 1,
            value: 0,
            values: null,
            change: null,
            slide: null,
            start: null,
            stop: null
        },
        numPages: 5,
        _create: function() {
            this._mouseSliding =
                this._keySliding = !1;
            this._animateOff = !0;
            this._handleIndex = null;
            this._detectOrientation();
            this._mouseInit();
            this._calculateNewMax();
            this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget ui-widget-content ui-corner-all");
            this._refresh();
            this._setOption("disabled", this.options.disabled);
            this._animateOff = !1
        },
        _refresh: function() {
            this._createRange();
            this._createHandles();
            this._setupEvents();
            this._refreshValue()
        },
        _createHandles: function() {
            var d, c;
            d = this.options;
            var b = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),
                g = [];
            c = d.values && d.values.length || 1;
            b.length > c && (b.slice(c).remove(), b = b.slice(0, c));
            for (d = b.length; c > d; d++) g.push("<span class='ui-slider-handle ui-state-default ui-corner-all' tabindex='0'></span>");
            this.handles = b.add(a(g.join("")).appendTo(this.element));
            this.handle = this.handles.eq(0);
            this.handles.each(function(b) {
                a(this).data("ui-slider-handle-index", b)
            })
        },
        _createRange: function() {
            var d = this.options,
                c = "";
            d.range ? (!0 === d.range && (d.values ? d.values.length && 2 !== d.values.length ? d.values = [d.values[0],
                d.values[0]
            ] : a.isArray(d.values) && (d.values = d.values.slice(0)) : d.values = [this._valueMin(), this._valueMin()]), this.range && this.range.length ? this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({
                left: "",
                bottom: ""
            }) : (this.range = a("<div></div>").appendTo(this.element), c = "ui-slider-range ui-widget-header ui-corner-all"), this.range.addClass(c + ("min" === d.range || "max" === d.range ? " ui-slider-range-" + d.range : ""))) : (this.range && this.range.remove(), this.range = null)
        },
        _setupEvents: function() {
            this._off(this.handles);
            this._on(this.handles, this._handleEvents);
            this._hoverable(this.handles);
            this._focusable(this.handles)
        },
        _destroy: function() {
            this.handles.remove();
            this.range && this.range.remove();
            this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all");
            this._mouseDestroy()
        },
        _mouseCapture: function(d) {
            var c, b, g, f, e, k, h, l, n = this,
                u = this.options;
            return u.disabled ? !1 : (this.elementSize = {
                width: this.element.outerWidth(),
                height: this.element.outerHeight()
            }, this.elementOffset =
                this.element.offset(), c = {
                x: d.pageX,
                y: d.pageY
            }, b = this._normValueFromMouse(c), g = this._valueMax() - this._valueMin() + 1, this.handles.each(function(c) {
                var d = Math.abs(b - n.values(c));
                (g > d || g === d && (c === n._lastChangedValue || n.values(c) === u.min)) && (g = d, f = a(this), e = c)
            }), k = this._start(d, e), !1 === k ? !1 : (this._mouseSliding = !0, this._handleIndex = e, f.addClass("ui-state-active").focus(), h = f.offset(), l = !a(d.target).parents().addBack().is(".ui-slider-handle"), this._clickOffset = l ? {
                left: 0,
                top: 0
            } : {
                left: d.pageX - h.left - f.width() /
                    2,
                top: d.pageY - h.top - f.height() / 2 - (parseInt(f.css("borderTopWidth"), 10) || 0) - (parseInt(f.css("borderBottomWidth"), 10) || 0) + (parseInt(f.css("marginTop"), 10) || 0)
            }, this.handles.hasClass("ui-state-hover") || this._slide(d, e, b), this._animateOff = !0, !0))
        },
        _mouseStart: function() {
            return !0
        },
        _mouseDrag: function(a) {
            var c = this._normValueFromMouse({
                x: a.pageX,
                y: a.pageY
            });
            return this._slide(a, this._handleIndex, c), !1
        },
        _mouseStop: function(a) {
            return this.handles.removeClass("ui-state-active"), this._mouseSliding = !1, this._stop(a,
                this._handleIndex), this._change(a, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1, !1
        },
        _detectOrientation: function() {
            this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal"
        },
        _normValueFromMouse: function(a) {
            var c, b, g, f, e;
            return "horizontal" === this.orientation ? (c = this.elementSize.width, b = a.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (c = this.elementSize.height, b = a.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top :
                0)), g = b / c, 1 < g && (g = 1), 0 > g && (g = 0), "vertical" === this.orientation && (g = 1 - g), f = this._valueMax() - this._valueMin(), e = this._valueMin() + g * f, this._trimAlignValue(e)
        },
        _start: function(a, c) {
            var b = {
                handle: this.handles[c],
                value: this.value()
            };
            return this.options.values && this.options.values.length && (b.value = this.values(c), b.values = this.values()), this._trigger("start", a, b)
        },
        _slide: function(a, c, b) {
            var g, f, e;
            this.options.values && this.options.values.length ? (g = this.values(c ? 0 : 1), 2 === this.options.values.length && !0 === this.options.range &&
            (0 === c && b > g || 1 === c && g > b) && (b = g), b !== this.values(c) && (f = this.values(), f[c] = b, e = this._trigger("slide", a, {
                handle: this.handles[c],
                value: b,
                values: f
            }), this.values(c ? 0 : 1), !1 !== e && this.values(c, b))) : b !== this.value() && (e = this._trigger("slide", a, {
                handle: this.handles[c],
                value: b
            }), !1 !== e && this.value(b))
        },
        _stop: function(a, c) {
            var b = {
                handle: this.handles[c],
                value: this.value()
            };
            this.options.values && this.options.values.length && (b.value = this.values(c), b.values = this.values());
            this._trigger("stop", a, b)
        },
        _change: function(a,
                          c) {
            if (!this._keySliding && !this._mouseSliding) {
                var b = {
                    handle: this.handles[c],
                    value: this.value()
                };
                this.options.values && this.options.values.length && (b.value = this.values(c), b.values = this.values());
                this._lastChangedValue = c;
                this._trigger("change", a, b)
            }
        },
        value: function(a) {
            return arguments.length ? (this.options.value = this._trimAlignValue(a), this._refreshValue(), void this._change(null, 0)) : this._value()
        },
        values: function(d, c) {
            var b, g, f;
            if (1 < arguments.length) return this.options.values[d] = this._trimAlignValue(c),
                this._refreshValue(), void this._change(null, d);
            if (!arguments.length) return this._values();
            if (!a.isArray(arguments[0])) return this.options.values && this.options.values.length ? this._values(d) : this.value();
            b = this.options.values;
            g = arguments[0];
            for (f = 0; b.length > f; f += 1) b[f] = this._trimAlignValue(g[f]), this._change(null, f);
            this._refreshValue()
        },
        _setOption: function(d, c) {
            var b = 0;
            switch ("range" === d && !0 === this.options.range && ("min" === c ? (this.options.value = this._values(0), this.options.values = null) : "max" === c && (this.options.value =
                this._values(this.options.values.length - 1), this.options.values = null)), a.isArray(this.options.values) && (b = this.options.values.length), "disabled" === d && this.element.toggleClass("ui-state-disabled", !!c), this._super(d, c), d) {
                case "orientation":
                    this._detectOrientation();
                    this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation);
                    this._refreshValue();
                    this.handles.css("horizontal" === c ? "bottom" : "left", "");
                    break;
                case "value":
                    this._animateOff = !0;
                    this._refreshValue();
                    this._change(null, 0);
                    this._animateOff = !1;
                    break;
                case "values":
                    this._animateOff = !0;
                    this._refreshValue();
                    for (d = 0; b > d; d += 1) this._change(null, d);
                    this._animateOff = !1;
                    break;
                case "step":
                case "min":
                case "max":
                    this._animateOff = !0;
                    this._calculateNewMax();
                    this._refreshValue();
                    this._animateOff = !1;
                    break;
                case "range":
                    this._animateOff = !0, this._refresh(), this._animateOff = !1
            }
        },
        _value: function() {
            return this._trimAlignValue(this.options.value)
        },
        _values: function(a) {
            var c, b;
            if (arguments.length) return c = this.options.values[a],
                this._trimAlignValue(c);
            if (this.options.values && this.options.values.length) {
                c = this.options.values.slice();
                for (b = 0; c.length > b; b += 1) c[b] = this._trimAlignValue(c[b]);
                return c
            }
            return []
        },
        _trimAlignValue: function(a) {
            if (this._valueMin() >= a) return this._valueMin();
            if (a >= this._valueMax()) return this._valueMax();
            var c = 0 < this.options.step ? this.options.step : 1,
                b = (a - this._valueMin()) % c;
            a -= b;
            return 2 * Math.abs(b) >= c && (a += 0 < b ? c : -c), parseFloat(a.toFixed(5))
        },
        _calculateNewMax: function() {
            var a = this.options.max,
                c = this._valueMin(),
                b = this.options.step,
                a = Math.floor(+(a - c).toFixed(this._precision()) / b) * b + c;
            this.max = parseFloat(a.toFixed(this._precision()))
        },
        _precision: function() {
            var a = this._precisionOf(this.options.step);
            return null !== this.options.min && (a = Math.max(a, this._precisionOf(this.options.min))), a
        },
        _precisionOf: function(a) {
            a = "" + a;
            var c = a.indexOf(".");
            return -1 === c ? 0 : a.length - c - 1
        },
        _valueMin: function() {
            return this.options.min
        },
        _valueMax: function() {
            return this.max
        },
        _refreshValue: function() {
            var d, c, b, g, f, e = this.options.range,
                k = this.options,
                h = this,
                l = this._animateOff ? !1 : k.animate,
                n = {};
            this.options.values && this.options.values.length ? this.handles.each(function(b) {
                c = 100 * ((h.values(b) - h._valueMin()) / (h._valueMax() - h._valueMin()));
                n["horizontal" === h.orientation ? "left" : "bottom"] = c + "%";
                a(this).stop(1, 1)[l ? "animate" : "css"](n, k.animate);
                !0 === h.options.range && ("horizontal" === h.orientation ? (0 === b && h.range.stop(1, 1)[l ? "animate" : "css"]({
                        left: c + "%"
                    }, k.animate), 1 === b && h.range[l ? "animate" : "css"]({
                        width: c - d + "%"
                    }, {
                        queue: !1,
                        duration: k.animate
                    })) :
                    (0 === b && h.range.stop(1, 1)[l ? "animate" : "css"]({
                        bottom: c + "%"
                    }, k.animate), 1 === b && h.range[l ? "animate" : "css"]({
                        height: c - d + "%"
                    }, {
                        queue: !1,
                        duration: k.animate
                    })));
                d = c
            }) : (b = this.value(), g = this._valueMin(), f = this._valueMax(), c = f !== g ? (b - g) / (f - g) * 100 : 0, n["horizontal" === this.orientation ? "left" : "bottom"] = c + "%", this.handle.stop(1, 1)[l ? "animate" : "css"](n, k.animate), "min" === e && "horizontal" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({
                width: c + "%"
            }, k.animate), "max" === e && "horizontal" === this.orientation &&
            this.range[l ? "animate" : "css"]({
                width: 100 - c + "%"
            }, {
                queue: !1,
                duration: k.animate
            }), "min" === e && "vertical" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({
                height: c + "%"
            }, k.animate), "max" === e && "vertical" === this.orientation && this.range[l ? "animate" : "css"]({
                height: 100 - c + "%"
            }, {
                queue: !1,
                duration: k.animate
            }))
        },
        _handleEvents: {
            keydown: function(d) {
                var c, b, g, f = a(d.target).data("ui-slider-handle-index");
                switch (d.keyCode) {
                    case a.ui.keyCode.HOME:
                    case a.ui.keyCode.END:
                    case a.ui.keyCode.PAGE_UP:
                    case a.ui.keyCode.PAGE_DOWN:
                    case a.ui.keyCode.UP:
                    case a.ui.keyCode.RIGHT:
                    case a.ui.keyCode.DOWN:
                    case a.ui.keyCode.LEFT:
                        if (d.preventDefault(), !this._keySliding && (this._keySliding = !0, a(d.target).addClass("ui-state-active"), c = this._start(d, f), !1 === c)) return
                }
                switch (g = this.options.step, c = b = this.options.values && this.options.values.length ? this.values(f) : this.value(), d.keyCode) {
                    case a.ui.keyCode.HOME:
                        b = this._valueMin();
                        break;
                    case a.ui.keyCode.END:
                        b = this._valueMax();
                        break;
                    case a.ui.keyCode.PAGE_UP:
                        b = this._trimAlignValue(c + (this._valueMax() - this._valueMin()) / this.numPages);
                        break;
                    case a.ui.keyCode.PAGE_DOWN:
                        b = this._trimAlignValue(c - (this._valueMax() -
                            this._valueMin()) / this.numPages);
                        break;
                    case a.ui.keyCode.UP:
                    case a.ui.keyCode.RIGHT:
                        if (c === this._valueMax()) return;
                        b = this._trimAlignValue(c + g);
                        break;
                    case a.ui.keyCode.DOWN:
                    case a.ui.keyCode.LEFT:
                        if (c === this._valueMin()) return;
                        b = this._trimAlignValue(c - g)
                }
                this._slide(d, f, b)
            },
            keyup: function(d) {
                var c = a(d.target).data("ui-slider-handle-index");
                this._keySliding && (this._keySliding = !1, this._stop(d, c), this._change(d, c), a(d.target).removeClass("ui-state-active"))
            }
        }
    })
});
(function() {
    var a, l, h, e, f, k = function(a, b) {
            return function() {
                return a.apply(b, arguments)
            }
        },
        d = [].indexOf || function(a) {
            for (var b = 0, g = this.length; g > b; b++)
                if (b in this && this[b] === a) return b;
            return -1
        };
    l = function() {
        function a() {}
        return a.prototype.extend = function(a, c) {
            var d, f;
            for (d in c) f = c[d], null == a[d] && (a[d] = f);
            return a
        }, a.prototype.isMobile = function(a) {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a)
        }, a.prototype.createEvent = function(a, c, d, f) {
            var e;
            return null == c && (c = !1),
            null == d && (d = !1), null == f && (f = null), null != document.createEvent ? (e = document.createEvent("CustomEvent"), e.initCustomEvent(a, c, d, f)) : null != document.createEventObject ? (e = document.createEventObject(), e.eventType = a) : e.eventName = a, e
        }, a.prototype.emitEvent = function(a, c) {
            return null != a.dispatchEvent ? a.dispatchEvent(c) : c in (null != a) ? a[c]() : "on" + c in (null != a) ? a["on" + c]() : void 0
        }, a.prototype.addEvent = function(a, c, d) {
            return null != a.addEventListener ? a.addEventListener(c, d, !1) : null != a.attachEvent ? a.attachEvent("on" +
                c, d) : a[c] = d
        }, a.prototype.removeEvent = function(a, c, d) {
            return null != a.removeEventListener ? a.removeEventListener(c, d, !1) : null != a.detachEvent ? a.detachEvent("on" + c, d) : delete a[c]
        }, a.prototype.innerHeight = function() {
            return "innerHeight" in window ? window.innerHeight : document.documentElement.clientHeight
        }, a
    }();
    h = this.WeakMap || this.MozWeakMap || (h = function() {
        function a() {
            this.keys = [];
            this.values = []
        }
        return a.prototype.get = function(a) {
            var c, d, f, e, k;
            k = this.keys;
            c = f = 0;
            for (e = k.length; e > f; c = ++f)
                if (d = k[c], d === a) return this.values[c]
        },
            a.prototype.set = function(a, c) {
                var d, f, e, k, h;
                h = this.keys;
                d = e = 0;
                for (k = h.length; k > e; d = ++e)
                    if (f = h[d], f === a) return void(this.values[d] = c);
                return this.keys.push(a), this.values.push(c)
            }, a
    }());
    a = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (a = function() {
        function a() {
            "undefined" != typeof console && null !== console && console.warn("MutationObserver is not supported by your browser.");
            "undefined" != typeof console && null !== console && console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")
        }
        return a.notSupported = !0, a.prototype.observe = function() {}, a
    }());
    e = this.getComputedStyle || function(a) {
        return this.getPropertyValue = function(b) {
            var g;
            return "float" === b && (b = "styleFloat"), f.test(b) && b.replace(f, function(a, b) {
                return b.toUpperCase()
            }), (null != (g = a.currentStyle) ? g[b] : void 0) || null
        }, this
    };
    f = /(\-([a-z]){1})/g;
    this.WOW = function() {
        function c(a) {
            null == a && (a = {});
            this.scrollCallback = k(this.scrollCallback, this);
            this.scrollHandler = k(this.scrollHandler, this);
            this.resetAnimation = k(this.resetAnimation,
                this);
            this.start = k(this.start, this);
            this.scrolled = !0;
            this.config = this.util().extend(a, this.defaults);
            null != a.scrollContainer && (this.config.scrollContainer = document.querySelector(a.scrollContainer));
            this.animationNameCache = new h;
            this.wowEvent = this.util().createEvent(this.config.boxClass)
        }
        return c.prototype.defaults = {
            boxClass: "wow",
            animateClass: "animated",
            offset: 0,
            mobile: !0,
            live: !0,
            callback: null,
            scrollContainer: null
        }, c.prototype.init = function() {
            var a;
            return this.element = window.document.documentElement,
                "interactive" === (a = document.readyState) || "complete" === a ? this.start() : this.util().addEvent(document, "DOMContentLoaded", this.start), this.finished = []
        }, c.prototype.start = function() {
            var b, c, d, f;
            if (this.stopped = !1, this.boxes = function() {
                var a, c, g, d;
                g = this.element.querySelectorAll("." + this.config.boxClass);
                d = [];
                a = 0;
                for (c = g.length; c > a; a++) b = g[a], d.push(b);
                return d
            }.call(this), this.all = function() {
                var a, c, g, d;
                g = this.boxes;
                d = [];
                a = 0;
                for (c = g.length; c > a; a++) b = g[a], d.push(b);
                return d
            }.call(this), this.boxes.length)
                if (this.disabled()) this.resetStyle();
                else
                    for (f = this.boxes, c = 0, d = f.length; d > c; c++) b = f[c], this.applyStyle(b, !0);
            return this.disabled() || (this.util().addEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler), this.util().addEvent(window, "resize", this.scrollHandler), this.interval = setInterval(this.scrollCallback, 50)), this.config.live ? (new a(function(a) {
                return function(b) {
                    var c, g, d, f, e;
                    e = [];
                    c = 0;
                    for (g = b.length; g > c; c++) f = b[c], e.push(function() {
                        var a, b, c, g;
                        c = f.addedNodes || [];
                        g = [];
                        a = 0;
                        for (b = c.length; b > a; a++) d = c[a], g.push(this.doSync(d));
                        return g
                    }.call(a));
                    return e
                }
            }(this))).observe(document.body, {
                childList: !0,
                subtree: !0
            }) : void 0
        }, c.prototype.stop = function() {
            return this.stopped = !0, this.util().removeEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler), this.util().removeEvent(window, "resize", this.scrollHandler), null != this.interval ? clearInterval(this.interval) : void 0
        }, c.prototype.sync = function() {
            return a.notSupported ? this.doSync(this.element) : void 0
        }, c.prototype.doSync = function(a) {
            var c, f, e, k;
            if (null == a && (a = this.element),
            1 === a.nodeType) {
                a = a.parentNode || a;
                e = a.querySelectorAll("." + this.config.boxClass);
                k = [];
                c = 0;
                for (f = e.length; f > c; c++) a = e[c], 0 > d.call(this.all, a) ? (this.boxes.push(a), this.all.push(a), this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(a, !0), k.push(this.scrolled = !0)) : k.push(void 0);
                return k
            }
        }, c.prototype.show = function(a) {
            return this.applyStyle(a), a.className = a.className + " " + this.config.animateClass, null != this.config.callback && this.config.callback(a), this.util().emitEvent(a, this.wowEvent), this.util().addEvent(a,
                "animationend", this.resetAnimation), this.util().addEvent(a, "oanimationend", this.resetAnimation), this.util().addEvent(a, "webkitAnimationEnd", this.resetAnimation), this.util().addEvent(a, "MSAnimationEnd", this.resetAnimation), a
        }, c.prototype.applyStyle = function(a, c) {
            var d, f, e;
            return f = a.getAttribute("data-wow-duration"), d = a.getAttribute("data-wow-delay"), e = a.getAttribute("data-wow-iteration"), this.animate(function(k) {
                return function() {
                    return k.customStyle(a, c, f, d, e)
                }
            }(this))
        }, c.prototype.animate = function() {
            return "requestAnimationFrame" in
            window ? function(a) {
                return window.requestAnimationFrame(a)
            } : function(a) {
                return a()
            }
        }(), c.prototype.resetStyle = function() {
            var a, c, d, f, e;
            f = this.boxes;
            e = [];
            c = 0;
            for (d = f.length; d > c; c++) a = f[c], e.push(a.style.visibility = "visible");
            return e
        }, c.prototype.resetAnimation = function(a) {
            var c;
            return 0 <= a.type.toLowerCase().indexOf("animationend") ? (c = a.target || a.srcElement, c.className = c.className.replace(this.config.animateClass, "").trim()) : void 0
        }, c.prototype.customStyle = function(a, c, d, f, e) {
            return c && this.cacheAnimationName(a),
                a.style.visibility = c ? "hidden" : "visible", d && this.vendorSet(a.style, {
                animationDuration: d
            }), f && this.vendorSet(a.style, {
                animationDelay: f
            }), e && this.vendorSet(a.style, {
                animationIterationCount: e
            }), this.vendorSet(a.style, {
                animationName: c ? "none" : this.cachedAnimationName(a)
            }), a
        }, c.prototype.vendors = ["moz", "webkit"], c.prototype.vendorSet = function(a, c) {
            var d, f, e, k;
            f = [];
            for (d in c) e = c[d], a["" + d] = e, f.push(function() {
                var c, g, f, h;
                f = this.vendors;
                h = [];
                c = 0;
                for (g = f.length; g > c; c++) k = f[c], h.push(a["" + k + d.charAt(0).toUpperCase() +
                d.substr(1)] = e);
                return h
            }.call(this));
            return f
        }, c.prototype.vendorCSS = function(a, c) {
            var d, f, k, h, l;
            h = e(a);
            k = h.getPropertyCSSValue(c);
            f = this.vendors;
            a = 0;
            for (d = f.length; d > a; a++) l = f[a], k = k || h.getPropertyCSSValue("-" + l + "-" + c);
            return k
        }, c.prototype.animationName = function(a) {
            var c;
            try {
                c = this.vendorCSS(a, "animation-name").cssText
            } catch (d) {
                c = e(a).getPropertyValue("animation-name")
            }
            return "none" === c ? "" : c
        }, c.prototype.cacheAnimationName = function(a) {
            return this.animationNameCache.set(a, this.animationName(a))
        },
            c.prototype.cachedAnimationName = function(a) {
                return this.animationNameCache.get(a)
            }, c.prototype.scrollHandler = function() {
            return this.scrolled = !0
        }, c.prototype.scrollCallback = function() {
            var a;
            if (!(a = !this.scrolled)) {
                this.scrolled = !1;
                var c, d, f, e;
                f = this.boxes;
                e = [];
                c = 0;
                for (d = f.length; d > c; c++)(a = f[c]) && (this.isVisible(a) ? this.show(a) : e.push(a));
                a = (this.boxes = e, this.boxes.length || this.config.live)
            }
            return a ? void 0 : this.stop()
        }, c.prototype.offsetTop = function(a) {
            for (var c; void 0 === a.offsetTop;) a = a.parentNode;
            for (c = a.offsetTop; a = a.offsetParent;) c += a.offsetTop;
            return c
        }, c.prototype.isVisible = function(a) {
            var c, d, f, e, k;
            return d = a.getAttribute("data-wow-offset") || this.config.offset, k = this.config.scrollContainer && this.config.scrollContainer.scrollTop || window.pageYOffset, e = k + Math.min(this.element.clientHeight, this.util().innerHeight()) - d, f = this.offsetTop(a), c = f + a.clientHeight, e >= f && c >= k
        }, c.prototype.util = function() {
            return null != this._util ? this._util : this._util = new l
        }, c.prototype.disabled = function() {
            return !this.config.mobile &&
                this.util().isMobile(navigator.userAgent)
        }, c
    }()
}).call(this);
(function(a) {
    a.fn.meanmenu = function(l) {
        var h = {
            meanMenuTarget: jQuery(this),
            meanMenuContainer: ".mobile-menu-area .container",
            meanMenuClose: "X",
            meanMenuCloseSize: "18px",
            meanMenuOpen: "<span /><span /><span />",
            meanRevealPosition: "right",
            meanRevealPositionDistance: "0",
            meanRevealColour: "",
            meanScreenWidth: "991",
            meanNavPush: "",
            meanShowChildren: !0,
            meanExpandableChildren: !0,
            meanExpand: "+",
            meanContract: "-",
            meanRemoveAttrs: !1,
            onePage: !1,
            meanDisplay: "block",
            removeElements: ""
        };
        l = a.extend(h, l);
        var e = window.innerWidth ||
            document.documentElement.clientWidth;
        return this.each(function() {
            var a = l.meanMenuTarget,
                k = l.meanMenuContainer,
                d = l.meanMenuClose,
                c = l.meanMenuCloseSize,
                b = l.meanMenuOpen,
                g = l.meanRevealPosition,
                h = l.meanRevealPositionDistance,
                t = l.meanRevealColour,
                q = l.meanScreenWidth,
                p = l.meanNavPush,
                v = l.meanShowChildren,
                n = l.meanExpandableChildren,
                u = l.meanExpand,
                y = l.meanContract,
                x = l.meanRemoveAttrs,
                w = l.onePage,
                F = l.meanDisplay,
                G = l.removeElements,
                L = !1;
            (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i) ||
                navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/Blackberry/i) || navigator.userAgent.match(/Windows Phone/i)) && (L = !0);
            (navigator.userAgent.match(/MSIE 8/i) || navigator.userAgent.match(/MSIE 7/i)) && jQuery("html").css("overflow-y", "scroll");
            var C = "",
                M = function() {
                    if ("center" === g) {
                        var a = (window.innerWidth || document.documentElement.clientWidth) / 2 - 22 + "px";
                        C = "left:" + a + ";right:auto;";
                        L ? jQuery(".meanmenu-reveal").animate({
                            left: a
                        }) : jQuery(".meanmenu-reveal").css("left",
                            a)
                    }
                },
                K = !1,
                E = !1;
            "right" === g && (C = "right:" + h + ";left:auto;");
            "left" === g && (C = "left:" + h + ";right:auto;");
            M();
            var N = "",
                J = function() {
                    jQuery(".mean-bar,.mean-push").remove();
                    jQuery(k).removeClass("mean-container");
                    jQuery(a).css("display", F);
                    E = K = !1;
                    jQuery(G).removeClass("mean-remove")
                },
                Y = function() {
                    var g = "background:" + t + ";color:" + t + ";" + C;
                    q >= e ? (jQuery(G).addClass("mean-remove"), E = !0, jQuery(k).addClass("mean-container"), jQuery(".mean-container").prepend('<div class="mean-bar"><a href="#nav" class="meanmenu-reveal" style="' +
                        g + '">Show Navigation</a><nav class="mean-nav"></nav></div>'), g = jQuery(a).html(), jQuery(".mean-nav").html(g), x && jQuery("nav.mean-nav ul, nav.mean-nav ul *").each(function() {
                        jQuery(this).is(".mean-remove") ? jQuery(this).attr("class", "mean-remove") : jQuery(this).removeAttr("class");
                        jQuery(this).removeAttr("id")
                    }), jQuery(a).before('<div class="mean-push" />'), jQuery(".mean-push").css("margin-top", p), jQuery(a).hide(), jQuery(".meanmenu-reveal").show(), jQuery(".meanmenu-reveal").html(b), N = jQuery(".meanmenu-reveal"),
                        jQuery(".mean-nav ul").hide(), v ? n ? (jQuery(".mean-nav ul ul").each(function() {
                            jQuery(this).children().length && jQuery(this, "li:first").parent().append('<a class="mean-expand" href="#" style="font-size: ' + c + '">' + u + "</a>")
                        }), jQuery(".mean-expand").on("click", function(a) {
                            a.preventDefault();
                            jQuery(this).hasClass("mean-clicked") ? (jQuery(this).text(u), jQuery(this).prev("ul").slideUp(300, function() {})) : (jQuery(this).text(y), jQuery(this).prev("ul").slideDown(300, function() {}));
                            jQuery(this).toggleClass("mean-clicked")
                        })) :
                        jQuery(".mean-nav ul ul").show() : jQuery(".mean-nav ul ul").hide(), jQuery(".mean-nav ul li").last().addClass("mean-last"), N.removeClass("meanclose"), jQuery(N).click(function(a) {
                        a.preventDefault();
                        !1 === K ? (N.css("text-align", "center"), N.css("text-indent", "0"), N.css("font-size", c), jQuery(".mean-nav ul:first").slideDown(), K = !0) : (jQuery(".mean-nav ul:first").slideUp(), K = !1);
                        N.toggleClass("meanclose");
                        jQuery(N).is(".meanmenu-reveal.meanclose") ? N.html(d) : N.html(b);
                        jQuery(G).addClass("mean-remove")
                    }), w && jQuery(".mean-nav ul > li > a:first-child").on("click",
                        function() {
                            jQuery(".mean-nav ul:first").slideUp();
                            K = !1;
                            jQuery(N).toggleClass("meanclose").html(b)
                        })) : J()
                };
            L || jQuery(window).resize(function() {
                e = window.innerWidth || document.documentElement.clientWidth;
                e > q;
                J();
                q >= e ? (Y(), M()) : J()
            });
            jQuery(window).resize(function() {
                e = window.innerWidth || document.documentElement.clientWidth;
                L ? (M(), q >= e ? !1 === E && Y() : J()) : (J(), q >= e && (Y(), M()))
            });
            Y()
        })
    }
})(jQuery);
(function() {
    var a, l, h, e, f = {}.hasOwnProperty,
        k = function(a, c) {
            function b() {
                this.constructor = a
            }
            for (var g in c) f.call(c, g) && (a[g] = c[g]);
            return b.prototype = c.prototype, a.prototype = new b, a.__super__ = c.prototype, a
        };
    e = function() {
        function a() {
            this.options_index = 0;
            this.parsed = []
        }
        return a.prototype.add_node = function(a) {
            return "OPTGROUP" === a.nodeName.toUpperCase() ? this.add_group(a) : this.add_option(a)
        }, a.prototype.add_group = function(a) {
            var b, g, d, f, e, k;
            b = this.parsed.length;
            this.parsed.push({
                array_index: b,
                group: !0,
                label: this.escapeExpression(a.label),
                title: a.title ? a.title : void 0,
                children: 0,
                disabled: a.disabled,
                classes: a.className
            });
            e = a.childNodes;
            k = [];
            d = 0;
            for (f = e.length; f > d; d++) g = e[d], k.push(this.add_option(g, b, a.disabled));
            return k
        }, a.prototype.add_option = function(a, b, g) {
            return "OPTION" === a.nodeName.toUpperCase() ? ("" !== a.text ? (null != b && (this.parsed[b].children += 1), this.parsed.push({
                array_index: this.parsed.length,
                options_index: this.options_index,
                value: a.value,
                text: a.text,
                html: a.innerHTML,
                title: a.title ? a.title : void 0,
                selected: a.selected,
                disabled: !0 === g ? g : a.disabled,
                group_array_index: b,
                group_label: null != b ? this.parsed[b].label : null,
                classes: a.className,
                style: a.style.cssText
            })) : this.parsed.push({
                array_index: this.parsed.length,
                options_index: this.options_index,
                empty: !0
            }), this.options_index += 1) : void 0
        }, a.prototype.escapeExpression = function(a) {
            var b, g;
            return null == a || !1 === a ? "" : /[\&\<\>\"\'\`]/.test(a) ? (b = {
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#x27;",
                "`": "&#x60;"
            }, g = /&(?!\w+;)|[\<\>\"\'\`]/g, a.replace(g, function(a) {
                return b[a] ||
                    "&amp;"
            })) : a
        }, a
    }();
    e.select_to_array = function(a) {
        var c, b, g, f;
        c = new e;
        f = a.childNodes;
        b = 0;
        for (g = f.length; g > b; b++) a = f[b], c.add_node(a);
        return c.parsed
    };
    l = function() {
        function a(c, b) {
            this.form_field = c;
            this.options = null != b ? b : {};
            a.browser_is_supported() && (this.is_multiple = this.form_field.multiple, this.set_default_text(), this.set_default_values(), this.setup(), this.set_up_html(), this.register_observers(), this.on_ready())
        }
        return a.prototype.set_default_values = function() {
            var a = this;
            return this.click_test_action =
                function(b) {
                    return a.test_active_click(b)
                }, this.activate_action = function(b) {
                return a.activate_field(b)
            }, this.active_field = !1, this.mouse_on_container = !1, this.results_showing = !1, this.result_highlighted = null, this.allow_single_deselect = null != this.options.allow_single_deselect && null != this.form_field.options[0] && "" === this.form_field.options[0].text ? this.options.allow_single_deselect : !1, this.disable_search_threshold = this.options.disable_search_threshold || 0, this.disable_search = this.options.disable_search ||
                !1, this.enable_split_word_search = null != this.options.enable_split_word_search ? this.options.enable_split_word_search : !0, this.group_search = null != this.options.group_search ? this.options.group_search : !0, this.search_contains = this.options.search_contains || !1, this.single_backstroke_delete = null != this.options.single_backstroke_delete ? this.options.single_backstroke_delete : !0, this.max_selected_options = this.options.max_selected_options || 1 / 0, this.inherit_select_classes = this.options.inherit_select_classes || !1, this.display_selected_options =
                null != this.options.display_selected_options ? this.options.display_selected_options : !0, this.display_disabled_options = null != this.options.display_disabled_options ? this.options.display_disabled_options : !0, this.include_group_label_in_selected = this.options.include_group_label_in_selected || !1, this.max_shown_results = this.options.max_shown_results || Number.POSITIVE_INFINITY
        }, a.prototype.set_default_text = function() {
            return this.form_field.getAttribute("data-placeholder") ? this.default_text = this.form_field.getAttribute("data-placeholder") :
                this.is_multiple ? this.default_text = this.options.placeholder_text_multiple || this.options.placeholder_text || a.default_multiple_text : this.default_text = this.options.placeholder_text_single || this.options.placeholder_text || a.default_single_text, this.results_none_found = this.form_field.getAttribute("data-no_results_text") || this.options.no_results_text || a.default_no_result_text
        }, a.prototype.choice_label = function(a) {
            return this.include_group_label_in_selected && null != a.group_label ? "<b class='group-name'>" + a.group_label +
                "</b>" + a.html : a.html
        }, a.prototype.mouse_enter = function() {
            return this.mouse_on_container = !0
        }, a.prototype.mouse_leave = function() {
            return this.mouse_on_container = !1
        }, a.prototype.input_focus = function(a) {
            var b = this;
            if (this.is_multiple) {
                if (!this.active_field) return setTimeout(function() {
                    return b.container_mousedown()
                }, 50)
            } else if (!this.active_field) return this.activate_field()
        }, a.prototype.input_blur = function(a) {
            var b = this;
            return this.mouse_on_container ? void 0 : (this.active_field = !1, setTimeout(function() {
                    return b.blur_test()
                },
                100))
        }, a.prototype.results_option_build = function(a) {
            var b, g, d, f, e, k, h;
            b = "";
            f = 0;
            h = this.results_data;
            e = 0;
            for (k = h.length; k > e && (g = h[e], d = "", d = g.group ? this.result_add_group(g) : this.result_add_option(g), "" !== d && (f++, b += d), (null != a ? a.first : void 0) && (g.selected && this.is_multiple ? this.choice_build(g) : g.selected && !this.is_multiple && this.single_set_selected_text(this.choice_label(g))), !(f >= this.max_shown_results)); e++);
            return b
        }, a.prototype.result_add_option = function(a) {
            var b, g;
            return a.search_match && this.include_option_in_results(a) ?
                (b = [], a.disabled || a.selected && this.is_multiple || b.push("active-result"), !a.disabled || a.selected && this.is_multiple || b.push("disabled-result"), a.selected && b.push("result-selected"), null != a.group_array_index && b.push("group-option"), "" !== a.classes && b.push(a.classes), g = document.createElement("li"), g.className = b.join(" "), g.style.cssText = a.style, g.setAttribute("data-option-array-index", a.array_index), g.innerHTML = a.search_text, a.title && (g.title = a.title), this.outerHTML(g)) : ""
        }, a.prototype.result_add_group =
            function(a) {
                var b, g;
                return (a.search_match || a.group_match) && 0 < a.active_options ? (b = [], b.push("group-result"), a.classes && b.push(a.classes), g = document.createElement("li"), g.className = b.join(" "), g.innerHTML = a.search_text, a.title && (g.title = a.title), this.outerHTML(g)) : ""
            }, a.prototype.results_update_field = function() {
            return this.set_default_text(), this.is_multiple || this.results_reset_cleanup(), this.result_clear_highlight(), this.results_build(), this.results_showing ? this.winnow_results() : void 0
        }, a.prototype.reset_single_select_options =
            function() {
                var a, b, g, d, f;
                d = this.results_data;
                f = [];
                b = 0;
                for (g = d.length; g > b; b++) a = d[b], a.selected ? f.push(a.selected = !1) : f.push(void 0);
                return f
            }, a.prototype.results_toggle = function() {
            return this.results_showing ? this.results_hide() : this.results_show()
        }, a.prototype.results_search = function(a) {
            return this.results_showing ? this.winnow_results() : this.results_show()
        }, a.prototype.winnow_results = function() {
            var a, b, g, d, f, e, k, h, n, l, y;
            this.no_results_clear();
            g = 0;
            f = this.get_search_text();
            a = f.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,
                "\\$&");
            h = new RegExp(a, "i");
            b = this.get_search_regex(a);
            y = this.results_data;
            n = 0;
            for (l = y.length; l > n; n++) a = y[n], a.search_match = !1, d = null, this.include_option_in_results(a) && (a.group && (a.group_match = !1, a.active_options = 0), null != a.group_array_index && this.results_data[a.group_array_index] && (d = this.results_data[a.group_array_index], 0 === d.active_options && d.search_match && (g += 1), d.active_options += 1), a.search_text = a.group ? a.label : a.html, (!a.group || this.group_search) && (a.search_match = this.search_string_match(a.search_text,
                b), a.search_match && !a.group && (g += 1), a.search_match ? (f.length && (e = a.search_text.search(h), k = a.search_text.substr(0, e + f.length) + "</em>" + a.search_text.substr(e + f.length), a.search_text = k.substr(0, e) + "<em>" + k.substr(e)), null != d && (d.group_match = !0)) : null != a.group_array_index && this.results_data[a.group_array_index].search_match && (a.search_match = !0)));
            return this.result_clear_highlight(), 1 > g && f.length ? (this.update_results_content(""), this.no_results(f)) : (this.update_results_content(this.results_option_build()),
                this.winnow_results_set_highlight())
        }, a.prototype.get_search_regex = function(a) {
            var b;
            return b = this.search_contains ? "" : "^", new RegExp(b + a, "i")
        }, a.prototype.search_string_match = function(a, b) {
            var g, d, f;
            if (b.test(a)) return !0;
            if (this.enable_split_word_search && (0 <= a.indexOf(" ") || 0 === a.indexOf("[")) && (d = a.replace(/\[|\]/g, "").split(" "), d.length))
                for (a = 0, f = d.length; f > a; a++)
                    if (g = d[a], b.test(g)) return !0
        }, a.prototype.choices_count = function() {
            var a, b, g, d;
            if (null != this.selected_option_count) return this.selected_option_count;
            this.selected_option_count = 0;
            d = this.form_field.options;
            b = 0;
            for (g = d.length; g > b; b++) a = d[b], a.selected && (this.selected_option_count += 1);
            return this.selected_option_count
        }, a.prototype.choices_click = function(a) {
            return a.preventDefault(), this.results_showing || this.is_disabled ? void 0 : this.results_show()
        }, a.prototype.keyup_checker = function(a) {
            var b, g;
            switch (b = null != (g = a.which) ? g : a.keyCode, this.search_field_scale(), b) {
                case 8:
                    if (this.is_multiple && 1 > this.backstroke_length && 0 < this.choices_count()) return this.keydown_backstroke();
                    if (!this.pending_backstroke) return this.result_clear_highlight(), this.results_search();
                    break;
                case 13:
                    if (a.preventDefault(), this.results_showing) return this.result_select(a);
                    break;
                case 27:
                    return this.results_showing && this.results_hide(), !0;
                case 9:
                case 38:
                case 40:
                case 16:
                case 91:
                case 17:
                case 18:
                    break;
                default:
                    return this.results_search()
            }
        }, a.prototype.clipboard_event_checker = function(a) {
            var b = this;
            return setTimeout(function() {
                return b.results_search()
            }, 50)
        }, a.prototype.container_width = function() {
            return null !=
            this.options.width ? this.options.width : "" + this.form_field.offsetWidth + "px"
        }, a.prototype.include_option_in_results = function(a) {
            return this.is_multiple && !this.display_selected_options && a.selected ? !1 : !this.display_disabled_options && a.disabled ? !1 : a.empty ? !1 : !0
        }, a.prototype.search_results_touchstart = function(a) {
            return this.touch_started = !0, this.search_results_mouseover(a)
        }, a.prototype.search_results_touchmove = function(a) {
            return this.touch_started = !1, this.search_results_mouseout(a)
        }, a.prototype.search_results_touchend =
            function(a) {
                return this.touch_started ? this.search_results_mouseup(a) : void 0
            }, a.prototype.outerHTML = function(a) {
            var b;
            return a.outerHTML ? a.outerHTML : (b = document.createElement("div"), b.appendChild(a), b.innerHTML)
        }, a.browser_is_supported = function() {
            return /iP(od|hone)/i.test(window.navigator.userAgent) ? !1 : /Android/i.test(window.navigator.userAgent) && /Mobile/i.test(window.navigator.userAgent) ? !1 : /IEMobile/i.test(window.navigator.userAgent) ? !1 : /Windows Phone/i.test(window.navigator.userAgent) ? !1 : /BlackBerry/i.test(window.navigator.userAgent) ?
                !1 : /BB10/i.test(window.navigator.userAgent) ? !1 : "Microsoft Internet Explorer" === window.navigator.appName ? 8 <= document.documentMode : !0
        }, a.default_multiple_text = "Select Some Options", a.default_single_text = "Select an Option", a.default_no_result_text = "No results match", a
    }();
    a = jQuery;
    a.fn.extend({
        chosen: function(d) {
            return l.browser_is_supported() ? this.each(function(c) {
                var b, g;
                return b = a(this), g = b.data("chosen"), "destroy" === d ? void(g instanceof h && g.destroy()) : void(g instanceof h || b.data("chosen", new h(this,
                    d)))
            }) : this
        }
    });
    h = function(d) {
        function c() {
            return c.__super__.constructor.apply(this, arguments)
        }
        return k(c, d), c.prototype.setup = function() {
            return this.form_field_jq = a(this.form_field), this.current_selectedIndex = this.form_field.selectedIndex, this.is_rtl = this.form_field_jq.hasClass("chosen-rtl")
        }, c.prototype.set_up_html = function() {
            var b, c;
            return b = ["chosen-container"], b.push("chosen-container-" + (this.is_multiple ? "multi" : "single")), this.inherit_select_classes && this.form_field.className && b.push(this.form_field.className),
            this.is_rtl && b.push("chosen-rtl"), c = {
                "class": b.join(" "),
                style: "width: " + this.container_width() + ";",
                title: this.form_field.title
            }, this.form_field.id.length && (c.id = this.form_field.id.replace(/[^\w]/g, "_") + "_chosen"), this.container = a("<div />", c), this.is_multiple ? this.container.html('<ul class="chosen-choices"><li class="search-field"><input type="text" value="' + this.default_text + '" class="default" autocomplete="off" style="width:25px;" /></li></ul><div class="chosen-drop"><ul class="chosen-results"></ul></div>') :
                this.container.html('<a class="chosen-single chosen-default"><span>' + this.default_text + '</span><div><b></b></div></a><div class="chosen-drop"><div class="chosen-search"><input type="text" autocomplete="off" /></div><ul class="chosen-results"></ul></div>'), this.form_field_jq.hide().after(this.container), this.dropdown = this.container.find("div.chosen-drop").first(), this.search_field = this.container.find("input").first(), this.search_results = this.container.find("ul.chosen-results").first(), this.search_field_scale(),
                this.search_no_results = this.container.find("li.no-results").first(), this.is_multiple ? (this.search_choices = this.container.find("ul.chosen-choices").first(), this.search_container = this.container.find("li.search-field").first()) : (this.search_container = this.container.find("div.chosen-search").first(), this.selected_item = this.container.find(".chosen-single").first()), this.results_build(), this.set_tab_index(), this.set_label_behavior()
        }, c.prototype.on_ready = function() {
            return this.form_field_jq.trigger("chosen:ready", {
                chosen: this
            })
        }, c.prototype.register_observers = function() {
            var a = this;
            return this.container.bind("touchstart.chosen", function(c) {
                return a.container_mousedown(c), c.preventDefault()
            }), this.container.bind("touchend.chosen", function(c) {
                return a.container_mouseup(c), c.preventDefault()
            }), this.container.bind("mousedown.chosen", function(c) {
                a.container_mousedown(c)
            }), this.container.bind("mouseup.chosen", function(c) {
                a.container_mouseup(c)
            }), this.container.bind("mouseenter.chosen", function(c) {
                a.mouse_enter(c)
            }),
                this.container.bind("mouseleave.chosen", function(c) {
                    a.mouse_leave(c)
                }), this.search_results.bind("mouseup.chosen", function(c) {
                a.search_results_mouseup(c)
            }), this.search_results.bind("mouseover.chosen", function(c) {
                a.search_results_mouseover(c)
            }), this.search_results.bind("mouseout.chosen", function(c) {
                a.search_results_mouseout(c)
            }), this.search_results.bind("mousewheel.chosen DOMMouseScroll.chosen", function(c) {
                a.search_results_mousewheel(c)
            }), this.search_results.bind("touchstart.chosen", function(c) {
                a.search_results_touchstart(c)
            }),
                this.search_results.bind("touchmove.chosen", function(c) {
                    a.search_results_touchmove(c)
                }), this.search_results.bind("touchend.chosen", function(c) {
                a.search_results_touchend(c)
            }), this.form_field_jq.bind("chosen:updated.chosen", function(c) {
                a.results_update_field(c)
            }), this.form_field_jq.bind("chosen:activate.chosen", function(c) {
                a.activate_field(c)
            }), this.form_field_jq.bind("chosen:open.chosen", function(c) {
                a.container_mousedown(c)
            }), this.form_field_jq.bind("chosen:close.chosen", function(c) {
                a.input_blur(c)
            }),
                this.search_field.bind("blur.chosen", function(c) {
                    a.input_blur(c)
                }), this.search_field.bind("keyup.chosen", function(c) {
                a.keyup_checker(c)
            }), this.search_field.bind("keydown.chosen", function(c) {
                a.keydown_checker(c)
            }), this.search_field.bind("focus.chosen", function(c) {
                a.input_focus(c)
            }), this.search_field.bind("cut.chosen", function(c) {
                a.clipboard_event_checker(c)
            }), this.search_field.bind("paste.chosen", function(c) {
                a.clipboard_event_checker(c)
            }), this.is_multiple ? this.search_choices.bind("click.chosen", function(c) {
                    a.choices_click(c)
                }) :
                this.container.bind("click.chosen", function(a) {
                    a.preventDefault()
                })
        }, c.prototype.destroy = function() {
            return a(this.container[0].ownerDocument).unbind("click.chosen", this.click_test_action), this.search_field[0].tabIndex && (this.form_field_jq[0].tabIndex = this.search_field[0].tabIndex), this.container.remove(), this.form_field_jq.removeData("chosen"), this.form_field_jq.show()
        }, c.prototype.search_field_disabled = function() {
            return this.is_disabled = this.form_field_jq[0].disabled, this.is_disabled ? (this.container.addClass("chosen-disabled"),
                this.search_field[0].disabled = !0, this.is_multiple || this.selected_item.unbind("focus.chosen", this.activate_action), this.close_field()) : (this.container.removeClass("chosen-disabled"), this.search_field[0].disabled = !1, this.is_multiple ? void 0 : this.selected_item.bind("focus.chosen", this.activate_action))
        }, c.prototype.container_mousedown = function(b) {
            return this.is_disabled || (b && "mousedown" === b.type && !this.results_showing && b.preventDefault(), null != b && a(b.target).hasClass("search-choice-close")) ? void 0 : (this.active_field ?
                this.is_multiple || !b || a(b.target)[0] !== this.selected_item[0] && !a(b.target).parents("a.chosen-single").length || (b.preventDefault(), this.results_toggle()) : (this.is_multiple && this.search_field.val(""), a(this.container[0].ownerDocument).bind("click.chosen", this.click_test_action), this.results_show()), this.activate_field())
        }, c.prototype.container_mouseup = function(a) {
            return "ABBR" !== a.target.nodeName || this.is_disabled ? void 0 : this.results_reset(a)
        }, c.prototype.search_results_mousewheel = function(a) {
            var c;
            return a.originalEvent && (c = a.originalEvent.deltaY || -a.originalEvent.wheelDelta || a.originalEvent.detail), null != c ? (a.preventDefault(), "DOMMouseScroll" === a.type && (c *= 40), this.search_results.scrollTop(c + this.search_results.scrollTop())) : void 0
        }, c.prototype.blur_test = function(a) {
            return !this.active_field && this.container.hasClass("chosen-container-active") ? this.close_field() : void 0
        }, c.prototype.close_field = function() {
            return a(this.container[0].ownerDocument).unbind("click.chosen", this.click_test_action),
                this.active_field = !1, this.results_hide(), this.container.removeClass("chosen-container-active"), this.clear_backstroke(), this.show_search_field_default(), this.search_field_scale()
        }, c.prototype.activate_field = function() {
            return this.container.addClass("chosen-container-active"), this.active_field = !0, this.search_field.val(this.search_field.val()), this.search_field.focus()
        }, c.prototype.test_active_click = function(b) {
            var c;
            return c = a(b.target).closest(".chosen-container"), c.length && this.container[0] === c[0] ?
                this.active_field = !0 : this.close_field()
        }, c.prototype.results_build = function() {
            return this.parsing = !0, this.selected_option_count = null, this.results_data = e.select_to_array(this.form_field), this.is_multiple ? this.search_choices.find("li.search-choice").remove() : this.is_multiple || (this.single_set_selected_text(), this.disable_search || this.form_field.options.length <= this.disable_search_threshold ? (this.search_field[0].readOnly = !0, this.container.addClass("chosen-container-single-nosearch")) : (this.search_field[0].readOnly = !1, this.container.removeClass("chosen-container-single-nosearch"))), this.update_results_content(this.results_option_build({
                first: !0
            })), this.search_field_disabled(), this.show_search_field_default(), this.search_field_scale(), this.parsing = !1
        }, c.prototype.result_do_highlight = function(a) {
            var c, d, f, e, k;
            if (a.length) {
                if (this.result_clear_highlight(), this.result_highlight = a, this.result_highlight.addClass("highlighted"), f = parseInt(this.search_results.css("maxHeight"), 10), k = this.search_results.scrollTop(), e =
                    f + k, d = this.result_highlight.position().top + this.search_results.scrollTop(), c = d + this.result_highlight.outerHeight(), c >= e) return this.search_results.scrollTop(0 < c - f ? c - f : 0);
                if (k > d) return this.search_results.scrollTop(d)
            }
        }, c.prototype.result_clear_highlight = function() {
            return this.result_highlight && this.result_highlight.removeClass("highlighted"), this.result_highlight = null
        }, c.prototype.results_show = function() {
            return this.is_multiple && this.max_selected_options <= this.choices_count() ? (this.form_field_jq.trigger("chosen:maxselected", {
                chosen: this
            }), !1) : (this.container.addClass("chosen-with-drop"), this.results_showing = !0, this.search_field.focus(), this.search_field.val(this.search_field.val()), this.winnow_results(), this.form_field_jq.trigger("chosen:showing_dropdown", {
                chosen: this
            }))
        }, c.prototype.update_results_content = function(a) {
            return this.search_results.html(a)
        }, c.prototype.results_hide = function() {
            return this.results_showing && (this.result_clear_highlight(), this.container.removeClass("chosen-with-drop"), this.form_field_jq.trigger("chosen:hiding_dropdown", {
                chosen: this
            })), this.results_showing = !1
        }, c.prototype.set_tab_index = function(a) {
            var c;
            return this.form_field.tabIndex ? (c = this.form_field.tabIndex, this.form_field.tabIndex = -1, this.search_field[0].tabIndex = c) : void 0
        }, c.prototype.set_label_behavior = function() {
            var b = this;
            return this.form_field_label = this.form_field_jq.parents("label"), !this.form_field_label.length && this.form_field.id.length && (this.form_field_label = a("label[for='" + this.form_field.id + "']")), 0 < this.form_field_label.length ? this.form_field_label.bind("click.chosen",
                function(a) {
                    return b.is_multiple ? b.container_mousedown(a) : b.activate_field()
                }) : void 0
        }, c.prototype.show_search_field_default = function() {
            return this.is_multiple && 1 > this.choices_count() && !this.active_field ? (this.search_field.val(this.default_text), this.search_field.addClass("default")) : (this.search_field.val(""), this.search_field.removeClass("default"))
        }, c.prototype.search_results_mouseup = function(b) {
            var c;
            return c = a(b.target).hasClass("active-result") ? a(b.target) : a(b.target).parents(".active-result").first(),
                c.length ? (this.result_highlight = c, this.result_select(b), this.search_field.focus()) : void 0
        }, c.prototype.search_results_mouseover = function(b) {
            var c;
            return c = a(b.target).hasClass("active-result") ? a(b.target) : a(b.target).parents(".active-result").first(), c ? this.result_do_highlight(c) : void 0
        }, c.prototype.search_results_mouseout = function(b) {
            return a(b.target).hasClass("active-result") ? this.result_clear_highlight() : void 0
        }, c.prototype.choice_build = function(b) {
            var c, d, f = this;
            return c = a("<li />", {
                "class": "search-choice"
            }).html("<span>" +
                this.choice_label(b) + "</span>"), b.disabled ? c.addClass("search-choice-disabled") : (d = a("<a />", {
                "class": "search-choice-close",
                "data-option-array-index": b.array_index
            }), d.bind("click.chosen", function(a) {
                return f.choice_destroy_link_click(a)
            }), c.append(d)), this.search_container.before(c)
        }, c.prototype.choice_destroy_link_click = function(b) {
            return b.preventDefault(), b.stopPropagation(), this.is_disabled ? void 0 : this.choice_destroy(a(b.target))
        }, c.prototype.choice_destroy = function(a) {
            return this.result_deselect(a[0].getAttribute("data-option-array-index")) ?
                (this.show_search_field_default(), this.is_multiple && 0 < this.choices_count() && 1 > this.search_field.val().length && this.results_hide(), a.parents("li").first().remove(), this.search_field_scale()) : void 0
        }, c.prototype.results_reset = function() {
            return this.reset_single_select_options(), this.form_field.options[0].selected = !0, this.single_set_selected_text(), this.show_search_field_default(), this.results_reset_cleanup(), this.form_field_jq.trigger("change"), this.active_field ? this.results_hide() : void 0
        }, c.prototype.results_reset_cleanup =
            function() {
                return this.current_selectedIndex = this.form_field.selectedIndex, this.selected_item.find("abbr").remove()
            }, c.prototype.result_select = function(a) {
            var c, d;
            return this.result_highlight ? (c = this.result_highlight, this.result_clear_highlight(), this.is_multiple && this.max_selected_options <= this.choices_count() ? (this.form_field_jq.trigger("chosen:maxselected", {
                chosen: this
            }), !1) : (this.is_multiple ? c.removeClass("active-result") : this.reset_single_select_options(), c.addClass("result-selected"), d = this.results_data[c[0].getAttribute("data-option-array-index")],
                d.selected = !0, this.form_field.options[d.options_index].selected = !0, this.selected_option_count = null, this.is_multiple ? this.choice_build(d) : this.single_set_selected_text(this.choice_label(d)), (a.metaKey || a.ctrlKey) && this.is_multiple || this.results_hide(), this.show_search_field_default(), (this.is_multiple || this.form_field.selectedIndex !== this.current_selectedIndex) && this.form_field_jq.trigger("change", {
                selected: this.form_field.options[d.options_index].value
            }), this.current_selectedIndex = this.form_field.selectedIndex,
                a.preventDefault(), this.search_field_scale())) : void 0
        }, c.prototype.single_set_selected_text = function(a) {
            return null == a && (a = this.default_text), a === this.default_text ? this.selected_item.addClass("chosen-default") : (this.single_deselect_control_build(), this.selected_item.removeClass("chosen-default")), this.selected_item.find("span").html(a)
        }, c.prototype.result_deselect = function(a) {
            var c;
            return c = this.results_data[a], this.form_field.options[c.options_index].disabled ? !1 : (c.selected = !1, this.form_field.options[c.options_index].selected = !1, this.selected_option_count = null, this.result_clear_highlight(), this.results_showing && this.winnow_results(), this.form_field_jq.trigger("change", {
                deselected: this.form_field.options[c.options_index].value
            }), this.search_field_scale(), !0)
        }, c.prototype.single_deselect_control_build = function() {
            return this.allow_single_deselect ? (this.selected_item.find("abbr").length || this.selected_item.find("span").first().after('<abbr class="search-choice-close"></abbr>'), this.selected_item.addClass("chosen-single-with-deselect")) :
                void 0
        }, c.prototype.get_search_text = function() {
            return a("<div/>").text(a.trim(this.search_field.val())).html()
        }, c.prototype.winnow_results_set_highlight = function() {
            var a, c;
            return c = this.is_multiple ? [] : this.search_results.find(".result-selected.active-result"), a = c.length ? c.first() : this.search_results.find(".active-result").first(), null != a ? this.result_do_highlight(a) : void 0
        }, c.prototype.no_results = function(b) {
            var c;
            return c = a('<li class="no-results">' + this.results_none_found + ' "<span></span>"</li>'),
                c.find("span").first().html(b), this.search_results.append(c), this.form_field_jq.trigger("chosen:no_results", {
                chosen: this
            })
        }, c.prototype.no_results_clear = function() {
            return this.search_results.find(".no-results").remove()
        }, c.prototype.keydown_arrow = function() {
            var a;
            return this.results_showing && this.result_highlight ? (a = this.result_highlight.nextAll("li.active-result").first()) ? this.result_do_highlight(a) : void 0 : this.results_show()
        }, c.prototype.keyup_arrow = function() {
            var a;
            return this.results_showing ||
            this.is_multiple ? this.result_highlight ? (a = this.result_highlight.prevAll("li.active-result"), a.length ? this.result_do_highlight(a.first()) : (0 < this.choices_count() && this.results_hide(), this.result_clear_highlight())) : void 0 : this.results_show()
        }, c.prototype.keydown_backstroke = function() {
            var a;
            return this.pending_backstroke ? (this.choice_destroy(this.pending_backstroke.find("a").first()), this.clear_backstroke()) : (a = this.search_container.siblings("li.search-choice").last(), a.length && !a.hasClass("search-choice-disabled") ?
                (this.pending_backstroke = a, this.single_backstroke_delete ? this.keydown_backstroke() : this.pending_backstroke.addClass("search-choice-focus")) : void 0)
        }, c.prototype.clear_backstroke = function() {
            return this.pending_backstroke && this.pending_backstroke.removeClass("search-choice-focus"), this.pending_backstroke = null
        }, c.prototype.keydown_checker = function(a) {
            var c, d;
            switch (c = null != (d = a.which) ? d : a.keyCode, this.search_field_scale(), 8 !== c && this.pending_backstroke && this.clear_backstroke(), c) {
                case 8:
                    this.backstroke_length =
                        this.search_field.val().length;
                    break;
                case 9:
                    this.results_showing && !this.is_multiple && this.result_select(a);
                    this.mouse_on_container = !1;
                    break;
                case 13:
                    this.results_showing && a.preventDefault();
                    break;
                case 32:
                    this.disable_search && a.preventDefault();
                    break;
                case 38:
                    a.preventDefault();
                    this.keyup_arrow();
                    break;
                case 40:
                    a.preventDefault(), this.keydown_arrow()
            }
        }, c.prototype.search_field_scale = function() {
            var b, c, d, f, e, k, h, n;
            if (this.is_multiple) {
                k = 0;
                f = "position:absolute; left: -1000px; top: -1000px; display:none;";
                e = "font-size font-style font-weight font-family line-height text-transform letter-spacing".split(" ");
                h = 0;
                for (n = e.length; n > h; h++) d = e[h], f += d + ":" + this.search_field.css(d) + ";";
                return b = a("<div />", {
                    style: f
                }), b.text(this.search_field.val()), a("body").append(b), k = b.width() + 25, b.remove(), c = this.container.outerWidth(), k > c - 10 && (k = c - 10), this.search_field.css({
                    width: k + "px"
                })
            }
        }, c
    }(l)
}).call(this);
! function(a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : a(jQuery)
}(function(a) {
    function l(a) {
        return function(c) {
            var b = c.match(/%(-|!)?[A-Z]{1}(:[^;]+;)?/gi);
            if (b)
                for (var g = 0, e = b.length; e > g; ++g) {
                    var k = b[g].match(/%(-|!)?([a-zA-Z]{1})(:[^;]+;)?/),
                        h = new RegExp(k[0]),
                        l = k[1] || "",
                        v = k[3] || "",
                        n = null,
                        k = k[2];
                    f.hasOwnProperty(k) && (n = f[k], n = Number(a[n]));
                    if (null !== n) {
                        if ("!" === l) var k = v,
                            v = "s",
                            u = "",
                            n = (k && (k = k.replace(/(:|;|\s)/gi, "").split(/\,/), 1 === k.length ? v = k[0] : (u = k[0], v = k[1])), 1 === Math.abs(n) ?
                                u : v);
                        "" === l && 10 > n && (n = "0" + n.toString());
                        c = c.replace(h, n.toString())
                    }
                }
            return c.replace(/%%/, "%")
        }
    }
    var h = [],
        e = [];
    e.push(/^[0-9]*$/.source);
    e.push(/([0-9]{1,2}\/){2}[0-9]{4}( [0-9]{1,2}(:[0-9]{2}){2})?/.source);
    e.push(/[0-9]{4}([\/\-][0-9]{1,2}){2}( [0-9]{1,2}(:[0-9]{2}){2})?/.source);
    var e = new RegExp(e.join("|")),
        f = {
            Y: "years",
            m: "months",
            w: "weeks",
            d: "days",
            D: "totalDays",
            H: "hours",
            M: "minutes",
            S: "seconds"
        },
        k = function(d, c, b) {
            this.el = d;
            this.$el = a(d);
            this.interval = null;
            this.offset = {};
            this.instanceNumber =
                h.length;
            h.push(this);
            this.$el.data("countdown-instance", this.instanceNumber);
            b && (this.$el.on("update.countdown", b), this.$el.on("stoped.countdown", b), this.$el.on("finish.countdown", b));
            this.setFinalDate(c);
            this.start()
        };
    a.extend(k.prototype, {
        start: function() {
            null !== this.interval && clearInterval(this.interval);
            var a = this;
            this.update();
            this.interval = setInterval(function() {
                a.update.call(a)
            }, 100)
        },
        stop: function() {
            clearInterval(this.interval);
            this.interval = null;
            this.dispatchEvent("stoped")
        },
        pause: function() {
            this.stop.call(this)
        },
        resume: function() {
            this.start.call(this)
        },
        remove: function() {
            this.stop();
            h[this.instanceNumber] = null;
            delete this.$el.data().countdownInstance
        },
        setFinalDate: function(a) {
            var c = a;
            if (c instanceof Date) a = c;
            else if (String(c).match(e)) a = (String(c).match(/^[0-9]*$/) && (c = Number(c)), String(c).match(/\-/) && (c = String(c).replace(/\-/g, "/")), new Date(c));
            else throw Error("Couldn't cast `" + c + "` to a date object.");
            this.finalDate = a
        },
        update: function() {
            return 0 === this.$el.closest("html").length ? void this.remove() : (this.totalSecsLeft =
                this.finalDate.getTime() - (new Date).getTime(), this.totalSecsLeft = Math.ceil(this.totalSecsLeft / 1E3), this.totalSecsLeft = 0 > this.totalSecsLeft ? 0 : this.totalSecsLeft, this.offset = {
                seconds: this.totalSecsLeft % 60,
                minutes: Math.floor(this.totalSecsLeft / 60) % 60,
                hours: Math.floor(this.totalSecsLeft / 60 / 60) % 24,
                days: Math.floor(this.totalSecsLeft / 60 / 60 / 24) % 7,
                totalDays: Math.floor(this.totalSecsLeft / 60 / 60 / 24),
                weeks: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 7),
                months: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 30),
                years: Math.floor(this.totalSecsLeft /
                    60 / 60 / 24 / 365)
            }, void(0 === this.totalSecsLeft ? (this.stop(), this.dispatchEvent("finish")) : this.dispatchEvent("update")))
        },
        dispatchEvent: function(d) {
            d = a.Event(d + ".countdown");
            d.finalDate = this.finalDate;
            d.offset = a.extend({}, this.offset);
            d.strftime = l(this.offset);
            this.$el.trigger(d)
        }
    });
    a.fn.countdown = function() {
        var d = Array.prototype.slice.call(arguments, 0);
        return this.each(function() {
            var c = a(this).data("countdown-instance");
            if (void 0 !== c) {
                var c = h[c],
                    b = d[0];
                k.prototype.hasOwnProperty(b) ? c[b].apply(c, d.slice(1)) :
                    null === String(b).match(/^[$A-Z_][0-9A-Z_$]*$/i) ? (c.setFinalDate.call(c, b), c.start()) : a.error("Method %s does not exist on jQuery.countdown".replace(/\%s/gi, b))
            } else new k(this, d[0], d[1])
        })
    }
});
(function() {
    var a = [].indexOf || function(a) {
            for (var e = 0, f = this.length; f > e; e++)
                if (e in this && this[e] === a) return e;
            return -1
        },
        l = [].slice;
    ! function(a, e) {
        return "function" == typeof define && define.amd ? define("waypoints", ["jquery"], function(f) {
            return e(f, a)
        }) : e(a.jQuery, a)
    }(this, function(h, e) {
        var f, k, d, c, b, g, r, t, q, p;
        return f = h(e), r = 0 <= a.call(e, "ontouchstart"), c = {
            horizontal: {},
            vertical: {}
        }, b = 1, g = {}, p = 1, k = function() {
            function a(c) {
                var d = this;
                this.$element = c;
                this.element = c[0];
                this.didScroll = this.didResize = !1;
                this.id =
                    "context" + b++;
                this.oldScroll = {
                    x: c.scrollLeft(),
                    y: c.scrollTop()
                };
                this.waypoints = {
                    horizontal: {},
                    vertical: {}
                };
                c.data("waypoints-context-id", this.id);
                g[this.id] = this;
                c.bind("scroll.waypoints", function() {
                    var a;
                    return d.didScroll || r ? void 0 : (d.didScroll = !0, a = function() {
                        return d.doScroll(), d.didScroll = !1
                    }, e.setTimeout(a, h.waypoints.settings.scrollThrottle))
                });
                c.bind("resize.waypoints", function() {
                    var a;
                    return d.didResize ? void 0 : (d.didResize = !0, a = function() {
                        return h.waypoints("refresh"), d.didResize = !1
                    }, e.setTimeout(a,
                        h.waypoints.settings.resizeThrottle))
                })
            }
            return a.prototype.doScroll = function() {
                var a, b = this;
                return a = {
                    horizontal: {
                        newScroll: this.$element.scrollLeft(),
                        oldScroll: this.oldScroll.x,
                        forward: "right",
                        backward: "left"
                    },
                    vertical: {
                        newScroll: this.$element.scrollTop(),
                        oldScroll: this.oldScroll.y,
                        forward: "down",
                        backward: "up"
                    }
                }, !r || a.vertical.oldScroll && a.vertical.newScroll || h.waypoints("refresh"), h.each(a, function(a, c) {
                    var g, d, f;
                    return f = [], d = c.newScroll > c.oldScroll, g = d ? c.forward : c.backward, h.each(b.waypoints[a],
                        function(a, b) {
                            var g, d;
                            return c.oldScroll < (g = b.offset) && g <= c.newScroll ? f.push(b) : c.newScroll < (d = b.offset) && d <= c.oldScroll ? f.push(b) : void 0
                        }), f.sort(function(a, b) {
                        return a.offset - b.offset
                    }), d || f.reverse(), h.each(f, function(a, b) {
                        return b.options.continuous || a === f.length - 1 ? b.trigger([g]) : void 0
                    })
                }), this.oldScroll = {
                    x: a.horizontal.newScroll,
                    y: a.vertical.newScroll
                }
            }, a.prototype.refresh = function() {
                var a, b, c, g = this;
                return c = h.isWindow(this.element), b = this.$element.offset(), this.doScroll(), a = {
                    horizontal: {
                        contextOffset: c ?
                            0 : b.left,
                        contextScroll: c ? 0 : this.oldScroll.x,
                        contextDimension: this.$element.width(),
                        oldScroll: this.oldScroll.x,
                        forward: "right",
                        backward: "left",
                        offsetProp: "left"
                    },
                    vertical: {
                        contextOffset: c ? 0 : b.top,
                        contextScroll: c ? 0 : this.oldScroll.y,
                        contextDimension: c ? h.waypoints("viewportHeight") : this.$element.height(),
                        oldScroll: this.oldScroll.y,
                        forward: "down",
                        backward: "up",
                        offsetProp: "top"
                    }
                }, h.each(a, function(a, b) {
                    return h.each(g.waypoints[a], function(a, c) {
                        var g, d, f, e, k;
                        return g = c.options.offset, f = c.offset, d = h.isWindow(c.element) ?
                            0 : c.$element.offset()[b.offsetProp], h.isFunction(g) ? g = g.apply(c.element) : "string" == typeof g && (g = parseFloat(g), -1 < c.options.offset.indexOf("%") && (g = Math.ceil(b.contextDimension * g / 100))), c.offset = d - b.contextOffset + b.contextScroll - g, c.options.onlyOnScroll && null != f || !c.enabled ? void 0 : null !== f && f < (e = b.oldScroll) && e <= c.offset ? c.trigger([b.backward]) : null !== f && f > (k = b.oldScroll) && k >= c.offset ? c.trigger([b.forward]) : null === f && b.oldScroll >= c.offset ? c.trigger([b.forward]) : void 0
                    })
                })
            }, a.prototype.checkEmpty = function() {
                return h.isEmptyObject(this.waypoints.horizontal) &&
                h.isEmptyObject(this.waypoints.vertical) ? (this.$element.unbind("resize.waypoints scroll.waypoints"), delete g[this.id]) : void 0
            }, a
        }(), d = function() {
            function a(b, g, d) {
                var f;
                d = h.extend({}, h.fn.waypoint.defaults, d);
                "bottom-in-view" === d.offset && (d.offset = function() {
                    var a;
                    return a = h.waypoints("viewportHeight"), h.isWindow(g.element) || (a = g.$element.height()), a - h(this).outerHeight()
                });
                this.$element = b;
                this.element = b[0];
                this.axis = d.horizontal ? "horizontal" : "vertical";
                this.callback = d.handler;
                this.context = g;
                this.enabled =
                    d.enabled;
                this.id = "waypoints" + p++;
                this.offset = null;
                this.options = d;
                g.waypoints[this.axis][this.id] = this;
                c[this.axis][this.id] = this;
                d = null != (f = b.data("waypoints-waypoint-ids")) ? f : [];
                d.push(this.id);
                b.data("waypoints-waypoint-ids", d)
            }
            return a.prototype.trigger = function(a) {
                return this.enabled ? (null != this.callback && this.callback.apply(this.element, a), this.options.triggerOnce ? this.destroy() : void 0) : void 0
            }, a.prototype.disable = function() {
                return this.enabled = !1
            }, a.prototype.enable = function() {
                return this.context.refresh(),
                    this.enabled = !0
            }, a.prototype.destroy = function() {
                return delete c[this.axis][this.id], delete this.context.waypoints[this.axis][this.id], this.context.checkEmpty()
            }, a.getWaypointsByElement = function(a) {
                var b, g;
                return (g = h(a).data("waypoints-waypoint-ids")) ? (b = h.extend({}, c.horizontal, c.vertical), h.map(g, function(a) {
                    return b[a]
                })) : []
            }, a
        }(), q = {
            init: function(a, b) {
                return null == b && (b = {}), null == b.handler && (b.handler = a), this.each(function() {
                    var a, c, f, e;
                    return a = h(this), f = null != (e = b.context) ? e : h.fn.waypoint.defaults.context,
                    h.isWindow(f) || (f = a.closest(f)), f = h(f), c = g[f.data("waypoints-context-id")], c || (c = new k(f)), new d(a, c, b)
                }), h.waypoints("refresh"), this
            },
            disable: function() {
                return q._invoke(this, "disable")
            },
            enable: function() {
                return q._invoke(this, "enable")
            },
            destroy: function() {
                return q._invoke(this, "destroy")
            },
            prev: function(a, b) {
                return q._traverse.call(this, a, b, function(a, b, c) {
                    return 0 < b ? a.push(c[b - 1]) : void 0
                })
            },
            next: function(a, b) {
                return q._traverse.call(this, a, b, function(a, b, c) {
                    return b < c.length - 1 ? a.push(c[b + 1]) : void 0
                })
            },
            _traverse: function(a, b, c) {
                var g, d;
                return null == a && (a = "vertical"), null == b && (b = e), d = t.aggregate(b), g = [], this.each(function() {
                    var b;
                    return b = h.inArray(this, d[a]), c(g, b, d[a])
                }), this.pushStack(g)
            },
            _invoke: function(a, b) {
                return a.each(function() {
                    var a;
                    return a = d.getWaypointsByElement(this), h.each(a, function(a, c) {
                        return c[b](), !0
                    })
                }), this
            }
        }, h.fn.waypoint = function() {
            var a, b;
            return b = arguments[0], a = 2 <= arguments.length ? l.call(arguments, 1) : [], q[b] ? q[b].apply(this, a) : h.isFunction(b) ? q.init.apply(this, arguments) :
                h.isPlainObject(b) ? q.init.apply(this, [null, b]) : b ? h.error("The " + b + " method does not exist in jQuery Waypoints.") : h.error("jQuery Waypoints needs a callback function or handler option.")
        }, h.fn.waypoint.defaults = {
            context: e,
            continuous: !0,
            enabled: !0,
            horizontal: !1,
            offset: 0,
            triggerOnce: !1
        }, t = {
            refresh: function() {
                return h.each(g, function(a, b) {
                    return b.refresh()
                })
            },
            viewportHeight: function() {
                var a;
                return null != (a = e.innerHeight) ? a : f.height()
            },
            aggregate: function(a) {
                var b, d, f;
                return b = c, a && (b = null != (f = g[h(a).data("waypoints-context-id")]) ?
                    f.waypoints : void 0), b ? (d = {
                    horizontal: [],
                    vertical: []
                }, h.each(d, function(a, c) {
                    return h.each(b[a], function(a, b) {
                        return c.push(b)
                    }), c.sort(function(a, b) {
                        return a.offset - b.offset
                    }), d[a] = h.map(c, function(a) {
                        return a.element
                    }), d[a] = h.unique(d[a])
                }), d) : []
            },
            above: function(a) {
                return null == a && (a = e), t._filter(a, "vertical", function(a, b) {
                    return b.offset <= a.oldScroll.y
                })
            },
            below: function(a) {
                return null == a && (a = e), t._filter(a, "vertical", function(a, b) {
                    return b.offset > a.oldScroll.y
                })
            },
            left: function(a) {
                return null == a &&
                (a = e), t._filter(a, "horizontal", function(a, b) {
                    return b.offset <= a.oldScroll.x
                })
            },
            right: function(a) {
                return null == a && (a = e), t._filter(a, "horizontal", function(a, b) {
                    return b.offset > a.oldScroll.x
                })
            },
            enable: function() {
                return t._invoke("enable")
            },
            disable: function() {
                return t._invoke("disable")
            },
            destroy: function() {
                return t._invoke("destroy")
            },
            extendFn: function(a, b) {
                return q[a] = b
            },
            _invoke: function(a) {
                var b;
                return b = h.extend({}, c.vertical, c.horizontal), h.each(b, function(b, c) {
                    return c[a](), !0
                })
            },
            _filter: function(a,
                              b, c) {
                var d, f;
                return (d = g[h(a).data("waypoints-context-id")]) ? (f = [], h.each(d.waypoints[b], function(a, b) {
                    return c(d, b) ? f.push(b) : void 0
                }), f.sort(function(a, b) {
                    return a.offset - b.offset
                }), h.map(f, function(a) {
                    return a.element
                })) : []
            }
        }, h.waypoints = function() {
            var a, b;
            return b = arguments[0], a = 2 <= arguments.length ? l.call(arguments, 1) : [], t[b] ? t[b].apply(null, a) : t.aggregate.call(null, b)
        }, h.waypoints.settings = {
            resizeThrottle: 100,
            scrollThrottle: 30
        }, f.load(function() {
            return h.waypoints("refresh")
        })
    })
}).call(this);
(function(a) {
    a.fn.counterUp = function(l) {
        var h = a.extend({
            time: 400,
            delay: 10
        }, l);
        return this.each(function() {
            var e = a(this);
            e.waypoint(function() {
                for (var a = [], k = h.time / h.delay, d = e.text(), c = /[0-9]+,[0-9]+/.test(d), d = d.replace(/,/g, ""), b = (/^[0-9]+$/.test(d), /^[0-9]+\.[0-9]+$/.test(d)), g = b ? (d.split(".")[1] || []).length : 0, r = k; 1 <= r; r--) {
                    var t = parseInt(d / k * r);
                    if (b && (t = parseFloat(d / k * r).toFixed(g)), c)
                        for (;
                            /(\d+)(\d{3})/.test(t.toString());) t = t.toString().replace(/(\d+)(\d{3})/, "$1,$2");
                    a.unshift(t)
                }
                e.data("counterup-nums",
                    a);
                e.text("0");
                e.data("counterup-func", function() {
                    e.text(e.data("counterup-nums").shift());
                    e.data("counterup-nums").length ? setTimeout(e.data("counterup-func"), h.delay) : (e.data("counterup-nums", null), e.data("counterup-func", null))
                });
                setTimeout(e.data("counterup-func"), h.delay)
            }, {
                offset: "100%",
                triggerOnce: !0
            })
        })
    }
})(jQuery);
! function(a, l) {
    "function" == typeof define && define.amd ? define([], l) : "object" == typeof exports ? module.exports = l() : a.Headroom = l()
}(this, function() {
    function a(a) {
        this.callback = a;
        this.ticking = !1
    }

    function l(a) {
        if (0 >= arguments.length) throw Error("Missing arguments in extend function");
        var e, d, c = a || {};
        for (d = 1; d < arguments.length; d++) {
            var b = arguments[d] || {};
            for (e in b) {
                var g;
                (g = "object" != typeof c[e]) || (g = (g = c[e]) && "undefined" != typeof window && (g === window || g.nodeType));
                g ? c[e] = c[e] || b[e] : c[e] = l(c[e], b[e])
            }
        }
        return c
    }

    function h(a, e) {
        e = l(e, h.options);
        this.lastKnownScrollY = 0;
        this.elem = a;
        a = e.tolerance;
        this.tolerance = a === Object(a) ? a : {
            down: a,
            up: a
        };
        this.classes = e.classes;
        this.offset = e.offset;
        this.scroller = e.scroller;
        this.initialised = !1;
        this.onPin = e.onPin;
        this.onUnpin = e.onUnpin;
        this.onTop = e.onTop;
        this.onNotTop = e.onNotTop;
        this.onBottom = e.onBottom;
        this.onNotBottom = e.onNotBottom
    }
    var e = {
        bind: !! function() {}.bind,
        classList: "classList" in document.documentElement,
        rAF: !!(window.requestAnimationFrame || window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame)
    };
    return window.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame, a.prototype = {
        constructor: a,
        update: function() {
            this.callback && this.callback();
            this.ticking = !1
        },
        requestTick: function() {
            this.ticking || (requestAnimationFrame(this.rafCallback || (this.rafCallback = this.update.bind(this))), this.ticking = !0)
        },
        handleEvent: function() {
            this.requestTick()
        }
    }, h.prototype = {
        constructor: h,
        init: function() {
            return h.cutsTheMustard ?
                (this.debouncer = new a(this.update.bind(this)), this.elem.classList.add(this.classes.initial), setTimeout(this.attachEvent.bind(this), 100), this) : void 0
        },
        destroy: function() {
            var a = this.classes;
            this.initialised = !1;
            this.elem.classList.remove(a.unpinned, a.pinned, a.top, a.notTop, a.initial);
            this.scroller.removeEventListener("scroll", this.debouncer, !1)
        },
        attachEvent: function() {
            this.initialised || (this.lastKnownScrollY = this.getScrollY(), this.initialised = !0, this.scroller.addEventListener("scroll", this.debouncer, !1), this.debouncer.handleEvent())
        },
        unpin: function() {
            var a = this.elem.classList,
                e = this.classes;
            !a.contains(e.pinned) && a.contains(e.unpinned) || (a.add(e.unpinned), a.remove(e.pinned), this.onUnpin && this.onUnpin.call(this))
        },
        pin: function() {
            var a = this.elem.classList,
                e = this.classes;
            a.contains(e.unpinned) && (a.remove(e.unpinned), a.add(e.pinned), this.onPin && this.onPin.call(this))
        },
        top: function() {
            var a = this.elem.classList,
                e = this.classes;
            a.contains(e.top) || (a.add(e.top), a.remove(e.notTop), this.onTop && this.onTop.call(this))
        },
        notTop: function() {
            var a = this.elem.classList,
                e = this.classes;
            a.contains(e.notTop) || (a.add(e.notTop), a.remove(e.top), this.onNotTop && this.onNotTop.call(this))
        },
        bottom: function() {
            var a = this.elem.classList,
                e = this.classes;
            a.contains(e.bottom) || (a.add(e.bottom), a.remove(e.notBottom), this.onBottom && this.onBottom.call(this))
        },
        notBottom: function() {
            var a = this.elem.classList,
                e = this.classes;
            a.contains(e.notBottom) || (a.add(e.notBottom), a.remove(e.bottom), this.onNotBottom && this.onNotBottom.call(this))
        },
        getScrollY: function() {
            return void 0 !==
            this.scroller.pageYOffset ? this.scroller.pageYOffset : void 0 !== this.scroller.scrollTop ? this.scroller.scrollTop : (document.documentElement || document.body.parentNode || document.body).scrollTop
        },
        getViewportHeight: function() {
            return window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
        },
        getElementPhysicalHeight: function(a) {
            return Math.max(a.offsetHeight, a.clientHeight)
        },
        getScrollerPhysicalHeight: function() {
            return this.scroller === window || this.scroller === document.body ? this.getViewportHeight() :
                this.getElementPhysicalHeight(this.scroller)
        },
        getDocumentHeight: function() {
            var a = document.body,
                e = document.documentElement;
            return Math.max(a.scrollHeight, e.scrollHeight, a.offsetHeight, e.offsetHeight, a.clientHeight, e.clientHeight)
        },
        getElementHeight: function(a) {
            return Math.max(a.scrollHeight, a.offsetHeight, a.clientHeight)
        },
        getScrollerHeight: function() {
            return this.scroller === window || this.scroller === document.body ? this.getDocumentHeight() : this.getElementHeight(this.scroller)
        },
        isOutOfBounds: function(a) {
            var e =
                0 > a;
            a = a + this.getScrollerPhysicalHeight() > this.getScrollerHeight();
            return e || a
        },
        toleranceExceeded: function(a, e) {
            return Math.abs(a - this.lastKnownScrollY) >= this.tolerance[e]
        },
        shouldUnpin: function(a, e) {
            var d = a >= this.offset;
            return a > this.lastKnownScrollY && d && e
        },
        shouldPin: function(a, e) {
            var d = a <= this.offset;
            return a < this.lastKnownScrollY && e || d
        },
        update: function() {
            var a = this.getScrollY(),
                e = this.toleranceExceeded(a, a > this.lastKnownScrollY ? "down" : "up");
            this.isOutOfBounds(a) || (a <= this.offset ? this.top() : this.notTop(),
                a + this.getViewportHeight() >= this.getScrollerHeight() ? this.bottom() : this.notBottom(), this.shouldUnpin(a, e) ? this.unpin() : this.shouldPin(a, e) && this.pin(), this.lastKnownScrollY = a)
        }
    }, h.options = {
        tolerance: {
            up: 0,
            down: 0
        },
        offset: 0,
        scroller: window,
        classes: {
            pinned: "headroom--pinned",
            unpinned: "headroom--unpinned",
            top: "headroom--top",
            notTop: "headroom--not-top",
            bottom: "headroom--bottom",
            notBottom: "headroom--not-bottom",
            initial: "headroom"
        }
    }, h.cutsTheMustard = "undefined" != typeof e && e.rAF && e.bind && e.classList, h
});
! function(a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == typeof exports ? require("jquery") : jQuery)
}(function(a) {
    function l(a) {
        a = f.json ? JSON.stringify(a) : String(a);
        return f.raw ? a : encodeURIComponent(a)
    }

    function h(k, d) {
        var c;
        if (f.raw) c = k;
        else a: {
            0 === k.indexOf('"') && (k = k.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
            try {
                c = (k = decodeURIComponent(k.replace(e, " ")), f.json ? JSON.parse(k) : k);
                break a
            } catch (b) {}
            c = void 0
        }
        return a.isFunction(d) ? d(c) : c
    }
    var e = /\+/g,
        f = a.cookie = function(e,
                                d, c) {
            if (1 < arguments.length && !a.isFunction(d)) {
                if (c = a.extend({}, f.defaults, c), "number" == typeof c.expires) {
                    var b = c.expires,
                        g = c.expires = new Date;
                    g.setTime(+g + 864E5 * b)
                }
                return document.cookie = [f.raw ? e : encodeURIComponent(e), "=", l(d), c.expires ? "; expires=" + c.expires.toUTCString() : "", c.path ? "; path=" + c.path : "", c.domain ? "; domain=" + c.domain : "", c.secure ? "; secure" : ""].join("")
            }
            for (var b = e ? void 0 : {}, g = document.cookie ? document.cookie.split("; ") : [], r = 0, t = g.length; t > r; r++) {
                var q = g[r].split("="),
                    p;
                p = q.shift();
                p = f.raw ? p : decodeURIComponent(p);
                q = q.join("=");
                if (e && e === p) {
                    b = h(q, d);
                    break
                }
                e || void 0 === (q = h(q)) || (b[p] = q)
            }
            return b
        };
    f.defaults = {};
    a.removeCookie = function(f, d) {
        return void 0 === a.cookie(f) ? !1 : (a.cookie(f, "", a.extend({}, d, {
            expires: -1
        })), !a.cookie(f))
    }
});
jQuery(document).ready(function(a) {
    style_switcher = a(".style-customizer");
    panelWidth = style_switcher.outerWidth(!0);
    a(".style-customizer .opener").on("click", function() {
        a(this);
        return 0 < a(".style-customizer.closed").length ? (style_switcher.animate({
            left: "0px"
        }), a(".style-customizer.closed").removeClass("closed"), a(".style-customizer").addClass("opened")) : (a(".style-customizer.opened").removeClass("opened"), a(".style-customizer").addClass("closed"), style_switcher.animate({
            left: "-" + panelWidth
        })), !1
    });
    var l = a('link[data-style="styles"]'),
        h = a('link[data-style="styles-no-cookie"]'),
        e = a.cookie("tp_stylesheet"),
        f = (a.cookie("footer_bg"), a.cookie("customizer_mode")),
        k = a.cookie("pattern");
    a(".style-customizer .selected").removeClass("selected");
    a.cookie("tp_stylesheet") ? 0 < l.length && (l.attr("href", "css/color/" + e + ".css"), a('.style-customizer .styleChange li[data-style="' + e + '"]').addClass("selected"), 0 < a(".swicher-title-page-dark").length ? document.getElementById("logo_img").src = "images/customizer/logo/logo_dark_swicher-title_" +
        e + ".png" : (0 < a("#logo_img").length && (document.getElementById("logo_img").src = "images/customizer/logo/logo_" + e + ".png"), 0 < a("#logo_dark_img").length && (document.getElementById("logo_dark_img").src = "images/customizer/logo/dark/logo_" + e + ".png"), 0 < a("#logo-footer").length && (document.getElementById("logo-footer").src = "images/customizer/logo/logo_" + e + ".png"))) : (a.cookie("tp_stylesheet", "color-1", 30), e = a.cookie("tp_stylesheet"), a('.style-customizer .styleChange li[data-style="' + e + '"]').addClass("selected"));
    a.cookie("customizer_mode") ? "boxed-layout" == f ? (a(".wrapper").addClass(f), a(".wrapper").removeClass("wide-layout"), a('.style-customizer .layoutstyle li[data-style="boxed-layout"]').addClass("selected"), a('.style-customizer .layoutstyle li[data-style="wide-layout"]').removeClass("selected"), a(".owl-carousel .container").css("marginLeft", "0")) : (a(".wrapper").addClass(f), a(".wrapper").removeClass("boxed-layout"), a("body").removeClass("pattern-0 pattern-1 pattern-2 pattern-3 pattern-4 pattern-5  pattern-6  pattern-7  pattern-8 main-bg-1 main-bg-2 main-bg-3 main-bg-4 main-bg-5 main-bg-6 main-bg-7 main-bg-8 "),
        a('.style-customizer .layoutstyle li[data-style="boxed-layout"]').removeClass("selected"), a('.style-customizer .layoutstyle li[data-style="wide-layout"]').addClass("selected"), a(".owl-carousel .container").css("marginLeft", "auto")) : (a.cookie("customizer_mode", "wide-layout", 30), f = a.cookie("customizer_mode"), a(".wrapper").addClass(f), a('.style-customizer .layoutstyle li[data-style="wide-layout"]').addClass("selected"));
    "boxed-layout" == f && a.cookie("pattern") ? (a('.style-customizer .patternChange li[data-style="' +
        k + '"]').addClass("selected"), a("body").removeClass("pattern-0 pattern-1 pattern-2 pattern-3 pattern-4 pattern-5  pattern-6  pattern-7  pattern-8 main-bg-1 main-bg-2 main-bg-3 main-bg-4 main-bg-5 main-bg-6 main-bg-7 main-bg-8 "), a("body").addClass(k)) : "boxed-layout" == f ? (a("body").removeClass("pattern-0 pattern-1 pattern-2 pattern-3 pattern-4 pattern-5  pattern-6  pattern-7  pattern-8 main-bg-1 main-bg-2 main-bg-3 main-bg-4 main-bg-5 main-bg-6 main-bg-7 main-bg-8 "), a('.style-customizer .patternChange li[data-style="pattern-0"]').addClass("selected")) :
        (a(".style-customizer .patternChange li.selected").removeClass("selected"), a("body").removeClass("pattern-0 pattern-1 pattern-2 pattern-3 pattern-4 pattern-5  pattern-6  pattern-7  pattern-8 main-bg-1 main-bg-2 main-bg-3 main-bg-4 main-bg-5 main-bg-6 main-bg-7 main-bg-8 "));
    a(".style-customizer .styleChange li").on("click", function() {
        if (0 < l.length) {
            var d = a(this),
                c = d.data("style");
            a(".style-customizer .styleChange .selected").removeClass("selected");
            d.addClass("selected");
            l.attr("href", "css/color/" +
                c + ".css");
            0 < a(".swicher-title-page-dark").length ? document.getElementById("logo_img").src = "images/customizer/logo/logo_dark_swicher-title_" + c + ".png" : (0 < a("#logo_img").length && (document.getElementById("logo_img").src = "images/customizer/logo/logo_" + c + ".png"), 0 < a("#logo_dark_img").length && (document.getElementById("logo_dark_img").src = "images/customizer/logo/dark/logo_" + c + ".png"), 0 < a("#logo-footer").length && (document.getElementById("logo-footer").src = "images/customizer/logo/logo_" + c + ".png"));
            a.cookie("tp_stylesheet",
                c, 30)
        } else d = a(this), c = d.data("style"), a(".style-customizer .styleChange .selected").removeClass("selected"), d.addClass("selected"), h.attr("href", "css/color/" + c + ".css"), 0 < a(".swicher-title-page-dark").length ? document.getElementById("logo_img").src = "images/customizer/logo/logo_dark_swicher-title_" + c + ".png" : (0 < a("#logo_img").length && (document.getElementById("logo_img").src = "images/customizer/logo/logo_" + c + ".png"), 0 < a("#logo_dark_img").length && (document.getElementById("logo_dark_img").src = "images/customizer/logo/dark/logo_" +
            c + ".png"), 0 < a("#logo-footer").length && (document.getElementById("logo-footer").src = "images/customizer/logo/logo_" + c + ".png"))
    });
    a(".style-customizer .patternChange li").on("click", function() {
        var d = a(this),
            c = d.data("style");
        a(".style-customizer .patternChange .selected").removeClass("selected");
        d.addClass("selected");
        a("body").removeClass("pattern-0 pattern-1 pattern-2 pattern-3 pattern-4 pattern-5  pattern-6  pattern-7  pattern-8 main-bg-1 main-bg-2 main-bg-3 main-bg-4 main-bg-5 main-bg-6 main-bg-7 main-bg-8 ");
        a("body").addClass(c);
        a(".wrapper").addClass("boxed-layout");
        a('.style-customizer .layoutstyle li[data-style="boxed-layout"]').addClass("selected");
        a('.style-customizer .layoutstyle li[data-style="wide-layout"]').removeClass("selected");
        a(".owl-carousel .container").css("marginLeft", "0");
        a(".style-customizer select").val("boxed-layout");
        a.cookie("pattern", c, 30);
        a.cookie("customizer_mode", "boxed-layout", 30);
        a(window).trigger("resize")
    });
    a(".style-customizer .layoutstyle li.boxed-layout").on("click",
        function() {
            if (a(".wrapper").addClass("boxed-layout"), a(".wrapper").removeClass("wide-layout"), a('.style-customizer .layoutstyle li[data-style="boxed-layout"]').addClass("selected"), a('.style-customizer .layoutstyle li[data-style="wide-layout"]').removeClass("selected"), a(".owl-carousel .container").css("marginLeft", "0"), a.cookie("customizer_mode", "boxed-layout", 30), a.cookie("pattern")) {
                var d = a.cookie("pattern");
                a('.style-customizer .patternChange li[data-style="' + d + '"]').addClass("selected");
                a("body").removeClass("pattern-0 pattern-1 pattern-2 pattern-3 pattern-4 pattern-5  pattern-6  pattern-7  pattern-8 main-bg-1 main-bg-2 main-bg-3 main-bg-4 main-bg-5 main-bg-6 main-bg-7 main-bg-8 ");
                a("body").addClass(d)
            } else a('.style-customizer .patternChange li[data-style="pattern-0"]').addClass("selected");
            a(window).trigger("resize")
        });
    a(".style-customizer .layoutstyle li.wide-layout").on("click", function() {
        a(".wrapper").addClass("wide-layout");
        a(".wrapper").removeClass("boxed-layout");
        a("body").removeClass("pattern-0 pattern-1 pattern-2 pattern-3 pattern-4 pattern-5  pattern-6  pattern-7  pattern-8 main-bg-1 main-bg-2 main-bg-3 main-bg-4 main-bg-5 main-bg-6 main-bg-7 main-bg-8 ");
        a("body").removeClass("");
        a('.style-customizer .layoutstyle li[data-style="boxed-layout"]').removeClass("selected");
        a('.style-customizer .layoutstyle li[data-style="wide-layout"]').addClass("selected");
        a(".owl-carousel .container").css("marginLeft", "auto");
        a(".style-customizer .patternChange li.selected").removeClass("selected");
        a.cookie("customizer_mode", "wide-layout", 30);
        a(window).trigger("resize")
    });
    a(".style-customizer .resetAll li a.button-reset").on("click", function() {
        a.cookie("customizer_mode", "wide-layout", 30);
        a(".wrapper").addClass("wide-layout");
        a(".wrapper").removeClass("boxed-layout");
        a('.style-customizer .layoutstyle li[data-style="boxed-layout"]').removeClass("selected");
        a('.style-customizer .layoutstyle li[data-style="wide-layout"]').addClass("selected");
        a(".owl-carousel .container").css("marginLeft", "auto");
        a(".style-customizer .patternChange li.selected").removeClass("selected");
        a.cookie("pattern", "pattern-0", 30);
        a("body").removeClass("reset pattern-0 pattern-1 pattern-2 pattern-3 pattern-4 pattern-5  pattern-6  pattern-7  pattern-8 main-bg-1 main-bg-2 main-bg-3 main-bg-4 main-bg-5 main-bg-6 main-bg-7 main-bg-8 ");
        a(".style-customizer .patternChange .selected").removeClass("selected");
        a.cookie("tp_stylesheet", "color-1", 30);
        a(".style-customizer .styleChange li.selected").removeClass("selected");
        a('.style-customizer .styleChange li[data-style="color-1"]').addClass("selected");
        l.attr("href", "css/color/color-1.css");
        0 < a("#logo_img").length && (document.getElementById("logo_img").src = "images/customizer/logo/logo_color-1.png");
        0 < a("#logo_dark_img").length && (document.getElementById("logo_dark_img").src = "images/customizer/logo/dark/logo_color-1.png");
        0 < a("#logo-footer").length && (document.getElementById("logo-footer").src = "images/customizer/logo/logo_color-1.png");
        a(window).trigger("resize");
        a(".desktopTopFixed").removeClass("desktopTopFixed")
    })
});
(function(a) {
    function l(b) {
        return /In/.test(b) || 0 <= a.inArray(b, a.fn.textillate.defaults.inEffects)
    }

    function h(b) {
        return /Out/.test(b) || 0 <= a.inArray(b, a.fn.textillate.defaults.outEffects)
    }

    function e(a) {
        return "true" !== a && "false" !== a ? a : "true" === a
    }

    function f(b) {
        b = b.attributes || [];
        var c = {};
        return b.length ? (a.each(b, function(a, b) {
            a = b.nodeName.replace(/delayscale/, "delayScale");
            /^data-in-*/.test(a) ? (c["in"] = c["in"] || {}, c["in"][a.replace(/data-in-/, "")] = e(b.nodeValue)) : /^data-out-*/.test(a) ? (c.out = c.out || {},
                c.out[a.replace(/data-out-/, "")] = e(b.nodeValue)) : /^data-*/.test(a) && (c[a.replace(/data-/, "")] = e(b.nodeValue))
        }), c) : c
    }

    function k(a) {
        for (var b, c, d = a.length; d; b = parseInt(Math.random() * d), c = a[--d], a[d] = a[b], a[b] = c);
        return a
    }

    function d(a, b, c) {
        a.addClass("animated " + b).css("visibility", "visible").show();
        a.one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function() {
            a.removeClass("animated " + b);
            c && c()
        })
    }

    function c(b, c, f) {
        var e = b.length;
        return e ? (c.shuffle && (b = k(b)), c.reverse &&
        (b = b.toArray().reverse()), void a.each(b, function(b, g) {
            function k() {
                l(c.effect) ? u.css("visibility", "visible") : h(c.effect) && u.css("visibility", "hidden");
                --e;
                !e && f && f()
            }
            var u = a(g);
            b = c.sync ? c.delay : c.delay * b * c.delayScale;
            u.text() ? setTimeout(function() {
                d(u, c.effect, k)
            }, b) : k()
        })) : void(f && f())
    }
    var b = function(b, d) {
        var e = this,
            k = a(b);
        e.init = function() {
            e.$texts = k.find(d.selector);
            e.$texts.length || (e.$texts = a('<ul class="texts"><li>' + k.html() + "</li></ul>"), k.html(e.$texts));
            e.$texts.hide();
            e.$current = a("<span>").html(e.$texts.find(":first-child").html()).prependTo(k);
            l(d["in"].effect) ? e.$current.css("visibility", "hidden") : h(d.out.effect) && e.$current.css("visibility", "visible");
            e.setOptions(d);
            e.timeoutRun = null;
            setTimeout(function() {
                e.options.autoStart && e.start()
            }, e.options.initialDelay)
        };
        e.setOptions = function(a) {
            e.options = a
        };
        e.triggerEvent = function(b) {
            b = a.Event(b + ".tlt");
            return k.trigger(b, e), b
        };
        e["in"] = function(b, d) {
            b = b || 0;
            var g;
            g = e.$texts.find(":nth-child(" + ((b || 0) + 1) + ")");
            var k = a.extend(!0, {}, e.options, g.length ? f(g[0]) : {});
            g.addClass("current");
            e.triggerEvent("inAnimationBegin");
            e.$current.html(g.html()).lettering("words");
            "char" == e.options.type && e.$current.find('[class^="word"]').css({
                display: "inline-block",
                "-webkit-transform": "translate3d(0,0,0)",
                "-moz-transform": "translate3d(0,0,0)",
                "-o-transform": "translate3d(0,0,0)",
                transform: "translate3d(0,0,0)"
            }).each(function() {
                a(this).lettering()
            });
            g = e.$current.find('[class^="' + e.options.type + '"]').css("display", "inline-block");
            l(k["in"].effect) ? g.css("visibility", "hidden") : h(k["in"].effect) && g.css("visibility", "visible");
            e.currentIndex =
                b;
            c(g, k["in"], function() {
                e.triggerEvent("inAnimationEnd");
                k["in"].callback && k["in"].callback();
                d && d(e)
            })
        };
        e.out = function(b) {
            var d = e.$texts.find(":nth-child(" + ((e.currentIndex || 0) + 1) + ")"),
                g = e.$current.find('[class^="' + e.options.type + '"]'),
                k = a.extend(!0, {}, e.options, d.length ? f(d[0]) : {});
            e.triggerEvent("outAnimationBegin");
            c(g, k.out, function() {
                d.removeClass("current");
                e.triggerEvent("outAnimationEnd");
                k.out.callback && k.out.callback();
                b && b(e)
            })
        };
        e.start = function(a) {
            setTimeout(function() {
                e.triggerEvent("start");
                (function n(a) {
                    e["in"](a, function() {
                        var b = e.$texts.children().length;
                        a += 1;
                        !e.options.loop && a >= b ? (e.options.callback && e.options.callback(), e.triggerEvent("end")) : (a %= b, e.timeoutRun = setTimeout(function() {
                            e.out(function() {
                                n(a)
                            })
                        }, e.options.minDisplayTime))
                    })
                })(a || 0)
            }, e.options.initialDelay)
        };
        e.stop = function() {
            e.timeoutRun && (clearInterval(e.timeoutRun), e.timeoutRun = null)
        };
        e.init()
    };
    a.fn.textillate = function(c, d) {
        return this.each(function() {
            var e = a(this),
                k = e.data("textillate"),
                h = a.extend(!0, {}, a.fn.textillate.defaults,
                    f(this), "object" == typeof c && c);
            k ? "string" == typeof c ? k[c].apply(k, [].concat(d)) : k.setOptions.call(k, h) : e.data("textillate", new b(this, h))
        })
    };
    a.fn.textillate.defaults = {
        selector: ".texts",
        loop: !1,
        minDisplayTime: 2E3,
        initialDelay: 0,
        "in": {
            effect: "fadeInLeftBig",
            delayScale: 1.5,
            delay: 50,
            sync: !1,
            reverse: !1,
            shuffle: !1,
            callback: function() {}
        },
        out: {
            effect: "hinge",
            delayScale: 1.5,
            delay: 50,
            sync: !1,
            reverse: !1,
            shuffle: !1,
            callback: function() {}
        },
        autoStart: !0,
        inEffects: [],
        outEffects: ["hinge"],
        callback: function() {},
        type: "char"
    }
})(jQuery);
(function(a) {
    function l(e, f, k, d) {
        f = e.text().split(f);
        var c = "";
        f.length && (a(f).each(function(a, g) {
            c += '<span class="' + k + (a + 1) + '">' + g + "</span>" + d
        }), e.empty().append(c))
    }
    var h = {
        init: function() {
            return this.each(function() {
                l(a(this), "", "char", "")
            })
        },
        words: function() {
            return this.each(function() {
                l(a(this), " ", "word", " ")
            })
        },
        lines: function() {
            return this.each(function() {
                l(a(this).children("br").replaceWith("eefec303079ad17405c889e092e105b0").end(), "eefec303079ad17405c889e092e105b0", "line", "")
            })
        }
    };
    a.fn.lettering =
        function(e) {
            return e && h[e] ? h[e].apply(this, [].slice.call(arguments, 1)) : "letters" !== e && e ? (a.error("Method " + e + " does not exist on jQuery.lettering"), this) : h.init.apply(this, [].slice.call(arguments, 0))
        }
})(jQuery);
! function(a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : a(jQuery)
}(function(a) {
    a.extend(a.fn, {
        validate: function(e) {
            if (!this.length) return void(e && e.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing."));
            var f = a.data(this[0], "validator");
            return f ? f : (this.attr("novalidate", "novalidate"), f = new a.validator(e, this[0]), a.data(this[0], "validator", f), f.settings.onsubmit && (this.on("click.validate", ":submit", function(e) {
                f.settings.submitHandler && (f.submitButton =
                    e.target);
                a(this).hasClass("cancel") && (f.cancelSubmit = !0);
                void 0 !== a(this).attr("formnovalidate") && (f.cancelSubmit = !0)
            }), this.on("submit.validate", function(e) {
                function d() {
                    var c, b;
                    return f.settings.submitHandler ? (f.submitButton && (c = a("<input type='hidden'/>").attr("name", f.submitButton.name).val(a(f.submitButton).val()).appendTo(f.currentForm)), b = f.settings.submitHandler.call(f, f.currentForm, e), f.submitButton && c.remove(), void 0 !== b ? b : !1) : !0
                }
                return f.settings.debug && e.preventDefault(), f.cancelSubmit ?
                    (f.cancelSubmit = !1, d()) : f.form() ? f.pendingRequest ? (f.formSubmitted = !0, !1) : d() : (f.focusInvalid(), !1)
            })), f)
        },
        valid: function() {
            var e, f, k;
            return a(this[0]).is("form") ? e = this.validate().form() : (k = [], e = !0, f = a(this[0].form).validate(), this.each(function() {
                e = f.element(this) && e;
                k = k.concat(f.errorList)
            }), f.errorList = k), e
        },
        rules: function(e, f) {
            var k, d, c, b, g, h, l = this[0];
            if (e) switch (k = a.data(l.form, "validator").settings, d = k.rules, c = a.validator.staticRules(l), e) {
                case "add":
                    a.extend(c, a.validator.normalizeRule(f));
                    delete c.messages;
                    d[l.name] = c;
                    f.messages && (k.messages[l.name] = a.extend(k.messages[l.name], f.messages));
                    break;
                case "remove":
                    return f ? (h = {}, a.each(f.split(/\s/), function(b, d) {
                        h[d] = c[d];
                        delete c[d];
                        "required" === d && a(l).removeAttr("aria-required")
                    }), h) : (delete d[l.name], c)
            }
            return b = a.validator.normalizeRules(a.extend({}, a.validator.classRules(l), a.validator.attributeRules(l), a.validator.dataRules(l), a.validator.staticRules(l)), l), b.required && (g = b.required, delete b.required, b = a.extend({
                required: g
            }, b),
                a(l).attr("aria-required", "true")), b.remote && (g = b.remote, delete b.remote, b = a.extend(b, {
                remote: g
            })), b
        }
    });
    a.extend(a.expr[":"], {
        blank: function(e) {
            return !a.trim("" + a(e).val())
        },
        filled: function(e) {
            return !!a.trim("" + a(e).val())
        },
        unchecked: function(e) {
            return !a(e).prop("checked")
        }
    });
    a.validator = function(e, f) {
        this.settings = a.extend(!0, {}, a.validator.defaults, e);
        this.currentForm = f;
        this.init()
    };
    a.validator.format = function(e, f) {
        return 1 === arguments.length ? function() {
            var f = a.makeArray(arguments);
            return f.unshift(e),
                a.validator.format.apply(this, f)
        } : (2 < arguments.length && f.constructor !== Array && (f = a.makeArray(arguments).slice(1)), f.constructor !== Array && (f = [f]), a.each(f, function(a, d) {
            e = e.replace(new RegExp("\\{" + a + "\\}", "g"), function() {
                return d
            })
        }), e)
    };
    a.extend(a.validator, {
        defaults: {
            messages: {},
            groups: {},
            rules: {},
            errorClass: "error",
            validClass: "valid",
            errorElement: "label",
            focusCleanup: !1,
            focusInvalid: !0,
            errorContainer: a([]),
            errorLabelContainer: a([]),
            onsubmit: !0,
            ignore: ":hidden",
            ignoreTitle: !1,
            onfocusin: function(a) {
                this.lastActive =
                    a;
                this.settings.focusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, a, this.settings.errorClass, this.settings.validClass), this.hideThese(this.errorsFor(a)))
            },
            onfocusout: function(a) {
                this.checkable(a) || !(a.name in this.submitted) && this.optional(a) || this.element(a)
            },
            onkeyup: function(e, f) {
                var k = [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225];
                9 === f.which && "" === this.elementValue(e) || -1 !== a.inArray(f.keyCode, k) || (e.name in this.submitted || e === this.lastElement) && this.element(e)
            },
            onclick: function(a) {
                a.name in
                this.submitted ? this.element(a) : a.parentNode.name in this.submitted && this.element(a.parentNode)
            },
            highlight: function(e, f, k) {
                "radio" === e.type ? this.findByName(e.name).addClass(f).removeClass(k) : a(e).addClass(f).removeClass(k)
            },
            unhighlight: function(e, f, k) {
                "radio" === e.type ? this.findByName(e.name).removeClass(f).addClass(k) : a(e).removeClass(f).addClass(k)
            }
        },
        setDefaults: function(e) {
            a.extend(a.validator.defaults, e)
        },
        messages: {
            required: "This field is required.",
            remote: "Please fix this field.",
            email: "Please enter a valid email address.",
            url: "Please enter a valid URL.",
            date: "Please enter a valid date.",
            dateISO: "Please enter a valid date ( ISO ).",
            number: "Please enter a valid number.",
            digits: "Please enter only digits.",
            creditcard: "Please enter a valid credit card number.",
            equalTo: "Please enter the same value again.",
            maxlength: a.validator.format("Please enter no more than {0} characters."),
            minlength: a.validator.format("Please enter at least {0} characters."),
            rangelength: a.validator.format("Please enter a value between {0} and {1} characters long."),
            range: a.validator.format("Please enter a value between {0} and {1}."),
            max: a.validator.format("Please enter a value less than or equal to {0}."),
            min: a.validator.format("Please enter a value greater than or equal to {0}.")
        },
        autoCreateRanges: !1,
        prototype: {
            init: function() {
                function e(d) {
                    var c = a.data(this.form, "validator"),
                        b = "on" + d.type.replace(/^validate/, ""),
                        g = c.settings;
                    g[b] && !a(this).is(g.ignore) && g[b].call(c, this, d)
                }
                this.labelContainer = a(this.settings.errorLabelContainer);
                this.errorContext = this.labelContainer.length &&
                    this.labelContainer || a(this.currentForm);
                this.containers = a(this.settings.errorContainer).add(this.settings.errorLabelContainer);
                this.submitted = {};
                this.valueCache = {};
                this.pendingRequest = 0;
                this.pending = {};
                this.invalid = {};
                this.reset();
                var f, k = this.groups = {};
                a.each(this.settings.groups, function(d, c) {
                    "string" == typeof c && (c = c.split(/\s/));
                    a.each(c, function(a, c) {
                        k[c] = d
                    })
                });
                f = this.settings.rules;
                a.each(f, function(d, c) {
                    f[d] = a.validator.normalizeRule(c)
                });
                a(this.currentForm).on("focusin.validate focusout.validate keyup.validate",
                    ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox']", e).on("click.validate", "select, option, [type='radio'], [type='checkbox']", e);
                this.settings.invalidHandler && a(this.currentForm).on("invalid-form.validate", this.settings.invalidHandler);
                a(this.currentForm).find("[required], [data-rule-required], .required").attr("aria-required",
                    "true")
            },
            form: function() {
                return this.checkForm(), a.extend(this.submitted, this.errorMap), this.invalid = a.extend({}, this.errorMap), this.valid() || a(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid()
            },
            checkForm: function() {
                this.prepareForm();
                for (var a = 0, f = this.currentElements = this.elements(); f[a]; a++) this.check(f[a]);
                return this.valid()
            },
            element: function(e) {
                var f = this.clean(e),
                    k = this.validationTargetFor(f),
                    d = !0;
                return this.lastElement = k, void 0 === k ? delete this.invalid[f.name] :
                    (this.prepareElement(k), this.currentElements = a(k), d = !1 !== this.check(k), d ? delete this.invalid[k.name] : this.invalid[k.name] = !0), a(e).attr("aria-invalid", !d), this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), d
            },
            showErrors: function(e) {
                if (e) {
                    a.extend(this.errorMap, e);
                    this.errorList = [];
                    for (var f in e) this.errorList.push({
                        message: e[f],
                        element: this.findByName(f)[0]
                    });
                    this.successList = a.grep(this.successList, function(a) {
                        return !(a.name in e)
                    })
                }
                this.settings.showErrors ?
                    this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
            },
            resetForm: function() {
                a.fn.resetForm && a(this.currentForm).resetForm();
                this.submitted = {};
                this.lastElement = null;
                this.prepareForm();
                this.hideErrors();
                var e, f = this.elements().removeData("previousValue").removeAttr("aria-invalid");
                if (this.settings.unhighlight)
                    for (e = 0; f[e]; e++) this.settings.unhighlight.call(this, f[e], this.settings.errorClass, "");
                else f.removeClass(this.settings.errorClass)
            },
            numberOfInvalids: function() {
                return this.objectLength(this.invalid)
            },
            objectLength: function(a) {
                var f, k = 0;
                for (f in a) k++;
                return k
            },
            hideErrors: function() {
                this.hideThese(this.toHide)
            },
            hideThese: function(a) {
                a.not(this.containers).text("");
                this.addWrapper(a).hide()
            },
            valid: function() {
                return 0 === this.size()
            },
            size: function() {
                return this.errorList.length
            },
            focusInvalid: function() {
                if (this.settings.focusInvalid) try {
                    a(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
                } catch (e) {}
            },
            findLastActive: function() {
                var e =
                    this.lastActive;
                return e && 1 === a.grep(this.errorList, function(a) {
                    return a.element.name === e.name
                }).length && e
            },
            elements: function() {
                var e = this,
                    f = {};
                return a(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function() {
                    return !this.name && e.settings.debug && window.console && console.error("%o has no name assigned", this), this.name in f || !e.objectLength(a(this).rules()) ? !1 : (f[this.name] = !0, !0)
                })
            },
            clean: function(e) {
                return a(e)[0]
            },
            errors: function() {
                var e =
                    this.settings.errorClass.split(" ").join(".");
                return a(this.settings.errorElement + "." + e, this.errorContext)
            },
            reset: function() {
                this.successList = [];
                this.errorList = [];
                this.errorMap = {};
                this.toShow = a([]);
                this.toHide = a([]);
                this.currentElements = a([])
            },
            prepareForm: function() {
                this.reset();
                this.toHide = this.errors().add(this.containers)
            },
            prepareElement: function(a) {
                this.reset();
                this.toHide = this.errorsFor(a)
            },
            elementValue: function(e) {
                var f, k = a(e),
                    d = e.type;
                return "radio" === d || "checkbox" === d ? this.findByName(e.name).filter(":checked").val() :
                    "number" === d && "undefined" != typeof e.validity ? e.validity.badInput ? !1 : k.val() : (f = k.val(), "string" == typeof f ? f.replace(/\r/g, "") : f)
            },
            check: function(e) {
                e = this.validationTargetFor(this.clean(e));
                var f, k, d, c = a(e).rules(),
                    b = a.map(c, function(a, b) {
                        return b
                    }).length,
                    g = !1,
                    h = this.elementValue(e);
                for (k in c) {
                    d = {
                        method: k,
                        parameters: c[k]
                    };
                    try {
                        if (f = a.validator.methods[k].call(this, h, e, d.parameters), "dependency-mismatch" === f && 1 === b) g = !0;
                        else {
                            if (g = !1, "pending" === f) return void(this.toHide = this.toHide.not(this.errorsFor(e)));
                            if (!f) return this.formatAndAdd(e, d), !1
                        }
                    } catch (l) {
                        throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + e.id + ", check the '" + d.method + "' method.", l), l instanceof TypeError && (l.message += ".  Exception occurred when checking element " + e.id + ", check the '" + d.method + "' method."), l;
                    }
                }
                return g ? void 0 : (this.objectLength(c) && this.successList.push(e), !0)
            },
            customDataMessage: function(e, f) {
                return a(e).data("msg" + f.charAt(0).toUpperCase() + f.substring(1).toLowerCase()) ||
                    a(e).data("msg")
            },
            customMessage: function(a, f) {
                return (a = this.settings.messages[a]) && (a.constructor === String ? a : a[f])
            },
            findDefined: function() {
                for (var a = 0; a < arguments.length; a++)
                    if (void 0 !== arguments[a]) return arguments[a]
            },
            defaultMessage: function(e, f) {
                return this.findDefined(this.customMessage(e.name, f), this.customDataMessage(e, f), !this.settings.ignoreTitle && e.title || void 0, a.validator.messages[f], "<strong>Warning: No message defined for " + e.name + "</strong>")
            },
            formatAndAdd: function(e, f) {
                var k = this.defaultMessage(e,
                    f.method),
                    d = /\$?\{(\d+)\}/g;
                "function" == typeof k ? k = k.call(this, f.parameters, e) : d.test(k) && (k = a.validator.format(k.replace(d, "{$1}"), f.parameters));
                this.errorList.push({
                    message: k,
                    element: e,
                    method: f.method
                });
                this.errorMap[e.name] = k;
                this.submitted[e.name] = k
            },
            addWrapper: function(a) {
                return this.settings.wrapper && (a = a.add(a.parent(this.settings.wrapper))), a
            },
            defaultShowErrors: function() {
                var a, f;
                for (a = 0; this.errorList[a]; a++) f = this.errorList[a], this.settings.highlight && this.settings.highlight.call(this,
                    f.element, this.settings.errorClass, this.settings.validClass), this.showLabel(f.element, f.message);
                if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success)
                    for (a = 0; this.successList[a]; a++) this.showLabel(this.successList[a]);
                if (this.settings.unhighlight)
                    for (a = 0, f = this.validElements(); f[a]; a++) this.settings.unhighlight.call(this, f[a], this.settings.errorClass, this.settings.validClass);
                this.toHide = this.toHide.not(this.toShow);
                this.hideErrors();
                this.addWrapper(this.toShow).show()
            },
            validElements: function() {
                return this.currentElements.not(this.invalidElements())
            },
            invalidElements: function() {
                return a(this.errorList).map(function() {
                    return this.element
                })
            },
            showLabel: function(e, f) {
                var k, d, c, b = this.errorsFor(e),
                    g = this.idOrName(e),
                    h = a(e).attr("aria-describedby");
                b.length ? (b.removeClass(this.settings.validClass).addClass(this.settings.errorClass), b.html(f)) : (b = a("<" + this.settings.errorElement + ">").attr("id", g + "-error").addClass(this.settings.errorClass).html(f || ""), k = b, this.settings.wrapper &&
                (k = b.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.length ? this.labelContainer.append(k) : this.settings.errorPlacement ? this.settings.errorPlacement(k, a(e)) : k.insertAfter(e), b.is("label") ? b.attr("for", g) : 0 === b.parents("label[for='" + g + "']").length && (c = b.attr("id").replace(/(:|\.|\[|\]|\$)/g, "\\$1"), h ? h.match(new RegExp("\\b" + c + "\\b")) || (h += " " + c) : h = c, a(e).attr("aria-describedby", h), d = this.groups[e.name], d && a.each(this.groups, function(c, g) {
                    g === d && a("[name='" + c + "']", this.currentForm).attr("aria-describedby",
                        b.attr("id"))
                })));
                !f && this.settings.success && (b.text(""), "string" == typeof this.settings.success ? b.addClass(this.settings.success) : this.settings.success(b, e));
                this.toShow = this.toShow.add(b)
            },
            errorsFor: function(e) {
                var f = this.idOrName(e);
                e = a(e).attr("aria-describedby");
                f = "label[for='" + f + "'], label[for='" + f + "'] *";
                return e && (f = f + ", #" + e.replace(/\s+/g, ", #")), this.errors().filter(f)
            },
            idOrName: function(a) {
                return this.groups[a.name] || (this.checkable(a) ? a.name : a.id || a.name)
            },
            validationTargetFor: function(e) {
                return this.checkable(e) &&
                (e = this.findByName(e.name)), a(e).not(this.settings.ignore)[0]
            },
            checkable: function(a) {
                return /radio|checkbox/i.test(a.type)
            },
            findByName: function(e) {
                return a(this.currentForm).find("[name='" + e + "']")
            },
            getLength: function(e, f) {
                switch (f.nodeName.toLowerCase()) {
                    case "select":
                        return a("option:selected", f).length;
                    case "input":
                        if (this.checkable(f)) return this.findByName(f.name).filter(":checked").length
                }
                return e.length
            },
            depend: function(a, f) {
                return this.dependTypes[typeof a] ? this.dependTypes[typeof a](a, f) : !0
            },
            dependTypes: {
                "boolean": function(a) {
                    return a
                },
                string: function(e, f) {
                    return !!a(e, f.form).length
                },
                "function": function(a, f) {
                    return a(f)
                }
            },
            optional: function(e) {
                var f = this.elementValue(e);
                return !a.validator.methods.required.call(this, f, e) && "dependency-mismatch"
            },
            startRequest: function(a) {
                this.pending[a.name] || (this.pendingRequest++, this.pending[a.name] = !0)
            },
            stopRequest: function(e, f) {
                this.pendingRequest--;
                0 > this.pendingRequest && (this.pendingRequest = 0);
                delete this.pending[e.name];
                f && 0 === this.pendingRequest &&
                this.formSubmitted && this.form() ? (a(this.currentForm).submit(), this.formSubmitted = !1) : !f && 0 === this.pendingRequest && this.formSubmitted && (a(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1)
            },
            previousValue: function(e) {
                return a.data(e, "previousValue") || a.data(e, "previousValue", {
                    old: null,
                    valid: !0,
                    message: this.defaultMessage(e, "remote")
                })
            },
            destroy: function() {
                this.resetForm();
                a(this.currentForm).off(".validate").removeData("validator")
            }
        },
        classRuleSettings: {
            required: {
                required: !0
            },
            email: {
                email: !0
            },
            url: {
                url: !0
            },
            date: {
                date: !0
            },
            dateISO: {
                dateISO: !0
            },
            number: {
                number: !0
            },
            digits: {
                digits: !0
            },
            creditcard: {
                creditcard: !0
            }
        },
        addClassRules: function(e, f) {
            e.constructor === String ? this.classRuleSettings[e] = f : a.extend(this.classRuleSettings, e)
        },
        classRules: function(e) {
            var f = {};
            e = a(e).attr("class");
            return e && a.each(e.split(" "), function() {
                this in a.validator.classRuleSettings && a.extend(f, a.validator.classRuleSettings[this])
            }), f
        },
        normalizeAttributeRule: function(a, f, k, d) {
            /min|max/.test(k) && (null ===
                f || /number|range|text/.test(f)) && (d = Number(d), isNaN(d) && (d = void 0));
            d || 0 === d ? a[k] = d : f === k && "range" !== f && (a[k] = !0)
        },
        attributeRules: function(e) {
            var f, k, d = {},
                c = a(e),
                b = e.getAttribute("type");
            for (f in a.validator.methods) "required" === f ? (k = e.getAttribute(f), "" === k && (k = !0), k = !!k) : k = c.attr(f), this.normalizeAttributeRule(d, b, f, k);
            return d.maxlength && /-1|2147483647|524288/.test(d.maxlength) && delete d.maxlength, d
        },
        dataRules: function(e) {
            var f, k = {},
                d = a(e),
                c = e.getAttribute("type");
            for (f in a.validator.methods) e =
                d.data("rule" + f.charAt(0).toUpperCase() + f.substring(1).toLowerCase()), this.normalizeAttributeRule(k, c, f, e);
            return k
        },
        staticRules: function(e) {
            var f = {},
                k = a.data(e.form, "validator");
            return k.settings.rules && (f = a.validator.normalizeRule(k.settings.rules[e.name]) || {}), f
        },
        normalizeRules: function(e, f) {
            return a.each(e, function(k, d) {
                if (!1 === d) return void delete e[k];
                if (d.param || d.depends) {
                    var c = !0;
                    switch (typeof d.depends) {
                        case "string":
                            c = !!a(d.depends, f.form).length;
                            break;
                        case "function":
                            c = d.depends.call(f,
                                f)
                    }
                    c ? e[k] = void 0 !== d.param ? d.param : !0 : delete e[k]
                }
            }), a.each(e, function(k, d) {
                e[k] = a.isFunction(d) ? d(f) : d
            }), a.each(["minlength", "maxlength"], function() {
                e[this] && (e[this] = Number(e[this]))
            }), a.each(["rangelength", "range"], function() {
                var f;
                e[this] && (a.isArray(e[this]) ? e[this] = [Number(e[this][0]), Number(e[this][1])] : "string" == typeof e[this] && (f = e[this].replace(/[\[\]]/g, "").split(/[\s,]+/), e[this] = [Number(f[0]), Number(f[1])]))
            }), a.validator.autoCreateRanges && (null != e.min && null != e.max && (e.range = [e.min, e.max],
                delete e.min, delete e.max), null != e.minlength && null != e.maxlength && (e.rangelength = [e.minlength, e.maxlength], delete e.minlength, delete e.maxlength)), e
        },
        normalizeRule: function(e) {
            if ("string" == typeof e) {
                var f = {};
                a.each(e.split(/\s/), function() {
                    f[this] = !0
                });
                e = f
            }
            return e
        },
        addMethod: function(e, f, k) {
            a.validator.methods[e] = f;
            a.validator.messages[e] = void 0 !== k ? k : a.validator.messages[e];
            3 > f.length && a.validator.addClassRules(e, a.validator.normalizeRule(e))
        },
        methods: {
            required: function(e, f, k) {
                return this.depend(k,
                    f) ? "select" === f.nodeName.toLowerCase() ? (e = a(f).val()) && 0 < e.length : this.checkable(f) ? 0 < this.getLength(e, f) : 0 < e.length : "dependency-mismatch"
            },
            email: function(a, f) {
                return this.optional(f) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(a)
            },
            url: function(a, f) {
                return this.optional(f) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[\/?#]\S*)?$/i.test(a)
            },
            date: function(a, f) {
                return this.optional(f) || !/Invalid|NaN/.test((new Date(a)).toString())
            },
            dateISO: function(a, f) {
                return this.optional(f) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(a)
            },
            number: function(a, f) {
                return this.optional(f) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(a)
            },
            digits: function(a, f) {
                return this.optional(f) || /^\d+$/.test(a)
            },
            creditcard: function(a, f) {
                if (this.optional(f)) return "dependency-mismatch";
                if (/[^0-9 \-]+/.test(a)) return !1;
                var k, d = 0,
                    c = !1;
                if (a = a.replace(/\D/g,
                    ""), 13 > a.length || 19 < a.length) return !1;
                for (f = a.length - 1; 0 <= f; f--) k = a.charAt(f), k = parseInt(k, 10), c && 9 < (k *= 2) && (k -= 9), d += k, c = !c;
                return 0 === d % 10
            },
            minlength: function(e, f, k) {
                e = a.isArray(e) ? e.length : this.getLength(e, f);
                return this.optional(f) || e >= k
            },
            maxlength: function(e, f, k) {
                e = a.isArray(e) ? e.length : this.getLength(e, f);
                return this.optional(f) || k >= e
            },
            rangelength: function(e, f, k) {
                e = a.isArray(e) ? e.length : this.getLength(e, f);
                return this.optional(f) || e >= k[0] && e <= k[1]
            },
            min: function(a, f, k) {
                return this.optional(f) ||
                    a >= k
            },
            max: function(a, f, k) {
                return this.optional(f) || k >= a
            },
            range: function(a, f, k) {
                return this.optional(f) || a >= k[0] && a <= k[1]
            },
            equalTo: function(e, f, k) {
                k = a(k);
                return this.settings.onfocusout && k.off(".validate-equalTo").on("blur.validate-equalTo", function() {
                    a(f).valid()
                }), e === k.val()
            },
            remote: function(e, f, k) {
                if (this.optional(f)) return "dependency-mismatch";
                var d, c, b = this.previousValue(f);
                return this.settings.messages[f.name] || (this.settings.messages[f.name] = {}), b.originalMessage = this.settings.messages[f.name].remote,
                    this.settings.messages[f.name].remote = b.message, k = "string" == typeof k && {
                    url: k
                } || k, b.old === e ? b.valid : (b.old = e, d = this, this.startRequest(f), c = {}, c[f.name] = e, a.ajax(a.extend(!0, {
                    mode: "abort",
                    port: "validate" + f.name,
                    dataType: "json",
                    data: c,
                    context: d.currentForm,
                    success: function(c) {
                        var k, h, l, p = !0 === c || "true" === c;
                        d.settings.messages[f.name].remote = b.originalMessage;
                        p ? (l = d.formSubmitted, d.prepareElement(f), d.formSubmitted = l, d.successList.push(f), delete d.invalid[f.name], d.showErrors()) : (k = {}, h = c || d.defaultMessage(f,
                            "remote"), k[f.name] = b.message = a.isFunction(h) ? h(e) : h, d.invalid[f.name] = !0, d.showErrors(k));
                        b.valid = p;
                        d.stopRequest(f, p)
                    }
                }, k)), "pending")
            }
        }
    });
    var l, h = {};
    a.ajaxPrefilter ? a.ajaxPrefilter(function(a, f, k) {
        f = a.port;
        "abort" === a.mode && (h[f] && h[f].abort(), h[f] = k)
    }) : (l = a.ajax, a.ajax = function(e) {
        var f = ("port" in e ? e : a.ajaxSettings).port;
        return "abort" === ("mode" in e ? e : a.ajaxSettings).mode ? (h[f] && h[f].abort(), h[f] = l.apply(this, arguments), h[f]) : l.apply(this, arguments)
    })
});
! function(a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof module && module.exports ? module.exports = function(l, h) {
        return void 0 === h && (h = "undefined" != typeof window ? require("jquery") : require("jquery")(l)), a(h), h
    } : a(jQuery)
}(function(a) {
    function l(b) {
        var c = b.data;
        b.isDefaultPrevented() || (b.preventDefault(), a(b.target).closest("form").ajaxSubmit(c))
    }

    function h(b) {
        var c = b.target,
            d = a(c);
        if (!d.is("[type=submit],[type=image]")) {
            c = d.closest("[type=submit]");
            if (0 === c.length) return;
            c = c[0]
        }
        var f = c.form;
        if (f.clk = c, "image" === c.type) void 0 !== b.offsetX ? (f.clk_x = b.offsetX, f.clk_y = b.offsetY) : "function" == typeof a.fn.offset ? (d = d.offset(), f.clk_x = b.pageX - d.left, f.clk_y = b.pageY - d.top) : (f.clk_x = b.pageX - c.offsetLeft, f.clk_y = b.pageY - c.offsetTop);
        setTimeout(function() {
            f.clk = f.clk_x = f.clk_y = null
        }, 100)
    }

    function e() {
        if (a.fn.ajaxSubmit.debug) {
            var b = "[jquery.form] " + Array.prototype.join.call(arguments, "");
            window.console && window.console.log ? window.console.log(b) : window.opera && window.opera.postError &&
                window.opera.postError(b)
        }
    }
    var f = /\r?\n/g,
        k, d;
    k = void 0 !== a('<input type="file">').get(0).files;
    d = void 0 !== window.FormData;
    var c = !!a.fn.prop;
    a.fn.attr2 = function() {
        if (!c) return this.attr.apply(this, arguments);
        var a = this.prop.apply(this, arguments);
        return a && a.jquery || "string" == typeof a ? a : this.attr.apply(this, arguments)
    };
    a.fn.ajaxSubmit = function(b, g, f, h) {
        function l(c) {
            var d, g = a.param(c, b.traditional).split("&"),
                f = g.length,
                e = [];
            for (c = 0; f > c; c++) g[c] = g[c].replace(/\+/g, " "), d = g[c].split("="), e.push([decodeURIComponent(d[0]),
                decodeURIComponent(d[1])
            ]);
            return e
        }

        function p(d) {
            function g(a) {
                var b = null;
                try {
                    a.contentWindow && (b = a.contentWindow.document)
                } catch (c) {
                    e("cannot get iframe.contentWindow document: " + c)
                }
                if (b) return b;
                try {
                    b = a.contentDocument ? a.contentDocument : a.document
                } catch (c) {
                    e("cannot get iframe.contentDocument: " + c), b = a.document
                }
                return b
            }

            function f() {
                function a() {
                    try {
                        var b = g(u).readyState;
                        e("state = " + b);
                        b && "uninitialized" === b.toLowerCase() && setTimeout(a, 50)
                    } catch (c) {
                        e("Server abort: ", c, " (", c.name, ")"), k(X), L &&
                        clearTimeout(L), L = void 0
                    }
                }
                var b = y.attr2("target"),
                    c = y.attr2("action"),
                    d = y.attr("enctype") || y.attr("encoding") || "multipart/form-data";
                C.setAttribute("target", q);
                v && !/post/i.test(v) || C.setAttribute("method", "POST");
                c !== l.url && C.setAttribute("action", l.url);
                l.skipEncodingOverride || v && !/post/i.test(v) || y.attr({
                    encoding: "multipart/form-data",
                    enctype: "multipart/form-data"
                });
                l.timeout && (L = setTimeout(function() {
                    F = !0;
                    k(Q)
                }, l.timeout));
                var h = [];
                try {
                    if (l.extraData)
                        for (var m in l.extraData) l.extraData.hasOwnProperty(m) &&
                        (n.isPlainObject(l.extraData[m]) && l.extraData[m].hasOwnProperty("name") && l.extraData[m].hasOwnProperty("value") ? h.push(n('<input type="hidden" name="' + l.extraData[m].name + '">', D).val(l.extraData[m].value).appendTo(C)[0]) : h.push(n('<input type="hidden" name="' + m + '">', D).val(l.extraData[m]).appendTo(C)[0]));
                    l.iframeTarget || t.appendTo(H);
                    u.attachEvent ? u.attachEvent("onload", k) : u.addEventListener("load", k, !1);
                    setTimeout(a, 15);
                    try {
                        C.submit()
                    } catch (r) {
                        document.createElement("form").submit.apply(C)
                    }
                } finally {
                    C.setAttribute("action",
                        c), C.setAttribute("enctype", d), b ? C.setAttribute("target", b) : y.removeAttr("target"), n(h).remove()
                }
            }

            function k(a) {
                if (!p.aborted && !da) {
                    if ((K = g(u)) || (e("cannot access response document"), a = X), a === Q && p) return p.abort("timeout"), void M.reject(p, "timeout");
                    if (a === X && p) return p.abort("server abort"), void M.reject(p, "error", "server abort");
                    if (K && K.location.href !== l.iframeSrc || F) {
                        u.detachEvent ? u.detachEvent("onload", k) : u.removeEventListener("load", k, !1);
                        var b;
                        a = "success";
                        try {
                            if (F) throw "timeout";
                            var c = "xml" ===
                                l.dataType || K.XMLDocument || w.isXMLDoc(K);
                            if (e("isXml=" + c), !c && window.opera && (null === K.body || !K.body.innerHTML) && --z) return e("requeing onLoad callback, DOM not available"), void setTimeout(k, 250);
                            var d = K.body ? K.body : K.documentElement;
                            p.responseText = d ? d.innerHTML : null;
                            p.responseXML = K.XMLDocument ? K.XMLDocument : K;
                            c && (l.dataType = "xml");
                            p.getResponseHeader = function(a) {
                                return {
                                    "content-type": l.dataType
                                }[a.toLowerCase()]
                            };
                            d && (p.status = Number(d.getAttribute("status")) || p.status, p.statusText = d.getAttribute("statusText") ||
                                p.statusText);
                            var f = (l.dataType || "").toLowerCase(),
                                h = /(json|script|text)/.test(f);
                            if (h || l.textarea) {
                                var n = K.getElementsByTagName("textarea")[0];
                                if (n) p.responseText = n.value, p.status = Number(n.getAttribute("status")) || p.status, p.statusText = n.getAttribute("statusText") || p.statusText;
                                else if (h) {
                                    var q = K.getElementsByTagName("pre")[0],
                                        x = K.getElementsByTagName("body")[0];
                                    q ? p.responseText = q.textContent ? q.textContent : q.innerText : x && (p.responseText = x.textContent ? x.textContent : x.innerText)
                                }
                            } else "xml" === f && !p.responseXML &&
                            p.responseText && (p.responseXML = ha(p.responseText));
                            try {
                                xa = Ia(p, f, l)
                            } catch (D) {
                                a = "parsererror", p.error = b = D || a
                            }
                        } catch (D) {
                            e("error caught: ", D), a = "error", p.error = b = D || a
                        }
                        p.aborted && (e("upload aborted"), a = null);
                        p.status && (a = 200 <= p.status && 300 > p.status || 304 === p.status ? "success" : "error");
                        "success" === a ? (l.success && l.success.call(l.context, xa, "success", p), M.resolve(p.responseText, "success", p), r && w.event.trigger("ajaxSuccess", [p, l])) : a && (void 0 === b && (b = p.statusText), l.error && l.error.call(l.context, p, a, b), M.reject(p,
                            "error", b), r && w.event.trigger("ajaxError", [p, l, b]));
                        r && w.event.trigger("ajaxComplete", [p, l]);
                        r && !--w.active && w.event.trigger("ajaxStop");
                        l.complete && l.complete.call(l.context, p, a);
                        da = !0;
                        l.timeout && clearTimeout(L);
                        setTimeout(function() {
                            l.iframeTarget ? t.attr("src", l.iframeSrc) : t.remove();
                            p.responseXML = null
                        }, 100)
                    }
                }
            }
            var h, n, l, r, q, t, u, p, x, G, F, L, C = y[0],
                M = a.Deferred();
            if (M.abort = function(a) {
                p.abort(a)
            }, d)
                for (n = 0; n < w.length; n++) h = a(w[n]), c ? h.prop("disabled", !1) : h.removeAttr("disabled");
            (l = a.extend(!0, {},
                a.ajaxSettings, b)).context = l.context || l;
            q = "jqFormIO" + (new Date).getTime();
            var D = C.ownerDocument,
                H = y.closest("body");
            if (l.iframeTarget ? (G = (t = a(l.iframeTarget, D)).attr2("name")) ? q = G : t.attr2("name", q) : (t = a('<iframe name="' + q + '" src="' + l.iframeSrc + '" />', D)).css({
                position: "absolute",
                top: "-1000px",
                left: "-1000px"
            }), u = t[0], p = {
                aborted: 0,
                responseText: null,
                responseXML: null,
                status: 0,
                statusText: "n/a",
                getAllResponseHeaders: function() {},
                getResponseHeader: function() {},
                setRequestHeader: function() {},
                abort: function(a) {
                    var b =
                        "timeout" === a ? "timeout" : "aborted";
                    e("aborting upload... " + b);
                    this.aborted = 1;
                    try {
                        u.contentWindow.document.execCommand && u.contentWindow.document.execCommand("Stop")
                    } catch (c) {}
                    t.attr("src", l.iframeSrc);
                    p.error = b;
                    l.error && l.error.call(l.context, p, b, a);
                    r && d.event.trigger("ajaxError", [p, l, b]);
                    l.complete && l.complete.call(l.context, p, b)
                }
            }, (r = l.global) && 0 == a.active++ && a.event.trigger("ajaxStart"), r && a.event.trigger("ajaxSend", [p, l]), l.beforeSend && !1 === l.beforeSend.call(l.context, p, l)) return l.global && a.active--,
                M.reject(), M;
            if (p.aborted) return M.reject(), M;
            (x = C.clk) && (G = x.name) && !x.disabled && (l.extraData = l.extraData || {}, l.extraData[G] = x.value, "image" === x.type && (l.extraData[G + ".x"] = C.clk_x, l.extraData[G + ".y"] = C.clk_y));
            var Q = 1,
                X = 2;
            h = a("meta[name=csrf-token]").attr("content");
            (x = a("meta[name=csrf-param]").attr("content")) && h && (l.extraData = l.extraData || {}, l.extraData[x] = h);
            l.forceSync ? f() : setTimeout(f, 10);
            var xa, K, da, z = 50,
                ha = a.parseXML || function(a, b) {
                    return window.ActiveXObject ? ((b = new ActiveXObject("Microsoft.XMLDOM")).async =
                        "false", b.loadXML(a)) : b = (new DOMParser).parseFromString(a, "text/xml"), b && b.documentElement && "parsererror" !== b.documentElement.nodeName ? b : null
                },
                ta = a.parseJSON || function(a) {
                    return window.eval("(" + a + ")")
                },
                Ia = function(b, c, d) {
                    var g = b.getResponseHeader("content-type") || "",
                        f = ("xml" === c || !c) && 0 <= g.indexOf("xml");
                    b = f ? b.responseXML : b.responseText;
                    return f && "parsererror" === b.documentElement.nodeName && a.error && a.error("parsererror"), d && d.dataFilter && (b = d.dataFilter(b, c)), "string" == typeof b && (("json" === c || !c) &&
                    0 <= g.indexOf("json") ? b = ta(b) : ("script" === c || !c) && 0 <= g.indexOf("javascript") && a.globalEval(b)), b
                };
            return M
        }
        if (!this.length) return e("ajaxSubmit: skipping submit process - no element selected"), this;
        var v, n, u, y = this;
        "function" == typeof b ? b = {
            success: b
        } : "string" == typeof b || !1 === b && 0 < arguments.length ? (b = {
            url: b,
            data: g,
            dataType: f
        }, "function" == typeof h && (b.success = h)) : void 0 === b && (b = {});
        v = b.method || b.type || this.attr2("method");
        (u = (u = "string" == typeof(n = b.url || this.attr2("action")) ? a.trim(n) : "") || window.location.href ||
            "") && (u = (u.match(/^([^#]+)/) || [])[1]);
        b = a.extend(!0, {
            url: u,
            success: a.ajaxSettings.success,
            type: v || a.ajaxSettings.type,
            iframeSrc: /^https/i.test(window.location.href || "") ? "javascript:false" : "about:blank"
        }, b);
        n = {};
        if (this.trigger("form-pre-serialize", [this, b, n]), n.veto) return e("ajaxSubmit: submit vetoed via form-pre-serialize trigger"), this;
        if (b.beforeSerialize && !1 === b.beforeSerialize(this, b)) return e("ajaxSubmit: submit aborted via beforeSerialize callback"), this;
        u = b.traditional;
        void 0 === u && (u = a.ajaxSettings.traditional);
        var x, w = [],
            F = this.formToArray(b.semantic, w, b.filtering);
        b.data && (x = a.isFunction(b.data) ? b.data(F) : b.data, b.extraData = x, x = a.param(x, u));
        if (b.beforeSubmit && !1 === b.beforeSubmit(F, this, b)) return e("ajaxSubmit: submit aborted via beforeSubmit callback"), this;
        if (this.trigger("form-submit-validate", [F, this, b, n]), n.veto) return e("ajaxSubmit: submit vetoed via form-submit-validate trigger"), this;
        n = a.param(F, u);
        x && (n = n ? n + "&" + x : x);
        "GET" === b.type.toUpperCase() ? (b.url += (0 <= b.url.indexOf("?") ? "&" : "?") + n, b.data =
            null) : b.data = n;
        var G = [];
        if (b.resetForm && G.push(function() {
            y.resetForm()
        }), b.clearForm && G.push(function() {
            y.clearForm(b.includeHidden)
        }), !b.dataType && b.target) {
            var L = b.success || function() {};
            G.push(function(c, d, g) {
                var f = arguments,
                    e = b.replaceTarget ? "replaceWith" : "html";
                a(b.target)[e](c).each(function() {
                    L.apply(this, f)
                })
            })
        } else b.success && (a.isArray(b.success) ? a.merge(G, b.success) : G.push(b.success));
        if (b.success = function(a, c, d) {
            for (var g = b.context || this, f = 0, e = G.length; e > f; f++) G[f].apply(g, [a, c, d || y, y])
        },
            b.error) {
            var C = b.error;
            b.error = function(a, c, d) {
                C.apply(b.context || this, [a, c, d, y])
            }
        }
        if (b.complete) {
            var M = b.complete;
            b.complete = function(a, c) {
                M.apply(b.context || this, [a, c, y])
            }
        }
        x = 0 < a("input[type=file]:enabled", this).filter(function() {
            return "" !== a(this).val()
        }).length;
        n = "multipart/form-data" === y.attr("enctype") || "multipart/form-data" === y.attr("encoding");
        u = k && d;
        e("fileAPI :" + u);
        var K;
        !1 !== b.iframe && (b.iframe || (x || n) && !u) ? b.closeKeepAlive ? a.get(b.closeKeepAlive, function() {
            K = p(F)
        }) : K = p(F) : K = (x || n) && u ? function(c) {
            for (var d =
                new FormData, g = 0; g < c.length; g++) d.append(c[g].name, c[g].value);
            if (b.extraData)
                for (c = l(b.extraData), g = 0; g < c.length; g++) c[g] && d.append(c[g][0], c[g][1]);
            b.data = null;
            g = a.extend(!0, {}, a.ajaxSettings, b, {
                contentType: !1,
                processData: !1,
                cache: !1,
                type: v || "POST"
            });
            b.uploadProgress && (g.xhr = function() {
                var c = a.ajaxSettings.xhr();
                return c.upload && c.upload.addEventListener("progress", function(a) {
                    var c = 0,
                        d = a.loaded || a.position,
                        g = a.total;
                    a.lengthComputable && (c = Math.ceil(d / g * 100));
                    b.uploadProgress(a, d, g, c)
                }, !1), c
            });
            g.data = null;
            var f = g.beforeSend;
            return g.beforeSend = function(a, c) {
                b.formData ? c.data = b.formData : c.data = d;
                f && f.call(this, a, c)
            }, a.ajax(g)
        }(F) : a.ajax(b);
        y.removeData("jqxhr").data("jqxhr", K);
        for (x = 0; x < w.length; x++) w[x] = null;
        return this.trigger("form-submit-notify", [this, b]), this
    };
    a.fn.ajaxForm = function(b, c, d, f) {
        if (("string" == typeof b || !1 === b && 0 < arguments.length) && (b = {
            url: b,
            data: c,
            dataType: d
        }, "function" == typeof f && (b.success = f)), b = b || {}, b.delegation = b.delegation && a.isFunction(a.fn.on), !b.delegation && 0 ===
        this.length) {
            var k = this.selector,
                p = this.context;
            return !a.isReady && k ? (e("DOM not ready, queuing ajaxForm"), a(function() {
                a(k, p).ajaxForm(b)
            }), this) : (e("terminating; zero elements found by selector" + (a.isReady ? "" : " (DOM not ready)")), this)
        }
        return b.delegation ? (a(document).off("submit.form-plugin", this.selector, l).off("click.form-plugin", this.selector, h).on("submit.form-plugin", this.selector, b, l).on("click.form-plugin", this.selector, b, h), this) : this.ajaxFormUnbind().on("submit.form-plugin", b, l).on("click.form-plugin",
            b, h)
    };
    a.fn.ajaxFormUnbind = function() {
        return this.off("submit.form-plugin click.form-plugin")
    };
    a.fn.formToArray = function(b, c, d) {
        var f = [];
        if (0 === this.length) return f;
        var e, h = this[0],
            l = this.attr("id"),
            n = b || void 0 === h.elements ? h.getElementsByTagName("*") : h.elements;
        if (n && (n = a.makeArray(n)), l && (b || /(Edge|Trident)\//.test(navigator.userAgent)) && (e = a(':input[form="' + l + '"]').get()).length && (n = (n || []).concat(e)), !n || !n.length) return f;
        a.isFunction(d) && (n = a.map(n, d));
        var u, y, x, w;
        d = 0;
        for (l = n.length; l > d; d++)
            if (x =
                n[d], (u = x.name) && !x.disabled)
                if (b && h.clk && "image" === x.type) h.clk === x && (f.push({
                    name: u,
                    value: a(x).val(),
                    type: x.type
                }), f.push({
                    name: u + ".x",
                    value: h.clk_x
                }, {
                    name: u + ".y",
                    value: h.clk_y
                }));
                else if ((y = a.fieldValue(x, !0)) && y.constructor === Array)
                    for (c && c.push(x), e = 0, w = y.length; w > e; e++) f.push({
                        name: u,
                        value: y[e]
                    });
                else if (k && "file" === x.type)
                    if (c && c.push(x), w = x.files, w.length)
                        for (e = 0; e < w.length; e++) f.push({
                            name: u,
                            value: w[e],
                            type: x.type
                        });
                    else f.push({
                        name: u,
                        value: "",
                        type: x.type
                    });
                else null !== y && void 0 !== y && (c &&
                    c.push(x), f.push({
                        name: u,
                        value: y,
                        type: x.type,
                        required: x.required
                    }));
        !b && h.clk && (b = a(h.clk), c = b[0], (u = c.name) && !c.disabled && "image" === c.type && (f.push({
            name: u,
            value: b.val()
        }), f.push({
            name: u + ".x",
            value: h.clk_x
        }, {
            name: u + ".y",
            value: h.clk_y
        })));
        return f
    };
    a.fn.formSerialize = function(b) {
        return a.param(this.formToArray(b))
    };
    a.fn.fieldSerialize = function(b) {
        var c = [];
        return this.each(function() {
            var d = this.name;
            if (d) {
                var f = a.fieldValue(this, b);
                if (f && f.constructor === Array)
                    for (var e = 0, k = f.length; k > e; e++) c.push({
                        name: d,
                        value: f[e]
                    });
                else null !== f && void 0 !== f && c.push({
                    name: this.name,
                    value: f
                })
            }
        }), a.param(c)
    };
    a.fn.fieldValue = function(b) {
        for (var c = [], d = 0, f = this.length; f > d; d++) {
            var e = a.fieldValue(this[d], b);
            null === e || void 0 === e || e.constructor === Array && !e.length || (e.constructor === Array ? a.merge(c, e) : c.push(e))
        }
        return c
    };
    a.fieldValue = function(b, c) {
        var d = b.name,
            e = b.type,
            k = b.tagName.toLowerCase();
        if (void 0 === c && (c = !0), c && (!d || b.disabled || "reset" === e || "button" === e || ("checkbox" === e || "radio" === e) && !b.checked || ("submit" === e ||
            "image" === e) && b.form && b.form.clk !== b || "select" === k && -1 === b.selectedIndex)) return null;
        if ("select" === k) {
            k = b.selectedIndex;
            if (0 > k) return null;
            c = [];
            b = b.options;
            d = (e = "select-one" === e) ? k + 1 : b.length;
            for (k = e ? k : 0; d > k; k++) {
                var h = b[k];
                if (h.selected && !h.disabled) {
                    var l = h.value;
                    if (l || (l = h.attributes && h.attributes.value && !h.attributes.value.specified ? h.text : h.value), e) return l;
                    c.push(l)
                }
            }
            return c
        }
        return a(b).val().replace(f, "\r\n")
    };
    a.fn.clearForm = function(b) {
        return this.each(function() {
            a("input,select,textarea",
                this).clearFields(b)
        })
    };
    a.fn.clearFields = a.fn.clearInputs = function(b) {
        var c = /^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;
        return this.each(function() {
            var d = this.type,
                f = this.tagName.toLowerCase();
            c.test(d) || "textarea" === f ? this.value = "" : "checkbox" === d || "radio" === d ? this.checked = !1 : "select" === f ? this.selectedIndex = -1 : "file" === d ? /MSIE/.test(navigator.userAgent) ? a(this).replaceWith(a(this).clone(!0)) : a(this).val("") : b && (!0 === b && /hidden/.test(d) || "string" == typeof b &&
                a(this).is(b)) && (this.value = "")
        })
    };
    a.fn.resetForm = function() {
        return this.each(function() {
            var b = a(this),
                c = this.tagName.toLowerCase();
            switch (c) {
                case "input":
                    this.checked = this.defaultChecked;
                case "textarea":
                    return this.value = this.defaultValue, !0;
                case "option":
                case "optgroup":
                    var d = b.parents("select");
                    return d.length && d[0].multiple ? "option" === c ? this.selected = this.defaultSelected : b.find("option").resetForm() : d.resetForm(), !0;
                case "select":
                    return b.find("option").each(function(a) {
                        return this.selected = this.defaultSelected,
                            this.defaultSelected && !b[0].multiple ? (b[0].selectedIndex = a, !1) : void 0
                    }), !0;
                case "label":
                    return c = a(b.attr("for")), d = b.find("input,select,textarea"), c[0] && d.unshift(c[0]), d.resetForm(), !0;
                case "form":
                    return ("function" == typeof this.reset || "object" == typeof this.reset && !this.reset.nodeType) && this.reset(), !0;
                default:
                    return b.find("form,input,label,select,textarea").resetForm(), !0
            }
        })
    };
    a.fn.enable = function(a) {
        return void 0 === a && (a = !0), this.each(function() {
            this.disabled = !a
        })
    };
    a.fn.selected = function(b) {
        return void 0 ===
        b && (b = !0), this.each(function() {
            var c = this.type;
            "checkbox" === c || "radio" === c ? this.checked = b : "option" === this.tagName.toLowerCase() && (c = a(this).parent("select"), b && c[0] && "select-one" === c[0].type && c.find("option").selected(!1), this.selected = b)
        })
    };
    a.fn.ajaxSubmit.debug = !1
});
(function(a) {
    function l(a, d) {
        d && a.append(d.jquery ? d.clone() : d)
    }

    function h(f, d, c) {
        var b = d.clone(c.formValues);
        c.formValues && e(d, b, "select, textarea");
        c.removeScripts && b.find("script").remove();
        c.printContainer ? b.appendTo(f) : b.each(function() {
            a(this).children().appendTo(f)
        })
    }

    function e(f, d, c) {
        var b = f.find(c);
        d.find(c).each(function(c, d) {
            a(d).val(b.eq(c).val())
        })
    }
    var f;
    a.fn.printThis = function(e) {
        f = a.extend({}, a.fn.printThis.defaults, e);
        var d = this instanceof jQuery ? this : a(this);
        e = "printThis-" + (new Date).getTime();
        if (window.location.hostname !== document.domain && navigator.userAgent.match(/msie/i)) {
            var c = 'javascript:document.write("<head><script>document.domain=\\"' + document.domain + '\\";\x3c/script></head><body></body>")',
                b = document.createElement("iframe");
            b.name = "printIframe";
            b.id = e;
            b.className = "MSIE";
            document.body.appendChild(b);
            b.src = c
        } else a("<iframe id='" + e + "' name='printIframe' />").appendTo("body");
        var g = a("#" + e);
        f.debug || g.css({
            position: "absolute",
            width: "0px",
            height: "0px",
            left: "-600px",
            top: "-600px"
        });
        setTimeout(function() {
            function b(a, c) {
                a = a.get(0);
                a = a.contentWindow || a.contentDocument || a;
                a = a.document || a.contentDocument || a;
                a.open();
                a.write(c);
                a.close()
            }
            f.doctypeString && b(g, f.doctypeString);
            var c, e = g.contents(),
                k = e.find("head"),
                v = e.find("body");
            c = a("base");
            c = !0 === f.base && 0 < c.length ? c.attr("href") : "string" == typeof f.base ? f.base : document.location.protocol + "//" + document.location.host;
            k.append('<base href="' + c + '">');
            f.importCSS && a("link[rel=stylesheet]").each(function() {
                var b = a(this).attr("href");
                if (b) {
                    var c =
                        a(this).attr("media") || "all";
                    k.append("<link type='text/css' rel='stylesheet' href='" + b + "' media='" + c + "'>")
                }
            });
            f.importStyle && a("style").each(function() {
                a(this).clone().appendTo(k)
            });
            f.pageTitle && k.append("<title>" + f.pageTitle + "</title>");
            f.loadCSS && (a.isArray(f.loadCSS) ? jQuery.each(f.loadCSS, function(a, b) {
                k.append("<link type='text/css' rel='stylesheet' href='" + this + "'>")
            }) : k.append("<link type='text/css' rel='stylesheet' href='" + f.loadCSS + "'>"));
            c = f.copyTagClasses;
            if (c && (c = !0 === c ? "bh" : c, -1 !== c.indexOf("b") &&
            v.addClass(a("body")[0].className), -1 !== c.indexOf("h") && e.find("html").addClass(a("html")[0].className)), l(v, f.header), f.canvas) {
                var n = 0;
                d.find("canvas").each(function() {
                    a(this).attr("data-printthis", n++)
                })
            }
            h(v, d, f);
            f.canvas && v.find("canvas").each(function() {
                var b = a(this).data("printthis"),
                    b = a('[data-printthis="' + b + '"]');
                this.getContext("2d").drawImage(b[0], 0, 0);
                b.removeData("printthis")
            });
            f.removeInline && (a.isFunction(a.removeAttr) ? e.find("body *").removeAttr("style") : e.find("body *").attr("style",
                ""));
            l(v, f.footer);
            setTimeout(function() {
                g.hasClass("MSIE") ? (window.frames.printIframe.focus(), k.append("<script>  window.print(); \x3c/script>")) : document.queryCommandSupported("print") ? g[0].contentWindow.document.execCommand("print", !1, null) : (g[0].contentWindow.focus(), g[0].contentWindow.print());
                f.debug || setTimeout(function() {
                    g.remove()
                }, 1E3)
            }, f.printDelay)
        }, 333)
    };
    a.fn.printThis.defaults = {
        debug: !1,
        importCSS: !0,
        importStyle: !1,
        printContainer: !0,
        loadCSS: "",
        pageTitle: "",
        removeInline: !1,
        printDelay: 333,
        header: null,
        footer: null,
        formValues: !0,
        canvas: !1,
        base: !1,
        doctypeString: "<!DOCTYPE html>",
        removeScripts: !1,
        copyTagClasses: !1
    }
})(jQuery);
if ("undefined" == typeof jQuery) throw Error("Bootstrap's JavaScript requires jQuery"); + function(a) {
    a = a.fn.jquery.split(" ")[0].split(".");
    if (2 > a[0] && 9 > a[1] || 1 == a[0] && 9 == a[1] && 1 > a[2] || 2 < a[0]) throw Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 3");
}(jQuery); +
    function(a) {
        var l = function(e) {
            a(e).on("click", '[data-dismiss="alert"]', this.close)
        };
        l.VERSION = "3.3.6";
        l.TRANSITION_DURATION = 150;
        l.prototype.close = function(e) {
            function f() {
                c.detach().trigger("closed.bs.alert").remove()
            }
            var k = a(this),
                d = k.attr("data-target");
            d || (d = k.attr("href"), d = d && d.replace(/.*(?=#[^\s]*$)/, ""));
            var c = a(d);
            e && e.preventDefault();
            c.length || (c = k.closest(".alert"));
            c.trigger(e = a.Event("close.bs.alert"));
            e.isDefaultPrevented() || (c.removeClass("in"), a.support.transition && c.hasClass("fade") ?
                c.one("bsTransitionEnd", f).emulateTransitionEnd(l.TRANSITION_DURATION) : f())
        };
        var h = a.fn.alert;
        a.fn.alert = function(e) {
            return this.each(function() {
                var f = a(this),
                    k = f.data("bs.alert");
                k || f.data("bs.alert", k = new l(this));
                "string" == typeof e && k[e].call(f)
            })
        };
        a.fn.alert.Constructor = l;
        a.fn.alert.noConflict = function() {
            return a.fn.alert = h, this
        };
        a(document).on("click.bs.alert.data-api", '[data-dismiss="alert"]', l.prototype.close)
    }(jQuery); +
    function(a) {
        function l(f) {
            return this.each(function() {
                var e = a(this),
                    d = e.data("bs.button"),
                    c = "object" == typeof f && f;
                d || e.data("bs.button", d = new h(this, c));
                "toggle" == f ? d.toggle() : f && d.setState(f)
            })
        }
        var h = function(f, e) {
            this.$element = a(f);
            this.options = a.extend({}, h.DEFAULTS, e);
            this.isLoading = !1
        };
        h.VERSION = "3.3.6";
        h.DEFAULTS = {
            loadingText: "loading..."
        };
        h.prototype.setState = function(f) {
            var e = this.$element,
                d = e.is("input") ? "val" : "html",
                c = e.data();
            f += "Text";
            null == c.resetText && e.data("resetText", e[d]());
            setTimeout(a.proxy(function() {
                e[d](null ==
                c[f] ? this.options[f] : c[f]);
                "loadingText" == f ? (this.isLoading = !0, e.addClass("disabled").attr("disabled", "disabled")) : this.isLoading && (this.isLoading = !1, e.removeClass("disabled").removeAttr("disabled"))
            }, this), 0)
        };
        h.prototype.toggle = function() {
            var a = !0,
                e = this.$element.closest('[data-toggle="buttons"]');
            if (e.length) {
                var d = this.$element.find("input");
                "radio" == d.prop("type") ? (d.prop("checked") && (a = !1), e.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == d.prop("type") &&
                    (d.prop("checked") !== this.$element.hasClass("active") && (a = !1), this.$element.toggleClass("active"));
                d.prop("checked", this.$element.hasClass("active"));
                a && d.trigger("change")
            } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
        };
        var e = a.fn.button;
        a.fn.button = l;
        a.fn.button.Constructor = h;
        a.fn.button.noConflict = function() {
            return a.fn.button = e, this
        };
        a(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(f) {
            var e = a(f.target);
            e.hasClass("btn") || (e = e.closest(".btn"));
            l.call(e, "toggle");
            a(f.target).is('input[type="radio"]') || a(f.target).is('input[type="checkbox"]') || f.preventDefault()
        }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(f) {
            a(f.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(f.type))
        })
    }(jQuery); +
    function(a) {
        function l(f) {
            return this.each(function() {
                var d = a(this),
                    c = d.data("bs.carousel"),
                    b = a.extend({}, h.DEFAULTS, d.data(), "object" == typeof f && f),
                    g = "string" == typeof f ? f : b.slide;
                c || d.data("bs.carousel", c = new h(this, b));
                "number" == typeof f ? c.to(f) : g ? c[g]() : b.interval && c.pause().cycle()
            })
        }
        var h = function(f, d) {
            this.$element = a(f);
            this.$indicators = this.$element.find(".carousel-indicators");
            this.options = d;
            this.$items = this.$active = this.interval = this.sliding = this.paused = null;
            this.options.keyboard && this.$element.on("keydown.bs.carousel",
                a.proxy(this.keydown, this));
            "hover" != this.options.pause || "ontouchstart" in document.documentElement || this.$element.on("mouseenter.bs.carousel", a.proxy(this.pause, this)).on("mouseleave.bs.carousel", a.proxy(this.cycle, this))
        };
        h.VERSION = "3.3.6";
        h.TRANSITION_DURATION = 600;
        h.DEFAULTS = {
            interval: 5E3,
            pause: "hover",
            wrap: !0,
            keyboard: !0
        };
        h.prototype.keydown = function(a) {
            if (!/input|textarea/i.test(a.target.tagName)) {
                switch (a.which) {
                    case 37:
                        this.prev();
                        break;
                    case 39:
                        this.next();
                        break;
                    default:
                        return
                }
                a.preventDefault()
            }
        };
        h.prototype.cycle = function(f) {
            return f || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(a.proxy(this.next, this), this.options.interval)), this
        };
        h.prototype.getItemIndex = function(a) {
            return this.$items = a.parent().children(".item"), this.$items.index(a || this.$active)
        };
        h.prototype.getItemForDirection = function(a, d) {
            var c = this.getItemIndex(d);
            return ("prev" == a && 0 === c || "next" == a && c == this.$items.length - 1) && !this.options.wrap ? d : this.$items.eq((c +
                ("prev" == a ? -1 : 1)) % this.$items.length)
        };
        h.prototype.to = function(a) {
            var d = this,
                c = this.getItemIndex(this.$active = this.$element.find(".item.active"));
            return a > this.$items.length - 1 || 0 > a ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function() {
                d.to(a)
            }) : c == a ? this.pause().cycle() : this.slide(a > c ? "next" : "prev", this.$items.eq(a))
        };
        h.prototype.pause = function(f) {
            return f || (this.paused = !0), this.$element.find(".next, .prev").length && a.support.transition && (this.$element.trigger(a.support.transition.end),
                this.cycle(!0)), this.interval = clearInterval(this.interval), this
        };
        h.prototype.next = function() {
            return this.sliding ? void 0 : this.slide("next")
        };
        h.prototype.prev = function() {
            return this.sliding ? void 0 : this.slide("prev")
        };
        h.prototype.slide = function(f, d) {
            var c = this.$element.find(".item.active"),
                b = d || this.getItemForDirection(f, c);
            d = this.interval;
            var g = "next" == f ? "left" : "right",
                e = this;
            if (b.hasClass("active")) return this.sliding = !1;
            var l = b[0],
                q = a.Event("slide.bs.carousel", {
                    relatedTarget: l,
                    direction: g
                });
            if (this.$element.trigger(q), !q.isDefaultPrevented()) {
                if (this.sliding = !0, d && this.pause(), this.$indicators.length) this.$indicators.find(".active").removeClass("active"), (q = a(this.$indicators.children()[this.getItemIndex(b)])) && q.addClass("active");
                var p = a.Event("slid.bs.carousel", {
                    relatedTarget: l,
                    direction: g
                });
                return a.support.transition && this.$element.hasClass("slide") ? (b.addClass(f), b[0].offsetWidth, c.addClass(g), b.addClass(g), c.one("bsTransitionEnd", function() {
                    b.removeClass([f, g].join(" ")).addClass("active");
                    c.removeClass(["active",
                        g
                    ].join(" "));
                    e.sliding = !1;
                    setTimeout(function() {
                        e.$element.trigger(p)
                    }, 0)
                }).emulateTransitionEnd(h.TRANSITION_DURATION)) : (c.removeClass("active"), b.addClass("active"), this.sliding = !1, this.$element.trigger(p)), d && this.cycle(), this
            }
        };
        var e = a.fn.carousel;
        a.fn.carousel = l;
        a.fn.carousel.Constructor = h;
        a.fn.carousel.noConflict = function() {
            return a.fn.carousel = e, this
        };
        var f = function(f) {
            var d, c = a(this),
                b = a(c.attr("data-target") || (d = c.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, ""));
            b.hasClass("carousel") && (d =
                a.extend({}, b.data(), c.data()), (c = c.attr("data-slide-to")) && (d.interval = !1), l.call(b, d), c && b.data("bs.carousel").to(c), f.preventDefault())
        };
        a(document).on("click.bs.carousel.data-api", "[data-slide]", f).on("click.bs.carousel.data-api", "[data-slide-to]", f);
        a(window).on("load", function() {
            a('[data-ride="carousel"]').each(function() {
                var f = a(this);
                l.call(f, f.data())
            })
        })
    }(jQuery); +
    function(a) {
        function l(c) {
            var b = c.attr("data-target");
            b || (b = c.attr("href"), b = b && /#[A-Za-z]/.test(b) && b.replace(/.*(?=#[^\s]*$)/, ""));
            return (b = b && a(b)) && b.length ? b : c.parent()
        }

        function h(c) {
            c && 3 === c.which || (a(e).remove(), a(f).each(function() {
                var b = a(this),
                    d = l(b),
                    f = {
                        relatedTarget: this
                    };
                d.hasClass("open") && (c && "click" == c.type && /input|textarea/i.test(c.target.tagName) && a.contains(d[0], c.target) || (d.trigger(c = a.Event("hide.bs.dropdown", f)), c.isDefaultPrevented() || (b.attr("aria-expanded", "false"), d.removeClass("open").trigger(a.Event("hidden.bs.dropdown",
                    f)))))
            }))
        }
        var e = ".dropdown-backdrop",
            f = '[data-toggle="dropdown"]',
            k = function(c) {
                a(c).on("click.bs.dropdown", this.toggle)
            };
        k.VERSION = "3.3.6";
        k.prototype.toggle = function(c) {
            var b = a(this);
            if (!b.is(".disabled, :disabled")) {
                var d = l(b),
                    f = d.hasClass("open");
                if (h(), !f) {
                    "ontouchstart" in document.documentElement && !d.closest(".navbar-nav").length && a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click", h);
                    f = {
                        relatedTarget: this
                    };
                    if (d.trigger(c = a.Event("show.bs.dropdown",
                        f)), c.isDefaultPrevented()) return;
                    b.trigger("focus").attr("aria-expanded", "true");
                    d.toggleClass("open").trigger(a.Event("shown.bs.dropdown", f))
                }
                return !1
            }
        };
        k.prototype.keydown = function(c) {
            if (/(38|40|27|32)/.test(c.which) && !/input|textarea/i.test(c.target.tagName)) {
                var b = a(this);
                if (c.preventDefault(), c.stopPropagation(), !b.is(".disabled, :disabled")) {
                    var d = l(b),
                        e = d.hasClass("open");
                    if (!e && 27 != c.which || e && 27 == c.which) return 27 == c.which && d.find(f).trigger("focus"), b.trigger("click");
                    b = d.find(".dropdown-menu li:not(.disabled):visible a");
                    b.length && (d = b.index(c.target), 38 == c.which && 0 < d && d--, 40 == c.which && d < b.length - 1 && d++, ~d || (d = 0), b.eq(d).trigger("focus"))
                }
            }
        };
        var d = a.fn.dropdown;
        a.fn.dropdown = function(c) {
            return this.each(function() {
                var b = a(this),
                    d = b.data("bs.dropdown");
                d || b.data("bs.dropdown", d = new k(this));
                "string" == typeof c && d[c].call(b)
            })
        };
        a.fn.dropdown.Constructor = k;
        a.fn.dropdown.noConflict = function() {
            return a.fn.dropdown = d, this
        };
        a(document).on("click.bs.dropdown.data-api", h).on("click.bs.dropdown.data-api", ".dropdown form", function(a) {
            a.stopPropagation()
        }).on("click.bs.dropdown.data-api",
            f, k.prototype.toggle).on("keydown.bs.dropdown.data-api", f, k.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", k.prototype.keydown)
    }(jQuery); +
    function(a) {
        function l(f, e) {
            return this.each(function() {
                var d = a(this),
                    c = d.data("bs.modal"),
                    b = a.extend({}, h.DEFAULTS, d.data(), "object" == typeof f && f);
                c || d.data("bs.modal", c = new h(this, b));
                "string" == typeof f ? c[f](e) : b.show && c.show(e)
            })
        }
        var h = function(f, e) {
            this.options = e;
            this.$body = a(document.body);
            this.$element = a(f);
            this.$dialog = this.$element.find(".modal-dialog");
            this.originalBodyPad = this.isShown = this.$backdrop = null;
            this.scrollbarWidth = 0;
            this.ignoreBackdropClick = !1;
            this.options.remote && this.$element.find(".modal-content").load(this.options.remote,
                a.proxy(function() {
                    this.$element.trigger("loaded.bs.modal")
                }, this))
        };
        h.VERSION = "3.3.6";
        h.TRANSITION_DURATION = 300;
        h.BACKDROP_TRANSITION_DURATION = 150;
        h.DEFAULTS = {
            backdrop: !0,
            keyboard: !0,
            show: !0
        };
        h.prototype.toggle = function(a) {
            return this.isShown ? this.hide() : this.show(a)
        };
        h.prototype.show = function(f) {
            var e = this,
                d = a.Event("show.bs.modal", {
                    relatedTarget: f
                });
            this.$element.trigger(d);
            this.isShown || d.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"),
                this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', a.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function() {
                e.$element.one("mouseup.dismiss.bs.modal", function(c) {
                    a(c.target).is(e.$element) && (e.ignoreBackdropClick = !0)
                })
            }), this.backdrop(function() {
                var c = a.support.transition && e.$element.hasClass("fade");
                e.$element.parent().length || e.$element.appendTo(e.$body);
                e.$element.show().scrollTop(0);
                e.adjustDialog();
                c && e.$element[0].offsetWidth;
                e.$element.addClass("in");
                e.enforceFocus();
                var b = a.Event("shown.bs.modal", {
                    relatedTarget: f
                });
                c ? e.$dialog.one("bsTransitionEnd", function() {
                    e.$element.trigger("focus").trigger(b)
                }).emulateTransitionEnd(h.TRANSITION_DURATION) : e.$element.trigger("focus").trigger(b)
            }))
        };
        h.prototype.hide = function(f) {
            f && f.preventDefault();
            f = a.Event("hide.bs.modal");
            this.$element.trigger(f);
            this.isShown && !f.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), a(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),
                this.$dialog.off("mousedown.dismiss.bs.modal"), a.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", a.proxy(this.hideModal, this)).emulateTransitionEnd(h.TRANSITION_DURATION) : this.hideModal())
        };
        h.prototype.enforceFocus = function() {
            a(document).off("focusin.bs.modal").on("focusin.bs.modal", a.proxy(function(a) {
                this.$element[0] === a.target || this.$element.has(a.target).length || this.$element.trigger("focus")
            }, this))
        };
        h.prototype.escape = function() {
            this.isShown && this.options.keyboard ?
                this.$element.on("keydown.dismiss.bs.modal", a.proxy(function(a) {
                    27 == a.which && this.hide()
                }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
        };
        h.prototype.resize = function() {
            this.isShown ? a(window).on("resize.bs.modal", a.proxy(this.handleUpdate, this)) : a(window).off("resize.bs.modal")
        };
        h.prototype.hideModal = function() {
            var a = this;
            this.$element.hide();
            this.backdrop(function() {
                a.$body.removeClass("modal-open");
                a.resetAdjustments();
                a.resetScrollbar();
                a.$element.trigger("hidden.bs.modal")
            })
        };
        h.prototype.removeBackdrop = function() {
            this.$backdrop && this.$backdrop.remove();
            this.$backdrop = null
        };
        h.prototype.backdrop = function(f) {
            var e = this,
                d = this.$element.hasClass("fade") ? "fade" : "";
            if (this.isShown && this.options.backdrop) {
                var c = a.support.transition && d;
                if (this.$backdrop = a(document.createElement("div")).addClass("modal-backdrop " + d).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", a.proxy(function(a) {
                    return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(a.target ===
                        a.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
                }, this)), c && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), f) c ? this.$backdrop.one("bsTransitionEnd", f).emulateTransitionEnd(h.BACKDROP_TRANSITION_DURATION) : f()
            } else !this.isShown && this.$backdrop ? (this.$backdrop.removeClass("in"), d = function() {
                e.removeBackdrop();
                f && f()
            }, a.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", d).emulateTransitionEnd(h.BACKDROP_TRANSITION_DURATION) :
                d()) : f && f()
        };
        h.prototype.handleUpdate = function() {
            this.adjustDialog()
        };
        h.prototype.adjustDialog = function() {
            var a = this.$element[0].scrollHeight > document.documentElement.clientHeight;
            this.$element.css({
                paddingLeft: !this.bodyIsOverflowing && a ? this.scrollbarWidth : "",
                paddingRight: this.bodyIsOverflowing && !a ? this.scrollbarWidth : ""
            })
        };
        h.prototype.resetAdjustments = function() {
            this.$element.css({
                paddingLeft: "",
                paddingRight: ""
            })
        };
        h.prototype.checkScrollbar = function() {
            var a = window.innerWidth;
            a || (a = document.documentElement.getBoundingClientRect(),
                a = a.right - Math.abs(a.left));
            this.bodyIsOverflowing = document.body.clientWidth < a;
            this.scrollbarWidth = this.measureScrollbar()
        };
        h.prototype.setScrollbar = function() {
            var a = parseInt(this.$body.css("padding-right") || 0, 10);
            this.originalBodyPad = document.body.style.paddingRight || "";
            this.bodyIsOverflowing && this.$body.css("padding-right", a + this.scrollbarWidth)
        };
        h.prototype.resetScrollbar = function() {
            this.$body.css("padding-right", this.originalBodyPad)
        };
        h.prototype.measureScrollbar = function() {
            var a = document.createElement("div");
            a.className = "modal-scrollbar-measure";
            this.$body.append(a);
            var e = a.offsetWidth - a.clientWidth;
            return this.$body[0].removeChild(a), e
        };
        var e = a.fn.modal;
        a.fn.modal = l;
        a.fn.modal.Constructor = h;
        a.fn.modal.noConflict = function() {
            return a.fn.modal = e, this
        };
        a(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(f) {
            var e = a(this),
                d = e.attr("href"),
                c = a(e.attr("data-target") || d && d.replace(/.*(?=#[^\s]+$)/, "")),
                d = c.data("bs.modal") ? "toggle" : a.extend({
                    remote: !/#/.test(d) && d
                }, c.data(), e.data());
            e.is("a") &&
            f.preventDefault();
            c.one("show.bs.modal", function(a) {
                a.isDefaultPrevented() || c.one("hidden.bs.modal", function() {
                    e.is(":visible") && e.trigger("focus")
                })
            });
            l.call(c, d, this)
        })
    }(jQuery); +
    function(a) {
        var l = function(a, f) {
            this.inState = this.$element = this.hoverState = this.timeout = this.enabled = this.options = this.type = null;
            this.init("tooltip", a, f)
        };
        l.VERSION = "3.3.6";
        l.TRANSITION_DURATION = 150;
        l.DEFAULTS = {
            animation: !0,
            placement: "top",
            selector: !1,
            template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
            trigger: "hover focus",
            title: "",
            delay: 0,
            html: !1,
            container: !1,
            viewport: {
                selector: "body",
                padding: 0
            }
        };
        l.prototype.init = function(e, f,
                                    k) {
            if (this.enabled = !0, this.type = e, this.$element = a(f), this.options = this.getOptions(k), this.$viewport = this.options.viewport && a(a.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
                click: !1,
                hover: !1,
                focus: !1
            }, this.$element[0] instanceof document.constructor && !this.options.selector) throw Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
            e = this.options.trigger.split(" ");
            for (f = e.length; f--;)
                if (k = e[f], "click" == k) this.$element.on("click." + this.type, this.options.selector, a.proxy(this.toggle, this));
                else if ("manual" != k) {
                    var d = "hover" == k ? "mouseleave" : "focusout";
                    this.$element.on(("hover" == k ? "mouseenter" : "focusin") + "." + this.type, this.options.selector, a.proxy(this.enter, this));
                    this.$element.on(d + "." + this.type, this.options.selector, a.proxy(this.leave, this))
                }
            this.options.selector ? this._options = a.extend({}, this.options, {
                trigger: "manual",
                selector: ""
            }) : this.fixTitle()
        };
        l.prototype.getDefaults =
            function() {
                return l.DEFAULTS
            };
        l.prototype.getOptions = function(e) {
            return e = a.extend({}, this.getDefaults(), this.$element.data(), e), e.delay && "number" == typeof e.delay && (e.delay = {
                show: e.delay,
                hide: e.delay
            }), e
        };
        l.prototype.getDelegateOptions = function() {
            var e = {},
                f = this.getDefaults();
            return this._options && a.each(this._options, function(a, d) {
                f[a] != d && (e[a] = d)
            }), e
        };
        l.prototype.enter = function(e) {
            var f = e instanceof this.constructor ? e : a(e.currentTarget).data("bs." + this.type);
            return f || (f = new this.constructor(e.currentTarget,
                this.getDelegateOptions()), a(e.currentTarget).data("bs." + this.type, f)), e instanceof a.Event && (f.inState["focusin" == e.type ? "focus" : "hover"] = !0), f.tip().hasClass("in") || "in" == f.hoverState ? void(f.hoverState = "in") : (clearTimeout(f.timeout), f.hoverState = "in", f.options.delay && f.options.delay.show ? void(f.timeout = setTimeout(function() {
                "in" == f.hoverState && f.show()
            }, f.options.delay.show)) : f.show())
        };
        l.prototype.isInStateTrue = function() {
            for (var a in this.inState)
                if (this.inState[a]) return !0;
            return !1
        };
        l.prototype.leave =
            function(e) {
                var f = e instanceof this.constructor ? e : a(e.currentTarget).data("bs." + this.type);
                return f || (f = new this.constructor(e.currentTarget, this.getDelegateOptions()), a(e.currentTarget).data("bs." + this.type, f)), e instanceof a.Event && (f.inState["focusout" == e.type ? "focus" : "hover"] = !1), f.isInStateTrue() ? void 0 : (clearTimeout(f.timeout), f.hoverState = "out", f.options.delay && f.options.delay.hide ? void(f.timeout = setTimeout(function() {
                    "out" == f.hoverState && f.hide()
                }, f.options.delay.hide)) : f.hide())
            };
        l.prototype.show =
            function() {
                var e = a.Event("show.bs." + this.type);
                if (this.hasContent() && this.enabled) {
                    this.$element.trigger(e);
                    var f = a.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
                    if (!e.isDefaultPrevented() && f) {
                        var k = this,
                            e = this.tip(),
                            f = this.getUID(this.type);
                        this.setContent();
                        e.attr("id", f);
                        this.$element.attr("aria-describedby", f);
                        this.options.animation && e.addClass("fade");
                        var f = "function" == typeof this.options.placement ? this.options.placement.call(this, e[0], this.$element[0]) : this.options.placement,
                            d = /\s?auto?\s?/i,
                            c = d.test(f);
                        c && (f = f.replace(d, "") || "top");
                        e.detach().css({
                            top: 0,
                            left: 0,
                            display: "block"
                        }).addClass(f).data("bs." + this.type, this);
                        this.options.container ? e.appendTo(this.options.container) : e.insertAfter(this.$element);
                        this.$element.trigger("inserted.bs." + this.type);
                        var d = this.getPosition(),
                            b = e[0].offsetWidth,
                            g = e[0].offsetHeight;
                        if (c) {
                            var c = f,
                                h = this.getPosition(this.$viewport),
                                f = "bottom" == f && d.bottom + g > h.bottom ? "top" : "top" == f && d.top - g < h.top ? "bottom" : "right" == f && d.right + b > h.width ? "left" :
                                    "left" == f && d.left - b < h.left ? "right" : f;
                            e.removeClass(c).addClass(f)
                        }
                        d = this.getCalculatedOffset(f, d, b, g);
                        this.applyPlacement(d, f);
                        f = function() {
                            var a = k.hoverState;
                            k.$element.trigger("shown.bs." + k.type);
                            k.hoverState = null;
                            "out" == a && k.leave(k)
                        };
                        a.support.transition && this.$tip.hasClass("fade") ? e.one("bsTransitionEnd", f).emulateTransitionEnd(l.TRANSITION_DURATION) : f()
                    }
                }
            };
        l.prototype.applyPlacement = function(e, f) {
            var k = this.tip(),
                d = k[0].offsetWidth,
                c = k[0].offsetHeight,
                b = parseInt(k.css("margin-top"), 10),
                g = parseInt(k.css("margin-left"),
                    10);
            isNaN(b) && (b = 0);
            isNaN(g) && (g = 0);
            e.top += b;
            e.left += g;
            a.offset.setOffset(k[0], a.extend({
                using: function(a) {
                    k.css({
                        top: Math.round(a.top),
                        left: Math.round(a.left)
                    })
                }
            }, e), 0);
            k.addClass("in");
            b = k[0].offsetWidth;
            g = k[0].offsetHeight;
            "top" == f && g != c && (e.top = e.top + c - g);
            var h = this.getViewportAdjustedDelta(f, e, b, g);
            h.left ? e.left += h.left : e.top += h.top;
            d = (f = /top|bottom/.test(f)) ? 2 * h.left - d + b : 2 * h.top - c + g;
            c = f ? "offsetWidth" : "offsetHeight";
            k.offset(e);
            this.replaceArrow(d, k[0][c], f)
        };
        l.prototype.replaceArrow = function(a,
                                            f, k) {
            this.arrow().css(k ? "left" : "top", 50 * (1 - a / f) + "%").css(k ? "top" : "left", "")
        };
        l.prototype.setContent = function() {
            var a = this.tip(),
                f = this.getTitle();
            a.find(".tooltip-inner")[this.options.html ? "html" : "text"](f);
            a.removeClass("fade in top bottom left right")
        };
        l.prototype.hide = function(e) {
            function f() {
                "in" != k.hoverState && d.detach();
                k.$element.removeAttr("aria-describedby").trigger("hidden.bs." + k.type);
                e && e()
            }
            var k = this,
                d = a(this.$tip),
                c = a.Event("hide.bs." + this.type);
            return this.$element.trigger(c), c.isDefaultPrevented() ?
                void 0 : (d.removeClass("in"), a.support.transition && d.hasClass("fade") ? d.one("bsTransitionEnd", f).emulateTransitionEnd(l.TRANSITION_DURATION) : f(), this.hoverState = null, this)
        };
        l.prototype.fixTitle = function() {
            var a = this.$element;
            (a.attr("title") || "string" != typeof a.attr("data-original-title")) && a.attr("data-original-title", a.attr("title") || "").attr("title", "")
        };
        l.prototype.hasContent = function() {
            return this.getTitle()
        };
        l.prototype.getPosition = function(e) {
            e = e || this.$element;
            var f = e[0],
                k = "BODY" == f.tagName,
                f = f.getBoundingClientRect();
            null == f.width && (f = a.extend({}, f, {
                width: f.right - f.left,
                height: f.bottom - f.top
            }));
            var d = k ? {
                top: 0,
                left: 0
            } : e.offset();
            e = {
                scroll: k ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop()
            };
            k = k ? {
                width: a(window).width(),
                height: a(window).height()
            } : null;
            return a.extend({}, f, e, k, d)
        };
        l.prototype.getCalculatedOffset = function(a, f, k, d) {
            return "bottom" == a ? {
                top: f.top + f.height,
                left: f.left + f.width / 2 - k / 2
            } : "top" == a ? {
                top: f.top - d,
                left: f.left + f.width / 2 - k / 2
            } : "left" == a ? {
                top: f.top +
                    f.height / 2 - d / 2,
                left: f.left - k
            } : {
                top: f.top + f.height / 2 - d / 2,
                left: f.left + f.width
            }
        };
        l.prototype.getViewportAdjustedDelta = function(a, f, k, d) {
            var c = {
                top: 0,
                left: 0
            };
            if (!this.$viewport) return c;
            var b = this.options.viewport && this.options.viewport.padding || 0,
                g = this.getPosition(this.$viewport);
            /right|left/.test(a) ? (k = f.top - b - g.scroll, f = f.top + b - g.scroll + d, k < g.top ? c.top = g.top - k : f > g.top + g.height && (c.top = g.top + g.height - f)) : (d = f.left - b, f = f.left + b + k, d < g.left ? c.left = g.left - d : f > g.right && (c.left = g.left + g.width - f));
            return c
        };
        l.prototype.getTitle = function() {
            var a = this.$element,
                f = this.options;
            return a.attr("data-original-title") || ("function" == typeof f.title ? f.title.call(a[0]) : f.title)
        };
        l.prototype.getUID = function(a) {
            do a += ~~(1E6 * Math.random()); while (document.getElementById(a));
            return a
        };
        l.prototype.tip = function() {
            if (!this.$tip && (this.$tip = a(this.options.template), 1 != this.$tip.length)) throw Error(this.type + " `template` option must consist of exactly 1 top-level element!");
            return this.$tip
        };
        l.prototype.arrow = function() {
            return this.$arrow =
                this.$arrow || this.tip().find(".tooltip-arrow")
        };
        l.prototype.enable = function() {
            this.enabled = !0
        };
        l.prototype.disable = function() {
            this.enabled = !1
        };
        l.prototype.toggleEnabled = function() {
            this.enabled = !this.enabled
        };
        l.prototype.toggle = function(e) {
            var f = this;
            e && (f = a(e.currentTarget).data("bs." + this.type), f || (f = new this.constructor(e.currentTarget, this.getDelegateOptions()), a(e.currentTarget).data("bs." + this.type, f)));
            e ? (f.inState.click = !f.inState.click, f.isInStateTrue() ? f.enter(f) : f.leave(f)) : f.tip().hasClass("in") ?
                f.leave(f) : f.enter(f)
        };
        l.prototype.destroy = function() {
            var a = this;
            clearTimeout(this.timeout);
            this.hide(function() {
                a.$element.off("." + a.type).removeData("bs." + a.type);
                a.$tip && a.$tip.detach();
                a.$tip = null;
                a.$arrow = null;
                a.$viewport = null
            })
        };
        var h = a.fn.tooltip;
        a.fn.tooltip = function(e) {
            return this.each(function() {
                var f = a(this),
                    k = f.data("bs.tooltip"),
                    d = "object" == typeof e && e;
                !k && /destroy|hide/.test(e) || (k || f.data("bs.tooltip", k = new l(this, d)), "string" != typeof e || k[e]())
            })
        };
        a.fn.tooltip.Constructor = l;
        a.fn.tooltip.noConflict =
            function() {
                return a.fn.tooltip = h, this
            }
    }(jQuery); +
    function(a) {
        var l = function(a, f) {
            this.init("popover", a, f)
        };
        if (!a.fn.tooltip) throw Error("Popover requires tooltip.js");
        l.VERSION = "3.3.6";
        l.DEFAULTS = a.extend({}, a.fn.tooltip.Constructor.DEFAULTS, {
            placement: "right",
            trigger: "click",
            content: "",
            template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
        });
        l.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype);
        l.prototype.constructor = l;
        l.prototype.getDefaults = function() {
            return l.DEFAULTS
        };
        l.prototype.setContent = function() {
            var a = this.tip(),
                f = this.getTitle(),
                k = this.getContent();
            a.find(".popover-title")[this.options.html ? "html" : "text"](f);
            a.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof k ? "html" : "append" : "text"](k);
            a.removeClass("fade top bottom left right in");
            a.find(".popover-title").html() || a.find(".popover-title").hide()
        };
        l.prototype.hasContent = function() {
            return this.getTitle() || this.getContent()
        };
        l.prototype.getContent = function() {
            var a = this.$element,
                f = this.options;
            return a.attr("data-content") || ("function" == typeof f.content ? f.content.call(a[0]) : f.content)
        };
        l.prototype.arrow = function() {
            return this.$arrow = this.$arrow || this.tip().find(".arrow")
        };
        var h = a.fn.popover;
        a.fn.popover = function(e) {
            return this.each(function() {
                var f = a(this),
                    k = f.data("bs.popover"),
                    d = "object" == typeof e && e;
                !k && /destroy|hide/.test(e) || (k || f.data("bs.popover", k = new l(this, d)), "string" != typeof e || k[e]())
            })
        };
        a.fn.popover.Constructor = l;
        a.fn.popover.noConflict = function() {
            return a.fn.popover =
                h, this
        }
    }(jQuery); +
    function(a) {
        function l(f) {
            return this.each(function() {
                var d = a(this),
                    c = d.data("bs.tab");
                c || d.data("bs.tab", c = new h(this));
                "string" == typeof f && c[f]()
            })
        }
        var h = function(f) {
            this.element = a(f)
        };
        h.VERSION = "3.3.6";
        h.TRANSITION_DURATION = 150;
        h.prototype.show = function() {
            var f = this.element,
                d = f.closest("ul:not(.dropdown-menu)"),
                c = f.data("target");
            if (c || (c = f.attr("href"), c = c && c.replace(/.*(?=#[^\s]*$)/, "")), !f.parent("li").hasClass("active")) {
                var b = d.find(".active:last a"),
                    g = a.Event("hide.bs.tab", {
                        relatedTarget: f[0]
                    }),
                    e = a.Event("show.bs.tab", {
                        relatedTarget: b[0]
                    });
                (b.trigger(g), f.trigger(e), e.isDefaultPrevented() || g.isDefaultPrevented()) || (c = a(c), this.activate(f.closest("li"), d), this.activate(c, c.parent(), function() {
                    b.trigger({
                        type: "hidden.bs.tab",
                        relatedTarget: f[0]
                    });
                    f.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: b[0]
                    })
                }))
            }
        };
        h.prototype.activate = function(f, d, c) {
            function b() {
                g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1);
                f.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0);
                e ? (f[0].offsetWidth, f.addClass("in")) : f.removeClass("fade");
                f.parent(".dropdown-menu").length && f.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0);
                c && c()
            }
            var g = d.find("> .active"),
                e = c && a.support.transition && (g.length && g.hasClass("fade") || !!d.find("> .fade").length);
            g.length && e ? g.one("bsTransitionEnd", b).emulateTransitionEnd(h.TRANSITION_DURATION) : b();
            g.removeClass("in")
        };
        var e =
            a.fn.tab;
        a.fn.tab = l;
        a.fn.tab.Constructor = h;
        a.fn.tab.noConflict = function() {
            return a.fn.tab = e, this
        };
        var f = function(f) {
            f.preventDefault();
            l.call(a(this), "show")
        };
        a(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', f).on("click.bs.tab.data-api", '[data-toggle="pill"]', f)
    }(jQuery); +
    function(a) {
        function l(f) {
            return this.each(function() {
                var e = a(this),
                    d = e.data("bs.affix"),
                    c = "object" == typeof f && f;
                d || e.data("bs.affix", d = new h(this, c));
                "string" == typeof f && d[f]()
            })
        }
        var h = function(f, e) {
            this.options = a.extend({}, h.DEFAULTS, e);
            this.$target = a(this.options.target).on("scroll.bs.affix.data-api", a.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", a.proxy(this.checkPositionWithEventLoop, this));
            this.$element = a(f);
            this.pinnedOffset = this.unpin = this.affixed = null;
            this.checkPosition()
        };
        h.VERSION = "3.3.6";
        h.RESET = "affix affix-top affix-bottom";
        h.DEFAULTS = {
            offset: 0,
            target: window
        };
        h.prototype.getState = function(a, e, d, c) {
            var b = this.$target.scrollTop(),
                g = this.$element.offset(),
                h = this.$target.height();
            if (null != d && "top" == this.affixed) return d > b ? "top" : !1;
            if ("bottom" == this.affixed) return null != d ? b + this.unpin <= g.top ? !1 : "bottom" : a - c >= b + h ? !1 : "bottom";
            var l = null == this.affixed,
                g = l ? b : g.top;
            return null != d && d >= b ? "top" : null != c && g + (l ? h : e) >= a - c ? "bottom" : !1
        };
        h.prototype.getPinnedOffset = function() {
            if (this.pinnedOffset) return this.pinnedOffset;
            this.$element.removeClass(h.RESET).addClass("affix");
            var a = this.$target.scrollTop();
            return this.pinnedOffset = this.$element.offset().top - a
        };
        h.prototype.checkPositionWithEventLoop = function() {
            setTimeout(a.proxy(this.checkPosition, this), 1)
        };
        h.prototype.checkPosition = function() {
            if (this.$element.is(":visible")) {
                var f = this.$element.height(),
                    e = this.options.offset,
                    d = e.top,
                    c = e.bottom,
                    b = Math.max(a(document).height(), a(document.body).height());
                "object" != typeof e && (c = d = e);
                "function" == typeof d && (d = e.top(this.$element));
                "function" == typeof c && (c = e.bottom(this.$element));
                e = this.getState(b, f, d, c);
                if (this.affixed != e) {
                    null != this.unpin && this.$element.css("top", "");
                    var d = "affix" + (e ? "-" + e : ""),
                        g = a.Event(d + ".bs.affix");
                    if (this.$element.trigger(g), g.isDefaultPrevented()) return;
                    this.affixed = e;
                    this.unpin = "bottom" == e ? this.getPinnedOffset() : null;
                    this.$element.removeClass(h.RESET).addClass(d).trigger(d.replace("affix", "affixed") + ".bs.affix")
                }
                "bottom" == e && this.$element.offset({
                    top: b - f - c
                })
            }
        };
        var e = a.fn.affix;
        a.fn.affix = l;
        a.fn.affix.Constructor =
            h;
        a.fn.affix.noConflict = function() {
            return a.fn.affix = e, this
        };
        a(window).on("load", function() {
            a('[data-spy="affix"]').each(function() {
                var f = a(this),
                    e = f.data();
                e.offset = e.offset || {};
                null != e.offsetBottom && (e.offset.bottom = e.offsetBottom);
                null != e.offsetTop && (e.offset.top = e.offsetTop);
                l.call(f, e)
            })
        })
    }(jQuery); +
    function(a) {
        function l(f) {
            var d;
            f = f.attr("data-target") || (d = f.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, "");
            return a(f)
        }

        function h(f) {
            return this.each(function() {
                var d = a(this),
                    c = d.data("bs.collapse"),
                    b = a.extend({}, e.DEFAULTS, d.data(), "object" == typeof f && f);
                !c && b.toggle && /show|hide/.test(f) && (b.toggle = !1);
                c || d.data("bs.collapse", c = new e(this, b));
                "string" == typeof f && c[f]()
            })
        }
        var e = function(f, d) {
            this.$element = a(f);
            this.options = a.extend({}, e.DEFAULTS, d);
            this.$trigger = a('[data-toggle="collapse"][href="#' +
                f.id + '"],[data-toggle="collapse"][data-target="#' + f.id + '"]');
            this.transitioning = null;
            this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger);
            this.options.toggle && this.toggle()
        };
        e.VERSION = "3.3.6";
        e.TRANSITION_DURATION = 350;
        e.DEFAULTS = {
            toggle: !0
        };
        e.prototype.dimension = function() {
            return this.$element.hasClass("width") ? "width" : "height"
        };
        e.prototype.show = function() {
            if (!this.transitioning && !this.$element.hasClass("in")) {
                var f, d = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
                if (!(d && d.length && (f = d.data("bs.collapse"), f && f.transitioning))) {
                    var c = a.Event("show.bs.collapse");
                    if (this.$element.trigger(c), !c.isDefaultPrevented()) {
                        d && d.length && (h.call(d, "hide"), f || d.data("bs.collapse", null));
                        var b = this.dimension();
                        this.$element.removeClass("collapse").addClass("collapsing")[b](0).attr("aria-expanded", !0);
                        this.$trigger.removeClass("collapsed").attr("aria-expanded", !0);
                        this.transitioning = 1;
                        f = function() {
                            this.$element.removeClass("collapsing").addClass("collapse in")[b]("");
                            this.transitioning =
                                0;
                            this.$element.trigger("shown.bs.collapse")
                        };
                        if (!a.support.transition) return f.call(this);
                        d = a.camelCase(["scroll", b].join("-"));
                        this.$element.one("bsTransitionEnd", a.proxy(f, this)).emulateTransitionEnd(e.TRANSITION_DURATION)[b](this.$element[0][d])
                    }
                }
            }
        };
        e.prototype.hide = function() {
            if (!this.transitioning && this.$element.hasClass("in")) {
                var f = a.Event("hide.bs.collapse");
                if (this.$element.trigger(f), !f.isDefaultPrevented()) {
                    f = this.dimension();
                    this.$element[f](this.$element[f]())[0].offsetHeight;
                    this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1);
                    this.$trigger.addClass("collapsed").attr("aria-expanded", !1);
                    this.transitioning = 1;
                    var d = function() {
                        this.transitioning = 0;
                        this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                    };
                    return a.support.transition ? void this.$element[f](0).one("bsTransitionEnd", a.proxy(d, this)).emulateTransitionEnd(e.TRANSITION_DURATION) : d.call(this)
                }
            }
        };
        e.prototype.toggle = function() {
            this[this.$element.hasClass("in") ? "hide" : "show"]()
        };
        e.prototype.getParent = function() {
            return a(this.options.parent).find('[data-toggle="collapse"][data-parent="' +
                this.options.parent + '"]').each(a.proxy(function(f, d) {
                f = a(d);
                this.addAriaAndCollapsedClass(l(f), f)
            }, this)).end()
        };
        e.prototype.addAriaAndCollapsedClass = function(a, d) {
            var c = a.hasClass("in");
            a.attr("aria-expanded", c);
            d.toggleClass("collapsed", !c).attr("aria-expanded", c)
        };
        var f = a.fn.collapse;
        a.fn.collapse = h;
        a.fn.collapse.Constructor = e;
        a.fn.collapse.noConflict = function() {
            return a.fn.collapse = f, this
        };
        a(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(f) {
            var d = a(this);
            d.attr("data-target") ||
            f.preventDefault();
            f = l(d);
            d = f.data("bs.collapse") ? "toggle" : d.data();
            h.call(f, d)
        })
    }(jQuery); +
    function(a) {
        function l(f, e) {
            this.$body = a(document.body);
            this.$scrollElement = a(a(f).is(document.body) ? window : f);
            this.options = a.extend({}, l.DEFAULTS, e);
            this.selector = (this.options.target || "") + " .nav li > a";
            this.offsets = [];
            this.targets = [];
            this.activeTarget = null;
            this.scrollHeight = 0;
            this.$scrollElement.on("scroll.bs.scrollspy", a.proxy(this.process, this));
            this.refresh();
            this.process()
        }

        function h(f) {
            return this.each(function() {
                var e = a(this),
                    d = e.data("bs.scrollspy"),
                    c = "object" == typeof f && f;
                d || e.data("bs.scrollspy",
                    d = new l(this, c));
                "string" == typeof f && d[f]()
            })
        }
        l.VERSION = "3.3.6";
        l.DEFAULTS = {
            offset: 10
        };
        l.prototype.getScrollHeight = function() {
            return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
        };
        l.prototype.refresh = function() {
            var f = this,
                e = "offset",
                d = 0;
            this.offsets = [];
            this.targets = [];
            this.scrollHeight = this.getScrollHeight();
            a.isWindow(this.$scrollElement[0]) || (e = "position", d = this.$scrollElement.scrollTop());
            this.$body.find(this.selector).map(function() {
                var c =
                        a(this),
                    c = c.data("target") || c.attr("href"),
                    b = /^#./.test(c) && a(c);
                return b && b.length && b.is(":visible") && [
                    [b[e]().top + d, c]
                ] || null
            }).sort(function(a, b) {
                return a[0] - b[0]
            }).each(function() {
                f.offsets.push(this[0]);
                f.targets.push(this[1])
            })
        };
        l.prototype.process = function() {
            var a, e = this.$scrollElement.scrollTop() + this.options.offset,
                d = this.getScrollHeight(),
                c = this.options.offset + d - this.$scrollElement.height(),
                b = this.offsets,
                g = this.targets,
                h = this.activeTarget;
            if (this.scrollHeight != d && this.refresh(), e >= c) return h !=
                (a = g[g.length - 1]) && this.activate(a);
            if (h && e < b[0]) return this.activeTarget = null, this.clear();
            for (a = b.length; a--;) h != g[a] && e >= b[a] && (void 0 === b[a + 1] || e < b[a + 1]) && this.activate(g[a])
        };
        l.prototype.activate = function(f) {
            this.activeTarget = f;
            this.clear();
            f = a(this.selector + '[data-target="' + f + '"],' + this.selector + '[href="' + f + '"]').parents("li").addClass("active");
            f.parent(".dropdown-menu").length && (f = f.closest("li.dropdown").addClass("active"));
            f.trigger("activate.bs.scrollspy")
        };
        l.prototype.clear = function() {
            a(this.selector).parentsUntil(this.options.target,
                ".active").removeClass("active")
        };
        var e = a.fn.scrollspy;
        a.fn.scrollspy = h;
        a.fn.scrollspy.Constructor = l;
        a.fn.scrollspy.noConflict = function() {
            return a.fn.scrollspy = e, this
        };
        a(window).on("load.bs.scrollspy.data-api", function() {
            a('[data-spy="scroll"]').each(function() {
                var f = a(this);
                h.call(f, f.data())
            })
        })
    }(jQuery); +
    function(a) {
        function l() {
            var a = document.createElement("bootstrap"),
                e = {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "oTransitionEnd otransitionend",
                    transition: "transitionend"
                },
                f;
            for (f in e)
                if (void 0 !== a.style[f]) return {
                    end: e[f]
                };
            return !1
        }
        a.fn.emulateTransitionEnd = function(h) {
            var e = !1,
                f = this;
            a(this).one("bsTransitionEnd", function() {
                e = !0
            });
            return setTimeout(function() {
                e || a(f).trigger(a.support.transition.end)
            }, h), this
        };
        a(function() {
            a.support.transition = l();
            a.support.transition &&
            (a.event.special.bsTransitionEnd = {
                bindType: a.support.transition.end,
                delegateType: a.support.transition.end,
                handle: function(h) {
                    return a(h.target).is(this) ? h.handleObj.handler.apply(this, arguments) : void 0
                }
            })
        })
    }(jQuery);
! function(a) {
    var l = null,
        h = function(a) {
            var b = arguments,
                c = !0,
                d = 1;
            return a = a.replace(/%s/g, function() {
                var a = b[d++];
                return "undefined" == typeof a ? (c = !1, "") : a
            }), c ? a : ""
        },
        e = function(b, c, d, f) {
            var g = "";
            return a.each(b, function(a, b) {
                return b[c] === f ? (g = b[d], !1) : !0
            }), g
        },
        f = function(b, c) {
            var d = -1;
            return a.each(b, function(a, b) {
                return b.field === c ? (d = a, !1) : !0
            }), d
        },
        k = function(b) {
            var c, d, f, g = 0,
                e = [];
            for (c = 0; c < b[0].length; c++) g += b[0][c].colspan || 1;
            for (c = 0; c < b.length; c++)
                for (e[c] = [], d = 0; g > d; d++) e[c][d] = !1;
            for (c = 0; c < b.length; c++)
                for (d =
                         0; d < b[c].length; d++) {
                    f = b[c][d];
                    var g = f.rowspan || 1,
                        k = f.colspan || 1,
                        h = a.inArray(!1, e[c]);
                    1 === k && (f.fieldIndex = h, "undefined" == typeof f.field && (f.field = h));
                    for (f = 0; g > f; f++) e[c + f][h] = !0;
                    for (f = 0; k > f; f++) e[c][h + f] = !0
                }
        },
        d = function() {
            if (null === l) {
                var b, c;
                c = a("<p/>").addClass("fixed-table-scroll-inner");
                var d = a("<div/>").addClass("fixed-table-scroll-outer");
                d.append(c);
                a("body").append(d);
                b = c[0].offsetWidth;
                d.css("overflow", "scroll");
                c = c[0].offsetWidth;
                b === c && (c = d[0].clientWidth);
                d.remove();
                l = b - c
            }
            return l
        },
        c = function(b, c, d, f) {
            var g = c;
            if ("string" == typeof c) {
                var e = c.split(".");
                1 < e.length ? (g = window, a.each(e, function(a, b) {
                    g = g[b]
                })) : g = window[c]
            }
            return "object" == typeof g ? g : "function" == typeof g ? g.apply(b, d || []) : !g && "string" == typeof c && h.apply(this, [c].concat(d)) ? h.apply(this, [c].concat(d)) : f
        },
        b = function(b, c, d) {
            var f = Object.getOwnPropertyNames(b),
                g = Object.getOwnPropertyNames(c),
                e = "";
            if (d && f.length !== g.length) return !1;
            for (d = 0; d < f.length; d++)
                if (e = f[d], -1 < a.inArray(e, g) && b[e] !== c[e]) return !1;
            return !0
        },
        g = function(a) {
            return "string" ==
            typeof a ? a.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;").replace(/`/g, "&#x60;") : a
        },
        r = function(a) {
            for (var b in a) {
                var c = b.split(/(?=[A-Z])/).join("-").toLowerCase();
                c !== b && (a[c] = a[b], delete a[b])
            }
            return a
        },
        t = function(a, b, c) {
            var d = a;
            if ("string" != typeof b || a.hasOwnProperty(b)) return c ? g(a[b]) : a[b];
            a = b.split(".");
            for (var f in a) a.hasOwnProperty(f) && (d = d && d[a[f]]);
            return c ? g(d) : d
        },
        q = function() {
            return !!(0 < navigator.userAgent.indexOf("MSIE ") ||
                navigator.userAgent.match(/Trident.*rv\:11\./))
        },
        p = function(b, c) {
            this.options = c;
            this.$el = a(b);
            this.$el_ = this.$el.clone();
            this.timeoutFooter_ = this.timeoutId_ = 0;
            this.init()
        };
    p.DEFAULTS = {
        classes: "table table-hover",
        sortClass: void 0,
        locale: void 0,
        height: void 0,
        undefinedText: "-",
        sortName: void 0,
        sortOrder: "asc",
        sortStable: !1,
        striped: !1,
        columns: [
            []
        ],
        data: [],
        totalField: "total",
        dataField: "rows",
        method: "get",
        url: void 0,
        ajax: void 0,
        cache: !0,
        contentType: "application/json",
        dataType: "json",
        ajaxOptions: {},
        queryParams: function(a) {
            return a
        },
        queryParamsType: "limit",
        responseHandler: function(a) {
            return a
        },
        pagination: !1,
        onlyInfoPagination: !1,
        paginationLoop: !0,
        sidePagination: "client",
        totalRows: 0,
        pageNumber: 1,
        pageSize: 10,
        pageList: [10, 25, 50, 100],
        paginationHAlign: "right",
        paginationVAlign: "bottom",
        paginationDetailHAlign: "left",
        paginationPreText: "&lsaquo;",
        paginationNextText: "&rsaquo;",
        search: !1,
        searchOnEnterKey: !1,
        strictSearch: !1,
        searchAlign: "right",
        selectItemName: "btSelectItem",
        showHeader: !0,
        showFooter: !1,
        showColumns: !1,
        showPaginationSwitch: !1,
        showRefresh: !1,
        showToggle: !1,
        buttonsAlign: "right",
        smartDisplay: !0,
        escape: !1,
        minimumCountColumns: 1,
        idField: void 0,
        uniqueId: void 0,
        cardView: !1,
        detailView: !1,
        detailFormatter: function(a, b) {
            return ""
        },
        trimOnSearch: !0,
        clickToSelect: !1,
        singleSelect: !1,
        toolbar: void 0,
        toolbarAlign: "left",
        checkboxHeader: !0,
        sortable: !0,
        silentSort: !0,
        maintainSelected: !1,
        searchTimeOut: 500,
        searchText: "",
        iconSize: void 0,
        buttonsClass: "default",
        iconsPrefix: "glyphicon",
        icons: {
            paginationSwitchDown: "glyphicon-collapse-down icon-chevron-down",
            paginationSwitchUp: "glyphicon-collapse-up icon-chevron-up",
            refresh: "glyphicon-refresh icon-refresh",
            toggle: "glyphicon-list-alt icon-list-alt",
            columns: "glyphicon-th icon-th",
            detailOpen: "glyphicon-plus icon-plus",
            detailClose: "glyphicon-minus icon-minus"
        },
        customSearch: a.noop,
        customSort: a.noop,
        rowStyle: function(a, b) {
            return {}
        },
        rowAttributes: function(a, b) {
            return {}
        },
        footerStyle: function(a, b) {
            return {}
        },
        onAll: function(a, b) {
            return !1
        },
        onClickCell: function(a, b, c, d) {
            return !1
        },
        onDblClickCell: function(a, b, c, d) {
            return !1
        },
        onClickRow: function(a, b) {
            return !1
        },
        onDblClickRow: function(a, b) {
            return !1
        },
        onSort: function(a, b) {
            return !1
        },
        onCheck: function(a) {
            return !1
        },
        onUncheck: function(a) {
            return !1
        },
        onCheckAll: function(a) {
            return !1
        },
        onUncheckAll: function(a) {
            return !1
        },
        onCheckSome: function(a) {
            return !1
        },
        onUncheckSome: function(a) {
            return !1
        },
        onLoadSuccess: function(a) {
            return !1
        },
        onLoadError: function(a) {
            return !1
        },
        onColumnSwitch: function(a, b) {
            return !1
        },
        onPageChange: function(a, b) {
            return !1
        },
        onSearch: function(a) {
            return !1
        },
        onToggle: function(a) {
            return !1
        },
        onPreBody: function(a) {
            return !1
        },
        onPostBody: function() {
            return !1
        },
        onPostHeader: function() {
            return !1
        },
        onExpandRow: function(a, b, c) {
            return !1
        },
        onCollapseRow: function(a, b) {
            return !1
        },
        onRefreshOptions: function(a) {
            return !1
        },
        onRefresh: function(a) {
            return !1
        },
        onResetView: function() {
            return !1
        }
    };
    p.LOCALES = {};
    p.LOCALES["en-US"] = p.LOCALES.en = {
        formatLoadingMessage: function() {
            return "Loading, please wait..."
        },
        formatRecordsPerPage: function(a) {
            return h("%s rows per page", a)
        },
        formatShowingRows: function(a, b, c) {
            return h("Showing %s to %s of %s rows",
                a, b, c)
        },
        formatDetailPagination: function(a) {
            return h("Showing %s rows", a)
        },
        formatSearch: function() {
            return "Search"
        },
        formatNoMatches: function() {
            return "No matching records found"
        },
        formatPaginationSwitch: function() {
            return "Hide/Show pagination"
        },
        formatRefresh: function() {
            return "Refresh"
        },
        formatToggle: function() {
            return "Toggle"
        },
        formatColumns: function() {
            return "Columns"
        },
        formatAllRows: function() {
            return "All"
        }
    };
    a.extend(p.DEFAULTS, p.LOCALES["en-US"]);
    p.COLUMN_DEFAULTS = {
        radio: !1,
        checkbox: !1,
        checkboxEnabled: !0,
        field: void 0,
        title: void 0,
        titleTooltip: void 0,
        "class": void 0,
        align: void 0,
        halign: void 0,
        falign: void 0,
        valign: void 0,
        width: void 0,
        sortable: !1,
        order: "asc",
        visible: !0,
        switchable: !0,
        clickToSelect: !0,
        formatter: void 0,
        footerFormatter: void 0,
        events: void 0,
        sorter: void 0,
        sortName: void 0,
        cellStyle: void 0,
        searchable: !0,
        searchFormatter: !0,
        cardVisible: !0,
        escape: !1
    };
    p.EVENTS = {
        "all.bs.table": "onAll",
        "click-cell.bs.table": "onClickCell",
        "dbl-click-cell.bs.table": "onDblClickCell",
        "click-row.bs.table": "onClickRow",
        "dbl-click-row.bs.table": "onDblClickRow",
        "sort.bs.table": "onSort",
        "check.bs.table": "onCheck",
        "uncheck.bs.table": "onUncheck",
        "check-all.bs.table": "onCheckAll",
        "uncheck-all.bs.table": "onUncheckAll",
        "check-some.bs.table": "onCheckSome",
        "uncheck-some.bs.table": "onUncheckSome",
        "load-success.bs.table": "onLoadSuccess",
        "load-error.bs.table": "onLoadError",
        "column-switch.bs.table": "onColumnSwitch",
        "page-change.bs.table": "onPageChange",
        "search.bs.table": "onSearch",
        "toggle.bs.table": "onToggle",
        "pre-body.bs.table": "onPreBody",
        "post-body.bs.table": "onPostBody",
        "post-header.bs.table": "onPostHeader",
        "expand-row.bs.table": "onExpandRow",
        "collapse-row.bs.table": "onCollapseRow",
        "refresh-options.bs.table": "onRefreshOptions",
        "reset-view.bs.table": "onResetView",
        "refresh.bs.table": "onRefresh"
    };
    p.prototype.init = function() {
        this.initLocale();
        this.initContainer();
        this.initTable();
        this.initHeader();
        this.initData();
        this.initHiddenRows();
        this.initFooter();
        this.initToolbar();
        this.initPagination();
        this.initBody();
        this.initSearchText();
        this.initServer()
    };
    p.prototype.initLocale = function() {
        if (this.options.locale) {
            var b = this.options.locale.split(/-|_/);
            b[0].toLowerCase();
            b[1] && b[1].toUpperCase();
            a.fn.bootstrapTable.locales[this.options.locale] ? a.extend(this.options, a.fn.bootstrapTable.locales[this.options.locale]) : a.fn.bootstrapTable.locales[b.join("-")] ? a.extend(this.options, a.fn.bootstrapTable.locales[b.join("-")]) : a.fn.bootstrapTable.locales[b[0]] && a.extend(this.options, a.fn.bootstrapTable.locales[b[0]])
        }
    };
    p.prototype.initContainer = function() {
        this.$container =
            a(['<div class="bootstrap-table"><div class="fixed-table-toolbar"></div>', "top" === this.options.paginationVAlign || "both" === this.options.paginationVAlign ? '<div class="fixed-table-pagination" style="clear: both;"></div>' : "", '<div class="fixed-table-container"><div class="fixed-table-header"><table></table></div><div class="fixed-table-body"><div class="fixed-table-loading">', this.options.formatLoadingMessage(), '</div></div><div class="fixed-table-footer"><table><tr></tr></table></div>', "bottom" === this.options.paginationVAlign ||
            "both" === this.options.paginationVAlign ? '<div class="fixed-table-pagination"></div>' : "", "</div></div>"
            ].join(""));
        this.$container.insertAfter(this.$el);
        this.$tableContainer = this.$container.find(".fixed-table-container");
        this.$tableHeader = this.$container.find(".fixed-table-header");
        this.$tableBody = this.$container.find(".fixed-table-body");
        this.$tableLoading = this.$container.find(".fixed-table-loading");
        this.$tableFooter = this.$container.find(".fixed-table-footer");
        this.$toolbar = this.$container.find(".fixed-table-toolbar");
        this.$pagination = this.$container.find(".fixed-table-pagination");
        this.$tableBody.append(this.$el);
        this.$container.after('<div class="clearfix"></div>');
        this.$el.addClass(this.options.classes);
        this.options.striped && this.$el.addClass("table-striped"); - 1 !== a.inArray("table-no-bordered", this.options.classes.split(" ")) && this.$tableContainer.addClass("table-no-bordered")
    };
    p.prototype.initTable = function() {
        var b = this,
            c = [],
            d = [];
        if (this.$header = this.$el.find(">thead"), this.$header.length || (this.$header = a("<thead></thead>").appendTo(this.$el)),
            this.$header.find("tr").each(function() {
                var b = [];
                a(this).find("th").each(function() {
                    "undefined" != typeof a(this).data("field") && a(this).data("field", a(this).data("field") + "");
                    b.push(a.extend({}, {
                        title: a(this).html(),
                        "class": a(this).attr("class"),
                        titleTooltip: a(this).attr("title"),
                        rowspan: a(this).attr("rowspan") ? +a(this).attr("rowspan") : void 0,
                        colspan: a(this).attr("colspan") ? +a(this).attr("colspan") : void 0
                    }, a(this).data()))
                });
                c.push(b)
            }), a.isArray(this.options.columns[0]) || (this.options.columns = [this.options.columns]),
            this.options.columns = a.extend(!0, [], c, this.options.columns), this.columns = [], k(this.options.columns), a.each(this.options.columns, function(c, d) {
            a.each(d, function(d, f) {
                f = a.extend({}, p.COLUMN_DEFAULTS, f);
                "undefined" != typeof f.fieldIndex && (b.columns[f.fieldIndex] = f);
                b.options.columns[c][d] = f
            })
        }), !this.options.data.length) {
            var f = [];
            this.$el.find(">tbody>tr").each(function(c) {
                var g = {};
                g._id = a(this).attr("id");
                g._class = a(this).attr("class");
                g._data = r(a(this).data());
                a(this).find(">td").each(function(d) {
                    var e,
                        k;
                    e = a(this);
                    for (var h = +e.attr("colspan") || 1, l = +e.attr("rowspan") || 1; f[c] && f[c][d]; d++);
                    for (e = d; d + h > e; e++)
                        for (k = c; c + l > k; k++) f[k] || (f[k] = []), f[k][e] = !0;
                    d = b.columns[d].field;
                    g[d] = a(this).html();
                    g["_" + d + "_id"] = a(this).attr("id");
                    g["_" + d + "_class"] = a(this).attr("class");
                    g["_" + d + "_rowspan"] = a(this).attr("rowspan");
                    g["_" + d + "_colspan"] = a(this).attr("colspan");
                    g["_" + d + "_title"] = a(this).attr("title");
                    g["_" + d + "_data"] = r(a(this).data())
                });
                d.push(g)
            });
            this.options.data = d;
            d.length && (this.fromHtml = !0)
        }
    };
    p.prototype.initHeader =
        function() {
            var b = this,
                c = {},
                d = [];
            this.header = {
                fields: [],
                styles: [],
                classes: [],
                formatters: [],
                events: [],
                sorters: [],
                sortNames: [],
                cellStyles: [],
                searchables: []
            };
            a.each(this.options.columns, function(f, e) {
                d.push("<tr>");
                0 === f && !b.options.cardView && b.options.detailView && d.push(h('<th class="detail" rowspan="%s"><div class="fht-cell"></div></th>', b.options.columns.length));
                a.each(e, function(a, f) {
                    var e, k = "",
                        l = h(' class="%s"', f["class"]),
                        r = (b.options.sortOrder || f.order, "px"),
                        q = f.width;
                    if (void 0 === f.width || b.options.cardView ||
                    "string" == typeof f.width && -1 !== f.width.indexOf("%") && (r = "%"), f.width && "string" == typeof f.width && (q = f.width.replace("%", "").replace("px", "")), a = h("text-align: %s; ", f.halign ? f.halign : f.align), e = h("text-align: %s; ", f.align), k = h("vertical-align: %s; ", f.valign), k += h("width: %s; ", !f.checkbox && !f.radio || q ? q ? q + r : void 0 : "36px"), "undefined" != typeof f.fieldIndex) {
                        if ((b.header.fields[f.fieldIndex] = f.field, b.header.styles[f.fieldIndex] = e + k, b.header.classes[f.fieldIndex] = l, b.header.formatters[f.fieldIndex] =
                            f.formatter, b.header.events[f.fieldIndex] = f.events, b.header.sorters[f.fieldIndex] = f.sorter, b.header.sortNames[f.fieldIndex] = f.sortName, b.header.cellStyles[f.fieldIndex] = f.cellStyle, b.header.searchables[f.fieldIndex] = f.searchable, !f.visible) || b.options.cardView && !f.cardVisible) return;
                        c[f.field] = f
                    }
                    d.push("<th" + h(' title="%s"', f.titleTooltip), f.checkbox || f.radio ? h(' class="bs-checkbox %s"', f["class"] || "") : l, h(' style="%s"', a + k), h(' rowspan="%s"', f.rowspan), h(' colspan="%s"', f.colspan), h(' data-field="%s"',
                        f.field), ">");
                    d.push(h('<div class="th-inner %s">', b.options.sortable && f.sortable ? "sortable both" : ""));
                    a = b.options.escape ? g(f.title) : f.title;
                    f.checkbox && (!b.options.singleSelect && b.options.checkboxHeader && (a = '<input name="btSelectAll" type="checkbox" />'), b.header.stateField = f.field);
                    f.radio && (a = "", b.header.stateField = f.field, b.options.singleSelect = !0);
                    d.push(a);
                    d.push("</div>");
                    d.push('<div class="fht-cell"></div>');
                    d.push("</div>");
                    d.push("</th>")
                });
                d.push("</tr>")
            });
            this.$header.html(d.join(""));
            this.$header.find("th[data-field]").each(function(b) {
                a(this).data(c[a(this).data("field")])
            });
            this.$container.off("click", ".th-inner").on("click", ".th-inner", function(c) {
                var d = a(this);
                return b.options.detailView && d.closest(".bootstrap-table")[0] !== b.$container[0] ? !1 : void(b.options.sortable && d.parent().data().sortable && b.onSort(c))
            });
            this.$header.children().children().off("keypress").on("keypress", function(c) {
                b.options.sortable && a(this).data().sortable && 13 == (c.keyCode || c.which) && b.onSort(c)
            });
            a(window).off("resize.bootstrap-table");
            !this.options.showHeader || this.options.cardView ? (this.$header.hide(), this.$tableHeader.hide(), this.$tableLoading.css("top", 0)) : (this.$header.show(), this.$tableHeader.show(), this.$tableLoading.css("top", this.$header.outerHeight() + 1), this.getCaret(), a(window).on("resize.bootstrap-table", a.proxy(this.resetWidth, this)));
            this.$selectAll = this.$header.find('[name="btSelectAll"]');
            this.$selectAll.off("click").on("click", function() {
                var c = a(this).prop("checked");
                b[c ? "checkAll" : "uncheckAll"]();
                b.updateSelected()
            })
        };
    p.prototype.initFooter = function() {
        !this.options.showFooter || this.options.cardView ? this.$tableFooter.hide() : this.$tableFooter.show()
    };
    p.prototype.initData = function(a, b) {
        "append" === b ? this.data = this.data.concat(a) : "prepend" === b ? this.data = [].concat(a).concat(this.data) : this.data = a || this.options.data;
        "append" === b ? this.options.data = this.options.data.concat(a) : "prepend" === b ? this.options.data = [].concat(a).concat(this.options.data) : this.options.data = this.data;
        "server" !== this.options.sidePagination && this.initSort()
    };
    p.prototype.initSort = function() {
        var b = this,
            d = this.options.sortName,
            f = "desc" === this.options.sortOrder ? -1 : 1,
            g = a.inArray(this.options.sortName, this.header.fields),
            e = 0;
        return this.options.customSort !== a.noop ? void this.options.customSort.apply(this, [this.options.sortName, this.options.sortOrder]) : void(-1 !== g && (this.options.sortStable && a.each(this.data, function(a, b) {
            b.hasOwnProperty("_position") || (b._position = a)
        }), this.data.sort(function(e, k) {
            b.header.sortNames[g] && (d = b.header.sortNames[g]);
            var h = t(e, d,
                b.options.escape),
                l = t(k, d, b.options.escape),
                r = c(b.header, b.header.sorters[g], [h, l]);
            return void 0 !== r ? f * r : ((void 0 === h || null === h) && (h = ""), (void 0 === l || null === l) && (l = ""), b.options.sortStable && h === l && (h = e._position, l = k._position), a.isNumeric(h) && a.isNumeric(l) ? (h = parseFloat(h), l = parseFloat(l), l > h ? -1 * f : f) : h === l ? 0 : ("string" != typeof h && (h = h.toString()), -1 === h.localeCompare(l) ? -1 * f : f))
        }), void 0 !== this.options.sortClass && (clearTimeout(e), e = setTimeout(function() {
            b.$el.removeClass(b.options.sortClass);
            var a =
                b.$header.find(h('[data-field="%s"]', b.options.sortName).index() + 1);
            b.$el.find(h("tr td:nth-child(%s)", a)).addClass(b.options.sortClass)
        }, 250))))
    };
    p.prototype.onSort = function(b) {
        b = "keypress" === b.type ? a(b.currentTarget) : a(b.currentTarget).parent();
        var c = this.$header.find("th").eq(b.index());
        return this.$header.add(this.$header_).find("span.order").remove(), this.options.sortName === b.data("field") ? this.options.sortOrder = "asc" === this.options.sortOrder ? "desc" : "asc" : (this.options.sortName = b.data("field"),
            this.options.sortOrder = "asc" === b.data("order") ? "desc" : "asc"), this.trigger("sort", this.options.sortName, this.options.sortOrder), b.add(c).data("order", this.options.sortOrder), this.getCaret(), "server" === this.options.sidePagination ? void this.initServer(this.options.silentSort) : (this.initSort(), void this.initBody())
    };
    p.prototype.initToolbar = function() {
        var b, d, f = this,
            g = [],
            e = 0,
            k = 0;
        this.$toolbar.find(".bs-bars").children().length && a("body").append(a(this.options.toolbar));
        this.$toolbar.html("");
        "string" !=
        typeof this.options.toolbar && "object" != typeof this.options.toolbar || a(h('<div class="bs-bars pull-%s"></div>', this.options.toolbarAlign)).appendTo(this.$toolbar).append(a(this.options.toolbar));
        g = [h('<div class="columns columns-%s btn-group pull-%s">', this.options.buttonsAlign, this.options.buttonsAlign)];
        "string" == typeof this.options.icons && (this.options.icons = c(null, this.options.icons));
        this.options.showPaginationSwitch && g.push(h('<button class="btn' + h(" btn-%s", this.options.buttonsClass) + h(" btn-%s",
            this.options.iconSize) + '" type="button" name="paginationSwitch" aria-label="pagination Switch" title="%s">', this.options.formatPaginationSwitch()), h('<i class="%s %s"></i>', this.options.iconsPrefix, this.options.icons.paginationSwitchDown), "</button>");
        this.options.showRefresh && g.push(h('<button class="btn' + h(" btn-%s", this.options.buttonsClass) + h(" btn-%s", this.options.iconSize) + '" type="button" name="refresh" aria-label="refresh" title="%s">', this.options.formatRefresh()), h('<i class="%s %s"></i>',
            this.options.iconsPrefix, this.options.icons.refresh), "</button>");
        this.options.showToggle && g.push(h('<button class="btn' + h(" btn-%s", this.options.buttonsClass) + h(" btn-%s", this.options.iconSize) + '" type="button" name="toggle" aria-label="toggle" title="%s">', this.options.formatToggle()), h('<i class="%s %s"></i>', this.options.iconsPrefix, this.options.icons.toggle), "</button>");
        this.options.showColumns && (g.push(h('<div class="keep-open btn-group" title="%s">', this.options.formatColumns()), '<button type="button" aria-label="columns" class="btn' +
            h(" btn-%s", this.options.buttonsClass) + h(" btn-%s", this.options.iconSize) + ' dropdown-toggle" data-toggle="dropdown">', h('<i class="%s %s"></i>', this.options.iconsPrefix, this.options.icons.columns), ' <span class="caret"></span>', "</button>", '<ul class="dropdown-menu" role="menu">'), a.each(this.columns, function(a, b) {
            if (!(b.radio || b.checkbox || f.options.cardView && !b.cardVisible)) {
                var c = b.visible ? ' checked="checked"' : "";
                b.switchable && (g.push(h('<li role="menuitem"><label><input type="checkbox" data-field="%s" value="%s"%s> %s</label></li>',
                    b.field, a, c, b.title)), k++)
            }
        }), g.push("</ul>", "</div>"));
        g.push("</div>");
        (this.showToolbar || 2 < g.length) && this.$toolbar.append(g.join(""));
        this.options.showPaginationSwitch && this.$toolbar.find('button[name="paginationSwitch"]').off("click").on("click", a.proxy(this.togglePagination, this));
        this.options.showRefresh && this.$toolbar.find('button[name="refresh"]').off("click").on("click", a.proxy(this.refresh, this));
        this.options.showToggle && this.$toolbar.find('button[name="toggle"]').off("click").on("click",
            function() {
                f.toggleView()
            });
        this.options.showColumns && (b = this.$toolbar.find(".keep-open"), k <= this.options.minimumCountColumns && b.find("input").prop("disabled", !0), b.find("li").off("click").on("click", function(a) {
            a.stopImmediatePropagation()
        }), b.find("input").off("click").on("click", function() {
            var b = a(this);
            f.toggleColumn(a(this).val(), b.prop("checked"), !1);
            f.trigger("column-switch", a(this).data("field"), b.prop("checked"))
        }));
        this.options.search && (g = [], g.push('<div class="pull-' + this.options.searchAlign +
            ' search">', h('<input class="form-control' + h(" input-%s", this.options.iconSize) + '" type="text" placeholder="%s">', this.options.formatSearch()), "</div>"), this.$toolbar.append(g.join("")), d = this.$toolbar.find(".search input"), d.off("keyup drop blur").on("keyup drop blur", function(b) {
            f.options.searchOnEnterKey && 13 !== b.keyCode || -1 < a.inArray(b.keyCode, [37, 38, 39, 40]) || (clearTimeout(e), e = setTimeout(function() {
                f.onSearch(b)
            }, f.options.searchTimeOut))
        }), q() && d.off("mouseup").on("mouseup", function(a) {
            clearTimeout(e);
            e = setTimeout(function() {
                f.onSearch(a)
            }, f.options.searchTimeOut)
        }))
    };
    p.prototype.onSearch = function(b) {
        var c = a.trim(a(b.currentTarget).val());
        this.options.trimOnSearch && a(b.currentTarget).val() !== c && a(b.currentTarget).val(c);
        c !== this.searchText && (this.searchText = c, this.options.searchText = c, this.options.pageNumber = 1, this.initSearch(), this.updatePagination(), this.trigger("search", c))
    };
    p.prototype.initSearch = function() {
        var b = this;
        if ("server" !== this.options.sidePagination) {
            if (this.options.customSearch !==
                a.noop) return void this.options.customSearch.apply(this, [this.searchText]);
            var d = this.searchText && (this.options.escape ? g(this.searchText) : this.searchText).toLowerCase(),
                e = a.isEmptyObject(this.filterColumns) ? null : this.filterColumns;
            this.data = e ? a.grep(this.options.data, function(b, c) {
                for (var d in e)
                    if (a.isArray(e[d]) && -1 === a.inArray(b[d], e[d]) || !a.isArray(e[d]) && b[d] !== e[d]) return !1;
                return !0
            }) : this.options.data;
            this.data = d ? a.grep(this.data, function(g, e) {
                for (var k = 0; k < b.header.fields.length; k++)
                    if (b.header.searchables[k]) {
                        var h,
                            l = a.isNumeric(b.header.fields[k]) ? parseInt(b.header.fields[k], 10) : b.header.fields[k],
                            r = b.columns[f(b.columns, l)];
                        if ("string" == typeof l) {
                            h = g;
                            for (var l = l.split("."), q = 0; q < l.length; q++) h = h[l[q]];
                            r && r.searchFormatter && (h = c(r, b.header.formatters[k], [h, g, e], h))
                        } else h = g[l];
                        if ("string" == typeof h || "number" == typeof h)
                            if (b.options.strictSearch) {
                                if ((h + "").toLowerCase() === d) return !0
                            } else if (-1 !== (h + "").toLowerCase().indexOf(d)) return !0
                    }
                return !1
            }) : this.data
        }
    };
    p.prototype.initPagination = function() {
        if (!this.options.pagination) return void this.$pagination.hide();
        this.$pagination.show();
        var b, c, d, f, g, e, k, l, r = this,
            q = [],
            t = !1,
            p = this.getData(),
            v = this.options.pageList;
        if ("server" !== this.options.sidePagination && (this.options.totalRows = p.length), this.totalPages = 0, this.options.totalRows) this.options.pageSize === this.options.formatAllRows() ? (this.options.pageSize = this.options.totalRows, t = !0) : this.options.pageSize === this.options.totalRows && (p = "string" == typeof this.options.pageList ? this.options.pageList.replace("[", "").replace("]", "").replace(/ /g, "").toLowerCase().split(",") :
            this.options.pageList, -1 < a.inArray(this.options.formatAllRows().toLowerCase(), p) && (t = !0)), this.totalPages = ~~((this.options.totalRows - 1) / this.options.pageSize) + 1, this.options.totalPages = this.totalPages;
        if (0 < this.totalPages && this.options.pageNumber > this.totalPages && (this.options.pageNumber = this.totalPages), this.pageFrom = (this.options.pageNumber - 1) * this.options.pageSize + 1, this.pageTo = this.options.pageNumber * this.options.pageSize, this.pageTo > this.options.totalRows && (this.pageTo = this.options.totalRows),
            q.push('<div class="pull-' + this.options.paginationDetailHAlign + ' pagination-detail">', '<span class="pagination-info">', this.options.onlyInfoPagination ? this.options.formatDetailPagination(this.options.totalRows) : this.options.formatShowingRows(this.pageFrom, this.pageTo, this.options.totalRows), "</span>"), !this.options.onlyInfoPagination) {
            q.push('<span class="page-list">');
            var J = [h('<span class="btn-group %s">', "top" === this.options.paginationVAlign || "both" === this.options.paginationVAlign ? "dropdown" : "dropup"),
                '<button type="button" class="btn' + h(" btn-%s", this.options.buttonsClass) + h(" btn-%s", this.options.iconSize) + ' dropdown-toggle" data-toggle="dropdown">', '<span class="page-size">', t ? this.options.formatAllRows() : this.options.pageSize, "</span>", ' <span class="caret"></span>', "</button>", '<ul class="dropdown-menu" role="menu">'
            ];
            "string" == typeof this.options.pageList && (p = this.options.pageList.replace("[", "").replace("]", "").replace(/ /g, "").split(","), v = [], a.each(p, function(a, b) {
                v.push(b.toUpperCase() ===
                r.options.formatAllRows().toUpperCase() ? r.options.formatAllRows() : +b)
            }));
            a.each(v, function(a, b) {
                if (!r.options.smartDisplay || 0 === a || v[a - 1] < r.options.totalRows) a = t ? b === r.options.formatAllRows() ? ' class="active"' : "" : b === r.options.pageSize ? ' class="active"' : "", J.push(h('<li role="menuitem"%s><a href="#">%s</a></li>', a, b))
            });
            J.push("</ul></span>");
            q.push(this.options.formatRecordsPerPage(J.join("")));
            q.push("</span>");
            q.push("</div>", '<div class="pull-' + this.options.paginationHAlign + ' pagination">', '<ul class="pagination' +
                h(" pagination-%s", this.options.iconSize) + '">', '<li class="page-pre"><a href="#">' + this.options.paginationPreText + "</a></li>");
            5 > this.totalPages ? (b = 1, c = this.totalPages) : (b = this.options.pageNumber - 2, c = b + 4, 1 > b && (b = 1, c = 5), c > this.totalPages && (c = this.totalPages, b = c - 4));
            6 <= this.totalPages && (3 <= this.options.pageNumber && (q.push('<li class="page-first' + (1 === this.options.pageNumber ? " active" : "") + '">', '<a href="#">', 1, "</a>", "</li>"), b++), 4 <= this.options.pageNumber && (4 == this.options.pageNumber || 6 == this.totalPages ||
            7 == this.totalPages ? b-- : q.push('<li class="page-first-separator disabled">', '<a href="#">...</a>', "</li>"), c--));
            7 <= this.totalPages && this.options.pageNumber >= this.totalPages - 2 && b--;
            for (6 == this.totalPages ? this.options.pageNumber >= this.totalPages - 2 && c++ : 7 <= this.totalPages && (7 == this.totalPages || this.options.pageNumber >= this.totalPages - 3) && c++; c >= b; b++) q.push('<li class="page-number' + (b === this.options.pageNumber ? " active" : "") + '">', '<a href="#">', b, "</a>", "</li>");
            8 <= this.totalPages && this.options.pageNumber <=
            this.totalPages - 4 && q.push('<li class="page-last-separator disabled">', '<a href="#">...</a>', "</li>");
            6 <= this.totalPages && this.options.pageNumber <= this.totalPages - 3 && q.push('<li class="page-last' + (this.totalPages === this.options.pageNumber ? " active" : "") + '">', '<a href="#">', this.totalPages, "</a>", "</li>");
            q.push('<li class="page-next"><a href="#">' + this.options.paginationNextText + "</a></li>", "</ul>", "</div>")
        }
        this.$pagination.html(q.join(""));
        this.options.onlyInfoPagination || (d = this.$pagination.find(".page-list a"),
            f = this.$pagination.find(".page-first"), g = this.$pagination.find(".page-pre"), e = this.$pagination.find(".page-next"), k = this.$pagination.find(".page-last"), l = this.$pagination.find(".page-number"), this.options.smartDisplay && (1 >= this.totalPages && this.$pagination.find("div.pagination").hide(), (2 > v.length || this.options.totalRows <= v[0]) && this.$pagination.find("span.page-list").hide(), this.$pagination[this.getData().length ? "show" : "hide"]()), this.options.paginationLoop || (1 === this.options.pageNumber && g.addClass("disabled"),
        this.options.pageNumber === this.totalPages && e.addClass("disabled")), t && (this.options.pageSize = this.options.formatAllRows()), d.off("click").on("click", a.proxy(this.onPageListChange, this)), f.off("click").on("click", a.proxy(this.onPageFirst, this)), g.off("click").on("click", a.proxy(this.onPagePre, this)), e.off("click").on("click", a.proxy(this.onPageNext, this)), k.off("click").on("click", a.proxy(this.onPageLast, this)), l.off("click").on("click", a.proxy(this.onPageNumber, this)))
    };
    p.prototype.updatePagination =
        function(b) {
            b && a(b.currentTarget).hasClass("disabled") || (this.options.maintainSelected || this.resetRows(), this.initPagination(), "server" === this.options.sidePagination ? this.initServer() : this.initBody(), this.trigger("page-change", this.options.pageNumber, this.options.pageSize))
        };
    p.prototype.onPageListChange = function(b) {
        var c = a(b.currentTarget);
        return c.parent().addClass("active").siblings().removeClass("active"), this.options.pageSize = c.text().toUpperCase() === this.options.formatAllRows().toUpperCase() ?
            this.options.formatAllRows() : +c.text(), this.$toolbar.find(".page-size").text(this.options.pageSize), this.updatePagination(b), !1
    };
    p.prototype.onPageFirst = function(a) {
        return this.options.pageNumber = 1, this.updatePagination(a), !1
    };
    p.prototype.onPagePre = function(a) {
        return 0 === this.options.pageNumber - 1 ? this.options.pageNumber = this.options.totalPages : this.options.pageNumber--, this.updatePagination(a), !1
    };
    p.prototype.onPageNext = function(a) {
        return this.options.pageNumber + 1 > this.options.totalPages ? this.options.pageNumber =
            1 : this.options.pageNumber++, this.updatePagination(a), !1
    };
    p.prototype.onPageLast = function(a) {
        return this.options.pageNumber = this.totalPages, this.updatePagination(a), !1
    };
    p.prototype.onPageNumber = function(b) {
        return this.options.pageNumber !== +a(b.currentTarget).text() ? (this.options.pageNumber = +a(b.currentTarget).text(), this.updatePagination(b), !1) : void 0
    };
    p.prototype.initRow = function(b, d, f, k) {
        var l, r = this,
            q = [],
            p = {},
            v = [],
            M = "";
        f = {};
        k = [];
        if (!(-1 < a.inArray(b, this.hiddenRows))) {
            if (p = c(this.options, this.options.rowStyle, [b, d], p), p && p.css)
                for (l in p.css) v.push(l + ": " + p.css[l]);
            if (f = c(this.options, this.options.rowAttributes, [b, d], f))
                for (l in f) k.push(h('%s="%s"', l, g(f[l])));
            return b._data && !a.isEmptyObject(b._data) && a.each(b._data, function(a, b) {
                "index" !== a && (M += h(' data-%s="%s"', a, b))
            }), q.push("<tr", h(" %s", k.join(" ")), h(' id="%s"', a.isArray(b) ? void 0 : b._id), h(' class="%s"', p.classes || (a.isArray(b) ? void 0 : b._class)), h(' data-index="%s"', d), h(' data-uniqueid="%s"', b[this.options.uniqueId]), h("%s", M), ">"), this.options.cardView &&
            q.push(h('<td colspan="%s"><div class="card-views">', this.header.fields.length)), !this.options.cardView && this.options.detailView && q.push("<td>", '<a class="detail-icon" href="#">', h('<i class="%s %s"></i>', this.options.iconsPrefix, this.options.icons.detailOpen), "</a>", "</td>"), a.each(this.header.fields, function(f, k) {
                var l = "",
                    x = t(b, k, r.options.escape),
                    y = "",
                    w = "",
                    y = {},
                    M = "",
                    W = r.header.classes[f],
                    ba = "",
                    S = "",
                    P = "",
                    O = "",
                    U = r.columns[f];
                if (!(r.fromHtml && "undefined" == typeof x || !U.visible || r.options.cardView &&
                    !U.cardVisible)) {
                    if (U.escape && (x = g(x)), p = h('style="%s"', v.concat(r.header.styles[f]).join("; ")), b["_" + k + "_id"] && (M = h(' id="%s"', b["_" + k + "_id"])), b["_" + k + "_class"] && (W = h(' class="%s"', b["_" + k + "_class"])), b["_" + k + "_rowspan"] && (S = h(' rowspan="%s"', b["_" + k + "_rowspan"])), b["_" + k + "_colspan"] && (P = h(' colspan="%s"', b["_" + k + "_colspan"])), b["_" + k + "_title"] && (O = h(' title="%s"', b["_" + k + "_title"])), y = c(r.header, r.header.cellStyles[f], [x, b, d, k], y), y.classes && (W = h(' class="%s"', y.classes)), y.css) {
                        var Z = [],
                            V;
                        for (V in y.css) Z.push(V +
                            ": " + y.css[V]);
                        p = h('style="%s"', Z.concat(r.header.styles[f]).join("; "))
                    }
                    y = c(U, r.header.formatters[f], [x, b, d], x);
                    b["_" + k + "_data"] && !a.isEmptyObject(b["_" + k + "_data"]) && a.each(b["_" + k + "_data"], function(a, b) {
                        "index" !== a && (ba += h(' data-%s="%s"', a, b))
                    });
                    U.checkbox || U.radio ? (w = U.checkbox ? "checkbox" : w, w = U.radio ? "radio" : w, l = [h(r.options.cardView ? '<div class="card-view %s">' : '<td class="bs-checkbox %s">', U["class"] || ""), "<input" + h(' data-index="%s"', d) + h(' name="%s"', r.options.selectItemName) + h(' type="%s"',
                        w) + h(' value="%s"', b[r.options.idField]) + h(' checked="%s"', !0 === y || x || y && y.checked ? "checked" : void 0) + h(' disabled="%s"', !U.checkboxEnabled || y && y.disabled ? "disabled" : void 0) + " />", r.header.formatters[f] && "string" == typeof y ? y : "", r.options.cardView ? "</div>" : "</td>"].join(""), b[r.header.stateField] = !0 === y || y && y.checked) : (y = "undefined" == typeof y || null === y ? r.options.undefinedText : y, l = r.options.cardView ? ['<div class="card-view">', r.options.showHeader ? h('<span class="title" %s>%s</span>', p, e(r.columns, "field",
                        "title", k)) : "", h('<span class="value">%s</span>', y), "</div>"].join("") : [h("<td%s %s %s %s %s %s %s>", M, W, p, ba, S, P, O), y, "</td>"].join(""), r.options.cardView && r.options.smartDisplay && "" === y && (l = '<div class="card-view"></div>'));
                    q.push(l)
                }
            }), this.options.cardView && q.push("</div></td>"), q.push("</tr>"), q.join(" ")
        }
    };
    p.prototype.initBody = function(b) {
        var d = this,
            g = this.getData();
        this.trigger("pre-body", g);
        this.$body = this.$el.find(">tbody");
        this.$body.length || (this.$body = a("<tbody></tbody>").appendTo(this.$el));
        this.options.pagination && "server" !== this.options.sidePagination || (this.pageFrom = 1, this.pageTo = g.length);
        for (var e, k = a(document.createDocumentFragment()), l = this.pageFrom - 1; l < this.pageTo; l++) {
            var r = this.initRow(g[l], l, g, k);
            e = e || !!r;
            r && !0 !== r && k.append(r)
        }
        e || k.append('<tr class="no-records-found">' + h('<td colspan="%s">%s</td>', this.$header.find("th").length, this.options.formatNoMatches()) + "</tr>");
        this.$body.html(k);
        b || this.scrollTo(0);
        this.$body.find("> tr[data-index] > td").off("click dblclick").on("click dblclick",
            function(b) {
                var c = a(this),
                    g = c.parent(),
                    e = d.data[g.data("index")],
                    k = c[0].cellIndex,
                    k = d.getVisibleFields()[d.options.detailView && !d.options.cardView ? k - 1 : k],
                    l = d.columns[f(d.columns, k)],
                    n = t(e, k, d.options.escape);
                !c.find(".detail-icon").length && (d.trigger("click" === b.type ? "click-cell" : "dbl-click-cell", k, n, e, c), d.trigger("click" === b.type ? "click-row" : "dbl-click-row", e, g, k), "click" === b.type && d.options.clickToSelect && l.clickToSelect) && (b = g.find(h('[name="%s"]', d.options.selectItemName)), b.length && b[0].click())
            });
        this.$body.find("> tr[data-index] > td > .detail-icon").off("click").on("click", function() {
            var b = a(this),
                f = b.parent().parent(),
                e = f.data("index"),
                k = g[e];
            f.next().is("tr.detail-view") ? (b.find("i").attr("class", h("%s %s", d.options.iconsPrefix, d.options.icons.detailOpen)), d.trigger("collapse-row", e, k), f.next().remove()) : (b.find("i").attr("class", h("%s %s", d.options.iconsPrefix, d.options.icons.detailClose)), f.after(h('<tr class="detail-view"><td colspan="%s"></td></tr>', f.find("td").length)), b = f.next().find("td"),
                f = c(d.options, d.options.detailFormatter, [e, k, b], ""), 1 === b.length && b.append(f), d.trigger("expand-row", e, k, b));
            return d.resetView(), !1
        });
        this.$selectItem = this.$body.find(h('[name="%s"]', this.options.selectItemName));
        this.$selectItem.off("click").on("click", function(b) {
            b.stopImmediatePropagation();
            b = a(this);
            var c = b.prop("checked"),
                f = d.data[b.data("index")];
            d.options.maintainSelected && a(this).is(":radio") && a.each(d.options.data, function(a, b) {
                b[d.header.stateField] = !1
            });
            f[d.header.stateField] = c;
            d.options.singleSelect &&
            (d.$selectItem.not(this).each(function() {
                d.data[a(this).data("index")][d.header.stateField] = !1
            }), d.$selectItem.filter(":checked").not(this).prop("checked", !1));
            d.updateSelected();
            d.trigger(c ? "check" : "uncheck", f, b)
        });
        a.each(this.header.events, function(b, f) {
            if (f) {
                "string" == typeof f && (f = c(null, f));
                var g = d.header.fields[b],
                    e = a.inArray(g, d.getVisibleFields());
                d.options.detailView && !d.options.cardView && (e += 1);
                for (var k in f) d.$body.find(">tr:not(.no-records-found)").each(function() {
                    var b = a(this),
                        c = b.find(d.options.cardView ?
                            ".card-view" : "td").eq(e),
                        h = k.indexOf(" "),
                        l = k.substring(0, h),
                        h = k.substring(h + 1),
                        n = f[k];
                    c.find(h).off(l).on(l, function(a) {
                        var c = b.data("index"),
                            f = d.data[c];
                        n.apply(this, [a, f[g], f, c])
                    })
                })
            }
        });
        this.updateSelected();
        this.resetView();
        this.trigger("post-body", g)
    };
    p.prototype.initServer = function(b, d, f) {
        var g, e = this,
            k = {},
            h = {
                searchText: this.searchText,
                sortName: this.options.sortName,
                sortOrder: this.options.sortOrder
            };
        this.options.pagination && (h.pageSize = this.options.pageSize === this.options.formatAllRows() ? this.options.totalRows :
            this.options.pageSize, h.pageNumber = this.options.pageNumber);
        (f || this.options.url || this.options.ajax) && ("limit" === this.options.queryParamsType && (h = {
            search: h.searchText,
            sort: h.sortName,
            order: h.sortOrder
        }, this.options.pagination && (h.offset = this.options.pageSize === this.options.formatAllRows() ? 0 : this.options.pageSize * (this.options.pageNumber - 1), h.limit = this.options.pageSize === this.options.formatAllRows() ? this.options.totalRows : this.options.pageSize)), a.isEmptyObject(this.filterColumnsPartial) || (h.filter =
            JSON.stringify(this.filterColumnsPartial, null)), k = c(this.options, this.options.queryParams, [h], k), a.extend(k, d || {}), !1 !== k && (b || this.$tableLoading.show(), g = a.extend({}, c(null, this.options.ajaxOptions), {
            type: this.options.method,
            url: f || this.options.url,
            data: "application/json" === this.options.contentType && "post" === this.options.method ? JSON.stringify(k) : k,
            cache: this.options.cache,
            contentType: this.options.contentType,
            dataType: this.options.dataType,
            success: function(a) {
                a = c(e.options, e.options.responseHandler, [a], a);
                e.load(a);
                e.trigger("load-success", a);
                b || e.$tableLoading.hide()
            },
            error: function(a) {
                e.trigger("load-error", a.status, a);
                b || e.$tableLoading.hide()
            }
        }), this.options.ajax ? c(this, this.options.ajax, [g], null) : (this._xhr && 4 !== this._xhr.readyState && this._xhr.abort(), this._xhr = a.ajax(g))))
    };
    p.prototype.initSearchText = function() {
        if (this.options.search && "" !== this.options.searchText) {
            var a = this.$toolbar.find(".search input");
            a.val(this.options.searchText);
            this.onSearch({
                currentTarget: a
            })
        }
    };
    p.prototype.getCaret =
        function() {
            var b = this;
            a.each(this.$header.find("th"), function(c, d) {
                a(d).find(".sortable").removeClass("desc asc").addClass(a(d).data("field") === b.options.sortName ? b.options.sortOrder : "both")
            })
        };
    p.prototype.updateSelected = function() {
        var b = this.$selectItem.filter(":enabled").length && this.$selectItem.filter(":enabled").length === this.$selectItem.filter(":enabled").filter(":checked").length;
        this.$selectAll.add(this.$selectAll_).prop("checked", b);
        this.$selectItem.each(function() {
            a(this).closest("tr")[a(this).prop("checked") ?
                "addClass" : "removeClass"]("selected")
        })
    };
    p.prototype.updateRows = function() {
        var b = this;
        this.$selectItem.each(function() {
            b.data[a(this).data("index")][b.header.stateField] = a(this).prop("checked")
        })
    };
    p.prototype.resetRows = function() {
        var b = this;
        a.each(this.data, function(a, c) {
            b.$selectAll.prop("checked", !1);
            b.$selectItem.prop("checked", !1);
            b.header.stateField && (c[b.header.stateField] = !1)
        });
        this.initHiddenRows()
    };
    p.prototype.trigger = function(b) {
        var c = Array.prototype.slice.call(arguments, 1);
        b += ".bs.table";
        this.options[p.EVENTS[b]].apply(this.options, c);
        this.$el.trigger(a.Event(b), c);
        this.options.onAll(b, c);
        this.$el.trigger(a.Event("all.bs.table"), [b, c])
    };
    p.prototype.resetHeader = function() {
        clearTimeout(this.timeoutId_);
        this.timeoutId_ = setTimeout(a.proxy(this.fitHeader, this), this.$el.is(":hidden") ? 100 : 0)
    };
    p.prototype.fitHeader = function() {
        var b, c, f, g = this;
        if (g.$el.is(":hidden")) return void(g.timeoutId_ = setTimeout(a.proxy(g.fitHeader, g), 100));
        if (b = this.$tableBody.get(0), c = b.scrollWidth > b.clientWidth &&
        b.scrollHeight > b.clientHeight + this.$header.outerHeight() ? d() : 0, this.$el.css("margin-top", -this.$header.outerHeight()), f = a(":focus"), 0 < f.length) b = f.parents("th"), 0 < b.length && (b = b.attr("data-field"), void 0 !== b && (b = this.$header.find("[data-field='" + b + "']"), 0 < b.length && b.find(":input").addClass("focus-temp")));
        this.$header_ = this.$header.clone(!0, !0);
        this.$selectAll_ = this.$header_.find('[name="btSelectAll"]');
        this.$tableHeader.css({
            "margin-right": c
        }).find("table").css("width", this.$el.outerWidth()).html("").attr("class",
            this.$el.attr("class")).append(this.$header_);
        c = a(".focus-temp:visible:eq(0)");
        0 < c.length && (c.focus(), this.$header.find(".focus-temp").removeClass("focus-temp"));
        this.$header.find("th[data-field]").each(function(b) {
            g.$header_.find(h('th[data-field="%s"]', a(this).data("field"))).data(a(this).data())
        });
        var e = this.getVisibleFields(),
            k = this.$header_.find("th");
        this.$body.find(">tr:first-child:not(.no-records-found) > *").each(function(b) {
            var c = a(this),
                d = b;
            g.options.detailView && !g.options.cardView && (0 ===
            b && g.$header_.find("th.detail").find(".fht-cell").width(c.innerWidth()), d = b - 1);
            b = g.$header_.find(h('th[data-field="%s"]', e[d]));
            1 < b.length && (b = a(k[c[0].cellIndex]));
            b.find(".fht-cell").width(c.innerWidth())
        });
        this.$tableBody.off("scroll").on("scroll", function() {
            g.$tableHeader.scrollLeft(a(this).scrollLeft());
            g.options.showFooter && !g.options.cardView && g.$tableFooter.scrollLeft(a(this).scrollLeft())
        });
        g.trigger("post-header")
    };
    p.prototype.resetFooter = function() {
        var b = this,
            d = b.getData(),
            f = [];
        this.options.showFooter &&
        !this.options.cardView && (!this.options.cardView && this.options.detailView && f.push('<td><div class="th-inner">&nbsp;</div><div class="fht-cell"></div></td>'), a.each(this.columns, function(a, g) {
            var e, k, l = [],
                r = {},
                q = h(' class="%s"', g["class"]);
            if (g.visible && (!b.options.cardView || g.cardVisible)) {
                if (a = h("text-align: %s; ", g.falign ? g.falign : g.align), k = h("vertical-align: %s; ", g.valign), r = c(null, b.options.footerStyle), r && r.css)
                    for (e in r.css) l.push(e + ": " + r.css[e]);
                f.push("<td", q, h(' style="%s"', a + k + l.concat().join("; ")),
                    ">");
                f.push('<div class="th-inner">');
                f.push(c(g, g.footerFormatter, [d], "&nbsp;") || "&nbsp;");
                f.push("</div>");
                f.push('<div class="fht-cell"></div>');
                f.push("</div>");
                f.push("</td>")
            }
        }), this.$tableFooter.find("tr").html(f.join("")), this.$tableFooter.show(), clearTimeout(this.timeoutFooter_), this.timeoutFooter_ = setTimeout(a.proxy(this.fitFooter, this), this.$el.is(":hidden") ? 100 : 0))
    };
    p.prototype.fitFooter = function() {
        var b, c, f;
        return clearTimeout(this.timeoutFooter_), this.$el.is(":hidden") ? void(this.timeoutFooter_ =
            setTimeout(a.proxy(this.fitFooter, this), 100)) : (c = this.$el.css("width"), f = c > this.$tableBody.width() ? d() : 0, this.$tableFooter.css({
            "margin-right": f
        }).find("table").css("width", c).attr("class", this.$el.attr("class")), b = this.$tableFooter.find("td"), void this.$body.find(">tr:first-child:not(.no-records-found) > *").each(function(c) {
            var d = a(this);
            b.eq(c).find(".fht-cell").width(d.innerWidth())
        }))
    };
    p.prototype.toggleColumn = function(a, b, c) {
        if (-1 !== a && (this.columns[a].visible = b, this.initHeader(), this.initSearch(),
            this.initPagination(), this.initBody(), this.options.showColumns)) {
            var d = this.$toolbar.find(".keep-open input").prop("disabled", !1);
            c && d.filter(h('[value="%s"]', a)).prop("checked", b);
            d.filter(":checked").length <= this.options.minimumCountColumns && d.filter(":checked").prop("disabled", !0)
        }
    };
    p.prototype.getVisibleFields = function() {
        var b = this,
            c = [];
        return a.each(this.header.fields, function(a, d) {
            b.columns[f(b.columns, d)].visible && c.push(d)
        }), c
    };
    p.prototype.resetView = function(a) {
        var b = 0;
        if (a && a.height && (this.options.height =
            a.height), this.$selectAll.prop("checked", 0 < this.$selectItem.length && this.$selectItem.length === this.$selectItem.filter(":checked").length), this.options.height) {
            a = this.$toolbar.outerHeight(!0);
            var c = this.$pagination.outerHeight(!0);
            this.$tableContainer.css("height", this.options.height - a - c + "px")
        }
        return this.options.cardView ? (this.$el.css("margin-top", "0"), this.$tableContainer.css("padding-bottom", "0"), void this.$tableFooter.hide()) : (this.options.showHeader && this.options.height ? (this.$tableHeader.show(),
            this.resetHeader(), b += this.$header.outerHeight()) : (this.$tableHeader.hide(), this.trigger("post-header")), this.options.showFooter && (this.resetFooter(), this.options.height && (b += this.$tableFooter.outerHeight() + 1)), this.getCaret(), this.$tableContainer.css("padding-bottom", b + "px"), void this.trigger("reset-view"))
    };
    p.prototype.getData = function(b) {
        return !this.searchText && a.isEmptyObject(this.filterColumns) && a.isEmptyObject(this.filterColumnsPartial) ? b ? this.options.data.slice(this.pageFrom - 1, this.pageTo) :
            this.options.data : b ? this.data.slice(this.pageFrom - 1, this.pageTo) : this.data
    };
    p.prototype.load = function(b) {
        var c = !1;
        "server" === this.options.sidePagination ? (this.options.totalRows = b[this.options.totalField], c = b.fixedScroll, b = b[this.options.dataField]) : a.isArray(b) || (c = b.fixedScroll, b = b.data);
        this.initData(b);
        this.initSearch();
        this.initPagination();
        this.initBody(c)
    };
    p.prototype.append = function(a) {
        this.initData(a, "append");
        this.initSearch();
        this.initPagination();
        this.initSort();
        this.initBody(!0)
    };
    p.prototype.prepend =
        function(a) {
            this.initData(a, "prepend");
            this.initSearch();
            this.initPagination();
            this.initSort();
            this.initBody(!0)
        };
    p.prototype.remove = function(b) {
        var c, d, f = this.options.data.length;
        if (b.hasOwnProperty("field") && b.hasOwnProperty("values")) {
            for (c = f - 1; 0 <= c; c--) d = this.options.data[c], d.hasOwnProperty(b.field) && -1 !== a.inArray(d[b.field], b.values) && (this.options.data.splice(c, 1), "server" === this.options.sidePagination && --this.options.totalRows);
            f !== this.options.data.length && (this.initSearch(), this.initPagination(),
                this.initSort(), this.initBody(!0))
        }
    };
    p.prototype.removeAll = function() {
        0 < this.options.data.length && (this.options.data.splice(0, this.options.data.length), this.initSearch(), this.initPagination(), this.initBody(!0))
    };
    p.prototype.getRowByUniqueId = function(a) {
        var b, c, d, f = this.options.uniqueId,
            g = null;
        for (b = this.options.data.length - 1; 0 <= b; b--) {
            if (c = this.options.data[b], c.hasOwnProperty(f)) d = c[f];
            else {
                if (!c._data.hasOwnProperty(f)) continue;
                d = c._data[f]
            }
            if ("string" == typeof d ? a = a.toString() : "number" == typeof d &&
                (Number(d) === d && 0 === d % 1 ? a = parseInt(a) : d === Number(d) && 0 !== d && (a = parseFloat(a))), d === a) {
                g = c;
                break
            }
        }
        return g
    };
    p.prototype.removeByUniqueId = function(a) {
        var b = this.options.data.length;
        (a = this.getRowByUniqueId(a)) && this.options.data.splice(this.options.data.indexOf(a), 1);
        b !== this.options.data.length && (this.initSearch(), this.initPagination(), this.initBody(!0))
    };
    p.prototype.updateByUniqueId = function(b) {
        var c = this;
        b = a.isArray(b) ? b : [b];
        a.each(b, function(b, d) {
            var f;
            d.hasOwnProperty("id") && d.hasOwnProperty("row") &&
            (f = a.inArray(c.getRowByUniqueId(d.id), c.options.data), -1 !== f && a.extend(c.options.data[f], d.row))
        });
        this.initSearch();
        this.initPagination();
        this.initSort();
        this.initBody(!0)
    };
    p.prototype.insertRow = function(a) {
        a.hasOwnProperty("index") && a.hasOwnProperty("row") && (this.data.splice(a.index, 0, a.row), this.initSearch(), this.initPagination(), this.initSort(), this.initBody(!0))
    };
    p.prototype.updateRow = function(b) {
        var c = this;
        b = a.isArray(b) ? b : [b];
        a.each(b, function(b, d) {
            d.hasOwnProperty("index") && d.hasOwnProperty("row") &&
            a.extend(c.options.data[d.index], d.row)
        });
        this.initSearch();
        this.initPagination();
        this.initSort();
        this.initBody(!0)
    };
    p.prototype.initHiddenRows = function() {
        this.hiddenRows = []
    };
    p.prototype.showRow = function(a) {
        this.toggleRow(a, !0)
    };
    p.prototype.hideRow = function(a) {
        this.toggleRow(a, !1)
    };
    p.prototype.toggleRow = function(b, c) {
        var d, f;
        b.hasOwnProperty("index") ? d = this.getData()[b.index] : b.hasOwnProperty("uniqueId") && (d = this.getRowByUniqueId(b.uniqueId));
        d && (f = a.inArray(d, this.hiddenRows), c || -1 !== f ? c && -1 < f &&
            this.hiddenRows.splice(f, 1) : this.hiddenRows.push(d), this.initBody(!0))
    };
    p.prototype.getHiddenRows = function(b) {
        var c = this;
        b = this.getData();
        var d = [];
        return a.each(b, function(b, f) {
            -1 < a.inArray(f, c.hiddenRows) && d.push(f)
        }), this.hiddenRows = d, d
    };
    p.prototype.mergeCells = function(b) {
        var c, d, f = b.index,
            g = a.inArray(b.field, this.getVisibleFields()),
            e = b.rowspan || 1,
            k = b.colspan || 1,
            h = this.$body.find(">tr");
        if (this.options.detailView && !this.options.cardView && (g += 1), d = h.eq(f).find(">td").eq(g), !(0 > f || 0 > g || f >= this.data.length)) {
            for (b =
                     f; f + e > b; b++)
                for (c = g; g + k > c; c++) h.eq(b).find(">td").eq(c).hide();
            d.attr("rowspan", e).attr("colspan", k).show()
        }
    };
    p.prototype.updateCell = function(a) {
        a.hasOwnProperty("index") && a.hasOwnProperty("field") && a.hasOwnProperty("value") && (this.data[a.index][a.field] = a.value, !1 !== a.reinit && (this.initSort(), this.initBody(!0)))
    };
    p.prototype.getOptions = function() {
        return this.options
    };
    p.prototype.getSelections = function() {
        var b = this;
        return a.grep(this.options.data, function(a) {
            return !0 === a[b.header.stateField]
        })
    };
    p.prototype.getAllSelections =
        function() {
            var b = this;
            return a.grep(this.options.data, function(a) {
                return a[b.header.stateField]
            })
        };
    p.prototype.checkAll = function() {
        this.checkAll_(!0)
    };
    p.prototype.uncheckAll = function() {
        this.checkAll_(!1)
    };
    p.prototype.checkInvert = function() {
        var b = this.$selectItem.filter(":enabled"),
            c = b.filter(":checked");
        b.each(function() {
            a(this).prop("checked", !a(this).prop("checked"))
        });
        this.updateRows();
        this.updateSelected();
        this.trigger("uncheck-some", c);
        c = this.getSelections();
        this.trigger("check-some", c)
    };
    p.prototype.checkAll_ =
        function(a) {
            var b;
            a || (b = this.getSelections());
            this.$selectAll.add(this.$selectAll_).prop("checked", a);
            this.$selectItem.filter(":enabled").prop("checked", a);
            this.updateRows();
            a && (b = this.getSelections());
            this.trigger(a ? "check-all" : "uncheck-all", b)
        };
    p.prototype.check = function(a) {
        this.check_(!0, a)
    };
    p.prototype.uncheck = function(a) {
        this.check_(!1, a)
    };
    p.prototype.check_ = function(a, b) {
        var c = this.$selectItem.filter(h('[data-index="%s"]', b)).prop("checked", a);
        this.data[b][this.header.stateField] = a;
        this.updateSelected();
        this.trigger(a ? "check" : "uncheck", this.data[b], c)
    };
    p.prototype.checkBy = function(a) {
        this.checkBy_(!0, a)
    };
    p.prototype.uncheckBy = function(a) {
        this.checkBy_(!1, a)
    };
    p.prototype.checkBy_ = function(b, c) {
        if (c.hasOwnProperty("field") && c.hasOwnProperty("values")) {
            var d = this,
                f = [];
            a.each(this.options.data, function(g, e) {
                if (!e.hasOwnProperty(c.field)) return !1; - 1 !== a.inArray(e[c.field], c.values) && (g = d.$selectItem.filter(":enabled").filter(h('[data-index="%s"]', g)).prop("checked", b), e[d.header.stateField] = b, f.push(e),
                    d.trigger(b ? "check" : "uncheck", e, g))
            });
            this.updateSelected();
            this.trigger(b ? "check-some" : "uncheck-some", f)
        }
    };
    p.prototype.destroy = function() {
        this.$el.insertBefore(this.$container);
        a(this.options.toolbar).insertBefore(this.$el);
        this.$container.next().remove();
        this.$container.remove();
        this.$el.html(this.$el_.html()).css("margin-top", "0").attr("class", this.$el_.attr("class") || "")
    };
    p.prototype.showLoading = function() {
        this.$tableLoading.show()
    };
    p.prototype.hideLoading = function() {
        this.$tableLoading.hide()
    };
    p.prototype.togglePagination = function() {
        this.options.pagination = !this.options.pagination;
        var a = this.$toolbar.find('button[name="paginationSwitch"] i');
        this.options.pagination ? a.attr("class", this.options.iconsPrefix + " " + this.options.icons.paginationSwitchDown) : a.attr("class", this.options.iconsPrefix + " " + this.options.icons.paginationSwitchUp);
        this.updatePagination()
    };
    p.prototype.refresh = function(a) {
        a && a.url && (this.options.url = a.url);
        a && a.pageNumber && (this.options.pageNumber = a.pageNumber);
        a && a.pageSize &&
        (this.options.pageSize = a.pageSize);
        this.initServer(a && a.silent, a && a.query, a && a.url);
        this.trigger("refresh", a)
    };
    p.prototype.resetWidth = function() {
        this.options.showHeader && this.options.height && this.fitHeader();
        this.options.showFooter && this.fitFooter()
    };
    p.prototype.showColumn = function(a) {
        this.toggleColumn(f(this.columns, a), !0, !0)
    };
    p.prototype.hideColumn = function(a) {
        this.toggleColumn(f(this.columns, a), !1, !0)
    };
    p.prototype.getHiddenColumns = function() {
        return a.grep(this.columns, function(a) {
            return !a.visible
        })
    };
    p.prototype.getVisibleColumns = function() {
        return a.grep(this.columns, function(a) {
            return a.visible
        })
    };
    p.prototype.toggleAllColumns = function(b) {
        if (a.each(this.columns, function(a, c) {
            this.columns[a].visible = b
        }), this.initHeader(), this.initSearch(), this.initPagination(), this.initBody(), this.options.showColumns) {
            var c = this.$toolbar.find(".keep-open input").prop("disabled", !1);
            c.filter(":checked").length <= this.options.minimumCountColumns && c.filter(":checked").prop("disabled", !0)
        }
    };
    p.prototype.showAllColumns =
        function() {
            this.toggleAllColumns(!0)
        };
    p.prototype.hideAllColumns = function() {
        this.toggleAllColumns(!1)
    };
    p.prototype.filterBy = function(b) {
        this.filterColumns = a.isEmptyObject(b) ? {} : b;
        this.options.pageNumber = 1;
        this.initSearch();
        this.updatePagination()
    };
    p.prototype.scrollTo = function(a) {
        return "string" == typeof a && (a = "bottom" === a ? this.$tableBody[0].scrollHeight : 0), "number" == typeof a && this.$tableBody.scrollTop(a), "undefined" == typeof a ? this.$tableBody.scrollTop() : void 0
    };
    p.prototype.getScrollPosition = function() {
        return this.scrollTo()
    };
    p.prototype.selectPage = function(a) {
        0 < a && a <= this.options.totalPages && (this.options.pageNumber = a, this.updatePagination())
    };
    p.prototype.prevPage = function() {
        1 < this.options.pageNumber && (this.options.pageNumber--, this.updatePagination())
    };
    p.prototype.nextPage = function() {
        this.options.pageNumber < this.options.totalPages && (this.options.pageNumber++, this.updatePagination())
    };
    p.prototype.toggleView = function() {
        this.options.cardView = !this.options.cardView;
        this.initHeader();
        this.initBody();
        this.trigger("toggle",
            this.options.cardView)
    };
    p.prototype.refreshOptions = function(c) {
        b(this.options, c, !0) || (this.options = a.extend(this.options, c), this.trigger("refresh-options", this.options), this.destroy(), this.init())
    };
    p.prototype.resetSearch = function(a) {
        var b = this.$toolbar.find(".search input");
        b.val(a || "");
        this.onSearch({
            currentTarget: b
        })
    };
    p.prototype.expandRow_ = function(a, b) {
        b = this.$body.find(h('> tr[data-index="%s"]', b));
        b.next().is("tr.detail-view") === (a ? !1 : !0) && b.find("> td > .detail-icon").click()
    };
    p.prototype.expandRow =
        function(a) {
            this.expandRow_(!0, a)
        };
    p.prototype.collapseRow = function(a) {
        this.expandRow_(!1, a)
    };
    p.prototype.expandAllRows = function(b) {
        if (b) {
            b = this.$body.find(h('> tr[data-index="%s"]', 0));
            var c = this,
                d = null,
                f = !1,
                g = -1;
            if (b.next().is("tr.detail-view") ? b.next().next().is("tr.detail-view") || (b.next().find(".detail-icon").click(), f = !0) : (b.find("> td > .detail-icon").click(), f = !0), f) try {
                g = setInterval(function() {
                        d = c.$body.find("tr.detail-view").last().find(".detail-icon");
                        0 < d.length ? d.click() : clearInterval(g)
                    },
                    1)
            } catch (e) {
                clearInterval(g)
            }
        } else
            for (b = this.$body.children(), f = 0; f < b.length; f++) this.expandRow_(!0, a(b[f]).data("index"))
    };
    p.prototype.collapseAllRows = function(b) {
        if (b) this.expandRow_(!1, 0);
        else {
            b = this.$body.children();
            for (var c = 0; c < b.length; c++) this.expandRow_(!1, a(b[c]).data("index"))
        }
    };
    p.prototype.updateFormatText = function(a, b) {
        this.options[h("format%s", a)] && ("string" == typeof b ? this.options[h("format%s", a)] = function() {
            return b
        } : "function" == typeof b && (this.options[h("format%s", a)] = b));
        this.initToolbar();
        this.initPagination();
        this.initBody()
    };
    var v = "getOptions getSelections getAllSelections getData load append prepend remove removeAll insertRow updateRow updateCell updateByUniqueId removeByUniqueId getRowByUniqueId showRow hideRow getHiddenRows mergeCells checkAll uncheckAll checkInvert check uncheck checkBy uncheckBy refresh resetView resetWidth destroy showLoading hideLoading showColumn hideColumn getHiddenColumns getVisibleColumns showAllColumns hideAllColumns filterBy scrollTo getScrollPosition selectPage prevPage nextPage togglePagination toggleView refreshOptions resetSearch expandRow collapseRow expandAllRows collapseAllRows updateFormatText".split(" ");
    a.fn.bootstrapTable = function(b) {
        var c, d = Array.prototype.slice.call(arguments, 1);
        return this.each(function() {
            var f = a(this),
                g = f.data("bootstrap.table"),
                e = a.extend({}, p.DEFAULTS, f.data(), "object" == typeof b && b);
            if ("string" == typeof b) {
                if (0 > a.inArray(b, v)) throw Error("Unknown method: " + b);
                if (!g) return;
                c = g[b].apply(g, d);
                "destroy" === b && f.removeData("bootstrap.table")
            }
            g || f.data("bootstrap.table", new p(this, e))
        }), "undefined" == typeof c ? this : c
    };
    a.fn.bootstrapTable.Constructor = p;
    a.fn.bootstrapTable.defaults = p.DEFAULTS;
    a.fn.bootstrapTable.columnDefaults = p.COLUMN_DEFAULTS;
    a.fn.bootstrapTable.locales = p.LOCALES;
    a.fn.bootstrapTable.methods = v;
    a.fn.bootstrapTable.utils = {
        sprintf: h,
        getFieldIndex: f,
        compareObjects: b,
        calculateObjectValue: c,
        getItemField: t,
        objectKeys: function() {
            Object.keys || (Object.keys = function() {
                var a = Object.prototype.hasOwnProperty,
                    b = !{
                        toString: null
                    }.propertyIsEnumerable("toString"),
                    c = "toString toLocaleString valueOf hasOwnProperty isPrototypeOf propertyIsEnumerable constructor".split(" "),
                    d = c.length;
                return function(f) {
                    if ("object" !=
                        typeof f && ("function" != typeof f || null === f)) throw new TypeError("Object.keys called on non-object");
                    var g, e = [];
                    for (g in f) a.call(f, g) && e.push(g);
                    if (b)
                        for (g = 0; d > g; g++) a.call(f, c[g]) && e.push(c[g]);
                    return e
                }
            }())
        },
        isIEBrowser: q
    };
    a(function() {
        a('[data-toggle="table"]').bootstrapTable()
    })
}(jQuery);
! function(a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof module && module.exports ? module.exports = function(l, h) {
        return void 0 === h && (h = "undefined" != typeof window ? require("jquery") : require("jquery")(l)), a(h), h
    } : a(jQuery)
}(function(a) {
    var l = function() {
            if (a && a.fn && a.fn.select2 && a.fn.select2.amd) var e = a.fn.select2.amd;
            return function() {
                if (!e || !e.requirejs) {
                    e ? k = e : e = {};
                    var a, k, d;
                    ! function(c) {
                        function b(a, b) {
                            var c, d, f, g, e, k, h, l, r;
                            b = b && b.split("/");
                            var q = G.map,
                                t = q && q["*"] || {};
                            if (a) {
                                a = a.split("/");
                                c = a.length - 1;
                                G.nodeIdCompat && K.test(a[c]) && (a[c] = a[c].replace(K, ""));
                                "." === a[0].charAt(0) && b && (l = b.slice(0, b.length - 1), a = l.concat(a));
                                for (l = 0; l < a.length; l++) "." === (c = a[l]) ? (a.splice(l, 1), --l) : ".." !== c || 0 === l || 1 === l && ".." === a[2] || ".." === a[l - 1] || 0 < l && (a.splice(l - 1, 2), l -= 2);
                                a = a.join("/")
                            }
                            if ((b || t) && q) {
                                c = a.split("/");
                                for (l = c.length; 0 < l; --l) {
                                    if (d = c.slice(0, l).join("/"), b)
                                        for (r = b.length; 0 < r; --r)
                                            if ((f = q[b.slice(0, r).join("/")]) && (f = f[d])) {
                                                g = f;
                                                e = l;
                                                break
                                            }
                                    if (g) break;
                                    !k && t && t[d] && (k = t[d],
                                        h = l)
                                }!g && k && (g = k, e = h);
                                g && (c.splice(0, e, g), a = c.join("/"))
                            }
                            return a
                        }

                        function g(a, b) {
                            return function() {
                                var d = M.call(arguments, 0);
                                return "string" != typeof d[0] && 1 === d.length && d.push(null), u.apply(c, d.concat([a, b]))
                            }
                        }

                        function e(a) {
                            return function(c) {
                                return b(c, a)
                            }
                        }

                        function h(a) {
                            return function(b) {
                                w[a] = b
                            }
                        }

                        function l(a) {
                            if (C.call(F, a)) {
                                var b = F[a];
                                delete F[a];
                                L[a] = !0;
                                n.apply(c, b)
                            }
                            if (!C.call(w, a) && !C.call(L, a)) throw Error("No " + a);
                            return w[a]
                        }

                        function p(a) {
                            var b, c = a ? a.indexOf("!") : -1;
                            return -1 < c && (b = a.substring(0,
                                c), a = a.substring(c + 1, a.length)), [b, a]
                        }

                        function v(a) {
                            return function() {
                                return G && G.config && G.config[a] || {}
                            }
                        }
                        var n, u, y, x, w = {},
                            F = {},
                            G = {},
                            L = {},
                            C = Object.prototype.hasOwnProperty,
                            M = [].slice,
                            K = /\.js$/;
                        y = function(a, c) {
                            var d, f = p(a),
                                g = f[0];
                            c = c[1];
                            return a = f[1], g && (g = b(g, c), d = l(g)), g ? a = d && d.normalize ? d.normalize(a, e(c)) : b(a, c) : (a = b(a, c), f = p(a), g = f[0], a = f[1], g && (d = l(g))), {
                                f: g ? g + "!" + a : a,
                                n: a,
                                pr: g,
                                p: d
                            }
                        };
                        x = {
                            require: function(a) {
                                return g(a)
                            },
                            exports: function(a) {
                                var b = w[a];
                                return void 0 !== b ? b : w[a] = {}
                            },
                            module: function(a) {
                                return {
                                    id: a,
                                    uri: "",
                                    exports: w[a],
                                    config: v(a)
                                }
                            }
                        };
                        n = function(a, b, d, f) {
                            var e, k, r, n, v, u, O = [];
                            k = typeof d;
                            if (f = f || a, v = f ? p(f) : [], "undefined" === k || "function" === k) {
                                b = !b.length && d.length ? ["require", "exports", "module"] : b;
                                for (n = 0; n < b.length; n += 1)
                                    if (r = y(b[n], v), "require" === (k = r.f)) O[n] = x.require(a);
                                    else if ("exports" === k) O[n] = x.exports(a), u = !0;
                                    else if ("module" === k) e = O[n] = x.module(a);
                                    else if (C.call(w, k) || C.call(F, k) || C.call(L, k)) O[n] = l(k);
                                    else {
                                        if (!r.p) throw Error(a + " missing " + k);
                                        r.p.load(r.n, g(f, !0), h(k), {});
                                        O[n] = w[k]
                                    }
                                b = d ?
                                    d.apply(w[a], O) : void 0;
                                a && (e && e.exports !== c && e.exports !== w[a] ? w[a] = e.exports : b === c && u || (w[a] = b))
                            } else a && (w[a] = d)
                        };
                        a = k = u = function(a, b, d, f, g) {
                            if ("string" == typeof a) return x[a] ? x[a](b) : l(y(a, b ? p(b) : []).f);
                            if (!a.splice) {
                                if (G = a, G.deps && u(G.deps, G.callback), !b) return;
                                b.splice ? (a = b, b = d, d = null) : a = c
                            }
                            return b = b || function() {}, "function" == typeof d && (d = f, f = g), f ? n(c, a, b, d) : setTimeout(function() {
                                n(c, a, b, d)
                            }, 4), u
                        };
                        u.config = function(a) {
                            return u(a)
                        };
                        a._defined = w;
                        d = function(a, b, c) {
                            if ("string" != typeof a) throw Error("See almond README: incorrect module build, no module name");
                            b.splice || (c = b, b = []);
                            C.call(w, a) || C.call(F, a) || (F[a] = [a, b, c])
                        };
                        d.amd = {
                            jQuery: !0
                        }
                    }();
                    e.requirejs = a;
                    e.require = k;
                    e.define = d
                }
            }(), e.define("almond", function() {}), e.define("jquery", [], function() {
                var f = a || $;
                return null == f && console && console.error && console.error("Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."), f
            }), e.define("select2/utils", ["jquery"], function(a) {
                function e(a) {
                    a = a.prototype;
                    var c = [],
                        d;
                    for (d in a) "function" ==
                    typeof a[d] && "constructor" !== d && c.push(d);
                    return c
                }
                var d = {
                        Extend: function(a, c) {
                            function d() {
                                this.constructor = a
                            }
                            var f = {}.hasOwnProperty,
                                e;
                            for (e in c) f.call(c, e) && (a[e] = c[e]);
                            return d.prototype = c.prototype, a.prototype = new d, a.__super__ = c.prototype, a
                        },
                        Decorate: function(a, c) {
                            function d() {
                                var f = Array.prototype.unshift,
                                    e = a.prototype.constructor;
                                0 < c.prototype.constructor.length && (f.call(arguments, a.prototype.constructor), e = c.prototype.constructor);
                                e.apply(this, arguments)
                            }
                            var f = e(c),
                                h = e(a);
                            c.displayName =
                                a.displayName;
                            d.prototype = new function() {
                                this.constructor = d
                            };
                            for (var l = 0; l < h.length; l++) {
                                var v = h[l];
                                d.prototype[v] = a.prototype[v]
                            }
                            h = function(a) {
                                var b = function() {};
                                a in d.prototype && (b = d.prototype[a]);
                                var f = c.prototype[a];
                                return function() {
                                    return Array.prototype.unshift.call(arguments, b), f.apply(this, arguments)
                                }
                            };
                            for (l = 0; l < f.length; l++) v = f[l], d.prototype[v] = h(v);
                            return d
                        }
                    },
                    c = function() {
                        this.listeners = {}
                    };
                return c.prototype.on = function(a, c) {
                    this.listeners = this.listeners || {};
                    a in this.listeners ? this.listeners[a].push(c) :
                        this.listeners[a] = [c]
                }, c.prototype.trigger = function(a) {
                    var c = Array.prototype.slice,
                        d = c.call(arguments, 1);
                    this.listeners = this.listeners || {};
                    null == d && (d = []);
                    0 === d.length && d.push({});
                    d[0]._type = a;
                    a in this.listeners && this.invoke(this.listeners[a], c.call(arguments, 1));
                    "*" in this.listeners && this.invoke(this.listeners["*"], arguments)
                }, c.prototype.invoke = function(a, c) {
                    for (var d = 0, f = a.length; d < f; d++) a[d].apply(this, c)
                }, d.Observable = c, d.generateChars = function(a) {
                    for (var c = "", d = 0; d < a; d++) c += Math.floor(36 * Math.random()).toString(36);
                    return c
                }, d.bind = function(a, c) {
                    return function() {
                        a.apply(c, arguments)
                    }
                }, d._convertData = function(a) {
                    for (var c in a) {
                        var d = c.split("-"),
                            f = a;
                        if (1 !== d.length) {
                            for (var e = 0; e < d.length; e++) {
                                var k = d[e],
                                    k = k.substring(0, 1).toLowerCase() + k.substring(1);
                                k in f || (f[k] = {});
                                e == d.length - 1 && (f[k] = a[c]);
                                f = f[k]
                            }
                            delete a[c]
                        }
                    }
                    return a
                }, d.hasScroll = function(b, c) {
                    b = a(c);
                    var d = c.style.overflowX,
                        e = c.style.overflowY;
                    return (d !== e || "hidden" !== e && "visible" !== e) && ("scroll" === d || "scroll" === e || b.innerHeight() < c.scrollHeight || b.innerWidth() <
                        c.scrollWidth)
                }, d.escapeMarkup = function(a) {
                    var c = {
                        "\\": "&#92;",
                        "&": "&amp;",
                        "<": "&lt;",
                        ">": "&gt;",
                        '"': "&quot;",
                        "'": "&#39;",
                        "/": "&#47;"
                    };
                    return "string" != typeof a ? a : String(a).replace(/[&<>"'\/\\]/g, function(a) {
                        return c[a]
                    })
                }, d.appendMany = function(b, c) {
                    if ("1.7" === a.fn.jquery.substr(0, 3)) {
                        var d = a();
                        a.map(c, function(a) {
                            d = d.add(a)
                        });
                        c = d
                    }
                    b.append(c)
                }, d
            }), e.define("select2/results", ["jquery", "./utils"], function(a, e) {
                function d(a, b, f) {
                    this.$element = a;
                    this.data = f;
                    this.options = b;
                    d.__super__.constructor.call(this)
                }
                return e.Extend(d, e.Observable), d.prototype.render = function() {
                    var c = a('<ul class="select2-results__options" role="tree"></ul>');
                    return this.options.get("multiple") && c.attr("aria-multiselectable", "true"), this.$results = c, c
                }, d.prototype.clear = function() {
                    this.$results.empty()
                }, d.prototype.displayMessage = function(c) {
                    var b = this.options.get("escapeMarkup");
                    this.clear();
                    this.hideLoading();
                    var d = a('<li role="treeitem" aria-live="assertive" class="select2-results__option"></li>'),
                        e = this.options.get("translations").get(c.message);
                    d.append(b(e(c.args)));
                    d[0].className += " select2-results__message";
                    this.$results.append(d)
                }, d.prototype.hideMessages = function() {
                    this.$results.find(".select2-results__message").remove()
                }, d.prototype.append = function(a) {
                    this.hideLoading();
                    var b = [];
                    if (null == a.results || 0 === a.results.length) return void(0 === this.$results.children().length && this.trigger("results:message", {
                        message: "noResults"
                    }));
                    a.results = this.sort(a.results);
                    for (var d = 0; d < a.results.length; d++) {
                        var f = this.option(a.results[d]);
                        b.push(f)
                    }
                    this.$results.append(b)
                },
                    d.prototype.position = function(a, b) {
                        b.find(".select2-results").append(a)
                    }, d.prototype.sort = function(a) {
                    return this.options.get("sorter")(a)
                }, d.prototype.highlightFirstItem = function() {
                    var a = this.$results.find(".select2-results__option[aria-selected]"),
                        b = a.filter("[aria-selected=true]");
                    0 < b.length ? b.first().trigger("mouseenter") : a.first().trigger("mouseenter");
                    this.ensureHighlightVisible()
                }, d.prototype.setClasses = function() {
                    var c = this;
                    this.data.current(function(b) {
                        var d = a.map(b, function(a) {
                            return a.id.toString()
                        });
                        c.$results.find(".select2-results__option[aria-selected]").each(function() {
                            var b = a(this),
                                c = a.data(this, "data"),
                                e = "" + c.id;
                            null != c.element && c.element.selected || null == c.element && -1 < a.inArray(e, d) ? b.attr("aria-selected", "true") : b.attr("aria-selected", "false")
                        })
                    })
                }, d.prototype.showLoading = function(a) {
                    this.hideLoading();
                    a = {
                        disabled: !0,
                        loading: !0,
                        text: this.options.get("translations").get("searching")(a)
                    };
                    a = this.option(a);
                    a.className += " loading-results";
                    this.$results.prepend(a)
                }, d.prototype.hideLoading = function() {
                    this.$results.find(".loading-results").remove()
                },
                    d.prototype.option = function(c) {
                        var b = document.createElement("li");
                        b.className = "select2-results__option";
                        var d = {
                            role: "treeitem",
                            "aria-selected": "false"
                        };
                        c.disabled && (delete d["aria-selected"], d["aria-disabled"] = "true");
                        null == c.id && delete d["aria-selected"];
                        null != c._resultId && (b.id = c._resultId);
                        c.title && (b.title = c.title);
                        c.children && (d.role = "group", d["aria-label"] = c.text, delete d["aria-selected"]);
                        for (var e in d) b.setAttribute(e, d[e]);
                        if (c.children) {
                            d = a(b);
                            e = document.createElement("strong");
                            e.className =
                                "select2-results__group";
                            a(e);
                            this.template(c, e);
                            for (var k = [], h = 0; h < c.children.length; h++) {
                                var l = this.option(c.children[h]);
                                k.push(l)
                            }
                            h = a("<ul></ul>", {
                                class: "select2-results__options select2-results__options--nested"
                            });
                            h.append(k);
                            d.append(e);
                            d.append(h)
                        } else this.template(c, b);
                        return a.data(b, "data", c), b
                    }, d.prototype.bind = function(c, b) {
                    var d = this;
                    this.$results.attr("id", c.id + "-results");
                    c.on("results:all", function(a) {
                        d.clear();
                        d.append(a.data);
                        c.isOpen() && (d.setClasses(), d.highlightFirstItem())
                    });
                    c.on("results:append", function(a) {
                        d.append(a.data);
                        c.isOpen() && d.setClasses()
                    });
                    c.on("query", function(a) {
                        d.hideMessages();
                        d.showLoading(a)
                    });
                    c.on("select", function() {
                        c.isOpen() && (d.setClasses(), d.highlightFirstItem())
                    });
                    c.on("unselect", function() {
                        c.isOpen() && (d.setClasses(), d.highlightFirstItem())
                    });
                    c.on("open", function() {
                        d.$results.attr("aria-expanded", "true");
                        d.$results.attr("aria-hidden", "false");
                        d.setClasses();
                        d.ensureHighlightVisible()
                    });
                    c.on("close", function() {
                        d.$results.attr("aria-expanded",
                            "false");
                        d.$results.attr("aria-hidden", "true");
                        d.$results.removeAttr("aria-activedescendant")
                    });
                    c.on("results:toggle", function() {
                        var a = d.getHighlightedResults();
                        0 !== a.length && a.trigger("mouseup")
                    });
                    c.on("results:select", function() {
                        var a = d.getHighlightedResults();
                        if (0 !== a.length) {
                            var b = a.data("data");
                            "true" == a.attr("aria-selected") ? d.trigger("close", {}) : d.trigger("select", {
                                data: b
                            })
                        }
                    });
                    c.on("results:previous", function() {
                        var a = d.getHighlightedResults(),
                            b = d.$results.find("[aria-selected]"),
                            c = b.index(a);
                        if (0 !== c) {
                            --c;
                            0 === a.length && (c = 0);
                            b = b.eq(c);
                            b.trigger("mouseenter");
                            var a = d.$results.offset().top,
                                b = b.offset().top,
                                f = d.$results.scrollTop() + (b - a);
                            0 === c ? d.$results.scrollTop(0) : 0 > b - a && d.$results.scrollTop(f)
                        }
                    });
                    c.on("results:next", function() {
                        var a = d.getHighlightedResults(),
                            b = d.$results.find("[aria-selected]"),
                            a = b.index(a) + 1;
                        if (!(a >= b.length)) {
                            var c = b.eq(a);
                            c.trigger("mouseenter");
                            var b = d.$results.offset().top + d.$results.outerHeight(!1),
                                c = c.offset().top + c.outerHeight(!1),
                                f = d.$results.scrollTop() + c -
                                    b;
                            0 === a ? d.$results.scrollTop(0) : c > b && d.$results.scrollTop(f)
                        }
                    });
                    c.on("results:focus", function(a) {
                        a.element.addClass("select2-results__option--highlighted")
                    });
                    c.on("results:message", function(a) {
                        d.displayMessage(a)
                    });
                    a.fn.mousewheel && this.$results.on("mousewheel", function(a) {
                        var b = d.$results.scrollTop(),
                            c = d.$results.get(0).scrollHeight - b + a.deltaY,
                            b = 0 < a.deltaY && 0 >= b - a.deltaY,
                            c = 0 > a.deltaY && c <= d.$results.height();
                        b ? (d.$results.scrollTop(0), a.preventDefault(), a.stopPropagation()) : c && (d.$results.scrollTop(d.$results.get(0).scrollHeight -
                            d.$results.height()), a.preventDefault(), a.stopPropagation())
                    });
                    this.$results.on("mouseup", ".select2-results__option[aria-selected]", function(b) {
                        var c = a(this),
                            e = c.data("data");
                        if ("true" === c.attr("aria-selected")) return void(d.options.get("multiple") ? d.trigger("unselect", {
                            originalEvent: b,
                            data: e
                        }) : d.trigger("close", {}));
                        d.trigger("select", {
                            originalEvent: b,
                            data: e
                        })
                    });
                    this.$results.on("mouseenter", ".select2-results__option[aria-selected]", function(b) {
                        b = a(this).data("data");
                        d.getHighlightedResults().removeClass("select2-results__option--highlighted");
                        d.trigger("results:focus", {
                            data: b,
                            element: a(this)
                        })
                    })
                }, d.prototype.getHighlightedResults = function() {
                    return this.$results.find(".select2-results__option--highlighted")
                }, d.prototype.destroy = function() {
                    this.$results.remove()
                }, d.prototype.ensureHighlightVisible = function() {
                    var a = this.getHighlightedResults();
                    if (0 !== a.length) {
                        var b = this.$results.find("[aria-selected]").index(a),
                            d = this.$results.offset().top,
                            f = a.offset().top,
                            e = this.$results.scrollTop() + (f - d),
                            d = f - d,
                            e = e - 2 * a.outerHeight(!1);
                        2 >= b ? this.$results.scrollTop(0) :
                            (d > this.$results.outerHeight() || 0 > d) && this.$results.scrollTop(e)
                    }
                }, d.prototype.template = function(c, b) {
                    var d = this.options.get("templateResult"),
                        e = this.options.get("escapeMarkup");
                    c = d(c, b);
                    null == c ? b.style.display = "none" : "string" == typeof c ? b.innerHTML = e(c) : a(b).append(c)
                }, d
            }), e.define("select2/keys", [], function() {
                return {
                    BACKSPACE: 8,
                    TAB: 9,
                    ENTER: 13,
                    SHIFT: 16,
                    CTRL: 17,
                    ALT: 18,
                    ESC: 27,
                    SPACE: 32,
                    PAGE_UP: 33,
                    PAGE_DOWN: 34,
                    END: 35,
                    HOME: 36,
                    LEFT: 37,
                    UP: 38,
                    RIGHT: 39,
                    DOWN: 40,
                    DELETE: 46
                }
            }), e.define("select2/selection/base", ["jquery", "../utils", "../keys"], function(a, e, d) {
                function c(a, d) {
                    this.$element = a;
                    this.options = d;
                    c.__super__.constructor.call(this)
                }
                return e.Extend(c, e.Observable), c.prototype.render = function() {
                    var b = a('<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>');
                    return this._tabindex = 0, null != this.$element.data("old-tabindex") ? this._tabindex = this.$element.data("old-tabindex") : null != this.$element.attr("tabindex") && (this._tabindex = this.$element.attr("tabindex")),
                        b.attr("title", this.$element.attr("title")), b.attr("tabindex", this._tabindex), this.$selection = b, b
                }, c.prototype.bind = function(a, c) {
                    var f = this,
                        e = (a.id, a.id + "-results");
                    this.container = a;
                    this.$selection.on("focus", function(a) {
                        f.trigger("focus", a)
                    });
                    this.$selection.on("blur", function(a) {
                        f._handleBlur(a)
                    });
                    this.$selection.on("keydown", function(a) {
                        f.trigger("keypress", a);
                        a.which === d.SPACE && a.preventDefault()
                    });
                    a.on("results:focus", function(a) {
                        f.$selection.attr("aria-activedescendant", a.data._resultId)
                    });
                    a.on("selection:update", function(a) {
                        f.update(a.data)
                    });
                    a.on("open", function() {
                        f.$selection.attr("aria-expanded", "true");
                        f.$selection.attr("aria-owns", e);
                        f._attachCloseHandler(a)
                    });
                    a.on("close", function() {
                        f.$selection.attr("aria-expanded", "false");
                        f.$selection.removeAttr("aria-activedescendant");
                        f.$selection.removeAttr("aria-owns");
                        f.$selection.focus();
                        f._detachCloseHandler(a)
                    });
                    a.on("enable", function() {
                        f.$selection.attr("tabindex", f._tabindex)
                    });
                    a.on("disable", function() {
                        f.$selection.attr("tabindex",
                            "-1")
                    })
                }, c.prototype._handleBlur = function(b) {
                    var c = this;
                    window.setTimeout(function() {
                        document.activeElement == c.$selection[0] || a.contains(c.$selection[0], document.activeElement) || c.trigger("blur", b)
                    }, 1)
                }, c.prototype._attachCloseHandler = function(b) {
                    a(document.body).on("mousedown.select2." + b.id, function(b) {
                        var c = a(b.target).closest(".select2");
                        a(".select2.select2-container--open").each(function() {
                            var b = a(this);
                            this != c[0] && b.data("element").select2("close")
                        })
                    })
                }, c.prototype._detachCloseHandler = function(b) {
                    a(document.body).off("mousedown.select2." +
                        b.id)
                }, c.prototype.position = function(a, c) {
                    c.find(".selection").append(a)
                }, c.prototype.destroy = function() {
                    this._detachCloseHandler(this.container)
                }, c.prototype.update = function(a) {
                    throw Error("The `update` method must be defined in child classes.");
                }, c
            }), e.define("select2/selection/single", ["jquery", "./base", "../utils", "../keys"], function(a, e, d, c) {
                function b() {
                    b.__super__.constructor.apply(this, arguments)
                }
                return d.Extend(b, e), b.prototype.render = function() {
                    var a = b.__super__.render.call(this);
                    return a.addClass("select2-selection--single"),
                        a.html('<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'), a
                }, b.prototype.bind = function(a, c) {
                    var d = this;
                    b.__super__.bind.apply(this, arguments);
                    var f = a.id + "-container";
                    this.$selection.find(".select2-selection__rendered").attr("id", f);
                    this.$selection.attr("aria-labelledby", f);
                    this.$selection.on("mousedown", function(a) {
                        1 === a.which && d.trigger("toggle", {
                            originalEvent: a
                        })
                    });
                    this.$selection.on("focus", function(a) {});
                    this.$selection.on("blur", function(a) {});
                    a.on("focus", function(b) {
                        a.isOpen() || d.$selection.focus()
                    });
                    a.on("selection:update", function(a) {
                        d.update(a.data)
                    })
                }, b.prototype.clear = function() {
                    this.$selection.find(".select2-selection__rendered").empty()
                }, b.prototype.display = function(a, b) {
                    var c = this.options.get("templateSelection");
                    return this.options.get("escapeMarkup")(c(a, b))
                }, b.prototype.selectionContainer = function() {
                    return a("<span></span>")
                }, b.prototype.update = function(a) {
                    if (0 === a.length) return void this.clear();
                    a = a[0];
                    var b = this.$selection.find(".select2-selection__rendered"),
                        c = this.display(a, b);
                    b.empty().append(c);
                    b.prop("title", a.title || a.text)
                }, b
            }), e.define("select2/selection/multiple", ["jquery", "./base", "../utils"], function(a, e, d) {
                function c(a, d) {
                    c.__super__.constructor.apply(this, arguments)
                }
                return d.Extend(c, e), c.prototype.render = function() {
                    var a = c.__super__.render.call(this);
                    return a.addClass("select2-selection--multiple"), a.html('<ul class="select2-selection__rendered"></ul>'), a
                }, c.prototype.bind =
                    function(b, d) {
                        var e = this;
                        c.__super__.bind.apply(this, arguments);
                        this.$selection.on("click", function(a) {
                            e.trigger("toggle", {
                                originalEvent: a
                            })
                        });
                        this.$selection.on("click", ".select2-selection__choice__remove", function(b) {
                            if (!e.options.get("disabled")) {
                                var c = a(this).parent().data("data");
                                e.trigger("unselect", {
                                    originalEvent: b,
                                    data: c
                                })
                            }
                        })
                    }, c.prototype.clear = function() {
                    this.$selection.find(".select2-selection__rendered").empty()
                }, c.prototype.display = function(a, c) {
                    var d = this.options.get("templateSelection");
                    return this.options.get("escapeMarkup")(d(a, c))
                }, c.prototype.selectionContainer = function() {
                    return a('<li class="select2-selection__choice"><span class="select2-selection__choice__remove" role="presentation">&times;</span></li>')
                }, c.prototype.update = function(a) {
                    if (this.clear(), 0 !== a.length) {
                        for (var c = [], f = 0; f < a.length; f++) {
                            var e = a[f],
                                k = this.selectionContainer(),
                                h = this.display(e, k);
                            k.append(h);
                            k.prop("title", e.title || e.text);
                            k.data("data", e);
                            c.push(k)
                        }
                        a = this.$selection.find(".select2-selection__rendered");
                        d.appendMany(a, c)
                    }
                }, c
            }), e.define("select2/selection/placeholder", ["../utils"], function(a) {
                function e(a, c, b) {
                    this.placeholder = this.normalizePlaceholder(b.get("placeholder"));
                    a.call(this, c, b)
                }
                return e.prototype.normalizePlaceholder = function(a, c) {
                    return "string" == typeof c && (c = {
                        id: "",
                        text: c
                    }), c
                }, e.prototype.createPlaceholder = function(a, c) {
                    a = this.selectionContainer();
                    return a.html(this.display(c)), a.addClass("select2-selection__placeholder").removeClass("select2-selection__choice"), a
                }, e.prototype.update =
                    function(a, c) {
                        var b = 1 == c.length && c[0].id != this.placeholder.id;
                        if (1 < c.length || b) return a.call(this, c);
                        this.clear();
                        a = this.createPlaceholder(this.placeholder);
                        this.$selection.find(".select2-selection__rendered").append(a)
                    }, e
            }), e.define("select2/selection/allowClear", ["jquery", "../keys"], function(a, e) {
                function d() {}
                return d.prototype.bind = function(a, b, d) {
                    var f = this;
                    a.call(this, b, d);
                    null == this.placeholder && this.options.get("debug") && window.console && console.error && console.error("Select2: The `allowClear` option should be used in combination with the `placeholder` option.");
                    this.$selection.on("mousedown", ".select2-selection__clear", function(a) {
                        f._handleClear(a)
                    });
                    b.on("keypress", function(a) {
                        f._handleKeyboardClear(a, b)
                    })
                }, d.prototype._handleClear = function(a, b) {
                    if (!this.options.get("disabled") && (a = this.$selection.find(".select2-selection__clear"), 0 !== a.length)) {
                        b.stopPropagation();
                        b = a.data("data");
                        for (a = 0; a < b.length; a++) {
                            var d = {
                                data: b[a]
                            };
                            if (this.trigger("unselect", d), d.prevented) return
                        }
                        this.$element.val(this.placeholder.id).trigger("change");
                        this.trigger("toggle", {})
                    }
                },
                    d.prototype._handleKeyboardClear = function(a, b, d) {
                        d.isOpen() || b.which != e.DELETE && b.which != e.BACKSPACE || this._handleClear(b)
                    }, d.prototype.update = function(c, b) {
                    (c.call(this, b), 0 < this.$selection.find(".select2-selection__placeholder").length || 0 === b.length) || (c = a('<span class="select2-selection__clear">&times;</span>'), c.data("data", b), this.$selection.find(".select2-selection__rendered").prepend(c))
                }, d
            }), e.define("select2/selection/search", ["jquery", "../utils", "../keys"], function(a, e, d) {
                function c(a, c,
                           d) {
                    a.call(this, c, d)
                }
                return c.prototype.render = function(b) {
                    var c = a('<li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="textbox" aria-autocomplete="list" /></li>');
                    this.$searchContainer = c;
                    this.$search = c.find("input");
                    b = b.call(this);
                    return this._transferTabIndex(), b
                }, c.prototype.bind = function(a, c, f) {
                    var e = this;
                    a.call(this, c, f);
                    c.on("open", function() {
                        e.$search.trigger("focus")
                    });
                    c.on("close", function() {
                        e.$search.val("");
                        e.$search.removeAttr("aria-activedescendant");
                        e.$search.trigger("focus")
                    });
                    c.on("enable", function() {
                        e.$search.prop("disabled", !1);
                        e._transferTabIndex()
                    });
                    c.on("disable", function() {
                        e.$search.prop("disabled", !0)
                    });
                    c.on("focus", function(a) {
                        e.$search.trigger("focus")
                    });
                    c.on("results:focus", function(a) {
                        e.$search.attr("aria-activedescendant", a.id)
                    });
                    this.$selection.on("focusin", ".select2-search--inline", function(a) {
                        e.trigger("focus", a)
                    });
                    this.$selection.on("focusout",
                        ".select2-search--inline",
                        function(a) {
                            e._handleBlur(a)
                        });
                    this.$selection.on("keydown", ".select2-search--inline", function(a) {
                        if (a.stopPropagation(), e.trigger("keypress", a), e._keyUpPrevented = a.isDefaultPrevented(), a.which === d.BACKSPACE && "" === e.$search.val()) {
                            var b = e.$searchContainer.prev(".select2-selection__choice");
                            0 < b.length && (b = b.data("data"), e.searchRemoveChoice(b), a.preventDefault())
                        }
                    });
                    var k = (a = document.documentMode) && 11 >= a;
                    this.$selection.on("input.searchcheck", ".select2-search--inline", function(a) {
                        if (k) return void e.$selection.off("input.search input.searchcheck");
                        e.$selection.off("keyup.search")
                    });
                    this.$selection.on("keyup.search input.search", ".select2-search--inline", function(a) {
                        if (k && "input" === a.type) return void e.$selection.off("input.search input.searchcheck");
                        var b = a.which;
                        b != d.SHIFT && b != d.CTRL && b != d.ALT && b != d.TAB && e.handleSearch(a)
                    })
                }, c.prototype._transferTabIndex = function(a) {
                    this.$search.attr("tabindex", this.$selection.attr("tabindex"));
                    this.$selection.attr("tabindex", "-1")
                }, c.prototype.createPlaceholder = function(a, c) {
                    this.$search.attr("placeholder",
                        c.text)
                }, c.prototype.update = function(a, c) {
                    var d = this.$search[0] == document.activeElement;
                    this.$search.attr("placeholder", "");
                    a.call(this, c);
                    this.$selection.find(".select2-selection__rendered").append(this.$searchContainer);
                    this.resizeSearch();
                    d && this.$search.focus()
                }, c.prototype.handleSearch = function() {
                    if (this.resizeSearch(), !this._keyUpPrevented) {
                        var a = this.$search.val();
                        this.trigger("query", {
                            term: a
                        })
                    }
                    this._keyUpPrevented = !1
                }, c.prototype.searchRemoveChoice = function(a, c) {
                    this.trigger("unselect", {
                        data: c
                    });
                    this.$search.val(c.text);
                    this.handleSearch()
                }, c.prototype.resizeSearch = function() {
                    this.$search.css("width", "25px");
                    var a;
                    a = "" !== this.$search.attr("placeholder") ? this.$selection.find(".select2-selection__rendered").innerWidth() : .75 * (this.$search.val().length + 1) + "em";
                    this.$search.css("width", a)
                }, c
            }), e.define("select2/selection/eventRelay", ["jquery"], function(a) {
                function e() {}
                return e.prototype.bind = function(d, c, b) {
                    var e = this,
                        k = "open opening close closing select selecting unselect unselecting".split(" "),
                        h = ["opening", "closing", "selecting", "unselecting"];
                    d.call(this, c, b);
                    c.on("*", function(b, c) {
                        if (-1 !== a.inArray(b, k)) {
                            c = c || {};
                            var d = a.Event("select2:" + b, {
                                params: c
                            });
                            e.$element.trigger(d); - 1 !== a.inArray(b, h) && (c.prevented = d.isDefaultPrevented())
                        }
                    })
                }, e
            }), e.define("select2/translation", ["jquery", "require"], function(a, e) {
                function d(a) {
                    this.dict = a || {}
                }
                return d.prototype.all = function() {
                    return this.dict
                }, d.prototype.get = function(a) {
                    return this.dict[a]
                }, d.prototype.extend = function(c) {
                    this.dict = a.extend({}, c.all(),
                        this.dict)
                }, d._cache = {}, d.loadPath = function(a) {
                    if (!(a in d._cache)) {
                        var b = e(a);
                        d._cache[a] = b
                    }
                    return new d(d._cache[a])
                }, d
            }), e.define("select2/diacritics", [], function() {
                return {
                    "\u24b6": "A",
                    "\uff21": "A",
                    "\u00c0": "A",
                    "\u00c1": "A",
                    "\u00c2": "A",
                    "\u1ea6": "A",
                    "\u1ea4": "A",
                    "\u1eaa": "A",
                    "\u1ea8": "A",
                    "\u00c3": "A",
                    "\u0100": "A",
                    "\u0102": "A",
                    "\u1eb0": "A",
                    "\u1eae": "A",
                    "\u1eb4": "A",
                    "\u1eb2": "A",
                    "\u0226": "A",
                    "\u01e0": "A",
                    "\u00c4": "A",
                    "\u01de": "A",
                    "\u1ea2": "A",
                    "\u00c5": "A",
                    "\u01fa": "A",
                    "\u01cd": "A",
                    "\u0200": "A",
                    "\u0202": "A",
                    "\u1ea0": "A",
                    "\u1eac": "A",
                    "\u1eb6": "A",
                    "\u1e00": "A",
                    "\u0104": "A",
                    "\u023a": "A",
                    "\u2c6f": "A",
                    "\ua732": "AA",
                    "\u00c6": "AE",
                    "\u01fc": "AE",
                    "\u01e2": "AE",
                    "\ua734": "AO",
                    "\ua736": "AU",
                    "\ua738": "AV",
                    "\ua73a": "AV",
                    "\ua73c": "AY",
                    "\u24b7": "B",
                    "\uff22": "B",
                    "\u1e02": "B",
                    "\u1e04": "B",
                    "\u1e06": "B",
                    "\u0243": "B",
                    "\u0182": "B",
                    "\u0181": "B",
                    "\u24b8": "C",
                    "\uff23": "C",
                    "\u0106": "C",
                    "\u0108": "C",
                    "\u010a": "C",
                    "\u010c": "C",
                    "\u00c7": "C",
                    "\u1e08": "C",
                    "\u0187": "C",
                    "\u023b": "C",
                    "\ua73e": "C",
                    "\u24b9": "D",
                    "\uff24": "D",
                    "\u1e0a": "D",
                    "\u010e": "D",
                    "\u1e0c": "D",
                    "\u1e10": "D",
                    "\u1e12": "D",
                    "\u1e0e": "D",
                    "\u0110": "D",
                    "\u018b": "D",
                    "\u018a": "D",
                    "\u0189": "D",
                    "\ua779": "D",
                    "\u01f1": "DZ",
                    "\u01c4": "DZ",
                    "\u01f2": "Dz",
                    "\u01c5": "Dz",
                    "\u24ba": "E",
                    "\uff25": "E",
                    "\u00c8": "E",
                    "\u00c9": "E",
                    "\u00ca": "E",
                    "\u1ec0": "E",
                    "\u1ebe": "E",
                    "\u1ec4": "E",
                    "\u1ec2": "E",
                    "\u1ebc": "E",
                    "\u0112": "E",
                    "\u1e14": "E",
                    "\u1e16": "E",
                    "\u0114": "E",
                    "\u0116": "E",
                    "\u00cb": "E",
                    "\u1eba": "E",
                    "\u011a": "E",
                    "\u0204": "E",
                    "\u0206": "E",
                    "\u1eb8": "E",
                    "\u1ec6": "E",
                    "\u0228": "E",
                    "\u1e1c": "E",
                    "\u0118": "E",
                    "\u1e18": "E",
                    "\u1e1a": "E",
                    "\u0190": "E",
                    "\u018e": "E",
                    "\u24bb": "F",
                    "\uff26": "F",
                    "\u1e1e": "F",
                    "\u0191": "F",
                    "\ua77b": "F",
                    "\u24bc": "G",
                    "\uff27": "G",
                    "\u01f4": "G",
                    "\u011c": "G",
                    "\u1e20": "G",
                    "\u011e": "G",
                    "\u0120": "G",
                    "\u01e6": "G",
                    "\u0122": "G",
                    "\u01e4": "G",
                    "\u0193": "G",
                    "\ua7a0": "G",
                    "\ua77d": "G",
                    "\ua77e": "G",
                    "\u24bd": "H",
                    "\uff28": "H",
                    "\u0124": "H",
                    "\u1e22": "H",
                    "\u1e26": "H",
                    "\u021e": "H",
                    "\u1e24": "H",
                    "\u1e28": "H",
                    "\u1e2a": "H",
                    "\u0126": "H",
                    "\u2c67": "H",
                    "\u2c75": "H",
                    "\ua78d": "H",
                    "\u24be": "I",
                    "\uff29": "I",
                    "\u00cc": "I",
                    "\u00cd": "I",
                    "\u00ce": "I",
                    "\u0128": "I",
                    "\u012a": "I",
                    "\u012c": "I",
                    "\u0130": "I",
                    "\u00cf": "I",
                    "\u1e2e": "I",
                    "\u1ec8": "I",
                    "\u01cf": "I",
                    "\u0208": "I",
                    "\u020a": "I",
                    "\u1eca": "I",
                    "\u012e": "I",
                    "\u1e2c": "I",
                    "\u0197": "I",
                    "\u24bf": "J",
                    "\uff2a": "J",
                    "\u0134": "J",
                    "\u0248": "J",
                    "\u24c0": "K",
                    "\uff2b": "K",
                    "\u1e30": "K",
                    "\u01e8": "K",
                    "\u1e32": "K",
                    "\u0136": "K",
                    "\u1e34": "K",
                    "\u0198": "K",
                    "\u2c69": "K",
                    "\ua740": "K",
                    "\ua742": "K",
                    "\ua744": "K",
                    "\ua7a2": "K",
                    "\u24c1": "L",
                    "\uff2c": "L",
                    "\u013f": "L",
                    "\u0139": "L",
                    "\u013d": "L",
                    "\u1e36": "L",
                    "\u1e38": "L",
                    "\u013b": "L",
                    "\u1e3c": "L",
                    "\u1e3a": "L",
                    "\u0141": "L",
                    "\u023d": "L",
                    "\u2c62": "L",
                    "\u2c60": "L",
                    "\ua748": "L",
                    "\ua746": "L",
                    "\ua780": "L",
                    "\u01c7": "LJ",
                    "\u01c8": "Lj",
                    "\u24c2": "M",
                    "\uff2d": "M",
                    "\u1e3e": "M",
                    "\u1e40": "M",
                    "\u1e42": "M",
                    "\u2c6e": "M",
                    "\u019c": "M",
                    "\u24c3": "N",
                    "\uff2e": "N",
                    "\u01f8": "N",
                    "\u0143": "N",
                    "\u00d1": "N",
                    "\u1e44": "N",
                    "\u0147": "N",
                    "\u1e46": "N",
                    "\u0145": "N",
                    "\u1e4a": "N",
                    "\u1e48": "N",
                    "\u0220": "N",
                    "\u019d": "N",
                    "\ua790": "N",
                    "\ua7a4": "N",
                    "\u01ca": "NJ",
                    "\u01cb": "Nj",
                    "\u24c4": "O",
                    "\uff2f": "O",
                    "\u00d2": "O",
                    "\u00d3": "O",
                    "\u00d4": "O",
                    "\u1ed2": "O",
                    "\u1ed0": "O",
                    "\u1ed6": "O",
                    "\u1ed4": "O",
                    "\u00d5": "O",
                    "\u1e4c": "O",
                    "\u022c": "O",
                    "\u1e4e": "O",
                    "\u014c": "O",
                    "\u1e50": "O",
                    "\u1e52": "O",
                    "\u014e": "O",
                    "\u022e": "O",
                    "\u0230": "O",
                    "\u00d6": "O",
                    "\u022a": "O",
                    "\u1ece": "O",
                    "\u0150": "O",
                    "\u01d1": "O",
                    "\u020c": "O",
                    "\u020e": "O",
                    "\u01a0": "O",
                    "\u1edc": "O",
                    "\u1eda": "O",
                    "\u1ee0": "O",
                    "\u1ede": "O",
                    "\u1ee2": "O",
                    "\u1ecc": "O",
                    "\u1ed8": "O",
                    "\u01ea": "O",
                    "\u01ec": "O",
                    "\u00d8": "O",
                    "\u01fe": "O",
                    "\u0186": "O",
                    "\u019f": "O",
                    "\ua74a": "O",
                    "\ua74c": "O",
                    "\u01a2": "OI",
                    "\ua74e": "OO",
                    "\u0222": "OU",
                    "\u24c5": "P",
                    "\uff30": "P",
                    "\u1e54": "P",
                    "\u1e56": "P",
                    "\u01a4": "P",
                    "\u2c63": "P",
                    "\ua750": "P",
                    "\ua752": "P",
                    "\ua754": "P",
                    "\u24c6": "Q",
                    "\uff31": "Q",
                    "\ua756": "Q",
                    "\ua758": "Q",
                    "\u024a": "Q",
                    "\u24c7": "R",
                    "\uff32": "R",
                    "\u0154": "R",
                    "\u1e58": "R",
                    "\u0158": "R",
                    "\u0210": "R",
                    "\u0212": "R",
                    "\u1e5a": "R",
                    "\u1e5c": "R",
                    "\u0156": "R",
                    "\u1e5e": "R",
                    "\u024c": "R",
                    "\u2c64": "R",
                    "\ua75a": "R",
                    "\ua7a6": "R",
                    "\ua782": "R",
                    "\u24c8": "S",
                    "\uff33": "S",
                    "\u1e9e": "S",
                    "\u015a": "S",
                    "\u1e64": "S",
                    "\u015c": "S",
                    "\u1e60": "S",
                    "\u0160": "S",
                    "\u1e66": "S",
                    "\u1e62": "S",
                    "\u1e68": "S",
                    "\u0218": "S",
                    "\u015e": "S",
                    "\u2c7e": "S",
                    "\ua7a8": "S",
                    "\ua784": "S",
                    "\u24c9": "T",
                    "\uff34": "T",
                    "\u1e6a": "T",
                    "\u0164": "T",
                    "\u1e6c": "T",
                    "\u021a": "T",
                    "\u0162": "T",
                    "\u1e70": "T",
                    "\u1e6e": "T",
                    "\u0166": "T",
                    "\u01ac": "T",
                    "\u01ae": "T",
                    "\u023e": "T",
                    "\ua786": "T",
                    "\ua728": "TZ",
                    "\u24ca": "U",
                    "\uff35": "U",
                    "\u00d9": "U",
                    "\u00da": "U",
                    "\u00db": "U",
                    "\u0168": "U",
                    "\u1e78": "U",
                    "\u016a": "U",
                    "\u1e7a": "U",
                    "\u016c": "U",
                    "\u00dc": "U",
                    "\u01db": "U",
                    "\u01d7": "U",
                    "\u01d5": "U",
                    "\u01d9": "U",
                    "\u1ee6": "U",
                    "\u016e": "U",
                    "\u0170": "U",
                    "\u01d3": "U",
                    "\u0214": "U",
                    "\u0216": "U",
                    "\u01af": "U",
                    "\u1eea": "U",
                    "\u1ee8": "U",
                    "\u1eee": "U",
                    "\u1eec": "U",
                    "\u1ef0": "U",
                    "\u1ee4": "U",
                    "\u1e72": "U",
                    "\u0172": "U",
                    "\u1e76": "U",
                    "\u1e74": "U",
                    "\u0244": "U",
                    "\u24cb": "V",
                    "\uff36": "V",
                    "\u1e7c": "V",
                    "\u1e7e": "V",
                    "\u01b2": "V",
                    "\ua75e": "V",
                    "\u0245": "V",
                    "\ua760": "VY",
                    "\u24cc": "W",
                    "\uff37": "W",
                    "\u1e80": "W",
                    "\u1e82": "W",
                    "\u0174": "W",
                    "\u1e86": "W",
                    "\u1e84": "W",
                    "\u1e88": "W",
                    "\u2c72": "W",
                    "\u24cd": "X",
                    "\uff38": "X",
                    "\u1e8a": "X",
                    "\u1e8c": "X",
                    "\u24ce": "Y",
                    "\uff39": "Y",
                    "\u1ef2": "Y",
                    "\u00dd": "Y",
                    "\u0176": "Y",
                    "\u1ef8": "Y",
                    "\u0232": "Y",
                    "\u1e8e": "Y",
                    "\u0178": "Y",
                    "\u1ef6": "Y",
                    "\u1ef4": "Y",
                    "\u01b3": "Y",
                    "\u024e": "Y",
                    "\u1efe": "Y",
                    "\u24cf": "Z",
                    "\uff3a": "Z",
                    "\u0179": "Z",
                    "\u1e90": "Z",
                    "\u017b": "Z",
                    "\u017d": "Z",
                    "\u1e92": "Z",
                    "\u1e94": "Z",
                    "\u01b5": "Z",
                    "\u0224": "Z",
                    "\u2c7f": "Z",
                    "\u2c6b": "Z",
                    "\ua762": "Z",
                    "\u24d0": "a",
                    "\uff41": "a",
                    "\u1e9a": "a",
                    "\u00e0": "a",
                    "\u00e1": "a",
                    "\u00e2": "a",
                    "\u1ea7": "a",
                    "\u1ea5": "a",
                    "\u1eab": "a",
                    "\u1ea9": "a",
                    "\u00e3": "a",
                    "\u0101": "a",
                    "\u0103": "a",
                    "\u1eb1": "a",
                    "\u1eaf": "a",
                    "\u1eb5": "a",
                    "\u1eb3": "a",
                    "\u0227": "a",
                    "\u01e1": "a",
                    "\u00e4": "a",
                    "\u01df": "a",
                    "\u1ea3": "a",
                    "\u00e5": "a",
                    "\u01fb": "a",
                    "\u01ce": "a",
                    "\u0201": "a",
                    "\u0203": "a",
                    "\u1ea1": "a",
                    "\u1ead": "a",
                    "\u1eb7": "a",
                    "\u1e01": "a",
                    "\u0105": "a",
                    "\u2c65": "a",
                    "\u0250": "a",
                    "\ua733": "aa",
                    "\u00e6": "ae",
                    "\u01fd": "ae",
                    "\u01e3": "ae",
                    "\ua735": "ao",
                    "\ua737": "au",
                    "\ua739": "av",
                    "\ua73b": "av",
                    "\ua73d": "ay",
                    "\u24d1": "b",
                    "\uff42": "b",
                    "\u1e03": "b",
                    "\u1e05": "b",
                    "\u1e07": "b",
                    "\u0180": "b",
                    "\u0183": "b",
                    "\u0253": "b",
                    "\u24d2": "c",
                    "\uff43": "c",
                    "\u0107": "c",
                    "\u0109": "c",
                    "\u010b": "c",
                    "\u010d": "c",
                    "\u00e7": "c",
                    "\u1e09": "c",
                    "\u0188": "c",
                    "\u023c": "c",
                    "\ua73f": "c",
                    "\u2184": "c",
                    "\u24d3": "d",
                    "\uff44": "d",
                    "\u1e0b": "d",
                    "\u010f": "d",
                    "\u1e0d": "d",
                    "\u1e11": "d",
                    "\u1e13": "d",
                    "\u1e0f": "d",
                    "\u0111": "d",
                    "\u018c": "d",
                    "\u0256": "d",
                    "\u0257": "d",
                    "\ua77a": "d",
                    "\u01f3": "dz",
                    "\u01c6": "dz",
                    "\u24d4": "e",
                    "\uff45": "e",
                    "\u00e8": "e",
                    "\u00e9": "e",
                    "\u00ea": "e",
                    "\u1ec1": "e",
                    "\u1ebf": "e",
                    "\u1ec5": "e",
                    "\u1ec3": "e",
                    "\u1ebd": "e",
                    "\u0113": "e",
                    "\u1e15": "e",
                    "\u1e17": "e",
                    "\u0115": "e",
                    "\u0117": "e",
                    "\u00eb": "e",
                    "\u1ebb": "e",
                    "\u011b": "e",
                    "\u0205": "e",
                    "\u0207": "e",
                    "\u1eb9": "e",
                    "\u1ec7": "e",
                    "\u0229": "e",
                    "\u1e1d": "e",
                    "\u0119": "e",
                    "\u1e19": "e",
                    "\u1e1b": "e",
                    "\u0247": "e",
                    "\u025b": "e",
                    "\u01dd": "e",
                    "\u24d5": "f",
                    "\uff46": "f",
                    "\u1e1f": "f",
                    "\u0192": "f",
                    "\ua77c": "f",
                    "\u24d6": "g",
                    "\uff47": "g",
                    "\u01f5": "g",
                    "\u011d": "g",
                    "\u1e21": "g",
                    "\u011f": "g",
                    "\u0121": "g",
                    "\u01e7": "g",
                    "\u0123": "g",
                    "\u01e5": "g",
                    "\u0260": "g",
                    "\ua7a1": "g",
                    "\u1d79": "g",
                    "\ua77f": "g",
                    "\u24d7": "h",
                    "\uff48": "h",
                    "\u0125": "h",
                    "\u1e23": "h",
                    "\u1e27": "h",
                    "\u021f": "h",
                    "\u1e25": "h",
                    "\u1e29": "h",
                    "\u1e2b": "h",
                    "\u1e96": "h",
                    "\u0127": "h",
                    "\u2c68": "h",
                    "\u2c76": "h",
                    "\u0265": "h",
                    "\u0195": "hv",
                    "\u24d8": "i",
                    "\uff49": "i",
                    "\u00ec": "i",
                    "\u00ed": "i",
                    "\u00ee": "i",
                    "\u0129": "i",
                    "\u012b": "i",
                    "\u012d": "i",
                    "\u00ef": "i",
                    "\u1e2f": "i",
                    "\u1ec9": "i",
                    "\u01d0": "i",
                    "\u0209": "i",
                    "\u020b": "i",
                    "\u1ecb": "i",
                    "\u012f": "i",
                    "\u1e2d": "i",
                    "\u0268": "i",
                    "\u0131": "i",
                    "\u24d9": "j",
                    "\uff4a": "j",
                    "\u0135": "j",
                    "\u01f0": "j",
                    "\u0249": "j",
                    "\u24da": "k",
                    "\uff4b": "k",
                    "\u1e31": "k",
                    "\u01e9": "k",
                    "\u1e33": "k",
                    "\u0137": "k",
                    "\u1e35": "k",
                    "\u0199": "k",
                    "\u2c6a": "k",
                    "\ua741": "k",
                    "\ua743": "k",
                    "\ua745": "k",
                    "\ua7a3": "k",
                    "\u24db": "l",
                    "\uff4c": "l",
                    "\u0140": "l",
                    "\u013a": "l",
                    "\u013e": "l",
                    "\u1e37": "l",
                    "\u1e39": "l",
                    "\u013c": "l",
                    "\u1e3d": "l",
                    "\u1e3b": "l",
                    "\u017f": "l",
                    "\u0142": "l",
                    "\u019a": "l",
                    "\u026b": "l",
                    "\u2c61": "l",
                    "\ua749": "l",
                    "\ua781": "l",
                    "\ua747": "l",
                    "\u01c9": "lj",
                    "\u24dc": "m",
                    "\uff4d": "m",
                    "\u1e3f": "m",
                    "\u1e41": "m",
                    "\u1e43": "m",
                    "\u0271": "m",
                    "\u026f": "m",
                    "\u24dd": "n",
                    "\uff4e": "n",
                    "\u01f9": "n",
                    "\u0144": "n",
                    "\u00f1": "n",
                    "\u1e45": "n",
                    "\u0148": "n",
                    "\u1e47": "n",
                    "\u0146": "n",
                    "\u1e4b": "n",
                    "\u1e49": "n",
                    "\u019e": "n",
                    "\u0272": "n",
                    "\u0149": "n",
                    "\ua791": "n",
                    "\ua7a5": "n",
                    "\u01cc": "nj",
                    "\u24de": "o",
                    "\uff4f": "o",
                    "\u00f2": "o",
                    "\u00f3": "o",
                    "\u00f4": "o",
                    "\u1ed3": "o",
                    "\u1ed1": "o",
                    "\u1ed7": "o",
                    "\u1ed5": "o",
                    "\u00f5": "o",
                    "\u1e4d": "o",
                    "\u022d": "o",
                    "\u1e4f": "o",
                    "\u014d": "o",
                    "\u1e51": "o",
                    "\u1e53": "o",
                    "\u014f": "o",
                    "\u022f": "o",
                    "\u0231": "o",
                    "\u00f6": "o",
                    "\u022b": "o",
                    "\u1ecf": "o",
                    "\u0151": "o",
                    "\u01d2": "o",
                    "\u020d": "o",
                    "\u020f": "o",
                    "\u01a1": "o",
                    "\u1edd": "o",
                    "\u1edb": "o",
                    "\u1ee1": "o",
                    "\u1edf": "o",
                    "\u1ee3": "o",
                    "\u1ecd": "o",
                    "\u1ed9": "o",
                    "\u01eb": "o",
                    "\u01ed": "o",
                    "\u00f8": "o",
                    "\u01ff": "o",
                    "\u0254": "o",
                    "\ua74b": "o",
                    "\ua74d": "o",
                    "\u0275": "o",
                    "\u01a3": "oi",
                    "\u0223": "ou",
                    "\ua74f": "oo",
                    "\u24df": "p",
                    "\uff50": "p",
                    "\u1e55": "p",
                    "\u1e57": "p",
                    "\u01a5": "p",
                    "\u1d7d": "p",
                    "\ua751": "p",
                    "\ua753": "p",
                    "\ua755": "p",
                    "\u24e0": "q",
                    "\uff51": "q",
                    "\u024b": "q",
                    "\ua757": "q",
                    "\ua759": "q",
                    "\u24e1": "r",
                    "\uff52": "r",
                    "\u0155": "r",
                    "\u1e59": "r",
                    "\u0159": "r",
                    "\u0211": "r",
                    "\u0213": "r",
                    "\u1e5b": "r",
                    "\u1e5d": "r",
                    "\u0157": "r",
                    "\u1e5f": "r",
                    "\u024d": "r",
                    "\u027d": "r",
                    "\ua75b": "r",
                    "\ua7a7": "r",
                    "\ua783": "r",
                    "\u24e2": "s",
                    "\uff53": "s",
                    "\u00df": "s",
                    "\u015b": "s",
                    "\u1e65": "s",
                    "\u015d": "s",
                    "\u1e61": "s",
                    "\u0161": "s",
                    "\u1e67": "s",
                    "\u1e63": "s",
                    "\u1e69": "s",
                    "\u0219": "s",
                    "\u015f": "s",
                    "\u023f": "s",
                    "\ua7a9": "s",
                    "\ua785": "s",
                    "\u1e9b": "s",
                    "\u24e3": "t",
                    "\uff54": "t",
                    "\u1e6b": "t",
                    "\u1e97": "t",
                    "\u0165": "t",
                    "\u1e6d": "t",
                    "\u021b": "t",
                    "\u0163": "t",
                    "\u1e71": "t",
                    "\u1e6f": "t",
                    "\u0167": "t",
                    "\u01ad": "t",
                    "\u0288": "t",
                    "\u2c66": "t",
                    "\ua787": "t",
                    "\ua729": "tz",
                    "\u24e4": "u",
                    "\uff55": "u",
                    "\u00f9": "u",
                    "\u00fa": "u",
                    "\u00fb": "u",
                    "\u0169": "u",
                    "\u1e79": "u",
                    "\u016b": "u",
                    "\u1e7b": "u",
                    "\u016d": "u",
                    "\u00fc": "u",
                    "\u01dc": "u",
                    "\u01d8": "u",
                    "\u01d6": "u",
                    "\u01da": "u",
                    "\u1ee7": "u",
                    "\u016f": "u",
                    "\u0171": "u",
                    "\u01d4": "u",
                    "\u0215": "u",
                    "\u0217": "u",
                    "\u01b0": "u",
                    "\u1eeb": "u",
                    "\u1ee9": "u",
                    "\u1eef": "u",
                    "\u1eed": "u",
                    "\u1ef1": "u",
                    "\u1ee5": "u",
                    "\u1e73": "u",
                    "\u0173": "u",
                    "\u1e77": "u",
                    "\u1e75": "u",
                    "\u0289": "u",
                    "\u24e5": "v",
                    "\uff56": "v",
                    "\u1e7d": "v",
                    "\u1e7f": "v",
                    "\u028b": "v",
                    "\ua75f": "v",
                    "\u028c": "v",
                    "\ua761": "vy",
                    "\u24e6": "w",
                    "\uff57": "w",
                    "\u1e81": "w",
                    "\u1e83": "w",
                    "\u0175": "w",
                    "\u1e87": "w",
                    "\u1e85": "w",
                    "\u1e98": "w",
                    "\u1e89": "w",
                    "\u2c73": "w",
                    "\u24e7": "x",
                    "\uff58": "x",
                    "\u1e8b": "x",
                    "\u1e8d": "x",
                    "\u24e8": "y",
                    "\uff59": "y",
                    "\u1ef3": "y",
                    "\u00fd": "y",
                    "\u0177": "y",
                    "\u1ef9": "y",
                    "\u0233": "y",
                    "\u1e8f": "y",
                    "\u00ff": "y",
                    "\u1ef7": "y",
                    "\u1e99": "y",
                    "\u1ef5": "y",
                    "\u01b4": "y",
                    "\u024f": "y",
                    "\u1eff": "y",
                    "\u24e9": "z",
                    "\uff5a": "z",
                    "\u017a": "z",
                    "\u1e91": "z",
                    "\u017c": "z",
                    "\u017e": "z",
                    "\u1e93": "z",
                    "\u1e95": "z",
                    "\u01b6": "z",
                    "\u0225": "z",
                    "\u0240": "z",
                    "\u2c6c": "z",
                    "\ua763": "z",
                    "\u0386": "\u0391",
                    "\u0388": "\u0395",
                    "\u0389": "\u0397",
                    "\u038a": "\u0399",
                    "\u03aa": "\u0399",
                    "\u038c": "\u039f",
                    "\u038e": "\u03a5",
                    "\u03ab": "\u03a5",
                    "\u038f": "\u03a9",
                    "\u03ac": "\u03b1",
                    "\u03ad": "\u03b5",
                    "\u03ae": "\u03b7",
                    "\u03af": "\u03b9",
                    "\u03ca": "\u03b9",
                    "\u0390": "\u03b9",
                    "\u03cc": "\u03bf",
                    "\u03cd": "\u03c5",
                    "\u03cb": "\u03c5",
                    "\u03b0": "\u03c5",
                    "\u03c9": "\u03c9",
                    "\u03c2": "\u03c3"
                }
            }), e.define("select2/data/base", ["../utils"], function(a) {
                function e(a, c) {
                    e.__super__.constructor.call(this)
                }
                return a.Extend(e, a.Observable), e.prototype.current = function(a) {
                    throw Error("The `current` method must be defined in child classes.");
                }, e.prototype.query = function(a, c) {
                    throw Error("The `query` method must be defined in child classes.");
                }, e.prototype.bind = function(a, c) {}, e.prototype.destroy = function() {}, e.prototype.generateResultId = function(d,
                                                                                                                                      c) {
                    d = d.id + "-result-";
                    return d += a.generateChars(4), null != c.id ? d += "-" + c.id.toString() : d += "-" + a.generateChars(4), d
                }, e
            }), e.define("select2/data/select", ["./base", "../utils", "jquery"], function(a, e, d) {
                function c(a, d) {
                    this.$element = a;
                    this.options = d;
                    c.__super__.constructor.call(this)
                }
                return e.Extend(c, a), c.prototype.current = function(a) {
                    var c = [],
                        f = this;
                    this.$element.find(":selected").each(function() {
                        var a = d(this),
                            a = f.item(a);
                        c.push(a)
                    });
                    a(c)
                }, c.prototype.select = function(a) {
                    var c = this;
                    if (a.selected = !0, d(a.element).is("option")) return a.element.selected = !0, void this.$element.trigger("change");
                    this.$element.prop("multiple") ? this.current(function(f) {
                        var e = [];
                        a = [a];
                        a.push.apply(a, f);
                        for (f = 0; f < a.length; f++) {
                            var k = a[f].id; - 1 === d.inArray(k, e) && e.push(k)
                        }
                        c.$element.val(e);
                        c.$element.trigger("change")
                    }) : (this.$element.val(a.id), this.$element.trigger("change"))
                }, c.prototype.unselect = function(a) {
                    var c = this;
                    if (this.$element.prop("multiple")) {
                        if (a.selected = !1, d(a.element).is("option")) return a.element.selected = !1, void this.$element.trigger("change");
                        this.current(function(f) {
                            for (var e = [], k = 0; k < f.length; k++) {
                                var h = f[k].id;
                                h !== a.id && -1 === d.inArray(h, e) && e.push(h)
                            }
                            c.$element.val(e);
                            c.$element.trigger("change")
                        })
                    }
                }, c.prototype.bind = function(a, c) {
                    var d = this;
                    this.container = a;
                    a.on("select", function(a) {
                        d.select(a.data)
                    });
                    a.on("unselect", function(a) {
                        d.unselect(a.data)
                    })
                }, c.prototype.destroy = function() {
                    this.$element.find("*").each(function() {
                        d.removeData(this, "data")
                    })
                }, c.prototype.query = function(a, c) {
                    var f = [],
                        e = this;
                    this.$element.children().each(function() {
                        var c = d(this);
                        if (c.is("option") ||
                            c.is("optgroup")) c = e.item(c), c = e.matches(a, c), null !== c && f.push(c)
                    });
                    c({
                        results: f
                    })
                }, c.prototype.addOptions = function(a) {
                    e.appendMany(this.$element, a)
                }, c.prototype.option = function(a) {
                    var c;
                    a.children ? (c = document.createElement("optgroup"), c.label = a.text) : (c = document.createElement("option"), void 0 !== c.textContent ? c.textContent = a.text : c.innerText = a.text);
                    void 0 !== a.id && (c.value = a.id);
                    a.disabled && (c.disabled = !0);
                    a.selected && (c.selected = !0);
                    a.title && (c.title = a.title);
                    var f = d(c);
                    a = this._normalizeItem(a);
                    return a.element = c, d.data(c, "data", a), f
                }, c.prototype.item = function(a) {
                    var c;
                    if (null != (c = d.data(a[0], "data"))) return c;
                    if (a.is("option")) c = {
                        id: a.val(),
                        text: a.text(),
                        disabled: a.prop("disabled"),
                        selected: a.prop("selected"),
                        title: a.prop("title")
                    };
                    else if (a.is("optgroup")) {
                        c = {
                            text: a.prop("label"),
                            children: [],
                            title: a.prop("title")
                        };
                        for (var f = a.children("option"), e = [], k = 0; k < f.length; k++) {
                            var h = d(f[k]),
                                h = this.item(h);
                            e.push(h)
                        }
                        c.children = e
                    }
                    return c = this._normalizeItem(c), c.element = a[0], d.data(a[0], "data",
                        c), c
                }, c.prototype._normalizeItem = function(a) {
                    d.isPlainObject(a) || (a = {
                        id: a,
                        text: a
                    });
                    a = d.extend({}, {
                        text: ""
                    }, a);
                    return null != a.id && (a.id = a.id.toString()), null != a.text && (a.text = a.text.toString()), null == a._resultId && a.id && null != this.container && (a._resultId = this.generateResultId(this.container, a)), d.extend({}, {
                        selected: !1,
                        disabled: !1
                    }, a)
                }, c.prototype.matches = function(a, c) {
                    return this.options.get("matcher")(a, c)
                }, c
            }), e.define("select2/data/array", ["./select", "../utils", "jquery"], function(a, e, d) {
                function c(a,
                           d) {
                    var f = d.get("data") || [];
                    c.__super__.constructor.call(this, a, d);
                    this.addOptions(this.convertToOptions(f))
                }
                return e.Extend(c, a), c.prototype.select = function(a) {
                    var d = this.$element.find("option").filter(function(c, d) {
                        return d.value == a.id.toString()
                    });
                    0 === d.length && (d = this.option(a), this.addOptions(d));
                    c.__super__.select.call(this, a)
                }, c.prototype.convertToOptions = function(a) {
                    function c(a) {
                        return function() {
                            return d(this).val() == a.id
                        }
                    }
                    for (var f = this, h = this.$element.find("option"), l = h.map(function() {
                            return f.item(d(this)).id
                        }).get(),
                             p = [], v = 0; v < a.length; v++) {
                        var n = this._normalizeItem(a[v]);
                        if (0 <= d.inArray(n.id, l)) {
                            var u = h.filter(c(n)),
                                y = this.item(u),
                                n = d.extend(!0, {}, n, y),
                                n = this.option(n);
                            u.replaceWith(n)
                        } else u = this.option(n), n.children && (n = this.convertToOptions(n.children), e.appendMany(u, n)), p.push(u)
                    }
                    return p
                }, c
            }), e.define("select2/data/ajax", ["./array", "../utils", "jquery"], function(a, e, d) {
                function c(a, d) {
                    this.ajaxOptions = this._applyDefaults(d.get("ajax"));
                    null != this.ajaxOptions.processResults && (this.processResults = this.ajaxOptions.processResults);
                    c.__super__.constructor.call(this, a, d)
                }
                return e.Extend(c, a), c.prototype._applyDefaults = function(a) {
                    return d.extend({}, {
                        data: function(a) {
                            return d.extend({}, a, {
                                q: a.term
                            })
                        },
                        transport: function(a, b, c) {
                            a = d.ajax(a);
                            return a.then(b), a.fail(c), a
                        }
                    }, a, !0)
                }, c.prototype.processResults = function(a) {
                    return a
                }, c.prototype.query = function(a, c) {
                    function f() {
                        var h = k.transport(k, function(f) {
                            f = e.processResults(f, a);
                            e.options.get("debug") && window.console && console.error && (f && f.results && d.isArray(f.results) || console.error("Select2: The AJAX results did not return an array in the `results` key of the response."));
                            c(f)
                        }, function() {
                            h.status && "0" === h.status || e.trigger("results:message", {
                                message: "errorLoading"
                            })
                        });
                        e._request = h
                    }
                    var e = this;
                    null != this._request && (d.isFunction(this._request.abort) && this._request.abort(), this._request = null);
                    var k = d.extend({
                        type: "GET"
                    }, this.ajaxOptions);
                    "function" == typeof k.url && (k.url = k.url.call(this.$element, a));
                    "function" == typeof k.data && (k.data = k.data.call(this.$element, a));
                    this.ajaxOptions.delay && null != a.term ? (this._queryTimeout && window.clearTimeout(this._queryTimeout), this._queryTimeout =
                        window.setTimeout(f, this.ajaxOptions.delay)) : f()
                }, c
            }), e.define("select2/data/tags", ["jquery"], function(a) {
                function e(d, c, b) {
                    var g = b.get("tags"),
                        k = b.get("createTag");
                    void 0 !== k && (this.createTag = k);
                    k = b.get("insertTag");
                    if (void 0 !== k && (this.insertTag = k), d.call(this, c, b), a.isArray(g))
                        for (d = 0; d < g.length; d++) c = this._normalizeItem(g[d]), c = this.option(c), this.$element.append(c)
                }
                return e.prototype.query = function(a, c, b) {
                    function f(a, d) {
                        for (var k = a.results, h = 0; h < k.length; h++) {
                            var l = k[h],
                                u = null != l.children &&
                                    !f({
                                        results: l.children
                                    }, !0);
                            if ((l.text || "").toUpperCase() === (c.term || "").toUpperCase() || u) return !d && (a.data = k, void b(a))
                        }
                        if (d) return !0;
                        d = e.createTag(c);
                        null != d && (h = e.option(d), h.attr("data-select2-tag", !0), e.addOptions([h]), e.insertTag(k, d));
                        a.results = k;
                        b(a)
                    }
                    var e = this;
                    if (this._removeOldTags(), null == c.term || null != c.page) return void a.call(this, c, b);
                    a.call(this, c, f)
                }, e.prototype.createTag = function(d, c) {
                    d = a.trim(c.term);
                    return "" === d ? null : {
                        id: d,
                        text: d
                    }
                }, e.prototype.insertTag = function(a, c, b) {
                    c.unshift(b)
                },
                    e.prototype._removeOldTags = function(d) {
                        this._lastTag;
                        this.$element.find("option[data-select2-tag]").each(function() {
                            this.selected || a(this).remove()
                        })
                    }, e
            }), e.define("select2/data/tokenizer", ["jquery"], function(a) {
                function e(a, c, b) {
                    var f = b.get("tokenizer");
                    void 0 !== f && (this.tokenizer = f);
                    a.call(this, c, b)
                }
                return e.prototype.bind = function(a, c, b) {
                    a.call(this, c, b);
                    this.$search = c.dropdown.$search || c.selection.$search || b.find(".select2-search__field")
                }, e.prototype.query = function(d, c, b) {
                    var e = this;
                    c.term = c.term ||
                        "";
                    var k = this.tokenizer(c, this.options, function(b) {
                        var c = e._normalizeItem(b);
                        e.$element.find("option").filter(function() {
                            return a(this).val() === c.id
                        }).length || (b = e.option(c), b.attr("data-select2-tag", !0), e._removeOldTags(), e.addOptions([b]));
                        e.trigger("select", {
                            data: c
                        })
                    });
                    k.term !== c.term && (this.$search.length && (this.$search.val(k.term), this.$search.focus()), c.term = k.term);
                    d.call(this, c, b)
                }, e.prototype.tokenizer = function(d, c, b, e) {
                    d = b.get("tokenSeparators") || [];
                    b = c.term;
                    for (var k = 0, h = this.createTag ||
                        function(a) {
                            return {
                                id: a.term,
                                text: a.term
                            }
                        }; k < b.length;)
                        if (-1 !== a.inArray(b[k], d)) {
                            var l = b.substr(0, k),
                                l = a.extend({}, c, {
                                    term: l
                                }),
                                l = h(l);
                            null != l ? (e(l), b = b.substr(k + 1) || "", k = 0) : k++
                        } else k++;
                    return {
                        term: b
                    }
                }, e
            }), e.define("select2/data/minimumInputLength", [], function() {
                function a(f, d, c) {
                    this.minimumInputLength = c.get("minimumInputLength");
                    f.call(this, d, c)
                }
                return a.prototype.query = function(a, d, c) {
                    if (d.term = d.term || "", d.term.length < this.minimumInputLength) return void this.trigger("results:message", {
                        message: "inputTooShort",
                        args: {
                            minimum: this.minimumInputLength,
                            input: d.term,
                            params: d
                        }
                    });
                    a.call(this, d, c)
                }, a
            }), e.define("select2/data/maximumInputLength", [], function() {
                function a(f, d, c) {
                    this.maximumInputLength = c.get("maximumInputLength");
                    f.call(this, d, c)
                }
                return a.prototype.query = function(a, d, c) {
                    if (d.term = d.term || "", 0 < this.maximumInputLength && d.term.length > this.maximumInputLength) return void this.trigger("results:message", {
                        message: "inputTooLong",
                        args: {
                            maximum: this.maximumInputLength,
                            input: d.term,
                            params: d
                        }
                    });
                    a.call(this, d, c)
                },
                    a
            }), e.define("select2/data/maximumSelectionLength", [], function() {
                function a(f, d, c) {
                    this.maximumSelectionLength = c.get("maximumSelectionLength");
                    f.call(this, d, c)
                }
                return a.prototype.query = function(a, d, c) {
                    var b = this;
                    this.current(function(f) {
                        f = null != f ? f.length : 0;
                        if (0 < b.maximumSelectionLength && f >= b.maximumSelectionLength) return void b.trigger("results:message", {
                            message: "maximumSelected",
                            args: {
                                maximum: b.maximumSelectionLength
                            }
                        });
                        a.call(b, d, c)
                    })
                }, a
            }), e.define("select2/dropdown", ["jquery", "./utils"], function(a,
                                                                             e) {
                function d(a, b) {
                    this.$element = a;
                    this.options = b;
                    d.__super__.constructor.call(this)
                }
                return e.Extend(d, e.Observable), d.prototype.render = function() {
                    var c = a('<span class="select2-dropdown"><span class="select2-results"></span></span>');
                    return c.attr("dir", this.options.get("dir")), this.$dropdown = c, c
                }, d.prototype.bind = function() {}, d.prototype.position = function(a, b) {}, d.prototype.destroy = function() {
                    this.$dropdown.remove()
                }, d
            }), e.define("select2/dropdown/search", ["jquery", "../utils"], function(a, e) {
                function d() {}
                return d.prototype.render = function(c) {
                    c = c.call(this);
                    var b = a('<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="textbox" /></span>');
                    return this.$searchContainer = b, this.$search = b.find("input"), c.prepend(b), c
                }, d.prototype.bind = function(c, b, d) {
                    var e = this;
                    c.call(this, b, d);
                    this.$search.on("keydown", function(a) {
                        e.trigger("keypress", a);
                        e._keyUpPrevented =
                            a.isDefaultPrevented()
                    });
                    this.$search.on("input", function(b) {
                        a(this).off("keyup")
                    });
                    this.$search.on("keyup input", function(a) {
                        e.handleSearch(a)
                    });
                    b.on("open", function() {
                        e.$search.attr("tabindex", 0);
                        e.$search.focus();
                        window.setTimeout(function() {
                            e.$search.focus()
                        }, 0)
                    });
                    b.on("close", function() {
                        e.$search.attr("tabindex", -1);
                        e.$search.val("")
                    });
                    b.on("focus", function() {
                        b.isOpen() || e.$search.focus()
                    });
                    b.on("results:all", function(a) {
                        if (null == a.query.term || "" === a.query.term) e.showSearch(a) ? e.$searchContainer.removeClass("select2-search--hide") :
                            e.$searchContainer.addClass("select2-search--hide")
                    })
                }, d.prototype.handleSearch = function(a) {
                    this._keyUpPrevented || (a = this.$search.val(), this.trigger("query", {
                        term: a
                    }));
                    this._keyUpPrevented = !1
                }, d.prototype.showSearch = function(a, b) {
                    return !0
                }, d
            }), e.define("select2/dropdown/hidePlaceholder", [], function() {
                function a(f, d, c, b) {
                    this.placeholder = this.normalizePlaceholder(c.get("placeholder"));
                    f.call(this, d, c, b)
                }
                return a.prototype.append = function(a, d) {
                    d.results = this.removePlaceholder(d.results);
                    a.call(this,
                        d)
                }, a.prototype.normalizePlaceholder = function(a, d) {
                    return "string" == typeof d && (d = {
                        id: "",
                        text: d
                    }), d
                }, a.prototype.removePlaceholder = function(a, d) {
                    a = d.slice(0);
                    for (var c = d.length - 1; 0 <= c; c--) this.placeholder.id === d[c].id && a.splice(c, 1);
                    return a
                }, a
            }), e.define("select2/dropdown/infiniteScroll", ["jquery"], function(a) {
                function e(a, c, b, f) {
                    this.lastParams = {};
                    a.call(this, c, b, f);
                    this.$loadingMore = this.createLoadingMore();
                    this.loading = !1
                }
                return e.prototype.append = function(a, c) {
                    this.$loadingMore.remove();
                    this.loading = !1;
                    a.call(this, c);
                    this.showLoadingMore(c) && this.$results.append(this.$loadingMore)
                }, e.prototype.bind = function(d, c, b) {
                    var e = this;
                    d.call(this, c, b);
                    c.on("query", function(a) {
                        e.lastParams = a;
                        e.loading = !0
                    });
                    c.on("query:append", function(a) {
                        e.lastParams = a;
                        e.loading = !0
                    });
                    this.$results.on("scroll", function() {
                        var b = a.contains(document.documentElement, e.$loadingMore[0]);
                        !e.loading && b && e.$results.offset().top + e.$results.outerHeight(!1) + 50 >= e.$loadingMore.offset().top + e.$loadingMore.outerHeight(!1) && e.loadMore()
                    })
                },
                    e.prototype.loadMore = function() {
                        this.loading = !0;
                        var d = a.extend({}, {
                            page: 1
                        }, this.lastParams);
                        d.page++;
                        this.trigger("query:append", d)
                    }, e.prototype.showLoadingMore = function(a, c) {
                    return c.pagination && c.pagination.more
                }, e.prototype.createLoadingMore = function() {
                    var d = a('<li class="select2-results__option select2-results__option--load-more"role="treeitem" aria-disabled="true"></li>'),
                        c = this.options.get("translations").get("loadingMore");
                    return d.html(c(this.lastParams)), d
                }, e
            }), e.define("select2/dropdown/attachBody", ["jquery", "../utils"], function(a, e) {
                function d(c, b, d) {
                    this.$dropdownParent = d.get("dropdownParent") || a(document.body);
                    c.call(this, b, d)
                }
                return d.prototype.bind = function(a, b, d) {
                    var f = this,
                        e = !1;
                    a.call(this, b, d);
                    b.on("open", function() {
                        f._showDropdown();
                        f._attachPositioningHandler(b);
                        e || (e = !0, b.on("results:all", function() {
                            f._positionDropdown();
                            f._resizeDropdown()
                        }), b.on("results:append", function() {
                            f._positionDropdown();
                            f._resizeDropdown()
                        }))
                    });
                    b.on("close", function() {
                        f._hideDropdown();
                        f._detachPositioningHandler(b)
                    });
                    this.$dropdownContainer.on("mousedown", function(a) {
                        a.stopPropagation()
                    })
                }, d.prototype.destroy = function(a) {
                    a.call(this);
                    this.$dropdownContainer.remove()
                }, d.prototype.position = function(a, b, d) {
                    b.attr("class", d.attr("class"));
                    b.removeClass("select2");
                    b.addClass("select2-container--open");
                    b.css({
                        position: "absolute",
                        top: -999999
                    });
                    this.$container = d
                }, d.prototype.render = function(c) {
                    var b = a("<span></span>");
                    c = c.call(this);
                    return b.append(c), this.$dropdownContainer = b, b
                }, d.prototype._hideDropdown = function(a) {
                    this.$dropdownContainer.detach()
                },
                    d.prototype._attachPositioningHandler = function(c, b) {
                        var d = this;
                        c = "scroll.select2." + b.id;
                        var h = "resize.select2." + b.id;
                        b = "orientationchange.select2." + b.id;
                        var l = this.$container.parents().filter(e.hasScroll);
                        l.each(function() {
                            a(this).data("select2-scroll-position", {
                                x: a(this).scrollLeft(),
                                y: a(this).scrollTop()
                            })
                        });
                        l.on(c, function(b) {
                            b = a(this).data("select2-scroll-position");
                            a(this).scrollTop(b.y)
                        });
                        a(window).on(c + " " + h + " " + b, function(a) {
                            d._positionDropdown();
                            d._resizeDropdown()
                        })
                    }, d.prototype._detachPositioningHandler =
                    function(c, b) {
                        c = "scroll.select2." + b.id;
                        var d = "resize.select2." + b.id;
                        b = "orientationchange.select2." + b.id;
                        this.$container.parents().filter(e.hasScroll).off(c);
                        a(window).off(c + " " + d + " " + b)
                    }, d.prototype._positionDropdown = function() {
                    var c = a(window),
                        b = this.$dropdown.hasClass("select2-dropdown--above"),
                        d = this.$dropdown.hasClass("select2-dropdown--below"),
                        e = null,
                        k = this.$container.offset();
                    k.bottom = k.top + this.$container.outerHeight(!1);
                    var h = this.$container.outerHeight(!1),
                        l, v;
                    l = k.top;
                    v = k.top + h;
                    var h = this.$dropdown.outerHeight(!1),
                        n = c.scrollTop(),
                        u = c.scrollTop() + c.height(),
                        c = n < k.top - h,
                        n = u > k.bottom + h,
                        k = {
                            left: k.left,
                            top: v
                        };
                    v = this.$dropdownParent;
                    "static" === v.css("position") && (v = v.offsetParent());
                    v = v.offset();
                    k.top -= v.top;
                    k.left -= v.left;
                    b || d || (e = "below");
                    n || !c || b ? !c && n && b && (e = "below") : e = "above";
                    ("above" == e || b && "below" !== e) && (k.top = l - v.top - h);
                    null != e && (this.$dropdown.removeClass("select2-dropdown--below select2-dropdown--above").addClass("select2-dropdown--" + e), this.$container.removeClass("select2-container--below select2-container--above").addClass("select2-container--" +
                        e));
                    this.$dropdownContainer.css(k)
                }, d.prototype._resizeDropdown = function() {
                    var a = {
                        width: this.$container.outerWidth(!1) + "px"
                    };
                    this.options.get("dropdownAutoWidth") && (a.minWidth = a.width, a.position = "relative", a.width = "auto");
                    this.$dropdown.css(a)
                }, d.prototype._showDropdown = function(a) {
                    this.$dropdownContainer.appendTo(this.$dropdownParent);
                    this._positionDropdown();
                    this._resizeDropdown()
                }, d
            }), e.define("select2/dropdown/minimumResultsForSearch", [], function() {
                function a(d) {
                    for (var c = 0, b = 0; b < d.length; b++) {
                        var e =
                            d[b];
                        e.children ? c += a(e.children) : c++
                    }
                    return c
                }

                function e(a, c, b, f) {
                    this.minimumResultsForSearch = b.get("minimumResultsForSearch");
                    0 > this.minimumResultsForSearch && (this.minimumResultsForSearch = 1 / 0);
                    a.call(this, c, b, f)
                }
                return e.prototype.showSearch = function(d, c) {
                    return !(a(c.data.results) < this.minimumResultsForSearch) && d.call(this, c)
                }, e
            }), e.define("select2/dropdown/selectOnClose", [], function() {
                function a() {}
                return a.prototype.bind = function(a, d, c) {
                    var b = this;
                    a.call(this, d, c);
                    d.on("close", function(a) {
                        b._handleSelectOnClose(a)
                    })
                },
                    a.prototype._handleSelectOnClose = function(a, d) {
                        if (d && null != d.originalSelect2Event && (a = d.originalSelect2Event, "select" === a._type || "unselect" === a._type)) return;
                        a = this.getHighlightedResults();
                        1 > a.length || (a = a.data("data"), null != a.element && a.element.selected || null == a.element && a.selected || this.trigger("select", {
                            data: a
                        }))
                    }, a
            }), e.define("select2/dropdown/closeOnSelect", [], function() {
                function a() {}
                return a.prototype.bind = function(a, d, c) {
                    var b = this;
                    a.call(this, d, c);
                    d.on("select", function(a) {
                        b._selectTriggered(a)
                    });
                    d.on("unselect", function(a) {
                        b._selectTriggered(a)
                    })
                }, a.prototype._selectTriggered = function(a, d) {
                    (a = d.originalEvent) && a.ctrlKey || this.trigger("close", {
                        originalEvent: a,
                        originalSelect2Event: d
                    })
                }, a
            }), e.define("select2/i18n/en", [], function() {
                return {
                    errorLoading: function() {
                        return "The results could not be loaded."
                    },
                    inputTooLong: function(a) {
                        a = a.input.length - a.maximum;
                        var e = "Please delete " + a + " character";
                        return 1 != a && (e += "s"), e
                    },
                    inputTooShort: function(a) {
                        return "Please enter " + (a.minimum - a.input.length) + " or more characters"
                    },
                    loadingMore: function() {
                        return "Loading more results\u2026"
                    },
                    maximumSelected: function(a) {
                        var e = "You can only select " + a.maximum + " item";
                        return 1 != a.maximum && (e += "s"), e
                    },
                    noResults: function() {
                        return "No results found"
                    },
                    searching: function() {
                        return "Searching\u2026"
                    }
                }
            }), e.define("select2/defaults", "jquery require ./results ./selection/single ./selection/multiple ./selection/placeholder ./selection/allowClear ./selection/search ./selection/eventRelay ./utils ./translation ./diacritics ./data/select ./data/array ./data/ajax ./data/tags ./data/tokenizer ./data/minimumInputLength ./data/maximumInputLength ./data/maximumSelectionLength ./dropdown ./dropdown/search ./dropdown/hidePlaceholder ./dropdown/infiniteScroll ./dropdown/attachBody ./dropdown/minimumResultsForSearch ./dropdown/selectOnClose ./dropdown/closeOnSelect ./i18n/en".split(" "),
                function(a, e, d, c, b, g, h, l, q, p, v, n, u, y, x, w, F, G, L, C, M, K, E, N, J, Y, T, fa, W) {
                    function ba() {
                        this.reset()
                    }
                    return ba.prototype.apply = function(n) {
                        if (n = a.extend(!0, {}, this.defaults, n), null == n.dataAdapter) {
                            if (null != n.ajax ? n.dataAdapter = x : null != n.data ? n.dataAdapter = y : n.dataAdapter = u, 0 < n.minimumInputLength && (n.dataAdapter = p.Decorate(n.dataAdapter, G)), 0 < n.maximumInputLength && (n.dataAdapter = p.Decorate(n.dataAdapter, L)), 0 < n.maximumSelectionLength && (n.dataAdapter = p.Decorate(n.dataAdapter, C)), n.tags && (n.dataAdapter = p.Decorate(n.dataAdapter,
                                w)), null == n.tokenSeparators && null == n.tokenizer || (n.dataAdapter = p.Decorate(n.dataAdapter, F)), null != n.query) {
                                var P = e(n.amdBase + "compat/query");
                                n.dataAdapter = p.Decorate(n.dataAdapter, P)
                            }
                            null != n.initSelection && (P = e(n.amdBase + "compat/initSelection"), n.dataAdapter = p.Decorate(n.dataAdapter, P))
                        }
                        if (null == n.resultsAdapter && (n.resultsAdapter = d, null != n.ajax && (n.resultsAdapter = p.Decorate(n.resultsAdapter, N)), null != n.placeholder && (n.resultsAdapter = p.Decorate(n.resultsAdapter, E)), n.selectOnClose && (n.resultsAdapter =
                            p.Decorate(n.resultsAdapter, T))), null == n.dropdownAdapter) {
                            n.multiple ? n.dropdownAdapter = M : (P = p.Decorate(M, K), n.dropdownAdapter = P);
                            if (0 !== n.minimumResultsForSearch && (n.dropdownAdapter = p.Decorate(n.dropdownAdapter, Y)), n.closeOnSelect && (n.dropdownAdapter = p.Decorate(n.dropdownAdapter, fa)), null != n.dropdownCssClass || null != n.dropdownCss || null != n.adaptDropdownCssClass) P = e(n.amdBase + "compat/dropdownCss"), n.dropdownAdapter = p.Decorate(n.dropdownAdapter, P);
                            n.dropdownAdapter = p.Decorate(n.dropdownAdapter, J)
                        }
                        if (null ==
                            n.selectionAdapter) {
                            if (n.multiple ? n.selectionAdapter = b : n.selectionAdapter = c, null != n.placeholder && (n.selectionAdapter = p.Decorate(n.selectionAdapter, g)), n.allowClear && (n.selectionAdapter = p.Decorate(n.selectionAdapter, h)), n.multiple && (n.selectionAdapter = p.Decorate(n.selectionAdapter, l)), null != n.containerCssClass || null != n.containerCss || null != n.adaptContainerCssClass) P = e(n.amdBase + "compat/containerCss"), n.selectionAdapter = p.Decorate(n.selectionAdapter, P);
                            n.selectionAdapter = p.Decorate(n.selectionAdapter,
                                q)
                        }
                        "string" == typeof n.language && (0 < n.language.indexOf("-") ? (P = n.language.split("-")[0], n.language = [n.language, P]) : n.language = [n.language]);
                        if (a.isArray(n.language)) {
                            P = new v;
                            n.language.push("en");
                            for (var O = n.language, U = 0; U < O.length; U++) {
                                var Z = O[U],
                                    V = {};
                                try {
                                    V = v.loadPath(Z)
                                } catch (W) {
                                    try {
                                        Z = this.defaults.amdLanguageBase + Z, V = v.loadPath(Z)
                                    } catch (R) {
                                        n.debug && window.console && console.warn && console.warn('Select2: The language file for "' + Z + '" could not be automatically loaded. A fallback will be used instead.');
                                        continue
                                    }
                                }
                                P.extend(V)
                            }
                            n.translations = P
                        } else P = v.loadPath(this.defaults.amdLanguageBase + "en"), O = new v(n.language), O.extend(P), n.translations = O;
                        return n
                    }, ba.prototype.reset = function() {
                        function b(a) {
                            return a.replace(/[^\u0000-\u007E]/g, function(a) {
                                return n[a] || a
                            })
                        }

                        function c(d, e) {
                            if ("" === a.trim(d.term)) return e;
                            if (e.children && 0 < e.children.length) {
                                for (var g = a.extend(!0, {}, e), k = e.children.length - 1; 0 <= k; k--) null == c(d, e.children[k]) && g.children.splice(k, 1);
                                return 0 < g.children.length ? g : c(d, g)
                            }
                            g = b(e.text).toUpperCase();
                            d = b(d.term).toUpperCase();
                            return -1 < g.indexOf(d) ? e : null
                        }
                        this.defaults = {
                            amdBase: "./",
                            amdLanguageBase: "./i18n/",
                            closeOnSelect: !0,
                            debug: !1,
                            dropdownAutoWidth: !1,
                            escapeMarkup: p.escapeMarkup,
                            language: W,
                            matcher: c,
                            minimumInputLength: 0,
                            maximumInputLength: 0,
                            maximumSelectionLength: 0,
                            minimumResultsForSearch: 0,
                            selectOnClose: !1,
                            sorter: function(a) {
                                return a
                            },
                            templateResult: function(a) {
                                return a.text
                            },
                            templateSelection: function(a) {
                                return a.text
                            },
                            theme: "default",
                            width: "resolve"
                        }
                    }, ba.prototype.set = function(b, c) {
                        b = a.camelCase(b);
                        var d = {};
                        d[b] = c;
                        c = p._convertData(d);
                        a.extend(this.defaults, c)
                    }, new ba
                }), e.define("select2/options", ["require", "jquery", "./defaults", "./utils"], function(a, e, d, c) {
                function b(b, e) {
                    if (this.options = b, null != e && this.fromElement(e), this.options = d.apply(this.options), e && e.is("input")) b = a(this.get("amdBase") + "compat/inputData"), this.options.dataAdapter = c.Decorate(this.options.dataAdapter, b)
                }
                return b.prototype.fromElement = function(a) {
                    var b = ["select2"];
                    null == this.options.multiple && (this.options.multiple = a.prop("multiple"));
                    null == this.options.disabled && (this.options.disabled = a.prop("disabled"));
                    null == this.options.language && (a.prop("lang") ? this.options.language = a.prop("lang").toLowerCase() : a.closest("[lang]").prop("lang") && (this.options.language = a.closest("[lang]").prop("lang")));
                    null == this.options.dir && (a.prop("dir") ? this.options.dir = a.prop("dir") : a.closest("[dir]").prop("dir") ? this.options.dir = a.closest("[dir]").prop("dir") : this.options.dir = "ltr");
                    a.prop("disabled", this.options.disabled);
                    a.prop("multiple", this.options.multiple);
                    a.data("select2Tags") && (this.options.debug && window.console && console.warn && console.warn('Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'), a.data("data", a.data("select2Tags")), a.data("tags", !0));
                    a.data("ajaxUrl") && (this.options.debug && window.console && console.warn && console.warn("Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."),
                        a.attr("ajax--url", a.data("ajaxUrl")), a.data("ajax--url", a.data("ajaxUrl")));
                    a = e.fn.jquery && "1." == e.fn.jquery.substr(0, 2) && a[0].dataset ? e.extend(!0, {}, a[0].dataset, a.data()) : a.data();
                    a = e.extend(!0, {}, a);
                    a = c._convertData(a);
                    for (var d in a) - 1 < e.inArray(d, b) || (e.isPlainObject(this.options[d]) ? e.extend(this.options[d], a[d]) : this.options[d] = a[d]);
                    return this
                }, b.prototype.get = function(a) {
                    return this.options[a]
                }, b.prototype.set = function(a, b) {
                    this.options[a] = b
                }, b
            }), e.define("select2/core", ["jquery", "./options",
                "./utils", "./keys"
            ], function(a, e, d, c) {
                var b = function(a, c) {
                    null != a.data("select2") && a.data("select2").destroy();
                    this.$element = a;
                    this.id = this._generateId(a);
                    c = c || {};
                    this.options = new e(c, a);
                    b.__super__.constructor.call(this);
                    c = a.attr("tabindex") || 0;
                    a.data("old-tabindex", c);
                    a.attr("tabindex", "-1");
                    this.dataAdapter = new(this.options.get("dataAdapter"))(a, this.options);
                    c = this.render();
                    this._placeContainer(c);
                    this.selection = new(this.options.get("selectionAdapter"))(a, this.options);
                    this.$selection = this.selection.render();
                    this.selection.position(this.$selection, c);
                    this.dropdown = new(this.options.get("dropdownAdapter"))(a, this.options);
                    this.$dropdown = this.dropdown.render();
                    this.dropdown.position(this.$dropdown, c);
                    this.results = new(this.options.get("resultsAdapter"))(a, this.options, this.dataAdapter);
                    this.$results = this.results.render();
                    this.results.position(this.$results, this.$dropdown);
                    var d = this;
                    this._bindAdapters();
                    this._registerDomEvents();
                    this._registerDataEvents();
                    this._registerSelectionEvents();
                    this._registerDropdownEvents();
                    this._registerResultsEvents();
                    this._registerEvents();
                    this.dataAdapter.current(function(a) {
                        d.trigger("selection:update", {
                            data: a
                        })
                    });
                    a.addClass("select2-hidden-accessible");
                    a.attr("aria-hidden", "true");
                    this._syncAttributes();
                    a.data("select2", this)
                };
                return d.Extend(b, d.Observable), b.prototype._generateId = function(a) {
                    var b = "";
                    return b = null != a.attr("id") ? a.attr("id") : null != a.attr("name") ? a.attr("name") + "-" + d.generateChars(2) : d.generateChars(4), b = b.replace(/(:|\.|\[|\]|,)/g, ""), "select2-" + b
                }, b.prototype._placeContainer =
                    function(a) {
                        a.insertAfter(this.$element);
                        var b = this._resolveWidth(this.$element, this.options.get("width"));
                        null != b && a.css("width", b)
                    }, b.prototype._resolveWidth = function(a, b) {
                    var c = /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;
                    if ("resolve" == b) return c = this._resolveWidth(a, "style"), null != c ? c : this._resolveWidth(a, "element");
                    if ("element" == b) return c = a.outerWidth(!1), 0 >= c ? "auto" : c + "px";
                    if ("style" == b) {
                        a = a.attr("style");
                        if ("string" != typeof a) return null;
                        a = a.split(";");
                        b = 0;
                        for (var d = a.length; b <
                        d; b += 1) {
                            var f = a[b].replace(/\s/g, "").match(c);
                            if (null !== f && 1 <= f.length) return f[1]
                        }
                        return null
                    }
                    return b
                }, b.prototype._bindAdapters = function() {
                    this.dataAdapter.bind(this, this.$container);
                    this.selection.bind(this, this.$container);
                    this.dropdown.bind(this, this.$container);
                    this.results.bind(this, this.$container)
                }, b.prototype._registerDomEvents = function() {
                    var b = this;
                    this.$element.on("change.select2", function() {
                        b.dataAdapter.current(function(a) {
                            b.trigger("selection:update", {
                                data: a
                            })
                        })
                    });
                    this.$element.on("focus.select2",
                        function(a) {
                            b.trigger("focus", a)
                        });
                    this._syncA = d.bind(this._syncAttributes, this);
                    this._syncS = d.bind(this._syncSubtree, this);
                    this.$element[0].attachEvent && this.$element[0].attachEvent("onpropertychange", this._syncA);
                    var c = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
                    null != c ? (this._observer = new c(function(c) {
                        a.each(c, b._syncA);
                        a.each(c, b._syncS)
                    }), this._observer.observe(this.$element[0], {
                        attributes: !0,
                        childList: !0,
                        subtree: !1
                    })) : this.$element[0].addEventListener &&
                        (this.$element[0].addEventListener("DOMAttrModified", b._syncA, !1), this.$element[0].addEventListener("DOMNodeInserted", b._syncS, !1), this.$element[0].addEventListener("DOMNodeRemoved", b._syncS, !1))
                }, b.prototype._registerDataEvents = function() {
                    var a = this;
                    this.dataAdapter.on("*", function(b, c) {
                        a.trigger(b, c)
                    })
                }, b.prototype._registerSelectionEvents = function() {
                    var b = this,
                        c = ["toggle", "focus"];
                    this.selection.on("toggle", function() {
                        b.toggleDropdown()
                    });
                    this.selection.on("focus", function(a) {
                        b.focus(a)
                    });
                    this.selection.on("*",
                        function(d, e) {
                            -1 === a.inArray(d, c) && b.trigger(d, e)
                        })
                }, b.prototype._registerDropdownEvents = function() {
                    var a = this;
                    this.dropdown.on("*", function(b, c) {
                        a.trigger(b, c)
                    })
                }, b.prototype._registerResultsEvents = function() {
                    var a = this;
                    this.results.on("*", function(b, c) {
                        a.trigger(b, c)
                    })
                }, b.prototype._registerEvents = function() {
                    var a = this;
                    this.on("open", function() {
                        a.$container.addClass("select2-container--open")
                    });
                    this.on("close", function() {
                        a.$container.removeClass("select2-container--open")
                    });
                    this.on("enable", function() {
                        a.$container.removeClass("select2-container--disabled")
                    });
                    this.on("disable", function() {
                        a.$container.addClass("select2-container--disabled")
                    });
                    this.on("blur", function() {
                        a.$container.removeClass("select2-container--focus")
                    });
                    this.on("query", function(b) {
                        a.isOpen() || a.trigger("open", {});
                        this.dataAdapter.query(b, function(c) {
                            a.trigger("results:all", {
                                data: c,
                                query: b
                            })
                        })
                    });
                    this.on("query:append", function(b) {
                        this.dataAdapter.query(b, function(c) {
                            a.trigger("results:append", {
                                data: c,
                                query: b
                            })
                        })
                    });
                    this.on("keypress", function(b) {
                        var d = b.which;
                        a.isOpen() ? d === c.ESC || d ===
                        c.TAB || d === c.UP && b.altKey ? (a.close(), b.preventDefault()) : d === c.ENTER ? (a.trigger("results:select", {}), b.preventDefault()) : d === c.SPACE && b.ctrlKey ? (a.trigger("results:toggle", {}), b.preventDefault()) : d === c.UP ? (a.trigger("results:previous", {}), b.preventDefault()) : d === c.DOWN && (a.trigger("results:next", {}), b.preventDefault()) : (d === c.ENTER || d === c.SPACE || d === c.DOWN && b.altKey) && (a.open(), b.preventDefault())
                    })
                }, b.prototype._syncAttributes = function() {
                    this.options.set("disabled", this.$element.prop("disabled"));
                    this.options.get("disabled") ? (this.isOpen() && this.close(), this.trigger("disable", {})) : this.trigger("enable", {})
                }, b.prototype._syncSubtree = function(a, b) {
                    var c = !1,
                        d = this;
                    if (!a || !a.target || "OPTION" === a.target.nodeName || "OPTGROUP" === a.target.nodeName) {
                        if (b)
                            if (b.addedNodes && 0 < b.addedNodes.length)
                                for (a = 0; a < b.addedNodes.length; a++) b.addedNodes[a].selected && (c = !0);
                            else b.removedNodes && 0 < b.removedNodes.length && (c = !0);
                        else c = !0;
                        c && this.dataAdapter.current(function(a) {
                            d.trigger("selection:update", {
                                data: a
                            })
                        })
                    }
                },
                    b.prototype.trigger = function(a, c) {
                        var d = b.__super__.trigger,
                            f = {
                                open: "opening",
                                close: "closing",
                                select: "selecting",
                                unselect: "unselecting"
                            };
                        if (void 0 === c && (c = {}), a in f) {
                            var e = {
                                prevented: !1,
                                name: a,
                                args: c
                            };
                            if (d.call(this, f[a], e), e.prevented) return void(c.prevented = !0)
                        }
                        d.call(this, a, c)
                    }, b.prototype.toggleDropdown = function() {
                    this.options.get("disabled") || (this.isOpen() ? this.close() : this.open())
                }, b.prototype.open = function() {
                    this.isOpen() || this.trigger("query", {})
                }, b.prototype.close = function() {
                    this.isOpen() &&
                    this.trigger("close", {})
                }, b.prototype.isOpen = function() {
                    return this.$container.hasClass("select2-container--open")
                }, b.prototype.hasFocus = function() {
                    return this.$container.hasClass("select2-container--focus")
                }, b.prototype.focus = function(a) {
                    this.hasFocus() || (this.$container.addClass("select2-container--focus"), this.trigger("focus", {}))
                }, b.prototype.enable = function(a) {
                    this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.');
                    null != a && 0 !== a.length || (a = [!0]);
                    this.$element.prop("disabled", !a[0])
                }, b.prototype.data = function() {
                    this.options.get("debug") && 0 < arguments.length && window.console && console.warn && console.warn('Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.');
                    var a = [];
                    return this.dataAdapter.current(function(b) {
                        a = b
                    }), a
                }, b.prototype.val = function(b) {
                    if (this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'),
                    null == b || 0 === b.length) return this.$element.val();
                    b = b[0];
                    a.isArray(b) && (b = a.map(b, function(a) {
                        return a.toString()
                    }));
                    this.$element.val(b).trigger("change")
                }, b.prototype.destroy = function() {
                    this.$container.remove();
                    this.$element[0].detachEvent && this.$element[0].detachEvent("onpropertychange", this._syncA);
                    null != this._observer ? (this._observer.disconnect(), this._observer = null) : this.$element[0].removeEventListener && (this.$element[0].removeEventListener("DOMAttrModified", this._syncA, !1), this.$element[0].removeEventListener("DOMNodeInserted",
                        this._syncS, !1), this.$element[0].removeEventListener("DOMNodeRemoved", this._syncS, !1));
                    this._syncS = this._syncA = null;
                    this.$element.off(".select2");
                    this.$element.attr("tabindex", this.$element.data("old-tabindex"));
                    this.$element.removeClass("select2-hidden-accessible");
                    this.$element.attr("aria-hidden", "false");
                    this.$element.removeData("select2");
                    this.dataAdapter.destroy();
                    this.selection.destroy();
                    this.dropdown.destroy();
                    this.results.destroy();
                    this.results = this.dropdown = this.selection = this.dataAdapter =
                        null
                }, b.prototype.render = function() {
                    var b = a('<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>');
                    return b.attr("dir", this.options.get("dir")), this.$container = b, this.$container.addClass("select2-container--" + this.options.get("theme")), b.data("element", this.$element), b
                }, b
            }), e.define("select2/compat/utils", ["jquery"], function(a) {
                return {
                    syncCssClasses: function(e, d, c) {
                        var b, g, h = [];
                        (b = a.trim(e.attr("class"))) && (b = "" + b,
                            a(b.split(/\s+/)).each(function() {
                                0 === this.indexOf("select2-") && h.push(this)
                            }));
                        (b = a.trim(d.attr("class"))) && (b = "" + b, a(b.split(/\s+/)).each(function() {
                            0 !== this.indexOf("select2-") && null != (g = c(this)) && h.push(g)
                        }));
                        e.attr("class", h.join(" "))
                    }
                }
            }), e.define("select2/compat/containerCss", ["jquery", "./utils"], function(a, e) {
                function d(a) {
                    return null
                }

                function c() {}
                return c.prototype.render = function(b) {
                    b = b.call(this);
                    var c = this.options.get("containerCssClass") || "";
                    a.isFunction(c) && (c = c(this.$element));
                    var h =
                        this.options.get("adaptContainerCssClass");
                    if (h = h || d, -1 !== c.indexOf(":all:")) var c = c.replace(":all:", ""),
                        l = h,
                        h = function(a) {
                            var b = l(a);
                            return null != b ? b + " " + a : a
                        };
                    var q = this.options.get("containerCss") || {};
                    return a.isFunction(q) && (q = q(this.$element)), e.syncCssClasses(b, this.$element, h), b.css(q), b.addClass(c), b
                }, c
            }), e.define("select2/compat/dropdownCss", ["jquery", "./utils"], function(a, e) {
                function d(a) {
                    return null
                }

                function c() {}
                return c.prototype.render = function(b) {
                    b = b.call(this);
                    var c = this.options.get("dropdownCssClass") ||
                        "";
                    a.isFunction(c) && (c = c(this.$element));
                    var h = this.options.get("adaptDropdownCssClass");
                    if (h = h || d, -1 !== c.indexOf(":all:")) var c = c.replace(":all:", ""),
                        l = h,
                        h = function(a) {
                            var b = l(a);
                            return null != b ? b + " " + a : a
                        };
                    var q = this.options.get("dropdownCss") || {};
                    return a.isFunction(q) && (q = q(this.$element)), e.syncCssClasses(b, this.$element, h), b.css(q), b.addClass(c), b
                }, c
            }), e.define("select2/compat/initSelection", ["jquery"], function(a) {
                function e(a, c, b) {
                    b.get("debug") && window.console && console.warn && console.warn("Select2: The `initSelection` option has been deprecated in favor of a custom data adapter that overrides the `current` method. This method is now called multiple times instead of a single time when the instance is initialized. Support will be removed for the `initSelection` option in future versions of Select2");
                    this.initSelection = b.get("initSelection");
                    this._isInitialized = !1;
                    a.call(this, c, b)
                }
                return e.prototype.current = function(d, c) {
                    var b = this;
                    if (this._isInitialized) return void d.call(this, c);
                    this.initSelection.call(null, this.$element, function(d) {
                        b._isInitialized = !0;
                        a.isArray(d) || (d = [d]);
                        c(d)
                    })
                }, e
            }), e.define("select2/compat/inputData", ["jquery"], function(a) {
                function e(a, c, b) {
                    this._currentData = [];
                    this._valueSeparator = b.get("valueSeparator") || ",";
                    "hidden" === c.prop("type") && b.get("debug") && console && console.warn &&
                    console.warn("Select2: Using a hidden input with Select2 is no longer supported and may stop working in the future. It is recommended to use a `<select>` element instead.");
                    a.call(this, c, b)
                }
                return e.prototype.current = function(d, c) {
                    function b(c, d) {
                        var e = [];
                        return c.selected || -1 !== a.inArray(c.id, d) ? (c.selected = !0, e.push(c)) : c.selected = !1, c.children && e.push.apply(e, b(c.children, d)), e
                    }
                    d = [];
                    for (var e = 0; e < this._currentData.length; e++) d.push.apply(d, b(this._currentData[e], this.$element.val().split(this._valueSeparator)));
                    c(d)
                }, e.prototype.select = function(d, c) {
                    this.options.get("multiple") ? (d = this.$element.val(), d += this._valueSeparator + c.id, this.$element.val(d)) : (this.current(function(b) {
                        a.map(b, function(a) {
                            a.selected = !1
                        })
                    }), this.$element.val(c.id));
                    this.$element.trigger("change")
                }, e.prototype.unselect = function(a, c) {
                    var b = this;
                    c.selected = !1;
                    this.current(function(a) {
                        for (var d = [], f = 0; f < a.length; f++) {
                            var e = a[f];
                            c.id != e.id && d.push(e.id)
                        }
                        b.$element.val(d.join(b._valueSeparator));
                        b.$element.trigger("change")
                    })
                }, e.prototype.query =
                    function(a, c, b) {
                        a = [];
                        for (var f = 0; f < this._currentData.length; f++) {
                            var e = this.matches(c, this._currentData[f]);
                            null !== e && a.push(e)
                        }
                        b({
                            results: a
                        })
                    }, e.prototype.addOptions = function(d, c) {
                    d = a.map(c, function(b) {
                        return a.data(b[0], "data")
                    });
                    this._currentData.push.apply(this._currentData, d)
                }, e
            }), e.define("select2/compat/matcher", ["jquery"], function(a) {
                return function(e) {
                    return function(d, c) {
                        var b = a.extend(!0, {}, c);
                        if (null == d.term || "" === a.trim(d.term)) return b;
                        if (c.children) {
                            for (var g = c.children.length - 1; 0 <=
                            g; g--) {
                                var h = c.children[g];
                                e(d.term, h.text, h) || b.children.splice(g, 1)
                            }
                            if (0 < b.children.length) return b
                        }
                        return e(d.term, c.text, c) ? b : null
                    }
                }
            }), e.define("select2/compat/query", [], function() {
                function a(f, d, c) {
                    c.get("debug") && window.console && console.warn && console.warn("Select2: The `query` option has been deprecated in favor of a custom data adapter that overrides the `query` method. Support will be removed for the `query` option in future versions of Select2.");
                    f.call(this, d, c)
                }
                return a.prototype.query =
                    function(a, d, c) {
                        d.callback = c;
                        this.options.get("query").call(null, d)
                    }, a
            }), e.define("select2/dropdown/attachContainer", [], function() {
                function a(f, d, c) {
                    f.call(this, d, c)
                }
                return a.prototype.position = function(a, d, c) {
                    c.find(".dropdown-wrapper").append(d);
                    d.addClass("select2-dropdown--below");
                    c.addClass("select2-container--below")
                }, a
            }), e.define("select2/dropdown/stopPropagation", [], function() {
                function a() {}
                return a.prototype.bind = function(a, d, c) {
                    a.call(this, d, c);
                    this.$dropdown.on("blur change click dblclick focus focusin focusout input keydown keyup keypress mousedown mouseenter mouseleave mousemove mouseover mouseup search touchend touchstart",
                        function(a) {
                            a.stopPropagation()
                        })
                }, a
            }), e.define("select2/selection/stopPropagation", [], function() {
                function a() {}
                return a.prototype.bind = function(a, d, c) {
                    a.call(this, d, c);
                    this.$selection.on("blur change click dblclick focus focusin focusout input keydown keyup keypress mousedown mouseenter mouseleave mousemove mouseover mouseup search touchend touchstart", function(a) {
                        a.stopPropagation()
                    })
                }, a
            }),
                function(f) {
                    "function" == typeof e.define && e.define.amd ? e.define("jquery-mousewheel", ["jquery"], f) : "object" ==
                    typeof exports ? module.exports = f : f(a)
                }(function(a) {
                    function e(g) {
                        var h = g || window.event,
                            k = l.call(arguments, 1),
                            q, r = 0,
                            w = 0,
                            F = 0,
                            G = 0,
                            L = 0;
                        if (g = a.event.fix(h), g.type = "mousewheel", "detail" in h && (w = -1 * h.detail), "wheelDelta" in h && (w = h.wheelDelta), "wheelDeltaY" in h && (w = h.wheelDeltaY), "wheelDeltaX" in h && (r = -1 * h.wheelDeltaX), "axis" in h && h.axis === h.HORIZONTAL_AXIS && (r = -1 * w, w = 0), q = 0 === w ? r : w, "deltaY" in h && (w = -1 * h.deltaY, q = w), "deltaX" in h && (r = h.deltaX, 0 === w && (q = -1 * r)), 0 !== w || 0 !== r) {
                            if (1 === h.deltaMode) {
                                var C = a.data(this,
                                    "mousewheel-line-height");
                                q *= C;
                                w *= C;
                                r *= C
                            } else 2 === h.deltaMode && (C = a.data(this, "mousewheel-page-height"), q *= C, w *= C, r *= C);
                            if (F = Math.max(Math.abs(w), Math.abs(r)), (!b || F < b) && (b = F, p.settings.adjustOldDeltas && "mousewheel" === h.type && 0 == F % 120 && (b /= 40)), p.settings.adjustOldDeltas && "mousewheel" === h.type && 0 == F % 120 && (q /= 40, r /= 40, w /= 40), q = Math[1 <= q ? "floor" : "ceil"](q / b), r = Math[1 <= r ? "floor" : "ceil"](r / b), w = Math[1 <= w ? "floor" : "ceil"](w / b), p.settings.normalizeOffset && this.getBoundingClientRect) h = this.getBoundingClientRect(),
                                G = g.clientX - h.left, L = g.clientY - h.top;
                            return g.deltaX = r, g.deltaY = w, g.deltaFactor = b, g.offsetX = G, g.offsetY = L, g.deltaMode = 0, k.unshift(g, q, r, w), c && clearTimeout(c), c = setTimeout(d, 200), (a.event.dispatch || a.event.handle).apply(this, k)
                        }
                    }

                    function d() {
                        b = null
                    }
                    var c, b, g = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
                        h = "onwheel" in document || 9 <= document.documentMode ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
                        l = Array.prototype.slice;
                    if (a.event.fixHooks)
                        for (var q = g.length; q;) a.event.fixHooks[g[--q]] =
                            a.event.mouseHooks;
                    var p = a.event.special.mousewheel = {
                        version: "3.1.12",
                        setup: function() {
                            if (this.addEventListener)
                                for (var b = h.length; b;) this.addEventListener(h[--b], e, !1);
                            else this.onmousewheel = e;
                            a.data(this, "mousewheel-line-height", p.getLineHeight(this));
                            a.data(this, "mousewheel-page-height", p.getPageHeight(this))
                        },
                        teardown: function() {
                            if (this.removeEventListener)
                                for (var b = h.length; b;) this.removeEventListener(h[--b], e, !1);
                            else this.onmousewheel = null;
                            a.removeData(this, "mousewheel-line-height");
                            a.removeData(this,
                                "mousewheel-page-height")
                        },
                        getLineHeight: function(b) {
                            b = a(b);
                            var c = b["offsetParent" in a.fn ? "offsetParent" : "parent"]();
                            return c.length || (c = a("body")), parseInt(c.css("fontSize"), 10) || parseInt(b.css("fontSize"), 10) || 16
                        },
                        getPageHeight: function(b) {
                            return a(b).height()
                        },
                        settings: {
                            adjustOldDeltas: !0,
                            normalizeOffset: !0
                        }
                    };
                    a.fn.extend({
                        mousewheel: function(a) {
                            return a ? this.bind("mousewheel", a) : this.trigger("mousewheel")
                        },
                        unmousewheel: function(a) {
                            return this.unbind("mousewheel", a)
                        }
                    })
                }), e.define("jquery.select2", ["jquery", "jquery-mousewheel", "./select2/core", "./select2/defaults"], function(a, e, d, c) {
                if (null == a.fn.select2) {
                    var b = ["open", "close", "destroy"];
                    a.fn.select2 = function(c) {
                        if ("object" == typeof(c = c || {})) return this.each(function() {
                            var b = a.extend(!0, {}, c);
                            new d(a(this), b)
                        }), this;
                        if ("string" == typeof c) {
                            var e, h = Array.prototype.slice.call(arguments, 1);
                            return this.each(function() {
                                var b = a(this).data("select2");
                                null == b && window.console && console.error && console.error("The select2('" + c + "') method was called on an element that is not using Select2.");
                                e = b[c].apply(b, h)
                            }), -1 < a.inArray(c, b) ? this : e
                        }
                        throw Error("Invalid arguments for Select2: " + c);
                    }
                }
                return null == a.fn.select2.defaults && (a.fn.select2.defaults = c), d
            }), {
                define: e.define,
                require: e.require
            }
        }(),
        h = l.require("jquery.select2");
    return a.fn.select2.amd = l, h
});
! function(a, l) {
    function h(b, c, d) {
        var e = b.children(c.headerTag),
            f = b.children(c.bodyTag);
        e.length > f.length ? T(Z, "contents") : e.length < f.length && T(Z, "titles");
        var g = c.startIndex;
        if (d.stepCount = e.length, c.saveState && a.cookie) c = a.cookie(ba + r(b)), c = parseInt(c, 0), !isNaN(c) && c < d.stepCount && (g = c);
        d.currentIndex = g;
        e.each(function(c) {
            var d = a(this);
            c = f.eq(c);
            var e = c.data("mode"),
                e = null == e ? V.html : t(V, /^\s*$/.test(e) || isNaN(e) ? e : parseInt(e, 0)),
                g = e === V.html || c.data("url") === l ? "" : c.data("url"),
                h = e !== V.html && "1" ===
                    c.data("loaded"),
                d = a.extend({}, I, {
                    title: d.html(),
                    content: e === V.html ? c.html() : "",
                    contentUrl: g,
                    contentMode: e,
                    contentLoaded: h
                });
            b.data("steps").push(d)
        })
    }

    function e(a, b) {
        var c = a.find(".steps li").eq(b.currentIndex);
        a.triggerHandler("finishing", [b.currentIndex]) ? (c.addClass("done").removeClass("error"), a.triggerHandler("finished", [b.currentIndex])) : c.addClass("error")
    }

    function f(a) {
        var b = a.data("eventNamespace");
        return null == b && (b = "." + r(a), a.data("eventNamespace", b)), b
    }

    function k(a, b) {
        var c = r(a);
        return a.find("#" +
            c + S + b)
    }

    function d(a, b) {
        var c = r(a);
        return a.find("#" + c + P + b)
    }

    function c(a) {
        return a.data("options")
    }

    function b(a) {
        return a.data("state")
    }

    function g(a, b) {
        a = a.data("steps");
        return (0 > b || b >= a.length) && T(U), a[b]
    }

    function r(a) {
        var b = a.data("uid");
        return null == b && (b = a._id(), null == b && (b = "steps-uid-".concat(W), a._id(b)), W++, a.data("uid", b)), b
    }

    function t(a, b) {
        if (fa("enumType", a), fa("keyOrValue", b), "string" == typeof b) return a = a[b], a === l && T("The enum key '{0}' does not exist.", b), a;
        if ("number" == typeof b) {
            for (var c in a)
                if (a[c] ===
                    b) return b;
            T("Invalid enum value '{0}'.", b)
        } else T("Invalid key or value type.")
    }

    function q(a, b, c, d) {
        if ((0 > d || d >= c.stepCount) && T(U), !(b.forceMoveForward && d < c.currentIndex)) {
            var e = c.currentIndex;
            return a.triggerHandler("stepChanging", [c.currentIndex, d]) ? (c.currentIndex = d, N(a, b, c), F(a, b, c, e), w(a, b, c), u(a, b, c), J(a, b, c, d, e, function() {
                a.triggerHandler("stepChanged", [d, e])
            })) : a.find(".steps li").eq(e).addClass("error"), !0
        }
    }

    function p(b) {
        var c = a.extend(!0, {}, wa, b);
        return this.each(function() {
            var b = a(this),
                d = {
                    currentIndex: c.startIndex,
                    currentStep: null,
                    stepCount: 0,
                    transitionElement: null
                };
            b.data("options", c);
            b.data("state", d);
            b.data("steps", []);
            h(b, c, d);
            L(b, c, d);
            d = f(b);
            b.bind("canceled" + d, c.onCanceled);
            b.bind("contentLoaded" + d, c.onContentLoaded);
            b.bind("finishing" + d, c.onFinishing);
            b.bind("finished" + d, c.onFinished);
            b.bind("init" + d, c.onInit);
            b.bind("stepChanging" + d, c.onStepChanging);
            b.bind("stepChanged" + d, c.onStepChanged);
            c.enableKeyNavigation && b.bind("keyup" + d, n);
            b.find(".actions a").bind("click" + d, x);
            c.autoFocus && 0 === W && k(b, c.startIndex).focus();
            b.triggerHandler("init", [c.startIndex])
        })
    }

    function v(b, c, e, f, g) {
        (0 > f || f > e.stepCount) && T(U);
        var h = g = a.extend({}, I, g);
        b.data("steps").splice(f, 0, h);
        e.currentIndex !== e.stepCount && e.currentIndex >= f && (e.currentIndex++, N(b, c, e));
        e.stepCount++;
        var h = b.find(".content"),
            k = a("<{0}>{1}</{0}>".format(c.headerTag, g.title)),
            l = a("<{0}></{0}>".format(c.bodyTag));
        return (null == g.contentMode || g.contentMode === V.html) && l.html(g.content), 0 === f ? h.prepend(l).prepend(k) : d(b, f -
            1).after(l).after(k), C(b, e, l, f), E(b, c, e, k, f), G(b, c, e, f), f === e.currentIndex && F(b, c, e), w(b, c, e), b
    }

    function n(d) {
        var e = a(this),
            f = c(e),
            g = b(e);
        if (f.suppressPaginationOnFocus && e.find(":focus").is(":input")) return d.preventDefault(), !1;
        37 === d.keyCode ? (d.preventDefault(), y(e, f, g, g.currentIndex - 1)) : 39 === d.keyCode && (d.preventDefault(), y(e, f, g, g.currentIndex + 1))
    }

    function u(b, c, e) {
        if (0 < e.stepCount) {
            var f = e.currentIndex,
                h = g(b, f);
            if (!c.enableContentCache || !h.contentLoaded) switch (t(V, h.contentMode)) {
                case V.iframe:
                    b.find(".content > .body").eq(e.currentIndex).empty().html('<iframe src="' +
                        h.contentUrl + '" frameborder="0" scrolling="no" />').data("loaded", "1");
                    break;
                case V.async:
                    var k = d(b, f)._aria("busy", "true").empty().append(K(c.loadingTemplate, {
                        text: c.labels.loading
                    }));
                    a.ajax({
                        url: h.contentUrl,
                        cache: !1
                    }).done(function(a) {
                        k.empty().html(a)._aria("busy", "false").data("loaded", "1");
                        b.triggerHandler("contentLoaded", [f])
                    })
            }
        }
    }

    function y(a, b, c, d) {
        var e = c.currentIndex;
        return 0 <= d && d < c.stepCount && !(b.forceMoveForward && d < c.currentIndex) ? (a = k(a, d), b = a.parent(), d = b.hasClass("disabled"), b._enableAria(),
            a.click(), e === c.currentIndex && d ? (b._enableAria(!1), !1) : !0) : !1
    }

    function x(d) {
        d.preventDefault();
        var f = a(this);
        d = f.parent().parent().parent().parent();
        var g = c(d),
            h = b(d),
            f = f.attr("href");
        switch (f.substring(f.lastIndexOf("#") + 1)) {
            case "cancel":
                d.triggerHandler("canceled");
                break;
            case "finish":
                e(d, h);
                break;
            case "next":
                y(d, g, h, h.currentIndex + 1);
                break;
            case "previous":
                y(d, g, h, h.currentIndex - 1)
        }
    }

    function w(a, b, c) {
        if (b.enablePagination) {
            var d = a.find(".actions [href$='#finish']").parent(),
                e = a.find(".actions a[href$='#next']").parent();
            b.forceMoveForward || a.find(".actions a[href$='#previous']").parent()._enableAria(0 < c.currentIndex);
            b.enableFinishButton && b.showFinishButtonAlways ? (d._enableAria(0 < c.stepCount), e._enableAria(1 < c.stepCount && c.stepCount > c.currentIndex + 1)) : (d._showAria(b.enableFinishButton && c.stepCount === c.currentIndex + 1), e._showAria(0 === c.stepCount || c.stepCount > c.currentIndex + 1)._enableAria(c.stepCount > c.currentIndex + 1 || !b.enableFinishButton))
        }
    }

    function F(b, c, d, e) {
        var f = k(b, d.currentIndex),
            g = a('<span class="current-info audible">' +
                c.labels.current + " </span>");
        c = b.find(".content > .title");
        null != e && (b = k(b, e), b.parent().addClass("done").removeClass("error")._selectAria(!1), c.eq(e).removeClass("current").next(".body").removeClass("current"), g = b.find(".current-info"), f.focus());
        f.prepend(g).parent()._selectAria().removeClass("done")._enableAria();
        c.eq(d.currentIndex).addClass("current").next(".body").addClass("current")
    }

    function G(a, b, c, d) {
        for (var e = r(a); d < c.stepCount; d++) {
            var f = e + S + d,
                g = e + P + d,
                h = e + O + d,
                k = a.find(".title").eq(d)._id(h);
            a.find(".steps a").eq(d)._id(f)._aria("controls", g).attr("href", "#" + h).html(K(b.titleTemplate, {
                index: d + 1,
                title: k.html()
            }));
            a.find(".body").eq(d)._id(g)._aria("labelledby", h)
        }
    }

    function L(b, c, d) {
        var e = t(na, c.stepsOrientation) === na.vertical ? " vertical" : "",
            f = a('<{0} class="{1}">{2}</{0}>'.format(c.contentContainerTag, "content " + c.clearFixCssClass, b.html())),
            g = a('<{0} class="{1}">{2}</{0}>'.format(c.stepsContainerTag, "steps " + c.clearFixCssClass, '<ul role="tablist"></ul>')),
            h = f.children(c.headerTag),
            k =
                f.children(c.bodyTag);
        b.attr("role", "application").empty().append(g).append(f).addClass(c.cssClass + " " + c.clearFixCssClass + e);
        k.each(function(c) {
            C(b, d, a(this), c)
        });
        h.each(function(e) {
            E(b, c, d, a(this), e)
        });
        F(b, c, d);
        M(b, c, d)
    }

    function C(a, b, c, d) {
        a = r(a);
        var e = a + O + d;
        c._id(a + P + d).attr("role", "tabpanel")._aria("labelledby", e).addClass("body")._showAria(b.currentIndex === d)
    }

    function M(a, b, c) {
        if (b.enablePagination) {
            var d = "";
            b.forceMoveForward || (d += '<li><a href="#{0}" role="menuitem">{1}</a></li>'.format("previous",
                b.labels.previous));
            d += '<li><a href="#{0}" role="menuitem">{1}</a></li>'.format("next", b.labels.next);
            b.enableFinishButton && (d += '<li><a href="#{0}" role="menuitem">{1}</a></li>'.format("finish", b.labels.finish));
            b.enableCancelButton && (d += '<li><a href="#{0}" role="menuitem">{1}</a></li>'.format("cancel", b.labels.cancel));
            a.append('<{0} class="actions {1}"><ul role="menu" aria-label="{2}">{3}</ul></{0}>'.format(b.actionContainerTag, b.clearFixCssClass, b.labels.pagination, d));
            w(a, b, c);
            u(a, b, c)
        }
    }

    function K(a,
               b) {
        for (var c = a.match(/#([a-z]*)#/gi), d = 0; d < c.length; d++) {
            var e = c[d],
                f = e.substring(1, e.length - 1);
            b[f] === l && T("The key '{0}' does not exist in the substitute collection!", f);
            a = a.replace(e, b[f])
        }
        return a
    }

    function E(b, c, d, e, g) {
        var h = r(b),
            k = h + S + g,
            l = h + P + g,
            h = h + O + g,
            n = b.find(".steps > ul"),
            q = K(c.titleTemplate, {
                index: g + 1,
                title: e.html()
            }),
            k = a('<li role="tab"><a id="' + k + '" href="#' + h + '" aria-controls="' + l + '">' + q + "</a></li>");
        k._enableAria(c.enableAllSteps || d.currentIndex > g);
        d.currentIndex > g && k.addClass("done");
        e._id(h).attr("tabindex", "-1").addClass("title");
        0 === g ? n.prepend(k) : n.find("li").eq(g - 1).after(k);
        0 === g && n.find("li").removeClass("first").eq(g).addClass("first");
        g === d.stepCount - 1 && n.find("li").removeClass("last").eq(g).addClass("last");
        k.children("a").bind("click" + f(b), Y)
    }

    function N(b, c, d) {
        c.saveState && a.cookie && a.cookie(ba + r(b), d.currentIndex)
    }

    function J(c, d, e, f, g, h) {
        var k = c.find(".content > .body");
        c = t(R, d.transitionEffect);
        var l = d.transitionEffectSpeed;
        d = k.eq(f);
        k = k.eq(g);
        switch (c) {
            case R.fade:
            case R.slide:
                f =
                    c === R.fade ? "fadeOut" : "slideUp";
                var n = c === R.fade ? "fadeIn" : "slideDown";
                e.transitionElement = d;
                k[f](l, function() {
                    var c = a(this)._showAria(!1).parent().parent(),
                        c = b(c);
                    c.transitionElement && (c.transitionElement[n](l, function() {
                        a(this)._showAria()
                    }).promise().done(h), c.transitionElement = null)
                });
                break;
            case R.slideLeft:
                e = k.outerWidth(!0);
                c = f > g ? e : -e;
                a.when(k.animate({
                    left: f > g ? -e : e
                }, l, function() {
                    a(this)._showAria(!1)
                }), d.css("left", c + "px")._showAria().animate({
                    left: 0
                }, l)).done(h);
                break;
            default:
                a.when(k._showAria(!1),
                    d._showAria()).done(h)
        }
    }

    function Y(d) {
        d.preventDefault();
        var e = a(this);
        d = e.parent().parent().parent().parent();
        var f = c(d),
            g = b(d),
            h = g.currentIndex;
        e.parent().is(":not(.disabled):not(.current)") && (e = e.attr("href"), e = parseInt(e.substring(e.lastIndexOf("-") + 1), 0), q(d, f, g, e));
        return h === g.currentIndex ? (k(d, h).focus(), !1) : void 0
    }

    function T(a) {
        throw 1 < arguments.length && (a = a.format(Array.prototype.slice.call(arguments, 1))), Error(a);
    }

    function fa(a, b) {
        null == b && T("The argument '{0}' is null or undefined.", a)
    }
    a.fn.extend({
        _aria: function(a, b) {
            return this.attr("aria-" + a, b)
        },
        _removeAria: function(a) {
            return this.removeAttr("aria-" + a)
        },
        _enableAria: function(a) {
            return null == a || a ? this.removeClass("disabled")._aria("disabled", "false") : this.addClass("disabled")._aria("disabled", "true")
        },
        _showAria: function(a) {
            return null == a || a ? this.show()._aria("hidden", "false") : this.hide()._aria("hidden", "true")
        },
        _selectAria: function(a) {
            return null == a || a ? this.addClass("current")._aria("selected", "true") : this.removeClass("current")._aria("selected",
                "false")
        },
        _id: function(a) {
            return a ? this.attr("id", a) : this.attr("id")
        }
    });
    String.prototype.format || (String.prototype.format = function() {
        for (var b = 1 === arguments.length && a.isArray(arguments[0]) ? arguments[0] : arguments, c = this, d = 0; d < b.length; d++) c = c.replace(new RegExp("\\{" + d + "\\}", "gm"), b[d]);
        return c
    });
    var W = 0,
        ba = "jQu3ry_5teps_St@te_",
        S = "-t-",
        P = "-p-",
        O = "-h-",
        U = "Index out of range.",
        Z = "One or more corresponding step {0} are missing.";
    a.fn.steps = function(b) {
        return a.fn.steps[b] ? a.fn.steps[b].apply(this, Array.prototype.slice.call(arguments,
            1)) : "object" != typeof b && b ? void a.error("Method " + b + " does not exist on jQuery.steps") : p.apply(this, arguments)
    };
    a.fn.steps.add = function(a) {
        var d = b(this);
        return v(this, c(this), d, d.stepCount, a)
    };
    a.fn.steps.destroy = function() {
        var b = c(this),
            d = f(this);
        this.unbind(d).removeData("uid").removeData("options").removeData("state").removeData("steps").removeData("eventNamespace").find(".actions a").unbind(d);
        this.removeClass(b.clearFixCssClass + " vertical");
        b = this.find(".content > *");
        b.removeData("loaded").removeData("mode").removeData("url");
        b.removeAttr("id").removeAttr("role").removeAttr("tabindex").removeAttr("class").removeAttr("style")._removeAria("labelledby")._removeAria("hidden");
        this.find(".content > [data-mode='async'],.content > [data-mode='iframe']").empty();
        b = a('<{0} class="{1}"></{0}>'.format(this.get(0).tagName, this.attr("class")));
        d = this._id();
        return null != d && "" !== d && b._id(d), b.html(this.find(".content").html()), this.after(b), this.remove(), b
    };
    a.fn.steps.finish = function() {
        e(this, b(this))
    };
    a.fn.steps.getCurrentIndex = function() {
        return b(this).currentIndex
    };
    a.fn.steps.getCurrentStep = function() {
        return g(this, b(this).currentIndex)
    };
    a.fn.steps.getStep = function(a) {
        return g(this, a)
    };
    a.fn.steps.insert = function(a, d) {
        return v(this, c(this), b(this), a, d)
    };
    a.fn.steps.next = function() {
        var a = c(this),
            d = b(this);
        return y(this, a, d, d.currentIndex + 1)
    };
    a.fn.steps.previous = function() {
        var a = c(this),
            d = b(this);
        return y(this, a, d, d.currentIndex - 1)
    };
    a.fn.steps.remove = function(a) {
        var e = c(this),
            f = b(this);
        if (0 > a || a >= f.stepCount || f.currentIndex === a) a = !1;
        else {
            this.data("steps").splice(a,
                1);
            f.currentIndex > a && (f.currentIndex--, N(this, e, f));
            f.stepCount--;
            var g = r(this);
            a = (this.find("#" + g + O + a).remove(), d(this, a).remove(), k(this, a).parent().remove(), 0 === a && this.find(".steps li").first().addClass("first"), a === f.stepCount && this.find(".steps li").eq(a).addClass("last"), G(this, e, f, a), w(this, e, f), !0)
        }
        return a
    };
    a.fn.steps.setStep = function() {
        throw Error("Not yet implemented!");
    };
    a.fn.steps.skip = function() {
        throw Error("Not yet implemented!");
    };
    var V = a.fn.steps.contentMode = {
            html: 0,
            iframe: 1,
            async: 2
        },
        na = a.fn.steps.stepsOrientation = {
            horizontal: 0,
            vertical: 1
        },
        R = a.fn.steps.transitionEffect = {
            none: 0,
            fade: 1,
            slide: 2,
            slideLeft: 3
        },
        I = a.fn.steps.stepModel = {
            title: "",
            content: "",
            contentUrl: "",
            contentMode: V.html,
            contentLoaded: !1
        },
        wa = a.fn.steps.defaults = {
            headerTag: "h1",
            bodyTag: "div",
            contentContainerTag: "div",
            actionContainerTag: "div",
            stepsContainerTag: "div",
            cssClass: "wizard",
            clearFixCssClass: "clearfix",
            stepsOrientation: na.horizontal,
            titleTemplate: '<span class="number">#index#.</span> #title#',
            loadingTemplate: '<span class="spinner"></span> #text#',
            autoFocus: !1,
            enableAllSteps: !1,
            enableKeyNavigation: !0,
            enablePagination: !0,
            suppressPaginationOnFocus: !0,
            enableContentCache: !0,
            enableCancelButton: !1,
            enableFinishButton: !0,
            preloadContent: !1,
            showFinishButtonAlways: !1,
            forceMoveForward: !1,
            saveState: !1,
            startIndex: 0,
            transitionEffect: R.none,
            transitionEffectSpeed: 200,
            onStepChanging: function() {
                return !0
            },
            onStepChanged: function() {},
            onCanceled: function() {},
            onFinishing: function() {
                return !0
            },
            onFinished: function() {},
            onContentLoaded: function() {},
            onInit: function() {},
            labels: {
                cancel: "Cancel",
                current: "current step:",
                pagination: "Pagination",
                finish: "Finish",
                next: "Next",
                previous: "Previous",
                loading: "Loading ..."
            }
        }
}(jQuery);
(function() {
    function a(a) {
        return a.replace(/<.[^<>]*?>/g, " ").replace(/&nbsp;|&#160;/gi, " ").replace(/[.(),;:!?%#$'"_+=\/\-]*/g, "")
    }
    jQuery.validator.addMethod("maxWords", function(l, h, e) {
        return this.optional(h) || a(l).match(/\b\w+\b/g).length <= e
    }, jQuery.validator.format("Please enter {0} words or less."));
    jQuery.validator.addMethod("minWords", function(l, h, e) {
        return this.optional(h) || a(l).match(/\b\w+\b/g).length >= e
    }, jQuery.validator.format("Please enter at least {0} words."));
    jQuery.validator.addMethod("rangeWords",
        function(l, h, e) {
            l = a(l);
            var f = /\b\w+\b/g;
            return this.optional(h) || l.match(f).length >= e[0] && l.match(f).length <= e[1]
        }, jQuery.validator.format("Please enter between {0} and {1} words."))
})();
jQuery.validator.addMethod("letterswithbasicpunc", function(a, l) {
    return this.optional(l) || /^[a-z\-.,()'"\s]+$/i.test(a)
}, "Letters or punctuation only please");
jQuery.validator.addMethod("alphanumeric", function(a, l) {
    return this.optional(l) || /^\w+$/i.test(a)
}, "Letters, numbers, and underscores only please");
jQuery.validator.addMethod("lettersonly", function(a, l) {
    return this.optional(l) || /^[a-z]+$/i.test(a)
}, "Letters only please");
jQuery.validator.addMethod("nowhitespace", function(a, l) {
    return this.optional(l) || /^\S+$/i.test(a)
}, "No white space please");
jQuery.validator.addMethod("ziprange", function(a, l) {
    return this.optional(l) || /^90[2-5]\d\{2\}-\d{4}$/.test(a)
}, "Your ZIP-code must be in the range 902xx-xxxx to 905-xx-xxxx");
jQuery.validator.addMethod("zipcodeUS", function(a, l) {
    return this.optional(l) || /\d{5}-\d{4}$|^\d{5}$/.test(a)
}, "The specified US ZIP Code is invalid");
jQuery.validator.addMethod("integer", function(a, l) {
    return this.optional(l) || /^-?\d+$/.test(a)
}, "A positive or negative non-decimal number please");
jQuery.validator.addMethod("vinUS", function(a) {
    if (17 !== a.length) return !1;
    var l, h, e, f, k, d = "ABCDEFGHJKLMNPRSTUVWXYZ".split(""),
        c = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 7, 9, 2, 3, 4, 5, 6, 7, 8, 9],
        b = [8, 7, 6, 5, 4, 3, 2, 10, 0, 9, 8, 7, 6, 5, 4, 3, 2],
        g = 0;
    for (l = 0; 17 > l; l++) {
        f = b[l];
        e = a.slice(l, l + 1);
        8 === l && (k = e);
        if (isNaN(e))
            for (h = 0; h < d.length; h++) {
                if (e.toUpperCase() === d[h]) {
                    e = c[h];
                    e *= f;
                    isNaN(k) && 8 === h && (k = d[h]);
                    break
                }
            } else e *= f;
        g += e
    }
    a = g % 11;
    10 === a && (a = "X");
    return a === k ? !0 : !1
}, "The specified vehicle identification number (VIN) is invalid.");
jQuery.validator.addMethod("dateITA", function(a, l) {
    if (/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(a)) {
        var h = a.split("/");
        a = parseInt(h[0], 10);
        var e = parseInt(h[1], 10),
            h = parseInt(h[2], 10),
            f = new Date(h, e - 1, a);
        a = f.getFullYear() === h && f.getMonth() === e - 1 && f.getDate() === a ? !0 : !1
    } else a = !1;
    return this.optional(l) || a
}, "Please enter a correct date");
jQuery.validator.addMethod("dateNL", function(a, l) {
    return this.optional(l) || /^(0?[1-9]|[12]\d|3[01])[\.\/\-](0?[1-9]|1[012])[\.\/\-]([12]\d)?(\d\d)$/.test(a)
}, "Vul hier een geldige datum in.");
jQuery.validator.addMethod("time", function(a, l) {
    return this.optional(l) || /^([01]\d|2[0-3])(:[0-5]\d){1,2}$/.test(a)
}, "Please enter a valid time, between 00:00 and 23:59");
jQuery.validator.addMethod("time12h", function(a, l) {
    return this.optional(l) || /^((0?[1-9]|1[012])(:[0-5]\d){1,2}( ?[AP]M))$/i.test(a)
}, "Please enter a valid time in 12-hour format");
jQuery.validator.addMethod("phoneType", function(a, l) {
    a = a.replace(/\(|\)|\s+|-/g, "");
    return this.optional(l) || 9 < a.length && a.match(/^\+\d{1,3}\s?\d{10,12}$/)
}, "Please use the specified format");
jQuery.validator.addMethod("mobileUK", function(a, l) {
    return this.optional(l) || 9 < a.length && a.match(/^(?:(?:(?:00\s?|\+)44\s?|0)7(?:[45789]\d{2}|624)\s?\d{3}\s?\d{3})$/)
}, "Please specify a valid mobile number");
jQuery.validator.addMethod("phonesUK", function(a, l) {
    a = a.replace(/\s+|-/g, "");
    return this.optional(l) || 9 < a.length && a.match(/^(?:(?:(?:00\s?|\+)44\s?|0)(?:1\d{8,9}|[23]\d{9}|7(?:[45789]\d{8}|624\d{6})))$/)
}, "Please specify a valid uk phone number");
jQuery.validator.addMethod("postcodeUK", function(a, l) {
    a = a.toUpperCase().replace(/\s+/g, "");
    return this.optional(l) || a.match(/^([^QZ][^IJZ]{0,1}\d{1,2})(\d[^CIKMOV]{2})$/) || a.match(/^([^QV]\d[ABCDEFGHJKSTUW])(\d[^CIKMOV]{2})$/) || a.match(/^([^QV][^IJZ]\d[ABEHMNPRVWXY])(\d[^CIKMOV]{2})$/) || a.match(/^(GIR)(0AA)$/) || a.match(/^(BFPO)(\d{1,4})$/) || a.match(/^(BFPO)(C\/O\d{1,3})$/)
}, "Please specify a valid postcode");
jQuery.validator.addMethod("strippedminlength", function(a, l, h) {
    return jQuery(a).text().length >= h
}, jQuery.validator.format("Please enter at least {0} characters"));
jQuery.validator.addMethod("email2", function(a, l, h) {
    return this.optional(l) || /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)*(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i.test(a)
}, jQuery.validator.messages.email);
jQuery.validator.addMethod("url2", function(a, l, h) {
        return this.optional(l) || /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)*(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(a)
    },
    jQuery.validator.messages.url);
jQuery.validator.addMethod("creditcardtypes", function(a, l, h) {
    if (/[^0-9\-]+/.test(a)) return !1;
    a = a.replace(/\D/g, "");
    l = 0;
    h.mastercard && (l |= 1);
    h.visa && (l |= 2);
    h.amex && (l |= 4);
    h.dinersclub && (l |= 8);
    h.enroute && (l |= 16);
    h.discover && (l |= 32);
    h.jcb && (l |= 64);
    h.unknown && (l |= 128);
    h.all && (l = 255);
    return l & 1 && /^(5[12345])/.test(a) || l & 2 && /^(4)/.test(a) ? 16 === a.length : l & 4 && /^(3[47])/.test(a) ? 15 === a.length : l & 8 && /^(3(0[012345]|[68]))/.test(a) ? 14 === a.length : l & 16 && /^(2(014|149))/.test(a) ? 15 === a.length : l & 32 && /^(6011)/.test(a) ||
    l & 64 && /^(3)/.test(a) ? 16 === a.length : l & 64 && /^(2131|1800)/.test(a) ? 15 === a.length : l & 128 ? !0 : !1
}, "Please enter a valid credit card number.");
jQuery.validator.addMethod("ipv4", function(a, l, h) {
    return this.optional(l) || /^(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)$/i.test(a)
}, "Please enter a valid IP v4 address.");
jQuery.validator.addMethod("ipv6", function(a, l, h) {
    return this.optional(l) || /^((([0-9A-Fa-f]{1,4}:){7}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}:[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){5}:([0-9A-Fa-f]{1,4}:)?[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){4}:([0-9A-Fa-f]{1,4}:){0,2}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){3}:([0-9A-Fa-f]{1,4}:){0,3}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){2}:([0-9A-Fa-f]{1,4}:){0,4}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(([0-9A-Fa-f]{1,4}:){0,5}:((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(::([0-9A-Fa-f]{1,4}:){0,5}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|([0-9A-Fa-f]{1,4}::([0-9A-Fa-f]{1,4}:){0,5}[0-9A-Fa-f]{1,4})|(::([0-9A-Fa-f]{1,4}:){0,6}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){1,7}:))$/i.test(a)
}, "Please enter a valid IP v6 address.");
jQuery.validator.addMethod("pattern", function(a, l, h) {
    if (this.optional(l)) return !0;
    "string" === typeof h && (h = new RegExp("^(?:" + h + ")$"));
    return h.test(a)
}, "Invalid format.");
jQuery.validator.addMethod("require_from_group", function(a, l, h) {
    var e = this;
    a = h[1];
    h = $(a, l.form).filter(function() {
        return e.elementValue(this)
    }).length >= h[0];
    $(l).data("being_validated") || (l = $(a, l.form), l.data("being_validated", !0), l.valid(), l.data("being_validated", !1));
    return h
}, "Please fill at least {0} of these fields.");
jQuery.validator.addMethod("skip_or_fill_minimum", function(a, l, h) {
    var e = this;
    a = h[0];
    h = h[1];
    var f = $(h, l.form).filter(function() {
        return e.elementValue(this)
    }).length;
    a = f >= a || 0 === f;
    $(l).data("being_validated") || (l = $(h, l.form), l.data("being_validated", !0), l.valid(), l.data("being_validated", !1));
    return a
}, "Please either skip these fields or fill at least {0} of them.");
jQuery.validator.addMethod("accept", function(a, l, h) {
    a = "string" === typeof h ? h.replace(/\s/g, "").replace(/,/g, "|") : "image/*";
    h = this.optional(l);
    var e;
    if (h) return h;
    if ("file" === $(l).attr("type") && (a = a.replace(/\*/g, ".*"), l.files && l.files.length))
        for (h = 0; h < l.files.length; h++)
            if (e = l.files[h], !e.type.match(new RegExp(".?(" + a + ")$", "i"))) return !1;
    return !0
}, "Please enter a value with a valid mimetype.");
jQuery.validator.addMethod("extension", function(a, l, h) {
    h = "string" === typeof h ? h.replace(/,/g, "|") : "png|jpe?g|gif";
    return this.optional(l) || a.match(new RegExp(".(" + h + ")$", "i"))
}, "Please enter a value with a valid extension.");
$.validator.addMethod("fileSize", function(a, l, h) {
    return this.optional(l) || l.files[0].size <= h
}, "File size must be less than {0} Bytes");
jQuery.validator.addMethod("lettersOnly", function(a, l) {
    return this.optional(l) || /^[a-z]+$/i.test(a)
}, "Only Letters allowed");
$.validator.addMethod("maxImageWidth", function(a, l, h) {
    return ($(l).data("imageWidth") || 0) <= h
}, function(a, l) {
    return $(l).data("imageWidth") ? "Your image's width must be less than " + a + "px" : "Selected file is not an image."
});
var form = $("#studentReg"),
    progressbar = $(".progress-bar"),
    validator = form.validate({
        ignore: "",
        errorPlacement: function(a, l) {
            l.before(a)
        },
        rules: {
            idNo: {
                minlength: 4,
                required: !0
            },
            passport: {
                accept: "png|jpg|jpeg",
                fileSize: 21E5,
                maxImageWidth: 200,
                required: function() {
                    return "" == $("#passportPhoto").val()
                }
            },
            phoneNo: {
                phoneType: !0
            },
            proAttachment: {
                fileSize: 51E5,
                extension: "png|jpg|pdf|doc|docx|jpeg|zip",
                required: function() {
                    return "" != $("#proCourse").val() && "" == $("#professionalAttachment").val()
                }
            },
            phoneNo2: {
                phoneType: !0
            },
            professionalAttachment: {
                required: function() {
                    return "" != $("#proCourse").val()
                }
            },
            passportPhoto: {
                required: !0
            },
            bankAttachment: {
                required: !0
            },
            sponsorAttachment: {
                required: !0
            },
            sponsorName: {
                required: function(a) {
                    return "SelfSponsored" != $(a).closest("form").find(".sponsor").val()
                }
            },
            sponsorEmail: {
                email: !0,
                required: function(a) {
                    return "SelfSponsored" != $(a).closest("form").find(".sponsor").val()
                }
            },
            sponsorContact: {
                phoneType: !0,
                required: function(a) {
                    return "SelfSponsored" != $(a).closest("form").find(".sponsor").val()
                }
            },
            email: {
                required: !0,
                email: !0,
                remote: {
                    url: icparContext + "/studentApplication/checkEmail",
                    type: "get",
                    data: {
                        email: function() {
                            return $("#email").val()
                        },
                        program: function() {
                            return $("#program").val()
                        }
                    }
                }
            },
            bankDepositDate: {
                required: function(a) {
                    return "BankDeposit" == $(a).closest("form").find(".payment").val()
                }
            },
            bankDepositPaymentRefNo: {
                required: function(a) {
                    return "BankDeposit" == $(a).closest("form").find(".payment").val()
                }
            },
            accountNumber: {
                required: function(a) {
                    return "BankDeposit" == $(a).closest("form").find(".payment").val()
                }
            },
            branch: {
                required: function(a) {
                    return "BankDeposit" == $(a).closest("form").find(".payment").val()
                }
            },
            bankDepositorNames: {
                required: function(a) {
                    return "BankDeposit" == $(a).closest("form").find(".payment").val()
                }
            },
            bankDepositAmount: {
                min: 55E3,
                required: function(a) {
                    return "BankDeposit" == $(a).closest("form").find(".payment").val()
                }
            },
            bankSlip: {
                fileSize: 51E5,
                extension: "png|jpg|pdf|doc|docx|jpeg|zip",
                required: function(a) {
                    return "BankDeposit" == $(".payment").val() && "" == $("#bankAttachment").val()
                }
            },
            sponsorDepositDate: {
                required: function(a) {
                    return "SponsorDeposit" ==
                        $(a).closest("form").find(".payment").val()
                }
            },
            sponsorDepositorNames: {
                required: function(a) {
                    return "SponsorDeposit" == $(a).closest("form").find(".payment").val()
                }
            },
            sponsorDepositAmount: {
                min: 55E3,
                required: function(a) {
                    return "SponsorDeposit" == $(a).closest("form").find(".payment").val()
                }
            },
            sponsorDepositAttachment: {
                fileSize: 51E5,
                extension: "png|jpg|pdf|doc|docx|jpeg|zip",
                required: function(a) {
                    return "SponsorDeposit" == $(".payment").val() && "" == $("#sponsorAttachment").val()
                }
            },
            sponsorDepositPaymentRefNo: {
                required: function(a) {
                    return "SponsorDeposit" ==
                        $(a).closest("form").find(".payment").val()
                }
            },
            mobileMoneyDate: {
                required: function(a) {
                    return "MobileMoneyDeposit" == $(a).closest("form").find(".payment").val()
                }
            },
            mobileMoneyPaymentRefNo: {
                required: function(a) {
                    return "MobileMoneyDeposit" == $(a).closest("form").find(".payment").val()
                }
            },
            mobileMoneyDepositorNames: {
                digits: !1,
                required: function(a) {
                    return "MobileMoneyDeposit" == $(a).closest("form").find(".payment").val()
                }
            },
            serviceProvider: {
                required: function(a) {
                    return "MobileMoneyDeposit" == $(a).closest("form").find(".payment").val()
                }
            },
            mobileMoneyPhoneNumber: {
                phoneType: !0,
                required: function(a) {
                    return "MobileMoneyDeposit" == $(a).closest("form").find(".payment").val()
                }
            },
            mobileMoneyAmount: {
                min: 55E3,
                required: function(a) {
                    return "MobileMoneyDeposit" == $(a).closest("form").find(".payment").val()
                }
            },
            sponsorID: {
                required: function() {
                    return "School" == $("#sponsorshipType").val() || "WorkPlace" == $("#sponsorshipType").val()
                }
            }
        },
        messages: {
            idNo: {
                remote: "This ID No. is already registered!",
                minlength: "Please enter a valid ID No!"
            },
            email: {
                remote: "This email is already registered!",
                email: "Please use a valid email address!"
            },
            passport: {
                accept: "Only jpeg, png and jpg formats are allowed!",
                fileSize: "Photo should not be greater than 2 MBs!",
                checkDim: "Max-width(600pixels) and Max-height(600pixels)",
                maxImageWidth: "The image width should not exceed 200 pixels"
            },
            bankDepositAmount: {
                min: "Application fee should be 55000"
            },
            sponsorDepositAmount: {
                min: "Application fee should be 55000"
            },
            mobileMoneyAmount: {
                min: "Application fee should be 55000"
            },
            bankAttachment: {
                required: "Please upload your file to proceed"
            },
            sponsorAttachment: {
                required: "Please upload your file to proceed"
            },
            bankSlip: {
                fileSize: "File should be less than 5MBs",
                extension: "Only formats below are allowed!"
            },
            sponsorDepositAttachment: {
                fileSize: "File should be less than 5MBs",
                extension: "Only formats below are allowed!"
            },
            passportPhoto: {
                required: "Please upload your file to proceed!"
            },
            proAttachment: {
                required: "Please upload your file to proceed!"
            },
            professionalAttachment: {
                required: "Please upload your file to proceed!"
            }
        },
        submitHandler: function(a) {
            $(a).ajaxSubmit({
                beforeSubmit: function() {
                    $("#progress-bar").width("0%")
                },
                success: function(a) {
                    $("#loader-icon").hide();
                    window.location = icparContext + "/studentApplication/application-success"
                },
                error: function(a) {
                    alert("An error has occured! Check your form and correct any mistakes in your data");
                    $("#progress-bar").css({
                        display: "none"
                    })
                },
                uploadProgress: function(a, h, e, f) {
                    $("#progress-div").css({
                        display: "block"
                    });
                    $("#progress-bar").width(f + "%");
                    $("#progress-bar").html('<div id="progress-status">Sending...' + f + " %</div>")
                }
            })
        }
    });
form.steps({
    headerTag: "h3",
    bodyTag: "section",
    transitionEffect: "slideLeft",
    stepsOrientation: "vertical",
    onStepChanging: function(a, l, h) {
        if (l > h) return !0;
        l < h && (form.find(".body:eq(" + h + ") label.error").remove(), form.find(".body:eq(" + h + ") .error").removeClass("error"));
        form.validate().settings.ignore = ":disabled,:hidden";
        return form.valid()
    },
    onFinishing: function(a, l) {
        form.validate().settings.ignore = ":disabled,:hidden";
        return form.valid()
    },
    onFinished: function(a, l) {
        $(this).submit()
    }
});
var memberForm = $("#memberReg"),
    requiredRuleSet = {
        required: !0
    },
    contactRuleSet = {
        phoneType: !0
    },
    memberValidator = memberForm.validate({
        ignore: "",
        errorPlacement: function(a, l) {
            l.before(a)
        },
        rules: {
            membershipType: requiredRuleSet,
            idNo: requiredRuleSet,
            title: requiredRuleSet,
            city: requiredRuleSet,
            learnAboutUs: requiredRuleSet,
            firstName: requiredRuleSet,
            lastName: requiredRuleSet,
            dateOfBirth: requiredRuleSet,
            passport: {
                accept: "image/*",
                fileSize: 21E5,
                maxImageWidth: 200,
                required: function() {
                    return "" == $("#passportPhoto").val()
                }
            },
            phoneNo: contactRuleSet,
            organizationContact: contactRuleSet,
            phoneNo2: contactRuleSet,
            passportPhoto: requiredRuleSet,
            bankAttachment: requiredRuleSet,
            email: {
                required: !0,
                email: !0,
                remote: {
                    url: icparContext + "/member/checkEmail",
                    type: "get",
                    data: {
                        email: function() {
                            return $("#email").val()
                        },
                        membershipType: function() {
                            return $("#membershipType").val()
                        }
                    }
                }
            },
            bankDepositDate: {
                required: function() {
                    return "BankDeposit" == $(".payment").val()
                }
            },
            bankDepositPaymentRefNo: {
                required: function() {
                    return "BankDeposit" == $(".payment").val()
                }
            },
            accountNumber: {
                required: function() {
                    return "BankDeposit" == $(".payment").val()
                }
            },
            branch: {
                required: function() {
                    return "BankDeposit" == $(".payment").val()
                }
            },
            bankDepositorNames: {
                required: function() {
                    return "BankDeposit" == $(".payment").val()
                }
            },
            bankDepositAmount: {
                min: 55E3,
                required: function() {
                    return "BankDeposit" == $(".payment").val()
                }
            },
            bankSlip: {
                fileSize: 51E5,
                extension: "png|jpg|pdf|doc|docx",
                required: function() {
                    return "BankDeposit" == $(".payment").val() && "" == $("#bankAttachment").val()
                }
            },
            bankDepositDateb: {
                required: !0
            },
            bankDepositPaymentRefNob: {
                required: !0
            },
            accountNumberb: {
                required: !0
            },
            branchb: {
                required: !0
            },
            bankDepositorNamesb: {
                required: !0
            },
            bankDepositAmountb: {
                min: 55E3,
                required: !0
            },
            bankSlipb: {
                fileSize: 51E5,
                extension: "png|jpg|pdf|doc|docx",
                required: function() {
                    return "" === $("#bankAttachmentb").val()
                }
            }
        },
        messages: {
            email: {
                remote: "This email is already registered!",
                email: "Please use a valid email address!"
            },
            passport: {
                accept: "Only jpeg, png and jpg formats are allowed!",
                fileSize: "Photo should not be greater than 2 MBs!",
                checkDim: "Max-width(600pixels) and Max-height(600pixels)",
                maxImageWidth: "The image width should not exceed 200 pixels"
            },
            bankDepositAmount: {
                min: "Application fee should be 55000"
            },
            mobileMoneyAmount: {
                min: "Application fee should be 55000"
            },
            bankAttachment: {
                required: "Please upload your file to proceed"
            },
            sponsorAttachment: {
                required: "Please upload your file to proceed"
            },
            bankSlip: {
                fileSize: "File should be less than 5MBs",
                extension: "Only formats below are allowed!"
            },
            passportPhoto: {
                required: "Please upload your file to proceed!"
            }
        },
        submitHandler: function(a) {
            $(a).ajaxSubmit({
                beforeSubmit: function() {
                    $("#progress-bar").width("0%")
                },
                success: function(a) {
                    $("#loader-icon").hide();
                    window.location = icparContext + "/studentApplication/application-success"
                },
                error: function(a) {
                    alert("An error has occured! Check your form and correct any mistakes in your data");
                    $("#progress-bar").css({
                        display: "none"
                    })
                },
                uploadProgress: function(a, h, e, f) {
                    $("#progress-div").css({
                        display: "block"
                    });
                    $("#progress-bar").width(f + "%");
                    $("#progress-bar").html('<div id="progress-status">Sending...' +
                        f + " %</div>")
                }
            })
        }
    });
memberForm.steps({
    headerTag: "h3",
    bodyTag: "section",
    transitionEffect: "slideLeft",
    stepsOrientation: "vertical",
    onStepChanging: function(a, l, h) {
        if (l > h) return !0;
        l < h && (memberForm.find(".body:eq(" + h + ") label.error").remove(), memberForm.find(".body:eq(" + h + ") .error").removeClass("error"));
        memberForm.validate().settings.ignore = ":disabled,:hidden";
        return memberForm.valid()
    },
    onFinishing: function(a, l) {
        memberForm.validate().settings.ignore = ":disabled,:hidden";
        return memberForm.valid()
    },
    onFinished: function(a, l) {
        $(this).submit()
    }
});
"undefined" !== typeof jQuery && function(a) {
    a(document).ajaxStart(function() {
        a("#spinner").fadeIn()
    }).ajaxStop(function() {
        a("#spinner").fadeOut()
    })
}(jQuery);
$("#program").select2({});
$("#educationLevel").select2({});
$("#gender").select2({});
$("#nationality").select2({});
$("#country").select2({});
$(".max-year").attr("max", (new Date).getFullYear());
$("#selectExemption").select2({
    theme: "classic"
});
$("#selectCountry").select2({
    theme: "classic"
});
var datefield = document.createElement("input");
datefield.setAttribute("type", "date");
"date" !== datefield.type && (document.write('<link href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8/themes/base/jquery-ui.css" rel="stylesheet" type="text/css" />\n'), document.write('<script src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8/jquery-ui.min.js">\x3c/script>\n'), document.write('<script src="http://code.jquery.com/jquery-migrate-1.0.0.js">\x3c/script>\n'));
jQuery("nav#dropdown").meanmenu();
$(document).ready(function() {
    null !== document.getElementById("educationRecordFile") && $("#educationRecordFile").rules("add", {
        required: !0,
        fileSize: 51E5,
        extension: "png|jpg|pdf|doc|docx",
        messages: {
            fileSize: "File should be less than 5MBs",
            extension: "Only formats below are allowed!"
        }
    })
});
null !== document.getElementById("sponsorshipType") && document.getElementById("sponsorshipType").addEventListener("change", function() {
    var a = "SelfSponsored" === this.value ? "none" : "block";
    document.getElementById("sponsorDetails").style.display = a
});
null !== document.getElementById("trainingCenter") && document.getElementById("trainingCenter").addEventListener("change", function() {
    var a = "Other" !== this.value ? "none" : "block";
    document.getElementById("otherTrainingCenter").style.display = a
});
var examRequestForm = $("#examRequest");
0 < examRequestForm.length && examRequestForm.validate({
    errorPlacement: function(a, l) {
        l.before(a)
    }
});
var sponsorDeposit = $("#sponsorDeposit");
if (0 < sponsorDeposit.length) $("#sponsorType").on("change", function() {
    $("#sponsorName").find("option").remove();
    if ("School" === this.value || "WorkPlace" === this.value) {
        var a = new FormData;
        a.append("sponsorType", this.value);
        $.ajax({
            url: icparContext + "/home/getSponsorsList",
            cache: !1,
            processData: !1,
            contentType: !1,
            type: "POST",
            success: function(a, h, e) {
                $("#sponsorName").append($("<option>", {
                    value: "",
                    text: "Select " + $("#sponsorType").val()
                }));
                $.each(a, function(a, e) {
                    $("#sponsorName").append($("<option>", {
                        value: e.id,
                        text: e.name
                    }))
                })
            },
            headers: {
                Authorization: "ec5ce080a64941c68a84cac8f28293dd"
            },
            data: a
        });
        $("#sponsorNameDiv").css({
            display: "block"
        });
        $("#depositorNameDiv").css({
            display: "none"
        })
    } else $("#sponsorNameDiv").css({
        display: "none"
    }), $("#depositorNameDiv").css({
        display: "block"
    })
});
var studentSponsor = $("#sponsorshipType");
if (0 < studentSponsor.length) {
    $("#sponsorshipType").on("change", function() {
        $("#sponsor_names").attr("placeholder", this.value + " names");
        $("#emailSponsor").attr("placeholder", this.value + " email");
        $("#contactSponsor").attr("placeholder", this.value + " contact");
        $("#sponsorNameMis").find("option").remove();
        if ("School" === this.value || "WorkPlace" === this.value) {
            var a = new FormData;
            a.append("sponsorType", this.value);
            $.ajax({
                url: icparContext + "/home/getSponsorsList",
                cache: !1,
                processData: !1,
                contentType: !1,
                type: "POST",
                success: function(a, h, e) {
                    $("#sponsorNameMis").append($("<option>", {
                        value: "",
                        text: "Select " + $("#sponsorshipType").val()
                    }));
                    $.each(a, function(a, e) {
                        $("#sponsorNameMis").append($("<option>", {
                            value: e.id,
                            text: e.name
                        }))
                    })
                },
                headers: {
                    Authorization: "ec5ce080a64941c68a84cac8f28293dd"
                },
                data: a
            });
            $("#sponsor_names").css({
                display: "none"
            });
            $("#sponsorNameMis").css({
                display: "block"
            })
        } else $("#sponsor_names").css({
            display: "block"
        }), $("#sponsorNameMis").css({
            display: "none"
        })
    });
    var programSelected = $("#program");
    if (0 <
        programSelected.length) $("#program").on("change", function() {
        var a = "",
            a = "3fc4a3bb5a7842c282d60363bd0b014b" === this.value ? "CAT" : "CPA",
            l = new FormData;
        $.ajax({
            url: icparContext + "studentApplication/getApplicationFee?program?program=" + a,
            cache: !1,
            processData: !1,
            contentType: !1,
            type: "GET",
            success: function(a, e, f) {
                $("#sponsorDepositAmount").set("value", a.amount);
                $("#sponsorDepositAmount").set("min", a.amount)
            },
            headers: {
                Authorization: "ec5ce080a64941c68a84cac8f28293dd"
            },
            data: l
        })
    })
}
var examNotes = $("#examNotes");
examNotes.validate({
    errorPlacement: function(a, l) {
        l.before(a)
    }
});
var payment = $("#paymentForm");
payment.validate({
    errorPlacement: function(a, l) {
        l.before(a)
    },
    rules: {
        bankAttachment: {
            fileSize: 51E5,
            extension: "png|jpg|pdf|doc|docx|zip",
            required: function(a) {
                return "BankDeposit" == $(a).closest("form").find(".payment").val()
            }
        },
        sponsorDepositAttachment: {
            fileSize: 51E5,
            extension: "png|jpg|pdf|doc|docx|zip",
            required: function(a) {
                return "SponsorDeposit" == $(a).closest("form").find(".payment").val()
            }
        }
    },
    messages: {
        bankAttachment: {
            fileSize: "File should be less than 5MBs",
            extension: "Only formats above are allowed!"
        },
        sponsorDepositAttachment: {
            fileSize: "File should be less than 5MBs",
            extension: "Only formats above are allowed!"
        }
    }
});
var transaction = $("#transaction-form");
transaction.validate({
    errorPlacement: function(a, l) {
        l.before(a)
    },
    rules: {
        transactionType: {
            required: !0
        },
        description: {
            required: !0
        }
    },
    messages: {
        transactionType: {
            required: "Please select a transaction!"
        },
        description: {
            required: "Provide transaction information!"
        }
    }
});
null !== document.getElementById("addInstitute") && ($(function() {
    $("#addInstitute").on("click", function() {
        $("#details").first().clone().addClass("newAdded").appendTo("#accountanceGroup")
    })
}), $("#removeInstitute").click(function() {
    var a = document.getElementById("accountanceGroup");
    1 < a.length ? a.removeChild(a.lastChild) : alert("Cannot delete all rows.")
}));
if (0 < $(".new-deposit").length) $("#payment").on("change", function() {
    var a = "BankDeposit" === this.value ? "block" : "none",
        l = "SponsorDeposit" === this.value ? "block" : "none",
        h = "MobileMoneyDeposit" === this.value ? "block" : "none";
    document.getElementById("bankDeposit").style.display = a;
    document.getElementById("sponsorDeposit").style.display = l;
    document.getElementById("mobileDeposit").style.display = h
});
jQuery(document).ready(function() {
    var a = 0,
        l = 0,
        h = 0,
        e = 0,
        f = 0,
        k = 0;
    jQuery("#add_item").click(function() {
        var b = $("#item_details").clone();
        a++;
        b.find("input").val("");
        b.removeAttr("id");
        b.insertBefore(".new_item_details");
        b.attr("id", "new_" + a).attr("data-id", a);
        b.find(".remove").attr("data-id", a);
        $("input[name= 'accountancy.0.issuedRegNo']", b).attr("name", "accountancy." + a + ".issuedRegNo");
        $("input[name= 'accountancy.0.name']", b).attr("name", "accountancy." + a + ".name")
    });
    jQuery(document).on("click", ".remove",
        function(a) {
            var b = jQuery(this).data("id");
            jQuery('div[data-id="' + b + '"]').remove();
            a.preventDefault()
        });
    jQuery("#add_document").click(function() {
        var a = $("#educationRecords_0").clone().find("input:file").val("").end();
        a.find("input:text").val("").end();
        $(".file_name", a).text("");
        l++;
        a.find("input").val("");
        a.removeAttr("id");
        a.insertBefore(".new_item_details1");
        a.attr("id", "educationRecords_" + l).attr("data-id", l);
        a.find(".removeac").attr("data-id", l);
        $("input[name= 'educationRecordAttachment.0.name']",
            a).attr("name", "educationRecordAttachment." + l + ".name");
        $("input[name= 'educationRecordAttachment.0.institution']", a).attr("name", "educationRecordAttachment." + l + ".institution");
        $("input[name= 'educationRecordAttachment.0.file']", a).attr("name", "educationRecordAttachment." + l + ".file");
        $("input[name= 'recordFile_0']", a).attr("name", "recordFile_" + l);
        $("#recordFile_0", a).attr("id", "recordFile_" + l);
        $("#educationUpload_0", a).attr("id", "educationUpload_" + l);
        $("#file_name_0", a).attr("id", "file_name_" + l);
        $(".custom-file-input",
            a).rules("add", {
            fileSize: 51E5,
            extension: "png|jpg|jpeg|pdf|doc|docx",
            required: function() {
                return "" === $(".file-doc", a).val()
            },
            messages: {
                required: "Please upload your files to proceed"
            }
        });
        $(".file-doc", a).rules("add", {
            required: !0,
            messages: {
                required: "Please upload your files to proceed"
            }
        });
        $(".custom-file-input", a).click(function() {
            $(this).val("");
            $(".educationUploadBtn", a).css({
                display: "none"
            })
        });
        $(".custom-file-input", a).change(function() {
            $(".educationUploadBtn", a).css({
                display: "block"
            })
        });
        $(".educationUploadBtn",
            a).click(function() {
            if (!$(".custom-file-input", a).hasClass("error")) {
                $(".file_name", a).text("");
                var b = new FormData;
                b.append("file", $(".custom-file-input", a)[0].files[0]);
                var c = $("#fname").val() + "_" + $("#lname").val();
                b.append("name", c);
                $.ajax({
                    url: icparContext + "/studentApplication/academicRecords",
                    cache: !1,
                    processData: !1,
                    contentType: !1,
                    type: "POST",
                    success: function(b, c, d) {
                        $(".file-doc", a).val(b);
                        $(".educationUploadBtn", a).css({
                            display: "none"
                        });
                        $(".custom-file-input", a).removeClass("required");
                        $(".file_name",
                            a).text("Uploaded:... " + $(".custom-file-input", a)[0].files[0].name);
                        $(".file-doc", a).css({
                            display: "none"
                        });
                        $(".file-doc-error", a).css({
                            display: "none"
                        })
                    },
                    error: function(a, b, c) {
                        console.log(a)
                    },
                    headers: {
                        Authorization: "ec5ce080a64941c68a84cac8f28293dd"
                    },
                    data: b
                }).done(function(a) {
                    console.log(icparContext + a)
                }).fail(function(b, c, d) {
                    $(".file_name", a).css({
                        color: "crimson"
                    });
                    $(".file_name", a).text("An error has occurred, Try again after some time")
                })
            }
        })
    });
    jQuery(document).on("click", ".removeac", function(a) {
        var b =
            jQuery(this).data("id");
        jQuery('div[data-id="' + b + '"]').remove();
        a.preventDefault()
    });
    0 < $("#studentReg").length && ($("#payment").on("change", function() {
        var a = "BankDeposit" === this.value ? "block" : "none",
            b = "SponsorDeposit" === this.value ? "block" : "none",
            c = "MobileMoneyDeposit" === this.value ? "block" : "none";
        document.getElementById("bankDeposit").style.display = a;
        document.getElementById("sponsorDeposit").style.display = b;
        document.getElementById("mobileDeposit").style.display = c
    }), $("#recordFile_0").rules("add", {
        fileSize: 51E5,
        extension: "png|jpg|pdf|doc|docx",
        required: function() {
            return "" === $("#file_0").val()
        },
        messages: {
            required: "Please upload your file to proceed"
        }
    }), $("#file_0").rules("add", {
        required: !0,
        messages: {
            required: "Please upload your file to proceed"
        }
    }), $(".sign-test").removeClass("col-md-3"), $(".sign-hide").css({
        display: "none"
    }), $(".sign-test").addClass("col-md-12"), $(".logo").addClass("center-block"), document.getElementById("recordFile_0").onclick = function() {
        $(this).val("");
        $("#educationUpload_0").css({
            display: "none"
        })
    },
        document.getElementById("recordFile_0").onchange = function() {
            document.getElementById("educationUpload_0").style.display = "block"
        }, $("#educationUpload_0").click(function() {
        if (!$("#recordFile_0").hasClass("error")) {
            $("#file_name_0").text("");
            var a = new FormData;
            a.append("file", $("#recordFile_0")[0].files[0]);
            var b = $("#fname").val() + "_" + $("#lname").val();
            a.append("name", b);
            $.ajax({
                url: icparContext + "/studentApplication/academicRecords",
                cache: !1,
                processData: !1,
                contentType: !1,
                type: "POST",
                success: function(a,
                                  b, c) {
                    $("#file_0").val(a);
                    document.getElementById("educationUpload_0").style.display = "none";
                    $("#recordFile_0").removeClass("required");
                    $("#file_name_0").text("Uploaded:...  " + $("#recordFile_0")[0].files[0].name);
                    $("#file_0").css({
                        display: "none"
                    });
                    $("#file_0-error").css({
                        display: "none"
                    })
                },
                error: function(a, b, c) {
                    console.log(a)
                },
                headers: {
                    Authorization: "ec5ce080a64941c68a84cac8f28293dd"
                },
                data: a
            }).done(function(a) {
                console.log(icparContext + a)
            }).fail(function(a, b, c) {
                $("#file_name_0").css({
                    color: "crimson"
                });
                $("#file_name_0").text("An error has occurred, Try again after some time")
            })
        }
    }), document.getElementById("bankDepositFile").onclick = function() {
        $(this).val("");
        $(".bankUpload").css({
            display: "none"
        })
    }, document.getElementById("bankDepositFile").onchange = function() {
        $(".bankUpload").css({
            display: "block"
        })
    }, $(".bankUpload").click(function() {
        if (!$("#sponsorDepositFile").hasClass("error")) {
            $("#file_name_bank").text("");
            var a = new FormData;
            a.append("file", $("#bankDepositFile")[0].files[0]);
            var b = $("#fname").val() +
                "_" + $("#lname").val();
            a.append("name", b);
            $.ajax({
                url: icparContext + "/studentApplication/payment",
                cache: !1,
                processData: !1,
                contentType: !1,
                type: "POST",
                success: function(a, b, c) {
                    $("#bankAttachment").val(a);
                    $(".bankUpload").css({
                        display: "none"
                    });
                    $("#bankDepositFile").removeClass("required");
                    $("#file_name_bank").text("Uploaded:...  " + $("#bankDepositFile")[0].files[0].name);
                    $("#bankAttachment").css({
                        display: "none"
                    });
                    $("#bankAttachment-error").css({
                        display: "none"
                    })
                },
                error: function(a, b, c) {
                    console.log(a)
                },
                headers: {
                    Authorization: "ec5ce080a64941c68a84cac8f28293dd"
                },
                data: a
            }).done(function(a) {
                console.log(icparContext + a)
            }).fail(function(a, b, c) {
                $("#file_name_bank").css({
                    color: "crimson"
                });
                $("#file_name_bank").text("An error has occurred, Try again after some time")
            })
        }
    }), document.getElementById("proAttachment").onclick = function() {
        $(this).val("");
        $(".proUpload").css({
            display: "none"
        })
    }, document.getElementById("proAttachment").onchange = function() {
        $(".proUpload").css({
            display: "block"
        })
    }, $(".proUpload").click(function() {
        if (!$("#proAttachment").hasClass("error")) {
            $("#professional_name").text("");
            var a = new FormData;
            a.append("file", $("#proAttachment")[0].files[0]);
            var b = $("#fname").val() + "_" + $("#lname").val();
            a.append("name", b);
            $.ajax({
                url: icparContext + "/studentApplication/academicRecords",
                cache: !1,
                processData: !1,
                contentType: !1,
                type: "POST",
                success: function(a, b, c) {
                    $("#professionalAttachment").val(a);
                    $(".proUpload").css({
                        display: "none"
                    });
                    $("#proAttachment").removeClass("required");
                    $("#professional_name").text("Uploaded:...  " + $("#proAttachment")[0].files[0].name);
                    $("#professionalAttachment").css({
                        display: "none"
                    });
                    $("#professionalAttachment-error").css({
                        display: "none"
                    })
                },
                error: function(a, b, c) {
                    console.log(a)
                },
                headers: {
                    Authorization: "ec5ce080a64941c68a84cac8f28293dd"
                },
                data: a
            }).done(function(a) {
                console.log(icparContext + a)
            }).fail(function(a, b, c) {
                $("#file_name_bank").css({
                    color: "crimson"
                });
                $("#file_name_bank").text("An error has occurred, Try again after some time")
            })
        }
    }), document.getElementById("sponsorDepositFile").onclick = function() {
        $(this).val("");
        $(".sponsorUpload").css({
            display: "none"
        })
    }, document.getElementById("sponsorDepositFile").onchange =
        function() {
            $(".sponsorUpload").css({
                display: "block"
            })
        }, $(".sponsorUpload").click(function() {
        if (!$("#sponsorDepositFile").hasClass("error")) {
            $("#file_name_sponsor").text("");
            var a = new FormData;
            a.append("file", $("#sponsorDepositFile")[0].files[0]);
            var b = $("#fname").val() + "_" + $("#lname").val();
            a.append("name", b);
            $.ajax({
                url: icparContext + "/studentApplication/payment",
                cache: !1,
                processData: !1,
                contentType: !1,
                type: "POST",
                success: function(a, b, c) {
                    $("#sponsorAttachment").val(a);
                    $(".sponsorUpload").css({
                        display: "none"
                    });
                    $("#sponsorDepositFile").removeClass("required");
                    $("#file_name_sponsor").text("Uploaded:...  " + $("#sponsorDepositFile")[0].files[0].name);
                    $("#sponsorAttachment").css({
                        display: "none"
                    });
                    $("#sponsorAttachment-error").css({
                        display: "none"
                    })
                },
                error: function(a, b, c) {
                    console.log(a)
                },
                headers: {
                    Authorization: "ec5ce080a64941c68a84cac8f28293dd"
                },
                data: a
            }).done(function(a) {
                console.log(icparContext + a)
            }).fail(function(a, b, c) {
                $("#file_name_sponsor").css({
                    color: "crimson"
                });
                $("#file_name_sponsor").text("An error has occurred, Try again after some time")
            })
        }
    }),
        document.getElementById("passport").onclick = function() {
            $(this).val("");
            $("#passportDiv").css({
                display: "none"
            })
        }, document.getElementById("passport").onchange = function() {
        readURL(this, "preview");
        document.getElementById("passportDiv").style.display = "block"
    }, $(".passportUpload").click(function() {
        if (!$("#passport").hasClass("error")) {
            var a = new FormData;
            a.append("file", $("#passport")[0].files[0]);
            var b = $("#fname").val() + "_" + $("#lname").val();
            a.append("name", b);
            $.ajax({
                url: icparContext + "/studentApplication/passport",
                cache: !1,
                processData: !1,
                contentType: !1,
                type: "POST",
                success: function(a, b, c) {
                    $("#passportPhoto").val(a);
                    document.getElementById("passportDiv").style.display = "none";
                    $("#passport").removeClass("required");
                    $("#photoAnchor").text("Uploaded:...  " + $("#passport")[0].files[0].name);
                    $("#passportPhoto").css({
                        display: "none"
                    });
                    $("#passportPhoto-error").css({
                        display: "none"
                    })
                },
                error: function(a, b, c) {
                    console.log(a)
                },
                headers: {
                    Authorization: "ec5ce080a64941c68a84cac8f28293dd"
                },
                data: a
            }).done(function(a) {
                console.log(icparContext +
                    a)
            }).fail(function(a, b, c) {
                $("#photoAnchor").css({
                    color: "crimson"
                });
                $("#photoAnchor").text("An error has occurred, Try again after some time")
            })
        }
    }));
    0 < $("#memberReg").length && ($("#qualificationCert_0").rules({
        fileSize: 51E5,
        extension: "png|jpg|jpeg|pdf|doc|docx",
        required: function() {
            return "" === $("#qualificationCertificateAttachment_0").val()
        },
        messages: {
            fileSize: "File should be less than 5Mbs!",
            extension: "Only png, jpg, jpeg, pdf, doc, docx are allowed!"
        }
    }), $("#payment").on("change", function() {
        var a = "BankDeposit" ===
            this.value ? "block" : "none",
            b = "MobileMoneyDeposit" === this.value ? "block" : "none";
        document.getElementById("bankDeposit").style.display = a;
        document.getElementById("mobileDeposit").style.display = b
    }), $("#add_academic_education").click(function() {
        var a = $("#member_academic_details_0").clone();
        a.find(":input").val("").end();
        h++;
        a.removeAttr("id");
        a.insertBefore(".new_member_academic_details");
        a.attr("id", "member_academic_details_" + h).attr("data-id", h);
        a.find(".remove-mar").attr("data-id", h);
        $("input[name= 'memberEducation.0.school']",
            a).attr("name", "memberEducation." + h + ".school");
        $("input[name= 'memberEducation.0.fromDate']", a).attr("name", "memberEducation." + h + ".fromDate");
        $("input[name= 'memberEducation.0.toDate']", a).attr("name", "memberEducation." + h + ".toDate");
        $("input[name= 'memberEducation.0.examiningBody']", a).attr("name", "memberEducation." + h + ".examiningBody");
        $("input[name= 'memberEducation.0.qualification']", a).attr("name", "memberEducation." + h + ".qualification")
    }), jQuery(document).on("click", ".remove-mar", function(a) {
        var b =
            jQuery(this).data("id");
        jQuery('div[data-id="' + b + '"]').remove();
        a.preventDefault()
    }), $("#add_member_acc_doc").click(function() {
        var a = $("#ProfessionalDetails_0").clone();
        a.find(":input").val("").end();
        e++;
        a.removeAttr("id");
        a.insertBefore(".new_member_acc_details");
        a.attr("id", "ProfessionalDetails_" + e).attr("data-id", e);
        a.find(".remove-mac").attr("data-id", e);
        $("input[name= 'professionalAccountancy.0.school']", a).attr("name", "professionalAccountancy." + e + ".school");
        $("input[name= 'professionalAccountancy.0.fromDate']",
            a).attr("name", "professionalAccountancy." + e + ".fromDate");
        $("input[name= 'professionalAccountancy.0.toDate']", a).attr("name", "professionalAccountancy." + e + ".toDate");
        $("input[name= 'professionalAccountancy.0.qualification']", a).attr("name", "professionalAccountancy." + e + ".qualification");
        $("#qualificationCert_0", a).attr("id", "qualificationCert_" + l);
        $("#qualificationCertificateAttachment_0", a).attr("id", "qualificationCertificateAttachment_" + l);
        $("#qualificationCertUpload_0", a).attr("id", "qualificationCertUpload_" +
            l);
        $("#qualificationCert_name_0", a).attr("id", "qualificationCert_name_" + l);
        $(".qualificationCert_name", a).text("");
        $(".qualificationCertUpload", a).css({
            display: "none"
        });
        $(".custom-file-input", a).rules("add", {
            fileSize: 51E5,
            extension: "png|jpg|jpeg|pdf|doc|docx",
            required: function() {
                return "" === $(".file-doc", a).val()
            },
            messages: {
                required: "Please upload your files to proceed",
                extension: "Only png, jpg, jpeg, pdf, doc, docx are allowed!"
            }
        });
        $(".file-doc", a).rules("add", {
            required: !0,
            messages: {
                required: "Please upload your files to proceed"
            }
        });
        uploadFileMember($(".qualificationCertUpload", a), $(".custom-file-input", a), $(".qualificationCert_name", a), $(".file-doc", a), $("#qualificationCertificateAttachment_" + l + "-error", a), "uploadAccountancyDoc")
    }), jQuery(document).on("click", ".remove-mac", function(a) {
        var b = jQuery(this).data("id");
        jQuery('div[data-id="' + b + '"]').remove();
        a.preventDefault()
    }), $("#add_member_employ").click(function() {
        var a = $("#employment_0").clone();
        a.find(":input").val("").end();
        a.find("textarea").attr("value", "").end();
        f++;
        a.removeAttr("id");
        a.insertBefore(".new_member_employment_details");
        a.attr("id", "employment_" + f).attr("data-id", f);
        a.find(".remove-memp").attr("data-id", f);
        $("input[name= 'employment.0.organization']", a).attr("name", "employment." + f + ".organization");
        $("input[name= 'employment.0.fromDate']", a).attr("name", "employment." + f + ".fromDate");
        $("input[name= 'employment.0.toDate']", a).attr("name", "employment." + f + ".toDate");
        $("input[name= 'employment.0.position']", a).attr("name", "employment." + f + ".position");
        $("textarea[name= 'employment.0.responsibility']",
            a).attr("name", "employment." + f + ".responsibility")
    }), jQuery(document).on("click", ".remove-memp", function(a) {
        var b = jQuery(this).data("id");
        jQuery('div[data-id="' + b + '"]').remove();
        a.preventDefault()
    }), $("#add_reference").click(function() {
        var a = $("#member_reference_0").clone();
        a.find(":input").val("").end();
        k++;
        a.removeAttr("id");
        a.insertBefore(".new_member_reference");
        a.attr("id", "member_reference_" + k).attr("data-id", k);
        a.find(".remove-meref").attr("data-id", k);
        $("input[name= 'reference.0.referee']",
            a).attr("name", "reference." + k + ".referee");
        $("input[name= 'reference.0.organization']", a).attr("name", "reference." + k + ".organization");
        $("input[name= 'reference.0.position']", a).attr("name", "reference." + k + ".position");
        $("input[name= 'reference.0.email']", a).attr("name", "reference." + k + ".email");
        $("input[name= 'reference.0.contact']", a).attr("name", "reference." + k + ".contact");
        $("input[name= 'reference.0.letter']", a).attr("name", "reference." + k + ".letter");
        $("#file_0", a).attr("id", "file_" + l);
        $(".custom-file-input",
            a).rules("add", {
            fileSize: 51E5,
            extension: "png|jpg|jpeg|pdf|doc|docx",
            required: function() {
                return "" === $(".file-doc", a).val()
            },
            messages: {
                required: "Please upload your files to proceed",
                extension: "Only png, jpg, jpeg, pdf, doc, docx are allowed!"
            }
        });
        $(".file-doc", a).rules("add", {
            required: !0,
            messages: {
                required: "Please upload your files to proceed"
            }
        });
        uploadFileMember($(".educationUploadBtn", a), $(".custom-file-input", a), $(".file_name", a), $(".file-doc", a), $("#file_0" + k + "-error", a), "uploadRecommendationDoc")
    }),
        jQuery(document).on("click", ".remove-meref", function(a) {
            var b = jQuery(this).data("id");
            jQuery('div[data-id="' + b + '"]').remove();
            a.preventDefault()
        }), $(".sign-test").removeClass("col-md-3"), $(".sign-hide").css({
        display: "none"
    }), $(".sign-test").addClass("col-md-12"), $(".logo").addClass("center-block"), document.getElementById("bankDepositFile").onclick = function() {
        $(this).val("");
        $(".bankUpload").css({
            display: "none"
        })
    }, document.getElementById("bankDepositFile").onchange = function() {
        $(".bankUpload").css({
            display: "block"
        })
    },
        $(".bankUpload").click(function() {
            if (!$("#sponsorDepositFile").hasClass("error")) {
                $("#file_name_bank").text("");
                var a = new FormData;
                a.append("file", $("#bankDepositFile")[0].files[0]);
                var b = $("#fname").val() + "_" + $("#lname").val();
                a.append("name", b);
                $.ajax({
                    url: icparContext + "/member/payment",
                    cache: !1,
                    processData: !1,
                    contentType: !1,
                    type: "POST",
                    success: function(a, b, c) {
                        $("#bankAttachment").val(a);
                        $(".bankUpload").css({
                            display: "none"
                        });
                        $("#bankDepositFile").removeClass("required");
                        $("#file_name_bank").text("Uploaded:...  " +
                            $("#bankDepositFile")[0].files[0].name);
                        $("#bankAttachment").css({
                            display: "none"
                        });
                        $("#bankAttachment-error").css({
                            display: "none"
                        })
                    },
                    error: function(a, b, c) {
                        console.log(a)
                    },
                    headers: {
                        Authorization: "ec5ce080a64941c68a84cac8f28293dd"
                    },
                    data: a
                }).done(function(a) {
                    console.log(icparContext + a)
                }).fail(function(a, b, c) {
                    $("#file_name_bank").css({
                        color: "crimson"
                    });
                    $("#file_name_bank").text("An error has occurred, Try again after some time")
                })
            }
        }), document.getElementById("passport").onclick = function() {
        $(this).val("");
        $("#passportDiv").css({
            display: "none"
        })
    }, document.getElementById("passport").onchange = function() {
        readMemberURL(this, "preview");
        document.getElementById("passportDiv").style.display = "block"
    }, $(".passportUpload").click(function() {
        if (!$("#passport").hasClass("error")) {
            var a = new FormData;
            a.append("file", $("#passport")[0].files[0]);
            var b = $("#fname").val() + "_" + $("#lname").val();
            a.append("name", b);
            $.ajax({
                url: icparContext + "/member/passport",
                cache: !1,
                processData: !1,
                contentType: !1,
                type: "POST",
                success: function(a,
                                  b, c) {
                    $("#passportPhoto").val(a);
                    document.getElementById("passportDiv").style.display = "none";
                    $("#passport").removeClass("required");
                    $("#photoAnchor").text("Uploaded:...  " + $("#passport")[0].files[0].name);
                    $("#passportPhoto").css({
                        display: "none"
                    });
                    $("#passportPhoto-error").css({
                        display: "none"
                    })
                },
                error: function(a, b, c) {
                    console.log(a)
                },
                headers: {
                    Authorization: "ec5ce080a64941c68a84cac8f28293dd"
                },
                data: a
            }).done(function(a) {
                console.log(icparContext + a)
            }).fail(function(a, b, c) {
                $("#photoAnchor").css({
                    color: "crimson"
                });
                $("#photoAnchor").text("An error has occurred, Try again after some time")
            })
        }
    }));
    var d = $("#editButton");
    if (0 < d.length) {
        var c = $("#editProfile"),
            b = $("#display"),
            g = $("#cancel"),
            r = $("#edit-profile-form");
        d.on("click", function() {
            b.hide();
            c.show()
        });
        g.on("click", function() {
            b.show();
            c.hide()
        });
        r.validate()
    }
    0 < $(".how").length && ($(".sign-test").removeClass("col-md-3"), $(".sign-hide").css({
        display: "none"
    }), $(".sign-test").addClass("col-md-12"), $(".logo").addClass("center-block"));
    0 < $("#rejectModal").length &&
    $(".approval").change(function() {
        "rejected" == $(this).val() && $("#rejectModal").modal("show")
    });
    0 < $("#pendingModal").length && $(".approval").change(function() {
        "pending" == $(this).val() && $("#pendingModal").modal("show")
    });
    $table = $("#table");
    0 < $table.length && ($status = $("#status"), $status.on("change", function() {
        $table.bootstrapTable("refresh")
    }));
    0 < $("#exemption-form").length && $("#exemption-form").validate({
        rules: {
            exemptionAttachment: {
                fileSize: 51E5,
                extension: "png|jpg|pdf|doc|docx|zip"
            }
        },
        messages: {
            exemptionAttachment: {
                fileSize: "Attachment should be less thean 5Mbs!",
                extension: "Please use the specified formats above!"
            }
        }
    });
    d = $("#forgotPassword");
    0 < d.length && d.validate();
    d = $("#resetPassword");
    0 < d.length && d.validate({
        rules: {
            password: {
                minlength: 4,
                required: !0
            },
            password_confirm: {
                equalTo: "#password",
                required: !0
            }
        },
        messages: {
            password_confirm: {
                equalTo: "Your Passwords do not match!!"
            }
        }
    });
    var t = $("#updateAvatar");
    if (0 < t.length) t.on("change", function() {
        readAvatar(this);
        var a = new FormData;
        a.append("newAvatar", t[0].files[0]);
        $.ajax({
            url: icparContext + "/home/updateAvatar",
            cache: !1,
            processData: !1,
            contentType: !1,
            type: "POST",
            success: function(a, b, c) {
                alert("Passport Photo Updated")
            },
            error: function(a, b, c) {
                alert("An error has occured!, Try again later")
            },
            headers: {
                Authorization: "ec5ce080a64941c68a84cac8f28293dd"
            },
            data: a
        })
    })
});

function dataTableOptions(a, l, h) {
    a = $("#table").data("show-url");
    $("#table").data("delete-url");
    return ['<a class="edit ml10" href="', a + "/" + l.id, '" title="View Record"><button type="button" class="btn btn-info" style="height: 32px;background:#2395ec "><i class="glyphicon glyphicon-eye-open"></i></button></a>'].join("")
}

function dataTableFormat(a, l, h) {
    a = $("#table").data("show-url");
    $("#table").data("delete-url");
    l = $("#table").data("row-id");
    return ['<a class="edit ml10" href="', a + "/" + l, '" title="View Record"><button type="button" class="btn btn-info" style="height: 32px;background:#2395ec "><i class="glyphicon glyphicon-eye-open"></i></button></a>'].join("")
}
if (null !== document.getElementById("export")) {
    var exportUrl = $("#table").data("export-url");
    $("#export").click(function() {
        var a = $("#table").bootstrapTable("getSelections").map(function(a) {
            return "ids=" + a.id
        }).join("&");
        window.location = exportUrl + "?" + a
    })
}
null !== document.getElementById("student") && $(function() {
    $("#student").on("click", function() {
        window.location = icparContext + "/studentApplication/howToApply"
    })
});
null !== document.getElementById("member") && $(function() {
    $("#member").on("click", function() {
        window.location = icparContext + "/member/howToApply"
    })
});

function printSection(a, l) {
    a = document.getElementById(a);
    $(a).printThis({
        importCSS: !0,
        printDelay: 3E3,
        header: "<p style='text-align: center;'><b>" + l + "</b></p>"
    })
}

function readAvatar(a) {
    if (a.files && a.files[0]) {
        var l = new FileReader;
        l.onload = function(a) {
            $(".img-rounded").attr("src", a.target.result).width(110).height(110)
        };
        l.readAsDataURL(a.files[0])
    }
}

function readURL(a, l) {
    a.files && a.files[0] && ($("#" + l).removeAttr("src"), $.each(a.files, function(a, e) {
        a = new FileReader;
        a.onload = function(a) {
            var e = $("#" + l).attr("src", a.target.result);
            e.on("load", function() {
                var a = e.width();
                $("#passport").data("imageWidth", a);
                200 < a ? $(".passportUpload").css({
                    display: "none"
                }) : (e.css({
                    width: "150px",
                    height: "150px"
                }), $(".passportUpload").css({
                    display: "block"
                }));
                $(".passportUpload").attr("disabled", !1);
                validator.element($("#passport"))
            })
        };
        a.readAsDataURL(e)
    }))
}

function readMemberURL(a, l) {
    a.files && a.files[0] && ($("#" + l).removeAttr("src"), $.each(a.files, function(a, e) {
        a = new FileReader;
        a.onload = function(a) {
            var e = $("#" + l).attr("src", a.target.result);
            e.on("load", function() {
                var a = e.width();
                $("#passport").data("imageWidth", a);
                200 < a ? $(".passportUpload").css({
                    display: "none"
                }) : (e.css({
                    width: "150px",
                    height: "150px"
                }), $(".passportUpload").css({
                    display: "block"
                }));
                $(".passportUpload").attr("disabled", !1);
                memberValidator.element($("#passport"))
            })
        };
        a.readAsDataURL(e)
    }))
}

function uploadFile(a, l, h, e, f, k) {
    $(l).on("click", function() {
        $(this).val("");
        $(a).css({
            display: "none"
        })
    });
    $(l).on("change", function() {
        $(a).css({
            display: "block"
        })
    });
    a.click(function() {
        if (!l.hasClass("error")) {
            h.text("");
            var d = new FormData;
            d.append("file", l[0].files[0]);
            var c = l[0].files[0].name;
            console.log(c);
            d.append("name", c);
            $.ajax({
                url: icparContext + "/memberFirmReq/" + k,
                cache: !1,
                processData: !1,
                contentType: !1,
                type: "POST",
                success: function(b, d, k) {
                    console.log(b);
                    e.attr("value", b);
                    a.css({
                        display: "none"
                    });
                    l.removeClass("required");
                    h.css({
                        color: "#00aaee"
                    });
                    h.text("Uploaded:...  " + c);
                    e.css({
                        display: "none"
                    });
                    f.css({
                        display: "none"
                    })
                },
                error: function(a, c, d) {
                    console.log(a)
                },
                headers: {
                    Authorization: "ec5ce080a64941c68a84cac8f28293dd"
                },
                data: d
            }).done(function(a) {
                console.log(icparContext + a)
            }).fail(function(a, c, d) {
                h.css({
                    color: "crimson"
                });
                h.text("An error has occurred, Try again after some time")
            })
        }
    })
}

function uploadFilePrac(a, l, h, e, f, k) {
    $(l).on("click", function() {
        $(this).val("");
        $(a).css({
            display: "none"
        })
    });
    $(l).on("change", function() {
        $(a).css({
            display: "block"
        })
    });
    a.click(function() {
        if (!l.hasClass("error")) {
            h.text("");
            var d = new FormData;
            d.append("file", l[0].files[0]);
            var c = l[0].files[0].name;
            console.log(c);
            d.append("name", c);
            $.ajax({
                url: icparContext + "/practitionerCertificateReq/" + k,
                cache: !1,
                processData: !1,
                contentType: !1,
                type: "POST",
                success: function(b, d, k) {
                    console.log(b);
                    e.attr("value", b);
                    a.css({
                        display: "none"
                    });
                    l.removeClass("required");
                    l.removeClass("error");
                    h.css({
                        color: "#00aaee"
                    });
                    h.text("Uploaded:...  " + c);
                    e.css({
                        display: "none"
                    });
                    f.css({
                        display: "none"
                    })
                },
                error: function(a, c, d) {
                    console.log(a)
                },
                headers: {
                    Authorization: "ec5ce080a64941c68a84cac8f28293dd"
                },
                data: d
            }).done(function(a) {
                console.log(icparContext + a)
            }).fail(function(a, c, d) {
                h.css({
                    color: "crimson"
                });
                h.text("An error has occurred, Try again after some time")
            })
        }
    })
}

function uploadFileMember(a, l, h, e, f, k) {
    $(l).on("click", function() {
        $(this).val("");
        $(a).css({
            display: "none"
        })
    });
    $(l).on("change", function() {
        $(a).css({
            display: "block"
        })
    });
    a.click(function() {
        if (!l.hasClass("error")) {
            h.text("");
            var d = new FormData;
            d.append("file", l[0].files[0]);
            var c = l[0].files[0].name;
            d.append("name", c);
            $.ajax({
                url: icparContext + "/member/" + k,
                cache: !1,
                processData: !1,
                contentType: !1,
                type: "POST",
                success: function(b, d, k) {
                    console.log(b);
                    e.attr("value", b);
                    a.css({
                        display: "none"
                    });
                    l.removeClass("required");
                    l.removeClass("error");
                    h.css({
                        color: "#00aaee"
                    });
                    h.text("Uploaded:...  " + c);
                    e.css({
                        display: "none"
                    });
                    f.css({
                        display: "none!important"
                    });
                    f.removeClass("error");
                    f.text("")
                },
                error: function(a, c, d) {
                    console.log(a)
                },
                headers: {
                    Authorization: "ec5ce080a64941c68a84cac8f28293dd"
                },
                data: d
            }).done(function(a) {
                console.log(icparContext + a)
            }).fail(function(a, c, d) {
                h.css({
                    color: "crimson"
                });
                h.text("An error has occurred, Try again after some time")
            })
        }
    })
}

function queryParams(a) {
    return params = {
        status: $("#status").val(),
        limit: a.limit,
        offset: a.offset,
        order: a.order,
        sort: a.sort
    }
}

function responseHandler(a) {
    return a.rows
}

function myRules(a, l) {
    $(a).rules("add", {
        fileSize: 51E5,
        extension: "png|jpg|jpeg|pdf|doc|docx",
        required: function() {
            return "" === $(l).val()
        },
        messages: {
            required: "Please upload your files to proceed",
            extension: "Only png, jpg, jpeg, pdf, doc, docx are allowed!"
        }
    });
    $(l).rules("add", {
        required: !0,
        messages: {
            required: "Please upload your files to proceed"
        }
    })
};
