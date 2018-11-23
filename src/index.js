let userMessage = document.getElementById('message');
let userKey = document.getElementById('offset');
let cifrarButton = document.getElementById('cifrar-button');
let descifrarButton = document.getElementById('descifrar-button');
let borrarButton = document.getElementById('erase');
let campoVacio = document.getElementById('error-campo-vacio');
let numVacio = document.getElementById('error-num-vacio');
let campoParaMostrarMensaje = document.getElementById("message-cifrado");



//**********************EVENTO DEL BOTON CIFRAR**************************
cifrarButton.addEventListener('click', () => {
	let message = userMessage.value;
	let key = userKey.value;
	//cifrar(message, key);
	console.log(resultC)

	//Condición si hay espacios vacios y sino ejecutar función
	if (userMessage.value === ""){
		campoVacio.innerHTML = "Ingresa tu mensaje";
		console.log("entro");
	} else if (userKey.value === "0"){
		numVacio.innerHTML = "Ingresa tu número clave";
	} else {
		cipher.encode(message, key);
	};

	//Remplazo del texto en el area de texto
	let userMessageDescifrado = document.getElementById('message').value;
	let replace = userMessageDescifrado.replace( userMessageDescifrado, resultC);
	document.getElementById("message").value = replace;

	});




//*****************EVENTO PARA BOTON DESCIFRAR*****************************

descifrarButton.addEventListener('click', () => {
	let message = userMessage.value;
	let key = userKey.value;

	//Condición si hay espacios vacios y sino ejecutar función
		if (userMessage.value === ""){
			campoVacio.innerHTML = "Ingresa tu mensaje";
			console.log("entro");
		} else if (userKey.value === "0"){
			numVacio.innerHTML = "Ingresa tu número clave";
		} else {
			cipher.decode(message, key);
		};

//Remplazo del texto en el area de texto
			let userMessageDescifrado = document.getElementById('message').value;
			let replace = userMessageDescifrado.replace( userMessageDescifrado, resultD);
			console.log(resultD);
			document.getElementById("message").value = replace;
	});


//*******************************EVENTO BORRAR*******************************

borrarButton.addEventListener('click', () => {
	let message = userMessage.value;
	let key = userKey.value;

	borrar()
	console.log("entro");
});

const borrar = () => {
	 document.getElementById("message").value = "";
	 document.getElementById("offset").value = "0";
	 numVacio.innerHTML = "";
	 campoVacio.innerHTML = "";
	 resultC = "";
	 resultD = "";
};


//*****************************FUNCION CONPARTIR*******************************
