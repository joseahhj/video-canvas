const {
    createCanvas,
    loadImage
} = require("canvas");
const pages = {
    //imageZoomOut: require('./image_zoom_inout.js'), //缩放
    imageArt: require('./image_art.js'), //擦除
    // imageGrid: require('./image_grid.js'), //网格
    // imageRotate: require('./image_rotate.js'), //开合
    // imageFlash: require('./image_flash.js'), //图文快闪
    // imageVerticalArt: require('./image_vertical_art.js'), //竖版擦除
    // imageVerticalGrid: require('./image_vertical_grid.js'), //竖版网格
    // imageVerticalRotate: require('./image_vertical_rotate.js'), //竖版开合
    // imageVerticalFlash: require('./image_vertical_flash.js'), //竖版图文快闪
    // imageVerticalZoomOut: require('./image_vertical_zoom_inout.js'), //竖版缩放
    // imageVertical: require('./image_vertical.js'), //竖版通用
};



const fs = require("fs");
const querystring = require('querystring');
let args = process.argv && process.argv[2]
let parse = querystring.parse(args)

let vh = parse.templateType == 1 ? 360 : 640 //canvas 高
let vw = parse.templateType == 1 ? 640 : 360 //canvas 宽
let imgSrcArray = parse.images //图片数组
let effectTag = parse.tid //动画效果

let saveImgPath = process.argv && process.argv[3]

let loadArr = []

imgSrcArray.forEach(element => {
    if (/\.(jpg|jpeg|png|JPG|PNG)$/.test(element)) {
        loadArr.push(loadImage(element))
    } else {
        loadArr.push(element)
    }
});

const canvas = createCanvas(vw, vh);
const ctx = canvas.getContext("2d");

Promise.all(loadArr)
    .then((images) => {
        //初始化动画
        console.log('开始动画')
        let oldDate = new Date().getTime()
        let innerClear = null
        pages[effectTag].render(null, {
            canvas: canvas,
            images: images
        }, function() {
            clearInterval(interval)
                // clearTimeout(interval)
                // clearTimeout(innerClear)
            let now = new Date().getTime()
            console.log(now - oldDate, 'time')
        })

        const interval = setInterval(
            (function() {
                let x = 0;
                return () => {
                    x += 1;
                    ctx.canvas.toDataURL('image/jpeg', function(err, png) {
                        if (err) {
                            console.log(err);
                            return;
                        }
                        let data = png.replace(/^data:image\/\w+;base64,/, '');
                        let buf = new Buffer(data, 'base64');
                        fs.writeFile(`${saveImgPath}${x}.jpg`, buf, {}, (err) => {
                            console.log(x, err);
                            return;
                        });
                    });
                };
            })(),
            1000 / 60
        );
    })
    .catch(e => {
        console.log(e);
    });