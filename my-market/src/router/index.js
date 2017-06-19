import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/Index'
import Navigation from '../components/nav/Index'
import ShopList from '../components/ShopList/Index'
import User from '../components/User/Index'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', name: 'index', component: Index},
    {path: '/nav', name: 'nav', component: Navigation},
    {path: '/shoplist', name: 'shoplist', component: ShopList},
    {path: '/user', name: 'user', component: User}
  ]
})
