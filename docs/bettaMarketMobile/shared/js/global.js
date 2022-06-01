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
  $('.overlay-modal').click(function() {
    $(this).parent().removeClass('active');
    $('body').removeAttr("style");
  });
  
});

