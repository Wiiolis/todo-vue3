<template>
    <div class="categories_wrapper">
        <input type="text" v-model="categoryInput">
        <button v-on:click="createCategory">Create New Category</button>

        <div class="categories">
            <div v-for="category in categories" :key="category.index">
                <router-link :to="`/categories/${category.name}`" >
                    <TodoCategory :category="category" />
                </router-link>
            </div>
        </div>
        xxx
        <div><router-view :category="activeCategory"></router-view></div>
    </div>
</template>


<script setup>
import TodoCategory from '../components/TodoCategory.vue'

import { ref, onMounted } from 'vue'
const categoryInput = ref('');
const categories = ref([]);
const activeCategory = ref({});

onMounted(async () => {
    await fetchCategories();
})

async function fetchCategories() {
    const response = await fetch('http://localhost:3001/api/categories');
    categories.value = await response.json();
}

async function createCategory(text) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: categoryInput.value, todo: [{clean: 'done'}], done: []})
  };

  const response = await fetch('http://localhost:3001/api/categories', requestOptions)
  await fetchCategories()
  return await response.json();
}
</script>

<script>
export default {
    name: 'App',
    components: {
        TodoCategory
    }
}
</script>

<style>
.categories_wrapper {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 50px 0;
}

.categories {
    display: flex;
    gap: 10px;
}
</style>