module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
    'cypress/globals': true
  },
  'extends': [
    'eslint:recommended',
     'plugin:cypress/recommended'
  ],
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module',
  },
  'rules': {
      // enable additional rules
      indent: ['error', 4],
      'linebreak-style': ['error', 'unix'],
      quotes: ['error', 'single'],
      semi: ['error', 'always'],

      // override configuration set by extending "eslint:recommended"
      'no-empty': 'warn',
      'no-cond-assign': ['error', 'always'],

      // disable rules from base configurations
      'for-direction': 'off',
      'cypress/no-unnecessary-waiting': 'off'
  },
};
