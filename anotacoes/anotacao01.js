// Como solicitar dados do usuário

import readline from "node:readline/promises";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const n1 = await rl.question("Digite n1: ");
const n2 = await rl.question("Digite n2: ");

console.log(n1, n2);

rl.close();
