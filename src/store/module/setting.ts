import { defineStore } from 'pinia';
import keys from 'lodash/keys';
import {
  COLOR_TOKEN,
  LIGHT_CHART_COLORS,
  DARK_CHART_COLORS,
  TColorSeries,
  generateColorMap,
  insertThemeStylesheet,
} from '@/config/color';
import STYLE_CONFIG from '@/config/style';
import { store } from '@/store';
import { Color } from 'tvision-color';
import { COLOR_OPTIONS_LIST } from '@/config/global';

const state = {
  ...STYLE_CONFIG,
  showSettingPanel: false,
  colorList: COLOR_TOKEN,
  chartColors: LIGHT_CHART_COLORS,
};

export type TState = typeof state;

export const useSettingStore = defineStore('setting', {
  state: () => state,
  getters: {
    showSidebar: (state) => state.layout !== 'top',
    showSidebarLogo: (state) => state.layout === 'side',
    showHeaderLogo: (state) => state.layout !== 'side',
    displayMode: (state) => {
      if (state.mode === 'auto') {
        const media = window.matchMedia('(prefers-color-scheme:dark)');
        if (media.matches) {
          return 'dark';
        }
        return 'light';
      }
      return state.mode;
    },
  },
  actions: {
    async changeMode(mode: 'dark' | 'light' | 'auto') {
      let theme = mode;

      if (mode === 'auto') {
        const media = window.matchMedia('(prefers-color-scheme:dark)');
        if (media.matches) {
          theme = 'dark';
        } else {
          theme = 'light';
        }
      }
      const isDarkMode = theme === 'dark';

      document.documentElement.setAttribute('theme-mode', isDarkMode ? 'dark' : '');

      this.chartColors = isDarkMode ? DARK_CHART_COLORS : LIGHT_CHART_COLORS;
    },
    changeBrandTheme(brandThemeContent: string) {
      try {
        if (COLOR_OPTIONS_LIST.includes(brandThemeContent) && brandThemeContent !== 'dynamic') {
          document.documentElement.setAttribute('theme-color', brandThemeContent);
          return;
        }
        const brandTheme = brandThemeContent === 'dynamic' ? '#0052D9' : brandThemeContent;
        const newPalette = Color.getPaletteByGradation({
          colors: [brandTheme],
          step: 10,
        })[0];
        const mode = this.displayMode;
        const colorKey = `${brandTheme}`;
        let colorMap = this.colorList[colorKey];
        if (colorMap === undefined) {
          colorMap = generateColorMap(brandTheme, newPalette, mode as 'light' | 'dark');
          // this.addColor({ [colorKey]: colorMap });
          this.colorList[colorKey] = colorMap;
        }
        insertThemeStylesheet(brandTheme, colorMap, mode as 'light' | 'dark');
        // eslint-disable-next-line
        console.log(brandTheme, '-----------主题色');
        document.documentElement.setAttribute('theme-color', brandTheme);
      } catch (e) {
        console.log(e, '----------主题色报错');
      }
    },
    addColor(payload: TColorSeries) {
      this.colorList = { ...this.colorList, ...payload };
    },
    updateConfig(payload: Partial<TState>) {
      for (const key in payload) {
        if (payload[key] !== undefined) {
          this[key] = payload[key];
        }
        if (key === 'mode') {
          this.changeMode(payload[key]);
        }
        if (key === 'brandTheme') {
          this.changeBrandTheme(payload[key]);
        }
      }
    },
  },
  persist: {
    paths: [...keys(STYLE_CONFIG), 'colorList', 'chartColors'],
  },
});

export function getSettingStore() {
  return useSettingStore(store);
}
