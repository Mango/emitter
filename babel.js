'use strict';

/**
 * Dependencies
 */
var fs = require('fs');
var babel = require('babel');

/**
 * Create directories
 */
if (!fs.existsSync('./dist')) {
  fs.mkdirSync('./dist');
}

/**
 * Babel
 */
babel.transformFile('./src/index.js', {'loose': ['es6.classes', 'es6.modules']}, function (err, result) {
  if (err) { console.log('Error : ' + err.message); }
  fs.writeFileSync('./dist/index.js', result.code);
});
