
	function pulaLinha() {
		document.write("<br><br>");
	}

	function mostra(texto) {
		document.write(texto);
		pulaLinha();
	}

    function calculaImc(peso, altura){
        return peso / (altura * altura);
    }
    
    var nome = prompt("Informe seu nome: ");
	var pesoInformado = parseFloat(prompt(nome + ", Informe seu peso: "));
    var alturaInformada = parseFloat(prompt(nome+ ", Informe sua altura: "));

	var imc = calculaImc(pesoInformado, alturaInformada);

    mostra("O IMC de " + nome + " é " + imc);

	if (imc < 18.5) {
		mostra("Seu imc está abaixo");
	}

	if (imc > 35) {
		mostra("Seu imc está acima");
	}

	if (imc >= 18.5 && imc <= 35 ) {
		mostra("Seu imc está excelente");
	}	





