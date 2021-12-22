var express = require('express');
var router = express.Router();

var controllerHome = require('../controller/home.controller')

/* GET users listing. */
router.get('/', controllerHome.showProduct);

router.get('/product/:id', controllerHome.productDetail);

module.exports = router;
