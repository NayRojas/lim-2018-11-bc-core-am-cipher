
//****************************FUNCION CIFRAR*******************************
const cifrar = (key, message) => {
let numAscii;
let resultC = "";
//RECORRIDO EL MENSAJE DEL USUARIO
	for (let i = 0; i < message.length; i++){
			numAscii = message.charCodeAt(i);


//Asimila mayúsculas
				if (numAscii >= 65 && numAscii <= 90){
					numAscii = String.fromCharCode((numAscii - 65 + parseInt(key)) % 26 + 65);
					resultC = resultC + numAscii;

//Asimila minisculas
				} else if (numAscii >= 97 && numAscii <= 122){
					numAscii = String.fromCharCode((numAscii - 97 + parseInt(key)) % 26 + 97);
					resultC = resultC + numAscii;

//Asimila el espacio " "
				} else if (numAscii === 32){
					resultC = resultC + " ";
				}
		}

		return resultC
	};

//**************************FUNCION DESCIFRAR*******************************
	const descifrar = (key, message) => {
	let numAscii;
  let resultD = "";
	let offset = parseInt(key) % 26;
//RECORRIDO EL MENSAJE DEL USUARIO
			for (let i = 0; i < message.length; i++){
				numAscii = message.charCodeAt(i);

//Asimila mayúsculas
				if (numAscii >= 65 && numAscii <= 90){
					numAscii = String.fromCharCode ((numAscii + 65 - offset) % 26 + 65);
					resultD += numAscii;

//Asimila minisculas
				} else if (numAscii >= 97 && numAscii <= 122){
					numAscii = String.fromCharCode((numAscii - 97 - offset) % 26 + 97);
					resultD += numAscii;

//Asimila el espacio " "
				} else if (numAscii === 32){
					resultD += " ";
				}
			}

			return resultD;
		};

// En este objeto declaro los metodos ENCODE y DECODE
window.cipher = {
  encode :cifrar,
  decode :descifrar
};
