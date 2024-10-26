var myvariable = 25;
var myarray = [35, 57, 75, 85, 95,];
//var myobject={key: data, key: data1}

mydata= {
    name: "KARISHMA",
    age: 25,
    location: "Panvel",
    hobbies: ["cooking", "travelling","dancing"],
    batches: {9:1},
};

console.log(mydata,"mydata");
console.log(mydata.hobbies,"my favourite hobbies")

var myinstitute = new  Object();
myinstitute.name = "Awdiz vashi";
myinstitute.age = "10";
myinstitute.location = "Navi Mumbai";
myinstitute["student counts"] = 25;
myinstitute["is open"] = true;
console.log(myinstitute,"myinstitute");

var myinstitute = {
    name: " Awdiz",
    studentcount: function(){
        console.log(10);
        console.log(this.name);
    },
};
console.log(myinstitute.studentcount());



var myinstitute = {name : "Awdiz", age: 10, mystudents: {batch3: 9}};
console.log(myinstitute.name);
console.log(myinstitute.age);
console.log(myinstitute.mystudents.batch3);




// const {name, age, myinstitute} = myinstitute;
// const {batch3} = mystudents;
// console.log(name, age, batch3);
