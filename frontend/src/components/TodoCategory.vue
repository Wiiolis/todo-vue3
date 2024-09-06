<template>
    <div class="category_wrapper">{{ props.category.name }}</div>
</template>


<script setup>
const props = defineProps({
    category: Object
})
</script>


<style>
.category_wrapper {
    height: 100px;
    width: 100px;
    border: 1px solid lightseagreen;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>