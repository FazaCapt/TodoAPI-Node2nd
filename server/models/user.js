// Resource Creation Endpoint - POST /todos 18:08

var mongoose = require('mongoose');
var User = mongoose.model('User', {
    email: {
        type: String,
        required: true,
        minLength: 1,
        trim: true
    }
});

module.exports = { User };