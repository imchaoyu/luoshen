import * as fs from 'fs';
import * as path from 'path';
import { es6, react, vue, typescript } from './rules';

const isTypeAwareEnabled = process.env.DISABLE_TYPE_AWARE === undefined;
// rules
const isTsProject = fs.existsSync(path.join(process.cwd() || '.', './tsconfig.json'));
const isVueProject =
  fs.existsSync(path.join(process.cwd() || '.', './vue.config.js')) ||
  fs.existsSync(path.join(process.cwd() || '.', './src/*.{vue}'));
let rules: any = {
  ...es6,
  // ...jsdoc,
  // ...node,
};
if (isTsProject) {
  rules = { ...rules, ...typescript };
}
if (isVueProject) {
  rules = { ...rules, ...vue };
} else {
  rules = { ...rules, ...react };
}

// parser
const parserOptions = {
  ecmaFeatures: {
    jsx: true,
  },
  babelOptions: {
    presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
    plugins: [
      ['@babel/plugin-proposal-decorators', { legacy: true }],
      ['@babel/plugin-proposal-class-properties', { loose: true }],
    ],
  },
  requireConfigFile: false,
  project: isTypeAwareEnabled ? './tsconfig.json' : undefined,
};

module.exports = {
  extends: ['prettier', 'plugin:react/recommended', 'plugin:prettier/recommended'],
  parser: '@babel/eslint-parser',
  plugins: ['react', 'react-hooks'],
  env: {
    browser: true,
    node: true,
    es6: true,
    mocha: true,
    jest: true,
    jasmine: true,
  },
  rules,
  settings: {
    'import/resolver': {
      node: {
        extensions: isTsProject ? ['.js', '.jsx', '.ts', '.tsx', '.d.ts'] : ['.js', '.jsx'],
      },
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx', '.d.ts'],
    },
    'import/extensions': ['.js', '.mjs', '.jsx', '.ts', '.tsx', '.d.ts'],
    'import/external-module-folders': ['node_modules', 'node_modules/@types'],
    polyfills: ['fetch', 'Promise', 'URL', 'object-assign'],
    react: {
      version: 'detect',
    },
  },
  overrides: isTsProject
    ? [
        {
          files: ['**/*.{ts,tsx}'],
          parser: '@typescript-eslint/parser',
          rules: typescript,
          extends: ['prettier', 'plugin:@typescript-eslint/recommended'],
        },
      ]
    : [],
  parserOptions,
};
