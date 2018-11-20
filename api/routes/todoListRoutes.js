module.exports = function(app) {
	let todos = require('../controllers/todoListController');

	// todoList Routes
	app.route('/tasks')
			.get(todos.listAllTodos)
			.post(todos.createTodo);
	
	app.route('/tasks/:taskId')
		.get(todos.readTodo)
		.put(todos.updateTodo)
		.delete(todos.deleteTodo);
};