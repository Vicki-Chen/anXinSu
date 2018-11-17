import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/pages/Home/Home';
import Reg from '../components/pages/Reg/Reg';
import Login from '../components/pages/Login/Login';

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
      path: '/reg',
      name: 'Reg',
      component: Reg
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
