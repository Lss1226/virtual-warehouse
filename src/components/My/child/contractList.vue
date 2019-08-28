<template>
  <div class="contractList">
    <div class="top">
      <header>
        <a href="javascript:history.go(-1)">&lt</a>
        <span>合同详情</span>
      </header>
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide"><img class="img" src="../../../assets/img/lunbo.jpg" alt=""></div>
          <div class="swiper-slide"><img class="img" src="../../../assets/img/lunbo.jpg" alt=""></div>
        </div>
      </div>
      <div class="heto" >
        <p>全部合同</p>
      </div>
    </div>

    <div class="list_data">
      <ul>
        <li v-for="(item,index) in list" :key="index">
          <div>
            <img src="../../../assets/img/hetong.jpg" alt="">
          </div>
          <div>
            <p class="p">{{item.contract_type}}</p>
            <p>有效期:<span>{{item.end_time}}</span></p>
            <p class="p">￥{{item.pay_amount}}</p>
          </div>
          <div>
            <button @click="seeContarct(item)">查看合同详情</button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import Swiper from 'swiper';
  import getDate from '../../../getDate/getDate';
  export default {
    data(){
      return{
        list:[]
      }
    },
    created() {
      document.title = '合同列表';
      getDate.getContarctById().then((res)=>{
        console.log(res.data.message);
        this.list=res.data.message;
      })
    },
    methods: {
      fnSwiper() {
        new Swiper('.swiper-container', {})
      },
      seeContarct(item){
        console.log(1);
        this.$router.push({path:'/SeeContarct',query:{id:item.id}})
      }
    },
    mounted() {
      this.fnSwiper();
    }
  }
</script>

<style scoped>
  .p{
    color: #f60;
  }
  .contractList {
    width: 100%;
  }
  .top{
    width: 100%;
    /*height:6.38rem;*/
    position: fixed;
    z-index: 10;
    top: 0;
    left: 0;
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
    font-size: 0.4rem;
  }

  .swiper-container {
    width: 100%;
  }

  .swiper-container div {
    width: 100%;
  }

  .swiper-slide img {
    width: 100%;
    height: 2rem;
  }

  .heto {
    width: 100%;
    text-align: center;
    border-bottom: 1px solid silver;
    background: #f3f4f6;
    margin-top: -0.28rem;
  }

  .heto > p {
    width: 20%;
    font-size: 0.3rem;
    padding: 0.2rem;
    border-bottom: 2px solid green;
    color: green;
    margin-left: 36%;
  }

  .list_data {
    width: 100%;
    margin-top: 4rem;
  }

  .list_data ul {
    width: 100%;
    font-size: 0.25rem;
  }

  .list_data ul li {
    display: flex;
    padding: 0.3rem;
  }
  .list_data ul li div:nth-child(1){
    flex: 2;
  }
  .list_data ul li div:nth-child(2){
    flex: 2;
  }
  .list_data ul li div:nth-child(3){
    flex:2;
  }
  .list_data ul li div:nth-child(1) img{
    border-radius: 10px;
  }
  .list_data ul li div:nth-child(2) p{
    padding-top: 0.1rem;
  }
  .list_data ul li div:nth-child(3) button{
    width: 82%;
    height: 0.8rem;
    border: solid 1px #1abc9c;
    background: #1abc9c;
    color: white;
    border-radius: 4px;
    margin-top: 0.3rem;
    margin-left: 0.2rem;
  }
</style>
