var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('#navbar').outerHeight();
console.log(navbarHeight);

//$(document).ready(function(){
    
   $(window).scroll(function(event){
        
        didScroll = true;
        
    });
   
   setInterval(function(){
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    
    }, 50);
   
   function hasScrolled() {
        var st = $(this).scrollTop();
        
        if (Math.abs(lastScrollTop-st) <= delta) {
            return;
        }
        
        if ((st > lastScrollTop) && (st > navbarHeight)) {
            
            $('#navbar').removeClass('nav-show').addClass('nav-hide');
            console.log("hide");
            
        } else {
            if ((st + $(window).height()) < ($(document).height())) {
                $('#navbar').removeClass('nav-hide').addClass('nav-show');
                console.log("show");
            }
        }
        
        lastScrollTop = st;
   }
//});