// var, let e const
var x = 10
var y = 15

if (y > 10) {
    var x = 5
    console.log(x)
}

console.log(x)

let a = 10
let b = 15

if (b > 10) {
    let a = 5
    console.log(a)
}

console.log(a)

function logName() {
    const name = 'João'
    console.log(name)
}

const name = 'Pedro'

logName()

console.log(name)

// 2 arrow function
const sum = function sum(a, b) {
    return a + b
}

const arrowSum = (a, b) => a + b

console.log(sum(5, 5))
console.log(arrowSum(5, 5))

const greeting = (name) => {
    if (name) {
        return 'Olá ' + name + '!'
    } else {
        return 'Olá'
    }
}

console.log(greeting('Cleitom'))
console.log(greeting())

const testeArrow = () => console.log('testou')

testeArrow()

const user = {
    name: 'Theo',
    sayUserName() {
        var self = this
        setTimeout(function() {
            console.log(self)
            console.log('Username: ' + self.name)
        }, 500)
    },
    sayUserNameArrow() {
        setTimeout(() => {
            console.log('Username: ' + this.name)  
        }, 700)
    }
}

//user.sayUserName()
//user.sayUserNameArrow()

// 3 filter
const arr = [1, 2, 3, 4, 5]

console.log(arr)

const highNumber = arr.filter((n) => {
    if(n >= 3) {
        return n
    }
})

console.log(highNumber)

const users = [
    {nome: 'Marcos', available: true}, 
    {nome: 'Pedro', available: false}, 
    {nome: 'Carlos', available: true}, 
    {nome: 'João', available: false}
]

const availableUsers = users.filter ((users) => users.available)
const notAvailableUsers = users.filter ((users) => !users.available)

console.log(availableUsers)
console.log(notAvailableUsers)

// 4 map
const products = [
    {name: 'Camisa', price: 10.99, category: 'Roupas'},
    {name: 'Geladeira', price: 1000, category: 'Eletro'},
    {name: 'Fogão', price: 499.99, category: 'Eletro'},
    {name: 'Calça', price: 50.99, category: 'Roupas'}
]

products.map((products) => {
    if(products.category === 'Roupas') {
        products.onSale = true
    }
})

console.log(products)

// 5 templates literals
const userName = 'Carlão'
const userAge = '45'

console.log(`Olá ${userName}, você tem ${userAge} anos de idade?`)