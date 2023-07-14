import { SortImportsPlugin } from '../constants'
import { PrettierConfig, SortImportsConfig, assertDeps } from '../utils'

import { orderDefault } from './importOrders'

export function config() {
  return {
    bracketSpacing: true,
    tabWidth: 2,
    semi: false,
    singleQuote: true,
    printWidth: 120,
    endOfLine: 'lf',
    arrowParens: 'always',
    trailingComma: 'none'
  } satisfies PrettierConfig
}

interface WithSortImportsOptions {
  importOrder?: string[]
}

export function withSortImports({ importOrder }: WithSortImportsOptions = {}) {
  assertDeps([SortImportsPlugin])

  return {
    ...config(),
    plugins: [SortImportsPlugin],
    importOrder: importOrder ?? orderDefault,
    importOrderSeparation: true,
    importOrderSortSpecifiers: true,
    importOrderParserPlugins: ['typescript', 'decorators-legacy', 'jsx']
  } satisfies SortImportsConfig
}

/**
 * Sort Imports + withStitches
 */
export function withStitches(opts?: WithSortImportsOptions) {
  assertDeps([SortImportsPlugin /* , 'prettier-plugin-tailwindcss' */])

  const base = withSortImports(opts)

  return {
    ...base,
    plugins: [SortImportsPlugin /* , 'prettier-plugin-tailwindcss' */],
    pluginSearchDirs: false
  } satisfies SortImportsConfig
}
