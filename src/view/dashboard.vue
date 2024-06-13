<template>
    <TodoCategory v-for="category in categories" :key="category.index" :category="category" />
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
  
  