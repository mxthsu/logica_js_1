
	function pulaLinha() {
		document.write("<br>");
	}

	function mostra(texto) {
		document.write(texto);
		pulaLinha();        
	}

    for (var linha = 0; linha < 3; linha++) {
        for (var coluna = 0; coluna < 10; coluna++) {
        document.write("*");
        }
        pulaLinha();
    }




