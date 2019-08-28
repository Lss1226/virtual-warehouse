<template>
  <div class="login">
    <div class="img">
      <img src="http://localhost/ezuapp/image/t1.jpg" alt="">
      <p>易族科技</p>
    </div>
    <div class="input">
      <div class="userName">
        <i class="fa fa-user-o" aria-hidden="true"></i>
        <input id="userPhone" type="text" placeholder="请输入手机号" maxlength="11" v-model="userPhone">
      </div>
      <div class="passWord">
        <i class="fa fa-id-card-o" aria-hidden="true"></i>
        <input id="passWord" type="password" placeholder="请输入密码" ref="pass" v-model="passWord">
      </div>
    </div>
    <div class="login-btn">
      <button type="submit" id="loginBtn" @click="fnBtn">登录</button>
    </div>
    <div ref="Verification" class="Verification" v-show="iNso">
    </div>
  </div>
</template>

<script>
  import getDate from '../../getDate/getDate';
  import Axios from 'axios';
  export default {
    data() {
      return {
        userPhone: '',
        passWord: '',
        iNso: false,
        list:[]
      }
    },
    created() {
      document.title = '登录';
    },
    methods: {
      Public() {
        setTimeout(() => {
          this.iNso = false
        }, 1000)
      },
      fnBtn() {
        let data = {usernameOfphone: this.userPhone, password: this.passWord};
        if (this.userPhone == '') {
          this.iNso = true;
          this.$refs.Verification.innerHTML = '请输入手机号';
          this.Public();
        } else if (this.passWord == '') {
          this.iNso = true;
          this.$refs.Verification.innerHTML = '请输入密码';
          this.Public();
        } else if (!(/^1[3|4|5|8|7][0-9]\d{4,8}$/.test(this.userPhone))) {
          this.iNso = true;
          this.$refs.Verification.innerHTML = '手机号码格式有误';
          this.Public();
        } else if (this.passWord.length < 6) {
          this.iNso = true;
          this.$refs.Verification.innerHTML = '密码不能少于六位';
          this.Public();
        }else{
          // $.ajax({
          //   url: 'http://192.168.1.107/ezapp/login2',
          //   // type: 'POST',
          //   dataType: 'json',
          //   data: data,
          //   success:(res)=>{
          //     if (res.data=='当前用户不存在！！！'){
          //       this.iNso = true;
          //       this.$refs.Verification.innerHTML = '当前用户不存在!!!';
          //       this.Public();
          //     }else if(res.code==200){
          //       console.log(res.data);
          //       this.list=res.data;
          //       // console.log(this.list);
          //       window.localStorage.setItem('list', JSON.stringify(this.list));
          //       this.$router.push({path:'/mine'})
          //     }
          //   }
          // })
          getDate.Login(this.userPhone,this.passWord).then((res)=>{
            console.log(res);
            if (res.code==500){
              this.iNso = true;
              this.$refs.Verification.innerHTML = '用户不存在！';
              // this.router.push({path:'/'});
              this.Public();
            }else if(res.code==200){
              window.localStorage.setItem('list', JSON.stringify(res.data));
              this.$router.push({path:'/mine'})
            }
          });
        }
      }
    },
    mounted() {},

  }
</script>

<style scoped >
  .login {
    font-size: 0.3rem;
  }

  .img {
    text-align: center;
    padding: 1.5rem;
  }

  .img > img {
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    margin: auto;
  }

  .img > p:nth-child(2) {
    font-size: 0.3rem;
    padding: 0.2rem;
  }

  .input {
    padding-left: 0.76rem;
    position: relative;
    bottom: 0.8rem;
  }

  .userName, .passWord {
    padding: 0.2rem;
    border-bottom: 1px solid #f5f5f5;
    width: 80%;
  }

  #userPhone {
    margin-left: 0.1rem;
  }

  #userPhone, #passWord {
    width: 4rem;
    height: 0.6rem;
    outline: none;
    border: solid 1px white;
  }

  .login-btn {
    text-align: center;
    padding-top: 2rem;
  }

  .login-btn button {
    margin: auto;
    width: 2rem;
    height: 0.9rem;
    border-radius: 50px;
    background-color: skyblue;
    border: solid 1px skyblue;
    color: white;
    outline: none;
  }

  .Verification {
    position: fixed;
    top: 6.2rem;
    left: 2rem;
    width: 40%;
    height: 0.8rem;
    background: #000;
    color: white;
    border-radius: 8px;
    text-align: center;
    line-height: 0.8rem;
    opacity: 0.8;

  }
</style>
