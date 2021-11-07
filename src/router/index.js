import Vue from 'vue'
import VueRouter from 'vue-router'
import TransactionList from '../components/UserList'
import Home from '../views/Home'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
      path: '/:safeName',
      name: 'transactionList',
      component: TransactionList
  },
]

const router = new VueRouter({
  routes
})

export default router
