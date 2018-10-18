<template>
    <div>
        <header-tab></header-tab>
        <div class="nav-vd">
          <router-link :to="{name:'home'}" >幻灯片</router-link>
          <router-link :to="{name:'flash'}" >图文快闪</router-link>
          <router-link :to="{name:'divide'}" >图文分割</router-link>
        </div>
        <router-view></router-view>
        
    </div>
</template>
<script>
import HeaderTab from './components/header.vue';
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Canvas Video'
    };
  },
  components: {
    HeaderTab
  },

}


</script>

<style>
.nav-item { display: inline-block; }
ul { list-style-type: none; padding: 0; }
li { text-align: left; margin: 0 10px; }
a { color: #42b983; }
.nav-vd{
  padding-bottom: 20px;
  text-align: center;
}
.nav-vd a{
  padding-bottom: 5px;
  color: #333;
  font-size: 16px;
  display: inline-block;
  margin-right:20px;
}
.router-link-exact-active{
  border-bottom:2px solid #fd4545;
}

#im-ul li{
        display: inline-block;
        width: 120px;
        margin-right: 10px;
        margin-bottom: 10px;
    }
    .canvasWrap{
        margin:0 auto;
        width:500px;
        margin-bottom:20px;
        position: relative;
    }
    .cv-box,.ch-box{
      position: relative;
      width: 400px;
      height: 225px;
      margin:0 auto;
    }
    .cv-box{
      width:225px;
      height:400px;
    }
    .ch-box{
      height: auto
    }
    .ch-box canvas{
      margin:0 auto;
    }
    .video-icon{
        position: absolute;
        left:48%;
        top:25%;
        display: block;
        width: 50px;
        height: 50px;
        z-index: 100;
        cursor: pointer;
    }
    .flash-images{
      vertical-align: top
    }
    .creator{
      background: #fafafa;
      height: 57px;
    }
    .creator textarea{
      margin-top: 20px;
      resize: none;
      text-align: center;
      background: #fafafa;
      width: 100%
    }
    .flashTime{
      font-size: 12px;
      color: #ccc
    }
</style>