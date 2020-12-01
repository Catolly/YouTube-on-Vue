import Vue from 'vue'
import Router from 'vue-router'
import Homepage from '@/pages/Homepage'
import SingleVideo from '@/pages/SingleVideo'

Vue.use(Router)

export default new Router({
  routes: [
    {
    	path: '/',
    	name: 'Homepage',
    	component: Homepage
    },
    {
    	path: '/video',
    	name: 'SingleVideo',
    	component: SingleVideo
    }
  ]
})
