module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.jsx', 'js'],
      },
    ],
    'import/prefer-default-export': 'off',
    'no-console': ['error', { allow: ['tron'] }],
    'jsx-a11y/control-has-associated-label': 'off',
    'arrow-parens': 'off',
    'no-param-reassign': 'off'
  },
};
