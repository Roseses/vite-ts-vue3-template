import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router/index';
import store from './store';
import * as ElementPlusIconsVue from '@element-plus/icons-vue'; //引入图标
import 'element-plus/dist/index.css'; //引入样式
import './permission';
import TDesign from 'tdesign-vue-next';
import 'tdesign-vue-next/es/style/index.css';

const app = createApp(App);
//引入图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
app
  .use(router)
  .use(store)
  .use(TDesign as any)
  .mount('#app');
