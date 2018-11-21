const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const Todo = require('./api/models/todoModel');
const User = require('./api/models/userModel');
const todoRoutes = require('./api/routes/todoListRoutes');
const jwt = require('jsonwebtoken');

const app = express();

const port = process.env.PORT || 5000;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/Practice', {useNewUrlParser: true});

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(function(req, res, next) {
	if(req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0] === 'JWT') {
		jwt.verify(req.headers.authorization.split(' ')[1], 'RESTFULAPIs', function(err, decode) {
			if(err) req.user = undefined;
			req.user = decode;
		});
	} else {
		req.user = undefined;
		next();
	}
});

todoRoutes(app);

app.listen(port, () => console.log('Listening on port ', port));