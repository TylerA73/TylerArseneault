var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('#navbar').outerHeight(); 

$(document).ready(function(){
   
   hideWork();
   
   showWork();
   
   
   $(window).scroll(function(event){
        
         if ($(window).scrollTop() > 1) {                                        //adds border to the navbar when user scrolls down one px
            $('#navbar').removeClass('nav-no-border').addClass('nav-border');
         } else {                                                                //removes the border when the page is at the very top
            $('#navbar').removeClass('nav-border').addClass('nav-no-border');
         }
        
        if ($(window).scrollTop() > 55) {                                        //if user scrolls down passed 55px, navbar slides up and hides
            didScroll = true;
            $('#top-button-box').removeClass('to-top-invisible').addClass('to-top-visible');
        } else {                                                                 //if user scrolls up, navbar slides down and appears
            didScroll = false;
            $('#top-button-box').removeClass('to-top-visible').addClass('to-top-invisible');
        }
        
    });
   
   $('#top-button').click(function(){
   
      $('#navbar').removeClass('nav-hide').addClass('nav-show');                 //when user clicks button, the navbar reappears *to fix glitch where it didn't appear*
   
   });
   
   setInterval(function(){
        if (didScroll) {                                                         //if there was a scroll, hide navbar, and then set didScroll to false so that the scroll event can occur again
            hasScrolled();
            didScroll = false;
        }
    
    }, 0);
   
   function hasScrolled() {
        var st = $(this).scrollTop();
        
        if (Math.abs(lastScrollTop-st) <= delta) {                               //determines if a scroll down actually occured from the last position.
            return;
        }
        
        if ((st > lastScrollTop) && (st > navbarHeight)) {                       //if new scrollTop is greater than last scrollTop and the neight of the navbar, hide the navbar
            $('#navbar').removeClass('nav-show').addClass('nav-hide');
        } else {                                                                 //if not, then show navbar
            if ((st + $(window).height()) < ($(document).height())) {
                $('#navbar').removeClass('nav-hide').addClass('nav-show');
            }
        }
        
        lastScrollTop = st;                                                      //last scrollTop position is now the current scrollTop position
   }
   
   /*Does nothing yet. To be worked on*/
   function hideWork() {
      $('.img-port').hide();
   }
   
   function showWork() {
      $('.img-port').fadeIn(1000);
   }
});