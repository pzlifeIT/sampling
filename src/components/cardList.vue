<template>
    <div class="dis">
      <div class="one">
        <img class="card" src="../assets/img/gm.gif" alt="">
      </div>
      <div class="one">
        <img class="card" src="../assets/img/jyjc.gif" alt="">
      </div>
      <div class="one">
        <img class="card" src="../assets/img/myl.gif" alt="">
      </div>
      <div class="one">
        <img class="card" src="../assets/img/xb.gif" alt="">
      </div>
      <div class="one">
        <img class="card" src="../assets/img/zjs.gif" alt="">
      </div>
    </div>
</template>

<script>
    export default {
        name: "cardList"
    }
</script>

<style scoped>
.dis{
  width: 750px;
  height: auto;
  overflow: auto;
  padding: 30px 20px 30px 20px;
  box-sizing: border-box;
}
  .one{
    margin-bottom: 50px;
    overflow: hidden;
    box-shadow: 8px 15px 10px 5px rgba(0,0,0,.06);
  }
  .card{
    width: 650px;
    object-fit: contain;
  }
</style>
