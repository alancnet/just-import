// This is expected to fail because split-chars is a module and TypeScript/CommonJS will always use require() to import it.
import splitChars from 'split-chars'

console.log([...splitChars('🍍+🍕=😋')])
