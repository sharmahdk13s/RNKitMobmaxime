module.exports = {
  env: {
    browser: true,
    es2024: true,
  },
  root: true,
  extends: [
    '@react-native',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'airbnb',
    'airbnb-typescript',
    'airbnb-typescript/base',
    'standard',
  ],
  ignorePatterns: ['plugins/**/*', 'metro.config.js'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
    tsconfigRootDir: '.',
  },
  plugins: ['@typescript-eslint', 'react'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.ts', '.tsx'],
      },
      typescript: {},
    },
    react: {
      version: '18.x',
    },
  },
  rules: {
    '@typescript-eslint/quotes': 0,
    '@typescript-eslint/comma-dangle': 0,
    'react/function-component-definition': 0,
    'object-curly-newline': 0,
    'react/jsx-props-no-spreading': 0,
    'import/no-cycle': 0,
    '@typescript-eslint/no-shadow': ['error'],
    'no-shadow': 0,
    'no-undef': 0,
    'react/require-default-props': 0,
  },
};
