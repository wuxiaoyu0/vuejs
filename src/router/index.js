import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Home from '@/components/home/Home'
import LendBook from '@/components/home/LendBook'
import My from '@/components/home/My'
import RetBook from '@/components/home/RetBook'
import Search from '@/components/home/Search'
import Reseve from '@/components/home/Reseve'
import Login from '@/components/home/Login'
import Register from '@/components/home/Register'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
      redirect: '/home',
      children: [
        {
          path: '/home',
          name: 'home',
          component: Home
        },
        {
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
    }
  ]
})
