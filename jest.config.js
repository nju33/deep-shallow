module.exports = {
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  transform: {
    '\\.ts$': 'ts-jest',
  },
  testMatch: ['<rootDir>/src/*.test.ts'],
  collectCoverage: true,
  coverageDirectory: 'coverage',
};
