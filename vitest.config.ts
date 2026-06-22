import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vitest/config';

const SRC_PATH = fileURLToPath(new URL('./src', import.meta.url));

export default defineConfig({
  resolve: {
    alias: {
      '@': SRC_PATH,
    },
  },
  test: {
    environment: 'jsdom',
    exclude: [
      '**/node_modules/**',
      '**/.next/**',
      '**/out/**',
      '**/dist/**',
      '**/coverage/**',
      '**/legacy/**',
    ],
    passWithNoTests: true,
    coverage: {
      provider: 'v8',
      exclude: [
        '**/.next/**',
        '**/out/**',
        '**/dist/**',
        '**/coverage/**',
        '**/legacy/**',
      ],
    },
  },
});
