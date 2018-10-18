export const imageVerticalDivide = {
    isStop: !0,
    animateStep: [{
        from: {
            x: 0,
            y: 0
        },
        to: {
            x: -30,
            y: 20
        },
        scale: 1.1,
        frames: 95
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
        frames: 95
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
        frames: 95
    }, {
        from: {
            x: 0,
            y: 0
        },
        to: {
            x: -0,
            y: 0
        },
        scale: 1.1,
        frames: 95
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
        frames: 95
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
        frames: 95
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
        frames: 95
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
        frames: 95
    }, {
        from: {
            x: 0,
            y: 0
        },
        to: {
            x: -40,
            y: 0
        },
        scale: 1.1,
        frames: 95
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
        frames: 95
    }],
    animateText(itext, iwidth, iheight, m, y, i) {
        var vL,
            vheight;
        if (m % 2) {
            vL = 640 - 19 - (iheight - i * 1.5);
            vheight = vL < [640 - (iheight / 2)] ? 640 - (iheight / 2) : vL
            y.beginPath();
            y.fillStyle = '#fff';
            y.fillRect(0, 450, iwidth, iheight);
        } else {
            vL = iheight - (i + 16);
            vheight = vL > (iheight / 2) ? iheight / 2 : vL
            y.beginPath();
            y.fillStyle = '#fff';
            y.fillRect(0, 0, iwidth, iheight);
        }

        // y.fillStyle = '#fff',
        // y.fillRect(0, 0, iwidth, iheight),
        y.fillStyle = '#594F4B'
        y.font = '36px FZDSH515JW--GB1-0'
        y.textAlign = "center"
        y.fillText(itext, iwidth / 2, vheight)
        y.closePath()
    },
    animateFn: function(e, t, a, f, m, n, i, c) {
        var x = e.context,
            y = e.images,
            l = e.canvas,
            d = e.passerpipe,
            p = (a.x - t.x) / n,
            u = (a.y - t.y) / n,
            g = (f - 1) / n;
        x.clearRect(0, 0, l.width, l.height);
        var h = new Image(360, 450),
            itext = y[m].text,
            v = n - i,
            ht = 450,
            I = ht * (1 + g * v),
            yAxis = m % 2 ? 0 : 190;
        h.src = y[m].img;
        v = v > 38 ? 38 : v
        I = I > 468 ? 468 : I
        if (x.globalAlpha = 1,
            x.drawImage(h, t.x + p * v, t.y + u * v + yAxis, .8 * I, I),
            imageVerticalDivide.animateText(itext, l.width, 190, m, x, i),
            d && l.syncJPEGStream().pipe(d, {
                end: !1
            }), !this.isStop) return void x.clearRect(0, 0, l.width, l.height);
        if (i > 0) setTimeout(function() {
            imageVerticalDivide.animateFn(e, t, a, f, m, n, i - 1, c)
        }, 13);
        else {
            var image0 = new Image(360, 450);
            image0.src = y[0].img;
            if (m === y.length - 1) return d && d.end(), "function" == typeof c && c(), void x.clearRect(0, 0, l.width, l.height);
            var O = this.animateStep[m + 1];
            imageVerticalDivide.animateFn(e, O.from, O.to, O.scale, m + 1, O.frames, O.frames, c)
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