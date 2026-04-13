// Média 2

import readline from "node:readline/promises";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const primeiraNota = parseFloat(await rl.question("Digite a primeira nota do aluno: "));
const segundaNota = parseFloat(await rl.question("Digite a segunda nota: "));
const terceiraNota = parseFloat(await rl.question("Digite a terceira nota: "));

console.log(`MEDIA = ${(((primeiraNota * 2) + (segundaNota * 3) + (terceiraNota * 5)) / (2 + 3 + 5)).toFixed(1)}`);

rl.close();
