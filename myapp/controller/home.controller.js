const Product = require('../models/product.model');
const Category = require('../models/category.model');
const SuggestToday = require('../models/suggest-today.model');

let products = [];
let categories = [];
let suggestToday = [];

Product.find((err, data) => {
    products = data;
});

Category.find((err, data) => {
    categories = data;
});

SuggestToday.find((err, data) => {
    suggestToday = data;
});

module.exports.showProduct = (req, res) => {
    res.render('home', {
        products: products,
        categories: categories,
        suggestToday: suggestToday
    });
};

module.exports.productDetail = (req, res) => {
    //params của router
    let id = req.params.id;

    let product = products.find((product) => {
        return parseInt(id) === product.id;
    });

    res.render('productDetail', {
        product: product
    });
};

// let products = [
//     {
//         "id": 1,
//         "productName": "Sổ tay ghi chép mục tiêu: My Day My Life",
//         "sold": "Đã bán 1000+",
//         "price": "40.000đ",
//         "discount": "-70%",
//         "img": "https://salt.tikicdn.com/cache/200x200/ts/product/59/55/c3/efc937e8a0244a04f670ff316846a4f7.jpg"
//     },
//     {
//         "id": 2,
//         "productName": "Giá Đỡ Điện Thoại Và Máy Tính Bảng",
//         "sold": "Đã bán 25",
//         "price": "25.000đ",
//         "discount": "",
//         "img": "https://salt.tikicdn.com/cache/200x200/ts/product/f8/cb/e1/783a03a1c5c98adc3938994579893e43.jpg"
//     },
//     {
//         "id": 3,
//         "productName": "Người nam châm (Tái bản 2019)",
//         "sold": "Đã bán 150",
//         "price": "48.750đ",
//         "discount": "-25%",
//         "img": "https://salt.tikicdn.com/cache/200x200/ts/product/0f/2b/f4/6ada8869a4ea8cfd557729253324c3fb.jpg"

//     },
//     {
//         "id": 4,
//         "productName": "Sổ tay ghi chép mục tiêu: My Day My Life",
//         "sold": "Đã bán 1000+",
//         "price": "40.000đ",
//         "discount": "-70%",
//         "img": "https://salt.tikicdn.com/cache/200x200/ts/product/59/55/c3/efc937e8a0244a04f670ff316846a4f7.jpg"
//     },
//     {
//         "id": 5,
//         "productName": "Sổ tay ghi chép mục tiêu: My Day My Life",
//         "sold": "Đã bán 1000+",
//         "price": "40.000đ",
//         "discount": "-70%",
//         "img": "https://salt.tikicdn.com/cache/200x200/ts/product/59/55/c3/efc937e8a0244a04f670ff316846a4f7.jpg"
//     },
//     {
//         "id": 6,
//         "productName": "Sổ tay ghi chép mục tiêu: My Day My Life",
//         "sold": "Đã bán 1000+",
//         "price": "40.000đ",
//         "discount": "-70%",
//         "img": "https://salt.tikicdn.com/cache/200x200/ts/product/59/55/c3/efc937e8a0244a04f670ff316846a4f7.jpg"
//     },
//     {
//         "id": 7,
//         "productName": "Sổ tay ghi chép mục tiêu: My Day My Life",
//         "sold": "Đã bán 1000+",
//         "price": "40.000đ",
//         "discount": "-70%",
//         "img": "https://salt.tikicdn.com/cache/200x200/ts/product/59/55/c3/efc937e8a0244a04f670ff316846a4f7.jpg"
//     },
//     {
//         "id": 8,
//         "productName": "Sổ tay ghi chép mục tiêu: My Day My Life",
//         "sold": "Đã bán 1000+",
//         "price": "40.000đ",
//         "discount": "",
//         "img": "https://salt.tikicdn.com/cache/200x200/ts/product/59/55/c3/efc937e8a0244a04f670ff316846a4f7.jpg"
//     }
// ]

// let categories = [
//     { 
//         "id": 1, 
//         "categoryName": "Thịt rau củ"
//     },
//     { 
//         "id": 2, 
//         "categoryName": "Bách hóa" 
//     },
//     { 
//         "id": 3, 
//         "categoryName": "Nhà cửa" 
//     },
//     { 
//         "id": 4, 
//         "categoryName": "Thiết bị số" 
//     },
//     { 
//         "id": 5, 
//         "categoryName": "Điện thoại" 
//     },
//     { 
//         "id": 6, 
//         "categoryName": "Mẹ & Bé" 
//     },
//     { 
//         "id": 5, 
//         "categoryName": "Làm đẹp"
//     },
//     { 
//         "id": 8, 
//         "categoryName": "Gia dụng" 
//     },
//     { 
//         "id": 9, 
//         "categoryName": "Thời trang nữ" 
//     },
//     { 
//         "id": 10, 
//         "categoryName": "Thời trang nam" 
//     },
//     { 
//         "id": 11, 
//         "categoryName": "Giày nữ" 
//     },
//     { 
//         "id": 12, 
//         "categoryName": "Túi nữ" 
//     }
// ]

// let suggestToday = [
//     {
//         "id": 1,
//         "title": "Coupon 50K",
//         "img": "https://salt.tikicdn.com/cache/w100/ts/tikimsp/95/01/3f/c4d00ed692f9d638aefd3ce05955a0e3.png.webp"
//     },
//     {
//         "id": 2,
//         "title": "MUA 1 TẶNG 1",
//         "img": "https://salt.tikicdn.com/cache/w100/ts/tikimsp/bd/bd/c1/60a9051007edb43958a95b423679b6e2.png.webp"
//     },
//     {
//         "id": 3,
//         "title": "Deal Siêu Hot",
//         "img": "https://salt.tikicdn.com/cache/w100/ts/personalish/41/99/9a/8898607d7fca4b79775a708c57a8152f.png.webp"
//     },
//     {
//         "id": 4,
//         "title": "Rẻ vô đối",
//         "img": "https://salt.tikicdn.com/cache/w100/ts/tikimsp/95/01/3f/c4d00ed692f9d638aefd3ce05955a0e3.png.webp"
//     },
//     {
//         "id": 5,
//         "title": "Đi Chợ Siêu Sale",
//         "img": "https://salt.tikicdn.com/cache/w100/ts/tikimsp/95/01/3f/c4d00ed692f9d638aefd3ce05955a0e3.png.webp"
//     },
//     {
//         "id": 6,
//         "title": "Hàng mới",
//         "img": "https://salt.tikicdn.com/cache/w100/ts/tikimsp/95/01/3f/c4d00ed692f9d638aefd3ce05955a0e3.png.webp"
//     },
//     {
//         "id": 7,
//         "title": "Xu hướng thời trang",
//         "img": "https://salt.tikicdn.com/cache/w100/ts/tikimsp/95/01/3f/c4d00ed692f9d638aefd3ce05955a0e3.png.webp"
//     }
// ]
