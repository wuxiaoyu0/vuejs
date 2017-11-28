<template lang="html">
    <footer>
        <ul>
            <li v-for="(item,i) in menuItem"  @click="changeTab(i,item.headTitle)">
              <router-link :to="item.link" class="menulink" v-bind:class="{ active: activeTab===i}">
                <i class="iconfont" v-html="item.icon"></i>
                {{ item.title }}
              </router-link>                
            </li>
        </ul>
    </footer>
</template>

<script>
export default {
  data() {
    return {
      menuItem: [
        {
          title: "图书馆",
          icon: "&#xe60c;",
          link: "/",
          name:"Home",
          headTitle:"蓝狐阅读"
        },
        {
          title: "借书",
          icon: "&#xe683;",
          link: "/lendBook",
          name: 'LendBook',
          headTitle:"借书"
        },
        {
          title: "预定",
          icon: "&#xe62f;",
          link: "/reseve",
          name: 'Reseve',
          headTitle:"预定"
        },
        {
          title: "还书",
          icon: "&#xe618;",
          link: "/retBook",
          name: 'RetBook',
          headTitle:"还书"
        },
        {
          title: "我的",
          icon: "&#xe662;",
          link: "/mypage",
          name: 'MY',
          headTitle:"个人中心"
        }
      ],
      activeTab:0
    };
  },
  props:["routerN"],
  methods:{
      changeTab: function(i,msg){
          this.activeTab=i;
          this.$emit("linkTab",msg);
      }
  }
};
</script>



<style lang="css" scoped>
.menulink{
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
footer ul .menulink.active{
  color: #4a90e2;
}
</style>
