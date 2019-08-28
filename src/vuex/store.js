import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
// 创建基本状态
const state = {
  userobj: {},
  ustatus: 0
};
// 创建改变状态的方法
const mutations = {
  Userobj(state, obj) {
   if (obj){
     state.userobj = obj
   } else {
     state.userobj = {}
   }
},
  // key 1保存 0未保存
userstatus (state, key) {
    console.log(key)
    state.ustatus = key
}
};
// 创建驱动actions可以使得mutations得以启动
const actions = {

};

export default new Vuex.Store({
  state,
  mutations,
  actions
})
