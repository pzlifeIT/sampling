<template>
  <div>
    <div class="mask">
      <div class="center">
        <div class="logo">
          <img src="https://webimages.pzlive.vip/newlogo.png" alt="">
        </div>
        <div class="wx-login" @click="codeLogin">手机号登录</div>
        <div class="wx-login phone" @click="WX">微信登录</div>
      </div>
    </div>
    <div id="pop" v-if="pop">
      <div class="info">
        <img class="yuan" @click="toHome()" src="https://webimages.pzlive.vip/cha_03.jpg" alt="">
        <div class="input">
          <!--<div class="input-write">-->
          <!--<div class="input-cate">姓名</div>-->
          <!--<div class="mid"></div>-->
          <!--<input type="text" v-model="name" class="write-text" placeholder="请输入姓名"/>-->
          <!--</div>-->
          <div class="input-write">
            <div class="input-cate">手机号</div>
            <div class="mid"></div>
            <input type="text"  @blur="inpBlur()" @focus="inpFocus()"  v-model="phone" class="write-text" placeholder="请输入你的手机号码"/>
          </div>
          <div class="input-write code">
            <input type="text"  @blur="inpBlur()" @focus="inpFocus()"  class="write-code" v-model="vercode" placeholder="请输入验证码"/>
            <div class="button" @click="getCode()">{{text}}</div>
          </div>
        </div>
        <div class="submit" @click="submit()">登录</div>
      </div>
    </div>
    <div class="pop-hint" v-if="msg">
      <div class="pop-center">
        <div class="title">
          <p class="hint">{{title}}</p>
        </div>
        <!--<div class="pop-button" @click="know">-->
        <!--我知道了-->
        <!--</div>-->
      </div>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import {Toast} from "vant";
  Vue.use(Toast)
  export default {
    name: "login",
    data() {
      return {
        pop: false,
        phone: '',
        vercode: '',
        text: '获取验证码',
        isClick: true,
        msg: false,
        title: "",
        webTitle: "登录",
        loginState: 0,
        isCanScroll:false,
        clickStatus:true
      }
    },
    methods: {
      inpFocus() {
        this.isCanScroll = false
      },
      inpBlur() {
        this.isCanScroll = true

      },
      toHome() {

        this.pop = false
      },
      codeLogin() {
        this.isWx()
        this.pop = true
      },
      setScroll(){
        (/iphone|ipod|ipad/i.test(navigator.appVersion)) && document.addEventListener(
          'blur',
          event => {
            // 当页面没出现滚动条时才执行，因为有滚动条时，不会出现这问题
            // input textarea 标签才执行，因为 a 等标签也会触发 blur 事件
            if (
              document.documentElement.offsetHeight <=
              document.documentElement.clientHeight &&
              ['input', 'textarea'].includes(event.target.localName)
            ) {
              document.body.scrollIntoView() // 回顶部
            }
          },
          true
        )

      },
      know() {
        this.msg = false
      },
      change() {
        document.body.scrollTop = document.documentElement.clientHeight;
      },
      //获取验证码
      getCode() {
        if (!this.isClick) {
          return false
        }
        if (this.phone == '' || this.phone.length < 11) {

          Toast('请检查手机号')
          return
        }
        let phone = this.phone;
        let that = this
        that.$request({
          url:'user/sendvercode',
          data:{
            mobile: phone,
            stype: 1
          },
          success(res){
            if (res.code == 200) {
              that.timeOut()
            }else if(res.code == 3001){
             Toast('手机号错误')
            }else if (res.code == 3002){
              Toast('发送类型有误')
            } else if (res.code == 3003){
              Toast('一分钟内不能再次发送')
            } else if (res.code == 3004){
              Toast('短信发送失败')
            }
          }
        })
      },
      timeOut: function () {
        let time = 60;
        let that = this;
        let i = setInterval(function () {
          time--;
          if (time < 1) {
            that.text = '获取验证码';
            that.isClick = true;
            clearInterval(i);
            return
          }
          that.text = time + ' 秒后重发';
          that.isClick = false
        }, 1000)
      },
      //手机号登录
      submit() {
        if (this.phone == '' || this.phone.length < 11) {
          Toast('请检查手机号')
          return
        }
        if (this.vercode == '') {
          Toast('验证码不能为空')
          return
        }
        if (!this.clickStatus)  return
        this.clickStatus = false
        localStorage.setItem('loginStatus', 1);
        localStorage.setItem('mobile', this.phone);
        localStorage.setItem('vercode', this.vercode);
        this.wxLogin()

      },
      //判断是否是微信
      isWx() {
        let ua = window.navigator.userAgent.toLowerCase();
        // console.log(ua)
        if (ua.match(/MicroMessenger/i) == 'micromessenger') {
          return true;
        } else {
          Toast('请使用微信打开')
          return false;
        }
      },
      WX() {
        localStorage.setItem('loginStatus', 2);
        if (!this.clickStatus)  return
        this.clickStatus = false
        this.wxLogin()
      },
      verCode(code) {
        let mobile = localStorage.getItem('mobile');
        let vercode = localStorage.getItem('vercode');
        let that = this;
        let buid = localStorage.getItem('pid')
        that.$request({
          url:"user/wxregister",
          data:{
            code: code, mobile: mobile, vercode: vercode, buid: buid
          },
          success(res) {
            localStorage.setItem("con_id", res.con_id);
            that.$router.push('/')
          },
          error(res){

          }
        })
      },
      network(code) {
        let text = ""
        switch (parseInt(code)) {
          case 201:
          case 202:
          case 203:
          case 204:
          case 205:
          case 206:
            text = "服务器无响应"
            break;
          case 400:
            text = "错误请求"
            break;
          case 401:
            text = "身份验证错误"
            break;
          case 403:
            text = "服务器拒绝请求"
            break;
          case 404:
          case 410:
            text = "404错误"
            break;
          case 405:
            text = "方法禁用"
            break;
          case 406:
            text = "不接受请求"
            break;
          case 407:
            text = "需要代理授权"
            break;
          case 408:
            text = "请求超时"
            break;
          case 409:
          case 411:
          case 412:
          case 415:
          case 416:
          case 417:
            text = "请求格式出错"
            break;
          case 413:
            text = "请求实体过大"
            break;
          case 414:
            text = "请求的URI过长"
            break;
          case 500:
          case 501:
          case 502:
          case 503:
          case 504:
          case 505:
            text = "服务器错误"
            break;
          default:
            text = "网络错误"
        }
        Toast(text)
      },
      //微信登录獲取授權code
      wxLogin() {
        if (!this.isWx()) {
          return
        }
        let that = this
        let loca = window.location.origin;
        localStorage.setItem('local',loca)
        that.$request({
          url:'user/wxaccredit',
          data:{
            redirect_uri: loca
          },
          success(res){
            window.location.href = res.requestUrl;
          }
        })
      },
      isCode() {
        //獲取當前域名
        let url = window.location.href;
        let loginState = localStorage.getItem("loginStatus");
        if (url.indexOf("code") != -1) {
          // localStorage.setItem("loginStatus", false);
          //將code拿出來,存進緩存
          let code = url.split("?")[1].split("&")[0].split("=")[1];
          console.log(code);
          //利用code進行登陸
          if (loginState == 1) {
            this.verCode(code);
          } else if (loginState == 2) {
            this.wxregister(code);
          } else {
            alert('loginState为空')
          }
        }
      },
      //用code登陸
      wxregister(code) {
        let mobile = this.phone
        let vercode = this.vercode
        let that = this;
        let buid = localStorage.getItem('pid');
        that.$request({
          url:'user/loginuserbywx',
          data:{
            code: code, platform: 2, buid: buid
          },
          success(res) {
            localStorage.setItem("con_id", res.con_id);
            that.$router.push('/')
          }
        })
      }
    },
    watch: {
      'isCanScroll'(value) {
        if (value) {
          // setTimeout(function () {
          //   this.$refs.outer.scrollIntoView()
          // }, 100)
          setTimeout(() => {
            window.scrollTo(0, document.body.scrollTop + 1);
            document.body.scrollTop >= 1 && window.scrollTo(0, document.body.scrollTop - 1);
          }, 10);
        }
      }
    },
    mounted() {
      // alert(window.location.href);
      this.isWx();
      this.isCode()
      this.setScroll()
      document.title = '登陆'
    },
    beforeUpdate() {
      // this.isWx()
    }
  }
  //https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxeead1475c05cde84&redirect_uri=%2Flogin&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect
</script>

<style scoped>
  .mask {
    width: 750px;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    background: #ffffff;
    display: flex;
    display: -webkit-flex;
    justify-content: center;
    align-items: center;
  }

  .center {
    width: 710px;
  }

  .logo {
    width: 100%;
    display: flex;
    display: -webkit-flex;
    justify-content: center;
    margin-bottom: 140px;
  }

  .logo img {
    width: 204px;
    height: 204px;
  }

  .wx-login {
    width: 100%;
    height: 92px;
    background: #e61f18;
    text-align: center;
    line-height: 92px;
    color: #fff;
    font-size: 32px;
    letter-spacing: 4px;
    margin-bottom: 40px;
  }

  .phone {
    background: #fff;
    border: 1px solid #e61f18;
    color: #e61f18;
  }

  #pop {
    width: 750px;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    position: fixed;
    top: 0;
    left: 0;
  }

  .info {
    width: 731px;
    height: 727px;
    background: #f7f7f7;
    position: absolute;
    bottom: 68px;
    left: 10px;
  }

  .input {
    margin-left: 40px;
    width: 650px;
    height: auto;
    overflow: hidden;
    margin-top: 173px;
    display: block;
  }

  .input-write {
    width: 650px;
    height: 70px;
    background: #ffffff;
    display: flex;
    display: -webkit-flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 35px;
  }

  .input-cate {
    display: inline-block;
    width: 135px;
    height: 70px;
    text-align-last: justify;
    line-height: 70px;
    color: #404040;
    font-size: 30px;
    /*float: left;*/
    /*letter-spacing: 6px;*/
    padding-left: 10px;
    box-sizing: border-box;
  }

  .mid {
    width: 1px;
    height: 35px;
    border: 1px solid #666666;
    opacity: 0.43;
    display: inline-block;
    margin-left: 20px;
  }

  .write-text {
    width: 510px;
    height: 70px;
    border: none;
    outline: none;
    font-size: 30px;
    letter-spacing: 4px;
    padding-left: 30px;
    box-sizing: border-box;
  }

  .code {
    background: #f7f7f7;
  }

  .write-code {
    width: 370px;
    height: 60px;
    background: #ffffff;
    font-size: 30px;
    letter-spacing: 4px;
    padding-left: 30px;
    box-sizing: border-box;
    border: none;
    outline: none;
  }

  .button {
    width: 267px;
    height: 60px;
    background: #009900;
    text-align: center;
    line-height: 60px;
    color: #ffffff;
    margin-left: 12px;
    font-size: 30px;
  }

  .submit {
    width: 730px;
    height: 88px;
    background: #e61f18;
    border-radius: 10px;
    color: #ffffff;
    font-size: 34px;
    font-family: "MicrosoftYaHei-Bold";
    font-weight: bold;
    position: absolute;
    left: 0;
    bottom: 61px;
    text-align: center;
    line-height: 88px;
    letter-spacing: 30px;
  }

  .yuan {
    width: 45px;
    height: 45px;
    position: absolute;
    top: 23px;
    right: 20px;
    z-index: 10;
  }

  .pop-hint {
    width: 750px;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.45);
    display: flex;
    display: -webkit-flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
  }

  .pop-center {
    width: 580px;
    /*height: 238px;*/
    overflow: hidden;
    background: #fff;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;
  }

  .title {
    width: 100%;
    height: 148px;
    text-align: center;
    line-height: 148px;
    color: #404040;
    font-size: 34px;
  }

  p:nth-of-type(2) {
    font-size: 28px;
  }

  .pop-button {
    width: 100%;
    height: 90px;
    border-top: 1px solid #e2e2e2;
    display: flex;
    display: -webkit-flex;
    justify-content: center;
    font-size: 30px;
    text-align: center;
    line-height: 90px;
    color: #e61f18;
  }
</style>
