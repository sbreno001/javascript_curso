// Salário

import readline from "node:readline/promises";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const numeroFuncionario = Number(await rl.question("Digite o número do funcionário: "));
const horasTrabalhadas = Number(await rl.question("Digite as horas trabalhadas: "));
const valorHora = parseFloat(await rl.question("Digite o valor da hora: "));

console.log(`\nNúmero = ${numeroFuncionario}\nSalário = US$ ${(horasTrabalhadas * valorHora).toFixed(2)}`)

rl.close();
