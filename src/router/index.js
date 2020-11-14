import Vue from 'vue'
import Router from 'vue-router'
const Valorant = () => import( '../views/Valorant.vue')
const StanzSheet = () => import( '../views/StanzSheet.vue')

Vue.use(Router)

const router = new Router({
  base: 'twitch-apps',
  mode: 'history',
  routes: [
    {
      path: '/valorant',
      name: 'Valorant',
      component: Valorant,
      meta: {title: 'Valorant Player History'},
    },
    {
      path: '/stanzsheet',
      name: "StanzSheet",
      component: StanzSheet,
      meta: {title: "Stanz's Spreadsheet"},
    },
  ]
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'preethamrn'
  next()
})

export default router