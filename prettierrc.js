// .prettierrc.js
 module.export = {
   'tabWidth': 2,
   'no-semi': true,
   'singleQuote': true,
   'printWidth': 120,
   'trailingComma': 'es5',
   'bracketSpacing': true,
   'jsxBracketSameLine': false,
   'range-start': 0,
   'range-end': 'infinty',
   'required pragma': true,
   'overrides': [
     {
      'files': '*.js',
      'options': { 'parser': 'babel-eslint' },
      filepath: './babelrc'
    }
  ]
};
