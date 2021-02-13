/**
 * @type {import('@stryker-mutator/api/core').StrykerOptions}
 */
module.exports = {
  packageManager: "npm",
  reporters: ["clear-text", "progress", "html", "dashboard"],
  testRunner: "jest",
  coverageAnalysis: "off",
  thresholds: { high: 90, low: 70, break: 50 }
};
