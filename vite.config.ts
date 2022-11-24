import { defineConfig } from 'vite';
import path from 'path';

import vue from '@vitejs/plugin-vue';

import Unocss from 'unocss/vite';
import { presetUno, presetAttributify, presetIcons } from 'unocss';
import viteEslint from 'vite-plugin-eslint';
import viteImagemin from 'vite-plugin-imagemin';
import Pages from 'vite-plugin-pages';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import VueI18n from "@intlify/vite-plugin-vue-i18n";

export default defineConfig({
  resolve: {
    alias: {
      '@/': `${path.resolve(__dirname, 'src')}/`,
      '@assets/': `${path.resolve(__dirname, 'src/assets')}/`,
      '@hooks/': `${path.resolve(__dirname, 'src/hooks')}/`,
      '@components/': `${path.resolve(__dirname, 'src/components')}/`,
      '@store/': `${path.resolve(__dirname, 'src/store')}/`,
    },
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
  },
  plugins: [
    vue(),
    // CSS 原子化
    Unocss({
      presets: [presetUno(), presetAttributify(), presetIcons()],
    }),
    // eslint检查
    viteEslint(),
    // 图片压缩
    viteImagemin({
      // 无损压缩配置，无损压缩下图片质量不会变差
      optipng: {
        optimizationLevel: 7,
      },
      // 有损压缩配置，有损压缩下图片质量可能会变差
      pngquant: {
        quality: [0.8, 0.9],
      },
      // svg 优化
      svgo: {
        plugins: [
          {
            name: 'removeViewBox',
          },
          {
            name: 'removeEmptyAttrs',
            active: false,
          },
        ],
      },
    }),
    // 约定式路由
    Pages({
      dirs: [{ dir: 'src/pages', baseRoute: '/' }],
      importMode: "async",
      extensions: ['vue', 'md'],
    }),
    // 按需引入
    AutoImport({
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/, /\.vue\?vue/, // .vue
        /\.md$/, // .md
      ],
      imports: [
        'vue',
        'vue-router',
        'vue-i18n',
        '@vueuse/core',
        '@vueuse/head'
      ],
      resolvers: [ElementPlusResolver()],
      dts: 'auto-imports.d.ts',
      dirs: [
        'src/hooks',
        'src/store'
      ],
      eslintrc: {
        enabled: true, // Default `false`
        filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
        globalsPropValue: true, // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
      },
      vueTemplate: true, //支持Vue 模版自动引入
    }),
    // 组件按需引入
    Components({
      extensions: ['vue', 'md'],
      resolvers: [ElementPlusResolver()],
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      dts: 'components.d.ts',
    }),
    // 国际化
    VueI18n({
      runtimeOnly: true,
      compositionOnly: true,
      include: [path.resolve(__dirname, "locales/**")],
    }),
  ],
});
