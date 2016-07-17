import multimatch from 'multimatch'
import postcss from 'postcss'

export default postcss.plugin('postcss-warn-cleaner', (opts = {}) => {
  const { ignoreFiles } = opts

  return function (css, result) {
    if (typeof ignoreFiles === 'undefined') { return }

    let filePath

    let cleaned = result.messages.filter((item) => {
      filePath = item.node.source.input.file
      return !multimatch(filePath, ignoreFiles).length > 0
    })

    result.messages = cleaned
  }
})
