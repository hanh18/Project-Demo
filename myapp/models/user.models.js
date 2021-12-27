const mongoose = require('mongoose');

//tạo schema
//tạo các field muốn lưu trữ trong db
//tại đây có thể validation
const userSchema = new mongoose.Schema({
    "name": String,
    "email": String,
    "pass": String
});

//tạo model user
//Tên model, truyền vào schema, tên collection
const User = mongoose.model('User', userSchema, 'users');

module.exports = User;