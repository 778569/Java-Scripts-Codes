var score_01 
var score_02
var score_03

score_01 = parseInt(prompt("Sri Lanka score 01"))
score_02 = parseInt(prompt("Sri Lanka score 02"))
score_03 = parseInt(prompt("Sri Lanka score 03"))


var Avarage_SriLanka = (score_01 + score_02 +score_03)/3
console.log(Avarage_SriLanka)

score_01 = parseInt(prompt("Englend score 01"))
score_02 = parseInt(prompt("Englend score 02"))
score_03 = parseInt(prompt("Englend score 03"))

console.log(typeof(score_01))

var Avarage_England = (score_01 + score_02 +score_03)/3
console.log(Avarage_England)

if(Avarage_SriLanka > Avarage_England){
    console.log("Sri Lanka won")

}else if(Avarage_England> Avarage_SriLanka){
    console.log("England won")
}else{
    console.log("Math draw")
}