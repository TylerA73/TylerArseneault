var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('#navbar').outerHeight(); 

$(document).ready(function(){
    
   $(window).scroll(function(event){
        
        if ($(window).scrollTop() > 1) {
            $('#navbar').removeClass('nav-no-border').addClass('nav-border');
        } else {
            $('#navbar').removeClass('nav-border').addClass('nav-no-border');
        }
        
        if ($(window).scrollTop() > 55) {
            didScroll = true;
            $('#top-button').removeClass('to-top-invisible').addClass('to-top-visible');
        } else {
            didScroll = false;
            $('#top-button').removeClass('to-top-visible').addClass('to-top-invisible');
        }
        
    });
   
   setInterval(function(){
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    
    }, 0);
   
   function hasScrolled() {
        var st = $(this).scrollTop();
        
        if (Math.abs(lastScrollTop-st) <= delta) { 
            return;
        }
        
        if ((st > lastScrollTop) && (st > navbarHeight)) {
            $('#navbar').removeClass('nav-show').addClass('nav-hide');
        } else {
            if ((st + $(window).height()) < ($(document).height())) {
                $('#navbar').removeClass('nav-hide').addClass('nav-show');
            }
        }
        
        lastScrollTop = st;
   }
});