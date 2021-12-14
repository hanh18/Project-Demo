accountList = [
    {
        name: 'abc@gmail.com',
        pass: 'Abcabcabc',
    },
    {
        name: 'hello@123.com',
        pass: 'abcabcabc',
    },
]

function validationLogin(){
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var usernameFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var messageUsername = '';
    var messagePassword = '';

    // validation email
    // if(username == ""){
    //     document.getElementById("message-username").innerHTML = "* Bạn chưa nhập email !";
    // }
    // else if(!username.match(usernameFormat)){
    //     // alert("Valid email address!");
    //     document.getElementById("message-username").innerHTML = "* Email không hợp lệ !";
    // }
    // else {
    //     document.getElementById("message-username").innerHTML = "";
    // }

    // //check password
    // if(password == ""){
    //     document.getElementById("message-password").innerHTML = "* Bạn chưa nhập mật khẩu !";
    // }
    // else if(password.length < 8){
    //     document.getElementById("message-password").innerHTML = "* Mật khẩu ít nhất có 8 ký tự !";  
    //     return false;  
    // }
    // else {
    //     document.getElementById("message-password").innerHTML = "";
    // }

    // validation email
    if(username == ""){
        messageUsername = "* Bạn chưa nhập email !";
    }
    else if(!username.match(usernameFormat)){
        // alert("Valid email address!");
        messageUsername = "* Email không hợp lệ !";
    }

    if(password == ""){
        messagePassword = "* Bạn chưa nhập mật khẩu !";
    }
    else if(password.length < 8){
        messagePassword = "* Mật khẩu ít nhất có 8 ký tự !";  
    }



    // check pass & user
    // var check = accountList.find(function(account){
    //     return account.name == username && account.pass == password;
    // });

    // if(check != undefined){
    //     contentMessage = '';
    //     // alert("login successful !!!");
    //     // window.location.href = "http://www.w3schools.com";
    //     //chuyển trang
    //     window.location.href = "home.html";
    // }
    // else {
    //     // contentMessage = 'Đăng nhập không thành công !!!';
    //     // document.getElementById('password').value = "";
    //     alert("wrong");
    //     // document.getElementById('message').innerHTML = contentMessage;
    // }

    document.getElementById("message-username").innerHTML = messageUsername;
    document.getElementById("message-password").innerHTML = messagePassword;
}