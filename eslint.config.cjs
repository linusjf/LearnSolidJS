const globals = require("globals");
const js = require("@eslint/js");
const jsdoc = require("eslint-plugin-jsdoc");

const config = [{
  ignores: ["**/dist/**", "**/node_modules/**", "**/build/**"],
  files: [
    "**/*.jsx",
    "**/*.tsx",
    "**/*.json",
    "**/*.ts",
    "**/*.js",
    "**/*.mjs",
    "**/*.cjs",
    "./.*.js"
  ],
  languageOptions: {
    ecmaVersion: "latest",
    globals: {
      ...globals.browser,
      ...globals.node
    }
  },
  ...js.configs.recommended,
  ...jsdoc.configs["flat/recommended"]
}];

module.exports = config;
