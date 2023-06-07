const config = require("./jest.config");

module.exports = {
  ...config,
  transform: {
    "^.+\\.(t|j)sx?$": "@swc/jest",
  },
};
