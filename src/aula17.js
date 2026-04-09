// Desestruturação - 17

// Exemplo 1 (extraindo propriedades do objeto):
console.log("\nExemplo 1:");

function exemplo1(){
    const pessoa = {
        nome: "Breno",
        idade: 22,
        isProgramer: true
    }
    const { nome, idade, isProgramer } = pessoa;
    console.log(nome, idade, isProgramer);
}
exemplo1();

// Exemplo 2 (extraindo itens do array):
console.log("\nExemplo 2:");

function exemplo2(){
    const cores = ["verde", "amarelo", "azul", "rosa", "laranja"]
    const [primeiraCor, segundaCor, terceiraCor] = cores;
    console.log(primeiraCor, segundaCor, terceiraCor);
}
exemplo2();

// Exemplo 3 (renomeando propriedade extraída):
console.log("\nExemplo 3:");

function exemplo3(){
    const nickname = "Breno da Silva";

    const jogador = {
        nickname: "Breno",
        vida: 20,
        inventario: {
            itens: ["espada", "escudo", "arco"],
            pocoes: [
                { tipo: "regeneracao", duracao: 8 },
                { tipo: "defesa", duracao: 5 }
            ]
        }
    }
    const { nickname: nick, vida } = jogador;
    console.log(nickname, nick);
}
exemplo3();

// Exemplo 4 (desestruturação aninhada):
console.log("\nExemplo 4:");

function exemplo4(){
    const jogador = {
        nickname: "Breno",
        vida: 20,
        inventario: {
            itens: ["espada", "escudo", "arco"],
            pocoes: [
                { tipo: "regeneracao", duracao: 8 },
                { tipo: "defesa", duracao: 5 }
            ]
        }
    }

    const { inventario: { pocoes, itens } } = jogador;

    const [{ tipo, duracao }, { tipo: tipo2, duracao: duracao2 }] = pocoes;
    console.log("Itens:", itens);
    console.log("Primeira poção:", tipo, duracao);
    console.log("Segunda poção:", tipo2, duracao2);
}
exemplo4();
