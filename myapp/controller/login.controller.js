// var accounts = [
//     {
//         "name": "Nguyễn Văn A",
//         "email": "abc@gmail.com",
//         "pass": "Abcabcabc"
//     },
//     {
//         "name": "Trần Thị B",
//         "email": "hello@123.com",
//         "pass": "abcabcabc"
//     },
//     {
//         "name": "Nguyễn Thị C",
//         "email": "c@123.com",
//         "pass": "123123123"
//     }
// ]

const Users = require('../models/user.models');

let accounts;

//trả về 1 promise
Users.find().then(function(user){
    accounts = user;
});

module.exports.index = (req, res) => {
    var errs = [];
    res.render('login', {
        errs: errs
    });
};

module.exports.validationLogin = (req, res) => {
    var email = req.body.email;
    var pass = req.body.pass;
    var emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var errs = [];
    
    if(!email.match(emailFormat))
        errs.push('Email không hợp lệ !');
    
    if(pass.length < 8)
        errs.push('Mật khẩu ít nhất có 8 ký tự');
    
    if(errs.length > 0){
        res.render('login', {
            errs: errs
        });
        return;
    }

    if(errs.length == 0) {
        var check = accounts.find((account) => {
            return account.email == email && account.pass == pass;
        });
    
        if(check != undefined)
            res.redirect('home');
        else {
            errs.push('Sai email hoặc mật khẩu !!!');

            res.render('login', {
                errs: errs
            });
            return;
        }
    }
}