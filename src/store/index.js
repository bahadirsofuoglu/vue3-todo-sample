import { createStore } from 'vuex'
import Axios from 'axios'
export default createStore({
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
export const ACTION_TYPES = {
  fetchTodos: 'fetchTodos',
  addTodo: 'addTodo',
  deleteTodo: 'deleteTodo',
  updateTodo: 'updateTodo'
}
