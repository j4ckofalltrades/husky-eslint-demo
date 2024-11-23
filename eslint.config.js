import globals from "globals"
import js from "@eslint/js"
import eslintConfigPrettier from "eslint-config-prettier"

export default [
  js.configs.recommended,
  eslintConfigPrettier,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  {
    rules: {
      indent: ["error", 2],
      "linebreak-style": ["error", "unix"],
      quotes: ["error", "double"],
      semi: ["error", "never"],
      "no-var": ["error"],
    },
  },
]
