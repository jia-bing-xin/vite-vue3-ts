import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: process.env.NODE_ENV === 'production' ? './' : '/',
  resolve: {
    alias: [
      {
        find: 'vue-i18n',
        replacement: 'vue-i18n/dist/vue-i18n.cjs.js', //解决i8n警告
      },
      {
        find: '@',
        replacement: resolve(__dirname, './src'),
      },
    ]
  },
  css: {
		preprocessorOptions: {
			scss: {
        additionalData:'@import "./src/assets/styles/variable.scss";'
			}
		}
	}
})
