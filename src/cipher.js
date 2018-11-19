window.cipher = {
  // ...
};


---------------------------------------------
function cifrar(){
//Acá empiezo a almacenar en variables los inputs del programa: mensaje, offset, cifrar
	str = prompt('tu mensaje');
  	num = prompt('tu offset');
  let result = "";

    for (let i = 0; i < str.length; i++){
      let numAscii = str.charCodeAt(i);
      if (numAscii >= 65 && numAscii <= 90){
        result += String.fromCharCode((numAscii - 65 +num) % 26 + 65);
      }
    }
return result;
}
