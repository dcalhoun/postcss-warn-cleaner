import autoprefixer from 'autoprefixer'
import fs from 'fs'
import postcssWarnCleaner from '../postcss-warn-cleaner.js'
import postcss from 'postcss'
import postcssImport from 'postcss-import'

function run (opts) {
  let inputCSS = fs.readFileSync('fixtures/index.css', 'utf8')

  return postcss([
    postcssImport,
    autoprefixer({ browsers: ['last 2 versions'] }),
    postcssWarnCleaner(opts)
  ]).process(inputCSS)
}

test('should not remove warnings', () => (
  run().then(result => {
    const warnings = result.messages.filter(m => m.type === 'warning')
    expect(warnings.length).toBe(3)
  })
))

test('warnings from the matched file should be removed ', () => {
  let opts = { ignoreFiles: '**/error-1.css' }

  return run(opts).then(result => {
    expect(result.messages.length).toBe(2)
  })
})

test('warnings from the matched files should be removed ', () => {
  let opts = { ignoreFiles: '**/error-*' }

  return run(opts).then(result => {
    expect(result.messages.length).toBe(1)
  })
})

test('warnings from the matched files should be removed ', () => {
  let opts = { ignoreFiles: ['**/error-1.css', '**/error-2.css'] }

  return run(opts).then(result => {
    expect(result.messages.length).toBe(1)
  })
})

test('warnings from the matched files should be removed ', () => {
  let opts = { ignoreFiles: ['**/error-3/*'] }

  return run(opts).then(result => {
    expect(result.messages.length).toBe(2)
  })
})
