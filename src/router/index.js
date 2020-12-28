import Vue from 'vue'
import Router from 'vue-router'
import Homepage from '@/pages/Homepage'
import SingleVideo from '@/pages/SingleVideo'
import SidebarLayout from '@/layout/SidebarLayout'

Vue.use(Router)

export default new Router({
  routes: [
    {
    	path: '/',
    	name: 'Homepage',
    	component: Homepage
    },
    {
    	path: '/watch/:id',
    	name: 'SingleVideo',
    	component: SingleVideo,
    }
  ]
})
