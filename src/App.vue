<template>
  <!-- 구성 요소 사용 위치 표시 -->
  <div id="app">
    <!-- 네비게이션 바 -->
    <nav>
      <!-- 홈 페이지로 이동하는 링크 -->
      <router-link to="/">홈</router-link> |
      <!-- 게시글 목록 페이지로 이동하는 링크 -->
      <router-link to="/posts">게시글</router-link>
    </nav>

    <!-- 현재 경로의 컴포넌트 표시 -->
    <router-view/>
  </div>
</template>

<style>
/* 네비게이션 바 스타일 */
nav {
  background-color: #42b983;
  padding: 10px;
  margin-bottom: 20px;
}

/* 링크 스타일 */
nav a {
  color: white;
  margin-right: 10px;
  text-decoration: none;
}
</style>
