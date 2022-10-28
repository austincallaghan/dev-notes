module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
  plugins: ['svelte3', '@typescript-eslint', 'no-only-tests'],
  ignorePatterns: ['*.cjs'],
  overrides: [{ files: ['*.svelte'], processor: 'svelte3/svelte3' }],
  settings: {
    'svelte3/typescript': () => require('typescript'),
  },
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2019,
  },
  env: {
    browser: true,
    es2017: true,
    node: true,
  },
  rules: {
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        ignoreRestSiblings: true,
      },
    ],
    'max-lines-per-function': [
      'error',
      {
        max: 50,
        skipBlankLines: true,
        skipComments: true,
      },
    ],
    'max-lines': [
      'error',
      {
        max: 500,
        skipBlankLines: true,
      },
    ],
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'max-depth': ['error', 4],
    eqeqeq: ['error', 'always'],
    'max-params': ['error', 3],
    'no-nested-ternary': 'error',
    'no-magic-numbers': [
      'error',
      {
        ignore: [-1, 0, 1, 2, 3, 4, 100],
        ignoreArrayIndexes: true,
      },
    ],
    complexity: [
      'error',
      {
        max: 10,
      },
    ],
  },
};
