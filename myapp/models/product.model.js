const mongoose = require('mongoose');

//Schemas
const productSchema = new mongoose.Schema({
    productName: String,
    sold: String,
    price: String,
    discount: String,
    img: String
});

//Model Product
//model(name: string, schema?: mongoose.Schema<any, any, any>, collection?: string,
const Product = mongoose.model('Product', productSchema, 'products');

module.exports = Product;