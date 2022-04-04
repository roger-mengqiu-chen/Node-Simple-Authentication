const express = require('express');
const router = express.Router();
const welcomeController = require('../controller/welcome');
const isAuth = require('../middleware/is-auth');

router.get('/', isAuth, welcomeController.getWelcome);

module.exports = router;