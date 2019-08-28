<template>
  <div class="myMission">
    <header>
      <a href="javascript:history.go(-1)">&lt</a>
      <span>我的任务</span>
    </header>
    <div class="Missopn">
      <ul>
        <li>
          <i class="fa fa-bar-chart" aria-hidden="true"></i>
          <span>KPl指标完成情况</span>
        </li>
        <li>
          <div style="margin-top: 0.2rem"><i class="fa fa-jpy" aria-hidden="true"></i></div>
          <div style="margin-left: 0.2rem">
              <span>目标本月完成签约{{target.target}}元</span><br>
              <span>截止目前完成<a>{{order.amount}}</a>元，完成比例<a>0</a>%！</span>
          </div>
        </li>
      </ul>
    </div>
  </div>

</template>

<script>
  import getDate from '../../../getDate/getDate'
  export default {
    data(){
      return{
        order:{},
        target:{}
      }
    },
    created() {
      document.title = '我的任务';
      getDate.getTargetById().then((res)=>{
        console.log(res.data);
        this.order=res.data.order;
        this.target=res.data.target;
      })
    }
  }
</script>

<style scoped>
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

  .Missopn {
    width: 100%;
  }

  .Missopn ul{
    font-size: 0.3rem;
  }
  .Missopn ul li{
    padding: 0.2rem;
    border-bottom: #f5f5f5 1px solid;
  }
  .Missopn ul li:nth-child(1){
    color: silver;
  }
  .Missopn ul li:nth-child(2){
    display: flex;
  }
  .Missopn ul li:nth-child(2) div i{
   color: green;
  }
</style>
