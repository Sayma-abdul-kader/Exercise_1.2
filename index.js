const car = {
    name: "Rolls",
    model: 1234,
    weight: "400kg",
    color: "midnight blue",
    des: function() {
        return "This car's called: " + this.name + ". The car model is: " + this.model;
    }
};

console.log(car);
console.log(car.des());



console.log("Hello, World!");

alert("Welcome to Javascript");

document.write("Hello, DOM!");

console.log("Check the console");

let myv= 10;

console.log("Initial:", myv);
myv=20;
console.log("New:", myv);


var myVar = 10;
console.log("Initial value using var:", myVar);
myVar = 20;
console.log("New value using var:", myVar);


const myConst = 10;
console.log("Value using const:", myConst);
myconst=20;
console.log("Value after attempting to change using const:", myConst);


let x = 10;
if (x > 5) {
    console.log("x is greater than 5");
}

// Declare a variable 'a' and assign it the value 5
let a = 5;

// Declare a variable 'b' and assign it the value 10
let b = 10;

/*
  Declare a variable 'c' and assign it the sum of 'a' and 'b'.
  This will result in 'c' being assigned the value 15.
*/
let c = a + b;

// Log the value of 'c' to the console, which should be 15
console.log(c);

const nme= "Siema";
let age= "24";
let isStudent = true;
console.log("Name:", nme);
console.log("Age:", age);
console.log("Is a student:", isStudent);

{
    // Declare a variable inside a block scope
    let blockScopedVariable = "I'm inside the block!";
    // Log the variable inside the block
    console.log(blockScopedVariable); // This will work
}

//log variable outside the block
//console.log(blockScopedVariable); // This will cause an error


const myConstant = 10;
console.log(myConstant); 

//myConstant = 20; // This line will cause an error
//console.log(myConstant);


// Assign values
let num1 = 10;
let num2 = 3;

// Perform arithmetic
let addition = num1 + num2;
let subtraction = num1 - num2;
let multiplication = num1 * num2;
let division = num1 / num2;
let modulus = num1 % num2;

// Print results
console.log('Addition: ' + addition); // Output: Addition: 13
console.log('Subtraction: ' + subtraction); // Output: Subtraction: 7
console.log('Multiplication: ' + multiplication); // Output: Multiplication: 30
console.log('Division: ' + division); // Output: Division: 3.3333333333333335
console.log('Modulus: ' + modulus); // Output: Modulus: 1


// Prompt user to enter numbers
let num11 = prompt("Enter the first number:");
let num22 = prompt("Enter the second number:");

// Convert the input strings to numbers
num11 = Number(num11);
num22 = Number(num22);

// Perform arithmetic operations
let sum = num11 + num22;
let difference = num11 - num22;
let product = num11 * num22;
let quotient = num11 / num22;

// Alert the results
alert("Sum: " + sum);
alert("Difference: " + difference);
alert("Product: " + product);
alert("Quotient: " + quotient);

// Assignment operators

let num = 10;

console.log("Initial value:", num); // Output: 10

// Apply assignment op
num += 5;  
console.log("After += 5:", num); // Output: 15

num -= 3;  
console.log("After -= 3:", num); // Output: 12

num *= 2; 
console.log("After *= 2:", num); // Output: 24

num /= 4;
console.log("After /= 4:", num); // Output: 6

num %= 5; 
console.log("After %= 5:", num); // Output: 1


// different data types
let str = "Hello, world!";
let numm = 42;
let bool = true;
let obj = { name: "Alice", age: 25 };
let arr = [1, 2, 3, 4, 5];


console.log("Type of str:", typeof str); // Output: string
console.log("Type of num:", typeof numm); // Output: number
console.log("Type of bool:", typeof bool); // Output: boolean
console.log("Type of obj:", typeof obj); // Output: object
console.log("Type of arr:", typeof arr); // Output: object


// Functions
function addNumbers(a, b) {
    return a + b;
}

// Call the function
console.log("Sum of 5 and 3:", addNumbers(5, 3)); // Output: 8
console.log("Sum of 10 and 20:", addNumbers(10, 20)); // Output: 30
console.log("Sum of -2 and 4:", addNumbers(-2, 4)); // Output: 2


// Create an object representing a student
let student = {
    namee: "Abdus Samad",
    age: 21,
    grade: "A"
};


console.log("Student object:", student);

// Add a new property to the student object
student.major = "Automobiles";
console.log("After adding major:", student);


// Delete an existing property
delete student.grade;
console.log("After deleting grade:", student);

