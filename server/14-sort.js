const months = ["March", "Jan", "Feb", "Dec"];
console.log(months.sort());
const numbers = [1, 30, 4, 21, 100000,10];
console.log(numbers.sort((a,b)=>b-a));
const words = [
    "réservé",
    "premier",
    "communiqué",
    "café",
    "adieu",
    "éclair",
    "banana",
];
console.log(words.sort());
const orders = [
    {
        customerName: "Nicolas",
        total: 600,
        delivered: true,
        date: new Date (2020, 3, 8, 4),
    },
    {
        customerName: "Zulema",
        total: 120,
        delivered: false,
        date: new Date (2023, 3, 8, 4),
    },
    {
        customerName: "Santiago",
        total: 1840,
        delivered: true,
        date: new Date (2022, 3, 8, 4),
    },
    {
        customerName: "Valentina",
        total: 240,
        delivered: true,
        date: new Date (1995, 3, 8, 4),
    },
];
console.log(orders.sort((a,b)=>new Date (a.date)- new Date(b.date)));