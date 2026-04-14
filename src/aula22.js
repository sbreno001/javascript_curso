// Strings

// Formas de definir Strings em JavaScript: 
// 1. Aspas simples: ''
// 2. Aspas duplas: ""
// 3. Template literals: ``

const prefix = "Desenvolvedor"
const myName = `${prefix} Breno`

console.log(myName);

// Métodos de strings

const nome = "Breno Dev";

console.log(nome.length)
console.log(nome.toUpperCase())
console.log(nome.toLowerCase())
console.log(nome.includes("n"))
console.log(nome.startsWith("B"))
console.log(nome.endsWith("V"))
console.log(nome.slice(0, 5))
console.log(nome.replace("Dev", "Developer"))
console.log(nome.repeat(4))
const chars = nome.split("")
console.log(words.join(""))
