const { add : a1 , sub } = require('./util')

console.log(a1(1,2))
console.log(sub(1,2))


const o1 = {
    name: 'ashish'
}

let o2 = o1
o2 = {
    name: 'kothari'
}   

console.log(o1.name)