import LogoFull from '@/assets/assets-logo-full.svg?component';
import router from '@/router';
/**
 * 全局布局配置
 */
export default {
  showFooter: true,
  isSidebarCompact: false,
  showBreadcrumb: true,
  mode: 'light',
  layout: 'mix',
  splitMenu: true,
  isFooterAside: false,
  isSidebarFixed: true,
  isHeaderFixed: true,
  isUseTabsRouter: true,
  showHeader: true,
  backgroundTheme: 'blueGrey',
  brandTheme: 'default',
};

/**
 *  头部公共组件配置
 */
export const HeaderConfig = {
  // 公共布局Header左边的logo
  logo: LogoFull,
  // logo点击的事件
  logoClickFnc: (url: string) => {
    if (!url) return;
    router.push(url);
  },
  // 展示搜索框
  showSearch: false,
  // 展示信息框
  showNotice: true,
  // 代码仓库 与 帮助文档
  gitAndDocuList: [
    {
      show: true,
      content: '代码仓库',
      icon: 'logo-github',
      onClick: () => {},
    },
    {
      show: true,
      content: '帮助文档',
      icon: 'help-circle',
      onClick: () => {},
    },
  ],
  // 布局配置的按钮在什么环境下不展示
  noConfigSetting: ['production'],
};
