let userMessage = document.getElementById('string');
let userKey = document.getElementById('offset');
let cifrarButton = document.getElementById('encode-button');
let descifrarButton = document.getElementById('decode-button');
let newMessage = document.getElementById('new-message');
let messageEmptyString = document.getElementById('empty-string');
let messageEmptyOffset = document.getElementById('empty-offset');

//**********************EVENTO DEL BOTON CIFRAR**************************
cifrarButton.addEventListener('click', () => {
	let message = userMessage.value;
	let key = userKey.value;

	const estiloMensajeCifrado = () =>{
//Manipulación de botones
		document.getElementById('main-buttons').style.visibility ="hidden";
		document.getElementById('new-message').style.visibility ="visible";
//Mostrar estilos para identificar mensaje CIFRADO
		document.getElementById('string').style.borderColor = "lightgray";
		document.getElementById('string').style.borderWidth = "thick";
		document.getElementById('string').style.textAlign = "center";
		document.getElementById('string').style.fontWeight = "bolder";
		document.getElementById('steps2').style.color = "red";
		document.getElementById('steps2').style.fontWeight = "bolder";
		messageEmptyString.innerHTML = "CIFRADO";
		messageEmptyOffset.innerHTML = " ";
		messageEmptyString.style.letterSpacing = "1rem";
		messageEmptyString.style.fontSize = "0.9	rem";
		messageEmptyString.style.fontWeight = "bolder";
	};

//Condición si hay espacios vacios y sino ejecutar función
	if (userMessage.value === ""){
		messageEmptyString.innerHTML = "Ingresa tu mensaje";
		userMessage.readOnly = false;
	} else if (userKey.value === ""){
		messageEmptyOffset.innerHTML = "Ingresa tu número clave";
		userKey.readOnly = false;
	} else {
		cipher.encode(key, message);
//Bloqueo de edición del area de texto una vez se muestra el resultado
		document.getElementById('string').readOnly = true;
		estiloMensajeCifrado ();
//Remplazo del texto en el textarea para mostrar resultado
		let userMessageDescifrado = document.getElementById('string').value;
		let replace = userMessageDescifrado.replace( userMessageDescifrado, window.cipher.encode(key, message));
		document.getElementById("string").value = replace;
	}
});

//*****************EVENTO PARA BOTON DESCIFRAR************************
descifrarButton.addEventListener('click', () => {
	let message = userMessage.value;
	let key = userKey.value;

	const estiloMensajeCifrado = () =>{
//Manipulación de botones
		document.getElementById('main-buttons').style.visibility ="hidden";
		document.getElementById('new-message').style.visibility ="visible";
//Mostrar estilos para identificar mensaje DESCIFRADO
		document.getElementById('string').style.borderColor = "lightgray";
		document.getElementById('string').style.borderWidth = "thick";
		document.getElementById('string').style.textAlign = "center";
		document.getElementById('string').style.fontWeight = "bolder";
		document.getElementById('steps2').style.color = "blue";
		document.getElementById('steps2').style.fontWeight = "bolder";
		messageEmptyString.innerHTML = "DESCIFRADO";
		messageEmptyOffset.innerHTML = " ";
		messageEmptyString.style.color = "blue";
		messageEmptyString.style.letterSpacing = "1rem";
		messageEmptyString.style.fontSize = "0.9	rem";
		messageEmptyString.style.fontWeight = "bolder";
	};

//Condición si hay espacios vacios y sino ejecutar función
		if (userMessage.value === ""){
			messageEmptyString.innerHTML = "Ingresa tu mensaje";
			userMessage.readOnly = false;
		} else if (userKey.value === ""){
			messageEmptyOffset.innerHTML = "Ingresa tu número clave";
			userKey.readOnly = false;
		} else {
			cipher.decode(key, message);
//Bloqueo de edición del area de texto una vez se muestra el resultado
			document.getElementById('string').readOnly = true;
			estiloMensajeCifrado ();
//Remplazo del texto en el textarea para mostrar resultado
			let userMessageDescifrado = document.getElementById('string').value;
			let replace = userMessageDescifrado.replace( userMessageDescifrado, window.cipher.decode(key, message));
			document.getElementById("string").value = replace;
		}
	});

//*******************************EVENTO NUEVO MENSAJE*******************************
newMessage.addEventListener('click', () => {
	borrar()
	volver()
});

const borrar = () => {
	document.getElementById("offset").value = "";
	document.getElementById("string").value = "";
	messageEmptyOffset.innerHTML = "";
	messageEmptyString.innerHTML = "";
};

const volver = () => {
	document.getElementById('main-buttons').style.visibility ="visible";
	document.getElementById('new-message').style.visibility ="hidden";
	document.getElementById('steps2').style.color = "gray";
	document.getElementById('steps2').style.fontWeight = "lighter";
	document.getElementById('steps1').style.color = "gray";
	document.getElementById('string').style.borderColor = "#d9d9d9";
	document.getElementById('string').style.textAlign = "left";
	document.getElementById('string').readOnly = false;
};
