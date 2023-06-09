// @ts-check

// Ensure compatibility of plugin and tailwind
const { withTailwind } = require("./dist/prettier");
module.exports = withTailwind();
