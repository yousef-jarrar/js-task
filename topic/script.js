console.log(name);

var name = "Jone";
function test() {
 var x = 10;
 if (true) {
 var y = 20;
 }
 console.log(y);
}
test();
// console.log(x);
// 1----- un drfine
//   20

////// 2 Therefore,
//  console.log(name) prints undefined because the variable exists,
//  but its value has not been assigned yet.

/// 3 In short: var has function scope, while let and const have block scope.
//// 4
let nam= "Jone";
console.log( nam);
function test() {
    let x = 10;

    if (true) {
        let y = 20;
        console.log(y);
    }
}
test();
//////////////////////////////////////////////////2

function Person(name, age) {
    this.name = name;
    this.age = age;
}
//////
Person.prototype.greet = function () {
    console.log("Hello, my name is " + this.name + " and I am " + this.age + " years old.");
};
/////////
function Employee(name, age, employeeId, position) {
    // Inherit Person properties
    Person.call(this, name, age);

    this.employeeId = employeeId;
    this.position = position;
}////
Employee.prototype = Object.create(Person.prototype);
/////
Employee.prototype.constructor = Employee;
////////
Employee.prototype.greet = function () {
    console.log(
        "Hello, my name is " +
        this.name +
        ". I am an employee with ID " +
        this.employeeId +
        " and I work as a " +
        this.position +
        "."
    );
};
//////////
var employee1 = new Employee("Yousef", 22, 101, "Cybersecurity Analyst");
var employee2 = new Employee("Ahmad", 25, 102, "Web Developer");
var employee3 = new Employee("Omar", 28, 103, "Network Engineer");
////
employee1.greet();
employee2.greet();
employee3.greet();
///
console.log(employee1.name);
console.log(employee1.age);
console.log(employee1.employeeId);
console.log(employee1.position);

//////////////////////////////////////3

let students1 = ["Yousef", "Ahmad","Ali", "Khaled", "Mohammad", "Sara", "Lina",
    "Nour", "Rana", "Huda", "Dana", "Leen", "Maya", "Adam",
     "Zaid", "Sami", "Tariq", "Fadi", "Rami", "Hassan",
      "Alaa", "Salma", "Dina", "Layla"
];

let students2 = [ 
    "Yousef", "Ahmad","Ali", "Khaled", "Mohammad", "Sara", "Lina",
    "Nour", "Rana", "Huda", "Dana", "Leen", "Maya", "Adam",
     "Zaid", "Sami", "Tariq", "Fadi", "Rami", "Hassan",
      "Alaa", "Salma", "Dina", "Layla"
];
let allStudents = students1.concat(students2);

console.log("All Students:");
console.log(allStudents);

let sortedStudents = allStudents.sort();

console.log("Sorted Students:");
console.log(sortedStudents);

let reversedStudents = sortedStudents.reverse();

console.log("Reversed Students:");
console.log(reversedStudents);

let studentExists = allStudents.includes("Yousef");

console.log("Does Yousef exist?");
console.log(studentExists);

allStudents.forEach(function(student, index) {
    console.log(index + ": " + student);
});
//////////////4

let students = [
    { id: 1, name: "Yousef", grade: 85 },
    { id: 2, name: "Ahmad", grade: 78 },
    { id: 3, name: "Omar", grade: 92 },
    { id: 4, name: "Ali", grade: 67 },
    { id: 5, name: "Khaled", grade: 88 },
    { id: 6, name: "Mohammad", grade: 74 },
    { id: 7, name: "Sara", grade: 95 },
    { id: 8, name: "Lina", grade: 81 },
    { id: 9, name: "Nour", grade: 90 },
    { id: 10, name: "Rana", grade: 76 },
    { id: 11, name: "Huda", grade: 84 },
    { id: 12, name: "Dana", grade: 91 },
    { id: 13, name: "Leen", grade: 79 },
    { id: 14, name: "Maya", grade: 87 },
    { id: 15, name: "Adam", grade: 73 },
    { id: 16, name: "Zaid", grade: 89 },
    { id: 17, name: "Sami", grade: 68 },
    { id: 18, name: "Tariq", grade: 82 },
    { id: 19, name: "Fadi", grade: 94 },
    { id: 20, name: "Rami", grade: 71 },
    { id: 21, name: "Hassan", grade: 86 },
    { id: 22, name: "Alaa", grade: 77 },
    { id: 23, name: "Salma", grade: 93 },
    { id: 24, name: "Dina", grade: 80 },
    { id: 25, name: "Layla", grade: 75 },
    
];
students.splice(5, 0, {
    id: 51,
    name: "Kareem",
    grade: 89
});
students.splice(10, 1);

students.splice(15, 1, {
    id: 52,
    name: "Salah",
    grade: 98
});

let studentsCopy = students.slice(0, 10);

console.log("Copy of first 10 students:");
console.log(studentsCopy);

students.sort(function(a, b) {
    return b.grade - a.grade;
});

console.log("Final Student List:");

students.forEach(function(student) {
    console.log(
        "ID: " + student.id +
        " | Name: " + student.name +
        " | Grade: " + student.grade
    );
});
/////////////////////////5
let product = {
    id: 101,
    name: "Laptop",
    price: 750,
    category: "Electronics",
    available: true
};

let jsonString = JSON.stringify(product);

console.log("JSON String:");
console.log(jsonString);

let convertedProduct = JSON.parse(jsonString);

console.log("Converted Object:");
console.log(convertedProduct);

console.log("Original Object:");
console.log(product);

try {
    let invalidJSON = '{"id":101, "name":"Laptop",}';

    let result = JSON.parse(invalidJSON);

    console.log(result);
} catch (error) {
    console.log("Invalid JSON");
}
/////////////////////6

let inventory1 = [
    {
        id: 1,
        name: "Laptop",
        price: 750,
        category: "Electronics",
        quantity: 10
    },
    {
        id: 2,
        name: "Mouse",
        price: 25,
        category: "Accessories",
        quantity: 30
    },
    {
        id: 3,
        name: "Keyboard",
        price: 45,
        category: "Accessories",
        quantity: 20
    },
    {
        id: 4,
        name: "Monitor",
        price: 300,
        category: "Electronics",
        quantity: 15
    },
    {
        id: 5,
        name: "Headphones",
        price: 80,
        category: "Audio",
        quantity: 25
    },
    {
        id: 6,
        name: "Webcam",
        price: 60,
        category: "Electronics",
        quantity: 12
    }
];

let inventory2 = [
    {
        id: 7,
        name: "Printer",
        price: 200,
        category: "Office",
        quantity: 8
    },
    {
        id: 8,
        name: "Tablet",
        price: 400,
        category: "Electronics",
        quantity: 7
    },
    {
        id: 9,
        name: "USB Cable",
        price: 15,
        category: "Accessories",
        quantity: 50
    },
    {
        id: 10,
        name: "Speaker",
        price: 120,
        category: "Audio",
        quantity: 18
    },
    {
        id: 11,
        name: "Desk",
        price: 150,
        category: "Office",
        quantity: 5
    }
];

let inventory = inventory1.concat(inventory2);

console.log("Complete Inventory:");
console.log(inventory);

let availableCategories = [
    "Electronics",
    "Accessories",
    "Audio",
    "Office"
];

console.log(
    "Is Electronics available?",
    availableCategories.includes("Electronics")
);

console.log(
    "Is Clothing available?",
    availableCategories.includes("Clothing")
);

let removedProduct = inventory.splice(2, 1);

console.log("Removed Product:");
console.log(removedProduct);

inventory.sort(function(a, b) {
    return a.price - b.price;
});

console.log("Products sorted by price:");
console.log(inventory);

let firstFiveProducts = inventory.slice(0, 5);
console.log("First Five Products:");
console.log(firstFiveProducts);

////////////////7
const square = (number) => number * number;

console.log(square(5)); // 25

const isEven = (number) => number % 2 === 0;

console.log(isEven(10)); // true
console.log(isEven(7));  // false

const products = [
    { name: "Laptop", price: 750 },
    { name: "Mouse", price: 25 },
    { name: "Keyboard", price: 45 },
    { name: "Monitor", price: 300 },
    { name: "Headphones", price: 80 }
];

const prices = products.map((product) => product.price);

console.log(prices);

const expensiveProducts = products.filter(
    (product) => product.price > 100
);

console.log(expensiveProducts);

const totalPrice = products.reduce(
    (total, product) => total + product.price,
    0
);

console.log("Total Price:", totalPrice);

////////////////8

const user = {
    name: "Yousef",
    email: "yousef@example.com",
    age: 22,
    address: "Amman, Jordan"
};

const {
    namee,
    email,
    age,
    address: userAddress
} = user;

console.log(namee);
console.log(email);
console.log(age);
console.log(userAddress);

const skills = [
    "JavaScript",
    "HTML",
    "CSS",
    "Cybersecurity"
];

const [skill1, skill2, skill3, skill4] = skills;

console.log(skill1);
console.log(skill2);
console.log(skill3);
console.log(skill4);

function createUser(
    name = "Unknown",
    email = "No email",
    age = 18
) {
    return {
        name: name,
        email: email,
        age: age
    };
}

const user1 = createUser(
    "Yousef",
    "yousef@example.com",
    22
);

console.log(user1);

const user2 = createUser(
    "Ahmad",
    "ahmad@example.com"
);

console.log(user2);

/////////////////////10

const studentss = [
            {
                id: 1,
                name: "Yousef",
                grade: 85
            },
            {
                id: 2,
                name: "Ahmad",
                grade: 72
            },
            {
                id: 3,
                name: "Omar",
                grade: 45
            },
            {
                id: 4,
                name: "Sara",
                grade: 91
            },
            {
                id: 5,
                name: "Lina",
                grade: 58
            }
        ];

        const reportsContainer = document.getElementById("reports");

        students.forEach(function(student) {

            const status = student.grade >= 50 ? "Pass" : "Fail";

            const report = `
                <div class="student-report">
                    <h2>Student Report</h2>
                    <p>Name: ${student.name}</p>
                    <p>ID: ${student.id}</p>
                    <p>Grade: ${student.grade}</p>
                    <p>Status: ${status}</p>
                </div>
            `;

            reportsContainer.innerHTML += report;

        });

        //////////////////////////// 11
        class Persons {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    getInfo() {
        return `Name: ${this.name}, Email: ${this.email}`;
    }
}

class Student extends Persons {
    constructor(name, email, studentId, major) {
        super(name, email);
        this.studentId = studentId;
        this.major = major;
    }

    getInfo() {
        return `Student: ${this.name}, Email: ${this.email}, ID: ${this.studentId}, Major: ${this.major}`;
    }
}

class Instructor extends Persons {
    constructor(name, email, employeeId, subject) {
        super(name, email);
        this.employeeId = employeeId;
        this.subject = subject;
    }

    getInfo() {
        return `Instructor: ${this.name}, Email: ${this.email}, ID: ${this.employeeId}, Subject: ${this.subject}`;
    }
}

const person1 = new Persons("Yousef", "yousef@example.com");

const student1 = new Student(
    "Ahmad",
    "ahmad@example.com",
    101,
    "Cybersecurity"
);

const instructor1 = new Instructor(
    "Dr. Omar",
    "omar@university.com",
    501,
    "JavaScript"
);

console.log(person1.getInfo());
console.log(student1.getInfo());
console.log(instructor1.getInfo());

console.log(student1 instanceof Persons);
console.log(instructor1 instanceof Persons);