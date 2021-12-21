module.exports.showProduct = function(req, res){
    res.render('home', {
        products: products
    });
};

var products = [
    {
        "id": 1,
        "productName": "Sổ tay ghi chép mục tiêu: My Day My Life",
        "sold": "Đã bán 1000+",
        "price": "40.000đ",
        "discount": "-70%",
        "img": "https://salt.tikicdn.com/cache/200x200/ts/product/59/55/c3/efc937e8a0244a04f670ff316846a4f7.jpg"
    },
    {
        "id": 2,
        "productName": "Giá Đỡ Điện Thoại Và Máy Tính Bảng",
        "sold": "Đã bán 25",
        "price": "25.000đ",
        "discount": "",
        "img": "https://salt.tikicdn.com/cache/200x200/ts/product/f8/cb/e1/783a03a1c5c98adc3938994579893e43.jpg"
    },
    {
        "id": 3,
        "productName": "Người nam châm (Tái bản 2019)",
        "sold": "Đã bán 150",
        "price": "48.750đ",
        "discount": "-25%",
        "img": "https://salt.tikicdn.com/cache/200x200/ts/product/0f/2b/f4/6ada8869a4ea8cfd557729253324c3fb.jpg"

    },
    {
        "id": 4,
        "productName": "Sổ tay ghi chép mục tiêu: My Day My Life",
        "sold": "Đã bán 1000+",
        "price": "40.000đ",
        "discount": "-70%",
        "img": "https://salt.tikicdn.com/cache/200x200/ts/product/59/55/c3/efc937e8a0244a04f670ff316846a4f7.jpg"
    },
    {
        "id": 5,
        "productName": "Sổ tay ghi chép mục tiêu: My Day My Life",
        "sold": "Đã bán 1000+",
        "price": "40.000đ",
        "discount": "-70%",
        "img": "https://salt.tikicdn.com/cache/200x200/ts/product/59/55/c3/efc937e8a0244a04f670ff316846a4f7.jpg"
    },
    {
        "id": 6,
        "productName": "Sổ tay ghi chép mục tiêu: My Day My Life",
        "sold": "Đã bán 1000+",
        "price": "40.000đ",
        "discount": "-70%",
        "img": "https://salt.tikicdn.com/cache/200x200/ts/product/59/55/c3/efc937e8a0244a04f670ff316846a4f7.jpg"
    },
    {
        "id": 7,
        "productName": "Sổ tay ghi chép mục tiêu: My Day My Life",
        "sold": "Đã bán 1000+",
        "price": "40.000đ",
        "discount": "-70%",
        "img": "https://salt.tikicdn.com/cache/200x200/ts/product/59/55/c3/efc937e8a0244a04f670ff316846a4f7.jpg"
    },
    {
        "id": 8,
        "productName": "Sổ tay ghi chép mục tiêu: My Day My Life",
        "sold": "Đã bán 1000+",
        "price": "40.000đ",
        "discount": "-70%",
        "img": "https://salt.tikicdn.com/cache/200x200/ts/product/59/55/c3/efc937e8a0244a04f670ff316846a4f7.jpg"
    }
]