<template lang="html">
  <div class="m-home">
    <div class="contentTop">
      <ul>
        <li v-for="(list,i) in titleList" v-bind:class="{active:titleTab===i}" @click="changeTitle(i)">{{ list }}</li>
        <li class="iconfont">&#xe62b;</li>
      </ul>
    </div>
    <section>
      <div class="content">
        <div class="timefree">
          <div class="tf_title">
            <span>限时免费</span>
          </div>
          <ul class="tfList">
           <li v-for="(tf,i) in timefree">
             <img :src="tf.image" alt="">
             <p>{{tf.title}}</p>
             <p>{{tf.author}}</p>
           </li>
          </ul>
          <div class="lookmore">查看更多</div>
        </div>
        <div class="hot">
          <div class="tf_title">
            <span>热门推荐</span>
          </div>
          <ul class="tfList">
            <li v-for="(h,i) in hot">
              <img :src="h.image" alt="">
              <p>{{h.title}}</p>
              <p>{{h.author}}</p>
            </li>
          </ul>
          <div class="lookmore">
            换一批<span class="iconfont">&#xe6c3;</span>
          </div>
        </div>
        <div class="recommend">
      		<div class="reseverc">
            <div class="list" v-for="(r,i) in recommend">
              <p class="bookpic">
                <img :src="r.image"/>
              </p>
              <div class="booktext">
                <p>{{r.title}}</p>
                <p>翻译：{{r.author}}</p>
                <p>藏书量：{{r.numbers}}</p>
              </div>
            </div>
      		</div>
        </div>
      </div>
      <div class="tishi">我是有底线的人</div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      titleList: ["计算机", "财经市场", "营销", "法律", "文学", "历史", "地理"],
      titleTab: 0,
      timefree: [],
      hot: [],
      recommend: []
    };
  },
  methods: {
    changeTitle: function(i) {
      this.titleTab = i;
    }
  },
  mounted() {
    axios({
      url: "/static/book.json",
      method: "get"
    })
      .then(responseData => {
        this.timefree = responseData.data.timefree;
        this.hot = responseData.data.hot;
        this.recommend = responseData.data.recommend;
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="css" scoped>
.m-home {
  flex: 1;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
}
@import "../../style/all.css";
@import "../../style/index.css";
</style>