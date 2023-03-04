// задача 1
let a1 = 36, b1 = 20;
console.log(`${a1} км/ч соответствует ${a1/3.6} м/c`)
console.log(`${b1} м/c соответствует ${b1*3.6} км/ч`)

// задача 2
let a2 = 10, b2 = 15, c2 = 7;
if(((a2+b2)>c2) && ((a2+c2)>b2) && ((b2+c2)>a2))
if (((a2+b2)>c2) && ((a2+c2)>b2) && (b2+c2)>a2)
{
    console.log(`треугольник существует`);
    console.log(`Периметр = ${a2+b2+c2}`);
    let p=(a2+b2+c2)/2;
    console.log(`Площадь = ${Math.sqrt(p*(p-a2)*(p-b2)*(p-c2))}`);
    console.log(`Соотношение = ${(a2+b2+c2)/Math.sqrt(p*(p-a2)*(p-b2)*(p-c2))}`);
}
else {
    console.log(`треугольник не существует`)
}

// задание 3
let num = prompt('Введите число', 100);
if (isNaN (num))
{
    alert('Вы ввели не число!')
}
for(let i=0; i<=num; i++)
{
    if (i % 5 === 0)
    {
        console.log(i + (" fizz buzz"))
    }
    else{
        console.log(i + ( i % 2 === 0 ? " buzz" : " fizz"))
    }
}

// задание 4
let str=''; let g;
for (let k=0; k<=11; k++)
{
    g=0;
    while (g<=k)
    {
        if (k % 2 === 0)
    {
        str += "*";
    }
    else {
        str += "#";
    }
    g++
    }
    str += "\n";
}
str += "||";
console.log(`${str}`);

// задание 5
const zch = 12
let numb = +prompt( "Угадайте число" )

if ( !parseInt(numb) ) 
{
    alert ('Вы ввели не число!') 
    numb = +prompt( "Угадайте число" )
} 
do 
{
    if (numb < zch)
    {
        console.log(`Ваше число меньше`);
        numb = +prompt( "Угадайте число" )
    } 
    else
    {
        console.log(`Ваше число больше`);
        numb = +prompt( "Угадайте число" )
    }
} while (numb != zch);
alert ( 'Число угадано' )

// задание 6
let n = prompt('Введите число n', 100);
let x = prompt('Введите число x', 100);
let y = prompt('Введите число y', 100);
if ((n > 0) && (x > 0) && (y > 0))
{
    if ((n % x === 0) && (n % y === 0))
    {
        console.log(`n = ${n}, x = ${x}, y = ${y} => true`);
    }
    else{
        console.log(`n = ${n}, x = ${x}, y = ${y} => false`);
    }
}
else {
    alert ('Вы ввели не положительное число отличное от нуля!') 
}

// задание 7
let j = prompt('Введите номер месяца', 100);
if ((j >0) & (j < 13))
{
    if ((j == 1) || (j == 2) || (j == 3))
    {
        console.log(`месяц ${j} => 1 квартал`);
    }
    if ((j == 4) || (j == 5) || (j == 6))
    {
        console.log(`месяц ${j} => 2 квартал`);
    }
    if ((j == 7) || (j == 8) || (j == 9))
    {
        console.log(`месяц ${j} => 3 квартал`);
    }
    if ((j == 10) || (j == 11) || (j == 12))
    {
        console.log(`месяц ${j} => 4 квартал`);
    }
}
else prompt('Вы ввели неподходящее число!', 100);

