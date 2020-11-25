module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  plugins: [
    '@typescript-eslint',
  ],
  // settings: {
  //   "import/resolver": {
  //       webpack: {
  //           config: './build/webpack.base.conf.js'  // 指定webpack配置文件路径
  //       }
  //   }
  // },
  extends: [
    'airbnb-typescript',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    'linebreak-style': ["error", "windows"],
  }
};