$('body').prepend('<div id="buttonup"><img src="images/arrow.png" onclick="playAudio()"></div>');
$('#buttonup').css({
     'display': 'none',	
     'opacity':'0.5',
     'position': 'fixed',
     'right': '20px',
     'bottom': '20px',			
     'transition': '.3s'
});
$('#buttonup img').css({
     'width': '50px',
     'height': '50px'
});
$('#buttonup').mouseenter(function(){
     $(this).css({
          'cursor': 'pointer',
          'opacity': '1'
     });
});
$('#buttonup').mouseleave(function(){
     $(this).css({
          'cursor': 'none',
          'opacity': '0.5'
     });
});



$(document).ready(function() { 
     var button = $('#buttonup');	
     $(window).scroll (function () {
          if ($(this).scrollTop () > 300) {
            button.fadeIn(500);
          } else {
            button.fadeOut(500);
          }
     });	 
     button.on('click', function(){
        $('body, html').animate({
            scrollTop: 0
        });
    });		 
});

function playAudio(){
     var myAudio = new Audio();
     myAudio.src = "click.wav";
     myAudio.play();
   }   