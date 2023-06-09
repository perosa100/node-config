# @perosa100/config

[![](https://img.shields.io/npm/v/@perosa100/config.svg?maxAge=3600)](https://www.npmjs.com/package/@perosa100/config)
[![](https://img.shields.io/npm/dt/@perosa100/config.svg?maxAge=3600)](https://www.npmjs.com/package/@perosa100/config)
[![](https://github.com/perosa100/node-config/actions/workflows/test.yml/badge.svg)](https://github.com/perosa100/node-config/actions)

My personal config for node projects, include ESLint Prettier and TSConfig

## Install

```bash
pnpm add -D @perosa100/config
```

Install peer dependencies too (auto-install-peers might not work here in some cases)

```bash
pnpm add -D @types/eslint @typescript-eslint/parser eslint-plugin-sort-destructure-keys \
  @types/node eslint-config-prettier eslint \
  @types/prettier eslint-plugin-import \
  @typescript-eslint/eslint-plugin eslint-plugin-prettier
```

More peer dependencies are needed for some preset

```bash
pnpm add -D @ianvs/prettier-plugin-sort-imports eslint-config-next \
  eslint-plugin-jsx-a11y eslint-plugin-react \
  eslint-plugin-react-hooks prettier-plugin-tailwindcss
```

Some config require extra dependencies
