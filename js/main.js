/*Menú Desplegable*/
 $('.button-collapse').sideNav({
      menuWidth: 250, // Default is 300
      edge: 'left', // Choose the horizontal origin
      closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
      draggable: true, // Choose whether you can drag to open on touch screens,
      onOpen: function(el) { /* Do Stuff*/ }, // A function to be called when sideNav is opened
      onClose: function(el) { /* Do Stuff*/ }, // A function to be called when sideNav is closed
    }
  );

/*Ir al Home*/
$("#inicio").click(function(){
		//este es el nuevo redireccionamiento
		$(this).attr("href","index.html");
});
/*Ir a ver perfil*/
$("#perfil").click(function(){
		//este es el nuevo redireccionamiento
		$(this).attr("href","index-perfil.html");
});


$(document).ready(function(){

  //se llama botón
  $(".inicioses").click(function(e){
    e.preventDefault();//cuando se pone prevent para que detenga el seguir el enlace, no se necesita return false en el if.
    //Se llama los value de los inputs


    localStorage.email = $("#input-email").val();
    var passw = $("#input-password").val();

    //donde se alojarán las validaciones
    var errorNombre = $(".input-box")[0];
    var errorCorreo = $(".input-box")[1];
    //se crea otra variable para crear el texto directo
    var validarError = $(errorNombre).append('<p></p>');
    var validarCorreo = $(errorCorreo).append('<p></p>');

    //Validación correo
    function validacionEmail(){
      if(localStorage.email == ""){
        $(validarError).text("Debes ingresar un correo valido");
        //$(errorNombre).first();
      }else if(!/^([a-zA-Z])*$/.test(localStorage.email)){
        $(validarError).text("Deben ser solo letras");
      }
      
    }
    validacionEmail();

    //Validación contraseña
    function validacionCorreo(){
      if(passw == ""){
        $(validarCorreo).text("Debes ingresar solo 8 digitos");
      }else if(!(/^[_a-z0-8-]+(.[_a-z0-8-]+)*@[a-z0-8-]+(.[a-z0-8-]+)*(.[a-z]{2,4})$/.test(passw))){
        $(validarCorreo).text("Deben ser solo numeros");
      } 
    }
    validacionCorreo();

  });
});

/*function validateForm(){
  $(".inicioses").click(function(e){
    e.preventDefault();
    //Validate Email
    (function email(){
      var email = $("#input-email").val();
      if (!(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(email)){
        $(".email-container").append('<span>Correo inválido. Ingrese nuevamente.');
      }
    })();
        //Validate Password
    (function password(){
      var password = $("#input-password").val();
      if (password=="123456" || password=="098765" || password=="password" || !(/^(?=.*\d).{6,}$/).test(password)){
        $(".form-group").first().append('<span>Contraseña inválida. Ingrese nuevamente.');
      }
    })();

      });
} */