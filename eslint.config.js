import eslintPluginNext from '@next/eslint-plugin-next';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';

/** @type {import('eslint').Linter.Config} */
export default [
  {
    ignores: ['node_modules', 'dist', '.next'], // Ignoring build and unnecessary folders
  },
  {
    files: ['**/*.{ts,tsx}'], // TypeScript support
    languageOptions: {
      parser: tsParser, // Use TypeScript parser
      parserOptions: {
        project: './tsconfig.json', // Ensure ESLint can find your TypeScript config
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin, // Enable TypeScript ESLint plugin
      'next': eslintPluginNext, // Enable Next.js plugin
    },
    rules: {
      '@typescript-eslint/no-unused-vars': ['warn'], // Example rule
      'next/no-html-link-for-pages': 'off', // Allow HTML link tags for Next.js pages
    },
  },
];
