const { justImport } = require('../index.js') // require('just-import')

let splitChars = null
justImport('split-chars').then((mod) => {
  splitChars = mod.default
})

try {
  // This is expected to fail because splitChars is still null.
  console.log([...splitChars('🍍+🍕=😋')])
} catch (err) {
  console.error(err.message)
}

// This is expected to succeed because splitChars is now a function.
setTimeout(() => {
  console.log([...splitChars('🍍+🍕=😋')])
}, 100)
