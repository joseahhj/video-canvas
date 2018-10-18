<template>
    <div style="text-align:center">
        <div style="padding-bottom:20px">
            <radio-group :radios="screenType" :default-value="isVertical" @on-change="changeScreen"></radio-group>
        </div>
        <div class="canvasWrap" >
        	<div class="cv-box">
	            <span class="video-icon" @click="flashPlay" v-if="isShow">
	                <v-icon type="play-circle" color="#ccc" size="50"></v-icon>
	            </span>
            	<canvas id="flashCanvas"  height="360" width="640" style="width:400px;height:225px;border:1px solid #ddd" v-if="isVertical==1"></canvas>
                <canvas id="flashCanvas" width="360" height="640" style="width:225px;height:400px;border:1px solid #ddd" v-if="isVertical==2"></canvas>
            </div>
            <ul id="im-ul" style="margin-top:15px">
                <li v-for="(item, index) in flashImageIntro">
                	<template v-if="index!=11&&index!=13&&index!=16">
	                	<p class="flashTime">{{item.time}}</p>
	                	<div :class="['creator', focusclass[index], errorclass[index]]" >
	                		<textarea 
	                		rows="1" 
	                		v-model="item.text" 
	                		placeholder="请输入1~8个字符" 
	                		@blur="textBlur(index)" 
	                		@focus="textFocus(index)" 
	                		@keyup="checkText(index)">{{item.text}}</textarea> 
	                	</div>
                	</template>
                	<template v-if="index==11">
                		<p class="flashTime">0:06.5</p>
	                	<div class="creator" v-if="isVertical==1">
	                		<img src="../assets/imgs/4.png" alt="" style="width:120px;height:57px;" class="flash-images" />
	                	</div>
                        <div class="creator" v-if="isVertical==2">
                            <img src="../assets/vimgs/4.jpg" alt="" style="width:120px;height:57px;" class="flash-images" />
                        </div>
                	</template>
                	<template v-if="index==13">
                		<p class="flashTime">0:09</p>
	                	<div class="creator" v-if="isVertical==1">
	                		<img src="../assets/imgs/6.png" alt="" style="width:120px;height:57px;" class="flash-images" />
	                	</div>
                        <div class="creator" v-if="isVertical==2">
                            <img src="../assets/vimgs/6.jpg" alt="" style="width:120px;height:57px;" class="flash-images" />
                        </div>
                	</template>
                	<template v-if="index==16">
                		<p class="flashTime">0:15</p>
	                	<div class="creator" v-if="isVertical==1">
	                		<img src="../assets/imgs/8.png" alt="" style="width:120px;height:57px;" class="flash-images" />
	                	</div>
                        <div class="creator" v-if="isVertical==2">
                            <img src="../assets/vimgs/8.jpg" alt="" style="width:120px;height:57px;" class="flash-images" />
                        </div>
                	</template>
                </li>
            </ul>
        </div>
        
        <audio id="myAudio">
          <source :src="audioSrc" type="audio/mpeg">
          您的浏览器不支持 audio 元素。
        </audio>
        <div id="cutImg" v-if="cutImg">
            {{cutImg}}
        </div>
        <ul>
            <li v-for="item in imgs">
                <img :src="item" alt="">
            </li>
        </ul>
    </div>
</template>

<script>
import Jad from 'jad'
import { imageVerticalFlash } from '../untils/image_vertical_flash' //图文快闪
import { imageFlash } from '../untils/image_flash' //图文快闪
export default {
  name: 'home',
  data () {
    return {
        isShow:true,
        flashSelectedVideotemplate: imageFlash,
        startTime: null,
        cutImg:'',
        videoUrl: '',
        vid:null,
        imgs:[],
        cutInter:null,
        flashImageIntro: [{
            text: "准备好了嘛？",
            time: "0:00"
        }, {
            text: "千万",
            time: "0:01"
        }, {
            text: "别",
            time: "0:1.5"
        }, {
            text: "眨眼",
            time: "0:02"
        }, {
            text: "3",
            time: "0:2.5"
        }, {
            text: "2",
            time: "0:03"
        }, {
            text: "1",
            time: "0:04"
        }, {
            text: "以下",
            time: "0:05"
        }, {
            text: "是",
            time: "0:5.3"
        }, {
            text: "产品名称",
            time: "0:5.7"
        }, {
            text: "产品亮点一",
            time: "0:06"
        }, {}, {
            text: "产品亮点二",
            time: "0:07"
        }, {}, {
            text: "放松一下",
            time: "0:12"
        }, {
            text: "马上参与",
            time: "0:13"
        }, {}],
        hoverclass: {},
        errorclass: {},
        focusclass: {},
        screenType: [
          {name: '横排', value: 1},
          {name: '竖排', value: 2},
        ],
        isVertical:1,
        audioSrc:'https://storage.360buyimg.com/material-video-template/bgm/2.mp3'
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
    
  },
  watch:{
    isVertical(val){
        let me = this
        if (val==2) {
            me.flashSelectedVideotemplate = imageVerticalFlash
        }else {
            me.flashSelectedVideotemplate = imageFlash
        }
    },
    //截屏需要
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
  	//播放图文快闪效果
    flashPlay: function() {
    	let me = this
    	me.isShow = false
        //this.disableFlag = !0;
        //var e = this.examMaterial();
        //if (e) {
        	let flashImgs = document.querySelectorAll(".flash-images")
        	let len = this.flashImageIntro.length
        	let imgsArr = []
            for (let s = 0; len > s; s++){
            	if(11 === s){
            		imgsArr.push(flashImgs[0])
            	}else if(13 === s){
            		imgsArr.push(flashImgs[1])
            	}else if(16 === s){
            		imgsArr.push(flashImgs[2])
            	}else{
            		imgsArr.push(this.flashImageIntro[s].text)
            	}
            }
                
            /* 音频的播放 开始 */
            var myAudio = document.getElementById("myAudio");
            myAudio.load()
            myAudio.play();
            /* 音频的播放 结束 */
            
            
            me.flashSelectedVideotemplate.render(null, {
                canvas: document.getElementById("flashCanvas"),
                images: Array.prototype.slice.call(imgsArr)
            }, function() {
            	//动画播完回调
            	me.isShow = true;
            	
                try {
                    myAudio.pause()
                } catch (e) {}
                myAudio.currentTime = 0
            })
        //}
    },
    // 输入文字获得焦点
  	textFocus: function(e) {
        this.errorclass[e] || this.$set(this.focusclass, e, "text-focus")
    },
    // 输入文字失去焦点
    textBlur: function(e) {
        this.$set(this.focusclass, e, "")
    },
    // 输入文字校验合法性
    checkText: function(e) {
        var i = this.flashImageIntro[e].text.replace(/\s+/g, " ")
          , t = Math.ceil(i.replace(/[^\x00-\xff]/g, "01").length / 2);
        t > 8 || 1 > t ? (this.textLengthError = !0,
        this.$set(this.focusclass, e, ""),
        this.$set(this.errorclass, e, "length-error")) : (this.$set(this.errorclass, e, ""),
        this.$set(this.focusclass, e, "text-focus"))
    },
    
    //images=准备好了嘛？&images=千万&images=别&images=眨眼&images=3&images=2&images=1&images=以下&images=是&images=产品名称&images=产品亮点一&images=https://sf6-ttcdn-tos.pstatp.com/obj/mosaic-legacy/78cf0027476a8acb5072&images=产品亮点二&images=https://sf6-ttcdn-tos.pstatp.com/obj/mosaic-legacy/78d000271c26937ee97f&images=放松一下&images=马上参与&images=https://sf6-ttcdn-tos.pstatp.com/obj/mosaic-legacy/78d200253e9220d49aa3
    //width: 640
    //height: 360
    //tid: images_flash

  }
};
</script>

