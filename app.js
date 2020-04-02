// const express = require('express');
// const app = express();
// let todos = require('./data/db') || [];
// const cors = require('cors');
// const bodyParser = require('body-parser');
// const server = require('server');
//

//
// app.use(cors());
// app.use(bodyParser.json());   /*<--- почитать за типы передаваемых данных*/
// const notFound = (id) => {
//     return {
//         status: 'error',
//         error: `Document with id of ${id} was not found`
//     };
// };

/* Выводит дынные с файла db.js */
//
// app.get('/api/todos', (req, res) => {
//     res.set('Access-Control-Allow-Origin', '*');
//     res.send(todos)
// });

// app.post('/api/todos', (req, res) => {
//     res.set('Access-Control-Allow-Origin', '*');
//     let nextId = '0';
//     let newTodo = {
//         id: nextId,
//         text: req.body.text || ''
//     };
//
//     if (todos && todos.length) {
//         const todosIds = todos.map((todo) => {
//             return Number(todo.id);
//         });
//         const maxIdValue = Math.max.apply(this, todosIds);
//         nextId = (maxIdValue + 1) + '';
//         newTodo.id = nextId;
//     }
//     todos.push(newTodo);
//     res.send(newTodo);
// });

/* Выводит конкретную туду по id */


// app.get('/api/todos/:id', (req, res, next) => {
//     res.set('Access-Control-Allow-Origin', '*');
//     let foundTodo = todos.find((todo) => {
//         return todo.id === req.params.id;
//     });
//     if (foundTodo) {
//         res.status(200).send(foundTodo);
//     } else {
//         res.status(404).send(notFound(req.params.id))
//     }
// });

// const filterArray = (array, id) => {
//     let newArray = [];
//     for (let i = 0; i < array.length; i++) {
//         if (array[i].id !== id) {
//             newArray.push(array[i]);
//         }
//     }
//     return newArray;
// };
//
// const arraySome = (array, id) => {
//     for (let i = 0; i < array.length; i++) {
//         if (array[i].id === id) {
//             return true;
//         }
//     }
//     return false;
// };
//
// const handleDelete = (req, res) => {
//     res.set('Access-Control-Allow-Origin', '*');
//     const removeTodoId = req.params.id;
//     if (removeTodoId) {
//         if (!arraySome(todos, removeTodoId)) {
//             res.status(404).send(notFound(req.params.id));
//             return;
//         }
//         todos = filterArray(todos, removeTodoId);
//         res.status(200).send({
//             status: 'success',
//             id: removeTodoId,
//         });
//     } else {
//         res.status(404).send({
//                 status: 'error',
//                 error: 'Missing required parameter: id'
//             }
//         );
//     }
// };



// app.delete('/api/todos/:id', todoController);

// app.put('/api/todos/:id', ((req, res) => {
//     res.set('Access-Control-Allow-Origin', '*');
//     const editedTodoId = req.params.id;
//     const editedTodoText = req.body.text;
//     if (editedTodoId) {
//         const foundEditedTodo = todos.find((todo) => {
//             return todo.id === editedTodoId;
//         });
//         if (foundEditedTodo) {
//             foundEditedTodo.text = editedTodoText;
//             res.status(200).send({
//                 status: 'success',
//                 data: foundEditedTodo
//             });
//         } else {
//             res.status(404).send(notFound(editedTodoId));
//         }
//     } else {
//         res.status(404).send({
//             status: 'error',
//             error: 'Missing required parameter: id'
//         });
//     }
// }));


// app.put('/api/todos/:id', todoController);

/* Запуск сервера */

// app.listen(4201, (req, res) => {
//     console.log('server works');
// });
