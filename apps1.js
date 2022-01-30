$(document).ready(function () {

  $('div:eq(3)').addClass('changeStyle');
  $('span:eq(0)').addClass('spanClick');
  
  $('.spanClick').on('click', () => {
    $('.changeStyle').css({
      'text-align' : 'center',
      'color': 'red',
      'background': 'black',
      'height' : '40px'
    });
  });
 

});
