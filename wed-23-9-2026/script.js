const person = {
    name: "Adam",
    age: 25,
    gender: "male"
};
console.log(person.name, person.age, person.gender);
//////////////
const person2= {
    name: "Adam",
    age: 25
};

person2.gender = "male";

console.log(person2);
/////////////
const person3 = {
    name: "Adam",
    age: 25
};
console.log(person3.name);
///////////////////
const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function(number) {
    console.log(number);
});
//////////////
const fruits = ["apple", "banana", "cherry"];

fruits.sort();
console.log(fruits);
//////////////////
const fruits2 = ["apple", "banana", "cherry"];

fruits2.reverse();
console.log(fruits2);
//////////////////
const numbers1 = [1, 2, 3];
const numbers2 = [4, 5, 6];

const result = numbers1.concat(numbers2);
console.log(result);
////////////////////////

const numbers4 = [1, 2, 3, 4, 5, 6];

const result2 = numbers4.slice(2, 4);

console.log(result2);

/////////////////
const numbers5 = [1, 2, 3, 4, 5];

numbers5.splice(3, 1);

console.log(numbers5);
//////////////
const numbers6 = [1, 2, 3, 4, 5];

console.log(numbers6.indexOf(1));
console.log(numbers6.indexOf(2));
console.log(numbers6.indexOf(3));
console.log(numbers6.indexOf(4));
console.log(numbers6.indexOf(5));
/////////////////
const numbers7 = [1, 2, 3, 4, 5];

const result3= numbers7.join(",");

console.log(result3);
/////////////////
const number8 = "1,2,3,4,5";

const result4 = numbers.split(",");

console.log(result4.length);
////////////////
const numbers9 = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers9.length; i++) {
    console.log(numbers9[i]);
}
//////////////
const numbers10 = [1, 2, 3, 4, 5];

for (const number of numbers10) {
    console.log(number);
}
////////////////////
const numbers11 = [1, 2, 3, 4, 5];

console.log(Array.isArray(numbers11));