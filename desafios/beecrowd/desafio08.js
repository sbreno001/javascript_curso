// Diferença

import readline from "node:readline/promises";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const a = Number(await rl.question("Digite o valor de A: "));
const b = Number(await rl.question("Digite o valor de B: "));
const c = Number(await rl.question("Digite o valor de C: "));
const d = Number(await rl.question("Digite o valor de D: "))

console.log(`DIFERENÇA = ${(a * b) - (c * d)}`);

rl.close();
