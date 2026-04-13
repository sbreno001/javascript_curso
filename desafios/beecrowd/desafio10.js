// Salário com bônus

import readline from "node:readline/promises";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const nomeVendedor = await rl.question("Digite o nome do vendedor: ");
const salarioVendedor = parseFloat(await rl.question("Digite o salário do funcionário: "))
const totalVendas = parseFloat(await rl.question("Digite o valor total das vendas: "))

console.log(`Total = ${(salarioVendedor + (totalVendas * 0.15)).toFixed(2)}`)

rl.close();
