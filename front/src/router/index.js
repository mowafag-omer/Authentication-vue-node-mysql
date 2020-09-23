import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Dashboard from '../views/Dashboard.vue'
import SignUpForm from '../components/SignUpForm.vue'
import SignInForm from '../components/SignInForm.vue'
import store from '../store'

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/sing-up', name: 'SignUpForm', component: SignUpForm },
  { path: '/sing-in', name: 'SignInForm', component: SignInForm },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard, beforeEnter(to, from, next) {
    store.getters.signedIn ? next() : next({name: "Home"})
  }},
  { path: '*', redirect: '/' }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router