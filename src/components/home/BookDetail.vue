<template>
  <div class="detailContainer">
        <header>
            <div @click="back" class="iconfont icon-back"></div>
            <h1>{{selectedGood.title}}</h1>
        </header>
        <div class="main">
            <div class="content">
                <img :src="selectedGood.image" alt="javascript">
                <div class="right-content">
                    <h2>{{selectedGood.titke}} </h2>
                    <p>原作名: {{selectedGood.oldTitle}}</p>
                    <p>译者:  {{selectedGood.translator}} </p>
                    <p><span>{{selectedGood.publishers}}</span><span>{{selectedGood.numbers}}</span></p>
                </div>
            </div>
            <mt-navbar v-model="selected" class="nav">
                <mt-tab-item id="1">简介</mt-tab-item>
                <mt-tab-item id="2">目录</mt-tab-item>
                <mt-tab-item id="3">评论</mt-tab-item>
            </mt-navbar>
            <mt-tab-container v-model="selected" class="review">
                <mt-tab-container-item class="list" id="1">
                    <p v-for="(intr,i) in selectedGood.intr" :key="i">{{intr}}</p>
                </mt-tab-container-item>
                <mt-tab-container-item class="list" id="2">
                    <dl v-for="(cata,i) in selectedGood.catalog" :key="i">
                        <dt>{{cata.section}}</dt>
                        <dd v-for="(bar,i) in cata.bar" :key="i">{{bar}}</dd>
                    </dl>
                </mt-tab-container-item>
                <mt-tab-container-item class="list" id="3">
                    <dl v-for="(comment,i) in selectedGood.comment" v-if="i<3" :key="i">
                        <dt><img :src="comment.userImg" alt="李大嘴"></dt>
                        <dd>
                            <div>
                            <span>书友：{{comment.username}}</span>
                            <span>
                                <span v-html="starShow(comment.starnum)"></span>
                            </span>
                            </div>
                            <P>{{comment.usercomment}}</P>
                        </dd>
                    </dl>
                    <div class="more">查看所有评论（100条）</div>
                </mt-tab-container-item>
            </mt-tab-container>
        </div>
        <button class="foot">立即订阅</button>
    </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import { Navbar, TabItem, TabContainer, TabContainerItem } from "mint-ui";

Vue.component(Navbar.name, Navbar);
Vue.component(TabItem.name, TabItem);
Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);

export default {
  render: {},
  data() {
    return {
      id: this.$route.params.id,
      loading: false,
      selected: "1",
      selectedGood:[],
      star:"<img src='http://ogtx4h1fa.bkt.clouddn.com/star.png' alt='star' />"
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    back: function() {
      this.$router.go(-1);
    },
    starShow:function(num){
        var shtml="";
        for(var i=0;i<num;i++){
            shtml+=this.star;
        }
        return shtml;
    },
    fetchData() {
      this.loading = true;
      //拿到查询字段，商品的id后进行http请求
      var id = this.id;
      axios({
        url: "/static/bookdetail.json",
        method: "get"
      })
        .then(responseData => {
            var goods=responseData.data;
            for (var i = 0; i < goods.length; i++) {
                if(goods[i].id == id){
                    this.selectedGood = goods[i];
                } 
            }
        })
        .catch(error => {
          console.log(error);
        });
      this.loading = false;
    }
  }
};
</script>

<style scoped>
@import "../../style/index.css";
</style>

