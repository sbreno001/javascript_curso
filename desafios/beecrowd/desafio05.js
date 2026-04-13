// Produto simples

import readline from "node:readline/promises";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const n1 = Number(await rl.question("Digite o primeiro número: "));
const n2 = Number(await rl.question("Digite o segundo número: "));

console.log(`PROD = ${n1 * n2}`);

rl.close();
