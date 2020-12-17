$('#collapse-navbar').on('show.bs.collapse', function() {
	$('.topCasaFina-banner').css('transform', 'translate(-50%, 10%');

});

$('#collapse-navbar').on('hide.bs.collapse', function() {
	$('.topCasaFina-banner').css('transform', 'translate(-50%, -50%');
});

//Faz o banner subir/descer conforme o menu hamburguer aparece ou esconde;