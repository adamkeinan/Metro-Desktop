module.exports = {
  root: true,
  extends: [
    "babel",
    "eslint:recommended",
    "react:recommended",
    "prettier:recommended",
    "prettier/react:recommended"
  ],
  parser: "@typescript-eslint/parser",
  env: {
    browser: true,
    es6: true,
    node: true,
    commonjs: true
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
  settings: {
    ECMAScript: 8,
    jsx: true,
    react: {
      pragma: "react",
      version: "16.11.0",
      "import/resolver": {
        "eslint-import-resolver-babel-module": {
          config: "./index.js"
        }
      }
    }
  },
  globals: {
    $: false
  },
  plugins: [
    "@babel/development",
    "jsx-a11y",
    "import",
    "react",
    "prettier",
    "html"
  ],
  rules: {
    "array-bracket-newline": ["error", "consistent"],
    "block-spacing": ["error", "always"],
    "brace-style": ["error", "1tbs"],
    "camelcase": ["error", { "properties": "always" }],
    "comma-dangle": [
    "error",
    {
      "arrays": "always-multiline",
      "objects": "always-multiline",
      "imports": "always-multiline",
      "exports": "always-multiline",
      "functions": "always-multiline"
    }
    ],
    "comma-spacing": ["error", { "before": false, "after": true }],
    "curly": ["error", "all"],
    "eqeqeq": ["error", "always"],
    "eol-last": ["error", "always"],
    "indent": ["error", 2],
    "lines-around-comment": [
      "error",
      {
        "beforeBlockComment": true
      }
    ],
    "lines-between-class-members": [
      "error",
      "always",
      {
        "exceptAfterSingleLine": true
      }
    ],
    "max-statements-per-line": ["error", { "max": 1 }],
    "multiline-ternary": ["error", "always-multiline"],
    "new-cap": ["error", { "newIsCap": true, "capIsNew": true, "properties": true }],
    "new-parens": ["error"],
    "newline-per-chained-call": ["error", { "ignoreChainWithDepth": 3 }],
    "no-array-constructor": ["error"],
    "no-console": ["off"],
    "no-dupe-args": "off", // doesn't play nice with decorators in constructors
    "no-else-return": ["error", { "allowElseIf": false }],
    "no-invalid-this": ["error"],
    "no-multi-spaces": [
      "error",
      {
        "exceptions": {
          "ImportDeclaration": true,
          "VariableDeclarator": true
        }
      }
    ],
    "no-new": ["error"],
    "no-new-func": ["error"],
    "no-lonely-if": ["error"],
    "no-multi-assign": ["error"],
    "no-redeclare": "off", // doesn't play nice with decorators in constructors
    "no-unneeded-ternary": ["error"],
    "no-var": ["error"],
    "no-whitespace-before-property": ["error"],
    "object-curly-newline": ["error", { "multiline": true, "consistent": true }],
    "one-var-declaration-per-line": ["error", "initializations"],
    "prefer-const": "error",
    "prefer-rest-params": "error",
    "prefer-spread": "error",
    "quotes": ["error", "single", { "avoidEscape": true, "allowTemplateLiterals": true }],
    "rest-spread-spacing": ["error", "never"],
    "semi": ["error", "never"],
    "space-in-parens": ["error", "never"],
    "spaced-comment": ["error", "always"],

    "import/order": ["error", { "newlines-between":  "always-and-inside-groups" }],
    "import/no-extraneous-dependencies": [
      "error", {
        devDependencies: true,
        optionalDependencies: true,
        peerDependencies: true
      }
    ],
    "jsx-a11y/label-has-for": "off",
    "jsx-quotes": ["warn", "prefer-double"],
    "array-bracket-spacing": [2, "never"],
    "comma-dangle": ["error", "never"],
    "consistent-return": "error",
    "constructor-super": "warn",
    "ident": ["error", 4],
    "import/imports-first": ["error", "absolute-first"],
    "import/newline-after-import": "error",
    "import/no-unresolved": "off",
    "import/prefer-default-export": "off",
    "linebreak-style": ["off", "eol-last"],
    "max-len": [
      "warn", {
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
      "error", {
        ImportDeclaration: {
        multiline: true,
        minProperties: 2
        }
      }
    ],
    "object-property-newline": "error",
    "consistent": "warn",
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
    "no-unused-vars": ["warn", { vars: "all", args: "none", ignoreRestSiblings: false }],
    "no-this-before-super": "warn",
    "object-curly-spacing": ["error", "never"],
    "prefer-destructuring": "off",
    "prettier/prettier": ["error", { singleQuote: true, parser: "@typescript/parser" }],
    "usePrettierrc": true,
    "quotes": ["error", "single"],
    "react/jsx-filename-extensions": ["warn", { extensions: ["*.js", "*.jsx"]}],
    "react/default-props-match-prop-types": "off",
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "react/no-this-in-sfc": "off",
    "react/destructuring-assignment": "off",
    "react/jsx-one-expresion-per-line": "off",
    "react/jsx-indent": "warn",
    "react/jsx-first-prop-new-line": ["warn", "multiline"],
    "react/jsx-max-props-per-line": ["warn", { maximum: 1 }],
    "react/prop-types": "warn",
    "react/require-default-props": "warn",
    "semi": ["warn", "always"],
    "space-unary-ops": 2,
    "tabwidth": 2,
    "trailing-comma": "off",
    "global-require": "warn",
    "valid-jsdoc": "warn",
  "valid-typeof": "error"
},
  overrides: [
    {
      files: ["packages/*/src/**/*.js", "codemods/*/src/**/*.js"],
      rules: {
        "@babel/development/no-undefined-identifier": "error",
        "@babel/development/no-deprecated-clone": "error"
      }
    },
    {
      files: [
        "packages/*/test/**/*.js",
        "codemods/*/test/**/*.js",
        "packages/babel-helper-transform-fixture-test-runner/src/helpers.js",
        "test/**/*.js"
      ],
      env: {
        jest: true
      }
    },
    {
      files: ["packages/babel-plugin-*/src/index.js"],
      excludedFiles: ["packages/babel-plugin-transform-regenerator/**/*.js"],
      rules: {
        "@babel/development/plugin-name": "error"
      }
    }
  ]
}
