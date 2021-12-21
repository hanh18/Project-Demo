var express = require('express');
var router = express.Router();

var controllerHome = require('../controller/home.controller')

/* GET users listing. */
router.get('/', controllerHome.showProduct);

module.exports = router;
