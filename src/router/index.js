// Vue Router에서 라우터 생성 및 히스토리 모드 설정을 위한 함수 가져오기
import { createRouter, createWebHashHistory } from 'vue-router';
// 홈 페이지에 랜더링할 컴포넌트 가져오기
import HomeView from '../views/HomeView.vue';
import PostView from '../views/PostView.vue';
import PostList from '../views/PostList.vue';

// 라우터 인스턴스 생성 및 설정
const router = createRouter( {

  // HTML5 히스토리 모드를 사용하여 깔끔한 URL 제공
  history: createWebHashHistory(process.env.BASE_URL),
  // 애플리케이션의 경로와 컴포넌트를 매핑하는 라우트 배열
  routes: [
    {
      path: '/', // 루트 경로 '/'에 대한 설정
      name: 'home', // 라우트 이름, 프로그래밍적 네비게이션에 유용
      component: HomeView // 이 경로에서 렌더링할 컴포넌트
    },
    {
      path: '/posts', // 게시글 목록 경로
      name: 'posts',
      component: PostList
    },
    {
      path: '/post/:id',
      name: 'post',
      component: PostView
    },
    {
    path: '/pathMatch(.*)*',
    name: 'not-found',
    component: () => import('../views/NotFoundView.vue')
    }
  ]
});

// 라우터 인스턴스를 다른 파일에서 사용할 수 있도록 내보내기
export default router
