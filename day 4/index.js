function karishma() {
    console.log("inside a function.");
  }
  function karishma() {
  console.log("inside a function.");
}
karishma();
karishma();


console.log("outside a function.");




function addition() {
  var number1 = 123;
  var number2 = 235;
  console.log(number1 + number2);
}
addition();



function findGreaterNumber() {
  var number1 = 9;
  var number2 = 8;
  if (number1 > number2) {
    console.log("Number 1 is greater than Number 2");
  } else {
    console.log("Number 2 is greter than number 1.");
  }
}
findGreaterNumber();


var number1 = 179;
var number2 = 335;
function subtraction(value1, value2) {
  console.log("subraction value is" ,value1 - value2 );
}
subtraction(number2, number1);





function multiplication(value1, value2) {
  var answer = value1 * value2;
  console.log("before return");
  return answer; //  execution stop
  console.log("After return");
}

var output = multiplication(5, 5); // its going to provide data
console.log(output);
  karishma();
//   karishma();
  
  console.log("outside a function.");
  
  
  
  
  