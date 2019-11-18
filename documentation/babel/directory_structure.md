Subpackage .babelrc files
Similar to the the way babel.config.js files are required to be in the "root", .babelrc files must be in the root package, by default. This means that, the same way the working directory affects babel.config.js loading, it also affects .babelrc loading.

Assuming you've already gotten your babel.config.js file loaded properly as discussed above, Babel will only process .babelrc files inside that root package (and not subpackages), so given for instance

package.json
babel.config.js
packages/
  mod/
    package.json
    .babelrc
    index.js
