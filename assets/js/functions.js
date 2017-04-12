// ANCRE DOUCE
$('a[href^="#"]').click(function(){  
	var id = $(this).attr("href");
	var offset = $(id).offset().top 
	$('html, body').animate({scrollTop: offset}, 'slow'); 
	return

	false;  
}); 


// STICKY NAVBAR
$(function(){
 	var hauteur = (window.innerHeight) - 1; // Taille de l'écran - 1px pour forcer l'animation
   $(window).scroll(function () {//Au scroll dans la fenetre on déclenche la fonction
      if ($(this).scrollTop() > hauteur) { //si on a défile de plus de la taille de l'écran de l'utilisateur
      	console.log('yo');
      $('.Menu2').addClass('goToTop');; //SLIDE IN
      $('.Menu2').removeClass('goToTop2');;//SLIDE OUT


  } else {
  	$('.Menu2').addClass('goToTop2');;//SLIDE OUT
  	$('.Menu2').removeClass('goToTop');;//SLIDE IN

  }
});
});