<template>
  <div>
    <img class="qrcode" :src="qr" alt="">
    <div class="code">安全码：{{code}}</div>
  </div>
</template>

<script>
  import base64 from 'js-base64'

  export default {
    name: "qrcode",
    data() {
      return {
        qr: '',
        code: ''
      }
    },
    mounted() {
      let s = Date.parse(new Date());
      let id = this.$route.query.id
      this.code = this.$router.query.code
      let url = base64.Base64.encode('https://supdev.pzlive.vip/tabble?time=' + s + '&id=' + id + '&code=' + this.code)
      this.qr = 'https://wwwapi.pzlive.vip/index/OfflineActivities/createOrderQrCode?data=' + url
    },
    methods: {
      createQr() {
        let that = this
        let s = Date.parse(new Date());
        let url = base64.Base64.encode(location.origin + '/#/tabble?time=' + s)
        that.$request({
          url: 'OfflineActivities/createOrderQrCode',
          type: 'GET',
          login: true,
          data: {
            data: url
          },
          success(res) {

          }
        })
      }
    }
  }
</script>

<style scoped>
  .qrcode {
    width: 450px;
    height: 450px;
    margin: 40px auto;
  }

  .code {
    width: 100%;
    text-align: center;
    margin-top: 40px;
    font-size: 40px;
  }
</style>
