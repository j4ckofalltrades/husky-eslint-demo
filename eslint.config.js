import js from "@eslint/js"
import eslintConfigPrettier from "eslint-config-prettier"

export default [
  js.configs.recommended,
  eslintConfigPrettier,
  {
    rules: {
      indent: ["error", 2],
      "linebreak-style": ["error", "unix"],
      quotes: ["error", "double"],
      semi: ["error", "never"],
    },
  },
]
