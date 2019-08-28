<template>
  <div class="box_sign">
    <div class="is-fixed">
      <header>
        <a href="javascript:history.go(-1)">&lt</a>
        待签约
      </header>
      <div class="content">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide"><img class="img" src="../../../assets/img/t1.jpg" alt=""></div>
            <div class="swiper-slide"><img class="img" src="../../../assets/img/t2.jpg" alt=""></div>
            <div class="swiper-slide"><img class="img" src="../../../assets/img/t3.jpg" alt=""></div>
          </div>
          <div class="swiper-pagination"></div>
        </div>
        <div class="allcontract">
          <ul>
            <li></li>
            <li>全部合同</li>
            <li></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="card">
      <dl v-for="(item, index) in list" :key="index">
        <dt><img class="img" src="../../../assets/img/hetong.jpg" style="height: 1.3rem" alt=""></dt>
        <dd>
          <p>{{item.contract_type}}</p>
          <p>有效期：{{item.end_time}}</p>
          <p @click="fnSigned(item)"><span>￥{{item.pay_amount}}</span><span>查看合同详情</span></p>
        </dd>
      </dl>
    </div>

  </div>
</template>

<script>
  import Swiper from 'swiper';
  import getDate from '../../../getDate/getDate';

  export default {
    name: "waitSign",
    data(){
      return{
        list:''
      }
    },
    methods:{
      fnSwiper(){
        new Swiper ('.swiper-container', {
          loop: true,
          // 前进后退按钮
          nextButton: '.swiper-button-next',
          prevButton: '.swiper-button-prev',
          pagination:{//分页器
            "el":'.swiper-pagination'
          },
          autoplay:true
        })
      },
      fnSigned(item){
        this.$router.push({path:'/seeUnsignedContarct',query:{id:item.id}})
      }

    },
    mounted() {
      this.fnSwiper()
      getDate.getUnsignedContarctById(this.url,this.pagenum).then(res => {
        console.log(res.data.message)
        this.list = res.data.message

      })
    }
  }
</script>

<style scoped lang="scss">
  .is-fixed{
    width: 100%;
    height:6.38rem;
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
  }
  .p{
    color: red;
  }
  .box_sign{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  header{
    width: 100%;
    height: 1.2rem;
    background: #f5f5f5;
    text-align: center;
    line-height: 1.2rem;
    position: relative;
    font-size:16px;
  }
  header>a{
    position: absolute;
    left: 0.4rem;
    top: 0rem;
    font-size: 0.5rem;
    text-decoration: none;
    color: seagreen;
  }
  header>span{
    font-size: 0.4rem;
  }
  .content{
    width: 100%;
    height: 100%;
  }
  .img{
    width: 100%;
    height: 4.5rem;
  }
  .allcontract{
    width: 100%;
    height: 0.8rem;
    line-height: 0.8rem;
    border-bottom: 0.5px #e4e4e4 solid;
    margin-top: -0.26rem;
    background: #f5f5f5;
  }
  .allcontract>ul{
    display: flex;
    text-align: center;
  }
  .allcontract>ul>li{
    flex: 1;
  }
  .allcontract>ul>li:nth-of-type(2){
    font-size: 16px;
    text-align: center;
    color: #009688;
    border-bottom: 0.5px #009688 solid;
  }

  .card{
    width: 100%;
    margin-top: 6.6rem;
  }
  .card>dl{
    width: 100%;
    display: flex;
    font-size: 0.3rem;
  }
  .card>dl>dt{
    flex: 1;
    padding: 0.2rem 0.4rem;
  }
  .card>dl>dt>img{
    width: 2rem;
    height:2rem;
  }
  .card>dl>dd{
    flex:3;
    margin: 0;
    margin-top: 0.25rem;
  }
  .card>dl>dd>p{
    display: block;
    color: coral;
  }
  .card>dl>dd>p:nth-of-type(2){
    color: #000000;
  }
  .card>dl>dd>p:nth-of-type(3)>span:nth-of-type(1){
    color: red;
  }
  .card>dl>dd>p:nth-of-type(3)>span:nth-of-type(2){
    padding:0.12rem;
    font-size: 0.2rem;
    color: #fff;
    background-color: #009688;
    border-radius: 5px;
    float: right;
    margin-right: 0.4rem;
  }
  .ts{
    width: 100%;
    padding: 0.2rem;
    text-align: center;
    font-size: 16px;
    color: #999999;
  }
</style>
