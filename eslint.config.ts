import antfu from '@antfu/eslint-config'

export default antfu(
  {
    vue: {
      overrides: {
        'vue/block-order': ['error', {
          order: ['template', 'script', 'style'],
        }],
        'vue/max-attributes-per-line': ['error', {
          singleline: {
            max: 1,
          },
          multiline: {
            max: 1,
          },
        }],
        'vue/no-useless-mustaches': ['error', {
          ignoreIncludesComment: false,
          ignoreStringEscape: false,
        }],
        'vue/component-name-in-template-casing': ['error', 'kebab-case', {
          registeredComponentsOnly: false,
        }],
        'vue/v-slot-style': ['error', 'shorthand'],
        'vue/custom-event-name-casing': 'off',
        'vue/next-tick-style': ['error', 'promise'],
        'vue/html-self-closing': [
          'error',
          {
            html: {
              void: 'never',
              normal: 'never',
              component: 'always',
            },
            svg: 'always',
            math: 'always',
          },
        ],
      },
    },
    typescript: {
      overrides: {
        'ts/strict-boolean-expressions': 'off',
        'ts/no-unsafe-member-access': 'off',
        'ts/no-unsafe-return': 'off',
        'ts/no-unsafe-call': 'off',
        'ts/no-unsafe-argument': 'off',
        'ts/no-unsafe-assignment': 'off',
        'ts/no-floating-promises': 'off',
        'ts/array-type': ['error', {
          default: 'generic',
          readonly: 'generic',
        }],
        'import/consistent-type-specifier-style': ['error', 'prefer-top-level'],
      },
    },
    ignores: [
      'README.md',
      '.gitlab-ci.yml',
      'docs/**',
    ],
  },
  {
    files: ['**/*.vue'],
    rules: {
      'no-dupe-keys': 'error',
      'vue/multi-word-component-names': 'off',
      'vue/component-api-style': ['error', ['script-setup', 'composition']],
      'vue/block-lang': ['warn', {
        script: {
          lang: 'ts',
        },
      }],
    },
  },
  {
    rules: { 'node/prefer-global/process': ['error', 'always'] },
  },
  {
    ignores: [
      'packages/ui/src/runtime/components/templates/UPanzoom/src/panzoom.esm.ts',
      'packages/supperapp-lustudio/widget-calltouch/src/runtime/scripts/calltouch.ts',
      'playground/components/widgets/CallTouchWidget/scripts/calltouch.ts',
    ],
  },
)
