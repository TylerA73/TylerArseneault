var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('#navbar').outerHeight(); 

$(document).ready(function(){
   
   hideWork();
   
   showWork();

   /*
   $('.port-item').hover(function(){
      
      if (this.id == "port1") {
        $('#port1hover').css({
                              "background-color" : "rgba(45, 91, 160, 0.5)",
                              "color" : "rgba(0, 0, 0, 1)"
                             });
      } else if (this.id == "port2") {
        $('#port2hover').css({
                              "background-color" : "rgba(45, 91, 160, 0.5)",
                              "color" : "rgba(0, 0, 0, 1)"
                             });
      }
      
   }, function(){
   
      if (this.id == "port1") {
        $('#port1hover').css({
                              "background-color" : "rgba(45, 91, 160, 0)",
                              "color" : "rgba(0, 0, 0, 0)"                   
                             });
      } if (this.id == "port2") {
        $('#port2hover').css({
                              "background-color" : "rgba(45, 91, 160, 0)",
                              "color" : "rgba(0, 0, 0, 0)"
                             });
      }
   
   });
   */
   
   $(window).scroll(function(event){
        
         if ($(window).scrollTop() > 1) {
            $('#navbar').removeClass('nav-no-border').addClass('nav-border');
         } else {
            $('#navbar').removeClass('nav-border').addClass('nav-no-border');
         }
        
        if ($(window).scrollTop() > 55) {
            didScroll = true;
            $('#top-button-box').removeClass('to-top-invisible').addClass('to-top-visible');
        } else {
            didScroll = false;
            $('#top-button-box').removeClass('to-top-visible').addClass('to-top-invisible');
        }
        
    });
   
   $('#top-button').click(function(){
   
      $('#navbar').removeClass('nav-hide').addClass('nav-show');
   
   });
   
   $('#port-item').hover(function(){
      $('#front').removeClass('content-hidden').addClass('content-shown');
   },
   function(){
      $('#front').removeClass('content-shown').addClass('content-hidden');   
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
   
   function hideWork() {
      $('#port1').hide();
      $('#port2').hide();
   }
   
   function showWork() {
      $('#port1').fadeIn(1000);
      $('#port2').fadeIn(1000);
   }
});