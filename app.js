let num = 37; // number
let firstName = 'Ildar'; // string //Стиль написания переменной "camelCase"
let lastName = 'Salikhzyanov';
// const isProgrammer = true; // boolean
num = 25;
firstName = 'Ilgizar';
/*
Многострочный
комментарий
*/
/*
Can Do
let carrot = 'test1';
let $ = 'test2';
let $num = 40;
let num$ = 30;
let _ = 10;
let _num = 9;
let num_ = 8;
let num42 = 7;
let FirstName ='A' // Стиль написания переменной "PascalCase", так лучше не писать
let first_name = 'B'; // Плохая практика, так лучше не писать
*/
/*
Restricted
let 42num ='X' error (Нельзя!)
let first-name ='X' error (Нельзя!)
let false = 'X' // error (Нельзя! Зарезервированное слово в JS)
isProgrammer = false; // error (Нельзя! Мы не можем менять значение константы)
*/
/*
Способы вызвать значения:
alert (firstName)
console.log('Test:', firstName);
*/
/*
console.log(num + 10);
console.log(num - 10);
console.log(num * 10);
console.log(num / 10); //float
console.log(num);
*/
/*
let num2 = num + 5;
console.log(num, num2);
num = num2 - num
num2 = num2 + 5
console.log(num, num2)
*/
/*
const fullName = firstName + ' ' + lastName;
console.log(fullName);
const fullName2 = firstName + '\n' + lastName;
console.log(fullName2);
*/

const resultElement = document.getElementById('result');
const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
// const sum = input1.value + input2.value;
// const sum = Number(input1.value) + Number(input2.value);
const submitBtn = document.getElementById('submit');
const plusBtn = document.getElementById('plus');
const minusBtn = document.getElementById('minus');
const multiplyBtn = document.getElementById('multiply');
const divideBtn = document.getElementById('divide');
// let answer
let action = '+'

console.log(resultElement.textContent);
// resultElement.textContent = 42;
console.log(input1.value);
console.log(input2.value);
// resultElement.textContent = sum;
// console.log(typeof sum);

// plusBtn.onclick = function() {
//     const sum = Number(input1.value) + Number(input2.value);
//     answer = sum;
//     // resultElement.textContent = sum;
// }

// minusBtn.onclick = function() {
//     const difference = Number(input1.value) - Number(input2.value);
//     answer = difference;
//     // resultElement.textContent = difference;
// }

// submitBtn.onclick = function() {
//     // console.log('Hello Click!');
//     resultElement.textContent = answer;
// }

plusBtn.onclick = function() {
    action = '+'
}

minusBtn.onclick = function() {
    action = '-'
}

multiplyBtn.onclick = function() {
    action = '*'
}
divideBtn.onclick = function() {
    action = '/'
}

function printResult(result) {
    if(result < 0) {
    // resultElement.style.backgroundColor
    resultElement.style.color = 'red'
    } else {
    resultElement.style.color = 'green'
    }
    resultElement.textContent = result;
}

function computeNumbersWithAction(inp1, inp2, actionSymbol) {
    const num1 = Number(inp1.value);
    const num2 = Number(inp2.value);

    /* return action == '+' ? num1 + num2 : num1 - num2 // Тернарный оператор,
    может выполняться, когда всего два условия, но здесь четыре условия */

    if(actionSymbol === '+') {
        return num1 + num2
    } else if(actionSymbol === '-') {
        return num1 - num2
    } else if(actionSymbol === '*') {
        return num1 * num2
    } else {
        return num1 / num2
    }
}

// submitBtn.onclick = function() {

//     if(action == '+') {
//         const sum = Number(input1.value) + Number(input2.value);
//         resultElement.textContent = sum;
//     }
//     if(action == '-') {
//         const sum = Number(input1.value) - Number(input2.value);
//         resultElement.textContent = sum;
//     }
// }

// submitBtn.onclick = function() {

//     if(action == '+') {
//         const sum = Number(input1.value) + Number(input2.value);
//         resultElement.textContent = sum;
//     } else if(action == '-') {
//         const sum = Number(input1.value) - Number(input2.value);
//         resultElement.textContent = sum;
//     }
// }

// submitBtn.onclick = function() {

//     if(action == '+') {
//         const sum = Number(input1.value) + Number(input2.value);
//         printResult(sum);
//     } else {
//         const sum = Number(input1.value) - Number(input2.value);
//         printResult(sum);
//     }
// }

submitBtn.onclick = function() {
    const sum = computeNumbersWithAction(input1, input2, action);
    printResult(sum);
}

