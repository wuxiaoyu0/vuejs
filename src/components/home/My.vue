<template>
  <div class="container">
			<div class="mycen">
				<div class="ownpic">
					<img src="http://ogtx4h1fa.bkt.clouddn.com/ownpic.jpg"/>
					<p>
						<span>小明</span>
						<span>山东大学计算机学系</span>
						<span>学号：100010</span>
					</p>
				</div>
				<div class="mylist">
					<p class="borbto" data-url="./reserve.html"><i class="iconfont icon-yuding"></i>我的预定</p>
					<p data-url="./retbook.html"><i class="iconfont icon-book"></i>我的借书</p>
				</div>
				<div class="mylist">
					<p data-url="./index.html"><i class="iconfont icon-tuijian"></i>推荐阅读</p>
				</div>
				<div class="mylist">
					<p ><i class="iconfont icon-iconfontcolor33"></i>还书提醒</p>
				</div>
			</div>
			<p class="myedibtn" >
				<router-link to="/login">
					<button class="loginbtn">退出当前账号</button>
				</router-link>
			</p>
		</div>
</template>
<script>
export default {};
</script>
<style scoped>
@import "../../assets/font/iconfont.css";
@import "../../style/common.css";
@import "../../style/all.css";
</style>
