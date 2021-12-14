productList = [
{
    productName: 'Sổ tay ghi chép mục tiêu: My Day My Life',
    sold: 'Đã bán 1000+',
    price: '40.000đ',
    discount: '-70%',
    img: 'https://salt.tikicdn.com/cache/200x200/ts/product/59/55/c3/efc937e8a0244a04f670ff316846a4f7.jpg'
},
{
    productName: 'Giá Đỡ Điện Thoại Và Máy Tính Bảng',
    sold: 'Đã bán 25',
    price: '25.000đ',
    discount: '',
    img: 'https://salt.tikicdn.com/cache/200x200/ts/product/f8/cb/e1/783a03a1c5c98adc3938994579893e43.jpg'
},
{
    productName: 'Người nam châm (Tái bản 2019)',
    sold: 'Đã bán 150',
    price: '48.750đ',
    discount: '-25%',
    img: 'https://salt.tikicdn.com/cache/200x200/ts/product/0f/2b/f4/6ada8869a4ea8cfd557729253324c3fb.jpg'
},
{
    productName: 'Sổ tay ghi chép mục tiêu: My Day My Life',
    sold: 'Đã bán 1000+',
    price: '40.000đ',
    discount: '-70%',
    img: 'https://salt.tikicdn.com/cache/200x200/ts/product/59/55/c3/efc937e8a0244a04f670ff316846a4f7.jpg'
},
{
    productName: 'Sổ tay ghi chép mục tiêu: My Day My Life',
    sold: 'Đã bán 1000+',
    price: '40.000đ',
    discount: '-70%',
    img: 'https://salt.tikicdn.com/cache/200x200/ts/product/59/55/c3/efc937e8a0244a04f670ff316846a4f7.jpg'
},
{
    productName: 'Sổ tay ghi chép mục tiêu: My Day My Life',
    sold: 'Đã bán 1000+',
    price: '40.000đ',
    discount: '-70%',
    img: 'https://salt.tikicdn.com/cache/200x200/ts/product/59/55/c3/efc937e8a0244a04f670ff316846a4f7.jpg'
},
{
    productName: 'Sổ tay ghi chép mục tiêu: My Day My Life',
    sold: 'Đã bán 1000+',
    price: '40.000đ',
    discount: '-70%',
    img: 'https://salt.tikicdn.com/cache/200x200/ts/product/59/55/c3/efc937e8a0244a04f670ff316846a4f7.jpg'
},
{
    productName: 'Sổ tay ghi chép mục tiêu: My Day My Life',
    sold: 'Đã bán 1000+',
    price: '40.000đ',
    discount: '-70%',
    img: 'https://salt.tikicdn.com/cache/200x200/ts/product/59/55/c3/efc937e8a0244a04f670ff316846a4f7.jpg'
}
]

function imgProduct(img){
    return '<div class="product-img"> <img src="' + img + '" alt=""></div>';
}

function evaluate(){
    return '<div style="display: flex; align-items: center; margin: 0 0 4px 0;"><div style="display: flex;"><div style="position: relative;"><div style="display: flex; align-items: center; width: 15px; white-space: nowrap; left: 0px; top: 0px;"><img src="https://assets.dryicons.com/uploads/icon/svg/12715/7b07ac52-2bd3-41d3-bac8-766575d2e180.svg" alt=""><img src="https://assets.dryicons.com/uploads/icon/svg/12715/7b07ac52-2bd3-41d3-bac8-766575d2e180.svg" alt=""><img src="https://assets.dryicons.com/uploads/icon/svg/12715/7b07ac52-2bd3-41d3-bac8-766575d2e180.svg" alt=""><img src="https://assets.dryicons.com/uploads/icon/svg/12715/7b07ac52-2bd3-41d3-bac8-766575d2e180.svg" alt=""><img src="https://assets.dryicons.com/uploads/icon/svg/12713/0ba1c779-e08a-49d5-a61c-a35d478881c3.svg" alt=""></div></div></div></div>'
}

function soleProduct(sold){
    return '<div class="product-sold">' + sold + '</div>';
}

function priceProduct(price, discount){
    if(discount == ""){
        return '<div class="product-price"><div class="price-not-discount">' + price + '</div></div>';
    }

    return '<div class="product-price has-discount"><div class="price-discount__price">' + price + '</div><div class="price-discount__discount">' + discount + '</div></div>';
}

function convertCover(name, sold, price, discount){
    return '<div class="cover"><div class="product-name">' + name + '</div>' + evaluate() + soleProduct(sold) + priceProduct(price, discount) + '</div>';
}

function productItems (img, name, sold, price, discount){
    return '<div class="product-items" id="item">' + imgProduct(img) + convertCover(name, sold, price, discount) + '</div>'
}

var arrProduct = productList.map(function(item){
    return productItems(item.img, item.productName, item.sold, item.price, item.discount);
})

var content = arrProduct.join('');

document.getElementById('container-product-items').innerHTML = content;

