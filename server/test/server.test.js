// Testing POST /todos 19:50
// Testing GET /todos 6:14

const expect = require('expect');
const request = require('supertest');

var { app } = require('./../server');
var { Todo } = require('./../models/todo');

const todos = [{
    text: 'First text todo'
}, {
    text: 'Second text todo'
}];


beforeEach((done) => { //Berjalan sebelum setiap tes di blok ini
    Todo.remove({}).then(() => {
        return Todo.insertMany(todos);
    }).then(() => done());
});

describe('POST /todos', () => {
    it('Should create a new todo', (done) => {
        var text = 'Test todo text';

        request(app)
            .post('/todos')
            .send({ text })
            .expect(200)
            .expect((res) => {
                expect(res.body.text).toBe(text);
            })
            .end((err, res) => {
                if (err) {
                    return done(err);
                }

                Todo.find({ text }).then((todos) => {
                    expect(todos.length).toBe(1);
                    expect(todos[0].text).toBe(text);
                    done();
                }).catch((e) => done(e)); //ini lupa done-nya dikasih (e)
            });
    });

    it('Should not create todo with invalid body data', (done) => {
        request(app)
            .post('/todos') //Sempet bingung ini diambil darimana. hasilnya 404 kalo tanpa slash
            .send({})
            .expect(400)
            .end((err, res) => {
                if (err) {
                    return done(err);
                }

                Todo.find().then((todos) => {
                    expect(todos.length).toBe(2);
                    done();
                }).catch((e) => done(e));
            });
    });
});

describe('GET /todos', () => {
    it('Should get all todos', (done) => {
        request(app)
            .get('/todos')
            .expect(200)
            .expect((res) => {
                expect(res.body.todos.length).toBe(2);
            })
            .end(done);
    })
})