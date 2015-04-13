'use strict';

var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var ApplicationSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	exercise: {
		type: Schema.Types.ObjectId,
		ref: 'Exercise',
		required: true
	},
	type: {
		type: Schema.Types.ObjectId,
		ref: 'Apptype',
		required: true
	},
	total_type: {
		type: Number
	},
	single_duration: {
		type: Number
	},
	active: Boolean
});

module.exports = mongoose.model('Application', ApplicationSchema);