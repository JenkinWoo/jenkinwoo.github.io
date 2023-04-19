
function pt(o) {
  if (o === void 0)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return o
}
function Vi(o, t) {
  o.prototype = Object.create(t.prototype),
  o.prototype.constructor = o,
  o.__proto__ = t
}
/*!
* GSAP 3.11.4
* https://greensock.com
*
* @license Copyright 2008-2022, GreenSock. All rights reserved.
* Subject to the terms at https://greensock.com/standard-license or for
* Club GreenSock members, the agreement issued with that membership.
* @author: Jack Doyle, jack@greensock.com
*/
var et = {
  autoSleep: 120,
  force3D: "auto",
  nullTargetWarn: 1,
  units: {
      lineHeight: ""
  }
}, Ht = {
  duration: .5,
  overwrite: !1,
  delay: 0
}, ai, G, V, at = 1e8, D = 1 / at, We = Math.PI * 2, qr = We / 4, Wr = 0, Yi = Math.sqrt, Gr = Math.cos, $r = Math.sin, X = function(t) {
  return typeof t == "string"
}, z = function(t) {
  return typeof t == "function"
}, yt = function(t) {
  return typeof t == "number"
}, oi = function(t) {
  return typeof t > "u"
}, ct = function(t) {
  return typeof t == "object"
}, Q = function(t) {
  return t !== !1
}, Ui = function() {
  return typeof window < "u"
}, ye = function(t) {
  return z(t) || X(t)
}, Xi = typeof ArrayBuffer == "function" && ArrayBuffer.isView || function() {}
, $ = Array.isArray, Ge = /(?:-?\.?\d|\.)+/gi, qi = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, Xt = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, Le = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, Wi = /[+-]=-?[.\d]+/, Gi = /[^,'"\[\]\s]+/gi, Hr = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, R, st, $e, ui, it = {}, be = {}, $i, Hi = function(t) {
  return (be = Vt(t, it)) && rt
}, fi = function(t, e) {
  return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()")
}, Pe = function(t, e) {
  return !e && console.warn(t)
}, Ki = function(t, e) {
  return t && (it[t] = e) && be && (be[t] = e) || it
}, he = function() {
  return 0
}, Kr = {
  suppressEvents: !0,
  isStart: !0,
  kill: !1
}, ve = {
  suppressEvents: !0,
  kill: !1
}, Qr = {
  suppressEvents: !0
}, hi = {}, bt = [], He = {}, Qi, J = {}, Ie = {}, bi = 30, Te = [], _i = "", li = function(t) {
  var e = t[0], i, r;
  if (ct(e) || z(e) || (t = [t]),
  !(i = (e._gsap || {}).harness)) {
      for (r = Te.length; r-- && !Te[r].targetTest(e); )
          ;
      i = Te[r]
  }
  for (r = t.length; r--; )
      t[r] && (t[r]._gsap || (t[r]._gsap = new yr(t[r],i))) || t.splice(r, 1);
  return t
}, It = function(t) {
  return t._gsap || li(ot(t))[0]._gsap
}, Zi = function(t, e, i) {
  return (i = t[e]) && z(i) ? t[e]() : oi(i) && t.getAttribute && t.getAttribute(e) || i
}, Z = function(t, e) {
  return (t = t.split(",")).forEach(e) || t
}, L = function(t) {
  return Math.round(t * 1e5) / 1e5 || 0
}, q = function(t) {
  return Math.round(t * 1e7) / 1e7 || 0
}, Wt = function(t, e) {
  var i = e.charAt(0)
    , r = parseFloat(e.substr(2));
  return t = parseFloat(t),
  i === "+" ? t + r : i === "-" ? t - r : i === "*" ? t * r : t / r
}, Zr = function(t, e) {
  for (var i = e.length, r = 0; t.indexOf(e[r]) < 0 && ++r < i; )
      ;
  return r < i
}, Se = function() {
  var t = bt.length, e = bt.slice(0), i, r;
  for (He = {},
  bt.length = 0,
  i = 0; i < t; i++)
      r = e[i],
      r && r._lazy && (r.render(r._lazy[0], r._lazy[1], !0)._lazy = 0)
}, ji = function(t, e, i, r) {
  bt.length && !G && Se(),
  t.render(e, i, r || G && e < 0 && (t._initted || t._startAt)),
  bt.length && !G && Se()
}, Ji = function(t) {
  var e = parseFloat(t);
  return (e || e === 0) && (t + "").match(Gi).length < 2 ? e : X(t) ? t.trim() : t
}, tr = function(t) {
  return t
}, ft = function(t, e) {
  for (var i in e)
      i in t || (t[i] = e[i]);
  return t
}, jr = function(t) {
  return function(e, i) {
      for (var r in i)
          r in e || r === "duration" && t || r === "ease" || (e[r] = i[r])
  }
}, Vt = function(t, e) {
  for (var i in e)
      t[i] = e[i];
  return t
}, Pi = function o(t, e) {
  for (var i in e)
      i !== "__proto__" && i !== "constructor" && i !== "prototype" && (t[i] = ct(e[i]) ? o(t[i] || (t[i] = {}), e[i]) : e[i]);
  return t
}, ke = function(t, e) {
  var i = {}, r;
  for (r in t)
      r in e || (i[r] = t[r]);
  return i
}, oe = function(t) {
  var e = t.parent || R
    , i = t.keyframes ? jr($(t.keyframes)) : ft;
  if (Q(t.inherit))
      for (; e; )
          i(t, e.vars.defaults),
          e = e.parent || e._dp;
  return t
}, Jr = function(t, e) {
  for (var i = t.length, r = i === e.length; r && i-- && t[i] === e[i]; )
      ;
  return i < 0
}, er = function(t, e, i, r, n) {
  i === void 0 && (i = "_first"),
  r === void 0 && (r = "_last");
  var s = t[r], a;
  if (n)
      for (a = e[n]; s && s[n] > a; )
          s = s._prev;
  return s ? (e._next = s._next,
  s._next = e) : (e._next = t[i],
  t[i] = e),
  e._next ? e._next._prev = e : t[r] = e,
  e._prev = s,
  e.parent = e._dp = t,
  e
}, Re = function(t, e, i, r) {
  i === void 0 && (i = "_first"),
  r === void 0 && (r = "_last");
  var n = e._prev
    , s = e._next;
  n ? n._next = s : t[i] === e && (t[i] = s),
  s ? s._prev = n : t[r] === e && (t[r] = n),
  e._next = e._prev = e.parent = null
}, St = function(t, e) {
  t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove(t),
  t._act = 0
}, Bt = function(t, e) {
  if (t && (!e || e._end > t._dur || e._start < 0))
      for (var i = t; i; )
          i._dirty = 1,
          i = i.parent;
  return t
}, tn = function(t) {
  for (var e = t.parent; e && e.parent; )
      e._dirty = 1,
      e.totalDuration(),
      e = e.parent;
  return t
}, Ke = function(t, e, i, r) {
  return t._startAt && (G ? t._startAt.revert(ve) : t.vars.immediateRender && !t.vars.autoRevert || t._startAt.render(e, !0, r))
}, en = function o(t) {
  return !t || t._ts && o(t.parent)
}, Si = function(t) {
  return t._repeat ? Kt(t._tTime, t = t.duration() + t._rDelay) * t : 0
}, Kt = function(t, e) {
  var i = Math.floor(t /= e);
  return t && i === t ? i - 1 : i
}, Oe = function(t, e) {
  return (t - e._start) * e._ts + (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur)
}, Ee = function(t) {
  return t._end = q(t._start + (t._tDur / Math.abs(t._ts || t._rts || D) || 0))
}, Fe = function(t, e) {
  var i = t._dp;
  return i && i.smoothChildTiming && t._ts && (t._start = q(i._time - (t._ts > 0 ? e / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)),
  Ee(t),
  i._dirty || Bt(i, t)),
  t
}, ir = function(t, e) {
  var i;
  if ((e._time || e._initted && !e._dur) && (i = Oe(t.rawTime(), e),
  (!e._dur || ge(0, e.totalDuration(), i) - e._tTime > D) && e.render(i, !0)),
  Bt(t, e)._dp && t._initted && t._time >= t._dur && t._ts) {
      if (t._dur < t.duration())
          for (i = t; i._dp; )
              i.rawTime() >= 0 && i.totalTime(i._tTime),
              i = i._dp;
      t._zTime = -D
  }
}, _t = function(t, e, i, r) {
  return e.parent && St(e),
  e._start = q((yt(i) ? i : i || t !== R ? nt(t, i, e) : t._time) + e._delay),
  e._end = q(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)),
  er(t, e, "_first", "_last", t._sort ? "_start" : 0),
  Qe(e) || (t._recent = e),
  r || ir(t, e),
  t._ts < 0 && Fe(t, t._tTime),
  t
}, rr = function(t, e) {
  return (it.ScrollTrigger || fi("scrollTrigger", e)) && it.ScrollTrigger.create(e, t)
}, nr = function(t, e, i, r, n) {
  if (di(t, e, n),
  !t._initted)
      return 1;
  if (!i && t._pt && !G && (t._dur && t.vars.lazy !== !1 || !t._dur && t.vars.lazy) && Qi !== tt.frame)
      return bt.push(t),
      t._lazy = [n, r],
      1
}, rn = function o(t) {
  var e = t.parent;
  return e && e._ts && e._initted && !e._lock && (e.rawTime() < 0 || o(e))
}, Qe = function(t) {
  var e = t.data;
  return e === "isFromStart" || e === "isStart"
}, nn = function(t, e, i, r) {
  var n = t.ratio, s = e < 0 || !e && (!t._start && rn(t) && !(!t._initted && Qe(t)) || (t._ts < 0 || t._dp._ts < 0) && !Qe(t)) ? 0 : 1, a = t._rDelay, u = 0, f, h, l;
  if (a && t._repeat && (u = ge(0, t._tDur, e),
  h = Kt(u, a),
  t._yoyo && h & 1 && (s = 1 - s),
  h !== Kt(t._tTime, a) && (n = 1 - s,
  t.vars.repeatRefresh && t._initted && t.invalidate())),
  s !== n || G || r || t._zTime === D || !e && t._zTime) {
      if (!t._initted && nr(t, e, r, i, u))
          return;
      for (l = t._zTime,
      t._zTime = e || (i ? D : 0),
      i || (i = e && !l),
      t.ratio = s,
      t._from && (s = 1 - s),
      t._time = 0,
      t._tTime = u,
      f = t._pt; f; )
          f.r(s, f.d),
          f = f._next;
      e < 0 && Ke(t, e, i, !0),
      t._onUpdate && !i && ut(t, "onUpdate"),
      u && t._repeat && !i && t.parent && ut(t, "onRepeat"),
      (e >= t._tDur || e < 0) && t.ratio === s && (s && St(t, 1),
      !i && !G && (ut(t, s ? "onComplete" : "onReverseComplete", !0),
      t._prom && t._prom()))
  } else
      t._zTime || (t._zTime = e)
}, sn = function(t, e, i) {
  var r;
  if (i > e)
      for (r = t._first; r && r._start <= i; ) {
          if (r.data === "isPause" && r._start > e)
              return r;
          r = r._next
      }
  else
      for (r = t._last; r && r._start >= i; ) {
          if (r.data === "isPause" && r._start < e)
              return r;
          r = r._prev
      }
}, Qt = function(t, e, i, r) {
  var n = t._repeat
    , s = q(e) || 0
    , a = t._tTime / t._tDur;
  return a && !r && (t._time *= s / t._dur),
  t._dur = s,
  t._tDur = n ? n < 0 ? 1e10 : q(s * (n + 1) + t._rDelay * n) : s,
  a > 0 && !r && Fe(t, t._tTime = t._tDur * a),
  t.parent && Ee(t),
  i || Bt(t.parent, t),
  t
}, ki = function(t) {
  return t instanceof K ? Bt(t) : Qt(t, t._dur)
}, an = {
  _start: 0,
  endTime: he,
  totalDuration: he
}, nt = function o(t, e, i) {
  var r = t.labels, n = t._recent || an, s = t.duration() >= at ? n.endTime(!1) : t._dur, a, u, f;
  return X(e) && (isNaN(e) || e in r) ? (u = e.charAt(0),
  f = e.substr(-1) === "%",
  a = e.indexOf("="),
  u === "<" || u === ">" ? (a >= 0 && (e = e.replace(/=/, "")),
  (u === "<" ? n._start : n.endTime(n._repeat >= 0)) + (parseFloat(e.substr(1)) || 0) * (f ? (a < 0 ? n : i).totalDuration() / 100 : 1)) : a < 0 ? (e in r || (r[e] = s),
  r[e]) : (u = parseFloat(e.charAt(a - 1) + e.substr(a + 1)),
  f && i && (u = u / 100 * ($(i) ? i[0] : i).totalDuration()),
  a > 1 ? o(t, e.substr(0, a - 1), i) + u : s + u)) : e == null ? s : +e
}, ue = function(t, e, i) {
  var r = yt(e[1]), n = (r ? 2 : 1) + (t < 2 ? 0 : 1), s = e[n], a, u;
  if (r && (s.duration = e[1]),
  s.parent = i,
  t) {
      for (a = s,
      u = i; u && !("immediateRender"in a); )
          a = u.vars.defaults || {},
          u = Q(u.vars.inherit) && u.parent;
      s.immediateRender = Q(a.immediateRender),
      t < 2 ? s.runBackwards = 1 : s.startAt = e[n - 1]
  }
  return new U(e[0],s,e[n + 1])
}, Ot = function(t, e) {
  return t || t === 0 ? e(t) : e
}, ge = function(t, e, i) {
  return i < t ? t : i > e ? e : i
}, W = function(t, e) {
  return !X(t) || !(e = Hr.exec(t)) ? "" : e[1]
}, on = function(t, e, i) {
  return Ot(i, function(r) {
      return ge(t, e, r)
  })
}, Ze = [].slice, sr = function(t, e) {
  return t && ct(t) && "length"in t && (!e && !t.length || t.length - 1 in t && ct(t[0])) && !t.nodeType && t !== st
}, un = function(t, e, i) {
  return i === void 0 && (i = []),
  t.forEach(function(r) {
      var n;
      return X(r) && !e || sr(r, 1) ? (n = i).push.apply(n, ot(r)) : i.push(r)
  }) || i
}, ot = function(t, e, i) {
  return V && !e && V.selector ? V.selector(t) : X(t) && !i && ($e || !Zt()) ? Ze.call((e || ui).querySelectorAll(t), 0) : $(t) ? un(t, i) : sr(t) ? Ze.call(t, 0) : t ? [t] : []
}, je = function(t) {
  return t = ot(t)[0] || Pe("Invalid scope") || {},
  function(e) {
      var i = t.current || t.nativeElement || t;
      return ot(e, i.querySelectorAll ? i : i === t ? Pe("Invalid scope") || ui.createElement("div") : t)
  }
}, ar = function(t) {
  return t.sort(function() {
      return .5 - Math.random()
  })
}, or = function(t) {
  if (z(t))
      return t;
  var e = ct(t) ? t : {
      each: t
  }
    , i = Nt(e.ease)
    , r = e.from || 0
    , n = parseFloat(e.base) || 0
    , s = {}
    , a = r > 0 && r < 1
    , u = isNaN(r) || a
    , f = e.axis
    , h = r
    , l = r;
  return X(r) ? h = l = {
      center: .5,
      edges: .5,
      end: 1
  }[r] || 0 : !a && u && (h = r[0],
  l = r[1]),
  function(c, d, p) {
      var _ = (p || e).length, m = s[_], g, y, v, T, x, S, P, b, w;
      if (!m) {
          if (w = e.grid === "auto" ? 0 : (e.grid || [1, at])[1],
          !w) {
              for (P = -at; P < (P = p[w++].getBoundingClientRect().left) && w < _; )
                  ;
              w--
          }
          for (m = s[_] = [],
          g = u ? Math.min(w, _) * h - .5 : r % w,
          y = w === at ? 0 : u ? _ * l / w - .5 : r / w | 0,
          P = 0,
          b = at,
          S = 0; S < _; S++)
              v = S % w - g,
              T = y - (S / w | 0),
              m[S] = x = f ? Math.abs(f === "y" ? T : v) : Yi(v * v + T * T),
              x > P && (P = x),
              x < b && (b = x);
          r === "random" && ar(m),
          m.max = P - b,
          m.min = b,
          m.v = _ = (parseFloat(e.amount) || parseFloat(e.each) * (w > _ ? _ - 1 : f ? f === "y" ? _ / w : w : Math.max(w, _ / w)) || 0) * (r === "edges" ? -1 : 1),
          m.b = _ < 0 ? n - _ : n,
          m.u = W(e.amount || e.each) || 0,
          i = i && _ < 0 ? pr(i) : i
      }
      return _ = (m[c] - m.min) / m.max || 0,
      q(m.b + (i ? i(_) : _) * m.v) + m.u
  }
}, Je = function(t) {
  var e = Math.pow(10, ((t + "").split(".")[1] || "").length);
  return function(i) {
      var r = q(Math.round(parseFloat(i) / t) * t * e);
      return (r - r % 1) / e + (yt(i) ? 0 : W(i))
  }
}, ur = function(t, e) {
  var i = $(t), r, n;
  return !i && ct(t) && (r = i = t.radius || at,
  t.values ? (t = ot(t.values),
  (n = !yt(t[0])) && (r *= r)) : t = Je(t.increment)),
  Ot(e, i ? z(t) ? function(s) {
      return n = t(s),
      Math.abs(n - s) <= r ? n : s
  }
  : function(s) {
      for (var a = parseFloat(n ? s.x : s), u = parseFloat(n ? s.y : 0), f = at, h = 0, l = t.length, c, d; l--; )
          n ? (c = t[l].x - a,
          d = t[l].y - u,
          c = c * c + d * d) : c = Math.abs(t[l] - a),
          c < f && (f = c,
          h = l);
      return h = !r || f <= r ? t[h] : s,
      n || h === s || yt(s) ? h : h + W(s)
  }
  : Je(t))
}, fr = function(t, e, i, r) {
  return Ot($(t) ? !e : i === !0 ? !!(i = 0) : !r, function() {
      return $(t) ? t[~~(Math.random() * t.length)] : (i = i || 1e-5) && (r = i < 1 ? Math.pow(10, (i + "").length - 2) : 1) && Math.floor(Math.round((t - i / 2 + Math.random() * (e - t + i * .99)) / i) * i * r) / r
  })
}, fn = function() {
  for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
      e[i] = arguments[i];
  return function(r) {
      return e.reduce(function(n, s) {
          return s(n)
      }, r)
  }
}, hn = function(t, e) {
  return function(i) {
      return t(parseFloat(i)) + (e || W(i))
  }
}, _n = function(t, e, i) {
  return _r(t, e, 0, 1, i)
}, hr = function(t, e, i) {
  return Ot(i, function(r) {
      return t[~~e(r)]
  })
}, ln = function o(t, e, i) {
  var r = e - t;
  return $(t) ? hr(t, o(0, t.length), e) : Ot(i, function(n) {
      return (r + (n - t) % r) % r + t
  })
}, cn = function o(t, e, i) {
  var r = e - t
    , n = r * 2;
  return $(t) ? hr(t, o(0, t.length - 1), e) : Ot(i, function(s) {
      return s = (n + (s - t) % n) % n || 0,
      t + (s > r ? n - s : s)
  })
}, _e = function(t) {
  for (var e = 0, i = "", r, n, s, a; ~(r = t.indexOf("random(", e)); )
      s = t.indexOf(")", r),
      a = t.charAt(r + 7) === "[",
      n = t.substr(r + 7, s - r - 7).match(a ? Gi : Ge),
      i += t.substr(e, r - e) + fr(a ? n : +n[0], a ? 0 : +n[1], +n[2] || 1e-5),
      e = s + 1;
  return i + t.substr(e, t.length - e)
}, _r = function(t, e, i, r, n) {
  var s = e - t
    , a = r - i;
  return Ot(n, function(u) {
      return i + ((u - t) / s * a || 0)
  })
}, dn = function o(t, e, i, r) {
  var n = isNaN(t + e) ? 0 : function(d) {
      return (1 - d) * t + d * e
  }
  ;
  if (!n) {
      var s = X(t), a = {}, u, f, h, l, c;
      if (i === !0 && (r = 1) && (i = null),
      s)
          t = {
              p: t
          },
          e = {
              p: e
          };
      else if ($(t) && !$(e)) {
          for (h = [],
          l = t.length,
          c = l - 2,
          f = 1; f < l; f++)
              h.push(o(t[f - 1], t[f]));
          l--,
          n = function(p) {
              p *= l;
              var _ = Math.min(c, ~~p);
              return h[_](p - _)
          }
          ,
          i = e
      } else
          r || (t = Vt($(t) ? [] : {}, t));
      if (!h) {
          for (u in e)
              ci.call(a, t, u, "get", e[u]);
          n = function(p) {
              return gi(p, a) || (s ? t.p : t)
          }
      }
  }
  return Ot(i, n)
}, Oi = function(t, e, i) {
  var r = t.labels, n = at, s, a, u;
  for (s in r)
      a = r[s] - e,
      a < 0 == !!i && a && n > (a = Math.abs(a)) && (u = s,
      n = a);
  return u
}, ut = function(t, e, i) {
  var r = t.vars, n = r[e], s = V, a = t._ctx, u, f, h;
  if (n)
      return u = r[e + "Params"],
      f = r.callbackScope || t,
      i && bt.length && Se(),
      a && (V = a),
      h = u ? n.apply(f, u) : n.call(f),
      V = s,
      h
}, ne = function(t) {
  return St(t),
  t.scrollTrigger && t.scrollTrigger.kill(!!G),
  t.progress() < 1 && ut(t, "onInterrupt"),
  t
}, qt, pn = function(t) {
  t = !t.name && t.default || t;
  var e = t.name
    , i = z(t)
    , r = e && !i && t.init ? function() {
      this._props = []
  }
  : t
    , n = {
      init: he,
      render: gi,
      add: ci,
      kill: An,
      modifier: Dn,
      rawVars: 0
  }
    , s = {
      targetTest: 0,
      get: 0,
      getSetter: mi,
      aliases: {},
      register: 0
  };
  if (Zt(),
  t !== r) {
      if (J[e])
          return;
      ft(r, ft(ke(t, n), s)),
      Vt(r.prototype, Vt(n, ke(t, s))),
      J[r.prop = e] = r,
      t.targetTest && (Te.push(r),
      hi[e] = 1),
      e = (e === "css" ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin"
  }
  Ki(e, r),
  t.register && t.register(rt, r, j)
}, M = 255, se = {
  aqua: [0, M, M],
  lime: [0, M, 0],
  silver: [192, 192, 192],
  black: [0, 0, 0],
  maroon: [128, 0, 0],
  teal: [0, 128, 128],
  blue: [0, 0, M],
  navy: [0, 0, 128],
  white: [M, M, M],
  olive: [128, 128, 0],
  yellow: [M, M, 0],
  orange: [M, 165, 0],
  gray: [128, 128, 128],
  purple: [128, 0, 128],
  green: [0, 128, 0],
  red: [M, 0, 0],
  pink: [M, 192, 203],
  cyan: [0, M, M],
  transparent: [M, M, M, 0]
}, Be = function(t, e, i) {
  return t += t < 0 ? 1 : t > 1 ? -1 : 0,
  (t * 6 < 1 ? e + (i - e) * t * 6 : t < .5 ? i : t * 3 < 2 ? e + (i - e) * (2 / 3 - t) * 6 : e) * M + .5 | 0
}, lr = function(t, e, i) {
  var r = t ? yt(t) ? [t >> 16, t >> 8 & M, t & M] : 0 : se.black, n, s, a, u, f, h, l, c, d, p;
  if (!r) {
      if (t.substr(-1) === "," && (t = t.substr(0, t.length - 1)),
      se[t])
          r = se[t];
      else if (t.charAt(0) === "#") {
          if (t.length < 6 && (n = t.charAt(1),
          s = t.charAt(2),
          a = t.charAt(3),
          t = "#" + n + n + s + s + a + a + (t.length === 5 ? t.charAt(4) + t.charAt(4) : "")),
          t.length === 9)
              return r = parseInt(t.substr(1, 6), 16),
              [r >> 16, r >> 8 & M, r & M, parseInt(t.substr(7), 16) / 255];
          t = parseInt(t.substr(1), 16),
          r = [t >> 16, t >> 8 & M, t & M]
      } else if (t.substr(0, 3) === "hsl") {
          if (r = p = t.match(Ge),
          !e)
              u = +r[0] % 360 / 360,
              f = +r[1] / 100,
              h = +r[2] / 100,
              s = h <= .5 ? h * (f + 1) : h + f - h * f,
              n = h * 2 - s,
              r.length > 3 && (r[3] *= 1),
              r[0] = Be(u + 1 / 3, n, s),
              r[1] = Be(u, n, s),
              r[2] = Be(u - 1 / 3, n, s);
          else if (~t.indexOf("="))
              return r = t.match(qi),
              i && r.length < 4 && (r[3] = 1),
              r
      } else
          r = t.match(Ge) || se.transparent;
      r = r.map(Number)
  }
  return e && !p && (n = r[0] / M,
  s = r[1] / M,
  a = r[2] / M,
  l = Math.max(n, s, a),
  c = Math.min(n, s, a),
  h = (l + c) / 2,
  l === c ? u = f = 0 : (d = l - c,
  f = h > .5 ? d / (2 - l - c) : d / (l + c),
  u = l === n ? (s - a) / d + (s < a ? 6 : 0) : l === s ? (a - n) / d + 2 : (n - s) / d + 4,
  u *= 60),
  r[0] = ~~(u + .5),
  r[1] = ~~(f * 100 + .5),
  r[2] = ~~(h * 100 + .5)),
  i && r.length < 4 && (r[3] = 1),
  r
}, cr = function(t) {
  var e = []
    , i = []
    , r = -1;
  return t.split(Pt).forEach(function(n) {
      var s = n.match(Xt) || [];
      e.push.apply(e, s),
      i.push(r += s.length + 1)
  }),
  e.c = i,
  e
}, Ci = function(t, e, i) {
  var r = "", n = (t + r).match(Pt), s = e ? "hsla(" : "rgba(", a = 0, u, f, h, l;
  if (!n)
      return t;
  if (n = n.map(function(c) {
      return (c = lr(c, e, 1)) && s + (e ? c[0] + "," + c[1] + "%," + c[2] + "%," + c[3] : c.join(",")) + ")"
  }),
  i && (h = cr(t),
  u = i.c,
  u.join(r) !== h.c.join(r)))
      for (f = t.replace(Pt, "1").split(Xt),
      l = f.length - 1; a < l; a++)
          r += f[a] + (~u.indexOf(a) ? n.shift() || s + "0,0,0,0)" : (h.length ? h : n.length ? n : i).shift());
  if (!f)
      for (f = t.split(Pt),
      l = f.length - 1; a < l; a++)
          r += f[a] + n[a];
  return r + f[l]
}, Pt = function() {
  var o = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", t;
  for (t in se)
      o += "|" + t + "\\b";
  return new RegExp(o + ")","gi")
}(), mn = /hsl[a]?\(/, dr = function(t) {
  var e = t.join(" "), i;
  if (Pt.lastIndex = 0,
  Pt.test(e))
      return i = mn.test(e),
      t[1] = Ci(t[1], i),
      t[0] = Ci(t[0], i, cr(t[1])),
      !0
}, le, tt = function() {
  var o = Date.now, t = 500, e = 33, i = o(), r = i, n = 1e3 / 240, s = n, a = [], u, f, h, l, c, d, p = function _(m) {
      var g = o() - r, y = m === !0, v, T, x, S;
      if (g > t && (i += g - e),
      r += g,
      x = r - i,
      v = x - s,
      (v > 0 || y) && (S = ++l.frame,
      c = x - l.time * 1e3,
      l.time = x = x / 1e3,
      s += v + (v >= n ? 4 : n - v),
      T = 1),
      y || (u = f(_)),
      T)
          for (d = 0; d < a.length; d++)
              a[d](x, c, S, m)
  };
  return l = {
      time: 0,
      frame: 0,
      tick: function() {
          p(!0)
      },
      deltaRatio: function(m) {
          return c / (1e3 / (m || 60))
      },
      wake: function() {
          $i && (!$e && Ui() && (st = $e = window,
          ui = st.document || {},
          it.gsap = rt,
          (st.gsapVersions || (st.gsapVersions = [])).push(rt.version),
          Hi(be || st.GreenSockGlobals || !st.gsap && st || {}),
          h = st.requestAnimationFrame),
          u && l.sleep(),
          f = h || function(m) {
              return setTimeout(m, s - l.time * 1e3 + 1 | 0)
          }
          ,
          le = 1,
          p(2))
      },
      sleep: function() {
          (h ? st.cancelAnimationFrame : clearTimeout)(u),
          le = 0,
          f = he
      },
      lagSmoothing: function(m, g) {
          t = m || 1 / 0,
          e = Math.min(g || 33, t)
      },
      fps: function(m) {
          n = 1e3 / (m || 240),
          s = l.time * 1e3 + n
      },
      add: function(m, g, y) {
          var v = g ? function(T, x, S, P) {
              m(T, x, S, P),
              l.remove(v)
          }
          : m;
          return l.remove(m),
          a[y ? "unshift" : "push"](v),
          Zt(),
          v
      },
      remove: function(m, g) {
          ~(g = a.indexOf(m)) && a.splice(g, 1) && d >= g && d--
      },
      _listeners: a
  },
  l
}(), Zt = function() {
  return !le && tt.wake()
}, k = {}, gn = /^[\d.\-M][\d.\-,\s]/, yn = /["']/g, xn = function(t) {
  for (var e = {}, i = t.substr(1, t.length - 3).split(":"), r = i[0], n = 1, s = i.length, a, u, f; n < s; n++)
      u = i[n],
      a = n !== s - 1 ? u.lastIndexOf(",") : u.length,
      f = u.substr(0, a),
      e[r] = isNaN(f) ? f.replace(yn, "").trim() : +f,
      r = u.substr(a + 1).trim();
  return e
}, vn = function(t) {
  var e = t.indexOf("(") + 1
    , i = t.indexOf(")")
    , r = t.indexOf("(", e);
  return t.substring(e, ~r && r < i ? t.indexOf(")", i + 1) : i)
}, Tn = function(t) {
  var e = (t + "").split("(")
    , i = k[e[0]];
  return i && e.length > 1 && i.config ? i.config.apply(null, ~t.indexOf("{") ? [xn(e[1])] : vn(t).split(",").map(Ji)) : k._CE && gn.test(t) ? k._CE("", t) : i
}, pr = function(t) {
  return function(e) {
      return 1 - t(1 - e)
  }
}, mr = function o(t, e) {
  for (var i = t._first, r; i; )
      i instanceof K ? o(i, e) : i.vars.yoyoEase && (!i._yoyo || !i._repeat) && i._yoyo !== e && (i.timeline ? o(i.timeline, e) : (r = i._ease,
      i._ease = i._yEase,
      i._yEase = r,
      i._yoyo = e)),
      i = i._next
}, Nt = function(t, e) {
  return t && (z(t) ? t : k[t] || Tn(t)) || e
}, Yt = function(t, e, i, r) {
  i === void 0 && (i = function(u) {
      return 1 - e(1 - u)
  }
  ),
  r === void 0 && (r = function(u) {
      return u < .5 ? e(u * 2) / 2 : 1 - e((1 - u) * 2) / 2
  }
  );
  var n = {
      easeIn: e,
      easeOut: i,
      easeInOut: r
  }, s;
  return Z(t, function(a) {
      k[a] = it[a] = n,
      k[s = a.toLowerCase()] = i;
      for (var u in n)
          k[s + (u === "easeIn" ? ".in" : u === "easeOut" ? ".out" : ".inOut")] = k[a + "." + u] = n[u]
  }),
  n
}, gr = function(t) {
  return function(e) {
      return e < .5 ? (1 - t(1 - e * 2)) / 2 : .5 + t((e - .5) * 2) / 2
  }
}, Ne = function o(t, e, i) {
  var r = e >= 1 ? e : 1
    , n = (i || (t ? .3 : .45)) / (e < 1 ? e : 1)
    , s = n / We * (Math.asin(1 / r) || 0)
    , a = function(h) {
      return h === 1 ? 1 : r * Math.pow(2, -10 * h) * $r((h - s) * n) + 1
  }
    , u = t === "out" ? a : t === "in" ? function(f) {
      return 1 - a(1 - f)
  }
  : gr(a);
  return n = We / n,
  u.config = function(f, h) {
      return o(t, f, h)
  }
  ,
  u
}, Ve = function o(t, e) {
  e === void 0 && (e = 1.70158);
  var i = function(s) {
      return s ? --s * s * ((e + 1) * s + e) + 1 : 0
  }
    , r = t === "out" ? i : t === "in" ? function(n) {
      return 1 - i(1 - n)
  }
  : gr(i);
  return r.config = function(n) {
      return o(t, n)
  }
  ,
  r
};
Z("Linear,Quad,Cubic,Quart,Quint,Strong", function(o, t) {
  var e = t < 5 ? t + 1 : t;
  Yt(o + ",Power" + (e - 1), t ? function(i) {
      return Math.pow(i, e)
  }
  : function(i) {
      return i
  }
  , function(i) {
      return 1 - Math.pow(1 - i, e)
  }, function(i) {
      return i < .5 ? Math.pow(i * 2, e) / 2 : 1 - Math.pow((1 - i) * 2, e) / 2
  })
});
k.Linear.easeNone = k.none = k.Linear.easeIn;
Yt("Elastic", Ne("in"), Ne("out"), Ne());
(function(o, t) {
  var e = 1 / t
    , i = 2 * e
    , r = 2.5 * e
    , n = function(a) {
      return a < e ? o * a * a : a < i ? o * Math.pow(a - 1.5 / t, 2) + .75 : a < r ? o * (a -= 2.25 / t) * a + .9375 : o * Math.pow(a - 2.625 / t, 2) + .984375
  };
  Yt("Bounce", function(s) {
      return 1 - n(1 - s)
  }, n)
}
)(7.5625, 2.75);
Yt("Expo", function(o) {
  return o ? Math.pow(2, 10 * (o - 1)) : 0
});
Yt("Circ", function(o) {
  return -(Yi(1 - o * o) - 1)
});
Yt("Sine", function(o) {
  return o === 1 ? 1 : -Gr(o * qr) + 1
});
Yt("Back", Ve("in"), Ve("out"), Ve());
k.SteppedEase = k.steps = it.SteppedEase = {
  config: function(t, e) {
      t === void 0 && (t = 1);
      var i = 1 / t
        , r = t + (e ? 0 : 1)
        , n = e ? 1 : 0
        , s = 1 - D;
      return function(a) {
          return ((r * ge(0, s, a) | 0) + n) * i
      }
  }
};
Ht.ease = k["quad.out"];
Z("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(o) {
  return _i += o + "," + o + "Params,"
});
var yr = function(t, e) {
  this.id = Wr++,
  t._gsap = this,
  this.target = t,
  this.harness = e,
  this.get = e ? e.get : Zi,
  this.set = e ? e.getSetter : mi
}
, jt = function() {
  function o(e) {
      this.vars = e,
      this._delay = +e.delay || 0,
      (this._repeat = e.repeat === 1 / 0 ? -2 : e.repeat || 0) && (this._rDelay = e.repeatDelay || 0,
      this._yoyo = !!e.yoyo || !!e.yoyoEase),
      this._ts = 1,
      Qt(this, +e.duration, 1, 1),
      this.data = e.data,
      V && (this._ctx = V,
      V.data.push(this)),
      le || tt.wake()
  }
  var t = o.prototype;
  return t.delay = function(i) {
      return i || i === 0 ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + i - this._delay),
      this._delay = i,
      this) : this._delay
  }
  ,
  t.duration = function(i) {
      return arguments.length ? this.totalDuration(this._repeat > 0 ? i + (i + this._rDelay) * this._repeat : i) : this.totalDuration() && this._dur
  }
  ,
  t.totalDuration = function(i) {
      return arguments.length ? (this._dirty = 0,
      Qt(this, this._repeat < 0 ? i : (i - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
  }
  ,
  t.totalTime = function(i, r) {
      if (Zt(),
      !arguments.length)
          return this._tTime;
      var n = this._dp;
      if (n && n.smoothChildTiming && this._ts) {
          for (Fe(this, i),
          !n._dp || n.parent || ir(n, this); n && n.parent; )
              n.parent._time !== n._start + (n._ts >= 0 ? n._tTime / n._ts : (n.totalDuration() - n._tTime) / -n._ts) && n.totalTime(n._tTime, !0),
              n = n.parent;
          !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && i < this._tDur || this._ts < 0 && i > 0 || !this._tDur && !i) && _t(this._dp, this, this._start - this._delay)
      }
      return (this._tTime !== i || !this._dur && !r || this._initted && Math.abs(this._zTime) === D || !i && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = i),
      ji(this, i, r)),
      this
  }
  ,
  t.time = function(i, r) {
      return arguments.length ? this.totalTime(Math.min(this.totalDuration(), i + Si(this)) % (this._dur + this._rDelay) || (i ? this._dur : 0), r) : this._time
  }
  ,
  t.totalProgress = function(i, r) {
      return arguments.length ? this.totalTime(this.totalDuration() * i, r) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio
  }
  ,
  t.progress = function(i, r) {
      return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - i : i) + Si(this), r) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio
  }
  ,
  t.iteration = function(i, r) {
      var n = this.duration() + this._rDelay;
      return arguments.length ? this.totalTime(this._time + (i - 1) * n, r) : this._repeat ? Kt(this._tTime, n) + 1 : 1
  }
  ,
  t.timeScale = function(i) {
      if (!arguments.length)
          return this._rts === -D ? 0 : this._rts;
      if (this._rts === i)
          return this;
      var r = this.parent && this._ts ? Oe(this.parent._time, this) : this._tTime;
      return this._rts = +i || 0,
      this._ts = this._ps || i === -D ? 0 : this._rts,
      this.totalTime(ge(-this._delay, this._tDur, r), !0),
      Ee(this),
      tn(this)
  }
  ,
  t.paused = function(i) {
      return arguments.length ? (this._ps !== i && (this._ps = i,
      i ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()),
      this._ts = this._act = 0) : (Zt(),
      this._ts = this._rts,
      this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== D && (this._tTime -= D)))),
      this) : this._ps
  }
  ,
  t.startTime = function(i) {
      if (arguments.length) {
          this._start = i;
          var r = this.parent || this._dp;
          return r && (r._sort || !this.parent) && _t(r, this, i - this._delay),
          this
      }
      return this._start
  }
  ,
  t.endTime = function(i) {
      return this._start + (Q(i) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
  }
  ,
  t.rawTime = function(i) {
      var r = this.parent || this._dp;
      return r ? i && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? Oe(r.rawTime(i), this) : this._tTime : this._tTime
  }
  ,
  t.revert = function(i) {
      i === void 0 && (i = Qr);
      var r = G;
      return G = i,
      (this._initted || this._startAt) && (this.timeline && this.timeline.revert(i),
      this.totalTime(-.01, i.suppressEvents)),
      this.data !== "nested" && i.kill !== !1 && this.kill(),
      G = r,
      this
  }
  ,
  t.globalTime = function(i) {
      for (var r = this, n = arguments.length ? i : r.rawTime(); r; )
          n = r._start + n / (r._ts || 1),
          r = r._dp;
      return !this.parent && this._sat ? this._sat.vars.immediateRender ? -1 : this._sat.globalTime(i) : n
  }
  ,
  t.repeat = function(i) {
      return arguments.length ? (this._repeat = i === 1 / 0 ? -2 : i,
      ki(this)) : this._repeat === -2 ? 1 / 0 : this._repeat
  }
  ,
  t.repeatDelay = function(i) {
      if (arguments.length) {
          var r = this._time;
          return this._rDelay = i,
          ki(this),
          r ? this.time(r) : this
      }
      return this._rDelay
  }
  ,
  t.yoyo = function(i) {
      return arguments.length ? (this._yoyo = i,
      this) : this._yoyo
  }
  ,
  t.seek = function(i, r) {
      return this.totalTime(nt(this, i), Q(r))
  }
  ,
  t.restart = function(i, r) {
      return this.play().totalTime(i ? -this._delay : 0, Q(r))
  }
  ,
  t.play = function(i, r) {
      return i != null && this.seek(i, r),
      this.reversed(!1).paused(!1)
  }
  ,
  t.reverse = function(i, r) {
      return i != null && this.seek(i || this.totalDuration(), r),
      this.reversed(!0).paused(!1)
  }
  ,
  t.pause = function(i, r) {
      return i != null && this.seek(i, r),
      this.paused(!0)
  }
  ,
  t.resume = function() {
      return this.paused(!1)
  }
  ,
  t.reversed = function(i) {
      return arguments.length ? (!!i !== this.reversed() && this.timeScale(-this._rts || (i ? -D : 0)),
      this) : this._rts < 0
  }
  ,
  t.invalidate = function() {
      return this._initted = this._act = 0,
      this._zTime = -D,
      this
  }
  ,
  t.isActive = function() {
      var i = this.parent || this._dp, r = this._start, n;
      return !!(!i || this._ts && this._initted && i.isActive() && (n = i.rawTime(!0)) >= r && n < this.endTime(!0) - D)
  }
  ,
  t.eventCallback = function(i, r, n) {
      var s = this.vars;
      return arguments.length > 1 ? (r ? (s[i] = r,
      n && (s[i + "Params"] = n),
      i === "onUpdate" && (this._onUpdate = r)) : delete s[i],
      this) : s[i]
  }
  ,
  t.then = function(i) {
      var r = this;
      return new Promise(function(n) {
          var s = z(i) ? i : tr
            , a = function() {
              var f = r.then;
              r.then = null,
              z(s) && (s = s(r)) && (s.then || s === r) && (r.then = f),
              n(s),
              r.then = f
          };
          r._initted && r.totalProgress() === 1 && r._ts >= 0 || !r._tTime && r._ts < 0 ? a() : r._prom = a
      }
      )
  }
  ,
  t.kill = function() {
      ne(this)
  }
  ,
  o
}();
ft(jt.prototype, {
  _time: 0,
  _start: 0,
  _end: 0,
  _tTime: 0,
  _tDur: 0,
  _dirty: 0,
  _repeat: 0,
  _yoyo: !1,
  parent: null,
  _initted: !1,
  _rDelay: 0,
  _ts: 1,
  _dp: 0,
  ratio: 0,
  _zTime: -D,
  _prom: 0,
  _ps: !1,
  _rts: 1
});
var K = function(o) {
  Vi(t, o);
  function t(i, r) {
      var n;
      return i === void 0 && (i = {}),
      n = o.call(this, i) || this,
      n.labels = {},
      n.smoothChildTiming = !!i.smoothChildTiming,
      n.autoRemoveChildren = !!i.autoRemoveChildren,
      n._sort = Q(i.sortChildren),
      R && _t(i.parent || R, pt(n), r),
      i.reversed && n.reverse(),
      i.paused && n.paused(!0),
      i.scrollTrigger && rr(pt(n), i.scrollTrigger),
      n
  }
  var e = t.prototype;
  return e.to = function(r, n, s) {
      return ue(0, arguments, this),
      this
  }
  ,
  e.from = function(r, n, s) {
      return ue(1, arguments, this),
      this
  }
  ,
  e.fromTo = function(r, n, s, a) {
      return ue(2, arguments, this),
      this
  }
  ,
  e.set = function(r, n, s) {
      return n.duration = 0,
      n.parent = this,
      oe(n).repeatDelay || (n.repeat = 0),
      n.immediateRender = !!n.immediateRender,
      new U(r,n,nt(this, s),1),
      this
  }
  ,
  e.call = function(r, n, s) {
      return _t(this, U.delayedCall(0, r, n), s)
  }
  ,
  e.staggerTo = function(r, n, s, a, u, f, h) {
      return s.duration = n,
      s.stagger = s.stagger || a,
      s.onComplete = f,
      s.onCompleteParams = h,
      s.parent = this,
      new U(r,s,nt(this, u)),
      this
  }
  ,
  e.staggerFrom = function(r, n, s, a, u, f, h) {
      return s.runBackwards = 1,
      oe(s).immediateRender = Q(s.immediateRender),
      this.staggerTo(r, n, s, a, u, f, h)
  }
  ,
  e.staggerFromTo = function(r, n, s, a, u, f, h, l) {
      return a.startAt = s,
      oe(a).immediateRender = Q(a.immediateRender),
      this.staggerTo(r, n, a, u, f, h, l)
  }
  ,
  e.render = function(r, n, s) {
      var a = this._time, u = this._dirty ? this.totalDuration() : this._tDur, f = this._dur, h = r <= 0 ? 0 : q(r), l = this._zTime < 0 != r < 0 && (this._initted || !f), c, d, p, _, m, g, y, v, T, x, S, P;
      if (this !== R && h > u && r >= 0 && (h = u),
      h !== this._tTime || s || l) {
          if (a !== this._time && f && (h += this._time - a,
          r += this._time - a),
          c = h,
          T = this._start,
          v = this._ts,
          g = !v,
          l && (f || (a = this._zTime),
          (r || !n) && (this._zTime = r)),
          this._repeat) {
              if (S = this._yoyo,
              m = f + this._rDelay,
              this._repeat < -1 && r < 0)
                  return this.totalTime(m * 100 + r, n, s);
              if (c = q(h % m),
              h === u ? (_ = this._repeat,
              c = f) : (_ = ~~(h / m),
              _ && _ === h / m && (c = f,
              _--),
              c > f && (c = f)),
              x = Kt(this._tTime, m),
              !a && this._tTime && x !== _ && (x = _),
              S && _ & 1 && (c = f - c,
              P = 1),
              _ !== x && !this._lock) {
                  var b = S && x & 1
                    , w = b === (S && _ & 1);
                  if (_ < x && (b = !b),
                  a = b ? 0 : f,
                  this._lock = 1,
                  this.render(a || (P ? 0 : q(_ * m)), n, !f)._lock = 0,
                  this._tTime = h,
                  !n && this.parent && ut(this, "onRepeat"),
                  this.vars.repeatRefresh && !P && (this.invalidate()._lock = 1),
                  a && a !== this._time || g !== !this._ts || this.vars.onRepeat && !this.parent && !this._act)
                      return this;
                  if (f = this._dur,
                  u = this._tDur,
                  w && (this._lock = 2,
                  a = b ? f : -1e-4,
                  this.render(a, !0),
                  this.vars.repeatRefresh && !P && this.invalidate()),
                  this._lock = 0,
                  !this._ts && !g)
                      return this;
                  mr(this, P)
              }
          }
          if (this._hasPause && !this._forcing && this._lock < 2 && (y = sn(this, q(a), q(c)),
          y && (h -= c - (c = y._start))),
          this._tTime = h,
          this._time = c,
          this._act = !v,
          this._initted || (this._onUpdate = this.vars.onUpdate,
          this._initted = 1,
          this._zTime = r,
          a = 0),
          !a && c && !n && (ut(this, "onStart"),
          this._tTime !== h))
              return this;
          if (c >= a && r >= 0)
              for (d = this._first; d; ) {
                  if (p = d._next,
                  (d._act || c >= d._start) && d._ts && y !== d) {
                      if (d.parent !== this)
                          return this.render(r, n, s);
                      if (d.render(d._ts > 0 ? (c - d._start) * d._ts : (d._dirty ? d.totalDuration() : d._tDur) + (c - d._start) * d._ts, n, s),
                      c !== this._time || !this._ts && !g) {
                          y = 0,
                          p && (h += this._zTime = -D);
                          break
                      }
                  }
                  d = p
              }
          else {
              d = this._last;
              for (var O = r < 0 ? r : c; d; ) {
                  if (p = d._prev,
                  (d._act || O <= d._end) && d._ts && y !== d) {
                      if (d.parent !== this)
                          return this.render(r, n, s);
                      if (d.render(d._ts > 0 ? (O - d._start) * d._ts : (d._dirty ? d.totalDuration() : d._tDur) + (O - d._start) * d._ts, n, s || G && (d._initted || d._startAt)),
                      c !== this._time || !this._ts && !g) {
                          y = 0,
                          p && (h += this._zTime = O ? -D : D);
                          break
                      }
                  }
                  d = p
              }
          }
          if (y && !n && (this.pause(),
          y.render(c >= a ? 0 : -D)._zTime = c >= a ? 1 : -1,
          this._ts))
              return this._start = T,
              Ee(this),
              this.render(r, n, s);
          this._onUpdate && !n && ut(this, "onUpdate", !0),
          (h === u && this._tTime >= this.totalDuration() || !h && a) && (T === this._start || Math.abs(v) !== Math.abs(this._ts)) && (this._lock || ((r || !f) && (h === u && this._ts > 0 || !h && this._ts < 0) && St(this, 1),
          !n && !(r < 0 && !a) && (h || a || !u) && (ut(this, h === u && r >= 0 ? "onComplete" : "onReverseComplete", !0),
          this._prom && !(h < u && this.timeScale() > 0) && this._prom())))
      }
      return this
  }
  ,
  e.add = function(r, n) {
      var s = this;
      if (yt(n) || (n = nt(this, n, r)),
      !(r instanceof jt)) {
          if ($(r))
              return r.forEach(function(a) {
                  return s.add(a, n)
              }),
              this;
          if (X(r))
              return this.addLabel(r, n);
          if (z(r))
              r = U.delayedCall(0, r);
          else
              return this
      }
      return this !== r ? _t(this, r, n) : this
  }
  ,
  e.getChildren = function(r, n, s, a) {
      r === void 0 && (r = !0),
      n === void 0 && (n = !0),
      s === void 0 && (s = !0),
      a === void 0 && (a = -at);
      for (var u = [], f = this._first; f; )
          f._start >= a && (f instanceof U ? n && u.push(f) : (s && u.push(f),
          r && u.push.apply(u, f.getChildren(!0, n, s)))),
          f = f._next;
      return u
  }
  ,
  e.getById = function(r) {
      for (var n = this.getChildren(1, 1, 1), s = n.length; s--; )
          if (n[s].vars.id === r)
              return n[s]
  }
  ,
  e.remove = function(r) {
      return X(r) ? this.removeLabel(r) : z(r) ? this.killTweensOf(r) : (Re(this, r),
      r === this._recent && (this._recent = this._last),
      Bt(this))
  }
  ,
  e.totalTime = function(r, n) {
      return arguments.length ? (this._forcing = 1,
      !this._dp && this._ts && (this._start = q(tt.time - (this._ts > 0 ? r / this._ts : (this.totalDuration() - r) / -this._ts))),
      o.prototype.totalTime.call(this, r, n),
      this._forcing = 0,
      this) : this._tTime
  }
  ,
  e.addLabel = function(r, n) {
      return this.labels[r] = nt(this, n),
      this
  }
  ,
  e.removeLabel = function(r) {
      return delete this.labels[r],
      this
  }
  ,
  e.addPause = function(r, n, s) {
      var a = U.delayedCall(0, n || he, s);
      return a.data = "isPause",
      this._hasPause = 1,
      _t(this, a, nt(this, r))
  }
  ,
  e.removePause = function(r) {
      var n = this._first;
      for (r = nt(this, r); n; )
          n._start === r && n.data === "isPause" && St(n),
          n = n._next
  }
  ,
  e.killTweensOf = function(r, n, s) {
      for (var a = this.getTweensOf(r, s), u = a.length; u--; )
          vt !== a[u] && a[u].kill(r, n);
      return this
  }
  ,
  e.getTweensOf = function(r, n) {
      for (var s = [], a = ot(r), u = this._first, f = yt(n), h; u; )
          u instanceof U ? Zr(u._targets, a) && (f ? (!vt || u._initted && u._ts) && u.globalTime(0) <= n && u.globalTime(u.totalDuration()) > n : !n || u.isActive()) && s.push(u) : (h = u.getTweensOf(a, n)).length && s.push.apply(s, h),
          u = u._next;
      return s
  }
  ,
  e.tweenTo = function(r, n) {
      n = n || {};
      var s = this, a = nt(s, r), u = n, f = u.startAt, h = u.onStart, l = u.onStartParams, c = u.immediateRender, d, p = U.to(s, ft({
          ease: n.ease || "none",
          lazy: !1,
          immediateRender: !1,
          time: a,
          overwrite: "auto",
          duration: n.duration || Math.abs((a - (f && "time"in f ? f.time : s._time)) / s.timeScale()) || D,
          onStart: function() {
              if (s.pause(),
              !d) {
                  var m = n.duration || Math.abs((a - (f && "time"in f ? f.time : s._time)) / s.timeScale());
                  p._dur !== m && Qt(p, m, 0, 1).render(p._time, !0, !0),
                  d = 1
              }
              h && h.apply(p, l || [])
          }
      }, n));
      return c ? p.render(0) : p
  }
  ,
  e.tweenFromTo = function(r, n, s) {
      return this.tweenTo(n, ft({
          startAt: {
              time: nt(this, r)
          }
      }, s))
  }
  ,
  e.recent = function() {
      return this._recent
  }
  ,
  e.nextLabel = function(r) {
      return r === void 0 && (r = this._time),
      Oi(this, nt(this, r))
  }
  ,
  e.previousLabel = function(r) {
      return r === void 0 && (r = this._time),
      Oi(this, nt(this, r), 1)
  }
  ,
  e.currentLabel = function(r) {
      return arguments.length ? this.seek(r, !0) : this.previousLabel(this._time + D)
  }
  ,
  e.shiftChildren = function(r, n, s) {
      s === void 0 && (s = 0);
      for (var a = this._first, u = this.labels, f; a; )
          a._start >= s && (a._start += r,
          a._end += r),
          a = a._next;
      if (n)
          for (f in u)
              u[f] >= s && (u[f] += r);
      return Bt(this)
  }
  ,
  e.invalidate = function(r) {
      var n = this._first;
      for (this._lock = 0; n; )
          n.invalidate(r),
          n = n._next;
      return o.prototype.invalidate.call(this, r)
  }
  ,
  e.clear = function(r) {
      r === void 0 && (r = !0);
      for (var n = this._first, s; n; )
          s = n._next,
          this.remove(n),
          n = s;
      return this._dp && (this._time = this._tTime = this._pTime = 0),
      r && (this.labels = {}),
      Bt(this)
  }
  ,
  e.totalDuration = function(r) {
      var n = 0, s = this, a = s._last, u = at, f, h, l;
      if (arguments.length)
          return s.timeScale((s._repeat < 0 ? s.duration() : s.totalDuration()) / (s.reversed() ? -r : r));
      if (s._dirty) {
          for (l = s.parent; a; )
              f = a._prev,
              a._dirty && a.totalDuration(),
              h = a._start,
              h > u && s._sort && a._ts && !s._lock ? (s._lock = 1,
              _t(s, a, h - a._delay, 1)._lock = 0) : u = h,
              h < 0 && a._ts && (n -= h,
              (!l && !s._dp || l && l.smoothChildTiming) && (s._start += h / s._ts,
              s._time -= h,
              s._tTime -= h),
              s.shiftChildren(-h, !1, -1 / 0),
              u = 0),
              a._end > n && a._ts && (n = a._end),
              a = f;
          Qt(s, s === R && s._time > n ? s._time : n, 1, 1),
          s._dirty = 0
      }
      return s._tDur
  }
  ,
  t.updateRoot = function(r) {
      if (R._ts && (ji(R, Oe(r, R)),
      Qi = tt.frame),
      tt.frame >= bi) {
          bi += et.autoSleep || 120;
          var n = R._first;
          if ((!n || !n._ts) && et.autoSleep && tt._listeners.length < 2) {
              for (; n && !n._ts; )
                  n = n._next;
              n || tt.sleep()
          }
      }
  }
  ,
  t
}(jt);
ft(K.prototype, {
  _lock: 0,
  _hasPause: 0,
  _forcing: 0
});
var wn = function(t, e, i, r, n, s, a) {
  var u = new j(this._pt,t,e,0,1,Pr,null,n), f = 0, h = 0, l, c, d, p, _, m, g, y;
  for (u.b = i,
  u.e = r,
  i += "",
  r += "",
  (g = ~r.indexOf("random(")) && (r = _e(r)),
  s && (y = [i, r],
  s(y, t, e),
  i = y[0],
  r = y[1]),
  c = i.match(Le) || []; l = Le.exec(r); )
      p = l[0],
      _ = r.substring(f, l.index),
      d ? d = (d + 1) % 5 : _.substr(-5) === "rgba(" && (d = 1),
      p !== c[h++] && (m = parseFloat(c[h - 1]) || 0,
      u._pt = {
          _next: u._pt,
          p: _ || h === 1 ? _ : ",",
          s: m,
          c: p.charAt(1) === "=" ? Wt(m, p) - m : parseFloat(p) - m,
          m: d && d < 4 ? Math.round : 0
      },
      f = Le.lastIndex);
  return u.c = f < r.length ? r.substring(f, r.length) : "",
  u.fp = a,
  (Wi.test(r) || g) && (u.e = 0),
  this._pt = u,
  u
}, ci = function(t, e, i, r, n, s, a, u, f, h) {
  z(r) && (r = r(n || 0, t, s));
  var l = t[e], c = i !== "get" ? i : z(l) ? f ? t[e.indexOf("set") || !z(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](f) : t[e]() : l, d = z(l) ? f ? On : wr : pi, p;
  if (X(r) && (~r.indexOf("random(") && (r = _e(r)),
  r.charAt(1) === "=" && (p = Wt(c, r) + (W(c) || 0),
  (p || p === 0) && (r = p))),
  !h || c !== r || ti)
      return !isNaN(c * r) && r !== "" ? (p = new j(this._pt,t,e,+c || 0,r - (c || 0),typeof l == "boolean" ? Mn : br,0,d),
      f && (p.fp = f),
      a && p.modifier(a, this, t),
      this._pt = p) : (!l && !(e in t) && fi(e, r),
      wn.call(this, t, e, c, r, d, u || et.stringFilter, f))
}, bn = function(t, e, i, r, n) {
  if (z(t) && (t = fe(t, n, e, i, r)),
  !ct(t) || t.style && t.nodeType || $(t) || Xi(t))
      return X(t) ? fe(t, n, e, i, r) : t;
  var s = {}, a;
  for (a in t)
      s[a] = fe(t[a], n, e, i, r);
  return s
}, xr = function(t, e, i, r, n, s) {
  var a, u, f, h;
  if (J[t] && (a = new J[t]).init(n, a.rawVars ? e[t] : bn(e[t], r, n, s, i), i, r, s) !== !1 && (i._pt = u = new j(i._pt,n,t,0,1,a.render,a,0,a.priority),
  i !== qt))
      for (f = i._ptLookup[i._targets.indexOf(n)],
      h = a._props.length; h--; )
          f[a._props[h]] = u;
  return a
}, vt, ti, di = function o(t, e, i) {
  var r = t.vars, n = r.ease, s = r.startAt, a = r.immediateRender, u = r.lazy, f = r.onUpdate, h = r.onUpdateParams, l = r.callbackScope, c = r.runBackwards, d = r.yoyoEase, p = r.keyframes, _ = r.autoRevert, m = t._dur, g = t._startAt, y = t._targets, v = t.parent, T = v && v.data === "nested" ? v.vars.targets : y, x = t._overwrite === "auto" && !ai, S = t.timeline, P, b, w, O, C, F, I, B, A, Y, N, H, Ct;
  if (S && (!p || !n) && (n = "none"),
  t._ease = Nt(n, Ht.ease),
  t._yEase = d ? pr(Nt(d === !0 ? n : d, Ht.ease)) : 0,
  d && t._yoyo && !t._repeat && (d = t._yEase,
  t._yEase = t._ease,
  t._ease = d),
  t._from = !S && !!r.runBackwards,
  !S || p && !r.stagger) {
      if (B = y[0] ? It(y[0]).harness : 0,
      H = B && r[B.prop],
      P = ke(r, hi),
      g && (g._zTime < 0 && g.progress(1),
      e < 0 && c && a && !_ ? g.render(-1, !0) : g.revert(c && m ? ve : Kr),
      g._lazy = 0),
      s) {
          if (St(t._startAt = U.set(y, ft({
              data: "isStart",
              overwrite: !1,
              parent: v,
              immediateRender: !0,
              lazy: !g && Q(u),
              startAt: null,
              delay: 0,
              onUpdate: f,
              onUpdateParams: h,
              callbackScope: l,
              stagger: 0
          }, s))),
          t._startAt._dp = 0,
          t._startAt._sat = t,
          e < 0 && (G || !a && !_) && t._startAt.revert(ve),
          a && m && e <= 0 && i <= 0) {
              e && (t._zTime = e);
              return
          }
      } else if (c && m && !g) {
          if (e && (a = !1),
          w = ft({
              overwrite: !1,
              data: "isFromStart",
              lazy: a && !g && Q(u),
              immediateRender: a,
              stagger: 0,
              parent: v
          }, P),
          H && (w[B.prop] = H),
          St(t._startAt = U.set(y, w)),
          t._startAt._dp = 0,
          t._startAt._sat = t,
          e < 0 && (G ? t._startAt.revert(ve) : t._startAt.render(-1, !0)),
          t._zTime = e,
          !a)
              o(t._startAt, D, D);
          else if (!e)
              return
      }
      for (t._pt = t._ptCache = 0,
      u = m && Q(u) || u && !m,
      b = 0; b < y.length; b++) {
          if (C = y[b],
          I = C._gsap || li(y)[b]._gsap,
          t._ptLookup[b] = Y = {},
          He[I.id] && bt.length && Se(),
          N = T === y ? b : T.indexOf(C),
          B && (A = new B).init(C, H || P, t, N, T) !== !1 && (t._pt = O = new j(t._pt,C,A.name,0,1,A.render,A,0,A.priority),
          A._props.forEach(function(Mt) {
              Y[Mt] = O
          }),
          A.priority && (F = 1)),
          !B || H)
              for (w in P)
                  J[w] && (A = xr(w, P, t, N, C, T)) ? A.priority && (F = 1) : Y[w] = O = ci.call(t, C, w, "get", P[w], N, T, 0, r.stringFilter);
          t._op && t._op[b] && t.kill(C, t._op[b]),
          x && t._pt && (vt = t,
          R.killTweensOf(C, Y, t.globalTime(e)),
          Ct = !t.parent,
          vt = 0),
          t._pt && u && (He[I.id] = 1)
      }
      F && Sr(t),
      t._onInit && t._onInit(t)
  }
  t._onUpdate = f,
  t._initted = (!t._op || t._pt) && !Ct,
  p && e <= 0 && S.render(at, !0, !0)
}, Pn = function(t, e, i, r, n, s, a) {
  var u = (t._pt && t._ptCache || (t._ptCache = {}))[e], f, h, l, c;
  if (!u)
      for (u = t._ptCache[e] = [],
      l = t._ptLookup,
      c = t._targets.length; c--; ) {
          if (f = l[c][e],
          f && f.d && f.d._pt)
              for (f = f.d._pt; f && f.p !== e && f.fp !== e; )
                  f = f._next;
          if (!f)
              return ti = 1,
              t.vars[e] = "+=0",
              di(t, a),
              ti = 0,
              1;
          u.push(f)
      }
  for (c = u.length; c--; )
      h = u[c],
      f = h._pt || h,
      f.s = (r || r === 0) && !n ? r : f.s + (r || 0) + s * f.c,
      f.c = i - f.s,
      h.e && (h.e = L(i) + W(h.e)),
      h.b && (h.b = f.s + W(h.b))
}, Sn = function(t, e) {
  var i = t[0] ? It(t[0]).harness : 0, r = i && i.aliases, n, s, a, u;
  if (!r)
      return e;
  n = Vt({}, e);
  for (s in r)
      if (s in n)
          for (u = r[s].split(","),
          a = u.length; a--; )
              n[u[a]] = n[s];
  return n
}, kn = function(t, e, i, r) {
  var n = e.ease || r || "power1.inOut", s, a;
  if ($(e))
      a = i[t] || (i[t] = []),
      e.forEach(function(u, f) {
          return a.push({
              t: f / (e.length - 1) * 100,
              v: u,
              e: n
          })
      });
  else
      for (s in e)
          a = i[s] || (i[s] = []),
          s === "ease" || a.push({
              t: parseFloat(t),
              v: e[s],
              e: n
          })
}, fe = function(t, e, i, r, n) {
  return z(t) ? t.call(e, i, r, n) : X(t) && ~t.indexOf("random(") ? _e(t) : t
}, vr = _i + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert", Tr = {};
Z(vr + ",id,stagger,delay,duration,paused,scrollTrigger", function(o) {
  return Tr[o] = 1
});
var U = function(o) {
  Vi(t, o);
  function t(i, r, n, s) {
      var a;
      typeof r == "number" && (n.duration = r,
      r = n,
      n = null),
      a = o.call(this, s ? r : oe(r)) || this;
      var u = a.vars, f = u.duration, h = u.delay, l = u.immediateRender, c = u.stagger, d = u.overwrite, p = u.keyframes, _ = u.defaults, m = u.scrollTrigger, g = u.yoyoEase, y = r.parent || R, v = ($(i) || Xi(i) ? yt(i[0]) : "length"in r) ? [i] : ot(i), T, x, S, P, b, w, O, C;
      if (a._targets = v.length ? li(v) : Pe("GSAP target " + i + " not found. https://greensock.com", !et.nullTargetWarn) || [],
      a._ptLookup = [],
      a._overwrite = d,
      p || c || ye(f) || ye(h)) {
          if (r = a.vars,
          T = a.timeline = new K({
              data: "nested",
              defaults: _ || {},
              targets: y && y.data === "nested" ? y.vars.targets : v
          }),
          T.kill(),
          T.parent = T._dp = pt(a),
          T._start = 0,
          c || ye(f) || ye(h)) {
              if (P = v.length,
              O = c && or(c),
              ct(c))
                  for (b in c)
                      ~vr.indexOf(b) && (C || (C = {}),
                      C[b] = c[b]);
              for (x = 0; x < P; x++)
                  S = ke(r, Tr),
                  S.stagger = 0,
                  g && (S.yoyoEase = g),
                  C && Vt(S, C),
                  w = v[x],
                  S.duration = +fe(f, pt(a), x, w, v),
                  S.delay = (+fe(h, pt(a), x, w, v) || 0) - a._delay,
                  !c && P === 1 && S.delay && (a._delay = h = S.delay,
                  a._start += h,
                  S.delay = 0),
                  T.to(w, S, O ? O(x, w, v) : 0),
                  T._ease = k.none;
              T.duration() ? f = h = 0 : a.timeline = 0
          } else if (p) {
              oe(ft(T.vars.defaults, {
                  ease: "none"
              })),
              T._ease = Nt(p.ease || r.ease || "none");
              var F = 0, I, B, A;
              if ($(p))
                  p.forEach(function(Y) {
                      return T.to(v, Y, ">")
                  }),
                  T.duration();
              else {
                  S = {};
                  for (b in p)
                      b === "ease" || b === "easeEach" || kn(b, p[b], S, p.easeEach);
                  for (b in S)
                      for (I = S[b].sort(function(Y, N) {
                          return Y.t - N.t
                      }),
                      F = 0,
                      x = 0; x < I.length; x++)
                          B = I[x],
                          A = {
                              ease: B.e,
                              duration: (B.t - (x ? I[x - 1].t : 0)) / 100 * f
                          },
                          A[b] = B.v,
                          T.to(v, A, F),
                          F += A.duration;
                  T.duration() < f && T.to({}, {
                      duration: f - T.duration()
                  })
              }
          }
          f || a.duration(f = T.duration())
      } else
          a.timeline = 0;
      return d === !0 && !ai && (vt = pt(a),
      R.killTweensOf(v),
      vt = 0),
      _t(y, pt(a), n),
      r.reversed && a.reverse(),
      r.paused && a.paused(!0),
      (l || !f && !p && a._start === q(y._time) && Q(l) && en(pt(a)) && y.data !== "nested") && (a._tTime = -D,
      a.render(Math.max(0, -h) || 0)),
      m && rr(pt(a), m),
      a
  }
  var e = t.prototype;
  return e.render = function(r, n, s) {
      var a = this._time, u = this._tDur, f = this._dur, h = r < 0, l = r > u - D && !h ? u : r < D ? 0 : r, c, d, p, _, m, g, y, v, T;
      if (!f)
          nn(this, r, n, s);
      else if (l !== this._tTime || !r || s || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== h) {
          if (c = l,
          v = this.timeline,
          this._repeat) {
              if (_ = f + this._rDelay,
              this._repeat < -1 && h)
                  return this.totalTime(_ * 100 + r, n, s);
              if (c = q(l % _),
              l === u ? (p = this._repeat,
              c = f) : (p = ~~(l / _),
              p && p === l / _ && (c = f,
              p--),
              c > f && (c = f)),
              g = this._yoyo && p & 1,
              g && (T = this._yEase,
              c = f - c),
              m = Kt(this._tTime, _),
              c === a && !s && this._initted)
                  return this._tTime = l,
                  this;
              p !== m && (v && this._yEase && mr(v, g),
              this.vars.repeatRefresh && !g && !this._lock && (this._lock = s = 1,
              this.render(q(_ * p), !0).invalidate()._lock = 0))
          }
          if (!this._initted) {
              if (nr(this, h ? r : c, s, n, l))
                  return this._tTime = 0,
                  this;
              if (a !== this._time)
                  return this;
              if (f !== this._dur)
                  return this.render(r, n, s)
          }
          if (this._tTime = l,
          this._time = c,
          !this._act && this._ts && (this._act = 1,
          this._lazy = 0),
          this.ratio = y = (T || this._ease)(c / f),
          this._from && (this.ratio = y = 1 - y),
          c && !a && !n && (ut(this, "onStart"),
          this._tTime !== l))
              return this;
          for (d = this._pt; d; )
              d.r(y, d.d),
              d = d._next;
          v && v.render(r < 0 ? r : !c && g ? -D : v._dur * v._ease(c / this._dur), n, s) || this._startAt && (this._zTime = r),
          this._onUpdate && !n && (h && Ke(this, r, n, s),
          ut(this, "onUpdate")),
          this._repeat && p !== m && this.vars.onRepeat && !n && this.parent && ut(this, "onRepeat"),
          (l === this._tDur || !l) && this._tTime === l && (h && !this._onUpdate && Ke(this, r, !0, !0),
          (r || !f) && (l === this._tDur && this._ts > 0 || !l && this._ts < 0) && St(this, 1),
          !n && !(h && !a) && (l || a || g) && (ut(this, l === u ? "onComplete" : "onReverseComplete", !0),
          this._prom && !(l < u && this.timeScale() > 0) && this._prom()))
      }
      return this
  }
  ,
  e.targets = function() {
      return this._targets
  }
  ,
  e.invalidate = function(r) {
      return (!r || !this.vars.runBackwards) && (this._startAt = 0),
      this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0,
      this._ptLookup = [],
      this.timeline && this.timeline.invalidate(r),
      o.prototype.invalidate.call(this, r)
  }
  ,
  e.resetTo = function(r, n, s, a) {
      le || tt.wake(),
      this._ts || this.play();
      var u = Math.min(this._dur, (this._dp._time - this._start) * this._ts), f;
      return this._initted || di(this, u),
      f = this._ease(u / this._dur),
      Pn(this, r, n, s, a, f, u) ? this.resetTo(r, n, s, a) : (Fe(this, 0),
      this.parent || er(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0),
      this.render(0))
  }
  ,
  e.kill = function(r, n) {
      if (n === void 0 && (n = "all"),
      !r && (!n || n === "all"))
          return this._lazy = this._pt = 0,
          this.parent ? ne(this) : this;
      if (this.timeline) {
          var s = this.timeline.totalDuration();
          return this.timeline.killTweensOf(r, n, vt && vt.vars.overwrite !== !0)._first || ne(this),
          this.parent && s !== this.timeline.totalDuration() && Qt(this, this._dur * this.timeline._tDur / s, 0, 1),
          this
      }
      var a = this._targets, u = r ? ot(r) : a, f = this._ptLookup, h = this._pt, l, c, d, p, _, m, g;
      if ((!n || n === "all") && Jr(a, u))
          return n === "all" && (this._pt = 0),
          ne(this);
      for (l = this._op = this._op || [],
      n !== "all" && (X(n) && (_ = {},
      Z(n, function(y) {
          return _[y] = 1
      }),
      n = _),
      n = Sn(a, n)),
      g = a.length; g--; )
          if (~u.indexOf(a[g])) {
              c = f[g],
              n === "all" ? (l[g] = n,
              p = c,
              d = {}) : (d = l[g] = l[g] || {},
              p = n);
              for (_ in p)
                  m = c && c[_],
                  m && ((!("kill"in m.d) || m.d.kill(_) === !0) && Re(this, m, "_pt"),
                  delete c[_]),
                  d !== "all" && (d[_] = 1)
          }
      return this._initted && !this._pt && h && ne(this),
      this
  }
  ,
  t.to = function(r, n) {
      return new t(r,n,arguments[2])
  }
  ,
  t.from = function(r, n) {
      return ue(1, arguments)
  }
  ,
  t.delayedCall = function(r, n, s, a) {
      return new t(n,0,{
          immediateRender: !1,
          lazy: !1,
          overwrite: !1,
          delay: r,
          onComplete: n,
          onReverseComplete: n,
          onCompleteParams: s,
          onReverseCompleteParams: s,
          callbackScope: a
      })
  }
  ,
  t.fromTo = function(r, n, s) {
      return ue(2, arguments)
  }
  ,
  t.set = function(r, n) {
      return n.duration = 0,
      n.repeatDelay || (n.repeat = 0),
      new t(r,n)
  }
  ,
  t.killTweensOf = function(r, n, s) {
      return R.killTweensOf(r, n, s)
  }
  ,
  t
}(jt);
ft(U.prototype, {
  _targets: [],
  _lazy: 0,
  _startAt: 0,
  _op: 0,
  _onInit: 0
});
Z("staggerTo,staggerFrom,staggerFromTo", function(o) {
  U[o] = function() {
      var t = new K
        , e = Ze.call(arguments, 0);
      return e.splice(o === "staggerFromTo" ? 5 : 4, 0, 0),
      t[o].apply(t, e)
  }
});
var pi = function(t, e, i) {
  return t[e] = i
}
, wr = function(t, e, i) {
  return t[e](i)
}
, On = function(t, e, i, r) {
  return t[e](r.fp, i)
}
, Cn = function(t, e, i) {
  return t.setAttribute(e, i)
}
, mi = function(t, e) {
  return z(t[e]) ? wr : oi(t[e]) && t.setAttribute ? Cn : pi
}
, br = function(t, e) {
  return e.set(e.t, e.p, Math.round((e.s + e.c * t) * 1e6) / 1e6, e)
}
, Mn = function(t, e) {
  return e.set(e.t, e.p, !!(e.s + e.c * t), e)
}
, Pr = function(t, e) {
  var i = e._pt
    , r = "";
  if (!t && e.b)
      r = e.b;
  else if (t === 1 && e.e)
      r = e.e;
  else {
      for (; i; )
          r = i.p + (i.m ? i.m(i.s + i.c * t) : Math.round((i.s + i.c * t) * 1e4) / 1e4) + r,
          i = i._next;
      r += e.c
  }
  e.set(e.t, e.p, r, e)
}
, gi = function(t, e) {
  for (var i = e._pt; i; )
      i.r(t, i.d),
      i = i._next
}
, Dn = function(t, e, i, r) {
  for (var n = this._pt, s; n; )
      s = n._next,
      n.p === r && n.modifier(t, e, i),
      n = s
}
, An = function(t) {
  for (var e = this._pt, i, r; e; )
      r = e._next,
      e.p === t && !e.op || e.op === t ? Re(this, e, "_pt") : e.dep || (i = 1),
      e = r;
  return !i
}
, Rn = function(t, e, i, r) {
  r.mSet(t, e, r.m.call(r.tween, i, r.mt), r)
}
, Sr = function(t) {
  for (var e = t._pt, i, r, n, s; e; ) {
      for (i = e._next,
      r = n; r && r.pr > e.pr; )
          r = r._next;
      (e._prev = r ? r._prev : s) ? e._prev._next = e : n = e,
      (e._next = r) ? r._prev = e : s = e,
      e = i
  }
  t._pt = n
}
, j = function() {
  function o(e, i, r, n, s, a, u, f, h) {
      this.t = i,
      this.s = n,
      this.c = s,
      this.p = r,
      this.r = a || br,
      this.d = u || this,
      this.set = f || pi,
      this.pr = h || 0,
      this._next = e,
      e && (e._prev = this)
  }
  var t = o.prototype;
  return t.modifier = function(i, r, n) {
      this.mSet = this.mSet || this.set,
      this.set = Rn,
      this.m = i,
      this.mt = n,
      this.tween = r
  }
  ,
  o
}();
Z(_i + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(o) {
  return hi[o] = 1
});
it.TweenMax = it.TweenLite = U;
it.TimelineLite = it.TimelineMax = K;
R = new K({
  sortChildren: !1,
  defaults: Ht,
  autoRemoveChildren: !0,
  id: "root",
  smoothChildTiming: !0
});
et.stringFilter = dr;
var Jt = []
, we = {}
, En = []
, Mi = 0
, Ye = function(t) {
  return (we[t] || En).map(function(e) {
      return e()
  })
}
, ei = function() {
  var t = Date.now()
    , e = [];
  t - Mi > 2 && (Ye("matchMediaInit"),
  Jt.forEach(function(i) {
      var r = i.queries, n = i.conditions, s, a, u, f;
      for (a in r)
          s = st.matchMedia(r[a]).matches,
          s && (u = 1),
          s !== n[a] && (n[a] = s,
          f = 1);
      f && (i.revert(),
      u && e.push(i))
  }),
  Ye("matchMediaRevert"),
  e.forEach(function(i) {
      return i.onMatch(i)
  }),
  Mi = t,
  Ye("matchMedia"))
}
, kr = function() {
  function o(e, i) {
      this.selector = i && je(i),
      this.data = [],
      this._r = [],
      this.isReverted = !1,
      e && this.add(e)
  }
  var t = o.prototype;
  return t.add = function(i, r, n) {
      z(i) && (n = r,
      r = i,
      i = z);
      var s = this
        , a = function() {
          var f = V, h = s.selector, l;
          return f && f !== s && f.data.push(s),
          n && (s.selector = je(n)),
          V = s,
          l = r.apply(s, arguments),
          z(l) && s._r.push(l),
          V = f,
          s.selector = h,
          s.isReverted = !1,
          l
      };
      return s.last = a,
      i === z ? a(s) : i ? s[i] = a : a
  }
  ,
  t.ignore = function(i) {
      var r = V;
      V = null,
      i(this),
      V = r
  }
  ,
  t.getTweens = function() {
      var i = [];
      return this.data.forEach(function(r) {
          return r instanceof o ? i.push.apply(i, r.getTweens()) : r instanceof U && !(r.parent && r.parent.data === "nested") && i.push(r)
      }),
      i
  }
  ,
  t.clear = function() {
      this._r.length = this.data.length = 0
  }
  ,
  t.kill = function(i, r) {
      var n = this;
      if (i) {
          var s = this.getTweens();
          this.data.forEach(function(u) {
              u.data === "isFlip" && (u.revert(),
              u.getChildren(!0, !0, !1).forEach(function(f) {
                  return s.splice(s.indexOf(f), 1)
              }))
          }),
          s.map(function(u) {
              return {
                  g: u.globalTime(0),
                  t: u
              }
          }).sort(function(u, f) {
              return f.g - u.g || -1
          }).forEach(function(u) {
              return u.t.revert(i)
          }),
          this.data.forEach(function(u) {
              return !(u instanceof jt) && u.revert && u.revert(i)
          }),
          this._r.forEach(function(u) {
              return u(i, n)
          }),
          this.isReverted = !0
      } else
          this.data.forEach(function(u) {
              return u.kill && u.kill()
          });
      if (this.clear(),
      r) {
          var a = Jt.indexOf(this);
          ~a && Jt.splice(a, 1)
      }
  }
  ,
  t.revert = function(i) {
      this.kill(i || {})
  }
  ,
  o
}()
, Fn = function() {
  function o(e) {
      this.contexts = [],
      this.scope = e
  }
  var t = o.prototype;
  return t.add = function(i, r, n) {
      ct(i) || (i = {
          matches: i
      });
      var s = new kr(0,n || this.scope), a = s.conditions = {}, u, f, h;
      this.contexts.push(s),
      r = s.add("onMatch", r),
      s.queries = i;
      for (f in i)
          f === "all" ? h = 1 : (u = st.matchMedia(i[f]),
          u && (Jt.indexOf(s) < 0 && Jt.push(s),
          (a[f] = u.matches) && (h = 1),
          u.addListener ? u.addListener(ei) : u.addEventListener("change", ei)));
      return h && r(s),
      this
  }
  ,
  t.revert = function(i) {
      this.kill(i || {})
  }
  ,
  t.kill = function(i) {
      this.contexts.forEach(function(r) {
          return r.kill(i, !0)
      })
  }
  ,
  o
}()
, Ce = {
  registerPlugin: function() {
      for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
          e[i] = arguments[i];
      e.forEach(function(r) {
          return pn(r)
      })
  },
  timeline: function(t) {
      return new K(t)
  },
  getTweensOf: function(t, e) {
      return R.getTweensOf(t, e)
  },
  getProperty: function(t, e, i, r) {
      X(t) && (t = ot(t)[0]);
      var n = It(t || {}).get
        , s = i ? tr : Ji;
      return i === "native" && (i = ""),
      t && (e ? s((J[e] && J[e].get || n)(t, e, i, r)) : function(a, u, f) {
          return s((J[a] && J[a].get || n)(t, a, u, f))
      }
      )
  },
  quickSetter: function(t, e, i) {
      if (t = ot(t),
      t.length > 1) {
          var r = t.map(function(h) {
              return rt.quickSetter(h, e, i)
          })
            , n = r.length;
          return function(h) {
              for (var l = n; l--; )
                  r[l](h)
          }
      }
      t = t[0] || {};
      var s = J[e]
        , a = It(t)
        , u = a.harness && (a.harness.aliases || {})[e] || e
        , f = s ? function(h) {
          var l = new s;
          qt._pt = 0,
          l.init(t, i ? h + i : h, qt, 0, [t]),
          l.render(1, l),
          qt._pt && gi(1, qt)
      }
      : a.set(t, u);
      return s ? f : function(h) {
          return f(t, u, i ? h + i : h, a, 1)
      }
  },
  quickTo: function(t, e, i) {
      var r, n = rt.to(t, Vt((r = {},
      r[e] = "+=0.1",
      r.paused = !0,
      r), i || {})), s = function(u, f, h) {
          return n.resetTo(e, u, f, h)
      };
      return s.tween = n,
      s
  },
  isTweening: function(t) {
      return R.getTweensOf(t, !0).length > 0
  },
  defaults: function(t) {
      return t && t.ease && (t.ease = Nt(t.ease, Ht.ease)),
      Pi(Ht, t || {})
  },
  config: function(t) {
      return Pi(et, t || {})
  },
  registerEffect: function(t) {
      var e = t.name
        , i = t.effect
        , r = t.plugins
        , n = t.defaults
        , s = t.extendTimeline;
      (r || "").split(",").forEach(function(a) {
          return a && !J[a] && !it[a] && Pe(e + " effect requires " + a + " plugin.")
      }),
      Ie[e] = function(a, u, f) {
          return i(ot(a), ft(u || {}, n), f)
      }
      ,
      s && (K.prototype[e] = function(a, u, f) {
          return this.add(Ie[e](a, ct(u) ? u : (f = u) && {}, this), f)
      }
      )
  },
  registerEase: function(t, e) {
      k[t] = Nt(e)
  },
  parseEase: function(t, e) {
      return arguments.length ? Nt(t, e) : k
  },
  getById: function(t) {
      return R.getById(t)
  },
  exportRoot: function(t, e) {
      t === void 0 && (t = {});
      var i = new K(t), r, n;
      for (i.smoothChildTiming = Q(t.smoothChildTiming),
      R.remove(i),
      i._dp = 0,
      i._time = i._tTime = R._time,
      r = R._first; r; )
          n = r._next,
          (e || !(!r._dur && r instanceof U && r.vars.onComplete === r._targets[0])) && _t(i, r, r._start - r._delay),
          r = n;
      return _t(R, i, 0),
      i
  },
  context: function(t, e) {
      return t ? new kr(t,e) : V
  },
  matchMedia: function(t) {
      return new Fn(t)
  },
  matchMediaRefresh: function() {
      return Jt.forEach(function(t) {
          var e = t.conditions, i, r;
          for (r in e)
              e[r] && (e[r] = !1,
              i = 1);
          i && t.revert()
      }) || ei()
  },
  addEventListener: function(t, e) {
      var i = we[t] || (we[t] = []);
      ~i.indexOf(e) || i.push(e)
  },
  removeEventListener: function(t, e) {
      var i = we[t]
        , r = i && i.indexOf(e);
      r >= 0 && i.splice(r, 1)
  },
  utils: {
      wrap: ln,
      wrapYoyo: cn,
      distribute: or,
      random: fr,
      snap: ur,
      normalize: _n,
      getUnit: W,
      clamp: on,
      splitColor: lr,
      toArray: ot,
      selector: je,
      mapRange: _r,
      pipe: fn,
      unitize: hn,
      interpolate: dn,
      shuffle: ar
  },
  install: Hi,
  effects: Ie,
  ticker: tt,
  updateRoot: K.updateRoot,
  plugins: J,
  globalTimeline: R,
  core: {
      PropTween: j,
      globals: Ki,
      Tween: U,
      Timeline: K,
      Animation: jt,
      getCache: It,
      _removeLinkedListItem: Re,
      reverting: function() {
          return G
      },
      context: function(t) {
          return t && V && (V.data.push(t),
          t._ctx = V),
          V
      },
      suppressOverwrites: function(t) {
          return ai = t
      }
  }
};
Z("to,from,fromTo,delayedCall,set,killTweensOf", function(o) {
  return Ce[o] = U[o]
});
tt.add(K.updateRoot);
qt = Ce.to({}, {
  duration: 0
});
var zn = function(t, e) {
  for (var i = t._pt; i && i.p !== e && i.op !== e && i.fp !== e; )
      i = i._next;
  return i
}
, Ln = function(t, e) {
  var i = t._targets, r, n, s;
  for (r in e)
      for (n = i.length; n--; )
          s = t._ptLookup[n][r],
          s && (s = s.d) && (s._pt && (s = zn(s, r)),
          s && s.modifier && s.modifier(e[r], t, i[n], r))
}
, Ue = function(t, e) {
  return {
      name: t,
      rawVars: 1,
      init: function(r, n, s) {
          s._onInit = function(a) {
              var u, f;
              if (X(n) && (u = {},
              Z(n, function(h) {
                  return u[h] = 1
              }),
              n = u),
              e) {
                  u = {};
                  for (f in n)
                      u[f] = e(n[f]);
                  n = u
              }
              Ln(a, n)
          }
      }
  }
}
, rt = Ce.registerPlugin({
  name: "attr",
  init: function(t, e, i, r, n) {
      var s, a, u;
      this.tween = i;
      for (s in e)
          u = t.getAttribute(s) || "",
          a = this.add(t, "setAttribute", (u || 0) + "", e[s], r, n, 0, 0, s),
          a.op = s,
          a.b = u,
          this._props.push(s)
  },
  render: function(t, e) {
      for (var i = e._pt; i; )
          G ? i.set(i.t, i.p, i.b, i) : i.r(t, i.d),
          i = i._next
  }
}, {
  name: "endArray",
  init: function(t, e) {
      for (var i = e.length; i--; )
          this.add(t, i, t[i] || 0, e[i], 0, 0, 0, 0, 0, 1)
  }
}, Ue("roundProps", Je), Ue("modifiers"), Ue("snap", ur)) || Ce;
U.version = K.version = rt.version = "3.11.4";
$i = 1;
Ui() && Zt();
k.Power0;
k.Power1;
k.Power2;
k.Power3;
k.Power4;
k.Linear;
k.Quad;
k.Cubic;
k.Quart;
k.Quint;
k.Strong;
k.Elastic;
k.Back;
k.SteppedEase;
k.Bounce;
k.Sine;
k.Expo;
k.Circ;
/*!
* CSSPlugin 3.11.4
* https://greensock.com
*
* Copyright 2008-2022, GreenSock. All rights reserved.
* Subject to the terms at https://greensock.com/standard-license or for
* Club GreenSock members, the agreement issued with that membership.
* @author: Jack Doyle, jack@greensock.com
*/
var Di, Tt, Gt, yi, zt, Ai, xi, In = function() {
  return typeof window < "u"
}, xt = {}, Ft = 180 / Math.PI, $t = Math.PI / 180, Ut = Math.atan2, Ri = 1e8, vi = /([A-Z])/g, Bn = /(left|right|width|margin|padding|x)/i, Nn = /[\s,\(]\S/, gt = {
  autoAlpha: "opacity,visibility",
  scale: "scaleX,scaleY",
  alpha: "opacity"
}, ii = function(t, e) {
  return e.set(e.t, e.p, Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u, e)
}, Vn = function(t, e) {
  return e.set(e.t, e.p, t === 1 ? e.e : Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u, e)
}, Yn = function(t, e) {
  return e.set(e.t, e.p, t ? Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u : e.b, e)
}, Un = function(t, e) {
  var i = e.s + e.c * t;
  e.set(e.t, e.p, ~~(i + (i < 0 ? -.5 : .5)) + e.u, e)
}, Or = function(t, e) {
  return e.set(e.t, e.p, t ? e.e : e.b, e)
}, Cr = function(t, e) {
  return e.set(e.t, e.p, t !== 1 ? e.b : e.e, e)
}, Xn = function(t, e, i) {
  return t.style[e] = i
}, qn = function(t, e, i) {
  return t.style.setProperty(e, i)
}, Wn = function(t, e, i) {
  return t._gsap[e] = i
}, Gn = function(t, e, i) {
  return t._gsap.scaleX = t._gsap.scaleY = i
}, $n = function(t, e, i, r, n) {
  var s = t._gsap;
  s.scaleX = s.scaleY = i,
  s.renderTransform(n, s)
}, Hn = function(t, e, i, r, n) {
  var s = t._gsap;
  s[e] = i,
  s.renderTransform(n, s)
}, E = "transform", ht = E + "Origin", Kn = function(t, e) {
  var i = this
    , r = this.target
    , n = r.style;
  if (t in xt) {
      if (this.tfm = this.tfm || {},
      t !== "transform" && (t = gt[t] || t,
      ~t.indexOf(",") ? t.split(",").forEach(function(s) {
          return i.tfm[s] = mt(r, s)
      }) : this.tfm[t] = r._gsap.x ? r._gsap[t] : mt(r, t)),
      this.props.indexOf(E) >= 0)
          return;
      r._gsap.svg && (this.svgo = r.getAttribute("data-svg-origin"),
      this.props.push(ht, e, "")),
      t = E
  }
  (n || e) && this.props.push(t, e, n[t])
}, Mr = function(t) {
  t.translate && (t.removeProperty("translate"),
  t.removeProperty("scale"),
  t.removeProperty("rotate"))
}, Qn = function() {
  var t = this.props, e = this.target, i = e.style, r = e._gsap, n, s;
  for (n = 0; n < t.length; n += 3)
      t[n + 1] ? e[t[n]] = t[n + 2] : t[n + 2] ? i[t[n]] = t[n + 2] : i.removeProperty(t[n].replace(vi, "-$1").toLowerCase());
  if (this.tfm) {
      for (s in this.tfm)
          r[s] = this.tfm[s];
      r.svg && (r.renderTransform(),
      e.setAttribute("data-svg-origin", this.svgo || "")),
      n = xi(),
      n && !n.isStart && !i[E] && (Mr(i),
      r.uncache = 1)
  }
}, Dr = function(t, e) {
  var i = {
      target: t,
      props: [],
      revert: Qn,
      save: Kn
  };
  return e && e.split(",").forEach(function(r) {
      return i.save(r)
  }),
  i
}, Ar, ri = function(t, e) {
  var i = Tt.createElementNS ? Tt.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : Tt.createElement(t);
  return i.style ? i : Tt.createElement(t)
}, lt = function o(t, e, i) {
  var r = getComputedStyle(t);
  return r[e] || r.getPropertyValue(e.replace(vi, "-$1").toLowerCase()) || r.getPropertyValue(e) || !i && o(t, te(e) || e, 1) || ""
}, Ei = "O,Moz,ms,Ms,Webkit".split(","), te = function(t, e, i) {
  var r = e || zt
    , n = r.style
    , s = 5;
  if (t in n && !i)
      return t;
  for (t = t.charAt(0).toUpperCase() + t.substr(1); s-- && !(Ei[s] + t in n); )
      ;
  return s < 0 ? null : (s === 3 ? "ms" : s >= 0 ? Ei[s] : "") + t
}, ni = function() {
  In() && window.document && (Di = window,
  Tt = Di.document,
  Gt = Tt.documentElement,
  zt = ri("div") || {
      style: {}
  },
  ri("div"),
  E = te(E),
  ht = E + "Origin",
  zt.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0",
  Ar = !!te("perspective"),
  xi = rt.core.reverting,
  yi = 1)
}, Xe = function o(t) {
  var e = ri("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), i = this.parentNode, r = this.nextSibling, n = this.style.cssText, s;
  if (Gt.appendChild(e),
  e.appendChild(this),
  this.style.display = "block",
  t)
      try {
          s = this.getBBox(),
          this._gsapBBox = this.getBBox,
          this.getBBox = o
      } catch {}
  else
      this._gsapBBox && (s = this._gsapBBox());
  return i && (r ? i.insertBefore(this, r) : i.appendChild(this)),
  Gt.removeChild(e),
  this.style.cssText = n,
  s
}, Fi = function(t, e) {
  for (var i = e.length; i--; )
      if (t.hasAttribute(e[i]))
          return t.getAttribute(e[i])
}, Rr = function(t) {
  var e;
  try {
      e = t.getBBox()
  } catch {
      e = Xe.call(t, !0)
  }
  return e && (e.width || e.height) || t.getBBox === Xe || (e = Xe.call(t, !0)),
  e && !e.width && !e.x && !e.y ? {
      x: +Fi(t, ["x", "cx", "x1"]) || 0,
      y: +Fi(t, ["y", "cy", "y1"]) || 0,
      width: 0,
      height: 0
  } : e
}, Er = function(t) {
  return !!(t.getCTM && (!t.parentNode || t.ownerSVGElement) && Rr(t))
}, ce = function(t, e) {
  if (e) {
      var i = t.style;
      e in xt && e !== ht && (e = E),
      i.removeProperty ? ((e.substr(0, 2) === "ms" || e.substr(0, 6) === "webkit") && (e = "-" + e),
      i.removeProperty(e.replace(vi, "-$1").toLowerCase())) : i.removeAttribute(e)
  }
}, wt = function(t, e, i, r, n, s) {
  var a = new j(t._pt,e,i,0,1,s ? Cr : Or);
  return t._pt = a,
  a.b = r,
  a.e = n,
  t._props.push(i),
  a
}, zi = {
  deg: 1,
  rad: 1,
  turn: 1
}, Zn = {
  grid: 1,
  flex: 1
}, kt = function o(t, e, i, r) {
  var n = parseFloat(i) || 0, s = (i + "").trim().substr((n + "").length) || "px", a = zt.style, u = Bn.test(e), f = t.tagName.toLowerCase() === "svg", h = (f ? "client" : "offset") + (u ? "Width" : "Height"), l = 100, c = r === "px", d = r === "%", p, _, m, g;
  return r === s || !n || zi[r] || zi[s] ? n : (s !== "px" && !c && (n = o(t, e, i, "px")),
  g = t.getCTM && Er(t),
  (d || s === "%") && (xt[e] || ~e.indexOf("adius")) ? (p = g ? t.getBBox()[u ? "width" : "height"] : t[h],
  L(d ? n / p * l : n / 100 * p)) : (a[u ? "width" : "height"] = l + (c ? s : r),
  _ = ~e.indexOf("adius") || r === "em" && t.appendChild && !f ? t : t.parentNode,
  g && (_ = (t.ownerSVGElement || {}).parentNode),
  (!_ || _ === Tt || !_.appendChild) && (_ = Tt.body),
  m = _._gsap,
  m && d && m.width && u && m.time === tt.time && !m.uncache ? L(n / m.width * l) : ((d || s === "%") && !Zn[lt(_, "display")] && (a.position = lt(t, "position")),
  _ === t && (a.position = "static"),
  _.appendChild(zt),
  p = zt[h],
  _.removeChild(zt),
  a.position = "absolute",
  u && d && (m = It(_),
  m.time = tt.time,
  m.width = _[h]),
  L(c ? p * n / l : p && n ? l / p * n : 0))))
}, mt = function(t, e, i, r) {
  var n;
  return yi || ni(),
  e in gt && e !== "transform" && (e = gt[e],
  ~e.indexOf(",") && (e = e.split(",")[0])),
  xt[e] && e !== "transform" ? (n = pe(t, r),
  n = e !== "transformOrigin" ? n[e] : n.svg ? n.origin : De(lt(t, ht)) + " " + n.zOrigin + "px") : (n = t.style[e],
  (!n || n === "auto" || r || ~(n + "").indexOf("calc(")) && (n = Me[e] && Me[e](t, e, i) || lt(t, e) || Zi(t, e) || (e === "opacity" ? 1 : 0))),
  i && !~(n + "").trim().indexOf(" ") ? kt(t, e, n, i) + i : n
}, jn = function(t, e, i, r) {
  if (!i || i === "none") {
      var n = te(e, t, 1)
        , s = n && lt(t, n, 1);
      s && s !== i ? (e = n,
      i = s) : e === "borderColor" && (i = lt(t, "borderTopColor"))
  }
  var a = new j(this._pt,t.style,e,0,1,Pr), u = 0, f = 0, h, l, c, d, p, _, m, g, y, v, T, x;
  if (a.b = i,
  a.e = r,
  i += "",
  r += "",
  r === "auto" && (t.style[e] = r,
  r = lt(t, e) || r,
  t.style[e] = i),
  h = [i, r],
  dr(h),
  i = h[0],
  r = h[1],
  c = i.match(Xt) || [],
  x = r.match(Xt) || [],
  x.length) {
      for (; l = Xt.exec(r); )
          m = l[0],
          y = r.substring(u, l.index),
          p ? p = (p + 1) % 5 : (y.substr(-5) === "rgba(" || y.substr(-5) === "hsla(") && (p = 1),
          m !== (_ = c[f++] || "") && (d = parseFloat(_) || 0,
          T = _.substr((d + "").length),
          m.charAt(1) === "=" && (m = Wt(d, m) + T),
          g = parseFloat(m),
          v = m.substr((g + "").length),
          u = Xt.lastIndex - v.length,
          v || (v = v || et.units[e] || T,
          u === r.length && (r += v,
          a.e += v)),
          T !== v && (d = kt(t, e, _, v) || 0),
          a._pt = {
              _next: a._pt,
              p: y || f === 1 ? y : ",",
              s: d,
              c: g - d,
              m: p && p < 4 || e === "zIndex" ? Math.round : 0
          });
      a.c = u < r.length ? r.substring(u, r.length) : ""
  } else
      a.r = e === "display" && r === "none" ? Cr : Or;
  return Wi.test(r) && (a.e = 0),
  this._pt = a,
  a
}, Li = {
  top: "0%",
  bottom: "100%",
  left: "0%",
  right: "100%",
  center: "50%"
}, Jn = function(t) {
  var e = t.split(" ")
    , i = e[0]
    , r = e[1] || "50%";
  return (i === "top" || i === "bottom" || r === "left" || r === "right") && (t = i,
  i = r,
  r = t),
  e[0] = Li[i] || i,
  e[1] = Li[r] || r,
  e.join(" ")
}, ts = function(t, e) {
  if (e.tween && e.tween._time === e.tween._dur) {
      var i = e.t, r = i.style, n = e.u, s = i._gsap, a, u, f;
      if (n === "all" || n === !0)
          r.cssText = "",
          u = 1;
      else
          for (n = n.split(","),
          f = n.length; --f > -1; )
              a = n[f],
              xt[a] && (u = 1,
              a = a === "transformOrigin" ? ht : E),
              ce(i, a);
      u && (ce(i, E),
      s && (s.svg && i.removeAttribute("transform"),
      pe(i, 1),
      s.uncache = 1,
      Mr(r)))
  }
}, Me = {
  clearProps: function(t, e, i, r, n) {
      if (n.data !== "isFromStart") {
          var s = t._pt = new j(t._pt,e,i,0,0,ts);
          return s.u = r,
          s.pr = -10,
          s.tween = n,
          t._props.push(i),
          1
      }
  }
}, de = [1, 0, 0, 1, 0, 0], Fr = {}, zr = function(t) {
  return t === "matrix(1, 0, 0, 1, 0, 0)" || t === "none" || !t
}, Ii = function(t) {
  var e = lt(t, E);
  return zr(e) ? de : e.substr(7).match(qi).map(L)
}, Ti = function(t, e) {
  var i = t._gsap || It(t), r = t.style, n = Ii(t), s, a, u, f;
  return i.svg && t.getAttribute("transform") ? (u = t.transform.baseVal.consolidate().matrix,
  n = [u.a, u.b, u.c, u.d, u.e, u.f],
  n.join(",") === "1,0,0,1,0,0" ? de : n) : (n === de && !t.offsetParent && t !== Gt && !i.svg && (u = r.display,
  r.display = "block",
  s = t.parentNode,
  (!s || !t.offsetParent) && (f = 1,
  a = t.nextElementSibling,
  Gt.appendChild(t)),
  n = Ii(t),
  u ? r.display = u : ce(t, "display"),
  f && (a ? s.insertBefore(t, a) : s ? s.appendChild(t) : Gt.removeChild(t))),
  e && n.length > 6 ? [n[0], n[1], n[4], n[5], n[12], n[13]] : n)
}, si = function(t, e, i, r, n, s) {
  var a = t._gsap, u = n || Ti(t, !0), f = a.xOrigin || 0, h = a.yOrigin || 0, l = a.xOffset || 0, c = a.yOffset || 0, d = u[0], p = u[1], _ = u[2], m = u[3], g = u[4], y = u[5], v = e.split(" "), T = parseFloat(v[0]) || 0, x = parseFloat(v[1]) || 0, S, P, b, w;
  i ? u !== de && (P = d * m - p * _) && (b = T * (m / P) + x * (-_ / P) + (_ * y - m * g) / P,
  w = T * (-p / P) + x * (d / P) - (d * y - p * g) / P,
  T = b,
  x = w) : (S = Rr(t),
  T = S.x + (~v[0].indexOf("%") ? T / 100 * S.width : T),
  x = S.y + (~(v[1] || v[0]).indexOf("%") ? x / 100 * S.height : x)),
  r || r !== !1 && a.smooth ? (g = T - f,
  y = x - h,
  a.xOffset = l + (g * d + y * _) - g,
  a.yOffset = c + (g * p + y * m) - y) : a.xOffset = a.yOffset = 0,
  a.xOrigin = T,
  a.yOrigin = x,
  a.smooth = !!r,
  a.origin = e,
  a.originIsAbsolute = !!i,
  t.style[ht] = "0px 0px",
  s && (wt(s, a, "xOrigin", f, T),
  wt(s, a, "yOrigin", h, x),
  wt(s, a, "xOffset", l, a.xOffset),
  wt(s, a, "yOffset", c, a.yOffset)),
  t.setAttribute("data-svg-origin", T + " " + x)
}, pe = function(t, e) {
  var i = t._gsap || new yr(t);
  if ("x"in i && !e && !i.uncache)
      return i;
  var r = t.style, n = i.scaleX < 0, s = "px", a = "deg", u = getComputedStyle(t), f = lt(t, ht) || "0", h, l, c, d, p, _, m, g, y, v, T, x, S, P, b, w, O, C, F, I, B, A, Y, N, H, Ct, Mt, ie, Dt, wi, dt, At;
  return h = l = c = _ = m = g = y = v = T = 0,
  d = p = 1,
  i.svg = !!(t.getCTM && Er(t)),
  u.translate && ((u.translate !== "none" || u.scale !== "none" || u.rotate !== "none") && (r[E] = (u.translate !== "none" ? "translate3d(" + (u.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (u.rotate !== "none" ? "rotate(" + u.rotate + ") " : "") + (u.scale !== "none" ? "scale(" + u.scale.split(" ").join(",") + ") " : "") + (u[E] !== "none" ? u[E] : "")),
  r.scale = r.rotate = r.translate = "none"),
  P = Ti(t, i.svg),
  i.svg && (i.uncache ? (H = t.getBBox(),
  f = i.xOrigin - H.x + "px " + (i.yOrigin - H.y) + "px",
  N = "") : N = !e && t.getAttribute("data-svg-origin"),
  si(t, N || f, !!N || i.originIsAbsolute, i.smooth !== !1, P)),
  x = i.xOrigin || 0,
  S = i.yOrigin || 0,
  P !== de && (C = P[0],
  F = P[1],
  I = P[2],
  B = P[3],
  h = A = P[4],
  l = Y = P[5],
  P.length === 6 ? (d = Math.sqrt(C * C + F * F),
  p = Math.sqrt(B * B + I * I),
  _ = C || F ? Ut(F, C) * Ft : 0,
  y = I || B ? Ut(I, B) * Ft + _ : 0,
  y && (p *= Math.abs(Math.cos(y * $t))),
  i.svg && (h -= x - (x * C + S * I),
  l -= S - (x * F + S * B))) : (At = P[6],
  wi = P[7],
  Mt = P[8],
  ie = P[9],
  Dt = P[10],
  dt = P[11],
  h = P[12],
  l = P[13],
  c = P[14],
  b = Ut(At, Dt),
  m = b * Ft,
  b && (w = Math.cos(-b),
  O = Math.sin(-b),
  N = A * w + Mt * O,
  H = Y * w + ie * O,
  Ct = At * w + Dt * O,
  Mt = A * -O + Mt * w,
  ie = Y * -O + ie * w,
  Dt = At * -O + Dt * w,
  dt = wi * -O + dt * w,
  A = N,
  Y = H,
  At = Ct),
  b = Ut(-I, Dt),
  g = b * Ft,
  b && (w = Math.cos(-b),
  O = Math.sin(-b),
  N = C * w - Mt * O,
  H = F * w - ie * O,
  Ct = I * w - Dt * O,
  dt = B * O + dt * w,
  C = N,
  F = H,
  I = Ct),
  b = Ut(F, C),
  _ = b * Ft,
  b && (w = Math.cos(b),
  O = Math.sin(b),
  N = C * w + F * O,
  H = A * w + Y * O,
  F = F * w - C * O,
  Y = Y * w - A * O,
  C = N,
  A = H),
  m && Math.abs(m) + Math.abs(_) > 359.9 && (m = _ = 0,
  g = 180 - g),
  d = L(Math.sqrt(C * C + F * F + I * I)),
  p = L(Math.sqrt(Y * Y + At * At)),
  b = Ut(A, Y),
  y = Math.abs(b) > 2e-4 ? b * Ft : 0,
  T = dt ? 1 / (dt < 0 ? -dt : dt) : 0),
  i.svg && (N = t.getAttribute("transform"),
  i.forceCSS = t.setAttribute("transform", "") || !zr(lt(t, E)),
  N && t.setAttribute("transform", N))),
  Math.abs(y) > 90 && Math.abs(y) < 270 && (n ? (d *= -1,
  y += _ <= 0 ? 180 : -180,
  _ += _ <= 0 ? 180 : -180) : (p *= -1,
  y += y <= 0 ? 180 : -180)),
  e = e || i.uncache,
  i.x = h - ((i.xPercent = h && (!e && i.xPercent || (Math.round(t.offsetWidth / 2) === Math.round(-h) ? -50 : 0))) ? t.offsetWidth * i.xPercent / 100 : 0) + s,
  i.y = l - ((i.yPercent = l && (!e && i.yPercent || (Math.round(t.offsetHeight / 2) === Math.round(-l) ? -50 : 0))) ? t.offsetHeight * i.yPercent / 100 : 0) + s,
  i.z = c + s,
  i.scaleX = L(d),
  i.scaleY = L(p),
  i.rotation = L(_) + a,
  i.rotationX = L(m) + a,
  i.rotationY = L(g) + a,
  i.skewX = y + a,
  i.skewY = v + a,
  i.transformPerspective = T + s,
  (i.zOrigin = parseFloat(f.split(" ")[2]) || 0) && (r[ht] = De(f)),
  i.xOffset = i.yOffset = 0,
  i.force3D = et.force3D,
  i.renderTransform = i.svg ? is : Ar ? Lr : es,
  i.uncache = 0,
  i
}, De = function(t) {
  return (t = t.split(" "))[0] + " " + t[1]
}, qe = function(t, e, i) {
  var r = W(e);
  return L(parseFloat(e) + parseFloat(kt(t, "x", i + "px", r))) + r
}, es = function(t, e) {
  e.z = "0px",
  e.rotationY = e.rotationX = "0deg",
  e.force3D = 0,
  Lr(t, e)
}, Rt = "0deg", re = "0px", Et = ") ", Lr = function(t, e) {
  var i = e || this
    , r = i.xPercent
    , n = i.yPercent
    , s = i.x
    , a = i.y
    , u = i.z
    , f = i.rotation
    , h = i.rotationY
    , l = i.rotationX
    , c = i.skewX
    , d = i.skewY
    , p = i.scaleX
    , _ = i.scaleY
    , m = i.transformPerspective
    , g = i.force3D
    , y = i.target
    , v = i.zOrigin
    , T = ""
    , x = g === "auto" && t && t !== 1 || g === !0;
  if (v && (l !== Rt || h !== Rt)) {
      var S = parseFloat(h) * $t, P = Math.sin(S), b = Math.cos(S), w;
      S = parseFloat(l) * $t,
      w = Math.cos(S),
      s = qe(y, s, P * w * -v),
      a = qe(y, a, -Math.sin(S) * -v),
      u = qe(y, u, b * w * -v + v)
  }
  m !== re && (T += "perspective(" + m + Et),
  (r || n) && (T += "translate(" + r + "%, " + n + "%) "),
  (x || s !== re || a !== re || u !== re) && (T += u !== re || x ? "translate3d(" + s + ", " + a + ", " + u + ") " : "translate(" + s + ", " + a + Et),
  f !== Rt && (T += "rotate(" + f + Et),
  h !== Rt && (T += "rotateY(" + h + Et),
  l !== Rt && (T += "rotateX(" + l + Et),
  (c !== Rt || d !== Rt) && (T += "skew(" + c + ", " + d + Et),
  (p !== 1 || _ !== 1) && (T += "scale(" + p + ", " + _ + Et),
  y.style[E] = T || "translate(0, 0)"
}, is = function(t, e) {
  var i = e || this, r = i.xPercent, n = i.yPercent, s = i.x, a = i.y, u = i.rotation, f = i.skewX, h = i.skewY, l = i.scaleX, c = i.scaleY, d = i.target, p = i.xOrigin, _ = i.yOrigin, m = i.xOffset, g = i.yOffset, y = i.forceCSS, v = parseFloat(s), T = parseFloat(a), x, S, P, b, w;
  u = parseFloat(u),
  f = parseFloat(f),
  h = parseFloat(h),
  h && (h = parseFloat(h),
  f += h,
  u += h),
  u || f ? (u *= $t,
  f *= $t,
  x = Math.cos(u) * l,
  S = Math.sin(u) * l,
  P = Math.sin(u - f) * -c,
  b = Math.cos(u - f) * c,
  f && (h *= $t,
  w = Math.tan(f - h),
  w = Math.sqrt(1 + w * w),
  P *= w,
  b *= w,
  h && (w = Math.tan(h),
  w = Math.sqrt(1 + w * w),
  x *= w,
  S *= w)),
  x = L(x),
  S = L(S),
  P = L(P),
  b = L(b)) : (x = l,
  b = c,
  S = P = 0),
  (v && !~(s + "").indexOf("px") || T && !~(a + "").indexOf("px")) && (v = kt(d, "x", s, "px"),
  T = kt(d, "y", a, "px")),
  (p || _ || m || g) && (v = L(v + p - (p * x + _ * P) + m),
  T = L(T + _ - (p * S + _ * b) + g)),
  (r || n) && (w = d.getBBox(),
  v = L(v + r / 100 * w.width),
  T = L(T + n / 100 * w.height)),
  w = "matrix(" + x + "," + S + "," + P + "," + b + "," + v + "," + T + ")",
  d.setAttribute("transform", w),
  y && (d.style[E] = w)
}, rs = function(t, e, i, r, n) {
  var s = 360, a = X(n), u = parseFloat(n) * (a && ~n.indexOf("rad") ? Ft : 1), f = u - r, h = r + f + "deg", l, c;
  return a && (l = n.split("_")[1],
  l === "short" && (f %= s,
  f !== f % (s / 2) && (f += f < 0 ? s : -s)),
  l === "cw" && f < 0 ? f = (f + s * Ri) % s - ~~(f / s) * s : l === "ccw" && f > 0 && (f = (f - s * Ri) % s - ~~(f / s) * s)),
  t._pt = c = new j(t._pt,e,i,r,f,Vn),
  c.e = h,
  c.u = "deg",
  t._props.push(i),
  c
}, Bi = function(t, e) {
  for (var i in e)
      t[i] = e[i];
  return t
}, ns = function(t, e, i) {
  var r = Bi({}, i._gsap), n = "perspective,force3D,transformOrigin,svgOrigin", s = i.style, a, u, f, h, l, c, d, p;
  r.svg ? (f = i.getAttribute("transform"),
  i.setAttribute("transform", ""),
  s[E] = e,
  a = pe(i, 1),
  ce(i, E),
  i.setAttribute("transform", f)) : (f = getComputedStyle(i)[E],
  s[E] = e,
  a = pe(i, 1),
  s[E] = f);
  for (u in xt)
      f = r[u],
      h = a[u],
      f !== h && n.indexOf(u) < 0 && (d = W(f),
      p = W(h),
      l = d !== p ? kt(i, u, f, p) : parseFloat(f),
      c = parseFloat(h),
      t._pt = new j(t._pt,a,u,l,c - l,ii),
      t._pt.u = p || 0,
      t._props.push(u));
  Bi(a, r)
};
Z("padding,margin,Width,Radius", function(o, t) {
  var e = "Top"
    , i = "Right"
    , r = "Bottom"
    , n = "Left"
    , s = (t < 3 ? [e, i, r, n] : [e + n, e + i, r + i, r + n]).map(function(a) {
      return t < 2 ? o + a : "border" + a + o
  });
  Me[t > 1 ? "border" + o : o] = function(a, u, f, h, l) {
      var c, d;
      if (arguments.length < 4)
          return c = s.map(function(p) {
              return mt(a, p, f)
          }),
          d = c.join(" "),
          d.split(c[0]).length === 5 ? c[0] : d;
      c = (h + "").split(" "),
      d = {},
      s.forEach(function(p, _) {
          return d[p] = c[_] = c[_] || c[(_ - 1) / 2 | 0]
      }),
      a.init(u, d, l)
  }
});
var Ir = {
  name: "css",
  register: ni,
  targetTest: function(t) {
      return t.style && t.nodeType
  },
  init: function(t, e, i, r, n) {
      var s = this._props, a = t.style, u = i.vars.startAt, f, h, l, c, d, p, _, m, g, y, v, T, x, S, P, b;
      yi || ni(),
      this.styles = this.styles || Dr(t),
      b = this.styles.props,
      this.tween = i;
      for (_ in e)
          if (_ !== "autoRound" && (h = e[_],
          !(J[_] && xr(_, e, i, r, t, n)))) {
              if (d = typeof h,
              p = Me[_],
              d === "function" && (h = h.call(i, r, t, n),
              d = typeof h),
              d === "string" && ~h.indexOf("random(") && (h = _e(h)),
              p)
                  p(this, t, _, h, i) && (P = 1);
              else if (_.substr(0, 2) === "--")
                  f = (getComputedStyle(t).getPropertyValue(_) + "").trim(),
                  h += "",
                  Pt.lastIndex = 0,
                  Pt.test(f) || (m = W(f),
                  g = W(h)),
                  g ? m !== g && (f = kt(t, _, f, g) + g) : m && (h += m),
                  this.add(a, "setProperty", f, h, r, n, 0, 0, _),
                  s.push(_),
                  b.push(_, 0, a[_]);
              else if (d !== "undefined") {
                  if (u && _ in u ? (f = typeof u[_] == "function" ? u[_].call(i, r, t, n) : u[_],
                  X(f) && ~f.indexOf("random(") && (f = _e(f)),
                  W(f + "") || (f += et.units[_] || W(mt(t, _)) || ""),
                  (f + "").charAt(1) === "=" && (f = mt(t, _))) : f = mt(t, _),
                  c = parseFloat(f),
                  y = d === "string" && h.charAt(1) === "=" && h.substr(0, 2),
                  y && (h = h.substr(2)),
                  l = parseFloat(h),
                  _ in gt && (_ === "autoAlpha" && (c === 1 && mt(t, "visibility") === "hidden" && l && (c = 0),
                  b.push("visibility", 0, a.visibility),
                  wt(this, a, "visibility", c ? "inherit" : "hidden", l ? "inherit" : "hidden", !l)),
                  _ !== "scale" && _ !== "transform" && (_ = gt[_],
                  ~_.indexOf(",") && (_ = _.split(",")[0]))),
                  v = _ in xt,
                  v) {
                      if (this.styles.save(_),
                      T || (x = t._gsap,
                      x.renderTransform && !e.parseTransform || pe(t, e.parseTransform),
                      S = e.smoothOrigin !== !1 && x.smooth,
                      T = this._pt = new j(this._pt,a,E,0,1,x.renderTransform,x,0,-1),
                      T.dep = 1),
                      _ === "scale")
                          this._pt = new j(this._pt,x,"scaleY",x.scaleY,(y ? Wt(x.scaleY, y + l) : l) - x.scaleY || 0,ii),
                          this._pt.u = 0,
                          s.push("scaleY", _),
                          _ += "X";
                      else if (_ === "transformOrigin") {
                          b.push(ht, 0, a[ht]),
                          h = Jn(h),
                          x.svg ? si(t, h, 0, S, 0, this) : (g = parseFloat(h.split(" ")[2]) || 0,
                          g !== x.zOrigin && wt(this, x, "zOrigin", x.zOrigin, g),
                          wt(this, a, _, De(f), De(h)));
                          continue
                      } else if (_ === "svgOrigin") {
                          si(t, h, 1, S, 0, this);
                          continue
                      } else if (_ in Fr) {
                          rs(this, x, _, c, y ? Wt(c, y + h) : h);
                          continue
                      } else if (_ === "smoothOrigin") {
                          wt(this, x, "smooth", x.smooth, h);
                          continue
                      } else if (_ === "force3D") {
                          x[_] = h;
                          continue
                      } else if (_ === "transform") {
                          ns(this, h, t);
                          continue
                      }
                  } else
                      _ in a || (_ = te(_) || _);
                  if (v || (l || l === 0) && (c || c === 0) && !Nn.test(h) && _ in a)
                      m = (f + "").substr((c + "").length),
                      l || (l = 0),
                      g = W(h) || (_ in et.units ? et.units[_] : m),
                      m !== g && (c = kt(t, _, f, g)),
                      this._pt = new j(this._pt,v ? x : a,_,c,(y ? Wt(c, y + l) : l) - c,!v && (g === "px" || _ === "zIndex") && e.autoRound !== !1 ? Un : ii),
                      this._pt.u = g || 0,
                      m !== g && g !== "%" && (this._pt.b = f,
                      this._pt.r = Yn);
                  else if (_ in a)
                      jn.call(this, t, _, f, y ? y + h : h);
                  else if (_ in t)
                      this.add(t, _, f || t[_], y ? y + h : h, r, n);
                  else if (_ !== "parseTransform") {
                      fi(_, h);
                      continue
                  }
                  v || (_ in a ? b.push(_, 0, a[_]) : b.push(_, 1, f || t[_])),
                  s.push(_)
              }
          }
      P && Sr(this)
  },
  render: function(t, e) {
      if (e.tween._time || !xi())
          for (var i = e._pt; i; )
              i.r(t, i.d),
              i = i._next;
      else
          e.styles.revert()
  },
  get: mt,
  aliases: gt,
  getSetter: function(t, e, i) {
      var r = gt[e];
      return r && r.indexOf(",") < 0 && (e = r),
      e in xt && e !== ht && (t._gsap.x || mt(t, "x")) ? i && Ai === i ? e === "scale" ? Gn : Wn : (Ai = i || {}) && (e === "scale" ? $n : Hn) : t.style && !oi(t.style[e]) ? Xn : ~e.indexOf("-") ? qn : mi(t, e)
  },
  core: {
      _removeProperty: ce,
      _getMatrix: Ti
  }
};
rt.utils.checkPrefix = te;
rt.core.getStyleSaver = Dr;
(function(o, t, e, i) {
  var r = Z(o + "," + t + "," + e, function(n) {
      xt[n] = 1
  });
  Z(t, function(n) {
      et.units[n] = "deg",
      Fr[n] = 1
  }),
  gt[r[13]] = o + "," + t,
  Z(i, function(n) {
      var s = n.split(":");
      gt[s[1]] = r[s[0]]
  })
}
)("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
Z("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(o) {
  et.units[o] = "px"
});
rt.registerPlugin(Ir);
var ze = rt.registerPlugin(Ir) || rt;
ze.core.Tween;

const Br = {
  src: "/image/open-peeps-sheet.png",
  rows: 15,
  cols: 7
}
, Nr = (o,t)=>o + Math.random() * (t - o)
, Vr = o=>Nr(0, o.length) | 0
, Yr = (o,t)=>o.splice(t, 1)[0]
, ss = (o,t)=>Yr(o, o.indexOf(t))
, as = o=>Yr(o, Vr(o))
, os = o=>o[Vr(o) | 0]
, us = ({stage: o, peep: t})=>{
  const e = Math.random() > .5 ? 1 : -1
    , i = 100 - 250 * ze.parseEase("power2.in")(Math.random())
    , r = o.height - t.height + i;
  let n, s;
  return e === 1 ? (n = -t.width,
  s = o.width,
  t.scaleX = 1) : (n = o.width + t.width,
  s = 0,
  t.scaleX = -1),
  t.x = n,
  t.y = r,
  t.anchorY = r,
  {
      startX: n,
      startY: r,
      endX: s
  }
}
, fs = ({peep: o, props: t})=>{
  const {startX: e, startY: i, endX: r} = t
    , n = 10
    , s = .25
    , a = ze.timeline();
  return a.timeScale(Nr(.5, 1.5)),
  a.to(o, {
      duration: n,
      x: r,
      ease: "none"
  }, 0),
  a.to(o, {
      duration: s,
      repeat: n / s,
      yoyo: !0,
      y: i - 10
  }, 0),
  a
}
, hs = [fs];
class _s {
  constructor({image: t, rect: e}) {
      this.image = t,
      this.setRect(e),
      this.x = 0,
      this.y = 0,
      this.anchorY = 0,
      this.scaleX = 1,
      this.walk = null
  }
  setRect(t) {
      this.rect = t,
      this.width = t[2],
      this.height = t[3],
      this.drawArgs = [this.image, ...t, 0, 0, this.width, this.height]
  }
  render(t) {
      t.save(),
      t.translate(this.x, this.y),
      t.scale(this.scaleX, 1),
      t.drawImage(...this.drawArgs),
      t.restore()
  }
}

const Ae = document.createElement("img");
Ae.onload = ls;
Ae.src = Br.src;
const Lt = document.querySelector("#openPeepsSheet")
, xe = Lt.getContext("2d")
, ae = {
  width: 0,
  height: 0
}
, Ur = []
, me = []
, ee = [];

function RM() {
  Lt.oncontextmenu=function(ev){
    ev.preventDefault();
  }
}
function ls() {
  cs(),
  Ni(),
  ze.ticker.add(ms),
  window.addEventListener("resize", Ni),
  RM()
}
function cs() {
  const {rows: o, cols: t} = Br
    , {naturalWidth: e, naturalHeight: i} = Ae
    , r = o * t
    , n = e / o
    , s = i / t;
  for (let a = 0; a < r; a++)
      Ur.push(new _s({
          image: Ae,
          rect: [a % o * n, (a / o | 0) * s, n, s]
      }))
}
function Ni() {
  ae.width = Lt.clientWidth,
  ae.height = Lt.clientHeight,
  Lt.width = ae.width * devicePixelRatio,
  Lt.height = ae.height * devicePixelRatio,
  ee.forEach(o=>{ o.walk.kill() } ),
  ee.length = 0,
  me.length = 0,
  me.push(...Ur),
  ds()
}
function ds() {
  for (; me.length; )
      Xr().walk.progress(Math.random())
}
function Xr() {
  const o = as(me)
    , t = os(hs)({
      peep: o,
      props: us({
          peep: o,
          stage: ae
      })
  }).eventCallback("onComplete", ()=>{
      ps(o),
      Xr()
  }
  );
  return o.walk = t,
  ee.push(o),
  ee.sort((e,i)=>e.anchorY - i.anchorY),
  o
}
function ps(o) {
  ss(ee, o),
  me.push(o)
}
function ms() {
  Lt.width = Lt.width,
  xe.save(),
  xe.scale(devicePixelRatio, devicePixelRatio),
  ee.forEach(o=>{
      o.render(xe)
  }
  ),
  xe.restore()
}
