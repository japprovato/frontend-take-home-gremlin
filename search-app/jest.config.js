module.exports = {
    testEnvironment: 'jsdom',
    rootDir: '.',
    modulePaths: ['<rootDir>'],
    moduleDirectories: ['node_modules', 'src'],
    setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
  }