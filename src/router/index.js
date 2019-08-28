import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/login/login';
import mine  from '../components/Box/box';
import My from '../components/My/My';
import membersList from '../components/membersList/membersList';
import potentialList from '../components/potentialList/potentialList';
import newPotentialTwo from  '../components/newPotential/newPotentialTwo';
import editPotential from '../components/potentialList/child/editPotential';
import addReservationView from '../components/potentialList/child/addReservationView';
import record from '../components/potentialList/child/record';
import membershipDetails from '../components/membersList/child/membershipDetails';
import seeMember from '../components/membersList/child/seeMember';
import user from '../components/My/child/user';
import changeInformation from '../components/My/child/changeInformation';
import todayAppointment from '../components/My/child/todayAppointment';
import myCommission from '../components/My/child/myCommission';
import teamMember from '../components/My/child/teamMember';
import myMission from '../components/My/child/myMission';
import contractList from '../components/My/child/contractList';
import signedList from '../components/My/children/signedList';
import overdueList from '../components/My/children/overdueList';
import waitSign from '../components/My/children/waitSign';
import willOverdue from '../components/My/children/willOverdue';
import SeeContarct from '../components/My/child/seeContarct';
import changeAppointment from '../components/My/child/changeAppointment';
import feedback from '../components/My/child/feedback';
import seeUnsignedContarct from '../components/My/children/seeUnsignedContarct';
Vue.use(Router);

export default new Router({
  // mode:"history",
  base: '/',
  mode: 'hash',
  // routes: ROUTES,
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/mine',
      name: 'mine',
      component: mine,
      meta: {
        keepAlive: true // 需要被缓存
      },
      children:[
        {
          path: '/',
          name: 'My',
          component:My,
        },
        {
          path:'/membersList',//会员列表
          name:'membersList',
          component:membersList
        },
        {
          path:'/potentialList',//潜客列表
          name:'potentialList',
          component:potentialList
        },
        {
          path:'/newPotentialTwo', //添加新潜客
          name:'newPotentialTwo',
          component:newPotentialTwo
        },
        {
          path:'/editPotential',//编辑潜客
          name:'editPotential',
          component:editPotential
        },
        {
          path:'/record', //维护纪录
          name:'record',
          component:record
        },
        {
          path:'/todayAppointment',//今日预约
          name:'todayAppointment',
          component:todayAppointment
        },
        {
          path:'/changeAppointment',//客户改约
          name:'changeAppointment',
          component:changeAppointment
        },
        {
          path:'/addReservationView',//预约
          name:'addReservationView',
          component:addReservationView
        },
        {
          path:'/membershipDetails', //会员详情
          name:'membershipDetails',
          component:membershipDetails
        },
        {
          path:'/seeMember',//维护记录
          name:'seeMember',
          component:seeMember
        },
        {
          path:'/feedback',//意见反馈
          name:'feedback',
          component:feedback
        },
        {
          path:'/myCommission',
          name:'myCommission',//我的提成
          component:myCommission
        },
        {
          path:'/teamMember',//同组成员
          name:'teamMember',
          component:teamMember
        },
        {
          path:'/myMission',//我的任务
          name:'myMission',
          component:myMission
        },
      ]
    },



    {
      path:'/user',//个人中心
      name:'user',
      component:user
    },
    {
      path:'/changeInformation',//修改信息
      name:'changeInformation',
      component:changeInformation
    },

    {
      path:'/contractList',//我的合同
      name:'contractList',
      component:contractList
    },
    {
      path:'/SeeContarct',//我的合同详情
      name:'SeeContarct',
      component:SeeContarct
    },
    {
      path:'/signedList',  //已签约
      name:'signedList',
      component: signedList
    },
    {
      path:'/overdueList',  //待签约
      name:'overdueList',
      component: overdueList
    },
    {
      path:'/waitSign',  //即将过期合同
      name:'waitSign',
      component:waitSign
    },
    {
      path:'/willOverdue',  //已过期合同
      name:'willOverdue',
      component:willOverdue
    },
    {
      path:'/seeUnsignedContarct',//待签约详情
      name:'seeUnsignedContarct',
      component:seeUnsignedContarct
    }

  ]
})
