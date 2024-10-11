// Q Print numbers from 10 - 51, with range of 5.

for (let i = 10; i < 51; i += 5) {
  console.log(i);
}




// Q Print numbers from 50 - 100, with range of 3 and count them.

var count = 0; // 1, 2 , 3 , 4
for (let i = 30; i <= 50; i += 3) {
  count++;
  console.log(count, "its execute inside  block");
}
console.log(count, " its execute outside  block");




// Q Print numbers from 10 - 70,
// with range of 7
// and add 10 for every element
// and return in array;


var initial = 10;
var end = 70;
var seque = 7;

function PrintNumbers(initial, end, seque) {
  
  var output = [];
  for (let i = initial; i <= end; i += seque) {
    
    output.push(i + 10);
  }
  return output;
}
console.log(PrintNumbers(initial, end, seque));






// Q Print count from range 3897 to 5784, who are odd.

var start = 3897;
var end = 5784;
var seque = 1;

function CountOddNumbers(start, end, seque) {
  var count = 0;
  for (var i = start; i <= end; i += seque) {
    if (i % 2 == 1) {
      count++;
    }
  }
  return count;
}
console.log(CountOddNumbers(start, end, seque));