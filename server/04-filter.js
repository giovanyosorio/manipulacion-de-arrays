const words = ["spray", "limit", "elite", "exuberant"];
const newArray=[]
words.forEach(element => {
    if (element.length>=6) {
        console.log(element);
        newArray.push(element)
    }
});

console.log(newArray," new array");
console.log(words," old array");

const rta=newArray.filter((element)=>element.length>=6)
console.log("rta",rta);
console.log(words," old array2");


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

  const newfilter=orders.filter((element)=>element.delivered==true && element.total >=100)

  console.log(newfilter);

  const search=(query)=>{
    return orders.filter((item)=>{
        return item.customerName.includes(query)
    })
  }

  
  console.log(search("Vale"));