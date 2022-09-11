import { Chicken } from "@element-plus/icons-vue";
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  { path: '/',
    redirect: '/login' 
  },
  {
    path: "/home",
    name: "home",
    component: () => import('../views/home/index.vue'),
    children: [{
      path: "/home",
      name: "home",
      meta: {
        headerMenu: '/home'
      },
      component: () => import('../views/visual/index.vue')
    },{
      path: "/component",
      name: "component",
      meta: {
        headerMenu: '/component'
      },
      component: () => import('../views/component/index.vue')
    },{
      path: "/map",
      name: "map",
      meta: {
        headerMenu: '/map'
      },
      component: () => import('../views/map/index.vue')
    },{
      path: "/document",
      name: "document",
      meta: {
        headerMenu: '/document'
      },
      component: () => import('../views/document/index.vue')
    },{
      path: "/administrator",
      name: "administrator",
      redirect: '/administrator/user',
      meta: {
        headerMenu: '/administrator', 
      },
      component: () => import('../views/administrator/index.vue'),
      children: [{
        path: "/administrator/user",
        name: "user",
        meta: {
          headerMenu: '/administrator', 
          mainMenu: '/administrator/user'
        },
        component: () => import('@/views/administrator/user/index.vue')
      },{
        path: "/administrator/userLog",
        name: "userLog",
        meta: {
          headerMenu: '/administrator',
          mainMenu: '/administrator/userLog'
        },
        component: () => import('@/views/administrator/userLog/index.vue')
      }]
    }]
  },
  {
    path: "/login",
    name: "login",
    component: ()=>import ('../views/user/index.vue')
  },
  {
    path: "/register",
    name: "register",
    component: ()=>import ('../views/user/index.vue')
  },
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes
})