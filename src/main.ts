import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import './style.css'
import { useUserStore } from './store/index'

import './demos/ipc'
// If you want use Node.js, the`nodeIntegration` needs to be enabled in the Main process.
// import './demos/node'

async function initApp() {
  const app = createApp(App)
  const pinia = createPinia()
  app.use(router)
  app.use(pinia)

  const userStore = useUserStore()
  await userStore.initConfig()
  app.mount('#app').$nextTick(() => {
    postMessage({ payload: 'removeLoading' }, '*')
  })
}

initApp()
