// 导入 Vue 实例，这里假设使用的是 Vue 3，使用 createApp 创建的应用实例
import { getCurrentInstance } from 'vue';

// 定义一个函数来获取 Vue 上的全局数据
export function useGlobalVueData() {
  const app = getCurrentInstance()?.appContext.app;
  if (app) {
    // 假设全局数据存储在 app.config.globalProperties 中
    return app.config.globalProperties;
  }
  return null;
}
