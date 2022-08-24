module.exports = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    "styled-components":
      "<rootDir>/node_modules/styled-components/dist/styled-components.cjs.js",
  },
};
