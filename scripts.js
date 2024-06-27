// javascript objects are variables that has many values.
//Those values written as name : value pairs called properties or methods.

//Object literals

var Kavinda = {
    firstName: 'Kavinda',
    lastName : 'Bandara',
    age:'29',
    isMarried: true,
    job:'SE',
    subjects:['js','angular','C#','html','css','python','sql'],
    degree:{
        name:'Software Eng',
        duration:'4 years',
        credits: 120
    },

    project :[
        {
            name: 'Ecommerce app',
            technology:'Flutter',
            version: 1.1
        },
        {
            name: 'Web develop app',
            technology:'Angular',
            version: 1.2
        },
        {
            name: 'monile app',
            technology:'Android',
            version: 1.3
        },
        
    ],

    yearofBirth : function(year){
return year- this.age;
    }

}

//get values

console.log(Kavinda)
console.log(Kavinda.firstName)
console.log(Kavinda['lastName'])

var x='age'
console.log(Kavinda[x])

console.log(Kavinda.subjects)
console.log(Kavinda.subjects[2])
console.log(Kavinda['subjects'][2])

console.log(Kavinda.degree)

console.log(Kavinda.degree['name'])

console.log(Kavinda['degree']['name'])

console.log(Kavinda.project)

console.log(Kavinda.project[0])

console.log(Kavinda.project[0].version)

console.log(Kavinda.project[0]['technology'])

console.log( 'Year of birth : ' + Kavinda.yearofBirth(2024))


Kavinda.age = 30
Kavinda.degree="Engineering"

// console.log(Kavinda)

Kavinda.project[0].name='Web development'
console.log(Kavinda)

var Shaku = new Object();

Shaku.firstName = 'Shakuni'
Shaku.lastName='Samanmalee'
Shaku['age']=30

console.log(Shaku)