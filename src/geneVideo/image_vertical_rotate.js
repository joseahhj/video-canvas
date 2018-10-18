function r(e, t, a, o, s, f, g, m) {
    var n = e.context,
        d = e.images,
        l = e.canvas,
        w = e.passerpipe,
        x = (a.x - t.x) / s,
        y = (a.y - t.y) / s;
    n.clearRect(0, 0, l.width, l.height),
        n.globalAlpha = 1;
    var c = d[o],
        v = s - f,
        p = t.x + x * v,
        I = t.x + l.width + x * v,
        u = t.y + y * v;
    if (n.save(),
        n.fillStyle = "#fff",
        n.fillRect(0, 0, l.width, l.height),
        n.restore(),
        0 === o) {
        if (n.drawImage(c, 0, 0, l.width, u, 0, 0, l.width, u),
            0 === m)
            for (var P = 0; 10 > P; P++)
                n.beginPath(),
                n.globalAlpha = 1 - P / 10,
                n.save(),
                n.rect(0, 0, l.width, u + 2 * P),
                n.clip(),
                n.drawImage(c, 0, 0, l.width, l.height),
                n.restore(),
                n.closePath()
    } else if (void 0 === t.r)
        if (x > 0)
            I = t.x + l.width + 1.5 * x * v,
            n.drawImage(c, p, 0, l.width, l.height),
            n.drawImage(d[o - 1], I, 0, l.width, l.height);
        else if (0 > x)
        p = t.x + 1.5 * x * v,
        n.drawImage(c, I, 0, l.width, l.height),
        n.drawImage(d[o - 1], p, 0, l.width, l.height);
    else {
        var b = t.y + l.height + 1.5 * y * v;
        n.drawImage(c, 0, u, l.width, l.height),
            n.drawImage(d[o - 1], 0, b, l.width, l.height)
    } else {
        var A, T, M, R = a.x - t.x,
            S = (a.y - t.y) / s;
        M = R > 0 ? (t.r - a.r) / s : (a.r - t.r) / s,
            f > s / 2 ? (A = t.y + S * (s - f),
                T = t.r + M * (s - f),
                n.save(),
                n.translate(R, l.height),
                n.rotate(T),
                n.translate(-R, -l.height),
                n.drawImage(c, 0, A, l.width, l.height),
                n.restore(),
                n.save(),
                n.translate(R, 0),
                n.rotate(-T),
                n.translate(-R, 0),
                n.drawImage(d[o - 1], 0, -A, l.width, l.height),
                n.restore()) : (A = t.y + S * f,
                T = t.r + M * f,
                n.save(),
                n.translate(R, 0),
                n.rotate(-T),
                n.translate(-R, 0),
                n.drawImage(d[o - 1], 0, -A, l.width, l.height),
                n.restore(),
                n.save(),
                n.translate(R, l.height),
                n.rotate(T),
                n.translate(-R, -l.height),
                n.drawImage(c, 0, A, l.width, l.height),
                n.restore())
    }
    if (w && l.syncJPEGStream().pipe(w, {
            end: !1
        }), !i)
        return void n.clearRect(0, 0, l.width, l.height);
    if (f > 0)
        setTimeout(function() {
            r(e, t, a, o, s, f - 1, g, 0)
        }, 13);
    else if (n.drawImage(d[o], 0, 0, l.width, l.height),
        o === d.length - 2)
        if (m++,
            40 > m)
            setTimeout(function() {
                r(e, t, a, o, s, -1, g, m)
            }, 13);
        else
            var j = 1,
                C = 0,
                D = setInterval(function() {
                    return j -= .03,
                        C += .03,
                        n.globalAlpha = C,
                        n.drawImage(d[o + 1], 0, 0, l.width, l.height),
                        n.globalAlpha = j,
                        n.drawImage(d[o], 0, 0, l.width, l.height),
                        0 > j ? (w && w.end(),
                            "function" == typeof g && g(),
                            clearInterval(D),
                            n.globalAlpha = 1,
                            void n.drawImage(d[o + 1], 0, 0, l.width, l.height)) : void 0
                }, 50);
    else if (m++,
        40 > m)
        setTimeout(function() {
            r(e, t, a, o, s, 0, g, m)
        }, 13);
    else {
        var E = h[o + 1];
        r(e, E.from, E.to, o + 1, E.frames, E.frames, g, 0)
    }
}
var i = !0,
    h = [{
        from: {
            x: 0,
            y: 0
        },
        to: {
            x: 0,
            y: 1280
        },
        frames: 40
    }, {
        from: {
            x: 0,
            y: -1280
        },
        to: {
            x: 0,
            y: 0
        },
        frames: 80
    }, {
        from: {
            x: 0,
            y: 0,
            r: 0
        },
        to: {
            x: 800,
            y: 1280,
            r: Math.PI / 3
        },
        frames: 80
    }, {
        from: {
            x: 0,
            y: -1280
        },
        to: {
            x: 0,
            y: 0
        },
        frames: 80
    }, {
        from: {
            x: 0,
            y: 0
        },
        to: {
            x: 0,
            y: -1280
        },
        frames: 80
    }, {
        from: {
            x: 0,
            y: 0,
            r: 0
        },
        to: {
            x: 800,
            y: 0,
            r: Math.PI / 3
        },
        frames: 80
    }, {
        from: {
            x: -720,
            y: 0
        },
        to: {
            x: 0,
            y: 0
        },
        frames: 80
    }, {
        from: {
            x: 0,
            y: 0,
            r: 0
        },
        to: {
            x: 800,
            y: 0,
            r: Math.PI / 3
        },
        frames: 80
    }, {
        from: {
            x: 0,
            y: -1280
        },
        to: {
            x: 0,
            y: 0
        },
        frames: 80
    }, {
        from: {
            x: 0,
            y: -1280
        },
        to: {
            x: 0,
            y: 0
        },
        frames: 80
    }];

function render(e, t, a) {
    i = !0;
    var o = t.images,
        s = t.canvas,
        f = s.getContext("2d"),
        g = {
            images: o,
            canvas: s,
            context: f,
            passerpipe: e,
            date: new Date
        },
        m = h[0];
    r(g, m.from, m.to, 0, m.frames, m.frames, a)
}

function config(e) {
    return e.fps(50).videoFilters("setpts=0.335*PTS")
}

function stop() {
    i = !1
}
const imageVerticalRotate = {
    render: render,
    stop: stop
}

module.exports = imageVerticalRotate