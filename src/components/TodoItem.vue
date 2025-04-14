<!-- src/components/TodoItem.vue (자식) -->
<template>
  <li>
    <span :style="{ textDecoration: todo.done ? 'line-through' : 'none' }">
      {{ todo.text }}
    </span>
    <button @click="$emit('toggle', todo)">완료</button>
  </li>
</template>
<script>
export default {
  props: ['todo']
}
</script>

