import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router/index'
import store from './store'
//引入Element-ui
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
// 引入echarts
import * as ECharts from 'echarts';
import 'echarts-liquidfill'
//引入scss样式
import '@/assets/styles/index.scss'
//引入国际化组件
import i18n from '@/plugins/vueI18n';

const app = createApp(App)
//导入所有Icon图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
//全局注册ECharts
app.config.globalProperties.$ECharts = ECharts
app.use(i18n).use(ElementPlus)
app.use(router).use(store).mount('#app')
