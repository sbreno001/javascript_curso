// Área de um círculo

import readline from "node:readline/promises";

const pi = 3.14159;

const rl = readline.createInterface({
    input: process.stdin,
    output:process.stdout
});;

const raio = parseFloat(await rl.question("Digite o raio da circunferência: "))

const area = pi * (raio) ** 2; 

console.log(`A = ${area.toFixed(4)}`);

rl.close();
