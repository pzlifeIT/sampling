<template>
  <div class="dis">
    <div class="head">
      <div class="item" :class="type == 1?'active':''" @click="type=1">未使用</div>
      <div class="item" :class="type == 2?'active':''" @click="type=2">已使用</div>
    </div>
    <div class="one" v-for="(v,k) in list" :key="k">
      <img v-if="v.name === '19项26种过敏源检测'" class="card" src="../assets/img/gm.gif" alt="">
      <img v-else-if="v.name === '肿瘤遗传易感基因检测'" class="card" src="../assets/img/jyjc.gif" alt="">
      <img v-else-if="v.name === '33项免疫力检测'" class="card" src="../assets/img/myl.gif" alt="">
      <img v-else-if="v.name === 'i·FISH循环异常细胞筛查'" class="card" src="../assets/img/xb.gif" alt="">
      <img v-else-if="v.name === '19项微量元素指标和重金属超标检测'" class="card" src="../assets/img/zjs.gif" alt="">
      <div class="num"><span>卡号：</span> {{v.card_number}}</div>
    </div>
    <div class="one">
      <img class="card" src="../assets/img/jyjc.gif" alt="">
      <div class="num"><span>卡号：</span> 333333</div>
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
    name: "cardList",
    data() {
      return {
        list: [],
        type: 1
      }
    },
    watch: {
      type(val) {
        this.getProject()
      }
    },
    mounted() {
      document.title = '我的卡片'
      this.getProject()
    },
    methods: {
      getProject() {
        let that = this
        that.$request({
          url: 'wap/getsamplingReport',
          data: {
            status: that.type
          },
          // login: true,
          success(res) {
            that.list = res.data
          }
        })
      },
    }
  }
</script>

<style scoped>
  .dis {
    width: 750px;
    height: auto;
    overflow: auto;
    padding: 30px 20px 30px 20px;
    box-sizing: border-box;
  }

  .one {
    margin-bottom: 50px;
    overflow: hidden;
    box-shadow: 8px 15px 10px 5px rgba(0, 0, 0, .06);
  }

  .card {
    width: 650px;
    object-fit: contain;
  }

  .head {
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 30px;
  }

  .item {
    width: 50%;
    height: 60px;
    text-align: center;
    line-height: 60px;
    font-size: 30px;

  }

  .active {
    color: #e91616;
    border-bottom: 2px solid #e91616;
  }
  .num{
    color: dodgerblue;
    text-align: left;
    font-size: 32px;
    padding: 16px 0 20px 20px;
    box-sizing: border-box;
  }
  .num span{
    color: #333333;
  }
</style>
