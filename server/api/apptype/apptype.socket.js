/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Apptype = require('./apptype.model');

exports.register = function(socket) {
  Apptype.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Apptype.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('apptype:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('apptype:remove', doc);
}