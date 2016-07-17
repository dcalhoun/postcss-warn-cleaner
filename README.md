# postcss-warn-cleaner
[![Build Status](https://travis-ci.org/dcalhoun/postcss-warn-cleaner.svg?branch=master)](https://travis-ci.org/dcalhoun/postcss-warn-cleaner)
[![JavaScript Style Guide](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

Selectively remove postcss warnings from logs.

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
Define directories to ignore from which to ignore warnings.

###### Accepted Values
- `{Regex}`
- `{Array}` of `{Regex}`

###### Examples
```javascript
warnCleaner({
  ignoreFiles: /node_modules/
})

warnCleaner({
  ignoreFiles: [
    /node_modules/,
    /vendor/
  ]
})
```
