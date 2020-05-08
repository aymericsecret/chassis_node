'use strict';
const { Router } = require('express');

const hello = require('./hello');

const router = Router();

router.use('/hello', hello);

module.exports = router;
