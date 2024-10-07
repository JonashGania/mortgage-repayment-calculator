import globals from "globals";
import pluginJs from "@eslint/js";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import typescriptParser from "@typescript-eslint/parser";

export default [
  {
    ignores: ["dist/", "webpack.config.js", "src/styles/**/*.css"],
  },
  { files: ["src/**/*.{js,ts,jsx,tsx}"] },
  { languageOptions: { globals: globals.browser, parser: typescriptParser } },
  pluginJs.configs.recommended,
  eslintPluginPrettierRecommended,
];
