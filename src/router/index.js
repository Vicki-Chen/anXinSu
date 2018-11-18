import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/pages/Home/Home';
import My from '../components/pages/My/My';
import Reg from '../components/pages/My/Reg';
import Login from '../components/pages/My/Login';
import MyInfo from '../components/pages/My/MyInfo';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
        path: '/my',
        name: 'My',
        component: My,
        children:[
            {path: 'reg',name: 'Reg',component: Reg},
            {path: 'login',name: 'Login', component: Login},
            {path: 'myinfo',name: 'MyInfo', component: MyInfo}
        ]
    },
    
    
  ]
})
