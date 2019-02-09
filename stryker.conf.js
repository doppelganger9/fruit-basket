module.exports = function(config) {
  config.set({
    mutator: "javascript",
    packageManager: "npm",
    reporters: ["clear-text", "progress", "html", "dashboard" ],
    testRunner: "jest",
    coverageAnalysis: "off"
  });
};
