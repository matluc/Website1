$(window).scroll(function(){
   parallax();
})

function parallax(){
   
   var wScroll = $(window).scrollTop ();
   $('.parallax--bg').css('background-position', 'center '+ (wScroll)+'px')
   
   $('.parallax--box').css('top', -5+(wScroll*0.006)+'em')
}
