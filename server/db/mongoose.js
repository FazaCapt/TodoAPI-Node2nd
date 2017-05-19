// Resource Creation Endpoint - POST /todos 18:08
// Creating a Test Database 
var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI); //|| 'mongodb://localhost:27017/TodoApp');


// module.exports = { mongoose };

// module.exports = { 
//     mongoose: mongoose 
// }

// Test Database:
// process.env.NODE_ENV === 'production'
// process.env.NODE_ENV === 'development'
// process.env.NODE_ENV === 'test'