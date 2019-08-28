<template>
  <div class="user">
    <header>
      <a href="javascript:history.go(-1)">&lt</a>
      <span>修改信息</span>
    </header>
    <div class="content">
      <ul>
        <li>
          <div style="margin-top: 0.2rem">头像</div>
          <div><img :src=employee.image alt=""></div>
        </li>
        <li>
          <div><span>昵称</span></div>
          <!--<div>-->
            <!--<span class="time">{{employee.birthday}}</span>-->
          <!--</div>-->
          <div><input type="text" :value=employee.nickname id="str" @blur="fnLose"  @input="fnChange" /></div>
        </li>
        <div class="ipt">
          <div>
            <span>性别</span>
          </div>
          <div>
            <span>男</span><input type="checkbox" id="Male" value="0" v-model="ckx" @change="Male">
            <span>女</span><input type="checkbox" id="feMale" value="1" v-model="ckx1" @click="feMale">
          </div>
        </div>
        <!--<li>-->
        <!--<span>性别</span>-->
        <!--<span>男士</span><input type="checkbox" id="Male" value="0">-->
        <!--<span>女士</span><input type="checkbox" id="feMale" value="1">-->
        <!--</li>-->
        <li>
          <div><span>出生日期</span></div>
          <div>
            <span class="time"  @click="this.startTime"  ref="time">{{employee.birthday}}</span>
          </div>
        </li>
        <li>
          <div><span>手机号</span></div>
          <div><input type="text" id="sj" :value=employee.phone_number></div>
        </li>
      </ul>
    </div>
    <div class="btn">
      <button @click="fnBao">保存</button>
    </div>
    <div class="del" v-show="iNos">
      <ul>
        <li><span>信息</span></li>
        <li><span>昵称已存在，请修改！</span></li>
        <li>
          <button @click="fnBtn">确认</button>
        </li>
      </ul>
    </div>
    <div>
      <!--时间插件-->
      <mt-datetime-picker
        ref="pickerStartTime"
        type="date"
        v-model="pickerValueStartTime"
        :startDate = "startDate"
        :endDate = "endDate"
        @confirm="this.handleConfirmStartTime">
      </mt-datetime-picker>
    </div>
  </div>
</template>

<script>
  import getDate from '../../../getDate/getDate'

  export default {
    data() {
      return {
        employee: {},
        iNos: false,
        ckx: false,
        ckx1: true,
        val: '',
        pickerValueStartTime: '',
        startDate: new Date('1980-01-02'),      //设置开始时间
        endDate: new Date('2030-12-31') ,  //设置结束时间
        img:'',
        time:''
      }
    },
    created() {
    },
    methods: {
      fnBao(){
        let img=this.img;
        let nickname=document.getElementById('str').value;
        let birthday=this.time;
        let sex=this.val;
        let phoneNumber=document.getElementById('sj').value;
        getDate.saveUserMessage(nickname,sex,birthday,phoneNumber,img).then((res)=>{
          console.log(res.data);
          // this.$router.push({name:'mine'})
        })

      },
      fnChange(){
        let str =document.getElementById('str').value;
        getDate.checkNickname(str).then((res)=>{
          console.log(res.data);
          if (res.data.success){
            this.iNos = false;
          } else{
            this.iNos=true
          }
        })
      },
      startTime () {
        this.$refs.pickerStartTime.open()
      },
      handleConfirmStartTime () {
        let time=this.$refs.time;
        time.innerHTML=this.pickerValueStartTime.toLocaleString();
        let arr=time.innerHTML.split(' ');
        let arr1=arr[0];
        this.time=arr[0];
        time.innerHTML=arr1

      },

      fnLose() {
        // this.iNos=true;
      },
      fnBtn() {
        this.iNos = false;
      },
      Male() {
        let Male = document.getElementById('Male').value;
        this.ckx1 = false;
        this.ckx = true;
        this.val = Male;
      },
      feMale() {
        let feMale = document.getElementById('feMale').value;
        this.ckx1 = true;
        this.ckx = false;
        this.val = feMale;
      },
    },
    mounted() {
      let val = document.getElementById('Male').value;
      let val1 = document.getElementById('feMale').value;
      var a;
      if (this.ckx == true) {
        a = val;
      } else if (this.ckx1 == true) {
        a = val1;
      }
      this.val = a;
      getDate.getIndexEmplyeeMessage().then((res) => {//我的
        console.log(res.data.employee);
        this.employee = res.data.employee;
        this.img=res.data.employee.image;
        if (res.data.employee.sex == 1) {
          this.ckx1 = true;
          this.ckx = false;
        } else {
          this.ckx1 = false;
          this.ckx = true;
        }
      })
    }
  }
</script>

<style scoped>
  .time {
    border: solid 1px silver;
    display: inline-block;
    width: 3rem;
    height: 0.55rem;
    line-height: 0.55rem;
    padding-left: 0.2rem;
    border-radius: 3px;
    font-size: 0.25rem;
    color: black;
  }
  .ipt {
    padding: 0.5rem;
    border-bottom: solid 1px #f5f5f5;
  }

  .ipt div {
    display: inline-block;
  }

  .ipt div:nth-child(2) {
    margin-left: 4.3rem;
  }

  .del {
    width: 100%;
    height: 100%;
    background: black;
    background: rgba(0, 0, 0, 0.2);
    position: fixed;
    top: 0px;
    z-index: 100;
    font-size: 0.3rem;
  }

  .del ul {
    width: 100%;
    position: relative;
    top: 35%;
    left: 12%;

  }

  .del ul li {
    width: 70%;
    background: #4476A7;
    padding: 0.2rem;
    color: white;
    /*border-radius: 3px;*/
  }

  .del ul li:nth-child(2), .del ul li:nth-child(3) {
    background: white;
    color: black;
  }

  .del ul li:nth-child(3) {
    border-top: solid 1px silver;
  }

  .del ul li:nth-child(3) button {
    width: 17%;
    height: 0.5rem;
    background: white;
    border: solid 1px silver;
    position: relative;
    left: 80%;
  }

  ul {
    list-style: none;
  }

  header {
    width: 100%;
    height: 1.2rem;
    background: #f5f5f5;
    text-align: center;
    line-height: 0.7rem;
    position: relative;
  }

  header > a {
    position: absolute;
    left: 0.4rem;
    top: 0.2rem;
    font-size: 0.5rem;
    text-decoration: none;
    color: seagreen;
  }

  header > span {
    font-size: 0.35rem;
  }

  .content {
    font-size: 0.3rem;
    width: 100%;
  }

  .content ul {
    width: 100%;
  }

  .content ul li {
    width: 100%;
    display: flex;
    border-bottom: #f5f5f5 solid 1px;
  }

  .content ul li input {
    width: 3rem;
    padding: 0.1rem;
    border-radius: 3px;
    border: solid 1px silver;
    opacity: 0.7;
  }

  .content ul li div:nth-child(1) {
    flex: 6;
    padding: 0.5rem;
  }

  .content ul li div:nth-child(2) {
    flex: 2;
    padding: 0.3rem;
    margin-top: 0.1rem;
  }

  .content ul li:nth-child(2) div:nth-child(1) {
    flex: 2.6;
    padding: 0.5rem;
  }

  .content ul li:nth-child(2) div:nth-child(2) {
    flex: 1;
    padding: 0.3rem;
    margin-top: 0.1rem;
  }

  .content ul li:nth-child(3) div:nth-child(1) {
    flex: 7.3;
    padding: 0.5rem;
  }

  .content ul li:nth-child(3) div:nth-child(2) {
    flex: 1;
    padding: 0.3rem;
  }

  .content ul li:nth-child(4) div:nth-child(1) {
    flex: 4;
    padding: 0.5rem;
  }

  .content ul li:nth-child(4) div:nth-child(2) {
    flex: 2;
    padding: 0.3rem;
  }

  .content ul li:nth-child(5) div:nth-child(1) {
    flex: 4;
    padding: 0.5rem;
  }

  .content ul li:nth-child(5) div:nth-child(2) {
    flex: 2.4;
    padding: 0.3rem;
  }

  .content ul li:nth-child(1) img {
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
  }

  .btn {
    width: 100%;
  }

  .btn button {
    width: 35%;
    height: 0.7rem;
    background: lightseagreen;
    color: white;
    border-radius: 20px;
    border: solid 1px lightseagreen;
    margin-left: 30%;
  }
</style>
