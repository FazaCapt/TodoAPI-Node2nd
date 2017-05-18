// Resource Creation Endpoint - POST /todos 18:08

var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp')


module.exports = { mongoose };

// module.exports = { 
//     mongoose: mongoose 
// }