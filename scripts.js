var bill =[1230, 982 , 1640]
var TipAmount =[]
var totalbill = []


var billCalculator = function(billcount){
    if(billcount <= 1000){
        var tip = billcount * (20/100)
        var totalAmount = tip + billcount
        totalbill.unshift(totalAmount)
        TipAmount.unshift(tip);
    }
    else if(billcount<1500){
        var tip = billcount * (15/100)
        var totalAmount = tip + billcount
        totalbill.unshift(totalAmount)
        TipAmount.unshift(tip);
    } else {
        var tip = billcount * (10/100)
        TipAmount.unshift(tip);
        var totalAmount = tip + billcount
        totalbill.unshift(totalAmount)
       
    }

    
}


billCalculator(1230)
billCalculator(982)
billCalculator(1640)

console.log(TipAmount)
console.log(totalbill)


// Another way - easy
var TipAmount = new Array()
var totalbill = new Array()

function calculateTip(billcount){
    if(billcount <= 1000){
        var tip
        tip = billcount * (20/100)
    }else if(billcount <=1500){
        tip = billcount * (15/100)
    }else {
        tip = billcount * (10/100)
    }

    TipAmount.push(tip)
    totalbill.push(tip + billcount)
}

calculateTip(1230)
calculateTip(982)
calculateTip(1640)



console.log(TipAmount)
console.log(totalbill)