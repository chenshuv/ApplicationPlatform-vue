import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Index from '../views/Index.vue'
import Background from  '../views/Background.vue'
import Signin from '../views/Signin.vue'
import Table from '../views/Table.vue';
import Scholarship from '../views/Scholarship.vue'
import Grant from '../views/Grant.vue'
import Load from "../views/Load.vue";

Vue.use(VueRouter)

const routes = [

  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/index',
    component: Index
  },
  {
    path: '/',
    name: 'Background',
    component: Background,
    children:[
      {
        path : 'signin',
        component: Signin
      },
      {
        path : 'table',
        component: Table,
        children:[
          {
            path : 'scholarship',
            component: Scholarship
          },
          {
            path : 'grant',
            component: Grant
          },
          {
            path : 'load',
            component: Load
          }
        ]
      }
    ]

  }
]

const router = new VueRouter({
  routes
})

export default router
