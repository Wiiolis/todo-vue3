<template>
    <div class="category_wrapper">{{ category.name }}</div>
</template>


<script>
export default {
    name: 'HelloWorld',
    props: {
        category: {
            type: Object,
            required: true
        }
    }
}
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