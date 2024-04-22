const globals = require("globals");
const tsParser = require("@typescript-eslint/parser");
const typescript = require("typescript-eslint");
const js = require("@eslint/js");
const jsdoc = require("eslint-plugin-jsdoc");
const jsonc = require("eslint-plugin-jsonc");
const jsoncParser = require("jsonc-eslint-parser");
const solid = require("eslint-plugin-solid/configs/typescript");

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
    }
  },
  js.configs.recommended,
  jsdoc.configs["flat/recommended"],
  ...jsonc.configs["flat/recommended-with-json"],
  solid,
  {
    name: "ESLint for SolidJS",
    files: ["**/*.jsx", "**/*.tsx"],
    languageOptions: {
      ecmaVersion: "latest",
      globals: {
        ...globals.browser,
        ...globals.node
      },
      parserOptions: {
        project: "tsconfig.json"
      },
      parser: tsParser
    },
    linterOptions: {
      noInlineConfig: false,
      reportUnusedDisableDirectives: "error"
    },
    settings: {
      solid: {
        version: "detect"
      }
    }
  },
  {
    name: "ESLint for TypeScript",
    files: ["**/*.ts"],
    plugins: {
      ts: typescript
    },
    ...typescript.configs["flat/recommended"],
    languageOptions: {
      ecmaVersion: "latest",
      globals: {
        ...globals.browser
      },
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module"
      },
      parser: tsParser
    },
    linterOptions: {
      noInlineConfig: false,
      reportUnusedDisableDirectives: "error"
    },
    settings: {
      typescript: {
        version: "detect"
      }
    }
  },
  {
    name: "ESLint for JSON",
    files: ["**/*.json"],
    plugins: {
      jsonc: jsonc
    },
    languageOptions: {
      ecmaVersion: "latest",
      globals: {},
      parser: jsoncParser
    },
    linterOptions: {
      noInlineConfig: false,
      reportUnusedDisableDirectives: "error"
    },
    settings: {
      jsonc: {
        version: "detect"
      }
    }
  }
];

module.exports = config;
