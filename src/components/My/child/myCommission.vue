<template>
  <div class="myCommission">
    <header>
      <a href="javascript:history.go(-1)">&lt</a>
      <span>我的提成</span>
    </header>
    <div class="txt">
        <ul>
          <li>
            <p>25人</p>
            <div>本月潜客</div>
          </li>
          <li>
            <p>5人</p>
            <div>本月成单</div>
          </li>
          <li>
            <p>15000.00</p>
            <div>本月成单金额</div>
          </li>
        </ul>
    </div>
    <div class="ticheng">
        <ul>
            <li>
              <span>当前提成比例:</span>
              <span>10%</span>
            </li>
            <li>
              <span>我的预期提成:</span>
              <span>1500.00</span><a>元</a>
            </li>
            <li>提成明细</li>
        </ul>
    </div>
    <div class="leix">
        <ul>
           <li><span>类型</span></li>
           <li><span>收益</span></li>
           <li><span>时间</span></li>
        </ul>
    </div>
    <div class="leix_data">
      <ul>
      <li><span>啊实打实的</span></li>
      <li><span>+500</span></li>
      <li><span>2019-07-22</span></li>
    </ul>
    </div>
  </div>
</template>

<script>
  export default {
    created() {
      document.title = '我的提成';
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
    font-size: 0.4rem;
  }
  .txt{
    width: 100%;
  }
  .txt ul{
    text-align: center;
    width: 100%;
    font-size: 0.25rem;
    display: flex;
    border-bottom: 0.2rem #f5f5f5 solid;
  }
  .txt ul li{
    width: 33%;
    flex: 2;
    padding: 0.3rem;
  }
  .txt ul li div{
    padding-top: 0.5rem;
  }
  .txt ul li p{
    color: #f19736;
  }
  .ticheng{
    font-size: 0.3rem;
    width: 100%;
  }
  .ticheng ul li{
    padding: 0.25rem;
  }
  .leix{
    width: 100%;
    font-size: 0.25rem;
    text-align: center;

  }
  .leix ul{
    display: flex;
    width: 90%;
    margin-left: 5%;
    border-bottom: 1px #f5f5f5 solid;
  }
  .leix ul li{
    flex: 1;
    padding: 0.1rem;
  }
  .leix_data{
    width: 100%;
    font-size: 0.25rem;
    text-align: center;

  }
  .leix_data ul{
    display: flex;
    width: 89%;
    margin-left: 4%;
    border-bottom: 1px #f5f5f5 solid;
    padding: 0.1rem;
  }
  .leix_data ul li{
    flex: 1;
    padding: 0.1rem;
  }
</style>
