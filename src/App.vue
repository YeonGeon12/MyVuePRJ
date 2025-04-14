<template>
  <div>
    <h1>할 일 목록</h1>
    <ul>
      <todo-item v-for="todo in todos" :key="todo" :todo="todo" />
    </ul>
  </div>
</template>
<script>
import TodoItem from "@/components/TodoItem.vue";

export default {
  components: { TodoItem }, // 컴포넌트 등록
  data() {
    return { todos: ['할 일 1', '할 일 2'] }
  }
}
</script>
