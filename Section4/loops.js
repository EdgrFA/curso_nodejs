const fruits = ["apple", "melon", "mango"];

for (let index = 0; index < fruits.length; index++) {
    const element = fruits[index];   
}

for (const fruit of fruits) {
    console.log(fruit);
}

fruits.forEach(fruit => {
    console.log(fruit);
});