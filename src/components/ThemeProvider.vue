<template>
  <div class="provider-container">
    <h2>테마 제공 컴포넌트</h2>
    <!-- 테마 색상 입력 필드 -->
    <input v-model="theme.color" placeholder="테마 색상 입력 (예: #ff0000)" style="margin-bottom: 10px;" />

    <!-- 현재 테마 색상 표시 -->
    <p>현재 테마 색상: {{ theme.color }}</p>

    <!-- 자식 컴포넌트 호출 -->
    <ThemeConsumer />
  </div>
</template>

<script>
import { ref, provide } from 'vue'
import ThemeConsumer from './ThemeConsumer.vue'

export default {
  name: 'ThemeProvider',
  components: {
    ThemeConsumer
  },
  setup() {
    const theme = ref({ color: '#42b983' }) // 반응형 테마 객체
    provide('theme', theme)
    return { theme }
  }
}
</script>

<style scoped>
.provider-container {
  padding: 20px;
  text-align: center;
}
</style>
