

//****************************FUNCION CIFRAR*******************************
let resultC = "";
const cifrar = (message, key) => {
console.log("entro cifrar");
let numAscii;
//RECORRIDO EL MENSAJE DEL USUARIO
	for (let i = 0; i < message.length; i++){
			numAscii = message.charCodeAt(i);

//Asimila mayúsculas
				if (numAscii >= 65 && numAscii <= 90){
					numAscii = String.fromCharCode((numAscii - 65 + parseInt(key)) % 26 + 65);
					resultC += numAscii;
					console.log(resultC);

//Asimila minisculas
				} else if (numAscii >= 97 && numAscii <= 122){
					numAscii = String.fromCharCode((numAscii - 97 + parseInt(key)) % 26 + 97);
					resultC += numAscii;
					console.log(resultC);

//Asimila el espacio " "
				} else if (numAscii === 32){
					resultC += " ";
				}
		}
	};

//**************************FUNCION DESCIFRAR*******************************
	let resultD = "";
	const descifrar = (message, key) => {
	let numAscii;

	//**RECORRIDO DEL FOR
			for (let i = 0; i < message.length; i++){
				numAscii = message.charCodeAt(i);
				//sugerencia de Sandra convertir a mayuscula porque es parte del hacker edition

	//Asimila mayúsculas
				if (numAscii >= 65 && numAscii <= 90){
					numAscii = String.fromCharCode ((numAscii + 65 - parseInt(key)) % 26 + 65);
					resultD += numAscii;
					console.log(resultD);


	//Asimila minisculas
	} else if (numAscii >= 97 && numAscii <= 122){
					numAscii = String.fromCharCode((numAscii - 97 - parseInt(key)) % 26 + 97);
					resultD += numAscii;
					console.log(resultD)


	//Asimila el espacio " "
				} else if (numAscii === 32){
					resultD += " ";
				}
			}
		};

// En este objeto declaro los metodos ENCODE y DECODE
window.cipher = {
  encode :cifrar,
  decode :descifrar
};
