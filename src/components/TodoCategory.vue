<template>
    {{ category.name }}
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

</style>