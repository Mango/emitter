'use strict';

var fs = require('fs');
var babel = require('babel');

if (!fs.existsSync('./es5')) {
  fs.mkdirSync('./es5');
}

babel.transformFile('index.js', {'loose': ['es6.classes']}, function (err, result) {
  if (err) { console.log('Error : ' + err.message); }
  fs.writeFileSync('./es5/index.js', result.code);
});