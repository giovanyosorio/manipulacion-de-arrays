const numbers = [1, 30, 41, 29, 10, 13]

const respuesta=numbers.every((item)=>item<=40)


console.log(respuesta) // false

const team = [
    {
      name: "Nicolas",
      age: 20,
    },
    {
      name: "Andrea",
      age: 18,
    },
    {
      name: "Zulema",
      age: 22,
    },
    {
      name: "Santiago",
      age: 18,
    },
  ];

  const allMAyores=team.map((item=>item.age)).every((item)=>item>=18)
  console.log(allMAyores);