$(document).ready(function(){
  $('.scrollbar-macosx').scrollbar({
        disableBodyScroll: true,
  });

  $('a[href="#postFish"]').click(function(event) {
    event.preventDefault();
    $(this).modal({
      fadeDuration: 250
    });
  });
  
 
  
  
  //////Select style//////
  $('select').select2({
      minimumResultsForSearch: Infinity
  });
  //////End select style//////
  
  /*//////////dropdown search///////////
  var dropdownSearch = $('.dropdown-search');
  dropdownSearch.click(function() {
    $(this).parent().removeClass("hide-search");
  });
  $(document).click(function (e) {
      var container = dropdownSearch.parent();

      if (!container.is(e.target) && container.has(e.target).length === 0)
      {
          container.addClass('hide-search').stop();
      }
  });*/
  
  //////////dropdown account header///////////
  var dropdownMenu = $('.dropdown-menu');
  dropdownMenu.click(function() {
    $(this).parent().toggleClass("hide-menu");
  });
  $(document).click(function (e) {
      var container = dropdownMenu.parent();

      if (!container.is(e.target) && container.has(e.target).length === 0)
      {
          container.addClass('hide-menu').stop();
      }
  });
  
  //////////dropdown notification header///////////
  var dropdownNotification = $('.dropdown-notification');
  dropdownNotification.click(function() {
    $(this).parent().removeClass("hide-notification");
  });
  dropdownNotification.parent().find('.account-top-icon').click(function() {
    dropdownNotification.parent().addClass('hide-notification');
  });
  $(document).click(function (e) {
      var container = dropdownNotification.parent();
      if (!container.is(e.target) && container.has(e.target).length === 0)
      {
          container.addClass('hide-notification');
      }
  });
  
});

