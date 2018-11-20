const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const Todo = require('./api/models/todoModel');
const todoRoutes = require('./api/routes/todoListRoutes');

const app = express();

const port = process.env.PORT || 5000;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/Practice', {useNewUrlParser: true});

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

todoRoutes(app);

app.listen(port, () => console.log('Listening on port ', port));