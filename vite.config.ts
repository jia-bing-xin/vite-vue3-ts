import { resolve } from 'path'
import { loadEnv } from 'vite'
import type { UserConfig, ConfigEnv } from 'vite'
import Vue from '@vitejs/plugin-vue'
import VueJsx from '@vitejs/plugin-vue-jsx'

const root = process.cwd()
function pathResolve(dir: string) {
  return resolve(root, '.', dir)
}
export default ({ command, mode }: ConfigEnv): UserConfig => {
  let env
  const isBuild = command === 'build'
  if (!isBuild) {
    env = loadEnv(process.argv[3] === '--mode' ? process.argv[4] : process.argv[3], root)
  } else {
    env = loadEnv(mode, root)
  }
  return {
    plugins: [
      Vue(),
      VueJsx(),
    ],
    resolve: {
      extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.less', '.css'],
      alias: [
        {
          find: 'vue-i18n',
          replacement: 'vue-i18n/dist/vue-i18n.cjs.js', //解决i8n警告
        },
        {
          find: '@',
          replacement: `${pathResolve('src')}/`,
        },
      ]
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "./src/assets/styles/variable.scss";',
          javascriptEnabled: true
        }
      }
    },
    server: {
      proxy: {
        // 选项写法
        '/api': {
          target: env.VITE_DEV_SERVER_LOCA,
          changeOrigin: true,
          rewrite: path => path.replace(/^\/api/, '')
        }
      },
    },
  }
}
