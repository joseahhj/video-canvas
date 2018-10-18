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
                <canvas id="flashCanvas" height="640" width="360" style="width:225px;height:400px;border:1px solid #ddd;background:#fff" v-if="isVertical==2"></canvas>
            </div>
            <ul id="im-ul" style="margin-top:15px">
                <li v-for="(item, index) in flashImageIntro" :key="index">
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
            <li v-for="item in imgs" :key="item">
                <img :src="item" alt="">
            </li>
        </ul>
    </div>
</template>

<script>
import Jad from 'jad'
import { imageVerticalDivide } from '../untils/image_vertical_divide' //图文分割

export default {
  name: 'divide',
  data () {
    return {
        isShow:true,
        flashSelectedVideotemplate: imageVerticalDivide,
        startTime: null,
        cutImg:'',
        videoUrl: '',
        vid:null,
        imgs:[],
        cutInter:null,
        flashImageIntro: [{
            text: "准备好了嘛？",
            img:'https://img1.360buyimg.com/pop/s720x1280_jfs/t27538/267/1253637488/166798/60783890/5bc45629Neec2537d.jpg',
        }, {
            text: "千万",
            img:'https://img1.360buyimg.com/pop/s720x1280_jfs/t26863/292/1244824711/260915/f737e194/5bc45629Nb069a855.jpg',
        }, {
            text: "注意",
            img:'https://img1.360buyimg.com/pop/s720x1280_jfs/t27712/146/1207269492/168092/d2566dc2/5bc45629Na61a23db.jpg',
        }, {
            text: "好的",
            img:'https://img1.360buyimg.com/pop/s720x1280_jfs/t27064/288/1241790719/159626/ac13ce76/5bc45629N8d658224.jpg',
        }, {
            text: "产品",
            img:'https://img1.360buyimg.com/pop/s720x1280_jfs/t27712/146/1207269492/168092/d2566dc2/5bc45629Na61a23db.jpg',
        }
       ],
        hoverclass: {},
        errorclass: {},
        focusclass: {},
        screenType: [
          {name: '横排', value: 1},
          {name: '竖排', value: 2},
        ],
        isVertical:2,
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
            me.flashSelectedVideotemplate = imageVerticalDivide
        }else {
            me.flashSelectedVideotemplate = imageVerticalDivide
        }
    },
    
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
        
                
            /* 音频的播放 开始 */
            var myAudio = document.getElementById("myAudio");
            myAudio.load()
            myAudio.play();
            /* 音频的播放 结束 */
            
            
            me.flashSelectedVideotemplate.render(null, {
                canvas: document.getElementById("flashCanvas"),
                images: me.flashImageIntro
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
        //var me = this;
        var i = this.flashImageIntro[e].text.replace(/\s+/g, " ")
          , t = Math.ceil(i.replace(/[^\x00-\xff]/g, "01").length / 2);
        t > 8 || 1 > t ? (this.textLengthError = !0,
        this.$set(this.focusclass, e, ""),
        this.$set(this.errorclass, e, "length-error")) : (this.$set(this.errorclass, e, ""),
        this.$set(this.focusclass, e, "text-focus"))
    },
    

  }
};
</script>

