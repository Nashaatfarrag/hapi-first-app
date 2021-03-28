var main = require('./mainRoutes');
var user = require('./user');

// console.log(main)
module.exports = [...user , ...main];