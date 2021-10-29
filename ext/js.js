console.log("Javascript activado");

function myForm() {
    console.log("Empezando la funcion");
    const nombre = document.getElementById('name').value;
    if (nombre == "") {
        alert("Debe escribir un nombre");
        return false;
    }
    else {
        console.log("Nombre: "+nombre)
    }
    const correo = document.getElementById("mail").value;
    if (correo == "") {
        alert("Debe escribir un correo electronico");
        return false;
    }
    else if (correo.indexOf("@") == -1) {
        alert("No ingreso un correo valido");
        return false;
    }
    else if (correo.indexOf(".") == -1) {
        alert("No ingreso un correo valido");
        return false;
    }    else {
        console.log("Correo: "+correo)
    }
    const mensaje = document.getElementById("message").value;
    if (mensaje == "") {
        console.log("No hubo mensaje");
        alert("No hubo mensaje pero nos contactaremos");
    }
    else {
        console.log("Mensaje: "+mensaje);
        alert("¡Mensaje enviado!");
    } 
    window.location.replace("../index.html");
}