import getValue from './functon.js' // default
import mapArray from './map.js' // default


let Students = [
    {name:'Humoyun', age:19, form: 11},
    {name:'Davron', age:17, form:9}
]


console.log(Students[0])
console.log(getValue(Students, 'age')) // 19,17

console.log(mapArray(Students,'age'))