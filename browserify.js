'use strict';

var fs = require('fs');
var browserify = require('browserify');
var babelify = require('babelify');

if (!fs.existsSync('./es5')) {
  fs.mkdirSync('./es5');
}

browserify({'debug': true})
  .transform(babelify)
  .require('./index.js', {'entry': true})
  .bundle()
  .on('error', function (err) { console.log('Error : ' + err.message); })
  .pipe(fs.createWriteStream('es5/index.js'));
