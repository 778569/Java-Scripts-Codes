// console.log("Hope you are fine.");


var students = ["Ruwan","Nimal","Piyal","Kasuni","Danushika"]
var marks= new Array(60,55,66,44,78)

console.log(students)
console.log(students.length)
console.log(students[3] + ' got '+ marks[3]+' marks of maths')

//Arry mutation

students[3]="sanduni"
students[5]="kalpa"
marks[2] = 75

students[8]="saman"

console.log(students)
console.log(marks)


var std1 = ['Kamal', 'Perera',22,'Civil','Colombo',true]
console.log(std1)

std1.push('green')
console.log(std1)

std1.unshift('Mr.')
console.log(std1)

std1.pop()
console.log(std1)

std1.shift()
console.log(std1)