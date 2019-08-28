<template>
<div class="record">
  <header>
    <a href="javascript:history.go(-1)">&lt</a>
    <span>潜客维护纪录</span>
  </header>
  <div class="content">
        <ul>
            <li>
              <img src="../../../assets/img/touxiang.png" alt="">
            </li>
            <li>
                <div>
                   <span>{{name}}</span>
                   <span>{{phone}}</span>
                </div>
                <div style="color:coral;">
                  <i class="fa fa-smile-o" aria-hidden="true"></i>
                  <span>潜客</span>
                </div>
                <div>
                   <span>添加时间:</span>
                   <span>{{createTime}}</span>
                </div>
            </li>
        </ul>
  </div>
  <div class="maintain">
        <div>维护记录</div>
        <ul v-for="(item,index) in list" :key="index">
          <li>
            <img :src=item.image alt="">
          </li>
          <li>
            <div>
              <span style="color: coral">{{item.nickname}}</span>
              <span>{{item.createTime}}</span>
            </div>
            <div>
              <span>通话记录:</span>
              <span style="color:lawngreen;">15分钟</span>
            </div>
            <div style="margin-top: 0.12rem">
              <span>{{item.maintainMessage}}</span>
            </div>
          </li>
        </ul>
  </div>
  <div class="fexl" v-show="iNso">
     该潜客无维护记录
  </div>
</div>
</template>

<script>
  import Axiso from 'axios'
	export default {
	  data(){
	    return{
        id:this.$route.query.id,
        createTime:'',
        name:'',
        phone:'',
        list:[],
        iNso:false
      }
    },
		created(){
		  document.title='潜客维护纪录';
		  Axiso.post(`http://${this.gloBaL}/ezapp/selectCustomerInfo`,`id=${this.id}`).then((res)=>{
        console.log(res.data.data);
        this.createTime=res.data.data.createTime;
        this.name=res.data.data.name;
        this.phone=res.data.data.phone;
      });
        Axiso.post(`http://${this.gloBaL}/ezapp/selectRecordInfoById`,`id=${this.id}`).then((res)=>{
        console.log(res.data.data);
        this.list=res.data.data;
        if (res.data.data===null) {
          setTimeout(()=>{
            this.iNso=true;
          },500);
          setTimeout(()=>{
            this.iNso=false;
          },1500)
        }else{
          this.iNso=false;
        }
        })
    }
	}
</script>

<style scoped>
  ul{
    list-style: none;
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
  header>span {
    font-size: 0.35rem;
  }
  .content{
    width: 100%;
  }
  .content ul{
      width: 100%;
      margin-top: 0.3rem;
    }
  .content ul li{
    font-size: 0.3rem;
    display: inline-block;
  }
  .content>ul>li>img{
    width: 1.5rem;
    height:1.5rem;
    border-radius: 50%;
  }
  .content>ul>li:nth-child(2) div{
    padding: 0.05rem;
  }
  .maintain{
    width: 100%;
  }
  .maintain>div{
    margin-top: 0.5rem;
    font-size: 0.3rem;
    padding: 0.2rem;
  }
  .maintain ul{
    width: 90%;
    font-size: 0.15rem;
    padding: 0.2rem;
    border: silver 1px solid;
    margin-left: 0.15rem;
    border-radius: 5px;
    margin-top: 0.2rem;
  }
  .maintain ul li{
    display: inline-block;
  }
  .maintain ul li img{
    width:1rem;
    height:1rem;
    border-radius: 50%;
  }
  .maintain ul li:nth-child(2){
    margin-left: 0.2rem;
  }
  .fexl{
    width: 50%;
    height: 0.8rem;
    background: black;
    opacity: 0.7;
    font-size: 0.33rem;
    line-height: 0.8rem;
    text-align: center;
    border-radius: 5px;
    color: white;
    position: fixed;
    top: 50%;
    left: 25%;
  }
</style>
