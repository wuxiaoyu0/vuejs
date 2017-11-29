<template>
  <div class="container">
			<section class="reseverc">
				<div @click="toDetail(r.id)" v-for="r in reserve" class="list">
					<p class="bookpic"><img :src="r.image"/></p>
					<div class="booktext">
						<p>{{r.title}}</p>
						<p>翻译：{{r.translator}}</p>
						<p>藏书量：{{r.numbers}}</p>
					</div>
				</div>
			</section>
		</div>
</template>
<script>
import axios from "axios";
export default {
	data(){
		return {
			reserve:[]
		}
	},
	methods:{
		toDetail: function(id){
      this.$router.push({name:"detail",params:{id:id}});
    }
	},
  mounted() {
    axios({
      url: "/static/reserve.json",
      method: "get"
    })
      .then(responseData => {
				// console.log(responseData.data);
        this.reserve = responseData.data;
      })
      .catch(error => {
        console.log(error);
      });
  }
}
</script>
<style scoped>
@import "../../assets/font/iconfont.css";
@import "../../style/common.css";
@import "../../style/all.css";
</style>
