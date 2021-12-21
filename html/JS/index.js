//1.localstorage: get username
var userName = localStorage.getItem('name');

function loginUserName(name) {
    return '<img with="30px" height="30px" src="https://salt.tikicdn.com/ts/upload/67/de/1e/90e54b0a7a59948dd910ba50954c702e.png" alt=""></img> ' + name;
}
var contentLoginUserName = loginUserName(userName);

document.getElementById('login-username').innerHTML = contentLoginUserName;


//2.Lấy dữ liệu từ server JSON
//Khai báo url để lấy dữ liệu
var url = 'http://localhost:5501/product';
//get dữ liệu
axios.get(url).then(function(response){
    //trong respone trả về có nhiều thuộc tính như status, data, statusText
    //thuộc tính data là nơi lưu trữ dữ liệu
    var items = response.data;
    // console.log('Data loading:...', items);
    render(items);
})

//Hàm triển khai thêm srcipt vào HTML
function render(productList){
    var arrProduct = productList.map(function(item){
        return contentHtml(item.img, item.productName, item.sold, item.price, item.discount);
    })
    
    var content = arrProduct.join('');

    document.getElementById('container-product-items').innerHTML = content;
}

// các hàm chuyển thành script HTML 
function contentHtml (img, name, sold, price, discount){
    return `<div class="product-items">

    <div class="product-img"> 
        <img src= ${img} alt="">
    </div>

    <div class="cover">
        <div class="product-name">
            ${name}
        </div>

        <div style="display: flex; align-items: center; margin: 0 0 4px 0;">
            <div style="display: flex;">
                <div style="position: relative;">
                    <div style="display: flex; align-items: center; width: 15px; white-space: nowrap; left: 0px; top: 0px;">
                        <img src="https://assets.dryicons.com/uploads/icon/svg/12715/7b07ac52-2bd3-41d3-bac8-766575d2e180.svg" alt="">
                        <img src="https://assets.dryicons.com/uploads/icon/svg/12715/7b07ac52-2bd3-41d3-bac8-766575d2e180.svg" alt="">
                        <img src="https://assets.dryicons.com/uploads/icon/svg/12715/7b07ac52-2bd3-41d3-bac8-766575d2e180.svg" alt="">
                        <img src="https://assets.dryicons.com/uploads/icon/svg/12715/7b07ac52-2bd3-41d3-bac8-766575d2e180.svg" alt="">
                        <img src="https://assets.dryicons.com/uploads/icon/svg/12713/0ba1c779-e08a-49d5-a61c-a35d478881c3.svg" alt="">
                    </div>
                </div>
            </div>
        </div>

        <div class="product-sold">
            ${sold}
        </div>
        
        <div class="product-price has-discount">
            <div class="price-discount__price">
                ${price}
            </div>
            <div class="price-discount__discount">
                ${discount}
            </div>
        </div>
    </div></div>`
}

//chạy server: json-server --watch [tên file json] --port [cổng]