// Driving license
// 18 => Learning
// 18 > dl  and < 90
// 18 < no dl


var age = 90; // input element

if( age == 18 ){
    console.log("You are eligible for Learning License.")
} else if( 91 > 18  && age < 90 ){
    console.log("You are eligible for Driving License.")
} else {
    console.log("You are not eligible.")
}

// && - and operator
// it returns single output with multiple conditions

console.log(2 > 1, 2 < 3); // true
console.log(2 < 3); // true

console.log(2 < 1 && 2 < 3 && 3 < 4 && 5 < 6);
// when all conditions are true then it'll return true
// if single/double/multiple condition is false then it'll return false

console.log(2 < 1 || 2 > 3 || 4 > 5);
// if single/double/multiple conditions are true then it'll return true
// when all condition are false then only it'll return false

// switch (key) {
//     case value:
//         console.log()
//         break;

//     default:
//         break;
// }

var subject = "sanskrit";

switch (subject) {
  case "hindi":
    console.log("You have selected subject hindi.");
    break;
  case "sanskrit":
    console.log("You have selected subject sanskrit");
    break;
  case "english":
    console.log("You have selected subject english.");
    break;
  default:
    console.log("Selceted subject is not available.");
}