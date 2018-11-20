const mongoose = require('mongoose');
const Todo = mongoose.model('Todo');
const {findAll} = require('../utils/findAll');

exports.createTodo = function(req, res) {
	const newTodo = new Todo(req.body);
	newTodo.save((err, todo) => {
		if(err) {
			return res.status(400).send({
				message: err
			});
		} else {
			return res.json(todo);
		}
	})
};

exports.findTodo = function(req, res) {
	Todo.findOne({'title': req.body.title}, function(err, todo) {
		if(err) {
			return res.status(400).send({
				message: err
			});
		} else {
			return res.json(todo);
		}
	})
};

exports.updateTodo = function(req, res) {
	Todo.findOne({'title': req.body.title}, function(err, todo) {
		if(err) {
			return res.status(400).send({
				message: err
			});
		} else {
			todo.save((err, todo) => {
				if(err) {
					return res.status(400).send({
						message: err
					});
				} else {
					return res.json(todo)
				}
			})
		}
	})
}

exports.deleteTodo = function(req, res) {
	Todo.deleteOne({'title': req.body.title}, function(err, todo) {
		if(err) {
			return res.status(400).send({
				message: err
			});
		} else {
			return findAll(Todo, res);
		}
	})
}