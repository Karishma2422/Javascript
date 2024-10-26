//nested loop
// sum of two number is equal to target
var array = [5, 6, 9, 75, 55, 32, 7, 15, 91, 3, 1, 25, 11, 6];
var target = 12;

for (var i = 0; i < array.length; i++){
    for (var j = i + 1; j < array.length; j++){
        if (array[i] + array[j] == target){
            console.log(array[i] + " + " + array[j], " = ", target)
        }
    }
}

// sbtract  of two number is equal to array
var array1 = [5, 6, 9, 75, 55, 32, 7, 15, 91, 3, 1, 25, 11, 6, 2];
var target1 = 3;

for (let p = 0; p < array1.length; p++){
    for(let q = p + 1; q < array1.length; q++){
        if(array1[p] - array1[q] == target1){
            console.log(array1[p] + " - " + array1[q], " = ", target1);
        }else if (array1[q] - array1[p] == target1){
            console.log(array1[q] + " - " + array1[p], " = ", target1);
        } 
    }
}

// division of two number is equal to trget
var array2 = [5, 6, 9, 75, 55, 32, 7, 15, 91, 3, 1, 25, 11, 6, 2];
var target2 = 5;

for(let a = 0; a < array2.length; a++){
    for (let b = a + 1; b < array2.length; b++){
        if(array2[a] / array2[b] == target2){
            console.log(array2[a] + " / " + array2[b], " = ", target2);  
        } else if (array2[b] / array2[a] == target2){
            console.log(array2[b] + " / " + array2[a], " = ", target2);
        }
    }
}


