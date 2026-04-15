// Booleans do javascript - 23

const isOpen = true;

if (isOpen){
    console.log("A porta está aberta!")
}

// Truthy e Falsy

// Truthy
// 12 1 4 -5 82 -44
// "Breno" "A" 'Juliano' `Cristiano`
// true
// { } { name: "Breno" } { idade: 22 }
// () => {}

// Falsy
// 0 -0 NaN
// "" '' ``
// false
// null undefined

let result = 10;

if (result){
    console.log("Resultado é truthy")
} else {
    console.log("Resultado é falsy")
}

console.log(Boolean(0))
