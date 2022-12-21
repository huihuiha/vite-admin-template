import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';
import { createI18n } from 'vue-i18n';
import messages from '@intlify/vite-plugin-vue-i18n/messages';

import 'element-plus/theme-chalk/dark/css-vars.css';
import 'uno.css';

// svgs
import { install as SvgInstall } from '@/plugins/svg';
import 'virtual:svg-icons-register';

// plugins
const app = createApp(App);
SvgInstall({ app });
const pinia = createPinia();
const i18n = createI18n({
  legacy: false,
  locale: 'en',
  messages,
});

app.use(i18n);
app.use(router);
app.use(pinia);

app.mount('#app');
