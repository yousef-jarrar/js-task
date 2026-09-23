console.log(1000/500);
console.log(1000-500);
console.log(1000+500);
console.log(1000*500);
console.log(7+9+2/3);
console.log(150-(0.3*150));

let x=20;
if(30>x>18){
    console.log("true");
}else{
    console.log("false");
}
console.log(2**3);
console.log(10%4);
//page 2
let str="welcome to orange"
console.log(str.toUpperCase());
console.log(str.slice(8,10).toUpperCase());
console.log(str.replace("welcome to","hello from"));
console.log(str.toLocaleLowerCase());
console.log(str.length);
console.log(str.replace("Orange", '"Orange"'));
console.log(str.concat("jordan"));
////2///
let str1 = "cactus";
let result = str1.slice(0, 2) + "*" + str1.slice(3);
console.log(result);

////array///
let arr = ["Coding", "Academy", "By", "Orange"];
arr.push("Jordan");
console.log(arr);
console.log(arr.slice(0, 2));
console.log(["Welcome", "To", ...arr]);
console.log(arr.slice(1));
console.log(arr.join(" "));
console.log(arr);
console.log([arr[0], arr[3]]);

////2 array///
var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];
vegetables.pop();
fruit.shift();
var index = fruit.indexOf("orange");
fruit.push(index);
console.log(vegetables);
console.log(fruit);
var length = vegetables.length;
vegetables.push(length);
var food = fruit.concat(vegetables);
food.splice(4, 2);
food.reverse();
food = food.join(",");
console.log(food);

//////if////

let age = 35;

if (age > 30) {
    console.log("You are not eligible. You may join other programs.");
}
let age1 = 25;

if (age1 >= 18 && age <= 30) {
    console.log("You are eligible. Start your application.");
}
let age3 = 15;

if (age3 < 18) {
    console.log("You may join the kids' program.");
}
let age4= 65;

if (age4 > 60) {
    console.log("You may join the seniors’ program.");
}
let birthYear = 2000;
let currentYear = new Date().getFullYear();

let age5= currentYear - birthYear;

console.log(age);
///////


function switchCase(str) {
    let result = "";

    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i].toUpperCase()) {
            result += str[i].toLowerCase();
        } else {
            result += str[i].toUpperCase();
        }
    }

    return result;
}
console.log(switchCase("OrAnGe"));
/////
function camelCase(str) {
    let words = str.split(" ");
    let result = "";

    for (let i = 0; i < words.length; i++) {
        result += words[i][0].toUpperCase() + words[i].slice(1);
    }

    return result;
}
console.log(camelCase("Coding Academy by Orange"));
/////
function removeElement(arr, element) {
    let index = arr.indexOf(element);

    if (index !== -1) {
        arr.splice(index, 1);
    }

    return arr;
}

console.log(removeElement(["Coding", "Academy", "By", "Orange"], "By"));
///
function checkNumber(num) {
    if (num % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

console.log(checkNumber(7));
//////
function checkNumber(input) {
    if (typeof input === "number") {
        return true;
    } else {
        return false;
    }
}

console.log(checkNumber(10));
//////
function largestNumber(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}

console.log(largestNumber(10, 7));
///////
function checkTriangle(a, b, c) {
    if (a === b && b === c) {
        return "Equilateral";
    } else if (a === b || a === c || b === c) {
        return "Isosceles";
    } else {
        return "Scalene";
    }
}

console.log(checkTriangle(5, 5, 5));
///////
function checkRange(num, start, end) {
    if (num >= start && num <= end) {
        return true;
    } else {
        return false;
    }
}

console.log(checkRange(5, 1, 10));
/////////
function isLeapYear(year) {
    if (year % 400 === 0) {
        return true;
    } else if (year % 100 === 0) {
        return false;
    } else if (year % 4 === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(isLeapYear(2024));
/////////looop
for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}
//
let i = 1;

while (i <= 50) {
    if (i % 2 === 0) {
        console.log(i);
    }
    i++;
}
/////
for (let i = 2; i <= 50; i += 2) {
    console.log(i);
}
///
// Even numbers
for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// Odd numbers
for (let i = 1; i <= 50; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}
/////
for (let i = 1; i <= 100; i++) {

    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } 
    else if (i % 3 === 0) {
        console.log("Fizz");
    } 
    else if (i % 5 === 0) {
        console.log("Buzz");
    } 
    else {
        console.log(i);
    }
}
///
function fizzBuzz(num) {
    if (num % 3 === 0 && num % 5 === 0) {
        console.log("FizzBuzz");
    } 
    else if (num % 3 === 0) {
        console.log("Fizz");
    } 
    else if (num % 5 === 0) {
        console.log("Buzz");
    } 
    else {
        console.log(num);
    }
}

for (let i = 1; i <= 100; i++) {
    fizzBuzz(i);
}
///
function fizzBuzz(num) {

    if (num > 100) {
        return;
    }

    if (num % 3 === 0 && num % 5 === 0) {
        console.log("FizzBuzz");
    }
    else if (num % 3 === 0) {
        console.log("Fizz");
    }
    else if (num % 5 === 0) {
        console.log("Buzz");
    }
    else {
        console.log(num);
    }

    fizzBuzz(num + 1);
}

fizzBuzz(1);
/////

function countCharacter(str, char) {
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i].toLowerCase() === char.toLowerCase()) {
            count++;
        }
    }

    return count;
}

console.log(countCharacter("Coding Academy by Orange", "o"));
/////
for (let i = 0; i <= 20; i++) {
    console.log(i);
}
//
for (let i = 3; i <= 29; i += 2) {
    console.log(i);
}
//
for (let i = 12; i >= -14; i -= 2) {
    console.log(i);
}
///
for (let i = 50; i >= 20; i--) {
    if (i % 5 === 0) {
        console.log(i);
    }
}
////
let str6 = "CodingAcademy";
let arr6 = [7, 500, "KH404", "black", 36];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

for (let i = str.length - 1; i >= 0; i--) {
    console.log(str[i]);
}


let numbers = [7, 23, 18, 9, -13, 38, -10, 12, 0, 124];

let evens = [];
let odds = [];

for (let i = 0; i < numbers.length; i++) {

    if (numbers[i] % 2 === 0) {
        evens.push(numbers[i]);
    } else {
        odds.push(numbers[i]);
    }

}

console.log(evens);
console.log(odds);
///////////////////////
let proteins = ['chicken', 'pork', 'tofu', 'beef', 'fish', 'beans'];

let grains = ['rice', 'pasta', 'corn', 'potato', 'quinoa', 'crackers'];

let vegetabless= ['peas', 'green beans', 'kale', 'edamame', 'broccoli', 'asparagus'];

let beverages = ['juice', 'milk', 'water', 'soy milk', 'soda', 'tea'];

let desserts = ['apple', 'banana', 'more kale', 'ice cream', 'chocolate', 'kiwi'];

let numberOfMeals = 5;
let meals = [];

for (let i = 0; i < numberOfMeals; i++) {

    let meal = [
        proteins[Math.floor(Math.random() * proteins.length)],
        grains[Math.floor(Math.random() * grains.length)],
        vegetabless[Math.floor(Math.random() * vegetables.length)],
        beverages[Math.floor(Math.random() * beverages.length)],
        desserts[Math.floor(Math.random() * desserts.length)]
    ];

    let mealString = meal.join(" - ");

    if (!meals.includes(mealString)) {
        meals.push(mealString);
    } else {
        i--;
    }
}

console.log(meals);
////////////object/////
function getProperties(obj) {
    return Object.keys(obj);
}

let person = {
    name: "Yousef",
    age: 22,
    city: "Amman"
};

console.log(getProperties(person));
///////////
function countProperties(obj) {
    return Object.keys(obj).length;
}

let person2 = {
    name: "Yousef",
    age: 22,
    city: "Amman"
};

console.log(countProperties(person));
/////
function mergeObjects(obj1, obj2) {
    return Object.assign({}, obj1, obj2);
}

let person3 = {
    name: "Yousef",
    age: 22
};

let address = {
    city: "Amman",
    country: "Jordan"
};

let result2 = mergeObjects(person, address);

console.log(result2);
//////////
function upperCaseObject(obj) {
    let newObjj = {};

    for (let key in obj) {
        newObjj[key] = obj[key].toUpperCase();
    }

    return newObjj;
}

let person4 = {
    name: "yousef",
    city: "amman"
};

console.log(upperCaseObject(person4));
///////////
function removeNullValues(obj) {
    let newObj = {};

    for (let key in obj) {
        if (obj[key] !== null) {
            newObj[key] = obj[key];
        }
    }

    return newObj;
}

let person5= {
    name: "Yousef",
    age: null,
    city: "Amman"
};

console.log(removeNullValues(person));
/////////
function sortProperties(obj) {
    let properties = Object.keys(obj);

    return properties.sort();
}

let perso7 = {
    name: "Yousef",
    age: 22,
    city: "Amman"
};

console.log(sortProperties(person));