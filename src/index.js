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
		userMessage.readOnly = false;
		console.log("entro");
	} else if (userKey.value === ""){
		numVacio.innerHTML = "Ingresa tu número clave";
		userKey.readOnly = false;
	} else {
		cipher.encode(message, key);
//Bloqueo de edición del area de texto
		document.getElementById('message').readOnly = true;
//limpiando mensajes de error
		campoVacio.innerHTML = "";
		numVacio.innerHTML = "";

	};

	//Remplazo del texto en el area de texto
	let userMessageDescifrado = document.getElementById('message').value;
	let replace = userMessageDescifrado.replace( userMessageDescifrado, resultC);
	document.getElementById("message").value = replace;

	});

//Mostrar botón de volver
document.querySelector('main-buttons').style.visibility="hidden";


//*****************EVENTO PARA BOTON DESCIFRAR*****************************

descifrarButton.addEventListener('click', () => {
	let message = userMessage.value;
	let key = userKey.value;

	//Condición si hay espacios vacios y sino ejecutar función
		if (userMessage.value === ""){
			campoVacio.innerHTML = "Ingresa tu mensaje";
			numVacio.innerHTML = "";
			userMessage.readOnly = false;
			console.log("entro");
		} else if (userKey.value === "0"){
			campoVacio.innerHTML = "";
			numVacio.innerHTML = "Ingresa tu número clave";
			userKey.readOnly = false;
		} else {
			cipher.decode(message, key);
//Bloqueo de edición del area de texto
document.getElementById('message').readOnly = true;
//limpiando mensajes de error
			campoVacio.innerHTML = "";
			numVacio.innerHTML = "";
		};

//Remplazo del area de texto
			let userMessageDescifrado = document.getElementById('message').value;
			let replace = userMessageDescifrado.replace( userMessageDescifrado, resultD);
			console.log(resultD);
			document.getElementById("message").value = replace;

//Mostrar botón de volver



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
	 document.getElementById("offset").value = "";
	 numVacio.innerHTML = "";
	 campoVacio.innerHTML = "";
	 resultC = "";
	 resultD = "";
};


//*****************************FUNCION CONPARTIR*******************************
