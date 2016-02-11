$(document).ready(function () {
  $('.tabs li').on('click', function(){
    console.log(this);
    $('li').removeClass('active');
    $(this).addClass('active');
    $('.tab').css('display', 'none');
    console.log($(this).find('a').attr('href'));
    var direccion = $(this).find('a').attr('href');
    $(direccion).css('display', 'block');
  });
});