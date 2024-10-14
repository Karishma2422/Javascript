//que no.1 print reverse no. from 10-1
for(var i=10; i>=1; i--){
    console.log(i);
}
console.log("this is reverse loop")

//ques no.2 print even num  between 75-55
for(var i =75; i>=55; i--){
    if (i % 2==0){
        console.log(i)
    }
}
console.log("above are even numbers");

//ques no.3 print element from array
var subject =["marathi","sanskrit","maths","I.T.","english","hindi","E.V.S."]
console.log(subject.length);
for(var i =0; i < subject.length; i++){
    console.log(subject[i]);
}
console.log("subject array is printed");

//ques 4 print count of even no. array
var number =[5,76,48,79,55,31,42,67,28];

var count = 0;
for(var i = 0; i < number.length; i++){
    // console.log(number[i]);
    if (number[i] % 2 ==1){
        count++;
    }
}
console.log(count);


















