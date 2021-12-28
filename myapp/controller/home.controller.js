const Product = require('../models/product.model');
const Category = require('../models/category.model');
const SuggestToday = require('../models/suggest-today.model');

let products = [];
let categories = [];
let suggestToday = [];

Product.find((err, data) => {
    products = data;
});

Category.find((err, data) => {
    categories = data;
});

SuggestToday.find((err, data) => {
    suggestToday = data;
});

module.exports.showProduct = (req, res) => {
    res.render('home', {
        products: products,
        categories: categories,
        suggestToday: suggestToday
    });
};

module.exports.productDetail = (req, res) => {
    //params của router
    let id = req.params.id;

    Product.findById(id,(err, data) => {
        res.render('productDetail', {
            product: data
        });
    });
};