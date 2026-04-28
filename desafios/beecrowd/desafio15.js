// Distância Entre Dois Pontos

import readline from "node:readline/promises";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const p1 = await rl.question("Digite x1 e y1: ");
const p2 = await rl.question("Digite x2 e y2: ");

const [x1, y1] = p1.split(" ").map(Number);
const [x2, y2] = p2.split(" ").map(Number);

const distancia = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

console.log(distancia.toFixed(4));

rl.close();
