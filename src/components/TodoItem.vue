<!-- src/components/TodoItem.vue -->
<template>
  <li>{{ todo }}</li>
</template>
<script>
export default {
  props: ['todo'] // 부모로부터 데이터 받기
}
</script>
<style scoped>
li {
  color: #333;
}
</style>
