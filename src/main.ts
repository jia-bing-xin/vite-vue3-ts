import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//引入国际化组件
import i18n from './locales';
import './style.css'
import App from './App.vue'

const app = createApp(App)

app.use(ElementPlus)
app.use(i18n)
app.mount('#app')
