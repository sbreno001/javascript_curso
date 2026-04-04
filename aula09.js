// Estrutura condicional IF ELSE - 09

// if (expressão) {}


const performance = "muito bom";
const salarioBase = 50000;
let bonus = 0;

if (performance === 'ótimo') {
    bonus = salarioBase * 0.2;
} else if (performance === "muito bom") {
    bonus = salarioBase * 0.15;
} else if (performance === "bom") {
    bonus = salarioBase * 0.1;
} else if (performance === "regular") {
    bonus = salarioBase * 0.05;
} else {
    console.log("Desempenho não reconhecido. Sem bônus.");
}

console.log(`Bônus calculado: R$ ${bonus.toFixed(2)}`);
