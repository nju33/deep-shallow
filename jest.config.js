module.exports = {
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  transform: {
    '\\.ts$': 'ts-jest'
  },
  testMatch: ['<rootDir>/*.test.ts'],
  collectCoverage: true,
  coverageDirectory: 'coverage'
};
