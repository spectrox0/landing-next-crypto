module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2023,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },

  env: {
    browser: true,
    node: true,
    jest: true,
    es6: true,
  },

  settings: {
    react: {
      version: "detect",
    },
    "import/resolver": {
      node: {
        extensions: [".ts", ".tsx"],
      },
    },
  },

  plugins: [
    "@typescript-eslint",
    "eslint-plugin-no-inline-styles",
    "unused-imports",
    /*     "testing-library", */
  ],
  extends: [
    "next/core-web-vitals",
    "plugin:@typescript-eslint/recommended",
    "airbnb",
    "prettier",
    "plugin:jsx-a11y/recommended",
    "plugin:prettier/recommended",
    "plugin:sonarjs/recommended",
    "plugin:security/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jest-dom/recommended",
    /*     "testing-library", */
  ],
  overrides: [
    {
      files: ["*.spec.ts"],
      rules: {
        "jest/expect-expect": "off",
      },
    },
  ],
  globals: {
    globalThis: false,
  },
  rules: {
    "react/jsx-no-useless-fragment": ["error", { allowExpressions: true }],
    "no-shadow": "off",
    "no-param-reassign": 0,
    "import/no-extraneous-dependencies": [
      "error",
      { devDependencies: ["**/*.test.ts", "**/*.test.tsx"] },
    ],
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
        caughtErrorsIgnorePattern: "^_",
      },
    ],
    "@typescript-eslint/no-explicit-any": "error",
    "react/react-in-jsx-scope": "off",
    "react/jsx-filename-extension": [
      1,
      {
        extensions: [".ts", ".tsx", ".js", ".jsx"],
      },
    ],
    "react/jsx-props-no-spreading": "off",
    "import/extensions": [
      "off",
      "ignorePackages",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ],
    "jsx-a11y/anchor-is-valid": [
      "error",
      {
        components: ["Link"],
        specialLink: ["hrefLeft", "hrefRight"],
        aspects: ["invalidHref", "preferButton"],
      },
    ],
    "no-console": "warn",
    "unused-imports/no-unused-imports": "error",
    "yaml-semantic-error": "off",
    "no-inline-styles/no-inline-styles": 2,
    "react/prop-types": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "no-implicit-globals": "error",
    "react-hooks/exhaustive-deps": "off",
    "no-nested-ternary": "off",
    "import/prefer-default-export": "off",
    "react/require-default-props": "off",
    "react/function-component-definition": [
      "error",
      {
        namedComponents: ["function-declaration", "arrow-function"],
        unnamedComponents: "arrow-function",
      },
    ],
  },
};
