<template>
<div class="teamMember">
  <header>
    <a href="javascript:history.go(-1)">&lt</a>
    <span>团队成员</span>
  </header>
  <div class="team">
       <div>7人</div>
       <div>小组成员</div>
  </div>
  <div class="team_ul">
      <p>小组成员</p>
  </div>
  <div class="leix">
    <ul>
      <li><span>姓名</span></li>
      <li><span>本月目标</span></li>
      <li><span>完成金额</span></li>
    </ul>
  </div>
  <div class="leix_data">
    <ul v-for="(item,index) in list" :key="index">
      <li>
        <span>{{item.nickname}}</span>
         <button style="display: block;margin-left: 0.5rem" v-if="item.is_groupLeader==1">组长</button>
      </li>
      <li><p>{{item.target}}</p></li>
      <li><p>{{item.amount}}</p></li>
    </ul>
  </div>
</div>
</template>

<script>
  import getDate from '../../../getDate/getDate';
	export default {
	  data(){
	    return{
        list:[]
      }
    },
		created(){
		  document.title='同组成员';
		  getDate.getTeamMessage().then((res)=>{
        console.log(res.data.message);
        this.list=res.data.message;
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
  .teamMember{
    width: 100%;
  }
  .team{
    width: 100%;
    font-size: 0.25rem;
    text-align: center;
    border-bottom: 0.2rem #f5f5f5 solid;
  }
  .team div{
    padding: 0.3rem;
  }
  .team_ul{
    width: 100%;
    font-size: 0.25rem;
  }
  .team_ul p{
    padding: 0.25rem;
  }
  .leix{
    width: 100%;
    font-size: 0.25rem;
    text-align: center;
    font-weight: 600;
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
  .leix_data ul li:nth-child(1){
    font-weight: 600;
  }
  .leix_data ul li:nth-child(1) button{
    width:45%;
    border: solid 1px #f19736;
    background: white;
    color: #f19736;
    border-radius: 3px;
  }
</style>
