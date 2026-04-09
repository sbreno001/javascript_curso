// Arrays - 14

/*
    Como saber tamanho da lista: .length
    lista = [1, 2, 3, 4, 5];
    console.log(lista.length);
*/

// push -> adiciona no final
// unshift -> adiciona no começo
// pop -> remove do final
// shift -> remove do começo

// Exemplo 1 (exemplo simples de Array):
console.log("\nExemplo 1:");
const numeros = [4, 30, 5, 6, 1, 8];

console.log(numeros[3]);

// Exemplo 2 (mudando um item da lista):
console.log("\nExemplo 2:");
const alunos = ["Breno", "Gabriel", "Guilherme", "Gustavo"];

alunos[2] = "Artur"

console.log(alunos);

// Exemplo 3 (adicionando itens na lista -> push para o ultimo e unshift para o primeiro):
console.log("\nExemplo 3:");
const frutas = ["maçã", "banana", "laranja", "manga", "uva"];

frutas.push("abacaxi");

console.log(frutas);

// Exemplo 4 (removendo itens da lista -> pop para o ultimo e shift para o primeiro):
console.log("\nExemplo 4:");
const convidados = ["a", "b", "c", "d"];

const ultimoConvidado = convidados.pop();
console.log(ultimoConvidado);
console.log(convidados);

// Exemplo 5 (iterando sobre um array):
console.log("\nExemplo 5:");
const lista = [1, 2, 3, 4, 5];

for(let i = 0; i < lista.length; i++){
    console.log(lista[i]);
}
