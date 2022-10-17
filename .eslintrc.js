module.exports = {
  env: {
    browser: true,
    node: true
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'next/core-web-vitals'
  ],
  root: true,
  rules: {
    'jest/no-mocks-import': 'off',
    '@typescript-eslint/array-type': 'off',
    '@typescript-eslint/consistent-type-definitions': 'off',
    '@typescript-eslint/explicit-member-accessibility': [
      'off',
      {
        'accessibility': 'explicit'
      }
    ],
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/member-ordering': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-parameter-properties': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/prefer-for-of': 'off',
    '@typescript-eslint/space-within-parens': [
      'off',
      'never'
    ],
    '@typescript-eslint/type-annotation-spacing': 'off',
    'arrow-body-style': 'off',
    'arrow-parens': [
      'off',
      'as-needed'
    ],
    'camelcase': 'off',
    'capitalized-comments': 'off',
    'comma-dangle': 'off',
    'complexity': 'off',
    'constructor-super': 'warn',
    'curly': [
      'warn',
      'multi-line'
    ],
    'dot-notation': 'off',
    'eol-last': 'off',
    'eqeqeq': [
      'warn',
      'smart'
    ],
    'guard-for-in': 'warn',
    'id-blacklist': [
      'warn',
      'any',
      'Number',
      'number',
      'String',
      'string',
      'Boolean',
      'boolean',
      'Undefined',
      'undefined'
    ],
    'id-match': 'warn',
    'import/order': 'off',
    'linebreak-style': 'off',
    'max-classes-per-file': 'off',
    'max-len': 'off',
    'new-parens': 'off',
    'newline-per-chained-call': 'off',
    'no-bitwise': 'off',
    'no-caller': 'warn',
    'no-cond-assign': 'warn',
    'no-console': 'off',
    'no-debugger': 'off',
    'no-empty': 'warn',
    'no-eval': 'warn',
    'no-extra-semi': 'off',
    'no-fallthrough': 'off',
    'no-invalid-this': 'off',
    'no-irregular-whitespace': 'off',
    'no-multiple-empty-lines': [
      'error',
      {
        'max': 1,
        'maxEOF': 0
      }
    ],
    'no-new-wrappers': 'warn',
    'no-throw-literal': 'warn',
    'no-trailing-spaces': 'off',
    'no-undef-init': 'warn',
    'no-underscore-dangle': 'warn',
    'no-unsafe-finally': 'warn',
    'no-unused-expressions': 'off',
    'no-unused-labels': 'warn',
    'object-shorthand': 'warn',
    'one-var': [
      'warn',
      'never'
    ],
    'object-curly-spacing': ['error', 'always'],
    'padded-blocks': [2, 'never'],
    'prefer-const': 'warn',
    'quote-props': 'off',
    quotes: ['error', 'single'],
    'radix': 'off',
    'semi': ['error', 'never'],
    'space-before-function-paren': 'off',
    'spaced-comment': 'warn',
    'use-isnan': 'warn',
    'valid-typeof': 'off'
  }
}
