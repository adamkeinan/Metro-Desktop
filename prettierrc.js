// .prettierrc.js	
 module.export = {	
   'tabWidth': 4,	
   'no-semi': true,
   'singleQuote': true,
   'printWidth': 100,
   'trailingComma': 'es5',	
   'bracketSpacing': true,	
   'jsxBracketSameLine': false,	
   'range-start': 0,	
   'range-end': 'infinty',	
   'required pragma': true,	
   'overrides': [	
     {	
      'files': '*.js',	
      'options': { 'parser': 'babel' },	
      filepath: './babelrc'	
    }	
  ]	
};
