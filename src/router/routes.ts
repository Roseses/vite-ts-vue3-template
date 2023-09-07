const routes = [
  {
    path: '/',
    redirect: '/login',
    component: () => import('@/views/login.vue'), //路由懒加载
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login.vue'), //路由懒加载
  },
  {
    path: '/home',
    component: () => import('@/views/home.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('@/views/404.vue'),
  },
];

export default routes;
