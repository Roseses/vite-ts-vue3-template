import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
const store = createPinia();
export { store };
store.use(piniaPluginPersistedstate); // 使用持久化插件

export * from './module/setting';

export default store;
