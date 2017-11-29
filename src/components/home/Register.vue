<template>
  <div class="container">
			<header class="header register">
				<p>注册</p>
				<p><router-link to="login"><img src="http://ogtx4h1fa.bkt.clouddn.com/back.png"/></router-link></p>
			</header>
			<p class="headpic"><img src="http://ogtx4h1fa.bkt.clouddn.com/loginlogo.jpg"/></p>
			<div class="loginfont"> <img src="http://ogtx4h1fa.bkt.clouddn.com/font.png"/></div>
			<form class="login register">
				<div class="inputbox ">
					<input type="text" name="" id="" value="" placeholder="手机号" />
					<input type="password" name="" id="" value="" placeholder="密码" />
					<input type="text" name="" id="" value="" placeholder="验证码" class="code" />
					<input type="button" name="" id=""  value="发送验证码" class="count " />
					<!--<input type="button" name="" id=""  value="60s/重新获取" class="count countafter" />-->
				</div>
				<button class="registerbtn">注册</button>
			</form>
		</div>
</template>
<script>
export default {
	
}
</script>
<style scoped>
@import "../../assets/font/iconfont.css";
@import "../../style/common.css";
@import "../../style/all.css";
</style>
