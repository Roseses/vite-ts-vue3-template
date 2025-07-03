import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router/index';
import store from './store';
import * as ElementPlusIconsVue from '@element-plus/icons-vue'; //引入图标
import 'element-plus/dist/index.css'; //引入样式
import './permission';
import 'virtual:uno.css';
// import locale from 'element-plus/lib/locale/lang/zh-cn'

// import UAParser from 'ua-parser-js'
// const parser = new UAParser();
// console.log(parser.getResult());
const app = createApp(App);
//引入图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
app.use(router).use(store).mount('#app');

// 合并已有的全局属性，避免覆盖 $route, $router, $pinia 等属性
Object.assign(app.config.globalProperties, {
  1: 2,
});
