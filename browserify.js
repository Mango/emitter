'use strict';

var fs = require('fs');
var browserify = require('browserify');
var babelify = require('babelify');

if (!fs.existsSync('./dist')) {
  fs.mkdirSync('./dist');
}

browserify({'debug': true, 'standalone': 'Emitter'})
  .transform(babelify)
  .require('./index.js', {'entry': true})
  .bundle()
  .on('error', function (err) { console.log('Error : ' + err.message); })
  .pipe(fs.createWriteStream('dist/build.js'));
