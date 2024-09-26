console.log("hello world");
/*comments\
//variables
//don't do this!
//var x = 45;

//yes do this
//let when we want variables that can be redefind
let y = 45;
y = 34;

//constant yes do this, cannot be redefined, use constant 99% of the time

const z = 45;

//Data types, primitive data types
let string = "kyle";
let integer = 45;
let bool = true; //true of false
let nulls = null; //null is absence of value
let undefined = undefined; //no value
//x,y are arguments
function add(x, y) {
  console.log(x + y);
  return x + y; //not magic
  //cannot write after return statement
  console.log(dfasdfasdfasd); //see?
}
const result = add(z, 65);
console.log(result);

//conditional statements

let x = 45;
const y = 2;
function oddOrEven(x, y) {
  console.log(x / 2);
  return x / y;
}
const result = divide(x, y);
console.log(result);
if (b > 0) {
  console.log("positive nubmer");
} else if (b < 0) {
  console.log("negative number");
}
//almost always use ===, double == don't check for types. Double == check for true, triple === also chec for false
//
else if (b === 0) {
} else {
  console.log("it's zero? maybe. who knows");
}
*/

function oddOrEven(x) {
  if (x % 2 === 0) {
    console.log("even");
  } else {
    console.log("odd");
  }
}
oddOrEven(44);

function larger(x, y) {
  if (x > y) {
    console.log("x is larger");
    return x;
  } else if (x < y) {
    return y;
  } else {
    return { x, y };
  }
}

larger(44, 20);
