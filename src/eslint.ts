import * as fs from 'fs';
import * as path from 'path';
import { es6, react, typescript } from './rules';

const isTypeAwareEnabled = process.env.DISABLE_TYPE_AWARE === undefined;
// rules
const isTsProject = fs.existsSync(path.join(process.cwd() || '.', './tsconfig.json'));

let extend = ['prettier', 'plugin:react/recommended', 'plugin:prettier/recommended'];
let plugins = ['react', 'react-hooks'];
let rules: any = {
  ...es6,
  ...react,
  // ...jsdoc,
  // ...node,
};
if (isTsProject) {
  rules = { ...rules, ...typescript };
}

// parser
const parserOptions = {
  ecmaVersion: 'latest',
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
  extends: extend,
  parser: '@babel/eslint-parser',
  plugins,
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
