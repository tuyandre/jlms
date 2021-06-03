/*! jQuery v1.12.0 | (c) jQuery Foundation | jquery.org/license */
// import * as Swal from "sweetalert2";

! function(a, b) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
        if (!a.document) throw new Error("jQuery requires a window with a document");
        return b(a)
    } : b(a)
}("undefined" != typeof window ? window : this, function(a, b) {
    var c = [],
        d = a.document,
        e = c.slice,
        f = c.concat,
        g = c.push,
        h = c.indexOf,
        i = {},
        j = i.toString,
        k = i.hasOwnProperty,
        l = {},
        m = "1.12.0",
        n = function(a, b) {
            return new n.fn.init(a, b)
        },
        o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        p = /^-ms-/,
        q = /-([\da-z])/gi,
        r = function(a, b) {
            return b.toUpperCase()
        };
    n.fn = n.prototype = {
        jquery: m,
        constructor: n,
        selector: "",
        length: 0,
        toArray: function() {
            return e.call(this)
        },
        get: function(a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : e.call(this)
        },
        pushStack: function(a) {
            var b = n.merge(this.constructor(), a);
            return b.prevObject = this, b.context = this.context, b
        },
        each: function(a) {
            return n.each(this, a)
        },
        map: function(a) {
            return this.pushStack(n.map(this, function(b, c) {
                return a.call(b, c, b)
            }))
        },
        slice: function() {
            return this.pushStack(e.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(a) {
            var b = this.length,
                c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: g,
        sort: c.sort,
        splice: c.splice
    }, n.extend = n.fn.extend = function() {
        var a, b, c, d, e, f, g = arguments[0] || {},
            h = 1,
            i = arguments.length,
            j = !1;
        for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || n.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)
            if (null != (e = arguments[h]))
                for (d in e) a = g[d], c = e[d], g !== c && (j && c && (n.isPlainObject(c) || (b = n.isArray(c))) ? (b ? (b = !1, f = a && n.isArray(a) ? a : []) : f = a && n.isPlainObject(a) ? a : {}, g[d] = n.extend(j, f, c)) : void 0 !== c && (g[d] = c));
        return g
    }, n.extend({
        expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(a) {
            throw new Error(a)
        },
        noop: function() {},
        isFunction: function(a) {
            return "function" === n.type(a)
        },
        isArray: Array.isArray || function(a) {
            return "array" === n.type(a)
        },
        isWindow: function(a) {
            return null != a && a == a.window
        },
        isNumeric: function(a) {
            var b = a && a.toString();
            return !n.isArray(a) && b - parseFloat(b) + 1 >= 0
        },
        isEmptyObject: function(a) {
            var b;
            for (b in a) return !1;
            return !0
        },
        isPlainObject: function(a) {
            var b;
            if (!a || "object" !== n.type(a) || a.nodeType || n.isWindow(a)) return !1;
            try {
                if (a.constructor && !k.call(a, "constructor") && !k.call(a.constructor.prototype, "isPrototypeOf")) return !1
            } catch (c) {
                return !1
            }
            if (!l.ownFirst)
                for (b in a) return k.call(a, b);
            for (b in a);
            return void 0 === b || k.call(a, b)
        },
        type: function(a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? i[j.call(a)] || "object" : typeof a
        },
        globalEval: function(b) {
            b && n.trim(b) && (a.execScript || function(b) {
                a.eval.call(a, b)
            })(b)
        },
        camelCase: function(a) {
            return a.replace(p, "ms-").replace(q, r)
        },
        nodeName: function(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        },
        each: function(a, b) {
            var c, d = 0;
            if (s(a)) {
                for (c = a.length; c > d; d++)
                    if (b.call(a[d], d, a[d]) === !1) break
            } else
                for (d in a)
                    if (b.call(a[d], d, a[d]) === !1) break;
            return a
        },
        trim: function(a) {
            return null == a ? "" : (a + "").replace(o, "")
        },
        makeArray: function(a, b) {
            var c = b || [];
            return null != a && (s(Object(a)) ? n.merge(c, "string" == typeof a ? [a] : a) : g.call(c, a)), c
        },
        inArray: function(a, b, c) {
            var d;
            if (b) {
                if (h) return h.call(b, a, c);
                for (d = b.length, c = c ? 0 > c ? Math.max(0, d + c) : c : 0; d > c; c++)
                    if (c in b && b[c] === a) return c
            }
            return -1
        },
        merge: function(a, b) {
            var c = +b.length,
                d = 0,
                e = a.length;
            while (c > d) a[e++] = b[d++];
            if (c !== c)
                while (void 0 !== b[d]) a[e++] = b[d++];
            return a.length = e, a
        },
        grep: function(a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f), d !== h && e.push(a[f]);
            return e
        },
        map: function(a, b, c) {
            var d, e, g = 0,
                h = [];
            if (s(a))
                for (d = a.length; d > g; g++) e = b(a[g], g, c), null != e && h.push(e);
            else
                for (g in a) e = b(a[g], g, c), null != e && h.push(e);
            return f.apply([], h)
        },
        guid: 1,
        proxy: function(a, b) {
            var c, d, f;
            return "string" == typeof b && (f = a[b], b = a, a = f), n.isFunction(a) ? (c = e.call(arguments, 2), d = function() {
                return a.apply(b || this, c.concat(e.call(arguments)))
            }, d.guid = a.guid = a.guid || n.guid++, d) : void 0
        },
        now: function() {
            return +new Date
        },
        support: l
    }), "function" == typeof Symbol && (n.fn[Symbol.iterator] = c[Symbol.iterator]), n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(a, b) {
        i["[object " + b + "]"] = b.toLowerCase()
    });

    function s(a) {
        var b = !!a && "length" in a && a.length,
            c = n.type(a);
        return "function" === c || n.isWindow(a) ? !1 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
    }
    var t = function(a) {
        var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + 1 * new Date,
            v = a.document,
            w = 0,
            x = 0,
            y = ga(),
            z = ga(),
            A = ga(),
            B = function(a, b) {
                return a === b && (l = !0), 0
            },
            C = 1 << 31,
            D = {}.hasOwnProperty,
            E = [],
            F = E.pop,
            G = E.push,
            H = E.push,
            I = E.slice,
            J = function(a, b) {
                for (var c = 0, d = a.length; d > c; c++)
                    if (a[c] === b) return c;
                return -1
            },
            K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            L = "[\\x20\\t\\r\\n\\f]",
            M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            N = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + M + "))|)" + L + "*\\]",
            O = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + N + ")*)|.*)\\)|)",
            P = new RegExp(L + "+", "g"),
            Q = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"),
            R = new RegExp("^" + L + "*," + L + "*"),
            S = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"),
            T = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"),
            U = new RegExp(O),
            V = new RegExp("^" + M + "$"),
            W = {
                ID: new RegExp("^#(" + M + ")"),
                CLASS: new RegExp("^\\.(" + M + ")"),
                TAG: new RegExp("^(" + M + "|[*])"),
                ATTR: new RegExp("^" + N),
                PSEUDO: new RegExp("^" + O),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + K + ")$", "i"),
                needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i")
            },
            X = /^(?:input|select|textarea|button)$/i,
            Y = /^h\d$/i,
            Z = /^[^{]+\{\s*\[native \w/,
            $ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            _ = /[+~]/,
            aa = /'|\\/g,
            ba = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"),
            ca = function(a, b, c) {
                var d = "0x" + b - 65536;
                return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
            },
            da = function() {
                m()
            };
        try {
            H.apply(E = I.call(v.childNodes), v.childNodes), E[v.childNodes.length].nodeType
        } catch (ea) {
            H = {
                apply: E.length ? function(a, b) {
                    G.apply(a, I.call(b))
                } : function(a, b) {
                    var c = a.length,
                        d = 0;
                    while (a[c++] = b[d++]);
                    a.length = c - 1
                }
            }
        }

        function fa(a, b, d, e) {
            var f, h, j, k, l, o, r, s, w = b && b.ownerDocument,
                x = b ? b.nodeType : 9;
            if (d = d || [], "string" != typeof a || !a || 1 !== x && 9 !== x && 11 !== x) return d;
            if (!e && ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, p)) {
                if (11 !== x && (o = $.exec(a)))
                    if (f = o[1]) {
                        if (9 === x) {
                            if (!(j = b.getElementById(f))) return d;
                            if (j.id === f) return d.push(j), d
                        } else if (w && (j = w.getElementById(f)) && t(b, j) && j.id === f) return d.push(j), d
                    } else {
                        if (o[2]) return H.apply(d, b.getElementsByTagName(a)), d;
                        if ((f = o[3]) && c.getElementsByClassName && b.getElementsByClassName) return H.apply(d, b.getElementsByClassName(f)), d
                    }
                if (c.qsa && !A[a + " "] && (!q || !q.test(a))) {
                    if (1 !== x) w = b, s = a;
                    else if ("object" !== b.nodeName.toLowerCase()) {
                        (k = b.getAttribute("id")) ? k = k.replace(aa, "\\$&"): b.setAttribute("id", k = u), r = g(a), h = r.length, l = V.test(k) ? "#" + k : "[id='" + k + "']";
                        while (h--) r[h] = l + " " + qa(r[h]);
                        s = r.join(","), w = _.test(a) && oa(b.parentNode) || b
                    }
                    if (s) try {
                        return H.apply(d, w.querySelectorAll(s)), d
                    } catch (y) {} finally {
                        k === u && b.removeAttribute("id")
                    }
                }
            }
            return i(a.replace(Q, "$1"), b, d, e)
        }

        function ga() {
            var a = [];

            function b(c, e) {
                return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e
            }
            return b
        }

        function ha(a) {
            return a[u] = !0, a
        }

        function ia(a) {
            var b = n.createElement("div");
            try {
                return !!a(b)
            } catch (c) {
                return !1
            } finally {
                b.parentNode && b.parentNode.removeChild(b), b = null
            }
        }

        function ja(a, b) {
            var c = a.split("|"),
                e = c.length;
            while (e--) d.attrHandle[c[e]] = b
        }

        function ka(a, b) {
            var c = b && a,
                d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C);
            if (d) return d;
            if (c)
                while (c = c.nextSibling)
                    if (c === b) return -1;
            return a ? 1 : -1
        }

        function la(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a
            }
        }

        function ma(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }

        function na(a) {
            return ha(function(b) {
                return b = +b, ha(function(c, d) {
                    var e, f = a([], c.length, b),
                        g = f.length;
                    while (g--) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }

        function oa(a) {
            return a && "undefined" != typeof a.getElementsByTagName && a
        }
        c = fa.support = {}, f = fa.isXML = function(a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? "HTML" !== b.nodeName : !1
        }, m = fa.setDocument = function(a) {
            var b, e, g = a ? a.ownerDocument || a : v;
            return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = n.documentElement, p = !f(n), (e = n.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", da, !1) : e.attachEvent && e.attachEvent("onunload", da)), c.attributes = ia(function(a) {
                return a.className = "i", !a.getAttribute("className")
            }), c.getElementsByTagName = ia(function(a) {
                return a.appendChild(n.createComment("")), !a.getElementsByTagName("*").length
            }), c.getElementsByClassName = Z.test(n.getElementsByClassName), c.getById = ia(function(a) {
                return o.appendChild(a).id = u, !n.getElementsByName || !n.getElementsByName(u).length
            }), c.getById ? (d.find.ID = function(a, b) {
                if ("undefined" != typeof b.getElementById && p) {
                    var c = b.getElementById(a);
                    return c ? [c] : []
                }
            }, d.filter.ID = function(a) {
                var b = a.replace(ba, ca);
                return function(a) {
                    return a.getAttribute("id") === b
                }
            }) : (delete d.find.ID, d.filter.ID = function(a) {
                var b = a.replace(ba, ca);
                return function(a) {
                    var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                    return c && c.value === b
                }
            }), d.find.TAG = c.getElementsByTagName ? function(a, b) {
                return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0
            } : function(a, b) {
                var c, d = [],
                    e = 0,
                    f = b.getElementsByTagName(a);
                if ("*" === a) {
                    while (c = f[e++]) 1 === c.nodeType && d.push(c);
                    return d
                }
                return f
            }, d.find.CLASS = c.getElementsByClassName && function(a, b) {
                return "undefined" != typeof b.getElementsByClassName && p ? b.getElementsByClassName(a) : void 0
            }, r = [], q = [], (c.qsa = Z.test(n.querySelectorAll)) && (ia(function(a) {
                o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\r\\' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + L + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + L + "*(?:value|" + K + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]")
            }), ia(function(a) {
                var b = n.createElement("input");
                b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + L + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:")
            })), (c.matchesSelector = Z.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ia(function(a) {
                c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", O)
            }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = Z.test(o.compareDocumentPosition), t = b || Z.test(o.contains) ? function(a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a,
                    d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            } : function(a, b) {
                if (b)
                    while (b = b.parentNode)
                        if (b === a) return !0;
                return !1
            }, B = b ? function(a, b) {
                if (a === b) return l = !0, 0;
                var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === n || a.ownerDocument === v && t(v, a) ? -1 : b === n || b.ownerDocument === v && t(v, b) ? 1 : k ? J(k, a) - J(k, b) : 0 : 4 & d ? -1 : 1)
            } : function(a, b) {
                if (a === b) return l = !0, 0;
                var c, d = 0,
                    e = a.parentNode,
                    f = b.parentNode,
                    g = [a],
                    h = [b];
                if (!e || !f) return a === n ? -1 : b === n ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0;
                if (e === f) return ka(a, b);
                c = a;
                while (c = c.parentNode) g.unshift(c);
                c = b;
                while (c = c.parentNode) h.unshift(c);
                while (g[d] === h[d]) d++;
                return d ? ka(g[d], h[d]) : g[d] === v ? -1 : h[d] === v ? 1 : 0
            }, n) : n
        }, fa.matches = function(a, b) {
            return fa(a, null, null, b)
        }, fa.matchesSelector = function(a, b) {
            if ((a.ownerDocument || a) !== n && m(a), b = b.replace(T, "='$1']"), c.matchesSelector && p && !A[b + " "] && (!r || !r.test(b)) && (!q || !q.test(b))) try {
                var d = s.call(a, b);
                if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
            } catch (e) {}
            return fa(b, n, null, [a]).length > 0
        }, fa.contains = function(a, b) {
            return (a.ownerDocument || a) !== n && m(a), t(a, b)
        }, fa.attr = function(a, b) {
            (a.ownerDocument || a) !== n && m(a);
            var e = d.attrHandle[b.toLowerCase()],
                f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
            return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
        }, fa.error = function(a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        }, fa.uniqueSort = function(a) {
            var b, d = [],
                e = 0,
                f = 0;
            if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
                while (b = a[f++]) b === a[f] && (e = d.push(f));
                while (e--) a.splice(d[e], 1)
            }
            return k = null, a
        }, e = fa.getText = function(a) {
            var b, c = "",
                d = 0,
                f = a.nodeType;
            if (f) {
                if (1 === f || 9 === f || 11 === f) {
                    if ("string" == typeof a.textContent) return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling) c += e(a)
                } else if (3 === f || 4 === f) return a.nodeValue
            } else
                while (b = a[d++]) c += e(b);
            return c
        }, d = fa.selectors = {
            cacheLength: 50,
            createPseudo: ha,
            match: W,
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
                    return a[1] = a[1].replace(ba, ca), a[3] = (a[3] || a[4] || a[5] || "").replace(ba, ca), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                },
                CHILD: function(a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || fa.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && fa.error(a[0]), a
                },
                PSEUDO: function(a) {
                    var b, c = !a[6] && a[2];
                    return W.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && U.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
                }
            },
            filter: {
                TAG: function(a) {
                    var b = a.replace(ba, ca).toLowerCase();
                    return "*" === a ? function() {
                        return !0
                    } : function(a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                },
                CLASS: function(a) {
                    var b = y[a + " "];
                    return b || (b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) && y(a, function(a) {
                        return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
                    })
                },
                ATTR: function(a, b, c) {
                    return function(d) {
                        var e = fa.attr(d, a);
                        return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(P, " ") + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0
                    }
                },
                CHILD: function(a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3),
                        g = "last" !== a.slice(-4),
                        h = "of-type" === b;
                    return 1 === d && 0 === e ? function(a) {
                        return !!a.parentNode
                    } : function(b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
                            q = b.parentNode,
                            r = h && b.nodeName.toLowerCase(),
                            s = !i && !h,
                            t = !1;
                        if (q) {
                            if (f) {
                                while (p) {
                                    m = b;
                                    while (m = m[p])
                                        if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) return !1;
                                    o = p = "only" === a && !o && "nextSibling"
                                }
                                return !0
                            }
                            if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                m = q, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n && j[2], m = n && q.childNodes[n];
                                while (m = ++n && m && m[p] || (t = n = 0) || o.pop())
                                    if (1 === m.nodeType && ++t && m === b) {
                                        k[a] = [w, n, t];
                                        break
                                    }
                            } else if (s && (m = b, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n), t === !1)
                                while (m = ++n && m && m[p] || (t = n = 0) || o.pop())
                                    if ((h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) && ++t && (s && (l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), k[a] = [w, t]), m === b)) break;
                            return t -= e, t === d || t % d === 0 && t / d >= 0
                        }
                    }
                },
                PSEUDO: function(a, b) {
                    var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || fa.error("unsupported pseudo: " + a);
                    return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ha(function(a, c) {
                        var d, f = e(a, b),
                            g = f.length;
                        while (g--) d = J(a, f[g]), a[d] = !(c[d] = f[g])
                    }) : function(a) {
                        return e(a, 0, c)
                    }) : e
                }
            },
            pseudos: {
                not: ha(function(a) {
                    var b = [],
                        c = [],
                        d = h(a.replace(Q, "$1"));
                    return d[u] ? ha(function(a, b, c, e) {
                        var f, g = d(a, null, e, []),
                            h = a.length;
                        while (h--)(f = g[h]) && (a[h] = !(b[h] = f))
                    }) : function(a, e, f) {
                        return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop()
                    }
                }),
                has: ha(function(a) {
                    return function(b) {
                        return fa(a, b).length > 0
                    }
                }),
                contains: ha(function(a) {
                    return a = a.replace(ba, ca),
                        function(b) {
                            return (b.textContent || b.innerText || e(b)).indexOf(a) > -1
                        }
                }),
                lang: ha(function(a) {
                    return V.test(a || "") || fa.error("unsupported lang: " + a), a = a.replace(ba, ca).toLowerCase(),
                        function(b) {
                            var c;
                            do
                                if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);
                            return !1
                        }
                }),
                target: function(b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                },
                root: function(a) {
                    return a === o
                },
                focus: function(a) {
                    return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                },
                enabled: function(a) {
                    return a.disabled === !1
                },
                disabled: function(a) {
                    return a.disabled === !0
                },
                checked: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected
                },
                selected: function(a) {
                    return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                },
                empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling)
                        if (a.nodeType < 6) return !1;
                    return !0
                },
                parent: function(a) {
                    return !d.pseudos.empty(a)
                },
                header: function(a) {
                    return Y.test(a.nodeName)
                },
                input: function(a) {
                    return X.test(a.nodeName)
                },
                button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                },
                text: function(a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                },
                first: na(function() {
                    return [0]
                }),
                last: na(function(a, b) {
                    return [b - 1]
                }),
                eq: na(function(a, b, c) {
                    return [0 > c ? c + b : c]
                }),
                even: na(function(a, b) {
                    for (var c = 0; b > c; c += 2) a.push(c);
                    return a
                }),
                odd: na(function(a, b) {
                    for (var c = 1; b > c; c += 2) a.push(c);
                    return a
                }),
                lt: na(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d);
                    return a
                }),
                gt: na(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; ++d < b;) a.push(d);
                    return a
                })
            }
        }, d.pseudos.nth = d.pseudos.eq;
        for (b in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) d.pseudos[b] = la(b);
        for (b in {
            submit: !0,
            reset: !0
        }) d.pseudos[b] = ma(b);

        function pa() {}
        pa.prototype = d.filters = d.pseudos, d.setFilters = new pa, g = fa.tokenize = function(a, b) {
            var c, e, f, g, h, i, j, k = z[a + " "];
            if (k) return b ? 0 : k.slice(0);
            h = a, i = [], j = d.preFilter;
            while (h) {
                (!c || (e = R.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = S.exec(h)) && (c = e.shift(), f.push({
                    value: c,
                    type: e[0].replace(Q, " ")
                }), h = h.slice(c.length));
                for (g in d.filter) !(e = W[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({
                    value: c,
                    type: g,
                    matches: e
                }), h = h.slice(c.length));
                if (!c) break
            }
            return b ? h.length : h ? fa.error(a) : z(a, i).slice(0)
        };

        function qa(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
            return d
        }

        function ra(a, b, c) {
            var d = b.dir,
                e = c && "parentNode" === d,
                f = x++;
            return b.first ? function(b, c, f) {
                while (b = b[d])
                    if (1 === b.nodeType || e) return a(b, c, f)
            } : function(b, c, g) {
                var h, i, j, k = [w, f];
                if (g) {
                    while (b = b[d])
                        if ((1 === b.nodeType || e) && a(b, c, g)) return !0
                } else
                    while (b = b[d])
                        if (1 === b.nodeType || e) {
                            if (j = b[u] || (b[u] = {}), i = j[b.uniqueID] || (j[b.uniqueID] = {}), (h = i[d]) && h[0] === w && h[1] === f) return k[2] = h[2];
                            if (i[d] = k, k[2] = a(b, c, g)) return !0
                        }
            }
        }

        function sa(a) {
            return a.length > 1 ? function(b, c, d) {
                var e = a.length;
                while (e--)
                    if (!a[e](b, c, d)) return !1;
                return !0
            } : a[0]
        }

        function ta(a, b, c) {
            for (var d = 0, e = b.length; e > d; d++) fa(a, b[d], c);
            return c
        }

        function ua(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
            return g
        }

        function va(a, b, c, d, e, f) {
            return d && !d[u] && (d = va(d)), e && !e[u] && (e = va(e, f)), ha(function(f, g, h, i) {
                var j, k, l, m = [],
                    n = [],
                    o = g.length,
                    p = f || ta(b || "*", h.nodeType ? [h] : h, []),
                    q = !a || !f && b ? p : ua(p, m, a, h, i),
                    r = c ? e || (f ? a : o || d) ? [] : g : q;
                if (c && c(q, r, h, i), d) {
                    j = ua(r, n), d(j, [], h, i), k = j.length;
                    while (k--)(l = j[k]) && (r[n[k]] = !(q[n[k]] = l))
                }
                if (f) {
                    if (e || a) {
                        if (e) {
                            j = [], k = r.length;
                            while (k--)(l = r[k]) && j.push(q[k] = l);
                            e(null, r = [], j, i)
                        }
                        k = r.length;
                        while (k--)(l = r[k]) && (j = e ? J(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
                    }
                } else r = ua(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : H.apply(g, r)
            })
        }

        function wa(a) {
            for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = ra(function(a) {
                return a === b
            }, h, !0), l = ra(function(a) {
                return J(b, a) > -1
            }, h, !0), m = [function(a, c, d) {
                var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
                return b = null, e
            }]; f > i; i++)
                if (c = d.relative[a[i].type]) m = [ra(sa(m), c)];
                else {
                    if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
                        for (e = ++i; f > e; e++)
                            if (d.relative[a[e].type]) break;
                        return va(i > 1 && sa(m), i > 1 && qa(a.slice(0, i - 1).concat({
                            value: " " === a[i - 2].type ? "*" : ""
                        })).replace(Q, "$1"), c, e > i && wa(a.slice(i, e)), f > e && wa(a = a.slice(e)), f > e && qa(a))
                    }
                    m.push(c)
                }
            return sa(m)
        }

        function xa(a, b) {
            var c = b.length > 0,
                e = a.length > 0,
                f = function(f, g, h, i, k) {
                    var l, o, q, r = 0,
                        s = "0",
                        t = f && [],
                        u = [],
                        v = j,
                        x = f || e && d.find.TAG("*", k),
                        y = w += null == v ? 1 : Math.random() || .1,
                        z = x.length;
                    for (k && (j = g === n || g || k); s !== z && null != (l = x[s]); s++) {
                        if (e && l) {
                            o = 0, g || l.ownerDocument === n || (m(l), h = !p);
                            while (q = a[o++])
                                if (q(l, g || n, h)) {
                                    i.push(l);
                                    break
                                }
                            k && (w = y)
                        }
                        c && ((l = !q && l) && r--, f && t.push(l))
                    }
                    if (r += s, c && s !== r) {
                        o = 0;
                        while (q = b[o++]) q(t, u, g, h);
                        if (f) {
                            if (r > 0)
                                while (s--) t[s] || u[s] || (u[s] = F.call(i));
                            u = ua(u)
                        }
                        H.apply(i, u), k && !f && u.length > 0 && r + b.length > 1 && fa.uniqueSort(i)
                    }
                    return k && (w = y, j = v), t
                };
            return c ? ha(f) : f
        }
        return h = fa.compile = function(a, b) {
            var c, d = [],
                e = [],
                f = A[a + " "];
            if (!f) {
                b || (b = g(a)), c = b.length;
                while (c--) f = wa(b[c]), f[u] ? d.push(f) : e.push(f);
                f = A(a, xa(e, d)), f.selector = a
            }
            return f
        }, i = fa.select = function(a, b, e, f) {
            var i, j, k, l, m, n = "function" == typeof a && a,
                o = !f && g(a = n.selector || a);
            if (e = e || [], 1 === o.length) {
                if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
                    if (b = (d.find.ID(k.matches[0].replace(ba, ca), b) || [])[0], !b) return e;
                    n && (b = b.parentNode), a = a.slice(j.shift().value.length)
                }
                i = W.needsContext.test(a) ? 0 : j.length;
                while (i--) {
                    if (k = j[i], d.relative[l = k.type]) break;
                    if ((m = d.find[l]) && (f = m(k.matches[0].replace(ba, ca), _.test(j[0].type) && oa(b.parentNode) || b))) {
                        if (j.splice(i, 1), a = f.length && qa(j), !a) return H.apply(e, f), e;
                        break
                    }
                }
            }
            return (n || h(a, o))(f, b, !p, e, !b || _.test(a) && oa(b.parentNode) || b), e
        }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ia(function(a) {
            return 1 & a.compareDocumentPosition(n.createElement("div"))
        }), ia(function(a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
        }) || ja("type|href|height|width", function(a, b, c) {
            return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        }), c.attributes && ia(function(a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
        }) || ja("value", function(a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
        }), ia(function(a) {
            return null == a.getAttribute("disabled")
        }) || ja(K, function(a, b, c) {
            var d;
            return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }), fa
    }(a);
    n.find = t, n.expr = t.selectors, n.expr[":"] = n.expr.pseudos, n.uniqueSort = n.unique = t.uniqueSort, n.text = t.getText, n.isXMLDoc = t.isXML, n.contains = t.contains;
    var u = function(a, b, c) {
            var d = [],
                e = void 0 !== c;
            while ((a = a[b]) && 9 !== a.nodeType)
                if (1 === a.nodeType) {
                    if (e && n(a).is(c)) break;
                    d.push(a)
                }
            return d
        },
        v = function(a, b) {
            for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
            return c
        },
        w = n.expr.match.needsContext,
        x = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
        y = /^.[^:#\[\.,]*$/;

    function z(a, b, c) {
        if (n.isFunction(b)) return n.grep(a, function(a, d) {
            return !!b.call(a, d, a) !== c
        });
        if (b.nodeType) return n.grep(a, function(a) {
            return a === b !== c
        });
        if ("string" == typeof b) {
            if (y.test(b)) return n.filter(b, a, c);
            b = n.filter(b, a)
        }
        return n.grep(a, function(a) {
            return n.inArray(a, b) > -1 !== c
        })
    }
    n.filter = function(a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? n.find.matchesSelector(d, a) ? [d] : [] : n.find.matches(a, n.grep(b, function(a) {
            return 1 === a.nodeType
        }))
    }, n.fn.extend({
        find: function(a) {
            var b, c = [],
                d = this,
                e = d.length;
            if ("string" != typeof a) return this.pushStack(n(a).filter(function() {
                for (b = 0; e > b; b++)
                    if (n.contains(d[b], this)) return !0
            }));
            for (b = 0; e > b; b++) n.find(a, d[b], c);
            return c = this.pushStack(e > 1 ? n.unique(c) : c), c.selector = this.selector ? this.selector + " " + a : a, c
        },
        filter: function(a) {
            return this.pushStack(z(this, a || [], !1))
        },
        not: function(a) {
            return this.pushStack(z(this, a || [], !0))
        },
        is: function(a) {
            return !!z(this, "string" == typeof a && w.test(a) ? n(a) : a || [], !1).length
        }
    });
    var A, B = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        C = n.fn.init = function(a, b, c) {
            var e, f;
            if (!a) return this;
            if (c = c || A, "string" == typeof a) {
                if (e = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : B.exec(a), !e || !e[1] && b) return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);
                if (e[1]) {
                    if (b = b instanceof n ? b[0] : b, n.merge(this, n.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)), x.test(e[1]) && n.isPlainObject(b))
                        for (e in b) n.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]);
                    return this
                }
                if (f = d.getElementById(e[2]), f && f.parentNode) {
                    if (f.id !== e[2]) return A.find(a);
                    this.length = 1, this[0] = f
                }
                return this.context = d, this.selector = a, this
            }
            return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : n.isFunction(a) ? "undefined" != typeof c.ready ? c.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), n.makeArray(a, this))
        };
    C.prototype = n.fn, A = n(d);
    var D = /^(?:parents|prev(?:Until|All))/,
        E = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    n.fn.extend({
        has: function(a) {
            var b, c = n(a, this),
                d = c.length;
            return this.filter(function() {
                for (b = 0; d > b; b++)
                    if (n.contains(this, c[b])) return !0
            })
        },
        closest: function(a, b) {
            for (var c, d = 0, e = this.length, f = [], g = w.test(a) || "string" != typeof a ? n(a, b || this.context) : 0; e > d; d++)
                for (c = this[d]; c && c !== b; c = c.parentNode)
                    if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && n.find.matchesSelector(c, a))) {
                        f.push(c);
                        break
                    }
            return this.pushStack(f.length > 1 ? n.uniqueSort(f) : f)
        },
        index: function(a) {
            return a ? "string" == typeof a ? n.inArray(this[0], n(a)) : n.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(a, b) {
            return this.pushStack(n.uniqueSort(n.merge(this.get(), n(a, b))))
        },
        addBack: function(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    });

    function F(a, b) {
        do a = a[b]; while (a && 1 !== a.nodeType);
        return a
    }
    n.each({
        parent: function(a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        },
        parents: function(a) {
            return u(a, "parentNode")
        },
        parentsUntil: function(a, b, c) {
            return u(a, "parentNode", c)
        },
        next: function(a) {
            return F(a, "nextSibling")
        },
        prev: function(a) {
            return F(a, "previousSibling")
        },
        nextAll: function(a) {
            return u(a, "nextSibling")
        },
        prevAll: function(a) {
            return u(a, "previousSibling")
        },
        nextUntil: function(a, b, c) {
            return u(a, "nextSibling", c)
        },
        prevUntil: function(a, b, c) {
            return u(a, "previousSibling", c)
        },
        siblings: function(a) {
            return v((a.parentNode || {}).firstChild, a)
        },
        children: function(a) {
            return v(a.firstChild)
        },
        contents: function(a) {
            return n.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : n.merge([], a.childNodes)
        }
    }, function(a, b) {
        n.fn[a] = function(c, d) {
            var e = n.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = n.filter(d, e)), this.length > 1 && (E[a] || (e = n.uniqueSort(e)), D.test(a) && (e = e.reverse())), this.pushStack(e)
        }
    });
    var G = /\S+/g;

    function H(a) {
        var b = {};
        return n.each(a.match(G) || [], function(a, c) {
            b[c] = !0
        }), b
    }
    n.Callbacks = function(a) {
        a = "string" == typeof a ? H(a) : n.extend({}, a);
        var b, c, d, e, f = [],
            g = [],
            h = -1,
            i = function() {
                for (e = a.once, d = b = !0; g.length; h = -1) {
                    c = g.shift();
                    while (++h < f.length) f[h].apply(c[0], c[1]) === !1 && a.stopOnFalse && (h = f.length, c = !1)
                }
                a.memory || (c = !1), b = !1, e && (f = c ? [] : "")
            },
            j = {
                add: function() {
                    return f && (c && !b && (h = f.length - 1, g.push(c)), function d(b) {
                        n.each(b, function(b, c) {
                            n.isFunction(c) ? a.unique && j.has(c) || f.push(c) : c && c.length && "string" !== n.type(c) && d(c)
                        })
                    }(arguments), c && !b && i()), this
                },
                remove: function() {
                    return n.each(arguments, function(a, b) {
                        var c;
                        while ((c = n.inArray(b, f, c)) > -1) f.splice(c, 1), h >= c && h--
                    }), this
                },
                has: function(a) {
                    return a ? n.inArray(a, f) > -1 : f.length > 0
                },
                empty: function() {
                    return f && (f = []), this
                },
                disable: function() {
                    return e = g = [], f = c = "", this
                },
                disabled: function() {
                    return !f
                },
                lock: function() {
                    return e = !0, c || j.disable(), this
                },
                locked: function() {
                    return !!e
                },
                fireWith: function(a, c) {
                    return e || (c = c || [], c = [a, c.slice ? c.slice() : c], g.push(c), b || i()), this
                },
                fire: function() {
                    return j.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!d
                }
            };
        return j
    }, n.extend({
        Deferred: function(a) {
            var b = [
                    ["resolve", "done", n.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", n.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", n.Callbacks("memory")]
                ],
                c = "pending",
                d = {
                    state: function() {
                        return c
                    },
                    always: function() {
                        return e.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var a = arguments;
                        return n.Deferred(function(c) {
                            n.each(b, function(b, f) {
                                var g = n.isFunction(a[b]) && a[b];
                                e[f[1]](function() {
                                    var a = g && g.apply(this, arguments);
                                    a && n.isFunction(a.promise) ? a.promise().progress(c.notify).done(c.resolve).fail(c.reject) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                                })
                            }), a = null
                        }).promise()
                    },
                    promise: function(a) {
                        return null != a ? n.extend(a, d) : d
                    }
                },
                e = {};
            return d.pipe = d.then, n.each(b, function(a, f) {
                var g = f[2],
                    h = f[3];
                d[f[1]] = g.add, h && g.add(function() {
                    c = h
                }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function() {
                    return e[f[0] + "With"](this === e ? d : this, arguments), this
                }, e[f[0] + "With"] = g.fireWith
            }), d.promise(e), a && a.call(e, e), e
        },
        when: function(a) {
            var b = 0,
                c = e.call(arguments),
                d = c.length,
                f = 1 !== d || a && n.isFunction(a.promise) ? d : 0,
                g = 1 === f ? a : n.Deferred(),
                h = function(a, b, c) {
                    return function(d) {
                        b[a] = this, c[a] = arguments.length > 1 ? e.call(arguments) : d, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c)
                    }
                },
                i, j, k;
            if (d > 1)
                for (i = new Array(d), j = new Array(d), k = new Array(d); d > b; b++) c[b] && n.isFunction(c[b].promise) ? c[b].promise().progress(h(b, j, i)).done(h(b, k, c)).fail(g.reject) : --f;
            return f || g.resolveWith(k, c), g.promise()
        }
    });
    var I;
    n.fn.ready = function(a) {
        return n.ready.promise().done(a), this
    }, n.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(a) {
            a ? n.readyWait++ : n.ready(!0)
        },
        ready: function(a) {
            (a === !0 ? --n.readyWait : n.isReady) || (n.isReady = !0, a !== !0 && --n.readyWait > 0 || (I.resolveWith(d, [n]), n.fn.triggerHandler && (n(d).triggerHandler("ready"), n(d).off("ready"))))
        }
    });

    function J() {
        d.addEventListener ? (d.removeEventListener("DOMContentLoaded", K), a.removeEventListener("load", K)) : (d.detachEvent("onreadystatechange", K), a.detachEvent("onload", K))
    }

    function K() {
        (d.addEventListener || "load" === a.event.type || "complete" === d.readyState) && (J(), n.ready())
    }
    n.ready.promise = function(b) {
        if (!I)
            if (I = n.Deferred(), "complete" === d.readyState) a.setTimeout(n.ready);
            else if (d.addEventListener) d.addEventListener("DOMContentLoaded", K), a.addEventListener("load", K);
            else {
                d.attachEvent("onreadystatechange", K), a.attachEvent("onload", K);
                var c = !1;
                try {
                    c = null == a.frameElement && d.documentElement
                } catch (e) {}
                c && c.doScroll && ! function f() {
                    if (!n.isReady) {
                        try {
                            c.doScroll("left")
                        } catch (b) {
                            return a.setTimeout(f, 50)
                        }
                        J(), n.ready()
                    }
                }()
            }
        return I.promise(b)
    }, n.ready.promise();
    var L;
    for (L in n(l)) break;
    l.ownFirst = "0" === L, l.inlineBlockNeedsLayout = !1, n(function() {
        var a, b, c, e;
        c = d.getElementsByTagName("body")[0], c && c.style && (b = d.createElement("div"), e = d.createElement("div"), e.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(e).appendChild(b), "undefined" != typeof b.style.zoom && (b.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", l.inlineBlockNeedsLayout = a = 3 === b.offsetWidth, a && (c.style.zoom = 1)), c.removeChild(e))
    }),
        function() {
            var a = d.createElement("div");
            l.deleteExpando = !0;
            try {
                delete a.test
            } catch (b) {
                l.deleteExpando = !1
            }
            a = null
        }();
    var M = function(a) {
            var b = n.noData[(a.nodeName + " ").toLowerCase()],
                c = +a.nodeType || 1;
            return 1 !== c && 9 !== c ? !1 : !b || b !== !0 && a.getAttribute("classid") === b
        },
        N = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        O = /([A-Z])/g;

    function P(a, b, c) {
        if (void 0 === c && 1 === a.nodeType) {
            var d = "data-" + b.replace(O, "-$1").toLowerCase();
            if (c = a.getAttribute(d), "string" == typeof c) {
                try {
                    c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : N.test(c) ? n.parseJSON(c) : c
                } catch (e) {}
                n.data(a, b, c)
            } else c = void 0
        }
        return c
    }

    function Q(a) {
        var b;
        for (b in a)
            if (("data" !== b || !n.isEmptyObject(a[b])) && "toJSON" !== b) return !1;
        return !0
    }

    function R(a, b, d, e) {
        if (M(a)) {
            var f, g, h = n.expando,
                i = a.nodeType,
                j = i ? n.cache : a,
                k = i ? a[h] : a[h] && h;
            if (k && j[k] && (e || j[k].data) || void 0 !== d || "string" != typeof b) return k || (k = i ? a[h] = c.pop() || n.guid++ : h), j[k] || (j[k] = i ? {} : {
                toJSON: n.noop
            }), ("object" == typeof b || "function" == typeof b) && (e ? j[k] = n.extend(j[k], b) : j[k].data = n.extend(j[k].data, b)), g = j[k], e || (g.data || (g.data = {}), g = g.data), void 0 !== d && (g[n.camelCase(b)] = d), "string" == typeof b ? (f = g[b], null == f && (f = g[n.camelCase(b)])) : f = g, f
        }
    }

    function S(a, b, c) {
        if (M(a)) {
            var d, e, f = a.nodeType,
                g = f ? n.cache : a,
                h = f ? a[n.expando] : n.expando;
            if (g[h]) {
                if (b && (d = c ? g[h] : g[h].data)) {
                    n.isArray(b) ? b = b.concat(n.map(b, n.camelCase)) : b in d ? b = [b] : (b = n.camelCase(b), b = b in d ? [b] : b.split(" ")), e = b.length;
                    while (e--) delete d[b[e]];
                    if (c ? !Q(d) : !n.isEmptyObject(d)) return
                }(c || (delete g[h].data, Q(g[h]))) && (f ? n.cleanData([a], !0) : l.deleteExpando || g != g.window ? delete g[h] : g[h] = void 0)
            }
        }
    }
    n.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(a) {
            return a = a.nodeType ? n.cache[a[n.expando]] : a[n.expando], !!a && !Q(a)
        },
        data: function(a, b, c) {
            return R(a, b, c)
        },
        removeData: function(a, b) {
            return S(a, b)
        },
        _data: function(a, b, c) {
            return R(a, b, c, !0)
        },
        _removeData: function(a, b) {
            return S(a, b, !0)
        }
    }), n.fn.extend({
        data: function(a, b) {
            var c, d, e, f = this[0],
                g = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = n.data(f), 1 === f.nodeType && !n._data(f, "parsedAttrs"))) {
                    c = g.length;
                    while (c--) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = n.camelCase(d.slice(5)), P(f, d, e[d])));
                    n._data(f, "parsedAttrs", !0)
                }
                return e
            }
            return "object" == typeof a ? this.each(function() {
                n.data(this, a)
            }) : arguments.length > 1 ? this.each(function() {
                n.data(this, a, b)
            }) : f ? P(f, a, n.data(f, a)) : void 0
        },
        removeData: function(a) {
            return this.each(function() {
                n.removeData(this, a)
            })
        }
    }), n.extend({
        queue: function(a, b, c) {
            var d;
            return a ? (b = (b || "fx") + "queue", d = n._data(a, b), c && (!d || n.isArray(c) ? d = n._data(a, b, n.makeArray(c)) : d.push(c)), d || []) : void 0
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = n.queue(a, b),
                d = c.length,
                e = c.shift(),
                f = n._queueHooks(a, b),
                g = function() {
                    n.dequeue(a, b)
                };
            "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
        },
        _queueHooks: function(a, b) {
            var c = b + "queueHooks";
            return n._data(a, c) || n._data(a, c, {
                empty: n.Callbacks("once memory").add(function() {
                    n._removeData(a, b + "queue"), n._removeData(a, c)
                })
            })
        }
    }), n.fn.extend({
        queue: function(a, b) {
            var c = 2;
            return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? n.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                var c = n.queue(this, a, b);
                n._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a)
            })
        },
        dequeue: function(a) {
            return this.each(function() {
                n.dequeue(this, a)
            })
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", [])
        },
        promise: function(a, b) {
            var c, d = 1,
                e = n.Deferred(),
                f = this,
                g = this.length,
                h = function() {
                    --d || e.resolveWith(f, [f])
                };
            "string" != typeof a && (b = a, a = void 0), a = a || "fx";
            while (g--) c = n._data(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
            return h(), e.promise(b)
        }
    }),
        function() {
            var a;
            l.shrinkWrapBlocks = function() {
                if (null != a) return a;
                a = !1;
                var b, c, e;
                return c = d.getElementsByTagName("body")[0], c && c.style ? (b = d.createElement("div"), e = d.createElement("div"), e.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(e).appendChild(b), "undefined" != typeof b.style.zoom && (b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", b.appendChild(d.createElement("div")).style.width = "5px", a = 3 !== b.offsetWidth), c.removeChild(e), a) : void 0
            }
        }();
    var T = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        U = new RegExp("^(?:([+-])=|)(" + T + ")([a-z%]*)$", "i"),
        V = ["Top", "Right", "Bottom", "Left"],
        W = function(a, b) {
            return a = b || a, "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a)
        };

    function X(a, b, c, d) {
        var e, f = 1,
            g = 20,
            h = d ? function() {
                return d.cur()
            } : function() {
                return n.css(a, b, "")
            },
            i = h(),
            j = c && c[3] || (n.cssNumber[b] ? "" : "px"),
            k = (n.cssNumber[b] || "px" !== j && +i) && U.exec(n.css(a, b));
        if (k && k[3] !== j) {
            j = j || k[3], c = c || [], k = +i || 1;
            do f = f || ".5", k /= f, n.style(a, b, k + j); while (f !== (f = h() / i) && 1 !== f && --g)
        }
        return c && (k = +k || +i || 0, e = c[1] ? k + (c[1] + 1) * c[2] : +c[2], d && (d.unit = j, d.start = k, d.end = e)), e
    }
    var Y = function(a, b, c, d, e, f, g) {
            var h = 0,
                i = a.length,
                j = null == c;
            if ("object" === n.type(c)) {
                e = !0;
                for (h in c) Y(a, b, h, c[h], !0, f, g)
            } else if (void 0 !== d && (e = !0, n.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function(a, b, c) {
                return j.call(n(a), c)
            })), b))
                for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
            return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
        },
        Z = /^(?:checkbox|radio)$/i,
        $ = /<([\w:-]+)/,
        _ = /^$|\/(?:java|ecma)script/i,
        aa = /^\s+/,
        ba = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";

    function ca(a) {
        var b = ba.split("|"),
            c = a.createDocumentFragment();
        if (c.createElement)
            while (b.length) c.createElement(b.pop());
        return c
    }! function() {
        var a = d.createElement("div"),
            b = d.createDocumentFragment(),
            c = d.createElement("input");
        a.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", l.leadingWhitespace = 3 === a.firstChild.nodeType, l.tbody = !a.getElementsByTagName("tbody").length, l.htmlSerialize = !!a.getElementsByTagName("link").length, l.html5Clone = "<:nav></:nav>" !== d.createElement("nav").cloneNode(!0).outerHTML, c.type = "checkbox", c.checked = !0, b.appendChild(c), l.appendChecked = c.checked, a.innerHTML = "<textarea>x</textarea>", l.noCloneChecked = !!a.cloneNode(!0).lastChild.defaultValue, b.appendChild(a), c = d.createElement("input"), c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), a.appendChild(c), l.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked, l.noCloneEvent = !!a.addEventListener, a[n.expando] = 1, l.attributes = !a.getAttribute(n.expando)
    }();
    var da = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: l.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    };
    da.optgroup = da.option, da.tbody = da.tfoot = da.colgroup = da.caption = da.thead, da.th = da.td;

    function ea(a, b) {
        var c, d, e = 0,
            f = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : void 0;
        if (!f)
            for (f = [], c = a.childNodes || a; null != (d = c[e]); e++) !b || n.nodeName(d, b) ? f.push(d) : n.merge(f, ea(d, b));
        return void 0 === b || b && n.nodeName(a, b) ? n.merge([a], f) : f
    }

    function fa(a, b) {
        for (var c, d = 0; null != (c = a[d]); d++) n._data(c, "globalEval", !b || n._data(b[d], "globalEval"))
    }
    var ga = /<|&#?\w+;/,
        ha = /<tbody/i;

    function ia(a) {
        Z.test(a.type) && (a.defaultChecked = a.checked)
    }

    function ja(a, b, c, d, e) {
        for (var f, g, h, i, j, k, m, o = a.length, p = ca(b), q = [], r = 0; o > r; r++)
            if (g = a[r], g || 0 === g)
                if ("object" === n.type(g)) n.merge(q, g.nodeType ? [g] : g);
                else if (ga.test(g)) {
                    i = i || p.appendChild(b.createElement("div")), j = ($.exec(g) || ["", ""])[1].toLowerCase(), m = da[j] || da._default, i.innerHTML = m[1] + n.htmlPrefilter(g) + m[2], f = m[0];
                    while (f--) i = i.lastChild;
                    if (!l.leadingWhitespace && aa.test(g) && q.push(b.createTextNode(aa.exec(g)[0])), !l.tbody) {
                        g = "table" !== j || ha.test(g) ? "<table>" !== m[1] || ha.test(g) ? 0 : i : i.firstChild, f = g && g.childNodes.length;
                        while (f--) n.nodeName(k = g.childNodes[f], "tbody") && !k.childNodes.length && g.removeChild(k)
                    }
                    n.merge(q, i.childNodes), i.textContent = "";
                    while (i.firstChild) i.removeChild(i.firstChild);
                    i = p.lastChild
                } else q.push(b.createTextNode(g));
        i && p.removeChild(i), l.appendChecked || n.grep(ea(q, "input"), ia), r = 0;
        while (g = q[r++])
            if (d && n.inArray(g, d) > -1) e && e.push(g);
            else if (h = n.contains(g.ownerDocument, g), i = ea(p.appendChild(g), "script"), h && fa(i), c) {
                f = 0;
                while (g = i[f++]) _.test(g.type || "") && c.push(g)
            }
        return i = null, p
    }! function() {
        var b, c, e = d.createElement("div");
        for (b in {
            submit: !0,
            change: !0,
            focusin: !0
        }) c = "on" + b, (l[b] = c in a) || (e.setAttribute(c, "t"), l[b] = e.attributes[c].expando === !1);
        e = null
    }();
    var ka = /^(?:input|select|textarea)$/i,
        la = /^key/,
        ma = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        na = /^(?:focusinfocus|focusoutblur)$/,
        oa = /^([^.]*)(?:\.(.+)|)/;

    function pa() {
        return !0
    }

    function qa() {
        return !1
    }

    function ra() {
        try {
            return d.activeElement
        } catch (a) {}
    }

    function sa(a, b, c, d, e, f) {
        var g, h;
        if ("object" == typeof b) {
            "string" != typeof c && (d = d || c, c = void 0);
            for (h in b) sa(a, h, c, d, b[h], f);
            return a
        }
        if (null == d && null == e ? (e = c, d = c = void 0) : null == e && ("string" == typeof c ? (e = d, d = void 0) : (e = d, d = c, c = void 0)), e === !1) e = qa;
        else if (!e) return a;
        return 1 === f && (g = e, e = function(a) {
            return n().off(a), g.apply(this, arguments)
        }, e.guid = g.guid || (g.guid = n.guid++)), a.each(function() {
            n.event.add(this, b, e, d, c)
        })
    }
    n.event = {
        global: {},
        add: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = n._data(a);
            if (r) {
                c.handler && (i = c, c = i.handler, e = i.selector), c.guid || (c.guid = n.guid++), (g = r.events) || (g = r.events = {}), (k = r.handle) || (k = r.handle = function(a) {
                    return "undefined" == typeof n || a && n.event.triggered === a.type ? void 0 : n.event.dispatch.apply(k.elem, arguments)
                }, k.elem = a), b = (b || "").match(G) || [""], h = b.length;
                while (h--) f = oa.exec(b[h]) || [], o = q = f[1], p = (f[2] || "").split(".").sort(), o && (j = n.event.special[o] || {}, o = (e ? j.delegateType : j.bindType) || o, j = n.event.special[o] || {}, l = n.extend({
                    type: o,
                    origType: q,
                    data: d,
                    handler: c,
                    guid: c.guid,
                    selector: e,
                    needsContext: e && n.expr.match.needsContext.test(e),
                    namespace: p.join(".")
                }, i), (m = g[o]) || (m = g[o] = [], m.delegateCount = 0, j.setup && j.setup.call(a, d, p, k) !== !1 || (a.addEventListener ? a.addEventListener(o, k, !1) : a.attachEvent && a.attachEvent("on" + o, k))), j.add && (j.add.call(a, l), l.handler.guid || (l.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, l) : m.push(l), n.event.global[o] = !0);
                a = null
            }
        },
        remove: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = n.hasData(a) && n._data(a);
            if (r && (k = r.events)) {
                b = (b || "").match(G) || [""], j = b.length;
                while (j--)
                    if (h = oa.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) {
                        l = n.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, m = k[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), i = f = m.length;
                        while (f--) g = m[f], !e && q !== g.origType || c && c.guid !== g.guid || h && !h.test(g.namespace) || d && d !== g.selector && ("**" !== d || !g.selector) || (m.splice(f, 1), g.selector && m.delegateCount--, l.remove && l.remove.call(a, g));
                        i && !m.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || n.removeEvent(a, o, r.handle), delete k[o])
                    } else
                        for (o in k) n.event.remove(a, o + b[j], c, d, !0);
                n.isEmptyObject(k) && (delete r.handle, n._removeData(a, "events"))
            }
        },
        trigger: function(b, c, e, f) {
            var g, h, i, j, l, m, o, p = [e || d],
                q = k.call(b, "type") ? b.type : b,
                r = k.call(b, "namespace") ? b.namespace.split(".") : [];
            if (i = m = e = e || d, 3 !== e.nodeType && 8 !== e.nodeType && !na.test(q + n.event.triggered) && (q.indexOf(".") > -1 && (r = q.split("."), q = r.shift(), r.sort()), h = q.indexOf(":") < 0 && "on" + q, b = b[n.expando] ? b : new n.Event(q, "object" == typeof b && b), b.isTrigger = f ? 2 : 3, b.namespace = r.join("."), b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = e), c = null == c ? [b] : n.makeArray(c, [b]), l = n.event.special[q] || {}, f || !l.trigger || l.trigger.apply(e, c) !== !1)) {
                if (!f && !l.noBubble && !n.isWindow(e)) {
                    for (j = l.delegateType || q, na.test(j + q) || (i = i.parentNode); i; i = i.parentNode) p.push(i), m = i;
                    m === (e.ownerDocument || d) && p.push(m.defaultView || m.parentWindow || a)
                }
                o = 0;
                while ((i = p[o++]) && !b.isPropagationStopped()) b.type = o > 1 ? j : l.bindType || q, g = (n._data(i, "events") || {})[b.type] && n._data(i, "handle"), g && g.apply(i, c), g = h && i[h], g && g.apply && M(i) && (b.result = g.apply(i, c), b.result === !1 && b.preventDefault());
                if (b.type = q, !f && !b.isDefaultPrevented() && (!l._default || l._default.apply(p.pop(), c) === !1) && M(e) && h && e[q] && !n.isWindow(e)) {
                    m = e[h], m && (e[h] = null), n.event.triggered = q;
                    try {
                        e[q]()
                    } catch (s) {}
                    n.event.triggered = void 0, m && (e[h] = m)
                }
                return b.result
            }
        },
        dispatch: function(a) {
            a = n.event.fix(a);
            var b, c, d, f, g, h = [],
                i = e.call(arguments),
                j = (n._data(this, "events") || {})[a.type] || [],
                k = n.event.special[a.type] || {};
            if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
                h = n.event.handlers.call(this, a, j), b = 0;
                while ((f = h[b++]) && !a.isPropagationStopped()) {
                    a.currentTarget = f.elem, c = 0;
                    while ((g = f.handlers[c++]) && !a.isImmediatePropagationStopped())(!a.rnamespace || a.rnamespace.test(g.namespace)) && (a.handleObj = g, a.data = g.data, d = ((n.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== d && (a.result = d) === !1 && (a.preventDefault(), a.stopPropagation()))
                }
                return k.postDispatch && k.postDispatch.call(this, a), a.result
            }
        },
        handlers: function(a, b) {
            var c, d, e, f, g = [],
                h = b.delegateCount,
                i = a.target;
            if (h && i.nodeType && ("click" !== a.type || isNaN(a.button) || a.button < 1))
                for (; i != this; i = i.parentNode || this)
                    if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
                        for (d = [], c = 0; h > c; c++) f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? n(e, this).index(i) > -1 : n.find(e, this, null, [i]).length), d[e] && d.push(f);
                        d.length && g.push({
                            elem: i,
                            handlers: d
                        })
                    }
            return h < b.length && g.push({
                elem: this,
                handlers: b.slice(h)
            }), g
        },
        fix: function(a) {
            if (a[n.expando]) return a;
            var b, c, e, f = a.type,
                g = a,
                h = this.fixHooks[f];
            h || (this.fixHooks[f] = h = ma.test(f) ? this.mouseHooks : la.test(f) ? this.keyHooks : {}), e = h.props ? this.props.concat(h.props) : this.props, a = new n.Event(g), b = e.length;
            while (b--) c = e[b], a[c] = g[c];
            return a.target || (a.target = g.srcElement || d), 3 === a.target.nodeType && (a.target = a.target.parentNode), a.metaKey = !!a.metaKey, h.filter ? h.filter(a, g) : a
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(a, b) {
                var c, e, f, g = b.button,
                    h = b.fromElement;
                return null == a.pageX && null != b.clientX && (e = a.target.ownerDocument || d, f = e.documentElement, c = e.body, a.pageX = b.clientX + (f && f.scrollLeft || c && c.scrollLeft || 0) - (f && f.clientLeft || c && c.clientLeft || 0), a.pageY = b.clientY + (f && f.scrollTop || c && c.scrollTop || 0) - (f && f.clientTop || c && c.clientTop || 0)), !a.relatedTarget && h && (a.relatedTarget = h === a.target ? b.toElement : h), a.which || void 0 === g || (a.which = 1 & g ? 1 : 2 & g ? 3 : 4 & g ? 2 : 0), a
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== ra() && this.focus) try {
                        return this.focus(), !1
                    } catch (a) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === ra() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return n.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                },
                _default: function(a) {
                    return n.nodeName(a.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                }
            }
        },
        simulate: function(a, b, c) {
            var d = n.extend(new n.Event, c, {
                type: a,
                isSimulated: !0
            });
            n.event.trigger(d, null, b), d.isDefaultPrevented() && c.preventDefault()
        }
    }, n.removeEvent = d.removeEventListener ? function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c)
    } : function(a, b, c) {
        var d = "on" + b;
        a.detachEvent && ("undefined" == typeof a[d] && (a[d] = null), a.detachEvent(d, c))
    }, n.Event = function(a, b) {
        return this instanceof n.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? pa : qa) : this.type = a, b && n.extend(this, b), this.timeStamp = a && a.timeStamp || n.now(), void(this[n.expando] = !0)) : new n.Event(a, b)
    }, n.Event.prototype = {
        constructor: n.Event,
        isDefaultPrevented: qa,
        isPropagationStopped: qa,
        isImmediatePropagationStopped: qa,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = pa, a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = pa, a && !this.isSimulated && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = pa, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation()
        }
    }, n.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(a, b) {
        n.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c, d = this,
                    e = a.relatedTarget,
                    f = a.handleObj;
                return (!e || e !== d && !n.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
            }
        }
    }), l.submit || (n.event.special.submit = {
        setup: function() {
            return n.nodeName(this, "form") ? !1 : void n.event.add(this, "click._submit keypress._submit", function(a) {
                var b = a.target,
                    c = n.nodeName(b, "input") || n.nodeName(b, "button") ? n.prop(b, "form") : void 0;
                c && !n._data(c, "submit") && (n.event.add(c, "submit._submit", function(a) {
                    a._submitBubble = !0
                }), n._data(c, "submit", !0))
            })
        },
        postDispatch: function(a) {
            a._submitBubble && (delete a._submitBubble, this.parentNode && !a.isTrigger && n.event.simulate("submit", this.parentNode, a))
        },
        teardown: function() {
            return n.nodeName(this, "form") ? !1 : void n.event.remove(this, "._submit")
        }
    }), l.change || (n.event.special.change = {
        setup: function() {
            return ka.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (n.event.add(this, "propertychange._change", function(a) {
                "checked" === a.originalEvent.propertyName && (this._justChanged = !0)
            }), n.event.add(this, "click._change", function(a) {
                this._justChanged && !a.isTrigger && (this._justChanged = !1), n.event.simulate("change", this, a)
            })), !1) : void n.event.add(this, "beforeactivate._change", function(a) {
                var b = a.target;
                ka.test(b.nodeName) && !n._data(b, "change") && (n.event.add(b, "change._change", function(a) {
                    !this.parentNode || a.isSimulated || a.isTrigger || n.event.simulate("change", this.parentNode, a)
                }), n._data(b, "change", !0))
            })
        },
        handle: function(a) {
            var b = a.target;
            return this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type ? a.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function() {
            return n.event.remove(this, "._change"), !ka.test(this.nodeName)
        }
    }), l.focusin || n.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a, b) {
        var c = function(a) {
            n.event.simulate(b, a.target, n.event.fix(a))
        };
        n.event.special[b] = {
            setup: function() {
                var d = this.ownerDocument || this,
                    e = n._data(d, b);
                e || d.addEventListener(a, c, !0), n._data(d, b, (e || 0) + 1)
            },
            teardown: function() {
                var d = this.ownerDocument || this,
                    e = n._data(d, b) - 1;
                e ? n._data(d, b, e) : (d.removeEventListener(a, c, !0), n._removeData(d, b))
            }
        }
    }), n.fn.extend({
        on: function(a, b, c, d) {
            return sa(this, a, b, c, d)
        },
        one: function(a, b, c, d) {
            return sa(this, a, b, c, d, 1)
        },
        off: function(a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj) return d = a.handleObj, n(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
            if ("object" == typeof a) {
                for (e in a) this.off(e, b, a[e]);
                return this
            }
            return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = qa), this.each(function() {
                n.event.remove(this, a, c, b)
            })
        },
        trigger: function(a, b) {
            return this.each(function() {
                n.event.trigger(a, b, this)
            })
        },
        triggerHandler: function(a, b) {
            var c = this[0];
            return c ? n.event.trigger(a, b, c, !0) : void 0
        }
    });
    var ta = / jQuery\d+="(?:null|\d+)"/g,
        ua = new RegExp("<(?:" + ba + ")[\\s/>]", "i"),
        va = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
        wa = /<script|<style|<link/i,
        xa = /checked\s*(?:[^=]|=\s*.checked.)/i,
        ya = /^true\/(.*)/,
        za = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        Aa = ca(d),
        Ba = Aa.appendChild(d.createElement("div"));

    function Ca(a, b) {
        return n.nodeName(a, "table") && n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }

    function Da(a) {
        return a.type = (null !== n.find.attr(a, "type")) + "/" + a.type, a
    }

    function Ea(a) {
        var b = ya.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a
    }

    function Fa(a, b) {
        if (1 === b.nodeType && n.hasData(a)) {
            var c, d, e, f = n._data(a),
                g = n._data(b, f),
                h = f.events;
            if (h) {
                delete g.handle, g.events = {};
                for (c in h)
                    for (d = 0, e = h[c].length; e > d; d++) n.event.add(b, c, h[c][d])
            }
            g.data && (g.data = n.extend({}, g.data))
        }
    }

    function Ga(a, b) {
        var c, d, e;
        if (1 === b.nodeType) {
            if (c = b.nodeName.toLowerCase(), !l.noCloneEvent && b[n.expando]) {
                e = n._data(b);
                for (d in e.events) n.removeEvent(b, d, e.handle);
                b.removeAttribute(n.expando)
            }
            "script" === c && b.text !== a.text ? (Da(b).text = a.text, Ea(b)) : "object" === c ? (b.parentNode && (b.outerHTML = a.outerHTML), l.html5Clone && a.innerHTML && !n.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : "input" === c && Z.test(a.type) ? (b.defaultChecked = b.checked = a.checked, b.value !== a.value && (b.value = a.value)) : "option" === c ? b.defaultSelected = b.selected = a.defaultSelected : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
        }
    }

    function Ha(a, b, c, d) {
        b = f.apply([], b);
        var e, g, h, i, j, k, m = 0,
            o = a.length,
            p = o - 1,
            q = b[0],
            r = n.isFunction(q);
        if (r || o > 1 && "string" == typeof q && !l.checkClone && xa.test(q)) return a.each(function(e) {
            var f = a.eq(e);
            r && (b[0] = q.call(this, e, f.html())), Ha(f, b, c, d)
        });
        if (o && (k = ja(b, a[0].ownerDocument, !1, a, d), e = k.firstChild, 1 === k.childNodes.length && (k = e), e || d)) {
            for (i = n.map(ea(k, "script"), Da), h = i.length; o > m; m++) g = k, m !== p && (g = n.clone(g, !0, !0), h && n.merge(i, ea(g, "script"))), c.call(a[m], g, m);
            if (h)
                for (j = i[i.length - 1].ownerDocument, n.map(i, Ea), m = 0; h > m; m++) g = i[m], _.test(g.type || "") && !n._data(g, "globalEval") && n.contains(j, g) && (g.src ? n._evalUrl && n._evalUrl(g.src) : n.globalEval((g.text || g.textContent || g.innerHTML || "").replace(za, "")));
            k = e = null
        }
        return a
    }

    function Ia(a, b, c) {
        for (var d, e = b ? n.filter(b, a) : a, f = 0; null != (d = e[f]); f++) c || 1 !== d.nodeType || n.cleanData(ea(d)), d.parentNode && (c && n.contains(d.ownerDocument, d) && fa(ea(d, "script")), d.parentNode.removeChild(d));
        return a
    }
    n.extend({
        htmlPrefilter: function(a) {
            return a.replace(va, "<$1></$2>")
        },
        clone: function(a, b, c) {
            var d, e, f, g, h, i = n.contains(a.ownerDocument, a);
            if (l.html5Clone || n.isXMLDoc(a) || !ua.test("<" + a.nodeName + ">") ? f = a.cloneNode(!0) : (Ba.innerHTML = a.outerHTML, Ba.removeChild(f = Ba.firstChild)), !(l.noCloneEvent && l.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || n.isXMLDoc(a)))
                for (d = ea(f), h = ea(a), g = 0; null != (e = h[g]); ++g) d[g] && Ga(e, d[g]);
            if (b)
                if (c)
                    for (h = h || ea(a), d = d || ea(f), g = 0; null != (e = h[g]); g++) Fa(e, d[g]);
                else Fa(a, f);
            return d = ea(f, "script"), d.length > 0 && fa(d, !i && ea(a, "script")), d = h = e = null, f
        },
        cleanData: function(a, b) {
            for (var d, e, f, g, h = 0, i = n.expando, j = n.cache, k = l.attributes, m = n.event.special; null != (d = a[h]); h++)
                if ((b || M(d)) && (f = d[i], g = f && j[f])) {
                    if (g.events)
                        for (e in g.events) m[e] ? n.event.remove(d, e) : n.removeEvent(d, e, g.handle);
                    j[f] && (delete j[f], k || "undefined" == typeof d.removeAttribute ? d[i] = void 0 : d.removeAttribute(i), c.push(f))
                }
        }
    }), n.fn.extend({
        domManip: Ha,
        detach: function(a) {
            return Ia(this, a, !0)
        },
        remove: function(a) {
            return Ia(this, a)
        },
        text: function(a) {
            return Y(this, function(a) {
                return void 0 === a ? n.text(this) : this.empty().append((this[0] && this[0].ownerDocument || d).createTextNode(a))
            }, null, a, arguments.length)
        },
        append: function() {
            return Ha(this, arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = Ca(this, a);
                    b.appendChild(a)
                }
            })
        },
        prepend: function() {
            return Ha(this, arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = Ca(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        },
        before: function() {
            return Ha(this, arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        },
        after: function() {
            return Ha(this, arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        },
        empty: function() {
            for (var a, b = 0; null != (a = this[b]); b++) {
                1 === a.nodeType && n.cleanData(ea(a, !1));
                while (a.firstChild) a.removeChild(a.firstChild);
                a.options && n.nodeName(a, "select") && (a.options.length = 0)
            }
            return this
        },
        clone: function(a, b) {
            return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function() {
                return n.clone(this, a, b)
            })
        },
        html: function(a) {
            return Y(this, function(a) {
                var b = this[0] || {},
                    c = 0,
                    d = this.length;
                if (void 0 === a) return 1 === b.nodeType ? b.innerHTML.replace(ta, "") : void 0;
                if ("string" == typeof a && !wa.test(a) && (l.htmlSerialize || !ua.test(a)) && (l.leadingWhitespace || !aa.test(a)) && !da[($.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a = n.htmlPrefilter(a);
                    try {
                        for (; d > c; c++) b = this[c] || {}, 1 === b.nodeType && (n.cleanData(ea(b, !1)), b.innerHTML = a);
                        b = 0
                    } catch (e) {}
                }
                b && this.empty().append(a)
            }, null, a, arguments.length)
        },
        replaceWith: function() {
            var a = [];
            return Ha(this, arguments, function(b) {
                var c = this.parentNode;
                n.inArray(this, a) < 0 && (n.cleanData(ea(this)), c && c.replaceChild(b, this))
            }, a)
        }
    }), n.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, b) {
        n.fn[a] = function(a) {
            for (var c, d = 0, e = [], f = n(a), h = f.length - 1; h >= d; d++) c = d === h ? this : this.clone(!0), n(f[d])[b](c), g.apply(e, c.get());
            return this.pushStack(e)
        }
    });
    var Ja, Ka = {
        HTML: "block",
        BODY: "block"
    };

    function La(a, b) {
        var c = n(b.createElement(a)).appendTo(b.body),
            d = n.css(c[0], "display");
        return c.detach(), d
    }

    function Ma(a) {
        var b = d,
            c = Ka[a];
        return c || (c = La(a, b), "none" !== c && c || (Ja = (Ja || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = (Ja[0].contentWindow || Ja[0].contentDocument).document, b.write(), b.close(), c = La(a, b), Ja.detach()), Ka[a] = c), c
    }
    var Na = /^margin/,
        Oa = new RegExp("^(" + T + ")(?!px)[a-z%]+$", "i"),
        Pa = function(a, b, c, d) {
            var e, f, g = {};
            for (f in b) g[f] = a.style[f], a.style[f] = b[f];
            e = c.apply(a, d || []);
            for (f in b) a.style[f] = g[f];
            return e
        },
        Qa = d.documentElement;
    ! function() {
        var b, c, e, f, g, h, i = d.createElement("div"),
            j = d.createElement("div");
        if (j.style) {
            j.style.cssText = "float:left;opacity:.5", l.opacity = "0.5" === j.style.opacity, l.cssFloat = !!j.style.cssFloat, j.style.backgroundClip = "content-box", j.cloneNode(!0).style.backgroundClip = "", l.clearCloneStyle = "content-box" === j.style.backgroundClip, i = d.createElement("div"), i.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", j.innerHTML = "", i.appendChild(j), l.boxSizing = "" === j.style.boxSizing || "" === j.style.MozBoxSizing || "" === j.style.WebkitBoxSizing, n.extend(l, {
                reliableHiddenOffsets: function() {
                    return null == b && k(), f
                },
                boxSizingReliable: function() {
                    return null == b && k(), e
                },
                pixelMarginRight: function() {
                    return null == b && k(), c
                },
                pixelPosition: function() {
                    return null == b && k(), b
                },
                reliableMarginRight: function() {
                    return null == b && k(), g
                },
                reliableMarginLeft: function() {
                    return null == b && k(), h
                }
            });

            function k() {
                var k, l, m = d.documentElement;
                m.appendChild(i), j.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", b = e = h = !1, c = g = !0, a.getComputedStyle && (l = a.getComputedStyle(j), b = "1%" !== (l || {}).top, h = "2px" === (l || {}).marginLeft, e = "4px" === (l || {
                    width: "4px"
                }).width, j.style.marginRight = "50%", c = "4px" === (l || {
                    marginRight: "4px"
                }).marginRight, k = j.appendChild(d.createElement("div")), k.style.cssText = j.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", k.style.marginRight = k.style.width = "0", j.style.width = "1px", g = !parseFloat((a.getComputedStyle(k) || {}).marginRight), j.removeChild(k)), j.style.display = "none", f = 0 === j.getClientRects().length, f && (j.style.display = "", j.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", k = j.getElementsByTagName("td"), k[0].style.cssText = "margin:0;border:0;padding:0;display:none", f = 0 === k[0].offsetHeight, f && (k[0].style.display = "", k[1].style.display = "none", f = 0 === k[0].offsetHeight)), m.removeChild(i)
            }
        }
    }();
    var Ra, Sa, Ta = /^(top|right|bottom|left)$/;
    a.getComputedStyle ? (Ra = function(b) {
        var c = b.ownerDocument.defaultView;
        return c.opener || (c = a), c.getComputedStyle(b)
    }, Sa = function(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Ra(a), g = c ? c.getPropertyValue(b) || c[b] : void 0, c && ("" !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)), !l.pixelMarginRight() && Oa.test(g) && Na.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 === g ? g : g + ""
    }) : Qa.currentStyle && (Ra = function(a) {
        return a.currentStyle
    }, Sa = function(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Ra(a), g = c ? c[b] : void 0, null == g && h && h[b] && (g = h[b]), Oa.test(g) && !Ta.test(b) && (d = h.left, e = a.runtimeStyle, f = e && e.left, f && (e.left = a.currentStyle.left), h.left = "fontSize" === b ? "1em" : g, g = h.pixelLeft + "px", h.left = d, f && (e.left = f)), void 0 === g ? g : g + "" || "auto"
    });

    function Ua(a, b) {
        return {
            get: function() {
                return a() ? void delete this.get : (this.get = b).apply(this, arguments)
            }
        }
    }
    var Va = /alpha\([^)]*\)/i,
        Wa = /opacity\s*=\s*([^)]*)/i,
        Xa = /^(none|table(?!-c[ea]).+)/,
        Ya = new RegExp("^(" + T + ")(.*)$", "i"),
        Za = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        $a = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        _a = ["Webkit", "O", "Moz", "ms"],
        ab = d.createElement("div").style;

    function bb(a) {
        if (a in ab) return a;
        var b = a.charAt(0).toUpperCase() + a.slice(1),
            c = _a.length;
        while (c--)
            if (a = _a[c] + b, a in ab) return a
    }

    function cb(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = n._data(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && W(d) && (f[g] = n._data(d, "olddisplay", Ma(d.nodeName)))) : (e = W(d), (c && "none" !== c || !e) && n._data(d, "olddisplay", e ? c : n.css(d, "display"))));
        for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
        return a
    }

    function db(a, b, c) {
        var d = Ya.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
    }

    function eb(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += n.css(a, c + V[f], !0, e)), d ? ("content" === c && (g -= n.css(a, "padding" + V[f], !0, e)), "margin" !== c && (g -= n.css(a, "border" + V[f] + "Width", !0, e))) : (g += n.css(a, "padding" + V[f], !0, e), "padding" !== c && (g += n.css(a, "border" + V[f] + "Width", !0, e)));
        return g
    }

    function fb(b, c, e) {
        var f = !0,
            g = "width" === c ? b.offsetWidth : b.offsetHeight,
            h = Ra(b),
            i = l.boxSizing && "border-box" === n.css(b, "boxSizing", !1, h);
        if (d.msFullscreenElement && a.top !== a && b.getClientRects().length && (g = Math.round(100 * b.getBoundingClientRect()[c])), 0 >= g || null == g) {
            if (g = Sa(b, c, h), (0 > g || null == g) && (g = b.style[c]), Oa.test(g)) return g;
            f = i && (l.boxSizingReliable() || g === b.style[c]), g = parseFloat(g) || 0
        }
        return g + eb(b, c, e || (i ? "border" : "content"), f, h) + "px"
    }
    n.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = Sa(a, "opacity");
                        return "" === c ? "1" : c
                    }
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
            "float": l.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = n.camelCase(b),
                    i = a.style;
                if (b = n.cssProps[h] || (n.cssProps[h] = bb(h) || h), g = n.cssHooks[b] || n.cssHooks[h], void 0 === c) return g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b];
                if (f = typeof c, "string" === f && (e = U.exec(c)) && e[1] && (c = X(a, b, e), f = "number"), null != c && c === c && ("number" === f && (c += e && e[3] || (n.cssNumber[h] ? "" : "px")), l.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), !(g && "set" in g && void 0 === (c = g.set(a, c, d))))) try {
                    i[b] = c
                } catch (j) {}
            }
        },
        css: function(a, b, c, d) {
            var e, f, g, h = n.camelCase(b);
            return b = n.cssProps[h] || (n.cssProps[h] = bb(h) || h), g = n.cssHooks[b] || n.cssHooks[h], g && "get" in g && (f = g.get(a, !0, c)), void 0 === f && (f = Sa(a, b, d)), "normal" === f && b in $a && (f = $a[b]), "" === c || c ? (e = parseFloat(f), c === !0 || isFinite(e) ? e || 0 : f) : f
        }
    }), n.each(["height", "width"], function(a, b) {
        n.cssHooks[b] = {
            get: function(a, c, d) {
                return c ? Xa.test(n.css(a, "display")) && 0 === a.offsetWidth ? Pa(a, Za, function() {
                    return fb(a, b, d)
                }) : fb(a, b, d) : void 0
            },
            set: function(a, c, d) {
                var e = d && Ra(a);
                return db(a, c, d ? eb(a, b, d, l.boxSizing && "border-box" === n.css(a, "boxSizing", !1, e), e) : 0)
            }
        }
    }), l.opacity || (n.cssHooks.opacity = {
        get: function(a, b) {
            return Wa.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : ""
        },
        set: function(a, b) {
            var c = a.style,
                d = a.currentStyle,
                e = n.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "",
                f = d && d.filter || c.filter || "";
            c.zoom = 1, (b >= 1 || "" === b) && "" === n.trim(f.replace(Va, "")) && c.removeAttribute && (c.removeAttribute("filter"), "" === b || d && !d.filter) || (c.filter = Va.test(f) ? f.replace(Va, e) : f + " " + e)
        }
    }), n.cssHooks.marginRight = Ua(l.reliableMarginRight, function(a, b) {
        return b ? Pa(a, {
            display: "inline-block"
        }, Sa, [a, "marginRight"]) : void 0
    }), n.cssHooks.marginLeft = Ua(l.reliableMarginLeft, function(a, b) {
        return b ? (parseFloat(Sa(a, "marginLeft")) || (n.contains(a.ownerDocument, a) ? a.getBoundingClientRect().left - Pa(a, {
            marginLeft: 0
        }, function() {
            return a.getBoundingClientRect().left
        }) : 0)) + "px" : void 0
    }), n.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(a, b) {
        n.cssHooks[a + b] = {
            expand: function(c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + V[d] + b] = f[d] || f[d - 2] || f[0];
                return e
            }
        }, Na.test(a) || (n.cssHooks[a + b].set = db)
    }), n.fn.extend({
        css: function(a, b) {
            return Y(this, function(a, b, c) {
                var d, e, f = {},
                    g = 0;
                if (n.isArray(b)) {
                    for (d = Ra(a), e = b.length; e > g; g++) f[b[g]] = n.css(a, b[g], !1, d);
                    return f
                }
                return void 0 !== c ? n.style(a, b, c) : n.css(a, b)
            }, a, b, arguments.length > 1)
        },
        show: function() {
            return cb(this, !0)
        },
        hide: function() {
            return cb(this)
        },
        toggle: function(a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                W(this) ? n(this).show() : n(this).hide()
            })
        }
    });

    function gb(a, b, c, d, e) {
        return new gb.prototype.init(a, b, c, d, e)
    }
    n.Tween = gb, gb.prototype = {
        constructor: gb,
        init: function(a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || n.easing._default, this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (n.cssNumber[c] ? "" : "px")
        },
        cur: function() {
            var a = gb.propHooks[this.prop];
            return a && a.get ? a.get(this) : gb.propHooks._default.get(this)
        },
        run: function(a) {
            var b, c = gb.propHooks[this.prop];
            return this.options.duration ? this.pos = b = n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : gb.propHooks._default.set(this), this
        }
    }, gb.prototype.init.prototype = gb.prototype, gb.propHooks = {
        _default: {
            get: function(a) {
                var b;
                return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = n.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0)
            },
            set: function(a) {
                n.fx.step[a.prop] ? n.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[n.cssProps[a.prop]] && !n.cssHooks[a.prop] ? a.elem[a.prop] = a.now : n.style(a.elem, a.prop, a.now + a.unit)
            }
        }
    }, gb.propHooks.scrollTop = gb.propHooks.scrollLeft = {
        set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    }, n.easing = {
        linear: function(a) {
            return a
        },
        swing: function(a) {
            return .5 - Math.cos(a * Math.PI) / 2
        },
        _default: "swing"
    }, n.fx = gb.prototype.init, n.fx.step = {};
    var hb, ib, jb = /^(?:toggle|show|hide)$/,
        kb = /queueHooks$/;

    function lb() {
        return a.setTimeout(function() {
            hb = void 0
        }), hb = n.now()
    }

    function mb(a, b) {
        var c, d = {
                height: a
            },
            e = 0;
        for (b = b ? 1 : 0; 4 > e; e += 2 - b) c = V[e], d["margin" + c] = d["padding" + c] = a;
        return b && (d.opacity = d.width = a), d
    }

    function nb(a, b, c) {
        for (var d, e = (qb.tweeners[b] || []).concat(qb.tweeners["*"]), f = 0, g = e.length; g > f; f++)
            if (d = e[f].call(c, b, a)) return d
    }

    function ob(a, b, c) {
        var d, e, f, g, h, i, j, k, m = this,
            o = {},
            p = a.style,
            q = a.nodeType && W(a),
            r = n._data(a, "fxshow");
        c.queue || (h = n._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function() {
            h.unqueued || i()
        }), h.unqueued++, m.always(function() {
            m.always(function() {
                h.unqueued--, n.queue(a, "fx").length || h.empty.fire()
            })
        })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [p.overflow, p.overflowX, p.overflowY], j = n.css(a, "display"), k = "none" === j ? n._data(a, "olddisplay") || Ma(a.nodeName) : j, "inline" === k && "none" === n.css(a, "float") && (l.inlineBlockNeedsLayout && "inline" !== Ma(a.nodeName) ? p.zoom = 1 : p.display = "inline-block")), c.overflow && (p.overflow = "hidden", l.shrinkWrapBlocks() || m.always(function() {
            p.overflow = c.overflow[0], p.overflowX = c.overflow[1], p.overflowY = c.overflow[2]
        }));
        for (d in b)
            if (e = b[d], jb.exec(e)) {
                if (delete b[d], f = f || "toggle" === e, e === (q ? "hide" : "show")) {
                    if ("show" !== e || !r || void 0 === r[d]) continue;
                    q = !0
                }
                o[d] = r && r[d] || n.style(a, d)
            } else j = void 0;
        if (n.isEmptyObject(o)) "inline" === ("none" === j ? Ma(a.nodeName) : j) && (p.display = j);
        else {
            r ? "hidden" in r && (q = r.hidden) : r = n._data(a, "fxshow", {}), f && (r.hidden = !q), q ? n(a).show() : m.done(function() {
                n(a).hide()
            }), m.done(function() {
                var b;
                n._removeData(a, "fxshow");
                for (b in o) n.style(a, b, o[b])
            });
            for (d in o) g = nb(q ? r[d] : 0, d, m), d in r || (r[d] = g.start, q && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
        }
    }

    function pb(a, b) {
        var c, d, e, f, g;
        for (c in a)
            if (d = n.camelCase(c), e = b[d], f = a[c], n.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = n.cssHooks[d], g && "expand" in g) {
                f = g.expand(f), delete a[d];
                for (c in f) c in a || (a[c] = f[c], b[c] = e)
            } else b[d] = e
    }

    function qb(a, b, c) {
        var d, e, f = 0,
            g = qb.prefilters.length,
            h = n.Deferred().always(function() {
                delete i.elem
            }),
            i = function() {
                if (e) return !1;
                for (var b = hb || lb(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
                return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
            },
            j = h.promise({
                elem: a,
                props: n.extend({}, b),
                opts: n.extend(!0, {
                    specialEasing: {},
                    easing: n.easing._default
                }, c),
                originalProperties: b,
                originalOptions: c,
                startTime: hb || lb(),
                duration: c.duration,
                tweens: [],
                createTween: function(b, c) {
                    var d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                    return j.tweens.push(d), d
                },
                stop: function(b) {
                    var c = 0,
                        d = b ? j.tweens.length : 0;
                    if (e) return this;
                    for (e = !0; d > c; c++) j.tweens[c].run(1);
                    return b ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b])) : h.rejectWith(a, [j, b]), this
                }
            }),
            k = j.props;
        for (pb(k, j.opts.specialEasing); g > f; f++)
            if (d = qb.prefilters[f].call(j, a, k, j.opts)) return n.isFunction(d.stop) && (n._queueHooks(j.elem, j.opts.queue).stop = n.proxy(d.stop, d)), d;
        return n.map(k, nb, j), n.isFunction(j.opts.start) && j.opts.start.call(a, j), n.fx.timer(n.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }
    n.Animation = n.extend(qb, {
        tweeners: {
            "*": [function(a, b) {
                var c = this.createTween(a, b);
                return X(c.elem, a, U.exec(b), c), c
            }]
        },
        tweener: function(a, b) {
            n.isFunction(a) ? (b = a, a = ["*"]) : a = a.match(G);
            for (var c, d = 0, e = a.length; e > d; d++) c = a[d], qb.tweeners[c] = qb.tweeners[c] || [], qb.tweeners[c].unshift(b)
        },
        prefilters: [ob],
        prefilter: function(a, b) {
            b ? qb.prefilters.unshift(a) : qb.prefilters.push(a)
        }
    }), n.speed = function(a, b, c) {
        var d = a && "object" == typeof a ? n.extend({}, a) : {
            complete: c || !c && b || n.isFunction(a) && a,
            duration: a,
            easing: c && b || b && !n.isFunction(b) && b
        };
        return d.duration = n.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in n.fx.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function() {
            n.isFunction(d.old) && d.old.call(this), d.queue && n.dequeue(this, d.queue)
        }, d
    }, n.fn.extend({
        fadeTo: function(a, b, c, d) {
            return this.filter(W).css("opacity", 0).show().end().animate({
                opacity: b
            }, a, c, d)
        },
        animate: function(a, b, c, d) {
            var e = n.isEmptyObject(a),
                f = n.speed(b, c, d),
                g = function() {
                    var b = qb(this, n.extend({}, a), f);
                    (e || n._data(this, "finish")) && b.stop(!0)
                };
            return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
        },
        stop: function(a, b, c) {
            var d = function(a) {
                var b = a.stop;
                delete a.stop, b(c)
            };
            return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function() {
                var b = !0,
                    e = null != a && a + "queueHooks",
                    f = n.timers,
                    g = n._data(this);
                if (e) g[e] && g[e].stop && d(g[e]);
                else
                    for (e in g) g[e] && g[e].stop && kb.test(e) && d(g[e]);
                for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
                (b || !c) && n.dequeue(this, a)
            })
        },
        finish: function(a) {
            return a !== !1 && (a = a || "fx"), this.each(function() {
                var b, c = n._data(this),
                    d = c[a + "queue"],
                    e = c[a + "queueHooks"],
                    f = n.timers,
                    g = d ? d.length : 0;
                for (c.finish = !0, n.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
                delete c.finish
            })
        }
    }), n.each(["toggle", "show", "hide"], function(a, b) {
        var c = n.fn[b];
        n.fn[b] = function(a, d, e) {
            return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(mb(b, !0), a, d, e)
        }
    }), n.each({
        slideDown: mb("show"),
        slideUp: mb("hide"),
        slideToggle: mb("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(a, b) {
        n.fn[a] = function(a, c, d) {
            return this.animate(b, a, c, d)
        }
    }), n.timers = [], n.fx.tick = function() {
        var a, b = n.timers,
            c = 0;
        for (hb = n.now(); c < b.length; c++) a = b[c], a() || b[c] !== a || b.splice(c--, 1);
        b.length || n.fx.stop(), hb = void 0
    }, n.fx.timer = function(a) {
        n.timers.push(a), a() ? n.fx.start() : n.timers.pop()
    }, n.fx.interval = 13, n.fx.start = function() {
        ib || (ib = a.setInterval(n.fx.tick, n.fx.interval))
    }, n.fx.stop = function() {
        a.clearInterval(ib), ib = null
    }, n.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, n.fn.delay = function(b, c) {
        return b = n.fx ? n.fx.speeds[b] || b : b, c = c || "fx", this.queue(c, function(c, d) {
            var e = a.setTimeout(c, b);
            d.stop = function() {
                a.clearTimeout(e)
            }
        })
    },
        function() {
            var a, b = d.createElement("input"),
                c = d.createElement("div"),
                e = d.createElement("select"),
                f = e.appendChild(d.createElement("option"));
            c = d.createElement("div"), c.setAttribute("className", "t"), c.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", a = c.getElementsByTagName("a")[0], b.setAttribute("type", "checkbox"), c.appendChild(b), a = c.getElementsByTagName("a")[0], a.style.cssText = "top:1px", l.getSetAttribute = "t" !== c.className, l.style = /top/.test(a.getAttribute("style")), l.hrefNormalized = "/a" === a.getAttribute("href"), l.checkOn = !!b.value, l.optSelected = f.selected, l.enctype = !!d.createElement("form").enctype, e.disabled = !0, l.optDisabled = !f.disabled, b = d.createElement("input"), b.setAttribute("value", ""), l.input = "" === b.getAttribute("value"), b.value = "t", b.setAttribute("type", "radio"), l.radioValue = "t" === b.value
        }();
    var rb = /\r/g;
    n.fn.extend({
        val: function(a) {
            var b, c, d, e = this[0]; {
                if (arguments.length) return d = n.isFunction(a), this.each(function(c) {
                    var e;
                    1 === this.nodeType && (e = d ? a.call(this, c, n(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : n.isArray(e) && (e = n.map(e, function(a) {
                        return null == a ? "" : a + ""
                    })), b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                });
                if (e) return b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(rb, "") : null == c ? "" : c)
            }
        }
    }), n.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = n.find.attr(a, "value");
                    return null != b ? b : n.trim(n.text(a))
                }
            },
            select: {
                get: function(a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
                        if (c = d[i], (c.selected || i === e) && (l.optDisabled ? !c.disabled : null === c.getAttribute("disabled")) && (!c.parentNode.disabled || !n.nodeName(c.parentNode, "optgroup"))) {
                            if (b = n(c).val(), f) return b;
                            g.push(b)
                        }
                    return g
                },
                set: function(a, b) {
                    var c, d, e = a.options,
                        f = n.makeArray(b),
                        g = e.length;
                    while (g--)
                        if (d = e[g], n.inArray(n.valHooks.option.get(d), f) >= 0) try {
                            d.selected = c = !0
                        } catch (h) {
                            d.scrollHeight
                        } else d.selected = !1;
                    return c || (a.selectedIndex = -1), e
                }
            }
        }
    }), n.each(["radio", "checkbox"], function() {
        n.valHooks[this] = {
            set: function(a, b) {
                return n.isArray(b) ? a.checked = n.inArray(n(a).val(), b) > -1 : void 0
            }
        }, l.checkOn || (n.valHooks[this].get = function(a) {
            return null === a.getAttribute("value") ? "on" : a.value
        })
    });
    var sb, tb, ub = n.expr.attrHandle,
        vb = /^(?:checked|selected)$/i,
        wb = l.getSetAttribute,
        xb = l.input;
    n.fn.extend({
        attr: function(a, b) {
            return Y(this, n.attr, a, b, arguments.length > 1)
        },
        removeAttr: function(a) {
            return this.each(function() {
                n.removeAttr(this, a)
            })
        }
    }), n.extend({
        attr: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (3 !== f && 8 !== f && 2 !== f) return "undefined" == typeof a.getAttribute ? n.prop(a, b, c) : (1 === f && n.isXMLDoc(a) || (b = b.toLowerCase(), e = n.attrHooks[b] || (n.expr.match.bool.test(b) ? tb : sb)), void 0 !== c ? null === c ? void n.removeAttr(a, b) : e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""), c) : e && "get" in e && null !== (d = e.get(a, b)) ? d : (d = n.find.attr(a, b), null == d ? void 0 : d))
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (!l.radioValue && "radio" === b && n.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b
                    }
                }
            }
        },
        removeAttr: function(a, b) {
            var c, d, e = 0,
                f = b && b.match(G);
            if (f && 1 === a.nodeType)
                while (c = f[e++]) d = n.propFix[c] || c, n.expr.match.bool.test(c) ? xb && wb || !vb.test(c) ? a[d] = !1 : a[n.camelCase("default-" + c)] = a[d] = !1 : n.attr(a, c, ""), a.removeAttribute(wb ? c : d)
        }
    }), tb = {
        set: function(a, b, c) {
            return b === !1 ? n.removeAttr(a, c) : xb && wb || !vb.test(c) ? a.setAttribute(!wb && n.propFix[c] || c, c) : a[n.camelCase("default-" + c)] = a[c] = !0, c
        }
    }, n.each(n.expr.match.bool.source.match(/\w+/g), function(a, b) {
        var c = ub[b] || n.find.attr;
        xb && wb || !vb.test(b) ? ub[b] = function(a, b, d) {
            var e, f;
            return d || (f = ub[b], ub[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, ub[b] = f), e
        } : ub[b] = function(a, b, c) {
            return c ? void 0 : a[n.camelCase("default-" + b)] ? b.toLowerCase() : null
        }
    }), xb && wb || (n.attrHooks.value = {
        set: function(a, b, c) {
            return n.nodeName(a, "input") ? void(a.defaultValue = b) : sb && sb.set(a, b, c)
        }
    }), wb || (sb = {
        set: function(a, b, c) {
            var d = a.getAttributeNode(c);
            return d || a.setAttributeNode(d = a.ownerDocument.createAttribute(c)), d.value = b += "", "value" === c || b === a.getAttribute(c) ? b : void 0
        }
    }, ub.id = ub.name = ub.coords = function(a, b, c) {
        var d;
        return c ? void 0 : (d = a.getAttributeNode(b)) && "" !== d.value ? d.value : null
    }, n.valHooks.button = {
        get: function(a, b) {
            var c = a.getAttributeNode(b);
            return c && c.specified ? c.value : void 0
        },
        set: sb.set
    }, n.attrHooks.contenteditable = {
        set: function(a, b, c) {
            sb.set(a, "" === b ? !1 : b, c)
        }
    }, n.each(["width", "height"], function(a, b) {
        n.attrHooks[b] = {
            set: function(a, c) {
                return "" === c ? (a.setAttribute(b, "auto"), c) : void 0
            }
        }
    })), l.style || (n.attrHooks.style = {
        get: function(a) {
            return a.style.cssText || void 0
        },
        set: function(a, b) {
            return a.style.cssText = b + ""
        }
    });
    var yb = /^(?:input|select|textarea|button|object)$/i,
        zb = /^(?:a|area)$/i;
    n.fn.extend({
        prop: function(a, b) {
            return Y(this, n.prop, a, b, arguments.length > 1)
        },
        removeProp: function(a) {
            return a = n.propFix[a] || a, this.each(function() {
                try {
                    this[a] = void 0, delete this[a]
                } catch (b) {}
            })
        }
    }), n.extend({
        prop: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (3 !== f && 8 !== f && 2 !== f) return 1 === f && n.isXMLDoc(a) || (b = n.propFix[b] || b, e = n.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    var b = n.find.attr(a, "tabindex");
                    return b ? parseInt(b, 10) : yb.test(a.nodeName) || zb.test(a.nodeName) && a.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }), l.hrefNormalized || n.each(["href", "src"], function(a, b) {
        n.propHooks[b] = {
            get: function(a) {
                return a.getAttribute(b, 4)
            }
        }
    }), l.optSelected || (n.propHooks.selected = {
        get: function(a) {
            var b = a.parentNode;
            return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null
        }
    }), n.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        n.propFix[this.toLowerCase()] = this
    }), l.enctype || (n.propFix.enctype = "encoding");
    var Ab = /[\t\r\n\f]/g;

    function Bb(a) {
        return n.attr(a, "class") || ""
    }
    n.fn.extend({
        addClass: function(a) {
            var b, c, d, e, f, g, h, i = 0;
            if (n.isFunction(a)) return this.each(function(b) {
                n(this).addClass(a.call(this, b, Bb(this)))
            });
            if ("string" == typeof a && a) {
                b = a.match(G) || [];
                while (c = this[i++])
                    if (e = Bb(c), d = 1 === c.nodeType && (" " + e + " ").replace(Ab, " ")) {
                        g = 0;
                        while (f = b[g++]) d.indexOf(" " + f + " ") < 0 && (d += f + " ");
                        h = n.trim(d), e !== h && n.attr(c, "class", h)
                    }
            }
            return this
        },
        removeClass: function(a) {
            var b, c, d, e, f, g, h, i = 0;
            if (n.isFunction(a)) return this.each(function(b) {
                n(this).removeClass(a.call(this, b, Bb(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof a && a) {
                b = a.match(G) || [];
                while (c = this[i++])
                    if (e = Bb(c), d = 1 === c.nodeType && (" " + e + " ").replace(Ab, " ")) {
                        g = 0;
                        while (f = b[g++])
                            while (d.indexOf(" " + f + " ") > -1) d = d.replace(" " + f + " ", " ");
                        h = n.trim(d), e !== h && n.attr(c, "class", h)
                    }
            }
            return this
        },
        toggleClass: function(a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : n.isFunction(a) ? this.each(function(c) {
                n(this).toggleClass(a.call(this, c, Bb(this), b), b)
            }) : this.each(function() {
                var b, d, e, f;
                if ("string" === c) {
                    d = 0, e = n(this), f = a.match(G) || [];
                    while (b = f[d++]) e.hasClass(b) ? e.removeClass(b) : e.addClass(b)
                } else(void 0 === a || "boolean" === c) && (b = Bb(this), b && n._data(this, "__className__", b), n.attr(this, "class", b || a === !1 ? "" : n._data(this, "__className__") || ""))
            })
        },
        hasClass: function(a) {
            var b, c, d = 0;
            b = " " + a + " ";
            while (c = this[d++])
                if (1 === c.nodeType && (" " + Bb(c) + " ").replace(Ab, " ").indexOf(b) > -1) return !0;
            return !1
        }
    }), n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
        n.fn[b] = function(a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
    }), n.fn.extend({
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        }
    });
    var Cb = a.location,
        Db = n.now(),
        Eb = /\?/,
        Fb = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    n.parseJSON = function(b) {
        if (a.JSON && a.JSON.parse) return a.JSON.parse(b + "");
        var c, d = null,
            e = n.trim(b + "");
        return e && !n.trim(e.replace(Fb, function(a, b, e, f) {
            return c && b && (d = 0), 0 === d ? a : (c = e || b, d += !f - !e, "")
        })) ? Function("return " + e)() : n.error("Invalid JSON: " + b)
    }, n.parseXML = function(b) {
        var c, d;
        if (!b || "string" != typeof b) return null;
        try {
            a.DOMParser ? (d = new a.DOMParser, c = d.parseFromString(b, "text/xml")) : (c = new a.ActiveXObject("Microsoft.XMLDOM"), c.async = "false", c.loadXML(b))
        } catch (e) {
            c = void 0
        }
        return c && c.documentElement && !c.getElementsByTagName("parsererror").length || n.error("Invalid XML: " + b), c
    };
    var Gb = /#.*$/,
        Hb = /([?&])_=[^&]*/,
        Ib = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Jb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Kb = /^(?:GET|HEAD)$/,
        Lb = /^\/\//,
        Mb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        Nb = {},
        Ob = {},
        Pb = "*/".concat("*"),
        Qb = Cb.href,
        Rb = Mb.exec(Qb.toLowerCase()) || [];

    function Sb(a) {
        return function(b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0,
                f = b.toLowerCase().match(G) || [];
            if (n.isFunction(c))
                while (d = f[e++]) "+" === d.charAt(0) ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }

    function Tb(a, b, c, d) {
        var e = {},
            f = a === Ob;

        function g(h) {
            var i;
            return e[h] = !0, n.each(a[h] || [], function(a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1)
            }), i
        }
        return g(b.dataTypes[0]) || !e["*"] && g("*")
    }

    function Ub(a, b) {
        var c, d, e = n.ajaxSettings.flatOptions || {};
        for (d in b) void 0 !== b[d] && ((e[d] ? a : c || (c = {}))[d] = b[d]);
        return c && n.extend(!0, a, c), a
    }

    function Vb(a, b, c) {
        var d, e, f, g, h = a.contents,
            i = a.dataTypes;
        while ("*" === i[0]) i.shift(), void 0 === e && (e = a.mimeType || b.getResponseHeader("Content-Type"));
        if (e)
            for (g in h)
                if (h[g] && h[g].test(e)) {
                    i.unshift(g);
                    break
                }
        if (i[0] in c) f = i[0];
        else {
            for (g in c) {
                if (!i[0] || a.converters[g + " " + i[0]]) {
                    f = g;
                    break
                }
                d || (d = g)
            }
            f = f || d
        }
        return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
    }

    function Wb(a, b, c, d) {
        var e, f, g, h, i, j = {},
            k = a.dataTypes.slice();
        if (k[1])
            for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
        f = k.shift();
        while (f)
            if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
                if ("*" === f) f = i;
                else if ("*" !== i && i !== f) {
                    if (g = j[i + " " + f] || j["* " + f], !g)
                        for (e in j)
                            if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                                g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                                break
                            }
                    if (g !== !0)
                        if (g && a["throws"]) b = g(b);
                        else try {
                            b = g(b)
                        } catch (l) {
                            return {
                                state: "parsererror",
                                error: g ? l : "No conversion from " + i + " to " + f
                            }
                        }
                }
        return {
            state: "success",
            data: b
        }
    }
    n.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Qb,
            type: "GET",
            isLocal: Jb.test(Rb[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Pb,
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
                "text json": n.parseJSON,
                "text xml": n.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(a, b) {
            return b ? Ub(Ub(a, n.ajaxSettings), b) : Ub(n.ajaxSettings, a)
        },
        ajaxPrefilter: Sb(Nb),
        ajaxTransport: Sb(Ob),
        ajax: function(b, c) {
            "object" == typeof b && (c = b, b = void 0), c = c || {};
            var d, e, f, g, h, i, j, k, l = n.ajaxSetup({}, c),
                m = l.context || l,
                o = l.context && (m.nodeType || m.jquery) ? n(m) : n.event,
                p = n.Deferred(),
                q = n.Callbacks("once memory"),
                r = l.statusCode || {},
                s = {},
                t = {},
                u = 0,
                v = "canceled",
                w = {
                    readyState: 0,
                    getResponseHeader: function(a) {
                        var b;
                        if (2 === u) {
                            if (!k) {
                                k = {};
                                while (b = Ib.exec(g)) k[b[1].toLowerCase()] = b[2]
                            }
                            b = k[a.toLowerCase()]
                        }
                        return null == b ? null : b
                    },
                    getAllResponseHeaders: function() {
                        return 2 === u ? g : null
                    },
                    setRequestHeader: function(a, b) {
                        var c = a.toLowerCase();
                        return u || (a = t[c] = t[c] || a, s[a] = b), this
                    },
                    overrideMimeType: function(a) {
                        return u || (l.mimeType = a), this
                    },
                    statusCode: function(a) {
                        var b;
                        if (a)
                            if (2 > u)
                                for (b in a) r[b] = [r[b], a[b]];
                            else w.always(a[w.status]);
                        return this
                    },
                    abort: function(a) {
                        var b = a || v;
                        return j && j.abort(b), y(0, b), this
                    }
                };
            if (p.promise(w).complete = q.add, w.success = w.done, w.error = w.fail, l.url = ((b || l.url || Qb) + "").replace(Gb, "").replace(Lb, Rb[1] + "//"), l.type = c.method || c.type || l.method || l.type, l.dataTypes = n.trim(l.dataType || "*").toLowerCase().match(G) || [""], null == l.crossDomain && (d = Mb.exec(l.url.toLowerCase()), l.crossDomain = !(!d || d[1] === Rb[1] && d[2] === Rb[2] && (d[3] || ("http:" === d[1] ? "80" : "443")) === (Rb[3] || ("http:" === Rb[1] ? "80" : "443")))), l.data && l.processData && "string" != typeof l.data && (l.data = n.param(l.data, l.traditional)), Tb(Nb, l, c, w), 2 === u) return w;
            i = n.event && l.global, i && 0 === n.active++ && n.event.trigger("ajaxStart"), l.type = l.type.toUpperCase(), l.hasContent = !Kb.test(l.type), f = l.url, l.hasContent || (l.data && (f = l.url += (Eb.test(f) ? "&" : "?") + l.data, delete l.data), l.cache === !1 && (l.url = Hb.test(f) ? f.replace(Hb, "$1_=" + Db++) : f + (Eb.test(f) ? "&" : "?") + "_=" + Db++)), l.ifModified && (n.lastModified[f] && w.setRequestHeader("If-Modified-Since", n.lastModified[f]), n.etag[f] && w.setRequestHeader("If-None-Match", n.etag[f])), (l.data && l.hasContent && l.contentType !== !1 || c.contentType) && w.setRequestHeader("Content-Type", l.contentType), w.setRequestHeader("Accept", l.dataTypes[0] && l.accepts[l.dataTypes[0]] ? l.accepts[l.dataTypes[0]] + ("*" !== l.dataTypes[0] ? ", " + Pb + "; q=0.01" : "") : l.accepts["*"]);
            for (e in l.headers) w.setRequestHeader(e, l.headers[e]);
            if (l.beforeSend && (l.beforeSend.call(m, w, l) === !1 || 2 === u)) return w.abort();
            v = "abort";
            for (e in {
                success: 1,
                error: 1,
                complete: 1
            }) w[e](l[e]);
            if (j = Tb(Ob, l, c, w)) {
                if (w.readyState = 1, i && o.trigger("ajaxSend", [w, l]), 2 === u) return w;
                l.async && l.timeout > 0 && (h = a.setTimeout(function() {
                    w.abort("timeout")
                }, l.timeout));
                try {
                    u = 1, j.send(s, y)
                } catch (x) {
                    if (!(2 > u)) throw x;
                    y(-1, x)
                }
            } else y(-1, "No Transport");

            function y(b, c, d, e) {
                var k, s, t, v, x, y = c;
                2 !== u && (u = 2, h && a.clearTimeout(h), j = void 0, g = e || "", w.readyState = b > 0 ? 4 : 0, k = b >= 200 && 300 > b || 304 === b, d && (v = Vb(l, w, d)), v = Wb(l, v, w, k), k ? (l.ifModified && (x = w.getResponseHeader("Last-Modified"), x && (n.lastModified[f] = x), x = w.getResponseHeader("etag"), x && (n.etag[f] = x)), 204 === b || "HEAD" === l.type ? y = "nocontent" : 304 === b ? y = "notmodified" : (y = v.state, s = v.data, t = v.error, k = !t)) : (t = y, (b || !y) && (y = "error", 0 > b && (b = 0))), w.status = b, w.statusText = (c || y) + "", k ? p.resolveWith(m, [s, y, w]) : p.rejectWith(m, [w, y, t]), w.statusCode(r), r = void 0, i && o.trigger(k ? "ajaxSuccess" : "ajaxError", [w, l, k ? s : t]), q.fireWith(m, [w, y]), i && (o.trigger("ajaxComplete", [w, l]), --n.active || n.event.trigger("ajaxStop")))
            }
            return w
        },
        getJSON: function(a, b, c) {
            return n.get(a, b, c, "json")
        },
        getScript: function(a, b) {
            return n.get(a, void 0, b, "script")
        }
    }), n.each(["get", "post"], function(a, b) {
        n[b] = function(a, c, d, e) {
            return n.isFunction(c) && (e = e || d, d = c, c = void 0), n.ajax(n.extend({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            }, n.isPlainObject(a) && a))
        }
    }), n._evalUrl = function(a) {
        return n.ajax({
            url: a,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            "throws": !0
        })
    }, n.fn.extend({
        wrapAll: function(a) {
            if (n.isFunction(a)) return this.each(function(b) {
                n(this).wrapAll(a.call(this, b))
            });
            if (this[0]) {
                var b = n(a, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
                    var a = this;
                    while (a.firstChild && 1 === a.firstChild.nodeType) a = a.firstChild;
                    return a
                }).append(this)
            }
            return this
        },
        wrapInner: function(a) {
            return n.isFunction(a) ? this.each(function(b) {
                n(this).wrapInner(a.call(this, b))
            }) : this.each(function() {
                var b = n(this),
                    c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function(a) {
            var b = n.isFunction(a);
            return this.each(function(c) {
                n(this).wrapAll(b ? a.call(this, c) : a)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                n.nodeName(this, "body") || n(this).replaceWith(this.childNodes)
            }).end()
        }
    });

    function Xb(a) {
        return a.style && a.style.display || n.css(a, "display")
    }

    function Yb(a) {
        while (a && 1 === a.nodeType) {
            if ("none" === Xb(a) || "hidden" === a.type) return !0;
            a = a.parentNode
        }
        return !1
    }
    n.expr.filters.hidden = function(a) {
        return l.reliableHiddenOffsets() ? a.offsetWidth <= 0 && a.offsetHeight <= 0 && !a.getClientRects().length : Yb(a)
    }, n.expr.filters.visible = function(a) {
        return !n.expr.filters.hidden(a)
    };
    var Zb = /%20/g,
        $b = /\[\]$/,
        _b = /\r?\n/g,
        ac = /^(?:submit|button|image|reset|file)$/i,
        bc = /^(?:input|select|textarea|keygen)/i;

    function cc(a, b, c, d) {
        var e;
        if (n.isArray(b)) n.each(b, function(b, e) {
            c || $b.test(a) ? d(a, e) : cc(a + "[" + ("object" == typeof e && null != e ? b : "") + "]", e, c, d)
        });
        else if (c || "object" !== n.type(b)) d(a, b);
        else
            for (e in b) cc(a + "[" + e + "]", b[e], c, d)
    }
    n.param = function(a, b) {
        var c, d = [],
            e = function(a, b) {
                b = n.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
            };
        if (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional), n.isArray(a) || a.jquery && !n.isPlainObject(a)) n.each(a, function() {
            e(this.name, this.value)
        });
        else
            for (c in a) cc(c, a[c], b, e);
        return d.join("&").replace(Zb, "+")
    }, n.fn.extend({
        serialize: function() {
            return n.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var a = n.prop(this, "elements");
                return a ? n.makeArray(a) : this
            }).filter(function() {
                var a = this.type;
                return this.name && !n(this).is(":disabled") && bc.test(this.nodeName) && !ac.test(a) && (this.checked || !Z.test(a))
            }).map(function(a, b) {
                var c = n(this).val();
                return null == c ? null : n.isArray(c) ? n.map(c, function(a) {
                    return {
                        name: b.name,
                        value: a.replace(_b, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(_b, "\r\n")
                }
            }).get()
        }
    }), n.ajaxSettings.xhr = void 0 !== a.ActiveXObject ? function() {
        return this.isLocal ? hc() : d.documentMode > 8 ? gc() : /^(get|post|head|put|delete|options)$/i.test(this.type) && gc() || hc()
    } : gc;
    var dc = 0,
        ec = {},
        fc = n.ajaxSettings.xhr();
    a.attachEvent && a.attachEvent("onunload", function() {
        for (var a in ec) ec[a](void 0, !0)
    }), l.cors = !!fc && "withCredentials" in fc, fc = l.ajax = !!fc, fc && n.ajaxTransport(function(b) {
        if (!b.crossDomain || l.cors) {
            var c;
            return {
                send: function(d, e) {
                    var f, g = b.xhr(),
                        h = ++dc;
                    if (g.open(b.type, b.url, b.async, b.username, b.password), b.xhrFields)
                        for (f in b.xhrFields) g[f] = b.xhrFields[f];
                    b.mimeType && g.overrideMimeType && g.overrideMimeType(b.mimeType), b.crossDomain || d["X-Requested-With"] || (d["X-Requested-With"] = "XMLHttpRequest");
                    for (f in d) void 0 !== d[f] && g.setRequestHeader(f, d[f] + "");
                    g.send(b.hasContent && b.data || null), c = function(a, d) {
                        var f, i, j;
                        if (c && (d || 4 === g.readyState))
                            if (delete ec[h], c = void 0, g.onreadystatechange = n.noop, d) 4 !== g.readyState && g.abort();
                            else {
                                j = {}, f = g.status, "string" == typeof g.responseText && (j.text = g.responseText);
                                try {
                                    i = g.statusText
                                } catch (k) {
                                    i = ""
                                }
                                f || !b.isLocal || b.crossDomain ? 1223 === f && (f = 204) : f = j.text ? 200 : 404
                            }
                        j && e(f, i, j, g.getAllResponseHeaders())
                    }, b.async ? 4 === g.readyState ? a.setTimeout(c) : g.onreadystatechange = ec[h] = c : c()
                },
                abort: function() {
                    c && c(void 0, !0)
                }
            }
        }
    });

    function gc() {
        try {
            return new a.XMLHttpRequest
        } catch (b) {}
    }

    function hc() {
        try {
            return new a.ActiveXObject("Microsoft.XMLHTTP")
        } catch (b) {}
    }
    n.ajaxPrefilter(function(a) {
        a.crossDomain && (a.contents.script = !1)
    }), n.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(a) {
                return n.globalEval(a), a
            }
        }
    }), n.ajaxPrefilter("script", function(a) {
        void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1)
    }), n.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var b, c = d.head || n("head")[0] || d.documentElement;
            return {
                send: function(e, f) {
                    b = d.createElement("script"), b.async = !0, a.scriptCharset && (b.charset = a.scriptCharset), b.src = a.url, b.onload = b.onreadystatechange = function(a, c) {
                        (c || !b.readyState || /loaded|complete/.test(b.readyState)) && (b.onload = b.onreadystatechange = null, b.parentNode && b.parentNode.removeChild(b), b = null, c || f(200, "success"))
                    }, c.insertBefore(b, c.firstChild)
                },
                abort: function() {
                    b && b.onload(void 0, !0)
                }
            }
        }
    });
    var ic = [],
        jc = /(=)\?(?=&|$)|\?\?/;
    n.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = ic.pop() || n.expando + "_" + Db++;
            return this[a] = !0, a
        }
    }), n.ajaxPrefilter("json jsonp", function(b, c, d) {
        var e, f, g, h = b.jsonp !== !1 && (jc.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && jc.test(b.data) && "data");
        return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(jc, "$1" + e) : b.jsonp !== !1 && (b.url += (Eb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function() {
            return g || n.error(e + " was not called"), g[0]
        }, b.dataTypes[0] = "json", f = a[e], a[e] = function() {
            g = arguments
        }, d.always(function() {
            void 0 === f ? n(a).removeProp(e) : a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, ic.push(e)), g && n.isFunction(f) && f(g[0]), g = f = void 0
        }), "script") : void 0
    }), l.createHTMLDocument = function() {
        if (!d.implementation.createHTMLDocument) return !1;
        var a = d.implementation.createHTMLDocument("");
        return a.body.innerHTML = "<form></form><form></form>", 2 === a.body.childNodes.length
    }(), n.parseHTML = function(a, b, c) {
        if (!a || "string" != typeof a) return null;
        "boolean" == typeof b && (c = b, b = !1), b = b || (l.createHTMLDocument ? d.implementation.createHTMLDocument("") : d);
        var e = x.exec(a),
            f = !c && [];
        return e ? [b.createElement(e[1])] : (e = ja([a], b, f), f && f.length && n(f).remove(), n.merge([], e.childNodes))
    };
    var kc = n.fn.load;
    n.fn.load = function(a, b, c) {
        if ("string" != typeof a && kc) return kc.apply(this, arguments);
        var d, e, f, g = this,
            h = a.indexOf(" ");
        return h > -1 && (d = n.trim(a.slice(h, a.length)), a = a.slice(0, h)), n.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && n.ajax({
            url: a,
            type: e || "GET",
            dataType: "html",
            data: b
        }).done(function(a) {
            f = arguments, g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a)
        }).always(c && function(a, b) {
            g.each(function() {
                c.apply(g, f || [a.responseText, b, a])
            })
        }), this
    }, n.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
        n.fn[b] = function(a) {
            return this.on(b, a)
        }
    }), n.expr.filters.animated = function(a) {
        return n.grep(n.timers, function(b) {
            return a === b.elem
        }).length
    };

    function lc(a) {
        return n.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1
    }
    n.offset = {
        setOffset: function(a, b, c) {
            var d, e, f, g, h, i, j, k = n.css(a, "position"),
                l = n(a),
                m = {};
            "static" === k && (a.style.position = "relative"), h = l.offset(), f = n.css(a, "top"), i = n.css(a, "left"), j = ("absolute" === k || "fixed" === k) && n.inArray("auto", [f, i]) > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), n.isFunction(b) && (b = b.call(a, c, n.extend({}, h))), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m)
        }
    }, n.fn.extend({
        offset: function(a) {
            if (arguments.length) return void 0 === a ? this : this.each(function(b) {
                n.offset.setOffset(this, a, b)
            });
            var b, c, d = {
                    top: 0,
                    left: 0
                },
                e = this[0],
                f = e && e.ownerDocument;
            if (f) return b = f.documentElement, n.contains(b, e) ? ("undefined" != typeof e.getBoundingClientRect && (d = e.getBoundingClientRect()), c = lc(f), {
                top: d.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0),
                left: d.left + (c.pageXOffset || b.scrollLeft) - (b.clientLeft || 0)
            }) : d
        },
        position: function() {
            if (this[0]) {
                var a, b, c = {
                        top: 0,
                        left: 0
                    },
                    d = this[0];
                return "fixed" === n.css(d, "position") ? b = d.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), n.nodeName(a[0], "html") || (c = a.offset()), c.top += n.css(a[0], "borderTopWidth", !0) - a.scrollTop(), c.left += n.css(a[0], "borderLeftWidth", !0) - a.scrollLeft()), {
                    top: b.top - c.top - n.css(d, "marginTop", !0),
                    left: b.left - c.left - n.css(d, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var a = this.offsetParent;
                while (a && !n.nodeName(a, "html") && "static" === n.css(a, "position")) a = a.offsetParent;
                return a || Qa
            })
        }
    }), n.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(a, b) {
        var c = /Y/.test(b);
        n.fn[a] = function(d) {
            return Y(this, function(a, d, e) {
                var f = lc(a);
                return void 0 === e ? f ? b in f ? f[b] : f.document.documentElement[d] : a[d] : void(f ? f.scrollTo(c ? n(f).scrollLeft() : e, c ? e : n(f).scrollTop()) : a[d] = e)
            }, a, d, arguments.length, null)
        }
    }), n.each(["top", "left"], function(a, b) {
        n.cssHooks[b] = Ua(l.pixelPosition, function(a, c) {
            return c ? (c = Sa(a, b), Oa.test(c) ? n(a).position()[b] + "px" : c) : void 0
        })
    }), n.each({
        Height: "height",
        Width: "width"
    }, function(a, b) {
        n.each({
            padding: "inner" + a,
            content: b,
            "": "outer" + a
        }, function(c, d) {
            n.fn[d] = function(d, e) {
                var f = arguments.length && (c || "boolean" != typeof d),
                    g = c || (d === !0 || e === !0 ? "margin" : "border");
                return Y(this, function(b, c, d) {
                    var e;
                    return n.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? n.css(b, c, g) : n.style(b, c, d, g)
                }, b, f ? d : void 0, f, null)
            }
        })
    }), n.fn.extend({
        bind: function(a, b, c) {
            return this.on(a, null, b, c)
        },
        unbind: function(a, b) {
            return this.off(a, null, b)
        },
        delegate: function(a, b, c, d) {
            return this.on(b, a, c, d)
        },
        undelegate: function(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        }
    }), n.fn.size = function() {
        return this.length
    }, n.fn.andSelf = n.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return n
    });
    var mc = a.jQuery,
        nc = a.$;
    return n.noConflict = function(b) {
        return a.$ === n && (a.$ = nc), b && a.jQuery === n && (a.jQuery = mc), n
    }, b || (a.jQuery = a.$ = n), n
});
/*! jQuery Migrate v1.4.1 | (c) jQuery Foundation and other contributors | jquery.org/license */
"undefined" == typeof jQuery.migrateMute && (jQuery.migrateMute = !0),
    function(a, b, c) {
        function d(c) {
            var d = b.console;
            f[c] || (f[c] = !0, a.migrateWarnings.push(c), d && d.warn && !a.migrateMute && (d.warn("JQMIGRATE: " + c), a.migrateTrace && d.trace && d.trace()))
        }

        function e(b, c, e, f) {
            if (Object.defineProperty) try {
                return void Object.defineProperty(b, c, {
                    configurable: !0,
                    enumerable: !0,
                    get: function() {
                        return d(f), e
                    },
                    set: function(a) {
                        d(f), e = a
                    }
                })
            } catch (g) {}
            a._definePropertyBroken = !0, b[c] = e
        }
        a.migrateVersion = "1.4.1";
        var f = {};
        a.migrateWarnings = [], b.console && b.console.log && b.console.log("JQMIGRATE: Migrate is installed" + (a.migrateMute ? "" : " with logging active") + ", version " + a.migrateVersion), a.migrateTrace === c && (a.migrateTrace = !0), a.migrateReset = function() {
            f = {}, a.migrateWarnings.length = 0
        }, "BackCompat" === document.compatMode && d("jQuery is not compatible with Quirks Mode");
        var g = a("<input/>", {
                size: 1
            }).attr("size") && a.attrFn,
            h = a.attr,
            i = a.attrHooks.value && a.attrHooks.value.get || function() {
                return null
            },
            j = a.attrHooks.value && a.attrHooks.value.set || function() {
                return c
            },
            k = /^(?:input|button)$/i,
            l = /^[238]$/,
            m = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
            n = /^(?:checked|selected)$/i;
        e(a, "attrFn", g || {}, "jQuery.attrFn is deprecated"), a.attr = function(b, e, f, i) {
            var j = e.toLowerCase(),
                o = b && b.nodeType;
            return i && (h.length < 4 && d("jQuery.fn.attr( props, pass ) is deprecated"), b && !l.test(o) && (g ? e in g : a.isFunction(a.fn[e]))) ? a(b)[e](f) : ("type" === e && f !== c && k.test(b.nodeName) && b.parentNode && d("Can't change the 'type' of an input or button in IE 6/7/8"), !a.attrHooks[j] && m.test(j) && (a.attrHooks[j] = {
                get: function(b, d) {
                    var e, f = a.prop(b, d);
                    return f === !0 || "boolean" != typeof f && (e = b.getAttributeNode(d)) && e.nodeValue !== !1 ? d.toLowerCase() : c
                },
                set: function(b, c, d) {
                    var e;
                    return c === !1 ? a.removeAttr(b, d) : (e = a.propFix[d] || d, e in b && (b[e] = !0), b.setAttribute(d, d.toLowerCase())), d
                }
            }, n.test(j) && d("jQuery.fn.attr('" + j + "') might use property instead of attribute")), h.call(a, b, e, f))
        }, a.attrHooks.value = {
            get: function(a, b) {
                var c = (a.nodeName || "").toLowerCase();
                return "button" === c ? i.apply(this, arguments) : ("input" !== c && "option" !== c && d("jQuery.fn.attr('value') no longer gets properties"), b in a ? a.value : null)
            },
            set: function(a, b) {
                var c = (a.nodeName || "").toLowerCase();
                return "button" === c ? j.apply(this, arguments) : ("input" !== c && "option" !== c && d("jQuery.fn.attr('value', val) no longer sets properties"), void(a.value = b))
            }
        };
        var o, p, q = a.fn.init,
            r = a.find,
            s = a.parseJSON,
            t = /^\s*</,
            u = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,
            v = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g,
            w = /^([^<]*)(<[\w\W]+>)([^>]*)$/;
        a.fn.init = function(b, e, f) {
            var g, h;
            return b && "string" == typeof b && !a.isPlainObject(e) && (g = w.exec(a.trim(b))) && g[0] && (t.test(b) || d("$(html) HTML strings must start with '<' character"), g[3] && d("$(html) HTML text after last tag is ignored"), "#" === g[0].charAt(0) && (d("HTML string cannot start with a '#' character"), a.error("JQMIGRATE: Invalid selector string (XSS)")), e && e.context && e.context.nodeType && (e = e.context), a.parseHTML) ? q.call(this, a.parseHTML(g[2], e && e.ownerDocument || e || document, !0), e, f) : (h = q.apply(this, arguments), b && b.selector !== c ? (h.selector = b.selector, h.context = b.context) : (h.selector = "string" == typeof b ? b : "", b && (h.context = b.nodeType ? b : e || document)), h)
        }, a.fn.init.prototype = a.fn, a.find = function(a) {
            var b = Array.prototype.slice.call(arguments);
            if ("string" == typeof a && u.test(a)) try {
                document.querySelector(a)
            } catch (c) {
                a = a.replace(v, function(a, b, c, d) {
                    return "[" + b + c + '"' + d + '"]'
                });
                try {
                    document.querySelector(a), d("Attribute selector with '#' must be quoted: " + b[0]), b[0] = a
                } catch (e) {
                    d("Attribute selector with '#' was not fixed: " + b[0])
                }
            }
            return r.apply(this, b)
        };
        var x;
        for (x in r) Object.prototype.hasOwnProperty.call(r, x) && (a.find[x] = r[x]);
        a.parseJSON = function(a) {
            return a ? s.apply(this, arguments) : (d("jQuery.parseJSON requires a valid JSON string"), null)
        }, a.uaMatch = function(a) {
            a = a.toLowerCase();
            var b = /(chrome)[ \/]([\w.]+)/.exec(a) || /(webkit)[ \/]([\w.]+)/.exec(a) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a) || /(msie) ([\w.]+)/.exec(a) || a.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a) || [];
            return {
                browser: b[1] || "",
                version: b[2] || "0"
            }
        }, a.browser || (o = a.uaMatch(navigator.userAgent), p = {}, o.browser && (p[o.browser] = !0, p.version = o.version), p.chrome ? p.webkit = !0 : p.webkit && (p.safari = !0), a.browser = p), e(a, "browser", a.browser, "jQuery.browser is deprecated"), a.boxModel = a.support.boxModel = "CSS1Compat" === document.compatMode, e(a, "boxModel", a.boxModel, "jQuery.boxModel is deprecated"), e(a.support, "boxModel", a.support.boxModel, "jQuery.support.boxModel is deprecated"), a.sub = function() {
            function b(a, c) {
                return new b.fn.init(a, c)
            }
            a.extend(!0, b, this), b.superclass = this, b.fn = b.prototype = this(), b.fn.constructor = b, b.sub = this.sub, b.fn.init = function(d, e) {
                var f = a.fn.init.call(this, d, e, c);
                return f instanceof b ? f : b(f)
            }, b.fn.init.prototype = b.fn;
            var c = b(document);
            return d("jQuery.sub() is deprecated"), b
        }, a.fn.size = function() {
            return d("jQuery.fn.size() is deprecated; use the .length property"), this.length
        };
        var y = !1;
        a.swap && a.each(["height", "width", "reliableMarginRight"], function(b, c) {
            var d = a.cssHooks[c] && a.cssHooks[c].get;
            d && (a.cssHooks[c].get = function() {
                var a;
                return y = !0, a = d.apply(this, arguments), y = !1, a
            })
        }), a.swap = function(a, b, c, e) {
            var f, g, h = {};
            y || d("jQuery.swap() is undocumented and deprecated");
            for (g in b) h[g] = a.style[g], a.style[g] = b[g];
            f = c.apply(a, e || []);
            for (g in b) a.style[g] = h[g];
            return f
        }, a.ajaxSetup({
            converters: {
                "text json": a.parseJSON
            }
        });
        var z = a.fn.data;
        a.fn.data = function(b) {
            var e, f, g = this[0];
            return !g || "events" !== b || 1 !== arguments.length || (e = a.data(g, b), f = a._data(g, b), e !== c && e !== f || f === c) ? z.apply(this, arguments) : (d("Use of jQuery.fn.data('events') is deprecated"), f)
        };
        var A = /\/(java|ecma)script/i;
        a.clean || (a.clean = function(b, c, e, f) {
            c = c || document, c = !c.nodeType && c[0] || c, c = c.ownerDocument || c, d("jQuery.clean() is deprecated");
            var g, h, i, j, k = [];
            if (a.merge(k, a.buildFragment(b, c).childNodes), e)
                for (i = function(a) {
                    return !a.type || A.test(a.type) ? f ? f.push(a.parentNode ? a.parentNode.removeChild(a) : a) : e.appendChild(a) : void 0
                }, g = 0; null != (h = k[g]); g++) a.nodeName(h, "script") && i(h) || (e.appendChild(h), "undefined" != typeof h.getElementsByTagName && (j = a.grep(a.merge([], h.getElementsByTagName("script")), i), k.splice.apply(k, [g + 1, 0].concat(j)), g += j.length));
            return k
        });
        var B = a.event.add,
            C = a.event.remove,
            D = a.event.trigger,
            E = a.fn.toggle,
            F = a.fn.live,
            G = a.fn.die,
            H = a.fn.load,
            I = "ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",
            J = new RegExp("\\b(?:" + I + ")\\b"),
            K = /(?:^|\s)hover(\.\S+|)\b/,
            L = function(b) {
                return "string" != typeof b || a.event.special.hover ? b : (K.test(b) && d("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"), b && b.replace(K, "mouseenter$1 mouseleave$1"))
            };
        a.event.props && "attrChange" !== a.event.props[0] && a.event.props.unshift("attrChange", "attrName", "relatedNode", "srcElement"), a.event.dispatch && e(a.event, "handle", a.event.dispatch, "jQuery.event.handle is undocumented and deprecated"), a.event.add = function(a, b, c, e, f) {
            a !== document && J.test(b) && d("AJAX events should be attached to document: " + b), B.call(this, a, L(b || ""), c, e, f)
        }, a.event.remove = function(a, b, c, d, e) {
            C.call(this, a, L(b) || "", c, d, e)
        }, a.each(["load", "unload", "error"], function(b, c) {
            a.fn[c] = function() {
                var a = Array.prototype.slice.call(arguments, 0);
                return "load" === c && "string" == typeof a[0] ? H.apply(this, a) : (d("jQuery.fn." + c + "() is deprecated"), a.splice(0, 0, c), arguments.length ? this.bind.apply(this, a) : (this.triggerHandler.apply(this, a), this))
            }
        }), a.fn.toggle = function(b, c) {
            if (!a.isFunction(b) || !a.isFunction(c)) return E.apply(this, arguments);
            d("jQuery.fn.toggle(handler, handler...) is deprecated");
            var e = arguments,
                f = b.guid || a.guid++,
                g = 0,
                h = function(c) {
                    var d = (a._data(this, "lastToggle" + b.guid) || 0) % g;
                    return a._data(this, "lastToggle" + b.guid, d + 1), c.preventDefault(), e[d].apply(this, arguments) || !1
                };
            for (h.guid = f; g < e.length;) e[g++].guid = f;
            return this.click(h)
        }, a.fn.live = function(b, c, e) {
            return d("jQuery.fn.live() is deprecated"), F ? F.apply(this, arguments) : (a(this.context).on(b, this.selector, c, e), this)
        }, a.fn.die = function(b, c) {
            return d("jQuery.fn.die() is deprecated"), G ? G.apply(this, arguments) : (a(this.context).off(b, this.selector || "**", c), this)
        }, a.event.trigger = function(a, b, c, e) {
            return c || J.test(a) || d("Global events are undocumented and deprecated"), D.call(this, a, b, c || document, e)
        }, a.each(I.split("|"), function(b, c) {
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
        }), a.event.special.ready = {
            setup: function() {
                this === document && d("'ready' event is deprecated")
            }
        };
        var M = a.fn.andSelf || a.fn.addBack,
            N = a.fn.find;
        if (a.fn.andSelf = function() {
            return d("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"), M.apply(this, arguments)
        }, a.fn.find = function(a) {
            var b = N.apply(this, arguments);
            return b.context = this.context, b.selector = this.selector ? this.selector + " " + a : a, b
        }, a.Callbacks) {
            var O = a.Deferred,
                P = [
                    ["resolve", "done", a.Callbacks("once memory"), a.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", a.Callbacks("once memory"), a.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", a.Callbacks("memory"), a.Callbacks("memory")]
                ];
            a.Deferred = function(b) {
                var c = O(),
                    e = c.promise();
                return c.pipe = e.pipe = function() {
                    var b = arguments;
                    return d("deferred.pipe() is deprecated"), a.Deferred(function(d) {
                        a.each(P, function(f, g) {
                            var h = a.isFunction(b[f]) && b[f];
                            c[g[1]](function() {
                                var b = h && h.apply(this, arguments);
                                b && a.isFunction(b.promise) ? b.promise().done(d.resolve).fail(d.reject).progress(d.notify) : d[g[0] + "With"](this === e ? d.promise() : this, h ? [b] : arguments)
                            })
                        }), b = null
                    }).promise()
                }, c.isResolved = function() {
                    return d("deferred.isResolved is deprecated"), "resolved" === c.state()
                }, c.isRejected = function() {
                    return d("deferred.isRejected is deprecated"), "rejected" === c.state()
                }, b && b.call(c, c), c
            }
        }
    }(jQuery, window);
! function() {
    for (var t, e = function() {}, i = ["assert", "clear", "count", "debug", "dir", "dirxml", "error", "exception", "group", "groupCollapsed", "groupEnd", "info", "log", "markTimeline", "profile", "profileEnd", "table", "time", "timeEnd", "timeline", "timelineEnd", "timeStamp", "trace", "warn"], s = i.length, n = window.console = window.console || {}; s--;) t = i[s], n[t] || (n[t] = e)
}(), ! function(t) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], t) : "undefined" != typeof exports ? module.exports = t(require("jquery")) : t(jQuery)
}(function(t) {
    "use strict";
    var e = window.Slick || {};
    e = function() {
        function e(e, s) {
            var n, o = this;
            o.defaults = {
                accessibility: !0,
                adaptiveHeight: !1,
                appendArrows: t(e),
                appendDots: t(e),
                arrows: !0,
                asNavFor: null,
                prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
                nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
                autoplay: !1,
                autoplaySpeed: 3e3,
                centerMode: !1,
                centerPadding: "50px",
                cssEase: "ease",
                customPaging: function(e, i) {
                    return t('<button type="button" data-role="none" role="button" tabindex="0" />').text(i + 1)
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
                zIndex: 1e3
            }, o.initials = {
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
            }, t.extend(o, o.initials), o.activeBreakpoint = null, o.animType = null, o.animProp = null, o.breakpoints = [], o.breakpointSettings = [], o.cssTransitions = !1, o.focussed = !1, o.interrupted = !1, o.hidden = "hidden", o.paused = !0, o.positionProp = null, o.respondTo = null, o.rowCount = 1, o.shouldClick = !0, o.$slider = t(e), o.$slidesCache = null, o.transformType = null, o.transitionType = null, o.visibilityChange = "visibilitychange", o.windowWidth = 0, o.windowTimer = null, n = t(e).data("slick") || {}, o.options = t.extend({}, o.defaults, s, n), o.currentSlide = o.options.initialSlide, o.originalSettings = o.options, "undefined" != typeof document.mozHidden ? (o.hidden = "mozHidden", o.visibilityChange = "mozvisibilitychange") : "undefined" != typeof document.webkitHidden && (o.hidden = "webkitHidden", o.visibilityChange = "webkitvisibilitychange"), o.autoPlay = t.proxy(o.autoPlay, o), o.autoPlayClear = t.proxy(o.autoPlayClear, o), o.autoPlayIterator = t.proxy(o.autoPlayIterator, o), o.changeSlide = t.proxy(o.changeSlide, o), o.clickHandler = t.proxy(o.clickHandler, o), o.selectHandler = t.proxy(o.selectHandler, o), o.setPosition = t.proxy(o.setPosition, o), o.swipeHandler = t.proxy(o.swipeHandler, o), o.dragHandler = t.proxy(o.dragHandler, o), o.keyHandler = t.proxy(o.keyHandler, o), o.instanceUid = i++, o.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, o.registerBreakpoints(), o.init(!0)
        }
        var i = 0;
        return e
    }(), e.prototype.activateADA = function() {
        var t = this;
        t.$slideTrack.find(".slick-active").attr({
            "aria-hidden": "false"
        }).find("a, input, button, select").attr({
            tabindex: "0"
        })
    }, e.prototype.addSlide = e.prototype.slickAdd = function(e, i, s) {
        var n = this;
        if ("boolean" == typeof i) s = i, i = null;
        else if (0 > i || i >= n.slideCount) return !1;
        n.unload(), "number" == typeof i ? 0 === i && 0 === n.$slides.length ? t(e).appendTo(n.$slideTrack) : s ? t(e).insertBefore(n.$slides.eq(i)) : t(e).insertAfter(n.$slides.eq(i)) : s === !0 ? t(e).prependTo(n.$slideTrack) : t(e).appendTo(n.$slideTrack), n.$slides = n.$slideTrack.children(this.options.slide), n.$slideTrack.children(this.options.slide).detach(), n.$slideTrack.append(n.$slides), n.$slides.each(function(e, i) {
            t(i).attr("data-slick-index", e)
        }), n.$slidesCache = n.$slides, n.reinit()
    }, e.prototype.animateHeight = function() {
        var t = this;
        if (1 === t.options.slidesToShow && t.options.adaptiveHeight === !0 && t.options.vertical === !1) {
            var e = t.$slides.eq(t.currentSlide).outerHeight(!0);
            t.$list.animate({
                height: e
            }, t.options.speed)
        }
    }, e.prototype.animateSlide = function(e, i) {
        var s = {},
            n = this;
        n.animateHeight(), n.options.rtl === !0 && n.options.vertical === !1 && (e = -e), n.transformsEnabled === !1 ? n.options.vertical === !1 ? n.$slideTrack.animate({
            left: e
        }, n.options.speed, n.options.easing, i) : n.$slideTrack.animate({
            top: e
        }, n.options.speed, n.options.easing, i) : n.cssTransitions === !1 ? (n.options.rtl === !0 && (n.currentLeft = -n.currentLeft), t({
            animStart: n.currentLeft
        }).animate({
            animStart: e
        }, {
            duration: n.options.speed,
            easing: n.options.easing,
            step: function(t) {
                t = Math.ceil(t), n.options.vertical === !1 ? (s[n.animType] = "translate(" + t + "px, 0px)", n.$slideTrack.css(s)) : (s[n.animType] = "translate(0px," + t + "px)", n.$slideTrack.css(s))
            },
            complete: function() {
                i && i.call()
            }
        })) : (n.applyTransition(), e = Math.ceil(e), n.options.vertical === !1 ? s[n.animType] = "translate3d(" + e + "px, 0px, 0px)" : s[n.animType] = "translate3d(0px," + e + "px, 0px)", n.$slideTrack.css(s), i && setTimeout(function() {
            n.disableTransition(), i.call()
        }, n.options.speed))
    }, e.prototype.getNavTarget = function() {
        var e = this,
            i = e.options.asNavFor;
        return i && null !== i && (i = t(i).not(e.$slider)), i
    }, e.prototype.asNavFor = function(e) {
        var i = this,
            s = i.getNavTarget();
        null !== s && "object" == typeof s && s.each(function() {
            var i = t(this).slick("getSlick");
            i.unslicked || i.slideHandler(e, !0)
        })
    }, e.prototype.applyTransition = function(t) {
        var e = this,
            i = {};
        e.options.fade === !1 ? i[e.transitionType] = e.transformType + " " + e.options.speed + "ms " + e.options.cssEase : i[e.transitionType] = "opacity " + e.options.speed + "ms " + e.options.cssEase, e.options.fade === !1 ? e.$slideTrack.css(i) : e.$slides.eq(t).css(i)
    }, e.prototype.autoPlay = function() {
        var t = this;
        t.autoPlayClear(), t.slideCount > t.options.slidesToShow && (t.autoPlayTimer = setInterval(t.autoPlayIterator, t.options.autoplaySpeed))
    }, e.prototype.autoPlayClear = function() {
        var t = this;
        t.autoPlayTimer && clearInterval(t.autoPlayTimer)
    }, e.prototype.autoPlayIterator = function() {
        var t = this,
            e = t.currentSlide + t.options.slidesToScroll;
        t.paused || t.interrupted || t.focussed || (t.options.infinite === !1 && (1 === t.direction && t.currentSlide + 1 === t.slideCount - 1 ? t.direction = 0 : 0 === t.direction && (e = t.currentSlide - t.options.slidesToScroll, t.currentSlide - 1 === 0 && (t.direction = 1))), t.slideHandler(e))
    }, e.prototype.buildArrows = function() {
        var e = this;
        e.options.arrows === !0 && (e.$prevArrow = t(e.options.prevArrow).addClass("slick-arrow"), e.$nextArrow = t(e.options.nextArrow).addClass("slick-arrow"), e.slideCount > e.options.slidesToShow ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows), e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows), e.options.infinite !== !0 && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({
            "aria-disabled": "true",
            tabindex: "-1"
        }))
    }, e.prototype.buildDots = function() {
        var e, i, s = this;
        if (s.options.dots === !0 && s.slideCount > s.options.slidesToShow) {
            for (s.$slider.addClass("slick-dotted"), i = t("<ul />").addClass(s.options.dotsClass), e = 0; e <= s.getDotCount(); e += 1) i.append(t("<li />").append(s.options.customPaging.call(this, s, e)));
            s.$dots = i.appendTo(s.options.appendDots), s.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false")
        }
    }, e.prototype.buildOut = function() {
        var e = this;
        e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), e.slideCount = e.$slides.length, e.$slides.each(function(e, i) {
            t(i).attr("data-slick-index", e).data("originalStyling", t(i).attr("style") || "")
        }), e.$slider.addClass("slick-slider"), e.$slideTrack = 0 === e.slideCount ? t('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent(), e.$list = e.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(), e.$slideTrack.css("opacity", 0), (e.options.centerMode === !0 || e.options.swipeToSlide === !0) && (e.options.slidesToScroll = 1), t("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"), e.setupInfinite(), e.buildArrows(), e.buildDots(), e.updateDots(), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), e.options.draggable === !0 && e.$list.addClass("draggable")
    }, e.prototype.buildRows = function() {
        var t, e, i, s, n, o, r, a = this;
        if (s = document.createDocumentFragment(), o = a.$slider.children(), a.options.rows > 1) {
            for (r = a.options.slidesPerRow * a.options.rows, n = Math.ceil(o.length / r), t = 0; n > t; t++) {
                var l = document.createElement("div");
                for (e = 0; e < a.options.rows; e++) {
                    var c = document.createElement("div");
                    for (i = 0; i < a.options.slidesPerRow; i++) {
                        var d = t * r + (e * a.options.slidesPerRow + i);
                        o.get(d) && c.appendChild(o.get(d))
                    }
                    l.appendChild(c)
                }
                s.appendChild(l)
            }
            a.$slider.empty().append(s), a.$slider.children().children().children().css({
                width: 100 / a.options.slidesPerRow + "%",
                display: "inline-block"
            })
        }
    }, e.prototype.checkResponsive = function(e, i) {
        var s, n, o, r = this,
            a = !1,
            l = r.$slider.width(),
            c = window.innerWidth || t(window).width();
        if ("window" === r.respondTo ? o = c : "slider" === r.respondTo ? o = l : "min" === r.respondTo && (o = Math.min(c, l)), r.options.responsive && r.options.responsive.length && null !== r.options.responsive) {
            n = null;
            for (s in r.breakpoints) r.breakpoints.hasOwnProperty(s) && (r.originalSettings.mobileFirst === !1 ? o < r.breakpoints[s] && (n = r.breakpoints[s]) : o > r.breakpoints[s] && (n = r.breakpoints[s]));
            null !== n ? null !== r.activeBreakpoint ? (n !== r.activeBreakpoint || i) && (r.activeBreakpoint = n, "unslick" === r.breakpointSettings[n] ? r.unslick(n) : (r.options = t.extend({}, r.originalSettings, r.breakpointSettings[n]), e === !0 && (r.currentSlide = r.options.initialSlide), r.refresh(e)), a = n) : (r.activeBreakpoint = n, "unslick" === r.breakpointSettings[n] ? r.unslick(n) : (r.options = t.extend({}, r.originalSettings, r.breakpointSettings[n]), e === !0 && (r.currentSlide = r.options.initialSlide), r.refresh(e)), a = n) : null !== r.activeBreakpoint && (r.activeBreakpoint = null, r.options = r.originalSettings, e === !0 && (r.currentSlide = r.options.initialSlide), r.refresh(e), a = n), e || a === !1 || r.$slider.trigger("breakpoint", [r, a])
        }
    }, e.prototype.changeSlide = function(e, i) {
        var s, n, o, r = this,
            a = t(e.currentTarget);
        switch (a.is("a") && e.preventDefault(), a.is("li") || (a = a.closest("li")), o = r.slideCount % r.options.slidesToScroll !== 0, s = o ? 0 : (r.slideCount - r.currentSlide) % r.options.slidesToScroll, e.data.message) {
            case "previous":
                n = 0 === s ? r.options.slidesToScroll : r.options.slidesToShow - s, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide - n, !1, i);
                break;
            case "next":
                n = 0 === s ? r.options.slidesToScroll : s, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide + n, !1, i);
                break;
            case "index":
                var l = 0 === e.data.index ? 0 : e.data.index || a.index() * r.options.slidesToScroll;
                r.slideHandler(r.checkNavigable(l), !1, i), a.children().trigger("focus");
                break;
            default:
                return
        }
    }, e.prototype.checkNavigable = function(t) {
        var e, i, s = this;
        if (e = s.getNavigableIndexes(), i = 0, t > e[e.length - 1]) t = e[e.length - 1];
        else
            for (var n in e) {
                if (t < e[n]) {
                    t = i;
                    break
                }
                i = e[n]
            }
        return t
    }, e.prototype.cleanUpEvents = function() {
        var e = this;
        e.options.dots && null !== e.$dots && t("li", e.$dots).off("click.slick", e.changeSlide).off("mouseenter.slick", t.proxy(e.interrupt, e, !0)).off("mouseleave.slick", t.proxy(e.interrupt, e, !1)), e.$slider.off("focus.slick blur.slick"), e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide), e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide)), e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler), e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler), e.$list.off("touchend.slick mouseup.slick", e.swipeHandler), e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler), e.$list.off("click.slick", e.clickHandler), t(document).off(e.visibilityChange, e.visibility), e.cleanUpSlideEvents(), e.options.accessibility === !0 && e.$list.off("keydown.slick", e.keyHandler), e.options.focusOnSelect === !0 && t(e.$slideTrack).children().off("click.slick", e.selectHandler), t(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange), t(window).off("resize.slick.slick-" + e.instanceUid, e.resize), t("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault), t(window).off("load.slick.slick-" + e.instanceUid, e.setPosition), t(document).off("ready.slick.slick-" + e.instanceUid, e.setPosition)
    }, e.prototype.cleanUpSlideEvents = function() {
        var e = this;
        e.$list.off("mouseenter.slick", t.proxy(e.interrupt, e, !0)), e.$list.off("mouseleave.slick", t.proxy(e.interrupt, e, !1))
    }, e.prototype.cleanUpRows = function() {
        var t, e = this;
        e.options.rows > 1 && (t = e.$slides.children().children(), t.removeAttr("style"), e.$slider.empty().append(t))
    }, e.prototype.clickHandler = function(t) {
        var e = this;
        e.shouldClick === !1 && (t.stopImmediatePropagation(), t.stopPropagation(), t.preventDefault())
    }, e.prototype.destroy = function(e) {
        var i = this;
        i.autoPlayClear(), i.touchObject = {}, i.cleanUpEvents(), t(".slick-cloned", i.$slider).detach(), i.$dots && i.$dots.remove(), i.$prevArrow && i.$prevArrow.length && (i.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), i.htmlExpr.test(i.options.prevArrow) && i.$prevArrow.remove()), i.$nextArrow && i.$nextArrow.length && (i.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), i.htmlExpr.test(i.options.nextArrow) && i.$nextArrow.remove()), i.$slides && (i.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
            t(this).attr("style", t(this).data("originalStyling"))
        }), i.$slideTrack.children(this.options.slide).detach(), i.$slideTrack.detach(), i.$list.detach(), i.$slider.append(i.$slides)), i.cleanUpRows(), i.$slider.removeClass("slick-slider"), i.$slider.removeClass("slick-initialized"), i.$slider.removeClass("slick-dotted"), i.unslicked = !0, e || i.$slider.trigger("destroy", [i])
    }, e.prototype.disableTransition = function(t) {
        var e = this,
            i = {};
        i[e.transitionType] = "", e.options.fade === !1 ? e.$slideTrack.css(i) : e.$slides.eq(t).css(i)
    }, e.prototype.fadeSlide = function(t, e) {
        var i = this;
        i.cssTransitions === !1 ? (i.$slides.eq(t).css({
            zIndex: i.options.zIndex
        }), i.$slides.eq(t).animate({
            opacity: 1
        }, i.options.speed, i.options.easing, e)) : (i.applyTransition(t), i.$slides.eq(t).css({
            opacity: 1,
            zIndex: i.options.zIndex
        }), e && setTimeout(function() {
            i.disableTransition(t), e.call()
        }, i.options.speed))
    }, e.prototype.fadeSlideOut = function(t) {
        var e = this;
        e.cssTransitions === !1 ? e.$slides.eq(t).animate({
            opacity: 0,
            zIndex: e.options.zIndex - 2
        }, e.options.speed, e.options.easing) : (e.applyTransition(t), e.$slides.eq(t).css({
            opacity: 0,
            zIndex: e.options.zIndex - 2
        }))
    }, e.prototype.filterSlides = e.prototype.slickFilter = function(t) {
        var e = this;
        null !== t && (e.$slidesCache = e.$slides, e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.filter(t).appendTo(e.$slideTrack), e.reinit())
    }, e.prototype.focusHandler = function() {
        var e = this;
        e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*:not(.slick-arrow)", function(i) {
            i.stopImmediatePropagation();
            var s = t(this);
            setTimeout(function() {
                e.options.pauseOnFocus && (e.focussed = s.is(":focus"), e.autoPlay())
            }, 0)
        })
    }, e.prototype.getCurrent = e.prototype.slickCurrentSlide = function() {
        var t = this;
        return t.currentSlide
    }, e.prototype.getDotCount = function() {
        var t = this,
            e = 0,
            i = 0,
            s = 0;
        if (t.options.infinite === !0)
            for (; e < t.slideCount;) ++s, e = i + t.options.slidesToScroll, i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
        else if (t.options.centerMode === !0) s = t.slideCount;
        else if (t.options.asNavFor)
            for (; e < t.slideCount;) ++s, e = i + t.options.slidesToScroll, i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
        else s = 1 + Math.ceil((t.slideCount - t.options.slidesToShow) / t.options.slidesToScroll);
        return s - 1
    }, e.prototype.getLeft = function(t) {
        var e, i, s, n = this,
            o = 0;
        return n.slideOffset = 0, i = n.$slides.first().outerHeight(!0), n.options.infinite === !0 ? (n.slideCount > n.options.slidesToShow && (n.slideOffset = n.slideWidth * n.options.slidesToShow * -1, o = i * n.options.slidesToShow * -1), n.slideCount % n.options.slidesToScroll !== 0 && t + n.options.slidesToScroll > n.slideCount && n.slideCount > n.options.slidesToShow && (t > n.slideCount ? (n.slideOffset = (n.options.slidesToShow - (t - n.slideCount)) * n.slideWidth * -1, o = (n.options.slidesToShow - (t - n.slideCount)) * i * -1) : (n.slideOffset = n.slideCount % n.options.slidesToScroll * n.slideWidth * -1, o = n.slideCount % n.options.slidesToScroll * i * -1))) : t + n.options.slidesToShow > n.slideCount && (n.slideOffset = (t + n.options.slidesToShow - n.slideCount) * n.slideWidth, o = (t + n.options.slidesToShow - n.slideCount) * i), n.slideCount <= n.options.slidesToShow && (n.slideOffset = 0, o = 0), n.options.centerMode === !0 && n.options.infinite === !0 ? n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2) - n.slideWidth : n.options.centerMode === !0 && (n.slideOffset = 0, n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2)), e = n.options.vertical === !1 ? t * n.slideWidth * -1 + n.slideOffset : t * i * -1 + o, n.options.variableWidth === !0 && (s = n.slideCount <= n.options.slidesToShow || n.options.infinite === !1 ? n.$slideTrack.children(".slick-slide").eq(t) : n.$slideTrack.children(".slick-slide").eq(t + n.options.slidesToShow), e = n.options.rtl === !0 ? s[0] ? -1 * (n.$slideTrack.width() - s[0].offsetLeft - s.width()) : 0 : s[0] ? -1 * s[0].offsetLeft : 0, n.options.centerMode === !0 && (s = n.slideCount <= n.options.slidesToShow || n.options.infinite === !1 ? n.$slideTrack.children(".slick-slide").eq(t) : n.$slideTrack.children(".slick-slide").eq(t + n.options.slidesToShow + 1), e = n.options.rtl === !0 ? s[0] ? -1 * (n.$slideTrack.width() - s[0].offsetLeft - s.width()) : 0 : s[0] ? -1 * s[0].offsetLeft : 0, e += (n.$list.width() - s.outerWidth()) / 2)), e
    }, e.prototype.getOption = e.prototype.slickGetOption = function(t) {
        var e = this;
        return e.options[t]
    }, e.prototype.getNavigableIndexes = function() {
        var t, e = this,
            i = 0,
            s = 0,
            n = [];
        for (e.options.infinite === !1 ? t = e.slideCount : (i = -1 * e.options.slidesToScroll, s = -1 * e.options.slidesToScroll, t = 2 * e.slideCount); t > i;) n.push(i), i = s + e.options.slidesToScroll, s += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
        return n
    }, e.prototype.getSlick = function() {
        return this
    }, e.prototype.getSlideCount = function() {
        var e, i, s, n = this;
        return s = n.options.centerMode === !0 ? n.slideWidth * Math.floor(n.options.slidesToShow / 2) : 0, n.options.swipeToSlide === !0 ? (n.$slideTrack.find(".slick-slide").each(function(e, o) {
            return o.offsetLeft - s + t(o).outerWidth() / 2 > -1 * n.swipeLeft ? (i = o, !1) : void 0
        }), e = Math.abs(t(i).attr("data-slick-index") - n.currentSlide) || 1) : n.options.slidesToScroll
    }, e.prototype.goTo = e.prototype.slickGoTo = function(t, e) {
        var i = this;
        i.changeSlide({
            data: {
                message: "index",
                index: parseInt(t)
            }
        }, e)
    }, e.prototype.init = function(e) {
        var i = this;
        t(i.$slider).hasClass("slick-initialized") || (t(i.$slider).addClass("slick-initialized"), i.buildRows(), i.buildOut(), i.setProps(), i.startLoad(), i.loadSlider(), i.initializeEvents(), i.updateArrows(), i.updateDots(), i.checkResponsive(!0), i.focusHandler()), e && i.$slider.trigger("init", [i]), i.options.accessibility === !0 && i.initADA(), i.options.autoplay && (i.paused = !1, i.autoPlay())
    }, e.prototype.initADA = function() {
        var e = this;
        e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({
            "aria-hidden": "true",
            tabindex: "-1"
        }).find("a, input, button, select").attr({
            tabindex: "-1"
        }), e.$slideTrack.attr("role", "listbox"), e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function(i) {
            t(this).attr({
                role: "option",
                "aria-describedby": "slick-slide" + e.instanceUid + i
            })
        }), null !== e.$dots && e.$dots.attr("role", "tablist").find("li").each(function(i) {
            t(this).attr({
                role: "presentation",
                "aria-selected": "false",
                "aria-controls": "navigation" + e.instanceUid + i,
                id: "slick-slide" + e.instanceUid + i
            })
        }).first().attr("aria-selected", "true").end().find("button").attr("role", "button").end().closest("div").attr("role", "toolbar"), e.activateADA()
    }, e.prototype.initArrowEvents = function() {
        var t = this;
        t.options.arrows === !0 && t.slideCount > t.options.slidesToShow && (t.$prevArrow.off("click.slick").on("click.slick", {
            message: "previous"
        }, t.changeSlide), t.$nextArrow.off("click.slick").on("click.slick", {
            message: "next"
        }, t.changeSlide))
    }, e.prototype.initDotEvents = function() {
        var e = this;
        e.options.dots === !0 && e.slideCount > e.options.slidesToShow && t("li", e.$dots).on("click.slick", {
            message: "index"
        }, e.changeSlide), e.options.dots === !0 && e.options.pauseOnDotsHover === !0 && t("li", e.$dots).on("mouseenter.slick", t.proxy(e.interrupt, e, !0)).on("mouseleave.slick", t.proxy(e.interrupt, e, !1))
    }, e.prototype.initSlideEvents = function() {
        var e = this;
        e.options.pauseOnHover && (e.$list.on("mouseenter.slick", t.proxy(e.interrupt, e, !0)), e.$list.on("mouseleave.slick", t.proxy(e.interrupt, e, !1)))
    }, e.prototype.initializeEvents = function() {
        var e = this;
        e.initArrowEvents(), e.initDotEvents(), e.initSlideEvents(), e.$list.on("touchstart.slick mousedown.slick", {
            action: "start"
        }, e.swipeHandler), e.$list.on("touchmove.slick mousemove.slick", {
            action: "move"
        }, e.swipeHandler), e.$list.on("touchend.slick mouseup.slick", {
            action: "end"
        }, e.swipeHandler), e.$list.on("touchcancel.slick mouseleave.slick", {
            action: "end"
        }, e.swipeHandler), e.$list.on("click.slick", e.clickHandler), t(document).on(e.visibilityChange, t.proxy(e.visibility, e)), e.options.accessibility === !0 && e.$list.on("keydown.slick", e.keyHandler), e.options.focusOnSelect === !0 && t(e.$slideTrack).children().on("click.slick", e.selectHandler), t(window).on("orientationchange.slick.slick-" + e.instanceUid, t.proxy(e.orientationChange, e)), t(window).on("resize.slick.slick-" + e.instanceUid, t.proxy(e.resize, e)), t("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault), t(window).on("load.slick.slick-" + e.instanceUid, e.setPosition), t(document).on("ready.slick.slick-" + e.instanceUid, e.setPosition)
    }, e.prototype.initUI = function() {
        var t = this;
        t.options.arrows === !0 && t.slideCount > t.options.slidesToShow && (t.$prevArrow.show(), t.$nextArrow.show()), t.options.dots === !0 && t.slideCount > t.options.slidesToShow && t.$dots.show()
    }, e.prototype.keyHandler = function(t) {
        var e = this;
        t.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === t.keyCode && e.options.accessibility === !0 ? e.changeSlide({
            data: {
                message: e.options.rtl === !0 ? "next" : "previous"
            }
        }) : 39 === t.keyCode && e.options.accessibility === !0 && e.changeSlide({
            data: {
                message: e.options.rtl === !0 ? "previous" : "next"
            }
        }))
    }, e.prototype.lazyLoad = function() {
        function e(e) {
            t("img[data-lazy]", e).each(function() {
                var e = t(this),
                    i = t(this).attr("data-lazy"),
                    s = document.createElement("img");
                s.onload = function() {
                    e.animate({
                        opacity: 0
                    }, 100, function() {
                        e.attr("src", i).animate({
                            opacity: 1
                        }, 200, function() {
                            e.removeAttr("data-lazy").removeClass("slick-loading")
                        }), r.$slider.trigger("lazyLoaded", [r, e, i])
                    })
                }, s.onerror = function() {
                    e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), r.$slider.trigger("lazyLoadError", [r, e, i])
                }, s.src = i
            })
        }
        var i, s, n, o, r = this;
        r.options.centerMode === !0 ? r.options.infinite === !0 ? (n = r.currentSlide + (r.options.slidesToShow / 2 + 1), o = n + r.options.slidesToShow + 2) : (n = Math.max(0, r.currentSlide - (r.options.slidesToShow / 2 + 1)), o = 2 + (r.options.slidesToShow / 2 + 1) + r.currentSlide) : (n = r.options.infinite ? r.options.slidesToShow + r.currentSlide : r.currentSlide, o = Math.ceil(n + r.options.slidesToShow), r.options.fade === !0 && (n > 0 && n--, o <= r.slideCount && o++)), i = r.$slider.find(".slick-slide").slice(n, o), e(i), r.slideCount <= r.options.slidesToShow ? (s = r.$slider.find(".slick-slide"), e(s)) : r.currentSlide >= r.slideCount - r.options.slidesToShow ? (s = r.$slider.find(".slick-cloned").slice(0, r.options.slidesToShow), e(s)) : 0 === r.currentSlide && (s = r.$slider.find(".slick-cloned").slice(-1 * r.options.slidesToShow), e(s))
    }, e.prototype.loadSlider = function() {
        var t = this;
        t.setPosition(), t.$slideTrack.css({
            opacity: 1
        }), t.$slider.removeClass("slick-loading"), t.initUI(), "progressive" === t.options.lazyLoad && t.progressiveLazyLoad()
    }, e.prototype.next = e.prototype.slickNext = function() {
        var t = this;
        t.changeSlide({
            data: {
                message: "next"
            }
        })
    }, e.prototype.orientationChange = function() {
        var t = this;
        t.checkResponsive(), t.setPosition()
    }, e.prototype.pause = e.prototype.slickPause = function() {
        var t = this;
        t.autoPlayClear(), t.paused = !0
    }, e.prototype.play = e.prototype.slickPlay = function() {
        var t = this;
        t.autoPlay(), t.options.autoplay = !0, t.paused = !1, t.focussed = !1, t.interrupted = !1
    }, e.prototype.postSlide = function(t) {
        var e = this;
        e.unslicked || (e.$slider.trigger("afterChange", [e, t]), e.animating = !1, e.setPosition(), e.swipeLeft = null, e.options.autoplay && e.autoPlay(), e.options.accessibility === !0 && e.initADA())
    }, e.prototype.prev = e.prototype.slickPrev = function() {
        var t = this;
        t.changeSlide({
            data: {
                message: "previous"
            }
        })
    }, e.prototype.preventDefault = function(t) {
        t.preventDefault()
    }, e.prototype.progressiveLazyLoad = function(e) {
        e = e || 1;
        var i, s, n, o = this,
            r = t("img[data-lazy]", o.$slider);
        r.length ? (i = r.first(), s = i.attr("data-lazy"), n = document.createElement("img"), n.onload = function() {
            i.attr("src", s).removeAttr("data-lazy").removeClass("slick-loading"), o.options.adaptiveHeight === !0 && o.setPosition(), o.$slider.trigger("lazyLoaded", [o, i, s]), o.progressiveLazyLoad()
        }, n.onerror = function() {
            3 > e ? setTimeout(function() {
                o.progressiveLazyLoad(e + 1)
            }, 500) : (i.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), o.$slider.trigger("lazyLoadError", [o, i, s]), o.progressiveLazyLoad())
        }, n.src = s) : o.$slider.trigger("allImagesLoaded", [o])
    }, e.prototype.refresh = function(e) {
        var i, s, n = this;
        s = n.slideCount - n.options.slidesToShow, !n.options.infinite && n.currentSlide > s && (n.currentSlide = s), n.slideCount <= n.options.slidesToShow && (n.currentSlide = 0), i = n.currentSlide, n.destroy(!0), t.extend(n, n.initials, {
            currentSlide: i
        }), n.init(), e || n.changeSlide({
            data: {
                message: "index",
                index: i
            }
        }, !1)
    }, e.prototype.registerBreakpoints = function() {
        var e, i, s, n = this,
            o = n.options.responsive || null;
        if ("array" === t.type(o) && o.length) {
            n.respondTo = n.options.respondTo || "window";
            for (e in o)
                if (s = n.breakpoints.length - 1, i = o[e].breakpoint, o.hasOwnProperty(e)) {
                    for (; s >= 0;) n.breakpoints[s] && n.breakpoints[s] === i && n.breakpoints.splice(s, 1), s--;
                    n.breakpoints.push(i), n.breakpointSettings[i] = o[e].settings
                }
            n.breakpoints.sort(function(t, e) {
                return n.options.mobileFirst ? t - e : e - t
            })
        }
    }, e.prototype.reinit = function() {
        var e = this;
        e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide"), e.slideCount = e.$slides.length, e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll), e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0), e.registerBreakpoints(), e.setProps(), e.setupInfinite(), e.buildArrows(), e.updateArrows(), e.initArrowEvents(), e.buildDots(), e.updateDots(), e.initDotEvents(), e.cleanUpSlideEvents(), e.initSlideEvents(), e.checkResponsive(!1, !0), e.options.focusOnSelect === !0 && t(e.$slideTrack).children().on("click.slick", e.selectHandler), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), e.setPosition(), e.focusHandler(), e.paused = !e.options.autoplay, e.autoPlay(), e.$slider.trigger("reInit", [e])
    }, e.prototype.resize = function() {
        var e = this;
        t(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay), e.windowDelay = window.setTimeout(function() {
            e.windowWidth = t(window).width(), e.checkResponsive(), e.unslicked || e.setPosition()
        }, 50))
    }, e.prototype.removeSlide = e.prototype.slickRemove = function(t, e, i) {
        var s = this;
        return "boolean" == typeof t ? (e = t, t = e === !0 ? 0 : s.slideCount - 1) : t = e === !0 ? --t : t, s.slideCount < 1 || 0 > t || t > s.slideCount - 1 ? !1 : (s.unload(), i === !0 ? s.$slideTrack.children().remove() : s.$slideTrack.children(this.options.slide).eq(t).remove(), s.$slides = s.$slideTrack.children(this.options.slide), s.$slideTrack.children(this.options.slide).detach(), s.$slideTrack.append(s.$slides), s.$slidesCache = s.$slides, void s.reinit())
    }, e.prototype.setCSS = function(t) {
        var e, i, s = this,
            n = {};
        s.options.rtl === !0 && (t = -t), e = "left" == s.positionProp ? Math.ceil(t) + "px" : "0px", i = "top" == s.positionProp ? Math.ceil(t) + "px" : "0px", n[s.positionProp] = t, s.transformsEnabled === !1 ? s.$slideTrack.css(n) : (n = {}, s.cssTransitions === !1 ? (n[s.animType] = "translate(" + e + ", " + i + ")", s.$slideTrack.css(n)) : (n[s.animType] = "translate3d(" + e + ", " + i + ", 0px)", s.$slideTrack.css(n)))
    }, e.prototype.setDimensions = function() {
        var t = this;
        t.options.vertical === !1 ? t.options.centerMode === !0 && t.$list.css({
            padding: "0px " + t.options.centerPadding
        }) : (t.$list.height(t.$slides.first().outerHeight(!0) * t.options.slidesToShow), t.options.centerMode === !0 && t.$list.css({
            padding: t.options.centerPadding + " 0px"
        })), t.listWidth = t.$list.width(), t.listHeight = t.$list.height(), t.options.vertical === !1 && t.options.variableWidth === !1 ? (t.slideWidth = Math.ceil(t.listWidth / t.options.slidesToShow), t.$slideTrack.width(Math.ceil(t.slideWidth * t.$slideTrack.children(".slick-slide").length))) : t.options.variableWidth === !0 ? t.$slideTrack.width(5e3 * t.slideCount) : (t.slideWidth = Math.ceil(t.listWidth), t.$slideTrack.height(Math.ceil(t.$slides.first().outerHeight(!0) * t.$slideTrack.children(".slick-slide").length)));
        var e = t.$slides.first().outerWidth(!0) - t.$slides.first().width();
        t.options.variableWidth === !1 && t.$slideTrack.children(".slick-slide").width(t.slideWidth - e)
    }, e.prototype.setFade = function() {
        var e, i = this;
        i.$slides.each(function(s, n) {
            e = i.slideWidth * s * -1, i.options.rtl === !0 ? t(n).css({
                position: "relative",
                right: e,
                top: 0,
                zIndex: i.options.zIndex - 2,
                opacity: 0
            }) : t(n).css({
                position: "relative",
                left: e,
                top: 0,
                zIndex: i.options.zIndex - 2,
                opacity: 0
            })
        }), i.$slides.eq(i.currentSlide).css({
            zIndex: i.options.zIndex - 1,
            opacity: 1
        })
    }, e.prototype.setHeight = function() {
        var t = this;
        if (1 === t.options.slidesToShow && t.options.adaptiveHeight === !0 && t.options.vertical === !1) {
            var e = t.$slides.eq(t.currentSlide).outerHeight(!0);
            t.$list.css("height", e)
        }
    }, e.prototype.setOption = e.prototype.slickSetOption = function() {
        var e, i, s, n, o, r = this,
            a = !1;
        if ("object" === t.type(arguments[0]) ? (s = arguments[0], a = arguments[1], o = "multiple") : "string" === t.type(arguments[0]) && (s = arguments[0], n = arguments[1], a = arguments[2], "responsive" === arguments[0] && "array" === t.type(arguments[1]) ? o = "responsive" : "undefined" != typeof arguments[1] && (o = "single")), "single" === o) r.options[s] = n;
        else if ("multiple" === o) t.each(s, function(t, e) {
            r.options[t] = e
        });
        else if ("responsive" === o)
            for (i in n)
                if ("array" !== t.type(r.options.responsive)) r.options.responsive = [n[i]];
                else {
                    for (e = r.options.responsive.length - 1; e >= 0;) r.options.responsive[e].breakpoint === n[i].breakpoint && r.options.responsive.splice(e, 1), e--;
                    r.options.responsive.push(n[i])
                }
        a && (r.unload(), r.reinit())
    }, e.prototype.setPosition = function() {
        var t = this;
        t.setDimensions(), t.setHeight(), t.options.fade === !1 ? t.setCSS(t.getLeft(t.currentSlide)) : t.setFade(), t.$slider.trigger("setPosition", [t])
    }, e.prototype.setProps = function() {
        var t = this,
            e = document.body.style;
        t.positionProp = t.options.vertical === !0 ? "top" : "left", "top" === t.positionProp ? t.$slider.addClass("slick-vertical") : t.$slider.removeClass("slick-vertical"), (void 0 !== e.WebkitTransition || void 0 !== e.MozTransition || void 0 !== e.msTransition) && t.options.useCSS === !0 && (t.cssTransitions = !0), t.options.fade && ("number" == typeof t.options.zIndex ? t.options.zIndex < 3 && (t.options.zIndex = 3) : t.options.zIndex = t.defaults.zIndex), void 0 !== e.OTransform && (t.animType = "OTransform", t.transformType = "-o-transform", t.transitionType = "OTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)), void 0 !== e.MozTransform && (t.animType = "MozTransform", t.transformType = "-moz-transform", t.transitionType = "MozTransition", void 0 === e.perspectiveProperty && void 0 === e.MozPerspective && (t.animType = !1)), void 0 !== e.webkitTransform && (t.animType = "webkitTransform", t.transformType = "-webkit-transform", t.transitionType = "webkitTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)), void 0 !== e.msTransform && (t.animType = "msTransform", t.transformType = "-ms-transform", t.transitionType = "msTransition", void 0 === e.msTransform && (t.animType = !1)), void 0 !== e.transform && t.animType !== !1 && (t.animType = "transform", t.transformType = "transform", t.transitionType = "transition"), t.transformsEnabled = t.options.useTransform && null !== t.animType && t.animType !== !1
    }, e.prototype.setSlideClasses = function(t) {
        var e, i, s, n, o = this;
        i = o.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), o.$slides.eq(t).addClass("slick-current"), o.options.centerMode === !0 ? (e = Math.floor(o.options.slidesToShow / 2), o.options.infinite === !0 && (t >= e && t <= o.slideCount - 1 - e ? o.$slides.slice(t - e, t + e + 1).addClass("slick-active").attr("aria-hidden", "false") : (s = o.options.slidesToShow + t, i.slice(s - e + 1, s + e + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === t ? i.eq(i.length - 1 - o.options.slidesToShow).addClass("slick-center") : t === o.slideCount - 1 && i.eq(o.options.slidesToShow).addClass("slick-center")), o.$slides.eq(t).addClass("slick-center")) : t >= 0 && t <= o.slideCount - o.options.slidesToShow ? o.$slides.slice(t, t + o.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : i.length <= o.options.slidesToShow ? i.addClass("slick-active").attr("aria-hidden", "false") : (n = o.slideCount % o.options.slidesToShow, s = o.options.infinite === !0 ? o.options.slidesToShow + t : t, o.options.slidesToShow == o.options.slidesToScroll && o.slideCount - t < o.options.slidesToShow ? i.slice(s - (o.options.slidesToShow - n), s + n).addClass("slick-active").attr("aria-hidden", "false") : i.slice(s, s + o.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")), "ondemand" === o.options.lazyLoad && o.lazyLoad()
    }, e.prototype.setupInfinite = function() {
        var e, i, s, n = this;
        if (n.options.fade === !0 && (n.options.centerMode = !1), n.options.infinite === !0 && n.options.fade === !1 && (i = null, n.slideCount > n.options.slidesToShow)) {
            for (s = n.options.centerMode === !0 ? n.options.slidesToShow + 1 : n.options.slidesToShow, e = n.slideCount; e > n.slideCount - s; e -= 1) i = e - 1, t(n.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i - n.slideCount).prependTo(n.$slideTrack).addClass("slick-cloned");
            for (e = 0; s > e; e += 1) i = e, t(n.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i + n.slideCount).appendTo(n.$slideTrack).addClass("slick-cloned");
            n.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                t(this).attr("id", "")
            })
        }
    }, e.prototype.interrupt = function(t) {
        var e = this;
        t || e.autoPlay(), e.interrupted = t
    }, e.prototype.selectHandler = function(e) {
        var i = this,
            s = t(e.target).is(".slick-slide") ? t(e.target) : t(e.target).parents(".slick-slide"),
            n = parseInt(s.attr("data-slick-index"));
        return n || (n = 0), i.slideCount <= i.options.slidesToShow ? (i.setSlideClasses(n), void i.asNavFor(n)) : void i.slideHandler(n)
    }, e.prototype.slideHandler = function(t, e, i) {
        var s, n, o, r, a, l = null,
            c = this;
        return e = e || !1, c.animating === !0 && c.options.waitForAnimate === !0 || c.options.fade === !0 && c.currentSlide === t || c.slideCount <= c.options.slidesToShow ? void 0 : (e === !1 && c.asNavFor(t), s = t, l = c.getLeft(s), r = c.getLeft(c.currentSlide), c.currentLeft = null === c.swipeLeft ? r : c.swipeLeft, c.options.infinite === !1 && c.options.centerMode === !1 && (0 > t || t > c.getDotCount() * c.options.slidesToScroll) ? void(c.options.fade === !1 && (s = c.currentSlide, i !== !0 ? c.animateSlide(r, function() {
            c.postSlide(s)
        }) : c.postSlide(s))) : c.options.infinite === !1 && c.options.centerMode === !0 && (0 > t || t > c.slideCount - c.options.slidesToScroll) ? void(c.options.fade === !1 && (s = c.currentSlide, i !== !0 ? c.animateSlide(r, function() {
            c.postSlide(s)
        }) : c.postSlide(s))) : (c.options.autoplay && clearInterval(c.autoPlayTimer), n = 0 > s ? c.slideCount % c.options.slidesToScroll !== 0 ? c.slideCount - c.slideCount % c.options.slidesToScroll : c.slideCount + s : s >= c.slideCount ? c.slideCount % c.options.slidesToScroll !== 0 ? 0 : s - c.slideCount : s, c.animating = !0, c.$slider.trigger("beforeChange", [c, c.currentSlide, n]), o = c.currentSlide, c.currentSlide = n, c.setSlideClasses(c.currentSlide), c.options.asNavFor && (a = c.getNavTarget(), a = a.slick("getSlick"), a.slideCount <= a.options.slidesToShow && a.setSlideClasses(c.currentSlide)), c.updateDots(), c.updateArrows(), c.options.fade === !0 ? (i !== !0 ? (c.fadeSlideOut(o), c.fadeSlide(n, function() {
            c.postSlide(n)
        })) : c.postSlide(n), void c.animateHeight()) : void(i !== !0 ? c.animateSlide(l, function() {
            c.postSlide(n)
        }) : c.postSlide(n))))
    }, e.prototype.startLoad = function() {
        var t = this;
        t.options.arrows === !0 && t.slideCount > t.options.slidesToShow && (t.$prevArrow.hide(), t.$nextArrow.hide()), t.options.dots === !0 && t.slideCount > t.options.slidesToShow && t.$dots.hide(), t.$slider.addClass("slick-loading")
    }, e.prototype.swipeDirection = function() {
        var t, e, i, s, n = this;
        return t = n.touchObject.startX - n.touchObject.curX, e = n.touchObject.startY - n.touchObject.curY, i = Math.atan2(e, t), s = Math.round(180 * i / Math.PI), 0 > s && (s = 360 - Math.abs(s)), 45 >= s && s >= 0 ? n.options.rtl === !1 ? "left" : "right" : 360 >= s && s >= 315 ? n.options.rtl === !1 ? "left" : "right" : s >= 135 && 225 >= s ? n.options.rtl === !1 ? "right" : "left" : n.options.verticalSwiping === !0 ? s >= 35 && 135 >= s ? "down" : "up" : "vertical"
    }, e.prototype.swipeEnd = function(t) {
        var e, i, s = this;
        if (s.dragging = !1, s.interrupted = !1, s.shouldClick = s.touchObject.swipeLength > 10 ? !1 : !0, void 0 === s.touchObject.curX) return !1;
        if (s.touchObject.edgeHit === !0 && s.$slider.trigger("edge", [s, s.swipeDirection()]), s.touchObject.swipeLength >= s.touchObject.minSwipe) {
            switch (i = s.swipeDirection()) {
                case "left":
                case "down":
                    e = s.options.swipeToSlide ? s.checkNavigable(s.currentSlide + s.getSlideCount()) : s.currentSlide + s.getSlideCount(), s.currentDirection = 0;
                    break;
                case "right":
                case "up":
                    e = s.options.swipeToSlide ? s.checkNavigable(s.currentSlide - s.getSlideCount()) : s.currentSlide - s.getSlideCount(), s.currentDirection = 1
            }
            "vertical" != i && (s.slideHandler(e), s.touchObject = {}, s.$slider.trigger("swipe", [s, i]))
        } else s.touchObject.startX !== s.touchObject.curX && (s.slideHandler(s.currentSlide), s.touchObject = {})
    }, e.prototype.swipeHandler = function(t) {
        var e = this;
        if (!(e.options.swipe === !1 || "ontouchend" in document && e.options.swipe === !1 || e.options.draggable === !1 && -1 !== t.type.indexOf("mouse"))) switch (e.touchObject.fingerCount = t.originalEvent && void 0 !== t.originalEvent.touches ? t.originalEvent.touches.length : 1, e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold, e.options.verticalSwiping === !0 && (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold), t.data.action) {
            case "start":
                e.swipeStart(t);
                break;
            case "move":
                e.swipeMove(t);
                break;
            case "end":
                e.swipeEnd(t)
        }
    }, e.prototype.swipeMove = function(t) {
        var e, i, s, n, o, r = this;
        return o = void 0 !== t.originalEvent ? t.originalEvent.touches : null, !r.dragging || o && 1 !== o.length ? !1 : (e = r.getLeft(r.currentSlide), r.touchObject.curX = void 0 !== o ? o[0].pageX : t.clientX, r.touchObject.curY = void 0 !== o ? o[0].pageY : t.clientY, r.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(r.touchObject.curX - r.touchObject.startX, 2))), r.options.verticalSwiping === !0 && (r.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(r.touchObject.curY - r.touchObject.startY, 2)))), i = r.swipeDirection(), "vertical" !== i ? (void 0 !== t.originalEvent && r.touchObject.swipeLength > 4 && t.preventDefault(), n = (r.options.rtl === !1 ? 1 : -1) * (r.touchObject.curX > r.touchObject.startX ? 1 : -1), r.options.verticalSwiping === !0 && (n = r.touchObject.curY > r.touchObject.startY ? 1 : -1), s = r.touchObject.swipeLength, r.touchObject.edgeHit = !1, r.options.infinite === !1 && (0 === r.currentSlide && "right" === i || r.currentSlide >= r.getDotCount() && "left" === i) && (s = r.touchObject.swipeLength * r.options.edgeFriction, r.touchObject.edgeHit = !0), r.options.vertical === !1 ? r.swipeLeft = e + s * n : r.swipeLeft = e + s * (r.$list.height() / r.listWidth) * n, r.options.verticalSwiping === !0 && (r.swipeLeft = e + s * n), r.options.fade === !0 || r.options.touchMove === !1 ? !1 : r.animating === !0 ? (r.swipeLeft = null, !1) : void r.setCSS(r.swipeLeft)) : void 0)
    }, e.prototype.swipeStart = function(t) {
        var e, i = this;
        return i.interrupted = !0, 1 !== i.touchObject.fingerCount || i.slideCount <= i.options.slidesToShow ? (i.touchObject = {}, !1) : (void 0 !== t.originalEvent && void 0 !== t.originalEvent.touches && (e = t.originalEvent.touches[0]), i.touchObject.startX = i.touchObject.curX = void 0 !== e ? e.pageX : t.clientX, i.touchObject.startY = i.touchObject.curY = void 0 !== e ? e.pageY : t.clientY, void(i.dragging = !0))
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
        var t, e = this;
        t = Math.floor(e.options.slidesToShow / 2), e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && !e.options.infinite && (e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === e.currentSlide ? (e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - e.options.slidesToShow && e.options.centerMode === !1 ? (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - 1 && e.options.centerMode === !0 && (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
    }, e.prototype.updateDots = function() {
        var t = this;
        null !== t.$dots && (t.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"), t.$dots.find("li").eq(Math.floor(t.currentSlide / t.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"))
    }, e.prototype.visibility = function() {
        var t = this;
        t.options.autoplay && (document[t.hidden] ? t.interrupted = !0 : t.interrupted = !1)
    }, t.fn.slick = function() {
        var t, i, s = this,
            n = arguments[0],
            o = Array.prototype.slice.call(arguments, 1),
            r = s.length;
        for (t = 0; r > t; t++)
            if ("object" == typeof n || "undefined" == typeof n ? s[t].slick = new e(s[t], n) : i = s[t].slick[n].apply(s[t].slick, o), "undefined" != typeof i) return i;
        return s
    }
}),
    function(t) {
        "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
    }(function(t) {
        function e(e, s) {
            var n, o, r, a = e.nodeName.toLowerCase();
            return "area" === a ? (n = e.parentNode, o = n.name, e.href && o && "map" === n.nodeName.toLowerCase() ? (r = t("img[usemap='#" + o + "']")[0], !!r && i(r)) : !1) : (/^(input|select|textarea|button|object)$/.test(a) ? !e.disabled : "a" === a ? e.href || s : s) && i(e)
        }

        function i(e) {
            return t.expr.filters.visible(e) && !t(e).parents().addBack().filter(function() {
                return "hidden" === t.css(this, "visibility")
            }).length
        }
        t.ui = t.ui || {}, t.extend(t.ui, {
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
        }), t.fn.extend({
            scrollParent: function(e) {
                var i = this.css("position"),
                    s = "absolute" === i,
                    n = e ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
                    o = this.parents().filter(function() {
                        var e = t(this);
                        return s && "static" === e.css("position") ? !1 : n.test(e.css("overflow") + e.css("overflow-y") + e.css("overflow-x"))
                    }).eq(0);
                return "fixed" !== i && o.length ? o : t(this[0].ownerDocument || document)
            },
            uniqueId: function() {
                var t = 0;
                return function() {
                    return this.each(function() {
                        this.id || (this.id = "ui-id-" + ++t)
                    })
                }
            }(),
            removeUniqueId: function() {
                return this.each(function() {
                    /^ui-id-\d+$/.test(this.id) && t(this).removeAttr("id")
                })
            }
        }), t.extend(t.expr[":"], {
            data: t.expr.createPseudo ? t.expr.createPseudo(function(e) {
                return function(i) {
                    return !!t.data(i, e)
                }
            }) : function(e, i, s) {
                return !!t.data(e, s[3])
            },
            focusable: function(i) {
                return e(i, !isNaN(t.attr(i, "tabindex")))
            },
            tabbable: function(i) {
                var s = t.attr(i, "tabindex"),
                    n = isNaN(s);
                return (n || s >= 0) && e(i, !n)
            }
        }), t("<a>").outerWidth(1).jquery || t.each(["Width", "Height"], function(e, i) {
            function s(e, i, s, o) {
                return t.each(n, function() {
                    i -= parseFloat(t.css(e, "padding" + this)) || 0, s && (i -= parseFloat(t.css(e, "border" + this + "Width")) || 0), o && (i -= parseFloat(t.css(e, "margin" + this)) || 0)
                }), i
            }
            var n = "Width" === i ? ["Left", "Right"] : ["Top", "Bottom"],
                o = i.toLowerCase(),
                r = {
                    innerWidth: t.fn.innerWidth,
                    innerHeight: t.fn.innerHeight,
                    outerWidth: t.fn.outerWidth,
                    outerHeight: t.fn.outerHeight
                };
            t.fn["inner" + i] = function(e) {
                return void 0 === e ? r["inner" + i].call(this) : this.each(function() {
                    t(this).css(o, s(this, e) + "px")
                })
            }, t.fn["outer" + i] = function(e, n) {
                return "number" != typeof e ? r["outer" + i].call(this, e) : this.each(function() {
                    t(this).css(o, s(this, e, !0, n) + "px")
                })
            }
        }), t.fn.addBack || (t.fn.addBack = function(t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }), t("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (t.fn.removeData = function(e) {
            return function(i) {
                return arguments.length ? e.call(this, t.camelCase(i)) : e.call(this)
            }
        }(t.fn.removeData)), t.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), t.fn.extend({
            focus: function(e) {
                return function(i, s) {
                    return "number" == typeof i ? this.each(function() {
                        var e = this;
                        setTimeout(function() {
                            t(e).focus(), s && s.call(e)
                        }, i)
                    }) : e.apply(this, arguments)
                }
            }(t.fn.focus),
            disableSelection: function() {
                var t = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown";
                return function() {
                    return this.bind(t + ".ui-disableSelection", function(t) {
                        t.preventDefault()
                    })
                }
            }(),
            enableSelection: function() {
                return this.unbind(".ui-disableSelection")
            },
            zIndex: function(e) {
                if (void 0 !== e) return this.css("zIndex", e);
                if (this.length)
                    for (var i, s, n = t(this[0]); n.length && n[0] !== document;) {
                        if (i = n.css("position"), ("absolute" === i || "relative" === i || "fixed" === i) && (s = parseInt(n.css("zIndex"), 10), !isNaN(s) && 0 !== s)) return s;
                        n = n.parent()
                    }
                return 0
            }
        }), t.ui.plugin = {
            add: function(e, i, s) {
                var n, o = t.ui[e].prototype;
                for (n in s) o.plugins[n] = o.plugins[n] || [], o.plugins[n].push([i, s[n]])
            },
            call: function(t, e, i, s) {
                var n, o = t.plugins[e];
                if (o && (s || t.element[0].parentNode && 11 !== t.element[0].parentNode.nodeType))
                    for (n = 0; o.length > n; n++) t.options[o[n][0]] && o[n][1].apply(t.element, i)
            }
        };
        var s = 0,
            n = Array.prototype.slice;
        t.cleanData = function(e) {
            return function(i) {
                var s, n, o;
                for (o = 0; null != (n = i[o]); o++) try {
                    s = t._data(n, "events"), s && s.remove && t(n).triggerHandler("remove")
                } catch (r) {}
                e(i)
            }
        }(t.cleanData), t.widget = function(e, i, s) {
            var n, o, r, a, l = {},
                c = e.split(".")[0];
            return e = e.split(".")[1], n = c + "-" + e, s || (s = i, i = t.Widget), t.expr[":"][n.toLowerCase()] = function(e) {
                return !!t.data(e, n)
            }, t[c] = t[c] || {}, o = t[c][e], r = t[c][e] = function(t, e) {
                return this._createWidget ? void(arguments.length && this._createWidget(t, e)) : new r(t, e)
            }, t.extend(r, o, {
                version: s.version,
                _proto: t.extend({}, s),
                _childConstructors: []
            }), a = new i, a.options = t.widget.extend({}, a.options), t.each(s, function(e, s) {
                return t.isFunction(s) ? void(l[e] = function() {
                    var t = function() {
                            return i.prototype[e].apply(this, arguments)
                        },
                        n = function(t) {
                            return i.prototype[e].apply(this, t)
                        };
                    return function() {
                        var e, i = this._super,
                            o = this._superApply;
                        return this._super = t, this._superApply = n, e = s.apply(this, arguments), this._super = i, this._superApply = o, e
                    }
                }()) : void(l[e] = s)
            }), r.prototype = t.widget.extend(a, {
                widgetEventPrefix: o ? a.widgetEventPrefix || e : e
            }, l, {
                constructor: r,
                namespace: c,
                widgetName: e,
                widgetFullName: n
            }), o ? (t.each(o._childConstructors, function(e, i) {
                var s = i.prototype;
                t.widget(s.namespace + "." + s.widgetName, r, i._proto)
            }), delete o._childConstructors) : i._childConstructors.push(r), t.widget.bridge(e, r), r
        }, t.widget.extend = function(e) {
            for (var i, s, o = n.call(arguments, 1), r = 0, a = o.length; a > r; r++)
                for (i in o[r]) s = o[r][i], o[r].hasOwnProperty(i) && void 0 !== s && (e[i] = t.isPlainObject(s) ? t.isPlainObject(e[i]) ? t.widget.extend({}, e[i], s) : t.widget.extend({}, s) : s);
            return e
        }, t.widget.bridge = function(e, i) {
            var s = i.prototype.widgetFullName || e;
            t.fn[e] = function(o) {
                var r = "string" == typeof o,
                    a = n.call(arguments, 1),
                    l = this;
                return r ? this.each(function() {
                    var i, n = t.data(this, s);
                    return "instance" === o ? (l = n, !1) : n ? t.isFunction(n[o]) && "_" !== o.charAt(0) ? (i = n[o].apply(n, a), i !== n && void 0 !== i ? (l = i && i.jquery ? l.pushStack(i.get()) : i, !1) : void 0) : t.error("no such method '" + o + "' for " + e + " widget instance") : t.error("cannot call methods on " + e + " prior to initialization; attempted to call method '" + o + "'")
                }) : (a.length && (o = t.widget.extend.apply(null, [o].concat(a))), this.each(function() {
                    var e = t.data(this, s);
                    e ? (e.option(o || {}), e._init && e._init()) : t.data(this, s, new i(o, this))
                })), l
            }
        }, t.Widget = function() {}, t.Widget._childConstructors = [], t.Widget.prototype = {
            widgetName: "widget",
            widgetEventPrefix: "",
            defaultElement: "<div>",
            options: {
                disabled: !1,
                create: null
            },
            _createWidget: function(e, i) {
                i = t(i || this.defaultElement || this)[0], this.element = t(i), this.uuid = s++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = t(), this.hoverable = t(), this.focusable = t(), i !== this && (t.data(i, this.widgetFullName, this), this._on(!0, this.element, {
                    remove: function(t) {
                        t.target === i && this.destroy()
                    }
                }), this.document = t(i.style ? i.ownerDocument : i.document || i), this.window = t(this.document[0].defaultView || this.document[0].parentWindow)), this.options = t.widget.extend({}, this.options, this._getCreateOptions(), e), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()
            },
            _getCreateOptions: t.noop,
            _getCreateEventData: t.noop,
            _create: t.noop,
            _init: t.noop,
            destroy: function() {
                this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(t.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
            },
            _destroy: t.noop,
            widget: function() {
                return this.element
            },
            option: function(e, i) {
                var s, n, o, r = e;
                if (0 === arguments.length) return t.widget.extend({}, this.options);
                if ("string" == typeof e)
                    if (r = {}, s = e.split("."), e = s.shift(), s.length) {
                        for (n = r[e] = t.widget.extend({}, this.options[e]), o = 0; s.length - 1 > o; o++) n[s[o]] = n[s[o]] || {}, n = n[s[o]];
                        if (e = s.pop(), 1 === arguments.length) return void 0 === n[e] ? null : n[e];
                        n[e] = i
                    } else {
                        if (1 === arguments.length) return void 0 === this.options[e] ? null : this.options[e];
                        r[e] = i
                    }
                return this._setOptions(r), this
            },
            _setOptions: function(t) {
                var e;
                for (e in t) this._setOption(e, t[e]);
                return this
            },
            _setOption: function(t, e) {
                return this.options[t] = e, "disabled" === t && (this.widget().toggleClass(this.widgetFullName + "-disabled", !!e), e && (this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus"))), this
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
            _on: function(e, i, s) {
                var n, o = this;
                "boolean" != typeof e && (s = i, i = e, e = !1), s ? (i = n = t(i), this.bindings = this.bindings.add(i)) : (s = i, i = this.element, n = this.widget()), t.each(s, function(s, r) {
                    function a() {
                        return e || o.options.disabled !== !0 && !t(this).hasClass("ui-state-disabled") ? ("string" == typeof r ? o[r] : r).apply(o, arguments) : void 0
                    }
                    "string" != typeof r && (a.guid = r.guid = r.guid || a.guid || t.guid++);
                    var l = s.match(/^([\w:-]*)\s*(.*)$/),
                        c = l[1] + o.eventNamespace,
                        d = l[2];
                    d ? n.delegate(d, c, a) : i.bind(c, a)
                })
            },
            _off: function(e, i) {
                i = (i || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, e.unbind(i).undelegate(i), this.bindings = t(this.bindings.not(e).get()), this.focusable = t(this.focusable.not(e).get()), this.hoverable = t(this.hoverable.not(e).get())
            },
            _delay: function(t, e) {
                function i() {
                    return ("string" == typeof t ? s[t] : t).apply(s, arguments)
                }
                var s = this;
                return setTimeout(i, e || 0)
            },
            _hoverable: function(e) {
                this.hoverable = this.hoverable.add(e), this._on(e, {
                    mouseenter: function(e) {
                        t(e.currentTarget).addClass("ui-state-hover")
                    },
                    mouseleave: function(e) {
                        t(e.currentTarget).removeClass("ui-state-hover")
                    }
                })
            },
            _focusable: function(e) {
                this.focusable = this.focusable.add(e), this._on(e, {
                    focusin: function(e) {
                        t(e.currentTarget).addClass("ui-state-focus")
                    },
                    focusout: function(e) {
                        t(e.currentTarget).removeClass("ui-state-focus")
                    }
                })
            },
            _trigger: function(e, i, s) {
                var n, o, r = this.options[e];
                if (s = s || {}, i = t.Event(i), i.type = (e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e).toLowerCase(), i.target = this.element[0], o = i.originalEvent)
                    for (n in o) n in i || (i[n] = o[n]);
                return this.element.trigger(i, s), !(t.isFunction(r) && r.apply(this.element[0], [i].concat(s)) === !1 || i.isDefaultPrevented())
            }
        }, t.each({
            show: "fadeIn",
            hide: "fadeOut"
        }, function(e, i) {
            t.Widget.prototype["_" + e] = function(s, n, o) {
                "string" == typeof n && (n = {
                    effect: n
                });
                var r, a = n ? n === !0 || "number" == typeof n ? i : n.effect || i : e;
                n = n || {}, "number" == typeof n && (n = {
                    duration: n
                }), r = !t.isEmptyObject(n), n.complete = o, n.delay && s.delay(n.delay), r && t.effects && t.effects.effect[a] ? s[e](n) : a !== e && s[a] ? s[a](n.duration, n.easing, o) : s.queue(function(i) {
                    t(this)[e](), o && o.call(s[0]), i()
                })
            }
        }), t.widget;
        var o = !1;
        t(document).mouseup(function() {
            o = !1
        }), t.widget("ui.mouse", {
            version: "1.11.4",
            options: {
                cancel: "input,textarea,button,select,option",
                distance: 1,
                delay: 0
            },
            _mouseInit: function() {
                var e = this;
                this.element.bind("mousedown." + this.widgetName, function(t) {
                    return e._mouseDown(t)
                }).bind("click." + this.widgetName, function(i) {
                    return !0 === t.data(i.target, e.widgetName + ".preventClickEvent") ? (t.removeData(i.target, e.widgetName + ".preventClickEvent"), i.stopImmediatePropagation(), !1) : void 0
                }), this.started = !1
            },
            _mouseDestroy: function() {
                this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
            },
            _mouseDown: function(e) {
                if (!o) {
                    this._mouseMoved = !1, this._mouseStarted && this._mouseUp(e), this._mouseDownEvent = e;
                    var i = this,
                        s = 1 === e.which,
                        n = "string" == typeof this.options.cancel && e.target.nodeName ? t(e.target).closest(this.options.cancel).length : !1;
                    return s && !n && this._mouseCapture(e) ? (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
                        i.mouseDelayMet = !0
                    }, this.options.delay)), this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = this._mouseStart(e) !== !1, !this._mouseStarted) ? (e.preventDefault(), !0) : (!0 === t.data(e.target, this.widgetName + ".preventClickEvent") && t.removeData(e.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function(t) {
                        return i._mouseMove(t)
                    }, this._mouseUpDelegate = function(t) {
                        return i._mouseUp(t)
                    }, this.document.bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), e.preventDefault(), o = !0, !0)) : !0
                }
            },
            _mouseMove: function(e) {
                if (this._mouseMoved) {
                    if (t.ui.ie && (!document.documentMode || 9 > document.documentMode) && !e.button) return this._mouseUp(e);
                    if (!e.which) return this._mouseUp(e)
                }
                return (e.which || e.button) && (this._mouseMoved = !0), this._mouseStarted ? (this._mouseDrag(e), e.preventDefault()) : (this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, e) !== !1, this._mouseStarted ? this._mouseDrag(e) : this._mouseUp(e)), !this._mouseStarted)
            },
            _mouseUp: function(e) {
                return this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, e.target === this._mouseDownEvent.target && t.data(e.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(e)), o = !1, !1
            },
            _mouseDistanceMet: function(t) {
                return Math.max(Math.abs(this._mouseDownEvent.pageX - t.pageX), Math.abs(this._mouseDownEvent.pageY - t.pageY)) >= this.options.distance
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
        }), t.widget("ui.slider", t.ui.mouse, {
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
                this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this._calculateNewMax(), this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget ui-widget-content ui-corner-all"), this._refresh(), this._setOption("disabled", this.options.disabled), this._animateOff = !1
            },
            _refresh: function() {
                this._createRange(), this._createHandles(), this._setupEvents(), this._refreshValue()
            },
            _createHandles: function() {
                var e, i, s = this.options,
                    n = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),
                    o = "<span class='ui-slider-handle ui-state-default ui-corner-all' tabindex='0'></span>",
                    r = [];
                for (i = s.values && s.values.length || 1, n.length > i && (n.slice(i).remove(), n = n.slice(0, i)), e = n.length; i > e; e++) r.push(o);
                this.handles = n.add(t(r.join("")).appendTo(this.element)), this.handle = this.handles.eq(0), this.handles.each(function(e) {
                    t(this).data("ui-slider-handle-index", e)
                })
            },
            _createRange: function() {
                var e = this.options,
                    i = "";
                e.range ? (e.range === !0 && (e.values ? e.values.length && 2 !== e.values.length ? e.values = [e.values[0], e.values[0]] : t.isArray(e.values) && (e.values = e.values.slice(0)) : e.values = [this._valueMin(), this._valueMin()]), this.range && this.range.length ? this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({
                    left: "",
                    bottom: ""
                }) : (this.range = t("<div></div>").appendTo(this.element), i = "ui-slider-range ui-widget-header ui-corner-all"), this.range.addClass(i + ("min" === e.range || "max" === e.range ? " ui-slider-range-" + e.range : ""))) : (this.range && this.range.remove(), this.range = null)
            },
            _setupEvents: function() {
                this._off(this.handles), this._on(this.handles, this._handleEvents), this._hoverable(this.handles), this._focusable(this.handles)
            },
            _destroy: function() {
                this.handles.remove(), this.range && this.range.remove(), this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"), this._mouseDestroy()
            },
            _mouseCapture: function(e) {
                var i, s, n, o, r, a, l, c, d = this,
                    u = this.options;
                return u.disabled ? !1 : (this.elementSize = {
                    width: this.element.outerWidth(),
                    height: this.element.outerHeight()
                }, this.elementOffset = this.element.offset(), i = {
                    x: e.pageX,
                    y: e.pageY
                }, s = this._normValueFromMouse(i), n = this._valueMax() - this._valueMin() + 1, this.handles.each(function(e) {
                    var i = Math.abs(s - d.values(e));
                    (n > i || n === i && (e === d._lastChangedValue || d.values(e) === u.min)) && (n = i, o = t(this), r = e)
                }), a = this._start(e, r), a === !1 ? !1 : (this._mouseSliding = !0, this._handleIndex = r, o.addClass("ui-state-active").focus(), l = o.offset(), c = !t(e.target).parents().addBack().is(".ui-slider-handle"), this._clickOffset = c ? {
                    left: 0,
                    top: 0
                } : {
                    left: e.pageX - l.left - o.width() / 2,
                    top: e.pageY - l.top - o.height() / 2 - (parseInt(o.css("borderTopWidth"), 10) || 0) - (parseInt(o.css("borderBottomWidth"), 10) || 0) + (parseInt(o.css("marginTop"), 10) || 0)
                }, this.handles.hasClass("ui-state-hover") || this._slide(e, r, s), this._animateOff = !0, !0))
            },
            _mouseStart: function() {
                return !0
            },
            _mouseDrag: function(t) {
                var e = {
                        x: t.pageX,
                        y: t.pageY
                    },
                    i = this._normValueFromMouse(e);
                return this._slide(t, this._handleIndex, i), !1
            },
            _mouseStop: function(t) {
                return this.handles.removeClass("ui-state-active"), this._mouseSliding = !1, this._stop(t, this._handleIndex), this._change(t, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1, !1
            },
            _detectOrientation: function() {
                this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal"
            },
            _normValueFromMouse: function(t) {
                var e, i, s, n, o;
                return "horizontal" === this.orientation ? (e = this.elementSize.width, i = t.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (e = this.elementSize.height, i = t.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), s = i / e, s > 1 && (s = 1), 0 > s && (s = 0), "vertical" === this.orientation && (s = 1 - s), n = this._valueMax() - this._valueMin(), o = this._valueMin() + s * n, this._trimAlignValue(o)
            },
            _start: function(t, e) {
                var i = {
                    handle: this.handles[e],
                    value: this.value()
                };
                return this.options.values && this.options.values.length && (i.value = this.values(e), i.values = this.values()), this._trigger("start", t, i)
            },
            _slide: function(t, e, i) {
                var s, n, o;
                this.options.values && this.options.values.length ? (s = this.values(e ? 0 : 1), 2 === this.options.values.length && this.options.range === !0 && (0 === e && i > s || 1 === e && s > i) && (i = s), i !== this.values(e) && (n = this.values(), n[e] = i, o = this._trigger("slide", t, {
                    handle: this.handles[e],
                    value: i,
                    values: n
                }), s = this.values(e ? 0 : 1), o !== !1 && this.values(e, i))) : i !== this.value() && (o = this._trigger("slide", t, {
                    handle: this.handles[e],
                    value: i
                }), o !== !1 && this.value(i))
            },
            _stop: function(t, e) {
                var i = {
                    handle: this.handles[e],
                    value: this.value()
                };
                this.options.values && this.options.values.length && (i.value = this.values(e), i.values = this.values()), this._trigger("stop", t, i)
            },
            _change: function(t, e) {
                if (!this._keySliding && !this._mouseSliding) {
                    var i = {
                        handle: this.handles[e],
                        value: this.value()
                    };
                    this.options.values && this.options.values.length && (i.value = this.values(e), i.values = this.values()), this._lastChangedValue = e, this._trigger("change", t, i)
                }
            },
            value: function(t) {
                return arguments.length ? (this.options.value = this._trimAlignValue(t), this._refreshValue(), void this._change(null, 0)) : this._value()
            },
            values: function(e, i) {
                var s, n, o;
                if (arguments.length > 1) return this.options.values[e] = this._trimAlignValue(i), this._refreshValue(), void this._change(null, e);
                if (!arguments.length) return this._values();
                if (!t.isArray(arguments[0])) return this.options.values && this.options.values.length ? this._values(e) : this.value();
                for (s = this.options.values, n = arguments[0], o = 0; s.length > o; o += 1) s[o] = this._trimAlignValue(n[o]), this._change(null, o);
                this._refreshValue()
            },
            _setOption: function(e, i) {
                var s, n = 0;
                switch ("range" === e && this.options.range === !0 && ("min" === i ? (this.options.value = this._values(0), this.options.values = null) : "max" === i && (this.options.value = this._values(this.options.values.length - 1), this.options.values = null)), t.isArray(this.options.values) && (n = this.options.values.length), "disabled" === e && this.element.toggleClass("ui-state-disabled", !!i), this._super(e, i), e) {
                    case "orientation":
                        this._detectOrientation(), this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation), this._refreshValue(), this.handles.css("horizontal" === i ? "bottom" : "left", "");
                        break;
                    case "value":
                        this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1;
                        break;
                    case "values":
                        for (this._animateOff = !0, this._refreshValue(), s = 0; n > s; s += 1) this._change(null, s);
                        this._animateOff = !1;
                        break;
                    case "step":
                    case "min":
                    case "max":
                        this._animateOff = !0, this._calculateNewMax(), this._refreshValue(), this._animateOff = !1;
                        break;
                    case "range":
                        this._animateOff = !0, this._refresh(), this._animateOff = !1
                }
            },
            _value: function() {
                var t = this.options.value;
                return t = this._trimAlignValue(t)
            },
            _values: function(t) {
                var e, i, s;
                if (arguments.length) return e = this.options.values[t], e = this._trimAlignValue(e);
                if (this.options.values && this.options.values.length) {
                    for (i = this.options.values.slice(), s = 0; i.length > s; s += 1) i[s] = this._trimAlignValue(i[s]);
                    return i
                }
                return []
            },
            _trimAlignValue: function(t) {
                if (this._valueMin() >= t) return this._valueMin();
                if (t >= this._valueMax()) return this._valueMax();
                var e = this.options.step > 0 ? this.options.step : 1,
                    i = (t - this._valueMin()) % e,
                    s = t - i;
                return 2 * Math.abs(i) >= e && (s += i > 0 ? e : -e), parseFloat(s.toFixed(5))
            },
            _calculateNewMax: function() {
                var t = this.options.max,
                    e = this._valueMin(),
                    i = this.options.step,
                    s = Math.floor(+(t - e).toFixed(this._precision()) / i) * i;
                t = s + e, this.max = parseFloat(t.toFixed(this._precision()))
            },
            _precision: function() {
                var t = this._precisionOf(this.options.step);
                return null !== this.options.min && (t = Math.max(t, this._precisionOf(this.options.min))), t
            },
            _precisionOf: function(t) {
                var e = "" + t,
                    i = e.indexOf(".");
                return -1 === i ? 0 : e.length - i - 1
            },
            _valueMin: function() {
                return this.options.min
            },
            _valueMax: function() {
                return this.max
            },
            _refreshValue: function() {
                var e, i, s, n, o, r = this.options.range,
                    a = this.options,
                    l = this,
                    c = this._animateOff ? !1 : a.animate,
                    d = {};
                this.options.values && this.options.values.length ? this.handles.each(function(s) {
                    i = 100 * ((l.values(s) - l._valueMin()) / (l._valueMax() - l._valueMin())), d["horizontal" === l.orientation ? "left" : "bottom"] = i + "%", t(this).stop(1, 1)[c ? "animate" : "css"](d, a.animate), l.options.range === !0 && ("horizontal" === l.orientation ? (0 === s && l.range.stop(1, 1)[c ? "animate" : "css"]({
                        left: i + "%"
                    }, a.animate), 1 === s && l.range[c ? "animate" : "css"]({
                        width: i - e + "%"
                    }, {
                        queue: !1,
                        duration: a.animate
                    })) : (0 === s && l.range.stop(1, 1)[c ? "animate" : "css"]({
                        bottom: i + "%"
                    }, a.animate), 1 === s && l.range[c ? "animate" : "css"]({
                        height: i - e + "%"
                    }, {
                        queue: !1,
                        duration: a.animate
                    }))), e = i
                }) : (s = this.value(), n = this._valueMin(), o = this._valueMax(), i = o !== n ? 100 * ((s - n) / (o - n)) : 0, d["horizontal" === this.orientation ? "left" : "bottom"] = i + "%", this.handle.stop(1, 1)[c ? "animate" : "css"](d, a.animate), "min" === r && "horizontal" === this.orientation && this.range.stop(1, 1)[c ? "animate" : "css"]({
                    width: i + "%"
                }, a.animate), "max" === r && "horizontal" === this.orientation && this.range[c ? "animate" : "css"]({
                    width: 100 - i + "%"
                }, {
                    queue: !1,
                    duration: a.animate
                }), "min" === r && "vertical" === this.orientation && this.range.stop(1, 1)[c ? "animate" : "css"]({
                    height: i + "%"
                }, a.animate), "max" === r && "vertical" === this.orientation && this.range[c ? "animate" : "css"]({
                    height: 100 - i + "%"
                }, {
                    queue: !1,
                    duration: a.animate
                }))
            },
            _handleEvents: {
                keydown: function(e) {
                    var i, s, n, o, r = t(e.target).data("ui-slider-handle-index");
                    switch (e.keyCode) {
                        case t.ui.keyCode.HOME:
                        case t.ui.keyCode.END:
                        case t.ui.keyCode.PAGE_UP:
                        case t.ui.keyCode.PAGE_DOWN:
                        case t.ui.keyCode.UP:
                        case t.ui.keyCode.RIGHT:
                        case t.ui.keyCode.DOWN:
                        case t.ui.keyCode.LEFT:
                            if (e.preventDefault(), !this._keySliding && (this._keySliding = !0, t(e.target).addClass("ui-state-active"), i = this._start(e, r), i === !1)) return
                    }
                    switch (o = this.options.step, s = n = this.options.values && this.options.values.length ? this.values(r) : this.value(), e.keyCode) {
                        case t.ui.keyCode.HOME:
                            n = this._valueMin();
                            break;
                        case t.ui.keyCode.END:
                            n = this._valueMax();
                            break;
                        case t.ui.keyCode.PAGE_UP:
                            n = this._trimAlignValue(s + (this._valueMax() - this._valueMin()) / this.numPages);
                            break;
                        case t.ui.keyCode.PAGE_DOWN:
                            n = this._trimAlignValue(s - (this._valueMax() - this._valueMin()) / this.numPages);
                            break;
                        case t.ui.keyCode.UP:
                        case t.ui.keyCode.RIGHT:
                            if (s === this._valueMax()) return;
                            n = this._trimAlignValue(s + o);
                            break;
                        case t.ui.keyCode.DOWN:
                        case t.ui.keyCode.LEFT:
                            if (s === this._valueMin()) return;
                            n = this._trimAlignValue(s - o)
                    }
                    this._slide(e, r, n)
                },
                keyup: function(e) {
                    var i = t(e.target).data("ui-slider-handle-index");
                    this._keySliding && (this._keySliding = !1, this._stop(e, i), this._change(e, i), t(e.target).removeClass("ui-state-active"))
                }
            }
        })
    }),
    function() {
        var t, e, i, s, n, o = function(t, e) {
                return function() {
                    return t.apply(e, arguments)
                }
            },
            r = [].indexOf || function(t) {
                for (var e = 0, i = this.length; i > e; e++)
                    if (e in this && this[e] === t) return e;
                return -1
            };
        e = function() {
            function t() {}
            return t.prototype.extend = function(t, e) {
                var i, s;
                for (i in e) s = e[i], null == t[i] && (t[i] = s);
                return t
            }, t.prototype.isMobile = function(t) {
                return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(t)
            }, t.prototype.createEvent = function(t, e, i, s) {
                var n;
                return null == e && (e = !1), null == i && (i = !1), null == s && (s = null), null != document.createEvent ? (n = document.createEvent("CustomEvent"), n.initCustomEvent(t, e, i, s)) : null != document.createEventObject ? (n = document.createEventObject(), n.eventType = t) : n.eventName = t, n
            }, t.prototype.emitEvent = function(t, e) {
                return null != t.dispatchEvent ? t.dispatchEvent(e) : e in (null != t) ? t[e]() : "on" + e in (null != t) ? t["on" + e]() : void 0
            }, t.prototype.addEvent = function(t, e, i) {
                return null != t.addEventListener ? t.addEventListener(e, i, !1) : null != t.attachEvent ? t.attachEvent("on" + e, i) : t[e] = i
            }, t.prototype.removeEvent = function(t, e, i) {
                return null != t.removeEventListener ? t.removeEventListener(e, i, !1) : null != t.detachEvent ? t.detachEvent("on" + e, i) : delete t[e]
            }, t.prototype.innerHeight = function() {
                return "innerHeight" in window ? window.innerHeight : document.documentElement.clientHeight
            }, t
        }(), i = this.WeakMap || this.MozWeakMap || (i = function() {
            function t() {
                this.keys = [], this.values = []
            }
            return t.prototype.get = function(t) {
                var e, i, s, n, o;
                for (o = this.keys, e = s = 0, n = o.length; n > s; e = ++s)
                    if (i = o[e], i === t) return this.values[e]
            }, t.prototype.set = function(t, e) {
                var i, s, n, o, r;
                for (r = this.keys, i = n = 0, o = r.length; o > n; i = ++n)
                    if (s = r[i], s === t) return void(this.values[i] = e);
                return this.keys.push(t), this.values.push(e)
            }, t
        }()), t = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (t = function() {
            function t() {
                "undefined" != typeof console && null !== console && console.warn("MutationObserver is not supported by your browser."), "undefined" != typeof console && null !== console && console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")
            }
            return t.notSupported = !0, t.prototype.observe = function() {}, t
        }()), s = this.getComputedStyle || function(t) {
            return this.getPropertyValue = function(e) {
                var i;
                return "float" === e && (e = "styleFloat"), n.test(e) && e.replace(n, function(t, e) {
                    return e.toUpperCase()
                }), (null != (i = t.currentStyle) ? i[e] : void 0) || null
            }, this
        }, n = /(\-([a-z]){1})/g, this.WOW = function() {
            function n(t) {
                null == t && (t = {}), this.scrollCallback = o(this.scrollCallback, this), this.scrollHandler = o(this.scrollHandler, this), this.resetAnimation = o(this.resetAnimation, this), this.start = o(this.start, this), this.scrolled = !0, this.config = this.util().extend(t, this.defaults), null != t.scrollContainer && (this.config.scrollContainer = document.querySelector(t.scrollContainer)), this.animationNameCache = new i, this.wowEvent = this.util().createEvent(this.config.boxClass)
            }
            return n.prototype.defaults = {
                boxClass: "wow",
                animateClass: "animated",
                offset: 0,
                mobile: !0,
                live: !0,
                callback: null,
                scrollContainer: null
            }, n.prototype.init = function() {
                var t;
                return this.element = window.document.documentElement, "interactive" === (t = document.readyState) || "complete" === t ? this.start() : this.util().addEvent(document, "DOMContentLoaded", this.start), this.finished = []
            }, n.prototype.start = function() {
                var e, i, s, n;
                if (this.stopped = !1, this.boxes = function() {
                    var t, i, s, n;
                    for (s = this.element.querySelectorAll("." + this.config.boxClass), n = [], t = 0, i = s.length; i > t; t++) e = s[t], n.push(e);
                    return n
                }.call(this), this.all = function() {
                    var t, i, s, n;
                    for (s = this.boxes, n = [], t = 0, i = s.length; i > t; t++) e = s[t], n.push(e);
                    return n
                }.call(this), this.boxes.length)
                    if (this.disabled()) this.resetStyle();
                    else
                        for (n = this.boxes, i = 0, s = n.length; s > i; i++) e = n[i], this.applyStyle(e, !0);
                return this.disabled() || (this.util().addEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler), this.util().addEvent(window, "resize", this.scrollHandler), this.interval = setInterval(this.scrollCallback, 50)), this.config.live ? new t(function(t) {
                    return function(e) {
                        var i, s, n, o, r;
                        for (r = [], i = 0, s = e.length; s > i; i++) o = e[i], r.push(function() {
                            var t, e, i, s;
                            for (i = o.addedNodes || [], s = [], t = 0, e = i.length; e > t; t++) n = i[t], s.push(this.doSync(n));
                            return s
                        }.call(t));
                        return r
                    }
                }(this)).observe(document.body, {
                    childList: !0,
                    subtree: !0
                }) : void 0
            }, n.prototype.stop = function() {
                return this.stopped = !0, this.util().removeEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler), this.util().removeEvent(window, "resize", this.scrollHandler), null != this.interval ? clearInterval(this.interval) : void 0
            }, n.prototype.sync = function() {
                return t.notSupported ? this.doSync(this.element) : void 0
            }, n.prototype.doSync = function(t) {
                var e, i, s, n, o;
                if (null == t && (t = this.element), 1 === t.nodeType) {
                    for (t = t.parentNode || t, n = t.querySelectorAll("." + this.config.boxClass), o = [], i = 0, s = n.length; s > i; i++) e = n[i], r.call(this.all, e) < 0 ? (this.boxes.push(e), this.all.push(e), this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(e, !0), o.push(this.scrolled = !0)) : o.push(void 0);
                    return o
                }
            }, n.prototype.show = function(t) {
                return this.applyStyle(t), t.className = t.className + " " + this.config.animateClass, null != this.config.callback && this.config.callback(t), this.util().emitEvent(t, this.wowEvent), this.util().addEvent(t, "animationend", this.resetAnimation), this.util().addEvent(t, "oanimationend", this.resetAnimation), this.util().addEvent(t, "webkitAnimationEnd", this.resetAnimation), this.util().addEvent(t, "MSAnimationEnd", this.resetAnimation), t
            }, n.prototype.applyStyle = function(t, e) {
                var i, s, n;
                return s = t.getAttribute("data-wow-duration"), i = t.getAttribute("data-wow-delay"), n = t.getAttribute("data-wow-iteration"), this.animate(function(o) {
                    return function() {
                        return o.customStyle(t, e, s, i, n)
                    }
                }(this))
            }, n.prototype.animate = function() {
                return "requestAnimationFrame" in window ? function(t) {
                    return window.requestAnimationFrame(t)
                } : function(t) {
                    return t()
                }
            }(), n.prototype.resetStyle = function() {
                var t, e, i, s, n;
                for (s = this.boxes, n = [], e = 0, i = s.length; i > e; e++) t = s[e], n.push(t.style.visibility = "visible");
                return n
            }, n.prototype.resetAnimation = function(t) {
                var e;
                return t.type.toLowerCase().indexOf("animationend") >= 0 ? (e = t.target || t.srcElement, e.className = e.className.replace(this.config.animateClass, "").trim()) : void 0
            }, n.prototype.customStyle = function(t, e, i, s, n) {
                return e && this.cacheAnimationName(t), t.style.visibility = e ? "hidden" : "visible", i && this.vendorSet(t.style, {
                    animationDuration: i
                }), s && this.vendorSet(t.style, {
                    animationDelay: s
                }), n && this.vendorSet(t.style, {
                    animationIterationCount: n
                }), this.vendorSet(t.style, {
                    animationName: e ? "none" : this.cachedAnimationName(t)
                }), t
            }, n.prototype.vendors = ["moz", "webkit"], n.prototype.vendorSet = function(t, e) {
                var i, s, n, o;
                s = [];
                for (i in e) n = e[i], t["" + i] = n, s.push(function() {
                    var e, s, r, a;
                    for (r = this.vendors, a = [], e = 0, s = r.length; s > e; e++) o = r[e], a.push(t["" + o + i.charAt(0).toUpperCase() + i.substr(1)] = n);
                    return a
                }.call(this));
                return s
            }, n.prototype.vendorCSS = function(t, e) {
                var i, n, o, r, a, l;
                for (a = s(t), r = a.getPropertyCSSValue(e), o = this.vendors, i = 0, n = o.length; n > i; i++) l = o[i], r = r || a.getPropertyCSSValue("-" + l + "-" + e);
                return r
            }, n.prototype.animationName = function(t) {
                var e;
                try {
                    e = this.vendorCSS(t, "animation-name").cssText
                } catch (i) {
                    e = s(t).getPropertyValue("animation-name")
                }
                return "none" === e ? "" : e
            }, n.prototype.cacheAnimationName = function(t) {
                return this.animationNameCache.set(t, this.animationName(t))
            }, n.prototype.cachedAnimationName = function(t) {
                return this.animationNameCache.get(t)
            }, n.prototype.scrollHandler = function() {
                return this.scrolled = !0
            }, n.prototype.scrollCallback = function() {
                var t;
                return !this.scrolled || (this.scrolled = !1, this.boxes = function() {
                    var e, i, s, n;
                    for (s = this.boxes, n = [], e = 0, i = s.length; i > e; e++) t = s[e], t && (this.isVisible(t) ? this.show(t) : n.push(t));
                    return n
                }.call(this), this.boxes.length || this.config.live) ? void 0 : this.stop()
            }, n.prototype.offsetTop = function(t) {
                for (var e; void 0 === t.offsetTop;) t = t.parentNode;
                for (e = t.offsetTop; t = t.offsetParent;) e += t.offsetTop;
                return e
            }, n.prototype.isVisible = function(t) {
                var e, i, s, n, o;
                return i = t.getAttribute("data-wow-offset") || this.config.offset, o = this.config.scrollContainer && this.config.scrollContainer.scrollTop || window.pageYOffset, n = o + Math.min(this.element.clientHeight, this.util().innerHeight()) - i, s = this.offsetTop(t), e = s + t.clientHeight, n >= s && e >= o
            }, n.prototype.util = function() {
                return null != this._util ? this._util : this._util = new e
            }, n.prototype.disabled = function() {
                return !this.config.mobile && this.util().isMobile(navigator.userAgent)
            }, n
        }()
    }.call(this),
    function(t) {
        "use strict";
        t.fn.meanmenu = function(e) {
            var i = {
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
            e = t.extend(i, e);
            var s = window.innerWidth || document.documentElement.clientWidth;
            return this.each(function() {
                var t = e.meanMenuTarget,
                    i = e.meanMenuContainer,
                    n = e.meanMenuClose,
                    o = e.meanMenuCloseSize,
                    r = e.meanMenuOpen,
                    a = e.meanRevealPosition,
                    l = e.meanRevealPositionDistance,
                    c = e.meanRevealColour,
                    d = e.meanScreenWidth,
                    u = e.meanNavPush,
                    h = ".meanmenu-reveal",
                    p = e.meanShowChildren,
                    f = e.meanExpandableChildren,
                    m = e.meanExpand,
                    g = e.meanContract,
                    v = e.meanRemoveAttrs,
                    _ = e.onePage,
                    y = e.meanDisplay,
                    w = e.removeElements,
                    b = !1;
                (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/Blackberry/i) || navigator.userAgent.match(/Windows Phone/i)) && (b = !0), (navigator.userAgent.match(/MSIE 8/i) || navigator.userAgent.match(/MSIE 7/i)) && jQuery("html").css("overflow-y", "scroll");
                var k = "",
                    x = function() {
                        if ("center" === a) {
                            var t = window.innerWidth || document.documentElement.clientWidth,
                                e = t / 2 - 22 + "px";
                            k = "left:" + e + ";right:auto;", b ? jQuery(".meanmenu-reveal").animate({
                                left: e
                            }) : jQuery(".meanmenu-reveal").css("left", e)
                        }
                    },
                    S = !1,
                    C = !1;
                "right" === a && (k = "right:" + l + ";left:auto;"), "left" === a && (k = "left:" + l + ";right:auto;"), x();
                var T = "",
                    $ = function() {
                        jQuery(T).is(".meanmenu-reveal.meanclose") ? T.html(n) : T.html(r)
                    },
                    E = function() {
                        jQuery(".mean-bar,.mean-push").remove(), jQuery(i).removeClass("mean-container"), jQuery(t).css("display", y), S = !1, C = !1, jQuery(w).removeClass("mean-remove")
                    },
                    A = function() {
                        var e = "background:" + c + ";color:" + c + ";" + k;
                        if (d >= s) {
                            jQuery(w).addClass("mean-remove"), C = !0, jQuery(i).addClass("mean-container"), jQuery(".mean-container").prepend('<div class="mean-bar"><a href="#nav" class="meanmenu-reveal" style="' + e + '">Show Navigation</a><nav class="mean-nav"></nav></div>');
                            var n = jQuery(t).html();
                            jQuery(".mean-nav").html(n), v && jQuery("nav.mean-nav ul, nav.mean-nav ul *").each(function() {
                                jQuery(this).is(".mean-remove") ? jQuery(this).attr("class", "mean-remove") : jQuery(this).removeAttr("class"), jQuery(this).removeAttr("id")
                            }), jQuery(t).before('<div class="mean-push" />'), jQuery(".mean-push").css("margin-top", u), jQuery(t).hide(), jQuery(".meanmenu-reveal").show(), jQuery(h).html(r), T = jQuery(h), jQuery(".mean-nav ul").hide(), p ? f ? (jQuery(".mean-nav ul ul").each(function() {
                                jQuery(this).children().length && jQuery(this, "li:first").parent().append('<a class="mean-expand" href="#" style="font-size: ' + o + '">' + m + "</a>")
                            }), jQuery(".mean-expand").on("click", function(t) {
                                t.preventDefault(), jQuery(this).hasClass("mean-clicked") ? (jQuery(this).text(m), jQuery(this).prev("ul").slideUp(300, function() {})) : (jQuery(this).text(g), jQuery(this).prev("ul").slideDown(300, function() {})), jQuery(this).toggleClass("mean-clicked")
                            })) : jQuery(".mean-nav ul ul").show() : jQuery(".mean-nav ul ul").hide(), jQuery(".mean-nav ul li").last().addClass("mean-last"), T.removeClass("meanclose"), jQuery(T).click(function(t) {
                                t.preventDefault(), S === !1 ? (T.css("text-align", "center"), T.css("text-indent", "0"), T.css("font-size", o), jQuery(".mean-nav ul:first").slideDown(), S = !0) : (jQuery(".mean-nav ul:first").slideUp(), S = !1), T.toggleClass("meanclose"), $(), jQuery(w).addClass("mean-remove")
                            }), _ && jQuery(".mean-nav ul > li > a:first-child").on("click", function() {
                                jQuery(".mean-nav ul:first").slideUp(), S = !1, jQuery(T).toggleClass("meanclose").html(r)
                            })
                        } else E()
                    };
                b || jQuery(window).resize(function() {
                    s = window.innerWidth || document.documentElement.clientWidth, s > d, E(), d >= s ? (A(), x()) : E()
                }), jQuery(window).resize(function() {
                    s = window.innerWidth || document.documentElement.clientWidth, b ? (x(), d >= s ? C === !1 && A() : E()) : (E(), d >= s && (A(), x()))
                }), A()
            })
        }
    }(jQuery),
    function() {
        var t, e, i, s, n, o = {}.hasOwnProperty,
            r = function(t, e) {
                function i() {
                    this.constructor = t
                }
                for (var s in e) o.call(e, s) && (t[s] = e[s]);
                return i.prototype = e.prototype, t.prototype = new i, t.__super__ = e.prototype, t
            };
        s = function() {
            function t() {
                this.options_index = 0, this.parsed = []
            }
            return t.prototype.add_node = function(t) {
                return "OPTGROUP" === t.nodeName.toUpperCase() ? this.add_group(t) : this.add_option(t)
            }, t.prototype.add_group = function(t) {
                var e, i, s, n, o, r;
                for (e = this.parsed.length, this.parsed.push({
                    array_index: e,
                    group: !0,
                    label: this.escapeExpression(t.label),
                    title: t.title ? t.title : void 0,
                    children: 0,
                    disabled: t.disabled,
                    classes: t.className
                }), o = t.childNodes, r = [], s = 0, n = o.length; n > s; s++) i = o[s], r.push(this.add_option(i, e, t.disabled));
                return r
            }, t.prototype.add_option = function(t, e, i) {
                return "OPTION" === t.nodeName.toUpperCase() ? ("" !== t.text ? (null != e && (this.parsed[e].children += 1), this.parsed.push({
                    array_index: this.parsed.length,
                    options_index: this.options_index,
                    value: t.value,
                    text: t.text,
                    html: t.innerHTML,
                    title: t.title ? t.title : void 0,
                    selected: t.selected,
                    disabled: i === !0 ? i : t.disabled,
                    group_array_index: e,
                    group_label: null != e ? this.parsed[e].label : null,
                    classes: t.className,
                    style: t.style.cssText
                })) : this.parsed.push({
                    array_index: this.parsed.length,
                    options_index: this.options_index,
                    empty: !0
                }), this.options_index += 1) : void 0
            }, t.prototype.escapeExpression = function(t) {
                var e, i;
                return null == t || t === !1 ? "" : /[\&\<\>\"\'\`]/.test(t) ? (e = {
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#x27;",
                    "`": "&#x60;"
                }, i = /&(?!\w+;)|[\<\>\"\'\`]/g, t.replace(i, function(t) {
                    return e[t] || "&amp;"
                })) : t
            }, t
        }(), s.select_to_array = function(t) {
            var e, i, n, o, r;
            for (i = new s, r = t.childNodes, n = 0, o = r.length; o > n; n++) e = r[n], i.add_node(e);
            return i.parsed
        }, e = function() {
            function t(e, i) {
                this.form_field = e, this.options = null != i ? i : {}, t.browser_is_supported() && (this.is_multiple = this.form_field.multiple, this.set_default_text(), this.set_default_values(), this.setup(), this.set_up_html(), this.register_observers(), this.on_ready())
            }
            return t.prototype.set_default_values = function() {
                var t = this;
                return this.click_test_action = function(e) {
                    return t.test_active_click(e)
                }, this.activate_action = function(e) {
                    return t.activate_field(e)
                }, this.active_field = !1, this.mouse_on_container = !1, this.results_showing = !1, this.result_highlighted = null, this.allow_single_deselect = null != this.options.allow_single_deselect && null != this.form_field.options[0] && "" === this.form_field.options[0].text ? this.options.allow_single_deselect : !1, this.disable_search_threshold = this.options.disable_search_threshold || 0, this.disable_search = this.options.disable_search || !1, this.enable_split_word_search = null != this.options.enable_split_word_search ? this.options.enable_split_word_search : !0, this.group_search = null != this.options.group_search ? this.options.group_search : !0, this.search_contains = this.options.search_contains || !1, this.single_backstroke_delete = null != this.options.single_backstroke_delete ? this.options.single_backstroke_delete : !0, this.max_selected_options = this.options.max_selected_options || 1 / 0, this.inherit_select_classes = this.options.inherit_select_classes || !1, this.display_selected_options = null != this.options.display_selected_options ? this.options.display_selected_options : !0, this.display_disabled_options = null != this.options.display_disabled_options ? this.options.display_disabled_options : !0, this.include_group_label_in_selected = this.options.include_group_label_in_selected || !1, this.max_shown_results = this.options.max_shown_results || Number.POSITIVE_INFINITY
            }, t.prototype.set_default_text = function() {
                return this.form_field.getAttribute("data-placeholder") ? this.default_text = this.form_field.getAttribute("data-placeholder") : this.is_multiple ? this.default_text = this.options.placeholder_text_multiple || this.options.placeholder_text || t.default_multiple_text : this.default_text = this.options.placeholder_text_single || this.options.placeholder_text || t.default_single_text, this.results_none_found = this.form_field.getAttribute("data-no_results_text") || this.options.no_results_text || t.default_no_result_text
            }, t.prototype.choice_label = function(t) {
                return this.include_group_label_in_selected && null != t.group_label ? "<b class='group-name'>" + t.group_label + "</b>" + t.html : t.html
            }, t.prototype.mouse_enter = function() {
                return this.mouse_on_container = !0
            }, t.prototype.mouse_leave = function() {
                return this.mouse_on_container = !1
            }, t.prototype.input_focus = function(t) {
                var e = this;
                if (this.is_multiple) {
                    if (!this.active_field) return setTimeout(function() {
                        return e.container_mousedown()
                    }, 50)
                } else if (!this.active_field) return this.activate_field()
            }, t.prototype.input_blur = function(t) {
                var e = this;
                return this.mouse_on_container ? void 0 : (this.active_field = !1, setTimeout(function() {
                    return e.blur_test()
                }, 100))
            }, t.prototype.results_option_build = function(t) {
                var e, i, s, n, o, r, a;
                for (e = "", n = 0, a = this.results_data, o = 0, r = a.length; r > o && (i = a[o], s = "", s = i.group ? this.result_add_group(i) : this.result_add_option(i), "" !== s && (n++, e += s), (null != t ? t.first : void 0) && (i.selected && this.is_multiple ? this.choice_build(i) : i.selected && !this.is_multiple && this.single_set_selected_text(this.choice_label(i))), !(n >= this.max_shown_results)); o++);
                return e
            }, t.prototype.result_add_option = function(t) {
                var e, i;
                return t.search_match && this.include_option_in_results(t) ? (e = [], t.disabled || t.selected && this.is_multiple || e.push("active-result"), !t.disabled || t.selected && this.is_multiple || e.push("disabled-result"), t.selected && e.push("result-selected"), null != t.group_array_index && e.push("group-option"), "" !== t.classes && e.push(t.classes), i = document.createElement("li"), i.className = e.join(" "), i.style.cssText = t.style, i.setAttribute("data-option-array-index", t.array_index), i.innerHTML = t.search_text, t.title && (i.title = t.title), this.outerHTML(i)) : ""
            }, t.prototype.result_add_group = function(t) {
                var e, i;
                return (t.search_match || t.group_match) && t.active_options > 0 ? (e = [], e.push("group-result"), t.classes && e.push(t.classes), i = document.createElement("li"), i.className = e.join(" "), i.innerHTML = t.search_text, t.title && (i.title = t.title), this.outerHTML(i)) : ""
            }, t.prototype.results_update_field = function() {
                return this.set_default_text(), this.is_multiple || this.results_reset_cleanup(), this.result_clear_highlight(), this.results_build(), this.results_showing ? this.winnow_results() : void 0
            }, t.prototype.reset_single_select_options = function() {
                var t, e, i, s, n;
                for (s = this.results_data, n = [], e = 0, i = s.length; i > e; e++) t = s[e], t.selected ? n.push(t.selected = !1) : n.push(void 0);
                return n
            }, t.prototype.results_toggle = function() {
                return this.results_showing ? this.results_hide() : this.results_show()
            }, t.prototype.results_search = function(t) {
                return this.results_showing ? this.winnow_results() : this.results_show()
            }, t.prototype.winnow_results = function() {
                var t, e, i, s, n, o, r, a, l, c, d, u;
                for (this.no_results_clear(), s = 0, o = this.get_search_text(), t = o.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"), l = new RegExp(t, "i"), i = this.get_search_regex(t), u = this.results_data, c = 0, d = u.length; d > c; c++) e = u[c], e.search_match = !1, n = null, this.include_option_in_results(e) && (e.group && (e.group_match = !1, e.active_options = 0), null != e.group_array_index && this.results_data[e.group_array_index] && (n = this.results_data[e.group_array_index], 0 === n.active_options && n.search_match && (s += 1), n.active_options += 1), e.search_text = e.group ? e.label : e.html, (!e.group || this.group_search) && (e.search_match = this.search_string_match(e.search_text, i), e.search_match && !e.group && (s += 1), e.search_match ? (o.length && (r = e.search_text.search(l), a = e.search_text.substr(0, r + o.length) + "</em>" + e.search_text.substr(r + o.length), e.search_text = a.substr(0, r) + "<em>" + a.substr(r)), null != n && (n.group_match = !0)) : null != e.group_array_index && this.results_data[e.group_array_index].search_match && (e.search_match = !0)));
                return this.result_clear_highlight(), 1 > s && o.length ? (this.update_results_content(""), this.no_results(o)) : (this.update_results_content(this.results_option_build()), this.winnow_results_set_highlight())
            }, t.prototype.get_search_regex = function(t) {
                var e;
                return e = this.search_contains ? "" : "^", new RegExp(e + t, "i")
            }, t.prototype.search_string_match = function(t, e) {
                var i, s, n, o;
                if (e.test(t)) return !0;
                if (this.enable_split_word_search && (t.indexOf(" ") >= 0 || 0 === t.indexOf("[")) && (s = t.replace(/\[|\]/g, "").split(" "), s.length))
                    for (n = 0, o = s.length; o > n; n++)
                        if (i = s[n], e.test(i)) return !0
            }, t.prototype.choices_count = function() {
                var t, e, i, s;
                if (null != this.selected_option_count) return this.selected_option_count;
                for (this.selected_option_count = 0, s = this.form_field.options, e = 0, i = s.length; i > e; e++) t = s[e], t.selected && (this.selected_option_count += 1);
                return this.selected_option_count
            }, t.prototype.choices_click = function(t) {
                return t.preventDefault(), this.results_showing || this.is_disabled ? void 0 : this.results_show()
            }, t.prototype.keyup_checker = function(t) {
                var e, i;
                switch (e = null != (i = t.which) ? i : t.keyCode, this.search_field_scale(), e) {
                    case 8:
                        if (this.is_multiple && this.backstroke_length < 1 && this.choices_count() > 0) return this.keydown_backstroke();
                        if (!this.pending_backstroke) return this.result_clear_highlight(), this.results_search();
                        break;
                    case 13:
                        if (t.preventDefault(), this.results_showing) return this.result_select(t);
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
            }, t.prototype.clipboard_event_checker = function(t) {
                var e = this;
                return setTimeout(function() {
                    return e.results_search()
                }, 50)
            }, t.prototype.container_width = function() {
                return null != this.options.width ? this.options.width : "" + this.form_field.offsetWidth + "px"
            }, t.prototype.include_option_in_results = function(t) {
                return this.is_multiple && !this.display_selected_options && t.selected ? !1 : !this.display_disabled_options && t.disabled ? !1 : t.empty ? !1 : !0
            }, t.prototype.search_results_touchstart = function(t) {
                return this.touch_started = !0, this.search_results_mouseover(t)
            }, t.prototype.search_results_touchmove = function(t) {
                return this.touch_started = !1, this.search_results_mouseout(t)
            }, t.prototype.search_results_touchend = function(t) {
                return this.touch_started ? this.search_results_mouseup(t) : void 0
            }, t.prototype.outerHTML = function(t) {
                var e;
                return t.outerHTML ? t.outerHTML : (e = document.createElement("div"), e.appendChild(t), e.innerHTML)
            }, t.browser_is_supported = function() {
                return /iP(od|hone)/i.test(window.navigator.userAgent) ? !1 : /Android/i.test(window.navigator.userAgent) && /Mobile/i.test(window.navigator.userAgent) ? !1 : /IEMobile/i.test(window.navigator.userAgent) ? !1 : /Windows Phone/i.test(window.navigator.userAgent) ? !1 : /BlackBerry/i.test(window.navigator.userAgent) ? !1 : /BB10/i.test(window.navigator.userAgent) ? !1 : "Microsoft Internet Explorer" === window.navigator.appName ? document.documentMode >= 8 : !0
            }, t.default_multiple_text = "Select Some Options", t.default_single_text = "Select an Option", t.default_no_result_text = "No results match", t
        }(), t = jQuery, t.fn.extend({
            chosen: function(s) {
                return e.browser_is_supported() ? this.each(function(e) {
                    var n, o;
                    return n = t(this), o = n.data("chosen"), "destroy" === s ? void(o instanceof i && o.destroy()) : void(o instanceof i || n.data("chosen", new i(this, s)))
                }) : this
            }
        }), i = function(e) {
            function i() {
                return n = i.__super__.constructor.apply(this, arguments)
            }
            return r(i, e), i.prototype.setup = function() {
                return this.form_field_jq = t(this.form_field), this.current_selectedIndex = this.form_field.selectedIndex, this.is_rtl = this.form_field_jq.hasClass("chosen-rtl")
            }, i.prototype.set_up_html = function() {
                var e, i;
                return e = ["chosen-container"], e.push("chosen-container-" + (this.is_multiple ? "multi" : "single")), this.inherit_select_classes && this.form_field.className && e.push(this.form_field.className), this.is_rtl && e.push("chosen-rtl"), i = {
                    "class": e.join(" "),
                    style: "width: " + this.container_width() + ";",
                    title: this.form_field.title
                }, this.form_field.id.length && (i.id = this.form_field.id.replace(/[^\w]/g, "_") + "_chosen"), this.container = t("<div />", i), this.is_multiple ? this.container.html('<ul class="chosen-choices"><li class="search-field"><input type="text" value="' + this.default_text + '" class="default" autocomplete="off" style="width:25px;" /></li></ul><div class="chosen-drop"><ul class="chosen-results"></ul></div>') : this.container.html('<a class="chosen-single chosen-default"><span>' + this.default_text + '</span><div><b></b></div></a><div class="chosen-drop"><div class="chosen-search"><input type="text" autocomplete="off" /></div><ul class="chosen-results"></ul></div>'), this.form_field_jq.hide().after(this.container), this.dropdown = this.container.find("div.chosen-drop").first(), this.search_field = this.container.find("input").first(), this.search_results = this.container.find("ul.chosen-results").first(), this.search_field_scale(), this.search_no_results = this.container.find("li.no-results").first(), this.is_multiple ? (this.search_choices = this.container.find("ul.chosen-choices").first(), this.search_container = this.container.find("li.search-field").first()) : (this.search_container = this.container.find("div.chosen-search").first(), this.selected_item = this.container.find(".chosen-single").first()), this.results_build(), this.set_tab_index(), this.set_label_behavior()
            }, i.prototype.on_ready = function() {
                return this.form_field_jq.trigger("chosen:ready", {
                    chosen: this
                })
            }, i.prototype.register_observers = function() {
                var t = this;
                return this.container.bind("touchstart.chosen", function(e) {
                    return t.container_mousedown(e), e.preventDefault()
                }), this.container.bind("touchend.chosen", function(e) {
                    return t.container_mouseup(e), e.preventDefault()
                }), this.container.bind("mousedown.chosen", function(e) {
                    t.container_mousedown(e)
                }), this.container.bind("mouseup.chosen", function(e) {
                    t.container_mouseup(e)
                }), this.container.bind("mouseenter.chosen", function(e) {
                    t.mouse_enter(e)
                }), this.container.bind("mouseleave.chosen", function(e) {
                    t.mouse_leave(e)
                }), this.search_results.bind("mouseup.chosen", function(e) {
                    t.search_results_mouseup(e)
                }), this.search_results.bind("mouseover.chosen", function(e) {
                    t.search_results_mouseover(e)
                }), this.search_results.bind("mouseout.chosen", function(e) {
                    t.search_results_mouseout(e)
                }), this.search_results.bind("mousewheel.chosen DOMMouseScroll.chosen", function(e) {
                    t.search_results_mousewheel(e)
                }), this.search_results.bind("touchstart.chosen", function(e) {
                    t.search_results_touchstart(e)
                }), this.search_results.bind("touchmove.chosen", function(e) {
                    t.search_results_touchmove(e)
                }), this.search_results.bind("touchend.chosen", function(e) {
                    t.search_results_touchend(e)
                }), this.form_field_jq.bind("chosen:updated.chosen", function(e) {
                    t.results_update_field(e)
                }), this.form_field_jq.bind("chosen:activate.chosen", function(e) {
                    t.activate_field(e)
                }), this.form_field_jq.bind("chosen:open.chosen", function(e) {
                    t.container_mousedown(e)
                }), this.form_field_jq.bind("chosen:close.chosen", function(e) {
                    t.input_blur(e)
                }), this.search_field.bind("blur.chosen", function(e) {
                    t.input_blur(e)
                }), this.search_field.bind("keyup.chosen", function(e) {
                    t.keyup_checker(e)
                }), this.search_field.bind("keydown.chosen", function(e) {
                    t.keydown_checker(e)
                }), this.search_field.bind("focus.chosen", function(e) {
                    t.input_focus(e)
                }), this.search_field.bind("cut.chosen", function(e) {
                    t.clipboard_event_checker(e)
                }), this.search_field.bind("paste.chosen", function(e) {
                    t.clipboard_event_checker(e)
                }), this.is_multiple ? this.search_choices.bind("click.chosen", function(e) {
                    t.choices_click(e)
                }) : this.container.bind("click.chosen", function(t) {
                    t.preventDefault()
                })
            }, i.prototype.destroy = function() {
                return t(this.container[0].ownerDocument).unbind("click.chosen", this.click_test_action), this.search_field[0].tabIndex && (this.form_field_jq[0].tabIndex = this.search_field[0].tabIndex), this.container.remove(), this.form_field_jq.removeData("chosen"), this.form_field_jq.show()
            }, i.prototype.search_field_disabled = function() {
                return this.is_disabled = this.form_field_jq[0].disabled, this.is_disabled ? (this.container.addClass("chosen-disabled"), this.search_field[0].disabled = !0, this.is_multiple || this.selected_item.unbind("focus.chosen", this.activate_action), this.close_field()) : (this.container.removeClass("chosen-disabled"), this.search_field[0].disabled = !1, this.is_multiple ? void 0 : this.selected_item.bind("focus.chosen", this.activate_action))
            }, i.prototype.container_mousedown = function(e) {
                return this.is_disabled || (e && "mousedown" === e.type && !this.results_showing && e.preventDefault(), null != e && t(e.target).hasClass("search-choice-close")) ? void 0 : (this.active_field ? this.is_multiple || !e || t(e.target)[0] !== this.selected_item[0] && !t(e.target).parents("a.chosen-single").length || (e.preventDefault(), this.results_toggle()) : (this.is_multiple && this.search_field.val(""), t(this.container[0].ownerDocument).bind("click.chosen", this.click_test_action), this.results_show()), this.activate_field())
            }, i.prototype.container_mouseup = function(t) {
                return "ABBR" !== t.target.nodeName || this.is_disabled ? void 0 : this.results_reset(t)
            }, i.prototype.search_results_mousewheel = function(t) {
                var e;
                return t.originalEvent && (e = t.originalEvent.deltaY || -t.originalEvent.wheelDelta || t.originalEvent.detail), null != e ? (t.preventDefault(), "DOMMouseScroll" === t.type && (e = 40 * e), this.search_results.scrollTop(e + this.search_results.scrollTop())) : void 0
            }, i.prototype.blur_test = function(t) {
                return !this.active_field && this.container.hasClass("chosen-container-active") ? this.close_field() : void 0
            }, i.prototype.close_field = function() {
                return t(this.container[0].ownerDocument).unbind("click.chosen", this.click_test_action), this.active_field = !1, this.results_hide(), this.container.removeClass("chosen-container-active"), this.clear_backstroke(), this.show_search_field_default(), this.search_field_scale()
            }, i.prototype.activate_field = function() {
                return this.container.addClass("chosen-container-active"), this.active_field = !0, this.search_field.val(this.search_field.val()), this.search_field.focus()
            }, i.prototype.test_active_click = function(e) {
                var i;
                return i = t(e.target).closest(".chosen-container"), i.length && this.container[0] === i[0] ? this.active_field = !0 : this.close_field()
            }, i.prototype.results_build = function() {
                return this.parsing = !0, this.selected_option_count = null, this.results_data = s.select_to_array(this.form_field), this.is_multiple ? this.search_choices.find("li.search-choice").remove() : this.is_multiple || (this.single_set_selected_text(), this.disable_search || this.form_field.options.length <= this.disable_search_threshold ? (this.search_field[0].readOnly = !0,
                    this.container.addClass("chosen-container-single-nosearch")) : (this.search_field[0].readOnly = !1, this.container.removeClass("chosen-container-single-nosearch"))), this.update_results_content(this.results_option_build({
                    first: !0
                })), this.search_field_disabled(), this.show_search_field_default(), this.search_field_scale(), this.parsing = !1
            }, i.prototype.result_do_highlight = function(t) {
                var e, i, s, n, o;
                if (t.length) {
                    if (this.result_clear_highlight(), this.result_highlight = t, this.result_highlight.addClass("highlighted"), s = parseInt(this.search_results.css("maxHeight"), 10), o = this.search_results.scrollTop(), n = s + o, i = this.result_highlight.position().top + this.search_results.scrollTop(), e = i + this.result_highlight.outerHeight(), e >= n) return this.search_results.scrollTop(e - s > 0 ? e - s : 0);
                    if (o > i) return this.search_results.scrollTop(i)
                }
            }, i.prototype.result_clear_highlight = function() {
                return this.result_highlight && this.result_highlight.removeClass("highlighted"), this.result_highlight = null
            }, i.prototype.results_show = function() {
                return this.is_multiple && this.max_selected_options <= this.choices_count() ? (this.form_field_jq.trigger("chosen:maxselected", {
                    chosen: this
                }), !1) : (this.container.addClass("chosen-with-drop"), this.results_showing = !0, this.search_field.focus(), this.search_field.val(this.search_field.val()), this.winnow_results(), this.form_field_jq.trigger("chosen:showing_dropdown", {
                    chosen: this
                }))
            }, i.prototype.update_results_content = function(t) {
                return this.search_results.html(t)
            }, i.prototype.results_hide = function() {
                return this.results_showing && (this.result_clear_highlight(), this.container.removeClass("chosen-with-drop"), this.form_field_jq.trigger("chosen:hiding_dropdown", {
                    chosen: this
                })), this.results_showing = !1
            }, i.prototype.set_tab_index = function(t) {
                var e;
                return this.form_field.tabIndex ? (e = this.form_field.tabIndex, this.form_field.tabIndex = -1, this.search_field[0].tabIndex = e) : void 0
            }, i.prototype.set_label_behavior = function() {
                var e = this;
                return this.form_field_label = this.form_field_jq.parents("label"), !this.form_field_label.length && this.form_field.id.length && (this.form_field_label = t("label[for='" + this.form_field.id + "']")), this.form_field_label.length > 0 ? this.form_field_label.bind("click.chosen", function(t) {
                    return e.is_multiple ? e.container_mousedown(t) : e.activate_field()
                }) : void 0
            }, i.prototype.show_search_field_default = function() {
                return this.is_multiple && this.choices_count() < 1 && !this.active_field ? (this.search_field.val(this.default_text), this.search_field.addClass("default")) : (this.search_field.val(""), this.search_field.removeClass("default"))
            }, i.prototype.search_results_mouseup = function(e) {
                var i;
                return i = t(e.target).hasClass("active-result") ? t(e.target) : t(e.target).parents(".active-result").first(), i.length ? (this.result_highlight = i, this.result_select(e), this.search_field.focus()) : void 0
            }, i.prototype.search_results_mouseover = function(e) {
                var i;
                return i = t(e.target).hasClass("active-result") ? t(e.target) : t(e.target).parents(".active-result").first(), i ? this.result_do_highlight(i) : void 0
            }, i.prototype.search_results_mouseout = function(e) {
                return t(e.target).hasClass("active-result") ? this.result_clear_highlight() : void 0
            }, i.prototype.choice_build = function(e) {
                var i, s, n = this;
                return i = t("<li />", {
                    "class": "search-choice"
                }).html("<span>" + this.choice_label(e) + "</span>"), e.disabled ? i.addClass("search-choice-disabled") : (s = t("<a />", {
                    "class": "search-choice-close",
                    "data-option-array-index": e.array_index
                }), s.bind("click.chosen", function(t) {
                    return n.choice_destroy_link_click(t)
                }), i.append(s)), this.search_container.before(i)
            }, i.prototype.choice_destroy_link_click = function(e) {
                return e.preventDefault(), e.stopPropagation(), this.is_disabled ? void 0 : this.choice_destroy(t(e.target))
            }, i.prototype.choice_destroy = function(t) {
                return this.result_deselect(t[0].getAttribute("data-option-array-index")) ? (this.show_search_field_default(), this.is_multiple && this.choices_count() > 0 && this.search_field.val().length < 1 && this.results_hide(), t.parents("li").first().remove(), this.search_field_scale()) : void 0
            }, i.prototype.results_reset = function() {
                return this.reset_single_select_options(), this.form_field.options[0].selected = !0, this.single_set_selected_text(), this.show_search_field_default(), this.results_reset_cleanup(), this.form_field_jq.trigger("change"), this.active_field ? this.results_hide() : void 0
            }, i.prototype.results_reset_cleanup = function() {
                return this.current_selectedIndex = this.form_field.selectedIndex, this.selected_item.find("abbr").remove()
            }, i.prototype.result_select = function(t) {
                var e, i;
                return this.result_highlight ? (e = this.result_highlight, this.result_clear_highlight(), this.is_multiple && this.max_selected_options <= this.choices_count() ? (this.form_field_jq.trigger("chosen:maxselected", {
                    chosen: this
                }), !1) : (this.is_multiple ? e.removeClass("active-result") : this.reset_single_select_options(), e.addClass("result-selected"), i = this.results_data[e[0].getAttribute("data-option-array-index")], i.selected = !0, this.form_field.options[i.options_index].selected = !0, this.selected_option_count = null, this.is_multiple ? this.choice_build(i) : this.single_set_selected_text(this.choice_label(i)), (t.metaKey || t.ctrlKey) && this.is_multiple || this.results_hide(), this.show_search_field_default(), (this.is_multiple || this.form_field.selectedIndex !== this.current_selectedIndex) && this.form_field_jq.trigger("change", {
                    selected: this.form_field.options[i.options_index].value
                }), this.current_selectedIndex = this.form_field.selectedIndex, t.preventDefault(), this.search_field_scale())) : void 0
            }, i.prototype.single_set_selected_text = function(t) {
                return null == t && (t = this.default_text), t === this.default_text ? this.selected_item.addClass("chosen-default") : (this.single_deselect_control_build(), this.selected_item.removeClass("chosen-default")), this.selected_item.find("span").html(t)
            }, i.prototype.result_deselect = function(t) {
                var e;
                return e = this.results_data[t], this.form_field.options[e.options_index].disabled ? !1 : (e.selected = !1, this.form_field.options[e.options_index].selected = !1, this.selected_option_count = null, this.result_clear_highlight(), this.results_showing && this.winnow_results(), this.form_field_jq.trigger("change", {
                    deselected: this.form_field.options[e.options_index].value
                }), this.search_field_scale(), !0)
            }, i.prototype.single_deselect_control_build = function() {
                return this.allow_single_deselect ? (this.selected_item.find("abbr").length || this.selected_item.find("span").first().after('<abbr class="search-choice-close"></abbr>'), this.selected_item.addClass("chosen-single-with-deselect")) : void 0
            }, i.prototype.get_search_text = function() {
                return t("<div/>").text(t.trim(this.search_field.val())).html()
            }, i.prototype.winnow_results_set_highlight = function() {
                var t, e;
                return e = this.is_multiple ? [] : this.search_results.find(".result-selected.active-result"), t = e.length ? e.first() : this.search_results.find(".active-result").first(), null != t ? this.result_do_highlight(t) : void 0
            }, i.prototype.no_results = function(e) {
                var i;
                return i = t('<li class="no-results">' + this.results_none_found + ' "<span></span>"</li>'), i.find("span").first().html(e), this.search_results.append(i), this.form_field_jq.trigger("chosen:no_results", {
                    chosen: this
                })
            }, i.prototype.no_results_clear = function() {
                return this.search_results.find(".no-results").remove()
            }, i.prototype.keydown_arrow = function() {
                var t;
                return this.results_showing && this.result_highlight ? (t = this.result_highlight.nextAll("li.active-result").first()) ? this.result_do_highlight(t) : void 0 : this.results_show()
            }, i.prototype.keyup_arrow = function() {
                var t;
                return this.results_showing || this.is_multiple ? this.result_highlight ? (t = this.result_highlight.prevAll("li.active-result"), t.length ? this.result_do_highlight(t.first()) : (this.choices_count() > 0 && this.results_hide(), this.result_clear_highlight())) : void 0 : this.results_show()
            }, i.prototype.keydown_backstroke = function() {
                var t;
                return this.pending_backstroke ? (this.choice_destroy(this.pending_backstroke.find("a").first()), this.clear_backstroke()) : (t = this.search_container.siblings("li.search-choice").last(), t.length && !t.hasClass("search-choice-disabled") ? (this.pending_backstroke = t, this.single_backstroke_delete ? this.keydown_backstroke() : this.pending_backstroke.addClass("search-choice-focus")) : void 0)
            }, i.prototype.clear_backstroke = function() {
                return this.pending_backstroke && this.pending_backstroke.removeClass("search-choice-focus"), this.pending_backstroke = null
            }, i.prototype.keydown_checker = function(t) {
                var e, i;
                switch (e = null != (i = t.which) ? i : t.keyCode, this.search_field_scale(), 8 !== e && this.pending_backstroke && this.clear_backstroke(), e) {
                    case 8:
                        this.backstroke_length = this.search_field.val().length;
                        break;
                    case 9:
                        this.results_showing && !this.is_multiple && this.result_select(t), this.mouse_on_container = !1;
                        break;
                    case 13:
                        this.results_showing && t.preventDefault();
                        break;
                    case 32:
                        this.disable_search && t.preventDefault();
                        break;
                    case 38:
                        t.preventDefault(), this.keyup_arrow();
                        break;
                    case 40:
                        t.preventDefault(), this.keydown_arrow()
                }
            }, i.prototype.search_field_scale = function() {
                var e, i, s, n, o, r, a, l, c;
                if (this.is_multiple) {
                    for (s = 0, a = 0, o = "position:absolute; left: -1000px; top: -1000px; display:none;", r = ["font-size", "font-style", "font-weight", "font-family", "line-height", "text-transform", "letter-spacing"], l = 0, c = r.length; c > l; l++) n = r[l], o += n + ":" + this.search_field.css(n) + ";";
                    return e = t("<div />", {
                        style: o
                    }), e.text(this.search_field.val()), t("body").append(e), a = e.width() + 25, e.remove(), i = this.container.outerWidth(), a > i - 10 && (a = i - 10), this.search_field.css({
                        width: a + "px"
                    })
                }
            }, i
        }(e)
    }.call(this), ! function(t) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
}(function(t) {
    "use strict";

    function e(t) {
        if (t instanceof Date) return t;
        if (String(t).match(r)) return String(t).match(/^[0-9]*$/) && (t = Number(t)), String(t).match(/\-/) && (t = String(t).replace(/\-/g, "/")), new Date(t);
        throw new Error("Couldn't cast `" + t + "` to a date object.")
    }

    function i(t) {
        return function(e) {
            var i = e.match(/%(-|!)?[A-Z]{1}(:[^;]+;)?/gi);
            if (i)
                for (var n = 0, o = i.length; o > n; ++n) {
                    var r = i[n].match(/%(-|!)?([a-zA-Z]{1})(:[^;]+;)?/),
                        l = new RegExp(r[0]),
                        c = r[1] || "",
                        d = r[3] || "",
                        u = null;
                    r = r[2], a.hasOwnProperty(r) && (u = a[r], u = Number(t[u])), null !== u && ("!" === c && (u = s(d, u)), "" === c && 10 > u && (u = "0" + u.toString()), e = e.replace(l, u.toString()))
                }
            return e = e.replace(/%%/, "%")
        }
    }

    function s(t, e) {
        var i = "s",
            s = "";
        return t && (t = t.replace(/(:|;|\s)/gi, "").split(/\,/), 1 === t.length ? i = t[0] : (s = t[0], i = t[1])), 1 === Math.abs(e) ? s : i
    }
    var n = 100,
        o = [],
        r = [];
    r.push(/^[0-9]*$/.source), r.push(/([0-9]{1,2}\/){2}[0-9]{4}( [0-9]{1,2}(:[0-9]{2}){2})?/.source), r.push(/[0-9]{4}([\/\-][0-9]{1,2}){2}( [0-9]{1,2}(:[0-9]{2}){2})?/.source), r = new RegExp(r.join("|"));
    var a = {
            Y: "years",
            m: "months",
            w: "weeks",
            d: "days",
            D: "totalDays",
            H: "hours",
            M: "minutes",
            S: "seconds"
        },
        l = function(e, i, s) {
            this.el = e, this.$el = t(e), this.interval = null, this.offset = {}, this.instanceNumber = o.length, o.push(this), this.$el.data("countdown-instance", this.instanceNumber), s && (this.$el.on("update.countdown", s), this.$el.on("stoped.countdown", s), this.$el.on("finish.countdown", s)), this.setFinalDate(i), this.start()
        };
    t.extend(l.prototype, {
        start: function() {
            null !== this.interval && clearInterval(this.interval);
            var t = this;
            this.update(), this.interval = setInterval(function() {
                t.update.call(t)
            }, n)
        },
        stop: function() {
            clearInterval(this.interval), this.interval = null, this.dispatchEvent("stoped")
        },
        pause: function() {
            this.stop.call(this)
        },
        resume: function() {
            this.start.call(this)
        },
        remove: function() {
            this.stop(), o[this.instanceNumber] = null, delete this.$el.data().countdownInstance
        },
        setFinalDate: function(t) {
            this.finalDate = e(t)
        },
        update: function() {
            return 0 === this.$el.closest("html").length ? void this.remove() : (this.totalSecsLeft = this.finalDate.getTime() - (new Date).getTime(), this.totalSecsLeft = Math.ceil(this.totalSecsLeft / 1e3), this.totalSecsLeft = this.totalSecsLeft < 0 ? 0 : this.totalSecsLeft, this.offset = {
                seconds: this.totalSecsLeft % 60,
                minutes: Math.floor(this.totalSecsLeft / 60) % 60,
                hours: Math.floor(this.totalSecsLeft / 60 / 60) % 24,
                days: Math.floor(this.totalSecsLeft / 60 / 60 / 24) % 7,
                totalDays: Math.floor(this.totalSecsLeft / 60 / 60 / 24),
                weeks: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 7),
                months: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 30),
                years: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 365)
            }, void(0 === this.totalSecsLeft ? (this.stop(), this.dispatchEvent("finish")) : this.dispatchEvent("update")))
        },
        dispatchEvent: function(e) {
            var s = t.Event(e + ".countdown");
            s.finalDate = this.finalDate, s.offset = t.extend({}, this.offset), s.strftime = i(this.offset), this.$el.trigger(s)
        }
    }), t.fn.countdown = function() {
        var e = Array.prototype.slice.call(arguments, 0);
        return this.each(function() {
            var i = t(this).data("countdown-instance");
            if (void 0 !== i) {
                var s = o[i],
                    n = e[0];
                l.prototype.hasOwnProperty(n) ? s[n].apply(s, e.slice(1)) : null === String(n).match(/^[$A-Z_][0-9A-Z_$]*$/i) ? (s.setFinalDate.call(s, n), s.start()) : t.error("Method %s does not exist on jQuery.countdown".replace(/\%s/gi, n))
            } else new l(this, e[0], e[1])
        })
    }
}),
    function() {
        var t = [].indexOf || function(t) {
                for (var e = 0, i = this.length; i > e; e++)
                    if (e in this && this[e] === t) return e;
                return -1
            },
            e = [].slice;
        ! function(t, e) {
            return "function" == typeof define && define.amd ? define("waypoints", ["jquery"], function(i) {
                return e(i, t)
            }) : e(t.jQuery, t)
        }(this, function(i, s) {
            var n, o, r, a, l, c, d, u, h, p, f, m, g, v, _, y;
            return n = i(s), u = t.call(s, "ontouchstart") >= 0, a = {
                horizontal: {},
                vertical: {}
            }, l = 1, d = {}, c = "waypoints-context-id", f = "resize.waypoints", m = "scroll.waypoints", g = 1, v = "waypoints-waypoint-ids", _ = "waypoint", y = "waypoints", o = function() {
                function t(t) {
                    var e = this;
                    this.$element = t, this.element = t[0], this.didResize = !1, this.didScroll = !1, this.id = "context" + l++, this.oldScroll = {
                        x: t.scrollLeft(),
                        y: t.scrollTop()
                    }, this.waypoints = {
                        horizontal: {},
                        vertical: {}
                    }, t.data(c, this.id), d[this.id] = this, t.bind(m, function() {
                        var t;
                        return e.didScroll || u ? void 0 : (e.didScroll = !0, t = function() {
                            return e.doScroll(), e.didScroll = !1
                        }, s.setTimeout(t, i[y].settings.scrollThrottle))
                    }), t.bind(f, function() {
                        var t;
                        return e.didResize ? void 0 : (e.didResize = !0, t = function() {
                            return i[y]("refresh"), e.didResize = !1
                        }, s.setTimeout(t, i[y].settings.resizeThrottle))
                    })
                }
                return t.prototype.doScroll = function() {
                    var t, e = this;
                    return t = {
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
                    }, !u || t.vertical.oldScroll && t.vertical.newScroll || i[y]("refresh"), i.each(t, function(t, s) {
                        var n, o, r;
                        return r = [], o = s.newScroll > s.oldScroll, n = o ? s.forward : s.backward, i.each(e.waypoints[t], function(t, e) {
                            var i, n;
                            return s.oldScroll < (i = e.offset) && i <= s.newScroll ? r.push(e) : s.newScroll < (n = e.offset) && n <= s.oldScroll ? r.push(e) : void 0
                        }), r.sort(function(t, e) {
                            return t.offset - e.offset
                        }), o || r.reverse(), i.each(r, function(t, e) {
                            return e.options.continuous || t === r.length - 1 ? e.trigger([n]) : void 0
                        })
                    }), this.oldScroll = {
                        x: t.horizontal.newScroll,
                        y: t.vertical.newScroll
                    }
                }, t.prototype.refresh = function() {
                    var t, e, s, n = this;
                    return s = i.isWindow(this.element), e = this.$element.offset(), this.doScroll(), t = {
                        horizontal: {
                            contextOffset: s ? 0 : e.left,
                            contextScroll: s ? 0 : this.oldScroll.x,
                            contextDimension: this.$element.width(),
                            oldScroll: this.oldScroll.x,
                            forward: "right",
                            backward: "left",
                            offsetProp: "left"
                        },
                        vertical: {
                            contextOffset: s ? 0 : e.top,
                            contextScroll: s ? 0 : this.oldScroll.y,
                            contextDimension: s ? i[y]("viewportHeight") : this.$element.height(),
                            oldScroll: this.oldScroll.y,
                            forward: "down",
                            backward: "up",
                            offsetProp: "top"
                        }
                    }, i.each(t, function(t, e) {
                        return i.each(n.waypoints[t], function(t, s) {
                            var n, o, r, a, l;
                            return n = s.options.offset, r = s.offset, o = i.isWindow(s.element) ? 0 : s.$element.offset()[e.offsetProp], i.isFunction(n) ? n = n.apply(s.element) : "string" == typeof n && (n = parseFloat(n), s.options.offset.indexOf("%") > -1 && (n = Math.ceil(e.contextDimension * n / 100))), s.offset = o - e.contextOffset + e.contextScroll - n, s.options.onlyOnScroll && null != r || !s.enabled ? void 0 : null !== r && r < (a = e.oldScroll) && a <= s.offset ? s.trigger([e.backward]) : null !== r && r > (l = e.oldScroll) && l >= s.offset ? s.trigger([e.forward]) : null === r && e.oldScroll >= s.offset ? s.trigger([e.forward]) : void 0
                        })
                    })
                }, t.prototype.checkEmpty = function() {
                    return i.isEmptyObject(this.waypoints.horizontal) && i.isEmptyObject(this.waypoints.vertical) ? (this.$element.unbind([f, m].join(" ")), delete d[this.id]) : void 0
                }, t
            }(), r = function() {
                function t(t, e, s) {
                    var n, o;
                    s = i.extend({}, i.fn[_].defaults, s), "bottom-in-view" === s.offset && (s.offset = function() {
                        var t;
                        return t = i[y]("viewportHeight"), i.isWindow(e.element) || (t = e.$element.height()), t - i(this).outerHeight()
                    }), this.$element = t, this.element = t[0], this.axis = s.horizontal ? "horizontal" : "vertical", this.callback = s.handler, this.context = e, this.enabled = s.enabled, this.id = "waypoints" + g++, this.offset = null, this.options = s, e.waypoints[this.axis][this.id] = this, a[this.axis][this.id] = this, n = null != (o = t.data(v)) ? o : [], n.push(this.id), t.data(v, n)
                }
                return t.prototype.trigger = function(t) {
                    return this.enabled ? (null != this.callback && this.callback.apply(this.element, t), this.options.triggerOnce ? this.destroy() : void 0) : void 0
                }, t.prototype.disable = function() {
                    return this.enabled = !1
                }, t.prototype.enable = function() {
                    return this.context.refresh(), this.enabled = !0
                }, t.prototype.destroy = function() {
                    return delete a[this.axis][this.id], delete this.context.waypoints[this.axis][this.id], this.context.checkEmpty()
                }, t.getWaypointsByElement = function(t) {
                    var e, s;
                    return (s = i(t).data(v)) ? (e = i.extend({}, a.horizontal, a.vertical), i.map(s, function(t) {
                        return e[t]
                    })) : []
                }, t
            }(), p = {
                init: function(t, e) {
                    var s;
                    return null == e && (e = {}), null == (s = e.handler) && (e.handler = t), this.each(function() {
                        var t, s, n, a;
                        return t = i(this), n = null != (a = e.context) ? a : i.fn[_].defaults.context, i.isWindow(n) || (n = t.closest(n)), n = i(n), s = d[n.data(c)], s || (s = new o(n)), new r(t, s, e)
                    }), i[y]("refresh"), this
                },
                disable: function() {
                    return p._invoke(this, "disable")
                },
                enable: function() {
                    return p._invoke(this, "enable")
                },
                destroy: function() {
                    return p._invoke(this, "destroy")
                },
                prev: function(t, e) {
                    return p._traverse.call(this, t, e, function(t, e, i) {
                        return e > 0 ? t.push(i[e - 1]) : void 0
                    })
                },
                next: function(t, e) {
                    return p._traverse.call(this, t, e, function(t, e, i) {
                        return e < i.length - 1 ? t.push(i[e + 1]) : void 0
                    })
                },
                _traverse: function(t, e, n) {
                    var o, r;
                    return null == t && (t = "vertical"), null == e && (e = s), r = h.aggregate(e), o = [], this.each(function() {
                        var e;
                        return e = i.inArray(this, r[t]), n(o, e, r[t])
                    }), this.pushStack(o)
                },
                _invoke: function(t, e) {
                    return t.each(function() {
                        var t;
                        return t = r.getWaypointsByElement(this), i.each(t, function(t, i) {
                            return i[e](), !0
                        })
                    }), this
                }
            }, i.fn[_] = function() {
                var t, s;
                return s = arguments[0], t = 2 <= arguments.length ? e.call(arguments, 1) : [], p[s] ? p[s].apply(this, t) : i.isFunction(s) ? p.init.apply(this, arguments) : i.isPlainObject(s) ? p.init.apply(this, [null, s]) : s ? i.error("The " + s + " method does not exist in jQuery Waypoints.") : i.error("jQuery Waypoints needs a callback function or handler option.")
            }, i.fn[_].defaults = {
                context: s,
                continuous: !0,
                enabled: !0,
                horizontal: !1,
                offset: 0,
                triggerOnce: !1
            }, h = {
                refresh: function() {
                    return i.each(d, function(t, e) {
                        return e.refresh()
                    })
                },
                viewportHeight: function() {
                    var t;
                    return null != (t = s.innerHeight) ? t : n.height()
                },
                aggregate: function(t) {
                    var e, s, n;
                    return e = a, t && (e = null != (n = d[i(t).data(c)]) ? n.waypoints : void 0), e ? (s = {
                        horizontal: [],
                        vertical: []
                    }, i.each(s, function(t, n) {
                        return i.each(e[t], function(t, e) {
                            return n.push(e)
                        }), n.sort(function(t, e) {
                            return t.offset - e.offset
                        }), s[t] = i.map(n, function(t) {
                            return t.element
                        }), s[t] = i.unique(s[t])
                    }), s) : []
                },
                above: function(t) {
                    return null == t && (t = s), h._filter(t, "vertical", function(t, e) {
                        return e.offset <= t.oldScroll.y
                    })
                },
                below: function(t) {
                    return null == t && (t = s), h._filter(t, "vertical", function(t, e) {
                        return e.offset > t.oldScroll.y
                    })
                },
                left: function(t) {
                    return null == t && (t = s), h._filter(t, "horizontal", function(t, e) {
                        return e.offset <= t.oldScroll.x
                    })
                },
                right: function(t) {
                    return null == t && (t = s), h._filter(t, "horizontal", function(t, e) {
                        return e.offset > t.oldScroll.x
                    })
                },
                enable: function() {
                    return h._invoke("enable")
                },
                disable: function() {
                    return h._invoke("disable")
                },
                destroy: function() {
                    return h._invoke("destroy")
                },
                extendFn: function(t, e) {
                    return p[t] = e
                },
                _invoke: function(t) {
                    var e;
                    return e = i.extend({}, a.vertical, a.horizontal), i.each(e, function(e, i) {
                        return i[t](), !0
                    })
                },
                _filter: function(t, e, s) {
                    var n, o;
                    return (n = d[i(t).data(c)]) ? (o = [], i.each(n.waypoints[e], function(t, e) {
                        return s(n, e) ? o.push(e) : void 0
                    }), o.sort(function(t, e) {
                        return t.offset - e.offset
                    }), i.map(o, function(t) {
                        return t.element
                    })) : []
                }
            }, i[y] = function() {
                var t, i;
                return i = arguments[0], t = 2 <= arguments.length ? e.call(arguments, 1) : [], h[i] ? h[i].apply(null, t) : h.aggregate.call(null, i)
            }, i[y].settings = {
                resizeThrottle: 100,
                scrollThrottle: 30
            }, n.load(function() {
                return i[y]("refresh")
            })
        })
    }.call(this),
    function(t) {
        "use strict";
        t.fn.counterUp = function(e) {
            var i = t.extend({
                time: 400,
                delay: 10
            }, e);
            return this.each(function() {
                var e = t(this),
                    s = i,
                    n = function() {
                        var t = [],
                            i = s.time / s.delay,
                            n = e.text(),
                            o = /[0-9]+,[0-9]+/.test(n);
                        n = n.replace(/,/g, "");
                        for (var r = (/^[0-9]+$/.test(n), /^[0-9]+\.[0-9]+$/.test(n)), a = r ? (n.split(".")[1] || []).length : 0, l = i; l >= 1; l--) {
                            var c = parseInt(n / i * l);
                            if (r && (c = parseFloat(n / i * l).toFixed(a)), o)
                                for (;
                                    /(\d+)(\d{3})/.test(c.toString());) c = c.toString().replace(/(\d+)(\d{3})/, "$1,$2");
                            t.unshift(c)
                        }
                        e.data("counterup-nums", t), e.text("0");
                        var d = function() {
                            e.text(e.data("counterup-nums").shift()), e.data("counterup-nums").length ? setTimeout(e.data("counterup-func"), s.delay) : (e.data("counterup-nums", null), e.data("counterup-func", null))
                        };
                        e.data("counterup-func", d), setTimeout(e.data("counterup-func"), s.delay)
                    };
                e.waypoint(n, {
                    offset: "100%",
                    triggerOnce: !0
                })
            })
        }
    }(jQuery), ! function(t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? module.exports = e() : t.Headroom = e()
}(this, function() {
    "use strict";

    function t(t) {
        this.callback = t, this.ticking = !1
    }

    function e(t) {
        return t && "undefined" != typeof window && (t === window || t.nodeType)
    }

    function i(t) {
        if (arguments.length <= 0) throw new Error("Missing arguments in extend function");
        var s, n, o = t || {};
        for (n = 1; n < arguments.length; n++) {
            var r = arguments[n] || {};
            for (s in r) "object" != typeof o[s] || e(o[s]) ? o[s] = o[s] || r[s] : o[s] = i(o[s], r[s])
        }
        return o
    }

    function s(t) {
        return t === Object(t) ? t : {
            down: t,
            up: t
        }
    }

    function n(t, e) {
        e = i(e, n.options), this.lastKnownScrollY = 0, this.elem = t, this.tolerance = s(e.tolerance), this.classes = e.classes, this.offset = e.offset, this.scroller = e.scroller, this.initialised = !1, this.onPin = e.onPin, this.onUnpin = e.onUnpin, this.onTop = e.onTop, this.onNotTop = e.onNotTop, this.onBottom = e.onBottom, this.onNotBottom = e.onNotBottom
    }
    var o = {
        bind: !! function() {}.bind,
        classList: "classList" in document.documentElement,
        rAF: !!(window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame)
    };
    return window.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame, t.prototype = {
        constructor: t,
        update: function() {
            this.callback && this.callback(), this.ticking = !1
        },
        requestTick: function() {
            this.ticking || (requestAnimationFrame(this.rafCallback || (this.rafCallback = this.update.bind(this))), this.ticking = !0)
        },
        handleEvent: function() {
            this.requestTick()
        }
    }, n.prototype = {
        constructor: n,
        init: function() {
            return n.cutsTheMustard ? (this.debouncer = new t(this.update.bind(this)), this.elem.classList.add(this.classes.initial), setTimeout(this.attachEvent.bind(this), 100), this) : void 0
        },
        destroy: function() {
            var t = this.classes;
            this.initialised = !1, this.elem.classList.remove(t.unpinned, t.pinned, t.top, t.notTop, t.initial), this.scroller.removeEventListener("scroll", this.debouncer, !1)
        },
        attachEvent: function() {
            this.initialised || (this.lastKnownScrollY = this.getScrollY(), this.initialised = !0, this.scroller.addEventListener("scroll", this.debouncer, !1), this.debouncer.handleEvent())
        },
        unpin: function() {
            var t = this.elem.classList,
                e = this.classes;
            !t.contains(e.pinned) && t.contains(e.unpinned) || (t.add(e.unpinned), t.remove(e.pinned), this.onUnpin && this.onUnpin.call(this))
        },
        pin: function() {
            var t = this.elem.classList,
                e = this.classes;
            t.contains(e.unpinned) && (t.remove(e.unpinned), t.add(e.pinned), this.onPin && this.onPin.call(this))
        },
        top: function() {
            var t = this.elem.classList,
                e = this.classes;
            t.contains(e.top) || (t.add(e.top), t.remove(e.notTop), this.onTop && this.onTop.call(this))
        },
        notTop: function() {
            var t = this.elem.classList,
                e = this.classes;
            t.contains(e.notTop) || (t.add(e.notTop), t.remove(e.top), this.onNotTop && this.onNotTop.call(this))
        },
        bottom: function() {
            var t = this.elem.classList,
                e = this.classes;
            t.contains(e.bottom) || (t.add(e.bottom), t.remove(e.notBottom), this.onBottom && this.onBottom.call(this))
        },
        notBottom: function() {
            var t = this.elem.classList,
                e = this.classes;
            t.contains(e.notBottom) || (t.add(e.notBottom), t.remove(e.bottom), this.onNotBottom && this.onNotBottom.call(this))
        },
        getScrollY: function() {
            return void 0 !== this.scroller.pageYOffset ? this.scroller.pageYOffset : void 0 !== this.scroller.scrollTop ? this.scroller.scrollTop : (document.documentElement || document.body.parentNode || document.body).scrollTop
        },
        getViewportHeight: function() {
            return window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
        },
        getElementPhysicalHeight: function(t) {
            return Math.max(t.offsetHeight, t.clientHeight)
        },
        getScrollerPhysicalHeight: function() {
            return this.scroller === window || this.scroller === document.body ? this.getViewportHeight() : this.getElementPhysicalHeight(this.scroller)
        },
        getDocumentHeight: function() {
            var t = document.body,
                e = document.documentElement;
            return Math.max(t.scrollHeight, e.scrollHeight, t.offsetHeight, e.offsetHeight, t.clientHeight, e.clientHeight)
        },
        getElementHeight: function(t) {
            return Math.max(t.scrollHeight, t.offsetHeight, t.clientHeight)
        },
        getScrollerHeight: function() {
            return this.scroller === window || this.scroller === document.body ? this.getDocumentHeight() : this.getElementHeight(this.scroller)
        },
        isOutOfBounds: function(t) {
            var e = 0 > t,
                i = t + this.getScrollerPhysicalHeight() > this.getScrollerHeight();
            return e || i
        },
        toleranceExceeded: function(t, e) {
            return Math.abs(t - this.lastKnownScrollY) >= this.tolerance[e]
        },
        shouldUnpin: function(t, e) {
            var i = t > this.lastKnownScrollY,
                s = t >= this.offset;
            return i && s && e
        },
        shouldPin: function(t, e) {
            var i = t < this.lastKnownScrollY,
                s = t <= this.offset;
            return i && e || s
        },
        update: function() {
            var t = this.getScrollY(),
                e = t > this.lastKnownScrollY ? "down" : "up",
                i = this.toleranceExceeded(t, e);
            this.isOutOfBounds(t) || (t <= this.offset ? this.top() : this.notTop(), t + this.getViewportHeight() >= this.getScrollerHeight() ? this.bottom() : this.notBottom(), this.shouldUnpin(t, i) ? this.unpin() : this.shouldPin(t, i) && this.pin(), this.lastKnownScrollY = t)
        }
    }, n.options = {
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
    }, n.cutsTheMustard = "undefined" != typeof o && o.rAF && o.bind && o.classList, n
}), ! function(t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : t("object" == typeof exports ? require("jquery") : jQuery)
}(function(t) {
    function e(t) {
        return a.raw ? t : encodeURIComponent(t)
    }

    function i(t) {
        return a.raw ? t : decodeURIComponent(t)
    }

    function s(t) {
        return e(a.json ? JSON.stringify(t) : String(t))
    }

    function n(t) {
        0 === t.indexOf('"') && (t = t.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
        try {
            return t = decodeURIComponent(t.replace(r, " ")), a.json ? JSON.parse(t) : t
        } catch (e) {}
    }

    function o(e, i) {
        var s = a.raw ? e : n(e);
        return t.isFunction(i) ? i(s) : s
    }
    var r = /\+/g,
        a = t.cookie = function(n, r, l) {
            if (arguments.length > 1 && !t.isFunction(r)) {
                if (l = t.extend({}, a.defaults, l), "number" == typeof l.expires) {
                    var c = l.expires,
                        d = l.expires = new Date;
                    d.setTime(+d + 864e5 * c)
                }
                return document.cookie = [e(n), "=", s(r), l.expires ? "; expires=" + l.expires.toUTCString() : "", l.path ? "; path=" + l.path : "", l.domain ? "; domain=" + l.domain : "", l.secure ? "; secure" : ""].join("")
            }
            for (var u = n ? void 0 : {}, h = document.cookie ? document.cookie.split("; ") : [], p = 0, f = h.length; f > p; p++) {
                var m = h[p].split("="),
                    g = i(m.shift()),
                    v = m.join("=");
                if (n && n === g) {
                    u = o(v, r);
                    break
                }
                n || void 0 === (v = o(v)) || (u[g] = v)
            }
            return u
        };
    a.defaults = {}, t.removeCookie = function(e, i) {
        return void 0 === t.cookie(e) ? !1 : (t.cookie(e, "", t.extend({}, i, {
            expires: -1
        })), !t.cookie(e))
    }
}), jQuery(document).ready(function(t) {
    style_switcher = t(".style-customizer"), panelWidth = style_switcher.outerWidth(!0), t(".style-customizer .opener").on("click", function() {
        t(this);
        return t(".style-customizer.closed").length > 0 ? (style_switcher.animate({
            left: "0px"
        }), t(".style-customizer.closed").removeClass("closed"), t(".style-customizer").addClass("opened")) : (t(".style-customizer.opened").removeClass("opened"), t(".style-customizer").addClass("closed"), style_switcher.animate({
            left: "-" + panelWidth
        })), !1
    });
    var e = t('link[data-style="styles"]'),
        i = t('link[data-style="styles-no-cookie"]'),
        s = t.cookie("tp_stylesheet"),
        n = (t.cookie("footer_bg"), t.cookie("customizer_mode")),
        o = t.cookie("pattern");
    t(".style-customizer .selected").removeClass("selected"), t.cookie("tp_stylesheet") ? e.length > 0 && (e.attr("href", "css/color/" + s + ".css"), t('.style-customizer .styleChange li[data-style="' + s + '"]').addClass("selected"), t(".swicher-title-page-dark").length > 0 ? document.getElementById("logo_img").src = "images/customizer/logo/logo_dark_swicher-title_" + s + ".png" : (t("#logo_img").length > 0 && (document.getElementById("logo_img").src = "images/customizer/logo/logo_" + s + ".png"), t("#logo_dark_img").length > 0 && (document.getElementById("logo_dark_img").src = "images/customizer/logo/dark/logo_" + s + ".png"), t("#logo-footer").length > 0 && (document.getElementById("logo-footer").src = "images/customizer/logo/logo_" + s + ".png"))) : (t.cookie("tp_stylesheet", "color-1", 30), s = t.cookie("tp_stylesheet"), t('.style-customizer .styleChange li[data-style="' + s + '"]').addClass("selected")), t.cookie("customizer_mode") ? "boxed-layout" == n ? (t(".wrapper").addClass(n), t(".wrapper").removeClass("wide-layout"), t('.style-customizer .layoutstyle li[data-style="boxed-layout"]').addClass("selected"), t('.style-customizer .layoutstyle li[data-style="wide-layout"]').removeClass("selected"), t(".owl-carousel .container").css("marginLeft", "0")) : (t(".wrapper").addClass(n), t(".wrapper").removeClass("boxed-layout"), t("body").removeClass("pattern-0 pattern-1 pattern-2 pattern-3 pattern-4 pattern-5  pattern-6  pattern-7  pattern-8 main-bg-1 main-bg-2 main-bg-3 main-bg-4 main-bg-5 main-bg-6 main-bg-7 main-bg-8 "), t('.style-customizer .layoutstyle li[data-style="boxed-layout"]').removeClass("selected"), t('.style-customizer .layoutstyle li[data-style="wide-layout"]').addClass("selected"), t(".owl-carousel .container").css("marginLeft", "auto")) : (t.cookie("customizer_mode", "wide-layout", 30), n = t.cookie("customizer_mode"), t(".wrapper").addClass(n), t('.style-customizer .layoutstyle li[data-style="wide-layout"]').addClass("selected")), "boxed-layout" == n && t.cookie("pattern") ? (t('.style-customizer .patternChange li[data-style="' + o + '"]').addClass("selected"), t("body").removeClass("pattern-0 pattern-1 pattern-2 pattern-3 pattern-4 pattern-5  pattern-6  pattern-7  pattern-8 main-bg-1 main-bg-2 main-bg-3 main-bg-4 main-bg-5 main-bg-6 main-bg-7 main-bg-8 "), t("body").addClass(o)) : "boxed-layout" == n ? (t("body").removeClass("pattern-0 pattern-1 pattern-2 pattern-3 pattern-4 pattern-5  pattern-6  pattern-7  pattern-8 main-bg-1 main-bg-2 main-bg-3 main-bg-4 main-bg-5 main-bg-6 main-bg-7 main-bg-8 "), t('.style-customizer .patternChange li[data-style="pattern-0"]').addClass("selected")) : (t(".style-customizer .patternChange li.selected").removeClass("selected"), t("body").removeClass("pattern-0 pattern-1 pattern-2 pattern-3 pattern-4 pattern-5  pattern-6  pattern-7  pattern-8 main-bg-1 main-bg-2 main-bg-3 main-bg-4 main-bg-5 main-bg-6 main-bg-7 main-bg-8 ")), t(".style-customizer .styleChange li").on("click", function() {
        if (e.length > 0) {
            var s = t(this),
                n = s.data("style");
            t(".style-customizer .styleChange .selected").removeClass("selected"), s.addClass("selected"), e.attr("href", "css/color/" + n + ".css"), t(".swicher-title-page-dark").length > 0 ? document.getElementById("logo_img").src = "images/customizer/logo/logo_dark_swicher-title_" + n + ".png" : (t("#logo_img").length > 0 && (document.getElementById("logo_img").src = "images/customizer/logo/logo_" + n + ".png"), t("#logo_dark_img").length > 0 && (document.getElementById("logo_dark_img").src = "images/customizer/logo/dark/logo_" + n + ".png"), t("#logo-footer").length > 0 && (document.getElementById("logo-footer").src = "images/customizer/logo/logo_" + n + ".png")), t.cookie("tp_stylesheet", n, 30)
        } else {
            var s = t(this),
                o = s.data("style");
            t(".style-customizer .styleChange .selected").removeClass("selected"), s.addClass("selected"), i.attr("href", "css/color/" + o + ".css"),
                t(".swicher-title-page-dark").length > 0 ? document.getElementById("logo_img").src = "images/customizer/logo/logo_dark_swicher-title_" + o + ".png" : (t("#logo_img").length > 0 && (document.getElementById("logo_img").src = "images/customizer/logo/logo_" + o + ".png"), t("#logo_dark_img").length > 0 && (document.getElementById("logo_dark_img").src = "images/customizer/logo/dark/logo_" + o + ".png"), t("#logo-footer").length > 0 && (document.getElementById("logo-footer").src = "images/customizer/logo/logo_" + o + ".png"))
        }
    }), t(".style-customizer .patternChange li").on("click", function() {
        var e = t(this),
            i = e.data("style");
        t(".style-customizer .patternChange .selected").removeClass("selected"), e.addClass("selected"), t("body").removeClass("pattern-0 pattern-1 pattern-2 pattern-3 pattern-4 pattern-5  pattern-6  pattern-7  pattern-8 main-bg-1 main-bg-2 main-bg-3 main-bg-4 main-bg-5 main-bg-6 main-bg-7 main-bg-8 "), t("body").addClass(i), t(".wrapper").addClass("boxed-layout"), t('.style-customizer .layoutstyle li[data-style="boxed-layout"]').addClass("selected"), t('.style-customizer .layoutstyle li[data-style="wide-layout"]').removeClass("selected"), t(".owl-carousel .container").css("marginLeft", "0"), t(".style-customizer select").val("boxed-layout"), t.cookie("pattern", i, 30), t.cookie("customizer_mode", "boxed-layout", 30), t(window).trigger("resize")
    }), t(".style-customizer .layoutstyle li.boxed-layout").on("click", function() {
        if (t(".wrapper").addClass("boxed-layout"), t(".wrapper").removeClass("wide-layout"), t('.style-customizer .layoutstyle li[data-style="boxed-layout"]').addClass("selected"), t('.style-customizer .layoutstyle li[data-style="wide-layout"]').removeClass("selected"), t(".owl-carousel .container").css("marginLeft", "0"), t.cookie("customizer_mode", "boxed-layout", 30), t.cookie("pattern")) {
            var e = t.cookie("pattern");
            t('.style-customizer .patternChange li[data-style="' + e + '"]').addClass("selected"), t("body").removeClass("pattern-0 pattern-1 pattern-2 pattern-3 pattern-4 pattern-5  pattern-6  pattern-7  pattern-8 main-bg-1 main-bg-2 main-bg-3 main-bg-4 main-bg-5 main-bg-6 main-bg-7 main-bg-8 "), t("body").addClass(e)
        } else t('.style-customizer .patternChange li[data-style="pattern-0"]').addClass("selected");
        t(window).trigger("resize")
    }), t(".style-customizer .layoutstyle li.wide-layout").on("click", function() {
        t(".wrapper").addClass("wide-layout"), t(".wrapper").removeClass("boxed-layout"), t("body").removeClass("pattern-0 pattern-1 pattern-2 pattern-3 pattern-4 pattern-5  pattern-6  pattern-7  pattern-8 main-bg-1 main-bg-2 main-bg-3 main-bg-4 main-bg-5 main-bg-6 main-bg-7 main-bg-8 "), t("body").removeClass(""), t('.style-customizer .layoutstyle li[data-style="boxed-layout"]').removeClass("selected"), t('.style-customizer .layoutstyle li[data-style="wide-layout"]').addClass("selected"), t(".owl-carousel .container").css("marginLeft", "auto"), t(".style-customizer .patternChange li.selected").removeClass("selected"), t.cookie("customizer_mode", "wide-layout", 30), t(window).trigger("resize")
    }), t(".style-customizer .resetAll li a.button-reset").on("click", function() {
        t.cookie("customizer_mode", "wide-layout", 30), t(".wrapper").addClass("wide-layout"), t(".wrapper").removeClass("boxed-layout"), t('.style-customizer .layoutstyle li[data-style="boxed-layout"]').removeClass("selected"), t('.style-customizer .layoutstyle li[data-style="wide-layout"]').addClass("selected"), t(".owl-carousel .container").css("marginLeft", "auto"), t(".style-customizer .patternChange li.selected").removeClass("selected"), t.cookie("pattern", "pattern-0", 30), t("body").removeClass("reset pattern-0 pattern-1 pattern-2 pattern-3 pattern-4 pattern-5  pattern-6  pattern-7  pattern-8 main-bg-1 main-bg-2 main-bg-3 main-bg-4 main-bg-5 main-bg-6 main-bg-7 main-bg-8 "), t(".style-customizer .patternChange .selected").removeClass("selected"), t.cookie("tp_stylesheet", "color-1", 30);
        var i = "color-1";
        t(".style-customizer .styleChange li.selected").removeClass("selected"), t('.style-customizer .styleChange li[data-style="' + i + '"]').addClass("selected"), e.attr("href", "css/color/" + i + ".css"), t("#logo_img").length > 0 && (document.getElementById("logo_img").src = "images/customizer/logo/logo_" + i + ".png"), t("#logo_dark_img").length > 0 && (document.getElementById("logo_dark_img").src = "images/customizer/logo/dark/logo_" + i + ".png"), t("#logo-footer").length > 0 && (document.getElementById("logo-footer").src = "images/customizer/logo/logo_" + i + ".png"), t(window).trigger("resize"), t(".desktopTopFixed").removeClass("desktopTopFixed")
    })
}),
    function(t) {
        "use strict";

        function e(e) {
            return /In/.test(e) || t.inArray(e, t.fn.textillate.defaults.inEffects) >= 0
        }

        function i(e) {
            return /Out/.test(e) || t.inArray(e, t.fn.textillate.defaults.outEffects) >= 0
        }

        function s(t) {
            return "true" !== t && "false" !== t ? t : "true" === t
        }

        function n(e) {
            var i = e.attributes || [],
                n = {};
            return i.length ? (t.each(i, function(t, e) {
                var i = e.nodeName.replace(/delayscale/, "delayScale");
                /^data-in-*/.test(i) ? (n["in"] = n["in"] || {}, n["in"][i.replace(/data-in-/, "")] = s(e.nodeValue)) : /^data-out-*/.test(i) ? (n.out = n.out || {}, n.out[i.replace(/data-out-/, "")] = s(e.nodeValue)) : /^data-*/.test(i) && (n[i.replace(/data-/, "")] = s(e.nodeValue))
            }), n) : n
        }

        function o(t) {
            for (var e, i, s = t.length; s; e = parseInt(Math.random() * s), i = t[--s], t[s] = t[e], t[e] = i);
            return t
        }

        function r(t, e, i) {
            t.addClass("animated " + e).css("visibility", "visible").show(), t.one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function() {
                t.removeClass("animated " + e), i && i()
            })
        }

        function a(s, n, a) {
            var l = s.length;
            return l ? (n.shuffle && (s = o(s)), n.reverse && (s = s.toArray().reverse()), void t.each(s, function(s, o) {
                function c() {
                    e(n.effect) ? d.css("visibility", "visible") : i(n.effect) && d.css("visibility", "hidden"), l -= 1, !l && a && a()
                }
                var d = t(o),
                    u = n.sync ? n.delay : n.delay * s * n.delayScale;
                d.text() ? setTimeout(function() {
                    r(d, n.effect, c)
                }, u) : c()
            })) : void(a && a())
        }
        var l = function(s, o) {
            var r = this,
                l = t(s);
            r.init = function() {
                r.$texts = l.find(o.selector), r.$texts.length || (r.$texts = t('<ul class="texts"><li>' + l.html() + "</li></ul>"), l.html(r.$texts)), r.$texts.hide(), r.$current = t("<span>").html(r.$texts.find(":first-child").html()).prependTo(l), e(o["in"].effect) ? r.$current.css("visibility", "hidden") : i(o.out.effect) && r.$current.css("visibility", "visible"), r.setOptions(o), r.timeoutRun = null, setTimeout(function() {
                    r.options.autoStart && r.start()
                }, r.options.initialDelay)
            }, r.setOptions = function(t) {
                r.options = t
            }, r.triggerEvent = function(e) {
                var i = t.Event(e + ".tlt");
                return l.trigger(i, r), i
            }, r["in"] = function(s, o) {
                s = s || 0;
                var l, c = r.$texts.find(":nth-child(" + ((s || 0) + 1) + ")"),
                    d = t.extend(!0, {}, r.options, c.length ? n(c[0]) : {});
                c.addClass("current"), r.triggerEvent("inAnimationBegin"), r.$current.html(c.html()).lettering("words"), "char" == r.options.type && r.$current.find('[class^="word"]').css({
                    display: "inline-block",
                    "-webkit-transform": "translate3d(0,0,0)",
                    "-moz-transform": "translate3d(0,0,0)",
                    "-o-transform": "translate3d(0,0,0)",
                    transform: "translate3d(0,0,0)"
                }).each(function() {
                    t(this).lettering()
                }), l = r.$current.find('[class^="' + r.options.type + '"]').css("display", "inline-block"), e(d["in"].effect) ? l.css("visibility", "hidden") : i(d["in"].effect) && l.css("visibility", "visible"), r.currentIndex = s, a(l, d["in"], function() {
                    r.triggerEvent("inAnimationEnd"), d["in"].callback && d["in"].callback(), o && o(r)
                })
            }, r.out = function(e) {
                var i = r.$texts.find(":nth-child(" + ((r.currentIndex || 0) + 1) + ")"),
                    s = r.$current.find('[class^="' + r.options.type + '"]'),
                    o = t.extend(!0, {}, r.options, i.length ? n(i[0]) : {});
                r.triggerEvent("outAnimationBegin"), a(s, o.out, function() {
                    i.removeClass("current"), r.triggerEvent("outAnimationEnd"), o.out.callback && o.out.callback(), e && e(r)
                })
            }, r.start = function(t) {
                setTimeout(function() {
                    r.triggerEvent("start"),
                        function e(t) {
                            r["in"](t, function() {
                                var i = r.$texts.children().length;
                                t += 1, !r.options.loop && t >= i ? (r.options.callback && r.options.callback(), r.triggerEvent("end")) : (t %= i, r.timeoutRun = setTimeout(function() {
                                    r.out(function() {
                                        e(t)
                                    })
                                }, r.options.minDisplayTime))
                            })
                        }(t || 0)
                }, r.options.initialDelay)
            }, r.stop = function() {
                r.timeoutRun && (clearInterval(r.timeoutRun), r.timeoutRun = null)
            }, r.init()
        };
        t.fn.textillate = function(e, i) {
            return this.each(function() {
                var s = t(this),
                    o = s.data("textillate"),
                    r = t.extend(!0, {}, t.fn.textillate.defaults, n(this), "object" == typeof e && e);
                o ? "string" == typeof e ? o[e].apply(o, [].concat(i)) : o.setOptions.call(o, r) : s.data("textillate", o = new l(this, r))
            })
        }, t.fn.textillate.defaults = {
            selector: ".texts",
            loop: !1,
            minDisplayTime: 2e3,
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
    }(jQuery),
    function(t) {
        function e(e, i, s, n) {
            var o = e.text().split(i),
                r = "";
            o.length && (t(o).each(function(t, e) {
                r += '<span class="' + s + (t + 1) + '">' + e + "</span>" + n
            }), e.empty().append(r))
        }
        var i = {
            init: function() {
                return this.each(function() {
                    e(t(this), "", "char", "")
                })
            },
            words: function() {
                return this.each(function() {
                    e(t(this), " ", "word", " ")
                })
            },
            lines: function() {
                return this.each(function() {
                    var i = "eefec303079ad17405c889e092e105b0";
                    e(t(this).children("br").replaceWith(i).end(), i, "line", "")
                })
            }
        };
        t.fn.lettering = function(e) {
            return e && i[e] ? i[e].apply(this, [].slice.call(arguments, 1)) : "letters" !== e && e ? (t.error("Method " + e + " does not exist on jQuery.lettering"), this) : i.init.apply(this, [].slice.call(arguments, 0))
        }
    }(jQuery);
! function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery)
}(function(e) {
    e.extend(e.fn, {
        validate: function(t) {
            if (!this.length) return void(t && t.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing."));
            var r = e.data(this[0], "validator");
            return r ? r : (this.attr("novalidate", "novalidate"), r = new e.validator(t, this[0]), e.data(this[0], "validator", r), r.settings.onsubmit && (this.on("click.validate", ":submit", function(t) {
                r.settings.submitHandler && (r.submitButton = t.target), e(this).hasClass("cancel") && (r.cancelSubmit = !0), void 0 !== e(this).attr("formnovalidate") && (r.cancelSubmit = !0)
            }), this.on("submit.validate", function(t) {
                function i() {
                    var i, n;
                    return r.settings.submitHandler ? (r.submitButton && (i = e("<input type='hidden'/>").attr("name", r.submitButton.name).val(e(r.submitButton).val()).appendTo(r.currentForm)), n = r.settings.submitHandler.call(r, r.currentForm, t), r.submitButton && i.remove(), void 0 !== n ? n : !1) : !0
                }
                return r.settings.debug && t.preventDefault(), r.cancelSubmit ? (r.cancelSubmit = !1, i()) : r.form() ? r.pendingRequest ? (r.formSubmitted = !0, !1) : i() : (r.focusInvalid(), !1)
            })), r)
        },
        valid: function() {
            var t, r, i;
            return e(this[0]).is("form") ? t = this.validate().form() : (i = [], t = !0, r = e(this[0].form).validate(), this.each(function() {
                t = r.element(this) && t, i = i.concat(r.errorList)
            }), r.errorList = i), t
        },
        rules: function(t, r) {
            var i, n, a, s, o, l, u = this[0];
            if (t) switch (i = e.data(u.form, "validator").settings, n = i.rules, a = e.validator.staticRules(u), t) {
                case "add":
                    e.extend(a, e.validator.normalizeRule(r)), delete a.messages, n[u.name] = a, r.messages && (i.messages[u.name] = e.extend(i.messages[u.name], r.messages));
                    break;
                case "remove":
                    return r ? (l = {}, e.each(r.split(/\s/), function(t, r) {
                        l[r] = a[r], delete a[r], "required" === r && e(u).removeAttr("aria-required")
                    }), l) : (delete n[u.name], a)
            }
            return s = e.validator.normalizeRules(e.extend({}, e.validator.classRules(u), e.validator.attributeRules(u), e.validator.dataRules(u), e.validator.staticRules(u)), u), s.required && (o = s.required, delete s.required, s = e.extend({
                required: o
            }, s), e(u).attr("aria-required", "true")), s.remote && (o = s.remote, delete s.remote, s = e.extend(s, {
                remote: o
            })), s
        }
    }), e.extend(e.expr[":"], {
        blank: function(t) {
            return !e.trim("" + e(t).val())
        },
        filled: function(t) {
            return !!e.trim("" + e(t).val())
        },
        unchecked: function(t) {
            return !e(t).prop("checked")
        }
    }), e.validator = function(t, r) {
        this.settings = e.extend(!0, {}, e.validator.defaults, t), this.currentForm = r, this.init()
    }, e.validator.format = function(t, r) {
        return 1 === arguments.length ? function() {
            var r = e.makeArray(arguments);
            return r.unshift(t), e.validator.format.apply(this, r)
        } : (arguments.length > 2 && r.constructor !== Array && (r = e.makeArray(arguments).slice(1)), r.constructor !== Array && (r = [r]), e.each(r, function(e, r) {
            t = t.replace(new RegExp("\\{" + e + "\\}", "g"), function() {
                return r
            })
        }), t)
    }, e.extend(e.validator, {
        defaults: {
            messages: {},
            groups: {},
            rules: {},
            errorClass: "error",
            validClass: "valid",
            errorElement: "label",
            focusCleanup: !1,
            focusInvalid: !0,
            errorContainer: e([]),
            errorLabelContainer: e([]),
            onsubmit: !0,
            ignore: ":hidden",
            ignoreTitle: !1,
            onfocusin: function(e) {
                this.lastActive = e, this.settings.focusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, e, this.settings.errorClass, this.settings.validClass), this.hideThese(this.errorsFor(e)))
            },
            onfocusout: function(e) {
                this.checkable(e) || !(e.name in this.submitted) && this.optional(e) || this.element(e)
            },
            onkeyup: function(t, r) {
                var i = [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225];
                9 === r.which && "" === this.elementValue(t) || -1 !== e.inArray(r.keyCode, i) || (t.name in this.submitted || t === this.lastElement) && this.element(t)
            },
            onclick: function(e) {
                e.name in this.submitted ? this.element(e) : e.parentNode.name in this.submitted && this.element(e.parentNode)
            },
            highlight: function(t, r, i) {
                "radio" === t.type ? this.findByName(t.name).addClass(r).removeClass(i) : e(t).addClass(r).removeClass(i)
            },
            unhighlight: function(t, r, i) {
                "radio" === t.type ? this.findByName(t.name).removeClass(r).addClass(i) : e(t).removeClass(r).addClass(i)
            }
        },
        setDefaults: function(t) {
            e.extend(e.validator.defaults, t)
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
            maxlength: e.validator.format("Please enter no more than {0} characters."),
            minlength: e.validator.format("Please enter at least {0} characters."),
            rangelength: e.validator.format("Please enter a value between {0} and {1} characters long."),
            range: e.validator.format("Please enter a value between {0} and {1}."),
            max: e.validator.format("Please enter a value less than or equal to {0}."),
            min: e.validator.format("Please enter a value greater than or equal to {0}.")
        },
        autoCreateRanges: !1,
        prototype: {
            init: function() {
                function t(t) {
                    var r = e.data(this.form, "validator"),
                        i = "on" + t.type.replace(/^validate/, ""),
                        n = r.settings;
                    n[i] && !e(this).is(n.ignore) && n[i].call(r, this, t)
                }
                this.labelContainer = e(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || e(this.currentForm), this.containers = e(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
                var r, i = this.groups = {};
                e.each(this.settings.groups, function(t, r) {
                    "string" == typeof r && (r = r.split(/\s/)), e.each(r, function(e, r) {
                        i[r] = t
                    })
                }), r = this.settings.rules, e.each(r, function(t, i) {
                    r[t] = e.validator.normalizeRule(i)
                }), e(this.currentForm).on("focusin.validate focusout.validate keyup.validate", ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox']", t).on("click.validate", "select, option, [type='radio'], [type='checkbox']", t), this.settings.invalidHandler && e(this.currentForm).on("invalid-form.validate", this.settings.invalidHandler), e(this.currentForm).find("[required], [data-rule-required], .required").attr("aria-required", "true")
            },
            form: function() {
                return this.checkForm(), e.extend(this.submitted, this.errorMap), this.invalid = e.extend({}, this.errorMap), this.valid() || e(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid()
            },
            checkForm: function() {
                this.prepareForm();
                for (var e = 0, t = this.currentElements = this.elements(); t[e]; e++) this.check(t[e]);
                return this.valid()
            },
            element: function(t) {
                var r = this.clean(t),
                    i = this.validationTargetFor(r),
                    n = !0;
                return this.lastElement = i, void 0 === i ? delete this.invalid[r.name] : (this.prepareElement(i), this.currentElements = e(i), n = this.check(i) !== !1, n ? delete this.invalid[i.name] : this.invalid[i.name] = !0), e(t).attr("aria-invalid", !n), this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), n
            },
            showErrors: function(t) {
                if (t) {
                    e.extend(this.errorMap, t), this.errorList = [];
                    for (var r in t) this.errorList.push({
                        message: t[r],
                        element: this.findByName(r)[0]
                    });
                    this.successList = e.grep(this.successList, function(e) {
                        return !(e.name in t)
                    })
                }
                this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
            },
            resetForm: function() {
                e.fn.resetForm && e(this.currentForm).resetForm(), this.submitted = {}, this.lastElement = null, this.prepareForm(), this.hideErrors();
                var t, r = this.elements().removeData("previousValue").removeAttr("aria-invalid");
                if (this.settings.unhighlight)
                    for (t = 0; r[t]; t++) this.settings.unhighlight.call(this, r[t], this.settings.errorClass, "");
                else r.removeClass(this.settings.errorClass)
            },
            numberOfInvalids: function() {
                return this.objectLength(this.invalid)
            },
            objectLength: function(e) {
                var t, r = 0;
                for (t in e) r++;
                return r
            },
            hideErrors: function() {
                this.hideThese(this.toHide)
            },
            hideThese: function(e) {
                e.not(this.containers).text(""), this.addWrapper(e).hide()
            },
            valid: function() {
                return 0 === this.size()
            },
            size: function() {
                return this.errorList.length
            },
            focusInvalid: function() {
                if (this.settings.focusInvalid) try {
                    e(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
                } catch (t) {}
            },
            findLastActive: function() {
                var t = this.lastActive;
                return t && 1 === e.grep(this.errorList, function(e) {
                    return e.element.name === t.name
                }).length && t
            },
            elements: function() {
                var t = this,
                    r = {};
                return e(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function() {
                    return !this.name && t.settings.debug && window.console && console.error("%o has no name assigned", this), this.name in r || !t.objectLength(e(this).rules()) ? !1 : (r[this.name] = !0, !0)
                })
            },
            clean: function(t) {
                return e(t)[0]
            },
            errors: function() {
                var t = this.settings.errorClass.split(" ").join(".");
                return e(this.settings.errorElement + "." + t, this.errorContext)
            },
            reset: function() {
                this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = e([]), this.toHide = e([]), this.currentElements = e([])
            },
            prepareForm: function() {
                this.reset(), this.toHide = this.errors().add(this.containers)
            },
            prepareElement: function(e) {
                this.reset(), this.toHide = this.errorsFor(e)
            },
            elementValue: function(t) {
                var r, i = e(t),
                    n = t.type;
                return "radio" === n || "checkbox" === n ? this.findByName(t.name).filter(":checked").val() : "number" === n && "undefined" != typeof t.validity ? t.validity.badInput ? !1 : i.val() : (r = i.val(), "string" == typeof r ? r.replace(/\r/g, "") : r)
            },
            check: function(t) {
                t = this.validationTargetFor(this.clean(t));
                var r, i, n, a = e(t).rules(),
                    s = e.map(a, function(e, t) {
                        return t
                    }).length,
                    o = !1,
                    l = this.elementValue(t);
                for (i in a) {
                    n = {
                        method: i,
                        parameters: a[i]
                    };
                    try {
                        if (r = e.validator.methods[i].call(this, l, t, n.parameters), "dependency-mismatch" === r && 1 === s) {
                            o = !0;
                            continue
                        }
                        if (o = !1, "pending" === r) return void(this.toHide = this.toHide.not(this.errorsFor(t)));
                        if (!r) return this.formatAndAdd(t, n), !1
                    } catch (u) {
                        throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + t.id + ", check the '" + n.method + "' method.", u), u instanceof TypeError && (u.message += ".  Exception occurred when checking element " + t.id + ", check the '" + n.method + "' method."), u
                    }
                }
                return o ? void 0 : (this.objectLength(a) && this.successList.push(t), !0)
            },
            customDataMessage: function(t, r) {
                return e(t).data("msg" + r.charAt(0).toUpperCase() + r.substring(1).toLowerCase()) || e(t).data("msg")
            },
            customMessage: function(e, t) {
                var r = this.settings.messages[e];
                return r && (r.constructor === String ? r : r[t])
            },
            findDefined: function() {
                for (var e = 0; e < arguments.length; e++)
                    if (void 0 !== arguments[e]) return arguments[e];
                return void 0
            },
            defaultMessage: function(t, r) {
                return this.findDefined(this.customMessage(t.name, r), this.customDataMessage(t, r), !this.settings.ignoreTitle && t.title || void 0, e.validator.messages[r], "<strong>Warning: No message defined for " + t.name + "</strong>")
            },
            formatAndAdd: function(t, r) {
                var i = this.defaultMessage(t, r.method),
                    n = /\$?\{(\d+)\}/g;
                "function" == typeof i ? i = i.call(this, r.parameters, t) : n.test(i) && (i = e.validator.format(i.replace(n, "{$1}"), r.parameters)), this.errorList.push({
                    message: i,
                    element: t,
                    method: r.method
                }), this.errorMap[t.name] = i, this.submitted[t.name] = i
            },
            addWrapper: function(e) {
                return this.settings.wrapper && (e = e.add(e.parent(this.settings.wrapper))), e
            },
            defaultShowErrors: function() {
                var e, t, r;
                for (e = 0; this.errorList[e]; e++) r = this.errorList[e], this.settings.highlight && this.settings.highlight.call(this, r.element, this.settings.errorClass, this.settings.validClass), this.showLabel(r.element, r.message);
                if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success)
                    for (e = 0; this.successList[e]; e++) this.showLabel(this.successList[e]);
                if (this.settings.unhighlight)
                    for (e = 0, t = this.validElements(); t[e]; e++) this.settings.unhighlight.call(this, t[e], this.settings.errorClass, this.settings.validClass);
                this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show()
            },
            validElements: function() {
                return this.currentElements.not(this.invalidElements())
            },
            invalidElements: function() {
                return e(this.errorList).map(function() {
                    return this.element
                })
            },
            showLabel: function(t, r) {
                var i, n, a, s = this.errorsFor(t),
                    o = this.idOrName(t),
                    l = e(t).attr("aria-describedby");
                s.length ? (s.removeClass(this.settings.validClass).addClass(this.settings.errorClass), s.html(r)) : (s = e("<" + this.settings.errorElement + ">").attr("id", o + "-error").addClass(this.settings.errorClass).html(r || ""), i = s, this.settings.wrapper && (i = s.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.length ? this.labelContainer.append(i) : this.settings.errorPlacement ? this.settings.errorPlacement(i, e(t)) : i.insertAfter(t), s.is("label") ? s.attr("for", o) : 0 === s.parents("label[for='" + o + "']").length && (a = s.attr("id").replace(/(:|\.|\[|\]|\$)/g, "\\$1"), l ? l.match(new RegExp("\\b" + a + "\\b")) || (l += " " + a) : l = a, e(t).attr("aria-describedby", l), n = this.groups[t.name], n && e.each(this.groups, function(t, r) {
                    r === n && e("[name='" + t + "']", this.currentForm).attr("aria-describedby", s.attr("id"))
                }))), !r && this.settings.success && (s.text(""), "string" == typeof this.settings.success ? s.addClass(this.settings.success) : this.settings.success(s, t)), this.toShow = this.toShow.add(s)
            },
            errorsFor: function(t) {
                var r = this.idOrName(t),
                    i = e(t).attr("aria-describedby"),
                    n = "label[for='" + r + "'], label[for='" + r + "'] *";
                return i && (n = n + ", #" + i.replace(/\s+/g, ", #")), this.errors().filter(n)
            },
            idOrName: function(e) {
                return this.groups[e.name] || (this.checkable(e) ? e.name : e.id || e.name)
            },
            validationTargetFor: function(t) {
                return this.checkable(t) && (t = this.findByName(t.name)), e(t).not(this.settings.ignore)[0]
            },
            checkable: function(e) {
                return /radio|checkbox/i.test(e.type)
            },
            findByName: function(t) {
                return e(this.currentForm).find("[name='" + t + "']")
            },
            getLength: function(t, r) {
                switch (r.nodeName.toLowerCase()) {
                    case "select":
                        return e("option:selected", r).length;
                    case "input":
                        if (this.checkable(r)) return this.findByName(r.name).filter(":checked").length
                }
                return t.length
            },
            depend: function(e, t) {
                return this.dependTypes[typeof e] ? this.dependTypes[typeof e](e, t) : !0
            },
            dependTypes: {
                "boolean": function(e) {
                    return e
                },
                string: function(t, r) {
                    return !!e(t, r.form).length
                },
                "function": function(e, t) {
                    return e(t)
                }
            },
            optional: function(t) {
                var r = this.elementValue(t);
                return !e.validator.methods.required.call(this, r, t) && "dependency-mismatch"
            },
            startRequest: function(e) {
                this.pending[e.name] || (this.pendingRequest++, this.pending[e.name] = !0)
            },
            stopRequest: function(t, r) {
                this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[t.name], r && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (e(this.currentForm).submit(), this.formSubmitted = !1) : !r && 0 === this.pendingRequest && this.formSubmitted && (e(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1)
            },
            previousValue: function(t) {
                return e.data(t, "previousValue") || e.data(t, "previousValue", {
                    old: null,
                    valid: !0,
                    message: this.defaultMessage(t, "remote")
                })
            },
            destroy: function() {
                this.resetForm(), e(this.currentForm).off(".validate").removeData("validator")
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
        addClassRules: function(t, r) {
            t.constructor === String ? this.classRuleSettings[t] = r : e.extend(this.classRuleSettings, t)
        },
        classRules: function(t) {
            var r = {},
                i = e(t).attr("class");
            return i && e.each(i.split(" "), function() {
                this in e.validator.classRuleSettings && e.extend(r, e.validator.classRuleSettings[this])
            }), r
        },
        normalizeAttributeRule: function(e, t, r, i) {
            /min|max/.test(r) && (null === t || /number|range|text/.test(t)) && (i = Number(i), isNaN(i) && (i = void 0)), i || 0 === i ? e[r] = i : t === r && "range" !== t && (e[r] = !0)
        },
        attributeRules: function(t) {
            var r, i, n = {},
                a = e(t),
                s = t.getAttribute("type");
            for (r in e.validator.methods) "required" === r ? (i = t.getAttribute(r), "" === i && (i = !0), i = !!i) : i = a.attr(r), this.normalizeAttributeRule(n, s, r, i);
            return n.maxlength && /-1|2147483647|524288/.test(n.maxlength) && delete n.maxlength, n
        },
        dataRules: function(t) {
            var r, i, n = {},
                a = e(t),
                s = t.getAttribute("type");
            for (r in e.validator.methods) i = a.data("rule" + r.charAt(0).toUpperCase() + r.substring(1).toLowerCase()), this.normalizeAttributeRule(n, s, r, i);
            return n
        },
        staticRules: function(t) {
            var r = {},
                i = e.data(t.form, "validator");
            return i.settings.rules && (r = e.validator.normalizeRule(i.settings.rules[t.name]) || {}), r
        },
        normalizeRules: function(t, r) {
            return e.each(t, function(i, n) {
                if (n === !1) return void delete t[i];
                if (n.param || n.depends) {
                    var a = !0;
                    switch (typeof n.depends) {
                        case "string":
                            a = !!e(n.depends, r.form).length;
                            break;
                        case "function":
                            a = n.depends.call(r, r)
                    }
                    a ? t[i] = void 0 !== n.param ? n.param : !0 : delete t[i]
                }
            }), e.each(t, function(i, n) {
                t[i] = e.isFunction(n) ? n(r) : n
            }), e.each(["minlength", "maxlength"], function() {
                t[this] && (t[this] = Number(t[this]))
            }), e.each(["rangelength", "range"], function() {
                var r;
                t[this] && (e.isArray(t[this]) ? t[this] = [Number(t[this][0]), Number(t[this][1])] : "string" == typeof t[this] && (r = t[this].replace(/[\[\]]/g, "").split(/[\s,]+/), t[this] = [Number(r[0]), Number(r[1])]))
            }), e.validator.autoCreateRanges && (null != t.min && null != t.max && (t.range = [t.min, t.max], delete t.min, delete t.max), null != t.minlength && null != t.maxlength && (t.rangelength = [t.minlength, t.maxlength], delete t.minlength, delete t.maxlength)), t
        },
        normalizeRule: function(t) {
            if ("string" == typeof t) {
                var r = {};
                e.each(t.split(/\s/), function() {
                    r[this] = !0
                }), t = r
            }
            return t
        },
        addMethod: function(t, r, i) {
            e.validator.methods[t] = r, e.validator.messages[t] = void 0 !== i ? i : e.validator.messages[t], r.length < 3 && e.validator.addClassRules(t, e.validator.normalizeRule(t))
        },
        methods: {
            required: function(t, r, i) {
                if (!this.depend(i, r)) return "dependency-mismatch";
                if ("select" === r.nodeName.toLowerCase()) {
                    var n = e(r).val();
                    return n && n.length > 0
                }
                return this.checkable(r) ? this.getLength(t, r) > 0 : t.length > 0
            },
            email: function(e, t) {
                return this.optional(t) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(e)
            },
            url: function(e, t) {
                return this.optional(t) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[\/?#]\S*)?$/i.test(e)
            },
            date: function(e, t) {
                return this.optional(t) || !/Invalid|NaN/.test(new Date(e).toString())
            },
            dateISO: function(e, t) {
                return this.optional(t) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(e)
            },
            number: function(e, t) {
                return this.optional(t) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(e)
            },
            digits: function(e, t) {
                return this.optional(t) || /^\d+$/.test(e)
            },
            creditcard: function(e, t) {
                if (this.optional(t)) return "dependency-mismatch";
                if (/[^0-9 \-]+/.test(e)) return !1;
                var r, i, n = 0,
                    a = 0,
                    s = !1;
                if (e = e.replace(/\D/g, ""), e.length < 13 || e.length > 19) return !1;
                for (r = e.length - 1; r >= 0; r--) i = e.charAt(r), a = parseInt(i, 10), s && (a *= 2) > 9 && (a -= 9), n += a, s = !s;
                return n % 10 === 0
            },
            minlength: function(t, r, i) {
                var n = e.isArray(t) ? t.length : this.getLength(t, r);
                return this.optional(r) || n >= i
            },
            maxlength: function(t, r, i) {
                var n = e.isArray(t) ? t.length : this.getLength(t, r);
                return this.optional(r) || i >= n
            },
            rangelength: function(t, r, i) {
                var n = e.isArray(t) ? t.length : this.getLength(t, r);
                return this.optional(r) || n >= i[0] && n <= i[1]
            },
            min: function(e, t, r) {
                return this.optional(t) || e >= r
            },
            max: function(e, t, r) {
                return this.optional(t) || r >= e
            },
            range: function(e, t, r) {
                return this.optional(t) || e >= r[0] && e <= r[1]
            },
            equalTo: function(t, r, i) {
                var n = e(i);
                return this.settings.onfocusout && n.off(".validate-equalTo").on("blur.validate-equalTo", function() {
                    e(r).valid()
                }), t === n.val()
            },
            remote: function(t, r, i) {
                if (this.optional(r)) return "dependency-mismatch";
                var n, a, s = this.previousValue(r);
                return this.settings.messages[r.name] || (this.settings.messages[r.name] = {}), s.originalMessage = this.settings.messages[r.name].remote, this.settings.messages[r.name].remote = s.message, i = "string" == typeof i && {
                    url: i
                } || i, s.old === t ? s.valid : (s.old = t, n = this, this.startRequest(r), a = {}, a[r.name] = t, e.ajax(e.extend(!0, {
                    mode: "abort",
                    port: "validate" + r.name,
                    dataType: "json",
                    data: a,
                    context: n.currentForm,
                    success: function(i) {
                        var a, o, l, u = i === !0 || "true" === i;
                        n.settings.messages[r.name].remote = s.originalMessage, u ? (l = n.formSubmitted, n.prepareElement(r), n.formSubmitted = l, n.successList.push(r), delete n.invalid[r.name], n.showErrors()) : (a = {}, o = i || n.defaultMessage(r, "remote"), a[r.name] = s.message = e.isFunction(o) ? o(t) : o, n.invalid[r.name] = !0, n.showErrors(a)), s.valid = u, n.stopRequest(r, u)
                    }
                }, i)), "pending")
            }
        }
    });
    var t, r = {};
    e.ajaxPrefilter ? e.ajaxPrefilter(function(e, t, i) {
        var n = e.port;
        "abort" === e.mode && (r[n] && r[n].abort(), r[n] = i)
    }) : (t = e.ajax, e.ajax = function(i) {
        var n = ("mode" in i ? i : e.ajaxSettings).mode,
            a = ("port" in i ? i : e.ajaxSettings).port;
        return "abort" === n ? (r[a] && r[a].abort(), r[a] = t.apply(this, arguments), r[a]) : t.apply(this, arguments)
    })
}), ! function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof module && module.exports ? module.exports = function(t, r) {
        return void 0 === r && (r = "undefined" != typeof window ? require("jquery") : require("jquery")(t)), e(r), r
    } : e(jQuery)
}(function(e) {
    "use strict";

    function t(t) {
        var r = t.data;
        t.isDefaultPrevented() || (t.preventDefault(), e(t.target).closest("form").ajaxSubmit(r))
    }

    function r(t) {
        var r = t.target,
            i = e(r);
        if (!i.is("[type=submit],[type=image]")) {
            var n = i.closest("[type=submit]");
            if (0 === n.length) return;
            r = n[0]
        }
        var a = r.form;
        if (a.clk = r, "image" === r.type)
            if (void 0 !== t.offsetX) a.clk_x = t.offsetX, a.clk_y = t.offsetY;
            else if ("function" == typeof e.fn.offset) {
                var s = i.offset();
                a.clk_x = t.pageX - s.left, a.clk_y = t.pageY - s.top
            } else a.clk_x = t.pageX - r.offsetLeft, a.clk_y = t.pageY - r.offsetTop;
        setTimeout(function() {
            a.clk = a.clk_x = a.clk_y = null
        }, 100)
    }

    function i() {
        if (e.fn.ajaxSubmit.debug) {
            var t = "[jquery.form] " + Array.prototype.join.call(arguments, "");
            window.console && window.console.log ? window.console.log(t) : window.opera && window.opera.postError && window.opera.postError(t)
        }
    }
    var n = /\r?\n/g,
        a = {};
    a.fileapi = void 0 !== e('<input type="file">').get(0).files, a.formdata = void 0 !== window.FormData;
    var s = !!e.fn.prop;
    e.fn.attr2 = function() {
        if (!s) return this.attr.apply(this, arguments);
        var e = this.prop.apply(this, arguments);
        return e && e.jquery || "string" == typeof e ? e : this.attr.apply(this, arguments)
    }, e.fn.ajaxSubmit = function(t, r, n, o) {
        function l(r) {
            var i, n, a = e.param(r, t.traditional).split("&"),
                s = a.length,
                o = [];
            for (i = 0; s > i; i++) a[i] = a[i].replace(/\+/g, " "), n = a[i].split("="), o.push([decodeURIComponent(n[0]), decodeURIComponent(n[1])]);
            return o
        }

        function u(r) {
            function n(e) {
                var t = null;
                try {
                    e.contentWindow && (t = e.contentWindow.document)
                } catch (e) {
                    i("cannot get iframe.contentWindow document: " + e)
                }
                if (t) return t;
                try {
                    t = e.contentDocument ? e.contentDocument : e.document
                } catch (r) {
                    i("cannot get iframe.contentDocument: " + r), t = e.document
                }
                return t
            }

            function a() {
                function e() {
                    try {
                        var t = n(g).readyState;
                        i("state = " + t), t && "uninitialized" === t.toLowerCase() && setTimeout(e, 50)
                    } catch (t) {
                        i("Server abort: ", t, " (", t.name, ")"), o(A), S && clearTimeout(S), S = void 0
                    }
                }
                var t = m.attr2("target"),
                    r = m.attr2("action"),
                    a = m.attr("enctype") || m.attr("encoding") || "multipart/form-data";
                T.setAttribute("target", f), c && !/post/i.test(c) || T.setAttribute("method", "POST"), r !== d.url && T.setAttribute("action", d.url), d.skipEncodingOverride || c && !/post/i.test(c) || m.attr({
                    encoding: "multipart/form-data",
                    enctype: "multipart/form-data"
                }), d.timeout && (S = setTimeout(function() {
                    w = !0, o(L)
                }, d.timeout));
                var s = [];
                try {
                    if (d.extraData)
                        for (var l in d.extraData) d.extraData.hasOwnProperty(l) && (u.isPlainObject(d.extraData[l]) && d.extraData[l].hasOwnProperty("name") && d.extraData[l].hasOwnProperty("value") ? s.push(u('<input type="hidden" name="' + d.extraData[l].name + '">', k).val(d.extraData[l].value).appendTo(T)[0]) : s.push(u('<input type="hidden" name="' + l + '">', k).val(d.extraData[l]).appendTo(T)[0]));
                    d.iframeTarget || p.appendTo(j), g.attachEvent ? g.attachEvent("onload", o) : g.addEventListener("load", o, !1), setTimeout(e, 15);
                    try {
                        T.submit()
                    } catch (u) {
                        document.createElement("form").submit.apply(T)
                    }
                } finally {
                    T.setAttribute("action", r), T.setAttribute("enctype", a), t ? T.setAttribute("target", t) : m.removeAttr("target"), u(s).remove()
                }
            }

            function o(e) {
                if (!b.aborted && !R) {
                    if ((q = n(g)) || (i("cannot access response document"), e = A), e === L && b) return b.abort("timeout"), void C.reject(b, "timeout");
                    if (e === A && b) return b.abort("server abort"), void C.reject(b, "error", "server abort");
                    if (q && q.location.href !== d.iframeSrc || w) {
                        g.detachEvent ? g.detachEvent("onload", o) : g.removeEventListener("load", o, !1);
                        var t, r = "success";
                        try {
                            if (w) throw "timeout";
                            var a = "xml" === d.dataType || q.XMLDocument || v.isXMLDoc(q);
                            if (i("isXml=" + a), !a && window.opera && (null === q.body || !q.body.innerHTML) && --M) return i("requeing onLoad callback, DOM not available"), void setTimeout(o, 250);
                            var s = q.body ? q.body : q.documentElement;
                            b.responseText = s ? s.innerHTML : null, b.responseXML = q.XMLDocument ? q.XMLDocument : q, a && (d.dataType = "xml"), b.getResponseHeader = function(e) {
                                return {
                                    "content-type": d.dataType
                                }[e.toLowerCase()]
                            }, s && (b.status = Number(s.getAttribute("status")) || b.status, b.statusText = s.getAttribute("statusText") || b.statusText);
                            var l = (d.dataType || "").toLowerCase(),
                                u = /(json|script|text)/.test(l);
                            if (u || d.textarea) {
                                var c = q.getElementsByTagName("textarea")[0];
                                if (c) b.responseText = c.value, b.status = Number(c.getAttribute("status")) || b.status, b.statusText = c.getAttribute("statusText") || b.statusText;
                                else if (u) {
                                    var m = q.getElementsByTagName("pre")[0],
                                        f = q.getElementsByTagName("body")[0];
                                    m ? b.responseText = m.textContent ? m.textContent : m.innerText : f && (b.responseText = f.textContent ? f.textContent : f.innerText)
                                }
                            } else "xml" === l && !b.responseXML && b.responseText && (b.responseXML = N(b.responseText));
                            try {
                                D = O(b, l, d)
                            } catch (v) {
                                r = "parsererror", b.error = t = v || r
                            }
                        } catch (v) {
                            i("error caught: ", v), r = "error", b.error = t = v || r
                        }
                        b.aborted && (i("upload aborted"), r = null), b.status && (r = b.status >= 200 && b.status < 300 || 304 === b.status ? "success" : "error"), "success" === r ? (d.success && d.success.call(d.context, D, "success", b), C.resolve(b.responseText, "success", b), h && v.event.trigger("ajaxSuccess", [b, d])) : r && (void 0 === t && (t = b.statusText), d.error && d.error.call(d.context, b, r, t), C.reject(b, "error", t), h && v.event.trigger("ajaxError", [b, d, t])), h && v.event.trigger("ajaxComplete", [b, d]), h && !--v.active && v.event.trigger("ajaxStop"), d.complete && d.complete.call(d.context, b, r), R = !0, d.timeout && clearTimeout(S), setTimeout(function() {
                            d.iframeTarget ? p.attr("src", d.iframeSrc) : p.remove(), b.responseXML = null
                        }, 100)
                    }
                }
            }
            var l, u, d, h, f, p, g, b, y, x, w, S, T = m[0],
                C = e.Deferred();
            if (C.abort = function(e) {
                b.abort(e)
            }, r)
                for (u = 0; u < v.length; u++) l = e(v[u]), s ? l.prop("disabled", !1) : l.removeAttr("disabled");
            (d = e.extend(!0, {}, e.ajaxSettings, t)).context = d.context || d, f = "jqFormIO" + (new Date).getTime();
            var k = T.ownerDocument,
                j = m.closest("body");
            if (d.iframeTarget ? (x = (p = e(d.iframeTarget, k)).attr2("name")) ? f = x : p.attr2("name", f) : (p = e('<iframe name="' + f + '" src="' + d.iframeSrc + '" />', k)).css({
                position: "absolute",
                top: "-1000px",
                left: "-1000px"
            }), g = p[0], b = {
                aborted: 0,
                responseText: null,
                responseXML: null,
                status: 0,
                statusText: "n/a",
                getAllResponseHeaders: function() {},
                getResponseHeader: function() {},
                setRequestHeader: function() {},
                abort: function(e) {
                    var t = "timeout" === e ? "timeout" : "aborted";
                    i("aborting upload... " + t), this.aborted = 1;
                    try {
                        g.contentWindow.document.execCommand && g.contentWindow.document.execCommand("Stop")
                    } catch (r) {}
                    p.attr("src", d.iframeSrc), b.error = t, d.error && d.error.call(d.context, b, t, e), h && r.event.trigger("ajaxError", [b, d, t]), d.complete && d.complete.call(d.context, b, t)
                }
            }, (h = d.global) && 0 == e.active++ && e.event.trigger("ajaxStart"), h && e.event.trigger("ajaxSend", [b, d]), d.beforeSend && !1 === d.beforeSend.call(d.context, b, d)) return d.global && e.active--, C.reject(), C;
            if (b.aborted) return C.reject(), C;
            (y = T.clk) && (x = y.name) && !y.disabled && (d.extraData = d.extraData || {}, d.extraData[x] = y.value, "image" === y.type && (d.extraData[x + ".x"] = T.clk_x, d.extraData[x + ".y"] = T.clk_y));
            var L = 1,
                A = 2,
                E = e("meta[name=csrf-token]").attr("content"),
                F = e("meta[name=csrf-param]").attr("content");
            F && E && (d.extraData = d.extraData || {}, d.extraData[F] = E), d.forceSync ? a() : setTimeout(a, 10);
            var D, q, R, M = 50,
                N = e.parseXML || function(e, t) {
                    return window.ActiveXObject ? ((t = new ActiveXObject("Microsoft.XMLDOM")).async = "false", t.loadXML(e)) : t = (new DOMParser).parseFromString(e, "text/xml"), t && t.documentElement && "parsererror" !== t.documentElement.nodeName ? t : null
                },
                z = e.parseJSON || function(e) {
                    return window.eval("(" + e + ")")
                },
                O = function(t, r, i) {
                    var n = t.getResponseHeader("content-type") || "",
                        a = ("xml" === r || !r) && n.indexOf("xml") >= 0,
                        s = a ? t.responseXML : t.responseText;
                    return a && "parsererror" === s.documentElement.nodeName && e.error && e.error("parsererror"), i && i.dataFilter && (s = i.dataFilter(s, r)), "string" == typeof s && (("json" === r || !r) && n.indexOf("json") >= 0 ? s = z(s) : ("script" === r || !r) && n.indexOf("javascript") >= 0 && e.globalEval(s)), s
                };
            return C
        }
        if (!this.length) return i("ajaxSubmit: skipping submit process - no element selected"), this;
        var c, d, h, m = this;
        "function" == typeof t ? t = {
            success: t
        } : "string" == typeof t || !1 === t && arguments.length > 0 ? (t = {
            url: t,
            data: r,
            dataType: n
        }, "function" == typeof o && (t.success = o)) : void 0 === t && (t = {}), c = t.method || t.type || this.attr2("method"), (h = (h = "string" == typeof(d = t.url || this.attr2("action")) ? e.trim(d) : "") || window.location.href || "") && (h = (h.match(/^([^#]+)/) || [])[1]), t = e.extend(!0, {
            url: h,
            success: e.ajaxSettings.success,
            type: c || e.ajaxSettings.type,
            iframeSrc: /^https/i.test(window.location.href || "") ? "javascript:false" : "about:blank"
        }, t);
        var f = {};
        if (this.trigger("form-pre-serialize", [this, t, f]), f.veto) return i("ajaxSubmit: submit vetoed via form-pre-serialize trigger"), this;
        if (t.beforeSerialize && !1 === t.beforeSerialize(this, t)) return i("ajaxSubmit: submit aborted via beforeSerialize callback"), this;
        var p = t.traditional;
        void 0 === p && (p = e.ajaxSettings.traditional);
        var g, v = [],
            b = this.formToArray(t.semantic, v, t.filtering);
        if (t.data) {
            var y = e.isFunction(t.data) ? t.data(b) : t.data;
            t.extraData = y, g = e.param(y, p)
        }
        if (t.beforeSubmit && !1 === t.beforeSubmit(b, this, t)) return i("ajaxSubmit: submit aborted via beforeSubmit callback"), this;
        if (this.trigger("form-submit-validate", [b, this, t, f]), f.veto) return i("ajaxSubmit: submit vetoed via form-submit-validate trigger"), this;
        var x = e.param(b, p);
        g && (x = x ? x + "&" + g : g), "GET" === t.type.toUpperCase() ? (t.url += (t.url.indexOf("?") >= 0 ? "&" : "?") + x, t.data = null) : t.data = x;
        var w = [];
        if (t.resetForm && w.push(function() {
            m.resetForm()
        }), t.clearForm && w.push(function() {
            m.clearForm(t.includeHidden)
        }), !t.dataType && t.target) {
            var S = t.success || function() {};
            w.push(function(r, i, n) {
                var a = arguments,
                    s = t.replaceTarget ? "replaceWith" : "html";
                e(t.target)[s](r).each(function() {
                    S.apply(this, a)
                })
            })
        } else t.success && (e.isArray(t.success) ? e.merge(w, t.success) : w.push(t.success));
        if (t.success = function(e, r, i) {
            for (var n = t.context || this, a = 0, s = w.length; s > a; a++) w[a].apply(n, [e, r, i || m, m])
        }, t.error) {
            var T = t.error;
            t.error = function(e, r, i) {
                var n = t.context || this;
                T.apply(n, [e, r, i, m])
            }
        }
        if (t.complete) {
            var C = t.complete;
            t.complete = function(e, r) {
                var i = t.context || this;
                C.apply(i, [e, r, m])
            }
        }
        var k = e("input[type=file]:enabled", this).filter(function() {
                return "" !== e(this).val()
            }).length > 0,
            j = "multipart/form-data",
            L = m.attr("enctype") === j || m.attr("encoding") === j,
            A = a.fileapi && a.formdata;
        i("fileAPI :" + A);
        var E, F = (k || L) && !A;
        !1 !== t.iframe && (t.iframe || F) ? t.closeKeepAlive ? e.get(t.closeKeepAlive, function() {
            E = u(b)
        }) : E = u(b) : E = (k || L) && A ? function(r) {
            for (var i = new FormData, n = 0; n < r.length; n++) i.append(r[n].name, r[n].value);
            if (t.extraData) {
                var a = l(t.extraData);
                for (n = 0; n < a.length; n++) a[n] && i.append(a[n][0], a[n][1])
            }
            t.data = null;
            var s = e.extend(!0, {}, e.ajaxSettings, t, {
                contentType: !1,
                processData: !1,
                cache: !1,
                type: c || "POST"
            });
            t.uploadProgress && (s.xhr = function() {
                var r = e.ajaxSettings.xhr();
                return r.upload && r.upload.addEventListener("progress", function(e) {
                    var r = 0,
                        i = e.loaded || e.position,
                        n = e.total;
                    e.lengthComputable && (r = Math.ceil(i / n * 100)), t.uploadProgress(e, i, n, r)
                }, !1), r
            }), s.data = null;
            var o = s.beforeSend;
            return s.beforeSend = function(e, r) {
                t.formData ? r.data = t.formData : r.data = i, o && o.call(this, e, r)
            }, e.ajax(s)
        }(b) : e.ajax(t), m.removeData("jqxhr").data("jqxhr", E);
        for (var D = 0; D < v.length; D++) v[D] = null;
        return this.trigger("form-submit-notify", [this, t]), this
    }, e.fn.ajaxForm = function(n, a, s, o) {
        if (("string" == typeof n || !1 === n && arguments.length > 0) && (n = {
            url: n,
            data: a,
            dataType: s
        }, "function" == typeof o && (n.success = o)), n = n || {}, n.delegation = n.delegation && e.isFunction(e.fn.on), !n.delegation && 0 === this.length) {
            var l = {
                s: this.selector,
                c: this.context
            };
            return !e.isReady && l.s ? (i("DOM not ready, queuing ajaxForm"), e(function() {
                e(l.s, l.c).ajaxForm(n)
            }), this) : (i("terminating; zero elements found by selector" + (e.isReady ? "" : " (DOM not ready)")), this)
        }
        return n.delegation ? (e(document).off("submit.form-plugin", this.selector, t).off("click.form-plugin", this.selector, r).on("submit.form-plugin", this.selector, n, t).on("click.form-plugin", this.selector, n, r), this) : this.ajaxFormUnbind().on("submit.form-plugin", n, t).on("click.form-plugin", n, r)
    }, e.fn.ajaxFormUnbind = function() {
        return this.off("submit.form-plugin click.form-plugin")
    }, e.fn.formToArray = function(t, r, i) {
        var n = [];
        if (0 === this.length) return n;
        var s, o = this[0],
            l = this.attr("id"),
            u = t || void 0 === o.elements ? o.getElementsByTagName("*") : o.elements;
        if (u && (u = e.makeArray(u)), l && (t || /(Edge|Trident)\//.test(navigator.userAgent)) && (s = e(':input[form="' + l + '"]').get()).length && (u = (u || []).concat(s)), !u || !u.length) return n;
        e.isFunction(i) && (u = e.map(u, i));
        var c, d, h, m, f, p, g;
        for (c = 0, p = u.length; p > c; c++)
            if (f = u[c], (h = f.name) && !f.disabled)
                if (t && o.clk && "image" === f.type) o.clk === f && (n.push({
                    name: h,
                    value: e(f).val(),
                    type: f.type
                }), n.push({
                    name: h + ".x",
                    value: o.clk_x
                }, {
                    name: h + ".y",
                    value: o.clk_y
                }));
                else if ((m = e.fieldValue(f, !0)) && m.constructor === Array)
                    for (r && r.push(f), d = 0, g = m.length; g > d; d++) n.push({
                        name: h,
                        value: m[d]
                    });
                else if (a.fileapi && "file" === f.type) {
                    r && r.push(f);
                    var v = f.files;
                    if (v.length)
                        for (d = 0; d < v.length; d++) n.push({
                            name: h,
                            value: v[d],
                            type: f.type
                        });
                    else n.push({
                        name: h,
                        value: "",
                        type: f.type
                    })
                } else null !== m && void 0 !== m && (r && r.push(f), n.push({
                    name: h,
                    value: m,
                    type: f.type,
                    required: f.required
                }));
        if (!t && o.clk) {
            var b = e(o.clk),
                y = b[0];
            (h = y.name) && !y.disabled && "image" === y.type && (n.push({
                name: h,
                value: b.val()
            }), n.push({
                name: h + ".x",
                value: o.clk_x
            }, {
                name: h + ".y",
                value: o.clk_y
            }))
        }
        return n
    }, e.fn.formSerialize = function(t) {
        return e.param(this.formToArray(t))
    }, e.fn.fieldSerialize = function(t) {
        var r = [];
        return this.each(function() {
            var i = this.name;
            if (i) {
                var n = e.fieldValue(this, t);
                if (n && n.constructor === Array)
                    for (var a = 0, s = n.length; s > a; a++) r.push({
                        name: i,
                        value: n[a]
                    });
                else null !== n && void 0 !== n && r.push({
                    name: this.name,
                    value: n
                })
            }
        }), e.param(r)
    }, e.fn.fieldValue = function(t) {
        for (var r = [], i = 0, n = this.length; n > i; i++) {
            var a = this[i],
                s = e.fieldValue(a, t);
            null === s || void 0 === s || s.constructor === Array && !s.length || (s.constructor === Array ? e.merge(r, s) : r.push(s))
        }
        return r
    }, e.fieldValue = function(t, r) {
        var i = t.name,
            a = t.type,
            s = t.tagName.toLowerCase();
        if (void 0 === r && (r = !0), r && (!i || t.disabled || "reset" === a || "button" === a || ("checkbox" === a || "radio" === a) && !t.checked || ("submit" === a || "image" === a) && t.form && t.form.clk !== t || "select" === s && -1 === t.selectedIndex)) return null;
        if ("select" === s) {
            var o = t.selectedIndex;
            if (0 > o) return null;
            for (var l = [], u = t.options, c = "select-one" === a, d = c ? o + 1 : u.length, h = c ? o : 0; d > h; h++) {
                var m = u[h];
                if (m.selected && !m.disabled) {
                    var f = m.value;
                    if (f || (f = m.attributes && m.attributes.value && !m.attributes.value.specified ? m.text : m.value), c) return f;
                    l.push(f)
                }
            }
            return l
        }
        return e(t).val().replace(n, "\r\n")
    }, e.fn.clearForm = function(t) {
        return this.each(function() {
            e("input,select,textarea", this).clearFields(t)
        })
    }, e.fn.clearFields = e.fn.clearInputs = function(t) {
        var r = /^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;
        return this.each(function() {
            var i = this.type,
                n = this.tagName.toLowerCase();
            r.test(i) || "textarea" === n ? this.value = "" : "checkbox" === i || "radio" === i ? this.checked = !1 : "select" === n ? this.selectedIndex = -1 : "file" === i ? /MSIE/.test(navigator.userAgent) ? e(this).replaceWith(e(this).clone(!0)) : e(this).val("") : t && (!0 === t && /hidden/.test(i) || "string" == typeof t && e(this).is(t)) && (this.value = "")
        })
    }, e.fn.resetForm = function() {
        return this.each(function() {
            var t = e(this),
                r = this.tagName.toLowerCase();
            switch (r) {
                case "input":
                    this.checked = this.defaultChecked;
                case "textarea":
                    return this.value = this.defaultValue, !0;
                case "option":
                case "optgroup":
                    var i = t.parents("select");
                    return i.length && i[0].multiple ? "option" === r ? this.selected = this.defaultSelected : t.find("option").resetForm() : i.resetForm(), !0;
                case "select":
                    return t.find("option").each(function(e) {
                        return this.selected = this.defaultSelected, this.defaultSelected && !t[0].multiple ? (t[0].selectedIndex = e, !1) : void 0
                    }), !0;
                case "label":
                    var n = e(t.attr("for")),
                        a = t.find("input,select,textarea");
                    return n[0] && a.unshift(n[0]), a.resetForm(), !0;
                case "form":
                    return ("function" == typeof this.reset || "object" == typeof this.reset && !this.reset.nodeType) && this.reset(), !0;
                default:
                    return t.find("form,input,label,select,textarea").resetForm(), !0
            }
        })
    }, e.fn.enable = function(e) {
        return void 0 === e && (e = !0), this.each(function() {
            this.disabled = !e
        })
    }, e.fn.selected = function(t) {
        return void 0 === t && (t = !0), this.each(function() {
            var r = this.type;
            if ("checkbox" === r || "radio" === r) this.checked = t;
            else if ("option" === this.tagName.toLowerCase()) {
                var i = e(this).parent("select");
                t && i[0] && "select-one" === i[0].type && i.find("option").selected(!1), this.selected = t
            }
        })
    }, e.fn.ajaxSubmit.debug = !1
}),
    function(e) {
        function t(e, t) {
            t && e.append(t.jquery ? t.clone() : t)
        }

        function r(t, r, n) {
            var a = r.clone(n.formValues);
            n.formValues && i(r, a, "select, textarea"), n.removeScripts && a.find("script").remove(), n.printContainer ? a.appendTo(t) : a.each(function() {
                e(this).children().appendTo(t)
            })
        }

        function i(t, r, i) {
            var n = t.find(i);
            r.find(i).each(function(t, r) {
                e(r).val(n.eq(t).val())
            })
        }
        var n;
        e.fn.printThis = function(i) {
            n = e.extend({}, e.fn.printThis.defaults, i);
            var a = this instanceof jQuery ? this : e(this),
                s = "printThis-" + (new Date).getTime();
            if (window.location.hostname !== document.domain && navigator.userAgent.match(/msie/i)) {
                var o = 'javascript:document.write("<head><script>document.domain=\\"' + document.domain + '\\";</script></head><body></body>")',
                    l = document.createElement("iframe");
                l.name = "printIframe", l.id = s, l.className = "MSIE", document.body.appendChild(l), l.src = o
            } else {
                var u = e("<iframe id='" + s + "' name='printIframe' />");
                u.appendTo("body")
            }
            var c = e("#" + s);
            n.debug || c.css({
                position: "absolute",
                width: "0px",
                height: "0px",
                left: "-600px",
                top: "-600px"
            }), setTimeout(function() {
                function i(e, t) {
                    var r, i;
                    r = e.get(0), r = r.contentWindow || r.contentDocument || r, i = r.document || r.contentDocument || r, i.open(), i.write(t), i.close()
                }
                n.doctypeString && i(c, n.doctypeString);
                var s, o = c.contents(),
                    l = o.find("head"),
                    u = o.find("body"),
                    d = e("base");
                s = n.base === !0 && d.length > 0 ? d.attr("href") : "string" == typeof n.base ? n.base : document.location.protocol + "//" + document.location.host, l.append('<base href="' + s + '">'), n.importCSS && e("link[rel=stylesheet]").each(function() {
                    var t = e(this).attr("href");
                    if (t) {
                        var r = e(this).attr("media") || "all";
                        l.append("<link type='text/css' rel='stylesheet' href='" + t + "' media='" + r + "'>")
                    }
                }), n.importStyle && e("style").each(function() {
                    e(this).clone().appendTo(l)
                }), n.pageTitle && l.append("<title>" + n.pageTitle + "</title>"), n.loadCSS && (e.isArray(n.loadCSS) ? jQuery.each(n.loadCSS, function(e, t) {
                    l.append("<link type='text/css' rel='stylesheet' href='" + this + "'>")
                }) : l.append("<link type='text/css' rel='stylesheet' href='" + n.loadCSS + "'>"));
                var h = n.copyTagClasses;
                if (h && (h = h === !0 ? "bh" : h, -1 !== h.indexOf("b") && u.addClass(e("body")[0].className), -1 !== h.indexOf("h") && o.find("html").addClass(e("html")[0].className)), t(u, n.header), n.canvas) {
                    var m = 0;
                    a.find("canvas").each(function() {
                        e(this).attr("data-printthis", m++)
                    })
                }
                r(u, a, n), n.canvas && u.find("canvas").each(function() {
                    var t = e(this).data("printthis"),
                        r = e('[data-printthis="' + t + '"]');
                    this.getContext("2d").drawImage(r[0], 0, 0), r.removeData("printthis")
                }), n.removeInline && (e.isFunction(e.removeAttr) ? o.find("body *").removeAttr("style") : o.find("body *").attr("style", "")), t(u, n.footer), setTimeout(function() {
                    c.hasClass("MSIE") ? (window.frames.printIframe.focus(), l.append("<script>  window.print(); </script>")) : document.queryCommandSupported("print") ? c[0].contentWindow.document.execCommand("print", !1, null) : (c[0].contentWindow.focus(), c[0].contentWindow.print()), n.debug || setTimeout(function() {
                        c.remove()
                    }, 1e3)
                }, n.printDelay)
            }, 333)
        }, e.fn.printThis.defaults = {
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
    }(jQuery);
/*!
 * Bootstrap v3.3.5 (http://getbootstrap.com)
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */

/*!
 * Generated using the Bootstrap Customizer (http://getbootstrap.com/customize/?id=35b072e804118cf2fd87)
 * Config saved to config.json and https://gist.github.com/35b072e804118cf2fd87
 */
if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); + function(t) {
    "use strict";
    var e = t.fn.jquery.split(" ")[0].split(".");
    if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1 || e[0] > 2) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 3")
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var i = t(this),
                n = i.data("bs.alert");
            n || i.data("bs.alert", n = new o(this)), "string" == typeof e && n[e].call(i)
        })
    }
    var i = '[data-dismiss="alert"]',
        o = function(e) {
            t(e).on("click", i, this.close)
        };
    o.VERSION = "3.3.6", o.TRANSITION_DURATION = 150, o.prototype.close = function(e) {
        function i() {
            a.detach().trigger("closed.bs.alert").remove()
        }
        var n = t(this),
            s = n.attr("data-target");
        s || (s = n.attr("href"), s = s && s.replace(/.*(?=#[^\s]*$)/, ""));
        var a = t(s);
        e && e.preventDefault(), a.length || (a = n.closest(".alert")), a.trigger(e = t.Event("close.bs.alert")), e.isDefaultPrevented() || (a.removeClass("in"), t.support.transition && a.hasClass("fade") ? a.one("bsTransitionEnd", i).emulateTransitionEnd(o.TRANSITION_DURATION) : i())
    };
    var n = t.fn.alert;
    t.fn.alert = e, t.fn.alert.Constructor = o, t.fn.alert.noConflict = function() {
        return t.fn.alert = n, this
    }, t(document).on("click.bs.alert.data-api", i, o.prototype.close)
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var o = t(this),
                n = o.data("bs.button"),
                s = "object" == typeof e && e;
            n || o.data("bs.button", n = new i(this, s)), "toggle" == e ? n.toggle() : e && n.setState(e)
        })
    }
    var i = function(e, o) {
        this.$element = t(e), this.options = t.extend({}, i.DEFAULTS, o), this.isLoading = !1
    };
    i.VERSION = "3.3.6", i.DEFAULTS = {
        loadingText: "loading..."
    }, i.prototype.setState = function(e) {
        var i = "disabled",
            o = this.$element,
            n = o.is("input") ? "val" : "html",
            s = o.data();
        e += "Text", null == s.resetText && o.data("resetText", o[n]()), setTimeout(t.proxy(function() {
            o[n](null == s[e] ? this.options[e] : s[e]), "loadingText" == e ? (this.isLoading = !0, o.addClass(i).attr(i, i)) : this.isLoading && (this.isLoading = !1, o.removeClass(i).removeAttr(i))
        }, this), 0)
    }, i.prototype.toggle = function() {
        var t = !0,
            e = this.$element.closest('[data-toggle="buttons"]');
        if (e.length) {
            var i = this.$element.find("input");
            "radio" == i.prop("type") ? (i.prop("checked") && (t = !1), e.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == i.prop("type") && (i.prop("checked") !== this.$element.hasClass("active") && (t = !1), this.$element.toggleClass("active")), i.prop("checked", this.$element.hasClass("active")), t && i.trigger("change")
        } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
    };
    var o = t.fn.button;
    t.fn.button = e, t.fn.button.Constructor = i, t.fn.button.noConflict = function() {
        return t.fn.button = o, this
    }, t(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(i) {
        var o = t(i.target);
        o.hasClass("btn") || (o = o.closest(".btn")), e.call(o, "toggle"), t(i.target).is('input[type="radio"]') || t(i.target).is('input[type="checkbox"]') || i.preventDefault()
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(e) {
        t(e.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(e.type))
    })
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var o = t(this),
                n = o.data("bs.carousel"),
                s = t.extend({}, i.DEFAULTS, o.data(), "object" == typeof e && e),
                a = "string" == typeof e ? e : s.slide;
            n || o.data("bs.carousel", n = new i(this, s)), "number" == typeof e ? n.to(e) : a ? n[a]() : s.interval && n.pause().cycle()
        })
    }
    var i = function(e, i) {
        this.$element = t(e), this.$indicators = this.$element.find(".carousel-indicators"), this.options = i, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", t.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", t.proxy(this.pause, this)).on("mouseleave.bs.carousel", t.proxy(this.cycle, this))
    };
    i.VERSION = "3.3.6", i.TRANSITION_DURATION = 600, i.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0,
        keyboard: !0
    }, i.prototype.keydown = function(t) {
        if (!/input|textarea/i.test(t.target.tagName)) {
            switch (t.which) {
                case 37:
                    this.prev();
                    break;
                case 39:
                    this.next();
                    break;
                default:
                    return
            }
            t.preventDefault()
        }
    }, i.prototype.cycle = function(e) {
        return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)), this
    }, i.prototype.getItemIndex = function(t) {
        return this.$items = t.parent().children(".item"), this.$items.index(t || this.$active)
    }, i.prototype.getItemForDirection = function(t, e) {
        var i = this.getItemIndex(e),
            o = "prev" == t && 0 === i || "next" == t && i == this.$items.length - 1;
        if (o && !this.options.wrap) return e;
        var n = "prev" == t ? -1 : 1,
            s = (i + n) % this.$items.length;
        return this.$items.eq(s)
    }, i.prototype.to = function(t) {
        var e = this,
            i = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        return t > this.$items.length - 1 || 0 > t ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function() {
            e.to(t)
        }) : i == t ? this.pause().cycle() : this.slide(t > i ? "next" : "prev", this.$items.eq(t))
    }, i.prototype.pause = function(e) {
        return e || (this.paused = !0), this.$element.find(".next, .prev").length && t.support.transition && (this.$element.trigger(t.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, i.prototype.next = function() {
        return this.sliding ? void 0 : this.slide("next")
    }, i.prototype.prev = function() {
        return this.sliding ? void 0 : this.slide("prev")
    }, i.prototype.slide = function(e, o) {
        var n = this.$element.find(".item.active"),
            s = o || this.getItemForDirection(e, n),
            a = this.interval,
            r = "next" == e ? "left" : "right",
            l = this;
        if (s.hasClass("active")) return this.sliding = !1;
        var h = s[0],
            d = t.Event("slide.bs.carousel", {
                relatedTarget: h,
                direction: r
            });
        if (this.$element.trigger(d), !d.isDefaultPrevented()) {
            if (this.sliding = !0, a && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var p = t(this.$indicators.children()[this.getItemIndex(s)]);
                p && p.addClass("active")
            }
            var c = t.Event("slid.bs.carousel", {
                relatedTarget: h,
                direction: r
            });
            return t.support.transition && this.$element.hasClass("slide") ? (s.addClass(e), s[0].offsetWidth, n.addClass(r), s.addClass(r), n.one("bsTransitionEnd", function() {
                s.removeClass([e, r].join(" ")).addClass("active"), n.removeClass(["active", r].join(" ")), l.sliding = !1, setTimeout(function() {
                    l.$element.trigger(c)
                }, 0)
            }).emulateTransitionEnd(i.TRANSITION_DURATION)) : (n.removeClass("active"), s.addClass("active"), this.sliding = !1, this.$element.trigger(c)), a && this.cycle(), this
        }
    };
    var o = t.fn.carousel;
    t.fn.carousel = e, t.fn.carousel.Constructor = i, t.fn.carousel.noConflict = function() {
        return t.fn.carousel = o, this
    };
    var n = function(i) {
        var o, n = t(this),
            s = t(n.attr("data-target") || (o = n.attr("href")) && o.replace(/.*(?=#[^\s]+$)/, ""));
        if (s.hasClass("carousel")) {
            var a = t.extend({}, s.data(), n.data()),
                r = n.attr("data-slide-to");
            r && (a.interval = !1), e.call(s, a), r && s.data("bs.carousel").to(r), i.preventDefault()
        }
    };
    t(document).on("click.bs.carousel.data-api", "[data-slide]", n).on("click.bs.carousel.data-api", "[data-slide-to]", n), t(window).on("load", function() {
        t('[data-ride="carousel"]').each(function() {
            var i = t(this);
            e.call(i, i.data())
        })
    })
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        var i = e.attr("data-target");
        i || (i = e.attr("href"), i = i && /#[A-Za-z]/.test(i) && i.replace(/.*(?=#[^\s]*$)/, ""));
        var o = i && t(i);
        return o && o.length ? o : e.parent()
    }

    function i(i) {
        i && 3 === i.which || (t(n).remove(), t(s).each(function() {
            var o = t(this),
                n = e(o),
                s = {
                    relatedTarget: this
                };
            n.hasClass("open") && (i && "click" == i.type && /input|textarea/i.test(i.target.tagName) && t.contains(n[0], i.target) || (n.trigger(i = t.Event("hide.bs.dropdown", s)), i.isDefaultPrevented() || (o.attr("aria-expanded", "false"), n.removeClass("open").trigger(t.Event("hidden.bs.dropdown", s)))))
        }))
    }

    function o(e) {
        return this.each(function() {
            var i = t(this),
                o = i.data("bs.dropdown");
            o || i.data("bs.dropdown", o = new a(this)), "string" == typeof e && o[e].call(i)
        })
    }
    var n = ".dropdown-backdrop",
        s = '[data-toggle="dropdown"]',
        a = function(e) {
            t(e).on("click.bs.dropdown", this.toggle)
        };
    a.VERSION = "3.3.6", a.prototype.toggle = function(o) {
        var n = t(this);
        if (!n.is(".disabled, :disabled")) {
            var s = e(n),
                a = s.hasClass("open");
            if (i(), !a) {
                "ontouchstart" in document.documentElement && !s.closest(".navbar-nav").length && t(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(t(this)).on("click", i);
                var r = {
                    relatedTarget: this
                };
                if (s.trigger(o = t.Event("show.bs.dropdown", r)), o.isDefaultPrevented()) return;
                n.trigger("focus").attr("aria-expanded", "true"), s.toggleClass("open").trigger(t.Event("shown.bs.dropdown", r))
            }
            return !1
        }
    }, a.prototype.keydown = function(i) {
        if (/(38|40|27|32)/.test(i.which) && !/input|textarea/i.test(i.target.tagName)) {
            var o = t(this);
            if (i.preventDefault(), i.stopPropagation(), !o.is(".disabled, :disabled")) {
                var n = e(o),
                    a = n.hasClass("open");
                if (!a && 27 != i.which || a && 27 == i.which) return 27 == i.which && n.find(s).trigger("focus"), o.trigger("click");
                var r = " li:not(.disabled):visible a",
                    l = n.find(".dropdown-menu" + r);
                if (l.length) {
                    var h = l.index(i.target);
                    38 == i.which && h > 0 && h--, 40 == i.which && h < l.length - 1 && h++, ~h || (h = 0), l.eq(h).trigger("focus")
                }
            }
        }
    };
    var r = t.fn.dropdown;
    t.fn.dropdown = o, t.fn.dropdown.Constructor = a, t.fn.dropdown.noConflict = function() {
        return t.fn.dropdown = r, this
    }, t(document).on("click.bs.dropdown.data-api", i).on("click.bs.dropdown.data-api", ".dropdown form", function(t) {
        t.stopPropagation()
    }).on("click.bs.dropdown.data-api", s, a.prototype.toggle).on("keydown.bs.dropdown.data-api", s, a.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", a.prototype.keydown)
}(jQuery), + function(t) {
    "use strict";

    function e(e, o) {
        return this.each(function() {
            var n = t(this),
                s = n.data("bs.modal"),
                a = t.extend({}, i.DEFAULTS, n.data(), "object" == typeof e && e);
            s || n.data("bs.modal", s = new i(this, a)), "string" == typeof e ? s[e](o) : a.show && s.show(o)
        })
    }
    var i = function(e, i) {
        this.options = i, this.$body = t(document.body), this.$element = t(e), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy(function() {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    i.VERSION = "3.3.6", i.TRANSITION_DURATION = 300, i.BACKDROP_TRANSITION_DURATION = 150, i.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, i.prototype.toggle = function(t) {
        return this.isShown ? this.hide() : this.show(t)
    }, i.prototype.show = function(e) {
        var o = this,
            n = t.Event("show.bs.modal", {
                relatedTarget: e
            });
        this.$element.trigger(n), this.isShown || n.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function() {
            o.$element.one("mouseup.dismiss.bs.modal", function(e) {
                t(e.target).is(o.$element) && (o.ignoreBackdropClick = !0)
            })
        }), this.backdrop(function() {
            var n = t.support.transition && o.$element.hasClass("fade");
            o.$element.parent().length || o.$element.appendTo(o.$body), o.$element.show().scrollTop(0), o.adjustDialog(), n && o.$element[0].offsetWidth, o.$element.addClass("in"), o.enforceFocus();
            var s = t.Event("shown.bs.modal", {
                relatedTarget: e
            });
            n ? o.$dialog.one("bsTransitionEnd", function() {
                o.$element.trigger("focus").trigger(s)
            }).emulateTransitionEnd(i.TRANSITION_DURATION) : o.$element.trigger("focus").trigger(s)
        }))
    }, i.prototype.hide = function(e) {
        e && e.preventDefault(), e = t.Event("hide.bs.modal"), this.$element.trigger(e), this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), t(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(i.TRANSITION_DURATION) : this.hideModal())
    }, i.prototype.enforceFocus = function() {
        t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy(function(t) {
            this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
        }, this))
    }, i.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", t.proxy(function(t) {
            27 == t.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    }, i.prototype.resize = function() {
        this.isShown ? t(window).on("resize.bs.modal", t.proxy(this.handleUpdate, this)) : t(window).off("resize.bs.modal")
    }, i.prototype.hideModal = function() {
        var t = this;
        this.$element.hide(), this.backdrop(function() {
            t.$body.removeClass("modal-open"), t.resetAdjustments(), t.resetScrollbar(), t.$element.trigger("hidden.bs.modal")
        })
    }, i.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, i.prototype.backdrop = function(e) {
        var o = this,
            n = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var s = t.support.transition && n;
            if (this.$backdrop = t(document.createElement("div")).addClass("modal-backdrop " + n).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", t.proxy(function(t) {
                return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
            }, this)), s && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e) return;
            s ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION) : e()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var a = function() {
                o.removeBackdrop(), e && e()
            };
            t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", a).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION) : a()
        } else e && e()
    }, i.prototype.handleUpdate = function() {
        this.adjustDialog()
    }, i.prototype.adjustDialog = function() {
        var t = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : ""
        })
    }, i.prototype.resetAdjustments = function() {
        this.$element.css({
            paddingLeft: "",
            paddingRight: ""
        })
    }, i.prototype.checkScrollbar = function() {
        var t = window.innerWidth;
        if (!t) {
            var e = document.documentElement.getBoundingClientRect();
            t = e.right - Math.abs(e.left)
        }
        this.bodyIsOverflowing = document.body.clientWidth < t, this.scrollbarWidth = this.measureScrollbar()
    }, i.prototype.setScrollbar = function() {
        var t = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", t + this.scrollbarWidth)
    }, i.prototype.resetScrollbar = function() {
        this.$body.css("padding-right", this.originalBodyPad)
    }, i.prototype.measureScrollbar = function() {
        var t = document.createElement("div");
        t.className = "modal-scrollbar-measure", this.$body.append(t);
        var e = t.offsetWidth - t.clientWidth;
        return this.$body[0].removeChild(t), e
    };
    var o = t.fn.modal;
    t.fn.modal = e, t.fn.modal.Constructor = i, t.fn.modal.noConflict = function() {
        return t.fn.modal = o, this
    }, t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(i) {
        var o = t(this),
            n = o.attr("href"),
            s = t(o.attr("data-target") || n && n.replace(/.*(?=#[^\s]+$)/, "")),
            a = s.data("bs.modal") ? "toggle" : t.extend({
                remote: !/#/.test(n) && n
            }, s.data(), o.data());
        o.is("a") && i.preventDefault(), s.one("show.bs.modal", function(t) {
            t.isDefaultPrevented() || s.one("hidden.bs.modal", function() {
                o.is(":visible") && o.trigger("focus")
            })
        }), e.call(s, a, this)
    })
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var o = t(this),
                n = o.data("bs.tooltip"),
                s = "object" == typeof e && e;
            (n || !/destroy|hide/.test(e)) && (n || o.data("bs.tooltip", n = new i(this, s)), "string" == typeof e && n[e]())
        })
    }
    var i = function(t, e) {
        this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", t, e)
    };
    i.VERSION = "3.3.6", i.TRANSITION_DURATION = 150, i.DEFAULTS = {
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
    }, i.prototype.init = function(e, i, o) {
        if (this.enabled = !0, this.type = e, this.$element = t(i), this.options = this.getOptions(o), this.$viewport = this.options.viewport && t(t.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
            click: !1,
            hover: !1,
            focus: !1
        }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        for (var n = this.options.trigger.split(" "), s = n.length; s--;) {
            var a = n[s];
            if ("click" == a) this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this));
            else if ("manual" != a) {
                var r = "hover" == a ? "mouseenter" : "focusin",
                    l = "hover" == a ? "mouseleave" : "focusout";
                this.$element.on(r + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, t.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = t.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, i.prototype.getDefaults = function() {
        return i.DEFAULTS
    }, i.prototype.getOptions = function(e) {
        return e = t.extend({}, this.getDefaults(), this.$element.data(), e), e.delay && "number" == typeof e.delay && (e.delay = {
            show: e.delay,
            hide: e.delay
        }), e
    }, i.prototype.getDelegateOptions = function() {
        var e = {},
            i = this.getDefaults();
        return this._options && t.each(this._options, function(t, o) {
            i[t] != o && (e[t] = o)
        }), e
    }, i.prototype.enter = function(e) {
        var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        return i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i)), e instanceof t.Event && (i.inState["focusin" == e.type ? "focus" : "hover"] = !0), i.tip().hasClass("in") || "in" == i.hoverState ? void(i.hoverState = "in") : (clearTimeout(i.timeout), i.hoverState = "in", i.options.delay && i.options.delay.show ? void(i.timeout = setTimeout(function() {
            "in" == i.hoverState && i.show()
        }, i.options.delay.show)) : i.show())
    }, i.prototype.isInStateTrue = function() {
        for (var t in this.inState)
            if (this.inState[t]) return !0;
        return !1
    }, i.prototype.leave = function(e) {
        var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        return i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i)), e instanceof t.Event && (i.inState["focusout" == e.type ? "focus" : "hover"] = !1), i.isInStateTrue() ? void 0 : (clearTimeout(i.timeout), i.hoverState = "out", i.options.delay && i.options.delay.hide ? void(i.timeout = setTimeout(function() {
            "out" == i.hoverState && i.hide()
        }, i.options.delay.hide)) : i.hide())
    }, i.prototype.show = function() {
        var e = t.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(e);
            var o = t.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (e.isDefaultPrevented() || !o) return;
            var n = this,
                s = this.tip(),
                a = this.getUID(this.type);
            this.setContent(), s.attr("id", a), this.$element.attr("aria-describedby", a), this.options.animation && s.addClass("fade");
            var r = "function" == typeof this.options.placement ? this.options.placement.call(this, s[0], this.$element[0]) : this.options.placement,
                l = /\s?auto?\s?/i,
                h = l.test(r);
            h && (r = r.replace(l, "") || "top"), s.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(r).data("bs." + this.type, this), this.options.container ? s.appendTo(this.options.container) : s.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
            var d = this.getPosition(),
                p = s[0].offsetWidth,
                c = s[0].offsetHeight;
            if (h) {
                var f = r,
                    u = this.getPosition(this.$viewport);
                r = "bottom" == r && d.bottom + c > u.bottom ? "top" : "top" == r && d.top - c < u.top ? "bottom" : "right" == r && d.right + p > u.width ? "left" : "left" == r && d.left - p < u.left ? "right" : r, s.removeClass(f).addClass(r)
            }
            var g = this.getCalculatedOffset(r, d, p, c);
            this.applyPlacement(g, r);
            var v = function() {
                var t = n.hoverState;
                n.$element.trigger("shown.bs." + n.type), n.hoverState = null, "out" == t && n.leave(n)
            };
            t.support.transition && this.$tip.hasClass("fade") ? s.one("bsTransitionEnd", v).emulateTransitionEnd(i.TRANSITION_DURATION) : v()
        }
    }, i.prototype.applyPlacement = function(e, i) {
        var o = this.tip(),
            n = o[0].offsetWidth,
            s = o[0].offsetHeight,
            a = parseInt(o.css("margin-top"), 10),
            r = parseInt(o.css("margin-left"), 10);
        isNaN(a) && (a = 0), isNaN(r) && (r = 0), e.top += a, e.left += r, t.offset.setOffset(o[0], t.extend({
            using: function(t) {
                o.css({
                    top: Math.round(t.top),
                    left: Math.round(t.left)
                })
            }
        }, e), 0), o.addClass("in");
        var l = o[0].offsetWidth,
            h = o[0].offsetHeight;
        "top" == i && h != s && (e.top = e.top + s - h);
        var d = this.getViewportAdjustedDelta(i, e, l, h);
        d.left ? e.left += d.left : e.top += d.top;
        var p = /top|bottom/.test(i),
            c = p ? 2 * d.left - n + l : 2 * d.top - s + h,
            f = p ? "offsetWidth" : "offsetHeight";
        o.offset(e), this.replaceArrow(c, o[0][f], p)
    }, i.prototype.replaceArrow = function(t, e, i) {
        this.arrow().css(i ? "left" : "top", 50 * (1 - t / e) + "%").css(i ? "top" : "left", "")
    }, i.prototype.setContent = function() {
        var t = this.tip(),
            e = this.getTitle();
        t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right")
    }, i.prototype.hide = function(e) {
        function o() {
            "in" != n.hoverState && s.detach(), n.$element.removeAttr("aria-describedby").trigger("hidden.bs." + n.type), e && e()
        }
        var n = this,
            s = t(this.$tip),
            a = t.Event("hide.bs." + this.type);
        return this.$element.trigger(a), a.isDefaultPrevented() ? void 0 : (s.removeClass("in"), t.support.transition && s.hasClass("fade") ? s.one("bsTransitionEnd", o).emulateTransitionEnd(i.TRANSITION_DURATION) : o(), this.hoverState = null, this)
    }, i.prototype.fixTitle = function() {
        var t = this.$element;
        (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
    }, i.prototype.hasContent = function() {
        return this.getTitle()
    }, i.prototype.getPosition = function(e) {
        e = e || this.$element;
        var i = e[0],
            o = "BODY" == i.tagName,
            n = i.getBoundingClientRect();
        null == n.width && (n = t.extend({}, n, {
            width: n.right - n.left,
            height: n.bottom - n.top
        }));
        var s = o ? {
                top: 0,
                left: 0
            } : e.offset(),
            a = {
                scroll: o ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop()
            },
            r = o ? {
                width: t(window).width(),
                height: t(window).height()
            } : null;
        return t.extend({}, n, a, r, s)
    }, i.prototype.getCalculatedOffset = function(t, e, i, o) {
        return "bottom" == t ? {
            top: e.top + e.height,
            left: e.left + e.width / 2 - i / 2
        } : "top" == t ? {
            top: e.top - o,
            left: e.left + e.width / 2 - i / 2
        } : "left" == t ? {
            top: e.top + e.height / 2 - o / 2,
            left: e.left - i
        } : {
            top: e.top + e.height / 2 - o / 2,
            left: e.left + e.width
        }
    }, i.prototype.getViewportAdjustedDelta = function(t, e, i, o) {
        var n = {
            top: 0,
            left: 0
        };
        if (!this.$viewport) return n;
        var s = this.options.viewport && this.options.viewport.padding || 0,
            a = this.getPosition(this.$viewport);
        if (/right|left/.test(t)) {
            var r = e.top - s - a.scroll,
                l = e.top + s - a.scroll + o;
            r < a.top ? n.top = a.top - r : l > a.top + a.height && (n.top = a.top + a.height - l)
        } else {
            var h = e.left - s,
                d = e.left + s + i;
            h < a.left ? n.left = a.left - h : d > a.right && (n.left = a.left + a.width - d)
        }
        return n
    }, i.prototype.getTitle = function() {
        var t, e = this.$element,
            i = this.options;
        return t = e.attr("data-original-title") || ("function" == typeof i.title ? i.title.call(e[0]) : i.title)
    }, i.prototype.getUID = function(t) {
        do t += ~~(1e6 * Math.random()); while (document.getElementById(t));
        return t
    }, i.prototype.tip = function() {
        if (!this.$tip && (this.$tip = t(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
        return this.$tip
    }, i.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, i.prototype.enable = function() {
        this.enabled = !0
    }, i.prototype.disable = function() {
        this.enabled = !1
    }, i.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    }, i.prototype.toggle = function(e) {
        var i = this;
        e && (i = t(e.currentTarget).data("bs." + this.type), i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i))), e ? (i.inState.click = !i.inState.click, i.isInStateTrue() ? i.enter(i) : i.leave(i)) : i.tip().hasClass("in") ? i.leave(i) : i.enter(i)
    }, i.prototype.destroy = function() {
        var t = this;
        clearTimeout(this.timeout), this.hide(function() {
            t.$element.off("." + t.type).removeData("bs." + t.type), t.$tip && t.$tip.detach(), t.$tip = null, t.$arrow = null, t.$viewport = null
        })
    };
    var o = t.fn.tooltip;
    t.fn.tooltip = e, t.fn.tooltip.Constructor = i, t.fn.tooltip.noConflict = function() {
        return t.fn.tooltip = o, this
    }
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var o = t(this),
                n = o.data("bs.popover"),
                s = "object" == typeof e && e;
            (n || !/destroy|hide/.test(e)) && (n || o.data("bs.popover", n = new i(this, s)), "string" == typeof e && n[e]())
        })
    }
    var i = function(t, e) {
        this.init("popover", t, e)
    };
    if (!t.fn.tooltip) throw new Error("Popover requires tooltip.js");
    i.VERSION = "3.3.6", i.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), i.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype), i.prototype.constructor = i, i.prototype.getDefaults = function() {
        return i.DEFAULTS
    }, i.prototype.setContent = function() {
        var t = this.tip(),
            e = this.getTitle(),
            i = this.getContent();
        t.find(".popover-title")[this.options.html ? "html" : "text"](e), t.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof i ? "html" : "append" : "text"](i), t.removeClass("fade top bottom left right in"), t.find(".popover-title").html() || t.find(".popover-title").hide()
    }, i.prototype.hasContent = function() {
        return this.getTitle() || this.getContent()
    }, i.prototype.getContent = function() {
        var t = this.$element,
            e = this.options;
        return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
    }, i.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    };
    var o = t.fn.popover;
    t.fn.popover = e, t.fn.popover.Constructor = i, t.fn.popover.noConflict = function() {
        return t.fn.popover = o, this
    }
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var o = t(this),
                n = o.data("bs.tab");
            n || o.data("bs.tab", n = new i(this)), "string" == typeof e && n[e]()
        })
    }
    var i = function(e) {
        this.element = t(e)
    };
    i.VERSION = "3.3.6", i.TRANSITION_DURATION = 150, i.prototype.show = function() {
        var e = this.element,
            i = e.closest("ul:not(.dropdown-menu)"),
            o = e.data("target");
        if (o || (o = e.attr("href"), o = o && o.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li").hasClass("active")) {
            var n = i.find(".active:last a"),
                s = t.Event("hide.bs.tab", {
                    relatedTarget: e[0]
                }),
                a = t.Event("show.bs.tab", {
                    relatedTarget: n[0]
                });
            if (n.trigger(s), e.trigger(a), !a.isDefaultPrevented() && !s.isDefaultPrevented()) {
                var r = t(o);
                this.activate(e.closest("li"), i), this.activate(r, r.parent(), function() {
                    n.trigger({
                        type: "hidden.bs.tab",
                        relatedTarget: e[0]
                    }), e.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: n[0]
                    })
                })
            }
        }
    }, i.prototype.activate = function(e, o, n) {
        function s() {
            a.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), r ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"), e.parent(".dropdown-menu").length && e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), n && n()
        }
        var a = o.find("> .active"),
            r = n && t.support.transition && (a.length && a.hasClass("fade") || !!o.find("> .fade").length);
        a.length && r ? a.one("bsTransitionEnd", s).emulateTransitionEnd(i.TRANSITION_DURATION) : s(), a.removeClass("in")
    };
    var o = t.fn.tab;
    t.fn.tab = e, t.fn.tab.Constructor = i, t.fn.tab.noConflict = function() {
        return t.fn.tab = o, this
    };
    var n = function(i) {
        i.preventDefault(), e.call(t(this), "show")
    };
    t(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', n).on("click.bs.tab.data-api", '[data-toggle="pill"]', n)
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var o = t(this),
                n = o.data("bs.affix"),
                s = "object" == typeof e && e;
            n || o.data("bs.affix", n = new i(this, s)), "string" == typeof e && n[e]()
        })
    }
    var i = function(e, o) {
        this.options = t.extend({}, i.DEFAULTS, o), this.$target = t(this.options.target).on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)), this.$element = t(e), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
    };
    i.VERSION = "3.3.6", i.RESET = "affix affix-top affix-bottom", i.DEFAULTS = {
        offset: 0,
        target: window
    }, i.prototype.getState = function(t, e, i, o) {
        var n = this.$target.scrollTop(),
            s = this.$element.offset(),
            a = this.$target.height();
        if (null != i && "top" == this.affixed) return i > n ? "top" : !1;
        if ("bottom" == this.affixed) return null != i ? n + this.unpin <= s.top ? !1 : "bottom" : t - o >= n + a ? !1 : "bottom";
        var r = null == this.affixed,
            l = r ? n : s.top,
            h = r ? a : e;
        return null != i && i >= n ? "top" : null != o && l + h >= t - o ? "bottom" : !1
    }, i.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(i.RESET).addClass("affix");
        var t = this.$target.scrollTop(),
            e = this.$element.offset();
        return this.pinnedOffset = e.top - t
    }, i.prototype.checkPositionWithEventLoop = function() {
        setTimeout(t.proxy(this.checkPosition, this), 1)
    }, i.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
            var e = this.$element.height(),
                o = this.options.offset,
                n = o.top,
                s = o.bottom,
                a = Math.max(t(document).height(), t(document.body).height());
            "object" != typeof o && (s = n = o), "function" == typeof n && (n = o.top(this.$element)), "function" == typeof s && (s = o.bottom(this.$element));
            var r = this.getState(a, e, n, s);
            if (this.affixed != r) {
                null != this.unpin && this.$element.css("top", "");
                var l = "affix" + (r ? "-" + r : ""),
                    h = t.Event(l + ".bs.affix");
                if (this.$element.trigger(h), h.isDefaultPrevented()) return;
                this.affixed = r, this.unpin = "bottom" == r ? this.getPinnedOffset() : null, this.$element.removeClass(i.RESET).addClass(l).trigger(l.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == r && this.$element.offset({
                top: a - e - s
            })
        }
    };
    var o = t.fn.affix;
    t.fn.affix = e, t.fn.affix.Constructor = i, t.fn.affix.noConflict = function() {
        return t.fn.affix = o, this
    }, t(window).on("load", function() {
        t('[data-spy="affix"]').each(function() {
            var i = t(this),
                o = i.data();
            o.offset = o.offset || {}, null != o.offsetBottom && (o.offset.bottom = o.offsetBottom), null != o.offsetTop && (o.offset.top = o.offsetTop), e.call(i, o)
        })
    })
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        var i, o = e.attr("data-target") || (i = e.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, "");
        return t(o)
    }

    function i(e) {
        return this.each(function() {
            var i = t(this),
                n = i.data("bs.collapse"),
                s = t.extend({}, o.DEFAULTS, i.data(), "object" == typeof e && e);
            !n && s.toggle && /show|hide/.test(e) && (s.toggle = !1), n || i.data("bs.collapse", n = new o(this, s)), "string" == typeof e && n[e]()
        })
    }
    var o = function(e, i) {
        this.$element = t(e), this.options = t.extend({}, o.DEFAULTS, i), this.$trigger = t('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
    };
    o.VERSION = "3.3.6", o.TRANSITION_DURATION = 350, o.DEFAULTS = {
        toggle: !0
    }, o.prototype.dimension = function() {
        var t = this.$element.hasClass("width");
        return t ? "width" : "height"
    }, o.prototype.show = function() {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var e, n = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
            if (!(n && n.length && (e = n.data("bs.collapse"), e && e.transitioning))) {
                var s = t.Event("show.bs.collapse");
                if (this.$element.trigger(s), !s.isDefaultPrevented()) {
                    n && n.length && (i.call(n, "hide"), e || n.data("bs.collapse", null));
                    var a = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[a](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                    var r = function() {
                        this.$element.removeClass("collapsing").addClass("collapse in")[a](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                    };
                    if (!t.support.transition) return r.call(this);
                    var l = t.camelCase(["scroll", a].join("-"));
                    this.$element.one("bsTransitionEnd", t.proxy(r, this)).emulateTransitionEnd(o.TRANSITION_DURATION)[a](this.$element[0][l]);
                }
            }
        }
    }, o.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var e = t.Event("hide.bs.collapse");
            if (this.$element.trigger(e), !e.isDefaultPrevented()) {
                var i = this.dimension();
                this.$element[i](this.$element[i]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                var n = function() {
                    this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                };
                return t.support.transition ? void this.$element[i](0).one("bsTransitionEnd", t.proxy(n, this)).emulateTransitionEnd(o.TRANSITION_DURATION) : n.call(this)
            }
        }
    }, o.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    }, o.prototype.getParent = function() {
        return t(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(t.proxy(function(i, o) {
            var n = t(o);
            this.addAriaAndCollapsedClass(e(n), n)
        }, this)).end()
    }, o.prototype.addAriaAndCollapsedClass = function(t, e) {
        var i = t.hasClass("in");
        t.attr("aria-expanded", i), e.toggleClass("collapsed", !i).attr("aria-expanded", i)
    };
    var n = t.fn.collapse;
    t.fn.collapse = i, t.fn.collapse.Constructor = o, t.fn.collapse.noConflict = function() {
        return t.fn.collapse = n, this
    }, t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(o) {
        var n = t(this);
        n.attr("data-target") || o.preventDefault();
        var s = e(n),
            a = s.data("bs.collapse"),
            r = a ? "toggle" : n.data();
        i.call(s, r)
    })
}(jQuery), + function(t) {
    "use strict";

    function e(i, o) {
        this.$body = t(document.body), this.$scrollElement = t(t(i).is(document.body) ? window : i), this.options = t.extend({}, e.DEFAULTS, o), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", t.proxy(this.process, this)), this.refresh(), this.process()
    }

    function i(i) {
        return this.each(function() {
            var o = t(this),
                n = o.data("bs.scrollspy"),
                s = "object" == typeof i && i;
            n || o.data("bs.scrollspy", n = new e(this, s)), "string" == typeof i && n[i]()
        })
    }
    e.VERSION = "3.3.6", e.DEFAULTS = {
        offset: 10
    }, e.prototype.getScrollHeight = function() {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }, e.prototype.refresh = function() {
        var e = this,
            i = "offset",
            o = 0;
        this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), t.isWindow(this.$scrollElement[0]) || (i = "position", o = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function() {
            var e = t(this),
                n = e.data("target") || e.attr("href"),
                s = /^#./.test(n) && t(n);
            return s && s.length && s.is(":visible") && [
                [s[i]().top + o, n]
            ] || null
        }).sort(function(t, e) {
            return t[0] - e[0]
        }).each(function() {
            e.offsets.push(this[0]), e.targets.push(this[1])
        })
    }, e.prototype.process = function() {
        var t, e = this.$scrollElement.scrollTop() + this.options.offset,
            i = this.getScrollHeight(),
            o = this.options.offset + i - this.$scrollElement.height(),
            n = this.offsets,
            s = this.targets,
            a = this.activeTarget;
        if (this.scrollHeight != i && this.refresh(), e >= o) return a != (t = s[s.length - 1]) && this.activate(t);
        if (a && e < n[0]) return this.activeTarget = null, this.clear();
        for (t = n.length; t--;) a != s[t] && e >= n[t] && (void 0 === n[t + 1] || e < n[t + 1]) && this.activate(s[t])
    }, e.prototype.activate = function(e) {
        this.activeTarget = e, this.clear();
        var i = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]',
            o = t(i).parents("li").addClass("active");
        o.parent(".dropdown-menu").length && (o = o.closest("li.dropdown").addClass("active")), o.trigger("activate.bs.scrollspy")
    }, e.prototype.clear = function() {
        t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
    };
    var o = t.fn.scrollspy;
    t.fn.scrollspy = i, t.fn.scrollspy.Constructor = e, t.fn.scrollspy.noConflict = function() {
        return t.fn.scrollspy = o, this
    }, t(window).on("load.bs.scrollspy.data-api", function() {
        t('[data-spy="scroll"]').each(function() {
            var e = t(this);
            i.call(e, e.data())
        })
    })
}(jQuery), + function(t) {
    "use strict";

    function e() {
        var t = document.createElement("bootstrap"),
            e = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
            };
        for (var i in e)
            if (void 0 !== t.style[i]) return {
                end: e[i]
            };
        return !1
    }
    t.fn.emulateTransitionEnd = function(e) {
        var i = !1,
            o = this;
        t(this).one("bsTransitionEnd", function() {
            i = !0
        });
        var n = function() {
            i || t(o).trigger(t.support.transition.end)
        };
        return setTimeout(n, e), this
    }, t(function() {
        t.support.transition = e(), t.support.transition && (t.event.special.bsTransitionEnd = {
            bindType: t.support.transition.end,
            delegateType: t.support.transition.end,
            handle: function(e) {
                return t(e.target).is(this) ? e.handleObj.handler.apply(this, arguments) : void 0
            }
        })
    })
}(jQuery);
! function(t) {
    "use strict";
    var i = null,
        e = function(t) {
            var i = arguments,
                e = !0,
                o = 1;
            return t = t.replace(/%s/g, function() {
                var t = i[o++];
                return "undefined" == typeof t ? (e = !1, "") : t
            }), e ? t : ""
        },
        o = function(i, e, o, s) {
            var n = "";
            return t.each(i, function(t, i) {
                return i[e] === s ? (n = i[o], !1) : !0
            }), n
        },
        s = function(i, e) {
            var o = -1;
            return t.each(i, function(t, i) {
                return i.field === e ? (o = t, !1) : !0
            }), o
        },
        n = function(i) {
            var e, o, s, n = 0,
                a = [];
            for (e = 0; e < i[0].length; e++) n += i[0][e].colspan || 1;
            for (e = 0; e < i.length; e++)
                for (a[e] = [], o = 0; n > o; o++) a[e][o] = !1;
            for (e = 0; e < i.length; e++)
                for (o = 0; o < i[e].length; o++) {
                    var r = i[e][o],
                        h = r.rowspan || 1,
                        l = r.colspan || 1,
                        p = t.inArray(!1, a[e]);
                    for (1 === l && (r.fieldIndex = p, "undefined" == typeof r.field && (r.field = p)), s = 0; h > s; s++) a[e + s][p] = !0;
                    for (s = 0; l > s; s++) a[e][p + s] = !0
                }
        },
        a = function() {
            if (null === i) {
                var e, o, s = t("<p/>").addClass("fixed-table-scroll-inner"),
                    n = t("<div/>").addClass("fixed-table-scroll-outer");
                n.append(s), t("body").append(n), e = s[0].offsetWidth, n.css("overflow", "scroll"), o = s[0].offsetWidth, e === o && (o = n[0].clientWidth), n.remove(), i = e - o
            }
            return i
        },
        r = function(i, o, s, n) {
            var a = o;
            if ("string" == typeof o) {
                var r = o.split(".");
                r.length > 1 ? (a = window, t.each(r, function(t, i) {
                    a = a[i]
                })) : a = window[o]
            }
            return "object" == typeof a ? a : "function" == typeof a ? a.apply(i, s || []) : !a && "string" == typeof o && e.apply(this, [o].concat(s)) ? e.apply(this, [o].concat(s)) : n
        },
        h = function(i, e, o) {
            var s = Object.getOwnPropertyNames(i),
                n = Object.getOwnPropertyNames(e),
                a = "";
            if (o && s.length !== n.length) return !1;
            for (var r = 0; r < s.length; r++)
                if (a = s[r], t.inArray(a, n) > -1 && i[a] !== e[a]) return !1;
            return !0
        },
        l = function(t) {
            return "string" == typeof t ? t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;").replace(/`/g, "&#x60;") : t
        },
        p = function(t) {
            for (var i in t) {
                var e = i.split(/(?=[A-Z])/).join("-").toLowerCase();
                e !== i && (t[e] = t[i], delete t[i])
            }
            return t
        },
        c = function(t, i, e) {
            var o = t;
            if ("string" != typeof i || t.hasOwnProperty(i)) return e ? l(t[i]) : t[i];
            var s = i.split(".");
            for (var n in s) s.hasOwnProperty(n) && (o = o && o[s[n]]);
            return e ? l(o) : o
        },
        d = function() {
            return !!(navigator.userAgent.indexOf("MSIE ") > 0 || navigator.userAgent.match(/Trident.*rv\:11\./))
        },
        u = function() {
            Object.keys || (Object.keys = function() {
                var t = Object.prototype.hasOwnProperty,
                    i = !{
                        toString: null
                    }.propertyIsEnumerable("toString"),
                    e = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"],
                    o = e.length;
                return function(s) {
                    if ("object" != typeof s && ("function" != typeof s || null === s)) throw new TypeError("Object.keys called on non-object");
                    var n, a, r = [];
                    for (n in s) t.call(s, n) && r.push(n);
                    if (i)
                        for (a = 0; o > a; a++) t.call(s, e[a]) && r.push(e[a]);
                    return r
                }
            }())
        },
        f = function(i, e) {
            this.options = e, this.$el = t(i), this.$el_ = this.$el.clone(), this.timeoutId_ = 0, this.timeoutFooter_ = 0, this.init()
        };
    f.DEFAULTS = {
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
        queryParams: function(t) {
            return t
        },
        queryParamsType: "limit",
        responseHandler: function(t) {
            return t
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
        detailFormatter: function(t, i) {
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
        customSearch: t.noop,
        customSort: t.noop,
        rowStyle: function(t, i) {
            return {}
        },
        rowAttributes: function(t, i) {
            return {}
        },
        footerStyle: function(t, i) {
            return {}
        },
        onAll: function(t, i) {
            return !1
        },
        onClickCell: function(t, i, e, o) {
            return !1
        },
        onDblClickCell: function(t, i, e, o) {
            return !1
        },
        onClickRow: function(t, i) {
            return !1
        },
        onDblClickRow: function(t, i) {
            return !1
        },
        onSort: function(t, i) {
            return !1
        },
        onCheck: function(t) {
            return !1
        },
        onUncheck: function(t) {
            return !1
        },
        onCheckAll: function(t) {
            return !1
        },
        onUncheckAll: function(t) {
            return !1
        },
        onCheckSome: function(t) {
            return !1
        },
        onUncheckSome: function(t) {
            return !1
        },
        onLoadSuccess: function(t) {
            return !1
        },
        onLoadError: function(t) {
            return !1
        },
        onColumnSwitch: function(t, i) {
            return !1
        },
        onPageChange: function(t, i) {
            return !1
        },
        onSearch: function(t) {
            return !1
        },
        onToggle: function(t) {
            return !1
        },
        onPreBody: function(t) {
            return !1
        },
        onPostBody: function() {
            return !1
        },
        onPostHeader: function() {
            return !1
        },
        onExpandRow: function(t, i, e) {
            return !1
        },
        onCollapseRow: function(t, i) {
            return !1
        },
        onRefreshOptions: function(t) {
            return !1
        },
        onRefresh: function(t) {
            return !1
        },
        onResetView: function() {
            return !1
        }
    }, f.LOCALES = {}, f.LOCALES["en-US"] = f.LOCALES.en = {
        formatLoadingMessage: function() {
            return "Loading, please wait..."
        },
        formatRecordsPerPage: function(t) {
            return e("%s rows per page", t)
        },
        formatShowingRows: function(t, i, o) {
            return e("Showing %s to %s of %s rows", t, i, o)
        },
        formatDetailPagination: function(t) {
            return e("Showing %s rows", t)
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
    }, t.extend(f.DEFAULTS, f.LOCALES["en-US"]), f.COLUMN_DEFAULTS = {
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
    }, f.EVENTS = {
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
    }, f.prototype.init = function() {
        this.initLocale(), this.initContainer(), this.initTable(), this.initHeader(), this.initData(), this.initHiddenRows(), this.initFooter(), this.initToolbar(), this.initPagination(), this.initBody(), this.initSearchText(), this.initServer()
    }, f.prototype.initLocale = function() {
        if (this.options.locale) {
            var i = this.options.locale.split(/-|_/);
            i[0].toLowerCase(), i[1] && i[1].toUpperCase(), t.fn.bootstrapTable.locales[this.options.locale] ? t.extend(this.options, t.fn.bootstrapTable.locales[this.options.locale]) : t.fn.bootstrapTable.locales[i.join("-")] ? t.extend(this.options, t.fn.bootstrapTable.locales[i.join("-")]) : t.fn.bootstrapTable.locales[i[0]] && t.extend(this.options, t.fn.bootstrapTable.locales[i[0]])
        }
    }, f.prototype.initContainer = function() {
        this.$container = t(['<div class="bootstrap-table">', '<div class="fixed-table-toolbar"></div>', "top" === this.options.paginationVAlign || "both" === this.options.paginationVAlign ? '<div class="fixed-table-pagination" style="clear: both;"></div>' : "", '<div class="fixed-table-container">', '<div class="fixed-table-header"><table></table></div>', '<div class="fixed-table-body">', '<div class="fixed-table-loading">', this.options.formatLoadingMessage(), "</div>", "</div>", '<div class="fixed-table-footer"><table><tr></tr></table></div>', "bottom" === this.options.paginationVAlign || "both" === this.options.paginationVAlign ? '<div class="fixed-table-pagination"></div>' : "", "</div>", "</div>"].join("")), this.$container.insertAfter(this.$el), this.$tableContainer = this.$container.find(".fixed-table-container"), this.$tableHeader = this.$container.find(".fixed-table-header"), this.$tableBody = this.$container.find(".fixed-table-body"), this.$tableLoading = this.$container.find(".fixed-table-loading"), this.$tableFooter = this.$container.find(".fixed-table-footer"), this.$toolbar = this.$container.find(".fixed-table-toolbar"), this.$pagination = this.$container.find(".fixed-table-pagination"), this.$tableBody.append(this.$el), this.$container.after('<div class="clearfix"></div>'), this.$el.addClass(this.options.classes), this.options.striped && this.$el.addClass("table-striped"), -1 !== t.inArray("table-no-bordered", this.options.classes.split(" ")) && this.$tableContainer.addClass("table-no-bordered")
    }, f.prototype.initTable = function() {
        var i = this,
            e = [],
            o = [];
        if (this.$header = this.$el.find(">thead"), this.$header.length || (this.$header = t("<thead></thead>").appendTo(this.$el)), this.$header.find("tr").each(function() {
            var i = [];
            t(this).find("th").each(function() {
                "undefined" != typeof t(this).data("field") && t(this).data("field", t(this).data("field") + ""), i.push(t.extend({}, {
                    title: t(this).html(),
                    "class": t(this).attr("class"),
                    titleTooltip: t(this).attr("title"),
                    rowspan: t(this).attr("rowspan") ? +t(this).attr("rowspan") : void 0,
                    colspan: t(this).attr("colspan") ? +t(this).attr("colspan") : void 0
                }, t(this).data()))
            }), e.push(i)
        }), t.isArray(this.options.columns[0]) || (this.options.columns = [this.options.columns]), this.options.columns = t.extend(!0, [], e, this.options.columns), this.columns = [], n(this.options.columns), t.each(this.options.columns, function(e, o) {
            t.each(o, function(o, s) {
                s = t.extend({}, f.COLUMN_DEFAULTS, s), "undefined" != typeof s.fieldIndex && (i.columns[s.fieldIndex] = s), i.options.columns[e][o] = s
            })
        }), !this.options.data.length) {
            var s = [];
            this.$el.find(">tbody>tr").each(function(e) {
                var n = {};
                n._id = t(this).attr("id"), n._class = t(this).attr("class"), n._data = p(t(this).data()), t(this).find(">td").each(function(o) {
                    for (var a, r, h = t(this), l = +h.attr("colspan") || 1, c = +h.attr("rowspan") || 1; s[e] && s[e][o]; o++);
                    for (a = o; o + l > a; a++)
                        for (r = e; e + c > r; r++) s[r] || (s[r] = []), s[r][a] = !0;
                    var d = i.columns[o].field;
                    n[d] = t(this).html(), n["_" + d + "_id"] = t(this).attr("id"), n["_" + d + "_class"] = t(this).attr("class"), n["_" + d + "_rowspan"] = t(this).attr("rowspan"), n["_" + d + "_colspan"] = t(this).attr("colspan"), n["_" + d + "_title"] = t(this).attr("title"), n["_" + d + "_data"] = p(t(this).data())
                }), o.push(n)
            }), this.options.data = o, o.length && (this.fromHtml = !0)
        }
    }, f.prototype.initHeader = function() {
        var i = this,
            o = {},
            s = [];
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
        }, t.each(this.options.columns, function(n, a) {
            s.push("<tr>"), 0 === n && !i.options.cardView && i.options.detailView && s.push(e('<th class="detail" rowspan="%s"><div class="fht-cell"></div></th>', i.options.columns.length)), t.each(a, function(t, n) {
                var a = "",
                    r = "",
                    h = "",
                    p = "",
                    c = e(' class="%s"', n["class"]),
                    d = (i.options.sortOrder || n.order, "px"),
                    u = n.width;
                if (void 0 === n.width || i.options.cardView || "string" == typeof n.width && -1 !== n.width.indexOf("%") && (d = "%"), n.width && "string" == typeof n.width && (u = n.width.replace("%", "").replace("px", "")), r = e("text-align: %s; ", n.halign ? n.halign : n.align), h = e("text-align: %s; ", n.align), p = e("vertical-align: %s; ", n.valign), p += e("width: %s; ", !n.checkbox && !n.radio || u ? u ? u + d : void 0 : "36px"), "undefined" != typeof n.fieldIndex) {
                    if (i.header.fields[n.fieldIndex] = n.field, i.header.styles[n.fieldIndex] = h + p, i.header.classes[n.fieldIndex] = c, i.header.formatters[n.fieldIndex] = n.formatter, i.header.events[n.fieldIndex] = n.events, i.header.sorters[n.fieldIndex] = n.sorter, i.header.sortNames[n.fieldIndex] = n.sortName, i.header.cellStyles[n.fieldIndex] = n.cellStyle, i.header.searchables[n.fieldIndex] = n.searchable, !n.visible) return;
                    if (i.options.cardView && !n.cardVisible) return;
                    o[n.field] = n
                }
                s.push("<th" + e(' title="%s"', n.titleTooltip), n.checkbox || n.radio ? e(' class="bs-checkbox %s"', n["class"] || "") : c, e(' style="%s"', r + p), e(' rowspan="%s"', n.rowspan), e(' colspan="%s"', n.colspan), e(' data-field="%s"', n.field), ">"), s.push(e('<div class="th-inner %s">', i.options.sortable && n.sortable ? "sortable both" : "")), a = i.options.escape ? l(n.title) : n.title, n.checkbox && (!i.options.singleSelect && i.options.checkboxHeader && (a = '<input name="btSelectAll" type="checkbox" />'), i.header.stateField = n.field), n.radio && (a = "", i.header.stateField = n.field, i.options.singleSelect = !0), s.push(a), s.push("</div>"), s.push('<div class="fht-cell"></div>'), s.push("</div>"), s.push("</th>")
            }), s.push("</tr>")
        }), this.$header.html(s.join("")), this.$header.find("th[data-field]").each(function(i) {
            t(this).data(o[t(this).data("field")])
        }), this.$container.off("click", ".th-inner").on("click", ".th-inner", function(e) {
            var o = t(this);
            return i.options.detailView && o.closest(".bootstrap-table")[0] !== i.$container[0] ? !1 : void(i.options.sortable && o.parent().data().sortable && i.onSort(e))
        }), this.$header.children().children().off("keypress").on("keypress", function(e) {
            if (i.options.sortable && t(this).data().sortable) {
                var o = e.keyCode || e.which;
                13 == o && i.onSort(e)
            }
        }), t(window).off("resize.bootstrap-table"), !this.options.showHeader || this.options.cardView ? (this.$header.hide(), this.$tableHeader.hide(), this.$tableLoading.css("top", 0)) : (this.$header.show(), this.$tableHeader.show(), this.$tableLoading.css("top", this.$header.outerHeight() + 1), this.getCaret(), t(window).on("resize.bootstrap-table", t.proxy(this.resetWidth, this))), this.$selectAll = this.$header.find('[name="btSelectAll"]'), this.$selectAll.off("click").on("click", function() {
            var e = t(this).prop("checked");
            i[e ? "checkAll" : "uncheckAll"](), i.updateSelected()
        })
    }, f.prototype.initFooter = function() {
        !this.options.showFooter || this.options.cardView ? this.$tableFooter.hide() : this.$tableFooter.show()
    }, f.prototype.initData = function(t, i) {
        "append" === i ? this.data = this.data.concat(t) : "prepend" === i ? this.data = [].concat(t).concat(this.data) : this.data = t || this.options.data, "append" === i ? this.options.data = this.options.data.concat(t) : "prepend" === i ? this.options.data = [].concat(t).concat(this.options.data) : this.options.data = this.data, "server" !== this.options.sidePagination && this.initSort()
    }, f.prototype.initSort = function() {
        var i = this,
            o = this.options.sortName,
            s = "desc" === this.options.sortOrder ? -1 : 1,
            n = t.inArray(this.options.sortName, this.header.fields),
            a = 0;
        return this.options.customSort !== t.noop ? void this.options.customSort.apply(this, [this.options.sortName, this.options.sortOrder]) : void(-1 !== n && (this.options.sortStable && t.each(this.data, function(t, i) {
            i.hasOwnProperty("_position") || (i._position = t)
        }), this.data.sort(function(e, a) {
            i.header.sortNames[n] && (o = i.header.sortNames[n]);
            var h = c(e, o, i.options.escape),
                l = c(a, o, i.options.escape),
                p = r(i.header, i.header.sorters[n], [h, l]);
            return void 0 !== p ? s * p : ((void 0 === h || null === h) && (h = ""), (void 0 === l || null === l) && (l = ""), i.options.sortStable && h === l && (h = e._position, l = a._position), t.isNumeric(h) && t.isNumeric(l) ? (h = parseFloat(h), l = parseFloat(l), l > h ? -1 * s : s) : h === l ? 0 : ("string" != typeof h && (h = h.toString()), -1 === h.localeCompare(l) ? -1 * s : s))
        }), void 0 !== this.options.sortClass && (clearTimeout(a), a = setTimeout(function() {
            i.$el.removeClass(i.options.sortClass);
            var t = i.$header.find(e('[data-field="%s"]', i.options.sortName).index() + 1);
            i.$el.find(e("tr td:nth-child(%s)", t)).addClass(i.options.sortClass)
        }, 250))))
    }, f.prototype.onSort = function(i) {
        var e = "keypress" === i.type ? t(i.currentTarget) : t(i.currentTarget).parent(),
            o = this.$header.find("th").eq(e.index());
        return this.$header.add(this.$header_).find("span.order").remove(), this.options.sortName === e.data("field") ? this.options.sortOrder = "asc" === this.options.sortOrder ? "desc" : "asc" : (this.options.sortName = e.data("field"), this.options.sortOrder = "asc" === e.data("order") ? "desc" : "asc"), this.trigger("sort", this.options.sortName, this.options.sortOrder), e.add(o).data("order", this.options.sortOrder), this.getCaret(), "server" === this.options.sidePagination ? void this.initServer(this.options.silentSort) : (this.initSort(), void this.initBody())
    }, f.prototype.initToolbar = function() {
        var i, o, s = this,
            n = [],
            a = 0,
            h = 0;
        this.$toolbar.find(".bs-bars").children().length && t("body").append(t(this.options.toolbar)), this.$toolbar.html(""), ("string" == typeof this.options.toolbar || "object" == typeof this.options.toolbar) && t(e('<div class="bs-bars pull-%s"></div>', this.options.toolbarAlign)).appendTo(this.$toolbar).append(t(this.options.toolbar)), n = [e('<div class="columns columns-%s btn-group pull-%s">', this.options.buttonsAlign, this.options.buttonsAlign)], "string" == typeof this.options.icons && (this.options.icons = r(null, this.options.icons)), this.options.showPaginationSwitch && n.push(e('<button class="btn' + e(" btn-%s", this.options.buttonsClass) + e(" btn-%s", this.options.iconSize) + '" type="button" name="paginationSwitch" aria-label="pagination Switch" title="%s">', this.options.formatPaginationSwitch()), e('<i class="%s %s"></i>', this.options.iconsPrefix, this.options.icons.paginationSwitchDown), "</button>"), this.options.showRefresh && n.push(e('<button class="btn' + e(" btn-%s", this.options.buttonsClass) + e(" btn-%s", this.options.iconSize) + '" type="button" name="refresh" aria-label="refresh" title="%s">', this.options.formatRefresh()), e('<i class="%s %s"></i>', this.options.iconsPrefix, this.options.icons.refresh), "</button>"), this.options.showToggle && n.push(e('<button class="btn' + e(" btn-%s", this.options.buttonsClass) + e(" btn-%s", this.options.iconSize) + '" type="button" name="toggle" aria-label="toggle" title="%s">', this.options.formatToggle()), e('<i class="%s %s"></i>', this.options.iconsPrefix, this.options.icons.toggle), "</button>"), this.options.showColumns && (n.push(e('<div class="keep-open btn-group" title="%s">', this.options.formatColumns()), '<button type="button" aria-label="columns" class="btn' + e(" btn-%s", this.options.buttonsClass) + e(" btn-%s", this.options.iconSize) + ' dropdown-toggle" data-toggle="dropdown">', e('<i class="%s %s"></i>', this.options.iconsPrefix, this.options.icons.columns), ' <span class="caret"></span>', "</button>", '<ul class="dropdown-menu" role="menu">'), t.each(this.columns, function(t, i) {
            if (!i.radio && !i.checkbox && (!s.options.cardView || i.cardVisible)) {
                var o = i.visible ? ' checked="checked"' : "";
                i.switchable && (n.push(e('<li role="menuitem"><label><input type="checkbox" data-field="%s" value="%s"%s> %s</label></li>', i.field, t, o, i.title)), h++)
            }
        }), n.push("</ul>", "</div>")), n.push("</div>"), (this.showToolbar || n.length > 2) && this.$toolbar.append(n.join("")), this.options.showPaginationSwitch && this.$toolbar.find('button[name="paginationSwitch"]').off("click").on("click", t.proxy(this.togglePagination, this)), this.options.showRefresh && this.$toolbar.find('button[name="refresh"]').off("click").on("click", t.proxy(this.refresh, this)), this.options.showToggle && this.$toolbar.find('button[name="toggle"]').off("click").on("click", function() {
            s.toggleView()
        }), this.options.showColumns && (i = this.$toolbar.find(".keep-open"), h <= this.options.minimumCountColumns && i.find("input").prop("disabled", !0), i.find("li").off("click").on("click", function(t) {
            t.stopImmediatePropagation()
        }), i.find("input").off("click").on("click", function() {
            var i = t(this);
            s.toggleColumn(t(this).val(), i.prop("checked"), !1), s.trigger("column-switch", t(this).data("field"), i.prop("checked"))
        })), this.options.search && (n = [], n.push('<div class="pull-' + this.options.searchAlign + ' search">', e('<input class="form-control' + e(" input-%s", this.options.iconSize) + '" type="text" placeholder="%s">', this.options.formatSearch()), "</div>"), this.$toolbar.append(n.join("")), o = this.$toolbar.find(".search input"), o.off("keyup drop blur").on("keyup drop blur", function(i) {
            s.options.searchOnEnterKey && 13 !== i.keyCode || t.inArray(i.keyCode, [37, 38, 39, 40]) > -1 || (clearTimeout(a), a = setTimeout(function() {
                s.onSearch(i)
            }, s.options.searchTimeOut))
        }), d() && o.off("mouseup").on("mouseup", function(t) {
            clearTimeout(a), a = setTimeout(function() {
                s.onSearch(t)
            }, s.options.searchTimeOut)
        }))
    }, f.prototype.onSearch = function(i) {
        var e = t.trim(t(i.currentTarget).val());
        this.options.trimOnSearch && t(i.currentTarget).val() !== e && t(i.currentTarget).val(e), e !== this.searchText && (this.searchText = e, this.options.searchText = e, this.options.pageNumber = 1, this.initSearch(), this.updatePagination(), this.trigger("search", e))
    }, f.prototype.initSearch = function() {
        var i = this;
        if ("server" !== this.options.sidePagination) {
            if (this.options.customSearch !== t.noop) return void this.options.customSearch.apply(this, [this.searchText]);
            var e = this.searchText && (this.options.escape ? l(this.searchText) : this.searchText).toLowerCase(),
                o = t.isEmptyObject(this.filterColumns) ? null : this.filterColumns;
            this.data = o ? t.grep(this.options.data, function(i, e) {
                for (var s in o)
                    if (t.isArray(o[s]) && -1 === t.inArray(i[s], o[s]) || !t.isArray(o[s]) && i[s] !== o[s]) return !1;
                return !0
            }) : this.options.data, this.data = e ? t.grep(this.data, function(o, n) {
                for (var a = 0; a < i.header.fields.length; a++)
                    if (i.header.searchables[a]) {
                        var h, l = t.isNumeric(i.header.fields[a]) ? parseInt(i.header.fields[a], 10) : i.header.fields[a],
                            p = i.columns[s(i.columns, l)];
                        if ("string" == typeof l) {
                            h = o;
                            for (var c = l.split("."), d = 0; d < c.length; d++) h = h[c[d]];
                            p && p.searchFormatter && (h = r(p, i.header.formatters[a], [h, o, n], h))
                        } else h = o[l];
                        if ("string" == typeof h || "number" == typeof h)
                            if (i.options.strictSearch) {
                                if ((h + "").toLowerCase() === e) return !0
                            } else if (-1 !== (h + "").toLowerCase().indexOf(e)) return !0
                    }
                return !1
            }) : this.data
        }
    }, f.prototype.initPagination = function() {
        if (!this.options.pagination) return void this.$pagination.hide();
        this.$pagination.show();
        var i, o, s, n, a, r, h, l, p, c = this,
            d = [],
            u = !1,
            f = this.getData(),
            g = this.options.pageList;
        if ("server" !== this.options.sidePagination && (this.options.totalRows = f.length), this.totalPages = 0, this.options.totalRows) {
            if (this.options.pageSize === this.options.formatAllRows()) this.options.pageSize = this.options.totalRows, u = !0;
            else if (this.options.pageSize === this.options.totalRows) {
                var b = "string" == typeof this.options.pageList ? this.options.pageList.replace("[", "").replace("]", "").replace(/ /g, "").toLowerCase().split(",") : this.options.pageList;
                t.inArray(this.options.formatAllRows().toLowerCase(), b) > -1 && (u = !0)
            }
            this.totalPages = ~~((this.options.totalRows - 1) / this.options.pageSize) + 1, this.options.totalPages = this.totalPages
        }
        if (this.totalPages > 0 && this.options.pageNumber > this.totalPages && (this.options.pageNumber = this.totalPages), this.pageFrom = (this.options.pageNumber - 1) * this.options.pageSize + 1, this.pageTo = this.options.pageNumber * this.options.pageSize, this.pageTo > this.options.totalRows && (this.pageTo = this.options.totalRows), d.push('<div class="pull-' + this.options.paginationDetailHAlign + ' pagination-detail">', '<span class="pagination-info">', this.options.onlyInfoPagination ? this.options.formatDetailPagination(this.options.totalRows) : this.options.formatShowingRows(this.pageFrom, this.pageTo, this.options.totalRows), "</span>"), !this.options.onlyInfoPagination) {
            d.push('<span class="page-list">');
            var m = [e('<span class="btn-group %s">', "top" === this.options.paginationVAlign || "both" === this.options.paginationVAlign ? "dropdown" : "dropup"), '<button type="button" class="btn' + e(" btn-%s", this.options.buttonsClass) + e(" btn-%s", this.options.iconSize) + ' dropdown-toggle" data-toggle="dropdown">', '<span class="page-size">', u ? this.options.formatAllRows() : this.options.pageSize, "</span>", ' <span class="caret"></span>', "</button>", '<ul class="dropdown-menu" role="menu">'];
            if ("string" == typeof this.options.pageList) {
                var y = this.options.pageList.replace("[", "").replace("]", "").replace(/ /g, "").split(",");
                g = [], t.each(y, function(t, i) {
                    g.push(i.toUpperCase() === c.options.formatAllRows().toUpperCase() ? c.options.formatAllRows() : +i)
                })
            }
            for (t.each(g, function(t, i) {
                if (!c.options.smartDisplay || 0 === t || g[t - 1] < c.options.totalRows) {
                    var o;
                    o = u ? i === c.options.formatAllRows() ? ' class="active"' : "" : i === c.options.pageSize ? ' class="active"' : "", m.push(e('<li role="menuitem"%s><a href="#">%s</a></li>', o, i))
                }
            }), m.push("</ul></span>"), d.push(this.options.formatRecordsPerPage(m.join(""))), d.push("</span>"), d.push("</div>", '<div class="pull-' + this.options.paginationHAlign + ' pagination">', '<ul class="pagination' + e(" pagination-%s", this.options.iconSize) + '">', '<li class="page-pre"><a href="#">' + this.options.paginationPreText + "</a></li>"), this.totalPages < 5 ? (o = 1, s = this.totalPages) : (o = this.options.pageNumber - 2, s = o + 4, 1 > o && (o = 1, s = 5), s > this.totalPages && (s = this.totalPages, o = s - 4)), this.totalPages >= 6 && (this.options.pageNumber >= 3 && (d.push('<li class="page-first' + (1 === this.options.pageNumber ? " active" : "") + '">', '<a href="#">', 1, "</a>", "</li>"), o++), this.options.pageNumber >= 4 && (4 == this.options.pageNumber || 6 == this.totalPages || 7 == this.totalPages ? o-- : d.push('<li class="page-first-separator disabled">', '<a href="#">...</a>', "</li>"), s--)), this.totalPages >= 7 && this.options.pageNumber >= this.totalPages - 2 && o--, 6 == this.totalPages ? this.options.pageNumber >= this.totalPages - 2 && s++ : this.totalPages >= 7 && (7 == this.totalPages || this.options.pageNumber >= this.totalPages - 3) && s++, i = o; s >= i; i++) d.push('<li class="page-number' + (i === this.options.pageNumber ? " active" : "") + '">', '<a href="#">', i, "</a>", "</li>");
            this.totalPages >= 8 && this.options.pageNumber <= this.totalPages - 4 && d.push('<li class="page-last-separator disabled">', '<a href="#">...</a>', "</li>"), this.totalPages >= 6 && this.options.pageNumber <= this.totalPages - 3 && d.push('<li class="page-last' + (this.totalPages === this.options.pageNumber ? " active" : "") + '">', '<a href="#">', this.totalPages, "</a>", "</li>"), d.push('<li class="page-next"><a href="#">' + this.options.paginationNextText + "</a></li>", "</ul>", "</div>")
        }
        this.$pagination.html(d.join("")), this.options.onlyInfoPagination || (n = this.$pagination.find(".page-list a"), a = this.$pagination.find(".page-first"), r = this.$pagination.find(".page-pre"), h = this.$pagination.find(".page-next"), l = this.$pagination.find(".page-last"), p = this.$pagination.find(".page-number"), this.options.smartDisplay && (this.totalPages <= 1 && this.$pagination.find("div.pagination").hide(), (g.length < 2 || this.options.totalRows <= g[0]) && this.$pagination.find("span.page-list").hide(), this.$pagination[this.getData().length ? "show" : "hide"]()), this.options.paginationLoop || (1 === this.options.pageNumber && r.addClass("disabled"), this.options.pageNumber === this.totalPages && h.addClass("disabled")), u && (this.options.pageSize = this.options.formatAllRows()), n.off("click").on("click", t.proxy(this.onPageListChange, this)), a.off("click").on("click", t.proxy(this.onPageFirst, this)), r.off("click").on("click", t.proxy(this.onPagePre, this)), h.off("click").on("click", t.proxy(this.onPageNext, this)), l.off("click").on("click", t.proxy(this.onPageLast, this)), p.off("click").on("click", t.proxy(this.onPageNumber, this)))
    }, f.prototype.updatePagination = function(i) {
        i && t(i.currentTarget).hasClass("disabled") || (this.options.maintainSelected || this.resetRows(), this.initPagination(), "server" === this.options.sidePagination ? this.initServer() : this.initBody(), this.trigger("page-change", this.options.pageNumber, this.options.pageSize))
    }, f.prototype.onPageListChange = function(i) {
        var e = t(i.currentTarget);
        return e.parent().addClass("active").siblings().removeClass("active"), this.options.pageSize = e.text().toUpperCase() === this.options.formatAllRows().toUpperCase() ? this.options.formatAllRows() : +e.text(), this.$toolbar.find(".page-size").text(this.options.pageSize), this.updatePagination(i), !1
    }, f.prototype.onPageFirst = function(t) {
        return this.options.pageNumber = 1, this.updatePagination(t), !1
    }, f.prototype.onPagePre = function(t) {
        return this.options.pageNumber - 1 === 0 ? this.options.pageNumber = this.options.totalPages : this.options.pageNumber--, this.updatePagination(t), !1
    }, f.prototype.onPageNext = function(t) {
        return this.options.pageNumber + 1 > this.options.totalPages ? this.options.pageNumber = 1 : this.options.pageNumber++, this.updatePagination(t), !1
    }, f.prototype.onPageLast = function(t) {
        return this.options.pageNumber = this.totalPages, this.updatePagination(t), !1
    }, f.prototype.onPageNumber = function(i) {
        return this.options.pageNumber !== +t(i.currentTarget).text() ? (this.options.pageNumber = +t(i.currentTarget).text(), this.updatePagination(i), !1) : void 0
    }, f.prototype.initRow = function(i, s, n, a) {
        var h, p = this,
            d = [],
            u = {},
            f = [],
            g = "",
            b = {},
            m = [];
        if (!(t.inArray(i, this.hiddenRows) > -1)) {
            if (u = r(this.options, this.options.rowStyle, [i, s], u), u && u.css)
                for (h in u.css) f.push(h + ": " + u.css[h]);
            if (b = r(this.options, this.options.rowAttributes, [i, s], b))
                for (h in b) m.push(e('%s="%s"', h, l(b[h])));
            return i._data && !t.isEmptyObject(i._data) && t.each(i._data, function(t, i) {
                "index" !== t && (g += e(' data-%s="%s"', t, i))
            }), d.push("<tr", e(" %s", m.join(" ")), e(' id="%s"', t.isArray(i) ? void 0 : i._id), e(' class="%s"', u.classes || (t.isArray(i) ? void 0 : i._class)), e(' data-index="%s"', s), e(' data-uniqueid="%s"', i[this.options.uniqueId]), e("%s", g), ">"), this.options.cardView && d.push(e('<td colspan="%s"><div class="card-views">', this.header.fields.length)), !this.options.cardView && this.options.detailView && d.push("<td>", '<a class="detail-icon" href="#">', e('<i class="%s %s"></i>', this.options.iconsPrefix, this.options.icons.detailOpen), "</a>", "</td>"), t.each(this.header.fields, function(n, a) {
                var h = "",
                    g = c(i, a, p.options.escape),
                    b = "",
                    m = "",
                    y = {},
                    w = "",
                    v = p.header.classes[n],
                    x = "",
                    S = "",
                    $ = "",
                    k = "",
                    P = p.columns[n];
                if ((!p.fromHtml || "undefined" != typeof g) && P.visible && (!p.options.cardView || P.cardVisible)) {
                    if (P.escape && (g = l(g)), u = e('style="%s"', f.concat(p.header.styles[n]).join("; ")), i["_" + a + "_id"] && (w = e(' id="%s"', i["_" + a + "_id"])), i["_" + a + "_class"] && (v = e(' class="%s"', i["_" + a + "_class"])), i["_" + a + "_rowspan"] && (S = e(' rowspan="%s"', i["_" + a + "_rowspan"])), i["_" + a + "_colspan"] && ($ = e(' colspan="%s"', i["_" + a + "_colspan"])), i["_" + a + "_title"] && (k = e(' title="%s"', i["_" + a + "_title"])), y = r(p.header, p.header.cellStyles[n], [g, i, s, a], y), y.classes && (v = e(' class="%s"', y.classes)), y.css) {
                        var C = [];
                        for (var T in y.css) C.push(T + ": " + y.css[T]);
                        u = e('style="%s"', C.concat(p.header.styles[n]).join("; "))
                    }
                    b = r(P, p.header.formatters[n], [g, i, s], g), i["_" + a + "_data"] && !t.isEmptyObject(i["_" + a + "_data"]) && t.each(i["_" + a + "_data"], function(t, i) {
                        "index" !== t && (x += e(' data-%s="%s"', t, i))
                    }), P.checkbox || P.radio ? (m = P.checkbox ? "checkbox" : m, m = P.radio ? "radio" : m, h = [e(p.options.cardView ? '<div class="card-view %s">' : '<td class="bs-checkbox %s">', P["class"] || ""), "<input" + e(' data-index="%s"', s) + e(' name="%s"', p.options.selectItemName) + e(' type="%s"', m) + e(' value="%s"', i[p.options.idField]) + e(' checked="%s"', b === !0 || g || b && b.checked ? "checked" : void 0) + e(' disabled="%s"', !P.checkboxEnabled || b && b.disabled ? "disabled" : void 0) + " />", p.header.formatters[n] && "string" == typeof b ? b : "", p.options.cardView ? "</div>" : "</td>"].join(""), i[p.header.stateField] = b === !0 || b && b.checked) : (b = "undefined" == typeof b || null === b ? p.options.undefinedText : b, h = p.options.cardView ? ['<div class="card-view">', p.options.showHeader ? e('<span class="title" %s>%s</span>', u, o(p.columns, "field", "title", a)) : "", e('<span class="value">%s</span>', b), "</div>"].join("") : [e("<td%s %s %s %s %s %s %s>", w, v, u, x, S, $, k), b, "</td>"].join(""), p.options.cardView && p.options.smartDisplay && "" === b && (h = '<div class="card-view"></div>')), d.push(h)
                }
            }), this.options.cardView && d.push("</div></td>"), d.push("</tr>"), d.join(" ")
        }
    }, f.prototype.initBody = function(i) {
        var o = this,
            n = this.getData();
        this.trigger("pre-body", n), this.$body = this.$el.find(">tbody"), this.$body.length || (this.$body = t("<tbody></tbody>").appendTo(this.$el)), this.options.pagination && "server" !== this.options.sidePagination || (this.pageFrom = 1,
            this.pageTo = n.length);
        for (var a, h = t(document.createDocumentFragment()), l = this.pageFrom - 1; l < this.pageTo; l++) {
            var p = n[l],
                d = this.initRow(p, l, n, h);
            a = a || !!d, d && d !== !0 && h.append(d)
        }
        a || h.append('<tr class="no-records-found">' + e('<td colspan="%s">%s</td>', this.$header.find("th").length, this.options.formatNoMatches()) + "</tr>"), this.$body.html(h), i || this.scrollTo(0), this.$body.find("> tr[data-index] > td").off("click dblclick").on("click dblclick", function(i) {
            var n = t(this),
                a = n.parent(),
                r = o.data[a.data("index")],
                h = n[0].cellIndex,
                l = o.getVisibleFields(),
                p = l[o.options.detailView && !o.options.cardView ? h - 1 : h],
                d = o.columns[s(o.columns, p)],
                u = c(r, p, o.options.escape);
            if (!n.find(".detail-icon").length && (o.trigger("click" === i.type ? "click-cell" : "dbl-click-cell", p, u, r, n), o.trigger("click" === i.type ? "click-row" : "dbl-click-row", r, a, p), "click" === i.type && o.options.clickToSelect && d.clickToSelect)) {
                var f = a.find(e('[name="%s"]', o.options.selectItemName));
                f.length && f[0].click()
            }
        }), this.$body.find("> tr[data-index] > td > .detail-icon").off("click").on("click", function() {
            var i = t(this),
                s = i.parent().parent(),
                a = s.data("index"),
                h = n[a];
            if (s.next().is("tr.detail-view")) i.find("i").attr("class", e("%s %s", o.options.iconsPrefix, o.options.icons.detailOpen)), o.trigger("collapse-row", a, h), s.next().remove();
            else {
                i.find("i").attr("class", e("%s %s", o.options.iconsPrefix, o.options.icons.detailClose)), s.after(e('<tr class="detail-view"><td colspan="%s"></td></tr>', s.find("td").length));
                var l = s.next().find("td"),
                    p = r(o.options, o.options.detailFormatter, [a, h, l], "");
                1 === l.length && l.append(p), o.trigger("expand-row", a, h, l)
            }
            return o.resetView(), !1
        }), this.$selectItem = this.$body.find(e('[name="%s"]', this.options.selectItemName)), this.$selectItem.off("click").on("click", function(i) {
            i.stopImmediatePropagation();
            var e = t(this),
                s = e.prop("checked"),
                n = o.data[e.data("index")];
            o.options.maintainSelected && t(this).is(":radio") && t.each(o.options.data, function(t, i) {
                i[o.header.stateField] = !1
            }), n[o.header.stateField] = s, o.options.singleSelect && (o.$selectItem.not(this).each(function() {
                o.data[t(this).data("index")][o.header.stateField] = !1
            }), o.$selectItem.filter(":checked").not(this).prop("checked", !1)), o.updateSelected(), o.trigger(s ? "check" : "uncheck", n, e)
        }), t.each(this.header.events, function(i, e) {
            if (e) {
                "string" == typeof e && (e = r(null, e));
                var s = o.header.fields[i],
                    n = t.inArray(s, o.getVisibleFields());
                o.options.detailView && !o.options.cardView && (n += 1);
                for (var a in e) o.$body.find(">tr:not(.no-records-found)").each(function() {
                    var i = t(this),
                        r = i.find(o.options.cardView ? ".card-view" : "td").eq(n),
                        h = a.indexOf(" "),
                        l = a.substring(0, h),
                        p = a.substring(h + 1),
                        c = e[a];
                    r.find(p).off(l).on(l, function(t) {
                        var e = i.data("index"),
                            n = o.data[e],
                            a = n[s];
                        c.apply(this, [t, a, n, e])
                    })
                })
            }
        }), this.updateSelected(), this.resetView(), this.trigger("post-body", n)
    }, f.prototype.initServer = function(i, e, o) {
        var s, n = this,
            a = {},
            h = {
                searchText: this.searchText,
                sortName: this.options.sortName,
                sortOrder: this.options.sortOrder
            };
        this.options.pagination && (h.pageSize = this.options.pageSize === this.options.formatAllRows() ? this.options.totalRows : this.options.pageSize, h.pageNumber = this.options.pageNumber), (o || this.options.url || this.options.ajax) && ("limit" === this.options.queryParamsType && (h = {
            search: h.searchText,
            sort: h.sortName,
            order: h.sortOrder
        }, this.options.pagination && (h.offset = this.options.pageSize === this.options.formatAllRows() ? 0 : this.options.pageSize * (this.options.pageNumber - 1), h.limit = this.options.pageSize === this.options.formatAllRows() ? this.options.totalRows : this.options.pageSize)), t.isEmptyObject(this.filterColumnsPartial) || (h.filter = JSON.stringify(this.filterColumnsPartial, null)), a = r(this.options, this.options.queryParams, [h], a), t.extend(a, e || {}), a !== !1 && (i || this.$tableLoading.show(), s = t.extend({}, r(null, this.options.ajaxOptions), {
            type: this.options.method,
            url: o || this.options.url,
            data: "application/json" === this.options.contentType && "post" === this.options.method ? JSON.stringify(a) : a,
            cache: this.options.cache,
            contentType: this.options.contentType,
            dataType: this.options.dataType,
            success: function(t) {
                t = r(n.options, n.options.responseHandler, [t], t), n.load(t), n.trigger("load-success", t), i || n.$tableLoading.hide()
            },
            error: function(t) {
                n.trigger("load-error", t.status, t), i || n.$tableLoading.hide()
            }
        }), this.options.ajax ? r(this, this.options.ajax, [s], null) : (this._xhr && 4 !== this._xhr.readyState && this._xhr.abort(), this._xhr = t.ajax(s))))
    }, f.prototype.initSearchText = function() {
        if (this.options.search && "" !== this.options.searchText) {
            var t = this.$toolbar.find(".search input");
            t.val(this.options.searchText), this.onSearch({
                currentTarget: t
            })
        }
    }, f.prototype.getCaret = function() {
        var i = this;
        t.each(this.$header.find("th"), function(e, o) {
            t(o).find(".sortable").removeClass("desc asc").addClass(t(o).data("field") === i.options.sortName ? i.options.sortOrder : "both")
        })
    }, f.prototype.updateSelected = function() {
        var i = this.$selectItem.filter(":enabled").length && this.$selectItem.filter(":enabled").length === this.$selectItem.filter(":enabled").filter(":checked").length;
        this.$selectAll.add(this.$selectAll_).prop("checked", i), this.$selectItem.each(function() {
            t(this).closest("tr")[t(this).prop("checked") ? "addClass" : "removeClass"]("selected")
        })
    }, f.prototype.updateRows = function() {
        var i = this;
        this.$selectItem.each(function() {
            i.data[t(this).data("index")][i.header.stateField] = t(this).prop("checked")
        })
    }, f.prototype.resetRows = function() {
        var i = this;
        t.each(this.data, function(t, e) {
            i.$selectAll.prop("checked", !1), i.$selectItem.prop("checked", !1), i.header.stateField && (e[i.header.stateField] = !1)
        }), this.initHiddenRows()
    }, f.prototype.trigger = function(i) {
        var e = Array.prototype.slice.call(arguments, 1);
        i += ".bs.table", this.options[f.EVENTS[i]].apply(this.options, e), this.$el.trigger(t.Event(i), e), this.options.onAll(i, e), this.$el.trigger(t.Event("all.bs.table"), [i, e])
    }, f.prototype.resetHeader = function() {
        clearTimeout(this.timeoutId_), this.timeoutId_ = setTimeout(t.proxy(this.fitHeader, this), this.$el.is(":hidden") ? 100 : 0)
    }, f.prototype.fitHeader = function() {
        var i, o, s, n, r = this;
        if (r.$el.is(":hidden")) return void(r.timeoutId_ = setTimeout(t.proxy(r.fitHeader, r), 100));
        if (i = this.$tableBody.get(0), o = i.scrollWidth > i.clientWidth && i.scrollHeight > i.clientHeight + this.$header.outerHeight() ? a() : 0, this.$el.css("margin-top", -this.$header.outerHeight()), s = t(":focus"), s.length > 0) {
            var h = s.parents("th");
            if (h.length > 0) {
                var l = h.attr("data-field");
                if (void 0 !== l) {
                    var p = this.$header.find("[data-field='" + l + "']");
                    p.length > 0 && p.find(":input").addClass("focus-temp")
                }
            }
        }
        this.$header_ = this.$header.clone(!0, !0), this.$selectAll_ = this.$header_.find('[name="btSelectAll"]'), this.$tableHeader.css({
            "margin-right": o
        }).find("table").css("width", this.$el.outerWidth()).html("").attr("class", this.$el.attr("class")).append(this.$header_), n = t(".focus-temp:visible:eq(0)"), n.length > 0 && (n.focus(), this.$header.find(".focus-temp").removeClass("focus-temp")), this.$header.find("th[data-field]").each(function(i) {
            r.$header_.find(e('th[data-field="%s"]', t(this).data("field"))).data(t(this).data())
        });
        var c = this.getVisibleFields(),
            d = this.$header_.find("th");
        this.$body.find(">tr:first-child:not(.no-records-found) > *").each(function(i) {
            var o = t(this),
                s = i;
            r.options.detailView && !r.options.cardView && (0 === i && r.$header_.find("th.detail").find(".fht-cell").width(o.innerWidth()), s = i - 1);
            var n = r.$header_.find(e('th[data-field="%s"]', c[s]));
            n.length > 1 && (n = t(d[o[0].cellIndex])), n.find(".fht-cell").width(o.innerWidth())
        }), this.$tableBody.off("scroll").on("scroll", function() {
            r.$tableHeader.scrollLeft(t(this).scrollLeft()), r.options.showFooter && !r.options.cardView && r.$tableFooter.scrollLeft(t(this).scrollLeft())
        }), r.trigger("post-header")
    }, f.prototype.resetFooter = function() {
        var i = this,
            o = i.getData(),
            s = [];
        this.options.showFooter && !this.options.cardView && (!this.options.cardView && this.options.detailView && s.push('<td><div class="th-inner">&nbsp;</div><div class="fht-cell"></div></td>'), t.each(this.columns, function(t, n) {
            var a, h = "",
                l = "",
                p = [],
                c = {},
                d = e(' class="%s"', n["class"]);
            if (n.visible && (!i.options.cardView || n.cardVisible)) {
                if (h = e("text-align: %s; ", n.falign ? n.falign : n.align), l = e("vertical-align: %s; ", n.valign), c = r(null, i.options.footerStyle), c && c.css)
                    for (a in c.css) p.push(a + ": " + c.css[a]);
                s.push("<td", d, e(' style="%s"', h + l + p.concat().join("; ")), ">"), s.push('<div class="th-inner">'), s.push(r(n, n.footerFormatter, [o], "&nbsp;") || "&nbsp;"), s.push("</div>"), s.push('<div class="fht-cell"></div>'), s.push("</div>"), s.push("</td>")
            }
        }), this.$tableFooter.find("tr").html(s.join("")), this.$tableFooter.show(), clearTimeout(this.timeoutFooter_), this.timeoutFooter_ = setTimeout(t.proxy(this.fitFooter, this), this.$el.is(":hidden") ? 100 : 0))
    }, f.prototype.fitFooter = function() {
        var i, e, o;
        return clearTimeout(this.timeoutFooter_), this.$el.is(":hidden") ? void(this.timeoutFooter_ = setTimeout(t.proxy(this.fitFooter, this), 100)) : (e = this.$el.css("width"), o = e > this.$tableBody.width() ? a() : 0, this.$tableFooter.css({
            "margin-right": o
        }).find("table").css("width", e).attr("class", this.$el.attr("class")), i = this.$tableFooter.find("td"), void this.$body.find(">tr:first-child:not(.no-records-found) > *").each(function(e) {
            var o = t(this);
            i.eq(e).find(".fht-cell").width(o.innerWidth())
        }))
    }, f.prototype.toggleColumn = function(t, i, o) {
        if (-1 !== t && (this.columns[t].visible = i, this.initHeader(), this.initSearch(), this.initPagination(), this.initBody(), this.options.showColumns)) {
            var s = this.$toolbar.find(".keep-open input").prop("disabled", !1);
            o && s.filter(e('[value="%s"]', t)).prop("checked", i), s.filter(":checked").length <= this.options.minimumCountColumns && s.filter(":checked").prop("disabled", !0)
        }
    }, f.prototype.getVisibleFields = function() {
        var i = this,
            e = [];
        return t.each(this.header.fields, function(t, o) {
            var n = i.columns[s(i.columns, o)];
            n.visible && e.push(o)
        }), e
    }, f.prototype.resetView = function(t) {
        var i = 0;
        if (t && t.height && (this.options.height = t.height), this.$selectAll.prop("checked", this.$selectItem.length > 0 && this.$selectItem.length === this.$selectItem.filter(":checked").length), this.options.height) {
            var e = this.$toolbar.outerHeight(!0),
                o = this.$pagination.outerHeight(!0),
                s = this.options.height - e - o;
            this.$tableContainer.css("height", s + "px")
        }
        return this.options.cardView ? (this.$el.css("margin-top", "0"), this.$tableContainer.css("padding-bottom", "0"), void this.$tableFooter.hide()) : (this.options.showHeader && this.options.height ? (this.$tableHeader.show(), this.resetHeader(), i += this.$header.outerHeight()) : (this.$tableHeader.hide(), this.trigger("post-header")), this.options.showFooter && (this.resetFooter(), this.options.height && (i += this.$tableFooter.outerHeight() + 1)), this.getCaret(), this.$tableContainer.css("padding-bottom", i + "px"), void this.trigger("reset-view"))
    }, f.prototype.getData = function(i) {
        return !this.searchText && t.isEmptyObject(this.filterColumns) && t.isEmptyObject(this.filterColumnsPartial) ? i ? this.options.data.slice(this.pageFrom - 1, this.pageTo) : this.options.data : i ? this.data.slice(this.pageFrom - 1, this.pageTo) : this.data
    }, f.prototype.load = function(i) {
        var e = !1;
        "server" === this.options.sidePagination ? (this.options.totalRows = i[this.options.totalField], e = i.fixedScroll, i = i[this.options.dataField]) : t.isArray(i) || (e = i.fixedScroll, i = i.data), this.initData(i), this.initSearch(), this.initPagination(), this.initBody(e)
    }, f.prototype.append = function(t) {
        this.initData(t, "append"), this.initSearch(), this.initPagination(), this.initSort(), this.initBody(!0)
    }, f.prototype.prepend = function(t) {
        this.initData(t, "prepend"), this.initSearch(), this.initPagination(), this.initSort(), this.initBody(!0)
    }, f.prototype.remove = function(i) {
        var e, o, s = this.options.data.length;
        if (i.hasOwnProperty("field") && i.hasOwnProperty("values")) {
            for (e = s - 1; e >= 0; e--) o = this.options.data[e], o.hasOwnProperty(i.field) && -1 !== t.inArray(o[i.field], i.values) && (this.options.data.splice(e, 1), "server" === this.options.sidePagination && (this.options.totalRows -= 1));
            s !== this.options.data.length && (this.initSearch(), this.initPagination(), this.initSort(), this.initBody(!0))
        }
    }, f.prototype.removeAll = function() {
        this.options.data.length > 0 && (this.options.data.splice(0, this.options.data.length), this.initSearch(), this.initPagination(), this.initBody(!0))
    }, f.prototype.getRowByUniqueId = function(t) {
        var i, e, o, s = this.options.uniqueId,
            n = this.options.data.length,
            a = null;
        for (i = n - 1; i >= 0; i--) {
            if (e = this.options.data[i], e.hasOwnProperty(s)) o = e[s];
            else {
                if (!e._data.hasOwnProperty(s)) continue;
                o = e._data[s]
            }
            if ("string" == typeof o ? t = t.toString() : "number" == typeof o && (Number(o) === o && o % 1 === 0 ? t = parseInt(t) : o === Number(o) && 0 !== o && (t = parseFloat(t))), o === t) {
                a = e;
                break
            }
        }
        return a
    }, f.prototype.removeByUniqueId = function(t) {
        var i = this.options.data.length,
            e = this.getRowByUniqueId(t);
        e && this.options.data.splice(this.options.data.indexOf(e), 1), i !== this.options.data.length && (this.initSearch(), this.initPagination(), this.initBody(!0))
    }, f.prototype.updateByUniqueId = function(i) {
        var e = this,
            o = t.isArray(i) ? i : [i];
        t.each(o, function(i, o) {
            var s;
            o.hasOwnProperty("id") && o.hasOwnProperty("row") && (s = t.inArray(e.getRowByUniqueId(o.id), e.options.data), -1 !== s && t.extend(e.options.data[s], o.row))
        }), this.initSearch(), this.initPagination(), this.initSort(), this.initBody(!0)
    }, f.prototype.insertRow = function(t) {
        t.hasOwnProperty("index") && t.hasOwnProperty("row") && (this.data.splice(t.index, 0, t.row), this.initSearch(), this.initPagination(), this.initSort(), this.initBody(!0))
    }, f.prototype.updateRow = function(i) {
        var e = this,
            o = t.isArray(i) ? i : [i];
        t.each(o, function(i, o) {
            o.hasOwnProperty("index") && o.hasOwnProperty("row") && t.extend(e.options.data[o.index], o.row)
        }), this.initSearch(), this.initPagination(), this.initSort(), this.initBody(!0)
    }, f.prototype.initHiddenRows = function() {
        this.hiddenRows = []
    }, f.prototype.showRow = function(t) {
        this.toggleRow(t, !0)
    }, f.prototype.hideRow = function(t) {
        this.toggleRow(t, !1)
    }, f.prototype.toggleRow = function(i, e) {
        var o, s;
        i.hasOwnProperty("index") ? o = this.getData()[i.index] : i.hasOwnProperty("uniqueId") && (o = this.getRowByUniqueId(i.uniqueId)), o && (s = t.inArray(o, this.hiddenRows), e || -1 !== s ? e && s > -1 && this.hiddenRows.splice(s, 1) : this.hiddenRows.push(o), this.initBody(!0))
    }, f.prototype.getHiddenRows = function(i) {
        var e = this,
            o = this.getData(),
            s = [];
        return t.each(o, function(i, o) {
            t.inArray(o, e.hiddenRows) > -1 && s.push(o)
        }), this.hiddenRows = s, s
    }, f.prototype.mergeCells = function(i) {
        var e, o, s, n = i.index,
            a = t.inArray(i.field, this.getVisibleFields()),
            r = i.rowspan || 1,
            h = i.colspan || 1,
            l = this.$body.find(">tr");
        if (this.options.detailView && !this.options.cardView && (a += 1), s = l.eq(n).find(">td").eq(a), !(0 > n || 0 > a || n >= this.data.length)) {
            for (e = n; n + r > e; e++)
                for (o = a; a + h > o; o++) l.eq(e).find(">td").eq(o).hide();
            s.attr("rowspan", r).attr("colspan", h).show()
        }
    }, f.prototype.updateCell = function(t) {
        t.hasOwnProperty("index") && t.hasOwnProperty("field") && t.hasOwnProperty("value") && (this.data[t.index][t.field] = t.value, t.reinit !== !1 && (this.initSort(), this.initBody(!0)))
    }, f.prototype.getOptions = function() {
        return this.options
    }, f.prototype.getSelections = function() {
        var i = this;
        return t.grep(this.options.data, function(t) {
            return t[i.header.stateField] === !0
        })
    }, f.prototype.getAllSelections = function() {
        var i = this;
        return t.grep(this.options.data, function(t) {
            return t[i.header.stateField]
        })
    }, f.prototype.checkAll = function() {
        this.checkAll_(!0)
    }, f.prototype.uncheckAll = function() {
        this.checkAll_(!1)
    }, f.prototype.checkInvert = function() {
        var i = this,
            e = i.$selectItem.filter(":enabled"),
            o = e.filter(":checked");
        e.each(function() {
            t(this).prop("checked", !t(this).prop("checked"))
        }), i.updateRows(), i.updateSelected(), i.trigger("uncheck-some", o), o = i.getSelections(), i.trigger("check-some", o)
    }, f.prototype.checkAll_ = function(t) {
        var i;
        t || (i = this.getSelections()), this.$selectAll.add(this.$selectAll_).prop("checked", t), this.$selectItem.filter(":enabled").prop("checked", t), this.updateRows(), t && (i = this.getSelections()), this.trigger(t ? "check-all" : "uncheck-all", i)
    }, f.prototype.check = function(t) {
        this.check_(!0, t)
    }, f.prototype.uncheck = function(t) {
        this.check_(!1, t)
    }, f.prototype.check_ = function(t, i) {
        var o = this.$selectItem.filter(e('[data-index="%s"]', i)).prop("checked", t);
        this.data[i][this.header.stateField] = t, this.updateSelected(), this.trigger(t ? "check" : "uncheck", this.data[i], o)
    }, f.prototype.checkBy = function(t) {
        this.checkBy_(!0, t)
    }, f.prototype.uncheckBy = function(t) {
        this.checkBy_(!1, t)
    }, f.prototype.checkBy_ = function(i, o) {
        if (o.hasOwnProperty("field") && o.hasOwnProperty("values")) {
            var s = this,
                n = [];
            t.each(this.options.data, function(a, r) {
                if (!r.hasOwnProperty(o.field)) return !1;
                if (-1 !== t.inArray(r[o.field], o.values)) {
                    var h = s.$selectItem.filter(":enabled").filter(e('[data-index="%s"]', a)).prop("checked", i);
                    r[s.header.stateField] = i, n.push(r), s.trigger(i ? "check" : "uncheck", r, h)
                }
            }), this.updateSelected(), this.trigger(i ? "check-some" : "uncheck-some", n)
        }
    }, f.prototype.destroy = function() {
        this.$el.insertBefore(this.$container), t(this.options.toolbar).insertBefore(this.$el), this.$container.next().remove(), this.$container.remove(), this.$el.html(this.$el_.html()).css("margin-top", "0").attr("class", this.$el_.attr("class") || "")
    }, f.prototype.showLoading = function() {
        this.$tableLoading.show()
    }, f.prototype.hideLoading = function() {
        this.$tableLoading.hide()
    }, f.prototype.togglePagination = function() {
        this.options.pagination = !this.options.pagination;
        var t = this.$toolbar.find('button[name="paginationSwitch"] i');
        this.options.pagination ? t.attr("class", this.options.iconsPrefix + " " + this.options.icons.paginationSwitchDown) : t.attr("class", this.options.iconsPrefix + " " + this.options.icons.paginationSwitchUp), this.updatePagination()
    }, f.prototype.refresh = function(t) {
        t && t.url && (this.options.url = t.url), t && t.pageNumber && (this.options.pageNumber = t.pageNumber), t && t.pageSize && (this.options.pageSize = t.pageSize), this.initServer(t && t.silent, t && t.query, t && t.url), this.trigger("refresh", t)
    }, f.prototype.resetWidth = function() {
        this.options.showHeader && this.options.height && this.fitHeader(), this.options.showFooter && this.fitFooter()
    }, f.prototype.showColumn = function(t) {
        this.toggleColumn(s(this.columns, t), !0, !0)
    }, f.prototype.hideColumn = function(t) {
        this.toggleColumn(s(this.columns, t), !1, !0)
    }, f.prototype.getHiddenColumns = function() {
        return t.grep(this.columns, function(t) {
            return !t.visible
        })
    }, f.prototype.getVisibleColumns = function() {
        return t.grep(this.columns, function(t) {
            return t.visible
        })
    }, f.prototype.toggleAllColumns = function(i) {
        if (t.each(this.columns, function(t, e) {
            this.columns[t].visible = i
        }), this.initHeader(), this.initSearch(), this.initPagination(), this.initBody(), this.options.showColumns) {
            var e = this.$toolbar.find(".keep-open input").prop("disabled", !1);
            e.filter(":checked").length <= this.options.minimumCountColumns && e.filter(":checked").prop("disabled", !0)
        }
    }, f.prototype.showAllColumns = function() {
        this.toggleAllColumns(!0)
    }, f.prototype.hideAllColumns = function() {
        this.toggleAllColumns(!1)
    }, f.prototype.filterBy = function(i) {
        this.filterColumns = t.isEmptyObject(i) ? {} : i, this.options.pageNumber = 1, this.initSearch(), this.updatePagination()
    }, f.prototype.scrollTo = function(t) {
        return "string" == typeof t && (t = "bottom" === t ? this.$tableBody[0].scrollHeight : 0), "number" == typeof t && this.$tableBody.scrollTop(t), "undefined" == typeof t ? this.$tableBody.scrollTop() : void 0
    }, f.prototype.getScrollPosition = function() {
        return this.scrollTo()
    }, f.prototype.selectPage = function(t) {
        t > 0 && t <= this.options.totalPages && (this.options.pageNumber = t, this.updatePagination())
    }, f.prototype.prevPage = function() {
        this.options.pageNumber > 1 && (this.options.pageNumber--, this.updatePagination())
    }, f.prototype.nextPage = function() {
        this.options.pageNumber < this.options.totalPages && (this.options.pageNumber++, this.updatePagination())
    }, f.prototype.toggleView = function() {
        this.options.cardView = !this.options.cardView, this.initHeader(), this.initBody(), this.trigger("toggle", this.options.cardView)
    }, f.prototype.refreshOptions = function(i) {
        h(this.options, i, !0) || (this.options = t.extend(this.options, i), this.trigger("refresh-options", this.options), this.destroy(), this.init())
    }, f.prototype.resetSearch = function(t) {
        var i = this.$toolbar.find(".search input");
        i.val(t || ""), this.onSearch({
            currentTarget: i
        })
    }, f.prototype.expandRow_ = function(t, i) {
        var o = this.$body.find(e('> tr[data-index="%s"]', i));
        o.next().is("tr.detail-view") === (t ? !1 : !0) && o.find("> td > .detail-icon").click()
    }, f.prototype.expandRow = function(t) {
        this.expandRow_(!0, t)
    }, f.prototype.collapseRow = function(t) {
        this.expandRow_(!1, t)
    }, f.prototype.expandAllRows = function(i) {
        if (i) {
            var o = this.$body.find(e('> tr[data-index="%s"]', 0)),
                s = this,
                n = null,
                a = !1,
                r = -1;
            if (o.next().is("tr.detail-view") ? o.next().next().is("tr.detail-view") || (o.next().find(".detail-icon").click(), a = !0) : (o.find("> td > .detail-icon").click(), a = !0), a) try {
                r = setInterval(function() {
                    n = s.$body.find("tr.detail-view").last().find(".detail-icon"), n.length > 0 ? n.click() : clearInterval(r)
                }, 1)
            } catch (h) {
                clearInterval(r)
            }
        } else
            for (var l = this.$body.children(), p = 0; p < l.length; p++) this.expandRow_(!0, t(l[p]).data("index"))
    }, f.prototype.collapseAllRows = function(i) {
        if (i) this.expandRow_(!1, 0);
        else
            for (var e = this.$body.children(), o = 0; o < e.length; o++) this.expandRow_(!1, t(e[o]).data("index"))
    }, f.prototype.updateFormatText = function(t, i) {
        this.options[e("format%s", t)] && ("string" == typeof i ? this.options[e("format%s", t)] = function() {
            return i
        } : "function" == typeof i && (this.options[e("format%s", t)] = i)), this.initToolbar(), this.initPagination(), this.initBody()
    };
    var g = ["getOptions", "getSelections", "getAllSelections", "getData", "load", "append", "prepend", "remove", "removeAll", "insertRow", "updateRow", "updateCell", "updateByUniqueId", "removeByUniqueId", "getRowByUniqueId", "showRow", "hideRow", "getHiddenRows", "mergeCells", "checkAll", "uncheckAll", "checkInvert", "check", "uncheck", "checkBy", "uncheckBy", "refresh", "resetView", "resetWidth", "destroy", "showLoading", "hideLoading", "showColumn", "hideColumn", "getHiddenColumns", "getVisibleColumns", "showAllColumns", "hideAllColumns", "filterBy", "scrollTo", "getScrollPosition", "selectPage", "prevPage", "nextPage", "togglePagination", "toggleView", "refreshOptions", "resetSearch", "expandRow", "collapseRow", "expandAllRows", "collapseAllRows", "updateFormatText"];
    t.fn.bootstrapTable = function(i) {
        var e, o = Array.prototype.slice.call(arguments, 1);
        return this.each(function() {
            var s = t(this),
                n = s.data("bootstrap.table"),
                a = t.extend({}, f.DEFAULTS, s.data(), "object" == typeof i && i);
            if ("string" == typeof i) {
                if (t.inArray(i, g) < 0) throw new Error("Unknown method: " + i);
                if (!n) return;
                e = n[i].apply(n, o), "destroy" === i && s.removeData("bootstrap.table")
            }
            n || s.data("bootstrap.table", n = new f(this, a))
        }), "undefined" == typeof e ? this : e
    }, t.fn.bootstrapTable.Constructor = f, t.fn.bootstrapTable.defaults = f.DEFAULTS, t.fn.bootstrapTable.columnDefaults = f.COLUMN_DEFAULTS, t.fn.bootstrapTable.locales = f.LOCALES, t.fn.bootstrapTable.methods = g, t.fn.bootstrapTable.utils = {
        sprintf: e,
        getFieldIndex: s,
        compareObjects: h,
        calculateObjectValue: r,
        getItemField: c,
        objectKeys: u,
        isIEBrowser: d
    }, t(function() {
        t('[data-toggle="table"]').bootstrapTable()
    })
}(jQuery);
/*! Select2 4.0.5 | https://github.com/select2/select2/blob/master/LICENSE.md */
! function(a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof module && module.exports ? module.exports = function(b, c) {
        return void 0 === c && (c = "undefined" != typeof window ? require("jquery") : require("jquery")(b)), a(c), c
    } : a(jQuery)
}(function(a) {
    var b = function() {
            if (a && a.fn && a.fn.select2 && a.fn.select2.amd) var b = a.fn.select2.amd;
            var b;
            return function() {
                if (!b || !b.requirejs) {
                    b ? c = b : b = {};
                    var a, c, d;
                    ! function(b) {
                        function e(a, b) {
                            return v.call(a, b)
                        }

                        function f(a, b) {
                            var c, d, e, f, g, h, i, j, k, l, m, n, o = b && b.split("/"),
                                p = t.map,
                                q = p && p["*"] || {};
                            if (a) {
                                for (a = a.split("/"), g = a.length - 1, t.nodeIdCompat && x.test(a[g]) && (a[g] = a[g].replace(x, "")), "." === a[0].charAt(0) && o && (n = o.slice(0, o.length - 1), a = n.concat(a)), k = 0; k < a.length; k++)
                                    if ("." === (m = a[k])) a.splice(k, 1), k -= 1;
                                    else if (".." === m) {
                                        if (0 === k || 1 === k && ".." === a[2] || ".." === a[k - 1]) continue;
                                        k > 0 && (a.splice(k - 1, 2), k -= 2)
                                    }
                                a = a.join("/")
                            }
                            if ((o || q) && p) {
                                for (c = a.split("/"), k = c.length; k > 0; k -= 1) {
                                    if (d = c.slice(0, k).join("/"), o)
                                        for (l = o.length; l > 0; l -= 1)
                                            if ((e = p[o.slice(0, l).join("/")]) && (e = e[d])) {
                                                f = e, h = k;
                                                break
                                            }
                                    if (f) break;
                                    !i && q && q[d] && (i = q[d], j = k)
                                }!f && i && (f = i, h = j), f && (c.splice(0, h, f), a = c.join("/"))
                            }
                            return a
                        }

                        function g(a, c) {
                            return function() {
                                var d = w.call(arguments, 0);
                                return "string" != typeof d[0] && 1 === d.length && d.push(null), o.apply(b, d.concat([a, c]))
                            }
                        }

                        function h(a) {
                            return function(b) {
                                return f(b, a)
                            }
                        }

                        function i(a) {
                            return function(b) {
                                r[a] = b
                            }
                        }

                        function j(a) {
                            if (e(s, a)) {
                                var c = s[a];
                                delete s[a], u[a] = !0, n.apply(b, c)
                            }
                            if (!e(r, a) && !e(u, a)) throw new Error("No " + a);
                            return r[a]
                        }

                        function k(a) {
                            var b, c = a ? a.indexOf("!") : -1;
                            return c > -1 && (b = a.substring(0, c), a = a.substring(c + 1, a.length)), [b, a]
                        }

                        function l(a) {
                            return a ? k(a) : []
                        }

                        function m(a) {
                            return function() {
                                return t && t.config && t.config[a] || {}
                            }
                        }
                        var n, o, p, q, r = {},
                            s = {},
                            t = {},
                            u = {},
                            v = Object.prototype.hasOwnProperty,
                            w = [].slice,
                            x = /\.js$/;
                        p = function(a, b) {
                            var c, d = k(a),
                                e = d[0],
                                g = b[1];
                            return a = d[1], e && (e = f(e, g), c = j(e)), e ? a = c && c.normalize ? c.normalize(a, h(g)) : f(a, g) : (a = f(a, g), d = k(a), e = d[0], a = d[1], e && (c = j(e))), {
                                f: e ? e + "!" + a : a,
                                n: a,
                                pr: e,
                                p: c
                            }
                        }, q = {
                            require: function(a) {
                                return g(a)
                            },
                            exports: function(a) {
                                var b = r[a];
                                return void 0 !== b ? b : r[a] = {}
                            },
                            module: function(a) {
                                return {
                                    id: a,
                                    uri: "",
                                    exports: r[a],
                                    config: m(a)
                                }
                            }
                        }, n = function(a, c, d, f) {
                            var h, k, m, n, o, t, v, w = [],
                                x = typeof d;
                            if (f = f || a, t = l(f), "undefined" === x || "function" === x) {
                                for (c = !c.length && d.length ? ["require", "exports", "module"] : c, o = 0; o < c.length; o += 1)
                                    if (n = p(c[o], t), "require" === (k = n.f)) w[o] = q.require(a);
                                    else if ("exports" === k) w[o] = q.exports(a), v = !0;
                                    else if ("module" === k) h = w[o] = q.module(a);
                                    else if (e(r, k) || e(s, k) || e(u, k)) w[o] = j(k);
                                    else {
                                        if (!n.p) throw new Error(a + " missing " + k);
                                        n.p.load(n.n, g(f, !0), i(k), {}), w[o] = r[k]
                                    }
                                m = d ? d.apply(r[a], w) : void 0, a && (h && h.exports !== b && h.exports !== r[a] ? r[a] = h.exports : m === b && v || (r[a] = m))
                            } else a && (r[a] = d)
                        }, a = c = o = function(a, c, d, e, f) {
                            if ("string" == typeof a) return q[a] ? q[a](c) : j(p(a, l(c)).f);
                            if (!a.splice) {
                                if (t = a, t.deps && o(t.deps, t.callback), !c) return;
                                c.splice ? (a = c, c = d, d = null) : a = b
                            }
                            return c = c || function() {}, "function" == typeof d && (d = e, e = f), e ? n(b, a, c, d) : setTimeout(function() {
                                n(b, a, c, d)
                            }, 4), o
                        }, o.config = function(a) {
                            return o(a)
                        }, a._defined = r, d = function(a, b, c) {
                            if ("string" != typeof a) throw new Error("See almond README: incorrect module build, no module name");
                            b.splice || (c = b, b = []), e(r, a) || e(s, a) || (s[a] = [a, b, c])
                        }, d.amd = {
                            jQuery: !0
                        }
                    }(), b.requirejs = a, b.require = c, b.define = d
                }
            }(), b.define("almond", function() {}), b.define("jquery", [], function() {
                var b = a || $;
                return null == b && console && console.error && console.error("Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."), b
            }), b.define("select2/utils", ["jquery"], function(a) {
                function b(a) {
                    var b = a.prototype,
                        c = [];
                    for (var d in b) {
                        "function" == typeof b[d] && ("constructor" !== d && c.push(d))
                    }
                    return c
                }
                var c = {};
                c.Extend = function(a, b) {
                    function c() {
                        this.constructor = a
                    }
                    var d = {}.hasOwnProperty;
                    for (var e in b) d.call(b, e) && (a[e] = b[e]);
                    return c.prototype = b.prototype, a.prototype = new c, a.__super__ = b.prototype, a
                }, c.Decorate = function(a, c) {
                    function d() {
                        var b = Array.prototype.unshift,
                            d = c.prototype.constructor.length,
                            e = a.prototype.constructor;
                        d > 0 && (b.call(arguments, a.prototype.constructor), e = c.prototype.constructor), e.apply(this, arguments)
                    }

                    function e() {
                        this.constructor = d
                    }
                    var f = b(c),
                        g = b(a);
                    c.displayName = a.displayName, d.prototype = new e;
                    for (var h = 0; h < g.length; h++) {
                        var i = g[h];
                        d.prototype[i] = a.prototype[i]
                    }
                    for (var j = (function(a) {
                        var b = function() {};
                        a in d.prototype && (b = d.prototype[a]);
                        var e = c.prototype[a];
                        return function() {
                            return Array.prototype.unshift.call(arguments, b), e.apply(this, arguments)
                        }
                    }), k = 0; k < f.length; k++) {
                        var l = f[k];
                        d.prototype[l] = j(l)
                    }
                    return d
                };
                var d = function() {
                    this.listeners = {}
                };
                return d.prototype.on = function(a, b) {
                    this.listeners = this.listeners || {}, a in this.listeners ? this.listeners[a].push(b) : this.listeners[a] = [b]
                }, d.prototype.trigger = function(a) {
                    var b = Array.prototype.slice,
                        c = b.call(arguments, 1);
                    this.listeners = this.listeners || {}, null == c && (c = []), 0 === c.length && c.push({}), c[0]._type = a, a in this.listeners && this.invoke(this.listeners[a], b.call(arguments, 1)), "*" in this.listeners && this.invoke(this.listeners["*"], arguments)
                }, d.prototype.invoke = function(a, b) {
                    for (var c = 0, d = a.length; c < d; c++) a[c].apply(this, b)
                }, c.Observable = d, c.generateChars = function(a) {
                    for (var b = "", c = 0; c < a; c++) {
                        b += Math.floor(36 * Math.random()).toString(36)
                    }
                    return b
                }, c.bind = function(a, b) {
                    return function() {
                        a.apply(b, arguments)
                    }
                }, c._convertData = function(a) {
                    for (var b in a) {
                        var c = b.split("-"),
                            d = a;
                        if (1 !== c.length) {
                            for (var e = 0; e < c.length; e++) {
                                var f = c[e];
                                f = f.substring(0, 1).toLowerCase() + f.substring(1), f in d || (d[f] = {}), e == c.length - 1 && (d[f] = a[b]), d = d[f]
                            }
                            delete a[b]
                        }
                    }
                    return a
                }, c.hasScroll = function(b, c) {
                    var d = a(c),
                        e = c.style.overflowX,
                        f = c.style.overflowY;
                    return (e !== f || "hidden" !== f && "visible" !== f) && ("scroll" === e || "scroll" === f || (d.innerHeight() < c.scrollHeight || d.innerWidth() < c.scrollWidth))
                }, c.escapeMarkup = function(a) {
                    var b = {
                        "\\": "&#92;",
                        "&": "&amp;",
                        "<": "&lt;",
                        ">": "&gt;",
                        '"': "&quot;",
                        "'": "&#39;",
                        "/": "&#47;"
                    };
                    return "string" != typeof a ? a : String(a).replace(/[&<>"'\/\\]/g, function(a) {
                        return b[a]
                    })
                }, c.appendMany = function(b, c) {
                    if ("1.7" === a.fn.jquery.substr(0, 3)) {
                        var d = a();
                        a.map(c, function(a) {
                            d = d.add(a)
                        }), c = d
                    }
                    b.append(c)
                }, c
            }), b.define("select2/results", ["jquery", "./utils"], function(a, b) {
                function c(a, b, d) {
                    this.$element = a, this.data = d, this.options = b, c.__super__.constructor.call(this)
                }
                return b.Extend(c, b.Observable), c.prototype.render = function() {
                    var b = a('<ul class="select2-results__options" role="tree"></ul>');
                    return this.options.get("multiple") && b.attr("aria-multiselectable", "true"), this.$results = b, b
                }, c.prototype.clear = function() {
                    this.$results.empty()
                }, c.prototype.displayMessage = function(b) {
                    var c = this.options.get("escapeMarkup");
                    this.clear(), this.hideLoading();
                    var d = a('<li role="treeitem" aria-live="assertive" class="select2-results__option"></li>'),
                        e = this.options.get("translations").get(b.message);
                    d.append(c(e(b.args))), d[0].className += " select2-results__message", this.$results.append(d)
                }, c.prototype.hideMessages = function() {
                    this.$results.find(".select2-results__message").remove()
                }, c.prototype.append = function(a) {
                    this.hideLoading();
                    var b = [];
                    if (null == a.results || 0 === a.results.length) return void(0 === this.$results.children().length && this.trigger("results:message", {
                        message: "noResults"
                    }));
                    a.results = this.sort(a.results);
                    for (var c = 0; c < a.results.length; c++) {
                        var d = a.results[c],
                            e = this.option(d);
                        b.push(e)
                    }
                    this.$results.append(b)
                }, c.prototype.position = function(a, b) {
                    b.find(".select2-results").append(a)
                }, c.prototype.sort = function(a) {
                    return this.options.get("sorter")(a)
                }, c.prototype.highlightFirstItem = function() {
                    var a = this.$results.find(".select2-results__option[aria-selected]"),
                        b = a.filter("[aria-selected=true]");
                    b.length > 0 ? b.first().trigger("mouseenter") : a.first().trigger("mouseenter"), this.ensureHighlightVisible()
                }, c.prototype.setClasses = function() {
                    var b = this;
                    this.data.current(function(c) {
                        var d = a.map(c, function(a) {
                            return a.id.toString()
                        });
                        b.$results.find(".select2-results__option[aria-selected]").each(function() {
                            var b = a(this),
                                c = a.data(this, "data"),
                                e = "" + c.id;
                            null != c.element && c.element.selected || null == c.element && a.inArray(e, d) > -1 ? b.attr("aria-selected", "true") : b.attr("aria-selected", "false")
                        })
                    })
                }, c.prototype.showLoading = function(a) {
                    this.hideLoading();
                    var b = this.options.get("translations").get("searching"),
                        c = {
                            disabled: !0,
                            loading: !0,
                            text: b(a)
                        },
                        d = this.option(c);
                    d.className += " loading-results", this.$results.prepend(d)
                }, c.prototype.hideLoading = function() {
                    this.$results.find(".loading-results").remove()
                }, c.prototype.option = function(b) {
                    var c = document.createElement("li");
                    c.className = "select2-results__option";
                    var d = {
                        role: "treeitem",
                        "aria-selected": "false"
                    };
                    b.disabled && (delete d["aria-selected"], d["aria-disabled"] = "true"), null == b.id && delete d["aria-selected"], null != b._resultId && (c.id = b._resultId), b.title && (c.title = b.title), b.children && (d.role = "group", d["aria-label"] = b.text, delete d["aria-selected"]);
                    for (var e in d) {
                        var f = d[e];
                        c.setAttribute(e, f)
                    }
                    if (b.children) {
                        var g = a(c),
                            h = document.createElement("strong");
                        h.className = "select2-results__group";
                        a(h);
                        this.template(b, h);
                        for (var i = [], j = 0; j < b.children.length; j++) {
                            var k = b.children[j],
                                l = this.option(k);
                            i.push(l)
                        }
                        var m = a("<ul></ul>", {
                            class: "select2-results__options select2-results__options--nested"
                        });
                        m.append(i), g.append(h), g.append(m)
                    } else this.template(b, c);
                    return a.data(c, "data", b), c
                }, c.prototype.bind = function(b, c) {
                    var d = this,
                        e = b.id + "-results";
                    this.$results.attr("id", e), b.on("results:all", function(a) {
                        d.clear(), d.append(a.data), b.isOpen() && (d.setClasses(), d.highlightFirstItem())
                    }), b.on("results:append", function(a) {
                        d.append(a.data), b.isOpen() && d.setClasses()
                    }), b.on("query", function(a) {
                        d.hideMessages(), d.showLoading(a)
                    }), b.on("select", function() {
                        b.isOpen() && (d.setClasses(), d.highlightFirstItem())
                    }), b.on("unselect", function() {
                        b.isOpen() && (d.setClasses(), d.highlightFirstItem())
                    }), b.on("open", function() {
                        d.$results.attr("aria-expanded", "true"), d.$results.attr("aria-hidden", "false"), d.setClasses(), d.ensureHighlightVisible()
                    }), b.on("close", function() {
                        d.$results.attr("aria-expanded", "false"), d.$results.attr("aria-hidden", "true"), d.$results.removeAttr("aria-activedescendant")
                    }), b.on("results:toggle", function() {
                        var a = d.getHighlightedResults();
                        0 !== a.length && a.trigger("mouseup")
                    }), b.on("results:select", function() {
                        var a = d.getHighlightedResults();
                        if (0 !== a.length) {
                            var b = a.data("data");
                            "true" == a.attr("aria-selected") ? d.trigger("close", {}) : d.trigger("select", {
                                data: b
                            })
                        }
                    }), b.on("results:previous", function() {
                        var a = d.getHighlightedResults(),
                            b = d.$results.find("[aria-selected]"),
                            c = b.index(a);
                        if (0 !== c) {
                            var e = c - 1;
                            0 === a.length && (e = 0);
                            var f = b.eq(e);
                            f.trigger("mouseenter");
                            var g = d.$results.offset().top,
                                h = f.offset().top,
                                i = d.$results.scrollTop() + (h - g);
                            0 === e ? d.$results.scrollTop(0) : h - g < 0 && d.$results.scrollTop(i)
                        }
                    }), b.on("results:next", function() {
                        var a = d.getHighlightedResults(),
                            b = d.$results.find("[aria-selected]"),
                            c = b.index(a),
                            e = c + 1;
                        if (!(e >= b.length)) {
                            var f = b.eq(e);
                            f.trigger("mouseenter");
                            var g = d.$results.offset().top + d.$results.outerHeight(!1),
                                h = f.offset().top + f.outerHeight(!1),
                                i = d.$results.scrollTop() + h - g;
                            0 === e ? d.$results.scrollTop(0) : h > g && d.$results.scrollTop(i)
                        }
                    }), b.on("results:focus", function(a) {
                        a.element.addClass("select2-results__option--highlighted")
                    }), b.on("results:message", function(a) {
                        d.displayMessage(a)
                    }), a.fn.mousewheel && this.$results.on("mousewheel", function(a) {
                        var b = d.$results.scrollTop(),
                            c = d.$results.get(0).scrollHeight - b + a.deltaY,
                            e = a.deltaY > 0 && b - a.deltaY <= 0,
                            f = a.deltaY < 0 && c <= d.$results.height();
                        e ? (d.$results.scrollTop(0), a.preventDefault(), a.stopPropagation()) : f && (d.$results.scrollTop(d.$results.get(0).scrollHeight - d.$results.height()), a.preventDefault(), a.stopPropagation())
                    }), this.$results.on("mouseup", ".select2-results__option[aria-selected]", function(b) {
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
                    }), this.$results.on("mouseenter", ".select2-results__option[aria-selected]", function(b) {
                        var c = a(this).data("data");
                        d.getHighlightedResults().removeClass("select2-results__option--highlighted"), d.trigger("results:focus", {
                            data: c,
                            element: a(this)
                        })
                    })
                }, c.prototype.getHighlightedResults = function() {
                    return this.$results.find(".select2-results__option--highlighted")
                }, c.prototype.destroy = function() {
                    this.$results.remove()
                }, c.prototype.ensureHighlightVisible = function() {
                    var a = this.getHighlightedResults();
                    if (0 !== a.length) {
                        var b = this.$results.find("[aria-selected]"),
                            c = b.index(a),
                            d = this.$results.offset().top,
                            e = a.offset().top,
                            f = this.$results.scrollTop() + (e - d),
                            g = e - d;
                        f -= 2 * a.outerHeight(!1), c <= 2 ? this.$results.scrollTop(0) : (g > this.$results.outerHeight() || g < 0) && this.$results.scrollTop(f)
                    }
                }, c.prototype.template = function(b, c) {
                    var d = this.options.get("templateResult"),
                        e = this.options.get("escapeMarkup"),
                        f = d(b, c);
                    null == f ? c.style.display = "none" : "string" == typeof f ? c.innerHTML = e(f) : a(c).append(f)
                }, c
            }), b.define("select2/keys", [], function() {
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
            }), b.define("select2/selection/base", ["jquery", "../utils", "../keys"], function(a, b, c) {
                function d(a, b) {
                    this.$element = a, this.options = b, d.__super__.constructor.call(this)
                }
                return b.Extend(d, b.Observable), d.prototype.render = function() {
                    var b = a('<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>');
                    return this._tabindex = 0, null != this.$element.data("old-tabindex") ? this._tabindex = this.$element.data("old-tabindex") : null != this.$element.attr("tabindex") && (this._tabindex = this.$element.attr("tabindex")), b.attr("title", this.$element.attr("title")), b.attr("tabindex", this._tabindex), this.$selection = b, b
                }, d.prototype.bind = function(a, b) {
                    var d = this,
                        e = (a.id, a.id + "-results");
                    this.container = a, this.$selection.on("focus", function(a) {
                        d.trigger("focus", a)
                    }), this.$selection.on("blur", function(a) {
                        d._handleBlur(a)
                    }), this.$selection.on("keydown", function(a) {
                        d.trigger("keypress", a), a.which === c.SPACE && a.preventDefault()
                    }), a.on("results:focus", function(a) {
                        d.$selection.attr("aria-activedescendant", a.data._resultId)
                    }), a.on("selection:update", function(a) {
                        d.update(a.data)
                    }), a.on("open", function() {
                        d.$selection.attr("aria-expanded", "true"), d.$selection.attr("aria-owns", e), d._attachCloseHandler(a)
                    }), a.on("close", function() {
                        d.$selection.attr("aria-expanded", "false"), d.$selection.removeAttr("aria-activedescendant"), d.$selection.removeAttr("aria-owns"), d.$selection.focus(), d._detachCloseHandler(a)
                    }), a.on("enable", function() {
                        d.$selection.attr("tabindex", d._tabindex)
                    }), a.on("disable", function() {
                        d.$selection.attr("tabindex", "-1")
                    })
                }, d.prototype._handleBlur = function(b) {
                    var c = this;
                    window.setTimeout(function() {
                        document.activeElement == c.$selection[0] || a.contains(c.$selection[0], document.activeElement) || c.trigger("blur", b)
                    }, 1)
                }, d.prototype._attachCloseHandler = function(b) {
                    a(document.body).on("mousedown.select2." + b.id, function(b) {
                        var c = a(b.target),
                            d = c.closest(".select2");
                        a(".select2.select2-container--open").each(function() {
                            var b = a(this);
                            this != d[0] && b.data("element").select2("close")
                        })
                    })
                }, d.prototype._detachCloseHandler = function(b) {
                    a(document.body).off("mousedown.select2." + b.id)
                }, d.prototype.position = function(a, b) {
                    b.find(".selection").append(a)
                }, d.prototype.destroy = function() {
                    this._detachCloseHandler(this.container)
                }, d.prototype.update = function(a) {
                    throw new Error("The `update` method must be defined in child classes.")
                }, d
            }), b.define("select2/selection/single", ["jquery", "./base", "../utils", "../keys"], function(a, b, c, d) {
                function e() {
                    e.__super__.constructor.apply(this, arguments)
                }
                return c.Extend(e, b), e.prototype.render = function() {
                    var a = e.__super__.render.call(this);
                    return a.addClass("select2-selection--single"), a.html('<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'), a
                }, e.prototype.bind = function(a, b) {
                    var c = this;
                    e.__super__.bind.apply(this, arguments);
                    var d = a.id + "-container";
                    this.$selection.find(".select2-selection__rendered").attr("id", d), this.$selection.attr("aria-labelledby", d), this.$selection.on("mousedown", function(a) {
                        1 === a.which && c.trigger("toggle", {
                            originalEvent: a
                        })
                    }), this.$selection.on("focus", function(a) {}), this.$selection.on("blur", function(a) {}), a.on("focus", function(b) {
                        a.isOpen() || c.$selection.focus()
                    }), a.on("selection:update", function(a) {
                        c.update(a.data)
                    })
                }, e.prototype.clear = function() {
                    this.$selection.find(".select2-selection__rendered").empty()
                }, e.prototype.display = function(a, b) {
                    var c = this.options.get("templateSelection");
                    return this.options.get("escapeMarkup")(c(a, b))
                }, e.prototype.selectionContainer = function() {
                    return a("<span></span>")
                }, e.prototype.update = function(a) {
                    if (0 === a.length) return void this.clear();
                    var b = a[0],
                        c = this.$selection.find(".select2-selection__rendered"),
                        d = this.display(b, c);
                    c.empty().append(d), c.prop("title", b.title || b.text)
                }, e
            }), b.define("select2/selection/multiple", ["jquery", "./base", "../utils"], function(a, b, c) {
                function d(a, b) {
                    d.__super__.constructor.apply(this, arguments)
                }
                return c.Extend(d, b), d.prototype.render = function() {
                    var a = d.__super__.render.call(this);
                    return a.addClass("select2-selection--multiple"), a.html('<ul class="select2-selection__rendered"></ul>'), a
                }, d.prototype.bind = function(b, c) {
                    var e = this;
                    d.__super__.bind.apply(this, arguments), this.$selection.on("click", function(a) {
                        e.trigger("toggle", {
                            originalEvent: a
                        })
                    }), this.$selection.on("click", ".select2-selection__choice__remove", function(b) {
                        if (!e.options.get("disabled")) {
                            var c = a(this),
                                d = c.parent(),
                                f = d.data("data");
                            e.trigger("unselect", {
                                originalEvent: b,
                                data: f
                            })
                        }
                    })
                }, d.prototype.clear = function() {
                    this.$selection.find(".select2-selection__rendered").empty()
                }, d.prototype.display = function(a, b) {
                    var c = this.options.get("templateSelection");
                    return this.options.get("escapeMarkup")(c(a, b))
                }, d.prototype.selectionContainer = function() {
                    return a('<li class="select2-selection__choice"><span class="select2-selection__choice__remove" role="presentation">&times;</span></li>')
                }, d.prototype.update = function(a) {
                    if (this.clear(), 0 !== a.length) {
                        for (var b = [], d = 0; d < a.length; d++) {
                            var e = a[d],
                                f = this.selectionContainer(),
                                g = this.display(e, f);
                            f.append(g), f.prop("title", e.title || e.text), f.data("data", e), b.push(f)
                        }
                        var h = this.$selection.find(".select2-selection__rendered");
                        c.appendMany(h, b)
                    }
                }, d
            }), b.define("select2/selection/placeholder", ["../utils"], function(a) {
                function b(a, b, c) {
                    this.placeholder = this.normalizePlaceholder(c.get("placeholder")), a.call(this, b, c)
                }
                return b.prototype.normalizePlaceholder = function(a, b) {
                    return "string" == typeof b && (b = {
                        id: "",
                        text: b
                    }), b
                }, b.prototype.createPlaceholder = function(a, b) {
                    var c = this.selectionContainer();
                    return c.html(this.display(b)), c.addClass("select2-selection__placeholder").removeClass("select2-selection__choice"), c
                }, b.prototype.update = function(a, b) {
                    var c = 1 == b.length && b[0].id != this.placeholder.id;
                    if (b.length > 1 || c) return a.call(this, b);
                    this.clear();
                    var d = this.createPlaceholder(this.placeholder);
                    this.$selection.find(".select2-selection__rendered").append(d)
                }, b
            }), b.define("select2/selection/allowClear", ["jquery", "../keys"], function(a, b) {
                function c() {}
                return c.prototype.bind = function(a, b, c) {
                    var d = this;
                    a.call(this, b, c), null == this.placeholder && this.options.get("debug") && window.console && console.error && console.error("Select2: The `allowClear` option should be used in combination with the `placeholder` option."), this.$selection.on("mousedown", ".select2-selection__clear", function(a) {
                        d._handleClear(a)
                    }), b.on("keypress", function(a) {
                        d._handleKeyboardClear(a, b)
                    })
                }, c.prototype._handleClear = function(a, b) {
                    if (!this.options.get("disabled")) {
                        var c = this.$selection.find(".select2-selection__clear");
                        if (0 !== c.length) {
                            b.stopPropagation();
                            for (var d = c.data("data"), e = 0; e < d.length; e++) {
                                var f = {
                                    data: d[e]
                                };
                                if (this.trigger("unselect", f), f.prevented) return
                            }
                            this.$element.val(this.placeholder.id).trigger("change"), this.trigger("toggle", {})
                        }
                    }
                }, c.prototype._handleKeyboardClear = function(a, c, d) {
                    d.isOpen() || c.which != b.DELETE && c.which != b.BACKSPACE || this._handleClear(c)
                }, c.prototype.update = function(b, c) {
                    if (b.call(this, c), !(this.$selection.find(".select2-selection__placeholder").length > 0 || 0 === c.length)) {
                        var d = a('<span class="select2-selection__clear">&times;</span>');
                        d.data("data", c), this.$selection.find(".select2-selection__rendered").prepend(d)
                    }
                }, c
            }), b.define("select2/selection/search", ["jquery", "../utils", "../keys"], function(a, b, c) {
                function d(a, b, c) {
                    a.call(this, b, c)
                }
                return d.prototype.render = function(b) {
                    var c = a('<li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="textbox" aria-autocomplete="list" /></li>');
                    this.$searchContainer = c, this.$search = c.find("input");
                    var d = b.call(this);
                    return this._transferTabIndex(), d
                }, d.prototype.bind = function(a, b, d) {
                    var e = this;
                    a.call(this, b, d), b.on("open", function() {
                        e.$search.trigger("focus")
                    }), b.on("close", function() {
                        e.$search.val(""), e.$search.removeAttr("aria-activedescendant"), e.$search.trigger("focus")
                    }), b.on("enable", function() {
                        e.$search.prop("disabled", !1), e._transferTabIndex()
                    }), b.on("disable", function() {
                        e.$search.prop("disabled", !0)
                    }), b.on("focus", function(a) {
                        e.$search.trigger("focus")
                    }), b.on("results:focus", function(a) {
                        e.$search.attr("aria-activedescendant", a.id)
                    }), this.$selection.on("focusin", ".select2-search--inline", function(a) {
                        e.trigger("focus", a)
                    }), this.$selection.on("focusout", ".select2-search--inline", function(a) {
                        e._handleBlur(a)
                    }), this.$selection.on("keydown", ".select2-search--inline", function(a) {
                        if (a.stopPropagation(), e.trigger("keypress", a), e._keyUpPrevented = a.isDefaultPrevented(), a.which === c.BACKSPACE && "" === e.$search.val()) {
                            var b = e.$searchContainer.prev(".select2-selection__choice");
                            if (b.length > 0) {
                                var d = b.data("data");
                                e.searchRemoveChoice(d), a.preventDefault()
                            }
                        }
                    });
                    var f = document.documentMode,
                        g = f && f <= 11;
                    this.$selection.on("input.searchcheck", ".select2-search--inline", function(a) {
                        if (g) return void e.$selection.off("input.search input.searchcheck");
                        e.$selection.off("keyup.search")
                    }), this.$selection.on("keyup.search input.search", ".select2-search--inline", function(a) {
                        if (g && "input" === a.type) return void e.$selection.off("input.search input.searchcheck");
                        var b = a.which;
                        b != c.SHIFT && b != c.CTRL && b != c.ALT && b != c.TAB && e.handleSearch(a)
                    })
                }, d.prototype._transferTabIndex = function(a) {
                    this.$search.attr("tabindex", this.$selection.attr("tabindex")), this.$selection.attr("tabindex", "-1")
                }, d.prototype.createPlaceholder = function(a, b) {
                    this.$search.attr("placeholder", b.text)
                }, d.prototype.update = function(a, b) {
                    var c = this.$search[0] == document.activeElement;
                    this.$search.attr("placeholder", ""), a.call(this, b), this.$selection.find(".select2-selection__rendered").append(this.$searchContainer), this.resizeSearch(), c && this.$search.focus()
                }, d.prototype.handleSearch = function() {
                    if (this.resizeSearch(), !this._keyUpPrevented) {
                        var a = this.$search.val();
                        this.trigger("query", {
                            term: a
                        })
                    }
                    this._keyUpPrevented = !1
                }, d.prototype.searchRemoveChoice = function(a, b) {
                    this.trigger("unselect", {
                        data: b
                    }), this.$search.val(b.text), this.handleSearch()
                }, d.prototype.resizeSearch = function() {
                    this.$search.css("width", "25px");
                    var a = "";
                    if ("" !== this.$search.attr("placeholder")) a = this.$selection.find(".select2-selection__rendered").innerWidth();
                    else {
                        a = .75 * (this.$search.val().length + 1) + "em"
                    }
                    this.$search.css("width", a)
                }, d
            }), b.define("select2/selection/eventRelay", ["jquery"], function(a) {
                function b() {}
                return b.prototype.bind = function(b, c, d) {
                    var e = this,
                        f = ["open", "opening", "close", "closing", "select", "selecting", "unselect", "unselecting"],
                        g = ["opening", "closing", "selecting", "unselecting"];
                    b.call(this, c, d), c.on("*", function(b, c) {
                        if (-1 !== a.inArray(b, f)) {
                            c = c || {};
                            var d = a.Event("select2:" + b, {
                                params: c
                            });
                            e.$element.trigger(d), -1 !== a.inArray(b, g) && (c.prevented = d.isDefaultPrevented())
                        }
                    })
                }, b
            }), b.define("select2/translation", ["jquery", "require"], function(a, b) {
                function c(a) {
                    this.dict = a || {}
                }
                return c.prototype.all = function() {
                    return this.dict
                }, c.prototype.get = function(a) {
                    return this.dict[a]
                }, c.prototype.extend = function(b) {
                    this.dict = a.extend({}, b.all(), this.dict)
                }, c._cache = {}, c.loadPath = function(a) {
                    if (!(a in c._cache)) {
                        var d = b(a);
                        c._cache[a] = d
                    }
                    return new c(c._cache[a])
                }, c
            }), b.define("select2/diacritics", [], function() {
                return {
                    "Ⓐ": "A",
                    "Ａ": "A",
                    "À": "A",
                    "Á": "A",
                    "Â": "A",
                    "Ầ": "A",
                    "Ấ": "A",
                    "Ẫ": "A",
                    "Ẩ": "A",
                    "Ã": "A",
                    "Ā": "A",
                    "Ă": "A",
                    "Ằ": "A",
                    "Ắ": "A",
                    "Ẵ": "A",
                    "Ẳ": "A",
                    "Ȧ": "A",
                    "Ǡ": "A",
                    "Ä": "A",
                    "Ǟ": "A",
                    "Ả": "A",
                    "Å": "A",
                    "Ǻ": "A",
                    "Ǎ": "A",
                    "Ȁ": "A",
                    "Ȃ": "A",
                    "Ạ": "A",
                    "Ậ": "A",
                    "Ặ": "A",
                    "Ḁ": "A",
                    "Ą": "A",
                    "Ⱥ": "A",
                    "Ɐ": "A",
                    "Ꜳ": "AA",
                    "Æ": "AE",
                    "Ǽ": "AE",
                    "Ǣ": "AE",
                    "Ꜵ": "AO",
                    "Ꜷ": "AU",
                    "Ꜹ": "AV",
                    "Ꜻ": "AV",
                    "Ꜽ": "AY",
                    "Ⓑ": "B",
                    "Ｂ": "B",
                    "Ḃ": "B",
                    "Ḅ": "B",
                    "Ḇ": "B",
                    "Ƀ": "B",
                    "Ƃ": "B",
                    "Ɓ": "B",
                    "Ⓒ": "C",
                    "Ｃ": "C",
                    "Ć": "C",
                    "Ĉ": "C",
                    "Ċ": "C",
                    "Č": "C",
                    "Ç": "C",
                    "Ḉ": "C",
                    "Ƈ": "C",
                    "Ȼ": "C",
                    "Ꜿ": "C",
                    "Ⓓ": "D",
                    "Ｄ": "D",
                    "Ḋ": "D",
                    "Ď": "D",
                    "Ḍ": "D",
                    "Ḑ": "D",
                    "Ḓ": "D",
                    "Ḏ": "D",
                    "Đ": "D",
                    "Ƌ": "D",
                    "Ɗ": "D",
                    "Ɖ": "D",
                    "Ꝺ": "D",
                    "Ǳ": "DZ",
                    "Ǆ": "DZ",
                    "ǲ": "Dz",
                    "ǅ": "Dz",
                    "Ⓔ": "E",
                    "Ｅ": "E",
                    "È": "E",
                    "É": "E",
                    "Ê": "E",
                    "Ề": "E",
                    "Ế": "E",
                    "Ễ": "E",
                    "Ể": "E",
                    "Ẽ": "E",
                    "Ē": "E",
                    "Ḕ": "E",
                    "Ḗ": "E",
                    "Ĕ": "E",
                    "Ė": "E",
                    "Ë": "E",
                    "Ẻ": "E",
                    "Ě": "E",
                    "Ȅ": "E",
                    "Ȇ": "E",
                    "Ẹ": "E",
                    "Ệ": "E",
                    "Ȩ": "E",
                    "Ḝ": "E",
                    "Ę": "E",
                    "Ḙ": "E",
                    "Ḛ": "E",
                    "Ɛ": "E",
                    "Ǝ": "E",
                    "Ⓕ": "F",
                    "Ｆ": "F",
                    "Ḟ": "F",
                    "Ƒ": "F",
                    "Ꝼ": "F",
                    "Ⓖ": "G",
                    "Ｇ": "G",
                    "Ǵ": "G",
                    "Ĝ": "G",
                    "Ḡ": "G",
                    "Ğ": "G",
                    "Ġ": "G",
                    "Ǧ": "G",
                    "Ģ": "G",
                    "Ǥ": "G",
                    "Ɠ": "G",
                    "Ꞡ": "G",
                    "Ᵹ": "G",
                    "Ꝿ": "G",
                    "Ⓗ": "H",
                    "Ｈ": "H",
                    "Ĥ": "H",
                    "Ḣ": "H",
                    "Ḧ": "H",
                    "Ȟ": "H",
                    "Ḥ": "H",
                    "Ḩ": "H",
                    "Ḫ": "H",
                    "Ħ": "H",
                    "Ⱨ": "H",
                    "Ⱶ": "H",
                    "Ɥ": "H",
                    "Ⓘ": "I",
                    "Ｉ": "I",
                    "Ì": "I",
                    "Í": "I",
                    "Î": "I",
                    "Ĩ": "I",
                    "Ī": "I",
                    "Ĭ": "I",
                    "İ": "I",
                    "Ï": "I",
                    "Ḯ": "I",
                    "Ỉ": "I",
                    "Ǐ": "I",
                    "Ȉ": "I",
                    "Ȋ": "I",
                    "Ị": "I",
                    "Į": "I",
                    "Ḭ": "I",
                    "Ɨ": "I",
                    "Ⓙ": "J",
                    "Ｊ": "J",
                    "Ĵ": "J",
                    "Ɉ": "J",
                    "Ⓚ": "K",
                    "Ｋ": "K",
                    "Ḱ": "K",
                    "Ǩ": "K",
                    "Ḳ": "K",
                    "Ķ": "K",
                    "Ḵ": "K",
                    "Ƙ": "K",
                    "Ⱪ": "K",
                    "Ꝁ": "K",
                    "Ꝃ": "K",
                    "Ꝅ": "K",
                    "Ꞣ": "K",
                    "Ⓛ": "L",
                    "Ｌ": "L",
                    "Ŀ": "L",
                    "Ĺ": "L",
                    "Ľ": "L",
                    "Ḷ": "L",
                    "Ḹ": "L",
                    "Ļ": "L",
                    "Ḽ": "L",
                    "Ḻ": "L",
                    "Ł": "L",
                    "Ƚ": "L",
                    "Ɫ": "L",
                    "Ⱡ": "L",
                    "Ꝉ": "L",
                    "Ꝇ": "L",
                    "Ꞁ": "L",
                    "Ǉ": "LJ",
                    "ǈ": "Lj",
                    "Ⓜ": "M",
                    "Ｍ": "M",
                    "Ḿ": "M",
                    "Ṁ": "M",
                    "Ṃ": "M",
                    "Ɱ": "M",
                    "Ɯ": "M",
                    "Ⓝ": "N",
                    "Ｎ": "N",
                    "Ǹ": "N",
                    "Ń": "N",
                    "Ñ": "N",
                    "Ṅ": "N",
                    "Ň": "N",
                    "Ṇ": "N",
                    "Ņ": "N",
                    "Ṋ": "N",
                    "Ṉ": "N",
                    "Ƞ": "N",
                    "Ɲ": "N",
                    "Ꞑ": "N",
                    "Ꞥ": "N",
                    "Ǌ": "NJ",
                    "ǋ": "Nj",
                    "Ⓞ": "O",
                    "Ｏ": "O",
                    "Ò": "O",
                    "Ó": "O",
                    "Ô": "O",
                    "Ồ": "O",
                    "Ố": "O",
                    "Ỗ": "O",
                    "Ổ": "O",
                    "Õ": "O",
                    "Ṍ": "O",
                    "Ȭ": "O",
                    "Ṏ": "O",
                    "Ō": "O",
                    "Ṑ": "O",
                    "Ṓ": "O",
                    "Ŏ": "O",
                    "Ȯ": "O",
                    "Ȱ": "O",
                    "Ö": "O",
                    "Ȫ": "O",
                    "Ỏ": "O",
                    "Ő": "O",
                    "Ǒ": "O",
                    "Ȍ": "O",
                    "Ȏ": "O",
                    "Ơ": "O",
                    "Ờ": "O",
                    "Ớ": "O",
                    "Ỡ": "O",
                    "Ở": "O",
                    "Ợ": "O",
                    "Ọ": "O",
                    "Ộ": "O",
                    "Ǫ": "O",
                    "Ǭ": "O",
                    "Ø": "O",
                    "Ǿ": "O",
                    "Ɔ": "O",
                    "Ɵ": "O",
                    "Ꝋ": "O",
                    "Ꝍ": "O",
                    "Ƣ": "OI",
                    "Ꝏ": "OO",
                    "Ȣ": "OU",
                    "Ⓟ": "P",
                    "Ｐ": "P",
                    "Ṕ": "P",
                    "Ṗ": "P",
                    "Ƥ": "P",
                    "Ᵽ": "P",
                    "Ꝑ": "P",
                    "Ꝓ": "P",
                    "Ꝕ": "P",
                    "Ⓠ": "Q",
                    "Ｑ": "Q",
                    "Ꝗ": "Q",
                    "Ꝙ": "Q",
                    "Ɋ": "Q",
                    "Ⓡ": "R",
                    "Ｒ": "R",
                    "Ŕ": "R",
                    "Ṙ": "R",
                    "Ř": "R",
                    "Ȑ": "R",
                    "Ȓ": "R",
                    "Ṛ": "R",
                    "Ṝ": "R",
                    "Ŗ": "R",
                    "Ṟ": "R",
                    "Ɍ": "R",
                    "Ɽ": "R",
                    "Ꝛ": "R",
                    "Ꞧ": "R",
                    "Ꞃ": "R",
                    "Ⓢ": "S",
                    "Ｓ": "S",
                    "ẞ": "S",
                    "Ś": "S",
                    "Ṥ": "S",
                    "Ŝ": "S",
                    "Ṡ": "S",
                    "Š": "S",
                    "Ṧ": "S",
                    "Ṣ": "S",
                    "Ṩ": "S",
                    "Ș": "S",
                    "Ş": "S",
                    "Ȿ": "S",
                    "Ꞩ": "S",
                    "Ꞅ": "S",
                    "Ⓣ": "T",
                    "Ｔ": "T",
                    "Ṫ": "T",
                    "Ť": "T",
                    "Ṭ": "T",
                    "Ț": "T",
                    "Ţ": "T",
                    "Ṱ": "T",
                    "Ṯ": "T",
                    "Ŧ": "T",
                    "Ƭ": "T",
                    "Ʈ": "T",
                    "Ⱦ": "T",
                    "Ꞇ": "T",
                    "Ꜩ": "TZ",
                    "Ⓤ": "U",
                    "Ｕ": "U",
                    "Ù": "U",
                    "Ú": "U",
                    "Û": "U",
                    "Ũ": "U",
                    "Ṹ": "U",
                    "Ū": "U",
                    "Ṻ": "U",
                    "Ŭ": "U",
                    "Ü": "U",
                    "Ǜ": "U",
                    "Ǘ": "U",
                    "Ǖ": "U",
                    "Ǚ": "U",
                    "Ủ": "U",
                    "Ů": "U",
                    "Ű": "U",
                    "Ǔ": "U",
                    "Ȕ": "U",
                    "Ȗ": "U",
                    "Ư": "U",
                    "Ừ": "U",
                    "Ứ": "U",
                    "Ữ": "U",
                    "Ử": "U",
                    "Ự": "U",
                    "Ụ": "U",
                    "Ṳ": "U",
                    "Ų": "U",
                    "Ṷ": "U",
                    "Ṵ": "U",
                    "Ʉ": "U",
                    "Ⓥ": "V",
                    "Ｖ": "V",
                    "Ṽ": "V",
                    "Ṿ": "V",
                    "Ʋ": "V",
                    "Ꝟ": "V",
                    "Ʌ": "V",
                    "Ꝡ": "VY",
                    "Ⓦ": "W",
                    "Ｗ": "W",
                    "Ẁ": "W",
                    "Ẃ": "W",
                    "Ŵ": "W",
                    "Ẇ": "W",
                    "Ẅ": "W",
                    "Ẉ": "W",
                    "Ⱳ": "W",
                    "Ⓧ": "X",
                    "Ｘ": "X",
                    "Ẋ": "X",
                    "Ẍ": "X",
                    "Ⓨ": "Y",
                    "Ｙ": "Y",
                    "Ỳ": "Y",
                    "Ý": "Y",
                    "Ŷ": "Y",
                    "Ỹ": "Y",
                    "Ȳ": "Y",
                    "Ẏ": "Y",
                    "Ÿ": "Y",
                    "Ỷ": "Y",
                    "Ỵ": "Y",
                    "Ƴ": "Y",
                    "Ɏ": "Y",
                    "Ỿ": "Y",
                    "Ⓩ": "Z",
                    "Ｚ": "Z",
                    "Ź": "Z",
                    "Ẑ": "Z",
                    "Ż": "Z",
                    "Ž": "Z",
                    "Ẓ": "Z",
                    "Ẕ": "Z",
                    "Ƶ": "Z",
                    "Ȥ": "Z",
                    "Ɀ": "Z",
                    "Ⱬ": "Z",
                    "Ꝣ": "Z",
                    "ⓐ": "a",
                    "ａ": "a",
                    "ẚ": "a",
                    "à": "a",
                    "á": "a",
                    "â": "a",
                    "ầ": "a",
                    "ấ": "a",
                    "ẫ": "a",
                    "ẩ": "a",
                    "ã": "a",
                    "ā": "a",
                    "ă": "a",
                    "ằ": "a",
                    "ắ": "a",
                    "ẵ": "a",
                    "ẳ": "a",
                    "ȧ": "a",
                    "ǡ": "a",
                    "ä": "a",
                    "ǟ": "a",
                    "ả": "a",
                    "å": "a",
                    "ǻ": "a",
                    "ǎ": "a",
                    "ȁ": "a",
                    "ȃ": "a",
                    "ạ": "a",
                    "ậ": "a",
                    "ặ": "a",
                    "ḁ": "a",
                    "ą": "a",
                    "ⱥ": "a",
                    "ɐ": "a",
                    "ꜳ": "aa",
                    "æ": "ae",
                    "ǽ": "ae",
                    "ǣ": "ae",
                    "ꜵ": "ao",
                    "ꜷ": "au",
                    "ꜹ": "av",
                    "ꜻ": "av",
                    "ꜽ": "ay",
                    "ⓑ": "b",
                    "ｂ": "b",
                    "ḃ": "b",
                    "ḅ": "b",
                    "ḇ": "b",
                    "ƀ": "b",
                    "ƃ": "b",
                    "ɓ": "b",
                    "ⓒ": "c",
                    "ｃ": "c",
                    "ć": "c",
                    "ĉ": "c",
                    "ċ": "c",
                    "č": "c",
                    "ç": "c",
                    "ḉ": "c",
                    "ƈ": "c",
                    "ȼ": "c",
                    "ꜿ": "c",
                    "ↄ": "c",
                    "ⓓ": "d",
                    "ｄ": "d",
                    "ḋ": "d",
                    "ď": "d",
                    "ḍ": "d",
                    "ḑ": "d",
                    "ḓ": "d",
                    "ḏ": "d",
                    "đ": "d",
                    "ƌ": "d",
                    "ɖ": "d",
                    "ɗ": "d",
                    "ꝺ": "d",
                    "ǳ": "dz",
                    "ǆ": "dz",
                    "ⓔ": "e",
                    "ｅ": "e",
                    "è": "e",
                    "é": "e",
                    "ê": "e",
                    "ề": "e",
                    "ế": "e",
                    "ễ": "e",
                    "ể": "e",
                    "ẽ": "e",
                    "ē": "e",
                    "ḕ": "e",
                    "ḗ": "e",
                    "ĕ": "e",
                    "ė": "e",
                    "ë": "e",
                    "ẻ": "e",
                    "ě": "e",
                    "ȅ": "e",
                    "ȇ": "e",
                    "ẹ": "e",
                    "ệ": "e",
                    "ȩ": "e",
                    "ḝ": "e",
                    "ę": "e",
                    "ḙ": "e",
                    "ḛ": "e",
                    "ɇ": "e",
                    "ɛ": "e",
                    "ǝ": "e",
                    "ⓕ": "f",
                    "ｆ": "f",
                    "ḟ": "f",
                    "ƒ": "f",
                    "ꝼ": "f",
                    "ⓖ": "g",
                    "ｇ": "g",
                    "ǵ": "g",
                    "ĝ": "g",
                    "ḡ": "g",
                    "ğ": "g",
                    "ġ": "g",
                    "ǧ": "g",
                    "ģ": "g",
                    "ǥ": "g",
                    "ɠ": "g",
                    "ꞡ": "g",
                    "ᵹ": "g",
                    "ꝿ": "g",
                    "ⓗ": "h",
                    "ｈ": "h",
                    "ĥ": "h",
                    "ḣ": "h",
                    "ḧ": "h",
                    "ȟ": "h",
                    "ḥ": "h",
                    "ḩ": "h",
                    "ḫ": "h",
                    "ẖ": "h",
                    "ħ": "h",
                    "ⱨ": "h",
                    "ⱶ": "h",
                    "ɥ": "h",
                    "ƕ": "hv",
                    "ⓘ": "i",
                    "ｉ": "i",
                    "ì": "i",
                    "í": "i",
                    "î": "i",
                    "ĩ": "i",
                    "ī": "i",
                    "ĭ": "i",
                    "ï": "i",
                    "ḯ": "i",
                    "ỉ": "i",
                    "ǐ": "i",
                    "ȉ": "i",
                    "ȋ": "i",
                    "ị": "i",
                    "į": "i",
                    "ḭ": "i",
                    "ɨ": "i",
                    "ı": "i",
                    "ⓙ": "j",
                    "ｊ": "j",
                    "ĵ": "j",
                    "ǰ": "j",
                    "ɉ": "j",
                    "ⓚ": "k",
                    "ｋ": "k",
                    "ḱ": "k",
                    "ǩ": "k",
                    "ḳ": "k",
                    "ķ": "k",
                    "ḵ": "k",
                    "ƙ": "k",
                    "ⱪ": "k",
                    "ꝁ": "k",
                    "ꝃ": "k",
                    "ꝅ": "k",
                    "ꞣ": "k",
                    "ⓛ": "l",
                    "ｌ": "l",
                    "ŀ": "l",
                    "ĺ": "l",
                    "ľ": "l",
                    "ḷ": "l",
                    "ḹ": "l",
                    "ļ": "l",
                    "ḽ": "l",
                    "ḻ": "l",
                    "ſ": "l",
                    "ł": "l",
                    "ƚ": "l",
                    "ɫ": "l",
                    "ⱡ": "l",
                    "ꝉ": "l",
                    "ꞁ": "l",
                    "ꝇ": "l",
                    "ǉ": "lj",
                    "ⓜ": "m",
                    "ｍ": "m",
                    "ḿ": "m",
                    "ṁ": "m",
                    "ṃ": "m",
                    "ɱ": "m",
                    "ɯ": "m",
                    "ⓝ": "n",
                    "ｎ": "n",
                    "ǹ": "n",
                    "ń": "n",
                    "ñ": "n",
                    "ṅ": "n",
                    "ň": "n",
                    "ṇ": "n",
                    "ņ": "n",
                    "ṋ": "n",
                    "ṉ": "n",
                    "ƞ": "n",
                    "ɲ": "n",
                    "ŉ": "n",
                    "ꞑ": "n",
                    "ꞥ": "n",
                    "ǌ": "nj",
                    "ⓞ": "o",
                    "ｏ": "o",
                    "ò": "o",
                    "ó": "o",
                    "ô": "o",
                    "ồ": "o",
                    "ố": "o",
                    "ỗ": "o",
                    "ổ": "o",
                    "õ": "o",
                    "ṍ": "o",
                    "ȭ": "o",
                    "ṏ": "o",
                    "ō": "o",
                    "ṑ": "o",
                    "ṓ": "o",
                    "ŏ": "o",
                    "ȯ": "o",
                    "ȱ": "o",
                    "ö": "o",
                    "ȫ": "o",
                    "ỏ": "o",
                    "ő": "o",
                    "ǒ": "o",
                    "ȍ": "o",
                    "ȏ": "o",
                    "ơ": "o",
                    "ờ": "o",
                    "ớ": "o",
                    "ỡ": "o",
                    "ở": "o",
                    "ợ": "o",
                    "ọ": "o",
                    "ộ": "o",
                    "ǫ": "o",
                    "ǭ": "o",
                    "ø": "o",
                    "ǿ": "o",
                    "ɔ": "o",
                    "ꝋ": "o",
                    "ꝍ": "o",
                    "ɵ": "o",
                    "ƣ": "oi",
                    "ȣ": "ou",
                    "ꝏ": "oo",
                    "ⓟ": "p",
                    "ｐ": "p",
                    "ṕ": "p",
                    "ṗ": "p",
                    "ƥ": "p",
                    "ᵽ": "p",
                    "ꝑ": "p",
                    "ꝓ": "p",
                    "ꝕ": "p",
                    "ⓠ": "q",
                    "ｑ": "q",
                    "ɋ": "q",
                    "ꝗ": "q",
                    "ꝙ": "q",
                    "ⓡ": "r",
                    "ｒ": "r",
                    "ŕ": "r",
                    "ṙ": "r",
                    "ř": "r",
                    "ȑ": "r",
                    "ȓ": "r",
                    "ṛ": "r",
                    "ṝ": "r",
                    "ŗ": "r",
                    "ṟ": "r",
                    "ɍ": "r",
                    "ɽ": "r",
                    "ꝛ": "r",
                    "ꞧ": "r",
                    "ꞃ": "r",
                    "ⓢ": "s",
                    "ｓ": "s",
                    "ß": "s",
                    "ś": "s",
                    "ṥ": "s",
                    "ŝ": "s",
                    "ṡ": "s",
                    "š": "s",
                    "ṧ": "s",
                    "ṣ": "s",
                    "ṩ": "s",
                    "ș": "s",
                    "ş": "s",
                    "ȿ": "s",
                    "ꞩ": "s",
                    "ꞅ": "s",
                    "ẛ": "s",
                    "ⓣ": "t",
                    "ｔ": "t",
                    "ṫ": "t",
                    "ẗ": "t",
                    "ť": "t",
                    "ṭ": "t",
                    "ț": "t",
                    "ţ": "t",
                    "ṱ": "t",
                    "ṯ": "t",
                    "ŧ": "t",
                    "ƭ": "t",
                    "ʈ": "t",
                    "ⱦ": "t",
                    "ꞇ": "t",
                    "ꜩ": "tz",
                    "ⓤ": "u",
                    "ｕ": "u",
                    "ù": "u",
                    "ú": "u",
                    "û": "u",
                    "ũ": "u",
                    "ṹ": "u",
                    "ū": "u",
                    "ṻ": "u",
                    "ŭ": "u",
                    "ü": "u",
                    "ǜ": "u",
                    "ǘ": "u",
                    "ǖ": "u",
                    "ǚ": "u",
                    "ủ": "u",
                    "ů": "u",
                    "ű": "u",
                    "ǔ": "u",
                    "ȕ": "u",
                    "ȗ": "u",
                    "ư": "u",
                    "ừ": "u",
                    "ứ": "u",
                    "ữ": "u",
                    "ử": "u",
                    "ự": "u",
                    "ụ": "u",
                    "ṳ": "u",
                    "ų": "u",
                    "ṷ": "u",
                    "ṵ": "u",
                    "ʉ": "u",
                    "ⓥ": "v",
                    "ｖ": "v",
                    "ṽ": "v",
                    "ṿ": "v",
                    "ʋ": "v",
                    "ꝟ": "v",
                    "ʌ": "v",
                    "ꝡ": "vy",
                    "ⓦ": "w",
                    "ｗ": "w",
                    "ẁ": "w",
                    "ẃ": "w",
                    "ŵ": "w",
                    "ẇ": "w",
                    "ẅ": "w",
                    "ẘ": "w",
                    "ẉ": "w",
                    "ⱳ": "w",
                    "ⓧ": "x",
                    "ｘ": "x",
                    "ẋ": "x",
                    "ẍ": "x",
                    "ⓨ": "y",
                    "ｙ": "y",
                    "ỳ": "y",
                    "ý": "y",
                    "ŷ": "y",
                    "ỹ": "y",
                    "ȳ": "y",
                    "ẏ": "y",
                    "ÿ": "y",
                    "ỷ": "y",
                    "ẙ": "y",
                    "ỵ": "y",
                    "ƴ": "y",
                    "ɏ": "y",
                    "ỿ": "y",
                    "ⓩ": "z",
                    "ｚ": "z",
                    "ź": "z",
                    "ẑ": "z",
                    "ż": "z",
                    "ž": "z",
                    "ẓ": "z",
                    "ẕ": "z",
                    "ƶ": "z",
                    "ȥ": "z",
                    "ɀ": "z",
                    "ⱬ": "z",
                    "ꝣ": "z",
                    "Ά": "Α",
                    "Έ": "Ε",
                    "Ή": "Η",
                    "Ί": "Ι",
                    "Ϊ": "Ι",
                    "Ό": "Ο",
                    "Ύ": "Υ",
                    "Ϋ": "Υ",
                    "Ώ": "Ω",
                    "ά": "α",
                    "έ": "ε",
                    "ή": "η",
                    "ί": "ι",
                    "ϊ": "ι",
                    "ΐ": "ι",
                    "ό": "ο",
                    "ύ": "υ",
                    "ϋ": "υ",
                    "ΰ": "υ",
                    "ω": "ω",
                    "ς": "σ"
                }
            }), b.define("select2/data/base", ["../utils"], function(a) {
                function b(a, c) {
                    b.__super__.constructor.call(this)
                }
                return a.Extend(b, a.Observable), b.prototype.current = function(a) {
                    throw new Error("The `current` method must be defined in child classes.")
                }, b.prototype.query = function(a, b) {
                    throw new Error("The `query` method must be defined in child classes.")
                }, b.prototype.bind = function(a, b) {}, b.prototype.destroy = function() {}, b.prototype.generateResultId = function(b, c) {
                    var d = b.id + "-result-";
                    return d += a.generateChars(4), null != c.id ? d += "-" + c.id.toString() : d += "-" + a.generateChars(4), d
                }, b
            }), b.define("select2/data/select", ["./base", "../utils", "jquery"], function(a, b, c) {
                function d(a, b) {
                    this.$element = a, this.options = b, d.__super__.constructor.call(this)
                }
                return b.Extend(d, a), d.prototype.current = function(a) {
                    var b = [],
                        d = this;
                    this.$element.find(":selected").each(function() {
                        var a = c(this),
                            e = d.item(a);
                        b.push(e)
                    }), a(b)
                }, d.prototype.select = function(a) {
                    var b = this;
                    if (a.selected = !0, c(a.element).is("option")) return a.element.selected = !0, void this.$element.trigger("change");
                    if (this.$element.prop("multiple")) this.current(function(d) {
                        var e = [];
                        a = [a], a.push.apply(a, d);
                        for (var f = 0; f < a.length; f++) {
                            var g = a[f].id; - 1 === c.inArray(g, e) && e.push(g)
                        }
                        b.$element.val(e), b.$element.trigger("change")
                    });
                    else {
                        var d = a.id;
                        this.$element.val(d), this.$element.trigger("change")
                    }
                }, d.prototype.unselect = function(a) {
                    var b = this;
                    if (this.$element.prop("multiple")) {
                        if (a.selected = !1, c(a.element).is("option")) return a.element.selected = !1, void this.$element.trigger("change");
                        this.current(function(d) {
                            for (var e = [], f = 0; f < d.length; f++) {
                                var g = d[f].id;
                                g !== a.id && -1 === c.inArray(g, e) && e.push(g)
                            }
                            b.$element.val(e), b.$element.trigger("change")
                        })
                    }
                }, d.prototype.bind = function(a, b) {
                    var c = this;
                    this.container = a, a.on("select", function(a) {
                        c.select(a.data)
                    }), a.on("unselect", function(a) {
                        c.unselect(a.data)
                    })
                }, d.prototype.destroy = function() {
                    this.$element.find("*").each(function() {
                        c.removeData(this, "data")
                    })
                }, d.prototype.query = function(a, b) {
                    var d = [],
                        e = this;
                    this.$element.children().each(function() {
                        var b = c(this);
                        if (b.is("option") || b.is("optgroup")) {
                            var f = e.item(b),
                                g = e.matches(a, f);
                            null !== g && d.push(g)
                        }
                    }), b({
                        results: d
                    })
                }, d.prototype.addOptions = function(a) {
                    b.appendMany(this.$element, a)
                }, d.prototype.option = function(a) {
                    var b;
                    a.children ? (b = document.createElement("optgroup"), b.label = a.text) : (b = document.createElement("option"), void 0 !== b.textContent ? b.textContent = a.text : b.innerText = a.text), void 0 !== a.id && (b.value = a.id), a.disabled && (b.disabled = !0), a.selected && (b.selected = !0), a.title && (b.title = a.title);
                    var d = c(b),
                        e = this._normalizeItem(a);
                    return e.element = b, c.data(b, "data", e), d
                }, d.prototype.item = function(a) {
                    var b = {};
                    if (null != (b = c.data(a[0], "data"))) return b;
                    if (a.is("option")) b = {
                        id: a.val(),
                        text: a.text(),
                        disabled: a.prop("disabled"),
                        selected: a.prop("selected"),
                        title: a.prop("title")
                    };
                    else if (a.is("optgroup")) {
                        b = {
                            text: a.prop("label"),
                            children: [],
                            title: a.prop("title")
                        };
                        for (var d = a.children("option"), e = [], f = 0; f < d.length; f++) {
                            var g = c(d[f]),
                                h = this.item(g);
                            e.push(h)
                        }
                        b.children = e
                    }
                    return b = this._normalizeItem(b), b.element = a[0], c.data(a[0], "data", b), b
                }, d.prototype._normalizeItem = function(a) {
                    c.isPlainObject(a) || (a = {
                        id: a,
                        text: a
                    }), a = c.extend({}, {
                        text: ""
                    }, a);
                    var b = {
                        selected: !1,
                        disabled: !1
                    };
                    return null != a.id && (a.id = a.id.toString()), null != a.text && (a.text = a.text.toString()), null == a._resultId && a.id && null != this.container && (a._resultId = this.generateResultId(this.container, a)), c.extend({}, b, a)
                }, d.prototype.matches = function(a, b) {
                    return this.options.get("matcher")(a, b)
                }, d
            }), b.define("select2/data/array", ["./select", "../utils", "jquery"], function(a, b, c) {
                function d(a, b) {
                    var c = b.get("data") || [];
                    d.__super__.constructor.call(this, a, b), this.addOptions(this.convertToOptions(c))
                }
                return b.Extend(d, a), d.prototype.select = function(a) {
                    var b = this.$element.find("option").filter(function(b, c) {
                        return c.value == a.id.toString()
                    });
                    0 === b.length && (b = this.option(a), this.addOptions(b)), d.__super__.select.call(this, a)
                }, d.prototype.convertToOptions = function(a) {
                    function d(a) {
                        return function() {
                            return c(this).val() == a.id
                        }
                    }
                    for (var e = this, f = this.$element.find("option"), g = f.map(function() {
                        return e.item(c(this)).id
                    }).get(), h = [], i = 0; i < a.length; i++) {
                        var j = this._normalizeItem(a[i]);
                        if (c.inArray(j.id, g) >= 0) {
                            var k = f.filter(d(j)),
                                l = this.item(k),
                                m = c.extend(!0, {}, j, l),
                                n = this.option(m);
                            k.replaceWith(n)
                        } else {
                            var o = this.option(j);
                            if (j.children) {
                                var p = this.convertToOptions(j.children);
                                b.appendMany(o, p)
                            }
                            h.push(o)
                        }
                    }
                    return h
                }, d
            }), b.define("select2/data/ajax", ["./array", "../utils", "jquery"], function(a, b, c) {
                function d(a, b) {
                    this.ajaxOptions = this._applyDefaults(b.get("ajax")), null != this.ajaxOptions.processResults && (this.processResults = this.ajaxOptions.processResults), d.__super__.constructor.call(this, a, b)
                }
                return b.Extend(d, a), d.prototype._applyDefaults = function(a) {
                    var b = {
                        data: function(a) {
                            return c.extend({}, a, {
                                q: a.term
                            })
                        },
                        transport: function(a, b, d) {
                            var e = c.ajax(a);
                            return e.then(b), e.fail(d), e
                        }
                    };
                    return c.extend({}, b, a, !0)
                }, d.prototype.processResults = function(a) {
                    return a
                }, d.prototype.query = function(a, b) {
                    function d() {
                        var d = f.transport(f, function(d) {
                            var f = e.processResults(d, a);
                            e.options.get("debug") && window.console && console.error && (f && f.results && c.isArray(f.results) || console.error("Select2: The AJAX results did not return an array in the `results` key of the response.")), b(f)
                        }, function() {
                            d.status && "0" === d.status || e.trigger("results:message", {
                                message: "errorLoading"
                            })
                        });
                        e._request = d
                    }
                    var e = this;
                    null != this._request && (c.isFunction(this._request.abort) && this._request.abort(), this._request = null);
                    var f = c.extend({
                        type: "GET"
                    }, this.ajaxOptions);
                    "function" == typeof f.url && (f.url = f.url.call(this.$element, a)), "function" == typeof f.data && (f.data = f.data.call(this.$element, a)), this.ajaxOptions.delay && null != a.term ? (this._queryTimeout && window.clearTimeout(this._queryTimeout), this._queryTimeout = window.setTimeout(d, this.ajaxOptions.delay)) : d()
                }, d
            }), b.define("select2/data/tags", ["jquery"], function(a) {
                function b(b, c, d) {
                    var e = d.get("tags"),
                        f = d.get("createTag");
                    void 0 !== f && (this.createTag = f);
                    var g = d.get("insertTag");
                    if (void 0 !== g && (this.insertTag = g), b.call(this, c, d), a.isArray(e))
                        for (var h = 0; h < e.length; h++) {
                            var i = e[h],
                                j = this._normalizeItem(i),
                                k = this.option(j);
                            this.$element.append(k)
                        }
                }
                return b.prototype.query = function(a, b, c) {
                    function d(a, f) {
                        for (var g = a.results, h = 0; h < g.length; h++) {
                            var i = g[h],
                                j = null != i.children && !d({
                                    results: i.children
                                }, !0);
                            if ((i.text || "").toUpperCase() === (b.term || "").toUpperCase() || j) return !f && (a.data = g, void c(a))
                        }
                        if (f) return !0;
                        var k = e.createTag(b);
                        if (null != k) {
                            var l = e.option(k);
                            l.attr("data-select2-tag", !0), e.addOptions([l]), e.insertTag(g, k)
                        }
                        a.results = g, c(a)
                    }
                    var e = this;
                    if (this._removeOldTags(), null == b.term || null != b.page) return void a.call(this, b, c);
                    a.call(this, b, d)
                }, b.prototype.createTag = function(b, c) {
                    var d = a.trim(c.term);
                    return "" === d ? null : {
                        id: d,
                        text: d
                    }
                }, b.prototype.insertTag = function(a, b, c) {
                    b.unshift(c)
                }, b.prototype._removeOldTags = function(b) {
                    this._lastTag;
                    this.$element.find("option[data-select2-tag]").each(function() {
                        this.selected || a(this).remove()
                    })
                }, b
            }), b.define("select2/data/tokenizer", ["jquery"], function(a) {
                function b(a, b, c) {
                    var d = c.get("tokenizer");
                    void 0 !== d && (this.tokenizer = d), a.call(this, b, c)
                }
                return b.prototype.bind = function(a, b, c) {
                    a.call(this, b, c), this.$search = b.dropdown.$search || b.selection.$search || c.find(".select2-search__field")
                }, b.prototype.query = function(b, c, d) {
                    function e(b) {
                        var c = g._normalizeItem(b);
                        if (!g.$element.find("option").filter(function() {
                            return a(this).val() === c.id
                        }).length) {
                            var d = g.option(c);
                            d.attr("data-select2-tag", !0), g._removeOldTags(), g.addOptions([d])
                        }
                        f(c)
                    }

                    function f(a) {
                        g.trigger("select", {
                            data: a
                        })
                    }
                    var g = this;
                    c.term = c.term || "";
                    var h = this.tokenizer(c, this.options, e);
                    h.term !== c.term && (this.$search.length && (this.$search.val(h.term), this.$search.focus()), c.term = h.term), b.call(this, c, d)
                }, b.prototype.tokenizer = function(b, c, d, e) {
                    for (var f = d.get("tokenSeparators") || [], g = c.term, h = 0, i = this.createTag || function(a) {
                        return {
                            id: a.term,
                            text: a.term
                        }
                    }; h < g.length;) {
                        var j = g[h];
                        if (-1 !== a.inArray(j, f)) {
                            var k = g.substr(0, h),
                                l = a.extend({}, c, {
                                    term: k
                                }),
                                m = i(l);
                            null != m ? (e(m), g = g.substr(h + 1) || "", h = 0) : h++
                        } else h++
                    }
                    return {
                        term: g
                    }
                }, b
            }), b.define("select2/data/minimumInputLength", [], function() {
                function a(a, b, c) {
                    this.minimumInputLength = c.get("minimumInputLength"), a.call(this, b, c)
                }
                return a.prototype.query = function(a, b, c) {
                    if (b.term = b.term || "", b.term.length < this.minimumInputLength) return void this.trigger("results:message", {
                        message: "inputTooShort",
                        args: {
                            minimum: this.minimumInputLength,
                            input: b.term,
                            params: b
                        }
                    });
                    a.call(this, b, c)
                }, a
            }), b.define("select2/data/maximumInputLength", [], function() {
                function a(a, b, c) {
                    this.maximumInputLength = c.get("maximumInputLength"), a.call(this, b, c)
                }
                return a.prototype.query = function(a, b, c) {
                    if (b.term = b.term || "", this.maximumInputLength > 0 && b.term.length > this.maximumInputLength) return void this.trigger("results:message", {
                        message: "inputTooLong",
                        args: {
                            maximum: this.maximumInputLength,
                            input: b.term,
                            params: b
                        }
                    });
                    a.call(this, b, c)
                }, a
            }), b.define("select2/data/maximumSelectionLength", [], function() {
                function a(a, b, c) {
                    this.maximumSelectionLength = c.get("maximumSelectionLength"), a.call(this, b, c)
                }
                return a.prototype.query = function(a, b, c) {
                    var d = this;
                    this.current(function(e) {
                        var f = null != e ? e.length : 0;
                        if (d.maximumSelectionLength > 0 && f >= d.maximumSelectionLength) return void d.trigger("results:message", {
                            message: "maximumSelected",
                            args: {
                                maximum: d.maximumSelectionLength
                            }
                        });
                        a.call(d, b, c)
                    })
                }, a
            }), b.define("select2/dropdown", ["jquery", "./utils"], function(a, b) {
                function c(a, b) {
                    this.$element = a, this.options = b, c.__super__.constructor.call(this)
                }
                return b.Extend(c, b.Observable), c.prototype.render = function() {
                    var b = a('<span class="select2-dropdown"><span class="select2-results"></span></span>');
                    return b.attr("dir", this.options.get("dir")), this.$dropdown = b, b
                }, c.prototype.bind = function() {}, c.prototype.position = function(a, b) {}, c.prototype.destroy = function() {
                    this.$dropdown.remove()
                }, c
            }), b.define("select2/dropdown/search", ["jquery", "../utils"], function(a, b) {
                function c() {}
                return c.prototype.render = function(b) {
                    var c = b.call(this),
                        d = a('<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="textbox" /></span>');
                    return this.$searchContainer = d, this.$search = d.find("input"), c.prepend(d), c
                }, c.prototype.bind = function(b, c, d) {
                    var e = this;
                    b.call(this, c, d), this.$search.on("keydown", function(a) {
                        e.trigger("keypress", a), e._keyUpPrevented = a.isDefaultPrevented()
                    }), this.$search.on("input", function(b) {
                        a(this).off("keyup")
                    }), this.$search.on("keyup input", function(a) {
                        e.handleSearch(a)
                    }), c.on("open", function() {
                        e.$search.attr("tabindex", 0), e.$search.focus(), window.setTimeout(function() {
                            e.$search.focus()
                        }, 0)
                    }), c.on("close", function() {
                        e.$search.attr("tabindex", -1), e.$search.val("")
                    }), c.on("focus", function() {
                        c.isOpen() || e.$search.focus()
                    }), c.on("results:all", function(a) {
                        if (null == a.query.term || "" === a.query.term) {
                            e.showSearch(a) ? e.$searchContainer.removeClass("select2-search--hide") : e.$searchContainer.addClass("select2-search--hide")
                        }
                    })
                }, c.prototype.handleSearch = function(a) {
                    if (!this._keyUpPrevented) {
                        var b = this.$search.val();
                        this.trigger("query", {
                            term: b
                        })
                    }
                    this._keyUpPrevented = !1
                }, c.prototype.showSearch = function(a, b) {
                    return !0
                }, c
            }), b.define("select2/dropdown/hidePlaceholder", [], function() {
                function a(a, b, c, d) {
                    this.placeholder = this.normalizePlaceholder(c.get("placeholder")), a.call(this, b, c, d)
                }
                return a.prototype.append = function(a, b) {
                    b.results = this.removePlaceholder(b.results), a.call(this, b)
                }, a.prototype.normalizePlaceholder = function(a, b) {
                    return "string" == typeof b && (b = {
                        id: "",
                        text: b
                    }), b
                }, a.prototype.removePlaceholder = function(a, b) {
                    for (var c = b.slice(0), d = b.length - 1; d >= 0; d--) {
                        var e = b[d];
                        this.placeholder.id === e.id && c.splice(d, 1)
                    }
                    return c
                }, a
            }), b.define("select2/dropdown/infiniteScroll", ["jquery"], function(a) {
                function b(a, b, c, d) {
                    this.lastParams = {}, a.call(this, b, c, d), this.$loadingMore = this.createLoadingMore(), this.loading = !1
                }
                return b.prototype.append = function(a, b) {
                    this.$loadingMore.remove(), this.loading = !1, a.call(this, b), this.showLoadingMore(b) && this.$results.append(this.$loadingMore)
                }, b.prototype.bind = function(b, c, d) {
                    var e = this;
                    b.call(this, c, d), c.on("query", function(a) {
                        e.lastParams = a, e.loading = !0
                    }), c.on("query:append", function(a) {
                        e.lastParams = a, e.loading = !0
                    }), this.$results.on("scroll", function() {
                        var b = a.contains(document.documentElement, e.$loadingMore[0]);
                        if (!e.loading && b) {
                            e.$results.offset().top + e.$results.outerHeight(!1) + 50 >= e.$loadingMore.offset().top + e.$loadingMore.outerHeight(!1) && e.loadMore()
                        }
                    })
                }, b.prototype.loadMore = function() {
                    this.loading = !0;
                    var b = a.extend({}, {
                        page: 1
                    }, this.lastParams);
                    b.page++, this.trigger("query:append", b)
                }, b.prototype.showLoadingMore = function(a, b) {
                    return b.pagination && b.pagination.more
                }, b.prototype.createLoadingMore = function() {
                    var b = a('<li class="select2-results__option select2-results__option--load-more"role="treeitem" aria-disabled="true"></li>'),
                        c = this.options.get("translations").get("loadingMore");
                    return b.html(c(this.lastParams)), b
                }, b
            }), b.define("select2/dropdown/attachBody", ["jquery", "../utils"], function(a, b) {
                function c(b, c, d) {
                    this.$dropdownParent = d.get("dropdownParent") || a(document.body), b.call(this, c, d)
                }
                return c.prototype.bind = function(a, b, c) {
                    var d = this,
                        e = !1;
                    a.call(this, b, c), b.on("open", function() {
                        d._showDropdown(), d._attachPositioningHandler(b), e || (e = !0, b.on("results:all", function() {
                            d._positionDropdown(), d._resizeDropdown()
                        }), b.on("results:append", function() {
                            d._positionDropdown(), d._resizeDropdown()
                        }))
                    }), b.on("close", function() {
                        d._hideDropdown(), d._detachPositioningHandler(b)
                    }), this.$dropdownContainer.on("mousedown", function(a) {
                        a.stopPropagation()
                    })
                }, c.prototype.destroy = function(a) {
                    a.call(this), this.$dropdownContainer.remove()
                }, c.prototype.position = function(a, b, c) {
                    b.attr("class", c.attr("class")), b.removeClass("select2"), b.addClass("select2-container--open"), b.css({
                        position: "absolute",
                        top: -999999
                    }), this.$container = c
                }, c.prototype.render = function(b) {
                    var c = a("<span></span>"),
                        d = b.call(this);
                    return c.append(d), this.$dropdownContainer = c, c
                }, c.prototype._hideDropdown = function(a) {
                    this.$dropdownContainer.detach()
                }, c.prototype._attachPositioningHandler = function(c, d) {
                    var e = this,
                        f = "scroll.select2." + d.id,
                        g = "resize.select2." + d.id,
                        h = "orientationchange.select2." + d.id,
                        i = this.$container.parents().filter(b.hasScroll);
                    i.each(function() {
                        a(this).data("select2-scroll-position", {
                            x: a(this).scrollLeft(),
                            y: a(this).scrollTop()
                        })
                    }), i.on(f, function(b) {
                        var c = a(this).data("select2-scroll-position");
                        a(this).scrollTop(c.y)
                    }), a(window).on(f + " " + g + " " + h, function(a) {
                        e._positionDropdown(), e._resizeDropdown()
                    })
                }, c.prototype._detachPositioningHandler = function(c, d) {
                    var e = "scroll.select2." + d.id,
                        f = "resize.select2." + d.id,
                        g = "orientationchange.select2." + d.id;
                    this.$container.parents().filter(b.hasScroll).off(e), a(window).off(e + " " + f + " " + g)
                }, c.prototype._positionDropdown = function() {
                    var b = a(window),
                        c = this.$dropdown.hasClass("select2-dropdown--above"),
                        d = this.$dropdown.hasClass("select2-dropdown--below"),
                        e = null,
                        f = this.$container.offset();
                    f.bottom = f.top + this.$container.outerHeight(!1);
                    var g = {
                        height: this.$container.outerHeight(!1)
                    };
                    g.top = f.top, g.bottom = f.top + g.height;
                    var h = {
                            height: this.$dropdown.outerHeight(!1)
                        },
                        i = {
                            top: b.scrollTop(),
                            bottom: b.scrollTop() + b.height()
                        },
                        j = i.top < f.top - h.height,
                        k = i.bottom > f.bottom + h.height,
                        l = {
                            left: f.left,
                            top: g.bottom
                        },
                        m = this.$dropdownParent;
                    "static" === m.css("position") && (m = m.offsetParent());
                    var n = m.offset();
                    l.top -= n.top, l.left -= n.left, c || d || (e = "below"), k || !j || c ? !j && k && c && (e = "below") : e = "above", ("above" == e || c && "below" !== e) && (l.top = g.top - n.top - h.height), null != e && (this.$dropdown.removeClass("select2-dropdown--below select2-dropdown--above").addClass("select2-dropdown--" + e), this.$container.removeClass("select2-container--below select2-container--above").addClass("select2-container--" + e)), this.$dropdownContainer.css(l)
                }, c.prototype._resizeDropdown = function() {
                    var a = {
                        width: this.$container.outerWidth(!1) + "px"
                    };
                    this.options.get("dropdownAutoWidth") && (a.minWidth = a.width, a.position = "relative", a.width = "auto"), this.$dropdown.css(a)
                }, c.prototype._showDropdown = function(a) {
                    this.$dropdownContainer.appendTo(this.$dropdownParent), this._positionDropdown(), this._resizeDropdown()
                }, c
            }), b.define("select2/dropdown/minimumResultsForSearch", [], function() {
                function a(b) {
                    for (var c = 0, d = 0; d < b.length; d++) {
                        var e = b[d];
                        e.children ? c += a(e.children) : c++
                    }
                    return c
                }

                function b(a, b, c, d) {
                    this.minimumResultsForSearch = c.get("minimumResultsForSearch"), this.minimumResultsForSearch < 0 && (this.minimumResultsForSearch = 1 / 0), a.call(this, b, c, d)
                }
                return b.prototype.showSearch = function(b, c) {
                    return !(a(c.data.results) < this.minimumResultsForSearch) && b.call(this, c)
                }, b
            }), b.define("select2/dropdown/selectOnClose", [], function() {
                function a() {}
                return a.prototype.bind = function(a, b, c) {
                    var d = this;
                    a.call(this, b, c), b.on("close", function(a) {
                        d._handleSelectOnClose(a)
                    })
                }, a.prototype._handleSelectOnClose = function(a, b) {
                    if (b && null != b.originalSelect2Event) {
                        var c = b.originalSelect2Event;
                        if ("select" === c._type || "unselect" === c._type) return
                    }
                    var d = this.getHighlightedResults();
                    if (!(d.length < 1)) {
                        var e = d.data("data");
                        null != e.element && e.element.selected || null == e.element && e.selected || this.trigger("select", {
                            data: e
                        })
                    }
                }, a
            }), b.define("select2/dropdown/closeOnSelect", [], function() {
                function a() {}
                return a.prototype.bind = function(a, b, c) {
                    var d = this;
                    a.call(this, b, c), b.on("select", function(a) {
                        d._selectTriggered(a)
                    }), b.on("unselect", function(a) {
                        d._selectTriggered(a)
                    })
                }, a.prototype._selectTriggered = function(a, b) {
                    var c = b.originalEvent;
                    c && c.ctrlKey || this.trigger("close", {
                        originalEvent: c,
                        originalSelect2Event: b
                    })
                }, a
            }), b.define("select2/i18n/en", [], function() {
                return {
                    errorLoading: function() {
                        return "The results could not be loaded."
                    },
                    inputTooLong: function(a) {
                        var b = a.input.length - a.maximum,
                            c = "Please delete " + b + " character";
                        return 1 != b && (c += "s"), c
                    },
                    inputTooShort: function(a) {
                        return "Please enter " + (a.minimum - a.input.length) + " or more characters"
                    },
                    loadingMore: function() {
                        return "Loading more results…"
                    },
                    maximumSelected: function(a) {
                        var b = "You can only select " + a.maximum + " item";
                        return 1 != a.maximum && (b += "s"), b
                    },
                    noResults: function() {
                        return "No results found"
                    },
                    searching: function() {
                        return "Searching…"
                    }
                }
            }), b.define("select2/defaults", ["jquery", "require", "./results", "./selection/single", "./selection/multiple", "./selection/placeholder", "./selection/allowClear", "./selection/search", "./selection/eventRelay", "./utils", "./translation", "./diacritics", "./data/select", "./data/array", "./data/ajax", "./data/tags", "./data/tokenizer", "./data/minimumInputLength", "./data/maximumInputLength", "./data/maximumSelectionLength", "./dropdown", "./dropdown/search", "./dropdown/hidePlaceholder", "./dropdown/infiniteScroll", "./dropdown/attachBody", "./dropdown/minimumResultsForSearch", "./dropdown/selectOnClose", "./dropdown/closeOnSelect", "./i18n/en"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C) {
                function D() {
                    this.reset()
                }
                return D.prototype.apply = function(l) {
                    if (l = a.extend(!0, {}, this.defaults, l), null == l.dataAdapter) {
                        if (null != l.ajax ? l.dataAdapter = o : null != l.data ? l.dataAdapter = n : l.dataAdapter = m, l.minimumInputLength > 0 && (l.dataAdapter = j.Decorate(l.dataAdapter, r)), l.maximumInputLength > 0 && (l.dataAdapter = j.Decorate(l.dataAdapter, s)), l.maximumSelectionLength > 0 && (l.dataAdapter = j.Decorate(l.dataAdapter, t)), l.tags && (l.dataAdapter = j.Decorate(l.dataAdapter, p)), null == l.tokenSeparators && null == l.tokenizer || (l.dataAdapter = j.Decorate(l.dataAdapter, q)), null != l.query) {
                            var C = b(l.amdBase + "compat/query");
                            l.dataAdapter = j.Decorate(l.dataAdapter, C)
                        }
                        if (null != l.initSelection) {
                            var D = b(l.amdBase + "compat/initSelection");
                            l.dataAdapter = j.Decorate(l.dataAdapter, D)
                        }
                    }
                    if (null == l.resultsAdapter && (l.resultsAdapter = c, null != l.ajax && (l.resultsAdapter = j.Decorate(l.resultsAdapter, x)), null != l.placeholder && (l.resultsAdapter = j.Decorate(l.resultsAdapter, w)), l.selectOnClose && (l.resultsAdapter = j.Decorate(l.resultsAdapter, A))), null == l.dropdownAdapter) {
                        if (l.multiple) l.dropdownAdapter = u;
                        else {
                            var E = j.Decorate(u, v);
                            l.dropdownAdapter = E
                        }
                        if (0 !== l.minimumResultsForSearch && (l.dropdownAdapter = j.Decorate(l.dropdownAdapter, z)), l.closeOnSelect && (l.dropdownAdapter = j.Decorate(l.dropdownAdapter, B)), null != l.dropdownCssClass || null != l.dropdownCss || null != l.adaptDropdownCssClass) {
                            var F = b(l.amdBase + "compat/dropdownCss");
                            l.dropdownAdapter = j.Decorate(l.dropdownAdapter, F)
                        }
                        l.dropdownAdapter = j.Decorate(l.dropdownAdapter, y)
                    }
                    if (null == l.selectionAdapter) {
                        if (l.multiple ? l.selectionAdapter = e : l.selectionAdapter = d, null != l.placeholder && (l.selectionAdapter = j.Decorate(l.selectionAdapter, f)), l.allowClear && (l.selectionAdapter = j.Decorate(l.selectionAdapter, g)), l.multiple && (l.selectionAdapter = j.Decorate(l.selectionAdapter, h)), null != l.containerCssClass || null != l.containerCss || null != l.adaptContainerCssClass) {
                            var G = b(l.amdBase + "compat/containerCss");
                            l.selectionAdapter = j.Decorate(l.selectionAdapter, G)
                        }
                        l.selectionAdapter = j.Decorate(l.selectionAdapter, i)
                    }
                    if ("string" == typeof l.language)
                        if (l.language.indexOf("-") > 0) {
                            var H = l.language.split("-"),
                                I = H[0];
                            l.language = [l.language, I]
                        } else l.language = [l.language];
                    if (a.isArray(l.language)) {
                        var J = new k;
                        l.language.push("en");
                        for (var K = l.language, L = 0; L < K.length; L++) {
                            var M = K[L],
                                N = {};
                            try {
                                N = k.loadPath(M)
                            } catch (a) {
                                try {
                                    M = this.defaults.amdLanguageBase + M, N = k.loadPath(M)
                                } catch (a) {
                                    l.debug && window.console && console.warn && console.warn('Select2: The language file for "' + M + '" could not be automatically loaded. A fallback will be used instead.');
                                    continue
                                }
                            }
                            J.extend(N)
                        }
                        l.translations = J
                    } else {
                        var O = k.loadPath(this.defaults.amdLanguageBase + "en"),
                            P = new k(l.language);
                        P.extend(O), l.translations = P
                    }
                    return l
                }, D.prototype.reset = function() {
                    function b(a) {
                        function b(a) {
                            return l[a] || a
                        }
                        return a.replace(/[^\u0000-\u007E]/g, b)
                    }

                    function c(d, e) {
                        if ("" === a.trim(d.term)) return e;
                        if (e.children && e.children.length > 0) {
                            for (var f = a.extend(!0, {}, e), g = e.children.length - 1; g >= 0; g--) {
                                null == c(d, e.children[g]) && f.children.splice(g, 1)
                            }
                            return f.children.length > 0 ? f : c(d, f)
                        }
                        var h = b(e.text).toUpperCase(),
                            i = b(d.term).toUpperCase();
                        return h.indexOf(i) > -1 ? e : null
                    }
                    this.defaults = {
                        amdBase: "./",
                        amdLanguageBase: "./i18n/",
                        closeOnSelect: !0,
                        debug: !1,
                        dropdownAutoWidth: !1,
                        escapeMarkup: j.escapeMarkup,
                        language: C,
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
                }, D.prototype.set = function(b, c) {
                    var d = a.camelCase(b),
                        e = {};
                    e[d] = c;
                    var f = j._convertData(e);
                    a.extend(this.defaults, f)
                }, new D
            }), b.define("select2/options", ["require", "jquery", "./defaults", "./utils"], function(a, b, c, d) {
                function e(b, e) {
                    if (this.options = b, null != e && this.fromElement(e), this.options = c.apply(this.options), e && e.is("input")) {
                        var f = a(this.get("amdBase") + "compat/inputData");
                        this.options.dataAdapter = d.Decorate(this.options.dataAdapter, f)
                    }
                }
                return e.prototype.fromElement = function(a) {
                    var c = ["select2"];
                    null == this.options.multiple && (this.options.multiple = a.prop("multiple")), null == this.options.disabled && (this.options.disabled = a.prop("disabled")), null == this.options.language && (a.prop("lang") ? this.options.language = a.prop("lang").toLowerCase() : a.closest("[lang]").prop("lang") && (this.options.language = a.closest("[lang]").prop("lang"))), null == this.options.dir && (a.prop("dir") ? this.options.dir = a.prop("dir") : a.closest("[dir]").prop("dir") ? this.options.dir = a.closest("[dir]").prop("dir") : this.options.dir = "ltr"), a.prop("disabled", this.options.disabled), a.prop("multiple", this.options.multiple), a.data("select2Tags") && (this.options.debug && window.console && console.warn && console.warn('Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'), a.data("data", a.data("select2Tags")), a.data("tags", !0)), a.data("ajaxUrl") && (this.options.debug && window.console && console.warn && console.warn("Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."), a.attr("ajax--url", a.data("ajaxUrl")), a.data("ajax--url", a.data("ajaxUrl")));
                    var e = {};
                    e = b.fn.jquery && "1." == b.fn.jquery.substr(0, 2) && a[0].dataset ? b.extend(!0, {}, a[0].dataset, a.data()) : a.data();
                    var f = b.extend(!0, {}, e);
                    f = d._convertData(f);
                    for (var g in f) b.inArray(g, c) > -1 || (b.isPlainObject(this.options[g]) ? b.extend(this.options[g], f[g]) : this.options[g] = f[g]);
                    return this
                }, e.prototype.get = function(a) {
                    return this.options[a]
                }, e.prototype.set = function(a, b) {
                    this.options[a] = b
                }, e
            }), b.define("select2/core", ["jquery", "./options", "./utils", "./keys"], function(a, b, c, d) {
                var e = function(a, c) {
                    null != a.data("select2") && a.data("select2").destroy(), this.$element = a, this.id = this._generateId(a), c = c || {}, this.options = new b(c, a), e.__super__.constructor.call(this);
                    var d = a.attr("tabindex") || 0;
                    a.data("old-tabindex", d), a.attr("tabindex", "-1");
                    var f = this.options.get("dataAdapter");
                    this.dataAdapter = new f(a, this.options);
                    var g = this.render();
                    this._placeContainer(g);
                    var h = this.options.get("selectionAdapter");
                    this.selection = new h(a, this.options), this.$selection = this.selection.render(), this.selection.position(this.$selection, g);
                    var i = this.options.get("dropdownAdapter");
                    this.dropdown = new i(a, this.options), this.$dropdown = this.dropdown.render(), this.dropdown.position(this.$dropdown, g);
                    var j = this.options.get("resultsAdapter");
                    this.results = new j(a, this.options, this.dataAdapter), this.$results = this.results.render(), this.results.position(this.$results, this.$dropdown);
                    var k = this;
                    this._bindAdapters(), this._registerDomEvents(), this._registerDataEvents(), this._registerSelectionEvents(), this._registerDropdownEvents(), this._registerResultsEvents(), this._registerEvents(), this.dataAdapter.current(function(a) {
                        k.trigger("selection:update", {
                            data: a
                        })
                    }), a.addClass("select2-hidden-accessible"), a.attr("aria-hidden", "true"), this._syncAttributes(), a.data("select2", this)
                };
                return c.Extend(e, c.Observable), e.prototype._generateId = function(a) {
                    var b = "";
                    return b = null != a.attr("id") ? a.attr("id") : null != a.attr("name") ? a.attr("name") + "-" + c.generateChars(2) : c.generateChars(4), b = b.replace(/(:|\.|\[|\]|,)/g, ""), b = "select2-" + b
                }, e.prototype._placeContainer = function(a) {
                    a.insertAfter(this.$element);
                    var b = this._resolveWidth(this.$element, this.options.get("width"));
                    null != b && a.css("width", b)
                }, e.prototype._resolveWidth = function(a, b) {
                    var c = /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;
                    if ("resolve" == b) {
                        var d = this._resolveWidth(a, "style");
                        return null != d ? d : this._resolveWidth(a, "element")
                    }
                    if ("element" == b) {
                        var e = a.outerWidth(!1);
                        return e <= 0 ? "auto" : e + "px"
                    }
                    if ("style" == b) {
                        var f = a.attr("style");
                        if ("string" != typeof f) return null;
                        for (var g = f.split(";"), h = 0, i = g.length; h < i; h += 1) {
                            var j = g[h].replace(/\s/g, ""),
                                k = j.match(c);
                            if (null !== k && k.length >= 1) return k[1]
                        }
                        return null
                    }
                    return b
                }, e.prototype._bindAdapters = function() {
                    this.dataAdapter.bind(this, this.$container), this.selection.bind(this, this.$container), this.dropdown.bind(this, this.$container), this.results.bind(this, this.$container)
                }, e.prototype._registerDomEvents = function() {
                    var b = this;
                    this.$element.on("change.select2", function() {
                        b.dataAdapter.current(function(a) {
                            b.trigger("selection:update", {
                                data: a
                            })
                        })
                    }), this.$element.on("focus.select2", function(a) {
                        b.trigger("focus", a)
                    }), this._syncA = c.bind(this._syncAttributes, this), this._syncS = c.bind(this._syncSubtree, this), this.$element[0].attachEvent && this.$element[0].attachEvent("onpropertychange", this._syncA);
                    var d = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
                    null != d ? (this._observer = new d(function(c) {
                        a.each(c, b._syncA), a.each(c, b._syncS)
                    }), this._observer.observe(this.$element[0], {
                        attributes: !0,
                        childList: !0,
                        subtree: !1
                    })) : this.$element[0].addEventListener && (this.$element[0].addEventListener("DOMAttrModified", b._syncA, !1), this.$element[0].addEventListener("DOMNodeInserted", b._syncS, !1), this.$element[0].addEventListener("DOMNodeRemoved", b._syncS, !1))
                }, e.prototype._registerDataEvents = function() {
                    var a = this;
                    this.dataAdapter.on("*", function(b, c) {
                        a.trigger(b, c)
                    })
                }, e.prototype._registerSelectionEvents = function() {
                    var b = this,
                        c = ["toggle", "focus"];
                    this.selection.on("toggle", function() {
                        b.toggleDropdown()
                    }), this.selection.on("focus", function(a) {
                        b.focus(a)
                    }), this.selection.on("*", function(d, e) {
                        -1 === a.inArray(d, c) && b.trigger(d, e)
                    })
                }, e.prototype._registerDropdownEvents = function() {
                    var a = this;
                    this.dropdown.on("*", function(b, c) {
                        a.trigger(b, c)
                    })
                }, e.prototype._registerResultsEvents = function() {
                    var a = this;
                    this.results.on("*", function(b, c) {
                        a.trigger(b, c)
                    })
                }, e.prototype._registerEvents = function() {
                    var a = this;
                    this.on("open", function() {
                        a.$container.addClass("select2-container--open")
                    }), this.on("close", function() {
                        a.$container.removeClass("select2-container--open")
                    }), this.on("enable", function() {
                        a.$container.removeClass("select2-container--disabled")
                    }), this.on("disable", function() {
                        a.$container.addClass("select2-container--disabled")
                    }), this.on("blur", function() {
                        a.$container.removeClass("select2-container--focus")
                    }), this.on("query", function(b) {
                        a.isOpen() || a.trigger("open", {}), this.dataAdapter.query(b, function(c) {
                            a.trigger("results:all", {
                                data: c,
                                query: b
                            })
                        })
                    }), this.on("query:append", function(b) {
                        this.dataAdapter.query(b, function(c) {
                            a.trigger("results:append", {
                                data: c,
                                query: b
                            })
                        })
                    }), this.on("keypress", function(b) {
                        var c = b.which;
                        a.isOpen() ? c === d.ESC || c === d.TAB || c === d.UP && b.altKey ? (a.close(), b.preventDefault()) : c === d.ENTER ? (a.trigger("results:select", {}), b.preventDefault()) : c === d.SPACE && b.ctrlKey ? (a.trigger("results:toggle", {}), b.preventDefault()) : c === d.UP ? (a.trigger("results:previous", {}), b.preventDefault()) : c === d.DOWN && (a.trigger("results:next", {}), b.preventDefault()) : (c === d.ENTER || c === d.SPACE || c === d.DOWN && b.altKey) && (a.open(), b.preventDefault())
                    })
                }, e.prototype._syncAttributes = function() {
                    this.options.set("disabled", this.$element.prop("disabled")), this.options.get("disabled") ? (this.isOpen() && this.close(), this.trigger("disable", {})) : this.trigger("enable", {})
                }, e.prototype._syncSubtree = function(a, b) {
                    var c = !1,
                        d = this;
                    if (!a || !a.target || "OPTION" === a.target.nodeName || "OPTGROUP" === a.target.nodeName) {
                        if (b)
                            if (b.addedNodes && b.addedNodes.length > 0)
                                for (var e = 0; e < b.addedNodes.length; e++) {
                                    var f = b.addedNodes[e];
                                    f.selected && (c = !0)
                                } else b.removedNodes && b.removedNodes.length > 0 && (c = !0);
                        else c = !0;
                        c && this.dataAdapter.current(function(a) {
                            d.trigger("selection:update", {
                                data: a
                            })
                        })
                    }
                }, e.prototype.trigger = function(a, b) {
                    var c = e.__super__.trigger,
                        d = {
                            open: "opening",
                            close: "closing",
                            select: "selecting",
                            unselect: "unselecting"
                        };
                    if (void 0 === b && (b = {}), a in d) {
                        var f = d[a],
                            g = {
                                prevented: !1,
                                name: a,
                                args: b
                            };
                        if (c.call(this, f, g), g.prevented) return void(b.prevented = !0)
                    }
                    c.call(this, a, b)
                }, e.prototype.toggleDropdown = function() {
                    this.options.get("disabled") || (this.isOpen() ? this.close() : this.open())
                }, e.prototype.open = function() {
                    this.isOpen() || this.trigger("query", {})
                }, e.prototype.close = function() {
                    this.isOpen() && this.trigger("close", {})
                }, e.prototype.isOpen = function() {
                    return this.$container.hasClass("select2-container--open")
                }, e.prototype.hasFocus = function() {
                    return this.$container.hasClass("select2-container--focus")
                }, e.prototype.focus = function(a) {
                    this.hasFocus() || (this.$container.addClass("select2-container--focus"), this.trigger("focus", {}))
                }, e.prototype.enable = function(a) {
                    this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'), null != a && 0 !== a.length || (a = [!0]);
                    var b = !a[0];
                    this.$element.prop("disabled", b)
                }, e.prototype.data = function() {
                    this.options.get("debug") && arguments.length > 0 && window.console && console.warn && console.warn('Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.');
                    var a = [];
                    return this.dataAdapter.current(function(b) {
                        a = b
                    }), a
                }, e.prototype.val = function(b) {
                    if (this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'), null == b || 0 === b.length) return this.$element.val();
                    var c = b[0];
                    a.isArray(c) && (c = a.map(c, function(a) {
                        return a.toString()
                    })), this.$element.val(c).trigger("change")
                }, e.prototype.destroy = function() {
                    this.$container.remove(), this.$element[0].detachEvent && this.$element[0].detachEvent("onpropertychange", this._syncA), null != this._observer ? (this._observer.disconnect(), this._observer = null) : this.$element[0].removeEventListener && (this.$element[0].removeEventListener("DOMAttrModified", this._syncA, !1), this.$element[0].removeEventListener("DOMNodeInserted", this._syncS, !1), this.$element[0].removeEventListener("DOMNodeRemoved", this._syncS, !1)), this._syncA = null, this._syncS = null, this.$element.off(".select2"), this.$element.attr("tabindex", this.$element.data("old-tabindex")), this.$element.removeClass("select2-hidden-accessible"), this.$element.attr("aria-hidden", "false"), this.$element.removeData("select2"), this.dataAdapter.destroy(), this.selection.destroy(), this.dropdown.destroy(), this.results.destroy(), this.dataAdapter = null, this.selection = null, this.dropdown = null, this.results = null
                }, e.prototype.render = function() {
                    var b = a('<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>');
                    return b.attr("dir", this.options.get("dir")), this.$container = b, this.$container.addClass("select2-container--" + this.options.get("theme")), b.data("element", this.$element), b
                }, e
            }), b.define("select2/compat/utils", ["jquery"], function(a) {
                function b(b, c, d) {
                    var e, f, g = [];
                    e = a.trim(b.attr("class")), e && (e = "" + e, a(e.split(/\s+/)).each(function() {
                        0 === this.indexOf("select2-") && g.push(this)
                    })), e = a.trim(c.attr("class")), e && (e = "" + e, a(e.split(/\s+/)).each(function() {
                        0 !== this.indexOf("select2-") && null != (f = d(this)) && g.push(f)
                    })), b.attr("class", g.join(" "))
                }
                return {
                    syncCssClasses: b
                }
            }), b.define("select2/compat/containerCss", ["jquery", "./utils"], function(a, b) {
                function c(a) {
                    return null
                }

                function d() {}
                return d.prototype.render = function(d) {
                    var e = d.call(this),
                        f = this.options.get("containerCssClass") || "";
                    a.isFunction(f) && (f = f(this.$element));
                    var g = this.options.get("adaptContainerCssClass");
                    if (g = g || c, -1 !== f.indexOf(":all:")) {
                        f = f.replace(":all:", "");
                        var h = g;
                        g = function(a) {
                            var b = h(a);
                            return null != b ? b + " " + a : a
                        }
                    }
                    var i = this.options.get("containerCss") || {};
                    return a.isFunction(i) && (i = i(this.$element)), b.syncCssClasses(e, this.$element, g), e.css(i), e.addClass(f), e
                }, d
            }), b.define("select2/compat/dropdownCss", ["jquery", "./utils"], function(a, b) {
                function c(a) {
                    return null
                }

                function d() {}
                return d.prototype.render = function(d) {
                    var e = d.call(this),
                        f = this.options.get("dropdownCssClass") || "";
                    a.isFunction(f) && (f = f(this.$element));
                    var g = this.options.get("adaptDropdownCssClass");
                    if (g = g || c, -1 !== f.indexOf(":all:")) {
                        f = f.replace(":all:", "");
                        var h = g;
                        g = function(a) {
                            var b = h(a);
                            return null != b ? b + " " + a : a
                        }
                    }
                    var i = this.options.get("dropdownCss") || {};
                    return a.isFunction(i) && (i = i(this.$element)), b.syncCssClasses(e, this.$element, g), e.css(i), e.addClass(f), e
                }, d
            }), b.define("select2/compat/initSelection", ["jquery"], function(a) {
                function b(a, b, c) {
                    c.get("debug") && window.console && console.warn && console.warn("Select2: The `initSelection` option has been deprecated in favor of a custom data adapter that overrides the `current` method. This method is now called multiple times instead of a single time when the instance is initialized. Support will be removed for the `initSelection` option in future versions of Select2"), this.initSelection = c.get("initSelection"), this._isInitialized = !1, a.call(this, b, c)
                }
                return b.prototype.current = function(b, c) {
                    var d = this;
                    if (this._isInitialized) return void b.call(this, c);
                    this.initSelection.call(null, this.$element, function(b) {
                        d._isInitialized = !0, a.isArray(b) || (b = [b]), c(b)
                    })
                }, b
            }), b.define("select2/compat/inputData", ["jquery"], function(a) {
                function b(a, b, c) {
                    this._currentData = [], this._valueSeparator = c.get("valueSeparator") || ",", "hidden" === b.prop("type") && c.get("debug") && console && console.warn && console.warn("Select2: Using a hidden input with Select2 is no longer supported and may stop working in the future. It is recommended to use a `<select>` element instead."), a.call(this, b, c)
                }
                return b.prototype.current = function(b, c) {
                    function d(b, c) {
                        var e = [];
                        return b.selected || -1 !== a.inArray(b.id, c) ? (b.selected = !0, e.push(b)) : b.selected = !1, b.children && e.push.apply(e, d(b.children, c)), e
                    }
                    for (var e = [], f = 0; f < this._currentData.length; f++) {
                        var g = this._currentData[f];
                        e.push.apply(e, d(g, this.$element.val().split(this._valueSeparator)))
                    }
                    c(e)
                }, b.prototype.select = function(b, c) {
                    if (this.options.get("multiple")) {
                        var d = this.$element.val();
                        d += this._valueSeparator + c.id, this.$element.val(d), this.$element.trigger("change")
                    } else this.current(function(b) {
                        a.map(b, function(a) {
                            a.selected = !1
                        })
                    }), this.$element.val(c.id), this.$element.trigger("change")
                }, b.prototype.unselect = function(a, b) {
                    var c = this;
                    b.selected = !1, this.current(function(a) {
                        for (var d = [], e = 0; e < a.length; e++) {
                            var f = a[e];
                            b.id != f.id && d.push(f.id)
                        }
                        c.$element.val(d.join(c._valueSeparator)), c.$element.trigger("change")
                    })
                }, b.prototype.query = function(a, b, c) {
                    for (var d = [], e = 0; e < this._currentData.length; e++) {
                        var f = this._currentData[e],
                            g = this.matches(b, f);
                        null !== g && d.push(g)
                    }
                    c({
                        results: d
                    })
                }, b.prototype.addOptions = function(b, c) {
                    var d = a.map(c, function(b) {
                        return a.data(b[0], "data")
                    });
                    this._currentData.push.apply(this._currentData, d)
                }, b
            }), b.define("select2/compat/matcher", ["jquery"], function(a) {
                function b(b) {
                    function c(c, d) {
                        var e = a.extend(!0, {}, d);
                        if (null == c.term || "" === a.trim(c.term)) return e;
                        if (d.children) {
                            for (var f = d.children.length - 1; f >= 0; f--) {
                                var g = d.children[f];
                                b(c.term, g.text, g) || e.children.splice(f, 1)
                            }
                            if (e.children.length > 0) return e
                        }
                        return b(c.term, d.text, d) ? e : null
                    }
                    return c
                }
                return b
            }), b.define("select2/compat/query", [], function() {
                function a(a, b, c) {
                    c.get("debug") && window.console && console.warn && console.warn("Select2: The `query` option has been deprecated in favor of a custom data adapter that overrides the `query` method. Support will be removed for the `query` option in future versions of Select2."), a.call(this, b, c)
                }
                return a.prototype.query = function(a, b, c) {
                    b.callback = c, this.options.get("query").call(null, b)
                }, a
            }), b.define("select2/dropdown/attachContainer", [], function() {
                function a(a, b, c) {
                    a.call(this, b, c)
                }
                return a.prototype.position = function(a, b, c) {
                    c.find(".dropdown-wrapper").append(b), b.addClass("select2-dropdown--below"), c.addClass("select2-container--below")
                }, a
            }), b.define("select2/dropdown/stopPropagation", [], function() {
                function a() {}
                return a.prototype.bind = function(a, b, c) {
                    a.call(this, b, c);
                    var d = ["blur", "change", "click", "dblclick", "focus", "focusin", "focusout", "input", "keydown", "keyup", "keypress", "mousedown", "mouseenter", "mouseleave", "mousemove", "mouseover", "mouseup", "search", "touchend", "touchstart"];
                    this.$dropdown.on(d.join(" "), function(a) {
                        a.stopPropagation()
                    })
                }, a
            }), b.define("select2/selection/stopPropagation", [], function() {
                function a() {}
                return a.prototype.bind = function(a, b, c) {
                    a.call(this, b, c);
                    var d = ["blur", "change", "click", "dblclick", "focus", "focusin", "focusout", "input", "keydown", "keyup", "keypress", "mousedown", "mouseenter", "mouseleave", "mousemove", "mouseover", "mouseup", "search", "touchend", "touchstart"];
                    this.$selection.on(d.join(" "), function(a) {
                        a.stopPropagation()
                    })
                }, a
            }),
                function(c) {
                    "function" == typeof b.define && b.define.amd ? b.define("jquery-mousewheel", ["jquery"], c) : "object" == typeof exports ? module.exports = c : c(a)
                }(function(a) {
                    function b(b) {
                        var g = b || window.event,
                            h = i.call(arguments, 1),
                            j = 0,
                            l = 0,
                            m = 0,
                            n = 0,
                            o = 0,
                            p = 0;
                        if (b = a.event.fix(g), b.type = "mousewheel", "detail" in g && (m = -1 * g.detail), "wheelDelta" in g && (m = g.wheelDelta), "wheelDeltaY" in g && (m = g.wheelDeltaY), "wheelDeltaX" in g && (l = -1 * g.wheelDeltaX), "axis" in g && g.axis === g.HORIZONTAL_AXIS && (l = -1 * m, m = 0), j = 0 === m ? l : m, "deltaY" in g && (m = -1 * g.deltaY, j = m), "deltaX" in g && (l = g.deltaX, 0 === m && (j = -1 * l)), 0 !== m || 0 !== l) {
                            if (1 === g.deltaMode) {
                                var q = a.data(this, "mousewheel-line-height");
                                j *= q, m *= q, l *= q
                            } else if (2 === g.deltaMode) {
                                var r = a.data(this, "mousewheel-page-height");
                                j *= r, m *= r, l *= r
                            }
                            if (n = Math.max(Math.abs(m), Math.abs(l)), (!f || n < f) && (f = n, d(g, n) && (f /= 40)), d(g, n) && (j /= 40, l /= 40, m /= 40), j = Math[j >= 1 ? "floor" : "ceil"](j / f), l = Math[l >= 1 ? "floor" : "ceil"](l / f), m = Math[m >= 1 ? "floor" : "ceil"](m / f), k.settings.normalizeOffset && this.getBoundingClientRect) {
                                var s = this.getBoundingClientRect();
                                o = b.clientX - s.left, p = b.clientY - s.top
                            }
                            return b.deltaX = l, b.deltaY = m, b.deltaFactor = f, b.offsetX = o, b.offsetY = p, b.deltaMode = 0, h.unshift(b, j, l, m), e && clearTimeout(e), e = setTimeout(c, 200), (a.event.dispatch || a.event.handle).apply(this, h)
                        }
                    }

                    function c() {
                        f = null
                    }

                    function d(a, b) {
                        return k.settings.adjustOldDeltas && "mousewheel" === a.type && b % 120 == 0
                    }
                    var e, f, g = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
                        h = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
                        i = Array.prototype.slice;
                    if (a.event.fixHooks)
                        for (var j = g.length; j;) a.event.fixHooks[g[--j]] = a.event.mouseHooks;
                    var k = a.event.special.mousewheel = {
                        version: "3.1.12",
                        setup: function() {
                            if (this.addEventListener)
                                for (var c = h.length; c;) this.addEventListener(h[--c], b, !1);
                            else this.onmousewheel = b;
                            a.data(this, "mousewheel-line-height", k.getLineHeight(this)), a.data(this, "mousewheel-page-height", k.getPageHeight(this))
                        },
                        teardown: function() {
                            if (this.removeEventListener)
                                for (var c = h.length; c;) this.removeEventListener(h[--c], b, !1);
                            else this.onmousewheel = null;
                            a.removeData(this, "mousewheel-line-height"), a.removeData(this, "mousewheel-page-height")
                        },
                        getLineHeight: function(b) {
                            var c = a(b),
                                d = c["offsetParent" in a.fn ? "offsetParent" : "parent"]();
                            return d.length || (d = a("body")), parseInt(d.css("fontSize"), 10) || parseInt(c.css("fontSize"), 10) || 16
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
                }), b.define("jquery.select2", ["jquery", "jquery-mousewheel", "./select2/core", "./select2/defaults"], function(a, b, c, d) {
                if (null == a.fn.select2) {
                    var e = ["open", "close", "destroy"];
                    a.fn.select2 = function(b) {
                        if ("object" == typeof(b = b || {})) return this.each(function() {
                            var d = a.extend(!0, {}, b);
                            new c(a(this), d)
                        }), this;
                        if ("string" == typeof b) {
                            var d, f = Array.prototype.slice.call(arguments, 1);
                            return this.each(function() {
                                var c = a(this).data("select2");
                                null == c && window.console && console.error && console.error("The select2('" + b + "') method was called on an element that is not using Select2."), d = c[b].apply(c, f)
                            }), a.inArray(b, e) > -1 ? this : d
                        }
                        throw new Error("Invalid arguments for Select2: " + b)
                    }
                }
                return null == a.fn.select2.defaults && (a.fn.select2.defaults = d), c
            }), {
                define: b.define,
                require: b.require
            }
        }(),
        c = b.require("jquery.select2");
    return a.fn.select2.amd = b, c
});
/*!
 * jQuery Steps v1.1.0 - 09/04/2014
 * Copyright (c) 2014 Rafael Staib (http://www.jquery-steps.com)
 * Licensed under MIT http://www.opensource.org/licenses/MIT
 */
! function(a, b) {
    function c(a, b) {
        o(a).push(b)
    }

    function d(d, e, f) {
        var g = d.children(e.headerTag),
            h = d.children(e.bodyTag);
        g.length > h.length ? R(Z, "contents") : g.length < h.length && R(Z, "titles");
        var i = e.startIndex;
        if (f.stepCount = g.length, e.saveState && a.cookie) {
            var j = a.cookie(U + q(d)),
                k = parseInt(j, 0);
            !isNaN(k) && k < f.stepCount && (i = k)
        }
        f.currentIndex = i, g.each(function(e) {
            var f = a(this),
                g = h.eq(e),
                i = g.data("mode"),
                j = null == i ? $.html : r($, /^\s*$/.test(i) || isNaN(i) ? i : parseInt(i, 0)),
                k = j === $.html || g.data("url") === b ? "" : g.data("url"),
                l = j !== $.html && "1" === g.data("loaded"),
                m = a.extend({}, bb, {
                    title: f.html(),
                    content: j === $.html ? g.html() : "",
                    contentUrl: k,
                    contentMode: j,
                    contentLoaded: l
                });
            c(d, m)
        })
    }

    function e(a) {
        a.triggerHandler("canceled")
    }

    function f(a, b) {
        return a.currentIndex - b
    }

    function g(b, c) {
        var d = i(b);
        b.unbind(d).removeData("uid").removeData("options").removeData("state").removeData("steps").removeData("eventNamespace").find(".actions a").unbind(d), b.removeClass(c.clearFixCssClass + " vertical");
        var e = b.find(".content > *");
        e.removeData("loaded").removeData("mode").removeData("url"), e.removeAttr("id").removeAttr("role").removeAttr("tabindex").removeAttr("class").removeAttr("style")._removeAria("labelledby")._removeAria("hidden"), b.find(".content > [data-mode='async'],.content > [data-mode='iframe']").empty();
        var f = a('<{0} class="{1}"></{0}>'.format(b.get(0).tagName, b.attr("class"))),
            g = b._id();
        return null != g && "" !== g && f._id(g), f.html(b.find(".content").html()), b.after(f), b.remove(), f
    }

    function h(a, b) {
        var c = a.find(".steps li").eq(b.currentIndex);
        a.triggerHandler("finishing", [b.currentIndex]) ? (c.addClass("done").removeClass("error"), a.triggerHandler("finished", [b.currentIndex])) : c.addClass("error")
    }

    function i(a) {
        var b = a.data("eventNamespace");
        return null == b && (b = "." + q(a), a.data("eventNamespace", b)), b
    }

    function j(a, b) {
        var c = q(a);
        return a.find("#" + c + V + b)
    }

    function k(a, b) {
        var c = q(a);
        return a.find("#" + c + W + b)
    }

    function l(a, b) {
        var c = q(a);
        return a.find("#" + c + X + b)
    }

    function m(a) {
        return a.data("options")
    }

    function n(a) {
        return a.data("state")
    }

    function o(a) {
        return a.data("steps")
    }

    function p(a, b) {
        var c = o(a);
        return (0 > b || b >= c.length) && R(Y), c[b]
    }

    function q(a) {
        var b = a.data("uid");
        return null == b && (b = a._id(), null == b && (b = "steps-uid-".concat(T), a._id(b)), T++, a.data("uid", b)), b
    }

    function r(a, c) {
        if (S("enumType", a), S("keyOrValue", c), "string" == typeof c) {
            var d = a[c];
            return d === b && R("The enum key '{0}' does not exist.", c), d
        }
        if ("number" == typeof c) {
            for (var e in a)
                if (a[e] === c) return c;
            R("Invalid enum value '{0}'.", c)
        } else R("Invalid key or value type.")
    }

    function s(a, b, c) {
        return B(a, b, c, v(c, 1))
    }

    function t(a, b, c) {
        return B(a, b, c, f(c, 1))
    }

    function u(a, b, c, d) {
        if ((0 > d || d >= c.stepCount) && R(Y), !(b.forceMoveForward && d < c.currentIndex)) {
            var e = c.currentIndex;
            return a.triggerHandler("stepChanging", [c.currentIndex, d]) ? (c.currentIndex = d, O(a, b, c), E(a, b, c, e), D(a, b, c), A(a, b, c), P(a, b, c, d, e, function() {
                a.triggerHandler("stepChanged", [d, e])
            })) : a.find(".steps li").eq(e).addClass("error"), !0
        }
    }

    function v(a, b) {
        return a.currentIndex + b
    }

    function w(b) {
        var c = a.extend(!0, {}, cb, b);
        return this.each(function() {
            var b = a(this),
                e = {
                    currentIndex: c.startIndex,
                    currentStep: null,
                    stepCount: 0,
                    transitionElement: null
                };
            b.data("options", c), b.data("state", e), b.data("steps", []), d(b, c, e), J(b, c, e), G(b, c), c.autoFocus && 0 === T && j(b, c.startIndex).focus(), b.triggerHandler("init", [c.startIndex])
        })
    }

    function x(b, c, d, e, f) {
        (0 > e || e > d.stepCount) && R(Y), f = a.extend({}, bb, f), y(b, e, f), d.currentIndex !== d.stepCount && d.currentIndex >= e && (d.currentIndex++, O(b, c, d)), d.stepCount++;
        var g = b.find(".content"),
            h = a("<{0}>{1}</{0}>".format(c.headerTag, f.title)),
            i = a("<{0}></{0}>".format(c.bodyTag));
        return (null == f.contentMode || f.contentMode === $.html) && i.html(f.content), 0 === e ? g.prepend(i).prepend(h) : k(b, e - 1).after(i).after(h), K(b, d, i, e), N(b, c, d, h, e), F(b, c, d, e), e === d.currentIndex && E(b, c, d), D(b, c, d), b
    }

    function y(a, b, c) {
        o(a).splice(b, 0, c)
    }

    function z(b) {
        var c = a(this),
            d = m(c),
            e = n(c);
        if (d.suppressPaginationOnFocus && c.find(":focus").is(":input")) return b.preventDefault(), !1;
        var f = {
            left: 37,
            right: 39
        };
        b.keyCode === f.left ? (b.preventDefault(), t(c, d, e)) : b.keyCode === f.right && (b.preventDefault(), s(c, d, e))
    }

    function A(b, c, d) {
        if (d.stepCount > 0) {
            var e = d.currentIndex,
                f = p(b, e);
            if (!c.enableContentCache || !f.contentLoaded) switch (r($, f.contentMode)) {
                case $.iframe:
                    b.find(".content > .body").eq(d.currentIndex).empty().html('<iframe src="' + f.contentUrl + '" frameborder="0" scrolling="no" />').data("loaded", "1");
                    break;
                case $.async:
                    var g = k(b, e)._aria("busy", "true").empty().append(M(c.loadingTemplate, {
                        text: c.labels.loading
                    }));
                    a.ajax({
                        url: f.contentUrl,
                        cache: !1
                    }).done(function(a) {
                        g.empty().html(a)._aria("busy", "false").data("loaded", "1"), b.triggerHandler("contentLoaded", [e])
                    })
            }
        }
    }

    function B(a, b, c, d) {
        var e = c.currentIndex;
        if (d >= 0 && d < c.stepCount && !(b.forceMoveForward && d < c.currentIndex)) {
            var f = j(a, d),
                g = f.parent(),
                h = g.hasClass("disabled");
            return g._enableAria(), f.click(), e === c.currentIndex && h ? (g._enableAria(!1), !1) : !0
        }
        return !1
    }

    function C(b) {
        b.preventDefault();
        var c = a(this),
            d = c.parent().parent().parent().parent(),
            f = m(d),
            g = n(d),
            i = c.attr("href");
        switch (i.substring(i.lastIndexOf("#") + 1)) {
            case "cancel":
                e(d);
                break;
            case "finish":
                h(d, g);
                break;
            case "next":
                s(d, f, g);
                break;
            case "previous":
                t(d, f, g)
        }
    }

    function D(a, b, c) {
        if (b.enablePagination) {
            var d = a.find(".actions [href$='#finish']").parent(),
                e = a.find(".actions a[href$='#next']").parent();
            if (!b.forceMoveForward) {
                var f = a.find(".actions a[href$='#previous']").parent();
                f._enableAria(c.currentIndex > 0)
            }
            b.enableFinishButton && b.showFinishButtonAlways ? (d._enableAria(c.stepCount > 0), e._enableAria(c.stepCount > 1 && c.stepCount > c.currentIndex + 1)) : (d._showAria(b.enableFinishButton && c.stepCount === c.currentIndex + 1), e._showAria(0 === c.stepCount || c.stepCount > c.currentIndex + 1)._enableAria(c.stepCount > c.currentIndex + 1 || !b.enableFinishButton))
        }
    }

    function E(b, c, d, e) {
        var f = j(b, d.currentIndex),
            g = a('<span class="current-info audible">' + c.labels.current + " </span>"),
            h = b.find(".content > .title");
        if (null != e) {
            var i = j(b, e);
            i.parent().addClass("done").removeClass("error")._selectAria(!1), h.eq(e).removeClass("current").next(".body").removeClass("current"), g = i.find(".current-info"), f.focus()
        }
        f.prepend(g).parent()._selectAria().removeClass("done")._enableAria(), h.eq(d.currentIndex).addClass("current").next(".body").addClass("current")
    }

    function F(a, b, c, d) {
        for (var e = q(a), f = d; f < c.stepCount; f++) {
            var g = e + V + f,
                h = e + W + f,
                i = e + X + f,
                j = a.find(".title").eq(f)._id(i);
            a.find(".steps a").eq(f)._id(g)._aria("controls", h).attr("href", "#" + i).html(M(b.titleTemplate, {
                index: f + 1,
                title: j.html()
            })), a.find(".body").eq(f)._id(h)._aria("labelledby", i)
        }
    }

    function G(a, b) {
        var c = i(a);
        a.bind("canceled" + c, b.onCanceled), a.bind("contentLoaded" + c, b.onContentLoaded), a.bind("finishing" + c, b.onFinishing), a.bind("finished" + c, b.onFinished), a.bind("init" + c, b.onInit), a.bind("stepChanging" + c, b.onStepChanging), a.bind("stepChanged" + c, b.onStepChanged), b.enableKeyNavigation && a.bind("keyup" + c, z), a.find(".actions a").bind("click" + c, C)
    }

    function H(a, b, c, d) {
        return 0 > d || d >= c.stepCount || c.currentIndex === d ? !1 : (I(a, d), c.currentIndex > d && (c.currentIndex--, O(a, b, c)), c.stepCount--, l(a, d).remove(), k(a, d).remove(), j(a, d).parent().remove(), 0 === d && a.find(".steps li").first().addClass("first"), d === c.stepCount && a.find(".steps li").eq(d).addClass("last"), F(a, b, c, d), D(a, b, c), !0)
    }

    function I(a, b) {
        o(a).splice(b, 1)
    }

    function J(b, c, d) {
        var e = '<{0} class="{1}">{2}</{0}>',
            f = r(_, c.stepsOrientation),
            g = f === _.vertical ? " vertical" : "",
            h = a(e.format(c.contentContainerTag, "content " + c.clearFixCssClass, b.html())),
            i = a(e.format(c.stepsContainerTag, "steps " + c.clearFixCssClass, '<ul role="tablist"></ul>')),
            j = h.children(c.headerTag),
            k = h.children(c.bodyTag);
        b.attr("role", "application").empty().append(i).append(h).addClass(c.cssClass + " " + c.clearFixCssClass + g), k.each(function(c) {
            K(b, d, a(this), c)
        }), j.each(function(e) {
            N(b, c, d, a(this), e)
        }), E(b, c, d), L(b, c, d)
    }

    function K(a, b, c, d) {
        var e = q(a),
            f = e + W + d,
            g = e + X + d;
        c._id(f).attr("role", "tabpanel")._aria("labelledby", g).addClass("body")._showAria(b.currentIndex === d)
    }

    function L(a, b, c) {
        if (b.enablePagination) {
            var d = '<{0} class="actions {1}"><ul role="menu" aria-label="{2}">{3}</ul></{0}>',
                e = '<li><a href="#{0}" role="menuitem">{1}</a></li>',
                f = "";
            b.forceMoveForward || (f += e.format("previous", b.labels.previous)), f += e.format("next", b.labels.next), b.enableFinishButton && (f += e.format("finish", b.labels.finish)), b.enableCancelButton && (f += e.format("cancel", b.labels.cancel)), a.append(d.format(b.actionContainerTag, b.clearFixCssClass, b.labels.pagination, f)), D(a, b, c), A(a, b, c)
        }
    }

    function M(a, c) {
        for (var d = a.match(/#([a-z]*)#/gi), e = 0; e < d.length; e++) {
            var f = d[e],
                g = f.substring(1, f.length - 1);
            c[g] === b && R("The key '{0}' does not exist in the substitute collection!", g), a = a.replace(f, c[g])
        }
        return a
    }

    function N(b, c, d, e, f) {
        var g = q(b),
            h = g + V + f,
            j = g + W + f,
            k = g + X + f,
            l = b.find(".steps > ul"),
            m = M(c.titleTemplate, {
                index: f + 1,
                title: e.html()
            }),
            n = a('<li role="tab"><a id="' + h + '" href="#' + k + '" aria-controls="' + j + '">' + m + "</a></li>");
        n._enableAria(c.enableAllSteps || d.currentIndex > f), d.currentIndex > f && n.addClass("done"), e._id(k).attr("tabindex", "-1").addClass("title"), 0 === f ? l.prepend(n) : l.find("li").eq(f - 1).after(n), 0 === f && l.find("li").removeClass("first").eq(f).addClass("first"), f === d.stepCount - 1 && l.find("li").removeClass("last").eq(f).addClass("last"), n.children("a").bind("click" + i(b), Q)
    }

    function O(b, c, d) {
        c.saveState && a.cookie && a.cookie(U + q(b), d.currentIndex)
    }

    function P(b, c, d, e, f, g) {
        var h = b.find(".content > .body"),
            i = r(ab, c.transitionEffect),
            j = c.transitionEffectSpeed,
            k = h.eq(e),
            l = h.eq(f);
        switch (i) {
            case ab.fade:
            case ab.slide:
                var m = i === ab.fade ? "fadeOut" : "slideUp",
                    o = i === ab.fade ? "fadeIn" : "slideDown";
                d.transitionElement = k, l[m](j, function() {
                    var b = a(this)._showAria(!1).parent().parent(),
                        c = n(b);
                    c.transitionElement && (c.transitionElement[o](j, function() {
                        a(this)._showAria()
                    }).promise().done(g), c.transitionElement = null)
                });
                break;
            case ab.slideLeft:
                var p = l.outerWidth(!0),
                    q = e > f ? -p : p,
                    s = e > f ? p : -p;
                a.when(l.animate({
                    left: q
                }, j, function() {
                    a(this)._showAria(!1)
                }), k.css("left", s + "px")._showAria().animate({
                    left: 0
                }, j)).done(g);
                break;
            default:
                a.when(l._showAria(!1), k._showAria()).done(g)
        }
    }

    function Q(b) {
        b.preventDefault();
        var c = a(this),
            d = c.parent().parent().parent().parent(),
            e = m(d),
            f = n(d),
            g = f.currentIndex;
        if (c.parent().is(":not(.disabled):not(.current)")) {
            var h = c.attr("href"),
                i = parseInt(h.substring(h.lastIndexOf("-") + 1), 0);
            u(d, e, f, i)
        }
        return g === f.currentIndex ? (j(d, g).focus(), !1) : void 0
    }

    function R(a) {
        throw arguments.length > 1 && (a = a.format(Array.prototype.slice.call(arguments, 1))), new Error(a)
    }

    function S(a, b) {
        null == b && R("The argument '{0}' is null or undefined.", a)
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
            return null == a || a ? this.addClass("current")._aria("selected", "true") : this.removeClass("current")._aria("selected", "false")
        },
        _id: function(a) {
            return a ? this.attr("id", a) : this.attr("id")
        }
    }), String.prototype.format || (String.prototype.format = function() {
        for (var b = 1 === arguments.length && a.isArray(arguments[0]) ? arguments[0] : arguments, c = this, d = 0; d < b.length; d++) {
            var e = new RegExp("\\{" + d + "\\}", "gm");
            c = c.replace(e, b[d])
        }
        return c
    });
    var T = 0,
        U = "jQu3ry_5teps_St@te_",
        V = "-t-",
        W = "-p-",
        X = "-h-",
        Y = "Index out of range.",
        Z = "One or more corresponding step {0} are missing.";
    a.fn.steps = function(b) {
        return a.fn.steps[b] ? a.fn.steps[b].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof b && b ? void a.error("Method " + b + " does not exist on jQuery.steps") : w.apply(this, arguments)
    }, a.fn.steps.add = function(a) {
        var b = n(this);
        return x(this, m(this), b, b.stepCount, a)
    }, a.fn.steps.destroy = function() {
        return g(this, m(this))
    }, a.fn.steps.finish = function() {
        h(this, n(this))
    }, a.fn.steps.getCurrentIndex = function() {
        return n(this).currentIndex
    }, a.fn.steps.getCurrentStep = function() {
        return p(this, n(this).currentIndex)
    }, a.fn.steps.getStep = function(a) {
        return p(this, a)
    }, a.fn.steps.insert = function(a, b) {
        return x(this, m(this), n(this), a, b)
    }, a.fn.steps.next = function() {
        return s(this, m(this), n(this))
    }, a.fn.steps.previous = function() {
        return t(this, m(this), n(this))
    }, a.fn.steps.remove = function(a) {
        return H(this, m(this), n(this), a)
    }, a.fn.steps.setStep = function() {
        throw new Error("Not yet implemented!")
    }, a.fn.steps.skip = function() {
        throw new Error("Not yet implemented!")
    };
    var $ = a.fn.steps.contentMode = {
            html: 0,
            iframe: 1,
            async: 2
        },
        _ = a.fn.steps.stepsOrientation = {
            horizontal: 0,
            vertical: 1
        },
        ab = a.fn.steps.transitionEffect = {
            none: 0,
            fade: 1,
            slide: 2,
            slideLeft: 3
        },
        bb = a.fn.steps.stepModel = {
            title: "",
            content: "",
            contentUrl: "",
            contentMode: $.html,
            contentLoaded: !1
        },
        cb = a.fn.steps.defaults = {
            headerTag: "h1",
            bodyTag: "div",
            contentContainerTag: "div",
            actionContainerTag: "div",
            stepsContainerTag: "div",
            cssClass: "wizard",
            clearFixCssClass: "clearfix",
            stepsOrientation: _.horizontal,
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
            transitionEffect: ab.none,
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

/*! jQuery Validation Plugin - v1.11.0 - 2/4/2013
 * https://github.com/jzaefferer/jquery-validation
 * Copyright (c) 2013 JÃ¶rn Zaefferer; Licensed MIT */

/*!
 * jQuery Validation Plugin 1.11.0
 *
 * http://bassistance.de/jquery-plugins/jquery-plugin-validation/
 * http://docs.jquery.com/Plugins/Validation
 *
 * Copyright 2013 JÃ¶rn Zaefferer
 * Released under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 */

(function() {

    function stripHtml(value) {
        // remove html tags and space chars
        return value.replace(/<.[^<>]*?>/g, ' ').replace(/&nbsp;|&#160;/gi, ' ')
            // remove punctuation
            .replace(/[.(),;:!?%#$'"_+=\/\-]*/g, '');
    }

    jQuery.validator.addMethod("maxWords", function(value, element, params) {
        return this.optional(element) || stripHtml(value).match(/\b\w+\b/g).length <= params;
    }, jQuery.validator.format("Please enter {0} words or less."));

    jQuery.validator.addMethod("minWords", function(value, element, params) {
        return this.optional(element) || stripHtml(value).match(/\b\w+\b/g).length >= params;
    }, jQuery.validator.format("Please enter at least {0} words."));

    jQuery.validator.addMethod("rangeWords", function(value, element, params) {
        var valueStripped = stripHtml(value);
        var regex = /\b\w+\b/g;
        return this.optional(element) || valueStripped.match(regex).length >= params[0] && valueStripped.match(regex).length <= params[1];
    }, jQuery.validator.format("Please enter between {0} and {1} words."));

}());

jQuery.validator.addMethod("letterswithbasicpunc", function(value, element) {
    return this.optional(element) || /^[a-z\-.,()'"\s]+$/i.test(value);
}, "Letters or punctuation only please");

jQuery.validator.addMethod("alphanumeric", function(value, element) {
    return this.optional(element) || /^\w+$/i.test(value);
}, "Letters, numbers, and underscores only please");

jQuery.validator.addMethod("lettersonly", function(value, element) {
    return this.optional(element) || /^[a-z]+$/i.test(value);
}, "Letters only please");

jQuery.validator.addMethod("nowhitespace", function(value, element) {
    return this.optional(element) || /^\S+$/i.test(value);
}, "No white space please");

jQuery.validator.addMethod("ziprange", function(value, element) {
    return this.optional(element) || /^90[2-5]\d\{2\}-\d{4}$/.test(value);
}, "Your ZIP-code must be in the range 902xx-xxxx to 905-xx-xxxx");

jQuery.validator.addMethod("zipcodeUS", function(value, element) {
    return this.optional(element) || /\d{5}-\d{4}$|^\d{5}$/.test(value);
}, "The specified US ZIP Code is invalid");

jQuery.validator.addMethod("integer", function(value, element) {
    return this.optional(element) || /^-?\d+$/.test(value);
}, "A positive or negative non-decimal number please");

/**
 * Return true, if the value is a valid vehicle identification number (VIN).
 *
 * Works with all kind of text inputs.
 *
 * @example <input type="text" size="20" name="VehicleID" class="{required:true,vinUS:true}" />
 * @desc Declares a required input element whose value must be a valid vehicle identification number.
 *
 * @name jQuery.validator.methods.vinUS
 * @type Boolean
 * @cat Plugins/Validate/Methods
 */
jQuery.validator.addMethod("vinUS", function(v) {
    if (v.length !== 17) {
        return false;
    }
    var i, n, d, f, cd, cdv;
    var LL = ["A", "B", "C", "D", "E", "F", "G", "H", "J", "K", "L", "M", "N", "P", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var VL = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 7, 9, 2, 3, 4, 5, 6, 7, 8, 9];
    var FL = [8, 7, 6, 5, 4, 3, 2, 10, 0, 9, 8, 7, 6, 5, 4, 3, 2];
    var rs = 0;
    for (i = 0; i < 17; i++) {
        f = FL[i];
        d = v.slice(i, i + 1);
        if (i === 8) {
            cdv = d;
        }
        if (!isNaN(d)) {
            d *= f;
        } else {
            for (n = 0; n < LL.length; n++) {
                if (d.toUpperCase() === LL[n]) {
                    d = VL[n];
                    d *= f;
                    if (isNaN(cdv) && n === 8) {
                        cdv = LL[n];
                    }
                    break;
                }
            }
        }
        rs += d;
    }
    cd = rs % 11;
    if (cd === 10) {
        cd = "X";
    }
    if (cd === cdv) {
        return true;
    }
    return false;
}, "The specified vehicle identification number (VIN) is invalid.");

/**
 * Return true, if the value is a valid date, also making this formal check dd/mm/yyyy.
 *
 * @example jQuery.validator.methods.date("01/01/1900")
 * @result true
 *
 * @example jQuery.validator.methods.date("01/13/1990")
 * @result false
 *
 * @example jQuery.validator.methods.date("01.01.1900")
 * @result false
 *
 * @example <input name="pippo" class="{dateITA:true}" />
 * @desc Declares an optional input element whose value must be a valid date.
 *
 * @name jQuery.validator.methods.dateITA
 * @type Boolean
 * @cat Plugins/Validate/Methods
 */
jQuery.validator.addMethod("dateITA", function(value, element) {
    var check = false;
    var re = /^\d{1,2}\/\d{1,2}\/\d{4}$/;
    if (re.test(value)) {
        var adata = value.split('/');
        var gg = parseInt(adata[0], 10);
        var mm = parseInt(adata[1], 10);
        var aaaa = parseInt(adata[2], 10);
        var xdata = new Date(aaaa, mm - 1, gg);
        if ((xdata.getFullYear() === aaaa) && (xdata.getMonth() === mm - 1) && (xdata.getDate() === gg)) {
            check = true;
        } else {
            check = false;
        }
    } else {
        check = false;
    }
    return this.optional(element) || check;
}, "Please enter a correct date");

jQuery.validator.addMethod("dateNL", function(value, element) {
    return this.optional(element) || /^(0?[1-9]|[12]\d|3[01])[\.\/\-](0?[1-9]|1[012])[\.\/\-]([12]\d)?(\d\d)$/.test(value);
}, "Vul hier een geldige datum in.");

jQuery.validator.addMethod("time", function(value, element) {
    return this.optional(element) || /^([01]\d|2[0-3])(:[0-5]\d){1,2}$/.test(value);
}, "Please enter a valid time, between 00:00 and 23:59");
jQuery.validator.addMethod("time12h", function(value, element) {
    return this.optional(element) || /^((0?[1-9]|1[012])(:[0-5]\d){1,2}( ?[AP]M))$/i.test(value);
}, "Please enter a valid time in 12-hour format");

/**
 * matches US phone number format
 *
 * where the area code may not start with 1 and the prefix may not start with 1
 * allows '-' or ' ' as a separator and allows parens around area code
 * some people may want to put a '1' in front of their number
 *
 * 1(212)-999-2345 or
 * 212 999 2344 or
 * 212-999-0983
 *
 * but not
 * 111-123-5434
 * and not
 * 212 123 4567
 */

jQuery.validator.addMethod('phoneType', function(phone_number, element) {
    phone_number = phone_number.replace(/\(|\)|\s+|-/g, '');
    return this.optional(element) || phone_number.length > 9 &&
        phone_number.match(/^\+\d{1,3}\s?\d{10,12}$/);
}, 'Please use the specified format');

jQuery.validator.addMethod('mobileUK', function(phone_number, element) {
    return this.optional(element) || phone_number.length > 9 &&
        phone_number.match(/^(?:(?:(?:00\s?|\+)44\s?|0)7(?:[45789]\d{2}|624)\s?\d{3}\s?\d{3})$/);
}, 'Please specify a valid mobile number');

//Matches UK landline + mobile, accepting only 01-3 for landline or 07 for mobile to exclude many premium numbers
jQuery.validator.addMethod('phonesUK', function(phone_number, element) {
    phone_number = phone_number.replace(/\s+|-/g, '');
    return this.optional(element) || phone_number.length > 9 &&
        phone_number.match(/^(?:(?:(?:00\s?|\+)44\s?|0)(?:1\d{8,9}|[23]\d{9}|7(?:[45789]\d{8}|624\d{6})))$/);
}, 'Please specify a valid uk phone number');
// On the above three UK functions, do the following server side processing:
//  Compare with ^((?:00\s?|\+)(44)\s?)?\(?0?(?:\)\s?)?([1-9]\d{1,4}\)?[\d\s]+)
//  Extract $2 and set $prefix to '+44<space>' if $2 is '44' otherwise set $prefix to '0'
//  Extract $3 and remove spaces and parentheses. Phone number is combined $2 and $3.
// A number of very detailed GB telephone number RegEx patterns can also be found at:
// http://www.aa-asterisk.org.uk/index.php/Regular_Expressions_for_Validating_and_Formatting_UK_Telephone_Numbers

//Matches UK postcode. based on http://snipplr.com/view/3152/postcode-validation/
jQuery.validator.addMethod('postcodeUK', function(postcode, element) {
    postcode = (postcode.toUpperCase()).replace(/\s+/g, '');
    return this.optional(element) || postcode.match(/^([^QZ][^IJZ]{0,1}\d{1,2})(\d[^CIKMOV]{2})$/) || postcode.match(/^([^QV]\d[ABCDEFGHJKSTUW])(\d[^CIKMOV]{2})$/) || postcode.match(/^([^QV][^IJZ]\d[ABEHMNPRVWXY])(\d[^CIKMOV]{2})$/) || postcode.match(/^(GIR)(0AA)$/) || postcode.match(/^(BFPO)(\d{1,4})$/) || postcode.match(/^(BFPO)(C\/O\d{1,3})$/);
}, 'Please specify a valid postcode');

// TODO check if value starts with <, otherwise don't try stripping anything
jQuery.validator.addMethod("strippedminlength", function(value, element, param) {
    return jQuery(value).text().length >= param;
}, jQuery.validator.format("Please enter at least {0} characters"));

// same as email, but TLD is optional
jQuery.validator.addMethod("email2", function(value, element, param) {
    return this.optional(element) || /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)*(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i.test(value);
}, jQuery.validator.messages.email);

// same as url, but TLD is optional
jQuery.validator.addMethod("url2", function(value, element, param) {
    return this.optional(element) || /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)*(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(value);
}, jQuery.validator.messages.url);

// NOTICE: Modified version of Castle.Components.Validator.CreditCardValidator
// Redistributed under the the Apache License 2.0 at http://www.apache.org/licenses/LICENSE-2.0
// Valid Types: mastercard, visa, amex, dinersclub, enroute, discover, jcb, unknown, all (overrides all other settings)
jQuery.validator.addMethod("creditcardtypes", function(value, element, param) {
    if (/[^0-9\-]+/.test(value)) {
        return false;
    }

    value = value.replace(/\D/g, "");

    var validTypes = 0x0000;

    if (param.mastercard) {
        validTypes |= 0x0001;
    }
    if (param.visa) {
        validTypes |= 0x0002;
    }
    if (param.amex) {
        validTypes |= 0x0004;
    }
    if (param.dinersclub) {
        validTypes |= 0x0008;
    }
    if (param.enroute) {
        validTypes |= 0x0010;
    }
    if (param.discover) {
        validTypes |= 0x0020;
    }
    if (param.jcb) {
        validTypes |= 0x0040;
    }
    if (param.unknown) {
        validTypes |= 0x0080;
    }
    if (param.all) {
        validTypes = 0x0001 | 0x0002 | 0x0004 | 0x0008 | 0x0010 | 0x0020 | 0x0040 | 0x0080;
    }
    if (validTypes & 0x0001 && /^(5[12345])/.test(value)) { //mastercard
        return value.length === 16;
    }
    if (validTypes & 0x0002 && /^(4)/.test(value)) { //visa
        return value.length === 16;
    }
    if (validTypes & 0x0004 && /^(3[47])/.test(value)) { //amex
        return value.length === 15;
    }
    if (validTypes & 0x0008 && /^(3(0[012345]|[68]))/.test(value)) { //dinersclub
        return value.length === 14;
    }
    if (validTypes & 0x0010 && /^(2(014|149))/.test(value)) { //enroute
        return value.length === 15;
    }
    if (validTypes & 0x0020 && /^(6011)/.test(value)) { //discover
        return value.length === 16;
    }
    if (validTypes & 0x0040 && /^(3)/.test(value)) { //jcb
        return value.length === 16;
    }
    if (validTypes & 0x0040 && /^(2131|1800)/.test(value)) { //jcb
        return value.length === 15;
    }
    if (validTypes & 0x0080) { //unknown
        return true;
    }
    return false;
}, "Please enter a valid credit card number.");

jQuery.validator.addMethod("ipv4", function(value, element, param) {
    return this.optional(element) || /^(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)$/i.test(value);
}, "Please enter a valid IP v4 address.");

jQuery.validator.addMethod("ipv6", function(value, element, param) {
    return this.optional(element) || /^((([0-9A-Fa-f]{1,4}:){7}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}:[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){5}:([0-9A-Fa-f]{1,4}:)?[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){4}:([0-9A-Fa-f]{1,4}:){0,2}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){3}:([0-9A-Fa-f]{1,4}:){0,3}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){2}:([0-9A-Fa-f]{1,4}:){0,4}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(([0-9A-Fa-f]{1,4}:){0,5}:((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(::([0-9A-Fa-f]{1,4}:){0,5}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|([0-9A-Fa-f]{1,4}::([0-9A-Fa-f]{1,4}:){0,5}[0-9A-Fa-f]{1,4})|(::([0-9A-Fa-f]{1,4}:){0,6}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){1,7}:))$/i.test(value);
}, "Please enter a valid IP v6 address.");

/**
 * Return true if the field value matches the given format RegExp
 *
 * @example jQuery.validator.methods.pattern("AR1004",element,/^AR\d{4}$/)
 * @result true
 *
 * @example jQuery.validator.methods.pattern("BR1004",element,/^AR\d{4}$/)
 * @result false
 *
 * @name jQuery.validator.methods.pattern
 * @type Boolean
 * @cat Plugins/Validate/Methods
 */
jQuery.validator.addMethod("pattern", function(value, element, param) {
    if (this.optional(element)) {
        return true;
    }
    if (typeof param === 'string') {
        param = new RegExp('^(?:' + param + ')$');
    }
    return param.test(value);
}, "Invalid format.");


/*
 * Lets you say "at least X inputs that match selector Y must be filled."
 *
 * The end result is that neither of these inputs:
 *
 *  <input class="productinfo" name="partnumber">
 *  <input class="productinfo" name="description">
 *
 *  ...will validate unless at least one of them is filled.
 *
 * partnumber:  {require_from_group: [1,".productinfo"]},
 * description: {require_from_group: [1,".productinfo"]}
 *
 */
jQuery.validator.addMethod("require_from_group", function(value, element, options) {
    var validator = this;
    var selector = options[1];
    var validOrNot = $(selector, element.form).filter(function() {
        return validator.elementValue(this);
    }).length >= options[0];

    if (!$(element).data('being_validated')) {
        var fields = $(selector, element.form);
        fields.data('being_validated', true);
        fields.valid();
        fields.data('being_validated', false);
    }
    return validOrNot;
}, "Please fill at least {0} of these fields.");

/*
 * Lets you say "either at least X inputs that match selector Y must be filled,
 * OR they must all be skipped (left blank)."
 *
 * The end result, is that none of these inputs:
 *
 *  <input class="productinfo" name="partnumber">
 *  <input class="productinfo" name="description">
 *  <input class="productinfo" name="color">
 *
 *  ...will validate unless either at least two of them are filled,
 *  OR none of them are.
 *
 * partnumber:  {skip_or_fill_minimum: [2,".productinfo"]},
 *  description: {skip_or_fill_minimum: [2,".productinfo"]},
 * color:       {skip_or_fill_minimum: [2,".productinfo"]}
 *
 */
// import * as Swal from "sweetalert2";
jQuery.validator.addMethod("skip_or_fill_minimum", function(value, element, options) {
    var validator = this;
    var numberRequired = options[0];
    var selector = options[1];
    var numberFilled = $(selector, element.form).filter(function() {
        return validator.elementValue(this);
    }).length;
    var valid = numberFilled >= numberRequired || numberFilled === 0;

    if (!$(element).data('being_validated')) {
        var fields = $(selector, element.form);
        fields.data('being_validated', true);
        fields.valid();
        fields.data('being_validated', false);
    }
    return valid;
}, "Please either skip these fields or fill at least {0} of them.");

// Accept a value from a file input based on a required mimetype
jQuery.validator.addMethod("accept", function(value, element, param) {
    // Split mime on commas in case we have multiple types we can accept
    var typeParam = typeof param === "string" ? param.replace(/\s/g, '').replace(/,/g, '|') : "image/*",
        optionalValue = this.optional(element),
        i, file;

    // Element is optional
    if (optionalValue) {
        return optionalValue;
    }

    if ($(element).attr("type") === "file") {
        // If we are using a wildcard, make it regex friendly
        typeParam = typeParam.replace(/\*/g, ".*");

        // Check if the element has a FileList before checking each file
        if (element.files && element.files.length) {
            for (i = 0; i < element.files.length; i++) {
                file = element.files[i];

                // Grab the mimtype from the loaded file, verify it matches
                if (!file.type.match(new RegExp(".?(" + typeParam + ")$", "i"))) {
                    return false;
                }
            }
        }
    }

    // Either return true because we've validated each file, or because the
    // browser does not support element.files and the FileList feature
    return true;
}, "Please enter a value with a valid mimetype.");

// Older "accept" file extension method. Old docs: http://docs.jquery.com/Plugins/Validation/Methods/accept
jQuery.validator.addMethod("extension", function(value, element, param) {
    param = typeof param === "string" ? param.replace(/,/g, '|') : "png|jpe?g|gif";
    return this.optional(element) || value.match(new RegExp(".(" + param + ")$", "i"));
}, "Please enter a value with a valid extension.");
$.validator.addMethod('fileSize', function(value, element, param) {
    return this.optional(element) || (element.files[0].size <= param)
}, 'File size must be less than {0} Bytes');
jQuery.validator.addMethod("lettersOnly", function(value, element) {
    return this.optional(element) || /^[a-z]+$/i.test(value);
}, "Only Letters allowed");

$.validator.addMethod('maxImageWidth', function(value, element, maxWidth) {
    return ($(element).data('imageWidth') || 0) <= maxWidth;
}, function(maxWidth, element) {
    var imageWidth = $(element).data('imageWidth');
    return (imageWidth) ?
        ("Your image's width must be less than " + maxWidth + "px") :
        "Selected file is not an image.";
});

















/***/ (function(module, __webpack_exports__, __webpack_require__) {

    "use strict";
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__("./node_modules/lodash/lodash.js");
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_1_axios__ = __webpack_require__("./node_modules/axios/index.js");
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_1_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_axios__);
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_2_sweetalert2__ = __webpack_require__("./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_2_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_sweetalert2__);
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_3_jquery__ = __webpack_require__("./node_modules/jquery/dist/jquery.js");
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_3_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_jquery__);
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_4_popper_js_dist_umd_popper__ = __webpack_require__("./node_modules/popper.js/dist/umd/popper.js");
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_4_popper_js_dist_umd_popper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_popper_js_dist_umd_popper__);
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_5_bootstrap__ = __webpack_require__("./node_modules/bootstrap/dist/js/bootstrap.js");
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_5_bootstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_bootstrap__);
    /**
     * This bootstrap file is used for both frontend and backend
     */


// import 'jquery-ui-dist/jquery-ui.min'; // Required for BS4
    // Required for BS4


    /**
     * Font Awesome >=5.1
     *
     * Is recommended import just the icons that you use, for decrease considerably the file size.
     * You can see at next link, how it works: https://github.com/FortAwesome/Font-Awesome/blob/master/UPGRADING.md#no-more-default-imports
     * Also you can import the icons separately on the frontend and backend
     */
//
// import { library, dom } from '@fortawesome/fontawesome-svg-core';
// import { fab } from '@fortawesome/free-brands-svg-icons';
// import { far } from '@fortawesome/free-regular-svg-icons';
// import { fas } from '@fortawesome/free-solid-svg-icons';
//
// library.add(fab, far, fas);

// Kicks off the process of finding <i> tags and replacing with <svg>
// dom.watch();

    /**
     * We'll load jQuery and the Bootstrap jQuery plugin which provides support
     * for JavaScript based Bootstrap features such as modals and tabs. This
     * code may be modified to fit the specific needs of your application.
     */

    window.$ = window.jQuery = __WEBPACK_IMPORTED_MODULE_3_jquery___default.a;
    window.swal = __WEBPACK_IMPORTED_MODULE_2_sweetalert2___default.a;
    window._ = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a; // Lodash

    /**
     * We'll load the axios HTTP library which allows us to easily issue requests
     * to our Laravel back-end. This library automatically handles sending the
     * CSRF token as a header based on the value of the "XSRF" token cookie.
     */

    window.axios = __WEBPACK_IMPORTED_MODULE_1_axios___default.a;
    window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

    /**
     * Next we will register the CSRF Token as a common header with Axios so that
     * all outgoing HTTP requests automatically have it attached. This is just
     * a simple convenience so we don't have to attach every token manually.
     */

    var token = document.head.querySelector('meta[name="csrf-token"]');

    if (token) {
        window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
    } else {
        console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
    }


});

// const Swal = require('sweetalert2');
var form = $("#studentReg");
var progressbar = $('.progress-bar');
var validator = form.validate({
    ignore: "",
    errorPlacement: function errorPlacement(error, element) {
        element.before(error);
    },
    rules: {
        idNo: {
            minlength: 4,
            required: true
            // remote: icparContext + "/studentApplication/checkID"
        },
        passport: {
            accept: "png|jpg|jpeg",
            fileSize: 5100000,
            maxImageWidth: 11000,
            required: function() {
                return $('#passportPhoto').val() == '';
            }
        },
        phoneNo: {
            phoneType: true

        },
        proAttachment: {
            fileSize: 5100000,
            extension: "png|jpg|pdf|doc|docx|jpeg|zip",
            required: function() {
                return ($('#proCourse').val() != '') && ($('#professionalAttachment').val() == '');
            }

        },
        phoneNo2: {
            phoneType: true

        },
        professionalAttachment: {
            required: function() {
                return $('#proCourse').val() != '';
            }
        },

        passportPhoto: {
            required: true

        },
        bankAttachment: {
            required: true

        },
        sponsorAttachment: {
            required: true

        },
        sponsorName: {
            required: function(el) {
                return $(el).closest('form').find('.sponsor').val() != 'SelfSponsored';
            }

        },
        sponsorEmail: {
            email: true,
            required: function(el) {
                return $(el).closest('form').find('.sponsor').val() != 'SelfSponsored';
            }

        },
        sponsorContact: {
            phoneType: true,
            required: function(el) {
                return $(el).closest('form').find('.sponsor').val() != 'SelfSponsored';
            }
        },
        email: {
            required: true,
            email: true,
            remote: {
                url: icparContext + "/studentApplication/checkEmail",
                type: 'get',
                data: {
                    email: function() {
                        return $("#email").val();
                    },
                    program: function() {
                        return $("#program").val();
                    }
                }
            }
        },
        bankDepositDate: {

            required: function(el) {
                return $(el).closest('form').find('.payment').val() == 'BankDeposit';
            }

        },
        bankDepositPaymentRefNo: {
            required: function(el) {
                return $(el).closest('form').find('.payment').val() == 'BankDeposit';
            }
        },
        accountNumber: {
            required: function(el) {
                return $(el).closest('form').find('.payment').val() == 'BankDeposit';
            }
        },
        branch: {
            required: function(el) {
                return $(el).closest('form').find('.payment').val() == 'BankDeposit';
            }

        },
        bankDepositorNames: {
            required: function(el) {
                return $(el).closest('form').find('.payment').val() == 'BankDeposit';
            }

        },
        bankDepositAmount: {
            min: 50000,
            required: function(el) {
                return $(el).closest('form').find('.payment').val() == 'BankDeposit';
            }

        },
        bankSlip: {
            fileSize: 5100000,
            extension: "png|jpg|pdf|doc|docx|jpeg|zip",
            required: function(el) {
                return ($('.payment').val() == 'BankDeposit') && ($('#bankAttachment').val() == '');

            }

        },
        sponsorDepositDate: {
            required: function(el) {
                return $(el).closest('form').find('.payment').val() == 'SponsorDeposit';
            }

        },
        sponsorDepositorNames: {
            required: function(el) {
                return $(el).closest('form').find('.payment').val() == 'SponsorDeposit';
            }

        },
        sponsorDepositAmount: {
            min: 50000,
            required: function(el) {
                return $(el).closest('form').find('.payment').val() == 'SponsorDeposit';
            }

        },
        sponsorDepositAttachment: {
            fileSize: 5100000,
            extension: "png|jpg|pdf|doc|docx|jpeg|zip",
            required: function(el) {
                return ($('.payment').val() == 'SponsorDeposit') && ($('#sponsorAttachment').val() == '');
            }

        },
        sponsorDepositPaymentRefNo: {
            required: function(el) {
                return $(el).closest('form').find('.payment').val() == 'SponsorDeposit';
            }

        },
        mobileMoneyDate: {
            required: function(el) {
                return $(el).closest('form').find('.payment').val() == 'MobileMoneyDeposit';
            }

        },
        mobileMoneyPaymentRefNo: {
            required: function(el) {
                return $(el).closest('form').find('.payment').val() == 'MobileMoneyDeposit';
            }

        },
        mobileMoneyDepositorNames: {
            digits: false,
            required: function(el) {
                return $(el).closest('form').find('.payment').val() == 'MobileMoneyDeposit';
            }

        },
        serviceProvider: {
            required: function(el) {
                return $(el).closest('form').find('.payment').val() == 'MobileMoneyDeposit';
            }

        },
        mobileMoneyPhoneNumber: {
            phoneType: true,
            required: function(el) {
                return $(el).closest('form').find('.payment').val() == 'MobileMoneyDeposit';
            }

        },
        mobileMoneyAmount: {
            min: 50000,
            required: function(el) {
                return $(el).closest('form').find('.payment').val() == 'MobileMoneyDeposit';
            }

        },
        sponsorID: {
            required: function() {
                return ($('#sponsorshipType').val() == 'School') || ($('#sponsorshipType').val() == 'WorkPlace');
            }

        }

    },
    messages: {
        idNo: {
            remote: "This ID No. is already registered!",
            minlength: 'Please enter a valid ID No!'
        },
        email: {
            remote: "This email is already registered!",
            email: 'Please use a valid email address!'
        },
        passport: {
            accept: "Only jpeg, png and jpg formats are allowed!",
            fileSize: "Photo should not be greater than 5 MBs!",
            checkDim: "Max-width(600pixels) and Max-height(600pixels)",
            maxImageWidth: 'The image width should not exceed 400 pixels'
        },
        bankDepositAmount: {
            min: "Application fee should be 50000"
        },
        sponsorDepositAmount: {
            min: "Application fee should be 50000"
        },
        mobileMoneyAmount: {
            min: "Application fee should be 50000"

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
    submitHandler: function(form) {
        alert('success');
        $.ajax({
            type: $(form).attr('method'),
            url: $(form).attr('action'),
            data: $(form).serialize(),
            dataType : 'json'
        })
            .done(function (response) {
                if (response.success == 'success') {
                    alert('success');
                } else {
                    alert('fail');
                }
            });
        return false; // required to block normal submit since you used ajax

    }
});

form.steps({
    headerTag: "h3",
    bodyTag: "section",
    transitionEffect: "slideLeft",
    stepsOrientation: "vertical",
    onStepChanging: function(event, currentIndex, newIndex) {
        // Allways allow previous action even if the current form is not valid!
        if (currentIndex > newIndex) {
            return true;
        }

        if (currentIndex < newIndex) {
            form.find(".body:eq(" + newIndex + ") label.error").remove();
            form.find(".body:eq(" + newIndex + ") .error").removeClass("error");
        }
        form.validate().settings.ignore = ":disabled,:hidden";
        return form.valid();
    },

    onFinishing: function(event, currentIndex) {
        form.validate().settings.ignore = ":disabled,:hidden";
        return form.valid();
    },
    onFinished: function(event, currentIndex) {
        // const Swal = require('sweetalert2')
        // alert('success');
        swal.fire({
            title: 'Are you sure?',
            text: "You want to sent this Registration!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Send It!'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Sent!',
                    'Your Your Registration Sent.',
                    'success'
                )
            }
        })
        $("#progress-bar").width('0%');
        $('#loader-icon').show();
        var form = $(this);
        $("#progress-bar").width('0%');
        $.ajax({
            type: $(form).attr('method'),
            url: $(form).attr('action'),
            data: $(form).serialize(),
            dataType : 'json'
        })
            .done(function (response) {
                console.log(response);
                if (response.success == 'success') {
                    swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Your Registration has been successfuly; Please check Your Email and wait confirmation Email',
                        showConfirmButton: false,
                        timer: 60000
                    })
                    $('#loader-icon').hide();
                    $("#progress-bar").html('<div id="progress-status">Your Registration Completed Succfull, Check Your Email or Phone SMS</div>');

                    window.location.href = "/";
                    // window.location="/jdd-portal/Student/home";
                    // window.location="/jdd-portal/Student/home";
                } else {
                    swal.fire({
                        icon: 'warning',
                        title: 'Oops...',
                        text: 'Your Registration not  Completed, Please try Again!'
                    })
                    // alert('Your Registration not  Completed, Please try Again');
                    $('#loader-icon').hide();
                    $("#progress-bar").html('<div id="progress-status">Your Registration not  Completed, Please try Again</div>');

                }
            });
        return false;
        form.submit();
    }
});

var memberForm = $("#memberReg");
var requiredRuleSet = {
    required: true
};
var contactRuleSet = {
    phoneType: true
};
var memberValidator = memberForm.validate({
    ignore: "",
    errorPlacement: function errorPlacement(error, element) {
        element.before(error);
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
            fileSize: 5100000,
            maxImageWidth: 2000,
            required: function() {
                return $('#passportPhoto').val() == '';
            }
        },
        phoneNo: contactRuleSet,
        organizationContact: contactRuleSet,
        phoneNo2: contactRuleSet,
        passportPhoto: requiredRuleSet,
        bankAttachment: requiredRuleSet,
        email: {
            required: true,
            email: true,
            remote: {
                url: icparContext + "/member/checkEmail",
                type: 'get',
                data: {
                    email: function() {
                        return $("#email").val();
                    },
                    membershipType: function() {
                        return $("#membershipType").val();
                    }
                }
            }
        },
        bankDepositDate: {
            required: function() {
                return $('.payment').val() == 'BankDeposit';
            }
        },
        bankDepositPaymentRefNo: {
            required: function() {
                return $('.payment').val() == 'BankDeposit';
            }
        },
        accountNumber: {
            required: function() {
                return $('.payment').val() == 'BankDeposit';
            }
        },
        branch: {
            required: function() {
                return $('.payment').val() == 'BankDeposit';
            }

        },
        bankDepositorNames: {
            required: function() {
                return $('.payment').val() == 'BankDeposit';
            }

        },
        bankDepositAmount: {
            min: 50000,
            required: function() {
                return $('.payment').val() == 'BankDeposit';
            }

        },
        bankSlip: {
            fileSize: 5100000,
            extension: "png|jpg|pdf|doc|docx",
            required: function() {
                return ($('.payment').val() == 'BankDeposit') && ($('#bankAttachment').val() == '');

            }

        },
        bankDepositDateb: {
            required: true
        },
        bankDepositPaymentRefNob: {
            required: true
        },
        accountNumberb: {
            required: true
        },
        branchb: {
            required: true

        },
        bankDepositorNamesb: {
            required: true

        },
        bankDepositAmountb: {
            min: 50000,
            required: true

        },
        bankSlipb: {
            fileSize: 5100000,
            extension: "png|jpg|pdf|doc|docx",
            required: function() {
                return $('#bankAttachmentb').val() === '';

            }

        }

    },
    messages: {
        email: {
            remote: "This email is already registered!",
            email: 'Please use a valid email address!'
        },
        passport: {
            accept: "Only jpeg, png and jpg formats are allowed!",
            fileSize: "Photo should not be greater than 2 MBs!",
            checkDim: "Max-width(600pixels) and Max-height(600pixels)",
            maxImageWidth: 'The image width should not exceed 400 pixels'
        },
        bankDepositAmount: {
            min: "Application fee should be 50000"
        },
        mobileMoneyAmount: {
            min: "Application fee should be 50000"

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
    submitHandler: function(memberForm) {
        $(memberForm).ajaxSubmit({
            beforeSubmit: function() {
                $("#progress-bar").width('0%');
            },
            success: function(res) {
                $('#loader-icon').hide();
                console.log(res);
                window.location = icparContext + "/studentApplication/application-success";
            },
            error: function(res) {

                alert('An error has occured! Check your form and correct any mistakes in your data');
                $("#progress-bar").css({
                    'display': 'none'
                })
            },
            uploadProgress: function(event, position, total, percentComplete) {
                $('#progress-div').css({
                    'display': 'block'
                });
                $("#progress-bar").width(percentComplete + '%');
                $("#progress-bar").html('<div id="progress-status">' + 'Sending...' + percentComplete + ' %</div>');
            }
        });
    }
});
memberForm.steps({
    headerTag: "h3",
    bodyTag: "section",
    transitionEffect: "slideLeft",
    stepsOrientation: "vertical",
    onStepChanging: function(event, currentIndex, newIndex) {
        if (currentIndex > newIndex) {
            return true;
        }
        if (currentIndex < newIndex) {
            memberForm.find(".body:eq(" + newIndex + ") label.error").remove();
            memberForm.find(".body:eq(" + newIndex + ") .error").removeClass("error");
        }
        memberForm.validate().settings.ignore = ":disabled,:hidden";
        return memberForm.valid();
    },
    onFinishing: function(event, currentIndex) {
        memberForm.validate().settings.ignore = ":disabled,:hidden";
        return memberForm.valid();
    },
    onFinished: function(event, currentIndex) {
        var form = $(this);
        form.submit();
    }
});


// This is a manifest file that'll be compiled into application.js.
//
// Any JavaScript file within this directory can be referenced here using a relative path.
//
// You're free to add application-wide JavaScript to this file, but it's generally better
// to create separate JavaScript files as needed.
//
//= require combined
//= require additional-methods
//= require application-summary


//= require_self


if (typeof jQuery !== 'undefined') {
    (function($) {
        $(document).ajaxStart(function() {
            $('#spinner').fadeIn();
        }).ajaxStop(function() {
            $('#spinner').fadeOut();
        });
    })(jQuery);
}

$("#program").select2({});
$("#educationLevel").select2({});

$("#gender").select2({});
$("#nationality").select2({});
$("#country").select2({});
$('.max-year').attr('max', (new Date()).getFullYear());


$("#selectExemption").select2({
    theme: "classic"
});
$("#selectCountry").select2({
    theme: "classic"
});
//date picker functions
var datefield = document.createElement("input");
datefield.setAttribute("type", "date");
if (datefield.type !== "date") { //if browser doesn't support input type="date", load files for jQuery UI Date Picker
    document.write('<link href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8/themes/base/jquery-ui.css" rel="stylesheet" type="text/css" />\n');
    document.write('<script src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8/jquery-ui.min.js"><\/script>\n');
    document.write('<script src="http://code.jquery.com/jquery-migrate-1.0.0.js"><\/script>\n');

}
jQuery('nav#dropdown').meanmenu();
$(document).ready(function() {
    if (document.getElementById('educationRecordFile') !== null) {
        $("#educationRecordFile").rules("add", {
            required: true,
            fileSize: 5100000,
            extension: "png|jpg|pdf|doc|docx",

            messages: {
                fileSize: "File should be less than 5MBs",
                extension: "Only formats below are allowed!"
            }


        });
    }

});
if (document.getElementById('sponsorshipType') !== null) {
    document.getElementById('sponsorshipType').addEventListener('change', function() {
        var sponsorInfoDisplay = this.value === ("SelfSponsored") ? 'none' : 'block';
        document.getElementById('sponsorDetails').style.display = sponsorInfoDisplay;
    });

}
if (document.getElementById('trainingCenter') !== null) {
    document.getElementById('trainingCenter').addEventListener('change', function() {
        var otherTrainingCenterDisplay = this.value !== ("Other") ? 'none' : 'block';
        document.getElementById('otherTrainingCenter').style.display = otherTrainingCenterDisplay;
    });

}
var examRequestForm = $("#examRequest");
if (examRequestForm.length > 0) {
    examRequestForm.validate({
        errorPlacement: function errorPlacement(error, element) {
            element.before(error);
        }
    });
}
var sponsorDeposit = $('#sponsorDeposit');
if (sponsorDeposit.length > 0) {
    $('#sponsorType').on('change', function() {
        $('#sponsorName').find('option').remove();
        if ((this.value === 'School') || (this.value === 'WorkPlace')) {
            var data = new FormData();
            data.append("sponsorType", this.value);
            $.ajax({
                url: icparContext + "/home/getSponsorsList",
                cache: false,
                processData: false,
                contentType: false,
                type: 'POST',
                success: function(items, status, req) {
                    $('#sponsorName').append($('<option>', {
                        value: '',
                        text: 'Select ' + $('#sponsorType').val()
                    }));
                    $.each(items, function(i, item) {
                        $('#sponsorName').append($('<option>', {
                            value: item.id,
                            text: item.name
                        }));
                    });
                },
                headers: {
                    'Authorization': 'ec5ce080a64941c68a84cac8f28293dd'
                },
                data: data
            });
            $('#sponsorNameDiv').css({
                'display': 'block'
            });
            $('#depositorNameDiv').css({
                'display': 'none'
            })
        } else {
            $('#sponsorNameDiv').css({
                'display': 'none'
            });
            $('#depositorNameDiv').css({
                'display': 'block'
            })
        }
    });
}
var studentSponsor = $('#sponsorshipType');
if (studentSponsor.length > 0) {
    $('#sponsorshipType').on('change', function() {
        $('#sponsor_names').attr('placeholder', this.value + ' names');
        $('#emailSponsor').attr('placeholder', this.value + ' email');
        $('#contactSponsor').attr('placeholder', this.value + ' contact');
        $('#sponsorNameMis').find('option').remove();
        if ((this.value === 'School') || (this.value === 'WorkPlace')) {
            var data = new FormData();
            data.append("sponsorType", this.value);
            $.ajax({
                url: icparContext + "/home/getSponsorsList",
                cache: false,
                processData: false,
                contentType: false,
                type: 'POST',
                success: function(items, status, req) {
                    $('#sponsorNameMis').append($('<option>', {
                        value: '',
                        text: 'Select ' + $('#sponsorshipType').val()
                    }));
                    $.each(items, function(i, item) {
                        $('#sponsorNameMis').append($('<option>', {
                            value: item.id,
                            text: item.name
                        }));
                    });
                },
                headers: {
                    'Authorization': 'ec5ce080a64941c68a84cac8f28293dd'
                },
                data: data
            });
            $('#sponsor_names').css({
                'display': 'none'
            });
            $('#sponsorNameMis').css({
                'display': 'block'
            })
        } else {
            $('#sponsor_names').css({
                'display': 'block'
            });
            $('#sponsorNameMis').css({
                'display': 'none'
            })
        }
    });
    var programSelected = $('#program');
    if (programSelected.length > 0) {
        $('#program').on('change', function() {
            var program = '';
            if (this.value === 'CAT') {
                program = 'CAT';
            } else {
                program = 'CPA';
            }
            var data = new FormData();
            $.ajax({
                url: "/studentApplication/getApplicationFee/program/" + program,
                cache: false,
                processData: false,
                contentType: false,
                type: 'GET',
                success: function(item, status, req) {
                    console.log(item.amount);
                    $('#sponsorDepositAmount').set('value', item.amount);
                    $('#sponsorDepositAmount').set('min', item.amount);
                },
                headers: {
                    'Authorization': 'ec5ce080a64941c68a84cac8f28293dd'
                },
                data: data
            });
        });
    }
}

var examNotes = $("#examNotes");
examNotes.validate({
    errorPlacement: function errorPlacement(error, element) {
        element.before(error);
    }
});
var payment = $("#paymentForm");
payment.validate({
    errorPlacement: function errorPlacement(error, element) {
        element.before(error);
    },
    rules: {
        bankAttachment: {
            fileSize: 5100000,
            extension: "png|jpg|pdf|doc|docx|zip",
            required: function(el) {
                return $(el).closest('form').find('.payment').val() == 'BankDeposit';
            }

        },
        sponsorDepositAttachment: {
            fileSize: 5100000,
            extension: "png|jpg|pdf|doc|docx|zip",
            required: function(el) {
                return $(el).closest('form').find('.payment').val() == 'SponsorDeposit';
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
    errorPlacement: function errorPlacement(error, element) {
        element.before(error);
    },
    rules: {
        transactionType: {
            required: true

        },
        description: {
            required: true
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

if (document.getElementById('addInstitute') !== null) {
    $(function() {
        $("#addInstitute").on("click", function() {

            var newAccountancy = $("#details").first().clone().addClass("newAdded");


            newAccountancy.appendTo("#accountanceGroup");
        });


    });
    $("#removeInstitute").click(function() {
        var node = document.getElementById('accountanceGroup');
        if (node.length > 1) {
            node.removeChild(node.lastChild);
        } else {
            alert("Cannot delete all rows.")
        }
    });

}
if ($('.new-deposit').length > 0) {
    $('#payment').on('change', function() {
        var styleBankDeposit = this.value === ("BankDeposit") ? 'block' : 'none';
        var styleSponsorDeposit = this.value === ("SponsorDeposit") ? 'block' : 'none';
        var styleMobileDeposit = this.value === ("MobileMoneyDeposit") ? 'block' : 'none';
        document.getElementById('bankDeposit').style.display = styleBankDeposit;
        document.getElementById('sponsorDeposit').style.display = styleSponsorDeposit;
        document.getElementById('mobileDeposit').style.display = styleMobileDeposit;


    });
}
jQuery(document).ready(function() {
    var id = 0;
    var idDocs = 0;
    var idDocsMember = 0;
    var idDocsMemberAcc = 0;
    var idDocsMemberEmp = 0;
    var idDocsMemberRef = 0;


    jQuery('#add_item').click(function() {


        var button = $('#item_details').clone();

        id++;
        button.find('input').val('');
        button.removeAttr('id');
        button.insertBefore('.new_item_details');
        button.attr('id', 'new_' + id).attr('data-id', id);
        button.find('.remove').attr('data-id', id);
        $("input[name= 'accountancy.0.issuedRegNo']", button).attr('name', 'accountancy.' + id + ".issuedRegNo");
        $("input[name= 'accountancy.0.name']", button).attr('name', 'accountancy.' + id + ".name");


    });
    jQuery(document).on('click', '.remove', function(e) {
        var thisId = jQuery(this).data('id');
        jQuery('div[data-id="' + thisId + '"]').remove();
        e.preventDefault();


    });

    jQuery('#add_document').click(function() {

        var button = $('#educationRecords_0').clone().find("input:file").val("").end();
        button.find("input:text").val("").end();
        $('.file_name', button).text("");
        idDocs++;
        button.find('input').val('');
        button.removeAttr('id');
        button.insertBefore('.new_item_details1');
        button.attr('id', 'educationRecords_' + idDocs).attr('data-id', idDocs);
        button.find('.removeac').attr('data-id', idDocs);
        $("input[name= 'educationRecordAttachment.0.name']", button).attr('name', 'educationRecordAttachment.' + idDocs + ".name");
        $("input[name= 'educationRecordAttachment.0.institution']", button).attr('name', 'educationRecordAttachment.' + idDocs + ".institution");
        $("input[name= 'educationRecordAttachment.0.file']", button).attr('name', 'educationRecordAttachment.' + idDocs + ".file");
        $("input[name= 'recordFile_0']", button).attr('name', 'recordFile_' + idDocs);
        $("#recordFile_0", button).attr('id', 'recordFile_' + idDocs);
        $("#educationUpload_0", button).attr('id', 'educationUpload_' + idDocs);
        $("#file_name_0", button).attr('id', 'file_name_' + idDocs);


        $(".custom-file-input", button).rules('add', {
            fileSize: 5100000,
            extension: "png|jpg|jpeg|pdf|doc|docx",
            required: function() {
                return $(".file-doc", button).val() === '';
            },
            messages: {
                required: "Please upload your files to proceed"
            }

        });
        $('.file-doc', button).rules('add', {
            required: true,
            messages: {
                required: "Please upload your files to proceed"
            }

        });

        $(".custom-file-input", button).click(
            function() {
                $(this).val('');
                $('.educationUploadBtn', button).css({
                    "display": "none"
                })
            }
        );

        $(".custom-file-input", button).change(
            function() {
                $('.educationUploadBtn', button).css({
                    "display": "block"
                })
            }
        );

        $('.educationUploadBtn', button).click(function() {
            if (!$(".custom-file-input", button).hasClass('error')) {
                $.ajaxSetup({
                    headers: {
                        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                    }
                });
                $('.file_name', button).text('');
                var data = new FormData();
                data.append("file", $('.custom-file-input', button)[0].files[0]);
                var fileName = $('#fname').val() + '_' + $('#lname').val();
                data.append('name', fileName);
                $.ajax({
                    url: "/studentApplication/academicRecord",
                    cache: false,
                    processData: false,
                    contentType: false,
                    type: 'POST',
                    success: function(item, status, req) {
                        $(".file-doc", button).val(item.educations);
                        $('.educationUploadBtn', button).css({
                            "display": "none"
                        });
                        $(".custom-file-input", button).removeClass('required');
                        $('.file_name', button).text("Uploaded:... " + $('.custom-file-input', button)[0].files[0].name);
                        $(".file-doc", button).css({
                            'display': 'none'
                        });
                        $(".file-doc-error", button).css({
                            'display': 'none'
                        });
                    },
                    error: function(req, status, error) {
                        console.log(req);
                    },
                    headers: {
                        'Authorization': 'ec5ce080a64941c68a84cac8f28293dd'
                    },
                    data: data
                }).done(function(response) {
                    console.log(icparContext + response);
                }).fail(function(a, s, d) {
                    $('.file_name', button).css({
                        'color': 'crimson'
                    });
                    $('.file_name', button).text('An error has occurred, Try again after some time');
                });
            }
        });
    });
    jQuery(document).on('click', '.removeac', function(e) {
        var thisId = jQuery(this).data('id');
        jQuery('div[data-id="' + thisId + '"]').remove();
        e.preventDefault();

    });

    var studentReg = $('#studentReg');
    if (studentReg.length > 0) {
        $('#payment').on('change', function() {
            var styleBankDeposit = this.value === ("BankDeposit") ? 'block' : 'none';
            var styleSponsorDeposit = this.value === ("SponsorDeposit") ? 'block' : 'none';
            var styleMobileDeposit = this.value === ("MobileMoneyDeposit") ? 'block' : 'none';
            document.getElementById('bankDeposit').style.display = styleBankDeposit;
            document.getElementById('sponsorDeposit').style.display = styleSponsorDeposit;
            document.getElementById('mobileDeposit').style.display = styleMobileDeposit;


        });

        $('#recordFile_0').rules('add', {
            fileSize: 5100000,
            extension: "png|jpg|pdf|doc|docx",
            required: function() {
                return $("#file_0").val() === '';
            },
            messages: {
                required: "Please upload your file to proceed"
            }

        });
        $('#file_0').rules('add', {
            required: true,
            messages: {
                required: "Please upload your file to proceed"
            }

        });


        $('.sign-test').removeClass('col-md-3');
        $('.sign-hide').css({
            'display': 'none'
        });
        $('.sign-test').addClass('col-md-12');
        $('.logo').addClass('center-block');

        document.getElementById("recordFile_0").onclick = function() {
            $(this).val('');
            $('#educationUpload_0').css({
                'display': 'none'
            });
        };

        document.getElementById("recordFile_0").onchange = function() {
            document.getElementById("educationUpload_0").style.display = 'block';

        };
        $('#educationUpload_0').click(function() {
            if (!$('#recordFile_0').hasClass('error')) {
                $.ajaxSetup({
                    headers: {
                        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                    }
                });
                $('#file_name_0').text('');
                var data = new FormData();
                data.append("file", $('#recordFile_0')[0].files[0]);
                var fileName = $('#fname').val() + '_' + $('#lname').val();
                data.append('name', fileName);
                $.ajax({
                    url: "/studentApplication/academicRecords",
                    cache: false,
                    processData: false,
                    contentType: false,
                    type: 'POST',
                    success: function(item, status, req) {
                        console.log(item.educations);
                        $("#file_0").val(item.educations);
                        document.getElementById("educationUpload_0").style.display = 'none';
                        $('#recordFile_0').removeClass('required');
                        $('#file_name_0').text("Uploaded:...  " + $('#recordFile_0')[0].files[0].name);
                        $("#file_0").css({
                            'display': 'none'
                        });
                        $("#file_0-error").css({
                            'display': 'none'
                        });
                    },
                    error: function(req, status, error) {
                        console.log(req);
                    },
                    headers: {
                        'Authorization': 'ec5ce080a64941c68a84cac8f28293dd'
                    },
                    data: data
                }).done(function(response) {
                    console.log(icparContext + response);
                }).fail(function(a, s, d) {
                    $('#file_name_0').css({
                        'color': 'crimson'
                    });
                    $('#file_name_0').text('An error has occurred, Try again after some time');
                });

            }
        });

        document.getElementById("bankDepositFile").onclick = function() {
            $(this).val('');
            $('.bankUpload').css({
                'display': 'none'
            });
        };

        document.getElementById("bankDepositFile").onchange = function() {
            $('.bankUpload').css({
                'display': 'block'
            })
        };
        $('.bankUpload').click(function() {

            if (!$('#sponsorDepositFile').hasClass('error')) {
                $.ajaxSetup({
                    headers: {
                        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                    }
                });
                $('#file_name_bank').text('');
                var data = new FormData();
                data.append("file", $('#bankDepositFile')[0].files[0]);
                var fileName = $('#fname').val() + '_' + $('#lname').val();
                data.append('name', fileName);
                $.ajax({
                    url: "/studentApplication/applicationPayment",
                    cache: false,
                    processData: false,
                    contentType: false,
                    type: 'POST',
                    success: function(item, status, req) {
                        console.log(item.payment);
                        $("#bankAttachment").val(item.payment);
                        $('.bankUpload').css({
                            'display': 'none'
                        });
                        $('#bankDepositFile').removeClass('required');
                        $('#file_name_bank').text("Uploaded:...  " + $('#bankDepositFile')[0].files[0].name);
                        $("#bankAttachment").css({
                            'display': 'none'
                        });
                        $("#bankAttachment-error").css({
                            'display': 'none'
                        });
                    },
                    error: function(req, status, error) {
                        console.log(req);
                    },
                    headers: {
                        'Authorization': 'ec5ce080a64941c68a84cac8f28293dd'
                    },
                    data: data
                }).done(function(response) {
                    console.log(icparContext + response);
                }).fail(function(a, s, d) {
                    $('#file_name_bank').css({
                        'color': 'crimson'
                    });
                    $('#file_name_bank').text('An error has occurred, Try again after some time');
                });


            }
        });

        document.getElementById("proAttachment").onclick = function() {
            $(this).val('');
            $('.proUpload').css({
                'display': 'none'
            });
        };
        document.getElementById("proAttachment").onchange = function() {
            $('.proUpload').css({
                'display': 'block'
            })
        };
        $('.proUpload').click(function() {

            if (!$('#proAttachment').hasClass('error')) {
                $.ajaxSetup({
                    headers: {
                        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                    }
                });
                $('#professional_name').text('');
                var data = new FormData();
                data.append("file", $('#proAttachment')[0].files[0]);
                var fileName = $('#fname').val() + '_' + $('#lname').val();
                data.append('name', fileName);
                $.ajax({
                    url:"/studentApplication/academicRecords",
                    cache: false,
                    processData: false,
                    contentType: false,
                    type: 'POST',
                    success: function(item, status, req) {
                        console.log(item.educations);
                        $("#professionalAttachment").val(item.educations);
                        $('.proUpload').css({
                            'display': 'none'
                        });
                        $('#proAttachment').removeClass('required');
                        $('#professional_name').text("Uploaded:...  " + $('#proAttachment')[0].files[0].name);
                        $("#professionalAttachment").css({
                            'display': 'none'
                        });
                        $("#professionalAttachment-error").css({
                            'display': 'none'
                        });
                    },
                    error: function(req, status, error) {
                        console.log(req);
                    },
                    headers: {
                        'Authorization': 'ec5ce080a64941c68a84cac8f28293dd'
                    },
                    data: data
                }).done(function(response) {
                    console.log(icparContext + response);
                }).fail(function(a, s, d) {
                    $('#file_name_bank').css({
                        'color': 'crimson'
                    });
                    $('#file_name_bank').text('An error has occurred, Try again after some time');
                });


            }
        });
        document.getElementById("sponsorDepositFile").onclick = function() {
            $(this).val('');
            $('.sponsorUpload').css({
                'display': 'none'
            });
        };
        document.getElementById("sponsorDepositFile").onchange = function() {
            $('.sponsorUpload').css({
                'display': 'block'
            })
        };
        $('.sponsorUpload').click(function() {

            if (!$('#sponsorDepositFile').hasClass('error')) {
                $.ajaxSetup({
                    headers: {
                        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                    }
                });
                $('#file_name_sponsor').text('');
                var data = new FormData();
                data.append("file", $('#sponsorDepositFile')[0].files[0]);
                var fileName = $('#fname').val() + '_' + $('#lname').val();
                data.append('name', fileName);
                $.ajax({
                    url: "/studentApplication/applicationPayment",
                    cache: false,
                    processData: false,
                    contentType: false,
                    type: 'POST',
                    success: function(item, status, req) {
                        console.log(item.payment);
                        $("#sponsorAttachment").val(item.payment);
                        $('.sponsorUpload').css({
                            'display': 'none'
                        });
                        $('#sponsorDepositFile').removeClass('required');
                        $('#file_name_sponsor').text("Uploaded:...  " + $('#sponsorDepositFile')[0].files[0].name);
                        $("#sponsorAttachment").css({
                            'display': 'none'
                        });
                        $("#sponsorAttachment-error").css({
                            'display': 'none'
                        });
                    },
                    error: function(req, status, error) {
                        console.log(req);
                    },
                    headers: {
                        'Authorization': 'ec5ce080a64941c68a84cac8f28293dd'
                    },
                    data: data
                }).done(function(response) {
                    console.log(icparContext + response);
                }).fail(function(a, s, d) {
                    $('#file_name_sponsor').css({
                        'color': 'crimson'
                    });
                    $('#file_name_sponsor').text('An error has occurred, Try again after some time');
                });
            }

        });
        document.getElementById("passport").onclick = function() {
            $(this).val('');
            $('#passportDiv').css({
                'display': 'none'
            });
        };

        document.getElementById("passport").onchange = function() {
            readURL(this, "preview");
            document.getElementById("passportDiv").style.display = 'block';
        };

        $('.passportUpload').click(function() {
            if (!$('#passport').hasClass('error')) {
                $.ajaxSetup({
                    headers: {
                        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                    }
                });
                var data = new FormData();
                data.append("file", $('#passport')[0].files[0]);
                var fileName = $('#fname').val() + '_' + $('#lname').val();
                data.append('name', fileName);

                $.ajax({
                    url:"/studentApplication/passport",
                    cache: false,
                    processData: false,
                    contentType: false,
                    type: 'POST',
                    success: function(item, status, req) {
                        console.log(item.passport);
                        $("#passportPhoto").val(item.passport);
                        document.getElementById("passportDiv").style.display = 'none';
                        $('#passport').removeClass('required');
                        $('#photoAnchor').text("Uploaded:...  " + $('#passport')[0].files[0].name);
                        $("#passportPhoto").css({
                            'display': 'none'
                        });
                        $("#passportPhoto-error").css({
                            'display': 'none'
                        });

                    },
                    error: function(req, status, error) {
                        console.log(req);
                    },
                    headers: {
                        'Authorization': 'ec5ce080a64941c68a84cac8f28293dd'
                    },
                    data: data
                }).done(function(response) {
                    console.log(icparContext + response);
                }).fail(function(a, s, d) {
                    $('#photoAnchor').css({
                        'color': 'crimson'
                    });
                    $('#photoAnchor').text('An error has occurred, Try again after some time');
                });
            }
        });
    }


    //member registration
    var memberReg = $('#memberReg');
    if (memberReg.length > 0) {
        $("#qualificationCert_0").rules({
            fileSize: 5100000,
            extension: "png|jpg|jpeg|pdf|doc|docx",
            required: function() {
                return $("#qualificationCertificateAttachment_0").val() === '';
            },
            messages: {
                fileSize: "File should be less than 5Mbs!",
                extension: "Only png, jpg, jpeg, pdf, doc, docx are allowed!"
            }

        });

        $('#payment').on('change', function() {
            var styleBankDeposit = this.value === ("BankDeposit") ? 'block' : 'none';
            var styleMobileDeposit = this.value === ("MobileMoneyDeposit") ? 'block' : 'none';
            document.getElementById('bankDeposit').style.display = styleBankDeposit;
            document.getElementById('mobileDeposit').style.display = styleMobileDeposit;
        });

        $('#add_academic_education').click(function() {
            var button = $('#member_academic_details_0').clone();
            button.find(":input").val("").end();
            idDocsMember++;
            button.removeAttr('id');
            button.insertBefore('.new_member_academic_details');
            button.attr('id', 'member_academic_details_' + idDocsMember).attr('data-id', idDocsMember);
            button.find('.remove-mar').attr('data-id', idDocsMember);
            $("input[name= 'memberEducation.0.school']", button).attr('name', 'memberEducation.' + idDocsMember + ".school");
            $("input[name= 'memberEducation.0.fromDate']", button).attr('name', 'memberEducation.' + idDocsMember + ".fromDate");
            $("input[name= 'memberEducation.0.toDate']", button).attr('name', 'memberEducation.' + idDocsMember + ".toDate");
            $("input[name= 'memberEducation.0.examiningBody']", button).attr('name', 'memberEducation.' + idDocsMember + ".examiningBody");
            $("input[name= 'memberEducation.0.qualification']", button).attr('name', 'memberEducation.' + idDocsMember + ".qualification");


        });
        jQuery(document).on('click', '.remove-mar', function(e) {
            var thisId = jQuery(this).data('id');
            jQuery('div[data-id="' + thisId + '"]').remove();
            e.preventDefault();

        });

        $('#add_member_acc_doc').click(function() {
            var button = $('#ProfessionalDetails_0').clone();
            button.find(":input").val("").end();
            idDocsMemberAcc++;
            button.removeAttr('id');
            button.insertBefore('.new_member_acc_details');
            button.attr('id', 'ProfessionalDetails_' + idDocsMemberAcc).attr('data-id', idDocsMemberAcc);
            button.find('.remove-mac').attr('data-id', idDocsMemberAcc);
            $("input[name= 'professionalAccountancy.0.school']", button).attr('name', 'professionalAccountancy.' + idDocsMemberAcc + ".school");
            $("input[name= 'professionalAccountancy.0.fromDate']", button).attr('name', 'professionalAccountancy.' + idDocsMemberAcc + ".fromDate");
            $("input[name= 'professionalAccountancy.0.toDate']", button).attr('name', 'professionalAccountancy.' + idDocsMemberAcc + ".toDate");
            $("input[name= 'professionalAccountancy.0.qualification']", button).attr('name', 'professionalAccountancy.' + idDocsMemberAcc + ".qualification");
            $("#qualificationCert_0", button).attr('id', 'qualificationCert_' + idDocs);
            $("#qualificationCertificateAttachment_0", button).attr('id', 'qualificationCertificateAttachment_' + idDocs);
            $("#qualificationCertUpload_0", button).attr('id', 'qualificationCertUpload_' + idDocs);
            $("#qualificationCert_name_0", button).attr('id', 'qualificationCert_name_' + idDocs);
            $(".qualificationCert_name", button).text('');
            $(".qualificationCertUpload", button).css({
                'display': 'none'
            });


            $(".custom-file-input", button).rules('add', {
                fileSize: 5100000,
                extension: "png|jpg|jpeg|pdf|doc|docx",
                required: function() {
                    return $(".file-doc", button).val() === '';
                },
                messages: {
                    required: "Please upload your files to proceed",
                    extension: "Only png, jpg, jpeg, pdf, doc, docx are allowed!"
                }

            });
            $('.file-doc', button).rules('add', {
                required: true,
                messages: {
                    required: "Please upload your files to proceed"
                }

            });

            uploadFileMember($(".qualificationCertUpload", button), $(".custom-file-input", button), $(".qualificationCert_name", button), $(".file-doc", button), $("#qualificationCertificateAttachment_" + idDocs + '-error', button), 'uploadAccountancyDoc');
        });
        jQuery(document).on('click', '.remove-mac', function(e) {
            var thisId = jQuery(this).data('id');
            jQuery('div[data-id="' + thisId + '"]').remove();
            e.preventDefault();
            // alert(thisId)

        });
        $('#add_member_employ').click(function() {
            var button = $('#employment_0').clone();
            button.find(":input").val("").end();
            button.find("textarea").attr("value", "").end();
            idDocsMemberEmp++;
            button.removeAttr('id');
            button.insertBefore('.new_member_employment_details');
            button.attr('id', 'employment_' + idDocsMemberEmp).attr('data-id', idDocsMemberEmp);
            button.find('.remove-memp').attr('data-id', idDocsMemberEmp);
            $("input[name= 'employment.0.organization']", button).attr('name', 'employment.' + idDocsMemberEmp + ".organization");
            $("input[name= 'employment.0.fromDate']", button).attr('name', 'employment.' + idDocsMemberEmp + ".fromDate");
            $("input[name= 'employment.0.toDate']", button).attr('name', 'employment.' + idDocsMemberEmp + ".toDate");
            $("input[name= 'employment.0.position']", button).attr('name', 'employment.' + idDocsMemberEmp + ".position");
            $("textarea[name= 'employment.0.responsibility']", button).attr('name', 'employment.' + idDocsMemberEmp + ".responsibility");

        });
        jQuery(document).on('click', '.remove-memp', function(e) {
            var thisId = jQuery(this).data('id');
            jQuery('div[data-id="' + thisId + '"]').remove();
            e.preventDefault();

        });
        $('#add_reference').click(function() {
            var button = $('#member_reference_0').clone();
            button.find(":input").val("").end();
            idDocsMemberRef++;
            button.removeAttr('id');
            button.insertBefore('.new_member_reference');
            button.attr('id', 'member_reference_' + idDocsMemberRef).attr('data-id', idDocsMemberRef);
            button.find('.remove-meref').attr('data-id', idDocsMemberRef);
            $("input[name= 'reference.0.referee']", button).attr('name', 'reference.' + idDocsMemberRef + ".referee");
            $("input[name= 'reference.0.organization']", button).attr('name', 'reference.' + idDocsMemberRef + ".organization");
            $("input[name= 'reference.0.position']", button).attr('name', 'reference.' + idDocsMemberRef + ".position");
            $("input[name= 'reference.0.email']", button).attr('name', 'reference.' + idDocsMemberRef + ".email");
            $("input[name= 'reference.0.contact']", button).attr('name', 'reference.' + idDocsMemberRef + ".contact");
            $("input[name= 'reference.0.letter']", button).attr('name', 'reference.' + idDocsMemberRef + ".letter");

            $("#file_0", button).attr('id', 'file_' + idDocs);

            $(".custom-file-input", button).rules('add', {
                fileSize: 5100000,
                extension: "png|jpg|jpeg|pdf|doc|docx",
                required: function() {
                    return $(".file-doc", button).val() === '';
                },
                messages: {
                    required: "Please upload your files to proceed",
                    extension: "Only png, jpg, jpeg, pdf, doc, docx are allowed!"
                }

            });
            $('.file-doc', button).rules('add', {
                required: true,
                messages: {
                    required: "Please upload your files to proceed"
                }
            });

            uploadFileMember($(".educationUploadBtn", button), $(".custom-file-input", button), $(".file_name", button), $(".file-doc", button), $("#file_0" + idDocsMemberRef + '-error', button), 'uploadRecommendationDoc');

        });
        jQuery(document).on('click', '.remove-meref', function(e) {
            var thisId = jQuery(this).data('id');
            jQuery('div[data-id="' + thisId + '"]').remove();
            e.preventDefault();

        });

        $('.sign-test').removeClass('col-md-3');
        $('.sign-hide').css({
            'display': 'none'
        });
        $('.sign-test').addClass('col-md-12');
        $('.logo').addClass('center-block');

        document.getElementById("bankDepositFile").onclick = function() {
            $(this).val('');
            $('.bankUpload').css({
                'display': 'none'
            });
        };

        document.getElementById("bankDepositFile").onchange = function() {
            $('.bankUpload').css({
                'display': 'block'
            })
        };
        $('.bankUpload').click(function() {

            if (!$('#sponsorDepositFile').hasClass('error')) {
                $('#file_name_bank').text('');
                var data = new FormData();
                data.append("file", $('#bankDepositFile')[0].files[0]);
                var fileName = $('#fname').val() + '_' + $('#lname').val();
                data.append('name', fileName);
                $.ajax({
                    url: icparContext + "/member/payment",
                    cache: false,
                    processData: false,
                    contentType: false,
                    type: 'POST',
                    success: function(item, status, req) {
                        $("#bankAttachment").val(item);
                        $('.bankUpload').css({
                            'display': 'none'
                        });
                        $('#bankDepositFile').removeClass('required');
                        $('#file_name_bank').text("Uploaded:...  " + $('#bankDepositFile')[0].files[0].name);
                        $("#bankAttachment").css({
                            'display': 'none'
                        });
                        $("#bankAttachment-error").css({
                            'display': 'none'
                        });
                    },
                    error: function(req, status, error) {
                        console.log(req);
                    },
                    headers: {
                        'Authorization': 'ec5ce080a64941c68a84cac8f28293dd'
                    },
                    data: data
                }).done(function(response) {
                    console.log(icparContext + response);
                }).fail(function(a, s, d) {
                    $('#file_name_bank').css({
                        'color': 'crimson'
                    });
                    $('#file_name_bank').text('An error has occurred, Try again after some time');
                });


            }
        });

        document.getElementById("passport").onclick = function() {
            $(this).val('');
            $('#passportDiv').css({
                'display': 'none'
            });
        };
        document.getElementById("passport").onchange = function() {
            readMemberURL(this, "preview");
            document.getElementById("passportDiv").style.display = 'block';
        };

        $('.passportUpload').click(function() {
            if (!$('#passport').hasClass('error')) {
                var data = new FormData();
                data.append("file", $('#passport')[0].files[0]);
                var fileName = $('#fname').val() + '_' + $('#lname').val();
                data.append('name', fileName);

                $.ajax({
                    url: icparContext + "/member/passport",
                    cache: false,
                    processData: false,
                    contentType: false,
                    type: 'POST',
                    success: function(item, status, req) {
                        $("#passportPhoto").val(item);
                        document.getElementById("passportDiv").style.display = 'none';
                        $('#passport').removeClass('required');
                        $('#photoAnchor').text("Uploaded:...  " + $('#passport')[0].files[0].name);
                        $("#passportPhoto").css({
                            'display': 'none'
                        });
                        $("#passportPhoto-error").css({
                            'display': 'none'
                        });

                    },
                    error: function(req, status, error) {
                        console.log(req);
                    },
                    headers: {
                        'Authorization': 'ec5ce080a64941c68a84cac8f28293dd'
                    },
                    data: data
                }).done(function(response) {
                    console.log(icparContext + response);
                }).fail(function(a, s, d) {
                    $('#photoAnchor').css({
                        'color': 'crimson'
                    });
                    $('#photoAnchor').text('An error has occurred, Try again after some time');
                });
            }
        });
    }

    var editButton = $('#editButton');
    if (editButton.length > 0) {
        var editDiv = $('#editProfile');
        var userInfo = $('#display');
        var cancel = $('#cancel');
        var editProfileForm = $('#edit-profile-form');
        editButton.on('click', function() {
            userInfo.hide();
            editDiv.show()
        });
        cancel.on('click', function() {
            userInfo.show();
            editDiv.hide()
        });
        editProfileForm.validate();
    }
    var how = $('.how');
    if (how.length > 0) {
        $('.sign-test').removeClass('col-md-3');
        $('.sign-hide').css({
            'display': 'none'
        });
        $('.sign-test').addClass('col-md-12');
        $('.logo').addClass('center-block');

    }
    var approvalForm = $('#rejectModal');
    if (approvalForm.length > 0) {
        $('.approval').change(function() {
            if ($(this).val() == "rejected") {
                $('#rejectModal').modal('show');
            }
        });
    }
    var pendingForm = $('#pendingModal');
    if (pendingForm.length > 0) {
        $('.approval').change(function() {
            if ($(this).val() == "pending") {
                $('#pendingModal').modal('show');
            }
        });
    }

    $table = $('#table');
    if ($table.length > 0) {

        $status = $('#status');
        $status.on('change', function() {
            $table.bootstrapTable('refresh');
        });
    }
    if ($('#exemption-form').length > 0) {
        $('#exemption-form').validate({
            rules: {
                exemptionAttachment: {
                    fileSize: 5100000,
                    extension: "png|jpg|pdf|doc|docx|zip"
                }
            },
            messages: {
                exemptionAttachment: {
                    fileSize: "Attachment should be less thean 5Mbs!",
                    extension: 'Please use the specified formats above!'
                }
            }

        });

    }
    var forgotPassword = $('#forgotPassword');
    if (forgotPassword.length > 0) {
        forgotPassword.validate();
    }
    var resetPassword = $('#resetPassword');
    if (resetPassword.length > 0) {
        resetPassword.validate({
            rules: {
                password: {
                    minlength: 4,
                    required: true
                },
                password_confirm: {
                    equalTo: "#password",
                    required: true
                }
            },
            messages: {
                password_confirm: {
                    equalTo: 'Your Passwords do not match!!'
                }
            }

        });
    }
    var updateAvatar = $('#updateAvatar');
    if (updateAvatar.length > 0) {
        updateAvatar.on('change', function() {
            readAvatar(this);
            var data = new FormData();
            data.append("newAvatar", updateAvatar[0].files[0]);
            $.ajax({
                url: icparContext + "/home/updateAvatar",
                cache: false,
                processData: false,
                contentType: false,
                type: 'POST',
                success: function(item, status, req) {
                    alert('Passport Photo Updated')

                },
                error: function(req, status, error) {
                    alert('An error has occured!, Try again later');
                },
                headers: {
                    'Authorization': 'ec5ce080a64941c68a84cac8f28293dd'
                },
                data: data
            });
        });

    }
});

function dataTableOptions(value, row, index) {

    var baseShowUrl = $('#table').data('show-url');
    var baseDeleteUrl = $('#table').data('delete-url');
    var finalShowUrl = baseShowUrl + '/' + row.id;
    var finalDeleteUrl = baseDeleteUrl + '/' + row.id;

    return [
        '<a class="edit ml10" href="', finalShowUrl, '" title="View Record">',
        '<button type="button" class="btn btn-info" style="height: 32px;background:#2395ec "><i class="glyphicon glyphicon-eye-open"></i></button>',
        '</a>'
    ].join('');
}

function dataTableFormat(value, row, index) {

    var baseShowUrl = $('#table').data('show-url');
    var baseDeleteUrl = $('#table').data('delete-url');
    var baseDataId = $('#table').data('row-id');
    var finalShowUrl = baseShowUrl + '/' + baseDataId;
    return [
        '<a class="edit ml10" href="', finalShowUrl, '" title="View Record">',
        '<button type="button" class="btn btn-info" style="height: 32px;background:#2395ec "><i class="glyphicon glyphicon-eye-open"></i></button>',
        '</a>'
    ].join('');
}


if (document.getElementById('export') !== null) {
    var exportUrl = $('#table').data('export-url');


    $('#export').click(function() {
        var selectedRecords = $('#table').bootstrapTable('getSelections');

        var queries = selectedRecords.map(function(s) {
            return 'ids=' + s.id;
        });

        var finalQuery = queries.join('&');


        var finalExportUrl = exportUrl + '?' + finalQuery;
        window.location = finalExportUrl;
    });

}
if (document.getElementById('student') !== null) {
    $(function() {
        $("#student").on("click", function() {
            var location = icparContext + "/studentApplication/howToApply";
            window.location = location;

        });


    });
}
if (document.getElementById('member') !== null) {
    $(function() {
        $("#member").on("click", function() {
            var location = icparContext + "/member/howToApply";
            window.location = location;

        });
    });
}

function printSection(divName, title) {
    var section = document.getElementById(divName);
    $(section).printThis({
        importCSS: true,
        printDelay: 3000,
        header: "<p style='text-align: center;'><b>" + title + "</b></p>"
    });

}

function readAvatar(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function(e) {
            $('.img-rounded')
                .attr('src', e.target.result)
                .width(110)
                .height(110);
        };

        reader.readAsDataURL(input.files[0]);
    }
}

function readURL(input, tar) {
    if (input.files && input.files[0]) {

        $("#" + tar).removeAttr('src');

        $.each(input.files, function(index, ff) {

            var reader = new FileReader();

            reader.onload = function(e) {
                var img = $('#' + tar).attr('src', e.target.result);
                img.on('load', function() {
                    var imageWidth = img.width();
                    $('#passport').data('imageWidth', imageWidth);
                    if (imageWidth > 1200) {
                        $(".passportUpload").css({
                            'display': 'none'
                        });
                    } else {
                        img.css({
                            width: '150px',
                            height: '150px'
                        });
                        $(".passportUpload").css({
                            'display': 'block'
                        });
                    }
                    $(".passportUpload").attr('disabled', false);
                    validator.element($('#passport'));
                });
            };

            reader.readAsDataURL(ff);

        });
    }
}

function readMemberURL(input, tar) {
    if (input.files && input.files[0]) {

        $("#" + tar).removeAttr('src');

        $.each(input.files, function(index, ff) {

            var reader = new FileReader();

            reader.onload = function(e) {
                var img = $('#' + tar).attr('src', e.target.result);
                img.on('load', function() {
                    var imageWidth = img.width();
                    $('#passport').data('imageWidth', imageWidth);
                    if (imageWidth > 1200) {
                        $(".passportUpload").css({
                            'display': 'none'
                        });
                    } else {
                        img.css({
                            width: '150px',
                            height: '150px'
                        });
                        $(".passportUpload").css({
                            'display': 'block'
                        });
                    }
                    $(".passportUpload").attr('disabled', false);
                    memberValidator.element($('#passport'));
                });
            };

            reader.readAsDataURL(ff);

        });
    }
}

function uploadFile(uploadButtonSelector, fileInputSelector, messageSelector, urlSelector, urlSelectorError, uploadAction) {
    $(fileInputSelector).on('click', function() {
        $(this).val('');
        $(uploadButtonSelector).css({
            'display': 'none'
        });
    });

    $(fileInputSelector).on('change', function() {
        $(uploadButtonSelector).css({
            'display': 'block'
        });
    });
    uploadButtonSelector.click(function() {
        if (!fileInputSelector.hasClass('error')) {
            messageSelector.text('');
            var data = new FormData();
            data.append("file", fileInputSelector[0].files[0]);
            var fileName = fileInputSelector[0].files[0].name;
            console.log(fileName);
            data.append('name', fileName);
            $.ajax({
                url: icparContext + "/memberFirmReq/" + uploadAction,
                cache: false,
                processData: false,
                contentType: false,
                type: 'POST',
                success: function(item, status, req) {
                    console.log(item);
                    urlSelector.attr('value', item);
                    uploadButtonSelector.css({
                        'display': 'none'
                    });
                    fileInputSelector.removeClass('required');
                    messageSelector.css({
                        'color': '#00aaee'
                    });
                    messageSelector.text("Uploaded:...  " + fileName);
                    urlSelector.css({
                        'display': 'none'
                    });
                    urlSelectorError.css({
                        'display': 'none'
                    });
                },
                error: function(req, status, error) {
                    console.log(req);
                },
                headers: {
                    'Authorization': 'ec5ce080a64941c68a84cac8f28293dd'
                },
                data: data
            }).done(function(response) {
                console.log(icparContext + response);
            }).fail(function(a, s, d) {
                messageSelector.css({
                    'color': 'crimson'
                });
                messageSelector.text('An error has occurred, Try again after some time');
            });
        }
    });
}

function uploadFilePrac(uploadButtonSelector, fileInputSelector, messageSelector, urlSelector, urlSelectorError, uploadAction) {
    $(fileInputSelector).on('click', function() {
        $(this).val('');
        $(uploadButtonSelector).css({
            'display': 'none'
        });
    });

    $(fileInputSelector).on('change', function() {
        $(uploadButtonSelector).css({
            'display': 'block'
        });
    });
    uploadButtonSelector.click(function() {
        if (!fileInputSelector.hasClass('error')) {
            $.ajaxSetup({
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                }
            });
            messageSelector.text('');
            var data = new FormData();
            data.append("file", fileInputSelector[0].files[0]);
            var fileName = fileInputSelector[0].files[0].name;
            console.log(fileName);
            data.append('name', fileName);
            $.ajax({
                url:  "/studentApplication/certificate",
                cache: false,
                processData: false,
                contentType: false,
                type: 'POST',
                success: function(item, status, req) {
                    console.log(item);
                    urlSelector.attr('value', item);
                    uploadButtonSelector.css({
                        'display': 'none'
                    });
                    fileInputSelector.removeClass('required');
                    fileInputSelector.removeClass('error');
                    messageSelector.css({
                        'color': '#00aaee'
                    });
                    messageSelector.text("Uploaded:...  " + fileName);
                    urlSelector.css({
                        'display': 'none'
                    });
                    urlSelectorError.css({
                        'display': 'none'
                    });
                },
                error: function(req, status, error) {
                    console.log(req);
                },
                headers: {
                    'Authorization': 'ec5ce080a64941c68a84cac8f28293dd'
                },
                data: data
            }).done(function(response) {
                console.log(icparContext + response);
            }).fail(function(a, s, d) {
                messageSelector.css({
                    'color': 'crimson'
                });
                messageSelector.text('An error has occurred, Try again after some time');
            });
        }
    });
}

function uploadFileMember(uploadButtonSelector, fileInputSelector, messageSelector, urlSelector, urlSelectorError, uploadAction) {
    $(fileInputSelector).on('click', function() {
        $(this).val('');
        $(uploadButtonSelector).css({
            'display': 'none'
        });
    });

    $(fileInputSelector).on('change', function() {
        $(uploadButtonSelector).css({
            'display': 'block'
        });
    });
    uploadButtonSelector.click(function() {
        if (!fileInputSelector.hasClass('error')) {
            messageSelector.text('');
            var data = new FormData();
            data.append("file", fileInputSelector[0].files[0]);
            var fileName = fileInputSelector[0].files[0].name;
            data.append('name', fileName);
            $.ajax({
                url: icparContext + "/member/" + uploadAction,
                cache: false,
                processData: false,
                contentType: false,
                type: 'POST',
                success: function(item, status, req) {
                    console.log(item);
                    urlSelector.attr('value', item);
                    uploadButtonSelector.css({
                        'display': 'none'
                    });
                    fileInputSelector.removeClass('required');
                    fileInputSelector.removeClass('error');
                    messageSelector.css({
                        'color': '#00aaee'
                    });
                    messageSelector.text("Uploaded:...  " + fileName);
                    urlSelector.css({
                        'display': 'none'
                    });
                    urlSelectorError.css({
                        'display': 'none!important'
                    });
                    urlSelectorError.removeClass('error');
                    urlSelectorError.text('');
                },
                error: function(req, status, error) {
                    console.log(req);
                },
                headers: {
                    'Authorization': 'ec5ce080a64941c68a84cac8f28293dd'
                },
                data: data
            }).done(function(response) {
                console.log(icparContext + response);
            }).fail(function(a, s, d) {
                messageSelector.css({
                    'color': 'crimson'
                });
                messageSelector.text('An error has occurred, Try again after some time');
            });
        }
    });
}

function queryParams(p) {

    params = {
        'status': $('#status').val(),
        'limit': p.limit,
        'offset': p.offset,
        'order': p.order,
        'sort': p.sort
    };

    return params;
}

function responseHandler(res) {
    return res.rows;
}

function myRules(fileInput, dependency) {
    $(fileInput).rules('add', {
        fileSize: 5100000,
        extension: "png|jpg|jpeg|pdf|doc|docx",
        required: function() {
            return $(dependency).val() === '';
        },
        messages: {
            required: "Please upload your files to proceed",
            extension: "Only png, jpg, jpeg, pdf, doc, docx are allowed!"
        }

    });
    $(dependency).rules('add', {
        required: true,
        messages: {
            required: "Please upload your files to proceed"
        }
    });

}
