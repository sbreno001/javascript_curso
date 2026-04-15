// Strings - 22

// Formas de definir Strings em JavaScript: 
// 1. Aspas simples: ''
// 2. Aspas duplas: ""
// 3. Template literals: ``

// === CRIAÇÃO DE STRINGS ===
const nome1 = 'Breno';                    // aspas simples
const nome2 = "Breno";                    // aspas duplas
const prefix = "Desenvolvedor";
const nome3 = `${prefix} Breno`;          // template literal (interpolação)

console.log(nome3); // Desenvolvedor Breno


// === STRING BASE ===
const nome = "Breno Dev";


// === PROPRIEDADES E TRANSFORMAÇÃO ===
console.log(nome.length);        // tamanho da string
console.log(nome.toUpperCase()); // tudo MAIÚSCULO
console.log(nome.toLowerCase()); // tudo minúsculo


// === BUSCA E VALIDAÇÃO ===
console.log(nome.includes("n"));    // verifica se contém
console.log(nome.startsWith("B"));  // começa com
console.log(nome.endsWith("v"));    // termina com


// === POSIÇÃO ===
console.log(nome.indexOf("e"));      // primeira posição
console.log(nome.lastIndexOf("e"));  // última posição


// === CORTE DE STRING ===
console.log(nome.slice(0, 5));     // corta parte (aceita negativo)
console.log(nome.substring(0, 5)); // parecido, mas não aceita negativo


// === SUBSTITUIÇÃO ===
console.log(nome.replace("Dev", "Developer")); // substitui primeira ocorrência

const frase = "Dev Dev Dev";
console.log(frase.replaceAll("Dev", "Developer")); // substitui todas


// === REPETIÇÃO ===
console.log(nome.repeat(2)); // repete a string


// === REMOVER ESPAÇOS ===
const texto = "   Breno   ";
console.log(texto.trim()); // remove espaços do início e fim


// === PREENCHIMENTO ===
const numero = "5";
console.log(numero.padStart(3, "0")); // "005" (preenche início)
console.log(numero.padEnd(3, "0"));   // "500" (preenche fim)


// === ACESSO A CARACTERES ===
console.log(nome.charAt(0)); // caractere na posição
console.log(nome.at(-1));    // último caractere (mais moderno)


// === STRING → ARRAY ===
const chars = nome.split(""); // separa cada caractere
console.log(chars);


// === ARRAY → STRING ===
console.log(chars.join("")); // junta novamente


// === STRING → PALAVRAS ===
const frase2 = "Breno Dev Fullstack";
const palavras = frase2.split(" "); // separa por espaço
console.log(palavras);
