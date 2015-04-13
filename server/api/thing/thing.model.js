'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ThingSchema = new Schema({
  name: String,
  info: String,
  active: Boolean,
  number: {
  	type: Number,
  	default: 201
  }
});

module.exports = mongoose.model('Thing', ThingSchema);