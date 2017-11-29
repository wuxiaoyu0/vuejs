<template>
  <transition :name="transitionName">
    <router-view></router-view>
  </transition>
</template>

<script>
require("../scripts/public.js");
export default {
  name: "app",
  data(){
    return {
      transitionName:''
    }
  },
  watch: {
    '$route' (to, from) {
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
    }
  }
};

</script>

<style lang="css">
@import "../assets/font/iconfont.css";
@import "../style/common.css";
@keyframes slideInLeft {
  from {
    transform: translate3d(-100%, 0, 0);
    opacity: 0;
  }
  to {
    transform: translate3d(0, 0, 0);
  }
}
@keyframes slideInRight {
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }
  to {
    transform: translate3d(0, 0, 0);
  }
}

.slide-right-enter-active {
  animation: slideInRight .3s;
}
.slide-right-leave-active {
  animation: slideInRight .3s reverse;
}
.slide-left-enter-active {
  animation: slideInLeft .3s;
}
.slide-left-leave-active {
  animation: slideInLeft .3s reverse;
}
</style>
