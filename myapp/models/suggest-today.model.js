const mongoose = require('mongoose');

//Schemas
const suggestTodaySchema = mongoose.Schema({
    _id: Number,
    title: String,
    img: String
});

//Model
//name: string, schema?: mongoose.Schema<any, any, any>, collection?: string
const SuggestToday = mongoose.model('SuggestToday', suggestTodaySchema, 'suggest-today');

module.exports = SuggestToday;