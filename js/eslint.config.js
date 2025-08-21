import js from "@eslint/js";
import stylistic from "@stylistic/eslint-plugin";
import eslintPluginN from "eslint-plugin-n";
import prettier from "eslint-config-prettier";
import unusedImports from "eslint-plugin-unused-imports";
import globals from "globals";


export default [
  js.configs.recommended,

  eslintPluginN.configs["flat/recommended-script"],

  {
    ignores: ["**/node_modules/*", "**/dist/*", "**/coverage/*"],
  },
  {
    files: ["**/*.js", "**/*.mjs", "**/*.cjs"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.vitest,
      },
    },
    plugins: {
      "@stylistic": stylistic,
      "unused-imports": unusedImports,
    },
    rules: {
      "no-unused-vars": "off",
      "unused-imports/no-unused-imports": "error",
      "n/no-process-env": "off",
      "unused-imports/no-unused-vars": [
        "warn",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "after-used",
          argsIgnorePattern: "^_",
        },
      ],

      "@stylistic/no-extra-semi": "warn",
      "@stylistic/semi": ["warn", "always"],
      "@stylistic/quotes": ["warn", "single"],
      indent: ["warn", 2],
      "max-len": ["warn", { code: 100, ignoreUrls: true }],

      "n/no-missing-import": "off", // handled by bundler/runtime
      "n/no-unpublished-import": "off",

      "comma-dangle": ["warn", "always-multiline"],
      "no-console": "off", // allow console in backend
      "no-extra-boolean-cast": "off",
      "prefer-const": "warn",
    },
  },

  // Prettier (disable conflicting ESLint rules)
  prettier,
];
