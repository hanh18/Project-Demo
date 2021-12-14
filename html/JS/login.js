accountList = [
    {
        email: 'abc@gmail.com',
        pass: 'Abcabcabc',
    },
    {
        email: 'hello@123.com',
        pass: 'abcabcabc',
    },
]

function validationLogin(){
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var messageEmail = '';
    var messagePassword = '';
    var message = '';
   
    // validation email
    if(email == ""){
        messageEmail = "* Bạn chưa nhập email !";
    }
    else if(!email.match(emailFormat)){
        messageEmail = "* Email không hợp lệ !";
    }

    // validation password
    if(password == ""){
        messagePassword = "* Bạn chưa nhập mật khẩu !";
    }
    else if(password.length < 8){
        messagePassword = "* Mật khẩu ít nhất có 8 ký tự !"; 
        document.getElementById('password').value = ""; 
    }

    // kiểm tra xác thực pass & email
    if(messageEmail == "" && messagePassword == ""){
        var check = accountList.find(function(account){
            return account.email == email && account.pass == password;
        });
    
        if(check != undefined){
            //chuyển trang
            window.location.href = "home.html";
        }
        else {
            message = '* Email và mật khẩu không khớp !!!';
        }
    }
    
    document.getElementById("message").innerHTML = message;
    document.getElementById("message-email").innerHTML = messageEmail;
    document.getElementById("message-password").innerHTML = messagePassword;
}