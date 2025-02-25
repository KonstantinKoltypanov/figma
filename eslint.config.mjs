import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReactConfig from "eslint-plugin-react/configs/jsx-runtime.js";
import { fixupConfigRules } from "@eslint/compat";


export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"]
  },

  {
    languageOptions: {
      parserOptions: {
        ecmaFeatures: { jsx: true }
      }
    }
  },

  {
    languageOptions: { globals: globals.browser }
  },


    pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...fixupConfigRules(pluginReactConfig),
  
  {
    ignores: ["**/node_modules/", ".git/","dist/**/*",".history/**/*"],
  }
];