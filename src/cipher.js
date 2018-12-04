
//****************************FUNCION CIFRAR*******************************
const cifrar = (offset, string) => {
let numAscii;
let resultC = "";
//RECORRIDO EL MENSAJE DEL USUARIO
	for (let i = 0; i < string.length; i++){
		numAscii = string.charCodeAt(i);
//Asimila mayúsculas
		if (numAscii >= 65 && numAscii <= 90){
			numAscii = String.fromCharCode((numAscii - 65 + parseInt(offset)) % 26 + 65);
			resultC = resultC + numAscii;
//Asimila minisculas
		} else if (numAscii >= 97 && numAscii <= 122){
			numAscii = String.fromCharCode((numAscii - 97 + parseInt(offset)) % 26 + 97);
			resultC = resultC + numAscii;
//Asimila el espacio " "
		} else if (numAscii === 32){
			resultC = resultC + " ";
		}
	}
		return resultC
};

//**************************FUNCION DESCIFRAR*******************************
	const descifrar = (offset, string) => {
	let numAscii;
  let resultD = "";
	let key = parseInt(offset) % 26;
//RECORRIDO EL MENSAJE DEL USUARIO
	for (let i = 0; i < string.length; i++){
		numAscii = string.charCodeAt(i);
//Asimila mayúsculas
		if (numAscii >= 65 && numAscii <= 90){
			numAscii = String.fromCharCode ((numAscii + 65 - key) % 26 + 65);
			resultD += numAscii;
//Asimila minisculas
		} else if (numAscii >= 97 && numAscii <= 122){
			numAscii = String.fromCharCode((numAscii - 97 - key) % 26 + 97);
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
