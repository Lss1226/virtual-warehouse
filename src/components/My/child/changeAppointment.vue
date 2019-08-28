<template>
  <div class="addReservationView">
    <header>
      <a href="javascript:history.go(-1)">&lt</a>
      <span>客户改约</span>
    </header>
    <div class="content">
      <ul>
        <li>
          <div>
            <span>{{obj.name}}</span>
            <span>{{obj.phone}}</span><br/>
            <span><i class="fa fa-user-o" aria-hidden="true"></i></span>
          </div>
          <div>
            <span>预约时间:</span>
            <div class="time" @click="this.startTime" ref="time">请选择时间</div>
          </div>
        </li>
        <li>
          <span>备注:</span>
        </li>
        <li>
          <textarea class="inp-Verification" id="remark"  name="remark" reg="\S" v-model="remark" data-error="请输入正确的其它补充（0-140个字符）" maxlength="140" style="height: 3.4rem;width: 90%;margin-left: 4%"></textarea>
        </li>
        <li>
          <button class="btn" @click="fnBtn">保存</button>
        </li>
      </ul>
    </div>
    <div>
      <!--时间插件-->
      <mt-datetime-picker
        ref="pickerStartTime"
        type="datetime"
        v-model="pickerValueStartTime"
        :startDate = "startDate"
        :endDate = "endDate"
        @confirm="this.handleConfirmStartTime">
      </mt-datetime-picker>
    </div>
  </div>
</template>

<script>
  import getDate from '../../../getDate/getDate'
  export default {
    data(){
      return{
        pickerValue:'',
        id:this.$route.query.id,
        obj:{},
        pickerValueStartTime: '',
        remark:'',
        startDate: new Date('2019-08-10'),      //设置开始时间
        endDate: new Date('2030-12-31') ,  //设置结束时间
      }
    },
    created(){
      document.title='客户改约';

    },
    mounted(){
      getDate.changeAppointmentR(this.id).then((res)=>{//客户修改预约回显
        console.log(res.data.data.resInfo);
        this.obj=res.data.data.resInfo;
        this.remark=res.data.data.resInfo.remarks;

      })
    },
    methods: {
      fnBtn(){
        let time=this.$refs.time;
        let resTime=time.innerHTML;
        getDate. saveAppointmentInfo(this.id,resTime,this.remark).then((res)=>{//客户保存预约
          console.log(res.data);
          this.$router.push({path:'/todayAppointment'})
        })
      },
      startTime () {
        this.$refs.pickerStartTime.open()
      },
      handleConfirmStartTime () {
        let time=this.$refs.time;
        time.innerHTML=this.pickerValueStartTime.toLocaleString();
        let arr=time.innerHTML.split(' ');
        let arr1=arr[1];
        let arr2=arr1.split('');
        let arr3=arr2.join('-');
        let arr4=arr2.splice(0,2);
        let arr5=arr[0];
        let arr6=arr2.join('');
        let arr7=arr5+' '+arr6;
        time.innerHTML=arr7
      }
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
    font-size: 0.3rem;
  }
  .content ul{
    width: 100%;
  }
  .content ul li div:nth-child(1){
    padding: 0.3rem;
    border-bottom: 1px solid #f3f4f6;
  }
  .content ul li div:nth-child(1) span{
    padding-left: 0.3rem;
  }
  .content ul li div:nth-child(2){
    padding: 0.3rem;
    border-bottom: 1px solid #f3f4f6;
  }
  .content ul li div:nth-child(2) span{
    padding-left: 0.3rem;
  }
  .content ul li:nth-child(2) {
    background: #f3f4f6;
    padding: 0.3rem;
  }
  .content ul li:nth-child(2) span{
    padding-left: 0.3rem;
  }
  #remark{
    outline: none;
    margin-top: 0.2rem;
  }
  .btn{
    width:70%;
    height: 0.9rem;
    background: #66CC99;
    border: solid 1px #66CC99;
    color: white;
    border-radius: 5px;
    outline: none;
    margin-left: 1rem;
    margin-top: 0.8rem;
  }
  .time{
    width: 40%;
    height: 0.2rem;
    border: solid 1px #f5f5f5;
    display: inline-block;
    line-height: 0.2rem;
    text-align: center;
    font-size: 0.25rem;
    margin-left:1rem;
  }
</style>
