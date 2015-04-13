'use strict';

var _ = require('lodash');
var Exercise = require('./exercise.model');

// Get list of exercises
exports.index = function(req, res) {
  Exercise.find(function (err, exercises) {
    if(err) { return handleError(res, err); }
    return res.json(200, exercises);
  });
};

// Get a single exercise
exports.show = function(req, res) {
  Exercise.findById(req.params.id, function (err, exercise) {
    if(err) { return handleError(res, err); }
    if(!exercise) { return res.send(404); }
    return res.json(exercise);
  });
};

// Creates a new exercise in the DB.
exports.create = function(req, res) {
  Exercise.create(req.body, function(err, exercise) {
    if(err) { return handleError(res, err); }
    return res.json(201, exercise);
  });
};

// Updates an existing exercise in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Exercise.findById(req.params.id, function (err, exercise) {
    if (err) { return handleError(res, err); }
    if(!exercise) { return res.send(404); }
    var updated = _.merge(exercise, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, exercise);
    });
  });
};

// Deletes a exercise from the DB.
exports.destroy = function(req, res) {
  Exercise.findById(req.params.id, function (err, exercise) {
    if(err) { return handleError(res, err); }
    if(!exercise) { return res.send(404); }
    exercise.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}