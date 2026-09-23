function findSmallest(arr) {
    let smallest = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i];
        }
    }
    return smallest;
}
console.log(findSmallest([30, 45, 60, 7]));
////////
function AlphabeticalOrder(str) {
    return str.split("").sort().join("");
}
console.log(AlphabeticalOrder("hello"));
////////
function factorial(n) {
    let result = 1;

    for (let i = 1; i <= n; i++) {
        result = result * i;
    }
    return result;
}
console.log(factorial(8));
//////////
function oddOrEven(number) {
    if (number % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}
console.log(oddOrEven(9));
///////////
function addUp(number) {
    let sum = 0;

    for (let i = number; i >= 0; i--) {
        sum = sum + i;
    }

    return sum;
}
console.log(addUp(8));
////////////
function minMaxLengthAverage(arr) {
    let min = arr[0];
    let max = arr[0];
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] < min) {
            min = arr[i];
        }

        if (arr[i] > max) {
            max = arr[i];
        }

        sum = sum + arr[i];
    }

    let average = sum / arr.length;

    return [min, max, arr.length, average];
}
console.log(minMaxLengthAverage([7, 13, 3, 77, 100]));
///////////
function countWords(str) {
    let words = str.split(" ");
    return words.length;
}
console.log(countWords("hello from CodingAcademy!"));
///////////
function MultiplyByLength(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i] * arr.length);
    }

    return result;
}
console.log(MultiplyByLength([4, 2, 5]));
///////////
function checkEnding(str1, str2) {
    return str1.endsWith(str2);
}
console.log(checkEnding("CodingSchool", "Ac"));
console.log(checkEnding("CodingSchool", "ol"));
/////////
function doubleChar(str) {
    let result = "";

    for (let i = 0; i < str.length; i++) {
        result = result + str[i] + str[i];
    }

    return result;
}
console.log(doubleChar("Coding"));
//////////
function findIndex(arr, element) {
    return arr.indexOf(element)+1;
}
console.log(findIndex(['Ali', 'Mazen', 'Ayham', 'Murad'], 'Ali'));