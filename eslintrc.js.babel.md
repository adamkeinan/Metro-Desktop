"rules": {
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

    "import/order": ["error", { "newlines-between":  "always-and-inside-groups" }]
  }
}
