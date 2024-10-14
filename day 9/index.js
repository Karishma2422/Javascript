//while loop
// ques no 1. print no 10-1 using while loop

var num = 10;
while (num > 0){
    console.log(num);
    num--;
}
console.log("printing numbers using while loop");

//ques no 2 print only numbers from array
//then add even condition 
// then calculate count of even numbers 

var array = [25,44,33,55,66,77,88,99,75]
var i = 0;
var count = 0;
while (i < array.length){
    console.log(array[i]);
  if (array[i] % 2 == 0) {
    console.log(array[i]);
    count++;
  }
    i++;   
}
console.log("This numbers from given array");
console.log("This is the count of even numbers");

// testing not euqal to operators (!=)
console.log(" Testing not equal to operators !=")

console.log(5 == 5);
console.log(5 == 7);

console.log(5 != 5);
console.log(5 != 7);

console.log(5 != 5);
console.log(5 !== 7);
