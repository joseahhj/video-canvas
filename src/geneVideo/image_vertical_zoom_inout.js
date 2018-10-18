const imageVerticalZoomOut = {
    isStop: !0,
    animateStep: [{
        from: {
            x: 0,
            y: 0
        },
        to: {
            x: -30,
            y: 0
        },
        scale: 1.1,
        frames: 85
    }, {
        from: {
            x: 0,
            y: 0
        },
        to: {
            x: -30,
            y: -40
        },
        scale: 1.1,
        frames: 87
    }, {
        from: {
            x: 0,
            y: 0
        },
        to: {
            x: -30,
            y: -60
        },
        scale: 1.1,
        frames: 145
    }, {
        from: {
            x: 0,
            y: 0
        },
        to: {
            x: -0,
            y: 0
        },
        scale: 1.05,
        frames: 145
    }, {
        from: {
            x: 0,
            y: 0
        },
        to: {
            x: -30,
            y: 0
        },
        scale: 1.1,
        frames: 70
    }, {
        from: {
            x: 0,
            y: 0
        },
        to: {
            x: -30,
            y: -15
        },
        scale: 1.1,
        frames: 75
    }, {
        from: {
            x: 0,
            y: 0
        },
        to: {
            x: -30,
            y: -40
        },
        scale: 1.1,
        frames: 134
    }, {
        from: {
            x: 0,
            y: 0
        },
        to: {
            x: -30,
            y: 0
        },
        scale: 1.1,
        frames: 135
    }, {
        from: {
            x: 0,
            y: 0
        },
        to: {
            x: -40,
            y: 0
        },
        scale: 1.15,
        frames: 144
    }, {
        from: {
            x: 0,
            y: 0
        },
        to: {
            x: -30,
            y: -60
        },
        scale: 1.1,
        frames: 145
    }],
    animateFn: function(e, t, a, f, m, n, i, c) {
        var x = e.context,
            y = e.images,
            l = e.canvas,
            d = e.passerpipe,
            p = (a.x - t.x) / n,
            u = (a.y - t.y) / n,
            g = (f - 1) / n;
        x.clearRect(0, 0, l.width, l.height);
        var h = y[m],
            v = n - i,
            ht = "undefined" != typeof window && (h.naturalHeight > h.height) ? h.naturalHeight : h.height,
            I = ht * (1 + g * v);
        if (x.globalAlpha = 1, x.drawImage(h, t.x + p * v, t.y + u * v, .5625 * I, I), d && l.syncJPEGStream().pipe(d, {
                end: !1
            }), !this.isStop) return void x.clearRect(0, 0, l.width, l.height);
        if (i > 0) setTimeout(function() {
            imageVerticalZoomOut.animateFn(e, t, a, f, m, n, i - 1, c)
        }, 13);
        else {
            if (m === y.length - 1) return d && d.end(), "function" == typeof c && c(), void x.drawImage(y[0], 0, 0, l.width,
                l.height);
            var O = this.animateStep[m + 1];
            imageVerticalZoomOut.animateFn(e, O.from, O.to, O.scale, m + 1, O.frames, O.frames, c)
        }
    },
    render: function(e, t, a) {
        this.isStop = !0;
        var f = t.images,
            m = t.canvas,
            n = m.getContext("2d"),
            i = {
                images: f,
                canvas: m,
                context: n,
                passerpipe: e,
                date: new Date
            },
            c = this.animateStep[0];
        this.animateFn(i, c.from, c.to, c.scale, 0, c.frames, c.frames, a)
    },
    config: function(e, t) {
        var s = this.animateStep;
        for (var a = 0, r = 0, o = 0; o < s.length; o++) o < t.images.length && (a += s[o].frames), r += s[o].frames;
        return e.fps(50).addOutputOption("-t " + 16 * (a / r)).videoFilters("setpts=0.335*PTS")
    },
    stop: function() {
        this.isStop = !1
    }
}

module.exports = imageVerticalZoomOut