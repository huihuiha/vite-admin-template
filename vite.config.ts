import { defineConfig } from "vite";
import path from 'path';

import vue from "@vitejs/plugin-vue";
import Unocss from 'unocss/vite'
import { presetUno, presetAttributify, presetIcons } from "unocss";

export default defineConfig({
  resolve: {
    alias: {
      '@/': `${path.resolve(__dirname, 'src')}/`,
    },
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
  },
  plugins: [
    vue(),
    Unocss({
      presets: [presetUno(), presetAttributify(), presetIcons()],
    })],
});
