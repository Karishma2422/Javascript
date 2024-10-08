var number = 40;
var target = 50;

function checkNumberIsGreaterThanTarget(number, target) {
  if (target > number) {
    return "Target is greater than number.";
  } else if (target == number) {
    return "Number is greater than target.";
  }
  console.log("after if condition false.");
}

console.log(checkNumberIsGreaterThanTarget(number, target));
















var number = 27;

function findNumberIsEvenOrOdd(number) {
  //   console.log(number % 2);
  if (number % 2 == 0) {
    return "number is even";
  } else {
    return "number is odd.";
  }
}

console.log(findNumberIsEvenOrOdd(number));

// 20 / 2 => 10

// 20 % 2 => 0,1

//    _____   10 -> quotient
// 2 /  20
//      20
//       0 -> remainder

// if number even then remainder is 0
// if number is odd then reminder is 1

// array  [ , , , , ]



var myAge = 27;

var students = [myAge, [0,1,2], "karishma", true, false, 33, "panvel", "navi mumbai", "vashi"];
console.log(students);



var students = ["karishma", "panvel", "navi mumbai", "vashi", "last element", "hello", 5];
console.log(students);
console.log(students[0]);
console.log(students[1]);
console.log(students[3]);
// [] property caculates elements from 0


console.log(students.length);
console.log(students.length - 1);
console.log(students[students.length - 1]);
console.log(students[Math.ceil(students.length / 2) - 1]);
// length property calculates elements from 1


console.log(Math.floor(10.5)); // 10
console.log(Math.ceil(10.5)); // 11


var array = ["TajMahal", "Agra",
    "RedFort", "Delhi",
    "AjantaCaves", "Maharashtra",
    "GatewayIndia", "Mumbai",
    // "QutubMinar", "Delhi",
    // "HawaMahal", "Jaipur",
    // "VictoriaMemorial", "Kolkata",
    "KhajurahoTemple", "MadhyaPradesh"];

    //we are using push method
    console.log("we are using push method")
array.push(" India Gate, Delhi");
console.log(array);

// we are using pop method
console.log("we are using pop method")
array.pop("KhajurahoTemple", "MadhyaPradesh");
console.log(array);

//we are using unshift method
console.log("we are using unshift method")
array.unshift(0);
console.log(array);

//we are using shift method
console.log("we are using shift method")
array.shift();
console.log(array);