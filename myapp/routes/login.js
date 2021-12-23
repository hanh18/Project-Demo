var express = require('express');
var router = express.Router();

var controllerLogin = require('../controller/login.controller');

router.get('/', controllerLogin.index);

router.post('/', controllerLogin.validationLogin);

module.exports = router;
