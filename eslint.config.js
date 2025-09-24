import { defineConfig } from "eslint/config";
import angular from "angular-eslint";
import tseslint from "typescript-eslint";

export default defineConfig([
  {
    files: ["**/*.ts"],
    languageOptions: {
      parser: tseslint.parser,
    },
    plugins: {
      "@typescript-eslint": tseslint.plugin,
      "@angular-eslint": angular.tsPlugin,
    },
    rules: {
      "@angular-eslint/directive-selector": [
        "error",
        {
          type: "attribute",
          prefix: "app",
          style: "camelCase",
        },
      ],
      "@angular-eslint/component-selector": [
        "error",
        {
          type: "element",
          prefix: "app",
          style: "kebab-case",
        },
      ],
    },
  },
  {
    files: ["**/*.html"],
    plugins: {
      "@angular-eslint/template": angular.templatePlugin,
    },
    languageOptions: {
      parser: angular.templateParser,
    },
    rules: {},
  },
]);