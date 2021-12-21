var account = [
    {
        "name": "Nguyễn Văn A",
        "email": "abc@gmail.com",
        "pass": "Abcabcabc"
    },
    {
        "name": "Trần Thị B",
        "email": "hello@123.com",
        "pass": "abcabcabc"
    },
    {
        "name": "Nguyễn Thị C",
        "email": "c@123.com",
        "pass": "123123123"
    }
]

module.exports.index = function(req, res) {
    var errs = [];
    res.render('login', {
        errs: errs
    });
};

module.exports.validationLogin = function(req, res){
    var email = req.body.email;
    var pass = req.body.pass;
    var emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    console.log(req.body.email, req.body.pass);
    var errs = [];

    if(!email.match(emailFormat))
        errs.push('Email không hợp lệ !');

    if(email != "hello@123.com" || pass != "1")
        errs.push('Sai email hoặc mật khẩu !!!');
    
    if(errs.length > 0){
        res.render('login', {
            errs: errs
        });
        return;
    }
        
    res.redirect('home');
}