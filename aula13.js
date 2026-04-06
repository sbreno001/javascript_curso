// Funções - 13

// function idenificador(){}

// Exemplo 1
console.log("\nExemplo 1:");
function saudacao(name){
    console.log("Seja bem vindo(a)", name);
}

saudacao("Breno");

// Exemplo 2
console.log("\nExemplo 2:");
function somaExemplo2(n1, n2){
    const resultado = n1 + n2;
    return resultado;
}

console.log(somaExemplo2(10, 20));

// Exemplo 3
console.log("\nExemplo 3:");
const somaExemplo3 = (a, b) => {
    return a + b;
}

console.log(somaExemplo3(10, 20));

// Exemplo 4
console.log("\nExemplo 4:");
function fatorial(numero){
    let resultado = 1;
    for(let i = 2; i <= numero; i++){
        resultado *= i;
    }
    return resultado;
}

console.log(fatorial(5));

// Exemplo 5
console.log("\nExemplo 5:");
function criacaoTag(nome, prefixo, sufixo){
    if (prefixo && sufixo){
        return `${prefixo} ${nome} ${sufixo}`
    }
    if (prefixo){
        return `${prefixo} ${nome}`
    }
    return nome;
}

const tag = criacaoTag("Breno", "[Desenvolvedor]", "Dev");
console.log(tag);

// Exemplo 6
console.log("\nExemplo 6:")
function potencia(numero, expoente=2){
    return numero ** expoente;
}

console.log(potencia(2, 3));
