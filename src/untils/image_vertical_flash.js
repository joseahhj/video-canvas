
    function a(f, e, t, i, s, l, x, n) {
        var y = f.context
          , m = f.images
          , c = f.canvas
          , h = f.passerpipe;
        y.clearRect(0, 0, c.width, c.height),
        y.globalAlpha = 1;
        var g = m[s];
        if (0 === s) {
            var p = g.length
              , d = Math.floor((l - 30) / p);
            d = Math.floor(x / d),
            d = d > p ? p : d,
            g = g.substring(0, d)
        }
        if ("string" == typeof g) {
            var v;
            v = t.x > e.x ? l - x : x;
            var u = Math.abs(t.x - e.x) / l * v;
            if (2 !== s || x % 10 || (e.y = "#000" === e.y ? "#fff" : "#000",
            t.y = "#fff" === t.y ? "#000" : "#fff"),
            14 === s && v > 40 && !(v % 5)) {
                var w = e.x;
                e.x = e.y,
                e.y = w
            }
            y.beginPath(),
            y.fillStyle = e.y,
            y.fillRect(0, 0, c.width, c.height),
            y.fillStyle = t.y,
            s > 2 && 7 > s ? (y.font = 40 + u + 'px "FZLanTingHei-B-GBK"',
            y.textAlign = "center",
            y.fillText(g, c.width / 2, (c.height + u) / 2)) : 12 === s && 20 > v ? (y.font = '35px "FZLanTingHei-B-GBK"',
            y.textAlign = "right",
            y.fillText(g, c.width / 2, c.height / 2)) : (v = 10 * Math.floor(v / 15),
            v = v > 20 ? 20 : v,
            u = Math.abs(t.x + e.x) / l * v,
            y.font = 35 + u/2 + 'px "FZLanTingHei-B-GBK"',
            y.textAlign = "center",
            y.fillText(g, c.width / 2, c.height / 2))
        } else if ("string" != typeof g) {
            var A = (t.x - e.x) / l
              , T = (t.y - e.y) / l
              , M = (i - 1) / l
              , b = "undefined" != typeof window && (g.naturalHeight > g.height) ? g.naturalHeight : g.height
              , B = x;

            60 > B && (B = 30 * Math.floor(B / 30));
            var S = b * (1 + M * B);
            
            if (y.drawImage(g, e.x + A * B, e.y + T * B, .5625 * S, S),
            16 === s) {
                var F = x / 140;
                y.globalAlpha = F > 1 ? 1 : F,
                y.font = "15px PingFang",
                y.fillStyle = "#CACACA",
                y.textAlign = "left";
                var C = "背景音乐来源：词：美兰迪Melody 曲：Katsuya Sezaki";
                //y.fillText(C, 10, c.height - 10)
            }
        }
        if (h && c.syncJPEGStream().pipe(h, {
            end: !1
        }),
        !r)
            return void y.clearRect(0, 0, c.width, c.height);
        if (l > x)
            setTimeout(function() {
                a(f, e, t, i, s, l, x + 1, n)
            }, 13);
        else {
            if (s === m.length - 1)
                return h && h.end(),
                void ("function" == typeof n && n());
            var G = o[s + 1];
            a(f, G.from, G.to, G.scale, s + 1, G.frames, 0, n)
        }
    }
    var r = !0
      , o = [{
        from: {
            x: 20,
            y: "#000"
        },
        to: {
            x: 20,
            y: "#fff"
        },
        scale: 1,
        frames: 60
    }, {
        from: {
            x: 20,
            y: "#000"
        },
        to: {
            x: 20,
            y: "#fff"
        },
        scale: 1,
        frames: 45
    }, {
        from: {
            x: 180,
            y: "#000"
        },
        to: {
            x: 20,
            y: "#fff"
        },
        scale: 1,
        frames: 45
    }, {
        from: {
            x: 20,
            y: "#000"
        },
        to: {
            x: 120,
            y: "#fff"
        },
        scale: 1,
        frames: 45
    }, {
        from: {
            x: 20,
            y: "#000"
        },
        to: {
            x: 1e3,
            y: "#fff"
        },
        scale: 1,
        frames: 55
    }, {
        from: {
            x: 20,
            y: "#fff"
        },
        to: {
            x: 1e3,
            y: "#000"
        },
        scale: 1,
        frames: 55
    }, {
        from: {
            x: 20,
            y: "#000"
        },
        to: {
            x: 1e3,
            y: "#fff"
        },
        scale: 1,
        frames: 55
    }, {
        from: {
            x: 20,
            y: "#000"
        },
        to: {
            x: 20,
            y: "#fff"
        },
        scale: 1,
        frames: 50
    }, {
        from: {
            x: 20,
            y: "#000"
        },
        to: {
            x: 20,
            y: "#fff"
        },
        scale: 1,
        frames: 40
    }, {
        from: {
            x: 120,
            y: "#000"
        },
        to: {
            x: 20,
            y: "#fff"
        },
        scale: 1,
        frames: 80
    }, {
        from: {
            x: 20,
            y: "#000"
        },
        to: {
            x: 20,
            y: "#fff"
        },
        scale: 1,
        frames: 60
    }, {
        from: {
            x: 0,
            y: 0
        },
        to: {
            x: -36,
            y: -64
        },
        scale: 1.2,
        frames: 140
    }, {
        from: {
            x: 120,
            y: "#000"
        },
        to: {
            x: 20,
            y: "#fff"
        },
        scale: 1,
        frames: 80
    }, {
        from: {
            x: 0,
            y: 0
        },
        to: {
            x: -36,
            y: -64
        },
        scale: 1.2,
        frames: 140
    }, {
        from: {
            x: 120,
            y: "#000"
        },
        to: {
            x: 20,
            y: "#fff"
        },
        scale: 1,
        frames: 80
    }, {
        from: {
            x: 120,
            y: "#fff"
        },
        to: {
            x: 20,
            y: "#000"
        },
        scale: 1,
        frames: 80
    }, {
        from: {
            x: 0,
            y: 0
        },
        to: {
            x: -36,
            y: -64
        },
        scale: 1.2,
        frames: 140
    }];
    function render(f, e, t) {
        r = !0;
        var i = e.images
          , s = e.canvas
          , l = s.getContext("2d")
          , x = {
            images: i,
            canvas: s,
            context: l,
            passerpipe: f,
            date: new Date
        }
          , n = o[0];
        a(x, n.from, n.to, n.scale, 0, n.frames, 0, t)
    }
    
    function config(f) {
        return f.fps(50).videoFilters("setpts=0.335*PTS")
    }
    function stop() {
        r = !1
    }

export const imageVerticalFlash = {
        render: render,
        stop: stop
}