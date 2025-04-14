<!-- src/components/MyComponent.vue -->
<template>
  <div>
    <h1> {{ message }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: '안녕, SFC!'
    }
  }
}

</script>
<style>
h1 {
  color: #42b983; /* Vue.js 녹색 */
}
</style>
