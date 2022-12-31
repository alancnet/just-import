import { justImport } from "../index" // import justImport from 'just-import'

type SplitChars = {
  default: (input: string) => Iterable<string>
}

async function main () {
  const { default: splitChars } = await justImport<SplitChars>('split-chars')
  console.log([...splitChars('🍍+🍕=😋')])
}

main()