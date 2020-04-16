module.exports = {
    env: {
        browser: true,
        es6: true
    },
    "settings":  {
        react:  {
          version:  'detect',  // Tells eslint-plugin-react to automatically detect the version of React to use
        }
    },
    "extends": [
        "eslint:recommended",//syntax specification
        "plugin:react/recommended",
        "plugin:@typescript-eslint/eslint-recommended"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parser": "@typescript-eslint/parser",
    parserOptions: {
        ecmaFeatures: {
            modules: true
        },
        ecmaVersion: 2018,
        sourceType: "module",
        project: './tsconfig.json',

    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
        "no-unused-vars": true,
        "no-empty": false,
        "import/no-unresolved": 0,
    },
};