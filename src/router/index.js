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
import Information from "../views/Information.vue";
import Application from "../views/Application.vue";
import Change from "../views/Change.vue";

Vue.use(VueRouter)

const routes = [


  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/',
    name: 'Background',
    component: Background,
    redirect: '/signin',
    children:[
      {
        path : 'signin',
        name : 'signin',
        component: Signin
      },
      {
        path : 'table',
        name: 'table',
        component: Table,
        meta: { requireAuth: true },
        children:[
          {
            path : 'scholarship',
            component: Scholarship,
            meta: { requireAuth: true },
          },
          {
            path : 'grant',
            component: Grant,
            meta: { requireAuth: true },
          },
          {
            path : 'load',
            component: Load,
            meta: { requireAuth: true },
          },
          {
            path : 'information',
            name : 'information',
            component: Information,
            meta: { requireAuth: true },
          },
          {
            path : 'application',
            name : 'application',
            component: Application,
            meta: { requireAuth: true },
          },
          {
            path : 'change',
            component: Change,
            meta: { requireAuth: true },
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

router.beforeEach((to,from,next) => {
  if(to.meta.requireAuth){
    if(sessionStorage.getItem('jzd_id') != null){
      next()
    }else{
      alert('请先登陆')
      next({
        path: '/signin',
      })
    }
  }else{
    next()
  }

})
