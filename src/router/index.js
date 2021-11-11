import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    name: "HomePage",
    path: "/",
    component: () => import("@/views/Home")
  },
  {
    name: "LoginPage",
    path: "/login",
    component: () => import("@/views/Login")
  },
  {
    name: "RegisterPage",
    path: "/register",
    component: () => import("@/views/Register")
  },
  {
    name: "DashboardPage",
    path: "/dashboard",
    component: () => import("@/views/Dashboard")
  }
]

export default createRouter({
  routes: routes,
  history: createWebHashHistory()
})