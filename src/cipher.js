// En este objeto declaro los metodos ENCODE y DECODE
/*window.cipher = {
  encode:
	decode:

};*/

//Caputaramos los inputs del DOM
let userMessage = document.getElementById('message');
let userKey = document.getElementById('offset');
let cifrarButton = document.getElementById('cifrar-button');

//Acciono con el botón con el valor de las variables
cifrarButton.addEventListener('click', () => {
	const message = userMessage.value;
	const key = userKey.value;
	cifrar(message, key)
});

const cifrar = (message, key) => {
const result = "";

		for (let i = 0; i < message.length; i++){
			let numAscii = message.charCodeAt(i);

			if (numAscii >= 65 && numAscii <= 90){
				result[i]= String.fromCharCode((numAscii - 65 + key) % 26 + 65);
				console.log("result" + result);

			}
		}

}

//*FUNCIÓN PARA CIFRAR



/*function cifrar(){
//Acá empiezo a almacenar en variables los inputs del programa: mensaje, offset, cifrar
	str = prompt('tu mensaje');
  	num = prompt('tu offset');
  let result = "";

    for (let i = 0; i < str.length; i++){
      let numAscii = str.charCodeAt(i);
      if (numAscii >= 65 && numAscii <= 90){
        result += String.fromCharCode((numAscii - 65 +num) % 26 + 65);
      }
    }
return result;
}*/
