<template>
  <div id="app" class="container sycontainer">
    <my-header :showTitle="headerTitle" ></my-header>
    <router-view />
    <my-footer :routerN="routerName" @linkTab="getLink" />
  </div>
</template>

<script>
require("../scripts/public.js");
import Header from "@/pages/common/Header";
import Footer from "@/pages/common/Footer";

export default {
  name: "app",
  components: {
    "my-header": Header,
    "my-footer": Footer
  },
  data(){
    return {
      headerTitle:"蓝狐阅读",
      routerName:""
    }
  },
  methods:{
    getLink(msg){
      this.headerTitle = msg
    }
  },
  created:function(){
    this.routerName = this.$route.name;
  }
};

// 扩展API加载完毕后调用onPlusReady回调函数
document.addEventListener( "plusready", onPlusReady, false );
// 扩展API加载完毕，现在可以正常调用扩展API
function onPlusReady() {
    var e = document.getElementById("scan");
    e.removeAttribute( "disabled" );
}
var scan = null;


</script>

<style lang="css">
@import "../assets/font/iconfont.css";
@import "../style/common.css";
</style>
