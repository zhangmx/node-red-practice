/** @type {import('jest').Config} */
const config = {
    verbose: true,
    testEnvironment: 'node',
    testMatch: ['**/tests/**/*.test.js'],
    testPathIgnorePatterns: ['/node_modules/'],
    collectCoverageFrom: ['src/**/*.js'],
    collectCoverage: true,
    coverageDirectory: 'coverage',
    moduleDirectories: ["node_modules", "src"],
};

module.exports = config;