// JavaScript Advanced Functions: First-Class Functions Lab

//Globals
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];


// Callback Functions
const returnFirstTwoDrivers = function (array) {
    return array.slice(0, 2);
}
returnFirstTwoDrivers(drivers);
// LOG: First Two Drivers: (2) [ 'Antonia', 'Nuru' ]


const returnLastTwoDrivers = function (array) {
    return array.slice(-2);
}
returnLastTwoDrivers(drivers);
// LOG: Last Two Drivers: (2) ['Amari', 'Mo']


const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
console.log(selectingDrivers);
// => 0: ƒ (array) {
// =>        return array.slice(0, 2);
// =>    }
// => 1: ƒ (array) {
// =>        return array.slice(-2);
// =>    }


const createFareMultiplier = function (multiplyNum) {
    return function (num) {
        return num * multiplyNum;
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
// LOG: (2) [ 'Antonia', 'Nuru' ]
selectDifferentDrivers(drivers, returnLastTwoDrivers);
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