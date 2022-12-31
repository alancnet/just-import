const { justImport } = require('../index.js') // require('just-import')

async function main () {
  const { default: splitChars } = await justImport('split-chars')

  console.log([...splitChars('🍍+🍕=😋')])
}

main()