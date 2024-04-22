const globals = require("globals");
const jsonc = require("eslint-plugin-jsonc");

const config = [{
    ignores: ["**/dist/**", "**/node_modules/**", "**/build/**"],
    files: ["**/*.json"],
    languageOptions: {
      ecmaVersion: "latest",
      globals: {
        ...globals.browser,
        ...globals.node
      }
    }
  },
  ...jsonc.configs["flat/recommended-with-json"]
];

module.exports = config;
