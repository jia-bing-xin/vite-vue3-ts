import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  { path: '/',
    redirect: '/login' 
  },
  {
    path: "/home",
    name: "home",
    component: ()=>import ('../views/home/index.vue')
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