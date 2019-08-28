<template>
  <div class="newPotential">
    <header>
      <a  href="javascript:history.go(-1)">&lt</a>
      <span>编辑潜客</span>
    </header>
    <div class="content">
      <ul >
        <li style="border-bottom: 1px solid #E6E6E6;">
          <span>姓名</span>
          <input type="text" class="inp" placeholder="请输入潜客名称" readOnly="true"  maxlength="8" v-model="name">
        </li>
        <li style="border-bottom: 1px solid #E6E6E6;">
          <span>手机号</span>
          <input type="text" class="inp" placeholder="请输入手机号" readOnly="true" maxlength="11" v-model="phone" style="margin-left: 0.4rem">
        </li>
        <li style="border-bottom: 1px solid #E6E6E6;">
          <span>性别</span>
          <div>
            <span>男士</span><input type="checkbox" name='sex' id="Male"   value="0"  v-model="iNos" @change="Male">
            <span>女士</span><input type="checkbox" name='sex' id="feMale" value="1"  v-model="iNin" @click="feMale">
          </div>
        </li>
        <li>
          <span>个人兴趣</span>
          <div id="input">
            <input type="checkbox"  name="interest" value="0"><a>塑性</a>
            <input type="checkbox"  name="interest" value="1"><a>减脂</a>
            <input type="checkbox"  name="interest" value="2"><a>游泳</a>
            <input type="checkbox"  name="interest" value="3"><a>增肌</a>
            <input type="checkbox"  name="interest" value="4"><a>其他</a>
          </div>
        </li>
        <div class="beizu">
          <span>备注</span>
        </div>
        <li>
          <div class="textarea-box">
            <textarea class="inp-Verification" name="otherInfo" reg="\S" data-error="请输入正确的其它补充（0-140个字符）"
                      maxlength="140" id="other-info" v-model="remarks"></textarea>
          </div>
        </li>
        <li>
          <button class="btn" @click="fnBtn">保存</button>
        </li>
      </ul>
    </div>
    <div ref="Verification" class="Verification" v-show="iN"></div>
  </div>

</template>

<script>
  import $ from 'jquery';
  import Axios from 'axios';
  import getDate from '../../../getDate/getDate';
  export default {
    data() {
      return {
        iNos: true,
        iNin: false,
        iN:false,
        name:'',//姓名
        phone:'',//手机号
        Male_feMale:'',//性别
        remarks:'',//备注
        addingAddress:'',//经纬度
        address:'',
        id:'',
      }
    },
    created() {

    },
    methods: {
      Public() {
        setTimeout(() => {
          this.iN = false
        }, 1000)
      },
      Male() {
        let Male = document.getElementById('Male').value;
        this.Male_feMale=Male;
        this.iNin = false;
      },
      feMale() {
        this.iNin = true;
        this.iNos = false;
        let feMale = document.getElementById('feMale').value;
        this.Male_feMale=feMale;
      },
      fnBtn(){
        var interest='';
        $("#input>input[type='checkbox']:checked").each(function (data) {
          if (interest == "") {
            interest=$(this).val();
          } else {
            interest = interest + "_" + $(this).val();
          }
        });
        getDate.editCustomer(this.id,this.name,this.phone,this.remarks,interest,this.Male_feMale).then((res)=>{//潜客列表编辑保存
          console.log(res.data);
          this.$router.push({path:'/potentialList'})
        });

      }

    },
    mounted() {
      let Male=document.getElementById('Male').value;
      this.Male_feMale=Male;
      this.id=this.$route.query.id;
      let id=this.$route.query.id;//获取通过路由传过来的id
      getDate.customerInfoEditing(id).then((res)=>{//潜客编辑回显接口
        this.name=res.data.data[0].name;
        this.phone=res.data.data[0].phone_number;
        this.remarks=res.data.data[0].remarks;
        this.Male_feMale=res.data.data[0].sex;
        if (res.data.data[0].sex==0){
          this.iNos=true;
          this.iNin=false;
        }else if (res.data.data[0].sex==1){
          this.iNos=false;
          this.iNin=true;
        }
        $("input[name='interest']").each(function () {
          var interest_S = (res.data.data[0].interest+"").split("_");
          for(var i=0;i< interest_S.length;i++){
            var interest_ = interest_S[i];
            if ($(this).val() == interest_) {
              $(this).attr("checked", true)
            }
          }
        });
      })
    }
  }
</script>

<style scoped>

  header {
    width: 100%;
    height: 1.2rem;
    background: #f5f5f5;
    font-size: 0.35rem;
    line-height: 1.2rem;
    position: fixed;
    top: 0;
    z-index: 10;
  }
  header span{
    margin-left: 33%;
  }
  header a{
    text-decoration: none;
    color:#66CC99;
    margin-left: 0.35rem;
  }
  .content {
    width: 100%;
    font-size: 0.23rem;
    margin-top: 1.2rem;
  }

  .content ul {
    list-style: none;
  }
  .content ul li{
    width: 87%;
    padding: 0.2rem;
    /*border-bottom: 1px seagreen solid;*/
    margin-left: 0.25rem;

  }
  .content ul li:nth-child(3) div{
    margin-left:1.1rem;
    display: inline-block;
  }
  .content ul li:nth-child(4) div{
    margin-left:0.5rem;
    display: inline-block;
  }
  .content ul li:nth-child(5) {

    background: red;
  }
  input {
    outline: none;
  }
  .textarea-box{
    width: 100%;
  }
  #other-info{
    /*margin-left: 5%;*/
    margin-top: 0.3rem;
    display: block;
    width: 100%;
    height: 1.2rem;
    resize: none;
    font-size: 0.3rem;
    box-sizing: border-box;
    border: 1px solid #E4E8EC;
    outline: none;
  }
  .btn{
    width:85%;
    height: 0.9rem;
    background: #66CC99;
    border: solid 1px #66CC99;
    color: white;
    border-radius: 5px;
    outline: none;
    margin-left: 0.4rem;
    margin-top: 0.3rem;
  }
  .inp{
    padding-left: 0.2rem;
    margin-left: 0.6rem;
    border: solid 1px white;
  }
  .beizu{
    padding: 0.24rem;
    background: #f3f4f6;
  }
  .beizu span{
    margin-left: 0.2rem;
  }

</style>
