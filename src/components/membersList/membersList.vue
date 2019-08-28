<template>
  <div class="potentialList">
    <header>
      <ul>
        <li>&lt</li>
        <li>
          <i class="fa fa-search" aria-hidden="true"></i>
          <input type="text"  v-model="name">
        </li>
        <li @click="fnSearch">
          <span>搜索</span>
        </li>
      </ul>
    </header>
    <div class="content">
      <ul
        v-infinite-scroll="loadMore"
        :infinite-scroll-disabled="loading"
        :infinite-scroll-distance="20"
        infinite-scroll-immediate-check="false"
      >
        <li v-for="(item,index) in list" :key="index">
          <div>
            <p>
              <span style="font-size: 0.28rem">{{item.name}}</span>
              <span style="font-size: 0.28rem">{{item.phone}}</span>
              <span style="display: block">{{item.address}}</span>
            </p>
            <p>
              <a :href="'tel:'+item.phone">
                <button>拨打电话</button>
              </a>
              <button style="background: #FF9933;border: solid 1px #FF9933" @click="fnBtn(item)">会员详情</button>
            </p>
          </div>
          <div>
            <span style="margin-left: 0.35rem;color:#FF6600">会员有效期至:</span>
            <span style="color:#FF6600">{{item.cpm}}</span>
            <button @click="fnSeeMember(item)">维护记录</button>
          </div>
        </li>
        <div class="ts" v-if="loader">{{msg}}</div>
      </ul>
    </div>

  </div>
</template>

<script>
  import Axios from 'axios';
  import getDate from '../../getDate/getDate';
  export default {
    data() {
      return {
        list: [],
        // page:1,
        name:"",
        msg: '正在加载',
        pagenum: 1,
        loading: false,
        topStatus: '',
        bottomStatus: '',
        wrapperHeight: 0,
        allLoaded: false,
        loader: false
      }
    },
    created() {
      document.title='会员';
      getDate.memberList(this.pagenum).then((res)=>{//会员列表
        console.log(res.list.length);
        this.list=res.list;
      });
    },
    mounted() {
      Axios.get(`http://${this.gloBaL}/ezapp/index/getIndexEmplyeeMessage`).then((res)=>{
        console.log(res.data);
      })
    },
    methods:{
      //上拉加载
      loadMore() {
        this.loading = true;
        this.loader = true;
        setTimeout(() => {
          this.pagenum ++;
          Axios.post(`http://${this.gloBaL}/ezapp/memberList`, `page=${this.pagenum}`).then((res)=>{//会员列表
            if (res.data.list.length<= 0 ) {
              this.msg = '我是有底线的~';
              return false
            } else {
              this.msg = '正在加载';
              this.loader = false;
              this.list = [...this.list, ...res.data.list]
            }
          })
        },2000);
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
      fnBtn(item){
        console.log(item);
        this.$router.push({path:'/membershipDetails',query:{id:item.membershipId}})
      },
      fnSearch(){
        Axios.post(`http://${this.gloBaL}/ezapp/memberList`,`name=${this.name}&page=${this.pagenum}`).then((res)=>{//会员搜索接口
          console.log(res.data);
          this.list=res.data.list;
        })
      },
      fnSeeMember(item){
        this.$router.push({path:'/seeMember',query:{id:item.membershipId}})
      }
    }
  }
</script>

<style scoped>
  ul {
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
    padding-left: 1rem;
  }

  header ul li:nth-child(3) {
    color: #24BFA0;
    flex: 2;
  }

  .content {
    margin-top: 1.2rem;
    font-size: 0.3rem;
    width: 100%;
  }
  .content ul {
    margin-bottom: 1.2rem;
  }
  .content ul li {
    border-bottom: 0.2rem solid #f5f5f5;
  }

  .content ul li div:nth-child(1) {
    font-size: 0.2rem;
    padding: 0.4rem;
    border-bottom: 1px #f5f5f5 solid;
    position: relative;
  }

  .content ul li div:nth-child(1) p {
    display: inline-block;
  }

  .content ul li div:nth-child(1) p:nth-child(2) {
    position: absolute;
    /*bottom: 0.55rem;*/
    right: 0.5rem;
  }

  .content ul li div:nth-child(1) p:nth-child(1) span {
    padding: 0.1rem;
    color: #999999;
    font-size: 0.2rem;
  }

  .content ul li div:nth-child(1) p:nth-child(1) span:nth-child(1) {
    font-weight: 500;
    color: black;
  }

  .content ul li div:nth-child(1) p:nth-child(1) span:nth-child(2) {
    font-weight: 500;
    color: black;

  }

  .content ul li div:nth-child(1) p:nth-child(2) button {
    font-size: 0.25rem;
    width: 1.5rem;
    height: 0.6rem;
    outline: none;
    background: #1ABC9C;
    border: solid 1px #1ABC9C;
    border-radius: 3px;
    color: white;
  }

  .content ul li div:nth-child(2) {
    font-size: 0.3rem;
    padding: 0.15rem;
    margin-top: 0.1rem;
    position: relative;

  }
  .content ul li div:nth-child(2) button{
    font-size: 0.25rem;
    width: 1.5rem;
    height: 0.6rem;
    outline: none;
    background: #1ABC9C;
    border: solid 1px #1ABC9C;
    border-radius: 3px;
    color: white;
    margin-left: 1.25rem;
  }
  .ts{
    width: 100%;
    padding: 0.2rem;
    text-align: center;
    font-size: 16px;
    color: #999999;
  }

</style>
