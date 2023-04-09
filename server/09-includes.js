const pets = [ "cat", "dog", "bat" ]

let includeInArray = false
for (let i = 0; i < pets.length; i++){
    const item = pets[i]
    if (item === "cat"){
        includeInArray = true
        break
    }
}

console.log(includeInArray) // true


const rta=pets.includes("do")
console.log(rta);










//Utilizando strings
const saludo = "Hola mundo"

console.log(saludo.includes("Hola")) // true
saludo.includes("Mundo") // false
saludo.includes(" ") // true
saludo.includes("Hola", 1) // false
saludo.includes("mundo", -5) // true