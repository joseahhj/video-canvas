const pages = {
    imageZoomOut: import ('./image_zoom_inout.js'), //缩放
    imageArt: import ('./image_art.js'), //擦除
    imageGrid: import ('./image_grid.js'), //网格
    imageRotate: import ('./image_rotate.js'), //开合
    imageFlash: import ('./image_flash.js'), //图文快闪
    imageVerticalArt: import ('./image_vertical_art.js'), //竖版擦除
    imageVerticalGrid: import ('./image_vertical_grid.js'), //竖版网格
    imageVerticalRotate: import ('./image_vertical_rotate.js'), //竖版开合
    imageVerticalFlash: import ('./image_vertical_flash.js'), //竖版图文快闪
    imageVerticalZoomOut: import ('./image_vertical_zoom_inout.js'), //竖版缩放
    imageVertical: import ('./image_vertical.js'), //竖版通用
};

var isShow = false
var imgsBase64 = []
var imgsTemp = []
var cutInter = null
var imgsTimeLong = 0

function getQuerys(tag) {
    let queryStr = window.location.search.slice(1);
    let queryArr = queryStr.split('&');
    let query = [];
    let spec = {}
    for (let i = 0, len = queryArr.length; i < len; i++) {
        let queryItem = queryArr[i].split('=');
        let qitem = decodeURIComponent(queryItem[1])
        if (queryItem[0] == tag) {
            query.push(qitem);
        } else {
            spec[queryItem[0]] = qitem
        }
    }
    return { list: query, spec: spec };
}

var getQuery = getQuerys('images')

var effectTag = getQuery.spec.tid
var wrapWidth = getQuery.spec.templateType
let num = 0
let imgArr = []

function creatImg() {
    var images = getQuery.list
    let newImg = []
    let vh = wrapWidth == 1 ? 360 : 640
    let vw = wrapWidth == 1 ? 640 : 360
    if (effectTag.indexOf('Flash') > -1) {
        images.map(function(item, index) {
            if (11 === index || 13 === index || 16 === index) {
                var temp = new Image(vw, vh)
                temp.setAttribute('crossOrigin', 'anonymous');
                temp.src = item;
                newImg.push(temp)

            } else {
                newImg.push(item)
            }
        })
        imgArr = newImg
        renderAnimate(effectTag)
    } else {
        images.map(function(item) {
            var temp = new Image(vw, vh)
            temp.setAttribute('crossOrigin', 'anonymous');
            temp.src = item;
            temp.onload = function() {
                num++
                if (num == images.length) {
                    renderAnimate(effectTag)
                }
            }
            newImg.push(temp)
        })
        imgArr = newImg
    }


}
async function renderAnimate(page) {
    //await creatImg()
    let me = this
    const pageA = await pages[page];
    let oldDate = new Date().getTime()
    let icavas = '#canvas'
    if (wrapWidth == 2) {
        icavas = '#verticalCanvas'
    }
    let innerCanvas = document.querySelector(icavas)

    isShow = false

    pageA[page].render(null, {
        canvas: innerCanvas,
        images: imgArr
    }, function() {
        //动画播完
        isShow = true;
        imgsTemp.push(generatePng())
        imgsBase64.push(imgsTemp)
        let now = new Date().getTime()
        window.imgsTimeLong = now - oldDate

        clearInterval(cutInter)
        document.getElementById('cutImg').innerHTML = 'done'
    })
    cutInter = setInterval(function() {
        imgsTemp.push(generatePng())
        if (imgsTemp.length >= 50) {
            imgsBase64.push(imgsTemp)
            imgsTemp = []
        }
    }, 1000 / 60)
}

function getImgs() {
    return imgsBase64
}

function generatePng() {
    var canvas = document.createElement('canvas');
    let icavas = '#canvas'
    if (wrapWidth == 2) {
        icavas = '#verticalCanvas'
    }

    var canvasNode = document.querySelector(icavas)
    canvas.width = canvasNode.width;
    canvas.height = canvasNode.height;
    var ctx = canvas.getContext('2d');
    ctx.drawImage(canvasNode, 0, 0);
    var imgData = canvas.toDataURL("image/png");
    return imgData;
}
window.imgsBase64 = imgsBase64


creatImg()