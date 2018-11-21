// En este objeto declaro los metodos ENCODE y DECODE
/*window.cipher = {
  encode:
	decode:
};*/

//Caputaramos los inputs del DOM
let userMessage = document.getElementById('message');
let userKey = document.getElementById('offset');
let cifrarButton = document.getElementById('cifrar-button');
let descifrarButton = document.getElementById('descifrar-button');
let borrarButton = document.getElementById('erase');

//**********************EVENTO DEL BOTON CIFRAR**************************
cifrarButton.addEventListener('click', () => {
	const message = userMessage.value;
	const key = userKey.value;
	cifrar(message, key)
});

//****************************FUNCION CIFRAR*******************************
const cifrar = (message, key) => {
let result = "";
let numAscii;

//RECORRIDO DEL FOR
for (let i = 0; i < message.length; i++){
		numAscii = message.charCodeAt(i);

		if (document.getElementById("message").value == "") {
			document.getElementById('error-campo-vacio').innerHTML = "¡Ingresa tu mensaje!";
			console.log("entro");
		}else{
//Asimila mayusculas
			if (numAscii >= 65 && numAscii <= 90){
				numAscii = String.fromCharCode((numAscii - 65 + parseInt(key)) % 26 + 65);
				result += numAscii;
				console.log(result);
//Asimila minisculas
			} else if (numAscii >= 97 && numAscii <= 122){
				numAscii = String.fromCharCode((numAscii - 97 + parseInt(key)) % 26 + 97);
				result += numAscii;
				let userMessage = document.getElementById('message').value;
				let replace = userMessage.replace( userMessage, result);
				document.getElementById("message").value = replace;
				console.log(result);
//Asimila el espacio " "
			} else if (numAscii === 32){
				result += " ";
			}
		}
	}
};

//**********************EVENTO DEL BOTON DESCIFRAR**************************
descifrarButton.addEventListener('click', () => {
	const message = userMessage.value;
	const key = userKey.value;
	descifrar(message, key)
});

//**************************FUNCION DESCIFRAR*******************************

const descifrar = (message, key) => {
let result = "";

//**RECORRIDO DEL FOR
		for (let i = 0; i < message.length; i++){
			let numAscii = message.charCodeAt(i);
			console.log(numAscii[i]);

//Asimila mayusculas
			if (numAscii >= 65 && numAscii <= 90){
				numAscii = String.fromCharCode((numAscii + 65 - parseInt(key)) % 26 + 65);
				result += numAscii;
				console.log("result" + result);
				document.getElementById("message").innerHTML = result;
//Asimila minisculas
			} else if (numAscii >= 97 && numAscii <= 122){
				numAscii = String.fromCharCode((numAscii + 97 - parseInt(key)) % 26 + 97);
				result += numAscii;
				let userMessage = document.getElementById('message').value;
				let replace = userMessage.replace( userMessage, result);
				document.getElementById("message").value = replace;
				console.log(result);
//Asimila el espacio " "
			} else if (numAscii === 32){
				result += " ";
			}
		}
	}


//*******************************FUNCION BORRAR*******************************

		borrarButton.addEventListener('click', () => {
			const message = userMessage.value;
			const key = userKey.value;

			borrar()
			console.log("entro");
		});

		const borrar = () => {
			 document.getElementById("message").value = "";
			 document.getElementById("offset").value = "";
		};
