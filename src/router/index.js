import Vue from 'vue'
import VueRouter from 'vue-router'

import WelcomeView from '@/views/accounts/WelcomeView'
import LogInView from '@/views/accounts/LogInView'
import SignUpView from '@/views/accounts/SignUpView'

import ArticleView from '@/views/community/ArticleView'
import CreateView from '@/views/community/CreateView'
import DetailView from '@/views/community/DetailView'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'WelcomeView',
    component: WelcomeView
  },
  {
    path: '/',
    name: 'ArticleView',
    component: ArticleView
  },

  {
    path: '/create',
    name: 'CreateView',
    component: CreateView
  },

  {
    path: '/signup',
    name: 'SignUpView',
    component: SignUpView
  },

  {
    path: '/login',
    name: 'LogInView',
    component: LogInView
  },

  {
    path: '/:id',
    name: 'DetailView',
    component: DetailView,
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
