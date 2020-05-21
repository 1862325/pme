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
var monHeros = $('.heros')
        var maNav = $('.navigation')


        function checkSticky() {
            var partieDefilee = $(document).scrollTop();
            var hauteurHeros = monHeros.outerHeight();

    
            if (partieDefilee >= hauteurHeros) {
                maNav.addClass('sticky');
            } else {
                maNav.removeClass('sticky');
            }
        }
        
        checkSticky();
        $(document).scroll(checkSticky);
        $(window).resize(checkSticky);