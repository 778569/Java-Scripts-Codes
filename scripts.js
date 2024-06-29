Kasun = {
    fullName: 'Kasun Samantha',
    mass: 50,
    height:6,
    BMI : function(){
return (this.mass / this. height ** 2)
    }
}

Chamal = {
    fullName: 'Chamal Herath',
    mass: 70,
    height:5.5,
    BMI : function(){
        return (this.mass / this.height ** 2)
            }
}


console.log(Kasun.BMI())
console.log(Chamal.BMI())

if(Kasun.BMI()>Chamal.BMI()){
    console.log("Kasun has higher Bmi")

} else{
    console.log("Chamal has higher Bmi")
}