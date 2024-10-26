var array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var target = 5;



function binarysearch(array,target){
var left =0;
var right = array.length - 1;

while(left <= right){
    console.log(left, "left", right, "right" )
    const midIndex = Math.floor((left + right /2))
       console.log(midIndex,"midIndex",array[midIndex], "element");
     if (array[midIndex] == target) {
        console.log(array[midIndex], target, "array[midIndex] == target");
        return midIndex;
     }else if (array[midIndex] > target){
        console.log(array[midIndex], target, "array[midIndex] > target");
        right = mid - 1;
     } else if (array[midIndex] < target){
        console.log(array[midIndex], target, "array[midIndex] > target");
        left = mid + 1;
     }

    }

}
console.log(binarysearch(array,target));