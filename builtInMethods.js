// SECTION 1: Calling methods on string or integer objects.
// Run each line of code below (either from this file or in dev tools).
// Then, in a comment, write 1-2 sentences describing what is happening, using ALL the involved vocabulary terms you've learned in this lesson so far.

// EXAMPLE
// The toLowerCase() method is called on the string "Hello World"
// No arguments are passed; toLowerCase() has one clear job which is to lowercase all letters that exist in the String
// The return value is "hello world"
"Hello World".toLowerCase();

// The .includes() method is called on the string "Hello World"
// .includes("Hello") is to see if "Hello World"
// Because "Hello World" DOES include "Hello", the return value is `true`
"Hello World".includes("Hello");

// The .endsWith() method is called on the string "Hello World"
// Because "Hello World" DOES NOT end with "Hello", our return value is `false`
"Hello World".endsWith("Hello");

// The .endsWith method is called on the string "Hello World"
// Because "Hello World" DOES end with "rld", our return value is `true`
"Hello World".endsWith("rld");



// SECTION 2: Calling methods on variables assigned to strings.
// Declare 2 variables assigned to strings.
// Call a different built-in JavaScript method on each of your variables. 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
// Include comments above each method call explaining the impact and return value of that method.

// EXAMPLE
// The startsWith() method is called on the firstName variable, which stores the string object "Jeff". 
// The startsWith() method returns true if the data in the firstName variable starts with the argument passed in.
// In this example, the return value is true, because "Jeff" does start with "J".
// The console.log() statements prints the return value of the startsWith() method (true) to the console.
var firstName = "Jeff";
console.log(firstName.startsWith("J"));

// The .repeat() method is called on the pet variable, which stores the string object "Louis Kitty".
// The .repeat() method repeats the string variable as many times as we specify. In this case, that is 4. 
// console.log() prints "Louis Kitty" 4 times to the console.
var pet = "Louis Kitty ";
console.log(pet.repeat(4));

// The .toUpperCase() method is called on the yuck variable, which stores the string "Boogers are not for eating."
// The .toUpperCase() method returns all of the characters in a string as uppercase. 
// console.log() prints this sentence (in uppercase) in the console. 
var yuck = "Boogers are not for eating.";
console.log(yuck.toUpperCase());


// SECTION 3: Calling methods on variables assigned to arrays.
// Declare 2 variables assigned to arrays.
// Call a different built-in JavaScript method on each of your variables. 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// Include comments above each method call explaining the impact and return value of that method.


// The pets array stores 4 different string values. 
// The .pop() method removes the last element ("snake") from an array and returns that element. 
// After applying .pop() to pets, I print console.log(pets). This essentially removed "snake" from the printed output and puts "snake" as the return value. 
var pets = ["cat", "dog", "parrot", "snake"];
pets.pop();
console.log(pets);

// The foods array stores 4 different string values. 
// I made a loop to demonstrate what the .includes() method does. 
// The .includes() method sees if each element includes a character or set of characters. In my example, we are seeing if each string contains the letter "o".
// The .includes() method returns either a true or a false value, dependent on whether or not each element contains "o". 
// Instead of printing true / false, I wanted the loop to print only the foods that contain the letter "o".
var foods = ["popcorn", "cheetos", "broccoli", "nutella"] 

for (var i = 0; i < foods.length; i++) {
    if (foods[i].includes("o")) {
        console.log(foods[i])
    }
}

