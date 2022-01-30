$(document).ready(function () {
    $('div:eq(2)').addClass('changeStyle');
    $('.changeStyle').mouseover(function() {
    $('ul li:even').css({'background': 'red'});
    $('ul li:odd').css({'background': 'black'});
  });
    $('.changeStyle').mouseleave(function() {
    $('ul li:even').css({'background': ''});
    $('ul li:odd').css({'background': ''});
  });
});