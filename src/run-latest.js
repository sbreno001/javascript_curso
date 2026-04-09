import fs from 'fs';
import path from 'path';
import { pathToFileURL } from 'url';

const pastaAulas = './src';

const arquivos = fs.readdirSync(pastaAulas);

const aulas = arquivos
  .filter(nome => /^aula\d+\.js$/.test(nome))
  .map(nome => ({
    nome,
    numero: Number(nome.match(/\d+/)[0])
  }))
  .sort((a, b) => b.numero - a.numero);

if (aulas.length === 0) {
  console.log('Nenhum arquivo de aula encontrado.');
  process.exit(1);
}

const ultimaAula = aulas[0].nome;
const caminhoCompleto = path.resolve(pastaAulas, ultimaAula);

console.log(`Executando: ${ultimaAula}`);

await import(pathToFileURL(caminhoCompleto).href);
