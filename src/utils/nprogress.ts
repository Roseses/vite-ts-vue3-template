import NProgress from 'nprogress';
import 'nprogress/nprogress.css'; // progress bar style

// 封装的接口
const nprogress = {
  start() {
    NProgress.start();
  },
  done() {
    NProgress.done();
  },
  configure(options) {
    NProgress.configure(options);
  },
};

export default nprogress;
