const products = [
    { title: 'Pizza', price: 121, id: '🍕' },
    { title: 'Burger', price: 121, id: '🍔' },
    { title: 'Hot cakes', price: 121, id: '🥞' },
];

const myProducts = [];

console.log("products", products);
console.log("myProducts", myProducts);
console.log("-".repeat(10));

const productIndex=products.findIndex((item)=>item.id==='🍔')

if (productIndex!==-1) {
    myProducts.push(products[productIndex])
    products.splice(productIndex,1)
}

const newProducts = products.filter(item => item.id !== '🍕');

console.log(newProducts);

console.log("products", products);
console.log("myProducts", myProducts);
console.log("-".repeat(10));


//update

const products2 = [
    { title: 'Pizza', price: 121, id: '🍕' },
    { title: 'Burger', price: 121, id: '🍔' },
    { title: 'Hot cakes', price: 121, id: '🥞' },
];

const update={
    id:'🥞',
    changes:{
        price:200,
        description:"delicious"
    }
}

/* const productIndexx=products2.findIndex((item)=>item.id===update.id)
products2[productIndexx]={
    ...products2[productIndexx],
    ...update.changes
}
console.log(products2); */

const newArray2 = products2.map(item => {
    if(item.id === update.id){
        return {
            ...item,
            ...update.changes
        }
    }else{
        return {
            ...item
        }
    }
});
console.log(newArray2);
console.log(products2);