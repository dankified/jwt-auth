exports.findAll = function(model, res) {
	model.find({}, function(err, docs) {
		if(err) {
			return res.status(400).json({message: 'Not found'});
		} else {
			return res.send(docs);
		}
	})
}