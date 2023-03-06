import { resolve } from 'path'
import { loadEnv } from 'vite'
import type { UserConfig, ConfigEnv } from 'vite'
import Vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'
import VueJsx from '@vitejs/plugin-vue-jsx'
import VueI18n from '@intlify/vite-plugin-vue-i18n'
import styleImport, { ElementPlusResolve, VxeTableResolve } from 'vite-plugin-style-import'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import PurgeIcons from 'vite-plugin-purge-icons'
import { viteMockServe } from 'vite-plugin-mock'
import DefineOptions from 'unplugin-vue-define-options/vite'
import { createHtmlPlugin } from 'vite-plugin-html'

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
      WindiCSS(),
      styleImport({
        resolves: [ElementPlusResolve(), VxeTableResolve()],
        libs: [
          {
            libraryName: 'element-plus',
            esModule: true,
            resolveStyle: (name) => {
              return `element-plus/es/components/${name.substring(3)}/style/css`
            }
          },
          {
            libraryName: 'vxe-table',
            esModule: true,
            resolveStyle: () => {
              return 'vxe-table/lib/style.css'
            }
          }
        ]
      }),
      VueI18n({
        runtimeOnly: true,
        compositionOnly: true,
        include: [resolve(__dirname, 'src/locales/**')]
      }),
      createSvgIconsPlugin({
        iconDirs: [pathResolve('src/assets/svgs')],
        symbolId: 'icon-[dir]-[name]',
        svgoOptions: true
      }),
      PurgeIcons(),
      viteMockServe({
        ignore: /^\_/,
        mockPath: 'mock',
        localEnabled: !isBuild,
        prodEnabled: isBuild,
        injectCode: `
          import { setupProdMockServer } from '../mock/_createProductionServer'

          setupProdMockServer()
          `
      }),
      DefineOptions(),
      createHtmlPlugin({
        inject: {
          data: {
            title: env.VITE_APP_TITLE,
            injectScript: `<script src="./inject.js"></script>`
          }
        }
      })
    ],
    base: process.env.NODE_ENV === 'production' ? './' : '/',
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
    build: {
      minify: 'terser',
      outDir: env.VITE_OUT_DIR || 'dist',
      sourcemap: env.VITE_SOURCEMAP === 'true' ? 'inline' : false,
      terserOptions: {
        compress: {
          drop_debugger: env.VITE_DROP_DEBUGGER === 'true',
          drop_console: env.VITE_DROP_CONSOLE === 'true'
        }
      }
    },
    server: {
      port: 3000,
      proxy: {
        // 选项写法
        // '/api': {
        //   target: [process.env.VITE_DEV_SERVER_LOCAL],
        //   changeOrigin: true,
        //   rewrite: path => path.replace(/^\/api/, '')
        // }
      },
      hmr: {
        overlay: false
      },
      host: '0.0.0.0'
    },
  }
}
