//Tipos de objetos

Object //Padre de los objetos
String
Number
Boolean
Array
Set
Map
Function
Symbol
undefined
null

//Variables
var name = "Garfield";
let age = 23;
const PI = 3.14444
const greet = function(){};

//Crear objetos
const person = {
    name: 'Juan',
    lastname: 'Rodriguez',
    getFullName(){
        return this.name + " " + this.lastname;
    }
};

console.log(person.lastname); //dot notation
console.log(person['lastname']); //bracket notation
console.log(person.getFullName());

