/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Exercise = require('./exercise.model');

exports.register = function(socket) {
  Exercise.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Exercise.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('exercise:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('exercise:remove', doc);
}