'use strict';

const { Router } = require('express');
const asyncHandler = require('express-async-handler');

const controller = require('./controller');

const router = Router();

router.get('/', asyncHandler(controller.hello));

module.exports = router;
