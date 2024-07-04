// function btnClick(x){
//     alert(x);
// }


// // Using event listners

// var button1 = document.getElementById('new-id').addEventListener
// ('click', function(){

//     alert('Clicked button')
    
// }
// )

// document.getElementById('new-id').addEventListener
// ('mouseout', txtChnage)

// function txtChnage(){
//     alert('Mouse out')
//     document.getElementById('hdt').textContent = 'Mouse moved.!'
// }



// document.getElementById('new1-id').addEventListener('click',
//     function(){
//         changeButton('Hello') 
//     }
// )

// function changeButton(x){

//     document.getElementById('li-items').style.backgroundColor='red'
//     document.getElementById('li-items').firstElementChild.textContent= x
// }


// document.getElementById('check').addEventListener('click',
// clickButton)

// function clickButton(e){
// console.log(e)
// console.log(e.target)
// console.log(e.target.id)
// console.log(e.target.className)
// console.log(e.target.classList)
// console.log(e.target.type)
// console.log(e.type)
// document.getElementById('getevent').innerHTML = '<h4>Class name :' + e.target.classList[0] + '</h4>'


// //Clicking position

// console.log(e.clientX)
// console.log(e.clientY)

// console.log(e.altKey)
// }


document.getElementById('myp1').addEventListener('click',
    function(){
        alert('You click white bar')
    }, false
)
document.getElementById('mybub').addEventListener('click',
    function(){
        alert('You click purple bar')
    }, false
)


document.getElementById('myp2').addEventListener('click',
    function(){
        alert('You click white bar')
    }, true
)
document.getElementById('mycap').addEventListener('click',
    function(){
        alert('You click purple bar')
    }, true
)


document.getElementById('check-my').addEventListener('click',
    function(){
        alert('Button Clicked')
    }
)

document.getElementById('Uncheck-my').addEventListener('click',
    function(){
        document.getElementById('check-my').removeEventListener()
        console.log("Event removed")
    }
)

// Diferant types of events for mouse

var btn = document.getElementById('t-btn');
var box = document.getElementById('box')

// btn.addEventListener('click',typeofEvent)
// btn.addEventListener('dblclick',typeofEvent)
// btn.addEventListener('mousedown',typeofEvent)

box.addEventListener('mouseenter',typeofEvent)

function typeofEvent(e){
console.log('Event type : '+e.type)
document.querySelector('#box h2').textContent = 'Mouse X : ' + e.offsetX + ' | Mouse Y' + e.offsetY;
document.body.style.backgroundColor = 'rgb('+e.offsetX+','+e.offsetY+','+e.offsetX+')'
}



// Different types of events for keyboard

// document.querySelector('input').addEventListener('keydown',typeOfevent2)
// document.querySelector('input').addEventListener('keyup',typeOfevent2)

// document.querySelector('input').addEventListener('focus',typeOfevent2)
// document.querySelector('input').addEventListener('blur',typeOfevent2)
document.querySelector('input').addEventListener('copy',typeOfevent2)
document.querySelector('input').addEventListener('input',typeOfevent2)


function typeOfevent2(e){
console.log("Event Type : " + e)
// console.log("Value : " + e.target.value)
// document.getElementById('out').textContent= e.target.value
}

document.querySelector('form').addEventListener('submit',submitForm)

function submitForm(e){
e.preventDefault()
console.log(e.type)
}