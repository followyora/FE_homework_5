/* ========= 1 Task =============


let userNumber = prompt("Введите число:");


let number = parseFloat(userNumber);


if (!isNaN(number)) {
    
    let tenPercent = number * 0.1;

   
    console.log("10% от вашего числа:", tenPercent);
} else {
    console.log("Ввели некорректное число.");
}

*****************************************

=========== 2 Task ================


let firstNumber = prompt("Введите первое число:");


let secondNumber = prompt("Введите второе число:");


let number1 = parseFloat(firstNumber);

let number2 = parseFloat(secondNumber);

if (!isNaN(number1) && !isNaN(number2)) {
    
    if (number1 < number2) {
        console.log("Наименьшее число:", number1);  
    } else if (number2 < number1) {
        console.log("Наименьшее число:", number2);
    } else {
        console.log("Числа равны.");
    }
} else {
    console.log("Вы ввели некорректные числа.");
}

**************************************


=========== 3 Task  ==============



let inputNumber = prompt("Введите число:");

let number = parseFloat(inputNumber);

if (!isNaN(number)) {
    
    if (number < 100) {
        console.log("Число меньше 100");
    } else if (number > 100) {
        console.log("Число больше 100");
    } else {
        console.log("Число равно 100");
    }
} else {
    console.log("Ввели некорректное число.");
}

*************************

=========== 4 Task ===============

let userName = prompt("Введите ваше имя:");

let userAge = prompt("Введите ваш возраст:");



let age = parseInt(userAge);



if (!isNaN(age)) {
    // Проверяем, является ли пользователь совершеннолетним
    if (age >= 18) {
        console.log("Hello, " + userName);
    } else {
        console.log("Hi, " + userName);
    }
} else {
    console.log("Ввели некорректный возраст.");
}
*/
