'use strict';

var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var RutineSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	parts: [{
		type: Schema.Types.ObjectId,
		ref: 'Part'
	}],
	active: Boolean
});

module.exports = mongoose.model('Rutine', RutineSchema);