// ==================== Operators

let a = 10;
let b = 5;
let c = 32;

c = c + a;
c = c - a;
c = c * a;
c = c / a;

c += a;
c -= a;
c *= a;
c /= a;

c = c ** 2 // возведение в степень

console.log(c)

// ==================== Data Types

const age = 29; // number
const name = 'Ildar'; // string
const isProgrammer = true; // boolean
let x; // undefined
console.log(typeof null); // object - это косяк внутренней механики JS, это неправильное значение
console.log(typeof function() {}); // function
console.log(1 / x); // NaN - Not a Number ("Не число")
console.log(typeof (1 / x)); // Number
console.log(typeof NaN); // Number

// ==================== Priority

const fullAge = 31;
const birthYear = 1993;
const currentYear = 2025;

// > < >= <=

const isFullAge = currentYear - birthYear >= fullAge;
console.log(isFullAge);
    
    const num1 = 42;
    const num2 = '42';

    console.log(num1 == num2);
    
    console.log(num1 === num2);
    