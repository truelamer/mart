let currentSlide = 0;
let currentMargin = 0;

let pics = ["<div class='carousel-image first' id=0></div>", "<div class='carousel-image second' id=1></div>", "<div class='carousel-image third' id=2></div>", 
            "<div class='carousel-image fourth' id=3></div>", "<div class='carousel-image fifth' id=4></div>", 
            "<div class='carousel-image sixth' id=5></div>", "<div class='carousel-image seventh' id=6></div>"];

function animateWithMargin(direction) 
{
    currentId = $(".carousel-image").attr('id');

    nextId = + currentId + direction;
    
    if (nextId > pics.length-1)
    {
        nextId = 0;
    }
    else if (nextId < 0)
    {
        nextId = pics.length-1;
    }

    if (direction > 0)
    {
        $('.frame :last-child').after(pics[nextId]);
        $('#'+currentId).animate({
            marginLeft: '-100%'
        }, 400);
        setTimeout(function() { $('.carousel-image:not(#'+nextId+')').remove(); }, 400);
    }  
    else if (direction < 0)
    {
        $('.frame :first-child').before(pics[nextId]);
        $('#'+nextId).css('margin-left', -100 + '%'); 
        $('#'+nextId).animate({
            marginLeft: '0'
        }, 400);
        setTimeout(function() { $('.carousel-image:not(#'+nextId+')').remove(); }, 400);
    }      
}
let carousel = document.getElementById('carousel-with-margin');
carousel.children[0].addEventListener('click', function() { animateWithMargin(-1) });
carousel.children[carousel.children.length - 1].addEventListener('click', function() { animateWithMargin(1) });