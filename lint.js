module.exports = {
  plugins: ['prettier'],
  extends: [
    'plugin:prettier/recommended' // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors.
  ],
  rules: {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    'prettier/prettier': ['warn', { 'quoteProps': 'preserve' }],
    'no-new-object': ['error'],
    'object-shorthand': ['error'],
    'prefer-object-spread': ['error'],
    'prefer-destructuring': [
      'error',
      {
        VariableDeclarator: {
          array: false,
          object: true
        },
        AssignmentExpression: {
          array: false,
          object: false
        }
      },
      {
        enforceForRenamedProperties: false
      }
    ],
    'prefer-template': ['error'],
    'no-useless-concat': ['error'],
    'no-eval': ['error'],
    'func-style': ['error', 'expression'],
    'no-loop-func': ['error'],
    'default-param-last': ['error'],
    'no-new-func': ['error'],
    'no-useless-constructor': ['error'],
    'dot-notation': ['error'],
    eqeqeq: ['warn', 'smart'],
    'quote-props': ['error', 'as-needed', { 'unnecessary': false }],
    'quotes': ['warn', 'single', { allowTemplateLiterals: true }],
    'semi': ['warn', 'never'],
    'comma-dangle': ['error', 'never'],
    'no-console': ['warn'],
    'lines-between-class-members': ['warn', 'always'],
    'no-mixed-operators': ['error'],
    'no-new-wrappers': ['error'],
    'spaced-comment': [
      'error',
      'always',
      {
        'line': {
          'markers': ['/'],
          'exceptions': ['-', '+']
        },
        'block': {
          'markers': ['!'],
          'exceptions': ['/', '*'],
          'balanced': true
        }
      }
    ],
    'id-length': [
      'warn',
      {
        exceptions: ['a', 'b', 'c', 'e', 'i', 'j', 'k', 'l', 'x', 'y', 'z', '_']
      }
    ],
    camelcase: ['error'],
    'padding-line-between-statements': [
      'warn',
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
    ]
  }
}
