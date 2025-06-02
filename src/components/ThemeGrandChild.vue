<template>
  <div class="grandchild-container" :style="{ backgroundColor: theme.color }">
    <h4>깊은 자식 컴포넌트</h4>
    <p>테마 색상: {{ theme.color }}</p>
    <button @click="changeColor">랜덤 색상으로 변경</button>
  </div>
</template>

<script>
import { inject } from 'vue'

export default {
  name: 'ThemeGrandChild',
  setup() {
    const theme = inject('theme')
    const changeColor = () => {
      theme.value.color = '#' + Math.floor(Math.random() * 16777215).toString(16)
    }
    return { theme, changeColor }
  }
}
</script>

<style scoped>
.grandchild-container {
  padding: 15px;
  margin: 10px;
  border-radius: 5px;
  color: white;
}
</style>
