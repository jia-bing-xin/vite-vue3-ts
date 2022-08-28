import { createApp } from 'vue'
import {router} from './router/index'
//引入Element-ui
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
// 引入echarts
import * as echarts from 'echarts';
//引入scss样式
import '@/assets/styles/index.scss'
//引入国际化组件
import i18n from './locales/i18n';
import App from './App.vue'

const app = createApp(App)
//导入所有Icon图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
// app.component('echarts',echarts)
app.use(i18n).use(ElementPlus)
app.use(router).mount('#app')
