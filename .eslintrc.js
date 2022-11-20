//.eslintrc.js
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "@vue/prettier",
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    // 1. 接入 prettier 的规则
    "prettier",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  // 2. 加入 prettier 的 eslint 插件
  plugins: ["vue", "@typescript-eslint", "prettier"],
  rules: {
    // 3. 注意要加上这一句，开启 prettier 自动修复的功能
    "prettier/prettier": "error",
    "@typescript-eslint/ban-ts-comment": "error",
    "@typescript-eslint/no-explicit-any": "warn",
    "vue/multi-word-component-names": "off",
  },
};
