const mongoose = require('mongoose');

//Schemas
const categorySchema = new mongoose.Schema({
    categoryName: String
});

//Model Product
//model(name: string, schema?: mongoose.Schema<any, any, any>, collection?: string,
const Category = mongoose.model('Category', categorySchema, 'categories');

module.exports = Category;