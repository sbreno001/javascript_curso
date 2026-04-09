// Bibliotecas (Dependências) - 19

// Para remover uma biblioteca: npm uninstall nome-da-biblioteca

import chalk from "chalk";
import { intro, outro, text } from "@clack/prompts";

async function main() {
    intro(chalk.green("Bem vindo ao programa!"));

    const name = await text({ message: "Qual é o seu nome?" });

    outro(`Olá ${name}!`);
}
main();
