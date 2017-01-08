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


  //sleep
  imgstart = 1
  imgrange = 145
  imgname = 'assets/img/big/img_b_'
  imgend = '.jpg'
  if ($('body').hasClass('sleeppage')) {
    i = imgstart
    setInterval(function(){
      $img_one = $('img:first-of-type');
      $img_two = $('img:last-of-type');
      if (i%2 == 0) {
        console.log('C');
        $img_one.attr('src',imgname + zfill(i, 3) + imgend)
        $img_one.toggleClass('in');
        $img_two.toggleClass('out');
      } else {
        $img_two.attr('src',imgname + zfill(i, 3) + imgend)
        $img_one.toggleClass('in');
        $img_two.toggleClass('out');
        console.log('B');
      }
      if (i == imgrange) {
        i = imgstart
      } else {
        i++;
      }

    },2000)
  }

  function zfill(number, size) {
    number = number.toString();
    while (number.length < size) number = "0" + number;
    return number;
  }

});
