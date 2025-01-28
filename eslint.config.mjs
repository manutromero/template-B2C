import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import eslintPluginJsonc from 'eslint-plugin-jsonc'

export default [
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...eslintPluginJsonc.configs['flat/recommended-with-jsonc'],
  {
    rules: {},
  },
]
