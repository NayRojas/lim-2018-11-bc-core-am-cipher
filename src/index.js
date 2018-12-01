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

	const estiloMensajeCifrado = () =>{
//Mostrar botón de volver
		document.getElementById('user-options').style.visibility ="hidden";
		document.getElementById('erase').style.visibility ="visible";
		document.getElementById('copiar').style.visibility ="visible";
		document.getElementById('share-whatsapp').style.visibility ="visible";
		document.getElementById('share-gmail').style.visibility ="visible";
//Mostrar estilos para identificar mensaje CIFRADO
		document.getElementById('message').style.borderColor = "lightgray";
		document.getElementById('message').style.borderWidth = "thick";
		document.getElementById('message').style.textAlign = "center";
		document.getElementById('message').style.fontWeight = "bolder";
		document.getElementById('steps2').style.color = "red";
		document.getElementById('steps2').style.fontWeight = "bolder";
		campoVacio.innerHTML = "CIFRADO";
		campoVacio.style.letterSpacing = "1rem";
		campoVacio.style.fontSize = "0.9	rem";
		campoVacio.style.fontWeight = "bolder";
	};

//Condición para validar espacios vacios
	if (userMessage.value === ""){
		campoVacio.innerHTML = "Ingresa tu mensaje";
		userMessage.readOnly = false;
	} else if (userKey.value === ""){
		numVacio.innerHTML = "Ingresa tu número clave";
		userKey.readOnly = false;
	} else {
		cipher.encode(key, message);
//Bloqueo de edición del area de texto una vez se muestra el resultado
		document.getElementById('message').readOnly = true;
		estiloMensajeCifrado ();
	}

//Remplazo del texto en el textarea
	let userMessageDescifrado = document.getElementById('message').value;
	let replace = userMessageDescifrado.replace( userMessageDescifrado, window.cipher.encode(key, message));
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
		document.getElementById('copiar').style.visibility ="visible";
		document.getElementById('share-whatsapp').style.visibility ="visible";
		document.getElementById('share-gmail').style.visibility ="visible";
//Mostrar estilos al decifrar
		document.getElementById('message').style.borderColor = "lightgray";
		document.getElementById('message').style.borderWidth = "thick";
		document.getElementById('message').style.textAlign = "center";
		document.getElementById('message').style.fontWeight = "bolder";
		document.getElementById('steps2').style.color = "blue";
		document.getElementById('steps2').style.fontWeight = "bolder";
		campoVacio.innerHTML = "DESCIFRADO";
		campoVacio.style.color = "blue";
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
			cipher.decode(key, message);
//Bloqueo de edición del area de texto
			document.getElementById('message').readOnly = true;
			estiloMensajeCifrado ();
		}

//Remplazo del area de texto
			let userMessageDescifrado = document.getElementById('message').value;
			let replace = userMessageDescifrado.replace( userMessageDescifrado, window.cipher.decode(key, message));
			document.getElementById("message").value = replace;
	});


//*******************************EVENTO NUEVO MENSAJE*******************************
borrarButton.addEventListener('click', () => {
	borrar()
	volver()
});

const borrar = () => {
	document.getElementById("offset").value = "";
	document.getElementById("message").value = "";
	numVacio.innerHTML = "";
	campoVacio.innerHTML = "";
};

const volver = () => {
	document.getElementById('user-options').style.visibility ="visible";
	document.getElementById('copiar').style.visibility ="hidden";
	document.getElementById('share-whatsapp').style.visibility ="hidden";
	document.getElementById('share-gmail').style.visibility ="hidden";
	document.getElementById('steps2').style.color = "gray";
	document.getElementById('steps1').style.color = "gray";
	document.getElementById('message').style.borderColor = "#d9d9d9";
	document.getElementById('message').style.textAlign = "left";
	document.getElementById('steps2').style.fontWeight = "lighter";
	document.getElementById('erase').style.visibility ="hidden";
	campoVacio.style.color = "red";
	document.getElementById('message').readOnly = false;
};
//*****************************FUNCION COPIAR*******************************

let copyText = document.getElementById('copiar');

copyText.addEventListener('click', () => {
   const resultado = resultC;
   resultado.select();
   //Copia el texto seleccionado
   document.execCommand("copy");
});
