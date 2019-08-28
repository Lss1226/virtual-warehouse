<template>
  <div class="potentialList">
    <header>
      <ul>
        <li><a href="javascript:history.go(-1)">&lt</a></li>
        <li>
          <i class="fa fa-search" aria-hidden="true"></i>
          <input type="text" v-model="search">
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
        infinite-scroll-immediate-check="false">
        <li v-for="(item,index) in list" :key="index">
          <div>
            <p>
              <span style="font-weight: 500;font-size: 0.28rem;color: black">{{item.name}}</span>
              <span style="font-weight: 500;font-size: 0.28rem;color: black">{{item.phoneNumber}}</span>
              <span style="display: block">{{item.address}}</span>
            </p>
            <p>
              <a :href="'tel:'+item.phoneNumber">
              <button>拨打电话</button>
              </a>
              <button style="background: #FF9933;border: solid 1px #FF9933" @click="fnAdd(item)">添加预约</button>
            </p>
          </div>
          <div>
            <button @click="fnRecord(item)">维护记录</button>
            <div>
                       <span @click="fnEdit(item.id)">
                           <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                            <span>编辑</span>
                       </span>
              <span style="margin-left: 0.5rem" @click="fnDel(item,index)">
                            <i class="fa fa-trash-o" aria-hidden="true"></i>
                              <span>释放</span>
                      </span>
            </div>
          </div>
        </li>
        <div class="ts" v-if="loader">{{msg}}</div>
      </ul>
    </div>
  </div>
</template>

<script>
  import { MessageBox } from 'mint-ui'
  import Axios from 'axios';
  import getDate from '../../getDate/getDate';
  export default {
    data() {
      return {
        list: [],
        search:'',
        iNos:false,
        obj:{},
        i:'',
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
      document.title='潜客列表';
      Axios.post(`http://${this.gloBaL}/ezapp/queryCustomers`,`startPage=${this.pagenum}`).then((res)=>{//潜客列表
        console.log(res.data);
        console.log(this.gloBaL) ;
        this.list=res.data.data;
      });
    },
    // beforeRouteEnter:(to,from,next)=>{
    //   next((vm) => {
    //     // var data=vm.$store.commit('Userobj')
    //     // if(data===""||data===undefined||data===null){
    //     //   next('/login');
    //     // }else{
    //     //   next(true);
    //     // }
    //     console.log(vm.$store.state.ustatus)
    //     if (vm.$store.state.ustatus === 1) [
    //       vm.$store.commit('Userobj')
    //     ]
    //   })
    // },
    mounted() {},
    methods:{
      loadMore() {
        console.log(1)
        this.loading = true;
        this.loader = true
        setTimeout(() => {
          this.pagenum ++
          Axios.post(`http://${this.gloBaL}/ezapp/queryCustomers`,`startPage=${this.pagenum}`).then((res)=>{//潜客列表
            if (res.data.data.length <= 0 ) {
              this.msg = '我是有底线的~'
              return false
            } else {
              this.msg = '正在加载'
              this.loader = false
              this.list = [...this.list, ...res.data.data]
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
      fnSearch(){
        Axios.post(`http://${this.gloBaL}/ezapp/queryCustomers`,`name=${this.search}&startPage=${this.pagenum}`).then((res)=>{//搜索接口
          this.list=res.data.data;
        })
      },
      fnEdit(id){

        this.$router.push({
          path: '/editPotential',
          query: {
            id: id
          }
        })
      },
      fnAdd(item){
        console.log(item);
        this.$router.push({path:'/addReservationView',query:{id:item.id,name:item.name}})
      },
      fnRecord(item){
        this.$router.push({path:'/record',query:{id:item.id}})
      },
      fnDel(item,index){
        MessageBox.confirm('',{
          title:'提示',
          confirmButtonText:'确定',
          concelButtonText:'取消',
          message: '确定要释放！',
        }).then(()=>{
          getDate.release(item.id).then((res)=>{//潜客列表释放
            this.list.splice(index,1);
            console.log(res.data);
          });
        });

      },
    }
  }
</script>

<style scoped>
  .potentialList{
    width: 100%;
    height: 100%;
  }
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

  .content {
    font-size: 0.3rem;
    position: absolute;
    top: 1.2rem;
    bottom: 1.2rem;
    left: 0;
    right: 0;
    overflow: auto;
  }
  .content ul {
    /*margin-bottom: 1.2rem;*/
  }

  .content ul li {
    border-bottom: 0.2rem solid #f5f5f5;
  }

  .content ul li:last-child{
    border-bottom: white 1px solid;
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
    bottom: 0.55rem;
    right: 0.5rem;
  }

  .content ul li div:nth-child(1) p:nth-child(1) span {
    padding: 0.1rem;
    color: #999999;
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
    font-size: 0.2rem;
    padding: 0.15rem;
    margin-top: 0.1rem;
    position: relative;
  }

  .content ul li div:nth-child(2) button {
    font-size: 0.25rem;
    width: 1.5rem;
    height: 0.6rem;
    outline: none;
    background: #1ABC9C;
    border: solid 1px #1ABC9C;
    border-radius: 3px;
    color: white;
    margin-left: 0.25rem;

  }

  .content ul li div:nth-child(2) span {
    color: silver;
    font-size: 0.18rem;
  }

  .content ul li div:nth-child(2) span i {
    color: silver;
    font-size: 0.3rem;
  }

  .content ul li div:nth-child(2) div {
    display: inline-block;
    position: absolute;
    right: 0.6rem;
  }

  .ts{
    width: 100%;
    padding: 0.2rem;
    text-align: center;
    font-size: 16px;
    color: #999999;
  }
</style>
