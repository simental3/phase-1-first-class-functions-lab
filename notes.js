// JavaScript Advanced Functions: First-Class Functions Lab Notes

//Globals
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];


// Callback Functions
/*
// Const Function takes a callback function as an argument:
const returnFirstTwoDrivers = function (callback) {
    return callback;
}

// Callback Function that will be passed-into the function above:
const callbackFunction = function (drivers) {
    return drivers.slice(0, 2);
}
// OR written as a regular Function Declaration:
function callbackFunction (array) {
    return array.slice(0, 2);
}
returnFirstTwoDrivers(callbackFunction(drivers));
// LOG: (2) ['Antonia', 'Nuru']

// As an arrow function:
array => array.slice(0, 2);
*/


const returnFirstTwoDrivers = function (array) {
    return array.slice(0, 2);
}
// OR written in-line with an arrow function
const returnFirstTwoDrivers = array => array.slice(0, 2);

console.log('First Two Drivers:', returnFirstTwoDrivers(drivers));
// LOG: First Two Drivers: (2) [ 'Antonia', 'Nuru' ]


/*
const returnLastTwoDrivers = function (callback) {
    return callback;
}

function callbackFunction2 (array) {
    return array.slice(- 2);
}
console.log(callbackFunction2(drivers));
// LOG: (2) ['Amari', 'Mo']
//Arrow function:
array = array.slice(- 2);
*/

const returnLastTwoDrivers = array => array.slice(-2);
console.log('Last Two Drivers:', returnLastTwoDrivers(drivers));
// LOG: Last Two Drivers: (2) ['Amari', 'Mo']


const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
console.log('Selecting Drivers:', selectingDrivers);
// => Selecting Drivers: 0: array => array.slice(0, 2)
// => Selecting Drivers: 1: array => array.slice(-2)


const createFareMultiplier = function (multiplyValue) {
    return function (integer) {
        return integer * multiplyValue;
    }
}
createFareMultiplier(2)(3);
// => 6


const fareDoubler = createFareMultiplier(2);
fareDoubler(10);
// => 20


const fareTripler = createFareMultiplier(3);
fareTripler(40);
// => 120


const selectDifferentDrivers = function (array, callbackFunction) {
    return callbackFunction(array);
};
selectDifferentDrivers(drivers, returnFirstTwoDrivers);
// LOG: (2) ['Amari', 'Mo']

/*
// Deliverables
Using the tests to guide you, create the following deliverables:
- returnFirstTwoDrivers() — Declare the variable returnFirstTwoDrivers with const & assign an anonymous function to it. The assigned function should take 1 argument,
  an array containing the names of Scuber's drivers, & return a new array containing the first two drivers in the array:
- returnLastTwoDrivers() — Declare a variable with const that is assigned an anonymous function. The assigned function should take 1 argument, an array containing the
  names of Scuber's drivers, & return a new array containing the last two drivers in the array:
- selectingDrivers — This is an array containing 2 elements: the 2 functions that we previously defined (returnFirstTwoDrivers() & returnLastTwoDrivers())
- createFareMultiplier() — This is a higher-order function that takes in one argument, an integer, & returns a function that will multiply a fare for a ride accordingly.
  For example, if createFareMultiplier() receives an argument of 4, it will return a function that takes in a fare as an argument & quadruples the fare
- fareDoubler() — Declare a variable with const & assign a function returned by createFareMultiplier() to it. Invoke createFareMultiplier() in such a way that the new
  fareDoubler() function accepts a fare as its lone argument & doubles it
- fareTripler() — Declare a variable with const & assign a function returned by createFareMultiplier() to it. Invoke createFareMultiplier() in such a way that the new
  fareTripler() function accepts a fare as its lone argument & triples it
- selectDifferentDrivers() — This function takes 2 arguments, an array of the names of Scuber's drivers & either the returnFirstTwoDrivers() or returnLastTwoDrivers()
  function. Based on these 2 arguments, selectDifferentDrivers() will return either the first two drivers or the last 2 drivers
*/






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