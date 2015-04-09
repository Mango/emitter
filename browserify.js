'use strict';

/**
 * Dependencies
 */
var fs = require('fs');
var browserify = require('browserify');

/**
 * Create directories
 */
if (!fs.existsSync('./browser')) {
  fs.mkdirSync('./browser');
}

/**
 * Browserify
 */
browserify({ 'entries': './src/index.js', 'standalone': 'Emitter', 'debug': true })
  .transform('babelify', {'loose': ['es6.classes', 'es6.modules']})
  .bundle()
  .on('error', function (err) { console.log('Error : ' + err.message); })
  .pipe(fs.createWriteStream('browser/index.js'));