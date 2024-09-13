<template>
  <div>
    <h2>{{ props.category.name }}</h2>

    <h4>Done:</h4>
    <ul>
      <li v-for="item in props.category.done" :key="item"> {{ item.name }}</li>
    </ul>

    <!-- <h4>Todo:</h4>
    <input type="text" placeholder="New todo ..." v-model='newTodo' /><button @click="addNewTodo">+</button>
    <ul>
      <li v-for="item in props.category.todo" :key="item"><input type="checkbox" /> {{ item }}</li>
    </ul> -->
  </div>
</template>

<script setup>
const props = defineProps({
    category: Object
})
</script>

<style lang="scss">
@import "./category.scss";
</style>