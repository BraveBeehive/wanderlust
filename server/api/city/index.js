'use strict';

var express = require('express');
var controller = require('./city.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/:city_name', controller.byCity);
// router.post('/', controller.search);

module.exports = router;

