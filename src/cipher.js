// En este objeto declaro los metodos ENCODE y DECODE
/*window.cipher = {
  encode: cifrar (userMessage, key) => ,
	decode: cifrar (userMessage, key) =>
	numAscii = (26 - (userKey % 26)) % 26;*/

//****************************FUNCION CIFRAR*******************************
const cifrar = (message, key) => {
let result = "";
let numAscii;
//RECORRIDO EL MENSAJE DEL USUARIO
	for (let i = 0; i < message.length; i++){
			numAscii = message.charCodeAt(i);

//Asimila mayúsculas
				if (numAscii >= 65 && numAscii <= 90){
					numAscii = String.fromCharCode((numAscii - 65 + parseInt(key)) % 26 + 65);
					result += numAscii;
					console.log(result);
//Asimila minisculas
				} else if (numAscii >= 97 && numAscii <= 122){
					numAscii = String.fromCharCode((numAscii - 97 + parseInt(key)) % 26 + 97);
					result += numAscii;
					console.log(result);
//Asimila el espacio " "
				} else if (numAscii === 32){
					result += " ";
				}
		}
	};
//};

//**************************FUNCION DESCIFRAR*******************************

const descifrar = (message, key) => {
let result = "";
let numAscii;

//**RECORRIDO DEL FOR
		for (let i = 0; i < message.length; i++){
			numAscii = message.charCodeAt(i);

//Asimila mayúsculas
			if (numAscii >= 65 && numAscii <= 90){
				numAscii = String.fromCharCode ((numAscii + 65 - parseInt(key)) % 26 + 65);
				result += numAscii;
				console.log(result);
//Asimila minisculas
} else if (numAscii >= 97 && numAscii <= 122){
				numAscii = String.fromCharCode((numAscii - 97 - parseInt(key)) % 26 + 97);
				result += numAscii;
				console.log(result)

//Asimila el espacio " "
			} else if (numAscii === 32){
				result += " ";
			}
		}
	}
