'use strict';

var express = require('express');
var controller = require('./rutine.controller');

var router = express.Router();

router.get('/', controller.index);

/* Get all Rutines populated */
router.get('/allPopulated', controller.allPopulated);

router.get('/:id', controller.show);

router.post('/', controller.create);
router.put('/:id', controller.update);
router.patch('/:id', controller.update);
router.delete('/:id', controller.destroy);

module.exports = router;