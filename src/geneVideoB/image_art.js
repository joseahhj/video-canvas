function r(e, t, a, o, n, f, m, h) {
    var l, c, d, g, p = e.context,
        x = e.images,
        y = e.canvas,
        v = e.passerpipe,
        w = (a.x - t.x) / n,
        u = (a.y - t.y) / n;
    p.clearRect(0, 0, y.width, y.height);
    var I = n - f,
        P = t.x + w * I,
        b = t.y + u * I;
    var old = new Date().getTime();
    if (t.x < a.x || t.y < a.y ? (l = o,
            c = o + 1) : (l = o + 1,
            c = o),
        p.globalAlpha = 1,
        p.drawImage(x[l], 0, 0, y.width, y.height), !h) {
        if (o % 2) {
            for (let A = 50; 0 < A; A--) {
                p.beginPath();
                p.globalAlpha = 1 - A / 49;
                p.save();
                p.arc(640, 360, P + 2 * A, 0, 2 * Math.PI);
                p.clip();
                p.drawImage(x[c], 0, 0, y.width, y.height);
                p.restore();
                p.closePath();
            }
        } else if (0 === w ? (d = 1280,
                g = 0) : (d = 0,
                g = 720), 0 !== o || 0 === o && 0 !== P) {
            for (let S = 50; 0 < S; S--) {
                p.beginPath();
                p.globalAlpha = 1 - S / 49;
                p.save();
                p.rect(0, 0, d + P + 2 * S, g + b + 2 * S);
                p.clip();
                p.drawImage(x[c], 0, 0, y.width, y.height);
                p.restore();
                p.closePath();
            }

        }
    }

    if (!i)
        return p.globalAlpha = 1,
            void p.clearRect(0, 0, y.width, y.height);
    if (f > 0) {
        setTimeout(function() {
            var now = new Date().getTime();
            //console.log(now - old, 'f');
            r(e, t, a, o, n, f - 1, m, 0)
        }, 13);
    } else if (o === x.length - 3)
        if (p.drawImage(x[o + 1], 0, 0, y.width, y.height),
            // v && y.syncJPEGStream().pipe(v, {
            //     end: !1
            // }),
            h++,
            5 > h)
            setTimeout(function() {
                r(e, t, a, o, n, -1, m, h)
            }, 13);
        else {
            var E = 1,
                G = 0;
            setTimeout(function() {
                var e = setInterval(function() {
                    return E -= .03,
                        G += .03,
                        p.globalAlpha = G,
                        p.drawImage(x[o + 2], 0, 0, y.width, y.height),
                        p.globalAlpha = E,
                        p.drawImage(x[o + 1], 0, 0, y.width, y.height),
                        // v && y.syncJPEGStream().pipe(v, {
                        //     end: !1
                        // }),
                        0 > E ? (v && v.end(),
                            "function" == typeof m && m(),
                            clearInterval(e),
                            p.clearRect(0, 0, y.width, y.height),
                            p.globalAlpha = 1,
                            p.drawImage(x[o + 2], 0, 0, y.width, y.height),
                            void(v && y.syncJPEGStream().pipe(v, {
                                end: !1
                            }))) : void 0
                }, 50)
            }, 100)
        }
    else if (p.drawImage(x[o + 1], 0, 0, y.width, y.height),
        // v && y.syncJPEGStream().pipe(v, {
        //     end: !1
        // }),
        h++,
        5 > h) {
        setTimeout(function() {
            r(e, t, a, o, n, 0, m, h)
        }, 13)
    } else {
        var J = s[o + 1];
        r(e, J.from, J.to, o + 1, J.frames, J.frames, m, 0)
    }
}
var i = !0,
    o = 20,
    s = [{
        from: {
            x: 0,
            y: 720
        },
        to: {
            x: 1280,
            y: 720
        },
        frames: o
    }, {
        from: {
            x: 0,
            y: 0
        },
        to: {
            x: 800,
            y: 60
        },
        frames: o
    }, {
        from: {
            x: 1280,
            y: 720
        },
        to: {
            x: 0,
            y: 720
        },
        frames: o
    }, {
        from: {
            x: 800,
            y: 60
        },
        to: {
            x: 0,
            y: 0
        },
        frames: o
    }, {
        from: {
            x: 1280,
            y: 0
        },
        to: {
            x: 1280,
            y: 720
        },
        frames: o
    }, {
        from: {
            x: 0,
            y: 0
        },
        to: {
            x: 800,
            y: 60
        },
        frames: o
    }, {
        from: {
            x: 1280,
            y: 720
        },
        to: {
            x: 1280,
            y: 0
        },
        frames: o
    }, {
        from: {
            x: 800,
            y: 60
        },
        to: {
            x: 0,
            y: 0
        },
        frames: o
    }, {
        from: {
            x: 0,
            y: 720
        },
        to: {
            x: 1280,
            y: 720
        },
        frames: o
    }, {
        from: {
            x: 0,
            y: 0
        },
        to: {
            x: 800,
            y: 60
        },
        frames: o
    }];

function render(e, t, a) {
    i = !0;
    var o = t.images,
        n = t.canvas,
        f = n.getContext("2d"),
        m = {
            images: o,
            canvas: n,
            context: f,
            passerpipe: e,
            date: new Date
        },
        h = s[0];
    r(m, h.from, h.to, 0, h.frames, h.frames, a, 0)
}



// function config(e) {
//     return e.fps(50).videoFilters("setpts=0.335*PTS")
// }

function stop() {
    i = !1
}

export const imageArt = {
    render: render,
    stop: stop
}