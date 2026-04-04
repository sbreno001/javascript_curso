// Operadores lógicos - 07

//      &&   E (AND)
//      ||   OU (OR)
//      !    NÃO (NOT)

const tomarBanho = true;
const escovarDentes = true;

const estaPronto = tomarBanho && escovarDentes;

const lavarLouca = true;
const fazerTarefa = false;

const podeJogar = lavarLouca || fazerTarefa;

console.log((tomarBanho && escovarDentes) && (lavarLouca || fazerTarefa));
