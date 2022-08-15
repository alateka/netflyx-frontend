import { createRouter, createWebHashHistory } from "vue-router"
import HomeView from "../views/HomeView.vue"
import LoginView from "@/views/LoginView.vue"
import UserView from "@/views/UserView.vue"
import LogoutView from "@/views/LogoutView.vue"
import PlayView from "@/views/PlayView.vue"

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView
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
  },
  {
    path: "/play",
    name: "play",
    component: PlayView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router