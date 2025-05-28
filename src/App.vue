<template>
  <div id="app">
    <nav>
      <router-link to="/">홈</router-link>
      <router-link to="posts">게시글</router-link>
    </nav>
    <router-view/>
  </div>
</template>
<style>
nav {
  background-color: #42b983;
  padding: 10px;
  margin-bottom: 20px;
}
nav a {
  color: white;
  margin-right: 10px;
  text-decoration: none;
}
</style>
