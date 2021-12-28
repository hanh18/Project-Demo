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

// module.exports.searchProductByPrice = (req, res) => {
//     var q = req.query.q;

//     console.log(q);

//     // var matchedProducts = products.filter((product) =>{
//     //     console.log(product.productName);
//     //     return product.productName.lowercase().indexOf(q.lowercase()) !== -1;
//     // });
//     var matchedProducts = products.filter((product) =>{
//         return product.price.indexOf(q) != -1;
//     });

//     console.log(matchedProducts);

//     res.render('search', {
//         products: matchedProducts
//     });
// };

module.exports.searchProductByName = (req, res) => {
    var q = req.query.q;

    console.log(q);

    // var matchedProducts = products.filter((product) =>{
    //     console.log(product.productName);
    //     return product.productName.lowercase().indexOf(q.lowercase()) !== -1;
    // });
    var matchedProducts = products.filter((product) =>{
        return product.productName.indexOf(q) != -1;
    });

    console.log(matchedProducts);

    res.render('search', {
        products: matchedProducts
    });
};