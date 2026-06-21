import { defineConfig } from 'vitest/config';

export default defineConfig({
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
