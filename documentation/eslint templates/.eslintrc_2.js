module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  env: {
    browser: true,
    es6: true,
    node: true,
    commonjs: true
  },
  settings: {
    ECMAScript: 8,
    jsx: true,
    react: {
      pragma: "react",
      version: "16.10.2",
      "import/resolver": {
        "eslint-import-resolver-babel-module": {
          config: "./index.js"
        }
      }
    }
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
      modules: true,
      experimentalDecorators: true,
      experimentalRefreshOnResume: true,
      experimentalObjectRestSpread: true
    },
    project: "./prettier after/webpack.config.js"
  },
  extends: [
    "eslint:recommended",
    "plugin:import/recommended",
    "plugin: @typescript-eslint/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:react/recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended",
    "prettier/standard",
    "prettier/react"
  ],
  globals: {
    $: false
  },
  plugins: [
    "@typescript-eslint",
    "jsx-a11y",
    "import",
    "react",
    "prettier",
    "html"
  ],
  rules: {
    "@typescript-eslint/rule-name": "error",
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: true,
        optionalDependencies: true,
        peerDependencies: false
      }
    ],
    "jsx-a11y/label-has-for": "off",
    "jsx-quotes": ["warn", "prefer-double"],
    "array-bracket-spacing": [2, "never"],
    "comma-dangle": ["error", "never"],
    "consistent-return": "error",
    "constructor-super": "warn",
    "flowtype/boolean-style": ["error", "boolean"],
    ident: ["error", 4],
    "import/imports-first": ["error", "absolute-first"],
    "import/newline-after-import": "error",
    "import/no-unresolved": "off",
    "import/prefer-default-export": "off",

    "linebreak-style": ["off", "eol-last"],
    "max-len": [
      "warn",
      {
        code: 140,
        comments: 80,
        ignoreUrls: true,
        ignoreComments: true,
        ignoreTrailingComments: true,
        ignoreTemplateLiterals: true,
        ignoreUrls: true,
        ignoreRegExpLiterals: true,
        ignoreStrings: true
      }
    ],
    "no-underscore-dangle": "off",
    "no-return-assign": "off",
    "object-curly-newline": [
      "error",
      {
        ImportDeclaration: {
          multiline: true,
          minProperties: 2
        }
      }
    ],
    "object-property-newline": "error",
    consistent: "warn",
    "max-depth": ["warn", 10],
    "no-alert": "off",
    "no-await-in-loop": "error",
    "no-const-assign": "warn",
    "no-console": "off",
    "no-const-assign": "error",
    "no-constant-condition": "error",
    "no-delete-var": "error",
    "no-eq-null": "error",
    "no-duplicate-case": "error",
    "no-duplicate-imports": "error",
    "no-empty-function": "warn",
    "no-else-return": "warn",
    "no-extra-semi": "error",
    "no-mixed-operators": "warn",
    "no-plusplus": "warn",
    "no-param-reassign": "warn",
    "no-restricted-syntax": "warn",
    "no-undef": "warn",
    "no-unreachable": "warn",
    "no-unused-vars": [
      "warn",
      {
        vars: "all",
        args: "none",
        ignoreRestSiblings: false
      }
    ],
    "no-this-before-super": "warn",
    "object-curly-spacing": ["error", "never"],
    "prefer-destructuring": "off",
    "prettier/prettier": [
      "error",
      {
        singleQuote: true,
        parser: "flow",
        usePrettierrc: true
      }
    ],
    quotes: ["error", "single"],
    "react/jsx-filename-extensions": [
      "warn",
      {
        extensions: ["*.js", "*.jsx"]
      }
    ],
    "react/default-props-match-prop-types": "off",
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "react/no-this-in-sfc": "off",
    "react/destructuring-assignment": "off",
    "react/jsx-one-expresion-per-line": "off",
    "react/jsx-indent": "warn",
    "react/jsx-first-prop-new-line": ["warn", "multiline"],
    "react/jsx-max-props-per-line": [
      "warn",
      {
        maximum: 1
      }
    ],
    "react/prop-types": "warn",
    "react/require-default-props": "warn",
    semi: ["warn", "always"],
    "space-unary-ops": 2,
    tabwidth: 2,
    "trailing-comma": "off",
    "global-require": "warn",
    "valid-jsdoc": "warn",
    "valid-typeof": "error"
  }
};
