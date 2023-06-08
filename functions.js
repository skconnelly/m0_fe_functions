// Defining Our Own Functions
// For each exercise below, write the function according to the requirements. 
// Call each method at least twice and store the return value in a variable. 
// Use console.log() to see the return value in the console.

// 1: Write a function named greeting that returns a string with a general greeting. 
function greeting() {
    return "Wassup shorty🥵";
}

var a = greeting();
var b = greeting();

console.log(a);
console.log(b);

// 2: Write a function named customGreeting that returns a greeting WITH a specific name.
function customGreeting(name) {
    return `Ayo whats good ${name}`;
}

var c = customGreeting("babygirl");
var d = customGreeting("honeybooboopie")

console.log(c);
console.log(d);


// 3: Write a function named greetPerson that takes in 3 strings, a first, middle, and last name, and returns a sentence with the full name.

function greetPerson(first, middle, last) {
    return `Hey there ${first} ${middle} ${last}🦋`;
}

var e = greetPerson(`Sara`, `Kendall`, `Connelly`);
var f = greetPerson(`Louis`, `Alexander`, `Connelly`);

console.log(e);
console.log(f);

// 4: Write a function named square that takes in one number, and returns the square of that number.
// BONUS: Print a sentence that interpolates the return value of your square function.

function square(num) {
    return num * num;
}

var g = square(12);
var h = square(16);

console.log(g);
console.log(h);

// 5: Write a function named checkStock that satisfies the following interaction pattern:
// Hint: You will only write one checkStock function that checks the quantity and then prints the corresponding statement.

function checkStock(quantity, item) {
    if (quantity > 3) {
        console.log(`${item} is stocked.`);
    } else if (quantity === 0) {
        console.log(`${item} - OUT OF STOCK!`);
    } else {
        console.log(`${item} - running low!`);
    }
    
}




checkStock(4, "Coffee");
// // => "Coffee is stocked"

checkStock(3, "Tortillas");
// // => "Tortillas - running LOW"

checkStock(0, "Cheese");
// // => "Cheese - OUT of stock!"

checkStock(1, "Salsa");
// // => "Salsa - running LOW"

