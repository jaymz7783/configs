module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  plugins: ['@typescript-eslint', 'import', 'react', 'react-hooks', 'prettier'],
  extends: [
    './lint.js',
    'plugin:react/recommended', // Uses the recommended rules from @eslint-plugin-react
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from @typescript-eslint/eslint-plugin,
    'plugin:prettier/recommended', // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors.
    'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    'prettier/react'
  ],
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      jsx: true // Allows for the parsing of JSX
    }
  },
  settings: {
    react: {
      version: 'detect' // Tells eslint-plugin-react to automatically detect the version of React to use
    }
  },
  rules: {
    'prettier/prettier': ['warn', { 'quoteProps': 'preserve' }],
    'no-loop-func': 'off',
    '@typescript-eslint/no-loop-func': ['error'],
    'default-param-last': 'off',
    '@typescript-eslint/default-param-last': ['error'],
    'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-constructor': ['warn'],
    'dot-notation': 'off',
    '@typescript-eslint/dot-notation': ['error'],
    quotes: 'off',
    '@typescript-eslint/quotes': ['warn', 'single', { allowTemplateLiterals: true }],
    semi: 'off',
    '@typescript-eslint/semi': ['warn', 'never'],
    'comma-dangle': 'off',
    '@typescript-eslint/comma-dangle': ['error', 'never'],
    'import/first': ['error'],
    'lines-between-class-members': 'off',
    '@typescript-eslint/lines-between-class-members': ['warn', 'always'],
    camelcase: 'off',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'default',
        format: ['camelCase']
      },

      {
        selector: 'variable',
        format: ['camelCase', 'PascalCase', 'UPPER_CASE']
      },
      {
        selector: 'parameter',
        format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
        leadingUnderscore: 'allow'
      },
      {
        selector: 'memberLike',
        format: ['camelCase', 'PascalCase', 'snake_case'],
        leadingUnderscore: 'allow'
      },
      {
        selector: 'memberLike',
        modifiers: ['private'],
        format: ['camelCase'],
        leadingUnderscore: 'require'
      },

      {
        selector: 'typeLike',
        format: ['PascalCase']
      },
      {
        selector: 'interface',
        format: ['PascalCase'],
        prefix: ['I']
      },
      {
        selector: [
          'classProperty',
          'objectLiteralProperty',
          'typeProperty',
          'classMethod',
          'objectLiteralMethod',
          'typeMethod',
          'accessor',
          'enumMember'
        ],
        format: null,
        modifiers: ['requiresQuotes']
      },
      {
        selector: 'memberLike',
        format: null,
        filter: {
          regex: '(S*[a-zA-Z_]S*[_]S*)',
          match: true
        }
      }
    ],
    '@typescript-eslint/ban-ts-comment': [
      'warn',
      {
        'ts-expect-error': 'allow-with-description',
        'ts-ignore': 'allow-with-description',
        'ts-nocheck': true,
        'ts-check': false
      }
    ],
    '@typescript-eslint/ban-types': [
      'error',
      {
        'types': {
          'object': false,
          '{}': false
        },
        'extendDefaults': true
      }
    ],
    '@typescript-eslint/explicit-function-return-type': ['warn', { 'allowExpressions': true }],
    '@typescript-eslint/explicit-module-boundary-types': ['warn'],
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    'no-empty-function': 'off',
    '@typescript-eslint/no-empty-function': ['error', { 'allow': ['arrowFunctions'] }],
    '@typescript-eslint/no-unused-vars': ['warn'],
    '@typescript-eslint/no-inferrable-types': 'off',
    'jsx-quotes': ['warn', 'prefer-double'],
    'react/destructuring-assignment': ['warn', 'always'],
    'react/no-unescaped-entities': 'off',
    'react/prop-types': 'off',
    'react/display-name': 'off',
    'react/function-component-definition': [
      'error',
      {
        'namedComponents': 'arrow-function',
        'unnamedComponents': 'arrow-function'
      }
    ],
    'react/no-access-state-in-setstate': ['error'],
    'react/no-array-index-key': 'off',
    'react/no-children-prop': ['error'],
    'react/no-danger': ['error'],
    'react/no-danger-with-children': ['error'],
    'react/no-deprecated': ['warn'],
    'react/no-direct-mutation-state': ['error'],
    'react/no-find-dom-node': ['error'],
    'react/no-is-mounted': ['warn'],
    'react/no-multi-comp': ['error', { 'ignoreStateless': true }],
    'react/no-this-in-sfc': ['error'],
    'react/no-unknown-property': ['error'],
    'react/no-unsafe': ['error'],
    'react/no-unused-state': ['warn'],
    'react/prefer-es6-class': ['error'],
    'react/prefer-read-only-props': ['error'],
    'react/prefer-stateless-function': ['error'],
    'react/void-dom-elements-no-children': ['error'],
    'react/self-closing-comp': ['warn'],
    'react/react-in-jsx-scope': ['error'],
    'react/jsx-boolean-value': ['warn', 'never'],
    'react/jsx-curly-brace-presence': ['warn'],
    'react/jsx-fragments': ['warn', 'syntax'],
    'react/jsx-key': ['error'],
    'react/jsx-no-duplicate-props': ['error']
  }
}
