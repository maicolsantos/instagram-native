module.exports = {
  root: true,
  extends: [
    'airbnb',
  ],
  rules: {
    'no-console': [1, { 'allow': ['warn', 'error'] }],
    'react/prefer-stateless-function': 0,
    'react/prop-types': 0,
    'react/jsx-filename-extension': 0,
    'react/jsx-one-expression-per-line': 0,
    'comma-dangle': [ 'error', 'only-multiline' ],
    'import/prefer-default-export': 0,
    'prefer-const': 'error',
    'no-plusplus': [ 'error', { allowForLoopAfterthoughts: true }],
    'newline-before-return': 'error',
    'max-len': [ 'error', { code: 80, ignorePattern: '^import\\W.*' }],
    'no-multiple-empty-lines': [ 'error', { max: 1, maxBOF: 0, maxEOF: 0 }],
    'eol-last': [ 'error', 'always' ],
    'import/no-cycle': [ 2, { maxDepth: 1 }],
    semi: [ 'error', 'never' ],
    'object-curly-spacing': [ 'error', 'always' ],
    'object-curly-newline': [ 'error', {
      multiline: true,
      consistent: true,
      minProperties: 4,
    }],
    'array-bracket-spacing': [ 'error', 'always', {
      objectsInArrays: false,
      arraysInArrays: false,
    }],
    'no-param-reassign': [ 'error', {
      props: true,
      ignorePropertyModificationsFor: [
        'state',
        'acc',
        'e',
      ],
    }],
  },
  settings: {
    'import/resolver': {
      'babel-plugin-root-import': {
        rootPathSuffix: 'src',
      },
    },
  },
}
