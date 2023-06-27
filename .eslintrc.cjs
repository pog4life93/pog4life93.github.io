/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'prettier/prettier': [
      'warn',
      {
        tabWidth: 2,
        singleQuote: true,
        printWidth: 100,
        endOfLine: 'auto',
        htmlWhiteSpaceSensitivity: 'ignore',
        bracketSameLine: true,
      },
    ],
  },
};
