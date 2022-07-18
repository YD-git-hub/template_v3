import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path"
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base:"./",
  resolve:{
    alias:{
      "@":path.resolve(__dirname,"src"),
    }
  },
  build:{
    outDir:"dist",//输出目录
    assetsDir:"assets",//静态资源存放路径
    sourcemap:false,//取消sourcemap文件
    minify:"terser",
    terserOptions:{
      //生产环境去除console
      compress:{
        drop_console:true,
        drop_debugger:true,
      }
    }
  },
  server:{
    https:false,//是否开启https
    open:false,//是否自动打开
    port:85,//端口号
    host:'0.0.0.0',
    proxy:{
      '/api': {
        target: 'http://192.168.2.93',
        changeOrigin: true, //允许跨域
        // ws: true,//websoket支持
        rewrite:(path) => path.replace(/^\/api/,"")
      },
      '/bpi': {
        target: 'http://carbon.ttdhealth.com',
        changeOrigin: true, //允许跨域
        // ws: true,//websoket支持
        rewrite:(path) => path.replace(/^\/api/,"")
      },
    }
  },
  //引入第三方的配置
  optimizeDeps:{
    include:[]
  }
})
