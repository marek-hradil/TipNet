import Vue from 'vue'
import Router from 'vue-router'
import Hub from '@/views/Hub.vue'
import Event from '@/views/Event.vue'
import Matches from '@/views/Matches.vue'
import Table from '@/views/Table.vue'
import Rules from '@/views/Rules.vue'
import Discussion from '@/views/Discussion.vue'
import Profile from '@/views/Profile.vue'
import NotFound from '@/views/NotFound.vue'
import Detail from '@/views/Detail.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/event',
      name: 'event',
      component: Event
    },
    {
      path: '/matches',
      name: 'matches',
      component: Matches
    },
    {
      path: '/table',
      name: 'table',
      component: Table
    },
    {
      path: '/rules',
      name: 'rules',
      component: Rules
    },
    {
      path: '/discussion',
      name: 'discussion',
      component: Discussion
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: Detail
    },
    {
      path: '/',
      name: 'hub',
      component: Hub
    },
    {
      path: '*',
      name: 'notfound',
      component: NotFound
    }
  ]
})
