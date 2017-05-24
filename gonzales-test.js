var gonzales = require('gonzales-pe');
var fs = require('fs');

var source = fs.readFileSync('./sass/styles.sass', 'utf8');

var ast = gonzales.parse(source, { syntax: 'sass' });

console.log(ast.content[51]);
