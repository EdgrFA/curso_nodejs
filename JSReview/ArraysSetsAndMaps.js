const fruits = ["apple", "melon", "mango", function(){console.log("hola");}];

console.log(fruits[3]());

//Sin repeticiones
const numbers = new Set();
numbers.add(1);
numbers.add(2);
numbers.add(3);
numbers.add(1);

console.log(numbers);
//Set { 1 , 2 , 3 }

const students = new Map();
students.set("one", "Marluan");

console.log(students.get("one"));