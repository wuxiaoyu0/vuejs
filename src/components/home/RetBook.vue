<template>
  <div class="container">
			<section class="rebook">
				<div @click="toDetail(r.id)" class="rebookli">
					<img src="http://ogtx4h1fa.bkt.clouddn.com/rc_1.png" />
					<p>Javascript高级程序设计</p>
					<p>还剩<span>5</span>天到期</p>
				</div>
				<div @click="toDetail(r.id)" class="rebookli">
					<img src="http://ogtx4h1fa.bkt.clouddn.com/rc_2.png" />
					<p>Javascript高级程序设计</p>
					<p>还剩<span>5</span>天到期</p>
				</div>
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
