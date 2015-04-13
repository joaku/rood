/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Part = require('./part.model');

exports.register = function(socket) {
  Part.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Part.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('part:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('part:remove', doc);
}