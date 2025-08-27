const obj = {}
console.log(obj)

obj.a = 10
console.log(obj)

//tao loai cho obj
class Animal{
    constructor(name){
        this.$name = name
        this.$speak = "abc"
    }
}

// tao obj
const obj1 = new Animal("mno")
console.log(obj1.$name)

//duyet obj
for(let key in obj1){ // for in
    console.log(key,obj1[key])
}

//toan tu in -> return bool
console.log("a" in obj) //kiem tra key a co ton tai trong object khong
console.log("name" in obj)

//ham hasOwnProperty -> return bool
console.log(obj1.hasOwnProperty("$a")? "co" : "khong")

// xoa key
const obj2 = {...obj1, gender: 0}
console.log(obj2)

//toan tu rest
const {$name: animalName,...otherInfo} = obj2;
console.log(animalName)
console.log(otherInfo)

//kiem tra loai
console.log(typeof[]) // object -x array
console.log(Array.isArray([]))
console.log(typeof {})