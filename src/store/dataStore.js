import { defineStore } from 'pinia'

export const dataStore = defineStore('dataStore', {
  state: () => ({
    data: {
      instruction: '',
      output: '',
      dataset: [[1, '{"instruction": "你好", "input": "", "output": "您好，我是 木子AI，一个由 广东众承人工智能有限公司 打造的人工智能助手，请问有什么可以帮助您的吗？"}'], [3, '{"instruction": "你好", "input": "", "output": "您好，我是 木子AI，一个由 广东众承人工智能有限公司 打造的人工智能助手，请问有什么可以帮助您的吗？"}'], [10, '{"instruction": "你好", "input": "", "output": "您好，我是 木子AI，一个由 广东众承人工智能有限公司 打造的人工智能助手，请问有什么可以帮助您的吗？"}']],
    },
  }),

  // actions: {
  //   generateUuid() {
  //     if (!this.uuid) {
  //       this.uuid = uuidv4()
  //     }
  //     else{
  //     this.flag = false           
  //   }
  //   }
  // },
  persist: true
})