<template>
<div class="todayAppointment">
  <header>
    <ul>
      <li><a href="javascript:history.go(-1)">&lt</a></li>
      <li>
        <i class="fa fa-search" aria-hidden="true"></i>
        <input type="text" v-model="val">
      </li>
      <li @click="fnSearch">
        <span>搜索</span>
      </li>
    </ul>
  </header>
  <div class="conted">
      <ul>
          <li v-for="(item,index) in list" :key="index">
              <div style="margin-top:0.1rem">
                <span>{{item.name}}</span>
                <span>{{item.phone}}</span>
              </div>
              <div>
                <span><button @click="fnBtn(item)">客户改约</button></span>
                <span><button @click="fnContract(item)" style="background:#FF9933;color: black;border: solid #FF9933 1px">取消预约</button></span>
              </div>
          </li>
      </ul>
  </div>
</div>
</template>

<script>
  import getDate from '../../../getDate/getDate';
  import { MessageBox } from 'mint-ui'
	export default {
	  data(){
	    return{
        list:[],
        val:''
      }
    },
    methods:{
      fnSearch(){
        getDate.fnSearch(this.val).then((res)=>{//今日预约列表搜索
          console.log(res.data.data);
          this.list=res.data.data;
        })
      },
      fnContract(item){
        MessageBox.confirm('',{
          title:'提示',
          confirmButtonText:'确定',
          concelButtonText:'取消',
          message: '确定取消预约？！',
        }).then(()=>{
          getDate.cancelAppointment(item.resId).then((res)=>{//客户取消改约
            console.log(res.data);
            this.$router.go(0)
          })
        });

      },
      fnBtn(item){
        // console.log(item);
        this.$router.push({path:'/changeAppointment',query:{id:item.resId,name:item.name}})
      }

    },
		created(){
		  document.title='今日预约';
    },
    mounted(){
      getDate.todayAppointmentList().then((res)=>{
        if (res.data.data=='null'){
          this.list=[];
          console.log(res.data.data);
        }else{
          console.log(res.data.data);
          this.list=res.data.data;
        }
        console.log(res.data.data);
      })
    }
	}
</script>
<style scoped>
  ul{
    list-style: none;
  }
  header {
    z-index: 10;
    width: 100%;
    height: 1.2rem;
    background: #f5f5f5;
    font-size: 0.3rem;
    line-height: 1.2rem;
    text-align: center;
    position: fixed;
    top: 0px;
  }
  header ul {
    list-style: none;
    display: flex;
  }
  header ul li:nth-child(1) {
    color: #24BFA0;
    flex: 1;
  }
  header ul li:nth-child(1) a{
    color: black;
    text-decoration: none;
  }
  header ul li:nth-child(2) {
    position: relative;
    flex: 6;
  }
  header ul li:nth-child(2) i {
    position: absolute;
    /*color: white;*/
    top: 0.45rem;
    left: 0.65rem;

  }
  header ul li:nth-child(2) input {
    border-radius: 50px;
    background: white;
    border: solid 1px white;
    outline: none;
    padding: 0.1rem;
    padding-left: 0.7rem;
  }
  header ul li:nth-child(3) {
    color: #24BFA0;
    flex: 2;
  }
  .conted{
    width: 100%;
    height: 100%;
    font-size: 0.3rem;
    margin-top: 1.2rem;
  }
  .conted ul li{
    /*width: 98%;*/
    display: flex;
    padding: 0.3rem;
    border-bottom: 0.2rem solid #f5f5f5;
  }
  .conted ul li div:nth-child(1){
    flex: 1.5;
    display: inline-block;
  }
  .conted ul li div:nth-child(2){
    flex:  1
    /*display: inline-block;*/
    /*position: fixed;*/

  }
  button{
    font-size: 0.25rem;
    width: 1.3rem;
    height: 0.6rem;
    outline: none;
    background: #1ABC9C;
    border: solid 1px #1ABC9C;
    border-radius: 3px;
    color: white;

  }

</style>
