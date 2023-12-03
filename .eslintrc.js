module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-custom`
  extends: ["@vintage/eslint-config/base"],
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  },
};