module.exports = {
  root: true,

  env: {
    node: true,
    jest: true
  },

  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-prototype-builtins': 'off',
    'vue/no-unused-components': 2,
    'vue/custom-event-name-casing': 'off',
    'vue/multi-word-component-names': 0
  },

  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ],
      env: {
        jest: true
      }
    }
  ],

  extends: [
    'plugin:vue/recommended',
    'plugin:promise/recommended',
    '@vue/standard'
  ]
}
