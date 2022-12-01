module.exports = {
  env: {
    node: true,
  },
  extends: ["eslint:recommended", "plugin:import/typescript"],
  rules: {
    "import/extensions": [
      "error",
      "always",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ],
  },

  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      extends: [
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
      ],
      parser: "@typescript-eslint/parser",
      plugins: ["@typescript-eslint", "import"],
      rules: {
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/ban-ts-comment": "off",
      },
    },
  ],
};
