// Vue 애플리케이션 인스턴스를 생성하기 위한 함수 가져오기
import { createApp } from 'vue';
// 최상위 App 컴포넌트 가져오기
import App from './App.vue'
//import MyButton from './components/MyButton.vue'
// 설정한 라우터 인스턴스 가져오기
import router from './router'

//const app = createApp(App).use(router)
//app.component('MyButton', MyButton)  // 글로벌 등록
//app.mount('#app')
// Vue 애플리케이션 생성, 라우터 통합, DOM의 #app 요소에 마운트
createApp(App)
    // 라우터 플러그인을 애플리케이션에 추가
    .use(router)
    // ID가 'app'인 DOM 요소에 애플리케이션 렌더링
    .mount('#app');
