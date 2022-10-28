/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    '^\\$lib/(.*)$': '<rootDir>/src/lib/$1',
    '^\\$app/(.*)$': '<rootDir>/.svelte-kit/dev/runtime/app/$1',
  },
  testPathIgnorePatterns: ['cypress/(.*)', 'src/lib/components/(.*).test.ts'],
  globals: {
    'ts-jest': {
      tsconfig: 'src/__tests__/tsconfig.json',
      diagnostics: true,
    },
  },
  coveragePathIgnorePatterns: [
    '.*.d.ts',
    '.*.types.ts',
    '/constants/',
    '/routes/',
  ],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: -0,
    },
  },
};
