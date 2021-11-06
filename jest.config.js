// // jest.config.js
export default {
  // [...]
  extensionsToTreatAsEsm: ['.ts'],
  globals: {
    'ts-jest': {
      useESM: true,
    },
  },
  moduleNameMapper: {
    // '^(\\.{1,2}/.*)\\.js$': '$1',
    '^(\\.{1,2}/.*)\\.js$': '$1',
    // "~/(.*)": "<rootDir>/src/$1"
  },
  preset: 'ts-jest/presets/default-esm',
  "automock": false,
  "setupFiles": [
    "./setupJest.js"
  ]
}
