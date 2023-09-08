import NProgress from '@/utils/nprogress';
import router from '@/router/index';

NProgress.configure({ showSpinner: false });

router.beforeEach(async (_, _, next) => {
  NProgress.start();
  next();
});

router.afterEach(() => {
  NProgress.done();
});
