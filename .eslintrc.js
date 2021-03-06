module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  extends: ['plugin:vue/recommended', 'plugin:prettier/recommended', 'prettier/@typescript-eslint'],
  // required to lint *.vue files
  plugins: ['vue', 'prettier', '@typescript-eslint'],
  // add your custom rules here
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-unused-vars': "off",
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        args: 'none',
      },
    ],
    'max-len': [
      'error',
      {
        code: 140,
        ignoreComments: true,
        ignoreTrailingComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      },
    ],
    "vue/component-name-in-template-casing": [
      "error",
      "kebab-case"
    ],
    "vue/max-attributes-per-line": ["error", {
      "singleline": 3,
      "multiline": {
        "max": 3,
        "allowFirstLine": false
      }
    }],
    "vue/singleline-html-element-content-newline": "off",
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'es5',
        printWidth: 140,
        semi: false,
      },
    ],
    "vue/html-self-closing": ["error", {
      "html": {
        "void": "always",
        }
    }],
  },
}
