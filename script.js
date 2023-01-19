
console.log('oi')

function criptografarTexto() {
	mudaBackground();
	var mensagem = document.querySelector('.entradaTexto').value;

	mensagem = mensagem.replace(/e/g, 'enter');
	mensagem = mensagem.replace(/i/g, 'imes');
	mensagem = mensagem.replace(/a/g, 'ai');
	mensagem = mensagem.replace(/o/g, 'ober');
	mensagem = mensagem.replace(/u/g, 'ufat');

	console.log(mensagem);

	var mensagemCript = document.querySelector('.textEncriptografado');
	mensagemCript.value = mensagem;

	//document.document.getElementsByClassName("textEncriptografado").style.background-image = "none";
}

function desencriptografarTexto() {
	mudaBackground();
	var mensagem = document.querySelector('.entradaTexto').value;

	mensagem = mensagem.replace(/enter/g, 'e');
	mensagem = mensagem.replace(/imes/g, 'i');
	mensagem = mensagem.replace(/ai/g, 'a');
	mensagem = mensagem.replace(/ober/g, 'o');
	mensagem = mensagem.replace(/ufat/g, 'u');

	console.log(mensagem);

	var mensagemCript = document.querySelector('.textEncriptografado');
	mensagemCript.value = mensagem;
}

function mudaBackground() {
document.getElementById("manipula").style.background = "white";
}

function copiar() {
	console.log('copiou!');

	// Type 1
	document.getElementById('copiar').addEventListener('click', copiar);
	  document.querySelector(".textEncriptografado").select();
	  document.execCommand("copy");
}



















