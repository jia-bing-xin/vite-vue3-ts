import { createApp } from 'vue'
import {router} from './router/index'
//引入Element-ui
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//引入初始化样式
import '@/assets/styles/base.css'
//引入国际化组件
import i18n from './locales';
import App from './App.vue'

const app = createApp(App)

app.use(i18n).use(ElementPlus)
app.use(router).mount('#app')
