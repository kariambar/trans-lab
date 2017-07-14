//Funcion para agregar numero de tarjeta al perfil
$(document).ready(function() {
    $("#btnagregar").click(function (tarjeta) {
        var tarjeta = $("#number-card").val();
        if (tarjeta == "") {
            alert("Tienes que agregar una tarea");
        }else{
            localStorage.tarjeta = document.getElementById("number-card").value;
            $(".perfil-user").append('<div class="tarjetasnuevas">' + '<p class=".numerosingre">' + tarjeta +'</p>' + '</div>'); //agregando elemento a la lista
            $("#number-card").val(""); 
        }
    });

    });