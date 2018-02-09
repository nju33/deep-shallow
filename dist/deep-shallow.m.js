var t =
    'undefined' != typeof window
      ? window
      : 'undefined' != typeof global
        ? global
        : 'undefined' != typeof self ? self : {},
  e = 'object' == typeof t && t && t.Object === Object && t,
  r = {default: e, __moduleExports: e},
  o = 'object' == typeof self && self && self.Object === Object && self,
  n = (r && e) || r || o || Function('return this')(),
  u = {default: n, __moduleExports: n},
  a = (u && n) || u,
  l = a.Symbol,
  _ = {default: l, __moduleExports: l},
  i = (_ && l) || _,
  f = Object.prototype,
  s = f.hasOwnProperty,
  d = f.toString,
  c = i ? i.toStringTag : void 0;
var p = function(t) {
    var e = s.call(t, c),
      r = t[c];
    try {
      t[c] = void 0;
      var o = !0;
    } catch (t) {}
    var n = d.call(t);
    return o && (e ? (t[c] = r) : delete t[c]), n;
  },
  v = {default: p, __moduleExports: p},
  h = Object.prototype.toString;
var y = function(t) {
    return h.call(t);
  },
  m = {default: y, __moduleExports: y},
  x = (v && p) || v,
  E = (m && y) || m,
  b = '[object Null]',
  g = '[object Undefined]',
  j = i ? i.toStringTag : void 0;
var O = function(t) {
    return null == t
      ? void 0 === t ? g : b
      : j && j in Object(t) ? x(t) : E(t);
  },
  w = {default: O, __moduleExports: O};
var z = function(t) {
    var e = typeof t;
    return null != t && ('object' == e || 'function' == e);
  },
  P = {default: z, __moduleExports: z},
  S = (w && O) || w,
  $ = (P && z) || P,
  A = '[object AsyncFunction]',
  F = '[object Function]',
  k = '[object GeneratorFunction]',
  C = '[object Proxy]';
var T,
  R = function(t) {
    if (!$(t)) return !1;
    var e = S(t);
    return e == F || e == k || e == A || e == C;
  },
  G = {default: R, __moduleExports: R},
  I = a['__core-js_shared__'],
  M = {default: I, __moduleExports: I},
  N = (M && I) || M,
  U = (T = /[^.]+$/.exec((N && N.keys && N.keys.IE_PROTO) || ''))
    ? 'Symbol(src)_1.' + T
    : '';
var q = function(t) {
    return !!U && U in t;
  },
  B = {default: q, __moduleExports: q},
  D = Function.prototype.toString;
var H = function(t) {
    if (null != t) {
      try {
        return D.call(t);
      } catch (t) {}
      try {
        return t + '';
      } catch (t) {}
    }
    return '';
  },
  J = {default: H, __moduleExports: H},
  K = (G && R) || G,
  L = (B && q) || B,
  Q = (J && H) || J,
  V = /^\[object .+?Constructor\]$/,
  W = Function.prototype,
  X = Object.prototype,
  Y = RegExp(
    '^' +
      W.toString
        .call(X.hasOwnProperty)
        .replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
        .replace(
          /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
          '$1.*?'
        ) +
      '$'
  );
var Z = function(t) {
    return !(!$(t) || L(t)) && (K(t) ? Y : V).test(Q(t));
  },
  tt = {default: Z, __moduleExports: Z};
var et = function(t, e) {
    return null == t ? void 0 : t[e];
  },
  rt = {default: et, __moduleExports: et},
  ot = (tt && Z) || tt,
  nt = (rt && et) || rt;
var ut = function(t, e) {
    var r = nt(t, e);
    return ot(r) ? r : void 0;
  },
  at = {default: ut, __moduleExports: ut},
  lt = (at && ut) || at,
  _t = (function() {
    try {
      var t = lt(Object, 'defineProperty');
      return t({}, '', {}), t;
    } catch (t) {}
  })(),
  it = {default: _t, __moduleExports: _t},
  ft = (it && _t) || it;
var st = function(t, e, r) {
    '__proto__' == e && ft
      ? ft(t, e, {configurable: !0, enumerable: !0, value: r, writable: !0})
      : (t[e] = r);
  },
  dt = {default: st, __moduleExports: st};
var ct = function(t, e) {
    return t === e || (t != t && e != e);
  },
  pt = {default: ct, __moduleExports: ct},
  vt = (dt && st) || dt,
  ht = (pt && ct) || pt,
  yt = Object.prototype.hasOwnProperty;
var mt = function(t, e, r) {
    var o = t[e];
    (yt.call(t, e) && ht(o, r) && (void 0 !== r || e in t)) || vt(t, e, r);
  },
  xt = {default: mt, __moduleExports: mt},
  Et = Array.isArray,
  bt = {default: Et, __moduleExports: Et};
var gt = function(t) {
    return null != t && 'object' == typeof t;
  },
  jt = {default: gt, __moduleExports: gt},
  Ot = (jt && gt) || jt,
  wt = '[object Symbol]';
var zt = function(t) {
    return 'symbol' == typeof t || (Ot(t) && S(t) == wt);
  },
  Pt = {default: zt, __moduleExports: zt},
  St = (bt && Et) || bt,
  $t = (Pt && zt) || Pt,
  At = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
  Ft = /^\w*$/;
var kt = function(t, e) {
    if (St(t)) return !1;
    var r = typeof t;
    return (
      !(
        'number' != r &&
        'symbol' != r &&
        'boolean' != r &&
        null != t &&
        !$t(t)
      ) ||
      Ft.test(t) ||
      !At.test(t) ||
      (null != e && t in Object(e))
    );
  },
  Ct = {default: kt, __moduleExports: kt},
  Tt = lt(Object, 'create'),
  Rt = {default: Tt, __moduleExports: Tt},
  Gt = (Rt && Tt) || Rt;
var It = function() {
    (this.__data__ = Gt ? Gt(null) : {}), (this.size = 0);
  },
  Mt = {default: It, __moduleExports: It};
var Nt = function(t) {
    var e = this.has(t) && delete this.__data__[t];
    return (this.size -= e ? 1 : 0), e;
  },
  Ut = {default: Nt, __moduleExports: Nt},
  qt = '__lodash_hash_undefined__',
  Bt = Object.prototype.hasOwnProperty;
var Dt = function(t) {
    var e = this.__data__;
    if (Gt) {
      var r = e[t];
      return r === qt ? void 0 : r;
    }
    return Bt.call(e, t) ? e[t] : void 0;
  },
  Ht = {default: Dt, __moduleExports: Dt},
  Jt = Object.prototype.hasOwnProperty;
var Kt = function(t) {
    var e = this.__data__;
    return Gt ? void 0 !== e[t] : Jt.call(e, t);
  },
  Lt = {default: Kt, __moduleExports: Kt},
  Qt = '__lodash_hash_undefined__';
var Vt = function(t, e) {
    var r = this.__data__;
    return (
      (this.size += this.has(t) ? 0 : 1),
      (r[t] = Gt && void 0 === e ? Qt : e),
      this
    );
  },
  Wt = {default: Vt, __moduleExports: Vt},
  Xt = (Ut && Nt) || Ut,
  Yt = (Ht && Dt) || Ht,
  Zt = (Lt && Kt) || Lt,
  te = (Wt && Vt) || Wt;
function ee(t) {
  var e = -1,
    r = null == t ? 0 : t.length;
  for (this.clear(); ++e < r; ) {
    var o = t[e];
    this.set(o[0], o[1]);
  }
}
(ee.prototype.clear = (Mt && It) || Mt),
  (ee.prototype.delete = Xt),
  (ee.prototype.get = Yt),
  (ee.prototype.has = Zt),
  (ee.prototype.set = te);
var re = ee,
  oe = {default: re, __moduleExports: re};
var ne = function() {
    (this.__data__ = []), (this.size = 0);
  },
  ue = {default: ne, __moduleExports: ne};
var ae = function(t, e) {
    for (var r = t.length; r--; ) if (ht(t[r][0], e)) return r;
    return -1;
  },
  le = {default: ae, __moduleExports: ae},
  _e = (le && ae) || le,
  ie = Array.prototype.splice;
var fe = function(t) {
    var e = this.__data__,
      r = _e(e, t);
    return !(
      r < 0 || (r == e.length - 1 ? e.pop() : ie.call(e, r, 1), --this.size, 0)
    );
  },
  se = {default: fe, __moduleExports: fe};
var de = function(t) {
    var e = this.__data__,
      r = _e(e, t);
    return r < 0 ? void 0 : e[r][1];
  },
  ce = {default: de, __moduleExports: de};
var pe = function(t) {
    return _e(this.__data__, t) > -1;
  },
  ve = {default: pe, __moduleExports: pe};
var he = function(t, e) {
    var r = this.__data__,
      o = _e(r, t);
    return o < 0 ? (++this.size, r.push([t, e])) : (r[o][1] = e), this;
  },
  ye = {default: he, __moduleExports: he},
  me = (se && fe) || se,
  xe = (ce && de) || ce,
  Ee = (ve && pe) || ve,
  be = (ye && he) || ye;
function ge(t) {
  var e = -1,
    r = null == t ? 0 : t.length;
  for (this.clear(); ++e < r; ) {
    var o = t[e];
    this.set(o[0], o[1]);
  }
}
(ge.prototype.clear = (ue && ne) || ue),
  (ge.prototype.delete = me),
  (ge.prototype.get = xe),
  (ge.prototype.has = Ee),
  (ge.prototype.set = be);
var je = ge,
  Oe = {default: je, __moduleExports: je},
  we = lt(a, 'Map'),
  ze = {default: we, __moduleExports: we},
  Pe = (oe && re) || oe,
  Se = (Oe && je) || Oe,
  $e = (ze && we) || ze;
var Ae = function() {
    (this.size = 0),
      (this.__data__ = {
        hash: new Pe(),
        map: new ($e || Se)(),
        string: new Pe()
      });
  },
  Fe = {default: Ae, __moduleExports: Ae};
var ke = function(t) {
    var e = typeof t;
    return 'string' == e || 'number' == e || 'symbol' == e || 'boolean' == e
      ? '__proto__' !== t
      : null === t;
  },
  Ce = {default: ke, __moduleExports: ke},
  Te = (Ce && ke) || Ce;
var Re = function(t, e) {
    var r = t.__data__;
    return Te(e) ? r['string' == typeof e ? 'string' : 'hash'] : r.map;
  },
  Ge = {default: Re, __moduleExports: Re},
  Ie = (Ge && Re) || Ge;
var Me = function(t) {
    var e = Ie(this, t).delete(t);
    return (this.size -= e ? 1 : 0), e;
  },
  Ne = {default: Me, __moduleExports: Me};
var Ue = function(t) {
    return Ie(this, t).get(t);
  },
  qe = {default: Ue, __moduleExports: Ue};
var Be = function(t) {
    return Ie(this, t).has(t);
  },
  De = {default: Be, __moduleExports: Be};
var He = function(t, e) {
    var r = Ie(this, t),
      o = r.size;
    return r.set(t, e), (this.size += r.size == o ? 0 : 1), this;
  },
  Je = {default: He, __moduleExports: He},
  Ke = (Ne && Me) || Ne,
  Le = (qe && Ue) || qe,
  Qe = (De && Be) || De,
  Ve = (Je && He) || Je;
function We(t) {
  var e = -1,
    r = null == t ? 0 : t.length;
  for (this.clear(); ++e < r; ) {
    var o = t[e];
    this.set(o[0], o[1]);
  }
}
(We.prototype.clear = (Fe && Ae) || Fe),
  (We.prototype.delete = Ke),
  (We.prototype.get = Le),
  (We.prototype.has = Qe),
  (We.prototype.set = Ve);
var Xe = {default: We, __moduleExports: We},
  Ye = (Xe && We) || Xe,
  Ze = 'Expected a function';
function tr(t, e) {
  if ('function' != typeof t || (null != e && 'function' != typeof e))
    throw new TypeError(Ze);
  var r = function() {
    var o = arguments,
      n = e ? e.apply(this, o) : o[0],
      u = r.cache;
    if (u.has(n)) return u.get(n);
    var a = t.apply(this, o);
    return (r.cache = u.set(n, a) || u), a;
  };
  return (r.cache = new (tr.Cache || Ye)()), r;
}
tr.Cache = Ye;
var er = {default: tr, __moduleExports: tr},
  rr = (er && tr) || er,
  or = 500;
var nr = function(t) {
    var e = rr(t, function(t) {
        return r.size === or && r.clear(), t;
      }),
      r = e.cache;
    return e;
  },
  ur = {default: nr, __moduleExports: nr},
  ar = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
  lr = /\\(\\)?/g,
  _r = ((ur && nr) || ur)(function(t) {
    var e = [];
    return (
      46 === t.charCodeAt(0) && e.push(''),
      t.replace(ar, function(t, r, o, n) {
        e.push(o ? n.replace(lr, '$1') : r || t);
      }),
      e
    );
  }),
  ir = {default: _r, __moduleExports: _r};
var fr = function(t, e) {
    for (var r = -1, o = null == t ? 0 : t.length, n = Array(o); ++r < o; )
      n[r] = e(t[r], r, t);
    return n;
  },
  sr = {default: fr, __moduleExports: fr},
  dr = (sr && fr) || sr,
  cr = 1 / 0,
  pr = i ? i.prototype : void 0,
  vr = pr ? pr.toString : void 0;
var hr = function t(e) {
    if ('string' == typeof e) return e;
    if (St(e)) return dr(e, t) + '';
    if ($t(e)) return vr ? vr.call(e) : '';
    var r = e + '';
    return '0' == r && 1 / e == -cr ? '-0' : r;
  },
  yr = {default: hr, __moduleExports: hr},
  mr = (yr && hr) || yr;
var xr = function(t) {
    return null == t ? '' : mr(t);
  },
  Er = {default: xr, __moduleExports: xr},
  br = (Ct && kt) || Ct,
  gr = (ir && _r) || ir,
  jr = (Er && xr) || Er;
var Or = function(t, e) {
    return St(t) ? t : br(t, e) ? [t] : gr(jr(t));
  },
  wr = {default: Or, __moduleExports: Or},
  zr = 9007199254740991,
  Pr = /^(?:0|[1-9]\d*)$/;
var Sr = function(t, e) {
    var r = typeof t;
    return (
      !!(e = null == e ? zr : e) &&
      ('number' == r || ('symbol' != r && Pr.test(t))) &&
      t > -1 &&
      t % 1 == 0 &&
      t < e
    );
  },
  $r = {default: Sr, __moduleExports: Sr},
  Ar = 1 / 0;
var Fr = function(t) {
    if ('string' == typeof t || $t(t)) return t;
    var e = t + '';
    return '0' == e && 1 / t == -Ar ? '-0' : e;
  },
  kr = {default: Fr, __moduleExports: Fr},
  Cr = (xt && mt) || xt,
  Tr = (wr && Or) || wr,
  Rr = ($r && Sr) || $r,
  Gr = (kr && Fr) || kr;
var Ir = function(t, e, r, o) {
    if (!$(t)) return t;
    for (
      var n = -1, u = (e = Tr(e, t)).length, a = u - 1, l = t;
      null != l && ++n < u;

    ) {
      var _ = Gr(e[n]),
        i = r;
      if (n != a) {
        var f = l[_];
        void 0 === (i = o ? o(f, _, l) : void 0) &&
          (i = $(f) ? f : Rr(e[n + 1]) ? [] : {});
      }
      Cr(l, _, i), (l = l[_]);
    }
    return t;
  },
  Mr = {default: Ir, __moduleExports: Ir},
  Nr = (Mr && Ir) || Mr;
var Ur = function(t, e, r) {
  return null == t ? t : Nr(t, e, r);
};
const qr =
  Object.assign ||
  function(t) {
    for (var e, r = 1; r < arguments.length; r++)
      for (var o in (e = arguments[r]))
        Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
    return t;
  };
var Br = function(t, e) {
    return (
      void 0 === e && (e = []),
      Object.keys(t).reduce(function(r, o) {
        var n,
          u = e.concat([o]),
          a = t[o];
        return 'object' != typeof a || Array.isArray(a)
          ? qr({}, r, (((n = {})[u.join('.')] = a), n))
          : qr({}, r, Br(a, u));
      }, {})
    );
  },
  Dr = function(t) {
    return (function(t) {
      return Object.keys(t).reduce(function(e, r) {
        return Ur(e, r, t[r]);
      }, {});
    })(t);
  },
  Hr = function(t) {
    return Br(t);
  };
export {Dr as toDeep, Hr as toShallow};
//# sourceMappingURL=deep-shallow.m.js.map
