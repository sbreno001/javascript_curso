// Par ou ímpar

import readline from "node:readline/promises";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const numero = Number(await rl.question("Digite um número: "));
    if (numero % 2 === 0){
        console.log(`O número ${numero} é par`);
    } else {
        console.log(`O número ${numero} é ímpar`)
    }
rl.close();
