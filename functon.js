function getValue(array, key){
    let res = []
    for(let i = 0; i<array.length; i++ ){
        res.push(array[i][key])
    }
    return res
}

module.exports = getValue;


class Students{
    constructor(student){
        this.age = student.age
    }
    set name_(name_){
        this.name = name_
    }
}


let humoyun = new Students({
    age:19
})

humoyun.name_ = 'Humoyun'

console.log(humoyun.name)  // Humoyun
console.log(humoyun.age)  //  19

let davron = new Students({
    age:17
})

davron.name_ = 'Davron'
console.log(davron.name_) // Davron
console.log(davron.name)  // Davron
console.log(davron.age)   // 17