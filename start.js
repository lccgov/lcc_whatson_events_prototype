var path = require('path')

// Check for `node_modules` folder and warn if missing
var fs = require('fs')

if (!fs.existsSync(path.join(__dirname, '/node_modules'))) {
  console.error('ERROR: Node module folder missing. Try running `npm install`')
  process.exit(0)
}

// remove .port.tmp if it exists
try {
  fs.unlinkSync(path.join(__dirname, '/.port.tmp'))
} catch (e) {}

var gulpfile = path.join(__dirname, '/gulpfile.js')

var gulp = require('./node_modules/gulp/index.js');
require(gulpfile);
gulp.start();
process.on('SIGINT', function () {
  // remove .port.tmp if it exists
  try {
    fs.unlinkSync(path.join(__dirname, '/.port.tmp'))
  } catch (e) {}

  process.exit(0)
})
