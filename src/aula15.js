import readline from "node:readline";

// Objetos - 15

// Exemplo 1:
console.log("Exemplo 1:");
const user = {
    nickname: "Breno",
    health: 20,
    isDead: false,
    present(){
        console.log("Meu nick é", this.nickname)
    }
};

for(const propriedade in user){
    console.log(propriedade);
}

// Exemplo 2:
console.log("\nExemplo 2:");
const computador = {
    placaMae: "ASUS",
    placaVideo: "NVIDIA",
    cpu: "Intel",
    fonte: {
        nome: "Corsair",
        watts: "500W"
    },
    case: {
        nome: "CoolerMaster",
        cor: "Preto"
    }
}

console.log(computador.fonte.watts);

// Exemplo 3:
console.log("\nExemplo 3:");

const prompt = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

prompt.question()
prompt.close()

// Exemplo 4:
console.log("\nExemplo 4:");
const player = {
    iventario: {
        itens: [
            {
                nome: "espada",
                durabilidade: 160,
                encantamentos: [
                    { nome: "afiacao", nivel: 2 },
                    { nome: "inquebravel", nivel: 3 }
                ]
            },
            {
                nome: "escudo",
                durabilidade: 300
            }
        ],
        pocoes: [
            { tipo: "regeneracao", duracao: 12 },
            { tipo: "defesa", duracao: 30 }
        ]
    }
};

console.log(player.iventario.pocoes[0].tipo);
