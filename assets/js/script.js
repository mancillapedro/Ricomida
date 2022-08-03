// 
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

$(function(){

  $('#enviarCorreo').click(function(){
    alert('El correo fue enviado correctamente...');
  });

  $('h2').on('dblclick', function(){
    $(this).attr('style', 'color: red; border-color: red !important');
  });

  $('.card-title').click(function(){
    $('.card-text, .card-img-top').toggle('slow');
  });

});