const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Todo Schema
 */

 const TodoSchema = new Schema({
	 title: {
		 type: String,
		 trim: true,
		 required: true
	 }, 
	 content: {
		 type: String,
		 trim: true,
		 required: true
	 },
	 done: {
		 type: Boolean,
		 default: false
	 }
 });

 mongoose.model('Todo', TodoSchema);