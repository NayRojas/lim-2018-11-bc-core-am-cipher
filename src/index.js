let userMessage = document.getElementById('message');
let userKey = document.getElementById('offset');
let cifrarButton = document.getElementById('cifrar-button');
let descifrarButton = document.getElementById('descifrar-button');
let borrarButton = document.getElementById('erase');
let campoVacio = document.getElementById('error-campo-vacio');
let numVacio = document.getElementById('error-num-vacio');


//**********************EVENTO DEL BOTON CIFRAR**************************
cifrarButton.addEventListener('click', () => {
	let message = userMessage.value;
	let key = userKey.value;
	//cifrar(message, key);


	const estiloMensajeCifrado = () =>{
		//Mostrar botón de volver
		document.getElementById('user-options').style.visibility ="hidden";
		document.getElementById('erase').style.visibility ="visible";
	//Mostrar estilos al cifrar mensaje
		document.getElementById('message').style.borderColor = "lightgray";
		document.getElementById('message').style.borderWidth = "thick";
		document.getElementById('message').style.textAlign = "center";
		document.getElementById('message').style.fontWeight = "bolder";
		document.getElementById('steps2').style.color = "red";
		document.getElementById('steps2').style.fontWeight = "bolder";
		campoVacio.innerHTML = "CIFRADO";
		campoVacio.style.letterSpacing = "1rem";
		campoVacio.style.fontWeight = "bolder";
		campoVacio.style.borderWeight = "900";
	};


	//Condición si hay espacios vacios y sino ejecutar función
	if (userMessage.value === ""){
		campoVacio.innerHTML = "Ingresa tu mensaje";
		userMessage.readOnly = false;
	} else if (userKey.value === ""){
		numVacio.innerHTML = "Ingresa tu número clave";
		userKey.readOnly = false;
	} else {
		cipher.encode(message, key);
//Bloqueo de edición del area de texto
		document.getElementById('message').readOnly = true;
		estiloMensajeCifrado ();
//limpiando mensajes de error

	}

	//Remplazo del texto en el area de texto
	let userMessageDescifrado = document.getElementById('message').value;
	let replace = userMessageDescifrado.replace( userMessageDescifrado, window.cipher.encode('ABC',3));
	document.getElementById("message").value = replace;


});



//*****************EVENTO PARA BOTON DESCIFRAR*****************************

descifrarButton.addEventListener('click', () => {
	let message = userMessage.value;
	let key = userKey.value;

	const estiloMensajeCifrado = () =>{
		//Mostrar botón de volver
		document.getElementById('user-options').style.visibility ="hidden";
		document.getElementById('erase').style.visibility ="visible";
		//Mostrar estilos al decifrar
		document.getElementById('message').style.borderColor = "red";
		document.getElementById('message').style.borderWidth = "thick";
		document.getElementById('message').style.textAlign = "center";
		document.getElementById('message').style.fontWeight = "bolder";
		document.getElementById('steps2').style.color = "red";
		document.getElementById('steps2').style.fontWeight = "bolder";
		document.getElementById('steps2').style.borderWeight = "900";
		campoVacio.innerHTML = "DESCIFRADO";
		campoVacio.style.letterSpacing = "1rem";
		campoVacio.style.fontSize = "0.9	rem";
		campoVacio.style.fontWeight = "bolder";
	};

	//Condición si hay espacios vacios y sino ejecutar función
		if (userMessage.value === ""){
			campoVacio.innerHTML = "Ingresa tu mensaje";
			numVacio.innerHTML = "";
			userMessage.readOnly = false;
		} else if (userKey.value === "0"){
			campoVacio.innerHTML = "";
			numVacio.innerHTML = "Ingresa tu número clave";
			userKey.readOnly = false;
		} else {
			cipher.decode(message, key);
//Bloqueo de edición del area de texto
document.getElementById('message').readOnly = true;
estiloMensajeCifrado ();
		}

//Remplazo del area de texto
			let userMessageDescifrado = document.getElementById('message').value;
			let replace = userMessageDescifrado.replace( userMessageDescifrado, resultD);
			document.getElementById("message").value = replace;


	});


//*******************************EVENTO BORRAR*******************************
borrarButton.addEventListener('click', () => {
	//let message = userMessage.value;
	//let key = userKey.value;
	borrar()
	volver()
});

const borrar = () => {
	document.getElementById("message").value = "";
	document.getElementById("offset").value = "";
	numVacio.innerHTML = "";
	campoVacio.innerHTML = "";
	resultC = "";
	resultD = "";
};

const volver = () => {
	document.getElementById('user-options').style.visibility ="visible";
	document.getElementById('steps2').style.color = "gray";
	document.getElementById('steps1').style.color = "gray";
	document.getElementById('message').style.borderColor = "#d9d9d9";
	document.getElementById('message').style.textAlign = "left";
	document.getElementById('steps2').style.fontWeight = "lighter";
	document.getElementById('erase').style.visibility ="hidden";
	document.getElementById('message').readOnly = false;
};
//*****************************FUNCION CONPARTIR*******************************
