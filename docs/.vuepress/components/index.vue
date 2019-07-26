<template>
    <div class="banner">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide bg1">这世上最快的捷径就是脚踏实地</div>
          <div class="swiper-slide bg2">笔耕不掇，天道酬勤</div>
          <div class="swiper-slide bg3">十年磨一剑，一朝试锋芒</div>
        </div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
        <div class="swiper-pagination"></div>
      </div>
      <ClientOnly>
        <div style="max-width:1200px;margin:0 auto;">
          <aplayer autoplay
          :music="mp3[0]" :list="mp3"/>
        </div>
      </ClientOnly>
      <div class="wrap1">
      
        <div class="tile" @click="cj('1')">
          <div class="text">
            <h1>猿码集</h1>
            <img src="/a.png">
            <h2 class="animate-text">博客介绍</h2>
            <p class="animate-text"> 本博客使用Vuepress搭建,使用vuepress-theme-zhblog主题,点击在Github查看此项目。 </p>
            <div class="dots"> <span></span> <span></span> <span></span> </div>
          </div>
        </div>
        <div class="tile" @click="cj('2')">
          <div class="text">
            <h1>猿码集</h1>
            <img src="/b.png">
            <h2 class="animate-text">文章推荐</h2>
            <p class="animate-text">使用Vuepress搭建一个技术博客,部署到Github Page,点击查看。 </p>
            <div class="dots"> <span></span> <span></span> <span></span> </div>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
import Aplayer from'vue-aplayer'
Aplayer.disableVersionBadge = true
import Swiper from '../public/swiper/swiper.js'
export default {
  data () {
    return {
    "mp3": [{"title": "曾经的你",
        "artist": "许巍  曾经的你",
        "src": "https://blog-1255892226.cos.ap-beijing.myqcloud.com/cjdn.mp3",
        "pic": "https://p3.music.126.net/GoiTB6oG3vQWntnCjKRw0g==/109951163092691594.jpg?param=300y300"},
        {"title": "兄弟",
        "artist": "任贤齐   天使兄弟小白脸",
        "src": "https://blog-1255892226.cos.ap-beijing.myqcloud.com/xd.mp3",
        "pic": "https://p3.music.126.net/gbhd4D_MOQGJIBqIkz1kMA==/109951163068656224.jpg?param=300y300"},
        {"title": "咱们结婚吧",
        "artist": "齐晨   咱们结婚吧",
        "src": "https://blog-1255892226.cos.ap-beijing.myqcloud.com/zmjhb.mp3",
        "pic": "https://p3.music.126.net/Hu18fnqGdPDjAEIidBeNLw==/5784530673779689.jpg?param=300y300"},
        {"title": "水手",
        "artist": "邓智化   私房歌",
        "src": "https://blog-1255892226.cos.ap-beijing.myqcloud.com/sh.mp3",
        "pic": "https://p3.music.126.net/_pXP5r15lQW2iRhucclG9w==/52776558150323.jpg?param=300y300"}]
    }
  },
  components: {
    Aplayer
  },
  mounted () {
    let sw = new Swiper('.swiper-container', {
      loop: true,
      speed: 500,
      autoplay: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    })
  },
  methods: {
    cj (url) {
      if (url === '1') {
        window.open('https://github.com/ZjBlog/bgcz')
      } else {
        this.$router.push('/home/2018/1011.html') 
      }
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@import '/swiper/swiper.css';
.banner {
  width: 100%;
  margin-top: -15px;
}
.swiper-slide {
  font-size: 70px;
  color: #fff;
  line-height: 500px;
  text-align: center;
  text-shadow: 5px 5px 14px rgba(0, 0, 0, 0.6);
}
.bg1 {
  height: 100%;
  background-size: 100%;
  background: url(https://blog-1255892226.cos.ap-beijing.myqcloud.com/banner1.png) no-repeat center center;
}
.bg2 {
  height: 100%;
  background-size: 100%;
  background: url(https://blog-1255892226.cos.ap-beijing.myqcloud.com/banner2.png) no-repeat center center;
}
.bg3 {
  height: 100%;
  background-size: 100%;
  background: url(https://blog-1255892226.cos.ap-beijing.myqcloud.com/banner3.png) no-repeat center center;
}
.swiper-container {
  width: 100%;
  height: 500px;
}
.wrap1 { margin: 0 auto; width:100%; max-width: 1000px; text-align: center;}
.tile { width: 45%; height: 300px; margin: 20px; background-color: #99aeff; display: inline-block; background-size: cover; position: relative; cursor: pointer; transition: all 0.4s ease-out; box-shadow: 0px 35px 77px -17px rgba(0, 0, 0, 0.44); overflow: hidden; color: black; }
.tile img { height: 100%; width: 100%; position: absolute; top: 0; left: 0; z-index: 0; transition: all 0.4s ease-out; }
.tile .text { z-index: 10; position: absolute; padding: 30px; height: calc(100% - 60px); }
.tile h1 { font-weight: 300; text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3); }
.tile h2 { font-weight: 100; margin-top: 20px; font-style: italic; transform: translateX(200px); }
.tile p { font-weight: 300; margin-top: 20px; line-height: 25px; transform: translateX(-200px); transition-delay: 0.2s; }
.animate-text { opacity: 0; transition: all 0.6s ease-in-out; }
.tile:hover { box-shadow: 0px 35px 77px -17px rgba(0, 0, 0, 0.64); transform: scale(1.05); }
.tile:hover img { opacity: 0.2; }
.tile:hover .animate-text { transform: translateX(0); opacity: 1; }
.dots { position: absolute; bottom: 20px; right: 30px; margin: 0 auto; width: 30px; height: 30px; color: currentColor; display: flex; flex-direction: column; align-items: center; justify-content: space-around; }
.dots span { width: 5px; height: 5px; background-color: currentColor; border-radius: 50%; display: block; opacity: 0; transition: transform 0.4s ease-out, opacity 0.5s ease; transform: translateY(30px); }
.tile:hover span { opacity: 1; transform: translateY(0px); }
.dots span:nth-child(1) { transition-delay: 0.05s; }
.dots span:nth-child(2) { transition-delay: 0.1s; }
.dots span:nth-child(3) { transition-delay: 0.15s; }

</style>
