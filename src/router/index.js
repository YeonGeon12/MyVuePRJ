// src/router/index.js

import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import { useAuthStore } from '../stores/auth'

// 라우터 생성
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { requiresAuth: true } // 이 페이지에 접근하려면 인증 필요
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    }
  ]
})

// 네비게이션 가드: 인증 상태에 따라 페이지 접근 제어
router.beforeEach((to, from, next) => {
  const authStore = useAuthStore()

  if (to.meta.requiresAuth && !authStore.isLoggedIn) {
    // 인증이 필요한 페이지에 접근하려는데 로그인하지 않았다면 로그인 페이지로 리디렉트
    next({ name: 'login' })
  } else if ((to.name === 'login' || to.name === 'register') && authStore.isLoggedIn) {
    // 로그인 또는 회원가입 페이지에 접근하려는데 이미 로그인했다면 홈 페이지로 리디렉트
    next({ name: 'home' })
  } else {
    // 그 외의 경우 정상적으로 페이지 이동
    next()
  }
})

export default router
