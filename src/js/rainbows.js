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


let currentSlide2 = 0;
let currentTransform = 0;
function animateWithTransform(direction) {
    if (currentSlide2 === 0 && direction < 0 || currentSlide2 === 6 && direction > 0) {
        return false;
    }

    currentSlide2 += direction;
    currentTransform = -currentSlide2 * 100;

    $('#carousel-with-transform .slides-container').css('transform', 'translateX(' + currentTransform + '%)');
}

$('#carousel-with-transform .carousel-button-left').click(function() { animateWithTransform(-1) });
$('#carousel-with-transform .carousel-button-right').click(() => animateWithTransform(1));