module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    commonjs: true
  },
  extends: {
    'eslint/recommended',
    'react/recommended',
    'prettier/recommended',
    'airbnb',
    'eslint-config-wesbos',
    'eslint-plugin-prettier/recommended',
    'babel-eslint',
    'babel-eslint-plugin',
    'eslint-import-resolver-babel-module'
  }
  globals: {
    fetch: false,
    Atomics: false,
    SharedArrayBuffer: false
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 6,
    sourceType: module,
    parser: 'babel-eslint'
  },
  plugins: [
    'react', 'prettier', 'eslint-plugin-jsx-a11y', 'eslint-plugin-prettier', 'eslint-plugin-react'
  ],
  rules: {
    ident: ['error, 2'],
    'linebreak-style': ['error'],
    quotes: ['warn', 'single'],
    semi: ['error', 'always'],
    'no-console': 1,
    'no-debugger': 1,
    'no-var': 1,
    'no-trailing-spaces': 0,
    'eol-last': 0,
    'no-underscore-dangle': 0,
    'no-alert': 0,
    'no-lone-blocks': 0,   
    'import/extensions': 1,
    'import/no-named-as-default': 0,
    singleQuote: true,
        'prettier/prettier': 'error'
    }
}
