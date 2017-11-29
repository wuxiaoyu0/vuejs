<template>
  <div>
    <header class=" head-search">
			<p>
				<input type="text" name="" id="" value="" class="search" placeholder="请输入图书名和图书编码" />
				<i class="iconfont  icon-search1 searicon"></i>
				<i class="iconfont  icon-close1 seardel"></i>
			</p>
			<p @click="back" >取消</p>
		</header>
		<div class="searbox">
			<p class="seartitle">
				<span>搜索历史</span>
				<span>清空</span>
			</p>
			<ul>
				<li>数据结构和算法</li>
				<li>MYsql数据库</li>
				<li>数据结构和算法</li>
				<li>数据结构和算法</li>
				<li>数据结构和算法</li>
				<li>数据结构和算法</li>
				<li>数据结构和算法</li>
				<li>数据结构和算法</li>
			</ul>
		</div>
		<div class="searlist">
				<ul>
					<li><img src="http://ogtx4h1fa.bkt.clouddn.com/book.jpg"/></li>
					<li><img src="http://ogtx4h1fa.bkt.clouddn.com/book.jpg"/></li>
					<li><img src="http://ogtx4h1fa.bkt.clouddn.com/book.jpg"/></li>
					<li><img src="http://ogtx4h1fa.bkt.clouddn.com/book.jpg"/></li>
					<li><img src="http://ogtx4h1fa.bkt.clouddn.com/book.jpg"/></li>
					<li><img src="http://ogtx4h1fa.bkt.clouddn.com/book.jpg"/></li>
					<li><img src="http://ogtx4h1fa.bkt.clouddn.com/book.jpg"/></li>
					<li><img src="http://ogtx4h1fa.bkt.clouddn.com/book.jpg"/></li>
				</ul>
		</div>
  </div>
</template>
<script>
export default {
  methods: {
    back: function() {
      this.$router.go(-1);
    }
  }
}
</script>
<style scoped>
@import "../../assets/font/iconfont.css";
@import "../../style/common.css";
@import "../../style/all.css";
</style>

