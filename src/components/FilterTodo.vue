<template>
  <div>
    <form @submit="filterTodos">
      <input type="number" v-model="limit" placeholder="Add to do ..." />
      <input @click.prevent="filterTodos" type="submit" value="Filter" />
    </form>
    <br />
  </div>
</template>
<script>
import { ref } from 'vue'
import { useStore } from 'vuex'
export default {
  name: 'FilterTodos',
  setup () {
    const limit = ref(200)
    const store = useStore()
    const filterTodos = () => {
      store.dispatch('onFilterTodos', limit.value)
    }
    return {
      limit,
      filterTodos
    }
  }
}
</script>
