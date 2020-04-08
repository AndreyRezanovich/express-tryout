const express = require('express');
const router = express.Router();
const Todo = require('../models/todo.model');
const mongoose = require('mongoose');

module.exports = Todo;
module.exports = router;


const notFound = (_id) => {
    return {
        status: 'error',
        error: `Document with id of ${_id} was not found`
    };
};
const paramRequired = (param) => {
    return {
        status: 'error',
        error: `${param} parameter is required`
    };
};

router.get('/', (req, res) => {
    Todo.find((err, result) => {
        if (err) {
            res.status(400).send(err);
        } else {
            res.status(200).send(result)
        }
    })
});

router.get('/:id', (req, res) => {
    Todo.findById(req.params.id, (err, result) => {
        if (err) {
            res.status(400).send(notFound);
        } else {
            res.status(200).send(result);
        }
    })
});

router.post('', (req, res) => {
    const newTodo = req.body;
    newTodo._id = mongoose.Types.ObjectId();
    let todo = new Todo(newTodo);
    todo.save((err, result) => {
        if (err) {
            res.send(err.message);
        } else {
            console.log(result);
            res.send(result);
        }
    });
});

router.delete('/:id', (req, res) => {
    let deletedTodoId = req.params.id;
    if (deletedTodoId) {
        Todo.findOneAndDelete({_id: deletedTodoId}, (err, result) => {
            console.log('error', err);
            console.log('result', result);
            if (err) {
                res.status(404).send(notFound(deletedTodoId));
            } else {
                res.status(200).send({
                    status: 'success',
                    _id: deletedTodoId
                });
            }
        })
    } else {
        res.status(400).send(paramRequired('id'))
    }
});

router.put('/:id', ((req, res) => {
    const editedTodoId = req.params.id;
    Todo.findByIdAndUpdate(editedTodoId, req.body, (err, result) => {
        if (err) {
            res.status(404).send(err)
        } else {
            res.status(200).send(result)
        }
    })
}));
