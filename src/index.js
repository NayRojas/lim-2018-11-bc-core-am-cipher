let userMessage = document.getElementById('message');
let userKey = document.getElementById('offset');
let cifrarButton = document.getElementById('cifrar-button');
let descifrarButton = document.getElementById('descifrar-button');
let borrarButton = document.getElementById('erase');
let campoVacio = document.getElementById('error-campo-vacio');
let numVacio = document.getElementById('error-num-vacio');
let result = "";
let numAscii;

//**********************EVENTO DEL BOTON CIFRAR**************************
cifrarButton.addEventListener('click', () => {
	let message = userMessage.value;
	let key = userKey.value;

	if (userMessage === " "){
		userMessage.innerHTML = "Ingresa tu mensaje ";
		numVacio.innerHTML =" ";
	} else (userKey === ""){
		userMessage.innerHTML = " ";
		numVacio.innerHTML ="Ingresa tu número clave";
	}

  cifrar(message, key)


  let userMessageCifrado = document.getElementById('message').value;
  let replace = userMessageCifrado.replace( userMessageCifrado, result);
  document.getElementById("message").value = replace;
});


//*****************EVENTO PARA BOTON DESCIFRAR*****************************
//incluir alertas de inputs

descifrarButton.addEventListener('click', () => {
	let message = userMessage.value;
	let key = userKey.value;
  descifrar(message, key)

  let userMessageDescifrado = document.getElementById('message').value;
  console.log("entro")
  let replace = userMessageDescifrado.replace( userMessageDescifrado, result);
  document.getElementById("message").value = replace;
});

//*******************************FUNCION BORRAR*******************************

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

//*******************************FUNCION CONPARTIR*******************************
