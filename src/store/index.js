import { ACTION_TYPES } from '../constants/action-types'
import Vuex from 'vuex'
import Axios from 'axios'

export default Vuex.createStore({
  state: {
    todos: []
  },
  mutations: {
    [ACTION_TYPES.fetchTodos]: (state, todos) => (state.todos = todos)
  },
  actions: {
    onFetchTodos: async ({ commit }) => {
      const response = await Axios.get(
        'https://jsonplaceholder.typicode.com/todos'
      )
      commit(ACTION_TYPES.fetchTodos, response.data)
    }
  }
})
