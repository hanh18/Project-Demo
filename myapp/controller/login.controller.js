const User = require('../models/user.model');

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
        // User.find().then((accounts) => {
        //     let check = accounts.find((account) => {
        //         return account.email == email && account.pass == pass;
        //     });
        
        //     if(check != undefined)
        //         res.redirect('home');
        //     else {
        //         errs.push('Sai email hoặc mật khẩu !!!');
    
        //         res.render('login', {
        //             errs: errs
        //         });
        //         return;
        //     }
        // });

        User.find({email: email, pass: pass}, (err, data) => {
            if (err)
            {
                res.send(err);
            }
            console.log(data);

            if(data.length > 0)
                res.redirect('home');
            else {
                errs.push('Sai email hoặc mật khẩu !!!');
    
                res.render('login', {
                    errs: errs
                });
                return;
            }
        })
    }
}