<template>
  <div class="list-container">
    <ul>
      <slot v-for="item in items" :key="item.id" :item="item">
        <li>{{ item.name }} (기본 콘텐츠)</li>
      </slot>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'FancyList',
  props: {
    items: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.list-container {
  padding: 20px;
  max-width: 600px;
  margin: 0 auto;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 5px 0;
  padding: 10px;
  background-color: #e0f7fa;
}
</style>
