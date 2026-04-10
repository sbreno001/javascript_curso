// Soma simples

import readline from "node:readline/promises";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const numero1 = Number(await rl.question("Digite um número: "));
const numero2 = Number(await rl.question("Digite mais um número: "));

console.log(`\nA soma dos números é igual a: ${numero1 + numero2}`);

rl.close();
