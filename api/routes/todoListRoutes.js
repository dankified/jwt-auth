module.exports = function(app) {
	let todos = require('../controllers/todoListController');
	let userHandlers = require('../controllers/userController');

	// todoList Routes
	app.route('/tasks')
			.get(todos.listAllTodos)
			.post(userHandlers.loginRequired, todos.createTodo);
	
	app.route('/tasks/:taskId')
		.get(todos.readTodo)
		.put(todos.updateTodo)
		.delete(todos.deleteTodo);

	app.route('/auth/register')
		.post(userHandlers.register);

	app.route('/auth/sign_in')
		.post(userHandlers.signIn);
};