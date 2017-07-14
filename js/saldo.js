  $(document).ready(function() {
    $('select').material_select();
  });

$(document).ready(function() {
    //aquí capturo el valor el input
    $('.btnsaldo').click( function(){
    	$('.titulosaldo').hide('');
    	$('.montototal').hide('');
    	var inputTarjeta = $('#ingresotarjeta').val();
    	console.log(inputTarjeta);
    	$('#ingresotarjeta').val('');
	    	//aquí hago una llamada ajax
	    $.ajax({
	    	url: 'https://bip-servicio.herokuapp.com/api/v1/solicitudes.json?bip=' + inputTarjeta,
	    	type: 'GET',
	    	dataType: 'json',
	    	data: {limit: '800'},
	    })
	    .done(function(saldo) {
	    	console.log("success");
	    	console.log(saldo);
	    	$('.saldototal').append('<div class="titulosaldo"><h5 class="saldotitle">SALDO INICIAL</h5></div><div class="montototal"><p">'+ saldo.saldoTarjeta + '</p>');	
	    })
	    .fail(function() {
	    	console.log("error");
	    })
	    .always(function() {
	    	console.log("complete");
	    });

    });      
});

// prueba con tarjeta : 76726308