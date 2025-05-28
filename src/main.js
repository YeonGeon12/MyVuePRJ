import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'

// Vue 앱 생성
const app = createApp(App)

// 라우터와 Pinia 사용
app.use(router)
app.use(createPinia())

// 앱 마운트
app.mount('#app')
