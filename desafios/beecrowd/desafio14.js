// Consumo

import readline from "node:readline/promises";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const X = parseInt(await rl.question("Digite a distancia: "));
const Y = parseFloat(await rl.question("Digite o combustivel gasto: "));

const consumo = X / Y;

console.log(`${consumo.toFixed(3)} km/l`);

rl.close();
