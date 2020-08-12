module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
     "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
     "jsx-a11y/label-has-associated-control": [ "error", {
        "required": {
          "some": [ "nesting", "id"  ]
        }
      }],
      "jsx-a11y/label-has-for": [ "error", {
        "required": {
          "some": [ "nesting", "id"  ]
        }
      }],
      semi: ["warn", "never"]
  },
};
