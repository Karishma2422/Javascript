var array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var target = 75;



function binarysearch() {
var left =0;
var right = array.length - 1;

while (left <= right) {
    console.log(left, "left", right, "right" )
    const midIndex = Math.floor((left + right ) / 2);
       console.log(midIndex,"midIndex",array[midIndex], "element");
     if (array[midIndex] == target) {
        console.log(array[midIndex], target, "array[midIndex] == target");
        return midIndex;
     }else if (array[midIndex] > target){
        right = midIndex - 1;
        console.log(array[midIndex], target, "array[midIndex] > target");
     } else if (array[midIndex] < target){
        left = midIndex + 1;
        console.log(array[midIndex], target, "array[midIndex] > target");
     }

    }
return "not found";
}
console.log(binarysearch(array,target));