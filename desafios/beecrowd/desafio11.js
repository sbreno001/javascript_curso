// Esfera

import readline from "node:readline/promises";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const R = parseFloat(await rl.question("Digite o raio: "));

const pi = 3.14159;
const volume = (4.0 / 3) * pi * (R * R * R);

console.log(`VOLUME = ${volume.toFixed(3)}`);

rl.close();
