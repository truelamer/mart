function showMoreProducts(elm) {
    let newProducts = `<div class="products">`;
    for (let i = 0; i < 4; i++)
    {
        newProducts += `<div class="product-item">                        
        <div class="product-image-with-hover">
            <div class="product-image"><img src="src/img/man.png" alt="model's photo"></div>
            <div class="product-image-actions">
                <button class="product-button"><i class="far fa-heart"></i></button>
                <button class="product-button"><i class="fas fa-random"></i></button>
                <button class="product-button"><i class="far fa-clock"></i></button>
                <button class="product-button wide"><i class="fas fa-cart-plus"></i><span class="product-image-action-to-cart">Add to cart</span></button>
            </div>
        </div>
        <div class="product-title-and-price">
            <div class="product-title">Blue tshirt</div>
            <div class="product-price">$26</div>
        </div>
    </div>`;
    }
    newProducts +=(`</div>`);
    elm.after(newProducts);
}

$(".show-more").click(function() {
    let elm = $(this).closest(".container").find('.products').last();
    showMoreProducts(elm); 
})
