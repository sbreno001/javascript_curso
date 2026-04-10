// Filtrar dados

const idades = [3, 7, 19, 3, 50, 2, 34];
const maioresDeIdade = [];

for(let i = 0; i < idades.length; i++){
    if (idades[i] >= 18){
        maioresDeIdade.push(idades[i]);
    }
}
console.log(maioresDeIdade);
