// Desestruturação - 17

console.log("\nExemplo 1:");
const pessoa = {
    nome: "Breno",
    idade: 20,
    cidade: "São Paulo"
};

const { nome, idade, cidade } = pessoa;

console.log(nome);
console.log(idade);
console.log(cidade);

console.log("\nExemplo 2:");
const numeros = [1, 2, 3, 4, 5];

const [primeiro, segundo, ...resto] = numeros;

console.log(primeiro);
console.log(segundo);
console.log(resto);

console.log("\nExemplo 3:");
const usuario = {
    nome: "Breno",
    idade: 20,
    cidade: "São Paulo",
    profissao: "Desenvolvedor"
};

const { nome, idade, ...outros } = usuario;

console.log(nome);
console.log(idade);
console.log(outros);

console.log("\nExemplo 4:");
const aluno = {
    nome: "Breno",
    idade: 20,
    cidade: "São Paulo",
    profissao: "Desenvolvedor"
};

const { nome, idade, cidade, profissao } = aluno;

console.log(nome);
console.log(idade);
console.log(cidade);
console.log(profissao);