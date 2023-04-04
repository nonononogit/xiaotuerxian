import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// element-plus按需引入配置，引入文件
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { resolve } from 'path'
// const path = require('path')
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // element-plus按需引入配置
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, "src")
    },
    extensions: [".ts", ".js", ".jsx", ".tsx"], // 导入时想要省略的扩展名列表。
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://apipc-xiaotuxian-front.itheima.net',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        additionalData: `@import "${resolve(__dirname, 'src/styles/common.less')}";`
      }
    }
  }
})
