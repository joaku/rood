/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Rutine = require('./rutine.model');

exports.register = function(socket) {
  Rutine.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Rutine.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('rutine:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('rutine:remove', doc);
}