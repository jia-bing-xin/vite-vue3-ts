import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import {router} from './router/index'
//引入国际化组件
import i18n from './locales';
import App from './App.vue'

const app = createApp(App)

app.use(i18n).use(ElementPlus)
app.use(router).mount('#app')
