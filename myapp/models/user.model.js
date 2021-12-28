const mongoose = require('mongoose');

//Tạo schema
const userSchema = new mongoose.Schema({
    "name": String,
    "email": String,
    "pass": String
});

//Tạo model User
//Tham số đầu tiên là tên collection, schema
const User = mongoose.model('User', userSchema);

module.exports = User;