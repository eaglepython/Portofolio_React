module.exports = {
  root: true,
  env: { 
    browser: true, 
    es2020: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    '@vitejs/eslint-config-react',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { 
    ecmaVersion: 'latest', 
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  settings: { 
    react: { 
      version: '18.2' 
    } 
  },
  plugins: ['react-refresh'],
  rules: {
    // React specific rules
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'react/prop-types': 'off', // Using TypeScript for prop validation
    'react/react-in-jsx-scope': 'off', // Not needed with new JSX transform
    'react/jsx-uses-react': 'off', // Not needed with new JSX transform
    'react/jsx-no-target-blank': ['error', { 
      allowReferrer: false,
      enforceDynamicLinks: 'always'
    }],
    'react/jsx-key': ['error', { 
      checkFragmentShorthand: true,
      checkKeyMustBeforeSpread: true
    }],
    'react/no-array-index-key': 'warn',
    'react/no-danger': 'warn',
    'react/jsx-pascal-case': 'error',
    'react/self-closing-comp': 'error',
    'react/jsx-curly-brace-presence': ['error', { 
      props: 'never', 
      children: 'never' 
    }],

    // React Hooks rules
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',

    // General JavaScript rules
    'no-unused-vars': ['error', { 
      vars: 'all',
      args: 'after-used',
      ignoreRestSiblings: true,
      argsIgnorePattern: '^_'
    }],
    'no-console': ['warn', { 
      allow: ['warn', 'error'] 
    }],
    'no-debugger': 'error',
    'no-alert': 'warn',
    'no-var': 'error',
    'prefer-const': 'error',
    'prefer-template': 'error',
    'template-curly-spacing': ['error', 'never'],
    'object-shorthand': 'error',
    'prefer-destructuring': ['error', {
      array: true,
      object: true
    }, {
      enforceForRenamedProperties: false
    }],

    // Code style rules
    'indent': ['error', 2, { 
      SwitchCase: 1,
      ignoredNodes: ['JSXElement', 'JSXElement > *', 'JSXAttribute', 'JSXIdentifier', 'JSXNamespacedName', 'JSXMemberExpression', 'JSXSpreadAttribute', 'JSXExpressionContainer', 'JSXOpeningElement', 'JSXClosingElement', 'JSXText', 'JSXEmptyExpression', 'JSXSpreadChild']
    }],
    'quotes': ['error', 'single', { 
      avoidEscape: true,
      allowTemplateLiterals: true 
    }],
    'semi': ['error', 'never'],
    'comma-dangle': ['error', 'never'],
    'comma-spacing': ['error', { 
      before: false, 
      after: true 
    }],
    'comma-style': ['error', 'last'],
    'brace-style': ['error', '1tbs', { 
      allowSingleLine: true 
    }],
    'curly': ['error', 'all'],
    'space-before-blocks': 'error',
    'keyword-spacing': 'error',
    'space-infix-ops': 'error',
    'space-unary-ops': 'error',
    'space-in-parens': ['error', 'never'],
    'array-bracket-spacing': ['error', 'never'],
    'object-curly-spacing': ['error', 'always'],
    'computed-property-spacing': ['error', 'never'],
    'func-call-spacing': ['error', 'never'],
    'key-spacing': ['error', { 
      beforeColon: false, 
      afterColon: true 
    }],

    // Import/Export rules
    'no-duplicate-imports': 'error',
    'import/order': ['error', {
      groups: [
        'builtin',
        'external', 
        'internal',
        'parent',
        'sibling',
        'index'
      ],
      'newlines-between': 'never',
      alphabetize: {
        order: 'asc',
        caseInsensitive: true
      }
    }],

    // Error prevention
    'no-undef': 'error',
    'no-unused-expressions': ['error', { 
      allowShortCircuit: true,
      allowTernary: true 
    }],
    'no-unreachable': 'error',
    'no-constant-condition': 'error',
    'no-dupe-keys': 'error',
    'no-duplicate-case': 'error',
    'no-empty': 'error',
    'no-ex-assign': 'error',
    'no-extra-boolean-cast': 'error',
    'no-extra-semi': 'error',
    'no-func-assign': 'error',
    'no-inner-declarations': 'error',
    'no-invalid-regexp': 'error',
    'no-irregular-whitespace': 'error',
    'no-obj-calls': 'error',
    'no-sparse-arrays': 'error',
    'no-unexpected-multiline': 'error',
    'use-isnan': 'error',
    'valid-typeof': 'error',

    // Best practices
    'eqeqeq': ['error', 'always'],
    'no-eval': 'error',
    'no-implied-eval': 'error',
    'no-new-func': 'error',
    'no-return-assign': 'error',
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-throw-literal': 'error',
    'no-useless-concat': 'error',
    'radix': 'error',
    'yoda': 'error'
  },
  overrides: [
    {
      files: ['*.jsx', '*.tsx'],
      rules: {
        'indent': 'off' // Disable indent rule for JSX files due to conflicts
      }
    },
    {
      files: ['vite.config.js', 'tailwind.config.js', 'postcss.config.js'],
      env: {
        node: true
      }
    }
  ]
}