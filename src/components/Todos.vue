<template>
  <div>
    <div class="todos">
      <div v-for="todo in todos" :key="todo.id" class="todo">
        <p>{{ todo.title }}</p>
      </div>
    </div>
  </div>
</template>
<script>
import { useStore } from 'vuex'
import { computed, onMounted } from 'vue'
export default {
  name: 'Todos',
  setup () {
    const store = useStore()
    const todos = computed(() => store.state.todos)
    onMounted(() => {
      store.dispatch('onFetchTodos')
    })
    return {
      todos
    }
  }
}
</script>
<style scoped>
.todos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}
.todo {
  border: 1px solid #ccc;
  background: #41b883;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  position: relative;
  cursor: pointer;
}
i {
  position: absolute;
  bottom: 10px;
  right: 10px;
  color: #fff;
  cursor: pointer;
}
.legend {
  display: flex;
  justify-content: space-around;
  margin-bottom: 1rem;
}
.complete-box {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #35495e;
}
.incomplete-box {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #41b883;
}
.is-complete {
  background: #35495e;
  color: #fff;
}
.hide {
  background: #a7b597;
  color: #fff;
  border: 1px #a7b597 solid;
  cursor: pointer;
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 5px;
}
@media (max-width: 500px) {
  .todos {
    grid-template-columns: 1fr;
  }
}
</style>
