import Vue from 'vue'
import Router from 'vue-router'
import Admin from '@/components/admin.vue'
import Dialog from '@/components/adminDialog.vue'
import Goodslist from '@/components/goodslist.vue'
import orderTable from '@/components/orderTable.vue'
import orderList from '@/components/orderList.vue'
import About from '@/components/about.vue'
import Jurisdiction from '@/components/jurisdiction.vue'
import Main from '@/components/main.vue'
import Login from '@/components/login.vue'
import View from '@/components/main_view.vue'
import Update from '@/components/adminUpdate.vue'
import Listupdate from '@/components/goodslistUpdate.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Login
    },
    {
      path: '/main',
      components: {default: Main, 'main': View}
    },
    {
      path: '/main/admin',
      components: {default: Admin, 'main': Main}
    },
    {
      path: '/main/admin/dialog',
      components: {default: Dialog, 'main': Main}
    },
    {
      path: '/main/admin/update',
      components: {default: Update, 'main': Main}
    },
    {
      path: '/main/goodsList',
      components: {default: Goodslist, 'main': Main}
    },
    {
      path: '/main/goodslist/update',
      components: {default: Listupdate, 'main': Main}
    },
    {
      path: '/main/orderTable',
      components: {default: orderTable, 'main': Main}
    },
    {
      path: '/main/orderList',
      components: {default: orderList, 'main': Main}
    },
    {
      path: '/main/about',
      components: {default: About, 'main': Main}
    },
    {
      path: '/main/jurisdiction',
      components: {default: Jurisdiction, 'main': Main}
    }]
})
