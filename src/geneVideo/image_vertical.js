function i(e, t, a, f, n, l, s, m) {
    var h = e.context,
        g = e.images,
        x = e.canvas,
        d = e.passerpipe,
        c = (a.x - t.x) / n;
    h.clearRect(0, 0, x.width, x.height);
    var p = g[f],
        y = t.x + c * (n - l) * (n + l) / n;
    if (h.fillStyle = "#212121",
        h.fillRect(0, 0, x.width, x.height),
        0 === f ? h.drawImage(p, 0, 0, x.width, x.height) : (h.drawImage(p, y, 0, x.width, x.height),
            h.drawImage(g[f - 1], -720 + y, 0, x.width, x.height)),
        d && x.syncJPEGStream().pipe(d, {
            end: !1
        }), !r)
        return void h.clearRect(0, 0, x.width, x.height);
    if (l > 0)
        setTimeout(function() {
            i(e, t, a, f, n, l - 1, s, 0)
        }, 13);
    else if (h.drawImage(g[f], 0, 0, x.width, x.height),
        f === g.length - 2)
        if (m++,
            40 > m)
            setTimeout(function() {
                i(e, t, a, f, n, -1, s, m)
            }, 13);
        else
            var v = 1,
                w = 0,
                u = setInterval(function() {
                    v -= .03,
                        w += .03,
                        h.globalAlpha = w,
                        h.drawImage(g[f + 1], 0, 0, x.width, x.height),
                        h.globalAlpha = w - .3,
                        h.font = "15px PingFang",
                        h.fillStyle = "#D4D4D4",
                        h.textAlign = "left";
                    var e = "背景音乐来源：词：林秋离 曲：Brenna";
                    if (h.fillText(e, 10, x.height - 10),
                        h.globalAlpha = v,
                        h.drawImage(g[f], 0, 0, x.width, x.height),
                        0 > v) {
                        d && d.end(),
                            "function" == typeof s && s(),
                            clearInterval(u),
                            h.globalAlpha = 1,
                            h.drawImage(g[f + 1], 0, 0, x.width, x.height),
                            h.globalAlpha = .7,
                            h.font = "15px PingFang",
                            h.fillStyle = "#D4D4D4",
                            h.textAlign = "left";
                        var e = "背景音乐来源：词：林秋离 曲：Brenna";
                        //return void h.fillText(e, 10, x.height - 10)
                    }
                }, 50);
    else if (m++,
        80 > m)
        setTimeout(function() {
            i(e, t, a, f, n, 0, s, m)
        }, 13);
    else {
        var I = o[f + 1];
        i(e, I.from, I.to, f + 1, I.frames, I.frames, s, 0)
    }
}
var r = !0,
    o = [{
        from: {
            x: 720,
            y: 0
        },
        to: {
            x: 0,
            y: 0
        },
        frames: 10
    }, {
        from: {
            x: 720,
            y: 0
        },
        to: {
            x: 0,
            y: 0
        },
        frames: 30
    }, {
        from: {
            x: 720,
            y: 0
        },
        to: {
            x: 0,
            y: 0
        },
        frames: 30
    }, {
        from: {
            x: 720,
            y: 0
        },
        to: {
            x: 0,
            y: 0
        },
        frames: 30
    }, {
        from: {
            x: 720,
            y: 0
        },
        to: {
            x: 0,
            y: 0
        },
        frames: 30
    }, {
        from: {
            x: 720,
            y: 0
        },
        to: {
            x: 0,
            y: 0
        },
        frames: 30
    }, {
        from: {
            x: 740,
            y: 0
        },
        to: {
            x: 0,
            y: 0
        },
        frames: 30
    }, {
        from: {
            x: 740,
            y: 0
        },
        to: {
            x: 0,
            y: 0
        },
        frames: 30
    }, {
        from: {
            x: 720,
            y: 0
        },
        to: {
            x: 0,
            y: 0
        },
        frames: 30
    }];

function render(e, t, a) {
    r = !0;
    var f = t.images,
        n = t.canvas,
        l = n.getContext("2d"),
        s = {
            images: f,
            canvas: n,
            context: l,
            passerpipe: e,
            date: new Date
        },
        m = o[0];
    i(s, m.from, m.to, 0, m.frames, m.frames, a)
}

function config(e) {
    return e.fps(50).videoFilters("setpts=0.335*PTS")
}

function stop() {
    r = !1
}


const imageVertical = {
    render: render,
    stop: stop
}
module.exports = imageVertical