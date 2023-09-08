import NProgress from '@/utils/nprogress';
import { MessagePlugin } from 'tdesign-vue-next';
import { getPermissionStore, getUserStore } from '@/store';
import router from '@/router';
import { LOGIN_URL } from '@/config/global';

NProgress.configure({ showSpinner: false });

router.beforeEach(async (to, from, next) => {
  NProgress.start();

  const userStore = getUserStore();
  const permissionStore = getPermissionStore();
  const { whiteListRouters } = permissionStore;

  const { token } = userStore;
  if (token) {
    if (to.path === LOGIN_URL) {
      next();
      return;
    }

    const { roles } = userStore;

    if (roles && roles.length > 0) {
      next();
    } else {
      try {
        await userStore.getUserInfo();

        const { roles } = userStore;

        await permissionStore.initRoutes(roles);

        if (router.hasRoute(to.name)) {
          next();
        } else {
          next(`/`);
        }
      } catch (error) {
        MessagePlugin.error(error);
        next(`${LOGIN_URL}?redirect=${to.path}`);
        NProgress.done();
      }
    }
  } else {
    /* white list router */
    if (whiteListRouters.indexOf(to.path) !== -1) {
      next();
    } else {
      next(`${LOGIN_URL}?redirect=${to.path}`);
    }
    NProgress.done();
  }
});

router.afterEach((to) => {
  if (to.path === LOGIN_URL) {
    const userStore = getUserStore();
    const permissionStore = getPermissionStore();

    userStore.logout();
    permissionStore.restore();
  }
  NProgress.done();
});
