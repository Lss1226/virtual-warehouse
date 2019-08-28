<template>
    <div class="feedback">
      <header>
        <a href="javascript:history.go(-1)">&lt</a>
        意见反馈
      </header>
      <div class="wrap">
        <div class="feedback">
          <div class="layui-input-block">
            <select name="interest" lay-filter="aihao">
              <option value="">请选择反馈类型</option>
              <option value="0">系统功能</option>
              <option value="1">修改建议</option>
              <option value="2">投诉举报</option>
              <option value="3">其他反馈</option>
            </select>
          </div>
          <textarea  class="layui-textarea"  v-model="txt" id="feedackContent" maxlength="140" placeholder="请写下您对易族科技系统的感受，我们将认真听取您的意见，努力提供更优质的服务！"></textarea>
          <div class="submit-btn">
            <button @click="fnBtn">提交</button>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import getDate from '../../../getDate/getDate';
  import { MessageBox } from 'mint-ui'
	export default {
	  data(){
	    return{
	        txt:''
      }
    },
		created(){
		  document.title='意见反馈'
    },
    methods:{
	    fnBtn(){
        getDate.addSaveFeed(this.txt).then((res)=>{
          if (res.data=='0'){
             MessageBox.confirm('',{
               title:'提示',
               confirmButtonText:'确定',
               concelButtonText:'取消',
               message: '意见反馈成功',
             }).then(()=>{
               this.$router.push({path:'/mine'})
             });
          } else if(res.data=='1'){
            MessageBox.confirm('',{
              title:'提示',
              confirmButtonText:'确定',
              concelButtonText:'取消',
              message: '反馈信息不能为空!',
            });
          }
        })
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
    line-height: 1.2rem;
    position: relative;
    font-size:16px;
  }
  header>a{
    position: absolute;
    left: 0.4rem;
    top: 0rem;
    font-size: 0.5rem;
    text-decoration: none;
    color: seagreen;
  }
  header>span{
    font-size: 0.4rem;
  }
  .wrap{
    width: 100%;
    outline:none;

  }
  select,option{
    outline: none;
  }
  .layui-input-block{
    width: 100%;
  }
  .layui-input-block select{
    width: 90%;
    height: 0.7rem;
    font-size: 0.3rem;
    margin-left: 5%;
    /*color: #ccc;*/
    /*border: #f5f5f5 solid 1px;*/
  }
  .layui-textarea{
    width: 88%;
    height: 3rem;
    margin-left: 5%;
    margin-top: 0.5rem;
    outline: none;
    /*color: #ccc;*/
    /*border: #f5f5f5 solid 1px;*/
  }
  .submit-btn{
    width: 100%;
  }
  .submit-btn button{
    margin-left: 35%;
    background: lightseagreen;
    width: 25%;
    height: 0.6rem;
    border: solid 1px lightseagreen;
    border-radius: 20px;
    color: white;
  }
</style>
