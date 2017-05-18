// Resource Creation Endpoint - POST /todos 18:08

const express = require('express');
const bodyParser = require('body-parser');

var { mongoose } = require('./db/mongoose');
var { Todo } = require('./models/todo');
var { User } = require('./models/user');

var app = express();

app.use(bodyParser.json());
//json nya harus huruf kecil jangan huruf capital

app.post('/todos', (req, res) => {
    // console.log(req.body);

    var todo = new Todo({ //Todo itu diambil dari module {Todo}
        text: req.body.text //req.body.text : mengambil data yang diinputkan
    });

    todo.save().then((doc) => {
        res.send(doc)
    }, (e) => {
        res.status(400).send(e); //Method status 400 itu httpnya kalo misalnya error
    })

})

// GET /todos/123kakdamdksad

app.listen(3000, () => {
    console.log('Started on port 3000');
})