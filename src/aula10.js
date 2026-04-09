// Estrutura condicional Switch - 10

// switch (expressão) {
//     case "esperado": {
//         ...
//         break;
//     }
// }

const animal = "gato";

switch (animal){
    case "gato": {
        console.log("miau");
        break;
    }
    case "cachorro": {
        console.log("au au");
        break;
    }
    case "vaca": {
        console.log("muuu");
        break;
    }
    default: {
        console.log("animal não identificado");
        break;
    }
}
