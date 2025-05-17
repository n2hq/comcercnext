import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

/* const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
]; */

const eslintConfig = [
  {
    "extends": [
      "next/core-web-vitals",
      "eslint:recommended",
      "plugin:@typescript-eslint/recommended"
    ],
    "rules": {
      // TypeScript rules (relaxed)
      "@typescript-eslint/no-explicit-any": "warn", // Warn instead of error on any
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/ban-ts-comment": "off", // Allow ts-ignore comments

      // JavaScript rules
      "no-console": "warn", // Allow console but warn
      "prefer-const": "warn",

      // React/Next.js rules
      "react/prop-types": "off", // Not needed with TypeScript
      "react/display-name": "off",

      // Error handling
      "@typescript-eslint/no-floating-promises": "warn",
      "@typescript-eslint/no-misused-promises": "warn"
    },
    "parserOptions": {
      "project": "./tsconfig.json"
    }
  }
]

export default eslintConfig;
