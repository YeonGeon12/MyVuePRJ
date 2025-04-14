<template>
  <div>
    <h1>Vue 앱</h1>
    <my-button /> <!-- App.vue에서만 사용가능 -->
  </div>
</template>
<script>
import MyButton from './components/MyButton.vue';

export default {
  components: {
    MyButton // 지역 등록
  }
}
</script>
