import { justImport } from "../index" // import justImport from 'just-import'

type SplitChars = {
  default: (input: string) => Iterable<string>
}

async function splitChars (input: string): Promise<Iterable<string>> {
  const { default: splitChars } = await justImport<SplitChars>('split-chars')
  return splitChars(input)
}

async function main () {
  console.log([...await splitChars('🍍+🍕=😋')])
}

main()