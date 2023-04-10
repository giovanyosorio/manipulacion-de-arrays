const elements = ["hola", null, "como", "estas"]

console.log(elements.join("-"));
/* let acumulator = ""
const separator = "/"
for (let i = 0; i<elements.length; i++){
  const element = elements[i] ?? ""
  if(i !== elements.length-1){
    acumulator += element + separator
  }else{
    acumulator += element
  }
}

console.log(acumulator) // 'hola//como/estas' */

const titulo= "manipulacion de arrays"
console.log(titulo.split(" ").join("-"))