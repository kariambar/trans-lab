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

//localstorage para iniciar sesion, pero NO funciono
/*$(document).ready(function(){

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
});*/

//esto tampoco funciona
 $(document).ready(function() {
function validateForm(){
  $("#btnsesion").click(function(e){
      email();
    password();
  });
    //Validate Email
    function email(){
    var email = $("#email").val();
    if(!(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(email))){
        alert("Por favor ingresa un correo electrónico válido");
    }
  }
    //Validate Password
    function password(){
    var password = $("#password").val();
    if(!(/^\d{8}([0-9])*$/.test(password)) ){
      alert("Por favor ingresa una contraseña de 8 dígitos")
      }else{
        $("#btnsesion").attr("href", "home-html");
    };
  } 
}
});