'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ParttypeSchema = new Schema({
  name: String
});

module.exports = mongoose.model('Parttype', ParttypeSchema);