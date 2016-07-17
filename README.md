# postcss-warn-cleaner
[![JavaScript Style Guide](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)
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
warnCleaner({
  ignoreFiles: '**/node_modules/**/*'
})

warnCleaner({
  ignoreFiles: [
    '**/node_modules/**/*',
    '**/bower_components/**/*'
  ]
})
```
