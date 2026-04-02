// Operadores aritméticos - 04

//       + Adição
//       - Subtração
//       * Multiplicação
//       / Divisão
//       % Resto da divisão
//       ** Exponenciação

const sum = 28 + 2;
const sub = 14 - 3;
const mul = 1009 * 2;
const div = 10 / 2;
const mod = 10 % 3;
const exp = 2 ** 3;

console.log(sum);
console.log(sub);
console.log(mul);
console.log(div);
console.log(mod);
console.log(exp);

const price = 100;
const percentage = 25;
const discount = (price * percentage) / 100;
const finalPrice = price - discount;

console.log("O preço do produto é ", price);
console.log("O desconto é de ", percentage, "%");
console.log("O preço com desconto é ", finalPrice);

console.log(`Um minuto tem ${60} segundos`);
console.log(`Um dia tem ${24 * 60 * 60} segundos`);
console.log(`Um ano tem ${365 * 24 * 60 * 60} segundos`);
