<template>
  <div class="membershipDetails">
    <header>
      <a href="javascript:history.go(-1)">&lt</a>
      <span>会员详情</span>
    </header>
    <div class="content">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide"><img class="img" src="../../../assets/img/t1.jpg" alt=""></div>
          <div class="swiper-slide"><img class="img" src="../../../assets/img/t2.jpg" alt=""></div>
          <div class="swiper-slide"><img class="img" src="../../../assets/img/t3.jpg" alt=""></div>
        </div>
        <div class="swiper-pagination"></div>
        <!--<div class="swiper-button-prev"></div>-->
        <!--<div class="swiper-button-next"></div>-->
      </div>
      <div class="txt">
        <ul>
          <li>
            <span style="color:red;">{{obj.card_type}}</span>
          </li>
          <li>
            <span>{{obj.name}}:</span>
            <span>{{obj.phone}}</span>
          </li>
          <li style="margin-top: 0.2rem;">
            <span style="color:#FFCC33;">{{obj.address}}</span>
          </li>
        </ul>
      </div>
      <div style="border-bottom: #f5f5f5 solid 1px;margin-top: 0.6rem"></div>
    </div>
  </div>
</template>

<script>
  import Swiper from 'swiper';
  import getDate from '../../../getDate/getDate'
  export default {
    data() {
      return {
        id: this.$route.query.id,
        obj:{}
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
      }
    },
    mounted(){
      this.fnSwiper()
    },
    created(){
      document.title='会员详情';
      getDate.memberView(this.id).then((res)=>{//会员详情
        console.log(res.data.list);
        this.obj=res.data.list[0];
      });
    }
  }
</script>

<style scoped>

  header{
    width: 100%;
    height: 1.2rem;
    background: #f5f5f5;
    text-align: center;
    line-height: 0.7rem;
    position: relative;
  }
  header>a{
    position: absolute;
    left: 0.4rem;
    top: 0.2rem;
    font-size: 0.5rem;
    text-decoration: none;
    color: seagreen;
  }
  header>span{
    font-size: 0.4rem;
  }
  .content{
    width: 100%;
  }
  .img{
    width: 100%;
    height: 4.5rem;
  }
  .txt{
    width: 100%;
  }
  .txt ul{
    padding-left: 0.5rem;
    list-style: none;
  }
  .txt ul li{
    font-size: 0.3rem;
  }
</style>
