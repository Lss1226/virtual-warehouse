<template>
  <div class="user">
    <header>
      <a href="javascript:history.go(-1)">&lt</a>
      <span>个人中心</span>
    </header>
    <div class="content">
      <ul>
        <li>
          <div style="margin-top: 0.2rem">头像</div>
          <div><img :src=employee.image alt=""></div>
        </li>
        <li>
          <div><span>昵称</span></div>
          <div style="margin-left:2rem"><span>{{employee.nickname}}</span></div>
        </li>
        <li>
          <div><span>性别</span></div>
          <div ><span  ref="sp"></span></div>
        </li>
        <li>
          <div><span>出生日期</span></div>
          <div><span>{{employee.birthday}}</span></div>
        </li>
        <li>
          <div><span>手机号</span></div>
          <div><span>{{employee.phone_number}}</span></div>
        </li>
        <li @click="fnLi">
          <div><span>修改信息</span></div>
          <div><span>&gt;</span></div>
        </li>
      </ul>
    </div>
    <div class="btn">
        <button @click="fntuicu">退出登录</button>
    </div>
  </div>
</template>

<script>
  import getDate from '../../../getDate/getDate'

  export default {
    data() {
      return {
        employee: {}
      }
    },
    created() {
    },
    methods:{
      fnLi(){
        // console.log(1);
        this.$router.push('/changeInformation');
      },
      fntuicu(){
        this.$router.push({path:'/'})
      }
    },
    mounted(){
      let sp=this.$refs.sp;
      console.log(sp);
      getDate.getIndexEmplyeeMessage().then((res) => {//我的
        console.log(res.data.employee);
        this.employee = res.data.employee;
        if (res.data.employee.sex==1){
          sp.innerHTML="女";
        } else{
          sp.innerHTML="男";
        }
      })
    }
  }
</script>

<style scoped>
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
    flex:7.3;
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
  .content ul li:nth-child(6) div:nth-child(1) {
    flex: 7;
    padding: 0.5rem;
  }

  .content ul li:nth-child(6) div:nth-child(2) {
    flex: 1;
    padding: 0.3rem;
    font-size: 0.5rem;
  }
  .content ul li:nth-child(1) img {
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
  }
  .btn{
    width: 100%;
  }
  .btn button{
    width: 35%;
    height: 0.7rem;
    background: lightseagreen;
    color: white;
    border-radius: 20px;
    border: solid 1px lightseagreen;
    margin-left: 30%;
  }
</style>
