//  The Mongoose ORM 1:02
//  Setting Up Mongoose 16:07

var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp')


//Menentukan type pada object tersebut
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

// Users
// Email, required it,trim it, set type, set min length of 1

var User = mongoose.model('User', {
    email: {
        type: String,
        required: true,
        minLength: 1,
        trim: true
    }
});

var newUser = new User({
    email: 'fazafahamsyah@gmail.com'
})

newUser.save().then((docs) => {
        console.log(JSON.stringify(docs, undefined, 2));
    }, (e) => {
        console.log('Unable save to User');
    })
    //Memasukan data sesuai model
    // var newTodo = new Todo({
    //     text: 'Cook dinner'
    // })

// newTodo.save().then((docs) => {
//     console.log(docs);
// }, (e) => {
//     console.log('Unable to save todo');
// })

// var otherTodo = new Todo({
//     text: 'Something todo'
// text: true
// text: "    edit this film  "
// text: 'Beli makanan',
// completed: false,
// completedAt: 3456
// });

// otherTodo.save().then((docs) => {
//     console.log(JSON.stringify(docs, undefined, 2));
// }, (e) => {
//     console.log('Unable to save todo', e);
// })

// Users
// Email, required it,trim it, set type, set min length of 1