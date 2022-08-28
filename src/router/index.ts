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
      component: () => import('../views/visual/index.vue')
    },{
      path: "/component",
      name: "component",
      component: () => import('../views/component/index.vue')
    },{
      path: "/document",
      name: "document",
      component: () => import('../views/document/index.vue')
    },{
      path: "/administrator",
      name: "administrator",
      component: () => import('../views/administrator/index.vue')
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