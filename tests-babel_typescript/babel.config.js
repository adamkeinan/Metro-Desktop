// babel.config.js
module.exports = {
  presets: [
    [
      '@babel/env',
      {
        loose: false,
        modules: false,
        useBuiltIns: 'usage',
        corejs: '3.3.6',
        shippedProposals: true
      }
    ],
    '@babel/typescript',
    '@babel/react',
    '@babel/flow',
  ],
  plugins: [
    ['@babel/plugin-development',
    '@babel/plugin-dynamic-import-node',
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-json-strings',
    '@babel/plugin-proposal-numeric-separator',
    '@babel/plugin-proposal-object-rest-spread',
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-syntax-import-meta',
    '@babel/plugin-transform-spread',
    '@babel/plugin-transform-es2015-modules-commonjs',
    '@babel/plugin-transform-async-to-generator',
    '@babel/plugin-transform-react-constant-elements',
    '@babel/plugin-transform-runtime',
    '@babel/plugin-transform-typescript',
    '@babel/plugin-proposal-numeric-separator',
    '@babel/plugin-proposal-throw-expressions',
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-syntax-import-meta',
    ['@babel/plugin-proposal-class-properties', { loose: false }],
    '@babel/plugin-proposal-json-strings'],
    overrides: [
      {
        include: [],
        exclude: [],
        presets: [
          {
            '@babel/env',
            {
            loose: false,
            modules: false,
            useBuiltIns: 'usage',
            corejs: '3.3.6',
            shippedProposals: true,
            targets: [
            'node': 'current',
            'browsers': [
              'last 2 Chrome versions',
              'last 2 Firefox versions',
              'last 2 Safari versions',
              'last 2 iOS versions',
              'last 1 Android version',
              'last 1 ChromeAndroid version',
              'last 1 Explorer version'
            ]
          ],
        }
      }
    ]
}

};


