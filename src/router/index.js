import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Home from '@/components/home/Home'
import LendBook from '@/components/home/LendBook'
import RetBook from '@/components/home/RetBook'
import My from '@/components/home/My'
import Search from '@/components/home/Search'
import Reseve from '@/components/home/Reseve'
import Login from '@/components/home/Login'
import Register from '@/components/home/Register'
import BookDetail from '@/components/home/BookDetail'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'index',
        component: Index,
        redirect: '/home',
        children: [{
                path: '/home',
                name: 'home',
                component: Home
            },
            {
                path: '/lendBook',
                name: 'LendBook',
                component: LendBook
            }, {
                path: '/retBook',
                name: 'RetBook',
                component: RetBook
            }, {
                path: '/mypage',
                name: 'My',
                component: My
            }, {
                path: '/reseve',
                name: 'Reseve',
                component: Reseve
            }
        ]
    }, {
        path: '/detail/:id',
        name: 'detail',
        component: BookDetail
    }, {
        path: '/search',
        name: 'Search',
        component: Search
    }, {
        path: '/login',
        name: 'Login',
        component: Login
    }, {
        path: '/register',
        name: 'Register',
        component: Register
    }]
})