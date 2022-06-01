$(document).ready(function(){

  
  $('.historyBack').click(function(event){
    event.preventDefault();
    history.back(1);
  });
 
  ////// modal top sheet //////
  var curentSheet;
  $(".callModal").each(function() {
    $(this).click(function(event) {
      event.preventDefault();
      curentSheet = $($(this).attr("href"));
      showModalSheet(curentSheet);
    });
  });
  
  function showModalSheet(curentSheet) {
    curentSheet.parent().addClass('active');
    $('body').css('overflow','hidden');
  }
  
  $(".modal-close").each(function() {
    $(this).click(function() {
      $(this).closest('.modal-sheet').removeClass('active');
      $('body').removeAttr("style");
    });
  });
  
  
});

