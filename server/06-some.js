/* const numbers = [1, 2, 3, 5]

let respuesta = false
for (let i=0; i < numbers.length; i++){
    const element = numbers[i]
    if (element % 2 === 0) {
        respuesta = true
        break
    }
}

console.log(respuesta) // true */
/* 
const numbers = [1, 2, 3, 5]
const valida=numbers.some((item)=>item%2==0)

console.log(valida);
 */
/* 
const orders = [
    {
      customerName: "Nicolas",
      total: 60,
      delivered: true,
    },
    {
        customerName: "Nicolas",
        total: 123123123,
        delivered: true,
      },
    {
      customerName: "Zulema",
      total: 120,
      delivered: false,
    },
    {
      customerName: "Santiago",
      total: 180,
      delivered: true,
    },
    {
      customerName: "Valentina",
      total: 240,
      delivered: true,
    },
  ]

  const valida=orders.some((item)=>item.delivered)
  console.log(valida); */


  const dates = [
    {
      startDate: new Date(2021, 1, 1, 10),
      endDate: new Date(2021, 1, 1, 11),
      title: "Cita de trabajo",
    },
    {
      startDate: new Date(2021, 1, 1, 15),
      endDate: new Date(2021, 1, 1, 15, 30),
      title: "Cita con mi jefe",
    },
    {
      startDate: new Date(2021, 1, 1, 20),
      endDate: new Date(2021, 1, 1, 21),
      title: "Cena",
    },
  ];

  const newAppointment = {
    startDate: new Date (2021,1,1,20),
    endDate: new Date (2021,1,1,21,30),
};


const areIntervalsOverlapping = require('date-fns/areIntervalsOverlapping')

const isOverLap=(newDate)=>{
    return dates.some(date =>{
        return areIntervalsOverlapping({
            start:date.startDate,end:date.endDate
        }, 
        { 
            start:newDate.startDate,end:newDate.endDate 
        })
    })
}
console.log(isOverLap(newAppointment));