import { justImport } from "../index" // import justImport from 'just-import'

type SplitChars = {
  default: (input: string) => Iterable<string>
}

let splitChars: SplitChars['default'] = null as any

justImport<SplitChars>('split-chars').then((mod) => {
  splitChars = mod.default
})

try {
  // This is expected to fail because splitChars is still null.
  console.log([...splitChars('🍍+🍕=😋')])
} catch (err: any) {
  console.error(err.message)
}

// This is expected to succeed because splitChars is now a function.
setTimeout(() => {
  console.log([...splitChars('🍍+🍕=😋')])
}, 100)
