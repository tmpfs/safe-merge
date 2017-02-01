const merge = require('../index')
const defaults = {devtool: 'sourcemap', plugins: []}
const input = {devtool: false}
const options = merge(defaults, input);
console.dir(options);
