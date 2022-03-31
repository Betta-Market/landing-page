$(document).ready(function () {
  $(window).scroll(function () {
    var TargetPos = $('#header-top').height();
    var ScrollPos = $(window).scrollTop();
    if (ScrollPos > TargetPos) {
      $("body").addClass('has_nav');
    } else {
      $("body").removeClass('has_nav');
    }
  });
});

$(function () {
	"use strict";
	$('body').removeClass('navOpen');
	$(".hamburger").click(function () {
		if ($('body').hasClass('navOpen')) {
			$('body').removeClass('navOpen');
		} else {
			$('body').addClass('navOpen');
		}
	});
});

//fix scroll ios
var overflowIsHidden = function(node) {
    var style = getComputedStyle(node);
    return style.overflow === "hidden" || style.overflowX === "hidden" || style.overflowY === "hidden";
}
var isItScrollableWithoutVisibleScrollbars = function(el) {
    if (el === null) return false;
    var isScrollable = false,
        hasScrollbars = false;
    isScrollable = el.scrollHeight > el.offsetHeight ? true : false; // first, lets find out if it has scrollable content
    // isScrollable = el.scrollHeight + 1 > el.clientHeight ? true : false; // first, lets find out if it has scrollable content
    if (isScrollable) hasScrollbars = (el.offsetWidth > el.scrollWidth) ? true : false; // if it's scrollable, let's see if it likely has scrollbars
    // if (isScrollable) hasScrollbars = (el.offsetWidth > el.scrollWidth - 1) ? true : false; // if it's scrollable, let's see if it likely has scrollbars
    if (isScrollable && !hasScrollbars && !overflowIsHidden(el)) return true;
    else return false;
};
document.addEventListener("touchmove", function(e) {
    if (document.body.classList.contains("navOpen") && !isItScrollableWithoutVisibleScrollbars(document.getElementById("menu_toggle"))) e.preventDefault();
}, {
    passive: false
});


//////Select style//////
$('select').each(function(){
    var $this = $(this), numberOfOptions = $(this).children('option').length;
  
    $this.addClass('select-hidden'); 
    $this.wrap('<div class="select"></div>');
    $this.after('<div class="select-styled"></div>');

    var $styledSelect = $this.next('div.select-styled');
    $styledSelect.text($this.children('option').eq(0).text());
  
    var $list = $('<ul />', {
        'class': 'select-options'
    }).insertAfter($styledSelect);
  
    for (var i = 0; i < numberOfOptions; i++) {
        $('<li />', {
            text: $this.children('option').eq(i).text(),
            rel: $this.children('option').eq(i).val()
        }).appendTo($list);
    }
  
    var $listItems = $list.children('li');
  
    $styledSelect.click(function(e) {
        e.stopPropagation();
        $('div.select-styled.active').not(this).each(function(){
            $(this).removeClass('active').next('ul.select-options').removeClass('showMenu');
        });
        $(this).toggleClass('active').next('ul.select-options').toggleClass("showMenu");
    });
  
    $listItems.click(function(e) {
        e.stopPropagation();
        $styledSelect.text($(this).text()).removeClass('active');
        $this.val($(this).attr('rel'));
        $list.removeClass('showMenu');
        //console.log($this.val());
    });
  
    $(document).click(function() {
        $styledSelect.removeClass('active');
        $list.removeClass('showMenu');
    });

});
//////End select style//////


//////Date picker////////
$( "#datepicker3" ).datepicker({
	beforeShow: function( input, inst){
      $(inst.dpDiv).removeClass('dark-theme');
    }
});
$( "#datepicker1" ).datepicker({
	beforeShow: function( input, inst){
      $(inst.dpDiv).addClass('dark-theme');
    }
});
$( "#datepicker2" ).datepicker({
	beforeShow: function( input, inst){
      $(inst.dpDiv).addClass('dark-theme');
    }
});


// gmap
function initialize() {
  var latlng = new google.maps.LatLng(11.568514, 104.902446);
  var myOptions = {
    zoom: 17, /*?g‘a”a?|*/
    center: latlng, /*?\?|?g“a?I’†?S“_*/
    mapTypeId: google.maps.MapTypeId.ROADMAP, /*?\?|?^?C?v?I?w’e*/
    mapTypeControl: false,
    scrollwheel: false
  };
  var map = new google.maps.Map(document.getElementById('gmap'), myOptions);
  /*?A?C?R?“?Y’e*/
  var icon = new google.maps.MarkerImage('img/shared/location.svg',
    new google.maps.Size(40,57),/*?A?C?R?“?T?C?Y?Y’e*/
    new google.maps.Point(0,0)/*?A?C?R?“?E’u?Y’e*/
    );
  var markerOptions = {
    position: latlng,
    map: map,
    icon: icon,
    title: 'MAP'
  };
  var marker = new google.maps.Marker(markerOptions);
  /*?a“??X?^?C???I“\?e?t?￣*/
  
  
 var styleOptions = [
  {
    "stylers": [
    { "saturation": -100 },
    { "visibility": "simplified" },
     { "gama": "0.0" },
    { "hue": "#A89B95" }
    ]
  }
  ];
  var styledMapOptions = { name: 'MAP' }
  var sampleType = new google.maps.StyledMapType(styleOptions, styledMapOptions);
  map.mapTypes.set('sample', sampleType);
  map.setMapTypeId('sample');
}
google.maps.event.addDomListener(window, 'load', initialize);



