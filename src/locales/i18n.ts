import { App } from "vue";
import { createI18n } from "vue-i18n";
import en from './en'
import zh_CN from './zh_CN'
 
const i18n = createI18n({
  locale: localStorage.getItem('lang') || 'zh_CN',// 默认语言
  fallbackLocale: 'zh_CN',// 不存在默认则为中文
  allowComposition: true,// 允许组合式api
  messages: {
    en,
    zh_CN
  }
})
export default (app: App) => {
  app.use(i18n)
}