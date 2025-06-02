<template>
  <div class="container">
    <header>
      <slot name="header"></slot>
    </header>
    <main>
      <slot></slot>
    </main>
    <footer>
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'BaseLayout'
}
</script>

<style scoped>
.container {
  border: 1px solid #ccc;
  padding: 20px;
  max-width: 600px;
  margin: 0 auto;
}
header, main, footer {
  margin: 10px 0;
  padding: 10px;
  background-color: #f9f9f9;
}
</style>
