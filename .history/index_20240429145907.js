console.log('Hello world');
$(function(){
    var sizeSections = function() {
      var viewHeight = $(window).height();
      $("section").each(function(){
        var naturalHeight = $(this).find(".content").outerHeight();
        if ( naturalHeight > viewHeight) {
          $(this).css("height", "auto");
        } else {
          $(this).css("height", viewHeight + "px");
        }
      });
    }
      sizeSections();
     $(window).resize(function() {
      sizeSections();
    });
    var imgBG = [ "https://images.unsplash.com/photo-1490822061517-61b5e64bf21c?auto=format&fit=crop&w=1950&q=80",
                 "https://images.unsplash.com/photo-1483694583352-6af4091a9498?auto=format&fit=crop&w=1350&q=80",
                 "https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?auto=format&fit=crop&w=1351&q=80",
                 "https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&w=1950&q=80",
                 "https://files.gitter.im/FreeCodeCamp/FreeCodeCamp/Mnxs/bg-edit.jpg",
      ];
    
      $(".home-intro").css("background-image", "url("+ imgBG[1] +")");
    $(".about").css("background-image", "url("+ imgBG[0] +")");
    $(".contact").css("background-image", "url("+ imgBG[2] +")");
    $(".portfolio").css("background-image", "url("+ imgBG[4] +")");
    
    
    
    
    
    
    
    
    
    
    $('.navbar a').smoothScroll();
  
  })