//.eslintrc.js
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ["@vue/prettier", "plugin:vue/vue3-essential", "eslint:recommended"],
  parserOptions: {
    ecmaVersion: 13,
    sourceType: "module",
  },
  parser: "babel-eslint",
  plugins: ["vue"],
  rules: {
    "prettier/prettier": "warn",
  },
};
