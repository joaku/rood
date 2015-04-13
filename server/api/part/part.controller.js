'use strict';

var _ = require('lodash');
var Part = require('./part.model');

// Get list of parts
exports.index = function(req, res) {
  Part.find(function (err, parts) {
    if(err) { return handleError(res, err); }
    return res.json(200, parts);
  });
};

// Get a single part
exports.show = function(req, res) {
  Part.findById(req.params.id, function (err, part) {
    if(err) { return handleError(res, err); }
    if(!part) { return res.send(404); }
    return res.json(part);
  });
};

// Creates a new part in the DB.
exports.create = function(req, res) {
  Part.create(req.body, function(err, part) {
    if(err) { return handleError(res, err); }
    return res.json(201, part);
  });
};

// Updates an existing part in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Part.findById(req.params.id, function (err, part) {
    if (err) { return handleError(res, err); }
    if(!part) { return res.send(404); }
    var updated = _.merge(part, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, part);
    });
  });
};

// Deletes a part from the DB.
exports.destroy = function(req, res) {
  Part.findById(req.params.id, function (err, part) {
    if(err) { return handleError(res, err); }
    if(!part) { return res.send(404); }
    part.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}