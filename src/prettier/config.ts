import { SortImportsPlugin } from "../constants";
import { PrettierConfig, SortImportsConfig, assertDeps } from "../utils";

import { orderDefault } from "./importOrders";

export function config() {
  return {
    bracketSpacing: true,
    tabWidth: 2,
    useTabs: false,
    singleQuote: false,
    semi: true,
    printWidth: 80,
  } satisfies PrettierConfig;
}

interface WithSortImportsOptions {
  importOrder?: string[];
}

export function withSortImports({ importOrder }: WithSortImportsOptions = {}) {
  assertDeps([SortImportsPlugin]);

  return {
    ...config(),
    plugins: [SortImportsPlugin],
    importOrder: importOrder ?? orderDefault,
    importOrderSeparation: true,
    importOrderSortSpecifiers: true,
    importOrderParserPlugins: ["typescript", "decorators-legacy", "jsx"],
  } satisfies SortImportsConfig;
}

/**
 * Sort Imports + TailwindCSS
 */
export function withTailwind(opts?: WithSortImportsOptions) {
  assertDeps([SortImportsPlugin, "prettier-plugin-tailwindcss"]);

  const base = withSortImports(opts);

  return {
    ...base,
    plugins: [SortImportsPlugin, "prettier-plugin-tailwindcss"],
    pluginSearchDirs: false,
  } satisfies SortImportsConfig;
}
