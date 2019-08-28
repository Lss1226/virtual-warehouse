<template>
  <div class="box_sign">
    <div class="is-fixed">
      <header>
        <a href="javascript:history.go(-1)">&lt</a>
        <span>已过期</span>
      </header>
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide"><img class="img" src="../../../assets/img/t1.jpg" alt=""></div>
          <div class="swiper-slide"><img class="img" src="../../../assets/img/t2.jpg" alt=""></div>
          <div class="swiper-slide"><img class="img" src="../../../assets/img/t3.jpg" alt=""></div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
      <div class="allcontract">
        <fade @pitch="pitch"/>
      </div>
    </div>
    <div class="content">
      <div class="card"
           v-infinite-scroll="loadMore"
           :infinite-scroll-disabled="loading"
           :infinite-scroll-distance="20"
           infinite-scroll-immediate-check="false"
      >
        <dl v-for="(item, index) in list" :key="index">
          <dt><img class="img" src="../../../assets/img/hetong.jpg" style="height: 1.3rem" alt=""></dt>
          <dd>
            <p>{{item.cardType}}</p>
            <p>有效期：{{item.data}}</p>
            <p @click="fnBtn(item)"><span>￥{{item.payAmount}}</span><span>查看合同详情</span></p>
          </dd>
        </dl>
        <div class="ts" v-if="loader">{{msg}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  import Axios from 'axios';
  import Swiper from 'swiper';
  import fade from '../../../fade/fade'
  import getDate from '../../../getDate/getDate';

  export default {
    name: "selectContByDate",
    components: {
      fade
    },
    data(){
      return {
        id: 1,
        list:[],
        url: 'selectCont',
        pagenum: 1,
        msg:'正在加载',
        loading:false,
        topStatus:'',
        bottomStatus:"",
        wrapperHeight:false,
        loader:false
      }
    },
    created(){
      document.title='已过期合同';
      if (this.id === 1) {
        this.url = 'selectCont'
      } else if (this.id === 2) {
        this.url = 'selectByPay'
      } else if (this.id === 3)  {
        this.url = 'selectContractByCarType'
      }
      getDate.selectCont(this.url,this.pagenum).then(res => {
        console.log(res)
        this.list = res.data.data
      })
    },
    mounted() {
      this.fnSwiper()
    },
    methods:{
      fnBtn(item){
        this.$router.push({path:'/SeeContarct',query:{id:item.id}})
      },
      //上拉加载
      loadMore(){
        this.loading = true;
        this.loader = true;
        setTimeout(() => {
          this.pagenum ++
          getDate.selectCont(this.url,this.pagenum).then(res => {
            console.log(res)
            if(res.data.data.length <= 0) {
              this.msg = '我是有底线的~'
            } else {
              this.msg = '正加载中...'
              this.list = [...this.list,...res.data.data]
              this.loader = false
            }
          }).catch(err => {
            this.loader = false
          })
        },2000)
        this.loading = false;
      },

      handleTopChange(status) {
        console.log(status);
        this.topStatus = status;
      },
      handleBottomChange(status) {
        console.log('handleBottomChange ', status);
        this.bottomStatus = status;
      },
      fnSwiper(){
        new Swiper('.swiper-container',{
          loop:true,
          //前进后退按钮
          nextButton:'.swiper-button-next',
          prevButton:'.swiper-button-prev',
          pagination:{
            //分页器
            "el":'.swiper-pagination'
          },
          autoplay:true
        })
      },
      pitch (id) {
        if (this.id === id) {
          return false
        } else {
          this.id = id
          this.pagenum = 1
          if (this.id === 1) {
            this.url = 'selectCont'
          } else if (this.id === 2) {
            this.url = 'selectByPay'
          } else if (this.id === 3)  {
            this.url = 'selectContractByCarType'
          }
          getDate.selectContSucc(this.url,this.pagenum).then(res => {
            console.log(res)
            this.list = res.data.data
          })
        }
      }
    },

  }
</script>

<style scoped lang="scss">
  .box_sign{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  .is-fixed{
    width: 100%;
    height:6.38rem;
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
  }
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
  .swiper-container{
    width: 100%;
    .swiper-wrapper{
      width: 100%;
      .swiper-slide{
        width: 100%;
        img{
          width: 100%;
          height: 4.5rem;
        }
      }
    }
  }

  .allcontract{
    width: 100%;
    height: 0.8rem;
    line-height: 0.8rem;
  }
  .allcontract>ul{
    display: flex;
    text-align: center;
  }
  .allcontract>ul>li{
    flex: 1;
    font-size: 16px;
    text-align: center;
    color: #009688;
  }
  .ys{
    border-bottom:2px solid red;
  }
  .content{
    position: absolute;
    width: 100%;
    height: calc(100% - 6.5rem);
    overflow: auto;
    margin-top: 6.5rem;
  }
  .card{
    width: 100%;
    margin-top: 0.1rem;
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
    flex: 3;
    margin: 0;
    margin-top: 0.2rem;
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
