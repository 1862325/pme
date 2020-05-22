/* * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Permet d'animer un élément avec une classe Animate CSS
 * 
 * @param {element} : Élément à animer.
 * @param {animationName} : Nom de la classe animateCSS à ajouter.
 * @param callback : optionnel, permet d'exécuter quelque chose à la fin de l'animation
 */
function animateCSS(element, animationName, callback){
    const node = document.querySelector(element); 
    node.classList.add('animated', animationName);

    function handleAnimationEnd(){
        node.classList.remove('animated', animationName); 
        node.removeEventListener('animationend', handleAnimationEnd); 

        if(typeof callback==='function') callback();
    }
    node.addEventListener('animationend', handleAnimationEnd);
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Carousel
// - - - - - - - - - - - - - - - - - - - - - - - - - - -
$(document).ready(function(){
    $('.carousel').carousel();
  });
              


// - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Menu sticky
// - - - - - - - - - - - - - - - - - - - - - - - - - - -
$(window).scroll(function(){
    if ($(window).scrollTop() >= 28) {
        $('.nav-wrapper').addClass('sticky');
    }
    else {
        $('.nav-wrapper').removeClass('sticky');
    }
});

// - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Bouton scroll to top
// - - - - - - - - - - - - - - - - - - - - - - - - - - -
$(document).ready(function(){

    $(window).scroll(function(){
        if($(this).scrollTop() > 40){
            $('#top-btn').fadeIn();
        }else{
            $('#top-btn').fadeOut();
        }
    });

    $("#top-btn").click(function(){
        $('html, body').animate({scrollTop : 0}, 200);
    });
  });

// - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Animation de défilement
// - - - - - - - - - - - - - - - - - - - - - - - - - - -

$(function() {
                
    var documentEl = $(document),
        fadeElem = $('.fade-scroll');
    
    
    documentEl.on('scroll', function() {
        var currScrollPos = documentEl.scrollTop();
        
        fadeElem.each(function() {
            var $this = $(this),
                elemOffsetTop = $this.offset().top;
            if (currScrollPos > elemOffsetTop) $this.css('opacity', 1 - (currScrollPos-elemOffsetTop)/400);
        }); 
    });
    
});

// - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Bouton scroll top
// - - - - - - - - - - - - - - - - - - - - - - - - - - -
    $('#top-btn').on('mouseenter', function(){  
        animateCSS('#top-btn', 'pulse');
    });

    
// - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Popup
// - - - - - - - - - - - - - - - - - - - - - - - - - - -
    $(".open").on("click", function() {
        $(".popup-overlay").addClass("active");
        console.log('click');
    });

    $(".close, .popup-overlay").on("click", function() {
        $(".popup-overlay").removeClass("active");
    });

