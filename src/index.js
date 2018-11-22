let userMessage = document.getElementById('message');
let userKey = document.getElementById('offset');
let cifrarButton = document.getElementById('cifrar-button');
let descifrarButton = document.getElementById('descifrar-button');
let borrarButton = document.getElementById('erase');
let campoVacio = document.getElementById('error-campo-vacio');
let numVacio = document.getElementById('error-num-vacio');
let campoParaMostrarMensaje = document.getElementById("message-cifrado");
let result = "";
let numAscii;

//**********************EVENTO DEL BOTON CIFRAR**************************
cifrarButton.addEventListener('click', () => {
	let message = userMessage.value;
	let key = userKey.value;
	cifrar(message, key)
/*
	if (userMessage.value === " "){
		alert("Ingresa tu mensaje ");
		console.log("entro");
	} else if (userKey.value === " "){
		alert("Ingresa tu número clave");
	} else {

	}

/*if (document.getElementById('segundaPantalla').style.visibility === "hidden"){
		document.getElementById('segundaPantalla').style.visibility = "visible";
	}else{
		document.getElementById('segundaPantalla').style.visibility = "hidden";
	}*/

//Remplazo del texto en el area de texto
let userMessageDescifrado = document.getElementById('message').value;
let replace = userMessageDescifrado.replace( userMessageDescifrado, result);
document.getElementById("message").value = replace;
});



//*****************EVENTO PARA BOTON DESCIFRAR*****************************
//incluir alertas de inputs

descifrarButton.addEventListener('click', () => {
	let message = userMessage.value;
	let key = userKey.value;
  descifrar(message, key)

  let userMessageDescifrado = document.getElementById('message').value;
  let replace = userMessageDescifrado.replace( userMessageDescifrado, result);
  document.getElementById("message").value = replace;
});

//*******************************FUNCION VOLVER*******************************

borrarButton.addEventListener('click', () => {
	const message = userMessage.value;
	const key = userKey.value;

	borrar()
	console.log("entro");
});

const borrar = () => {
	 document.getElementById("message").value = "";
	 document.getElementById("offset").value = "";
};

/*if (document.getElementById('primerPantalla').style.visibility === "hidden"){
	document.getElementById('segundaPantalla').style.visibility = "visible";
}else{
	document.getElementById('segundaPantalla').style.visibility = "hidden";
};*/

//*******************************FUNCION CONPARTIR*******************************
