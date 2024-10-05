console.log("Hello World");

// Short comment

/*
Long comment
*/


// Variables

var number = 3; // Declare and initialize a variable with a numeric value

let anotherNumber = 5; // Declare and initialize a variable with a numeric value

let age; // Declare a variable without initializing it with any value

const PI = 3.1416; // Declare and initialize a constant with a numeric value

// Constantes

const myObject = {
    name: "Juan",
    age: 25
};


/* Tipos de datos

-- Simple
    - Number
    - String
    - Boolean
    - Undefined
    - Null

-- Compuestos
    - Object
    - Array
    - Regular Expression
    - Function

*/

// Template strings

console.log(`Hola, mi nombre es ${myObject.name} y tengo ${myObject.age} años`);

console.log("Hola, mi nombre es " + myObject.name + " y tengo " + myObject.age + " años");

// String methods

let myString = "Hola Mundo";

console.log(myString.length);

let firstWord = myString.substring(0, myString.indexOf(" "));
console.log(firstWord);

let length = myString.length;

let lastWord = myString.substring(myString.lastIndexOf(" ") + 1, length);
console.log(lastWord);

console.log(myString.charAt(0));
console.log(myString.charCodeAt(0));


// Comparators: ==, ===, !=, !==, >, <, >=, <=
// The triple equals === compares both value and data type

// Boolean operators: &&, ||, !, 0 = false, 1 = true, empty chain = false

let colors = ["red", "blue", "green", "yellow"];

let matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

let mix = [1, "hello", true, [1, 2, 3]];


/*

++ Increment
-- Decrement

a++ Post-increment (first use the value and then increment)
++a Pre-increment (first increment and then use the value)

*/

let result = 0;

for (let i = 0; i < 10; i++) {
    result += i;
} // Add keys except for loop only has one line of code

console.log(result);

for (let i = 0; i < 10; i++)
    result += i; // Add keys except for loop only has one line of code
    console.log(result);


let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

for (let element of array) {
    console.log(element);
}

array.map((element) => {
    console.log(element);
});

array.filter(element => element % 2 === 0).map(element => console.log(element));

// Switch

let day = 3;

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
        break;
}

// Try and catch

try {
    let x = 1;
    let y = 0;
    console.log(x / y);
}
catch (error) {
    console.log("An error has occurred: " + error);
}


// Functions

function sayHello() {
    console.log("Hello");
}

sayHello();

function sayHelloTo(name) {
    console.log("Hello " + name);
}

sayHelloTo("Juan");

let num1 = 5;
let num2 = 3;

function suma1(a, b) {
    return a + b;
}

console.log(suma1(num1, num2));

// Para node y react

const suma2 = (a, b) => { return a + b; };

console.log(suma2(num1, num2));

const imprimirnumero = num => console.log(num);

imprimirnumero(5);

const serializedJSON = '{"name": "Juan", "age": 25}';
const deserializedJSON = JSON.parse(serializedJSON);

console.log(deserializedJSON);
console.log(serializedJSON);

console.log(deserializedJSON.name);
console.log(serializedJSON.name);

console.log(deserializedJSON);
console.log(deserializedJSON["name"]);


const json = {
    name: "Juan", // Clave: valor comillas dobles
    age: 25,
    isStudent: true,
    subjects: ["Math", "Physics", "Chemistry"],
    address: {
        street: "Calle 123",
        city: "Bogota",
        country: "Colombia"
    },
    sayHello: function () {
        console.log("Hello");
    },
    sayHelloTo: function (name) {
        console.log("Hello " + name);
    },
    sayHelloTo2: (name) => {
        console.log("Hello " + name);
    }
};

setTimeout(() => {
    console.log("Hello");
}
    , 3000);

setImmediate(() => {
    console.log("Hello");
});

setInterval(() => {
    console.log("Hello");
}), 1000;