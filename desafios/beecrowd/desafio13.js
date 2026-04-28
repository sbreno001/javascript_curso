// O Maior

import readline from "node:readline/promises";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const valores = await rl.question("Digite tres valores: ");
const [a, b, c] = valores.split(" ").map(Number);

const maiorAB = (a + b + Math.abs(a - b)) / 2;
const maior = (maiorAB + c + Math.abs(maiorAB - c)) / 2;

console.log(`${maior} eh o maior`);

rl.close();
