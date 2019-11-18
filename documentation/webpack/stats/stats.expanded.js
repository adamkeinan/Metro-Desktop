// https://webpack.js.org/configuration/stats/#stats
module.exports = {
  //...
  stats: {
    // fallback value for stats options when an option is not defined
    // (has precedence over local webpack defaults)
    all: undefined,

    // Add asset Information
    assets: true,

    // Sort assets by a field
    // You can reverse the sort with `!field`.
    // Some possible values: 'id' (default), 'name', 'size', 'chunks', 'failed', 'issuer'
    // For a complete list of fields see the bottom of the page
    assetsSort: 'field',

    // Add build date and time information
    builtAt: true,

    // Add information about cached (not built) modules
    cached: true,

    // Show cached assets (setting this to `false` only shows emitted files)
    cachedAssets: true,

    // Add children information
    children: true,

    // Add chunk information (setting this to `false` allows for a less verbose output)
    chunks: true,

    // Add namedChunkGroups information
    chunkGroups: true,

    // Add built modules information to chunk information
    chunkModules: true,

    // Add the origins of chunks and chunk merging info
    chunkOrigins: true,

    // Sort the chunks by a field
    // You can reverse the sort with `!field`. Default is `id`.
    // Some other possible values: 'name', 'size', 'chunks', 'failed', 'issuer'
    // For a complete list of fields see the bottom of the page
    chunksSort: 'field',

    // Context directory for request shortening
    context: '../src/',

    // `webpack --colors` equivalent
    colors: false,

    // Display the distance from the entry point for each module
    depth: false,

    // Display the entry points with the corresponding bundles
    entrypoints: false,

    // Add --env information
    env: false,

    // Add errors
    errors: true,

    // Add details to errors (like resolving log)
    errorDetails: true,

    // Exclude assets from being displayed in stats
    // This can be done with a String, a RegExp, a Function getting the assets name
    // and returning a boolean or an Array of the above.
    // Possible values: String | RegExp | (assetName) => boolean | [String, RegExp, (assetName) => boolean]
    // Example values: 'filter' | /filter/ | ['filter', /filter/] | (assetName) => assetName.contains('moduleA')
    excludeAssets: [],

    // Exclude modules from being displayed in stats
    // This can be done with a String, a RegExp, a Function getting the modules source
    // and returning a boolean or an Array of the above.
    // Possible values: String | RegExp | (moduleSource) => boolean | [String, RegExp, (moduleSource) => boolean]
    // Example values: 'filter' | /filter/ | ['filter', /filter/] | (moduleSource) => true
    excludeModules: exclude || [],

    // See excludeModules
    // Possible values: String | RegExp | (moduleSource) => boolean | [String, RegExp, (moduleSource) => boolean]
    // Example values: 'filter' | /filter/ | ['filter', /filter/] | (moduleSource) => true
    exclude: excludeModules || [],

    // Add the hash of the compilation
    hash: true,

    // Add logging output
    // Possible values: 'none', 'error', 'warn', 'info', 'log', 'verbose', true, false
    // 'none', false - disable logging
    // 'error' - errors only
    // 'warn' - errors and warnings only
    // 'info' - errors, warnings, and info messages
    // 'log', true - errors, warnings, info messages, log messages, groups, clears.
    //    Collapsed groups are displayed in a collapsed state.
    // 'verbose' - log everything except debug and trace.
    //    Collapsed groups are displayed in expanded state.
    logging: 'info',

    // Include debug information of specified loggers such as plugins or loaders.
    // Provide an array of filters to match plugins or loaders.
    // Filters can be Strings, RegExps or Functions.
    // when stats.logging is false, stats.loggingDebug option is ignored.
    // Possible values: String | RegExp | (warning) => boolean | [String, RegExp, (name) => boolean]
    // Example values: 'MyPlugin' | /MyPlugin/ | ['MyPlugin', /MyPlugin/] | (name) => name.contains('MyPlugin')
    loggingDebug: [],

    // Enable stack traces in logging output for errors, warnings and traces.
    loggingTrace: true,

    // Set the maximum number of modules to be shown
    maxModules: 15,

    // Add built modules information
    modules: true,

    // Sort the modules by a field
    // You can reverse the sort with `!field`. Default is `id`.
    // Some other possible values: 'name', 'size', 'chunks', 'failed', 'issuer'
    // For a complete list of fields see the bottom of the page
    modulesSort: 'field',

    // Show dependencies and origin of warnings/errors (since webpack 2.5.0)
    moduleTrace: true,

    // Show outputPath
    outputPath: true | false,

    // Show performance hint when file size exceeds `performance.maxAssetSize`
    performance: true,

    // Show the exports of the modules
    providedExports: false,

    // Add public path information
    publicPath: true,

    // Add information about the reasons why modules are included
    reasons: true,

    // Add the source code of modules
    source: false,

    // Add timing information
    timings: true,

    // Show which exports of a module are used
    usedExports: false,

    // Add webpack version information
    version: true,

    // Add warnings
    warnings: true,

    // Filter warnings to be shown (since webpack 2.4.0),
    // can be a String, Regexp, a function getting the warning and returning a boolean
    // or an Array of a combination of the above. First match wins.
    // Possible values: String | RegExp | (warning) => boolean | [String, RegExp, (warning) => boolean]
    // Example values: 'filter' | /filter/ | ['filter', /filter/] | (warning) => true
    warningsFilter: null
  }
}