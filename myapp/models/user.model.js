const mongoose = require('mongoose');

//Tạo schema
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    pass: String
});

//Tạo model User
//model(name: string, schema?: mongoose.Schema<any, any, any>, collection?: string,
const User = mongoose.model('User', userSchema);

module.exports = User;