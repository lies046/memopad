import { createStore } from 'vuex'

export default createStore ({
  state: {
    memos: []
  },
  getters: {

  },
  mutations: {
    /* memo保存 */
    save (state, newMemo) {
      state.memos.unshift(newMemo)
    }
  }
})