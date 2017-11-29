<template>
  <div id="app" class="container sycontainer">
    <my-header :showTitle="headerTitle" ></my-header>
    <router-view />
    <footer>
      <ul>
        <li v-for="(item,i) in menuItem" @click="changeTab(i,item.headTitle)" >
          <router-link :to="item.link" class="menulink" v-bind:class="{ active: activeTab===i}">
            <i class="iconfont" v-html="item.icon"></i>
            {{ item.title }}
          </router-link>                
        </li>
      </ul>
    </footer>
  </div>
</template>

<script>
require("../scripts/public.js");
import Header from "./common/Header";

export default {
  name: "index",
  components: {
    "my-header": Header
  },
  data() {
    return {
      headerTitle: "蓝狐阅读",
      routerName: this.$route.path,
      menuItem: [
        {
          title: "图书馆",
          icon: "&#xe60c;",
          link: "/home",
          name: "Home",
          headTitle: "蓝狐阅读"
        },
        {
          title: "借书",
          icon: "&#xe683;",
          link: "/lendBook",
          name: "LendBook",
          headTitle: "借书"
        },
        {
          title: "预定",
          icon: "&#xe62f;",
          link: "/reseve",
          name: "Reseve",
          headTitle: "预定"
        },
        {
          title: "还书",
          icon: "&#xe618;",
          link: "/retBook",
          name: "RetBook",
          headTitle: "还书"
        },
        {
          title: "我的",
          icon: "&#xe662;",
          link: "/mypage",
          name: "MY",
          headTitle: "个人中心"
        }
      ],
      activeTab: 0
    };
  },
  methods: {
    changeTab: function(i, msg) {
      this.activeTab = i;
      this.headerTitle = msg;
    },
    fetchRouter:function(){
      for(let i=0;i<this.menuItem.length;i++){
        if(this.$route.path==this.menuItem[i].link){
          this.headerTitle=this.menuItem[i].headTitle;
          this.activeTab = i;
        }
      }
    }
  },
  created() {
    this.fetchRouter();
  }
};
</script>

<style lang="css">
@import "../assets/font/iconfont.css";
@import "../style/common.css";
.menulink {
  flex: 1;
  -webkit-flex: 1;
  display: flex;
  display: -webkit-flex;
  flex-direction: column;
  -webkit-flex-direction: column;
  align-items: center;
  -webkit-align-items: column;
  font-size: 0.27rem;
  line-height: 0.65rem;
  color: #929292;
}
footer ul .menulink.active {
  color: #4a90e2;
}
</style>
