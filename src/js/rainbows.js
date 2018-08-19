let currentSlide = 0;
let currentMargin = 0;
    function animateWithMargin(direction) {
        if (currentSlide === 0 && direction < 0 || currentSlide === 6 && direction > 0) {
        return false;
    }
    currentSlide += direction;
    currentMargin = -currentSlide * 100;
    $('#carousel-with-margin .first').css('margin-left', currentMargin + '%');
}
let carousel = document.getElementById('carousel-with-margin');
carousel.children[0].addEventListener('click', function() { animateWithMargin(-1) });
carousel.children[carousel.children.length - 1].addEventListener('click', function() { animateWithMargin(1) });
