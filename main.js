var main = $('main');
$('.searchButton').on('click', function(e) {
    console.log(e);
    var searchValue = $('.searchBar').val();

    console.log(search);
    search(searchValue);
});

function search(searchValue){
var setting = {
    url: "https://api.etsy.com/v2/listings/active.js?api_key=sx5w42c5z4uckn692tt3vce0&keywords="+searchValue+"&includes=Images,Shop",
    type: "GET",
    success: function(data) {
        console.log(data);
        data.results.map(function(product, i, arr) {
            var div = $('<div class="product"></div>');
            var price = $('<span class="price">$' + product.price + '</span>');
            var name = $('<h4>' + product.title + '</h4>');
            var image = $('<img src=' + product.Images[0].url_fullxfull + '>');
            var shop = $('<span class="shop">' + product.Shop.shop_name + '</span>');
            console.log(price);
            div.append(image, name, shop, price);
            main.append(div);
        });
    },

    error: function(xhr, status, error) {
        console.log('etsy request did not work' + error);
    },
    dataType: 'jsonp'
};


$.ajax(setting);
}
