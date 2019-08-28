<template>
  <div class="My">
    <header>
      <ul>
        <li>
          <img :src=employee.image alt="">
        </li>
        <li>
          <h3>{{store_name}}</h3>
          <div>
            <span>{{employee.nickname}}</span>
            <span>会籍</span>
          </div>
        </li>
        <li>
          <div class="gt" @click="fnPersonal"></div>
        </li>
      </ul>
    </header>
    <div class="text">
      <ul>
        <li>{{count}}人</li>
        <li>￥{{nowOrder}}</li>
        <li>￥{{amount}}</li>
        <li>0人</li>
      </ul>
      <ul>
        <li>今日潜客</li>
        <li>今日成单</li>
        <li>本月成单</li>
        <li>管理会员</li>
      </ul>
    </div>
    <div class="icon">
      <ul>
        <router-link to="/todayAppointment" tag="li">
          <i class="fa fa-address-book" aria-hidden="true"></i><br/>
          <span>今日预约</span>
        </router-link>
        <router-link to="/myCommission" tag="li">
          <i class="fa fa-money" aria-hidden="true"></i><br/>
          <span>我的提成</span>
        </router-link>
        <router-link to="/teamMember" tag="li">
          <i class="fa fa-users" aria-hidden="true"></i><br/>
          <span>同组成员</span>
        </router-link>
        <router-link to="/myMission" tag="li">
          <i class="fa fa-calendar" aria-hidden="true"></i><br/>
          <span>我的任务</span>
        </router-link>
        <li>
          <i class="fa fa-user-plus" aria-hidden="true"></i><br/>
          <span>推广二维码</span>
        </li>
      </ul>
    </div>

    <div class="contract">
      <ul>
        <li>
          <span>我的合同</span>
          <router-link to="/contractList" tag="span">查看全部合同
          <span>&gt;</span>
          </router-link>
        </li>
        <li>
          <ul>
            <router-link to="/signedList" tag="li">
              <i class="fa fa-file-text" aria-hidden="true"></i><br/>
              <a>已签约</a>
            </router-link>
            <router-link to="/waitSign" tag="li">
              <i class="fa fa-file-text" aria-hidden="true"></i><br/>
              <span>待签约</span>
            </router-link>
            <router-link to="/willOverdue" tag="li">
              <i class="fa fa-file-text" aria-hidden="true"></i><br/>
              <span>即将过期</span>
            </router-link>
            <router-link to="/overdueList" tag="li">
              <i class="fa fa-file-text" aria-hidden="true"></i><br/>
              <span>已过期</span>
            </router-link>
          </ul>
        </li>
        <router-link to="/potentialList" tag="li" class="li">
          <i class="fa fa-check-square-o" aria-hidden="true"></i>
          <span>潜在客户维护</span>
          <span style="margin-left: 4.2rem">&gt;</span>
        </router-link>
        <router-link to="/membersList" tag="li" class="li">
          <i class="fa fa-check-square-o" aria-hidden="true"></i>
          <span>会员维护</span>
          <span class="li_gt">&gt;</span>
        </router-link>
        <li class="li">
          <i class="fa fa-check-square-o" aria-hidden="true"></i>
          <span>考核中心</span>
          <span class="li_gt">&gt;</span>
        </li>

        <li class="li">
          <i class="fa fa-check-square-o" aria-hidden="true"></i>
          <span>我的考勤</span>
          <span class="li_gt">&gt;</span>
        </li>

        <router-link to="/feedback" tag="li" class="li">
          <i class="fa fa-check-square-o" aria-hidden="true"></i>
          <span>意见反馈</span>
          <span class="li_gt">&gt;</span>
        </router-link>
      </ul>

    </div>
  </div>
</template>

<script>
  import getDate from '../../getDate/getDate';
  import axios from 'axios'
  export default {
    data() {
      return {
        employee:{},
        store_name:'',
        amount:'',
        count:'',
        nowOrder:''

      }
    },
    //登录不过期
    // beforeRouteEnter (to, from, next) {
    //    // 页面渲染之前事件
    //   const HAS_LOGINED = localStorage.getItem('$user')
    //   // console.log(HAS_LOGINED)
    //   if (HAS_LOGINED && navigator.onLine) next()
    //   else next({ name: 'login' })
    // },
    created() {
      document.title='我的';
      getDate.getIndexEmplyeeMessage().then((res)=>{//我的
        console.log(res.data);
        this.store_name=res.data.storeName.store_name;
        this.employee=res.data.employee;
        this.amount=res.data.monthOrder.amount;
        this.count=res.data.potential.count;
        this.nowOrder=res.data.nowOrder.amount;
      })
      axios.post(`http://192.168.1.111/ezapp/selectContSucc`,`startPage=${1}`).then(res=>{
        console.log(res.data);
      })
    },
    mounted() {

    },
    methods: {
      fnPersonal(){
        this.$router.push({name:'user'})
      }
    }
  }
</script>

<style  scoped>

  .My{
    overflow: hidden;
    margin-bottom: 1.2rem;
  }
  body,html{
    width: 100%;
    height: 100%;
  }
  .li_gt{
    margin-left: 5em;
  }
  ul {
    list-style: none;
  }

  header {
    width: 100%;
    height: 3.4rem;
    background: #464c5b;
    font-size: 0.35rem;
    color: white;
  }

  header ul {
    list-style: none;
    display: flex;
    padding: 0.4rem;
  }

  header ul li {
    margin-top: 0.3rem;
  }

  header ul li:nth-child(1) img{
    width: 1.1rem;
    height: 1.1rem;
    /*background: red;*/
    border-radius: 50%;
    flex: 1;
  }

  header ul li:nth-child(2) {
    flex: 4.5;
    margin-left: 0.3rem;
  }

  header ul li:nth-child(2) div span:nth-child(2) {
    font-size: 0.2rem;
    color: #f19736;
    margin-left: 0.3rem;
  }

  header ul li:nth-child(3) {
    flex: 0.6;
  }

  .gt {
    color: white;
    font-style: normal;
    width: 0.3rem;
    height: 0.3rem;
    border-top: 2px solid white;
    border-right: 2px solid white;
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
    display: inline-block;
    vertical-align: middle;
    margin-top: 0.3rem;
    margin-left: 0.3rem;
  }

  .text {
    width: 90%;
    height: 2.1rem;
    background: white;
    border-radius: 15px;
    margin-left: 5%;
    margin-top: -1rem;
    opacity: 1;
    border: .032rem solid #e4e4e4;
    text-align: center;
  }

  .text ul:nth-child(1) {
    width: 100%;
    font-size: 0.25rem;
    display: flex;
    margin-top: 0.6rem;

  }

  .text ul:nth-child(1) li {
    width: 25%;
    font-size: 0.25rem;
    flex: 1;
  }

  .text ul:nth-child(2) {
    width: 100%;
    font-size: 0.25rem;
    display: flex;
    margin-top: 0.2rem;

  }

  .text ul:nth-child(2) li {
    width: 25%;
    font-size: 0.25rem;
    flex: 1;
    color: silver;
  }
  .icon{
    width: 100%;
    font-size: 0.3rem;
  }
  .icon ul{
    width: 100%;
    display: flex;
    text-align: center;
    margin-top: 0.3rem;
  }
  .icon ul{
    width: 90%;
    margin-left: 0.3rem;

  }
  .icon ul li{
    width: 20%;
    flex: 1;
  }
  .icon ul li span{
    font-size: 0.2rem;
  }
  .icon ul li i{
    font-size: 0.45rem;
  }
  .contract{
    width: 100%;
    font-size: 0.3rem;
    margin-top: 0.3rem;
  }
  .contract>ul>li{
    padding-left: 0.35rem;
    border-top: 1px solid silver;
  }
  .contract ul>li:nth-child(1)>span:nth-child(2){
    margin-left: 3.2rem;
  }
  .contract ul>li:nth-child(1)>span:nth-child(3){
    font-size: 0.5rem;
  }
  .contract ul>li:nth-child(2)>ul{
    width: 90%;
    display: flex;
    text-align: center;
    /*margin-top: 0.3rem;*/
    padding: 0.3rem;
  }
  .contract ul>li:nth-child(2)>ul>li{
    flex: 1;
    margin-right: 0.2rem;
  }
  .li{
    padding: 0.1rem;
    position: relative;
  }
  .li span:nth-child(3){
    font-size: 0.5rem;
  }
  .li_gt{
    margin-left: 4.8rem;
  }
</style>
