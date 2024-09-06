<template>
  <div>
    <h2>{{ route.params.category }}</h2>

    <h4>Done:</h4>
    <ul>
      <li v-for="item in category.state.done" :key="item"> {{ item.name }}</li>
    </ul>

    <h4>Todo:</h4>
    <input type="text" placeholder="New todo ..." v-model='newTodo' /><button @click="addNewTodo">+</button>
    <ul>
      <li v-for="item in category.state.todo" :key="item"><input type="checkbox" /> {{ item.name }}</li>
    </ul>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { ref } from 'vue'

const route = useRoute()
const newTodo = ref('')

// TODO: Get from database full state, by name or index. Use SQLite?
const category = {
  title: 'plants',
  state: {
    done: [
      { name: 'aloe' },
      { name: 'cactus' }
    ],
    todo: [
      { name: 'orchid' },
      { name: 'grass' }
    ],
    consider: {}
  }
}

// TODO: Push new todo to database.
function addNewTodo() {
  if (newTodo.value.trim() !== '') {
    category.state.todo.push({ name: newTodo.value.trim() })
    newTodo.value = ''
  }
}
</script>

<style lang="scss">
@import "./category.scss";
</style>