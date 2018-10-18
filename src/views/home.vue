<template>
    <div style="text-align:center">
        <div style="padding-bottom:20px">
            <radio-group :radios="screenType" :default-value="isVertical" @on-change="changeScreen"></radio-group>
        </div>
        <div class="canvasWrap" >
            <div class="ch-box">
                <span class="video-icon" @click="renderAnimate" v-if="isShow">
                    <v-icon type="play-circle" color="#ccc" size="50"></v-icon>
                </span>
                <canvas id="canvas" width="640" height="360" style="width:400px;height:225px;border:1px solid #ddd" v-if="isVertical==1"></canvas>
                <canvas id="canvas" width="360" height="640" style="width:225px;height:400px;border:1px solid #ddd" v-if="isVertical==2"></canvas>
            </div>
            <ul id="im-ul" style="margin-top:15px" v-if="isVertical==1">
                <li>
                    <img src="../assets/imgs/6.png" alt="" style="width:120px;height:57px;">
                </li>
                <li>
                    <img src="../assets/imgs/4.png" alt="" style="width:120px;height:57px;">
                </li>
                <li>
                    <img src="../assets/imgs/8.png" alt="" style="width:120px;height:57px;">
                </li>
                <li>
                    <img src="../assets/imgs/7.png" alt="" style="width:120px;height:57px;">
                </li>
                <li>
                    <img src="../assets/imgs/2.png" alt="" style="width:120px;height:57px;">
                </li>
            </ul>
             <ul id="im-ul" style="margin-top:15px" v-if="isVertical==2">
                <li>
                    <img src="../assets/vimgs/1.jpeg" alt="" style="width:120px;height:57px;">
                </li>
                <li>
                    <img src="../assets/vimgs/2.jpg" alt="" style="width:120px;height:57px;">
                </li>
                <li>
                    <img src="../assets/vimgs/3.jpg" alt="" style="width:120px;height:57px;">
                </li>
                <li>
                    <img src="../assets/vimgs/4.jpg" alt="" style="width:120px;height:57px;">
                </li>
                <li>
                    <img src="../assets/vimgs/5.jpg" alt="" style="width:120px;height:57px;">
                </li>
                <li>
                    <img src="../assets/vimgs/6.jpg" alt="" style="width:120px;height:57px;">
                </li>
                <li>
                    <img src="../assets/vimgs/7.jpg" alt="" style="width:120px;height:57px;">
                </li>
               <li>
                    <img src="../assets/vimgs/8.jpg" alt="" style="width:120px;height:57px;">
                </li>
                <li>
                    <img src="../assets/vimgs/9.jpg" alt="" style="width:120px;height:57px;">
                </li>
                <li>
                    <img src="../assets/vimgs/10.jpg" alt="" style="width:120px;height:57px;">
                </li>
            </ul>
        </div>
       
        <v-select default-value="1" @change="selectStyle" style="vertical-align:middle" v-if="isVertical==1">
            <v-option value="1">缩放平移</v-option>
            <v-option value="2">网格</v-option>
            <v-option value="3">擦除</v-option>
            <v-option value="4">移动开合</v-option>
        </v-select>
        <v-select default-value="ver" @change="selectStyle" style="vertical-align:middle" v-if="isVertical==2">
            <v-option value="ver">通用竖版</v-option>
            <v-option value="ver1">缩放平移</v-option>
            <v-option value="ver2">移动开合</v-option>
            <v-option value="ver3">擦除</v-option>
            <v-option value="ver4">网格</v-option>
        </v-select>
        <audio id="myAudio" preload="meta">
          <source :src="audioSrc" type="audio/mpeg">
          您的浏览器不支持 audio 元素。
        </audio>
        <div id="cutImg" v-if="cutImg">
            {{cutImg}}
        </div>
        <video id="awesome" width="640" height="320" controls="" autoplay="" src=""></video>
    </div>
</template>

<script>
import Jad from 'jad' //imageVerticalGrid
import { imageVerticalGrid } from '../untils/image_vertical_grid'
import { imageVerticalArt } from '../untils/image_vertical_art'
import { imageVerticalZoomOut } from '../untils/image_vertical_zoom_inout'
import { imageVerticalRotate } from '../untils/image_vertical_rotate'
import { imageZoomOut } from '../untils/image_zoom_inout'
import { imageArt } from '../untils/image_art'
import { imageRotate } from '../untils/image_rotate'
import { imageGrid } from '../untils/image_grid'
import { imageVertical } from '../untils/image_vertical'
import { imageFlash } from '../untils/image_flash' //图文快闪
import { Whammy } from '../geneVideoB/generateVideo' //生成视频
export default {
  name: 'home',
  data () {
    return {
        isShow:true,
        currentAnimate: imageArt,
        startTime: null,
        cutImg:'',
        videoUrl: '',
        vid:null,
        imgs:[],
        cutInter:null,
        screenType: [
          {name: '横排', value: 1},
          {name: '竖排', value: 2},
        ],
        isVertical:1,
        audioSrc:'https://storage.360buyimg.com/material-video-template/bgm/1.mp3'
    };
  },
  components:{
    vSelect:Jad.Select,
    vOption:Jad.Select.Option,
    vIcon: Jad.Icon,
    vButton: Jad.Button,
    RadioGroup: Jad.RadioGroup,
  },
  mounted(){
    let me = this
    this.vid = new Whammy.Video(60);
    //this.generateVideo()
    this.renderAnimate()
    
    //this.generateVideo()
    this.nextFrame()
  },
  watch:{
    isVertical(val){
        let me = this
        if (val==2) {
            me.currentAnimate = imageVertical
        }else {
            me.currentAnimate = imageZoomOut
        }
    },
    isShow(val){
        let me = this
        // if(val){
        //     me.cutImg="完成了"
        //     me.imgs.push(me.generatePng())
        //     console.log(me.imgs.length)
        //     clearInterval(this.cutInter)
        // }else{
        //     this.cutInter = setInterval(function(){
        //         me.imgs.push(me.generatePng())
        //     },100)
        // }
    }
  },
  methods: {
    changeScreen(ev){
        let val = ev.target.value
        this.isVertical = val
    },
    selectStyle(Obj){
        let me = this;
        var myAudio = document.getElementById("myAudio");
        let value = Obj.value
        this.currentAnimate.stop()
        myAudio.pause()
        this.isShow = true
        switch(value){
            case '1':
            me.currentAnimate = imageZoomOut
            me.audioSrc = 'https://storage.360buyimg.com/material-video-template/bgm/1.mp3'
            break;
            case '2':
            me.currentAnimate = imageGrid
            me.audioSrc = 'https://storage.360buyimg.com/material-video-template/bgm/2.mp3'
            break;
            case '3':
            me.currentAnimate = imageArt
            me.audioSrc = 'https://storage.360buyimg.com/material-video-template/bgm/4.mp3'
            break;
            case '4':
            me.currentAnimate = imageRotate
            me.audioSrc = 'https://storage.360buyimg.com/material-video-template/bgm/5.mp3'
            break;
            case 'ver':
            me.currentAnimate = imageVertical
            me.audioSrc = 'https://storage.360buyimg.com/material-video-template/bgm/6.mp3'
            break;
            case 'ver1':
            me.currentAnimate = imageVerticalZoomOut
            me.audioSrc = 'https://storage.360buyimg.com/material-video-template/bgm/1.mp3'
            break;
            case 'ver2':
            me.currentAnimate = imageVerticalRotate
            me.audioSrc = 'https://storage.360buyimg.com/material-video-template/bgm/5.mp3'
            break;//imageVerticalArt
            case 'ver3':
            me.currentAnimate = imageVerticalArt
            me.audioSrc = 'https://storage.360buyimg.com/material-video-template/bgm/4.mp3'
            break;
            case 'ver4':
            me.currentAnimate = imageVerticalGrid
            me.audioSrc = 'https://storage.360buyimg.com/material-video-template/bgm/2.mp3'
            break;
        }
    },
    //视频播放
    renderAnimate(){
        let me = this
        let innerCanvas = document.querySelector("#canvas")
        let images = document.querySelectorAll("#im-ul img")
        me.imgs = []
        this.isShow = false
        var myAudio = document.getElementById("myAudio");
        myAudio.load()
        myAudio.play()
        
        this.currentAnimate.render(null, {
            canvas: innerCanvas,
            images: [...images]
        },function() {
            //动画播完
            me.isShow = true;
            try {
                myAudio.pause()
            } catch (e) {}
            myAudio.currentTime = 0
            
        })
        //let img=[]
        
    },
    nextFrame(){
        let innerCanvas = document.querySelector("#canvas")
        this.vid.add(innerCanvas);
        if(!this.isShow){
            window.requestAnimationFrame(this.nextFrame);
        }else{
            window.requestAnimationFrame(this.finalizeVideo); // well, should probably use settimeout instead
        }
    },
    finalizeVideo(){
        var start_time = +new Date;
        var output = this.vid.compile();
        var end_time = +new Date;
        var url = URL.createObjectURL(output);
        document.getElementById('awesome').src = url; //toString converts it to a URL via Object URLs, falling back to DataURL
    },
    
    
    // dataURItoBlob(base64Data) {  
    //     var byteString;  
    //     if (base64Data.split(',')[0].indexOf('base64') >= 0){
    //         byteString = atob(base64Data.split(',')[1]);  
           
    //     } else {
    //         byteString = decodeURI(base64Data.split(',')[1]); 
    //     } 
             

    //     var mimeString = base64Data.split(',')[0].split(':')[1].split(';')[0];  
    //     var ia = [];  
    //     for (var i = 0; i < byteString.length; i++) {  
    //         ia[i] = byteString.charCodeAt(i); 
            
    //     }  
    //     return new Blob([ia], {type: mimeString}); 
    // },
    // readBlobAsDataURL(blob, callback) {
    //     var a = new FileReader();
    //     a.onload = function(e) {callback(e.target.result);};
    //     a.readAsDataURL(blob);
    // },
    // generatePng () {
    //     var canvas = document.createElement('canvas');
    //     var canvasNode = document.querySelector("#canvas")
    //     canvas.width = canvasNode.width;
    //     canvas.height = canvasNode.height;

    //     var ctx = canvas.getContext('2d');
        
    //     ctx.drawImage(canvasNode, 0, 0);
       
    //     var imgData = canvas.toDataURL("image/png");
    //     //var blob = this.dataURItoBlob(imgData); 
    //     // var fd = new FormData();
    //     // fd.append("image", blob, "image.png");
    //     // console.log(fd)
    //     // console.log(blob)
    //     // 解析blob
    //     // this.readBlobAsDataURL(blob,function(dataUrl){
    //     //     console.log(dataUrl)
    //     // })
    //     // var form = new FormData();
    //     // form.append('file', blob); 
    //     console.log(imgData)
    //     return imgData;
    // },
    // generateVideo () {
    //     var me = this;
    //     //return new Promise (
    //         //function (resolve, reject) {
    //             var imgs = [];
    //             // let images = document.querySelectorAll("#im-ul img")
    //             // let canvasNode = document.querySelector("#hideCanvas")
    //             me.startTime = Date.now();
                
    //             //me.renderAnimate()
    //             window.requestAnimationFrame(me.recordTick.bind(me, imgs));
    //         //}
    //     //)
    // },
    // recordTick (imgs, resolve, reject) {
    //     var me = this
    //     // if (me.isShow) {
    //     //     return;
    //     // }

    //     var t = Date.now() - me.startTime;
    //     console.log(t,'21')
    //     if (me.isShow) {
    //         //动画结束
    //         this.currentAnimate.stop()
    //         imgs.push(this.generatePng());
    //         this.cutImg = '完成'
    //         console.log(imgs.length,'imgs.length')
    //         //console.log('我是log', imgs[0])
    //         //console.info('我是info',imgs[1],)
            
    //         // $.ajax({
    //         //     url: '/video/record',
    //         //     data: imgs.join(' '),
    //         //     method: 'POST',
    //         //     contentType: 'text/plain',
    //         //     success: function (data, textStatus, jqXHR) {
    //         //         resolve(data);
    //         //     },
    //         //     error: function (jqXHR, textStatus, errorThrown) {
    //         //         reject(errorThrown);
    //         //     }
    //         // });

    //     } else{

    //         imgs.push(this.generatePng());
            
    //         window.requestAnimationFrame(this.recordTick.bind(this, imgs, resolve, reject));
    //     }
    // }
  }
};
</script>
