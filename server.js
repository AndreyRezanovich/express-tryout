const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const todoController = require('./controllers/todos.controller');
const mongo = require('mongoose');
// const MongoClient = require("mongodb").MongoClient;

const app = express();


// const url = "mongodb://localhost:27017/";
// const mongoClient = new MongoClient(url, { useNewUrlParser: true });
//
// mongoClient.connect(function(err, client){
//
//     const db = client.db("todosdb");
//     const collection = db.collection("todos");
//     let todo = {text: 'New todo'};
//     collection.insertOne(todo, function(err, result){
//
//         if(err){
//             return console.log(err);
//         }
//         console.log(result.ops);
//         client.close();
//     });
// });


app.use(cors());
app.use(bodyParser.json());


app.listen(4201, (req, res) => {
    // mongo.connect('');
    console.log('server works ');
});

// app.post('/api/todos/', todoController);
// app.delete('/api/todos/:id', todoController);
// app.get('/api/todos/', todoController);
// app.put('/api/todos/:id', todoController);

app.use('/api/todos', todoController);
