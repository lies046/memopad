import { createStore } from 'vuex'

export default createStore ({
  state: {
    count: 0,
    memos: []
  },
  getters: {
    getCount: (state) => {
      return state.memos.length
    },
    getAll: (state) => {
      return state.memos
    },
    getMemoById: (state) => (id) => {
      return state.memos.find(memo => memo.id === id)
    }
  },
  mutations: {
    /* memo保存 */
    save (state, newMemo) {
      newMemo.id = ++state.count
      state.memos.unshift(newMemo)
    }
  }
})