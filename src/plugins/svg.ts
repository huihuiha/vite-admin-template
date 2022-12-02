// 1.把svg当做组件使用
// 2.svg组件全局注册
import { App } from "vue";
import SvgIcon from "@components/SvgIcon.vue";

export const install = ({ app }: {app: App}) => {
  app.component("SvgIcon", SvgIcon);
};
