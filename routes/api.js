const express = require('express');
const router = express.Router();
const {Todo, DoneTodo} = require('../models/todo');

router.get('/todos', (req, res, next) => {
  //this will return all the data, exposing only the id and action field to the client
  Todo.find({}, 'action')
    .then(data => res.json(data))
    .catch(next)
});

router.get('/doneTodos', (req, res, next) => {
  //this will return all the data, exposing only the id and action field to the client
  DoneTodo.find({}, 'action')
    .then(data => res.json(data))
    .catch(next)
});

router.post('/todos', (req, res, next) => {
  if(req.body.action){
    Todo.create(req.body)
      .then(data => res.json(data))
      .catch(next)
  } else {
    res.json({
      error: "The input field is empty"
    })
  }
});

router.post('/doneTodos', (req, res, next) => {
  if(req.body.action){
    DoneTodo.create(req.body)
      .then(data => res.json(data))
      .catch(next)
  } else {
    res.json({
      error: "The input field is empty"
    })
  }
});

router.delete('/todos/:id', (req, res, next) => {
  Todo.findOneAndDelete({"_id": req.params.id})
    .then(data => res.json(data))
    .catch(next)
})

router.delete('/doneTodos/:id', (req, res, next) => {
  DoneTodo.findOneAndDelete({"_id": req.params.id})
    .then(data => res.json(data))
    .catch(next)
})

module.exports = router;
