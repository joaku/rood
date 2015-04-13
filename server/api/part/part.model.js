'use strict';

var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var PartSchema = new Schema({
	parttype: {
		type: Schema.Types.ObjectId,
		ref: 'Parttype',
		required: true
	},
	applications: [{
		order: Number,
		application: {
			type: Schema.Types.ObjectId,
			ref: 'Application',
			required: true
		}
	}
	]
});

module.exports = mongoose.model('Part', PartSchema);