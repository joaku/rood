'use strict';

var _ = require('lodash');
var Apptype = require('./apptype.model');

// Get list of apptypes
exports.index = function(req, res) {
  Apptype.find(function (err, apptypes) {
    if(err) { return handleError(res, err); }
    return res.json(200, apptypes);
  });
};

// Get a single apptype
exports.show = function(req, res) {
  Apptype.findById(req.params.id, function (err, apptype) {
    if(err) { return handleError(res, err); }
    if(!apptype) { return res.send(404); }
    return res.json(apptype);
  });
};

// Creates a new apptype in the DB.
exports.create = function(req, res) {
  Apptype.create(req.body, function(err, apptype) {
    if(err) { return handleError(res, err); }
    return res.json(201, apptype);
  });
};

// Updates an existing apptype in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Apptype.findById(req.params.id, function (err, apptype) {
    if (err) { return handleError(res, err); }
    if(!apptype) { return res.send(404); }
    var updated = _.merge(apptype, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, apptype);
    });
  });
};

// Deletes a apptype from the DB.
exports.destroy = function(req, res) {
  Apptype.findById(req.params.id, function (err, apptype) {
    if(err) { return handleError(res, err); }
    if(!apptype) { return res.send(404); }
    apptype.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}