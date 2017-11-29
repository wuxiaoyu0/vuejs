<template lang="html">
  <section class="m-lendbook">
    <div class="qrbtn" node-type="jsbridge">
      扫描二维码
      <input node-type="jsbridge" type="file" name="myPhoto" value="扫描二维码" />
    </div>
  </section>
</template>

<script>
  // methods: {
  //   startRecognize() {
  //   scan = new plus.barcode.Barcode('bcid');
  //   scan.onmarked = onmarked;
  //      this.startScan
  //   },
  //   startScan () {
  //       scan.start();
  //   } 
  // }
export default {
  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="css" scoped>
.m-lendbook {
  flex: 1;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
}
@import "../../style/all.css";
</style>