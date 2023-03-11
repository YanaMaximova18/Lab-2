//------------------------1----------------------\\
/* function convertSpeed(){
    let num = prompt('Введите значение скорости', 200);
    let ed = prompt('Введите направление преобразования', 200);
    if(ed=='toMS')
    {
        console.log(`convertSpeed(${num}, ${ed}) -> ${num/3.6} м/с`);
    }
    else if(ed=='toKMH') {
        console.log(`convertSpeed(${num}, ${ed}) -> ${num*3.6} км/ч`);
    }
} */
let num = prompt('Введите значение скорости', 200);
let ed = prompt('Введите направление преобразования', 200);
function convertSpeed(num, ed){
    if(ed=='toMS')
    {
        return num/3.6;
    }
    else if(ed=='toKMH') {
        return num*3.6;
    }
}
console.log(`convertSpeed(${num}, ${ed}) -> ${convertSpeed(num, ed)}`);

//----------------------2------------------\\
/* function absValue(){
    let ch = prompt('Введите число');
    if (ch<0)
    {
        console.log(`absValue(${ch}) -> ${0-ch}`);
    }
    else console.log(`absValue(${ch}) -> ${ch}`);
}  */
let ch = prompt('Введите число');
function absValue(ch){
    if (ch<0)
    {
        return -ch;
    }
    else return ch;
} 
console.log(`absValue(${ch}) -> ${absValue(ch)}`);

//--------------------------3------------------------\\
let student = {
    group: 201,
    last_name: "Иванов",
    first_name: "Иван"
    };
const objKeys = Object.keys(student);
console.log(`Список свойств: ${objKeys.join(", ")}`);
//console.log(`Список свойств: ${Object.keys(student)[0]}, ${Object.keys(student)[1]}, ${Object.keys(student)[2]}`);
console.log(`Студент ${student.first_name} ${student.last_name} учится в ${student.group} группе`);

//-----------------------4-------------------------------\\

/* function randomNumber(){
    let min =+ prompt('Введите минимальное значение', 0);
    let max =+ prompt('Введите максимальное значение', 200);
    let rand = Math.trunc(Math.random() * (max - min) + min);
    console.log(rand);
} */

function randomNumber(min, max){
    let rand = Math.trunc(Math.random() * (max - min) + min);
    console.log(rand);
    return rand;
}

//------------------------5----------------------------------\\
/* function sampleArray(){
    let arr = [1,2,3,4,5];
    let col = prompt('Введите количество возвращаемых значений');
    console.log(rand = arr[Math.floor(Math.random() * arr.length)]);
} */
let arr = [1,2,3,4,5];
let col = randomNumber(1, 5);
function sampleArray(arr, col){
    let arr1 = [];
    let i = 0;
    while( i!= col)
    {
        randar = (randomNumber(0, arr.length-1)); 
        arr1.push(arr[randar]);
        i++;
    }
    console.log(`sampleArray([${arr}], ${col}) -> [${arr1}]`);
    return sampleArray [arr1];
}

//convertSpeed(num, ed);
//randomNumber(min =+prompt('Введите минимальное значение', 0), max =+ prompt('Введите максимальное значение', 200));
//absValue(ch);
sampleArray(arr, col);