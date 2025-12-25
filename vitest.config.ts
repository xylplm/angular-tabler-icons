import { defineConfig } from 'vitest/config';
import angular from '@angular/build';

export default defineConfig(angular.getVitestConfig({
  test: {
    globals: true,
    environment: 'jsdom',
  },
}));
