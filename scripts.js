var tipbill = []
var totalBill = []


var billCal = {
    bill : [1230,982,1640,1460,994],
    tip  : function tipCal(){
        for(var i of this.bill){
            console.log(i)
if(i <= 1000){
var mytip =  i * (20/100)
}
else if(i<1500){
    var mytip = i * (15/100)
}else{
    var mytip = i * (10/100)
}
tipbill.push(mytip)
totalBill.push(mytip + i)
        }
    }
}


billCal.tip()
console.log(tipbill)
console.log(totalBill)