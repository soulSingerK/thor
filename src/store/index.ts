import { defineStore } from 'pinia'
// import ElectronStore from 'electron-store'
// import { LOGIN_TOKEN } from '../lib/constant'

// const electronStore = new ElectronStore()

export const useUserStore = defineStore('index', {
  state: () => ({
    userInfo: Object.create(null),
  }),
  actions: {
    initConfig() {
      // const token = electronStore.get(LOGIN_TOKEN)
      // if (token) {
      //   this.userInfo = {
      //     name: 'test',
      //   }
      // }
    },
  },
  getters: {
    isLogin(state) {
      return Object.keys(state.userInfo).length > 0
    },
  },
})
