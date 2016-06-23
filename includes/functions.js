

$(document).ready(function(){
   var didScroll;
   var lastScrollTop = 0;
   var delta = 5;
   var mastheadHeight = $('#masthead').outerHeight();
   var navbarHeight = $('#navbar').outerHeight();
   
   var xmlhttp;
   var url = "about.html";
   var response;
   var current = "about";
   
   getContent();

   $(window).load(function(){
      $('#loader-wrapper').delay(1000).fadeOut();
      $('.loading').delay(1000).fadeOut();
      $('#navbar').removeClass('nav-hide').addClass('nav-show');
   })
   hideWork();
   
   showWork();
   
   
   $(window).scroll(function(event){
        
        if ($(window).scrollTop() > mastheadHeight) {                                        //if user scrolls down passed 55px, to top button hides
            didScroll = true;
            $('#top-button-box').removeClass('to-top-invisible').addClass('to-top-visible');
        } else {                                                                 //if user scrolls up, to top button appears
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
        
        if ((st > lastScrollTop) && (st > (mastheadHeight-navbarHeight))) {                       //if new scrollTop is greater than last scrollTop and the neight of the navbar, hide the navbar
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
   
   $("#aboutLink").click(function(){
        if (current!="about") {
            current = "about";
            url = "about.html";
            $('#aboutLink').removeClass('inactive').addClass('active');
            $('#workLink').removeClass('active').addClass('inactive');
            getContent();   
        }
    });
    $("#workLink").click(function(){
    
        if (current!="work") {
            current = "work";
            url = "work.html";
            $('#workLink').removeClass('inactive').addClass('active');
            $('#aboutLink').removeClass('active').addClass('inactive');
            getContent();   
        }
    
    });
    
    function getContent() {
    
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = callback;
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
    
}

function callback() {
    
    if (xmlhttp.readyState==4 && xmlhttp.status==200) {
        
     response = xmlhttp.responseText;
     console.log(response);
     displayContent();
        
    }
    
}

function displayContent() {
    
    document.getElementById("content").innerHTML = response;
    
}
});