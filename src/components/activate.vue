<template>
  <div class="bg">
    <div class="cont">
      <div class="title">激活信息</div>
      <div class="input">
        <!--<van-field v-model="cardNum" label="卡号" border />-->
        <label for="cardNum">卡&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;号</label>
        <input v-model="cardNum" id="cardNum" class="inp" type="text" placeholder="请输入卡号">
      </div>
      <div class="input">
        <!--<van-field v-model="cardNum" label="卡号" border />-->
        <label for="password">密&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;码</label>
        <input v-model="password" id="password" class="inp" type="text" placeholder="请输入密码">
      </div>
      <div class="input">
        <!--<van-field v-model="cardNum" label="卡号" border />-->
        <label for="phone">手&nbsp;&nbsp;机&nbsp;&nbsp;号</label>
        <input v-model="phone" id="phone" class="inp" type="text" placeholder="请输入手机号">
      </div>
      <!--<div class="input">-->
        <!--<label for="type">产&nbsp;品&nbsp;类&nbsp;型</label>-->
        <!--<select v-model="type" name="" id="type" class="inp">-->
          <!--<option value="">请选择产品</option>-->
          <!--<option value="1">产品1</option>-->
          <!--<option value="2">产品3</option>-->
          <!--<option value="3">产品2</option>-->
        <!--</select>-->
      <!--</div>-->
      <!--<div class="input">-->
        <!--&lt;!&ndash;<van-field v-model="cardNum" label="卡号" border />&ndash;&gt;-->
        <!--<label for="recommend">推&nbsp; &nbsp;荐&nbsp;&nbsp;人</label>-->
        <!--<input v-model="recommend" id="recommend" class="inp" type="text" placeholder="请输入推荐人ID">-->
      <!--</div>-->
      <div class="button" @click="submit">提 交 激 活</div>

      <div class="ed" @click="jump">已激活？去预约</div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import {Toast} from "vant";
  import Vue from 'vue'
Vue.use(Toast)
  export default {
    name: "activate",
    data() {
      return {
        cardNum: '',
        recommend:'',
        phone:'',
        type:'',
        password:''
      }
    },
    mounted() {
      document.title = '激活信息'
      this.getUser()
    },
    methods:{
      getUser(){
        let that = this
        that.$request({
          url:'user/getuser',
          success(res) {

          }
        })
      },
      submit(){
        if (!this.cardNum || !this.password || !this.phone) {
           Toast('请填写完整')
          return
        }
        let that = this
        that.$request({
          url:'wap/samplingReport',
          data:{
            card_number:that.cardNum,
            passwd:that.password,
            mobile:that.phone,
            from_id:that.recommend
          },
          success(res) {
            Toast('激活成功！')
            setTimeout(function () {
              that.$router.push('/appointment')
            },2000)
          },
          failed(res){
            Toast(res.msg)
            console.log(2)
          },
          error(res){
            Toast(res.msg)
            console.log(res)
          }
        })
      },
      jump(){
        this.$router.push('/appointment')
      }
    }
  }
</script>

<style scoped>
  .bg {
    width: 750px;
    height: 2732px;
    background-image: url("../assets/img/bg.png");
    background-size: 750px 2737px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;
  }

  .cont {
    width: 710px;
    /*height: 989px;*/
    margin: 21px auto;
    background-color: #ffffff;
    border-radius: 16px;
    padding: 21px 45px 34px 34px;
    box-sizing: border-box;
    overflow: hidden;
  }

  .title {
    height: 85px;
    width: 100%;
    line-height: 85px;
    font-family: MicrosoftYaHei-Bold;
    font-size: 40px;
    font-weight: normal;
    font-stretch: normal;
    color: #202020;
    text-align: left;
    border-bottom: 1px dashed #bfbfbf;
    font-weight: bold;
    margin-bottom: 15px;
    overflow: hidden;
  }

  .input {
    width: 647px;
    height: 88px;
    font-size: 30px;
    color: #202020;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
  }
  .inp{
    width: 480px;
    height: 88px;
    border-radius: 5px;
    border: solid 1px #bfbfbf;
    padding-left: 10px;
    box-sizing: border-box;
  }
  .button{
    width: 640px;
    height: 88px;
    background-color: #e91616;
    border-radius: 8px;
    margin-top: 80px;
    color: #ffffff;
    line-height: 88px;
    font-size: 40px;
  }
  .ed{
    color: dodgerblue;
    margin-top: 20px;
    font-size: 26px;
  }
</style>
