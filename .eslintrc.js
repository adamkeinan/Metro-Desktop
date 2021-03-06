module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true,
    commonjs: false
  },
  extends: [
    "airbnb",
    "eslint:recommended",
    "plugin:prettier/recommended",
    "prettier/flowtype",
    "prettier/standard",
    "prettier/react"
  ],
  settings: {
    react: {
      pragma: "react",
      version: "16.9.0",
      "import/resolver": {
        "eslint-import-resolver-babel-module": {
          config: "./index.js"
        }
      }
    }
  },
  globals: {
    window: true,
    console: true,
    document: true,
    FormData: true,
    FileReader: true,
    Blob: true,
    navigator: true,
    "no debugger": 'off',
    "no-eval": 0,
    "dot-notation": 0,
    eqeqeq: 0,
    indent: [
      2,
      2,
      {
        VariableDeclarator: 2,
        SwitchCase: 2
      }
    ]
  },
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: ["jsx-a11y", "import", "react", "flowtype", "prettier"],
  rules: {
    "import/no-extraneous-dependencies": [
      "error",
      {
        optionalDependencies: ["test/unit/index.js"],
        allowKeywords: [0, "always"]
      }
    ],
    "array-bracket-spacing": [2, "never"],
    "comma-dangle": [2, "never"],
    "consistent-return": 2,
    "constructor-super": "warn",
    "flowtype/boolean-style": [2, "boolean"],
    ident: [1, 4],
    "import/imports-first": ["error", "absolute-first"],
    "import/newline-after-import": "error",
    "linebreak-style": ["off", "eol-last"],
    "max-len": [
      "error",
      {
        code: 140,
        comments: 80,
        ignoreUrls: true,
        ignoreComments: true,
        ignoreTrailingComments: true,
        ignoreTemplateLiterals: true,
        ignoreUrls: true,
        ignorePattern: "^\\s*var\\s.+=\\s*require\\s*\\(",
        ignoreRegExpLiterals: true,
        ignoreStrings: true
      }
    ],
    "no-underscore-dangle": 0,
    "no-return-assign": 0,
    "object-curly-newline": [
      "error", {
        ImportDeclaration: {
          multiline: true,
          minProperties: 2
        }
      }
    ],
    "object-property-newline": "error",
    consistent: true,
    "max-depth": ["warn", 10],
    "no-await-in-loop": "error",
    "no-const-assign": "warn",
    "no-console": 0,
    "no-const-assign": "error",
    "no-constant-condition": "error",
    "no-delete-var": "error",
    "no-eq-null": "error",
    "no-duplicate-case": "error",
    "no-duplicate-imports": "error",
    "no-empty-function": "warn",
    "no-else-return": 1,
    "no-extra-semi": "error",
    "no-mixed-operators": 1,
    "no-plusplus": 1,
    "no-param-reassign": 1,
    "no-restricted-syntax": 1,
    "no-undef": "warn",
    "no-unreachable": "warn",
    "no-unused-vars": 0,
    "no-this-before-super": "warn",
    "object-curly-spacing": [2, "never"],
    "prefer-destructuring": 0,
    "prettier/prettier": [
      "error",
      { singleQuote: true, parser: "flow", usePrettierrc: true }
    ],
    quotes: ["error", "single"],
    "react/jsx-filename-extensions": [
      1,
      {
        extensions: ["*.js", "*.jsx"]
      }
    ],
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "react/no-this-in-sfc": 0,
    "react/destructuring-assignment": 0,
    "react/jsx-one-expresion-per-line": 0,
    "react/jsx-indent": 0,
    "react/prop-types": 0,
    semi: [1, "always"],
    "space-unary-ops": 2,
    tabwidth: 2,
    "trailing-comma": "off",
    "global-require": 1,
    "valid-jsdoc": 1,
    "valid-typeof": "error"
  }
};
