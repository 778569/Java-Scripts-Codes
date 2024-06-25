function callFunction(){
  console.log("Function called.!!!")
}

// callFunction()

function addNumbers(num1, num2){
    var ans = num1 + num2;
    console.log(ans)
}

addNumbers(12, 36.5);


function subNumbers(num1,num2){
    return num1 - num2;

}


var subnum = subNumbers(10,5)
console.log(subnum)


function calculateAge(birthday = 1994){
  return 2024- birthday
}


// console.log("Kasun is " + calculateAge(1990) + " years old")

function calculateRetiringYear(FirstName, birthYear){
var age = calculateAge(birthYear)
var retiredYear = 60 - age;
console.log(`${FirstName} retires in ${retiredYear} of ${2024+retiredYear}`)
}

calculateRetiringYear('Kavinda', 1994)