// En este objeto declaro los metodos ENCODE y DECODE
/*window.cipher = {
  encode:
	decode:
};*/

//****************************FUNCION CIFRAR*******************************
const cifrar = (message, key) => {

//RECORRIDO DEL FOR
for (let i = 0; i < message.length; i++){
		numAscii = message.charCodeAt(i);

//Asimila mayusculas
			if (numAscii >= 65 && numAscii <= 90){
				numAscii = String.fromCharCode((numAscii - 65 + parseInt(key)) % 26 + 65);
				result += numAscii;
				/*let userMessage = document.getElementById('message').value;
				let replace = userMessage.replace( userMessage, result);
				document.getElementById("message").value = replace;*/
				console.log(result);
//Asimila minisculas
			} else if (numAscii >= 97 && numAscii <= 122){
				numAscii = String.fromCharCode((numAscii - 97 + parseInt(key)) % 26 + 97);
				result += numAscii;
				/*let userMessage = document.getElementById('message').value;
				let replace = userMessage.replace( userMessage, result);
				document.getElementById("message").value = replace;*/
				console.log(result);
//Asimila el espacio " "
			} else if (numAscii === 32){
				result += " ";
			}
	}
};


//**************************FUNCION DESCIFRAR*******************************

const descifrar = (message, key) => {
let result = "";

//**RECORRIDO DEL FOR
		for (let i = 0; i < message.length; i++){
			let numAscii = message.charCodeAt(i);
			let userMessage = document.getElementById('message').value;
			let replace = userMessage.replace( userMessage, result);
			document.getElementById("message").value = replace;
			console.log(result);

//Asimila mayusculas
			if (numAscii >= 65 && numAscii <= 90){
				numAscii = String.fromCharCode((numAscii + 65 - parseInt(key)) % 26 + 65);
				result += numAscii;
				console.log(result);

//Asimila minisculas
			} else if (numAscii >= 97 && numAscii <= 122){
				numAscii = String.fromCharCode((numAscii + 97 - parseInt(key)) % 26 + 97);
				result += numAscii;
				console.log(result);

//Asimila el espacio " "
			} else if (numAscii === 32){
				result += " ";
			}
		}
	}
