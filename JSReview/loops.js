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

const people = [{ name: "Marluan"}, { name: "Ernesto"}];

for (const person in people) {
    console.log(people[person].name);
}