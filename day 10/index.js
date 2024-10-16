//ques no.1 print numbers from array who are odd by using while loop.
var array = [49, 71, 65, 32, 378, 837, 768, 85, 51];
var i = 0;
while (i < array.length){
    if ( array [i] % 2 !=0){
        console.log(array[i]);
    }
    i++;
}
console.log("This is odd number from Array")

var array1 = [49, 71, 65, 32, 378, 837, 768, 85, 51];
var oddArray = [];
var i = 0;
while(i < array1.length) {
    if (array1[i] % 2 != 0){
        oddArray.push(array1[i]);
    
    }
    i++;
}
console.log(oddArray);
console.log("This is of odd numbers Array")

//print all numbers except target using !=
var array2 = [49, 71, 65, 32, 378, 837, 768, 85, 51];
var target1 = 837;
var target2 = 768;
var i = 0;
while (i < array2.length){
    if (target1 != array2[i] && target2 != array2[i]){
        console.log(array2[i]);
    }
    i++;
}
console.log("This are the numbers from Array except target")

