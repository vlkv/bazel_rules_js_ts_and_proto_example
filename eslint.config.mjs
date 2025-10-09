// @ts-check

import eslint from "@eslint/js";
import tseslint from "typescript-eslint";

import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';
const { configs } = tsPlugin;

export default tseslint.config(
  eslint.configs.recommended,
  // {
  //   files: ["src/**/*.ts"],
  //   extends: [
  //     ...tseslint.configs.recommendedTypeChecked,
  //     ...tseslint.configs.stylisticTypeChecked,
  //   ],
  //   languageOptions: {
  //     parserOptions: {
  //       // indicates to find the closest tsconfig.json for each source file
  //       project: true,
  //     },
  //   },
  //   rules: {
  //     semi: "error",
  //     "prefer-const": "error",
  //     "no-debugger": "off",
  //     "@typescript-eslint/no-redundant-type-constituents": "error",
  //     "sort-imports": "warn",
  //   },
  // },
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        sourceType: 'module',
        ecmaVersion: 'latest',
      },
      globals: {
        console: "readonly",
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
    },

    rules: {
      ...configs.recommended.rules,
      'curly': ['error', 'all'],
      '@typescript-eslint/no-explicit-any': ['off'],
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],
      "sort-imports": "error",
      "no-unused-vars": "error",
    }
  },
  {
    files: ['**/*.js'],
    languageOptions: {
      sourceType: 'module',
      ecmaVersion: 'latest',
      globals: {},
    },
    rules: {
      'curly': ['error', 'all'],
      'no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: true }],
      'no-var': 'error',
      'prefer-const': 'error',
    },
  },
);
