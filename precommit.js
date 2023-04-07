module.exports = {
  extends: ['./base.js'],
  rules: {
    'no-console': ['error'],
    'id-length': [
      'error',
      {
        exceptions: ['a', 'b', 'c', 'e', 'i', 'x', 'y', 'z']
      }
    ],
    'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-constructor': ['error'],
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: 'block-like' },
      { blankLine: 'always', prev: '*', next: 'return' },
      { blankLine: 'always', prev: 'const', next: 'expression' },
      { blankLine: 'always', prev: 'var', next: 'expression' },
      { blankLine: 'always', prev: 'let', next: 'expression' },
      { blankLine: 'always', prev: 'block-like', next: 'const' },
      { blankLine: 'always', prev: 'block-like', next: 'var' },
      { blankLine: 'always', prev: 'block-like', next: 'let' },
      { blankLine: 'always', prev: 'expression', next: 'const' },
      { blankLine: 'always', prev: 'expression', next: 'var' },
      { blankLine: 'always', prev: 'expression', next: 'let' }
    ],
    '@typescript-eslint/ban-ts-comment': [
      'error',
      {
        'ts-expect-error': 'allow-with-description',
        'ts-ignore': 'allow-with-description',
        'ts-nocheck': true,
        'ts-check': false
      }
    ],
    '@typescript-eslint/no-unused-vars': ['error'],
    'react/no-unused-state': ['error']
  }
}
