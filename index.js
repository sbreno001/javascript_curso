const rl = require("node:readline");

const prompt = rl.createInterface({
    input: process.stdin,
    output: process.stdout,
});

prompt.question("Qual é o seu nome? ", (nome) => {
    console.log(`Olá ${nome}`);
    prompt.close();
});

prompt.on("close", () => {
    console.log("Até logo!");
});
