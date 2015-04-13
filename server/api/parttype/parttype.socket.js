/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Parttype = require('./parttype.model');

exports.register = function(socket) {
  Parttype.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Parttype.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('parttype:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('parttype:remove', doc);
}