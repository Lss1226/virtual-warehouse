<template>
  <div class="newPotential">
    <header>
      <span>添加新潜客</span>
    </header>
    <div class="allmap" ref="allmap">

    </div>
    <div class="content">
      <ul>
        <li style="border-bottom: 1px solid #E6E6E6;">
          <span>姓名</span>
          <input type="text" class="inp" placeholder="请输入潜客名称"  maxlength="8" v-model="name">
        </li>
        <li style="border-bottom: 1px solid #E6E6E6;">
          <span>手机号</span>
          <input type="text" class="inp" placeholder="请输入手机号" maxlength="11" v-model="phone" style="margin-left: 0.4rem">
        </li>
        <li style="border-bottom: 1px solid #E6E6E6;">
          <span>性别</span>
          <div>
            <span>男士</span><input type="checkbox" id="Male" value="0" v-model="iNos" @change="Male">
            <span>女士</span><input type="checkbox" id="feMale" value="1" v-model="iNin" @click="feMale">
          </div>
        </li>
        <li>
          <span>个人兴趣</span>
          <div id="input">
            <input type="checkbox" value="0"><a>塑性</a>
            <input type="checkbox" value="1"><a>减脂</a>
            <input type="checkbox" value="2"><a>游泳</a>
            <input type="checkbox" value="3"><a>增肌</a>
            <input type="checkbox" value="4"><a>其他</a>
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
  import getDate from '../../getDate/getDate';
  export default {
    data() {
      return {
        iNos: true,
        iNin: false,
        iN:false,
        name:'',
        phone:'',
        obj:[],
        Male_feMale:'',
        remarks:'',
        addingAddress:'',
        address:''
      }
    },
    created() {
      document.title='添加潜客';
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
        let Verification=this.$refs.Verification;
        if (this.name==''){
          Verification.innerHTML='请输入潜客姓名';
          this.iN=true;
          this.Public();
        }else if(this.phone==''){
          Verification.innerHTML='请输入手机号';
          this.iN=true;
          this.Public();
        } else if(!(/^1[3|4|5|8|7][0-9]\d{4,8}$/.test(this.phone))){
          Verification.innerHTML='手机格式错误';
          this.iN=true;
          this.Public();
          return false
        } else{
          let obj={};
          var interest='';
          $("#input>input[type='checkbox']:checked").each(function (data) {
            if (interest == "") {
              interest=$(this).val();
            } else {
              interest = interest + "_" + $(this).val();
            }
          });
          // obj.name=this.name;//姓名
          // obj.phone=this.phone;//手机号
          // obj.sex=this.Male_feMale;//性别
          // obj.interest=interest;//兴趣
          // obj.remarks=this.remarks;//备注
          // obj.address=this.address;//位置
          // obj.addingAddress=this.addingAddress;//经纬度
          // console.log(obj);
          //添加列表接口
          // console.log(this.address);
          // console.log(this.addingAddress,this.address);
          getDate.addCustomer(this.name,this.phone,this.remarks,interest,this.Male_feMale,this.address,this.addingAddress).then((res)=>{//添加潜客
            console.log(res.data);
            this.$router.push({path:'/potentialList'})
          });
        }
      },

    },
    mounted() {
      let Male=document.getElementById('Male').value;
      this.Male_feMale=Male;

      var map = new BMap.Map(this.$refs.allmap);
      var point = new BMap.Point(116.40387397000333,39.91488915704521);
      map.centerAndZoom(point, 12);
      var marker = new BMap.Marker(point) ;
      map.addOverlay(marker)

      var map = new BMap.Map(this.$refs.allmap);
      var point = new BMap.Point(116.341925,39.89538);
      var address_code = '';
      map.centerAndZoom(point, 15);
      map.enableScrollWheelZoom(true);

      var geolocation = new BMap.Geolocation();
      // 开启SDK辅助定位
      var seft=this;
      geolocation.getCurrentPosition(function(r){
        if(this.getStatus() == BMAP_STATUS_SUCCESS){
          // console.log(this);
          var mk = new BMap.Marker(r.point);
          map.addOverlay(mk);
          map.panTo(r.point);
          address_code = r.point.lng+','+r.point.lat;//位置
          console.log('您的位置：'+r.point.lng+','+r.point.lat);
          var point = new BMap.Point(r.point.lng,r.point.lat);
          var gc = new BMap.Geocoder();
          gc.getLocation(point,function(rs){
            var and=rs.point.lng+','+rs.point.lat;//经纬度
            seft.addingAddress=and;
            console.log(seft.addingAddress);
            var addComp = rs.addressComponents;
            // console.log(addComp);
            var site = rs.address;
            seft.address=site;//位置
            console.log(site);
            // console.log(seft.address);
            var label = new BMap.Label(rs.address, { offset: new BMap.Size(20, -10) });
            // console.log(rs.address);//弹出所在地址
            map.removeOverlay(mk.getLabel());//删除之前的label
            mk.setLabel(label);
          });
        }else {
          //alert('failed'+this.getStatus());
        }
      });


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
    text-align: center;
    position: fixed;
    top: 0;
    z-index: 10;
  }

  .allmap {
    width: 100%;
    height: 3rem;
    /*background: red;*/
    margin-top: 1.2rem;
  }

  .content {
    width: 100%;
    font-size: 0.23rem;
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
  .Verification {
    font-size: 0.3rem;
    position: fixed;
    top: 6rem;
    left: 2.6rem;
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
