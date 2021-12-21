var express = require('express');
var router = express.Router();

var controllerLogin = require('../controller/login.controller');

/* GET login listing. */
router.get('/', controllerLogin.index);

router.post('/', controllerLogin.validationLogin);

module.exports = router;
