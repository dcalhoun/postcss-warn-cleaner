# postcss-warn-cleaner

[![Greenkeeper badge](https://badges.greenkeeper.io/dcalhoun/postcss-warn-cleaner.svg)](https://greenkeeper.io/)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![Build Status](https://travis-ci.org/dcalhoun/postcss-warn-cleaner.svg?branch=master)](https://travis-ci.org/dcalhoun/postcss-warn-cleaner)

Selectively remove PostCSS warnings from your logs. For example, you may choose to ignore autoprefixer warnings resulting from third-party vendor libraries.

### Installation
```bash
$ npm install postcss-warn-cleaner
```

### Options
```javascript
{
  ignoreFiles: false
}
```

#### `ignoreFiles`
Set files from which to ignore warnings.

###### Accepted Values
- Glob
- `{Array}` of globs

###### Examples
```javascript
// Example: Single glob
warnCleaner({
  ignoreFiles: '**/node_modules/**/*'
})

// Example: Array of globs
warnCleaner({
  ignoreFiles: [
    '**/node_modules/**/*',
    '**/bower_components/**/*'
  ]
})
```

### Webpack Example
```javascript
var warnCleaner = require('postcss-warn-cleaner')

module.exports = {
  module: {
    loaders: [
      { test: /\.css$/, loader: 'style!css!postcss' },
    }],
  },
  postcss: [
    warnCleaner({
      ignoreFiles: '**/node_modules/**/*'
    })
  ]
}
```
