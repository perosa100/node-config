import { ESLintConfig, assertDeps } from "./utils";

export function config() {
  return {
    root: true,
    parser: "@typescript-eslint/parser",
    plugins: [
      "@typescript-eslint/eslint-plugin",
      "import",
      "sort-destructure-keys",
    ],
    extends: [
      "eslint:recommended",
      "plugin:@typescript-eslint/recommended",
      "plugin:prettier/recommended",
    ],
    rules: {
      "prettier/prettier": "warn",
      eqeqeq: "warn",
      "no-constant-binary-expression": "error",
      "import/no-cycle": "warn",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
        },
      ],
      "sort-destructure-keys/sort-destructure-keys": "warn",
    },
    overrides: [
      {
        files: [".eslintrc.*", ".prettierrc.*", "*.config.js"],
        rules: {
          "@typescript-eslint/no-var-requires": "off",
          "no-undef": "off",
        },
      },
    ],
    ignorePatterns: [
      "build",
      "dist",
      "out",
      "output",
      "generated",
      "@generated",
    ],
  } satisfies ESLintConfig;
}

interface ReactConfigOptions {
  reactVersion?: string;
}

export function reactConfig({ reactVersion }: ReactConfigOptions = {}) {
  const _config = config();

  assertDeps(["eslint-plugin-react", "eslint-plugin-jsx-a11y"]);

  return {
    ..._config,
    extends: [..._config.extends, "plugin:jsx-a11y/recommended"],
    plugins: [..._config.plugins, "react", "react-hooks"],
    rules: {
      ..._config.rules,
      "react/jsx-sort-props": [
        "warn",
        {
          callbacksLast: true,
          reservedFirst: true,
        },
      ],
      "react/jsx-key": "error",
      "react/display-name": "error",
      "react/no-unescaped-entities": "off",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
    },
    settings: {
      react: {
        version: reactVersion ?? "^18.2.0",
      },
    },
  } satisfies ESLintConfig;
}

export function nextConfig(opts?: ReactConfigOptions) {
  assertDeps([
    "eslint-plugin-react",
    "eslint-plugin-jsx-a11y",
    "eslint-config-next",
  ]);

  const base = reactConfig(opts);

  return {
    ...base,
    extends: [...base.extends, "next/core-web-vitals"],
  } satisfies ESLintConfig;
}
