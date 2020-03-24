const express = require('express');
const todos = require('./data/db');

const app = express();

/* Выводит дынные с файла db.js */

app.get('/api/todos/', (req, res, next) => {
    res.send({todos: todos})
});

/* Выводит конкретную туду по id */

app.get('/api/todos/:id', (req, res, next) => {
    let foundTodo = todos.find((todo) => {
        return todo.id === req.params.id;
    });
    if (foundTodo) {
        res.status(200).send(foundTodo);
    } else {
        res.status(404).send(`Page with ID: ` + req.params.id + ` not found`)
    }
});

/* Запуск сервера */

app.listen(3000, (req, res) => {
    console.log('server works');
});
