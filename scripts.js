var empName = "Kavinda"
var jobRole="engineer"


switch(jobRole.toLocaleLowerCase()){
case 'teacher':
    console.log(empName + "is a Teacher");
    break;

case 'doctor':
    console.log(empName + "is a Doctor")
    break;

default:
    console.log(empName + "is a engineer")
    break;
}