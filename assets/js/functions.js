$( document ).ready(function() {


  $('.indexpage .js_openside').click(function(){
    var $parent = $(this).parent().parent();
    $parent.toggleClass('open');
    $parent.siblings().toggleClass('closed');
    if ($parent.siblings().hasClass('open')) {
      $parent.siblings().toggleClass('open');
    }if ($parent.hasClass('closed')) {
      $parent.toggleClass('closed');
    }
  })



  //nextslide
  $('.nextslide').click(function(){
    var id = $(this).parent().attr('id')
    var $parent = $(this).parent()
    id = parseInt(id) + 1
    var $nextslide = $('#' + id)
    console.log('#' + id);
    $parent.toggleClass('active')
    $nextslide.toggleClass('active')
  });

  $('.previouslide').click(function(e){
    var id = $(this).parent().attr('id')
    var $parent = $(this).parent()
    id = parseInt(id) - 1
    var $nextslide = $('#' + id)
    console.log('#' + id);
    $parent.toggleClass('active')
    $nextslide.toggleClass('active')

  });

});
