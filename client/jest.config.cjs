// jest.config.js
module.exports = {
  transform: {
    "^.+\\.jsx?$": "babel-jest",
  },
  setupFiles: ["<rootDir>/setup.jest.js"],
  setupFilesAfterEnv: ["@testing-library/jest-dom"],
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "\\.(css|less|sass|scss)$": "<rootDir>/__mocks__/styleMock.js",
  },
};