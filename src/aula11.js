import readline from "node:readline";

// Laço de repetição For - 11

// for(inicialização; condição; execução){
//     // código
// }

// Exemplo 1:
console.log("\nExemplo 1:");
for(let i = 0; i < 10; i++){
    setTimeout(() => console.log(i), 200 * i);
}

// Exemplo 2:
console.log("\nExemplo 2:");
const numbers = [];

for(let i = 0; i < 10; i++){
    numbers.push(i);
}

console.log(numbers);

// Exemplo 3:
console.log("\nExemplo 3:");
const fruits = ["maçã", "banana", "laranja", "manga", "uva"];

for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

// Exemplo 4:
setTimeout(() => {
    console.log("\nExemplo 4:");

    const prompt = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    prompt.question("Qual número deseja ver a tabuada? ", (answer) => {
        const number = Number.parseInt(answer);

        if (Number.isNaN(number)){
            console.log("Por favor, insira um número válido.");
        } else {
            console.log(`Tabuada do ${number}:`);
            for(let i = 1; i <= 10; i++){
                console.log(`${number} x ${i} = ${number * i}`);
            }
        }

        prompt.close();
    });
}, 2000);
