// store/uuidStore.js
import { defineStore } from 'pinia'
import { v4 as uuidv4 } from 'uuid'

export const useUuidStore = defineStore('uuidStore', {
  state: () => ({
    uuid: ''
  }),
  actions: {
    generateUuid() {
      this.uuid = uuidv4()
    }
  }
})