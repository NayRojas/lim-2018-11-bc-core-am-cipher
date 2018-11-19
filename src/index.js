//1er paso: Crear la funcion Cifrar:
//Declarar las variables
//iterar sobre el str(userMessage)
//convertirlo a ASCII (charCodeAt)
//delimitar la posicion en ASCII >= 65 - <= 90
//convertir de ASCII sumandole el offset
//retornar resultado
----------------------------------------------------------------------------
//Función Cifrar
function cifrarM(userMessage, userKey){
//Acá empiezo a almacenar en variables los inputs del programa: mensaje, offset, cifrar
  let userMessage = document.getElementById('message');
  let userKey = document.getElementById('offset');
  let result = "";

    for (let i = 0; i < userMessage.length; i++){
      let numAscii = userMessage.charCodeAt(i);
      if (numAscii >= 65 && numAscii <= 90){
        result += String.fromCharCode((numAscii - 65 +userKey) % 26 + 65);
      }
    }
return result;
}



//Crear alerta si el mensaje del usuario contiene numeros: alert("Tu mensaje solo debe contener letras")

//Esta función es para descifrar
