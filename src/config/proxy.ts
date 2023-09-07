export default {
  // 是否走代理
  isRequestProxy: true,
  development: {
    // 开发环境接口请求
    host: import.meta.env.VITE_BASE_URL || '',
    // 开发环境 cdn 路径
    cdn: '',
  },
  test: {
    // 测试环境接口地址
    host: import.meta.env.VITE_BASE_URL || '',
    // 测试环境 cdn 路径
    cdn: '',
  },
  release: {
    // 正式环境接口地址
    host: import.meta.env.VITE_BASE_URL || '',
    // 正式环境 cdn 路径
    cdn: '',
  },
};
