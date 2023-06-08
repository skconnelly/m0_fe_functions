// Each example below has at least one opportunity for improvement.

// YOUR TASK:
  // Modify the code to make that improvement(s)
  // write a JS comment to explain what you changed, and why
  // make sure the code you submit WORKS - you can run this entire file 
    // using `node cleanUp.js` or copy and paste into a replit


// EX 1:
// For the example below, I put what was originially `console.log` on a new line to visually clean and break up the code. 
// I changed `console.log(Hello...)` to `return "Hello..."` on line 15 to return "What is..?"
// // On line 18, I added `console.log` to print the return value. 
function askForName() { 
  return "Hello, what is your name?"; 
}

console.log(askForName());



// // EX 2:
// I cleaned up some formatting (i.e. added tabs on lines 26 + 27) to visually clean up the code. 
// I added console.log() to lines 30 + 31, so that the answer would print. 
function addThreeNums(first, second, third) {
  var sum = first + second + third
  return sum;
      }

console.log(addThreeNums(1, 2, 3));
console.log(addThreeNums(4, 2, 7));


// // EX 3:
// I changed `func` to `function` on line 36. `func` and `function` are not interchangable in js. 
function makeFreshPesto(){
  console.log("Buy ingredients: basil, parmesan, romano, olive oil, pine nuts, garlic, salt, pepper");
  console.log("Pulse basil and pine nuts");
  console.log("Add garlic and cheeses");
  console.log("Slowly pour in oil");
  console.log("Season");    }

makeFreshPesto();


// //  EX 4:
// I moved the squiggly bracket to the end of line 50 and made sure lines 51 + 52 were indented the same (for aesthetic reasons)
// I added a semicolon to line 54 (for `proper` formatting in js)
// I added line 56 of code `console.log` so that the answer would print to the console. 
function average(num1, num2) {
  var sum = num1 + num2;
  var avg = sum / 2;

return avg;
  }
console.log(average(10, 20))