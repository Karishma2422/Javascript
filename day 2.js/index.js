// string
// number
// Boolean
// undefined
// comparision operators , == , === , < >
// var
// let
// const
// Conditional statement
// if else

// difference between var let and const
//                 var         let         const
// reassign        true        true         false
// redeclare       true        false        false
// scope      global/function block-scope   block-scope
// hoisting        true        false         false

// let -> varible using assign , reasign , declare
let abc = 15;
console.log(abc);
abc = 25;
console.log(abc);
let abc = 75;
console.log(abc);

// using const variable

const myname = 25;
console.log(myname);
myname = 35;
console.log(myname);
const myname = 45;
console.log(myname );

// // } -> block

// {
//   var myNumber = 20;
//   console.log(myNumber);
// }
// console.log(myNumber);

// {
//   {
//     let myNumber = 20; // first version
//     console.log(myNumber);
//   }
//   console.log(myNumber);
// }
// console.log(myNumber);

// {
//   {
//     const myNumber = 20; // first version
//     console.log(myNumber);
//   }
//   console.log(myNumber);
// }
// console.log(myNumber);

// Hoisting

// var myNumber;
// console.log(myNumber, typeof(myNumber));

// line by line execution
// 2 rounds

// initilization
// execution

// Conditional statement  -> multiple conditions ->

var number1 = 399;
var number2 = 599;
// if else
// if(conditions){
//     statement 1
// } else {
//     statement 2
// }

console.log(number1 > number2);

console.log(number1 == number2);

if (number1 > number2) {
  // if -> true
  console.log("number1 is greater.");
} else if (number1 == number2) {
  // else if -> true
  console.log("number1 is equal to number2.");
} else if (number1 == number2) {
  // else if -> true
  console.log("number1 is equal to number2.");
} else {
  // false
  console.log("number2 is greater.");
}