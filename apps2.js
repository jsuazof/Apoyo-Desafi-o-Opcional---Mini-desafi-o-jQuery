
$(document).ready(function () {
$('button').addClass('buttonClick');
$('ul').addClass('ulClick');

$('.buttonClick').on('click', () => {
    $('.ulClick').slideToggle('slow');
  });

});