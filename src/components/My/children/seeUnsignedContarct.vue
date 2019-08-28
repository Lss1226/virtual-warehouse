<template>
  <div class="seeContarct">
    <header>
      <a href="javascript:history.go(-1)">&lt</a>
      <span>合同详情</span>
    </header>
    <div class="content">
      <div class="ul">
        <ul>
          <li><i class="fa fa-firefox" aria-hidden="true"></i></li>
          <li>
            <div>会员已完成付款</div>
            <div>
              <span>有效期：</span>
              <span>{{obj.card_opening_time}}至</span>
              <span>{{obj.end_time}}</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div  class="dl">
      <dl>
        <dd>
          <div>
            <span>{{obj.name}}</span>
            <span>{{obj.phone}}</span>
          </div>
          <div>
            <i class="fa fa-firefox" aria-hidden="true"></i>
            <span>{{obj.address}}</span>
          </div>
        </dd>
        <dd>
          <div>
            <img src="../../../assets/img/hetong.jpg" alt="">
          </div>
          <div>
            <div>
              <p>
                <span>{{obj.contract_type}}</span>
                <span class="span">x1</span>
              </p>
            </div>
            <div>
              <span style="color:red;font-size: 0.25rem">{{obj.pay_amount}}</span>
            </div>
          </div>
        </dd>
        <dd>
          <div>
            <span>合同信息</span>
          </div>
          <div>
            <span>费用合计：</span>
            <span>{{obj.pay_amount}}</span>
          </div>
        </dd>
      </dl>
    </div>
    <div class="footer">
      <ul>
        <li>
          <span>合同编号：</span>
          <span>{{obj.contract_number}}</span>
        </li>
        <li>
          <span>创建时间：</span>
          <span>{{obj.sign_date}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import getDate from '../../../getDate/getDate'

  export default {
    data() {
      return {
        id: this.$route.query.id,
        obj:{}
      }
    },
    created() {
      document.title = '合同详情';
    },
    mounted() {
      // console.log(this.id);
      getDate.getUnsignContarctMessageById(this.id).then((res) => {
        console.log(res);
        this.obj=res.data.message;
      })
    }
  }
</script>

<style scoped>
  ul{
    list-style: none;
  }
  .seeContarct{
    width: 100%;
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

  .content {
    width: 100%;
    font-size: 0.3rem;
  }

  .ul>ul {
    display: flex;
    padding: 0.4rem;
    background: #1abc9c;
    color: white;
  }

  .ul>ul>li:nth-child(1) i {
    font-size: 0.4rem;
    margin-top: 0.3rem;
  }

  .ul>ul>li:nth-child(2) div {
    padding: 0.1rem;
  }
  .dl{
    width: 100%;
  }
  .dl dl{
    width: 100%;
    font-size: 0.3rem;
  }
  .dl dl dd{
    padding: 0.2rem;
    border-bottom: 0.2rem solid #f5f5f5;
  }
  .dl dl dd:nth-child(1) div{
    padding: 0.1rem;
  }
  .dl dl dd:nth-child(2){
    display: flex;
    padding: 0.25rem;
  }
  .dl dl dd:nth-child(2) div{
    padding: 0.05rem;
  }
  .dl dl dd:nth-child(2) div:nth-child(1) img{
    width: 1.8rem;
    height:0.9rem;
    border-radius: 8px;
  }
  .span{
    margin-left: 2.7rem;
    color: #1abc9c;
  }
  .dl dl dd:nth-child(3){
    padding: 0.25rem;
  }
  .dl dl dd:nth-child(3) div{
    padding: 0.1rem;
    width: 90%;
  }
  .dl dl dd:nth-child(3) div:nth-child(1){
    padding: 0.1rem;
    width: 90%;
    border-bottom: 1.3px solid #f5f5f5;
  }
  .footer{
    width: 100%;
  }
  .footer ul {
    font-size: 0.3rem;
    padding: 0.2rem;
  }
  .footer ul li{
    padding: 0.15rem;
  }
</style>
