const mongoose = require('mongoose');

//Schemas
const categorySchema = new mongoose.Schema({
    name: String
});

//Model Product
//model(name: string, schema?: mongoose.Schema<any, any, any>, collection?: string,
const Category = mongoose.model('Category', categorySchema, 'categories');

module.exports = Category;