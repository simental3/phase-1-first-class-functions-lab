




// Pair with a Technical Coach (TC) Examples:
function callback(num){
    return num *2
}


function operator(someCallback, num){
    return someCallback(num)
}
operator(callback, 3)


function operator(someCallback, num){
    return someCallback(num)
}
operator(callback, 3)
// => 6


let ar = [1,2,3]
ar.forEach((num) => console.log(num * 2))
// => 2
// => 4
// => 6


let callback2 = (num) => console.log(num * 2)
ar.forEach(callback2)
// => 2
// => 4
// => 6

let callback3 = (str) => str+ "!"
let arr = ["hello", "there"]
arr.map(callback3)
(2) ['hello!', 'there!']

arr2 = ["hi", "there"]
(2) ['hi', 'there']

arr2.map(callback3)
(2) ['hi!', 'there!']


arr2.filter( (blorp) => console.log(blorp))
// LOG: hi
// LOG: there
[]
arr2.filter( (blorp) => blorp.length > 3)
['there']
function mapper(arr){
    return arr.filter( (blorp) => blorp.length > 3)
}


function mapper2(arr){
    let filteredArray = arr.filter( (blorp) => blorp.length > 3)
    return filteredArray
}
mapper2(arr)
(2) ['hello', 'there']


function mapper2(arr, len){
    let filteredArray = arr.filter( (blorp) => blorp.includes("h")).filter((word) => word.length > len)
    return filteredArray
}
mapper2(["hi", "hello", "yep", "nope", "high"], 2)
(2) ['hello', 'high']

mapper2(["hi", "hello", "yep", "nope", "high"], 1)
(3) ['hi', 'hello', 'high']


function mapper2(arr, len){
    let filteredArray = arr.filter( (blorp) => blorp.includes("h")).filter((word) => word.length > len).map(word => word + "!!")
    return filteredArray
}

mapper2(["hi", "hello", "yep", "nope", "high"],2)

(2) ['hello!!', 'high!!']
arr2.map( (word, index) => console.log(word + index) )
// LOG: hi0
// LOG: there1
(2) [, ]


function map(callback, array){
    let newArray = []
    for (let i = 0; i < array.length; i++){
       newArray = callback(array[i])
    }
    return newArray
}

let arr3 = [1,2,3,4,5]

let newCallback = (num, index) => num * index


function map(callback, array){
    let newArray = []
    for (let i = 0; i < array.length; i++){
       newArray.push(callback(array[i], i))
    }
    return newArray
}
map(newCallback, arr3)
(5) [0, 2, 6, 12, 20]