$(document).ready(function(){
  
    
  
    $(window).scroll(function () {
      var scroll = $(window).scrollTop(),
          ePhoto = $('.slider-photo'),
          hPhoto = ePhoto.height();
      //console.log(scroll);
      if (scroll > (hPhoto - 100)) {
        $('.bg-sticky').addClass('show');
      }else {
        $('.bg-sticky').removeClass('show');
      }
    });
    
    //get photo curent
    var photoClone = $('.photo-clone');
    
    
    var owl = $('.owl-carousel');  
    $('.photo-sell').imagesLoaded().done( function( instance ) {
      owl.owlCarousel({
        items: 1,
        dots: true,
        onInitialized: counter, 
        onTranslated: counter,
        onInitialize: initOwl
      });
    });
    
    // Listen to owl events:
    function initOwl(event) {
      var element   = event.target;
      
      var arrayImg = $(element).find('img');
      $.each(arrayImg, function( index, value ) {
        var itemWidth = value.naturalWidth;
        var itemHeight = value.naturalHeight;
        if (itemWidth < itemHeight) {
          
            $(value).addClass('horizontal');
        }
      });
    }
    function counter(event) {
      var element   = event.target;         // DOM element, in this example .owl-carousel
      var items     = event.item.count;     // Number of items
      var item      = event.item.index + 1;     // Position of the current item

      var srcPhoto = $('.active').find('img')[0].currentSrc;
      photoClone.css('background-image','url(' + srcPhoto + ')')
      
      if(item > items) {
        item = item - items
      }
      $('#counter').html(item+"/"+items)
    }
    
    function getCurrentImg(curentIndex) {
      //console.log("fancy:" + curentIndex);
      owl.trigger('to.owl.carousel', curentIndex);
    }
    ///////Gallery////////
    
		Fancybox.bind("[data-fancybox]", {
      on: {
        shouldClose: function (fancybox, event) {
          //console.log($('.fancybox__slide.is-selected')[0].dataset.index);
          var curentIndex = $('.fancybox__slide.is-selected')[0].dataset.index;
          getCurrentImg(curentIndex);
        },
        "ready": (fancybox, slide) => {
          $('<div class="indicator"></div>').appendTo($('.carousel__track')[0]);
        },
      },
    }); 

  });