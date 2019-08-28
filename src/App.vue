<template>
  <div id="app">
    <!--<div id="Loading" v-show="iNos">-->
      <!--<div id="dong" class="loader-inner ball-beat">-->
        <!--<div></div>-->
        <!--<div></div>-->
        <!--<div></div>-->
      <!--</div>-->
    <!--</div>-->
    <router-view/>
  </div>
</template>

<script>
  import Axios from 'axios'
export default {
  data(){
    return{
      iNos:true
    }
  },
  created(){
    Axios.interceptors.response.use((response)=>{
      this.iNos=false;
      return response
    },error=>{
      return Promise.reject(error)
    });
    Axios.interceptors.request.use((config)=>{
      this.iNos=true;
      return config
    },error=>{
      return Promise.reject(error)
    })
  }
}
</script>

<style>
#app,body,div,button,div,ul,ol,li,p,h1,h2,h3,h4,h5,h6,span,footer,header,i,dl,dd,dt,select,option{
  margin: 0;
  padding: 0;
}
button,input{
  outline: none;
}
ul,ol{
  list-style: none;
}
a{
  text-decoration: none;
  color: black;
}
#Loading {
  top:50%;
  left:50%;
  position: absolute;
  -webkit-transform: translateY(-50%) translateX(-50%);
  transform: translateY(-50%) translateX(-50%);
  z-index:100;
}
@-webkit-keyframes ball-beat {
  50% {
    opacity: 0.2;
    -webkit-transform: scale(0.75);
    transform: scale(0.75); }

  100% {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1); } }

@keyframes ball-beat {
  50% {
    opacity: 0.2;
    -webkit-transform: scale(0.75);
    transform: scale(0.75); }

  100% {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1); } }

.ball-beat > div {
  background-color: #279fcf;
  width: 0.3rem;
  height: 0.3rem;
  border-radius: 100% !important;
  margin: 2px;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  display: inline-block;
  -webkit-animation: ball-beat 0.7s 0s infinite linear;
  animation: ball-beat 0.7s 0s infinite linear; }
.ball-beat > div:nth-child(2n-1) {
  -webkit-animation-delay: 0.35s !important;
  animation-delay: 0.35s !important; }
</style>
