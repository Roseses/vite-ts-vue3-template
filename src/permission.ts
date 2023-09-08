import NProgress from '@/utils/nprogress';
import router from '@/router/index';

NProgress.configure({ showSpinner: false });

// eslint-disable-next-line no-unused-vars
router.beforeEach(async (_, __, next) => {
  NProgress.start();
  next();
});

router.afterEach(() => {
  NProgress.done();
});
