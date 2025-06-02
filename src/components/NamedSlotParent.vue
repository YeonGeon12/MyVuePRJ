<template>
  <BaseLayout>
    <template #header>
      <h1>페이지 제목입니다</h1>
    </template>

    <template #default>
      <p>이곳은 메인 콘텐츠 영역입니다.</p>
      <p>여기에 추가적인 텍스트를 넣을 수 있습니다.</p>
    </template>

    <template #footer>
      <p>연락처: example@email.com</p>
    </template>
  </BaseLayout>
</template>

<script>
import BaseLayout from './BaseLayout.vue'

export default {
  name: 'NamedSlotParent',
  components: {
    BaseLayout
  }
}
</script>
