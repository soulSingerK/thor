import { createRouter, createWebHashHistory } from 'vue-router'
import { useUserStore } from '../store'
import Home from '../view/home/index.vue'
import Login from '../view/login/index.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: Home,
      meta: {
        login: true,
      },
    },
    {
      path: '/login',
      component: Login,
    },
  ],
})

router.beforeEach(async (to, from, next) => {
  const userStore = useUserStore()
  window.ipcRenderer?.setWindowSize({ width: 400, height: 300 })
  if (!userStore.isLogin && to.meta.login) {
    return next('/login')
  }
  return next()
})

export default router
