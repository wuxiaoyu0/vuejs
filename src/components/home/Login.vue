<template>
  <div class="container">
			<header>
				<p>登录</p>
				<p><router-link to="register">注册</router-link></p>
			</header>
			<section>
				<p class="headpic"><img src="http://ogtx4h1fa.bkt.clouddn.com/loginlogo.jpg"/></p>
				<div class="loginfont"> <img src="http://ogtx4h1fa.bkt.clouddn.com/font.png"/></div>
				<form class="login">
					<div class="inputbox">
						<input type="text" name="" id="" value="" placeholder="手机号" />
						<input type="password" name="" id="" value="" placeholder="密码" />
					</div>
					<a href="#">登录遇到问题</a>
					<button class="loginbtn">登录</button>
				</form>
			</section>
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
