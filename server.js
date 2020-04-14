const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const todoController = require('./controllers/todos.controller');
const db = require('./data/db');
const mongoose = require('mongoose');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.listen(4201, (req, res) => {
    mongoose.connect(db.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    }, (err) => {
        if (err) console.log('Not connected to DB');
        else console.log('Connected to DB');
    });
    console.log('server works');
});

app.use('/api/todos', todoController);
