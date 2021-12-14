accountList = [
    {
        name: 'abc@gmail.com',
        pass: '1',
    },
    {
        name: 'hello@123.com',
        pass: '1',
    },
]

function validationLogin(){
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    var check = accountList.find(function(account){
        return account.name == username && account.pass == password;
    });

    if(check != undefined)
        alert("login successful !!!");
    else
        alert("wrong");
}