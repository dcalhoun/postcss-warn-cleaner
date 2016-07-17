import postcss from 'postcss'

function testPathInclusion (ignored, path) {
  let keep = true

  if (ignored instanceof(Array)) {
    for (let i = 0; i < ignored.length; i++) {
      if (ignored[i].test(path)) {
        keep = false
      }
    }
  } else {
    keep = !ignored.test(path)
  }

  return keep
}

export default postcss.plugin('postcss-warn-cleaner', (opts = {}) => {
  const { ignoreFiles } = opts

  return function (css, result) {
    if (typeof ignoreFiles === 'undefined') { return }

    let filePath

    let cleaned = result.messages.filter((item) => {
      filePath = item.node.source.input.file
      return testPathInclusion(ignoreFiles, filePath)
    })

    result.messages = cleaned
  }
})
