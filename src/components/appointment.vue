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
        <label>性&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;别</label>
        <div  @click="change('sex')" class="inp" :class="sex?'':'have'">{{sex ? sex:'请选择'}}</div>
        <!--<el-select v-model="sex" name="" id="type" class="inp noborder" :popper-append-to-body="false">-->
        <!--&lt;!&ndash;<el-option value="">请选择</el-option>&ndash;&gt;-->
        <!--<el-option :value="1" label="男"></el-option>-->
        <!--<el-option :value="2" label="女">女</el-option>-->
        <!--</el-select>-->
      </div>
      <div class="input">
        <label for="age">年&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;龄</label>
        <!--<input v-model="age" @focus="change('age')" id="age" class="inp" type="text" placeholder="请选择年龄">-->
        <input type="text" v-model="age" id="age" class="inp" placeholder="请输入真实年龄">
      </div>
      <div class="input">
        <label for="phone">电&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;话</label>
        <input v-model="phone" id="phone" class="inp" type="text" placeholder="请输入检测人电话">
      </div>
      <div class="input">
        <!--<van-field v-model="cardNum" label="卡号" border />-->
        <label for="card">证&nbsp;&nbsp;件&nbsp;&nbsp;类&nbsp;型</label>
        <!--<input v-model="card" @focus="change('card')" class="inp" placeholder="请选择证件类型"/>-->
        <div  @click="change('card')" class="inp" :class="card?'':'have'">{{card ? card:'请选择'}}</div>
        <!--<el-select v-model="card" name="" id="card" class="inp noborder" :popper-append-to-body="false">-->
        <!--<el-option value="1" label="身份证"></el-option>-->
        <!--<el-option value="2" label="护照"></el-option>-->
        <!--</el-select>-->
      </div>
      <div class="input">
        <label for="phone">证&nbsp;&nbsp;件&nbsp;&nbsp;号&nbsp;码</label>
        <input v-model="cardNum" id="num" class="inp" type="text" placeholder="请输入证件号码">
      </div>
      <div class="input">
        <!--<van-field v-model="cardNum" label="卡号" border />-->
        <label for="card">预&nbsp;&nbsp;约&nbsp;&nbsp;项&nbsp;目</label>
        <!--<input v-model="project_name" @focus="change('project')" class="inp" />-->
        <el-select v-model="project_id" multiple placeholder="请选择预约项目" collapse-tags :popper-append-to-body="false">
          <el-option v-for="item in project" :key="item.value" :label="item.label" :value="item.value"></el-option>
        </el-select>
      </div>

      <div class="input">
        <!--<van-field v-model="cardNum" label="卡号" border />-->
        <label for="card">采&nbsp;样&nbsp;点&nbsp;地&nbsp;区</label>
        <!--<input v-model="proName" @focus="change('pro')" class="inp area" placeholder="请选择省" />-->
        <div  @click="change('pro')" class="inp area" :class="proName?'':'have'">{{proName ? proName:'请选择省'}}</div>
        <!--<el-select v-model="proVal" placeholder="省" @change="selectPro" :popper-append-to-body="false">-->
          <!--<el-option v-for="item in pro" :key="item.value" :label="item.label" :value="item.value"></el-option>-->
        <!--</el-select>-->
        <!--<input v-model="cityName" @focus="change('city')" class="inp area" placeholder="请选择市" />-->
        <div  @click="change('city')" class="inp area" :class="cityName?'':'have'">{{cityName ? cityName:'请选择市'}}</div>
        <div  @click="change('area')" class="inp area" :class="areaName?'':'have'">{{areaName ? areaName:'请选择区'}}</div>
        <!--<input v-model="areaName" @focus="change('area')" class="inp area" placeholder="请选择区" />-->
        <!--<el-select v-model="cityVal" placeholder="市" @change="selectCity" :popper-append-to-body="false">-->
          <!--<el-option v-for="item in city" :key="item.value" :label="item.label" :value="item.value"></el-option>-->
        <!--</el-select>-->
        <!--<el-select v-model="areaVal" placeholder="区" @change="selectArea" :popper-append-to-body="false">-->
          <!--<el-option v-for="item in area" :key="item.value" :label="item.label" :value="item.value"></el-option>-->
        <!--</el-select>-->
      </div>

      <div class="input">
        <!--<van-field v-model="cardNum" label="卡号" border />-->
        <label for="card">采&nbsp;&nbsp;样&nbsp;&nbsp;点</label>
        <!--<input v-model="sampAdd" @focus="change('add')" class="inp" placeholder="请选择"/>-->
        <div  @click="change('add')" class="inp" :class="sampAdd?'':'have'">{{sampAdd ? sampAdd:'请选择'}}</div>
        <!--<el-select v-model="sampAdd"  placeholder="请选择" :popper-append-to-body="false">-->
        <!--<el-option v-for="item in sampling" :key="item.value" :label="item.label" :value="item.value"></el-option>-->
        <!--</el-select>-->
      </div>
      <div class="input display">
        <!--<van-field v-model="cardNum" label="卡号" border />-->
        <label for="card">预&nbsp;&nbsp;约&nbsp;&nbsp;时&nbsp;间&nbsp;</label>
        <!--<input v-model="start" @focus="change('start')" class="inp" placeholder="请选择" />-->
        <div  @click="change('start')" class="inp" :class="start?'':'have'">{{start ? start:'请选择'}}</div>

        <!-- - -->
        <!--<input v-model="end" @focus="change('end')" class="inp" />-->

        <!--<el-select v-model="project_id" multiple placeholder="请选择" collapse-tags :popper-append-to-body="false">-->
        <!--<el-option v-for="item in project" :key="item.value" :label="item.label" :value="item.value"></el-option>-->
        <!--</el-select>-->
      </div>
    </div>
    <!--<van-popup position="bottom" v-model="dateState">-->

    <!--</van-popup>-->


    <div class="cont">
      <div class="title">受检人健康信息（选填）</div>
      <div class="input dis">
        <!--<van-field v-model="cardNum" label="卡号" border />-->
        <label for="cardNum">本人是否有肿瘤家族史</label>
        <!--<input v-model="family" @focus="change('family')" class="inp" placeholder="请选择"/>-->
        <div  @click="change('family')" class="inp" :class="family?'':'have'">{{family}}</div>

        <!--<el-select v-model="isFamily" name="" class="inp noborder" :popper-append-to-body="false">-->
        <!--<el-option value="2" label="是"></el-option>-->
        <!--<el-option value="1" label="否"></el-option>-->
        <!--</el-select>-->
      </div>
      <div class="input dis" v-if="isFamily==2">
        <label for="cardNum">本人与肿瘤患者成员关系</label>
        <!--<input v-model="rela" @focus="change('relation')" class="inp" placeholder="请选择"/>-->
        <div  @click="change('relation')" class="inp" :class="rela?'':'have'">{{rela?rela:'请选择'}}</div>

        <!--<el-select v-model="relation" name="" id="" class="inp noborder" :popper-append-to-body="false">-->
        <!--<el-option value="1" label="祖父"></el-option>-->
        <!--<el-option value="2" label="祖母"></el-option>-->
        <!--<el-option value="3" label="外公"></el-option>-->
        <!--<el-option value="4" label="外婆"></el-option>-->
        <!--<el-option value="5" label="父亲"></el-option>-->
        <!--<el-option value="6" label="母亲"></el-option>-->
        <!--<el-option value="7" label="兄弟姐妹"></el-option>-->
        <!--<el-option value="8" label="子女"></el-option>-->
        <!--<el-option value="9" label="伯/叔/姑"></el-option>-->
        <!--<el-option value="10" label="舅/姨"></el-option>-->
        <!--</el-select>-->
      </div>
      <div class="input dis" v-if="isFamily==2">
        <label for="age">家族肿瘤患者患什么肿瘤</label>
        <input v-model="zlType" class="inp" type="text" placeholder="">
      </div>
      <div class="input dis">
        <label for="phone">本人是否患过肿瘤</label>
        <!--<input v-model="selfme" @focus="change('self')" class="inp"/>-->
        <div  @click="change('self')" class="inp" :class="selfme?'':'have'">{{selfme}}</div>

        <!--<el-select v-model="isSelf" name="" class="inp noborder" :popper-append-to-body="false">-->
        <!--<el-option value="2" label="是"></el-option>-->
        <!--<el-option value="1" label="否"></el-option>-->
        <!--</el-select>-->
      </div>
      <div class="input dis" v-if="isSelf == 2">
        <!--<van-field v-model="cardNum" label="卡号" border />-->
        <label for="card">本人患肿瘤时间</label>
        <!--<input v-model="zlTimeText" @focus="change('zl')" class="inp" type="text" placeholder="请选择">-->
        <div  @click="change('zl')" class="inp" :class="zlTimeText?'':'have'">{{zlTimeText?zlTimeText:'请选择'}}</div>

      </div>
      <div class="input dis" v-if="isSelf == 2">
        <label for="phone">本人患什么肿瘤</label>
        <input v-model="selfType" class="inp" type="text" placeholder="请输入">
      </div>
      <div class="input dis" v-if="isSelf == 2">
        <!--<van-field v-model="cardNum" label="卡号" border />-->
        <label for="card">目前健康状态</label>
        <!--<input v-model="healthText" @focus="change('health')" class="inp" type="text" placeholder="请选择">-->
        <div  @click="change('health')" class="inp" :class="healthText?'':'have'">{{healthText?healthText:'请选择'}}</div>
        <!--<el-select v-model="health"  placeholder="请选择" :popper-append-to-body="false">-->
        <!--<el-option v-for="item in healthState" :key="item.value" :label="item.label" :value="item.value"></el-option>-->
        <!--</el-select>-->
      </div>

    </div>
    <div class="bottom">
      <van-checkbox class="check" v-model="checked" shape="square">我已阅读并同意《循环血异型细胞检测知情同意书》</van-checkbox>
      <div class="button" @click="submit">提 交 预 约</div>
    </div>
    <div class="fix">
      <van-datetime-picker v-if="dateState" v-model="date" type="year-month" :min-date="minDate" :max-date="maxDate"
                           @confirm="confirm" @cancel="cancel" :formatter="formatter"/>
      <!--预约时间-->
      <van-datetime-picker v-if="dateState1" v-model="startTime" type="datetime" :min-date="maxDate" :max-date="max"
                           @confirm="confirmStart" @cancel="cancel" :filter="filter" :visible-item-count="4" />
      <!--<van-datetime-picker v-if="zldate" v-model="zlTime" type="date" :min-date="minDate" :max-date="maxDate" @confirm="confirmzl()" @cancel="cancel"/>-->
      <van-picker v-if="pop" :columns="columns" show-toolbar @confirm="confirmSex" @cancel="cancel"/>
    </div>
    <div class="mask" v-if="cardPop">
      <!--继续留在本页面激活，查看有哪些卡，去预约-->
      <div class="center">
        <div class="cen-title"><i class="el-icon-circle-check"></i> 预约成功！</div>
        <div class="cen-hint">提示：</div>
        <div class="hint-cont">1、您可以关注776品质生活广场公众号，在菜单栏中快捷访问您的预约信息</div>
        <div class="hint-cont">2、10秒后跳转去二维码核验页面</div>
        <div class="timeout">{{time}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "appointment",
    data() {
      return {
        cardPop:false,
        start:'',
        end:'',
        sexArr: [{value: 1, text: '男'}, {value: 2, text: '女'}],
        sexState: false,
        cardArr: [{value: 1, text: '身份证'}, {value: 2, text: '护照'}],
        cardState: false,
        projectState: false,
        dateType: '',
        date: '',
        min: '',
        name: '',
        sex: '',
        age: '',
        dateState: false,
        minDate: new Date(1980, 0, 1),
        maxDate: new Date(),
        max:new Date(2030,0,1),
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
          {value: 1, text: '查出肿瘤尚未治疗'},
          {value: 2, text: '已手术未做放化疗'},
          {value: 3, text: '已手术正在做放化疗'},
          {value: 4, text: '已手术，已结束放化疗'},
          {value: 5, text: '未做手术正在做放化疗'},
          {value: 6, text: '未做手术做放化疗已结束'}
        ],
        checked: true,
        pro: [],
        proVal: '',
        cityVal: '',
        city: [],
        areaVal: '',
        cardNum: '',
        sampling: [],
        area: [],
        sampAdd: '',
        project_id: [],
        sexCode: '',
        cardCode: '',
        project_name: '',
        type: '',
        pop: false,
        columns: [],
        family: '否',
        selfme: '否',
        healthText: '',
        appointment_time:'',
        dateState1:false,
        startTime:'',
        proName:'',
        cityName:'',
        areaName:'',
        time:10,
        zlTimeText:''
      }
    },
    watch: {
      project_id(val) {
        console.log(val)
      }
    },
    mounted() {
      document.title = '预约信息'
      this.getArea()
      this.getProject()
    },
    methods: {
      filter(type,options){
        if (type === 'hour'){
          return options.filter((option) => (8 < parseInt(option) < 18));
        }
        if (type === 'minute') {
          return []
        }
        return options
      },
      formatter(type, val) {
        if (type === 'year') {
          return `${val}年`;
        } else if (type === 'month') {
          return `${val}月`;
        }
        return val;
      },
      onChange() {

      },
      confirmSex(value) {
        if (this.type === 'sex') {
          this.sex = value.text
          this.sexCode = value.value
        } else if (this.type === 'card') {
          this.card = value.text
          this.cardCode = value.value
        } else if (this.type === 'project') {
          this.project_id = value.value
          this.project_name = value.text
        } else if (this.type === 'add') {
          this.sampAdd = value.text
          this.samp_id = value.value
        } else if (this.type === 'family') {
          this.isFamily = value.value
          this.family = value.text
        } else if (this.type === 'relation') {
          this.rela = value.text
          this.relation = value.value
        } else if (this.type === 'self') {
          this.isSelf = value.value
          this.selfme = value.text
        } else if (this.type === 'health') {
          this.health = value.value
          this.healthText = value.text
        } else if (this.type === 'pro') {
          this.proVal = value.value
          this.proName = value.text
          this.selectPro()
        } else if (this.type === 'city'){
          this.cityVal = value.value
          this.cityName = value.text
          this.selectCity()
        } else if (this.type === 'area') {
          this.areaVal = value.value
          this.areaName = value.text
          this.selectArea()
        }
        this.pop = false
      },
      getProject() {
        let that = this
        that.$request({
          url: 'wap/getsamplingReport',
          // login:true,
          success(res) {
            that.dispro(res.data, 'project')
          }
        })
      },
      selectArea() {
        let that = this
        that.$request({
          url: 'wap/getBloodSamplingAddress',
          data: {
            province_id: that.proVal,
            city_id: that.cityVal,
            area_id: that.areaVal
          },
          login:true,
          success(res) {
            that.sampling = []
            that.sampAdd = ''
            that.dispro(res.result, 'samp')
          }
        })
      },
      selectCity() {
        let that = this
        that.$request({
          url: 'wap/getArea',
          login:true,
          data: {
            cityId: this.cityVal
          },
          success(res) {
            // that.area = res.data
            that.area = []
            that.areaVal = ''
            that.sampling = []
            that.sampAdd = ''
            that.dispro(res.data, 'area')
          }
        })
      },
      selectPro() {
        let that = this
        that.$request({
          url: 'wap/getCity',
          login:true,
          data: {
            provinceId: this.proVal
          },
          success(res) {
            // that.city = res.data
            that.city = []
            that.cityVal = ''
            that.area = []
            that.areaVal = ''
            that.sampling = []
            that.sampAdd = ''
            that.dispro(res.data, 'city')
          }
        })
      },
      getArea() {
        let that = this
        that.$request({
          url: 'wap/getProvinceCity',
          login: true,
          success(res) {
            that.dispro(res.data, 'pro')
          }
        })
      },
      dispro(data, type) {
        for (let i = 0; i < data.length; i++) {
          if (type == 'pro') {
            this.pro.push({
              value: data[i].id,
              text: data[i].area_name
            })
          } else if (type == 'city') {
            this.city.push({
              value: data[i].id,
              text: data[i].area_name
            })
          } else if (type == 'area') {
            this.area.push({
              value: data[i].id,
              text: data[i].area_name
            })
          } else if (type == 'samp') {
            this.sampling.push({
              value: data[i].id,
              text: data[i].name
            })
          } else if (type == 'project') {
            this.project.push({
              value: data[i].id,
              text: data[i].name
            })
          }

        }
      },
      confirm(value) {
        console.log(value)
        let d = new Date(value)
        this.date = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate()
        this.dateState = false
        if (this.type == 'zl') {
          this.zlTime = d.getFullYear() + '-' + (d.getMonth() + 1)
          this.zlTimeText = d.getFullYear() + '年' + (d.getMonth() + 1) + '月'
        }
      },
      confirmStart(value){
        let d = new Date(value)
        this.date = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate()
        this.dateState1 = false
        this.start = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + ' ' + d.getHours()+':00:00'
      },
      cancel() {
        this.dateState = false
        this.pop = false
      },
      change(type) {
        this.type = type
        if (type === 'sex') {
          this.columns = this.sexArr
        } else if (type === 'card') {
          this.columns = this.cardArr
        } else if (type === 'project') {
          this.columns = this.project
        } else if (type === 'add') {
          this.columns = this.sampling
        } else if (type === 'family') {
          this.columns = [{value: 1, text: '否'}, {value: 2, text: '是'}]
        } else if (type === 'relation') {
          this.columns = [{value: 1, text: '祖父'}, {value: 2, text: '祖母'}, {value: 3, text: '外公'}, {
            value: 4,
            text: '外婆'
          }, {value: 5, text: '父亲'}, {value: 6, text: '母亲'}, {value: 7, text: '兄弟姐妹'}, {
            value: 8,
            text: '子女'
          }, {value: 9, text: '伯/叔/姑'}, {value: 10, text: '舅/姨'}]
        } else if (type === 'self') {
          this.columns = [{value: 1, text: '否'}, {value: 2, text: '是'}]
        } else if (type === 'zl') {
          this.dateState = true
          return
        } else if (type === 'health') {
          this.columns = this.healthState
        } else if (type === 'start') {
          this.dateState1 =true
          return
        } else if (type === 'pro'){
          this.columns = this.pro
        } else if (type === 'city'){
          this.columns = this.city
        } else if (type === 'area') {
          this.columns = this.area
        }
        this.pop = true
        console.log(type)
        // this.dateType = type
        //
      },
      submit() {
        let that = this
        that.$request({
          url: 'wap/addSamplingAppointment',
          data: {
            mobile: that.phone,
            name: that.name,
            sex: that.sex,
            age: that.age,
            idenity_type: that.card,
            idenity_nmber: that.cardNum,
            blood_sampling_id: that.samp_id,
            project_id: that.project_id.join(','),
            is_illness: that.isFamily,
            is_had_illness: that.isSelf,
            had_illness_time: that.zlTime,
            illness: that.zlType,
            my_illness: that.selfType,
            relation: that.relation,
            health_type: that.health,
            appointment_time:that.start
          },
          // login:true,
          success(res) {
            that.timeOut(res)
            that.cardPop = true
          }
        })
      },
      timeOut: function (res) {
        let time = 10;
        let that = this;
        let i = setInterval(function () {
          time--;
          if (time < 1) {
            that.cardPop = false
            that.$router.push({path: '/qrcode', query: {id: res.id,code:res.safe_code}})
            clearInterval(i);
            return
          }
          that.time = time
        }, 1000)
      },
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
    text-align: left;
    line-height: 88px;
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

  .check {
    margin-left: 60px !important;
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

  .noborder {
    border: none;
  }
  .display{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .area{
    width: 25%;
  }
  .mask{
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.4);
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
  }
  .center{
    width: 710px;
    height: 689px;
    overflow: auto;
    background: #ffffff;
    border-radius: 16px;
  }
  .hint-cont{
    padding:0 40px;
    box-sizing: border-box;
    text-align: left;
    font-size: 30px;
    margin-bottom: 20px;
  }
  .cen-title{
    text-align: center;
    margin: 150px 0 100px;
    font-size: 46px;
    color: #e91616;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .cen-title i{
    color: #e91616;
    margin-right: 20px;
    font-size: 80px;
  }
  .cen-hint{
    text-align: left;
    margin-bottom: 30px;
    font-size: 28px;
    padding:0 40px;
    box-sizing: border-box;
  }
  .operation{
    display: flex;
    align-items: center;
    justify-content: space-around;
    color: dodgerblue;
    margin-top: 30px;
    margin-bottom: 40px;
    font-size: 30px;
  }
  .timeout{
    color: #e91616;
    text-align: center;
    font-size: 60px;
    margin: 40px 0;
  }
  .have{
    color: #cccccc;
  }
</style>
