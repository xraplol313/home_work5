// 1. Сделайте функцию, которая отнимает от первого числа второе и делит на
// третье. Числа передаются параметром.

function getSumm(a, b, c) {
    console.log((a - b) / c);
}

getSumm(10, 3, 4);


// 2. Сделайте функцию, которая возвращает куб числа и его квадрат. Число
// передается параметром.

function getDegree(num) {
    console.log(num * num * num);
}

getDegree(10)


// 3. Напишите функции min и max, которые возвращают меньшее и большее из
// чисел a и b.

function getMin(a, b) {
    if (a > b) {
        return console.log(` ${a} > ${b}`)
    }
}

getMin(4, 3)

function getMax(a, b) {
    if (a < b) {
        return console.log(` ${a} < ${b}`)
    }
}

getMax(4, 5)


// 4. Напишите две функции: первая ф-ция должна возвращать массив с
// числовыми значениями, диапазон которых должен вводиться пользователем
// с клавиатуры; вторая – выводить полученный массив.


let rangeArr = [];

function setRange() {
    let minRange = prompt('Введите минимальное значение');
    let maxRange = prompt('Введите максимальное значение');
    rangeArr.push(+minRange);
    rangeArr.push(+maxRange);

}

function outputResult() {
    setRange()
    return rangeArr
}

console.log(outputResult())


// 5.Сделайте функцию isEven() (even - это четный), которая параметром
// принимает целое число и проверяет: четное оно или нет. Если четное - пусть
// функция возвращает true, если нечетное — false.

function isEven(number) {
    if (number % 2 == 0) { //проверка на чётное число
        return true
    } else {
        return false
    }
}

console.log(isEven(3))


// 6. Напишите ф-цию, в которую передается массив с целыми числами.
// Верните новый массив, где останутся лежать только четные из этих чисел.
// Для этого используйте вспомогательную функцию isEven из предыдущей
// задачи.

function integer(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        let even = isEven(arr[i])
        if (even) {
            newArr.push(arr[i])
        }
    }
    return newArr;
}

console.log(integer([1, 3, 4, 6, 7, 8, 9]))

// 7. Напишите ф-цию, которая рисует следующую пирамидку (исп. вложенные
//     циклы):
//     1
//     22
//     333
//     4444
//     55555
//     666666
//     7777777
//     88888888
//     999999999
//     Кол-во рядов должно вводиться параметром. Если пользователь ввел доп.
//     параметр, непредусмотренный ф-цией по умолчанию - один любой символ,
//     кроме пробела, то пирамида должна быть нарисована этим символом,
//     например:

function drawTriangle() {
    let columnCount = +prompt('Введите количество строк');
    if (isNaN(columnCount)) { //проверка на не числовое значение
        columnCount = 9;
    }

    let additionalParameter = prompt('Введите доп параметр (Один символ!)');
    for (let i = 1; i <= columnCount; i++) {
        for (let j = 0; j < i; j++) { //сколько раз показать i 
            if (additionalParameter.length > 0 && additionalParameter.length < 2) { //проверка на количество введенных символов
                document.write(additionalParameter)
            } else {
                document.write(i)
            }
        }
        document.write('<br>');
    }
}
drawTriangle()






// 9. Напишите ф-цию, которая возвращает массив заполненный числами
// Фибоначи от 0 до 1000.

function getFibArray(n) {
    const arr = [];
    for (let i = 0; i < n; i++) {
        if (i === 0 || i === 1) arr[i] = 1;
        else arr[i] = arr[i - 1] + arr[i - 2]
    }
    return arr;
}

console.log(getFibArray(16))






// 10. Дано число. Сложите его цифры. Если сумма получилась более 9-ти,
// опять сложите его цифры. И так, пока сумма не станет однозначным числом
// (9 и менее). Исп. Рекурсию.

function calcSumm(num) {
    let summ = 0;
    let digitsArr = num.toString().split(''); // разбить строку в массив
    for (let i = 0; i < digitsArr.length; i++) {
        let digitToNum = +digitsArr[i];
        summ = summ + digitToNum;
    } 
    
    if (summ.toString().length > 1 ) {
        return calcSumm(summ)   //возвращаем функцию
    }
    
    return summ;
}
console.log(calcSumm(9999))


