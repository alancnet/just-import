const { justImport } = require('../index.js') // require('just-import')

async function splitChars (input) {
  const { default: splitChars } = await justImport('split-chars')
  return splitChars(input)
}

async function main () {
  console.log([...await splitChars('🍍+🍕=😋')])
}

main()