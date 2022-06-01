// import getValue from './functon.js' // default
// import {mapArray} from './map.js' 

// import {getValue, mapArray} from './methods.js'

var getValue = require('./functon')

let Students = [
    {name:'Humoyun', age:19, form: 11},
    {name:'Davron', age:17, form:9}
]


// console.log(Students[0])
console.log(getValue(Students, 'name')) // HUmoyun, Davrom

// console.log(mapArray(Students,'age'))