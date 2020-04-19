<template>
  <div class="bg">
    <div class="cont">
      <div class="title">预约人基本信息（必填）</div>
      <div class="input">
        <!--<van-field v-model="cardNum" label="卡号" border />-->
        <label for="cardNum">姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名</label>
        <input v-model="name" id="cardNum" class="inp" type="text" placeholder="请输入姓名">
      </div>
      <div class="input">
        <!--<van-field v-model="cardNum" label="卡号" border />-->
        <label >性&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;别</label>
        <el-select v-model="sex" name="" id="type" class="inp noborder" :popper-append-to-body="false">
          <!--<el-option value="">请选择</el-option>-->
          <el-option :value="1" label="男"></el-option>
          <el-option :value="2" label="女">女</el-option>
        </el-select>
      </div>
      <div class="input">
        <label for="age">年&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;龄</label>
        <!--<input v-model="age" @focus="change('age')" id="age" class="inp" type="text" placeholder="请选择年龄">-->
        <input type="text" v-model="age" id="age" class="inp">
      </div>
      <div class="input">
        <label for="phone">电&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;话</label>
        <input v-model="phone" id="phone" class="inp" type="text" placeholder="请输入电话">
      </div>
      <div class="input">
        <!--<van-field v-model="cardNum" label="卡号" border />-->
        <label for="card">证&nbsp;&nbsp;件&nbsp;&nbsp;类&nbsp;型</label>
        <el-select v-model="card" name="" id="card" class="inp noborder" :popper-append-to-body="false">
          <el-option value="1" label="身份证"></el-option>
          <el-option value="2" label="护照"></el-option>
        </el-select>
      </div>
      <div class="input">
        <label for="phone">证&nbsp;&nbsp;件&nbsp;&nbsp;号&nbsp;码</label>
        <input v-model="cardNum" id="num" class="inp" type="text" placeholder="请输入">
      </div>
      <div class="input">
        <!--<van-field v-model="cardNum" label="卡号" border />-->
        <label for="card">预&nbsp;&nbsp;约&nbsp;&nbsp;项&nbsp;目</label>
        <el-select v-model="project_id" multiple placeholder="请选择" collapse-tags :popper-append-to-body="false">
          <el-option v-for="item in project" :key="item.value" :label="item.label" :value="item.value"></el-option>
        </el-select>
      </div>

      <div class="input">
        <!--<van-field v-model="cardNum" label="卡号" border />-->
        <label for="card">采&nbsp;样&nbsp;点&nbsp;地&nbsp;区</label>
        <el-select v-model="proVal"  placeholder="省" @change="selectPro" :popper-append-to-body="false">
          <el-option v-for="item in pro" :key="item.value" :label="item.label" :value="item.value"></el-option>
        </el-select>
        <el-select v-model="cityVal"  placeholder="市" @change="selectCity" :popper-append-to-body="false">
          <el-option v-for="item in city" :key="item.value" :label="item.label" :value="item.value"></el-option>
        </el-select>
        <el-select v-model="areaVal"  placeholder="区" @change="selectArea" :popper-append-to-body="false">
          <el-option v-for="item in area" :key="item.value" :label="item.label" :value="item.value"></el-option>
        </el-select>
      </div>

      <div class="input">
        <!--<van-field v-model="cardNum" label="卡号" border />-->
        <label for="card">采&nbsp;&nbsp;样&nbsp;&nbsp;点</label>
        <el-select v-model="sampAdd"  placeholder="请选择" :popper-append-to-body="false">
          <el-option v-for="item in sampling" :key="item.value" :label="item.label" :value="item.value"></el-option>
        </el-select>
      </div>
    </div>
    <!--<van-popup position="bottom" v-model="dateState">-->

    <!--</van-popup>-->


    <div class="cont">
      <div class="title">受检人健康信息（选填）</div>
      <div class="input dis">
        <!--<van-field v-model="cardNum" label="卡号" border />-->
        <label for="cardNum">本人是否有肿瘤家族史</label>
        <el-select v-model="isFamily" name="" class="inp noborder" :popper-append-to-body="false">
          <el-option value="2" label="是"></el-option>
          <el-option value="1" label="否"></el-option>
        </el-select>
      </div>
      <div class="input dis" v-if="isFamily==2">
        <label for="cardNum">本人与肿瘤患者成员关系</label>
        <el-select v-model="relation" name="" id="" class="inp noborder" :popper-append-to-body="false">
          <el-option value="1" label="祖父"></el-option>
          <el-option value="2" label="祖母"></el-option>
          <el-option value="3" label="外公"></el-option>
          <el-option value="4" label="外婆"></el-option>
          <el-option value="5" label="父亲"></el-option>
          <el-option value="6" label="母亲"></el-option>
          <el-option value="7" label="兄弟姐妹"></el-option>
          <el-option value="8" label="子女"></el-option>
          <el-option value="9" label="伯/叔/姑"></el-option>
          <el-option value="10" label="舅/姨"></el-option>
        </el-select>
      </div>
      <div class="input dis" v-if="isFamily==2">
        <label for="age">家族肿瘤患者患什么肿瘤</label>
        <input v-model="zlType" class="inp" type="text" placeholder="">
      </div>
      <div class="input dis">
        <label for="phone">本人是否患过肿瘤</label>
        <el-select v-model="isSelf" name="" class="inp noborder" :popper-append-to-body="false">
          <el-option value="2" label="是"></el-option>
          <el-option value="1" label="否"></el-option>
        </el-select>
      </div>
      <div class="input dis" v-if="isSelf == 2">
        <!--<van-field v-model="cardNum" label="卡号" border />-->
        <label for="card">本人患肿瘤时间</label>
        <input v-model="zlTime" @focus="change('zl')" class="inp" type="text" placeholder="请选择">
      </div>
      <div class="input dis" v-if="isSelf == 2">
        <label for="phone">本人患什么肿瘤</label>
        <input v-model="selfType" class="inp" type="text" placeholder="请输入">
      </div>
      <div class="input dis" v-if="isSelf == 2">
        <!--<van-field v-model="cardNum" label="卡号" border />-->
        <label for="card">目前健康状态</label>
        <el-select v-model="health"  placeholder="请选择" :popper-append-to-body="false">
          <el-option v-for="item in healthState" :key="item.value" :label="item.label" :value="item.value"></el-option>
        </el-select>
      </div>

    </div>
    <div class="bottom">
      <van-checkbox class="check" v-model="checked" shape="square">我已阅读并同意《循环血异型细胞检测知情同意书》</van-checkbox>
      <div class="button" @click="submit">提 交 预 约</div>
    </div>
    <div class="fix">
      <van-datetime-picker v-if="dateState" v-model="date" type="date" :min-date="minDate" :max-date="maxDate"
                           @confirm="confirm" @cancel="cancel"/>
      <!--<van-datetime-picker v-if="zldate" v-model="zlTime" type="date" :min-date="minDate" :max-date="maxDate" @confirm="confirmzl()" @cancel="cancel"/>-->
    </div>
  </div>
</template>

<script>
  export default {
    name: "appointment",
    data() {
      return {
        dateType: '',
        date: '',
        min: '',
        name: '',
        sex: '',
        age: '',
        dateState: false,
        minDate: new Date(1980, 0, 1),
        maxDate: new Date(),
        project: [],
        card: '',
        num: '',
        phone: '',
        isFamily: '1',
        relation: '',
        zlType: '',
        isSelf: '1',
        zlTime: '',
        selfType: '',
        status: [],
        zldate: false,
        value: [],
        options: [
          {value: 1, label: '1'},
          {value: 2, label: '2'},
          {value: 3, label: '3'},
        ],
        health: '',
        healthState: [
          {value: 1, label: '查出肿瘤尚未治疗'},
          {value: 2, label: '已手术未做放化疗'},
          {value: 3, label: '已手术正在做放化疗'},
          {value: 4, label: '已手术，已结束放化疗'},
          {value: 5, label: '未做手术正在做放化疗'},
          {value: 6, label: '未做手术做放化疗已结束'}
        ],
        checked: true,
        pro:[],
        proVal:'',
        cityVal:'',
        city:[],
        areaVal:'',
        cardNum:'',
        sampling:[],
        area:[],
        sampAdd:'',
        project_id: []
      }
    },
    watch:{
      project_id(val){
        console.log(val)
      }
    },
    mounted() {
      document.title = '预约信息'
      this.getArea()
      this.getProject()
    },
    methods: {
      getProject(){
        let that = this
        that.$request({
          url:'wap/getsamplingReport',
          // login:true,
          success(res) {
            that.dispro(res.data,'project')
          }
        })
      },
      selectArea(){
        let that = this
        that.$request({
          url:'wap/getBloodSamplingAddress',
          data:{
            province_id:that.proVal,
            city_id:that.cityVal,
            area_id:that.areaVal
          },
          // login:true,
          success(res) {
            that.sampling= []
            that.sampAdd = ''
            that.dispro(res.result,'samp')
          }
        })
      },
      selectCity(){
        let that = this
        that.$request({
          url:'wap/getArea',
          // login:true,
          data:{
            cityId:this.cityVal
          },
          success(res) {
            // that.area = res.data
            that.area = []
            that.areaVal = ''
            that.sampling= []
            that.sampAdd = ''
            that.dispro(res.data,'area')
          }
        })
      },
      selectPro(){
        let that = this
        that.$request({
          url:'wap/getCity',
          // login:true,
          data:{
            provinceId:this.proVal
          },
          success(res) {
            // that.city = res.data
            that.city = []
            that.cityVal = ''
            that.area = []
            that.areaVal = ''
            that.sampling= []
            that.sampAdd = ''
            that.dispro(res.data,'city')
          }
        })
      },
      getArea() {
        let that = this
        that.$request({
          url: 'wap/getProvinceCity',
          // login:true,
          success(res){
            that.dispro(res.data,'pro')
          }
        })
      },
      dispro(data,type){
        for (let i=0;i<data.length;i++) {
          if (type == 'pro'){
            this.pro.push({
              value:data[i].id,
              label:data[i].area_name
            })
          } else if (type == 'city') {
            this.city.push({
              value:data[i].id,
              label:data[i].area_name
            })
          }else if (type == 'area'){
            this.area.push({
              value:data[i].id,
              label:data[i].area_name
            })
          }else if (type == 'samp') {
            this.sampling.push({
              value:data[i].id,
              label:data[i].name
            })
          }else if (type == 'project') {
            this.project.push({
              value:data[i].id,
              label:data[i].name
            })
          }

        }
      },
      confirm(value) {
        console.log(value)
        let d = new Date(value)
        this.date = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate()
        this.dateState = false
        if (this.dateType == 'age') {
          this.age = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate()
        } else if (this.dateType == 'zl') {
          this.zlTime = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate()
        }
      },
      cancel() {
        this.dateState = false
      },
      change(type) {
        console.log(type)
        this.dateType = type
        this.dateState = true
      },
      submit() {
        let that = this
        that.$request({
          url:'wap/addSamplingAppointment',
          data:{
            mobile:that.phone,
            name:that.name,
            sex:that.sex,
            age:that.age,
            idenity_type:that.card,
            idenity_num:that.cardNum,
            blood_sampling_id:that.sampAdd,
            project_id:that.project_id.join(','),
            is_illness:that.isFamily,
            is_had_illness:that.isSelf,
            had_illness_time:that.zlTime,
            illness:that.zlType,
            my_illness:that.selfType,
            relation: that.relation,
            health_type:that.health
          },
          // login:true,
          success(res){
            that.$router.push({path:'/qrcode',query:{id:res.id}})
          }
        })
      }
    }
  }
</script>

<style scoped>
  .fix {
    overflow: hidden;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
  }

  .bg {
    width: 750px;
    /*height: 2732px;*/
    background-image: url("../assets/img/bg.png");
    background-size: 750px 2737px;
    /*position: fixed;*/
    top: 0;
    left: 0;
    z-index: 2;
    overflow: auto;
  }

  .cont {
    width: 710px;
    /*height: 989px;*/
    margin: 21px auto;
    background-color: #ffffff;
    border-radius: 16px;
    padding: 21px 45px 34px 34px;
    box-sizing: border-box;
    /*overflow: hidden;*/
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

  .inp {
    width: 480px;
    height: 88px;
    border-radius: 5px;
    border: solid 1px #bfbfbf;
    padding-left: 10px;
    box-sizing: border-box;
  }

  .el-input__inner {
    width: 480px !important;
    height: 88px !important;
    border-radius: 5px !important;
    border: solid 1px #bfbfbf !important;
    padding-left: 10px !important;
    box-sizing: border-box !important;
  }

  .bottom {
    margin-top: 80px;
  }

  .button {
    width: 640px;
    height: 88px;
    background-color: #e91616;
    border-radius: 8px;
    color: #ffffff;
    line-height: 88px;
    font-size: 40px;
    margin: 20px auto;
  }
  .check{
    margin-left: 60px!important;
  }

  .ed {
    color: dodgerblue;
    margin-top: 20px;
    font-size: 26px;
  }

  .dis {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .dis .inp {
    max-width: 300px;
  }
  .noborder{
    border: none;
  }

</style>
