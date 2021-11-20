import Vue from 'vue'
import VueRouter from 'vue-router'
import Users from '../views/Users'
import Home from '../views/Home'
import Settings from '../views/Settings'
import AddUser from '../views/AddUser'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
      path: '/:safeAddress/users',
      name: 'Users',
      component: Users
  },
  {
      path: '/:safeAddress/settings',
      name: 'Settings',
      component: Settings
  },
  {
      path: '/:safeAddress/addUser',
      name: 'AddUser',
      component: AddUser
  }
]

const router = new VueRouter({
  routes
})

export default router
