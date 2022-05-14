// property = .length

const s = "Hong Kong"
console.log(s.split(" "))

const numbers = new Array(1,2,3,4,5);
const fruits = ['apple', 'oranges', 'pears']
fruits.push('mangos')
console.log(fruits)

// .unshift add to the start of the array
// .indexOf
// .length

// dict.firstName to access dictionary in javascript

//JSON is a data format and is use send data to a server in JSON format

const todos = [
    {
        id: 1,
        text: "First",
        isCompleted: true
    },
    {
        id: 1,
        text: "Second",
        isCompleted: true
    },
    {
        id: 1,
        text: "Third",
        isCompleted: true
    },
];

const JSON1 = JSON.stringify(todos)
console.log(JSON1)

for(let i = 0; i < 10; i++){
  // TODO document why this block is empty

    
}

for(let aa of todos){
    console.log(aa.text)
}

// high order array methods

//for each
todos.forEach(function(item){
    console.log(item.text)
})

//map
const ans = todos.map(function(item){
    return item.text
})

//filter

const ans2 = todos.filter(function(item){
    return item.text == 'Second'
}).map(function(item) {
    return item.text
})

console.log(ans2)

//ternary operator
const x = 10
            // if    then   else
const color = x > 10 ? 'red' : 'blue'

//switch

switch(color) {
    case 'red':
        //do this
        break
    case 'blue':
        //do this
        break
    default:
        //do this
        break
}

//function

// arrorw function, great to use with forEach

const addNums = (num = 1, num2 = 2) => {
    return num + num2
}

todos.forEach((todo) => console.log(todo))

function Person(firstName, lastName, dob){
    this.firstName = firstName
    this.lastName = lastName
    this.dob = new Date(dob)
}
//add on to the prototype a method to get birth year
Person.prototype.getBirthYear = function(){
    return this.dob.getFullYear()
}

const person1 = new Person('Desmond', 'Fung', '1-1-2001')

console.log(person1.dob)


//class

class Person {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName
        this.lastName = lastName
        this.dob = new Date(dob)
   }
   getBirthYear() {
    return this.dob.getFullYear()
    }
}