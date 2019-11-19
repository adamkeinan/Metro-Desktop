// .prettierrc.js
module.export = {
  'tabWidth': 2,
  'singleQuote': true,
  'printWidth': 120,
  'trailingComma': 'all',
  'bracketSpacing': true,
  'jsxBracketSameLine': false,
  'range-start': 0,
  'range-end': 'infinty',
  'required pragma': true,
  'overrides': [
    {
     'files': ['*.js', '*.jsx', '*.json', '*.ts', '*.tsx', '*.mjs'],
     'options': { 'parser': '@typescript-eslint/parser' },
     filepath: './tsconfig.json'
    }
  ]
};
