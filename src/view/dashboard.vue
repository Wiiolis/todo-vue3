<template>
    <div class="categories_wrapper">
    <TodoCategory v-for="category in categories" :key="category.index" :category="category" />
    </div>
</template>
  
<script>
import TodoCategory from '../components/TodoCategory.vue'

export default {
    setup() {
        const categories = [
            { name: 'Plants', index: 1 },
            { name: 'Books', index: 2 }
        ]
        return { categories }
    },

    name: 'App',
    components: {
        TodoCategory
    }
}
</script>
  
<style>
.categories_wrapper {
    display: flex;
    gap: 10px;
}
</style>