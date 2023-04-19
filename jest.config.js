/** @type {import('jest').Config} */
const config = {
    verbose: true,
    // testEnvironment: 'node',
    preset: "ts-jest",
    testEnvironment: "jsdom",
    // testMatch: ['**/__tests__/**/*.test.ts?(x)'],
    // testMatch: ['**/__tests__/**/*.test.ts?(x)'],
    transform: {
        "^.+\\.tsx?$": "ts-jest"
    },
    // "setupFiles": ["./src/setup-jest.ts"],
    setupFilesAfterEnv: ['./jest.setup.js'],
    testPathIgnorePatterns: ['/node_modules/'],
    // collectCoverageFrom: ['src/**/*.js'],
    // collectCoverage: true,
    // coverageDirectory: 'coverage',
    moduleDirectories: ["node_modules", "src/beaver"],
};

module.exports = config;