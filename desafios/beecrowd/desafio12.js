// Área

import readline from "node:readline/promises";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const valores = await rl.question("Digite A, B e C: ");
const [A, B, C] = valores.split(" ").map(Number);

const pi = 3.14159;

const triangulo = (A * C) / 2;
const circulo = pi * (C * C);
const trapezio = ((A + B) * C) / 2;
const quadrado = B * B;
const retangulo = A * B;

console.log(`TRIANGULO: ${triangulo.toFixed(3)}`);
console.log(`CIRCULO: ${circulo.toFixed(3)}`);
console.log(`TRAPEZIO: ${trapezio.toFixed(3)}`);
console.log(`QUADRADO: ${quadrado.toFixed(3)}`);
console.log(`RETANGULO: ${retangulo.toFixed(3)}`);

rl.close();
