// Examine the document object

// console.dir(document)

// console.log(document.URL)
// console.log(document.charset)
// console.log(document.lastModified)
// console.log(document.title)
// console.log(document.doctype)

// console.log(document.head)
// console.log(document.body)
 console.log(document.all)
// console.log(document.all[11])
// console.log(document.forms[0])
// console.log(document.links)
// console.log(document.images)

// Value change


// console.log(document.title)
// document.title = 'Document object model'
// console.log(document.title)

// console.log(document.all[11])
// document.all[11].textContent ="Shopping Item List"
// console.log(document.all[11])


// console.log(document.getElementById('frmt'))

// var formTitle = document.getElementById('frmt')
// console.log(formTitle)

// // textContext , innerText, innerHTML

// formTitle.textContent = "Add Shoping Item"  // Not effet style
// console.log(formTitle.textContent)
// formTitle.innerText = "Shopping Item" // Effect the style
// console.log(formTitle.innerText)
// formTitle.innerHTML='<i>Hello<i> Shopping list'
// console.log(formTitle.innerHTML)


// var navigation = document.getElementById('navbar')
// console.log(navigation)
// navigation.style.backgroundColor = 'red'


// // Select element using class name

// var items = document.getElementsByClassName('items')
// console.log(items)
// console.log(items[0])
// items[2].textContent = "Hand Bag"
// console.log(items[2])

// // styling 

// items[2].style.color = 'red'


// // chnage all background color

// for (var i of items){

// console.log(i)
// i.style.backgroundColor= 'green'

// }

// var li = document.getElementsByTagName('li')
// console.log(li)

// var h3tag = document.getElementsByTagName('h3')
// console.log(h3tag)


// li[0].style.backgroundColor='red'


// for (var i of li){

// console.log(i)
// i.style.backgroundColor= 'green'

// }


//    using Query selector

// var navb = document.querySelector('#navbar')
// navb.style.border = 'solid 1px #000'


// var input = document.querySelector('input')
// input.value="bag" 

// var item = document.querySelector('.items');
// item.style.backgroundColor="red"

// var it = document.querySelector('div .frm #frmt')
// it.style.color='orange'


// document.querySelectorAll('.items')[1].style.color="purple"

// var odd = document.querySelectorAll('li:nth-child(odd)')
// for(var i of odd){
//     i.style.backgroundColor='green'
// }



// var even = document.querySelectorAll('li:nth-child(even)')
// for(var i of even){
//     i.style.backgroundColor='blue'
// }

// Traversing the Dom

var itemlist = document.querySelector('#li-items')
// console.log(itemlist.parentNode)
// console.log(itemlist.parentNode.parentNode)

// itemlist.parentNode.style.backgroundColor='red'
// console.log(itemlist.parentElement)


// console.log(itemlist.childNodes)
// console.log(itemlist.childNodes[1])


// console.log(itemlist.children)
// itemlist.children[0].style.backgroundColor='red'
// console.log(itemlist.lastElementChild)

// console.log(itemlist.nextElementSibling)
// itemlist.nextElementSibling.style.color='red'


// console.log(itemlist.previousElementSibling)
// itemlist.previousElementSibling.style.color='red'



// create element 

// create an Input
var input = document.createElement('input')
console.log(input)
input.className ='test'
input.id='last'


input.setAttribute('type','text')
// input.setAttribute('type')


var newDiv = document.createElement('div')
var newText = document.createTextNode('How to work ?')

newDiv.appendChild(newText)
console.log(newDiv)

// insert created element to the document

var form = document.querySelector('.frm form')
var button = document.querySelector('.frm form button')

input.style.backgroundColor='yellow'
form.insertBefore(input,button)