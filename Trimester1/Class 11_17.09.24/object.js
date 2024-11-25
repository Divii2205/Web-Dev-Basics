let obj = {}

//Person
const person1 = {
    name: 'Divii', 
    ownsPet: true,
    marks: 'A1',
    phone: 1234567849
}

//Captain America
let cap = {
    firstName: 'Steve',
    lastName: 'Rogers',
    age: 110,
    allies: ['Hulk', 'Bucky', 'Tony Stark'],
    address: {
        country: 'USA',
        state: {
            stateName: 'Manhattan',
            cityName: 'Brooklyn',
            pinCode: 541200
        }
    },

    sayHi: function (){
        console.log('Captain says Hello!')
    },

    isAvenger: true
}

//Dot Notation
console.log(cap.address.state.cityName)
cap.sayHi()

//Bracket Notation

//To add new properties to the object
cap.movies = ['Age of Ultron', 'Civil War']
console.log(cap)

//Delete an object key
delete cap.age
console.log(cap)

//Update a value of the key in an object
cap.isAvenger = false