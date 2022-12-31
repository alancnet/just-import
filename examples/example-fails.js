// This is expected to fail because split-chars is a module
const { default: splitChars } = require('split-chars')

console.log([...splitChars('🍍+🍕=😋')])
