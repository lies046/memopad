import { createStore } from 'vuex'

export default createStore ({
  state: {
    count: 0,
    memos: []
  },
  getters: {

  },
  mutations: {
    /* memo保存 */
    save (state, newMemo) {
      newMemo.id = ++state.count
      state.memos.unshift(newMemo)
    }
  }
})