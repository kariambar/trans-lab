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
/*DROPDOWN*/
 $(document).ready(function() {
    $('select').material_select();

/*//localstorage para iniciar sesion, pero NO funciono
$(document).ready(function(){
  //se llama botón
  $("#btnsesion").click(function(e){
    e.preventDefault();//cuando se pone prevent para que detenga el seguir el enlace, no se necesita return false en el if.
    //Se llama los value de los inputs


    localStorage.email = $("#email").val();
    var passw = $("password").val();

    //donde se alojarán las validaciones
    var errorNombre = $(".input-box")
    var errorCorreo = $(".input-box")
    //se crea otra variable para crear el texto directo
    var validarError = $(errorNombre).append('<p></p>');
    var validarCorreo = $(errorCorreo).append('<p></p>');

    //Validación correo
    function validacionEmail(){
      if(localStorage.email == ""){
        $(validarError).text("Debes ingresar un correo valido");
        //$(errorNombre).first();
      }else if(!/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(localStorage.email)){
        $(validarError).text("Deben ser solo letras");
      }
      
    }
    validacionEmail();

    //Validación contraseña
    function validacionContraseña(){
      if(passw == ""){
        $(validarCorreo).text("Debes ingresar solo 8 digitos");
      }else if(!(/^[0-9]+$/.test(passw))){
        $(validarCorreo).text("Deben ser solo numeros");
      }else{
         window.location = "home.html";
    }
validacionContraseña();
  };
});
  });*/

//INTENTE CON Esta FORMA Y TAMPOCO FUNCIONO
 $(document).ready(function() {
function validateForm(){
  $("#btnsesion").click(function(e){
      email();
    password();
  });
    //Validate Email
    function email(){
    var email = $("#email").val();
    if(!(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(email))){
        alert("Por favor ingresa un correo electrónico válido");
    }
  }
    //Validate Password
    function password(){
    var password = $("#password").val();
    if (!(/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/).test(emailValue)){
            $("#espacio-error-nombre").append('<p class="red">Correo Invalido</p>');
            $("#correo").val("");
            console.log("first");
            return false;
        } else{
        $("#btnsesion").attr("href", "home.html");
    };
  } 
}
});

   });