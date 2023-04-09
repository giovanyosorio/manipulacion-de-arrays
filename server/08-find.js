/* const numbers = [1, 30, 41, 29, 50, 60]

let respuesta = undefined
for (let i=0; i < numbers.length; i++){
    const element = numbers[i]
    if (element >= 40) {
        respuesta = element
        break
    }
}

console.log(respuesta) // 41 */


const numbers = [1, 30, 41, 29, 50, 60]

let respuesta = numbers.find((item)=>item>=50)
console.log(respuesta);



const products = [
  {
    name: "Pizza",
    price: 12,
    id: '🍕'
  },
  {
    name: "Burger",
    price: 23,
    id: '🍔'
  },
  {
    name: "Hot dog",
    price: 34,
    id: '🌭'
  },
  {
    name: "Hot cakes",
    price: 355,
    id: '🥞'
  },
];


let findByid=products.find((item)=>item.id==="🥞")
console.log(findByid);

let findByindex=products.findIndex((item)=>item.id==="🥞")
console.log(findByindex);




