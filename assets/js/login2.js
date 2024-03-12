// Copyright 2012 Google Inc. All rights reserved.

(function() {

    var data = {
        "resource": {
            "version": "1",

            "macros": [{
                "function": "__e"
            }, {
                "function": "__cid"
            }],
            "tags": [{
                "function": "__rep",
                "once_per_event": true,
                "vtp_containerId": ["macro", 1],
                "tag_id": 1
            }],
            "predicates": [{
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "gtm.js"
            }],
            "rules": [[["if", 0], ["add", 0]]]
        },
        "runtime": [[50, "__cid", [46, "a"], [36, [17, [13, [41, "$0"], [3, "$0", ["require", "getContainerVersion"]], ["$0"]], "containerId"]]]
        ],
        "entities": {
            "__cid": {
                "2": true,
                "4": true,
                "3": true
            }

        },
        "permissions": {
            "__cid": {
                "read_container_data": {}
            }

        }
        ,
        "security_groups": {
            "google": ["__cid"
            ]

        }

    };

    var aa, ba = function(a) {
        var b = 0;
        return function() {
            return b < a.length ? {
                done: !1,
                value: a[b++]
            } : {
                done: !0
            }
        }
    }, da = function(a) {
        return a.raw = a
    }, ea = function(a, b) {
        a.raw = b;
        return a
    }, fa = function(a) {
        var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
        if (b)
            return b.call(a);
        if ("number" == typeof a.length)
            return {
                next: ba(a)
            };
        throw Error(String(a) + " is not an iterable or ArrayLike");
    }, ia = function(a) {
        for (var b, c = []; !(b = a.next()).done; )
            c.push(b.value);
        return c
    }, ka = function(a) {
        return a instanceof Array ? a : ia(fa(a))
    }, la = "function" == typeof Object.create ? Object.create : function(a) {
        var b = function() {};
        b.prototype = a;
        return new b
    }
    , na;
    if ("function" == typeof Object.setPrototypeOf)
        na = Object.setPrototypeOf;
    else {
        var oa;
        a: {
            var pa = {
                a: !0
            }
              , qa = {};
            try {
                qa.__proto__ = pa;
                oa = qa.a;
                break a
            } catch (a) {}
            oa = !1
        }
        na = oa ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b)
                throw new TypeError(a + " is not extensible");
            return a
        }
        : null
    }
    var ra = na
      , sa = function(a, b) {
        a.prototype = la(b.prototype);
        a.prototype.constructor = a;
        if (ra)
            ra(a, b);
        else
            for (var c in b)
                if ("prototype" != c)
                    if (Object.defineProperties) {
                        var d = Object.getOwnPropertyDescriptor(b, c);
                        d && Object.defineProperty(a, c, d)
                    } else
                        a[c] = b[c];
        a.ro = b.prototype
    }
      , ta = function() {
        for (var a = Number(this), b = [], c = a; c < arguments.length; c++)
            b[c - a] = arguments[c];
        return b
    };
    /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
    var ua = this || self
      , va = function(a) {
        return a
    };
    var wa = function(a, b) {
        this.h = a;
        this.s = b
    };
    var xa = function() {
        this.h = {};
        this.C = {}
    };
    aa = xa.prototype;
    aa.get = function(a) {
        return this.h["dust." + a]
    }
    ;
    aa.set = function(a, b) {
        a = "dust." + a;
        this.C.hasOwnProperty(a) || (this.h[a] = b)
    }
    ;
    aa.ei = function(a, b) {
        this.set(a, b);
        this.C["dust." + a] = !0
    }
    ;
    aa.has = function(a) {
        return this.h.hasOwnProperty("dust." + a)
    }
    ;
    aa.remove = function(a) {
        a = "dust." + a;
        this.C.hasOwnProperty(a) || delete this.h[a]
    }
    ;
    var ya = function() {
        this.quota = {}
    };
    ya.prototype.reset = function() {
        this.quota = {}
    }
    ;
    var za = function(a, b) {
        this.W = a;
        this.M = function(c, d, e) {
            return c.apply(d, e)
        }
        ;
        this.C = b;
        this.s = new xa;
        this.h = this.F = void 0
    };
    za.prototype.add = function(a, b) {
        Ba(this, a, b, !1)
    }
    ;
    var Ba = function(a, b, c, d) {
        d ? a.s.ei(b, c) : a.s.set(b, c)
    };
    za.prototype.set = function(a, b) {
        !this.s.has(a) && this.C && this.C.has(a) ? this.C.set(a, b) : this.s.set(a, b)
    }
    ;
    za.prototype.get = function(a) {
        return this.s.has(a) ? this.s.get(a) : this.C ? this.C.get(a) : void 0
    }
    ;
    za.prototype.has = function(a) {
        return !!this.s.has(a) || !(!this.C || !this.C.has(a))
    }
    ;
    var Ca = function(a) {
        var b = new za(a.W,a);
        a.F && (b.F = a.F);
        b.M = a.M;
        b.h = a.h;
        return b
    };
    var Da = function() {}
      , Ea = function(a) {
        return "function" === typeof a
    }
      , k = function(a) {
        return "string" === typeof a
    }
      , Ga = function(a) {
        return "number" === typeof a && !isNaN(a)
    }
      , Ha = Array.isArray
      , Ia = function(a, b) {
        if (a && Ha(a))
            for (var c = 0; c < a.length; c++)
                if (a[c] && b(a[c]))
                    return a[c]
    }
      , Ja = function(a, b) {
        if (!Ga(a) || !Ga(b) || a > b)
            a = 0,
            b = 2147483647;
        return Math.floor(Math.random() * (b - a + 1) + a)
    }
      , La = function(a, b) {
        for (var c = new Ka, d = 0; d < a.length; d++)
            c.set(a[d], !0);
        for (var e = 0; e < b.length; e++)
            if (c.get(b[e]))
                return !0;
        return !1
    }
      , l = function(a, b) {
        for (var c in a)
            Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c])
    }
      , Ma = function(a) {
        return !!a && ("[object Arguments]" === Object.prototype.toString.call(a) || Object.prototype.hasOwnProperty.call(a, "callee"))
    }
      , Na = function(a) {
        return Math.round(Number(a)) || 0
    }
      , Oa = function(a) {
        return "false" === String(a).toLowerCase() ? !1 : !!a
    }
      , Qa = function(a) {
        var b = [];
        if (Ha(a))
            for (var c = 0; c < a.length; c++)
                b.push(String(a[c]));
        return b
    }
      , Ra = function(a) {
        return a ? a.replace(/^\s+|\s+$/g, "") : ""
    }
      , Sa = function() {
        return new Date(Date.now())
    }
      , Ta = function() {
        return Sa().getTime()
    }
      , Ka = function() {
        this.prefix = "gtm.";
        this.values = {}
    };
    Ka.prototype.set = function(a, b) {
        this.values[this.prefix + a] = b
    }
    ;
    Ka.prototype.get = function(a) {
        return this.values[this.prefix + a]
    }
    ;
    var Ua = function(a, b, c) {
        return a && a.hasOwnProperty(b) ? a[b] : c
    }
      , Va = function(a) {
        var b = a;
        return function() {
            if (b) {
                var c = b;
                b = void 0;
                try {
                    c()
                } catch (d) {}
            }
        }
    }
      , Wa = function(a, b) {
        for (var c in b)
            b.hasOwnProperty(c) && (a[c] = b[c])
    }
      , Xa = function(a, b) {
        for (var c = [], d = 0; d < a.length; d++)
            c.push(a[d]),
            c.push.apply(c, b[a[d]] || []);
        return c
    }
      , Ya = function(a, b) {
        return a.substring(0, b.length) === b
    }
      , Za = function(a, b) {
        var c = z;
        b = b || [];
        for (var d = c, e = 0; e < a.length - 1; e++) {
            if (!d.hasOwnProperty(a[e]))
                return;
            d = d[a[e]];
            if (0 <= b.indexOf(d))
                return
        }
        return d
    }
      , $a = function(a, b) {
        for (var c = {}, d = c, e = a.split("."), f = 0; f < e.length - 1; f++)
            d = d[e[f]] = {};
        d[e[e.length - 1]] = b;
        return c
    }
      , ab = /^\w{1,9}$/
      , bb = function(a, b) {
        a = a || {};
        b = b || ",";
        var c = [];
        l(a, function(d, e) {
            ab.test(d) && e && c.push(d)
        });
        return c.join(b)
    }
      , cb = function(a, b) {
        function c() {
            ++d === b && (e(),
            e = null,
            c.done = !0)
        }
        var d = 0
          , e = a;
        c.done = !1;
        return c
    };
    function db(a, b) {
        for (var c, d = 0; d < b.length && !(c = eb(a, b[d]),
        c instanceof wa); d++)
            ;
        return c
    }
    function eb(a, b) {
        try {
            var c = a.get(String(b[0]));
            if (!c || "function" !== typeof c.invoke)
                throw Error("Attempting to execute non-function " + b[0] + ".");
            return c.invoke.apply(c, [a].concat(b.slice(1)))
        } catch (e) {
            var d = a.F;
            d && d(e, b.context ? {
                id: b[0],
                line: b.context.line
            } : null);
            throw e;
        }
    }
    ;var fb = function() {
        this.C = new ya;
        this.h = new za(this.C)
    };
    fb.prototype.execute = function(a, b) {
        var c = Array.prototype.slice.call(arguments, 0);
        return this.s(c)
    }
    ;
    fb.prototype.s = function(a) {
        for (var b, c = 0; c < arguments.length; c++)
            b = eb(this.h, arguments[c]);
        return b
    }
    ;
    fb.prototype.F = function(a, b) {
        var c = Ca(this.h);
        c.h = a;
        for (var d, e = 1; e < arguments.length; e++)
            d = eb(c, arguments[e]);
        return d
    }
    ;
    var gb = function() {
        xa.call(this);
        this.s = !1
    };
    sa(gb, xa);
    var hb = function(a, b) {
        var c = [], d;
        for (d in a.h)
            if (a.h.hasOwnProperty(d))
                switch (d = d.substr(5),
                b) {
                case 1:
                    c.push(d);
                    break;
                case 2:
                    c.push(a.get(d));
                    break;
                case 3:
                    c.push([d, a.get(d)])
                }
        return c
    };
    gb.prototype.set = function(a, b) {
        this.s || xa.prototype.set.call(this, a, b)
    }
    ;
    gb.prototype.ei = function(a, b) {
        this.s || xa.prototype.ei.call(this, a, b)
    }
    ;
    gb.prototype.remove = function(a) {
        this.s || xa.prototype.remove.call(this, a)
    }
    ;
    gb.prototype.Jb = function() {
        this.s = !0
    }
    ;
    /*
 jQuery (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
    var ib = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/
      , jb = function(a) {
        if (null == a)
            return String(a);
        var b = ib.exec(Object.prototype.toString.call(Object(a)));
        return b ? b[1].toLowerCase() : "object"
    }
      , kb = function(a, b) {
        return Object.prototype.hasOwnProperty.call(Object(a), b)
    }
      , lb = function(a) {
        if (!a || "object" != jb(a) || a.nodeType || a == a.window)
            return !1;
        try {
            if (a.constructor && !kb(a, "constructor") && !kb(a.constructor.prototype, "isPrototypeOf"))
                return !1
        } catch (c) {
            return !1
        }
        for (var b in a)
            ;
        return void 0 === b || kb(a, b)
    }
      , nb = function(a, b) {
        var c = b || ("array" == jb(a) ? [] : {}), d;
        for (d in a)
            if (kb(a, d)) {
                var e = a[d];
                "array" == jb(e) ? ("array" != jb(c[d]) && (c[d] = []),
                c[d] = nb(e, c[d])) : lb(e) ? (lb(c[d]) || (c[d] = {}),
                c[d] = nb(e, c[d])) : c[d] = e
            }
        return c
    };
    var ob = function(a) {
        for (var b = [], c = 0; c < a.length(); c++)
            a.has(c) && (b[c] = a.get(c));
        return b
    }
      , pb = function(a) {
        if (void 0 == a || Ha(a) || lb(a))
            return !0;
        switch (typeof a) {
        case "boolean":
        case "number":
        case "string":
        case "function":
            return !0
        }
        return !1
    }
      , qb = function(a) {
        return "number" === typeof a && 0 <= a && isFinite(a) && 0 === a % 1 || "string" === typeof a && "-" !== a[0] && a === "" + parseInt(a, 10)
    };
    var rb = function(a) {
        this.s = new gb;
        this.h = [];
        this.C = !1;
        a = a || [];
        for (var b in a)
            a.hasOwnProperty(b) && (qb(b) ? this.h[Number(b)] = a[Number(b)] : this.s.set(b, a[b]))
    };
    aa = rb.prototype;
    aa.toString = function(a) {
        if (a && 0 <= a.indexOf(this))
            return "";
        for (var b = [], c = 0; c < this.h.length; c++) {
            var d = this.h[c];
            null === d || void 0 === d ? b.push("") : d instanceof rb ? (a = a || [],
            a.push(this),
            b.push(d.toString(a)),
            a.pop()) : b.push(String(d))
        }
        return b.join(",")
    }
    ;
    aa.set = function(a, b) {
        if (!this.C)
            if ("length" === a) {
                if (!qb(b))
                    throw Error("RangeError: Length property must be a valid integer.");
                this.h.length = Number(b)
            } else
                qb(a) ? this.h[Number(a)] = b : this.s.set(a, b)
    }
    ;
    aa.get = function(a) {
        return "length" === a ? this.length() : qb(a) ? this.h[Number(a)] : this.s.get(a)
    }
    ;
    aa.length = function() {
        return this.h.length
    }
    ;
    aa.ac = function() {
        for (var a = hb(this.s, 1), b = 0; b < this.h.length; b++)
            a.push(b + "");
        return new rb(a)
    }
    ;
    aa.remove = function(a) {
        qb(a) ? delete this.h[Number(a)] : this.s.remove(a)
    }
    ;
    aa.pop = function() {
        return this.h.pop()
    }
    ;
    aa.push = function(a) {
        return this.h.push.apply(this.h, Array.prototype.slice.call(arguments))
    }
    ;
    aa.shift = function() {
        return this.h.shift()
    }
    ;
    aa.splice = function(a, b, c) {
        return new rb(this.h.splice.apply(this.h, arguments))
    }
    ;
    aa.unshift = function(a) {
        return this.h.unshift.apply(this.h, Array.prototype.slice.call(arguments))
    }
    ;
    aa.has = function(a) {
        return qb(a) && this.h.hasOwnProperty(a) || this.s.has(a)
    }
    ;
    aa.Jb = function() {
        this.C = !0;
        Object.freeze(this.h);
        this.s.Jb()
    }
    ;
    var sb = function() {
        gb.call(this)
    };
    sa(sb, gb);
    sb.prototype.ac = function() {
        return new rb(hb(this, 1))
    }
    ;
    function tb() {
        for (var a = ub, b = {}, c = 0; c < a.length; ++c)
            b[a[c]] = c;
        return b
    }
    function vb() {
        var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        a += a.toLowerCase() + "0123456789-_";
        return a + "."
    }
    var ub, wb;
    function xb(a) {
        ub = ub || vb();
        wb = wb || tb();
        for (var b = [], c = 0; c < a.length; c += 3) {
            var d = c + 1 < a.length
              , e = c + 2 < a.length
              , f = a.charCodeAt(c)
              , g = d ? a.charCodeAt(c + 1) : 0
              , h = e ? a.charCodeAt(c + 2) : 0
              , m = f >> 2
              , n = (f & 3) << 4 | g >> 4
              , p = (g & 15) << 2 | h >> 6
              , q = h & 63;
            e || (q = 64,
            d || (p = 64));
            b.push(ub[m], ub[n], ub[p], ub[q])
        }
        return b.join("")
    }
    function yb(a) {
        function b(m) {
            for (; d < a.length; ) {
                var n = a.charAt(d++)
                  , p = wb[n];
                if (null != p)
                    return p;
                if (!/^[\s\xa0]*$/.test(n))
                    throw Error("Unknown base64 encoding at char: " + n);
            }
            return m
        }
        ub = ub || vb();
        wb = wb || tb();
        for (var c = "", d = 0; ; ) {
            var e = b(-1)
              , f = b(0)
              , g = b(64)
              , h = b(64);
            if (64 === h && -1 === e)
                return c;
            c += String.fromCharCode(e << 2 | f >> 4);
            64 != g && (c += String.fromCharCode(f << 4 & 240 | g >> 2),
            64 != h && (c += String.fromCharCode(g << 6 & 192 | h)))
        }
    }
    ;var zb = {}
      , Ab = function(a, b) {
        zb[a] = zb[a] || [];
        zb[a][b] = !0
    }
      , Bb = function(a) {
        var b = zb[a];
        if (!b || 0 === b.length)
            return "";
        for (var c = [], d = 0, e = 0; e < b.length; e++)
            0 === e % 8 && 0 < e && (c.push(String.fromCharCode(d)),
            d = 0),
            b[e] && (d |= 1 << e % 8);
        0 < d && c.push(String.fromCharCode(d));
        return xb(c.join("")).replace(/\.+$/, "")
    }
      , Cb = function() {
        for (var a = [], b = zb.fdr || [], c = 0; c < b.length; c++)
            b[c] && a.push(c);
        return 0 < a.length ? a : void 0
    };
    var Db = Array.prototype.indexOf ? function(a, b) {
        return Array.prototype.indexOf.call(a, b, void 0)
    }
    : function(a, b) {
        if ("string" === typeof a)
            return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
        for (var c = 0; c < a.length; c++)
            if (c in a && a[c] === b)
                return c;
        return -1
    }
    ;
    var Eb, Fb = function() {
        if (void 0 === Eb) {
            var a = null
              , b = ua.trustedTypes;
            if (b && b.createPolicy) {
                try {
                    a = b.createPolicy("goog#html", {
                        createHTML: va,
                        createScript: va,
                        createScriptURL: va
                    })
                } catch (c) {
                    ua.console && ua.console.error(c.message)
                }
                Eb = a
            } else
                Eb = a
        }
        return Eb
    };
    var Gb = function(a) {
        this.h = a
    };
    Gb.prototype.toString = function() {
        return this.h + ""
    }
    ;
    var Hb = function(a) {
        return a instanceof Gb && a.constructor === Gb ? a.h : "type_error:TrustedResourceUrl"
    }
      , Ib = {}
      , Jb = function(a) {
        var b = a
          , c = Fb()
          , d = c ? c.createScriptURL(b) : b;
        return new Gb(d,Ib)
    };
    var Kb = function(a) {
        this.h = a
    };
    Kb.prototype.toString = function() {
        return this.h.toString()
    }
    ;
    var Lb = function(a) {
        return a instanceof Kb && a.constructor === Kb ? a.h : "type_error:SafeUrl"
    }
      , Mb = {};
    var Nb, Ob;
    a: {
        for (var Pb = ["CLOSURE_FLAGS"], Qb = ua, Rb = 0; Rb < Pb.length; Rb++)
            if (Qb = Qb[Pb[Rb]],
            null == Qb) {
                Ob = null;
                break a
            }
        Ob = Qb
    }
    var Sb = Ob && Ob[610401301];
    Nb = null != Sb ? Sb : !1;
    function Tb() {
        var a = ua.navigator;
        if (a) {
            var b = a.userAgent;
            if (b)
                return b
        }
        return ""
    }
    var Ub, Vb = ua.navigator;
    Ub = Vb ? Vb.userAgentData || null : null;
    function Wb(a) {
        return Nb ? Ub ? Ub.brands.some(function(b) {
            var c = b.brand;
            return c && -1 != c.indexOf(a)
        }) : !1 : !1
    }
    function Xb(a) {
        return -1 != Tb().indexOf(a)
    }
    ;function Yb() {
        return Nb ? !!Ub && 0 < Ub.brands.length : !1
    }
    function Zb() {
        return Yb() ? !1 : Xb("Opera")
    }
    function $b() {
        return Xb("Firefox") || Xb("FxiOS")
    }
    function ac() {
        return Yb() ? Wb("Chromium") : (Xb("Chrome") || Xb("CriOS")) && !(Yb() ? 0 : Xb("Edge")) || Xb("Silk")
    }
    ;var bc = {}
      , cc = function(a) {
        this.h = a
    };
    cc.prototype.toString = function() {
        return this.h.toString()
    }
    ;
    var dc = function(a) {
        return a instanceof cc && a.constructor === cc ? a.h : "type_error:SafeHtml"
    };
    /*

 SPDX-License-Identifier: Apache-2.0
*/
    var ec = da([""])
      , fc = ea(["\x00"], ["\\0"])
      , gc = ea(["\n"], ["\\n"])
      , hc = ea(["\x00"], ["\\u0000"]);
    function ic(a) {
        return -1 === a.toString().indexOf("`")
    }
    ic(function(a) {
        return a(ec)
    }) || ic(function(a) {
        return a(fc)
    }) || ic(function(a) {
        return a(gc)
    }) || ic(function(a) {
        return a(hc)
    });
    var jc = new Kb("about:invalid#zClosurez",Mb);
    var kc = function(a) {
        this.Bm = a
    };
    function lc(a) {
        return new kc(function(b) {
            return b.substr(0, a.length + 1).toLowerCase() === a + ":"
        }
        )
    }
    var mc = [lc("data"), lc("http"), lc("https"), lc("mailto"), lc("ftp"), new kc(function(a) {
        return /^[^:]*([/?#]|$)/.test(a)
    }
    )];
    function nc(a, b) {
        b = void 0 === b ? mc : b;
        if (a instanceof Kb)
            return a;
        for (var c = 0; c < b.length; ++c) {
            var d = b[c];
            if (d instanceof kc && d.Bm(a))
                return new Kb(a,Mb)
        }
    }
    function oc(a) {
        var b;
        b = void 0 === b ? mc : b;
        return nc(a, b) || jc
    }
    var pc = /^\s*(?!javascript:)(?:[a-z0-9+.-]+:|[^:\/?#]*(?:[\/?#]|$))/i;
    function qc(a) {
        if (pc.test(a))
            return a
    }
    ;var rc = {};
    var sc = function() {}
      , tc = function(a) {
        this.h = a
    };
    sa(tc, sc);
    tc.prototype.toString = function() {
        return this.h
    }
    ;
    function uc(a, b) {
        var c = [new tc(vc[0].toLowerCase(),rc)];
        if (0 === c.length)
            throw Error("");
        var d = c.map(function(f) {
            var g;
            if (f instanceof tc)
                g = f.h;
            else
                throw Error("");
            return g
        })
          , e = b.toLowerCase();
        if (d.every(function(f) {
            return 0 !== e.indexOf(f)
        }))
            throw Error('Attribute "' + b + '" does not match any of the allowed prefixes.');
        a.setAttribute(b, "true")
    }
    function wc(a) {
        var b = a.tagName;
        if ("SCRIPT" === b || "STYLE" === b)
            throw Error("");
    }
    ;function yc(a, b) {
        var c = b instanceof Kb ? Lb(b) : qc(b);
        void 0 !== c && (a.action = c)
    }
    ;"ARTICLE SECTION NAV ASIDE H1 H2 H3 H4 H5 H6 HEADER FOOTER ADDRESS P HR PRE BLOCKQUOTE OL UL LH LI DL DT DD FIGURE FIGCAPTION MAIN DIV EM STRONG SMALL S CITE Q DFN ABBR RUBY RB RT RTC RP DATA TIME CODE VAR SAMP KBD SUB SUP I B U MARK BDI BDO SPAN BR WBR INS DEL PICTURE PARAM TRACK MAP TABLE CAPTION COLGROUP COL TBODY THEAD TFOOT TR TD TH SELECT DATALIST OPTGROUP OPTION OUTPUT PROGRESS METER FIELDSET LEGEND DETAILS SUMMARY MENU DIALOG SLOT CANVAS FONT CENTER ACRONYM BASEFONT BIG DIR HGROUP STRIKE TT".split(" ").concat(["BUTTON"]);
    function zc(a) {
        var b = a = Ac(a)
          , c = Fb()
          , d = c ? c.createHTML(b) : b;
        return new cc(d,bc)
    }
    function Ac(a) {
        return null === a ? "null" : void 0 === a ? "undefined" : a
    }
    ;var z = window
      , C = document
      , Bc = navigator
      , Cc = C.currentScript && C.currentScript.src
      , Dc = function(a, b) {
        var c = z[a];
        z[a] = void 0 === c ? b : c;
        return z[a]
    }
      , Ec = function(a, b) {
        b && (a.addEventListener ? a.onload = b : a.onreadystatechange = function() {
            a.readyState in {
                loaded: 1,
                complete: 1
            } && (a.onreadystatechange = null,
            b())
        }
        )
    }
      , Fc = {
        async: 1,
        nonce: 1,
        onerror: 1,
        onload: 1,
        src: 1,
        type: 1
    }
      , Gc = {
        onload: 1,
        src: 1,
        width: 1,
        height: 1,
        style: 1
    };
    function Hc(a, b, c) {
        b && l(b, function(d, e) {
            d = d.toLowerCase();
            c.hasOwnProperty(d) || a.setAttribute(d, e)
        })
    }
    var Ic = function(a, b, c, d, e) {
        var f = C.createElement("script");
        Hc(f, d, Fc);
        f.type = "text/javascript";
        f.async = d && !1 === d.async ? !1 : !0;
        var g;
        g = Jb(Ac(a));
        f.src = Hb(g);
        var h, m, n, p = null == (n = (m = (f.ownerDocument && f.ownerDocument.defaultView || window).document).querySelector) ? void 0 : n.call(m, "script[nonce]");
        (h = p ? p.nonce || p.getAttribute("nonce") || "" : "") && f.setAttribute("nonce", h);
        Ec(f, b);
        c && (f.onerror = c);
        if (e)
            e.appendChild(f);
        else {
            var q = C.getElementsByTagName("script")[0] || C.body || C.head;
            q.parentNode.insertBefore(f, q)
        }
        return f
    }
      , Jc = function() {
        if (Cc) {
            var a = Cc.toLowerCase();
            if (0 === a.indexOf("https://"))
                return 2;
            if (0 === a.indexOf("http://"))
                return 3
        }
        return 1
    }
      , Kc = function(a, b, c, d, e) {
        var f;
        f = void 0 === f ? !0 : f;
        var g = e
          , h = !1;
        g || (g = C.createElement("iframe"),
        h = !0);
        Hc(g, c, Gc);
        d && l(d, function(n, p) {
            g.dataset[n] = p
        });
        f && (g.height = "0",
        g.width = "0",
        g.style.display = "none",
        g.style.visibility = "hidden");
        if (h) {
            var m = C.body && C.body.lastChild || C.body || C.head;
            m.parentNode.insertBefore(g, m)
        }
        Ec(g, b);
        void 0 !== a && (g.src = a);
        return g
    }
      , Lc = function(a, b, c, d) {
        var e = new Image(1,1);
        Hc(e, d, {});
        e.onload = function() {
            e.onload = null;
            b && b()
        }
        ;
        e.onerror = function() {
            e.onerror = null;
            c && c()
        }
        ;
        e.src = a
    }
      , Mc = function(a, b, c, d) {
        a.addEventListener ? a.addEventListener(b, c, !!d) : a.attachEvent && a.attachEvent("on" + b, c)
    }
      , Nc = function(a, b, c) {
        a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent && a.detachEvent("on" + b, c)
    }
      , H = function(a) {
        z.setTimeout(a, 0)
    }
      , Oc = function(a, b) {
        return a && b && a.attributes && a.attributes[b] ? a.attributes[b].value : null
    }
      , Pc = function(a) {
        var b = a.innerText || a.textContent || "";
        b && " " != b && (b = b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ""));
        b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " "));
        return b
    }
      , Qc = function(a) {
        var b = C.createElement("div")
          , c = b
          , d = zc("A<div>" + a + "</div>");
        1 === c.nodeType && wc(c);
        c.innerHTML = dc(d);
        b = b.lastChild;
        for (var e = []; b.firstChild; )
            e.push(b.removeChild(b.firstChild));
        return e
    }
      , Rc = function(a, b, c) {
        c = c || 100;
        for (var d = {}, e = 0; e < b.length; e++)
            d[b[e]] = !0;
        for (var f = a, g = 0; f && g <= c; g++) {
            if (d[String(f.tagName).toLowerCase()])
                return f;
            f = f.parentElement
        }
        return null
    }
      , Sc = function(a) {
        var b;
        try {
            b = Bc.sendBeacon && Bc.sendBeacon(a)
        } catch (c) {
            Ab("TAGGING", 15)
        }
        b || Lc(a)
    }
      , Tc = function(a, b) {
        try {
            if (Bc.sendBeacon)
                return Bc.sendBeacon(a, b)
        } catch (c) {
            Ab("TAGGING", 15)
        }
        return !1
    }
      , Uc = {
        cache: "no-store",
        credentials: "include",
        keepalive: !0,
        method: "POST",
        mode: "no-cors",
        redirect: "follow"
    }
      , Vc = function(a, b) {
        var c = {
            Om: !0
        };
        if ("fetch"in z) {
            var d = Object.assign({}, Uc);
            b && (d.body = b);
            c && (c.attributionReporting && (d.attributionReporting = c.attributionReporting),
            c.Fl && (d.browsingTopics = c.Fl));
            try {
                return z.fetch(a, d),
                !0
            } catch (e) {}
        }
        if (c && c.Om)
            return !1;
        if (b)
            return Tc(a, b);
        Sc(a);
        return !0
    }
      , Wc = function(a, b) {
        var c = a[b];
        c && "string" === typeof c.animVal && (c = c.animVal);
        return c
    }
      , Xc = function() {
        var a = z.performance;
        if (a && Ea(a.now))
            return a.now()
    }
      , Yc = function() {
        return z.performance || void 0
    };
    var Zc = function(a, b) {
        return I(this, a) && I(this, b)
    }
      , $c = function(a, b) {
        return I(this, a) === I(this, b)
    }
      , ad = function(a, b) {
        return I(this, a) || I(this, b)
    }
      , bd = function(a, b) {
        a = I(this, a);
        b = I(this, b);
        return -1 < String(a).indexOf(String(b))
    }
      , cd = function(a, b) {
        a = String(I(this, a));
        b = String(I(this, b));
        return a.substring(0, b.length) === b
    }
      , dd = function(a, b) {
        a = I(this, a);
        b = I(this, b);
        switch (a) {
        case "pageLocation":
            var c = z.location.href;
            b instanceof sb && b.get("stripProtocol") && (c = c.replace(/^https?:\/\//, ""));
            return c
        }
    };
    var ed = function(a, b) {
        gb.call(this);
        this.F = a;
        this.M = b
    };
    sa(ed, gb);
    ed.prototype.toString = function() {
        return this.F
    }
    ;
    ed.prototype.ac = function() {
        return new rb(hb(this, 1))
    }
    ;
    ed.prototype.invoke = function(a, b) {
        return this.M.apply(new fd(this,a), Array.prototype.slice.call(arguments, 1))
    }
    ;
    ed.prototype.eb = function(a, b) {
        try {
            return this.invoke.apply(this, Array.prototype.slice.call(arguments, 0))
        } catch (c) {}
    }
    ;
    var fd = function(a, b) {
        this.s = a;
        this.h = b
    }
      , I = function(a, b) {
        var c = a.h;
        return Ha(b) ? eb(c, b) : b
    }
      , J = function(a) {
        return a.s.F
    };
    var gd = function() {
        this.map = new Map
    };
    gd.prototype.set = function(a, b) {
        this.map.set(a, b)
    }
    ;
    gd.prototype.get = function(a) {
        return this.map.get(a)
    }
    ;
    var hd = function() {
        this.keys = [];
        this.values = []
    };
    hd.prototype.set = function(a, b) {
        this.keys.push(a);
        this.values.push(b)
    }
    ;
    hd.prototype.get = function(a) {
        var b = this.keys.indexOf(a);
        if (-1 < b)
            return this.values[b]
    }
    ;
    function id() {
        try {
            return Map ? new gd : new hd
        } catch (a) {
            return new hd
        }
    }
    ;var jd = function(a) {
        if (a instanceof jd)
            return a;
        if (pb(a))
            throw Error("Type of given value has an equivalent Pixie type.");
        this.h = a
    };
    jd.prototype.toString = function() {
        return String(this.h)
    }
    ;
    var ld = function(a) {
        gb.call(this);
        this.F = a;
        this.set("then", kd(this));
        this.set("catch", kd(this, !0));
        this.set("finally", kd(this, !1, !0))
    };
    sa(ld, sb);
    var kd = function(a, b, c) {
        b = void 0 === b ? !1 : b;
        c = void 0 === c ? !1 : c;
        return new ed("",function(d, e) {
            b && (e = d,
            d = void 0);
            c && (e = d);
            d instanceof ed || (d = void 0);
            e instanceof ed || (e = void 0);
            var f = Ca(this.h)
              , g = function(m) {
                return function(n) {
                    return c ? (m.invoke(f),
                    a.F) : m.invoke(f, n)
                }
            }
              , h = a.F.then(d && g(d), e && g(e));
            return new ld(h)
        }
        )
    };
    var nd = function(a, b, c) {
        var d = id()
          , e = function(g, h) {
            for (var m = hb(g, 1), n = 0; n < m.length; n++)
                h[m[n]] = f(g.get(m[n]))
        }
          , f = function(g) {
            var h = d.get(g);
            if (h)
                return h;
            if (g instanceof rb) {
                var m = [];
                d.set(g, m);
                for (var n = g.ac(), p = 0; p < n.length(); p++)
                    m[n.get(p)] = f(g.get(n.get(p)));
                return m
            }
            if (g instanceof ld)
                return g.F;
            if (g instanceof sb) {
                var q = {};
                d.set(g, q);
                e(g, q);
                return q
            }
            if (g instanceof ed) {
                var r = function() {
                    for (var u = Array.prototype.slice.call(arguments, 0), v = 0; v < u.length; v++)
                        u[v] = md(u[v], b, c);
                    var w = new za(b ? b.W : new ya);
                    b && (w.h = b.h);
                    return f(g.invoke.apply(g, [w].concat(u)))
                };
                d.set(g, r);
                e(g, r);
                return r
            }
            var t = !1;
            switch (c) {
            case 1:
                t = !0;
                break;
            case 2:
                t = !1;
                break;
            case 3:
                t = !1;
                break;
            default:
            }
            if (g instanceof jd && t)
                return g.h;
            switch (typeof g) {
            case "boolean":
            case "number":
            case "string":
            case "undefined":
                return g;
            case "object":
                if (null === g)
                    return null
            }
        };
        return f(a)
    }
      , md = function(a, b, c) {
        var d = id()
          , e = function(g, h) {
            for (var m in g)
                g.hasOwnProperty(m) && h.set(m, f(g[m]))
        }
          , f = function(g) {
            var h = d.get(g);
            if (h)
                return h;
            if (Ha(g) || Ma(g)) {
                var m = new rb([]);
                d.set(g, m);
                for (var n in g)
                    g.hasOwnProperty(n) && m.set(n, f(g[n]));
                return m
            }
            if (lb(g)) {
                var p = new sb;
                d.set(g, p);
                e(g, p);
                return p
            }
            if ("function" === typeof g) {
                var q = new ed("",function(x) {
                    for (var y = Array.prototype.slice.call(arguments, 0), B = 0; B < y.length; B++)
                        y[B] = nd(I(this, y[B]), b, c);
                    return f((0,
                    this.h.M)(g, g, y))
                }
                );
                d.set(g, q);
                e(g, q);
                return q
            }
            var v = typeof g;
            if (null === g || "string" === v || "number" === v || "boolean" === v)
                return g;
            var w = !1;
            switch (c) {
            case 1:
                w = !0;
                break;
            case 2:
                w = !1;
                break;
            default:
            }
            if (void 0 !== g && w)
                return new jd(g)
        };
        return f(a)
    };
    var od = function() {
        var a = !1;
        return a
    };
    var pd = {
        supportedMethods: "concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString".split(" "),
        concat: function(a, b) {
            for (var c = [], d = 0; d < this.length(); d++)
                c.push(this.get(d));
            for (var e = 1; e < arguments.length; e++)
                if (arguments[e]instanceof rb)
                    for (var f = arguments[e], g = 0; g < f.length(); g++)
                        c.push(f.get(g));
                else
                    c.push(arguments[e]);
            return new rb(c)
        },
        every: function(a, b) {
            for (var c = this.length(), d = 0; d < this.length() && d < c; d++)
                if (this.has(d) && !b.invoke(a, this.get(d), d, this))
                    return !1;
            return !0
        },
        filter: function(a, b) {
            for (var c = this.length(), d = [], e = 0; e < this.length() && e < c; e++)
                this.has(e) && b.invoke(a, this.get(e), e, this) && d.push(this.get(e));
            return new rb(d)
        },
        forEach: function(a, b) {
            for (var c = this.length(), d = 0; d < this.length() && d < c; d++)
                this.has(d) && b.invoke(a, this.get(d), d, this)
        },
        hasOwnProperty: function(a, b) {
            return this.has(b)
        },
        indexOf: function(a, b, c) {
            var d = this.length()
              , e = void 0 === c ? 0 : Number(c);
            0 > e && (e = Math.max(d + e, 0));
            for (var f = e; f < d; f++)
                if (this.has(f) && this.get(f) === b)
                    return f;
            return -1
        },
        join: function(a, b) {
            for (var c = [], d = 0; d < this.length(); d++)
                c.push(this.get(d));
            return c.join(b)
        },
        lastIndexOf: function(a, b, c) {
            var d = this.length()
              , e = d - 1;
            void 0 !== c && (e = 0 > c ? d + c : Math.min(c, e));
            for (var f = e; 0 <= f; f--)
                if (this.has(f) && this.get(f) === b)
                    return f;
            return -1
        },
        map: function(a, b) {
            for (var c = this.length(), d = [], e = 0; e < this.length() && e < c; e++)
                this.has(e) && (d[e] = b.invoke(a, this.get(e), e, this));
            return new rb(d)
        },
        pop: function() {
            return this.pop()
        },
        push: function(a, b) {
            return this.push.apply(this, Array.prototype.slice.call(arguments, 1))
        },
        reduce: function(a, b, c) {
            var d = this.length(), e, f = 0;
            if (void 0 !== c)
                e = c;
            else {
                if (0 === d)
                    throw Error("TypeError: Reduce on List with no elements.");
                for (var g = 0; g < d; g++)
                    if (this.has(g)) {
                        e = this.get(g);
                        f = g + 1;
                        break
                    }
                if (g === d)
                    throw Error("TypeError: Reduce on List with no elements.");
            }
            for (var h = f; h < d; h++)
                this.has(h) && (e = b.invoke(a, e, this.get(h), h, this));
            return e
        },
        reduceRight: function(a, b, c) {
            var d = this.length(), e, f = d - 1;
            if (void 0 !== c)
                e = c;
            else {
                if (0 === d)
                    throw Error("TypeError: ReduceRight on List with no elements.");
                for (var g = 1; g <= d; g++)
                    if (this.has(d - g)) {
                        e = this.get(d - g);
                        f = d - (g + 1);
                        break
                    }
                if (g > d)
                    throw Error("TypeError: ReduceRight on List with no elements.");
            }
            for (var h = f; 0 <= h; h--)
                this.has(h) && (e = b.invoke(a, e, this.get(h), h, this));
            return e
        },
        reverse: function() {
            for (var a = ob(this), b = a.length - 1, c = 0; 0 <= b; b--,
            c++)
                a.hasOwnProperty(b) ? this.set(c, a[b]) : this.remove(c);
            return this
        },
        shift: function() {
            return this.shift()
        },
        slice: function(a, b, c) {
            var d = this.length();
            void 0 === b && (b = 0);
            b = 0 > b ? Math.max(d + b, 0) : Math.min(b, d);
            c = void 0 === c ? d : 0 > c ? Math.max(d + c, 0) : Math.min(c, d);
            c = Math.max(b, c);
            for (var e = [], f = b; f < c; f++)
                e.push(this.get(f));
            return new rb(e)
        },
        some: function(a, b) {
            for (var c = this.length(), d = 0; d < this.length() && d < c; d++)
                if (this.has(d) && b.invoke(a, this.get(d), d, this))
                    return !0;
            return !1
        },
        sort: function(a, b) {
            var c = ob(this);
            void 0 === b ? c.sort() : c.sort(function(e, f) {
                return Number(b.invoke(a, e, f))
            });
            for (var d = 0; d < c.length; d++)
                c.hasOwnProperty(d) ? this.set(d, c[d]) : this.remove(d);
            return this
        },
        splice: function(a, b, c, d) {
            return this.splice.apply(this, Array.prototype.splice.call(arguments, 1, arguments.length - 1))
        },
        toString: function() {
            return this.toString()
        },
        unshift: function(a, b) {
            return this.unshift.apply(this, Array.prototype.slice.call(arguments, 1))
        }
    };
    var qd = function(a) {
        var b;
        b = Error.call(this, a);
        this.message = b.message;
        "stack"in b && (this.stack = b.stack)
    };
    sa(qd, Error);
    var rd = {
        charAt: 1,
        concat: 1,
        indexOf: 1,
        lastIndexOf: 1,
        match: 1,
        replace: 1,
        search: 1,
        slice: 1,
        split: 1,
        substring: 1,
        toLowerCase: 1,
        toLocaleLowerCase: 1,
        toString: 1,
        toUpperCase: 1,
        toLocaleUpperCase: 1,
        trim: 1
    }
      , sd = new wa("break")
      , td = new wa("continue")
      , ud = function(a, b) {
        return I(this, a) + I(this, b)
    }
      , vd = function(a, b) {
        return I(this, a) && I(this, b)
    }
      , wd = function(a, b, c) {
        a = I(this, a);
        b = I(this, b);
        c = I(this, c);
        if (!(c instanceof rb))
            throw Error("Error: Non-List argument given to Apply instruction.");
        if (null === a || void 0 === a) {
            var d = "TypeError: Can't read property " + b + " of " + a + ".";
            if (od())
                throw new qd(d);
            throw Error(d);
        }
        var e = "number" === typeof a;
        if ("boolean" === typeof a || e) {
            if ("toString" === b) {
                if (e && c.length()) {
                    var f = nd(c.get(0));
                    try {
                        return a.toString(f)
                    } catch (y) {}
                }
                return a.toString()
            }
            var g = "TypeError: " + a + "." + b + " is not a function.";
            if (od())
                throw new qd(g);
            throw Error(g);
        }
        if ("string" === typeof a) {
            if (rd.hasOwnProperty(b)) {
                var h = 2;
                h = 1;
                var m = nd(c, void 0, h);
                return md(a[b].apply(a, m), this.h)
            }
            var n = "TypeError: " + b + " is not a function";
            if (od())
                throw new qd(n);
            throw Error(n);
        }
        if (a instanceof rb) {
            if (a.has(b)) {
                var p = a.get(b);
                if (p instanceof ed) {
                    var q = ob(c);
                    q.unshift(this.h);
                    return p.invoke.apply(p, q)
                }
                var r = "TypeError: " + b + " is not a function";
                if (od())
                    throw new qd(r);
                throw Error(r);
            }
            if (0 <= pd.supportedMethods.indexOf(b)) {
                var t = ob(c);
                t.unshift(this.h);
                return pd[b].apply(a, t)
            }
        }
        if (a instanceof ed || a instanceof sb) {
            if (a.has(b)) {
                var u = a.get(b);
                if (u instanceof ed) {
                    var v = ob(c);
                    v.unshift(this.h);
                    return u.invoke.apply(u, v)
                }
                var w = "TypeError: " + b + " is not a function";
                if (od())
                    throw new qd(w);
                throw Error(w);
            }
            if ("toString" === b)
                return a instanceof ed ? a.F : a.toString();
            if ("hasOwnProperty" === b)
                return a.has.apply(a, ob(c))
        }
        if (a instanceof jd && "toString" === b)
            return a.toString();
        var x = "TypeError: Object has no '" + b + "' property.";
        if (od())
            throw new qd(x);
        throw Error(x);
    }
      , xd = function(a, b) {
        a = I(this, a);
        if ("string" !== typeof a)
            throw Error("Invalid key name given for assignment.");
        var c = this.h;
        if (!c.has(a))
            throw Error("Attempting to assign to undefined value " + b);
        var d = I(this, b);
        c.set(a, d);
        return d
    }
      , yd = function(a) {
        var b = Ca(this.h)
          , c = db(b, Array.prototype.slice.apply(arguments));
        if (c instanceof wa)
            return c
    }
      , zd = function() {
        return sd
    }
      , Ad = function(a) {
        for (var b = I(this, a), c = 0; c < b.length; c++) {
            var d = I(this, b[c]);
            if (d instanceof wa)
                return d
        }
    }
      , Cd = function(a) {
        for (var b = this.h, c = 0; c < arguments.length - 1; c += 2) {
            var d = arguments[c];
            if ("string" === typeof d) {
                var e = I(this, arguments[c + 1]);
                Ba(b, d, e, !0)
            }
        }
    }
      , Dd = function() {
        return td
    }
      , Ed = function(a, b) {
        return new wa(a,I(this, b))
    }
      , Fd = function(a, b, c) {
        var d = new rb;
        b = I(this, b);
        for (var e = 0; e < b.length; e++)
            d.push(b[e]);
        var f = [51, a, d].concat(Array.prototype.splice.call(arguments, 2, arguments.length - 2));
        this.h.add(a, I(this, f))
    }
      , Gd = function(a, b) {
        return I(this, a) / I(this, b)
    }
      , Hd = function(a, b) {
        a = I(this, a);
        b = I(this, b);
        var c = a instanceof jd
          , d = b instanceof jd;
        return c || d ? c && d ? a.h == b.h : !1 : a == b
    }
      , Id = function(a) {
        for (var b, c = 0; c < arguments.length; c++)
            b = I(this, arguments[c]);
        return b
    };
    function Jd(a, b, c, d) {
        for (var e = 0; e < b(); e++) {
            var f = a(c(e))
              , g = db(f, d);
            if (g instanceof wa) {
                if ("break" === g.h)
                    break;
                if ("return" === g.h)
                    return g
            }
        }
    }
    function Kd(a, b, c) {
        if ("string" === typeof b)
            return Jd(a, function() {
                return b.length
            }, function(f) {
                return f
            }, c);
        if (b instanceof sb || b instanceof rb || b instanceof ed) {
            var d = b.ac()
              , e = d.length();
            return Jd(a, function() {
                return e
            }, function(f) {
                return d.get(f)
            }, c)
        }
    }
    var Ld = function(a, b, c) {
        a = I(this, a);
        b = I(this, b);
        c = I(this, c);
        var d = this.h;
        return Kd(function(e) {
            d.set(a, e);
            return d
        }, b, c)
    }
      , Md = function(a, b, c) {
        a = I(this, a);
        b = I(this, b);
        c = I(this, c);
        var d = this.h;
        return Kd(function(e) {
            var f = Ca(d);
            Ba(f, a, e, !0);
            return f
        }, b, c)
    }
      , Nd = function(a, b, c) {
        a = I(this, a);
        b = I(this, b);
        c = I(this, c);
        var d = this.h;
        return Kd(function(e) {
            var f = Ca(d);
            f.add(a, e);
            return f
        }, b, c)
    }
      , Pd = function(a, b, c) {
        a = I(this, a);
        b = I(this, b);
        c = I(this, c);
        var d = this.h;
        return Od(function(e) {
            d.set(a, e);
            return d
        }, b, c)
    }
      , Qd = function(a, b, c) {
        a = I(this, a);
        b = I(this, b);
        c = I(this, c);
        var d = this.h;
        return Od(function(e) {
            var f = Ca(d);
            Ba(f, a, e, !0);
            return f
        }, b, c)
    }
      , Rd = function(a, b, c) {
        a = I(this, a);
        b = I(this, b);
        c = I(this, c);
        var d = this.h;
        return Od(function(e) {
            var f = Ca(d);
            f.add(a, e);
            return f
        }, b, c)
    };
    function Od(a, b, c) {
        if ("string" === typeof b)
            return Jd(a, function() {
                return b.length
            }, function(d) {
                return b[d]
            }, c);
        if (b instanceof rb)
            return Jd(a, function() {
                return b.length()
            }, function(d) {
                return b.get(d)
            }, c);
        if (od())
            throw new qd("The value is not iterable.");
        throw new TypeError("The value is not iterable.");
    }
    var Sd = function(a, b, c, d) {
        function e(p, q) {
            for (var r = 0; r < f.length(); r++) {
                var t = f.get(r);
                q.add(t, p.get(t))
            }
        }
        var f = I(this, a);
        if (!(f instanceof rb))
            throw Error("TypeError: Non-List argument given to ForLet instruction.");
        var g = this.h;
        d = I(this, d);
        var h = Ca(g);
        for (e(g, h); eb(h, b); ) {
            var m = db(h, d);
            if (m instanceof wa) {
                if ("break" === m.h)
                    break;
                if ("return" === m.h)
                    return m
            }
            var n = Ca(g);
            e(h, n);
            eb(n, c);
            h = n
        }
    }
      , Td = function(a, b, c) {
        var d = this.h
          , e = I(this, b);
        if (!(e instanceof rb))
            throw Error("Error: non-List value given for Fn argument names.");
        var f = Array.prototype.slice.call(arguments, 2);
        return new ed(a,function() {
            return function(g) {
                var h = Ca(d);
                void 0 === h.h && (h.h = this.h.h);
                for (var m = Array.prototype.slice.call(arguments, 0), n = 0; n < m.length; n++)
                    if (m[n] = I(this, m[n]),
                    m[n]instanceof wa)
                        return m[n];
                for (var p = e.get("length"), q = 0; q < p; q++)
                    q < m.length ? h.add(e.get(q), m[q]) : h.add(e.get(q), void 0);
                h.add("arguments", new rb(m));
                var r = db(h, f);
                if (r instanceof wa)
                    return "return" === r.h ? r.s : r
            }
        }())
    }
      , Ud = function(a) {
        a = I(this, a);
        var b = this.h
          , c = !1;
        if (c && !b.has(a))
            throw new ReferenceError(a + " is not defined.");
        return b.get(a)
    }
      , Vd = function(a, b) {
        var c;
        a = I(this, a);
        b = I(this, b);
        if (void 0 === a || null === a) {
            var d = "TypeError: Cannot read properties of " + a + " (reading '" + b + "')";
            if (od())
                throw new qd(d);
            throw Error(d);
        }
        if (a instanceof sb || a instanceof rb || a instanceof ed)
            c = a.get(b);
        else if ("string" === typeof a)
            "length" === b ? c = a.length : qb(b) && (c = a[b]);
        else if (a instanceof jd)
            return;
        return c
    }
      , Wd = function(a, b) {
        return I(this, a) > I(this, b)
    }
      , Xd = function(a, b) {
        return I(this, a) >= I(this, b)
    }
      , Yd = function(a, b) {
        a = I(this, a);
        b = I(this, b);
        a instanceof jd && (a = a.h);
        b instanceof jd && (b = b.h);
        return a === b
    }
      , Zd = function(a, b) {
        return !Yd.call(this, a, b)
    }
      , $d = function(a, b, c) {
        var d = [];
        I(this, a) ? d = I(this, b) : c && (d = I(this, c));
        var e = db(this.h, d);
        if (e instanceof wa)
            return e
    }
      , ae = function(a, b) {
        return I(this, a) < I(this, b)
    }
      , be = function(a, b) {
        return I(this, a) <= I(this, b)
    }
      , ce = function(a) {
        for (var b = new rb, c = 0; c < arguments.length; c++) {
            var d = I(this, arguments[c]);
            b.push(d)
        }
        return b
    }
      , de = function(a) {
        for (var b = new sb, c = 0; c < arguments.length - 1; c += 2) {
            var d = I(this, arguments[c]) + ""
              , e = I(this, arguments[c + 1]);
            b.set(d, e)
        }
        return b
    }
      , ee = function(a, b) {
        return I(this, a) % I(this, b)
    }
      , fe = function(a, b) {
        return I(this, a) * I(this, b)
    }
      , ge = function(a) {
        return -I(this, a)
    }
      , he = function(a) {
        return !I(this, a)
    }
      , ie = function(a, b) {
        return !Hd.call(this, a, b)
    }
      , je = function() {
        return null
    }
      , ke = function(a, b) {
        return I(this, a) || I(this, b)
    }
      , le = function(a, b) {
        var c = I(this, a);
        I(this, b);
        return c
    }
      , me = function(a) {
        return I(this, a)
    }
      , ne = function(a) {
        return Array.prototype.slice.apply(arguments)
    }
      , oe = function(a) {
        return new wa("return",I(this, a))
    }
      , pe = function(a, b, c) {
        a = I(this, a);
        b = I(this, b);
        c = I(this, c);
        if (null === a || void 0 === a) {
            var d = "TypeError: Can't set property " + b + " of " + a + ".";
            if (od())
                throw new qd(d);
            throw Error(d);
        }
        (a instanceof ed || a instanceof rb || a instanceof sb) && a.set(b, c);
        return c
    }
      , qe = function(a, b) {
        return I(this, a) - I(this, b)
    }
      , re = function(a, b, c) {
        a = I(this, a);
        var d = I(this, b)
          , e = I(this, c);
        if (!Ha(d) || !Ha(e))
            throw Error("Error: Malformed switch instruction.");
        for (var f, g = !1, h = 0; h < d.length; h++)
            if (g || a === I(this, d[h]))
                if (f = I(this, e[h]),
                f instanceof wa) {
                    var m = f.h;
                    if ("break" === m)
                        return;
                    if ("return" === m || "continue" === m)
                        return f
                } else
                    g = !0;
        if (e.length === d.length + 1 && (f = I(this, e[e.length - 1]),
        f instanceof wa && ("return" === f.h || "continue" === f.h)))
            return f
    }
      , se = function(a, b, c) {
        return I(this, a) ? I(this, b) : I(this, c)
    }
      , te = function(a) {
        a = I(this, a);
        return a instanceof ed ? "function" : typeof a
    }
      , ue = function(a) {
        for (var b = this.h, c = 0; c < arguments.length; c++) {
            var d = arguments[c];
            "string" !== typeof d || b.add(d, void 0)
        }
    }
      , ve = function(a, b, c, d) {
        var e = I(this, d);
        if (I(this, c)) {
            var f = db(this.h, e);
            if (f instanceof wa) {
                if ("break" === f.h)
                    return;
                if ("return" === f.h)
                    return f
            }
        }
        for (; I(this, a); ) {
            var g = db(this.h, e);
            if (g instanceof wa) {
                if ("break" === g.h)
                    break;
                if ("return" === g.h)
                    return g
            }
            I(this, b)
        }
    }
      , we = function(a) {
        return ~Number(I(this, a))
    }
      , xe = function(a, b) {
        return Number(I(this, a)) << Number(I(this, b))
    }
      , ye = function(a, b) {
        return Number(I(this, a)) >> Number(I(this, b))
    }
      , ze = function(a, b) {
        return Number(I(this, a)) >>> Number(I(this, b))
    }
      , Ae = function(a, b) {
        return Number(I(this, a)) & Number(I(this, b))
    }
      , Be = function(a, b) {
        return Number(I(this, a)) ^ Number(I(this, b))
    }
      , Ce = function(a, b) {
        return Number(I(this, a)) | Number(I(this, b))
    }
      , De = function() {}
      , Ee = function(a, b, c, d, e) {
        var f = !0;
        try {
            var g = I(this, c);
            if (g instanceof wa)
                return g
        } catch (r) {
            if (!(r instanceof qd && a))
                throw f = r instanceof qd,
                r;
            var h = Ca(this.h)
              , m = new jd(r);
            h.add(b, m);
            var n = I(this, d)
              , p = db(h, n);
            if (p instanceof wa)
                return p
        } finally {
            if (f && void 0 !== e) {
                var q = I(this, e);
                if (q instanceof wa)
                    return q
            }
        }
    };
    var Ge = function() {
        this.h = new fb;
        Fe(this)
    };
    Ge.prototype.execute = function(a) {
        return this.h.s(a)
    }
    ;
    var Fe = function(a) {
        var b = function(c, d) {
            var e = new ed(String(c),d);
            e.Jb();
            a.h.h.set(String(c), e)
        };
        b("map", de);
        b("and", Zc);
        b("contains", bd);
        b("equals", $c);
        b("or", ad);
        b("startsWith", cd);
        b("variable", dd)
    };
    var Ie = function() {
        this.h = new fb;
        He(this)
    };
    Ie.prototype.execute = function(a) {
        return Je(this.h.s(a))
    }
    ;
    var Ke = function(a, b, c) {
        return Je(a.h.F(b, c))
    }
      , He = function(a) {
        var b = function(c, d) {
            var e = String(c)
              , f = new ed(e,d);
            f.Jb();
            a.h.h.set(e, f)
        };
        b(0, ud);
        b(1, vd);
        b(2, wd);
        b(3, xd);
        b(56, Ae);
        b(57, xe);
        b(58, we);
        b(59, Ce);
        b(60, ye);
        b(61, ze);
        b(62, Be);
        b(53, yd);
        b(4, zd);
        b(5, Ad);
        b(52, Cd);
        b(6, Dd);
        b(49, Ed);
        b(7, ce);
        b(8, de);
        b(9, Ad);
        b(50, Fd);
        b(10, Gd);
        b(12, Hd);
        b(13, Id);
        b(51, Td);
        b(47, Ld);
        b(54, Md);
        b(55, Nd);
        b(63, Sd);
        b(64, Pd);
        b(65, Qd);
        b(66, Rd);
        b(15, Ud);
        b(16, Vd);
        b(17, Vd);
        b(18, Wd);
        b(19, Xd);
        b(20, Yd);
        b(21, Zd);
        b(22, $d);
        b(23, ae);
        b(24, be);
        b(25, ee);
        b(26, fe);
        b(27, ge);
        b(28, he);
        b(29, ie);
        b(45, je);
        b(30, ke);
        b(32, le);
        b(33, le);
        b(34, me);
        b(35, me);
        b(46, ne);
        b(36, oe);
        b(43, pe);
        b(37, qe);
        b(38, re);
        b(39, se);
        b(67, Ee);
        b(40, te);
        b(44, De);
        b(41, ue);
        b(42, ve)
    };
    function Je(a) {
        if (a instanceof wa || a instanceof ed || a instanceof rb || a instanceof sb || a instanceof jd || null === a || void 0 === a || "string" === typeof a || "number" === typeof a || "boolean" === typeof a)
            return a
    }
    ;var Le = function(a) {
        this.message = a
    };
    function Me(a) {
        var b = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[a];
        return void 0 === b ? new Le("Value " + a + " can not be encoded in web-safe base64 dictionary.") : b
    }
    ;function Ne(a) {
        switch (a) {
        case 1:
            return "1";
        case 2:
        case 4:
            return "0";
        default:
            return "-"
        }
    }
    ;var Oe = function() {
        var a = function(b) {
            return {
                toString: function() {
                    return b
                }
            }
        };
        return {
            vk: a("consent"),
            oi: a("convert_case_to"),
            ri: a("convert_false_to"),
            si: a("convert_null_to"),
            ui: a("convert_true_to"),
            vi: a("convert_undefined_to"),
            In: a("debug_mode_metadata"),
            ma: a("function"),
            eh: a("instance_name"),
            bl: a("live_only"),
            fl: a("malware_disabled"),
            il: a("metadata"),
            ml: a("original_activity_id"),
            Wn: a("original_vendor_template_id"),
            Vn: a("once_on_load"),
            kl: a("once_per_event"),
            sj: a("once_per_load"),
            ao: a("priority_override"),
            bo: a("respected_consent_types"),
            xj: a("setup_tags"),
            we: a("tag_id"),
            Cj: a("teardown_tags")
        }
    }();
    var kf;
    var lf = [], mf = [], nf = [], of = [], pf = [], qf = {}, rf, sf, tf = function(a) {
        sf = sf || a
    }, uf = function(a) {}, vf, wf = [], xf = [], yf = function(a, b) {
        var c = {};
        c[Oe.ma] = "__" + a;
        for (var d in b)
            b.hasOwnProperty(d) && (c["vtp_" + d] = b[d]);
        return c
    }, zf = function(a, b) {
        var c = a[Oe.ma]
          , d = b && b.event;
        if (!c)
            throw Error("Error: No function name given for function call.");
        var e = qf[c], f = b && 2 === b.type && d.reportMacroDiscrepancy && e && -1 !== wf.indexOf(c), g = {}, h = {}, m;
        for (m in a)
            a.hasOwnProperty(m) && 0 === m.indexOf("vtp_") && (e && (g[m] = a[m]),
            !e || f) && (h[m.substr(4)] = a[m]);
        e && d && d.cachedModelValues && (g.vtp_gtmCachedValues = d.cachedModelValues);
        if (b) {
            if (null == b.name) {
                var n;
                a: {
                    var p = b.type
                      , q = b.index;
                    if (null == q)
                        n = "";
                    else {
                        var r;
                        switch (p) {
                        case 2:
                            r = lf[q];
                            break;
                        case 1:
                            r = of[q];
                            break;
                        default:
                            n = "";
                            break a
                        }
                        var t = r && r[Oe.eh];
                        n = t ? String(t) : ""
                    }
                }
                b.name = n
            }
            e && (g.vtp_gtmEntityIndex = b.index,
            g.vtp_gtmEntityName = b.name)
        }
        var u, v, w;
        if (f && -1 === xf.indexOf(c)) {
            xf.push(c);
            var x = Ta();
            u = e(g);
            var y = Ta() - x
              , B = Ta();
            v = kf(c, h, b);
            w = y - (Ta() - B)
        } else if (e && (u = e(g)),
        !e || f)
            v = kf(c, h, b);
        f && d && (d.reportMacroDiscrepancy(d.id, c, void 0, !0),
        pb(u) ? (Ha(u) ? Ha(v) : lb(u) ? lb(v) : u === v) || d.reportMacroDiscrepancy(d.id, c) : u !== v && d.reportMacroDiscrepancy(d.id, c),
        void 0 != w && d.reportMacroDiscrepancy(d.id, c, w));
        return e ? u : v
    }, Bf = function(a, b, c) {
        c = c || [];
        var d = {}, e;
        for (e in a)
            a.hasOwnProperty(e) && (d[e] = Af(a[e], b, c));
        return d
    }, Af = function(a, b, c) {
        if (Ha(a)) {
            var d;
            switch (a[0]) {
            case "function_id":
                return a[1];
            case "list":
                d = [];
                for (var e = 1; e < a.length; e++)
                    d.push(Af(a[e], b, c));
                return d;
            case "macro":
                var f = a[1];
                if (c[f])
                    return;
                var g = lf[f];
                if (!g || b.isBlocked(g))
                    return;
                c[f] = !0;
                var h = String(g[Oe.eh]);
                try {
                    var m = Bf(g, b, c);
                    m.vtp_gtmEventId = b.id;
                    b.priorityId && (m.vtp_gtmPriorityId = b.priorityId);
                    d = zf(m, {
                        event: b,
                        index: f,
                        type: 2,
                        name: h
                    });
                    vf && (d = vf.Hl(d, m))
                } catch (y) {
                    b.logMacroError && b.logMacroError(y, Number(f), h),
                    d = !1
                }
                c[f] = !1;
                return d;
            case "map":
                d = {};
                for (var n = 1; n < a.length; n += 2)
                    d[Af(a[n], b, c)] = Af(a[n + 1], b, c);
                return d;
            case "template":
                d = [];
                for (var p = !1, q = 1; q < a.length; q++) {
                    var r = Af(a[q], b, c);
                    sf && (p = p || sf.ym(r));
                    d.push(r)
                }
                return sf && p ? sf.Jl(d) : d.join("");
            case "escape":
                d = Af(a[1], b, c);
                if (sf && Ha(a[1]) && "macro" === a[1][0] && sf.zm(a))
                    return sf.Zm(d);
                d = String(d);
                for (var t = 2; t < a.length; t++)
                    Pe[a[t]] && (d = Pe[a[t]](d));
                return d;
            case "tag":
                var u = a[1];
                if (!of[u])
                    throw Error("Unable to resolve tag reference " + u + ".");
                return d = {
                    Mj: a[2],
                    index: u
                };
            case "zb":
                var v = {
                    arg0: a[2],
                    arg1: a[3],
                    ignore_case: a[5]
                };
                v[Oe.ma] = a[1];
                var w = Cf(v, b, c)
                  , x = !!a[4];
                return x || 2 !== w ? x !== (1 === w) : null;
            default:
                throw Error("Attempting to expand unknown Value type: " + a[0] + ".");
            }
        }
        return a
    }, Cf = function(a, b, c) {
        try {
            return rf(Bf(a, b, c))
        } catch (d) {
            JSON.stringify(a)
        }
        return 2
    }, Df = function(a) {
        var b = a[Oe.ma];
        if (!b)
            throw Error("Error: No function name given for function call.");
        return !!qf[b]
    };
    var Ef = function(a, b, c) {
        var d;
        d = Error.call(this, c);
        this.message = d.message;
        "stack"in d && (this.stack = d.stack);
        this.h = a
    };
    sa(Ef, Error);
    function Ff(a, b) {
        if (Ha(a)) {
            Object.defineProperty(a, "context", {
                value: {
                    line: b[0]
                }
            });
            for (var c = 1; c < a.length; c++)
                Ff(a[c], b[c])
        }
    }
    ;var Gf = function(a, b) {
        var c;
        c = Error.call(this);
        this.message = c.message;
        "stack"in c && (this.stack = c.stack);
        this.Um = a;
        this.s = b;
        this.h = []
    };
    sa(Gf, Error);
    var If = function() {
        return function(a, b) {
            a instanceof Gf || (a = new Gf(a,Hf));
            b && a.h.push(b);
            throw a;
        }
    };
    function Hf(a) {
        if (!a.length)
            return a;
        a.push({
            id: "main",
            line: 0
        });
        for (var b = a.length - 1; 0 < b; b--)
            Ga(a[b].id) && a.splice(b++, 1);
        for (var c = a.length - 1; 0 < c; c--)
            a[c].line = a[c - 1].line;
        a.splice(0, 1);
        return a
    }
    ;var Lf = function(a) {
        function b(r) {
            for (var t = 0; t < r.length; t++)
                d[r[t]] = !0
        }
        for (var c = [], d = [], e = Jf(a), f = 0; f < mf.length; f++) {
            var g = mf[f]
              , h = Kf(g, e);
            if (h) {
                for (var m = g.add || [], n = 0; n < m.length; n++)
                    c[m[n]] = !0;
                b(g.block || [])
            } else
                null === h && b(g.block || []);
        }
        for (var p = [], q = 0; q < of.length; q++)
            c[q] && !d[q] && (p[q] = !0);
        return p
    }
      , Kf = function(a, b) {
        for (var c = a["if"] || [], d = 0; d < c.length; d++) {
            var e = b(c[d]);
            if (0 === e)
                return !1;
            if (2 === e)
                return null
        }
        for (var f = a.unless || [], g = 0; g < f.length; g++) {
            var h = b(f[g]);
            if (2 === h)
                return null;
            if (1 === h)
                return !1
        }
        return !0
    }
      , Jf = function(a) {
        var b = [];
        return function(c) {
            void 0 === b[c] && (b[c] = Cf(nf[c], a));
            return b[c]
        }
    };
    var Mf = {
        Hl: function(a, b) {
            b[Oe.oi] && "string" === typeof a && (a = 1 == b[Oe.oi] ? a.toLowerCase() : a.toUpperCase());
            b.hasOwnProperty(Oe.si) && null === a && (a = b[Oe.si]);
            b.hasOwnProperty(Oe.vi) && void 0 === a && (a = b[Oe.vi]);
            b.hasOwnProperty(Oe.ui) && !0 === a && (a = b[Oe.ui]);
            b.hasOwnProperty(Oe.ri) && !1 === a && (a = b[Oe.ri]);
            return a
        }
    };
    var Nf = function() {
        this.h = {}
    }
      , Pf = function(a, b) {
        var c = Of.s, d;
        null != (d = c.h)[a] || (d[a] = []);
        c.h[a].push(function() {
            return b.apply(null, ka(ta.apply(0, arguments)))
        })
    };
    function Qf(a, b, c, d) {
        if (a)
            for (var e = 0; e < a.length; e++) {
                var f = void 0
                  , g = "A policy function denied the permission request";
                try {
                    f = a[e](b, c, d),
                    g += "."
                } catch (h) {
                    g = "string" === typeof h ? g + (": " + h) : h instanceof Error ? g + (": " + h.message) : g + "."
                }
                if (!f)
                    throw new Ef(c,d,g);
            }
    }
    function Rf(a, b, c) {
        return function() {
            var d = arguments[0];
            if (d) {
                var e = a.h[d]
                  , f = a.h.all;
                if (e || f) {
                    var g = c.apply(void 0, Array.prototype.slice.call(arguments, 0));
                    Qf(e, b, d, g);
                    Qf(f, b, d, g)
                }
            }
        }
    }
    ;var Sf = []
      , Tf = {}
      , Uf = function(a) {
        return void 0 == Sf[a] ? !1 : Sf[a]
    };
    var Yf = function() {
        var a = data.permissions || {}
          , b = Vf.ctid
          , c = this;
        this.s = new Nf;
        this.h = {};
        var d = Uf(15)
          , e = {}
          , f = {}
          , g = Rf(this.s, b, function() {
            var h = arguments[0];
            return h && e[h] ? e[h].apply(void 0, Array.prototype.slice.call(arguments, 0)) : {}
        });
        l(a, function(h, m) {
            var n = {};
            l(m, function(q, r) {
                var t = Wf(q, r);
                n[q] = t.assert;
                e[q] || (e[q] = t.K);
                d && t.Fj && !f[q] && (f[q] = t.Fj)
            });
            var p;
            d && (p = function(q) {
                var r = ta.apply(1, arguments);
                if (!n[q])
                    throw Xf(q, {}, "The requested additional permission " + q + " is not configured.");
                g.apply(null, [q].concat(ka(r)))
            }
            );
            c.h[h] = function(q, r) {
                var t = n[q];
                if (!t)
                    throw Xf(q, {}, "The requested permission " + q + " is not configured.");
                var u = Array.prototype.slice.call(arguments, 0);
                t.apply(void 0, u);
                g.apply(void 0, u);
                if (d) {
                    var v = f[q];
                    v && v.apply(null, [p].concat(ka(u.slice(1))))
                }
            }
        })
    }
      , Zf = function(a) {
        return Of.h[a] || function() {}
    };
    function Wf(a, b) {
        var c = yf(a, b);
        c.vtp_permissionName = a;
        c.vtp_createPermissionError = Xf;
        try {
            return zf(c)
        } catch (d) {
            return {
                assert: function(e) {
                    throw new Ef(e,{},"Permission " + e + " is unknown.");
                },
                K: function() {
                    if (Uf(15))
                        throw new Ef(a,{},"Permission " + a + " is unknown.");
                    for (var e = {}, f = 0; f < arguments.length; ++f)
                        e["arg" + (f + 1)] = arguments[f];
                    return e
                }
            }
        }
    }
    function Xf(a, b, c) {
        return new Ef(a,b,c)
    }
    ;var $f = !1;
    var ag = {};
    ag.Bn = Oa('');
    ag.Ll = Oa('');
    var bg = $f
      , cg = ag.Ll
      , dg = ag.Bn;
    var rg = ["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"];
    function sg(a, b) {
        a = String(a);
        b = String(b);
        var c = a.length - b.length;
        return 0 <= c && a.indexOf(b, c) === c
    }
    var tg = new Ka;
    function ug(a, b, c) {
        var d = c ? "i" : void 0;
        try {
            var e = String(b) + d
              , f = tg.get(e);
            f || (f = new RegExp(b,d),
            tg.set(e, f));
            return f.test(a)
        } catch (g) {
            return !1
        }
    }
    function vg(a, b) {
        return 0 <= String(a).indexOf(String(b))
    }
    function wg(a, b) {
        return String(a) === String(b)
    }
    function xg(a, b) {
        return Number(a) >= Number(b)
    }
    function yg(a, b) {
        return Number(a) <= Number(b)
    }
    function zg(a, b) {
        return Number(a) > Number(b)
    }
    function Ag(a, b) {
        return Number(a) < Number(b)
    }
    function Bg(a, b) {
        return 0 === String(a).indexOf(String(b))
    }
    ;var Ig = /^[1-9a-zA-Z_-][1-9a-c][1-9a-v]\d$/;
    function Jg(a, b) {
        for (var c = "", d = !0; 7 < a; ) {
            var e = a & 31;
            a >>= 5;
            d ? d = !1 : e |= 32;
            c = Me(e) + c
        }
        a <<= 2;
        d || (a |= 32);
        return c = Me(a | b) + c
    }
    ;var Kg = /^([a-z][a-z0-9]*):(!|\?)(\*|string|boolean|number|Fn|PixieMap|List|OpaqueValue)$/i
      , Lg = {
        Fn: "function",
        PixieMap: "Object",
        List: "Array"
    }
      , K = function(a, b, c) {
        for (var d = 0; d < b.length; d++) {
            var e = Kg.exec(b[d]);
            if (!e)
                throw Error("Internal Error in " + a);
            var f = e[1]
              , g = "!" === e[2]
              , h = e[3]
              , m = c[d];
            if (null == m) {
                if (g)
                    throw Error("Error in " + a + ". Required argument " + f + " not supplied.");
            } else if ("*" !== h) {
                var n = typeof m;
                m instanceof ed ? n = "Fn" : m instanceof rb ? n = "List" : m instanceof sb ? n = "PixieMap" : m instanceof jd && (n = "OpaqueValue");
                if (n != h)
                    throw Error("Error in " + a + ". Argument " + f + " has type " + (Lg[n] || n) + ", which does not match required type " + (Lg[h] || h) + ".");
            }
        }
    };
    function Mg(a) {
        return "" + a
    }
    function Ng(a, b) {
        var c = [];
        return c
    }
    ;var Og = function(a, b) {
        var c = new ed(a,function() {
            for (var d = Array.prototype.slice.call(arguments, 0), e = 0; e < d.length; e++)
                d[e] = I(this, d[e]);
            try {
                return b.apply(this, d)
            } catch (g) {
                if (od())
                    throw new qd(g.message);
                throw g;
            }
        }
        );
        c.Jb();
        return c
    }
      , Pg = function(a, b) {
        var c = new sb, d;
        for (d in b)
            if (b.hasOwnProperty(d)) {
                var e = b[d];
                Ea(e) ? c.set(d, Og(a + "_" + d, e)) : lb(e) ? c.set(d, Pg(a + "_" + d, e)) : (Ga(e) || k(e) || "boolean" === typeof e) && c.set(d, e)
            }
        c.Jb();
        return c
    };
    var Qg = function(a, b) {
        K(J(this), ["apiName:!string", "message:?string"], arguments);
        var c = {}
          , d = new sb;
        return d = Pg("AssertApiSubject", c)
    };
    var Rg = function(a, b) {
        K(J(this), ["actual:?*", "message:?string"], arguments);
        if (a instanceof ld)
            throw Error("Argument actual cannot have type Promise. Assertions on asynchronous code aren't supported.");
        var c = {}
          , d = new sb;
        return d = Pg("AssertThatSubject", c)
    };
    function Sg(a) {
        return function() {
            for (var b = [], c = this.h, d = 0; d < arguments.length; ++d)
                b.push(nd(arguments[d], c));
            return md(a.apply(null, b))
        }
    }
    var Ug = function() {
        for (var a = Math, b = Tg, c = {}, d = 0; d < b.length; d++) {
            var e = b[d];
            a.hasOwnProperty(e) && (c[e] = Sg(a[e].bind(a)))
        }
        return c
    };
    var Vg = function(a) {
        var b;
        return b
    };
    var Wg = function(a) {
        var b;
        return b
    };
    var Xg = function(a) {
        try {
            return encodeURI(a)
        } catch (b) {}
    };
    var Yg = function(a) {
        try {
            return encodeURIComponent(a)
        } catch (b) {}
    };
    function Zg(a, b) {
        var c = !1;
        return c
    }
    Zg.D = "internal.evaluateBooleanExpression";
    var dh = function(a) {
        K(J(this), ["message:?string"], arguments);
    };
    var eh = function(a, b) {
        K(J(this), ["min:!number", "max:!number"], arguments);
        return Ja(a, b)
    };
    var fh = function() {
        return (new Date).getTime()
    };
    var gh = function(a) {
        if (null === a)
            return "null";
        if (a instanceof rb)
            return "array";
        if (a instanceof ed)
            return "function";
        if (a instanceof jd) {
            a = a.h;
            if (void 0 === a.constructor || void 0 === a.constructor.name) {
                var b = String(a);
                return b.substring(8, b.length - 1)
            }
            return String(a.constructor.name)
        }
        return typeof a
    };
    var hh = function(a) {
        function b(c) {
            return function(d) {
                try {
                    return c(d)
                } catch (e) {
                    (bg || dg) && a.call(this, e.message)
                }
            }
        }
        return {
            parse: b(function(c) {
                return md(JSON.parse(c))
            }),
            stringify: b(function(c) {
                return JSON.stringify(nd(c))
            })
        }
    };
    var ih = function(a) {
        return Na(nd(a, this.h))
    };
    var jh = function(a) {
        return Number(nd(a, this.h))
    };
    var kh = function(a) {
        return null === a ? "null" : void 0 === a ? "undefined" : a.toString()
    };
    var ph = function(a, b, c) {
        var d = null
          , e = !1;
        return e ? d : null
    };
    var Tg = "floor ceil round max min abs pow sqrt".split(" ");
    var qh = function() {
        var a = {};
        return {
            Xl: function(b) {
                return a.hasOwnProperty(b) ? a[b] : void 0
            },
            un: function(b, c) {
                a[b] = c
            },
            reset: function() {
                a = {}
            }
        }
    }
      , rh = function(a, b) {
        return function() {
            var c = Array.prototype.slice.call(arguments, 0);
            c.unshift(b);
            return ed.prototype.invoke.apply(a, c)
        }
    }
      , sh = function(a, b) {
        K(J(this), ["apiName:!string", "mock:?*"], arguments);
    };
    var th = {};
    th.keys = function(a) {
        return new rb
    }
    ;
    th.values = function(a) {
        return new rb
    }
    ;
    th.entries = function(a) {
        return new rb
    }
    ;
    th.freeze = function(a) {
        return a
    }
    ;
    th.delete = function(a, b) {
        return !1
    }
    ;
    var L = function(a, b, c) {
        var d = a.h.h;
        if (!d)
            throw Error("Missing program state.");
        if (d.kn) {
            try {
                d.Hj.apply(null, Array.prototype.slice.call(arguments, 1))
            } catch (e) {
                throw Ab("TAGGING", 21),
                e;
            }
            return
        }
        d.Hj.apply(null, Array.prototype.slice.call(arguments, 1))
    };
    var vh = function() {
        this.h = {};
        this.s = {};
    };
    vh.prototype.get = function(a, b) {
        var c = this.h.hasOwnProperty(a) ? this.h[a] : void 0;
        return c
    }
    ;
    vh.prototype.add = function(a, b, c) {
        if (this.h.hasOwnProperty(a))
            throw "Attempting to add a function which already exists: " + a + ".";
        if (this.s.hasOwnProperty(a))
            throw "Attempting to add an API with an existing private API name: " + a + ".";
        this.h[a] = c ? void 0 : Ea(b) ? Og(a, b) : Pg(a, b)
    }
    ;
    function wh(a, b) {
        var c = void 0;
        return c
    }
    ;function xh() {
        var a = {};
        return a
    }
    ;var zh = function(a) {
        return yh ? C.querySelectorAll(a) : null
    }
      , Ah = function(a, b) {
        if (!yh)
            return null;
        if (Element.prototype.closest)
            try {
                return a.closest(b)
            } catch (e) {
                return null
            }
        var c = Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector
          , d = a;
        if (!C.documentElement.contains(d))
            return null;
        do {
            try {
                if (c.call(d, b))
                    return d
            } catch (e) {
                break
            }
            d = d.parentElement || d.parentNode
        } while (null !== d && 1 === d.nodeType);
        return null
    }
      , Bh = !1;
    if (C.querySelectorAll)
        try {
            var Ch = C.querySelectorAll(":root");
            Ch && 1 == Ch.length && Ch[0] == C.documentElement && (Bh = !0)
        } catch (a) {}
    var yh = Bh;
    var M = function(a) {
        Ab("GTM", a)
    };
    var N = {
        g: {
            xa: "ad_personalization",
            J: "ad_storage",
            N: "ad_user_data",
            R: "analytics_storage",
            Ab: "region",
            kc: "consent_updated",
            jf: "wait_for_update",
            wi: "ads",
            mg: "all",
            yk: "maps",
            zk: "playstore",
            Ak: "search",
            Bk: "shopping",
            Ck: "youtube",
            xi: "app_remove",
            yi: "app_store_refund",
            zi: "app_store_subscription_cancel",
            Ai: "app_store_subscription_convert",
            Bi: "app_store_subscription_renew",
            og: "add_payment_info",
            pg: "add_shipping_info",
            mc: "add_to_cart",
            nc: "remove_from_cart",
            qg: "view_cart",
            Ob: "begin_checkout",
            oc: "select_item",
            ib: "view_item_list",
            Bb: "select_promotion",
            jb: "view_promotion",
            ya: "purchase",
            qc: "refund",
            La: "view_item",
            rg: "add_to_wishlist",
            Ek: "exception",
            Ci: "first_open",
            Di: "first_visit",
            da: "gtag.config",
            Sa: "gtag.get",
            Ei: "in_app_purchase",
            sc: "page_view",
            Fk: "screen_view",
            Fi: "session_start",
            Gk: "timing_complete",
            Hk: "track_social",
            Cd: "user_engagement",
            kb: "gclgb",
            Ta: "gclid",
            aa: "ads_data_redaction",
            Gi: "gad_source",
            Dd: "gclid_url",
            Hi: "gclsrc",
            kf: "wbraid",
            ka: "allow_ad_personalization_signals",
            lf: "allow_custom_scripts",
            nf: "allow_display_features",
            Ed: "allow_enhanced_conversions",
            lb: "allow_google_signals",
            Fa: "allow_interest_groups",
            Ik: "app_id",
            Jk: "app_installer_id",
            Kk: "app_name",
            Lk: "app_version",
            Cb: "auid",
            Ii: "auto_detection_enabled",
            Pb: "aw_remarketing",
            pf: "aw_remarketing_only",
            Fd: "discount",
            Gd: "aw_feed_country",
            Hd: "aw_feed_language",
            Z: "items",
            Id: "aw_merchant_id",
            sg: "aw_basket_type",
            Pc: "campaign_content",
            Qc: "campaign_id",
            Rc: "campaign_medium",
            Sc: "campaign_name",
            Tc: "campaign",
            Uc: "campaign_source",
            Vc: "campaign_term",
            nb: "client_id",
            Ji: "rnd",
            Ki: "content_group",
            Li: "content_type",
            Xa: "conversion_cookie_prefix",
            Wc: "conversion_id",
            za: "conversion_linker",
            Mk: "conversion_linker_disabled",
            Qb: "conversion_api",
            qf: "cookie_deprecation",
            Ua: "cookie_domain",
            Va: "cookie_expires",
            Ya: "cookie_flags",
            uc: "cookie_name",
            Rb: "cookie_path",
            Oa: "cookie_prefix",
            vc: "cookie_update",
            wc: "country",
            Aa: "currency",
            Jd: "customer_lifetime_value",
            Xc: "custom_map",
            ug: "gcldc",
            Kd: "dclid",
            Mi: "debug_mode",
            fa: "developer_id",
            Ni: "disable_merchant_reported_purchases",
            Yc: "dc_custom_params",
            Oi: "dc_natural_search",
            vg: "dynamic_event_settings",
            wg: "affiliation",
            Ld: "checkout_option",
            rf: "checkout_step",
            xg: "coupon",
            Zc: "item_list_name",
            tf: "list_name",
            Pi: "promotions",
            ad: "shipping",
            uf: "tax",
            Md: "engagement_time_msec",
            Nd: "enhanced_client_id",
            Od: "enhanced_conversions",
            yg: "enhanced_conversions_automatic_settings",
            Pd: "estimated_delivery_date",
            vf: "euid_logged_in_state",
            bd: "event_callback",
            Nk: "event_category",
            pb: "event_developer_id_string",
            Ok: "event_label",
            Qd: "event",
            Rd: "event_settings",
            Sd: "event_timeout",
            Pk: "description",
            Qk: "fatal",
            Qi: "experiments",
            wf: "firebase_id",
            xc: "first_party_collection",
            Td: "_x_20",
            qb: "_x_19",
            Ri: "fledge_drop_reason",
            zg: "fledge",
            Ag: "flight_error_code",
            Bg: "flight_error_message",
            Si: "fl_activity_category",
            Ti: "fl_activity_group",
            Cg: "fl_advertiser_id",
            Ui: "fl_ar_dedupe",
            Dg: "match_id",
            Vi: "fl_random_number",
            Wi: "tran",
            Xi: "u",
            Ud: "gac_gclid",
            yc: "gac_wbraid",
            Eg: "gac_wbraid_multiple_conversions",
            Fg: "ga_restrict_domain",
            Gg: "ga_temp_client_id",
            zc: "gdpr_applies",
            Hg: "geo_granularity",
            Db: "value_callback",
            rb: "value_key",
            Rk: "google_ono",
            Sb: "google_signals",
            Ig: "google_tld",
            Vd: "groups",
            Jg: "gsa_experiment_id",
            Wd: "iframe_state",
            dd: "ignore_referrer",
            xf: "internal_traffic_results",
            Tb: "is_legacy_converted",
            Eb: "is_legacy_loaded",
            Xd: "is_passthrough",
            ed: "_lps",
            Pa: "language",
            Yd: "legacy_developer_id_string",
            Ba: "linker",
            Ub: "accept_incoming",
            tb: "decorate_forms",
            X: "domains",
            Fb: "url_position",
            Kg: "method",
            Sk: "name",
            fd: "new_customer",
            Lg: "non_interaction",
            Yi: "optimize_id",
            Zi: "page_hostname",
            gd: "page_path",
            Ga: "page_referrer",
            Gb: "page_title",
            Mg: "passengers",
            Ng: "phone_conversion_callback",
            aj: "phone_conversion_country_code",
            Og: "phone_conversion_css_class",
            bj: "phone_conversion_ids",
            Pg: "phone_conversion_number",
            Qg: "phone_conversion_options",
            Rg: "_protected_audience_enabled",
            hd: "quantity",
            Zd: "redact_device_info",
            yf: "referral_exclusion_definition",
            Vb: "restricted_data_processing",
            cj: "retoken",
            Tk: "sample_rate",
            zf: "screen_name",
            Hb: "screen_resolution",
            dj: "search_term",
            Qa: "send_page_view",
            Wb: "send_to",
            jd: "server_container_url",
            kd: "session_duration",
            ae: "session_engaged",
            Af: "session_engaged_time",
            ub: "session_id",
            be: "session_number",
            ld: "delivery_postal_code",
            Uk: "temporary_client_id",
            Bf: "topmost_url",
            ej: "tracking_id",
            Cf: "traffic_type",
            Ca: "transaction_id",
            Ib: "transport_url",
            Sg: "trip_type",
            Xb: "update",
            Za: "url_passthrough",
            ce: "_user_agent_architecture",
            de: "_user_agent_bitness",
            ee: "_user_agent_full_version_list",
            fe: "_user_agent_mobile",
            he: "_user_agent_model",
            ie: "_user_agent_platform",
            je: "_user_agent_platform_version",
            ke: "_user_agent_wow64",
            Ha: "user_data",
            Tg: "user_data_auto_latency",
            Ug: "user_data_auto_meta",
            Vg: "user_data_auto_multi",
            Wg: "user_data_auto_selectors",
            Xg: "user_data_auto_status",
            me: "user_data_mode",
            ne: "user_data_settings",
            Ra: "user_id",
            ab: "user_properties",
            fj: "_user_region",
            oe: "us_privacy_string",
            la: "value",
            Yg: "wbraid_multiple_conversions",
            mj: "_host_name",
            nj: "_in_page_command",
            oj: "_is_passthrough_cid",
            Kb: "non_personalized_ads",
            ve: "_sst_parameters",
            ob: "conversion_label",
            ra: "page_location",
            sb: "global_developer_id_string",
            Ac: "tc_privacy_string"
        }
    }
      , bi = {}
      , ci = Object.freeze((bi[N.g.ka] = 1,
    bi[N.g.nf] = 1,
    bi[N.g.Ed] = 1,
    bi[N.g.lb] = 1,
    bi[N.g.Z] = 1,
    bi[N.g.Ua] = 1,
    bi[N.g.Va] = 1,
    bi[N.g.Ya] = 1,
    bi[N.g.uc] = 1,
    bi[N.g.Rb] = 1,
    bi[N.g.Oa] = 1,
    bi[N.g.vc] = 1,
    bi[N.g.Xc] = 1,
    bi[N.g.fa] = 1,
    bi[N.g.vg] = 1,
    bi[N.g.bd] = 1,
    bi[N.g.Rd] = 1,
    bi[N.g.Sd] = 1,
    bi[N.g.xc] = 1,
    bi[N.g.Fg] = 1,
    bi[N.g.Sb] = 1,
    bi[N.g.Ig] = 1,
    bi[N.g.Vd] = 1,
    bi[N.g.xf] = 1,
    bi[N.g.Tb] = 1,
    bi[N.g.Eb] = 1,
    bi[N.g.Ba] = 1,
    bi[N.g.yf] = 1,
    bi[N.g.Vb] = 1,
    bi[N.g.Qa] = 1,
    bi[N.g.Wb] = 1,
    bi[N.g.jd] = 1,
    bi[N.g.kd] = 1,
    bi[N.g.Af] = 1,
    bi[N.g.ld] = 1,
    bi[N.g.Ib] = 1,
    bi[N.g.Xb] = 1,
    bi[N.g.ne] = 1,
    bi[N.g.ab] = 1,
    bi[N.g.ve] = 1,
    bi));
    Object.freeze([N.g.ra, N.g.Ga, N.g.Gb, N.g.Pa, N.g.zf, N.g.Ra, N.g.wf, N.g.Ki]);
    var di = {}
      , ei = Object.freeze((di[N.g.xi] = 1,
    di[N.g.yi] = 1,
    di[N.g.zi] = 1,
    di[N.g.Ai] = 1,
    di[N.g.Bi] = 1,
    di[N.g.Ci] = 1,
    di[N.g.Di] = 1,
    di[N.g.Ei] = 1,
    di[N.g.Fi] = 1,
    di[N.g.Cd] = 1,
    di))
      , fi = {}
      , gi = Object.freeze((fi[N.g.og] = 1,
    fi[N.g.pg] = 1,
    fi[N.g.mc] = 1,
    fi[N.g.nc] = 1,
    fi[N.g.qg] = 1,
    fi[N.g.Ob] = 1,
    fi[N.g.oc] = 1,
    fi[N.g.ib] = 1,
    fi[N.g.Bb] = 1,
    fi[N.g.jb] = 1,
    fi[N.g.ya] = 1,
    fi[N.g.qc] = 1,
    fi[N.g.La] = 1,
    fi[N.g.rg] = 1,
    fi))
      , hi = Object.freeze([N.g.ka, N.g.lb, N.g.vc, N.g.xc, N.g.dd, N.g.Qa, N.g.Xb])
      , ii = Object.freeze([].concat(hi))
      , ji = Object.freeze([N.g.Va, N.g.Sd, N.g.kd, N.g.Af, N.g.Md])
      , ki = Object.freeze([].concat(ji))
      , li = {}
      , mi = (li[N.g.J] = "1",
    li[N.g.R] = "2",
    li[N.g.N] = "3",
    li[N.g.xa] = "4",
    li)
      , ni = {}
      , oi = Object.freeze((ni[N.g.ka] = 1,
    ni[N.g.Ed] = 1,
    ni[N.g.Fa] = 1,
    ni[N.g.Pb] = 1,
    ni[N.g.pf] = 1,
    ni[N.g.Fd] = 1,
    ni[N.g.Gd] = 1,
    ni[N.g.Hd] = 1,
    ni[N.g.Z] = 1,
    ni[N.g.Id] = 1,
    ni[N.g.Xa] = 1,
    ni[N.g.za] = 1,
    ni[N.g.Ua] = 1,
    ni[N.g.Va] = 1,
    ni[N.g.Ya] = 1,
    ni[N.g.Oa] = 1,
    ni[N.g.Aa] = 1,
    ni[N.g.Jd] = 1,
    ni[N.g.fa] = 1,
    ni[N.g.Ni] = 1,
    ni[N.g.Od] = 1,
    ni[N.g.Pd] = 1,
    ni[N.g.wf] = 1,
    ni[N.g.xc] = 1,
    ni[N.g.Tb] = 1,
    ni[N.g.Eb] = 1,
    ni[N.g.Pa] = 1,
    ni[N.g.fd] = 1,
    ni[N.g.ra] = 1,
    ni[N.g.Ga] = 1,
    ni[N.g.Ng] = 1,
    ni[N.g.Og] = 1,
    ni[N.g.Pg] = 1,
    ni[N.g.Qg] = 1,
    ni[N.g.Vb] = 1,
    ni[N.g.Qa] = 1,
    ni[N.g.Wb] = 1,
    ni[N.g.jd] = 1,
    ni[N.g.ld] = 1,
    ni[N.g.Ca] = 1,
    ni[N.g.Ib] = 1,
    ni[N.g.Xb] = 1,
    ni[N.g.Za] = 1,
    ni[N.g.Ha] = 1,
    ni[N.g.Ra] = 1,
    ni[N.g.la] = 1,
    ni))
      , pi = {}
      , qi = Object.freeze((pi[N.g.Ak] = "s",
    pi[N.g.Ck] = "y",
    pi[N.g.zk] = "p",
    pi[N.g.Bk] = "h",
    pi[N.g.wi] = "a",
    pi[N.g.yk] = "m",
    pi));
    Object.freeze(N.g);
    var ri = {}
      , si = z.google_tag_manager = z.google_tag_manager || {}
      , ti = Math.random();
    ri.fh = "4360";
    ri.ue = Number("0") || 0;
    ri.ja = "dataLayer";
    ri.Gn = "ChEI8Ne6rwYQ6a/807+G4qC0ARInAO5kqMVs32SAolaAbI34XSK6Yby8eLXadF4DXUFaVLWRu5OtCnxsGgJ/kg\x3d\x3d";
    var ui = {
        __cl: 1,
        __ecl: 1,
        __ehl: 1,
        __evl: 1,
        __fal: 1,
        __fil: 1,
        __fsl: 1,
        __hl: 1,
        __jel: 1,
        __lcl: 1,
        __sdl: 1,
        __tl: 1,
        __ytl: 1
    }, vi = {
        __paused: 1,
        __tg: 1
    }, wi;
    for (wi in ui)
        ui.hasOwnProperty(wi) && (vi[wi] = 1);
    var xi = Oa(""), yi, zi = !1;
    zi = !0;
    yi = zi;
    var Ai, Bi = !1;
    Ai = Bi;
    var Ci, Di = !1;
    Ci = Di;
    ri.Bd = "www.googletagmanager.com";
    var Ei = "" + ri.Bd + (yi ? "/gtag/js" : "/gtm.js")
      , Fi = null
      , Gi = null
      , Hi = {}
      , Ii = {}
      , Ji = function() {
        var a = si.sequence || 1;
        si.sequence = a + 1;
        return a
    };
    ri.wk = "";
    var Ki = "";
    ri.Jf = Ki;
    var Li = new function() {
        this.h = "";
        this.F = this.s = !1;
        this.W = this.M = this.Ea = this.C = ""
    }
      , Mi = function() {
        var a = Li.C.length;
        return "/" === Li.C[a - 1] ? Li.C.substring(0, a - 1) : Li.C
    };
    function Ni(a) {
        for (var b = {}, c = fa(a.split("|")), d = c.next(); !d.done; d = c.next())
            b[d.value] = !0;
        return b
    }
    var Oi = new Ka
      , Pi = {}
      , Qi = {}
      , Ti = {
        name: ri.ja,
        set: function(a, b) {
            nb($a(a, b), Pi);
            Ri()
        },
        get: function(a) {
            return Si(a, 2)
        },
        reset: function() {
            Oi = new Ka;
            Pi = {};
            Ri()
        }
    }
      , Si = function(a, b) {
        return 2 != b ? Oi.get(a) : Ui(a)
    }
      , Ui = function(a, b) {
        var c = a.split(".");
        b = b || [];
        for (var d = Pi, e = 0; e < c.length; e++) {
            if (null === d)
                return !1;
            if (void 0 === d)
                break;
            d = d[c[e]];
            if (-1 !== b.indexOf(d))
                return
        }
        return d
    }
      , Vi = function(a, b) {
        Qi.hasOwnProperty(a) || (Oi.set(a, b),
        nb($a(a, b), Pi),
        Ri())
    }
      , Wi = function() {
        for (var a = ["gtm.allowlist", "gtm.blocklist", "gtm.whitelist", "gtm.blacklist", "tagTypeBlacklist"], b = 0; b < a.length; b++) {
            var c = a[b]
              , d = Si(c, 1);
            if (Ha(d) || lb(d))
                d = nb(d);
            Qi[c] = d
        }
    }
      , Ri = function(a) {
        l(Qi, function(b, c) {
            Oi.set(b, c);
            nb($a(b), Pi);
            nb($a(b, c), Pi);
            a && delete Qi[b]
        })
    }
      , Xi = function(a, b) {
        var c, d = 1 !== (void 0 === b ? 2 : b) ? Ui(a) : Oi.get(a);
        "array" === jb(d) || "object" === jb(d) ? c = nb(d) : c = d;
        return c
    };
    var aj = [];
    function bj(a) {
        switch (a) {
        case 0:
            return 0;
        case 10:
            return 19;
        case 18:
            return 15;
        case 39:
            return 11;
        case 40:
            return 12;
        case 44:
            return 14;
        case 47:
            return 13;
        case 57:
            return 20;
        case 69:
            return 16;
        case 81:
            return 18;
        case 91:
            return 21;
        case 93:
            return 22
        }
    }
    function Q(a) {
        aj[a] = !0;
        var b = bj(a);
        void 0 !== b && (Sf[b] = !0)
    }
    Q(24);
    Q(21);
    Q(22);
    Q(23);
    Q(41);
    Q(6);
    Q(45);
    Q(59);
    Q(26);
    Q(13);
    Q(89);
    Q(12);
    Q(97);
    Q(88);
    Q(44);
    Q(48);
    Q(70);
    Q(90);
    Q(36);
    Q(7);
    Q(4);
    Q(63);
    Q(9);
    Q(78);
    Q(85);
    Q(53);
    Q(54);
    Q(56);
    Q(50);
    Q(49);
    Q(79);
    Q(55);
    Q(68);
    Q(100);
    Q(18);
    Q(98);
    Q(86);
    Q(27);
    Q(28);
    Q(29);
    Q(69);
    Q(19);
    cj(90, 80);
    Q(43);
    Q(73);
    Tf[1] = Number('1000') || 6E4;
    Tf[2] = Number('') || 50;
    Q(71);
    Q(35);
    Q(37);
    function cj(a, b) {
        for (var c = void 0, d = void 0, e = 0; c === d; )
            if (c = Math.floor(2 * Math.random()),
            d = Math.floor(2 * Math.random()),
            e++,
            20 < e)
                return;
        c ? Q(a) : Q(b)
    }
    function R(a) {
        return !!aj[a]
    }
    var dj = function(a) {
        Ab("HEALTH", a)
    };
    var ej;
    try {
        ej = JSON.parse(yb("eyIwIjoiUEUiLCIxIjoiUEUtTE1BIiwiMiI6ZmFsc2UsIjMiOiJnb29nbGUuY29tLnBlIiwiNCI6IiIsIjUiOnRydWUsIjYiOmZhbHNlLCI3IjoiYWRfc3RvcmFnZXxhbmFseXRpY3Nfc3RvcmFnZXxhZF91c2VyX2RhdGF8YWRfcGVyc29uYWxpemF0aW9uIn0"))
    } catch (a) {
        M(123),
        dj(2),
        ej = {}
    }
    var fj = function() {
        return ej["0"] || ""
    }
      , gj = function() {
        return ej["1"] || ""
    }
      , hj = function() {
        var a = !1;
        return a
    }
      , ij = function() {
        return !1 !== ej["6"]
    }
      , jj = function() {
        var a = "";
        return a
    }
      , kj = function() {
        var a = !1;
        return a
    }
      , lj = function() {
        var a = "";
        return a
    };
    var mj = /:[0-9]+$/
      , nj = /^\d+\.fls\.doubleclick\.net$/
      , oj = function(a, b, c, d) {
        for (var e = [], f = fa(a.split("&")), g = f.next(); !g.done; g = f.next()) {
            var h = fa(g.value.split("="))
              , m = h.next().value
              , n = ia(h);
            if (decodeURIComponent(m.replace(/\+/g, " ")) === b) {
                var p = n.join("=");
                if (!c)
                    return d ? p : decodeURIComponent(p.replace(/\+/g, " "));
                e.push(d ? p : decodeURIComponent(p.replace(/\+/g, " ")))
            }
        }
        return c ? e : void 0
    }
      , rj = function(a, b, c, d, e) {
        b && (b = String(b).toLowerCase());
        if ("protocol" === b || "port" === b)
            a.protocol = pj(a.protocol) || pj(z.location.protocol);
        "port" === b ? a.port = String(Number(a.hostname ? a.port : z.location.port) || ("http" === a.protocol ? 80 : "https" === a.protocol ? 443 : "")) : "host" === b && (a.hostname = (a.hostname || z.location.hostname).replace(mj, "").toLowerCase());
        return qj(a, b, c, d, e)
    }
      , qj = function(a, b, c, d, e) {
        var f, g = pj(a.protocol);
        b && (b = String(b).toLowerCase());
        switch (b) {
        case "url_no_fragment":
            f = sj(a);
            break;
        case "protocol":
            f = g;
            break;
        case "host":
            f = a.hostname.replace(mj, "").toLowerCase();
            if (c) {
                var h = /^www\d*\./.exec(f);
                h && h[0] && (f = f.substr(h[0].length))
            }
            break;
        case "port":
            f = String(Number(a.port) || ("http" === g ? 80 : "https" === g ? 443 : ""));
            break;
        case "path":
            a.pathname || a.hostname || Ab("TAGGING", 1);
            f = "/" === a.pathname.substr(0, 1) ? a.pathname : "/" + a.pathname;
            var m = f.split("/");
            0 <= (d || []).indexOf(m[m.length - 1]) && (m[m.length - 1] = "");
            f = m.join("/");
            break;
        case "query":
            f = a.search.replace("?", "");
            e && (f = oj(f, e, !1));
            break;
        case "extension":
            var n = a.pathname.split(".");
            f = 1 < n.length ? n[n.length - 1] : "";
            f = f.split("/")[0];
            break;
        case "fragment":
            f = a.hash.replace("#", "");
            break;
        default:
            f = a && a.href
        }
        return f
    }
      , pj = function(a) {
        return a ? a.replace(":", "").toLowerCase() : ""
    }
      , sj = function(a) {
        var b = "";
        if (a && a.href) {
            var c = a.href.indexOf("#");
            b = 0 > c ? a.href : a.href.substr(0, c)
        }
        return b
    }
      , tj = {}
      , uj = 0
      , vj = function(a) {
        var b = tj[a];
        if (!b) {
            var c = C.createElement("a");
            a && (c.href = a);
            var d = c.pathname;
            "/" !== d[0] && (a || Ab("TAGGING", 1),
            d = "/" + d);
            var e = c.hostname.replace(mj, "");
            b = {
                href: c.href,
                protocol: c.protocol,
                host: c.host,
                hostname: e,
                pathname: d,
                search: c.search,
                hash: c.hash,
                port: c.port
            };
            5 > uj && (tj[a] = b,
            uj++)
        }
        return b
    }
      , Bj = function(a) {
        function b(n) {
            var p = n.split("=")[0];
            return 0 > d.indexOf(p) ? n : p + "=0"
        }
        function c(n) {
            return n.split("&").map(b).filter(function(p) {
                return void 0 !== p
            }).join("&")
        }
        var d = "gclid dclid gbraid wbraid gclaw gcldc gclha gclgf gclgb _gl".split(" ")
          , e = vj(a)
          , f = a.split(/[?#]/)[0]
          , g = e.search
          , h = e.hash;
        "?" === g[0] && (g = g.substring(1));
        "#" === h[0] && (h = h.substring(1));
        g = c(g);
        h = c(h);
        "" !== g && (g = "?" + g);
        "" !== h && (h = "#" + h);
        var m = "" + f + g + h;
        "/" === m[m.length - 1] && (m = m.substring(0, m.length - 1));
        return m
    }
      , Cj = function(a) {
        var b = vj(z.location.href)
          , c = rj(b, "host", !1);
        if (c && c.match(nj)) {
            var d = rj(b, "path").split(a + "=");
            if (1 < d.length)
                return d[1].split(";")[0].split("?")[0]
        }
    };
    var Dj = {
        "https://www.google.com": "/g",
        "https://www.googlesyndication.com": "/gs",
        "https://www.googleadservices.com": "/as",
        "https://pagead2.googlesyndication.com": "/gs"
    };
    function Ej(a, b) {
        if (a) {
            var c = "" + a;
            0 !== c.indexOf("http://") && 0 !== c.indexOf("https://") && (c = "https://" + c);
            "/" === c[c.length - 1] && (c = c.substring(0, c.length - 1));
            return vj("" + c + b).href
        }
    }
    function Fj() {
        return Li.s || Ai
    }
    function Gj() {
        return !!ri.Jf && "SGTM_TOKEN" !== ri.Jf.split("@@").join("")
    }
    function Hj(a) {
        for (var b = fa([N.g.jd, N.g.Ib]), c = b.next(); !c.done; c = b.next()) {
            var d = V(a, c.value);
            if (d)
                return d
        }
    }
    function Ij(a, b) {
        return Li.s ? "" + Mi() + (b ? Dj[a] || "" : "") : a
    }
    ;var Jj = function(a) {
        var b = String(a[Oe.ma] || "").replace(/_/g, "");
        0 === b.indexOf("cvt") && (b = "cvt");
        return b
    }
      , Kj = 0 <= z.location.search.indexOf("?gtm_latency=") || 0 <= z.location.search.indexOf("&gtm_latency=");
    var Mj = function(a, b) {
        var c = Lj();
        c.pending || (c.pending = []);
        Ia(c.pending, function(d) {
            return d.target.ctid === a.ctid && d.target.isDestination === a.isDestination
        }) || c.pending.push({
            target: a,
            onLoad: b
        })
    }
      , Nj = function() {
        this.container = {};
        this.destination = {};
        this.canonical = {};
        this.pending = [];
        this.siloed = []
    }
      , Lj = function() {
        var a = Dc("google_tag_data", {})
          , b = a.tidr;
        b || (b = new Nj,
        a.tidr = b);
        return b
    };
    var Oj = {}
      , Pj = !1
      , Vf = {
        ctid: "UA-23581568-13",
        canonicalContainerId: "",
        Vj: "UA-23581568-13",
        Wj: "UA-23581568-13"
    };
    Oj.qe = Oa("");
    var Sj = function() {
        var a = Qj();
        return Pj ? a.map(Rj) : a
    }
      , Uj = function() {
        var a = Tj();
        return Pj ? a.map(Rj) : a
    }
      , Wj = function() {
        return Vj(Vf.ctid)
    }
      , Xj = function() {
        return Vj(Vf.canonicalContainerId || "_" + Vf.ctid)
    }
      , Qj = function() {
        return Vf.Vj ? Vf.Vj.split("|") : [Vf.ctid]
    }
      , Tj = function() {
        return Vf.Wj ? Vf.Wj.split("|") : []
    }
      , ak = function() {
        var a = Yj(Zj());
        if (a) {
            for (; a.parent; ) {
                var b = Yj(a.parent);
                if (!b)
                    break;
                a = b
            }
            return a
        }
    }
      , Yj = function(a) {
        var b = Lj();
        return a.isDestination ? b.destination[a.ctid] : b.container[a.ctid]
    }
      , Vj = function(a) {
        return Pj ? Rj(a) : a
    }
      , Rj = function(a) {
        return "siloed_" + a
    }
      , ck = function(a) {
        return Pj ? bk(a) : a
    };
    function bk(a) {
        a = String(a);
        return 0 === a.indexOf("siloed_") ? a.substring(7) : a
    }
    var dk = function() {
        var a = !1;
        if (a) {
            var b = Lj();
            if (b.siloed) {
                for (var c = [], d = Qj().map(Rj), e = Tj().map(Rj), f = {}, g = 0; g < b.siloed.length; f = {
                    Of: void 0
                },
                g++)
                    f.Of = b.siloed[g],
                    !Pj && Ia(f.Of.isDestination ? e : d, function(h) {
                        return function(m) {
                            return m === h.Of.ctid
                        }
                    }(f)) ? Pj = !0 : c.push(f.Of);
                b.siloed = c
            }
        }
    };
    function ek() {
        var a = Lj();
        if (a.pending) {
            for (var b, c = [], d = !1, e = Sj(), f = Uj(), g = {}, h = 0; h < a.pending.length; g = {
                Ye: void 0
            },
            h++)
                g.Ye = a.pending[h],
                Ia(g.Ye.target.isDestination ? f : e, function(m) {
                    return function(n) {
                        return n === m.Ye.target.ctid
                    }
                }(g)) ? d || (b = g.Ye.onLoad,
                d = !0) : c.push(g.Ye);
            a.pending = c;
            if (b)
                try {
                    b(Xj())
                } catch (m) {}
        }
    }
    var fk = function() {
        for (var a = Vf.ctid, b = Sj(), c = Uj(), d = function(n, p) {
            var q = {
                canonicalContainerId: Vf.canonicalContainerId,
                scriptContainerId: a,
                state: 2,
                containers: b.slice(),
                destinations: c.slice()
            };
            Cc && (q.scriptSource = Cc);
            var r = p ? e.destination : e.container
              , t = r[n];
            t ? (p && 0 === t.state && M(93),
            Object.assign(t, q)) : r[n] = q
        }, e = Lj(), f = fa(b), g = f.next(); !g.done; g = f.next())
            d(g.value, !1);
        for (var h = fa(c), m = h.next(); !m.done; m = h.next())
            d(m.value, !0);
        e.canonical[Xj()] = {};
        ek()
    }
      , gk = function(a) {
        return !!Lj().container[a]
    }
      , hk = function(a) {
        var b = Lj().destination[a];
        return !!b && !!b.state
    }
      , Zj = function() {
        return {
            ctid: Wj(),
            isDestination: Oj.qe
        }
    };
    function ik(a) {
        var b = Lj();
        (b.siloed = b.siloed || []).push(a)
    }
    var jk = function() {
        var a = Lj().container, b;
        for (b in a)
            if (a.hasOwnProperty(b) && 1 === a[b].state)
                return !0;
        return !1
    }
      , kk = function() {
        var a = {};
        l(Lj().destination, function(b, c) {
            0 === c.state && (a[bk(b)] = c)
        });
        return a
    }
      , lk = function(a) {
        return !!(a && a.parent && a.context && 1 === a.context.source && 0 !== a.parent.ctid.indexOf("GTM-"))
    };
    var mk = {
        sampleRate: "0.005000",
        sk: "",
        rk: Number("5"),
        so: Number("")
    }
      , nk = [];
    function ok(a) {
        nk.push(a)
    }
    var pk = !1, qk;
    if (!(qk = Kj)) {
        var rk = Math.random()
          , sk = mk.sampleRate;
        qk = rk < Number(sk)
    }
    var tk = qk
      , uk = "/a?id=" + Vf.ctid
      , vk = "https://www.googletagmanager.com" + uk
      , wk = void 0
      , xk = {}
      , yk = void 0
      , zk = new function() {
        var a = 5;
        0 < mk.rk && (a = mk.rk);
        this.h = 0;
        this.C = [];
        this.s = a
    }
      , Ak = 1E3;
    function Bk(a, b) {
        var c = wk;
        if (void 0 === c)
            if (b)
                c = Ji();
            else
                return "";
        for (var d = [Ij("https://www.googletagmanager.com"), uk], e = fa(nk), f = e.next(); !f.done; f = e.next())
            for (var g = f.value, h = g({
                eventId: c,
                zb: !!a,
                dg: function() {
                    pk = !0
                }
            }), m = fa(h), n = m.next(); !n.done; n = m.next()) {
                var p = fa(n.value)
                  , q = p.next().value
                  , r = p.next().value;
                d.push("&" + q + "=" + r)
            }
        d.push("&z=0");
        return d.join("")
    }
    function Ck() {
        yk && (z.clearTimeout(yk),
        yk = void 0);
        if (void 0 !== wk && Dk) {
            var a;
            (a = xk[wk]) || (a = zk.h < zk.s ? !1 : 1E3 > Ta() - zk.C[zk.h % zk.s]);
            if (a || 0 >= Ak--)
                M(1),
                xk[wk] = !0;
            else {
                var b = zk.h++ % zk.s;
                zk.C[b] = Ta();
                var c = Bk(!0);
                Lc(c);
                if (pk) {
                    var d = c.replace("/a?", "/td?");
                    Lc(d)
                }
                Dk = pk = !1
            }
        }
    }
    var Dk = !1;
    function Ek(a) {
        xk[a] || (a !== wk && (Ck(),
        wk = a),
        Dk = !0,
        yk || (yk = z.setTimeout(Ck, 500)),
        2022 <= Bk().length && Ck())
    }
    var Fk = Ja();
    function Gk() {
        Fk = Ja()
    }
    function Hk() {
        return [["v", "3"], ["t", "t"], ["pid", Fk]]
    }
    ;var Ik = []
      , Jk = [];
    function Kk(a) {
        R(71) && -1 === Jk.indexOf(a) && (Ik.push(a),
        Jk.push(a))
    }
    function Lk(a) {
        var b = [];
        if (!Ik.length)
            return b;
        for (var c = fa(Ik), d = c.next(); !d.done; d = c.next())
            b.push([d.value, "1"]);
        a.zb && (a.dg(),
        Ik.length = 0);
        return b
    }
    ;var Mk = new function(a, b) {
        this.h = a;
        this.defaultValue = void 0 === b ? !1 : b
    }
    (1933);
    var Nk = function(a) {
        Nk[" "](a);
        return a
    };
    Nk[" "] = function() {}
    ;
    var Pk = function() {
        var a = Ok
          , b = "Ch";
        if (a.Ch && a.hasOwnProperty(b))
            return a.Ch;
        var c = new a;
        return a.Ch = c
    };
    var Ok = function() {
        var a = {};
        this.h = function() {
            var b = Mk.h
              , c = Mk.defaultValue;
            return null != a[b] ? a[b] : c
        }
        ;
        this.s = function() {
            a[Mk.h] = !0
        }
    };
    var Qk = !1
      , Rk = !1
      , Sk = {}
      , Tk = {}
      , Uk = {
        ad_storage: !1,
        ad_user_data: !1,
        ad_personalization: !1
    };
    function Vk() {
        var a = Dc("google_tag_data", {});
        return a.ics = a.ics || new Wk
    }
    var Wk = function() {
        this.entries = {};
        this.cps = {};
        this.waitPeriodTimedOut = this.wasSetLate = this.accessedAny = this.accessedDefault = this.usedSetCps = this.usedImplicit = this.usedUpdate = this.usedDefault = this.usedDeclare = this.active = !1;
        this.h = []
    };
    Wk.prototype.default = function(a, b, c, d, e, f) {
        this.usedDefault || this.usedDeclare || !this.accessedDefault && !this.accessedAny || (this.wasSetLate = !0);
        this.usedDefault = this.active = !0;
        Ab("TAGGING", 19);
        void 0 == b ? Ab("TAGGING", 18) : Xk(this, a, "granted" === b, c, d, e, f)
    }
    ;
    Wk.prototype.waitForUpdate = function(a, b) {
        for (var c = 0; c < a.length; c++)
            Xk(this, a[c], void 0, void 0, "", "", b)
    }
    ;
    var Xk = function(a, b, c, d, e, f, g) {
        var h = a.entries
          , m = h[b] || {}
          , n = m.region
          , p = d && k(d) ? d.toUpperCase() : void 0;
        e = e.toUpperCase();
        f = f.toUpperCase();
        if (Yk(p, n, e, f)) {
            var q = !!(g && 0 < g && void 0 === m.update)
              , r = {
                region: p,
                declare_region: m.declare_region,
                implicit: m.implicit,
                default: void 0 !== c ? c : m.default,
                declare: m.declare,
                update: m.update,
                quiet: q
            };
            if ("" !== e || !1 !== m.default)
                h[b] = r;
            q && z.setTimeout(function() {
                h[b] === r && r.quiet && (Ab("TAGGING", 2),
                a.waitPeriodTimedOut = !0,
                a.clearTimeout(b, void 0),
                a.notifyListeners())
            }, g)
        }
    };
    aa = Wk.prototype;
    aa.clearTimeout = function(a, b) {
        var c = [a], d;
        for (d in Sk)
            Sk.hasOwnProperty(d) && Sk[d] === a && c.push(d);
        var e = this.entries[a] || {}
          , f = this.getConsentState(a);
        if (e.quiet) {
            e.quiet = !1;
            for (var g = fa(c), h = g.next(); !h.done; h = g.next())
                Zk(this, h.value)
        } else if (void 0 !== b && f !== b)
            for (var m = fa(c), n = m.next(); !n.done; n = m.next())
                Zk(this, n.value)
    }
    ;
    aa.update = function(a, b) {
        this.usedDefault || this.usedDeclare || this.usedUpdate || !this.accessedAny || (this.wasSetLate = !0);
        this.usedUpdate = this.active = !0;
        if (void 0 != b) {
            var c = this.getConsentState(a)
              , d = this.entries;
            (d[a] = d[a] || {}).update = "granted" === b;
            this.clearTimeout(a, c)
        }
    }
    ;
    aa.declare = function(a, b, c, d, e) {
        this.usedDeclare = this.active = !0;
        var f = this.entries
          , g = f[a] || {}
          , h = g.declare_region
          , m = c && k(c) ? c.toUpperCase() : void 0;
        d = d.toUpperCase();
        e = e.toUpperCase();
        if (Yk(m, h, d, e)) {
            var n = {
                region: g.region,
                declare_region: m,
                declare: "granted" === b,
                implicit: g.implicit,
                default: g.default,
                update: g.update,
                quiet: g.quiet
            };
            if ("" !== d || !1 !== g.declare)
                f[a] = n
        }
    }
    ;
    aa.implicit = function(a, b) {
        this.usedImplicit = !0;
        var c = this.entries
          , d = c[a] = c[a] || {};
        !1 !== d.implicit && (d.implicit = "granted" === b)
    }
    ;
    aa.getConsentState = function(a) {
        var b = this.entries
          , c = b[a] || {}
          , d = c.update;
        if (void 0 !== d)
            return d ? 1 : 2;
        d = c.default;
        if (void 0 !== d)
            return d ? 1 : 2;
        if (Sk.hasOwnProperty(a)) {
            var e = b[Sk[a]] || {};
            d = e.update;
            if (void 0 !== d)
                return d ? 1 : 2;
            d = e.default;
            if (void 0 !== d)
                return d ? 1 : 2
        }
        d = c.declare;
        if (void 0 !== d)
            return d ? 1 : 2;
        d = c.implicit;
        return void 0 !== d ? d ? 3 : 4 : Uf(19) && Uk.hasOwnProperty(a) ? (Ab("TAGGING", 22),
        Uk[a] ? 3 : 4) : 0
    }
    ;
    aa.setCps = function() {}
    ;
    aa.addListener = function(a, b) {
        this.h.push({
            consentTypes: a,
            Ql: b
        })
    }
    ;
    var Zk = function(a, b) {
        for (var c = 0; c < a.h.length; ++c) {
            var d = a.h[c];
            Ha(d.consentTypes) && -1 !== d.consentTypes.indexOf(b) && (d.Xj = !0)
        }
    };
    Wk.prototype.notifyListeners = function(a, b) {
        for (var c = 0; c < this.h.length; ++c) {
            var d = this.h[c];
            if (d.Xj) {
                d.Xj = !1;
                try {
                    d.Ql({
                        consentEventId: a,
                        consentPriorityId: b
                    })
                } catch (e) {}
            }
        }
    }
    ;
    function Yk(a, b, c, d) {
        return "" === c || a === d ? !0 : a === c ? b !== d : !a && !b
    }
    function $k(a, b, c) {
        var d = fj()
          , e = gj()
          , f = Tk[a] || {}
          , g = f.region
          , h = c && k(c) ? c.toUpperCase() : void 0;
        d = d.toUpperCase();
        e = e.toUpperCase();
        if (Yk(h, g, d, e)) {
            var m = {
                enabled: "granted" === b,
                region: h
            };
            if ("" !== d || !1 !== f.enabled)
                Tk[a] = m
        }
    }
    function al(a) {
        var b = Vk();
        if ("ad_user_data" === a)
            if (Uf(22)) {
                var c = b.getConsentState("ad_storage");
                if (2 !== c && 4 !== c)
                    return c
            } else
                Uf(21) && (a = "ad_storage");
        return b.getConsentState(a)
    }
    var bl = function(a) {
        Vk().accessedAny = !0;
        return (k(a) ? [a] : a).every(function(b) {
            switch (al(b)) {
            case 1:
            case 3:
                return !0;
            case 2:
            case 4:
                return !1;
            default:
                return !0
            }
        })
    }
      , cl = function(a) {
        Vk().accessedAny = !0;
        return al(a)
    }
      , dl = function() {
        var a = {}, b;
        for (b in Tk)
            Tk.hasOwnProperty(b) && (a[b] = {
                enabled: Tk[b].enabled,
                region: Tk[b].region
            });
        for (var c = {}, d = fa(Object.keys(a)), e = d.next(); !e.done; e = d.next()) {
            var f = e.value;
            c[f] = a[f].enabled
        }
        return c
    }
      , el = function(a) {
        var b = Vk();
        b.accessedAny = !0;
        return !(b.entries[a] || {}).quiet
    }
      , fl = function() {
        if (!Pk().h())
            return !1;
        var a = Vk();
        a.accessedAny = !0;
        return a.active
    }
      , gl = function(a, b) {
        if (Uf(21)) {
            for (var c = [], d = a.find(function(h) {
                return "ad_storage" === h
            }), e = fa(a), f = e.next(); !f.done; f = e.next()) {
                var g = f.value;
                if ("ad_user_data" === g) {
                    if (d)
                        continue;
                    c.push("ad_storage")
                }
                c.push(g)
            }
            Vk().addListener(c, b)
        } else
            Vk().addListener(a, b)
    }
      , hl = function(a, b) {
        Vk().notifyListeners(a, b)
    }
      , il = function(a, b) {
        function c() {
            for (var e = 0; e < b.length; e++)
                if (!el(b[e]))
                    return !0;
            return !1
        }
        if (c()) {
            var d = !1;
            gl(b, function(e) {
                d || c() || (d = !0,
                a(e))
            })
        } else
            a({})
    }
      , jl = function(a, b) {
        function c() {
            for (var h = [], m = 0; m < e.length; m++) {
                var n = e[m];
                bl(n) && !f[n] && h.push(n)
            }
            return h
        }
        function d(h) {
            for (var m = 0; m < h.length; m++)
                f[h[m]] = !0
        }
        var e = k(b) ? [b] : b
          , f = {}
          , g = c();
        g.length !== e.length && (d(g),
        gl(e, function(h) {
            function m(q) {
                0 !== q.length && (d(q),
                h.consentTypes = q,
                a(h))
            }
            var n = c();
            if (0 !== n.length) {
                var p = Object.keys(f).length;
                n.length + p >= e.length ? m(n) : z.setTimeout(function() {
                    m(c())
                }, 500)
            }
        }))
    };
    function kl() {}
    function ll() {}
    ;var ml = [N.g.J, N.g.R, N.g.N, N.g.xa], nl, ol, pl = function(a) {
        for (var b = a[N.g.Ab], c = Array.isArray(b) ? b : [b], d = {
            Me: 0
        }; d.Me < c.length; d = {
            Me: d.Me
        },
        ++d.Me)
            l(a, function(e) {
                return function(f, g) {
                    if (f !== N.g.Ab) {
                        var h = c[e.Me]
                          , m = fj()
                          , n = gj();
                        Rk = !0;
                        Qk && Ab("TAGGING", 20);
                        Vk().declare(f, g, h, m, n)
                    }
                }
            }(d))
    }, ql = function(a) {
        R(37) && (!ol && nl && Kk("crc"),
        ol = !0);
        var b = a[N.g.Ab];
        b && M(40);
        var c = a[N.g.jf];
        c && M(41);
        for (var d = Ha(b) ? b : [b], e = {
            Ne: 0
        }; e.Ne < d.length; e = {
            Ne: e.Ne
        },
        ++e.Ne)
            l(a, function(f) {
                return function(g, h) {
                    if (g !== N.g.Ab && g !== N.g.jf) {
                        var m = d[f.Ne]
                          , n = Number(c)
                          , p = fj()
                          , q = gj();
                        Qk = !0;
                        Rk && Ab("TAGGING", 20);
                        Vk().default(g, h, m, p, q, n)
                    }
                }
            }(e))
    }, rl = function(a, b) {
        nl = !0;
        l(a, function(c, d) {
            Qk = !0;
            Rk && Ab("TAGGING", 20);
            Vk().update(c, d)
        });
        hl(b.eventId, b.priorityId)
    }, sl = function(a) {
        for (var b = a[N.g.Ab], c = Array.isArray(b) ? b : [b], d = {
            rd: 0
        }; d.rd < c.length; d = {
            rd: d.rd
        },
        ++d.rd)
            a.hasOwnProperty(N.g.mg) && l(qi, function(e) {
                return function(f) {
                    $k(f, a[N.g.mg], c[e.rd])
                }
            }(d)),
            l(a, function(e) {
                return function(f, g) {
                    f !== N.g.Ab && f !== N.g.mg && $k(f, g, c[e.rd])
                }
            }(d))
    }, tl = function(a) {
        Array.isArray(a) || (a = [a]);
        return a.every(function(b) {
            return bl(b)
        })
    }, ul = function(a, b) {
        gl(a, b)
    }, vl = function(a, b) {
        jl(a, b)
    }, wl = function(a, b) {
        il(a, b)
    }, xl = function() {
        var a = [N.g.J, N.g.xa, N.g.N];
        Vk().waitForUpdate(a, 500)
    }, yl = function(a) {
        for (var b = fa(a), c = b.next(); !c.done; c = b.next()) {
            var d = c.value;
            Vk().clearTimeout(d, void 0)
        }
        hl()
    };
    var zl = function() {
        function a(b) {
            si.pscdl = b
        }
        if (void 0 === si.pscdl)
            try {
                "cookieDeprecationLabel"in Bc ? (a("pending"),
                Bc.cookieDeprecationLabel.getValue().then(a)) : a("noapi")
            } catch (b) {
                a("error")
            }
    };
    var Al = /[A-Z]+/
      , Bl = /\s/
      , Cl = function(a, b) {
        if (k(a)) {
            a = Ra(a);
            var c = a.indexOf("-");
            if (!(0 > c)) {
                var d = a.substring(0, c);
                if (Al.test(d)) {
                    var e = a.substring(c + 1), f;
                    if (b) {
                        var g = function(n) {
                            var p = n.indexOf("/");
                            return 0 > p ? [n] : [n.substring(0, p), n.substring(p + 1)]
                        };
                        f = g(e);
                        if ("DC" === d && 2 === f.length) {
                            var h = g(f[1]);
                            2 === h.length && (f[1] = h[0],
                            f.push(h[1]))
                        }
                    } else {
                        f = e.split("/");
                        for (var m = 0; m < f.length; m++)
                            if (!f[m] || Bl.test(f[m]) && ("AW" !== d || 1 !== m))
                                return
                    }
                    return {
                        id: a,
                        prefix: d,
                        ba: d + "-" + f[0],
                        O: f
                    }
                }
            }
        }
    }
      , El = function(a, b) {
        for (var c = {}, d = 0; d < a.length; ++d) {
            var e = Cl(a[d], b);
            e && (c[e.id] = e)
        }
        Dl(c);
        var f = [];
        l(c, function(g, h) {
            f.push(h)
        });
        return f
    };
    function Dl(a) {
        var b = [], c;
        for (c in a)
            if (a.hasOwnProperty(c)) {
                var d = a[c];
                "AW" === d.prefix && d.O[1] && b.push(d.ba)
            }
        for (var e = 0; e < b.length; ++e)
            delete a[b[e]]
    }
    ;var Fl = ""
      , Gl = [];
    function Hl(a) {
        var b = [];
        Fl && b.push(["dl", encodeURIComponent(Fl)]);
        0 < Gl.length && b.push(["tdp", Gl.join(".")]);
        a.zb && (Fl = "",
        Gl.length = 0,
        b.length && a.dg());
        return b
    }
    ;var Il = [];
    function Jl(a) {
        if (!Il.length)
            return [];
        var b = [["tdc", Il.join("!")]];
        a.zb && (a.dg(),
        Il.length = 0);
        return b
    }
    ;var Kl = {
        initialized: 11,
        complete: 12,
        interactive: 13
    }
      , Ll = {}
      , Ml = Object.freeze((Ll[N.g.Qa] = !0,
    Ll))
      , Nl = 0 <= C.location.search.indexOf("?gtm_diagnostics=") || 0 <= C.location.search.indexOf("&gtm_diagnostics=")
      , Pl = function(a, b, c) {
        if (tk && "config" === a && !(1 < Cl(b).O.length)) {
            var d, e = Dc("google_tag_data", {});
            e.td || (e.td = {});
            d = e.td;
            var f = nb(c.F);
            nb(c.h, f);
            var g = [], h;
            for (h in d) {
                var m = Ol(d[h], f);
                m.length && (Nl && console.log(m),
                g.push(h))
            }
            g.length && (g.length && tk && Il.push(b + "*" + g.join(".")),
            Ab("TAGGING", Kl[C.readyState] || 14));
            d[b] = f
        }
    };
    function Ql(a, b) {
        var c = {}, d;
        for (d in b)
            b.hasOwnProperty(d) && (c[d] = !0);
        for (var e in a)
            a.hasOwnProperty(e) && (c[e] = !0);
        return c
    }
    function Ol(a, b, c, d) {
        c = void 0 === c ? {} : c;
        d = void 0 === d ? "" : d;
        if (a === b)
            return [];
        var e = function(q, r) {
            var t = r[q];
            return void 0 === t ? Ml[q] : t
        }, f;
        for (f in Ql(a, b)) {
            var g = (d ? d + "." : "") + f
              , h = e(f, a)
              , m = e(f, b)
              , n = "object" === jb(h) || "array" === jb(h)
              , p = "object" === jb(m) || "array" === jb(m);
            if (n && p)
                Ol(h, m, c, g);
            else if (n || p || h !== m)
                c[g] = !0
        }
        return Object.keys(c)
    }
    ;var Rl = function(a, b, c, d, e, f, g, h, m, n, p) {
        this.eventId = a;
        this.priorityId = b;
        this.h = c;
        this.M = d;
        this.C = e;
        this.F = f;
        this.s = g;
        this.eventMetadata = h;
        this.onSuccess = m;
        this.onFailure = n;
        this.isGtmEvent = p
    }
      , Sl = function(a, b) {
        var c = [];
        switch (b) {
        case 3:
            c.push(a.h);
            c.push(a.M);
            c.push(a.C);
            c.push(a.F);
            c.push(a.s);
            break;
        case 2:
            c.push(a.h);
            break;
        case 1:
            c.push(a.M);
            c.push(a.C);
            c.push(a.F);
            c.push(a.s);
            break;
        case 4:
            c.push(a.h),
            c.push(a.M),
            c.push(a.C),
            c.push(a.F)
        }
        return c
    }
      , V = function(a, b, c, d) {
        for (var e = fa(Sl(a, void 0 === d ? 3 : d)), f = e.next(); !f.done; f = e.next()) {
            var g = f.value;
            if (void 0 !== g[b])
                return g[b]
        }
        return c
    }
      , Tl = function(a) {
        for (var b = {}, c = Sl(a, 4), d = fa(c), e = d.next(); !e.done; e = d.next())
            for (var f = Object.keys(e.value), g = fa(f), h = g.next(); !h.done; h = g.next())
                b[h.value] = 1;
        return Object.keys(b)
    }
      , Ul = function(a, b, c) {
        function d(n) {
            lb(n) && l(n, function(p, q) {
                f = !0;
                e[p] = q
            })
        }
        var e = {}
          , f = !1
          , g = Sl(a, void 0 === c ? 3 : c);
        g.reverse();
        for (var h = fa(g), m = h.next(); !m.done; m = h.next())
            d(m.value[b]);
        return f ? e : void 0
    }
      , Vl = function(a) {
        for (var b = [N.g.Tc, N.g.Pc, N.g.Qc, N.g.Rc, N.g.Sc, N.g.Uc, N.g.Vc], c = Sl(a, 3), d = fa(c), e = d.next(); !e.done; e = d.next()) {
            for (var f = e.value, g = {}, h = !1, m = fa(b), n = m.next(); !n.done; n = m.next()) {
                var p = n.value;
                void 0 !== f[p] && (g[p] = f[p],
                h = !0)
            }
            var q = h ? g : void 0;
            if (q)
                return q
        }
        return {}
    }
      , Wl = function(a, b) {
        this.Ef = a;
        this.Ff = b;
        this.C = {};
        this.Zb = {};
        this.h = {};
        this.F = {};
        this.nd = {};
        this.Yb = {};
        this.s = {};
        this.Ea = function() {}
        ;
        this.W = function() {}
        ;
        this.M = !1
    }
      , Xl = function(a, b) {
        a.C = b;
        return a
    }
      , Yl = function(a, b) {
        a.Zb = b;
        return a
    }
      , Zl = function(a, b) {
        a.h = b;
        return a
    }
      , $l = function(a, b) {
        a.F = b;
        return a
    }
      , am = function(a, b) {
        a.nd = b;
        return a
    }
      , bm = function(a, b) {
        a.Yb = b;
        return a
    }
      , cm = function(a, b) {
        a.s = b || {};
        return a
    }
      , dm = function(a, b) {
        a.Ea = b;
        return a
    }
      , em = function(a, b) {
        a.W = b;
        return a
    }
      , fm = function(a, b) {
        a.M = b;
        return a
    }
      , gm = function(a) {
        return new Rl(a.Ef,a.Ff,a.C,a.Zb,a.h,a.F,a.Yb,a.s,a.Ea,a.W,a.M)
    };
    var hm = {};
    function im(a, b, c) {
        tk && void 0 !== a && (hm[a] = hm[a] || [],
        hm[a].push(c + b),
        Ek(a))
    }
    function jm(a) {
        var b = a.eventId
          , c = a.zb
          , d = []
          , e = hm[b] || [];
        e.length && d.push(["epr", e.join(".")]);
        c && delete hm[b];
        return d
    }
    ;var lm = function(a, b) {
        var c = Cl(Vj(a), !0);
        c && km.register(c, b)
    }
      , mm = function(a, b, c, d) {
        var e = Cl(c, d.isGtmEvent);
        e && km.push("event", [b, a], e, d)
    }
      , nm = function(a, b, c, d) {
        var e = Cl(c, d.isGtmEvent);
        e && km.push("get", [a, b], e, d)
    }
      , pm = function(a) {
        var b = Cl(Vj(a), !0), c;
        b ? c = om(km, b).h : c = {};
        return c
    }
      , qm = function(a, b) {
        var c = Cl(Vj(a), !0);
        if (c) {
            var d = km
              , e = nb(b);
            nb(om(d, c).h, e);
            om(d, c).h = e
        }
    }
      , rm = function() {
        this.status = 1;
        this.M = {};
        this.h = {};
        this.s = {};
        this.W = null;
        this.F = {};
        this.C = !1
    }
      , sm = function(a, b, c, d) {
        var e = Ta();
        this.type = a;
        this.C = e;
        this.h = b;
        this.s = c;
        this.messageContext = d
    }
      , tm = function() {
        this.s = {};
        this.C = {};
        this.h = []
    }
      , om = function(a, b) {
        var c = b.ba;
        return a.s[c] = a.s[c] || new rm
    }
      , um = function(a, b, c, d) {
        if (d.h) {
            var e = om(a, d.h)
              , f = e.W;
            if (f) {
                var g = nb(c)
                  , h = nb(e.M[d.h.id])
                  , m = nb(e.F)
                  , n = nb(e.h)
                  , p = nb(a.C)
                  , q = {};
                if (tk)
                    try {
                        q = nb(Pi)
                    } catch (v) {
                        M(72)
                    }
                var r = d.h.prefix
                  , t = function(v) {
                    im(d.messageContext.eventId, r, v)
                }
                  , u = gm(fm(em(dm(cm(am($l(bm(Zl(Yl(Xl(new Wl(d.messageContext.eventId,d.messageContext.priorityId), g), h), m), n), p), q), d.messageContext.eventMetadata), function() {
                    if (t) {
                        var v = t;
                        t = void 0;
                        v("2");
                        if (d.messageContext.onSuccess)
                            d.messageContext.onSuccess()
                    }
                }), function() {
                    if (t) {
                        var v = t;
                        t = void 0;
                        v("3");
                        if (d.messageContext.onFailure)
                            d.messageContext.onFailure()
                    }
                }), !!d.messageContext.isGtmEvent));
                try {
                    im(d.messageContext.eventId, r, "1"),
                    Pl(d.type, d.h.id, u),
                    f(d.h.id, b, d.C, u)
                } catch (v) {
                    im(d.messageContext.eventId, r, "4")
                }
            }
        }
    };
    tm.prototype.register = function(a, b, c) {
        var d = om(this, a);
        3 !== d.status && (d.W = b,
        d.status = 3,
        c && (nb(d.h, c),
        d.h = c),
        this.flush())
    }
    ;
    tm.prototype.push = function(a, b, c, d) {
        void 0 !== c && (1 === om(this, c).status && (om(this, c).status = 2,
        this.push("require", [{}], c, {})),
        om(this, c).C && (d.deferrable = !1));
        this.h.push(new sm(a,c,b,d));
        d.deferrable || this.flush()
    }
    ;
    tm.prototype.flush = function(a) {
        for (var b = this, c = [], d = !1, e = {}; this.h.length; e = {
            Bc: void 0,
            uh: void 0
        }) {
            var f = this.h[0]
              , g = f.h;
            if (f.messageContext.deferrable)
                !g || om(this, g).C ? (f.messageContext.deferrable = !1,
                this.h.push(f)) : c.push(f),
                this.h.shift();
            else {
                switch (f.type) {
                case "require":
                    if (3 !== om(this, g).status && !a) {
                        this.h.push.apply(this.h, c);
                        return
                    }
                    break;
                case "set":
                    l(f.s[0], function(r, t) {
                        nb($a(r, t), b.C)
                    });
                    break;
                case "config":
                    var h = om(this, g);
                    e.Bc = {};
                    l(f.s[0], function(r) {
                        return function(t, u) {
                            nb($a(t, u), r.Bc)
                        }
                    }(e));
                    var m = !!e.Bc[N.g.Xb];
                    delete e.Bc[N.g.Xb];
                    var n = g.ba === g.id;
                    m || (n ? h.F = {} : h.M[g.id] = {});
                    h.C && m || um(this, N.g.da, e.Bc, f);
                    h.C = !0;
                    n ? nb(e.Bc, h.F) : (nb(e.Bc, h.M[g.id]),
                    M(70));
                    d = !0;
                    break;
                case "event":
                    e.uh = {};
                    l(f.s[0], function(r) {
                        return function(t, u) {
                            nb($a(t, u), r.uh)
                        }
                    }(e));
                    um(this, f.s[1], e.uh, f);
                    break;
                case "get":
                    var p = {}
                      , q = (p[N.g.rb] = f.s[0],
                    p[N.g.Db] = f.s[1],
                    p);
                    um(this, N.g.Sa, q, f)
                }
                this.h.shift();
                vm(this, f)
            }
        }
        this.h.push.apply(this.h, c);
        d && this.flush()
    }
    ;
    var vm = function(a, b) {
        if ("require" !== b.type)
            if (b.h)
                for (var c = om(a, b.h).s[b.type] || [], d = 0; d < c.length; d++)
                    c[d]();
            else
                for (var e in a.s)
                    if (a.s.hasOwnProperty(e)) {
                        var f = a.s[e];
                        if (f && f.s)
                            for (var g = f.s[b.type] || [], h = 0; h < g.length; h++)
                                g[h]()
                    }
    }
      , km = new tm;
    function wm(a, b) {
        if ("" === a)
            return b;
        var c = Number(a);
        return isNaN(c) ? b : c
    }
    ;var xm = function(a, b) {
        var c = function() {};
        c.prototype = a.prototype;
        var d = new c;
        a.apply(d, Array.prototype.slice.call(arguments, 1));
        return d
    }
      , ym = function(a) {
        var b = a;
        return function() {
            if (b) {
                var c = b;
                b = null;
                c()
            }
        }
    };
    var zm = function(a, b, c) {
        a.addEventListener && a.addEventListener(b, c, !1)
    };
    function Am() {
        return Nb ? !!Ub && !!Ub.platform : !1
    }
    function Bm() {
        return Xb("iPhone") && !Xb("iPod") && !Xb("iPad")
    }
    function Cm() {
        Bm() || Xb("iPad") || Xb("iPod")
    }
    ;Zb();
    Yb() || Xb("Trident") || Xb("MSIE");
    Xb("Edge");
    !Xb("Gecko") || -1 != Tb().toLowerCase().indexOf("webkit") && !Xb("Edge") || Xb("Trident") || Xb("MSIE") || Xb("Edge");
    -1 != Tb().toLowerCase().indexOf("webkit") && !Xb("Edge") && Xb("Mobile");
    Am() || Xb("Macintosh");
    Am() || Xb("Windows");
    (Am() ? "Linux" === Ub.platform : Xb("Linux")) || Am() || Xb("CrOS");
    Am() || Xb("Android");
    Bm();
    Xb("iPad");
    Xb("iPod");
    Cm();
    Tb().toLowerCase().indexOf("kaios");
    var Dm = function(a, b, c, d) {
        for (var e = b, f = c.length; 0 <= (e = a.indexOf(c, e)) && e < d; ) {
            var g = a.charCodeAt(e - 1);
            if (38 == g || 63 == g) {
                var h = a.charCodeAt(e + f);
                if (!h || 61 == h || 38 == h || 35 == h)
                    return e
            }
            e += f + 1
        }
        return -1
    }
      , Em = /#|$/
      , Fm = function(a, b) {
        var c = a.search(Em)
          , d = Dm(a, 0, b, c);
        if (0 > d)
            return null;
        var e = a.indexOf("&", d);
        if (0 > e || e > c)
            e = c;
        d += b.length + 1;
        return decodeURIComponent(a.slice(d, -1 !== e ? e : 0).replace(/\+/g, " "))
    }
      , Gm = /[?&]($|#)/
      , Hm = function(a, b, c) {
        for (var d, e = a.search(Em), f = 0, g, h = []; 0 <= (g = Dm(a, f, b, e)); )
            h.push(a.substring(f, g)),
            f = Math.min(a.indexOf("&", g) + 1 || e, e);
        h.push(a.slice(f));
        d = h.join("").replace(Gm, "$1");
        var m, n = null != c ? "=" + encodeURIComponent(String(c)) : "";
        var p = b + n;
        if (p) {
            var q, r = d.indexOf("#");
            0 > r && (r = d.length);
            var t = d.indexOf("?"), u;
            0 > t || t > r ? (t = r,
            u = "") : u = d.substring(t + 1, r);
            q = [d.slice(0, t), u, d.slice(r)];
            var v = q[1];
            q[1] = p ? v ? v + "&" + p : p : v;
            m = q[0] + (q[1] ? "?" + q[1] : "") + q[2]
        } else
            m = d;
        return m
    };
    var Im = function(a) {
        try {
            var b;
            if (b = !!a && null != a.location.href)
                a: {
                    try {
                        Nk(a.foo);
                        b = !0;
                        break a
                    } catch (c) {}
                    b = !1
                }
            return b
        } catch (c) {
            return !1
        }
    }
      , Jm = function(a, b) {
        if (a)
            for (var c in a)
                Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
    };
    function Km(a) {
        if (!a || !C.head)
            return null;
        var b = Lm("META");
        C.head.appendChild(b);
        b.httpEquiv = "origin-trial";
        b.content = a;
        return b
    }
    var Mm = function(a) {
        if (z.top == z)
            return 0;
        if (void 0 === a ? 0 : a) {
            var b = z.location.ancestorOrigins;
            if (b)
                return b[b.length - 1] == z.location.origin ? 1 : 2
        }
        return Im(z.top) ? 1 : 2
    }
      , Lm = function(a, b) {
        b = void 0 === b ? document : b;
        return b.createElement(String(a).toLowerCase())
    };
    function Nm(a, b, c, d) {
        d = void 0 === d ? !1 : d;
        a.google_image_requests || (a.google_image_requests = []);
        var e = Lm("IMG", a.document);
        if (c) {
            var f = function() {
                if (c) {
                    var g = a.google_image_requests
                      , h = Db(g, e);
                    0 <= h && Array.prototype.splice.call(g, h, 1)
                }
                e.removeEventListener && e.removeEventListener("load", f, !1);
                e.removeEventListener && e.removeEventListener("error", f, !1)
            };
            zm(e, "load", f);
            zm(e, "error", f)
        }
        d && (e.attributionSrc = "");
        e.src = b;
        a.google_image_requests.push(e)
    }
    var Pm = function(a) {
        var b;
        b = void 0 === b ? !1 : b;
        var c = "https://pagead2.googlesyndication.com/pagead/gen_204?id=tcfe";
        Jm(a, function(d, e) {
            if (d || 0 === d)
                c += "&" + e + "=" + encodeURIComponent("" + d)
        });
        Om(c, b)
    }
      , Om = function(a, b) {
        var c = window, d;
        b = void 0 === b ? !1 : b;
        d = void 0 === d ? !1 : d;
        if (c.fetch) {
            var e = {
                keepalive: !0,
                credentials: "include",
                redirect: "follow",
                method: "get",
                mode: "no-cors"
            };
            d && (e.mode = "cors",
            "setAttributionReporting"in XMLHttpRequest.prototype ? e.attributionReporting = {
                eventSourceEligible: "true",
                triggerEligible: "false"
            } : e.headers = {
                "Attribution-Reporting-Eligible": "event-source"
            });
            c.fetch(a, e)
        } else
            Nm(c, a, void 0 === b ? !1 : b, void 0 === d ? !1 : d)
    };
    var Qm = function() {};
    var Rm = function(a) {
        void 0 !== a.addtlConsent && "string" !== typeof a.addtlConsent && (a.addtlConsent = void 0);
        void 0 !== a.gdprApplies && "boolean" !== typeof a.gdprApplies && (a.gdprApplies = void 0);
        return void 0 !== a.tcString && "string" !== typeof a.tcString || void 0 !== a.listenerId && "number" !== typeof a.listenerId ? 2 : a.cmpStatus && "error" !== a.cmpStatus ? 0 : 3
    }
      , Sm = function(a, b) {
        b = void 0 === b ? {} : b;
        this.s = a;
        this.h = null;
        this.M = {};
        this.Ea = 0;
        var c;
        this.W = null != (c = b.mk) ? c : 500;
        var d;
        this.F = null != (d = b.ko) ? d : !1;
        this.C = null
    };
    sa(Sm, Qm);
    var Um = function(a) {
        return "function" === typeof a.s.__tcfapi || null != Tm(a)
    };
    Sm.prototype.addEventListener = function(a) {
        var b = this
          , c = {
            internalBlockOnErrors: this.F
        }
          , d = ym(function() {
            return a(c)
        })
          , e = 0;
        -1 !== this.W && (e = setTimeout(function() {
            c.tcString = "tcunavailable";
            c.internalErrorState = 1;
            d()
        }, this.W));
        var f = function(g, h) {
            clearTimeout(e);
            g ? (c = g,
            c.internalErrorState = Rm(c),
            c.internalBlockOnErrors = b.F,
            h && 0 === c.internalErrorState || (c.tcString = "tcunavailable",
            h || (c.internalErrorState = 3))) : (c.tcString = "tcunavailable",
            c.internalErrorState = 3);
            a(c)
        };
        try {
            Vm(this, "addEventListener", f)
        } catch (g) {
            c.tcString = "tcunavailable",
            c.internalErrorState = 3,
            e && (clearTimeout(e),
            e = 0),
            d()
        }
    }
    ;
    Sm.prototype.removeEventListener = function(a) {
        a && a.listenerId && Vm(this, "removeEventListener", null, a.listenerId)
    }
    ;
    var Xm = function(a, b, c) {
        var d;
        d = void 0 === d ? "755" : d;
        var e;
        a: {
            if (a.publisher && a.publisher.restrictions) {
                var f = a.publisher.restrictions[b];
                if (void 0 !== f) {
                    e = f[void 0 === d ? "755" : d];
                    break a
                }
            }
            e = void 0
        }
        var g = e;
        if (0 === g)
            return !1;
        var h = c;
        2 === c ? (h = 0,
        2 === g && (h = 1)) : 3 === c && (h = 1,
        1 === g && (h = 0));
        var m;
        if (0 === h)
            if (a.purpose && a.vendor) {
                var n = Wm(a.vendor.consents, void 0 === d ? "755" : d);
                m = n && "1" === b && a.purposeOneTreatment && "CH" === a.publisherCC ? !0 : n && Wm(a.purpose.consents, b)
            } else
                m = !0;
        else
            m = 1 === h ? a.purpose && a.vendor ? Wm(a.purpose.legitimateInterests, b) && Wm(a.vendor.legitimateInterests, void 0 === d ? "755" : d) : !0 : !0;
        return m
    }
      , Wm = function(a, b) {
        return !(!a || !a[b])
    }
      , Vm = function(a, b, c, d) {
        c || (c = function() {}
        );
        if ("function" === typeof a.s.__tcfapi) {
            var e = a.s.__tcfapi;
            e(b, 2, c, d)
        } else if (Tm(a)) {
            Ym(a);
            var f = ++a.Ea;
            a.M[f] = c;
            if (a.h) {
                var g = {};
                a.h.postMessage((g.__tcfapiCall = {
                    command: b,
                    version: 2,
                    callId: f,
                    parameter: d
                },
                g), "*")
            }
        } else
            c({}, !1)
    }
      , Tm = function(a) {
        if (a.h)
            return a.h;
        var b;
        a: {
            for (var c = a.s, d = 0; 50 > d; ++d) {
                var e;
                try {
                    e = !(!c.frames || !c.frames.__tcfapiLocator)
                } catch (h) {
                    e = !1
                }
                if (e) {
                    b = c;
                    break a
                }
                var f;
                b: {
                    try {
                        var g = c.parent;
                        if (g && g != c) {
                            f = g;
                            break b
                        }
                    } catch (h) {}
                    f = null
                }
                if (!(c = f))
                    break
            }
            b = null
        }
        a.h = b;
        return a.h
    }
      , Ym = function(a) {
        a.C || (a.C = function(b) {
            try {
                var c;
                c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn;
                a.M[c.callId](c.returnValue, c.success)
            } catch (d) {}
        }
        ,
        zm(a.s, "message", a.C))
    }
      , Zm = function(a) {
        if (!1 === a.gdprApplies)
            return !0;
        void 0 === a.internalErrorState && (a.internalErrorState = Rm(a));
        return "error" === a.cmpStatus || 0 !== a.internalErrorState ? a.internalBlockOnErrors ? (Pm({
            e: String(a.internalErrorState)
        }),
        !1) : !0 : "loaded" !== a.cmpStatus || "tcloaded" !== a.eventStatus && "useractioncomplete" !== a.eventStatus ? !1 : !0
    };
    var $m = {
        1: 0,
        3: 0,
        4: 0,
        7: 3,
        9: 3,
        10: 3
    };
    function an() {
        var a = si.tcf || {};
        return si.tcf = a
    }
    var gn = function() {
        var a = an()
          , b = new Sm(z,{
            mk: -1
        });
        Um(b) && !bn() && !cn() && M(124);
        if (!a.active && Um(b)) {
            bn() && (a.active = !0,
            a.ic = {},
            a.cmpId = 0,
            a.tcfPolicyVersion = 0,
            Vk().active = !0,
            a.tcString = "tcunavailable");
            xl();
            try {
                b.addEventListener(function(c) {
                    if (0 !== c.internalErrorState)
                        dn(a),
                        yl([N.g.J, N.g.xa, N.g.N]),
                        Vk().active = !0;
                    else if (a.gdprApplies = c.gdprApplies,
                    a.cmpId = c.cmpId,
                    a.enableAdvertiserConsentMode = c.enableAdvertiserConsentMode,
                    cn() && (a.active = !0),
                    !en(c) || bn() || cn()) {
                        a.tcfPolicyVersion = c.tcfPolicyVersion;
                        var d;
                        if (!1 === c.gdprApplies) {
                            var e = {}, f;
                            for (f in $m)
                                $m.hasOwnProperty(f) && (e[f] = !0);
                            d = e;
                            b.removeEventListener(c)
                        } else if (en(c)) {
                            var g = {}, h;
                            for (h in $m)
                                if ($m.hasOwnProperty(h))
                                    if ("1" === h) {
                                        var m, n = c, p = {
                                            Vl: !0
                                        };
                                        p = void 0 === p ? {} : p;
                                        m = Zm(n) ? !1 === n.gdprApplies ? !0 : "tcunavailable" === n.tcString || void 0 === n.gdprApplies && !p.Vl || "string" !== typeof n.tcString || !n.tcString.length ? !p.oo : Xm(n, "1", 0) : !1;
                                        g["1"] = m
                                    } else
                                        g[h] = Xm(c, h, $m[h]);
                            d = g
                        }
                        if (d) {
                            a.tcString = c.tcString || "tcempty";
                            a.ic = d;
                            var q = {}
                              , r = (q[N.g.J] = a.ic["1"] ? "granted" : "denied",
                            q);
                            !0 !== a.gdprApplies ? (yl([N.g.J, N.g.xa, N.g.N]),
                            Vk().active = !0) : (r[N.g.xa] = a.ic["3"] && a.ic["4"] ? "granted" : "denied",
                            "number" === typeof a.tcfPolicyVersion && 4 <= a.tcfPolicyVersion ? r[N.g.N] = a.ic["1"] && a.ic["7"] ? "granted" : "denied" : yl([N.g.N]),
                            rl(r, {
                                eventId: 0
                            }, {
                                gdprApplies: a ? a.gdprApplies : void 0,
                                tcString: fn() || ""
                            }))
                        }
                    } else
                        yl([N.g.J, N.g.xa, N.g.N])
                })
            } catch (c) {
                dn(a),
                yl([N.g.J, N.g.xa, N.g.N]),
                Vk().active = !0
            }
        }
    };
    function dn(a) {
        a.type = "e";
        a.tcString = "tcunavailable"
    }
    function en(a) {
        return "tcloaded" === a.eventStatus || "useractioncomplete" === a.eventStatus || "cmpuishown" === a.eventStatus
    }
    var bn = function() {
        return !0 === z.gtag_enable_tcf_support
    };
    function cn() {
        return !0 === an().enableAdvertiserConsentMode
    }
    var fn = function() {
        var a = an();
        if (a.active)
            return a.tcString
    }
      , hn = function() {
        var a = an();
        if (a.active && void 0 !== a.gdprApplies)
            return a.gdprApplies ? "1" : "0"
    }
      , jn = function(a) {
        if (!$m.hasOwnProperty(String(a)))
            return !0;
        var b = an();
        return b.active && b.ic ? !!b.ic[String(a)] : !0
    }
      , kn = function() {
        return Um(new Sm(z,{
            mk: -1
        }))
    };
    var ln = [N.g.J, N.g.R, N.g.N, N.g.xa]
      , mn = {}
      , nn = (mn[N.g.J] = 1,
    mn[N.g.R] = 2,
    mn);
    function on(a) {
        if (void 0 === a)
            return 0;
        switch (V(a, N.g.ka)) {
        case void 0:
            return 1;
        case !1:
            return 3;
        default:
            return 2
        }
    }
    var pn = function(a) {
        var b = on(a);
        if (3 === b)
            return !1;
        switch (cl(N.g.xa)) {
        case 1:
        case 3:
            return !0;
        case 2:
            return !1;
        case 4:
            return 2 === b;
        case 0:
            return !0;
        default:
            return !1
        }
    }
      , qn = function() {
        return fl() || !bl(N.g.J) || !bl(N.g.R)
    }
      , rn = function() {
        var a = {}, b;
        for (b in nn)
            nn.hasOwnProperty(b) && (a[nn[b]] = cl(b));
        return "G1" + Ne(a[1] || 0) + Ne(a[2] || 0)
    }
      , sn = {}
      , tn = (sn[N.g.J] = 0,
    sn[N.g.R] = 1,
    sn[N.g.N] = 2,
    sn[N.g.xa] = 3,
    sn);
    function un(a) {
        switch (a) {
        case void 0:
            return 1;
        case !0:
            return 3;
        case !1:
            return 2;
        default:
            return 0
        }
    }
    var vn = function(a) {
        for (var b = "1", c = 0; c < ln.length; c++) {
            var d = b, e, f = ln[c], g = Sk[f];
            e = void 0 === g ? 0 : tn.hasOwnProperty(g) ? 12 | tn[g] : 8;
            var h = Vk();
            h.accessedAny = !0;
            var m = h.entries[f] || {};
            e = e << 2 | un(m.implicit);
            b = d + ("" + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[e] + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[un(m.declare) << 4 | un(m.default) << 2 | un(m.update)])
        }
        var n = b, p;
        p = "" + (fl() << 2 | on(a));
        return n + p
    }
      , Gn = function() {
        var a;
        a = void 0 === a ? {} : a;
        if (!bl(N.g.N))
            return "-";
        for (var b = dl(), c = "", d = fa(Object.keys(qi)), e = d.next(); !e.done; e = d.next()) {
            var f = e.value;
            !1 !== b[f] && !1 !== a[f] && (c += qi[f])
        }
        return "" === c ? "-" : c
    }
      , Hn = function() {
        return ij() || (bn() || cn()) && "1" === hn() ? "1" : "0"
    }
      , In = function() {
        return (ij() ? !0 : !(!bn() && !cn()) && "1" === hn()) || !bl(N.g.N)
    }
      , Jn = function() {
        var a = "0", b = "0", c;
        var d = an();
        c = d.active ? d.cmpId : void 0;
        "number" === typeof c && 0 <= c && 4095 >= c && (a = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[c >> 6 & 63],
        b = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[c & 63]);
        var e = "0", f;
        var g = an();
        f = g.active ? g.tcfPolicyVersion : void 0;
        "number" === typeof f && 0 <= f && 63 >= f && (e = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[f]);
        var h = 0;
        ij() && (h |= 1);
        "1" === hn() && (h |= 2);
        bn() && (h |= 4);
        var m;
        var n = an();
        m = void 0 !== n.enableAdvertiserConsentMode ? n.enableAdvertiserConsentMode ? "1" : "0" : void 0;
        "1" === m && (h |= 8);
        Vk().waitPeriodTimedOut && (h |= 16);
        return "1" + a + b + e + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[h]
    };
    var Kn = function() {
        var a = !1;
        return a
    };
    var Ln = {
        UA: 1,
        AW: 2,
        DC: 3,
        G: 4,
        GF: 5,
        GT: 12,
        GTM: 14,
        HA: 6,
        MC: 7
    }
      , Mn = function(a, b) {
        var c = Vf.ctid.split("-")[0].toUpperCase()
          , d = {};
        d.ctid = Vf.ctid;
        d.jn = ri.ue;
        d.nn = ri.fh;
        d.Jm = Oj.qe ? 2 : 1;
        d.ze = Vf.canonicalContainerId;
        d.ze !== a && (d.fg = a);
        R(67) ? d.jk = 2 : R(66) && (d.jk = 1);
        yi ? (d.cg = Ln[c],
        d.cg || (d.cg = 0)) : d.cg = Ci ? 13 : 10;
        Li.F ? (d.Wf = 0,
        d.Dl = 2) : Ai ? d.Wf = 1 : Kn() ? d.Wf = 2 : d.Wf = 3;
        var e = {};
        e[6] = Pj;
        R(80) && !Pj && (e[1] = !0);
        d.Gl = e;
        var f;
        var g = d.cg
          , h = d.Wf;
        void 0 === g ? f = "" : (h || (h = 0),
        f = "" + Jg(1, 1) + Me(g << 2 | h));
        var m = d.Dl, n = 4 + f + (m ? "" + Jg(2, 1) + Me(m) : ""), p, q = d.nn;
        p = q && Ig.test(q) ? "" + Jg(3, 2) + q : "";
        var r, t = d.jn;
        r = t ? "" + Jg(4, 1) + Me(t) : "";
        var u;
        var v = d.ctid;
        if (v && b) {
            var w = v.split("-")
              , x = w[0].toUpperCase();
            if ("GTM" !== x && "OPT" !== x)
                u = "";
            else {
                var y = w[1];
                u = "" + Jg(5, 3) + Me(1 + y.length) + (d.Jm || 0) + y
            }
        } else
            u = "";
        var B = d.jk, A = d.ze, F = d.fg, G = d.qo, D = n + p + r + u + (B ? "" + Jg(6, 1) + Me(B) : "") + (A ? "" + Jg(7, 3) + Me(A.length) + A : "") + (F ? "" + Jg(8, 3) + Me(F.length) + F : "") + (G ? "" + Jg(9, 3) + Me(G.length) + G : ""), E;
        var O = d.Gl;
        O = void 0 === O ? {} : O;
        for (var P = [], T = fa(Object.keys(O)), Y = T.next(); !Y.done; Y = T.next()) {
            var S = Y.value;
            P[Number(S)] = O[S]
        }
        if (P.length) {
            var U = Jg(10, 3), ja;
            if (0 === P.length)
                ja = Me(0);
            else {
                for (var ha = [], ca = 0, Fa = !1, ma = 0; ma < P.length; ma++) {
                    Fa = !0;
                    var Aa = ma % 6;
                    P[ma] && (ca |= 1 << Aa);
                    5 === Aa && (ha.push(Me(ca)),
                    ca = 0,
                    Fa = !1)
                }
                Fa && ha.push(Me(ca));
                ja = ha.join("")
            }
            var Pa = ja;
            E = "" + U + Me(Pa.length) + Pa
        } else
            E = "";
        return D + E
    };
    var Nn = function(a, b, c) {
        for (var d = [], e = b.split(";"), f = 0; f < e.length; f++) {
            var g = e[f].split("=")
              , h = g[0].replace(/^\s*|\s*$/g, "");
            if (h && h == a) {
                var m = g.slice(1).join("=").replace(/^\s*|\s*$/g, "");
                m && c && (m = decodeURIComponent(m));
                d.push(m)
            }
        }
        return d
    };
    var Qn = function(a, b, c, d) {
        return On(d) ? Nn(a, String(b || Pn()), c) : []
    }
      , Tn = function(a, b, c, d, e) {
        if (On(e)) {
            var f = Rn(a, d, e);
            if (1 === f.length)
                return f[0].id;
            if (0 !== f.length) {
                f = Sn(f, function(g) {
                    return g.Pf
                }, b);
                if (1 === f.length)
                    return f[0].id;
                f = Sn(f, function(g) {
                    return g.Xe
                }, c);
                return f[0] ? f[0].id : void 0
            }
        }
    };
    function Un(a, b, c, d) {
        var e = Pn()
          , f = window;
        "null" !== f.origin && (f.document.cookie = a);
        var g = Pn();
        return e != g || void 0 != c && 0 <= Qn(b, g, !1, d).indexOf(c)
    }
    var Yn = function(a, b, c, d) {
        function e(w, x, y) {
            if (null == y)
                return delete h[x],
                w;
            h[x] = y;
            return w + "; " + x + "=" + y
        }
        function f(w, x) {
            if (null == x)
                return delete h[x],
                w;
            h[x] = !0;
            return w + "; " + x
        }
        if (!On(c.Nb))
            return 2;
        var g;
        void 0 == b ? g = a + "=deleted; expires=" + (new Date(0)).toUTCString() : (c.encode && (b = encodeURIComponent(b)),
        b = Vn(b),
        g = a + "=" + b);
        var h = {};
        g = e(g, "path", c.path);
        var m;
        c.expires instanceof Date ? m = c.expires.toUTCString() : null != c.expires && (m = "" + c.expires);
        g = e(g, "expires", m);
        g = e(g, "max-age", c.Nm);
        g = e(g, "samesite", c.on);
        c.qn && (g = f(g, "secure"));
        var n = c.domain;
        if (n && "auto" === n.toLowerCase()) {
            for (var p = Wn(), q = void 0, r = !1, t = 0; t < p.length; ++t) {
                var u = "none" !== p[t] ? p[t] : void 0
                  , v = e(g, "domain", u);
                v = f(v, c.flags);
                try {
                    d && d(a, h)
                } catch (w) {
                    q = w;
                    continue
                }
                r = !0;
                if (!Xn(u, c.path) && Un(v, a, b, c.Nb))
                    return 0
            }
            if (q && !r)
                throw q;
            return 1
        }
        n && "none" !== n.toLowerCase() && (g = e(g, "domain", n));
        g = f(g, c.flags);
        d && d(a, h);
        return Xn(n, c.path) ? 1 : Un(g, a, b, c.Nb) ? 0 : 1
    }
      , Zn = function(a, b, c) {
        null == c.path && (c.path = "/");
        c.domain || (c.domain = "auto");
        return Yn(a, b, c)
    };
    function Sn(a, b, c) {
        for (var d = [], e = [], f, g = 0; g < a.length; g++) {
            var h = a[g]
              , m = b(h);
            m === c ? d.push(h) : void 0 === f || m < f ? (e = [h],
            f = m) : m === f && e.push(h)
        }
        return 0 < d.length ? d : e
    }
    function Rn(a, b, c) {
        for (var d = [], e = Qn(a, void 0, void 0, c), f = 0; f < e.length; f++) {
            var g = e[f].split(".")
              , h = g.shift();
            if (!b || -1 !== b.indexOf(h)) {
                var m = g.shift();
                m && (m = m.split("-"),
                d.push({
                    id: g.join("."),
                    Pf: 1 * m[0] || 1,
                    Xe: 1 * m[1] || 1
                }))
            }
        }
        return d
    }
    var Vn = function(a) {
        a && 1200 < a.length && (a = a.substring(0, 1200));
        return a
    }
      , $n = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/
      , ao = /(^|\.)doubleclick\.net$/i
      , Xn = function(a, b) {
        return ao.test(window.document.location.hostname) || "/" === b && $n.test(a)
    }
      , Pn = function() {
        return "null" !== window.origin ? window.document.cookie : ""
    }
      , Wn = function() {
        var a = []
          , b = window.document.location.hostname.split(".");
        if (4 === b.length) {
            var c = b[b.length - 1];
            if (parseInt(c, 10).toString() === c)
                return ["none"]
        }
        for (var d = b.length - 2; 0 <= d; d--)
            a.push(b.slice(d).join("."));
        var e = window.document.location.hostname;
        ao.test(e) || $n.test(e) || a.push("none");
        return a
    }
      , On = function(a) {
        return a && Pk().h() ? (k(a) ? [a] : a).every(function(b) {
            return el(b) && bl(b)
        }) : !0
    }
      , bo = function(a) {
        if (!a)
            return 1;
        a = 0 === a.indexOf(".") ? a.substr(1) : a;
        return a.split(".").length
    }
      , co = function(a) {
        if (!a || "/" === a)
            return 1;
        "/" !== a[0] && (a = "/" + a);
        "/" !== a[a.length - 1] && (a += "/");
        return a.split("/").length - 1
    }
      , eo = function(a, b) {
        var c = "" + bo(a)
          , d = co(b);
        1 < d && (c += "-" + d);
        return c
    };
    var fo = function(a) {
        var b = Math.round(2147483647 * Math.random()), c;
        if (a) {
            var d = 1, e, f, g;
            if (a)
                for (d = 0,
                f = a.length - 1; 0 <= f; f--)
                    g = a.charCodeAt(f),
                    d = (d << 6 & 268435455) + g + (g << 14),
                    e = d & 266338304,
                    d = 0 !== e ? d ^ e >> 21 : d;
            c = String(b ^ d & 2147483647)
        } else
            c = String(b);
        return c
    }
      , go = function(a) {
        return [fo(a), Math.round(Ta() / 1E3)].join(".")
    }
      , ho = function(a, b, c, d, e) {
        var f = bo(b);
        return Tn(a, f, co(c), d, e)
    }
      , io = function(a, b, c, d) {
        return [b, eo(c, d), a].join(".")
    };
    function jo(a, b, c, d) {
        var e, f = Number(null != a.Hc ? a.Hc : void 0);
        0 !== f && (e = new Date((b || Ta()) + 1E3 * (f || 7776E3)));
        return {
            path: a.path,
            domain: a.domain,
            flags: a.flags,
            encode: !!c,
            expires: e,
            Nb: d
        }
    }
    ;var ko;
    var oo = function() {
        var a = lo
          , b = mo
          , c = no()
          , d = function(g) {
            a(g.target || g.srcElement || {})
        }
          , e = function(g) {
            b(g.target || g.srcElement || {})
        };
        if (!c.init) {
            Mc(C, "mousedown", d);
            Mc(C, "keyup", d);
            Mc(C, "submit", e);
            var f = HTMLFormElement.prototype.submit;
            HTMLFormElement.prototype.submit = function() {
                b(this);
                f.call(this)
            }
            ;
            c.init = !0
        }
    }
      , po = function(a, b, c, d, e) {
        var f = {
            callback: a,
            domains: b,
            fragment: 2 === c,
            placement: c,
            forms: d,
            sameHost: e
        };
        no().decorators.push(f)
    }
      , qo = function(a, b, c) {
        for (var d = no().decorators, e = {}, f = 0; f < d.length; ++f) {
            var g = d[f], h;
            if (h = !c || g.forms)
                a: {
                    var m = g.domains
                      , n = a
                      , p = !!g.sameHost;
                    if (m && (p || n !== C.location.hostname))
                        for (var q = 0; q < m.length; q++)
                            if (m[q]instanceof RegExp) {
                                if (m[q].test(n)) {
                                    h = !0;
                                    break a
                                }
                            } else if (0 <= n.indexOf(m[q]) || p && 0 <= m[q].indexOf(n)) {
                                h = !0;
                                break a
                            }
                    h = !1
                }
            if (h) {
                var r = g.placement;
                void 0 == r && (r = g.fragment ? 2 : 1);
                r === b && Wa(e, g.callback())
            }
        }
        return e
    };
    function no() {
        var a = Dc("google_tag_data", {})
          , b = a.gl;
        b && b.decorators || (b = {
            decorators: []
        },
        a.gl = b);
        return b
    }
    ;var ro = /(.*?)\*(.*?)\*(.*)/
      , so = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/
      , to = /^(?:www\.|m\.|amp\.)+/
      , uo = /([^?#]+)(\?[^#]*)?(#.*)?/;
    function vo(a) {
        var b = uo.exec(a);
        if (b)
            return {
                Qh: b[1],
                query: b[2],
                fragment: b[3]
            }
    }
    function wo(a, b) {
        var c = [Bc.userAgent, (new Date).getTimezoneOffset(), Bc.userLanguage || Bc.language, Math.floor(Ta() / 60 / 1E3) - (void 0 === b ? 0 : b), a].join("*"), d;
        if (!(d = ko)) {
            for (var e = Array(256), f = 0; 256 > f; f++) {
                for (var g = f, h = 0; 8 > h; h++)
                    g = g & 1 ? g >>> 1 ^ 3988292384 : g >>> 1;
                e[f] = g
            }
            d = e
        }
        ko = d;
        for (var m = 4294967295, n = 0; n < c.length; n++)
            m = m >>> 8 ^ ko[(m ^ c.charCodeAt(n)) & 255];
        return ((m ^ -1) >>> 0).toString(36)
    }
    function xo() {
        return function(a) {
            var b = vj(z.location.href)
              , c = b.search.replace("?", "")
              , d = oj(c, "_gl", !1, !0) || "";
            a.query = yo(d) || {};
            var e = rj(b, "fragment"), f;
            var g = -1;
            if (Ya(e, "_gl="))
                g = 4;
            else {
                var h = e.indexOf("&_gl=");
                0 < h && (g = h + 3 + 2)
            }
            if (0 > g)
                f = void 0;
            else {
                var m = e.indexOf("&", g);
                f = 0 > m ? e.substring(g) : e.substring(g, m)
            }
            a.fragment = yo(f || "") || {}
        }
    }
    var zo = function(a) {
        var b = xo()
          , c = no();
        c.data || (c.data = {
            query: {},
            fragment: {}
        },
        b(c.data));
        var d = {}
          , e = c.data;
        e && (Wa(d, e.query),
        a && Wa(d, e.fragment));
        return d
    }
      , yo = function(a) {
        try {
            var b = Ao(a, 3);
            if (void 0 !== b) {
                for (var c = {}, d = b ? b.split("*") : [], e = 0; e + 1 < d.length; e += 2) {
                    var f = d[e]
                      , g = yb(d[e + 1]);
                    c[f] = g
                }
                Ab("TAGGING", 6);
                return c
            }
        } catch (h) {
            Ab("TAGGING", 8)
        }
    };
    function Ao(a, b) {
        if (a) {
            var c;
            a: {
                for (var d = a, e = 0; 3 > e; ++e) {
                    var f = ro.exec(d);
                    if (f) {
                        c = f;
                        break a
                    }
                    d = decodeURIComponent(d)
                }
                c = void 0
            }
            var g = c;
            if (g && "1" === g[1]) {
                var h = g[3], m;
                a: {
                    for (var n = g[2], p = 0; p < b; ++p)
                        if (n === wo(h, p)) {
                            m = !0;
                            break a
                        }
                    m = !1
                }
                if (m)
                    return h;
                Ab("TAGGING", 7)
            }
        }
    }
    function Bo(a, b, c, d, e) {
        function f(p) {
            var q = p
              , r = (new RegExp("(.*?)(^|&)" + a + "=([^&]*)&?(.*)")).exec(q)
              , t = q;
            if (r) {
                var u = r[2]
                  , v = r[4];
                t = r[1];
                v && (t = t + u + v)
            }
            p = t;
            var w = p.charAt(p.length - 1);
            p && "&" !== w && (p += "&");
            return p + n
        }
        d = void 0 === d ? !1 : d;
        e = void 0 === e ? !1 : e;
        var g = vo(c);
        if (!g)
            return "";
        var h = g.query || ""
          , m = g.fragment || ""
          , n = a + "=" + b;
        d ? 0 !== m.substring(1).length && e || (m = "#" + f(m.substring(1))) : h = "?" + f(h.substring(1));
        return "" + g.Qh + h + m
    }
    function Co(a, b) {
        function c(n, p, q) {
            var r;
            a: {
                for (var t in n)
                    if (n.hasOwnProperty(t)) {
                        r = !0;
                        break a
                    }
                r = !1
            }
            if (r) {
                var u, v = [], w;
                for (w in n)
                    if (n.hasOwnProperty(w)) {
                        var x = n[w];
                        void 0 !== x && x === x && null !== x && "[object Object]" !== x.toString() && (v.push(w),
                        v.push(xb(String(x))))
                    }
                var y = v.join("*");
                u = ["1", wo(y), y].join("*");
                d ? (Uf(13) || Uf(11) || !p) && Do("_gl", u, a, p, q) : Eo("_gl", u, a, p, q)
            }
        }
        var d = "FORM" === (a.tagName || "").toUpperCase()
          , e = qo(b, 1, d)
          , f = qo(b, 2, d)
          , g = qo(b, 4, d)
          , h = qo(b, 3, d);
        c(e, !1, !1);
        c(f, !0, !1);
        Uf(11) && c(g, !0, !0);
        for (var m in h)
            h.hasOwnProperty(m) && Fo(m, h[m], a)
    }
    function Fo(a, b, c) {
        "a" === c.tagName.toLowerCase() ? Eo(a, b, c) : "form" === c.tagName.toLowerCase() && Do(a, b, c)
    }
    function Eo(a, b, c, d, e) {
        d = void 0 === d ? !1 : d;
        e = void 0 === e ? !1 : e;
        var f;
        if (f = c.href) {
            var g;
            if (!(g = !Uf(16) || d)) {
                var h = z.location.href
                  , m = vo(c.href)
                  , n = vo(h);
                g = !(m && n && m.Qh === n.Qh && m.query === n.query && m.fragment)
            }
            f = g
        }
        if (f) {
            var p = Bo(a, b, c.href, d, e);
            pc.test(p) && (c.href = p)
        }
    }
    function Do(a, b, c, d, e) {
        d = void 0 === d ? !1 : d;
        e = void 0 === e ? !1 : e;
        if (c && c.action) {
            var f = (c.method || "").toLowerCase();
            if ("get" !== f || d) {
                if ("get" === f || "post" === f) {
                    var g = Bo(a, b, c.action, d, e);
                    pc.test(g) && (c.action = g)
                }
            } else {
                for (var h = c.childNodes || [], m = !1, n = 0; n < h.length; n++) {
                    var p = h[n];
                    if (p.name === a) {
                        p.setAttribute("value", b);
                        m = !0;
                        break
                    }
                }
                if (!m) {
                    var q = C.createElement("input");
                    q.setAttribute("type", "hidden");
                    q.setAttribute("name", a);
                    q.setAttribute("value", b);
                    c.appendChild(q)
                }
            }
        }
    }
    function lo(a) {
        try {
            var b;
            a: {
                for (var c = a, d = 100; c && 0 < d; ) {
                    if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) {
                        b = c;
                        break a
                    }
                    c = c.parentNode;
                    d--
                }
                b = null
            }
            var e = b;
            if (e) {
                var f = e.protocol;
                "http:" !== f && "https:" !== f || Co(e, e.hostname)
            }
        } catch (g) {}
    }
    function mo(a) {
        try {
            if (a.action) {
                var b = rj(vj(a.action), "host");
                Co(a, b)
            }
        } catch (c) {}
    }
    var Go = function(a, b, c, d) {
        oo();
        po(a, b, "fragment" === c ? 2 : 1, !!d, !1)
    }
      , Ho = function(a, b) {
        oo();
        po(a, [qj(z.location, "host", !0)], b, !0, !0)
    }
      , Io = function() {
        var a = C.location.hostname
          , b = so.exec(C.referrer);
        if (!b)
            return !1;
        var c = b[2]
          , d = b[1]
          , e = "";
        if (c) {
            var f = c.split("/")
              , g = f[1];
            e = "s" === g ? decodeURIComponent(f[2]) : decodeURIComponent(g)
        } else if (d) {
            if (0 === d.indexOf("xn--"))
                return !1;
            e = d.replace(/-/g, ".").replace(/\.\./g, "-")
        }
        var h = a.replace(to, ""), m = e.replace(to, ""), n;
        if (!(n = h === m)) {
            var p = "." + m;
            n = h.substring(h.length - p.length, h.length) === p
        }
        return n
    }
      , Jo = function(a, b) {
        return !1 === a ? !1 : a || b || Io()
    };
    var Ko = ["1"]
      , Lo = {}
      , Mo = {}
      , Ro = function(a, b) {
        b = void 0 === b ? !0 : b;
        var c = No(a.prefix);
        if (!Lo[c])
            if (Oo(c, a.path, a.domain)) {
                var d = Mo[No(a.prefix)];
                Po(a, d ? d.id : void 0, d ? d.Kh : void 0)
            } else {
                var e = Cj("auiddc");
                if (e)
                    Ab("TAGGING", 17),
                    Lo[c] = e;
                else if (b) {
                    var f = No(a.prefix)
                      , g = go();
                    if (0 === Qo(f, g, a)) {
                        var h = Dc("google_tag_data", {});
                        h._gcl_au || (h._gcl_au = g)
                    }
                    Oo(c, a.path, a.domain)
                }
            }
    };
    function Po(a, b, c) {
        var d = No(a.prefix)
          , e = Lo[d];
        if (e) {
            var f = e.split(".");
            if (2 === f.length) {
                var g = Number(f[1]) || 0;
                if (g) {
                    var h = e;
                    b && (h = e + "." + b + "." + (c ? c : Math.floor(Ta() / 1E3)));
                    Qo(d, h, a, 1E3 * g)
                }
            }
        }
    }
    function Qo(a, b, c, d) {
        var e = io(b, "1", c.domain, c.path)
          , f = jo(c, d);
        f.Nb = So();
        return Zn(a, e, f)
    }
    function Oo(a, b, c) {
        var d = ho(a, b, c, Ko, So());
        if (!d)
            return !1;
        To(a, d);
        return !0
    }
    function To(a, b) {
        var c = b.split(".");
        5 === c.length ? (Lo[a] = c.slice(0, 2).join("."),
        Mo[a] = {
            id: c.slice(2, 4).join("."),
            Kh: Number(c[4]) || 0
        }) : 3 === c.length ? Mo[a] = {
            id: c.slice(0, 2).join("."),
            Kh: Number(c[2]) || 0
        } : Lo[a] = b
    }
    function No(a) {
        return (a || "_gcl") + "_au"
    }
    function Uo(a) {
        function b() {
            bl(c) && a()
        }
        var c = So();
        il(function() {
            b();
            bl(c) || jl(b, c)
        }, c)
    }
    function Vo(a) {
        var b = zo(!0)
          , c = No(a.prefix);
        Uo(function() {
            var d = b[c];
            if (d) {
                To(c, d);
                var e = 1E3 * Number(Lo[c].split(".")[1]);
                if (e) {
                    Ab("TAGGING", 16);
                    var f = jo(a, e);
                    f.Nb = So();
                    var g = io(d, "1", a.domain, a.path);
                    Zn(c, g, f)
                }
            }
        })
    }
    function Wo(a, b, c, d, e) {
        e = e || {};
        var f = function() {
            var g = {}
              , h = ho(a, e.path, e.domain, Ko, So());
            h && (g[a] = h);
            return g
        };
        Uo(function() {
            Go(f, b, c, d)
        })
    }
    function So() {
        return Uf(14) ? ["ad_storage", "ad_user_data"] : ["ad_storage"]
    }
    ;var Xo = function(a) {
        for (var b = [], c = C.cookie.split(";"), d = new RegExp("^\\s*" + (a || "_gac") + "_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$"), e = 0; e < c.length; e++) {
            var f = c[e].match(d);
            f && b.push({
                gi: f[1],
                value: f[2],
                timestamp: Number(f[2].split(".")[1]) || 0
            })
        }
        b.sort(function(g, h) {
            return h.timestamp - g.timestamp
        });
        return b
    };
    function Yo(a, b) {
        var c = Xo(a)
          , d = {};
        if (!c || !c.length)
            return d;
        for (var e = 0; e < c.length; e++) {
            var f = c[e].value.split(".");
            if (!("1" !== f[0] || b && 3 > f.length || !b && 3 !== f.length) && Number(f[1])) {
                d[c[e].gi] || (d[c[e].gi] = []);
                var g = {
                    version: f[0],
                    timestamp: 1E3 * Number(f[1]),
                    ia: f[2]
                };
                b && 3 < f.length && (g.labels = f.slice(3));
                d[c[e].gi].push(g)
            }
        }
        return d
    }
    ;var Zo = {}
      , $o = (Zo.k = {
        Na: /^[\w-]+$/
    },
    Zo.b = {
        Na: /^[\w-]+$/,
        Yh: !0
    },
    Zo.i = {
        Na: /^[1-9]\d*$/
    },
    Zo)
      , ap = {}
      , bp = (ap[5] = {
        version: "2",
        Dn: ["2"],
        fk: "ad_storage",
        Ij: ["k", "i", "b"]
    },
    ap);
    function cp(a, b) {
        var c = b.Na;
        return "function" === typeof c ? c(a) : c.test(a)
    }
    function dp(a) {
        for (var b = fa(Object.keys(a)), c = b.next(), d = {}; !c.done; d = {
            Be: void 0
        },
        c = b.next()) {
            var e = c.value
              , f = a[e];
            d.Be = $o[e];
            d.Be ? d.Be.Yh ? a[e] = Array.isArray(f) ? f.filter(function(g) {
                return function(h) {
                    return cp(h, g.Be)
                }
            }(d)) : void 0 : "string" === typeof f && cp(f, d.Be) || (a[e] = void 0) : a[e] = void 0
        }
        return a
    }
    function ep(a) {
        var b = bp[5];
        if (b) {
            for (var c = [], d = Qn(a, void 0, void 0, b.fk), e = fa(d), f = e.next(); !f.done; f = e.next()) {
                var g = f.value.split(".")
                  , h = g.shift();
                if (-1 !== b.Dn.indexOf(h)) {
                    g.shift();
                    var m = g.join("."), n = c, p = n.push, q;
                    var r = {}
                      , t = bp[5];
                    if (t) {
                        for (var u = t.Ij, v = fa(m.split("$")), w = v.next(); !w.done; w = v.next()) {
                            var x = w.value
                              , y = x[0];
                            if (-1 !== u.indexOf(y))
                                try {
                                    var B = decodeURIComponent(x.substring(1))
                                      , A = $o[y];
                                    A && (A.Yh ? (r[y] = r[y] || [],
                                    r[y].push(B)) : r[y] = B)
                                } catch (F) {}
                        }
                        q = dp(r)
                    } else
                        q = void 0;
                    p.call(n, q)
                }
            }
            return c
        }
    }
    function fp(a, b, c, d) {
        c = c || {};
        var e;
        var f = bp[5];
        if (f) {
            for (var g = [], h = fa(f.Ij), m = h.next(); !m.done; m = h.next()) {
                var n = m.value
                  , p = $o[n];
                if (p) {
                    var q = b[n];
                    if (void 0 !== q)
                        if (p.Yh && Array.isArray(q))
                            for (var r = fa(q), t = r.next(); !t.done; t = r.next())
                                g.push(encodeURIComponent("" + n + t.value));
                        else
                            g.push(encodeURIComponent("" + n + q))
                }
            }
            e = g.join("$")
        } else
            e = void 0;
        var u = e;
        if (u) {
            var v = bp[5]
              , w = [v.version, eo(c.domain, c.path), u].join(".");
            Zn(a, w, jo(c, d, void 0, v.fk))
        }
    }
    ;var gp = /^\w+$/
      , hp = /^[\w-]+$/
      , ip = {
        ag: "_ag",
        aw: "_aw",
        dc: "_dc",
        gb: "_gb",
        gf: "_gf",
        gp: "_gp",
        ha: "_ha"
    };
    function jp() {
        return Uf(14) ? ["ad_storage", "ad_user_data"] : ["ad_storage"]
    }
    var kp = function(a) {
        return !Pk().h() || bl(a)
    }
      , lp = function(a) {
        function b() {
            var d = kp(c);
            d && a();
            return d
        }
        var c = jp();
        il(function() {
            b() || jl(b, c)
        }, c)
    }
      , np = function(a) {
        return mp(a).map(function(b) {
            return b.ia
        })
    };
    function op(a, b, c, d, e) {
        var f = Ia(a, function(g) {
            return g.ia === c
        });
        f ? (f.timestamp = Math.max(f.timestamp, d),
        f.labels = pp(f.labels || [], e || [])) : a.push({
            version: b,
            ia: c,
            timestamp: d,
            labels: e
        })
    }
    var mp = function(a) {
        for (var b = [], c = Qn(a, C.cookie, void 0, jp()), d = fa(c), e = d.next(); !e.done; e = d.next()) {
            var f = qp(e.value);
            if (null != f) {
                var g = f;
                op(b, g.version, g.ia, g.timestamp, g.labels)
            }
        }
        b.sort(function(h, m) {
            return m.timestamp - h.timestamp
        });
        return rp(b)
    }
      , sp = function(a) {
        if (!Uf(20))
            return [];
        for (var b = ep(a) || [], c = [], d = fa(b), e = d.next(); !e.done; e = d.next()) {
            var f = e.value
              , g = f
              , h = f ? 1E3 * (Number(f.i) || 0) : 0;
            h && op(c, "2", g.k, h, g.b || [])
        }
        return c.sort(function(m, n) {
            return n.timestamp - m.timestamp
        })
    };
    function pp(a, b) {
        if (!a.length)
            return b;
        if (!b.length)
            return a;
        var c = {};
        return a.concat(b).filter(function(d) {
            return c.hasOwnProperty(d) ? !1 : c[d] = !0
        })
    }
    function tp(a) {
        return a && "string" == typeof a && a.match(gp) ? a : "_gcl"
    }
    function up(a, b) {
        var c = Uf(20), d = vj(a), e = rj(d, "query", !1, void 0, "gclid"), f = rj(d, "query", !1, void 0, "gclsrc"), g = rj(d, "query", !1, void 0, "wbraid"), h;
        c && (h = rj(d, "query", !1, void 0, "gbraid"));
        var m = rj(d, "query", !1, void 0, "dclid");
        if (b && (!e || !f || !g || c && !h)) {
            var n = d.hash.replace("#", "");
            e = e || oj(n, "gclid", !1);
            f = f || oj(n, "gclsrc", !1);
            g = g || oj(n, "wbraid", !1);
            c && (h = h || oj(n, "gbraid", !1))
        }
        return vp(e, f, m, g, h)
    }
    var wp = function() {
        return up(z.location.href, !0)
    }
      , vp = function(a, b, c, d, e) {
        var f = {}
          , g = function(h, m) {
            f[m] || (f[m] = []);
            f[m].push(h)
        };
        f.gclid = a;
        f.gclsrc = b;
        f.dclid = c;
        if (void 0 !== a && a.match(hp))
            switch (b) {
            case void 0:
                g(a, "aw");
                break;
            case "aw.ds":
                g(a, "aw");
                g(a, "dc");
                break;
            case "ds":
                g(a, "dc");
                break;
            case "3p.ds":
                g(a, "dc");
                break;
            case "gf":
                g(a, "gf");
                break;
            case "ha":
                g(a, "ha")
            }
        c && g(c, "dc");
        void 0 !== d && hp.test(d) && (f.wbraid = d,
        g(d, "gb"));
        Uf(20) && void 0 !== e && hp.test(e) && (f.gbraid = e,
        g(e, "ag"));
        return f
    }
      , yp = function(a) {
        var b = wp();
        if (Uf(18)) {
            for (var c = !0, d = fa(Object.keys(b)), e = d.next(); !e.done; e = d.next())
                if (void 0 !== b[e.value]) {
                    c = !1;
                    break
                }
            c && (b = up(z.document.referrer, !1))
        }
        xp(b, !1, a)
    };
    function xp(a, b, c, d, e) {
        c = c || {};
        e = e || [];
        var f = tp(c.prefix);
        d = d || Ta();
        var g = Math.round(d / 1E3)
          , h = jp()
          , m = !1
          , n = !1
          , p = function() {
            if (kp(h)) {
                var q = jo(c, d, !0);
                q.Nb = h;
                for (var r = function(D, E) {
                    var O = zp(D, f);
                    O && (Zn(O, E, q),
                    "gb" !== D && (m = !0))
                }, t = function(D) {
                    var E = ["GCL", g, D];
                    0 < e.length && E.push(e.join("."));
                    return E.join(".")
                }, u = fa(["aw", "dc", "gf", "ha", "gp"]), v = u.next(); !v.done; v = u.next()) {
                    var w = v.value;
                    a[w] && r(w, t(a[w][0]))
                }
                if (!m && a.gb) {
                    var x = a.gb[0]
                      , y = zp("gb", f);
                    !b && mp(y).some(function(D) {
                        return D.ia === x && D.labels && 0 < D.labels.length
                    }) || r("gb", t(x))
                }
            }
            if (!n && Uf(20) && a.gbraid && kp("ad_storage") && (n = !0,
            !m)) {
                var B = a.gbraid
                  , A = zp("ag", f);
                if (b || !sp(A).some(function(D) {
                    return D.ia === B && D.labels && 0 < D.labels.length
                })) {
                    var F = {}
                      , G = (F.k = B,
                    F.i = g,
                    F.b = e,
                    F);
                    fp(A, G, c, d)
                }
            }
        };
        il(function() {
            p();
            kp(h) || jl(p, h)
        }, h)
    }
    var Bp = function(a, b) {
        var c = zo(!0);
        lp(function() {
            for (var d = tp(b.prefix), e = 0; e < a.length; ++e) {
                var f = a[e];
                if (void 0 !== ip[f]) {
                    var g = zp(f, d)
                      , h = c[g];
                    if (h) {
                        var m = Math.min(Ap(h), Ta()), n;
                        b: {
                            for (var p = m, q = Qn(g, C.cookie, void 0, jp()), r = 0; r < q.length; ++r)
                                if (Ap(q[r]) > p) {
                                    n = !0;
                                    break b
                                }
                            n = !1
                        }
                        if (!n) {
                            var t = jo(b, m, !0);
                            t.Nb = jp();
                            Zn(g, h, t)
                        }
                    }
                }
            }
            xp(vp(c.gclid, c.gclsrc), !1, b)
        })
    }
      , zp = function(a, b) {
        var c = ip[a];
        if (void 0 !== c)
            return b + c
    }
      , Ap = function(a) {
        return 0 !== Cp(a.split(".")).length ? 1E3 * (Number(a.split(".")[1]) || 0) : 0
    };
    function qp(a) {
        var b = Cp(a.split("."));
        return 0 === b.length ? null : {
            version: b[0],
            ia: b[2],
            timestamp: 1E3 * (Number(b[1]) || 0),
            labels: b.slice(3)
        }
    }
    function Cp(a) {
        return 3 > a.length || "GCL" !== a[0] && "1" !== a[0] || !/^\d+$/.test(a[1]) || !hp.test(a[2]) ? [] : a
    }
    var Dp = function(a, b, c, d, e) {
        if (Ha(b) && "null" !== z.origin) {
            var f = tp(e)
              , g = function() {
                for (var h = {}, m = 0; m < a.length; ++m) {
                    var n = zp(a[m], f);
                    if (n) {
                        var p = Qn(n, C.cookie, void 0, jp());
                        p.length && (h[n] = p.sort()[p.length - 1])
                    }
                }
                return h
            };
            lp(function() {
                Go(g, b, c, d)
            })
        }
    }
      , rp = function(a) {
        return a.filter(function(b) {
            return hp.test(b.ia)
        })
    }
      , Ep = function(a, b) {
        if ("null" !== z.origin) {
            for (var c = tp(b.prefix), d = {}, e = 0; e < a.length; e++)
                ip[a[e]] && (d[a[e]] = ip[a[e]]);
            lp(function() {
                l(d, function(f, g) {
                    var h = Qn(c + g, C.cookie, void 0, jp());
                    h.sort(function(t, u) {
                        return Ap(u) - Ap(t)
                    });
                    if (h.length) {
                        var m = h[0], n = Ap(m), p = 0 !== Cp(m.split(".")).length ? m.split(".").slice(3) : [], q = {}, r;
                        r = 0 !== Cp(m.split(".")).length ? m.split(".")[2] : void 0;
                        q[f] = [r];
                        xp(q, !0, b, n, p)
                    }
                })
            })
        }
    };
    function Fp(a, b) {
        for (var c = 0; c < b.length; ++c)
            if (a[b[c]])
                return !0;
        return !1
    }
    var Gp = function(a) {
        function b(e, f, g) {
            g && (e[f] = g)
        }
        if (fl()) {
            var c = wp();
            if (Fp(c, a)) {
                var d = {};
                b(d, "gclid", c.gclid);
                b(d, "dclid", c.dclid);
                b(d, "gclsrc", c.gclsrc);
                b(d, "wbraid", c.wbraid);
                Uf(20) && b(d, "gbraid", c.gbraid);
                Ho(function() {
                    return d
                }, 3);
                Ho(function() {
                    var e = {};
                    return e._up = "1",
                    e
                }, 1)
            }
        }
    }
      , Hp = function(a) {
        if (!Uf(11))
            return null;
        var b = zo(!0).gad_source;
        if (null != b)
            return z.location.hash = "",
            b;
        if (Uf(12)) {
            var c = vj(z.location.href);
            b = rj(c, "query", !1, void 0, "gad_source");
            if (null != b)
                return b;
            var d = wp();
            if (Fp(d, a))
                return "0"
        }
        return null
    }
      , Ip = function(a) {
        var b = Hp(a);
        null != b && Ho(function() {
            var c = {};
            return c.gad_source = b,
            c
        }, 4)
    }
      , Jp = function(a, b, c, d) {
        var e = [];
        c = c || {};
        if (!kp(jp()))
            return e;
        var f = mp(a), g;
        a: {
            if (f.length) {
                for (var h = 0; h < f.length; h++)
                    -1 === (f[h].labels || []).indexOf(b) ? e.push(0) : e.push(1);
                if (1 !== e[0]) {
                    g = f[0];
                    break a
                }
            }
            g = void 0
        }
        var m = g;
        if (m && !d) {
            var n = m.timestamp
              , p = [m.version, Math.round(n / 1E3), m.ia].concat(m.labels || [], [b]).join(".")
              , q = jo(c, n, !0);
            q.Nb = jp();
            Zn(a, p, q)
        }
        return e
    };
    function Kp(a, b) {
        var c = tp(b)
          , d = zp(a, c);
        if (!d)
            return 0;
        var e;
        e = "ag" === a ? sp(d) : mp(d);
        for (var f = 0, g = 0; g < e.length; g++)
            f = Math.max(f, e[g].timestamp);
        return f
    }
    function Lp(a) {
        var b = 0, c;
        for (c in a)
            for (var d = a[c], e = 0; e < d.length; e++)
                b = Math.max(b, Number(d[e].timestamp));
        return b
    }
    var Mp = function(a) {
        var b = Math.max(Kp("aw", a), Lp(kp(jp()) ? Yo() : {}))
          , c = Math.max(Kp("gb", a), Lp(kp(jp()) ? Yo("_gac_gb", !0) : {}));
        Uf(20) && (c = Math.max(c, Kp("ag", a)));
        return c > b
    };
    var cq, dq = !1;
    function eq() {
        dq = !0;
        cq = cq || {}
    }
    var fq = function(a) {
        dq || eq();
        return cq[a]
    };
    var gq = function(a, b, c) {
        this.target = a;
        this.eventName = b;
        this.o = c;
        this.h = {};
        this.metadata = nb(c.eventMetadata || {});
        this.isAborted = !1
    };
    gq.prototype.copyToHitData = function(a, b, c) {
        var d = V(this.o, a);
        void 0 === d && (d = b);
        if (void 0 !== d && void 0 !== c && k(d) && R(50))
            try {
                d = c(d)
            } catch (e) {}
        void 0 !== d && (this.h[a] = d)
    }
    ;
    var hq = function(a, b, c) {
        var d = fq(a.target.ba);
        return d && d.hasOwnProperty(b) ? d[b] : c
    };
    var iq = function() {
        si.dedupe_gclid || (si.dedupe_gclid = "" + go());
        return si.dedupe_gclid
    };
    var jq = /^(www\.)?google(\.com?)?(\.[a-z]{2}t?)?$/
      , kq = /^www.googleadservices.com$/
      , mq = function(a) {
        a || (a = lq());
        return a.Cn ? !1 : a.lm || a.mm || a.om || a.Ah || a.Rf || a.Ul || a.bm ? !0 : !1
    }
      , lq = function() {
        var a = {}
          , b = zo(!0);
        a.Cn = !!b._up;
        var c = wp();
        a.lm = void 0 !== c.aw;
        a.mm = void 0 !== c.dc;
        a.om = void 0 !== c.wbraid;
        var d = vj(z.location.href)
          , e = rj(d, "query", !1, void 0, "gad");
        a.Ah = void 0 !== e;
        if (!a.Ah) {
            var f = d.hash.replace("#", "")
              , g = oj(f, "gad", !1);
            a.Ah = void 0 !== g
        }
        a.Rf = void 0;
        if (R(55)) {
            var h = rj(d, "query", !1, void 0, "gad_source");
            a.Rf = h;
            if (void 0 === a.Rf) {
                var m = d.hash.replace("#", "")
                  , n = oj(m, "gad_source", !1);
                a.Rf = n
            }
        }
        var p = C.referrer ? rj(vj(C.referrer), "host") : "";
        a.bm = jq.test(p);
        a.Ul = kq.test(p);
        return a
    };
    var nq = RegExp("^UA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*(?:%3BUA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*)*$")
      , oq = /^~?[\w-]+(?:\.~?[\w-]+)*$/
      , pq = /^\d+\.fls\.doubleclick\.net$/
      , qq = /;gac=([^;?]+)/
      , rq = /;gacgb=([^;?]+)/
      , sq = /;gclaw=([^;?]+)/
      , tq = /;gclgb=([^;?]+)/;
    function uq(a, b) {
        if (pq.test(C.location.host)) {
            var c = C.location.href.match(b);
            return c && 2 == c.length && c[1].match(nq) ? decodeURIComponent(c[1]) : ""
        }
        var d = [], e;
        for (e in a) {
            for (var f = [], g = a[e], h = 0; h < g.length; h++)
                f.push(g[h].ia);
            d.push(e + ":" + f.join(","))
        }
        return 0 < d.length ? d.join(";") : ""
    }
    var vq = function(a, b, c) {
        var d = kp(jp()) ? Yo("_gac_gb", !0) : {}, e = [], f = !1, g;
        for (g in d) {
            var h = Jp("_gac_gb_" + g, a, b, c);
            f = f || 0 !== h.length && h.some(function(m) {
                return 1 === m
            });
            e.push(g + ":" + h.join(","))
        }
        return {
            Tl: f ? e.join(";") : "",
            Sl: uq(d, rq)
        }
    };
    function wq(a, b, c) {
        if (pq.test(C.location.host)) {
            var d = C.location.href.match(c);
            if (d && 2 == d.length && d[1].match(oq))
                return [{
                    ia: d[1]
                }]
        } else
            return mp((a || "_gcl") + b);
        return []
    }
    var xq = function(a) {
        return wq(a, "_aw", sq).map(function(b) {
            return b.ia
        }).join(".")
    }
      , yq = function(a) {
        return wq(a, "_gb", tq).map(function(b) {
            return b.ia
        }).join(".")
    }
      , zq = function(a) {
        return pq.test(C.location.host) ? !(sq.test(C.location.href) || qq.test(C.location.href)) : Mp(a)
    }
      , Aq = function(a, b) {
        var c = Jp((b && b.prefix || "_gcl") + "_gb", a, b);
        return 0 === c.length || c.every(function(d) {
            return 0 === d
        }) ? "" : c.join(".")
    };
    var Bq = function() {
        if (Ea(z.__uspapi)) {
            var a = "";
            try {
                z.__uspapi("getUSPData", 1, function(b, c) {
                    if (c && b) {
                        var d = b.uspString;
                        d && RegExp("^[\\da-zA-Z-]{1,20}$").test(d) && (a = d)
                    }
                })
            } catch (b) {}
            return a
        }
    };
    function Jq(a) {
        var b = V(a.o, N.g.Eb)
          , c = V(a.o, N.g.Tb);
        b && !c ? (a.eventName !== N.g.da && a.eventName !== N.g.Cd && M(131),
        a.isAborted = !0) : !b && c && (M(132),
        a.isAborted = !0)
    }
    function Kq(a) {
        var b = tl(N.g.J) ? si.pscdl : "denied";
        a.h[N.g.qf] = b
    }
    ;var Sq = function(a, b, c, d) {
        var e = Jc(), f;
        if (1 === e)
            a: {
                var g = Ei;
                g = g.toLowerCase();
                for (var h = "https://" + g, m = "http://" + g, n = 1, p = C.getElementsByTagName("script"), q = 0; q < p.length && 100 > q; q++) {
                    var r = p[q].src;
                    if (r) {
                        r = r.toLowerCase();
                        if (0 === r.indexOf(m)) {
                            f = 3;
                            break a
                        }
                        1 === n && 0 === r.indexOf(h) && (n = 2)
                    }
                }
                f = n
            }
        else
            f = e;
        return (2 === f || d || "http:" != z.location.protocol ? a : b) + c
    };
    var Tq = function(a, b) {
        R(5) && (a.dma = Hn(),
        In() && (a.dmaCps = Gn()),
        pn(b) ? a.npa = "0" : a.npa = "1")
    }
      , Vq = function(a, b, c) {
        if (z[a.functionName])
            return b.Oh && H(b.Oh),
            z[a.functionName];
        var d = Uq();
        z[a.functionName] = d;
        if (a.Mf)
            for (var e = 0; e < a.Mf.length; e++)
                z[a.Mf[e]] = z[a.Mf[e]] || Uq();
        a.Tf && void 0 === z[a.Tf] && (z[a.Tf] = c);
        Ic(Sq("https://", "http://", a.bi), b.Oh, b.Tm);
        return d
    }
      , Uq = function() {
        var a = function() {
            a.q = a.q || [];
            a.q.push(arguments)
        };
        return a
    }
      , Wq = {
        functionName: "_googWcmImpl",
        Tf: "_googWcmAk",
        bi: "www.gstatic.com/wcm/loader.js"
    }
      , Xq = {
        functionName: "_gaPhoneImpl",
        Tf: "ga_wpid",
        bi: "www.gstatic.com/gaphone/loader.js"
    }
      , Yq = {
        uk: "9",
        ql: "5"
    }
      , Zq = {
        functionName: "_googCallTrackingImpl",
        Mf: [Xq.functionName, Wq.functionName],
        bi: "www.gstatic.com/call-tracking/call-tracking_" + (Yq.uk || Yq.ql) + ".js"
    }
      , $q = {}
      , ar = function(a, b, c, d, e) {
        M(22);
        if (c) {
            e = e || {};
            var f = Vq(Wq, e, a)
              , g = {
                ak: a,
                cl: b
            };
            void 0 === e.Mb && (g.autoreplace = c);
            Tq(g, d);
            f(2, e.Mb, g, c, 0, Sa(), e.options)
        }
    }
      , br = function(a, b, c, d, e) {
        M(21);
        if (b && c) {
            e = e || {};
            for (var f = {
                countryNameCode: c,
                destinationNumber: b,
                retrievalTime: Sa()
            }, g = 0; g < a.length; g++) {
                var h = a[g];
                $q[h.id] || (h && "AW" === h.prefix && !f.adData && 2 <= h.O.length ? (f.adData = {
                    ak: h.O[0],
                    cl: h.O[1]
                },
                Tq(f.adData, d),
                $q[h.id] = !0) : h && "UA" === h.prefix && !f.gaData && (f.gaData = {
                    gaWpid: h.ba
                },
                $q[h.id] = !0))
            }
            (f.gaData || f.adData) && Vq(Zq, e)(e.Mb, f, e.options)
        }
    }
      , cr = function() {
        var a = !1;
        return a
    }
      , dr = function(a, b) {
        if (a)
            if (Kn()) {} else if (a = k(a) ? Cl(ck(a)) : Cl(ck(a.id))) {
                var c = void 0
                  , d = !1
                  , e = V(b, N.g.bj);
                if (e && Ha(e)) {
                    c = [];
                    for (var f = 0; f < e.length; f++) {
                        var g = Cl(e[f]);
                        g && (c.push(g),
                        (a.id === g.id || a.id === a.ba && a.ba === g.ba) && (d = !0))
                    }
                }
                if (!c || d) {
                    var h = V(b, N.g.Pg), m;
                    if (h) {
                        Ha(h) ? m = h : m = [h];
                        var n = V(b, N.g.Ng)
                          , p = V(b, N.g.Og)
                          , q = V(b, N.g.Qg)
                          , r = V(b, N.g.aj)
                          , t = n || p
                          , u = 1;
                        "UA" !== a.prefix || c || (u = 5);
                        for (var v = 0; v < m.length; v++)
                            if (v < u)
                                if (c)
                                    br(c, m[v], r, b, {
                                        Mb: t,
                                        options: q
                                    });
                                else if ("AW" === a.prefix && a.O[1])
                                    cr() ? br([a], m[v], r || "US", b, {
                                        Mb: t,
                                        options: q
                                    }) : ar(a.O[0], a.O[1], m[v], b, {
                                        Mb: t,
                                        options: q
                                    });
                                else if ("UA" === a.prefix)
                                    if (cr())
                                        br([a], m[v], r || "US", b, {
                                            Mb: t
                                        });
                                    else {
                                        var w = a.ba
                                          , x = m[v]
                                          , y = {
                                            Mb: t
                                        };
                                        M(23);
                                        if (x) {
                                            y = y || {};
                                            var B = Vq(Xq, y, w)
                                              , A = {};
                                            void 0 !== y.Mb ? A.receiver = y.Mb : A.replace = x;
                                            A.ga_wpid = w;
                                            A.destination = x;
                                            B(2, Sa(), A)
                                        }
                                    }
                    }
                }
            }
    };
    function er(a) {
        return {
            getDestinationId: function() {
                return a.target.ba
            },
            getEventName: function() {
                return a.eventName
            },
            setEventName: function(b) {
                a.eventName = b
            },
            getHitData: function(b) {
                return a.h[b]
            },
            setHitData: function(b, c) {
                a.h[b] = c
            },
            setHitDataIfNotDefined: function(b, c) {
                void 0 === a.h[b] && (a.h[b] = c)
            },
            copyToHitData: function(b, c) {
                a.copyToHitData(b, c)
            },
            getMetadata: function(b) {
                return a.metadata[b]
            },
            setMetadata: function(b, c) {
                a.metadata[b] = c
            },
            isAborted: function() {
                return a.isAborted
            },
            abort: function() {
                a.isAborted = !0
            },
            getFromEventContext: function(b) {
                return V(a.o, b)
            },
            Pj: function() {
                return a
            },
            getHitKeys: function() {
                return Object.keys(a.h)
            }
        }
    }
    ;var mr = function() {
        var a = z.screen;
        return {
            width: a ? a.width : 0,
            height: a ? a.height : 0
        }
    }
      , nr = function(a) {
        if (C.hidden)
            return !0;
        var b = a.getBoundingClientRect();
        if (b.top == b.bottom || b.left == b.right || !z.getComputedStyle)
            return !0;
        var c = z.getComputedStyle(a, null);
        if ("hidden" === c.visibility)
            return !0;
        for (var d = a, e = c; d; ) {
            if ("none" === e.display)
                return !0;
            var f = e.opacity
              , g = e.filter;
            if (g) {
                var h = g.indexOf("opacity(");
                0 <= h && (g = g.substring(h + 8, g.indexOf(")", h)),
                "%" == g.charAt(g.length - 1) && (g = g.substring(0, g.length - 1)),
                f = Math.min(g, f))
            }
            if (void 0 !== f && 0 >= f)
                return !0;
            (d = d.parentElement) && (e = z.getComputedStyle(d, null))
        }
        return !1
    };
    var ms = {
        vl: Number('') || 500,
        Xk: Number('') || 5E3,
        pj: Number('20') || 10,
        Dk: Number('') || 5E3
    };
    function ns(a) {
        return a.performance && a.performance.now() || Date.now()
    }
    var os = function(a, b) {
        var c;
        return c
    };
    var ps = "https://" + ri.Bd
      , qs = ps + "/gtm/static/"
      , rs = Number('') || 5
      , ss = Number('') || 50
      , ts = ps
      , us = qs
      , vs = !1
      , ws = 0
      , xs = Ja();
    function Is() {
        var a = !1;
        return a
    }
    function Js(a) {
        var b = Math.round(Ta());
    }
    function Ks(a, b, c) {}
    function Fs(a, b, c, d) {}
    function zs(a, b, c, d, e) {}
    function Ls(a, b, c, d) {}
    function Ms(a, b, c, d) {}
    function Ns(a) {
        var b = {}
          , c = ["tv.1"]
          , d = 0;
        var u = c.join("~");
        return {
            U: b,
            Xf: u
        }
    }
    var Os = void 0;
    function Ps(a) {
        var b = [];
        var c = a.zb;
        void 0 !== Os && (b.push(["ual", Math.floor(Os)]),
        c && (Os = void 0));
        return b
    }
    ;var Qs = function(a) {
        for (var b = [], c = 0, d = 0; d < a.length; d++) {
            var e = a.charCodeAt(d);
            128 > e ? b[c++] = e : (2048 > e ? b[c++] = e >> 6 | 192 : (55296 == (e & 64512) && d + 1 < a.length && 56320 == (a.charCodeAt(d + 1) & 64512) ? (e = 65536 + ((e & 1023) << 10) + (a.charCodeAt(++d) & 1023),
            b[c++] = e >> 18 | 240,
            b[c++] = e >> 12 & 63 | 128) : b[c++] = e >> 12 | 224,
            b[c++] = e >> 6 & 63 | 128),
            b[c++] = e & 63 | 128)
        }
        return b
    };
    $b();
    Bm() || Xb("iPod");
    Xb("iPad");
    !Xb("Android") || ac() || $b() || Zb() || Xb("Silk");
    ac();
    !Xb("Safari") || ac() || (Yb() ? 0 : Xb("Coast")) || Zb() || (Yb() ? 0 : Xb("Edge")) || (Yb() ? Wb("Microsoft Edge") : Xb("Edg/")) || (Yb() ? Wb("Opera") : Xb("OPR")) || $b() || Xb("Silk") || Xb("Android") || Cm();
    var Rs = {}
      , Ss = null
      , Ts = function(a) {
        for (var b = [], c = 0, d = 0; d < a.length; d++) {
            var e = a.charCodeAt(d);
            255 < e && (b[c++] = e & 255,
            e >>= 8);
            b[c++] = e
        }
        var f = 4;
        void 0 === f && (f = 0);
        if (!Ss) {
            Ss = {};
            for (var g = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), h = ["+/=", "+/", "-_=", "-_.", "-_"], m = 0; 5 > m; m++) {
                var n = g.concat(h[m].split(""));
                Rs[m] = n;
                for (var p = 0; p < n.length; p++) {
                    var q = n[p];
                    void 0 === Ss[q] && (Ss[q] = p)
                }
            }
        }
        for (var r = Rs[f], t = Array(Math.floor(b.length / 3)), u = r[64] || "", v = 0, w = 0; v < b.length - 2; v += 3) {
            var x = b[v]
              , y = b[v + 1]
              , B = b[v + 2]
              , A = r[x >> 2]
              , F = r[(x & 3) << 4 | y >> 4]
              , G = r[(y & 15) << 2 | B >> 6]
              , D = r[B & 63];
            t[w++] = "" + A + F + G + D
        }
        var E = 0
          , O = u;
        switch (b.length - v) {
        case 2:
            E = b[v + 1],
            O = r[(E & 15) << 2] || u;
        case 1:
            var P = b[v];
            t[w] = "" + r[P >> 2] + r[(P & 3) << 4 | E >> 4] + O + u
        }
        return t.join("")
    };
    Object.freeze(new function() {}
    );
    Object.freeze(new function() {}
    );
    var Us = "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");
    function Vs(a) {
        var b;
        return null != (b = a.google_tag_data) ? b : a.google_tag_data = {}
    }
    function Ws() {
        var a = z.google_tag_data, b;
        if (null != a && a.uach) {
            var c = a.uach
              , d = Object.assign({}, c);
            c.fullVersionList && (d.fullVersionList = c.fullVersionList.slice(0));
            b = d
        } else
            b = null;
        return b
    }
    function Xs() {
        var a, b;
        return null != (b = null == (a = z.google_tag_data) ? void 0 : a.uach_promise) ? b : null
    }
    function Ys(a) {
        var b, c;
        return "function" === typeof (null == (b = a.navigator) ? void 0 : null == (c = b.userAgentData) ? void 0 : c.getHighEntropyValues)
    }
    function Zs() {
        var a = z;
        if (!Ys(a))
            return null;
        var b = Vs(a);
        if (b.uach_promise)
            return b.uach_promise;
        var c = a.navigator.userAgentData.getHighEntropyValues(Us).then(function(d) {
            null != b.uach || (b.uach = d);
            return d
        });
        return b.uach_promise = c
    }
    ;function et() {
        return "attribution-reporting"
    }
    function ft(a) {
        var b;
        b = void 0 === b ? document : b;
        var c;
        return !(null == (c = b.featurePolicy) || !c.allowedFeatures().includes(a))
    }
    ;var gt = !1;
    function ht() {
        if (ft("join-ad-interest-group") && Ea(Bc.joinAdInterestGroup))
            return !0;
        gt || (Km('AymqwRC7u88Y4JPvfIF2F37QKylC04248hLCdJAsh8xgOfe/dVJPV3XS3wLFca1ZMVOtnBfVjaCMTVudWM//5g4AAAB7eyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjk1MTY3OTk5LCJpc1RoaXJkUGFydHkiOnRydWV9'),
        gt = !0);
        return ft("join-ad-interest-group") && Ea(Bc.joinAdInterestGroup)
    }
    function it(a, b) {
        var c = void 0;
        try {
            c = C.querySelector('iframe[data-tagging-id="' + b + '"]')
        } catch (e) {}
        if (c) {
            var d = Number(c.dataset.loadTime);
            if (d && Ta() - d < (void 0 == Tf[1] ? 6E4 : Tf[1])) {
                Ab("TAGGING", 9);
                return
            }
            try {
                c.parentNode.removeChild(c)
            } catch (e) {}
            c = void 0
        } else
            try {
                if (C.querySelectorAll('iframe[allow="join-ad-interest-group"][data-tagging-id*="-"]').length >= (void 0 == Tf[2] ? 50 : Tf[2])) {
                    Ab("TAGGING", 10);
                    return
                }
            } catch (e) {}
        Kc(a, void 0, {
            allow: "join-ad-interest-group"
        }, {
            taggingId: b,
            loadTime: Ta()
        }, c)
    }
    function jt() {
        return "https://td.doubleclick.net"
    }
    ;var du = {
        H: {
            ji: "ads_conversion_hit",
            Ad: "container_execute_start",
            mi: "container_setup_end",
            kg: "container_setup_start",
            ki: "container_blocking_end",
            li: "container_execute_end",
            ni: "container_yield_end",
            lg: "container_yield_start",
            ij: "event_execute_end",
            gj: "event_evaluation_end",
            Zg: "event_evaluation_start",
            jj: "event_setup_end",
            pe: "event_setup_start",
            kj: "ga4_conversion_hit",
            se: "page_load",
            Xn: "pageview",
            bc: "snippet_load",
            yj: "tag_callback_error",
            zj: "tag_callback_failure",
            Aj: "tag_callback_success",
            Bj: "tag_execute_end",
            od: "tag_execute_start"
        }
    };
    function eu() {
        function a(c, d) {
            var e = Bb(d);
            e && b.push([c, e])
        }
        var b = [];
        a("u", "GTM");
        a("ut", "TAGGING");
        a("h", "HEALTH");
        return b
    }
    ;var fu = !1;
    var Nu = function(a, b) {}
      , Ou = function(a, b) {}
      , Pu = function(a, b) {}
      , Qu = function(a, b) {}
      , Ru = function() {
        var a = {};
        return a
    }
      , Fu = function(a) {
        a = void 0 === a ? !0 : a;
        var b = {};
        return b
    }
      , Su = function() {}
      , Tu = function(a, b) {}
      , Uu = function(a, b, c) {}
      , Vu = function() {};
    var Wu = function(a, b) {
        var c = z, d, e = c.GooglebQhCsO;
        e || (e = {},
        c.GooglebQhCsO = e);
        d = e;
        if (d[a])
            return !1;
        d[a] = [];
        d[a][0] = b;
        return !0
    };
    var Xu = function(a, b, c) {
        var d = Fm(a, "fmt");
        if (b) {
            var e = Fm(a, "random")
              , f = Fm(a, "label") || "";
            if (!e)
                return !1;
            var g = Ts(decodeURIComponent(f.replace(/\+/g, " ")) + ":" + decodeURIComponent(e.replace(/\+/g, " ")));
            if (!Wu(g, b))
                return !1
        }
        d && 4 != d && (a = Hm(a, "rfmt", d));
        var h = Hm(a, "fmt", 4);
        Ic(h, function() {
            z.google_noFurtherRedirects && b && b.call && (z.google_noFurtherRedirects = null,
            b())
        }, void 0, c, C.getElementsByTagName("script")[0].parentElement || void 0);
        return !0
    };
    var nv = function() {
        this.h = {}
    }
      , ov = function(a, b, c) {
        null != c && (a.h[b] = c)
    }
      , pv = function(a) {
        return Object.keys(a.h).map(function(b) {
            return encodeURIComponent(b) + "=" + encodeURIComponent(a.h[b])
        }).join("&")
    }
      , rv = function(a, b, c, d) {};
    function tv(a, b) {
        if (data.entities && data.entities[a])
            return data.entities[a][b]
    }
    ;var vv = function(a, b, c) {
        c = void 0 === c ? !1 : c;
        uv().addRestriction(0, a, b, c)
    }
      , wv = function(a, b, c) {
        c = void 0 === c ? !1 : c;
        uv().addRestriction(1, a, b, c)
    }
      , xv = function() {
        var a = Xj();
        return uv().getRestrictions(1, a)
    }
      , yv = function() {
        this.h = {};
        this.s = {}
    }
      , zv = function(a, b) {
        var c = a.h[b];
        c || (c = {
            _entity: {
                internal: [],
                external: []
            },
            _event: {
                internal: [],
                external: []
            }
        },
        a.h[b] = c);
        return c
    };
    yv.prototype.addRestriction = function(a, b, c, d) {
        d = void 0 === d ? !1 : d;
        if (!d || !this.s[b]) {
            var e = zv(this, b);
            0 === a ? d ? e._entity.external.push(c) : e._entity.internal.push(c) : 1 === a && (d ? e._event.external.push(c) : e._event.internal.push(c))
        }
    }
    ;
    yv.prototype.getRestrictions = function(a, b) {
        var c = zv(this, b);
        if (0 === a) {
            var d, e;
            return [].concat(ka((null == c ? void 0 : null == (d = c._entity) ? void 0 : d.internal) || []), ka((null == c ? void 0 : null == (e = c._entity) ? void 0 : e.external) || []))
        }
        if (1 === a) {
            var f, g;
            return [].concat(ka((null == c ? void 0 : null == (f = c._event) ? void 0 : f.internal) || []), ka((null == c ? void 0 : null == (g = c._event) ? void 0 : g.external) || []))
        }
        return []
    }
    ;
    yv.prototype.getExternalRestrictions = function(a, b) {
        var c = zv(this, b), d, e;
        return 0 === a ? (null == c ? void 0 : null == (d = c._entity) ? void 0 : d.external) || [] : (null == c ? void 0 : null == (e = c._event) ? void 0 : e.external) || []
    }
    ;
    yv.prototype.removeExternalRestrictions = function(a) {
        var b = zv(this, a);
        b._event && (b._event.external = []);
        b._entity && (b._entity.external = []);
        this.s[a] = !0
    }
    ;
    function uv() {
        var a = si.r;
        a || (a = new yv,
        si.r = a);
        return a
    }
    ;var Av = new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/)
      , Bv = {
        cl: ["ecl"],
        customPixels: ["nonGooglePixels"],
        ecl: ["cl"],
        ehl: ["hl"],
        gaawc: ["googtag"],
        hl: ["ehl"],
        html: ["customScripts", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
        customScripts: ["html", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
        nonGooglePixels: [],
        nonGoogleScripts: ["nonGooglePixels"],
        nonGoogleIframes: ["nonGooglePixels"]
    }
      , Cv = {
        cl: ["ecl"],
        customPixels: ["customScripts", "html"],
        ecl: ["cl"],
        ehl: ["hl"],
        gaawc: ["googtag"],
        hl: ["ehl"],
        html: ["customScripts"],
        customScripts: ["html"],
        nonGooglePixels: ["customPixels", "customScripts", "html", "nonGoogleScripts", "nonGoogleIframes"],
        nonGoogleScripts: ["customScripts", "html"],
        nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"]
    }
      , Dv = "google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ")
      , Gv = function(a) {
        var b = Si("gtm.allowlist") || Si("gtm.whitelist");
        b && M(9);
        yi && (b = ["google", "gtagfl", "lcl", "zone"]);
        Ev() && (yi ? M(116) : (M(117),
        Fv && (b = [],
        window.console && window.console.log && window.console.log("GTM blocked. See go/13687728."))));
        var c = b && Xa(Qa(b), Bv)
          , d = Si("gtm.blocklist") || Si("gtm.blacklist");
        d || (d = Si("tagTypeBlacklist")) && M(3);
        d ? M(8) : d = [];
        Ev() && (d = Qa(d),
        d.push("nonGooglePixels", "nonGoogleScripts", "sandboxedScripts"));
        0 <= Qa(d).indexOf("google") && M(2);
        var e = d && Xa(Qa(d), Cv)
          , f = {};
        return function(g) {
            var h = g && g[Oe.ma];
            if (!h || "string" != typeof h)
                return !0;
            h = h.replace(/^_*/, "");
            if (void 0 !== f[h])
                return f[h];
            var m = Ii[h] || []
              , n = a(h, m);
            if (b) {
                var p;
                if (p = n)
                    a: {
                        if (0 > c.indexOf(h))
                            if (m && 0 < m.length)
                                for (var q = 0; q < m.length; q++) {
                                    if (0 > c.indexOf(m[q])) {
                                        M(11);
                                        p = !1;
                                        break a
                                    }
                                }
                            else {
                                p = !1;
                                break a
                            }
                        p = !0
                    }
                n = p
            }
            var r = !1;
            if (d) {
                var t = 0 <= e.indexOf(h);
                if (t)
                    r = t;
                else {
                    var u = La(e, m || []);
                    u && M(10);
                    r = u
                }
            }
            var v = !n || r;
            v || !(0 <= m.indexOf("sandboxedScripts")) || c && -1 !== c.indexOf("sandboxedScripts") || (v = La(e, Dv));
            return f[h] = v
        }
    }
      , Fv = !1;
    Fv = !0;
    var Ev = function() {
        return Av.test(z.location && z.location.hostname)
    }
      , Hv = function() {
        Pj && vv(Xj(), function(a) {
            var b = yf(a.entityId), c;
            if (Df(b)) {
                var d = b[Oe.ma];
                if (!d)
                    throw "Error: No function name given for function call.";
                var e = qf[d];
                c = !!e && !!e.runInSiloedMode
            } else
                c = !!tv(b[Oe.ma], 4);
            return c
        })
    };
    var Jv = function(a, b, c, d, e) {
        if (!Iv()) {
            var f = d.siloed ? Rj(a) : a;
            if (!gk(f)) {
                var g = "?id=" + encodeURIComponent(a) + "&l=" + ri.ja
                  , h = 0 === a.indexOf("GTM-");
                h || (g += "&cx=c");
                R(60) && (g += "&gtm=" + Mn());
                var m = Gj();
                m && (g += "&sign=" + ri.Jf);
                var n = c ? "/gtag/js" : "/gtm.js"
                  , p = Fj() ? Ej(b, n + g) : void 0;
                if (!p) {
                    var q = ri.Bd + n;
                    m && Cc && h ? (q = Cc.replace(/^(?:https?:\/\/)?/i, "").split(/[?#]/)[0],
                    p = Sq("https://", "http://", q + g)) : p = Li.s ? Mi() + n + g : Sq("https://", "http://", q + g)
                }
                d.siloed && ik({
                    ctid: f,
                    isDestination: !1
                });
                var r = Zj();
                Lj().container[f] = {
                    state: 1,
                    context: d,
                    parent: r
                };
                Mj({
                    ctid: f,
                    isDestination: !1
                }, e);
                Ic(p)
            }
        }
    }
      , Kv = function(a, b, c, d) {
        if (!Iv()) {
            var e = c.siloed ? Rj(a) : a;
            if (!hk(e))
                if (!c.siloed && jk())
                    Lj().destination[e] = {
                        state: 0,
                        transportUrl: b,
                        context: c,
                        parent: Zj()
                    },
                    Mj({
                        ctid: e,
                        isDestination: !0
                    }, d),
                    M(91);
                else {
                    var f = "/gtag/destination?id=" + encodeURIComponent(a) + "&l=" + ri.ja + "&cx=c";
                    R(60) && (f += "&gtm=" + Mn());
                    Gj() && (f += "&sign=" + ri.Jf);
                    var g = Fj() ? Ej(b, f) : void 0;
                    g || (g = Li.s ? Mi() + f : Sq("https://", "http://", ri.Bd + f));
                    c.siloed && ik({
                        ctid: e,
                        isDestination: !0
                    });
                    Lj().destination[e] = {
                        state: 1,
                        context: c,
                        parent: Zj()
                    };
                    Mj({
                        ctid: e,
                        isDestination: !0
                    }, d);
                    Ic(g)
                }
        }
    };
    function Iv() {
        if (Kn()) {
            return !0
        }
        return !1
    }
    ;var Lv = !1
      , Mv = 0
      , Nv = [];
    function Ov(a) {
        if (!Lv) {
            var b = C.createEventObject
              , c = "complete" == C.readyState
              , d = "interactive" == C.readyState;
            if (!a || "readystatechange" != a.type || c || !b && d) {
                Lv = !0;
                for (var e = 0; e < Nv.length; e++)
                    H(Nv[e])
            }
            Nv.push = function() {
                for (var f = 0; f < arguments.length; f++)
                    H(arguments[f]);
                return 0
            }
        }
    }
    function Pv() {
        if (!Lv && 140 > Mv) {
            Mv++;
            try {
                C.documentElement.doScroll("left"),
                Ov()
            } catch (a) {
                z.setTimeout(Pv, 50)
            }
        }
    }
    var Qv = function(a) {
        Lv ? a() : Nv.push(a)
    };
    var Sv = function(a, b, c) {
        return {
            entityType: a,
            indexInOriginContainer: b,
            nameInOriginContainer: c,
            originContainerId: Wj()
        }
    };
    var Uv = function(a, b) {
        this.h = !1;
        this.F = [];
        this.M = {
            tags: []
        };
        this.W = !1;
        this.s = this.C = 0;
        Tv(this, a, b)
    }
      , Vv = function(a, b, c, d) {
        if (vi.hasOwnProperty(b) || "__zone" === b)
            return -1;
        var e = {};
        lb(d) && (e = nb(d, e));
        e.id = c;
        e.status = "timeout";
        return a.M.tags.push(e) - 1
    }
      , Wv = function(a, b, c, d) {
        var e = a.M.tags[b];
        e && (e.status = c,
        e.executionTime = d)
    }
      , Xv = function(a) {
        if (!a.h) {
            for (var b = a.F, c = 0; c < b.length; c++)
                b[c]();
            a.h = !0;
            a.F.length = 0
        }
    }
      , Tv = function(a, b, c) {
        void 0 !== b && a.Lf(b);
        c && z.setTimeout(function() {
            return Xv(a)
        }, Number(c))
    };
    Uv.prototype.Lf = function(a) {
        var b = this
          , c = Va(function() {
            return H(function() {
                a(Wj(), b.M)
            })
        });
        this.h ? c() : this.F.push(c)
    }
    ;
    var Yv = function(a) {
        a.C++;
        return Va(function() {
            a.s++;
            a.W && a.s >= a.C && Xv(a)
        })
    }
      , Zv = function(a) {
        a.W = !0;
        a.s >= a.C && Xv(a)
    };
    var $v = {}
      , bw = function() {
        return z[aw()]
    }
      , cw = !1;
    var dw = function(a) {
        z.GoogleAnalyticsObject || (z.GoogleAnalyticsObject = a || "ga");
        var b = z.GoogleAnalyticsObject;
        if (z[b])
            z.hasOwnProperty(b);
        else {
            var c = function() {
                c.q = c.q || [];
                c.q.push(arguments)
            };
            c.l = Number(Sa());
            z[b] = c
        }
        return z[b]
    }
      , ew = function(a) {
        if (fl()) {
            var b = bw();
            b(a + "require", "linker");
            b(a + "linker:passthrough", !0)
        }
    };
    function aw() {
        return z.GoogleAnalyticsObject || "ga"
    }
    var fw = function(a) {}
      , gw = function(a, b) {
        return function() {
            var c = bw()
              , d = c && c.getByName && c.getByName(a);
            if (d) {
                var e = d.get("sendHitTask");
                d.set("sendHitTask", function(f) {
                    var g = f.get("hitPayload")
                      , h = f.get("hitCallback")
                      , m = 0 > g.indexOf("&tid=" + b);
                    m && (f.set("hitPayload", g.replace(/&tid=UA-[0-9]+-[0-9]+/, "&tid=" + b), !0),
                    f.set("hitCallback", void 0, !0));
                    e(f);
                    m && (f.set("hitPayload", g, !0),
                    f.set("hitCallback", h, !0),
                    f.set("_x_19", void 0, !0),
                    e(f))
                })
            }
        }
    };
    var lw = ["es", "1"]
      , mw = {}
      , nw = {};
    function ow(a, b) {
        if (tk) {
            var c;
            c = b.match(/^(gtm|gtag)\./) ? encodeURIComponent(b) : "*";
            mw[a] = [["e", c], ["eid", a]];
            Ek(a)
        }
    }
    function pw(a) {
        var b = a.eventId
          , c = a.zb;
        if (!mw[b])
            return [];
        var d = [];
        nw[b] || d.push(lw);
        d.push.apply(d, ka(mw[b]));
        c && (nw[b] = !0);
        return d
    }
    ;var qw = {}
      , rw = {}
      , sw = {};
    function tw(a, b, c, d) {
        tk && R(70) && ((void 0 === d ? 0 : d) ? (sw[b] = sw[b] || 0,
        ++sw[b]) : void 0 !== c ? (rw[a] = rw[a] || {},
        rw[a][b] = Math.round(c)) : (qw[a] = qw[a] || {},
        qw[a][b] = (qw[a][b] || 0) + 1))
    }
    function uw(a) {
        var b = a.eventId, c = a.zb, d = qw[b] || {}, e = [], f;
        for (f in d)
            d.hasOwnProperty(f) && e.push("" + f + d[f]);
        c && delete qw[b];
        return e.length ? [["md", e.join(".")]] : []
    }
    function vw(a) {
        var b = a.eventId, c = a.zb, d = rw[b] || {}, e = [], f;
        for (f in d)
            d.hasOwnProperty(f) && e.push("" + f + d[f]);
        c && delete rw[b];
        return e.length ? [["mtd", e.join(".")]] : []
    }
    function ww() {
        for (var a = [], b = fa(Object.keys(sw)), c = b.next(); !c.done; c = b.next()) {
            var d = c.value;
            a.push("" + d + sw[d])
        }
        return a.length ? [["mec", a.join(".")]] : []
    }
    ;var xw = {}
      , yw = {};
    function zw(a, b, c) {
        if (tk && b) {
            var d = Jj(b);
            xw[a] = xw[a] || [];
            xw[a].push(c + d);
            var e = (Df(b) ? "1" : "2") + d;
            yw[a] = yw[a] || [];
            yw[a].push(e);
            Ek(a)
        }
    }
    function Aw(a) {
        var b = a.eventId
          , c = a.zb
          , d = []
          , e = xw[b] || [];
        e.length && d.push(["tr", e.join(".")]);
        var f = yw[b] || [];
        f.length && d.push(["ti", f.join(".")]);
        c && (delete xw[b],
        delete yw[b]);
        return d
    }
    ;function Bw(a, b, c, d) {
        var e = of[a]
          , f = Cw(a, b, c, d);
        if (!f)
            return null;
        var g = Af(e[Oe.xj], c, []);
        if (g && g.length) {
            var h = g[0];
            f = Bw(h.index, {
                onSuccess: f,
                onFailure: 1 === h.Mj ? b.terminate : f,
                terminate: b.terminate
            }, c, d)
        }
        return f
    }
    function Cw(a, b, c, d) {
        function e() {
            if (f[Oe.fl])
                h();
            else {
                var w = Bf(f, c, [])
                  , x = w[Oe.vk];
                if (null != x)
                    for (var y = 0; y < x.length; y++)
                        if (!tl(x[y])) {
                            h();
                            return
                        }
                var B = Vv(c.fc, String(f[Oe.ma]), Number(f[Oe.we]), w[Oe.il])
                  , A = !1;
                w.vtp_gtmOnSuccess = function() {
                    if (!A) {
                        A = !0;
                        var D = Ta() - G;
                        zw(c.id, of[a], "5");
                        Wv(c.fc, B, "success", D);
                        R(61) && Uu(c, f, du.H.Aj);
                        g()
                    }
                }
                ;
                w.vtp_gtmOnFailure = function() {
                    if (!A) {
                        A = !0;
                        var D = Ta() - G;
                        zw(c.id, of[a], "6");
                        Wv(c.fc, B, "failure", D);
                        R(61) && Uu(c, f, du.H.zj);
                        h()
                    }
                }
                ;
                w.vtp_gtmTagId = f.tag_id;
                w.vtp_gtmEventId = c.id;
                c.priorityId && (w.vtp_gtmPriorityId = c.priorityId);
                zw(c.id, f, "1");
                var F = function() {
                    dj(3);
                    var D = Ta() - G;
                    zw(c.id, f, "7");
                    Wv(c.fc, B, "exception", D);
                    R(61) && Uu(c, f, du.H.yj);
                    A || (A = !0,
                    h())
                };
                R(61) && Tu(c, f);
                var G = Ta();
                try {
                    zf(w, {
                        event: c,
                        index: a,
                        type: 1
                    })
                } catch (D) {
                    F(D)
                }
                R(61) && Uu(c, f, du.H.Bj)
            }
        }
        var f = of[a]
          , g = b.onSuccess
          , h = b.onFailure
          , m = b.terminate;
        if (c.isBlocked(f))
            return null;
        var n = Af(f[Oe.Cj], c, []);
        if (n && n.length) {
            var p = n[0]
              , q = Bw(p.index, {
                onSuccess: g,
                onFailure: h,
                terminate: m
            }, c, d);
            if (!q)
                return null;
            g = q;
            h = 2 === p.Mj ? m : q
        }
        if (f[Oe.sj] || f[Oe.kl]) {
            var r = f[Oe.sj] ? pf : c.vn
              , t = g
              , u = h;
            if (!r[a]) {
                e = Va(e);
                var v = Dw(a, r, e);
                g = v.onSuccess;
                h = v.onFailure
            }
            return function() {
                r[a](t, u)
            }
        }
        return e
    }
    function Dw(a, b, c) {
        var d = []
          , e = [];
        b[a] = Ew(d, e, c);
        return {
            onSuccess: function() {
                b[a] = Fw;
                for (var f = 0; f < d.length; f++)
                    d[f]()
            },
            onFailure: function() {
                b[a] = Gw;
                for (var f = 0; f < e.length; f++)
                    e[f]()
            }
        }
    }
    function Ew(a, b, c) {
        return function(d, e) {
            a.push(d);
            b.push(e);
            c()
        }
    }
    function Fw(a) {
        a()
    }
    function Gw(a, b) {
        b()
    }
    ;var Iw = function(a, b) {
        return 1 === arguments.length ? Hw("set", a) : Hw("set", a, b)
    }
      , ex = function(a, b) {
        return 1 === arguments.length ? Hw("config", a) : Hw("config", a, b)
    }
      , lx = function(a, b, c) {
        c = c || {};
        c[N.g.Wb] = a;
        return Hw("event", b, c)
    };
    function Hw(a) {
        return arguments
    }
    var mx = function() {
        this.h = [];
        this.s = []
    };
    mx.prototype.enqueue = function(a, b, c) {
        var d = this.h.length + 1;
        a["gtm.uniqueEventId"] = b;
        a["gtm.priorityId"] = d;
        c.eventId = b;
        c.fromContainerExecution = !0;
        c.priorityId = d;
        var e = {
            message: a,
            notBeforeEventId: b,
            priorityId: d,
            messageContext: c
        };
        this.h.push(e);
        for (var f = 0; f < this.s.length; f++)
            try {
                this.s[f](e)
            } catch (g) {}
    }
    ;
    mx.prototype.listen = function(a) {
        this.s.push(a)
    }
    ;
    mx.prototype.get = function() {
        for (var a = {}, b = 0; b < this.h.length; b++) {
            var c = this.h[b]
              , d = a[c.notBeforeEventId];
            d || (d = [],
            a[c.notBeforeEventId] = d);
            d.push(c)
        }
        return a
    }
    ;
    mx.prototype.prune = function(a) {
        for (var b = [], c = [], d = 0; d < this.h.length; d++) {
            var e = this.h[d];
            e.notBeforeEventId === a ? b.push(e) : c.push(e)
        }
        this.h = c;
        return b
    }
    ;
    var ox = function(a, b, c) {
        c.eventMetadata = c.eventMetadata || {};
        c.eventMetadata.source_canonical_id = Vf.canonicalContainerId;
        nx().enqueue(a, b, c)
    }
      , qx = function() {
        var a = px;
        nx().listen(a)
    };
    function nx() {
        var a = si.mb;
        a || (a = new mx,
        si.mb = a);
        return a
    }
    var yx = function(a) {
        var b = si.zones;
        return b ? b.getIsAllowedFn(Sj(), a) : function() {
            return !0
        }
    }
      , zx = function() {
        wv(Xj(), function(a) {
            var b = a.originalEventData["gtm.uniqueEventId"]
              , c = si.zones;
            return c ? c.isActive(Sj(), b) : !0
        });
        R(86) && vv(Xj(), function(a) {
            var b = a.entityId
              , c = a.securityGroups;
            return yx(Number(a.originalEventData["gtm.uniqueEventId"]))(b, c)
        })
    };
    var Cx = function(a, b) {
        for (var c = [], d = 0; d < of.length; d++)
            if (a[d]) {
                var e = of[d];
                var f = Yv(b.fc);
                try {
                    var g = Bw(d, {
                        onSuccess: f,
                        onFailure: f,
                        terminate: f
                    }, b, d);
                    if (g) {
                        var h = e[Oe.ma];
                        if (!h)
                            throw "Error: No function name given for function call.";
                        var m = qf[h];
                        c.push({
                            kk: d,
                            Yj: (m ? m.priorityOverride || 0 : 0) || tv(e[Oe.ma], 1) || 0,
                            execute: g
                        })
                    } else
                        Ax(d, b),
                        f()
                } catch (p) {
                    f()
                }
            }
        c.sort(Bx);
        for (var n = 0; n < c.length; n++)
            c[n].execute();
        return 0 < c.length
    };
    function Bx(a, b) {
        var c, d = b.Yj, e = a.Yj;
        c = d > e ? 1 : d < e ? -1 : 0;
        var f;
        if (0 !== c)
            f = c;
        else {
            var g = a.kk
              , h = b.kk;
            f = g > h ? 1 : g < h ? -1 : 0
        }
        return f
    }
    function Ax(a, b) {
        if (tk) {
            var c = function(d) {
                var e = b.isBlocked(of[d]) ? "3" : "4"
                  , f = Af(of[d][Oe.xj], b, []);
                f && f.length && c(f[0].index);
                zw(b.id, of[d], e);
                var g = Af(of[d][Oe.Cj], b, []);
                g && g.length && c(g[0].index)
            };
            c(a)
        }
    }
    var Fx = !1, Dx;
    var Lx = function(a) {
        var b = a["gtm.uniqueEventId"]
          , c = a["gtm.priorityId"]
          , d = a.event;
        if (R(61)) {}
        if ("gtm.js" === d) {
            if (Fx)
                return !1;
            Fx = !0
        }
        var e, f = !1, g = xv(), h = nb(a);
        if (g.every(function(u) {
            return u({
                originalEventData: h
            })
        }))
            e = yx(b);
        else {
            if ("gtm.js" !== d && "gtm.init" !== d && "gtm.init_consent" !== d)
                return !1;
            f = !0;
            e = yx(Number.MAX_SAFE_INTEGER)
        }
        ow(b, d);
        var m = a.eventCallback
          , n = a.eventTimeout
          , p = {
            id: b,
            priorityId: c,
            name: d,
            isBlocked: Hx(e, h, f),
            vn: [],
            logMacroError: function() {
                M(6);
                dj(0)
            },
            cachedModelValues: Ix(),
            fc: new Uv(function() {
                if (R(61)) {}
                m && m.apply(m, [].slice.call(arguments, 0))
            }
            ,n),
            originalEventData: h
        };
        R(70) && tk && (p.reportMacroDiscrepancy = tw);
        R(61) && Pu(p.id, p.name);
        var q = Lf(p);
        R(61) && Qu(p.id, p.name);
        f && (q = Jx(q));
        if (R(61)) {}
        var r = Cx(q, p)
          , t = !1;
        Zv(p.fc);
        "gtm.js" !== d && "gtm.sync" !== d || fw(Wj());
        return Kx(q, r) || t
    };
    function Ix() {
        var a = {};
        a.event = Xi("event", 1);
        a.ecommerce = Xi("ecommerce", 1);
        a.gtm = Xi("gtm");
        a.eventModel = Xi("eventModel");
        return a
    }
    function Hx(a, b, c) {
        var d = Gv(a);
        return function(e) {
            if (d(e))
                return !0;
            var f = e && e[Oe.ma];
            if (!f || "string" != typeof f)
                return !0;
            f = f.replace(/^_*/, "");
            var g, h = Xj();
            g = uv().getRestrictions(0, h);
            var m = b;
            c && (m = nb(b),
            m["gtm.uniqueEventId"] = Number.MAX_SAFE_INTEGER);
            for (var n = Ii[f] || [], p = fa(g), q = p.next(); !q.done; q = p.next()) {
                var r = q.value;
                try {
                    if (!r({
                        entityId: f,
                        securityGroups: n,
                        originalEventData: m
                    }))
                        return !0
                } catch (t) {
                    return !0
                }
            }
            return !1
        }
    }
    function Jx(a) {
        for (var b = [], c = 0; c < a.length; c++)
            if (a[c]) {
                var d = String(of[c][Oe.ma]);
                if (ui[d] || void 0 !== of[c][Oe.ml] || tv(d, 2))
                    b[c] = !0
            }
        return b
    }
    function Kx(a, b) {
        if (!b)
            return b;
        for (var c = 0; c < a.length; c++)
            if (a[c] && of[c] && !vi[String(of[c][Oe.ma])])
                return !0;
        return !1
    }
    var Of;
    var Mx = {}
      , Nx = {}
      , Ox = function(a, b) {
        for (var c = [], d = [], e = {}, f = 0; f < a.length; e = {
            Sh: void 0,
            zh: void 0
        },
        f++) {
            var g = a[f];
            if (0 <= g.indexOf("-")) {
                if (e.Sh = Cl(g, b),
                e.Sh) {
                    var h = Uj();
                    Ia(h, function(r) {
                        return function(t) {
                            return r.Sh.ba === t
                        }
                    }(e)) ? c.push(g) : d.push(g)
                }
            } else {
                var m = Mx[g] || [];
                e.zh = {};
                m.forEach(function(r) {
                    return function(t) {
                        return r.zh[t] = !0
                    }
                }(e));
                for (var n = Sj(), p = 0; p < n.length; p++)
                    if (e.zh[n[p]]) {
                        c = c.concat(Uj());
                        break
                    }
                var q = Nx[g] || [];
                q.length && (c = c.concat(q))
            }
        }
        return {
            Lm: c,
            Pm: d
        }
    }
      , Px = function(a) {
        l(Mx, function(b, c) {
            var d = c.indexOf(a);
            0 <= d && c.splice(d, 1)
        })
    }
      , Qx = function(a) {
        l(Nx, function(b, c) {
            var d = c.indexOf(a);
            0 <= d && c.splice(d, 1)
        })
    };
    var Rx = "HA GF G UA AW DC MC".split(" ")
      , Sx = !1
      , Tx = !1
      , Ux = !1
      , Vx = !1;
    function Wx(a, b) {
        a.hasOwnProperty("gtm.uniqueEventId") || Object.defineProperty(a, "gtm.uniqueEventId", {
            value: Ji()
        });
        b.eventId = a["gtm.uniqueEventId"];
        b.priorityId = a["gtm.priorityId"];
        return {
            eventId: b.eventId,
            priorityId: b.priorityId
        }
    }
    var Xx = void 0
      , Yx = void 0;
    function Zx(a, b, c) {
        var d = nb(a);
        d.eventId = void 0;
        d.inheritParentConfig = void 0;
        Object.keys(b).some(function(f) {
            return void 0 !== b[f]
        }) && M(136);
        var e = nb(b);
        nb(c, e);
        ox(ex(Sj()[0], e), a.eventId, d)
    }
    function $x(a) {
        for (var b = fa([N.g.jd, N.g.Ib]), c = b.next(); !c.done; c = b.next()) {
            var d = c.value
              , e = a && a[d] || km.C[d];
            if (e)
                return e
        }
    }
    var ay = [N.g.jd, N.g.Ib, N.g.xc, N.g.nb, N.g.ub, N.g.Ra, N.g.Ba, N.g.Oa, N.g.Ua, N.g.Rb]
      , by = {
        config: function(a, b) {
            var c = Wx(a, b);
            if (!(2 > a.length) && k(a[1])) {
                var d = {};
                if (2 < a.length) {
                    if (void 0 != a[2] && !lb(a[2]) || 3 < a.length)
                        return;
                    d = a[2]
                }
                var e = Cl(a[1], b.isGtmEvent);
                if (e) {
                    var f, g, h;
                    a: {
                        if (!Oj.qe) {
                            var m = Yj(Zj());
                            if (lk(m)) {
                                var n = m.parent
                                  , p = n.isDestination;
                                h = {
                                    Vm: Yj(n),
                                    Km: p
                                };
                                break a
                            }
                        }
                        h = void 0
                    }
                    var q = h;
                    q && (f = q.Vm,
                    g = q.Km);
                    ow(c.eventId, "gtag.config");
                    var r = e.ba
                      , t = e.id !== r;
                    if (t ? -1 === Uj().indexOf(r) : -1 === Sj().indexOf(r)) {
                        if (!b.inheritParentConfig && !d[N.g.Eb]) {
                            var u = $x(d);
                            if (t)
                                Kv(r, u, {
                                    source: 2,
                                    fromContainerExecution: b.fromContainerExecution
                                });
                            else if (void 0 !== f && -1 !== f.containers.indexOf(r)) {
                                var v = d;
                                Xx ? Zx(b, v, Xx) : Yx || (Yx = nb(v))
                            } else
                                Jv(r, u, !0, {
                                    source: 2,
                                    fromContainerExecution: b.fromContainerExecution
                                })
                        }
                    } else {
                        if (f && (M(128),
                        g && M(130),
                        b.inheritParentConfig)) {
                            var w;
                            var x = d;
                            Yx ? (Zx(b, Yx, x),
                            w = !1) : (!x[N.g.Xb] && xi && Xx || (Xx = nb(x)),
                            w = !0);
                            w && f.containers && f.containers.join(",");
                            return
                        }
                        var y = d;
                        if (R(35) && !Ux && (Ux = !0,
                        Tx))
                            for (var B = fa(ay), A = B.next(); !A.done; A = B.next())
                                if (y.hasOwnProperty(A.value)) {
                                    Kk("erc");
                                    break
                                }
                        if (xi && !t && !d[N.g.Xb]) {
                            var F = Vx;
                            Vx = !0;
                            if (F)
                                return
                        }
                        Sx || M(43);
                        if (!b.noTargetGroup)
                            if (t) {
                                Qx(e.id);
                                var G = e.id
                                  , D = d[N.g.Vd] || "default";
                                D = String(D).split(",");
                                for (var E = 0; E < D.length; E++) {
                                    var O = Nx[D[E]] || [];
                                    Nx[D[E]] = O;
                                    0 > O.indexOf(G) && O.push(G)
                                }
                            } else {
                                Px(e.id);
                                var P = e.id
                                  , T = d[N.g.Vd] || "default";
                                T = T.toString().split(",");
                                for (var Y = 0; Y < T.length; Y++) {
                                    var S = Mx[T[Y]] || [];
                                    Mx[T[Y]] = S;
                                    0 > S.indexOf(P) && S.push(P)
                                }
                            }
                        delete d[N.g.Vd];
                        var U = b.eventMetadata || {};
                        U.hasOwnProperty("is_external_event") || (U.is_external_event = !b.fromContainerExecution);
                        b.eventMetadata = U;
                        delete d[N.g.bd];
                        for (var ja = t ? [e.id] : Uj(), ha = 0; ha < ja.length; ha++) {
                            var ca = d
                              , Fa = ja[ha]
                              , ma = nb(b)
                              , Aa = Cl(Fa, ma.isGtmEvent);
                            Aa && km.push("config", [ca], Aa, ma)
                        }
                    }
                }
            }
        },
        consent: function(a, b) {
            if (3 === a.length) {
                M(39);
                var c = Wx(a, b)
                  , d = a[1]
                  , e = a[2];
                b.fromContainerExecution || (e[N.g.N] && M(139),
                e[N.g.xa] && M(140));
                "default" === d ? ql(e) : "update" === d ? rl(e, c) : "declare" === d && b.fromContainerExecution && pl(e)
            }
        },
        event: function(a, b) {
            var c = a[1];
            if (!(2 > a.length) && k(c)) {
                var d;
                if (2 < a.length) {
                    if (!lb(a[2]) && void 0 != a[2] || 3 < a.length)
                        return;
                    d = a[2]
                }
                var e = d
                  , f = {}
                  , g = (f.event = c,
                f);
                e && (g.eventModel = nb(e),
                e[N.g.bd] && (g.eventCallback = e[N.g.bd]),
                e[N.g.Sd] && (g.eventTimeout = e[N.g.Sd]));
                var h = Wx(a, b)
                  , m = h.eventId
                  , n = h.priorityId;
                g["gtm.uniqueEventId"] = m;
                n && (g["gtm.priorityId"] = n);
                if ("optimize.callback" === c)
                    return g.eventModel = g.eventModel || {},
                    g;
                var p;
                var q = d
                  , r = q && q[N.g.Wb];
                void 0 === r && (r = Si(N.g.Wb, 2),
                void 0 === r && (r = "default"));
                if (k(r) || Ha(r)) {
                    var t;
                    b.isGtmEvent ? t = k(r) ? [r] : r : t = r.toString().replace(/\s+/g, "").split(",");
                    var u = Ox(t, b.isGtmEvent)
                      , v = u.Lm
                      , w = u.Pm;
                    if (w.length)
                        for (var x = $x(q), y = 0; y < w.length; y++) {
                            var B = Cl(w[y], b.isGtmEvent);
                            B && Kv(B.ba, x, {
                                source: 3,
                                fromContainerExecution: b.fromContainerExecution
                            })
                        }
                    p = El(v, b.isGtmEvent)
                } else
                    p = void 0;
                var A = p;
                if (A) {
                    A.length && (Tx = !0);
                    ow(m, c);
                    for (var F = [], G = 0; G < A.length; G++) {
                        var D = A[G]
                          , E = nb(b);
                        if (-1 !== Rx.indexOf(ck(D.prefix))) {
                            var O = nb(d)
                              , P = E.eventMetadata || {};
                            P.hasOwnProperty("is_external_event") || (P.is_external_event = !E.fromContainerExecution);
                            E.eventMetadata = P;
                            delete O[N.g.bd];
                            mm(c, O, D.id, E)
                        }
                        F.push(D.id)
                    }
                    g.eventModel = g.eventModel || {};
                    0 < A.length ? g.eventModel[N.g.Wb] = F.join() : delete g.eventModel[N.g.Wb];
                    Sx || M(43);
                    void 0 === b.noGtmEvent && b.eventMetadata && b.eventMetadata.syn_or_mod && (b.noGtmEvent = !0);
                    g.eventModel[N.g.Tb] && (b.noGtmEvent = !0);
                    return b.noGtmEvent ? void 0 : g
                }
            }
        },
        get: function(a, b) {
            M(53);
            if (4 === a.length && k(a[1]) && k(a[2]) && Ea(a[3])) {
                var c = Cl(a[1], b.isGtmEvent)
                  , d = String(a[2])
                  , e = a[3];
                if (c) {
                    Sx || M(43);
                    var f = $x();
                    if (!Ia(Uj(), function(h) {
                        return c.ba === h
                    }))
                        Kv(c.ba, f, {
                            source: 4,
                            fromContainerExecution: b.fromContainerExecution
                        });
                    else if (-1 !== Rx.indexOf(ck(c.prefix))) {
                        Wx(a, b);
                        var g = {};
                        kl(nb((g[N.g.rb] = d,
                        g[N.g.Db] = e,
                        g)));
                        nm(d, function(h) {
                            H(function() {
                                return e(h)
                            })
                        }, c.id, b)
                    }
                }
            }
        },
        js: function(a, b) {
            if (2 == a.length && a[1].getTime) {
                Sx = !0;
                var c = Wx(a, b)
                  , d = c.eventId
                  , e = c.priorityId
                  , f = {};
                return f.event = "gtm.js",
                f["gtm.start"] = a[1].getTime(),
                f["gtm.uniqueEventId"] = d,
                f["gtm.priorityId"] = e,
                f
            }
        },
        policy: function(a) {
            if (3 === a.length && k(a[1]) && Ea(a[2])) {
                Pf(a[1], a[2]);
                if (M(74),
                "all" === a[1]) {
                    M(75);
                    var b = !1;
                    try {
                        b = a[2](Wj(), "unknown", {})
                    } catch (c) {}
                    b || M(76)
                }
            } else {
                M(73);
            }
        },
        set: function(a, b) {
            var c;
            2 == a.length && lb(a[1]) ? c = nb(a[1]) : 3 == a.length && k(a[1]) && (c = {},
            lb(a[2]) || Ha(a[2]) ? c[a[1]] = nb(a[2]) : c[a[1]] = a[2]);
            if (c) {
                var d = Wx(a, b)
                  , e = d.eventId
                  , f = d.priorityId;
                nb(c);
                var g = nb(c);
                km.push("set", [g], void 0, b);
                c["gtm.uniqueEventId"] = e;
                f && (c["gtm.priorityId"] = f);
                R(6) && delete c.event;
                b.overwriteModelFields = !0;
                return c
            }
        }
    }
      , cy = {
        policy: !0
    };
    var dy = function(a) {
        var b = z[ri.ja].hide;
        if (b && void 0 !== b[a] && b.end) {
            b[a] = !1;
            var c = !0, d;
            for (d in b)
                if (b.hasOwnProperty(d) && !0 === b[d]) {
                    c = !1;
                    break
                }
            c && (b.end(),
            b.end = null)
        }
    }
      , ey = function(a) {
        var b = z[ri.ja]
          , c = b && b.hide;
        c && c.end && (c[a] = !0)
    };
    var fy = !1
      , gy = [];
    function hy() {
        if (!fy) {
            fy = !0;
            for (var a = 0; a < gy.length; a++)
                H(gy[a])
        }
    }
    var iy = function(a) {
        fy ? H(a) : gy.push(a)
    };
    var zy = function(a) {
        if (yy(a))
            return a;
        this.h = a
    };
    zy.prototype.getUntrustedMessageValue = function() {
        return this.h
    }
    ;
    var yy = function(a) {
        return !a || "object" !== jb(a) || lb(a) ? !1 : "getUntrustedMessageValue"in a
    };
    zy.prototype.getUntrustedMessageValue = zy.prototype.getUntrustedMessageValue;
    var Ay = 0
      , By = {}
      , Cy = []
      , Dy = []
      , Ey = !1
      , Fy = !1;
    function Gy(a, b) {
        return a.messageContext.eventId - b.messageContext.eventId || a.messageContext.priorityId - b.messageContext.priorityId
    }
    var Hy = function(a) {
        return z[ri.ja].push(a)
    }
      , Iy = function(a, b, c) {
        a.eventCallback = b;
        c && (a.eventTimeout = c);
        return Hy(a)
    }
      , Jy = function(a, b) {
        if (!Ga(b) || 0 > b)
            b = 0;
        var c = si[ri.ja]
          , d = 0
          , e = !1
          , f = void 0;
        f = z.setTimeout(function() {
            e || (e = !0,
            a());
            f = void 0
        }, b);
        return function() {
            var g = c ? c.subscribers : 1;
            ++d === g && (f && (z.clearTimeout(f),
            f = void 0),
            e || (a(),
            e = !0))
        }
    };
    function Ky(a, b) {
        var c = a._clear || b.overwriteModelFields;
        l(a, function(e, f) {
            "_clear" !== e && (c && Vi(e),
            Vi(e, f))
        });
        Fi || (Fi = a["gtm.start"]);
        var d = a["gtm.uniqueEventId"];
        if (!a.event)
            return !1;
        "number" !== typeof d && (d = Ji(),
        a["gtm.uniqueEventId"] = d,
        Vi("gtm.uniqueEventId", d));
        return Lx(a)
    }
    function Ly(a) {
        if (null == a || "object" !== typeof a)
            return !1;
        if (a.event)
            return !0;
        if (Ma(a)) {
            var b = a[0];
            if ("config" === b || "event" === b || "js" === b || "get" === b)
                return !0
        }
        return !1
    }
    function My() {
        var a;
        if (Dy.length)
            a = Dy.shift();
        else if (Cy.length)
            a = Cy.shift();
        else
            return;
        var b;
        var c = a;
        if (Ey || !Ly(c.message))
            b = c;
        else {
            Ey = !0;
            var d = c.message["gtm.uniqueEventId"];
            "number" !== typeof d && (d = c.message["gtm.uniqueEventId"] = Ji());
            var e = {}
              , f = {
                message: (e.event = "gtm.init_consent",
                e["gtm.uniqueEventId"] = d - 2,
                e),
                messageContext: {
                    eventId: d - 2
                }
            }
              , g = {}
              , h = {
                message: (g.event = "gtm.init",
                g["gtm.uniqueEventId"] = d - 1,
                g),
                messageContext: {
                    eventId: d - 1
                }
            };
            Cy.unshift(h, c);
            if (tk) {
                var m = Vf.ctid;
                if (m) {
                    var n, p = Yj(Zj());
                    n = p && p.context;
                    var q, r = vj(z.location.href);
                    q = r.hostname + r.pathname;
                    var t = n && n.fromContainerExecution
                      , u = n && n.source
                      , v = Vf.canonicalContainerId
                      , w = Oj.qe;
                    tk && (Fl || (Fl = q),
                    Gl.push(m + ";" + v + ";" + (t ? 1 : 0) + ";" + (u || 0) + ";" + (w ? 1 : 0)))
                }
            }
            b = f
        }
        return b
    }
    function Ny() {
        for (var a = !1, b; !Fy && (b = My()); ) {
            Fy = !0;
            delete Pi.eventModel;
            Ri();
            var c = b
              , d = c.message
              , e = c.messageContext;
            if (null == d)
                Fy = !1;
            else {
                e.fromContainerExecution && Wi();
                try {
                    if (Ea(d))
                        try {
                            d.call(Ti)
                        } catch (x) {}
                    else if (Ha(d)) {
                        var f = d;
                        if (k(f[0])) {
                            var g = f[0].split(".")
                              , h = g.pop()
                              , m = f.slice(1)
                              , n = Si(g.join("."), 2);
                            if (null != n)
                                try {
                                    n[h].apply(n, m)
                                } catch (x) {}
                        }
                    } else {
                        var p = void 0
                          , q = !1;
                        if (Ma(d)) {
                            a: {
                                if (d.length && k(d[0])) {
                                    var r = by[d[0]];
                                    if (r && (!e.fromContainerExecution || !cy[d[0]])) {
                                        p = r(d, e);
                                        break a
                                    }
                                }
                                p = void 0
                            }
                            (q = p && "set" === d[0] && !!p.event) && M(101)
                        } else
                            p = d;
                        if (p) {
                            var t = Ky(p, e);
                            a = t || a;
                            q && t && M(113)
                        }
                    }
                } finally {
                    e.fromContainerExecution && Ri(!0);
                    var u = d["gtm.uniqueEventId"];
                    if ("number" === typeof u) {
                        for (var v = By[String(u)] || [], w = 0; w < v.length; w++)
                            Dy.push(Oy(v[w]));
                        v.length && Dy.sort(Gy);
                        delete By[String(u)];
                        u > Ay && (Ay = u)
                    }
                    Fy = !1
                }
            }
        }
        return !a
    }
    function Py() {
        if (R(61)) {
            var a = Qy();
        }
        var b = Ny();
        if (R(61)) {}
        try {
            dy(Wj())
        } catch (c) {}
        return b
    }
    function px(a) {
        if (Ay < a.notBeforeEventId) {
            var b = String(a.notBeforeEventId);
            By[b] = By[b] || [];
            By[b].push(a)
        } else
            Dy.push(Oy(a)),
            Dy.sort(Gy),
            H(function() {
                Fy || Ny()
            })
    }
    function Oy(a) {
        return {
            message: a.message,
            messageContext: a.messageContext
        }
    }
    var Ry = function() {
        function a(f) {
            var g = {};
            if (yy(f)) {
                var h = f;
                f = yy(h) ? h.getUntrustedMessageValue() : void 0;
                g.fromContainerExecution = !0
            }
            return {
                message: f,
                messageContext: g
            }
        }
        var b = Dc(ri.ja, [])
          , c = si[ri.ja] = si[ri.ja] || {};
        !0 === c.pruned && M(83);
        By = nx().get();
        qx();
        Qv(function() {
            if (!c.gtmDom) {
                c.gtmDom = !0;
                var f = {};
                b.push((f.event = "gtm.dom",
                f))
            }
        });
        iy(function() {
            if (!c.gtmLoad) {
                c.gtmLoad = !0;
                var f = {};
                b.push((f.event = "gtm.load",
                f))
            }
        });
        c.subscribers = (c.subscribers || 0) + 1;
        var d = b.push;
        b.push = function() {
            var f;
            if (0 < si.SANDBOXED_JS_SEMAPHORE) {
                f = [];
                for (var g = 0; g < arguments.length; g++)
                    f[g] = new zy(arguments[g])
            } else
                f = [].slice.call(arguments, 0);
            var h = f.map(function(q) {
                return a(q)
            });
            Cy.push.apply(Cy, h);
            var m = d.apply(b, f)
              , n = Math.max(100, Number("1000") || 300);
            if (this.length > n)
                for (M(4),
                c.pruned = !0; this.length > n; )
                    this.shift();
            var p = "boolean" !== typeof m || m;
            return Ny() && p
        }
        ;
        var e = b.slice(0).map(function(f) {
            return a(f)
        });
        Cy.push.apply(Cy, e);
        if (Qy()) {
            if (R(61)) {}
            H(Py)
        }
    }
      , Qy = function() {
        var a = !0;
        return a
    };
    function Sy(a) {
        if (null == a || 0 === a.length)
            return !1;
        var b = Number(a)
          , c = Ta();
        return b < c + 3E5 && b > c - 9E5
    }
    function Ty(a) {
        return a && 0 === a.indexOf("pending:") ? Sy(a.substr(8)) : !1
    }
    ;var nz = function() {};
    var oz = function() {};
    oz.prototype.toString = function() {
        return "undefined"
    }
    ;
    var pz = new oz;
    var Xz = z.clearTimeout
      , Yz = z.setTimeout
      , Zz = function(a, b, c, d) {
        if (Kn()) {
            b && H(b)
        } else
            return Ic(a, b, c, d)
    }
      , $z = function() {
        return new Date
    }
      , aA = function() {
        return z.location.href
    }
      , bA = function(a) {
        return rj(vj(a), "fragment")
    }
      , cA = function(a) {
        return sj(vj(a))
    }
      , dA = function(a, b) {
        return Si(a, b || 2)
    }
      , eA = function(a, b, c) {
        return b ? Iy(a, b, c) : Hy(a)
    }
      , fA = function(a, b) {
        z[a] = b
    }
      , W = function(a, b, c) {
        b && (void 0 === z[a] || c && !z[a]) && (z[a] = b);
        return z[a]
    }
      , gA = function(a, b, c) {
        return Qn(a, b, void 0 === c ? !0 : !!c)
    }
      , hA = function(a, b, c) {
        return 0 === Zn(a, b, c)
    }
      , iA = function(a, b) {
        if (Kn()) {
            b && H(b)
        } else
            Kc(a, b)
    }
      , jA = function(a) {
        return !!Az(a, "init", !1)
    }
      , kA = function(a) {
        yz(a, "init", !0)
    };

    function HA(a, b) {
        function c(g) {
            var h = vj(g)
              , m = rj(h, "protocol")
              , n = rj(h, "host", !0)
              , p = rj(h, "port")
              , q = rj(h, "path").toLowerCase().replace(/\/$/, "");
            if (void 0 === m || "http" === m && "80" === p || "https" === m && "443" === p)
                m = "web",
                p = "default";
            return [m, n, p, q]
        }
        for (var d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++)
            if (d[f] !== e[f])
                return !1;
        return !0
    }
    function IA(a) {
        return JA(a) ? 1 : 0
    }
    function JA(a) {
        var b = a.arg0
          , c = a.arg1;
        if (a.any_of && Array.isArray(c)) {
            for (var d = 0; d < c.length; d++) {
                var e = nb(a, {});
                nb({
                    arg1: c[d],
                    any_of: void 0
                }, e);
                if (IA(e))
                    return !0
            }
            return !1
        }
        switch (a["function"]) {
        case "_cn":
            return vg(b, c);
        case "_css":
            var f;
            a: {
                if (b)
                    try {
                        for (var g = 0; g < rg.length; g++) {
                            var h = rg[g];
                            if (b[h]) {
                                f = b[h](c);
                                break a
                            }
                        }
                    } catch (m) {}
                f = !1
            }
            return f;
        case "_ew":
            return sg(b, c);
        case "_eq":
            return wg(b, c);
        case "_ge":
            return xg(b, c);
        case "_gt":
            return zg(b, c);
        case "_lc":
            return 0 <= String(b).split(",").indexOf(String(c));
        case "_le":
            return yg(b, c);
        case "_lt":
            return Ag(b, c);
        case "_re":
            return ug(b, c, a.ignore_case);
        case "_sw":
            return Bg(b, c);
        case "_um":
            return HA(b, c)
        }
        return !1
    }
    ;function KA() {
        var a = [["cv", "1"], ["rv", ri.fh], ["tc", of.filter(function(b) {
            return b
        }).length]];
        ri.ue && a.push(["x", ri.ue]);
        Li.h && a.push(["tag_exp", Li.h]);
        return a
    }
    ;function LA() {
        var a = fj();
        return a.length ? [["exp_geo", a]] : []
    }
    var MA;
    function NA() {
        try {
            null != MA || (MA = (new Intl.DateTimeFormat).resolvedOptions().timeZone)
        } catch (b) {}
        var a;
        return (null == (a = MA) ? 0 : a.length) ? [["exp_tz", MA]] : []
    }
    ;function OA(a) {
        if (a.scriptSource) {
            var b;
            try {
                b = Yc().getEntriesByType("resource")
            } catch (g) {}
            if (b) {
                for (var c = {}, d = 0; d < b.length; ++d) {
                    var e = b[d]
                      , f = e.initiatorType;
                    if ("script" === f && e.name === a.scriptSource)
                        return {
                            ln: d,
                            mn: c
                        };
                    c[f] = 1 + (c[f] || 0)
                }
                M(146)
            } else
                M(145)
        }
    }
    function PA() {
        if (tk && R(73)) {
            var a = ak();
            if (!a)
                M(144);
            else if (a.canonicalContainerId) {
                var b = OA(a);
                if (b) {
                    var c = !1;
                    ok(function(d) {
                        if (c)
                            return [];
                        d.zb && (c = !0);
                        d.dg();
                        return [["rtg", a.canonicalContainerId], ["rlo", b.ln], ["slo", b.mn.script || 0]]
                    })
                }
            }
        }
    }
    ;var QA = function() {
        return !1
    }
      , RA = function() {
        var a = {};
        return function(b, c, d) {}
    };
    function SA() {
        var a = TA;
        return function(b, c, d) {
            var e = d && d.event;
            UA(c);
            var f = 0 === b.indexOf("__cvt_") ? void 0 : 1
              , g = new sb;
            l(c, function(r, t) {
                var u = md(t, void 0, f);
                void 0 === u && void 0 !== t && M(44);
                g.set(r, u)
            });
            a.h.h.F = If();
            var h = {
                Hj: Zf(b),
                eventId: void 0 !== e ? e.id : void 0,
                priorityId: void 0 !== e ? e.priorityId : void 0,
                Lf: void 0 !== e ? function(r) {
                    return e.fc.Lf(r)
                }
                : void 0,
                hc: function() {
                    return b
                },
                log: function() {},
                Pl: {
                    index: d && d.index,
                    type: d && d.type,
                    name: d && d.name
                },
                kn: !!tv(b, 3),
                originalEventData: null == e ? void 0 : e.originalEventData
            };
            e && e.cachedModelValues && (h.cachedModelValues = {
                gtm: e.cachedModelValues.gtm,
                ecommerce: e.cachedModelValues.ecommerce
            });
            if (QA()) {
                var m = RA()
                  , n = void 0
                  , p = void 0;
                h.hb = {
                    fi: [],
                    xe: {},
                    xb: function(r, t, u) {
                        1 === t && (n = r);
                        7 === t && (p = u);
                        m(r, t, u)
                    },
                    Lh: qh()
                };
                h.log = function(r, t) {
                    if (n) {
                        var u = Array.prototype.slice.call(arguments, 1);
                        m(n, 4, {
                            level: r,
                            source: p,
                            message: u
                        })
                    }
                }
            }
            var q = Ke(a, h, [b, g]);
            a.h.h.F = void 0;
            q instanceof wa && "return" === q.h && (q = q.s);
            return nd(q, void 0, f)
        }
    }
    function UA(a) {
        var b = a.gtmOnSuccess
          , c = a.gtmOnFailure;
        Ea(b) && (a.gtmOnSuccess = function() {
            H(b)
        }
        );
        Ea(c) && (a.gtmOnFailure = function() {
            H(c)
        }
        )
    }
    ;function VA(a, b) {
        var c = this;
    }
    VA.P = "addConsentListener";
    var WA;
    var XA = function(a) {
        for (var b = 0; b < a.length; ++b)
            if (WA)
                try {
                    a[b]()
                } catch (c) {
                    M(77)
                }
            else
                a[b]()
    };
    function YA(a, b, c) {
        var d = this, e;
        return e
    }
    YA.D = "internal.addDataLayerEventListener";
    function ZA(a, b, c) {}
    ZA.P = "addDocumentEventListener";
    function $A(a, b, c, d) {}
    $A.P = "addElementEventListener";
    function aB(a) {}
    aB.P = "addEventCallback";
    function eB(a) {}
    eB.D = "internal.addFormAbandonmentListener";
    function fB(a, b, c, d) {}
    fB.D = "internal.addFormData";
    var gB = {}
      , hB = []
      , iB = {}
      , jB = 0
      , kB = 0;
    function rB(a, b) {}
    rB.D = "internal.addFormInteractionListener";
    function yB(a, b) {}
    yB.D = "internal.addFormSubmitListener";
    function DB(a) {}
    DB.D = "internal.addGaSendListener";
    function EB(a) {
        if (!a)
            return {};
        var b = a.Pl;
        return Sv(b.type, b.index, b.name)
    }
    function FB(a) {
        return a ? {
            originatingEntity: EB(a)
        } : {}
    }
    ;var GB = function(a, b) {
        this.tagId = a;
        this.ze = b
    };
    function HB(a, b) {
        var c = this;
    }
    HB.D = "internal.loadGoogleTag";
    function IB(a) {
        return new ed("",function(b) {
            b = I(this, b);
            if (b instanceof ed)
                return new ed("",function() {
                    var c = ta.apply(0, arguments)
                      , d = this
                      , e = nb(this.h.h);
                    e.eventId = a.eventId;
                    e.priorityId = a.priorityId;
                    e.originalEventData = a.originalEventData;
                    var f = c.map(function(h) {
                        return I(d, h)
                    })
                      , g = Ca(this.h);
                    g.h = e;
                    return b.eb.apply(b, [g].concat(ka(f)))
                }
                )
        }
        )
    }
    ;function JB(a, b, c) {
        var d = this;
    }
    JB.D = "internal.addGoogleTagRestriction";
    var KB = {}
      , LB = [];
    var SB = function(a, b) {};
    SB.D = "internal.addHistoryChangeListener";
    function TB(a, b, c) {}
    TB.P = "addWindowEventListener";
    function UB(a, b) {
        return !0
    }
    UB.P = "aliasInWindow";
    function VB(a, b, c) {}
    VB.D = "internal.appendRemoteConfigParameter";
    function WB() {
        var a = 2;
        return a
    }
    ;function XB(a, b) {
        var c;
        return c
    }
    XB.P = "callInWindow";
    function YB(a) {}
    YB.P = "callLater";
    function ZB(a) {}
    ZB.D = "callOnDomReady";
    function $B(a) {}
    $B.D = "callOnWindowLoad";
    function aC(a, b) {
        var c;
        return c
    }
    aC.D = "internal.computeGtmParameter";
    function bC(a, b) {
        var c;
        var d = md(c, this.h, WB());
        void 0 === d && void 0 !== c && M(45);
        return d
    }
    bC.P = "copyFromDataLayer";
    function cC(a) {
        var b = void 0;
        return b
    }
    cC.D = "internal.copyFromDataLayerCache";
    function dC(a) {
        var b;
        return b
    }
    dC.P = "copyFromWindow";
    function eC(a) {
        var b = void 0;
        return md(b, this.h, WB())
    }
    eC.D = "internal.copyKeyFromWindow";
    function fC(a, b) {
        var c;
        return c
    }
    fC.D = "internal.copyPreHit";
    function gC(a, b) {
        var c = null
          , d = WB();
        return md(c, this.h, d)
    }
    gC.P = "createArgumentsQueue";
    function hC(a) {
        var b;
        return md(b, this.h, 1)
    }
    hC.D = "internal.createGaCommandQueue";
    function iC(a) {
        var b;
        return md(b, this.h, WB())
    }
    iC.P = "createQueue";
    function jC(a, b) {
        var c = null;
        return c
    }
    jC.D = "internal.createRegex";
    function kC(a) {}
    kC.D = "internal.declareConsentState";
    function lC(a) {
        var b = "";
        return b
    }
    lC.D = "internal.decodeUrlHtmlEntities";
    function mC(a, b, c) {
        var d;
        return d
    }
    mC.D = "internal.decorateUrlWithGaCookies";
    function nC(a) {
        var b;
        return b
    }
    nC.D = "internal.detectUserProvidedData";
    function rC(a, b) {
        return b
    }
    rC.D = "internal.enableAutoEventOnClick";
    function wC(a, b) {
        return b
    }
    wC.D = "internal.enableAutoEventOnElementVisibility";
    function xC() {}
    xC.D = "internal.enableAutoEventOnError";
    var yC = {}
      , zC = []
      , AC = {}
      , BC = 0
      , CC = 0;
    function IC(a, b) {
        var c = this;
        return b
    }
    IC.D = "internal.enableAutoEventOnFormInteraction";
    function NC(a, b) {
        var c = this;
        return b
    }
    NC.D = "internal.enableAutoEventOnFormSubmit";
    function SC() {
        var a = this;
    }
    SC.D = "internal.enableAutoEventOnGaSend";
    var TC = {}
      , UC = [];
    function aD(a, b) {
        var c = this;
        return b
    }
    aD.D = "internal.enableAutoEventOnHistoryChange";
    var bD = ["http://", "https://", "javascript:", "file://"];
    function fD(a, b) {
        var c = this;
        return b
    }
    fD.D = "internal.enableAutoEventOnLinkClick";
    var gD, hD;
    function sD(a, b) {
        var c = this;
        return b
    }
    sD.D = "internal.enableAutoEventOnScroll";
    function tD(a) {
        return function() {
            if (a.Fc && a.Ic >= a.Fc)
                a.Dc && z.clearInterval(a.Dc);
            else {
                a.Ic++;
                var b = Ta();
                Hy({
                    event: a.eventName,
                    "gtm.timerId": a.Dc,
                    "gtm.timerEventNumber": a.Ic,
                    "gtm.timerInterval": a.interval,
                    "gtm.timerLimit": a.Fc,
                    "gtm.timerStartTime": a.cf,
                    "gtm.timerCurrentTime": b,
                    "gtm.timerElapsedTime": b - a.cf,
                    "gtm.triggers": a.hi
                })
            }
        }
    }
    function uD(a, b) {
        return b
    }
    uD.D = "internal.enableAutoEventOnTimer";
    var vc = da(["data-gtm-yt-inspected-"]), vD = ["www.youtube.com", "www.youtube-nocookie.com"], wD, xD = !1;
    function HD(a, b) {
        var c = this;
        return b
    }
    HD.D = "internal.enableAutoEventOnYouTubeActivity";
    var ID;
    function JD(a) {
        var b = !1;
        return b
    }
    JD.D = "internal.evaluateMatchingRules";
    var pE = function() {
        var a = !0;
        jn(7) && jn(9) && jn(10) || (a = !1);
        return a
    };
    var tE = function(a, b) {
        if (!b.isGtmEvent) {
            var c = V(b, N.g.rb)
              , d = V(b, N.g.Db)
              , e = V(b, c);
            if (void 0 === e) {
                var f = void 0;
                qE.hasOwnProperty(c) ? f = qE[c] : rE.hasOwnProperty(c) && (f = rE[c]);
                1 === f && (f = sE(c));
                k(f) ? bw()(function() {
                    var g = bw().getByName(a).get(f);
                    d(g)
                }) : d(void 0)
            } else
                d(e)
        }
    }
      , uE = function(a, b) {
        var c = a[N.g.Fb]
          , d = b + "."
          , e = a[N.g.X] || ""
          , f = void 0 === c ? !!a.use_anchor : "fragment" === c
          , g = !!a[N.g.tb];
        e = String(e).replace(/\s+/g, "").split(",");
        var h = bw();
        h(d + "require", "linker");
        h(d + "linker:autoLink", e, f, g)
    }
      , yE = function(a, b, c) {
        if (!c.isGtmEvent || !vE[a]) {
            var d = !tl(N.g.R)
              , e = function(f) {
                var g, h, m = bw(), n = wE(b, "", c), p, q = n.createOnlyFields._useUp;
                if (c.isGtmEvent || xE(b, n.createOnlyFields)) {
                    c.isGtmEvent && (g = "gtm" + Ji(),
                    h = n.createOnlyFields,
                    n.gtmTrackerName && (h.name = g));
                    m(function() {
                        var t = m.getByName(b);
                        t && (p = t.get("clientId"));
                        c.isGtmEvent || m.remove(b)
                    });
                    m("create", a, c.isGtmEvent ? h : n.createOnlyFields);
                    d && tl(N.g.R) && (d = !1,
                    m(function() {
                        var t = bw().getByName(c.isGtmEvent ? g : b);
                        !t || t.get("clientId") == p && q || (c.isGtmEvent ? (n.fieldsToSet["&gcu"] = "1",
                        n.fieldsToSet["&sst.gcut"] = mi[f]) : (n.fieldsToSend["&gcu"] = "1",
                        n.fieldsToSend["&sst.gcut"] = mi[f]),
                        t.set(n.fieldsToSet),
                        c.isGtmEvent ? t.send("pageview") : t.send("pageview", n.fieldsToSend))
                    }));
                    c.isGtmEvent && m(function() {
                        m.remove(g)
                    })
                }
            };
            vl(function() {
                return e(N.g.R)
            }, N.g.R);
            vl(function() {
                return e(N.g.J)
            }, N.g.J);
            R(44) && vl(function() {
                return e(N.g.N)
            }, N.g.N);
            c.isGtmEvent && (vE[a] = !0)
        }
    }
      , zE = function(a, b) {
        Gj() && b && (a[N.g.qb] = b)
    }
      , IE = function(a, b, c) {
        function d() {
            var P = V(c, N.g.Xc);
            h(function() {
                if (!c.isGtmEvent && lb(P)) {
                    var T = u.fieldsToSend, Y = m().getByName(n), S;
                    for (S in P)
                        if (P.hasOwnProperty(S) && /^(dimension|metric)\d+$/.test(S) && void 0 != P[S]) {
                            var U = Y.get(sE(P[S]));
                            AE(T, S, U)
                        }
                }
            })
        }
        function e() {
            if (u.displayfeatures) {
                var P = "_dc_gtm_" + f.replace(/[^A-Za-z0-9-]/g, "");
                p("require", "displayfeatures", void 0, {
                    cookieName: P
                })
            }
        }
        var f = a, g, h = c.isGtmEvent ? dw(V(c, "gaFunctionName")) : dw();
        if (Ea(h)) {
            var m = bw, n;
            c.isGtmEvent ? n = V(c, "name") || V(c, "gtmTrackerName") : n = "gtag_" + f.split("-").join("_");
            var p = function(P) {
                var T = [].slice.call(arguments, 0);
                T[0] = n ? n + "." + T[0] : "" + T[0];
                h.apply(window, T)
            }
              , q = function(P) {
                var T = function(ca, Fa) {
                    for (var ma = 0; Fa && ma < Fa.length; ma++)
                        p(ca, Fa[ma])
                }
                  , Y = c.isGtmEvent
                  , S = Y ? BE(u) : CE(b, c);
                if (S) {
                    var U = {};
                    zE(U, P);
                    p("require", "ec", "ec.js", U);
                    Y && S.oh && p("set", "&cu", S.oh);
                    var ja = S.action;
                    if (Y || "impressions" === ja)
                        if (T("ec:addImpression", S.Sj),
                        !Y)
                            return;
                    if ("promo_click" === ja || "promo_view" === ja || Y && S.af) {
                        var ha = S.af;
                        T("ec:addPromo", ha);
                        if (ha && 0 < ha.length && "promo_click" === ja) {
                            Y ? p("ec:setAction", ja, S.vb) : p("ec:setAction", ja);
                            return
                        }
                        if (!Y)
                            return
                    }
                    "promo_view" !== ja && "impressions" !== ja && (T("ec:addProduct", S.Lc),
                    p("ec:setAction", ja, S.vb))
                }
            }
              , r = function(P) {
                if (P) {
                    var T = {};
                    if (lb(P))
                        for (var Y in DE)
                            DE.hasOwnProperty(Y) && EE(DE[Y], Y, P[Y], T);
                    zE(T, y);
                    p("require", "linkid", T)
                }
            }
              , t = function() {
                if (Kn()) {} else {
                    var P = V(c, N.g.Yi);
                    P && (p("require", P, {
                        dataLayer: ri.ja
                    }),
                    p("require", "render"))
                }
            }
              , u = wE(n, b, c)
              , v = function(P, T, Y) {
                Y && (T = "" + T);
                u.fieldsToSend[P] = T
            };
            !c.isGtmEvent && xE(n, u.createOnlyFields) && (h(function() {
                m() && m().remove(n)
            }),
            FE[n] = !1);
            h("create", f, u.createOnlyFields);
            var w = c.isGtmEvent && u.fieldsToSet[N.g.qb] && R(83);
            if (!c.isGtmEvent && u.createOnlyFields[N.g.qb] || w) {
                var x = Fj() ? Ej(c.isGtmEvent ? u.fieldsToSet[N.g.qb] : u.createOnlyFields[N.g.qb], "/analytics.js") : void 0;
                x && (g = x)
            }
            var y = c.isGtmEvent ? u.fieldsToSet[N.g.qb] : u.createOnlyFields[N.g.qb];
            if (y) {
                var B = c.isGtmEvent ? u.fieldsToSet[N.g.Td] : u.createOnlyFields[N.g.Td];
                B && !FE[n] && (FE[n] = !0,
                h(gw(n, B)))
            }
            c.isGtmEvent ? u.enableRecaptcha && p("require", "recaptcha", "recaptcha.js") : (d(),
            r(u.linkAttribution));
            var A = u[N.g.Ba];
            A && A[N.g.X] && uE(A, n);
            p("set", u.fieldsToSet);
            if (c.isGtmEvent) {
                if (u.enableLinkId) {
                    var F = {};
                    zE(F, y);
                    p("require", "linkid", "linkid.js", F)
                }
                yE(f, n, c)
            }
            if (b === N.g.sc)
                if (c.isGtmEvent) {
                    e();
                    if (u.remarketingLists) {
                        var G = "_dc_gtm_" + f.replace(/[^A-Za-z0-9-]/g, "");
                        p("require", "adfeatures", {
                            cookieName: G
                        })
                    }
                    q(y);
                    p("send", "pageview");
                    u.createOnlyFields._useUp && ew(n + ".")
                } else
                    t(),
                    p("send", "pageview", u.fieldsToSend);
            else
                b === N.g.da ? (t(),
                dr(f, c),
                V(c, N.g.Za) && (Gp(["aw", "dc"]),
                ew(n + ".")),
                Ip(["aw", "dc"]),
                0 != u.sendPageView && p("send", "pageview", u.fieldsToSend),
                yE(f, n, c)) : b === N.g.Sa ? tE(n, c) : "screen_view" === b ? p("send", "screenview", u.fieldsToSend) : "timing_complete" === b ? (u.fieldsToSend.hitType = "timing",
                v("timingCategory", u.eventCategory, !0),
                c.isGtmEvent ? v("timingVar", u.timingVar, !0) : v("timingVar", u.name, !0),
                v("timingValue", Na(u.value)),
                void 0 !== u.eventLabel && v("timingLabel", u.eventLabel, !0),
                p("send", u.fieldsToSend)) : "exception" === b ? p("send", "exception", u.fieldsToSend) : "" === b && c.isGtmEvent || ("track_social" === b && c.isGtmEvent ? (u.fieldsToSend.hitType = "social",
                v("socialNetwork", u.socialNetwork, !0),
                v("socialAction", u.socialAction, !0),
                v("socialTarget", u.socialTarget, !0)) : ((c.isGtmEvent || GE[b]) && q(y),
                c.isGtmEvent && e(),
                u.fieldsToSend.hitType = "event",
                v("eventCategory", u.eventCategory, !0),
                v("eventAction", u.eventAction || b, !0),
                void 0 !== u.eventLabel && v("eventLabel", u.eventLabel, !0),
                void 0 !== u.value && v("eventValue", Na(u.value))),
                p("send", u.fieldsToSend));
            var D = g && R(83) && !c.eventMetadata.suppress_script_load;
            if (!HE && (!c.isGtmEvent || D)) {
                g = g || "https://www.google-analytics.com/analytics.js";
                HE = !0;
                var E = function() {
                    c.onFailure()
                }
                  , O = function() {
                    m().loaded || E()
                };
                Kn() ? H(O) : Ic(g, O, E)
            }
        } else
            H(c.onFailure)
    }
      , JE = function(a, b, c, d) {
        wl(function() {
            IE(a, b, d)
        }, [N.g.R, N.g.J])
    }
      , LE = function(a) {
        function b(e) {
            function f(h, m) {
                for (var n = 0; n < m.length; n++) {
                    var p = m[n];
                    if (e[p]) {
                        g[h] = e[p];
                        break
                    }
                }
            }
            var g = nb(e);
            f("id", ["id", "item_id", "promotion_id"]);
            f("name", ["name", "item_name", "promotion_name"]);
            f("brand", ["brand", "item_brand"]);
            f("variant", ["variant", "item_variant"]);
            f("list", ["list_name", "item_list_name"]);
            f("position", ["list_position", "creative_slot", "index"]);
            (function() {
                if (e.category)
                    g.category = e.category;
                else {
                    for (var h = "", m = 0; m < KE.length; m++)
                        void 0 !== e[KE[m]] && (h && (h += "/"),
                        h += e[KE[m]]);
                    h && (g.category = h)
                }
            }
            )();
            f("listPosition", ["list_position"]);
            f("creative", ["creative_name"]);
            f("list", ["list_name"]);
            f("position", ["list_position", "creative_slot"]);
            return g
        }
        for (var c = [], d = 0; a && d < a.length; d++)
            a[d] && lb(a[d]) && c.push(b(a[d]));
        return c.length ? c : void 0
    }
      , ME = function(a) {
        return tl(a)
    }
      , NE = !1;
    var HE, FE = {}, vE = {}, OE = {}, PE = Object.freeze((OE.page_hostname = 1,
    OE[N.g.ka] = 1,
    OE[N.g.lb] = 1,
    OE[N.g.Ua] = 1,
    OE[N.g.Va] = 1,
    OE[N.g.Ya] = 1,
    OE[N.g.uc] = 1,
    OE[N.g.Rb] = 1,
    OE[N.g.Oa] = 1,
    OE[N.g.vc] = 1,
    OE[N.g.ra] = 1,
    OE[N.g.gd] = 1,
    OE[N.g.Ga] = 1,
    OE[N.g.Gb] = 1,
    OE)), QE = {}, qE = Object.freeze((QE.client_storage = "storage",
    QE.sample_rate = 1,
    QE.site_speed_sample_rate = 1,
    QE.store_gac = 1,
    QE.use_amp_client_id = 1,
    QE[N.g.nb] = 1,
    QE[N.g.za] = "storeGac",
    QE[N.g.Ua] = 1,
    QE[N.g.Va] = 1,
    QE[N.g.Ya] = 1,
    QE[N.g.uc] = 1,
    QE[N.g.Rb] = 1,
    QE[N.g.vc] = 1,
    QE)), RE = {}, SE = Object.freeze((RE._cs = 1,
    RE._useUp = 1,
    RE.allowAnchor = 1,
    RE.allowLinker = 1,
    RE.alwaysSendReferrer = 1,
    RE.clientId = 1,
    RE.cookieDomain = 1,
    RE.cookieExpires = 1,
    RE.cookieFlags = 1,
    RE.cookieName = 1,
    RE.cookiePath = 1,
    RE.cookieUpdate = 1,
    RE.legacyCookieDomain = 1,
    RE.legacyHistoryImport = 1,
    RE.name = 1,
    RE.sampleRate = 1,
    RE.siteSpeedSampleRate = 1,
    RE.storage = 1,
    RE.storeGac = 1,
    RE.useAmpClientId = 1,
    RE._cd2l = 1,
    RE)), TE = Object.freeze({
        anonymize_ip: 1
    }), UE = {}, rE = Object.freeze((UE.campaign = {
        content: "campaignContent",
        id: "campaignId",
        medium: "campaignMedium",
        name: "campaignName",
        source: "campaignSource",
        term: "campaignKeyword"
    },
    UE.app_id = 1,
    UE.app_installer_id = 1,
    UE.app_name = 1,
    UE.app_version = 1,
    UE.description = "exDescription",
    UE.fatal = "exFatal",
    UE.language = 1,
    UE.page_hostname = "hostname",
    UE.transport_type = "transport",
    UE[N.g.Aa] = "currencyCode",
    UE[N.g.Lg] = 1,
    UE[N.g.ra] = "location",
    UE[N.g.gd] = "page",
    UE[N.g.Ga] = "referrer",
    UE[N.g.Gb] = "title",
    UE[N.g.zf] = 1,
    UE[N.g.Ra] = 1,
    UE)), VE = {}, WE = Object.freeze((VE.content_id = 1,
    VE.event_action = 1,
    VE.event_category = 1,
    VE.event_label = 1,
    VE.link_attribution = 1,
    VE.name = 1,
    VE[N.g.Ba] = 1,
    VE[N.g.Kg] = 1,
    VE[N.g.Qa] = 1,
    VE[N.g.la] = 1,
    VE)), XE = Object.freeze({
        displayfeatures: 1,
        enableLinkId: 1,
        enableRecaptcha: 1,
        eventAction: 1,
        eventCategory: 1,
        eventLabel: 1,
        gaFunctionName: 1,
        gtmEcommerceData: 1,
        gtmTrackerName: 1,
        linker: 1,
        remarketingLists: 1,
        socialAction: 1,
        socialNetwork: 1,
        socialTarget: 1,
        timingVar: 1,
        value: 1
    }), KE = Object.freeze(["item_category", "item_category2", "item_category3", "item_category4", "item_category5"]), YE = {}, DE = Object.freeze((YE.levels = 1,
    YE[N.g.Va] = "duration",
    YE[N.g.uc] = 1,
    YE)), ZE = {}, $E = Object.freeze((ZE.anonymize_ip = 1,
    ZE.fatal = 1,
    ZE.send_page_view = 1,
    ZE.store_gac = 1,
    ZE.use_amp_client_id = 1,
    ZE[N.g.za] = 1,
    ZE[N.g.Lg] = 1,
    ZE)), EE = function(a, b, c, d) {
        if (void 0 !== c)
            if ($E[b] && (c = Oa(c)),
            "anonymize_ip" !== b || c || (c = void 0),
            1 === a)
                d[sE(b)] = c;
            else if (k(a))
                d[a] = c;
            else
                for (var e in a)
                    a.hasOwnProperty(e) && void 0 !== c[e] && (d[a[e]] = c[e])
    }, sE = function(a) {
        return a && k(a) ? a.replace(/(_[a-z])/g, function(b) {
            return b[1].toUpperCase()
        }) : a
    }, aF = {}, GE = Object.freeze((aF.checkout_progress = 1,
    aF.select_content = 1,
    aF.set_checkout_option = 1,
    aF[N.g.mc] = 1,
    aF[N.g.nc] = 1,
    aF[N.g.Ob] = 1,
    aF[N.g.oc] = 1,
    aF[N.g.ib] = 1,
    aF[N.g.Bb] = 1,
    aF[N.g.jb] = 1,
    aF[N.g.ya] = 1,
    aF[N.g.qc] = 1,
    aF[N.g.La] = 1,
    aF)), bF = {}, cF = Object.freeze((bF.checkout_progress = 1,
    bF.set_checkout_option = 1,
    bF[N.g.og] = 1,
    bF[N.g.pg] = 1,
    bF[N.g.mc] = 1,
    bF[N.g.nc] = 1,
    bF[N.g.qg] = 1,
    bF[N.g.Ob] = 1,
    bF[N.g.ya] = 1,
    bF[N.g.qc] = 1,
    bF[N.g.rg] = 1,
    bF)), dF = {}, eF = Object.freeze((dF.generate_lead = 1,
    dF.login = 1,
    dF.search = 1,
    dF.select_content = 1,
    dF.share = 1,
    dF.sign_up = 1,
    dF.view_search_results = 1,
    dF[N.g.oc] = 1,
    dF[N.g.ib] = 1,
    dF[N.g.Bb] = 1,
    dF[N.g.jb] = 1,
    dF[N.g.La] = 1,
    dF)), fF = function(a) {
        var b = "general";
        cF[a] ? b = "ecommerce" : eF[a] ? b = "engagement" : "exception" === a && (b = "error");
        return b
    }, gF = {}, hF = Object.freeze((gF.view_search_results = 1,
    gF[N.g.ib] = 1,
    gF[N.g.jb] = 1,
    gF[N.g.La] = 1,
    gF)), AE = function(a, b, c) {
        a.hasOwnProperty(b) || (a[b] = c)
    }, iF = function(a) {
        if (Ha(a)) {
            for (var b = [], c = 0; c < a.length; c++) {
                var d = a[c];
                if (void 0 != d) {
                    var e = d.id
                      , f = d.variant;
                    void 0 != e && void 0 != f && b.push(String(e) + "." + String(f))
                }
            }
            return 0 < b.length ? b.join("!") : void 0
        }
    }, wE = function(a, b, c) {
        var d = function(P) {
            return V(c, P)
        }
          , e = {}
          , f = {}
          , g = {}
          , h = {}
          , m = iF(d(N.g.Qi));
        !c.isGtmEvent && m && AE(f, "exp", m);
        g["&gtm"] = Mn(c.eventMetadata.source_canonical_id, !0);
        c.isGtmEvent || (g._no_slc = !0);
        fl() && (h._cs = ME);
        var n = d(N.g.Xc);
        if (!c.isGtmEvent && lb(n))
            for (var p in n)
                if (n.hasOwnProperty(p) && /^(dimension|metric)\d+$/.test(p) && void 0 != n[p]) {
                    var q = d(String(n[p]));
                    void 0 !== q && AE(f, p, q)
                }
        for (var r = !c.isGtmEvent, t = Tl(c), u = 0; u < t.length; ++u) {
            var v = t[u];
            if (c.isGtmEvent) {
                var w = d(v);
                XE.hasOwnProperty(v) ? e[v] = w : SE.hasOwnProperty(v) ? h[v] = w : g[v] = w
            } else {
                var x = void 0;
                x = v !== N.g.fa ? d(v) : Ul(c, v);
                if (WE.hasOwnProperty(v))
                    EE(WE[v], v, x, e);
                else if (TE.hasOwnProperty(v))
                    EE(TE[v], v, x, g);
                else if (rE.hasOwnProperty(v))
                    EE(rE[v], v, x, f);
                else if (qE.hasOwnProperty(v))
                    EE(qE[v], v, x, h);
                else if (/^(dimension|metric|content_group)\d+$/.test(v))
                    EE(1, v, x, f);
                else if (v === N.g.fa) {
                    if (!NE) {
                        var y = bb(x);
                        y && (f["&did"] = y)
                    }
                    var B = void 0
                      , A = void 0;
                    b === N.g.da ? B = bb(Ul(c, v), ".") : (B = bb(Ul(c, v, 1), "."),
                    A = bb(Ul(c, v, 2), "."));
                    B && (f["&gdid"] = B);
                    A && (f["&edid"] = A)
                } else
                    v === N.g.Oa && 0 > t.indexOf(N.g.uc) && (h.cookieName = x + "_ga");
                R(97) && PE[v] && (c.C.hasOwnProperty(v) || b === N.g.da && c.h.hasOwnProperty(v)) && (r = !1)
            }
        }
        R(97) && r && (f["&jsscut"] = "1");
        !1 !== d(N.g.nf) && !1 !== d(N.g.lb) && pE() || (g.allowAdFeatures = !1);
        g.allowAdPersonalizationSignals = pn(c);
        !c.isGtmEvent && d(N.g.Za) && (h._useUp = !0);
        if (c.isGtmEvent) {
            h.name = h.name || e.gtmTrackerName;
            var F = g.hitCallback;
            g.hitCallback = function() {
                Ea(F) && F();
                c.onSuccess()
            }
        } else {
            AE(h, "cookieDomain", "auto");
            AE(g, "forceSSL", !0);
            AE(e, "eventCategory", fF(b));
            hF[b] && AE(f, "nonInteraction", !0);
            "login" === b || "sign_up" === b || "share" === b ? AE(e, "eventLabel", d(N.g.Kg)) : "search" === b || "view_search_results" === b ? AE(e, "eventLabel", d(N.g.dj)) : "select_content" === b && AE(e, "eventLabel", d(N.g.Li));
            var G = e[N.g.Ba] || {}
              , D = G[N.g.Ub];
            D || 0 != D && G[N.g.X] ? h.allowLinker = !0 : !1 === D && AE(h, "useAmpClientId", !1);
            f.hitCallback = c.onSuccess;
            h.name = a
        }
        qn() && (g["&gcs"] = rn());
        g["&gcd"] = vn(c);
        fl() && (tl(N.g.R) || (h.storage = "none"),
        tl(R(44) ? [N.g.J, N.g.N] : [N.g.J]) || (g.allowAdFeatures = !1,
        h.storeGac = !1));
        In() && (g["&dma_cps"] = Gn());
        g["&dma"] = Hn();
        kn() && (g["&tcfd"] = Jn());
        Li.h && (g["&tag_exp"] = Li.h);
        var E = Hj(c) || d(N.g.qb)
          , O = d(N.g.Td);
        E && (c.isGtmEvent || (h[N.g.qb] = E),
        h._cd2l = !0);
        O && !c.isGtmEvent && (h[N.g.Td] = O);
        e.fieldsToSend = f;
        e.fieldsToSet = g;
        e.createOnlyFields = h;
        return e
    }, BE = function(a) {
        var b = a.gtmEcommerceData;
        if (!b)
            return null;
        var c = {};
        b.currencyCode && (c.oh = b.currencyCode);
        if (b.impressions) {
            c.action = "impressions";
            var d = b.impressions;
            c.Sj = "impressions" === b.translateIfKeyEquals ? LE(d) : d
        }
        if (b.promoView) {
            c.action = "promo_view";
            var e = b.promoView.promotions;
            c.af = "promoView" === b.translateIfKeyEquals ? LE(e) : e
        }
        if (b.promoClick) {
            c.action = "promo_click";
            var f = b.promoClick.promotions;
            c.af = "promoClick" === b.translateIfKeyEquals ? LE(f) : f;
            c.vb = b.promoClick.actionField;
            return c
        }
        for (var g in b)
            if (b.hasOwnProperty(g) && "translateIfKeyEquals" !== g && "impressions" !== g && "promoView" !== g && "promoClick" !== g && "currencyCode" !== g) {
                c.action = g;
                var h = b[g].products;
                c.Lc = "products" === b.translateIfKeyEquals ? LE(h) : h;
                c.vb = b[g].actionField;
                break
            }
        return Object.keys(c).length ? c : null
    }, CE = function(a, b) {
        function c(u) {
            return {
                id: d(N.g.Ca),
                affiliation: d(N.g.wg),
                revenue: d(N.g.la),
                tax: d(N.g.uf),
                shipping: d(N.g.ad),
                coupon: d(N.g.xg),
                list: d(N.g.tf) || d(N.g.Zc) || u
            }
        }
        for (var d = function(u) {
            return V(b, u)
        }, e = d(N.g.Z), f, g = 0; e && g < e.length && !(f = e[g][N.g.tf] || e[g][N.g.Zc]); g++)
            ;
        var h = d(N.g.Xc);
        if (lb(h))
            for (var m = 0; e && m < e.length; ++m) {
                var n = e[m], p;
                for (p in h)
                    h.hasOwnProperty(p) && /^(dimension|metric)\d+$/.test(p) && void 0 != h[p] && AE(n, p, n[h[p]])
            }
        var q = null
          , r = d(N.g.Pi);
        if (a === N.g.ya || a === N.g.qc)
            q = {
                action: a,
                vb: c(),
                Lc: LE(e)
            };
        else if (a === N.g.mc)
            q = {
                action: "add",
                vb: c(),
                Lc: LE(e)
            };
        else if (a === N.g.nc)
            q = {
                action: "remove",
                vb: c(),
                Lc: LE(e)
            };
        else if (a === N.g.La)
            q = {
                action: "detail",
                vb: c(f),
                Lc: LE(e)
            };
        else if (a === N.g.ib)
            q = {
                action: "impressions",
                Sj: LE(e)
            };
        else if (a === N.g.jb)
            q = {
                action: "promo_view",
                af: LE(r) || LE(e)
            };
        else if ("select_content" === a && r && 0 < r.length || a === N.g.Bb)
            q = {
                action: "promo_click",
                af: LE(r) || LE(e)
            };
        else if ("select_content" === a || a === N.g.oc)
            q = {
                action: "click",
                vb: {
                    list: d(N.g.tf) || d(N.g.Zc) || f
                },
                Lc: LE(e)
            };
        else if (a === N.g.Ob || "checkout_progress" === a) {
            var t = {
                step: a === N.g.Ob ? 1 : d(N.g.rf),
                option: d(N.g.Ld)
            };
            q = {
                action: "checkout",
                Lc: LE(e),
                vb: nb(c(), t)
            }
        } else
            "set_checkout_option" === a && (q = {
                action: "checkout_option",
                vb: {
                    step: d(N.g.rf),
                    option: d(N.g.Ld)
                }
            });
        q && (q.oh = d(N.g.Aa));
        return q
    }, jF = {}, xE = function(a, b) {
        var c = jF[a];
        jF[a] = nb(b);
        if (!c)
            return !1;
        for (var d in b)
            if (b.hasOwnProperty(d) && b[d] !== c[d])
                return !0;
        for (var e in c)
            if (c.hasOwnProperty(e) && c[e] !== b[e])
                return !0;
        return !1
    };
    function kF(a, b, c, d) {}
    kF.D = "internal.executeEventProcessor";
    function lF(a) {
        var b = void 0;
        return md(b, this.h, 1)
    }
    lF.D = "internal.executeJavascriptString";
    var mF = function(a) {
        var b;
        return b
    };
    var nF = null;
    function oF() {
        var a = new sb;
        L(this, "read_container_data"),
        R(38) && nF ? a = nF : (a.set("containerId", 'UA-23581568-13'),
        a.set("version", '1'),
        a.set("environmentName", ''),
        a.set("debugMode", bg),
        a.set("previewMode", dg),
        a.set("environmentMode", cg),
        a.set("firstPartyServing", Fj()),
        a.set("containerUrl", Cc),
        a.Jb(),
        R(38) && (nF = a));
        return a
    }
    oF.P = "getContainerVersion";
    function pF(a, b) {
        b = void 0 === b ? !0 : b;
        var c;
        return c
    }
    pF.P = "getCookieValues";
    function qF() {
        return fj()
    }
    qF.D = "internal.getCountryCode";
    function rF() {
        var a = [];
        return md(a)
    }
    rF.D = "internal.getDestinationIds";
    function sF(a, b) {
        var c = null;
        return c
    }
    sF.D = "internal.getElementAttribute";
    function tF(a) {
        var b = null;
        return b
    }
    tF.D = "internal.getElementById";
    function uF(a) {
        var b = "";
        return b
    }
    uF.D = "internal.getElementInnerText";
    function vF(a, b) {
        var c = null;
        return c
    }
    vF.D = "internal.getElementProperty";
    function wF(a) {
        var b;
        return b
    }
    wF.D = "internal.getElementValue";
    function xF(a) {
        var b = 0;
        return b
    }
    xF.D = "internal.getElementVisibilityRatio";
    function yF(a) {
        var b = null;
        return b
    }
    yF.D = "internal.getElementsByCssSelector";
    function zF(a) {
        var b = void 0;
        return b
    }
    zF.D = "internal.getEventData";
    var AF = {};
    AF.enableAWFledge = R(21);
    AF.enableAdsConversionValidation = R(12);
    AF.enableAutoPiiOnPhoneAndAddress = R(20);
    AF.enableCachedEcommerceData = R(25);
    AF.enableCcdPreAutoPiiDetection = R(26);
    AF.enableCloudRecommentationsErrorLogging = R(30);
    AF.enableCloudRecommentationsSchemaIngestion = R(31);
    AF.enableCloudRetailInjectPurchaseMetadata = R(33);
    AF.enableCloudRetailLogging = R(32);
    AF.enableCloudRetailPageCategories = R(34);
    AF.enableConsentDisclosureActivity = R(36);
    AF.enableDCFledge = R(41);
    AF.enableDecodeUri = R(50);
    AF.enableDeferAllEnhancedMeasurement = R(42);
    AF.enableEuidAutoMode = R(45);
    AF.enableFormSkipValidation = R(48);
    AF.enableUrlDecodeEventUsage = R(85);
    AF.enableZoneConfigInChildContainers = R(87);
    AF.loadContainerForGtmEventTags = R(90);
    AF.useEnableAutoEventOnFormApis = R(99);
    AF.autoPiiEligible = kj();
    function BF() {
        return md(AF)
    }
    BF.D = "internal.getFlags";
    function CF() {
        return new jd(pz)
    }
    CF.D = "internal.getHtmlId";
    function DF(a, b) {
        var c;
        return c
    }
    DF.D = "internal.getProductSettingsParameter";
    function EF(a, b) {
        var c;
        return c
    }
    EF.P = "getQueryParameters";
    function FF(a, b) {
        var c;
        return c
    }
    FF.P = "getReferrerQueryParameters";
    function GF(a) {
        var b = "";
        return b
    }
    GF.P = "getReferrerUrl";
    function HF() {
        return gj()
    }
    HF.D = "internal.getRegionCode";
    function IF(a, b) {
        var c;
        return c
    }
    IF.D = "internal.getRemoteConfigParameter";
    function JF(a) {
        var b = "";
        return b
    }
    JF.P = "getUrl";
    function KF() {
        L(this, "get_user_agent");
        return Bc.userAgent
    }
    KF.P = "getUserAgent";
    function RF() {
        return z.gaGlobal = z.gaGlobal || {}
    }
    var SF = function() {
        var a = RF();
        a.hid = a.hid || Ja();
        return a.hid
    }
      , TF = function(a, b) {
        var c = RF();
        if (void 0 == c.vid || b && !c.from_cookie)
            c.vid = a,
            c.from_cookie = b
    };
    var AG = function(a) {
        this.s = a;
        this.C = "";
        this.h = this.s
    }
      , BG = function(a, b) {
        a.h = b;
        return a
    }
      , CG = function(a, b) {
        a.F = b;
        return a
    };
    function DG(a) {
        var b = a.search;
        return a.protocol + "//" + a.hostname + a.pathname + (b ? b + "&richsstsse" : "?richsstsse")
    }
    function EG(a, b, c) {
        if (a) {
            var d = a || [];
            if (Array.isArray(d))
                for (var e = lb(b) ? b : {}, f = fa(d), g = f.next(); !g.done; g = f.next())
                    c(g.value, e)
        }
    }
    ;var UG = window
      , VG = document
      , WG = function(a) {
        var b = UG._gaUserPrefs;
        if (b && b.ioo && b.ioo() || VG.documentElement.hasAttribute("data-google-analytics-opt-out") || a && !0 === UG["ga-disable-" + a])
            return !0;
        try {
            var c = UG.external;
            if (c && c._gaUserPrefs && "oo" == c._gaUserPrefs)
                return !0
        } catch (f) {}
        for (var d = Nn("AMP_TOKEN", String(VG.cookie), !0), e = 0; e < d.length; e++)
            if ("$OPT_OUT" == d[e])
                return !0;
        return VG.getElementById("__gaOptOutExtension") ? !0 : !1
    };
    function eH(a) {
        l(a, function(c) {
            "_" === c.charAt(0) && delete a[c]
        });
        var b = a[N.g.ab] || {};
        l(b, function(c) {
            "_" === c.charAt(0) && delete b[c]
        })
    }
    ;var mH = function(a, b) {};
    function lH(a, b) {
        var c = function() {};
        return c
    }
    function nH(a, b, c) {}
    ;var oH = lH;
    function qH(a, b, c) {
        var d = this;
    }
    qH.D = "internal.gtagConfig";
    function rH() {
        var a = {};
        return a
    }
    ;function tH(a, b) {}
    tH.P = "gtagSet";
    function uH(a, b) {}
    uH.P = "injectHiddenIframe";
    function vH(a, b, c, d, e) {}
    vH.D = "internal.injectHtml";
    var zH = {};
    function BH(a, b, c, d) {}
    var CH = Object.freeze({
        dl: 1,
        id: 1
    })
      , DH = {};
    function EH(a, b, c, d) {}
    BH.P = "injectScript";
    EH.D = "internal.injectScript";
    function FH(a) {
        var b = !0;
        return b
    }
    FH.P = "isConsentGranted";
    function GH(a) {
        var b = !1;
        return b
    }
    GH.D = "internal.isEntityInfrastructure";
    var HH = function() {
        var a = hh(function(b) {
            this.h.h.log("error", b)
        });
        a.P = "JSON";
        return a
    };
    function IH(a) {
        var b = void 0;
        return md(b)
    }
    IH.D = "internal.legacyParseUrl";
    var JH = function() {
        return !1
    }
      , KH = {
        getItem: function(a) {
            var b = null;
            return b
        },
        setItem: function(a, b) {
            return !1
        },
        removeItem: function(a) {}
    };
    function LH() {}
    LH.P = "logToConsole";
    function MH(a, b) {}
    MH.D = "internal.mergeRemoteConfig";
    function NH(a, b, c) {
        c = void 0 === c ? !0 : c;
        var d = [];
        return md(d)
    }
    NH.D = "internal.parseCookieValuesFromString";
    function OH(a) {
        var b = void 0;
        return b
    }
    OH.P = "parseUrl";
    function PH(a) {}
    PH.D = "internal.processAsNewEvent";
    function QH(a, b, c) {
        var d;
        return d
    }
    QH.D = "internal.pushToDataLayer";
    function RH(a, b) {
        var c = !1;
        return c
    }
    RH.P = "queryPermission";
    function SH() {
        var a = "";
        return a
    }
    SH.P = "readCharacterSet";
    function TH() {
        return ri.ja
    }
    TH.D = "internal.readDataLayerName";
    function UH() {
        var a = "";
        return a
    }
    UH.P = "readTitle";
    function VH(a, b) {
        var c = this;
    }
    VH.D = "internal.registerCcdCallback";
    function WH(a) {
        return !0
    }
    WH.D = "internal.registerDestination";
    var XH = Object.freeze(["config", "event", "get", "set"]);
    function YH(a, b, c) {}
    YH.D = "internal.registerGtagCommandListener";
    function ZH(a, b) {
        var c = !1;
        return c
    }
    ZH.D = "internal.removeDataLayerEventListener";
    function $H(a, b) {}
    $H.D = "internal.removeFormData";
    function aI() {}
    aI.P = "resetDataLayer";
    function bI(a, b, c, d) {}
    bI.D = "internal.sendGtagEvent";
    function cI(a, b, c) {}
    cI.P = "sendPixel";
    function dI(a, b) {}
    dI.D = "internal.setAnchorHref";
    function eI(a, b, c, d) {
        var e = this;
        d = void 0 === d ? !0 : d;
        var f = !1;
        return f
    }
    eI.P = "setCookie";
    function fI(a) {}
    fI.D = "internal.setCorePlatformServices";
    function gI(a, b) {}
    gI.D = "internal.setDataLayerValue";
    function hI(a) {}
    hI.P = "setDefaultConsentState";
    function iI(a, b) {}
    iI.D = "internal.setDelegatedConsentType";
    function jI(a, b) {}
    jI.D = "internal.setFormAction";
    function kI(a, b, c) {
        return !1
    }
    kI.P = "setInWindow";
    function lI(a, b, c) {}
    lI.D = "internal.setProductSettingsParameter";
    function mI(a, b, c) {}
    mI.D = "internal.setRemoteConfigParameter";
    function nI(a, b) {
        var c = this;
    }
    nI.D = "internal.setupConversionLinker";
    function oI(a, b, c, d) {
        var e = this;
    }
    oI.P = "sha256";
    function pI(a, b, c) {}
    pI.D = "internal.sortRemoteConfigParameters";
    var qI = {}
      , rI = {};
    qI.P = "templateStorage";
    qI.getItem = function(a) {
        var b = null;
        return b
    }
    ;
    qI.setItem = function(a, b) {}
    ;
    qI.removeItem = function(a) {}
    ;
    qI.clear = function() {}
    ;
    function sI(a, b) {
        var c = !1;
        return c
    }
    sI.D = "internal.testRegex";
    var tI = function(a) {
        var b;
        return b
    };
    function uI(a) {
        var b;
        return b
    }
    uI.D = "internal.unsiloId";
    function vI(a) {}
    vI.P = "updateConsentState";
    var wI;
    function xI(a, b, c) {
        wI = wI || new vh;
        wI.add(a, b, c)
    }
    function yI(a, b) {
        var c = wI = wI || new vh;
        if (c.s.hasOwnProperty(a))
            throw "Attempting to add a private function which already exists: " + a + ".";
        if (c.h.hasOwnProperty(a))
            throw "Attempting to add a private function with an existing API name: " + a + ".";
        c.s[a] = Ea(b) ? Og(a, b) : Pg(a, b)
    }
    function zI() {
        return function(a) {
            var b;
            var c = wI;
            if (c.h.hasOwnProperty(a))
                b = c.get(a, this);
            else {
                var d;
                if (d = c.s.hasOwnProperty(a)) {
                    var e = !1
                      , f = this.h.h;
                    if (f) {
                        var g = f.hc();
                        if (g) {
                            0 !== g.indexOf("__cvt_") && (e = !0);
                        }
                    } else
                        e = !0;
                    d = e
                }
                if (d) {
                    var h = c.s.hasOwnProperty(a) ? c.s[a] : void 0;
                    b = h
                } else
                    throw Error(a + " is not a valid API name.");
            }
            return b
        }
    }
    ;var AI = function() {
        var a = function(c) {
            return yI(c.D, c)
        }
          , b = function(c) {
            return xI(c.P, c)
        };
        b(VA);
        b(aB);
        b(UB);
        b(XB);
        b(YB);
        b(bC);
        b(dC);
        b(gC);
        b(HH());
        b(iC);
        b(oF);
        b(pF);
        b(EF);
        b(FF);
        b(GF);
        b(JF);
        b(tH);
        b(uH);
        b(BH);
        b(FH);
        b(LH);
        b(OH);
        b(RH);
        b(SH);
        b(UH);
        b(cI);
        b(eI);
        b(hI);
        b(kI);
        b(oI);
        b(qI);
        b(vI);
        xI("Math", Ug());
        xI("Object", th);
        xI("TestHelper", xh());
        xI("assertApi", Qg);
        xI("assertThat", Rg);
        xI("decodeUri", Vg);
        xI("decodeUriComponent", Wg);
        xI("encodeUri", Xg);
        xI("encodeUriComponent", Yg);
        xI("fail", dh);
        xI("generateRandom", eh);
        xI("getTimestamp", fh);
        xI("getTimestampMillis", fh);
        xI("getType", gh);
        xI("makeInteger", ih);
        xI("makeNumber", jh);
        xI("makeString", kh);
        xI("makeTableMap", ph);
        xI("mock", sh);
        xI("fromBase64", mF, !("atob"in z));
        xI("localStorage", KH, !JH());
        xI("toBase64", tI, !("btoa"in z));
        a(YA);
        a(fB);
        a(rB);
        a(yB);
        a(DB);
        a(JB);
        a(SB);
        a(VB);
        a(ZB);
        a($B);
        a(cC);
        a(eC);
        a(fC);
        a(hC);
        a(jC);
        a(kC);
        a(lC);
        a(mC);
        a(nC);
        a(rC);
        a(wC);
        a(xC);
        a(IC);
        a(NC);
        a(SC);
        a(aD);
        a(fD);
        a(sD);
        a(uD);
        a(HD);
        a(Zg);
        a(JD);
        a(kF);
        a(lF);
        a(qF);
        a(rF);
        a(sF);
        a(tF);
        a(uF);
        a(vF);
        a(wF);
        a(xF);
        a(yF);
        a(zF);
        a(BF);
        a(CF);
        a(DF);
        a(HF);
        a(IF);
        a(qH);
        a(vH);
        a(EH);
        a(GH);
        a(IH);
        a(HB);
        a(MH);
        a(NH);
        a(PH);
        a(QH);
        a(TH);
        a(VH);
        a(WH);
        a(YH);
        a(ZH);
        a($H);
        a(bI);
        a(dI);
        a(fI);
        a(gI);
        a(iI);
        a(jI);
        a(lI);
        a(mI);
        a(nI);
        a(pI);
        a(sI);
        a(uI);
        yI("internal.GtagSchema", rH());
        return zI()
    };
    var TA;
    function BI() {
        TA.h.h.M = function(a, b, c) {
            si.SANDBOXED_JS_SEMAPHORE = si.SANDBOXED_JS_SEMAPHORE || 0;
            si.SANDBOXED_JS_SEMAPHORE++;
            try {
                return a.apply(b, c)
            } finally {
                si.SANDBOXED_JS_SEMAPHORE--
            }
        }
    }
    function CI(a) {
        void 0 !== a && l(a, function(b, c) {
            for (var d = 0; d < c.length; d++) {
                var e = c[d].replace(/^_*/, "");
                Ii[e] = Ii[e] || [];
                Ii[e].push(b)
            }
        })
    }
    ;var DI = encodeURI
      , X = encodeURIComponent
      , EI = function(a, b, c) {
        Lc(a, b, c)
    }
      , FI = function(a, b) {
        if (!a)
            return !1;
        var c = rj(vj(a), "host");
        if (!c)
            return !1;
        for (var d = 0; b && d < b.length; d++) {
            var e = b[d] && b[d].toLowerCase();
            if (e) {
                var f = c.length - e.length;
                0 < f && "." != e.charAt(0) && (f--,
                e = "." + e);
                if (0 <= f && c.indexOf(e, f) == f)
                    return !0
            }
        }
        return !1
    }
      , GI = function(a, b, c) {
        for (var d = {}, e = !1, f = 0; a && f < a.length; f++)
            a[f] && a[f].hasOwnProperty(b) && a[f].hasOwnProperty(c) && (d[a[f][b]] = a[f][c],
            e = !0);
        return e ? d : null
    };
    var Z = {
        securityGroups: {}
    };
    Z.securityGroups.e = ["google"],
    function() {
        (function(a) {
            Z.__e = a;
            Z.__e.m = "e";
            Z.__e.isVendorTemplate = !0;
            Z.__e.priorityOverride = 0;
            Z.__e.isInfrastructure = !0;
            Z.__e.runInSiloedMode = !0
        }
        )(function(a) {
            return String(a.vtp_gtmCachedValues.event)
        })
    }();
    Z.securityGroups.v = ["google"],
    function() {
        (function(a) {
            Z.__v = a;
            Z.__v.m = "v";
            Z.__v.isVendorTemplate = !0;
            Z.__v.priorityOverride = 0;
            Z.__v.isInfrastructure = !0;
            Z.__v.runInSiloedMode = !1
        }
        )(function(a) {
            var b = a.vtp_name;
            if (!b || !b.replace)
                return !1;
            var c = dA(b.replace(/\\\./g, "."), a.vtp_dataLayerVersion || 1);
            return void 0 !== c ? c : a.vtp_defaultValue
        })
    }();

    Z.securityGroups.rep = ["google"],
    function() {
        (function(a) {
            Z.__rep = a;
            Z.__rep.m = "rep";
            Z.__rep.isVendorTemplate = !0;
            Z.__rep.priorityOverride = 0;
            Z.__rep.isInfrastructure = !1;
            Z.__rep.runInSiloedMode = !0
        }
        )(function(a) {
            var b = ck(a.vtp_containerId), c = Cl(b, !0), d;
            switch (c.prefix) {
            case "AW":
                d = LD;
                break;
            case "DC":
                d = aE;
                break;
            case "GF":
                d = gE;
                break;
            case "HA":
                d = lE;
                break;
            case "UA":
                d = JE;
                break;
            case "MC":
                d = oH(c, a.vtp_gtmEventId);
                break;
            default:
                H(a.vtp_gtmOnFailure);
                return
            }
            d ? (H(a.vtp_gtmOnSuccess),
            lm(b, d),
            a.vtp_remoteConfig && qm(b, a.vtp_remoteConfig || {})) : H(a.vtp_gtmOnFailure)
        })
    }();

    Z.securityGroups.read_container_data = ["google"],
    function() {
        (function(a) {
            Z.__read_container_data = a;
            Z.__read_container_data.m = "read_container_data";
            Z.__read_container_data.isVendorTemplate = !0;
            Z.__read_container_data.priorityOverride = 0;
            Z.__read_container_data.isInfrastructure = !1;
            Z.__read_container_data.runInSiloedMode = !1
        }
        )(function() {
            return {
                assert: function() {},
                K: function() {
                    return {}
                }
            }
        })
    }();

    Z.securityGroups.get = ["google"],
    function() {
        (function(a) {
            Z.__get = a;
            Z.__get.m = "get";
            Z.__get.isVendorTemplate = !0;
            Z.__get.priorityOverride = 0;
            Z.__get.isInfrastructure = !1;
            Z.__get.runInSiloedMode = !1
        }
        )(function(a) {
            var b = a.vtp_settings
              , c = b.eventParameters || {}
              , d = String(a.vtp_eventName)
              , e = {};
            e.eventId = a.vtp_gtmEventId;
            e.priorityId = a.vtp_gtmPriorityId;
            a.vtp_deferrable && (e.deferrable = !0);
            var f = lx(String(b.streamId), d, c);
            ox(f, e.eventId, e);
            a.vtp_gtmOnSuccess()
        })
    }();

    var bK = {};
    bK.dataLayer = Ti;
    bK.callback = function(a) {
        Hi.hasOwnProperty(a) && Ea(Hi[a]) && Hi[a]();
        delete Hi[a]
    }
    ;
    bK.bootstrap = 0;
    bK._spx = !1;
    function cK() {
        si[Wj()] = si[Wj()] || bK;
        fk();
        jk() || l(kk(), function(d, e) {
            Kv(d, e.transportUrl, e.context);
            M(92)
        });
        Wa(Ii, Z.securityGroups);
        var a = Yj(Zj()), b, c = null == a ? void 0 : null == (b = a.context) ? void 0 : b.source;
        2 !== c && 4 !== c && 3 !== c || M(142);
        vf = Mf
    }
    (function(a) {
        function b() {
            m = C.documentElement.getAttribute("data-tag-assistant-present");
            Sy(m) && (h = g.Vk)
        }
        if (!z["__TAGGY_INSTALLED"]) {
            var c = !1;
            if (C.referrer) {
                var d = vj(C.referrer);
                c = "cct.google" === qj(d, "host")
            }
            if (!c) {
                var e = Qn("googTaggyReferrer");
                c = e.length && e[0].length
            }
            c && (z["__TAGGY_INSTALLED"] = !0,
            Ic("https://cct.google/taggy/agent.js"))
        }
        if (Ci)
            a();
        else {
            var f = function(u) {
                var v = "GTM"
                  , w = "GTM";
                yi ? (v = "OGT",
                w = "GTAG") : Ci && (w = v = "OPT");
                var x = z["google.tagmanager.debugui2.queue"];
                x || (x = [],
                z["google.tagmanager.debugui2.queue"] = x,
                Ic("https://" + ri.Bd + "/debug/bootstrap?id=" + Vf.ctid + "&src=" + w + "&cond=" + u + "&gtm=" + Mn()));
                var y = {
                    messageType: "CONTAINER_STARTING",
                    data: {
                        scriptSource: Cc,
                        containerProduct: v,
                        debug: !1,
                        id: Vf.ctid,
                        targetRef: {
                            ctid: Vf.ctid,
                            isDestination: Oj.qe
                        },
                        aliases: Qj(),
                        destinations: Tj()
                    }
                };
                y.data.resume = function() {
                    a()
                }
                ;
                ri.wk && (y.data.initialPublish = !0);
                x.push(y)
            }
              , g = {
                Pn: 1,
                Wk: 2,
                ol: 3,
                xk: 4,
                Vk: 5
            }
              , h = void 0
              , m = void 0
              , n = rj(z.location, "query", !1, void 0, "gtm_debug");
            Sy(n) && (h = g.Wk);
            if (!h && C.referrer) {
                var p = vj(C.referrer);
                "tagassistant.google.com" === qj(p, "host") && (h = g.ol)
            }
            if (!h) {
                var q = Qn("__TAG_ASSISTANT");
                q.length && q[0].length && (h = g.xk)
            }
            h || b();
            if (!h && Ty(m)) {
                var r = function() {
                    if (t)
                        return !0;
                    t = !0;
                    b();
                    h && Cc ? f(h) : a()
                }
                  , t = !1;
                Mc(C, "TADebugSignal", function() {
                    r()
                }, !1);
                z.setTimeout(function() {
                    r()
                }, 200)
            } else
                h && Cc ? f(h) : a()
        }
    }
    )(function() {
        try {
            dk();
            if (R(61)) {}
            Pk().s();
            gn();
            (R(27) || R(28) || R(29)) && zl();
            var a = Xj();
            if (Lj().canonical[a]) {
                var b = si.zones;
                b && b.unregisterChild(Sj());
                uv().removeExternalRestrictions(Xj());
            } else {
                Li.h = "";
                Li.s = Li.F;
                Li.C = "";
                Li.Ea = "ad_storage|analytics_storage|ad_user_data|ad_personalization";
                Li.M = "ad_storage|analytics_storage|ad_user_data|ad_personalization";
                Li.W = "ad_storage|analytics_storage|ad_user_data";
                Hv();
                for (var c = data.resource || {}, d = c.macros || [], e = 0; e < d.length; e++)
                    lf.push(d[e]);
                for (var f = c.tags || [], g = 0; g < f.length; g++)
                    of.push(f[g]);
                for (var h = c.predicates || [], m = 0; m < h.length; m++)
                    nf.push(h[m]);
                for (var n = c.rules || [], p = 0; p < n.length; p++) {
                    for (var q = n[p], r = {}, t = 0; t < q.length; t++) {
                        var u = q[t][0];
                        r[u] = Array.prototype.slice.call(q[t], 1);
                        "if" !== u && "unless" !== u || uf(r[u])
                    }
                    mf.push(r)
                }
                qf = Z;
                rf = IA;
                Of = new Yf;
                var v = data.sandboxed_scripts
                  , w = data.security_groups;
                a: {
                    var x = data.runtime || []
                      , y = data.runtime_lines;
                    TA = new Ie;
                    BI();
                    kf = SA();
                    var B = TA
                      , A = AI()
                      , F = new ed("require",A);
                    F.Jb();
                    B.h.h.set("require", F);
                    for (var G = [], D = 0; D < x.length; D++) {
                        var E = x[D];
                        if (!Ha(E) || 3 > E.length) {
                            if (0 === E.length)
                                continue;
                            break a
                        }
                        y && y[D] && y[D].length && Ff(E, y[D]);
                        try {
                            TA.execute(E),
                            R(70) && tk && 50 === E[0] && G.push(E[1])
                        } catch (mb) {}
                    }
                    R(70) && (wf = G)
                }
                if (void 0 !== v)
                    for (var O = ["sandboxedScripts"], P = 0; P < v.length; P++) {
                        var T = v[P].replace(/^_*/, "");
                        Ii[T] = O
                    }
                CI(w);
                cK();
                if (!Ci)
                    for (var Y = ij() ? R(43) ? Ni(Li.W) : Ni(Li.M) : Ni(Li.Ea), S = 0; S < ml.length; S++) {
                        var U = ml[S]
                          , ja = U
                          , ha = Y[U] ? "granted" : "denied";
                        Vk().implicit(ja, ha)
                    }
                Ry();
                Lv = !1;
                Mv = 0;
                if ("interactive" == C.readyState && !C.createEventObject || "complete" == C.readyState)
                    Ov();
                else {
                    Mc(C, "DOMContentLoaded", Ov);
                    Mc(C, "readystatechange", Ov);
                    if (C.createEventObject && C.documentElement.doScroll) {
                        var ca = !0;
                        try {
                            ca = !z.frameElement
                        } catch (mb) {}
                        ca && Pv()
                    }
                    Mc(z, "load", Ov)
                }
                fy = !1;
                "complete" === C.readyState ? hy() : Mc(z, "load", hy);
                tk && (ok(Hk),
                z.setInterval(Gk, 864E5));
                ok(KA);
                ok(pw);
                ok(eu);
                ok(jm);
                ok(Aw);
                ok(Jl);
                ok(Ps);
                ok(Hl);
                R(70) && (ok(uw),
                ok(vw),
                ok(ww));
                tk && R(58) && (ok(LA),
                ok(NA));
                PA();
                R(71) && ok(Lk);
                nz();
                dj(1);
                zx();
                Gi = Ta();
                bK.bootstrap = Gi;
                if (R(61)) {}
            }
        } catch (mb) {
            if (dj(4),
            tk) {
                var Pa = Bk(!0, !0);
                Lc(Pa)
            }
        }
    });

}
)()
