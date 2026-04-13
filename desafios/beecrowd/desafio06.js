// Média 1

import readline from "node:readline/promises";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const primeiraNota = parseFloat(await rl.question("Digite a primeira nota: "));
const segundaNota = parseFloat(await rl.question("Digite a segunda nota: "));

console.log(`MEDIA = ${(((primeiraNota * 3.5) + (segundaNota * 7.5)) / (3.5 + 7.5)).toFixed(5)}`)

rl.close();
