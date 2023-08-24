/* ========= 1 Task =============


var userNumber = prompt("Введите число:");


var number = parseFloat(userNumber);


if (!isNaN(number)) {
    
    var tenPercent = number * 0.1;

   
    console.log("10% от вашего числа:", tenPercent);
} else {
    console.log("Ввели некорректное число.");
}

*****************************************

=========== 2 Task ================


var firstNumber = prompt("Введите первое число:");


var secondNumber = prompt("Введите второе число:");


var number1 = parseFloat(firstNumber);

var number2 = parseFloat(secondNumber);

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



var inputNumber = prompt("Введите число:");

var number = parseFloat(inputNumber);

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

var userName = prompt("Введите ваше имя:");

var userAge = prompt("Введите ваш возраст:");



var age = parseInt(userAge);



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
