import postcss from 'postcss'

export default postcss.plugin('postcss-warn-cleaner', (opts = {}) => {
  const { ignoreFiles } = opts

  return function (css, result) {
    if (typeof ignoreFiles === 'undefined') { return }

    let filePath, keep

    let cleaned = result.messages.filter((item) => {
      filePath = item.node.source.input.file
      keep = true

      if (ignoreFiles instanceof(Array)) {
        for (let i = 0; i < ignoreFiles.length; i++) {
          if (ignoreFiles[i].test(filePath)) {
            keep = false
          }
        }
      } else {
        keep = !ignoreFiles.test(filePath)
      }

      return keep
    })

    result.messages = cleaned
  }
})
