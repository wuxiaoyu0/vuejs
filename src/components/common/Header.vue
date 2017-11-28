<template lang="html">
  <header>
      <p>{{showTitle}}</p>
      <p class='iconfont'>&#xe66b;</p>
    </header>
</template>

<script>
import Vue from "vue"
export default {
  props: ["showTitle"]
}
</script>

<style>
@import "../../assets/font/iconfont.css";
@import "../../style/common.css";
@import "../../style/all.css";
</style>