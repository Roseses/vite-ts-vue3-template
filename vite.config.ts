// import { defineConfig } from 'vite';
import { UserConfigExport, ConfigEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path'; //这个path用到了上面安装的@types/node
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import { visualizer } from 'rollup-plugin-visualizer';
import { autoComplete, Plugin as importToCDN } from 'vite-plugin-cdn-import';
import { viteMockServe } from 'vite-plugin-mock';
import svgLoader from 'vite-svg-loader';

// https://vitejs.dev/config/
export default ({ command }: ConfigEnv): UserConfigExport => {
  return {
    server: {
      host: '0.0.0.0',
      port: 8080,
      open: true,
      https: false,
      proxy: {
        '/api': {
          target: 'http://127.0.0.1:3000/',
          changeOrigin: true,
          ws: true,
          rewrite: (path: string) => path.replace(/^\/api/, '/api'),
        },
      },
    },
    build: {
      rollupOptions: {
        output: {
          chunkFileNames: 'static/js/[name]-[hash].js',
          entryFileNames: 'static/js/[name]-[hash].js',
          assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
        },
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/style/index.scss";',
        },
      },
    },
    plugins: [
      vue(),
      // svg
      svgLoader(),
      // mockjs
      viteMockServe({
        mockPath: 'mock',
        localEnabled: true,
      }),
      // 构建cdn自动导入
      importToCDN({
        modules: [
          autoComplete('vue'), // vue2 use autoComplete('vue2')
          // autoComplete('@vueuse/shared'),
          // autoComplete('@vueuse/core'),
        ],
      }),
      // 包大小可视化分析
      visualizer({
        open: true, //在默认用户代理中打开生成的文件
        gzipSize: true, // 收集 gzip 大小并将其显示
        brotliSize: true, // 收集 brotli 大小并将其显示
        filename: 'stats.html', // 分析图生成的文件名
      }),
      // 按需引入element-plus
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      // 按需引入element-plus
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ],
    //这里进行配置别名
    resolve: {
      alias: {
        '@': path.resolve('./src'), // @代替src
        '#': path.resolve('./types'), // #代替types
      },
    },
  };
};
