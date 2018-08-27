function addToCart() {
    let currentCount = $("#bag-count").html();
    currentCount++;
    $("#bag-count").html(currentCount);
}

$(".container").on('click', ".wide", function() {addToCart();});