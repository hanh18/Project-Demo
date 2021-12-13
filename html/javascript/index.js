var fs = require('fs');

//đọc file JSON (đồng bộ)
var productListJSON = fs.readFileSync('./data.json', { encoding: 'utf-8' });
// console.log(productListJSON);

//convert to object 
var productList = JSON.parse(productListJSON);
// console.log(productList);

function convertImg(img){
    return '<div class="product-img"> <img src="'+ img +'" alt=""></div>';
}


// console.log(convertImg(productList[0].img));

var content = convertImg(productList[0].img);

document.getElementById('item').innerHTML = content;

// ===============
// var itemId = $('#item');

// function render (container, items){
//     var htmlItems = items.map(function(item){
//         return convertImg(item.img);
//     });

//     var html = htmlItems.join('');

//     container.html(html);
//     console.log(html);
// }

// render(itemId, productList);

// var mainContainer = document.getElementById("item");

// var div = document.createElement("div");

// div.innerHTML = convertImg(productList[0].img);

// mainContainer.appendChild(div);

// var content = convertImg(productList[0].img);

// document.getElementById('item').innerHTML = content;
