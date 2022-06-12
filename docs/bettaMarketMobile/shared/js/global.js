$(document).ready(function(){

  
  $('.historyBack').click(function(event){
    event.preventDefault();
    history.back(1);
  });
 


  ////// modal sheet //////
  var curentSheet;
  $(".callModal").each(function() {
    var $this = $(this);
    $this.click(function(event) {
      event.preventDefault();
      $('html, body').animate({
            scrollTop: 50
      }, 200);
      setTimeout(function() { 
        curentSheet = $($this.attr("href"));
        showModalSheet(curentSheet);
      }, 200);
      
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
      /*var iframe = $('#video')[0];
      var player = $f(iframe);
      player.api('pause');*/
    });
  });
  ////// end modal sheet //////
  
  ///scroll to element
  $(".gotoElement").click(function (event){
    event.preventDefault();
    var curentElement = $(this).attr('href');
      $('html, body').animate({
          scrollTop: $(curentElement).offset().top - 60
      }, 400);
    
  });
  
  
});
  
