//Q4. You are working for an e-commerce client, and they provide you with an array of objects containing product 
//names and their prices. Your task is to create a function that finds the product with the maximum amount 
//(the highest price) and the product with the minimum amount (the lowest price) and prints them to the 
//console.

const products = [
    { name: "Laptop", price: 120000 },
    { name: "Mobile", price: 70000 },
    { name: "Laptop Bag", price: 20000 },
    { name: "Watch", price: 20000 },
    { name: "Mobile Charger", price: 1500 }
]
let maxproduct = { name: "", price: 0 }
let minproduct = { name: "", price: Number.MAX_VALUE }


for (let val of products) {
    if (val.price > maxproduct.price) {
        maxproduct = val;

    }
    if (val.price < minproduct.price) {
        minproduct = val;

    }


}
console.log(`The product with maximum ammount is ${maxproduct.name} which is priced at Rs. ${maxproduct.price}`);
console.log(`The product with minimum ammount is ${minproduct.name} which is priced at Rs. ${minproduct.price}`);

