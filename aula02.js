// Variáveis const let var - 02

// const -> não pode ser alterado
const passaword = "Athena2025@";

console.log(passaword);

// let -> pode ser alterado
let username = "Breno";

username = "Athena";

console.log(username);

// Tipos de variáveis 

const string = "Este é um texto";
const number = 10;
const boolean = true;
const array = [1, 2, 3, 4, 5];
const object = { name: "Breno", age: 25 };
const func = () => {
    console.log("Hello World");
};
const date = new Date();

// Recebendo entrada de um usuário

const rl = require("node:readline");

const prompt = rl.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let name;

prompt.question("Qual é o seu nome? ", answer => {
    name = answer;
    prompt.close();
});

prompt.on("close", () => {
    console.log("Seja bem vindo", name)
});
