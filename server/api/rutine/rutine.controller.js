'use strict';

var _ = require('lodash');
var Rutine = require('./rutine.model');

// Get list of rutines
exports.index = function(req, res) {
  //Rutine.find(function (err, rutines) {
    Rutine.find({})
    .populate("parts")
    .exec(function (err, rutines) {
      if(err) { return handleError(res, err); }
      return res.json(200, rutines);
    });
  };

// Get a single rutine
exports.show = function(req, res) {
  Rutine.findById(req.params.id, function (err, rutine) {
    if(err) { return handleError(res, err); }
    if(!rutine) { return res.send(404); }
    return res.json(rutine);
  });
};

// Creates a new rutine in the DB.
exports.create = function(req, res) {
  Rutine.create(req.body, function(err, rutine) {
    if(err) { return handleError(res, err); }
    return res.json(201, rutine);
  });
};

// Updates an existing rutine in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Rutine.findById(req.params.id, function (err, rutine) {
    if (err) { return handleError(res, err); }
    if(!rutine) { return res.send(404); }
    var updated = _.merge(rutine, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, rutine);
    });
  });
};

// Deletes a rutine from the DB.
exports.destroy = function(req, res) {
  Rutine.findById(req.params.id, function (err, rutine) {
    if(err) { return handleError(res, err); }
    if(!rutine) { return res.send(404); }
    rutine.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}