'use strict';

var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var RutineSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	user: {
		type: Schema.Types.ObjectId,
		ref: 'User',
		required: true
	},
	parts: [
	{
		parttype: {
			type: Schema.Types.ObjectId,
			ref: 'Parttype',
			required: true
		},
		applications: [{
			order: Number,
			application: {
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
			}
		}
		]
	}
	],
	active: Boolean
});

module.exports = mongoose.model('Rutine', RutineSchema);