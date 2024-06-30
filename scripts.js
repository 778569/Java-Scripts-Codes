// console.log("Hope you are fine.");

// for(var i=0; i<10; ++i){
//     console.log(i)
// }  


for(var i=10; i>=0; i--){
    console.log(i)
}  


var students = ['Namal','Kumara','Dasun','Sachini','Jhone'];

for (var i = 0; i< students.length; i++ ){

    console.log(students[i]);
}

// for in loop and for of loop

// 1. for in loop,


for(var i of students){
    console.log(students[i])
}

var person = {fName : 'Kavinda', lName: 'Bandara',age:25}

for(var i in person){
    console.log(person[i])
}

var fullName = 'Kavinda Bandara'
for(var j of fullName){
console.log(j)
}


var marks= [20,85,69,78,50]
var k = 0;
while(k<marks.length){
console.log(marks[k]) 
k++
}

 // Do while loop


var n = 10

do{
    console.log(n);
    n--
} while(n>=1);

// Continue and break

var data = ['Saman', 'Galle',1994,'Maths',true,'Apple']

for(var i =0; i<data.length; i++){
    if(typeof(data[i])!=='string'){
        continue
    }
    console.log(data[i])
    
}

for(var i =0; i<data.length; i++){
    if(typeof(data[i])!=='string') break
    console.log(data[i])
    
}