![npm bundle size](https://img.shields.io/bundlephobia/min/just-import)
![npm type definitions](https://img.shields.io/npm/types/just-import)
![npm version](https://img.shields.io/npm/v/just-import)
![npm license](https://img.shields.io/npm/l/just-import)

# just-import

If you are getting the following error, this simple library can help:

```
Error [ERR_REQUIRE_ESM]: require() of ES Module ... from ... not supported.
Instead change the require of ... in ... to a dynamic import() which is available in all CommonJS modules.
```

You are likely getting this error because you are transpiling ESM or TypeScript to CommonJS, and no matter what,
the emitted code uses `require` to import libraries.

Libraries written in ESM style cannot be `required`'d. They must use the native Node `import` function.

This library does nothing except wrap the `import` function in `justImport`, isolating it from your compile process.

Here is how you can fix your problem using `split-chars` as an example:

```javascript
import { justImport } from 'just-import'

async function splitChars (input: string) {
  const splitChars = await justImport<Iterable<string>>('split-chars')
  return splitChars.default(input)
}
```

or in TypeScript

```typescript
import { justImport } from 'just-import'

type SplitChars = {
  default: (input: string) => Iterable<string>
}

async function splitChars (input: string): Promise<Iterable<string>> {
  const { default:splitChars } = await justImport<SplitChars>('split-chars')
  return await splitChars(input)
}
```

Please see [EXAMPLES](https://github.com/alancnet/just-import/tree/main/examples) for more examples.

### Can't the offending module be imported just like any other so the function doesn't have to be async?

Sadly, no. Since `import` returns a promise, so too mush `justImport`. `require` is synchronous, but again,
the module can't me imported using `require`.

If you're not going to use the module right away, there is an unsafe way to import it:

```javascript
import { justImport } from 'just-import'

let splitChars = null
justImport('split-chars').then(mod => {
  splitChars = mod.default
})

function myCode () {
  return splitChars('🍍+🍕=😋')
}
```

or in TypeScript

```typescript
import { justImport } from 'just-import'

let splitChars: (input: string) => Iterable<string> = null
justImport('split-chars').then(mod => {
  splitChars = mod.default
})
```