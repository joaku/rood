'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ExerciseSchema = new Schema({
  name: {
  	type: String,
  	required: true
  },
  url_animation: {
  	type: String,
  	default: "uploads/animations/default.gif"
  },
  active: Boolean
});

module.exports = mongoose.model('Exercise', ExerciseSchema);