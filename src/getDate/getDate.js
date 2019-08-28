import Axios from 'axios';
// var gloBaL = '192.168.43.94';
var gloBaL = '192.168.1.101';
const getdata = {
  Login(userPhone, passWord) {    //登录接口
    return new Promise((resolve, reject) => {
      Axios.post(`http://${gloBaL}/ezapp/login2`, `usernameOfphone=${userPhone}&password=${passWord}`).then((res) => {
        return resolve(res.data)
      })
    })
  },
  addCustomer(name, phone,remarks,interest,sex,address,addingAddress) {//潜客列表添加接口
    return new Promise((resolve, reject) => {
      Axios.post(`http://${gloBaL}/ezapp/addCustomer2`, `name=${name}&phone=${phone}&remarks=${remarks}&interest=${interest}&sex=${sex}&address=${address}&=${addingAddress}`).then((res) => {
        return resolve(res)
      })
    })
  },
  addReservationView(id) {//潜客列表添加回显
    return new Promise((resolve, reject) => {
      Axios.post(`http://${gloBaL}/ezapp/addReservationView2`, `id=${id}}`).then((res) => {
        return resolve(res)
      })
    })
  },
  addReservation(name, phone, resTime,sex) {//潜客列表保存预约
    console.log(sex);
    return new Promise((resolve, reject) => {
      Axios.post(`http://${gloBaL}/ezapp/addReservation2`, `name=${name}&phone=${phone}&resTime=${resTime}&sex=${sex}`).then((res) => {
        return resolve(res)
      })
    });
  },
  customerInfoEditing(id) {//潜客列表编辑回显
    return new Promise((resolve, reject) => {
      Axios.post(`http://${gloBaL}/ezapp/customerInfoEditing2`, `id=${id}`).then((res) => {
        return resolve(res)
      })
    })
  },
  editCustomer(id, name, phone, remarks, interest, Male_feMale) {//潜客列表编辑保存
    return new Promise((resolve, reject) => {
      Axios.post(`http://${gloBaL}/ezapp/editCustomer2`, `id=${id}&name=${name}&phone=${phone}&remarks=${remarks}&interest=${interest}&sex=${Male_feMale}`).then((res) => {
        return resolve(res)
      })
    })
  },
  release(id) {//潜客列表释放
    return new Promise((resolve, reject) => {
      Axios.post(`http://${gloBaL}/ezapp/release`, `id=${id}`).then((res) => {
        return resolve(res)
      })
    })
  },
  memberList(id) {//会员列表接口
    return new Promise((resolve, reject) => {
      // console.log(id);
      Axios.post(`http://${gloBaL}/ezapp/memberList`, `page=${id}`).then((res) => {
        return resolve(res.data)
      })
    })
  },
  memberView(id) {//会员列表会员详情
    return new Promise((resolve, reject) => {
      Axios.post(`http://${gloBaL}/ezapp/memberView`, `id=${id}`).then((res) => {
        return resolve(res)
      })
    })
  },
  selectMemberByMsg(id) {//会员列表个人维护
    return new Promise((resolve, reject) => {
      Axios.post(`http://${gloBaL}/ezapp/selectMemberByMsg`, `id=${id}`).then((res) => {
        return resolve(res)
      })
    })
  },
  selectMemberByRecord(id) {//会员维护列表接口
    return new Promise((resolve, reject) => {
      Axios.post(`http://${gloBaL}/ezapp/selectMemberByRecord`, `id=${id}`).then((res) => {
        return resolve(res)
      })
    })
  },
  getIndexEmplyeeMessage() {//我的
    return new Promise((resolve, reject) => {
      Axios.get(`http://${gloBaL}/ezapp/index/getIndexEmplyeeMessage`).then((res) => {
        return resolve(res)
      })
    })
  },
  checkNickname(str) {//修改昵称
    return new Promise((resolve, reject) => {
      Axios.post(`http://${gloBaL}/ezapp//index/checkNickname`, `nickname=${str}`).then((res) => {
        return resolve(res)
      })
    })
  },
  saveUserMessage(nickname, sex, birthday, phoneNumber, file) {//个人中心保存
    return new Promise((resolve, reject) => {
      Axios.post(`http://${gloBaL}/ezapp//index/saveUserMessage`, `nickname=${nickname}&sex=${sex}&birthday=${birthday}&phoneNumber=${phoneNumber}&file=${file}`).then((res) => {
        return resolve(res)
      })
    })
  },
  todayAppointmentList() {//今日预约列表
    return new Promise((resolve, reject) => {
      Axios.post(`http://${gloBaL}/ezapp//todayAppointmentList`, `startPage=${1}`).then((res) => {
        return resolve(res)
      })
    })
  },
  fnSearch(name) {
    return new Promise((resolve, reject) => {//今日预约列表搜索
      Axios.post(`http://${gloBaL}/ezapp//todayAppointmentList`, `name=${name}&startPage=${1}`).then((res) => {
        return resolve(res)
      })
    })
  },
  changeAppointmentR(id) {//客户改约回显
    return new Promise((resolve, reject) => {
      Axios.post(`http://${gloBaL}/ezapp/changeAppointmentR`, `id=${id}`).then((res) => {
        return resolve(res)
      })
    })
  },
  saveAppointmentInfo(id, resTime, remarks) {//保存客户改约
    return new Promise((resolve, reject) => {
      Axios.post(`http://${gloBaL}/ezapp/saveAppointmentInfo`, `resId=${id}&resTime=${resTime}&remarks=${remarks}`).then((res) => {
        return resolve(res)
      })
    })
  },
  cancelAppointment(id) {//取消客户预约
    return new Promise((resolve, reject) => {
      Axios.post(`http://${gloBaL}/ezapp/cancelAppointment`, `resId=${id}`).then((res) => {
        return resolve(res)
      })
    })
  },
  getTeamMessage() {//同组成员
    return new Promise((resolve, reject) => {
      Axios.get(`http://${gloBaL}/ezapp/index/getTeamMessage`).then((res) => {
        return resolve(res)
      })
    })
  },
  getTargetById() {
    return new Promise((resolve, reject) => {//我的任务
      Axios.get(`http://${gloBaL}/ezapp/index/getTargetById`).then((res) => {
        return resolve(res)
      })
    })
  },
  getContarctById() {
    return new Promise((resolve, reject) => {//我的合同列表
      Axios.get(`http://${gloBaL}/ezapp/index/getContarctById`).then((res) => {
        return resolve(res)
      })
    })
  },
  getContarctMessageById(id) {
    return new Promise((resolve, reject) => {//我的合同列表
      Axios.get(`http://${gloBaL}/ezapp/index/getContarctMessageById?id=${id}`).then((res) => {
        return resolve(res)
      })
    })
  },
  selectContSucc(url, page) {  //已签约
    return new Promise((resolve, reject) => {
      Axios.post(`http://${gloBaL}/ezapp/${url}`,`startPage=${page}`).then((res) => {
        return resolve(res)
      })
    })
  },
  getUnsignedContarctById() {  //待签约
    return new Promise((resolve, reject) => {
      Axios.get(`http://${gloBaL}/ezapp/index/getUnsignedContarctById`).then((res) => {
        return resolve(res)
      })
    })
  },
  getUnsignContarctMessageById(id) {
    return new Promise((resolve, reject) => {
      Axios.get(`http://${gloBaL}/ezapp/index/getUnsignContarctMessageById?id=${id}`).then((res)=>{
        return resolve(res)
      })
    })
  },
  selectContByDate(url, page) {  //即将过期合同
    return new Promise((resolve, reject) => {
      Axios.post(`http://${gloBaL}/ezapp/${url}`,`startPage=${page}`).then((res) => {
        return resolve(res)
      })
    })
  },
  selectCont(url, page) {  //已过期合同
    return new Promise((resolve, reject) => {
      Axios.post(`http://${gloBaL}/ezapp/${url}`,`startPage=${page}`).then((res) => {
        return resolve(res)
      })
    })
  },
  addSaveFeed(feedMsg) {//意见反馈
    return new Promise((resolve, reject) => {
      Axios.post(`http://${gloBaL}/ezapp/feed/addSaveFeed`, `feedMsg=${feedMsg}`).then((res) => {
        return resolve(res)
      })
    })
  }

};
export default getdata
