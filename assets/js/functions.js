$( document ).ready(function() {


  $('.indexpage .js_openside').click(function(){
    var $parent = $(this).parent().parent();
    $parent.toggleClass('open');
    if ($parent.siblings().hasClass('open')) {
      $parent.siblings().toggleClass('open');
    }
  })


});
