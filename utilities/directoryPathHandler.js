// importing the module path to handle path of the route dir
const path = require("path");

const rootDir = path.dirname(require.main.filename);
// path.dirname(require.main.filename) returns the path to the directory where the main app.js is located

module.exports = rootDir;
