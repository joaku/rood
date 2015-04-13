'use strict';

var _ = require('lodash');
var Parttype = require('./parttype.model');

// Get list of parttypes
exports.index = function(req, res) {
  Parttype.find(function (err, parttypes) {
    if(err) { return handleError(res, err); }
    return res.json(200, parttypes);
  });
};

// Get a single parttype
exports.show = function(req, res) {
  Parttype.findById(req.params.id, function (err, parttype) {
    if(err) { return handleError(res, err); }
    if(!parttype) { return res.send(404); }
    return res.json(parttype);
  });
};

// Creates a new parttype in the DB.
exports.create = function(req, res) {
  Parttype.create(req.body, function(err, parttype) {
    if(err) { return handleError(res, err); }
    return res.json(201, parttype);
  });
};

// Updates an existing parttype in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Parttype.findById(req.params.id, function (err, parttype) {
    if (err) { return handleError(res, err); }
    if(!parttype) { return res.send(404); }
    var updated = _.merge(parttype, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, parttype);
    });
  });
};

// Deletes a parttype from the DB.
exports.destroy = function(req, res) {
  Parttype.findById(req.params.id, function (err, parttype) {
    if(err) { return handleError(res, err); }
    if(!parttype) { return res.send(404); }
    parttype.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}