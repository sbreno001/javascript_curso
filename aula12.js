// Laço de repetição While - 12

// while (condição) {}

// Exemplo com break
console.log("Exemplo com break");
let exemplo1 = 0;
while(exemplo1 <=20){

    if (exemplo1 === 10){
        break;
    }

    console.log(exemplo1);
    exemplo1++;
}

// Exemplo com coninue
console.log("Exemplo com continue");
let exemplo2 = 0;
while(exemplo2 <=20){
    exemplo2++;

    if (exemplo2 % 2 === 0){
        console.log(exemplo2, "é par")
        continue;
    }

    console.log(exemplo2, "não é par");
}

// Exemplo com do while
console.log("Exemplo com do while");
const rl = require("node:readline");

const prompt = rl.createInterface({
    input: process.stdin, output: process.stdout
})

function question(query){
    return new Promise((resolve) => {
        prompt.question(query, resolve);
    })
}

async function main(){
    let number;

    do {
        const answer = await question("Digite um número qualquer: ");
        number = Number.parseInt(answer);

        if (Number.isNaN(number)){
            console.log("O que você digitou é inválido!")
        }

    } while(Number.isNaN(number));

    prompt.close();

    console.log(`O número digitado foi: ${number}`);
}

main();
