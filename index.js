const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Practice', {useNewUrlParser: true}, function(err) {
	if(err) {
		console.log('Error', err);
	} else {
		console.log('Successfully connected');
	}
});