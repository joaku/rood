'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ApptypeSchema = new Schema({
  name: String
});

module.exports = mongoose.model('Apptype', ApptypeSchema);