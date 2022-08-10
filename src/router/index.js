import { createRouter, createWebHashHistory } from "vue-router"
import HomeView from "../views/HomeView.vue"
import LoginView from "@/views/LoginView.vue"
import AboutView from "@/views/AboutView.vue"
import UserView from "@/views/UserView.vue"
import LogoutView from "@/views/LogoutView.vue"

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView
  },
  {
    path: "/about",
    name: "about",
    component: AboutView
  },
  {
    path: "/login",
    name: "login",
    component: LoginView
  },
  {
    path: "/user",
    name: "user",
    component: UserView
  },
  {
    path: "/logout",
    name: "logout",
    component: LogoutView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router