// cucumber.js
const common = [
    './tests/spec/features/**/*.feature', // Specify our feature files
    '--require-module ts-node/register', // Load TypeScript module
    '--require ./tests/spec/steps/**/*.ts', // Load step definitions
    '--format progress-bar', // Load custom formatter
    '--format node_modules/cucumber-pretty', // Load custom formatter
].join(' ');

module.exports = {
    default: common,
};
