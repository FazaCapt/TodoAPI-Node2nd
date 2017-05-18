// Resource Creation Endpoint - POST /todos 18:08

var mongoose = require('mongoose');
var Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true, // Ini validator, jadi kalo kosong dia akan mengeluarkan error. inget pake 'd' u/ required
        minLength: 1, //tidak ada karakter akan error
        trim: true //Spasi didepan dan dibelakang akan diabaikan dalam hasil
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
})

module.exports = { Todo };