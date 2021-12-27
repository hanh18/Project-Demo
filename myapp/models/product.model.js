const mongoose = require('mongoose');

//Schema
const productSchema = new mongoose.Schema({
    productName: String,
    sold: String,
    price: String,
    discount: String,
    img: String
});

//Create model
const Product = mongoose.model('Product', productSchema, 'products');

//Export
module.exports = Product;