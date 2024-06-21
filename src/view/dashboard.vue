<template>
    <div class="categories_wrapper">
        <div class="categories">
            <div v-for="category in categories" :key="category.index">
                <router-link :to="{ name: 'category', params: { category: category.name } }">
                    <TodoCategory :category="category" />
                </router-link>
            </div>
        </div>
        <div><router-view></router-view></div>
    </div>
</template>


<script setup>
import TodoCategory from '../components/TodoCategory.vue'

const categories = [
    { name: 'plants', index: 1 },
    { name: 'books', index: 2 }
]
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