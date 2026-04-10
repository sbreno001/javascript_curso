// Maior número

import readline from "node:readline/promises";

const lista = [];

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const n1 = await rl.question("Digite o primeiro número: ");
const n2 = await rl.question("Digite o segundo número: ");
const n3 = await rl.question("Digite o terceiro número: ")

if (n1 >= n2 && n1 >= n3) {
    console.log(`O maior número é ${n1}`)
} else if (n2 >= n1 && n2 >= n3) {
    console.log(`O maior número é ${n2}`)
} else {
    console.log(`O maior número é ${n3}`)
}

rl.close();
