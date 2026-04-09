// Escopos (Bloco, Função e Léxico) - 16

// Bloco -> variável só vive dentro { }:
if (true){
    let nome = "Breno";
    console.log(nome);
}

// Função -> variável só vive dentro da função:
function mostrarNome(){
    let nome = "Breno";
    console.log(nome);
}

// Léxico -> função “lembra” o lugar onde foi criada:
function externa() {
    let nome = "Breno";

    function interna() {
        console.log(nome);
    }

    interna();
}

externa();
