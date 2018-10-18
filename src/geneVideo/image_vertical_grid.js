const {
    createCanvas
} = require("canvas");

function n(a) {
    var t = [
            [1, 1],
            [1, 2],
            [1, 3],
            [2, 3],
            [3, 3],
            [3, 2],
            [3, 1],
            [2, 1],
            [2, 2]
        ],
        n = [];
    if (a.length < 4)
        n = [
            [0, 1, 0, 1, 0],
            [1, 0, 1, 0, 1],
            [0, 1, 0, 1, 0],
            [1, 0, 1, 0, 1],
            [0, 1, 0, 1, 0]
        ];
    else {
        for (var r = 0; 5 > r; r++) {
            n[r] = [];
            for (var i = 0; 5 > i; i++)
                n[r][i] = -1
        }
        for (var o = 0; o < a.length - 1; o++)
            n[t[o][1]][t[o][0]] = o;
        for (var c = 0; 5 > c; c++)
            for (var s = 0; 5 > s; s++)
                if (-1 === n[c][s]) {
                    var u = [];
                    c > 0 && u.push(n[c - 1][s]),
                        4 > c && u.push(n[c + 1][s]),
                        s > 0 && u.push(n[c][s - 1]),
                        4 > s && u.push(n[c][s + 1]);
                    for (var f = [], l = 0; l < a.length - 1; l++) {
                        for (var v = !1, p = 0; p < u.length; p++)
                            if (l === u[p]) {
                                v = !0;
                                break
                            }
                        v || f.push(l)
                    }
                    n[c][s] = f[Math.floor(Math.random() * f.length)]
                }
    }
    var g;
    g = createCanvas(3304, 1860)
        // try {
        //     g = document.createElement("canvas"),
        //         g.width = 3304,
        //         g.height = 1860
        // } catch (h) {
        //     var d = e("canvas");
        //     g = new d(3304, 1860)
        // }
    var m = g.getContext("2d");
    m.fillStyle = "black",
        m.fillRect(0, 0, g.width, g.height);
    for (var b = 0; 5 > b; b++)
        for (var k = 0; 5 > k; k++) {
            var x = 666 * b,
                w = 375 * k;
            m.drawImage(a[n[b][k]], x, w, 640, 360)
        }
    return g
}

function r(e, a, t, n, i, o, c, s, u, l, v) {
    var p = o.context,
        g = o.canvas,
        h = o.passerpipe,
        d = o.images[0];
    if (p.drawImage(d, a, t, n, i, 0, 0, 720, 1280),
        l)
        if (v++,
            8 > v)
            setTimeout(function() {
                r(e, a, t, n, i, o, c, s, u, l, v)
            }, 100);
        else if (s === o.count - 1)
        var m = 1,
            b = 0,
            k = setInterval(function() {
                return m -= .03,
                    b += .03,
                    o.context.globalAlpha = b,
                    o.context.drawImage(o.images[1], 0, 0, 720, 1280),
                    o.context.globalAlpha = m,
                    r(e, a, t, n, i, o),
                    h && g.syncJPEGStream().pipe(h, {
                        end: !1
                    }),
                    f ? void(b > 1 && 0 > m && (o.context.globalAlpha = 1,
                        o.passerpipe && o.passerpipe.end(),
                        "function" == typeof u && u(),
                        clearInterval(k))) : (o.context.globalAlpha = 1,
                        void clearInterval(k))
            }, 100);
    else
        e(o, c, s, u);
    h && g.syncJPEGStream().pipe(h, {
        end: !1
    })
}

function i(e, a, t, n, i, o, c, s, u, f) {
    Math.animation(t, n, function(l) {
        var v = e + i * l,
            p = a + l,
            g = 850 - 2 * i * l,
            h = 478 - 2 * l;
        if (r(f, v, p, g, h, o),
            l === n)
            if (n > t) {
                var d = !0,
                    m = 0;
                r(f, v, p, g, h, o, c, s, u, d, m)
            } else
                f(o, c, s, u)
    }, "Quad.easeOut", 300)
}

function o(e, a, t, n, i, o, c, s, u) {
    Math.animation(t, n, function(t) {
        var f = a,
            l = 852,
            v = 480,
            p = e + t;
        r(u, p, f, l, v, i),
            t === n && u(i, o, c, s)
    }, "Quad.easeOut", 650)
}

function c(e, a, t, n, i, o, c, s, u) {
    Math.animation(t, n, function(t) {
        var f = a + t,
            l = 852,
            v = 480,
            p = e;
        r(u, p, f, l, v, i),
            t === n && u(i, o, c, s)
    }, "Quad.easeOut", 550)
}

function s(e, a, t, n) {
    var r = e.context,
        u = e.scale;
    if (a++,
        a > 2 && (a = 0,
            t++),
        r.clearRect(0, 0, 720, 1280),
        f)
        switch (t) {
            case 0:
                0 === a ? i(560, 315, 0, 60, u, e, a, t, n, s) : 1 === a ? i(560, 315, 60, 0, u, e, a, t, n, s) : o(560, 315, 0, 666, e, a, t, n, s);
                break;
            case 1:
                0 === a ? i(1226, 315, 0, 60, u, e, a, t, n, s) : 1 === a ? i(1226, 315, 60, 0, u, e, a, t, n, s) : o(1220, 315, 0, 666, e, a, t, n, s);
                break;
            case 2:
                0 === a ? i(1892, 315, 0, 60, u, e, a, t, n, s) : 1 === a ? i(1892, 315, 60, 0, u, e, a, t, n, s) : c(1892, 315, 0, 375, e, a, t, n, s);
                break;
            case 3:
                0 === a ? i(1892, 690, 0, 60, u, e, a, t, n, s) : 1 === a ? i(1892, 690, 60, 0, u, e, a, t, n, s) : c(1892, 690, 0, 375, e, a, t, n, s);
                break;
            case 4:
                0 === a ? i(1892, 1065, 0, 60, u, e, a, t, n, s) : 1 === a ? i(1892, 1065, 60, 0, u, e, a, t, n, s) : o(1892, 1065, 0, -666, e, a, t, n, s);
                break;
            case 5:
                0 === a ? i(1226, 1065, 0, 60, u, e, a, t, n, s) : 1 === a ? i(1226, 1065, 60, 0, u, e, a, t, n, s) : o(1220, 1065, 0, -666, e, a, t, n, s);
                break;
            case 6:
                0 === a ? i(560, 1065, 0, 60, u, e, a, t, n, s) : 1 === a ? i(560, 1065, 60, 0, u, e, a, t, n, s) : c(560, 1065, 0, -375, e, a, t, n, s);
                break;
            case 7:
                0 === a ? i(560, 690, 0, 60, u, e, a, t, n, s) : 1 === a ? i(560, 690, 60, 0, u, e, a, t, n, s) : o(560, 690, 0, 666, e, a, t, n, s);
                break;
            case 8:
                0 === a ? i(1226, 690, 0, 60, u, e, a, t, n, s) : 1 === a ? i(1226, 690, 60, 0, u, e, a, t, n, s) : i(1226, 690, 0, 60, u, e, a, t, n, s)
        }
}
var u = {
    Quad: {
        easeOut: function(e, a, t, n) {
            var r = -t * (e /= n) * (e - 2) + a;
            return r
        }
    }
};
Math.tween = u;
var f = !0,
    l = function(e) {
        setTimeout(e, 17)
    };
Math.animation = function(e, a, t, n, r) {
    var i = function(e) {
            return "function" == typeof e
        },
        o = function(e) {
            return "number" == typeof e
        },
        c = function(e) {
            return "string" == typeof e
        },
        s = function(e) {
            if (o(e))
                return e;
            if (c(e)) {
                if (/\d+m?s$/.test(e))
                    return /ms/.test(e) ? 1 * e.replace("ms", "") : 1e3 * e.replace("s", "");
                if (/^\d+$/.test(e))
                    return +e
            }
            return -1
        };
    if (!o(e) || !o(a))
        return window.console,
            0;
    var u = Math.tween,
        v = {
            duration: 300,
            easing: "Linear",
            callback: function() {}
        },
        p = function(e) {
            i(e) ? v.callback = e : -1 !== s(e) ? v.duration = s(e) : c(e) && (v.easing = e)
        };
    p(t),
        p(n),
        p(r);
    var g = 0,
        h = Math.ceil(v.duration / 17);
    v.easing = v.easing.slice(0, 1).toUpperCase() + v.easing.slice(1);
    var d, m = v.easing.split(".");
    if (1 === m.length ? d = u[m[0]] : 2 === m.length && (d = u[m[0]] && u[m[0]][m[1]]),
        i(d) !== !1) {
        var b = function() {
            var t = d(g, e, a - e, h);
            f && (g++,
                h >= g ? (v.callback(t),
                    l(b)) : v.callback(a, !0))
        };
        b()
    }
}

function render(e, a, t) {
    f = !0;
    var r = [n(a.images), a.images[a.images.length - 1]],
        i = a.canvas,
        o = i.getContext("2d"),
        c = -1,
        u = 0,
        l = 53 / 30,
        v = a.images.length - 1,
        p = {
            images: r,
            canvas: i,
            context: o,
            passerpipe: e,
            date: new Date,
            count: v,
            scale: l
        };
    s(p, c, u, t)
}

function config(e) {
    return e
}

function stop() {
    f = !1
}

const imageVerticalGrid = {
    render: render,
    stop: stop
}
module.exports = imageVerticalGrid