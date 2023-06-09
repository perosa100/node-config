import { Linter } from 'eslint'

export { Config as PrettierConfig } from 'prettier'
export { PrettierConfig as SortImportsConfig } from '@trivago/prettier-plugin-sort-imports'

export type ESLintConfig = Linter.Config

function assertDep(name: string) {
  try {
    require(name)
    return true
  } catch (err) {
    return name
  }
}

export function assertDeps(names: string[]) {
  const fail = names.map((name) => assertDep(name)).filter((res) => res !== true)

  if (fail.length < 1) {
    return
  }

  throw new Error(`To use this preset, you are missing these dependencies: ${fail.join(', ')}`)
}
