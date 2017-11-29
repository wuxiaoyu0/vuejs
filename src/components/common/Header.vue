<template lang="html">
  <header>
      <p>{{showTitle}}</p>
      <p><router-link  to="search" class='iconfont' >&#xe66b;</router-link></p>
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