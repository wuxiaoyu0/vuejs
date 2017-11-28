import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import LendBook from '@/pages/home/LendBook'
import My from '@/pages/home/My'
import RetBook from '@/pages/home/RetBook'
import Search from '@/pages/home/Search'
import Reseve from '@/pages/home/Reseve'
import Login from '@/pages/home/Login'
import Register from '@/pages/home/Register'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },{
      path: '/lendBook',
      name: 'LendBook',
      component: LendBook
    },{
      path: '/retBook',
      name: 'RetBook',
      component: RetBook
    },{
      path: '/mypage',
      name: 'My',
      component: My
    },{
      path: '/reseve',
      name: 'Reseve',
      component: Reseve
    },{
      path: '/search',
      name: 'Search',
      component: Search
    },{
      path: '/login',
      name: 'Login',
      component: Login
    },{
      path: '/register',
      name: 'Register',
      component: Register
    }
  ]
})
