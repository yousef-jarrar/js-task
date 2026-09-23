let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}
//////
let numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}
///////
 for(let i=0;i<=10; i++){
     if (i % 2 === 0) {
        console.log(i);
    }
}
///////
let sum = 0;

for (let i = 1; i <= 10; i++) {
    sum = sum + i;
}
console.log(sum);
/////////////
let numbers1 = [1, 2, 3, 4, 5];

let largest = numbers1[0];

for (let i = 1; i < numbers1.length; i++) {
    if (numbers1[i] > largest) {
        largest = numbers1[i];
    }
}
console.log(largest);
/////////////
let numbers2 = [1, 2, 3, 4, 5];
let sum1 = 0;

for (let i = 0; i < numbers2.length; i++) {
    sum1 = sum1+ numbers2[i];
}
let average = sum1 / numbers2.length;
console.log(average);
/////////
let number = 5;
let factorial = 1;

for (let i = 1; i <= number; i++) {
    factorial = factorial * i;
}

console.log(factorial);
///////////
let number3 = 10;

let a = 0;
let b = 1;

for (let i = 0; i < number3; i++) {

    if (a > number3) {
        break;
    }
    console.log(a);

    let next = a + b;

    a = b;
    b = next;
}
////////////
let number4 = 20;

for (let i = 2; i <= number4; i++) {

    let isPrime = true;

    for (let j = 2; j < i; j++) {

        if (i % j === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(i);
    }
}
////////////
let numbers5 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

for (let i = 0; i < numbers5.length; i++) {

    for (let j = 0; j < numbers5[i].length; j++) {

        console.log(numbers5[i][j]);
    }
}
//////////////
let numbers6= [1, 2, 3, 4, 5];

for (let i = numbers6.length - 1; i >= 0; i--) {
    console.log(numbers6[i]);
}
/////////////
let numbers7 = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers7.length; i += 2) {
    console.log(numbers[i]);
}
//////////

let numbers8 = [1, 2, 1, 3, 2, 1];

let target = 1;

let count = 0;

for (let i = 0; i < numbers8.length; i++) {

    if (numbers8[i] === target) {
        count++;
    }
}
console.log(count);
/////////////////////////////////////
const heros = [
    { name: 'Iron Man', power: 'Tech' },
    { name: 'Spider-Man', power: 'Spider abilities' },
    { name: 'Thor', power: 'Godly powers' },
    { name: 'Hulk', power: 'Super strength' }
];

const newHeros = heros.map((hero, index) => {
    return {
        hero: hero.name,
        power: hero.power,
        id: index
    };
});

console.log(newHeros);
///////////////////////////////////////
const inputWords = [
    "spray",
    "limit",
    "elite",
    "exuberant",
    "destruction",
    "present"
];

function filterWords(words) {
    return words.filter(function(word) {
        return word.length > 7;
    });
}

const newArray = filterWords(inputWords);

console.log(newArray);
//////////////////////////////////////////////
const numbers9 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sumSquaredDivisibleBy5 = numbers9.reduce(function(sum, number) {

    if (number % 5 === 0) {
        return sum + number * number;
    }

    return sum;

}, 0);

console.log(sumSquaredDivisibleBy5);